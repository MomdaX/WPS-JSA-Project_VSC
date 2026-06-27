// ========== 工具函数 ==========

function copyCode(ele) {
  var codeEl = null;

  // 向下查找：从按钮所在行，在同级 #vstable 容器内找 code 元素
  var container = ele.closest('#vstable') || ele.closest('table');
  if (container) {
    codeEl = container.querySelector('code');
  }

  // 兜底：使用原始 parentNode 链（兼容旧结构）
  if (!codeEl) {
    try {
      codeEl = ele.parentNode.parentNode.parentNode.getElementsByTagName('code')[0];
    } catch (e) {
      codeEl = null;
    }
  }

  if (!codeEl) {
    console.error('❌ 未找到代码块');
    return;
  }

  var content = codeEl.textContent || codeEl.innerText || '';

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(content).then(function() {
      _showCopySuccess(ele);
    }).catch(function() {
      _fallbackCopy(content, ele);
    });
  } else {
    _fallbackCopy(content, ele);
  }
}

function _showCopySuccess(ele) {
  var originalText = ele.textContent;
  ele.textContent = '已复制 ✓';
  ele.style.color = '#22c55e';
  ele.style.pointerEvents = 'none';
  setTimeout(function() {
    ele.textContent = originalText;
    ele.style.color = '';
    ele.style.pointerEvents = '';
  }, 1500);
}

function _fallbackCopy(content, ele) {
  var textarea = document.createElement('textarea');
  textarea.value = content;
  textarea.style.position = 'fixed';
  textarea.style.left = '-9999px';
  textarea.style.top = '-9999px';
  document.body.appendChild(textarea);
  textarea.focus();
  textarea.select();
  try {
    var isOk = document.execCommand('copy');
    if (isOk) {
      _showCopySuccess(ele);
    } else {
      console.error('❌ execCommand 复制失败');
      ele.textContent = '复制失败';
      setTimeout(function() { ele.textContent = '复制'; }, 1500);
    }
  } catch (e) {
    console.error('❌ 复制异常:', e);
    ele.textContent = '复制失败';
    setTimeout(function() { ele.textContent = '复制'; }, 1500);
  }
  document.body.removeChild(textarea);
}

// ========== 渲染包装器（调用 filldata.js 中的 FillObject） ==========
function FillObjectWrapper(jsData) {
  previousObjName = currentObjName;
  currentObjName = jsData.name;
  FillObject(jsData);

  var pageContent = document.getElementById('pageContent');
  if (pageContent && typeof Prism !== 'undefined') {
    var codeBlocks = pageContent.querySelectorAll('pre code');
    codeBlocks.forEach(function(code) {
      if (!code.classList.contains('language-js') && !code.classList.contains('language-vb') && !code.classList.contains('language-vba')) {
        code.classList.add('language-js');
      }
      if (code.parentElement && code.parentElement.tagName === 'PRE') {
        code.parentElement.classList.add('language-js');
      }
    });
    Prism.highlightAllUnder(pageContent);
  }
}

// ========== 折叠/展开控制 ==========

function toggleDetailItem(elem) {
  if (elem.classList.contains('expanded')) {
    elem.classList.remove('expanded');
  } else {
    elem.classList.add('expanded');
    elem.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
}

function expandOnly(itemId) {
  _.forEach(document.querySelectorAll('.detail-item'), function(item) {
    item.classList.remove('expanded');
  });
  var target = document.getElementById(itemId);
  if (target) {
    target.classList.add('expanded');
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

function toggleAll() {
  var btn = document.getElementById('toggleAllBtn');
  var items = document.querySelectorAll('.detail-item');
  var allExpanded = _.every(items, function(item) {
    return item.classList.contains('expanded');
  });
  if (allExpanded) {
    _.forEach(items, function(item) { item.classList.remove('expanded'); });
    if (btn) btn.textContent = '展开全部';
  } else {
    _.forEach(items, function(item) { item.classList.add('expanded'); });
    if (btn) btn.textContent = '折叠全部';
  }
}