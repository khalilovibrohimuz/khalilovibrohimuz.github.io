_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([[6], {
    "+qE3": function(e, t, n) {
        "use strict";
        var r, i = "object" === typeof Reflect ? Reflect : null, o = i && "function" === typeof i.apply ? i.apply : function(e, t, n) {
            return Function.prototype.apply.call(e, t, n)
        }
        ;
        r = i && "function" === typeof i.ownKeys ? i.ownKeys : Object.getOwnPropertySymbols ? function(e) {
            return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))
        }
        : function(e) {
            return Object.getOwnPropertyNames(e)
        }
        ;
        var s = Number.isNaN || function(e) {
            return e !== e
        }
        ;
        function a() {
            a.init.call(this)
        }
        e.exports = a,
        e.exports.once = function(e, t) {
            return new Promise((function(n, r) {
                function i() {
                    void 0 !== o && e.removeListener("error", o),
                    n([].slice.call(arguments))
                }
                var o;
                "error" !== t && (o = function(n) {
                    e.removeListener(t, i),
                    r(n)
                }
                ,
                e.once("error", o)),
                e.once(t, i)
            }
            ))
        }
        ,
        a.EventEmitter = a,
        a.prototype._events = void 0,
        a.prototype._eventsCount = 0,
        a.prototype._maxListeners = void 0;
        var c = 10;
        function u(e) {
            if ("function" !== typeof e)
                throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof e)
        }
        function l(e) {
            return void 0 === e._maxListeners ? a.defaultMaxListeners : e._maxListeners
        }
        function p(e, t, n, r) {
            var i, o, s, a;
            if (u(n),
            void 0 === (o = e._events) ? (o = e._events = Object.create(null),
            e._eventsCount = 0) : (void 0 !== o.newListener && (e.emit("newListener", t, n.listener ? n.listener : n),
            o = e._events),
            s = o[t]),
            void 0 === s)
                s = o[t] = n,
                ++e._eventsCount;
            else if ("function" === typeof s ? s = o[t] = r ? [n, s] : [s, n] : r ? s.unshift(n) : s.push(n),
            (i = l(e)) > 0 && s.length > i && !s.warned) {
                s.warned = !0;
                var c = new Error("Possible EventEmitter memory leak detected. " + s.length + " " + String(t) + " listeners added. Use emitter.setMaxListeners() to increase limit");
                c.name = "MaxListenersExceededWarning",
                c.emitter = e,
                c.type = t,
                c.count = s.length,
                a = c,
                console && console.warn && console.warn(a)
            }
            return e
        }
        function f() {
            if (!this.fired)
                return this.target.removeListener(this.type, this.wrapFn),
                this.fired = !0,
                0 === arguments.length ? this.listener.call(this.target) : this.listener.apply(this.target, arguments)
        }
        function d(e, t, n) {
            var r = {
                fired: !1,
                wrapFn: void 0,
                target: e,
                type: t,
                listener: n
            }
              , i = f.bind(r);
            return i.listener = n,
            r.wrapFn = i,
            i
        }
        function h(e, t, n) {
            var r = e._events;
            if (void 0 === r)
                return [];
            var i = r[t];
            return void 0 === i ? [] : "function" === typeof i ? n ? [i.listener || i] : [i] : n ? function(e) {
                for (var t = new Array(e.length), n = 0; n < t.length; ++n)
                    t[n] = e[n].listener || e[n];
                return t
            }(i) : m(i, i.length)
        }
        function v(e) {
            var t = this._events;
            if (void 0 !== t) {
                var n = t[e];
                if ("function" === typeof n)
                    return 1;
                if (void 0 !== n)
                    return n.length
            }
            return 0
        }
        function m(e, t) {
            for (var n = new Array(t), r = 0; r < t; ++r)
                n[r] = e[r];
            return n
        }
        Object.defineProperty(a, "defaultMaxListeners", {
            enumerable: !0,
            get: function() {
                return c
            },
            set: function(e) {
                if ("number" !== typeof e || e < 0 || s(e))
                    throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e + ".");
                c = e
            }
        }),
        a.init = function() {
            void 0 !== this._events && this._events !== Object.getPrototypeOf(this)._events || (this._events = Object.create(null),
            this._eventsCount = 0),
            this._maxListeners = this._maxListeners || void 0
        }
        ,
        a.prototype.setMaxListeners = function(e) {
            if ("number" !== typeof e || e < 0 || s(e))
                throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e + ".");
            return this._maxListeners = e,
            this
        }
        ,
        a.prototype.getMaxListeners = function() {
            return l(this)
        }
        ,
        a.prototype.emit = function(e) {
            for (var t = [], n = 1; n < arguments.length; n++)
                t.push(arguments[n]);
            var r = "error" === e
              , i = this._events;
            if (void 0 !== i)
                r = r && void 0 === i.error;
            else if (!r)
                return !1;
            if (r) {
                var s;
                if (t.length > 0 && (s = t[0]),
                s instanceof Error)
                    throw s;
                var a = new Error("Unhandled error." + (s ? " (" + s.message + ")" : ""));
                throw a.context = s,
                a
            }
            var c = i[e];
            if (void 0 === c)
                return !1;
            if ("function" === typeof c)
                o(c, this, t);
            else {
                var u = c.length
                  , l = m(c, u);
                for (n = 0; n < u; ++n)
                    o(l[n], this, t)
            }
            return !0
        }
        ,
        a.prototype.addListener = function(e, t) {
            return p(this, e, t, !1)
        }
        ,
        a.prototype.on = a.prototype.addListener,
        a.prototype.prependListener = function(e, t) {
            return p(this, e, t, !0)
        }
        ,
        a.prototype.once = function(e, t) {
            return u(t),
            this.on(e, d(this, e, t)),
            this
        }
        ,
        a.prototype.prependOnceListener = function(e, t) {
            return u(t),
            this.prependListener(e, d(this, e, t)),
            this
        }
        ,
        a.prototype.removeListener = function(e, t) {
            var n, r, i, o, s;
            if (u(t),
            void 0 === (r = this._events))
                return this;
            if (void 0 === (n = r[e]))
                return this;
            if (n === t || n.listener === t)
                0 === --this._eventsCount ? this._events = Object.create(null) : (delete r[e],
                r.removeListener && this.emit("removeListener", e, n.listener || t));
            else if ("function" !== typeof n) {
                for (i = -1,
                o = n.length - 1; o >= 0; o--)
                    if (n[o] === t || n[o].listener === t) {
                        s = n[o].listener,
                        i = o;
                        break
                    }
                if (i < 0)
                    return this;
                0 === i ? n.shift() : function(e, t) {
                    for (; t + 1 < e.length; t++)
                        e[t] = e[t + 1];
                    e.pop()
                }(n, i),
                1 === n.length && (r[e] = n[0]),
                void 0 !== r.removeListener && this.emit("removeListener", e, s || t)
            }
            return this
        }
        ,
        a.prototype.off = a.prototype.removeListener,
        a.prototype.removeAllListeners = function(e) {
            var t, n, r;
            if (void 0 === (n = this._events))
                return this;
            if (void 0 === n.removeListener)
                return 0 === arguments.length ? (this._events = Object.create(null),
                this._eventsCount = 0) : void 0 !== n[e] && (0 === --this._eventsCount ? this._events = Object.create(null) : delete n[e]),
                this;
            if (0 === arguments.length) {
                var i, o = Object.keys(n);
                for (r = 0; r < o.length; ++r)
                    "removeListener" !== (i = o[r]) && this.removeAllListeners(i);
                return this.removeAllListeners("removeListener"),
                this._events = Object.create(null),
                this._eventsCount = 0,
                this
            }
            if ("function" === typeof (t = n[e]))
                this.removeListener(e, t);
            else if (void 0 !== t)
                for (r = t.length - 1; r >= 0; r--)
                    this.removeListener(e, t[r]);
            return this
        }
        ,
        a.prototype.listeners = function(e) {
            return h(this, e, !0)
        }
        ,
        a.prototype.rawListeners = function(e) {
            return h(this, e, !1)
        }
        ,
        a.listenerCount = function(e, t) {
            return "function" === typeof e.listenerCount ? e.listenerCount(t) : v.call(e, t)
        }
        ,
        a.prototype.listenerCount = v,
        a.prototype.eventNames = function() {
            return this._eventsCount > 0 ? r(this._events) : []
        }
    },
    0: function(e, t, n) {
        n("GcxT"),
        e.exports = n("nOHt")
    },
    "1TCz": function(e, t, n) {
        "use strict";
        function r() {
            return (r = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
            ).apply(this, arguments)
        }
        n.r(t);
        var i = n("1OyB")
          , o = n("vuIU")
          , s = n("JX7q")
          , a = n("Ji7U")
          , c = n("md7G")
          , u = n("foSv")
          , l = n("q1tI")
          , p = n.n(l)
          , f = (n("6Fm8"),
        n("8Kt/"))
          , d = n.n(f)
          , h = n("YFqc")
          , v = n.n(h)
          , m = n("nOHt")
          , y = n("z/o8")
          , g = p.a.createElement;
        var C = function(e) {
            var t = Object(m.useRouter)();
            return g("a", {
                href: e.pageLink,
                "data-path": e.pageLink,
                onClick: function() {
                    !function(n) {
                        if (n.preventDefault(),
                        e.pageLink != t.pathname) {
                            for (var r = document.querySelectorAll(".mainNav a"), i = 0; i < r.length; i++)
                                r[i].className = "";
                            document.querySelector('.mainNav a[data-path="' + e.pageLink + '"]').className = "selected",
                            y.a.to(document.getElementById("sideNav"), .5, {
                                opacity: 0
                            }),
                            y.a.to(document.querySelector(".page"), .5, {
                                opacity: 0,
                                onComplete: function() {
                                    t.push(e.pageLink)
                                }
                            })
                        }
                    }(event)
                },
                className: e.currentPageId == e.pageId ? "selected" : ""
            }, e.title)
        }
          , b = p.a.createElement;
        function w(e) {
            var t = function() {
                if ("undefined" === typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" === typeof Proxy)
                    return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                    ))),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, r = Object(u.a)(e);
                if (t) {
                    var i = Object(u.a)(this).constructor;
                    n = Reflect.construct(r, arguments, i)
                } else
                    n = r.apply(this, arguments);
                return Object(c.a)(this, n)
            }
        }
        var L = function(e) {
            Object(a.a)(n, e);
            var t = w(n);
            function n() {
                return Object(i.a)(this, n),
                t.apply(this, arguments)
            }
            return Object(o.a)(n, [{
                key: "componentDidMount",
                value: function() {}
            }, {
                key: "render",
                value: function() {
                    return b("div", {
                        className: "container",
                        id: "container"
                    }, b(d.a, null, b("title", null, "Rick Waalders - I Design 3D Visuals For Websites And Apps"), b("link", {
                        rel: "icon",
                        type: "image/png",
                        sizes: "32x32",
                        href: "/favicon-32x32.png"
                    }), b("link", {
                        rel: "icon",
                        type: "image/png",
                        sizes: "16x16",
                        href: "/favicon-16x16.png"
                    }), b("link", {
                        rel: "mask-icon",
                        href: "/safari-pinned-tab.svg",
                        color: "#5bbad5"
                    }), b("meta", {
                        name: "description",
                        content: "Rick Waalders - I Design 3D Visuals For Websites And Apps"
                    }), b("meta", {
                        property: "og:type",
                        content: "website"
                    }), b("meta", {
                        property: "og:url",
                        content: "https://rickwaalders.com"
                    }), b("meta", {
                        property: "og:title",
                        content: "Rick Waalders - 3D Design Portfolio"
                    }), b("meta", {
                        property: "og:description",
                        content: "Rick Waalders - I Design 3D Visuals For Websites And Apps"
                    }), b("meta", {
                        property: "og:image",
                        content: "https://rickwaalders.com/img/socialgraph.png"
                    }), b("meta", {
                        property: "twitter:card",
                        content: "summary_large_image"
                    }), b("meta", {
                        property: "twitter:url",
                        content: "https://rickwaalders.com"
                    }), b("meta", {
                        property: "twitter:title",
                        content: "Rick Waalders - Portfolio"
                    }), b("meta", {
                        property: "twitter:description",
                        content: "Rick Waalders - I Design 3D Visuals For Websites And Apps"
                    }), b("meta", {
                        property: "twitter:image",
                        content: "https://rickwaalders.com/img/socialgraph.png"
                    }), b("script", {
                        src: "https://cdn.usefathom.com/script.js",
                        "data-site": "TQAXGDGJ",
                        "data-spa": "auto",
                        defer: !0
                    })), "index" == this.props.pageId ? b("ul", {
                        id: "sideNav"
                    }) : null, b("div", {
                        className: "containerContent",
                        id: "containerContent",
                        "data-scroll-content": !0
                    }, b("header", {
                        className: "header"
                    }, b("div", {
                        className: "headerContent"
                    }, b("div", {
                        className: "logo"
                    }, b(v.a, {
                        href: "/"
                    }, b("a", null, b("svg", {
                        width: "30",
                        height: "30",
                        viewBox: "0 0 30 30",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, b("circle", {
                        cx: "15",
                        cy: "15",
                        r: "13.725",
                        fill: "white"
                    }), b("path", {
                        d: "M15 0C6.70854 0 0 6.72362 0 15C0 23.2915 6.72362 30 15 30C23.2764 30 30 23.2764 30 15C30 6.72362 23.2915 0 15 0ZM12.7538 21.196C12.4824 21.6633 11.9849 21.9497 11.4422 21.9497C10.8995 21.9497 10.402 21.6633 10.1307 21.196L7.08543 15.9196C6.81407 15.4523 6.81407 14.8794 7.08543 14.4121C7.35678 13.9447 7.85427 13.6583 8.39699 13.6583H9.70854C10.1307 13.6583 10.4623 13.3266 10.4623 12.9045C10.4623 12.4824 10.1307 12.1508 9.70854 12.1508C9.82914 12.1508 5.78894 12.1508 5.78894 12.1508C5.24623 12.1508 4.74875 11.8643 4.47739 11.397L3.60301 9.88944C3.60301 9.88944 4.20603 9.88944 9.69347 9.88944C11.3518 9.88944 12.7085 11.2462 12.7085 12.9045C12.7085 14.5628 11.3518 15.9196 9.69347 15.9196L11.4724 18.9347L16.2211 10.6432C16.4925 10.1759 16.9899 9.88944 17.5327 9.88944H19.2663L12.7538 21.196ZM19.7186 21.1809C19.4472 21.6482 18.9497 21.9347 18.407 21.9347C17.8643 21.9347 17.3668 21.6482 17.0955 21.1809L15.7839 18.9196C15.5126 18.4523 15.5126 17.8794 15.7839 17.4121L16.6583 15.9045L18.392 18.9196L23.1859 10.6281C23.4573 10.1608 23.9548 9.87437 24.4975 9.87437H26.2312L19.7186 21.1809Z",
                        fill: "#FF4A3F"
                    })), b("div", null, "Rick Waalders")))), b("nav", {
                        className: "mainNav"
                    }, b(C, {
                        title: "Work",
                        currentPageId: this.props.pageId,
                        pageId: "index",
                        pageLink: "/"
                    }), b(C, {
                        title: "Playground",
                        currentPageId: this.props.pageId,
                        pageId: "playground",
                        pageLink: "/playground"
                    }), b(C, {
                        title: "About",
                        currentPageId: this.props.pageId,
                        pageId: "about",
                        pageLink: "/about"
                    })))), this.props.children, b("footer", {
                        "data-page": this.props.pageId
                    }, b("div", {
                        className: "line"
                    }), b("div", {
                        className: "footerContent"
                    }, b("div", {
                        className: "contact"
                    }, b("h2", null, b("svg", {
                        width: "24",
                        height: "24",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, b("circle", {
                        cx: "11.9995",
                        cy: "12",
                        r: "10.98",
                        fill: "white"
                    }), b("path", {
                        d: "M12 0C5.36683 0 0 5.3789 0 12C0 18.6332 5.37889 24 12 24C18.6211 24 24 18.6211 24 12C24 5.3789 18.6332 0 12 0ZM10.203 16.9568C9.98593 17.3307 9.58794 17.5598 9.15377 17.5598C8.7196 17.5598 8.32161 17.3307 8.10452 16.9568L5.66834 12.7357C5.45126 12.3618 5.45126 11.9035 5.66834 11.5296C5.88543 11.1558 6.28342 10.9266 6.71759 10.9266H7.76683C8.10452 10.9266 8.36985 10.6613 8.36985 10.3236C8.36985 9.98593 8.10452 9.7206 7.76683 9.7206C7.86332 9.7206 4.63116 9.7206 4.63116 9.7206C4.19698 9.7206 3.799 9.49146 3.58191 9.11759L2.88241 7.91156C2.88241 7.91156 3.36482 7.91156 7.75477 7.91156C9.08141 7.91156 10.1668 8.99698 10.1668 10.3236C10.1668 11.6502 9.08141 12.7357 7.75477 12.7357L9.17789 15.1477L12.9769 8.51457C13.194 8.1407 13.592 7.91156 14.0261 7.91156H15.4131L10.203 16.9568ZM15.7749 16.9447C15.5578 17.3186 15.1598 17.5477 14.7256 17.5477C14.2915 17.5477 13.8935 17.3186 13.6764 16.9447L12.6271 15.1357C12.4101 14.7618 12.4101 14.3035 12.6271 13.9296L13.3266 12.7236L14.7136 15.1357L18.5487 8.50251C18.7658 8.12864 19.1638 7.8995 19.598 7.8995H20.9849L15.7749 16.9447Z",
                        fill: "url(#paint0_linear)"
                    }), b("defs", null, b("linearGradient", {
                        id: "paint0_linear",
                        x1: "12",
                        y1: "0",
                        x2: "12",
                        y2: "24",
                        gradientUnits: "userSpaceOnUse"
                    }, b("stop", {
                        "stop-color": "#FF4A3F"
                    }), b("stop", {
                        offset: "1",
                        "stop-color": "#FF4A3F"
                    })))), "Get in touch"), b("div", {
                        className: "grid"
                    }, b("div", {
                        className: "left"
                    }, b("p", null, "If you want to work together on a project or just have a chat, please don't hesitate to contact me via email below.")), b("div", {
                        className: "right"
                    }, b("img", {
                        className: "contact-image",
                        alt: "Files",
                        src: "/img/about.png",
                        srcset: "/img/about.png, /img/about@2x.png 2x"
                    }))), b("a", {
                        href: "mailto:rwaalders@gmail.com",
                        className: "contact-cta"
                    }, "Send me an email")), b("ul", null, b("li", null, b("a", {
                        href: "/",
                        className: "index" == this.props.pageId ? "selected" : ""
                    }, "Work")), b("li", null, b("a", {
                        href: "/playground",
                        className: "playground" == this.props.pageId ? "selected" : ""
                    }, "Playground")), b("li", null, b("a", {
                        href: "/about",
                        className: "about" == this.props.pageId ? "selected" : ""
                    }, "About")), b("li", {
                        className: "social"
                    }, b("a", {
                        href: "https://twitter.com/rickwaalders",
                        target: "_blank"
                    }, b("svg", {
                        width: "16",
                        height: "13",
                        viewBox: "0 0 16 13",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, b("path", {
                        d: "M16 1.5C15.4 1.8 14.8 1.9 14.1 2C14.8 1.6 15.3 1 15.5 0.2C14.9 0.6 14.2 0.8 13.4 1C12.8 0.4 11.9 0 11 0C9.3 0 7.8 1.5 7.8 3.3C7.8 3.6 7.8 3.8 7.9 4C5.2 3.9 2.7 2.6 1.1 0.6C0.8 1.1 0.7 1.6 0.7 2.3C0.7 3.4 1.3 4.4 2.2 5C1.7 5 1.2 4.8 0.7 4.6C0.7 6.2 1.8 7.5 3.3 7.8C3 7.9 2.7 7.9 2.4 7.9C2.2 7.9 2 7.9 1.8 7.8C2.2 9.1 3.4 10.1 4.9 10.1C3.8 11 2.4 11.5 0.8 11.5C0.5 11.5 0.3 11.5 0 11.5C1.5 12.4 3.2 13 5 13C11 13 14.3 8 14.3 3.7C14.3 3.6 14.3 3.4 14.3 3.3C15 2.8 15.6 2.2 16 1.5Z",
                        fill: "white"
                    }))), b("a", {
                        href: "https://instagram.com/rick.c4d",
                        target: "_blank"
                    }, b("svg", {
                        width: "16",
                        height: "16",
                        viewBox: "0 0 16 16",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, b("path", {
                        d: "M12.1436 4.85213C12.6738 4.85213 13.1036 4.42232 13.1036 3.89213C13.1036 3.36194 12.6738 2.93213 12.1436 2.93213C11.6134 2.93213 11.1836 3.36194 11.1836 3.89213C11.1836 4.42232 11.6134 4.85213 12.1436 4.85213Z",
                        fill: "white"
                    }), b("path", {
                        d: "M8 12C5.794 12 4 10.206 4 8C4 5.794 5.794 4 8 4C10.206 4 12 5.794 12 8C12 10.206 10.206 12 8 12ZM8 6C6.897 6 6 6.897 6 8C6 9.103 6.897 10 8 10C9.103 10 10 9.103 10 8C10 6.897 9.103 6 8 6Z",
                        fill: "white"
                    }), b("path", {
                        d: "M12 16H4C1.944 16 0 14.056 0 12V4C0 1.944 1.944 0 4 0H12C14.056 0 16 1.944 16 4V12C16 14.056 14.056 16 12 16ZM4 2C3.065 2 2 3.065 2 4V12C2 12.953 3.047 14 4 14H12C12.935 14 14 12.935 14 12V4C14 3.065 12.935 2 12 2H4Z",
                        fill: "white"
                    }))), b("a", {
                        href: "https://dribbble.com/rickwaalders",
                        target: "_blank"
                    }, b("svg", {
                        width: "16",
                        height: "16",
                        viewBox: "0 0 16 16",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, b("path", {
                        "fill-rule": "evenodd",
                        "clip-rule": "evenodd",
                        d: "M8 0C3.6 0 0 3.6 0 8C0 12.4 3.6 16 8 16C12.4 16 16 12.4 16 8C16 3.6 12.4 0 8 0ZM10.2 7.4C10.2 7.4 10 6.8 9.9 6.6C11.6 5.8 12.7 4.9 13.1 4.4C13.8 5.3 14.2 6.4 14.3 7.6C13.5 7.4 11.7 7.1 10.2 7.4ZM9.1 5.1C8.3 3.7 7.4 2.5 7 1.8C8.9 1.3 10.6 1.9 11.9 3.1C11.5 3.6 10.7 4.4 9.1 5.1ZM5.1 2.5C5.5 3 6.3 4.2 7.1 5.7C4.9 6.2 2.9 6.3 2 6.3C2.4 4.7 3.6 3.3 5.1 2.5ZM8 7.3C8.1 7.5 8.2 7.7 8.3 7.8C5.5 8.7 3.7 11 3.1 11.9C2.3 10.8 1.8 9.5 1.8 8.2C2.7 8.1 5.3 8 8 7.3ZM9 9.5C9.7 11.5 10.1 13.1 10.2 13.9C8.1 14.6 5.7 14.2 4.4 13.1C4.8 12.4 6.1 10.6 9 9.5ZM11.9 12.9C11.7 12.1 11.4 10.7 10.8 9C11.9 8.8 13.5 9 14.1 9.2C13.8 10.7 13 12 11.9 12.9Z",
                        fill: "white"
                    })))))))), b("div", {
                        className: "lightbox"
                    }), b("svg", {
                        className: "cursor",
                        width: "280",
                        height: "280",
                        viewBox: "0 0 280 280"
                    }, b("defs", null, b("filter", {
                        id: "filter-1",
                        x: "-50%",
                        y: "-50%",
                        width: "200%",
                        height: "200%",
                        filterUnits: "objectBoundingBox"
                    }, b("feTurbulence", {
                        type: "fractalNoise",
                        baseFrequency: "0.02 0.15",
                        numOctaves: "3",
                        result: "warp"
                    }), b("feDisplacementMap", {
                        xChannelSelector: "R",
                        yChannelSelector: "G",
                        scale: "0",
                        in: "SourceGraphic",
                        in2: "warp"
                    }))), b("circle", {
                        className: "cursor__inner",
                        cx: "140",
                        cy: "140",
                        r: "50"
                    })), b("script", {
                        src: "https://unpkg.com/imagesloaded@4/imagesloaded.pkgd.min.js"
                    }))
                }
            }]),
            n
        }(p.a.Component)
          , O = n("8Bbg")
          , x = n.n(O);
        function _(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++)
                r[n] = e[n];
            return r
        }
        function k(e) {
            return function(e) {
                if (Array.isArray(e))
                    return _(e)
            }(e) || function(e) {
                if ("undefined" !== typeof Symbol && Symbol.iterator in Object(e))
                    return Array.from(e)
            }(e) || function(e, t) {
                if (e) {
                    if ("string" === typeof e)
                        return _(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === n && e.constructor && (n = e.constructor.name),
                    "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? _(e, t) : void 0
                }
            }(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        var M = n("HuT5");
        function j(e) {
            var t = function() {
                if ("undefined" === typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" === typeof Proxy)
                    return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                    ))),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, r = Object(u.a)(e);
                if (t) {
                    var i = Object(u.a)(this).constructor;
                    n = Reflect.construct(r, arguments, i)
                } else
                    n = r.apply(this, arguments);
                return Object(c.a)(this, n)
            }
        }
        var S = function(e) {
            Object(a.a)(n, e);
            var t = j(n);
            function n(e) {
                var r;
                Object(i.a)(this, n),
                r = t.call(this);
                Object(M.a)();
                return window.addEventListener("resize", (function() {
                    Object(M.a)()
                }
                )),
                r.docYScroll = Object(M.f)(),
                window.addEventListener("scroll", (function() {
                    r.docYScroll = Object(M.f)()
                }
                )),
                r.mouse = {
                    x: 0,
                    y: 0
                },
                window.addEventListener("mousemove", (function(e) {
                    return r.mouse = Object(M.d)(e)
                }
                )),
                r.radius = 25,
                r.hoverRadius = 30,
                r.DOM = {
                    el: e
                },
                r.DOM.el.style.opacity = 0,
                r.DOM.circleInner = r.DOM.el.querySelector(".cursor__inner"),
                r.filterId = "#filter-1",
                r.DOM.feDisplacementMap = document.querySelector("".concat(r.filterId, " > feDisplacementMap")),
                r.primitiveValues = {
                    scale: 0
                },
                r.createTimeline(),
                r.bounds = r.DOM.el.getBoundingClientRect(),
                r.renderedStyles = {
                    tx: {
                        previous: 0,
                        current: 0,
                        amt: .14
                    },
                    ty: {
                        previous: 0,
                        current: 0,
                        amt: .14
                    },
                    radius: {
                        previous: r.radius,
                        current: r.radius,
                        amt: .14
                    }
                },
                r.listen(),
                r.onMouseMoveEv = function() {
                    r.renderedStyles.tx.previous = r.renderedStyles.tx.current = r.mouse.x - r.bounds.width / 2,
                    r.renderedStyles.ty.previous = r.renderedStyles.ty.previous = r.mouse.y - r.bounds.height / 2 - r.docYScroll,
                    y.b.to(r.DOM.el, {
                        duration: .9,
                        ease: "Power3.easeOut",
                        opacity: 1
                    }),
                    requestAnimationFrame((function() {
                        return r.render()
                    }
                    )),
                    window.removeEventListener("mousemove", r.onMouseMoveEv)
                }
                ,
                window.addEventListener("mousemove", r.onMouseMoveEv),
                r
            }
            return Object(o.a)(n, [{
                key: "render",
                value: function() {
                    var e = this;
                    for (var t in this.renderedStyles.tx.current = this.mouse.x - this.bounds.width / 2,
                    this.renderedStyles.ty.current = this.mouse.y - this.bounds.height / 2,
                    this.renderedStyles)
                        this.renderedStyles[t].previous = Object(M.j)(this.renderedStyles[t].previous, this.renderedStyles[t].current, this.renderedStyles[t].amt);
                    this.DOM.el.style.transform = "translateX(".concat(this.renderedStyles.tx.previous, "px) translateY(").concat(this.renderedStyles.ty.previous, "px)"),
                    this.DOM.circleInner.setAttribute("r", this.renderedStyles.radius.previous),
                    requestAnimationFrame((function() {
                        return e.render()
                    }
                    ))
                }
            }, {
                key: "createTimeline",
                value: function() {
                    var e = this;
                    this.tl = y.b.timeline({
                        paused: !0,
                        onStart: function() {
                            e.DOM.circleInner.style.filter = "url(".concat(e.filterId)
                        },
                        onUpdate: function() {
                            e.DOM.feDisplacementMap.scale.baseVal = e.primitiveValues.scale
                        },
                        onComplete: function() {
                            e.DOM.circleInner.style.filter = "none"
                        }
                    }).to(this.primitiveValues, {
                        duration: .1,
                        ease: "Expo.easeOut",
                        startAt: {
                            scale: 0
                        },
                        scale: 60
                    }).to(this.primitiveValues, {
                        duration: .6,
                        ease: "Power3.easeOut",
                        scale: 0
                    })
                }
            }, {
                key: "enter",
                value: function() {
                    this.renderedStyles.radius.current = this.hoverRadius,
                    this.tl.restart()
                }
            }, {
                key: "leave",
                value: function() {
                    this.renderedStyles.radius.current = this.radius,
                    this.tl.progress(1).kill()
                }
            }, {
                key: "listen",
                value: function() {
                    var e = this;
                    this.on("enter", (function() {
                        return e.enter()
                    }
                    )),
                    this.on("leave", (function() {
                        return e.leave()
                    }
                    ))
                }
            }, {
                key: "bindEvents",
                value: function() {
                    var e = this;
                    k(document.querySelectorAll("a, li")).forEach((function(t) {
                        t.addEventListener("mouseenter", (function() {
                            return e.emit("enter")
                        }
                        )),
                        t.addEventListener("mouseleave", (function() {
                            return e.emit("leave")
                        }
                        ))
                    }
                    ))
                }
            }]),
            n
        }(n("+qE3").EventEmitter)
          , N = p.a.createElement;
        function R(e) {
            var t = function() {
                if ("undefined" === typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" === typeof Proxy)
                    return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                    ))),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, r = Object(u.a)(e);
                if (t) {
                    var i = Object(u.a)(this).constructor;
                    n = Reflect.construct(r, arguments, i)
                } else
                    n = r.apply(this, arguments);
                return Object(c.a)(this, n)
            }
        }
        var I = function(e) {
            Object(a.a)(n, e);
            var t = R(n);
            function n(e) {
                var r;
                return Object(i.a)(this, n),
                (r = t.call(this, e)).customCursor = null,
                r.onRouteChangeComplete = r.onRouteChangeComplete.bind(Object(s.a)(r)),
                r
            }
            return Object(o.a)(n, [{
                key: "componentDidMount",
                value: function() {
                    var e = this.props
                      , t = (e.Component,
                    e.pageProps,
                    e.router);
                    this.customCursor = new S(document.querySelector(".cursor")),
                    this.customCursor.bindEvents(),
                    t.events.on("routeChangeComplete", this.onRouteChangeComplete)
                }
            }, {
                key: "onRouteChangeComplete",
                value: function() {
                    null != this.customCursor && this.customCursor.bindEvents()
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    this.props.router.events.off("routeChangeComplete", this.onRouteChangeComplete)
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props
                      , t = e.Component
                      , n = e.pageProps
                      , i = e.router
                      , o = "";
                    switch (i.pathname) {
                    case "/":
                        o = "index";
                        break;
                    case "/playground":
                        o = "playground";
                        break;
                    case "/about":
                        o = "about";
                        break;
                    case "/contact":
                        o = "contact"
                    }
                    return N(L, {
                        pageId: o
                    }, N(t, r({}, n, {
                        key: i.route
                    })))
                }
            }]),
            n
        }(x.a);
        t.default = I
    },
    "6Fm8": function(e, t, n) {},
    "8Bbg": function(e, t, n) {
        e.exports = n("B5Ud")
    },
    B5Ud: function(e, t, n) {
        "use strict";
        var r = n("o0o1")
          , i = n("lwsE")
          , o = n("W8MJ")
          , s = n("7W2i")
          , a = n("a1gu")
          , c = n("Nsbk")
          , u = n("yXPU");
        function l(e) {
            var t = function() {
                if ("undefined" === typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" === typeof Proxy)
                    return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                    ))),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, r = c(e);
                if (t) {
                    var i = c(this).constructor;
                    n = Reflect.construct(r, arguments, i)
                } else
                    n = r.apply(this, arguments);
                return a(this, n)
            }
        }
        var p = n("TqRt");
        t.__esModule = !0,
        t.Container = function(e) {
            0;
            return e.children
        }
        ,
        t.createUrl = y,
        t.default = void 0;
        var f = p(n("q1tI"))
          , d = n("g/15");
        function h(e) {
            return v.apply(this, arguments)
        }
        function v() {
            return (v = u(r.mark((function e(t) {
                var n, i, o;
                return r.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return n = t.Component,
                            i = t.ctx,
                            e.next = 3,
                            (0,
                            d.loadGetInitialProps)(n, i);
                        case 3:
                            return o = e.sent,
                            e.abrupt("return", {
                                pageProps: o
                            });
                        case 5:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )))).apply(this, arguments)
        }
        t.AppInitialProps = d.AppInitialProps,
        t.NextWebVitalsMetric = d.NextWebVitalsMetric;
        var m = function(e) {
            s(n, e);
            var t = l(n);
            function n() {
                return i(this, n),
                t.apply(this, arguments)
            }
            return o(n, [{
                key: "componentDidCatch",
                value: function(e, t) {
                    throw e
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props
                      , t = e.router
                      , n = e.Component
                      , r = e.pageProps
                      , i = e.__N_SSG
                      , o = e.__N_SSP;
                    return f.default.createElement(n, Object.assign({}, r, i || o ? {} : {
                        url: y(t)
                    }))
                }
            }]),
            n
        }(f.default.Component);
        function y(e) {
            var t = e.pathname
              , n = e.asPath
              , r = e.query;
            return {
                get query() {
                    return r
                },
                get pathname() {
                    return t
                },
                get asPath() {
                    return n
                },
                back: function() {
                    e.back()
                },
                push: function(t, n) {
                    return e.push(t, n)
                },
                pushTo: function(t, n) {
                    var r = n ? t : ""
                      , i = n || t;
                    return e.push(r, i)
                },
                replace: function(t, n) {
                    return e.replace(t, n)
                },
                replaceTo: function(t, n) {
                    var r = n ? t : ""
                      , i = n || t;
                    return e.replace(r, i)
                }
            }
        }
        t.default = m,
        m.origGetInitialProps = h,
        m.getInitialProps = h
    },
    GcxT: function(e, t, n) {
        (window.__NEXT_P = window.__NEXT_P || []).push(["/_app", function() {
            return n("1TCz")
        }
        ])
    }
}, [[0, 0, 1, 2, 3, 4]]]);
