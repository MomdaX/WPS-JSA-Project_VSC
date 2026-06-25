(function(e) {
    function t(t) {
        for (var c, r, i = t[0], u = t[1], a = t[2], m = 0, f = []; m < i.length; m++)
            r = i[m],
            Object.prototype.hasOwnProperty.call(o, r) && o[r] && f.push(o[r][0]),
            o[r] = 0;
        for (c in u)
            Object.prototype.hasOwnProperty.call(u, c) && (e[c] = u[c]);
        s && s(t);
        while (f.length)
            f.shift()();
        return l.push.apply(l, a || []),
        n()
    }
    function n() {
        for (var e, t = 0; t < l.length; t++) {
            for (var n = l[t], c = !0, i = 1; i < n.length; i++) {
                var u = n[i];
                0 !== o[u] && (c = !1)
            }
            c && (l.splice(t--, 1),
            e = r(r.s = n[0]))
        }
        return e
    }
    var c = {}
      , o = {
        app: 0
    }
      , l = [];
    function r(t) {
        if (c[t])
            return c[t].exports;
        var n = c[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(n.exports, n, n.exports, r),
        n.l = !0,
        n.exports
    }
    r.m = e,
    r.c = c,
    r.d = function(e, t, n) {
        r.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }
    ,
    r.r = function(e) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    r.t = function(e, t) {
        if (1 & t && (e = r(e)),
        8 & t)
            return e;
        if (4 & t && "object" === typeof e && e && e.__esModule)
            return e;
        var n = Object.create(null);
        if (r.r(n),
        Object.defineProperty(n, "default", {
            enumerable: !0,
            value: e
        }),
        2 & t && "string" != typeof e)
            for (var c in e)
                r.d(n, c, function(t) {
                    return e[t]
                }
                .bind(null, c));
        return n
    }
    ,
    r.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e["default"]
        }
        : function() {
            return e
        }
        ;
        return r.d(t, "a", t),
        t
    }
    ,
    r.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    r.p = "";
    var i = window["webpackJsonp"] = window["webpackJsonp"] || []
      , u = i.push.bind(i);
    i.push = t,
    i = i.slice();
    for (var a = 0; a < i.length; a++)
        t(i[a]);
    var s = u;
    l.push([0, "chunk-vendors"]),
    n()
}
)({
    0: function(e, t, n) {
        e.exports = n("56d7")
    },
    "29e8": function(e, t, n) {},
    "2b0f": function(e, t, n) {
        "use strict";
        n("837a")
    },
    "33e6": function(e, t, n) {},
    "56d7": function(e, t, n) {
        "use strict";
        n.r(t);
        n("e260"),
        n("e6cf"),
        n("cca6"),
        n("a79d");
        var c = n("7a23")
          , o = {
            key: 0,
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            style: {
                fill: "rgba(112, 112, 112, 0.5)"
            }
        }
          , l = Object(c["e"])("path", {
            d: "M6 21v-3H3v-2h5v5zm10 0v-5h5v2h-3v3zM3 8V6h3V3h2v5zm13 0V3h2v3h3v2z"
        }, null, -1)
          , r = {
            key: 1,
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            style: {
                fill: "#ffffff"
            }
        }
          , i = Object(c["e"])("path", {
            d: "M3 21v-5h2v3h3v2zm13 0v-2h3v-3h2v5zM3 8V3h5v2H5v3zm16 0V5h-3V3h5v5z"
        }, null, -1)
          , u = {
            key: 0,
            ref: "fullScreenElement",
            style: {
                position: "fixed",
                top: "0",
                left: "0",
                right: "0",
                bottom: "0"
            }
        }
          , a = Object(c["e"])("h1", null, "全屏模式", -1)
          , s = {
            class: "bg"
        }
          , m = {
            key: 0,
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "#ffffff"
        }
          , f = Object(c["e"])("path", {
            d: "M6 19h4V5H6v14zm8-14v14h4V5h-4z"
        }, null, -1)
          , d = {
            key: 1,
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "#ffffff"
        }
          , h = Object(c["e"])("path", {
            d: "M6 4l15 8-15 8z"
        }, null, -1)
          , p = Object(c["e"])("path", {
            d: "M0 0h24v24H0z",
            fill: "none"
        }, null, -1)
          , b = {
            class: "set_box_inner"
        }
          , v = Object(c["e"])("div", {
            class: "setName"
        }, "小时格式:", -1)
          , g = {
            class: "pickItem"
        }
          , O = Object(c["e"])("div", {
            class: "setName"
        }, "缩放比例:", -1)
          , j = {
            style: {
                width: "32px",
                "padding-left": "8px"
            }
        }
          , w = Object(c["e"])("div", {
            class: "setName"
        }, "亮度调节:", -1)
          , y = {
            style: {
                width: "32px",
                "padding-left": "8px"
            }
        }
          , S = Object(c["e"])("div", {
            class: "setName"
        }, "显示:", -1)
          , x = Object(c["e"])("span", null, "背景", -1)
          , T = Object(c["e"])("span", null, "秒", -1)
          , k = Object(c["e"])("div", {
            class: "setName"
        }, "正计时:", -1)
          , _ = Object(c["e"])("div", {
            class: "setName"
        }, "倒计时:", -1)
          , F = Object(c["e"])("span", {
            class: "iconTime"
        }, null, -1)
          , V = Object(c["e"])("span", {
            style: {
                "vertical-align": "middle"
            }
        }, "5m", -1)
          , C = Object(c["e"])("span", {
            class: "iconTime"
        }, null, -1)
          , M = Object(c["e"])("span", {
            style: {
                "vertical-align": "middle"
            }
        }, "10m", -1)
          , B = Object(c["e"])("span", {
            class: "iconTomato"
        }, null, -1)
          , z = Object(c["e"])("span", {
            style: {
                "vertical-align": "middle"
            }
        }, "25m", -1)
          , R = Object(c["e"])("span", {
            class: "iconCancel"
        }, null, -1)
          , H = Object(c["e"])("span", {
            style: {
                "vertical-align": "middle"
            }
        }, "关闭", -1)
          , q = Object(c["e"])("div", {
            class: "setName"
        }, "自定义:", -1)
          , I = Object(c["e"])("footer", {
            style: {
                position: "relative",
                margin: "-2px 20px 0px"
            }
        }, [Object(c["e"])("a", {
            href: "https://flipflow.neverup.cn/guide/help.html",
            target: "_blank",
            style: {
                color: "#666",
                "text-decoration": "none",
                "font-size": "15px"
            }
        }, " 帮助文档 "), Object(c["e"])("span", {
            style: {
                position: "absolute",
                right: "0",
                color: "#fff"
            }
        })], -1);
        function N(e, t, n, N, A, D) {
            var E = Object(c["m"])("clock")
              , P = Object(c["m"])("slider")
              , W = Object(c["m"])("timePicker")
              , L = Object(c["m"])("setbox");
            return Object(c["h"])(),
            Object(c["c"])(c["a"], null, [Object(c["e"])("div", null, [Object(c["e"])("button", {
                onClick: t[1] || (t[1] = function() {
                    return D.toggleFullScreen && D.toggleFullScreen.apply(D, arguments)
                }
                ),
                style: {
                    "z-index": "1000",
                    width: "24px",
                    height: "24px",
                    position: "fixed",
                    bottom: "10px",
                    left: "10px",
                    "background-color": "transparent",
                    border: "none"
                }
            }, [A.isFullScreen ? (Object(c["h"])(),
            Object(c["c"])("svg", o, [l])) : (Object(c["h"])(),
            Object(c["c"])("svg", r, [i]))]), A.isFullScreen ? (Object(c["h"])(),
            Object(c["c"])("div", u, [a], 512)) : Object(c["d"])("", !0)]), Object(c["e"])("div", s, [Object(c["e"])("div", {
                class: "timer",
                style: {
                    transform: "translateY(-50%) scale(" + e.scale / 100 + ")",
                    filter: "brightness(" + e.brightness / 100 + ")"
                }
            }, [Object(c["e"])(E, {
                class: [e.showSecond ? "timer_hms" : "timer_hm"],
                cid: "clock_h",
                msg: e.num_h,
                ampm: 0 === e.hourFormat,
                bg: e.showBg
            }, null, 8, ["class", "msg", "ampm", "bg"]), Object(c["e"])(E, {
                class: [e.showSecond ? "timer_hms" : "timer_hm"],
                cid: "clock_m",
                msg: e.num_m,
                bg: e.showBg
            }, null, 8, ["class", "msg", "bg"]), e.showSecond ? (Object(c["h"])(),
            Object(c["c"])(E, {
                key: 0,
                class: [e.showSecond ? "timer_hms" : "timer_hm"],
                cid: "clock_s",
                msg: e.num_s,
                bg: e.showBg
            }, null, 8, ["class", "msg", "bg"])) : Object(c["d"])("", !0)], 4), Object(c["t"])(Object(c["e"])("div", {
                class: "watchBtn",
                onClick: t[3] || (t[3] = function() {
                    return N.startStop && N.startStop.apply(N, arguments)
                }
                )
            }, [Object(c["e"])("div", null, [e.watching ? (Object(c["h"])(),
            Object(c["c"])("svg", m, [f])) : (Object(c["h"])(),
            Object(c["c"])("svg", d, [h, p]))]), Object(c["e"])("button", {
                class: "timerBtnplus",
                onClick: t[2] || (t[2] = function() {
                    return N.cancelTimer && N.cancelTimer.apply(N, arguments)
                }
                )
            })], 512), [[c["q"], e.timeMode > 0]]), Object(c["e"])(L, {
                class: "set_box",
                ref: "setRef",
                onCloseSet: N.saveSet
            }, {
                default: Object(c["s"])((function() {
                    return [Object(c["e"])("ul", b, [Object(c["e"])("li", null, [v, Object(c["e"])("ul", g, [Object(c["e"])("li", {
                        onClick: t[4] || (t[4] = function(t) {
                            return e.hourFormat = 0
                        }
                        ),
                        onTouchstart: t[5] || (t[5] = function(t) {
                            return e.hourFormat = 0
                        }
                        ),
                        class: {
                            "pick-active": 0 === e.hourFormat
                        }
                    }, "12h ", 34), Object(c["e"])("li", {
                        onClick: t[6] || (t[6] = function(t) {
                            return e.hourFormat = 1
                        }
                        ),
                        onTouchstart: t[7] || (t[7] = function(t) {
                            return e.hourFormat = 1
                        }
                        ),
                        class: {
                            "pick-active": 1 === e.hourFormat
                        }
                    }, "24h ", 34), Object(c["e"])("li", {
                        onClick: t[8] || (t[8] = function(t) {
                            return e.hourFormat = 2
                        }
                        ),
                        onTouchstart: t[9] || (t[9] = function(t) {
                            return e.hourFormat = 2
                        }
                        ),
                        class: {
                            "pick-active": 2 === e.hourFormat
                        }
                    }, "024h ", 34)])]), Object(c["e"])("li", null, [O, Object(c["e"])(P, {
                        modelValue: e.scale,
                        "onUpdate:modelValue": t[10] || (t[10] = function(t) {
                            return e.scale = t
                        }
                        )
                    }, null, 8, ["modelValue"]), Object(c["e"])("div", j, Object(c["n"])(e.scale), 1)]), Object(c["e"])("li", null, [w, Object(c["e"])(P, {
                        modelValue: e.brightness,
                        "onUpdate:modelValue": t[11] || (t[11] = function(t) {
                            return e.brightness = t
                        }
                        )
                    }, null, 8, ["modelValue"]), Object(c["e"])("div", y, Object(c["n"])(e.brightness), 1)]), Object(c["e"])("li", null, [S, Object(c["e"])("div", {
                        onClick: t[13] || (t[13] = function(t) {
                            return e.showBg = !e.showBg
                        }
                        ),
                        onTouchstart: t[14] || (t[14] = function(t) {
                            return e.showBg = !e.showBg
                        }
                        ),
                        style: {
                            "margin-right": "12px",
                            cursor: "pointer"
                        }
                    }, [Object(c["t"])(Object(c["e"])("input", {
                        type: "checkbox",
                        "onUpdate:modelValue": t[12] || (t[12] = function(t) {
                            return e.showBg = t
                        }
                        ),
                        style: {
                            margin: "0",
                            "vertical-align": "middle",
                            width: "18px",
                            height: "18px",
                            cursor: "pointer"
                        }
                    }, null, 512), [[c["p"], e.showBg]]), x], 32), Object(c["e"])("div", {
                        onClick: t[16] || (t[16] = function(t) {
                            return e.showSecond = !e.showSecond
                        }
                        ),
                        onTouchstart: t[17] || (t[17] = function(t) {
                            return e.showSecond = !e.showSecond
                        }
                        ),
                        style: {
                            cursor: "pointer"
                        }
                    }, [Object(c["t"])(Object(c["e"])("input", {
                        type: "checkbox",
                        "onUpdate:modelValue": t[15] || (t[15] = function(t) {
                            return e.showSecond = t
                        }
                        ),
                        style: {
                            margin: "0",
                            "vertical-align": "middle",
                            width: "18px",
                            height: "18px",
                            cursor: "pointer"
                        }
                    }, null, 512), [[c["p"], e.showSecond]]), T], 32)]), Object(c["e"])("li", null, [k, Object(c["e"])("button", {
                        class: "timerBtn startBtn",
                        onClick: t[18] || (t[18] = function() {
                            return N.stopWatch && N.stopWatch.apply(N, arguments)
                        }
                        ),
                        onTouchstart: t[19] || (t[19] = function() {
                            return N.stopWatch && N.stopWatch.apply(N, arguments)
                        }
                        )
                    }, "开始", 32), Object(c["e"])("button", {
                        class: "timerBtn startBtn",
                        onClick: t[20] || (t[20] = function() {
                            return N.cancelWatch && N.cancelWatch.apply(N, arguments)
                        }
                        ),
                        onTouchstart: t[21] || (t[21] = function() {
                            return N.cancelWatch && N.cancelWatch.apply(N, arguments)
                        }
                        )
                    }, "重置", 32)]), Object(c["e"])("li", null, [_, Object(c["e"])("button", {
                        class: "timerBtn",
                        onClick: t[22] || (t[22] = function(e) {
                            return N.getTimer(5)
                        }
                        ),
                        onTouchstart: t[23] || (t[23] = function(e) {
                            return N.getTimer(5)
                        }
                        )
                    }, [F, V], 32), Object(c["e"])("button", {
                        class: "timerBtn",
                        onClick: t[24] || (t[24] = function(e) {
                            return N.getTimer(10)
                        }
                        ),
                        onTouchstart: t[25] || (t[25] = function(e) {
                            return N.getTimer(10)
                        }
                        )
                    }, [C, M], 32), Object(c["e"])("button", {
                        class: "timerBtn",
                        onClick: t[26] || (t[26] = function(e) {
                            return N.getTimer(25)
                        }
                        ),
                        onTouchstart: t[27] || (t[27] = function(e) {
                            return N.getTimer(25)
                        }
                        )
                    }, [B, z], 32), Object(c["e"])("button", {
                        class: "timerBtn",
                        onClick: t[28] || (t[28] = function() {
                            return N.cancelTimer && N.cancelTimer.apply(N, arguments)
                        }
                        ),
                        onTouchstart: t[29] || (t[29] = function() {
                            return N.cancelTimer && N.cancelTimer.apply(N, arguments)
                        }
                        ),
                        style: {
                            "margin-right": "0px"
                        }
                    }, [R, H], 32)]), Object(c["e"])("li", null, [q, Object(c["e"])(W, {
                        numRange: 24,
                        modelValue: e.my_h,
                        "onUpdate:modelValue": t[30] || (t[30] = function(t) {
                            return e.my_h = t
                        }
                        )
                    }, null, 8, ["modelValue"]), Object(c["e"])(W, {
                        numRange: 60,
                        modelValue: e.my_m,
                        "onUpdate:modelValue": t[31] || (t[31] = function(t) {
                            return e.my_m = t
                        }
                        )
                    }, null, 8, ["modelValue"]), Object(c["e"])(W, {
                        numRange: 60,
                        modelValue: e.my_s,
                        "onUpdate:modelValue": t[32] || (t[32] = function(t) {
                            return e.my_s = t
                        }
                        )
                    }, null, 8, ["modelValue"]), Object(c["e"])("button", {
                        class: "timerBtn",
                        onClick: t[33] || (t[33] = function(e) {
                            return N.getTimer(0)
                        }
                        ),
                        onTouchstart: t[34] || (t[34] = function(e) {
                            return N.getTimer(0)
                        }
                        ),
                        style: {
                            "margin-left": "4px"
                        }
                    }, "开始", 32)])]), I]
                }
                )),
                _: 1
            }, 8, ["onCloseSet"])])], 64)
        }
        n("0d03"),
        n("e25e"),
        n("4795");
        var A = n("5530")
          , D = {
            class: "clock"
        };
        function E(e, t, n, o, l, r) {
            return Object(c["h"])(),
            Object(c["c"])("div", D, [Object(c["e"])("canvas", {
                id: n.cid,
                class: "clock_canva",
                width: "800",
                height: "800"
            }, null, 8, ["id"])])
        }
        var P = n("3835")
          , W = function(e, t, n, c) {
            var o = e / c
              , l = o * o;
            return t + (n - t) * l
        }
          , L = function(e, t, n, c) {
            var o = e / c
              , l = -o * o + 2 * o;
            return t + (n - t) * l
        }
          , U = function(e, t, n, c) {
            if (e < c / 2)
                return W(e, t, (t + n) / 2, c / 2);
            var o = e - c / 2
              , l = (t + n) / 2;
            return L(o, l, n, c / 2)
        }
          , J = U
          , X = {
            props: {
                cid: String,
                msg: {
                    default: "13"
                },
                bg: {
                    default: !0
                },
                ampm: {
                    default: !1
                }
            },
            setup: function(e) {
                var t = Object(c["i"])({
                    r: 64,
                    fontSize: 660,
                    fontFamily: "Arial",
                    flipping: !1,
                    tempVal: "08",
                    tempAp: "AM",
                    ctx: null,
                    intervalId: null,
                    prevMsg: e.msg,
                    prevAmpm: e.ampm,
                    lastBg: e.bg
                })
                  , n = function(t) {
                    var n = {
                        ap: ""
                    };
                    return n.num = t,
                    e.ampm && "number" === typeof t && (t < 13 ? n.ap = "AM" : t < 24 && (n.ap = "PM",
                    n.num -= 12)),
                    n
                }
                  , o = function() {
                    var c = document.querySelector("#" + e.cid);
                    if (c.getContext) {
                        var o = c.getContext("2d");
                        t.ctx = o,
                        o.translate(0, 400),
                        o.textAlign = "center",
                        o.textBaseline = "middle",
                        o.font = "normal bold " + t.fontSize + "px " + t.fontFamily;
                        var l = n(t.prevMsg)
                          , r = l.ap
                          , i = l.num;
                        t.tempAp = r,
                        t.tempVal = i,
                        f(i, r, !0),
                        f(i, r, !1)
                    }
                }
                  , l = function(e) {
                    var n = t.ctx
                      , c = t.r;
                    n.beginPath(),
                    n.moveTo(0, 0),
                    n.lineTo(800, 0),
                    e ? (n.lineTo(800, c - 400),
                    n.quadraticCurveTo(800, -400, 800 - c, -400),
                    n.lineTo(c, -400),
                    n.quadraticCurveTo(0, -400, 0, c - 400)) : (n.lineTo(800, 400 - c),
                    n.quadraticCurveTo(800, 400, 800 - c, 400),
                    n.lineTo(c, 400),
                    n.quadraticCurveTo(0, 400, 0, 400 - c)),
                    n.clip()
                }
                  , r = function(e, t, n) {
                    var c = e.createLinearGradient(0, -400, 0, 400);
                    return c.addColorStop(0, t),
                    c.addColorStop(1, n),
                    c
                }
                  , i = function() {
                    var e = t.ctx;
                    e.fillStyle = r(e, "#161616", "#0c0c0c"),
                    e.fillRect(0, -400, 800, 800)
                }
                  , u = function() {
                    var e = t.ctx;
                    e.clearRect(0, -400, 800, 800)
                }
                  , a = function(e) {
                    var n = t.ctx
                      , c = 100
                      , o = 264;
                    n.save(),
                    n.font = "normal bold 80px " + t.fontFamily,
                    "AM" === e ? (n.fillStyle = "#bbbbbb",
                    n.fillText(e, c, -o)) : (n.fillStyle = "#b9b9b9",
                    n.fillText(e, c, o)),
                    n.restore()
                }
                  , s = function(e) {
                    var n = t.ctx;
                    n.fillStyle = r(n, "#bcbcbc", "#b8b8b8"),
                    n.fillText(e, 400, 0)
                }
                  , m = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 12
                      , n = t.ctx;
                    n.fillStyle = "#000000",
                    n.fillRect(0, -e / 2, 800, e)
                }
                  , f = function(n, c) {
                    var o = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2]
                      , r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1
                      , f = arguments.length > 4 && void 0 !== arguments[4] && arguments[4]
                      , d = t.ctx;
                    d.save(),
                    d.scale(1, r),
                    l(o),
                    f || !e.bg ? u() : i(),
                    e.ampm && a(c),
                    s(n),
                    m(),
                    d.restore()
                }
                  , d = function(e, c, o) {
                    if (!t.flipping) {
                        var l = n(e)
                          , r = l.ap
                          , i = l.num
                          , u = n(t.prevMsg)
                          , a = u.ap
                          , s = u.num
                          , m = i !== s || r !== a;
                        o !== t.lastBg || t.prevAmpm;
                        t.flipping = !0;
                        var d = (new Date).getTime()
                          , h = 600
                          , p = function n() {
                            var l = (new Date).getTime()
                              , u = l - d;
                            if (u > h)
                                return t.flipping = !1,
                                t.tempVal = i,
                                t.tempAp = r,
                                f(i, r, !0, 1, !o),
                                f(i, r, !1, 1, !o),
                                t.prevMsg = e,
                                t.prevAmpm = c,
                                void (t.lastBg = o);
                            var p = !0
                              , b = Math.PI
                              , v = Math.sin(J(u, -90, 90, h) * b / 180);
                            u < h / 2 ? m && (f(i, r, !0, 1, !o),
                            f(s, a, !0, -v, !o)) : (p && (p = !1,
                            m && f(i, r, !0, 1, !o)),
                            m && (f(s, a, !1, 1, !o),
                            f(i, r, !1, v, !o))),
                            requestAnimationFrame(n)
                        };
                        p()
                    }
                }
                  , h = function() {
                    d(e.msg, e.ampm, e.bg)
                };
                Object(c["g"])((function() {
                    o(),
                    t.intervalId = setInterval(h, 1e3),
                    window.addEventListener("focus", h)
                }
                )),
                Object(c["f"])((function() {
                    clearInterval(t.intervalId),
                    window.removeEventListener("focus", h)
                }
                )),
                Object(c["r"])([function() {
                    return e.msg
                }
                , function() {
                    return e.ampm
                }
                , function() {
                    return e.bg
                }
                ], (function(e) {
                    var t = Object(P["a"])(e, 3)
                      , n = t[0]
                      , c = t[1]
                      , o = t[2];
                    d(n, c, o)
                }
                ))
            }
        };
        n("f372");
        X.render = E;
        var G = X
          , Y = {
            class: "setbox"
        }
          , $ = Object(c["e"])("div", {
            class: "pic_set"
        }, null, -1);
        function K(e, t, n, o, l, r) {
            return Object(c["h"])(),
            Object(c["c"])("div", Y, [Object(c["e"])("div", {
                class: "set-warp",
                onMouseleave: t[2] || (t[2] = function() {
                    return o.hideSet && o.hideSet.apply(o, arguments)
                }
                )
            }, [Object(c["e"])("div", {
                class: "setting",
                onMouseenter: t[1] || (t[1] = function(e) {
                    return o.isShow = !0
                }
                )
            }, [$], 32)], 32), Object(c["t"])(Object(c["e"])("div", {
                class: "set_item setLoad",
                ref: "setDom",
                onMouseleave: t[3] || (t[3] = function() {
                    return o.hideSet && o.hideSet.apply(o, arguments)
                }
                )
            }, [Object(c["l"])(e.$slots, "default")], 544), [[c["q"], o.isShow]])])
        }
        var Q = {
            setup: function(e, t) {
                var n = t.emit
                  , o = Object(c["j"])(!1)
                  , l = Object(c["j"])(null)
                  , r = function() {
                    o.value = !1,
                    n("closeSet")
                }
                  , i = function(e) {
                    e.toElement && l.value !== e.toElement && r()
                };
                return Object(c["g"])((function() {
                    l.value.classList.remove("setLoad")
                }
                )),
                {
                    isShow: o,
                    setDom: l,
                    hideSet: i,
                    hidesetF: r
                }
            }
        };
        n("b5a5");
        Q.render = K;
        var Z = Q;
        function ee(e, t, n, o, l, r) {
            return Object(c["h"])(),
            Object(c["c"])("div", {
                class: "slider",
                ref: "mySlider",
                style: {
                    height: n.barHeight
                },
                onMousedown: t[1] || (t[1] = function() {
                    return o.sliderHandle && o.sliderHandle.apply(o, arguments)
                }
                ),
                onTouchstart: t[2] || (t[2] = function() {
                    return o.sliderHandle && o.sliderHandle.apply(o, arguments)
                }
                )
            }, [Object(c["e"])("div", {
                class: "bar-line-right",
                style: {
                    width: n.barHeight,
                    height: n.lineHeight
                }
            }, null, 4), Object(c["e"])("div", {
                class: "bar-line",
                style: {
                    width: "calc(100% - " + n.barHeight + ")",
                    height: n.lineHeight,
                    "background-size": n.modelValue + "%"
                }
            }, [Object(c["e"])("div", {
                class: "bar-handle",
                style: {
                    width: n.barHeight,
                    height: n.barHeight,
                    left: n.modelValue + "%"
                }
            }, null, 4)], 4)], 36)
        }
        n("a9e3"),
        n("ac1f"),
        n("466d");
        var te = {
            props: {
                modelValue: Number,
                barHeight: {
                    default: "20px"
                },
                lineHeight: {
                    default: "4px"
                }
            },
            setup: function(e, t) {
                var n = t.emit
                  , o = Object(c["j"])(null)
                  , l = function(t) {
                    t.preventDefault();
                    var c = e.barHeight.match(/(\d+)/)[1];
                    c = parseInt(c);
                    var l = o.value
                      , r = l.getBoundingClientRect().left
                      , i = l.offsetWidth
                      , u = function(e) {
                        var t = e
                          , o = i - c;
                        e < 0 ? t = 0 : e > o && (t = o),
                        n("update:modelValue", parseInt(100 * t / o))
                    }
                      , a = function(e) {
                        u(e - r - c / 2)
                    };
                    "mousedown" === t.type ? (a(t.pageX),
                    document.onmousemove = function(e) {
                        return a(e.pageX)
                    }
                    ,
                    document.onmouseup = function() {
                        document.onmousemove = null,
                        document.onmouseup = null
                    }
                    ) : "touchstart" === t.type && (a(t.touches[0].pageX),
                    document.ontouchmove = function(e) {
                        return a(e.touches[0].pageX)
                    }
                    ,
                    document.ontouchend = function() {
                        document.ontouchmove = null,
                        document.ontouchend = null
                    }
                    )
                };
                return {
                    sliderHandle: l,
                    mySlider: o
                }
            }
        };
        n("2b0f");
        te.render = ee;
        var ne = te
          , ce = {
            class: "time-panel-box"
        }
          , oe = {
            class: "time-panel"
        }
          , le = {
            class: "scroll-box",
            ref: "sb"
        }
          , re = {
            class: "panel-item"
        };
        function ie(e, t, n, o, l, r) {
            return Object(c["h"])(),
            Object(c["c"])("div", ce, [Object(c["e"])("div", oe, [Object(c["e"])("div", le, [Object(c["e"])("ul", re, [(Object(c["h"])(!0),
            Object(c["c"])(c["a"], null, Object(c["k"])(e.temp, (function(e, t) {
                return Object(c["h"])(),
                Object(c["c"])("li", {
                    key: t
                }, Object(c["n"])(e), 1)
            }
            )), 128))])], 512), Object(c["e"])("div", {
                class: "panel-up",
                onClick: t[1] || (t[1] = function(e) {
                    return o.changeNum(-1)
                }
                )
            }, "︿"), Object(c["e"])("div", {
                class: "panel-down",
                onClick: t[2] || (t[2] = function(e) {
                    return o.changeNum(1)
                }
                )
            }, "﹀")])])
        }
        var ue = {
            props: {
                modelValue: Number,
                numRange: {
                    default: 12
                }
            },
            setup: function(e, t) {
                var n = t.emit
                  , o = Object(c["i"])({
                    val: 0,
                    temp: [],
                    sb: null,
                    timeout: null
                })
                  , l = function() {
                    for (var t = 0; t < e.numRange; t++) {
                        var n = t > 9 ? t : "0" + t;
                        o.temp.push(n)
                    }
                };
                l();
                var r = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 300;
                    return o.timeout = null,
                    function() {
                        var n = arguments
                          , c = this;
                        clearTimeout(o.timeout),
                        o.timeout = setTimeout((function() {
                            e.apply(c, n)
                        }
                        ), t)
                    }
                }
                  , i = function(e) {
                    o.timeout && clearTimeout(o.timeout);
                    for (var t = o.sb, c = t.scrollTop, l = 24, r = o.temp.length, i = r - 1; i >= 0; i--)
                        if (c > l * i - l / 2) {
                            var u = i + e;
                            u < 0 && (u = 0),
                            u > r - 1 && (u = r - 1),
                            t.scrollTop = l * u,
                            n("update:modelValue", u);
                            break
                        }
                }
                  , u = r((function() {
                    i(0)
                }
                ));
                return Object(c["g"])((function() {
                    o.sb.scrollTop = 24 * e.modelValue,
                    setTimeout((function() {
                        o.sb.addEventListener("scroll", u)
                    }
                    ), 0)
                }
                )),
                Object(A["a"])(Object(A["a"])({}, Object(c["o"])(o)), {}, {
                    changeNum: i,
                    comfirmNum: u
                })
            }
        };
        n("834b");
        ue.render = ie;
        var ae = ue
          , se = (n("d3b7"),
        n("25f0"),
        function(e) {
            var t = e.toString();
            return t[1] ? e : "0" + t
        }
        )
          , me = function() {
            var e = new Date
              , t = e.getHours()
              , n = e.getMinutes()
              , c = e.getSeconds();
            return {
                h: t,
                m: n,
                s: c
            }
        }
          , fe = {
            data: function() {
                return {
                    isFullScreen: !1
                }
            },
            components: {
                clock: G,
                setbox: Z,
                slider: ne,
                timePicker: ae
            },
            methods: {
                toggleFullScreen: function() {
                    this.isFullScreen ? this.exitFullScreen() : this.enterFullScreen()
                },
                enterFullScreen: function() {
                    var e = document.documentElement;
                    e.requestFullscreen ? e.requestFullscreen() : e.mozRequestFullScreen ? e.mozRequestFullScreen() : e.webkitRequestFullscreen ? e.webkitRequestFullscreen() : e.msRequestFullscreen && e.msRequestFullscreen(),
                    this.isFullScreen = !0
                },
                exitFullScreen: function() {
                    document.exitFullscreen ? document.exitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitExitFullscreen ? document.webkitExitFullscreen() : document.msExitFullscreen && document.msExitFullscreen(),
                    this.isFullScreen = !1
                }
            },
            setup: function() {
                var e = Object(c["i"])({
                    setRef: null,
                    num_h: "你",
                    num_m: "好",
                    num_s: "!",
                    hourFormat: 0,
                    scale: 80,
                    brightness: 100,
                    showBg: !0,
                    showSecond: !0,
                    timeMode: 0,
                    tempTime: 0,
                    stopTime: 0,
                    watching: !0,
                    my_h: 0,
                    my_m: 0,
                    my_s: 0,
                    setShow: null
                })
                  , t = function(t) {
                    return e.hourFormat < 2 ? t : se(t)
                }
                  , n = function(t) {
                    e.watching = !0;
                    var n = 0;
                    n = 0 === t ? 1e3 * (3600 * e.my_h + 60 * e.my_m + e.my_s) : 6e4 * t;
                    var c = (new Date).getTime();
                    e.tempTime = c + n,
                    e.timeMode = 1,
                    e.setRef.hidesetF()
                }
                  , o = function() {
                    if (e.watching) {
                        var t = (new Date).getTime()
                          , n = e.tempTime - t;
                        return n <= 0 ? {
                            h: "ok",
                            m: "ok",
                            s: "ok"
                        } : (n = parseInt(n / 1e3),
                        {
                            h: parseInt(n / 3600),
                            m: parseInt(n / 60) % 60,
                            s: n % 60
                        })
                    }
                    return {
                        h: e.num_h,
                        m: e.num_m,
                        s: e.num_s
                    }
                }
                  , l = function() {
                    e.timeMode = 0,
                    e.setRef.hidesetF()
                }
                  , r = function() {
                    e.tempTime = (new Date).getTime(),
                    e.watching = !0,
                    e.timeMode = 2,
                    e.setRef.hidesetF()
                }
                  , i = function() {
                    if (e.watching) {
                        var t = (new Date).getTime()
                          , n = t - e.tempTime;
                        return n = parseInt(n / 1e3),
                        {
                            h: parseInt(n / 3600),
                            m: parseInt(n / 60) % 60,
                            s: n % 60
                        }
                    }
                    return {
                        h: e.num_h,
                        m: e.num_m,
                        s: e.num_s
                    }
                }
                  , u = function() {
                    e.timeMode = 0,
                    e.setRef.hidesetF()
                }
                  , a = function() {
                    var t = document.getElementsByClassName("pic_set")[0];
                    if (t.style.opacity = 1,
                    e.setShow && clearTimeout(e.setShow),
                    e.setShow = setTimeout((function() {
                        t.style.opacity = ""
                    }
                    ), 400),
                    e.watching)
                        e.watching = !1,
                        e.stopTime = (new Date).getTime();
                    else {
                        e.watching = !0;
                        var n = (new Date).getTime();
                        e.tempTime = e.tempTime + n - e.stopTime
                    }
                };
                setInterval((function() {
                    var n = {}
                      , c = e.timeMode;
                    0 === c ? n = me() : 1 === c ? n = o() : 2 === c && (n = i()),
                    e.num_h = t(n.h),
                    e.num_m = se(n.m),
                    e.num_s = se(n.s)
                }
                ), 200);
                var s = function() {
                    for (var t = ["hourFormat", "scale", "brightness", "showBg", "showSecond", "my_h", "my_m", "my_s"], n = {}, c = 0, o = t; c < o.length; c++) {
                        var l = o[c];
                        n[l] = e[l]
                    }
                    localStorage.info = JSON.stringify(n)
                }
                  , m = function() {
                    if (localStorage.info) {
                        var t = JSON.parse(localStorage.info);
                        for (var n in t)
                            e[n] = t[n]
                    }
                };
                return m(),
                Object(c["g"])((function() {
                    document.onkeydown = function(e) {
                        32 !== e.keyCode && 13 !== e.keyCode || a()
                    }
                }
                )),
                Object(A["a"])(Object(A["a"])({}, Object(c["o"])(e)), {}, {
                    getTimer: n,
                    cancelTimer: l,
                    stopWatch: r,
                    startStop: a,
                    cancelWatch: u,
                    saveSet: s
                })
            }
        };
        n("d25c");
        fe.render = N;
        var de = fe;
        console.log = function() {}
        ,
        Object(c["b"])(de).mount("#app")
    },
    "834b": function(e, t, n) {
        "use strict";
        n("29e8")
    },
    "837a": function(e, t, n) {},
    b551: function(e, t, n) {},
    b5a5: function(e, t, n) {
        "use strict";
        n("b551")
    },
    ba53: function(e, t, n) {},
    d25c: function(e, t, n) {
        "use strict";
        n("33e6")
    },
    f372: function(e, t, n) {
        "use strict";
        n("ba53")
    }
});
