var t, e, n, i, r, o, a, s, l, u, c, d, h, v, f, p, y, g, m, _, b, w, k, E, C;

function $(t, e) {
    return e || (e = t.slice(0)), Object.freeze(Object.defineProperties(t, {
        raw: {
            value: Object.freeze(e)
        }
    }))
}

function x(t, e) {
    var n = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(t);
        e && (i = i.filter((function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
        }))), n.push.apply(n, i)
    }
    return n
}

function A(t) {
    for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2 ? x(Object(n), !0).forEach((function(e) {
            S(t, e, n[e])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : x(Object(n)).forEach((function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
        }))
    }
    return t
}

function S(t, e, n) {
    return (e = J(e)) in t ? Object.defineProperty(t, e, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = n, t
}

function O(t, e, n, i) {
    var r = M(G(1 & i ? t.prototype : t), e, n);
    return 2 & i && "function" == typeof r ? function(t) {
        return r.apply(n, t)
    } : r
}

function M() {
    return M = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function(t, e, n) {
        var i = function(t, e) {
            for (; !{}.hasOwnProperty.call(t, e) && null !== (t = G(t)););
            return t
        }(t, e);
        if (i) {
            var r = Object.getOwnPropertyDescriptor(i, e);
            return r.get ? r.get.call(arguments.length < 3 ? t : n) : r.value
        }
    }, M.apply(null, arguments)
}

function j(t) {
    return function(t) {
        if (Array.isArray(t)) return W(t)
    }(t) || function(t) {
        if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
    }(t) || B(t) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }()
}

function P(t, e) {
    return function(t) {
        if (Array.isArray(t)) return t
    }(t) || function(t, e) {
        var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
        if (null != n) {
            var i, r, o, a, s = [],
                l = !0,
                u = !1;
            try {
                if (o = (n = n.call(t)).next, 0 === e) {
                    if (Object(n) !== n) return;
                    l = !1
                } else
                    for (; !(l = (i = o.call(n)).done) && (s.push(i.value), s.length !== e); l = !0);
            } catch (t) {
                u = !0, r = t
            } finally {
                try {
                    if (!l && null != n.return && (a = n.return(), Object(a) !== a)) return
                } finally {
                    if (u) throw r
                }
            }
            return s
        }
    }(t, e) || B(t, e) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }()
}

function T() {
    T = function() {
        return e
    };
    var t, e = {},
        n = Object.prototype,
        i = n.hasOwnProperty,
        r = "function" == typeof Symbol ? Symbol : {},
        o = r.iterator || "@@iterator",
        a = r.asyncIterator || "@@asyncIterator",
        s = r.toStringTag || "@@toStringTag";

    function l(t, e, n, i) {
        return Object.defineProperty(t, e, {
            value: n,
            enumerable: !i,
            configurable: !i,
            writable: !i
        })
    }
    try {
        l({}, "")
    } catch (t) {
        l = function(t, e, n) {
            return t[e] = n
        }
    }

    function u(e, n, i, r) {
        var o = n && n.prototype instanceof h ? n : h,
            a = Object.create(o.prototype);
        return l(a, "_invoke", function(e, n, i) {
            var r = 1;
            return function(o, a) {
                if (3 === r) throw Error("Generator is already running");
                if (4 === r) {
                    if ("throw" === o) throw a;
                    return {
                        value: t,
                        done: !0
                    }
                }
                for (i.method = o, i.arg = a;;) {
                    var s = i.delegate;
                    if (s) {
                        var l = w(s, i);
                        if (l) {
                            if (l === d) continue;
                            return l
                        }
                    }
                    if ("next" === i.method) i.sent = i._sent = i.arg;
                    else if ("throw" === i.method) {
                        if (1 === r) throw r = 4, i.arg;
                        i.dispatchException(i.arg)
                    } else "return" === i.method && i.abrupt("return", i.arg);
                    r = 3;
                    var u = c(e, n, i);
                    if ("normal" === u.type) {
                        if (r = i.done ? 4 : 2, u.arg === d) continue;
                        return {
                            value: u.arg,
                            done: i.done
                        }
                    }
                    "throw" === u.type && (r = 4, i.method = "throw", i.arg = u.arg)
                }
            }
        }(e, i, new C(r || [])), !0), a
    }

    function c(t, e, n) {
        try {
            return {
                type: "normal",
                arg: t.call(e, n)
            }
        } catch (t) {
            return {
                type: "throw",
                arg: t
            }
        }
    }
    e.wrap = u;
    var d = {};

    function h() {}

    function v() {}

    function f() {}
    var p = {};
    l(p, o, (function() {
        return this
    }));
    var y = Object.getPrototypeOf,
        g = y && y(y($([])));
    g && g !== n && i.call(g, o) && (p = g);
    var m = f.prototype = h.prototype = Object.create(p);

    function _(t) {
        ["next", "throw", "return"].forEach((function(e) {
            l(t, e, (function(t) {
                return this._invoke(e, t)
            }))
        }))
    }

    function b(t, e) {
        function n(r, o, a, s) {
            var l = c(t[r], t, o);
            if ("throw" !== l.type) {
                var u = l.arg,
                    d = u.value;
                return d && "object" == K(d) && i.call(d, "__await") ? e.resolve(d.__await).then((function(t) {
                    n("next", t, a, s)
                }), (function(t) {
                    n("throw", t, a, s)
                })) : e.resolve(d).then((function(t) {
                    u.value = t, a(u)
                }), (function(t) {
                    return n("throw", t, a, s)
                }))
            }
            s(l.arg)
        }
        var r;
        l(this, "_invoke", (function(t, i) {
            function o() {
                return new e((function(e, r) {
                    n(t, i, e, r)
                }))
            }
            return r = r ? r.then(o, o) : o()
        }), !0)
    }

    function w(e, n) {
        var i = n.method,
            r = e.i[i];
        if (r === t) return n.delegate = null, "throw" === i && e.i.return && (n.method = "return", n.arg = t, w(e, n), "throw" === n.method) || "return" !== i && (n.method = "throw", n.arg = new TypeError("The iterator does not provide a '" + i + "' method")), d;
        var o = c(r, e.i, n.arg);
        if ("throw" === o.type) return n.method = "throw", n.arg = o.arg, n.delegate = null, d;
        var a = o.arg;
        return a ? a.done ? (n[e.r] = a.value, n.next = e.n, "return" !== n.method && (n.method = "next", n.arg = t), n.delegate = null, d) : a : (n.method = "throw", n.arg = new TypeError("iterator result is not an object"), n.delegate = null, d)
    }

    function k(t) {
        this.tryEntries.push(t)
    }

    function E(e) {
        var n = e[4] || {};
        n.type = "normal", n.arg = t, e[4] = n
    }

    function C(t) {
        this.tryEntries = [
            [-1]
        ], t.forEach(k, this), this.reset(!0)
    }

    function $(e) {
        if (null != e) {
            var n = e[o];
            if (n) return n.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
                var r = -1,
                    a = function n() {
                        for (; ++r < e.length;)
                            if (i.call(e, r)) return n.value = e[r], n.done = !1, n;
                        return n.value = t, n.done = !0, n
                    };
                return a.next = a
            }
        }
        throw new TypeError(K(e) + " is not iterable")
    }
    return v.prototype = f, l(m, "constructor", f), l(f, "constructor", v), v.displayName = l(f, s, "GeneratorFunction"), e.isGeneratorFunction = function(t) {
        var e = "function" == typeof t && t.constructor;
        return !!e && (e === v || "GeneratorFunction" === (e.displayName || e.name))
    }, e.mark = function(t) {
        return Object.setPrototypeOf ? Object.setPrototypeOf(t, f) : (t.__proto__ = f, l(t, s, "GeneratorFunction")), t.prototype = Object.create(m), t
    }, e.awrap = function(t) {
        return {
            __await: t
        }
    }, _(b.prototype), l(b.prototype, a, (function() {
        return this
    })), e.AsyncIterator = b, e.async = function(t, n, i, r, o) {
        void 0 === o && (o = Promise);
        var a = new b(u(t, n, i, r), o);
        return e.isGeneratorFunction(n) ? a : a.next().then((function(t) {
            return t.done ? t.value : a.next()
        }))
    }, _(m), l(m, s, "Generator"), l(m, o, (function() {
        return this
    })), l(m, "toString", (function() {
        return "[object Generator]"
    })), e.keys = function(t) {
        var e = Object(t),
            n = [];
        for (var i in e) n.unshift(i);
        return function t() {
            for (; n.length;)
                if ((i = n.pop()) in e) return t.value = i, t.done = !1, t;
            return t.done = !0, t
        }
    }, e.values = $, C.prototype = {
        constructor: C,
        reset: function(e) {
            if (this.prev = this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(E), !e)
                for (var n in this) "t" === n.charAt(0) && i.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = t)
        },
        stop: function() {
            this.done = !0;
            var t = this.tryEntries[0][4];
            if ("throw" === t.type) throw t.arg;
            return this.rval
        },
        dispatchException: function(e) {
            if (this.done) throw e;
            var n = this;

            function i(t) {
                a.type = "throw", a.arg = e, n.next = t
            }
            for (var r = n.tryEntries.length - 1; r >= 0; --r) {
                var o = this.tryEntries[r],
                    a = o[4],
                    s = this.prev,
                    l = o[1],
                    u = o[2];
                if (-1 === o[0]) return i("end"), !1;
                if (!l && !u) throw Error("try statement without catch or finally");
                if (null != o[0] && o[0] <= s) {
                    if (s < l) return this.method = "next", this.arg = t, i(l), !0;
                    if (s < u) return i(u), !1
                }
            }
        },
        abrupt: function(t, e) {
            for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var i = this.tryEntries[n];
                if (i[0] > -1 && i[0] <= this.prev && this.prev < i[2]) {
                    var r = i;
                    break
                }
            }
            r && ("break" === t || "continue" === t) && r[0] <= e && e <= r[2] && (r = null);
            var o = r ? r[4] : {};
            return o.type = t, o.arg = e, r ? (this.method = "next", this.next = r[2], d) : this.complete(o)
        },
        complete: function(t, e) {
            if ("throw" === t.type) throw t.arg;
            return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), d
        },
        finish: function(t) {
            for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n[2] === t) return this.complete(n[4], n[3]), E(n), d
            }
        },
        catch: function(t) {
            for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n[0] === t) {
                    var i = n[4];
                    if ("throw" === i.type) {
                        var r = i.arg;
                        E(n)
                    }
                    return r
                }
            }
            throw Error("illegal catch attempt")
        },
        delegateYield: function(e, n, i) {
            return this.delegate = {
                i: $(e),
                r: n,
                n: i
            }, "next" === this.method && (this.arg = t), d
        }
    }, e
}

function U(t, e, n, i, r, o, a) {
    try {
        var s = t[o](a),
            l = s.value
    } catch (t) {
        return void n(t)
    }
    s.done ? e(l) : Promise.resolve(l).then(i, r)
}

function L(t) {
    return function() {
        var e = this,
            n = arguments;
        return new Promise((function(i, r) {
            var o = t.apply(e, n);

            function a(t) {
                U(o, i, r, a, s, "next", t)
            }

            function s(t) {
                U(o, i, r, a, s, "throw", t)
            }
            a(void 0)
        }))
    }
}

function R(t, e, n) {
    return e = G(e),
        function(t, e) {
            if (e && ("object" == K(e) || "function" == typeof e)) return e;
            if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
            return N(t)
        }(t, I() ? Reflect.construct(e, n || [], G(t).constructor) : e.apply(t, n))
}

function N(t) {
    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t
}

function H(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
    t.prototype = Object.create(e && e.prototype, {
        constructor: {
            value: t,
            writable: !0,
            configurable: !0
        }
    }), Object.defineProperty(t, "prototype", {
        writable: !1
    }), e && D(t, e)
}

function z(t) {
    var e = "function" == typeof Map ? new Map : void 0;
    return z = function(t) {
        if (null === t || ! function(t) {
                try {
                    return -1 !== Function.toString.call(t).indexOf("[native code]")
                } catch (e) {
                    return "function" == typeof t
                }
            }(t)) return t;
        if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function");
        if (void 0 !== e) {
            if (e.has(t)) return e.get(t);
            e.set(t, n)
        }

        function n() {
            return function(t, e, n) {
                if (I()) return Reflect.construct.apply(null, arguments);
                var i = [null];
                i.push.apply(i, e);
                var r = new(t.bind.apply(t, i));
                return n && D(r, n.prototype), r
            }(t, arguments, G(this).constructor)
        }
        return n.prototype = Object.create(t.prototype, {
            constructor: {
                value: n,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), D(n, t)
    }, z(t)
}

function I() {
    try {
        var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
    } catch (t) {}
    return (I = function() {
        return !!t
    })()
}

function D(t, e) {
    return D = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
        return t.__proto__ = e, t
    }, D(t, e)
}

function G(t) {
    return G = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
        return t.__proto__ || Object.getPrototypeOf(t)
    }, G(t)
}

function q(t, e) {
    var n = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
    if (!n) {
        if (Array.isArray(t) || (n = B(t)) || e && t && "number" == typeof t.length) {
            n && (t = n);
            var i = 0,
                r = function() {};
            return {
                s: r,
                n: function() {
                    return i >= t.length ? {
                        done: !0
                    } : {
                        done: !1,
                        value: t[i++]
                    }
                },
                e: function(t) {
                    throw t
                },
                f: r
            }
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }
    var o, a = !0,
        s = !1;
    return {
        s: function() {
            n = n.call(t)
        },
        n: function() {
            var t = n.next();
            return a = t.done, t
        },
        e: function(t) {
            s = !0, o = t
        },
        f: function() {
            try {
                a || null == n.return || n.return()
            } finally {
                if (s) throw o
            }
        }
    }
}

function B(t, e) {
    if (t) {
        if ("string" == typeof t) return W(t, e);
        var n = {}.toString.call(t).slice(8, -1);
        return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? W(t, e) : void 0
    }
}

function W(t, e) {
    (null == e || e > t.length) && (e = t.length);
    for (var n = 0, i = Array(e); n < e; n++) i[n] = t[n];
    return i
}

function Q(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
}

function V(t, e) {
    for (var n = 0; n < e.length; n++) {
        var i = e[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, J(i.key), i)
    }
}

function F(t, e, n) {
    return e && V(t.prototype, e), n && V(t, n), Object.defineProperty(t, "prototype", {
        writable: !1
    }), t
}

function J(t) {
    var e = function(t, e) {
        if ("object" != K(t) || !t) return t;
        var n = t[Symbol.toPrimitive];
        if (void 0 !== n) {
            var i = n.call(t, e || "default");
            if ("object" != K(i)) return i;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === e ? String : Number)(t)
    }(t, "string");
    return "symbol" == K(e) ? e : e + ""
}

function K(t) {
    return K = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }, K(t)
}

function Y(t, e, n, i) {
    var r, o = arguments.length,
        a = o < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, n) : i;
    if ("object" === ("undefined" == typeof Reflect ? "undefined" : K(Reflect)) && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, i);
    else
        for (var s = t.length - 1; s >= 0; s--)(r = t[s]) && (a = (o < 3 ? r(a) : o > 3 ? r(e, n, a) : r(e, n)) || a);
    return o > 3 && a && Object.defineProperty(e, n, a), a
}
"function" == typeof SuppressedError && SuppressedError;
var Z = globalThis,
    X = Z.ShadowRoot && (void 0 === Z.ShadyCSS || Z.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype,
    tt = Symbol(),
    et = new WeakMap,
    nt = function() {
        return F((function t(e, n, i) {
            if (Q(this, t), this._$cssResult$ = !0, i !== tt) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
            this.cssText = e, this.t = n
        }), [{
            key: "styleSheet",
            get: function() {
                var t = this.o,
                    e = this.t;
                if (X && void 0 === t) {
                    var n = void 0 !== e && 1 === e.length;
                    n && (t = et.get(e)), void 0 === t && ((this.o = t = new CSSStyleSheet).replaceSync(this.cssText), n && et.set(e, t))
                }
                return t
            }
        }, {
            key: "toString",
            value: function() {
                return this.cssText
            }
        }])
    }(),
    it = function(t) {
        for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), i = 1; i < e; i++) n[i - 1] = arguments[i];
        var r = 1 === t.length ? t[0] : n.reduce((function(e, n, i) {
            return e + function(t) {
                if (!0 === t._$cssResult$) return t.cssText;
                if ("number" == typeof t) return t;
                throw Error("Value passed to 'css' function must be a 'css' function result: " + t + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")
            }(n) + t[i + 1]
        }), t[0]);
        return new nt(r, t, tt)
    },
    rt = X ? function(t) {
        return t
    } : function(t) {
        return t instanceof CSSStyleSheet ? function(t) {
            var e, n = "",
                i = q(t.cssRules);
            try {
                for (i.s(); !(e = i.n()).done;) {
                    n += e.value.cssText
                }
            } catch (t) {
                i.e(t)
            } finally {
                i.f()
            }
            return function(t) {
                return new nt("string" == typeof t ? t : t + "", void 0, tt)
            }(n)
        }(t) : t
    },
    ot = Object.is,
    at = Object.defineProperty,
    st = Object.getOwnPropertyDescriptor,
    lt = Object.getOwnPropertyNames,
    ut = Object.getOwnPropertySymbols,
    ct = Object.getPrototypeOf,
    dt = globalThis,
    ht = dt.trustedTypes,
    vt = ht ? ht.emptyScript : "",
    ft = dt.reactiveElementPolyfillSupport,
    pt = function(t, e) {
        return t
    },
    yt = {
        toAttribute: function(t, e) {
            switch (e) {
                case Boolean:
                    t = t ? vt : null;
                    break;
                case Object:
                case Array:
                    t = null == t ? t : JSON.stringify(t)
            }
            return t
        },
        fromAttribute: function(t, e) {
            var n = t;
            switch (e) {
                case Boolean:
                    n = null !== t;
                    break;
                case Number:
                    n = null === t ? null : Number(t);
                    break;
                case Object:
                case Array:
                    try {
                        n = JSON.parse(t)
                    } catch (t) {
                        n = null
                    }
            }
            return n
        }
    },
    gt = function(t, e) {
        return !ot(t, e)
    },
    mt = {
        attribute: !0,
        type: String,
        converter: yt,
        reflect: !1,
        useDefault: !1,
        hasChanged: gt
    };
null !== (t = Symbol.metadata) && void 0 !== t || (Symbol.metadata = Symbol("metadata")), null !== (e = dt.litPropertyMetadata) && void 0 !== e || (dt.litPropertyMetadata = new WeakMap);
var _t = function() {
    function t() {
        var e;
        return Q(this, t), (e = R(this, t))._$Ep = void 0, e.isUpdatePending = !1, e.hasUpdated = !1, e._$Em = null, e._$Ev(), e
    }
    return H(t, z(HTMLElement)), F(t, [{
        key: "_$Ev",
        value: function() {
            var t, e = this;
            this._$ES = new Promise((function(t) {
                return e.enableUpdating = t
            })), this._$AL = new Map, this._$E_(), this.requestUpdate(), null === (t = this.constructor.l) || void 0 === t || t.forEach((function(t) {
                return t(e)
            }))
        }
    }, {
        key: "addController",
        value: function(t) {
            var e, n;
            (null !== (e = this._$EO) && void 0 !== e ? e : this._$EO = new Set).add(t), void 0 !== this.renderRoot && this.isConnected && (null === (n = t.hostConnected) || void 0 === n || n.call(t))
        }
    }, {
        key: "removeController",
        value: function(t) {
            var e;
            null === (e = this._$EO) || void 0 === e || e.delete(t)
        }
    }, {
        key: "_$E_",
        value: function() {
            var t, e = new Map,
                n = q(this.constructor.elementProperties.keys());
            try {
                for (n.s(); !(t = n.n()).done;) {
                    var i = t.value;
                    this.hasOwnProperty(i) && (e.set(i, this[i]), delete this[i])
                }
            } catch (t) {
                n.e(t)
            } finally {
                n.f()
            }
            e.size > 0 && (this._$Ep = e)
        }
    }, {
        key: "createRenderRoot",
        value: function() {
            var t, e = null !== (t = this.shadowRoot) && void 0 !== t ? t : this.attachShadow(this.constructor.shadowRootOptions);
            return function(t, e) {
                if (X) t.adoptedStyleSheets = e.map((function(t) {
                    return t instanceof CSSStyleSheet ? t : t.styleSheet
                }));
                else {
                    var n, i = q(e);
                    try {
                        for (i.s(); !(n = i.n()).done;) {
                            var r = n.value,
                                o = document.createElement("style"),
                                a = Z.litNonce;
                            void 0 !== a && o.setAttribute("nonce", a), o.textContent = r.cssText, t.appendChild(o)
                        }
                    } catch (t) {
                        i.e(t)
                    } finally {
                        i.f()
                    }
                }
            }(e, this.constructor.elementStyles), e
        }
    }, {
        key: "connectedCallback",
        value: function() {
            var t, e;
            null !== (t = this.renderRoot) && void 0 !== t || (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), null === (e = this._$EO) || void 0 === e || e.forEach((function(t) {
                var e;
                return null === (e = t.hostConnected) || void 0 === e ? void 0 : e.call(t)
            }))
        }
    }, {
        key: "enableUpdating",
        value: function(t) {}
    }, {
        key: "disconnectedCallback",
        value: function() {
            var t;
            null === (t = this._$EO) || void 0 === t || t.forEach((function(t) {
                var e;
                return null === (e = t.hostDisconnected) || void 0 === e ? void 0 : e.call(t)
            }))
        }
    }, {
        key: "attributeChangedCallback",
        value: function(t, e, n) {
            this._$AK(t, n)
        }
    }, {
        key: "_$ET",
        value: function(t, e) {
            var n = this.constructor.elementProperties.get(t),
                i = this.constructor._$Eu(t, n);
            if (void 0 !== i && !0 === n.reflect) {
                var r, o = (void 0 !== (null === (r = n.converter) || void 0 === r ? void 0 : r.toAttribute) ? n.converter : yt).toAttribute(e, n.type);
                this._$Em = t, null == o ? this.removeAttribute(i) : this.setAttribute(i, o), this._$Em = null
            }
        }
    }, {
        key: "_$AK",
        value: function(t, e) {
            var n = this.constructor,
                i = n._$Eh.get(t);
            if (void 0 !== i && this._$Em !== i) {
                var r, o, a, s, l = n.getPropertyOptions(i),
                    u = "function" == typeof l.converter ? {
                        fromAttribute: l.converter
                    } : void 0 !== (null === (r = l.converter) || void 0 === r ? void 0 : r.fromAttribute) ? l.converter : yt;
                this._$Em = i, this[i] = null !== (o = null !== (a = u.fromAttribute(e, l.type)) && void 0 !== a ? a : null === (s = this._$Ej) || void 0 === s ? void 0 : s.get(i)) && void 0 !== o ? o : null, this._$Em = null
            }
        }
    }, {
        key: "requestUpdate",
        value: function(t, e, n) {
            if (void 0 !== t) {
                var i, r, o = this.constructor,
                    a = this[t];
                if (null != n || (n = o.getPropertyOptions(t)), !((null !== (i = n.hasChanged) && void 0 !== i ? i : gt)(a, e) || n.useDefault && n.reflect && a === (null === (r = this._$Ej) || void 0 === r ? void 0 : r.get(t)) && !this.hasAttribute(o._$Eu(t, n)))) return;
                this.C(t, e, n)
            }!1 === this.isUpdatePending && (this._$ES = this._$EP())
        }
    }, {
        key: "C",
        value: function(t, e, n, i) {
            var r, o, a, s = n.useDefault,
                l = n.reflect,
                u = n.wrapped;
            s && !(null !== (r = this._$Ej) && void 0 !== r ? r : this._$Ej = new Map).has(t) && (this._$Ej.set(t, null !== (o = null != i ? i : e) && void 0 !== o ? o : this[t]), !0 !== u || void 0 !== i) || (this._$AL.has(t) || (this.hasUpdated || s || (e = void 0), this._$AL.set(t, e)), !0 === l && this._$Em !== t && (null !== (a = this._$Eq) && void 0 !== a ? a : this._$Eq = new Set).add(t))
        }
    }, {
        key: "_$EP",
        value: (e = L(T().mark((function t() {
            var e;
            return T().wrap((function(t) {
                for (;;) switch (t.prev = t.next) {
                    case 0:
                        return this.isUpdatePending = !0, t.prev = 1, t.next = 4, this._$ES;
                    case 4:
                        t.next = 9;
                        break;
                    case 6:
                        t.prev = 6, t.t0 = t.catch(1), Promise.reject(t.t0);
                    case 9:
                        if (e = this.scheduleUpdate(), t.t1 = null != e, !t.t1) {
                            t.next = 14;
                            break
                        }
                        return t.next = 14, e;
                    case 14:
                        return t.abrupt("return", !this.isUpdatePending);
                    case 15:
                    case "end":
                        return t.stop()
                }
            }), t, this, [
                [1, 6]
            ])
        }))), function() {
            return e.apply(this, arguments)
        })
    }, {
        key: "scheduleUpdate",
        value: function() {
            return this.performUpdate()
        }
    }, {
        key: "performUpdate",
        value: function() {
            if (this.isUpdatePending) {
                if (!this.hasUpdated) {
                    var t;
                    if (null !== (t = this.renderRoot) && void 0 !== t || (this.renderRoot = this.createRenderRoot()), this._$Ep) {
                        var e, n = q(this._$Ep);
                        try {
                            for (n.s(); !(e = n.n()).done;) {
                                var i = P(e.value, 2),
                                    r = i[0],
                                    o = i[1];
                                this[r] = o
                            }
                        } catch (t) {
                            n.e(t)
                        } finally {
                            n.f()
                        }
                        this._$Ep = void 0
                    }
                    var a = this.constructor.elementProperties;
                    if (a.size > 0) {
                        var s, l = q(a);
                        try {
                            for (l.s(); !(s = l.n()).done;) {
                                var u = P(s.value, 2),
                                    c = u[0],
                                    d = u[1],
                                    h = d.wrapped,
                                    v = this[c];
                                !0 !== h || this._$AL.has(c) || void 0 === v || this.C(c, void 0, d, v)
                            }
                        } catch (t) {
                            l.e(t)
                        } finally {
                            l.f()
                        }
                    }
                }
                var f = !1,
                    p = this._$AL;
                try {
                    var y;
                    (f = this.shouldUpdate(p)) ? (this.willUpdate(p), null !== (y = this._$EO) && void 0 !== y && y.forEach((function(t) {
                        var e;
                        return null === (e = t.hostUpdate) || void 0 === e ? void 0 : e.call(t)
                    })), this.update(p)) : this._$EM()
                } catch (p) {
                    throw f = !1, this._$EM(), p
                }
                f && this._$AE(p)
            }
        }
    }, {
        key: "willUpdate",
        value: function(t) {}
    }, {
        key: "_$AE",
        value: function(t) {
            var e;
            null !== (e = this._$EO) && void 0 !== e && e.forEach((function(t) {
                var e;
                return null === (e = t.hostUpdated) || void 0 === e ? void 0 : e.call(t)
            })), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(t)), this.updated(t)
        }
    }, {
        key: "_$EM",
        value: function() {
            this._$AL = new Map, this.isUpdatePending = !1
        }
    }, {
        key: "updateComplete",
        get: function() {
            return this.getUpdateComplete()
        }
    }, {
        key: "getUpdateComplete",
        value: function() {
            return this._$ES
        }
    }, {
        key: "shouldUpdate",
        value: function(t) {
            return !0
        }
    }, {
        key: "update",
        value: function(t) {
            var e = this;
            this._$Eq && (this._$Eq = this._$Eq.forEach((function(t) {
                return e._$ET(t, e[t])
            }))), this._$EM()
        }
    }, {
        key: "updated",
        value: function(t) {}
    }, {
        key: "firstUpdated",
        value: function(t) {}
    }], [{
        key: "addInitializer",
        value: function(t) {
            var e;
            this._$Ei(), (null !== (e = this.l) && void 0 !== e ? e : this.l = []).push(t)
        }
    }, {
        key: "observedAttributes",
        get: function() {
            return this.finalize(), this._$Eh && j(this._$Eh.keys())
        }
    }, {
        key: "createProperty",
        value: function(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : mt;
            if (e.state && (e.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(t) && ((e = Object.create(e)).wrapped = !0), this.elementProperties.set(t, e), !e.noAccessor) {
                var n = Symbol(),
                    i = this.getPropertyDescriptor(t, n, e);
                void 0 !== i && at(this.prototype, t, i)
            }
        }
    }, {
        key: "getPropertyDescriptor",
        value: function(t, e, n) {
            var i, r = null !== (i = st(this.prototype, t)) && void 0 !== i ? i : {
                    get: function() {
                        return this[e]
                    },
                    set: function(t) {
                        this[e] = t
                    }
                },
                o = r.get,
                a = r.set;
            return {
                get: o,
                set: function(e) {
                    var i = null == o ? void 0 : o.call(this);
                    null != a && a.call(this, e), this.requestUpdate(t, i, n)
                },
                configurable: !0,
                enumerable: !0
            }
        }
    }, {
        key: "getPropertyOptions",
        value: function(t) {
            var e;
            return null !== (e = this.elementProperties.get(t)) && void 0 !== e ? e : mt
        }
    }, {
        key: "_$Ei",
        value: function() {
            if (!this.hasOwnProperty(pt("elementProperties"))) {
                var t = ct(this);
                t.finalize(), void 0 !== t.l && (this.l = j(t.l)), this.elementProperties = new Map(t.elementProperties)
            }
        }
    }, {
        key: "finalize",
        value: function() {
            if (!this.hasOwnProperty(pt("finalized"))) {
                if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(pt("properties"))) {
                    var t, e = this.properties,
                        n = q([].concat(j(lt(e)), j(ut(e))));
                    try {
                        for (n.s(); !(t = n.n()).done;) {
                            var i = t.value;
                            this.createProperty(i, e[i])
                        }
                    } catch (t) {
                        n.e(t)
                    } finally {
                        n.f()
                    }
                }
                var r = this[Symbol.metadata];
                if (null !== r) {
                    var o = litPropertyMetadata.get(r);
                    if (void 0 !== o) {
                        var a, s = q(o);
                        try {
                            for (s.s(); !(a = s.n()).done;) {
                                var l = P(a.value, 2),
                                    u = l[0],
                                    c = l[1];
                                this.elementProperties.set(u, c)
                            }
                        } catch (t) {
                            s.e(t)
                        } finally {
                            s.f()
                        }
                    }
                }
                this._$Eh = new Map;
                var d, h = q(this.elementProperties);
                try {
                    for (h.s(); !(d = h.n()).done;) {
                        var v = P(d.value, 2),
                            f = v[0],
                            p = v[1],
                            y = this._$Eu(f, p);
                        void 0 !== y && this._$Eh.set(y, f)
                    }
                } catch (t) {
                    h.e(t)
                } finally {
                    h.f()
                }
                this.elementStyles = this.finalizeStyles(this.styles)
            }
        }
    }, {
        key: "finalizeStyles",
        value: function(t) {
            var e = [];
            if (Array.isArray(t)) {
                var n, i = q(new Set(t.flat(1 / 0).reverse()));
                try {
                    for (i.s(); !(n = i.n()).done;) {
                        var r = n.value;
                        e.unshift(rt(r))
                    }
                } catch (t) {
                    i.e(t)
                } finally {
                    i.f()
                }
            } else void 0 !== t && e.push(rt(t));
            return e
        }
    }, {
        key: "_$Eu",
        value: function(t, e) {
            var n = e.attribute;
            return !1 === n ? void 0 : "string" == typeof n ? n : "string" == typeof t ? t.toLowerCase() : void 0
        }
    }]);
    var e
}();
_t.elementStyles = [], _t.shadowRootOptions = {
    mode: "open"
}, _t[pt("elementProperties")] = new Map, _t[pt("finalized")] = new Map, null != ft && ft({
    ReactiveElement: _t
}), (null !== (n = dt.reactiveElementVersions) && void 0 !== n ? n : dt.reactiveElementVersions = []).push("2.1.0");
var bt = globalThis,
    wt = bt.trustedTypes,
    kt = wt ? wt.createPolicy("lit-html", {
        createHTML: function(t) {
            return t
        }
    }) : void 0,
    Et = "$lit$",
    Ct = "lit$".concat(Math.random().toFixed(9).slice(2), "$"),
    $t = "?" + Ct,
    xt = "<".concat($t, ">"),
    At = document,
    St = function() {
        return At.createComment("")
    },
    Ot = function(t) {
        return null === t || "object" != K(t) && "function" != typeof t
    },
    Mt = Array.isArray,
    jt = "[ \t\n\f\r]",
    Pt = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,
    Tt = /-->/g,
    Ut = />/g,
    Lt = RegExp(">|".concat(jt, "(?:([^\\s\"'>=/]+)(").concat(jt, "*=").concat(jt, "*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)"), "g"),
    Rt = /'/g,
    Nt = /"/g,
    Ht = /^(?:script|style|textarea|title)$/i,
    zt = function(t) {
        return function(e) {
            for (var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++) i[r - 1] = arguments[r];
            return {
                _$litType$: t,
                strings: e,
                values: i
            }
        }
    }(1),
    It = Symbol.for("lit-noChange"),
    Dt = Symbol.for("lit-nothing"),
    Gt = new WeakMap,
    qt = At.createTreeWalker(At, 129);

function Bt(t, e) {
    if (!Mt(t) || !t.hasOwnProperty("raw")) throw Error("invalid template strings array");
    return void 0 !== kt ? kt.createHTML(e) : e
}
var Wt = function(t, e) {
        for (var n, i = t.length - 1, r = [], o = 2 === e ? "<svg>" : 3 === e ? "<math>" : "", a = Pt, s = 0; s < i; s++) {
            for (var l = t[s], u = void 0, c = void 0, d = -1, h = 0; h < l.length && (a.lastIndex = h, null !== (c = a.exec(l)));) h = a.lastIndex, a === Pt ? "!--" === c[1] ? a = Tt : void 0 !== c[1] ? a = Ut : void 0 !== c[2] ? (Ht.test(c[2]) && (n = RegExp("</" + c[2], "g")), a = Lt) : void 0 !== c[3] && (a = Lt) : a === Lt ? ">" === c[0] ? (a = null != n ? n : Pt, d = -1) : void 0 === c[1] ? d = -2 : (d = a.lastIndex - c[2].length, u = c[1], a = void 0 === c[3] ? Lt : '"' === c[3] ? Nt : Rt) : a === Nt || a === Rt ? a = Lt : a === Tt || a === Ut ? a = Pt : (a = Lt, n = void 0);
            var v = a === Lt && t[s + 1].startsWith("/>") ? " " : "";
            o += a === Pt ? l + xt : d >= 0 ? (r.push(u), l.slice(0, d) + Et + l.slice(d) + Ct + v) : l + Ct + (-2 === d ? s : v)
        }
        return [Bt(t, o + (t[i] || "<?>") + (2 === e ? "</svg>" : 3 === e ? "</math>" : "")), r]
    },
    Qt = function() {
        return F((function t(e, n) {
            var i, r = e.strings,
                o = e._$litType$;
            Q(this, t), this.parts = [];
            var a = 0,
                s = 0,
                l = r.length - 1,
                u = this.parts,
                c = P(Wt(r, o), 2),
                d = c[0],
                h = c[1];
            if (this.el = t.createElement(d, n), qt.currentNode = this.el.content, 2 === o || 3 === o) {
                var v = this.el.content.firstChild;
                v.replaceWith.apply(v, j(v.childNodes))
            }
            for (; null !== (i = qt.nextNode()) && u.length < l;) {
                if (1 === i.nodeType) {
                    if (i.hasAttributes()) {
                        var f, p = q(i.getAttributeNames());
                        try {
                            for (p.s(); !(f = p.n()).done;) {
                                var y = f.value;
                                if (y.endsWith(Et)) {
                                    var g = h[s++],
                                        m = i.getAttribute(y).split(Ct),
                                        _ = /([.?@])?(.*)/.exec(g);
                                    u.push({
                                        type: 1,
                                        index: a,
                                        name: _[2],
                                        strings: m,
                                        ctor: "." === _[1] ? Yt : "?" === _[1] ? Zt : "@" === _[1] ? Xt : Kt
                                    }), i.removeAttribute(y)
                                } else y.startsWith(Ct) && (u.push({
                                    type: 6,
                                    index: a
                                }), i.removeAttribute(y))
                            }
                        } catch (t) {
                            p.e(t)
                        } finally {
                            p.f()
                        }
                    }
                    if (Ht.test(i.tagName)) {
                        var b = i.textContent.split(Ct),
                            w = b.length - 1;
                        if (w > 0) {
                            i.textContent = wt ? wt.emptyScript : "";
                            for (var k = 0; k < w; k++) i.append(b[k], St()), qt.nextNode(), u.push({
                                type: 2,
                                index: ++a
                            });
                            i.append(b[w], St())
                        }
                    }
                } else if (8 === i.nodeType)
                    if (i.data === $t) u.push({
                        type: 2,
                        index: a
                    });
                    else
                        for (var E = -1; - 1 !== (E = i.data.indexOf(Ct, E + 1));) u.push({
                            type: 7,
                            index: a
                        }), E += Ct.length - 1;
                a++
            }
        }), null, [{
            key: "createElement",
            value: function(t, e) {
                var n = At.createElement("template");
                return n.innerHTML = t, n
            }
        }])
    }();

function Vt(t, e) {
    var n, i, r, o, a, s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : t,
        l = arguments.length > 3 ? arguments[3] : void 0;
    if (e === It) return e;
    var u = void 0 !== l ? null === (n = s._$Co) || void 0 === n ? void 0 : n[l] : s._$Cl,
        c = Ot(e) ? void 0 : e._$litDirective$;
    return (null === (i = u) || void 0 === i ? void 0 : i.constructor) !== c && (null !== (r = u) && void 0 !== r && null !== (o = r._$AO) && void 0 !== o && o.call(r, !1), void 0 === c ? u = void 0 : (u = new c(t))._$AT(t, s, l), void 0 !== l ? (null !== (a = s._$Co) && void 0 !== a ? a : s._$Co = [])[l] = u : s._$Cl = u), void 0 !== u && (e = Vt(t, u._$AS(t, e.values), u, l)), e
}
var Ft = function() {
        return F((function t(e, n) {
            Q(this, t), this._$AV = [], this._$AN = void 0, this._$AD = e, this._$AM = n
        }), [{
            key: "parentNode",
            get: function() {
                return this._$AM.parentNode
            }
        }, {
            key: "_$AU",
            get: function() {
                return this._$AM._$AU
            }
        }, {
            key: "u",
            value: function(t) {
                var e, n = this._$AD,
                    i = n.el.content,
                    r = n.parts,
                    o = (null !== (e = null == t ? void 0 : t.creationScope) && void 0 !== e ? e : At).importNode(i, !0);
                qt.currentNode = o;
                for (var a = qt.nextNode(), s = 0, l = 0, u = r[0]; void 0 !== u;) {
                    var c;
                    if (s === u.index) {
                        var d = void 0;
                        2 === u.type ? d = new Jt(a, a.nextSibling, this, t) : 1 === u.type ? d = new u.ctor(a, u.name, u.strings, this, t) : 6 === u.type && (d = new te(a, this, t)), this._$AV.push(d), u = r[++l]
                    }
                    s !== (null === (c = u) || void 0 === c ? void 0 : c.index) && (a = qt.nextNode(), s++)
                }
                return qt.currentNode = At, o
            }
        }, {
            key: "p",
            value: function(t) {
                var e, n = 0,
                    i = q(this._$AV);
                try {
                    for (i.s(); !(e = i.n()).done;) {
                        var r = e.value;
                        void 0 !== r && (void 0 !== r.strings ? (r._$AI(t, r, n), n += r.strings.length - 2) : r._$AI(t[n])), n++
                    }
                } catch (t) {
                    i.e(t)
                } finally {
                    i.f()
                }
            }
        }])
    }(),
    Jt = function() {
        function t(e, n, i, r) {
            var o;
            Q(this, t), this.type = 2, this._$AH = Dt, this._$AN = void 0, this._$AA = e, this._$AB = n, this._$AM = i, this.options = r, this._$Cv = null === (o = null == r ? void 0 : r.isConnected) || void 0 === o || o
        }
        return F(t, [{
            key: "_$AU",
            get: function() {
                var t, e;
                return null !== (t = null === (e = this._$AM) || void 0 === e ? void 0 : e._$AU) && void 0 !== t ? t : this._$Cv
            }
        }, {
            key: "parentNode",
            get: function() {
                var t, e = this._$AA.parentNode,
                    n = this._$AM;
                return void 0 !== n && 11 === (null === (t = e) || void 0 === t ? void 0 : t.nodeType) && (e = n.parentNode), e
            }
        }, {
            key: "startNode",
            get: function() {
                return this._$AA
            }
        }, {
            key: "endNode",
            get: function() {
                return this._$AB
            }
        }, {
            key: "_$AI",
            value: function(t) {
                t = Vt(this, t, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this), Ot(t) ? t === Dt || null == t || "" === t ? (this._$AH !== Dt && this._$AR(), this._$AH = Dt) : t !== this._$AH && t !== It && this._(t) : void 0 !== t._$litType$ ? this.$(t) : void 0 !== t.nodeType ? this.T(t) : function(t) {
                    return Mt(t) || "function" == typeof(null == t ? void 0 : t[Symbol.iterator])
                }(t) ? this.k(t) : this._(t)
            }
        }, {
            key: "O",
            value: function(t) {
                return this._$AA.parentNode.insertBefore(t, this._$AB)
            }
        }, {
            key: "T",
            value: function(t) {
                this._$AH !== t && (this._$AR(), this._$AH = this.O(t))
            }
        }, {
            key: "_",
            value: function(t) {
                this._$AH !== Dt && Ot(this._$AH) ? this._$AA.nextSibling.data = t : this.T(At.createTextNode(t)), this._$AH = t
            }
        }, {
            key: "$",
            value: function(t) {
                var e, n = t.values,
                    i = t._$litType$,
                    r = "number" == typeof i ? this._$AC(t) : (void 0 === i.el && (i.el = Qt.createElement(Bt(i.h, i.h[0]), this.options)), i);
                if ((null === (e = this._$AH) || void 0 === e ? void 0 : e._$AD) === r) this._$AH.p(n);
                else {
                    var o = new Ft(r, this),
                        a = o.u(this.options);
                    o.p(n), this.T(a), this._$AH = o
                }
            }
        }, {
            key: "_$AC",
            value: function(t) {
                var e = Gt.get(t.strings);
                return void 0 === e && Gt.set(t.strings, e = new Qt(t)), e
            }
        }, {
            key: "k",
            value: function(e) {
                Mt(this._$AH) || (this._$AH = [], this._$AR());
                var n, i, r = this._$AH,
                    o = 0,
                    a = q(e);
                try {
                    for (a.s(); !(i = a.n()).done;) {
                        var s = i.value;
                        o === r.length ? r.push(n = new t(this.O(St()), this.O(St()), this, this.options)) : n = r[o], n._$AI(s), o++
                    }
                } catch (t) {
                    a.e(t)
                } finally {
                    a.f()
                }
                o < r.length && (this._$AR(n && n._$AB.nextSibling, o), r.length = o)
            }
        }, {
            key: "_$AR",
            value: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._$AA.nextSibling,
                    e = arguments.length > 1 ? arguments[1] : void 0;
                for (null === (n = this._$AP) || void 0 === n || n.call(this, !1, !0, e); t && t !== this._$AB;) {
                    var n, i = t.nextSibling;
                    t.remove(), t = i
                }
            }
        }, {
            key: "setConnected",
            value: function(t) {
                var e;
                void 0 === this._$AM && (this._$Cv = t, null === (e = this._$AP) || void 0 === e || e.call(this, t))
            }
        }])
    }(),
    Kt = function() {
        return F((function t(e, n, i, r, o) {
            Q(this, t), this.type = 1, this._$AH = Dt, this._$AN = void 0, this.element = e, this.name = n, this._$AM = r, this.options = o, i.length > 2 || "" !== i[0] || "" !== i[1] ? (this._$AH = Array(i.length - 1).fill(new String), this.strings = i) : this._$AH = Dt
        }), [{
            key: "tagName",
            get: function() {
                return this.element.tagName
            }
        }, {
            key: "_$AU",
            get: function() {
                return this._$AM._$AU
            }
        }, {
            key: "_$AI",
            value: function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this,
                    n = arguments.length > 2 ? arguments[2] : void 0,
                    i = arguments.length > 3 ? arguments[3] : void 0,
                    r = this.strings,
                    o = !1;
                if (void 0 === r) t = Vt(this, t, e, 0), (o = !Ot(t) || t !== this._$AH && t !== It) && (this._$AH = t);
                else {
                    var a, s, l = t;
                    for (t = r[0], a = 0; a < r.length - 1; a++)(s = Vt(this, l[n + a], e, a)) === It && (s = this._$AH[a]), o || (o = !Ot(s) || s !== this._$AH[a]), s === Dt ? t = Dt : t !== Dt && (t += (null != s ? s : "") + r[a + 1]), this._$AH[a] = s
                }
                o && !i && this.j(t)
            }
        }, {
            key: "j",
            value: function(t) {
                t === Dt ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, null != t ? t : "")
            }
        }])
    }(),
    Yt = function() {
        function t() {
            var e;
            return Q(this, t), (e = R(this, t, arguments)).type = 3, e
        }
        return H(t, Kt), F(t, [{
            key: "j",
            value: function(t) {
                this.element[this.name] = t === Dt ? void 0 : t
            }
        }])
    }(),
    Zt = function() {
        function t() {
            var e;
            return Q(this, t), (e = R(this, t, arguments)).type = 4, e
        }
        return H(t, Kt), F(t, [{
            key: "j",
            value: function(t) {
                this.element.toggleAttribute(this.name, !!t && t !== Dt)
            }
        }])
    }(),
    Xt = function() {
        function t(e, n, i, r, o) {
            var a;
            return Q(this, t), (a = R(this, t, [e, n, i, r, o])).type = 5, a
        }
        return H(t, Kt), F(t, [{
            key: "_$AI",
            value: function(t) {
                var e;
                if ((t = null !== (e = Vt(this, t, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this, 0)) && void 0 !== e ? e : Dt) !== It) {
                    var n = this._$AH,
                        i = t === Dt && n !== Dt || t.capture !== n.capture || t.once !== n.once || t.passive !== n.passive,
                        r = t !== Dt && (n === Dt || i);
                    i && this.element.removeEventListener(this.name, this, n), r && this.element.addEventListener(this.name, this, t), this._$AH = t
                }
            }
        }, {
            key: "handleEvent",
            value: function(t) {
                var e, n;
                "function" == typeof this._$AH ? this._$AH.call(null !== (e = null === (n = this.options) || void 0 === n ? void 0 : n.host) && void 0 !== e ? e : this.element, t) : this._$AH.handleEvent(t)
            }
        }])
    }(),
    te = function() {
        return F((function t(e, n, i) {
            Q(this, t), this.element = e, this.type = 6, this._$AN = void 0, this._$AM = n, this.options = i
        }), [{
            key: "_$AU",
            get: function() {
                return this._$AM._$AU
            }
        }, {
            key: "_$AI",
            value: function(t) {
                Vt(this, t)
            }
        }])
    }(),
    ee = bt.litHtmlPolyfillSupport;
null != ee && ee(Qt, Jt), (null !== (i = bt.litHtmlVersions) && void 0 !== i ? i : bt.litHtmlVersions = []).push("3.3.0");
var ne = globalThis,
    ie = function() {
        function t() {
            var e;
            return Q(this, t), (e = R(this, t, arguments)).renderOptions = {
                host: N(e)
            }, e._$Do = void 0, e
        }
        return H(t, _t), F(t, [{
            key: "createRenderRoot",
            value: function() {
                var e, n, i = O(t, "createRenderRoot", this, 3)([]);
                return null !== (n = (e = this.renderOptions).renderBefore) && void 0 !== n || (e.renderBefore = i.firstChild), i
            }
        }, {
            key: "update",
            value: function(e) {
                var n = this.render();
                this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), O(t, "update", this, 3)([e]), this._$Do = function(t, e, n) {
                    var i, r = null !== (i = null == n ? void 0 : n.renderBefore) && void 0 !== i ? i : e,
                        o = r._$litPart$;
                    if (void 0 === o) {
                        var a, s = null !== (a = null == n ? void 0 : n.renderBefore) && void 0 !== a ? a : null;
                        r._$litPart$ = o = new Jt(e.insertBefore(St(), s), s, void 0, null != n ? n : {})
                    }
                    return o._$AI(t), o
                }(n, this.renderRoot, this.renderOptions)
            }
        }, {
            key: "connectedCallback",
            value: function() {
                var e;
                O(t, "connectedCallback", this, 3)([]), null === (e = this._$Do) || void 0 === e || e.setConnected(!0)
            }
        }, {
            key: "disconnectedCallback",
            value: function() {
                var e;
                O(t, "disconnectedCallback", this, 3)([]), null === (e = this._$Do) || void 0 === e || e.setConnected(!1)
            }
        }, {
            key: "render",
            value: function() {
                return It
            }
        }])
    }();
ie._$litElement$ = !0, ie.finalized = !0, null === (r = ne.litElementHydrateSupport) || void 0 === r || r.call(ne, {
    LitElement: ie
});
var re = ne.litElementPolyfillSupport;
null == re || re({
    LitElement: ie
}), (null !== (o = ne.litElementVersions) && void 0 !== o ? o : ne.litElementVersions = []).push("4.2.0");
var oe = {
        attribute: !0,
        type: String,
        converter: yt,
        reflect: !1,
        hasChanged: gt
    },
    ae = function() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : oe,
            e = arguments.length > 1 ? arguments[1] : void 0,
            n = arguments.length > 2 ? arguments[2] : void 0,
            i = n.kind,
            r = n.metadata,
            o = globalThis.litPropertyMetadata.get(r);
        if (void 0 === o && globalThis.litPropertyMetadata.set(r, o = new Map), "setter" === i && ((t = Object.create(t)).wrapped = !0), o.set(n.name, t), "accessor" === i) {
            var a = n.name;
            return {
                set: function(n) {
                    var i = e.get.call(this);
                    e.set.call(this, n), this.requestUpdate(a, i, t)
                },
                init: function(e) {
                    return void 0 !== e && this.C(a, void 0, t, e), e
                }
            }
        }
        if ("setter" === i) {
            var s = n.name;
            return function(n) {
                var i = this[s];
                e.call(this, n), this.requestUpdate(s, i, t)
            }
        }
        throw Error("Unsupported decorator location: " + i)
    };

function se(t) {
    return function(e, n) {
        return "object" == K(n) ? ae(t, e, n) : function(t, e, n) {
            var i = e.hasOwnProperty(n);
            return e.constructor.createProperty(n, t), i ? Object.getOwnPropertyDescriptor(e, n) : void 0
        }(t, e, n)
    }
}

function le(t) {
    return se(A(A({}, t), {}, {
        state: !0,
        attribute: !1
    }))
}
var ue = function() {
    function t() {
        var e;
        return Q(this, t), (e = R(this, t, arguments)).cards = [], e._editMode = !1, e._editorLoaded = !1, e
    }
    return H(t, ie), F(t, [{
        key: "setConfig",
        value: (n = L(T().mark((function t(e) {
            return T().wrap((function(t) {
                for (;;) switch (t.prev = t.next) {
                    case 0:
                        this._config = Object.assign({}, e), this._config.view_layout && void 0 === this._config.layout && (this._config.layout = this._config.view_layout);
                    case 2:
                    case "end":
                        return t.stop()
                }
            }), t, this)
        }))), function(t) {
            return n.apply(this, arguments)
        })
    }, {
        key: "updated",
        value: (e = L(T().mark((function t(e) {
            var n, i, r, o, a, s, l = this;
            return T().wrap((function(t) {
                for (;;) switch (t.prev = t.next) {
                    case 0:
                        e.has("lovelace") && (null === (n = this.lovelace) || void 0 === n ? void 0 : n.editMode) != (null === (i = e.get("lovelace")) || void 0 === i ? void 0 : i.editMode) && ((null === (r = this.lovelace) || void 0 === r ? void 0 : r.editMode) && !this._editorLoaded && (this._editorLoaded = !0, (s = document.createElement("hui-masonry-view")).lovelace = {
                            editMode: !0
                        }, s.willUpdate(new Map)), this.cards.forEach((function(t) {
                            var e;
                            return t.editMode = null === (e = l.lovelace) || void 0 === e ? void 0 : e.editMode
                        })), this._editMode = null !== (a = null === (o = this.lovelace) || void 0 === o ? void 0 : o.editMode) && void 0 !== a && a);
                    case 1:
                    case "end":
                        return t.stop()
                }
            }), t, this)
        }))), function(t) {
            return e.apply(this, arguments)
        })
    }, {
        key: "_shouldShow",
        value: function(t, e, n) {
            var i, r, o, a, s, l, u, c;
            return "always" === (null === (i = e.view_layout) || void 0 === i ? void 0 : i.show) || "never" !== (null === (r = e.view_layout) || void 0 === r ? void 0 : r.show) && (("shown" !== (null === (a = null === (o = e.view_layout) || void 0 === o ? void 0 : o.show) || void 0 === a ? void 0 : a.sidebar) || "auto" !== (null === (s = this.hass) || void 0 === s ? void 0 : s.dockedSidebar) && !this.narrow) && !("hidden" === (null === (u = null === (l = e.view_layout) || void 0 === l ? void 0 : l.show) || void 0 === u ? void 0 : u.sidebar) && "docked" === (null === (c = this.hass) || void 0 === c ? void 0 : c.dockedSidebar) && !this.narrow))
        }
    }, {
        key: "getCardElement",
        value: function(t) {
            var e;
            if (!(null === (e = this.lovelace) || void 0 === e ? void 0 : e.editMode)) return t.card;
            var n = document.createElement("hui-card-options");
            return n.hass = this.hass, n.lovelace = this.lovelace, n.path = [this.index, t.index], t.card.editMode = !0, n.appendChild(t.card), !1 === t.show && (n.style.border = "1px solid red"), n
        }
    }, {
        key: "_addCard",
        value: function() {
            this.dispatchEvent(new CustomEvent("ll-create-card"))
        }
    }, {
        key: "_render_fab",
        value: function() {
            var t;
            return !0 == !(null === (t = this.lovelace) || void 0 === t ? void 0 : t.editMode) ? zt(a || (a = $([""]))) : zt(s || (s = $(["\n      <ha-fab .label=", " extended @click=", '>\n        <ha-icon slot="icon" .icon=', "></ha-icon>\n      </ha-fab>\n    "])), "Add card", this._addCard, "mdi:plus")
        }
    }], [{
        key: "_fab_styles",
        get: function() {
            return it(l || (l = $(["\n      ha-fab {\n        position: fixed;\n        right: calc(16px + env(safe-area-inset-right));\n        bottom: calc(16px + env(safe-area-inset-bottom));\n        z-index: 1;\n      }\n    "])))
        }
    }]);
    var e, n
}();
Y([se()], ue.prototype, "cards", void 0), Y([se()], ue.prototype, "index", void 0), Y([se()], ue.prototype, "narrow", void 0), Y([se()], ue.prototype, "hass", void 0), Y([se()], ue.prototype, "lovelace", void 0), Y([se()], ue.prototype, "_editMode", void 0), Y([se()], ue.prototype, "_config", void 0);
var ce = function() {
    function t() {
        var e;
        return Q(this, t), (e = R(this, t, arguments))._mediaQueries = [], e
    }
    return H(t, ue), F(t, [{
        key: "setConfig",
        value: (s = L(T().mark((function e(n) {
            var i, r, o, a, s, l, u, c, d = this;
            return T().wrap((function(e) {
                for (;;) switch (e.prev = e.next) {
                    case 0:
                        return e.next = 2, O(t, "setConfig", this, 3)([n]);
                    case 2:
                        s = q(this._config.cards);
                        try {
                            for (s.s(); !(l = s.n()).done;) u = l.value, "string" != typeof(null === (i = u.view_layout) || void 0 === i ? void 0 : i.show) && (null === (o = null === (r = u.view_layout) || void 0 === r ? void 0 : r.show) || void 0 === o ? void 0 : o.mediaquery) ? (c = window.matchMedia("".concat(u.view_layout.show.mediaquery)), this._mediaQueries.push(c), c.addEventListener("change", (function() {
                                return d._makeLayout()
                            }))) : this._mediaQueries.push(null)
                        } catch (t) {
                            s.e(t)
                        } finally {
                            s.f()
                        }
                        this._observer && this._observer.disconnect(), this._observer = new ResizeObserver((function() {
                            d._updateSize()
                        })), this._cardObserver && this._cardObserver.disconnect(), (null === (a = n.layout) || void 0 === a ? void 0 : a.reflow) && (this._cardObserver = new MutationObserver((function(t) {
                            var e, n = q(t);
                            try {
                                for (n.s(); !(e = n.n()).done;) {
                                    var i = e.value;
                                    "attributes" !== i.type || "style" !== i.attributeName && "hidden" !== i.attributeName || d._makeLayout()
                                }
                            } catch (t) {
                                n.e(t)
                            } finally {
                                n.f()
                            }
                        })));
                    case 8:
                    case "end":
                        return e.stop()
                }
            }), e, this)
        }))), function(t) {
            return s.apply(this, arguments)
        })
    }, {
        key: "updated",
        value: (a = L(T().mark((function e(n) {
            var i;
            return T().wrap((function(e) {
                for (;;) switch (e.prev = e.next) {
                    case 0:
                        return e.next = 2, O(t, "updated", this, 3)([n]);
                    case 2:
                        (n.has("_columns") || n.has("cards")) && this._makeLayout(), n.has("_editMode") && this._makeLayout(), (n.has("narrow") || n.has("hass") && (null === (i = n.get("hass")) || void 0 === i ? void 0 : i.dockedSidebar) != this.hass.dockedSidebar) && (this._updateSize(), this._makeLayout());
                    case 5:
                    case "end":
                        return e.stop()
                }
            }), e, this)
        }))), function(t) {
            return a.apply(this, arguments)
        })
    }, {
        key: "firstUpdated",
        value: (o = L(T().mark((function t() {
            var e, n, i, r, o, a, s, l, u, c, d, h, v, f, p, y, g, m, _, b;
            return T().wrap((function(t) {
                for (;;) switch (t.prev = t.next) {
                    case 0:
                        this._updateSize(), g = (null === (e = this._config.layout) || void 0 === e ? void 0 : e.width) || 300, m = (null === (n = this._config.layout) || void 0 === n ? void 0 : n.max_width) || ((null === (i = this._config.layout) || void 0 === i ? void 0 : i.width) ? Math.ceil(1.5 * (null === (r = this._config.layout) || void 0 === r ? void 0 : r.width)) : 500), _ = (null === (o = this._config.layout) || void 0 === o ? void 0 : o.width) ? 2 * this._config.layout.width : 600, (b = document.createElement("style")).innerHTML = "\n      :host {\n        --column-max-width: ".concat(m, "px;\n        --column-width: ").concat(g, "px;\n        --column-widths: ").concat(null !== (s = null === (a = this._config.layout) || void 0 === a ? void 0 : a.column_widths) && void 0 !== s ? s : "none", ";\n        --layout-margin: ").concat(null !== (u = null === (l = this._config.layout) || void 0 === l ? void 0 : l.margin) && void 0 !== u ? u : "0px 4px 0px 4px", ";\n        --layout-padding: ").concat(null !== (d = null === (c = this._config.layout) || void 0 === c ? void 0 : c.padding) && void 0 !== d ? d : "4px 0px 4px 0px", ";\n        --card-margin: ").concat(null !== (v = null === (h = this._config.layout) || void 0 === h ? void 0 : h.card_margin) && void 0 !== v ? v : "var(--masonry-view-card-margin, 4px 4px 8px)", ";\n        --layout-height: ").concat(null !== (p = null === (f = this._config.layout) || void 0 === f ? void 0 : f.height) && void 0 !== p ? p : "auto", ";\n        --layout-overflow: ").concat(void 0 !== (null === (y = this._config.layout) || void 0 === y ? void 0 : y.height) ? "auto" : "visible", ";\n      }\n      @media (max-width: ").concat(m, "px) {\n        .column:first-child > * {\n          margin-left: 0;\n        }\n        .column:last-child > * {\n          margin-right: 0;\n        }\n      }\n      @media (max-width: ").concat(_ - 1, "px) {\n        .column {\n          --column-max-width: ").concat(_, "px;\n        }\n      }\n    "), this.shadowRoot.appendChild(b);
                    case 7:
                    case "end":
                        return t.stop()
                }
            }), t, this)
        }))), function() {
            return o.apply(this, arguments)
        })
    }, {
        key: "connectedCallback",
        value: function() {
            O(t, "connectedCallback", this, 3)([]), this._updateSize()
        }
    }, {
        key: "disconnectedCallback",
        value: function() {
            O(t, "disconnectedCallback", this, 3)([]), this._observer.disconnect()
        }
    }, {
        key: "_updateSize",
        value: (r = L(T().mark((function t() {
            var e, n, i, r, o;
            return T().wrap((function(t) {
                for (;;) switch (t.prev = t.next) {
                    case 0:
                        r = this.getBoundingClientRect().width, o = 0, o = Math.floor(r / ((null === (e = this._config.layout) || void 0 === e ? void 0 : e.width) || 300)), o = Math.min(o, (null === (n = this._config.layout) || void 0 === n ? void 0 : n.max_cols) || ("docked" === (null === (i = this.hass) || void 0 === i ? void 0 : i.dockedSidebar) ? 3 : 4)), (o = Math.max(o, 1)) !== this._columns && (this._columns = o);
                    case 6:
                    case "end":
                        return t.stop()
                }
            }), t, this)
        }))), function() {
            return r.apply(this, arguments)
        })
    }, {
        key: "_shouldShow",
        value: function(e, n, i) {
            var r;
            if (!O(t, "_shouldShow", this, 3)([e, n, i])) return !1;
            if (null === (r = this._config.layout) || void 0 === r ? void 0 : r.reflow) {
                if ("none" === getComputedStyle(e).display) return !1;
                if (!0 === e.hidden) return !1
            }
            var o = this._mediaQueries[i];
            return !o || !!o.matches
        }
    }, {
        key: "isBreak",
        value: function(t) {
            return "custom:layout-break" === t.type
        }
    }, {
        key: "_makeLayout",
        value: (i = L(T().mark((function t() {
            return T().wrap((function(t) {
                for (;;) switch (t.prev = t.next) {
                    case 0:
                        this._makeColumnLayout();
                    case 1:
                    case "end":
                        return t.stop()
                }
            }), t, this)
        }))), function() {
            return i.apply(this, arguments)
        })
    }, {
        key: "_makeColumnLayout",
        value: (n = L(T().mark((function t() {
            var e, n, i, r, o, a, s, l, u, c, d, h, v = this;
            return T().wrap((function(t) {
                for (;;) switch (t.prev = t.next) {
                    case 0:
                        if (this._observer.disconnect(), this._cardObserver && this._cardObserver.disconnect(), this._columns) {
                            t.next = 4;
                            break
                        }
                        return t.abrupt("return");
                    case 4:
                        for (n = [], i = 0; i < this._columns; i++)(r = document.createElement("div")).classList.add("column"), r.length = 0, n.push(r);
                        return o = this.cards.map((function(t, e) {
                            var n = v._config.cards[e];
                            return {
                                card: t,
                                config: n,
                                index: e,
                                show: v._shouldShow(t, n, e)
                            }
                        })), t.next = 9, this._placeColumnCards(n, o.filter((function(t) {
                            var e;
                            return (null === (e = v.lovelace) || void 0 === e ? void 0 : e.editMode) || t.show
                        })));
                    case 9:
                        for (n = n.filter((function(t) {
                                return t.childElementCount > 0
                            })), (null === (e = this._config.layout) || void 0 === e ? void 0 : e.rtl) && n.reverse(), a = this.shadowRoot.querySelector("#columns"); a.firstChild;) a.removeChild(a.firstChild);
                        if (this._cardObserver) {
                            s = q(this.cards);
                            try {
                                for (s.s(); !(l = s.n()).done;) u = l.value, this._cardObserver.observe(u, {
                                    attributes: !0
                                })
                            } catch (t) {
                                s.e(t)
                            } finally {
                                s.f()
                            }
                        }
                        c = q(n);
                        try {
                            for (c.s(); !(d = c.n()).done;) h = d.value, a.appendChild(h)
                        } catch (t) {
                            c.e(t)
                        } finally {
                            c.f()
                        }
                        return this.requestUpdate(), t.next = 19, this.updateComplete;
                    case 19:
                        this._observer.observe(this);
                    case 20:
                    case "end":
                        return t.stop()
                }
            }), t, this)
        }))), function() {
            return n.apply(this, arguments)
        })
    }, {
        key: "_placeColumnCards",
        value: (e = L(T().mark((function t(e, n) {
            return T().wrap((function(t) {
                for (;;) switch (t.prev = t.next) {
                    case 0:
                    case "end":
                        return t.stop()
                }
            }), t)
        }))), function(t, n) {
            return e.apply(this, arguments)
        })
    }, {
        key: "render",
        value: function() {
            return zt(u || (u = $(['\n      <div id="columns"></div>\n      ', "\n    "])), this._render_fab())
        }
    }], [{
        key: "styles",
        get: function() {
            return [this._fab_styles, it(c || (c = $(["\n        :host {\n          display: block;\n          height: 100%;\n          box-sizing: border-box;\n          overflow-y: var(--layout-overflow);\n        }\n\n        #columns {\n          display: grid;\n          grid-auto-columns: minmax(\n            var(--column-width),\n            var(--column-max-width)\n          );\n          grid-template-columns: var(--column-widths);\n          justify-content: center;\n          justify-items: center;\n          margin: var(--layout-margin);\n          padding: var(--layout-padding);\n          height: var(--layout-height);\n          overflow-y: var(--layout-overflow);\n        }\n        .column {\n          grid-row: 1/2;\n          max-width: var(--column-max-width);\n          width: 100%;\n        }\n        .column > * {\n          display: block;\n          margin: var(--card-margin);\n        }\n      "])))]
        }
    }]);
    var e, n, i, r, o, a, s
}();
Y([se()], ce.prototype, "_columns", void 0), Y([se()], ce.prototype, "_config", void 0);
var de = function() {
    function t() {
        return Q(this, t), R(this, t, arguments)
    }
    return H(t, ce), F(t, [{
        key: "_placeColumnCards",
        value: (e = L(T().mark((function t(e, n) {
            var i, r, o, a, s, l, u;
            return T().wrap((function(t) {
                for (;;) switch (t.prev = t.next) {
                    case 0:
                        o = function() {
                            for (var t = 0, n = 0; n < e.length; n++) {
                                if (e[n].length && e[n].length < r) return e[n];
                                e[n].length < e[t].length && (t = n)
                            }
                            return e[t]
                        }, r = (null === (i = this._config.layout) || void 0 === i ? void 0 : i.min_height) || 5, a = q(n), t.prev = 3, a.s();
                    case 5:
                        if ((s = a.n()).done) {
                            t.next = 20;
                            break
                        }
                        if (l = s.value, (u = o()).appendChild(this.getCardElement(l)), t.t0 = u.length, !l.card.getCardSize) {
                            t.next = 16;
                            break
                        }
                        return t.next = 13, Promise.race([l.card.getCardSize(), new Promise((function(t) {
                            return setTimeout((function() {
                                return t(1)
                            }), 500)
                        }))]);
                    case 13:
                        t.t1 = t.sent, t.next = 17;
                        break;
                    case 16:
                        t.t1 = 1;
                    case 17:
                        u.length = t.t0 += t.t1;
                    case 18:
                        t.next = 5;
                        break;
                    case 20:
                        t.next = 25;
                        break;
                    case 22:
                        t.prev = 22, t.t2 = t.catch(3), a.e(t.t2);
                    case 25:
                        return t.prev = 25, a.f(), t.finish(25);
                    case 28:
                    case "end":
                        return t.stop()
                }
            }), t, this, [
                [3, 22, 25, 28]
            ])
        }))), function(t, n) {
            return e.apply(this, arguments)
        })
    }]);
    var e
}();
customElements.define("masonry-layout", de);
var he = function() {
    function t() {
        return Q(this, t), R(this, t, arguments)
    }
    return H(t, ce), F(t, [{
        key: "_placeColumnCards",
        value: (e = L(T().mark((function t(e, n) {
            var i, r, o, a, s, l, u;
            return T().wrap((function(t) {
                for (;;) switch (t.prev = t.next) {
                    case 0:
                        o = 0, a = q(n);
                        try {
                            for (a.s(); !(s = a.n()).done;) l = s.value, o += 1, (null === (i = l.config.view_layout) || void 0 === i ? void 0 : i.column) && (o = l.config.view_layout.column), (u = e[(o - 1) % e.length]).appendChild(this.getCardElement(l)), this.isBreak(l.config) && (o = 0, (null === (r = this.lovelace) || void 0 === r ? void 0 : r.editMode) || u.removeChild(l.card))
                        } catch (t) {
                            a.e(t)
                        } finally {
                            a.f()
                        }
                    case 3:
                    case "end":
                        return t.stop()
                }
            }), t, this)
        }))), function(t, n) {
            return e.apply(this, arguments)
        })
    }]);
    var e
}();
customElements.define("horizontal-layout", he);
var ve = function() {
    function t() {
        return Q(this, t), R(this, t, arguments)
    }
    return H(t, ce), F(t, [{
        key: "_placeColumnCards",
        value: (e = L(T().mark((function t(e, n) {
            var i, r, o, a, s;
            return T().wrap((function(t) {
                for (;;) switch (t.prev = t.next) {
                    case 0:
                        r = 1, o = q(n);
                        try {
                            for (o.s(); !(a = o.n()).done;) s = a.value, (null === (i = s.config.view_layout) || void 0 === i ? void 0 : i.column) && (r = s.config.view_layout.column), e[(r - 1) % e.length].appendChild(this.getCardElement(s)), this.isBreak(s.config) && (r += 1)
                        } catch (t) {
                            o.e(t)
                        } finally {
                            o.f()
                        }
                    case 3:
                    case "end":
                        return t.stop()
                }
            }), t, this)
        }))), function(t, n) {
            return e.apply(this, arguments)
        })
    }]);
    var e
}();
customElements.define("vertical-layout", ve);
var fe = function() {
    function t() {
        return Q(this, t), R(this, t, arguments)
    }
    return H(t, z(HTMLElement)), F(t, [{
        key: "setConfig",
        value: function() {
            this.style.display = "none";
            var t = document.createElement("ha-card");
            t.innerHTML = "BREAK", t.style.cssText = "\n      background: red;\n      text-align: center;\n      font-size: large;\n      color: white;\n      padding: 16px;\n      ", this.appendChild(t)
        }
    }, {
        key: "getCardSize",
        value: function() {
            return 0
        }
    }, {
        key: "editMode",
        set: function(t) {
            this.style.display = t ? "block" : "none"
        }
    }], [{
        key: "getConfigElement",
        value: function() {
            return document.createElement("layout-break-editor")
        }
    }, {
        key: "getStubConfig",
        value: function() {
            return {}
        }
    }])
}();
customElements.define("layout-break", fe), window.customCards = window.customCards || [], window.customCards.push({
    type: "layout-break",
    name: "Layout Break",
    preview: !1,
    description: "Forces a break in the layout flow. For use with layout-card or special layouts."
});
var pe = function() {
    function t() {
        return Q(this, t), R(this, t, arguments)
    }
    return H(t, z(HTMLElement)), F(t, [{
        key: "setConfig",
        value: function(t) {
            var e = document.createElement("div");
            e.innerHTML = "BREAK", this.appendChild(e)
        }
    }])
}();
customElements.define("layout-break-editor", pe);
var ye = function() {
    function t() {
        var e;
        return Q(this, t), (e = R(this, t, arguments))._mediaQueries = [], e._layoutMQs = [], e
    }
    return H(t, ue), F(t, [{
        key: "setConfig",
        value: (i = L(T().mark((function e(n) {
            var i, r, o, a, s, l, u, c, d, h, v, f, p, y, g = this;
            return T().wrap((function(e) {
                for (;;) switch (e.prev = e.next) {
                    case 0:
                        return e.next = 2, O(t, "setConfig", this, 3)([n]);
                    case 2:
                        l = q(this._config.cards);
                        try {
                            for (l.s(); !(u = l.n()).done;) c = u.value, "string" != typeof(null === (i = c.view_layout) || void 0 === i ? void 0 : i.show) && (null === (o = null === (r = c.view_layout) || void 0 === r ? void 0 : r.show) || void 0 === o ? void 0 : o.mediaquery) ? (d = window.matchMedia("".concat(c.view_layout.show.mediaquery)), this._mediaQueries.push(d), d.addEventListener("change", (function() {
                                return g._placeCards()
                            }))) : this._mediaQueries.push(null)
                        } catch (t) {
                            l.e(t)
                        } finally {
                            l.f()
                        }
                        if (null === (a = this._config.layout) || void 0 === a ? void 0 : a.mediaquery)
                            for (h = 0, v = Object.entries(null === (s = this._config.layout) || void 0 === s ? void 0 : s.mediaquery); h < v.length; h++) f = P(v[h], 2), p = f[0], f[1], y = window.matchMedia(p), this._layoutMQs.push(y), y.addEventListener("change", (function() {
                                return g._setGridStyles()
                            }));
                        this._setGridStyles();
                    case 6:
                    case "end":
                        return e.stop()
                }
            }), e, this)
        }))), function(t) {
            return i.apply(this, arguments)
        })
    }, {
        key: "updated",
        value: (n = L(T().mark((function e(n) {
            return T().wrap((function(e) {
                for (;;) switch (e.prev = e.next) {
                    case 0:
                        return e.next = 2, O(t, "updated", this, 3)([n]);
                    case 2:
                        (n.has("cards") || n.has("_editMode")) && this._placeCards();
                    case 3:
                    case "end":
                        return e.stop()
                }
            }), e, this)
        }))), function(t) {
            return n.apply(this, arguments)
        })
    }, {
        key: "firstUpdated",
        value: (e = L(T().mark((function t() {
            var e, n, i, r, o, a, s, l;
            return T().wrap((function(t) {
                for (;;) switch (t.prev = t.next) {
                    case 0:
                        this._setGridStyles(), (l = document.createElement("style")).innerHTML = "\n      :host {\n        --layout-margin: ".concat(null !== (n = null === (e = this._config.layout) || void 0 === e ? void 0 : e.margin) && void 0 !== n ? n : "0px 4px 0px 4px", ";\n        --layout-padding: ").concat(null !== (r = null === (i = this._config.layout) || void 0 === i ? void 0 : i.padding) && void 0 !== r ? r : "4px 0px 4px 0px", ";\n        --layout-height: ").concat(null !== (a = null === (o = this._config.layout) || void 0 === o ? void 0 : o.height) && void 0 !== a ? a : "auto", ";\n        --layout-overflow: ").concat(void 0 !== (null === (s = this._config.layout) || void 0 === s ? void 0 : s.height) ? "auto" : "visible", ";\n      }"), this.shadowRoot.appendChild(l);
                    case 4:
                    case "end":
                        return t.stop()
                }
            }), t, this)
        }))), function() {
            return e.apply(this, arguments)
        })
    }, {
        key: "_setGridStyles",
        value: function() {
            var t, e = null === (t = this.shadowRoot) || void 0 === t ? void 0 : t.querySelector("#root");
            if (e) {
                var n = function(t) {
                    for (var n = 0, i = Object.entries(t); n < i.length; n++) {
                        var r = P(i[n], 2),
                            o = r[0],
                            a = r[1];
                        (o.startsWith("grid") || "grid" === o || "place-items" === o || "place-content" === o || "width"=== o|| "scroll-snap-type" === o|| "inset" === o || "position" === o|| "background" === o|| "padding" === o|| "backdrop-filter" === o|| "display" === o|| "height" === o|| "margin" === o|| "overflow-y" === o) && e.style.setProperty(o, a)
                    }
                };
                e.style.cssText = "", this._config.layout && n(this._config.layout);
                var i, r = q(this._layoutMQs);
                try {
                    for (r.s(); !(i = r.n()).done;) {
                        var o = i.value;
                        if (o.matches) {
                            n(this._config.layout.mediaquery[o.media]);
                            break
                        }
                    }
                } catch (t) {
                    r.e(t)
                } finally {
                    r.f()
                }
            }
        }
    }, {
        key: "_shouldShow",
        value: function(e, n, i) {
            if (!O(t, "_shouldShow", this, 3)([e, n, i])) return !1;
            var r = this._mediaQueries[i];
            return !r || !!r.matches
        }
    }, {
        key: "_placeCards",
        value: function() {
            for (var t, e, n = this, i = this.shadowRoot.querySelector("#root"); i.firstChild;) i.removeChild(i.firstChild);
            var r, o = this.cards.map((function(t, e) {
                    var i = n._config.cards[e];
                    return {
                        card: t,
                        config: i,
                        index: e,
                        show: n._shouldShow(t, i, e)
                    }
                })),
                a = q(o.filter((function(t) {
                    var e;
                    return (null === (e = n.lovelace) || void 0 === e ? void 0 : e.editMode) || t.show
                })));
            try {
                for (a.s(); !(r = a.n()).done;) {
                    for (var s = r.value, l = this.getCardElement(s), u = 0, c = Object.entries(null !== (e = null === (t = s.config) || void 0 === t ? void 0 : t.view_layout) && void 0 !== e ? e : {}); u < c.length; u++) {
                        var d = P(c[u], 2),
                            h = d[0],
                            v = d[1];
                        (h.startsWith("grid") || "place-self" === h) && l.style.setProperty(h, v)
                    }
                    i.appendChild(l)
                }
            } catch (t) {
                a.e(t)
            } finally {
                a.f()
            }
        }
    }, {
        key: "render",
        value: function() {
            return zt(d || (d = $([' <div id="root"></div>\n      ', ""])), this._render_fab())
        }
    }], [{
        key: "styles",
        get: function() {
            return [this._fab_styles, it(h || (h = $(["\n        :host {\n          height: 100%;\n          box-sizing: border-box;\n        }\n        #root {\n          display: grid;\n          justify-content: stretch;\n          margin: var(--layout-margin);\n          padding: var(--layout-padding);\n          height: var(--layout-height);\n          overflow-y: var(--layout-overflow);\n        }\n        #root > * {\n          margin: var(--masonry-view-card-margin, 4px 4px 8px);\n        }\n      "])))]
        }
    }]);
    var e, n, i
}();
customElements.define("grid-layout", ye);
var ge = function() {
    function t() {
        var e;
        return Q(this, t), (e = R(this, t, arguments)).editMode = !1, e.isPanel = !1, e._cards = [], e
    }
    return H(t, ie), F(t, [{
        key: "setConfig",
        value: function(t) {
            this._config = Object.assign({}, t), this._config.entities && (this._config.cards = this._config.entities.map((function(t) {
                return t.type ? t : Object.assign(Object.assign({}, t), {
                    type: "entity"
                })
            })));
            var e = t.layout_type;
            e ? ((null == e ? void 0 : e.endsWith("-layout")) || (e += "-layout"), e.startsWith("custom:") && (e = e.substring(7))) : e = "hui-masonry-view", this._layoutType = e
        }
    }, {
        key: "updated",
        value: (i = L(T().mark((function e(n) {
            var i, r, o, a = this;
            return T().wrap((function(e) {
                for (;;) switch (e.prev = e.next) {
                    case 0:
                        if (O(t, "updated", this, 3)([n]), !n.has("_layoutType") && !n.has("_config")) {
                            e.next = 12;
                            break
                        }
                        return r = {
                            type: this._layoutType,
                            layout: this._config.layout || this._config.layout_options,
                            cards: this._config.cards
                        }, o = document.createElement(this._layoutType), null === (i = o.setConfig) || void 0 === i || i.call(o, r), this._layoutElement = o, e.next = 8, this._createCards();
                    case 8:
                        this._layoutElement.hass = this.hass, this._layoutElement.narrow = !1, this._layoutElement.lovelace = Object.assign(Object.assign({}, this._getLovelace()), {
                            editMode: !1
                        }), this._layoutElement.index = 1;
                    case 12:
                        n.has("hass") && (this._cards.forEach((function(t) {
                            t.hass = a.hass
                        })), this._layoutElement && (this._layoutElement.hass = this.hass)), n.has("_cards") && this._layoutElement && (this._layoutElement.cards = this._cards), n.has("editMode") && this._layoutElement && (this._layoutElement.lovelace = Object.assign(Object.assign({}, this._getLovelace()), {
                            editMode: !1
                        }));
                    case 15:
                    case "end":
                        return e.stop()
                }
            }), e, this)
        }))), function(t) {
            return i.apply(this, arguments)
        })
    }, {
        key: "_getLovelace",
        value: function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this;
            return t.lovelace ? t.lovelace : "home-assistant" !== t.localName ? t.parentElement && t.parentElement.host ? this._getLovelace(t.parentElement.host) : t.parentNode && t.parentNode.host ? this._getLovelace(t.parentNode.host) : t.parentElement ? this._getLovelace(t.parentElement) : t.parentNode ? this._getLovelace(t.parentNode) : void 0 : void 0
        }
    }, {
        key: "_createCard",
        value: function(t, e) {
            var n = this,
                i = e.createCardElement(t);
            return i.addEventListener("ll-rebuild", (function(e) {
                e.stopPropagation(), n._rebuildCard(i, t)
            })), i.hass = this.hass, i
        }
    }, {
        key: "_createCards",
        value: (n = L(T().mark((function t() {
            var e, n = this;
            return T().wrap((function(t) {
                for (;;) switch (t.prev = t.next) {
                    case 0:
                        return t.next = 2, window.loadCardHelpers();
                    case 2:
                        e = t.sent, this._cards = this._config.cards.map((function(t) {
                            return n._createCard(t, e)
                        }));
                    case 4:
                    case "end":
                        return t.stop()
                }
            }), t, this)
        }))), function() {
            return n.apply(this, arguments)
        })
    }, {
        key: "_rebuildCard",
        value: (e = L(T().mark((function t(e, n) {
            var i, r;
            return T().wrap((function(t) {
                for (;;) switch (t.prev = t.next) {
                    case 0:
                        return t.next = 2, window.loadCardHelpers();
                    case 2:
                        i = t.sent, r = this._createCard(n, i), e.parentElement && e.parentElement.replaceChild(r, e), this._cards = this._cards.map((function(t) {
                            return t === e ? r : t
                        }));
                    case 6:
                    case "end":
                        return t.stop()
                }
            }), t, this)
        }))), function(t, n) {
            return e.apply(this, arguments)
        })
    }, {
        key: "render",
        value: function() {
            return zt(v || (v = $(["", ""])), this._layoutElement)
        }
    }], [{
        key: "styles",
        get: function() {
            return it(f || (f = $(["\n      :host(:not(:first-child)) {\n        margin-top: 0 !important;\n      }\n      :host(:not(:last-child)) {\n        margin-bottom: 0 !important;\n      }\n    "])))
        }
    }, {
        key: "getConfigElement",
        value: function() {
            return document.createElement("layout-card-editor")
        }
    }, {
        key: "getStubConfig",
        value: function() {
            return {
                layout_type: "masonry",
                layout: {},
                cards: []
            }
        }
    }]);
    var e, n, i
}();
Y([se()], ge.prototype, "hass", void 0), Y([se()], ge.prototype, "editMode", void 0), Y([se()], ge.prototype, "isPanel", void 0), Y([se()], ge.prototype, "_config", void 0), Y([se()], ge.prototype, "_cards", void 0), Y([se()], ge.prototype, "_layoutElement", void 0), Y([se()], ge.prototype, "_layoutType", void 0), customElements.define("layout-card", ge), window.customCards = window.customCards || [], window.customCards.push({
    type: "layout-card",
    name: "Layout Card",
    preview: !1,
    description: "Like a stack card, but with way more control."
});
var me = function() {
        var t = L(T().mark((function t() {
            var e, n, i, r;
            return T().wrap((function(t) {
                for (;;) switch (t.prev = t.next) {
                    case 0:
                        if (!customElements.get("ha-form")) {
                            t.next = 2;
                            break
                        }
                        return t.abrupt("return");
                    case 2:
                        return t.next = 4, null === (n = (e = window).loadCardHelpers) || void 0 === n ? void 0 : n.call(e);
                    case 4:
                        if (i = t.sent) {
                            t.next = 7;
                            break
                        }
                        return t.abrupt("return");
                    case 7:
                        return t.next = 9, i.createCardElement({
                            type: "entity"
                        });
                    case 9:
                        if (r = t.sent) {
                            t.next = 12;
                            break
                        }
                        return t.abrupt("return");
                    case 12:
                        return t.next = 14, r.getConfigElement();
                    case 14:
                    case "end":
                        return t.stop()
                }
            }), t)
        })));
        return function() {
            return t.apply(this, arguments)
        }
    }(),
    _e = [{
        value: "custom:masonry-layout",
        label: "Masonry (layout-card)"
    }, {
        value: "custom:horizontal-layout",
        label: "Horizontal (layout-card)"
    }, {
        value: "custom:vertical-layout",
        label: "Vertical (layout-card)"
    }, {
        value: "custom:grid-layout",
        label: "Grid (layout-card)"
    }],
    be = ["masonry", "sidebar", "panel"],
    we = function() {
        function t() {
            var e;
            return Q(this, t), (e = R(this, t, arguments))._selectedTab = 0, e._selectedCard = 0, e._cardGUIMode = !0, e._cardGUIModeAvailable = !0, e._schema = function(t) {
                return [{
                    name: "layout_type",
                    selector: {
                        select: {
                            options: [].concat(j(be.map((function(e) {
                                return {
                                    value: e,
                                    label: t("ui.panel.lovelace.editor.edit_view.types.".concat(e))
                                }
                            }))), _e)
                        }
                    }
                }, {
                    name: "layout",
                    selector: {
                        object: {}
                    }
                }]
            }, e
        }
        return H(t, ie), F(t, [{
            key: "setConfig",
            value: function(t) {
                this._config = t
            }
        }, {
            key: "firstUpdated",
            value: function() {
                me()
            }
        }, {
            key: "_handleSwitchTab",
            value: function(t) {
                t.stopPropagation(), this._selectedTab = parseInt(t.detail.name, 10)
            }
        }, {
            key: "_editCard",
            value: function(t) {
                t.stopPropagation(), "add-card" !== t.detail.name ? (this._cardGUIMode = !0, this._cardEditorEl && (this._cardEditorEl.GUImode = !0), this._cardGUIModeAvailable = !0, this._selectedCard = parseInt(t.detail.name, 10)) : this._selectedCard = this._config.cards.length
            }
        }, {
            key: "_addCard",
            value: function(t) {
                t.stopPropagation();
                var e = j(this._config.cards);
                e.push(t.detail.config), this._config = Object.assign(Object.assign({}, this._config), {
                    cards: e
                }), this._selectedCard = this._config.cards.length - 1, this.dispatchEvent(new CustomEvent("config-changed", {
                    detail: {
                        config: this._config
                    }
                }))
            }
        }, {
            key: "_updateCard",
            value: function(t) {
                t.stopPropagation();
                var e = j(this._config.cards);
                e[this._selectedCard] = t.detail.config, this._config = Object.assign(Object.assign({}, this._config), {
                    cards: e
                }), this._cardGUIModeAvailable = t.detail.guiModeAvailable, this.dispatchEvent(new CustomEvent("config-changed", {
                    detail: {
                        config: this._config
                    }
                }))
            }
        }, {
            key: "_GUIModeChange",
            value: function(t) {
                t.stopPropagation(), this._cardGUIMode = t.detail.guiMode, this._cardGUIModeAvailable = t.detail.guiModeAvailable
            }
        }, {
            key: "_toggleMode",
            value: function(t) {
                this._cardEditorEl.toggleMode()
            }
        }, {
            key: "_moveCard",
            value: function(t) {
                var e = this._selectedCard,
                    n = e + t.currentTarget.move,
                    i = j(this._config.cards),
                    r = i.splice(e, 1)[0];
                i.splice(n, 0, r), this._config = Object.assign(Object.assign({}, this._config), {
                    cards: i
                }), this._selectedCard = n, this.dispatchEvent(new CustomEvent("config-changed", {
                    detail: {
                        config: this._config
                    }
                }))
            }
        }, {
            key: "_deleteCard",
            value: function() {
                var t = j(this._config.cards);
                t.splice(this._selectedCard, 1), this._config = Object.assign(Object.assign({}, this._config), {
                    cards: t
                }), this._selectedCard = Math.max(0, this._selectedCard - 1), this.dispatchEvent(new CustomEvent("config-changed", {
                    detail: {
                        config: this._config
                    }
                }))
            }
        }, {
            key: "_valueChanged",
            value: function(t) {
                t.stopPropagation();
                var e = t.detail.value;
                this.dispatchEvent(new CustomEvent("config-changed", {
                    detail: {
                        config: e
                    }
                }))
            }
        }, {
            key: "_computeLabel",
            value: function(t) {
                return "layout_type" === t.name ? this.hass.localize("ui.panel.lovelace.editor.edit_view.type") : "layout" === t.name ? "Layout options (layout-card)" : void 0
            }
        }, {
            key: "render",
            value: function() {
                return this.hass && this._config ? zt(y || (y = $(['\n      <div class="card-config">\n        <sl-tab-group @sl-tab-show=', '>\n          <sl-tab slot="nav" .active=', " .panel=", '>\n            Layout\n          </sl-tab>\n          <sl-tab slot="nav" .active=', " .panel=", '>\n            Cards\n          </sl-tab>\n        </sl-tab-group>\n        <div id="editor">\n          ', "\n        </div>\n      </div>\n    "])), this._handleSwitchTab, 0 == this._selectedTab, 0, 1 == this._selectedTab, 1, [this._renderLayoutEditor, this._renderCardsEditor][this._selectedTab].bind(this)()) : zt(p || (p = $([""])))
            }
        }, {
            key: "_renderLayoutEditor",
            value: function() {
                var t = this._schema(this.hass.localize),
                    e = Object.assign({}, this._config);
                return zt(g || (g = $(['\n      <p>\n        See\n        <a\n          href="https://github.com/thomasloven/lovelace-layout-card"\n          target="_blank"\n          rel="no referrer"\n        >\n          layout-card on github\n        </a>\n        for usage instructions.\n      </p>\n      <ha-form\n        .hass=', "\n        .data=", "\n        .schema=", "\n        .computeLabel=", "\n        @value-changed=", "\n      ></ha-form>\n    "])), this.hass, e, t, this._computeLabel, this._valueChanged)
            }
        }, {
            key: "_renderCardsEditor",
            value: function() {
                var t = this._selectedCard,
                    e = this._config.cards.length;
                return this._config.entities ? zt(m || (m = $(["\n        This layout-card has the <code>entities</code> parameter set. You cannot\n        manually select cards.\n      "]))) : zt(_ || (_ = $(['\n      <div class="cards">\n        <sl-tab-group @sl-tab-show=', ">\n          ", '\n          <sl-tab\n            slot="nav"\n            .active=', '\n            panel="add-card"\n            id="add-card"\n          >\n            <ha-icon .icon=', '></ha-icon>\n          </sl-tab>\n        </sl-tab-group>\n        <div id="editor">\n          ', "\n        </div>\n      </div>\n    "])), this._editCard, this._config.cards.map((function(e, n) {
                    return zt(b || (b = $(['\n              <sl-tab slot="nav" .active=', " .panel=", ">\n                ", "\n              </sl-tab>\n            "])), t == n, n, n + 1)
                })), t == e, "mdi:plus", t < e ? zt(w || (w = $(['\n                <div class="card-options">\n                  <mwc-button\n                    @click=', "\n                    .disabled=", '\n                    class="gui-mode-button"\n                  >\n                    ', "\n                  </mwc-button>\n                  <mwc-icon-button\n                    .disabled=", "\n                    @click=", "\n                    .move=", "\n                  >\n                    <ha-icon .icon=", "></ha-icon>\n                  </mwc-icon-button>\n                  <mwc-icon-button\n                    .disabled=", "\n                    @click=", "\n                    .move=", "\n                  >\n                    <ha-icon .icon=", "></ha-icon>\n                  </mwc-icon-button>\n                  <mwc-icon-button @click=", ">\n                    <ha-icon .icon=", "></ha-icon>\n                  </mwc-icon-button>\n                </div>\n                <hui-card-element-editor\n                  .hass=", "\n                  .value=", "\n                  .lovelace=", "\n                  @config-changed=", "\n                  @GUImode-changed=", "\n                ></hui-card-element-editor>\n              "])), this._toggleMode, !this._cardGUIModeAvailable, this.hass.localize(this._cardEditorEl || this._cardGUIMode ? "ui.panel.lovelace.editor.edit_card.show_code_editor" : "ui.panel.lovelace.editor.edit_card.show_visual_editor"), 0 === t, this._moveCard, -1, "mdi:arrow-left", t === e - 1, this._moveCard, 1, "mdi:arrow-right", this._deleteCard, "mdi:delete", this.hass, this._config.cards[t], this.lovelace, this._updateCard, this._GUIModeChange) : zt(k || (k = $(["\n                <hui-card-picker\n                  .hass=", "\n                  .lovelace=", "\n                  @config-changed=", "\n                ></hui-card-picker>\n              "])), this.hass, this.lovelace, this._addCard))
            }
        }], [{
            key: "styles",
            get: function() {
                return [it(E || (E = $(["\n        mwc-tab-bar {\n          border-bottom: 1px solid var(--divider-color);\n        }\n\n        .layout,\n        .cards #editor {\n          margin-top: 8px;\n          border: 1px solid var(--divider-color);\n          padding: 12px;\n        }\n\n        #add-card {\n          max-width: 32px;\n          padding: 0;\n        }\n        sl-tab-group {\n          margin-top: -16px;\n          margin-bottom: 16px;\n        }\n        sl-tab {\n          flex: 1;\n        }\n        sl-tab::part(base) {\n          width: 100%;\n          justify-content: center;\n        }\n\n        .cards .card-options {\n          display: flex;\n          justify-content: flex-end;\n          width: 100%;\n        }\n        #editor {\n          border: 1px solid var(--divider-color);\n          padding: 12px;\n        }\n        .gui-mode-button {\n          margin-right: auto;\n        }\n\n        a {\n          color: var(--primary-color);\n        }\n      "])))]
            }
        }])
    }();
Y([se()], we.prototype, "_config", void 0), Y([se()], we.prototype, "lovelace", void 0), Y([se()], we.prototype, "hass", void 0), Y([le()], we.prototype, "_selectedTab", void 0), Y([le()], we.prototype, "_selectedCard", void 0), Y([le()], we.prototype, "_cardGUIMode", void 0), Y([le()], we.prototype, "_cardGUIModeAvailable", void 0), Y([function(t) {
    return function(e, n, i) {
        return function(t, e, n) {
            return n.configurable = !0, n.enumerable = !0, Reflect.decorate && "object" != K(e) && Object.defineProperty(t, e, n), n
        }(e, n, {
            get: function() {
                return function(e) {
                    var n, i;
                    return null !== (n = null === (i = e.renderRoot) || void 0 === i ? void 0 : i.querySelector(t)) && void 0 !== n ? n : null
                }(this)
            }
        })
    }
}("hui-card-element-editor")], we.prototype, "_cardEditorEl", void 0), customElements.define("layout-card-editor", we), customElements.whenDefined("hui-card-element-editor").then((function() {
    var t = customElements.get("hui-card-element-editor"),
        e = t.prototype.getConfigElement;
    t.prototype.getConfigElement = L(T().mark((function t() {
        var n, i;
        return T().wrap((function(t) {
            for (;;) switch (t.prev = t.next) {
                case 0:
                    return t.next = 2, e.bind(this)();
                case 2:
                    return (n = t.sent) && (i = n.setConfig, n.setConfig = function(t) {
                        var e = JSON.parse(JSON.stringify(t));
                        this._layoutData = e.view_layout, delete e.view_layout, i.bind(this)(e)
                    }), t.abrupt("return", n);
                case 5:
                case "end":
                    return t.stop()
            }
        }), t, this)
    })));
    var n = t.prototype._handleUIConfigChanged;
    t.prototype._handleUIConfigChanged = function(t) {
        this._configElement && this._configElement._layoutData && (t.detail.config.view_layout = this._configElement._layoutData), n.bind(this)(t)
    }
})), customElements.whenDefined("hui-view-editor").then((function() {
    var t = customElements.get("hui-view-editor"),
        e = t.prototype.firstUpdated;
    t.prototype.firstUpdated = function() {
        var t = this;
        null == e || e.bind(this)(), this._oldSchema = this._schema, this._schema = function() {
            var e, n = t._oldSchema.apply(t, arguments),
                i = n.find((function(t) {
                    return "type" == t.name
                }));
            if ("layout" === i.name) return n;
            i.selector.select.options.find((function(t) {
                return t.value === _e[0].value
            })) || (e = i.selector.select.options).push.apply(e, _e);
            return void 0 === n.find((function(t) {
                return "layout" === t.name
            })) && n.push({
                name: "layout",
                selector: {
                    object: {}
                }
            }), n
        };
        var n = document.createElement("p");
        n.innerHTML = '\n      You have layout-card installed which adds some options to this dialog. <br/>\n      Please see\n        <a\n          href="https://github.com/thomasloven/lovelace-layout-card"\n          target="_blank"\n          rel="no referrer"\n        >\n          layout-card on github\n        </a>\n        for usage instructions.\n        <style>\n          p {padding: 16px 0 0; margin-bottom: 0;}\n          a {color: var(--primary-color);}\n        </style>\n    ', this.shadowRoot.appendChild(n), this.requestUpdate()
    }
}));
var ke = function() {
    function t() {
        return Q(this, t), R(this, t, arguments)
    }
    return H(t, z(HTMLElement)), F(t, [{
        key: "setConfig",
        value: function(t) {
            var e, n;
            this.height = null !== (e = t.height) && void 0 !== e ? e : 50, this.size = null !== (n = t.size) && void 0 !== n ? n : Math.ceil(this.height / 50), this.style.cssText = "\n      display: block;\n      height: ".concat(this.height, "px;\n    ")
        }
    }, {
        key: "getCardSize",
        value: function() {
            return this.size
        }
    }], [{
        key: "getConfigElement",
        value: function() {
            return document.createElement("gap-card-editor")
        }
    }, {
        key: "getStubConfig",
        value: function() {
            return {}
        }
    }])
}();
customElements.define("gap-card", ke), window.customCards = window.customCards || [], window.customCards.push({
    type: "gap-card",
    name: "Gap Card",
    preview: !1,
    description: "Add a customizable gap in the layout."
});
var Ee = function() {
    function t() {
        return Q(this, t), R(this, t, arguments)
    }
    return H(t, ie), F(t, [{
        key: "setConfig",
        value: function(t) {
            this._config = t
        }
    }, {
        key: "heightChanged",
        value: function(t) {
            var e = Object.assign({}, this._config);
            delete e.height, t.detail.value && (e.height = parseInt(t.detail.value)), this._config = e, this.dispatchEvent(new CustomEvent("config-changed", {
                detail: {
                    config: e
                }
            }))
        }
    }, {
        key: "sizeChanged",
        value: function(t) {
            var e = Object.assign({}, this._config);
            delete e.size, t.detail.value && (e.size = parseInt(t.detail.value)), this._config = e, this.dispatchEvent(new CustomEvent("config-changed", {
                detail: {
                    config: e
                }
            }))
        }
    }, {
        key: "render",
        value: function() {
            return zt(C || (C = $(["\n      <paper-input\n        .label=", '\n        type="number"\n        .value=', "\n        @value-changed=", "\n      ></paper-input>\n      <paper-input\n        .label=", '\n        type="number"\n        .value=', "\n        @value-changed=", "\n      ></paper-input>\n    "])), "Height (px) (optional)", this._config.height, this.heightChanged, "Layout size (optional)", this._config.size, this.sizeChanged)
        }
    }])
}();
Y([se()], Ee.prototype, "_config", void 0), customElements.define("gap-card-editor", Ee);
var Ce = "2.4.6";
console.groupCollapsed("%cLAYOUT-CARD ".concat(Ce, " IS INSTALLED"), "color: green; font-weight: bold"), console.log("Readme:", "https://github.com/thomasloven/lovelace-layout-card"), console.groupEnd();