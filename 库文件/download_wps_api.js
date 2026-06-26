import https from 'https';
import fs from 'fs';
import path from 'path';

// ==================== 配置 ====================
const BASE_NAV_URL = 'https://qn.cache.wpscdn.cn/encs/doc/office_v19/navjson';
const BASE_TOPIC_URL = 'https://qn.cache.wpscdn.cn/encs/doc/office_v19/topics';
const API_PATH = 'WPS 基础接口/宏编辑器API参考';
const OUTPUT_JSON_DIR = 'd:/wps-jsaIDE/WPS-JSA/WPS-JSA-Project/preview/api_json';

const REFERER_NAV = 'https://qn.cache.wpscdn.cn/encs/doc/office_v19/webhelpcontents.htm';
const REFERER_TOPIC = 'https://qn.cache.wpscdn.cn/encs/doc/office_v19/webhelpframe.htm';
const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/150.0.0.0 Safari/537.36 Edg/150.0.0.0';

// ==================== 工具函数 ====================

// 发起 HTTPS GET 请求，返回 JSON 对象
function httpGet(url, referer) {
  return new Promise((resolve, reject) => {
    const urlObj = new URL(url);
    const options = {
      hostname: urlObj.hostname,
      path: urlObj.pathname + urlObj.search,
      headers: {
        'User-Agent': UA,
        'Referer': referer || REFERER_NAV,
        'Accept': '*/*',
        'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8'
      }
    };

    https.get(options, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400) {
        return httpGet(res.headers.location, referer).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        reject(new Error('HTTP ' + res.statusCode));
        return;
      }
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          resolve(JSON.parse(data));
        } catch (e) {
          resolve(data);
        }
      });
    }).on('error', reject);
  });
}

// 延迟函数
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// ==================== 核心逻辑 ====================

// 递归遍历 nav.json，收集所有 apidir 类型的对象及其路径
function encodePath(p) {
  return p.split('/').map(encodeURIComponent).join('/');
}

async function collectApiObjects(navPath) {
  const results = [];
  const navUrl = BASE_NAV_URL + '/' + encodePath(navPath) + '/nav.json';
  let navData;
  try {
    navData = await httpGet(navUrl, REFERER_NAV);
  } catch (err) {
    console.log('  警告：无法获取导航 ' + navPath + ' - ' + err.message);
    return results;
  }

  if (!Array.isArray(navData)) return results;

  for (const item of navData) {
    const title = item.title || '';
    const type = item.type || '';
    if (!title) continue;

    if (type === 'apidir') {
      const objPath = navPath + '/' + title;
      results.push({ name: title, path: objPath });
    } else if (type === 'normaldir' || item.fold === true) {
      const subPath = navPath + '/' + title;
      const subResults = await collectApiObjects(subPath);
      results.push(...subResults);
    }
  }

  return results;
}

// 清理 HTML 为纯文本
function stripHtml(html) {
  if (!html) return '';
  return html
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<p[^>]*>/gi, '\n')
    .replace(/<\/p>/gi, '\n')
    .replace(/<li[^>]*>/gi, '\n- ')
    .replace(/<\/li>/gi, '')
    .replace(/<strong>/gi, '**')
    .replace(/<\/strong>/gi, '**')
    .replace(/<em>/gi, '*')
    .replace(/<\/em>/gi, '*')
    .replace(/<code>/gi, '`')
    .replace(/<\/code>/gi, '`')
    .replace(/<pre[^>]*>/gi, '\n```js\n')
    .replace(/<\/pre>/gi, '\n```\n')
    .replace(/<[^>]*>/g, '')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, '\'')
    .replace(/&nbsp;/g, ' ')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

// 从 objDetail.json 生成单个对象的 Markdown
function generateObjectMarkdown(detail) {
  let md = '';

  md += '## ' + detail.name + '\n\n';

  if (detail.description) {
    md += stripHtml(detail.description) + '\n\n';
  }

  if (detail.summary) {
    md += '### 说明\n\n' + stripHtml(detail.summary) + '\n\n';
  }

  // 属性
  if (detail.properties && detail.properties.length > 0) {
    md += '### 属性\n\n';
    md += '| 名称 | 类型 | 只读 | 说明 |\n';
    md += '|------|------|------|------|\n';
    for (const prop of detail.properties) {
      const name = prop.name || '';
      const type = prop.type || '';
      const readonly = prop.readonly ? '是' : '否';
      const desc = stripHtml(prop.description || prop.summary || '').replace(/\n/g, ' ').substring(0, 120);
      md += '| ' + name + ' | ' + type + ' | ' + readonly + ' | ' + desc + ' |\n';
    }
    md += '\n';

    for (const prop of detail.properties) {
      md += '#### ' + prop.name + '\n\n';
      if (prop.description) {
        md += stripHtml(prop.description) + '\n\n';
      }
      if (prop.examples) {
        md += '**示例：**\n\n' + stripHtml(prop.examples) + '\n\n';
      }
      md += '---\n\n';
    }
  }

  // 方法
  if (detail.functions && detail.functions.length > 0) {
    md += '### 方法\n\n';
    md += '| 名称 | 返回类型 | 说明 |\n';
    md += '|------|----------|------|\n';
    for (const func of detail.functions) {
      const name = func.name || '';
      const type = func.type || '';
      const desc = stripHtml(func.description || func.summary || '').replace(/\n/g, ' ').substring(0, 120);
      md += '| ' + name + ' | ' + type + ' | ' + desc + ' |\n';
    }
    md += '\n';

    for (const func of detail.functions) {
      md += '#### ' + func.name + '\n\n';
      if (func.description) {
        md += stripHtml(func.description) + '\n\n';
      }
      if (func.examples) {
        md += '**示例：**\n\n' + stripHtml(func.examples) + '\n\n';
      }
      md += '---\n\n';
    }
  }

  return md;
}

async function main() {
  console.log('=== WPS API JSON 批量下载工具 ===\n');

  // 确保输出目录存在
  if (!fs.existsSync(OUTPUT_JSON_DIR)) {
    fs.mkdirSync(OUTPUT_JSON_DIR, { recursive: true });
  }

  // ====== 第一步：递归收集所有 API 对象 ======
  console.log('[1/3] 递归收集 API 对象...');
  console.log('  起点: ' + API_PATH);

  const apiObjects = await collectApiObjects(API_PATH);
  const uniqueObjs = [...new Map(apiObjects.map(o => [o.name, o])).values()];

  console.log('  找到 ' + uniqueObjs.length + ' 个对象:');
  console.log('  ' + uniqueObjs.map(o => o.name).join(', '));

  if (uniqueObjs.length === 0) {
    console.log('  未找到任何 API 对象');
    return;
  }

  // ====== 第二步：下载每个对象的 objDetail.json ======
  console.log('\n[2/3] 下载 ' + uniqueObjs.length + ' 个对象的详情数据...');
  const errors = [];
  let successCount = 0;

  for (let i = 0; i < uniqueObjs.length; i++) {
    const obj = uniqueObjs[i];
    const detailUrl = BASE_TOPIC_URL + '/' + encodePath(obj.path) + '/objDetail.json';

    console.log('  [' + (i + 1) + '/' + uniqueObjs.length + '] ' + obj.name);
    try {
      const detail = await httpGet(detailUrl, REFERER_TOPIC);

      // 保存原始 JSON
      const jsonFile = path.join(OUTPUT_JSON_DIR, obj.name + '.json');
      fs.writeFileSync(jsonFile, JSON.stringify(detail, null, 2), 'utf8');

      const propCount = (detail.properties || []).length;
      const funcCount = (detail.functions || []).length;
      console.log('    OK - 属性: ' + propCount + ', 方法: ' + funcCount);
      successCount++;
    } catch (err) {
      console.log('    失败: ' + err.message);
      errors.push({ name: obj.name, error: err.message });
    }

    await sleep(200);
  }

  // ====== 第三步：报告 ======
  console.log('\n[3/3] 完成报告');
  console.log('  成功下载: ' + successCount + ' 个对象');
  console.log('  失败: ' + errors.length + ' 个');
  if (errors.length > 0) {
    console.log('  失败列表:');
    for (const e of errors) {
      console.log('    - ' + e.name + ': ' + e.error);
    }
  }
  console.log('  保存目录: ' + OUTPUT_JSON_DIR);
  console.log('\n=== 完成 ===');
}

main().catch(err => {
  console.error('执行失败:', err.message);
  console.error(err.stack);
  process.exit(1);
});