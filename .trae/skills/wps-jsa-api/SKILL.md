---
name: "wps-jsa-api"
description: "WPS 表格 JSA API 参考查询技能。提供完整的223个WPS表格对象API文档，包含属性、方法、示例代码。Invoke when writing WPS JSA code or need to look up WPS table API usage."
---

# WPS JSA API 参考查询技能

## 概述

本技能提供完整的 **WPS 表格 API 官方文档**，包含 **223个** WPS JSA 对象的完整参考信息。编写 WPS JSA 代码时，通过本技能快速查询特定对象的属性、方法和示例代码。

## 初始化流程

当本技能被调用时，按以下顺序执行：

```
1. 读取 preview/api_json/README.md → 获取对象索引、JSON结构、解析指南
2. 判断用户需求 → 快速模式 or 完整查询？
3. 快速模式：直接基于项目规则 + 用户规则生成代码，不读 JSON
4. 完整查询：读取对应 {对象名}.json → 提取属性/方法 → 适配规范 → 生成代码
```

---

## 快速模式 vs 完整查询

### 快速模式（不查询 JSON，直接从规则生成）

以下高频场景**无需**读取 JSON 文件，直接基于项目规则和用户规则生成代码：

| 场景 | 涉及的 API | 来源 |
|------|-----------|------|
| 单元格读写 | `Range.Value2`、`Cells().Value2` | 项目规则 + 用户规则 |
| 字体加粗/斜体/字号 | `Font.Bold`、`Font.Italic`、`Font.Size` | 项目规则 + 用户规则 |
| 单元格背景色 | `Interior.Color` | 项目规则 + 用户规则 |
| 边框设置 | `Borders`、`Border` | 项目规则 + 用户规则 |
| 工作表激活/添加/删除 | `Worksheet.Activate`、`Worksheets.Add` | 项目规则 + 用户规则 |
| 工作簿打开/保存 | `Workbooks.Open`、`Workbook.Save` | 项目规则 + 用户规则 |
| 批量数据处理 | 二维数组读写 | 项目规则 |
| 获取已用区域 | `UsedRange`、`UsedRange.Rows.Count` | 项目规则 |

### 完整查询模式（必须读取 JSON 文件）

以下情况**必须**读取 `preview/api_json/{对象名}.json`：

| 场景 | 示例 |
|------|------|
| 不熟悉的 API | `PivotTable`、`Chart`、`Slicer` 等低频对象 |
| 不确定属性是否存在 | 如 `Range.CurrentRegion`、`Range.SpecialCells` |
| 需要确认参数/返回值类型 | 如 `Sort.Apply` 的参数格式 |
| 需要官方示例代码 | 复杂 API 的正确用法 |
| 用户明确要求查文档 | "帮我查一下这个属性怎么用" |

> **判断原则**：如果涉及的对象/属性/方法在项目规则和用户规则中已有明确说明，走快速模式；否则走完整查询。

---

## 查询步骤（完整模式）

1. **确定对象名**：根据需求确定 WPS 对象名（如 `Range`、`Worksheet`、`PivotTable`）
2. **读取 JSON 文件**：使用 Read 工具读取 `preview/api_json/{对象名}.json`
3. **定位属性/方法**：在 `properties[]` 数组中按 `name` 字段匹配目标
4. **提取示例代码**：从 `examples` 字段（HTML格式）中解析 `<pre><code>` 内容，解码 HTML 实体
5. **适配项目规范**：将官方示例转换为项目规范代码（见下方"示例适配规范"）
6. **生成代码**：生成符合项目规则和用户规则的 JSA 代码

> **完整对象索引和 JSON 结构详解**：见 `preview/api_json/README.md`（该文件包含223个对象的完整索引、JSON字段说明、HTML实体解码指南）。

---

## 示例适配规范

官方示例代码来自 WPS 文档，格式较为冗长，必须转换为项目规范风格：

### 规则 1：省略 Application 前缀

```js
// ❌ 官方示例风格
Application.Worksheets.Item("Sheet1").Range("A1:A5").Font.Bold = true

// ✅ 项目规范风格
Worksheets.Item("Sheet1").Range("A1:A5").Font.Bold = true
// 或更简洁
Sheets.Item("Sheet1").Range("A1:A5").Font.Bold = true
```

### 规则 2：Worksheets.Item("Sheet1") 改为简写或变量

```js
// ✅ 缓存 Worksheets 引用
const ws = Worksheets.Item("Sheet1")
ws.Range("A1").Value2 = 100

// ✅ 当前活动工作表
const ws = ActiveSheet
```

### 规则 3：官方示例中的 `function test()` 改为 `__main__`

```js
// ❌ 官方示例
function test() {
  Range("A1").Value2 = 100
}

// ✅ 项目规范
function __main__() {
  Range("A1").Value2 = 100
}
```

### 规则 4：保留官方 API 调用方式

即使转换风格，**API 方法名、参数顺序、参数写法**必须与官方示例完全一致：

```js
// ✅ 官方示例中 Sort.Apply 的调用方式必须原样保留
const rng = Range("A1:C10")
rng.Sort.SortFields.Add(Range("A1"), 0, 1, 0)  // 参数顺序必须与官方一致
rng.Sort.Apply()
```

---

## 对象命名规范

根据 WPS 官方文档，所有核心对象关键字首字母必须大写：

**✅ 正确**：`Application`、`Workbooks`、`Workbook`、`Sheets`、`Worksheet`、`Range`、`Cells`、`Rows`、`Columns`、`Font`、`Interior`、`Borders`

**❌ 错误**：`application`、`workbook`、`range`、`cells`

---

## 优先级

```
项目规则 (.trae/rules/jsa.md)  >  本技能  >  用户规则（全局JSA规范，兜底）
```

---

## 强制要求

1. **快速模式优先**：高频场景（Value2、Font、Interior、Borders、Workbook/Worksheet 基本操作）直接基于规则生成，不查 JSON
2. **完整查询按需**：低频对象、不确定属性、复杂 API 必须读取 JSON 文件
3. **必须遵循示例**：生成的 API 调用方式必须与官方示例一致
4. **必须适配规范**：官方示例代码必须转换为项目规范风格（省略 Application、用 __main__ 替代 test）
5. **必须首字母大写**：所有 WPS 对象关键字首字母大写
6. **必须叠加规范**：同时遵守项目规则和用户规则

违反上述要求生成的代码可能导致运行错误。

---

## 查询示例

**用户问**："Range 对象的 CurrentRegion 怎么用？"

**判断**：`CurrentRegion` 不在高频白名单中 → 走完整查询

**流程**：
1. 读取 `preview/api_json/Range.json`
2. 在 `properties[]` 中搜索 `name == "CurrentRegion"`
3. 提取 `description` 和 `examples`
4. 将官方示例转换为项目规范风格
5. 生成答案：
   ```js
   function __main__() {
     const rng = Range("A1").CurrentRegion
     console.log("当前区域行数：" + rng.Rows.Count)
   }
   ```