// 工具: 从 TypeScript .d.ts 文件提取 JSA 补全数据
// 用法: node tools/build-completer.js
// 输出: preview/lib/ace/jsa-types-data.js

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const DTS_DIR = path.join(ROOT, 'node_modules', 'et-jsapi-declare');
const TYPES_DIR = path.join(ROOT, 'types');
const OUTPUT = path.join(ROOT, 'preview', 'lib', 'ace', 'jsa-types-data.js');

// ===== 正则模式 =====
const INTERFACE_RE = /interface\s+(\w+)\s*\{/;
const MEMBER_RE = /\/\*\*\s*\n\s*\*\s*(.+?)\s*\n\s*\*\//s;  // JSDoc comment
const PROP_RE = /^\s*(?:readonly\s+)?(\w+)\s*(?:\?\s*)?:\s*(.+?)\s*;/;
const METHOD_RE = /^\s*(\w+)\s*\((.*?)\)\s*(?:\:\s*(.+?))?\s*;/;
const NS_RE = /declare\s+namespace\s+(\w+)\s*\{/;
const GLOBAL_RE = /declare\s+global\s*\{/;
const CONST_RE = /^\s*const\s+(\w+)\s*:\s*(.+?)\s*;?\s*$/;
const FUNC_RE = /^\s*function\s+(\w+)\s*\((.*?)\)\s*:\s*(.+?)\s*;?\s*$/;
const TYPE_RE = /^\s*type\s+(\w+)\s*=\s*(.+?)?;/;

function parseDtsFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const lines = content.split('\n');
  const result = {
    interfaces: {},
    globals: {},
    enums: {}
  };

  let inInterface = null;
  let inNamespace = null;
  let inGlobal = false;
  let currentJsDoc = '';
  let braceDepth = 0;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();

    // Track JSDoc comments
    if (trimmed.startsWith('/**')) {
      currentJsDoc = '';
      for (let j = i; j < lines.length; j++) {
        const docLine = lines[j].trim();
        if (docLine === '*/') { i = j; break; }
        if (docLine.startsWith('/**')) continue;
        const desc = docLine.replace(/^\*\s?/, '').trim();
        if (desc && desc !== '*/') currentJsDoc += (currentJsDoc ? ' ' : '') + desc;
      }
      continue;
    }

    // Track namespace
    const nsMatch = trimmed.match(NS_RE);
    if (nsMatch) {
      inNamespace = nsMatch[1];
      braceDepth = 0;
      continue;
    }
    if (inNamespace && trimmed === '}') {
      inNamespace = null;
      continue;
    }

    // Track global declarations
    if (trimmed.match(GLOBAL_RE)) {
      inGlobal = true;
      braceDepth = 0;
      continue;
    }
    if (inGlobal && trimmed === '}') {
      inGlobal = false;
      continue;
    }

    // Interface start
    const ifaceMatch = trimmed.match(INTERFACE_RE);
    if (ifaceMatch) {
      const ifaceName = ifaceMatch[1];
      // Build full name with namespace
      const fullName = inNamespace ? inNamespace + '.' + ifaceName : ifaceName;
      inInterface = {
        name: ifaceName,
        fullName: fullName,
        namespace: inNamespace,
        members: []
      };
      braceDepth = 1;
      currentJsDoc = '';
      continue;
    }

    // Track braces
    if (inInterface) {
      const opens = (line.match(/\{/g) || []).length;
      const closes = (line.match(/\}/g) || []).length;
      braceDepth += opens - closes;

      if (braceDepth <= 0) {
        // Interface end
        if (!result.interfaces[inInterface.fullName]) {
          result.interfaces[inInterface.fullName] = inInterface;
        }
        inInterface = null;
        continue;
      }

      // Parse member
      if (braceDepth === 1) {
        // Property: readonly name: Type; or name: Type;
        const propMatch = trimmed.match(PROP_RE);
        if (propMatch) {
          const isReadonly = trimmed.includes('readonly');
          // Skip internal members starting with _
          // if (propMatch[1].startsWith('_')) continue;
          
          let desc = currentJsDoc || '';
          let typeStr = propMatch[2].trim();
          // Simplify type
          typeStr = simplifyType(typeStr);

          inInterface.members.push({
            name: propMatch[1],
            kind: isReadonly ? 'property' : 'property',
            type: typeStr,
            desc: desc
          });
          currentJsDoc = '';
          continue;
        }

        // Method: name(params): ReturnType;
        const methodMatch = trimmed.match(METHOD_RE);
        if (methodMatch && !trimmed.startsWith('readonly') && !trimmed.includes(':')) {
          // Must not be another property pattern
          let desc = currentJsDoc || '';
          let paramsStr = methodMatch[2].trim();
          let returnType = methodMatch[3] ? methodMatch[3].trim() : 'void';
          returnType = simplifyType(returnType);

          inInterface.members.push({
            name: methodMatch[1],
            kind: 'method',
            type: returnType,
            params: paramsStr,
            desc: desc
          });
          currentJsDoc = '';
          continue;
        }
      }
    }

    // Global const/function in global block
    if (inGlobal) {
      const constMatch = trimmed.match(CONST_RE);
      if (constMatch) {
        let desc = currentJsDoc || '';
        let typeStr = simplifyType(constMatch[2].trim());
        const name = constMatch[1];
        result.globals[name] = { name, kind: 'const', type: typeStr, desc };
        currentJsDoc = '';
        continue;
      }

      const funcMatch = trimmed.match(FUNC_RE);
      if (funcMatch) {
        let desc = currentJsDoc || '';
        let returnType = simplifyType(funcMatch[3].trim());
        const name = funcMatch[1];
        result.globals[name] = { name, kind: 'function', type: returnType, desc };
        currentJsDoc = '';
        continue;
      }
    }
  }

  return result;
}

function simplifyType(typeStr) {
  // Remove namespace prefix for known namespaces
  typeStr = typeStr.replace(/Et\./g, '');
  typeStr = typeStr.replace(/Kso\./g, '');
  typeStr = typeStr.replace(/WPS\./g, '');
  typeStr = typeStr.replace(/Wps\./g, '');
  // Remove union with null/undefined
  typeStr = typeStr.replace(/\|\s*(null|undefined)/g, '');
  // Remove trailing |
  typeStr = typeStr.replace(/\|\s*$/g, '');
  // Remove object type
  typeStr = typeStr.replace(/\{\s*\}/, 'object');
  // Simplify common patterns
  typeStr = typeStr.replace(/(string|number|boolean|any|void)/g, function(m) { return m; });
  return typeStr.trim();
}

// ===== 解析枚举文件 =====
function parseEnumFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const result = {};

  // Match: readonly EnumName: { ... }
  const enumBlockRe = /readonly\s+(\w+)\s*:\s*\{([^}]+)\}/g;
  let match;
  while ((match = enumBlockRe.exec(content)) !== null) {
    const enumName = match[1];
    const membersStr = match[2];
    const members = {};

    // Match individual enum members: 'Key': value, or /** desc */ 'Key': value
    const memberRe = /(?:\/\*\*\s*(.*?)\s*\*\/\s*)?'([^']+)'\s*:\s*(.+?)(?:,|$)/g;
    let m;
    while ((m = memberRe.exec(membersStr)) !== null) {
      const desc = m[1] ? m[1].trim() : '';
      const key = m[2];
      const value = m[3].trim();
      // Skip lines that are just comments
      if (desc.includes('@see') || desc.includes('@link')) continue;
      members[key] = { value, desc };
    }

    result[enumName] = { name: enumName, members };
  }

  return result;
}

// ===== 解析 types/et.d.ts (declare global with nested namespace) =====
function parseEtGlobalFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const result = { globals: {} };

  // Extract the declare global { ... } block
  const globalMatch = content.match(/declare\s+global\s*\{([\s\S]*?)\n\}/);
  if (!globalMatch) return result;

  const globalBody = globalMatch[1];

  // Remove namespace Et { ... } block to avoid confusion
  const cleanedBody = globalBody.replace(/namespace\s+Et\s*\{[\s\S]*?\n\s*\}/, '');

  // Match const declarations with JSDoc
  const constRe = /\/\*\*\s*\n\s*\*\s*(.+?)\s*\n\s*\*\/\s*\n\s*const\s+(\w+)\s*:\s*(.+?)(?:\n|$)/gs;
  let m;
  while ((m = constRe.exec(cleanedBody)) !== null) {
    const name = m[2];
    const desc = m[1].trim();
    const typeStr = simplifyType(m[3].trim());
    result.globals[name] = { name, kind: 'const', type: typeStr, desc };
  }

  // Also capture const without JSDoc
  const simpleConstRe = /^\s*const\s+(\w+)\s*:\s*(.+?)(?:\n|$)/gm;
  const existingNames = new Set(Object.keys(result.globals));
  while ((m = simpleConstRe.exec(cleanedBody)) !== null) {
    const name = m[1];
    if (!existingNames.has(name)) {
      result.globals[name] = {
        name,
        kind: 'const',
        type: simplifyType(m[2].trim()),
        desc: ''
      };
    }
  }

  return result;
}
function parseCommonFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const result = { interfaces: {}, globals: {} };

  // Parse interfaces
  const ifaceRe = /export\s+interface\s+(\w+)\s*\{([^}]+)\}/g;
  let match;
  while ((match = ifaceRe.exec(content)) !== null) {
    const ifaceName = match[1];
    const body = match[2];
    const members = [];

    // Parse methods: methodName(params): returnType
    const methodRe = /\/\*\*\s*\n\s*\*\s*(.+?)\s*\n[\s\S]*?\*\/\s*\n\s*(\w+)\s*\((.*?)\)\s*(?:\:\s*(.+?))?\s*;/gs;
    let m;
    while ((m = methodRe.exec(body)) !== null) {
      members.push({
        name: m[2],
        kind: 'method',
        type: m[4] ? simplifyType(m[4].trim()) : 'void',
        params: m[3].trim(),
        desc: m[1].replace(/\s*@param.*/, '').trim()
      });
    }

    // Parse properties: readonly name: type;
    const propRe = /\/\*\*\s*\n\s*\*\s*(.+?)\s*\n[\s\S]*?\*\/\s*\n\s*(?:readonly\s+)?(\w+)\s*(?:\?\s*)?:\s*(.+?)\s*;/gs;
    let p;
    while ((p = propRe.exec(body)) !== null) {
      members.push({
        name: p[2],
        kind: 'property',
        type: simplifyType(p[3].trim()),
        desc: p[1].trim()
      });
    }

    result.interfaces[ifaceName] = { name: ifaceName, members };
  }

  // Parse global declarations inside declare global { ... }
  const globalMatch = content.match(/declare\s+global\s*\{([\s\S]*?)\n\}/);
  if (globalMatch) {
    const body = globalMatch[1];
    const lines = body.split('\n');
    let currentDoc = '';

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();

      // Track JSDoc
      if (line.startsWith('/**')) {
        currentDoc = '';
        for (let j = i + 1; j < lines.length; j++) {
          const docLine = lines[j].trim();
          if (docLine === '*/') { i = j; break; }
          if (docLine.startsWith('*')) {
            const desc = docLine.replace(/^\*\s?/, '').trim();
            if (desc) currentDoc += (currentDoc ? ' ' : '') + desc;
          }
        }
        continue;
      }

      let m;
      // const Name: Type
      if ((m = line.match(/^const\s+(\w+)\s*:\s*(.+?)\s*;?\s*$/))) {
        if (!result.globals[m[1]]) {
          result.globals[m[1]] = {
            name: m[1], kind: 'const',
            type: simplifyType(m[2].trim()),
            desc: currentDoc
          };
        }
        currentDoc = '';
        continue;
      }

      // function Name(params): ReturnType
      if ((m = line.match(/^function\s+(\w+)\s*\((.*?)\)\s*:\s*(.+?)\s*;?\s*$/))) {
        if (!result.globals[m[1]]) {
          result.globals[m[1]] = {
            name: m[1], kind: 'function',
            type: simplifyType(m[3].trim()),
            params: m[2].trim(),
            desc: currentDoc
          };
        }
        currentDoc = '';
        continue;
      }

      if (line && !line.startsWith('//') && !line.startsWith('*')) {
        currentDoc = '';
      }
    }
  }

  return result;
}

// ===== 加载已有 jsa-completer.js 中的中文描述 =====
function loadExistingDescriptions() {
  const filePath = path.join(ROOT, 'preview', 'lib', 'ace', 'jsa-completer.js');
  if (!fs.existsSync(filePath)) {
    console.log('[info] jsa-completer.js not found, skipping descriptions');
    return {};
  }

  const content = fs.readFileSync(filePath, 'utf-8');
  const descriptions = {};

  // Extract jsaObjectMembers
  const membersMatch = content.match(/var\s+jsaObjectMembers\s*=\s*(\{[\s\S]*?\n\s*\};)/);
  if (!membersMatch) {
    console.log('[warn] Could not find jsaObjectMembers in jsa-completer.js');
    return descriptions;
  }

  // Parse each object's members
  try {
    // Extract the JSON-like structure
    const objStr = membersMatch[1];
    // Parse each "ObjectName": [ ... ] pair
    const objRe = /"(\w+)"\s*:\s*\[([\s\S]*?)\]\s*(?:,|\n\s*\})/g;
    let match;
    while ((match = objRe.exec(objStr)) !== null) {
      const objName = match[1];
      const membersBlock = match[2];
      descriptions[objName] = {};

      // Parse individual members: { name: "X", type: "Y", valueType: "Z", desc: "D" }
      const memberRe = /\{\s*name:\s*"(\w+)"\s*,\s*type:\s*"(method|property)"\s*,\s*valueType:\s*"([^"]*)"\s*,\s*desc:\s*"([^"]*)"\s*\}/g;
      let m;
      while ((m = memberRe.exec(membersBlock)) !== null) {
        descriptions[objName][m[1]] = {
          type: m[2],
          valueType: m[3],
          desc: m[4].replace(/\\"/g, '"')
        };
      }
    }
  } catch (e) {
    console.log('[warn] Failed to parse descriptions:', e.message);
  }

  return descriptions;
}

// ===== 主流程 =====
function main() {
  console.log('Building JSA completion data from TypeScript .d.ts files...\n');

  // Load existing descriptions
  const existingDesc = loadExistingDescriptions();
  console.log('Loaded descriptions for ' + Object.keys(existingDesc).length + ' objects');

  // Parse et lib
  const etPath = path.join(DTS_DIR, 'lib.et.d.ts');
  console.log('\nParsing lib.et.d.ts...');
  const etData = parseDtsFile(etPath);
  console.log('  Interfaces: ' + Object.keys(etData.interfaces).length);

  // Parse kso lib
  const ksoPath = path.join(DTS_DIR, 'lib.kso.d.ts');
  console.log('Parsing lib.kso.d.ts...');
  const ksoData = parseDtsFile(ksoPath);
  console.log('  Interfaces: ' + Object.keys(ksoData.interfaces).length);

  // Parse addon
  const addonPath = path.join(DTS_DIR, 'addon.et.d.ts');
  console.log('Parsing addon.et.d.ts...');
  const addonData = parseDtsFile(addonPath);
  console.log('  Interfaces: ' + Object.keys(addonData.interfaces).length);

  // Parse types directory
  const commonPath = path.join(TYPES_DIR, 'JSA-Common.d.ts');
  console.log('Parsing JSA-Common.d.ts...');
  const commonData = parseCommonFile(commonPath);
  console.log('  Interfaces: ' + Object.keys(commonData.interfaces).length);
  console.log('  Globals: ' + Object.keys(commonData.globals).length);

  // Parse et global declarations
  const etGlobalPath = path.join(TYPES_DIR, 'et.d.ts');
  console.log('Parsing et.d.ts...');
  const etGlobalData = parseEtGlobalFile(etGlobalPath);
  console.log('  Globals: ' + Object.keys(etGlobalData.globals).length);

  // Parse enums
  const enumPath = path.join(TYPES_DIR, 'wps_et_enums.d.ts');
  console.log('Parsing wps_et_enums.d.ts...');
  const enumData = parseEnumFile(enumPath);
  console.log('  Enums: ' + Object.keys(enumData).length);

  // Merge all interfaces
  const allInterfaces = {};
  function mergeInterface(name, iface) {
    if (!allInterfaces[name]) {
      allInterfaces[name] = iface;
    } else {
      // Merge members, deduplicate by name
      const existingNames = new Set(allInterfaces[name].members.map(m => m.name));
      for (const member of iface.members) {
        if (!existingNames.has(member.name)) {
          allInterfaces[name].members.push(member);
          existingNames.add(member.name);
        }
      }
    }
  }

  for (const [name, iface] of Object.entries(etData.interfaces)) mergeInterface(name, iface);
  for (const [name, iface] of Object.entries(ksoData.interfaces)) mergeInterface(name, iface);
  for (const [name, iface] of Object.entries(addonData.interfaces)) mergeInterface(name, iface);
  for (const [name, iface] of Object.entries(commonData.interfaces)) mergeInterface(name, iface);

  // Merge globals
  const allGlobals = { ...commonData.globals, ...etGlobalData.globals, ...etData.globals, ...ksoData.globals };

  // Enrich with existing descriptions
  let enrichedCount = 0;
  for (const [objName, iface] of Object.entries(allInterfaces)) {
    const descData = existingDesc[objName];
    if (descData) {
      for (const member of iface.members) {
        const existingMember = descData[member.name];
        if (existingMember && existingMember.desc) {
          member.desc = existingMember.desc;
          enrichedCount++;
        }
      }
    }
  }
  console.log('\nEnriched ' + enrichedCount + ' members with existing descriptions');

  // Build output data
  const outputData = {
    _generated: new Date().toISOString(),
    _source: 'TypeScript .d.ts files',
    interfaces: allInterfaces,
    globals: allGlobals,
    enums: enumData
  };

  // Generate JS file
  const jsonStr = JSON.stringify(outputData, null, 2);
  const jsContent = `// Auto-generated from TypeScript .d.ts files by build-completer.js
// DO NOT EDIT MANUALLY
// Generated at: ${new Date().toISOString()}
// Interfaces: ${Object.keys(allInterfaces).length}, Globals: ${Object.keys(allGlobals).length}, Enums: ${Object.keys(enumData).length}

var JSA_TYPES_DATA = ${jsonStr};
`;

  fs.writeFileSync(OUTPUT, jsContent, 'utf-8');
  console.log('\n✓ Written to: ' + OUTPUT);
  console.log('  Total interfaces: ' + Object.keys(allInterfaces).length);
  console.log('  Total globals: ' + Object.keys(allGlobals).length);
  console.log('  Total enums: ' + Object.keys(enumData).length);

  // Print top interfaces by member count
  const sorted = Object.entries(allInterfaces)
    .sort((a, b) => b[1].members.length - a[1].members.length)
    .slice(0, 15);
  console.log('\nTop interfaces by member count:');
  for (const [name, iface] of sorted) {
    console.log('  ' + name + ': ' + iface.members.length + ' members');
  }
}

main();
