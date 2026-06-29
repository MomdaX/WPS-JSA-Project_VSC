import _ from 'lodash'
import { FileSystem } from '../types/JSA-Common'
import { Range } from '../types/et'

/** JS宏程序入口 */
function __main__() {
    const wb = Application;
    const sht = wb.Sheets(1);

    const url = 'http://xinfadi.com.cn/getPriceData.html';
    const paramsConfig = {
        limit: 20,
        current: 1,
        pubDateStartTime: "2026/05/01",
        pubDateEndTime: "",
        prodPcatid: "",
        prodCatid: "",
        prodName: ""
    };
    const postData = buildQueryString(paramsConfig);

    const xhr = new XMLHttpRequest();
    xhr.open('POST', url, false);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    xhr.setRequestHeader('Origin', 'http://xinfadi.com.cn');
    xhr.setRequestHeader('Referer', 'http://xinfadi.com.cn/priceDetail.html');
    xhr.send(postData);

    if (xhr.status === 200) {
        const res = JSON.parse(xhr.responseText);
        const list = res.list || [];

        const headers = ['一级分类', '二级分类', '品名', '最低价', '平均价', '最高价', '规格', '产地', '单位', '发布日期'];
        sht.Range('A1:J1').Value2 = [headers];

        if (list.length > 0) {
        const dataRows = list.map(item => [
            item.prodPcatid || '',
            item.prodCatid || '',
            item.prodName || '',
            item.lowPrice || '',
            item.avgPrice || '',
            item.highPrice || '',
            item.specInfo || '',
            item.origin || '',
            item.unit || '',
            item.pubDate || ''
        ]);
        sht.Range('A2').Resize(list.length, headers.length).Value2 = dataRows;
        }
    }
}

// 将对象转为 url 编码后的 query 字符串
function buildQueryString(obj) {
    const arr = [];
    for (const key in obj) {
        const val = obj[key];
        arr.push(`${encodeURIComponent(key)}=${encodeURIComponent(val)}`);
    }
    return arr.join("&");
}