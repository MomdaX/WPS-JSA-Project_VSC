
declare global {
    /**
 * 铭佬对 Lodash 库的扩展
 */
    namespace Ming_Lodash {

        /**
         * 透视表值聚合模式
         * - `sum`: 求和
         * - `min`: 取最小值
         * - `max`: 取最大值
         * - `cnt`: 计数操作，undefined值或null值不进行计数
         * - `avg`: 求平均值，undefined值或null值不进行计算
         * - `first`: 取第一个值
         * - `last`: 取最后一个值
         * - `join`: 用英文逗号连接透视值
         * - `unzip_sum`: 对二维数组进行同位索引求和
         */
        type PivotAggregateMode = 'sum' | 'min' | 'max' | 'avg' | 'cnt' | 'first' | 'last' | "join" | 'unzip_sum';
        /**
         * 透视表字段排序模式
         * - `asc`: 升序
         * - `desc`: 降序
         */
        type PivotFieldSortMode = 'asc' | 'desc';
        /**
         * 透视表元素(透视行字段, 透视列字段, 透视值字段)的确定方式
         * - `identity`: 元素本身, 等同于恒等函数: `x => x`
         * - `repivot`: 如果数据结构本身就是一个透视表结构, 则可以进行再次透视, 透视列字段必须处在数据源中的第一个位置。
         */
        type PivotElementsMode = 'identity' | 'repivot';
        /**
         * 确定透视表的三个透视元素(透视行字段, 透视列字段, 透视值字段)的方式
         * @param element - `source` 数组里的元素
         * @param index - `element`元素在`source`数组里的索引位置
         * @param source - 源数组
         * @returns 返回一个可迭代对象(集合), 第1个元素为透视行字段, 第2个元素为透视列字段, 第3个元素为透视值。也可以显式返回一个null值, 表示跳过本次透视操作。
         */
        type PivotIteratee = (element: any, index: number, source: any[]) => Iterable<any> | null;
        /**
         * 确定透视表元素类型。可以是数组, 也可以是函数，也可以是字符串。
         * - 数组: 第1个元素作为透视行字段, 第2个元素作为透视列字段, 第3个元素作为透视值字段。
         * - 回调函数{@link PivotIteratee}
         * - 字符串: 约定的字符串{@link PivotElementsMode} 。
         */
        type PivotElements = [number, number, number, ...any] | PivotIteratee | PivotElementsMode;
        /**
         * 透视表值聚合回调函数。
         * @param aggregatedArray - 聚合数组
         * @param rowField - 透视行字段
         * @param colField - 透视列字段
         * @returns 返回值将作为最终透视表的值
         */
        type PivotAggValueCallBack = (aggregatedArray: any[], rowField: any, colField: any) => any;
        /**
         * 透视表值合并回调函数。
         * @param oldVal - 旧值
         * @param newVal - 新值
         * @param rowField - 行字段
         * @param colField - 列字段
         * @returns 返回值将作为新的透视值
         */
        type PivotMergeCallBack = (oldVal: any, newVal: any, rowField: any, colField: any) => any;
        /**
         * 透视表每行的聚合值回调函数。
         * @param rowList - 透视表每行的透视值列表
         * @param rowField - 行字段
         * @returns 返回值将作为透视表当前行的聚合值
         */
        type PivotRowAggValueCallBack = (rowList: any[], rowField: any) => any;
        /**
         * 透视表每列的聚合值回调函数。
         * @param colList - 透视表每列的透视值列表
         * @param colField - 列字段
         * @returns 返回值将作为透视表当前列的聚合值
         */
        type PivotColAggValueCallBack = (colList: any[], colField: any) => any;
        /**
         * 透视表字段排序回调函数。
         * @param a - 字段1
         * @param b - 字段2
         * @returns 返回值大于0表示a排在前面, 小于0表示b排在前面, 等于0表示不排序
         */
        type PivotFieldSortCallBack = (a: any, b: any) => any;
        /**
         * 透视表操作配置选项，其所有属性都是可选的，只有提供{@link PivotOptions.merge}或{@link PivotOptions.agg}时才会进行透视值的聚合操作。
         */
        type PivotOptions = {
            /** 透视表标题，可以是任意类型的值， 默认为`undefined`值 */
            title?: any;
            /** 透视行列字段发生重复时, 透视值的合并方式 */
            merge?: PivotMergeCallBack;
            /** 透视表值的聚合方式 */
            agg?: PivotAggregateMode | PivotAggValueCallBack;
            /** 当透视值(行字段与列字段的交叉处)没有内容时, 指定填充的值(可以是任意类型的值) */
            fill?: any;
            /** 透视表每行的聚合方式，为数组时第0个元素(rowTotalTitle)为透视行的标题，第1个元素(aggMode)为行聚合方式；为回调函数时为行聚合方式 */
            r_agg?: [rowTotalTitle: any, aggMode: PivotAggregateMode | PivotRowAggValueCallBack] | PivotAggregateMode | PivotRowAggValueCallBack;
            /** 透视表每列的聚合方式，为数组时第0个元素(colTotalTitle)为透视列的标题，第1个元素(aggMode)为列聚合方式；为回调函数时为列聚合方式 */
            c_agg?: [colTotalTitle: any, aggMode: PivotAggregateMode | PivotColAggValueCallBack] | PivotAggregateMode | PivotColAggValueCallBack;
            /** 对透视表每一行的结构进行n层扁平化处理 */
            flatten?: number;
            /** 透视表行字段排序方式 */
            r_sort?: PivotFieldSortMode | PivotFieldSortCallBack;
            /** 透视表列字段排序方式 */
            c_sort?: PivotFieldSortMode | PivotFieldSortCallBack;
            /** 返回的透视表是否包含表头 */
            header?: boolean;
        };
        /**
         * 在类型C的开头或结尾添加类型T
         */
        type Affix<C, T, M extends 'head' | 'tail'> = C extends string 
            ? M extends 'head' ? [T, C] : M extends 'tail' ? [C, T] : never
            : C extends Iterable<any> 
                ? M extends 'head' ? [T, ...C] : M extends 'tail' ? [...C, T] : never
                : M extends 'head' ? [T, C] : M extends 'tail' ? [C, T] : never
 

        interface LoDashStatic {
            /**
             * 数据透视函数
             */
            pivotBy: {
                /**
                 * 对数组进行透视操作。
                 * @param array - 要进行透视的数组
                 * @returns 透视表结构(第一列为行字段, 第一行为列字段)的二维数组
                 * @author 铭朝
                 */
                (array: any[] | any[][]): any[][];
                /**
                 * 对数组进行透视操作。
                 * @param array - 要进行透视的数组
                 * @param elements - 确定透视元素。可以是数组、函数、字符串。
                 * @returns 透视表结构(第一列为行字段, 第一行为列字段)的二维数组
                 * @author 铭朝
                 */
                (array: any[] | any[][], elements?: PivotElements): any[][];
                /**
                 * 对数组进行透视操作。
                 * @param array - 要进行透视的数组
                 * @param elements - 确定透视元素。
                 * @param agg - 约定好的表示聚合方式的字符串
                 * @returns 透视表结构(第一列为行字段, 第一行为列字段)的二维数组
                 * @since [2025/8/27] 2.2
                 * @author 铭朝
                 */
                (array: any[] | any[][], elements: PivotElements, agg?: PivotAggregateMode): any[][];
                /**
                 * 对数组进行透视操作。
                 * @param array - 要进行透视的数组
                 * @param elements - 确定透视元素。
                 * @param callbackFn - 透视表值聚合回调函数。
                 * @returns 透视表结构(第一列为行字段, 第一行为列字段)的二维数组
                 * @since [2025/8/27] 2.2
                 * @author 铭朝
                 */
                (array: any[] | any[][], elements: PivotElements, callbackFn?: PivotAggValueCallBack): any[][];
                /**
                 * 对数组进行透视操作。
                 * @param array - 要进行透视的数组
                 * @param elements - 确定透视元素。
                 * @param [options] - 透视表操作配置选项。
                 * @returns 透视表结构(第一列为行字段, 第一行为列字段)的二维数组
                 * @author 铭朝
                 */
                (array: any[] | any[][], elements: PivotElements, options?: PivotOptions): any[][];

                readonly modes: {
                    /**
                     * 透视表聚合方式集合。
                     * @remarks 返回的是原始引用, 谨慎修改。
                     */
                    readonly agg: Record<PivotAggregateMode, (arr: any[] | any[][]) => any>;
                    /**
                     * 透视表元素确定方式集合。
                     * @remarks 返回的是原始引用, 谨慎修改。
                     */
                    readonly elements: Record<PivotElementsMode, PivotIteratee>;
                    /**
                     * 透视表字段排序方式集合。
                     * @remarks 返回的是原始引用, 谨慎修改。
                     */
                    readonly sort: Record<PivotFieldSortMode, (a: any, b: any) => number>;
                }
            }

            /**
             * 输出数据并返回一个 {@link Et.Range} 对象。
             * @param data - 要输出的数据
             * @param addr - 要输出的单元格地址
             * @param sheet - 要输出的工作表名或工作表对象
             */
            to(data: Iterable<any>, addr: string, sheet?: string | Et.Workbook): Et.Range;

            /**
             * 立即窗口输出数据
             * @param data - 要输出的数据
             * @param isClear - 是否清除之前的内容
             */
            log(data: any, isClear: any): void

            /**
             * 向数据前插入元素，返回新数组。
             * @param data - 原始数据（可迭代对象时展开插入，否则作为整体放置于 value 之后）
             * @param value - 要插入的值，或接收 data 返回插入值的函数
             * @example
             * _.prepend([2, 3], 1) // [1, 2, 3]
             * _.prepend('bc', 'a') // ['a', 'bc']
             * _.prepend([2, 3], arr => arr.length) // [2, 2, 3]
             */
            prepend<C, T>(data: C, value: T | ((data: C) => T)): Affix<C, T, 'head'>

            /**
             * 向数据后追加元素，返回新数组。
             * @param data - 原始数据（可迭代对象时展开插入，否则作为整体放置于 value 之前）
             * @param value - 要追加的值，或接收 data 返回追加值的函数
             * @example
             * _.append([1, 2], 3) // [1, 2, 3]
             * _.append('ab', 'c') // ['ab', 'c']
             * _.append([1, 2], arr => arr.length) // [1, 2, 2]
             */
            append<C, T>(data: C, value: T | ((data: C) => T)): Affix<C, T, 'tail'>
        }

        interface LoDashImplicitWrapper<TValue> {
            /**
             * @see {@link Ming_Lodash.LoDashStatic.pivotBy}
             */
            pivotBy(elements?: PivotElements, agg?: PivotAggregateMode | PivotOptions | PivotAggValueCallBack): _.Collection<any[]>;

            /**
             * @see {@link Ming_Lodash.LoDashStatic.to}
             */
            to(addr: string, sheet?: string | Workbook): Et.Range;

            /**
             * @see {@link Ming_Lodash.LoDashStatic.log}
             */
            log(isClear: any): void

            /**
             * @see {@link Ming_Lodash.LoDashStatic.prepend}
             */
            prepend<T>(value: T): _.Collection<Ming_Lodash.Affix<TValue, T, 'head'>>
            /**
             * @see {@link Ming_Lodash.LoDashStatic.prepend}
             */
            prepend<T>(callbackFn: (data: TValue) => T): _.Collection<Ming_Lodash.Affix<TValue, T, 'head'>>

            /**
             * @see {@link Ming_Lodash.LoDashStatic.append}
             */
            append<T>(value: T): _.Collection<Ming_Lodash.Affix<TValue, T, 'tail'>>
            /**
             * @see {@link Ming_Lodash.LoDashStatic.append}
             */
            append<T>(callbackFn: (data: TValue) => T): _.Collection<Ming_Lodash.Affix<TValue, T, 'tail'>>
        }
    }
}

/**
 * 模块扩展：将 Ming_Lodash 的类型声明合并到 lodash 模块中，
 * 使得通过 `import * as _ from 'lodash'` 导入时可获得 Ming_Lodash 扩展的类型提示。
 */
declare module "lodash/index" {
    interface LoDashStatic extends Ming_Lodash.LoDashStatic { }
    interface LoDashImplicitWrapper<TValue> extends Ming_Lodash.LoDashImplicitWrapper<TValue> { }
}

export { }