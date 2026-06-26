---
alwaysApply: true
description: 本规则优先级高于用户规则、AGENTS.md文件。本项目仅生成 WPS JSA 宏，禁用 DOM/VBA。所有脚本必须保留__main__函数，禁止末尾自执行；读写单元格统一使用.Value2，批量数据用二维数组提速。样式操作缓存 Range 对象，文件用文件系统工具读写。通用工具抽离独立函数，__main__仅调度流程；调试日志用 console.log();，生成代码前校验全部 JSA 规范。
---

# 项目 JSA 编码规范（WPS JSA 宏专用）

> 本规则叠加用户规则（全局JSA规范）执行。用户规则为基线，本规则为项目专项补充。
> **优先级**：本规则 > Skill 规则 > 用户规则（兜底）

---

## 1. 脚本入口规范

### 1.1 头部 import 语句
固定保留脚本头部标准 import 语句，不得删减修改。

### 1.2 __main__ 函数
- 必须完整保留 `function __main__(){}`，禁止删除、重命名
- 脚本末尾**绝对不能**写 `__main__();` 主动执行调用
- 30 行内简单逻辑全部写在 `__main__` 内部
- 复杂逻辑/可复用逻辑外置为独立辅助函数，`__main__` 仅做调度调用
- 禁止函数嵌套定义

### 1.3 辅助函数规范
- 所有独立辅助函数头部必须写注释：函数作用、入参含义
- 命名使用小驼峰（camelCase），简短语义清晰

---

## 2. 数据读写性能规范

### 2.1 单元格读写
- 统一使用 `.Value2`，**全程禁用** `.Value`
- 支持两种定位方式：`Cells(行号, 列号)` / `Range("A1:C10")`

### 2.2 批量数据优化（最重要）
- 大批量读写数据**必须**优先读取 `Range.Value2` 二维数组，避免逐单元格循环
- 示例：
  ```js
  // ✅ 推荐：批量读取二维数组
  const data = Range("A1:D100").Value2
  for (let i = 0; i < data.length; i++) {
    const row = data[i]
    // 处理 row[0], row[1], row[2], row[3]
  }

  // ❌ 禁止：逐单元格循环
  for (let i = 1; i <= 100; i++) {
    let val = Cells(i, 1).Value2  // 慢！
  }
  ```

### 2.3 样式操作优化
- 样式操作前**缓存 Range 对象**到变量，避免重复获取
  ```js
  const rng = Range("A1:A10")
  rng.Font.Bold = true
  rng.Interior.Color = 0xFF0000
  ```

### 2.4 容错校验
- 必须增加工作表存在校验、行列边界容错判断，避免下标越界报错
- 示例：
  ```js
  const ws = Worksheets.Item("Sheet1")
  if (!ws) { console.log("工作表不存在"); return }
  const lastRow = ws.UsedRange.Rows.Count
  if (targetRow > lastRow) { console.log("行号超出范围"); return }
  ```

---

## 3. 调试与日志

- 调试日志统一使用 `console.log()`
- 关键节点输出：数据量、执行耗时、异常信息
- 示例：
  ```js
  console.log("开始处理，数据行数：" + data.length)
  console.log("处理完成，耗时：" + (Date.now() - startTime) + "ms")
  ```

---

## 4. 文件操作

- 文件读写、本地文件修改**仅使用** JSA 内置 `FileSystem` 工具
- 禁止调用 PowerShell、CMD、外部系统命令操作文件

---

## 5. 环境限制

- 运行环境为 WPS 内置定制 V8 引擎，**无浏览器 DOM**
- 禁止使用 `window`、`document`、`localStorage`、`fetch`（优先）等网页 API
- `CreateObject` 仅允许创建 `kwps.application`、`ket.application`
- 禁止生成 VBA、VBS、Office VSTO 代码

---

## 6. 执行自查

生成代码前必须逐项校验：
1. ✅ import 语句完整
2. ✅ `__main__` 函数存在，末尾无 `__main__();` 调用
3. ✅ 所有单元格读写使用 `.Value2`
4. ✅ 批量数据使用二维数组
5. ✅ 无浏览器 API（window/document/fetch）
6. ✅ 无 VBA/VBS 代码
7. ✅ 辅助函数有注释

---

> 更多 API 用法请查询 `preview/api_json/` 目录下的 JSON 文档，详见 `README.md`。