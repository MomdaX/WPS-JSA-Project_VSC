(function() {
  var prevTime = '';

  function buildClock() {
    var container = document.getElementById('flipClock');
    if (!container) return;

    container.innerHTML = '';
    container.className = 'FlipClock';

    var digits = [];
    for (var i = 0; i < 6; i++) {
      var digitEl = createDigit('0');
      container.appendChild(digitEl);
      digits.push(digitEl);

      if (i === 1 || i === 3) {
        var colon = document.createElement('div');
        colon.className = 'colon';
        container.appendChild(colon);
      }
    }

    return digits;
  }

  function createDigit(num) {
    var digit = document.createElement('div');
    digit.className = 'flip-digit';
    digit.setAttribute('data-num', num);

    var upper = document.createElement('div');
    upper.className = 'upper';
    var upperNum = document.createElement('div');
    upperNum.className = 'num';
    upperNum.textContent = num;
    upper.appendChild(upperNum);
    digit.appendChild(upper);

    var lower = document.createElement('div');
    lower.className = 'lower';
    var lowerNum = document.createElement('div');
    lowerNum.className = 'num';
    lowerNum.textContent = num;
    lower.appendChild(lowerNum);
    digit.appendChild(lower);

    var flipCard = document.createElement('div');
    flipCard.className = 'flip-card';

    var front = document.createElement('div');
    front.className = 'front';
    var frontNum = document.createElement('div');
    frontNum.className = 'num';
    frontNum.textContent = num;
    front.appendChild(frontNum);
    flipCard.appendChild(front);

    var back = document.createElement('div');
    back.className = 'back';
    var backNum = document.createElement('div');
    backNum.className = 'num';
    backNum.textContent = num;
    back.appendChild(backNum);
    flipCard.appendChild(back);

    digit.appendChild(flipCard);

    var middleShadow = document.createElement('div');
    middleShadow.className = 'middle-shadow';
    digit.appendChild(middleShadow);

    return digit;
  }

  function flipDigit(digitEl, newNum) {
    var oldNum = digitEl.getAttribute('data-num');
    if (oldNum === newNum) return;

    var upperNum = digitEl.querySelector('.upper .num');
    var lowerNum = digitEl.querySelector('.lower .num');
    var frontNum = digitEl.querySelector('.flip-card .front .num');
    var backNum = digitEl.querySelector('.flip-card .back .num');

    frontNum.textContent = oldNum;
    backNum.textContent = newNum;

    digitEl.classList.remove('flipping');
    void digitEl.offsetWidth;
    digitEl.classList.add('flipping');

    var duration = 600;

    setTimeout(function() {
      upperNum.textContent = newNum;
    }, duration / 2);

    setTimeout(function() {
      lowerNum.textContent = newNum;
      frontNum.textContent = newNum;
      digitEl.classList.remove('flipping');
      digitEl.setAttribute('data-num', newNum);
    }, duration);
  }

  function getTimeStr() {
    var now = new Date();
    return pad(now.getHours()) + pad(now.getMinutes()) + pad(now.getSeconds());
  }

  function pad(n) {
    return n < 10 ? '0' + n : '' + n;
  }

  function tick(digits) {
    var timeStr = getTimeStr();
    if (timeStr === prevTime) return;

    for (var i = 0; i < 6; i++) {
      flipDigit(digits[i], timeStr.charAt(i));
    }

    prevTime = timeStr;
  }

  function start() {
    var digits = buildClock();
    if (!digits) return;

    var timeStr = getTimeStr();
    for (var i = 0; i < 6; i++) {
      var num = timeStr.charAt(i);
      digits[i].setAttribute('data-num', num);
      digits[i].querySelector('.upper .num').textContent = num;
      digits[i].querySelector('.lower .num').textContent = num;
      digits[i].querySelector('.flip-card .front .num').textContent = num;
      digits[i].querySelector('.flip-card .back .num').textContent = num;
    }
    prevTime = timeStr;

    setInterval(function() { tick(digits); }, 1000);
  }

  window.addEventListener('DOMContentLoaded', start);
})();
