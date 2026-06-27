function Fireworks(options) {
  options = options || {};
  this.container = options.container;
  this.stageW = 0;
  this.stageH = 0;
  this.currentFrame = 0;
  this.simSpeed = options.simSpeed || 1;
  this.GRAVITY = options.gravity || 0.9;
  this.PI_2 = Math.PI * 2;
  this.PI_HALF = Math.PI * 0.5;
  this.quality = options.quality || 2;
  this.isLowQuality = this.quality === 1;
  this.isNormalQuality = this.quality === 2;
  this.isHighQuality = this.quality === 3;

  this.COLOR = {
    Red: '#ff0043',
    Green: '#14fc56',
    Blue: '#1e7fff',
    Purple: '#e60aff',
    Gold: '#ffbf36',
    White: '#ffffff'
  };

  this.INVISIBLE = '_INVISIBLE_';
  this.COLOR_NAMES = Object.keys(this.COLOR);
  this.COLOR_CODES = this.COLOR_NAMES.map(function(colorName) { return this.COLOR[colorName]; }.bind(this));
  this.COLOR_CODES_W_INVIS = this.COLOR_CODES.concat([this.INVISIBLE]);
  this.COLOR_CODE_INDEXES = {};
  this.COLOR_CODES_W_INVIS.forEach(function(code, i) {
    this.COLOR_CODE_INDEXES[code] = i;
  }.bind(this));

  this.COLOR_TUPLES = {};
  this.COLOR_CODES.forEach(function(hex) {
    this.COLOR_TUPLES[hex] = {
      r: parseInt(hex.substr(1, 2), 16),
      g: parseInt(hex.substr(3, 2), 16),
      b: parseInt(hex.substr(5, 2), 16)
    };
  }.bind(this));

  this.lastColor = null;
  this.canvas = null;
  this.ctx = null;
  this.trailsCanvas = null;
  this.trailsCtx = null;
  this.W = 0;
  this.H = 0;
  this.animId = null;
  this.dpr = 1;

  this.launchCounter = 0;
  this.lastTime = 0;

  this.Star = this._createStarClass();
  this.Spark = this._createSparkClass();
  this.BurstFlash = this._createBurstFlashClass();
  this.Shell = this._createShellClass();
}

Fireworks.prototype.randomColor = function(options) {
  options = options || {};
  var notSame = options.notSame;
  var notColor = options.notColor;
  var limitWhite = options.limitWhite;
  var color = this.COLOR_CODES[Math.random() * this.COLOR_CODES.length | 0];

  if (limitWhite && color === this.COLOR.White && Math.random() < 0.6) {
    color = this.COLOR_CODES[Math.random() * this.COLOR_CODES.length | 0];
  }

  if (notSame) {
    while (color === this.lastColor) {
      color = this.COLOR_CODES[Math.random() * this.COLOR_CODES.length | 0];
    }
  } else if (notColor) {
    while (color === notColor) {
      color = this.COLOR_CODES[Math.random() * this.COLOR_CODES.length | 0];
    }
  }

  this.lastColor = color;
  return color;
};

Fireworks.prototype.whiteOrGold = function() {
  return Math.random() < 0.5 ? this.COLOR.Gold : this.COLOR.White;
};

Fireworks.prototype.makePistilColor = function(shellColor) {
  return (shellColor === this.COLOR.White || shellColor === this.COLOR.Gold) ? this.randomColor({ notColor: shellColor }) : this.whiteOrGold();
};

Fireworks.prototype._createParticleCollection = function() {
  var collection = {};
  this.COLOR_CODES_W_INVIS.forEach(function(color) {
    collection[color] = [];
  });
  return collection;
};

Fireworks.prototype._createStarClass = function() {
  var self = this;
  return {
    drawWidth: 3,
    airDrag: 0.98,
    airDragHeavy: 0.992,
    active: self._createParticleCollection(),
    _pool: [],

    _new: function() { return {}; },

    add: function(x, y, color, angle, speed, life, speedOffX, speedOffY) {
      var instance = this._pool.pop() || this._new();
      instance.visible = true;
      instance.heavy = false;
      instance.x = x;
      instance.y = y;
      instance.prevX = x;
      instance.prevY = y;
      instance.color = color === 'random' ? self.randomColor() : color;
      instance.speedX = Math.sin(angle) * speed + (speedOffX || 0);
      instance.speedY = Math.cos(angle) * speed + (speedOffY || 0);
      instance.life = life;
      instance.fullLife = life;
      instance.spinAngle = Math.random() * self.PI_2;
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
        actualColor = self.COLOR_CODES[Math.random() * self.COLOR_CODES.length | 0];
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
};

Fireworks.prototype._createSparkClass = function() {
  var self = this;
  return {
    drawWidth: 0.75,
    airDrag: 0.9,
    active: self._createParticleCollection(),
    _pool: [],

    _new: function() { return {}; },

    add: function(x, y, color, angle, speed, life) {
      var instance = this._pool.pop() || this._new();
      instance.x = x;
      instance.y = y;
      instance.prevX = x;
      instance.prevY = y;
      instance.color = color === 'random' ? self.randomColor() : color;
      instance.speedX = Math.sin(angle) * speed;
      instance.speedY = Math.cos(angle) * speed;
      instance.life = life;

      var actualColor = instance.color;
      if (!this.active[actualColor]) {
        actualColor = self.COLOR_CODES[Math.random() * self.COLOR_CODES.length | 0];
        instance.color = actualColor;
      }
      this.active[actualColor].push(instance);
      return instance;
    },

    returnInstance: function(instance) {
      this._pool.push(instance);
    }
  };
};

Fireworks.prototype._createBurstFlashClass = function() {
  return {
    active: [],
    _pool: [],

    _new: function() { return {}; },

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
};

Fireworks.prototype._createShellClass = function() {
  var self = this;
  var shellPresets = [
    { spreadSize: 160, starLife: 1000, starDensity: 1.2, color: 'random', glitter: 'heavy', pistil: true, pistilColor: self.COLOR.White },
    { spreadSize: 140, starLife: 900, starDensity: 1.0, color: 'random', ring: true, glitter: 'medium' },
    { spreadSize: 180, starLife: 1400, starDensity: 1.0, color: 'random', glitter: 'willow', fallingLeaves: true },
    { spreadSize: 120, starLife: 800, starDensity: 0.9, color: 'random', crossette: true, glitter: 'medium' },
    { spreadSize: 150, starLife: 1000, starDensity: 1.0, color: 'random', floral: true, glitter: 'light' },
    { spreadSize: 160, starLife: 900, starDensity: 1.0, color: 'random', crackle: true, glitter: 'light' },
    { spreadSize: 150, starLife: 1000, starDensity: 1.0, color: 'random', pistil: true, glitter: 'streamer' },
    { spreadSize: 130, starLife: 900, starDensity: 0.9, color: 'random', horsetail: true, glitter: 'medium' }
  ];

  function MyMath() {}
  MyMath.random = function(min, max) { return Math.random() * (max - min) + min; };
  MyMath.pointDist = function(x1, y1, x2, y2) { return Math.hypot(x2 - x1, y2 - y1); };
  MyMath.pointAngle = function(x1, y1, x2, y2) { return Math.atan2(y2 - y1, x2 - x1); };

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
    arcLength = typeof arcLength === 'number' ? arcLength : self.PI_2;
    var R = 0.5 * Math.sqrt(count / Math.PI);
    var C = 2 * R * Math.PI;
    var C_HALF = C / 2;

    for (var i = 0; i <= C_HALF; i++) {
      var ringAngle = i / C_HALF * self.PI_HALF;
      var ringSize = Math.cos(ringAngle);
      var partsPerFullRing = C * ringSize;
      var partsPerArc = partsPerFullRing * (arcLength / self.PI_2);
      var angleInc = self.PI_2 / partsPerFullRing;
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
    var startAngle = Math.random() * self.PI_HALF;
    createParticleArc(startAngle, self.PI_2, 4, 0.5, function(angle) {
      self.Star.add(star.x, star.y, star.color, angle, Math.random() * 0.6 + 0.75, 600);
    });
  }

  function floralEffect(star) {
    var count = 12 + 6 * self.quality;
    createBurst(count, function(angle, speedMult) {
      self.Star.add(star.x, star.y, star.color, angle, speedMult * 2.4, 1000 + Math.random() * 300, star.speedX, star.speedY);
    });
    self.BurstFlash.add(star.x, star.y, 46);
  }

  function fallingLeavesEffect(star) {
    createBurst(7, function(angle, speedMult) {
      var newStar = self.Star.add(star.x, star.y, self.INVISIBLE, angle, speedMult * 2.4, 2400 + Math.random() * 600, star.speedX, star.speedY);
      newStar.sparkColor = self.COLOR.Gold;
      newStar.sparkFreq = 144 / self.quality;
      newStar.sparkSpeed = 0.28;
      newStar.sparkLife = 750;
      newStar.sparkLifeVariation = 3.2;
    });
    self.BurstFlash.add(star.x, star.y, 46);
  }

  function crackleEffect(star) {
    var count = self.isHighQuality ? 32 : 16;
    createParticleArc(0, self.PI_2, count, 1.8, function(angle) {
      self.Spark.add(star.x, star.y, self.COLOR.Gold, angle, Math.pow(Math.random(), 0.45) * 2.4, 300 + Math.random() * 200);
    });
  }

  return {
    presets: shellPresets,

    create: function(options) {
      options = options || {};
      var preset = options.preset || shellPresets[Math.floor(Math.random() * shellPresets.length)];
      var opts = {};
      Object.assign(opts, preset, options);

      var selfShell = {};
      Object.assign(selfShell, opts);
      selfShell.starLifeVariation = opts.starLifeVariation || 0.125;
      selfShell.color = opts.color || self.randomColor();
      selfShell.glitterColor = opts.glitterColor || selfShell.color;

      if (!selfShell.starCount) {
        var density = opts.starDensity || 1;
        var scaledSize = selfShell.spreadSize / 54;
        selfShell.starCount = Math.max(6, scaledSize * scaledSize * density);
      }

      selfShell.launch = function(position, launchHeight) {
        var width = self.stageW;
        var height = self.stageH;
        var hpad = 20;
        var vpad = 50;
        var minHeightPercent = 0.45;
        var minHeight = height - height * minHeightPercent;

        var launchX = position * (width - hpad * 2) + hpad;
        var launchY = height;
        var burstY = minHeight - (launchHeight * (minHeight - vpad));

        var launchDistance = launchY - burstY;
        var launchVelocity = Math.pow(launchDistance * 0.04, 0.64);

        var comet = this.comet = self.Star.add(
          launchX, launchY,
          typeof this.color === 'string' && this.color !== 'random' ? this.color : self.COLOR.White,
          Math.PI,
          launchVelocity * (this.horsetail ? 1.2 : 1),
          launchVelocity * (this.horsetail ? 100 : 400)
        );

        comet.heavy = true;
        comet.spinRadius = MyMath.random(0.32, 0.85);
        comet.sparkFreq = 32 / self.quality;
        if (self.isHighQuality) comet.sparkFreq = 8;
        comet.sparkLife = 320;
        comet.sparkLifeVariation = 3;

        if (this.glitter === 'willow' || this.fallingLeaves) {
          comet.sparkFreq = 20 / self.quality;
          comet.sparkSpeed = 0.5;
          comet.sparkLife = 500;
        }

        if (this.color === self.INVISIBLE) {
          comet.sparkColor = self.COLOR.Gold;
        }

        if (Math.random() > 0.4 && !this.horsetail) {
          comet.secondColor = self.INVISIBLE;
          comet.transitionTime = Math.pow(Math.random(), 1.5) * 700 + 500;
        }

        var selfShellRef = this;
        comet.onDeath = function(cometInstance) {
          selfShellRef.burst(cometInstance.x, cometInstance.y);
        };
      };

      selfShell.burst = function(x, y) {
        var speed = this.spreadSize / 96;
        var color, onDeath, sparkFreq, sparkSpeed, sparkLife;
        var sparkLifeVariation = 0.25;

        if (this.crossette) onDeath = crossetteEffect;
        if (this.crackle) onDeath = crackleEffect;
        if (this.floral) onDeath = floralEffect;
        if (this.fallingLeaves) onDeath = fallingLeavesEffect;

        if (this.glitter === 'light') {
          sparkFreq = 400; sparkSpeed = 0.3; sparkLife = 300; sparkLifeVariation = 2;
        } else if (this.glitter === 'medium') {
          sparkFreq = 200; sparkSpeed = 0.44; sparkLife = 700; sparkLifeVariation = 2;
        } else if (this.glitter === 'heavy') {
          sparkFreq = 80; sparkSpeed = 0.8; sparkLife = 1400; sparkLifeVariation = 2;
        } else if (this.glitter === 'thick') {
          sparkFreq = 16; sparkSpeed = self.isHighQuality ? 1.65 : 1.5; sparkLife = 1400; sparkLifeVariation = 3;
        } else if (this.glitter === 'streamer') {
          sparkFreq = 32; sparkSpeed = 1.05; sparkLife = 620; sparkLifeVariation = 2;
        } else if (this.glitter === 'willow') {
          sparkFreq = 120; sparkSpeed = 0.34; sparkLife = 1400; sparkLifeVariation = 3.8;
        }

        sparkFreq = sparkFreq || 120;
        sparkFreq = sparkFreq / self.quality;

        var selfShellRef = this;
        var starFactory = function(angle, speedMult) {
          var standardInitialSpeed = selfShellRef.spreadSize / 1800;
          var star = self.Star.add(
            x, y,
            color || self.randomColor(),
            angle,
            speedMult * speed,
            selfShellRef.starLife + Math.random() * selfShellRef.starLife * selfShellRef.starLifeVariation,
            selfShellRef.horsetail ? (selfShellRef.comet && selfShellRef.comet.speedX) : 0,
            selfShellRef.horsetail ? (selfShellRef.comet && selfShellRef.comet.speedY) : -standardInitialSpeed
          );

          if (selfShellRef.secondColor) {
            star.transitionTime = selfShellRef.starLife * (Math.random() * 0.05 + 0.32);
            star.secondColor = selfShellRef.secondColor;
          }

          if (selfShellRef.strobe) {
            star.transitionTime = selfShellRef.starLife * (Math.random() * 0.08 + 0.46);
            star.strobe = true;
            star.strobeFreq = Math.random() * 20 + 40;
            if (selfShellRef.strobeColor) {
              star.secondColor = selfShellRef.strobeColor;
            }
          }

          star.onDeath = onDeath;

          if (selfShellRef.glitter) {
            star.sparkFreq = sparkFreq;
            star.sparkSpeed = sparkSpeed;
            star.sparkLife = sparkLife;
            star.sparkLifeVariation = sparkLifeVariation;
            star.sparkColor = selfShellRef.glitterColor;
            star.sparkTimer = Math.random() * star.sparkFreq;
          }
        };

        if (typeof this.color === 'string') {
          if (this.color === 'random') {
            color = null;
          } else {
            color = this.color;
          }

          if (this.ring) {
            var ringStartAngle = Math.random() * Math.PI;
            var ringSquash = Math.pow(Math.random(), 2) * 0.85 + 0.15;

            createParticleArc(0, self.PI_2, this.starCount, 0, function(angle) {
              var initSpeedX = Math.sin(angle) * speed * ringSquash;
              var initSpeedY = Math.cos(angle) * speed;
              var newSpeed = MyMath.pointDist(0, 0, initSpeedX, initSpeedY);
              var newAngle = MyMath.pointAngle(0, 0, initSpeedX, initSpeedY) + ringStartAngle;
              var star = self.Star.add(x, y, color, newAngle, newSpeed, selfShellRef.starLife + Math.random() * selfShellRef.starLife * selfShellRef.starLifeVariation);

              if (selfShellRef.glitter) {
                star.sparkFreq = sparkFreq;
                star.sparkSpeed = sparkSpeed;
                star.sparkLife = sparkLife;
                star.sparkLifeVariation = sparkLifeVariation;
                star.sparkColor = selfShellRef.glitterColor;
                star.sparkTimer = Math.random() * star.sparkFreq;
              }
            });
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
          var innerShell = self.Shell.create({
            spreadSize: this.spreadSize * 0.5,
            starLife: this.starLife * 0.6,
            starLifeVariation: this.starLifeVariation,
            starDensity: 1.4,
            color: this.pistilColor,
            glitter: 'light',
            glitterColor: this.pistilColor === self.COLOR.Gold ? self.COLOR.Gold : self.COLOR.White
          });
          innerShell.burst(x, y);
        }

        if (this.streamers) {
          var streamShell = self.Shell.create({
            spreadSize: this.spreadSize * 0.9,
            starLife: this.starLife * 0.8,
            starLifeVariation: this.starLifeVariation,
            starCount: Math.floor(Math.max(6, this.spreadSize / 45)),
            color: self.COLOR.White,
            glitter: 'streamer'
          });
          streamShell.burst(x, y);
        }

        self.BurstFlash.add(x, y, this.spreadSize / 4);
      };

      return selfShell;
    }
  };
};

Fireworks.prototype.resize = function() {
  this.W = window.innerWidth;
  this.H = window.innerHeight;
  this.dpr = window.devicePixelRatio || 1;

  this.canvas.width = Math.max(1, Math.floor(this.W * this.dpr));
  this.canvas.height = Math.max(1, Math.floor(this.H * this.dpr));
  this.canvas.style.width = this.W + 'px';
  this.canvas.style.height = this.H + 'px';
  this.ctx.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);

  this.trailsCanvas.width = Math.max(1, Math.floor(this.W * this.dpr));
  this.trailsCanvas.height = Math.max(1, Math.floor(this.H * this.dpr));
  this.trailsCanvas.style.width = this.W + 'px';
  this.trailsCanvas.style.height = this.H + 'px';
  this.trailsCtx.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);

  this.stageW = this.W;
  this.stageH = this.H;
};

Fireworks.prototype.update = function(frameTime) {
  this.currentFrame++;

  var width = this.stageW;
  var height = this.stageH;
  var timeStep = frameTime * this.simSpeed;
  var speed = this.simSpeed;

  var starDrag = 1 - (1 - this.Star.airDrag) * speed;
  var starDragHeavy = 1 - (1 - this.Star.airDragHeavy) * speed;
  var sparkDrag = 1 - (1 - this.Spark.airDrag) * speed;
  var gAcc = timeStep / 1000 * this.GRAVITY;

  this.COLOR_CODES_W_INVIS.forEach(function(color) {
    var stars = this.Star.active[color];
    for (var i = stars.length - 1; i >= 0; i--) {
      var star = stars[i];

      if (star.updateFrame === this.currentFrame) {
        continue;
      }
      star.updateFrame = this.currentFrame;

      star.life -= timeStep;
      if (star.life <= 0) {
        stars.splice(i, 1);
        this.Star.returnInstance(star);
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
          var sparkColor = this.Spark.active[star.sparkColor] ? star.sparkColor : this.randomColor();
          this.Spark.add(star.x, star.y, sparkColor, Math.random() * this.PI_2, Math.random() * star.sparkSpeed * burnRate, star.sparkLife * 0.8 + Math.random() * star.sparkLifeVariation * star.sparkLife);
        }
      }

      if (star.life < star.transitionTime) {
        if (star.secondColor && !star.colorChanged) {
          star.colorChanged = true;
          star.color = star.secondColor;
          stars.splice(i, 1);
          this.Star.active[star.secondColor].push(star);
          if (star.secondColor === this.INVISIBLE) {
            star.sparkFreq = 0;
          }
        }

        if (star.strobe) {
          star.visible = Math.floor(star.life / star.strobeFreq) % 3 === 0;
        }
      }
    }

    var sparks = this.Spark.active[color];
    for (var j = sparks.length - 1; j >= 0; j--) {
      var spark = sparks[j];
      spark.life -= timeStep;
      if (spark.life <= 0) {
        sparks.splice(j, 1);
        this.Spark.returnInstance(spark);
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
  }.bind(this));
};

Fireworks.prototype.draw = function() {
  if (!this.ctx || !this.trailsCtx) return;

  this.trailsCtx.globalCompositeOperation = 'source-over';
  this.trailsCtx.fillStyle = 'rgba(0, 0, 0, ' + (0.08 * this.simSpeed) + ')';
  this.trailsCtx.fillRect(0, 0, this.W, this.H);

  this.trailsCtx.globalCompositeOperation = 'lighter';

  this.trailsCtx.lineWidth = this.Star.drawWidth;
  this.trailsCtx.lineCap = this.isLowQuality ? 'square' : 'round';
  this.COLOR_CODES.forEach(function(color) {
    var stars = this.Star.active[color];
    if (!stars.length) return;
    this.trailsCtx.strokeStyle = color;
    this.trailsCtx.beginPath();
    stars.forEach(function(star) {
      if (star.visible) {
        this.trailsCtx.moveTo(star.prevX, star.prevY);
        this.trailsCtx.lineTo(star.x, star.y);
      }
    }.bind(this));
    this.trailsCtx.stroke();
  }.bind(this));

  this.trailsCtx.lineWidth = this.Spark.drawWidth;
  this.trailsCtx.lineCap = 'butt';
  this.COLOR_CODES.forEach(function(color) {
    var sparks = this.Spark.active[color];
    if (!sparks.length) return;
    this.trailsCtx.strokeStyle = color;
    this.trailsCtx.beginPath();
    sparks.forEach(function(spark) {
      this.trailsCtx.moveTo(spark.prevX, spark.prevY);
      this.trailsCtx.lineTo(spark.x, spark.y);
    }.bind(this));
    this.trailsCtx.stroke();
  }.bind(this));

  while (this.BurstFlash.active.length) {
    var bf = this.BurstFlash.active.pop();
    var burstGradient = this.trailsCtx.createRadialGradient(bf.x, bf.y, 0, bf.x, bf.y, bf.radius);
    burstGradient.addColorStop(0.024, 'rgba(255, 255, 255, 1)');
    burstGradient.addColorStop(0.125, 'rgba(255, 160, 20, 0.2)');
    burstGradient.addColorStop(0.32, 'rgba(255, 140, 20, 0.11)');
    burstGradient.addColorStop(1, 'rgba(255, 120, 20, 0)');
    this.trailsCtx.fillStyle = burstGradient;
    this.trailsCtx.fillRect(bf.x - bf.radius, bf.y - bf.radius, bf.radius * 2, bf.radius * 2);
    this.BurstFlash.returnInstance(bf);
  }

  this.ctx.globalCompositeOperation = 'source-over';
  this.ctx.clearRect(0, 0, this.W, this.H);
  this.ctx.drawImage(this.trailsCanvas, 0, 0, this.W, this.H);

  this.trailsCtx.globalCompositeOperation = 'source-over';
};

Fireworks.prototype.launchShell = function() {
  var shell = this.Shell.create();
  shell.launch(Math.random(), Math.random() * 0.55 + 0.15);
};

Fireworks.prototype.loop = function(timestamp) {
  var frameTime = this.lastTime ? timestamp - this.lastTime : 16.67;
  this.lastTime = timestamp;

  this.update(frameTime);
  this.draw();

  this.launchCounter++;
  if (this.launchCounter >= Math.floor(Math.random() * 40 + 40)) {
    this.launchCounter = 0;
    this.launchShell();
  }

  this.animId = requestAnimationFrame(this.loop.bind(this));
};

Fireworks.prototype.init = function() {
  if (!this.container) return;

  this.trailsCanvas = document.createElement('canvas');
  this.trailsCanvas.id = 'fireworksTrailsCanvas';
  this.trailsCanvas.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:1;opacity:3;';
  this.container.insertBefore(this.trailsCanvas, this.container.firstChild);
  this.trailsCtx = this.trailsCanvas.getContext('2d');

  this.canvas = document.createElement('canvas');
  this.canvas.id = 'fireworksCanvas';
  this.canvas.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:1;';
  this.container.insertBefore(this.canvas, this.container.firstChild);

  this.ctx = this.canvas.getContext('2d');
  this.resize();
  this._boundResize = this.resize.bind(this);
  window.addEventListener('resize', this._boundResize);

  this.Spark.drawWidth = this.quality === 3 ? 0.75 : 1;

  this.launchCounter = 0;
  this.lastTime = 0;

  this.COLOR_CODES_W_INVIS.forEach(function(color) {
    this.Star.active[color] = [];
    this.Spark.active[color] = [];
  }.bind(this));
  this.BurstFlash.active = [];

  this.launchShell();
  this.loop(0);
};

Fireworks.prototype.destroy = function() {
  if (this.animId) cancelAnimationFrame(this.animId);
  if (this.canvas && this.canvas.parentNode) this.canvas.parentNode.removeChild(this.canvas);
  if (this.trailsCanvas && this.trailsCanvas.parentNode) this.trailsCanvas.parentNode.removeChild(this.trailsCanvas);
  if (this._boundResize) window.removeEventListener('resize', this._boundResize);
};

Fireworks.prototype.launch = function(options) {
  var shell = this.Shell.create(options);
  var position = options && options.position !== undefined ? options.position : Math.random();
  var launchHeight = options && options.launchHeight !== undefined ? options.launchHeight : Math.random() * 0.55 + 0.15;
  shell.launch(position, launchHeight);
};
