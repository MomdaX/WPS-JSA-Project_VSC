/**
 * generateManifest.js — 扫描 api_json/ 目录，生成 manifest.json 清单文件
 * 用法：node preview/generateManifest.js
 * 每次在 api_json/ 中新增或删除 JSON 文件后，运行此脚本更新清单
 */
const fs = require('fs');
const path = require('path');

const apiDir = path.join(__dirname, 'api_json');
const manifestPath = path.join(apiDir, 'manifest.json');

const files = fs.readdirSync(apiDir)
  .filter(f => f.endsWith('.json') && f !== 'manifest.json')
  .map(f => f.replace('.json', ''))
  .sort();

const grouped = {};
files.forEach(name => {
  const letter = name.charAt(0).toUpperCase();
  if (!grouped[letter]) grouped[letter] = [];
  grouped[letter].push(name);
});

const manifest = {
  total: files.length,
  letters: Object.keys(grouped).sort(),
  grouped: grouped,
  all: files
};

fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2), 'utf8');
console.log('manifest.json 已生成，共 ' + files.length + ' 个对象');