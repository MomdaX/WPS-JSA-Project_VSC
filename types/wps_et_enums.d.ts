import "et-jsapi-declare"
/**
 * 枚举名表示字典对象，键名为实际使用的枚举名，键值为布尔值、字符串、数值区间。
 * 该字典对象记录规则，目的是为了计算出WPS自带的枚举名的前缀，以获取实际的枚举值。
 * k表示字典键名，v表示字典键值，prefix表示前缀，以下是约定：
 * - `true`: `prefix + k` 作为前缀
 * - `false`: `prefix` 作为前缀
 * - `number` | `string`：以k大写字母开头为标志分割出一个字符串数组`a`，
 * - 如果v是整数值且小于0，则 `prefix + a.slice(0, x)` 作为前缀（截头）
 * - 如果v是整数值且大于0，则 `prefix + a.slice(x)` 作为前缀（去尾）
 * - 如果v是整数值且等于0，则 `k` 作为前缀
 * - 如果v是字符串，且第0个字符为大写字母，则 `prefix + v` 作为前缀
 * - 如果v是字符串，且第0个字符为小写字母，则 `v` 作为前缀
 * - 如果v是字符串，且第0个字符为"0"，则 `x.slice(1)` 作为前缀
 * - 如果v是空字符串, 则 `v` 作为前缀（即无前缀）
 */
export type EnumDictionary<EnumGroups> = Record<keyof EnumGroups, boolean | string | -3 | -2 | -1 | 0 | 1 | 2>;
export type ElectronicTableEnum = {
    /**
     * 此枚举将用于各种 Excel 方法的常量分组。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.constants)
     * @see {@link Et.EtConstants}
     */
    readonly Constants: {
        /** 三维条形图 */
        '3DBar': -4099;
        /** 3D 效果1 */
        '3DEffects1': 13;
        /** 3D 效果 2 */
        '3DEffects2': 14;
        /** 三维曲面图 */
        '3DSurface': -4103;
        /** 以上 */
        Above: 0;
        /** Accounting1 */
        Accounting1: 4;
        /** Accounting2 */
        Accounting2: 5;
        /** Accounting4 */
        Accounting4: 17;
        /** 添加 */
        Add: 2;
        /** 全部 */
        All: -4104;
        /** Accounting3 */
        Accounting3: 6;
        /** 全部，边框除外 */
        AllExceptBorders: 7;
        /** 自动 */
        Automatic: -4105;
        /** 自动 */
        Bar: 2;
        /** 下方 */
        Below: 1;
        /** 比迪 */
        Bidi: -5000;
        /** BidiCalendar */
        BidiCalendar: 3;
        /** 两者都有 */
        Both: 1;
        /** 向下 */
        Bottom: -4107;
        /** 层叠 */
        Cascade: 7;
        /** 居中 */
        Center: -4108;
        /** 跨列居中 */
        CenterAcrossSelection: 7;
        /** 图表 4 */
        Chart4: 2;
        /** 图表系列 */
        ChartSeries: 17;
        /** 短图表 */
        ChartShort: 6;
        /** 图表标题 */
        ChartTitles: 18;
        /** 检查 */
        Checker: 9;
        /** 圆形扩展 */
        Circle: 8;
        /** 经典 1 */
        Classic1: 1;
        /** 经典 2 */
        Classic2: 2;
        /** Classic3 */
        Classic3: 3;
        /** 已结束 */
        Closed: 3;
        /** Color1 */
        Color1: 7;
        /** Color2 */
        Color2: 8;
        /** Color3 */
        Color3: 9;
        /** Column */
        Column: 3;
        /** 组合 */
        Combination: -4111;
        /** 完成 */
        Complete: 4;
        /** 常量 */
        Constants: 2;
        /** 目录 */
        Contents: 2;
        /** 上下文 */
        Context: -5002;
        /** 角落 */
        Corner: 2;
        /** 纵横交错 */
        CrissCross: 16;
        /** 十字形 */
        Cross: 4;
        /** 自定义警报 */
        Custom: -4114;
        /** 代码调试窗格 */
        DebugCodePane: 13;
        /** 默认自动套用格式 */
        DefaultAutoFormat: -1;
        /** 桌面 */
        Desktop: 9;
        /** 菱形 */
        Diamond: 2;
        /** 直接 */
        Direct: 1;
        /** 分布式 */
        Distributed: -4117;
        /** 除法 */
        Divide: 5;
        /** 会计用双下划线 */
        DoubleAccounting: 5;
        /** 右双引号 */
        DoubleClosed: 5;
        /** 左双引号 */
        DoubleOpen: 4;
        /** 双引号 */
        DoubleQuote: 1;
        /** 图形对象 */
        DrawingObject: 14;
        /** 全部图表 */
        EntireChart: 20;
        /** Excel 菜单 */
        ExcelMenus: 1;
        /** 扩展 */
        Extended: 3;
        /** 填充 */
        Fill: 5;
        /** First */
        First: 0;
        /** 固定值 */
        FixedValue: 1;
        /** 浮动 */
        Floating: 5;
        /** Formats */
        Formats: -4122;
        /** 公式 */
        Formula: 5;
        /** 完整文字 */
        FullScript: 1;
        /** 一般信息 */
        General: 1;
        /** 灰色16 */
        Gray16: 17;
        /** 灰色25 */
        Gray25: -4124;
        /** 灰色50 */
        Gray50: -4125;
        /** Gray75 */
        Gray75: -4126;
        /** Gray8 */
        Gray8: 18;
        /** 公历 */
        Gregorian: 2;
        /** 网 格 */
        Grid: 15;
        /** 网格线 */
        Gridline: 22;
        /** 高 */
        High: -4127;
        /** 印地语数字 */
        HindiNumerals: 3;
        /** 图标 */
        Icons: 1;
        /** 即时窗格 */
        ImmediatePane: 12;
        /** Inside */
        Inside: 2;
        /** 整数 */
        Integer: 2;
        /** Justify */
        Justify: -4130;
        /** 最后 */
        Last: 1;
        /** 最后一个单元格 */
        LastCell: 11;
        /** 拉丁语 */
        Latin: -5001;
        /** Left */
        Left: -4131;
        /** 从左向右 */
        LeftToRight: 2;
        /** 浅色下竖线 */
        LightDown: 13;
        /** 浅色横线 */
        LightHorizontal: 11;
        /** 浅色上竖线 */
        LightUp: 14;
        /** 浅色竖线 */
        LightVertical: 12;
        /** List1 */
        List1: 10;
        /** List2 */
        List2: 11;
        /** List3 */
        List3: 12;
        /** 本地格式 1 */
        LocalFormat1: 15;
        /** 本地格式 2 */
        LocalFormat2: 16;
        /** 逻辑光标 */
        LogicalCursor: 1;
        /** 长型 */
        Long: 3;
        /** Lotus 帮助 */
        LotusHelp: 2;
        /** 低 */
        Low: -4134;
        /** LTR */
        LTR: -5003;
        /** MacrosheetCell */
        MacrosheetCell: 7;
        /** 手动 */
        Manual: -4135;
        /** 最高 */
        Maximum: 2;
        /** 最小值 */
        Minimum: 4;
        /** 负值 */
        MinusValues: 3;
        /** 混合 */
        Mixed: 2;
        /** 混合授权文字 */
        MixedAuthorizedScript: 4;
        /** 混合文字 */
        MixedScript: 3;
        /** 模块 */
        Module: -4141;
        /** 乘法 */
        Multiply: 4;
        /** 狭窄 */
        Narrow: 1;
        /** 轴旁 */
        NextToAxis: 4;
        /** 无文档 */
        NoDocuments: 3;
        /** 无 */
        None: -4142;
        /** 注释 */
        Notes: -4144;
        /** 关 */
        Off: -4146;
        /** 开 */
        On: 1;
        /** 不透明 */
        Opaque: 3;
        /** 打开 */
        Open: 2;
        /** 外面 */
        Outside: 3;
        /** 部分 */
        Partial: 3;
        /** 部分文字 */
        PartialScript: 2;
        /** Percent */
        Percent: 2;
        /** 十字形扩展 */
        Plus: 9;
        /** 正值 */
        PlusValues: 2;
        /** 参考 */
        Reference: 4;
        /** Right */
        Right: -4152;
        /** Rtl */
        RTL: -5004;
        /** 范围 */
        Scale: 3;
        /** 半自动 */
        Semiautomatic: 2;
        /** SemiGray75 */
        SemiGray75: 10;
        /** 短 */
        Short: 1;
        /** 显示标签 */
        ShowLabel: 4;
        /** 显示标签和百分比 */
        ShowLabelAndPercent: 5;
        /** 显示百分比 */
        ShowPercent: 3;
        /** 显示值 */
        ShowValue: 2;
        /** 简单 */
        Simple: -4154;
        /** 单精度 */
        Single: 2;
        /** 会计用单下划线 */
        SingleAccounting: 4;
        /** 单引号 */
        SingleQuote: 2;
        /** 实线 */
        Solid: 1;
        /** 正方形 */
        Square: 1;
        /** 明星 */
        Star: 5;
        /** 标准误差 */
        StError: 4;
        /** 严格 */
        Strict: 2;
        /** 减法 */
        Subtract: 3;
        /** 系统警报 */
        System: 1;
        /** 文本框 */
        TextBox: 16;
        /** 平铺 */
        Tiled: 1;
        /** 标题栏 */
        TitleBar: 8;
        /** 工具栏 */
        Toolbar: 1;
        /** 工具栏按钮 */
        ToolbarButton: 2;
        /** 顶部 */
        Top: -4160;
        /** 从上到下 */
        TopToBottom: 1;
        /** 透明 */
        Transparent: 2;
        /** 三角形 */
        Triangle: 3;
        /** 绝对隐藏 */
        VeryHidden: 2;
        /** Visible */
        Visible: 12;
        /** 直观光标 */
        VisualCursor: 2;
        /** 监视窗格 */
        WatchPane: 11;
        /** 宽 */
        Wide: 3;
        /** 工作簿标签 */
        WorkbookTab: 6;
        /** Worksheet4 */
        Worksheet4: 1;
        /** 工作表单元格 */
        WorksheetCell: 3;
        /** 短工作表 */
        WorksheetShort: 5;
    };
    /**
     * 指定值是高于还是低于平均值。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xlabovebelow)
     * @see {@link Et.EtXlAboveBelow}
     */
    readonly AboveBelow: {
        /** 高于平均值 */
        AboveAverage: 0;
        /** 高于标准偏差 */
        AboveStdDev: 4;
        /** 低于平均值 */
        BelowAverage: 1;
        /** 低于标准偏差 */
        BelowStdDev: 5;
        /** 等于高于平均值 */
        EqualAboveAverage: 2;
        /** 等于低于平均值 */
        EqualBelowAverage: 3;
    };
    /**
     * 指定应执行的操作。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xlactiontype)
     * @see {@link Et.EtXlActionType}
     */
    readonly ActionType: {
        /** 钻取 */
        Drillthrough: 256;
        /** 报告 */
        Report: 128;
        /** 行集 */
        Rowset: 16;
        /** URL */
        Url: 1;
    };
    /**
     * 指定在基于 OLAP 数据源对数据透视表执行模拟分析时计算更改的时间。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xlallocation)
     * @see {@link Et.EtXlAllocation}
     */
    readonly Allocation: {
        /** 在每个值更改后自动计算更改。 */
        AutomaticAllocation: 2;
        /** 手动计算更改。 */
        ManualAllocation: 1;
    };
    /**
     * 指定在对基于 OLAP 数据源的数据透视表执行模拟分析时，要用来分配值的方法。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xlallocationmethod)
     * @see {@link Et.EtXlAllocationMethod}
     */
    readonly AllocationMethod: {
        /** 使用平均分配。 */
        EqualAllocation: 1;
        /** 使用加权分配。 */
        WeightedAllocation: 2;
    };
    /**
     * 指定在基于 OLAP 数据源对数据透视表执行模拟分析时所分配的值。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xlallocationvalue)
     * @see {@link Et.EtXlAllocationValue}
     */
    readonly AllocationValue: {
        /** 在旧值的基础上递增。 */
        Increment: 2;
        /** 输入的值除以分配的次数。 */
        Value: 1;
    };
    /**
     * 指定国家/地区和国际设置。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xlapplicationinternational)
     * @see {@link Et.EtXlApplicationInternational}
     */
    readonly ApplicationInternational: {
        /** 如果使用的是 24 小时时间，则为 True;如果使用 12 小时时间，则为 False。 */
        '24HourClock': 33;
        /** 如果使用的是四位数年份，则为 True;如果使用两位数年份，则为 False。 */
        '4DigitYears': 43;
        /** 当前数组分隔符与小数分隔符相同时，用于替代的数组项分隔符。 */
        AlternateArraySeparator: 16;
        /** 字面数组中用于分隔列的列分隔符。 */
        ColumnSeparator: 14;
        /** Microsoft Excel 的国家/地区版本。 */
        CountryCode: 1;
        /** Windows 控制面板中的当前国家/地区设置。 */
        CountrySetting: 2;
        /** 如果货币符号在货币值之前，则为 True;如果它遵循它们，则为 False。 */
        CurrencyBefore: 37;
        /** 货币符号。 */
        CurrencyCode: 25;
        /** 货币格式中使用的小数位数。 */
        CurrencyDigits: 27;
        /** 如果显示零货币值的前导零，则返回 True。 */
        CurrencyLeadingZeros: 40;
        /** 如果对负数使用减号，则为 True;如果使用括号，则为 False。 */
        CurrencyMinusSign: 38;
        /** 负货币值的货币格式：0 = (symbolx) or (xsymbol)、 1: -symbolx or -xsymbol、 2 = symbol-x or x-symbol、或 3 = symbolx- or xsymbol-，其中符号是国家或地区的货币符号。请注意货币符号的位置由 xlCurrencyBefore 决定。 */
        CurrencyNegative: 28;
        /** 如果在货币符号前面添加空格，则返回 True。 */
        CurrencySpaceBefore: 36;
        /** 如果显示零货币值的尾部零，则返回 True。 */
        CurrencyTrailingZeros: 39;
        /** 日期元素的顺序： 0 = month-day-year、 1 = day-month-year、 2 = year-month-day */
        DateOrder: 32;
        /** 日期分隔符 (/)。 */
        DateSeparator: 17;
        /** 日符号 (d)。 */
        DayCode: 21;
        /** 如果在日期中显示前导零，则返回 True。 */
        DayLeadingZero: 42;
        /** 小数分隔符。 */
        DecimalSeparator: 3;
        /** “常规”数字格式名称。 */
        GeneralFormatName: 26;
        /** 小时符号 (h)。 */
        HourCode: 22;
        /** 在字面数组中左大括号 ({) 的替代字符。 */
        LeftBrace: 12;
        /** 在 R1C1-样式相对引用中左方括号 ([) 的替代字符。 */
        LeftBracket: 10;
        /** 列表分隔符。 */
        ListSeparator: 5;
        /** 小写列字母。 */
        LowerCaseColumnLetter: 9;
        /** 小写行字母。 */
        LowerCaseRowLetter: 8;
        /** 如此 如果 日期顺序是月-日-年，则为长窗体中显示的日期;如果日期顺序为 day-month-year，则为 False。 */
        MDY: 44;
        /** 如果使用的是指标系统，则为 True;如果使用英语测量系统，则为 False。 */
        Metric: 35;
        /** 分钟符号 (m)。 */
        MinuteCode: 23;
        /** 月符号 (m)。 */
        MonthCode: 20;
        /** 如果以数字显示月份时显示月份中的前导零，则返回 True。 */
        MonthLeadingZero: 41;
        /** 为了向后兼容总是返回三个字符。 月份名称的缩写从 Microsoft Windows 中读取并且可以为任意长度。 */
        MonthNameChars: 30;
        /** 非货币格式中所使用的十进制数字的个数。 */
        NoncurrencyDigits: 29;
        /** 如果不是以英语显示函数，则为 True。 */
        NonEnglishFunctions: 34;
        /** 在字面数组中右大括号 (}) 的替代字符。 */
        RightBrace: 13;
        /** 在 R1C1-样式引用中右方括号 (]) 的替代字符。 */
        RightBracket: 11;
        /** 字面数组的行分隔符。 */
        RowSeparator: 15;
        /** 秒符号 (s)。 */
        SecondCode: 24;
        /** 零或千位分隔符。 */
        ThousandsSeparator: 4;
        /** 如果在时间表示中显示前导零，则该值为 True。 */
        TimeLeadingZero: 45;
        /** 时间分隔符 (:)。 */
        TimeSeparator: 18;
        /** 大写列字母。 */
        UpperCaseColumnLetter: 7;
        /** 大写行字母（对于 R1C1-样式引用）。 */
        UpperCaseRowLetter: 6;
        /** 为了向后兼容总是返回三个字符。 星期名称的缩写从 Microsoft Windows 中读取并且可以为任意长度。 */
        WeekdayNameChars: 31;
        /** 数字格式中的年符号 (y)。 */
        YearCode: 19;
    };
    /**
     * 指定用行方向区域名称和列方向区域名称取代单元格引用时，首先列出哪个区域名称。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xlapplynamesorder)
     * @see {@link Et.EtXlApplyNamesOrder}
     */
    readonly ApplyNamesOrder: {
        /** 行前列出的列 */
        ColumnThenRow: 2;
        /** 列前列出的行 */
        RowThenColumn: 1;
    };
    /**
     * 为阿拉伯语拼写检查指定拼写规则。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xlarabicmodes)
     * @see {@link Et.EtXlArabicModes}
     */
    readonly ArabicModes: {
        /** 拼写检查使用有关以字母 yaa 结尾和以 alef hamza 开头的阿拉伯语单词拼写规则。 */
        BothStrict: 3;
        /** 拼写检查忽略有关以字母 yaa 结尾或以 alef hamza 开头的阿拉伯语单词拼写规则。 */
        None: 0;
        /** 拼写检查使用有关以 alef hamza 开头的阿拉伯语单词拼写规则。 */
        StrictAlefHamza: 1;
        /** 拼写检查使用有关以字母 yaa 结尾的阿拉伯语单词拼写规则。 */
        StrictFinalYaa: 2;
    };
    /**
     * 指定窗口在屏幕上的排列方式。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xlarrangestyle)
     * @see {@link Et.EtXlArrangeStyle}
     */
    readonly ArrangeStyle: {
        /** 层叠窗口。 */
        Cascade: 7;
        /** 水平排列窗口。 */
        Horizontal: -4128;
        /** 默认值。 平铺窗口。 */
        Tiled: 1;
        /** 垂直排列窗口。 */
        Vertical: -4166;
    };
    /**
     * 指定线条末端的箭头长度。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xlarrowheadlength)
     * @see {@link Et.EtXlArrowHeadLength}
     */
    readonly ArrowHeadLength: {
        /** 最长箭头 */
        Long: 3;
        /** 中长箭头 */
        Medium: -4138;
        /** 最短箭头 */
        Short: 1;
    };
    /**
     * 指定线条末端应用的箭头类型。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xlarrowheadstyle)
     * @see {@link Et.EtXlArrowHeadStyle}
     */
    readonly ArrowHeadStyle: {
        /** 线条连接处边缘为曲线的小箭头。 */
        Closed: 3;
        /** 菱形大箭头。 */
        DoubleClosed: 5;
        /** 线条连接处边缘为曲线的大箭头。 */
        DoubleOpen: 4;
        /** 无箭头。 */
        None: -4142;
        /** 三角形大箭头。 */
        Open: 2;
    };
    /**
     * 指定线条末端的箭头宽度。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xlarrowheadwidth)
     * @see {@link Et.EtXlArrowHeadWidth}
     */
    readonly ArrowHeadWidth: {
        /** 中宽箭头 */
        Medium: -4138;
        /** 最窄箭头 */
        Narrow: 1;
        /** 最宽箭头 */
        Wide: 3;
    };
    /**
     * 根据源区域的内容，指定目标区域的填充方式。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xlautofilltype)
     * @see {@link Et.EtXlAutoFillType}
     */
    readonly AutoFillType: {
        /** 将源区域的值和格式复制到目标区域，如有必要可重复执行。 */
        FillCopy: 1;
        /** 将星期中每天的名称从源区域扩展到目标区域中。 格式从源区域复制到目标区域，如有必要可重复执行。 */
        FillDays: 5;
        /** Excel 确定用于填充目标区域的值和格式。 */
        FillDefault: 0;
        /** 只将源区域的格式复制到目标区域，如有必要可重复执行。 */
        FillFormats: 3;
        /** 将月名称从源区域扩展到目标区域中。 格式从源区域复制到目标区域，如有必要可重复执行。 */
        FillMonths: 7;
        /** 将源区域中的值扩展到目标区域中，形式为系列（如，“1, 2”扩展为“3, 4, 5”）。 格式从源区域复制到目标区域，如有必要可重复执行。 */
        FillSeries: 2;
        /** 只将源区域的值复制到目标区域，如有必要可重复执行。 */
        FillValues: 4;
        /** 将工作周每天的名称从源区域扩展到目标区域中。 格式从源区域复制到目标区域，如有必要可重复执行。 */
        FillWeekdays: 6;
        /** 将年从源区域扩展到目标区域中。 格式从源区域复制到目标区域，如有必要可重复执行。 */
        FillYears: 8;
        /** 将数值从源区域扩展到目标区域中，假定源区域的数字之间是乘法关系（如，“1, 2,”扩展为“4, 8, 16”，假定每个数字都是前一个数字乘以某个值的结果）。 格式从源区域复制到目标区域，如有必要可重复执行。 */
        GrowthTrend: 10;
        /** 将数值从源区域扩展到目标区域中，假定数字之间是加法关系（如，“1, 2,”扩展为“3, 4, 5”，假定每个数字都是前一个数字加上某个值的结果）。 格式从源区域复制到目标区域，如有必要可重复执行。 */
        LinearTrend: 9;
        /** 根据先前用户操作检测到的模式，将源范围中的值扩展到目标范围，如有必要，请重复。 */
        FlashFill: 11;
    };
    /**
     * 指定用于关联两个筛选条件的操作符。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xlautofilteroperator)
     * @see {@link Et.EtXlAutoFilterOperator}
     */
    readonly AutoFilterOperator: {
        /** Criteria1 和 Criteria2 的逻辑 AND */
        And: 1;
        /** 在 Criteria1) 中指定的项数 (显示的最低值项 */
        Bottom10Items: 4;
        /** Criteria1) 中指定的 (百分比显示的最低值项 */
        Bottom10Percent: 6;
        /** 单元格颜色 */
        FilterCellColor: 8;
        /** 动态筛选 */
        FilterDynamic: 11;
        /** 字体颜色 */
        FilterFontColor: 9;
        /** 筛选图标 */
        FilterIcon: 10;
        /** 筛选值 */
        FilterValues: 7;
        /** Criteria1 或 Criteria2 的逻辑 OR */
        Or: 2;
        /** 显示 (Criteria1 中指定的项数的最高值项) */
        Top10Items: 3;
        /** Criteria1) 中指定的 (百分比显示的最高值项 */
        Top10Percent: 5;
    };
    /**
     * 指定所指定的坐标轴与其他坐标轴相交的点。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xlaxiscrosses)
     * @see {@link Et.EtXlAxisCrosses}
     */
    readonly AxisCrosses: {
        /** 由 Microsoft Excel 设置坐标轴交点。 */
        Automatic: -4105;
        /** CrossesAt 属性指定坐标轴相交点。 */
        Custom: -4114;
        /** 坐标轴在最大值处相交。 */
        Maximum: 2;
        /** 坐标轴在最小值处相交。 */
        Minimum: 4;
    };
    /**
     * 指定坐标轴组的类型。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xlaxisgroup)
     */
    readonly AxisGroup: {
        /** 主轴组 */
        Primary: 1;
        /** 辅助轴组 */
        Secondary: 2;
    };
    /**
     * 指定坐标轴类型。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xlaxistype)
     */
    readonly AxisType: {
        /** 坐标轴显示类别。 */
        Category: 1;
        /** 坐标轴显示数据系列。 */
        SeriesAxis: 3;
        /** 坐标轴显示值。 */
        Value: 2;
    };
    /**
     * 指定图表文本的背景类型。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xlbackground)
     * @see {@link Et.EtXlBackground}
     */
    readonly Background: {
        /** Excel 控制背景。 */
        Automatic: -4105;
        /** 不透明背景。 */
        Opaque: 3;
        /** 透明背景。 */
        Transparent: 2;
    };
    /**
     * 指定用于 3D 条形图或柱形图的形状。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xlbarshape)
     */
    readonly BarShape: {
        /** 框。 */
        Box: 0;
        /** 锥形，在特定值上截断。 */
        ConeToMax: 5;
        /** 锥形，在特定值上变成一点。 */
        ConeToPoint: 4;
        /** 缸。 */
        Cylinder: 3;
        /** 金字塔，在特定值上截断。 */
        PyramidToMax: 2;
        /** 金字塔，在特定值上变成一点。 */
        PyramidToPoint: 1;
    };
    /**
     * 指定某一区域周围的边框的粗细。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xlborderweight)
     */
    readonly BorderWeight: {
        /** 细线（最细的边框）。 */
        Hairline: 1;
        /** 中。 */
        Medium: -4138;
        /** 粗（最宽的边框）。 */
        Thick: 4;
        /** 薄。 */
        Thin: 2;
    };
    /**
     * 指定要检索的边框。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xlbordersindex)
     * @see {@link Et.EtXlBordersIndex}
     */
    readonly BordersIndex: {
        /** 从区域中每个单元格的左上角到右下角的边框。 */
        DiagonalDown: 5;
        /** 从区域中每个单元格的左下角到右上角的边框。 */
        DiagonalUp: 6;
        /** 区域底部的边框。 */
        EdgeBottom: 9;
        /** 区域左边缘的边框。 */
        EdgeLeft: 7;
        /** 区域右边缘的边框。 */
        EdgeRight: 10;
        /** 区域顶部的边框。 */
        EdgeTop: 8;
        /** 区域中所有单元格的水平边框（区域以外的边框除外）。 */
        InsideHorizontal: 12;
        /** 区域中所有单元格的垂直边框（区域以外的边框除外）。 */
        InsideVertical: 11;
    };
    /**
     * 指定要显示的对话框。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xlbuiltindialog)
     * @see {@link Et.EtXlBuiltInDialog}
     */
    readonly BuiltInDialog: {
        /** “激活”对话框 */
        Activate: 103;
        /** “活动单元格字体”对话框 */
        ActiveCellFont: 476;
        /** “添加图表自动套用格式”对话框 */
        AddChartAutoformat: 390;
        /** “加载项管理器”对话框 */
        AddinManager: 321;
        /** “对齐方式”对话框 */
        Alignment: 43;
        /** “应用名称”对话框 */
        ApplyNames: 133;
        /** “应用样式”对话框 */
        ApplyStyle: 212;
        /** “AppMove”对话框 */
        AppMove: 170;
        /** “AppSize”对话框 */
        AppSize: 171;
        /** “全部重排”对话框 */
        ArrangeAll: 12;
        /** “给对象指定宏”对话框 */
        AssignToObject: 213;
        /** “给工具指定宏”对话框 */
        AssignToTool: 293;
        /** “附加文本”对话框 */
        AttachText: 80;
        /** “附加工具栏”对话框 */
        AttachToolbars: 323;
        /** “自动校正”对话框 */
        AutoCorrect: 485;
        /** “坐标轴”对话框 */
        Axes: 78;
        /** “边框”对话框 */
        Border: 45;
        /** “计算”对话框 */
        Calculation: 32;
        /** “单元格保护”对话框 */
        CellProtection: 46;
        /** “更改链接”对话框 */
        ChangeLink: 166;
        /** “图表添加数据”对话框 */
        ChartAddData: 392;
        /** “图表位置”对话框 */
        ChartLocation: 527;
        /** “图表选项多个数据标签”对话框 */
        ChartOptionsDataLabelMultiple: 724;
        /** “图表选项数据标签”对话框 */
        ChartOptionsDataLabels: 505;
        /** “图表选项数据表”对话框 */
        ChartOptionsDataTable: 506;
        /** “图表源数据”对话框 */
        ChartSourceData: 541;
        /** “图表趋势”对话框 */
        ChartTrend: 350;
        /** “图表类型”对话框 */
        ChartType: 526;
        /** “图表向导”对话框 */
        ChartWizard: 288;
        /** “复选框属性”对话框 */
        CheckboxProperties: 435;
        /** “清除”对话框 */
        Clear: 52;
        /** “调色板”对话框 */
        ColorPalette: 161;
        /** “列宽”对话框 */
        ColumnWidth: 47;
        /** “组合图”对话框 */
        Combination: 73;
        /** “条件格式”对话框 */
        ConditionalFormatting: 583;
        /** “合并计算”对话框 */
        Consolidate: 191;
        /** “复制图表”对话框 */
        CopyChart: 147;
        /** “复制图片”对话框 */
        CopyPicture: 108;
        /** “创建列表”对话框 */
        CreateList: 796;
        /** “创建名称”对话框 */
        CreateNames: 62;
        /** “创建发布者”对话框 */
        CreatePublisher: 217;
        /** “创建关系 ”对话框 */
        CreateRelationship: 1272;
        /** “自定义工具栏”对话框 */
        CustomizeToolbar: 276;
        /** “自定义视图”对话框 */
        CustomViews: 493;
        /** “数据删除”对话框 */
        DataDelete: 36;
        /** “数据标签”对话框 */
        DataLabel: 379;
        /** “多个数据标签”对话框 */
        DataLabelMultiple: 723;
        /** “数据系列”对话框 */
        DataSeries: 40;
        /** “数据有效性”对话框 */
        DataValidation: 525;
        /** “定义名称”对话框 */
        DefineName: 61;
        /** “定义样式”对话框 */
        DefineStyle: 229;
        /** “删除格式”对话框 */
        DeleteFormat: 111;
        /** “删除名称”对话框 */
        DeleteName: 110;
        /** “降级”对话框 */
        Demote: 203;
        /** “显示”对话框 */
        Display: 27;
        /** “文档检查器”对话框 */
        DocumentInspector: 862;
        /** “编辑框属性”对话框 */
        EditboxProperties: 438;
        /** “编辑颜色”对话框 */
        EditColor: 223;
        /** “编辑删除”对话框 */
        EditDelete: 54;
        /** “编辑选项”对话框 */
        EditionOptions: 251;
        /** “编辑数据系列”对话框 */
        EditSeries: 228;
        /** “误差线 X”对话框 */
        ErrorbarX: 463;
        /** “误差线 Y”对话框 */
        ErrorbarY: 464;
        /** “错误检查”对话框 */
        ErrorChecking: 732;
        /** “公式求值”对话框 */
        EvaluateFormula: 709;
        /** “外部数据属性”对话框 */
        ExternalDataProperties: 530;
        /** “提取”对话框 */
        Extract: 35;
        /** “文件删除”对话框 */
        FileDelete: 6;
        /** “文件共享”对话框 */
        FileSharing: 481;
        /** “填充组”对话框 */
        FillGroup: 200;
        /** “填充工作组”对话框 */
        FillWorkgroup: 301;
        /** “对话框筛选”对话框 */
        Filter: 447;
        /** “高级筛选”对话框 */
        FilterAdvanced: 370;
        /** “查找文件”对话框 */
        FindFile: 475;
        /** “字体”对话框 */
        Font: 26;
        /** “字体属性”对话框 */
        FontProperties: 381;
        /** “自动套用格式”对话框 */
        FormatAuto: 269;
        /** “设置图表格式”对话框 */
        FormatChart: 465;
        /** “设置图表类型格式”对话框 */
        FormatCharttype: 423;
        /** “设置字体格式”对话框 */
        FormatFont: 150;
        /** “图例格式”对话框 */
        FormatLegend: 88;
        /** “设置主要格式”对话框 */
        FormatMain: 225;
        /** “设置移动格式”对话框 */
        FormatMove: 128;
        /** “设置数字格式”对话框 */
        FormatNumber: 42;
        /** “设置重叠格式”对话框 */
        FormatOverlay: 226;
        /** “设置大小”对话框 */
        FormatSize: 129;
        /** “设置文本格式”对话框 */
        FormatText: 89;
        /** “查找公式”对话框 */
        FormulaFind: 64;
        /** “转到公式”对话框 */
        FormulaGoto: 63;
        /** “替换公式”对话框 */
        FormulaReplace: 130;
        /** “函数向导”对话框 */
        FunctionWizard: 450;
        /** “三维面积图库”对话框 */
        Gallery3dArea: 193;
        /** “三维条形图库”对话框 */
        Gallery3dBar: 272;
        /** “三维柱形图库”对话框 */
        Gallery3dColumn: 194;
        /** “三维折线图库”对话框 */
        Gallery3dLine: 195;
        /** “三维饼图库”对话框 */
        Gallery3dPie: 196;
        /** “三维曲面图库”对话框 */
        Gallery3dSurface: 273;
        /** “面积图库”对话框 */
        GalleryArea: 67;
        /** “条形图库”对话框 */
        GalleryBar: 68;
        /** “柱形图库”对话框 */
        GalleryColumn: 69;
        /** “自定义库”对话框 */
        GalleryCustom: 388;
        /** “圆环图库”对话框 */
        GalleryDoughnut: 344;
        /** “折线图库”对话框 */
        GalleryLine: 70;
        /** “饼图库”对话框 */
        GalleryPie: 71;
        /** “雷达图库”对话框 */
        GalleryRadar: 249;
        /** “散点图库”对话框 */
        GalleryScatter: 72;
        /** “单变量求解”对话框 */
        GoalSeek: 198;
        /** “网格线”对话框 */
        Gridlines: 76;
        /** “导入文本文件”对话框 */
        ImportTextFile: 666;
        /** “插入”对话框 */
        Insert: 55;
        /** “插入超链接”对话框 */
        InsertHyperlink: 596;
        /** “插入对象”对话框 */
        InsertObject: 259;
        /** “插入图片”对话框 */
        InsertPicture: 342;
        /** “插入标题”对话框 */
        InsertTitle: 380;
        /** “标签属性”对话框 */
        LabelProperties: 436;
        /** “列表框属性”对话框 */
        ListboxProperties: 437;
        /** “宏选项”对话框 */
        MacroOptions: 382;
        /** “编辑邮件发件人”对话框 */
        MailEditMailer: 470;
        /** “邮件登录”对话框 */
        MailLogon: 339;
        /** “发送下一信函”对话框 */
        MailNextLetter: 378;
        /** “主要图”对话框 */
        MainChart: 85;
        /** “图表类型”对话框 */
        MainChartType: 185;
        /** “管理关系”对话框 */
        ManageRelationships: 1271;
        /** “菜单编辑器”对话框 */
        MenuEditor: 322;
        /** “移动”对话框 */
        Move: 262;
        /** “我的权限”对话框 */
        MyPermission: 834;
        /** “名称管理器”对话框 */
        NameManager: 977;
        /** “新建”对话框 */
        New: 119;
        /** “新建名称”对话框 */
        NewName: 978;
        /** “新建 Web 查询”对话框 */
        NewWebQuery: 667;
        /** “注意”对话框 */
        Note: 154;
        /** “对象属性”对话框 */
        ObjectProperties: 207;
        /** “对象保护”对话框 */
        ObjectProtection: 214;
        /** “打开”对话框 */
        Open: 1;
        /** “打开链接”对话框 */
        OpenLinks: 2;
        /** “打开邮件”对话框 */
        OpenMail: 188;
        /** “打开文本”对话框 */
        OpenText: 441;
        /** “计算选项”对话框 */
        OptionsCalculation: 318;
        /** “图表选项”对话框 */
        OptionsChart: 325;
        /** “编辑选项”对话框 */
        OptionsEdit: 319;
        /** “常规选项”对话框 */
        OptionsGeneral: 356;
        /** “添加列表选项”对话框 */
        OptionsListsAdd: 458;
        /** “ME 选项”对话框 */
        OptionsME: 647;
        /** “转换选项”对话框 */
        OptionsTransition: 355;
        /** “视图选项”对话框 */
        OptionsView: 320;
        /** “大纲”对话框 */
        Outline: 142;
        /** “覆盖图”对话框 */
        Overlay: 86;
        /** “覆盖图图表类型”对话框 */
        OverlayChartType: 186;
        /** “页面设置”对话框 */
        PageSetup: 7;
        /** “分列”对话框 */
        Parse: 91;
        /** “粘贴名称”对话框 */
        PasteNames: 58;
        /** “选择性粘贴”对话框 */
        PasteSpecial: 53;
        /** “图案”对话框 */
        Patterns: 84;
        /** “权限”对话框 */
        Permission: 832;
        /** “拼音”对话框 */
        Phonetic: 656;
        /** “数据透视表计算字段”对话框 */
        PivotCalculatedField: 570;
        /** “数据透视表计算项”对话框 */
        PivotCalculatedItem: 572;
        /** “设置数据透视表客户机服务器”对话框 */
        PivotClientServerSet: 689;
        /** “组合数据透视表字段”对话框 */
        PivotFieldGroup: 433;
        /** “数据透视表字段属性”对话框 */
        PivotFieldProperties: 313;
        /** “取消组合数据透视表字段”对话框 */
        PivotFieldUngroup: 434;
        /** “数据透视表显示页”对话框 */
        PivotShowPages: 421;
        /** “数据透视表求解次序”对话框 */
        PivotSolveOrder: 568;
        /** “数据透视表选项 ”对话框 */
        PivotTableOptions: 567;
        /** “数据透视表切片器连接 ”对话框 */
        PivotTableSlicerConnections: 1183;
        /** “数据透视表 What If 分析设置 ”对话框 */
        PivotTableWhatIfAnalysisSettings: 1153;
        /** “数据透视表向导 ”对话框 */
        PivotTableWizard: 312;
        /** “位置”对话框 */
        Placement: 300;
        /** “打印”对话框 */
        Print: 8;
        /** “打印机设置”对话框 */
        PrinterSetup: 9;
        /** “打印预览”对话框 */
        PrintPreview: 222;
        /** “升级”对话框 */
        Promote: 202;
        /** “属性”对话框 */
        Properties: 474;
        /** “属性字段”对话框 */
        PropertyFields: 754;
        /** “保护文档”对话框 */
        ProtectDocument: 28;
        /** “保护共享”对话框 */
        ProtectSharing: 620;
        /** “发布为网页”对话框 */
        PublishAsWebPage: 653;
        /** “按钮属性”对话框 */
        PushbuttonProperties: 445;
        /** “建议的数据透视表 ”对话框 */
        RecommendedPivotTables: 1258;
        /** “替换字体”对话框 */
        ReplaceFont: 134;
        /** 该对象或成员已被弃用，但它仍保留为对象模型的一部分以实现向后兼容。 不应在新应用程序中使用它。 */
        RoutingSlip: 336;
        /** “行高”对话框 */
        RowHeight: 127;
        /** “运行”对话框 */
        Run: 17;
        /** “另存为”对话框 */
        SaveAs: 5;
        /** “副本另存为”对话框 */
        SaveCopyAs: 456;
        /** “保存新对象”对话框 */
        SaveNewObject: 208;
        /** “保存工作簿”对话框 */
        SaveWorkbook: 145;
        /** “保存工作区”对话框 */
        SaveWorkspace: 285;
        /** “缩放”对话框 */
        Scale: 87;
        /** “添加方案”对话框 */
        ScenarioAdd: 307;
        /** “单元格方案”对话框 */
        ScenarioCells: 305;
        /** “编辑方案”对话框 */
        ScenarioEdit: 308;
        /** “合并方案”对话框 */
        ScenarioMerge: 473;
        /** “方案摘要”对话框 */
        ScenarioSummary: 311;
        /** “滚动条属性”对话框 */
        ScrollbarProperties: 420;
        /** “搜索”对话框 */
        Search: 731;
        /** “特殊选定”对话框 */
        SelectSpecial: 132;
        /** “发送邮件”对话框 */
        SendMail: 189;
        /** “系列坐标轴”对话框 */
        SeriesAxes: 460;
        /** “系列选项”对话框 */
        SeriesOptions: 557;
        /** “系列次序”对话框 */
        SeriesOrder: 466;
        /** “系列形状”对话框 */
        SeriesShape: 504;
        /** “系列 X”对话框 */
        SeriesX: 461;
        /** “系列 Y”对话框 */
        SeriesY: 462;
        /** “设置背景图片”对话框 */
        SetBackgroundPicture: 509;
        /** “设置管理器 ”对话框 */
        SetManager: 1109;
        /** “设置 MDX 编辑器 ”对话框 */
        SetMDXEditor: 1208;
        /** “设置打印标题”对话框 */
        SetPrintTitles: 23;
        /** “设置列的元组编辑器 ”对话框 */
        SetTupleEditorOnColumns: 1108;
        /** “设置行的元组编辑器 ”对话框 */
        SetTupleEditorOnRows: 1107;
        /** “设置更新状态”对话框 */
        SetUpdateStatus: 159;
        /** “显示明细数据”对话框 */
        ShowDetail: 204;
        /** “显示工具栏”对话框 */
        ShowToolbar: 220;
        /** “大小”对话框 */
        Size: 261;
        /** “切片器创建 ”对话框 */
        SlicerCreation: 1182;
        /** “切片器数据透视表连接 ”对话框 */
        SlicerPivotTableConnections: 1184;
        /** “切片器设置 ”对话框 */
        SlicerSettings: 1179;
        /** “排序”对话框 */
        Sort: 39;
        /** “选择性排序”对话框 */
        SortSpecial: 192;
        /** 迷你图“插入列 ”对话框 */
        SparklineInsertColumn: 1134;
        /** 迷你图“插入行 ”对话框 */
        SparklineInsertLine: 1133;
        /** 迷你图“插入 Win Loss ”对话框 */
        SparklineInsertWinLoss: 1135;
        /** “拆分”对话框 */
        Split: 137;
        /** “标准字体”对话框 */
        StandardFont: 190;
        /** “标准宽度”对话框 */
        StandardWidth: 472;
        /** “样式”对话框 */
        Style: 44;
        /** “订阅”对话框 */
        SubscribeTo: 218;
        /** “创建分类汇总”对话框 */
        SubtotalCreate: 398;
        /** “摘要信息”对话框 */
        SummaryInfo: 474;
        /** “表”对话框 */
        Table: 41;
        /** “Tab 键次序”对话框 */
        TabOrder: 394;
        /** “分列”对话框 */
        TextToColumns: 422;
        /** “取消隐藏”对话框 */
        Unhide: 94;
        /** “更新链接”对话框 */
        UpdateLink: 201;
        /** “VBA 插入文件”对话框 */
        VbaInsertFile: 328;
        /** “VBA 创建加载项”对话框 */
        VbaMakeAddin: 478;
        /** “VBA 过程定义”对话框 */
        VbaProcedureDefinition: 330;
        /** “三维视图”对话框 */
        View3d: 197;
        /** “Web 浏览器选项”对话框 */
        WebOptionsBrowsers: 773;
        /** “Web 编码选项”对话框 */
        WebOptionsEncoding: 686;
        /** “Web 文件选项”对话框 */
        WebOptionsFiles: 684;
        /** “Web 字体选项”对话框 */
        WebOptionsFonts: 687;
        /** “Web 常规选项”对话框 */
        WebOptionsGeneral: 683;
        /** “Web 图片选项”对话框 */
        WebOptionsPictures: 685;
        /** “窗口移动”对话框 */
        WindowMove: 14;
        /** “窗口大小”对话框 */
        WindowSize: 13;
        /** “添加工作簿”对话框 */
        WorkbookAdd: 281;
        /** “复制工作簿”对话框 */
        WorkbookCopy: 283;
        /** “插入工作簿”对话框 */
        WorkbookInsert: 354;
        /** “移动工作簿”对话框 */
        WorkbookMove: 282;
        /** “命名工作簿”对话框 */
        WorkbookName: 386;
        /** “新建工作簿”对话框 */
        WorkbookNew: 302;
        /** “工作簿选项”对话框 */
        WorkbookOptions: 284;
        /** “保护工作簿”对话框 */
        WorkbookProtect: 417;
        /** “拆分工作簿标签”对话框 */
        WorkbookTabSplit: 415;
        /** “取消隐藏工作簿”对话框 */
        WorkbookUnhide: 384;
        /** “工作组”对话框 */
        Workgroup: 199;
        /** “工作区”对话框 */
        Workspace: 95;
        /** “缩放”对话框 */
        Zoom: 256;
        /**  */
        InsertNameLabel: 496;
    };
    /**
     * 指定单元格错误号和值。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xlcverror)
     * @see {@link Et.EtXlCVError}
     */
    readonly CVError: {
        /** 错误编号：2007 */
        Div0: 2007;
        /** 错误编号：2042 */
        NA: 2042;
        /** 错误编号：2029 */
        Name: 2029;
        /** 错误编号：2000 */
        Null: 2000;
        /** 错误编号：2036 */
        Num: 2036;
        /** 错误编号：2023 */
        Ref: 2023;
        /** 错误编号：2015 */
        Value: 2015;
    };
    /**
     * 指定基于计算成员的单元格值的格式。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xlcalcmemnumberformattype)
     * @see {@link Et.EtXlCalcMemNumberFormatType}
     */
    readonly CalcMemNumberFormatType: {
        /** 使用计算成员的默认格式类型作为单元格值。 */
        Default: 0;
        /** 计算成员单元格格式为数字。 */
        Number: 1;
        /** 计算成员单元格格式为百分比。 */
        Percent: 2;
    };
    /**
     * 指定数据透视表中计算成员的类型。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xlcalculatedmembertype)
     * @see {@link Et.EtXlCalculatedMemberType}
     */
    readonly CalculatedMemberType: {
        /** 成员是定义度量值的 MDX (多维表达式) 表达式。 */
        Measure: 2;
        /** 成员使用多维表达式 (MDX) 公式。 */
        Member: 0;
        /** 成员在多维数据集字段中包含集的 MDX 公式。 */
        Set: 1;
    };
    /**
     * 指定计算模式。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xlcalculation)
     * @see {@link Et.EtXlCalculation}
     */
    readonly Calculation: {
        /** Excel 控制重新计算。 */
        Automatic: -4105;
        /** 用户请求时进行计算。 */
        Manual: -4135;
        /** Excel 控制重新计算，但忽略表中的更改。 */
        Semiautomatic: 2;
    };
    /**
     * 指定中断重新计算的键。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xlcalculationinterruptkey)
     * @see {@link Et.EtXlCalculationInterruptKey}
     */
    readonly CalculationInterruptKey: {
        /** 按任意键中断重新计算。 */
        AnyKey: 2;
        /** 按 Esc 键中断重新计算。 */
        EscKey: 1;
        /** 按任何键都不能中断重新计算。 */
        NoKey: 0;
    };
    /**
     * 指定应用程序的计算状态。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xlcalculationstate)
     * @see {@link Et.EtXlCalculationState}
     */
    readonly CalculationState: {
        /** 正在计算。 */
        Calculating: 1;
        /** 计算完成。 */
        Done: 0;
        /** 已进行会触发计算的更改，但还未执行重新计算。 */
        Pending: 2;
    };
    /**
     * 指定类别标签级别的类别标签。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xlcategorylabellevel)
     */
    readonly CategoryLabelLevel: {
        /** 将类别标签设置为图表上范围内的所有类别标签级别。 */
        All: -1;
        /** 指示类别标签中的文本数据。 */
        Custom: -2;
        /** 在图表中不设置类别标签。 默认为自动索引标签。 */
        None: -3;
    };
    /**
     * 指定分类轴的类型。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xlcategorytype)
     */
    readonly CategoryType: {
        /** Excel 控制轴类型。 */
        AutomaticScale: -4105;
        /** 轴按一组任意类别组合数据。 */
        CategoryScale: 2;
        /** 轴按时间刻度组合数据。 */
        TimeScale: 3;
    };
    /**
     * 指定自创建数据透视表或执行上一提交操作以来是否已编辑或重新计算数据透视表的值单元格。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xlcellchangedstate)
     * @see {@link Et.EtXlCellChangedState}
     */
    readonly CellChangedState: {
        /** 单元格中的值已经过编辑或重新计算，并且这些更改已应用于数据源。 （只应用具有 OLAP 数据源的数据透视表） */
        ChangeApplied: 3;
        /** 单元格中的值已经过编辑或重新计算。 */
        Changed: 2;
        /** 单元格中的值未经过编辑或重新计算。 */
        NotChanged: 1;
    };
    /**
     * 指定在指定工作表中添加或删除行的方式，以符合查询返回的记录集的行数。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xlcellinsertionmode)
     * @see {@link Et.EtXlCellInsertionMode}
     */
    readonly CellInsertionMode: {
        /** 插入或者删除部分行以符合新记录集所需要的实际行数。 */
        InsertDeleteCells: 1;
        /** 必要时插入所有行以允许溢出。 不从工作表删除单元格或行。 */
        InsertEntireRows: 2;
        /** 不向工作表添加新的单元格或行。 如果溢出则覆盖周围单元格中的数据。 */
        OverwriteCells: 0;
    };
    /**
     * 指定单元格的类型。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xlcelltype)
     * @see {@link Et.EtXlCellType}
     */
    readonly CellType: {
        /** 任意格式的单元格。 */
        AllFormatConditions: -4172;
        /** 含有验证条件的单元格。 */
        AllValidation: -4174;
        /** 空单元格。 */
        Blanks: 4;
        /** 含有注释的单元格。 */
        Comments: -4144;
        /** 含有常量的单元格。 */
        Constants: 2;
        /** 含有公式的单元格。 */
        Formulas: -4123;
        /** 所用区域中的最后一个单元格。 */
        LastCell: 11;
        /** 格式相同的单元格。 */
        SameFormatConditions: -4173;
        /** 验证条件相同的单元格。 */
        SameValidation: -4175;
        /** 所有可见单元格。 */
        Visible: 12;
    };
    /**
     * 指定图表元素的位置。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xlchartelementposition)
     */
    readonly ChartElementPosition: {
        /** 自动设置图表元素的位置。 */
        Automatic: -4105;
        /** 为图表元素指定特定位置。 */
        Custom: -4114;
    };
    /**
     * 指定图表库。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xlchartgallery)
     * @see {@link Et.EtXlChartGallery}
     */
    readonly ChartGallery: {
        /** 任意一个库。 */
        AnyGallery: 23;
        /** 内置库。 */
        BuiltIn: 21;
        /** 用户定义的库。 */
        UserDefined: 22;
    };
    /**
     * 指定图表项的类型。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xlchartitem)
     */
    readonly ChartItem: {
        /** 坐标轴。 */
        Axis: 21;
        /** 坐标轴标题。 */
        AxisTitle: 17;
        /** 图表区。 */
        ChartArea: 2;
        /** 图表标题。 */
        ChartTitle: 4;
        /** 角点。 */
        Corners: 6;
        /** 数据标签。 */
        DataLabel: 0;
        /** 模拟运算表。 */
        DataTable: 7;
        /** 显示单位标签。 */
        DisplayUnitLabel: 30;
        /** 跌柱线。 */
        DownBars: 20;
        /** 垂直线。 */
        DropLines: 26;
        /** 误差线。 */
        ErrorBars: 9;
        /** 基底。 */
        Floor: 23;
        /** 高低点连线。 */
        HiLoLines: 25;
        /** 引导线。 */
        LeaderLines: 29;
        /** 图例。 */
        Legend: 24;
        /** 图例项。 */
        LegendEntry: 12;
        /** 图例项标示。 */
        LegendKey: 13;
        /** 主要网格线。 */
        MajorGridlines: 15;
        /** 次要网格线。 */
        MinorGridlines: 16;
        /** 无。 */
        Nothing: 28;
        /** 数据透视图拖放区域。 */
        PivotChartDropZone: 32;
        /** 数据透视图字段按钮。 */
        PivotChartFieldButton: 31;
        /** 绘图区。 */
        PlotArea: 19;
        /** 雷达图轴标签。 */
        RadarAxisLabels: 27;
        /** 系列。 */
        Series: 3;
        /** 系列线。 */
        SeriesLines: 22;
        /** 形状。 */
        Shape: 14;
        /** 趋势线。 */
        Trendline: 8;
        /** 涨柱线。 */
        UpBars: 18;
        /** 背景墙。 */
        Walls: 5;
        /** X 误差线。 */
        XErrorBars: 10;
        /** Y 误差线。 */
        YErrorBars: 11;
    };
    /**
     * 指定在何处重定位图表。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xlchartlocation)
     * @see {@link Et.EtXlChartLocation}
     */
    readonly ChartLocation: {
        /** 将图表移动到新工作表。 */
        AsNewSheet: 1;
        /** 将图表嵌入到现有工作表中。 */
        AsObject: 2;
        /** Excel 控制图表位置。 */
        Automatic: 3;
    };
    /**
     * 指定用户选择的图片在 3D 条形图或列中的条形图上的位置。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xlchartpictureplacement)
     * @see {@link Et.EtXlChartPicturePlacement}
     */
    readonly ChartPicturePlacement: {
        /** 在所有表面上显示。 */
        AllFaces: 7;
        /** 在末端显示。 */
        End: 2;
        /** 在末端和侧面上显示。 */
        EndSides: 3;
        /** 在前端显示。 */
        Front: 4;
        /** 在前端和末端显示。 */
        FrontEnd: 6;
        /** 在前端和侧面上显示。 */
        FrontSides: 5;
        /** 在侧面上显示。 */
        Sides: 1;
    };
    /**
     * 指定在柱形、条形图或图例项标示上如何显示图片。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xlchartpicturetype)
     */
    readonly ChartPictureType: {
        /** 调整图片大小，以在最长的堆积条形图中最多重复显示 15 次。 */
        Stack: 2;
        /** 将图片大小调整为指定的单位数，并在条形长度内重复显示。 */
        StackScale: 3;
        /** 将图片拉伸至堆积条形图的全长。 */
        Stretch: 1;
    };
    /**
     * 指定饼图或饼图条形图中第二个图表中显示的值。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xlchartsplittype)
     */
    readonly ChartSplitType: {
        /** 在第二个图表中显示任意幻灯片。 */
        ByCustomSplit: 4;
        /** 第二个图表显示小于总值的某个百分比的值。 该百分比由 SplitValue 属性指定。 */
        ByPercentValue: 3;
        /** 第二个图表显示数据系列中的最小值。 由 SplitValue 属性指定要显示的值的数目。 */
        ByPosition: 1;
        /** 第二个图表显示的值小于 SplitValue 属性指定的值。 */
        ByValue: 2;
    };
    /**
     * 指定图表类型。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xlcharttype)
     */
    readonly ChartType: {
        /** 三维面积图。 */
        '3DArea': -4098;
        /** 三维堆积面积图。 */
        '3DAreaStacked': 78;
        /** 百分比堆积面积图。 */
        '3DAreaStacked100': 79;
        /** 三维簇状条形图。 */
        '3DBarClustered': 60;
        /** 三维堆积条形图。 */
        '3DBarStacked': 61;
        /** 三维百分比堆积条形图。 */
        '3DBarStacked100': 62;
        /** 三维柱形图。 */
        '3DColumn': -4100;
        /** 三维簇状柱形图。 */
        '3DColumnClustered': 54;
        /** 三维堆积柱形图。 */
        '3DColumnStacked': 55;
        /** 三维百分比堆积柱形图。 */
        '3DColumnStacked100': 56;
        /** 三维折线图。 */
        '3DLine': -4101;
        /** 三维饼图。 */
        '3DPie': -4102;
        /** 分离型三维饼图。 */
        '3DPieExploded': 70;
        /** 领域 */
        Area: 1;
        /** 堆积面积图。 */
        AreaStacked: 76;
        /** 百分比堆积面积图。 */
        AreaStacked100: 77;
        /** 簇状条形图。 */
        BarClustered: 57;
        /** 复合条饼图。 */
        BarOfPie: 71;
        /** 堆积条形图。 */
        BarStacked: 58;
        /** 百分比堆积条形图。 */
        BarStacked100: 59;
        /** 泡沫。 */
        Bubble: 15;
        /** 三维气泡图。 */
        Bubble3DEffect: 87;
        /** 簇状柱形图。 */
        ColumnClustered: 51;
        /** 堆积柱形图。 */
        ColumnStacked: 52;
        /** 百分比堆积柱形图。 */
        ColumnStacked100: 53;
        /** 簇状条形圆锥图。 */
        ConeBarClustered: 102;
        /** 堆积条形圆锥图。 */
        ConeBarStacked: 103;
        /** 百分比堆积条形圆锥图。 */
        ConeBarStacked100: 104;
        /** 三维柱形圆锥图。 */
        ConeCol: 105;
        /** 簇状柱形圆锥图。 */
        ConeColClustered: 99;
        /** 堆积柱形圆锥图。 */
        ConeColStacked: 100;
        /** 百分比堆积柱形圆锥图。 */
        ConeColStacked100: 101;
        /** 簇状条形圆柱图。 */
        CylinderBarClustered: 95;
        /** 堆积条形圆柱图。 */
        CylinderBarStacked: 96;
        /** 百分比堆积条形圆柱图。 */
        CylinderBarStacked100: 97;
        /** 三维柱形圆柱图。 */
        CylinderCol: 98;
        /** 簇状柱形圆锥图。 */
        CylinderColClustered: 92;
        /** 堆积柱形圆锥图。 */
        CylinderColStacked: 93;
        /** 百分比堆积柱形圆柱图。 */
        CylinderColStacked100: 94;
        /** 甜甜 圈。 */
        Doughnut: -4120;
        /** 分离型圆环图。 */
        DoughnutExploded: 80;
        /** 直线。 */
        Line: 4;
        /** 数据点折线图。 */
        LineMarkers: 65;
        /** 堆积数据点折线图。 */
        LineMarkersStacked: 66;
        /** 百分比堆积数据点折线图。 */
        LineMarkersStacked100: 67;
        /** 堆积折线图。 */
        LineStacked: 63;
        /** 百分比堆积折线图。 */
        LineStacked100: 64;
        /** 派。 */
        Pie: 5;
        /** 分离型饼图。 */
        PieExploded: 69;
        /** 复合饼图。 */
        PieOfPie: 68;
        /** 簇状条形棱锥图。 */
        PyramidBarClustered: 109;
        /** 堆积条形棱锥图。 */
        PyramidBarStacked: 110;
        /** 百分比堆积条形棱锥图。 */
        PyramidBarStacked100: 111;
        /** 三维柱形棱锥图。 */
        PyramidCol: 112;
        /** 簇状柱形棱锥图。 */
        PyramidColClustered: 106;
        /** 堆积柱形棱锥图。 */
        PyramidColStacked: 107;
        /** 百分比堆积柱形棱锥图。 */
        PyramidColStacked100: 108;
        /** 雷达。 */
        Radar: -4151;
        /** 填充雷达图。 */
        RadarFilled: 82;
        /** 数据点雷达图。 */
        RadarMarkers: 81;
        /** 高-低-收盘。 */
        StockHLC: 88;
        /** 开盘-高-低-收盘。 */
        StockOHLC: 89;
        /** 成交量-高-低-收盘。 */
        StockVHLC: 90;
        /** 成交量-开盘-高-低-收盘。 */
        StockVOHLC: 91;
        /** 三维曲面图。 */
        Surface: 83;
        /** 曲面图（俯视图）。 */
        SurfaceTopView: 85;
        /** 曲面图（俯视线框图）。 */
        SurfaceTopViewWireframe: 86;
        /** 三维曲面图（线框）。 */
        SurfaceWireframe: 84;
        /** 散射。 */
        XYScatter: -4169;
        /** 折线散点图。 */
        XYScatterLines: 74;
        /** 无数据点折线散点图。 */
        XYScatterLinesNoMarkers: 75;
        /** 平滑线散点图。 */
        XYScatterSmooth: 72;
        /** 无数据点平滑线散点图。 */
        XYScatterSmoothNoMarkers: 73;
    };
    /**
     * 指定文档时使用 签入 签入的版本的类型。 适用于存储在 SharePoint 库中的工作簿。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xlcheckinversiontype)
     * @see {@link Et.EtXlCheckInVersionType}
     */
    readonly CheckInVersionType: {
        /** 签入主要版本。 */
        MajorVersion: 1;
        /** 签入次要版本。 */
        MinorVersion: 0;
        /** 覆盖服务器上的当前版本。 */
        OverwriteVersion: 2;
    };
    /**
     * 指定 Microsoft Windows 剪贴板上的项的格式。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xlclipboardformat)
     * @see {@link Et.EtXlClipboardFormat}
     */
    readonly ClipboardFormat: {
        /** 用于 Excel 2.x 版本的二进制交换文件格式 */
        BIFF: 8;
        /** 二进制交换文件格式 12 */
        BIFF12: 63;
        /** 二进制交换文件格式 2 */
        BIFF2: 18;
        /** 二进制交换文件格式 3 */
        BIFF3: 20;
        /** 二进制交换文件格式 4 */
        BIFF4: 30;
        /** 二进制格式 */
        Binary: 15;
        /** 位图格式 */
        Bitmap: 9;
        /** CGM 格式 */
        CGM: 13;
        /** CSV 格式 */
        CSV: 5;
        /** DIF 格式 */
        DIF: 4;
        /** Dsp 文本格式 */
        DspText: 12;
        /** 嵌入对象 */
        EmbeddedObject: 21;
        /** 嵌入源 */
        EmbedSource: 22;
        /** 链接 */
        Link: 11;
        /** 链接到源文件 */
        LinkSource: 23;
        /** 链接到源说明 */
        LinkSourceDesc: 32;
        /** 影片 */
        Movie: 24;
        /** 本机 */
        Native: 14;
        /** 对象说明 */
        ObjectDesc: 31;
        /** 对象链接 */
        ObjectLink: 19;
        /** 链接到所有者 */
        OwnerLink: 17;
        /** 图片 */
        PICT: 2;
        /** 打印图片 */
        PrintPICT: 3;
        /** RTF 格式 */
        RTF: 7;
        /** 屏幕图片 */
        ScreenPICT: 29;
        /** 标准字体 */
        StandardFont: 28;
        /** 标准刻度 */
        StandardScale: 27;
        /** SYLK */
        SYLK: 6;
        /** 表格 */
        Table: 16;
        /** Text */
        Text: 0;
        /** 工具图面 */
        ToolFace: 25;
        /** 工具图面图片 */
        ToolFacePICT: 26;
        /** 值 */
        VALU: 1;
        /** 工作簿 */
        WK1: 10;
    };
    /**
     * 指定 CommandText 属性的值。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xlcmdtype)
     * @see {@link Et.EtXlCmdType}
     */
    readonly CmdType: {
        /** 包含一个 OLAP 数据源多维数据集名称。 */
        Cube: 1;
        /** 包含 DAX) 公式 (数据分析表达式。 */
        DAX: 8;
        /** 包含 OLE DB 提供程序可识别的命令文本。 */
        Default: 4;
        /** 包含 Excel 公式。 */
        Excel: 7;
        /** 包含指向列表数据的指针。 */
        List: 5;
        /** 包含一个 SQL 语句。 */
        Sql: 2;
        /** 包含用于访问 OLE DB 数据源的表名称。 */
        Table: 3;
        /** 包含表集合的名称。 */
        TableCollection: 6;
    };
    /**
     * 指定所选功能（如边框、字体或填充）的颜色。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xlcolorindex)
     */
    readonly ColorIndex: {
        /** 自动配色。 */
        Automatic: -4105;
        /** 无颜色。 */
        None: -4142;
    };
    /**
     * 指定列的分列方式。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xlcolumndatatype)
     * @see {@link Et.EtXlColumnDataType}
     */
    readonly ColumnDataType: {
        /** DMY 日期格式。 */
        DMYFormat: 4;
        /** DYM 日期格式。 */
        DYMFormat: 7;
        /** EMD 日期格式。 */
        EMDFormat: 10;
        /** 常规。 */
        GeneralFormat: 1;
        /** MDY 日期格式。 */
        MDYFormat: 3;
        /** MYD 日期格式。 */
        MYDFormat: 6;
        /** 列未分列。 */
        SkipColumn: 9;
        /** 文本。 */
        TextFormat: 2;
        /** YDM 日期格式。 */
        YDMFormat: 8;
        /** YMD 日期格式。 */
        YMDFormat: 5;
    };
    /**
     * 指定 Microsoft Excel for the Macintosh 中命令加下划线的状态。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xlcommandunderlines)
     * @see {@link Et.EtXlCommandUnderlines}
     */
    readonly CommandUnderlines: {
        /** Excel 控制命令加下划线的显示。 */
        Automatic: -4105;
        /** 不显示命令加下划线。 */
        Off: -4146;
        /** 显示命令加下划线。 */
        On: 1;
    };
    /**
     * 指定单元格显示批注和批注标识符的方式。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xlcommentdisplaymode)
     * @see {@link Et.EtXlCommentDisplayMode}
     */
    readonly CommentDisplayMode: {
        /** 任何时候都显示批注和标识符。 */
        CommentAndIndicator: 1;
        /** 只显示标识符。 鼠标指针在单元格上移动时显示批注。 */
        CommentIndicatorOnly: -1;
        /** 任何时候都不显示批注也不显示标识符。 */
        NoIndicator: 0;
    };
    /**
     * 指定可以使用的条件值的类型。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xlconditionvaluetypes)
     * @see {@link Et.EtXlConditionValueTypes}
     */
    readonly ConditionValueTypes: {
        /** 最长数据条与范围中的最大值成比例。 */
        AutomaticMax: 7;
        /** 最短数据条与范围中的最小值成比例。 */
        AutomaticMin: 6;
        /** 使用公式。 */
        Formula: 4;
        /** 值列表的最高值。 */
        HighestValue: 2;
        /** 值列表的最低值。 */
        LowestValue: 1;
        /** 无条件值。 */
        None: -1;
        /** 使用数字。 */
        Number: 0;
        /** 使用百分比。 */
        Percent: 3;
        /** 使用百分点值。 */
        Percentile: 5;
    };
    /**
     * 指定数据库连接的类型。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xlconnectiontype)
     * @see {@link Et.EtXlConnectionType}
     */
    readonly ConnectionType: {
        /** 数据馈送 */
        DATAFEED: 6;
        /** PowerPivot 模型 */
        MODEL: 7;
        /** 无源 */
        NOSOURCE: 9;
        /** ODBC */
        ODBC: 2;
        /** OLEDB */
        OLEDB: 1;
        /** Text */
        TEXT: 4;
        /** Web */
        WEB: 5;
        /** 工作表 */
        WORKSHEET: 8;
        /** XML 映射 */
        XMLMAP: 3;
    };
    /**
     * 指定分类汇总函数。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xlconsolidationfunction)
     * @see {@link Et.EtXlConsolidationFunction}
     */
    readonly ConsolidationFunction: {
        /** 平均。 */
        Average: -4106;
        /** 计数。 */
        Count: -4112;
        /** 只计数数值。 */
        CountNums: -4113;
        /** 使用非重复计数分析进行计数。 */
        DistinctCount: 11;
        /** 最大值。 */
        Max: -4136;
        /** 最小值。 */
        Min: -4139;
        /** 乘。 */
        Product: -4149;
        /** 基于样本的标准偏差。 */
        StDev: -4155;
        /** 基于全体数据的标准偏差。 */
        StDevP: -4156;
        /** 和。 */
        Sum: -4157;
        /** 未指定任何分类汇总函数。 */
        Unknown: 1000;
        /** 基于样本的方差。 */
        Var: -4164;
        /** 基于全体数据的方差。 */
        VarP: -4165;
    };
    /**
     * 指定函数使用的运算符。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xlcontainsoperator)
     * @see {@link Et.EtXlContainsOperator}
     */
    readonly ContainsOperator: {
        /** 以指定的值开始。 */
        BeginsWith: 2;
        /** 包含指定的值。 */
        Contains: 0;
        /** 不包含指定的值。 */
        DoesNotContain: 1;
        /** 以指定的值结束 */
        EndsWith: 3;
    };
    /**
     * 指定复制的图片的格式。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xlcopypictureformat)
     * @see {@link Et.EtXlCopyPictureFormat}
     */
    readonly CopyPictureFormat: {
        /** 以位图 (光栅) 格式复制的图片：bmp、jpg、gif、png。 */
        Bitmap: 2;
        /** 以矢量格式复制的图片：emf、wmf。 */
        Picture: -4147;
    };
    /**
     * 指定文件打开时的处理。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xlcorruptload)
     * @see {@link Et.EtXlCorruptLoad}
     */
    readonly CorruptLoad: {
        /** Excel 尝试恢复工作簿中的数据。 */
        ExtractData: 2;
        /** 正常打开工作簿。 */
        NormalLoad: 0;
        /** Excel 尝试修复工作簿。 */
        RepairFile: 1;
    };
    /**
     * 为 Excel for Macintosh 指定 32 位创建者代码（十进制 1480803660、十六进制 5843454C、字符串 XCEL）。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xlcreator)
     * @see {@link Et.EtXlCreator}
     */
    readonly Creator: {
        /** Excel for Macintosh 创建者代码。 */
        Code: 1480803660;
    };
    /**
     * 指定所用凭据方法的类型。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xlcredentialsmethod)
     * @see {@link Et.EtXlCredentialsMethod}
     */
    readonly CredentialsMethod: {
        /** 综合 */
        Integrated: 0;
        /** 不使用凭据 */
        None: 1;
        /** 使用存储的凭据 */
        Stored: 2;
    };
    /**
     * 指定 CubeField 的子类型。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xlcubefieldsubtype)
     * @see {@link Et.EtXlCubeFieldSubType}
     */
    readonly CubeFieldSubType: {
        /** 属性 */
        Attribute: 4;
        /** 计算度量 */
        CalculatedMeasure: 5;
        /** Hierarchy */
        Hierarchy: 1;
        /** 隐式度量值 */
        ImplicitMeasure: 11;
        /** KPI 目标 */
        KPIGoal: 7;
        /** KPI 状态 */
        KPIStatus: 8;
        /** KPI 趋势 */
        KPITrend: 9;
        /** KPI 值 */
        KPIValue: 6;
        /** KPI 权数 */
        KPIWeight: 10;
        /** 评估 */
        Measure: 2;
        /** Set */
        Set: 3;
    };
    /**
     * 指定 OLAP 字段是层次结构、集合还是度量字段。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xlcubefieldtype)
     * @see {@link Et.EtXlCubeFieldType}
     */
    readonly CubeFieldType: {
        /** OLAP 字段是层次结构。 */
        Hierarchy: 1;
        /** OLAP 字段是度量。 */
        Measure: 2;
        /** OLAP 字段是集合。 */
        Set: 3;
    };
    /**
     * 指定状态为复制模式还是剪切模式。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xlcutcopymode)
     * @see {@link Et.EtXlCutCopyMode}
     */
    readonly CutCopyMode: {
        /** 复制模式 */
        Copy: 1;
        /** 剪切模式 */
        Cut: 2;
    };
    /**
     * 指定验证过程中显示的消息框所用的图标。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xldvalertstyle)
     * @see {@link Et.EtXlDVAlertStyle}
     */
    readonly DVAlertStyle: {
        /** 信息图标。 */
        Information: 3;
        /** 停止图标。 */
        Stop: 1;
        /** 警告图标。 */
        Warning: 2;
    };
    /**
     * 指定要对值进行的有效性测试类型。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xldvtype)
     * @see {@link Et.EtXlDVType}
     */
    readonly DVType: {
        /** 使用任意公式验证数据有效性。 */
        Custom: 7;
        /** 日期值。 */
        Date: 4;
        /** 数值。 */
        Decimal: 2;
        /** 仅在用户更改值时进行验证。 */
        InputOnly: 0;
        /** 值必须存在于指定列表中。 */
        List: 3;
        /** 文本长度。 */
        TextLength: 6;
        /** 时间值。 */
        Time: 5;
        /** 全部数值。 */
        WholeNumber: 1;
    };
    /**
     * 指定带有条件格式的单元格范围的轴位置（作为数据条）。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xldatabaraxisposition)
     * @see {@link Et.EtXlDataBarAxisPosition}
     */
    readonly DataBarAxisPosition: {
        /** 在基于区域中最小负值对最大正值之比的可变位置处显示坐标轴。 正值按从左至右方向显示。 负值按从右至左方向显示。 当所有值全为正或全为负时，将不显示坐标轴。 */
        Automatic: 0;
        /** 不管区域中具有什么样的一组值，总是在单元格的中点显示坐标轴。 正值按从左至右方向显示。 负值按从右至左方向显示。 */
        Midpoint: 1;
        /** 不显示任何坐标轴，正值和负值都按从左至右方向显示。 */
        None: 2;
    };
    /**
     * 指定数据条的边框。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xldatabarbordertype)
     * @see {@link Et.EtXlDataBarBorderType}
     */
    readonly DataBarBorderType: {
        /** 数据条无边框。 */
        None: 0;
        /** 数据条有实心边框。 */
        Solid: 1;
    };
    /**
     * 指定如何使用颜色填充数据条。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xldatabarfilltype)
     * @see {@link Et.EtXlDataBarFillType}
     */
    readonly DataBarFillType: {
        /** 对数据条填充渐变色。 */
        Gradient: 1;
        /** 对数据条填充纯色。 */
        Solid: 0;
    };
    /**
     * 指定是否使用与正数据条相同的边框和填充颜色。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xldatabarnegativecolortype)
     * @see {@link Et.EtXlDataBarNegativeColorType}
     */
    readonly DataBarNegativeColorType: {
        /** 使用在“负值和轴设置”对话框中指定的颜色，或者通过使用 NegativeBarFormat 对象的 ColorType 和 BorderColorType 属性。 */
        Color: 0;
        /** 使用与正数据条相同的颜色。 */
        SameAsPositive: 1;
    };
    /**
     * 指示数据标签相对于数据标记的位置。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/office.xldatalabelposition)
     */
    readonly DataLabelPosition: {
        /** 数据标签位于点的上方。 */
        Above: 0;
        /** 数据标签位于点的下方。 */
        Below: 1;
        /** Office 应用程序控制数据标签的位置。 */
        BestFit: 5;
        /** 数据标签以数据点为中心点或者位于条形图或饼图内部。 */
        Center: -4108;
        /** 数据标签以数据点为中心点或者位于条形图或饼图内部。 */
        Custom: 7;
        /** 数据标签位于任意位置。 */
        InsideBase: 4;
        /** 数据标签位于任意位置。 */
        InsideEnd: 3;
        /** 数据标签位于条形图或饼图底部。 */
        Left: -4131;
        /** 数据标签位于条形图或饼图底部。 */
        Mixed: 6;
        /** 数据标签位于条形图或饼图顶部。 */
        OutsideEnd: 2;
        /** 数据标签位于条形图或饼图顶部。 */
        Right: -4152;
    };
    /**
     * 指定用于数据标签的分隔符。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xldatalabelseparator)
     * @see {@link Et.EtXlDataLabelSeparator}
     */
    readonly DataLabelSeparator: {
        /** Excel 选择分隔符。 */
        Default: 1;
    };
    /**
     * 指定要应用的数据标签的类型。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xldatalabelstype)
     */
    readonly DataLabelsType: {
        /** 显示关于绝对值的气泡图的大小。 */
        BubbleSizes: 6;
        /** 数据点所属的分类。 */
        Label: 4;
        /** 占总数的百分比及数据点所属的分类。 仅用于饼图和圆环图。 */
        LabelAndPercent: 5;
        /** 无数据标签。 */
        None: -4142;
        /** 占总数的百分比。 仅用于饼图和圆环图。 */
        Percent: 3;
        /** 数据点的默认值（如果未指定此参数）。 */
        Value: 2;
    };
    /**
     * 指定要应用于数据系列的日期的类型。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xldataseriesdate)
     * @see {@link Et.EtXlDataSeriesDate}
     */
    readonly DataSeriesDate: {
        /** 天 */
        Day: 1;
        /** 月 */
        Month: 3;
        /** 平日 */
        Weekday: 2;
        /** 年份 */
        Year: 4;
    };
    /**
     * 指定要创建的数据系列。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xldataseriestype)
     * @see {@link Et.EtXlDataSeriesType}
     */
    readonly DataSeriesType: {
        /** 按照“自动填充”设置对系列进行填充。 */
        AutoFill: 4;
        /** 用数据值进行填充。 */
        Chronological: 3;
        /** 扩展值，假定一个加法级数（例如，“1, 2”被扩展为“3, 4, 5”）。 */
        DataSeriesLinear: -4132;
        /** 扩展值，假定一个乘法级数（例如，“1, 2”被扩展为“4, 8, 16”）。 */
        Growth: 2;
    };
    /**
     * 指定如何移动单元格来替换删除的单元格。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xldeleteshiftdirection)
     * @see {@link Et.EtXlDeleteShiftDirection}
     */
    readonly DeleteShiftDirection: {
        /** 单元格向左移动。 */
        ToLeft: -4159;
        /** 单元格向上移动。 */
        Up: -4162;
    };
    /**
     * 指定移动的方向。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xldirection)
     * @see {@link Et.EtXlDirection}
     */
    readonly Direction: {
        /** 向左。 */
        ToLeft: 1 | -4159;
        /** 向右。 */
        ToRight: 2 | -4161;
        /** 向上。 */
        Up: 3 | -4162;
        /** 向下 */
        Down: 4 | -4121;
    };
    /**
     * 指定在图表上绘制空单元格的方式。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xldisplayblanksas)
     */
    readonly DisplayBlanksAs: {
        /** 将值内插入图表。 */
        Interpolated: 3;
        /** 不绘制空单元格。 */
        NotPlotted: 1;
        /** 空单元格绘制为零。 */
        Zero: 2;
    };
    /**
     * 指定形状的显示方式。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xldisplaydrawingobjects)
     * @see {@link Et.EtXlDisplayDrawingObjects}
     */
    readonly DisplayDrawingObjects: {
        /** 显示所有形状。 */
        DisplayShapes: -4104;
        /** 隐藏所有形状。 */
        Hide: 3;
        /** 仅显示占位符。 */
        Placeholders: 2;
    };
    /**
     * 指示度量的数字单位。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/office.xldisplayunit)
     * @see {@link Et.EtDisplayUnit}
     */
    readonly DisplayUnit: {
        /** 指定自定义单位。 */
        DisplayUnitCustom: -4114;
        /** 不显示单位。 */
        DisplayUnitNone: -4142;
        /** 指定亿单位。 */
        HundredMillions: -8;
        /** 指定百单位。 */
        Hundreds: -2;
        /** 指定十万单位。 */
        HundredThousands: -5;
        /** 指定数百万的单位。 */
        MillionMillions: -10;
        /** 指定百万单位。 */
        Millions: -6;
        /** 指定千万单位。 */
        TenMillions: -7;
        /** 指定万单位。 */
        TenThousands: -4;
        /** 指定十亿单位。 */
        ThousandMillions: -9;
        /** 指定千单位。 */
        Thousands: -3;
    };
    /**
     * 指定应显示重复值还是唯一值。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xldupeunique)
     * @see {@link Et.EtXlDupeUnique}
     */
    readonly DupeUnique: {
        /** 显示重复值。 */
        Duplicate: 1;
        /** 显示唯一值。 */
        Unique: 0;
    };
    /**
     * 指定筛选条件。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xldynamicfiltercriteria)
     */
    readonly DynamicFilterCriteria: {
        /** 筛选所有高于平均值的值。 */
        AboveAverage: 33;
        /** 筛选所有四月的日期。 */
        AllDatesInPeriodApril: 24;
        /** 筛选所有八月的日期。 */
        AllDatesInPeriodAugust: 28;
        /** 筛选所有十二月的日期。 */
        AllDatesInPeriodDecember: 32;
        /** 筛选所有二月的日期。 @todo 此枚举值无法获取 */
        AllDatesInPeriodFebruary: 22;
        /** 筛选所有一月的日期。 */
        AllDatesInPeriodJanuary: 21;
        /** 筛选所有七月的日期。 */
        AllDatesInPeriodJuly: 27;
        /** 筛选所有六月的日期。 */
        AllDatesInPeriodJune: 26;
        /** 筛选所有三月的日期。 */
        AllDatesInPeriodMarch: 23;
        /** 筛选所有五月的日期。 */
        AllDatesInPeriodMay: 25;
        /** 筛选所有十一月的日期。 */
        AllDatesInPeriodNovember: 31;
        /** 筛选所有十月的日期。 */
        AllDatesInPeriodOctober: 30;
        /** 筛选所有第一季度的日期。 */
        AllDatesInPeriodQuarter1: 17;
        /** 筛选所有第二季度的日期。 */
        AllDatesInPeriodQuarter2: 18;
        /** 筛选所有第三季度的日期。 */
        AllDatesInPeriodQuarter3: 19;
        /** 筛选所有第四季度的日期。 */
        AllDatesInPeriodQuarter4: 20;
        /** 筛选所有九月的日期。 */
        AllDatesInPeriodSeptember: 29;
        /** 筛选所有低于平均值的值。 */
        BelowAverage: 34;
        /** 筛选所有与上月相关的值。 */
        LastMonth: 8;
        /** 筛选所有与上一季度相关的值。 */
        LastQuarter: 11;
        /** 筛选所有与上周相关的值。 */
        LastWeek: 5;
        /** 筛选所有与去年相关的值。 */
        LastYear: 14;
        /** 筛选所有与下月相关的值。 */
        NextMonth: 9;
        /** 筛选所有与下一季度相关的值。 */
        NextQuarter: 12;
        /** 筛选所有与下周相关的值。 */
        NextWeek: 6;
        /** 筛选与下一年相关的所有值。 */
        NextYear: 15;
        /** 筛选所有与本月相关的值。 */
        ThisMonth: 7;
        /** 筛选所有与本季度相关的值。 */
        ThisQuarter: 10;
        /** 筛选所有与本周相关的值。 */
        ThisWeek: 4;
        /** 筛选所有与今年相关的值。 */
        ThisYear: 13;
        /** 筛选所有与今天相关的值。 */
        Today: 1;
        /** 筛选所有与明天相关的值。 */
        Tomorrow: 3;
        /** 筛选到今天为止一年的所有值。 */
        YearToDate: 16;
        /** 筛选所有与昨天相关的值。 */
        Yesterday: 2;
    };
    /**
     * 指定发布版本的格式。 此枚举仅适用于 Macintosh，不应使用。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xleditionformat)
     * @see {@link Et.EtXlEditionFormat}
     */
    readonly EditionFormat: {
        /** 二进制交换文件格式。 */
        BIFF: 2;
        /** 图元文件图片结构 (.wmf)。 */
        PICT: 1;
        /** RTF 格式 (.rtf)。 */
        RTF: 4;
        /** VALU。 */
        VALU: 8;
    };
    /**
     * 此枚举仅适用于 Macintosh，不应使用。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xleditionoptionsoption)
     * @see {@link Et.EtXlEditionOptionsOption}
     */
    readonly EditionOptionsOption: {
        /** 自动更新。 */
        AutomaticUpdate: 4;
        /** 取消。 */
        Cancel: 1;
        /** 更改属性。 */
        ChangeAttributes: 6;
        /** 手动更新。 */
        ManualUpdate: 5;
        /** 打开源。 */
        OpenSource: 3;
        /** 选择。 */
        Select: 3;
        /** 发送到 Microsoft Publisher。 */
        SendPublisher: 2;
        /** 更新订阅服务器。 */
        UpdateSubscriber: 2;
    };
    /**
     * 指定要更改的版本类型。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xleditiontype)
     * @see {@link Et.EtXlEditionType}
     */
    readonly EditionType: {
        /** 发行商 */
        Publisher: 1;
        /** 用户 */
        Subscriber: 2;
    };
    /**
     * 指定 Microsoft Office Excel 2007 如何处理 Ctrl+Break（或 Esc、Command+Period）用户中断以用于运行程序。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xlenablecancelkey)
     * @see {@link Et.EtXlEnableCancelKey}
     */
    readonly EnableCancelKey: {
        /** 完全禁用“取消”键捕获功能。 */
        Disabled: 0;
        /** 将中断作为错误发送给运行程序，由 On Error GoTo 语句设置的错误处理程序捕获。 可捕获的错误代码为 18。 */
        ErrorHandler: 2;
        /** 中断当前运行程序，用户可进行调试或结束程序的运行。 */
        Interrupt: 1;
    };
    /**
     * 指定可在工作表中选择的内容。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xlenableselection)
     * @see {@link Et.EtXlEnableSelection}
     */
    readonly EnableSelection: {
        /** 可以选择任何内容。 */
        NoRestrictions: 0;
        /** 不能选择任何内容。 */
        NoSelection: -4142;
        /** 只能选择未锁定单元格。 */
        UnlockedCells: 1;
    };
    /**
     * 指定误差线的末端样式。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xlendstylecap)
     */
    readonly EndStyleCap: {
        /** 应用帽。 */
        Cap: 1;
        /** 不应用帽。 */
        NoCap: 2;
    };
    /**
     * 指定接收误差线的轴值。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xlerrorbardirection)
     */
    readonly ErrorBarDirection: {
        /** 误差线平行于 Y 轴，长度为 X 轴值。 */
        X: -4168;
        /** 误差线平行于 X 轴，长度为 Y 轴值。 */
        Y: 1;
    };
    /**
     * 指定要包含的误差线部分。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xlerrorbarinclude)
     */
    readonly ErrorBarInclude: {
        /** 正负误差区域。 */
        Both: 1;
        /** 仅负误差区域。 */
        MinusValues: 3;
        /** 无误差线区域。 */
        None: -4142;
        /** 仅正误差区域。 */
        PlusValues: 2;
    };
    /**
     * 指定误差线标记的区域。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xlerrorbartype)
     */
    readonly ErrorBarType: {
        /** 区域由固定值或单元格值设置。 */
        Custom: -4114;
        /** 固定长度误差线。 */
        FixedValue: 1;
        /** 误差线覆盖的区域百分比。 */
        Percent: 2;
        /** 显示指定数目的标准偏差的区域。 */
        StDev: -4155;
        /** 显示标准误差区域。 */
        StError: 4;
    };
    /**
     * 指定要从 Errors 集合检索的误差对象的类型。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xlerrorchecks)
     * @see {@link Et.EtXlErrorChecks}
     */
    readonly ErrorChecks: {
        /** 单元格包含一个引用空单元格的公式。 */
        EmptyCellReferences: 7;
        /** 单元格计算为错误值。 */
        EvaluateToError: 1;
        /** 单元格包含与区域不一致的公式。 */
        InconsistentFormula: 4;
        /** 单元格包含与列表不一致的公式。 */
        InconsistentListFormula: 9;
        /** 列表中的数据包含一个有效性错误。 */
        ListDataValidation: 8;
        /** 按文本输入的数字。 */
        NumberAsText: 3;
        /** 忽略的单元格。 */
        OmittedCells: 5;
        /** 单元格包含未计算的公式。 */
        /** 按文本输入的日期。 */
        TextDate: 2;
        /** 解除锁定公式单元格。 */
        UnlockedFormulaCells: 6;
    };
    /**
     * 指定对象的新访问模式。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xlfileaccess)
     * @see {@link Et.EtXlFileAccess}
     */
    readonly FileAccess: {
        /** 只读 */
        ReadOnly: 3;
        /** 读/写 */
        ReadWrite: 2;
    };
    /**
     * 指定保存工作表时的文件格式。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xlfileformat)
     * @see {@link Et.EtXlFileFormat}
     */
    readonly FileFormat: {
        /** 扩展名：*.xla。              Microsoft Excel 97-2003 外接程序。 */
        AddIn: 18;
        /** 扩展名：*.xla。              Microsoft Excel 97-2003 外接程序。 */
        AddIn8: 18;
        /** 扩展名：*.csv。              CSV。 */
        CSV: 6;
        /** 扩展名：*.csv。              Macintosh CSV。 */
        CSVMac: 22;
        /** 扩展名：*.csv。              MSDOS CSV。 */
        CSVMSDOS: 24;
        /** 扩展名：*.csv。              Windows CSV。 */
        CSVWindows: 23;
        /** 扩展名：*.txt。              当前平台文本。 */
        CurrentPlatformText: -4158;
        /** 扩展名：*.dbf。              Dbase 2 格式。 */
        DBF2: 7;
        /** 扩展名：*.dbf。              Dbase 3 格式。 */
        DBF3: 8;
        /** 扩展名：*.dbf。              Dbase 4 格式。 */
        DBF4: 11;
        /** 扩展名：*.dif。              数据交换格式。 */
        DIF: 9;
        /** 扩展名：*.xlsb。             Excel 二进制工作簿。 */
        Excel12: 50;
        /** 扩展名：*.xls。              Excel 版本 2.0 (1987)。 */
        Excel2: 16;
        /** 扩展名：*.xls。              Excel 版本 2.0 Asia (1987)。 */
        Excel2FarEast: 27;
        /** 扩展名：*.xls。              Excel 版本 3.0 (1990)。 */
        Excel3: 29;
        /** 扩展名：*.xls。              Excel 版本 4.0 (1992)。 */
        Excel4: 33;
        /** 扩展名：*.xlw。              Excel 版本 4.0 工作簿格式 (1992)。 */
        Excel4Workbook: 35;
        /** 扩展名：*.xls。              Excel 版本 5.0 (1994)。 */
        Excel5: 39;
        /** 扩展名：*.xls。              Excel 95（版本 7.0）。 */
        Excel7: 39;
        /** 扩展名：*.xls。              Excel 97-2003 工作簿。 */
        Excel8: 56;
        /** 扩展名：*.xls。              Excel 版本 95 和 97。 */
        Excel9795: 43;
        /** 扩展名：*.htm；*.html        HTML 格式。 */
        Html: 44;
        /** 扩展名：无文件扩展名。         国际外接程序。 */
        IntlAddIn: 26;
        /** 扩展名：无文件扩展名。         国际宏。 */
        IntlMacro: 25;
        /** 扩展名：*.ods。              OpenDocument 电子表格。 */
        OpenDocumentSpreadsheet: 60;
        /** 扩展名：*.xlam。             Open XML 外接程序。 */
        OpenXMLAddIn: 55;
        /** 扩展名：*.xlsx。             (&H3D) Strict Open XML 文件。 */
        OpenXMLStrictWorkbook: 61;
        /** 扩展名：*.xltx。             Open XML 模板。 */
        OpenXMLTemplate: 54;
        /** 扩展名：*.xltm。             启用 Open XML 模板宏。 */
        OpenXMLTemplateMacroEnabled: 53;
        /** 扩展名：*.xlsx。             Open XML 工作簿。 */
        OpenXMLWorkbook: 51;
        /** 扩展名：*.xlsm。             启用 Open XML 工作簿宏。 */
        OpenXMLWorkbookMacroEnabled: 52;
        /** 扩展名：*.slk。              符号链接格式。 */
        SYLK: 2;
        /** 扩展名：*.xlt。              Excel 模板格式。 */
        Template: 17;
        /** 扩展名：*.xlt。              模板 8。 */
        Template8: 17;
        /** 扩展名：*.txt。              Macintosh 文本。 */
        TextMac: 19;
        /** 扩展名：*.txt。              MSDOS 文本。 */
        TextMSDOS: 21;
        /** 扩展名：*.prn。              打印机文本。 */
        TextPrinter: 36;
        /** 扩展名：*.txt。              Windows 文本。 */
        TextWindows: 20;
        /** 扩展名：无文件扩展名；*.txt。  Unicode 文本。 */
        UnicodeText: 42;
        /** 扩展名：*.mh；*.mhtml。      Web 档案。 */
        WebArchive: 45;
        /** 扩展名：*.wj2。              日语 1-2-3。 */
        WJ2WD1: 14;
        /** 扩展名：*.wj3。              日语 1-2-3。 */
        WJ3: 40;
        /** 扩展名：*.wj3。              日语 1-2-3 格式。 */
        WJ3FJ3: 41;
        /** 扩展名：*.wk1。              Lotus 1-2-3 格式。 */
        WK1: 5;
        /** 扩展名：*.wk1。              Lotus 1-2-3 格式。 */
        WK1ALL: 31;
        /** 扩展名：*.wk1。              Lotus 1-2-3 格式。 */
        WK1FMT: 30;
        /** 扩展名：*.wk3。              Lotus 1-2-3 格式。 */
        WK3: 15;
        /** 扩展名：*.wk3。              Lotus 1-2-3 格式。 */
        WK3FM3: 32;
        /** 扩展名：*.wk4。              Lotus 1-2-3 格式。 */
        WK4: 38;
        /** 扩展名：*.wks。              Lotus 1-2-3 格式。 */
        WKS: 4;
        /** 扩展名：*.xlsx。             默认工作簿。 */
        WorkbookDefault: 51;
        /** 扩展名：*.xls。              常规工作簿。 */
        WorkbookNormal: -4143;
        /** 扩展名：*.wks。              Microsoft Works 2.0 亚洲格式。 */
        Works2FarEast: 28;
        /** 扩展名：*.wq1。              Quattro Pro 格式。 */
        WQ1: 34;
        /** 扩展名：*.xml。              XML 电子表格。 */
        XMLSpreadsheet: 46;
    };
    /**
     * 指定如何验证数据透视表的数据缓存。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xlfilevalidationpivotmode)
     * @see {@link Et.EtXlFileValidationPivotMode}
     */
    readonly FileValidationPivotMode: {
        /** 验证 PivotOptions 注册表设置指定的数据缓存的内容（默认）。 */
        Default: 0;
        /** 验证所有数据缓存的内容，而不考虑注册表设置。 */
        Run: 1;
        /** 不验证数据缓存的内容。                                                                                                                                               } // undefined */
        Skip: 2;
    };
    /**
     * 指定如何复制区域。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xlfillwith)
     * @see {@link Et.EtXlFillWith}
     */
    readonly FillWith: {
        /** 复制内容和格式。 */
        All: -4104;
        /** 仅复制内容。 */
        Contents: 2;
        /** 仅复制格式。 */
        Formats: -4122;
    };
    /**
     * 指定在筛选操作期间是要复制数据还是将其保留在原位。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xlfilteraction)
     * @see {@link Et.EtXlFilterAction}
     */
    readonly FilterAction: {
        /** 将筛选出的数据复制到新位置。 */
        Copy: 2;
        /** 保留数据不动。 */
        InPlace: 1;
    };
    /**
     * 指定在指定时间段内的日期筛选方式。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xlfilteralldatesinperiod)
     * @see {@link Et.EtXlFilterAllDatesInPeriod}
     */
    readonly FilterAllDatesInPeriod: {
        /** 在所有日期内筛选指定日期。 */
        Day: 2;
        /** 在所有日期中筛选指定小时。 */
        Hour: 3;
        /** 在所有日期中筛选指定分钟。 */
        Minute: 4;
        /** 在所有日期中筛选指定月。 */
        Month: 1;
        /** 在所有日期中筛选指定秒。 */
        Second: 5;
        /** 在所有日期内筛选指定年。 */
        Year: 0;
    };
    /**
     * 用于从筛选器函数返回状态。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xlfilterstatus)
     * @see {@link Et.EtXlFilterStatus}
     */
    readonly FilterStatus: {
        /** 表示正常或成功。 */
        OK: 0;
        /** SetFilterDateRange (?) : StartDate > EndDate */
        DateWrongOrder: 1;
        /** SetFilterDateRange (？) ：StartDate 或 EndDate 具有时间部分。 */
        DateHasTime: 2;
        /** SetFilterDateRange (？) ：StartDate 或 EndDate 不是有效日期。 */
        InvalidDate: 3;
    };
    /**
     * 指定要搜索的数据的类型。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xlfindlookin)
     * @see {@link Et.EtXlFindLookIn}
     */
    readonly FindLookIn: {
        /** Comments */
        Comments: -4144;
        /** 公式 */
        Formulas: -4123;
        /** 值 */
        Values: -4163;
    };
    /**
     * 指定以不同固定格式保存的电子表格的质量。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xlfixedformatquality)
     * @see {@link Et.EtXlFixedFormatQuality}
     */
    readonly FixedFormatQuality: {
        /** 最低质量 */
        Minimum: 1;
        /** 标准质量 */
        Standard: 0;
    };
    /**
     * 指定文件格式的类型。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xlfixedformattype)
     */
    readonly FixedFormatType: {
        /** 可移植文档格式文件 (.pdf) */
        PDF: 0;
        /** XPS 文档 (.xps) */
        XPS: 1;
    };
    /**
     * 指定表单控件的类型。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xlformcontrol)
     * @see {@link Et.EtXlFormControl}
     */
    readonly FormControl: {
        /** 按钮。 */
        ButtonControl: 0;
        /** 复选框。 */
        CheckBox: 1;
        /** 组合框。 */
        DropDown: 2;
        /** 文本框。 */
        EditBox: 3;
        /** 分组框。 */
        GroupBox: 4;
        /** 标签。 */
        Label: 5;
        /** 列表框。 */
        ListBox: 6;
        /** 选项按钮。 */
        OptionButton: 7;
        /** 滚动条。 */
        ScrollBar: 8;
        /** 旋转。 */
        Spinner: 9;
    };
    /**
     * 指定运算符，用于比较公式与单元格中的值，或者比较两个公式（适用于 Between 和 NotBetween）。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xlformatconditionoperator)
     * @see {@link Et.EtXlFormatConditionOperator}
     */
    readonly FormatConditionOperator: {
        /** 之间。 只在提供了两个公式的情况下才能使用。 */
        Between: 1;
        /** 平等。 */
        Equal: 3;
        /** 大于。 */
        Greater: 5;
        /** 大于或等于。 */
        GreaterEqual: 7;
        /** 小于。 */
        Less: 6;
        /** 小于或等于。 */
        LessEqual: 8;
        /** 不介于。 只在提供了两个公式的情况下才能使用。 */
        NotBetween: 2;
        /** 不等于。 */
        NotEqual: 4;
    };
    /**
     * 指定条件格式是基于单元格值还是基于表达式。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xlformatconditiontype)
     * @see {@link Et.EtXlFormatConditionType}
     */
    readonly FormatConditionType: {
        /** 高于平均值条件 */
        AboveAverageCondition: 12;
        /** 空值条件 */
        BlanksCondition: 10;
        /** 单元格值 */
        CellValue: 1;
        /** 色阶 */
        ColorScale: 3;
        /** DataBar */
        Databar: 4;
        /** 错误条件 */
        ErrorsCondition: 16;
        /** Expression */
        Expression: 2;
        /** 图标集 */
        IconSets: 6;
        /** 无空值条件 */
        NoBlanksCondition: 13;
        /** 无错误条件 */
        NoErrorsCondition: 17;
        /** 文本字符串 */
        TextString: 9;
        /** 时间段 */
        TimePeriod: 11;
        /** 前 10 个值 */
        Top10: 5;
        /** 唯一值 */
        UniqueValues: 8;
    };
    /**
     * 指定格式筛选的类型。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xlformatfiltertypes)
     * @see {@link Et.EtXlFormatFilterTypes}
     */
    readonly FormatFilterTypes: {
        /** 底端对齐。 */
        Bottom: 0;
        /** 下百分比筛选。 */
        BottomPercent: 2;
        /** 顶端对齐。 */
        Top: 1;
        /** 上百分比筛选。 */
        TopPercent: 3;
    };
    /**
     * 为指定区域指定公式标签类型。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xlformulalabel)
     * @see {@link Et.EtXlFormulaLabel}
     */
    readonly FormulaLabel: {
        /** 仅列标签。 */
        ColumnLabels: 2;
        /** 行标签和列标签。 */
        MixedLabels: 3;
        /** 无标签。 */
        NoLabels: -4142;
        /** 仅行标签。 */
        RowLabels: 1;
    };
    /**
     * 指定表引用的类型。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xlgeneratetablerefs)
     * @see {@link Et.EtXlGenerateTableRefs}
     */
    readonly GenerateTableRefs: {
        /** A1 表引用。 */
        RefA1: 0;
        /** */
        RefStruct: 1;
    };
    /**
     * 指定 gradient fill 的类型。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xlgradientfilltype)
     * @see {@link Et.EtXlGradientFillType}
     */
    readonly GradientFillType: {
        /** 渐变以直线填充。 */
        Linear: 0;
        /** 渐变以非线性或曲线路径填充。 */
        Path: 1;
    };
    /**
     * 指定对象的水平对齐方式。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xlhalign)
     */
    readonly HAlign: {
        /** 居中。 */
        Center: -4108;
        /** 跨列居中。 */
        CenterAcrossSelection: 7;
        /** 分散对齐。 */
        Distributed: -4117;
        /** 填充。 */
        Fill: 5;
        /** 按数据类型对齐。 */
        General: 1;
        /** 两端对齐。 */
        Justify: -4130;
        /** 靠左。 */
        Left: -4131;
        /** 靠右。 */
        Right: -4152;
    };
    /**
     * 指定希伯来语拼写检查器的模式。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xlhebrewmodes)
     * @see {@link Et.EtXlHebrewModes}
     */
    readonly HebrewModes: {
        /** 在书写不带音调符号的文字时，希伯来语协会 (Hebrew Language Academy) 要求使用传统字符类型。 */
        FullScript: 0;
        /** 希伯来传统字符。 */
        MixedAuthorizedScript: 3;
        /** 在这种模式下，拼写检查器接受所有识别为希伯来语的单词，包括以完整文字、部分文字或拼写检查器可识别的非常规拼写变体书写的单词。 */
        MixedScript: 2;
        /** 在这种模式下，拼写检查器接受以完整文字和部分文字书写的单词。 由于以完整文字和部分文字书写的某些单词的拼写未经核准，因此将对这些单词进行标记。 */
        PartialScript: 1;
    };
    /**
     * 指定共享工作簿中显示的一组更改。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xlhighlightchangestime)
     * @see {@link Et.EtXlHighlightChangesTime}
     */
    readonly HighlightChangesTime: {
        /** 显示所有更改。 */
        AllChanges: 2;
        /** 仅显示还未审阅的更改。 */
        NotYetReviewed: 3;
        /** 显示上次保存后最后一个用户进行的更改。 */
        SinceMyLastSave: 1;
    };
    /**
     * 指定将指定项目保存到网页时 Excel 生成的 HTML 类型，以及该项目是静态的还是交互式的。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xlhtmltype)
     * @see {@link Et.EtXlHtmlType}
     */
    readonly HtmlType: {
        /** 使用电子表格组件。 已弃用。 */
        Calc: 1;
        /** 使用图表组件。 已弃用。 */
        Chart: 3;
        /** 使用数据透视表组件。 已弃用。 */
        List: 2;
        /** 使用静态（非交互式）HTML，仅用于查看。 */
        Static: 0;
    };
    /**
     * 指定日语输入规则的说明。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xlimemode)
     * @see {@link Et.EtXlIMEMode}
     */
    readonly IMEMode: {
        /** 半角字母数字。 */
        Alpha: 8;
        /** 全角字母数字。 */
        AlphaFull: 7;
        /** 禁用。 */
        Disable: 3;
        /** 朝鲜文。 */
        Hangul: 10;
        /** 全角朝鲜文。 */
        HangulFull: 9;
        /** 平假名。 */
        Hiragana: 4;
        /** 片假名。 */
        Katakana: 5;
        /** 半角片假名。 */
        KatakanaHalf: 6;
        /** 无控制。 */
        NoControl: 0;
        /** 关闭（英文模式）。 */
        Off: 2;
        /** 打开模式。 */
        On: 1;
    };
    /**
     * 指定图标集条件格式规则的条件的图标。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xlicon)
     * @see {@link Et.EtXlIcon}
     */
    readonly Icon: {
        /** 没有填充栏的信号指示器 */
        '0Bars': 37;
        /** 无填充框 */
        '0FilledBoxes': 52;
        /** 具有一个填充栏的信号指示器 */
        '1Bar': 38;
        /** 一个填充框 */
        '1FilledBox': 51;
        /** 具有两个填充栏的信号指示器 */
        '2Bars': 39;
        /** 两个填充框 */
        '2FilledBoxes': 50;
        /** 具有三个填充栏的信号指示器 */
        '3Bars': 40;
        /** 三个填充框 */
        '3FilledBoxes': 49;
        /** 具有四个填充栏的信号指示器 */
        '4Bars': 41;
        /** 四个填充框 */
        '4FilledBoxes': 48;
        /** 黑色圆 */
        BlackCircle: 32;
        /** 黑色圆，带边框 */
        BlackCircleWithBorder: 13;
        /** 四分之一为白色的圆 */
        CircleWithOneWhiteQuarter: 33;
        /** 四分之三为白色的圆 */
        CircleWithThreeWhiteQuarters: 35;
        /** 四分之二为白色的圆 */
        CircleWithTwoWhiteQuarters: 34;
        /** 金色星形 */
        GoldStar: 42;
        /** 灰色圆 */
        GrayCircle: 31;
        /** 灰色下箭头 */
        GrayDownArrow: 6;
        /** 灰色下斜箭头 */
        GrayDownInclineArrow: 28;
        /** 灰色侧箭头 */
        GraySideArrow: 5;
        /** 灰色上箭头 */
        GrayUpArrow: 4;
        /** 灰色上斜箭头 */
        GrayUpInclineArrow: 27;
        /** 绿色复选符号 */
        GreenCheck: 22;
        /** 绿色复选符号 */
        GreenCheckSymbol: 19;
        /** 绿色圆 */
        GreenCircle: 10;
        /** 绿旗 */
        GreenFlag: 7;
        /** 绿色交通灯 */
        GreenTrafficLight: 14;
        /** 绿色上箭头 */
        GreenUpArrow: 1;
        /** 绿色正三角形 */
        GreenUpTriangle: 45;
        /** 半金色星形 */
        HalfGoldStar: 43;
        /** 无单元格图标 */
        NoCellIcon: -1;
        /** 粉红色圆 */
        PinkCircle: 30;
        /** 红色圆 */
        RedCircle: 29;
        /** 红色圆，带边框 */
        RedCircleWithBorder: 12;
        /** 红色十字 */
        RedCross: 24;
        /** 红色十字形符号 */
        RedCrossSymbol: 21;
        /** 红色菱形 */
        RedDiamond: 18;
        /** 红色下箭头 */
        RedDownArrow: 3;
        /** 红色倒三角形 */
        RedDownTriangle: 47;
        /** 红旗 */
        RedFlag: 9;
        /** 红色交通灯 */
        RedTrafficLight: 16;
        /** 银色星形 */
        SilverStar: 44;
        /** 纯白圆 */
        WhiteCircleAllWhiteQuarters: 36;
        /** 黄色圆 */
        YellowCircle: 11;
        /** 黄色虚线三角形 */
        YellowDash: 46;
        /** 黄色下斜箭头 */
        YellowDownInclineArrow: 26;
        /** 黄色感叹号 */
        YellowExclamation: 23;
        /** 黄色感叹号 */
        YellowExclamationSymbol: 20;
        /** 黄旗 */
        YellowFlag: 8;
        /** 黄色侧箭头 */
        YellowSideArrow: 2;
        /** 黄色交通灯 */
        YellowTrafficLight: 15;
        /** 黄色三角形 */
        YellowTriangle: 17;
        /** 黄色上斜箭头 */
        YellowUpInclineArrow: 25;
    };
    /**
     * 指定图标集的类型。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xliconset)
     * @see {@link Et.EtXlIconSet}
     */
    readonly IconSet: {
        /** 三向箭头 */
        '3Arrows': 1;
        /** 灰色三向箭头 */
        '3ArrowsGray': 2;
        /** 三色旗 */
        '3Flags': 3;
        /** 三标志 */
        '3Signs': 6;
        /** 三个符号 */
        '3Symbols': 7;
        /** 三色交通灯 1 */
        '3TrafficLights1': 4;
        /** 三色交通灯 2 */
        '3TrafficLights2': 5;
        /** 四向箭头 */
        '4Arrows': 9;
        /** 灰色四向箭头 */
        '4ArrowsGray': 10;
        /** 4 CRV */
        '4CRV': 12;
        /** 四个圆红－黑渐变 */
        '4RedToBlack': 11;
        /** 四色交通灯 */
        '4TrafficLights': 13;
        /** 五向箭头 */
        '5Arrows': 14;
        /** 灰色五向箭头 */
        '5ArrowsGray': 15;
        /** 5 CRV */
        '5CRV': 16;
        /** 五象限图 */
        '5Quarters': 17;
        /**  */
        '3Stars': 18;
        /**  */
        '3Triangles': 19;
        /**  */
        '5Boxes': 20;
        /**  */
        CustomSet: -1;
        /**  */
        '3Symbols2': 8;
    };
    /**
     * 指定从数据库返回数据的格式。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xlimportdataas)
     * @see {@link Et.EtXlImportDataAs}
     */
    readonly ImportDataAs: {
        /** 以数据透视表的形式返回数据。 */
        PivotTableReport: 1;
        /** 以查询表的形式返回数据。 */
        QueryTable: 0;
        /**  */
        Table: 2;
    };
    /**
     * 指定从何处复制插入单元格的格式。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xlinsertformatorigin)
     * @see {@link Et.EtXlInsertFormatOrigin}
     */
    readonly InsertFormatOrigin: {
        /** 从上方和/或左侧单元格复制格式。 */
        LeftOrAbove: 0;
        /** 从下方和/或右侧单元格复制格式。 */
        RightOrBelow: 1;
    };
    /**
     * 指定插入时单元格的移动方向。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xlinsertshiftdirection)
     * @see {@link Et.EtXlInsertShiftDirection}
     */
    readonly InsertShiftDirection: {
        /** 向下移动单元格。 */
        Down: -4121;
        /** 向右移动单元格。 */
        ToRight: -4161;
    };
    /**
     * 为指定的数据透视表项指定显示方式，即以表格式还是以大纲格式显示。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xllayoutformtype)
     * @see {@link Et.EtXlLayoutFormType}
     */
    readonly LayoutFormType: {
        /** LayoutSubtotalLocation 属性指定小计在数据透视表中的显示位置。 */
        Outline: 1;
        /** 默认值。 */
        Tabular: 0;
    };
    /**
     * 指定版式行的类型。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xllayoutrowtype)
     * @see {@link Et.EtXlLayoutRowType}
     */
    readonly LayoutRowType: {
        /** 压缩行 */
        CompactRow: 0;
        /** 大纲行 */
        OutlineRow: 2;
        /** 表格行 */
        TabularRow: 1;
    };
    /**
     * 指定图例在图表上的位置。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xllegendposition)
     */
    readonly LegendPosition: {
        /** 位于图表下方。 */
        Bottom: -4107;
        /** 位于图表边框的右上角。 */
        Corner: 2;
        /** 位于自定义的位置上。 */
        Custom: -4161;
        /** 位于图表的左侧。 */
        Left: -4131;
        /** 位于图表的右侧。 */
        Right: -4152;
        /** 位于图表的上方。 */
        Top: -4160;
    };
    /**
     * 指定边框的线条样式。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xllinestyle)
     * @see {@link Et.EtXlLineStyle}
     */
    readonly LineStyle: {
        /** 实线。 */
        Continuous: 1;
        /** 虚线。 */
        Dash: -4115;
        /** 点划相间线。 */
        DashDot: 4;
        /** 划线后跟两个点。 */
        DashDotDot: 5;
        /** 点式线。 */
        Dot: -4118;
        /** 双线。 */
        Double: -4119;
        /** 无线。 */
        None: -4142;
        /** 倾斜的划线。 */
        SlantDashDot: 13;
    };
    /**
     * 指定链接的类型。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xllink)
     * @see {@link Et.EtXlLink}
     */
    readonly Link: {
        /** 到 Excel 工作表的链接。 */
        ExcelLinks: 1;
        /** 到 OLE 源的链接。 */
        OLELinks: 2;
        /** 仅限 Macintosh。 */
        Publishers: 5;
        /** 仅限 Macintosh。 */
        Subscribers: 6;
    };
    /**
     * 指定链接将返回的信息的类型。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xllinkinfo)
     * @see {@link Et.EtXlLinkInfoType}
     */
    readonly LinkInfo: {
        /** 仅应用于 Macintosh 操作系统中的版本。 */
        EditionDate: 2;
        /** 返回链接状态。 */
        LinkInfoStatus: 3;
        /** 指定链接是自动更新还是手动更新。 */
        UpdateState: 1;
    };
    /**
     * 指定链接的类型。
     * @see[VBA文档](https://learn.microsoft.om/zh-cn/office/vba/api/excel.xllinkinfotype)
     * @see {@link Et.EtXlLinkInfoType}
     */
    readonly LinkInfoType: {
        /** OLE 或 DDE 服务器 */
        OLELinks: 2;
        /** 发行商 */
        Publishers: 5;
        /** 用户 */
        Subscribers: 6;
    };
    /**
     * 指定链接的状态。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xllinkstatus)
     * @see {@link Et.EtXlLinkStatus}
     */
    readonly LinkStatus: {
        /** 复制的值。 */
        CopiedValues: 10;
        /** 不能确定状态。 */
        Indeterminate: 5;
        /** 名称无效。 */
        InvalidName: 7;
        /** 文件丢失。 */
        MissingFile: 1;
        /** 工作表丢失。 */
        MissingSheet: 2;
        /** 未启动。 */
        NotStarted: 6;
        /** 无错误。 */
        OK: 0;
        /** 状态可能过期。 */
        Old: 3;
        /** 尚未计算。 */
        SourceNotCalculated: 4;
        /** 未打开。 */
        SourceNotOpen: 8;
        /** 源文档打开。 */
        SourceOpen: 9;
    };
    /**
     * 指定链接的类型。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xllinktype)
     * @see {@link Et.EtXlLinkType}
     */
    readonly LinkType: {
        /** 到 Microsoft Excel 源的链接。 */
        ExcelLinks: 1;
        /** 到 OLE 源的链接。 */
        OLELinks: 2;
    };
    /**
     * 指定冲突（用 Microsoft Excel 工作表中的列表的更改更新 Microsoft SharePoint Foundation 网站上的列表时）解决方法选项。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xllistconflict)
     * @see {@link Et.EtXlListConflict}
     */
    readonly ListConflict: {
        /** 显示一个对话框，允许用户选择解决冲突的方式。 */
        Dialog: 0;
        /** 接受存储在 SharePoint 网站上的数据版本。 */
        DiscardAllConflicts: 2;
        /** 如果发生冲突，则引发一个错误。 */
        Error: 3;
        /** 覆盖存储在 SharePoint 网站上的数据版本。 */
        RetryAllConflicts: 1;
    };
    /**
     * 指定连接到 Microsoft SharePoint Foundation 网站的列表列的数据类型。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xllistdatatype)
     * @see {@link Et.EtXlListDataType}
     */
    readonly ListDataType: {
        /** 复选框。 */
        Checkbox: 9;
        /** 单一选择字段。 */
        Choice: 6;
        /** 多个选择字段。 */
        ChoiceMulti: 7;
        /** 计数器。 */
        Counter: 11;
        /** 货币。 */
        Currency: 4;
        /** 日期/时间。 */
        DateTime: 5;
        /** 超链接。 */
        HyperLink: 10;
        /** “查阅”列表。 */
        ListLookup: 8;
        /** 多行 RTF 格式。 */
        MultiLineRichText: 12;
        /** 多行纯文本。 */
        MultiLineText: 2;
        /** 未指定类型。 */
        None: 0;
        /** 数值。 */
        Number: 3;
        /** 纯文本。 */
        Text: 1;
    };
    /**
     * 指定列表的当前源。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xllistobjectsourcetype)
     * @see {@link Et.EtXlListObjectSourceType}
     */
    readonly ListObjectSourceType: {
        /** 外部数据源（Microsoft SharePoint Foundation 网站）。 */
        External: 0;
        /** PowerPivot 模型 */
        Model: 4;
        /** 查询 */
        Query: 3;
        /** 范围 */
        Range: 1;
        /** XML */
        Xml: 2;
    };
    /**
     * 指定数据透视表中包含区域左上角的部分。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xllocationintable)
     * @see {@link Et.EtXlLocationInTable}
     */
    readonly LocationInTable: {
        /** 列标题 */
        ColumnHeader: -4110;
        /** 列数据项 */
        ColumnItem: 5;
        /** 数据标题 */
        DataHeader: 3;
        /** 数据项 */
        DataItem: 7;
        /** 页面页眉 */
        PageHeader: 2;
        /** 页面项 */
        PageItem: 6;
        /** 行标题 */
        RowHeader: -4153;
        /** 行数据项 */
        RowItem: 4;
        /** 表正文 */
        TableBody: 8;
    };
    /**
     * 指定是匹配全部搜索文本还是匹配任一部分搜索文本。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xllookat)
     * @see {@link Et.EtXlLookAt}
     */
    readonly LookAt: {
        /** 匹配任一部分搜索文本。 */
        Part: 2;
        /** 匹配全部搜索文本。 */
        Whole: 1;
    };
    /**
     * 指定要搜索的内容。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xllookfor)
     * @see {@link Et.EtXlLookFor}
     */
    readonly LookFor: {
        /** 空白 */
        Blanks: 0;
        /** 错误 */
        Errors: 1;
        /** 公式 */
        Formulas: 2;
    };
    /**
     * 指定一个 Microsoft 应用程序。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xlmsapplication)
     * @see {@link Et.EtXlMSApplication}
     */
    readonly MSApplication: {
        /** Microsoft Office Access */
        Access: 4;
        /** Microsoft FoxPro */
        FoxPro: 5;
        /** Microsoft Office Outlook */
        Mail: 3;
        /** Microsoft Office PowerPoint */
        PowerPoint: 2;
        /** Microsoft Office Project */
        Project: 6;
        /** Microsoft Schedule Plus */
        SchedulePlus: 7;
        /** Microsoft Office Word */
        Word: 1;
    };
    /**
     * 指定安装在主机上的邮件系统。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xlmailsystem)
     * @see {@link Et.EtXlMailSystem}
     */
    readonly MailSystem: {
        /** 符合 MAPI 的系统 */
        MAPI: 1;
        /** 无邮件系统 */
        No: 0;
        /** PowerTalk 邮件系统 */
        PowerTalk: 2;
    };
    /**
     * 指定折线图、散点图或雷达图中数据点或系列的数据标记样式。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xlmarkerstyle)
     */
    readonly MarkerStyle: {
        /** 自动设置标记 */
        Automatic: -4105;
        /** 圆形标记 */
        Circle: 8;
        /** 长条形标记 */
        Dash: -4115;
        /** 菱形标记 */
        Diamond: 2;
        /** 短条形标记 */
        Dot: -4118;
        /** 无标记 */
        None: -4142;
        /** 图片标记 */
        Picture: -4147;
        /** 带加号的方形标记 */
        Plus: 9;
        /** 方形标记 */
        Square: 1;
        /** 带星号的方形标记 */
        Star: 5;
        /** 三角形标记 */
        Triangle: 3;
        /** 带 X 记号的方形标记 */
        X: -4168;
    };
    /**
     * 指定度量单位。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xlmeasurementunits)
     * @see {@link Et.EtXlMeasurementUnits}
     */
    readonly MeasurementUnits: {
        /** 厘米 */
        Centimeters: 1;
        /** 英寸 */
        Inches: 0;
        /** 毫米 */
        Millimeters: 2;
    };
    /**
     * 指定数据模型更改的源。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xlmodelchangesource)
     * @see {@link Et.EtXlModelChangeSource}
     */
    readonly ModelChangeSource: {
        /** Excel */
        Excel: 0;
        /** PowerPivot 加载项 */
        PowerPivotAddIn: 1;
    };
    /**
     * 指定按下了哪个鼠标按钮。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xlmousebutton)
     * @see {@link Et.EtXlMouseButton}
     */
    readonly MouseButton: {
        /** 没有按任何按钮。 */
        NoButton: 0;
        /** 按下主按钮（通常为鼠标左按钮）。 */
        PrimaryButton: 1;
        /** 按下辅按钮（通常为鼠标右按钮）。 */
        SecondaryButton: 2;
    };
    /**
     * 指定 Excel 中鼠标指针的外观。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xlmousepointer)
     * @see {@link Et.EtXlMousePointer}
     */
    readonly MousePointer: {
        /** 默认指针。 */
        Default: -4143;
        /** I 形指针。 */
        IBeam: 3;
        /** 西北向箭头指针。 */
        NorthwestArrow: 1;
        /** 沙漏型指针。 */
        Wait: 2;
    };
    /**
     * 指定 OLE 对象类型。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xloletype)
     * @see {@link Et.EtXlOLEType}
     */
    readonly OLEType: {
        /** ActiveX 控件 */
        OLEControl: 2;
        /** 嵌入式 OLE 对象 */
        OLEEmbed: 1;
        /** 链接 OLE 对象 */
        OLELink: 0;
    };
    /**
     * 指定使 OLE 对象服务器执行操作的动作。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xloleverb)
     * @see {@link Et.EtXlOLEVerb}
     */
    readonly OLEVerb: {
        /** 打开对象。 */
        Open: 2;
        /** 执行服务器的主要操作。 */
        Primary: 1;
    };
    /**
     * 指定文本框的水平溢出设置。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xloarthorizontaloverflow)
     * @see {@link Et.EtXlOartHorizontalOverflow}
     */
    readonly OartHorizontalOverflow: {
        /** 隐藏水平方向溢出文本框的文本。 */
        Clip: 1;
        /** 允许文本在水平方向溢出文本框。 */
        Overflow: 0;
    };
    /**
     * 指定文本框的垂直溢出设置。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xloartverticaloverflow)
     * @see {@link Et.EtXlOartVerticalOverflow}
     */
    readonly OartVerticalOverflow: {
        /** 隐藏垂直方向溢出文本框的文本。 */
        Clip: 1;
        /** 隐藏垂直方向溢出文本框的文本，并在可见文本的最后添加省略号 (...)。 */
        Ellipsis: 2;
        /** 允许文本在垂直方向溢出文本框（根据文本对齐方式，可从上溢出、自下溢出，或者上下溢出）。 */
        Overflow: 0;
    };
    /**
     * 指定图表为适应页面大小而进行缩放的方式。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xlobjectsize)
     * @see {@link Et.EtXlObjectSize}
     */
    readonly ObjectSize: {
        /** 尽可能大地打印图表，并保持如屏幕所示的该图表的高度对宽度的比例。 */
        FitToPage: 2;
        /** 按照与页面相适应的大小打印图表，并根据需要调整其高度对宽度的比例。 */
        FullPage: 3;
        /** 以屏幕显示大小打印图表。 */
        ScreenSize: 1;
    };
    /**
     * 指定单元格的处理次序。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xlorder)
     * @see {@link Et.EtXlOrder}
     */
    readonly Order: {
        /** 向下处理行，然后向右逐个处理页或页面字段。 */
        DownThenOver: 1;
        /** 向右逐个处理页或页面字段，然后向下处理行。 */
        OverThenDown: 2;
    };
    /**
     * 指定文字方向。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xlorientation)
     * @see {@link Et.EtXlOrientation}
     */
    readonly Orientation: {
        /** 文字向下排列。 */
        Downward: -4170;
        /** 文字水平排列。 */
        Horizontal: -4128;
        /** 文字向上排列。 */
        Upward: -4171;
        /** 文字在单元格中向下居中排列。 */
        Vertical: -4166;
    };
    /**
     * 指定在结构化选择过程中可以在数据透视表中选择的内容。 这些常数可以进行组合以选择多个类型。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xlptselectionmode)
     * @see {@link Et.EtXlPTSelectionMode}
     */
    readonly PTSelectionMode: {
        /** 空白 */
        Blanks: 4;
        /** 按钮 */
        Button: 15;
        /** 数据和标签 */
        DataAndLabel: 0;
        /** Data */
        DataOnly: 2;
        /** 第一行 */
        FirstRow: 256;
        /** 标签 */
        LabelOnly: 1;
        /** Origin */
        Origin: 3;
    };
    /**
     * 指定工作表上的分页符位置。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xlpagebreak)
     * @see {@link Et.EtXlPageBreak}
     */
    readonly PageBreak: {
        /** Excel 自动添加分页符。 */
        Automatic: -4105;
        /** 手动插入分页符。 */
        Manual: -4135;
        /** 工作表上不插入分页符。 */
        None: -4142;
    };
    /**
     * 指定分页符是全屏应用还是仅应用在打印区域。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xlpagebreakextent)
     * @see {@link Et.EtXlPageBreakExtent}
     */
    readonly PageBreakExtent: {
        /** 全屏。 */
        Full: 1;
        /** 仅在打印区域内。 */
        Partial: 2;
    };
    /**
     * 指定打印工作表时的页面方向。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xlpageorientation)
     * @see {@link Et.EtXlPageOrientation}
     */
    readonly PageOrientation: {
        /** 横向模式。 */
        Landscape: 2;
        /** 纵向模式。 */
        Portrait: 1;
    };
    /**
     * 指定纸张的大小。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xlpapersize)
     * @see {@link Et.EtXlPaperSize}
     */
    readonly PaperSize: {
        /** A3（297 毫米 x 420 毫米） */
        A3: 8;
        /** 10 英寸 x 14 英寸 */
        '10x14': 16;
        /** 11 英寸 x 17 英寸 */
        '11x17': 17;
        /** A4（210 毫米 x 297 毫米） */
        A4: 9;
        /** A4（小）（210 毫米 x 297 毫米） */
        A4Small: 10;
        /** A5（148 毫米 x 210 毫米） */
        A5: 11;
        /** B4（250 毫米 x 354 毫米） */
        B4: 12;
        /** A5（148 毫米 x 210 毫米） */
        B5: 13;
        /** C 型纸 */
        Csheet: 24;
        /** D 型纸 */
        Dsheet: 25;
        /** 信封 #10（4-1/8 英寸 x 9-1/2 英寸） */
        Envelope10: 20;
        /** 信封 #11（4-1/2 英寸 x 10-3/8 英寸） */
        Envelope11: 21;
        /** 信封 #12（4-1/2 英寸 x 11 英寸） */
        Envelope12: 22;
        /** 信封 #14（5 英寸 x 11-1/2 英寸） */
        Envelope14: 23;
        /** 信封 #9（3-7/8 英寸 x 8-7/8 英寸） */
        Envelope9: 19;
        /** 信封 B4（250 毫米 x 353 毫米） */
        EnvelopeB4: 33;
        /** 信封 B5（176 毫米 x 250 毫米） */
        EnvelopeB5: 34;
        /** 信封 B6（176 毫米 x 125 毫米） */
        EnvelopeB6: 35;
        /** 信封 C3（324 毫米 x 458 毫米） */
        EnvelopeC3: 29;
        /** 信封 C4（229 毫米 x 324 毫米） */
        EnvelopeC4: 30;
        /** 信封 C5（162 毫米 x 229 毫米） */
        EnvelopeC5: 28;
        /** 信封 C6（114 毫米 x 162 毫米） */
        EnvelopeC6: 31;
        /** 信封 C65（114 毫米 x 229 毫米） */
        EnvelopeC65: 32;
        /** 信封 DL（110 毫米 x 220 毫米） */
        EnvelopeDL: 27;
        /** 信封（110 毫米 x 230 毫米） */
        EnvelopeItaly: 36;
        /** 君主式信封（3-7/8 英寸 x 7-1/2 英寸） */
        EnvelopeMonarch: 37;
        /** 信封（3-5/8 英寸 x 6-1/2 英寸） */
        EnvelopePersonal: 38;
        /** E 型纸 */
        Esheet: 26;
        /** 行政公文纸（7-1/2 英寸 x 10-1/2 英寸） */
        Executive: 7;
        /** 德国法律文书用复写簿（8-1/2 英寸 x 13 英寸） */
        FanfoldLegalGerman: 41;
        /** 德国法律文书用复写簿（8-1/2 英寸 x 13 英寸） */
        FanfoldStdGerman: 40;
        /** 美国标准复写簿（14-7/8 英寸 x 11 英寸） */
        FanfoldUS: 39;
        /** 对开纸（8-1/2 英寸 x 13 英寸） */
        Folio: 14;
        /** 帐单（17 英寸 x 11 英寸） */
        Ledger: 4;
        /** 法律纸（8-1/2 英寸 x 14 英寸） */
        Legal: 5;
        /** 信函（8-1/2 英寸 x 11 英寸） */
        Letter: 1;
        /** 简式信纸（8-1/2 英寸 x 11 英寸） */
        LetterSmall: 2;
        /** 便笺（8-1/2 英寸 x 11 英寸） */
        Note: 18;
        /** 四开本（215 毫米 x 275 毫米） */
        Quarto: 15;
        /** 报告单（5-1/2 英寸 x 8-1/2 英寸） */
        Statement: 6;
        /** 文摘（11 英寸 x 17 英寸） */
        Tabloid: 3;
        /** 用户自定义 */
        User: 256;
    };
    /**
     * 指定查询参数的数据类型。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xlparameterdatatype)
     * @see {@link Et.EtXlParameterDataType}
     */
    readonly ParameterDataType: {
        /** 大整数。 */
        BigInt: -5;
        /** 二 进 制。 */
        Binary: -2;
        /** 位。 */
        Bit: -7;
        /** 字符串。 */
        Char: 1;
        /** 日期。 */
        Date: 9;
        /** 小数。 */
        Decimal: 3;
        /** 双。 */
        Double: 8;
        /** 浮动。 */
        Float: 6;
        /** 整数。 */
        Integer: 4;
        /** 长二进制。 */
        LongVarBinary: -4;
        /** 长字符串。 */
        LongVarChar: -1;
        /** 数字。 */
        Numeric: 2;
        /** 真正。 */
        Real: 7;
        /** 小整数。 */
        SmallInt: 5;
        /** 时间。 */
        Time: 10;
        /** 时间戳。 */
        Timestamp: 11;
        /** 微小整数。 */
        TinyInt: -6;
        /** 类型未知。 */
        Unknown: 0;
        /** 变长度二进制。 */
        VarBinary: -3;
        /** 变长度字符串。 */
        VarChar: 12;
        /** Unicode 字符串。 */
        WChar: -8;
    };
    /**
     * 为指定的查询表指定确定参数值的方式。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xlparametertype)
     * @see {@link Et.EtXlParameterType}
     */
    readonly ParameterType: {
        /** 使用 Value 参数指定的值。 */
        Constant: 1;
        /** 显示提示用户输入值的对话框。 Value 参数指定的是对话框中显示的文字。 */
        Prompt: 0;
        /** 使用区域左上角单元格的值。 Value 参数指定 Range 对象。 */
        Range: 2;
    };
    /**
     * 指定如何使用工作表上的目标单元格计算数值数据。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xlpastespecialoperation)
     * @see {@link Et.EtXlPasteSpecialOperation}
     */
    readonly PasteSpecialOperation: {
        /** 复制的数据将添加到目标单元格中的值。 */
        Add: 2;
        /** 复制的数据将除以目标单元格中的值。 */
        Divide: 5;
        /** 复制的数据会将目标单元格中的值相乘。 */
        Multiply: 4;
        /** 粘贴操作中不执行任何计算。 */
        None: -4142;
        /** 复制的数据将从目标单元格中的值中减去。 */
        Subtract: 3;
    };
    /**
     * 指定要粘贴的区域部分。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xlpastetype)
     * @see {@link Et.EtXlPasteType}
     */
    readonly PasteType: {
        /** 粘贴全部内容。 */
        All: -4104;
        /** 粘贴除边框外的全部内容。 */
        AllExceptBorders: 7;
        /** 将粘贴所有内容，并且将合并条件格式。 */
        AllMergingConditionalFormats: 14;
        /** 使用源主题粘贴全部内容。 */
        AllUsingSourceTheme: 13;
        /** 粘贴复制的列宽。 */
        ColumnWidths: 8;
        /** 粘贴批注。 */
        Comments: -4144;
        /** 粘贴复制的源格式。 */
        Formats: -4122;
        /** 粘贴公式。 */
        Formulas: -4123;
        /** 粘贴公式和数字格式。 */
        FormulasAndNumberFormats: 11;
        /** 粘贴有效性。 */
        Validation: 6;
        /** 粘贴值。 */
        Values: -4163;
        /** 粘贴值和数字格式。 */
        ValuesAndNumberFormats: 12;
    };
    /**
     * 指定图表或内部对象的内部图案。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xlpattern)
     * @see {@link Et.EtXlPattern}
     */
    readonly Pattern: {
        /** Excel 控制图案。 */
        Automatic: -4105;
        /** 棋盘。 */
        Checker: 9;
        /** 十字线。 */
        CrissCross: 16;
        /** 从左上角到右下角线的深对角线。 */
        Down: -4121;
        /** 16% 灰。 */
        Gray16: 17;
        /** 25% 灰。 */
        Gray25: -4124;
        /** 50% 灰。 */
        Gray50: -4125;
        /** 75% 灰。 */
        Gray75: -4126;
        /** 8% 灰。 */
        Gray8: 18;
        /** 网 格。 */
        Grid: 15;
        /** 深色水平线。 */
        Horizontal: -4128;
        /** 从左上角到右下角的浅对角线。 */
        LightDown: 13;
        /** 浅色水平线。 */
        LightHorizontal: 11;
        /** 从左下到右上方的浅对角线。 */
        LightUp: 14;
        /** 浅色垂直条。 */
        LightVertical: 12;
        /** 无图案。 */
        None: -4142;
        /** 75% 深灰色。 */
        SemiGray75: 10;
        /** 纯色。 */
        Solid: 1;
        /** 从左下到右上方的深对角线。 */
        Up: -4162;
        /** 深色垂直条。 */
        Vertical: -4166;
        /** */
        LinearGradient: 4000;
        /** */
        RectangularGradient: 4001;
    };
    /**
     * 指定拼音文字的对齐方式。 用于 Phonetic 或 Phonetics 对象。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xlphoneticalignment)
     * @see {@link Et.EtXlPhoneticAlignment}
     */
    readonly PhoneticAlignment: {
        /** 中心 */
        Center: 2;
        /** 分布式 */
        Distributed: 3;
        /** 左对齐 */
        Left: 1;
        /** Excel 控制对齐方式 */
        NoControl: 0;
    };
    /**
     * 指定单元格中拼音文字的类型。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xlphoneticcharactertype)
     * @see {@link Et.EtXlPhoneticCharacterType}
     */
    readonly PhoneticCharacterType: {
        /** 平假名 */
        Hiragana: 2;
        /** 片假名 */
        Katakana: 1;
        /** 半尺寸片假名 */
        KatakanaHalf: 0;
        /** 无转换 */
        NoConversion: 3;
    };
    /**
     * 指定图片的复制方式。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xlpictureappearance)
     * @see {@link Et.EtXlPictureAppearance}
     */
    readonly PictureAppearance: {
        /** 图片按其打印效果进行复制。 */
        Printer: 2;
        /** 图片尽可能按其屏幕显示进行复制。 */
        Screen: 1;
    };
    /**
     * 指定图形的转换方式。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xlpictureconvertortype)
     * @see {@link Et.EtXlPictureConvertorType}
     */
    readonly PictureConvertorType: {
        /** Windows 版本 2.0 - 兼容的位图 */
        BMP: 1;
        /** 计算机图形图元文件 */
        CGM: 7;
        /** DRW */
        DRW: 4;
        /** Dxf */
        DXF: 5;
        /** 封装的附录 */
        EPS: 8;
        /** HGL */
        HGL: 6;
        /** 位图图形（Apple PICT 格式） */
        PCT: 13;
        /** PC 画笔位图图形 */
        PCX: 10;
        /** Pic */
        PIC: 11;
        /** Plt */
        PLT: 12;
        /** 标记图像格式文件 */
        TIF: 9;
        /** Windows Metafile */
        WMF: 2;
        /** WordPerfect/DrawPerfect 图形 */
        WPG: 3;
    };
    /**
     * 指定返回扇区上哪个位置的坐标。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xlpiesliceindex)
     */
    readonly PieSliceIndex: {
        /** 饼图扇区的中心点。 */
        CenterPoint: 5;
        /** 圆环图扇区的最里层中心点。 */
        InnerCenterPoint: 8;
        /** 圆环图扇区最大顺时针半径的最里层点。 */
        InnerClockwisePoint: 7;
        /** 圆环图扇区最大逆时针半径的最里层点。 */
        InnerCounterClockwisePoint: 9;
        /** 扇区最大顺时针半径的中点。 */
        MidClockwiseRadiusPoint: 4;
        /** 扇区最大逆时针半径的中点。 */
        MidCounterClockwiseRadiusPoint: 6;
        /** 扇区圆周的外部中心点。 */
        OuterCenterPoint: 2;
        /** 扇区圆周的最外部顺时针点。 */
        OuterClockwisePoint: 3;
        /** 扇区圆周的最外部逆时针点。 */
        OuterCounterClockwisePoint: 1;
    };
    /**
     * 指定点在饼图上的水平或垂直位置（以 磅为单位），从对象的上边缘或左边缘到图表区的上边缘或左边缘。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xlpieslicelocation)
     */
    readonly PieSliceLocation: {
        /** 水平坐标 (x) */
        HorizontalCoordinate: 1;
        /** 垂直坐标 (y) */
        VerticalCoordinate: 2;
    };
    /**
     * 指定单元格所对应的 PivotTable 实体。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xlpivotcelltype)
     * @see {@link Et.EtXlPivotCellType}
     */
    readonly PivotCellType: {
        /** 数据透视表中的结构空白单元格。 */
        BlankCell: 9;
        /** 行或列区域中作为自定义分类汇总的单元格。 */
        CustomSubtotal: 7;
        /** 数据字段标签（不是“数据”按钮）。 */
        DataField: 4;
        /** “数据”按钮。 */
        DataPivotField: 8;
        /** 行或列区域中作为总计的单元格。 */
        GrandTotal: 3;
        /** 用于显示页字段的选定项的单元格。 */
        PageFieldItem: 6;
        /** 字段的按钮（不是“数据”按钮）。 */
        PivotField: 5;
        /** 行或列区域中不是分类汇总、总计、自定义分类汇总或空行的单元格。 */
        PivotItem: 1;
        /** 行或列区域中作为分类汇总的单元格。 */
        Subtotal: 2;
        /** 数据区域中的任一单元格（空行除外）。 */
        Value: 0;
    };
    /**
     * 此枚举指定用于从 PivotTable 对象中筛选值的条件格式。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xlpivotconditionscope)
     * @see {@link Et.EtXlPivotConditionScope}
     */
    readonly PivotConditionScope: {
        /** 基于指定字段中的数据。 */
        DataFieldScope: 2;
        /** 基于指定的字段。 */
        FieldsScope: 1;
        /** 基于指定的选择条件。 */
        SelectionScope: 0;
    };
    /**
     * 指定在使用自定义计算时由数据透视字段执行的计算类型。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xlpivotfieldcalculation)
     * @see {@link Et.EtXlPivotFieldCalculation}
     */
    readonly PivotFieldCalculation: {
        /** 与基本字段中基本项的值的差。 */
        DifferenceFrom: 2;
        /** 按 ((单元格中的值) x (总计)) / ((行总计) x (列总计)) 计算的数据。 */
        Index: 9;
        /** 无计算。 */
        NoAdditionalCalculation: -4143;
        /** 与基本字段中基本项的值的差异百分比。 */
        PercentDifferenceFrom: 4;
        /** 占基本字段中基本项的值的百分比。 */
        PercentOf: 3;
        /** 占列或系列总计的百分比。 */
        PercentOfColumn: 7;
        /** 指定的父基本字段的总计的百分比。 */
        PercentOfParent: 12;
        /** 父列的总计的百分比。 */
        PercentOfParentColumn: 11;
        /** 父行的总计的百分比。 */
        PercentOfParentRow: 10;
        /** 占行或类别总计的百分比。 */
        PercentOfRow: 6;
        /** 占报表中所有数据或数据点总计的百分比。 */
        PercentOfTotal: 8;
        /** 指定 Base 字段的运行总计的百分比。 */
        PercentRunningTotal: 13;
        /** 从最小到最大排名。 */
        RankAscending: 14;
        /** 从最大到最小排名。 */
        RankDecending: 15;
        /** 以运行总和形式表示的基本字段中连续项的数据。 */
        RunningTotal: 5;
    };
    /**
     * 指定 PivotTable 字段中数据的类型。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xlpivotfielddatatype)
     * @see {@link Et.EtXlPivotFieldDataType}
     */
    readonly PivotFieldDataType: {
        /** 包含一个日期。 */
        Date: 2;
        /** 包含一个数字。 */
        Number: -4145;
        /** 包含文本。 */
        Text: -4158;
    };
    /**
     * 指定字段在数据透视表中的位置。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/office.xlpivotfieldorientation)
     */
    readonly PivotFieldOrientation: {
        /** 指定“列”字段。 */
        ColumnField: 2;
        /** 指定“数据”字段。 */
        DataField: 4;
        /** 指定字段隐藏。 */
        Hidden: 0;
        /** 指定“页”字段。 */
        PageField: 3;
        /** 指定“行”字段。 */
        RowField: 1;
    };
    /**
     * 指定是否重复数据透视表中的所有字段项目标签。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xlpivotfieldrepeatlabels)
     * @see {@link Et.EtXlPivotFieldRepeatLabels}
     */
    readonly PivotFieldRepeatLabels: {
        /** 不重复项目标签。 */
        DoNotRepeatLabels: 1;
        /** 重复所有项目标签。 */
        RepeatLabels: 2;
    };
    /**
     * 应用的筛选器的类型。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xlpivotfiltertype)
     * @see {@link Et.EtXlPivotFilterType}
     */
    readonly PivotFilterType: {
        /** 筛选早于指定日期的所有日期 */
        Before: 31;
        /** 筛选等于或早于指定日期的所有日期 */
        BeforeOrEqualTo: 32;
        /** 筛选迟于指定日期的所有日期 */
        After: 33;
        /** 筛选等于或迟于指定日期的所有日期 */
        AfterOrEqualTo: 34;
        /** 筛选一月的所有日期 */
        AllDatesInPeriodJanuary: 57;
        /** 筛选二月的所有日期 */
        AllDatesInPeriodFebruary: 58;
        /** 筛选三月的所有日期 */
        AllDatesInPeriodMarch: 59;
        /** 筛选四月的所有日期 */
        AllDatesInPeriodApril: 60;
        /** 筛选五月的所有日期 */
        AllDatesInPeriodMay: 61;
        /** 筛选六月的所有日期 */
        AllDatesInPeriodJune: 62;
        /** 筛选七月的所有日期 */
        AllDatesInPeriodJuly: 63;
        /** 筛选八月的所有日期 */
        AllDatesInPeriodAugust: 64;
        /** 筛选九月的所有日期 */
        AllDatesInPeriodSeptember: 65;
        /** 筛选十月的所有日期 */
        AllDatesInPeriodOctober: 66;
        /** 筛选十一月的所有日期 */
        AllDatesInPeriodNovember: 67;
        /** 筛选十二月的所有日期 */
        AllDatesInPeriodDecember: 68;
        /** 筛选第一季度中的所有日期 */
        AllDatesInPeriodQuarter1: 53;
        /** 筛选第二季度中的所有日期 */
        AllDatesInPeriodQuarter2: 54;
        /** 筛选第三季度中的所有日期 */
        AllDatesInPeriodQuarter3: 55;
        /** 筛选第四季度中的所有日期 */
        AllDatesInPeriodQuarter4: 56;
        /** 从列表底部筛选指定数量的值 */
        BottomCount: 2;
        /** 从列表底部筛选指定百分比的值 */
        BottomPercent: 4;
        /** 列表底部的值的总和 */
        BottomSum: 6;
        /** 筛选以指定字符串开头的所有标题 */
        CaptionBeginsWith: 17;
        /** 筛选包含指定字符串的所有标题 */
        CaptionContains: 21;
        /** 未以指定字符串开头的所有标题的筛选器 */
        CaptionDoesNotBeginWith: 18;
        /** 筛选不包含指定字符串的所有标题 */
        CaptionDoesNotContain: 22;
        /** 筛选不以指定字符串结尾的所有标题 */
        CaptionDoesNotEndWith: 20;
        /** 筛选与指定字符串不匹配的所有标题 */
        CaptionDoesNotEqual: 16;
        /** 筛选以指定字符串结尾的所有标题 */
        CaptionEndsWith: 19;
        /** 筛选与指定字符串匹配的所有标题 */
        CaptionEquals: 15;
        /** 筛选介于指定值范围内的所有标题 */
        CaptionIsBetween: 27;
        /** 筛选大于指定值的所有标题 */
        CaptionIsGreaterThan: 23;
        /** 筛选大于指定值或与指定值匹配的所有标题 */
        CaptionIsGreaterThanOrEqualTo: 24;
        /** 筛选小于指定值的所有标题 */
        CaptionIsLessThan: 25;
        /** 筛选小于指定值或与指定值匹配的所有标题 */
        CaptionIsLessThanOrEqualTo: 26;
        /** 筛选不介于指定值范围内的所有标题 */
        CaptionIsNotBetween: 28;
        /** 筛选介于指定日期范围内的所有日期 */
        DateBetween: 35;
        /** 筛选牵涉到上个月的所有日期 */
        DateLastMonth: 45;
        /** 筛选牵涉到上季度的所有日期 */
        DateLastQuarter: 48;
        /** 筛选牵涉到上周的所有日期 */
        DateLastWeek: 42;
        /** 筛选牵涉到上一年的所有日期 */
        DateLastYear: 51;
        /** 筛选牵涉到下月的所有日期 */
        DateNextMonth: 43;
        /** 筛选牵涉到下季度的所有日期 */
        DateNextQuarter: 46;
        /** 筛选牵涉到下周的所有日期 */
        DateNextWeek: 40;
        /** 筛选牵涉到下一年的所有日期 */
        DateNextYear: 49;
        /** 筛选牵涉到本月的所有日期 */
        DateThisMonth: 44;
        /** 筛选牵涉到本季度的所有日期 */
        DateThisQuarter: 47;
        /** 筛选牵涉到本周的所有日期 */
        DateThisWeek: 41;
        /** 筛选牵涉到本年度的所有日期 */
        DateThisYear: 50;
        /** 筛选牵涉到当前日期的所有日期 */
        DateToday: 38;
        /** 筛选牵涉到下一天的所有日期 */
        DateTomorrow: 37;
        /** 筛选牵涉到前一天的所有日期 */
        DateYesterday: 39;
        /** 筛选与指定日期不匹配的所有日期 */
        NotSpecificDate: 30;
        /** 筛选与指定日期匹配的所有日期 */
        SpecificDate: 29;
        /** 从列表顶部筛选指定数量的值 */
        TopCount: 1;
        /** 从列表中筛选指定百分比的值 */
        TopPercent: 3;
        /** 列表顶部的值的总和 */
        TopSum: 5;
        /** 筛选与指定值不匹配的所有值 */
        ValueDoesNotEqual: 8;
        /** 筛选与指定值匹配的所有值 */
        ValueEquals: 7;
        /** 筛选介于指定值范围内的所有值 */
        ValueIsBetween: 13;
        /** 筛选大于指定值的所有值 */
        ValueIsGreaterThan: 9;
        /** 筛选大于指定值或与指定值匹配的所有值 */
        ValueIsGreaterThanOrEqualTo: 10;
        /** 筛选小于指定值的所有值 */
        ValueIsLessThan: 11;
        /** 筛选小于指定值或与指定值匹配的所有值 */
        ValueIsLessThanOrEqualTo: 12;
        /** 筛选不介于指定值范围内的所有值 */
        ValueIsNotBetween: 14;
        /** 筛选指定日期的一年内的所有值 */
        YearToDate: 52;
        /**  */
        DateNotBetween: 36;
    };
    /**
     * 指定要应用于指定数据透视表的报表格式类型。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xlpivotformattype)
     * @see {@link Et.EtXlPivotFormatType}
     */
    readonly PivotFormatType: {
        /** 数据透视表传统格式。 */
        PTClassic: 20;
        /** 不对数据透视表应用格式。 */
        PTNone: 21;
        /** 对数据透视表使用 xlReport1 格式。 */
        Report1: 0;
        /** 对数据透视表使用 xlReport10 格式。 */
        Report10: 9;
        /** 对数据透视表使用 xlReport2 格式。 */
        Report2: 1;
        /** 对数据透视表使用 xlReport3 格式。 */
        Report3: 2;
        /** 对数据透视表使用 xlReport4 格式。 */
        Report4: 3;
        /** 对数据透视表使用 xlReport5 格式。 */
        Report5: 4;
        /** 对数据透视表使用 xlReport6 格式。 */
        Report6: 5;
        /** 对数据透视表使用 xlReport7 格式。 */
        Report7: 6;
        /** 对数据透视表使用 xlReport8 格式。 */
        Report8: 7;
        /** 对数据透视表使用 xlReport9 格式。 */
        Report9: 8;
        /** 对数据透视表使用 xlTable1 格式。 */
        Table1: 10;
        /** 对数据透视表使用 xlTable10 格式。 */
        Table10: 19;
        /** 对数据透视表使用 xlTable2 格式。 */
        Table2: 11;
        /** 对数据透视表使用 xlTable3 格式。 */
        Table3: 12;
        /** 对数据透视表使用 xlTable4 格式。 */
        Table4: 13;
        /** 对数据透视表使用 xlTable5 格式。 */
        Table5: 14;
        /** 对数据透视表使用 xlTable6 格式。 */
        Table6: 15;
        /** 对数据透视表使用 xlTable7 格式。 */
        Table7: 16;
        /** 对数据透视表使用 xlTable8 格式。 */
        Table8: 17;
        /** 对数据透视表使用 xlTable9 格式。 */
        Table9: 18;
    };
    /**
     * 指定 PivotLine 的类型。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xlpivotlinetype)
     * @see {@link Et.EtXlPivotLineType}
     */
    readonly PivotLineType: {
        /** 每组后的空行。 */
        Blank: 3;
        /** 总计行。 */
        GrandTotal: 2;
        /** 带有透视项目的常规 PivotLine。 */
        Regular: 0;
        /** 分类汇总行。 */
        Subtotal: 1;
    };
    /**
     * 指定每个透视字段允许具有的唯一项的最大数量。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xlpivottablemissingitems)
     * @see {@link Et.EtXlPivotTableMissingItems}
     */
    readonly PivotTableMissingItems: {
        /** 允许每个透视字段具有的唯一项的默认数量。 */
        Default: -1;
        /** 对于 Excel 2007 数据透视表，每个数据透视表允许的最大唯一项目数 (32，500) 。 */
        Max: 32500;
        /** Excel 2007 及更高版本中每个数据透视表允许的最大唯一项目数 (1，048，576) 。 */
        Max2: 1048576;
        /** 每个透视表中不允许具有唯一项（零）。 */
        None: 0;
    };
    /**
     * 指定报告数据源。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xlpivottablesourcetype)
     * @see {@link Et.EtXlPivotTableSourceType}
     */
    readonly PivotTableSourceType: {
        /** 多重合并计算数据区域。 */
        Consolidation: 3;
        /** Microsoft Excel 列表或数据库。 */
        Database: 1;
        /** 其他应用程序中的数据。 */
        External: 2;
        /** 与另一数据透视表相同来源。 */
        PivotTable: -4148;
        /** 数据基于使用方案管理器创建的方案。 */
        Scenario: 4;
    };
    /**
     * 指定数据透视表或数据透视表缓存的版本。使用特定版本创建数据透视表可确保在 Excel 中创建的表的行为方式与相应版本的 Excel 中的表相同。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xlpivottableversionlist)
     * @see {@link Et.EtXlPivotTableVersionList}
     */
    readonly PivotTableVersionList: {
        /** Excel 2000 */
        2000: 0;
        /** Excel 2002 */
        10: 1;
        /** Excel 2003 */
        11: 2;
        /** Excel 2007 */
        12: 3;
        /** Excel 2010 */
        14: 4;
        /** Excel 2013 */
        15: 5;
        /** 仅为向后兼容性而提供 */
        Current: -1;
    };
    /**
     * 指定对象附加到其下层单元格的方式。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xlplacement)
     * @see {@link Et.EtXlPlacement}
     */
    readonly Placement: {
        /** 对象自由浮动。 */
        FreeFloating: 3;
        /** 对象随单元格移动。 */
        Move: 2;
        /** 对象随单元格移动和调整大小。 */
        MoveAndSize: 1;
    };
    /**
     * 指定生成文本文件的平台。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xlplatform)
     * @see {@link Et.EtXlPlatform}
     */
    readonly Platform: {
        /** Macintosh */
        Macintosh: 1;
        /** Ms-dos */
        MSDOS: 3;
        /** Microsoft Windows */
        Windows: 2;
    };
    /**
     * 指定检查葡萄牙语的拼写的模式。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xlportuguesereform)
     * @see {@link Et.EtXlPortugueseReform}
     */
    readonly PortugueseReform: {
        /** 拼写检查器识别前期修订和后期修订拼写。 */
        Both: 3;
        /** 拼写检查器仅识别改革后的拼写。 */
        PostReform: 2;
        /** 拼写检查器仅识别预改拼写。 */
        PreReform: 1;
    };
    /**
     * 指定显示的打印错误的类型。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xlprinterrors)
     * @see {@link Et.EtXlPrintErrors}
     */
    readonly PrintErrors: {
        /** 打印错误为空白。 */
        Blank: 1;
        /** 打印错误显示为划线。 */
        Dash: 2;
        /** 显示全部打印错误。 */
        Displayed: 0;
        /** 打印错误显示为不可用。 */
        NA: 3;
    };
    /**
     * 指定表中批注的打印方式。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xlprintlocation)
     * @see {@link Et.EtXlPrintLocation}
     */
    readonly PrintLocation: {
        /** 注释将打印在工作表上插入的位置。 */
        InPlace: 16;
        /** 不打印批注。 */
        NoComments: -4142;
        /** 批注打印为工作表末尾的尾注。 */
        SheetEnd: 1;
    };
    /**
     * 指定 SendMailer 消息的优先级。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xlpriority)
     * @see {@link Et.EtXlPriority}
     */
    readonly Priority: {
        /** 高 */
        High: -4127;
        /** 低 */
        Low: -4134;
        /** 一般 */
        Normal: -4143;
    };
    /**
     * 指定显示属性的位置。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xlpropertydisplayedin)
     * @see {@link Et.EtXlPropertyDisplayedIn}
     */
    readonly PropertyDisplayedIn: {
        /** 只在数据透视表中显示成员属性。 此值为默认值。 */
        PivotTable: 1;
        /** 只在工具提示中显示成员属性。 */
        PivotTableAndTooltip: 3;
        /** 同时在工具提示和数据透视表中显示成员属性。 */
        Tooltip: 2;
    };
    /**
     * 指定如何关闭受保护的视图窗口。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xlprotectedviewclosereason)
     * @see {@link Et.EtXlProtectedViewCloseReason}
     */
    readonly ProtectedViewCloseReason: {
        /** 当用户单击“ 启用编辑 ”按钮时，窗口已关闭。 */
        Edit: 1;
        /** 窗口已关闭，因为应用程序强制关闭窗口或停止响应。 */
        Forced: 2;
        /** 该窗口正常关闭。 */
        Normal: 0;
    };
    /**
     * 指定“受保护的视图”窗口的状态。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xlprotectedviewwindowstate)
     * @see {@link Et.EtXlProtectedViewWindowState}
     */
    readonly ProtectedViewWindowState: {
        /** 最大化 */
        Maximized: 2;
        /** 最小化 */
        Minimized: 1;
        /** 一般 */
        Normal: 0;
    };
    /**
     * 指定 Microsoft Excel 在填充查询表或数据透视表缓存时所使用的查询类型。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xlquerytype)
     * @see {@link Et.EtXlQueryType}
     */
    readonly QueryType: {
        /** 基于 ADO 记录集查询 */
        ADORecordset: 7;
        /** 基于 DAO 记录集查询，只用于查询表 */
        DAORecordset: 2;
        /** 基于 ODBC 数据源 */
        ODBCQuery: 1;
        /** 基于 OLE DB 查询，包括 OLAP 数据源 */
        OLEDBQuery: 5;
        /** 基于文本文件，仅用于查询表 */
        TextImport: 6;
        /** 基于网页，仅适用于查询表 */
        WebQuery: 4;
    };
    /**
     * 指示显示标注用户界面的顶级按钮。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xlquickanalysismode)
     * @see {@link Et.EtXlQuickAnalysisMode}
     */
    readonly QuickAnalysisMode: {
        /** 显示按钮，但没有标注用户界面 */
        LensOnly: 0;
        /** 条件格式 */
        FormatConditions: 1;
        /** 图表 */
        RecommendedCharts: 2;
        /** 总数 */
        Totals: 3;
        /** 表格 */
        Tables: 4;
        /** 迷你图 */
        Sparklines: 5;
    };
    /**
     * 指定自动设置区域格式时的预定义格式。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xlrangeautoformat)
     * @see {@link Et.EtXlRangeAutoFormat}
     */
    readonly RangeAutoFormat: {
        /** 3D 效果 1。 */
        '3DEffects1': 13;
        /** 3D 效果 2。 */
        '3DEffects2': 14;
        /** 会计 1。 */
        Accounting1: 4;
        /** 会计 2。 */
        Accounting2: 5;
        /** 会计 3。 */
        Accounting3: 6;
        /** 会计 4。 */
        Accounting4: 17;
        /** 古典 1。 */
        Classic1: 1;
        /** 古典 2。 */
        Classic2: 2;
        /** 古典 3。 */
        Classic3: 3;
        /** 经典数据透视表。 */
        ClassicPivotTable: 31;
        /** 彩色 1。 */
        Color1: 7;
        /** 彩色 2。 */
        Color2: 8;
        /** 彩色 3。 */
        Color3: 9;
        /** 列表 1。 */
        List1: 10;
        /** 列表 2。 */
        List2: 11;
        /** 列表 3。 */
        List3: 12;
        /** 本地格式 1。 */
        LocalFormat1: 15;
        /** 本地格式 2。 */
        LocalFormat2: 16;
        /** 本地格式 3。 */
        LocalFormat3: 19;
        /** 本地格式 4。 */
        LocalFormat4: 20;
        /** 无指定格式。 */
        None: -4142;
        /** 没有指定的数据透视表格式。 */
        PTNone: 42;
        /** 报表 1。 */
        Report1: 21;
        /** 报表 10。 */
        Report10: 30;
        /** 报表 2。 */
        Report2: 22;
        /** 报表 3。 */
        Report3: 23;
        /** 报表 4。 */
        Report4: 24;
        /** 报表 5。 */
        Report5: 25;
        /** 报表 6。 */
        Report6: 26;
        /** 报表 7。 */
        Report7: 27;
        /** 报表 8。 */
        Report8: 28;
        /** 报表 9。 */
        Report9: 29;
        /** 简明型。 */
        Simple: -4154;
        /** 表 1. */
        Table1: 32;
        /** 表 10. */
        Table10: 41;
        /** 表 2. */
        Table2: 33;
        /** 表 3. */
        Table3: 34;
        /** 表 4. */
        Table4: 35;
        /** 表 5. */
        Table5: 36;
        /** 表 6. */
        Table6: 37;
        /** 表 7. */
        Table7: 38;
        /** 表 8. */
        Table8: 39;
        /** 表 9. */
        Table9: 40;
    };
    /**
     * 指定区域值数据类型。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xlrangevaluedatatype)
     * @see {@link Et.EtXlRangeValueDataType}
     */
    readonly RangeValueDataType: {
        /**
         * 默认值。 如果指定的 Range 对象为空，则返回 undefined 值 。
         * 如果 Range 对象包含多个单元格，则返回值的数组（可用 `Array.isArray` 函数测试这种情况）。
         */
        Default: 10;
        /** 以 XML 格式返回指定的 Range 对象的记录集表示形式。 */
        MSPersistXML: 12;
        /** 以 XML 电子表格格式返回指定的 Range 对象的值、格式、公式和名称。 */
        XMLSpreadsheet: 11;
    };
    /**
     * 指定引用样式。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xlreferencestyle)
     * @see {@link Et.EtXlReferenceStyle}
     */
    readonly ReferenceStyle: {
        /** 默认值。 使用 xlA1 返回 A1 样式的引用。 */
        A1: 1;
        /** 使用 xlR1C1 返回 R1C1 样式的引用。 */
        R1C1: -4150;
    };
    /**
     * 指定转换公式时的单元格引用样式。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xlreferencetype)
     * @see {@link Et.EtXlReferenceType}
     */
    readonly ReferenceType: {
        /** 转换为绝对行和列样式。 */
        Absolute: 1;
        /** 转换为绝对行和相对列样式。 */
        AbsRowRelColumn: 2;
        /** 转换为相对行和列样式。 */
        Relative: 4;
        /** 转换为相对行和绝对列样式。 */
        RelRowAbsColumn: 3;
    };
    /**
     * 指定要从文档信息中删除的类型信息。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xlremovedocinfotype)
     * @see {@link Et.EtXlRemoveDocInfoType}
     */
    readonly RemoveDocInfoType: {
        /** 删除所有文档信息。 */
        All: 99;
        /** 从文档信息中删除批注。 */
        Comments: 1;
        /** 从文档信息中删除内容类型数据。 */
        ContentType: 16;
        /** 从文档信息中删除定义的名称批注。 */
        DefinedNameComments: 18;
        /** 从文档信息中删除文档管理策略数据。 */
        DocumentManagementPolicy: 15;
        /** 从文档信息中删除文档属性。 */
        DocumentProperties: 8;
        /** 从文档信息中删除服务器属性。 */
        DocumentServerProperties: 14;
        /** 从文档信息中删除工作空间数据。 */
        DocumentWorkspace: 10;
        /** 从文档信息中删除电子邮件头。 */
        EmailHeader: 5;
        /** 从文档信息中删除数据模型数据。 */
        ExcelDataModel: 23;
        /** 从文档信息中删除非活动数据连接数据。 */
        InactiveDataConnections: 19;
        /** 从文档信息中删除墨迹注释。 */
        InkAnnotations: 11;
        /** 从文档信息中删除内联 Web 扩展。 */
        InlineWebExtensions: 21;
        /** 从文档信息中删除指针路径。 */
        PrinterPath: 20;
        /** 从文档信息中删除发布信息数据。 */
        PublishInfo: 13;
        /** 从文档信息中删除个人信息。 */
        RemovePersonalInformation: 4;
        /** 从文档信息中删除传送名单信息。 */
        RoutingSlip: 6;
        /** 从文档信息中删除方案批注。 */
        ScenarioComments: 12;
        /** 从文档信息中删除请求审阅信息。 */
        SendForReview: 7;
        /** 从文档信息中删除任务窗格 Web 扩展。 */
        TaskpaneWebExtensions: 22;
    };
    /**
     * 指定 RGB 颜色。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xlrgbcolor)
     * @see {@link Et.EtXlRgbColor}
     */
    readonly RgbColor: {
        /** 艾莉斯蓝 <div style="background-color: #f0f8ff; width: 200px; height: 20px;"></div> */
        AliceBlue: 16775408;
        /** 古董白 <div style="background-color: #faebd7; width: 200px; height: 20px;"></div> */
        AntiqueWhite: 14150650;
        /** 青色 <div style="background-color: #00ffff; width: 200px; height: 20px;"></div> */
        Aqua: 16776960;
        /** 玉色 <div style="background-color: #7fffd4; width: 200px; height: 20px;"></div> */
        Aquamarine: 13959039;
        /** 米色 <div style="background-color: #f5f5dc; width: 200px; height: 20px;"></div> */
        Beige: 14480885;
        /** 乳黄色 <div style="background-color: #ffe4c4; width: 200px; height: 20px;"></div> */
        Bisque: 12903679;
        /** 黑色 <div style="background-color: #000000; width: 200px; height: 20px;"></div> */
        Black: 0;
        /** 杏仁白 <div style="background-color: #ffebcd; width: 200px; height: 20px;"></div> */
        BlanchedAlmond: 13495295;
        /** 蓝色 <div style="background-color: #0000ff; width: 200px; height: 20px;"></div> */
        Blue: 16711680;
        /** 蓝紫色 <div style="background-color: #8a2be2; width: 200px; height: 20px;"></div> */
        BlueViolet: 14822282;
        /** 褐色 <div style="background-color: #a52a2a; width: 200px; height: 20px;"></div> */
        Brown: 2763429;
        /** 原木色 <div style="background-color: #deb887; width: 200px; height: 20px;"></div> */
        BurlyWood: 8894686;
        /** 军队蓝 <div style="background-color: #5f9ea0; width: 200px; height: 20px;"></div> */
        CadetBlue: 10526303;
        /** 浅黄绿色 <div style="background-color: #7fff00; width: 200px; height: 20px;"></div> */
        Chartreuse: 65407;
        /** 珊瑚红 <div style="background-color: #ff7f50; width: 200px; height: 20px;"></div> */
        Coral: 5275647;
        /** 藏蓝色 <div style="background-color: #6495ed; width: 200px; height: 20px;"></div> */
        CornflowerBlue: 15570276;
        /** 玉米黄 <div style="background-color: #fff8dc; width: 200px; height: 20px;"></div> */
        Cornsilk: 14481663;
        /** 暗红色 <div style="background-color: #dc143c; width: 200px; height: 20px;"></div> */
        Crimson: 3937500;
        /** 深蓝色 <div style="background-color: #00008b; width: 200px; height: 20px;"></div> */
        DarkBlue: 9109504;
        /** 深青色 <div style="background-color: #008b8b; width: 200px; height: 20px;"></div> */
        DarkCyan: 9145088;
        /** 深金黄色 <div style="background-color: #b8860b; width: 200px; height: 20px;"></div> */
        DarkGoldenrod: 755384;
        /** 深灰色 <div style="background-color: #a9a9a9; width: 200px; height: 20px;"></div> */
        DarkGray: 11119017;
        /** 深绿色 <div style="background-color: #006400; width: 200px; height: 20px;"></div> */
        DarkGreen: 25600;
        /** 深灰色 <div style="background-color: #a9a9a9; width: 200px; height: 20px;"></div> */
        DarkGrey: 11119017;
        /** 深褐色 <div style="background-color: #bdb76b; width: 200px; height: 20px;"></div> */
        DarkKhaki: 7059389;
        /** 深洋红色 <div style="background-color: #8b008b; width: 200px; height: 20px;"></div> */
        DarkMagenta: 9109643;
        /** 深橄榄绿色 <div style="background-color: #556b2f; width: 200px; height: 20px;"></div> */
        DarkOliveGreen: 3107669;
        /** 深橙色 <div style="background-color: #ff8c00; width: 200px; height: 20px;"></div> */
        DarkOrange: 36095;
        /** 深兰花色 <div style="background-color: #9932cc; width: 200px; height: 20px;"></div> */
        DarkOrchid: 13382297;
        /** 深红色 <div style="background-color: #8b0000; width: 200px; height: 20px;"></div> */
        DarkRed: 139;
        /** 深橙红 <div style="background-color: #e9967a; width: 200px; height: 20px;"></div> */
        DarkSalmon: 8034025;
        /** 深海绿色 <div style="background-color: #8fbc8f; width: 200px; height: 20px;"></div> */
        DarkSeaGreen: 9419919;
        /** 深灰蓝色 <div style="background-color: #483d8b; width: 200px; height: 20px;"></div> */
        DarkSlateBlue: 9125192;
        /** 深石板灰 <div style="background-color: #2f4f4f; width: 200px; height: 20px;"></div> */
        DarkSlateGray: 5197615;
        /** 深石板灰 <div style="background-color: #2f4f4f; width: 200px; height: 20px;"></div> */
        DarkSlateGrey: 5197615;
        /** 深青绿色 <div style="background-color: #00ced1; width: 200px; height: 20px;"></div> */
        DarkTurquoise: 13749760;
        /** 深紫色 <div style="background-color: #9400d3; width: 200px; height: 20px;"></div> */
        DarkViolet: 13828244;
        /** 深粉色 <div style="background-color: #ff1493; width: 200px; height: 20px;"></div> */
        DeepPink: 9639167;
        /** 深天蓝色 <div style="background-color: #00bfff; width: 200px; height: 20px;"></div> */
        DeepSkyBlue: 16760576;
        /** 暗灰色 <div style="background-color: #696969; width: 200px; height: 20px;"></div> */
        DimGray: 6908265;
        /** 暗灰色 <div style="background-color: #696969; width: 200px; height: 20px;"></div> */
        DimGrey: 6908265;
        /** 宝蓝 <div style="background-color: #1e90ff; width: 200px; height: 20px;"></div> */
        DodgerBlue: 16748574;
        /** 砖红色 <div style="background-color: #b22222; width: 200px; height: 20px;"></div> */
        FireBrick: 2237106;
        /** 花白 <div style="background-color: #fffaf0; width: 200px; height: 20px;"></div> */
        FloralWhite: 15792895;
        /** 森林绿 <div style="background-color: #228b22; width: 200px; height: 20px;"></div> */
        ForestGreen: 2263842;
        /** 紫红色 <div style="background-color: #ff00ff; width: 200px; height: 20px;"></div> */
        Fuchsia: 16711935;
        /** 亮灰 <div style="background-color: #dcdcdc; width: 200px; height: 20px;"></div> */
        Gainsboro: 14474460;
        /** 苍白 <div style="background-color: #f8f8ff; width: 200px; height: 20px;"></div> */
        GhostWhite: 16775416;
        /** 金色 <div style="background-color: #ffd700; width: 200px; height: 20px;"></div> */
        Gold: 55295;
        /** 金黄色 <div style="background-color: #daa520; width: 200px; height: 20px;"></div> */
        Goldenrod: 2139610;
        /** 灰色 <div style="background-color: #808080; width: 200px; height: 20px;"></div> */
        Gray: 8421504;
        /** 绿色 <div style="background-color: #008000; width: 200px; height: 20px;"></div> */
        Green: 32768;
        /** 青黄色 <div style="background-color: #adff2f; width: 200px; height: 20px;"></div> */
        GreenYellow: 3145645;
        /** 灰色 <div style="background-color: #808080; width: 200px; height: 20px;"></div> */
        Grey: 8421504;
        /** 蜜色 <div style="background-color: #f0fff0; width: 200px; height: 20px;"></div> */
        Honeydew: 15794160;
        /** 暗粉 <div style="background-color: #ff69b4; width: 200px; height: 20px;"></div> */
        HotPink: 11823615;
        /** 印度红 <div style="background-color: #cd5c5c; width: 200px; height: 20px;"></div> */
        IndianRed: 6053069;
        /** 靛蓝色 <div style="background-color: #4b0082; width: 200px; height: 20px;"></div> */
        Indigo: 8519755;
        /** 象牙色 <div style="background-color: #fffff0; width: 200px; height: 20px;"></div> */
        Ivory: 15794175;
        /** 黄褐色 <div style="background-color: #f0e68c; width: 200px; height: 20px;"></div> */
        Khaki: 9234160;
        /** 淡紫色 <div style="background-color: #e6e6fa; width: 200px; height: 20px;"></div> */
        Lavender: 16443110;
        /** 淡紫红色 <div style="background-color: #fff0f5; width: 200px; height: 20px;"></div> */
        LavenderBlush: 16118015;
        /** 草绿色 <div style="background-color: #7cfc00; width: 200px; height: 20px;"></div> */
        LawnGreen: 64636;
        /** 柠檬色 <div style="background-color: #fffacd; width: 200px; height: 20px;"></div> */
        LemonChiffon: 13499135;
        /** 浅蓝色 <div style="background-color: #add8e6; width: 200px; height: 20px;"></div> */
        LightBlue: 15128749;
        /** 浅珊瑚红 <div style="background-color: #f08080; width: 200px; height: 20px;"></div> */
        LightCoral: 8421616;
        /** 浅青色 <div style="background-color: #008b8b; width: 200px; height: 20px;"></div> */
        LightCyan: 9145088;
        /** 浅灰色 <div style="background-color: #d3d3d3; width: 200px; height: 20px;"></div> */
        LightGray: 13882323;
        /** 浅绿色 <div style="background-color: #90ee90; width: 200px; height: 20px;"></div> */
        LightGreen: 9498256;
        /** 浅灰色 <div style="background-color: #d3d3d3; width: 200px; height: 20px;"></div> */
        LightGrey: 13882323;
        /** 浅粉色 <div style="background-color: #ffb6c1; width: 200px; height: 20px;"></div> */
        LightPink: 12695295;
        /** 浅橙红 <div style="background-color: #ffa07a; width: 200px; height: 20px;"></div> */
        LightSalmon: 8036607;
        /** 浅海绿色 <div style="background-color: #20b2aa; width: 200px; height: 20px;"></div> */
        LightSeaGreen: 11186720;
        /** 浅天蓝色 <div style="background-color: #87cefa; width: 200px; height: 20px;"></div> */
        LightSkyBlue: 16436871;
        /** 浅石板灰 <div style="background-color: #778899; width: 200px; height: 20px;"></div> */
        LightSlateGray: 10061943;
        /** 浅钢蓝色 <div style="background-color: #b0c4de; width: 200px; height: 20px;"></div> */
        LightSteelBlue: 14599344;
        /** 浅黄色 <div style="background-color: #ffffe0; width: 200px; height: 20px;"></div> */
        LightYellow: 14745599;
        /** 酸橙色 <div style="background-color: #00ff00; width: 200px; height: 20px;"></div> */
        Lime: 65280;
        /** 暗黄绿色 <div style="background-color: #32cd32; width: 200px; height: 20px;"></div> */
        LimeGreen: 3329330;
        /** 亚麻布色 <div style="background-color: #faf0e6; width: 200px; height: 20px;"></div> */
        Linen: 15134970;
        /** 褐紫红 <div style="background-color: #800000; width: 200px; height: 20px;"></div> */
        Maroon: 128;
        /** 中玉色 <div style="background-color: #66ffaa; width: 200px; height: 20px;"></div> */
        MediumAquamarine: 11206502;
        /** 中蓝色 <div style="background-color: #0000cd; width: 200px; height: 20px;"></div> */
        MediumBlue: 13434880;
        /** 中兰花色 <div style="background-color: #ba55d3; width: 200px; height: 20px;"></div> */
        MediumOrchid: 13850042;
        /** 中紫色 <div style="background-color: #9370db; width: 200px; height: 20px;"></div> */
        MediumPurple: 14381203;
        /** 中海绿色 <div style="background-color: #3cb371; width: 200px; height: 20px;"></div> */
        MediumSeaGreen: 7451452;
        /** 中蓝灰色 <div style="background-color: #7b68ee; width: 200px; height: 20px;"></div> */
        MediumSlateBlue: 15624315;
        /** 中草绿色 <div style="background-color: #00fa9a; width: 200px; height: 20px;"></div> */
        MediumSpringGreen: 10156544;
        /** 中玉色 <div style="background-color: #48d1cc; width: 200px; height: 20px;"></div> */
        MediumTurquoise: 13422920;
        /** 中紫罗兰色 <div style="background-color: #c71585; width: 200px; height: 20px;"></div> */
        MediumVioletRed: 8721863;
        /** 蓝黑色 <div style="background-color: #191970; width: 200px; height: 20px;"></div> */
        MidnightBlue: 7346457;
        /** 薄荷乳白 <div style="background-color: #f5fffa; width: 200px; height: 20px;"></div> */
        MintCream: 16449525;
        /** 粉红玫瑰 <div style="background-color: #ffe4e1; width: 200px; height: 20px;"></div> */
        MistyRose: 14804223;
        /** 鹿皮黄 <div style="background-color: #ffe4b5; width: 200px; height: 20px;"></div> */
        Moccasin: 11920639;
        /** 印地安黄 <div style="background-color: #ffdead; width: 200px; height: 20px;"></div> */
        NavajoWhite: 11394815;
        /** 海军蓝 <div style="background-color: #000080; width: 200px; height: 20px;"></div> */
        Navy: 8388608;
        /** 海军蓝 <div style="background-color: #000080; width: 200px; height: 20px;"></div> */
        NavyBlue: 8388608;
        /** 旧布黄 <div style="background-color: #fdf5e6; width: 200px; height: 20px;"></div> */
        OldLace: 15136253;
        /** 橄榄色 <div style="background-color: #808000; width: 200px; height: 20px;"></div> */
        Olive: 32896;
        /** 暗橄榄色 <div style="background-color: #6b8e23; width: 200px; height: 20px;"></div> */
        OliveDrab: 2330219;
        /** 橙色 <div style="background-color: #ffa500; width: 200px; height: 20px;"></div> */
        Orange: 42495;
        /** 桔红色 <div style="background-color: #ff4500; width: 200px; height: 20px;"></div> */
        OrangeRed: 17919;
        /** 淡紫色 <div style="background-color: #da70d6; width: 200px; height: 20px;"></div> */
        Orchid: 14053594;
        /** 淡金黄色 <div style="background-color: #eee86b; width: 200px; height: 20px;"></div> */
        PaleGoldenrod: 7071982;
        /** 淡绿色 <div style="background-color: #98fb98; width: 200px; height: 20px;"></div> */
        PaleGreen: 10025880;
        /** 浅青绿色 <div style="background-color: #afeeee; width: 200px; height: 20px;"></div> */
        PaleTurquoise: 15658671;
        /** 浅紫红色 <div style="background-color: #db7093; width: 200px; height: 20px;"></div> */
        PaleVioletRed: 9662683;
        /** 粉木瓜橙 <div style="background-color: #ffefd5; width: 200px; height: 20px;"></div> */
        PapayaWhip: 14020607;
        /** 粉桃红 <div style="background-color: #ffdab9; width: 200px; height: 20px;"></div> */
        PeachPuff: 12180223;
        /** 秘鲁 <div style="background-color: #cd853f; width: 200px; height: 20px;"></div> */
        Peru: 4163021;
        /** 粉红色 <div style="background-color: #ffc0cb; width: 200px; height: 20px;"></div> */
        Pink: 13353215;
        /** 青紫色 <div style="background-color: #dda0dd; width: 200px; height: 20px;"></div> */
        Plum: 14524637;
        /** 粉蓝色 <div style="background-color: #b0e0e6; width: 200px; height: 20px;"></div> */
        PowderBlue: 15130800;
        /** 紫色 <div style="background-color: #800080; width: 200px; height: 20px;"></div> */
        Purple: 8388736;
        /** 红色 <div style="background-color: #ff0000; width: 200px; height: 20px;"></div> */
        Red: 255;
        /** 玫瑰褐色 <div style="background-color: #bc8f8f; width: 200px; height: 20px;"></div> */
        RosyBrown: 9408444;
        /** 贵族蓝 <div style="background-color: #4169e1; width: 200px; height: 20px;"></div> */
        RoyalBlue: 14772545;
        /** 浅橙色 <div style="background-color: #fa8072; width: 200px; height: 20px;"></div> */
        Salmon: 7504122;
        /** 浅褐色 <div style="background-color: #f4a460; width: 200px; height: 20px;"></div> */
        SandyBrown: 6333684;
        /** 海绿色 <div style="background-color: #2e8b57; width: 200px; height: 20px;"></div> */
        SeaGreen: 5737262;
        /** 贝壳白 <div style="background-color: #fff5ee; width: 200px; height: 20px;"></div> */
        Seashell: 15660543;
        /** 赭石 <div style="background-color: #a0522d; width: 200px; height: 20px;"></div> */
        Sienna: 2970272;
        /** 银白 <div style="background-color: #c0c0c0; width: 200px; height: 20px;"></div> */
        Silver: 12632256;
        /** 天蓝色 <div style="background-color: #87ceeb; width: 200px; height: 20px;"></div> */
        SkyBlue: 15453831;
        /** 灰蓝色 <div style="background-color: #6a5acd; width: 200px; height: 20px;"></div> */
        SlateBlue: 13458026;
        /** 石板灰 <div style="background-color: #708090; width: 200px; height: 20px;"></div> */
        SlateGray: 9470064;
        /** 雪白 <div style="background-color: #fffafa; width: 200px; height: 20px;"></div> */
        Snow: 16448255;
        /** 草绿色 <div style="background-color: #00ff7f; width: 200px; height: 20px;"></div> */
        SpringGreen: 8388352;
        /** 刚蓝色 <div style="background-color: #4682b4; width: 200px; height: 20px;"></div> */
        SteelBlue: 11829830;
        /** 茶色 <div style="background-color: #d2b48c; width: 200px; height: 20px;"></div> */
        Tan: 9221330;
        /** 青色 <div style="background-color: #008080; width: 200px; height: 20px;"></div> */
        Teal: 8421376;
        /** 蓟色 <div style="background-color: #d8bfd8; width: 200px; height: 20px;"></div> */
        Thistle: 14204888;
        /** 番茄色 <div style="background-color: #ff6347; width: 200px; height: 20px;"></div> */
        Tomato: 4678655;
        /** 青绿色 <div style="background-color: #40e0d0; width: 200px; height: 20px;"></div> */
        Turquoise: 13688896;
        /** 紫罗兰色 <div style="background-color: #ee82ee; width: 200px; height: 20px;"></div> */
        Violet: 15631086;
        /** 淡黄色 <div style="background-color: #f5deb3; width: 200px; height: 20px;"></div> */
        Wheat: 11788021;
        /** 白色 <div style="background-color: #ffffff; width: 200px; height: 20px;"></div> */
        White: 16777215;
        /** 烟白色 <div style="background-color: #f5f5f5; width: 200px; height: 20px;"></div> */
        WhiteSmoke: 16119285;
        /** 黄色 <div style="background-color: #ffff00; width: 200px; height: 20px;"></div> */
        Yellow: 65535;
        /** 黄绿色 <div style="background-color: #9acd32; width: 200px; height: 20px;"></div> */
        YellowGreen: 3329434;
        /**  */
        LightGoldenrodYellow: 13826810;
        /**  */
        Azure: 16777200;
    };
    /**
     * 指定数据透视表缓存或 查询表 连接到其数据源的方式。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xlrobustconnect)
     * @see {@link Et.EtXlRobustConnect}
     */
    readonly RobustConnect: {
        /** 数据透视表缓存或查询表始终使用由 SourceConnectionFile 或 SourceDataFile 属性定义的外部源信息 () 重新连接。 */
        Always: 1;
        /** 数据透视表缓存或查询表使用外部源信息通过 Connection 属性重新连接。 */
        AsRequired: 0;
        /** 数据透视表缓存或查询表永远不会使用源信息重新连接。 */
        Never: 2;
    };
    /**
     * 指定对应于特定数据系列的数值是处于行中还是列中。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xlrowcol)
     */
    readonly RowCol: {
        /** 数据系列在行中。 */
        Columns: 2;
        /** 数据系列在列中。 */
        Rows: 1;
    };
    /**
     * 指定要运行的自动宏。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xlrunautomacro)
     * @see {@link Et.EtXlRunAutoMacro}
     */
    readonly RunAutoMacro: {
        /** Auto_Activate 宏 */
        Activate: 3;
        /** Auto_Close 宏 */
        Close: 2;
        /** Auto_Deactivate 宏 */
        Deactivate: 4;
        /** Auto_Open 宏 */
        Open: 1;
    };
    /**
     * 如果将保存文件，则在文件关闭过程中进行指定。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xlsaveaction)
     * @see {@link Et.EtXlSaveAction}
     */
    readonly SaveAction: {
        /** 不保存更改。 */
        DoNotSaveChanges: 2;
        /** 保存更改。 */
        SaveChanges: 1;
    };
    /**
     * 指定“另存为”函数的访问模式。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xlsaveasaccessmode)
     * @see {@link Et.EtXlSaveAsAccessMode}
     */
    readonly SaveAsAccessMode: {
        /** 独占模式 */
        Exclusive: 3;
        /** 默认值（不更改访问模式） */
        NoChange: 1;
        /** 共享列表 */
        Shared: 2;
    };
    /**
     * 指定更新共享工作簿时解决冲突的方式。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xlsaveconflictresolution)
     * @see {@link Et.EtXlSaveConflictResolution}
     */
    readonly SaveConflictResolution: {
        /** 总是接受本地用户所做的更改。 */
        LocalSessionChanges: 2;
        /** 总是拒绝本地用户所做的更改。 */
        OtherSessionChanges: 3;
        /** 弹出对话框请求用户解决冲突。 */
        UserResolution: 1;
    };
    /**
     * 指定数值轴的刻度类型。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xlscaletype)
     */
    readonly ScaleType: {
        /** 线性 */
        Linear: -4132;
        /** 对数 */
        Logarithmic: -4133;
    };
    /**
     * 指定搜索区域时的搜索方向。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xlsearchdirection)
     * @see {@link Et.EtXlSearchDirection}
     */
    readonly SearchDirection: {
        /** 在区域中搜索下一匹配值。 */
        Next: 1;
        /** 在区域中搜索上一匹配值。 */
        Previous: 2;
    };
    /**
     * 指定搜索区域的次序。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xlsearchorder)
     * @see {@link Et.EtXlSearchOrder}
     */
    readonly SearchOrder: {
        /** 向下搜索列，然后移到下一列。 */
        ByColumns: 2;
        /** 搜索行，然后移到下一行。 */
        ByRows: 1;
    };
    /**
     * 指定区域的搜索范围。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xlsearchwithin)
     * @see {@link Et.EtXlSearchWithin}
     */
    readonly SearchWithin: {
        /** 将搜索限制在当前工作表。 */
        Sheet: 1;
        /** 搜索整个工作簿。 */
        Workbook: 2;
    };
    /**
     * 指定系列标签级别的系列标签。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xlseriesnamelevel)
     */
    readonly SeriesNameLevel: {
        /** 将系列名称设置为图表上包含范围的所有系列名称级别。 */
        All: -1;
        /** 指示系列名称中的文字数据。 */
        Custom: -2;
        /** 在图表中不设置类别标签。 默认为自动索引标签。 */
        None: -3;
    };
    /**
     * 指定工作表类型。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xlsheettype)
     * @see {@link Et.EtXlSheetType}
     */
    readonly SheetType: {
        /** 图表 */
        Chart: -4109;
        /** 对话框工作表 */
        DialogSheet: -4116;
        /** Excel 版本 4 国际宏工作表 */
        Excel4IntlMacroSheet: 4;
        /** Excel 版本 4 宏工作表 */
        Excel4MacroSheet: 3;
        /** 工作表 */
        Worksheet: -4167;
    };
    /**
     * 指定对象是否可见。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xlsheetvisibility)
     * @see {@link Et.EtXlSheetVisibility}
     */
    readonly SheetVisibility: {
        /** 隐藏工作表，用户可以通过菜单取消隐藏。 */
        Hidden: 0;
        /** 隐藏对象，以便使对象重新可见的唯一方法是将此属性设置为 True（用户无法使该对象可见）。 */
        VeryHidden: 2;
        /** 显示工作表。 */
        Visible: -1;
    };
    /**
     * 指示大小度量与 (面积或宽度) 的关系。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/office.xlsizerepresents)
     */
    readonly SizeRepresents: {
        /** 大小的度量值用于区域。 */
        IsArea: 1;
        /** 大小的度量值用于宽度。 */
        IsWidth: 2;
    };
    /**
     * 指定切片器或切片器缓存的类型。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xlslicercachetype)
     * @see {@link Et.EtXlSlicerCacheType}
     */
    readonly SlicerCacheType: {
        /** 切片器缓存表示切片器。 */
        Slicer: 1;
        /** 切片器缓存表示时间线。 */
        Timeline: 2;
    };
    /**
     * 指定由指定切片器缓存使用的交叉筛选的类型及其可视化方式。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xlslicercrossfiltertype)
     * @see {@link Et.EtXlSlicerCrossFilterType}
     */
    readonly SlicerCrossFilterType: {
        /** 为此切片器缓存开启交叉筛选，对于连接到同一数据源的其他切片器中的筛选选择，没有数据的任何平铺都将变灰。 此外，按钮将被隐藏。 */
        SlicerCrossFilterHideButtonsWithNoData: 4;
        /** 为此切片器缓存开启交叉筛选，对于连接到同一数据源的其他切片器中的筛选选择，没有数据的任何平铺都将变灰。 此外，有数据的平铺将移到切片器的顶部。 (默认) */
        SlicerCrossFilterShowItemsWithDataAtTop: 2;
        /** 为此切片器缓存开启交叉筛选，对于连接到同一数据源的其他切片器中的筛选选择，没有数据的任何平铺都将变灰。 */
        SlicerCrossFilterShowItemsWithNoData: 3;
        /** 完全关闭交叉筛选，因此，无论其他切片器中的筛选选择如何，所有平铺都将显示，并处于活动状态（未变灰）。 */
        SlicerNoCrossFilter: 1;
    };
    /**
     * 指定是否对切片器中显示的项目进行了排序，如果进行了排序，是否按项目标题以升序或降序顺序进行排序。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xlslicersort)
     * @see {@link Et.EtXlSlicerSort}
     */
    readonly SlicerSort: {
        /** 切片器项按项标题升序排序。 */
        Ascending: 2;
        /** 切片器项按数据源提供的顺序显示。 */
        DataSourceOrder: 1;
        /** 切片器项按项标题降序排序。 */
        Descending: 3;
    };
    /**
     * 指定文本的排序方式。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xlsortdataoption)
     * @see {@link Et.EtXlSortDataOption}
     */
    readonly SortDataOption: {
        /** 默认值。 分别对数字和文本数据进行排序。 */
        Normal: 0;
        /** 将文本作为数字型数据进行排序。 */
        TextAsNumbers: 1;
    };
    /**
     * 指定排序类型。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xlsortmethod)
     * @see {@link Et.EtXlSortMethod}
     */
    readonly SortMethod: {
        /** 按字符的汉语拼音顺序排序。 此值为默认值。 */
        PinYin: 1;
        /** 按每个字符的笔划数排序。 */
        Stroke: 2;
    };
    /**
     * 指定在使用中文排序方法时如何排序。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xlsortmethodold)
     * @see {@link Et.EtXlSortMethodOld}
     */
    readonly SortMethodOld: {
        /** 按代码页排序。 */
        CodePage: 2;
        /** 按发音排序。 */
        Syllabary: 1;
    };
    /**
     * 指定数据的排序参数。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xlsorton)
     * @see {@link Et.EtXlSortOn}
     */
    readonly SortOn: {
        /** 单元格颜色。 */
        CellColor: 1;
        /** 字体颜色。 */
        FontColor: 2;
        /** 图标。 */
        Icon: 3;
        /** 值。 */
        Values: 0;
    };
    /**
     * 为指定字段或范围指定排序顺序。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xlsortorder)
     * @see {@link Et.EtXlSortOrder}
     */
    readonly SortOrder: {
        /** 按升序对指定字段排序。 此值为默认值。 */
        Ascending: 1;
        /** 按降序对指定字段排序。 */
        Descending: 2;
    };
    /**
     * 指定排序方向。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xlsortorientation)
     * @see {@link Et.EtXlSortOrientation}
     */
    readonly SortOrientation: {
        /** 按列排序。 */
        Columns: 1;
        /** 按行排序。 此值为默认值。 */
        Rows: 2;
    };
    /**
     * 指定要排序的元素。 仅在对数据透视表排序时才使用该参数。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xlsorttype)
     * @see {@link Et.EtXlSortType}
     */
    readonly SortType: {
        /** 按标签对数据透视表排序。 */
        Labels: 2;
        /** 按值对数据透视表排序。 */
        Values: 1;
    };
    /**
     * 标识源对象。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xlsourcetype)
     * @see {@link Et.EtXlSourceType}
     */
    readonly SourceType: {
        /** 自动筛选范围 */
        AutoFilter: 3;
        /** 图表 */
        Chart: 5;
        /** 数据透视表 */
        PivotTable: 6;
        /** 选择用于打印的单元格区域 */
        PrintArea: 2;
        /** (外部数据范围的查询表) */
        Query: 7;
        /** 单元格区域 */
        Range: 4;
        /** 整个工作表 */
        Sheet: 1;
        /** 工作簿 */
        Workbook: 0;
    };
    /**
     * 指定检查西班牙语的拼写的模式。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xlspanishmodes)
     * @see {@link Et.EtXlSpanishModes}
     */
    readonly SpanishModes: {
        /** Tuteo 和 Voseo 动词形式。 */
        TuteoAndVoseo: 1;
        /** 仅 Tuteo 动词形式。 */
        TuteoOnly: 0;
        /** 仅 Voseo 动词形式。 */
        VoseoOnly: 2;
    };
    /**
     * 指定如何相对于组中的其他迷你图确定该迷你图的垂直轴的最小或最大值的比例。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xlsparkscale)
     * @see {@link Et.EtXlSparkScale}
     */
    readonly SparkScale: {
        /** 迷你图垂直轴的最小值或最大值具有用户定义的值。 */
        Custom: 3;
        /** 组中所有迷你图垂直轴的最小值或最大值相同。 */
        Group: 1;
        /** 组中每个迷你图的垂直轴的最小值或最大值自动设置为其自己的计算值。 */
        Single: 2;
    };
    /**
     * 指定迷你图的类型。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xlsparktype)
     * @see {@link Et.EtXlSparkType}
     */
    readonly SparkType: {
        /** 柱形图迷你图。 */
        Column: 2;
        /** 盈亏图表迷你图。 */
        ColumnStacked100: 3;
        /** 折线图迷你图。 */
        Line: 1;
    };
    /**
     * 指定当迷你图所依据的数据位于方形区域中时如何绘制此迷你图。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xlsparklinerowcol)
     * @see {@link Et.EtXlSparklineRowCol}
     */
    readonly SparklineRowCol: {
        /** 按列绘制数据。 */
        ColumnsSquare: 2;
        /** 迷你图不绑定到方形区域中的数据。 */
        NonSquare: 0;
        /** 按行绘制数据。 */
        RowsSquare: 1;
    };
    /**
     * 指定朗读单元格的顺序。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xlspeakdirection)
     * @see {@link Et.EtXlSpeakDirection}
     */
    readonly SpeakDirection: {
        /** 在一列上向下朗读，然后移至下一列继续朗读。 */
        ByColumns: 1;
        /** 先朗读一行，然后移至下一行继续朗读。 */
        ByRows: 0;
    };
    /**
     * 指定结果中包括具有特定类型值的单元格。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xlspecialcellsvalue)
     * @see {@link Et.EtXlSpecialCellsValue}
     */
    readonly SpecialCellsValue: {
        /** 有错误的单元格。 */
        Errors: 16;
        /** 具有逻辑值的单元格。 */
        Logical: 4;
        /** 具有数值的单元格。 */
        Numbers: 1;
        /** 具有文本的单元格。 */
        TextValues: 2;
    };
    /**
     * 指定标准色阶。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xlstdcolorscale)
     * @see {@link Et.EtXlStdColorScale}
     */
    readonly StdColorScale: {
        /** 下白上黑。 */
        BlackWhite: 3;
        /** GYR。 */
        GYR: 2;
        /** RYG。 */
        RYG: 1;
        /** 下黑上白。 */
        WhiteBlack: 4;
    };
    /**
     * 指定订阅发布版本时所用的格式。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xlsubscribetoformat)
     * @see {@link Et.EtXlSubscribeToFormat}
     */
    readonly SubscribeToFormat: {
        /** 图片 */
        Picture: -4147;
        /** 文本 */
        Text: -4158;
    };
    /**
     * 指定分类汇总在工作表上的显示位置。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xlsubtotallocationtype)
     */
    readonly SubtotalLocationType: {
        /** 分类汇总在底部。 */
        AtBottom: 2;
        /** 分类汇总在顶部。 */
        AtTop: 1;
    };
    /**
     * 指定汇总列在大纲中的位置。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xlsummarycolumn)
     * @see {@link Et.EtXlSummaryColumn}
     */
    readonly SummaryColumn: {
        /** 汇总列在大纲中位于明细数据列的左侧。 */
        OnLeft: -4131;
        /** 汇总列在大纲中位于明细数据列的右侧。 */
        OnRight: -4152;
    };
    /**
     * 指定为方案创建的汇总类型。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xlsummaryreporttype)
     * @see {@link Et.EtXlSummaryReportType}
     */
    readonly SummaryReportType: {
        /** 并排列出方案。 */
        StandardSummary: 1;
        /** 在数据透视表中显示方案。 */
        SummaryPivotTable: -4148;
    };
    /**
     * 指定汇总行在大纲中的位置。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xlsummaryrow)
     * @see {@link Et.EtXlSummaryRow}
     */
    readonly SummaryRow: {
        /** 汇总行在大纲中位于明细数据行的上方。 */
        Above: 0;
        /** 汇总行在大纲中位于明细数据行的下方。 */
        Below: 1;
    };
    /**
     * 指定第一个或最后一个制表位位置。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xltabposition)
     * @see {@link Et.EtXlTabPosition}
     */
    readonly TabPosition: {
        /** 第一个制表位位置。 */
        First: 0;
        /** 最后一个制表位位置。 */
        Last: 1;
    };
    /**
     * 指定所用的表样式元素。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xltablestyleelementtype)
     * @see {@link Et.EtXlTableStyleElementType}
     */
    readonly TableStyleElementType: {
        /** 空白行 */
        BlankRow: 19;
        /** 列条纹 1 */
        ColumnStripe1: 7;
        /** 列条纹 2 */
        ColumnStripe2: 8;
        /** 列副标题 1 */
        ColumnSubheading1: 20;
        /** 列副标题 2 */
        ColumnSubheading2: 21;
        /** 列副标题 3 */
        ColumnSubheading3: 22;
        /** 第一列 */
        FirstColumn: 3;
        /** 第一个标题单元格 */
        FirstHeaderCell: 9;
        /** 第一个汇总单元格 */
        FirstTotalCell: 11;
        /** 总计列 */
        GrandTotalColumn: 4;
        /** 总计行 */
        GrandTotalRow: 2;
        /** 标题行 */
        HeaderRow: 1;
        /** 最后一列 */
        LastColumn: 4;
        /** 最后一个标题单元格 */
        LastHeaderCell: 10;
        /** 最后一个总计单元格 */
        LastTotalCell: 12;
        /** 页面字段标签 */
        PageFieldLabels: 26;
        /** 页面字段值 */
        PageFieldValues: 27;
        /** 行条纹 1 */
        RowStripe1: 5;
        /** 行条纹 2 */
        RowStripe2: 6;
        /** 行副标题 1 */
        RowSubheading1: 23;
        /** 行副标题 2 */
        RowSubheading2: 24;
        /** 行副标题 3 */
        RowSubheading3: 25;
        /** 用户悬停在上面且包含数据的选定项。 */
        SlicerHoveredSelectedItemWithData: 33;
        /** 用户悬停在上面且不包含数据的选定项。 */
        SlicerHoveredSelectedItemWithNoData: 35;
        /** 用户悬停在上面，未选定且包含数据的项。 */
        SlicerHoveredUnselectedItemWithData: 32;
        /** 用户悬停在上面，未选定且不包含数据的项。 */
        SlicerHoveredUnselectedItemWithNoData: 34;
        /** 包含数据的选定项。 */
        SlicerSelectedItemWithData: 30;
        /** 不包含数据的选定项。 */
        SlicerSelectedItemWithNoData: 31;
        /** 未选定且包含数据的项。 */
        SlicerUnselectedItemWithData: 28;
        /** 未选定且不包含数据的项。 */
        SlicerUnselectedItemWithNoData: 29;
        /** 分类汇总列 1 */
        SubtotalColumn1: 13;
        /** 分类汇总列 2 */
        SubtotalColumn2: 14;
        /** 分类汇总列 3 */
        SubtotalColumn3: 15;
        /** 分类汇总行 1 */
        SubtotalRow1: 16;
        /** 分类汇总行 2 */
        SubtotalRow2: 17;
        /** 分类汇总行 3 */
        SubtotalRow3: 18;
        /** 时间线时间段标签 */
        TimelinePeriodLabels1: 38;
        /** 其他时间线时间段标签 */
        TimelinePeriodLabels2: 39;
        /** 所选时间线时间块 */
        TimelineSelectedTimeBlock: 40;
        /** 所选时间线时间块空间 */
        TimelineSelectedTimeBlockSpace: 42;
        /** 时间线选择标签 */
        TimelineSelectionLabel: 36;
        /** 时间线级别 */
        TimelineTimeLevel: 37;
        /** 未选择的时间线时间块 */
        TimelineUnselectedTimeBlock: 41;
        /** 汇总行 */
        TotalRow: 2;
        /** 整个表 */
        WholeTable: 0;
    };
    /**
     * 指定要导入查询表的文本文件中数据的列格式。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xltextparsingtype)
     * @see {@link Et.EtXlTextParsingType}
     */
    readonly TextParsingType: {
        /** 默认值。 指示文件由分隔符分隔。 */
        Delimited: 1;
        /** 指示将文件中的数据排列在固定宽度的列中。 */
        FixedWidth: 2;
    };
    /**
     * 指定用于指定文本的分隔符。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xltextqualifier)
     * @see {@link Et.EtXlTextQualifier}
     */
    readonly TextQualifier: {
        /** 双引号 (")。 */
        DoubleQuote: 1;
        /** 无分隔符。 */
        None: -4142;
        /** 单引号 (')。 */
        SingleQuote: 2;
    };
    /**
     * 指定所导入文本的可视布局是从左向右还是从右向左。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xltextvisuallayouttype)
     * @see {@link Et.EtXlTextVisualLayoutType}
     */
    readonly TextVisualLayoutType: {
        /** 从左到右 */
        LTR: 1;
        /** 从右到左 */
        RTL: 2;
    };
    /**
     * 指定要使用的主题颜色。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xlthemecolor)
     * @see {@link Et.EtXlThemeColor}
     */
    readonly ThemeColor: {
        /** Accent1 */
        Accent1: 5;
        /** Accent2 */
        Accent2: 6;
        /** Accent3 */
        Accent3: 7;
        /** Accent4 */
        Accent4: 8;
        /** Accent5 */
        Accent5: 9;
        /** Accent6 */
        Accent6: 10;
        /** Dark1 */
        Dark1: 1;
        /** Dark2 */
        Dark2: 3;
        /** 已访问的超链接 */
        FollowedHyperlink: 12;
        /** Hyperlink */
        Hyperlink: 11;
        /** Light1 */
        Light1: 2;
        /** Light2 */
        Light2: 4;
    };
    /**
     * 指定要使用的主题字体。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xlthemefont)
     * @see {@link Et.EtXlThemeFont}
     */
    readonly ThemeFont: {
        /** 主要 */
        Major: 2;
        /** 小 */
        Minor: 1;
        /** 不使用任何主题字体 */
        None: 0;
    };
    /**
     * 指定多线程计算模式的控制方式。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xlthreadmode)
     * @see {@link Et.EtXlThreadMode}
     */
    readonly ThreadMode: {
        /** 多线程计算模式是自动的。 */
        Automatic: 0;
        /** 多线程计算模式是手动的。 */
        Manual: 1;
    };
    /**
     * 指定刻度线标签的文本方向。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xlticklabelorientation)
     */
    readonly TickLabelOrientation: {
        /** 由 Excel 设置文本方向。 */
        Automatic: -4105;
        /** 向下排列文本。 */
        Downward: -4170;
        /** 水平排列字符。 */
        Horizontal: -4128;
        /** 向上排列文本。 */
        Upward: -4171;
        /** 垂直排列字符。 */
        Vertical: -4166;
    };
    /**
     * 在指定坐标轴上指定刻度线标签的位置。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xlticklabelposition)
     */
    readonly TickLabelPosition: {
        /** 图表的顶部或右侧。 */
        High: -4127;
        /** 图表的底部或左侧。 */
        Low: -4134;
        /** 坐标轴旁边（其中坐标轴不在图表的任意一侧）。 */
        NextToAxis: 4;
        /** 无刻度线。 */
        None: -4142;
    };
    /**
     * 指定坐标轴的主要和次要刻度线标志的位置。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xltickmark)
     */
    readonly TickMark: {
        /** 跨轴 */
        Cross: 4;
        /** 在轴内 */
        Inside: 2;
        /** 无标志 */
        None: -4142;
        /** 在轴外 */
        Outside: 3;
    };
    /**
     * 指定时间段。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xltimeperiods)
     * @see {@link Et.EtXlTimePeriods}
     */
    readonly TimePeriods: {
        /** 过去 7 天 */
        Last7Days: 2;
        /** 上月 */
        LastMonth: 5;
        /** 上周 */
        LastWeek: 4;
        /** 下月 */
        NextMonth: 8;
        /** 下周 */
        NextWeek: 7;
        /** 本月 */
        ThisMonth: 9;
        /** 本周 */
        ThisWeek: 3;
        /** Today */
        Today: 0;
        /** 明天 */
        Tomorrow: 6;
        /** 昨天 */
        Yesterday: 1;
    };
    /**
     * 指定图表轴和数据系列的时间单位。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xltimeunit)
     */
    readonly TimeUnit: {
        /** Days */
        Days: 0;
        /** 月 */
        Months: 1;
        /** 年限 */
        Years: 2;
    };
    /**
     * 时间线支持的内置层次结构级别之一。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xltimelinelevel)
     * @see {@link Et.EtXlTimelineLevel}
     */
    readonly TimelineLevel: {
        /** 年级别 */
        Years: 0;
        /** 季度级别 */
        Quarters: 1;
        /** 月份级别 */
        Months: 2;
        /** 天级别 */
        Days: 3;
    };
    /**
     * 指定工具栏的哪些属性受到限制。 可用 Or 组合选项。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xltoolbarprotection)
     * @see {@link Et.EtXlToolbarProtection}
     */
    readonly ToolbarProtection: {
        /** 不允许按钮更改。 */
        NoButtonChanges: 1;
        /** 无任何类型的更改。 */
        NoChanges: 4;
        /** 无对工具栏固定位置的更改。 */
        NoDockingChanges: 3;
        /** 无对工具栏形状的更改。 */
        NoShapeChanges: 2;
        /** 允许任何更改。 */
        None: -4143;
    };
    /**
     * 指定值系列的前 10 个或后 10 个值。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xltopbottom)
     * @see {@link Et.EtXlTopBottom}
     */
    readonly TopBottom: {
        /** 后 10 个值 */
        Top10Bottom: 0;
        /** 前 10 个值 */
        Top10Top: 1;
    };
    /**
     * 指定列表列的汇总行中的计算类型。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xltotalscalculation)
     * @see {@link Et.EtXlTotalsCalculation}
     */
    readonly TotalsCalculation: {
        /** 平均 */
        Average: 2;
        /** 对非空单元格进行计数 */
        Count: 3;
        /** 对数值单元格进行计数 */
        CountNums: 4;
        /** 自定义计算 */
        Custom: 9;
        /** 列表中的最大值 */
        Max: 6;
        /** 列表中的最小值 */
        Min: 5;
        /** 无计算 */
        None: 0;
        /** 标准偏差值 */
        StdDev: 7;
        /** 列表列中所有值的和 */
        Sum: 1;
        /** 变量 */
        Var: 8;
    };
    /**
     * 指定如何计算平滑数据波动的趋势线。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xltrendlinetype)
     */
    readonly TrendlineType: {
        /** 使用公式（如 y=ab^x）计算数据点的最小平方拟合值。 */
        Exponential: 5;
        /** 使用线性公式 y = mx + b 计算数据点的最小平方拟合值。 */
        Linear: -4132;
        /** 使用公式 y = c ln x + b 计算数据点的最小平方拟合值。 */
        Logarithmic: -4133;
        /** 使用通过数据系列中某些部分计算出的一系列平均值。 数据点个数等于数据系列中数据点的总数减去为周期指定的数值。 */
        MovingAvg: 6;
        /** 使用公式（如 y = ax^6 + bx^5 + cx^4 + dx^3 + ex^2 + fx + g）计算数据点的最小平方拟合值。 */
        Polynomial: 3;
        /** 使用公式（如 y = ax^b）计算数据点的最小平方拟合值。 */
        Power: 4;
    };
    /**
     * 指定应用于字体的下划线类型。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xlunderlinestyle)
     */
    readonly UnderlineStyle: {
        /** 粗双下划线。 */
        Double: -4119;
        /** 紧靠在一起的两条细下划线。 */
        DoubleAccounting: 5;
        /** 无下划线。 */
        None: -4142;
        /** 单下划线。 */
        Single: 2;
        /** 不支持。 */
        SingleAccounting: 4;
    };
    /**
     * 指定工作簿用于更新嵌入式 OLE 链接的设置。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xlupdatelinks)
     * @see {@link Et.EtXlUpdateLinks}
     */
    readonly UpdateLinks: {
        /** 始终更新指定工作簿的嵌入式 OLE 链接。 */
        Always: 3;
        /** 从不更新指定工作簿的嵌入式 OLE 链接。 */
        Never: 2;
        /** 按照用户对指定工作簿的设置，更新嵌入式 OLE 链接。 */
        UserSetting: 1;
    };
    /**
     * 指定对象的垂直对齐方式。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xlvalign)
     */
    readonly VAlign: {
        /** 向下 */
        Bottom: -4107;
        /** 居中 */
        Center: -4108;
        /** 分布式 */
        Distributed: -4117;
        /** Justify */
        Justify: -4130;
        /** 顶部 */
        Top: -4160;
    };
    /**
     * 指定要创建的工作簿的类型。 新工作簿包含单个指定类型的工作表。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xlwbatemplate)
     * @see {@link Et.EtXlWBATemplate}
     */
    readonly WBATemplate: {
        /** 图表 */
        Chart: -4109;
        /** Excel 版本 4 宏 */
        Excel4IntlMacroSheet: 4;
        /** Excel 版本 4 国际宏 */
        Excel4MacroSheet: 3;
        /** 工作表 */
        Worksheet: -4167;
    };
    /**
     * 指定在将网页导入查询表中时，从网页应用多少格式设置（如果有）。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xlwebformatting)
     * @see {@link Et.EtXlWebFormatting}
     */
    readonly WebFormatting: {
        /** 导入所有格式。 */
        All: 1;
        /** 不导入任何格式。 */
        None: 3;
        /** RTF 格式 - 导入兼容格式。 */
        RTF: 2;
    };
    /**
     * 指定是将整个网页、网页上的所有表还是仅将特定表导入查询表中。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xlwebselectiontype)
     * @see {@link Et.EtXlWebSelectionType}
     */
    readonly WebSelectionType: {
        /** 所有表 */
        AllTables: 2;
        /** 整页 */
        EntirePage: 1;
        /** 指定表 */
        SpecifiedTables: 3;
    };
    /**
     * 指定窗口的状态。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xlwindowstate)
     * @see {@link Et.EtXlWindowState}
     */
    readonly WindowState: {
        /** 最大化 */
        Maximized: -4137;
        /** 最小化 */
        Minimized: -4140;
        /** 一般 */
        Normal: -4143;
    };
    /**
     * 指定图表的显示方式。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xlwindowtype)
     * @see {@link Et.EtXlWindowType}
     */
    readonly WindowType: {
        /** 图表将在新窗口中打开。 */
        ChartAsWindow: 5;
        /** 图表将在当前工作表中显示。 */
        ChartInPlace: 4;
        /** 将图表复制到剪贴板。 */
        Clipboard: 3;
        /** 已放弃使用此常量。 */
        Info: -4129;
        /** 此常量只适用于 Macintosh。 */
        Workbook: 1;
    };
    /**
     * 指定窗口中显示的视图。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xlwindowview)
     * @see {@link Et.EtXlWindowView}
     */
    readonly WindowView: {
        /** 正常。 */
        NormalView: 1;
        /** 分页预览。 */
        PageBreakPreview: 2;
        /** 页面视图。 */
        PageLayoutView: 3;
    };
    /**
     * 指定在 Microsoft Excel 版本 4 宏工作表中，名称引用哪种宏，或名称是否引用宏。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xlxlmmacrotype)
     */
    readonly XLMMacroType: {
        /** 自定义命令。 */
        Command: 2;
        /** 自定义函数。 */
        Function: 1;
        /** 非宏。 */
        NotXLM: 3;
    };
    /**
     * 指定保存或导出操作的结果。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xlxmlexportresult)
     * @see {@link Et.EtXlXmlExportResult}
     */
    readonly XmlExportResult: {
        /** XML 数据文件已成功导出。 */
        Success: 0;
        /** XML 数据文件的内容与指定的架构映射不匹配。 */
        ValidationFailed: 1;
    };
    /**
     * 指定刷新或导入操作的结果。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xlxmlimportresult)
     * @see {@link Et.EtXlXmlImportResult}
     */
    readonly XmlImportResult: {
        /** 由于指定的 XML 数据文件对于工作表来说太大，因此其内容已被截断。 */
        ElementsTruncated: 1;
        /** XML 数据文件已成功导入。 */
        Success: 0;
        /** XML 数据文件的内容与指定的架构映射不匹配。 */
        ValidationFailed: 2;
    };
    /**
     * 指定 Excel 打开 XML 数据文件的方式。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xlxmlloadoption)
     * @see {@link Et.EtXlXmlLoadOption}
     */
    readonly XmlLoadOption: {
        /** 将 XML 数据文件的内容置于 XML 表中。 */
        ImportToList: 2;
        /** 在“XML 结构”任务窗格中显示 XML 数据文件的架构。 */
        MapXml: 3;
        /** 打开 XML 数据文件。 文件的内容将展开。 */
        OpenXml: 1;
        /** 提示用户选择打开文件的方式。 */
        PromptUser: 0;
    };
    /**
     * 指定第一行是否包含标题。 对数据透视表进行排序时，不能使用该参数。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/excel.xlyesnoguess)
     * @see {@link Et.EtXlYesNoGuess}
     */
    readonly YesNoGuess: {
        /** Excel 确定是否有标题，如果有，是否是一个。 */
        Guess: 0;
        /** 默认值。 应对整个区域进行排序。 */
        No: 2;
        /** 不应对整个区域进行排序。 */
        Yes: 1;
    };
    /**
     * 指定所指定对象的阅读顺序。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/word.xlreadingorder)
     */
    readonly ReadingOrder: {
        /** 根据上下文。 */
        Context: -5002;
        /** 	从左到右。 */
        RTL: -5004;
        /** 	从右到左。 */
        LTR: -5003;
    };
    /**
     *
     * @see {@link Et.EtXlRoutingSlipDelivery}
     */
    readonly RoutingSlipDelivery: {
        AllAtOnce: 2;
        OneAfterAnother: 1;
    };
    /**
     *
     * @see {@link Et.EtXlRoutingSlipStatus}
     */
    readonly RoutingSlipStatus: {
        /** */
        NotYetRouted: 0;
        /** */
        RoutingComplete: 2;
        /** */
        RoutingInProgress: 1;
    };
    /**
     *
     * @see {@link Et.EtXlSmartTagDisplayMode}
     */
    readonly SmartTagDisplayMode: {
        /** */
        IndicatorAndButton: 0;
        /** */
        ButtonOnly: 2;
        /** */
        DisplayNone: 1;
    };
    /**
     *
     * @see {@link Et.EtXlSubtototalLocationType}
     */
    readonly SubtototalLocationType: {
        /** */
        AtTop: 1;
        /** */
        AtBottom: 2;
    };
    /**
     *
     * @see {@link Et.EtXlSmartTagControlType}
     */
    readonly SmartTagControlType: {
        /** */
        SmartTag: 1;
        /** */
        Label: 7;
        /** */
        Link: 2;
        /** */
        Image: 8;
        /** */
        Help: 3;
        /** */
        HelpURL: 4;
        /** */
        Button: 6;
        /** */
        Separator: 5;
        /** */
        Checkbox: 9;
        /** */
        Textbox: 10;
        /** */
        Listbox: 11;
        /** */
        Combo: 12;
        /** */
        ActiveX: 13;
        /** */
        RadioGroup: 14;
    };
    /**
     *
     * @see {@link Et.EtXlCalcFor}
     */
    readonly CalcFor: {
        /** */
        AllValues: 0;
        /** */
        RowGroups: 1;
        /** */
        ColGroups: 2;
    };
};
export type KingSoftOfficeEnum = {
    /**
     * 指定用于定义“文件”选项卡上的组样式的常量。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/office.backstagegroupstyle)
     * @see {@link Kso.KsoBackstageGroupStyle}
     */
    readonly BackstageGroupStyle: {
        /** 错误样式 */
        Error: 2;
        /** 普通样式 */
        Normal: 0;
        /** 警告样式 */
        Warning: 1;
    };
    /**
     * 提供有关数字证书的信息。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/office.certificatedetail)
     * @see {@link Kso.KsoCertificateDetail}
     */
    readonly CertificateDetail: {
        /** 指定可用于签署的数字证书。 */
        Available: 0;
        /** 证书的到期日期。 */
        ExpirationDate: 3;
        /** 认证的颁发机构。 */
        Issuer: 2;
        /** 对应于公钥的私钥的持有者。 */
        Subject: 1;
        /** 证书的全部内容的哈希。 */
        Thumbprint: 4;
    };
    /**
     * 提供验证数字证书的结果。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/office.certificateverificationresults)
     * @see {@link Kso.KsoCertificateVerificationResults}
     */
    readonly CertificateVerificationResults: {
        /** 验证导致了错误。 */
        Error: 0;
        /** 证书已过期。 */
        Expired: 5;
        /** 证书无效。 */
        Invalid: 4;
        /** 证书已吊销。 */
        Revoked: 6;
        /** 证书来自不受信任的源。 */
        Untrusted: 7;
        /** 证书当前未经验证。 */
        Unverified: 2;
        /** 证书有效。 */
        Valid: 3;
        /**  */
        Verifying: 1;
    };
    /**
     * 提供验证文档内容是否已更改的状态。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/office.contentverificationresults)
     * @see {@link Kso.KsoContentVerificationResults}
     */
    readonly ContentVerificationResults: {
        /** 验证导致了错误。 */
        Error: 0;
        /** 文档内容自进行数字签名后已修改。 */
        Modified: 4;
        /** 文档尚未验证。 */
        Unverified: 2;
        /** 文档的内容已经过验证且有效。 */
        Valid: 3;
        /**  */
        Verifying: 1;
    };
    /**
     * 指定加密密码的模式。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/office.encryptionciphermode)
     * @see {@link Kso.KsoEncryptionCipherMode}
     */
    readonly EncryptionCipherMode: {
        /** ECB 密码模式 */
        ECB: 0;
        /** CBC 密码模式 */
        CBC: 1;
    };
    /**
     * 指定有关加密提供程序的详细信息。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/office.encryptionproviderdetail)
     * @see {@link Kso.KsoEncryptionProviderDetail}
     */
    readonly EncryptionProviderDetail: {
        /** URL 加密提供程序。 */
        Url: 0;
        /** 算法加密提供程序。 */
        Algorithm: 1;
        /** 块密码加密提供程序。 */
        BlockCipher: 2;
        /** 密码块大小加密提供程序。 */
        CipherBlockSize: 3;
        /** 密码模式加密提供程序。 */
        CipherMode: 4;
    };
    /**
     * 指定电子邮件正文的显示方式。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/office.mailformat)
     * @see {@link Kso.KsoMailFormat}
     */
    readonly MailFormat: {
        /** 电子邮件显示为超文本标记语言 (HTML) 。 */
        HTML: 2;
        /** 电子邮件显示为纯文本。 */
        PlainText: 1;
        /** 电子邮件显示为 RTF)  (RTF 格式。 */
        RTF: 3;
    };
    /**
     * 指定在用户取消警告时的行为。 当前仅支持 msoAlertCancelDefault。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/office.msoalertcanceltype)
     * @see {@link Kso.KsoMsoAlertCancelType}
     */
    readonly AlertCancelType: {
        /** 取消警告的默认行为。 */
        Default: -1;
        /** 不支持。 */
        Fifth: 4;
        /** 不支持。 */
        First: 0;
        /** 不支持。 */
        Fourth: 3;
        /** 不支持。 */
        Second: 1;
        /** 不支持。 */
        Third: 2;
    };
    /**
     * 指定在警告中显示哪个图标（如果有）。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/office.msoalerticontype)
     * @see {@link Kso.KsoMsoAlertIconType}
     */
    readonly AlertIconType: {
        /** 显示“ 严重 ”图标。 */
        Critical: 1;
        /** 显示“信息”图标。 */
        Info: 4;
        /** 在警告消息中不显示图标。 */
        NoIcon: 0;
        /** 显示“查询”图标。 */
        Query: 2;
        /** 显示“警告”图标。 */
        Warning: 3;
    };
    /**
     * 定义指定对象相互之间的对齐方式。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/office.msoaligncmd)
     * @see {@link Kso.KsoMsoAlignCmd}
     */
    readonly AlignCmd: {
        /** 指定对象底端对齐。 */
        Bottoms: 5;
        /** 指定对象中心对齐。 */
        Centers: 1;
        /** 指定对象左侧对齐。 */
        Lefts: 0;
        /** 指定对象中部对齐。 */
        Middles: 4;
        /** 指定对象右侧对齐。 */
        Rights: 2;
        /** 指定对象顶端对齐。 */
        Tops: 3;
    };
    /**
     * 指定 Microsoft Office 应用程序中的语言设置。 MsoAppLanguageID 枚举与 Application 对象的 LanguageSettings 成员一起使用，以确定用于安装语言、用户界面语言或帮助语言的语言。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/office.msoapplanguageid)
     * @see {@link Kso.KsoMsoAppLanguageID}
     */
    readonly AppLanguageID: {
        /** 执行模式语言。 */
        ExeMode: 4;
        /** “帮助”语言。 */
        Help: 3;
        /** 安装语言。 */
        Install: 1;
        /** 用户界面语言。 */
        UI: 2;
        /** 在当前用户界面语言之前使用的用户界面语言。 */
        UIPrevious: 5;
    };
    /**
     * 指定线条末端的箭头长度。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/office.msoarrowheadlength)
     * @see {@link Kso.KsoMsoArrowheadLength}
     */
    readonly ArrowheadLength: {
        /** 中 */
        LengthMixed: 2;
        /** 只返回值，表示指定形状范围中其他状态的组合。 */
        LengthMedium: -2;
        /** 长型 */
        Long: 3;
        /** 短 */
        Short: 1;
    };
    /**
     * 指定线条末端的箭头样式。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/office.msoarrowheadstyle)
     * @see {@link Kso.KsoMsoArrowheadStyle}
     */
    readonly ArrowheadStyle: {
        /** 菱形 */
        Diamond: 5;
        /** 无箭头 */
        None: 1;
        /** 打开 */
        Open: 3;
        /** 椭圆形 */
        Oval: 6;
        /** 隐身形状 */
        Stealth: 4;
        /** 只返回值，表示其他状态的组合。 */
        StyleMixed: -2;
        /** 三角形 */
        Triangle: 2;
    };
    /**
     * 指定线条末端的箭头宽度。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/office.msoarrowheadwidth)
     * @see {@link Kso.KsoMsoArrowheadWidth}
     */
    readonly ArrowheadWidth: {
        /** 狭窄 */
        Narrow: 1;
        /** 宽 */
        Wide: 3;
        /** 中 */
        WidthMedium: 2;
        /** 只返回值，表示其他状态的组合。 */
        WidthMixed: -2;
    };
    /**
     * 指定在以编程方式打开文件时应用程序所使用的安全模式。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/office.msoautomationsecurity)
     * @see {@link Kso.KsoMsoAutomationSecurity}
     */
    readonly AutomationSecurity: {
        /** 使用“安全性”对话框中指定的安全设置。 */
        ByUI: 2;
        /** 禁用以编程方式打开的所有文件中的所有宏，而不显示任何安全警告。 */
        ForceDisable: 3;
        /** 启用所有的宏。 此为启动应用程序时的默认值。 */
        Low: 1;
    };
    /**
     * 指定 AutoShape 对象的形状类型。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/office.msoautoshapetype)
     * @see {@link Kso.KsoMsoAutoShapeType}
     */
    readonly AutoShapeType: {
        /** 10 磅星 */
        '10pointStar': 149;
        /** 12 磅星 */
        '12pointStar': 150;
        /** 16 磅星 */
        '16pointStar': 94;
        /** 24 磅星 */
        '24pointStar': 95;
        /** 32 磅星 */
        '32pointStar': 96;
        /** 4 磅星 */
        '4pointStar': 91;
        /** 5 磅星 */
        '5pointStar': 92;
        /** 6 磅星 */
        '6pointStar': 147;
        /** 7 磅星 */
        '7pointStar': 148;
        /** 8 磅星 */
        '8pointStar': 93;
        /** “后退”或“上一个”按钮。 支持鼠标单击和鼠标移过操作。 */
        ActionButtonBackorPrevious: 129;
        /** “开始”按钮。 支持鼠标单击和鼠标移过操作。 */
        ActionButtonBeginning: 131;
        /** 不带默认图片或文本的按钮。 支持鼠标单击和鼠标移过操作。 */
        ActionButtonCustom: 125;
        /** “文档”按钮。 支持鼠标单击和鼠标移过操作。 */
        ActionButtonDocument: 134;
        /** “结束”按钮。 支持鼠标单击和鼠标移过操作。 */
        ActionButtonEnd: 132;
        /** “前进”或“下一个”按钮。 支持鼠标单击和鼠标移过操作。 */
        ActionButtonForwardorNext: 130;
        /** 帮助按钮。 支持鼠标单击和鼠标移过操作。 */
        ActionButtonHelp: 127;
        /** “主页”按钮。 支持鼠标单击和鼠标移过操作。 */
        ActionButtonHome: 126;
        /** “信息”按钮。 支持鼠标单击和鼠标移过操作。 */
        ActionButtonInformation: 128;
        /** “影片”按钮。 支持鼠标单击和鼠标移过操作。 */
        ActionButtonMovie: 136;
        /** “返回”按钮。 支持鼠标单击和鼠标移过操作。 */
        ActionButtonReturn: 133;
        /** “声音”按钮。 支持鼠标单击和鼠标移过操作。 */
        ActionButtonSound: 135;
        /** 弧 */
        Arc: 25;
        /** 气球 */
        Balloon: 137;
        /** 带 90 度圆角的箭头。 */
        BentArrow: 41;
        /** 带 90 度直角的箭头。 默认情况下上指。 */
        BentUpArrow: 44;
        /** 棱台效果 */
        Bevel: 15;
        /** 块弧 */
        BlockArc: 20;
        /** 可以 */
        Can: 13;
        /** 正方形垂直和水平分为四个季度 */
        ChartPlus: 182;
        /** 正方形沿垂直线和对角线分为六个部分 */
        ChartStar: 181;
        /** 正方形沿对角线分为四部分 */
        ChartX: 180;
        /** 雪 佛 龙 */
        Chevron: 52;
        /** 圆圈，用一条线连接两个点的外围通过圆的内部;带和弦的圆 */
        Chord: 161;
        /** 曲线 180 度角后面的方块箭头 */
        CircularArrow: 60;
        /** 云形状 */
        Cloud: 179;
        /** 云标注 */
        CloudCallout: 108;
        /** 带矩形孔的矩形。 */
        Corner: 162;
        /** 沿矩形路径对齐的四个右三角形;四个“被砍”的角落。 */
        CornerTabs: 169;
        /** 十字形 */
        Cross: 11;
        /** 立方体 */
        Cube: 14;
        /** 向下弯曲的方块箭头 */
        CurvedDownArrow: 48;
        /** 向下弯曲的功能区横幅 */
        CurvedDownRibbon: 100;
        /** 向左弯曲的方块箭头 */
        CurvedLeftArrow: 46;
        /** 向右弯曲的方块箭头 */
        CurvedRightArrow: 45;
        /** 向上弯曲的方块箭头 */
        CurvedUpArrow: 47;
        /** 向上弯曲的功能区横幅 */
        CurvedUpRibbon: 99;
        /** Decagon */
        Decagon: 144;
        /** 删除了两个三角形形状的矩形;对角线 */
        DiagonalStripe: 141;
        /** 菱形 */
        Diamond: 4;
        /** Dodecagon */
        Dodecagon: 146;
        /** 甜甜 圈 */
        Donut: 18;
        /** 双大括号 */
        DoubleBrace: 27;
        /** 双括号 */
        DoubleBracket: 26;
        /** 双波 */
        DoubleWave: 104;
        /** 向下指向的块箭头 */
        DownArrow: 36;
        /** 带有向下箭头的标注 */
        DownArrowCallout: 56;
        /** 功能区下中心区域位于功能区末端的功能区横幅 */
        DownRibbon: 98;
        /** Explosion */
        Explosion1: 89;
        /** Explosion */
        Explosion2: 90;
        /** 备用流程图符号 */
        FlowchartAlternateProcess: 62;
        /** 卡片流程图符号 */
        FlowchartCard: 75;
        /** 排序规则流程图符号 */
        FlowchartCollate: 79;
        /** 连接器流程图符号 */
        FlowchartConnector: 73;
        /** 数据流程图符号 */
        FlowchartData: 64;
        /** 决策流程图符号 */
        FlowchartDecision: 63;
        /** 延迟流程图符号 */
        FlowchartDelay: 84;
        /** 直接访问存储流程图符号 */
        FlowchartDirectAccessStorage: 87;
        /** 显示流程图符号 */
        FlowchartDisplay: 88;
        /** 文档流程图符号 */
        FlowchartDocument: 67;
        /** 提取流程图符号 */
        FlowchartExtract: 81;
        /** 内部存储流程图符号 */
        FlowchartInternalStorage: 66;
        /** 磁盘流程图符号 */
        FlowchartMagneticDisk: 86;
        /** 手动输入流程图符号 */
        FlowchartManualInput: 71;
        /** 手动操作流程图符号 */
        FlowchartManualOperation: 72;
        /** 合并流程图符号 */
        FlowchartMerge: 82;
        /** 多文档流程图符号 */
        FlowchartMultidocument: 68;
        /** 脱机存储流程图符号 */
        FlowchartOfflineStorage: 139;
        /** 页外连接器流程图符号 */
        FlowchartOffpageConnector: 74;
        /** “Or”流程图符号 */
        FlowchartOr: 78;
        /** 预定义流程图符号 */
        FlowchartPredefinedProcess: 65;
        /** 准备流程图符号 */
        FlowchartPreparation: 70;
        /** 流程图符号 */
        FlowchartProcess: 61;
        /** 打孔磁带流程图符号 */
        FlowchartPunchedTape: 76;
        /** 顺序访问存储流程图符号 */
        FlowchartSequentialAccessStorage: 85;
        /** 排序流程图符号 */
        FlowchartSort: 80;
        /** 存储的数据流程图符号 */
        FlowchartStoredData: 83;
        /** 求和交汇点流程图符号 */
        FlowchartSummingJunction: 77;
        /** 终止符流程图符号 */
        FlowchartTerminator: 69;
        /** 折叠角 */
        FoldedCorner: 16;
        /** 矩形相框 */
        Frame: 158;
        /** 漏斗 */
        Funnel: 174;
        /** 带六颗牙齿的齿轮 */
        Gear6: 172;
        /** 带九颗牙齿的齿轮 */
        Gear9: 173;
        /** 矩形相框的一半 */
        HalfFrame: 159;
        /** 心 */
        Heart: 21;
        /** Heptagon */
        Heptagon: 145;
        /** 六 角 */
        Hexagon: 10;
        /** 水平滚动 */
        HorizontalScroll: 102;
        /** 等腰三角形 */
        IsoscelesTriangle: 7;
        /** 向左指向的块箭头 */
        LeftArrow: 34;
        /** 带有向左箭头的标注 */
        LeftArrowCallout: 54;
        /** 左大括号 */
        LeftBrace: 31;
        /** 左括号 */
        LeftBracket: 29;
        /** 指向逆时针的圆形箭头 */
        LeftCircularArrow: 176;
        /** 带向左和向右箭头的块箭头 */
        LeftRightArrow: 37;
        /** 带有向左和向右箭头的标注 */
        LeftRightArrowCallout: 57;
        /** 指向顺时针和逆时针的圆形箭头;两端有点的曲线箭头 */
        LeftRightCircularArrow: 177;
        /** 两端都有箭头的功能区 */
        LeftRightRibbon: 140;
        /** 带向左、向右和向上的箭头的块箭头 */
        LeftRightUpArrow: 40;
        /** 带向左和向上箭头的块箭头 */
        LeftUpArrow: 43;
        /** 闪电 */
        LightningBolt: 22;
        /** 带边框和水平标注线的标注 */
        LineCallout1: 109;
        /** 带水平强调线的标注 */
        LineCallout1AccentBar: 113;
        /** 带边框和水平强调线的标注 */
        LineCallout1BorderandAccentBar: 121;
        /** 带水平线的标注 */
        LineCallout1NoBorder: 117;
        /** 带对角线直线的标注 */
        LineCallout2: 110;
        /** 带对角线标注线和强调线的标注 */
        LineCallout2AccentBar: 114;
        /** 带有边框、对角线和强调线的标注 */
        LineCallout2BorderandAccentBar: 122;
        /** 无边框和对角标注线的标注 */
        LineCallout2NoBorder: 118;
        /** 带角度线的标注 */
        LineCallout3: 111;
        /** 带角度标注线和强调线的标注 */
        LineCallout3AccentBar: 115;
        /** 带边框、角度标注线和强调线的标注 */
        LineCallout3BorderandAccentBar: 123;
        /** 无边框和带角度标注线的标注 */
        LineCallout3NoBorder: 119;
        /** 带有形成 U 形的标注线段的标注 */
        LineCallout4: 112;
        /** 带有强调线和标注线段的标注，形成 U 形 */
        LineCallout4AccentBar: 116;
        /** 带有构成 U 形的边框、强调线和标注线段的标注 */
        LineCallout4BorderandAccentBar: 124;
        /** 没有边框的标注和形成 U 形的标注线段 */
        LineCallout4NoBorder: 120;
        /** 行反 */
        LineInverse: 183;
        /** 除法符号 ÷ */
        MathDivide: 166;
        /** 等效符号 = */
        MathEqual: 167;
        /** 减法符号 - */
        MathMinus: 164;
        /** 乘法符号 x */
        MathMultiply: 165;
        /** 非等效符号 ≠ */
        MathNotEqual: 168;
        /** 加法符号 + */
        MathPlus: 163;
        /** 只返回值，表示其他状态的组合。 */
        Mixed: -2;
        /** 月亮 */
        Moon: 24;
        /** 具有非对称非并行侧的梯形 */
        NonIsoscelesTrapezoid: 143;
        /** “No”符号 */
        NoSymbol: 19;
        /** 向右指向的凹槽块箭头 */
        NotchedRightArrow: 50;
        /** 不支持 */
        NotPrimitive: 138;
        /** 八角形 */
        Octagon: 6;
        /** 椭圆形 */
        Oval: 9;
        /** 椭圆形标注 */
        OvalCallout: 107;
        /** 平行四边形 */
        Parallelogram: 2;
        /** 五角大楼 */
        Pentagon: 51;
        /** 缺少部分的圆形 (“pie”) */
        Pie: 142;
        /** 圆形的四分之一 */
        PieWedge: 175;
        /** 斑 块 */
        Plaque: 28;
        /** 定义矩形形状的四个四分之一圆 */
        PlaqueTabs: 171;
        /** 指向向上、向下、向左和向右的块箭头 */
        QuadArrow: 39;
        /** 带有指向向上、向下、向左和向右的箭头的标注 */
        QuadArrowCallout: 59;
        /** 矩形 */
        Rectangle: 1;
        /** 矩形标注 */
        RectangularCallout: 105;
        /** 五角大楼 */
        RegularPentagon: 12;
        /** 向右指向的方块箭头 */
        RightArrow: 33;
        /** 带有向右箭头的标注 */
        RightArrowCallout: 53;
        /** 右大括号 */
        RightBrace: 32;
        /** 右括号 */
        RightBracket: 30;
        /** 右三角形 */
        RightTriangle: 8;
        /** 带一个圆角的矩形 */
        Round1Rectangle: 151;
        /** 具有两个圆角的矩形，对角线对角 */
        Round2DiagRectangle: 153;
        /** 具有共享一侧的两个圆角的矩形 */
        Round2SameRectangle: 152;
        /** 圆角矩形 */
        RoundedRectangle: 5;
        /** 圆角矩形标注 */
        RoundedRectangularCallout: 106;
        /** 笑脸 */
        SmileyFace: 17;
        /** 具有一个夹角的矩形 */
        Snip1Rectangle: 155;
        /** 具有两个斜角的矩形，对角线对角 */
        Snip2DiagRectangle: 157;
        /** 具有共享一侧的两个夹角的矩形 */
        Snip2SameRectangle: 156;
        /** 具有一个剪切角和一个圆角的矩形 */
        SnipRoundRectangle: 154;
        /** 定义矩形形状的四个小正方形 */
        SquareTabs: 170;
        /** 向右指的方块箭头，尾部有条纹 */
        StripedRightArrow: 49;
        /** 太阳 */
        Sun: 23;
        /** 曲线箭头 */
        SwooshArrow: 178;
        /** 水滴 */
        Tear: 160;
        /** 梯形 */
        Trapezoid: 3;
        /** 向上指向的块箭头 */
        UpArrow: 35;
        /** 带向上箭头的标注 */
        UpArrowCallout: 55;
        /** 向上和向下指向的块箭头 */
        UpDownArrow: 38;
        /** 带有向上和向下箭头的标注 */
        UpDownArrowCallout: 58;
        /** 功能区两端中心区域上方的功能区横幅 */
        UpRibbon: 97;
        /** 形成 U 形状的块箭头 */
        UTurnArrow: 42;
        /** 垂直滚动 */
        VerticalScroll: 101;
        /** Wave */
        Wave: 103;
    };
    /**
     * 确定允许的自动调整大小的类型。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/office.msoautosize)
     * @see {@link Kso.KsoMsoAutoSize}
     */
    readonly AutoSize: {
        /** 使用自动调整大小方案的组合。 */
        Mixed: -2;
        /** 不自动调整大小。 */
        None: 0;
        /** 根据文本调整形状。 */
        ShapeToFitText: 1;
        /** 根据形状调整文本。 */
        TextToFitShape: 2;
    };
    /**
     * 指示对象的背景样式。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/office.msobackgroundstyleindex)
     * @see {@link Kso.KsoMsoBackgroundStyleIndex}
     */
    readonly BackgroundStyleIndex: {
        /** 指定 Style1。 */
        Preset1: 1;
        /** 指定 Style10。 */
        Preset10: 10;
        /** 指定 Style11。 */
        Preset11: 11;
        /** 指定 Style12。 */
        Preset12: 12;
        /** 指定 Style2。 */
        Preset2: 2;
        /** 指定 Style3。 */
        Preset3: 3;
        /** 指定 Style4。 */
        Preset4: 4;
        /** 指定 Style5。 */
        Preset5: 5;
        /** 指定 Style6。 */
        Preset6: 6;
        /** 指定 Style7。 */
        Preset7: 7;
        /** 指定 Style8。 */
        Preset8: 8;
        /** 指定 Style9。 */
        Preset9: 9;
        /** 指定样式组合。 */
        Mixed: -2;
        /** 不指定样式。 */
        NotAPreset: 0;
    };
    /**
     * 指定命令栏的位置或行为。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/office.msobarposition)
     * @see {@link Kso.KsoMsoBarPosition}
     */
    readonly BarPosition: {
        /** 命令栏固定在应用程序窗口的底部。 */
        Bottom: 3;
        /** 命令栏浮动在应用程序窗口顶端。 */
        Floating: 4;
        /** 命令栏固定在应用程序窗口的左侧。 */
        Left: 0;
        /** 命令栏将为菜单栏（仅限 Macintosh）。 */
        MenuBar: 6;
        /** 命令栏将为快捷菜单。 */
        Popup: 5;
        /** 命令栏固定在应用程序窗口的右侧。 */
        Right: 2;
        /** 命令栏固定在应用程序窗口的顶部。 */
        Top: 1;
    };
    /**
     * 指定如何防止用户对命令栏进行自定义。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/office.msobarprotection)
     * @see {@link Kso.KsoMsoBarProtection}
     */
    readonly BarProtection: {
        /** 不能更改停靠设置。 */
        NoChangeDock: 16;
        /** 不能隐藏命令栏。 */
        NoChangeVisible: 8;
        /** 不能自定义命令栏。 */
        NoCustomize: 1;
        /** 命令栏不能固定在顶部或底部。 */
        NoHorizontalDock: 64;
        /** 不能移动命令栏。 */
        NoMove: 4;
        /** 用户可以自定义命令栏的所有方面。 */
        NoProtection: 0;
        /** 不能调整命令栏的大小。 */
        NoResize: 2;
        /** 命令栏不能固定在左侧或右侧。 */
        NoVerticalDock: 32;
    };
    /**
     * 指定命令栏是位于相对于同一停靠区域中的其他命令栏的第一行还是最后一行。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/office.msobarrow)
     * @see {@link Kso.KsoMsoBarRow}
     */
    readonly BarRow: {
        /** 停靠区域的第一行。 */
        First: 0;
        /** 停靠区域的最后一行。 */
        Last: -1;
    };
    /**
     * 指定命令栏的类型。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/office.msobartype)
     * @see {@link Kso.KsoMsoBarType}
     */
    readonly BarType: {
        /** 菜单栏 */
        MenuBar: 1;
        /** 默认命令栏 */
        Normal: 0;
        /** 快捷菜单 */
        Popup: 2;
    };
    /**
     * 指定基线文本对齐方式。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/office.msobaselinealignment)
     * @see {@link Kso.KsoMsoBaselineAlignment}
     */
    readonly BaselineAlignment: {
        /** 自动对齐。 */
        Auto: 5;
        /** 基线对齐。 */
        Baseline: 1;
        /** 居中对齐。 */
        Center: 3;
        /** 东亚 50 对齐。 */
        FarEast50: 4;
        /** 只返回值，表示其他状态的组合。 */
        Mixed: -2;
        /** 靠上对齐。 */
        Top: 2;
    };
    /**
     * 指示 ThreeDFormat 对象的凹凸效果类型。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/office.msobeveltype)
     * @see {@link Kso.KsoMsoBevelType}
     */
    readonly BevelType: {
        /** 指定 Angle 凹凸效果。 */
        Angle: 6;
        /** 指定 ArtDeco 凹凸效果。 */
        ArtDeco: 13;
        /** 指定 Circle 凹凸效果。 */
        Circle: 3;
        /** 指定 Convex 凹凸效果。 */
        Convex: 8;
        /** 指定 CoolSlant 凹凸效果。 */
        CoolSlant: 9;
        /** 指定 Cross 凹凸效果。 */
        Cross: 5;
        /** 指定 Divot 凹凸效果。 */
        Divot: 10;
        /** 指定 HardEdge 凹凸效果。 */
        HardEdge: 12;
        /** 不指定凹凸效果。 */
        None: 1;
        /** 指定 RelaxedInset 凹凸效果。 */
        RelaxedInset: 2;
        /** 指定 Riblet 凹凸效果。 */
        Riblet: 11;
        /** 指定 Slope 凹凸效果。 */
        Slope: 4;
        /** 指定 SoftRound 凹凸效果。 */
        SoftRound: 7;
        /** 指定混和类型凹凸效果。 */
        TypeMixed: -2;
    };
    /**
     * 指定在以黑白模式查看时如何显示形状。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/office.msoblackwhitemode)
     * @see {@link Kso.KsoMsoBlackWhiteMode}
     */
    readonly BlackWhiteMode: {
        /** 默认行为 */
        Automatic: 1;
        /** 黑色 */
        Black: 8;
        /** 带灰度填充的白色 */
        BlackTextAndLine: 6;
        /** 未显示 */
        DontShow: 10;
        /** 带白色填充的灰色 */
        GrayOutline: 5;
        /** 灰度 */
        GrayScale: 2;
        /** 带白色填充的黑色 */
        HighContrast: 7;
        /** 反灰度 */
        InverseGrayScale: 4;
        /** 浅灰度 */
        LightGrayScale: 3;
        /** 不支持 */
        Mixed: -2;
        /** 白色 */
        White: 9;
    };
    /**
     * 指定提供程序支持多少个类别。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/office.msoblogcategorysupport)
     * @see {@link Kso.KsoMsoBlogCategorySupport}
     */
    readonly BlogCategorySupport: {
        /** 支持多个类别。 */
        MultipleCategories: 2;
        /** 不支持任何类别。 */
        NoCategories: 0;
        /** 支持一个类别。 */
        OneCategory: 1;
    };
    /**
     * 指定博客图像类型。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/office.msoblogimagetype)
     * @see {@link Kso.KsoMsoBlogImageType}
     */
    readonly BlogImageType: {
        /** GIF 图像 */
        GIF: 2;
        /** JPEG 图像 */
        JPEG: 1;
        /** PNG 图像 */
        PNG: 3;
    };
    /**
     * 指定可用于文档或演示文稿广播会话的应用程序功能。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/overview/library-reference/msobroadcastcapabilities-enumeration-office)
     * @see {@link Kso.KsoMsoBroadcastCapabilities}
     */
    readonly BroadcastCapabilities: {
        /** 正在广播的文件的大小受到限制。 */
        FileSizeLimited: 1;
        /** 演示者和与会者可以做共享笔记。 */
        SupportsMeetingNotes: 2;
        /** 演示者和与会者可以在广播期间对文件进行更新。 */
        SupportsUpdateDoc: 4;
    };
    /**
     * 指定文档或演示文稿广播的当前状态。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/overview/library-reference/msobroadcaststate-enumeration-office)
     * @see {@link Kso.KsoMsoBroadcastState}
     */
    readonly BroadcastState: {
        /** 广播已暂停。 */
        BroadcastPaused: 2;
        /** 广播已开始。 */
        BroadcastStarted: 1;
        /** 文件未广播。 */
        NoBroadcast: 0;
    };
    /**
     * 指定项目符号类型。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/office.msobullettype)
     * @see {@link Kso.KsoMsoBulletType}
     */
    readonly BulletType: {
        /** 只返回值，表示其他状态的组合。 */
        Mixed: -2;
        /** 无项目符号。 */
        None: 0;
        /** 编号项目符号。 */
        Numbered: 2;
        /** 图片项目符号。 */
        Picture: 3;
        /** 非编号项目符号。 */
        Unnumbered: 1;
    };
    /**
     * 指定命令栏按钮控件的外观。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/office.msobuttonstate)
     * @see {@link Kso.KsoMsoButtonState}
     */
    readonly ButtonState: {
        /** 按钮已按下。 */
        Down: -1;
        /** 按钮已按下。 */
        Mixed: 2;
        /** 按钮未按下。 */
        Up: 0;
    };
    /**
     * 指定命令栏按钮的样式。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/office.msobuttonstyle)
     * @see {@link Kso.KsoMsoButtonStyle}
     */
    readonly ButtonStyle: {
        /** 默认行为。 */
        Automatic: 0;
        /** 仅文本。 */
        Caption: 2;
        /** 仅图像。 */
        Icon: 1;
        /** 图像和文本，且文本位于图像的右侧。 */
        IconAndCaption: 3;
        /** 下方带文本的图像。 */
        IconAndCaptionBelow: 11;
        /** 右侧带自动换行文本的图像。 */
        IconAndWrapCaption: 7;
        /** 下方带自动换行文本的图像。 */
        IconAndWrapCaptionBelow: 15;
        /** 仅文本，且文本居中并自动换行。 */
        WrapCaption: 14;
    };
    /**
     * 指定标注线与标注文本边框的夹角大小。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/office.msocalloutangletype)
     * @see {@link Kso.KsoMsoCalloutAngleType}
     */
    readonly CalloutAngleType: {
        /** 30° 角度 */
        30: 2;
        /** 45° 角度 */
        45: 3;
        /** 60° 角度 */
        60: 4;
        /** 90° 角度 */
        90: 5;
        /** 默认角度。 在拖动对象时角度会发生更改。 */
        Automatic: 1;
        /** 只返回值，表示其他状态的组合。 */
        Mixed: -2;
    };
    /**
     * 指定标注线相对于文本边界框的起始位置。 与 CalloutFormat 对象的 PresetDrop 方法一起使用。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/office.msocalloutdroptype)
     * @see {@link Kso.KsoMsoCalloutDropType}
     */
    readonly CalloutDropType: {
        /** 向下 */
        Bottom: 4;
        /** 居中 */
        Center: 3;
        /** 自 定义。 如果该值用作 PresetDrop 属性的值，则 CalloutFormat 对象的 Drop 和 AutoAttach 属性用于确定标注线连接到文本框的位置。 */
        Custom: 1;
        /** 只返回值，表示其他状态的组合。 */
        Mixed: -2;
        /** 顶部 */
        Top: 2;
    };
    /**
     * 指定标注线的类型。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/office.msocallouttype)
     * @see {@link Kso.KsoMsoCalloutType}
     */
    readonly CalloutType: {
        /** 标注线由两个线段组成。 标注线附加在文本边界框的右侧。 */
        Four: 4;
        /** 只返回值，表示其他状态的组合。 */
        Mixed: -2;
        /** 单线段水平标注线。 */
        One: 1;
        /** 标注线由两个线段组成。 标注线附加在文本边界框的左侧。 */
        Three: 3;
        /** 单线段倾斜标注线。 */
        Two: 2;
    };
    /**
     * 指定呈现文本时使用的字符集。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/office.msocharacterset)
     * @see {@link Kso.KsoMsoCharacterSet}
     */
    readonly CharacterSet: {
        /** 阿拉伯语字符集 */
        Arabic: 1;
        /** 西里尔文字符集 */
        Cyrillic: 2;
        /** 英语、西欧和其他拉丁语脚本字符集 */
        EnglishWesternEuropeanOtherLatinScript: 3;
        /** 希腊字符集 */
        Greek: 4;
        /** 希伯来语字符集 */
        Hebrew: 5;
        /** 日语字符集 */
        Japanese: 6;
        /** 朝鲜语字符集 */
        Korean: 7;
        /** 多语言 Unicode 字符集 */
        MultilingualUnicode: 8;
        /** 简体中文字符集 */
        SimplifiedChinese: 9;
        /** 泰文字符集 */
        Thai: 10;
        /** 繁体中文字符集 */
        TraditionalChinese: 11;
        /** 越南语字符集 */
        Vietnamese: 12;
    };
    /**
     * 指定是否以及如何显示图表元素。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/office.msochartelementtype)
     * @see {@link Kso.KsoMsoChartElementType}
     */
    readonly ChartElementType: {
        /** 不显示图表基底。 */
        ChartFloorNone: 1200;
        /** 显示图表基底。 */
        ChartFloorShow: 1201;
        /** 在图表上方显示标题。 */
        ChartTitleAboveChart: 2;
        /** 将标题显示为居中覆盖。 */
        ChartTitleCenteredOverlay: 1;
        /** 不显示图表标题。 */
        ChartTitleNone: 0;
        /** 不显示图表背景墙。 */
        ChartWallNone: 1100;
        /** 显示图表墙。 */
        ChartWallShow: 1101;
        /** 使用数据标签最佳位置。 */
        DataLabelBestFit: 210;
        /** 在底部显示数据标签。 */
        DataLabelBottom: 209;
        /** 将数据标签显示为标注。 */
        DataLabelCallout: 211;
        /** 居中显示数据标签。 */
        DataLabelCenter: 202;
        /** 在底端内侧显示数据标签。 */
        DataLabelInsideBase: 204;
        /** 在顶端内侧显示数据标签。 */
        DataLabelInsideEnd: 203;
        /** 靠左显示数据标签。 */
        DataLabelLeft: 206;
        /** 不显示数据标签。 */
        DataLabelNone: 200;
        /** 在顶端外侧显示数据标签。 */
        DataLabelOutSideEnd: 205;
        /** 靠右显示数据标签。 */
        DataLabelRight: 207;
        /** 显示数据标签。 */
        DataLabelShow: 201;
        /** 在顶部显示数据标签。 */
        DataLabelTop: 208;
        /** 不显示模拟运算表。 */
        DataTableNone: 500;
        /** 显示模拟运算表。 */
        DataTableShow: 501;
        /** 显示带图例项标示的模拟运算表。 */
        DataTableWithLegendKeys: 502;
        /** 不显示误差线。 */
        ErrorBarNone: 700;
        /** 显示百分比误差线。 */
        ErrorBarPercentage: 702;
        /** 显示标准偏差误差线。 */
        ErrorBarStandardDeviation: 703;
        /** 显示标准误差线。 */
        ErrorBarStandardError: 701;
        /** 在底部显示图例。 */
        LegendBottom: 104;
        /** 在左侧显示图例。 */
        LegendLeft: 103;
        /** 在左侧叠放图例。 */
        LegendLeftOverlay: 106;
        /** 不显示图例。 */
        LegendNone: 100;
        /** 在右侧显示图例。 */
        LegendRight: 101;
        /** 在右侧叠放图例。 */
        LegendRightOverlay: 105;
        /** 在顶部显示图例。 */
        LegendTop: 102;
        /** 显示垂直线和高/低线。 */
        LineDropHiLoLine: 804;
        /** 显示垂直线。 */
        LineDropLine: 801;
        /** 显示高/低线。 */
        LineHiLoLine: 802;
        /** 不显示线。 */
        LineNone: 800;
        /** 显示系列线。 */
        LineSeriesLine: 803;
        /** 不显示绘图区。 */
        PlotAreaNone: 1000;
        /** 显示绘图区。 */
        PlotAreaShow: 1001;
        /** 使用十亿作为主分类轴单位。 */
        PrimaryCategoryAxisBillions: 374;
        /** 对主分类轴使用对数刻度。 */
        PrimaryCategoryAxisLogScale: 375;
        /** 使用百万作为主分类轴单位。 */
        PrimaryCategoryAxisMillions: 373;
        /** 不显示主分类轴。 */
        PrimaryCategoryAxisNone: 348;
        /** 反转主分类轴。 */
        PrimaryCategoryAxisReverse: 351;
        /** 显示主分类轴。 */
        PrimaryCategoryAxisShow: 349;
        /** 使用千作为主分类轴单位。 */
        PrimaryCategoryAxisThousands: 372;
        /** 紧邻轴显示主分类轴标题。 */
        PrimaryCategoryAxisTitleAdjacentToAxis: 301;
        /** 在轴下方显示主分类轴标题。 */
        PrimaryCategoryAxisTitleBelowAxis: 302;
        /** 水平显示主分类轴标题。 */
        PrimaryCategoryAxisTitleHorizontal: 305;
        /** 不显示主分类轴标题。 */
        PrimaryCategoryAxisTitleNone: 300;
        /** 旋转主分类轴标题。 */
        PrimaryCategoryAxisTitleRotated: 303;
        /** 垂直显示主分类轴标题。 */
        PrimaryCategoryAxisTitleVertical: 304;
        /** 无标签显示主分类轴。 */
        PrimaryCategoryAxisWithoutLabels: 350;
        /** 沿主分类轴显示主要网格线。 */
        PrimaryCategoryGridLinesMajor: 334;
        /** 沿主分类轴显示次要网格线。 */
        PrimaryCategoryGridLinesMinor: 333;
        /** 沿主分类轴同时显示主要网格线和次要网格线。 */
        PrimaryCategoryGridLinesMinorMajor: 335;
        /** 不沿主分类轴显示网格线。 */
        PrimaryCategoryGridLinesNone: 332;
        /** 使用十亿作为主数值轴单位。 */
        PrimaryValueAxisBillions: 356;
        /** 对主数值轴使用对数刻度。 */
        PrimaryValueAxisLogScale: 357;
        /** 使用百万作为主数值轴单位。 */
        PrimaryValueAxisMillions: 355;
        /** 不显示主数值轴。 */
        PrimaryValueAxisNone: 352;
        /** 显示主数值轴。 */
        PrimaryValueAxisShow: 353;
        /** 使用千作为主数值轴单位。 */
        PrimaryValueAxisThousands: 354;
        /** 紧邻轴放置主数值轴标题。 */
        PrimaryValueAxisTitleAdjacentToAxis: 306;
        /** 在轴下方放置主数值轴标题。 */
        PrimaryValueAxisTitleBelowAxis: 308;
        /** 水平显示主数值轴标题。 */
        PrimaryValueAxisTitleHorizontal: 311;
        /** 不显示主数值轴标题。 */
        PrimaryValueAxisTitleNone: 306;
        /** 旋转主数值轴标题。 */
        PrimaryValueAxisTitleRotated: 309;
        /** 垂直显示主数值轴标题。 */
        PrimaryValueAxisTitleVertical: 310;
        /** 沿主数值轴显示主要网格线。 */
        PrimaryValueGridLinesMajor: 330;
        /** 沿主数值轴显示次要网格线。 */
        PrimaryValueGridLinesMinor: 329;
        /** 沿主数值轴同时显示主要网格线和次要网格线。 */
        PrimaryValueGridLinesMinorMajor: 331;
        /** 不沿主数值轴显示网格线。 */
        PrimaryValueGridLinesNone: 328;
        /** 使用十亿作为次分类轴单位。 */
        SecondaryCategoryAxisBillions: 378;
        /** 对次分类轴使用对数刻度。 */
        SecondaryCategoryAxisLogScale: 379;
        /** 使用百万作为次分类轴单位。 */
        SecondaryCategoryAxisMillions: 377;
        /** 不显示次分类轴。 */
        SecondaryCategoryAxisNone: 358;
        /** 反转次分类轴。 */
        SecondaryCategoryAxisReverse: 361;
        /** 显示次分类轴。 */
        SecondaryCategoryAxisShow: 359;
        /** 使用千作为次分类轴单位。 */
        SecondaryCategoryAxisThousands: 376;
        /** 显示与轴相邻的辅助类别轴标题。 */
        SecondaryCategoryAxisTitleAdjacentToAxis: 313;
        /** 在轴下方显示辅助类别轴标题。 */
        SecondaryCategoryAxisTitleBelowAxis: 314;
        /** 水平显示次分类轴标题。 */
        SecondaryCategoryAxisTitleHorizontal: 317;
        /** 不显示次分类轴标题。 */
        SecondaryCategoryAxisTitleNone: 312;
        /** 旋转次分类轴标题。 */
        SecondaryCategoryAxisTitleRotated: 315;
        /** 垂直显示次分类轴标题。 */
        SecondaryCategoryAxisTitleVertical: 316;
        /** 无标签显示次分类轴。 */
        SecondaryCategoryAxisWithoutLabels: 360;
        /** 沿次分类轴显示主要网格线。 */
        SecondaryCategoryGridLinesMajor: 342;
        /** 沿次分类轴显示次要网格线。 */
        SecondaryCategoryGridLinesMinor: 341;
        /** 沿次分类轴同时显示主要网格线和次要网格线。 */
        SecondaryCategoryGridLinesMinorMajor: 343;
        /** 不沿次分类轴显示网格线。 */
        SecondaryCategoryGridLinesNone: 340;
        /** 使用十亿作为次数值轴单位。 */
        SecondaryValueAxisBillions: 366;
        /** 对次数值轴使用对数刻度。 */
        SecondaryValueAxisLogScale: 367;
        /** 使用百万作为次数值轴单位。 */
        SecondaryValueAxisMillions: 365;
        /** 不显示次数值轴。 */
        SecondaryValueAxisNone: 362;
        /** 显示次数值轴。 */
        SecondaryValueAxisShow: 363;
        /** 使用千作为次数值轴单位。 */
        SecondaryValueAxisThousands: 364;
        /** 紧邻轴显示次数值轴标题。 */
        SecondaryValueAxisTitleAdjacentToAxis: 319;
        /** 在轴下方显示次数值轴标题。 */
        SecondaryValueAxisTitleBelowAxis: 320;
        /** 水平显示次数值轴标题。 */
        SecondaryValueAxisTitleHorizontal: 323;
        /** 不显示次数值轴标题。 */
        SecondaryValueAxisTitleNone: 318;
        /** 旋转次数值轴标题。 */
        SecondaryValueAxisTitleRotated: 321;
        /** 垂直显示次数值轴标题。 */
        SecondaryValueAxisTitleVertical: 322;
        /** 沿次数值轴显示主要网格线。 */
        SecondaryValueGridLinesMajor: 338;
        /** 沿次数值轴显示次要网格线。 */
        SecondaryValueGridLinesMinor: 337;
        /** 沿次数值轴同时显示主要网格线和次要网格线。 */
        SecondaryValueGridLinesMinorMajor: 339;
        /** 不沿次数值轴显示网格线。 */
        SecondaryValueGridLinesNone: 336;
        /** 沿系列轴显示主要网格线。 */
        SeriesAxisGridLinesMajor: 346;
        /** 沿系列轴显示次要网格线。 */
        SeriesAxisGridLinesMinor: 345;
        /** 沿系列轴同时显示主要网格线和次要网格线。 */
        SeriesAxisGridLinesMinorMajor: 347;
        /** 不沿系列轴显示网格线。 */
        SeriesAxisGridLinesNone: 344;
        /** 不显示系列轴。 */
        SeriesAxisNone: 368;
        /** 反转系列轴。 */
        SeriesAxisReverse: 371;
        /** 显示系列轴。 */
        SeriesAxisShow: 369;
        /** 水平显示系列轴标题。 */
        SeriesAxisTitleHorizontal: 327;
        /** 不显示系列轴标题。 */
        SeriesAxisTitleNone: 324;
        /** 旋转系列轴标题。 */
        SeriesAxisTitleRotated: 325;
        /** 垂直显示系列轴标题。 */
        SeriesAxisTitleVertical: 326;
        /** 不带标签显示系列轴标题。 */
        SeriesAxisWithoutLabeling: 370;
        /** 添加指数趋势线。 */
        TrendlineAddExponential: 602;
        /** 添加线性趋势线。 */
        TrendlineAddLinear: 601;
        /** 添加线性预测。 */
        TrendlineAddLinearForecast: 603;
        /** 添加双周期移动平均。 */
        TrendlineAddTwoPeriodMovingAverage: 604;
        /** 不显示趋势线。 */
        TrendlineNone: 600;
        /** 不显示涨/跌柱线。 */
        UpDownBarsNone: 900;
        /** 显示涨/跌柱线。 */
        UpDownBarsShow: 901;
    };
    /**
     * 指定要插入图表中的数据标签的数据字段的类型。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/overview/library-reference/msochartfieldtype-enumeration-office)
     * @see {@link Kso.KsoMsoChartFieldType}
     */
    readonly ChartFieldType: {
        /** 指定数据点的气泡大小。 */
        BubbleSize: 1;
        /** 指定数据点的类别名称大小。 */
        CategoryName: 2;
        /** 指定数据点中使用的公式。 */
        Formula: 6;
        /** 指定值的百分比。 */
        Percentage: 3;
        /** 指定数据系列名称。 */
        SeriesName: 4;
        /** 指定数据字段的值。 */
        Value: 5;
        /** 指定数据范围的值。 */
        Range: 7;
    };
    /**
     * 指定剪贴板格式。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/office.msoclipboardformat)
     * @see {@link Kso.KsoMsoClipboardFormat}
     */
    readonly ClipboardFormat: {
        /** HTML 格式 */
        HTML: 2;
        /** 只返回值，表示其他状态的组合。 */
        Mixed: -2;
        /** 本机格式 */
        Native: 1;
        /** 纯文本格式 */
        PlainText: 4;
        /** RTF 格式 */
        RTF: 3;
    };
    /**
     * 指定颜色类型。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/office.msocolortype)
     * @see {@link Kso.KsoMsoColorType}
     */
    readonly ColorType: {
        /** “颜色管理系统”颜色类型。 */
        CMS: 4;
        /** 颜色由蓝绿色、洋红、黄色和黑色的值确定。 */
        CMYK: 3;
        /** 不支持。 */
        Ink: 5;
        /** 不支持。 */
        Mixed: -2;
        /** 颜色由红色、绿色和蓝色的值确定。 */
        RGB: 1;
        /** 颜色由应用程序特定的方案定义。 */
        Scheme: 2;
    };
    /**
     * 指定命令栏组合框是否包括标签。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/office.msocombostyle)
     * @see {@link Kso.KsoMsoComboStyle}
     */
    readonly ComboStyle: {
        /** 组合框包括由组合框的 Caption 属性指定的标签。 */
        Label: 1;
        /** 组合框不包括标签。 */
        Normal: 0;
    };
    /**
     * 指定命令栏按钮是否是超链接。 如果命令栏按钮是超链接，则进一步指定该超链接是启动其他应用程序（例如浏览器），还是在活动的选择点处插入图片。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/office.msocommandbarbuttonhyperlinktype)
     * @see {@link Kso.KsoMsoCommandBarButtonHyperlinkType}
     */
    readonly CommandBarButtonHyperlinkType: {
        /** 单击命令栏按钮在活动的选择点处插入图片。 */
        InsertPicture: 2;
        /** 命令栏按钮不是超链接。 */
        None: 0;
        /** 单击命令栏按钮打开在该命令栏按钮的“TooltipText”属性中指定的链接。 */
        Open: 1;
    };
    /**
     * 指定连接符的类型。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/office.msoconnectortype)
     * @see {@link Kso.KsoMsoConnectorType}
     */
    readonly ConnectorType: {
        /** 曲线连接器 */
        Curve: 3;
        /** 弯头连接器 */
        Elbow: 2;
        /** 直线连接线 */
        Straight: 1;
        /** 只返回值，表示其他状态的组合。 */
        TypeMixed: -2;
    };
    /**
     * 指定联系人卡片的地址类型。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/office.msocontactcardaddresstype)
     * @see {@link Kso.KsoMsoContactCardAddressType}
     */
    readonly ContactCardAddressType: {
        /** 地址的未知标识符。 */
        Unknown: 0;
        /** Outlook 地址的唯一标识符。 */
        Outlook: 1;
        /** SMTP 地址的唯一标识符。 */
        SMTP: 2;
        /** IM 地址的唯一标识符。 */
        IM: 3;
    };
    /**
     * 指定如何显示联系人卡片。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/office.msocontactcardstyle)
     * @see {@link Kso.KsoMsoContactCardStyle}
     */
    readonly ContactCardStyle: {
        /** 联系人卡片显示为完整卡片。 */
        Full: 1;
        /** 联系人卡片显示为悬浮卡片。 */
        Hover: 0;
    };
    /**
     * 指定联系人卡片类型。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/office.msocontactcardtype)
     * @see {@link Kso.KsoMsoContactCardType}
     */
    readonly ContactCardType: {
        /** 企业联系人地址的联系人卡片。 */
        EnterpriseContact: 0;
        /** 个人联系人地址的联系人卡片。 */
        PersonalContact: 1;
        /** 未知联系人地址的联系人卡片。 */
        UnknownContact: 2;
        /** 企业通讯组列表联系人地址的联系人卡片。 */
        EnterpriseGroup: 3;
        /** 个人通讯组列表联系人地址的联系人卡片。 */
        PersonalDistributionList: 4;
    };
    /**
     * 指定 OLE 客户端和 OLE 服务器角色，在合并两个 Microsoft Office 应用程序时，会用到这些角色中的命令栏控件。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/office.msocontrololeusage)
     * @see {@link Kso.KsoMsoControlOLEUsage}
     */
    readonly ControlOLEUsage: {
        /** 控件既在客户端上运行，也在服务器上运行。 */
        Both: 3;
        /** 仅在客户端上运行的控件。 */
        Client: 2;
        /** 控件既不在客户端运行，也不在服务器上运行。 */
        Neither: 0;
        /** 仅在服务器上运行的控件。 */
        Server: 1;
    };
    /**
     * 指定命令栏控件的类型。 与 CommandBarControls 对象的 Add 方法一起使用。 通过 CommandBars 对象模型只能创建一组有限的控件类型：msoControlButton、msoControlEdit、msoControlDropdown、msoControlComboBox、msoControlPopup 和 msoControlActiveX。 其他控件类型可能存在于内置或加载项命令栏上，但不能通过对象模型创建。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/office.msocontroltype)
     * @see {@link Kso.KsoMsoControlType}
     */
    readonly ControlType: {
        /** ActiveX 控件。 */
        ActiveX: 22;
        /** 在用户键入时自动填充第一个匹配选项的组合框。 不能通过对象模型创建。 */
        AutoCompleteCombo: 26;
        /** 命令按钮。 */
        Button: 1;
        /** 下拉按钮。 不能通过对象模型创建。 */
        ButtonDropdown: 5;
        /** 弹出式按钮。 不能通过对象模型创建。 */
        ButtonPopup: 12;
        /** 组合框。 */
        ComboBox: 4;
        /** 自定义控件。 不能通过对象模型创建。 */
        Custom: 0;
        /** 下拉列表。 */
        Dropdown: 3;
        /** 文本框。 */
        Edit: 2;
        /** 展开网格。 不能通过对象模型创建。 */
        ExpandingGrid: 16;
        /** 计量表控件。 不能通过对象模型创建。 */
        Gauge: 19;
        /** 一般下拉列表。 不能通过对象模型创建。 */
        GenericDropdown: 8;
        /** 图形组合框。 不能通过对象模型创建。 */
        GraphicCombo: 20;
        /** 图形下拉列表。 不能通过对象模型创建。 */
        GraphicDropdown: 9;
        /** 图形弹出菜单。 不能通过对象模型创建。 */
        GraphicPopup: 11;
        /** 网 格。 不能通过对象模型创建。 */
        Grid: 18;
        /** 标签。 不能通过对象模型创建。 */
        Label: 15;
        /** 扩展标签。 不能通过对象模型创建。 */
        LabelEx: 24;
        /** OCX 下拉列表。 不能通过对象模型创建。 */
        OCXDropdown: 7;
        /** 窗 格。 不能通过对象模型创建。 */
        Pane: 21;
        /** 弹出窗口。 */
        Popup: 10;
        /** 旋转。 不能通过对象模型创建。 */
        Spinner: 23;
        /** 最近使用过的 (MRU) 弹出框。 不能通过对象模型创建。 */
        SplitButtonMRUPopup: 14;
        /** 拆分按钮弹出框。 不能通过对象模型创建。 */
        SplitButtonPopup: 13;
        /** 拆分下拉列表。 不能通过对象模型创建。 */
        SplitDropdown: 6;
        /** 拆分展开网格。 不能通过对象模型创建。 */
        SplitExpandingGrid: 17;
        /** 工作窗格。 不能通过对象模型创建。 */
        WorkPane: 25;
    };
    /**
     * 指定自定义任务窗格的停靠行为。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/office.msoctpdockposition)
     * @see {@link Kso.KsoMsoCTPDockPosition}
     */
    readonly CTPDockPosition: {
        /** 将任务窗格停靠在文档窗口的底部。 */
        Bottom: 3;
        /** 不停靠任务窗格。 */
        Floating: 4;
        /** 将任务窗格停靠在文档窗口的左侧。 */
        Left: 0;
        /** 将任务窗格停靠在文档窗口的右侧。 */
        Right: 2;
        /** 将任务窗格停靠在文档窗口的顶部。 */
        Top: 1;
    };
    /**
     * 指定对自定义任务窗格的停靠行为的限制。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/office.msoctpdockpositionrestrict)
     * @see {@link Kso.KsoMsoCTPDockPositionRestrict}
     */
    readonly CTPDockPositionRestrict: {
        /** 任务窗格的当前限制设置没有更改。 */
        NoChange: 1;
        /** 任务窗格不能固定在文档窗口的右侧或左侧。 */
        NoHorizontal: 2;
        /** 对任务窗格的停靠没有限制。 */
        None: 0;
        /** 任务窗格不能固定在文档窗口的顶部或底部。 */
        NoVertical: 3;
    };
    /**
     * 指定节点类型。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/office.msocustomxmlnodetype)
     * @see {@link Kso.KsoMsoCustomXMLNodeType}
     */
    readonly CustomXMLNodeType: {
        /** 节点是属性。 */
        Attribute: 2;
        /** 节点是 CData 类型。 */
        CData: 4;
        /** 节点是注释。 */
        Comment: 8;
        /** 节点是“文档”节点。 */
        Document: 9;
        /** 节点是元素。 */
        Element: 1;
        /** 节点是处理指令。 */
        ProcessingInstruction: 7;
        /** 节点是文本节点。 */
        Text: 3;
    };
    /**
     * 指示将如何清除或生成验证错误。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/office.msocustomxmlvalidationerrortype)
     * @see {@link Kso.KsoMsoCustomXMLValidationErrorType}
     */
    readonly CustomXMLValidationErrorType: {
        /** 指定当对错误所绑定到的节点进行任何更改时错误将自行清除。 */
        AutomaticallyCleared: 1;
        /** 指定直到调用 Delete 方法时才清除错误。 */
        Manual: 2;
        /** 指定当存在可用于自定义 XML 部分的非空架构集合且验证有效时，对该部分的任何更改都将导致验证错误。 */
        SchemaGenerated: 0;
    };
    /**
     * 指定日期/时间数据类型的格式。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/office.msodatetimeformat)
     * @see {@link Kso.KsoMsoDateTimeFormat}
     */
    readonly DateTimeFormat: {
        /** 指定 ddddMMMMddyyyy 格式。 */
        ddddMMMMddyyyy: 2;
        /** 指定 MMMMyyyy 格式。 */
        dMMMMyyyy: 3;
        /** 指定 MMMyy 格式。 */
        dMMMyy: 5;
        /** 指定 Office 应用程序将确定该格式。 */
        FigureOut: 14;
        /** 指定混和格式。 */
        FormatMixed: -2;
        /** 指定 Hmm 格式。 */
        Hmm: 10;
        /** 指定 hmmAMPM 格式。 */
        hmmAMPM: 12;
        /** 指定 Hmmss 格式。 */
        Hmmss: 11;
        /** 指定 hmmssAMPM 格式。 */
        hmmssAMPM: 13;
        /** 指定 Mdyy 格式。 */
        Mdyy: 1;
        /** 指定 MMddyyHmm 格式。 */
        MMddyyHmm: 8;
        /** 指定 MMddyyhmmAMPM 格式。 */
        MMddyyhmmAMPM: 9;
        /** 指定 MMMMdyyyy 格式。 */
        MMMMdyyyy: 4;
        /** 指定 MMMMyy 格式。 */
        MMMMyy: 6;
        /** 指定 MMyy 格式。 */
        MMyy: 7;
    };
    /**
     * 指定如何平均分布图形集合。 与 ShapeRange 集合的 Distribute 方法一起使用。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/office.msodistributecmd)
     * @see {@link Kso.KsoMsoDistributeCmd}
     */
    readonly DistributeCmd: {
        /** 水平分布。 */
        Horizontally: 0;
        /** 垂直分布。 */
        Vertically: 1;
    };
    /**
     * 代表运行文档检查器模块的结果。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/office.msodocinspectorstatus)
     * @see {@link Kso.KsoMsoDocInspectorStatus}
     */
    readonly DocInspectorStatus: {
        /** 指示文档检查器模块未返回任何问题或错误。 */
        DocOk: 0;
        /** 指示文档检查器模块返回错误。 */
        Error: 2;
        /** 指示文档检查器模块发现了搜索条件的一个或多个匹配项。 */
        IssueFound: 1;
    };
    /**
     * 指定文档属性的数据类型。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/office.msodocproperties)
     * @see {@link Kso.KsoMsoDocProperties}
     */
    readonly DocProperties: {
        /** Boolean 值。 */
        Boolean: 2;
        /** Date 值。 */
        Date: 3;
        /** Floating point 值。 */
        Float: 5;
        /** Integer 值。 */
        Number: 1;
        /** 字符串值。 */
        String: 4;
    };
    /**
     * 指定节点的编辑类型。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/office.msoeditingtype)
     * @see {@link Kso.KsoMsoEditingType}
     */
    readonly EditingType: {
        /** 将节点更改为适合正在连接的段的类型。 */
        Auto: 0;
        /** 将节点更改为角部节点。 */
        Corner: 1;
        /** 将节点更改为平滑曲线节点。 */
        Smooth: 2;
        /** 将节点更改为对称的曲线节点。 */
        Symmetric: 3;
    };
    /**
     * 指定文档编码 (代码页或字符集) 供 Web 浏览器在用户查看保存的文档时使用。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/office.msoencoding)
     * @see {@link Kso.KsoMsoEncoding}
     */
    readonly Encoding: {
        /** 阿拉伯语 */
        Arabic: 1256;
        /** 阿拉伯语 ASMO */
        ArabicASMO: 708;
        /** Web 浏览器自动检测要使用的阿拉伯语编码类型。 */
        ArabicAutoDetect: 51256;
        /** 透明阿拉伯语 */
        ArabicTransparentASMO: 720;
        /** Web 浏览器自动检测要使用的编码类型。 */
        AutoDetect: 50001;
        /** 波罗的海 */
        Baltic: 1257;
        /** 中欧字符 */
        CentralEuropean: 1250;
        /** 西里尔文 */
        Cyrillic: 1251;
        /** Web 浏览器自动检测要使用的西里尔文编码类型。 */
        CyrillicAutoDetect: 51251;
        /** 扩展二进制编码十进制交换代码 (EBCDIC) 阿拉伯语 */
        EBCDICArabic: 20420;
        /** 丹麦和挪威使用的 EBCDIC */
        EBCDICDenmarkNorway: 20277;
        /** 在芬兰和瑞典使用的 EBCDIC */
        EBCDICFinlandSweden: 20278;
        /** 法国使用的 EBCDIC */
        EBCDICFrance: 20297;
        /** 在德国使用的 EBCDIC */
        EBCDICGermany: 20273;
        /** 在希腊语中使用的 EBCDIC */
        EBCDICGreek: 20423;
        /** 现代希腊语中使用的 EBCDIC */
        EBCDICGreekModern: 875;
        /** 希伯来语中使用的 EBCDIC */
        EBCDICHebrew: 20424;
        /** 冰岛使用的 EBCDIC */
        EBCDICIcelandic: 20871;
        /** 国际 EBCDIC */
        EBCDICInternational: 500;
        /** 在意大利使用的 EBCDIC */
        EBCDICItaly: 20280;
        /** 与日语片假名一起使用的 EBCDIC (扩展) */
        EBCDICJapaneseKatakanaExtended: 20290;
        /** 与日语片假名一起使用的 EBCDIC (扩展) 和日语 */
        EBCDICJapaneseKatakanaExtendedAndJapanese: 50930;
        /** 用于日语拉丁语 (扩展) 和日语的 EBCDIC */
        EBCDICJapaneseLatinExtendedAndJapanese: 50939;
        /** EBCDIC 与韩国 (扩展) */
        EBCDICKoreanExtended: 20833;
        /** EBCDIC 与韩语 (扩展) 和韩语配合使用 */
        EBCDICKoreanExtendedAndKorean: 50933;
        /** 用于拉丁美洲和西班牙的 EBCDIC */
        EBCDICLatinAmericaSpain: 20284;
        /** EBCDIC 多语言 ROECE (拉丁语 2) */
        EBCDICMultilingualROECELatin2: 870;
        /** 用于俄语的 EBCDIC */
        EBCDICRussian: 20880;
        /** 用于塞尔维亚语和保加利亚语的 EBCDIC */
        EBCDICSerbianBulgarian: 21025;
        /** 与简体中文一起使用的 EBCDIC (扩展) 和简体中文 */
        EBCDICSimplifiedChineseExtendedAndSimplifiedChinese: 50935;
        /** 用于泰文的 EBCDIC */
        EBCDICThai: 20838;
        /** 用于土耳其语的 EBCDIC */
        EBCDICTurkish: 20905;
        /** EBCDIC 与土耳其语 (拉丁语 5) */
        EBCDICTurkishLatin5: 1026;
        /** 在英国使用的 EBCDIC */
        EBCDICUnitedKingdom: 20285;
        /** 在美国和加拿大使用的 EBCDIC */
        EBCDICUSCanada: 37;
        /** 美国和加拿大使用的 EBCDIC，以及日语 */
        EBCDICUSCanadaAndJapanese: 50931;
        /** EBCDIC 在美国和加拿大使用，以及繁体中文 */
        EBCDICUSCanadaAndTraditionalChinese: 50937;
        /** 扩展的 Unix 代码 (EUC) （与中文和简体中文配合使用） */
        EUCChineseSimplifiedChinese: 51936;
        /** 与日语配合使用的 EUC */
        EUCJapanese: 51932;
        /** 与朝鲜语配合使用的 EUC */
        EUCKorean: 51949;
        /** 与台湾语和繁体中文一起使用的 EUC */
        EUCTaiwaneseTraditionalChinese: 51950;
        /** 欧 罗 巴 */
        Europa3: 29001;
        /** 扩展 Alpha 小写 */
        ExtAlphaLowercase: 21027;
        /** 希腊语 */
        Greek: 1253;
        /** Web 浏览器自动检测要使用的希腊语编码类型。 */
        GreekAutoDetect: 51253;
        /** 希伯来语 */
        Hebrew: 1255;
        /** 简体中文 (HZGB) */
        HZGBSimplifiedChinese: 52936;
        /** 德语 (国际字母第 5 号或 IA5) */
        IA5German: 20106;
        /** IA5 国际参考版本 (IRV) */
        IA5IRV: 20105;
        /** 与挪威语配合使用的 IA5 */
        IA5Norwegian: 20108;
        /** IA5（与瑞典语一起使用） */
        IA5Swedish: 20107;
        /** 与 Assamese 一起使用 (ISCII) 的信息交换的印度脚本代码 */
        ISCIIAssamese: 57006;
        /** 与孟加拉语一起使用的 ISCII */
        ISCIIBengali: 57003;
        /** 与 Devanagari 配合使用的 ISCII */
        ISCIIDevanagari: 57002;
        /** 与古吉拉特一起使用的 ISCII */
        ISCIIGujarati: 57010;
        /** 与 Kannada 一起使用的 ISCII */
        ISCIIKannada: 57008;
        /** 与马拉雅拉姆语配合使用的 ISCII */
        ISCIIMalayalam: 57009;
        /** 与 Odia (Oriya) 配合使用的 ISCII */
        ISCIIOriya: 57007;
        /** 与旁遮普语一起使用的 ISCII */
        ISCIIPunjabi: 57011;
        /** 与泰米尔语配合使用的 ISCII */
        ISCIITamil: 57004;
        /** 用于泰卢固语的 ISCII */
        ISCIITelugu: 57005;
        /** 与简体中文配合使用的 ISO 2022-CN 编码 */
        ISO2022CNSimplifiedChinese: 50229;
        /** 用于繁体中文的 ISO 2022-CN 编码 */
        ISO2022CNTraditionalChinese: 50227;
        /** ISO 2022-JP */
        ISO2022JPJISX02011989: 50222;
        /** ISO 2022-JP */
        ISO2022JPJISX02021984: 50221;
        /** 没有半角片假名的 ISO 2022-JP */
        ISO2022JPNoHalfwidthKatakana: 50220;
        /** ISO 2022-KR */
        ISO2022KR: 50225;
        /** ISO 6937 非间距着色 */
        ISO6937NonSpacingAccent: 20269;
        /** 带拉丁语 9 的 ISO 8859-15 */
        ISO885915Latin9: 28605;
        /** ISO 8859-1 拉丁语 1 */
        ISO88591Latin1: 28591;
        /** ISO 8859-2 中欧 */
        ISO88592CentralEurope: 28592;
        /** ISO 8859-3 拉丁语 3 */
        ISO88593Latin3: 28593;
        /** ISO 8859-4 波罗的海 */
        ISO88594Baltic: 28594;
        /** ISO 8859-5 西里尔文 */
        ISO88595Cyrillic: 28595;
        /** ISA 8859-6 阿拉伯语 */
        ISO88596Arabic: 28596;
        /** ISO 8859-7 希腊语 */
        ISO88597Greek: 28597;
        /** ISO 8859-8 希伯来语 */
        ISO88598Hebrew: 28598;
        /** ISO 8859-8 希伯来语 (逻辑) */
        ISO88598HebrewLogical: 38598;
        /** ISO 8859-9 土耳其语 */
        ISO88599Turkish: 28599;
        /** Web 浏览器自动检测要使用的日语编码类型。 */
        JapaneseAutoDetect: 50932;
        /** 日语(Shift-JIS) */
        JapaneseShiftJIS: 932;
        /** KOI8-R */
        KOI8R: 20866;
        /** K0I8-U */
        KOI8U: 21866;
        /** 朝鲜语 */
        Korean: 949;
        /** Web 浏览器自动检测要使用的朝鲜语编码类型。 */
        KoreanAutoDetect: 50949;
        /** 韩国 (乔哈布) */
        KoreanJohab: 1361;
        /** Macintosh 阿拉伯语 */
        MacArabic: 10004;
        /** Macintosh（克罗地亚） */
        MacCroatia: 10082;
        /** 麦金托什西里尔文 */
        MacCyrillic: 10007;
        /** Macintosh 希腊语 */
        MacGreek1: 10006;
        /** Macintosh 希伯来语 */
        MacHebrew: 10005;
        /** Macintosh 冰岛语 */
        MacIcelandic: 10079;
        /** Macintosh 日语 */
        MacJapanese: 10001;
        /** Macintosh 朝鲜语 */
        MacKorean: 10003;
        /** Macintosh Latin 2 */
        MacLatin2: 10029;
        /** Macintosh Roman */
        MacRoman: 10000;
        /** Macintosh 罗马尼亚语 */
        MacRomania: 10010;
        /** Macintosh 简体中文 (GB 2312) */
        MacSimplifiedChineseGB2312: 10008;
        /** 麦金托什繁体中文 (五大) */
        MacTraditionalChineseBig5: 10002;
        /** Macintosh 土耳其语 */
        MacTurkish: 10081;
        /** Macintosh 乌克兰语 */
        MacUkraine: 10017;
        /** 与阿拉伯语一起使用的 OEM */
        OEMArabic: 864;
        /** 与波罗的海一起使用的 OEM */
        OEMBaltic: 775;
        /** 与加拿大法语配合使用的 OEM */
        OEMCanadianFrench: 863;
        /** 与西里尔文一起使用的 OEM */
        OEMCyrillic: 855;
        /** 与西里尔文 II 一起使用的 OEM */
        OEMCyrillicII: 866;
        /** 与希腊文 437G 配合使用的 OEM */
        OEMGreek437G: 737;
        /** 与希伯来语一起使用的 OEM */
        OEMHebrew: 862;
        /** 与冰岛一起使用的 OEM */
        OEMIcelandic: 861;
        /** 与现代希腊语一起使用的 OEM */
        OEMModernGreek: 869;
        /** 与多语言拉丁语 I 配合使用的 OEM */
        OEMMultilingualLatinI: 850;
        /** 用于多语言拉丁语 II 的 OEM */
        OEMMultilingualLatinII: 852;
        /** 与北欧语言一起使用的 OEM */
        OEMNordic: 865;
        /** 与葡萄牙语一起使用的 OEM */
        OEMPortuguese: 860;
        /** 用于土耳其语的 OEM */
        OEMTurkish: 857;
        /** 美国中使用的 OEM */
        OEMUnitedStates: 437;
        /** Web 浏览器自动检测要使用的简体中文编码类型。 */
        SimplifiedChineseAutoDetect: 50936;
        /** 简体中文 GB 18030 */
        SimplifiedChineseGB18030: 54936;
        /** 简体中文 GBK */
        SimplifiedChineseGBK: 936;
        /** T61 */
        T61: 20261;
        /** 台湾 CNS */
        TaiwanCNS: 20000;
        /** 台湾 Eten */
        TaiwanEten: 20002;
        /** 台湾 IBM 5550 */
        TaiwanIBM5550: 20003;
        /** 台湾 TCA */
        TaiwanTCA: 20001;
        /** 台湾电报 */
        TaiwanTeleText: 20004;
        /** 台湾 王 */
        TaiwanWang: 20005;
        /** 泰语 */
        Thai: 874;
        /** Web 浏览器自动检测要使用的繁体中文编码类型。 */
        TraditionalChineseAutoDetect: 50950;
        /** 繁体中文大 5 */
        TraditionalChineseBig5: 950;
        /** 土耳其语 */
        Turkish: 1254;
        /** Unicode big endian */
        UnicodeBigEndian: 1201;
        /** Unicode little endian */
        UnicodeLittleEndian: 1200;
        /** 美国 ASCII */
        USASCII: 20127;
        /** UTF-7 编码 */
        UTF7: 65000;
        /** UTF-8 编码 */
        UTF8: 65001;
        /** 越南语 */
        Vietnamese: 1258;
        /** 西方 */
        Western: 1252;
    };
    /**
     * 指定如何使用 FollowHyperlink 方法的 ExtraInfo 参数中指定的值。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/office.msoextrainfomethod)
     * @see {@link Kso.KsoMsoExtraInfoMethod}
     */
    readonly ExtraInfoMethod: {
        /** ExtraInfo 参数中指定的值是追加到地址的字符串。 */
        Get: 0;
        /** ExtraInfo 参数中指定的值作为字符串或字节数组发布。 */
        Post: 1;
    };
    /**
     * 指定延伸区域的颜色是否基于原图形的填充（延伸区域的正面），并随着图形填充的改变而自动改变，或者延伸区域的颜色是否与图形填充无关。 与 ThreeDFormat 对象的 ExtrusionColorType 属性一起使用。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/office.msoextrusioncolortype)
     * @see {@link Kso.KsoMsoExtrusionColorType}
     */
    readonly ExtrusionColorType: {
        /** 延伸颜色基于图形填充。 */
        Automatic: 1;
        /** 延伸颜色独立于图形填充。 */
        Custom: 2;
        /** 只返回值，表示其他状态的组合。 */
        TypeMixed: -2;
    };
    /**
     * 指定应用程序如何处理对需要尚未安装的功能的方法和属性的调用。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/office.msofeatureinstall)
     * @see {@link Kso.KsoMsoFeatureInstall}
     */
    readonly FeatureInstall: {
        /** 如果调用了未安装的功能，则在运行时生成一般的自动化错误。 */
        None: 0;
        /** 提示用户安装新功能。 */
        OnDemand: 1;
        /** 在安装时显示进度表；但不提示用户安装新功能。 */
        OnDemandWithUI: 2;
    };
    /**
     * 指定 FileDialog 对象的类型。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/office.msofiledialogtype)
     * @see {@link Kso.KsoMsoFileDialogType}
     */
    readonly FileDialogType: {
        /** “文件选取器 ”对话框。 */
        FilePicker: 3;
        /** “文件夹选取器 ”对话框。 */
        FolderPicker: 4;
        /** “打开”对话框。 */
        Open: 1;
        /** “另存为”对话框。 */
        SaveAs: 2;
    };
    /**
     * 指定在文件对话框中为用户显示的视图。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/office.msofiledialogview)
     * @see {@link Kso.KsoMsoFileDialogView}
     */
    readonly FileDialogView: {
        /** 文件以带有详细信息的列表形式显示。 */
        Details: 2;
        /** 文件显示为大图标。 */
        LargeIcons: 6;
        /** 文件以不带详细信息的列表形式显示。 */
        List: 1;
        /** 文件以列表形式显示，并在预览窗格中显示选定的文件。 */
        Preview: 4;
        /** 文件以列表形式显示，并在一个窗格中显示选定文件的属性。 */
        Properties: 3;
        /** 文件显示为小图标。 */
        SmallIcons: 7;
        /** 文件显示为缩略图。 */
        Thumbnail: 5;
        /** 文件显示为平铺图标。 */
        Tiles: 9;
        /** Web 视图中显示的文件。 */
        WebView: 8;
    };
    /**
     * 指定当用户单击任务窗格中的项时要执行的操作。 与 NewFile 对象的 Add 方法一起使用。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/office.msofilenewaction)
     * @see {@link Kso.KsoMsoFileNewAction}
     */
    readonly FileNewAction: {
        /** 新建文件。 */
        CreateNewFile: 1;
        /** 编辑文件。 */
        EditFile: 0;
        /** 打开文件。 */
        OpenFile: 2;
    };
    /**
     * 指定要向其中添加文件或文件引用所在的任务窗格部分。 与 NewFile 对象的 Add 方法和 Remove 方法一起使用。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/office.msofilenewsection)
     * @see {@link Kso.KsoMsoFileNewSection}
     */
    readonly FileNewSection: {
        /** 底部 部分 */
        BottomSection: 4;
        /** 新建 分区 */
        New: 1;
        /** “从现有文件新建” 部分 */
        NewfromExistingFile: 2;
        /** “从模板新建” 部分 */
        NewfromTemplate: 3;
        /** 打开“文档” 部分 */
        OpenDocument: 0;
    };
    /**
     * 指定文件验证模式。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/office.msofilevalidationmode)
     * @see {@link Kso.KsoMsoFileValidationMode}
     */
    readonly FileValidationMode: {
        /** 验证文件（默认）。 */
        Default: 0;
        /** 不验证文件。 */
        Skip: 1;
    };
    /**
     * 指定形状的填充类型。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/office.msofilltype)
     * @see {@link Kso.KsoMsoFillType}
     */
    readonly FillType: {
        /** 填充与背景相同。 */
        Background: 5;
        /** 渐变填充 */
        Gradient: 3;
        /** 混合填充 */
        Mixed: -2;
        /** 图案填充 */
        Patterned: 2;
        /** 图片填充 */
        Picture: 6;
        /** 实心填充 */
        Solid: 1;
        /** 纹理填充 */
        Textured: 4;
    };
    /**
     * 指定如何比较 ODSOFilter 对象的 Column 和 CompareTo 属性。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/office.msofiltercomparison)
     * @see {@link Kso.KsoMsoFilterComparison}
     */
    readonly FilterComparison: {
        /** 如果 CompareTo 字符串的任意部分包含在列值中，则列与 CompareTo 匹配。 */
        Contains: 8;
        /** 如果 CompareTo 值与列值相同，则列与 CompareTo 匹配。 */
        Equal: 0;
        /** 如果列值大于 CompareTo 值，则列与 CompareTo 匹配。 */
        GreaterThan: 3;
        /** 如果列值大于或等于 CompareTo 值，则列与 CompareTo 匹配。 */
        GreaterThanEqual: 5;
        /** 如果列为空，则列通过筛选。 */
        IsBlank: 6;
        /** 如果列为空，则列通过筛选。 */
        IsNotBlank: 7;
        /** 如果列值小于 CompareTo 值，则列与 CompareTo 匹配。 */
        LessThan: 2;
        /** 如果列值小于或等于 CompareTo 值，则列与 CompareTo 匹配。 */
        LessThanEqual: 4;
        /** 如果 CompareTo 字符串的任何部分都未包含在列值中，则列与 CompareTo 匹配。 */
        NotContains: 9;
        /** 如果 CompareTo 值不等于列值，则列与 CompareTo 匹配。 */
        NotEqual: 1;
    };
    /**
     * 指定一个筛选条件与其他筛选条件相关联的方式。 与 ODSOFilters 对象的 Conjunction 属性以及 MailMergeFilters 对象的 Add 方法一起使用。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/office.msofilterconjunction)
     * @see {@link Kso.KsoMsoFilterConjunction}
     */
    readonly FilterConjunction: {
        /** 和连词 */
        And: 0;
        /** 或连词 */
        Or: 1;
    };
    /**
     * 指定形状应水平翻转还是应垂直翻转。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/office.msoflipcmd)
     * @see {@link Kso.KsoMsoFlipCmd}
     */
    readonly FlipCmd: {
        /** 水平翻转。 */
        Horizontal: 0;
        /** 垂直翻转。 */
        Vertical: 1;
    };
    /**
     * 表示 ThemeFonts 集合中包含的三种语言字体之一。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/office.msofontlanguageindex)
     * @see {@link Kso.KsoMsoFontLanguageIndex}
     */
    readonly FontLanguageIndex: {
        /** 代表复杂文种语言的字体。 复杂脚本语言集合支持阿拉伯语、格鲁吉亚语、希伯来语、印度语、泰国语和越南语字母。 */
        ComplexScript: 2;
        /** 代表东亚字体。 东亚语言包括简体中文、繁体中文、日语和朝鲜语。 */
        EastAsian: 3;
        /** 代表西文字体。 */
        Latin: 1;
    };
    /**
     * 指定用于形状填充的渐变类型。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/office.msogradientcolortype)
     * @see {@link Kso.KsoMsoGradientColorType}
     */
    readonly GradientColorType: {
        /** 混合渐变 */
        ColorMixed: -2;
        /** 两种以上的颜色 */
        MultiColor: 4;
        /** 单色渐变 */
        OneColor: 1;
        /** 根据 MsoPresetGradientType 常量定义的集的内置渐变设置渐变颜色。 */
        PresetColors: 3;
        /** 双色渐变 */
        TwoColors: 2;
    };
    /**
     * 指定渐变填充的样式。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/office.msogradientstyle)
     * @see {@link Kso.KsoMsoGradientStyle}
     */
    readonly GradientStyle: {
        /** 从一个顶角到另一侧底角的对角渐变。 */
        DiagonalDown: 4;
        /** 从一个底角到另一侧顶角的对角渐变。 */
        DiagonalUp: 3;
        /** 从中心到各个角的渐变。 */
        FromCenter: 7;
        /** 从一个角到其他三个角的渐变。 */
        FromCorner: 5;
        /** 从标题向外的渐变。 */
        FromTitle: 6;
        /** 水平经过图形的渐变。 */
        Horizontal: 1;
        /** 渐变是混和的。 */
        Mixed: -2;
        /** 垂直向下填充图形的渐变。 */
        Vertical: 2;
    };
    /**
     * 指定文本框架中文本的水平对齐方式。 与 TextFrame 对象的 HorizontalAnchor 属性一起使用。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/office.msohorizontalanchor)
     * @see {@link Kso.KsoMsoHorizontalAnchor}
     */
    readonly HorizontalAnchor: {
        /** 文本水平居中。 */
        AnchorCenter: 2;
        /** 不对齐。 */
        AnchorNone: 1;
        /** 只返回值，表示其他状态的组合。 */
        HorizontalAnchorMixed: -2;
    };
    /**
     * 指定超链接的类型。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/office.msohyperlinktype)
     * @see {@link Kso.KsoMsoHyperlinkType}
     */
    readonly HyperlinkType: {
        /** 超链接应用于内嵌形状。 仅用于 Microsoft Word。 */
        InlineShape: 2;
        /** 超链接应用于 Range 对象。 */
        Range: 0;
        /** 超链接应用于 Shape 对象。 */
        Shape: 1;
    };
    /**
     * 指定用于定义 IOD（按需安装）组的常量。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/overview/library-reference/msoiodgroup-enumeration-office)
     * @see {@link Kso.KsoMsoIodGroup}
     */
    readonly IodGroup: {
        /** PIA 组 */
        PIAs: 0;
        /** VSTO 3.5 托管组 */
        VSTOR35Mgd: 1;
        /** VSTO 4.0 托管组 */
        VSTOR40Mgd: 2;
    };
    /**
     * 指定语言标识符。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/office.msolanguageid)
     * @see {@link Kso.KsoMsoLanguageID}
     */
    readonly LanguageID: {
        /** 南非语 */
        Afrikaans: 1078;
        /** 阿尔巴尼亚语 */
        Albanian: 1052;
        /** 阿姆哈拉语 */
        Amharic: 1118;
        /** 阿拉伯语 */
        Arabic: 1025;
        /** 阿拉伯语（阿尔及利亚） */
        ArabicAlgeria: 5121;
        /** 阿拉伯语巴林语 */
        ArabicBahrain: 15361;
        /** 阿拉伯语（埃及） */
        ArabicEgypt: 3073;
        /** 伊拉克阿拉伯语 */
        ArabicIraq: 2049;
        /** 阿拉伯语约旦语 */
        ArabicJordan: 11265;
        /** 阿拉伯语（科威特语） */
        ArabicKuwait: 13313;
        /** 阿拉伯语（黎巴嫩） */
        ArabicLebanon: 12289;
        /** 阿拉伯语（利比亚语） */
        ArabicLibya: 4097;
        /** 摩洛哥阿拉伯语 */
        ArabicMorocco: 6145;
        /** 阿拉伯语（阿曼） */
        ArabicOman: 8193;
        /** 卡塔尔阿拉伯语 */
        ArabicQatar: 16385;
        /** 阿拉伯语叙利亚语 */
        ArabicSyria: 10241;
        /** 阿拉伯语（突尼斯） */
        ArabicTunisia: 7169;
        /** 阿拉伯语（阿联酋） */
        ArabicUAE: 14337;
        /** 阿拉伯语也门语 */
        ArabicYemen: 9217;
        /** 亚美尼亚语 */
        Armenian: 1067;
        /** 阿萨姆语 */
        Assamese: 1101;
        /** 阿塞拜疆西里尔语 */
        AzeriCyrillic: 2092;
        /** 阿塞拜疆拉丁语 */
        AzeriLatin: 1068;
        /** 巴斯克语(巴斯克语) */
        Basque: 1069;
        /** 比利时荷兰语 */
        BelgianDutch: 2067;
        /** 比利时法语 */
        BelgianFrench: 2060;
        /** 孟加拉语 */
        Bengali: 1093;
        /** 波斯尼亚语 */
        Bosnian: 4122;
        /** 波斯尼亚波斯尼亚黑塞哥维那西里尔语 */
        BosnianBosniaHerzegovinaCyrillic: 8218;
        /** 波斯尼亚波斯尼亚黑塞哥维那拉丁语 */
        BosnianBosniaHerzegovinaLatin: 5146;
        /** 葡萄牙语 (巴西) 语言 */
        BrazilianPortuguese: 1046;
        /** 保加利亚语 */
        Bulgarian: 1026;
        /** 缅甸语 */
        Burmese: 1109;
        /** 白俄罗斯语 */
        Byelorussian: 1059;
        /** 加泰罗尼亚语 */
        Catalan: 1027;
        /** 切罗基语 */
        Cherokee: 1116;
        /** 中文香港特别行政区语言 */
        ChineseHongKongSAR: 3076;
        /** 中文澳门特别行政区语言 */
        ChineseMacaoSAR: 5124;
        /** 中文（新加坡） */
        ChineseSingapore: 4100;
        /** 克罗地亚语 */
        Croatian: 1050;
        /** 捷克语 */
        Czech: 1029;
        /** 丹麦语 */
        Danish: 1030;
        /** 迪维希语 */
        Divehi: 1125;
        /** 荷兰语 */
        Dutch: 1043;
        /** Edo 语言 */
        Edo: 1126;
        /** 英语 AUS 语言 */
        EnglishAUS: 3081;
        /** 英语伯利兹语 */
        EnglishBelize: 10249;
        /** 英语（加拿大） */
        EnglishCanadian: 4105;
        /** 英语加勒比语言 */
        EnglishCaribbean: 9225;
        /** 英语（印度尼西亚语） */
        EnglishIndonesia: 14345;
        /** 英语爱尔兰语 */
        EnglishIreland: 6153;
        /** 牙买加英语 */
        EnglishJamaica: 8201;
        /** 英语 NewZealand 语言 */
        EnglishNewZealand: 5129;
        /** 英语菲律宾语 */
        EnglishPhilippines: 13321;
        /** 英语南非语 */
        EnglishSouthAfrica: 7177;
        /** 英语特立尼达和多巴哥语言 */
        EnglishTrinidadTobago: 11273;
        /** 英语（英国） */
        EnglishUK: 2057;
        /** 美国英语 */
        EnglishUS: 1033;
        /** 英语津巴布韦语 */
        EnglishZimbabwe: 12297;
        /** 爱沙尼亚语 */
        Estonian: 1061;
        /** 法罗语 */
        Faeroese: 1080;
        /** 波斯语 */
        Farsi: 1065;
        /** 菲律宾语 */
        Filipino: 1124;
        /** 芬兰语 */
        Finnish: 1035;
        /** 法语 */
        French: 1036;
        /** 喀麦隆法语 */
        FrenchCameroon: 11276;
        /** 加拿大法语 */
        FrenchCanadian: 3084;
        /** 科特迪瓦法语 */
        FrenchCotedIvoire: 12300;
        /** 海地法语 */
        FrenchHaiti: 15372;
        /** 卢森堡法语 */
        FrenchLuxembourg: 5132;
        /** 马里法语 */
        FrenchMali: 13324;
        /** 法语摩纳哥语 */
        FrenchMonaco: 6156;
        /** 摩洛哥法语 */
        FrenchMorocco: 14348;
        /** 法语留尼汪语 */
        FrenchReunion: 8204;
        /** 法语塞内加尔语 */
        FrenchSenegal: 10252;
        /** 法语西印度语 */
        FrenchWestIndies: 7180;
        /** 刚果（金）法语 */
        FrenchCongoDRC: 9228;
        /** 弗里西亚语荷兰语 */
        FrisianNetherlands: 1122;
        /** Fulfulde 语言 */
        Fulfulde: 1127;
        /** 爱尔兰 (爱尔兰) 语言 */
        GaelicIreland: 2108;
        /** 苏格兰盖尔语 */
        GaelicScotland: 1084;
        /** 加利西亚语 */
        Galician: 1110;
        /** 格鲁吉亚语 */
        Georgian: 1079;
        /** 德语 */
        German: 1031;
        /** 德语（奥地利） */
        GermanAustria: 3079;
        /** 德语列支敦斯登语 */
        GermanLiechtenstein: 5127;
        /** 德语（卢森堡语） */
        GermanLuxembourg: 4103;
        /** 希腊语 */
        Greek: 1032;
        /** 瓜拉尼语 */
        Guarani: 1140;
        /** 古吉拉特语 */
        Gujarati: 1095;
        /** 豪萨语 */
        Hausa: 1128;
        /** 夏威夷语 */
        Hawaiian: 1141;
        /** 希伯来语 */
        Hebrew: 1037;
        /** 印地语 */
        Hindi: 1081;
        /** 匈牙利语 */
        Hungarian: 1038;
        /** 伊比比奥语言 */
        Ibibio: 1129;
        /** 冰岛语 */
        Icelandic: 1039;
        /** 伊博语 */
        Igbo: 1136;
        /** 印度尼西亚语 */
        Indonesian: 1057;
        /** Inuktitut 语言 */
        Inuktitut: 1117;
        /** 意大利语 */
        Italian: 1040;
        /** 日语 */
        Japanese: 1041;
        /** 卡纳达语 */
        Kannada: 1099;
        /** 卡努里语 */
        Kanuri: 1137;
        /** 克什米尔语 */
        Kashmiri: 1120;
        /** 克什米尔·德瓦纳加里语 */
        KashmiriDevanagari: 2144;
        /** 哈萨克语 */
        Kazakh: 1087;
        /** 高棉语 */
        Khmer: 1107;
        /** 吉尔吉斯语 */
        Kirghiz: 1088;
        /** 康卡尼语 */
        Konkani: 1111;
        /** 韩语 */
        Korean: 1042;
        /** 吉尔吉斯语 */
        Kyrgyz: 1088;
        /** 老挝语 */
        Lao: 1108;
        /** 拉丁语 */
        Latin: 1142;
        /** 拉脱维亚语 */
        Latvian: 1062;
        /** 立陶宛语 */
        Lithuanian: 1063;
        /** 马其顿语 */
        MacedonianFYROM: 1071;
        /** 马拉雅拉姆语 */
        Malayalam: 1100;
        /** 马来文莱达鲁萨兰语 */
        MalayBruneiDarussalam: 2110;
        /** 马来西亚语 */
        Malaysian: 1086;
        /** 马耳他语 */
        Maltese: 1082;
        /** 马尼普里语 */
        Manipuri: 1112;
        /** 毛利语 */
        Maori: 1153;
        /** 马拉地语 */
        Marathi: 1102;
        /** 墨西哥西班牙语 */
        MexicanSpanish: 2058;
        /** 混合语言 */
        Mixed: -2;
        /** 蒙古语 */
        Mongolian: 1104;
        /** 尼泊尔语 */
        Nepali: 1121;
        /** 未指定语言 */
        None: 0;
        /** 无校对 */
        NoProofing: 1024;
        /** 挪威语 Bokmol 语言 */
        NorwegianBokmol: 1044;
        /** 挪威语尼诺斯克语 */
        NorwegianNynorsk: 2068;
        /** Odia 语言 */
        Oriya: 1096;
        /** Oromo 语言 */
        Oromo: 1138;
        /** 普什图语 */
        Pashto: 1123;
        /** 波兰语 */
        Polish: 1045;
        /** 葡萄牙语 */
        Portuguese: 2070;
        /** 旁遮普语 */
        Punjabi: 1094;
        /** 克丘亚语（玻利维亚语） */
        QuechuaBolivia: 1131;
        /** 厄瓜多尔克丘亚语 */
        QuechuaEcuador: 2155;
        /** 克丘亚语（秘鲁语） */
        QuechuaPeru: 3179;
        /** Rhaeto 罗马语 */
        RhaetoRomanic: 1047;
        /** 罗马尼亚语 */
        Romanian: 1048;
        /** 罗马尼亚语摩尔多瓦语 */
        RomanianMoldova: 2072;
        /** 俄语 */
        Russian: 1049;
        /** 俄语摩尔多瓦语 */
        RussianMoldova: 2073;
        /** 萨米语拉普什语 */
        SamiLappish: 1083;
        /** 梵语 */
        Sanskrit: 1103;
        /** 塞佩迪语 */
        Sepedi: 1132;
        /** 塞尔维亚语波斯尼亚黑塞哥维那西里尔语 */
        SerbianBosniaHerzegovinaCyrillic: 7194;
        /** 塞尔维亚语波斯尼亚黑塞哥维那拉丁语 */
        SerbianBosniaHerzegovinaLatin: 6170;
        /** 塞尔维亚语西里尔语 */
        SerbianCyrillic: 3098;
        /** 塞尔维亚语拉丁语 */
        SerbianLatin: 2074;
        /** 塞索托语 */
        Sesotho: 1072;
        /** 简体中文 */
        SimplifiedChinese: 2052;
        /** 信德语 */
        Sindhi: 1113;
        /** 巴基斯坦信地语 */
        SindhiPakistan: 2137;
        /** 僧伽罗语 */
        Sinhalese: 1115;
        /** 斯洛伐克语 */
        Slovak: 1051;
        /** 斯洛文尼亚语 */
        Slovenian: 1060;
        /** 索马里语 */
        Somali: 1143;
        /** 索布语 */
        Sorbian: 1070;
        /** 西班牙语 */
        Spanish: 1034;
        /** 西班牙语（阿根廷） */
        SpanishArgentina: 11274;
        /** 西班牙语（玻利维亚语） */
        SpanishBolivia: 16394;
        /** 西班牙语（智利语言） */
        SpanishChile: 13322;
        /** 西班牙语（哥伦比亚语） */
        SpanishColombia: 9226;
        /** 西班牙语哥斯达黎加语 */
        SpanishCostaRica: 5130;
        /** 西班牙语多米尼加共和国语言 */
        SpanishDominicanRepublic: 7178;
        /** 西班牙语厄瓜多尔语言 */
        SpanishEcuador: 12298;
        /** 西班牙语萨尔瓦多语 */
        SpanishElSalvador: 17418;
        /** 西班牙语危地马拉语 */
        SpanishGuatemala: 4106;
        /** 西班牙语洪都拉斯语 */
        SpanishHonduras: 18442;
        /** 西班牙语现代排序语言 */
        SpanishModernSort: 3082;
        /** 西班牙语尼加拉瓜语 */
        SpanishNicaragua: 19466;
        /** 西班牙语巴拿马语 */
        SpanishPanama: 6154;
        /** 西班牙语巴拉圭语 */
        SpanishParaguay: 15370;
        /** 西班牙语秘鲁语 */
        SpanishPeru: 10250;
        /** 西班牙语波多黎各语 */
        SpanishPuertoRico: 20490;
        /** 西班牙语乌拉圭语 */
        SpanishUruguay: 14346;
        /** 西班牙语委内瑞拉语 */
        SpanishVenezuela: 8202;
        /** Sutu 语言 */
        Sutu: 1072;
        /** 斯瓦希里语 */
        Swahili: 1089;
        /** 瑞典语 */
        Swedish: 1053;
        /** 芬兰语（瑞典语） */
        SwedishFinland: 2077;
        /** 瑞士法语 */
        SwissFrench: 4108;
        /** 瑞士德语 */
        SwissGerman: 2055;
        /** 瑞士意大利语 */
        SwissItalian: 2064;
        /** 叙利亚语 */
        Syriac: 1114;
        /** 塔吉克语 */
        Tajik: 1064;
        /** Tamazight 语言 */
        Tamazight: 1119;
        /** Tamazight 拉丁语 */
        TamazightLatin: 2143;
        /** 泰米尔语 */
        Tamil: 1097;
        /** 塔塔尔语 */
        Tatar: 1092;
        /** 泰卢固语 */
        Telugu: 1098;
        /** 泰语 */
        Thai: 1054;
        /** 藏语 */
        Tibetan: 1105;
        /** 厄立特里亚语 */
        TigrignaEritrea: 2163;
        /** 提格里尼亚埃塞俄比亚文语言 */
        TigrignaEthiopic: 1139;
        /** 繁体中文 */
        TraditionalChinese: 1028;
        /** Tsonga 语言 */
        Tsonga: 1073;
        /** 茨瓦纳语 */
        Tswana: 1074;
        /** 土耳其语 */
        Turkish: 1055;
        /** 土库曼语 */
        Turkmen: 1090;
        /** 乌克兰语 */
        Ukrainian: 1058;
        /** 乌尔都语 */
        Urdu: 1056;
        /** 乌兹别克语西里尔语 */
        UzbekCyrillic: 2115;
        /** 乌兹别克语拉丁语 */
        UzbekLatin: 1091;
        /** 文达语言 */
        Venda: 1075;
        /** 越南语 */
        Vietnamese: 1066;
        /** 威尔士语 */
        Welsh: 1106;
        /** 科萨语 */
        Xhosa: 1076;
        /** 易语 */
        Yi: 1144;
        /** 意第绪语 */
        Yiddish: 1085;
        /** 约鲁巴语 */
        Yoruba: 1130;
        /** Zulu 语言 */
        Zulu: 1077;
        /**  */
        zongkhaBhutan: 2129;
    };
    /**
     * 指定对象的照明效果。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/office.msolightrigtype)
     * @see {@link Kso.KsoMsoLightRigType}
     */
    readonly LightRigType: {
        /** 指定 Balanced 效果。 */
        Balanced: 14;
        /** 指定 BrightRoom 效果。 */
        BrightRoom: 27;
        /** 指定 Chilly 效果。 */
        Chilly: 22;
        /** 指定 Contrasting 效果。 */
        Contrasting: 18;
        /** 指定 Flat 效果。 */
        Flat: 24;
        /** 指定 Flood 效果。 */
        Flood: 17;
        /** 指定 Freezing 效果。 */
        Freezing: 23;
        /** 指定 Glow 效果。 */
        Glow: 26;
        /** 指定 Harsh 效果。 */
        Harsh: 16;
        /** 指定 LegacyFlat1 效果。 */
        LegacyFlat1: 1;
        /** 指定 LegacyFlat2 效果。 */
        LegacyFlat2: 2;
        /** 指定 LegacyFlat3 效果。 */
        LegacyFlat3: 3;
        /** 指定 LegacyFlat4 效果。 */
        LegacyFlat4: 4;
        /** 指定 LegacyHarsh1 效果。 */
        LegacyHarsh1: 9;
        /** 指定 LegacyHarsh2 效果。 */
        LegacyHarsh2: 10;
        /** 指定 LegacyHarsh3 效果。 */
        LegacyHarsh3: 11;
        /** 指定 LegacyHarsh4 效果。 */
        LegacyHarsh4: 12;
        /** 指定 LegacyNormal1 效果。 */
        LegacyNormal1: 5;
        /** 指定 LegacyNormal2 效果。 */
        LegacyNormal2: 6;
        /** 指定 LegacyNormal3 效果。 */
        LegacyNormal3: 7;
        /** 指定 LegacyNormal4 效果。 */
        LegacyNormal4: 8;
        /** 指定 Mixed 效果。 */
        Mixed: -2;
        /** 指定 Morning 效果。 */
        Morning: 19;
        /** 指定 Soft 效果。 */
        Soft: 15;
        /** 指定 Sunrise 效果。 */
        Sunrise: 20;
        /** 指定 Sunset 效果。 */
        Sunset: 21;
        /** 指定 ThreePoint 效果。 */
        ThreePoint: 13;
        /** 指定 TwoPoint 效果。 */
        TwoPoint: 25;
    };
    /**
     * 指定线条上限的类型。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/overview/library-reference/msolinecapstyle-enumeration-office)
     * @see {@link Kso.KsoMsoLineCapStyle}
     */
    readonly LineCapStyle: {
        /** 指定平线帽。 */
        Flat: 3;
        /** 指定线条上限的混合。 */
        Mixed: -2;
        /** 指定圆角线上限。 */
        Round: 2;
        /** 指定一个平方-关闭线帽。 */
        Square: 1;
    };
    /**
     * 指定直线的虚线线型。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/office.msolinedashstyle)
     * @see {@link Kso.KsoMsoLineDashStyle}
     */
    readonly LineDashStyle: {
        /** 直线仅由短划线构成。 */
        Dash: 4;
        /** 直线是点划线图案。 */
        DashDot: 5;
        /** 直线是点点划线图案。 */
        DashDotDot: 6;
        /** 不支持。 */
        DashStyleMixed: -2;
        /** 直线由长划线构成。 */
        LongDash: 7;
        /**  */
        LongDashDotDot: 9;
        /**  */
        SysDash: 10;
        /**  */
        SysDot: 11;
        /**  */
        SysDashDot: 12;
        /** 直线是长点划线图案。 */
        LongDashDot: 8;
        /** 直线由圆点构成。 */
        RoundDot: 3;
        /** 直线是实线。 */
        Solid: 1;
        /** 直线由方点构成。 */
        SquareDot: 2;
    };
    /**
     * 指定线条的填充类型。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/overview/library-reference/msolinefilltype-enumeration-office)
     * @see {@link Kso.KsoMsoLineFillType}
     */
    readonly LineFillType: {
        /** 指定与背景相同的填充。 */
        Background: 5;
        /** 指定渐变线条填充。 */
        Gradient: 3;
        /** 指定线条填充类型的混合。 */
        Mixed: -2;
        /** 无行填充。 */
        None: 0;
        /** 指定图案线条填充。 */
        Patterned: 2;
        /** 指定图片线条填充。 */
        Picture: 6;
        /** 指定纯色线条填充。 */
        Solid: 1;
        /** 指定带纹理的线条填充。 */
        Textured: 4;
    };
    /**
     * 指定两条线连接的联接类型。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/overview/library-reference/msolinejoinstyle-enumeration-office)
     * @see {@link Kso.KsoMsoLineJoinStyle}
     */
    readonly LineJoinStyle: {
        /** 指定凹凸联接。 */
        Bevel: 2;
        /** 指定斜接联接。 */
        Miter: 3;
        /** 指定联接类型的混合。 */
        Mixed: -2;
        /** 指定舍入联接。 */
        Round: 1;
    };
    /**
     * 指定线型。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/office.msolinestyle)
     * @see {@link Kso.KsoMsoLineStyle}
     */
    readonly LineStyle: {
        /** 单线。 */
        Single: 1;
        /** 不支持。 */
        StyleMixed: -2;
        /** 粗线每一侧各带一条细线。 */
        ThickBetweenThin: 5;
        /** 粗线位于细线旁边。 对于水平线，粗线位于细线上方。 对于垂直线，粗线位于细线的左侧。 */
        ThickThin: 4;
        /** 粗线位于细线旁边。 对于水平线，粗线位于细线下方。 对于垂直线，粗线位于细线的右侧。 */
        ThinThick: 3;
        /** 双细线。 */
        ThinThin: 2;
    };
    /**
     * 指定 Microsoft Office 命令栏的动画样式。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/office.msomenuanimation)
     * @see {@link Kso.KsoMsoMenuAnimation}
     */
    readonly MenuAnimation: {
        /** 无动画 */
        None: 0;
        /** 随机动画 */
        Random: 1;
        /** 菜单滑入视图 */
        Slide: 3;
        /** 菜单展开到视图中 */
        Unfold: 2;
    };
    /**
     * 指定合并形状操作的输出。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/overview/library-reference/msomergecmd-enumeration-office)
     * @see {@link Kso.KsoMsoMergeCmd}
     */
    readonly MergeCmd: {
        /** 从所选形状创建新形状。 如果所选形状重叠，则会剪切或丢弃它们重叠的区域。 */
        Combine: 2;
        /** 将形状分解为较小的部分，或者通过相交线或重叠的形状创建新形状。 */
        Fragment: 5;
        /** 从所选形状重叠的区域形成新的封闭形状，从而消除非重叠区域。 */
        Intersect: 3;
        /** 通过从主选定内容中减去后续选定内容重叠的区域，创建新形状。 */
        Subtract: 4;
        /** 从两个或多个重叠形状的外围创建新形状。 新形状是原始形状中所有点的集合。 */
        Union: 1;
    };
    /**
     * 指定元数据属性类型。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/office.msometapropertytype)
     * @see {@link Kso.KsoMsoMetaPropertyType}
     */
    readonly MetaPropertyType: {
        /** 代表 Boolean 值。 */
        Boolean: 1;
        /** 代表计算值。 */
        Calculated: 3;
        /** 表示一个或多个选项中的值。 */
        Choice: 2;
        /** 代表计算值。 */
        Computed: 4;
        /** 代表 Currency 值。 */
        Currency: 5;
        /** 代表 DateTime 值。 */
        DateTime: 6;
        /** 表示用户写入的两个或更多选项中的值。 */
        FillInChoice: 7;
        /** 代表 GUID 值。 */
        Guid: 8;
        /** 代表 Integer 值。 */
        Integer: 9;
        /** 代表用于查阅其他值的值。 */
        Lookup: 10;
        /** 代表一个范围的最大值。 */
        Max: 22;
        /** 代表选项的集合。 */
        MultiChoice: 12;
        /** 代表需要用户写入值的选项的集合。 */
        MultiChoiceFillIn: 13;
        /** 表示用于查找另一个值的选项的集合。 */
        MultiChoiceLookup: 11;
        /** 代表一个或多个句子的值。 */
        Note: 14;
        /** 代表普通数字数据类型。 */
        Number: 15;
        /** 表示文本值。 */
        Text: 16;
        /** 代表未知值。 */
        Unknown: 0;
        /** 代表 URL。 */
        Url: 17;
        /** 表示用户的类别。 */
        User: 18;
        /**  */
        BusinessData: 20;
        /**  */
        BusinessDataSecondary: 21;
    };
    /**
     * 指定编号项目符号样式。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/office.msonumberedbulletstyle)
     * @see {@link Kso.KsoMsoNumberedBulletStyle}
     */
    readonly NumberedBulletStyle: {
        /** 带左右括号的小写字母项目符号。 */
        AlphaLCParenBoth: 8;
        /** 带右括号的小写字母项目符号。 */
        AlphaLCParenRight: 9;
        /** 带句点的小写字母项目符号。 */
        AlphaLCPeriod: 0;
        /** 带左右括号的大写字母项目符号。 */
        AlphaUCParenBoth: 10;
        /** 带右括号的大写字母项目符号。 */
        AlphaUCParenRight: 11;
        /** 带句点的大写字母项目符号。 */
        AlphaUCPeriod: 1;
        /** 带破折号的阿拉伯语 Abjad 项目符号。 */
        ArabicAbjadDash: 24;
        /** 带破折号的阿拉伯语字母项目符号。 */
        ArabicAlphaDash: 23;
        /** 带句点的阿拉伯语 DB 项目符号。 */
        ArabicDBPeriod: 29;
        /** 普通阿拉伯语 DB 项目符号。 */
        ArabicDBPlain: 28;
        /** 带左右括号的阿拉伯语项目符号。 */
        ArabicParenBoth: 12;
        /** 带右括号的阿拉伯语项目符号。 */
        ArabicParenRight: 2;
        /** 带句点的阿拉伯语项目符号。 */
        ArabicPeriod: 3;
        /** 普通阿拉伯语项目符号。 */
        ArabicPlain: 13;
        /** 带圈数字项目符号。 */
        CircleNumDBPlain: 18;
        /** 带圈数字 WD 黑色项目符号。 */
        CircleNumWDBlackPlain: 20;
        /** 带圈数字 WD 白色项目符号。 */
        CircleNumWDWhitePlain: 19;
        /** 带破折号的希伯来语字母项目符号。 */
        HebrewAlphaDash: 25;
        /** 带句点的印地语字母项目符号 1。 */
        HindiAlpha1Period: 40;
        /** 带句点的印地语字母项目符号。 */
        HindiAlphaPeriod: 36;
        /** 带右括号的印地语编号项目符号。 */
        HindiNumParenRight: 39;
        /** 带句点的印地语编号项目符号。 */
        HindiNumPeriod: 37;
        /** 带句点的韩语汉字项目符号。 */
        KanjiKoreanPeriod: 27;
        /** 韩语汉字项目符号。 */
        KanjiKoreanPlain: 26;
        /** 带句点的简体中文汉字项目符号。 */
        KanjiSimpChinDBPeriod: 38;
        /** 带左右括号的小写罗马字项目符号。 */
        RomanLCParenBoth: 4;
        /** 带右括号的小写罗马字项目符号。 */
        RomanLCParenRight: 5;
        /** 带句点的小写罗马字项目符号。 */
        RomanLCPeriod: 6;
        /** 带左右括号的大写罗马字项目符号。 */
        RomanUCParenBoth: 14;
        /** 带右括号的大写罗马字项目符号。 */
        RomanUCParenRight: 15;
        /** 带句点的大写罗马字项目符号。 */
        RomanUCPeriod: 7;
        /** 带句点的简体中文项目符号。 */
        SimpChinPeriod: 17;
        /** 简体中文项目符号。 */
        SimpChinPlain: 16;
        /** 只返回值，表示其他状态的组合。 */
        StyleMixed: -2;
        /** 带左右括号的泰语字母项目符号。 */
        ThaiAlphaParenBoth: 32;
        /** 带右括号的泰语字母项目符号。 */
        ThaiAlphaParenRight: 31;
        /** 带句点的泰语字母项目符号。 */
        ThaiAlphaPeriod: 30;
        /** 带左右括号的泰语数字项目符号。 */
        ThaiNumParenBoth: 35;
        /** 带右括号的泰语数字项目符号。 */
        ThaiNumParenRight: 34;
        /** 带句点的泰语数字项目符号。 */
        ThaiNumPeriod: 33;
        /** 带句点的繁体中文项目符号。 */
        TradChinPeriod: 22;
        /** 繁体中文项目符号。 */
        TradChinPlain: 21;
    };
    /**
     * 指定在合并 OLE 服务器的菜单组与 OLE 客户端的菜单组时（即，将一个容器应用程序类型的对象嵌入另一个应用程序中时），命令栏弹出式控件所属的菜单组。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/office.msoolemenugroup)
     * @see {@link Kso.KsoMsoOLEMenuGroup}
     */
    readonly OLEMenuGroup: {
        /** 容器 菜单 */
        Container: 2;
        /** “编辑 ”菜单 */
        Edit: 1;
        /** “文件 ”菜单 */
        File: 0;
        /** “帮助 ”菜单 */
        Help: 5;
        /** 不合并弹出式控件。 */
        None: -1;
        /** “对象 ”菜单 */
        Object: 3;
        /** 窗口 菜单 */
        Window: 4;
    };
    /**
     * 指示如何设置组织结构图中子节点的格式。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/office.msoorgchartlayouttype)
     * @see {@link Kso.KsoMsoOrgChartLayoutType}
     */
    readonly OrgChartLayoutType: {
        /** 将子节点垂直置于左右两边的父节点之下。 */
        BothHanging: 2;
        /** 将子节点垂直置于左边的父节点之下。 */
        LeftHanging: 3;
        /** 具有使用多个 MsoOrgChartLayoutType 格式化的子节点的父节点的返回值。 */
        Mixed: -2;
        /** 将子节点垂直置于右边的父节点之下。 */
        RightHanging: 4;
        /** 将子节点水平置于父节点之下。 */
        Standard: 1;
        /**  */
        LayoutDefault: 5;
    };
    /**
     * 指定组织结构图的方向。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/office.msoorgchartorientation)
     * @see {@link Kso.KsoMsoOrgChartOrientation}
     */
    readonly OrgChartOrientation: {
        /** 混合方向 */
        Mixed: -2;
        /** 垂直方向 */
        Vertical: 1;
    };
    /**
     * 指定对象在显示或打印时的方向。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/office.msoorientation)
     * @see {@link Kso.KsoMsoOrientation}
     */
    readonly Orientation: {
        /** 水平 (横向) 方向 */
        Horizontal: 1;
        /** 混合方向 */
        Mixed: -2;
        /** 垂直 (纵向) 方向 */
        Vertical: 2;
    };
    /**
     * 指定文本块的段落对齐方式。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/office.msoparagraphalignment)
     * @see {@link Kso.KsoMsoParagraphAlignment}
     */
    readonly ParagraphAlignment: {
        /** 指定每行文本的中心与文本框左右边距的中点对齐，但每行的左右边缘不对齐。 */
        Center: 1;
        /** 指定每行（最后一行除外）的第一个字符和最后一个字符分别与左右边距对齐，并通过在每个字符中增加或减去相同的量来填充行。 如果文本方向为从左向右，则段落的最后一行与左边距对齐；如果文本方向为从右向左，则与右边距对齐。 */
        Distribute: 4;
        /** 指定每行（最后一行除外）的第一个字符和最后一个字符分别与左右边距对齐，并通过增加或减少单词之间以及单词内部的间距来填充行。 如果文本方向为从左向右，则段落的最后一行与左边距对齐；如果文本方向为从右向左，则与右边距对齐。 */
        Justify: 3;
        /** 指定阿拉伯语文本中 kashida 长度的对齐或调整。 Kashida 是用来延长两个阿拉伯字符之间的连接符的特殊字符。 */
        JustifyLow: 7;
        /** 指定每行最左侧的字符与左边距对齐，但每行的右边缘不对齐。 这是从左向右文本方向段落的默认对齐方式。 */
        Left: 1;
        /** 使用对齐样式的组合。 */
        Mixed: -2;
        /** 指定每行最右侧的字符与右边距对齐，但每行的左边缘不对齐。 这是从右向左文本方向段落的默认对齐方式。 */
        Right: 2;
        /** 指定每行（最后一行除外）的第一个字符和最后一个字符分别与左右边距对齐，并通过增加或减少单词之间的间距（而非单词内部的间距）来填充行。 段落的最后一行与左边距对齐。 */
        ThaiDistribute: 5;
    };
    /**
     * 指定文件或文件夹路径的格式。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/office.msopathformat)
     * @see {@link Kso.KsoMsoPathFormat}
     */
    readonly PathFormat: {
        /** 代表 Type1 格式。 */
        1: 1;
        /** 代表 Type2 格式。 */
        2: 2;
        /** 代表 Type3 格式。 */
        3: 3;
        /** 代表 Type4 格式。 */
        4: 4;
        /** 代表混和格式。 */
        Mixed: -2;
        /** 代表无格式。 */
        None: 0;
    };
    /**
     * 指定形状中所使用的填充图案。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/office.msopatterntype)
     * @see {@link Kso.KsoMsoPatternType}
     */
    readonly PatternType: {
        /** 前景色的 10% */
        '10Percent': 2;
        /** 前景色的 20% */
        '20Percent': 3;
        /** 前景色的 25% */
        '25Percent': 4;
        /** 前景色的 30% */
        '30Percent': 5;
        /** 前景色的 40% */
        '40Percent': 6;
        /** 前景色的 50% */
        '50Percent': 7;
        /** 前景色的 5% */
        '5Percent': 1;
        /** 前景色的 60% */
        '60Percent': 8;
        /** 前景色的 70% */
        '70Percent': 9;
        /** 前景色的 75% */
        '75Percent': 10;
        /** 前景色的 80% */
        '80Percent': 11;
        /** 前景色的 90% */
        '90Percent': 12;
        /** 十字形 */
        Cross: 51;
        /** 深色下对角线 */
        DarkDownwardDiagonal: 15;
        /** 深色横线 */
        DarkHorizontal: 13;
        /** 深色上对角线 */
        DarkUpwardDiagonal: 16;
        /** 深色竖线 */
        DarkVertical: 14;
        /** 下对角虚线 */
        DashedDownwardDiagonal: 28;
        /** 横虚线 */
        DashedHorizontal: 32;
        /** 上对角虚线 */
        DashedUpwardDiagonal: 27;
        /** 竖虚线 */
        DashedVertical: 31;
        /** 对角砖形 */
        DiagonalBrick: 40;
        /** 对角十字 */
        DiagonalCross: 54;
        /** 草皮 */
        Divot: 46;
        /** 点式菱形 */
        DottedDiamond: 24;
        /** 虚线网格 */
        DottedGrid: 45;
        /** 下对角线 */
        DownwardDiagonal: 52;
        /** 水平 */
        Horizontal: 49;
        /** 横向砖形 */
        HorizontalBrick: 35;
        /** 大棋盘 */
        LargeCheckerBoard: 36;
        /** 大纸屑 */
        LargeConfetti: 33;
        /** 大网格 */
        LargeGrid: 34;
        /** 浅色下对角线 */
        LightDownwardDiagonal: 21;
        /** 浅色横线 */
        LightHorizontal: 19;
        /** 浅色上对角线 */
        LightUpwardDiagonal: 22;
        /** 浅色竖线 */
        LightVertical: 20;
        /** 混和图案 */
        Mixed: -2;
        /** 窄横线 */
        NarrowHorizontal: 30;
        /** 窄竖线 */
        NarrowVertical: 29;
        /** 轮廓式菱形 */
        OutlinedDiamond: 41;
        /** 格子 */
        Plaid: 42;
        /** 瓦 */
        Shingle: 47;
        /** 小棋盘 */
        SmallCheckerBoard: 17;
        /** 小纸屑 */
        SmallConfetti: 37;
        /** 小网格 */
        SmallGrid: 23;
        /** 实心菱形 */
        SolidDiamond: 39;
        /** 领域 */
        Sphere: 43;
        /** 网 格 */
        Trellis: 18;
        /** 上对角线 */
        UpwardDiagonal: 53;
        /** 垂直 */
        Vertical: 50;
        /** Wave */
        Wave: 48;
        /** 编织 */
        Weave: 44;
        /** 宽下对角线 */
        WideDownwardDiagonal: 25;
        /** 宽上对角线 */
        WideUpwardDiagonal: 26;
        /** 之字形 */
        ZigZag: 38;
    };
    /**
     * 指定文档的信息权限管理 (IRM) 权限类型。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/office.msopermission)
     * @see {@link Kso.KsoMsoPermission}
     */
    readonly Permission: {
        /** 更改权限 */
        Change: 15;
        /** 编辑权限 */
        Edit: 2;
        /** 提取权限 */
        Extract: 8;
        /** 完全控制权限 */
        FullControl: 64;
        /** 以编程方式访问对象模型的权限 */
        ObjModel: 32;
        /** 打印权限 */
        Print: 16;
        /** 读取权限 */
        Read: 1;
        /** 保存权限 */
        Save: 4;
        /** 查看权限 */
        View: 1;
        /**  */
        AllCommon: 127;
    };
    /**
     * 指定联系人选择器字段类型。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/office.msopickerfield)
     * @see {@link Kso.KsoMsoPickerField}
     */
    readonly PickerField: {
        /** 未知类型的字段 */
        Unknown: 0;
        /** DateTime 字段 */
        DateTime: 1;
        /** 数字字段 */
        Number: 2;
        /** 文本字段 */
        Text: 3;
        /** 用户或组字段 */
        User: 4;
        /** 枚举的 sentinel 值 */
        Max: 5;
    };
    /**
     * 指定应用于图片的颜色转换设置。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/office.msopicturecolortype)
     * @see {@link Kso.KsoMsoPictureColorType}
     */
    readonly PictureColorType: {
        /** 默认颜色转换 */
        Automatic: 1;
        /** 黑白转换 */
        BlackAndWhite: 3;
        /** 灰度转换 */
        Grayscale: 2;
        /** 混合转换 */
        Mixed: -2;
        /** 水印转换 */
        Watermark: 4;
    };
    /**
     * 指定图片插入文件中时是否压缩。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/overview/library-reference/msopicturecompress-enumeration-office)
     * @see {@link Kso.KsoMsoPictureCompress}
     */
    readonly PictureCompress: {
        /** 图片是否压缩，具体取决于文档的设置。 */
        DocDefault: -1;
        /** 图片未压缩。 */
        False: 0;
        /** 图片将被压缩。 */
        True: 1;
    };
    /**
     * 指定用于定义图片效果类型的常量。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/office.msopictureeffecttype)
     * @see {@link Kso.KsoMsoPictureEffectType}
     */
    readonly PictureEffectType: {
        /** 背景删除效果 */
        BackgroundRemoval: 1;
        /** 模糊效果 */
        Blur: 2;
        /** 亮度对比度效果 */
        BrightnessContrast: 3;
        /** 水泥效果 */
        Cement: 4;
        /** 粉笔草图效果 */
        ChalkSketch: 5;
        /** 色温效果 */
        ColorTemperature: 6;
        /** 交叉刻蚀效果 */
        CrisscrossEtching: 7;
        /** 剪切效果 */
        Cutout: 8;
        /** 胶片颗粒效果 */
        FilmGrain: 9;
        /** 玻璃效果 */
        Glass: 10;
        /** 漫射发光效果 */
        GlowDiffused: 11;
        /** 发光边缘效果 */
        GlowEdges: 12;
        /** 浅色屏幕效果 */
        LightScreen: 13;
        /** 线条绘制效果 */
        LineDrawing: 14;
        /** 标记效果 */
        Marker: 15;
        /** 马赛克气泡 */
        MosiaicBubbles: 16;
        /** 无效果 */
        None: 0;
        /** 画笔效果 */
        PaintBrush: 18;
        /** 画笔画效果 */
        PaintStrokes: 19;
        /** 平滑柔和效果 */
        PastelsSmooth: 20;
        /** 铅笔灰度效果 */
        PencilGrayscale: 21;
        /** 铅笔草图效果 */
        PencilSketch: 22;
        /** 影印效果 */
        Photocopy: 23;
        /** 饱和度效果 */
        Saturation: 24;
        /** 锐化软化效果 */
        SharpenSoften: 26;
        /** 纹理化器效果 */
        Texturizer: 27;
        /** 水彩海绵效果 */
        WatercolorSponge: 27;
    };
    /**
     * 指示由指定对象使用的效果照相机类型。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/office.msopresetcamera)
     * @see {@link Kso.KsoMsoPresetCamera}
     */
    readonly PresetCamera: {
        /** 指定等长底部朝下。 */
        CameraIsometricBottomDown: 23;
        /** 指定等长底部朝上。 */
        CameraIsometricBottomUp: 22;
        /** 指定等轴左下。 */
        CameraIsometricLeftDown: 25;
        /** 指定等轴左上。 */
        CameraIsometricLeftUp: 24;
        /** 指定等长 OffAxis1 朝左。 */
        CameraIsometricOffAxis1Left: 28;
        /** 指定等长 OffAxis1 朝右。 */
        CameraIsometricOffAxis1Right: 29;
        /** 指定等长 OffAxis1 朝上。 */
        CameraIsometricOffAxis1Top: 30;
        /** 指定等长 OffAxis2 朝左。 */
        CameraIsometricOffAxis2Left: 31;
        /** 指定等长 OffAxis2 朝右。 */
        CameraIsometricOffAxis2Right: 32;
        /** 指定等长 OffAxis2 朝上。 */
        CameraIsometricOffAxis2Top: 33;
        /** 指定等长 OffAxis3 朝下。 */
        CameraIsometricOffAxis3Bottom: 36;
        /** 指定等长 OffAxis3 朝左。 */
        CameraIsometricOffAxis3Left: 34;
        /** 指定等长 OffAxis3 朝右。 */
        CameraIsometricOffAxis3Right: 35;
        /** 指定等长 OffAxis4 朝下。 */
        CameraIsometricOffAxis4Bottom: 39;
        /** 指定等长 OffAxis4 朝左。 */
        CameraIsometricOffAxis4Left: 37;
        /** 指定等长 OffAxis4 朝右。 */
        CameraIsometricOffAxis4Right: 38;
        /** 指定等轴右上。 */
        CameraIsometricRightDown: 27;
        /** 指定等轴右上。 */
        CameraIsometricRightUp: 26;
        /** 指定等长顶部朝下。 */
        CameraIsometricTopDown: 21;
        /** 指定等长顶部朝上。 */
        CameraIsometricTopUp: 20;
        /** 指定旧式倾斜朝下。 */
        CameraLegacyObliqueBottom: 8;
        /** 指定旧式倾斜朝左下方。 */
        CameraLegacyObliqueBottomLeft: 7;
        /** 指定旧式倾斜朝右下方。 */
        CameraLegacyObliqueBottomRight: 9;
        /** 指定旧式倾斜朝前。 */
        CameraLegacyObliqueFront: 5;
        /** 指定旧式倾斜朝左。 */
        CameraLegacyObliqueLeft: 4;
        /** 指定旧式倾斜朝右。 */
        CameraLegacyObliqueRight: 6;
        /** 指定旧式倾斜朝上。 */
        CameraLegacyObliqueTop: 2;
        /** 指定旧式倾斜左上方。 */
        CameraLegacyObliqueTopLeft: 1;
        /** 指定旧式倾斜右上方。 */
        CameraLegacyObliqueTopRight: 3;
        /** 指定旧式下透视。 */
        CameraLegacyPerspectiveBottom: 17;
        /** 指定旧式左下透视。 */
        CameraLegacyPerspectiveBottomLeft: 16;
        /** 指定旧式右下透视。 */
        CameraLegacyPerspectiveBottomRight: 18;
        /** 指定旧式前透视。 */
        CameraLegacyPerspectiveFront: 14;
        /** 指定旧式左透视。 */
        CameraLegacyPerspectiveLeft: 13;
        /** 指定旧式右透视。 */
        CameraLegacyPerspectiveRight: 15;
        /** 指定旧式上透视。 */
        CameraLegacyPerspectiveTop: 11;
        /** 指定旧式左上透视。 */
        CameraLegacyPerspectiveTopLeft: 10;
        /** 指定旧式右上透视。 */
        CameraLegacyPerspectiveTopRight: 12;
        /** 指定倾斜朝下。 */
        CameraObliqueBottom: 46;
        /** 指定倾斜左下方。 */
        CameraObliqueBottomLeft: 45;
        /** 指定倾斜右下方。 */
        CameraObliqueBottomRight: 47;
        /** 指定倾斜朝左。 */
        CameraObliqueLeft: 43;
        /** 指定倾斜朝右。 */
        CameraObliqueRight: 44;
        /** 指定倾斜朝上。 */
        CameraObliqueTop: 41;
        /** 指定倾斜左上方。 */
        CameraObliqueTopLeft: 40;
        /** 指定倾斜右上方。 */
        CameraObliqueTopRight: 42;
        /** 指定正射影图朝前。 */
        CameraOrthographicFront: 19;
        /** 指定上透视。 */
        CameraPerspectiveAbove: 51;
        /** 指定左上透视。 */
        CameraPerspectiveAboveLeftFacing: 53;
        /** 指定右上透视。 */
        CameraPerspectiveAboveRightFacing: 54;
        /** 指定下透视。 */
        CameraPerspectiveBelow: 52;
        /** 指定左向对比透视。 */
        CameraPerspectiveContrastingLeftFacing: 55;
        /** 指定右向对比透视。 */
        CameraPerspectiveContrastingRightFacing: 56;
        /** 指定前透视。 */
        CameraPerspectiveFront: 48;
        /** 指定极左极大透视。 */
        CameraPerspectiveHeroicExtremeLeftFacing: 59;
        /** 指定极右极大透视。 */
        CameraPerspectiveHeroicExtremeRightFacing: 60;
        /** 指定左向极大透视。 */
        CameraPerspectiveHeroicLeftFacing: 57;
        /** 指定右向极大透视。 */
        CameraPerspectiveHeroicRightFacing: 58;
        /** 指定左透视。 */
        CameraPerspectiveLeft: 49;
        /** 指定宽松透视。 */
        CameraPerspectiveRelaxed: 61;
        /** 指定适度宽松透视。 */
        CameraPerspectiveRelaxedModerately: 62;
        /** 指定右透视。 */
        CameraPerspectiveRight: 50;
        /** 指定混和效果。 */
        PresetCameraMixed: -2;
    };
    /**
     * 指定延伸经过的路径偏离延伸形状（延伸的正面）的方向。 与 ThreeDFormat 对象的 PresetExtrusionDirection 属性一起使用。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/office.msopresetextrusiondirection)
     * @see {@link Kso.KsoMsoPresetExtrusionDirection}
     */
    readonly PresetExtrusionDirection: {
        /** 下半部分 */
        ExtrusionBottom: 2;
        /** 左下角 */
        ExtrusionBottomLeft: 3;
        /** 右下角 */
        ExtrusionBottomRight: 1;
        /** Left */
        ExtrusionLeft: 6;
        /** 无延伸 */
        ExtrusionNone: 5;
        /** Right */
        ExtrusionRight: 4;
        /** 上部 */
        ExtrusionTop: 8;
        /** 左上角 */
        ExtrusionTopLeft: 9;
        /** 右上角 */
        ExtrusionTopRight: 7;
        /** 只返回值，表示其他状态的组合。 */
        PresetExtrusionDirectionMixed: -2;
    };
    /**
     * 指定使用哪种预定义渐变填充形状。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/office.msopresetgradienttype)
     * @see {@link Kso.KsoMsoPresetGradientType}
     */
    readonly PresetGradientType: {
        /** 铜质渐变 */
        GradientBrass: 20;
        /** 平静水梯度 */
        GradientCalmWater: 8;
        /** Chrome 渐变 */
        GradientChrome: 21;
        /** Chrome II 渐变 */
        GradientChromeII: 22;
        /** 日分渐变 */
        GradientDaybreak: 4;
        /** 沙漠渐变 */
        GradientDesert: 6;
        /** 早期日落渐变 */
        GradientEarlySunset: 1;
        /** 激发渐变 */
        GradientFire: 9;
        /** 雾渐变 */
        GradientFog: 10;
        /** 金色渐变 */
        GradientGold: 18;
        /** Gold II 渐变 */
        GradientGoldII: 19;
        /** 地平线渐变 */
        GradientHorizon: 5;
        /** 晚日落渐变 */
        GradientLateSunset: 2;
        /** 桃花心木渐变 */
        GradientMahogany: 15;
        /** Moss 渐变 */
        GradientMoss: 11;
        /** 夜幕降临渐变 */
        GradientNightfall: 3;
        /** 海洋渐变 */
        GradientOcean: 7;
        /** 羊皮纸渐变 */
        GradientParchment: 14;
        /** 孔雀渐变 */
        GradientPeacock: 12;
        /** 彩虹渐变 */
        GradientRainbow: 16;
        /** 彩虹 II 渐变 */
        GradientRainbowII: 17;
        /** 蓝宝石渐变 */
        GradientSapphire: 24;
        /** 银色渐变 */
        GradientSilver: 23;
        /** 小麦梯度 */
        GradientWheat: 13;
        /** 混合渐变 */
        PresetGradientMixed: -2;
    };
    /**
     * 指定延伸（三维）形状上的光源相对于该形状的位置。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/office.msopresetlightingdirection)
     * @see {@link Kso.KsoMsoPresetLightingDirection}
     */
    readonly PresetLightingDirection: {
        /** 光源来自下方。 */
        LightingBottom: 8;
        /** 照明来自左下角。 */
        LightingBottomLeft: 7;
        /** 照明来自右下角。 */
        LightingBottomRight: 9;
        /** 光源来自左侧。 */
        LightingLeft: 4;
        /** 无光源。 */
        LightingNone: 5;
        /** 光源来自右侧。 */
        LightingRight: 6;
        /** 光源来自上方。 */
        LightingTop: 2;
        /** 照明来自左上角。 */
        LightingTopLeft: 1;
        /** 照明来自右上方。 */
        LightingTopRight: 3;
        /** 不支持。 */
        PresetLightingDirectionMixed: -2;
    };
    /**
     * 指定形状上所使用光的亮度。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/office.msopresetlightingsoftness)
     * @see {@link Kso.KsoMsoPresetLightingSoftness}
     */
    readonly PresetLightingSoftness: {
        /** 亮光 */
        LightingBright: 3;
        /** 暗光 */
        LightingDim: 1;
        /** 普通光线 */
        LightingNormal: 2;
        /** 不支持 */
        PresetLightingSoftnessMixed: -2;
    };
    /**
     * 指定延伸表面的材料。 与 ThreeDFormat 对象的 PresetMaterial 属性一起使用。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/office.msopresetmaterial)
     * @see {@link Kso.KsoMsoPresetMaterial}
     */
    readonly PresetMaterial: {
        /** Clear */
        MaterialClear: 13;
        /** DarkEdge */
        MaterialDarkEdge: 11;
        /** 平面 */
        MaterialFlat: 14;
        /** 磨 砂 */
        MaterialMatte: 1;
        /** Matte2 */
        MaterialMatte2: 5;
        /** 金属 */
        MaterialMetal: 3;
        /** Metal2 */
        MaterialMetal2: 7;
        /** 塑料 */
        MaterialPlastic: 2;
        /** 塑料 2 */
        MaterialPlastic2: 6;
        /** 粉 */
        MaterialPowder: 10;
        /** 柔边缘 */
        MaterialSoftEdge: 12;
        /** 柔化金属效果 */
        MaterialSoftMetal: 15;
        /** 半透明粉 */
        MaterialTranslucentPowder: 9;
        /** 暖色粗糙 */
        MaterialWarmMatte: 8;
        /** 线框 */
        MaterialWireFrame: 4;
        /** 混和材料 */
        PresetMaterialMixed: -2;
    };
    /**
     * 指定在 WordArt 对象上使用的文本效果。若要查看每种效果的预览，请参阅支持艺术字的任何 Microsoft Office 产品中的“艺术字库”对话框。 可读 常数的值对应于 艺术字库对话框 (从左到右，从上到下编号) 中列出的格式。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/office.msopresettexteffect)
     * @see {@link Kso.KsoMsoPresetTextEffect}
     */
    readonly PresetTextEffect: {
        /** 第一个文本效果 */
        1: 0;
        /** 第十个文本效果 */
        10: 9;
        /** 第 11 个文本效果 */
        11: 10;
        /** 第十二个文本效果 */
        12: 11;
        /** 第十三个文本效果 */
        13: 12;
        /** 第十四个文本效果 */
        14: 13;
        /** 第十五个文本效果 */
        15: 14;
        /** 第十六个文本效果 */
        16: 15;
        /** 第十七个文本效果 */
        17: 16;
        /** 第十八个文本效果 */
        18: 17;
        /** 第十九个文本效果 */
        19: 18;
        /** 第二个文本效果 */
        2: 1;
        /** 第 20 个文本效果 */
        20: 19;
        /** 第二十一个文本效果 */
        21: 20;
        /** 20 秒文本效果 */
        22: 21;
        /** 第二十三个文本效果 */
        23: 22;
        /** 第二十四个文本效果 */
        24: 23;
        /** 第二十五个文本效果 */
        25: 24;
        /** 第二十六个文本效果 */
        26: 25;
        /** 第二十七个文本效果 */
        27: 26;
        /** 第 28 个文本效果 */
        28: 27;
        /** 第 29 个文本效果 */
        29: 28;
        /** 第三个文本效果 */
        3: 2;
        /** 第三十个文本效果 */
        30: 29;
        /** 第 301 个文本效果 */
        31: 30;
        /** 30 秒文本效果 */
        32: 31;
        /** 第三十三个文本效果 */
        33: 32;
        /** 第三十四个文本效果 */
        34: 33;
        /** 第三十五个文本效果 */
        35: 34;
        /** 第 36 个文本效果 */
        36: 35;
        /** 第三十七个文本效果 */
        37: 36;
        /** 第三十八个文本效果 */
        38: 37;
        /** 第 39 个文本效果 */
        39: 38;
        /** 第四个文本效果 */
        4: 3;
        /** 第四十个文本效果 */
        40: 39;
        /** 第四十一个文本效果 */
        41: 40;
        /** 40 秒文本效果 */
        42: 41;
        /** 第四十三个文本效果 */
        43: 42;
        /** 第四十四个文本效果 */
        44: 43;
        /** 第四十五个文本效果 */
        45: 44;
        /** 第四十六个文本效果 */
        46: 45;
        /** 第四十七个文本效果 */
        47: 46;
        /** 第四十八个文本效果 */
        48: 47;
        /** 第四十九个文本效果 */
        49: 48;
        /** 第五个文本效果 */
        5: 4;
        /** 第五十个文本效果 */
        50: 49;
        /** 第六个文本效果 */
        6: 5;
        /** 第七个文本效果 */
        7: 6;
        /** 第八个文本效果 */
        8: 7;
        /** 第九个文本效果 */
        9: 8;
        /** 未使用 */
        Mixed: -2;
    };
    /**
     * 指定艺术字文本的形状。可以通过选择艺术字工具栏上的艺术字形状来查看每个文本效果形状的预览。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/office.msopresettexteffectshape)
     * @see {@link Kso.KsoMsoPresetTextEffectShape}
     */
    readonly PresetTextEffectShape: {
        /** 文本是下凸弧。 */
        ArchDownCurve: 10;
        /** 文本是向下弯曲的 3D 拱形。 */
        ArchDownPour: 14;
        /** 文本是上凸弧。 */
        ArchUpCurve: 9;
        /** 文本是向上弯曲的 3D 拱形。 */
        ArchUpPour: 13;
        /** 文本围绕一个中心“按钮”弯曲。 */
        ButtonCurve: 12;
        /** 文本以 3D 格式显示，围绕中心“按钮”弯曲。 */
        ButtonPour: 16;
        /** 文本伸展以填充形状的高度，只带有轻微下凸。 */
        CanDown: 20;
        /** 文本伸展以填充形状的高度，只带有轻微上凸。 */
        CanUp: 19;
        /** 文本向上倾斜至右侧，同时字体减小。 */
        CascadeDown: 40;
        /** 文本向下倾斜至右侧，同时字体增大。 */
        CascadeUp: 39;
        /** 文本向上倾斜至中心点，然后向下倾斜。 */
        ChevronDown: 6;
        /** 文本向下倾斜至中心点，然后向上倾斜。 */
        ChevronUp: 5;
        /** 文本呈圆形，顺时针方向。 */
        CircleCurve: 11;
        /** 文本具有 3D 效果，并遵循圆圈，顺时针阅读。 */
        CirclePour: 15;
        /** 文本下凸，向右延伸时字体减小。 */
        CurveDown: 18;
        /** 文本下凸，向右延伸时字体变大。 */
        CurveUp: 17;
        /** 字体减小至文本的中点，然后增大至起始大小。 */
        Deflate: 26;
        /** 字体减小至文本的中点，然后增大至起始大小，同时保持文本顶部在同一曲线上。 */
        DeflateBottom: 28;
        /** 字体增大至文本的中点，然后减小至起始大小。 */
        DeflateInflate: 31;
        /** 文本的字体减小、增大并再次减小。 */
        DeflateInflateDeflate: 32;
        /** 字体减小至文本的中点，然后增大至起始大小，同时保持文本底部在同一曲线上。 */
        DeflateTop: 30;
        /** 文本沿着一条线上凸、下凸、然后再次上凸和下凸。 */
        DoubleWave1: 23;
        /** 文本沿着一条线下凸、上凸、然后再次下凸和上凸。 */
        DoubleWave2: 24;
        /** 文本顶部的显示位置比文本底部更靠近查看器。 */
        FadeDown: 36;
        /** 文本左侧的显示位置比文本右侧更靠近查看器。 */
        FadeLeft: 34;
        /** 文本右侧的显示位置比文本左侧更靠近查看器。 */
        FadeRight: 33;
        /** 文本底部的显示位置比文本顶部更靠近查看器。 */
        FadeUp: 35;
        /** 文本的字体增大至其中点，然后减小。 每个字母的中点不在一条直线上。 */
        Inflate: 25;
        /** 文本的字体增大至其中点，然后减小。 每个字母的中点在一条下凸弧上。 */
        InflateBottom: 27;
        /** 文本的字体增大至其中点，然后减小。 每个字母的中点在一条上凸弧上。 */
        InflateTop: 29;
        /** 未使用。 */
        Mixed: -2;
        /** 不应用形状。 */
        PlainText: 1;
        /** 文本似乎是在 3D 环内写入的。 */
        RingInside: 7;
        /** 文本似乎写在 3D 环外。 */
        RingOutside: 8;
        /** 文本向下倾斜至右侧。 */
        SlantDown: 38;
        /** 文本向上倾斜至右侧。 */
        SlantUp: 37;
        /** 文本构成停止标志的形状。 */
        Stop: 2;
        /** 文本向上倾斜，然后向下倾斜。 */
        TriangleDown: 4;
        /** 文本向下倾斜，然后向上倾斜。 */
        TriangleUp: 3;
        /** 文本沿波浪形向上，然后向下并再次向上。 */
        Wave1: 21;
        /** 文本沿波浪形向下，然后向上并再次向下。 */
        Wave2: 22;
    };
    /**
     * 指定用于填充形状的纹理。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/office.msopresettexture)
     * @see {@link Kso.KsoMsoPresetTexture}
     */
    readonly PresetTexture: {
        /** 未使用 */
        PresetTextureMixed: -2;
        /** 蓝色纸巾纹理 */
        TextureBlueTissuePaper: 17;
        /** 花束纹理 */
        TextureBouquet: 20;
        /** 棕色大理石纹理 */
        TextureBrownMarble: 11;
        /** 画布纹理 */
        TextureCanvas: 2;
        /** 软木塞纹理 */
        TextureCork: 21;
        /** 牛仔纹理 */
        TextureDenim: 3;
        /** 鱼化石纹理 */
        TextureFishFossil: 7;
        /** 花岗岩纹理 */
        TextureGranite: 12;
        /** 绿色大理石纹理 */
        TextureGreenMarble: 9;
        /** 中等木材纹理 */
        TextureMediumWood: 24;
        /** 新闻纸纹理 */
        TextureNewsprint: 13;
        /** 橡木纹理 */
        TextureOak: 23;
        /** 纸袋纹理 */
        TexturePaperBag: 6;
        /** 纸莎草纹理 */
        TexturePapyrus: 1;
        /** 羊皮纸纹理 */
        TextureParchment: 15;
        /** 粉色纸巾纸纹理 */
        TexturePinkTissuePaper: 18;
        /** 紫色网格纹理 */
        TexturePurpleMesh: 19;
        /** 回收纸纹理 */
        TextureRecycledPaper: 14;
        /** 砂纹理 */
        TextureSand: 8;
        /** 信纸纹理 */
        TextureStationery: 16;
        /** 核桃纹理 */
        TextureWalnut: 22;
        /** 水滴纹理 */
        TextureWaterDroplets: 5;
        /** 白色大理石纹理 */
        TextureWhiteMarble: 10;
        /** 编织垫纹理 */
        TextureWovenMat: 4;
    };
    /**
     * 指定延伸 (三维) 格式。 MsoPresetThreeDFormat 常量按照 (从左到右、从上到下的顺序编号，) 它们显示在“格式”工具栏上的“3D 样式”按钮上。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/office.msopresetthreedformat)
     * @see {@link Kso.KsoMsoPresetThreeDFormat}
     */
    readonly PresetThreeDFormat: {
        /** 未使用 */
        PresetThreeDFormatMixed: -2;
        /** 第一个 3D 格式 */
        ThreeD1: 1;
        /** 第十个 3D 格式 */
        ThreeD10: 10;
        /** 第 11 个 3D 格式 */
        ThreeD11: 11;
        /** 第十二个 3D 格式 */
        ThreeD12: 12;
        /** 第 13 个 3D 格式 */
        ThreeD13: 13;
        /** 第十四个 3D 格式 */
        ThreeD14: 14;
        /** 第 15 个 3D 格式 */
        ThreeD15: 15;
        /** 第十六个 3D 格式 */
        ThreeD16: 16;
        /** 第十七个 3D 格式 */
        ThreeD17: 17;
        /** 第 18 个 3D 格式 */
        ThreeD18: 18;
        /** 第十九个 3D 格式 */
        ThreeD19: 19;
        /** 第二个 3D 格式 */
        ThreeD2: 2;
        /** 第 20 个 3D 格式 */
        ThreeD20: 20;
        /** 第三种 3D 格式 */
        ThreeD3: 3;
        /** 第四种 3D 格式 */
        ThreeD4: 4;
        /** 第五个 3D 格式 */
        ThreeD5: 5;
        /** 第六种 3D 格式 */
        ThreeD6: 6;
        /** 第七个 3D 格式 */
        ThreeD7: 7;
        /** 第八个 3D 格式 */
        ThreeD8: 8;
        /** 第九种 3D 格式 */
        ThreeD9: 9;
    };
    /**
     * 指定 ReflectionFormat 对象的类型。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/office.msoreflectiontype)
     * @see {@link Kso.KsoMsoReflectionType}
     */
    readonly ReflectionType: {
        /** 类型 1 */
        1: 1;
        /** 类型 2 */
        2: 2;
        /** 类型 3 */
        3: 3;
        /** 类型 4 */
        4: 4;
        /** 类型 5 */
        5: 5;
        /** 类型 6 */
        6: 6;
        /** 类型 7 */
        7: 7;
        /** 类型 8 */
        8: 8;
        /** 类型 9 */
        9: 9;
        /** 只返回值，表示其他状态的组合。 */
        Mixed: -2;
        /** 无反射类型 */
        None: 0;
    };
    /**
     * 指定将节点添加到图表中相对于现有节点的哪个位置。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/office.msorelativenodeposition)
     * @see {@link Kso.KsoMsoRelativeNodePosition}
     */
    readonly RelativeNodePosition: {
        /** 节点添加到最后一个同级节点之后。 */
        AfterLastSibling: 4;
        /** 节点添加到当前节点之后。 */
        AfterNode: 2;
        /** 节点添加到第一个同级节点之前。 */
        BeforeFirstSibling: 3;
        /** 节点添加到当前节点之前。 */
        BeforeNode: 1;
    };
    /**
     * 指定在缩放形状时，该形状的哪一部分将保持在原有的位置。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/office.msoscalefrom)
     * @see {@link Kso.KsoMsoScaleFrom}
     */
    readonly ScaleFrom: {
        /** 形状的右下角保持在原有的位置。 */
        BottomRight: 2;
        /** 形状的中点保持在原有的位置。 */
        Middle: 1;
        /** 形状的左上角保持在原有的位置。 */
        TopLeft: 0;
    };
    /**
     * 指定用于在 Web 浏览器中查看文档的理想屏幕分辨率。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/office.msoscreensize)
     * @see {@link Kso.KsoMsoScreenSize}
     */
    readonly ScreenSize: {
        /** 1024x768 分辨率 */
        '1024x768': 4;
        /** 1152x882 分辨率 */
        '1152x882': 5;
        /** 1152x900 分辨率 */
        '1152x900': 6;
        /** 1280x1024 分辨率 */
        '1280x1024': 7;
        /** 1600x1200 分辨率 */
        '1600x1200': 8;
        /** 1800x1440 分辨率 */
        '1800x1440': 9;
        /** 1920x1200 分辨率 */
        '1920x1200': 10;
        /** 544x376 分辨率 */
        '544x376': 0;
        /** 640x480 分辨率 */
        '640x480': 1;
        /** 720x512 分辨率 */
        '720x512': 2;
        /** 800x600 分辨率 */
        '800x600': 3;
    };
    /**
     * 指定线段的类型。 与 FreeformBuilder 对象的 Insert 和 AddNodes 方法一起使用。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/office.msosegmenttype)
     * @see {@link Kso.KsoMsoSegmentType}
     */
    readonly SegmentType: {
        /** 曲线 */
        Curve: 1;
        /** 折线图 */
        Line: 0;
    };
    /**
     * 指定阴影效果的类型。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/office.msoshadowstyle)
     * @see {@link Kso.KsoMsoShadowStyle}
     */
    readonly ShadowStyle: {
        /** 指定内部阴影效果。 */
        InnerShadow: 1;
        /** 指定内部和外部阴影效果的组合。 */
        Mixed: -2;
        /** 指定外部阴影效果。 */
        OuterShadow: 2;
    };
    /**
     * 指定与形状一起显示的阴影类型。根据它们在“绘图”工具栏的“阴影样式”集合内的顺序（从左到右、从上到下）进行编号。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/office.msoshadowtype)
     * @see {@link Kso.KsoMsoShadowType}
     */
    readonly ShadowType: {
        /** 第一个阴影类型 */
        1: 1;
        /** 第十个阴影类型 */
        10: 10;
        /** 第 11 个阴影类型 */
        11: 11;
        /** 第 12 个阴影类型 */
        12: 12;
        /** 第 13 个阴影类型 */
        13: 13;
        /** 第十四个阴影类型 */
        14: 14;
        /** 第 15 个阴影类型 */
        15: 15;
        /** 第 16 个阴影类型 */
        16: 16;
        /** 第 17 个阴影类型 */
        17: 17;
        /** 第十八个阴影类型 */
        18: 18;
        /** 第十九个阴影类型 */
        19: 19;
        /** 第二个阴影类型 */
        2: 2;
        /** 第 20 个阴影类型 */
        20: 20;
        /** 第三个阴影类型 */
        3: 3;
        /** 第四个阴影类型 */
        4: 4;
        /** 第五个阴影类型 */
        5: 5;
        /** 第六个阴影类型 */
        6: 6;
        /** 第七个阴影类型 */
        7: 7;
        /** 第八阴影类型 */
        8: 8;
        /** 第九个阴影类型 */
        9: 9;
        /** 不支持 */
        Mixed: -2;
        /** 第 21 个阴影类型 */
        21: 21;
        /** 第 22 个阴影类型 */
        22: 22;
        /** 第 23 个阴影类型 */
        23: 23;
        /** 第 24 个阴影类型 */
        24: 24;
        /** 第 25 个阴影类型 */
        25: 25;
        /** 第 26 个阴影类型 */
        26: 26;
        /** 第 27 个阴影类型 */
        27: 27;
        /** 第 28 个阴影类型 */
        28: 28;
        /** 第 29 个阴影类型 */
        29: 29;
        /** 第 30 个阴影类型 */
        30: 30;
        /** 第 31 个阴影类型 */
        31: 31;
        /** 第 32 个阴影类型 */
        32: 32;
        /** 第 33 个阴影类型 */
        33: 33;
        /** 第 34 个阴影类型 */
        34: 34;
        /** 第 35 个阴影类型 */
        35: 35;
        /** 第 36 个阴影类型 */
        36: 36;
        /** 第 37 个阴影类型 */
        37: 37;
        /** 第 38 个阴影类型 */
        38: 38;
        /** 第 39 个阴影类型 */
        39: 39;
        /** 第 40 个阴影类型 */
        40: 40;
        /** 第 41 个阴影类型 */
        41: 41;
        /** 第 43 个阴影类型 */
        42: 42;
        /** 第 43 个阴影类型 */
        43: 43;
    };
    /**
     * 指示线条样式和形状样式。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/office.msoshapestyleindex)
     * @see {@link Kso.KsoMsoShapeStyleIndex}
     */
    readonly ShapeStyleIndex: {
        /** 线条样式 1 */
        ShapeStylePreset1: 10001;
        /** 线条样式 10 */
        ShapeStylePreset10: 10010;
        /** 线条样式 11 */
        ShapeStylePreset11: 10011;
        /** 线条样式 12 */
        ShapeStylePreset12: 10012;
        /** 线条样式 13 */
        ShapeStylePreset13: 10013;
        /** 线条样式 14 */
        ShapeStylePreset14: 10014;
        /** 线条样式 15 */
        ShapeStylePreset15: 10015;
        /** 线条样式 16 */
        ShapeStylePreset16: 10016;
        /** 线条样式 17 */
        ShapeStylePreset17: 10017;
        /** 线条样式 18 */
        ShapeStylePreset18: 10018;
        /** 线条样式 19 */
        ShapeStylePreset19: 10019;
        /** 线条样式 2 */
        ShapeStylePreset2: 10002;
        /** 线条样式 20 */
        ShapeStylePreset20: 10020;
        /** 线条样式 3 */
        ShapeStylePreset3: 10003;
        /** 线条样式 4 */
        ShapeStylePreset4: 10004;
        /** 线条样式 5 */
        ShapeStylePreset5: 10005;
        /** 线条样式 6 */
        ShapeStylePreset6: 10006;
        /** 线条样式 7 */
        ShapeStylePreset7: 10007;
        /** 线条样式 8 */
        ShapeStylePreset8: 10008;
        /** 线条样式 9 */
        ShapeStylePreset9: 10009;
        /** 线条样式 21 */
        ShapeStylePreset21: 21;
        /** 线条样式 22 */
        ShapeStylePreset22: 22;
        /** 线条样式 23 */
        ShapeStylePreset23: 23;
        /** 线条样式 24 */
        ShapeStylePreset24: 24;
        /** 线条样式 25 */
        ShapeStylePreset25: 25;
        /** 线条样式 26 */
        ShapeStylePreset26: 26;
        /** 线条样式 27 */
        ShapeStylePreset27: 27;
        /** 线条样式 28 */
        ShapeStylePreset28: 28;
        /** 线条样式 29 */
        ShapeStylePreset29: 29;
        /** 线条样式 30 */
        ShapeStylePreset30: 30;
        /** 线条样式 31 */
        ShapeStylePreset31: 31;
        /** 线条样式 32 */
        ShapeStylePreset32: 32;
        /** 线条样式 33 */
        ShapeStylePreset33: 33;
        /** 线条样式 34 */
        ShapeStylePreset34: 34;
        /** 线条样式 35 */
        ShapeStylePreset35: 35;
        /** 线条样式 36 */
        ShapeStylePreset36: 36;
        /** 线条样式 37 */
        ShapeStylePreset37: 37;
        /** 线条样式 38 */
        ShapeStylePreset38: 38;
        /** 线条样式 39 */
        ShapeStylePreset39: 39;
        /** 线条样式 40 */
        ShapeStylePreset40: 40;
        /** 线条样式 41 */
        ShapeStylePreset41: 41;
        /** 线条样式 42 */
        ShapeStylePreset42: 42;
        /** 线条样式 2 */
        msoLineStylePreset21: 10021;
        /** 形状样式 1 */
        LineStylePreset1: 1;
        /** 形状样式 10 */
        LineStylePreset10: 10;
        /** 形状样式 11 */
        LineStylePreset11: 11;
        /** 形状样式 12 */
        LineStylePreset12: 12;
        /** 形状样式 13 */
        LineStylePreset13: 13;
        /** 形状样式 14 */
        LineStylePreset14: 14;
        /** 形状样式 15 */
        LineStylePreset15: 15;
        /** 形状样式 16 */
        LineStylePreset16: 16;
        /** 形状样式 17 */
        LineStylePreset17: 17;
        /** 形状样式 18 */
        LineStylePreset18: 18;
        /** 形状样式 19 */
        LineStylePreset19: 19;
        /** 形状样式 2 */
        LineStylePreset2: 2;
        /** 形状样式 20 */
        LineStylePreset20: 20;
        /** 形状样式 3 */
        LineStylePreset3: 3;
        /** 形状样式 4 */
        LineStylePreset4: 4;
        /** 形状样式 5 */
        LineStylePreset5: 5;
        /** 形状样式 6 */
        LineStylePreset6: 6;
        /** 形状样式 7 */
        LineStylePreset7: 7;
        /** 形状样式 8 */
        LineStylePreset8: 8;
        /** 形状样式 9 */
        LineStylePreset9: 9;
        /** 形状样式的混合 */
        ShapeStyleMixed: -2;
        /** 无形状样式 */
        ShapeStyleNotAPreset: 0;
    };
    /**
     * 指定形状的类型或形状范围。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/office.msoshapetype)
     * @see {@link Kso.KsoMsoShapeType}
     */
    readonly ShapeType: {
        /** 自选图形 */
        AutoShape: 1;
        /** 标注 */
        Callout: 2;
        /** 画布 */
        Canvas: 20;
        /** 图表 */
        Chart: 3;
        /** 评论 */
        Comment: 4;
        /** 图 */
        Diagram: 21;
        /** 嵌入式 OLE 对象 */
        EmbeddedOLEObject: 7;
        /** 窗体控件 */
        FormControl: 8;
        /** 任意多边形 */
        Freeform: 5;
        /** 组 */
        Group: 6;
        /** SmartArt 图形 */
        SmartArt: 24;
        /** 墨迹 */
        Ink: 22;
        /** 墨迹批注。 */
        InkComment: 23;
        /** 折线图 */
        Line: 9;
        /** 链接 OLE 对象。 */
        LinkedOLEObject: 10;
        /** 链接图片。 */
        LinkedPicture: 11;
        /** 媒体 */
        Media: 16;
        /** OLE 控件对象。 */
        OLEControlObject: 12;
        /** 图片 */
        Picture: 13;
        /** 占位符 */
        Placeholder: 14;
        /** 脚本定位标记。 */
        ScriptAnchor: 18;
        /** 混和形状类型。 */
        ShapeType: -2;
        /** 切片器 */
        Slicer: 25;
        /** 表格 */
        Table: 19;
        /** 文本框。 */
        TextBox: 17;
        /** 文本效果。 */
        TextEffect: 15;
        /** Web 视频 */
        WebVideo: 26;
    };
    /**
     * 指定共享工作区任务的优先级。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/office.msosharedworkspacetaskpriority)
     * @see {@link Kso.KsoMsoSharedWorkspaceTaskPriority}
     */
    readonly SharedWorkspaceTaskPriority: {
        /** 高优先级 */
        High: 1;
        /** 低优先级 */
        Low: 3;
        /** 正常优先级 */
        Normal: 2;
    };
    /**
     * 指定共享工作区任务的状态。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/office.msosharedworkspacetaskstatus)
     * @see {@link Kso.KsoMsoSharedWorkspaceTaskStatus}
     */
    readonly SharedWorkspaceTaskStatus: {
        /** 已完成 */
        Completed: 3;
        /** 已推迟 */
        Deferred: 4;
        /** 正在进行 */
        InProgress: 2;
        /** 未启动 */
        NotStarted: 1;
        /** 等 */
        Waiting: 5;
    };
    /**
     * 指定签名子集的属性。 这些设置用作签名集合的筛选器。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/office.msosignaturesubset)
     * @see {@link Kso.KsoMsoSignatureSubset}
     */
    readonly SignatureSubset: {
        /** 所有不可见的签名加上所有签名行。 */
        All: 5;
        /** 所有签名行。 */
        SignatureLines: 2;
        /** 已签署的签名行。 */
        SignatureLinesSigned: 3;
        /** 未签署的签名行。 */
        SignatureLinesUnsigned: 4;
        /** 所有不可见的签名加上所有已签署的签名行。 */
        SignaturesAllSigs: 0;
        /** 所有不可见的签名。 */
        SignaturesNonVisible: 1;
    };
    /**
     * 指定一些常量，以定义将节点添加到 SmartArt 中的数据模型的各种方法。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/office.msosmartartnodeposition)
     * @see {@link Kso.KsoMsoSmartArtNodePosition}
     */
    readonly SmartArtNodePosition: {
        /** 在数据模型中的 SmartArt 节点上方插入节点。 */
        Above: 4;
        /** 在数据模型中的 SmartArt 节点后面插入节点。 相当于在 SmartArt 功能区中单击“在后面添加形状”。 */
        After: 2;
        /** 在数据模型中的 SmartArt 节点前面插入节点。 */
        Before: 3;
        /** 在数据模型中的 SmartArt 节点下方插入节点。 */
        Below: 5;
        /** 默认设置。 相当于在 SmartArt 功能区中单击“添加形状”。 */
        Default: 1;
    };
    /**
     * 指定定义 SmartArt 节点类型的常量。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/office.msosmartartnodetype)
     * @see {@link Kso.KsoMsoSmartArtNodeType}
     */
    readonly SmartArtNodeType: {
        /** 定义可在分层关系图中使用的助手节点。 */
        Assistant: 2;
        /** 默认节点类型。 */
        Default: 1;
    };
    /**
     * 表示 Office 图形中的软边缘效果。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/office.msosoftedgetype)
     * @see {@link Kso.KsoMsoSoftEdgeType}
     */
    readonly SoftEdgeType: {
        /** 柔化边缘类型 1 */
        1: 1;
        /** 柔化边缘类型 2 */
        2: 2;
        /** 柔化边缘类型 3 */
        3: 3;
        /** 柔化边缘类型 4 */
        4: 4;
        /** 柔化边缘类型 5 */
        5: 5;
        /** 柔化边缘类型 6 */
        6: 6;
        /** 无软边缘 */
        None: 0;
        /** 软边缘类型的混合 */
        Mixed: -2;
    };
    /**
     * 指定在同步共享文档时如何解决冲突。 与 Sync 对象的 ResolveConflict 方法一起使用。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/office.msosyncconflictresolutiontype)
     * @see {@link Kso.KsoMsoSyncConflictResolutionType}
     */
    readonly SyncConflictResolutionType: {
        /** 用本地副本代替服务器副本。 */
        ClientWins: 0;
        /** 将对服务器副本所做的更改合并到本地副本中。 若要解决与合并更改获胜的冲突，必须在合并更改后保存活动文档，然后使用 msoSyncConflictClientWins 选项再次调用 ResolveConflict 方法。 */
        Merge: 2;
        /** 用服务器副本代替本地副本。 */
        ServerWins: 1;
    };
    /**
     * 指定文档同步错误。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/office.msosyncerrortype)
     * @see {@link Kso.KsoMsoSyncErrorType}
     */
    readonly SyncErrorType: {
        /** 无法比较源文件和目标文件。 */
        CouldNotCompare: 13;
        /** 无法连接。 */
        CouldNotConnect: 2;
        /** 无法打开文件。 */
        CouldNotOpen: 11;
        /** 无法解析文件。 */
        CouldNotResolve: 14;
        /** 无法更新目标文件。 */
        CouldNotUpdate: 12;
        /** 目标文件正在使用。 */
        FileInUse: 6;
        /** 找不到目标文件。 */
        FileNotFound: 4;
        /** 文件太大，无法同步。 */
        FileTooLarge: 5;
        /** 无错误。 */
        None: 0;
        /** 没有可用的网络。 */
        NoNetwork: 15;
        /** 空间不足。 */
        OutOfSpace: 3;
        /** 用户未经授权。 */
        UnauthorizedUser: 1;
        /** 未知错误。 */
        Unknown: 16;
        /** 下载错误。 */
        UnknownDownload: 10;
        /** 上载错误。 */
        UnknownUpload: 9;
        /** 下载了病毒。 */
        VirusDownload: 8;
        /** 上载了病毒。 */
        VirusUpload: 7;
    };
    /**
     * 指定 Sync 事件的返回值。 在 Microsoft Word 中，与 Document 对象的 Sync 事件或 Application 对象的 DocumentSync 事件一起使用。 在 Microsoft Excel 中，与 Workbook 对象的 Sync 事件或 Application 对象的 WorkbookSync 事件一起使用。 在 Microsoft PowerPoint 中，与 Application 对象的 PresentationSync 事件一起使用。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/office.msosynceventtype)
     * @see {@link Kso.KsoMsoSyncEventType}
     */
    readonly SyncEventType: {
        /** 下载失败。 */
        DownloadFailed: 2;
        /** 下载已开始 */
        DownloadInitiated: 0;
        /** 未检测到更改。 */
        DownloadNoChange: 6;
        /** 下载成功。 */
        DownloadSucceeded: 1;
        /** 脱机。 */
        Offline: 7;
        /** 上载失败。 */
        UploadFailed: 5;
        /** 上载已开始。 */
        UploadInitiated: 3;
        /** 上载成功。 */
        UploadSucceeded: 4;
    };
    /**
     * 指定活动文档的本地副本与服务器副本的同步状态。 与 Sync 对象的 Status 属性一起使用。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/office.msosyncstatustype)
     * @see {@link Kso.KsoMsoSyncStatusType}
     */
    readonly SyncStatusType: {
        /** 本地副本和服务器副本都发生更改。 */
        Conflict: 4;
        /** 发生错误。 使用 Sync 对象的 ErrorType 属性确定确切的错误。 */
        Error: 6;
        /** 文档已处于同步状态。 */
        Latest: 1;
        /** 仅本地副本发生更改。 */
        LocalChanges: 3;
        /** 仅服务器副本发生更改。 */
        NewerAvailable: 2;
        /** 无共享工作区。 */
        NoSharedWorkspace: 0;
        /** 无需同步。 */
        NotRoaming: 0;
        /** 同步已暂停。 */
        Suspended: 5;
    };
    /**
     * 指定在当前打开的本地版本旁打开哪个版本的共享文档。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/office.msosyncversiontype)
     * @see {@link Kso.KsoMsoSyncVersionType}
     */
    readonly SyncVersionType: {
        /** 打开当用户用服务器副本覆盖本地副本时创建的文档副本。 */
        LastViewed: 0;
        /** 打开服务器版本。 */
        Server: 1;
    };
    /**
     * 指定制表位的类型。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/office.msotabstoptype)
     * @see {@link Kso.KsoMsoTabStopType}
     */
    readonly TabStopType: {
        /** 居中式制表位 */
        Center: 2;
        /** 小数点对齐式制表位 */
        Decimal: 4;
        /** 左对齐式制表位 */
        Left: 1;
        /** 只返回值，表示其他状态的组合。 */
        Mixed: -2;
        /** 右对齐式制表位 */
        Right: 3;
    };
    /**
     * 为在 Web 浏览器中查看的文档指定目标浏览器。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/office.msotargetbrowser)
     * @see {@link Kso.KsoMsoTargetBrowser}
     */
    readonly TargetBrowser: {
        /** Microsoft Internet Explorer 4.0 或更高版本 */
        IE4: 2;
        /** Microsoft Internet Explorer 5 或更高版本 */
        IE5: 3;
        /** Microsoft Internet Explorer 6 或更高版本 */
        IE6: 4;
        /** Microsoft Internet Explorer 3.0、Netscape Navigator 3 或更高版本 */
        V3: 0;
        /** Microsoft Internet Explorer 4.0、Netscape Navigator 4 或更高版本 */
        V4: 1;
    };
    /**
     * 指定文本的大写设置。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/office.msotextcaps)
     * @see {@link Kso.KsoMsoTextCaps}
     */
    readonly TextCaps: {
        /** 将文本以全部大写字母的形式显示。 */
        AllCaps: 2;
        /** 将文本以大写字母和小写字母混合的形式显示。 */
        CapsMixed: -2;
        /** 将文本以不带大写字母的形式显示。 */
        NoCaps: 0;
        /** 显示所有小写字母的文本。 */
        SmallCaps: 1;
    };
    /**
     * 指定文本的大写设置。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/office.msotextchangecase)
     * @see {@link Kso.KsoMsoTextChangeCase}
     */
    readonly TextChangeCase: {
        /** 将文本显示为小写字符。 */
        Lower: 2;
        /** 将文本显示为句首字母大写的字符。 句子大小写指定句子的第一个字母是大写的，所有其他字母应为小写 (，但有一些例外，例如适当的名词和首字母缩略词) 。 */
        Sentence: 1;
        /** 将文本显示为词首大写的字符。 标题大小写指定每个单词的第一个字母是大写的，所有其他字母应为小写。 在某些情况下，短的冠词、介词和连词的首字母不大写。 */
        Title: 4;
        /** 指示小写文本应转换为大写，大写文本应转换为小写文本。 */
        Toggle: 5;
        /** 将文本显示为大写字符。 */
        Upper: 3;
    };
    /**
     * 指示文字环绕的类型。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/office.msotextcharwrap)
     * @see {@link Kso.KsoMsoTextCharWrap}
     */
    readonly TextCharWrap: {
        /** 指定混和的文字环绕。 */
        CharWrapMixed: -2;
        /** 指定自定义文字环绕方案。 */
        CustomCharWrap: 3;
        /** 指定无文字环绕。 */
        NoCharWrap: 0;
        /** 指定环绕对象标准边界的文本。 */
        StandardCharWrap: 1;
        /** 指定文字环绕符合中文和日文等语言的限制。 */
        StrictCharWrap: 2;
    };
    /**
     * 指定文本行文方向。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/office.msotextdirection)
     * @see {@link Kso.KsoMsoTextDirection}
     */
    readonly TextDirection: {
        /** 文本左至右行文。 */
        LeftToRight: 1;
        /** 只返回值，表示其他状态的组合。 */
        Mixed: -2;
        /** 文本右至左行文。 */
        RightToLeft: 2;
    };
    /**
     * 指定艺术字文字的对齐方式。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/office.msotexteffectalignment)
     * @see {@link Kso.KsoMsoTextEffectAlignment}
     */
    readonly TextEffectAlignment: {
        /** 居中。 */
        Centered: 2;
        /** 左对齐。 */
        Left: 1;
        /** 文字两端对齐。 可以调整字母之间的间距以使文字两端对齐。 */
        LetterJustify: 4;
        /** 未使用。 */
        Mixed: -2;
        /** 右对齐。 */
        Right: 3;
        /** 文字两端对齐。 可以伸展字母以使文字两端对齐。 */
        StretchJustify: 6;
        /** 文字两端对齐。 可以调整单词（而非字母）之间的间距以使文字两端对齐。 */
        WordJustify: 5;
    };
    /**
     * 指示用于对象的文本对齐方案。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/office.msotextfontalign)
     * @see {@link Kso.KsoMsoTextFontAlign}
     */
    readonly TextFontAlign: {
        /** 指定文本对齐方式由 Office 应用程序决定。 */
        Auto: 0;
        /** 指定文本与对象的基线对齐。 */
        Baseline: 3;
        /** 指定文本与对象的底端对齐。 */
        Bottom: 4;
        /** 指定文本与对象的中心对齐。 */
        Center: 2;
        /** 指定将混和的文本对齐方式与对象一起使用。 */
        Mixed: -2;
        /** 指定文本与对象的顶端对齐。 */
        Top: 1;
    };
    /**
     * 指定文本的方向。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/office.msotextorientation)
     * @see {@link Kso.KsoMsoTextOrientation}
     */
    readonly TextOrientation: {
        /** 向下 */
        Downward: 3;
        /** 水平 */
        Horizontal: 1;
        /** 根据亚洲语言支持的要求水平和旋转 */
        HorizontalRotatedFarEast: 6;
        /** 不支持 */
        Mixed: -2;
        /** 向上 */
        Upward: 2;
        /** 垂直 */
        Vertical: 5;
        /** 支持亚洲语言所需的垂直 */
        VerticalFarEast: 4;
    };
    /**
     * 指示为了加深图像颜色而打印字符的次数。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/office.msotextstrike)
     * @see {@link Kso.KsoMsoTextStrike}
     */
    readonly TextStrike: {
        /** 指定字符打印两次。 */
        DoubleStrike: 2;
        /** 指定不打印字符。 */
        NoStrike: 0;
        /** 指定字符打印一次。 */
        SingleStrike: 1;
        /** 指定文本可以包含 doublestrike 和单删除符的组合。 */
        StrikeMixed: -2;
    };
    /**
     * 指示与制表位或换行符的文本对齐方式。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/office.msotexttabalign)
     * @see {@link Kso.KsoMsoTextTabAlign}
     */
    readonly TextTabAlign: {
        /** 指定下一个制表位或换行符之前的后续文本以指定的制表位为中间点。 */
        Center: 1;
        /** 指定在后续文本中搜索出现的第一处代表小数点的字符。 然后，对齐下一个制表位或换行符之前的文本，使该小数点在指定的制表位处开始。 */
        Decimal: 3;
        /** 指定后续文本从指定制表位的后面开始（默认值）。 */
        Left: 0;
        /** 指定使用相对于制表位的混和文本对齐方式。 */
        Mixed: -2;
        /** 指定下一个制表位或换行符之前的后续文本与指定的制表位右对齐。 */
        Right: 2;
    };
    /**
     * 指示文字的下划线类型。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/office.msotextunderlinetype)
     * @see {@link Kso.KsoMsoTextUnderlineType}
     */
    readonly TextUnderlineType: {
        /** 不指定下划线。 */
        NoUnderline: 0;
        /** 指定短划线下划线。 */
        UnderlineDashHeavyLine: 8;
        /** 指定划线下划线。 */
        UnderlineDashLine: 7;
        /** 指定粗长划线下划线。 */
        UnderlineDashLongHeavyLine: 10;
        /** 指定长虚下划线。 */
        UnderlineDashLongLine: 9;
        /** 指定点划线粗线下划线。 */
        UnderlineDotDashHeavyLine: 12;
        /** 指定点划线下划线。 */
        UnderlineDotDashLine: 11;
        /** 指定点点虚线粗线下划线。 */
        UnderlineDotDotDashHeavyLine: 14;
        /** 指定点破折线下划线。 */
        UnderlineDotDotDashLine: 13;
        /** 指定粗点虚线下划线。 */
        UnderlineDottedHeavyLine: 6;
        /** 指定虚线下划线。 */
        UnderlineDottedLine: 5;
        /** 指定双线下划线。 */
        UnderlineDoubleLine: 3;
        /** 指定粗线下划线。 */
        UnderlineHeavyLine: 4;
        /** 指定混合的下划线类型。 */
        UnderlineMixed: -2;
        /** 指定单线下划线。 */
        UnderlineSingleLine: 2;
        /** 指定波浪双线下划线。 */
        UnderlineWavyDoubleLine: 17;
        /** 指定波浪粗线下划线。 */
        UnderlineWavyHeavyLine: 16;
        /** 指定波浪线下划线。 */
        UnderlineWavyLine: 15;
        /** 指定为单词添加下划线。 */
        UnderlineWords: 1;
    };
    /**
     * 指定用于平铺纹理填充的对齐方式（坐标网格的原点）。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/office.msotexturealignment)
     * @see {@link Kso.KsoMsoTextureAlignment}
     */
    readonly TextureAlignment: {
        /** 只返回值，表示其他状态的组合。 */
        AlignmentMixed: -2;
        /** 底部对齐 */
        Bottom: 7;
        /** 左下对齐 */
        BottomLeft: 6;
        /** 右下对齐 */
        BottomRight: 8;
        /** 居中对齐 */
        Center: 4;
        /** 左对齐 */
        Left: 3;
        /** 右对齐 */
        Right: 5;
        /** 顶部对齐 */
        Top: 1;
        /** 从上到左对齐 */
        TopLeft: 0;
        /** 右上对齐 */
        TopRight: 2;
    };
    /**
     * 指定选定填充的纹理类型。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/office.msotexturetype)
     * @see {@link Kso.KsoMsoTextureType}
     */
    readonly TextureType: {
        /** 预设纹理类型 */
        Preset: 1;
        /** 只返回值，表示其他状态的组合。 */
        TypeMixed: -2;
        /** 用户定义的纹理类型 */
        UserDefined: 2;
    };
    /**
     * 指示 Office 主题颜色。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/office.msothemecolorindex)
     * @see {@link Kso.KsoMsoThemeColorIndex}
     */
    readonly ThemeColorIndex: {
        /** 指定无主题颜色。 */
        NotThemeColor: 0;
        /** 指定“强调文字颜色 1”主题颜色。 */
        ThemeColorAccent1: 5;
        /** 指定“强调文字颜色 2”主题颜色。 */
        ThemeColorAccent2: 6;
        /** 指定“强调文字颜色 3”主题颜色。 */
        ThemeColorAccent3: 7;
        /** 指定“强调文字颜色 4”主题颜色。 */
        ThemeColorAccent4: 8;
        /** 指定“强调文字颜色 5”主题颜色。 */
        ThemeColorAccent5: 9;
        /** 指定“强调文字颜色 6”主题颜色。 */
        ThemeColorAccent6: 10;
        /** 指定“背景 1”主题颜色。 */
        ThemeColorBackground1: 14;
        /** 指定“背景 2”主题颜色。 */
        ThemeColorBackground2: 16;
        /** 指定“深色 1”主题颜色。 */
        ThemeColorDark1: 1;
        /** 指定“深色 2”主题颜色。 */
        ThemeColorDark2: 3;
        /** 指定已单击的超链接的主题颜色。 */
        ThemeColorFollowedHyperlink: 12;
        /** 指定超链接的主题颜色。 */
        ThemeColorHyperlink: 11;
        /** 指定“浅色 1”主题颜色。 */
        ThemeColorLight1: 2;
        /** 指定浅色 2 主题颜色。 */
        ThemeColorLight2: 4;
        /** 指定混和的主题颜色。 */
        ThemeColorMixed: -2;
        /** 指定“文字 1”主题颜色。 */
        ThemeColorText1: 13;
        /** 指定“文字 2”主题颜色。 */
        ThemeColorText2: 15;
    };
    /**
     * 指示 Office 主题的配色方案。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/office.msothemecolorschemeindex)
     * @see {@link Kso.KsoMsoThemeColorSchemeIndex}
     */
    readonly ThemeColorSchemeIndex: {
        /** 指定配色方案“强调文字颜色 1”。 */
        Accent1: 5;
        /** 指定配色方案“强调文字颜色 2”。 */
        Accent2: 6;
        /** 指定配色方案“强调文字颜色 3”。 */
        Accent3: 7;
        /** 指定配色方案“强调文字颜色 4”。 */
        Accent4: 8;
        /** 指定配色方案“强调文字颜色 5”。 */
        Accent5: 9;
        /** 指定配色方案“强调文字颜色 6”。 */
        Accent6: 10;
        /** 指定配色方案“深色 1”。 */
        Dark1: 1;
        /** 指定配色方案“深色 2”。 */
        Dark2: 3;
        /** 指定已单击超链接的配色方案。 */
        FollowedHyperlink: 12;
        /** 指定超链接的配色方案。 */
        Hyperlink: 11;
        /** 指定配色方案“浅色 1”。 */
        Light1: 2;
        /** 指定配色方案“浅色 2”。 */
        Light2: 4;
    };
    /**
     * 指定三态值。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/office.msotristate)
     * @see {@link Kso.KsoMsoTriState}
     */
    readonly TriState: {
        /** 不支持 */
        CTrue: 1;
        /** 错误 */
        False: 0;
        /** 不支持 */
        TriStateMixed: -2;
        /** 不支持 */
        TriStateToggle: -3;
        /** True */
        True: -1;
    };
    /**
     * 指定文本框中文本的垂直对齐方式。 与 TextFrame 对象的 VerticalAnchor 属性一起使用。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/office.msoverticalanchor)
     * @see {@link Kso.KsoMsoVerticalAnchor}
     */
    readonly VerticalAnchor: {
        /** 使文本与文本框的底部对齐。 */
        AnchorBottom: 4;
        /** 不管如何调整文本大小，文本字符串的底端都定位于当前位置。 如果调整文本大小时不定位基线，文本将以之前的位置为中间点。 */
        AnchorBottomBaseLine: 5;
        /** 使文本垂直居中。 */
        AnchorMiddle: 3;
        /** 使文本与文本框的顶部对齐。 */
        AnchorTop: 1;
        /** 不管如何调整文本大小，文本字符串的底端都定位于当前位置。 如果调整文本大小时不定位基线，文本将以之前的位置为中间点。 */
        AnchorTopBaseline: 2;
        /** 只返回值，表示其他状态的组合。 */
        VerticalAnchorMixed: -2;
    };
    /**
     * 指示各种图像弯曲格式。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/office.msowarpformat)
     * @see {@link Kso.KsoMsoWarpFormat}
     */
    readonly WarpFormat: {
        /** 指定“弯曲格式 1”。 */
        1: 0;
        /** 指定“弯曲格式 10”。 */
        10: 9;
        /** 指定“弯曲格式 11”。 */
        11: 10;
        /** 指定“弯曲格式 12”。 */
        12: 11;
        /** 指定“弯曲格式 13”。 */
        13: 12;
        /** 指定“弯曲格式 14”。 */
        14: 13;
        /** 指定“弯曲格式 15”。 */
        15: 14;
        /** 指定“弯曲格式 16”。 */
        16: 15;
        /** 指定“弯曲格式 17”。 */
        17: 16;
        /** 指定“弯曲格式 18”。 */
        18: 17;
        /** 指定“弯曲格式 19”。 */
        19: 18;
        /** 指定“弯曲格式 2”。 */
        2: 1;
        /** 指定“弯曲格式 20”。 */
        20: 19;
        /** 指定“弯曲格式 21”。 */
        21: 20;
        /** 指定“弯曲格式 22”。 */
        22: 21;
        /** 指定“弯曲格式 23”。 */
        23: 22;
        /** 指定“弯曲格式 24”。 */
        24: 23;
        /** 指定“弯曲格式 25”。 */
        25: 24;
        /** 指定“弯曲格式 26”。 */
        26: 25;
        /** 指定“弯曲格式 27”。 */
        27: 26;
        /** 指定“弯曲格式 28”。 */
        28: 27;
        /** 指定“弯曲格式 29”。 */
        29: 28;
        /** 指定“弯曲格式 3”。 */
        3: 2;
        /** 指定“弯曲格式 30”。 */
        30: 29;
        /** 指定扭曲格式 31。 */
        31: 30;
        /** 指定扭曲格式 32。 */
        32: 31;
        /** 指定扭曲格式 33。 */
        33: 32;
        /** 指定扭曲格式 34。 */
        34: 33;
        /** 指定扭曲格式 35。 */
        35: 34;
        /** 指定扭曲格式 36。 */
        36: 35;
        /** 指定扭曲格式 37。 */
        37: 36;
        /** 指定“弯曲格式 4”。 */
        4: 3;
        /** 指定“弯曲格式 5”。 */
        5: 4;
        /** 指定“弯曲格式 6”。 */
        6: 5;
        /** 指定“弯曲格式 7”。 */
        7: 6;
        /** 指定“弯曲格式 8”。 */
        8: 7;
        /** 指定“弯曲格式 9”。 */
        9: 8;
        /** 指定混和的弯曲格式。 */
        Mixed: -2;
    };
    /**
     * 指定调用向导回调过程的上下文。 用作被设计为与自定义向导一起使用的回调过程中的参数。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/office.msowizardmsgtype)
     * @see {@link Kso.KsoMsoWizardMsgType}
     */
    readonly WizardMsgType: {
        /** 用户在判定或分支气球中单击了鼠标右键。 */
        LocalStateOff: 2;
        /** 不支持。 */
        LocalStateOn: 1;
        /** 如果为 Act 参数指定了 Resume，则传递到 ActivateWizard 方法。 */
        Resuming: 5;
        /** 用户在判定或分支气球中单击了鼠标左键。 */
        ShowHelp: 3;
        /** 如果为 Act 参数指定了 Suspend，则传递到 ActivateWizard 方法。 */
        Suspending: 4;
    };
    /**
     * 指定要将形状移动到的相对于其他形状的 z-顺序位置。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/office.msozordercmd)
     * @see {@link Kso.KsoMsoZOrderCmd}
     */
    readonly ZOrderCmd: {
        /** 使形状上移一层。 */
        BringForward: 2;
        /** 使形状浮于文字上方。 仅用于 Microsoft Word。 */
        BringInFrontOfText: 4;
        /** 使形状置于顶层。 */
        BringToFront: 0;
        /** 使形状下移一层。 */
        SendBackward: 3;
        /** 使形状衬于文字下方。 仅用于 Microsoft Word。 */
        SendBehindText: 5;
        /** 使形状置于底层。 */
        SendToBack: 1;
    };
    /**
     * 指定一些常量，用于定义功能区中的控件大小。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/office.ribboncontrolsize)
     * @see {@link Kso.KsoRibbonControlSize}
     */
    readonly RibbonControlSize: {
        /** 大型控件 */
        Large: 1;
        /** 小型控件 */
        Regular: 0;
    };
    /**
     * 指示有关签名的附加信息。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/office.signaturedetail)
     * @see {@link Kso.KsoSignatureDetail}
     */
    readonly SignatureDetail: {
        /** 指定应用程序名称。 */
        ApplicationName: 1;
        /** 指定应用程序版本。 */
        ApplicationVersion: 2;
        /** 指定颜色深度。 */
        ColorDepth: 8;
        /** 指定建议的签名代理人。 */
        DelSuggSigner: 16;
        /** 指定建议的签名者代理人的电子邮件。 */
        DelSuggSignerEmail: 20;
        /** 指示是否已指定了建议签名代理人的电子邮件。 */
        DelSuggSignerEmailSet: 21;
        /** 指定建议签名人的代理人的签名行。 */
        DelSuggSignerLine2: 18;
        /** 指定建议签名人的代理人的签名行集合。 */
        DelSuggSignerLine2Set: 19;
        /** 指定建议签名人的代理人集合。 */
        DelSuggSignerSet: 17;
        /** 指定文档预览图像。 */
        DocPreviewImg: 10;
        /** 指定哈希算法。 */
        HashAlgorithm: 14;
        /** 指定水平分辨率。 */
        HorizResolution: 6;
        /** 指定 IP 当前视图。 */
        IPCurrentView: 12;
        /** 指定 IP 形态哈希。 */
        IPFormHash: 11;
        /** 指定本地签名时间。 */
        LocalSigningTime: 0;
        /** 指定监视器数。 */
        NumberOfMonitors: 5;
        /** 指定 Office 版本。 */
        OfficeVersion: 3;
        /** 指定“将显示视图警告”设置。 */
        ShouldShowViewWarning: 15;
        /** 指定签名类型。 */
        SignatureType: 13;
        /** 指定签名数据。 */
        SignedData: 9;
        /** 指定垂直分辨率。 */
        VertResolution: 7;
        /** 指定 Windows 版本。 */
        WindowsVersion: 4;
    };
    /**
     * 指示签名行图像。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/office.signaturelineimage)
     * @see {@link Kso.KsoSignatureLineImage}
     */
    readonly SignatureLineImage: {
        /** SignedInvalid 映像 */
        SignedInvalid: 3;
        /** SignedValid 映像 */
        SignedValid: 2;
        /** SoftwareRequired 映像 */
        SoftwareRequired: 0;
        /** 未签名映像 */
        Unsigned: 1;
        /**  */
        Signed: 4;
    };
    /**
     * 指定签名提供程序的属性。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/office.signatureproviderdetail)
     * @see {@link Kso.KsoSignatureProviderDetail}
     */
    readonly SignatureProviderDetail: {
        /** 用于对文件中的“数据进行散列运算的哈希算法”。 */
        HashAlgorithm: 1;
        /** 指示签名提供程序只使用自定义用户界面。 */
        UIOnly: 2;
        /** 签名提供程序的 URL。 */
        Url: 0;
        /**  */
        UseOfficeUI: 3;
        /**  */
        UseOfficeStampUI: 4;
    };
    /**
     * 指定签名的属性。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/office/vba/api/office.signaturetype)
     * @see {@link Kso.KsoSignatureType}
     */
    readonly SignatureType: {
        /** 指定当前版本的 Office 中可用的签名类型的最大数目。 */
        Max: 3;
        /** 签名在文档内容中不可见。 */
        NonVisible: 1;
        /** 签名在文档内容中可见。 */
        SignatureLine: 2;
        /** 签名不是由 Office 生成的。 */
        Unknown: 0;
    };
    /**
     * 指定关系图节点的类型。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/dotnet/api/microsoft.office.core.msodiagramnodetype?view=office-pia)
     * @see {@link Kso.KsoMsoDiagramNodeType}
     */
    readonly DiagramNodeType: {
        /** 关系图节点是其父节点的从属节点。 */
        Node: 1;
        /** 关系图节点是其父节点的助手。 */
        Assistant: 2;
    };
    /**
     * 指定关系图的类型。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/dotnet/api/microsoft.office.core.msodiagramtype?view=office-pia)
     * @see {@link Kso.KsoMsoDiagramType}
     */
    readonly DiagramType: {
        /** 只返回值，表示其他状态的组合。 */
        Mixed: -2;
        /** 组织结构图。 */
        OrgChart: 1;
        /** 循环图。 */
        Cycle: 2;
        /** 径向图。 */
        Radial: 3;
        /** 棱锥图。 */
        Pyramid: 4;
        /** 维恩图。 */
        Venn: 5;
        /** 目标图。 */
        Target: 6;
    };
    /**
     * 指定脚本定位点在文档中的位置。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/dotnet/api/microsoft.office.core.msoscriptlocation?view=office-pia)
     * @see {@link Kso.KsoMsoScriptLocation}
     */
    readonly ScriptLocation: {
        /** 脚本定位点位于文档的头上。 */
        InHead: 1;
        /** 脚本定位点位于文档正文中。 */
        InBody: 2;
    };
    /**
     * 指定活动脚本的脚本语言。
     * @see[VBA文档](https://learn.microsoft.com/zh-cn/dotnet/api/microsoft.office.core.msoscriptlanguage?view=office-pia)
     * @see {@link Kso.KsoMsoScriptLanguage}
     */
    readonly ScriptLanguage: {
        /** Java */
        Java: 1;
        /** Visual Basic。 */
        VisualBasic: 2;
        /** ACTIVE Server Pages (ASP) 。 */
        ASP: 3;
        /** ASP、Java 或 Visual Basic 以外的语言。 */
        Other: 4;
    };
    /**
     *
     * @see {@link Kso.KsoMsoFileFindOptions}
     */
    readonly FileFindOptions: {
        /**  */
        New: 1;
        /**  */
        Add: 2;
        /**  */
        Within: 3;
    };
    /**
     *
     * @see {@link Kso.KsoMsoButtonSetType}
     */
    readonly ButtonSetType: {
        /**  */
        BackClose: 6;
        /**  */
        None: 0;
        /**  */
        NextClose: 7;
        /**  */
        YesNoCancel: 5;
        /**  */
        OkCancel: 3;
        /**  */
        OK: 1;
        /**  */
        RetryCancel: 9;
        /**  */
        Cancel: 2;
        /**  */
        YesNo: 4;
        /**  */
        BackNextClose: 8;
        /**  */
        AbortRetryIgnore: 10;
        /**  */
        SearchClose: 11;
        /**  */
        BackNextSnooze: 12;
        /**  */
        TipsOptionsClose: 13;
        /**  */
        YesAllNoCancel: 14;
    };
    /**
     *
     * @see {@link Kso.KsoMsoBalloonType}
     */
    readonly BalloonType: {
        /**  */
        Buttons: 0;
        /**  */
        Numbers: 2;
        /**  */
        Bullets: 1;
    };
    /**
     *
     * @see {@link Kso.KsoMsoButtonStyleHidden}
     */
    readonly ButtonStyleHidden: {
        /**  */
        WrapText: 4;
        /**  */
        TextBelow: 8;
    };
    /**
     *
     * @see {@link Kso.KsoMsoFileType}
     */
    readonly FileType: {
        /**  */
        TaskItem: 15;
        /**  */
        MailItem: 10;
        /**  */
        AllFiles: 1;
        /**  */
        Databases: 7;
        /**  */
        WordDocuments: 3;
        /**  */
        OfficeFiles: 2;
        /**  */
        ExcelWorkbooks: 4;
        /**  */
        PowerPointPresentations: 5;
        /**  */
        Binders: 6;
        /**  */
        OutlookItems: 9;
        /**  */
        Templates: 8;
        /**  */
        CalendarItem: 11;
        /**  */
        ContactItem: 12;
        /**  */
        NoteItem: 13;
        /**  */
        JournalItem: 14;
        /**  */
        PhotoDrawFiles: 16;
        /**  */
        DataConnectionFiles: 17;
        /**  */
        PublisherFiles: 18;
        /**  */
        ProjectFiles: 19;
        /**  */
        DocumentImagingFiles: 20;
        /**  */
        VisioFiles: 21;
        /**  */
        DesignerFiles: 22;
        /**  */
        WebPages: 23;
    };
    /**
     *
     * @see {@link Kso.KsoMsoFileFindListBy}
     */
    readonly FileFindListBy: {
        /**  */
        ListbyName: 1;
        /**  */
        ListbyTitle: 2;
    };
    /**
     *
     * @see {@link Kso.KsoMsoMoveRow}
     */
    readonly MoveRow: {
        /**  */
        First: -4;
        /**  */
        Prev: -3;
        /**  */
        Next: -2;
        /**  */
        Nbr: -1;
    };
    /**
     *
     * @see {@link Kso.KsoMsoMixedType}
     */
    readonly MixedType: {
        /**  */
        IntegerMixed: 32768;
        /**  */
        SingleMixed: 0x80000000;
    };
    /**
     *
     * @see {@link Kso.KsoMsoModeType}
     */
    readonly ModeType: {
        /**  */
        Modal: 0;
        /**  */
        AutoDown: 1;
        /**  */
        Modeless: 2;
    };
    /**
     * @see {@link Kso.KsoMsoAnimationType}
     */
    readonly AnimationType: {
        /**  */
        Idle: 1;
        /**  */
        Greeting: 2;
        /**  */
        EmptyTrash: 116;
        /**  */
        Goodbye: 3;
        /**  */
        BeginSpeaking: 4;
        /**  */
        CharacterSuccessMajor: 6;
        /**  */
        LookDownRight: 106;
        /**  */
        RestPose: 5;
        /**  */
        GetAttentionMajor: 11;
        /**  */
        GetAttentionMinor: 12;
        /**  */
        Thinking: 24;
        /**  */
        Searching: 13;
        /**  */
        Printing: 18;
        /**  */
        GestureRight: 19;
        /**  */
        LookUp: 109;
        /**  */
        WritingNotingSomething: 22;
        /**  */
        WorkingAtSomething: 23;
        /**  */
        ListensToComputer: 26;
        /**  */
        SendingMail: 25;
        /**  */
        Disappear: 31;
        /**  */
        Appear: 32;
        /**  */
        LookLeft: 107;
        /**  */
        GetArtsy: 100;
        /**  */
        GetTechy: 101;
        /**  */
        GetWizardy: 102;
        /**  */
        CheckingSomething: 103;
        /**  */
        LookDown: 104;
        /**  */
        LookDownLeft: 105;
        /**  */
        LookRight: 108;
        /**  */
        LookUpLeft: 110;
        /**  */
        LookUpRight: 111;
        /**  */
        Saving: 112;
        /**  */
        GestureDown: 113;
        /**  */
        GestureLeft: 114;
        /**  */
        GestureUp: 115;
    };
    /**
     * @see {@link Kso.KsoMsoIconType}
     */
    readonly IconType: {
        /**  */
        AlertCritical: 7;
        /**  */
        None: 0;
        /**  */
        Alert: 2;
        /**  */
        AlertQuery: 6;
        /**  */
        Tip: 3;
        /**  */
        AlertInfo: 4;
        /**  */
        AlertWarning: 5;
    };
    /**
     *
     * @see {@link Kso.KsoMsoBalloonErrorType}
     */
    readonly BalloonErrorType: {
        /**  */
        TooBig: 2;
        /**  */
        None: 0;
        /**  */
        Other: 1;
        /**  */
        BadCharacter: 8;
        /**  */
        OutOfMemory: 3;
        /**  */
        BadPictureRef: 4;
        /**  */
        BadReference: 5;
        /**  */
        ButtonlessModal: 6;
        /**  */
        ButtonModeless: 7;
        /**  */
        COMFailure: 9;
        /**  */
        CharNotTopmostForModal: 10;
        /**  */
        TooManyControls: 11;
    };
    /**
     *
     * @see {@link Kso.KsoMsoWizardActType}
     */
    readonly WizardActType: {
        /**  */
        Inactive: 0;
        /**  */
        Active: 1;
        /**  */
        Suspend: 2;
        /**  */
        Resume: 3;
    };
    /**
     *
     * @see {@link Kso.KsoMsoBalloonButtonType}
     */
    readonly BalloonButtonType: {
        /**  */
        YesToAll: -15;
        /**  */
        Options: -14;
        /**  */
        Tips: -13;
        /**  */
        Snooze: -11;
        /**  */
        Close: -12;
        /**  */
        Yes: -3;
        /**  */
        Search: -10;
        /**  */
        Ignore: -9;
        /**  */
        Abort: -8;
        /**  */
        Retry: -7;
        /**  */
        Next: -6;
        /**  */
        Back: -5;
        /**  */
        OK: -1;
        /**  */
        No: -4;
        /**  */
        Cancel: -2;
        /**  */
        Null: 0;
    };
    /**
     *
     * @see {@link Kso.KsoMsoFileFindView}
     */
    readonly FileFindView: {
        /**  */
        Preview: 2;
        /**  */
        FileInfo: 1;
        /**  */
        SummaryInfo: 3;
    };
    /**
     *
     * @see {@link Kso.KsoMsoFileFindSortBy}
     */
    readonly FileFindSortBy: {
        /**  */
        SortbyAuthor: 1;
        /**  */
        SortbyDateCreated: 2;
        /**  */
        SortbyLastSavedBy: 3;
        /**  */
        SortbyTitle: 7;
        /**  */
        SortbySize: 6;
        /**  */
        SortbyDateSaved: 4;
        /**  */
        SortbyFileName: 5;
    };
    /**
     *
     * @see {@link Kso.KsoMsoLastModified}
     */
    readonly LastModified: {
        /**  */
        Yesterday: 1;
        /**  */
        Today: 2;
        /**  */
        AnyTime: 7;
        /**  */
        LastWeek: 3;
        /**  */
        ThisWeek: 4;
        /**  */
        LastMonth: 5;
        /**  */
        ThisMonth: 6;
    };
    /**
     *
     * @see {@link Kso.KsoMsoSortBy}
     */
    readonly SortBy: {
        /**  */
        FileType: 3;
        /**  */
        FileName: 1;
        /**  */
        Size: 2;
        /**  */
        LastModified: 4;
        /**  */
        None: 5;
    };
    /**
     *
     * @see {@link Kso.KsoMsoSortOrder}
     */
    readonly SortOrder: {
        /**  */
        Ascending: 1;
        /**  */
        Descending: 2;
    };
    /**
     *
     * @see {@link Kso.KsoMsoConnector}
     */
    readonly Connector: {
        /**  */
        Or: 2;
        /**  */
        And: 1;
    };
    /**
     *
     * @see {@link Kso.KsoMsoCondition}
     */
    readonly Condition: {
        /**  */
        FileTypeDatabases: 7;
        /**  */
        FileTypeAllFiles: 1;
        /**  */
        IncludesPhrase: 10;
        /**  */
        FileTypeTemplates: 8;
        /**  */
        FileTypeExcelWorkbooks: 4;
        /**  */
        Today: 17;
        /**  */
        FileTypeOfficeFiles: 2;
        /**  */
        FileTypeOutlookItems: 43;
        /**  */
        FileTypeWordDocuments: 3;
        /**  */
        FileTypeDataConnectionFiles: 51;
        /**  */
        FileTypePowerPointPresentations: 5;
        /**  */
        FileTypePublisherFiles: 52;
        /**  */
        IsNo: 40;
        /**  */
        FileTypeBinders: 6;
        /**  */
        FileTypeTaskItem: 49;
        /**  */
        Includes: 9;
        /**  */
        NotEqualToHigh: 63;
        /**  */
        EqualsLow: 58;
        /**  */
        BeginsWith: 11;
        /**  */
        FileTypeDocumentImagingFiles: 54;
        /**  */
        EndsWith: 12;
        /**  */
        AnytimeBetween: 26;
        /**  */
        IncludesNearEachOther: 13;
        /**  */
        FreeText: 42;
        /**  */
        IsExactly: 14;
        /**  */
        IsNot: 15;
        /**  */
        Yesterday: 16;
        /**  */
        Tomorrow: 18;
        /**  */
        LastWeek: 19;
        /**  */
        ThisWeek: 20;
        /**  */
        InTheLast: 31;
        /**  */
        FileTypeJournalItem: 48;
        /**  */
        NextWeek: 21;
        /**  */
        FileTypePhotoDrawFiles: 50;
        /**  */
        EqualsInProgress: 65;
        /**  */
        LastMonth: 22;
        /**  */
        ThisMonth: 23;
        /**  */
        NextMonth: 24;
        /**  */
        Anytime: 25;
        /**  */
        FileTypeCalendarItem: 45;
        /**  */
        On: 27;
        /**  */
        OnOrAfter: 28;
        /**  */
        OnOrBefore: 29;
        /**  */
        InTheNext: 30;
        /**  */
        FileTypeDesignerFiles: 56;
        /**  */
        AtMost: 35;
        /**  */
        Equals: 32;
        /**  */
        NotEqualToNormal: 62;
        /**  */
        DoesNotEqual: 33;
        /**  */
        IncludesFormsOf: 41;
        /**  */
        AnyNumberBetween: 34;
        /**  */
        NotEqualToInProgress: 70;
        /**  */
        NotEqualToLow: 61;
        /**  */
        AtLeast: 36;
        /**  */
        FileTypeMailItem: 44;
        /**  */
        MoreThan: 37;
        /**  */
        LessThan: 38;
        /**  */
        EqualsHigh: 60;
        /**  */
        IsYes: 39;
        /**  */
        FileTypeContactItem: 46;
        /**  */
        FileTypeNoteItem: 47;
        /**  */
        FileTypeProjectFiles: 53;
        /**  */
        FileTypeVisioFiles: 55;
        /**  */
        EqualsNormal: 59;
        /**  */
        FileTypeWebPages: 57;
        /**  */
        EqualsNotStarted: 64;
        /**  */
        EqualsCompleted: 66;
        /**  */
        EqualsWaitingForSomeoneElse: 67;
        /**  */
        EqualsDeferred: 68;
        /**  */
        NotEqualToNotStarted: 69;
        /**  */
        NotEqualToCompleted: 71;
        /**  */
        NotEqualToWaitingForSomeoneElse: 72;
        /**  */
        NotEqualToDeferred: 73;
    };
    /**
     *
     * @see {@link Kso.KsoMsoHTMLProjectState}
     */
    readonly HTMLProjectState: {
        /**  */
        DocumentLocked: 1;
        /**  */
        ProjectLocked: 2;
        /**  */
        DocumentProjectUnlocked: 3;
    };
    /**
     *
     * @see {@link Kso.KsoMsoHTMLProjectOpen}
     */
    readonly HTMLProjectOpen: {
        /**  */
        TextView: 2;
        /**  */
        SourceView: 1;
    };
    /**
     *
     * @see {@link Kso.KsoMsoAlertButtonType}
     */
    readonly AlertButtonType: {
        /**  */
        YesNoCancel: 3;
        /**  */
        OK: 0;
        /**  */
        AbortRetryIgnore: 2;
        /**  */
        OKCancel: 1;
        /**  */
        YesNo: 4;
        /**  */
        RetryCancel: 5;
        /**  */
        YesAllNoCancel: 6;
    };
    /**
     *
     * @see {@link Kso.KsoMsoAlertDefaultType}
     */
    readonly AlertDefaultType: {
        /**  */
        First: 0;
        /**  */
        Second: 1;
        /**  */
        Third: 2;
        /**  */
        Fourth: 3;
        /**  */
        Fifth: 4;
    };
    /**
     *
     * @see {@link Kso.KsoMsoSearchIn}
     */
    readonly SearchIn: {
        /**  */
        MyComputer: 0;
        /**  */
        Outlook: 1;
        /**  */
        MyNetworkPlaces: 2;
        /**  */
        Custom: 3;
    };
    /**
     *
     * @see {@link Kso.KsoMsoLanguageIDHidden}
     */
    readonly LanguageIDHidden: {
        /**  */
        ChineseMacao: 5124;
        /**  */
        ChineseHongKong: 3076;
        /**  */
        EnglishTrinidad: 11273;
    };
    /**
     *
     * @see {@link Kso.KsoMsoSyncCompareType}
     */
    readonly SyncCompareType: {
        /**  */
        AndMerge: 0;
        /**  */
        SideBySide: 1;
    };
    /**
     *
     * @see {@link Kso.KsoMsoSyncAvailableType}
     */
    readonly SyncAvailableType: {
        /**  */
        None: 0;
        /**  */
        Offline: 1;
        /**  */
        Anywhere: 2;
    };
    /**
     *
     * @see {@link Kso.KsoXlChartOrientation}
     */
    readonly ChartOrientation: {
        /**  */
        Downward: -4170;
        /**  */
        Horizontal: -4128;
        /**  */
        Upward: -4171;
        /**  */
        Vertical: -4166;
    };
    /**
     *
     * @see {@link Kso.MsoFarEastLineBreakLanguageID}
     */
    readonly FarEastLineBreakLanguageID: {
        TraditionalChinese: 1028;
        Japanese: 1041;
        LanguageKorean: 1042;
        LanguageSimplifiedChinese: 2052;
    };
};
export declare const kso: KingSoftOfficeEnum;
export declare const xl: ElectronicTableEnum;

declare global {
    
    /**
     * WPS表格枚举入口对象
     */
    const xl: ElectronicTableEnum

    /**
     * WPS通用枚举入口对象
     */
    const kso: KingSoftOfficeEnum
}