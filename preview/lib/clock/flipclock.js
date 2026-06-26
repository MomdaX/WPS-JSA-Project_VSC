// ========== FlipClock 管理器对象 ==========
function FlipClockManager(options) {
  this.options = Object.assign({
    container: '.clock-builder-output',
    clockFace: 'TwentyFourHourClock',
    showSeconds: true,
    size: 'normal',
    theme: 'dark'
  }, options);
  this.clock = null;
  this.init();
}

FlipClockManager.prototype = {
  init: function() {
    if (!window.jQuery) {
      console.warn('FlipClock: jQuery not loaded');
      return;
    }
    var opts = {
      clockFace: this.options.clockFace,
      showSeconds: this.options.showSeconds
    };
    this.clock = jQuery(this.options.container).FlipClock(opts);
    this.setSize(this.options.size);
    this.setTheme(this.options.theme);
  },

  setSize: function(size) {
    this.options.size = size;
    var container = jQuery(this.options.container);
    switch(size) {
      case 'small':
        container.parent().css('transform', 'scale(0.6)');
        break;
      case 'medium':
        container.parent().css('transform', 'scale(0.75)');
        break;
      case 'large':
        container.parent().css('transform', 'scale(1.2)');
        break;
      default:
        container.parent().css('transform', 'scale(1)');
    }
  },

  setTheme: function(theme) {
    this.options.theme = theme;
    var container = jQuery(this.options.container);
    container.removeClass('fc-theme-light fc-theme-dark');
    container.addClass('fc-theme-' + theme);
  },

  start: function() {
    if (this.clock) this.clock.start();
  },

  stop: function() {
    if (this.clock) this.clock.stop();
  },

  setTime: function(hours, minutes, seconds) {
    if (this.clock) {
      var totalSeconds = hours * 3600 + minutes * 60 + seconds;
      this.clock.setTime(totalSeconds);
    }
  },

  getTime: function() {
    if (this.clock) {
      var time = this.clock.getTime();
      return {
        hours: Math.floor(time / 3600),
        minutes: Math.floor((time % 3600) / 60),
        seconds: time % 60
      };
    }
    return null;
  },

  toggleSeconds: function() {
    if (this.clock) {
      this.options.showSeconds = !this.options.showSeconds;
      this.clock.setOptions({ showSeconds: this.options.showSeconds });
    }
  },

  destroy: function() {
    if (this.clock) {
      this.clock.stop();
      this.clock = null;
    }
  }
};