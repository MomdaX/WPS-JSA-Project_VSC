/*
 * theme.js — 主题切换模块
 * 使用 CSS filter:invert(1) hue-rotate(180deg) 实现暗黑模式
 * 通过 localStorage 持久化用户偏好
 */
(function() {
  var THEME_KEY = 'wps-api-theme';

  /* 切换亮色/暗黑主题 */
  function toggleTheme() {
    var html = document.documentElement;
    var isDark = html.style.filter.indexOf('invert') !== -1;
    if (isDark) {
      html.style.filter = '';
      html.style.transition = 'filter 300ms';
      document.getElementById('themeBtn').textContent = '🌙';
      localStorage.setItem(THEME_KEY, 'light');
    } else {
      html.style.filter = 'invert(1) hue-rotate(180deg)';
      html.style.transition = 'filter 300ms';
      document.getElementById('themeBtn').textContent = '☀️';
      localStorage.setItem(THEME_KEY, 'dark');
    }
  }

  /* 页面加载时应用已保存的主题 */
  function applyTheme() {
    var saved = localStorage.getItem(THEME_KEY);
    if (saved === 'dark') {
      document.documentElement.style.filter = 'invert(1) hue-rotate(180deg)';
      var btn = document.getElementById('themeBtn');
      if (btn) btn.textContent = '☀️';
    }
  }

  window.toggleTheme = toggleTheme;
  window.addEventListener('DOMContentLoaded', applyTheme);
})();