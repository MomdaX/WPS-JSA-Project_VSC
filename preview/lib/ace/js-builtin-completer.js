// JS 内置对象补全器 - 提供 Array, String, Math, Date 等 JavaScript 内置对象的属性和方法补全
(function() {

  var jsBuiltins = {
    // Array 原型方法
    "Array": [
      { name: "length", type: "property", valueType: "number", desc: "数组长度" },
      { name: "push", type: "method", valueType: "number", desc: "在数组末尾添加元素，返回新长度" },
      { name: "pop", type: "method", valueType: "*", desc: "移除并返回数组最后一个元素" },
      { name: "shift", type: "method", valueType: "*", desc: "移除并返回数组第一个元素" },
      { name: "unshift", type: "method", valueType: "number", desc: "在数组开头添加元素，返回新长度" },
      { name: "concat", type: "method", valueType: "Array", desc: "合并数组，返回新数组" },
      { name: "join", type: "method", valueType: "string", desc: "用指定分隔符连接所有元素为字符串" },
      { name: "slice", type: "method", valueType: "Array", desc: "返回数组的浅拷贝片段" },
      { name: "splice", type: "method", valueType: "Array", desc: "删除/替换/插入元素，返回被删元素数组" },
      { name: "indexOf", type: "method", valueType: "number", desc: "返回元素首次出现索引，不存在返回 -1" },
      { name: "lastIndexOf", type: "method", valueType: "number", desc: "返回元素最后出现索引" },
      { name: "includes", type: "method", valueType: "boolean", desc: "判断数组是否包含指定值" },
      { name: "forEach", type: "method", valueType: "void", desc: "对每个元素执行回调函数" },
      { name: "map", type: "method", valueType: "Array", desc: "对每个元素执行回调，返回新数组" },
      { name: "filter", type: "method", valueType: "Array", desc: "过滤出满足条件的元素，返回新数组" },
      { name: "reduce", type: "method", valueType: "*", desc: "累积计算，返回单个结果值" },
      { name: "reduceRight", type: "method", valueType: "*", desc: "从右向左累积计算" },
      { name: "find", type: "method", valueType: "*", desc: "返回第一个满足条件的元素" },
      { name: "findIndex", type: "method", valueType: "number", desc: "返回第一个满足条件的元素索引" },
      { name: "some", type: "method", valueType: "boolean", desc: "判断是否存在满足条件的元素" },
      { name: "every", type: "method", valueType: "boolean", desc: "判断是否所有元素都满足条件" },
      { name: "sort", type: "method", valueType: "Array", desc: "对数组排序（原地）" },
      { name: "reverse", type: "method", valueType: "Array", desc: "反转数组顺序（原地）" },
      { name: "flat", type: "method", valueType: "Array", desc: "扁平化嵌套数组" },
      { name: "flatMap", type: "method", valueType: "Array", desc: "map 后再扁平化一层" },
      { name: "fill", type: "method", valueType: "Array", desc: "用固定值填充数组" },
      { name: "copyWithin", type: "method", valueType: "Array", desc: "在数组内复制片段" },
      { name: "entries", type: "method", valueType: "Iterator", desc: "返回键值对迭代器" },
      { name: "keys", type: "method", valueType: "Iterator", desc: "返回索引迭代器" },
      { name: "values", type: "method", valueType: "Iterator", desc: "返回元素值迭代器" },
      { name: "at", type: "method", valueType: "*", desc: "返回指定索引元素，支持负数" },
      { name: "toString", type: "method", valueType: "string", desc: "返回逗号分隔的字符串" }
    ],

    // String 原型方法
    "String": [
      { name: "length", type: "property", valueType: "number", desc: "字符串长度" },
      { name: "charAt", type: "method", valueType: "string", desc: "返回指定索引的字符" },
      { name: "charCodeAt", type: "method", valueType: "number", desc: "返回指定索引字符的 Unicode" },
      { name: "concat", type: "method", valueType: "string", desc: "拼接字符串" },
      { name: "indexOf", type: "method", valueType: "number", desc: "返回子串首次出现位置" },
      { name: "lastIndexOf", type: "method", valueType: "number", desc: "返回子串最后出现位置" },
      { name: "includes", type: "method", valueType: "boolean", desc: "判断是否包含子串" },
      { name: "startsWith", type: "method", valueType: "boolean", desc: "判断是否以子串开头" },
      { name: "endsWith", type: "method", valueType: "boolean", desc: "判断是否以子串结尾" },
      { name: "slice", type: "method", valueType: "string", desc: "提取字符串片段" },
      { name: "substring", type: "method", valueType: "string", desc: "提取两个索引间的字符" },
      { name: "substr", type: "method", valueType: "string", desc: "从指定位置提取指定长度" },
      { name: "split", type: "method", valueType: "Array", desc: "按分隔符拆分为数组" },
      { name: "replace", type: "method", valueType: "string", desc: "替换匹配的内容" },
      { name: "replaceAll", type: "method", valueType: "string", desc: "替换所有匹配的内容" },
      { name: "match", type: "method", valueType: "Array", desc: "正则匹配，返回匹配结果" },
      { name: "search", type: "method", valueType: "number", desc: "正则搜索，返回首次匹配位置" },
      { name: "toLowerCase", type: "method", valueType: "string", desc: "转为小写" },
      { name: "toUpperCase", type: "method", valueType: "string", desc: "转为大写" },
      { name: "trim", type: "method", valueType: "string", desc: "去除首尾空白" },
      { name: "trimStart", type: "method", valueType: "string", desc: "去除开头空白" },
      { name: "trimEnd", type: "method", valueType: "string", desc: "去除末尾空白" },
      { name: "padStart", type: "method", valueType: "string", desc: "开头填充到指定长度" },
      { name: "padEnd", type: "method", valueType: "string", desc: "末尾填充到指定长度" },
      { name: "repeat", type: "method", valueType: "string", desc: "重复字符串指定次数" },
      { name: "at", type: "method", valueType: "string", desc: "返回指定索引字符，支持负数" }
    ],

    // Math 静态方法
    "Math": [
      { name: "PI", type: "property", valueType: "number", desc: "圆周率 π ≈ 3.14159" },
      { name: "E", type: "property", valueType: "number", desc: "自然常数 e ≈ 2.718" },
      { name: "abs", type: "method", valueType: "number", desc: "返回绝对值" },
      { name: "ceil", type: "method", valueType: "number", desc: "向上取整" },
      { name: "floor", type: "method", valueType: "number", desc: "向下取整" },
      { name: "round", type: "method", valueType: "number", desc: "四舍五入取整" },
      { name: "max", type: "method", valueType: "number", desc: "返回最大值" },
      { name: "min", type: "method", valueType: "number", desc: "返回最小值" },
      { name: "pow", type: "method", valueType: "number", desc: "幂运算" },
      { name: "sqrt", type: "method", valueType: "number", desc: "平方根" },
      { name: "random", type: "method", valueType: "number", desc: "返回 [0, 1) 随机数" },
      { name: "sin", type: "method", valueType: "number", desc: "正弦" },
      { name: "cos", type: "method", valueType: "number", desc: "余弦" },
      { name: "tan", type: "method", valueType: "number", desc: "正切" },
      { name: "asin", type: "method", valueType: "number", desc: "反正弦" },
      { name: "acos", type: "method", valueType: "number", desc: "反余弦" },
      { name: "atan", type: "method", valueType: "number", desc: "反正切" },
      { name: "log", type: "method", valueType: "number", desc: "自然对数" },
      { name: "log10", type: "method", valueType: "number", desc: "以 10 为底的对数" },
      { name: "sign", type: "method", valueType: "number", desc: "返回数字符号 (-1, 0, 1)" },
      { name: "trunc", type: "method", valueType: "number", desc: "截断小数部分" }
    ],

    // Number 静态属性/方法
    "Number": [
      { name: "MAX_VALUE", type: "property", valueType: "number", desc: "最大正数" },
      { name: "MIN_VALUE", type: "property", valueType: "number", desc: "最小正数" },
      { name: "NaN", type: "property", valueType: "number", desc: "Not a Number" },
      { name: "isNaN", type: "method", valueType: "boolean", desc: "判断是否是 NaN" },
      { name: "isInteger", type: "method", valueType: "boolean", desc: "判断是否整数" },
      { name: "parseFloat", type: "method", valueType: "number", desc: "解析为浮点数" },
      { name: "parseInt", type: "method", valueType: "number", desc: "解析为整数" },
      { name: "toFixed", type: "method", valueType: "string", desc: "保留指定位数小数" },
      { name: "toString", type: "method", valueType: "string", desc: "转为字符串" }
    ],

    // Date 原型方法
    "Date": [
      { name: "now", type: "method", valueType: "number", desc: "返回当前时间戳（毫秒）" },
      { name: "getFullYear", type: "method", valueType: "number", desc: "获取四位年份" },
      { name: "getMonth", type: "method", valueType: "number", desc: "获取月份（0-11）" },
      { name: "getDate", type: "method", valueType: "number", desc: "获取日期（1-31）" },
      { name: "getDay", type: "method", valueType: "number", desc: "获取星期（0=周日）" },
      { name: "getHours", type: "method", valueType: "number", desc: "获取小时（0-23）" },
      { name: "getMinutes", type: "method", valueType: "number", desc: "获取分钟" },
      { name: "getSeconds", type: "method", valueType: "number", desc: "获取秒" },
      { name: "getTime", type: "method", valueType: "number", desc: "获取时间戳（毫秒）" },
      { name: "setFullYear", type: "method", valueType: "number", desc: "设置年份" },
      { name: "setMonth", type: "method", valueType: "number", desc: "设置月份" },
      { name: "setDate", type: "method", valueType: "number", desc: "设置日期" },
      { name: "setHours", type: "method", valueType: "number", desc: "设置小时" },
      { name: "setMinutes", type: "method", valueType: "number", desc: "设置分钟" },
      { name: "setSeconds", type: "method", valueType: "number", desc: "设置秒" },
      { name: "toISOString", type: "method", valueType: "string", desc: "转为 ISO 格式字符串" },
      { name: "toLocaleDateString", type: "method", valueType: "string", desc: "转为本地日期字符串" },
      { name: "toLocaleTimeString", type: "method", valueType: "string", desc: "转为本地时间字符串" }
    ],

    // Object 静态方法
    "Object": [
      { name: "keys", type: "method", valueType: "Array", desc: "返回所有可枚举属性名" },
      { name: "values", type: "method", valueType: "Array", desc: "返回所有可枚举属性值" },
      { name: "entries", type: "method", valueType: "Array", desc: "返回 [key, value] 数组" },
      { name: "assign", type: "method", valueType: "Object", desc: "合并属性到目标对象" },
      { name: "create", type: "method", valueType: "Object", desc: "以指定原型创建新对象" },
      { name: "defineProperty", type: "method", valueType: "Object", desc: "定义/修改属性" },
      { name: "freeze", type: "method", valueType: "Object", desc: "冻结对象使其不可修改" },
      { name: "hasOwnProperty", type: "method", valueType: "boolean", desc: "判断是否自有属性" }
    ],

    // JSON 静态方法
    "JSON": [
      { name: "parse", type: "method", valueType: "*", desc: "解析 JSON 字符串为对象" },
      { name: "stringify", type: "method", valueType: "string", desc: "将对象序列化为 JSON 字符串" }
    ],

    // RegExp 原型
    "RegExp": [
      { name: "test", type: "method", valueType: "boolean", desc: "测试字符串是否匹配" },
      { name: "exec", type: "method", valueType: "Array|null", desc: "执行匹配，返回匹配结果" }
    ],

    // Promise 静态 + 原型
    "Promise": [
      { name: "then", type: "method", valueType: "Promise", desc: "添加成功/失败回调" },
      { name: "catch", type: "method", valueType: "Promise", desc: "添加错误处理回调" },
      { name: "finally", type: "method", valueType: "Promise", desc: "添加最终执行回调" },
      { name: "resolve", type: "method", valueType: "Promise", desc: "返回已解决的 Promise" },
      { name: "reject", type: "method", valueType: "Promise", desc: "返回已拒绝的 Promise" },
      { name: "all", type: "method", valueType: "Promise", desc: "等待所有 Promise 完成" },
      { name: "race", type: "method", valueType: "Promise", desc: "返回最先完成的 Promise" }
    ],

    // console 方法
    "console": [
      { name: "log", type: "method", valueType: "void", desc: "输出日志信息" },
      { name: "warn", type: "method", valueType: "void", desc: "输出警告信息" },
      { name: "error", type: "method", valueType: "void", desc: "输出错误信息" },
      { name: "info", type: "method", valueType: "void", desc: "输出信息性消息" },
      { name: "debug", type: "method", valueType: "void", desc: "输出调试信息" },
      { name: "table", type: "method", valueType: "void", desc: "以表格形式显示数据" },
      { name: "time", type: "method", valueType: "void", desc: "启动计时器" },
      { name: "timeEnd", type: "method", valueType: "void", desc: "停止计时器并输出耗时" },
      { name: "assert", type: "method", valueType: "void", desc: "断言测试，失败时输出错误" }
    ],

    // Map 原型
    "Map": [
      { name: "size", type: "property", valueType: "number", desc: "键值对数量" },
      { name: "set", type: "method", valueType: "Map", desc: "设置键值对" },
      { name: "get", type: "method", valueType: "*", desc: "获取指定键的值" },
      { name: "has", type: "method", valueType: "boolean", desc: "判断是否存在指定键" },
      { name: "delete", type: "method", valueType: "boolean", desc: "删除指定键值对" },
      { name: "clear", type: "method", valueType: "void", desc: "清空所有键值对" },
      { name: "keys", type: "method", valueType: "Iterator", desc: "返回键的迭代器" },
      { name: "values", type: "method", valueType: "Iterator", desc: "返回值的迭代器" },
      { name: "entries", type: "method", valueType: "Iterator", desc: "返回键值对迭代器" },
      { name: "forEach", type: "method", valueType: "void", desc: "对每个键值对执行回调" }
    ],

    // Set 原型
    "Set": [
      { name: "size", type: "property", valueType: "number", desc: "元素数量" },
      { name: "add", type: "method", valueType: "Set", desc: "添加元素" },
      { name: "has", type: "method", valueType: "boolean", desc: "判断是否存在指定元素" },
      { name: "delete", type: "method", valueType: "boolean", desc: "删除指定元素" },
      { name: "clear", type: "method", valueType: "void", desc: "清空所有元素" },
      { name: "values", type: "method", valueType: "Iterator", desc: "返回元素值迭代器" },
      { name: "forEach", type: "method", valueType: "void", desc: "对每个元素执行回调" }
    ]
  };

  var jsBuiltinCompleter = {
    getCompletions: function(editor, session, pos, prefix, callback) {
      var results = [];
      var line = session.getLine(pos.row);
      var beforeCursor = line.substring(0, pos.column);

      // 点补全：Object.member
      var dotMatch = beforeCursor.match(/([a-zA-Z_][a-zA-Z0-9_]*)\s*\.\s*([a-zA-Z0-9_]*)$/);
      if (dotMatch) {
        var objName = dotMatch[1];
        var propPrefix = dotMatch[2].toLowerCase();
        var members = jsBuiltins[objName];
        if (members) {
          for (var i = 0; i < members.length; i++) {
            var m = members[i];
            if (propPrefix === '' || m.name.toLowerCase().indexOf(propPrefix) === 0) {
              var isMethod = m.type === 'method';
              results.push({
                caption: m.name,
                value: objName + '.' + m.name + (isMethod ? '()' : ''),
                meta: m.valueType || m.type,
                className: isMethod ? 'jsac-method' : 'jsac-prop',
                docHTML: '<div style="max-width:400px"><b>' + objName + '.' + m.name + '</b> — ' + m.type + '<br>' + m.desc + '</div>',
                score: 800 - i
              });
            }
          }
        }
        callback(null, results);
        return;
      }

      // 关键词补全：内置对象名
      if (!prefix || prefix.length === 0) { callback(null, []); return; }
      var preLower = prefix.toLowerCase();
      var objKeys = Object.keys(jsBuiltins);
      for (var j = 0; j < objKeys.length; j++) {
        if (objKeys[j].toLowerCase().indexOf(preLower) === 0) {
          results.push({
            caption: objKeys[j],
            value: objKeys[j],
            meta: "JS Built-in",
            score: 600
          });
        }
      }

      callback(null, results);
    }
  };

  window.jsBuiltinCompleter = jsBuiltinCompleter;
})();
