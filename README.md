# WPS-JSA-Project

> WPS JSA（JavaScript API）宏开发环境，基于 VSCode，支持代码自动同步、语法检测、一键执行。

## 功能特性

- **代码自动同步**：修改 `.js` 文件后自动同步到 WPS Office 宏编辑器并执行
- **语法检测**：基于 Acorn 解析器，同步前自动校验 JS 语法，避免错误代码注入
- **WPS API 文档查看器**：内置完整的 WPS 表格 API 离线文档（200+ 对象），支持搜索和分类浏览
- **TypeScript 类型声明**：提供 WPS JSA 常用对象的 `.d.ts` 类型声明，增强 VSCode 智能提示
- **热重载**：使用 nodemon 监听文件变化，保存即触发同步

## 快速开始

### 环境要求

- [Node.js](https://nodejs.org/) >= 18
- [WPS Office](https://www.wps.cn/)（需支持 JSA 宏）
- Windows 操作系统

### 安装

```bash
git clone https://github.com/MomdaX/WPS-JSA-Project_VSC.git
cd WPS-JSA-Project_VSC
npm install
```

### 使用

1. 打开 WPS Office，进入宏编辑器（`Ctrl+Q`）
2. 将你的 JSA 代码保存为 `.js` 文件放入项目根目录
3. 运行同步脚本：

```bash
npm run jsa
```

4. 修改代码保存后，nodemon 会自动检测变更并同步到 WPS 执行

## 项目结构

```
WPS-JSA-Project/
├── index.js                  # 主入口：代码同步与执行引擎
├── __main__.js               # WPS JSA 宏模板（__main__ 函数入口）
├── package.json              # 项目依赖与脚本
├── .gitignore                # Git 忽略规则
├── types/                    # TypeScript 类型声明
│   ├── et.d.ts               # WPS 表格对象类型
│   ├── JSA-Common.d.ts       # JSA 公共类型
│   └── wps_et_enums.d.ts     # WPS 表格枚举类型
├── preview/                  # WPS API 离线文档查看器
│   ├── apiViewer.html        # 文档查看器入口
│   ├── lib/                  # 前端库文件
│   ├── prism/                # 代码高亮
│   ├── api_json/             # API 文档数据（200+ JSON 文件）
│   └── img/                  # 图片资源
└── .trae/                    # IDE 规则与技能配置
```

## JSA 开发规范

本项目遵循以下 WPS JSA 开发规范：

- 脚本必须保留 `__main__` 函数，禁止末尾自执行
- 单元格读写统一使用 `.Value2`
- 批量数据用二维数组提速
- 通用工具抽离独立函数，`__main__` 仅调度流程
- 调试日志用 `console.log()`
- 禁用 DOM/VBA，仅使用 WPS JSA 原生 API

## 技术栈

| 依赖 | 用途 |
|------|------|
| [acorn](https://github.com/acornjs/acorn) | JS 语法解析与校验 |
| [nodemon](https://nodemon.io/) | 文件监听与热重载 |
| [node-window-manager](https://github.com/sentialx/node-window-manager) | 窗口管理（激活 WPS） |
| [robotjs](http://robotjs.io/) | 模拟键盘操作 |
| [lodash](https://lodash.com/) | 工具函数库 |
| [pinyin-pro](https://github.com/zh-lx/pinyin-pro) | 汉字转拼音 |
| [cnchar](https://github.com/theajack/cnchar) | 汉字工具库 |

## API 文档查看器

在浏览器中打开 `preview/apiViewer.html` 即可查看完整的 WPS 表格 API 文档，包含：

- 200+ 对象（Workbook、Worksheet、Range、Chart 等）
- 属性、方法、事件说明
- 代码示例
- 科技蓝主题，支持搜索过滤

## License

MIT