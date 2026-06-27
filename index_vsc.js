import { windowManager } from "node-window-manager"
import robot from "robotjs"
import fs from "fs"
import path from "path"
import { parse } from "acorn"

// 检查代码语法是否正确
function checkSyntaxWithAcorn(filePath) {
    let code
    try {
        code = fs.readFileSync(filePath, 'utf8');
        // 解析代码
        parse(code, {
            ecmaVersion: 'latest',
            sourceType: 'module',
            locations: true,
            onInsertedSemicolon: null,
            onTrailingComma: null,
            allowReserved: true,
            allowReturnOutsideFunction: false,
            allowImportExportEverywhere: false,
            allowAwaitOutsideFunction: false,
            allowSuperOutsideMethod: false,
            allowHashBang: true,
        });
        console.log(`✅ ${filePath}: 语法正确`);
        return true
    } catch (error) {
        console.error(`❌ ${filePath}: 语法错误`);
        console.error(`  错误: ${error.message}`);
        console.error(`  源码片段: ${error.raisedAt ? code.slice(error.pos, error.raisedAt) : ''}`);
        return false
    }
}

console.log('-'.repeat(80))
for await (const file of await fs.promises.readdir('./')) {
    if (!file.endsWith('.js') || file == 'index.js' || file == 'index_vsc.js' || file == 'index_trae.js' || file == 'server.js')
        continue
    const filePath = path.join(process.cwd(), file)
    if (!checkSyntaxWithAcorn(filePath)) {
        console.error('代码同步失败，请检查代码语法')
        process.exit(1)
    }
}

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))
const windows = windowManager.getWindows()
const wpsWindow = windows.find(w => w.getTitle().endsWith('WPS Office'))

if (!wpsWindow) {
    console.error(`【${new Date().toLocaleTimeString()}】找不到WPS Office窗口`)
    process.exit(1)
}
console.log(`【${new Date().toLocaleTimeString()}】激活WPS Office窗口`)
wpsWindow.isVisible() || wpsWindow.restore()
await delay(100)
wpsWindow.bringToTop()
await delay(300)
console.log(`【${new Date().toLocaleTimeString()}】同步并执行代码`)
console.log('-'.repeat(80))
robot.keyTap('q', 'control')