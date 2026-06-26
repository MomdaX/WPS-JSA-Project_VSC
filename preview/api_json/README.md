# WPS JSA API JSON 文档索引

> 本目录包含 **223个** WPS 表格对象的独立 JSON 格式 API 文档。
> 每个 `.json` 文件对应一个 WPS 对象，**文件名 = 对象名**（区分大小写）。

---

## 目录

- [快速查询流程](#快速查询流程)
- [JSON 文件结构详解](#json-文件结构详解)
- [示例代码解析指南](#示例代码解析指南)
- [常用对象快速入口](#常用对象快速入口)
- [查询示例](#查询示例)
- [完整对象索引](#完整对象索引)

---

## 快速查询流程

> **注意**：高频场景（如 `.Value2`、`Font.Bold`、`Interior.Color`、`Borders` 等）无需读 JSON，直接基于项目规则生成。详见 `.trae/skills/wps-jsa-api/SKILL.md` 中的"快速模式"白名单。以下为**完整查询模式**流程。

```
用户需求 → 确定对象名 → 读取 {对象名}.json → 定位属性/方法 → 提取示例代码 → 适配项目规范 → 生成JSA代码
```

| 步骤 | 操作 | 工具 |
|------|------|------|
| 1 | 根据需求确定 WPS 对象名（如 `Range`、`Worksheet`） | 查下方索引 |
| 2 | 读取 `preview/api_json/{对象名}.json` | `Read` 工具 |
| 3 | 在 `properties[]` 数组中搜索目标属性/方法 | 按 `name` 字段匹配 |
| 4 | 提取 `description`（说明）和 `examples`（示例代码） | 解析 HTML |
| 5 | 将官方示例转换为项目规范风格（省略Application、test→__main__等） | 见 SKILL.md 示例适配规范 |
| 6 | 生成符合项目规则和用户规则的 JSA 代码 | 遵循项目规范 |

---

## JSON 文件结构详解

每个 JSON 文件的顶层结构：

```json
{
  "name": "对象名",
  "summary": "对象概述（HTML格式，含基础示例）",
  "description": "对象详细说明（HTML格式）",
  "category": "et",
  "properties": [ ... ],
  "functions": []
}
```

### `properties[]` 数组中每个元素的字段

| 字段 | 类型 | 说明 |
|------|------|------|
| `name` | `string` | **属性/方法名**（如 `"Bold"`、`"CurrentRegion"`、`"Activate"`） |
| `summary` | `string` | 补充说明（HTML格式，可能为空） |
| `description` | `string` | **属性/方法的功能说明**（HTML格式，含类型信息、只读性） |
| `examples` | `string` | **官方示例代码**（HTML格式，`<pre><code>` 包裹 JSA 代码） |
| `type` | `string` | 返回值类型（如 `"boolean"`、`"Range"`、`"any"`） |
| `readonly` | `boolean` | 是否只读（`true` = 只读，`false` = 可读写） |

### 实际 JSON 片段示例（Font.json 的 Bold 属性）

```json
{
  "name": "Bold",
  "summary": "",
  "description": "<p>如果字体格式为加粗，则该属性值为 <strong>True</strong>。<strong>Variant</strong> 类型，可读写。</p>\n",
  "examples": "<div id=\"vstable\"><table>...<pre><code>/*本示例将工作表 Sheet1中单元格 A1:A5 区域中的字体设为加粗*/\nfunction test() {\n    Application.Worksheets.Item(\"Sheet1\").Range(\"A1:A5\").Font.Bold = true\n}</code></pre></table></div>",
  "type": "any",
  "readonly": false
}
```

---

## 示例代码解析指南

`examples` 字段中的 JSA 代码被包裹在 HTML 标签内，格式固定：

```
<div id="vstable"><table><tbody><tr><th>示例代码</th></tr>
<tr><td><pre><code> ← 从这里开始是 JSA 代码
/*注释*/
function test() {
    // 实际代码
}
</code></pre></td></tr></tbody></table></div>
```

### 提取规则

1. **定位代码块**：找到 `<pre><code>` 和 `</code></pre>` 之间的内容
2. **解码 HTML 实体**：`&quot;` → `"`、`&lt;` → `<`、`&gt;` → `>`、`&amp;` → `&`
3. **去除高亮标签**：忽略 `<span class="hljs-*">` 等语法高亮标签，只提取纯文本
4. **遵循示例语法**：生成的代码必须与官方示例中的对象调用方式、参数写法保持一致

### 常见 HTML 实体对照

| 实体 | 字符 | 实体 | 字符 |
|------|------|------|------|
| `&quot;` | `"` | `&lt;` | `<` |
| `&gt;` | `>` | `&amp;` | `&` |
| `&#39;` | `'` | `&nbsp;` | 空格 |

---

## 常用对象快速入口

### 核心对象（最常用）

| 对象 | JSON 文件 | 用途 | 典型场景 |
|------|-----------|------|----------|
| **Application** | `Application.json` | WPS 应用程序顶层对象 | 获取活动工作簿、活动单元格、屏幕更新控制 |
| **Workbooks** | `Workbooks.json` | 工作簿集合 | 打开/关闭/新建工作簿 |
| **Workbook** | `Workbook.json` | 单个工作簿 | 保存、关闭、工作表操作 |
| **Worksheets** | `Worksheets.json` | 工作表集合 | 添加/删除/遍历工作表 |
| **Worksheet** | `Worksheet.json` | 单个工作表 | 激活、保护、名称操作 |
| **Range** | `Range.json` | 单元格/区域操作 | 读写值、格式化、公式、查找 |
| **Sheets** | `Sheets.json` | 所有工作表（含图表） | 遍历所有类型工作表 |

### 样式与格式对象

| 对象 | JSON 文件 | 用途 |
|------|-----------|------|
| **Font** | `Font.json` | 字体样式（加粗、斜体、字号、颜色等） |
| **Interior** | `Interior.json` | 单元格填充（背景色、图案） |
| **Borders** | `Borders.json` | 边框集合 |
| **Border** | `Border.json` | 单条边框（线型、颜色、粗细） |
| **Style** | `Style.json` | 单元格样式 |
| **Styles** | `Styles.json` | 样式集合 |
| **FormatCondition** | `FormatCondition.json` | 条件格式规则 |
| **FormatConditions** | `FormatConditions.json` | 条件格式规则集合 |

### 图表对象

| 对象 | JSON 文件 | 用途 |
|------|-----------|------|
| **Chart** | `Chart.json` | 图表对象 |
| **Charts** | `Charts.json` | 图表工作表集合 |
| **ChartObject** | `ChartObject.json` | 嵌入图表对象 |
| **ChartObjects** | `ChartObjects.json` | 嵌入图表集合 |
| **Series** | `Series.json` | 数据系列 |
| **SeriesCollection** | `SeriesCollection.json` | 数据系列集合 |
| **Axes** | `Axes.json` | 坐标轴集合 |
| **Axis** | `Axis.json` | 单个坐标轴 |

### 数据透视表对象

| 对象 | JSON 文件 | 用途 |
|------|-----------|------|
| **PivotTable** | `PivotTable.json` | 数据透视表 |
| **PivotTables** | `PivotTables.json` | 数据透视表集合 |
| **PivotField** | `PivotField.json` | 透视表字段 |
| **PivotFields** | `PivotFields.json` | 透视表字段集合 |
| **PivotCache** | `PivotCache.json` | 透视表缓存 |
| **PivotCaches** | `PivotCaches.json` | 透视表缓存集合 |

### 其他常用对象

| 对象 | JSON 文件 | 用途 |
|------|-----------|------|
| **Name** | `Name.json` | 名称定义 |
| **Names** | `Names.json` | 名称集合 |
| **Hyperlink** | `Hyperlink.json` | 超链接 |
| **Hyperlinks** | `Hyperlinks.json` | 超链接集合 |
| **Comment** | `Comment.json` | 单元格批注 |
| **Comments** | `Comments.json` | 批注集合 |
| **AutoFilter** | `AutoFilter.json` | 自动筛选 |
| **Sort** | `Sort.json` | 排序 |
| **Validation** | `Validation.json` | 数据验证 |
| **PageSetup** | `PageSetup.json` | 页面设置（打印） |
| **WorksheetFunction** | `WorksheetFunction.json` | 工作表函数（VLOOKUP等） |

---

## 查询示例

> 以下示例演示**完整查询模式**流程。高频场景（如 `.Value2`、`Font.Bold`、`Interior.Color`）请走快速模式，无需读 JSON。

### 示例 1：查询低频属性用法

**需求**："如何设置单元格的条件格式？"

**判断**：`FormatCondition` 不在快速模式白名单中 → 走完整查询

**查询流程**：
```
1. 对象 = FormatCondition → 读取 FormatCondition.json
2. 在 properties[] 中搜索 name == "Type" 或 "Operator"
3. 提取 description 和 examples 中的代码
4. 适配项目规范：Application → 省略，function test() → function __main__()
5. 生成答案
```

### 示例 2：查询方法用法

**需求**："如何给数据透视表添加字段？"

**判断**：`PivotTable` 不在快速模式白名单中 → 走完整查询

**查询流程**：
```
1. 对象 = PivotTable → 读取 PivotTable.json
2. 在 properties[] 中搜索 name == "AddFields" 或 "PivotFields"
3. 提取 description 和 examples 中的代码
4. 适配项目规范
5. 生成答案
```

### 示例 3：查询复杂属性

**需求**："Range 对象的 CurrentRegion 怎么用？"

**判断**：`CurrentRegion` 不在快速模式白名单中 → 走完整查询

**查询流程**：
```
1. 对象 = Range → 读取 Range.json
2. 在 properties[] 中搜索 name == "CurrentRegion"
3. 提取 description: 说明返回类型为 Range，只读
4. 提取 examples: 官方示例代码
5. 适配项目规范：省略 Application，用 __main__ 替代 test
6. 生成答案: 
   function __main__() {
     const rng = Range("A1").CurrentRegion
     console.log("当前区域行数：" + rng.Rows.Count)
   }
```

---

## 完整对象索引

> 共 **223个** 对象。文件名 = 对象名 + `.json`。加粗为常用高频对象。

### A
AboveAverage, AddIn, AddIns, AddIns2, Adjustments, AllowEditRange, AllowEditRanges, **Application**, Areas, AutoFilter, AutoRecover, Axes, Axis, AxisTitle

### B
Border, **Borders**

### C
CalculatedFields, CalculatedItems, CategoryCollection, CellFormat, Characters, **Chart**, ChartArea, ChartCategory, ChartFormat, ChartGroup, ChartGroups, **ChartObject**, **ChartObjects**, ChartTitle, **Charts**, ColorFormat, ColorScale, ColorScaleCriteria, ColorScaleCriterion, ColorStop, ColorStops, **Comment**, **Comments**, ConditionValue, Connections, ConnectorFormat, ControlFormat, CustomProperties, CustomProperty, CustomView, CustomViews

### D
DataBarBorder, DataLabel, DataLabels, DataTable, Databar, DefaultWebOptions, Dialog, Dialogs, DisplayFormat, DisplayUnitLabel, DownBars, DropLines

### E
Error, ErrorBars, ErrorCheckingOptions, Errors

### F
FillFormat, Filter, Filters, **Font**, FormatColor, **FormatCondition**, **FormatConditions**, FreeformBuilder, FullSeriesCollection

### G
Graphic, Gridlines, GroupShapes

### H
HPageBreak, HPageBreaks, HeaderFooter, HiLoLines, **Hyperlink**, **Hyperlinks**

### I
Icon, IconCriteria, IconCriterion, IconSet, IconSetCondition, IconSets, **Interior**

### L
LeaderLines, Legend, LegendEntries, LegendEntry, LegendKey, LineFormat, LinearGradient, ListColumn, ListColumns, ListObject, ListObjects, ListRow, ListRows

### M
MultiThreadedCalculation

### N
**Name**, **Names**, NegativeBarFormat

### O
ODBCConnection, ODBCErrors, OLEDBConnection, OLEDBError, OLEDBErrors, OLEFormat, OLEObject, OLEObjects, Outline

### P
Page, **PageSetup**, Pages, Pane, Panes, PictureFormat, PivotAxis, **PivotCache**, **PivotCaches**, PivotCell, **PivotField**, **PivotFields**, PivotFilter, PivotFilters, PivotFormula, PivotFormulas, PivotItem, PivotItemList, PivotItems, PivotLayout, PivotLine, PivotLineCells, PivotLines, **PivotTable**, **PivotTables**, PlotArea, Point, Points, Protection, PublishObject, PublishObjects

### Q
QueryTable, QueryTables

### R
RTD, **Range**, Ranges, RecentFile, RecentFiles, RectangularGradient

### S
**Series**, **SeriesCollection**, SeriesLines, ShadowFormat, **Shape**, ShapeNodes, **ShapeRange**, **Shapes**, SheetViews, **Sheets**, Slicer, SlicerCache, SlicerCaches, SlicerItem, SlicerItems, SlicerPivotTables, Slicers, **Sort**, SortField, SortFields, SparkAxes, SparkColor, SparkHorizontalAxis, SparkPoints, Sparkline, SparklineGroup, SparklineGroups, Speech, SpellingOptions, **Style**, **Styles**

### T
Tab, TableStyle, TableStyleElement, TableStyleElements, TableStyles, TextConnection, TextEffectFormat, TextFrame, TextFrame2, ThreeDFormat, TickLabels, Top10, Trendline, Trendlines

### U
UniqueValues, UpBars

### V
VPageBreak, VPageBreaks, **Validation**

### W
Watch, Watches, WebOptions, Window, Windows, **Workbook**, WorkbookConnection, **Workbooks**, **Worksheet**, **WorksheetFunction**, WorksheetView, **Worksheets**

### X
XPath, XmlDataBinding, XmlMap, XmlMaps, XmlNamespace, XmlNamespaces, XmlSchema, XmlSchemas

---

## 注意事项

1. **区分属性和方法**：JSON 中属性和方法都放在 `properties[]` 数组内，没有单独的 `methods` 数组。通过 `description` 中的"只读"/"可读写"判断是属性，通过内容描述判断是否为方法（如"激活"、"删除"等动词描述）。
2. **`examples` 是 HTML**：示例代码嵌入在 HTML 标签中，需要解析 `<pre><code>` 内容并解码 HTML 实体。
3. **`functions` 字段为空**：所有 JSON 文件的 `functions` 字段均为空数组 `[]`，无需关注。
4. **对象名区分大小写**：JSON 文件名与对象名完全一致，`Range.json` 不能写成 `range.json`。
5. **参考完整规则**：完整查询策略（快速模式白名单、示例适配规范、编码规范）见 `.trae/skills/wps-jsa-api/SKILL.md` 和 `.trae/rules/jsa.md`。