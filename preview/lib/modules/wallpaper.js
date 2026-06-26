// ========== 壁纸自适应切换 ==========
(function() {
  var LANDSCAPE = 'img/横屏壁纸.png';
  var PORTRAIT = 'img/竖屏壁纸.jpg';
  var root = document.documentElement;

  function setWallpaper() {
    var isLandscape = window.innerWidth > window.innerHeight;
    var url = isLandscape ? LANDSCAPE : PORTRAIT;
    root.style.setProperty('--bg-wallpaper', 'url(' + url + ')');
  }

  setWallpaper();
  window.addEventListener('resize', setWallpaper);
})();