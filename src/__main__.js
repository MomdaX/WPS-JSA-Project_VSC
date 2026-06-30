import _ from 'lodash'
import { FileSystem } from '../types/JSA-Common'
import { Range } from '../types/et'

/** JS宏程序入口 */
function __main__() {
    Cells.Clear()
    let res=_.times(9).map(i=>_.times(++i).map(j=>`${++j}*${i}=${i*j}`))
    _.to(res,'A1')
}