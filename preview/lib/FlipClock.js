/*
 * flipclock.js — 翻页时钟模块
 * 经典翻牌机制：上半沿底边向下翻折，正面=旧数字，背面=新数字
 * requestAnimationFrame 逐帧驱动
 */
(function() {
  var prevTime = '';

  /* 初始化时钟 DOM */
  function buildClock() {
    var container = document.getElementById('flipClock');
    if (!container) return;
    var html = '';
    var i;
    for (i = 0; i < 6; i++) {
      html += '<div class="tick" id="flip' + i + '">'
        + '<div class="down"><div class="num">0</div></div>'
        + '<div class="up"><div class="num">0</div></div>'
        + '<div class="flip">'
        + '<div class="front"><div class="num">0</div></div>'
        + '<div class="back"><div class="num">0</div></div>'
        + '</div>'
        + '</div>';
      if (i === 1 || i === 3) {
        html += '<em>:</em>';
      }
    }
    container.innerHTML = html;
  }

  function getTimeStr() {
    var now = new Date();
    return pad(now.getHours()) + pad(now.getMinutes()) + pad(now.getSeconds());
  }

  function pad(n) {
    return n < 10 ? '0' + n : '' + n;
  }

  /*
   * 翻转单个数字位（上半向下翻折）
   * 翻转卡片沿底边旋转 0°→-180°
   * 正面(front)=旧数字上半，背面(back)=新数字上半（预旋转180°）
   * 90° 中点：静态上半切换为新数字，翻折露出底层
   * 180° 终点：静态下半切换为新数字，翻转卡片复位并更新正面
   */
  function flipDigit(index, newNum) {
    var tick = document.getElementById('flip' + index);
    if (!tick) return;
    var oldNum = tick.getAttribute('data-num') || '0';
    if (oldNum === newNum) return;

    var flipEl = tick.querySelector('.flip');
    var frontNum = tick.querySelector('.flip .front .num');
    var backNum = tick.querySelector('.flip .back .num');
    var staticUp = tick.querySelector('.up .num');
    var staticDown = tick.querySelector('.down .num');

    // 正面=旧数字，背面=新数字
    frontNum.textContent = oldNum;
    backNum.textContent = newNum;
    tick.setAttribute('data-num', newNum);

    var startTime = performance.now();
    var duration = 600;
    var halfwayDone = false;

    function animate(now) {
      var elapsed = now - startTime;
      var progress = Math.min(elapsed / duration, 1);

      // 角度从 0° 到 -180°（上半向下翻折）
      var angle = -(progress * 180);
      flipEl.style.transform = 'rotateX(' + angle + 'deg)';

      // 中点 90°：静态上半更新
      if (progress >= 0.5 && !halfwayDone) {
        halfwayDone = true;
        staticUp.textContent = newNum;
      }

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        // 终点 180°：静态下半更新，翻转卡正面更新并复位
        staticDown.textContent = newNum;
        frontNum.textContent = newNum;
        flipEl.style.transform = 'rotateX(0deg)';
      }
    }

    requestAnimationFrame(animate);
  }

  /* 每秒更新 */
  function tick() {
    var timeStr = getTimeStr();
    if (timeStr === prevTime) return;
    var i;
    for (i = 0; i < 6; i++) {
      flipDigit(i, timeStr.charAt(i));
    }
    prevTime = timeStr;
  }

  /* 启动 */
  function start() {
    buildClock();
    var timeStr = getTimeStr();
    var i;
    for (i = 0; i < 6; i++) {
      var tickEl = document.getElementById('flip' + i);
      if (!tickEl) continue;
      var num = timeStr.charAt(i);
      tickEl.setAttribute('data-num', num);
      tickEl.querySelector('.up .num').textContent = num;
      tickEl.querySelector('.down .num').textContent = num;
      tickEl.querySelector('.flip .front .num').textContent = num;
    }
    prevTime = timeStr;
    setInterval(tick, 1000);
  }

  window.addEventListener('DOMContentLoaded', start);
})();