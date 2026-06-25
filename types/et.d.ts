// 该文件定义WPS表格其JS宏下的全局对象或函数

import type {} from 'et-jsapi-declare'

declare global {

    namespace Et {
        interface Range extends Iterable<Range> {
            (): number | string | undefined | Date | boolean | Array<number | string | undefined | Date | boolean>
            (index: number): Range
            (index1: number, index2: number): Range
        }

        interface Sheets extends Iterable<Worksheet> {
            (name: string | number): Et.Worksheet
        }

        interface Worksheets extends Iterable<Worksheet> {
            (name: string | number): Et.Worksheet
        }

        interface Workbooks extends Iterable<Workbook> {
            (name: string | number): Et.Workbook
        }
    }
    
    /**
     * 该对象代表当前工作簿的所有工作表。
     */
    const Sheets: Et.Sheets

    /**
     * 该对象代表运行当前宏代码的工作簿。
     */
    const ThisWorkbook: Et.Workbook

    /**
     * 该对象代表当前工作簿的所有工作表。
     */
    const Worksheets: Et.Worksheets
    /**
     * 该对象代表当前选定的工作表。
     */
    const ActiveWorkbook: Et.Workbook

    /**
     * 该对象代表当前选定的工作表。
     */
    const ActiveSheet: Et.Worksheet

    /**
     * 表示所有单元格的集合。
     */
    const Cells: Et.Range

    /**
     * 获取所有行对象。
     */
    const Rows: Et.Range

    /**
     * 获取所有列对象。
     */
    const Columns: Et.Range

    /**
     * 该对象代表所有工作簿的集合。
     */
    const Workbooks: Et.Workbooks
}


export const Range: Et.Application['Range']