// import {windowManager} from 'node-window-manager';// 用于管理窗口
// import robot from 'robotjs';//用于模拟鼠标和键盘操作
import { exec } from "child_process";//用于执行 PowerShell 命令
import { promisify } from "util";//用于将回调函数转换为 Promise
import fs from "fs";//用于文件操作
import path from "path";//用于路径操作
import { parse } from "acorn";//用于解析 JavaScript 代码

const execAsync = promisify(exec);

// ---------- 语法检查 ----------
function checkSyntaxWithAcorn(filePath) {
    let code;
    try {
        code = fs.readFileSync(filePath, 'utf8');
        parse(code, {
            ecmaVersion: 'latest',
            sourceType: 'module',
            locations: true,
        });
        console.log(`✅ ${filePath}: 语法正确`);
        return true;
    } catch (error) {
        console.error(`❌ ${filePath}: 语法错误`);
        console.error(`❌ 错误: ${error.message}`);
        return false;
    }
}

// ---------- 通用 WPS 函数调用 ----------
/**
 * 通过 PowerShell 调用 WPS 中指定的 JSA 函数
 * @param {string} funcName - 要调用的 JSA 函数名（如 "__update__"）
 * @returns {Promise<string>} 返回 "OK" 或 "ERROR"
 */
async function runWPSFunction(funcName) {
    const psCommand = `$ErrorActionPreference='Stop';try{$excelApp=[System.Runtime.InteropServices.Marshal]::GetActiveObject('Ket.Application');$excelApp.Run('${funcName}');Write-Output 'OK'}catch{Write-Output 'ERROR'}`;

    try {
        const { stdout } = await execAsync(
            `powershell -NoProfile -ExecutionPolicy Bypass -Command "${psCommand}"`
        );
        return stdout.trim();
    } catch {
        return "ERROR";
    }
}

// ---------- 主流程 ----------
async function check(folderPath) {
    for await (const file of await fs.promises.readdir(folderPath)) {
        if (!file.endsWith('.js') || file == 'index.js')
            continue
        const filePath = path.join(folderPath, file)
        if (!checkSyntaxWithAcorn(filePath)) {
            console.error('❌ 代码同步失败，请检查代码语法')
            process.exit(1)
        }
    }
}

// 1. 语法检查
//await check('./lib')
await check('./src')
console.log('-'.repeat(80))

// 2. 同步代码到 WPS（调用 __update__）
const syncResult = await runWPSFunction('__update__');
console.log(`【${new Date().toLocaleTimeString()}】${syncResult.includes('OK') ? ' 同步成功并执行__main__函数 ✅' : ' 同步失败 ❌'}`);
process.exit(0);

// 3. 同步成功后运行 __main__,在__update__最后一行也有执行了：Application.OnTime(new Date(new Date() + 3600000 * 8 + 1000), '__main__')
// if (syncResult.includes('OK')) {
//     const runResult = await runWPSFunction('main');
//     console.log(`【${new Date().toLocaleTimeString()}】${runResult.includes('OK') ? '执行成功' : '执行失败'}`);
// }
