import express from 'express';
import { exec } from 'child_process';
import { promisify } from 'util';
import fs from 'fs';
import path from 'path';
import { parse } from 'acorn';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const execAsync = promisify(exec);
const app = express();
const PORT = 5501;

app.use(express.json());

// CORS 跨域（页面由 5500 端口服务，API 在 5501）
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.sendStatus(200);
  next();
});

// 静态文件服务：preview 目录
app.use(express.static(path.join(__dirname, 'preview')));

// 首页
app.get('/', (req, res) => {
  res.redirect('/apiViewer.html');
});

// ---------- 语法检查 ----------
function checkSyntax(code) {
  try {
    parse(code, {
      ecmaVersion: 'latest',
      sourceType: 'module',
      locations: true,
      allowImportExportEverywhere: true,
      allowReturnOutsideFunction: true
    });
    return { ok: true };
  } catch (error) {
    return { ok: false, error: error.message };
  }
}

// 批量检查项目根目录所有 .js 文件（排除 index.js）
async function checkAllJsFiles() {
  const results = [];
  try {
    const files = await fs.promises.readdir(__dirname);
    for (const file of files) {
      if (!file.endsWith('.js') || file === 'index.js' || file === 'server.js') continue;
      const filePath = path.join(__dirname, file);
      const code = fs.readFileSync(filePath, 'utf-8');
      const r = checkSyntax(code);
      results.push({ file, ok: r.ok, error: r.ok ? null : r.error });
    }
  } catch (e) {
    results.push({ file: '*', ok: false, error: e.message });
  }
  return results;
}

// ---------- 通过 PowerShell COM 调用 WPS JSA 函数 ----------
async function callWpsFunction(funcName) {
  const ps = `$ErrorActionPreference='Stop';`
    + `try{`
    + `$app=[System.Runtime.InteropServices.Marshal]::GetActiveObject('Ket.Application');`
    + `$app.Run('${funcName}');`
    + `Write-Output 'OK'`
    + `}catch{Write-Output 'ERROR'}`;

  try {
    const { stdout } = await execAsync(
      `powershell -NoProfile -ExecutionPolicy Bypass -Command "${ps}"`
    );
    return stdout.trim();
  } catch {
    return 'ERROR';
  }
}

// ---------- API: 发送 JSA 代码到 WPS ----------
app.post('/api/run-jsa', async (req, res) => {
  const { code } = req.body;
  if (!code) {
    return res.status(400).json({ ok: false, error: '缺少代码' });
  }

  const syntax = checkSyntax(code);
  if (!syntax.ok) {
    return res.json({ ok: false, error: `语法错误: ${syntax.error}` });
  }

  const mainPath = path.join(__dirname, '__main__.js');
  try {
    fs.writeFileSync(mainPath, code, 'utf-8');
    console.log('[API] 代码已写入 __main__.js');
  } catch (e) {
    return res.json({ ok: false, error: '写入文件失败: ' + e.message });
  }

  console.log('[API] 同步到 WPS...');
  const syntaxResults = await checkAllJsFiles();
  const result = await callWpsFunction('__update__');

  if (result.includes('OK')) {
    console.log('[API] 同步成功，WPS 将自动执行 __main__');
    res.json({ ok: true, output: '代码已同步到 WPS 并执行', syntax: syntaxResults });
  } else {
    res.json({ ok: false, error: 'WPS 通信失败，请确保 WPS 已打开且信任 JS 项目访问', syntax: syntaxResults });
  }
});

app.listen(PORT, () => {
  console.log(`[Server] http://127.0.0.1:${PORT}`);
  console.log(`[Server] API: POST /api/run-jsa`);
});
