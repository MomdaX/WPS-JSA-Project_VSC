---
name: "wps-jsa-api"
description: "WPS 表格 JSA API 参考查询技能。提供完整的223个WPS表格对象API文档，包含属性、方法、示例代码。Invoke when writing WPS JSA code or need to look up WPS table API usage."
---

# WPS JSA API 参考查询技能

## 概述

本技能提供完整的 **WPS 表格 API 官方文档**，包含 **223个** WPS JSA 对象的完整参考信息。当你编写 WPS JSA 代码时，可以通过本技能快速查询特定对象的属性、方法用法和示例代码。

## API 文档位置

完整的API文档位于项目目录：
`api_json/wps_table_api_full.md`

该文档包含所有WPS表格对象的：
- 对象说明
- 属性列表（类型、只读性、说明）
- 方法列表（返回类型、说明）
- 每个属性/方法都带有 JSA 示例代码

## 查询规则

### 1. 何时必须调用本技能

**必须调用本技能进行查询** 当：
- 用户需要编写 WPS JSA 宏代码
- 需要了解某个 WPS 对象（如 `Range`、`Worksheet`、`Application` 等）的具体用法
- 需要确认某个属性或方法的正确语法
- 需要查看官方示例代码

### 2. 查询步骤

当需要查询API时，请按以下步骤操作：

1. **定位对象文档**：在 `api_json/wps_table_api_full.md` 中找到对应对象章节
2. **提取信息**：提取对象说明、需要的属性/方法定义、示例代码
3. **参考语法**：参考官方示例的语法和命名规范
4. **生成代码**：基于官方文档生成符合规范的JSA代码

**重要**：必须严格遵循WPS官方文档中的语法和命名约定。

### 3. 对象命名规范

根据WPS官方文档，所有核心对象关键字首字母必须大写：
- ✅ 正确：`Application`, `Workbooks`, `Workbook`, `Sheets`, `Worksheet`, `Range`, `Cells`, `Rows`, `Columns`, `Font`, `Interior`, `Borders`
- ❌ 错误：`application`, `workbook`, `range`, `cells`

### 4. 代码规范叠加

本技能必须与项目中的 JSA 规范叠加执行：
- 项目规则：`.trae/rules/jsa.md`
- 用户规则：全局 JSA 生成强制规范

**优先级**：项目规则 > 本技能 > 用户规则

### 5. 查询示例

**当用户问**："Range对象如何获取当前区域？"

**你应该**：
1. 打开 `api_json/wps_table_api_full.md`
2. 找到 `## Range` 章节
3. 查找 `CurrentRegion` 属性
4. 阅读说明和示例代码
5. 基于官方示例生成答案

## 可用对象列表

本文档包含以下对象（共223个）：

### A
- AboveAverage, AddIn, AddIns, AddIns2, Adjustments, AllowEditRange, AllowEditRanges, Application, Areas, AutoFilter, AutoRecover, Axes, Axis, AxisTitle

### B
- Border, Borders

### C
- CalculatedFields, CalculatedItems, CategoryCollection, CellFormat, Characters, Chart, ChartArea, ChartCategory, ChartFormat, ChartGroup, ChartGroups, ChartObject, ChartObjects, ChartTitle, Charts, ColorFormat, ColorScale, ColorScaleCriteria, ColorScaleCriterion, ColorStop, ColorStops, Comment, Comments, ConditionValue, Connections, ConnectorFormat, ControlFormat, CustomProperties, CustomProperty, CustomView, CustomViews

### D
- DataBarBorder, DataLabel, DataLabels, DataTable, Databar, DefaultWebOptions, Dialog, Dialogs, DisplayFormat, DisplayUnitLabel, DownBars, DropLines

### E
- Error, ErrorBars, ErrorCheckingOptions, Errors

### F
- FillFormat, Filter, Filters, Font, FormatColor, FormatCondition, FormatConditions, FreeformBuilder, FullSeriesCollection

### G
- Graphic, Gridlines, GroupShapes

### H
- HPageBreak, HPageBreaks, HeaderFooter, HiLoLines, Hyperlink, Hyperlinks

### I
- Icon, IconCriteria, IconCriterion, IconSet, IconSetCondition, IconSets, Interior

### L
- LeaderLines, Legend, LegendEntries, LegendEntry, LegendKey, LineFormat, LinearGradient, ListColumn, ListColumns, ListObject, ListObjects, ListRow, ListRows

### M
- MultiThreadedCalculation

### N
- Name, Names, NegativeBarFormat

### O
- ODBCConnection, ODBCErrors, OLEDBConnection, OLEDBError, OLEDBErrors, OLEFormat, OLEObject, OLEObjects, Outline

### P
- Page, PageSetup, Pages, Pane, Panes, PictureFormat, PivotAxis, PivotCache, PivotCaches, PivotCell, PivotField, PivotFields, PivotFilter, PivotFilters, PivotFormula, PivotFormulas, PivotItem, PivotItemList, PivotItems, PivotLayout, PivotLine, PivotLineCells, PivotLines, PivotTable, PivotTables, PlotArea, Point, Points, Protection, PublishObject, PublishObjects

### Q
- QueryTable, QueryTables

### R
- RTD, Range, Ranges, RecentFile, RecentFiles, RectangularGradient

### S
- Series, SeriesCollection, SeriesLines, ShadowFormat, Shape, ShapeNodes, ShapeRange, Shapes, SheetViews, Sheets, Slicer, SlicerCache, SlicerCaches, SlicerItem, SlicerItems, SlicerPivotTables, Slicers, Sort, SortField, SortFields, SparkAxes, SparkColor, SparkHorizontalAxis, SparkPoints, Sparkline, SparklineGroup, SparklineGroups, Speech, SpellingOptions, Style, Styles

### T
- Tab, TableStyle, TableStyleElement, TableStyleElements, TableStyles, TextConnection, TextEffectFormat, TextFrame, TextFrame2, ThreeDFormat, TickLabels, Top10, Trendline, Trendlines

### U
- UniqueValues, UpBars

### V
- VPageBreak, VPageBreaks, Validation

### W
- Watch, Watches, WebOptions, Window, Windows, Workbook, WorkbookConnection, Workbooks, Worksheet, WorksheetFunction, WorksheetView, Worksheets

### X
- XPath, XmlDataBinding, XmlMap, XmlMaps, XmlNamespace, XmlNamespaces, XmlSchema, XmlSchemas

## 使用方式

```
当需要查询API时：
1. 使用 Read 工具读取 api_json/wps_table_api_full.md 中对应章节
2. 提取相关属性/方法的说明和示例
3. 基于官方文档生成正确的JSA代码
```

## 强制要求

1. **必须查询文档**：编写WPS JSA代码前，必须查询相关对象的官方文档
2. **必须遵循示例**：生成代码必须遵循官方示例中的语法
3. **必须首字母大写**：所有WPS对象关键字必须首字母大写
4. **必须叠加规范**：必须同时遵守项目中的 JSA 编码规范

违反上述要求生成的代码会导致运行错误。