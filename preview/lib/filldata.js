/*
 * filldata.js — WPS API 文档数据填充渲染库
 * 依赖 lodash.min.js，负责将 JSON 数据渲染到 HTML 模板中
 */

/* 主渲染入口：填充对象的所有内容 */
function FillObject(jsData) {
  if (_.isNil(jsData)) return;
  document.title = jsData.name + ' 对象';

  var tplHeader = document.getElementById('template_header');
  var tplMembers = document.getElementById('template_members');
  if (!tplHeader || !tplMembers) {
    console.error('找不到模板元素', tplHeader, tplMembers);
    return;
  }

  tplHeader.innerHTML = document.title;
  tplHeader.setAttribute('data-id', 'jsObject_' + jsData.name);

  FillObjectDescription(jsData);
  FillObjectSummary(jsData);
  tplMembers.setAttribute('data-id', 'jsMember_' + jsData.name);
  FillFunctionTable(jsData);
  FillPropertyTable(jsData);
  FillFunctionsDetail(jsData);
  FillPropertiesDetail(jsData);

  if (!_.isEmpty(jsData.platform)) {
    document.getElementById('template_platform').innerHTML = jsData.platform;
  }

  ScrollToElement(GetIdFromUrl());
}

/* 填充对象描述 */
function FillObjectDescription(jsData) {
  if (_.isEmpty(jsData.description)) return;
  var template_description = document.getElementById('template_description');
  template_description.innerHTML = '';
  var p = document.createElement('p');
  p.innerHTML = jsData.description;
  template_description.appendChild(p);
}

/* 填充对象详细说明 */
function FillObjectSummary(jsData) {
  var template_summary = document.getElementById('template_summary');
  if (_.isEmpty(jsData.summary)) {
    template_summary.innerHTML = '';
    return;
  }
  template_summary.innerHTML = '<p><b class="mainheaders">说明</b></p>';

  // 预处理：将 <p>xxx</p><div id="vstable">...<th>示例代码 → <div id="vstable">...<th><span>xxx</span>
  var summaryHtml = jsData.summary.replace(
    /<p>([\s\S]*?)<\/p>(\s*)<div id="vstable">([\s\S]*?)<th>示例代码/g,
    function(match, pContent, space, vsContent) {
      return '<div id="vstable">' + vsContent + '<th><span>' + pContent + '</span>';
    }
  );

  var p = document.createElement('p');
  p.innerHTML = summaryHtml;
  template_summary.appendChild(p);
}

/* 填充方法列表表格 */
function FillFunctionTable(jsData) {
  if (_.isEmpty(jsData.functions)) {
    document.getElementById('member_functions').innerHTML = '';
    return;
  }
  var tplFunctions = document.getElementById('member_functions');
  tplFunctions.innerHTML = '<p><b class="mainheaders">方法</b></p><div id="vstable"><table><thead><tr style="text-align:left;"><th class="icon-cell"></th><th class="name-cell">名称</th><th>说明</th></tr></thead><tbody></tbody></table></div>';
  var tplFuncs = tplFunctions.querySelector('tbody');

  _.forEach(jsData.functions, function(fItem) {
    var rowElem = document.createElement('tr');
    var itemId = jsData.name + '.' + fItem.name;
    rowElem.innerHTML =
      '<td class="icon-cell"><img src="img/methods.gif" alt="方法" style="width:32px;height:32px;"></td>' +
      '<td class="name-cell"><b><a href="javascript:void(0)" onclick="expandOnly(\'' + itemId + '\')">' + fItem.name + '</a></b></td>' +
      '<td class="desc-cell">' + (fItem.description || '') + '</td>';
    tplFuncs.appendChild(rowElem);
  });
}

/* 填充属性列表表格 */
function FillPropertyTable(jsData) {
  if (_.isEmpty(jsData.properties)) {
    document.getElementById('member_properties').innerHTML = '';
    return;
  }
  var tplProperties = document.getElementById('member_properties');
  tplProperties.innerHTML = '<p><b class="mainheaders">属性</b></p><div id="vstable"><table><thead><tr style="text-align:left;"><th class="icon-cell"></th><th class="name-cell">名称</th><th>说明</th></tr></thead><tbody></tbody></table></div>';
  var tplProps = tplProperties.querySelector('tbody');

  _.forEach(jsData.properties, function(pItem) {
    var rowElem = document.createElement('tr');
    var itemId = jsData.name + '.' + pItem.name;
    rowElem.innerHTML =
      '<td class="icon-cell"><img src="img/properties.gif" alt="属性" style="width:32px;height:32px;"></td>' +
      '<td class="name-cell"><b><a href="javascript:void(0)" onclick="expandOnly(\'' + itemId + '\')">' + pItem.name + '</a></b></td>' +
      '<td class="desc-cell">' + (pItem.description || '') + '</td>';
    tplProps.appendChild(rowElem);
  });
}

/* 填充方法详情区（折叠面板） */
function FillFunctionsDetail(jsData) {
  var functions_details = document.getElementById('functions_details');
  if (_.isEmpty(jsData.functions)) {
    functions_details.innerHTML = '';
    return;
  }
  functions_details.innerHTML = '<p><b class="mainheaders">成员方法</b>' +
    '<button id="toggleAllBtn" onclick="toggleAll()" ' +
    'style="float:right;padding:2px 10px;border:1px solid var(--color-primary);' +
    'background:rgba(0,180,216,0.1);color:var(--color-primary);border-radius:4px;' +
    'cursor:pointer;font-size:12px;line-height:1.6;">展开全部</button></p>' +
    '<div id="funcs_details_content"></div>';
  var tplDetailFuns = document.getElementById('funcs_details_content');
  _.forEach(jsData.functions, function(fItem) {
    tplDetailFuns.appendChild(createMemDetailHtml('functions', jsData.name, fItem));
  });
}

/* 填充属性详情区（折叠面板） */
function FillPropertiesDetail(jsData) {
  var properties_details = document.getElementById('properties_details');
  if (_.isEmpty(jsData.properties)) {
    properties_details.innerHTML = '';
    return;
  }
  properties_details.innerHTML = '<p><b class="mainheaders">成员属性</b></p><div id="props_details_content"></div>';
  var tplDetailProps = document.getElementById('props_details_content');
  _.forEach(jsData.properties, function(pItem) {
    tplDetailProps.appendChild(createMemDetailHtml('properties', jsData.name, pItem));
  });
}

/* 创建单个成员详情 HTML（折叠面板项） */
function createMemDetailHtml(editName, objName, eleData) {
  if (_.isNil(eleData)) {
    console.error('参数eleData不能为空');
    return document.createElement('div');
  }
  var itemId = objName + '.' + eleData.name;
  var elem = document.createElement('div');
  elem.className = 'detail-item';
  elem.id = itemId;

  var title = document.createElement('h4');
  title.innerHTML = '<b>' + itemId + '</b><span class="toggle-icon">▶</span>';
  title.className = 'detail-title';
  title.onclick = function() { toggleDetailItem(elem); };
  elem.appendChild(title);

  var elem_content = document.createElement('div');
  elem_content.className = 'detail-body';

  // 语法
  var express = eleData.name;
  if (editName === 'functions') {
    var paramNames = _.map(eleData.parameters, function(p) { return '<i>' + p.name + '</i>'; });
    express += '(' + paramNames.join(', ') + ')';
  }
  elem_content.innerHTML =
    '<p>' + (eleData.description || '') + '</p>' +
    '<p><b class="mainheaders">语法</b></p>' +
    '<p class="signature"><b><i style="font-weight:normal">express.</i><span>' + express + '</span></b></p>' +
    '<p><i style="font-weight:normal">express</i>&nbsp;&nbsp;&nbsp;<span>一个代表 <b>' + objName + '</b> 对象的变量。</span></p>';

  // 参数列表
  if (editName === 'functions' && !_.isEmpty(eleData.parameters)) {
    var pars = document.createElement('div');
    pars.innerHTML = '<p><b class="mainheaders">参数</b></p><table><tr><th>名称</th><th>必选/可选</th><th>数据类型</th><th>说明</th></tr></table>';
    elem_content.appendChild(pars);
    var paramTable = pars.getElementsByTagName('table')[0];

    _.forEach(eleData.parameters, function(pItem) {
      var tr = document.createElement('tr');
      tr.innerHTML =
        '<td><i>' + pItem.name + '</i></td>' +
        '<td>' + (pItem.optional ? '可选' : '必选') + '</td>' +
        '<td><b>' + (pItem.type || '') + '</b></td>' +
        '<td style="word-break:break-all">' + (pItem.description || '') + '</td>';
      paramTable.appendChild(tr);
    });
  }

  // 返回值 / 类型
  if (!_.isEmpty(eleData.returns) || !_.isEmpty(eleData.type)) {
    var label = editName === 'functions' ? '返回值' : '类型';
    var lan = document.createElement('p');
    lan.innerHTML = '<b class="mainheaders">' + label + '</b>';
    elem_content.appendChild(lan);
    var p = document.createElement('p');
    p.innerHTML = editName === 'functions' ? (eleData.returns || '') : (eleData.type || '');
    elem_content.appendChild(p);
  }

  // 说明
  if (!_.isEmpty(eleData.summary)) {
    var elem_summary = document.createElement('p');
    elem_summary.innerHTML = '<b class="mainheaders">说明</b>';
    elem_content.appendChild(elem_summary);
    var tplExplain = document.createElement('div');
    tplExplain.innerHTML = '<p>' + eleData.summary + '</p>';
    elem_content.appendChild(tplExplain);
  }

  // 示例代码
  if (!_.isEmpty(eleData.examples)) {
    var elem_examples = document.createElement('p');
    elem_examples.innerHTML = '<b class="mainheaders">示例</b>';
    elem_content.appendChild(elem_examples);
    var eleCode = document.createElement('div');
    eleCode.innerHTML = eleData.examples;
    elem_content.appendChild(eleCode);
  }

  elem.appendChild(elem_content);
  return elem;
}

/* 从 URL hash 获取跳转目标 ID */
function GetIdFromUrl() {
  return _.last(decodeURI(location.href).split('#')) || '#';
}

/* 滚动到指定元素 */
function ScrollToElement(id) {
  if (_.isNil(id) || id === '#' || _.isEmpty(id)) return;
  var el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}