---
alwaysApply: false
description: 本规则优先级高于用户规则、AGENTS.md文件。本项目仅生成 WPS JSA 宏，禁用 DOM/VBA。所有脚本必须保留__main__函数，禁止末尾自执行；读写单元格统一使用.Value2，批量数据用二维数组提速。样式操作缓存 Range 对象，文件用文件系统工具读写。通用工具抽离独立函数，__main__仅调度流程；调试日志用 console.log();，生成代码前校验全部 JSA 规范。
---
