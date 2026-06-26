/**
 * Sidebar Fireworks - 侧边栏烟花效果
 * 直接复用 index.js 的 Shell / Star / Spark 粒子系统
 * 只改两处：发射位置由侧边栏宽度计算，使用单个侧边栏 canvas
 */
(function() {
  'use strict';

  var canvas, ctx, container, W, H, animId, dpr;
  var stageW = 0, stageH = 0;
  var currentFrame = 0;
  var simSpeed = 1;
  var GRAVITY = 0.9;
  var PI_2 = Math.PI * 2;
  var PI_HALF = Math.PI * 0.5;
  var quality = 2;
  var isLowQuality = false;
  var isNormalQuality = true;
  var isHighQuality = false;

  var COLOR = {
    Red: '#ff0043',
    Green: '#14fc56',
    Blue: '#1e7fff',
    Purple: '#e60aff',
    Gold: '#ffbf36',
    White: '#ffffff'
  };

  var INVISIBLE = '_INVISIBLE_';
  var COLOR_NAMES = Object.keys(COLOR);
  var COLOR_CODES = COLOR_NAMES.map(function(colorName) { return COLOR[colorName]; });
  var COLOR_CODES_W_INVIS = COLOR_CODES.concat([INVISIBLE]);
  var COLOR_CODE_INDEXES = {};
  COLOR_CODES_W_INVIS.forEach(function(code, i) {
    COLOR_CODE_INDEXES[code] = i;
  });

  var COLOR_TUPLES = {};
  COLOR_CODES.forEach(function(hex) {
    COLOR_TUPLES[hex] = {
      r: parseInt(hex.substr(1, 2), 16),
      g: parseInt(hex.substr(3, 2), 16),
      b: parseInt(hex.substr(5, 2), 16)
    };
  });

  function randomColorSimple() {
    return COLOR_CODES[Math.random() * COLOR_CODES.length | 0];
  }

  var lastColor;
  function randomColor(options) {
    options = options || {};
    var notSame = options.notSame;
    var notColor = options.notColor;
    var limitWhite = options.limitWhite;
    var color = randomColorSimple();

    if (limitWhite && color === COLOR.White && Math.random() < 0.6) {
      color = randomColorSimple();
    }

    if (notSame) {
      while (color === lastColor) {
        color = randomColorSimple();
      }
    } else if (notColor) {
      while (color === notColor) {
        color = randomColorSimple();
      }
    }

    lastColor = color;
    return color;
  }

  function whiteOrGold() {
    return Math.random() < 0.5 ? COLOR.Gold : COLOR.White;
  }

  function makePistilColor(shellColor) {
    return (shellColor === COLOR.White || shellColor === COLOR.Gold) ? randomColor({ notColor: shellColor }) : whiteOrGold();
  }

  var MyMath = {
    random: function(min, max) {
      return Math.random() * (max - min) + min;
    },
    pointDist: function(x1, y1, x2, y2) {
      return Math.hypot(x2 - x1, y2 - y1);
    },
    pointAngle: function(x1, y1, x2, y2) {
      return Math.atan2(y2 - y1, x2 - x1);
    },
    clamp: function(value, min, max) {
      return Math.min(Math.max(value, min), max);
    }
  };

  function createParticleCollection() {
    var collection = {};
    COLOR_CODES_W_INVIS.forEach(function(color) {
      collection[color] = [];
    });
    return collection;
  }

  function createParticleArc(start, arcLength, count, randomness, particleFactory) {
    var angleDelta = arcLength / count;
    var end = start + arcLength - (angleDelta * 0.5);

    if (end > start) {
      for (var angle = start; angle < end; angle = angle + angleDelta) {
        particleFactory(angle + Math.random() * angleDelta * randomness);
      }
    } else {
      for (var angle = start; angle > end; angle = angle + angleDelta) {
        particleFactory(angle + Math.random() * angleDelta * randomness);
      }
    }
  }

  function createBurst(count, particleFactory, startAngle, arcLength) {
    startAngle = typeof startAngle === 'number' ? startAngle : 0;
    arcLength = typeof arcLength === 'number' ? arcLength : PI_2;

    var R = 0.5 * Math.sqrt(count / Math.PI);
    var C = 2 * R * Math.PI;
    var C_HALF = C / 2;

    for (var i = 0; i <= C_HALF; i++) {
      var ringAngle = i / C_HALF * PI_HALF;
      var ringSize = Math.cos(ringAngle);
      var partsPerFullRing = C * ringSize;
      var partsPerArc = partsPerFullRing * (arcLength / PI_2);

      var angleInc = PI_2 / partsPerFullRing;
      var angleOffset = Math.random() * angleInc + startAngle;
      var maxRandomAngleOffset = angleInc * 0.33;

      for (var j = 0; j < partsPerArc; j++) {
        var randomAngleOffset = Math.random() * maxRandomAngleOffset;
        var angle = angleInc * j + angleOffset + randomAngleOffset;
        particleFactory(angle, ringSize);
      }
    }
  }

  function crossetteEffect(star) {
    var startAngle = Math.random() * PI_HALF;
    createParticleArc(startAngle, PI_2, 4, 0.5, function(angle) {
      Star.add(
        star.x,
        star.y,
        star.color,
        angle,
        Math.random() * 0.6 + 0.75,
        600
      );
    });
  }

  function floralEffect(star) {
    var count = 12 + 6 * quality;
    createBurst(count, function(angle, speedMult) {
      Star.add(
        star.x,
        star.y,
        star.color,
        angle,
        speedMult * 2.4,
        1000 + Math.random() * 300,
        star.speedX,
        star.speedY
      );
    });
    BurstFlash.add(star.x, star.y, 46);
  }

  function fallingLeavesEffect(star) {
    createBurst(7, function(angle, speedMult) {
      var newStar = Star.add(
        star.x,
        star.y,
        INVISIBLE,
        angle,
        speedMult * 2.4,
        2400 + Math.random() * 600,
        star.speedX,
        star.speedY
      );
      newStar.sparkColor = COLOR.Gold;
      newStar.sparkFreq = 144 / quality;
      newStar.sparkSpeed = 0.28;
      newStar.sparkLife = 750;
      newStar.sparkLifeVariation = 3.2;
    });
    BurstFlash.add(star.x, star.y, 46);
  }

  function crackleEffect(star) {
    var count = isHighQuality ? 32 : 16;
    createParticleArc(0, PI_2, count, 1.8, function(angle) {
      Spark.add(
        star.x,
        star.y,
        COLOR.Gold,
        angle,
        Math.pow(Math.random(), 0.45) * 2.4,
        300 + Math.random() * 200
      );
    });
  }

  var Star = {
    drawWidth: 3,
    airDrag: 0.98,
    airDragHeavy: 0.992,
    active: createParticleCollection(),
    _pool: [],

    _new: function() {
      return {};
    },

    add: function(x, y, color, angle, speed, life, speedOffX, speedOffY) {
      var instance = this._pool.pop() || this._new();

      instance.visible = true;
      instance.heavy = false;
      instance.x = x;
      instance.y = y;
      instance.prevX = x;
      instance.prevY = y;
      instance.color = color === 'random' ? randomColor() : color;
      instance.speedX = Math.sin(angle) * speed + (speedOffX || 0);
      instance.speedY = Math.cos(angle) * speed + (speedOffY || 0);
      instance.life = life;
      instance.fullLife = life;
      instance.spinAngle = Math.random() * PI_2;
      instance.spinSpeed = 0.8;
      instance.spinRadius = 0;
      instance.sparkFreq = 0;
      instance.sparkSpeed = 1;
      instance.sparkTimer = 0;
      instance.sparkColor = instance.color;
      instance.sparkLife = 750;
      instance.sparkLifeVariation = 0.25;
      instance.strobe = false;
      instance.transitionTime = 0;
      instance.secondColor = null;
      instance.colorChanged = false;
      instance.updateFrame = -1;
      instance.onDeath = null;

      var actualColor = instance.color;
      if (!this.active[actualColor]) {
        actualColor = COLOR_CODES[Math.random() * COLOR_CODES.length | 0];
        instance.color = actualColor;
        instance.sparkColor = actualColor;
      }
      this.active[actualColor].push(instance);
      return instance;
    },

    returnInstance: function(instance) {
      if (instance.onDeath) {
        instance.onDeath(instance);
      }
      instance.onDeath = null;
      instance.secondColor = null;
      instance.transitionTime = 0;
      instance.colorChanged = false;
      this._pool.push(instance);
    }
  };

  var Spark = {
    drawWidth: 0.75,
    airDrag: 0.9,
    active: createParticleCollection(),
    _pool: [],

    _new: function() {
      return {};
    },

    add: function(x, y, color, angle, speed, life) {
      var instance = this._pool.pop() || this._new();

      instance.x = x;
      instance.y = y;
      instance.prevX = x;
      instance.prevY = y;
      instance.color = color === 'random' ? randomColor() : color;
      instance.speedX = Math.sin(angle) * speed;
      instance.speedY = Math.cos(angle) * speed;
      instance.life = life;

      var actualColor = instance.color;
      if (!this.active[actualColor]) {
        actualColor = COLOR_CODES[Math.random() * COLOR_CODES.length | 0];
        instance.color = actualColor;
      }
      this.active[actualColor].push(instance);
      return instance;
    },

    returnInstance: function(instance) {
      this._pool.push(instance);
    }
  };

  var BurstFlash = {
    active: [],
    _pool: [],

    _new: function() {
      return {};
    },

    add: function(x, y, radius) {
      var instance = this._pool.pop() || this._new();

      instance.x = x;
      instance.y = y;
      instance.radius = radius;

      this.active.push(instance);
      return instance;
    },

    returnInstance: function(instance) {
      this._pool.push(instance);
    }
  };

  var shellPresets = [
    { spreadSize: 160, starLife: 1000, starDensity: 1.2, color: 'random', glitter: 'heavy', pistil: true, pistilColor: COLOR.White },
    { spreadSize: 140, starLife: 900, starDensity: 1.0, color: 'random', ring: true, glitter: 'medium' },
    { spreadSize: 180, starLife: 1400, starDensity: 1.0, color: 'random', glitter: 'willow', fallingLeaves: true },
    { spreadSize: 120, starLife: 800, starDensity: 0.9, color: 'random', crossette: true, glitter: 'medium' },
    { spreadSize: 150, starLife: 1000, starDensity: 1.0, color: 'random', floral: true, glitter: 'light' },
    { spreadSize: 160, starLife: 900, starDensity: 1.0, color: 'random', crackle: true, glitter: 'light' },
    { spreadSize: 150, starLife: 1000, starDensity: 1.0, color: 'random', pistil: true, glitter: 'streamer' },
    { spreadSize: 130, starLife: 900, starDensity: 0.9, color: 'random', horsetail: true, glitter: 'medium' }
  ];

  class Shell {
    constructor(options) {
      Object.assign(this, options);
      this.starLifeVariation = options.starLifeVariation || 0.125;
      this.color = options.color || randomColor();
      this.glitterColor = options.glitterColor || this.color;

      if (!this.starCount) {
        var density = options.starDensity || 1;
        var scaledSize = this.spreadSize / 54;
        this.starCount = Math.max(6, scaledSize * scaledSize * density);
      }
    }

    launch(position, launchHeight) {
      var width = stageW;
      var height = stageH;
      var hpad = 20;
      var vpad = 50;
      var minHeightPercent = 0.45;
      var minHeight = height - height * minHeightPercent;

      var launchX = position * (width - hpad * 2) + hpad;
      var launchY = height;
      var burstY = minHeight - (launchHeight * (minHeight - vpad));

      var launchDistance = launchY - burstY;
      var launchVelocity = Math.pow(launchDistance * 0.04, 0.64);

      var comet = this.comet = Star.add(
        launchX,
        launchY,
        typeof this.color === 'string' && this.color !== 'random' ? this.color : COLOR.White,
        Math.PI,
        launchVelocity * (this.horsetail ? 1.2 : 1),
        launchVelocity * (this.horsetail ? 100 : 400)
      );

      comet.heavy = true;
      comet.spinRadius = MyMath.random(0.32, 0.85);
      comet.sparkFreq = 32 / quality;
      if (isHighQuality) comet.sparkFreq = 8;
      comet.sparkLife = 320;
      comet.sparkLifeVariation = 3;

      if (this.glitter === 'willow' || this.fallingLeaves) {
        comet.sparkFreq = 20 / quality;
        comet.sparkSpeed = 0.5;
        comet.sparkLife = 500;
      }

      if (this.color === INVISIBLE) {
        comet.sparkColor = COLOR.Gold;
      }

      if (Math.random() > 0.4 && !this.horsetail) {
        comet.secondColor = INVISIBLE;
        comet.transitionTime = Math.pow(Math.random(), 1.5) * 700 + 500;
      }

      comet.onDeath = function(cometInstance) {
        this.burst(cometInstance.x, cometInstance.y);
      }.bind(this);
    }

    burst(x, y) {
      var speed = this.spreadSize / 96;
      var color, onDeath, sparkFreq, sparkSpeed, sparkLife;
      var sparkLifeVariation = 0.25;
      var playedDeathSound = false;

      if (this.crossette) onDeath = crossetteEffect;
      if (this.crackle) onDeath = crackleEffect;
      if (this.floral) onDeath = floralEffect;
      if (this.fallingLeaves) onDeath = fallingLeavesEffect;

      if (this.glitter === 'light') {
        sparkFreq = 400;
        sparkSpeed = 0.3;
        sparkLife = 300;
        sparkLifeVariation = 2;
      } else if (this.glitter === 'medium') {
        sparkFreq = 200;
        sparkSpeed = 0.44;
        sparkLife = 700;
        sparkLifeVariation = 2;
      } else if (this.glitter === 'heavy') {
        sparkFreq = 80;
        sparkSpeed = 0.8;
        sparkLife = 1400;
        sparkLifeVariation = 2;
      } else if (this.glitter === 'thick') {
        sparkFreq = 16;
        sparkSpeed = isHighQuality ? 1.65 : 1.5;
        sparkLife = 1400;
        sparkLifeVariation = 3;
      } else if (this.glitter === 'streamer') {
        sparkFreq = 32;
        sparkSpeed = 1.05;
        sparkLife = 620;
        sparkLifeVariation = 2;
      } else if (this.glitter === 'willow') {
        sparkFreq = 120;
        sparkSpeed = 0.34;
        sparkLife = 1400;
        sparkLifeVariation = 3.8;
      }

      sparkFreq = sparkFreq || 120;
      sparkFreq = sparkFreq / quality;

      var starFactory = function(angle, speedMult) {
        var standardInitialSpeed = this.spreadSize / 1800;
        var star = Star.add(
          x,
          y,
          color || randomColor(),
          angle,
          speedMult * speed,
          this.starLife + Math.random() * this.starLife * this.starLifeVariation,
          this.horsetail ? (this.comet && this.comet.speedX) : 0,
          this.horsetail ? (this.comet && this.comet.speedY) : -standardInitialSpeed
        );

        if (this.secondColor) {
          star.transitionTime = this.starLife * (Math.random() * 0.05 + 0.32);
          star.secondColor = this.secondColor;
        }

        if (this.strobe) {
          star.transitionTime = this.starLife * (Math.random() * 0.08 + 0.46);
          star.strobe = true;
          star.strobeFreq = Math.random() * 20 + 40;
          if (this.strobeColor) {
            star.secondColor = this.strobeColor;
          }
        }

        star.onDeath = onDeath;

        if (this.glitter) {
          star.sparkFreq = sparkFreq;
          star.sparkSpeed = sparkSpeed;
          star.sparkLife = sparkLife;
          star.sparkLifeVariation = sparkLifeVariation;
          star.sparkColor = this.glitterColor;
          star.sparkTimer = Math.random() * star.sparkFreq;
        }
      }.bind(this);

      if (typeof this.color === 'string') {
        if (this.color === 'random') {
          color = null;
        } else {
          color = this.color;
        }

        if (this.ring) {
          var ringStartAngle = Math.random() * Math.PI;
          var ringSquash = Math.pow(Math.random(), 2) * 0.85 + 0.15;

          createParticleArc(0, PI_2, this.starCount, 0, function(angle) {
            var initSpeedX = Math.sin(angle) * speed * ringSquash;
            var initSpeedY = Math.cos(angle) * speed;
            var newSpeed = MyMath.pointDist(0, 0, initSpeedX, initSpeedY);
            var newAngle = MyMath.pointAngle(0, 0, initSpeedX, initSpeedY) + ringStartAngle;
            var star = Star.add(
              x,
              y,
              color,
              newAngle,
              newSpeed,
              this.starLife + Math.random() * this.starLife * this.starLifeVariation
            );

            if (this.glitter) {
              star.sparkFreq = sparkFreq;
              star.sparkSpeed = sparkSpeed;
              star.sparkLife = sparkLife;
              star.sparkLifeVariation = sparkLifeVariation;
              star.sparkColor = this.glitterColor;
              star.sparkTimer = Math.random() * star.sparkFreq;
            }
          }.bind(this));
        } else {
          createBurst(this.starCount, starFactory);
        }
      } else if (Array.isArray(this.color)) {
        if (Math.random() < 0.5) {
          var start = Math.random() * Math.PI;
          var start2 = start + Math.PI;
          var arc = Math.PI;
          color = this.color[0];
          createBurst(this.starCount, starFactory, start, arc);
          color = this.color[1];
          createBurst(this.starCount, starFactory, start2, arc);
        } else {
          color = this.color[0];
          createBurst(this.starCount / 2, starFactory);
          color = this.color[1];
          createBurst(this.starCount / 2, starFactory);
        }
      }

      if (this.pistil) {
        var innerShell = new Shell({
          spreadSize: this.spreadSize * 0.5,
          starLife: this.starLife * 0.6,
          starLifeVariation: this.starLifeVariation,
          starDensity: 1.4,
          color: this.pistilColor,
          glitter: 'light',
          glitterColor: this.pistilColor === COLOR.Gold ? COLOR.Gold : COLOR.White
        });
        innerShell.burst(x, y);
      }

      if (this.streamers) {
        var streamShell = new Shell({
          spreadSize: this.spreadSize * 0.9,
          starLife: this.starLife * 0.8,
          starLifeVariation: this.starLifeVariation,
          starCount: Math.floor(Math.max(6, this.spreadSize / 45)),
          color: COLOR.White,
          glitter: 'streamer'
        });
        streamShell.burst(x, y);
      }

      BurstFlash.add(x, y, this.spreadSize / 4);
    }
  }

  function resize() {
    if (!container) return;
    var rect = container.getBoundingClientRect();
    W = rect.width;
    H = rect.height;
    dpr = window.devicePixelRatio || 1;
    canvas.width = Math.max(1, Math.floor(W * dpr));
    canvas.height = Math.max(1, Math.floor(H * dpr));
    canvas.style.width = W + 'px';
    canvas.style.height = H + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    stageW = W;
    stageH = H;
  }

  function update(frameTime) {
    currentFrame++;

    var width = stageW;
    var height = stageH;
    var timeStep = frameTime * simSpeed;
    var speed = simSpeed;

    var starDrag = 1 - (1 - Star.airDrag) * speed;
    var starDragHeavy = 1 - (1 - Star.airDragHeavy) * speed;
    var sparkDrag = 1 - (1 - Spark.airDrag) * speed;
    var gAcc = timeStep / 1000 * GRAVITY;

    COLOR_CODES_W_INVIS.forEach(function(color) {
      var stars = Star.active[color];
      for (var i = stars.length - 1; i >= 0; i--) {
        var star = stars[i];

        if (star.updateFrame === currentFrame) {
          continue;
        }
        star.updateFrame = currentFrame;

        star.life -= timeStep;
        if (star.life <= 0) {
          stars.splice(i, 1);
          Star.returnInstance(star);
          continue;
        }

        var burnRate = Math.pow(star.life / star.fullLife, 0.5);
        var burnRateInverse = 1 - burnRate;

        star.prevX = star.x;
        star.prevY = star.y;
        star.x += star.speedX * speed;
        star.y += star.speedY * speed;

        if (!star.heavy) {
          star.speedX *= starDrag;
          star.speedY *= starDrag;
        } else {
          star.speedX *= starDragHeavy;
          star.speedY *= starDragHeavy;
        }

        star.speedY += gAcc;

        if (star.spinRadius) {
          star.spinAngle += star.spinSpeed * speed;
          star.x += Math.sin(star.spinAngle) * star.spinRadius * speed;
          star.y += Math.cos(star.spinAngle) * star.spinRadius * speed;
        }

        if (star.sparkFreq && star.sparkColor) {
          star.sparkTimer -= timeStep;
          while (star.sparkTimer < 0) {
            star.sparkTimer += star.sparkFreq * 0.75 + star.sparkFreq * burnRateInverse * 4;
            var sparkColor = Spark.active[star.sparkColor] ? star.sparkColor : randomColor();
            Spark.add(
              star.x,
              star.y,
              sparkColor,
              Math.random() * PI_2,
              Math.random() * star.sparkSpeed * burnRate,
              star.sparkLife * 0.8 + Math.random() * star.sparkLifeVariation * star.sparkLife
            );
          }
        }

        if (star.life < star.transitionTime) {
          if (star.secondColor && !star.colorChanged) {
            star.colorChanged = true;
            star.color = star.secondColor;
            stars.splice(i, 1);
            Star.active[star.secondColor].push(star);
            if (star.secondColor === INVISIBLE) {
              star.sparkFreq = 0;
            }
          }

          if (star.strobe) {
            star.visible = Math.floor(star.life / star.strobeFreq) % 3 === 0;
          }
        }
      }

      var sparks = Spark.active[color];
      for (var j = sparks.length - 1; j >= 0; j--) {
        var spark = sparks[j];
        spark.life -= timeStep;
        if (spark.life <= 0) {
          sparks.splice(j, 1);
          Spark.returnInstance(spark);
          continue;
        }

        spark.prevX = spark.x;
        spark.prevY = spark.y;
        spark.x += spark.speedX * speed;
        spark.y += spark.speedY * speed;
        spark.speedX *= sparkDrag;
        spark.speedY *= sparkDrag;
        spark.speedY += gAcc;
      }
    });
  }

  function draw() {
    if (!ctx) return;

    ctx.globalCompositeOperation = 'source-over';
    ctx.fillStyle = 'rgba(0, 0, 0, 0.175)';
    ctx.fillRect(0, 0, W, H);

    ctx.globalCompositeOperation = 'lighter';

    ctx.lineWidth = Star.drawWidth;
    ctx.lineCap = isLowQuality ? 'square' : 'round';
    COLOR_CODES.forEach(function(color) {
      var stars = Star.active[color];
      if (!stars.length) return;
      ctx.strokeStyle = color;
      ctx.beginPath();
      stars.forEach(function(star) {
        if (star.visible) {
          ctx.moveTo(star.prevX, star.prevY);
          ctx.lineTo(star.x, star.y);
        }
      });
      ctx.stroke();
    });

    ctx.lineWidth = Spark.drawWidth;
    ctx.lineCap = 'butt';
    COLOR_CODES.forEach(function(color) {
      var sparks = Spark.active[color];
      if (!sparks.length) return;
      ctx.strokeStyle = color;
      ctx.beginPath();
      sparks.forEach(function(spark) {
        ctx.moveTo(spark.prevX, spark.prevY);
        ctx.lineTo(spark.x, spark.y);
      });
      ctx.stroke();
    });

    while (BurstFlash.active.length) {
      var bf = BurstFlash.active.pop();
      var burstGradient = ctx.createRadialGradient(bf.x, bf.y, 0, bf.x, bf.y, bf.radius);
      burstGradient.addColorStop(0.024, 'rgba(255, 255, 255, 1)');
      burstGradient.addColorStop(0.125, 'rgba(255, 160, 20, 0.2)');
      burstGradient.addColorStop(0.32, 'rgba(255, 140, 20, 0.11)');
      burstGradient.addColorStop(1, 'rgba(255, 120, 20, 0)');
      ctx.fillStyle = burstGradient;
      ctx.fillRect(bf.x - bf.radius, bf.y - bf.radius, bf.radius * 2, bf.radius * 2);
      BurstFlash.returnInstance(bf);
    }

    ctx.globalCompositeOperation = 'source-over';
  }

  function launchShell() {
    var preset = shellPresets[Math.floor(Math.random() * shellPresets.length)];
    var shell = new Shell(preset);
    shell.launch(Math.random(), MyMath.random(0.15, 0.7));
  }

  var launchCounter = 0;
  var lastTime = 0;

  function loop(timestamp) {
    var frameTime = lastTime ? timestamp - lastTime : 16.67;
    lastTime = timestamp;

    update(frameTime);
    draw();

    launchCounter++;
    if (launchCounter >= Math.floor(MyMath.random(40, 80))) {
      launchCounter = 0;
      launchShell();
    }

    animId = requestAnimationFrame(loop);
  }

  function init() {
    container = document.getElementById('navContainer');
    if (!container) return;

    container.style.position = container.style.position || 'relative';
    canvas = document.createElement('canvas');
    canvas.id = 'fireworksCanvas';
    canvas.style.cssText = 'position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:0;';
    container.insertBefore(canvas, container.firstChild);

    ctx = canvas.getContext('2d');
    resize();
    window.addEventListener('resize', resize);

    Spark.drawWidth = quality === 3 ? 0.75 : 1;

    launchShell();
    loop(0);
  }

  function destroy() {
    if (animId) cancelAnimationFrame(animId);
    if (canvas && canvas.parentNode) canvas.parentNode.removeChild(canvas);
    window.removeEventListener('resize', resize);
  }

  window.SidebarFireworks = { init: init, destroy: destroy };
})();