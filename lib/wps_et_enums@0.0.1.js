class ZZZ {
    static {
        /**
         * 类型谓词，判断是否为整数
         * @param x - 数字
         * @returns 返回一个布尔值，表示{@linkcode x}是否为整数
         */
        const _isInteger = (x) => Number.isInteger(x);
        /**
         * 尝试求值
         * @param enumProp - 枚举全名
         * @returns 如果可以计算出{@linkcode enumProp}的值，则返回其对应的数值，否则返回null
         * @tode
         */
        const _tryGet = globalThis['DoEvents']
            ? (enumProp) => {
                try {
                    return eval(enumProp);
                }
                catch {
                    return null;
                }
            }
            : (enumProp) => {
                let val = globalThis.wps.Enum(enumProp);
                return val == null ? null : val;
            };
        /**
         * 分割出以大写字母开头的字符串数组
         * @param name - {@link EnumDictionary} 键名之一
         * @returns
         */
        const _split = (name) => name.split(/(?=[A-Z])/g);
        /**
         * 拦截 receiver 的原型链，实现枚举对象。
         */
        const PROTO = new Proxy({}, {
            get(target, enumProp, receiver) {
                if (enumProp in target)
                    return target[enumProp];
                let val = _tryGet(receiver._ + enumProp);
                if (val == null)
                    throw new Error(`不存在的枚举键【${enumProp}】`);
                Object.defineProperty(receiver, enumProp, { value: val, configurable: true });
                return val;
            }
        });
        /**
         * 实现枚举对象。
         * @param target - 被代理的对象
         * @param prop - 拦截的枚举对象名
         * @param receiver - 接收器
         * @returns 返回枚举对象
         */
        const get = (target, prop, receiver) => {
            if (prop in target)
                return target[prop];
            const { dictionary, prefix } = receiver;
            let value;
            if ((value = dictionary[prop]) == null)
                throw new ReferenceError(`不存在的枚举名：${prop}`);
            let obj;
            if (value === true)
                obj = { __proto__: PROTO, _: prefix + prop }; // 前缀+枚举名
            else if (value === false)
                obj = { __proto__: PROTO, _: prefix }; // 前缀
            else if (_isInteger(value)) {
                if (value === 0) {
                    obj = { __proto__: PROTO, _: prop }; // 无前缀
                }
                else {
                    let wrods = _split(prop);
                    let _ = prefix + (value < 0 ? wrods.slice(0, value) : wrods.slice(value)).join('');
                    obj = { __proto__: PROTO, _ }; // 裁剪
                }
            }
            else if (value === '') // 成员即是常量
                obj = { __proto__: PROTO, _: '' };
            else {
                let charCode = value[0]?.codePointAt(0);
                if (charCode >= 65 && charCode <= 90) // 大写字母
                    obj = { __proto__: PROTO, _: prefix + value };
                else if (charCode >= 97 && charCode <= 122) // 小写字母
                    obj = { __proto__: PROTO, _: value };
                else if (value[0] === '0') // 没有前缀，且约定名称
                    obj = { __proto__: PROTO, _: value.slice(1) };
                else
                    throw new Error('字典不符合约定');
            }
            delete dictionary[prop];
            Object.defineProperty(receiver, prop, { value: obj, configurable: true });
            return obj;
        };
        /**
         * 创建枚举大组对象。
         * @param enumObj - 枚举大组对象
         * @param prefix - 默认前缀
         * @param dictionary - 枚举前缀重构字典
         * @returns {@linkcode enumObj}
         */
        function createEnumGroups(enumObj, prefix, dictionary) {
            Object.setPrototypeOf(enumObj, new Proxy({}, { get }));
            return Object.defineProperties(enumObj, {
                'prefix': { value: prefix },
                'dictionary': { value: dictionary },
            });
        }
        const kso_dic = {
            AlertButtonType: -1,
            AlertCancelType: -1,
            AlertDefaultType: -1,
            AlertIconType: -1,
            AlignCmd: -1,
            AnimationType: -1,
            AppLanguageID: 1,
            ArrowheadLength: -1,
            ArrowheadStyle: -1,
            ArrowheadWidth: -1,
            AutomationSecurity: true,
            AutoShapeType: 'Shape',
            AutoSize: true,
            BackgroundStyleIndex: -1,
            BackstageGroupStyle: 0,
            BalloonButtonType: -1,
            BalloonErrorType: -1,
            BalloonType: true,
            BarPosition: -1,
            BarProtection: -1,
            BarRow: true,
            BarType: true,
            BaselineAlignment: 'BaselineAlign',
            BevelType: -1,
            BlackWhiteMode: -1,
            BlogCategorySupport: -2,
            BlogImageType: 'msoblogImageType',
            BroadcastCapabilities: '0BroadcastCap',
            BroadcastState: '',
            BulletType: -1,
            ButtonSetType: -1,
            ButtonState: -1,
            ButtonStyle: -1,
            ButtonStyleHidden: -2,
            CalloutAngleType: -1,
            CalloutDropType: -1,
            CalloutType: -1,
            CertificateDetail: 'certdet',
            CertificateVerificationResults: 'certverres',
            CharacterSet: true,
            ChartElementType: 'Element',
            ChartFieldType: -1,
            ChartOrientation: 'xl',
            ClipboardFormat: true,
            ColorType: true,
            ComboStyle: -1,
            CommandBarButtonHyperlinkType: -1,
            Condition: true,
            Connector: true,
            ConnectorType: -1,
            ContactCardAddressType: true,
            ContactCardStyle: -1,
            ContactCardType: true,
            ContentVerificationResults: 'contverres',
            ControlOLEUsage: true,
            ControlType: -1,
            CTPDockPosition: true,
            CTPDockPositionRestrict: true,
            CustomXMLNodeType: -1,
            CustomXMLValidationErrorType: -1,
            DateTimeFormat: -1,
            DiagramNodeType: -2,
            DiagramType: -1,
            DistributeCmd: -1,
            DocInspectorStatus: true,
            DocProperties: 'PropertyType',
            EditingType: -1,
            Encoding: true,
            EncryptionCipherMode: 'cipherMode',
            EncryptionProviderDetail: 'encprovdet',
            ExtraInfoMethod: 2,
            ExtrusionColorType: -1,
            FarEastLineBreakLanguageID: 'MsoFarEastLineBreakLanguage',
            FeatureInstall: true,
            FileDialogType: -1,
            FileDialogView: true,
            FileFindListBy: false,
            FileFindOptions: 2,
            FileFindSortBy: -2,
            FileFindView: 2,
            FileNewAction: false,
            FileNewSection: false,
            FileType: true,
            FileValidationMode: -1,
            FillType: -1,
            FilterComparison: true,
            FilterConjunction: true,
            FlipCmd: -1,
            FontLanguageIndex: 'Theme',
            GradientColorType: -2,
            GradientStyle: -1,
            HorizontalAnchor: false,
            HTMLProjectOpen: true,
            HTMLProjectState: true,
            HyperlinkType: -1,
            IconType: -1,
            IodGroup: true,
            LanguageID: true,
            LanguageIDHidden: -1,
            LastModified: true,
            LightRigType: -1,
            LineCapStyle: -1,
            LineDashStyle: -2,
            LineFillType: -1,
            LineJoinStyle: -1,
            LineStyle: -1,
            MailFormat: 'mf',
            MenuAnimation: true,
            MergeCmd: -1,
            MetaPropertyType: true,
            MixedType: false,
            ModeType: -1,
            MoveRow: true,
            NumberedBulletStyle: 'Bullet',
            OLEMenuGroup: true,
            OrgChartLayoutType: -1,
            OrgChartOrientation: true,
            Orientation: true,
            ParagraphAlignment: 'Align',
            PathFormat: 'PathType',
            PatternType: -1,
            Permission: true,
            PickerField: true,
            PictureColorType: -2,
            PictureCompress: true,
            PictureEffectType: 'Effect',
            PresetCamera: false,
            PresetExtrusionDirection: false,
            PresetGradientType: false,
            PresetLightingDirection: false,
            PresetLightingSoftness: false,
            PresetMaterial: false,
            PresetTextEffect: 1,
            PresetTextEffectShape: 1,
            PresetTexture: false,
            PresetThreeDFormat: false,
            ReflectionType: true,
            RelativeNodePosition: false,
            RibbonControlSize: 0,
            ScaleFrom: true,
            ScreenSize: true,
            ScriptLanguage: true,
            ScriptLocation: true,
            SearchIn: true,
            SegmentType: -1,
            ShadowStyle: true,
            ShadowType: -1,
            ShapeStyleIndex: false,
            ShapeType: false,
            SharedWorkspaceTaskPriority: true,
            SharedWorkspaceTaskStatus: true,
            SignatureDetail: 'sigdet',
            SignatureLineImage: 'siglnimg',
            SignatureProviderDetail: 'sigprovdet',
            SignatureSubset: true,
            SignatureType: 'sigtype',
            SmartArtNodePosition: -1,
            SmartArtNodeType: true,
            SoftEdgeType: true,
            SortBy: true,
            SortOrder: true,
            SyncAvailableType: -1,
            SyncCompareType: -1,
            SyncConflictResolutionType: -2,
            SyncErrorType: -1,
            SyncEventType: -1,
            SyncStatusType: -1,
            SyncVersionType: -1,
            TabStopType: -1,
            TargetBrowser: true,
            TextCaps: false,
            TextChangeCase: 2,
            TextCharWrap: false,
            TextDirection: true,
            TextEffectAlignment: true,
            TextFontAlign: 1,
            TextOrientation: true,
            TextStrike: false,
            TextTabAlign: 1,
            TextUnderlineType: false,
            TextureAlignment: -1,
            TextureType: -1,
            ThemeColorIndex: false,
            ThemeColorSchemeIndex: -2,
            TriState: false,
            VerticalAnchor: false,
            WarpFormat: true,
            WizardActType: -1,
            WizardMsgType: -1,
            ZOrderCmd: false
        };
        const xl_dic = {
            AboveBelow: false,
            ActionType: true,
            Allocation: false,
            AllocationMethod: false,
            AllocationValue: "Allocate",
            ApplicationInternational: false,
            ApplyNamesOrder: false,
            ArabicModes: -1,
            ArrangeStyle: true,
            ArrowHeadLength: true,
            ArrowHeadStyle: true,
            ArrowHeadWidth: true,
            AutoFillType: false,
            AutoFilterOperator: false,
            AxisCrosses: true,
            AxisGroup: false,
            AxisType: false,
            Background: true,
            BarShape: false,
            BordersIndex: false,
            BorderWeight: false,
            BuiltInDialog: 2,
            CalcFor: false,
            CalcMemNumberFormatType: false,
            CalculatedMemberType: -2,
            Calculation: true,
            CalculationInterruptKey: false,
            CalculationState: false,
            CategoryLabelLevel: true,
            CategoryType: false,
            CellChangedState: -2,
            CellInsertionMode: false,
            CellType: true,
            ChartElementPosition: true,
            ChartGallery: false,
            ChartItem: false,
            ChartLocation: 1,
            ChartPicturePlacement: false,
            ChartPictureType: false,
            ChartSplitType: "Split",
            ChartType: false,
            CheckInVersionType: -2,
            ClipboardFormat: true,
            CmdType: -1,
            ColorIndex: true,
            ColumnDataType: false,
            CommandUnderlines: true,
            CommentDisplayMode: false,
            ConditionValueTypes: -1,
            ConnectionType: true,
            ConsolidationFunction: false,
            Constants: false,
            ContainsOperator: false,
            CopyPictureFormat: false,
            CorruptLoad: false,
            Creator: true,
            CredentialsMethod: true,
            CubeFieldSubType: -3,
            CubeFieldType: false,
            CutCopyMode: false,
            CVError: "Err",
            DataBarAxisPosition: -1,
            DataBarBorderType: false,
            DataBarFillType: -1,
            DataBarNegativeColorType: -3,
            DataLabelPosition: 1,
            DataLabelSeparator: true,
            DataLabelsType: "DataLabelsShow",
            DataSeriesDate: false,
            DataSeriesType: false,
            DeleteShiftDirection: "Shift",
            Direction: false,
            DisplayBlanksAs: false,
            DisplayDrawingObjects: false,
            DisplayUnit: false,
            DupeUnique: false,
            DVAlertStyle: "ValidAlert",
            DVType: "Validate",
            DynamicFilterCriteria: "Filter",
            EditionFormat: false,
            EditionOptionsOption: false,
            EditionType: false,
            EnableCancelKey: false,
            EnableSelection: false,
            EndStyleCap: false,
            ErrorBarDirection: false,
            ErrorBarInclude: true,
            ErrorBarType: true,
            ErrorChecks: false,
            FileAccess: false,
            FileFormat: false,
            FileValidationPivotMode: -1,
            FillWith: true,
            FilterAction: -1,
            FilterAllDatesInPeriod: true,
            FilterStatus: true,
            FindLookIn: false,
            FixedFormatQuality: 2,
            FixedFormatType: 2,
            FormatConditionOperator: false,
            FormatConditionType: false,
            FormatFilterTypes: "Filter",
            FormControl: false,
            FormulaLabel: false,
            GenerateTableRefs: -1,
            GradientFillType: -1,
            HAlign: true,
            HebrewModes: false,
            HighlightChangesTime: false,
            HtmlType: -1,
            Icon: true,
            IconSet: false,
            IMEMode: true,
            ImportDataAs: false,
            InsertFormatOrigin: "FormatFrom",
            InsertShiftDirection: "Shift",
            LayoutFormType: false,
            LayoutRowType: false,
            LegendPosition: true,
            LineStyle: false,
            Link: false,
            LinkInfo: false,
            LinkInfoType: false,
            LinkStatus: true,
            LinkType: true,
            ListConflict: true,
            ListDataType: true,
            ListObjectSourceType: "Src",
            LocationInTable: false,
            LookAt: false,
            LookFor: true,
            MailSystem: false,
            MarkerStyle: true,
            MeasurementUnits: false,
            ModelChangeSource: "ChangeBy",
            MouseButton: false,
            MousePointer: false,
            MSApplication: "Microsoft",
            OartHorizontalOverflow: true,
            OartVerticalOverflow: true,
            ObjectSize: false,
            OLEType: false,
            OLEVerb: false,
            Order: false,
            Orientation: false,
            PageBreak: true,
            PageBreakExtent: -1,
            PageOrientation: false,
            PaperSize: -1,
            ParameterDataType: "ParamType",
            ParameterType: false,
            PasteSpecialOperation: true,
            PasteType: -1,
            Pattern: true,
            PhoneticAlignment: "PhoneticAlign",
            PhoneticCharacterType: false,
            PictureAppearance: false,
            PictureConvertorType: false,
            PieSliceIndex: false,
            PieSliceLocation: false,
            PivotCellType: -1,
            PivotConditionScope: false,
            PivotFieldCalculation: false,
            PivotFieldDataType: false,
            PivotFieldOrientation: false,
            PivotFieldRepeatLabels: false,
            PivotFilterType: false,
            PivotFormatType: false,
            PivotLineType: -1,
            PivotTableMissingItems: 2,
            PivotTableSourceType: false,
            PivotTableVersionList: -1,
            Placement: false,
            Platform: false,
            PortugueseReform: -1,
            PrintErrors: true,
            PrintLocation: -1,
            Priority: true,
            PropertyDisplayedIn: "DisplayPropertyIn",
            ProtectedViewCloseReason: -1,
            ProtectedViewWindowState: false,
            PTSelectionMode: false,
            QueryType: false,
            QuickAnalysisMode: false,
            RangeAutoFormat: true,
            RangeValueDataType: -2,
            ReadingOrder: false,
            ReferenceStyle: false,
            ReferenceType: false,
            RemoveDocInfoType: "RDI",
            RgbColor: "rgb",
            RobustConnect: false,
            RoutingSlipDelivery: false,
            RoutingSlipStatus: false,
            RowCol: false,
            RunAutoMacro: "Auto",
            SaveAction: false,
            SaveAsAccessMode: false,
            SaveConflictResolution: false,
            ScaleType: false,
            SearchDirection: false,
            SearchOrder: false,
            SearchWithin: 1,
            SeriesNameLevel: true,
            SheetType: false,
            SheetVisibility: false,
            SizeRepresents: -1,
            SlicerCacheType: false,
            SlicerCrossFilterType: false,
            SlicerSort: true,
            SmartTagControlType: -1,
            SmartTagDisplayMode: false,
            SortDataOption: -2,
            SortMethod: false,
            SortMethodOld: false,
            SortOn: true,
            SortOrder: false,
            SortOrientation: false,
            SortType: -1,
            SourceType: -1,
            SpanishModes: -1,
            SparklineRowCol: -2,
            SparkScale: true,
            SparkType: false,
            SpeakDirection: false,
            SpecialCellsValue: false,
            StdColorScale: 1,
            SubscribeToFormat: false,
            SubtotalLocationType: false,
            SubtototalLocationType: false,
            SummaryColumn: -1,
            SummaryReportType: false,
            SummaryRow: false,
            TableStyleElementType: false,
            TabPosition: true,
            TextParsingType: false,
            TextQualifier: true,
            TextVisualLayoutType: false,
            ThemeColor: true,
            ThemeFont: true,
            ThreadMode: true,
            TickLabelOrientation: true,
            TickLabelPosition: true,
            TickMark: true,
            TimelineLevel: true,
            TimePeriods: false,
            TimeUnit: false,
            ToolbarProtection: false,
            TopBottom: false,
            TotalsCalculation: true,
            TrendlineType: false,
            UnderlineStyle: true,
            UpdateLinks: true,
            VAlign: true,
            WBATemplate: "WBAT",
            WebFormatting: true,
            WebSelectionType: false,
            WindowState: false,
            WindowType: false,
            WindowView: false,
            XLMMacroType: false,
            XmlExportResult: -1,
            XmlImportResult: -1,
            XmlLoadOption: -1,
            YesNoGuess: false
        };
        /**
         * WPS公共枚举大组对象
         */
        globalThis.kso = createEnumGroups({}, 'mso', kso_dic);
        /**
         * WPS表格枚举大组对象
         */
        globalThis.xl = createEnumGroups({}, 'xl', xl_dic);
    }
}
