/**
 * CodeBlock - 单个代码块对象
 * 每个实例管理自己的 DOM、样式、复制、语言检测
 *
 * @param {HTMLElement} el  - 原始 <pre> 元素
 * @param {Object}      cfg - 配置项（宽高/字体/滚动条等）
 */
function CodeBlock(el, cfg) {
  this.el = el;                    // 原始 <pre> 元素
  this.cfg = cfg;                  // 配置引用
  this.wrapper = null;             // 外层包裹容器
  this.lang = '';                  // 语言类型
  this._init();
}

CodeBlock.prototype = {

  /** 初始化：创建包裹容器 + 语言标签 + 复制按钮 */
  _init: function() {
    if (this.el.parentElement && this.el.parentElement.classList.contains('code-block-wrapper')) return;

    this.lang = this._detectLang();

    this.wrapper = document.createElement('div');
    this.wrapper.className = 'code-block-wrapper';

    if (this.cfg.showLanguage || this.cfg.showCopyButton) {
      this.wrapper.appendChild(this._buildHeader());
    }

    this.el.parentNode.insertBefore(this.wrapper, this.el);
    this.wrapper.appendChild(this.el);
  },

  /** 构建头部栏（语言标签 + 复制按钮） */
  _buildHeader: function() {
    var header = document.createElement('div');
    header.className = 'code-block-header';

    if (this.cfg.showLanguage) {
      var langSpan = document.createElement('span');
      langSpan.className = 'code-block-language';
      langSpan.textContent = this.lang;
      header.appendChild(langSpan);
    }

    if (this.cfg.showCopyButton) {
      var self = this;
      var btn = document.createElement('button');
      btn.className = 'code-block-copy-btn';
      btn.textContent = '复制';
      btn.onclick = function() { self.copy(btn); };
      header.appendChild(btn);
    }

    return header;
  },

  /** 检测代码语言 */
  _detectLang: function() {
    var code = this.el.querySelector('code') || this.el;
    var classes = code.className.split(' ');

    for (var i = 0; i < classes.length; i++) {
      if (classes[i].startsWith('language-') || classes[i].startsWith('lang-')) {
        return classes[i].split('-')[1];
      }
    }
    if (code.classList.contains('javascript') || code.classList.contains('js')) return 'JavaScript';
    if (code.classList.contains('html')) return 'HTML';
    if (code.classList.contains('css')) return 'CSS';

    var text = code.textContent || '';
    if (/function|var |let |const |=>/.test(text)) return 'JavaScript';
    if (/<[a-z][\s\S]*>/i.test(text)) return 'HTML';
    if (/\{[^}]*:[^;]*;/.test(text)) return 'CSS';
    return 'Code';
  },

  // ========== 公共 API ==========

  /** 获取代码文本 */
  getCode: function() {
    var code = this.el.querySelector('code') || this.el;
    return code.textContent || code.innerText || '';
  },

  /** 获取语言 */
  getLanguage: function() {
    return this.lang;
  },

  /** 获取高度 */
  getHeight: function() {
    return this.el.offsetHeight;
  },

  /** 设置最大高度 */
  setMaxHeight: function(h) {
    this.el.style.maxHeight = (typeof h === 'number' ? h + 'px' : h);
    return this;
  },

  /** 设置字体大小 */
  setFontSize: function(s) {
    this.el.style.fontSize = (typeof s === 'number' ? s + 'px' : s);
    var code = this.el.querySelector('code');
    if (code) code.style.fontSize = (typeof s === 'number' ? s + 'px' : s);
    return this;
  },

  /** 复制代码到剪贴板 */
  copy: function(btn) {
    var self = this;
    var text = this.getCode();

    navigator.clipboard.writeText(text).then(function() {
      if (btn) {
        btn.textContent = '已复制 ✓';
        btn.classList.add('copied');
        setTimeout(function() { btn.textContent = '复制'; btn.classList.remove('copied'); }, 2000);
      }
      console.log('📋 已复制 (' + self.lang + ', ' + text.length + ' 字符)');
    }).catch(function(err) {
      console.error('复制失败:', err);
      if (btn) { btn.textContent = '复制失败'; setTimeout(function() { btn.textContent = '复制'; }, 2000); }
    });
  },

  /** 销毁：还原 DOM */
  destroy: function() {
    if (this.wrapper && this.wrapper.parentNode) {
      this.wrapper.parentNode.insertBefore(this.el, this.wrapper);
      this.wrapper.parentNode.removeChild(this.wrapper);
      this.wrapper = null;
    }
  }
};


/**
 * CodeBlockManager - 代码块管理器（工厂）
 * 统一管理所有 CodeBlock 实例，注入全局样式
 *
 * @param {Object} opts - 全局配置
 */
function CodeBlockManager(opts) {
  this.config = {
    maxWidth: '100%',
    maxHeight: '400px',
    fontSize: '13px',
    lineHeight: '1.6',
    fontFamily: '"Consolas", "Courier New", monospace',
    padding: '16px',
    borderRadius: '8px',
    scrollBarWidth: '6px',
    scrollBarColor: 'rgba(0, 180, 255, 0.3)',
    scrollBarHoverColor: 'rgba(0, 180, 255, 0.6)',
    showLanguage: true,
    showCopyButton: true,
    theme: 'dark'
  };

  // 合并用户配置
  if (opts) {
    for (var k in opts) {
      if (opts.hasOwnProperty(k)) this.config[k] = opts[k];
    }
  }

  this.instances = [];       // 所有 CodeBlock 实例
  this._styleInjected = false;
}

CodeBlockManager.prototype = {

  /** 初始化：注入全局样式 + 扫描创建所有代码块 */
  init: function() {
    try {
      this._injectStyles();
      this.createAll();
      console.log('✅ CodeBlockManager 初始化完成 (' + this.instances.length + ' 个代码块)');
    } catch (e) {
      console.warn('⚠️ CodeBlockManager 初始化异常:', e.message || e);
    }
    return this;
  },

  /** 注入全局 CSS 样式（仅一次） */
  _injectStyles: function() {
    if (this._styleInjected) return;
    var styleId = 'codeblock-manager-styles';
    if (document.getElementById(styleId)) { this._styleInjected = true; return; }

    var c = this.config;
    var css = ''
      + '.code-block-wrapper{position:relative;margin:12px 0;border-radius:' + c.borderRadius + ';overflow:hidden;background:#0d1117;border:1px solid rgba(0,180,255,0.15);box-shadow:0 2px 8px rgba(0,0,0,0.3);}'
      + '.code-block-header{display:flex;justify-content:space-between;align-items:center;padding:8px 16px;background:linear-gradient(135deg,rgba(0,180,216,0.15) 0%,rgba(0,100,150,0.1) 100%);border-bottom:1px solid rgba(0,180,255,0.1);font-size:12px;color:#7a8ba0;}'
      + '.code-block-language{font-weight:600;color:#00b4d8;text-transform:uppercase;letter-spacing:0.5px;}'
      + '.code-block-copy-btn{padding:4px 12px;background:rgba(0,180,255,0.1);border:1px solid rgba(0,180,255,0.3);border-radius:4px;color:#00b4d8;cursor:pointer;font-size:11px;transition:all 0.2s;}'
      + '.code-block-copy-btn:hover{background:rgba(0,180,255,0.2);border-color:rgba(0,180,255,0.5);transform:translateY(-1px);}'
      + '.code-block-copy-btn.copied{background:rgba(34,197,94,0.2);border-color:rgba(34,197,94,0.5);color:#22c55e;}'
      + '.code-block-wrapper pre{margin:0!important;padding:' + c.padding + '!important;background:transparent!important;font-size:' + c.fontSize + '!important;line-height:' + c.lineHeight + '!important;font-family:' + c.fontFamily + '!important;max-height:' + c.maxHeight + ';overflow:auto;border-radius:0!important;}'
      + '.code-block-wrapper pre code{font-family:' + c.fontFamily + '!important;font-size:' + c.fontSize + '!important;background:transparent!important;color:#c9d1d9!important;}'
      + '.code-block-wrapper pre::-webkit-scrollbar,#vstable pre::-webkit-scrollbar,article pre::-webkit-scrollbar,.article-wrap pre::-webkit-scrollbar{width:' + c.scrollBarWidth + ';height:' + c.scrollBarWidth + ';}'
      + '.code-block-wrapper pre::-webkit-scrollbar-track,#vstable pre::-webkit-scrollbar-track,article pre::-webkit-scrollbar-track,.article-wrap pre::-webkit-scrollbar-track{background:rgba(13,17,23,0.5);border-radius:3px;}'
      + '.code-block-wrapper pre::-webkit-scrollbar-thumb,#vstable pre::-webkit-scrollbar-thumb,article pre::-webkit-scrollbar-thumb,.article-wrap pre::-webkit-scrollbar-thumb{background:' + c.scrollBarColor + ';border-radius:3px;transition:background 0.2s;}'
      + '.code-block-wrapper pre::-webkit-scrollbar-thumb:hover,#vstable pre::-webkit-scrollbar-thumb:hover,article pre::-webkit-scrollbar-thumb:hover,.article-wrap pre::-webkit-scrollbar-thumb:hover{background:' + c.scrollBarHoverColor + ';}'
      + '.code-block-wrapper pre::-webkit-scrollbar-corner,#vstable pre::-webkit-scrollbar-corner,article pre::-webkit-scrollbar-corner,.article-wrap pre::-webkit-scrollbar-corner{background:transparent;}'
      + '#vstable{background:rgba(66,66,88,0.66)!important;backdrop-filter:blur(6px)!important;-webkit-backdrop-filter:blur(6px)!important;border:1px solid rgba(0,180,255,0.2)!important;border-radius:12px!important;box-shadow:0 4px 16px rgba(0,0,0,0.4)!important;margin-bottom:12px!important;width:100%!important;box-sizing:border-box!important;overflow:hidden!important;}'
      + '#vstable table{width:100%!important;table-layout:fixed!important;border-collapse:collapse!important;}'
      + '#vstable td{padding:0!important;vertical-align:top!important;position:relative!important;}'
      + '#vstable pre{margin:0!important;padding:' + c.padding + '!important;max-height:' + c.maxHeight + '!important;overflow:auto!important;background:#0d1117!important;border-radius:0!important;font-size:' + c.fontSize + '!important;line-height:' + c.lineHeight + '!important;font-family:' + c.fontFamily + '!important;}'
      + '#vstable pre code{font-family:' + c.fontFamily + '!important;font-size:' + c.fontSize + '!important;display:block!important;white-space:pre!important;word-wrap:normal!important;overflow-wrap:normal!important;}';

    var style = document.createElement('style');
    style.id = styleId;
    style.textContent = css;
    document.head.appendChild(style);
    this._styleInjected = true;
  },

  /** 扫描并创建所有代码块实例 */
  createAll: function() {
    var self = this;
    setTimeout(function() {
      self._createStandalone();
      self._enhanceVstable();
    }, 100);
    return this;
  },

  /** 为独立 <pre> 创建 CodeBlock 实例 */
  _createStandalone: function() {
    var self = this;
    var pres = document.querySelectorAll('#mainContent > .content-inner > pre');
    pres.forEach(function(pre) {
      if (pre.parentElement && pre.parentElement.classList.contains('code-block-wrapper')) return;
      var block = new CodeBlock(pre, self.config);
      self.instances.push(block);
    });
  },

  /** 增强 #vstable 中的代码块 */
  _enhanceVstable: function() {
    var vstables = document.querySelectorAll('#vstable');
    vstables.forEach(function(vstable) {
      var pres = vstable.querySelectorAll('pre');
      pres.forEach(function(pre) {
        if (pre.dataset.enhanced) return;
        pre.dataset.enhanced = 'true';
        var code = pre.querySelector('code');
        if (code) {
          code.style.display = 'block';
          code.style.whiteSpace = 'pre';
          code.style.wordWrap = 'normal';
        }
      });
    });
  },

  // ========== 公共 API ==========

  /** 获取所有实例 */
  getAll: function() {
    return this.instances;
  },

  /** 获取指定语言的实例 */
  getByLanguage: function(lang) {
    return this.instances.filter(function(b) { return b.getLanguage() === lang; });
  },

  /** 获取第 n 个实例 */
  get: function(index) {
    return this.instances[index] || null;
  },

  /** 实例数量 */
  count: function() {
    return this.instances.length;
  },

  /** 更新全局配置 */
  setConfig: function(key, val) {
    this.config[key] = val;
    return this;
  },

  /** 刷新：销毁旧实例 + 重建 */
  refresh: function() {
    this.destroyAll();
    this.createAll();
    return this;
  },

  /** 销毁所有实例 */
  destroyAll: function() {
    this.instances.forEach(function(b) { b.destroy(); });
    this.instances = [];
    return this;
  }
};

// 默认全局实例
window.CodeBlockManager = new CodeBlockManager();