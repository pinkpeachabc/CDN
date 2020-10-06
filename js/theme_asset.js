! function () {
    "use strict";

    function t(t, e) {
        for (var r = 0; r < e.length; r++) {
            var n = e[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
    }

    function e(t) {
        return (e = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }

    function r(t, e) {
        return (r = Object.setPrototypeOf || function (t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }

    function n(t, e, o) {
        return (n = function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function () { }))), !0
            } catch (t) {
                return !1
            }
        }() ? Reflect.construct : function (t, e, n) {
            var o = [null];
            o.push.apply(o, e);
            var a = new (Function.bind.apply(t, o));
            return n && r(a, n.prototype), a
        }).apply(null, arguments)
    }

    function o(t) {
        var a = "function" == typeof Map ? new Map : void 0;
        return (o = function (t) {
            if (null === t || (o = t, -1 === Function.toString.call(o).indexOf("[native code]"))) return t;
            var o;
            if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function");
            if (void 0 !== a) {
                if (a.has(t)) return a.get(t);
                a.set(t, c)
            }

            function c() {
                return n(t, arguments, e(this).constructor)
            }
            return c.prototype = Object.create(t.prototype, {
                constructor: {
                    value: c,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), r(c, t)
        })(t)
    }

    function a(t, e) {
        if (null == t) return {};
        var r, n, o = function (t, e) {
            if (null == t) return {};
            var r, n, o = {},
                a = Object.keys(t);
            for (n = 0; n < a.length; n++) r = a[n], e.indexOf(r) >= 0 || (o[r] = t[r]);
            return o
        }(t, e);
        if (Object.getOwnPropertySymbols) {
            var a = Object.getOwnPropertySymbols(t);
            for (n = 0; n < a.length; n++) r = a[n], e.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(t, r) && (o[r] = t[r])
        }
        return o
    }

    function c(t, e) {
        return !e || "object" != typeof e && "function" != typeof e ? function (t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t) : e
    }
    var i = "is-";
    var f = !!window.customElements;
    var s, u = [{
        foreground_color: "#333333",
        accent_color: '#2196f3',
        border_color: "#e0e0e0",
        background: "https://cdn.jsdelivr.net/gh/pinkpeachabc/images/Blog-imgs/light.png",
        sidebar_background: "#6699CC linear-gradient(to bottom,#66CCCC 0%,#6699CC 100%)",
        card_background: "#fff",
        highlight: ['#263238', '#2c393f', '#37474f', '#707880', '#c9ccd3', '#cdd3de', '#d5dbe5', '#ffffff', '#ec5f67', '#ea9560', '#ffcc00', '#8bd649', '#80cbc4', '#89ddff', '#82aaff', '#ec5f67'],
        props: {
            children: "🌖",
            style: {
                background: ""
            }
        },
        color: ["#607d8b", "#f3f6f7"]
    }, {
        foreground_color: "#d8d8d8",
        accent_color: '#666666',
        border_color: "#444",
        background: "https://cdn.jsdelivr.net/gh/pinkpeachabc/images/Blog-imgs/dark.png",
        sidebar_background: "#262626",
        card_background: "#252525",
        highlight: ["#252525", "#252525", "#939393", "#585858", "#b8b8b8", "#d8d8d8", "#e8e8e8", "#f8f8f8", "#ab4642", "#dc9656", "#f7ca88", "#a1b56c", "#b8b8b8", "#7cafc2", "#ba8baf", "#a16946"],
        props: {
            children: "🌒",
            style: {
                background: ""
            }
        },
        color: ["#262626", "#202020"]
    },];
    var l = ":host{display:block;margin:1rem auto;max-width:205px;line-height:1}:host div{display:-webkit-box;display:flex;flex-wrap:wrap;-webkit-box-pack:center;justify-content:center}:host a{margin:3px;width:2rem;height:2rem;border-radius:1rem;background-size:60px!important;font-size:1.5rem;cursor:pointer;-webkit-transition:-webkit-transform .15s;transition:-webkit-transform .15s;transition:transform .15s;transition:transform .15s,-webkit-transform .15s}:host a.current,:host a:hover{-webkit-transform:scale(1.1);transform:scale(1.1)}";
    ! function (t, e) {
        void 0 === e && (e = {});
        var r = e.insertAt;
        if (t && "undefined" != typeof document) {
            var n = document.head || document.getElementsByTagName("head")[0],
                o = document.createElement("style");
            o.type = "text/css", "top" === r && n.firstChild ? n.insertBefore(o, n.firstChild) : n.appendChild(o), o.styleSheet ? o.styleSheet.cssText = t : o.appendChild(document.createTextNode(t))
        }
    }(l);
    var d, p, b, g = u.map((function (t) {
        var e, r = t.props,
            n = void 0 === r ? {} : r,
            o = (t.color, a(t, ["props", "color"])),
            c = Object.assign({
                background: t.sidebar_background || t.background || t.accent_color
            }, n.style);
        return '<a style="'.concat((e = c, Object.keys(e).map((function (t) {
            return "".concat(t, ":").concat(e[t])
        })).join(";")), "\" )>").concat(n.children || "", "</a>")
    })).join("");
    d = "palette2", p = function (n) {
        function o() {
            var t;
            ! function (t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, o);
            var r = (t = c(this, e(o).call(this))).attachShadow({
                mode: "closed"
            });
            return r.innerHTML = "<style>".concat(l, "</style><div>").concat(g, "</div>"), r.addEventListener("click", (function (t) {
                var e = t.target;
                if ("A" === e.tagName) {
                    var r, n, o, c = u[(r = e.parentElement.children, n = e, [].indexOf.call(r, n))],
                        i = (c.props, a(c, ["props"]));
                    o = i, document.dispatchEvent(new CustomEvent("inside:theme", {
                        detail: o
                    }))
                }
            })), t
        }
        var i, f, s;
        return function (t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), e && r(t, e)
        }(o, n), i = o, (f = [{
            key: "connectedCallback",
            value: function () {
                var t = new CustomEvent("inside:proxy", {
                    detail: {
                        trigger: "window:resize"
                    }
                });
                document.dispatchEvent(t)
            }
        }]) && t(i.prototype, f), s && t(i, s), o
    }(o(HTMLElement)), f && customElements.define(i + d, p, b)
}();