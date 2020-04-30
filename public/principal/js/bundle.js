!function (t, e) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function (t) {
        if (!t.document) throw new Error("jQuery requires a window with a document");
        return e(t)
    } : e(t)
}("undefined" != typeof window ? window : this, function (t, e) {
    "use strict";

    function i(t, e, i) {
        var n, s = (e = e || rt).createElement("script");
        if (s.text = t, i) for (n in bt) i[n] && (s[n] = i[n]);
        e.head.appendChild(s).parentNode.removeChild(s)
    }

    function n(t) {
        return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? ct[pt.call(t)] || "object" : typeof t
    }

    function s(t) {
        var e = !!t && "length" in t && t.length, i = n(t);
        return !yt(t) && !wt(t) && ("array" === i || 0 === e || "number" == typeof e && e > 0 && e - 1 in t)
    }

    function o(t, e) {
        return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
    }

    function r(t, e, i) {
        return yt(e) ? xt.grep(t, function (t, n) {
            return !!e.call(t, n, t) !== i
        }) : e.nodeType ? xt.grep(t, function (t) {
            return t === e !== i
        }) : "string" != typeof e ? xt.grep(t, function (t) {
            return ut.call(e, t) > -1 !== i
        }) : xt.filter(e, t, i)
    }

    function a(t, e) {
        for (; (t = t[e]) && 1 !== t.nodeType;) ;
        return t
    }

    function l(t) {
        var e = {};
        return xt.each(t.match(Pt) || [], function (t, i) {
            e[i] = !0
        }), e
    }

    function h(t) {
        return t
    }

    function d(t) {
        throw t
    }

    function u(t, e, i, n) {
        var s;
        try {
            t && yt(s = t.promise) ? s.call(t).done(e).fail(i) : t && yt(s = t.then) ? s.call(t, e, i) : e.apply(void 0, [t].slice(n))
        } catch (t) {
            i.apply(void 0, [t])
        }
    }

    function c() {
        rt.removeEventListener("DOMContentLoaded", c), t.removeEventListener("load", c), xt.ready()
    }

    function p(t, e) {
        return e.toUpperCase()
    }

    function f(t) {
        return t.replace(Lt, "ms-").replace(Nt, p)
    }

    function m() {
        this.expando = xt.expando + m.uid++
    }

    function g(t) {
        return "true" === t || "false" !== t && ("null" === t ? null : t === +t + "" ? +t : Ht.test(t) ? JSON.parse(t) : t)
    }

    function v(t, e, i) {
        var n;
        if (void 0 === i && 1 === t.nodeType) if (n = "data-" + e.replace(Ft, "-$&").toLowerCase(), "string" == typeof (i = t.getAttribute(n))) {
            try {
                i = g(i)
            } catch (t) {
            }
            Rt.set(t, e, i)
        } else i = void 0;
        return i
    }

    function y(t, e, i, n) {
        var s, o, r = 20, a = n ? function () {
                return n.cur()
            } : function () {
                return xt.css(t, e, "")
            }, l = a(), h = i && i[3] || (xt.cssNumber[e] ? "" : "px"),
            d = (xt.cssNumber[e] || "px" !== h && +l) && qt.exec(xt.css(t, e));
        if (d && d[3] !== h) {
            for (l /= 2, h = h || d[3], d = +l || 1; r--;) xt.style(t, e, d + h), (1 - o) * (1 - (o = a() / l || .5)) <= 0 && (r = 0), d /= o;
            d *= 2, xt.style(t, e, d + h), i = i || []
        }
        return i && (d = +d || +l || 0, s = i[1] ? d + (i[1] + 1) * i[2] : +i[2], n && (n.unit = h, n.start = d, n.end = s)), s
    }

    function w(t) {
        var e, i = t.ownerDocument, n = t.nodeName, s = Xt[n];
        return s || (e = i.body.appendChild(i.createElement(n)), s = xt.css(e, "display"), e.parentNode.removeChild(e), "none" === s && (s = "block"), Xt[n] = s, s)
    }

    function b(t, e) {
        for (var i, n, s = [], o = 0, r = t.length; o < r; o++) (n = t[o]).style && (i = n.style.display, e ? ("none" === i && (s[o] = Wt.get(n, "display") || null, s[o] || (n.style.display = "")), "" === n.style.display && Yt(n) && (s[o] = w(n))) : "none" !== i && (s[o] = "none", Wt.set(n, "display", i)));
        for (o = 0; o < r; o++) null != s[o] && (t[o].style.display = s[o]);
        return t
    }

    function x(t, e) {
        var i;
        return i = "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e || "*") : "undefined" != typeof t.querySelectorAll ? t.querySelectorAll(e || "*") : [], void 0 === e || e && o(t, e) ? xt.merge([t], i) : i
    }

    function C(t, e) {
        for (var i = 0, n = t.length; i < n; i++) Wt.set(t[i], "globalEval", !e || Wt.get(e[i], "globalEval"))
    }

    function T(t, e, i, s, o) {
        for (var r, a, l, h, d, u, c = e.createDocumentFragment(), p = [], f = 0, m = t.length; f < m; f++) if ((r = t[f]) || 0 === r) if ("object" === n(r)) xt.merge(p, r.nodeType ? [r] : r); else if (Jt.test(r)) {
            for (a = a || c.appendChild(e.createElement("div")), l = (Qt.exec(r) || ["", ""])[1].toLowerCase(), h = Kt[l] || Kt._default, a.innerHTML = h[1] + xt.htmlPrefilter(r) + h[2], u = h[0]; u--;) a = a.lastChild;
            xt.merge(p, a.childNodes), (a = c.firstChild).textContent = ""
        } else p.push(e.createTextNode(r));
        for (c.textContent = "", f = 0; r = p[f++];) if (s && xt.inArray(r, s) > -1) o && o.push(r); else if (d = xt.contains(r.ownerDocument, r), a = x(c.appendChild(r), "script"), d && C(a), i) for (u = 0; r = a[u++];) Zt.test(r.type || "") && i.push(r);
        return c
    }

    function E() {
        return !0
    }

    function S() {
        return !1
    }

    function _() {
        try {
            return rt.activeElement
        } catch (t) {
        }
    }

    function k(t, e, i, n, s, o) {
        var r, a;
        if ("object" == typeof e) {
            "string" != typeof i && (n = n || i, i = void 0);
            for (a in e) k(t, a, i, n, e[a], o);
            return t
        }
        if (null == n && null == s ? (s = i, n = i = void 0) : null == s && ("string" == typeof i ? (s = n, n = void 0) : (s = n, n = i, i = void 0)), !1 === s) s = S; else if (!s) return t;
        return 1 === o && (r = s, (s = function (t) {
            return xt().off(t), r.apply(this, arguments)
        }).guid = r.guid || (r.guid = xt.guid++)), t.each(function () {
            xt.event.add(this, e, s, n, i)
        })
    }

    function D(t, e) {
        return o(t, "table") && o(11 !== e.nodeType ? e : e.firstChild, "tr") ? xt(t).children("tbody")[0] || t : t
    }

    function I(t) {
        return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t
    }

    function $(t) {
        return "true/" === (t.type || "").slice(0, 5) ? t.type = t.type.slice(5) : t.removeAttribute("type"), t
    }

    function M(t, e) {
        var i, n, s, o, r, a, l, h;
        if (1 === e.nodeType) {
            if (Wt.hasData(t) && (o = Wt.access(t), r = Wt.set(e, o), h = o.events)) {
                delete r.handle, r.events = {};
                for (s in h) for (i = 0, n = h[s].length; i < n; i++) xt.event.add(e, s, h[s][i])
            }
            Rt.hasData(t) && (a = Rt.access(t), l = xt.extend({}, a), Rt.set(e, l))
        }
    }

    function P(t, e) {
        var i = e.nodeName.toLowerCase();
        "input" === i && Gt.test(t.type) ? e.checked = t.checked : "input" !== i && "textarea" !== i || (e.defaultValue = t.defaultValue)
    }

    function z(t, e, n, s) {
        e = ht.apply([], e);
        var o, r, a, l, h, d, u = 0, c = t.length, p = c - 1, f = e[0], m = yt(f);
        if (m || c > 1 && "string" == typeof f && !vt.checkClone && re.test(f)) return t.each(function (i) {
            var o = t.eq(i);
            m && (e[0] = f.call(this, i, o.html())), z(o, e, n, s)
        });
        if (c && (o = T(e, t[0].ownerDocument, !1, t, s), r = o.firstChild, 1 === o.childNodes.length && (o = r), r || s)) {
            for (l = (a = xt.map(x(o, "script"), I)).length; u < c; u++) h = o, u !== p && (h = xt.clone(h, !0, !0), l && xt.merge(a, x(h, "script"))), n.call(t[u], h, u);
            if (l) for (d = a[a.length - 1].ownerDocument, xt.map(a, $), u = 0; u < l; u++) h = a[u], Zt.test(h.type || "") && !Wt.access(h, "globalEval") && xt.contains(d, h) && (h.src && "module" !== (h.type || "").toLowerCase() ? xt._evalUrl && xt._evalUrl(h.src) : i(h.textContent.replace(ae, ""), d, h))
        }
        return t
    }

    function A(t, e, i) {
        for (var n, s = e ? xt.filter(e, t) : t, o = 0; null != (n = s[o]); o++) i || 1 !== n.nodeType || xt.cleanData(x(n)), n.parentNode && (i && xt.contains(n.ownerDocument, n) && C(x(n, "script")), n.parentNode.removeChild(n));
        return t
    }

    function O(t, e, i) {
        var n, s, o, r, a = t.style;
        return (i = i || he(t)) && ("" !== (r = i.getPropertyValue(e) || i[e]) || xt.contains(t.ownerDocument, t) || (r = xt.style(t, e)), !vt.pixelBoxStyles() && le.test(r) && de.test(e) && (n = a.width, s = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = r, r = i.width, a.width = n, a.minWidth = s, a.maxWidth = o)), void 0 !== r ? r + "" : r
    }

    function L(t, e) {
        return {
            get: function () {
                return t() ? void delete this.get : (this.get = e).apply(this, arguments)
            }
        }
    }

    function N(t) {
        if (t in ge) return t;
        for (var e = t[0].toUpperCase() + t.slice(1), i = me.length; i--;) if ((t = me[i] + e) in ge) return t
    }

    function j(t) {
        var e = xt.cssProps[t];
        return e || (e = xt.cssProps[t] = N(t) || t), e
    }

    function W(t, e, i) {
        var n = qt.exec(e);
        return n ? Math.max(0, n[2] - (i || 0)) + (n[3] || "px") : e
    }

    function R(t, e, i, n, s, o) {
        var r = "width" === e ? 1 : 0, a = 0, l = 0;
        if (i === (n ? "border" : "content")) return 0;
        for (; r < 4; r += 2) "margin" === i && (l += xt.css(t, i + Bt[r], !0, s)), n ? ("content" === i && (l -= xt.css(t, "padding" + Bt[r], !0, s)), "margin" !== i && (l -= xt.css(t, "border" + Bt[r] + "Width", !0, s))) : (l += xt.css(t, "padding" + Bt[r], !0, s), "padding" !== i ? l += xt.css(t, "border" + Bt[r] + "Width", !0, s) : a += xt.css(t, "border" + Bt[r] + "Width", !0, s));
        return !n && o >= 0 && (l += Math.max(0, Math.ceil(t["offset" + e[0].toUpperCase() + e.slice(1)] - o - l - a - .5))), l
    }

    function H(t, e, i) {
        var n = he(t), s = O(t, e, n), o = "border-box" === xt.css(t, "boxSizing", !1, n), r = o;
        if (le.test(s)) {
            if (!i) return s;
            s = "auto"
        }
        return r = r && (vt.boxSizingReliable() || s === t.style[e]), ("auto" === s || !parseFloat(s) && "inline" === xt.css(t, "display", !1, n)) && (s = t["offset" + e[0].toUpperCase() + e.slice(1)], r = !0), (s = parseFloat(s) || 0) + R(t, e, i || (o ? "border" : "content"), r, n, s) + "px"
    }

    function F(t, e, i, n, s) {
        return new F.prototype.init(t, e, i, n, s)
    }

    function V() {
        ye && (!1 === rt.hidden && t.requestAnimationFrame ? t.requestAnimationFrame(V) : t.setTimeout(V, xt.fx.interval), xt.fx.tick())
    }

    function q() {
        return t.setTimeout(function () {
            ve = void 0
        }), ve = Date.now()
    }

    function B(t, e) {
        var i, n = 0, s = {height: t};
        for (e = e ? 1 : 0; n < 4; n += 2 - e) s["margin" + (i = Bt[n])] = s["padding" + i] = t;
        return e && (s.opacity = s.width = t), s
    }

    function Y(t, e, i) {
        for (var n, s = (G.tweeners[e] || []).concat(G.tweeners["*"]), o = 0, r = s.length; o < r; o++) if (n = s[o].call(i, e, t)) return n
    }

    function U(t, e, i) {
        var n, s, o, r, a, l, h, d, u = "width" in e || "height" in e, c = this, p = {}, f = t.style,
            m = t.nodeType && Yt(t), g = Wt.get(t, "fxshow");
        i.queue || (null == (r = xt._queueHooks(t, "fx")).unqueued && (r.unqueued = 0, a = r.empty.fire, r.empty.fire = function () {
            r.unqueued || a()
        }), r.unqueued++, c.always(function () {
            c.always(function () {
                r.unqueued--, xt.queue(t, "fx").length || r.empty.fire()
            })
        }));
        for (n in e) if (s = e[n], we.test(s)) {
            if (delete e[n], o = o || "toggle" === s, s === (m ? "hide" : "show")) {
                if ("show" !== s || !g || void 0 === g[n]) continue;
                m = !0
            }
            p[n] = g && g[n] || xt.style(t, n)
        }
        if ((l = !xt.isEmptyObject(e)) || !xt.isEmptyObject(p)) {
            u && 1 === t.nodeType && (i.overflow = [f.overflow, f.overflowX, f.overflowY], null == (h = g && g.display) && (h = Wt.get(t, "display")), "none" === (d = xt.css(t, "display")) && (h ? d = h : (b([t], !0), h = t.style.display || h, d = xt.css(t, "display"), b([t]))), ("inline" === d || "inline-block" === d && null != h) && "none" === xt.css(t, "float") && (l || (c.done(function () {
                f.display = h
            }), null == h && (d = f.display, h = "none" === d ? "" : d)), f.display = "inline-block")), i.overflow && (f.overflow = "hidden", c.always(function () {
                f.overflow = i.overflow[0], f.overflowX = i.overflow[1], f.overflowY = i.overflow[2]
            })), l = !1;
            for (n in p) l || (g ? "hidden" in g && (m = g.hidden) : g = Wt.access(t, "fxshow", {display: h}), o && (g.hidden = !m), m && b([t], !0), c.done(function () {
                m || b([t]), Wt.remove(t, "fxshow");
                for (n in p) xt.style(t, n, p[n])
            })), l = Y(m ? g[n] : 0, n, c), n in g || (g[n] = l.start, m && (l.end = l.start, l.start = 0))
        }
    }

    function X(t, e) {
        var i, n, s, o, r;
        for (i in t) if (n = f(i), s = e[n], o = t[i], Array.isArray(o) && (s = o[1], o = t[i] = o[0]), i !== n && (t[n] = o, delete t[i]), (r = xt.cssHooks[n]) && "expand" in r) {
            o = r.expand(o), delete t[n];
            for (i in o) i in t || (t[i] = o[i], e[i] = s)
        } else e[n] = s
    }

    function G(t, e, i) {
        var n, s, o = 0, r = G.prefilters.length, a = xt.Deferred().always(function () {
            delete l.elem
        }), l = function () {
            if (s) return !1;
            for (var e = ve || q(), i = Math.max(0, h.startTime + h.duration - e), n = 1 - (i / h.duration || 0), o = 0, r = h.tweens.length; o < r; o++) h.tweens[o].run(n);
            return a.notifyWith(t, [h, n, i]), n < 1 && r ? i : (r || a.notifyWith(t, [h, 1, 0]), a.resolveWith(t, [h]), !1)
        }, h = a.promise({
            elem: t,
            props: xt.extend({}, e),
            opts: xt.extend(!0, {specialEasing: {}, easing: xt.easing._default}, i),
            originalProperties: e,
            originalOptions: i,
            startTime: ve || q(),
            duration: i.duration,
            tweens: [],
            createTween: function (e, i) {
                var n = xt.Tween(t, h.opts, e, i, h.opts.specialEasing[e] || h.opts.easing);
                return h.tweens.push(n), n
            },
            stop: function (e) {
                var i = 0, n = e ? h.tweens.length : 0;
                if (s) return this;
                for (s = !0; i < n; i++) h.tweens[i].run(1);
                return e ? (a.notifyWith(t, [h, 1, 0]), a.resolveWith(t, [h, e])) : a.rejectWith(t, [h, e]), this
            }
        }), d = h.props;
        for (X(d, h.opts.specialEasing); o < r; o++) if (n = G.prefilters[o].call(h, t, d, h.opts)) return yt(n.stop) && (xt._queueHooks(h.elem, h.opts.queue).stop = n.stop.bind(n)), n;
        return xt.map(d, Y, h), yt(h.opts.start) && h.opts.start.call(t, h), h.progress(h.opts.progress).done(h.opts.done, h.opts.complete).fail(h.opts.fail).always(h.opts.always), xt.fx.timer(xt.extend(l, {
            elem: t,
            anim: h,
            queue: h.opts.queue
        })), h
    }

    function Q(t) {
        return (t.match(Pt) || []).join(" ")
    }

    function Z(t) {
        return t.getAttribute && t.getAttribute("class") || ""
    }

    function K(t) {
        return Array.isArray(t) ? t : "string" == typeof t ? t.match(Pt) || [] : []
    }

    function J(t, e, i, s) {
        var o;
        if (Array.isArray(e)) xt.each(e, function (e, n) {
            i || Me.test(t) ? s(t, n) : J(t + "[" + ("object" == typeof n && null != n ? e : "") + "]", n, i, s)
        }); else if (i || "object" !== n(e)) s(t, e); else for (o in e) J(t + "[" + o + "]", e[o], i, s)
    }

    function tt(t) {
        return function (e, i) {
            "string" != typeof e && (i = e, e = "*");
            var n, s = 0, o = e.toLowerCase().match(Pt) || [];
            if (yt(i)) for (; n = o[s++];) "+" === n[0] ? (n = n.slice(1) || "*", (t[n] = t[n] || []).unshift(i)) : (t[n] = t[n] || []).push(i)
        }
    }

    function et(t, e, i, n) {
        function s(a) {
            var l;
            return o[a] = !0, xt.each(t[a] || [], function (t, a) {
                var h = a(e, i, n);
                return "string" != typeof h || r || o[h] ? r ? !(l = h) : void 0 : (e.dataTypes.unshift(h), s(h), !1)
            }), l
        }

        var o = {}, r = t === Ve;
        return s(e.dataTypes[0]) || !o["*"] && s("*")
    }

    function it(t, e) {
        var i, n, s = xt.ajaxSettings.flatOptions || {};
        for (i in e) void 0 !== e[i] && ((s[i] ? t : n || (n = {}))[i] = e[i]);
        return n && xt.extend(!0, t, n), t
    }

    function nt(t, e, i) {
        for (var n, s, o, r, a = t.contents, l = t.dataTypes; "*" === l[0];) l.shift(), void 0 === n && (n = t.mimeType || e.getResponseHeader("Content-Type"));
        if (n) for (s in a) if (a[s] && a[s].test(n)) {
            l.unshift(s);
            break
        }
        if (l[0] in i) o = l[0]; else {
            for (s in i) {
                if (!l[0] || t.converters[s + " " + l[0]]) {
                    o = s;
                    break
                }
                r || (r = s)
            }
            o = o || r
        }
        if (o) return o !== l[0] && l.unshift(o), i[o]
    }

    function st(t, e, i, n) {
        var s, o, r, a, l, h = {}, d = t.dataTypes.slice();
        if (d[1]) for (r in t.converters) h[r.toLowerCase()] = t.converters[r];
        for (o = d.shift(); o;) if (t.responseFields[o] && (i[t.responseFields[o]] = e), !l && n && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = o, o = d.shift()) if ("*" === o) o = l; else if ("*" !== l && l !== o) {
            if (!(r = h[l + " " + o] || h["* " + o])) for (s in h) if ((a = s.split(" "))[1] === o && (r = h[l + " " + a[0]] || h["* " + a[0]])) {
                !0 === r ? r = h[s] : !0 !== h[s] && (o = a[0], d.unshift(a[1]));
                break
            }
            if (!0 !== r) if (r && t["throws"]) e = r(e); else try {
                e = r(e)
            } catch (t) {
                return {state: "parsererror", error: r ? t : "No conversion from " + l + " to " + o}
            }
        }
        return {state: "success", data: e}
    }

    var ot = [], rt = t.document, at = Object.getPrototypeOf, lt = ot.slice, ht = ot.concat, dt = ot.push,
        ut = ot.indexOf, ct = {}, pt = ct.toString, ft = ct.hasOwnProperty, mt = ft.toString, gt = mt.call(Object),
        vt = {}, yt = function (t) {
            return "function" == typeof t && "number" != typeof t.nodeType
        }, wt = function (t) {
            return null != t && t === t.window
        }, bt = {type: !0, src: !0, noModule: !0}, xt = function (t, e) {
            return new xt.fn.init(t, e)
        }, Ct = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    xt.fn = xt.prototype = {
        jquery: "3.3.1", constructor: xt, length: 0, toArray: function () {
            return lt.call(this)
        }, get: function (t) {
            return null == t ? lt.call(this) : t < 0 ? this[t + this.length] : this[t]
        }, pushStack: function (t) {
            var e = xt.merge(this.constructor(), t);
            return e.prevObject = this, e
        }, each: function (t) {
            return xt.each(this, t)
        }, map: function (t) {
            return this.pushStack(xt.map(this, function (e, i) {
                return t.call(e, i, e)
            }))
        }, slice: function () {
            return this.pushStack(lt.apply(this, arguments))
        }, first: function () {
            return this.eq(0)
        }, last: function () {
            return this.eq(-1)
        }, eq: function (t) {
            var e = this.length, i = +t + (t < 0 ? e : 0);
            return this.pushStack(i >= 0 && i < e ? [this[i]] : [])
        }, end: function () {
            return this.prevObject || this.constructor()
        }, push: dt, sort: ot.sort, splice: ot.splice
    }, xt.extend = xt.fn.extend = function () {
        var t, e, i, n, s, o, r = arguments[0] || {}, a = 1, l = arguments.length, h = !1;
        for ("boolean" == typeof r && (h = r, r = arguments[a] || {}, a++), "object" == typeof r || yt(r) || (r = {}), a === l && (r = this, a--); a < l; a++) if (null != (t = arguments[a])) for (e in t) i = r[e], r !== (n = t[e]) && (h && n && (xt.isPlainObject(n) || (s = Array.isArray(n))) ? (s ? (s = !1, o = i && Array.isArray(i) ? i : []) : o = i && xt.isPlainObject(i) ? i : {}, r[e] = xt.extend(h, o, n)) : void 0 !== n && (r[e] = n));
        return r
    }, xt.extend({
        expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (t) {
            throw new Error(t)
        }, noop: function () {
        }, isPlainObject: function (t) {
            var e, i;
            return !(!t || "[object Object]" !== pt.call(t) || (e = at(t)) && ("function" != typeof (i = ft.call(e, "constructor") && e.constructor) || mt.call(i) !== gt))
        }, isEmptyObject: function (t) {
            var e;
            for (e in t) return !1;
            return !0
        }, globalEval: function (t) {
            i(t)
        }, each: function (t, e) {
            var i, n = 0;
            if (s(t)) for (i = t.length; n < i && !1 !== e.call(t[n], n, t[n]); n++) ; else for (n in t) if (!1 === e.call(t[n], n, t[n])) break;
            return t
        }, trim: function (t) {
            return null == t ? "" : (t + "").replace(Ct, "")
        }, makeArray: function (t, e) {
            var i = e || [];
            return null != t && (s(Object(t)) ? xt.merge(i, "string" == typeof t ? [t] : t) : dt.call(i, t)), i
        }, inArray: function (t, e, i) {
            return null == e ? -1 : ut.call(e, t, i)
        }, merge: function (t, e) {
            for (var i = +e.length, n = 0, s = t.length; n < i; n++) t[s++] = e[n];
            return t.length = s, t
        }, grep: function (t, e, i) {
            for (var n, s = [], o = 0, r = t.length, a = !i; o < r; o++) (n = !e(t[o], o)) !== a && s.push(t[o]);
            return s
        }, map: function (t, e, i) {
            var n, o, r = 0, a = [];
            if (s(t)) for (n = t.length; r < n; r++) null != (o = e(t[r], r, i)) && a.push(o); else for (r in t) null != (o = e(t[r], r, i)) && a.push(o);
            return ht.apply([], a)
        }, guid: 1, support: vt
    }), "function" == typeof Symbol && (xt.fn[Symbol.iterator] = ot[Symbol.iterator]), xt.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (t, e) {
        ct["[object " + e + "]"] = e.toLowerCase()
    });
    var Tt = function (t) {
        function e(t, e, i, n) {
            var s, o, r, a, l, h, d, c = e && e.ownerDocument, f = e ? e.nodeType : 9;
            if (i = i || [], "string" != typeof t || !t || 1 !== f && 9 !== f && 11 !== f) return i;
            if (!n && ((e ? e.ownerDocument || e : H) !== z && P(e), e = e || z, O)) {
                if (11 !== f && (l = vt.exec(t))) if (s = l[1]) {
                    if (9 === f) {
                        if (!(r = e.getElementById(s))) return i;
                        if (r.id === s) return i.push(r), i
                    } else if (c && (r = c.getElementById(s)) && W(e, r) && r.id === s) return i.push(r), i
                } else {
                    if (l[2]) return K.apply(i, e.getElementsByTagName(t)), i;
                    if ((s = l[3]) && C.getElementsByClassName && e.getElementsByClassName) return K.apply(i, e.getElementsByClassName(s)), i
                }
                if (C.qsa && !Y[t + " "] && (!L || !L.test(t))) {
                    if (1 !== f) c = e, d = t; else if ("object" !== e.nodeName.toLowerCase()) {
                        for ((a = e.getAttribute("id")) ? a = a.replace(xt, Ct) : e.setAttribute("id", a = R), o = (h = _(t)).length; o--;) h[o] = "#" + a + " " + p(h[o]);
                        d = h.join(","), c = yt.test(t) && u(e.parentNode) || e
                    }
                    if (d) try {
                        return K.apply(i, c.querySelectorAll(d)), i
                    } catch (t) {
                    } finally {
                        a === R && e.removeAttribute("id")
                    }
                }
            }
            return D(t.replace(at, "$1"), e, i, n)
        }

        function i() {
            function t(i, n) {
                return e.push(i + " ") > T.cacheLength && delete t[e.shift()], t[i + " "] = n
            }

            var e = [];
            return t
        }

        function n(t) {
            return t[R] = !0, t
        }

        function s(t) {
            var e = z.createElement("fieldset");
            try {
                return !!t(e)
            } catch (t) {
                return !1
            } finally {
                e.parentNode && e.parentNode.removeChild(e), e = null
            }
        }

        function o(t, e) {
            for (var i = t.split("|"), n = i.length; n--;) T.attrHandle[i[n]] = e
        }

        function r(t, e) {
            var i = e && t, n = i && 1 === t.nodeType && 1 === e.nodeType && t.sourceIndex - e.sourceIndex;
            if (n) return n;
            if (i) for (; i = i.nextSibling;) if (i === e) return -1;
            return t ? 1 : -1
        }

        function a(t) {
            return function (e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t
            }
        }

        function l(t) {
            return function (e) {
                var i = e.nodeName.toLowerCase();
                return ("input" === i || "button" === i) && e.type === t
            }
        }

        function h(t) {
            return function (e) {
                return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && Et(e) === t : e.disabled === t : "label" in e && e.disabled === t
            }
        }

        function d(t) {
            return n(function (e) {
                return e = +e, n(function (i, n) {
                    for (var s, o = t([], i.length, e), r = o.length; r--;) i[s = o[r]] && (i[s] = !(n[s] = i[s]))
                })
            })
        }

        function u(t) {
            return t && "undefined" != typeof t.getElementsByTagName && t
        }

        function c() {
        }

        function p(t) {
            for (var e = 0, i = t.length, n = ""; e < i; e++) n += t[e].value;
            return n
        }

        function f(t, e, i) {
            var n = e.dir, s = e.next, o = s || n, r = i && "parentNode" === o, a = V++;
            return e.first ? function (e, i, s) {
                for (; e = e[n];) if (1 === e.nodeType || r) return t(e, i, s);
                return !1
            } : function (e, i, l) {
                var h, d, u, c = [F, a];
                if (l) {
                    for (; e = e[n];) if ((1 === e.nodeType || r) && t(e, i, l)) return !0
                } else for (; e = e[n];) if (1 === e.nodeType || r) if (u = e[R] || (e[R] = {}), d = u[e.uniqueID] || (u[e.uniqueID] = {}), s && s === e.nodeName.toLowerCase()) e = e[n] || e; else {
                    if ((h = d[o]) && h[0] === F && h[1] === a) return c[2] = h[2];
                    if (d[o] = c, c[2] = t(e, i, l)) return !0
                }
                return !1
            }
        }

        function m(t) {
            return t.length > 1 ? function (e, i, n) {
                for (var s = t.length; s--;) if (!t[s](e, i, n)) return !1;
                return !0
            } : t[0]
        }

        function g(t, i, n) {
            for (var s = 0, o = i.length; s < o; s++) e(t, i[s], n);
            return n
        }

        function v(t, e, i, n, s) {
            for (var o, r = [], a = 0, l = t.length, h = null != e; a < l; a++) (o = t[a]) && (i && !i(o, n, s) || (r.push(o), h && e.push(a)));
            return r
        }

        function y(t, e, i, s, o, r) {
            return s && !s[R] && (s = y(s)), o && !o[R] && (o = y(o, r)), n(function (n, r, a, l) {
                var h, d, u, c = [], p = [], f = r.length, m = n || g(e || "*", a.nodeType ? [a] : a, []),
                    y = !t || !n && e ? m : v(m, c, t, a, l), w = i ? o || (n ? t : f || s) ? [] : r : y;
                if (i && i(y, w, a, l), s) for (h = v(w, p), s(h, [], a, l), d = h.length; d--;) (u = h[d]) && (w[p[d]] = !(y[p[d]] = u));
                if (n) {
                    if (o || t) {
                        if (o) {
                            for (h = [], d = w.length; d--;) (u = w[d]) && h.push(y[d] = u);
                            o(null, w = [], h, l)
                        }
                        for (d = w.length; d--;) (u = w[d]) && (h = o ? tt(n, u) : c[d]) > -1 && (n[h] = !(r[h] = u))
                    }
                } else w = v(w === r ? w.splice(f, w.length) : w), o ? o(null, r, w, l) : K.apply(r, w)
            })
        }

        function w(t) {
            for (var e, i, n, s = t.length, o = T.relative[t[0].type], r = o || T.relative[" "], a = o ? 1 : 0, l = f(function (t) {
                return t === e
            }, r, !0), h = f(function (t) {
                return tt(e, t) > -1
            }, r, !0), d = [function (t, i, n) {
                var s = !o && (n || i !== I) || ((e = i).nodeType ? l(t, i, n) : h(t, i, n));
                return e = null, s
            }]; a < s; a++) if (i = T.relative[t[a].type]) d = [f(m(d), i)]; else {
                if ((i = T.filter[t[a].type].apply(null, t[a].matches))[R]) {
                    for (n = ++a; n < s && !T.relative[t[n].type]; n++) ;
                    return y(a > 1 && m(d), a > 1 && p(t.slice(0, a - 1).concat({value: " " === t[a - 2].type ? "*" : ""})).replace(at, "$1"), i, a < n && w(t.slice(a, n)), n < s && w(t = t.slice(n)), n < s && p(t))
                }
                d.push(i)
            }
            return m(d)
        }

        function b(t, i) {
            var s = i.length > 0, o = t.length > 0, r = function (n, r, a, l, h) {
                var d, u, c, p = 0, f = "0", m = n && [], g = [], y = I, w = n || o && T.find.TAG("*", h),
                    b = F += null == y ? 1 : Math.random() || .1, x = w.length;
                for (h && (I = r === z || r || h); f !== x && null != (d = w[f]); f++) {
                    if (o && d) {
                        for (u = 0, r || d.ownerDocument === z || (P(d), a = !O); c = t[u++];) if (c(d, r || z, a)) {
                            l.push(d);
                            break
                        }
                        h && (F = b)
                    }
                    s && ((d = !c && d) && p--, n && m.push(d))
                }
                if (p += f, s && f !== p) {
                    for (u = 0; c = i[u++];) c(m, g, r, a);
                    if (n) {
                        if (p > 0) for (; f--;) m[f] || g[f] || (g[f] = Q.call(l));
                        g = v(g)
                    }
                    K.apply(l, g), h && !n && g.length > 0 && p + i.length > 1 && e.uniqueSort(l)
                }
                return h && (F = b, I = y), m
            };
            return s ? n(r) : r
        }

        var x, C, T, E, S, _, k, D, I, $, M, P, z, A, O, L, N, j, W, R = "sizzle" + 1 * new Date, H = t.document, F = 0,
            V = 0, q = i(), B = i(), Y = i(), U = function (t, e) {
                return t === e && (M = !0), 0
            }, X = {}.hasOwnProperty, G = [], Q = G.pop, Z = G.push, K = G.push, J = G.slice, tt = function (t, e) {
                for (var i = 0, n = t.length; i < n; i++) if (t[i] === e) return i;
                return -1
            },
            et = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            it = "[\\x20\\t\\r\\n\\f]", nt = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            st = "\\[" + it + "*(" + nt + ")(?:" + it + "*([*^$|!~]?=)" + it + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + nt + "))|)" + it + "*\\]",
            ot = ":(" + nt + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + st + ")*)|.*)\\)|)",
            rt = new RegExp(it + "+", "g"), at = new RegExp("^" + it + "+|((?:^|[^\\\\])(?:\\\\.)*)" + it + "+$", "g"),
            lt = new RegExp("^" + it + "*," + it + "*"), ht = new RegExp("^" + it + "*([>+~]|" + it + ")" + it + "*"),
            dt = new RegExp("=" + it + "*([^\\]'\"]*?)" + it + "*\\]", "g"), ut = new RegExp(ot),
            ct = new RegExp("^" + nt + "$"), pt = {
                ID: new RegExp("^#(" + nt + ")"),
                CLASS: new RegExp("^\\.(" + nt + ")"),
                TAG: new RegExp("^(" + nt + "|[*])"),
                ATTR: new RegExp("^" + st),
                PSEUDO: new RegExp("^" + ot),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + it + "*(even|odd|(([+-]|)(\\d*)n|)" + it + "*(?:([+-]|)" + it + "*(\\d+)|))" + it + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + et + ")$", "i"),
                needsContext: new RegExp("^" + it + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + it + "*((?:-\\d)?\\d*)" + it + "*\\)|)(?=[^-]|$)", "i")
            }, ft = /^(?:input|select|textarea|button)$/i, mt = /^h\d$/i, gt = /^[^{]+\{\s*\[native \w/,
            vt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, yt = /[+~]/,
            wt = new RegExp("\\\\([\\da-f]{1,6}" + it + "?|(" + it + ")|.)", "ig"), bt = function (t, e, i) {
                var n = "0x" + e - 65536;
                return n !== n || i ? e : n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
            }, xt = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, Ct = function (t, e) {
                return e ? "\0" === t ? "�" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t
            }, Tt = function () {
                P()
            }, Et = f(function (t) {
                return !0 === t.disabled && ("form" in t || "label" in t)
            }, {dir: "parentNode", next: "legend"});
        try {
            K.apply(G = J.call(H.childNodes), H.childNodes), G[H.childNodes.length].nodeType
        } catch (t) {
            K = {
                apply: G.length ? function (t, e) {
                    Z.apply(t, J.call(e))
                } : function (t, e) {
                    for (var i = t.length, n = 0; t[i++] = e[n++];) ;
                    t.length = i - 1
                }
            }
        }
        C = e.support = {}, S = e.isXML = function (t) {
            var e = t && (t.ownerDocument || t).documentElement;
            return !!e && "HTML" !== e.nodeName
        }, P = e.setDocument = function (t) {
            var e, i, n = t ? t.ownerDocument || t : H;
            return n !== z && 9 === n.nodeType && n.documentElement ? (z = n, A = z.documentElement, O = !S(z), H !== z && (i = z.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", Tt, !1) : i.attachEvent && i.attachEvent("onunload", Tt)), C.attributes = s(function (t) {
                return t.className = "i", !t.getAttribute("className")
            }), C.getElementsByTagName = s(function (t) {
                return t.appendChild(z.createComment("")), !t.getElementsByTagName("*").length
            }), C.getElementsByClassName = gt.test(z.getElementsByClassName), C.getById = s(function (t) {
                return A.appendChild(t).id = R, !z.getElementsByName || !z.getElementsByName(R).length
            }), C.getById ? (T.filter.ID = function (t) {
                var e = t.replace(wt, bt);
                return function (t) {
                    return t.getAttribute("id") === e
                }
            }, T.find.ID = function (t, e) {
                if ("undefined" != typeof e.getElementById && O) {
                    var i = e.getElementById(t);
                    return i ? [i] : []
                }
            }) : (T.filter.ID = function (t) {
                var e = t.replace(wt, bt);
                return function (t) {
                    var i = "undefined" != typeof t.getAttributeNode && t.getAttributeNode("id");
                    return i && i.value === e
                }
            }, T.find.ID = function (t, e) {
                if ("undefined" != typeof e.getElementById && O) {
                    var i, n, s, o = e.getElementById(t);
                    if (o) {
                        if ((i = o.getAttributeNode("id")) && i.value === t) return [o];
                        for (s = e.getElementsByName(t), n = 0; o = s[n++];) if ((i = o.getAttributeNode("id")) && i.value === t) return [o]
                    }
                    return []
                }
            }), T.find.TAG = C.getElementsByTagName ? function (t, e) {
                return "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t) : C.qsa ? e.querySelectorAll(t) : void 0
            } : function (t, e) {
                var i, n = [], s = 0, o = e.getElementsByTagName(t);
                if ("*" === t) {
                    for (; i = o[s++];) 1 === i.nodeType && n.push(i);
                    return n
                }
                return o
            }, T.find.CLASS = C.getElementsByClassName && function (t, e) {
                if ("undefined" != typeof e.getElementsByClassName && O) return e.getElementsByClassName(t)
            }, N = [], L = [], (C.qsa = gt.test(z.querySelectorAll)) && (s(function (t) {
                A.appendChild(t).innerHTML = "<a id='" + R + "'></a><select id='" + R + "-\r\\' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && L.push("[*^$]=" + it + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || L.push("\\[" + it + "*(?:value|" + et + ")"), t.querySelectorAll("[id~=" + R + "-]").length || L.push("~="), t.querySelectorAll(":checked").length || L.push(":checked"), t.querySelectorAll("a#" + R + "+*").length || L.push(".#.+[+~]")
            }), s(function (t) {
                t.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var e = z.createElement("input");
                e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && L.push("name" + it + "*[*^$|!~]?="), 2 !== t.querySelectorAll(":enabled").length && L.push(":enabled", ":disabled"), A.appendChild(t).disabled = !0, 2 !== t.querySelectorAll(":disabled").length && L.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), L.push(",.*:")
            })), (C.matchesSelector = gt.test(j = A.matches || A.webkitMatchesSelector || A.mozMatchesSelector || A.oMatchesSelector || A.msMatchesSelector)) && s(function (t) {
                C.disconnectedMatch = j.call(t, "*"), j.call(t, "[s!='']:x"), N.push("!=", ot)
            }), L = L.length && new RegExp(L.join("|")), N = N.length && new RegExp(N.join("|")), e = gt.test(A.compareDocumentPosition), W = e || gt.test(A.contains) ? function (t, e) {
                var i = 9 === t.nodeType ? t.documentElement : t, n = e && e.parentNode;
                return t === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(n)))
            } : function (t, e) {
                if (e) for (; e = e.parentNode;) if (e === t) return !0;
                return !1
            }, U = e ? function (t, e) {
                if (t === e) return M = !0, 0;
                var i = !t.compareDocumentPosition - !e.compareDocumentPosition;
                return i || (1 & (i = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1) || !C.sortDetached && e.compareDocumentPosition(t) === i ? t === z || t.ownerDocument === H && W(H, t) ? -1 : e === z || e.ownerDocument === H && W(H, e) ? 1 : $ ? tt($, t) - tt($, e) : 0 : 4 & i ? -1 : 1)
            } : function (t, e) {
                if (t === e) return M = !0, 0;
                var i, n = 0, s = t.parentNode, o = e.parentNode, a = [t], l = [e];
                if (!s || !o) return t === z ? -1 : e === z ? 1 : s ? -1 : o ? 1 : $ ? tt($, t) - tt($, e) : 0;
                if (s === o) return r(t, e);
                for (i = t; i = i.parentNode;) a.unshift(i);
                for (i = e; i = i.parentNode;) l.unshift(i);
                for (; a[n] === l[n];) n++;
                return n ? r(a[n], l[n]) : a[n] === H ? -1 : l[n] === H ? 1 : 0
            }, z) : z
        }, e.matches = function (t, i) {
            return e(t, null, null, i)
        }, e.matchesSelector = function (t, i) {
            if ((t.ownerDocument || t) !== z && P(t), i = i.replace(dt, "='$1']"), C.matchesSelector && O && !Y[i + " "] && (!N || !N.test(i)) && (!L || !L.test(i))) try {
                var n = j.call(t, i);
                if (n || C.disconnectedMatch || t.document && 11 !== t.document.nodeType) return n
            } catch (t) {
            }
            return e(i, z, null, [t]).length > 0
        }, e.contains = function (t, e) {
            return (t.ownerDocument || t) !== z && P(t), W(t, e)
        }, e.attr = function (t, e) {
            (t.ownerDocument || t) !== z && P(t);
            var i = T.attrHandle[e.toLowerCase()],
                n = i && X.call(T.attrHandle, e.toLowerCase()) ? i(t, e, !O) : void 0;
            return void 0 !== n ? n : C.attributes || !O ? t.getAttribute(e) : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
        }, e.escape = function (t) {
            return (t + "").replace(xt, Ct)
        }, e.error = function (t) {
            throw new Error("Syntax error, unrecognized expression: " + t)
        }, e.uniqueSort = function (t) {
            var e, i = [], n = 0, s = 0;
            if (M = !C.detectDuplicates, $ = !C.sortStable && t.slice(0), t.sort(U), M) {
                for (; e = t[s++];) e === t[s] && (n = i.push(s));
                for (; n--;) t.splice(i[n], 1)
            }
            return $ = null, t
        }, E = e.getText = function (t) {
            var e, i = "", n = 0, s = t.nodeType;
            if (s) {
                if (1 === s || 9 === s || 11 === s) {
                    if ("string" == typeof t.textContent) return t.textContent;
                    for (t = t.firstChild; t; t = t.nextSibling) i += E(t)
                } else if (3 === s || 4 === s) return t.nodeValue
            } else for (; e = t[n++];) i += E(e);
            return i
        }, (T = e.selectors = {
            cacheLength: 50,
            createPseudo: n,
            match: pt,
            attrHandle: {},
            find: {},
            relative: {
                ">": {dir: "parentNode", first: !0},
                " ": {dir: "parentNode"},
                "+": {dir: "previousSibling", first: !0},
                "~": {dir: "previousSibling"}
            },
            preFilter: {
                ATTR: function (t) {
                    return t[1] = t[1].replace(wt, bt), t[3] = (t[3] || t[4] || t[5] || "").replace(wt, bt), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                }, CHILD: function (t) {
                    return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), t
                }, PSEUDO: function (t) {
                    var e, i = !t[6] && t[2];
                    return pt.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : i && ut.test(i) && (e = _(i, !0)) && (e = i.indexOf(")", i.length - e) - i.length) && (t[0] = t[0].slice(0, e), t[2] = i.slice(0, e)), t.slice(0, 3))
                }
            },
            filter: {
                TAG: function (t) {
                    var e = t.replace(wt, bt).toLowerCase();
                    return "*" === t ? function () {
                        return !0
                    } : function (t) {
                        return t.nodeName && t.nodeName.toLowerCase() === e
                    }
                }, CLASS: function (t) {
                    var e = q[t + " "];
                    return e || (e = new RegExp("(^|" + it + ")" + t + "(" + it + "|$)")) && q(t, function (t) {
                        return e.test("string" == typeof t.className && t.className || "undefined" != typeof t.getAttribute && t.getAttribute("class") || "")
                    })
                }, ATTR: function (t, i, n) {
                    return function (s) {
                        var o = e.attr(s, t);
                        return null == o ? "!=" === i : !i || (o += "", "=" === i ? o === n : "!=" === i ? o !== n : "^=" === i ? n && 0 === o.indexOf(n) : "*=" === i ? n && o.indexOf(n) > -1 : "$=" === i ? n && o.slice(-n.length) === n : "~=" === i ? (" " + o.replace(rt, " ") + " ").indexOf(n) > -1 : "|=" === i && (o === n || o.slice(0, n.length + 1) === n + "-"))
                    }
                }, CHILD: function (t, e, i, n, s) {
                    var o = "nth" !== t.slice(0, 3), r = "last" !== t.slice(-4), a = "of-type" === e;
                    return 1 === n && 0 === s ? function (t) {
                        return !!t.parentNode
                    } : function (e, i, l) {
                        var h, d, u, c, p, f, m = o !== r ? "nextSibling" : "previousSibling", g = e.parentNode,
                            v = a && e.nodeName.toLowerCase(), y = !l && !a, w = !1;
                        if (g) {
                            if (o) {
                                for (; m;) {
                                    for (c = e; c = c[m];) if (a ? c.nodeName.toLowerCase() === v : 1 === c.nodeType) return !1;
                                    f = m = "only" === t && !f && "nextSibling"
                                }
                                return !0
                            }
                            if (f = [r ? g.firstChild : g.lastChild], r && y) {
                                for (w = (p = (h = (d = (u = (c = g)[R] || (c[R] = {}))[c.uniqueID] || (u[c.uniqueID] = {}))[t] || [])[0] === F && h[1]) && h[2], c = p && g.childNodes[p]; c = ++p && c && c[m] || (w = p = 0) || f.pop();) if (1 === c.nodeType && ++w && c === e) {
                                    d[t] = [F, p, w];
                                    break
                                }
                            } else if (y && (w = p = (h = (d = (u = (c = e)[R] || (c[R] = {}))[c.uniqueID] || (u[c.uniqueID] = {}))[t] || [])[0] === F && h[1]), !1 === w) for (; (c = ++p && c && c[m] || (w = p = 0) || f.pop()) && ((a ? c.nodeName.toLowerCase() !== v : 1 !== c.nodeType) || !++w || (y && ((d = (u = c[R] || (c[R] = {}))[c.uniqueID] || (u[c.uniqueID] = {}))[t] = [F, w]), c !== e));) ;
                            return (w -= s) === n || w % n == 0 && w / n >= 0
                        }
                    }
                }, PSEUDO: function (t, i) {
                    var s, o = T.pseudos[t] || T.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                    return o[R] ? o(i) : o.length > 1 ? (s = [t, t, "", i], T.setFilters.hasOwnProperty(t.toLowerCase()) ? n(function (t, e) {
                        for (var n, s = o(t, i), r = s.length; r--;) t[n = tt(t, s[r])] = !(e[n] = s[r])
                    }) : function (t) {
                        return o(t, 0, s)
                    }) : o
                }
            },
            pseudos: {
                not: n(function (t) {
                    var e = [], i = [], s = k(t.replace(at, "$1"));
                    return s[R] ? n(function (t, e, i, n) {
                        for (var o, r = s(t, null, n, []), a = t.length; a--;) (o = r[a]) && (t[a] = !(e[a] = o))
                    }) : function (t, n, o) {
                        return e[0] = t, s(e, null, o, i), e[0] = null, !i.pop()
                    }
                }), has: n(function (t) {
                    return function (i) {
                        return e(t, i).length > 0
                    }
                }), contains: n(function (t) {
                    return t = t.replace(wt, bt), function (e) {
                        return (e.textContent || e.innerText || E(e)).indexOf(t) > -1
                    }
                }), lang: n(function (t) {
                    return ct.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(wt, bt).toLowerCase(), function (e) {
                        var i;
                        do if (i = O ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (i = i.toLowerCase()) === t || 0 === i.indexOf(t + "-"); while ((e = e.parentNode) && 1 === e.nodeType);
                        return !1
                    }
                }), target: function (e) {
                    var i = t.location && t.location.hash;
                    return i && i.slice(1) === e.id
                }, root: function (t) {
                    return t === A
                }, focus: function (t) {
                    return t === z.activeElement && (!z.hasFocus || z.hasFocus()) && !!(t.type || t.href || ~t.tabIndex);
                }, enabled: h(!1), disabled: h(!0), checked: function (t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && !!t.checked || "option" === e && !!t.selected
                }, selected: function (t) {
                    return t.parentNode && t.parentNode.selectedIndex, !0 === t.selected
                }, empty: function (t) {
                    for (t = t.firstChild; t; t = t.nextSibling) if (t.nodeType < 6) return !1;
                    return !0
                }, parent: function (t) {
                    return !T.pseudos.empty(t)
                }, header: function (t) {
                    return mt.test(t.nodeName)
                }, input: function (t) {
                    return ft.test(t.nodeName)
                }, button: function (t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && "button" === t.type || "button" === e
                }, text: function (t) {
                    var e;
                    return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                }, first: d(function () {
                    return [0]
                }), last: d(function (t, e) {
                    return [e - 1]
                }), eq: d(function (t, e, i) {
                    return [i < 0 ? i + e : i]
                }), even: d(function (t, e) {
                    for (var i = 0; i < e; i += 2) t.push(i);
                    return t
                }), odd: d(function (t, e) {
                    for (var i = 1; i < e; i += 2) t.push(i);
                    return t
                }), lt: d(function (t, e, i) {
                    for (var n = i < 0 ? i + e : i; --n >= 0;) t.push(n);
                    return t
                }), gt: d(function (t, e, i) {
                    for (var n = i < 0 ? i + e : i; ++n < e;) t.push(n);
                    return t
                })
            }
        }).pseudos.nth = T.pseudos.eq;
        for (x in {radio: !0, checkbox: !0, file: !0, password: !0, image: !0}) T.pseudos[x] = a(x);
        for (x in {submit: !0, reset: !0}) T.pseudos[x] = l(x);
        return c.prototype = T.filters = T.pseudos, T.setFilters = new c, _ = e.tokenize = function (t, i) {
            var n, s, o, r, a, l, h, d = B[t + " "];
            if (d) return i ? 0 : d.slice(0);
            for (a = t, l = [], h = T.preFilter; a;) {
                n && !(s = lt.exec(a)) || (s && (a = a.slice(s[0].length) || a), l.push(o = [])), n = !1, (s = ht.exec(a)) && (n = s.shift(), o.push({
                    value: n,
                    type: s[0].replace(at, " ")
                }), a = a.slice(n.length));
                for (r in T.filter) !(s = pt[r].exec(a)) || h[r] && !(s = h[r](s)) || (n = s.shift(), o.push({
                    value: n,
                    type: r,
                    matches: s
                }), a = a.slice(n.length));
                if (!n) break
            }
            return i ? a.length : a ? e.error(t) : B(t, l).slice(0)
        }, k = e.compile = function (t, e) {
            var i, n = [], s = [], o = Y[t + " "];
            if (!o) {
                for (e || (e = _(t)), i = e.length; i--;) (o = w(e[i]))[R] ? n.push(o) : s.push(o);
                (o = Y(t, b(s, n))).selector = t
            }
            return o
        }, D = e.select = function (t, e, i, n) {
            var s, o, r, a, l, h = "function" == typeof t && t, d = !n && _(t = h.selector || t);
            if (i = i || [], 1 === d.length) {
                if ((o = d[0] = d[0].slice(0)).length > 2 && "ID" === (r = o[0]).type && 9 === e.nodeType && O && T.relative[o[1].type]) {
                    if (!(e = (T.find.ID(r.matches[0].replace(wt, bt), e) || [])[0])) return i;
                    h && (e = e.parentNode), t = t.slice(o.shift().value.length)
                }
                for (s = pt.needsContext.test(t) ? 0 : o.length; s-- && (r = o[s], !T.relative[a = r.type]);) if ((l = T.find[a]) && (n = l(r.matches[0].replace(wt, bt), yt.test(o[0].type) && u(e.parentNode) || e))) {
                    if (o.splice(s, 1), !(t = n.length && p(o))) return K.apply(i, n), i;
                    break
                }
            }
            return (h || k(t, d))(n, e, !O, i, !e || yt.test(t) && u(e.parentNode) || e), i
        }, C.sortStable = R.split("").sort(U).join("") === R, C.detectDuplicates = !!M, P(), C.sortDetached = s(function (t) {
            return 1 & t.compareDocumentPosition(z.createElement("fieldset"))
        }), s(function (t) {
            return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
        }) || o("type|href|height|width", function (t, e, i) {
            if (!i) return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
        }), C.attributes && s(function (t) {
            return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
        }) || o("value", function (t, e, i) {
            if (!i && "input" === t.nodeName.toLowerCase()) return t.defaultValue
        }), s(function (t) {
            return null == t.getAttribute("disabled")
        }) || o(et, function (t, e, i) {
            var n;
            if (!i) return !0 === t[e] ? e.toLowerCase() : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
        }), e
    }(t);
    xt.find = Tt, xt.expr = Tt.selectors, xt.expr[":"] = xt.expr.pseudos, xt.uniqueSort = xt.unique = Tt.uniqueSort, xt.text = Tt.getText, xt.isXMLDoc = Tt.isXML, xt.contains = Tt.contains, xt.escapeSelector = Tt.escape;
    var Et = function (t, e, i) {
        for (var n = [], s = void 0 !== i; (t = t[e]) && 9 !== t.nodeType;) if (1 === t.nodeType) {
            if (s && xt(t).is(i)) break;
            n.push(t)
        }
        return n
    }, St = function (t, e) {
        for (var i = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && i.push(t);
        return i
    }, _t = xt.expr.match.needsContext, kt = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    xt.filter = function (t, e, i) {
        var n = e[0];
        return i && (t = ":not(" + t + ")"), 1 === e.length && 1 === n.nodeType ? xt.find.matchesSelector(n, t) ? [n] : [] : xt.find.matches(t, xt.grep(e, function (t) {
            return 1 === t.nodeType
        }))
    }, xt.fn.extend({
        find: function (t) {
            var e, i, n = this.length, s = this;
            if ("string" != typeof t) return this.pushStack(xt(t).filter(function () {
                for (e = 0; e < n; e++) if (xt.contains(s[e], this)) return !0
            }));
            for (i = this.pushStack([]), e = 0; e < n; e++) xt.find(t, s[e], i);
            return n > 1 ? xt.uniqueSort(i) : i
        }, filter: function (t) {
            return this.pushStack(r(this, t || [], !1))
        }, not: function (t) {
            return this.pushStack(r(this, t || [], !0))
        }, is: function (t) {
            return !!r(this, "string" == typeof t && _t.test(t) ? xt(t) : t || [], !1).length
        }
    });
    var Dt, It = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (xt.fn.init = function (t, e, i) {
        var n, s;
        if (!t) return this;
        if (i = i || Dt, "string" == typeof t) {
            if (!(n = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [null, t, null] : It.exec(t)) || !n[1] && e) return !e || e.jquery ? (e || i).find(t) : this.constructor(e).find(t);
            if (n[1]) {
                if (e = e instanceof xt ? e[0] : e, xt.merge(this, xt.parseHTML(n[1], e && e.nodeType ? e.ownerDocument || e : rt, !0)), kt.test(n[1]) && xt.isPlainObject(e)) for (n in e) yt(this[n]) ? this[n](e[n]) : this.attr(n, e[n]);
                return this
            }
            return (s = rt.getElementById(n[2])) && (this[0] = s, this.length = 1), this
        }
        return t.nodeType ? (this[0] = t, this.length = 1, this) : yt(t) ? void 0 !== i.ready ? i.ready(t) : t(xt) : xt.makeArray(t, this)
    }).prototype = xt.fn, Dt = xt(rt);
    var $t = /^(?:parents|prev(?:Until|All))/, Mt = {children: !0, contents: !0, next: !0, prev: !0};
    xt.fn.extend({
        has: function (t) {
            var e = xt(t, this), i = e.length;
            return this.filter(function () {
                for (var t = 0; t < i; t++) if (xt.contains(this, e[t])) return !0
            })
        }, closest: function (t, e) {
            var i, n = 0, s = this.length, o = [], r = "string" != typeof t && xt(t);
            if (!_t.test(t)) for (; n < s; n++) for (i = this[n]; i && i !== e; i = i.parentNode) if (i.nodeType < 11 && (r ? r.index(i) > -1 : 1 === i.nodeType && xt.find.matchesSelector(i, t))) {
                o.push(i);
                break
            }
            return this.pushStack(o.length > 1 ? xt.uniqueSort(o) : o)
        }, index: function (t) {
            return t ? "string" == typeof t ? ut.call(xt(t), this[0]) : ut.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        }, add: function (t, e) {
            return this.pushStack(xt.uniqueSort(xt.merge(this.get(), xt(t, e))))
        }, addBack: function (t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        }
    }), xt.each({
        parent: function (t) {
            var e = t.parentNode;
            return e && 11 !== e.nodeType ? e : null
        }, parents: function (t) {
            return Et(t, "parentNode")
        }, parentsUntil: function (t, e, i) {
            return Et(t, "parentNode", i)
        }, next: function (t) {
            return a(t, "nextSibling")
        }, prev: function (t) {
            return a(t, "previousSibling")
        }, nextAll: function (t) {
            return Et(t, "nextSibling")
        }, prevAll: function (t) {
            return Et(t, "previousSibling")
        }, nextUntil: function (t, e, i) {
            return Et(t, "nextSibling", i)
        }, prevUntil: function (t, e, i) {
            return Et(t, "previousSibling", i)
        }, siblings: function (t) {
            return St((t.parentNode || {}).firstChild, t)
        }, children: function (t) {
            return St(t.firstChild)
        }, contents: function (t) {
            return o(t, "iframe") ? t.contentDocument : (o(t, "template") && (t = t.content || t), xt.merge([], t.childNodes))
        }
    }, function (t, e) {
        xt.fn[t] = function (i, n) {
            var s = xt.map(this, e, i);
            return "Until" !== t.slice(-5) && (n = i), n && "string" == typeof n && (s = xt.filter(n, s)), this.length > 1 && (Mt[t] || xt.uniqueSort(s), $t.test(t) && s.reverse()), this.pushStack(s)
        }
    });
    var Pt = /[^\x20\t\r\n\f]+/g;
    xt.Callbacks = function (t) {
        t = "string" == typeof t ? l(t) : xt.extend({}, t);
        var e, i, s, o, r = [], a = [], h = -1, d = function () {
            for (o = o || t.once, s = e = !0; a.length; h = -1) for (i = a.shift(); ++h < r.length;) !1 === r[h].apply(i[0], i[1]) && t.stopOnFalse && (h = r.length, i = !1);
            t.memory || (i = !1), e = !1, o && (r = i ? [] : "")
        }, u = {
            add: function () {
                return r && (i && !e && (h = r.length - 1, a.push(i)), function s(e) {
                    xt.each(e, function (e, i) {
                        yt(i) ? t.unique && u.has(i) || r.push(i) : i && i.length && "string" !== n(i) && s(i)
                    })
                }(arguments), i && !e && d()), this
            }, remove: function () {
                return xt.each(arguments, function (t, e) {
                    for (var i; (i = xt.inArray(e, r, i)) > -1;) r.splice(i, 1), i <= h && h--
                }), this
            }, has: function (t) {
                return t ? xt.inArray(t, r) > -1 : r.length > 0
            }, empty: function () {
                return r && (r = []), this
            }, disable: function () {
                return o = a = [], r = i = "", this
            }, disabled: function () {
                return !r
            }, lock: function () {
                return o = a = [], i || e || (r = i = ""), this
            }, locked: function () {
                return !!o
            }, fireWith: function (t, i) {
                return o || (i = [t, (i = i || []).slice ? i.slice() : i], a.push(i), e || d()), this
            }, fire: function () {
                return u.fireWith(this, arguments), this
            }, fired: function () {
                return !!s
            }
        };
        return u
    }, xt.extend({
        Deferred: function (e) {
            var i = [["notify", "progress", xt.Callbacks("memory"), xt.Callbacks("memory"), 2], ["resolve", "done", xt.Callbacks("once memory"), xt.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", xt.Callbacks("once memory"), xt.Callbacks("once memory"), 1, "rejected"]],
                n = "pending", s = {
                    state: function () {
                        return n
                    }, always: function () {
                        return o.done(arguments).fail(arguments), this
                    }, "catch": function (t) {
                        return s.then(null, t)
                    }, pipe: function () {
                        var t = arguments;
                        return xt.Deferred(function (e) {
                            xt.each(i, function (i, n) {
                                var s = yt(t[n[4]]) && t[n[4]];
                                o[n[1]](function () {
                                    var t = s && s.apply(this, arguments);
                                    t && yt(t.promise) ? t.promise().progress(e.notify).done(e.resolve).fail(e.reject) : e[n[0] + "With"](this, s ? [t] : arguments)
                                })
                            }), t = null
                        }).promise()
                    }, then: function (e, n, s) {
                        function o(e, i, n, s) {
                            return function () {
                                var a = this, l = arguments, u = function () {
                                    var t, u;
                                    if (!(e < r)) {
                                        if ((t = n.apply(a, l)) === i.promise()) throw new TypeError("Thenable self-resolution");
                                        u = t && ("object" == typeof t || "function" == typeof t) && t.then, yt(u) ? s ? u.call(t, o(r, i, h, s), o(r, i, d, s)) : (r++, u.call(t, o(r, i, h, s), o(r, i, d, s), o(r, i, h, i.notifyWith))) : (n !== h && (a = void 0, l = [t]), (s || i.resolveWith)(a, l))
                                    }
                                }, c = s ? u : function () {
                                    try {
                                        u()
                                    } catch (t) {
                                        xt.Deferred.exceptionHook && xt.Deferred.exceptionHook(t, c.stackTrace), e + 1 >= r && (n !== d && (a = void 0, l = [t]), i.rejectWith(a, l))
                                    }
                                };
                                e ? c() : (xt.Deferred.getStackHook && (c.stackTrace = xt.Deferred.getStackHook()), t.setTimeout(c))
                            }
                        }

                        var r = 0;
                        return xt.Deferred(function (t) {
                            i[0][3].add(o(0, t, yt(s) ? s : h, t.notifyWith)), i[1][3].add(o(0, t, yt(e) ? e : h)), i[2][3].add(o(0, t, yt(n) ? n : d))
                        }).promise()
                    }, promise: function (t) {
                        return null != t ? xt.extend(t, s) : s
                    }
                }, o = {};
            return xt.each(i, function (t, e) {
                var r = e[2], a = e[5];
                s[e[1]] = r.add, a && r.add(function () {
                    n = a
                }, i[3 - t][2].disable, i[3 - t][3].disable, i[0][2].lock, i[0][3].lock), r.add(e[3].fire), o[e[0]] = function () {
                    return o[e[0] + "With"](this === o ? void 0 : this, arguments), this
                }, o[e[0] + "With"] = r.fireWith
            }), s.promise(o), e && e.call(o, o), o
        }, when: function (t) {
            var e = arguments.length, i = e, n = Array(i), s = lt.call(arguments), o = xt.Deferred(), r = function (t) {
                return function (i) {
                    n[t] = this, s[t] = arguments.length > 1 ? lt.call(arguments) : i, --e || o.resolveWith(n, s)
                }
            };
            if (e <= 1 && (u(t, o.done(r(i)).resolve, o.reject, !e), "pending" === o.state() || yt(s[i] && s[i].then))) return o.then();
            for (; i--;) u(s[i], r(i), o.reject);
            return o.promise()
        }
    });
    var zt = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    xt.Deferred.exceptionHook = function (e, i) {
        t.console && t.console.warn && e && zt.test(e.name) && t.console.warn("jQuery.Deferred exception: " + e.message, e.stack, i)
    }, xt.readyException = function (e) {
        t.setTimeout(function () {
            throw e
        })
    };
    var At = xt.Deferred();
    xt.fn.ready = function (t) {
        return At.then(t)["catch"](function (t) {
            xt.readyException(t)
        }), this
    }, xt.extend({
        isReady: !1, readyWait: 1, ready: function (t) {
            (!0 === t ? --xt.readyWait : xt.isReady) || (xt.isReady = !0, !0 !== t && --xt.readyWait > 0 || At.resolveWith(rt, [xt]))
        }
    }), xt.ready.then = At.then, "complete" === rt.readyState || "loading" !== rt.readyState && !rt.documentElement.doScroll ? t.setTimeout(xt.ready) : (rt.addEventListener("DOMContentLoaded", c), t.addEventListener("load", c));
    var Ot = function (t, e, i, s, o, r, a) {
        var l = 0, h = t.length, d = null == i;
        if ("object" === n(i)) {
            o = !0;
            for (l in i) Ot(t, e, l, i[l], !0, r, a)
        } else if (void 0 !== s && (o = !0, yt(s) || (a = !0), d && (a ? (e.call(t, s), e = null) : (d = e, e = function (t, e, i) {
            return d.call(xt(t), i)
        })), e)) for (; l < h; l++) e(t[l], i, a ? s : s.call(t[l], l, e(t[l], i)));
        return o ? t : d ? e.call(t) : h ? e(t[0], i) : r
    }, Lt = /^-ms-/, Nt = /-([a-z])/g, jt = function (t) {
        return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
    };
    m.uid = 1, m.prototype = {
        cache: function (t) {
            var e = t[this.expando];
            return e || (e = {}, jt(t) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, {
                value: e,
                configurable: !0
            }))), e
        }, set: function (t, e, i) {
            var n, s = this.cache(t);
            if ("string" == typeof e) s[f(e)] = i; else for (n in e) s[f(n)] = e[n];
            return s
        }, get: function (t, e) {
            return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][f(e)]
        }, access: function (t, e, i) {
            return void 0 === e || e && "string" == typeof e && void 0 === i ? this.get(t, e) : (this.set(t, e, i), void 0 !== i ? i : e)
        }, remove: function (t, e) {
            var i, n = t[this.expando];
            if (void 0 !== n) {
                if (void 0 !== e) {
                    i = (e = Array.isArray(e) ? e.map(f) : (e = f(e)) in n ? [e] : e.match(Pt) || []).length;
                    for (; i--;) delete n[e[i]]
                }
                (void 0 === e || xt.isEmptyObject(n)) && (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando])
            }
        }, hasData: function (t) {
            var e = t[this.expando];
            return void 0 !== e && !xt.isEmptyObject(e)
        }
    };
    var Wt = new m, Rt = new m, Ht = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, Ft = /[A-Z]/g;
    xt.extend({
        hasData: function (t) {
            return Rt.hasData(t) || Wt.hasData(t)
        }, data: function (t, e, i) {
            return Rt.access(t, e, i)
        }, removeData: function (t, e) {
            Rt.remove(t, e)
        }, _data: function (t, e, i) {
            return Wt.access(t, e, i)
        }, _removeData: function (t, e) {
            Wt.remove(t, e)
        }
    }), xt.fn.extend({
        data: function (t, e) {
            var i, n, s, o = this[0], r = o && o.attributes;
            if (void 0 === t) {
                if (this.length && (s = Rt.get(o), 1 === o.nodeType && !Wt.get(o, "hasDataAttrs"))) {
                    for (i = r.length; i--;) r[i] && 0 === (n = r[i].name).indexOf("data-") && (n = f(n.slice(5)), v(o, n, s[n]));
                    Wt.set(o, "hasDataAttrs", !0)
                }
                return s
            }
            return "object" == typeof t ? this.each(function () {
                Rt.set(this, t)
            }) : Ot(this, function (e) {
                var i;
                if (o && void 0 === e) {
                    if (void 0 !== (i = Rt.get(o, t))) return i;
                    if (void 0 !== (i = v(o, t))) return i
                } else this.each(function () {
                    Rt.set(this, t, e)
                })
            }, null, e, arguments.length > 1, null, !0)
        }, removeData: function (t) {
            return this.each(function () {
                Rt.remove(this, t)
            })
        }
    }), xt.extend({
        queue: function (t, e, i) {
            var n;
            if (t) return e = (e || "fx") + "queue", n = Wt.get(t, e), i && (!n || Array.isArray(i) ? n = Wt.access(t, e, xt.makeArray(i)) : n.push(i)), n || []
        }, dequeue: function (t, e) {
            e = e || "fx";
            var i = xt.queue(t, e), n = i.length, s = i.shift(), o = xt._queueHooks(t, e), r = function () {
                xt.dequeue(t, e)
            };
            "inprogress" === s && (s = i.shift(), n--), s && ("fx" === e && i.unshift("inprogress"), delete o.stop, s.call(t, r, o)), !n && o && o.empty.fire()
        }, _queueHooks: function (t, e) {
            var i = e + "queueHooks";
            return Wt.get(t, i) || Wt.access(t, i, {
                empty: xt.Callbacks("once memory").add(function () {
                    Wt.remove(t, [e + "queue", i])
                })
            })
        }
    }), xt.fn.extend({
        queue: function (t, e) {
            var i = 2;
            return "string" != typeof t && (e = t, t = "fx", i--), arguments.length < i ? xt.queue(this[0], t) : void 0 === e ? this : this.each(function () {
                var i = xt.queue(this, t, e);
                xt._queueHooks(this, t), "fx" === t && "inprogress" !== i[0] && xt.dequeue(this, t)
            })
        }, dequeue: function (t) {
            return this.each(function () {
                xt.dequeue(this, t)
            })
        }, clearQueue: function (t) {
            return this.queue(t || "fx", [])
        }, promise: function (t, e) {
            var i, n = 1, s = xt.Deferred(), o = this, r = this.length, a = function () {
                --n || s.resolveWith(o, [o])
            };
            for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; r--;) (i = Wt.get(o[r], t + "queueHooks")) && i.empty && (n++, i.empty.add(a));
            return a(), s.promise(e)
        }
    });
    var Vt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, qt = new RegExp("^(?:([+-])=|)(" + Vt + ")([a-z%]*)$", "i"),
        Bt = ["Top", "Right", "Bottom", "Left"], Yt = function (t, e) {
            return "none" === (t = e || t).style.display || "" === t.style.display && xt.contains(t.ownerDocument, t) && "none" === xt.css(t, "display")
        }, Ut = function (t, e, i, n) {
            var s, o, r = {};
            for (o in e) r[o] = t.style[o], t.style[o] = e[o];
            s = i.apply(t, n || []);
            for (o in e) t.style[o] = r[o];
            return s
        }, Xt = {};
    xt.fn.extend({
        show: function () {
            return b(this, !0)
        }, hide: function () {
            return b(this)
        }, toggle: function (t) {
            return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function () {
                Yt(this) ? xt(this).show() : xt(this).hide()
            })
        }
    });
    var Gt = /^(?:checkbox|radio)$/i, Qt = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i, Zt = /^$|^module$|\/(?:java|ecma)script/i,
        Kt = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    Kt.optgroup = Kt.option, Kt.tbody = Kt.tfoot = Kt.colgroup = Kt.caption = Kt.thead, Kt.th = Kt.td;
    var Jt = /<|&#?\w+;/;
    !function () {
        var t = rt.createDocumentFragment().appendChild(rt.createElement("div")), e = rt.createElement("input");
        e.setAttribute("type", "radio"), e.setAttribute("checked", "checked"), e.setAttribute("name", "t"), t.appendChild(e), vt.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", vt.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
    }();
    var te = rt.documentElement, ee = /^key/, ie = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        ne = /^([^.]*)(?:\.(.+)|)/;
    xt.event = {
        global: {}, add: function (t, e, i, n, s) {
            var o, r, a, l, h, d, u, c, p, f, m, g = Wt.get(t);
            if (g) for (i.handler && (i = (o = i).handler, s = o.selector), s && xt.find.matchesSelector(te, s), i.guid || (i.guid = xt.guid++), (l = g.events) || (l = g.events = {}), (r = g.handle) || (r = g.handle = function (e) {
                return "undefined" != typeof xt && xt.event.triggered !== e.type ? xt.event.dispatch.apply(t, arguments) : void 0
            }), h = (e = (e || "").match(Pt) || [""]).length; h--;) p = m = (a = ne.exec(e[h]) || [])[1], f = (a[2] || "").split(".").sort(), p && (u = xt.event.special[p] || {}, p = (s ? u.delegateType : u.bindType) || p, u = xt.event.special[p] || {}, d = xt.extend({
                type: p,
                origType: m,
                data: n,
                handler: i,
                guid: i.guid,
                selector: s,
                needsContext: s && xt.expr.match.needsContext.test(s),
                namespace: f.join(".")
            }, o), (c = l[p]) || ((c = l[p] = []).delegateCount = 0, u.setup && !1 !== u.setup.call(t, n, f, r) || t.addEventListener && t.addEventListener(p, r)), u.add && (u.add.call(t, d), d.handler.guid || (d.handler.guid = i.guid)), s ? c.splice(c.delegateCount++, 0, d) : c.push(d), xt.event.global[p] = !0)
        }, remove: function (t, e, i, n, s) {
            var o, r, a, l, h, d, u, c, p, f, m, g = Wt.hasData(t) && Wt.get(t);
            if (g && (l = g.events)) {
                for (h = (e = (e || "").match(Pt) || [""]).length; h--;) if (a = ne.exec(e[h]) || [], p = m = a[1], f = (a[2] || "").split(".").sort(), p) {
                    for (u = xt.event.special[p] || {}, c = l[p = (n ? u.delegateType : u.bindType) || p] || [], a = a[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), r = o = c.length; o--;) d = c[o], !s && m !== d.origType || i && i.guid !== d.guid || a && !a.test(d.namespace) || n && n !== d.selector && ("**" !== n || !d.selector) || (c.splice(o, 1), d.selector && c.delegateCount--, u.remove && u.remove.call(t, d));
                    r && !c.length && (u.teardown && !1 !== u.teardown.call(t, f, g.handle) || xt.removeEvent(t, p, g.handle), delete l[p])
                } else for (p in l) xt.event.remove(t, p + e[h], i, n, !0);
                xt.isEmptyObject(l) && Wt.remove(t, "handle events")
            }
        }, dispatch: function (t) {
            var e, i, n, s, o, r, a = xt.event.fix(t), l = new Array(arguments.length),
                h = (Wt.get(this, "events") || {})[a.type] || [], d = xt.event.special[a.type] || {};
            for (l[0] = a, e = 1; e < arguments.length; e++) l[e] = arguments[e];
            if (a.delegateTarget = this, !d.preDispatch || !1 !== d.preDispatch.call(this, a)) {
                for (r = xt.event.handlers.call(this, a, h), e = 0; (s = r[e++]) && !a.isPropagationStopped();) for (a.currentTarget = s.elem, i = 0; (o = s.handlers[i++]) && !a.isImmediatePropagationStopped();) a.rnamespace && !a.rnamespace.test(o.namespace) || (a.handleObj = o, a.data = o.data, void 0 !== (n = ((xt.event.special[o.origType] || {}).handle || o.handler).apply(s.elem, l)) && !1 === (a.result = n) && (a.preventDefault(), a.stopPropagation()));
                return d.postDispatch && d.postDispatch.call(this, a), a.result
            }
        }, handlers: function (t, e) {
            var i, n, s, o, r, a = [], l = e.delegateCount, h = t.target;
            if (l && h.nodeType && !("click" === t.type && t.button >= 1)) for (; h !== this; h = h.parentNode || this) if (1 === h.nodeType && ("click" !== t.type || !0 !== h.disabled)) {
                for (o = [], r = {}, i = 0; i < l; i++) void 0 === r[s = (n = e[i]).selector + " "] && (r[s] = n.needsContext ? xt(s, this).index(h) > -1 : xt.find(s, this, null, [h]).length), r[s] && o.push(n);
                o.length && a.push({elem: h, handlers: o})
            }
            return h = this, l < e.length && a.push({elem: h, handlers: e.slice(l)}), a
        }, addProp: function (t, e) {
            Object.defineProperty(xt.Event.prototype, t, {
                enumerable: !0, configurable: !0, get: yt(e) ? function () {
                    if (this.originalEvent) return e(this.originalEvent)
                } : function () {
                    if (this.originalEvent) return this.originalEvent[t]
                }, set: function (e) {
                    Object.defineProperty(this, t, {enumerable: !0, configurable: !0, writable: !0, value: e})
                }
            })
        }, fix: function (t) {
            return t[xt.expando] ? t : new xt.Event(t)
        }, special: {
            load: {noBubble: !0}, focus: {
                trigger: function () {
                    if (this !== _() && this.focus) return this.focus(), !1
                }, delegateType: "focusin"
            }, blur: {
                trigger: function () {
                    if (this === _() && this.blur) return this.blur(), !1
                }, delegateType: "focusout"
            }, click: {
                trigger: function () {
                    if ("checkbox" === this.type && this.click && o(this, "input")) return this.click(), !1
                }, _default: function (t) {
                    return o(t.target, "a")
                }
            }, beforeunload: {
                postDispatch: function (t) {
                    void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                }
            }
        }
    }, xt.removeEvent = function (t, e, i) {
        t.removeEventListener && t.removeEventListener(e, i)
    }, xt.Event = function (t, e) {
        return this instanceof xt.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && !1 === t.returnValue ? E : S, this.target = t.target && 3 === t.target.nodeType ? t.target.parentNode : t.target, this.currentTarget = t.currentTarget, this.relatedTarget = t.relatedTarget) : this.type = t, e && xt.extend(this, e), this.timeStamp = t && t.timeStamp || Date.now(), this[xt.expando] = !0, void 0) : new xt.Event(t, e)
    }, xt.Event.prototype = {
        constructor: xt.Event,
        isDefaultPrevented: S,
        isPropagationStopped: S,
        isImmediatePropagationStopped: S,
        isSimulated: !1,
        preventDefault: function () {
            var t = this.originalEvent;
            this.isDefaultPrevented = E, t && !this.isSimulated && t.preventDefault()
        },
        stopPropagation: function () {
            var t = this.originalEvent;
            this.isPropagationStopped = E, t && !this.isSimulated && t.stopPropagation()
        },
        stopImmediatePropagation: function () {
            var t = this.originalEvent;
            this.isImmediatePropagationStopped = E, t && !this.isSimulated && t.stopImmediatePropagation(), this.stopPropagation()
        }
    }, xt.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        "char": !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function (t) {
            var e = t.button;
            return null == t.which && ee.test(t.type) ? null != t.charCode ? t.charCode : t.keyCode : !t.which && void 0 !== e && ie.test(t.type) ? 1 & e ? 1 : 2 & e ? 3 : 4 & e ? 2 : 0 : t.which
        }
    }, xt.event.addProp), xt.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (t, e) {
        xt.event.special[t] = {
            delegateType: e, bindType: e, handle: function (t) {
                var i, n = this, s = t.relatedTarget, o = t.handleObj;
                return s && (s === n || xt.contains(n, s)) || (t.type = o.origType, i = o.handler.apply(this, arguments), t.type = e), i
            }
        }
    }), xt.fn.extend({
        on: function (t, e, i, n) {
            return k(this, t, e, i, n)
        }, one: function (t, e, i, n) {
            return k(this, t, e, i, n, 1)
        }, off: function (t, e, i) {
            var n, s;
            if (t && t.preventDefault && t.handleObj) return n = t.handleObj, xt(t.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), this;
            if ("object" == typeof t) {
                for (s in t) this.off(s, e, t[s]);
                return this
            }
            return !1 !== e && "function" != typeof e || (i = e, e = void 0), !1 === i && (i = S), this.each(function () {
                xt.event.remove(this, t, i, e)
            })
        }
    });
    var se = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        oe = /<script|<style|<link/i, re = /checked\s*(?:[^=]|=\s*.checked.)/i,
        ae = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    xt.extend({
        htmlPrefilter: function (t) {
            return t.replace(se, "<$1></$2>")
        }, clone: function (t, e, i) {
            var n, s, o, r, a = t.cloneNode(!0), l = xt.contains(t.ownerDocument, t);
            if (!(vt.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || xt.isXMLDoc(t))) for (r = x(a), n = 0, s = (o = x(t)).length; n < s; n++) P(o[n], r[n]);
            if (e) if (i) for (o = o || x(t), r = r || x(a), n = 0, s = o.length; n < s; n++) M(o[n], r[n]); else M(t, a);
            return (r = x(a, "script")).length > 0 && C(r, !l && x(t, "script")), a
        }, cleanData: function (t) {
            for (var e, i, n, s = xt.event.special, o = 0; void 0 !== (i = t[o]); o++) if (jt(i)) {
                if (e = i[Wt.expando]) {
                    if (e.events) for (n in e.events) s[n] ? xt.event.remove(i, n) : xt.removeEvent(i, n, e.handle);
                    i[Wt.expando] = void 0
                }
                i[Rt.expando] && (i[Rt.expando] = void 0)
            }
        }
    }), xt.fn.extend({
        detach: function (t) {
            return A(this, t, !0)
        }, remove: function (t) {
            return A(this, t)
        }, text: function (t) {
            return Ot(this, function (t) {
                return void 0 === t ? xt.text(this) : this.empty().each(function () {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t)
                })
            }, null, t, arguments.length)
        }, append: function () {
            return z(this, arguments, function (t) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || D(this, t).appendChild(t)
            })
        }, prepend: function () {
            return z(this, arguments, function (t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = D(this, t);
                    e.insertBefore(t, e.firstChild)
                }
            })
        }, before: function () {
            return z(this, arguments, function (t) {
                this.parentNode && this.parentNode.insertBefore(t, this)
            })
        }, after: function () {
            return z(this, arguments, function (t) {
                this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
            })
        }, empty: function () {
            for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (xt.cleanData(x(t, !1)), t.textContent = "");
            return this
        }, clone: function (t, e) {
            return t = null != t && t, e = null == e ? t : e, this.map(function () {
                return xt.clone(this, t, e)
            })
        }, html: function (t) {
            return Ot(this, function (t) {
                var e = this[0] || {}, i = 0, n = this.length;
                if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                if ("string" == typeof t && !oe.test(t) && !Kt[(Qt.exec(t) || ["", ""])[1].toLowerCase()]) {
                    t = xt.htmlPrefilter(t);
                    try {
                        for (; i < n; i++) 1 === (e = this[i] || {}).nodeType && (xt.cleanData(x(e, !1)), e.innerHTML = t);
                        e = 0
                    } catch (t) {
                    }
                }
                e && this.empty().append(t)
            }, null, t, arguments.length)
        }, replaceWith: function () {
            var t = [];
            return z(this, arguments, function (e) {
                var i = this.parentNode;
                xt.inArray(this, t) < 0 && (xt.cleanData(x(this)), i && i.replaceChild(e, this))
            }, t)
        }
    }), xt.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (t, e) {
        xt.fn[t] = function (t) {
            for (var i, n = [], s = xt(t), o = s.length - 1, r = 0; r <= o; r++) i = r === o ? this : this.clone(!0), xt(s[r])[e](i), dt.apply(n, i.get());
            return this.pushStack(n)
        }
    });
    var le = new RegExp("^(" + Vt + ")(?!px)[a-z%]+$", "i"), he = function (e) {
        var i = e.ownerDocument.defaultView;
        return i && i.opener || (i = t), i.getComputedStyle(e)
    }, de = new RegExp(Bt.join("|"), "i");
    !function () {
        function e() {
            if (h) {
                l.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", h.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", te.appendChild(l).appendChild(h);
                var e = t.getComputedStyle(h);
                n = "1%" !== e.top, a = 12 === i(e.marginLeft), h.style.right = "60%", r = 36 === i(e.right), s = 36 === i(e.width), h.style.position = "absolute", o = 36 === h.offsetWidth || "absolute", te.removeChild(l), h = null
            }
        }

        function i(t) {
            return Math.round(parseFloat(t))
        }

        var n, s, o, r, a, l = rt.createElement("div"), h = rt.createElement("div");
        h.style && (h.style.backgroundClip = "content-box", h.cloneNode(!0).style.backgroundClip = "", vt.clearCloneStyle = "content-box" === h.style.backgroundClip, xt.extend(vt, {
            boxSizingReliable: function () {
                return e(), s
            }, pixelBoxStyles: function () {
                return e(), r
            }, pixelPosition: function () {
                return e(), n
            }, reliableMarginLeft: function () {
                return e(), a
            }, scrollboxSize: function () {
                return e(), o
            }
        }))
    }();
    var ue = /^(none|table(?!-c[ea]).+)/, ce = /^--/,
        pe = {position: "absolute", visibility: "hidden", display: "block"},
        fe = {letterSpacing: "0", fontWeight: "400"}, me = ["Webkit", "Moz", "ms"], ge = rt.createElement("div").style;
    xt.extend({
        cssHooks: {
            opacity: {
                get: function (t, e) {
                    if (e) {
                        var i = O(t, "opacity");
                        return "" === i ? "1" : i
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function (t, e, i, n) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                var s, o, r, a = f(e), l = ce.test(e), h = t.style;
                if (l || (e = j(a)), r = xt.cssHooks[e] || xt.cssHooks[a], void 0 === i) return r && "get" in r && void 0 !== (s = r.get(t, !1, n)) ? s : h[e];
                "string" == (o = typeof i) && (s = qt.exec(i)) && s[1] && (i = y(t, e, s), o = "number"), null != i && i === i && ("number" === o && (i += s && s[3] || (xt.cssNumber[a] ? "" : "px")), vt.clearCloneStyle || "" !== i || 0 !== e.indexOf("background") || (h[e] = "inherit"), r && "set" in r && void 0 === (i = r.set(t, i, n)) || (l ? h.setProperty(e, i) : h[e] = i))
            }
        },
        css: function (t, e, i, n) {
            var s, o, r, a = f(e);
            return ce.test(e) || (e = j(a)), (r = xt.cssHooks[e] || xt.cssHooks[a]) && "get" in r && (s = r.get(t, !0, i)), void 0 === s && (s = O(t, e, n)), "normal" === s && e in fe && (s = fe[e]), "" === i || i ? (o = parseFloat(s), !0 === i || isFinite(o) ? o || 0 : s) : s
        }
    }), xt.each(["height", "width"], function (t, e) {
        xt.cssHooks[e] = {
            get: function (t, i, n) {
                if (i) return !ue.test(xt.css(t, "display")) || t.getClientRects().length && t.getBoundingClientRect().width ? H(t, e, n) : Ut(t, pe, function () {
                    return H(t, e, n)
                })
            }, set: function (t, i, n) {
                var s, o = he(t), r = "border-box" === xt.css(t, "boxSizing", !1, o), a = n && R(t, e, n, r, o);
                return r && vt.scrollboxSize() === o.position && (a -= Math.ceil(t["offset" + e[0].toUpperCase() + e.slice(1)] - parseFloat(o[e]) - R(t, e, "border", !1, o) - .5)), a && (s = qt.exec(i)) && "px" !== (s[3] || "px") && (t.style[e] = i, i = xt.css(t, e)), W(t, i, a)
            }
        }
    }), xt.cssHooks.marginLeft = L(vt.reliableMarginLeft, function (t, e) {
        if (e) return (parseFloat(O(t, "marginLeft")) || t.getBoundingClientRect().left - Ut(t, {marginLeft: 0}, function () {
            return t.getBoundingClientRect().left
        })) + "px"
    }), xt.each({margin: "", padding: "", border: "Width"}, function (t, e) {
        xt.cssHooks[t + e] = {
            expand: function (i) {
                for (var n = 0, s = {}, o = "string" == typeof i ? i.split(" ") : [i]; n < 4; n++) s[t + Bt[n] + e] = o[n] || o[n - 2] || o[0];
                return s
            }
        }, "margin" !== t && (xt.cssHooks[t + e].set = W)
    }), xt.fn.extend({
        css: function (t, e) {
            return Ot(this, function (t, e, i) {
                var n, s, o = {}, r = 0;
                if (Array.isArray(e)) {
                    for (n = he(t), s = e.length; r < s; r++) o[e[r]] = xt.css(t, e[r], !1, n);
                    return o
                }
                return void 0 !== i ? xt.style(t, e, i) : xt.css(t, e)
            }, t, e, arguments.length > 1)
        }
    }), xt.Tween = F, F.prototype = {
        constructor: F, init: function (t, e, i, n, s, o) {
            this.elem = t, this.prop = i, this.easing = s || xt.easing._default, this.options = e, this.start = this.now = this.cur(), this.end = n, this.unit = o || (xt.cssNumber[i] ? "" : "px")
        }, cur: function () {
            var t = F.propHooks[this.prop];
            return t && t.get ? t.get(this) : F.propHooks._default.get(this)
        }, run: function (t) {
            var e, i = F.propHooks[this.prop];
            return this.options.duration ? this.pos = e = xt.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), i && i.set ? i.set(this) : F.propHooks._default.set(this), this
        }
    }, F.prototype.init.prototype = F.prototype, F.propHooks = {
        _default: {
            get: function (t) {
                var e;
                return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = xt.css(t.elem, t.prop, "")) && "auto" !== e ? e : 0
            }, set: function (t) {
                xt.fx.step[t.prop] ? xt.fx.step[t.prop](t) : 1 !== t.elem.nodeType || null == t.elem.style[xt.cssProps[t.prop]] && !xt.cssHooks[t.prop] ? t.elem[t.prop] = t.now : xt.style(t.elem, t.prop, t.now + t.unit)
            }
        }
    }, F.propHooks.scrollTop = F.propHooks.scrollLeft = {
        set: function (t) {
            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
        }
    }, xt.easing = {
        linear: function (t) {
            return t
        }, swing: function (t) {
            return .5 - Math.cos(t * Math.PI) / 2
        }, _default: "swing"
    }, xt.fx = F.prototype.init, xt.fx.step = {};
    var ve, ye, we = /^(?:toggle|show|hide)$/, be = /queueHooks$/;
    xt.Animation = xt.extend(G, {
        tweeners: {
            "*": [function (t, e) {
                var i = this.createTween(t, e);
                return y(i.elem, t, qt.exec(e), i), i
            }]
        }, tweener: function (t, e) {
            yt(t) ? (e = t, t = ["*"]) : t = t.match(Pt);
            for (var i, n = 0, s = t.length; n < s; n++) i = t[n], G.tweeners[i] = G.tweeners[i] || [], G.tweeners[i].unshift(e)
        }, prefilters: [U], prefilter: function (t, e) {
            e ? G.prefilters.unshift(t) : G.prefilters.push(t)
        }
    }), xt.speed = function (t, e, i) {
        var n = t && "object" == typeof t ? xt.extend({}, t) : {
            complete: i || !i && e || yt(t) && t,
            duration: t,
            easing: i && e || e && !yt(e) && e
        };
        return xt.fx.off ? n.duration = 0 : "number" != typeof n.duration && (n.duration in xt.fx.speeds ? n.duration = xt.fx.speeds[n.duration] : n.duration = xt.fx.speeds._default), null != n.queue && !0 !== n.queue || (n.queue = "fx"), n.old = n.complete, n.complete = function () {
            yt(n.old) && n.old.call(this), n.queue && xt.dequeue(this, n.queue)
        }, n
    }, xt.fn.extend({
        fadeTo: function (t, e, i, n) {
            return this.filter(Yt).css("opacity", 0).show().end().animate({opacity: e}, t, i, n)
        }, animate: function (t, e, i, n) {
            var s = xt.isEmptyObject(t), o = xt.speed(e, i, n), r = function () {
                var e = G(this, xt.extend({}, t), o);
                (s || Wt.get(this, "finish")) && e.stop(!0)
            };
            return r.finish = r, s || !1 === o.queue ? this.each(r) : this.queue(o.queue, r)
        }, stop: function (t, e, i) {
            var n = function (t) {
                var e = t.stop;
                delete t.stop, e(i)
            };
            return "string" != typeof t && (i = e, e = t, t = void 0), e && !1 !== t && this.queue(t || "fx", []), this.each(function () {
                var e = !0, s = null != t && t + "queueHooks", o = xt.timers, r = Wt.get(this);
                if (s) r[s] && r[s].stop && n(r[s]); else for (s in r) r[s] && r[s].stop && be.test(s) && n(r[s]);
                for (s = o.length; s--;) o[s].elem !== this || null != t && o[s].queue !== t || (o[s].anim.stop(i), e = !1, o.splice(s, 1));
                !e && i || xt.dequeue(this, t)
            })
        }, finish: function (t) {
            return !1 !== t && (t = t || "fx"),
                this.each(function () {
                    var e, i = Wt.get(this), n = i[t + "queue"], s = i[t + "queueHooks"], o = xt.timers,
                        r = n ? n.length : 0;
                    for (i.finish = !0, xt.queue(this, t, []), s && s.stop && s.stop.call(this, !0), e = o.length; e--;) o[e].elem === this && o[e].queue === t && (o[e].anim.stop(!0), o.splice(e, 1));
                    for (e = 0; e < r; e++) n[e] && n[e].finish && n[e].finish.call(this);
                    delete i.finish
                })
        }
    }), xt.each(["toggle", "show", "hide"], function (t, e) {
        var i = xt.fn[e];
        xt.fn[e] = function (t, n, s) {
            return null == t || "boolean" == typeof t ? i.apply(this, arguments) : this.animate(B(e, !0), t, n, s)
        }
    }), xt.each({
        slideDown: B("show"),
        slideUp: B("hide"),
        slideToggle: B("toggle"),
        fadeIn: {opacity: "show"},
        fadeOut: {opacity: "hide"},
        fadeToggle: {opacity: "toggle"}
    }, function (t, e) {
        xt.fn[t] = function (t, i, n) {
            return this.animate(e, t, i, n)
        }
    }), xt.timers = [], xt.fx.tick = function () {
        var t, e = 0, i = xt.timers;
        for (ve = Date.now(); e < i.length; e++) (t = i[e])() || i[e] !== t || i.splice(e--, 1);
        i.length || xt.fx.stop(), ve = void 0
    }, xt.fx.timer = function (t) {
        xt.timers.push(t), xt.fx.start()
    }, xt.fx.interval = 13, xt.fx.start = function () {
        ye || (ye = !0, V())
    }, xt.fx.stop = function () {
        ye = null
    }, xt.fx.speeds = {slow: 600, fast: 200, _default: 400}, xt.fn.delay = function (e, i) {
        return e = xt.fx ? xt.fx.speeds[e] || e : e, i = i || "fx", this.queue(i, function (i, n) {
            var s = t.setTimeout(i, e);
            n.stop = function () {
                t.clearTimeout(s)
            }
        })
    }, function () {
        var t = rt.createElement("input"), e = rt.createElement("select").appendChild(rt.createElement("option"));
        t.type = "checkbox", vt.checkOn = "" !== t.value, vt.optSelected = e.selected, (t = rt.createElement("input")).value = "t", t.type = "radio", vt.radioValue = "t" === t.value
    }();
    var xe, Ce = xt.expr.attrHandle;
    xt.fn.extend({
        attr: function (t, e) {
            return Ot(this, xt.attr, t, e, arguments.length > 1)
        }, removeAttr: function (t) {
            return this.each(function () {
                xt.removeAttr(this, t)
            })
        }
    }), xt.extend({
        attr: function (t, e, i) {
            var n, s, o = t.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof t.getAttribute ? xt.prop(t, e, i) : (1 === o && xt.isXMLDoc(t) || (s = xt.attrHooks[e.toLowerCase()] || (xt.expr.match.bool.test(e) ? xe : void 0)), void 0 !== i ? null === i ? void xt.removeAttr(t, e) : s && "set" in s && void 0 !== (n = s.set(t, i, e)) ? n : (t.setAttribute(e, i + ""), i) : s && "get" in s && null !== (n = s.get(t, e)) ? n : null == (n = xt.find.attr(t, e)) ? void 0 : n)
        }, attrHooks: {
            type: {
                set: function (t, e) {
                    if (!vt.radioValue && "radio" === e && o(t, "input")) {
                        var i = t.value;
                        return t.setAttribute("type", e), i && (t.value = i), e
                    }
                }
            }
        }, removeAttr: function (t, e) {
            var i, n = 0, s = e && e.match(Pt);
            if (s && 1 === t.nodeType) for (; i = s[n++];) t.removeAttribute(i)
        }
    }), xe = {
        set: function (t, e, i) {
            return !1 === e ? xt.removeAttr(t, i) : t.setAttribute(i, i), i
        }
    }, xt.each(xt.expr.match.bool.source.match(/\w+/g), function (t, e) {
        var i = Ce[e] || xt.find.attr;
        Ce[e] = function (t, e, n) {
            var s, o, r = e.toLowerCase();
            return n || (o = Ce[r], Ce[r] = s, s = null != i(t, e, n) ? r : null, Ce[r] = o), s
        }
    });
    var Te = /^(?:input|select|textarea|button)$/i, Ee = /^(?:a|area)$/i;
    xt.fn.extend({
        prop: function (t, e) {
            return Ot(this, xt.prop, t, e, arguments.length > 1)
        }, removeProp: function (t) {
            return this.each(function () {
                delete this[xt.propFix[t] || t]
            })
        }
    }), xt.extend({
        prop: function (t, e, i) {
            var n, s, o = t.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && xt.isXMLDoc(t) || (e = xt.propFix[e] || e, s = xt.propHooks[e]), void 0 !== i ? s && "set" in s && void 0 !== (n = s.set(t, i, e)) ? n : t[e] = i : s && "get" in s && null !== (n = s.get(t, e)) ? n : t[e]
        }, propHooks: {
            tabIndex: {
                get: function (t) {
                    var e = xt.find.attr(t, "tabindex");
                    return e ? parseInt(e, 10) : Te.test(t.nodeName) || Ee.test(t.nodeName) && t.href ? 0 : -1
                }
            }
        }, propFix: {"for": "htmlFor", "class": "className"}
    }), vt.optSelected || (xt.propHooks.selected = {
        get: function (t) {
            var e = t.parentNode;
            return e && e.parentNode && e.parentNode.selectedIndex, null
        }, set: function (t) {
            var e = t.parentNode;
            e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex)
        }
    }), xt.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        xt.propFix[this.toLowerCase()] = this
    }), xt.fn.extend({
        addClass: function (t) {
            var e, i, n, s, o, r, a, l = 0;
            if (yt(t)) return this.each(function (e) {
                xt(this).addClass(t.call(this, e, Z(this)))
            });
            if ((e = K(t)).length) for (; i = this[l++];) if (s = Z(i), n = 1 === i.nodeType && " " + Q(s) + " ") {
                for (r = 0; o = e[r++];) n.indexOf(" " + o + " ") < 0 && (n += o + " ");
                s !== (a = Q(n)) && i.setAttribute("class", a)
            }
            return this
        }, removeClass: function (t) {
            var e, i, n, s, o, r, a, l = 0;
            if (yt(t)) return this.each(function (e) {
                xt(this).removeClass(t.call(this, e, Z(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ((e = K(t)).length) for (; i = this[l++];) if (s = Z(i), n = 1 === i.nodeType && " " + Q(s) + " ") {
                for (r = 0; o = e[r++];) for (; n.indexOf(" " + o + " ") > -1;) n = n.replace(" " + o + " ", " ");
                s !== (a = Q(n)) && i.setAttribute("class", a)
            }
            return this
        }, toggleClass: function (t, e) {
            var i = typeof t, n = "string" === i || Array.isArray(t);
            return "boolean" == typeof e && n ? e ? this.addClass(t) : this.removeClass(t) : yt(t) ? this.each(function (i) {
                xt(this).toggleClass(t.call(this, i, Z(this), e), e)
            }) : this.each(function () {
                var e, s, o, r;
                if (n) for (s = 0, o = xt(this), r = K(t); e = r[s++];) o.hasClass(e) ? o.removeClass(e) : o.addClass(e); else void 0 !== t && "boolean" !== i || ((e = Z(this)) && Wt.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === t ? "" : Wt.get(this, "__className__") || ""))
            })
        }, hasClass: function (t) {
            var e, i, n = 0;
            for (e = " " + t + " "; i = this[n++];) if (1 === i.nodeType && (" " + Q(Z(i)) + " ").indexOf(e) > -1) return !0;
            return !1
        }
    });
    var Se = /\r/g;
    xt.fn.extend({
        val: function (t) {
            var e, i, n, s = this[0];
            return arguments.length ? (n = yt(t), this.each(function (i) {
                var s;
                1 === this.nodeType && (null == (s = n ? t.call(this, i, xt(this).val()) : t) ? s = "" : "number" == typeof s ? s += "" : Array.isArray(s) && (s = xt.map(s, function (t) {
                    return null == t ? "" : t + ""
                })), (e = xt.valHooks[this.type] || xt.valHooks[this.nodeName.toLowerCase()]) && "set" in e && void 0 !== e.set(this, s, "value") || (this.value = s))
            })) : s ? (e = xt.valHooks[s.type] || xt.valHooks[s.nodeName.toLowerCase()]) && "get" in e && void 0 !== (i = e.get(s, "value")) ? i : "string" == typeof (i = s.value) ? i.replace(Se, "") : null == i ? "" : i : void 0
        }
    }), xt.extend({
        valHooks: {
            option: {
                get: function (t) {
                    var e = xt.find.attr(t, "value");
                    return null != e ? e : Q(xt.text(t))
                }
            }, select: {
                get: function (t) {
                    var e, i, n, s = t.options, r = t.selectedIndex, a = "select-one" === t.type, l = a ? null : [],
                        h = a ? r + 1 : s.length;
                    for (n = r < 0 ? h : a ? r : 0; n < h; n++) if (((i = s[n]).selected || n === r) && !i.disabled && (!i.parentNode.disabled || !o(i.parentNode, "optgroup"))) {
                        if (e = xt(i).val(), a) return e;
                        l.push(e)
                    }
                    return l
                }, set: function (t, e) {
                    for (var i, n, s = t.options, o = xt.makeArray(e), r = s.length; r--;) ((n = s[r]).selected = xt.inArray(xt.valHooks.option.get(n), o) > -1) && (i = !0);
                    return i || (t.selectedIndex = -1), o
                }
            }
        }
    }), xt.each(["radio", "checkbox"], function () {
        xt.valHooks[this] = {
            set: function (t, e) {
                if (Array.isArray(e)) return t.checked = xt.inArray(xt(t).val(), e) > -1
            }
        }, vt.checkOn || (xt.valHooks[this].get = function (t) {
            return null === t.getAttribute("value") ? "on" : t.value
        })
    }), vt.focusin = "onfocusin" in t;
    var _e = /^(?:focusinfocus|focusoutblur)$/, ke = function (t) {
        t.stopPropagation()
    };
    xt.extend(xt.event, {
        trigger: function (e, i, n, s) {
            var o, r, a, l, h, d, u, c, p = [n || rt], f = ft.call(e, "type") ? e.type : e,
                m = ft.call(e, "namespace") ? e.namespace.split(".") : [];
            if (r = c = a = n = n || rt, 3 !== n.nodeType && 8 !== n.nodeType && !_e.test(f + xt.event.triggered) && (f.indexOf(".") > -1 && (f = (m = f.split(".")).shift(), m.sort()), h = f.indexOf(":") < 0 && "on" + f, e = e[xt.expando] ? e : new xt.Event(f, "object" == typeof e && e), e.isTrigger = s ? 2 : 3, e.namespace = m.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), i = null == i ? [e] : xt.makeArray(i, [e]), u = xt.event.special[f] || {}, s || !u.trigger || !1 !== u.trigger.apply(n, i))) {
                if (!s && !u.noBubble && !wt(n)) {
                    for (l = u.delegateType || f, _e.test(l + f) || (r = r.parentNode); r; r = r.parentNode) p.push(r), a = r;
                    a === (n.ownerDocument || rt) && p.push(a.defaultView || a.parentWindow || t)
                }
                for (o = 0; (r = p[o++]) && !e.isPropagationStopped();) c = r, e.type = o > 1 ? l : u.bindType || f, (d = (Wt.get(r, "events") || {})[e.type] && Wt.get(r, "handle")) && d.apply(r, i), (d = h && r[h]) && d.apply && jt(r) && (e.result = d.apply(r, i), !1 === e.result && e.preventDefault());
                return e.type = f, s || e.isDefaultPrevented() || u._default && !1 !== u._default.apply(p.pop(), i) || !jt(n) || h && yt(n[f]) && !wt(n) && ((a = n[h]) && (n[h] = null), xt.event.triggered = f, e.isPropagationStopped() && c.addEventListener(f, ke), n[f](), e.isPropagationStopped() && c.removeEventListener(f, ke), xt.event.triggered = void 0, a && (n[h] = a)), e.result
            }
        }, simulate: function (t, e, i) {
            var n = xt.extend(new xt.Event, i, {type: t, isSimulated: !0});
            xt.event.trigger(n, null, e)
        }
    }), xt.fn.extend({
        trigger: function (t, e) {
            return this.each(function () {
                xt.event.trigger(t, e, this)
            })
        }, triggerHandler: function (t, e) {
            var i = this[0];
            if (i) return xt.event.trigger(t, e, i, !0)
        }
    }), vt.focusin || xt.each({focus: "focusin", blur: "focusout"}, function (t, e) {
        var i = function (t) {
            xt.event.simulate(e, t.target, xt.event.fix(t))
        };
        xt.event.special[e] = {
            setup: function () {
                var n = this.ownerDocument || this, s = Wt.access(n, e);
                s || n.addEventListener(t, i, !0), Wt.access(n, e, (s || 0) + 1)
            }, teardown: function () {
                var n = this.ownerDocument || this, s = Wt.access(n, e) - 1;
                s ? Wt.access(n, e, s) : (n.removeEventListener(t, i, !0), Wt.remove(n, e))
            }
        }
    });
    var De = t.location, Ie = Date.now(), $e = /\?/;
    xt.parseXML = function (t) {
        var e;
        if (!t || "string" != typeof t) return null;
        try {
            e = (new i.DOMParser).parseFromString(t, "text/xml")
        } catch (i) {
            e = void 0
        }
        return e && !e.getElementsByTagName("parsererror").length || xt.error("Invalid XML: " + t), e
    };
    var Me = /\[\]$/, Pe = /\r?\n/g, ze = /^(?:submit|button|image|reset|file)$/i,
        Ae = /^(?:input|select|textarea|keygen)/i;
    xt.param = function (t, e) {
        var i, n = [], s = function (t, e) {
            var i = yt(e) ? e() : e;
            n[n.length] = encodeURIComponent(t) + "=" + encodeURIComponent(null == i ? "" : i)
        };
        if (Array.isArray(t) || t.jquery && !xt.isPlainObject(t)) xt.each(t, function () {
            s(this.name, this.value)
        }); else for (i in t) J(i, t[i], e, s);
        return n.join("&")
    }, xt.fn.extend({
        serialize: function () {
            return xt.param(this.serializeArray())
        }, serializeArray: function () {
            return this.map(function () {
                var t = xt.prop(this, "elements");
                return t ? xt.makeArray(t) : this
            }).filter(function () {
                var t = this.type;
                return this.name && !xt(this).is(":disabled") && Ae.test(this.nodeName) && !ze.test(t) && (this.checked || !Gt.test(t))
            }).map(function (t, e) {
                var i = xt(this).val();
                return null == i ? null : Array.isArray(i) ? xt.map(i, function (t) {
                    return {name: e.name, value: t.replace(Pe, "\r\n")}
                }) : {name: e.name, value: i.replace(Pe, "\r\n")}
            }).get()
        }
    });
    var Oe = /%20/g, Le = /#.*$/, Ne = /([?&])_=[^&]*/, je = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        We = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Re = /^(?:GET|HEAD)$/, He = /^\/\//, Fe = {},
        Ve = {}, qe = "*/".concat("*"), Be = rt.createElement("a");
    Be.href = De.href, xt.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: De.href,
            type: "GET",
            isLocal: We.test(De.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": qe,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/},
            responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
            converters: {"* text": String, "text html": !0, "text json": JSON.parse, "text xml": xt.parseXML},
            flatOptions: {url: !0, context: !0}
        },
        ajaxSetup: function (t, e) {
            return e ? it(it(t, xt.ajaxSettings), e) : it(xt.ajaxSettings, t)
        },
        ajaxPrefilter: tt(Fe),
        ajaxTransport: tt(Ve),
        ajax: function (t, e) {
            function i(t, e, i, r) {
                var l, u, c, w, b, x = e;
                h || (h = !0, a && T.clearTimeout(a), n = void 0, o = r || "", C.readyState = t > 0 ? 4 : 0, l = t >= 200 && t < 300 || 304 === t, i && (w = nt(p, C, i)), w = st(p, w, C, l), l ? (p.ifModified && ((b = C.getResponseHeader("Last-Modified")) && (xt.lastModified[s] = b), (b = C.getResponseHeader("etag")) && (xt.etag[s] = b)), 204 === t || "HEAD" === p.type ? x = "nocontent" : 304 === t ? x = "notmodified" : (x = w.state, u = w.data, l = !(c = w.error))) : (c = x, !t && x || (x = "error", t < 0 && (t = 0))), C.status = t, C.statusText = (e || x) + "", l ? g.resolveWith(f, [u, x, C]) : g.rejectWith(f, [C, x, c]), C.statusCode(y), y = void 0, d && m.trigger(l ? "ajaxSuccess" : "ajaxError", [C, p, l ? u : c]), v.fireWith(f, [C, x]), d && (m.trigger("ajaxComplete", [C, p]), --xt.active || xt.event.trigger("ajaxStop")))
            }

            "object" == typeof t && (e = t, t = void 0), e = e || {};
            var n, s, o, r, a, l, h, d, u, c, p = xt.ajaxSetup({}, e), f = p.context || p,
                m = p.context && (f.nodeType || f.jquery) ? xt(f) : xt.event, g = xt.Deferred(),
                v = xt.Callbacks("once memory"), y = p.statusCode || {}, w = {}, b = {}, x = "canceled", C = {
                    readyState: 0, getResponseHeader: function (t) {
                        var e;
                        if (h) {
                            if (!r) for (r = {}; e = je.exec(o);) r[e[1].toLowerCase()] = e[2];
                            e = r[t.toLowerCase()]
                        }
                        return null == e ? null : e
                    }, getAllResponseHeaders: function () {
                        return h ? o : null
                    }, setRequestHeader: function (t, e) {
                        return null == h && (t = b[t.toLowerCase()] = b[t.toLowerCase()] || t, w[t] = e), this
                    }, overrideMimeType: function (t) {
                        return null == h && (p.mimeType = t), this
                    }, statusCode: function (t) {
                        var e;
                        if (t) if (h) C.always(t[C.status]); else for (e in t) y[e] = [y[e], t[e]];
                        return this
                    }, abort: function (t) {
                        var e = t || x;
                        return n && n.abort(e), i(0, e), this
                    }
                };
            if (g.promise(C), p.url = ((t || p.url || De.href) + "").replace(He, De.protocol + "//"), p.type = e.method || e.type || p.method || p.type, p.dataTypes = (p.dataType || "*").toLowerCase().match(Pt) || [""], null == p.crossDomain) {
                l = rt.createElement("a");
                try {
                    l.href = p.url, l.href = l.href, p.crossDomain = Be.protocol + "//" + Be.host != l.protocol + "//" + l.host
                } catch (T) {
                    p.crossDomain = !0
                }
            }
            if (p.data && p.processData && "string" != typeof p.data && (p.data = xt.param(p.data, p.traditional)), et(Fe, p, e, C), h) return C;
            (d = xt.event && p.global) && 0 == xt.active++ && xt.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !Re.test(p.type), s = p.url.replace(Le, ""), p.hasContent ? p.data && p.processData && 0 === (p.contentType || "").indexOf("application/x-www-form-urlencoded") && (p.data = p.data.replace(Oe, "+")) : (c = p.url.slice(s.length), p.data && (p.processData || "string" == typeof p.data) && (s += ($e.test(s) ? "&" : "?") + p.data, delete p.data), !1 === p.cache && (s = s.replace(Ne, "$1"), c = ($e.test(s) ? "&" : "?") + "_=" + Ie++ + c), p.url = s + c), p.ifModified && (xt.lastModified[s] && C.setRequestHeader("If-Modified-Since", xt.lastModified[s]), xt.etag[s] && C.setRequestHeader("If-None-Match", xt.etag[s])), (p.data && p.hasContent && !1 !== p.contentType || e.contentType) && C.setRequestHeader("Content-Type", p.contentType), C.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + qe + "; q=0.01" : "") : p.accepts["*"]);
            for (u in p.headers) C.setRequestHeader(u, p.headers[u]);
            if (p.beforeSend && (!1 === p.beforeSend.call(f, C, p) || h)) return C.abort();
            if (x = "abort", v.add(p.complete), C.done(p.success), C.fail(p.error), n = et(Ve, p, e, C)) {
                if (C.readyState = 1, d && m.trigger("ajaxSend", [C, p]), h) return C;
                p.async && p.timeout > 0 && (a = T.setTimeout(function () {
                    C.abort("timeout")
                }, p.timeout));
                try {
                    h = !1, n.send(w, i)
                } catch (T) {
                    if (h) throw T;
                    i(-1, T)
                }
            } else i(-1, "No Transport");
            return C
        },
        getJSON: function (t, e, i) {
            return xt.get(t, e, i, "json")
        },
        getScript: function (t, e) {
            return xt.get(t, void 0, e, "script")
        }
    }), xt.each(["get", "post"], function (t, e) {
        xt[e] = function (t, i, n, s) {
            return yt(i) && (s = s || n, n = i, i = void 0), xt.ajax(xt.extend({
                url: t,
                type: e,
                dataType: s,
                data: i,
                success: n
            }, xt.isPlainObject(t) && t))
        }
    }), xt._evalUrl = function (t) {
        return xt.ajax({url: t, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, "throws": !0})
    }, xt.fn.extend({
        wrapAll: function (t) {
            var e;
            return this[0] && (yt(t) && (t = t.call(this[0])), e = xt(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function () {
                for (var t = this; t.firstElementChild;) t = t.firstElementChild;
                return t
            }).append(this)), this
        }, wrapInner: function (t) {
            return yt(t) ? this.each(function (e) {
                xt(this).wrapInner(t.call(this, e))
            }) : this.each(function () {
                var e = xt(this), i = e.contents();
                i.length ? i.wrapAll(t) : e.append(t)
            })
        }, wrap: function (t) {
            var e = yt(t);
            return this.each(function (i) {
                xt(this).wrapAll(e ? t.call(this, i) : t)
            })
        }, unwrap: function (t) {
            return this.parent(t).not("body").each(function () {
                xt(this).replaceWith(this.childNodes)
            }), this
        }
    }), xt.expr.pseudos.hidden = function (t) {
        return !xt.expr.pseudos.visible(t)
    }, xt.expr.pseudos.visible = function (t) {
        return !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length)
    }, xt.ajaxSettings.xhr = function () {
        try {
            return new t.XMLHttpRequest
        } catch (t) {
        }
    };
    var Ye = {0: 200, 1223: 204}, Ue = xt.ajaxSettings.xhr();
    vt.cors = !!Ue && "withCredentials" in Ue, vt.ajax = Ue = !!Ue, xt.ajaxTransport(function (t) {
        var e, i;
        if (vt.cors || Ue && !t.crossDomain) return {
            send: function (n, s) {
                var o, r = t.xhr();
                if (r.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields) for (o in t.xhrFields) r[o] = t.xhrFields[o];
                t.mimeType && r.overrideMimeType && r.overrideMimeType(t.mimeType), t.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                for (o in n) r.setRequestHeader(o, n[o]);
                e = function (t) {
                    return function () {
                        e && (e = i = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null, "abort" === t ? r.abort() : "error" === t ? "number" != typeof r.status ? s(0, "error") : s(r.status, r.statusText) : s(Ye[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? {binary: r.response} : {text: r.responseText}, r.getAllResponseHeaders()))
                    }
                }, r.onload = e(), i = r.onerror = r.ontimeout = e("error"), void 0 !== r.onabort ? r.onabort = i : r.onreadystatechange = function () {
                    4 === r.readyState && a.setTimeout(function () {
                        e && i()
                    })
                }, e = e("abort");
                try {
                    r.send(t.hasContent && t.data || null)
                } catch (a) {
                    if (e) throw a
                }
            }, abort: function () {
                e && e()
            }
        }
    }), xt.ajaxPrefilter(function (t) {
        t.crossDomain && (t.contents.script = !1)
    }), xt.ajaxSetup({
        accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
        contents: {script: /\b(?:java|ecma)script\b/},
        converters: {
            "text script": function (t) {
                return xt.globalEval(t), t
            }
        }
    }), xt.ajaxPrefilter("script", function (t) {
        void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET")
    }), xt.ajaxTransport("script", function (t) {
        if (t.crossDomain) {
            var e, i;
            return {
                send: function (n, s) {
                    e = xt("<script>").prop({charset: t.scriptCharset, src: t.url}).on("load error", i = function (t) {
                        e.remove(), i = null, t && s("error" === t.type ? 404 : 200, t.type)
                    }), rt.head.appendChild(e[0])
                }, abort: function () {
                    i && i()
                }
            }
        }
    });
    var Xe = [], Ge = /(=)\?(?=&|$)|\?\?/;
    xt.ajaxSetup({
        jsonp: "callback", jsonpCallback: function () {
            var t = Xe.pop() || xt.expando + "_" + Ie++;
            return this[t] = !0, t
        }
    }), xt.ajaxPrefilter("json jsonp", function (e, i, n) {
        var s, o, r,
            a = !1 !== e.jsonp && (Ge.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Ge.test(e.data) && "data");
        if (a || "jsonp" === e.dataTypes[0]) return s = e.jsonpCallback = yt(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Ge, "$1" + s) : !1 !== e.jsonp && (e.url += ($e.test(e.url) ? "&" : "?") + e.jsonp + "=" + s), e.converters["script json"] = function () {
            return r || xt.error(s + " was not called"), r[0]
        }, e.dataTypes[0] = "json", o = t[s], t[s] = function () {
            r = arguments
        }, n.always(function () {
            void 0 === o ? xt(t).removeProp(s) : t[s] = o, e[s] && (e.jsonpCallback = i.jsonpCallback, Xe.push(s)), r && yt(o) && o(r[0]), r = o = void 0
        }), "script"
    }), vt.createHTMLDocument = function () {
        var t = rt.implementation.createHTMLDocument("").body;
        return t.innerHTML = "<form></form><form></form>", 2 === t.childNodes.length
    }(), xt.parseHTML = function (t, e, i) {
        if ("string" != typeof t) return [];
        "boolean" == typeof e && (i = e, e = !1);
        var n, s, o;
        return e || (vt.createHTMLDocument ? ((n = (e = rt.implementation.createHTMLDocument("")).createElement("base")).href = rt.location.href, e.head.appendChild(n)) : e = rt), s = kt.exec(t), o = !i && [], s ? [e.createElement(s[1])] : (s = T([t], e, o), o && o.length && xt(o).remove(), xt.merge([], s.childNodes))
    }, xt.fn.load = function (t, e, i) {
        var n, s, o, r = this, a = t.indexOf(" ");
        return a > -1 && (n = Q(t.slice(a)), t = t.slice(0, a)), yt(e) ? (i = e, e = void 0) : e && "object" == typeof e && (s = "POST"), r.length > 0 && xt.ajax({
            url: t,
            type: s || "GET",
            dataType: "html",
            data: e
        }).done(function (t) {
            o = arguments, r.html(n ? xt("<div>").append(xt.parseHTML(t)).find(n) : t)
        }).always(i && function (t, e) {
            r.each(function () {
                i.apply(this, o || [t.responseText, e, t])
            })
        }), this
    }, xt.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (t, e) {
        xt.fn[e] = function (t) {
            return this.on(e, t)
        }
    }), xt.expr.pseudos.animated = function (t) {
        return xt.grep(xt.timers, function (e) {
            return t === e.elem
        }).length
    }, xt.offset = {
        setOffset: function (t, e, i) {
            var n, s, o, r, a, l, h, d = xt.css(t, "position"), u = xt(t), c = {};
            "static" === d && (t.style.position = "relative"), a = u.offset(), o = xt.css(t, "top"), l = xt.css(t, "left"), (h = ("absolute" === d || "fixed" === d) && (o + l).indexOf("auto") > -1) ? (r = (n = u.position()).top, s = n.left) : (r = parseFloat(o) || 0, s = parseFloat(l) || 0), yt(e) && (e = e.call(t, i, xt.extend({}, a))), null != e.top && (c.top = e.top - a.top + r), null != e.left && (c.left = e.left - a.left + s), "using" in e ? e.using.call(t, c) : u.css(c)
        }
    }, xt.fn.extend({
        offset: function (t) {
            if (arguments.length) return void 0 === t ? this : this.each(function (e) {
                xt.offset.setOffset(this, t, e)
            });
            var e, i, n = this[0];
            return n ? n.getClientRects().length ? (e = n.getBoundingClientRect(), i = n.ownerDocument.defaultView, {
                top: e.top + i.pageYOffset,
                left: e.left + i.pageXOffset
            }) : {top: 0, left: 0} : void 0
        }, position: function () {
            if (this[0]) {
                var t, e, i, n = this[0], s = {top: 0, left: 0};
                if ("fixed" === xt.css(n, "position")) e = n.getBoundingClientRect(); else {
                    for (e = this.offset(), i = n.ownerDocument, t = n.offsetParent || i.documentElement; t && (t === i.body || t === i.documentElement) && "static" === xt.css(t, "position");) t = t.parentNode;
                    t && t !== n && 1 === t.nodeType && ((s = xt(t).offset()).top += xt.css(t, "borderTopWidth", !0), s.left += xt.css(t, "borderLeftWidth", !0))
                }
                return {
                    top: e.top - s.top - xt.css(n, "marginTop", !0),
                    left: e.left - s.left - xt.css(n, "marginLeft", !0)
                }
            }
        }, offsetParent: function () {
            return this.map(function () {
                for (var t = this.offsetParent; t && "static" === xt.css(t, "position");) t = t.offsetParent;
                return t || te
            })
        }
    }), xt.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (t, e) {
        var i = "pageYOffset" === e;
        xt.fn[t] = function (n) {
            return Ot(this, function (t, n, s) {
                var o;
                return wt(t) ? o = t : 9 === t.nodeType && (o = t.defaultView), void 0 === s ? o ? o[e] : t[n] : void (o ? o.scrollTo(i ? o.pageXOffset : s, i ? s : o.pageYOffset) : t[n] = s)
            }, t, n, arguments.length)
        }
    }), xt.each(["top", "left"], function (t, e) {
        xt.cssHooks[e] = L(vt.pixelPosition, function (t, i) {
            if (i) return i = O(t, e), le.test(i) ? xt(t).position()[e] + "px" : i
        })
    }), xt.each({Height: "height", Width: "width"}, function (t, e) {
        xt.each({padding: "inner" + t, content: e, "": "outer" + t}, function (i, n) {
            xt.fn[n] = function (s, o) {
                var r = arguments.length && (i || "boolean" != typeof s),
                    a = i || (!0 === s || !0 === o ? "margin" : "border");
                return Ot(this, function (e, i, s) {
                    var o;
                    return wt(e) ? 0 === n.indexOf("outer") ? e["inner" + t] : e.document.documentElement["client" + t] : 9 === e.nodeType ? (o = e.documentElement, Math.max(e.body["scroll" + t], o["scroll" + t], e.body["offset" + t], o["offset" + t], o["client" + t])) : void 0 === s ? xt.css(e, i, a) : xt.style(e, i, s, a)
                }, e, r ? s : void 0, r)
            }
        })
    }), xt.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (t, e) {
        xt.fn[e] = function (t, i) {
            return arguments.length > 0 ? this.on(e, null, t, i) : this.trigger(e)
        }
    }), xt.fn.extend({
        hover: function (t, e) {
            return this.mouseenter(t).mouseleave(e || t)
        }
    }), xt.fn.extend({
        bind: function (t, e, i) {
            return this.on(t, null, e, i)
        }, unbind: function (t, e) {
            return this.off(t, null, e)
        }, delegate: function (t, e, i, n) {
            return this.on(e, t, i, n)
        }, undelegate: function (t, e, i) {
            return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", i)
        }
    }), xt.proxy = function (t, e) {
        var i, n, s;
        if ("string" == typeof e && (i = t[e], e = t, t = i), yt(t)) return n = lt.call(arguments, 2), s = function () {
            return t.apply(e || this, n.concat(lt.call(arguments)))
        }, s.guid = t.guid = t.guid || xt.guid++, s
    }, xt.holdReady = function (t) {
        t ? xt.readyWait++ : xt.ready(!0)
    }, xt.isArray = Array.isArray, xt.parseJSON = JSON.parse, xt.nodeName = o, xt.isFunction = yt, xt.isWindow = wt, xt.camelCase = f, xt.type = n, xt.now = Date.now, xt.isNumeric = function (t) {
        var e = xt.type(t);
        return ("number" === e || "string" === e) && !isNaN(t - parseFloat(t))
    }, "function" == typeof define && define.amd && define("jquery", [], function () {
        return xt
    });
    var Qe = t.jQuery, Ze = t.$;
    return xt.noConflict = function (e) {
        return t.$ === xt && (t.$ = Ze), e && t.jQuery === xt && (t.jQuery = Qe), xt
    }, e || (t.jQuery = t.$ = xt), xt
});
var objectFitImages = function () {
    "use strict";

    function t(t, e) {
        return "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='" + t + "' height='" + e + "'%3E%3C/svg%3E"
    }

    function e(t) {
        if (t.srcset && !f && window.picturefill) {
            var e = window.picturefill._;
            t[e.ns] && t[e.ns].evaled || e.fillImg(t, {reselect: !0}), t[e.ns].curSrc || (t[e.ns].supported = !1, e.fillImg(t, {reselect: !0})), t.currentSrc = t[e.ns].curSrc || t.src
        }
    }

    function i(t) {
        for (var e, i = getComputedStyle(t).fontFamily, n = {}; null !== (e = h.exec(i));) n[e[1]] = e[2];
        return n
    }

    function n(e, i, n) {
        var s = t(i || 1, n || 0);
        m.call(e, "src") !== s && g.call(e, "src", s)
    }

    function s(t, e) {
        t.naturalWidth ? e(t) : setTimeout(s, 100, t, e)
    }

    function o(t) {
        var o = i(t), a = t[l];
        if (o["object-fit"] = o["object-fit"] || "fill", !a.img) {
            if ("fill" === o["object-fit"]) return;
            if (!a.skipTest && u && !o["object-position"]) return
        }
        if (!a.img) {
            a.img = new Image(t.width, t.height), a.img.srcset = m.call(t, "data-ofi-srcset") || t.srcset, a.img.src = m.call(t, "data-ofi-src") || t.src, g.call(t, "data-ofi-src", t.src), t.srcset && g.call(t, "data-ofi-srcset", t.srcset), n(t, t.naturalWidth || t.width, t.naturalHeight || t.height), t.srcset && (t.srcset = "");
            try {
                r(t)
            } catch (t) {
                window.console && console.warn("https://bit.ly/ofi-old-browser")
            }
        }
        e(a.img), t.style.backgroundImage = 'url("' + (a.img.currentSrc || a.img.src).replace(/"/g, '\\"') + '")', t.style.backgroundPosition = o["object-position"] || "center", t.style.backgroundRepeat = "no-repeat", t.style.backgroundOrigin = "content-box", /scale-down/.test(o["object-fit"]) ? s(a.img, function () {
            a.img.naturalWidth > t.width || a.img.naturalHeight > t.height ? t.style.backgroundSize = "contain" : t.style.backgroundSize = "auto"
        }) : t.style.backgroundSize = o["object-fit"].replace("none", "auto").replace("fill", "100% 100%"), s(a.img, function (e) {
            n(t, e.naturalWidth, e.naturalHeight)
        })
    }

    function r(t) {
        var e = {
            get: function (e) {
                return t[l].img[e || "src"]
            }, set: function (e, i) {
                return t[l].img[i || "src"] = e, g.call(t, "data-ofi-" + i, e), o(t), e
            }
        };
        Object.defineProperty(t, "src", e), Object.defineProperty(t, "currentSrc", {
            get: function () {
                return e.get("currentSrc")
            }
        }), Object.defineProperty(t, "srcset", {
            get: function () {
                return e.get("srcset")
            }, set: function (t) {
                return e.set(t, "srcset")
            }
        })
    }

    function a(t, e) {
        var i = !v && !t;
        if (e = e || {}, t = t || "img", c && !e.skipTest || !p) return !1;
        "img" === t ? t = document.getElementsByTagName("img") : "string" == typeof t ? t = document.querySelectorAll(t) : "length" in t || (t = [t]);
        for (var n = 0; n < t.length; n++) t[n][l] = t[n][l] || {skipTest: e.skipTest}, o(t[n]);
        i && (document.body.addEventListener("load", function (t) {
            "IMG" === t.target.tagName && a(t.target, {skipTest: e.skipTest})
        }, !0), v = !0, t = "img"), e.watchMQ && window.addEventListener("resize", a.bind(null, t, {skipTest: e.skipTest}))
    }

    var l = "bfred-it:object-fit-images", h = /(object-fit|object-position)\s*:\s*([-\w\s%]+)/g,
        d = "undefined" == typeof Image ? {style: {"object-position": 1}} : new Image, u = "object-fit" in d.style,
        c = "object-position" in d.style, p = "background-size" in d.style, f = "string" == typeof d.currentSrc,
        m = d.getAttribute, g = d.setAttribute, v = !1;
    return a.supportsObjectFit = u, a.supportsObjectPosition = c, function () {
        function t(t, e) {
            return t[l] && t[l].img && ("src" === e || "srcset" === e) ? t[l].img : t
        }

        c || (HTMLImageElement.prototype.getAttribute = function (e) {
            return m.call(t(this, e), e)
        }, HTMLImageElement.prototype.setAttribute = function (e, i) {
            return g.call(t(this, e), e, String(i))
        })
    }(), a
}();
if ("undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery");
+function (t) {
    "use strict";
    var e = t.fn.jquery.split(" ")[0].split(".");
    if (e[0] < 2 && e[1] < 9 || 1 == e[0] && 9 == e[1] && e[2] < 1 || e[0] > 3) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")
}(jQuery), +function (t) {
    "use strict";

    function e() {
        var t = document.createElement("bootstrap"), e = {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd otransitionend",
            transition: "transitionend"
        };
        for (var i in e) if (void 0 !== t.style[i]) return {end: e[i]};
        return !1
    }

    t.fn.emulateTransitionEnd = function (e) {
        var i = !1, n = this;
        t(this).one("bsTransitionEnd", function () {
            i = !0
        });
        var s = function () {
            i || t(n).trigger(t.support.transition.end)
        };
        return setTimeout(s, e), this
    }, t(function () {
        t.support.transition = e(), t.support.transition && (t.event.special.bsTransitionEnd = {
            bindType: t.support.transition.end,
            delegateType: t.support.transition.end,
            handle: function (e) {
                if (t(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
            }
        })
    })
}(jQuery), +function (t) {
    "use strict";

    function e(e) {
        return this.each(function () {
            var i = t(this), s = i.data("bs.alert");
            s || i.data("bs.alert", s = new n(this)), "string" == typeof e && s[e].call(i)
        })
    }

    var i = '[data-dismiss="alert"]', n = function (e) {
        t(e).on("click", i, this.close)
    };
    n.VERSION = "3.3.7", n.TRANSITION_DURATION = 150, n.prototype.close = function (e) {
        function i() {
            r.detach().trigger("closed.bs.alert").remove()
        }

        var s = t(this), o = s.attr("data-target");
        o || (o = s.attr("href"), o = o && o.replace(/.*(?=#[^\s]*$)/, ""));
        var r = t("#" === o ? [] : o);
        e && e.preventDefault(), r.length || (r = s.closest(".alert")), r.trigger(e = t.Event("close.bs.alert")), e.isDefaultPrevented() || (r.removeClass("in"), t.support.transition && r.hasClass("fade") ? r.one("bsTransitionEnd", i).emulateTransitionEnd(n.TRANSITION_DURATION) : i())
    };
    var s = t.fn.alert;
    t.fn.alert = e, t.fn.alert.Constructor = n, t.fn.alert.noConflict = function () {
        return t.fn.alert = s, this
    }, t(document).on("click.bs.alert.data-api", i, n.prototype.close)
}(jQuery), +function (t) {
    "use strict";

    function e(e) {
        return this.each(function () {
            var n = t(this), s = n.data("bs.button"), o = "object" == typeof e && e;
            s || n.data("bs.button", s = new i(this, o)), "toggle" == e ? s.toggle() : e && s.setState(e)
        })
    }

    var i = function (e, n) {
        this.$element = t(e), this.options = t.extend({}, i.DEFAULTS, n), this.isLoading = !1
    };
    i.VERSION = "3.3.7", i.DEFAULTS = {loadingText: "loading..."}, i.prototype.setState = function (e) {
        var i = "disabled", n = this.$element, s = n.is("input") ? "val" : "html", o = n.data();
        e += "Text", null == o.resetText && n.data("resetText", n[s]()), setTimeout(t.proxy(function () {
            n[s](null == o[e] ? this.options[e] : o[e]), "loadingText" == e ? (this.isLoading = !0, n.addClass(i).attr(i, i).prop(i, !0)) : this.isLoading && (this.isLoading = !1, n.removeClass(i).removeAttr(i).prop(i, !1))
        }, this), 0)
    }, i.prototype.toggle = function () {
        var t = !0, e = this.$element.closest('[data-toggle="buttons"]');
        if (e.length) {
            var i = this.$element.find("input");
            "radio" == i.prop("type") ? (i.prop("checked") && (t = !1), e.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == i.prop("type") && (i.prop("checked") !== this.$element.hasClass("active") && (t = !1), this.$element.toggleClass("active")), i.prop("checked", this.$element.hasClass("active")), t && i.trigger("change")
        } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active")
    };
    var n = t.fn.button;
    t.fn.button = e, t.fn.button.Constructor = i, t.fn.button.noConflict = function () {
        return t.fn.button = n, this
    }, t(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function (i) {
        var n = t(i.target).closest(".btn");
        e.call(n, "toggle"), t(i.target).is('input[type="radio"], input[type="checkbox"]') || (i.preventDefault(), n.is("input,button") ? n.trigger("focus") : n.find("input:visible,button:visible").first().trigger("focus"))
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function (e) {
        t(e.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(e.type))
    })
}(jQuery), +function (t) {
    "use strict";

    function e(e) {
        return this.each(function () {
            var n = t(this), s = n.data("bs.carousel"),
                o = t.extend({}, i.DEFAULTS, n.data(), "object" == typeof e && e),
                r = "string" == typeof e ? e : o.slide;
            s || n.data("bs.carousel", s = new i(this, o)), "number" == typeof e ? s.to(e) : r ? s[r]() : o.interval && s.pause().cycle()
        })
    }

    var i = function (e, i) {
        this.$element = t(e), this.$indicators = this.$element.find(".carousel-indicators"), this.options = i, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", t.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", t.proxy(this.pause, this)).on("mouseleave.bs.carousel", t.proxy(this.cycle, this))
    };
    i.VERSION = "3.3.7", i.TRANSITION_DURATION = 600, i.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0,
        keyboard: !0
    }, i.prototype.keydown = function (t) {
        if (!/input|textarea/i.test(t.target.tagName)) {
            switch (t.which) {
                case 37:
                    this.prev();
                    break;
                case 39:
                    this.next();
                    break;
                default:
                    return
            }
            t.preventDefault()
        }
    }, i.prototype.cycle = function (e) {
        return e || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)), this
    }, i.prototype.getItemIndex = function (t) {
        return this.$items = t.parent().children(".item"), this.$items.index(t || this.$active)
    }, i.prototype.getItemForDirection = function (t, e) {
        var i = this.getItemIndex(e), n = "prev" == t && 0 === i || "next" == t && i == this.$items.length - 1;
        if (n && !this.options.wrap) return e;
        var s = "prev" == t ? -1 : 1, o = (i + s) % this.$items.length;
        return this.$items.eq(o)
    }, i.prototype.to = function (t) {
        var e = this, i = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        if (!(t > this.$items.length - 1 || t < 0)) return this.sliding ? this.$element.one("slid.bs.carousel", function () {
            e.to(t)
        }) : i == t ? this.pause().cycle() : this.slide(t > i ? "next" : "prev", this.$items.eq(t))
    }, i.prototype.pause = function (e) {
        return e || (this.paused = !0), this.$element.find(".next, .prev").length && t.support.transition && (this.$element.trigger(t.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    }, i.prototype.next = function () {
        if (!this.sliding) return this.slide("next")
    }, i.prototype.prev = function () {
        if (!this.sliding) return this.slide("prev")
    }, i.prototype.slide = function (e, n) {
        var s = this.$element.find(".item.active"), o = n || this.getItemForDirection(e, s), r = this.interval,
            a = "next" == e ? "left" : "right", l = this;
        if (o.hasClass("active")) return this.sliding = !1;
        var h = o[0], d = t.Event("slide.bs.carousel", {relatedTarget: h, direction: a});
        if (this.$element.trigger(d), !d.isDefaultPrevented()) {
            if (this.sliding = !0, r && this.pause(), this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var u = t(this.$indicators.children()[this.getItemIndex(o)]);
                u && u.addClass("active")
            }
            var c = t.Event("slid.bs.carousel", {relatedTarget: h, direction: a});
            return t.support.transition && this.$element.hasClass("slide") ? (o.addClass(e), o[0].offsetWidth, s.addClass(a), o.addClass(a), s.one("bsTransitionEnd", function () {
                o.removeClass([e, a].join(" ")).addClass("active"), s.removeClass(["active", a].join(" ")), l.sliding = !1, setTimeout(function () {
                    l.$element.trigger(c)
                }, 0)
            }).emulateTransitionEnd(i.TRANSITION_DURATION)) : (s.removeClass("active"), o.addClass("active"), this.sliding = !1, this.$element.trigger(c)), r && this.cycle(), this
        }
    };
    var n = t.fn.carousel;
    t.fn.carousel = e, t.fn.carousel.Constructor = i, t.fn.carousel.noConflict = function () {
        return t.fn.carousel = n, this
    };
    var s = function (i) {
        var n, s = t(this), o = t(s.attr("data-target") || (n = s.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, ""));
        if (o.hasClass("carousel")) {
            var r = t.extend({}, o.data(), s.data()), a = s.attr("data-slide-to");
            a && (r.interval = !1), e.call(o, r), a && o.data("bs.carousel").to(a), i.preventDefault()
        }
    };
    t(document).on("click.bs.carousel.data-api", "[data-slide]", s).on("click.bs.carousel.data-api", "[data-slide-to]", s), t(window).on("load", function () {
        t('[data-ride="carousel"]').each(function () {
            var i = t(this);
            e.call(i, i.data())
        })
    })
}(jQuery), +function (t) {
    "use strict";

    function e(e) {
        var i, n = e.attr("data-target") || (i = e.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, "");
        return t(n)
    }

    function i(e) {
        return this.each(function () {
            var i = t(this), s = i.data("bs.collapse"),
                o = t.extend({}, n.DEFAULTS, i.data(), "object" == typeof e && e);
            !s && o.toggle && /show|hide/.test(e) && (o.toggle = !1), s || i.data("bs.collapse", s = new n(this, o)), "string" == typeof e && s[e]()
        })
    }

    var n = function (e, i) {
        this.$element = t(e), this.options = t.extend({}, n.DEFAULTS, i), this.$trigger = t('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
    };
    n.VERSION = "3.3.7", n.TRANSITION_DURATION = 350, n.DEFAULTS = {toggle: !0}, n.prototype.dimension = function () {
        var t = this.$element.hasClass("width");
        return t ? "width" : "height"
    }, n.prototype.show = function () {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var e, s = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
            if (!(s && s.length && (e = s.data("bs.collapse"), e && e.transitioning))) {
                var o = t.Event("show.bs.collapse");
                if (this.$element.trigger(o), !o.isDefaultPrevented()) {
                    s && s.length && (i.call(s, "hide"), e || s.data("bs.collapse", null));
                    var r = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[r](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                    var a = function () {
                        this.$element.removeClass("collapsing").addClass("collapse in")[r](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                    };
                    if (!t.support.transition) return a.call(this);
                    var l = t.camelCase(["scroll", r].join("-"));
                    this.$element.one("bsTransitionEnd", t.proxy(a, this)).emulateTransitionEnd(n.TRANSITION_DURATION)[r](this.$element[0][l])
                }
            }
        }
    }, n.prototype.hide = function () {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var e = t.Event("hide.bs.collapse");
            if (this.$element.trigger(e), !e.isDefaultPrevented()) {
                var i = this.dimension();
                this.$element[i](this.$element[i]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                var s = function () {
                    this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                };
                return t.support.transition ? void this.$element[i](0).one("bsTransitionEnd", t.proxy(s, this)).emulateTransitionEnd(n.TRANSITION_DURATION) : s.call(this)
            }
        }
    }, n.prototype.toggle = function () {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    }, n.prototype.getParent = function () {
        return t(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(t.proxy(function (i, n) {
            var s = t(n);
            this.addAriaAndCollapsedClass(e(s), s)
        }, this)).end()
    }, n.prototype.addAriaAndCollapsedClass = function (t, e) {
        var i = t.hasClass("in");
        t.attr("aria-expanded", i), e.toggleClass("collapsed", !i).attr("aria-expanded", i)
    };
    var s = t.fn.collapse;
    t.fn.collapse = i, t.fn.collapse.Constructor = n, t.fn.collapse.noConflict = function () {
        return t.fn.collapse = s, this
    }, t(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function (n) {
        var s = t(this);
        s.attr("data-target") || n.preventDefault();
        var o = e(s), r = o.data("bs.collapse"), a = r ? "toggle" : s.data();
        i.call(o, a)
    })
}(jQuery), +function (t) {
    "use strict";

    function e(e) {
        var i = e.attr("data-target");
        i || (i = e.attr("href"), i = i && /#[A-Za-z]/.test(i) && i.replace(/.*(?=#[^\s]*$)/, ""));
        var n = i && t(i);
        return n && n.length ? n : e.parent()
    }

    function i(i) {
        i && 3 === i.which || (t(s).remove(), t(o).each(function () {
            var n = t(this), s = e(n), o = {relatedTarget: this};
            s.hasClass("open") && (i && "click" == i.type && /input|textarea/i.test(i.target.tagName) && t.contains(s[0], i.target) || (s.trigger(i = t.Event("hide.bs.dropdown", o)), i.isDefaultPrevented() || (n.attr("aria-expanded", "false"), s.removeClass("open").trigger(t.Event("hidden.bs.dropdown", o)))))
        }))
    }

    function n(e) {
        return this.each(function () {
            var i = t(this), n = i.data("bs.dropdown");
            n || i.data("bs.dropdown", n = new r(this)), "string" == typeof e && n[e].call(i)
        })
    }

    var s = ".dropdown-backdrop", o = '[data-toggle="dropdown"]', r = function (e) {
        t(e).on("click.bs.dropdown", this.toggle)
    };
    r.VERSION = "3.3.7", r.prototype.toggle = function (n) {
        var s = t(this);
        if (!s.is(".disabled, :disabled")) {
            var o = e(s), r = o.hasClass("open");
            if (i(), !r) {
                "ontouchstart" in document.documentElement && !o.closest(".navbar-nav").length && t(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(t(this)).on("click", i);
                var a = {relatedTarget: this};
                if (o.trigger(n = t.Event("show.bs.dropdown", a)), n.isDefaultPrevented()) return;
                s.trigger("focus").attr("aria-expanded", "true"), o.toggleClass("open").trigger(t.Event("shown.bs.dropdown", a))
            }
            return !1
        }
    }, r.prototype.keydown = function (i) {
        if (/(38|40|27|32)/.test(i.which) && !/input|textarea/i.test(i.target.tagName)) {
            var n = t(this);
            if (i.preventDefault(), i.stopPropagation(), !n.is(".disabled, :disabled")) {
                var s = e(n), r = s.hasClass("open");
                if (!r && 27 != i.which || r && 27 == i.which) return 27 == i.which && s.find(o).trigger("focus"), n.trigger("click");
                var a = " li:not(.disabled):visible a", l = s.find(".dropdown-menu" + a);
                if (l.length) {
                    var h = l.index(i.target);
                    38 == i.which && h > 0 && h--, 40 == i.which && h < l.length - 1 && h++, ~h || (h = 0), l.eq(h).trigger("focus")
                }
            }
        }
    };
    var a = t.fn.dropdown;
    t.fn.dropdown = n, t.fn.dropdown.Constructor = r, t.fn.dropdown.noConflict = function () {
        return t.fn.dropdown = a, this
    }, t(document).on("click.bs.dropdown.data-api", i).on("click.bs.dropdown.data-api", ".dropdown form", function (t) {
        t.stopPropagation()
    }).on("click.bs.dropdown.data-api", o, r.prototype.toggle).on("keydown.bs.dropdown.data-api", o, r.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", r.prototype.keydown)
}(jQuery), +function (t) {
    "use strict";

    function e(e, n) {
        return this.each(function () {
            var s = t(this), o = s.data("bs.modal"), r = t.extend({}, i.DEFAULTS, s.data(), "object" == typeof e && e);
            o || s.data("bs.modal", o = new i(this, r)), "string" == typeof e ? o[e](n) : r.show && o.show(n)
        })
    }

    var i = function (e, i) {
        this.options = i, this.$body = t(document.body), this.$element = t(e), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, t.proxy(function () {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    };
    i.VERSION = "3.3.7", i.TRANSITION_DURATION = 300, i.BACKDROP_TRANSITION_DURATION = 150, i.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, i.prototype.toggle = function (t) {
        return this.isShown ? this.hide() : this.show(t)
    }, i.prototype.show = function (e) {
        var n = this, s = t.Event("show.bs.modal", {relatedTarget: e});
        this.$element.trigger(s), this.isShown || s.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function () {
            n.$element.one("mouseup.dismiss.bs.modal", function (e) {
                t(e.target).is(n.$element) && (n.ignoreBackdropClick = !0)
            })
        }), this.backdrop(function () {
            var s = t.support.transition && n.$element.hasClass("fade");
            n.$element.parent().length || n.$element.appendTo(n.$body), n.$element.show().scrollTop(0), n.adjustDialog(), s && n.$element[0].offsetWidth, n.$element.addClass("in"), n.enforceFocus();
            var o = t.Event("shown.bs.modal", {relatedTarget: e});
            s ? n.$dialog.one("bsTransitionEnd", function () {
                n.$element.trigger("focus").trigger(o)
            }).emulateTransitionEnd(i.TRANSITION_DURATION) : n.$element.trigger("focus").trigger(o)
        }))
    }, i.prototype.hide = function (e) {
        e && e.preventDefault(), e = t.Event("hide.bs.modal"), this.$element.trigger(e), this.isShown && !e.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), t(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), t.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", t.proxy(this.hideModal, this)).emulateTransitionEnd(i.TRANSITION_DURATION) : this.hideModal())
    }, i.prototype.enforceFocus = function () {
        t(document).off("focusin.bs.modal").on("focusin.bs.modal", t.proxy(function (t) {
            document === t.target || this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus")
        }, this))
    }, i.prototype.escape = function () {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", t.proxy(function (t) {
            27 == t.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
    }, i.prototype.resize = function () {
        this.isShown ? t(window).on("resize.bs.modal", t.proxy(this.handleUpdate, this)) : t(window).off("resize.bs.modal")
    }, i.prototype.hideModal = function () {
        var t = this;
        this.$element.hide(), this.backdrop(function () {
            t.$body.removeClass("modal-open"), t.resetAdjustments(), t.resetScrollbar(), t.$element.trigger("hidden.bs.modal")
        })
    }, i.prototype.removeBackdrop = function () {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, i.prototype.backdrop = function (e) {
        var n = this, s = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var o = t.support.transition && s;
            if (this.$backdrop = t(document.createElement("div")).addClass("modal-backdrop " + s).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", t.proxy(function (t) {
                return this.ignoreBackdropClick ? void (this.ignoreBackdropClick = !1) : void (t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
            }, this)), o && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !e) return;
            o ? this.$backdrop.one("bsTransitionEnd", e).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION) : e()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var r = function () {
                n.removeBackdrop(), e && e()
            };
            t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", r).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION) : r()
        } else e && e()
    }, i.prototype.handleUpdate = function () {
        this.adjustDialog()
    }, i.prototype.adjustDialog = function () {
        var t = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth : "",
            paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth : ""
        })
    }, i.prototype.resetAdjustments = function () {
        this.$element.css({paddingLeft: "", paddingRight: ""})
    }, i.prototype.checkScrollbar = function () {
        var t = window.innerWidth;
        if (!t) {
            var e = document.documentElement.getBoundingClientRect();
            t = e.right - Math.abs(e.left)
        }
        this.bodyIsOverflowing = document.body.clientWidth < t, this.scrollbarWidth = this.measureScrollbar()
    }, i.prototype.setScrollbar = function () {
        var t = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", t + this.scrollbarWidth)
    }, i.prototype.resetScrollbar = function () {
        this.$body.css("padding-right", this.originalBodyPad)
    }, i.prototype.measureScrollbar = function () {
        var t = document.createElement("div");
        t.className = "modal-scrollbar-measure", this.$body.append(t);
        var e = t.offsetWidth - t.clientWidth;
        return this.$body[0].removeChild(t), e
    };
    var n = t.fn.modal;
    t.fn.modal = e, t.fn.modal.Constructor = i, t.fn.modal.noConflict = function () {
        return t.fn.modal = n, this
    }, t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (i) {
        var n = t(this), s = n.attr("href"), o = t(n.attr("data-target") || s && s.replace(/.*(?=#[^\s]+$)/, "")),
            r = o.data("bs.modal") ? "toggle" : t.extend({remote: !/#/.test(s) && s}, o.data(), n.data());
        n.is("a") && i.preventDefault(), o.one("show.bs.modal", function (t) {
            t.isDefaultPrevented() || o.one("hidden.bs.modal", function () {
                n.is(":visible") && n.trigger("focus")
            })
        }), e.call(o, r, this)
    })
}(jQuery), +function (t) {
    "use strict";

    function e(e) {
        return this.each(function () {
            var n = t(this), s = n.data("bs.tooltip"), o = "object" == typeof e && e;
            !s && /destroy|hide/.test(e) || (s || n.data("bs.tooltip", s = new i(this, o)), "string" == typeof e && s[e]())
        })
    }

    var i = function (t, e) {
        this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", t, e)
    };
    i.VERSION = "3.3.7", i.TRANSITION_DURATION = 150, i.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {selector: "body", padding: 0}
    }, i.prototype.init = function (e, i, n) {
        if (this.enabled = !0, this.type = e, this.$element = t(i), this.options = this.getOptions(n), this.$viewport = this.options.viewport && t(t.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
            click: !1,
            hover: !1,
            focus: !1
        }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
        for (var s = this.options.trigger.split(" "), o = s.length; o--;) {
            var r = s[o];
            if ("click" == r) this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this)); else if ("manual" != r) {
                var a = "hover" == r ? "mouseenter" : "focusin", l = "hover" == r ? "mouseleave" : "focusout";
                this.$element.on(a + "." + this.type, this.options.selector, t.proxy(this.enter, this)), this.$element.on(l + "." + this.type, this.options.selector, t.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = t.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }, i.prototype.getDefaults = function () {
        return i.DEFAULTS
    }, i.prototype.getOptions = function (e) {
        return e = t.extend({}, this.getDefaults(), this.$element.data(), e), e.delay && "number" == typeof e.delay && (e.delay = {
            show: e.delay,
            hide: e.delay
        }), e
    }, i.prototype.getDelegateOptions = function () {
        var e = {}, i = this.getDefaults();
        return this._options && t.each(this._options, function (t, n) {
            i[t] != n && (e[t] = n)
        }), e
    }, i.prototype.enter = function (e) {
        var i = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        return i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i)), e instanceof t.Event && (i.inState["focusin" == e.type ? "focus" : "hover"] = !0), i.tip().hasClass("in") || "in" == i.hoverState ? void (i.hoverState = "in") : (clearTimeout(i.timeout), i.hoverState = "in", i.options.delay && i.options.delay.show ? void (i.timeout = setTimeout(function () {
            "in" == i.hoverState && i.show()
        }, i.options.delay.show)) : i.show())
    }, i.prototype.isInStateTrue = function () {
        for (var t in this.inState) if (this.inState[t]) return !0;
        return !1
    }, i.prototype.leave = function (e) {
        var i = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        if (i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i)), e instanceof t.Event && (i.inState["focusout" == e.type ? "focus" : "hover"] = !1), !i.isInStateTrue()) return clearTimeout(i.timeout), i.hoverState = "out", i.options.delay && i.options.delay.hide ? void (i.timeout = setTimeout(function () {
            "out" == i.hoverState && i.hide()
        }, i.options.delay.hide)) : i.hide()
    }, i.prototype.show = function () {
        var e = t.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(e);
            var n = t.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
            if (e.isDefaultPrevented() || !n) return;
            var s = this, o = this.tip(), r = this.getUID(this.type);
            this.setContent(), o.attr("id", r), this.$element.attr("aria-describedby", r), this.options.animation && o.addClass("fade");
            var a = "function" == typeof this.options.placement ? this.options.placement.call(this, o[0], this.$element[0]) : this.options.placement,
                l = /\s?auto?\s?/i, h = l.test(a);
            h && (a = a.replace(l, "") || "top"), o.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(a).data("bs." + this.type, this), this.options.container ? o.appendTo(this.options.container) : o.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
            var d = this.getPosition(), u = o[0].offsetWidth, c = o[0].offsetHeight;
            if (h) {
                var p = a, f = this.getPosition(this.$viewport);
                a = "bottom" == a && d.bottom + c > f.bottom ? "top" : "top" == a && d.top - c < f.top ? "bottom" : "right" == a && d.right + u > f.width ? "left" : "left" == a && d.left - u < f.left ? "right" : a, o.removeClass(p).addClass(a)
            }
            var m = this.getCalculatedOffset(a, d, u, c);
            this.applyPlacement(m, a);
            var g = function () {
                var t = s.hoverState;
                s.$element.trigger("shown.bs." + s.type), s.hoverState = null, "out" == t && s.leave(s)
            };
            t.support.transition && this.$tip.hasClass("fade") ? o.one("bsTransitionEnd", g).emulateTransitionEnd(i.TRANSITION_DURATION) : g()
        }
    }, i.prototype.applyPlacement = function (e, i) {
        var n = this.tip(), s = n[0].offsetWidth, o = n[0].offsetHeight, r = parseInt(n.css("margin-top"), 10),
            a = parseInt(n.css("margin-left"), 10);
        isNaN(r) && (r = 0), isNaN(a) && (a = 0), e.top += r, e.left += a, t.offset.setOffset(n[0], t.extend({
            using: function (t) {
                n.css({top: Math.round(t.top), left: Math.round(t.left)})
            }
        }, e), 0), n.addClass("in");
        var l = n[0].offsetWidth, h = n[0].offsetHeight;
        "top" == i && h != o && (e.top = e.top + o - h);
        var d = this.getViewportAdjustedDelta(i, e, l, h);
        d.left ? e.left += d.left : e.top += d.top;
        var u = /top|bottom/.test(i), c = u ? 2 * d.left - s + l : 2 * d.top - o + h,
            p = u ? "offsetWidth" : "offsetHeight";
        n.offset(e), this.replaceArrow(c, n[0][p], u)
    }, i.prototype.replaceArrow = function (t, e, i) {
        this.arrow().css(i ? "left" : "top", 50 * (1 - t / e) + "%").css(i ? "top" : "left", "")
    }, i.prototype.setContent = function () {
        var t = this.tip(), e = this.getTitle();
        t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e), t.removeClass("fade in top bottom left right")
    }, i.prototype.hide = function (e) {
        function n() {
            "in" != s.hoverState && o.detach(), s.$element && s.$element.removeAttr("aria-describedby").trigger("hidden.bs." + s.type), e && e()
        }

        var s = this, o = t(this.$tip), r = t.Event("hide.bs." + this.type);
        if (this.$element.trigger(r), !r.isDefaultPrevented()) return o.removeClass("in"), t.support.transition && o.hasClass("fade") ? o.one("bsTransitionEnd", n).emulateTransitionEnd(i.TRANSITION_DURATION) : n(), this.hoverState = null, this
    }, i.prototype.fixTitle = function () {
        var t = this.$element;
        (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
    }, i.prototype.hasContent = function () {
        return this.getTitle()
    }, i.prototype.getPosition = function (e) {
        e = e || this.$element;
        var i = e[0], n = "BODY" == i.tagName, s = i.getBoundingClientRect();
        null == s.width && (s = t.extend({}, s, {width: s.right - s.left, height: s.bottom - s.top}));
        var o = window.SVGElement && i instanceof window.SVGElement, r = n ? {top: 0, left: 0} : o ? null : e.offset(),
            a = {scroll: n ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop()},
            l = n ? {width: t(window).width(), height: t(window).height()} : null;
        return t.extend({}, s, a, l, r)
    }, i.prototype.getCalculatedOffset = function (t, e, i, n) {
        return "bottom" == t ? {
            top: e.top + e.height,
            left: e.left + e.width / 2 - i / 2
        } : "top" == t ? {
            top: e.top - n,
            left: e.left + e.width / 2 - i / 2
        } : "left" == t ? {top: e.top + e.height / 2 - n / 2, left: e.left - i} : {
            top: e.top + e.height / 2 - n / 2,
            left: e.left + e.width
        }
    }, i.prototype.getViewportAdjustedDelta = function (t, e, i, n) {
        var s = {top: 0, left: 0};
        if (!this.$viewport) return s;
        var o = this.options.viewport && this.options.viewport.padding || 0, r = this.getPosition(this.$viewport);
        if (/right|left/.test(t)) {
            var a = e.top - o - r.scroll, l = e.top + o - r.scroll + n;
            a < r.top ? s.top = r.top - a : l > r.top + r.height && (s.top = r.top + r.height - l)
        } else {
            var h = e.left - o, d = e.left + o + i;
            h < r.left ? s.left = r.left - h : d > r.right && (s.left = r.left + r.width - d)
        }
        return s
    }, i.prototype.getTitle = function () {
        var t, e = this.$element, i = this.options;
        return t = e.attr("data-original-title") || ("function" == typeof i.title ? i.title.call(e[0]) : i.title)
    }, i.prototype.getUID = function (t) {
        do t += ~~(1e6 * Math.random()); while (document.getElementById(t));
        return t
    }, i.prototype.tip = function () {
        if (!this.$tip && (this.$tip = t(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
        return this.$tip
    }, i.prototype.arrow = function () {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, i.prototype.enable = function () {
        this.enabled = !0
    }, i.prototype.disable = function () {
        this.enabled = !1
    }, i.prototype.toggleEnabled = function () {
        this.enabled = !this.enabled
    }, i.prototype.toggle = function (e) {
        var i = this;
        e && (i = t(e.currentTarget).data("bs." + this.type), i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i))), e ? (i.inState.click = !i.inState.click, i.isInStateTrue() ? i.enter(i) : i.leave(i)) : i.tip().hasClass("in") ? i.leave(i) : i.enter(i)
    }, i.prototype.destroy = function () {
        var t = this;
        clearTimeout(this.timeout), this.hide(function () {
            t.$element.off("." + t.type).removeData("bs." + t.type), t.$tip && t.$tip.detach(), t.$tip = null, t.$arrow = null, t.$viewport = null, t.$element = null
        })
    };
    var n = t.fn.tooltip;
    t.fn.tooltip = e, t.fn.tooltip.Constructor = i, t.fn.tooltip.noConflict = function () {
        return t.fn.tooltip = n, this
    }
}(jQuery), +function (t) {
    "use strict";

    function e(e) {
        return this.each(function () {
            var n = t(this), s = n.data("bs.popover"), o = "object" == typeof e && e;
            !s && /destroy|hide/.test(e) || (s || n.data("bs.popover", s = new i(this, o)), "string" == typeof e && s[e]())
        })
    }

    var i = function (t, e) {
        this.init("popover", t, e)
    };
    if (!t.fn.tooltip) throw new Error("Popover requires tooltip.js");
    i.VERSION = "3.3.7", i.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), i.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype), i.prototype.constructor = i, i.prototype.getDefaults = function () {
        return i.DEFAULTS
    }, i.prototype.setContent = function () {
        var t = this.tip(), e = this.getTitle(), i = this.getContent();
        t.find(".popover-title")[this.options.html ? "html" : "text"](e), t.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof i ? "html" : "append" : "text"](i), t.removeClass("fade top bottom left right in"), t.find(".popover-title").html() || t.find(".popover-title").hide()
    }, i.prototype.hasContent = function () {
        return this.getTitle() || this.getContent()
    }, i.prototype.getContent = function () {
        var t = this.$element, e = this.options;
        return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
    }, i.prototype.arrow = function () {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    };
    var n = t.fn.popover;
    t.fn.popover = e, t.fn.popover.Constructor = i, t.fn.popover.noConflict = function () {
        return t.fn.popover = n, this
    }
}(jQuery), +function (t) {
    "use strict";

    function e(i, n) {
        this.$body = t(document.body), this.$scrollElement = t(t(i).is(document.body) ? window : i), this.options = t.extend({}, e.DEFAULTS, n), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", t.proxy(this.process, this)), this.refresh(), this.process()
    }

    function i(i) {
        return this.each(function () {
            var n = t(this), s = n.data("bs.scrollspy"), o = "object" == typeof i && i;
            s || n.data("bs.scrollspy", s = new e(this, o)), "string" == typeof i && s[i]()
        })
    }

    e.VERSION = "3.3.7", e.DEFAULTS = {offset: 10}, e.prototype.getScrollHeight = function () {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    }, e.prototype.refresh = function () {
        var e = this, i = "offset", n = 0;
        this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), t.isWindow(this.$scrollElement[0]) || (i = "position", n = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function () {
            var e = t(this), s = e.data("target") || e.attr("href"), o = /^#./.test(s) && t(s);
            return o && o.length && o.is(":visible") && [[o[i]().top + n, s]] || null
        }).sort(function (t, e) {
            return t[0] - e[0]
        }).each(function () {
            e.offsets.push(this[0]), e.targets.push(this[1])
        })
    }, e.prototype.process = function () {
        var t, e = this.$scrollElement.scrollTop() + this.options.offset, i = this.getScrollHeight(),
            n = this.options.offset + i - this.$scrollElement.height(), s = this.offsets, o = this.targets,
            r = this.activeTarget;
        if (this.scrollHeight != i && this.refresh(), e >= n) return r != (t = o[o.length - 1]) && this.activate(t);
        if (r && e < s[0]) return this.activeTarget = null, this.clear();
        for (t = s.length; t--;) r != o[t] && e >= s[t] && (void 0 === s[t + 1] || e < s[t + 1]) && this.activate(o[t])
    }, e.prototype.activate = function (e) {
        this.activeTarget = e, this.clear();
        var i = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]',
            n = t(i).parents("li").addClass("active");
        n.parent(".dropdown-menu").length && (n = n.closest("li.dropdown").addClass("active")), n.trigger("activate.bs.scrollspy")
    }, e.prototype.clear = function () {
        t(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
    };
    var n = t.fn.scrollspy;
    t.fn.scrollspy = i, t.fn.scrollspy.Constructor = e, t.fn.scrollspy.noConflict = function () {
        return t.fn.scrollspy = n, this
    }, t(window).on("load.bs.scrollspy.data-api", function () {
        t('[data-spy="scroll"]').each(function () {
            var e = t(this);
            i.call(e, e.data())
        })
    })
}(jQuery), +function (t) {
    "use strict";

    function e(e) {
        return this.each(function () {
            var n = t(this), s = n.data("bs.tab");
            s || n.data("bs.tab", s = new i(this)), "string" == typeof e && s[e]()
        })
    }

    var i = function (e) {
        this.element = t(e)
    };
    i.VERSION = "3.3.7", i.TRANSITION_DURATION = 150, i.prototype.show = function () {
        var e = this.element, i = e.closest("ul:not(.dropdown-menu)"), n = e.data("target");
        if (n || (n = e.attr("href"), n = n && n.replace(/.*(?=#[^\s]*$)/, "")), !e.parent("li").hasClass("active")) {
            var s = i.find(".active:last a"), o = t.Event("hide.bs.tab", {relatedTarget: e[0]}),
                r = t.Event("show.bs.tab", {relatedTarget: s[0]});
            if (s.trigger(o), e.trigger(r), !r.isDefaultPrevented() && !o.isDefaultPrevented()) {
                var a = t(n);
                this.activate(e.closest("li"), i), this.activate(a, a.parent(), function () {
                    s.trigger({type: "hidden.bs.tab", relatedTarget: e[0]}), e.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: s[0]
                    })
                })
            }
        }
    }, i.prototype.activate = function (e, n, s) {
        function o() {
            r.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), e.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), a ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade"), e.parent(".dropdown-menu").length && e.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), s && s()
        }

        var r = n.find("> .active"),
            a = s && t.support.transition && (r.length && r.hasClass("fade") || !!n.find("> .fade").length);
        r.length && a ? r.one("bsTransitionEnd", o).emulateTransitionEnd(i.TRANSITION_DURATION) : o(), r.removeClass("in")
    };
    var n = t.fn.tab;
    t.fn.tab = e, t.fn.tab.Constructor = i, t.fn.tab.noConflict = function () {
        return t.fn.tab = n, this
    };
    var s = function (i) {
        i.preventDefault(), e.call(t(this), "show")
    };
    t(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', s).on("click.bs.tab.data-api", '[data-toggle="pill"]', s)
}(jQuery), +function (t) {
    "use strict";

    function e(e) {
        return this.each(function () {
            var n = t(this), s = n.data("bs.affix"), o = "object" == typeof e && e;
            s || n.data("bs.affix", s = new i(this, o)), "string" == typeof e && s[e]()
        })
    }

    var i = function (e, n) {
        this.options = t.extend({}, i.DEFAULTS, n), this.$target = t(this.options.target).on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", t.proxy(this.checkPositionWithEventLoop, this)), this.$element = t(e), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
    };
    i.VERSION = "3.3.7", i.RESET = "affix affix-top affix-bottom", i.DEFAULTS = {
        offset: 0,
        target: window
    }, i.prototype.getState = function (t, e, i, n) {
        var s = this.$target.scrollTop(), o = this.$element.offset(), r = this.$target.height();
        if (null != i && "top" == this.affixed) return s < i && "top";
        if ("bottom" == this.affixed) return null != i ? !(s + this.unpin <= o.top) && "bottom" : !(s + r <= t - n) && "bottom";
        var a = null == this.affixed, l = a ? s : o.top, h = a ? r : e;
        return null != i && s <= i ? "top" : null != n && l + h >= t - n && "bottom"
    }, i.prototype.getPinnedOffset = function () {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(i.RESET).addClass("affix");
        var t = this.$target.scrollTop(), e = this.$element.offset();
        return this.pinnedOffset = e.top - t
    }, i.prototype.checkPositionWithEventLoop = function () {
        setTimeout(t.proxy(this.checkPosition, this), 1)
    }, i.prototype.checkPosition = function () {
        if (this.$element.is(":visible")) {
            var e = this.$element.height(), n = this.options.offset, s = n.top, o = n.bottom,
                r = Math.max(t(document).height(), t(document.body).height());
            "object" != typeof n && (o = s = n), "function" == typeof s && (s = n.top(this.$element)), "function" == typeof o && (o = n.bottom(this.$element));
            var a = this.getState(r, e, s, o);
            if (this.affixed != a) {
                null != this.unpin && this.$element.css("top", "");
                var l = "affix" + (a ? "-" + a : ""), h = t.Event(l + ".bs.affix");
                if (this.$element.trigger(h), h.isDefaultPrevented()) return;
                this.affixed = a, this.unpin = "bottom" == a ? this.getPinnedOffset() : null, this.$element.removeClass(i.RESET).addClass(l).trigger(l.replace("affix", "affixed") + ".bs.affix")
            }
            "bottom" == a && this.$element.offset({top: r - e - o})
        }
    };
    var n = t.fn.affix;
    t.fn.affix = e, t.fn.affix.Constructor = i, t.fn.affix.noConflict = function () {
        return t.fn.affix = n, this
    }, t(window).on("load", function () {
        t('[data-spy="affix"]').each(function () {
            var i = t(this), n = i.data();
            n.offset = n.offset || {}, null != n.offsetBottom && (n.offset.bottom = n.offsetBottom), null != n.offsetTop && (n.offset.top = n.offsetTop), e.call(i, n)
        })
    })
}(jQuery), !function () {
    "use strict";

    function t(n) {
        if (!n) throw new Error("No options passed to Waypoint constructor");
        if (!n.element) throw new Error("No element option passed to Waypoint constructor");
        if (!n.handler) throw new Error("No handler option passed to Waypoint constructor");
        this.key = "waypoint-" + e, this.options = t.Adapter.extend({}, t.defaults, n), this.element = this.options.element, this.adapter = new t.Adapter(this.element), this.callback = n.handler, this.axis = this.options.horizontal ? "horizontal" : "vertical", this.enabled = this.options.enabled, this.triggerPoint = null, this.group = t.Group.findOrCreate({
            name: this.options.group,
            axis: this.axis
        }), this.context = t.Context.findOrCreateByElement(this.options.context), t.offsetAliases[this.options.offset] && (this.options.offset = t.offsetAliases[this.options.offset]), this.group.add(this), this.context.add(this), i[this.key] = this, e += 1
    }

    var e = 0, i = {};
    t.prototype.queueTrigger = function (t) {
        this.group.queueTrigger(this, t)
    }, t.prototype.trigger = function (t) {
        this.enabled && this.callback && this.callback.apply(this, t)
    }, t.prototype.destroy = function () {
        this.context.remove(this), this.group.remove(this), delete i[this.key]
    }, t.prototype.disable = function () {
        return this.enabled = !1, this
    }, t.prototype.enable = function () {
        return this.context.refresh(), this.enabled = !0, this
    }, t.prototype.next = function () {
        return this.group.next(this)
    }, t.prototype.previous = function () {
        return this.group.previous(this)
    }, t.invokeAll = function (t) {
        var e = [];
        for (var n in i) e.push(i[n]);
        for (var s = 0, o = e.length; o > s; s++) e[s][t]()
    }, t.destroyAll = function () {
        t.invokeAll("destroy")
    }, t.disableAll = function () {
        t.invokeAll("disable")
    }, t.enableAll = function () {
        t.invokeAll("enable")
    }, t.refreshAll = function () {
        t.Context.refreshAll()
    }, t.viewportHeight = function () {
        return window.innerHeight || document.documentElement.clientHeight
    }, t.viewportWidth = function () {
        return document.documentElement.clientWidth
    }, t.adapters = [], t.defaults = {
        context: window,
        continuous: !0,
        enabled: !0,
        group: "default",
        horizontal: !1,
        offset: 0
    }, t.offsetAliases = {
        "bottom-in-view": function () {
            return this.context.innerHeight() - this.adapter.outerHeight()
        }, "right-in-view": function () {
            return this.context.innerWidth() - this.adapter.outerWidth()
        }
    }, window.Waypoint = t
}(), function () {
    "use strict";

    function t(t) {
        window.setTimeout(t, 1e3 / 60)
    }

    function e(t) {
        this.element = t, this.Adapter = s.Adapter, this.adapter = new this.Adapter(t), this.key = "waypoint-context-" + i, this.didScroll = !1, this.didResize = !1, this.oldScroll = {
            x: this.adapter.scrollLeft(),
            y: this.adapter.scrollTop()
        }, this.waypoints = {
            vertical: {},
            horizontal: {}
        }, t.waypointContextKey = this.key, n[t.waypointContextKey] = this, i += 1, this.createThrottledScrollHandler(), this.createThrottledResizeHandler()
    }

    var i = 0, n = {}, s = window.Waypoint, o = window.onload;
    e.prototype.add = function (t) {
        var e = t.options.horizontal ? "horizontal" : "vertical";
        this.waypoints[e][t.key] = t, this.refresh()
    }, e.prototype.checkEmpty = function () {
        var t = this.Adapter.isEmptyObject(this.waypoints.horizontal),
            e = this.Adapter.isEmptyObject(this.waypoints.vertical);
        t && e && (this.adapter.off(".waypoints"), delete n[this.key])
    }, e.prototype.createThrottledResizeHandler = function () {
        function t() {
            e.handleResize(), e.didResize = !1
        }

        var e = this;
        this.adapter.on("resize.waypoints", function () {
            e.didResize || (e.didResize = !0, s.requestAnimationFrame(t))
        })
    }, e.prototype.createThrottledScrollHandler = function () {
        function t() {
            e.handleScroll(), e.didScroll = !1
        }

        var e = this;
        this.adapter.on("scroll.waypoints", function () {
            (!e.didScroll || s.isTouch) && (e.didScroll = !0, s.requestAnimationFrame(t))
        })
    }, e.prototype.handleResize = function () {
        s.Context.refreshAll()
    }, e.prototype.handleScroll = function () {
        var t = {}, e = {
            horizontal: {
                newScroll: this.adapter.scrollLeft(),
                oldScroll: this.oldScroll.x,
                forward: "right",
                backward: "left"
            },
            vertical: {
                newScroll: this.adapter.scrollTop(),
                oldScroll: this.oldScroll.y,
                forward: "down",
                backward: "up"
            }
        };
        for (var i in e) {
            var n = e[i], s = n.newScroll > n.oldScroll, o = s ? n.forward : n.backward;
            for (var r in this.waypoints[i]) {
                var a = this.waypoints[i][r], l = n.oldScroll < a.triggerPoint, h = n.newScroll >= a.triggerPoint,
                    d = l && h, u = !l && !h;
                (d || u) && (a.queueTrigger(o), t[a.group.id] = a.group)
            }
        }
        for (var c in t) t[c].flushTriggers();
        this.oldScroll = {x: e.horizontal.newScroll, y: e.vertical.newScroll}
    }, e.prototype.innerHeight = function () {
        return this.element == this.element.window ? s.viewportHeight() : this.adapter.innerHeight()
    }, e.prototype.remove = function (t) {
        delete this.waypoints[t.axis][t.key], this.checkEmpty()
    }, e.prototype.innerWidth = function () {
        return this.element == this.element.window ? s.viewportWidth() : this.adapter.innerWidth()
    }, e.prototype.destroy = function () {
        var t = [];
        for (var e in this.waypoints) for (var i in this.waypoints[e]) t.push(this.waypoints[e][i]);
        for (var n = 0, s = t.length; s > n; n++) t[n].destroy()
    }, e.prototype.refresh = function () {
        var t, e = this.element == this.element.window, i = e ? void 0 : this.adapter.offset(), n = {};
        this.handleScroll(), t = {
            horizontal: {
                contextOffset: e ? 0 : i.left,
                contextScroll: e ? 0 : this.oldScroll.x,
                contextDimension: this.innerWidth(),
                oldScroll: this.oldScroll.x,
                forward: "right",
                backward: "left",
                offsetProp: "left"
            },
            vertical: {
                contextOffset: e ? 0 : i.top,
                contextScroll: e ? 0 : this.oldScroll.y,
                contextDimension: this.innerHeight(),
                oldScroll: this.oldScroll.y,
                forward: "down",
                backward: "up",
                offsetProp: "top"
            }
        };
        for (var o in t) {
            var r = t[o];
            for (var a in this.waypoints[o]) {
                var l, h, d, u, c, p = this.waypoints[o][a], f = p.options.offset, m = p.triggerPoint, g = 0,
                    v = null == m;
                p.element !== p.element.window && (g = p.adapter.offset()[r.offsetProp]), "function" == typeof f ? f = f.apply(p) : "string" == typeof f && (f = parseFloat(f), p.options.offset.indexOf("%") > -1 && (f = Math.ceil(r.contextDimension * f / 100))), l = r.contextScroll - r.contextOffset, p.triggerPoint = g + l - f, h = m < r.oldScroll, d = p.triggerPoint >= r.oldScroll, u = h && d, c = !h && !d, !v && u ? (p.queueTrigger(r.backward), n[p.group.id] = p.group) : !v && c ? (p.queueTrigger(r.forward), n[p.group.id] = p.group) : v && r.oldScroll >= p.triggerPoint && (p.queueTrigger(r.forward), n[p.group.id] = p.group)
            }
        }
        return s.requestAnimationFrame(function () {
            for (var t in n) n[t].flushTriggers()
        }), this
    }, e.findOrCreateByElement = function (t) {
        return e.findByElement(t) || new e(t)
    }, e.refreshAll = function () {
        for (var t in n) n[t].refresh()
    }, e.findByElement = function (t) {
        return n[t.waypointContextKey]
    }, window.onload = function () {
        o && o(), e.refreshAll()
    }, s.requestAnimationFrame = function (e) {
        var i = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || t;
        i.call(window, e)
    }, s.Context = e
}(), function () {
    "use strict";

    function t(t, e) {
        return t.triggerPoint - e.triggerPoint
    }

    function e(t, e) {
        return e.triggerPoint - t.triggerPoint
    }

    function i(t) {
        this.name = t.name, this.axis = t.axis, this.id = this.name + "-" + this.axis, this.waypoints = [], this.clearTriggerQueues(), n[this.axis][this.name] = this
    }

    var n = {vertical: {}, horizontal: {}}, s = window.Waypoint;
    i.prototype.add = function (t) {
        this.waypoints.push(t)
    }, i.prototype.clearTriggerQueues = function () {
        this.triggerQueues = {up: [], down: [], left: [], right: []}
    }, i.prototype.flushTriggers = function () {
        for (var i in this.triggerQueues) {
            var n = this.triggerQueues[i], s = "up" === i || "left" === i;
            n.sort(s ? e : t);
            for (var o = 0, r = n.length; r > o; o += 1) {
                var a = n[o];
                (a.options.continuous || o === n.length - 1) && a.trigger([i])
            }
        }
        this.clearTriggerQueues()
    }, i.prototype.next = function (e) {
        this.waypoints.sort(t);
        var i = s.Adapter.inArray(e, this.waypoints), n = i === this.waypoints.length - 1;
        return n ? null : this.waypoints[i + 1]
    }, i.prototype.previous = function (e) {
        this.waypoints.sort(t);
        var i = s.Adapter.inArray(e, this.waypoints);
        return i ? this.waypoints[i - 1] : null
    }, i.prototype.queueTrigger = function (t, e) {
        this.triggerQueues[e].push(t)
    }, i.prototype.remove = function (t) {
        var e = s.Adapter.inArray(t, this.waypoints);
        e > -1 && this.waypoints.splice(e, 1)
    }, i.prototype.first = function () {
        return this.waypoints[0]
    }, i.prototype.last = function () {
        return this.waypoints[this.waypoints.length - 1]
    }, i.findOrCreate = function (t) {
        return n[t.axis][t.name] || new i(t)
    }, s.Group = i
}(), function () {
    "use strict";

    function t(t) {
        this.$element = e(t)
    }

    var e = window.jQuery, i = window.Waypoint;
    e.each(["innerHeight", "innerWidth", "off", "offset", "on", "outerHeight", "outerWidth", "scrollLeft", "scrollTop"], function (e, i) {
        t.prototype[i] = function () {
            var t = Array.prototype.slice.call(arguments);
            return this.$element[i].apply(this.$element, t)
        }
    }), e.each(["extend", "inArray", "isEmptyObject"], function (i, n) {
        t[n] = e[n]
    }), i.adapters.push({name: "jquery", Adapter: t}), i.Adapter = t
}(), function () {
    "use strict";

    function t(t) {
        return function () {
            var i = [], n = arguments[0];
            return t.isFunction(arguments[0]) && (n = t.extend({}, arguments[1]), n.handler = arguments[0]), this.each(function () {
                var s = t.extend({}, n, {element: this});
                "string" == typeof s.context && (s.context = t(this).closest(s.context)[0]), i.push(new e(s))
            }), i
        }
    }

    var e = window.Waypoint;
    window.jQuery && (window.jQuery.fn.waypoint = t(window.jQuery)), window.Zepto && (window.Zepto.fn.waypoint = t(window.Zepto))
}(), !function (t) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof exports ? module.exports = t(require("jquery")) : t(jQuery)
}(function (t) {
    "use strict";
    var e = "animsition", i = {
        init: function (n) {
            n = t.extend({
                inClass: "fade-in",
                outClass: "fade-out",
                inDuration: 1500,
                outDuration: 800,
                linkElement: ".animsition-link",
                loading: !0,
                loadingParentElement: "body",
                loadingClass: "animsition-loading",
                loadingInner: "",
                timeout: !1,
                timeoutCountdown: 5e3,
                onLoadEvent: !0,
                browser: ["animation-duration", "-webkit-animation-duration"],
                overlay: !1,
                overlayClass: "animsition-overlay-slide",
                overlayParentElement: "body",
                transition: function (t) {
                    window.location.href = t
                }
            }, n), i.settings = {
                timer: !1,
                data: {
                    inClass: "animsition-in-class",
                    inDuration: "animsition-in-duration",
                    outClass: "animsition-out-class",
                    outDuration: "animsition-out-duration",
                    overlay: "animsition-overlay"
                },
                events: {
                    inStart: "animsition.inStart",
                    inEnd: "animsition.inEnd",
                    outStart: "animsition.outStart",
                    outEnd: "animsition.outEnd"
                }
            };
            var s = i.supportCheck.call(this, n);
            if (!s && n.browser.length > 0 && (!s || !this.length)) return "console" in window || (window.console = {}, window.console.log = function (t) {
                return t
            }), this.length || console.log("Animsition: Element does not exist on page."), s || console.log("Animsition: Does not support this browser."), i.destroy.call(this);
            var o = i.optionCheck.call(this, n);
            return o && t("." + n.overlayClass).length <= 0 && i.addOverlay.call(this, n), n.loading && t("." + n.loadingClass).length <= 0 && i.addLoading.call(this, n), this.each(function () {
                var s = this, o = t(this), r = t(window), a = t(document), l = o.data(e);
                l || (n = t.extend({}, n), o.data(e, {options: n}), n.timeout && i.addTimer.call(s), n.onLoadEvent && r.on("load." + e, function () {
                    i.settings.timer && clearTimeout(i.settings.timer), i["in"].call(s)
                }), r.on("pageshow." + e, function (t) {
                    t.originalEvent.persisted && i["in"].call(s)
                }), r.on("unload." + e, function () {
                }), a.on("click." + e, n.linkElement, function (e) {
                    e.preventDefault();
                    var n = t(this), o = n.attr("href");
                    2 === e.which || e.metaKey || e.shiftKey || -1 !== navigator.platform.toUpperCase().indexOf("WIN") && e.ctrlKey ? window.open(o, "_blank") : i.out.call(s, n, o)
                }))
            })
        }, addOverlay: function (e) {
            t(e.overlayParentElement).prepend('<div class="' + e.overlayClass + '"></div>')
        }, addLoading: function (e) {
            t(e.loadingParentElement).append('<div class="' + e.loadingClass + '">' + e.loadingInner + "</div>")
        }, removeLoading: function () {
            var i = t(this), n = i.data(e).options, s = t(n.loadingParentElement).children("." + n.loadingClass);
            s.fadeOut().remove()
        }, addTimer: function () {
            var n = this, s = t(this), o = s.data(e).options;
            i.settings.timer = setTimeout(function () {
                i["in"].call(n), t(window).off("load." + e)
            }, o.timeoutCountdown)
        }, supportCheck: function (e) {
            var i = t(this), n = e.browser, s = n.length, o = !1;
            0 === s && (o = !0);
            for (var r = 0; s > r; r++) if ("string" == typeof i.css(n[r])) {
                o = !0;
                break
            }
            return o
        }, optionCheck: function (e) {
            var n, s = t(this);
            return n = !(!e.overlay && !s.data(i.settings.data.overlay))
        }, animationCheck: function (i, n, s) {
            var o = t(this), r = o.data(e).options, a = typeof i, l = !n && "number" === a,
                h = n && "string" === a && i.length > 0;
            return l || h ? i = i : n && s ? i = r.inClass : !n && s ? i = r.inDuration : n && !s ? i = r.outClass : n || s || (i = r.outDuration), i
        }, "in": function () {
            var n = this, s = t(this), o = s.data(e).options, r = s.data(i.settings.data.inDuration),
                a = s.data(i.settings.data.inClass), l = i.animationCheck.call(n, r, !1, !0),
                h = i.animationCheck.call(n, a, !0, !0), d = i.optionCheck.call(n, o), u = s.data(e).outClass;
            o.loading && i.removeLoading.call(n), u && s.removeClass(u), d ? i.inOverlay.call(n, h, l) : i.inDefault.call(n, h, l)
        }, inDefault: function (e, n) {
            var s = t(this);
            s.css({"animation-duration": n + "ms"}).addClass(e).trigger(i.settings.events.inStart).animateCallback(function () {
                s.removeClass(e).css({opacity: 1}).trigger(i.settings.events.inEnd)
            })
        }, inOverlay: function (n, s) {
            var o = t(this), r = o.data(e).options;
            o.css({opacity: 1}).trigger(i.settings.events.inStart), t(r.overlayParentElement).children("." + r.overlayClass).css({"animation-duration": s + "ms"}).addClass(n).animateCallback(function () {
                o.trigger(i.settings.events.inEnd)
            })
        }, out: function (n, s) {
            var o = this, r = t(this), a = r.data(e).options, l = n.data(i.settings.data.outClass),
                h = r.data(i.settings.data.outClass), d = n.data(i.settings.data.outDuration),
                u = r.data(i.settings.data.outDuration), c = l ? l : h, p = d ? d : u,
                f = i.animationCheck.call(o, c, !0, !1), m = i.animationCheck.call(o, p, !1, !1),
                g = i.optionCheck.call(o, a);
            r.data(e).outClass = f, g ? i.outOverlay.call(o, f, m, s) : i.outDefault.call(o, f, m, s)
        }, outDefault: function (n, s, o) {
            var r = t(this), a = r.data(e).options;
            r.css({"animation-duration": s + 1 + "ms"}).addClass(n).trigger(i.settings.events.outStart).animateCallback(function () {
                r.trigger(i.settings.events.outEnd), a.transition(o)
            })
        }, outOverlay: function (n, s, o) {
            var r = this, a = t(this), l = a.data(e).options, h = a.data(i.settings.data.inClass),
                d = i.animationCheck.call(r, h, !0, !0);
            t(l.overlayParentElement).children("." + l.overlayClass).css({"animation-duration": s + 1 + "ms"}).removeClass(d).addClass(n).trigger(i.settings.events.outStart).animateCallback(function () {
                a.trigger(i.settings.events.outEnd), l.transition(o)
            })
        }, destroy: function () {
            return this.each(function () {
                var i = t(this);
                t(window).off("." + e), i.css({opacity: 1}).removeData(e)
            })
        }
    };
    t.fn.animateCallback = function (e) {
        var i = "animationend webkitAnimationEnd";
        return this.each(function () {
            var n = t(this);
            n.on(i, function () {
                return n.off(i), e.call(this)
            })
        })
    }, t.fn.animsition = function (n) {
        return i[n] ? i[n].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof n && n ? void t.error("Method " + n + " does not exist on jQuery." + e) : i.init.apply(this, arguments)
    }
}), !function (t, e) {
    "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e()
}(this, function () {
    function t() {
    }

    var e = t.prototype;
    return e.on = function (t, e) {
        if (t && e) {
            var i = this._events = this._events || {}, n = i[t] = i[t] || [];
            return -1 == n.indexOf(e) && n.push(e), this
        }
    }, e.once = function (t, e) {
        if (t && e) {
            this.on(t, e);
            var i = this._onceEvents = this._onceEvents || {}, n = i[t] = i[t] || [];
            return n[e] = !0, this
        }
    }, e.off = function (t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
            var n = i.indexOf(e);
            return -1 != n && i.splice(n, 1), this
        }
    }, e.emitEvent = function (t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
            var n = 0, s = i[n];
            e = e || [];
            for (var o = this._onceEvents && this._onceEvents[t]; s;) {
                var r = o && o[s];
                r && (this.off(t, s), delete o[s]), s.apply(this, e), n += r ? 0 : 1, s = i[n]
            }
            return this
        }
    }, t
}), function (t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["ev-emitter/ev-emitter"], function (i) {
        return e(t, i)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("ev-emitter")) : t.imagesLoaded = e(t, t.EvEmitter)
}(window, function (t, e) {
    function i(t, e) {
        for (var i in e) t[i] = e[i];
        return t
    }

    function n(t) {
        var e = [];
        if (Array.isArray(t)) e = t; else if ("number" == typeof t.length) for (var i = 0; i < t.length; i++) e.push(t[i]); else e.push(t);
        return e
    }

    function s(t, e, o) {
        return this instanceof s ? ("string" == typeof t && (t = document.querySelectorAll(t)), this.elements = n(t), this.options = i({}, this.options), "function" == typeof e ? o = e : i(this.options, e), o && this.on("always", o), this.getImages(), a && (this.jqDeferred = new a.Deferred), void setTimeout(function () {
            this.check()
        }.bind(this))) : new s(t, e, o)
    }

    function o(t) {
        this.img = t
    }

    function r(t, e) {
        this.url = t, this.element = e, this.img = new Image
    }

    var a = t.jQuery, l = t.console;
    s.prototype = Object.create(e.prototype), s.prototype.options = {}, s.prototype.getImages = function () {
        this.images = [], this.elements.forEach(this.addElementImages, this)
    }, s.prototype.addElementImages = function (t) {
        "IMG" == t.nodeName && this.addImage(t), this.options.background === !0 && this.addElementBackgroundImages(t);
        var e = t.nodeType;
        if (e && h[e]) {
            for (var i = t.querySelectorAll("img"), n = 0; n < i.length; n++) {
                var s = i[n];
                this.addImage(s)
            }
            if ("string" == typeof this.options.background) {
                var o = t.querySelectorAll(this.options.background);
                for (n = 0; n < o.length; n++) {
                    var r = o[n];
                    this.addElementBackgroundImages(r)
                }
            }
        }
    };
    var h = {1: !0, 9: !0, 11: !0};
    return s.prototype.addElementBackgroundImages = function (t) {
        var e = getComputedStyle(t);
        if (e) for (var i = /url\((['"])?(.*?)\1\)/gi, n = i.exec(e.backgroundImage); null !== n;) {
            var s = n && n[2];
            s && this.addBackground(s, t), n = i.exec(e.backgroundImage)
        }
    }, s.prototype.addImage = function (t) {
        var e = new o(t);
        this.images.push(e)
    }, s.prototype.addBackground = function (t, e) {
        var i = new r(t, e);
        this.images.push(i)
    }, s.prototype.check = function () {
        function t(t, i, n) {
            setTimeout(function () {
                e.progress(t, i, n)
            })
        }

        var e = this;
        return this.progressedCount = 0, this.hasAnyBroken = !1, this.images.length ? void this.images.forEach(function (e) {
            e.once("progress", t), e.check()
        }) : void this.complete()
    }, s.prototype.progress = function (t, e, i) {
        this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !t.isLoaded, this.emitEvent("progress", [this, t, e]), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, t), this.progressedCount == this.images.length && this.complete(), this.options.debug && l && l.log("progress: " + i, t, e)
    }, s.prototype.complete = function () {
        var t = this.hasAnyBroken ? "fail" : "done";
        if (this.isComplete = !0, this.emitEvent(t, [this]), this.emitEvent("always", [this]), this.jqDeferred) {
            var e = this.hasAnyBroken ? "reject" : "resolve";
            this.jqDeferred[e](this)
        }
    }, o.prototype = Object.create(e.prototype), o.prototype.check = function () {
        var t = this.getIsImageComplete();
        return t ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image, this.proxyImage.addEventListener("load", this), this.proxyImage.addEventListener("error", this), this.img.addEventListener("load", this), this.img.addEventListener("error", this), void (this.proxyImage.src = this.img.src))
    }, o.prototype.getIsImageComplete = function () {
        return this.img.complete && void 0 !== this.img.naturalWidth
    }, o.prototype.confirm = function (t, e) {
        this.isLoaded = t, this.emitEvent("progress", [this, this.img, e])
    }, o.prototype.handleEvent = function (t) {
        var e = "on" + t.type;
        this[e] && this[e](t)
    }, o.prototype.onload = function () {
        this.confirm(!0, "onload"), this.unbindEvents()
    }, o.prototype.onerror = function () {
        this.confirm(!1, "onerror"), this.unbindEvents()
    }, o.prototype.unbindEvents = function () {
        this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
    }, r.prototype = Object.create(o.prototype), r.prototype.check = function () {
        this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.img.src = this.url;
        var t = this.getIsImageComplete();
        t && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents())
    }, r.prototype.unbindEvents = function () {
        this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
    }, r.prototype.confirm = function (t, e) {
        this.isLoaded = t, this.emitEvent("progress", [this, this.element, e])
    }, s.makeJQueryPlugin = function (e) {
        e = e || t.jQuery, e && (a = e, a.fn.imagesLoaded = function (t, e) {
            var i = new s(this, t, e);
            return i.jqDeferred.promise(a(this))
        })
    }, s.makeJQueryPlugin(), s
}), !function (t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", ["jquery"], function (i) {
        e(t, i)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("jquery")) : t.jQueryBridget = e(t, t.jQuery)
}(window, function (t, e) {
    "use strict";

    function i(i, o, a) {
        function l(t, e, n) {
            var s, o = "$()." + i + '("' + e + '")';
            return t.each(function (t, l) {
                var h = a.data(l, i);
                if (!h) return void r(i + " not initialized. Cannot call methods, i.e. " + o);
                var d = h[e];
                if (!d || "_" == e.charAt(0)) return void r(o + " is not a valid method");
                var u = d.apply(h, n);
                s = void 0 === s ? u : s
            }), void 0 !== s ? s : t
        }

        function h(t, e) {
            t.each(function (t, n) {
                var s = a.data(n, i);
                s ? (s.option(e), s._init()) : (s = new o(n, e), a.data(n, i, s))
            })
        }

        a = a || e || t.jQuery, a && (o.prototype.option || (o.prototype.option = function (t) {
            a.isPlainObject(t) && (this.options = a.extend(!0, this.options, t))
        }), a.fn[i] = function (t) {
            if ("string" == typeof t) {
                var e = s.call(arguments, 1);
                return l(this, t, e)
            }
            return h(this, t), this
        }, n(a))
    }

    function n(t) {
        !t || t && t.bridget || (t.bridget = i)
    }

    var s = Array.prototype.slice, o = t.console, r = "undefined" == typeof o ? function () {
    } : function (t) {
        o.error(t)
    };
    return n(e || t.jQuery), i
}), function (t, e) {
    "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e()
}(this, function () {
    function t() {
    }

    var e = t.prototype;
    return e.on = function (t, e) {
        if (t && e) {
            var i = this._events = this._events || {}, n = i[t] = i[t] || [];
            return -1 == n.indexOf(e) && n.push(e), this
        }
    }, e.once = function (t, e) {
        if (t && e) {
            this.on(t, e);
            var i = this._onceEvents = this._onceEvents || {}, n = i[t] = i[t] || {};
            return n[e] = !0, this
        }
    }, e.off = function (t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
            var n = i.indexOf(e);
            return -1 != n && i.splice(n, 1), this
        }
    }, e.emitEvent = function (t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
            var n = 0, s = i[n];
            e = e || [];
            for (var o = this._onceEvents && this._onceEvents[t]; s;) {
                var r = o && o[s];
                r && (this.off(t, s), delete o[s]), s.apply(this, e), n += r ? 0 : 1, s = i[n]
            }
            return this
        }
    }, t
}), function (t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("get-size/get-size", [], function () {
        return e()
    }) : "object" == typeof module && module.exports ? module.exports = e() : t.getSize = e()
}(window, function () {
    "use strict";

    function t(t) {
        var e = parseFloat(t), i = -1 == t.indexOf("%") && !isNaN(e);
        return i && e
    }

    function e() {
    }

    function i() {
        for (var t = {
            width: 0,
            height: 0,
            innerWidth: 0,
            innerHeight: 0,
            outerWidth: 0,
            outerHeight: 0
        }, e = 0; h > e; e++) {
            var i = l[e];
            t[i] = 0
        }
        return t
    }

    function n(t) {
        var e = getComputedStyle(t);
        return e || a("Style returned " + e + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"), e
    }

    function s() {
        if (!d) {
            d = !0;
            var e = document.createElement("div");
            e.style.width = "200px", e.style.padding = "1px 2px 3px 4px", e.style.borderStyle = "solid", e.style.borderWidth = "1px 2px 3px 4px", e.style.boxSizing = "border-box";
            var i = document.body || document.documentElement;
            i.appendChild(e);
            var s = n(e);
            o.isBoxSizeOuter = r = 200 == t(s.width), i.removeChild(e)
        }
    }

    function o(e) {
        if (s(), "string" == typeof e && (e = document.querySelector(e)), e && "object" == typeof e && e.nodeType) {
            var o = n(e);
            if ("none" == o.display) return i();
            var a = {};
            a.width = e.offsetWidth, a.height = e.offsetHeight;
            for (var d = a.isBorderBox = "border-box" == o.boxSizing, u = 0; h > u; u++) {
                var c = l[u], p = o[c], f = parseFloat(p);
                a[c] = isNaN(f) ? 0 : f
            }
            var m = a.paddingLeft + a.paddingRight, g = a.paddingTop + a.paddingBottom,
                v = a.marginLeft + a.marginRight, y = a.marginTop + a.marginBottom,
                w = a.borderLeftWidth + a.borderRightWidth, b = a.borderTopWidth + a.borderBottomWidth, x = d && r,
                C = t(o.width);
            C !== !1 && (a.width = C + (x ? 0 : m + w));
            var T = t(o.height);
            return T !== !1 && (a.height = T + (x ? 0 : g + b)), a.innerWidth = a.width - (m + w), a.innerHeight = a.height - (g + b), a.outerWidth = a.width + v, a.outerHeight = a.height + y, a
        }
    }

    var r, a = "undefined" == typeof console ? e : function (t) {
            console.error(t)
        },
        l = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
        h = l.length, d = !1;
    return o
}), function (t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", e) : "object" == typeof module && module.exports ? module.exports = e() : t.matchesSelector = e()
}(window, function () {
    "use strict";
    var t = function () {
        var t = Element.prototype;
        if (t.matches) return "matches";
        if (t.matchesSelector) return "matchesSelector";
        for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
            var n = e[i], s = n + "MatchesSelector";
            if (t[s]) return s
        }
    }();
    return function (e, i) {
        return e[t](i)
    }
}), function (t, e) {
    "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function (i) {
        return e(t, i)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("desandro-matches-selector")) : t.fizzyUIUtils = e(t, t.matchesSelector)
}(window, function (t, e) {
    var i = {};
    i.extend = function (t, e) {
        for (var i in e) t[i] = e[i];
        return t
    }, i.modulo = function (t, e) {
        return (t % e + e) % e
    }, i.makeArray = function (t) {
        var e = [];
        if (Array.isArray(t)) e = t; else if (t && "number" == typeof t.length) for (var i = 0; i < t.length; i++) e.push(t[i]); else e.push(t);
        return e
    }, i.removeFrom = function (t, e) {
        var i = t.indexOf(e);
        -1 != i && t.splice(i, 1)
    }, i.getParent = function (t, i) {
        for (; t != document.body;) if (t = t.parentNode, e(t, i)) return t
    }, i.getQueryElement = function (t) {
        return "string" == typeof t ? document.querySelector(t) : t
    }, i.handleEvent = function (t) {
        var e = "on" + t.type;
        this[e] && this[e](t)
    }, i.filterFindElements = function (t, n) {
        t = i.makeArray(t);
        var s = [];
        return t.forEach(function (t) {
            if (t instanceof HTMLElement) {
                if (!n) return void s.push(t);
                e(t, n) && s.push(t);
                for (var i = t.querySelectorAll(n), o = 0; o < i.length; o++) s.push(i[o])
            }
        }), s
    }, i.debounceMethod = function (t, e, i) {
        var n = t.prototype[e], s = e + "Timeout";
        t.prototype[e] = function () {
            var t = this[s];
            t && clearTimeout(t);
            var e = arguments, o = this;
            this[s] = setTimeout(function () {
                n.apply(o, e), delete o[s]
            }, i || 100)
        }
    }, i.docReady = function (t) {
        "complete" == document.readyState ? t() : document.addEventListener("DOMContentLoaded", t)
    }, i.toDashed = function (t) {
        return t.replace(/(.)([A-Z])/g, function (t, e, i) {
            return e + "-" + i
        }).toLowerCase()
    };
    var n = t.console;
    return i.htmlInit = function (e, s) {
        i.docReady(function () {
            var o = i.toDashed(s), r = "data-" + o, a = document.querySelectorAll("[" + r + "]"),
                l = document.querySelectorAll(".js-" + o), h = i.makeArray(a).concat(i.makeArray(l)),
                d = r + "-options", u = t.jQuery;
            h.forEach(function (t) {
                var i, o = t.getAttribute(r) || t.getAttribute(d);
                try {
                    i = o && JSON.parse(o)
                } catch (a) {
                    return void (n && n.error("Error parsing " + r + " on " + t.className + ": " + a))
                }
                var l = new e(t, i);
                u && u.data(t, s, l)
            })
        })
    }, i
}), function (t, e) {
    "function" == typeof define && define.amd ? define("outlayer/item", ["ev-emitter/ev-emitter", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("ev-emitter"), require("get-size")) : (t.Outlayer = {}, t.Outlayer.Item = e(t.EvEmitter, t.getSize))
}(window, function (t, e) {
    "use strict";

    function i(t) {
        for (var e in t) return !1;
        return e = null, !0
    }

    function n(t, e) {
        t && (this.element = t, this.layout = e, this.position = {x: 0, y: 0}, this._create())
    }

    function s(t) {
        return t.replace(/([A-Z])/g, function (t) {
            return "-" + t.toLowerCase()
        })
    }

    var o = document.documentElement.style, r = "string" == typeof o.transition ? "transition" : "WebkitTransition",
        a = "string" == typeof o.transform ? "transform" : "WebkitTransform",
        l = {WebkitTransition: "webkitTransitionEnd", transition: "transitionend"}[r], h = {
            transform: a,
            transition: r,
            transitionDuration: r + "Duration",
            transitionProperty: r + "Property",
            transitionDelay: r + "Delay"
        }, d = n.prototype = Object.create(t.prototype);
    d.constructor = n, d._create = function () {
        this._transn = {ingProperties: {}, clean: {}, onEnd: {}}, this.css({position: "absolute"})
    }, d.handleEvent = function (t) {
        var e = "on" + t.type;
        this[e] && this[e](t)
    }, d.getSize = function () {
        this.size = e(this.element)
    }, d.css = function (t) {
        var e = this.element.style;
        for (var i in t) {
            var n = h[i] || i;
            e[n] = t[i]
        }
    }, d.getPosition = function () {
        var t = getComputedStyle(this.element), e = this.layout._getOption("originLeft"),
            i = this.layout._getOption("originTop"), n = t[e ? "left" : "right"], s = t[i ? "top" : "bottom"],
            o = this.layout.size, r = -1 != n.indexOf("%") ? parseFloat(n) / 100 * o.width : parseInt(n, 10),
            a = -1 != s.indexOf("%") ? parseFloat(s) / 100 * o.height : parseInt(s, 10);
        r = isNaN(r) ? 0 : r, a = isNaN(a) ? 0 : a, r -= e ? o.paddingLeft : o.paddingRight, a -= i ? o.paddingTop : o.paddingBottom, this.position.x = r, this.position.y = a
    }, d.layoutPosition = function () {
        var t = this.layout.size, e = {}, i = this.layout._getOption("originLeft"),
            n = this.layout._getOption("originTop"), s = i ? "paddingLeft" : "paddingRight", o = i ? "left" : "right",
            r = i ? "right" : "left", a = this.position.x + t[s];
        e[o] = this.getXValue(a), e[r] = "";
        var l = n ? "paddingTop" : "paddingBottom", h = n ? "top" : "bottom", d = n ? "bottom" : "top",
            u = this.position.y + t[l];
        e[h] = this.getYValue(u), e[d] = "", this.css(e), this.emitEvent("layout", [this])
    }, d.getXValue = function (t) {
        var e = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && !e ? t / this.layout.size.width * 100 + "%" : t + "px"
    }, d.getYValue = function (t) {
        var e = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && e ? t / this.layout.size.height * 100 + "%" : t + "px"
    }, d._transitionTo = function (t, e) {
        this.getPosition();
        var i = this.position.x, n = this.position.y, s = parseInt(t, 10), o = parseInt(e, 10),
            r = s === this.position.x && o === this.position.y;
        if (this.setPosition(t, e), r && !this.isTransitioning) return void this.layoutPosition();
        var a = t - i, l = e - n, h = {};
        h.transform = this.getTranslate(a, l), this.transition({
            to: h,
            onTransitionEnd: {transform: this.layoutPosition},
            isCleaning: !0
        })
    }, d.getTranslate = function (t, e) {
        var i = this.layout._getOption("originLeft"), n = this.layout._getOption("originTop");
        return t = i ? t : -t, e = n ? e : -e, "translate3d(" + t + "px, " + e + "px, 0)"
    }, d.goTo = function (t, e) {
        this.setPosition(t, e), this.layoutPosition()
    }, d.moveTo = d._transitionTo, d.setPosition = function (t, e) {
        this.position.x = parseInt(t, 10), this.position.y = parseInt(e, 10)
    }, d._nonTransition = function (t) {
        this.css(t.to), t.isCleaning && this._removeStyles(t.to);
        for (var e in t.onTransitionEnd) t.onTransitionEnd[e].call(this)
    }, d.transition = function (t) {
        if (!parseFloat(this.layout.options.transitionDuration)) return void this._nonTransition(t);
        var e = this._transn;
        for (var i in t.onTransitionEnd) e.onEnd[i] = t.onTransitionEnd[i];
        for (i in t.to) e.ingProperties[i] = !0, t.isCleaning && (e.clean[i] = !0);
        if (t.from) {
            this.css(t.from);
            var n = this.element.offsetHeight;
            n = null
        }
        this.enableTransition(t.to), this.css(t.to), this.isTransitioning = !0
    };
    var u = "opacity," + s(a);
    d.enableTransition = function () {
        if (!this.isTransitioning) {
            var t = this.layout.options.transitionDuration;
            t = "number" == typeof t ? t + "ms" : t, this.css({
                transitionProperty: u,
                transitionDuration: t,
                transitionDelay: this.staggerDelay || 0
            }), this.element.addEventListener(l, this, !1)
        }
    }, d.onwebkitTransitionEnd = function (t) {
        this.ontransitionend(t)
    }, d.onotransitionend = function (t) {
        this.ontransitionend(t)
    };
    var c = {"-webkit-transform": "transform"};
    d.ontransitionend = function (t) {
        if (t.target === this.element) {
            var e = this._transn, n = c[t.propertyName] || t.propertyName;
            if (delete e.ingProperties[n], i(e.ingProperties) && this.disableTransition(), n in e.clean && (this.element.style[t.propertyName] = "", delete e.clean[n]), n in e.onEnd) {
                var s = e.onEnd[n];
                s.call(this), delete e.onEnd[n]
            }
            this.emitEvent("transitionEnd", [this])
        }
    }, d.disableTransition = function () {
        this.removeTransitionStyles(), this.element.removeEventListener(l, this, !1), this.isTransitioning = !1
    }, d._removeStyles = function (t) {
        var e = {};
        for (var i in t) e[i] = "";
        this.css(e)
    };
    var p = {transitionProperty: "", transitionDuration: "", transitionDelay: ""};
    return d.removeTransitionStyles = function () {
        this.css(p)
    }, d.stagger = function (t) {
        t = isNaN(t) ? 0 : t, this.staggerDelay = t + "ms"
    }, d.removeElem = function () {
        this.element.parentNode.removeChild(this.element), this.css({display: ""}), this.emitEvent("remove", [this])
    }, d.remove = function () {
        return r && parseFloat(this.layout.options.transitionDuration) ? (this.once("transitionEnd", function () {
            this.removeElem()
        }), void this.hide()) : void this.removeElem()
    }, d.reveal = function () {
        delete this.isHidden, this.css({display: ""});
        var t = this.layout.options, e = {}, i = this.getHideRevealTransitionEndProperty("visibleStyle");
        e[i] = this.onRevealTransitionEnd, this.transition({
            from: t.hiddenStyle,
            to: t.visibleStyle,
            isCleaning: !0,
            onTransitionEnd: e
        })
    }, d.onRevealTransitionEnd = function () {
        this.isHidden || this.emitEvent("reveal")
    }, d.getHideRevealTransitionEndProperty = function (t) {
        var e = this.layout.options[t];
        if (e.opacity) return "opacity";
        for (var i in e) return i
    }, d.hide = function () {
        this.isHidden = !0, this.css({display: ""});
        var t = this.layout.options, e = {}, i = this.getHideRevealTransitionEndProperty("hiddenStyle");
        e[i] = this.onHideTransitionEnd, this.transition({
            from: t.visibleStyle,
            to: t.hiddenStyle,
            isCleaning: !0,
            onTransitionEnd: e
        })
    }, d.onHideTransitionEnd = function () {
        this.isHidden && (this.css({display: "none"}), this.emitEvent("hide"))
    }, d.destroy = function () {
        this.css({position: "", left: "", right: "", top: "", bottom: "", transition: "", transform: ""})
    }, n
}), function (t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("outlayer/outlayer", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function (i, n, s, o) {
        return e(t, i, n, s, o)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : t.Outlayer = e(t, t.EvEmitter, t.getSize, t.fizzyUIUtils, t.Outlayer.Item)
}(window, function (t, e, i, n, s) {
    "use strict";

    function o(t, e) {
        var i = n.getQueryElement(t);
        if (!i) return void (l && l.error("Bad element for " + this.constructor.namespace + ": " + (i || t)));
        this.element = i, h && (this.$element = h(this.element)), this.options = n.extend({}, this.constructor.defaults), this.option(e);
        var s = ++u;
        this.element.outlayerGUID = s, c[s] = this, this._create();
        var o = this._getOption("initLayout");
        o && this.layout()
    }

    function r(t) {
        function e() {
            t.apply(this, arguments)
        }

        return e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e
    }

    function a(t) {
        if ("number" == typeof t) return t;
        var e = t.match(/(^\d*\.?\d*)(\w*)/), i = e && e[1], n = e && e[2];
        if (!i.length) return 0;
        i = parseFloat(i);
        var s = f[n] || 1;
        return i * s
    }

    var l = t.console, h = t.jQuery, d = function () {
    }, u = 0, c = {};
    o.namespace = "outlayer", o.Item = s, o.defaults = {
        containerStyle: {position: "relative"},
        initLayout: !0,
        originLeft: !0,
        originTop: !0,
        resize: !0,
        resizeContainer: !0,
        transitionDuration: "0.4s",
        hiddenStyle: {opacity: 0, transform: "scale(0.001)"},
        visibleStyle: {opacity: 1, transform: "scale(1)"}
    };
    var p = o.prototype;
    n.extend(p, e.prototype), p.option = function (t) {
        n.extend(this.options, t)
    }, p._getOption = function (t) {
        var e = this.constructor.compatOptions[t];
        return e && void 0 !== this.options[e] ? this.options[e] : this.options[t]
    }, o.compatOptions = {
        initLayout: "isInitLayout",
        horizontal: "isHorizontal",
        layoutInstant: "isLayoutInstant",
        originLeft: "isOriginLeft",
        originTop: "isOriginTop",
        resize: "isResizeBound",
        resizeContainer: "isResizingContainer"
    }, p._create = function () {
        this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), n.extend(this.element.style, this.options.containerStyle);
        var t = this._getOption("resize");
        t && this.bindResize()
    }, p.reloadItems = function () {
        this.items = this._itemize(this.element.children)
    }, p._itemize = function (t) {
        for (var e = this._filterFindItemElements(t), i = this.constructor.Item, n = [], s = 0; s < e.length; s++) {
            var o = e[s], r = new i(o, this);
            n.push(r)
        }
        return n
    }, p._filterFindItemElements = function (t) {
        return n.filterFindElements(t, this.options.itemSelector)
    }, p.getItemElements = function () {
        return this.items.map(function (t) {
            return t.element
        })
    }, p.layout = function () {
        this._resetLayout(), this._manageStamps();
        var t = this._getOption("layoutInstant"), e = void 0 !== t ? t : !this._isLayoutInited;
        this.layoutItems(this.items, e), this._isLayoutInited = !0
    }, p._init = p.layout, p._resetLayout = function () {
        this.getSize()
    }, p.getSize = function () {
        this.size = i(this.element)
    }, p._getMeasurement = function (t, e) {
        var n, s = this.options[t];
        s ? ("string" == typeof s ? n = this.element.querySelector(s) : s instanceof HTMLElement && (n = s), this[t] = n ? i(n)[e] : s) : this[t] = 0
    }, p.layoutItems = function (t, e) {
        t = this._getItemsForLayout(t), this._layoutItems(t, e), this._postLayout()
    }, p._getItemsForLayout = function (t) {
        return t.filter(function (t) {
            return !t.isIgnored
        })
    }, p._layoutItems = function (t, e) {
        if (this._emitCompleteOnItems("layout", t), t && t.length) {
            var i = [];
            t.forEach(function (t) {
                var n = this._getItemLayoutPosition(t);
                n.item = t, n.isInstant = e || t.isLayoutInstant, i.push(n)
            }, this), this._processLayoutQueue(i)
        }
    }, p._getItemLayoutPosition = function () {
        return {x: 0, y: 0}
    }, p._processLayoutQueue = function (t) {
        this.updateStagger(), t.forEach(function (t, e) {
            this._positionItem(t.item, t.x, t.y, t.isInstant, e)
        }, this)
    }, p.updateStagger = function () {
        var t = this.options.stagger;
        return null === t || void 0 === t ? void (this.stagger = 0) : (this.stagger = a(t), this.stagger)
    }, p._positionItem = function (t, e, i, n, s) {
        n ? t.goTo(e, i) : (t.stagger(s * this.stagger), t.moveTo(e, i))
    }, p._postLayout = function () {
        this.resizeContainer()
    }, p.resizeContainer = function () {
        var t = this._getOption("resizeContainer");
        if (t) {
            var e = this._getContainerSize();
            e && (this._setContainerMeasure(e.width, !0), this._setContainerMeasure(e.height, !1))
        }
    }, p._getContainerSize = d, p._setContainerMeasure = function (t, e) {
        if (void 0 !== t) {
            var i = this.size;
            i.isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth), t = Math.max(t, 0), this.element.style[e ? "width" : "height"] = t + "px"
        }
    }, p._emitCompleteOnItems = function (t, e) {
        function i() {
            s.dispatchEvent(t + "Complete", null, [e])
        }

        function n() {
            r++, r == o && i()
        }

        var s = this, o = e.length;
        if (!e || !o) return void i();
        var r = 0;
        e.forEach(function (e) {
            e.once(t, n)
        })
    }, p.dispatchEvent = function (t, e, i) {
        var n = e ? [e].concat(i) : i;
        if (this.emitEvent(t, n), h) if (this.$element = this.$element || h(this.element), e) {
            var s = h.Event(e);
            s.type = t, this.$element.trigger(s, i)
        } else this.$element.trigger(t, i)
    }, p.ignore = function (t) {
        var e = this.getItem(t);
        e && (e.isIgnored = !0)
    }, p.unignore = function (t) {
        var e = this.getItem(t);
        e && delete e.isIgnored
    }, p.stamp = function (t) {
        t = this._find(t), t && (this.stamps = this.stamps.concat(t), t.forEach(this.ignore, this))
    }, p.unstamp = function (t) {
        t = this._find(t), t && t.forEach(function (t) {
            n.removeFrom(this.stamps, t), this.unignore(t)
        }, this)
    }, p._find = function (t) {
        return t ? ("string" == typeof t && (t = this.element.querySelectorAll(t)), t = n.makeArray(t)) : void 0
    }, p._manageStamps = function () {
        this.stamps && this.stamps.length && (this._getBoundingRect(), this.stamps.forEach(this._manageStamp, this))
    }, p._getBoundingRect = function () {
        var t = this.element.getBoundingClientRect(), e = this.size;
        this._boundingRect = {
            left: t.left + e.paddingLeft + e.borderLeftWidth,
            top: t.top + e.paddingTop + e.borderTopWidth,
            right: t.right - (e.paddingRight + e.borderRightWidth),
            bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth)
        }
    }, p._manageStamp = d, p._getElementOffset = function (t) {
        var e = t.getBoundingClientRect(), n = this._boundingRect, s = i(t), o = {
            left: e.left - n.left - s.marginLeft,
            top: e.top - n.top - s.marginTop,
            right: n.right - e.right - s.marginRight,
            bottom: n.bottom - e.bottom - s.marginBottom
        };
        return o
    }, p.handleEvent = n.handleEvent, p.bindResize = function () {
        t.addEventListener("resize", this), this.isResizeBound = !0
    }, p.unbindResize = function () {
        t.removeEventListener("resize", this), this.isResizeBound = !1
    }, p.onresize = function () {
        this.resize()
    }, n.debounceMethod(o, "onresize", 100), p.resize = function () {
        this.isResizeBound && this.needsResizeLayout() && this.layout()
    }, p.needsResizeLayout = function () {
        var t = i(this.element), e = this.size && t;
        return e && t.innerWidth !== this.size.innerWidth
    }, p.addItems = function (t) {
        var e = this._itemize(t);
        return e.length && (this.items = this.items.concat(e)), e
    }, p.appended = function (t) {
        var e = this.addItems(t);
        e.length && (this.layoutItems(e, !0), this.reveal(e))
    }, p.prepended = function (t) {
        var e = this._itemize(t);
        if (e.length) {
            var i = this.items.slice(0);
            this.items = e.concat(i), this._resetLayout(), this._manageStamps(), this.layoutItems(e, !0), this.reveal(e), this.layoutItems(i)
        }
    }, p.reveal = function (t) {
        if (this._emitCompleteOnItems("reveal", t), t && t.length) {
            var e = this.updateStagger();
            t.forEach(function (t, i) {
                t.stagger(i * e), t.reveal()
            })
        }
    }, p.hide = function (t) {
        if (this._emitCompleteOnItems("hide", t), t && t.length) {
            var e = this.updateStagger();
            t.forEach(function (t, i) {
                t.stagger(i * e), t.hide()
            })
        }
    }, p.revealItemElements = function (t) {
        var e = this.getItems(t);
        this.reveal(e)
    }, p.hideItemElements = function (t) {
        var e = this.getItems(t);
        this.hide(e)
    }, p.getItem = function (t) {
        for (var e = 0; e < this.items.length; e++) {
            var i = this.items[e];
            if (i.element == t) return i
        }
    }, p.getItems = function (t) {
        t = n.makeArray(t);
        var e = [];
        return t.forEach(function (t) {
            var i = this.getItem(t);
            i && e.push(i)
        }, this), e
    }, p.remove = function (t) {
        var e = this.getItems(t);
        this._emitCompleteOnItems("remove", e), e && e.length && e.forEach(function (t) {
            t.remove(), n.removeFrom(this.items, t)
        }, this)
    }, p.destroy = function () {
        var t = this.element.style;
        t.height = "", t.position = "", t.width = "", this.items.forEach(function (t) {
            t.destroy()
        }), this.unbindResize();
        var e = this.element.outlayerGUID;
        delete c[e], delete this.element.outlayerGUID, h && h.removeData(this.element, this.constructor.namespace)
    }, o.data = function (t) {
        t = n.getQueryElement(t);
        var e = t && t.outlayerGUID;
        return e && c[e]
    }, o.create = function (t, e) {
        var i = r(o);
        return i.defaults = n.extend({}, o.defaults), n.extend(i.defaults, e), i.compatOptions = n.extend({}, o.compatOptions), i.namespace = t, i.data = o.data, i.Item = r(s), n.htmlInit(i, t), h && h.bridget && h.bridget(t, i), i
    };
    var f = {ms: 1, s: 1e3};
    return o.Item = s, o
}), function (t, e) {
    "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer"), require("get-size")) : t.Masonry = e(t.Outlayer, t.getSize)
}(window, function (t, e) {
    var i = t.create("masonry");
    return i.compatOptions.fitWidth = "isFitWidth", i.prototype._resetLayout = function () {
        this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns(), this.colYs = [];
        for (var t = 0; t < this.cols; t++) this.colYs.push(0);
        this.maxY = 0
    }, i.prototype.measureColumns = function () {
        if (this.getContainerWidth(), !this.columnWidth) {
            var t = this.items[0], i = t && t.element;
            this.columnWidth = i && e(i).outerWidth || this.containerWidth
        }
        var n = this.columnWidth += this.gutter, s = this.containerWidth + this.gutter, o = s / n, r = n - s % n,
            a = r && 1 > r ? "round" : "floor";
        o = Math[a](o), this.cols = Math.max(o, 1)
    }, i.prototype.getContainerWidth = function () {
        var t = this._getOption("fitWidth"), i = t ? this.element.parentNode : this.element, n = e(i);
        this.containerWidth = n && n.innerWidth
    }, i.prototype._getItemLayoutPosition = function (t) {
        t.getSize();
        var e = t.size.outerWidth % this.columnWidth, i = e && 1 > e ? "round" : "ceil",
            n = Math[i](t.size.outerWidth / this.columnWidth);
        n = Math.min(n, this.cols);
        for (var s = this._getColGroup(n), o = Math.min.apply(Math, s), r = s.indexOf(o), a = {
            x: this.columnWidth * r,
            y: o
        }, l = o + t.size.outerHeight, h = this.cols + 1 - s.length, d = 0; h > d; d++) this.colYs[r + d] = l;
        return a
    }, i.prototype._getColGroup = function (t) {
        if (2 > t) return this.colYs;
        for (var e = [], i = this.cols + 1 - t, n = 0; i > n; n++) {
            var s = this.colYs.slice(n, n + t);
            e[n] = Math.max.apply(Math, s)
        }
        return e
    }, i.prototype._manageStamp = function (t) {
        var i = e(t), n = this._getElementOffset(t), s = this._getOption("originLeft"), o = s ? n.left : n.right,
            r = o + i.outerWidth, a = Math.floor(o / this.columnWidth);
        a = Math.max(0, a);
        var l = Math.floor(r / this.columnWidth);
        l -= r % this.columnWidth ? 0 : 1, l = Math.min(this.cols - 1, l);
        for (var h = this._getOption("originTop"), d = (h ? n.top : n.bottom) + i.outerHeight, u = a; l >= u; u++) this.colYs[u] = Math.max(d, this.colYs[u])
    }, i.prototype._getContainerSize = function () {
        this.maxY = Math.max.apply(Math, this.colYs);
        var t = {height: this.maxY};
        return this._getOption("fitWidth") && (t.width = this._getContainerFitWidth()), t
    }, i.prototype._getContainerFitWidth = function () {
        for (var t = 0, e = this.cols; --e && 0 === this.colYs[e];) t++;
        return (this.cols - t) * this.columnWidth - this.gutter
    }, i.prototype.needsResizeLayout = function () {
        var t = this.containerWidth;
        return this.getContainerWidth(), t != this.containerWidth
    }, i
}), !function (t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", ["jquery"], function (i) {
        e(t, i)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("jquery")) : t.jQueryBridget = e(t, t.jQuery)
}(window, function (t, e) {
    "use strict";

    function i(i, o, a) {
        function l(t, e, n) {
            var s, o = "$()." + i + '("' + e + '")';
            return t.each(function (t, l) {
                var h = a.data(l, i);
                if (!h) return void r(i + " not initialized. Cannot call methods, i.e. " + o);
                var d = h[e];
                if (!d || "_" == e.charAt(0)) return void r(o + " is not a valid method");
                var u = d.apply(h, n);
                s = void 0 === s ? u : s
            }), void 0 !== s ? s : t
        }

        function h(t, e) {
            t.each(function (t, n) {
                var s = a.data(n, i);
                s ? (s.option(e), s._init()) : (s = new o(n, e), a.data(n, i, s))
            })
        }

        a = a || e || t.jQuery, a && (o.prototype.option || (o.prototype.option = function (t) {
            a.isPlainObject(t) && (this.options = a.extend(!0, this.options, t))
        }), a.fn[i] = function (t) {
            if ("string" == typeof t) {
                var e = s.call(arguments, 1);
                return l(this, t, e)
            }
            return h(this, t), this
        }, n(a))
    }

    function n(t) {
        !t || t && t.bridget || (t.bridget = i)
    }

    var s = Array.prototype.slice, o = t.console, r = "undefined" == typeof o ? function () {
    } : function (t) {
        o.error(t)
    };
    return n(e || t.jQuery), i
}), function (t, e) {
    "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e()
}(this, function () {
    function t() {
    }

    var e = t.prototype;
    return e.on = function (t, e) {
        if (t && e) {
            var i = this._events = this._events || {}, n = i[t] = i[t] || [];
            return -1 == n.indexOf(e) && n.push(e), this
        }
    }, e.once = function (t, e) {
        if (t && e) {
            this.on(t, e);
            var i = this._onceEvents = this._onceEvents || {}, n = i[t] = i[t] || {};
            return n[e] = !0, this
        }
    }, e.off = function (t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
            var n = i.indexOf(e);
            return -1 != n && i.splice(n, 1), this
        }
    }, e.emitEvent = function (t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
            var n = 0, s = i[n];
            e = e || [];
            for (var o = this._onceEvents && this._onceEvents[t]; s;) {
                var r = o && o[s];
                r && (this.off(t, s), delete o[s]), s.apply(this, e), n += r ? 0 : 1, s = i[n]
            }
            return this
        }
    }, t
}), function (t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("get-size/get-size", [], function () {
        return e()
    }) : "object" == typeof module && module.exports ? module.exports = e() : t.getSize = e()
}(window, function () {
    "use strict";

    function t(t) {
        var e = parseFloat(t), i = -1 == t.indexOf("%") && !isNaN(e);
        return i && e
    }

    function e() {
    }

    function i() {
        for (var t = {
            width: 0,
            height: 0,
            innerWidth: 0,
            innerHeight: 0,
            outerWidth: 0,
            outerHeight: 0
        }, e = 0; h > e; e++) {
            var i = l[e];
            t[i] = 0
        }
        return t
    }

    function n(t) {
        var e = getComputedStyle(t);
        return e || a("Style returned " + e + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"), e
    }

    function s() {
        if (!d) {
            d = !0;
            var e = document.createElement("div");
            e.style.width = "200px", e.style.padding = "1px 2px 3px 4px", e.style.borderStyle = "solid", e.style.borderWidth = "1px 2px 3px 4px", e.style.boxSizing = "border-box";
            var i = document.body || document.documentElement;
            i.appendChild(e);
            var s = n(e);
            o.isBoxSizeOuter = r = 200 == t(s.width), i.removeChild(e)
        }
    }

    function o(e) {
        if (s(), "string" == typeof e && (e = document.querySelector(e)), e && "object" == typeof e && e.nodeType) {
            var o = n(e);
            if ("none" == o.display) return i();
            var a = {};
            a.width = e.offsetWidth, a.height = e.offsetHeight;
            for (var d = a.isBorderBox = "border-box" == o.boxSizing, u = 0; h > u; u++) {
                var c = l[u], p = o[c], f = parseFloat(p);
                a[c] = isNaN(f) ? 0 : f
            }
            var m = a.paddingLeft + a.paddingRight, g = a.paddingTop + a.paddingBottom,
                v = a.marginLeft + a.marginRight, y = a.marginTop + a.marginBottom,
                w = a.borderLeftWidth + a.borderRightWidth, b = a.borderTopWidth + a.borderBottomWidth, x = d && r,
                C = t(o.width);
            C !== !1 && (a.width = C + (x ? 0 : m + w));
            var T = t(o.height);
            return T !== !1 && (a.height = T + (x ? 0 : g + b)), a.innerWidth = a.width - (m + w), a.innerHeight = a.height - (g + b), a.outerWidth = a.width + v, a.outerHeight = a.height + y, a
        }
    }

    var r, a = "undefined" == typeof console ? e : function (t) {
            console.error(t)
        },
        l = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
        h = l.length, d = !1;
    return o
}), function (t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", e) : "object" == typeof module && module.exports ? module.exports = e() : t.matchesSelector = e()
}(window, function () {
    "use strict";
    var t = function () {
        var t = Element.prototype;
        if (t.matches) return "matches";
        if (t.matchesSelector) return "matchesSelector";
        for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
            var n = e[i], s = n + "MatchesSelector";
            if (t[s]) return s
        }
    }();
    return function (e, i) {
        return e[t](i)
    }
}), function (t, e) {
    "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function (i) {
        return e(t, i)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("desandro-matches-selector")) : t.fizzyUIUtils = e(t, t.matchesSelector)
}(window, function (t, e) {
    var i = {};
    i.extend = function (t, e) {
        for (var i in e) t[i] = e[i];
        return t
    }, i.modulo = function (t, e) {
        return (t % e + e) % e
    }, i.makeArray = function (t) {
        var e = [];
        if (Array.isArray(t)) e = t; else if (t && "number" == typeof t.length) for (var i = 0; i < t.length; i++) e.push(t[i]); else e.push(t);
        return e
    }, i.removeFrom = function (t, e) {
        var i = t.indexOf(e);
        -1 != i && t.splice(i, 1)
    }, i.getParent = function (t, i) {
        for (; t != document.body;) if (t = t.parentNode, e(t, i)) return t
    }, i.getQueryElement = function (t) {
        return "string" == typeof t ? document.querySelector(t) : t
    }, i.handleEvent = function (t) {
        var e = "on" + t.type;
        this[e] && this[e](t)
    }, i.filterFindElements = function (t, n) {
        t = i.makeArray(t);
        var s = [];
        return t.forEach(function (t) {
            if (t instanceof HTMLElement) {
                if (!n) return void s.push(t);
                e(t, n) && s.push(t);
                for (var i = t.querySelectorAll(n), o = 0; o < i.length; o++) s.push(i[o])
            }
        }), s
    }, i.debounceMethod = function (t, e, i) {
        var n = t.prototype[e], s = e + "Timeout";
        t.prototype[e] = function () {
            var t = this[s];
            t && clearTimeout(t);
            var e = arguments, o = this;
            this[s] = setTimeout(function () {
                n.apply(o, e), delete o[s]
            }, i || 100)
        }
    }, i.docReady = function (t) {
        "complete" == document.readyState ? t() : document.addEventListener("DOMContentLoaded", t)
    }, i.toDashed = function (t) {
        return t.replace(/(.)([A-Z])/g, function (t, e, i) {
            return e + "-" + i
        }).toLowerCase()
    };
    var n = t.console;
    return i.htmlInit = function (e, s) {
        i.docReady(function () {
            var o = i.toDashed(s), r = "data-" + o, a = document.querySelectorAll("[" + r + "]"),
                l = document.querySelectorAll(".js-" + o), h = i.makeArray(a).concat(i.makeArray(l)),
                d = r + "-options", u = t.jQuery;
            h.forEach(function (t) {
                var i, o = t.getAttribute(r) || t.getAttribute(d);
                try {
                    i = o && JSON.parse(o)
                } catch (a) {
                    return void (n && n.error("Error parsing " + r + " on " + t.className + ": " + a))
                }
                var l = new e(t, i);
                u && u.data(t, s, l)
            })
        })
    }, i
}), function (t, e) {
    "function" == typeof define && define.amd ? define("outlayer/item", ["ev-emitter/ev-emitter", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("ev-emitter"), require("get-size")) : (t.Outlayer = {}, t.Outlayer.Item = e(t.EvEmitter, t.getSize))
}(window, function (t, e) {
    "use strict";

    function i(t) {
        for (var e in t) return !1;
        return e = null, !0
    }

    function n(t, e) {
        t && (this.element = t, this.layout = e, this.position = {x: 0, y: 0}, this._create())
    }

    function s(t) {
        return t.replace(/([A-Z])/g, function (t) {
            return "-" + t.toLowerCase()
        })
    }

    var o = document.documentElement.style, r = "string" == typeof o.transition ? "transition" : "WebkitTransition",
        a = "string" == typeof o.transform ? "transform" : "WebkitTransform",
        l = {WebkitTransition: "webkitTransitionEnd", transition: "transitionend"}[r], h = {
            transform: a,
            transition: r,
            transitionDuration: r + "Duration",
            transitionProperty: r + "Property",
            transitionDelay: r + "Delay"
        }, d = n.prototype = Object.create(t.prototype);
    d.constructor = n, d._create = function () {
        this._transn = {ingProperties: {}, clean: {}, onEnd: {}}, this.css({position: "absolute"})
    }, d.handleEvent = function (t) {
        var e = "on" + t.type;
        this[e] && this[e](t)
    }, d.getSize = function () {
        this.size = e(this.element)
    }, d.css = function (t) {
        var e = this.element.style;
        for (var i in t) {
            var n = h[i] || i;
            e[n] = t[i]
        }
    }, d.getPosition = function () {
        var t = getComputedStyle(this.element), e = this.layout._getOption("originLeft"),
            i = this.layout._getOption("originTop"), n = t[e ? "left" : "right"], s = t[i ? "top" : "bottom"],
            o = this.layout.size, r = -1 != n.indexOf("%") ? parseFloat(n) / 100 * o.width : parseInt(n, 10),
            a = -1 != s.indexOf("%") ? parseFloat(s) / 100 * o.height : parseInt(s, 10);
        r = isNaN(r) ? 0 : r, a = isNaN(a) ? 0 : a, r -= e ? o.paddingLeft : o.paddingRight, a -= i ? o.paddingTop : o.paddingBottom, this.position.x = r, this.position.y = a
    }, d.layoutPosition = function () {
        var t = this.layout.size, e = {}, i = this.layout._getOption("originLeft"),
            n = this.layout._getOption("originTop"), s = i ? "paddingLeft" : "paddingRight", o = i ? "left" : "right",
            r = i ? "right" : "left", a = this.position.x + t[s];
        e[o] = this.getXValue(a), e[r] = "";
        var l = n ? "paddingTop" : "paddingBottom", h = n ? "top" : "bottom", d = n ? "bottom" : "top",
            u = this.position.y + t[l];
        e[h] = this.getYValue(u), e[d] = "", this.css(e), this.emitEvent("layout", [this])
    }, d.getXValue = function (t) {
        var e = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && !e ? t / this.layout.size.width * 100 + "%" : t + "px"
    }, d.getYValue = function (t) {
        var e = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && e ? t / this.layout.size.height * 100 + "%" : t + "px"
    }, d._transitionTo = function (t, e) {
        this.getPosition();
        var i = this.position.x, n = this.position.y, s = parseInt(t, 10), o = parseInt(e, 10),
            r = s === this.position.x && o === this.position.y;
        if (this.setPosition(t, e), r && !this.isTransitioning) return void this.layoutPosition();
        var a = t - i, l = e - n, h = {};
        h.transform = this.getTranslate(a, l), this.transition({
            to: h,
            onTransitionEnd: {transform: this.layoutPosition},
            isCleaning: !0
        })
    }, d.getTranslate = function (t, e) {
        var i = this.layout._getOption("originLeft"), n = this.layout._getOption("originTop");
        return t = i ? t : -t, e = n ? e : -e, "translate3d(" + t + "px, " + e + "px, 0)"
    }, d.goTo = function (t, e) {
        this.setPosition(t, e), this.layoutPosition()
    }, d.moveTo = d._transitionTo, d.setPosition = function (t, e) {
        this.position.x = parseInt(t, 10), this.position.y = parseInt(e, 10)
    }, d._nonTransition = function (t) {
        this.css(t.to), t.isCleaning && this._removeStyles(t.to);
        for (var e in t.onTransitionEnd) t.onTransitionEnd[e].call(this)
    }, d.transition = function (t) {
        if (!parseFloat(this.layout.options.transitionDuration)) return void this._nonTransition(t);
        var e = this._transn;
        for (var i in t.onTransitionEnd) e.onEnd[i] = t.onTransitionEnd[i];
        for (i in t.to) e.ingProperties[i] = !0, t.isCleaning && (e.clean[i] = !0);
        if (t.from) {
            this.css(t.from);
            var n = this.element.offsetHeight;
            n = null
        }
        this.enableTransition(t.to), this.css(t.to), this.isTransitioning = !0
    };
    var u = "opacity," + s(a);
    d.enableTransition = function () {
        if (!this.isTransitioning) {
            var t = this.layout.options.transitionDuration;
            t = "number" == typeof t ? t + "ms" : t, this.css({
                transitionProperty: u,
                transitionDuration: t,
                transitionDelay: this.staggerDelay || 0
            }), this.element.addEventListener(l, this, !1)
        }
    }, d.onwebkitTransitionEnd = function (t) {
        this.ontransitionend(t)
    }, d.onotransitionend = function (t) {
        this.ontransitionend(t)
    };
    var c = {"-webkit-transform": "transform"};
    d.ontransitionend = function (t) {
        if (t.target === this.element) {
            var e = this._transn, n = c[t.propertyName] || t.propertyName;
            if (delete e.ingProperties[n], i(e.ingProperties) && this.disableTransition(), n in e.clean && (this.element.style[t.propertyName] = "", delete e.clean[n]), n in e.onEnd) {
                var s = e.onEnd[n];
                s.call(this), delete e.onEnd[n]
            }
            this.emitEvent("transitionEnd", [this])
        }
    }, d.disableTransition = function () {
        this.removeTransitionStyles(), this.element.removeEventListener(l, this, !1), this.isTransitioning = !1
    }, d._removeStyles = function (t) {
        var e = {};
        for (var i in t) e[i] = "";
        this.css(e)
    };
    var p = {transitionProperty: "", transitionDuration: "", transitionDelay: ""};
    return d.removeTransitionStyles = function () {
        this.css(p)
    }, d.stagger = function (t) {
        t = isNaN(t) ? 0 : t, this.staggerDelay = t + "ms"
    }, d.removeElem = function () {
        this.element.parentNode.removeChild(this.element), this.css({display: ""}), this.emitEvent("remove", [this])
    }, d.remove = function () {
        return r && parseFloat(this.layout.options.transitionDuration) ? (this.once("transitionEnd", function () {
            this.removeElem()
        }), void this.hide()) : void this.removeElem()
    }, d.reveal = function () {
        delete this.isHidden, this.css({display: ""});
        var t = this.layout.options, e = {}, i = this.getHideRevealTransitionEndProperty("visibleStyle");
        e[i] = this.onRevealTransitionEnd, this.transition({
            from: t.hiddenStyle,
            to: t.visibleStyle,
            isCleaning: !0,
            onTransitionEnd: e
        })
    }, d.onRevealTransitionEnd = function () {
        this.isHidden || this.emitEvent("reveal")
    }, d.getHideRevealTransitionEndProperty = function (t) {
        var e = this.layout.options[t];
        if (e.opacity) return "opacity";
        for (var i in e) return i
    }, d.hide = function () {
        this.isHidden = !0, this.css({display: ""});
        var t = this.layout.options, e = {}, i = this.getHideRevealTransitionEndProperty("hiddenStyle");
        e[i] = this.onHideTransitionEnd, this.transition({
            from: t.visibleStyle,
            to: t.hiddenStyle,
            isCleaning: !0,
            onTransitionEnd: e
        })
    }, d.onHideTransitionEnd = function () {
        this.isHidden && (this.css({display: "none"}), this.emitEvent("hide"))
    }, d.destroy = function () {
        this.css({position: "", left: "", right: "", top: "", bottom: "", transition: "", transform: ""})
    }, n
}), function (t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("outlayer/outlayer", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function (i, n, s, o) {
        return e(t, i, n, s, o)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : t.Outlayer = e(t, t.EvEmitter, t.getSize, t.fizzyUIUtils, t.Outlayer.Item)
}(window, function (t, e, i, n, s) {
    "use strict";

    function o(t, e) {
        var i = n.getQueryElement(t);
        if (!i) return void (l && l.error("Bad element for " + this.constructor.namespace + ": " + (i || t)));
        this.element = i, h && (this.$element = h(this.element)), this.options = n.extend({}, this.constructor.defaults), this.option(e);
        var s = ++u;
        this.element.outlayerGUID = s, c[s] = this, this._create();
        var o = this._getOption("initLayout");
        o && this.layout()
    }

    function r(t) {
        function e() {
            t.apply(this, arguments)
        }

        return e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e
    }

    function a(t) {
        if ("number" == typeof t) return t;
        var e = t.match(/(^\d*\.?\d*)(\w*)/), i = e && e[1], n = e && e[2];
        if (!i.length) return 0;
        i = parseFloat(i);
        var s = f[n] || 1;
        return i * s
    }

    var l = t.console, h = t.jQuery, d = function () {
    }, u = 0, c = {};
    o.namespace = "outlayer", o.Item = s, o.defaults = {
        containerStyle: {position: "relative"},
        initLayout: !0,
        originLeft: !0,
        originTop: !0,
        resize: !0,
        resizeContainer: !0,
        transitionDuration: "0.4s",
        hiddenStyle: {opacity: 0, transform: "scale(0.001)"},
        visibleStyle: {opacity: 1, transform: "scale(1)"}
    };
    var p = o.prototype;
    n.extend(p, e.prototype), p.option = function (t) {
        n.extend(this.options, t)
    }, p._getOption = function (t) {
        var e = this.constructor.compatOptions[t];
        return e && void 0 !== this.options[e] ? this.options[e] : this.options[t]
    }, o.compatOptions = {
        initLayout: "isInitLayout",
        horizontal: "isHorizontal",
        layoutInstant: "isLayoutInstant",
        originLeft: "isOriginLeft",
        originTop: "isOriginTop",
        resize: "isResizeBound",
        resizeContainer: "isResizingContainer"
    }, p._create = function () {
        this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), n.extend(this.element.style, this.options.containerStyle);
        var t = this._getOption("resize");
        t && this.bindResize()
    }, p.reloadItems = function () {
        this.items = this._itemize(this.element.children)
    }, p._itemize = function (t) {
        for (var e = this._filterFindItemElements(t), i = this.constructor.Item, n = [], s = 0; s < e.length; s++) {
            var o = e[s], r = new i(o, this);
            n.push(r)
        }
        return n
    }, p._filterFindItemElements = function (t) {
        return n.filterFindElements(t, this.options.itemSelector)
    }, p.getItemElements = function () {
        return this.items.map(function (t) {
            return t.element
        })
    }, p.layout = function () {
        this._resetLayout(), this._manageStamps();
        var t = this._getOption("layoutInstant"), e = void 0 !== t ? t : !this._isLayoutInited;
        this.layoutItems(this.items, e), this._isLayoutInited = !0
    }, p._init = p.layout, p._resetLayout = function () {
        this.getSize()
    }, p.getSize = function () {
        this.size = i(this.element)
    }, p._getMeasurement = function (t, e) {
        var n, s = this.options[t];
        s ? ("string" == typeof s ? n = this.element.querySelector(s) : s instanceof HTMLElement && (n = s), this[t] = n ? i(n)[e] : s) : this[t] = 0
    }, p.layoutItems = function (t, e) {
        t = this._getItemsForLayout(t), this._layoutItems(t, e), this._postLayout()
    }, p._getItemsForLayout = function (t) {
        return t.filter(function (t) {
            return !t.isIgnored
        })
    }, p._layoutItems = function (t, e) {
        if (this._emitCompleteOnItems("layout", t), t && t.length) {
            var i = [];
            t.forEach(function (t) {
                var n = this._getItemLayoutPosition(t);
                n.item = t, n.isInstant = e || t.isLayoutInstant, i.push(n)
            }, this), this._processLayoutQueue(i)
        }
    }, p._getItemLayoutPosition = function () {
        return {x: 0, y: 0}
    }, p._processLayoutQueue = function (t) {
        this.updateStagger(), t.forEach(function (t, e) {
            this._positionItem(t.item, t.x, t.y, t.isInstant, e)
        }, this)
    }, p.updateStagger = function () {
        var t = this.options.stagger;
        return null === t || void 0 === t ? void (this.stagger = 0) : (this.stagger = a(t), this.stagger)
    }, p._positionItem = function (t, e, i, n, s) {
        n ? t.goTo(e, i) : (t.stagger(s * this.stagger), t.moveTo(e, i))
    }, p._postLayout = function () {
        this.resizeContainer()
    }, p.resizeContainer = function () {
        var t = this._getOption("resizeContainer");
        if (t) {
            var e = this._getContainerSize();
            e && (this._setContainerMeasure(e.width, !0), this._setContainerMeasure(e.height, !1))
        }
    }, p._getContainerSize = d, p._setContainerMeasure = function (t, e) {
        if (void 0 !== t) {
            var i = this.size;
            i.isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth), t = Math.max(t, 0), this.element.style[e ? "width" : "height"] = t + "px"
        }
    }, p._emitCompleteOnItems = function (t, e) {
        function i() {
            s.dispatchEvent(t + "Complete", null, [e])
        }

        function n() {
            r++, r == o && i()
        }

        var s = this, o = e.length;
        if (!e || !o) return void i();
        var r = 0;
        e.forEach(function (e) {
            e.once(t, n)
        })
    }, p.dispatchEvent = function (t, e, i) {
        var n = e ? [e].concat(i) : i;
        if (this.emitEvent(t, n), h) if (this.$element = this.$element || h(this.element), e) {
            var s = h.Event(e);
            s.type = t, this.$element.trigger(s, i)
        } else this.$element.trigger(t, i)
    }, p.ignore = function (t) {
        var e = this.getItem(t);
        e && (e.isIgnored = !0)
    }, p.unignore = function (t) {
        var e = this.getItem(t);
        e && delete e.isIgnored
    }, p.stamp = function (t) {
        t = this._find(t), t && (this.stamps = this.stamps.concat(t), t.forEach(this.ignore, this))
    }, p.unstamp = function (t) {
        t = this._find(t), t && t.forEach(function (t) {
            n.removeFrom(this.stamps, t), this.unignore(t)
        }, this)
    }, p._find = function (t) {
        return t ? ("string" == typeof t && (t = this.element.querySelectorAll(t)), t = n.makeArray(t)) : void 0
    }, p._manageStamps = function () {
        this.stamps && this.stamps.length && (this._getBoundingRect(), this.stamps.forEach(this._manageStamp, this))
    }, p._getBoundingRect = function () {
        var t = this.element.getBoundingClientRect(), e = this.size;
        this._boundingRect = {
            left: t.left + e.paddingLeft + e.borderLeftWidth,
            top: t.top + e.paddingTop + e.borderTopWidth,
            right: t.right - (e.paddingRight + e.borderRightWidth),
            bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth)
        }
    }, p._manageStamp = d, p._getElementOffset = function (t) {
        var e = t.getBoundingClientRect(), n = this._boundingRect, s = i(t), o = {
            left: e.left - n.left - s.marginLeft,
            top: e.top - n.top - s.marginTop,
            right: n.right - e.right - s.marginRight,
            bottom: n.bottom - e.bottom - s.marginBottom
        };
        return o
    }, p.handleEvent = n.handleEvent, p.bindResize = function () {
        t.addEventListener("resize", this), this.isResizeBound = !0
    }, p.unbindResize = function () {
        t.removeEventListener("resize", this), this.isResizeBound = !1
    }, p.onresize = function () {
        this.resize()
    }, n.debounceMethod(o, "onresize", 100), p.resize = function () {
        this.isResizeBound && this.needsResizeLayout() && this.layout()
    }, p.needsResizeLayout = function () {
        var t = i(this.element), e = this.size && t;
        return e && t.innerWidth !== this.size.innerWidth
    }, p.addItems = function (t) {
        var e = this._itemize(t);
        return e.length && (this.items = this.items.concat(e)), e
    }, p.appended = function (t) {
        var e = this.addItems(t);
        e.length && (this.layoutItems(e, !0), this.reveal(e))
    }, p.prepended = function (t) {
        var e = this._itemize(t);
        if (e.length) {
            var i = this.items.slice(0);
            this.items = e.concat(i), this._resetLayout(), this._manageStamps(), this.layoutItems(e, !0), this.reveal(e), this.layoutItems(i)
        }
    }, p.reveal = function (t) {
        if (this._emitCompleteOnItems("reveal", t), t && t.length) {
            var e = this.updateStagger();
            t.forEach(function (t, i) {
                t.stagger(i * e), t.reveal()
            })
        }
    }, p.hide = function (t) {
        if (this._emitCompleteOnItems("hide", t), t && t.length) {
            var e = this.updateStagger();
            t.forEach(function (t, i) {
                t.stagger(i * e), t.hide()
            })
        }
    }, p.revealItemElements = function (t) {
        var e = this.getItems(t);
        this.reveal(e)
    }, p.hideItemElements = function (t) {
        var e = this.getItems(t);
        this.hide(e)
    }, p.getItem = function (t) {
        for (var e = 0; e < this.items.length; e++) {
            var i = this.items[e];
            if (i.element == t) return i
        }
    }, p.getItems = function (t) {
        t = n.makeArray(t);
        var e = [];
        return t.forEach(function (t) {
            var i = this.getItem(t);
            i && e.push(i)
        }, this), e
    }, p.remove = function (t) {
        var e = this.getItems(t);
        this._emitCompleteOnItems("remove", e), e && e.length && e.forEach(function (t) {
            t.remove(), n.removeFrom(this.items, t)
        }, this)
    }, p.destroy = function () {
        var t = this.element.style;
        t.height = "", t.position = "", t.width = "", this.items.forEach(function (t) {
            t.destroy()
        }), this.unbindResize();
        var e = this.element.outlayerGUID;
        delete c[e], delete this.element.outlayerGUID, h && h.removeData(this.element, this.constructor.namespace)
    }, o.data = function (t) {
        t = n.getQueryElement(t);
        var e = t && t.outlayerGUID;
        return e && c[e]
    }, o.create = function (t, e) {
        var i = r(o);
        return i.defaults = n.extend({}, o.defaults), n.extend(i.defaults, e), i.compatOptions = n.extend({}, o.compatOptions), i.namespace = t, i.data = o.data, i.Item = r(s), n.htmlInit(i, t), h && h.bridget && h.bridget(t, i), i
    };
    var f = {ms: 1, s: 1e3};
    return o.Item = s, o
}), function (t, e) {
    "function" == typeof define && define.amd ? define("isotope/item", ["outlayer/outlayer"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.Item = e(t.Outlayer))
}(window, function (t) {
    "use strict";

    function e() {
        t.Item.apply(this, arguments)
    }

    var i = e.prototype = Object.create(t.Item.prototype), n = i._create;
    i._create = function () {
        this.id = this.layout.itemGUID++, n.call(this), this.sortData = {}
    }, i.updateSortData = function () {
        if (!this.isIgnored) {
            this.sortData.id = this.id, this.sortData["original-order"] = this.id, this.sortData.random = Math.random();
            var t = this.layout.options.getSortData, e = this.layout._sorters;
            for (var i in t) {
                var n = e[i];
                this.sortData[i] = n(this.element, this)
            }
        }
    };
    var s = i.destroy;
    return i.destroy = function () {
        s.apply(this, arguments), this.css({display: ""})
    }, e
}), function (t, e) {
    "function" == typeof define && define.amd ? define("isotope/layout-mode", ["get-size/get-size", "outlayer/outlayer"], e) : "object" == typeof module && module.exports ? module.exports = e(require("get-size"), require("outlayer")) : (t.Isotope = t.Isotope || {},
        t.Isotope.LayoutMode = e(t.getSize, t.Outlayer))
}(window, function (t, e) {
    "use strict";

    function i(t) {
        this.isotope = t, t && (this.options = t.options[this.namespace], this.element = t.element, this.items = t.filteredItems, this.size = t.size)
    }

    var n = i.prototype,
        s = ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout", "_getOption"];
    return s.forEach(function (t) {
        n[t] = function () {
            return e.prototype[t].apply(this.isotope, arguments)
        }
    }), n.needsVerticalResizeLayout = function () {
        var e = t(this.isotope.element), i = this.isotope.size && e;
        return i && e.innerHeight != this.isotope.size.innerHeight
    }, n._getMeasurement = function () {
        this.isotope._getMeasurement.apply(this, arguments)
    }, n.getColumnWidth = function () {
        this.getSegmentSize("column", "Width")
    }, n.getRowHeight = function () {
        this.getSegmentSize("row", "Height")
    }, n.getSegmentSize = function (t, e) {
        var i = t + e, n = "outer" + e;
        if (this._getMeasurement(i, n), !this[i]) {
            var s = this.getFirstItemSize();
            this[i] = s && s[n] || this.isotope.size["inner" + e]
        }
    }, n.getFirstItemSize = function () {
        var e = this.isotope.filteredItems[0];
        return e && e.element && t(e.element)
    }, n.layout = function () {
        this.isotope.layout.apply(this.isotope, arguments)
    }, n.getSize = function () {
        this.isotope.getSize(), this.size = this.isotope.size
    }, i.modes = {}, i.create = function (t, e) {
        function s() {
            i.apply(this, arguments)
        }

        return s.prototype = Object.create(n), s.prototype.constructor = s, e && (s.options = e), s.prototype.namespace = t, i.modes[t] = s, s
    }, i
}), function (t, e) {
    "function" == typeof define && define.amd ? define("masonry/masonry", ["outlayer/outlayer", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer"), require("get-size")) : t.Masonry = e(t.Outlayer, t.getSize)
}(window, function (t, e) {
    var i = t.create("masonry");
    return i.compatOptions.fitWidth = "isFitWidth", i.prototype._resetLayout = function () {
        this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns(), this.colYs = [];
        for (var t = 0; t < this.cols; t++) this.colYs.push(0);
        this.maxY = 0
    }, i.prototype.measureColumns = function () {
        if (this.getContainerWidth(), !this.columnWidth) {
            var t = this.items[0], i = t && t.element;
            this.columnWidth = i && e(i).outerWidth || this.containerWidth
        }
        var n = this.columnWidth += this.gutter, s = this.containerWidth + this.gutter, o = s / n, r = n - s % n,
            a = r && 1 > r ? "round" : "floor";
        o = Math[a](o), this.cols = Math.max(o, 1)
    }, i.prototype.getContainerWidth = function () {
        var t = this._getOption("fitWidth"), i = t ? this.element.parentNode : this.element, n = e(i);
        this.containerWidth = n && n.innerWidth
    }, i.prototype._getItemLayoutPosition = function (t) {
        t.getSize();
        var e = t.size.outerWidth % this.columnWidth, i = e && 1 > e ? "round" : "ceil",
            n = Math[i](t.size.outerWidth / this.columnWidth);
        n = Math.min(n, this.cols);
        for (var s = this._getColGroup(n), o = Math.min.apply(Math, s), r = s.indexOf(o), a = {
            x: this.columnWidth * r,
            y: o
        }, l = o + t.size.outerHeight, h = this.cols + 1 - s.length, d = 0; h > d; d++) this.colYs[r + d] = l;
        return a
    }, i.prototype._getColGroup = function (t) {
        if (2 > t) return this.colYs;
        for (var e = [], i = this.cols + 1 - t, n = 0; i > n; n++) {
            var s = this.colYs.slice(n, n + t);
            e[n] = Math.max.apply(Math, s)
        }
        return e
    }, i.prototype._manageStamp = function (t) {
        var i = e(t), n = this._getElementOffset(t), s = this._getOption("originLeft"), o = s ? n.left : n.right,
            r = o + i.outerWidth, a = Math.floor(o / this.columnWidth);
        a = Math.max(0, a);
        var l = Math.floor(r / this.columnWidth);
        l -= r % this.columnWidth ? 0 : 1, l = Math.min(this.cols - 1, l);
        for (var h = this._getOption("originTop"), d = (h ? n.top : n.bottom) + i.outerHeight, u = a; l >= u; u++) this.colYs[u] = Math.max(d, this.colYs[u])
    }, i.prototype._getContainerSize = function () {
        this.maxY = Math.max.apply(Math, this.colYs);
        var t = {height: this.maxY};
        return this._getOption("fitWidth") && (t.width = this._getContainerFitWidth()), t
    }, i.prototype._getContainerFitWidth = function () {
        for (var t = 0, e = this.cols; --e && 0 === this.colYs[e];) t++;
        return (this.cols - t) * this.columnWidth - this.gutter
    }, i.prototype.needsResizeLayout = function () {
        var t = this.containerWidth;
        return this.getContainerWidth(), t != this.containerWidth
    }, i
}), function (t, e) {
    "function" == typeof define && define.amd ? define("isotope/layout-modes/masonry", ["../layout-mode", "masonry/masonry"], e) : "object" == typeof module && module.exports ? module.exports = e(require("../layout-mode"), require("masonry-layout")) : e(t.Isotope.LayoutMode, t.Masonry)
}(window, function (t, e) {
    "use strict";
    var i = t.create("masonry"), n = i.prototype, s = {_getElementOffset: !0, layout: !0, _getMeasurement: !0};
    for (var o in e.prototype) s[o] || (n[o] = e.prototype[o]);
    var r = n.measureColumns;
    n.measureColumns = function () {
        this.items = this.isotope.filteredItems, r.call(this)
    };
    var a = n._getOption;
    return n._getOption = function (t) {
        return "fitWidth" == t ? void 0 !== this.options.isFitWidth ? this.options.isFitWidth : this.options.fitWidth : a.apply(this.isotope, arguments)
    }, i
}), function (t, e) {
    "function" == typeof define && define.amd ? define("isotope/layout-modes/fit-rows", ["../layout-mode"], e) : "object" == typeof exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode)
}(window, function (t) {
    "use strict";
    var e = t.create("fitRows"), i = e.prototype;
    return i._resetLayout = function () {
        this.x = 0, this.y = 0, this.maxY = 0, this._getMeasurement("gutter", "outerWidth")
    }, i._getItemLayoutPosition = function (t) {
        t.getSize();
        var e = t.size.outerWidth + this.gutter, i = this.isotope.size.innerWidth + this.gutter;
        0 !== this.x && e + this.x > i && (this.x = 0, this.y = this.maxY);
        var n = {x: this.x, y: this.y};
        return this.maxY = Math.max(this.maxY, this.y + t.size.outerHeight), this.x += e, n
    }, i._getContainerSize = function () {
        return {height: this.maxY}
    }, e
}), function (t, e) {
    "function" == typeof define && define.amd ? define("isotope/layout-modes/vertical", ["../layout-mode"], e) : "object" == typeof module && module.exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode)
}(window, function (t) {
    "use strict";
    var e = t.create("vertical", {horizontalAlignment: 0}), i = e.prototype;
    return i._resetLayout = function () {
        this.y = 0
    }, i._getItemLayoutPosition = function (t) {
        t.getSize();
        var e = (this.isotope.size.innerWidth - t.size.outerWidth) * this.options.horizontalAlignment, i = this.y;
        return this.y += t.size.outerHeight, {x: e, y: i}
    }, i._getContainerSize = function () {
        return {height: this.y}
    }, e
}), function (t, e) {
    "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "desandro-matches-selector/matches-selector", "fizzy-ui-utils/utils", "./item", "./layout-mode", "./layout-modes/masonry", "./layout-modes/fit-rows", "./layout-modes/vertical"], function (i, n, s, o, r, a) {
        return e(t, i, n, s, o, r, a)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("outlayer"), require("get-size"), require("desandro-matches-selector"), require("fizzy-ui-utils"), require("./item"), require("./layout-mode"), require("./layout-modes/masonry"), require("./layout-modes/fit-rows"), require("./layout-modes/vertical")) : t.Isotope = e(t, t.Outlayer, t.getSize, t.matchesSelector, t.fizzyUIUtils, t.Isotope.Item, t.Isotope.LayoutMode)
}(window, function (t, e, i, n, s, o, r) {
    function a(t, e) {
        return function (i, n) {
            for (var s = 0; s < t.length; s++) {
                var o = t[s], r = i.sortData[o], a = n.sortData[o];
                if (r > a || a > r) {
                    var l = void 0 !== e[o] ? e[o] : e, h = l ? 1 : -1;
                    return (r > a ? 1 : -1) * h
                }
            }
            return 0
        }
    }

    var l = t.jQuery, h = String.prototype.trim ? function (t) {
        return t.trim()
    } : function (t) {
        return t.replace(/^\s+|\s+$/g, "")
    }, d = e.create("isotope", {layoutMode: "masonry", isJQueryFiltering: !0, sortAscending: !0});
    d.Item = o, d.LayoutMode = r;
    var u = d.prototype;
    u._create = function () {
        this.itemGUID = 0, this._sorters = {}, this._getSorters(), e.prototype._create.call(this), this.modes = {}, this.filteredItems = this.items, this.sortHistory = ["original-order"];
        for (var t in r.modes) this._initLayoutMode(t)
    }, u.reloadItems = function () {
        this.itemGUID = 0, e.prototype.reloadItems.call(this)
    }, u._itemize = function () {
        for (var t = e.prototype._itemize.apply(this, arguments), i = 0; i < t.length; i++) {
            var n = t[i];
            n.id = this.itemGUID++
        }
        return this._updateItemsSortData(t), t
    }, u._initLayoutMode = function (t) {
        var e = r.modes[t], i = this.options[t] || {};
        this.options[t] = e.options ? s.extend(e.options, i) : i, this.modes[t] = new e(this)
    }, u.layout = function () {
        return !this._isLayoutInited && this._getOption("initLayout") ? void this.arrange() : void this._layout()
    }, u._layout = function () {
        var t = this._getIsInstant();
        this._resetLayout(), this._manageStamps(), this.layoutItems(this.filteredItems, t), this._isLayoutInited = !0
    }, u.arrange = function (t) {
        this.option(t), this._getIsInstant();
        var e = this._filter(this.items);
        this.filteredItems = e.matches, this._bindArrangeComplete(), this._isInstant ? this._noTransition(this._hideReveal, [e]) : this._hideReveal(e), this._sort(), this._layout()
    }, u._init = u.arrange, u._hideReveal = function (t) {
        this.reveal(t.needReveal), this.hide(t.needHide)
    }, u._getIsInstant = function () {
        var t = this._getOption("layoutInstant"), e = void 0 !== t ? t : !this._isLayoutInited;
        return this._isInstant = e, e
    }, u._bindArrangeComplete = function () {
        function t() {
            e && i && n && s.dispatchEvent("arrangeComplete", null, [s.filteredItems])
        }

        var e, i, n, s = this;
        this.once("layoutComplete", function () {
            e = !0, t()
        }), this.once("hideComplete", function () {
            i = !0, t()
        }), this.once("revealComplete", function () {
            n = !0, t()
        })
    }, u._filter = function (t) {
        var e = this.options.filter;
        e = e || "*";
        for (var i = [], n = [], s = [], o = this._getFilterTest(e), r = 0; r < t.length; r++) {
            var a = t[r];
            if (!a.isIgnored) {
                var l = o(a);
                l && i.push(a), l && a.isHidden ? n.push(a) : l || a.isHidden || s.push(a)
            }
        }
        return {matches: i, needReveal: n, needHide: s}
    }, u._getFilterTest = function (t) {
        return l && this.options.isJQueryFiltering ? function (e) {
            return l(e.element).is(t)
        } : "function" == typeof t ? function (e) {
            return t(e.element)
        } : function (e) {
            return n(e.element, t)
        }
    }, u.updateSortData = function (t) {
        var e;
        t ? (t = s.makeArray(t), e = this.getItems(t)) : e = this.items, this._getSorters(), this._updateItemsSortData(e)
    }, u._getSorters = function () {
        var t = this.options.getSortData;
        for (var e in t) {
            var i = t[e];
            this._sorters[e] = c(i)
        }
    }, u._updateItemsSortData = function (t) {
        for (var e = t && t.length, i = 0; e && e > i; i++) {
            var n = t[i];
            n.updateSortData()
        }
    };
    var c = function () {
        function t(t) {
            if ("string" != typeof t) return t;
            var i = h(t).split(" "), n = i[0], s = n.match(/^\[(.+)\]$/), o = s && s[1], r = e(o, n),
                a = d.sortDataParsers[i[1]];
            return t = a ? function (t) {
                return t && a(r(t))
            } : function (t) {
                return t && r(t)
            }
        }

        function e(t, e) {
            return t ? function (e) {
                return e.getAttribute(t)
            } : function (t) {
                var i = t.querySelector(e);
                return i && i.textContent
            }
        }

        return t
    }();
    d.sortDataParsers = {
        parseInt: function (t) {
            return parseInt(t, 10)
        }, parseFloat: function (t) {
            return parseFloat(t)
        }
    }, u._sort = function () {
        var t = this.options.sortBy;
        if (t) {
            var e = [].concat.apply(t, this.sortHistory), i = a(e, this.options.sortAscending);
            this.filteredItems.sort(i), t != this.sortHistory[0] && this.sortHistory.unshift(t)
        }
    }, u._mode = function () {
        var t = this.options.layoutMode, e = this.modes[t];
        if (!e) throw new Error("No layout mode: " + t);
        return e.options = this.options[t], e
    }, u._resetLayout = function () {
        e.prototype._resetLayout.call(this), this._mode()._resetLayout()
    }, u._getItemLayoutPosition = function (t) {
        return this._mode()._getItemLayoutPosition(t)
    }, u._manageStamp = function (t) {
        this._mode()._manageStamp(t)
    }, u._getContainerSize = function () {
        return this._mode()._getContainerSize()
    }, u.needsResizeLayout = function () {
        return this._mode().needsResizeLayout()
    }, u.appended = function (t) {
        var e = this.addItems(t);
        if (e.length) {
            var i = this._filterRevealAdded(e);
            this.filteredItems = this.filteredItems.concat(i)
        }
    }, u.prepended = function (t) {
        var e = this._itemize(t);
        if (e.length) {
            this._resetLayout(), this._manageStamps();
            var i = this._filterRevealAdded(e);
            this.layoutItems(this.filteredItems), this.filteredItems = i.concat(this.filteredItems), this.items = e.concat(this.items)
        }
    }, u._filterRevealAdded = function (t) {
        var e = this._filter(t);
        return this.hide(e.needHide), this.reveal(e.matches), this.layoutItems(e.matches, !0), e.matches
    }, u.insert = function (t) {
        var e = this.addItems(t);
        if (e.length) {
            var i, n, s = e.length;
            for (i = 0; s > i; i++) n = e[i], this.element.appendChild(n.element);
            var o = this._filter(e).matches;
            for (i = 0; s > i; i++) e[i].isLayoutInstant = !0;
            for (this.arrange(), i = 0; s > i; i++) delete e[i].isLayoutInstant;
            this.reveal(o)
        }
    };
    var p = u.remove;
    return u.remove = function (t) {
        t = s.makeArray(t);
        var e = this.getItems(t);
        p.call(this, t);
        for (var i = e && e.length, n = 0; i && i > n; n++) {
            var o = e[n];
            s.removeFrom(this.filteredItems, o)
        }
    }, u.shuffle = function () {
        for (var t = 0; t < this.items.length; t++) {
            var e = this.items[t];
            e.sortData.random = Math.random()
        }
        this.options.sortBy = "random", this._sort(), this._layout()
    }, u._noTransition = function (t, e) {
        var i = this.options.transitionDuration;
        this.options.transitionDuration = 0;
        var n = t.apply(this, e);
        return this.options.transitionDuration = i, n
    }, u.getFilteredItemElements = function () {
        return this.filteredItems.map(function (t) {
            return t.element
        })
    }, d
}), !function (t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : t("object" == typeof exports ? require("jquery") : jQuery)
}(function (t, e) {
    function i() {
        return new Date(Date.UTC.apply(Date, arguments))
    }

    function n() {
        var t = new Date;
        return i(t.getFullYear(), t.getMonth(), t.getDate())
    }

    function s(t, e) {
        return t.getUTCFullYear() === e.getUTCFullYear() && t.getUTCMonth() === e.getUTCMonth() && t.getUTCDate() === e.getUTCDate()
    }

    function o(i, n) {
        return function () {
            return n !== e && t.fn.datepicker.deprecated(n), this[i].apply(this, arguments)
        }
    }

    function r(t) {
        return t && !isNaN(t.getTime())
    }

    function a(e, i) {
        function n(t, e) {
            return e.toLowerCase()
        }

        var s, o = t(e).data(), r = {}, a = new RegExp("^" + i.toLowerCase() + "([A-Z])");
        i = new RegExp("^" + i.toLowerCase());
        for (var l in o) i.test(l) && (s = l.replace(a, n), r[s] = o[l]);
        return r
    }

    function l(e) {
        var i = {};
        if (g[e] || (e = e.split("-")[0], g[e])) {
            var n = g[e];
            return t.each(m, function (t, e) {
                e in n && (i[e] = n[e])
            }), i
        }
    }

    var h = function () {
        var e = {
            get: function (t) {
                return this.slice(t)[0]
            }, contains: function (t) {
                for (var e = t && t.valueOf(), i = 0, n = this.length; i < n; i++) if (0 <= this[i].valueOf() - e && this[i].valueOf() - e < 864e5) return i;
                return -1
            }, remove: function (t) {
                this.splice(t, 1)
            }, replace: function (e) {
                e && (t.isArray(e) || (e = [e]), this.clear(), this.push.apply(this, e))
            }, clear: function () {
                this.length = 0
            }, copy: function () {
                var t = new h;
                return t.replace(this), t
            }
        };
        return function () {
            var i = [];
            return i.push.apply(i, arguments), t.extend(i, e), i
        }
    }(), d = function (e, i) {
        t.data(e, "datepicker", this), this._process_options(i), this.dates = new h, this.viewDate = this.o.defaultViewDate, this.focusDate = null, this.element = t(e), this.isInput = this.element.is("input"), this.inputField = this.isInput ? this.element : this.element.find("input"), this.component = !!this.element.hasClass("date") && this.element.find(".add-on, .input-group-addon, .btn"), this.component && 0 === this.component.length && (this.component = !1), this.isInline = !this.component && this.element.is("div"), this.picker = t(v.template), this._check_template(this.o.templates.leftArrow) && this.picker.find(".prev").html(this.o.templates.leftArrow), this._check_template(this.o.templates.rightArrow) && this.picker.find(".next").html(this.o.templates.rightArrow), this._buildEvents(), this._attachEvents(), this.isInline ? this.picker.addClass("datepicker-inline").appendTo(this.element) : this.picker.addClass("datepicker-dropdown dropdown-menu"), this.o.rtl && this.picker.addClass("datepicker-rtl"), this.o.calendarWeeks && this.picker.find(".datepicker-days .datepicker-switch, thead .datepicker-title, tfoot .today, tfoot .clear").attr("colspan", function (t, e) {
            return Number(e) + 1
        }), this._process_options({
            startDate: this._o.startDate,
            endDate: this._o.endDate,
            daysOfWeekDisabled: this.o.daysOfWeekDisabled,
            daysOfWeekHighlighted: this.o.daysOfWeekHighlighted,
            datesDisabled: this.o.datesDisabled
        }), this._allow_update = !1, this.setViewMode(this.o.startView), this._allow_update = !0, this.fillDow(), this.fillMonths(), this.update(), this.isInline && this.show()
    };
    d.prototype = {
        constructor: d,
        _resolveViewName: function (e) {
            return t.each(v.viewModes, function (i, n) {
                if (e === i || t.inArray(e, n.names) !== -1) return e = i, !1
            }), e
        },
        _resolveDaysOfWeek: function (e) {
            return t.isArray(e) || (e = e.split(/[,\s]*/)), t.map(e, Number)
        },
        _check_template: function (t) {
            try {
                if (t === e || "" === t) return !1;
                if ((t.match(/[<>]/g) || []).length <= 0) return !0;
                var i = n(t);
                return i.length > 0
            } catch (n) {
                return !1
            }
        },
        _process_options: function (e) {
            this._o = t.extend({}, this._o, e);
            var s = this.o = t.extend({}, this._o), o = s.language;
            g[o] || (o = o.split("-")[0], g[o] || (o = f.language)), s.language = o, s.startView = this._resolveViewName(s.startView), s.minViewMode = this._resolveViewName(s.minViewMode), s.maxViewMode = this._resolveViewName(s.maxViewMode), s.startView = Math.max(this.o.minViewMode, Math.min(this.o.maxViewMode, s.startView)), s.multidate !== !0 && (s.multidate = Number(s.multidate) || !1, s.multidate !== !1 && (s.multidate = Math.max(0, s.multidate))), s.multidateSeparator = String(s.multidateSeparator), s.weekStart %= 7, s.weekEnd = (s.weekStart + 6) % 7;
            var r = v.parseFormat(s.format);
            s.startDate !== -(1 / 0) && (s.startDate ? s.startDate instanceof Date ? s.startDate = this._local_to_utc(this._zero_time(s.startDate)) : s.startDate = v.parseDate(s.startDate, r, s.language, s.assumeNearbyYear) : s.startDate = -(1 / 0)), s.endDate !== 1 / 0 && (s.endDate ? s.endDate instanceof Date ? s.endDate = this._local_to_utc(this._zero_time(s.endDate)) : s.endDate = v.parseDate(s.endDate, r, s.language, s.assumeNearbyYear) : s.endDate = 1 / 0), s.daysOfWeekDisabled = this._resolveDaysOfWeek(s.daysOfWeekDisabled || []), s.daysOfWeekHighlighted = this._resolveDaysOfWeek(s.daysOfWeekHighlighted || []), s.datesDisabled = s.datesDisabled || [], t.isArray(s.datesDisabled) || (s.datesDisabled = s.datesDisabled.split(",")), s.datesDisabled = t.map(s.datesDisabled, function (t) {
                return v.parseDate(t, r, s.language, s.assumeNearbyYear)
            });
            var a = String(s.orientation).toLowerCase().split(/\s+/g), l = s.orientation.toLowerCase();
            if (a = t.grep(a, function (t) {
                return /^auto|left|right|top|bottom$/.test(t)
            }), s.orientation = {x: "auto", y: "auto"}, l && "auto" !== l) if (1 === a.length) switch (a[0]) {
                case"top":
                case"bottom":
                    s.orientation.y = a[0];
                    break;
                case"left":
                case"right":
                    s.orientation.x = a[0]
            } else l = t.grep(a, function (t) {
                return /^left|right$/.test(t)
            }), s.orientation.x = l[0] || "auto", l = t.grep(a, function (t) {
                return /^top|bottom$/.test(t)
            }), s.orientation.y = l[0] || "auto";
            if (s.defaultViewDate instanceof Date || "string" == typeof s.defaultViewDate) s.defaultViewDate = v.parseDate(s.defaultViewDate, r, s.language, s.assumeNearbyYear); else if (s.defaultViewDate) {
                var h = s.defaultViewDate.year || (new Date).getFullYear(), d = s.defaultViewDate.month || 0,
                    u = s.defaultViewDate.day || 1;
                s.defaultViewDate = i(h, d, u)
            } else s.defaultViewDate = n()
        },
        _events: [],
        _secondaryEvents: [],
        _applyEvents: function (t) {
            for (var i, n, s, o = 0; o < t.length; o++) i = t[o][0], 2 === t[o].length ? (n = e, s = t[o][1]) : 3 === t[o].length && (n = t[o][1], s = t[o][2]), i.on(s, n)
        },
        _unapplyEvents: function (t) {
            for (var i, n, s, o = 0; o < t.length; o++) i = t[o][0], 2 === t[o].length ? (s = e, n = t[o][1]) : 3 === t[o].length && (s = t[o][1], n = t[o][2]), i.off(n, s)
        },
        _buildEvents: function () {
            var e = {
                keyup: t.proxy(function (e) {
                    t.inArray(e.keyCode, [27, 37, 39, 38, 40, 32, 13, 9]) === -1 && this.update()
                }, this), keydown: t.proxy(this.keydown, this), paste: t.proxy(this.paste, this)
            };
            this.o.showOnFocus === !0 && (e.focus = t.proxy(this.show, this)), this.isInput ? this._events = [[this.element, e]] : this.component && this.inputField.length ? this._events = [[this.inputField, e], [this.component, {click: t.proxy(this.show, this)}]] : this._events = [[this.element, {
                click: t.proxy(this.show, this),
                keydown: t.proxy(this.keydown, this)
            }]], this._events.push([this.element, "*", {
                blur: t.proxy(function (t) {
                    this._focused_from = t.target
                }, this)
            }], [this.element, {
                blur: t.proxy(function (t) {
                    this._focused_from = t.target
                }, this)
            }]), this.o.immediateUpdates && this._events.push([this.element, {
                "changeYear changeMonth": t.proxy(function (t) {
                    this.update(t.date)
                }, this)
            }]), this._secondaryEvents = [[this.picker, {click: t.proxy(this.click, this)}], [this.picker, ".prev, .next", {click: t.proxy(this.navArrowsClick, this)}], [this.picker, ".day:not(.disabled)", {click: t.proxy(this.dayCellClick, this)}], [t(window), {resize: t.proxy(this.place, this)}], [t(document), {
                "mousedown touchstart": t.proxy(function (t) {
                    this.element.is(t.target) || this.element.find(t.target).length || this.picker.is(t.target) || this.picker.find(t.target).length || this.isInline || this.hide()
                }, this)
            }]]
        },
        _attachEvents: function () {
            this._detachEvents(), this._applyEvents(this._events)
        },
        _detachEvents: function () {
            this._unapplyEvents(this._events)
        },
        _attachSecondaryEvents: function () {
            this._detachSecondaryEvents(), this._applyEvents(this._secondaryEvents)
        },
        _detachSecondaryEvents: function () {
            this._unapplyEvents(this._secondaryEvents)
        },
        _trigger: function (e, i) {
            var n = i || this.dates.get(-1), s = this._utc_to_local(n);
            this.element.trigger({
                type: e,
                date: s,
                viewMode: this.viewMode,
                dates: t.map(this.dates, this._utc_to_local),
                format: t.proxy(function (t, e) {
                    0 === arguments.length ? (t = this.dates.length - 1, e = this.o.format) : "string" == typeof t && (e = t, t = this.dates.length - 1), e = e || this.o.format;
                    var i = this.dates.get(t);
                    return v.formatDate(i, e, this.o.language)
                }, this)
            })
        },
        show: function () {
            if (!(this.inputField.prop("disabled") || this.inputField.prop("readonly") && this.o.enableOnReadonly === !1)) return this.isInline || this.picker.appendTo(this.o.container), this.place(), this.picker.show(), this._attachSecondaryEvents(), this._trigger("show"), (window.navigator.msMaxTouchPoints || "ontouchstart" in document) && this.o.disableTouchKeyboard && t(this.element).blur(), this
        },
        hide: function () {
            return this.isInline || !this.picker.is(":visible") ? this : (this.focusDate = null, this.picker.hide().detach(), this._detachSecondaryEvents(), this.setViewMode(this.o.startView), this.o.forceParse && this.inputField.val() && this.setValue(), this._trigger("hide"), this)
        },
        destroy: function () {
            return this.hide(), this._detachEvents(), this._detachSecondaryEvents(), this.picker.remove(), delete this.element.data().datepicker, this.isInput || delete this.element.data().date, this
        },
        paste: function (e) {
            var i;
            if (e.originalEvent.clipboardData && e.originalEvent.clipboardData.types && t.inArray("text/plain", e.originalEvent.clipboardData.types) !== -1) i = e.originalEvent.clipboardData.getData("text/plain"); else {
                if (!window.clipboardData) return;
                i = window.clipboardData.getData("Text")
            }
            this.setDate(i), this.update(), e.preventDefault()
        },
        _utc_to_local: function (t) {
            if (!t) return t;
            var e = new Date(t.getTime() + 6e4 * t.getTimezoneOffset());
            return e.getTimezoneOffset() !== t.getTimezoneOffset() && (e = new Date(t.getTime() + 6e4 * e.getTimezoneOffset())), e
        },
        _local_to_utc: function (t) {
            return t && new Date(t.getTime() - 6e4 * t.getTimezoneOffset())
        },
        _zero_time: function (t) {
            return t && new Date(t.getFullYear(), t.getMonth(), t.getDate())
        },
        _zero_utc_time: function (t) {
            return t && i(t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate())
        },
        getDates: function () {
            return t.map(this.dates, this._utc_to_local)
        },
        getUTCDates: function () {
            return t.map(this.dates, function (t) {
                return new Date(t)
            })
        },
        getDate: function () {
            return this._utc_to_local(this.getUTCDate())
        },
        getUTCDate: function () {
            var t = this.dates.get(-1);
            return t !== e ? new Date(t) : null
        },
        clearDates: function () {
            this.inputField.val(""), this.update(), this._trigger("changeDate"), this.o.autoclose && this.hide()
        },
        setDates: function () {
            var e = t.isArray(arguments[0]) ? arguments[0] : arguments;
            return this.update.apply(this, e), this._trigger("changeDate"), this.setValue(), this
        },
        setUTCDates: function () {
            var e = t.isArray(arguments[0]) ? arguments[0] : arguments;
            return this.setDates.apply(this, t.map(e, this._utc_to_local)), this
        },
        setDate: o("setDates"),
        setUTCDate: o("setUTCDates"),
        remove: o("destroy", "Method `remove` is deprecated and will be removed in version 2.0. Use `destroy` instead"),
        setValue: function () {
            var t = this.getFormattedDate();
            return this.inputField.val(t), this
        },
        getFormattedDate: function (i) {
            i === e && (i = this.o.format);
            var n = this.o.language;
            return t.map(this.dates, function (t) {
                return v.formatDate(t, i, n)
            }).join(this.o.multidateSeparator)
        },
        getStartDate: function () {
            return this.o.startDate
        },
        setStartDate: function (t) {
            return this._process_options({startDate: t}), this.update(), this.updateNavArrows(), this
        },
        getEndDate: function () {
            return this.o.endDate
        },
        setEndDate: function (t) {
            return this._process_options({endDate: t}), this.update(), this.updateNavArrows(), this
        },
        setDaysOfWeekDisabled: function (t) {
            return this._process_options({daysOfWeekDisabled: t}), this.update(), this
        },
        setDaysOfWeekHighlighted: function (t) {
            return this._process_options({daysOfWeekHighlighted: t}), this.update(), this
        },
        setDatesDisabled: function (t) {
            return this._process_options({datesDisabled: t}), this.update(), this
        },
        place: function () {
            if (this.isInline) return this;
            var e = this.picker.outerWidth(), i = this.picker.outerHeight(), n = 10, s = t(this.o.container),
                o = s.width(), r = "body" === this.o.container ? t(document).scrollTop() : s.scrollTop(),
                a = s.offset(), l = [0];
            this.element.parents().each(function () {
                var e = t(this).css("z-index");
                "auto" !== e && 0 !== Number(e) && l.push(Number(e))
            });
            var h = Math.max.apply(Math, l) + this.o.zIndexOffset,
                d = this.component ? this.component.parent().offset() : this.element.offset(),
                u = this.component ? this.component.outerHeight(!0) : this.element.outerHeight(!1),
                c = this.component ? this.component.outerWidth(!0) : this.element.outerWidth(!1), p = d.left - a.left,
                f = d.top - a.top;
            "body" !== this.o.container && (f += r), this.picker.removeClass("datepicker-orient-top datepicker-orient-bottom datepicker-orient-right datepicker-orient-left"), "auto" !== this.o.orientation.x ? (this.picker.addClass("datepicker-orient-" + this.o.orientation.x), "right" === this.o.orientation.x && (p -= e - c)) : d.left < 0 ? (this.picker.addClass("datepicker-orient-left"), p -= d.left - n) : p + e > o ? (this.picker.addClass("datepicker-orient-right"), p += c - e) : this.o.rtl ? this.picker.addClass("datepicker-orient-right") : this.picker.addClass("datepicker-orient-left");
            var m, g = this.o.orientation.y;
            if ("auto" === g && (m = -r + f - i, g = m < 0 ? "bottom" : "top"), this.picker.addClass("datepicker-orient-" + g), "top" === g ? f -= i + parseInt(this.picker.css("padding-top")) : f += u, this.o.rtl) {
                var v = o - (p + c);
                this.picker.css({top: f, right: v, zIndex: h})
            } else this.picker.css({top: f, left: p, zIndex: h});
            return this
        },
        _allow_update: !0,
        update: function () {
            if (!this._allow_update) return this;
            var e = this.dates.copy(), i = [], n = !1;
            return arguments.length ? (t.each(arguments, t.proxy(function (t, e) {
                e instanceof Date && (e = this._local_to_utc(e)), i.push(e)
            }, this)), n = !0) : (i = this.isInput ? this.element.val() : this.element.data("date") || this.inputField.val(), i = i && this.o.multidate ? i.split(this.o.multidateSeparator) : [i], delete this.element.data().date), i = t.map(i, t.proxy(function (t) {
                return v.parseDate(t, this.o.format, this.o.language, this.o.assumeNearbyYear)
            }, this)), i = t.grep(i, t.proxy(function (t) {
                return !this.dateWithinRange(t) || !t
            }, this), !0), this.dates.replace(i), this.o.updateViewDate && (this.dates.length ? this.viewDate = new Date(this.dates.get(-1)) : this.viewDate < this.o.startDate ? this.viewDate = new Date(this.o.startDate) : this.viewDate > this.o.endDate ? this.viewDate = new Date(this.o.endDate) : this.viewDate = this.o.defaultViewDate), n ? (this.setValue(), this.element.change()) : this.dates.length && String(e) !== String(this.dates) && n && (this._trigger("changeDate"), this.element.change()), !this.dates.length && e.length && (this._trigger("clearDate"), this.element.change()), this.fill(), this
        },
        fillDow: function () {
            if (this.o.showWeekDays) {
                var e = this.o.weekStart, i = "<tr>";
                for (this.o.calendarWeeks && (i += '<th class="cw">&#160;</th>'); e < this.o.weekStart + 7;) i += '<th class="dow', t.inArray(e, this.o.daysOfWeekDisabled) !== -1 && (i += " disabled"), i += '">' + g[this.o.language].daysMin[e++ % 7] + "</th>";
                i += "</tr>", this.picker.find(".datepicker-days thead").append(i)
            }
        },
        fillMonths: function () {
            for (var t, e = this._utc_to_local(this.viewDate), i = "", n = 0; n < 12; n++) t = e && e.getMonth() === n ? " focused" : "", i += '<span class="month' + t + '">' + g[this.o.language].monthsShort[n] + "</span>";
            this.picker.find(".datepicker-months td").html(i)
        },
        setRange: function (e) {
            e && e.length ? this.range = t.map(e, function (t) {
                return t.valueOf()
            }) : delete this.range, this.fill()
        },
        getClassNames: function (e) {
            var i = [], o = this.viewDate.getUTCFullYear(), r = this.viewDate.getUTCMonth(), a = n();
            return e.getUTCFullYear() < o || e.getUTCFullYear() === o && e.getUTCMonth() < r ? i.push("old") : (e.getUTCFullYear() > o || e.getUTCFullYear() === o && e.getUTCMonth() > r) && i.push("new"), this.focusDate && e.valueOf() === this.focusDate.valueOf() && i.push("focused"), this.o.todayHighlight && s(e, a) && i.push("today"), this.dates.contains(e) !== -1 && i.push("active"), this.dateWithinRange(e) || i.push("disabled"), this.dateIsDisabled(e) && i.push("disabled", "disabled-date"), t.inArray(e.getUTCDay(), this.o.daysOfWeekHighlighted) !== -1 && i.push("highlighted"), this.range && (e > this.range[0] && e < this.range[this.range.length - 1] && i.push("range"), t.inArray(e.valueOf(), this.range) !== -1 && i.push("selected"), e.valueOf() === this.range[0] && i.push("range-start"), e.valueOf() === this.range[this.range.length - 1] && i.push("range-end")), i
        },
        _fill_yearsView: function (i, n, s, o, r, a, l) {
            for (var h, d, u, c = "", p = s / 10, f = this.picker.find(i), m = Math.floor(o / s) * s, g = m + 9 * p, v = Math.floor(this.viewDate.getFullYear() / p) * p, y = t.map(this.dates, function (t) {
                return Math.floor(t.getUTCFullYear() / p) * p
            }), w = m - p; w <= g + p; w += p) h = [n], d = null, w === m - p ? h.push("old") : w === g + p && h.push("new"), t.inArray(w, y) !== -1 && h.push("active"), (w < r || w > a) && h.push("disabled"), w === v && h.push("focused"), l !== t.noop && (u = l(new Date(w, 0, 1)), u === e ? u = {} : "boolean" == typeof u ? u = {enabled: u} : "string" == typeof u && (u = {classes: u}), u.enabled === !1 && h.push("disabled"), u.classes && (h = h.concat(u.classes.split(/\s+/))), u.tooltip && (d = u.tooltip)), c += '<span class="' + h.join(" ") + '"' + (d ? ' title="' + d + '"' : "") + ">" + w + "</span>";
            f.find(".datepicker-switch").text(m + "-" + g), f.find("td").html(c)
        },
        fill: function () {
            var n, s, o = new Date(this.viewDate), r = o.getUTCFullYear(), a = o.getUTCMonth(),
                l = this.o.startDate !== -(1 / 0) ? this.o.startDate.getUTCFullYear() : -(1 / 0),
                h = this.o.startDate !== -(1 / 0) ? this.o.startDate.getUTCMonth() : -(1 / 0),
                d = this.o.endDate !== 1 / 0 ? this.o.endDate.getUTCFullYear() : 1 / 0,
                u = this.o.endDate !== 1 / 0 ? this.o.endDate.getUTCMonth() : 1 / 0,
                c = g[this.o.language].today || g.en.today || "", p = g[this.o.language].clear || g.en.clear || "",
                f = g[this.o.language].titleFormat || g.en.titleFormat;
            if (!isNaN(r) && !isNaN(a)) {
                this.picker.find(".datepicker-days .datepicker-switch").text(v.formatDate(o, f, this.o.language)), this.picker.find("tfoot .today").text(c).css("display", this.o.todayBtn === !0 || "linked" === this.o.todayBtn ? "table-cell" : "none"), this.picker.find("tfoot .clear").text(p).css("display", this.o.clearBtn === !0 ? "table-cell" : "none"), this.picker.find("thead .datepicker-title").text(this.o.title).css("display", "string" == typeof this.o.title && "" !== this.o.title ? "table-cell" : "none"), this.updateNavArrows(), this.fillMonths();
                var m = i(r, a, 0), y = m.getUTCDate();
                m.setUTCDate(y - (m.getUTCDay() - this.o.weekStart + 7) % 7);
                var w = new Date(m);
                m.getUTCFullYear() < 100 && w.setUTCFullYear(m.getUTCFullYear()), w.setUTCDate(w.getUTCDate() + 42), w = w.valueOf();
                for (var b, x, C = []; m.valueOf() < w;) {
                    if (b = m.getUTCDay(), b === this.o.weekStart && (C.push("<tr>"), this.o.calendarWeeks)) {
                        var T = new Date(+m + (this.o.weekStart - b - 7) % 7 * 864e5),
                            E = new Date(Number(T) + (11 - T.getUTCDay()) % 7 * 864e5),
                            S = new Date(Number(S = i(E.getUTCFullYear(), 0, 1)) + (11 - S.getUTCDay()) % 7 * 864e5),
                            _ = (E - S) / 864e5 / 7 + 1;
                        C.push('<td class="cw">' + _ + "</td>")
                    }
                    x = this.getClassNames(m), x.push("day");
                    var k = m.getUTCDate();
                    this.o.beforeShowDay !== t.noop && (s = this.o.beforeShowDay(this._utc_to_local(m)), s === e ? s = {} : "boolean" == typeof s ? s = {enabled: s} : "string" == typeof s && (s = {classes: s}), s.enabled === !1 && x.push("disabled"), s.classes && (x = x.concat(s.classes.split(/\s+/))), s.tooltip && (n = s.tooltip), s.content && (k = s.content)), x = t.isFunction(t.uniqueSort) ? t.uniqueSort(x) : t.unique(x), C.push('<td class="' + x.join(" ") + '"' + (n ? ' title="' + n + '"' : "") + ' data-date="' + m.getTime().toString() + '">' + k + "</td>"), n = null, b === this.o.weekEnd && C.push("</tr>"), m.setUTCDate(m.getUTCDate() + 1)
                }
                this.picker.find(".datepicker-days tbody").html(C.join(""));
                var D = g[this.o.language].monthsTitle || g.en.monthsTitle || "Months",
                    I = this.picker.find(".datepicker-months").find(".datepicker-switch").text(this.o.maxViewMode < 2 ? D : r).end().find("tbody span").removeClass("active");
                if (t.each(this.dates, function (t, e) {
                    e.getUTCFullYear() === r && I.eq(e.getUTCMonth()).addClass("active")
                }), (r < l || r > d) && I.addClass("disabled"), r === l && I.slice(0, h).addClass("disabled"), r === d && I.slice(u + 1).addClass("disabled"), this.o.beforeShowMonth !== t.noop) {
                    var $ = this;
                    t.each(I, function (i, n) {
                        var s = new Date(r, i, 1), o = $.o.beforeShowMonth(s);
                        o === e ? o = {} : "boolean" == typeof o ? o = {enabled: o} : "string" == typeof o && (o = {classes: o}), o.enabled !== !1 || t(n).hasClass("disabled") || t(n).addClass("disabled"), o.classes && t(n).addClass(o.classes), o.tooltip && t(n).prop("title", o.tooltip)
                    })
                }
                this._fill_yearsView(".datepicker-years", "year", 10, r, l, d, this.o.beforeShowYear), this._fill_yearsView(".datepicker-decades", "decade", 100, r, l, d, this.o.beforeShowDecade), this._fill_yearsView(".datepicker-centuries", "century", 1e3, r, l, d, this.o.beforeShowCentury)
            }
        },
        updateNavArrows: function () {
            if (this._allow_update) {
                var t, e, i = new Date(this.viewDate), n = i.getUTCFullYear(), s = i.getUTCMonth(),
                    o = this.o.startDate !== -(1 / 0) ? this.o.startDate.getUTCFullYear() : -(1 / 0),
                    r = this.o.startDate !== -(1 / 0) ? this.o.startDate.getUTCMonth() : -(1 / 0),
                    a = this.o.endDate !== 1 / 0 ? this.o.endDate.getUTCFullYear() : 1 / 0,
                    l = this.o.endDate !== 1 / 0 ? this.o.endDate.getUTCMonth() : 1 / 0, h = 1;
                switch (this.viewMode) {
                    case 4:
                        h *= 10;
                    case 3:
                        h *= 10;
                    case 2:
                        h *= 10;
                    case 1:
                        t = Math.floor(n / h) * h < o, e = Math.floor(n / h) * h + h > a;
                        break;
                    case 0:
                        t = n <= o && s < r, e = n >= a && s > l
                }
                this.picker.find(".prev").toggleClass("disabled", t), this.picker.find(".next").toggleClass("disabled", e)
            }
        },
        click: function (e) {
            e.preventDefault(), e.stopPropagation();
            var s, o, r, a;
            s = t(e.target), s.hasClass("datepicker-switch") && this.viewMode !== this.o.maxViewMode && this.setViewMode(this.viewMode + 1), s.hasClass("today") && !s.hasClass("day") && (this.setViewMode(0), this._setDate(n(), "linked" === this.o.todayBtn ? null : "view")), s.hasClass("clear") && this.clearDates(), s.hasClass("disabled") || (s.hasClass("month") || s.hasClass("year") || s.hasClass("decade") || s.hasClass("century")) && (this.viewDate.setUTCDate(1), o = 1, 1 === this.viewMode ? (a = s.parent().find("span").index(s), r = this.viewDate.getUTCFullYear(), this.viewDate.setUTCMonth(a)) : (a = 0, r = Number(s.text()), this.viewDate.setUTCFullYear(r)), this._trigger(v.viewModes[this.viewMode - 1].e, this.viewDate), this.viewMode === this.o.minViewMode ? this._setDate(i(r, a, o)) : (this.setViewMode(this.viewMode - 1), this.fill())), this.picker.is(":visible") && this._focused_from && this._focused_from.focus(), delete this._focused_from
        },
        dayCellClick: function (e) {
            var i = t(e.currentTarget), n = i.data("date"), s = new Date(n);
            this.o.updateViewDate && (s.getUTCFullYear() !== this.viewDate.getUTCFullYear() && this._trigger("changeYear", this.viewDate), s.getUTCMonth() !== this.viewDate.getUTCMonth() && this._trigger("changeMonth", this.viewDate)), this._setDate(s)
        },
        navArrowsClick: function (e) {
            var i = t(e.currentTarget), n = i.hasClass("prev") ? -1 : 1;
            0 !== this.viewMode && (n *= 12 * v.viewModes[this.viewMode].navStep), this.viewDate = this.moveMonth(this.viewDate, n), this._trigger(v.viewModes[this.viewMode].e, this.viewDate), this.fill()
        },
        _toggle_multidate: function (t) {
            var e = this.dates.contains(t);
            if (t || this.dates.clear(), e !== -1 ? (this.o.multidate === !0 || this.o.multidate > 1 || this.o.toggleActive) && this.dates.remove(e) : this.o.multidate === !1 ? (this.dates.clear(), this.dates.push(t)) : this.dates.push(t), "number" == typeof this.o.multidate) for (; this.dates.length > this.o.multidate;) this.dates.remove(0)
        },
        _setDate: function (t, e) {
            e && "date" !== e || this._toggle_multidate(t && new Date(t)), (!e && this.o.updateViewDate || "view" === e) && (this.viewDate = t && new Date(t)), this.fill(), this.setValue(), e && "view" === e || this._trigger("changeDate"), this.inputField.trigger("change"), !this.o.autoclose || e && "date" !== e || this.hide()
        },
        moveDay: function (t, e) {
            var i = new Date(t);
            return i.setUTCDate(t.getUTCDate() + e), i
        },
        moveWeek: function (t, e) {
            return this.moveDay(t, 7 * e)
        },
        moveMonth: function (t, e) {
            if (!r(t)) return this.o.defaultViewDate;
            if (!e) return t;
            var i, n, s = new Date(t.valueOf()), o = s.getUTCDate(), a = s.getUTCMonth(), l = Math.abs(e);
            if (e = e > 0 ? 1 : -1, 1 === l) n = e === -1 ? function () {
                return s.getUTCMonth() === a
            } : function () {
                return s.getUTCMonth() !== i
            }, i = a + e, s.setUTCMonth(i), i = (i + 12) % 12; else {
                for (var h = 0; h < l; h++) s = this.moveMonth(s, e);
                i = s.getUTCMonth(), s.setUTCDate(o), n = function () {
                    return i !== s.getUTCMonth()
                }
            }
            for (; n();) s.setUTCDate(--o), s.setUTCMonth(i);
            return s
        },
        moveYear: function (t, e) {
            return this.moveMonth(t, 12 * e)
        },
        moveAvailableDate: function (t, e, i) {
            do {
                if (t = this[i](t, e), !this.dateWithinRange(t)) return !1;
                i = "moveDay"
            } while (this.dateIsDisabled(t));
            return t
        },
        weekOfDateIsDisabled: function (e) {
            return t.inArray(e.getUTCDay(), this.o.daysOfWeekDisabled) !== -1
        },
        dateIsDisabled: function (e) {
            return this.weekOfDateIsDisabled(e) || t.grep(this.o.datesDisabled, function (t) {
                return s(e, t)
            }).length > 0
        },
        dateWithinRange: function (t) {
            return t >= this.o.startDate && t <= this.o.endDate
        },
        keydown: function (t) {
            if (!this.picker.is(":visible")) return void (40 !== t.keyCode && 27 !== t.keyCode || (this.show(), t.stopPropagation()));
            var e, i, n = !1, s = this.focusDate || this.viewDate;
            switch (t.keyCode) {
                case 27:
                    this.focusDate ? (this.focusDate = null, this.viewDate = this.dates.get(-1) || this.viewDate, this.fill()) : this.hide(), t.preventDefault(), t.stopPropagation();
                    break;
                case 37:
                case 38:
                case 39:
                case 40:
                    if (!this.o.keyboardNavigation || 7 === this.o.daysOfWeekDisabled.length) break;
                    e = 37 === t.keyCode || 38 === t.keyCode ? -1 : 1, 0 === this.viewMode ? t.ctrlKey ? (i = this.moveAvailableDate(s, e, "moveYear"), i && this._trigger("changeYear", this.viewDate)) : t.shiftKey ? (i = this.moveAvailableDate(s, e, "moveMonth"), i && this._trigger("changeMonth", this.viewDate)) : 37 === t.keyCode || 39 === t.keyCode ? i = this.moveAvailableDate(s, e, "moveDay") : this.weekOfDateIsDisabled(s) || (i = this.moveAvailableDate(s, e, "moveWeek")) : 1 === this.viewMode ? (38 !== t.keyCode && 40 !== t.keyCode || (e *= 4), i = this.moveAvailableDate(s, e, "moveMonth")) : 2 === this.viewMode && (38 !== t.keyCode && 40 !== t.keyCode || (e *= 4), i = this.moveAvailableDate(s, e, "moveYear")), i && (this.focusDate = this.viewDate = i, this.setValue(), this.fill(), t.preventDefault());
                    break;
                case 13:
                    if (!this.o.forceParse) break;
                    s = this.focusDate || this.dates.get(-1) || this.viewDate, this.o.keyboardNavigation && (this._toggle_multidate(s), n = !0), this.focusDate = null, this.viewDate = this.dates.get(-1) || this.viewDate, this.setValue(), this.fill(), this.picker.is(":visible") && (t.preventDefault(), t.stopPropagation(), this.o.autoclose && this.hide());
                    break;
                case 9:
                    this.focusDate = null, this.viewDate = this.dates.get(-1) || this.viewDate, this.fill(), this.hide()
            }
            n && (this.dates.length ? this._trigger("changeDate") : this._trigger("clearDate"), this.inputField.trigger("change"))
        },
        setViewMode: function (t) {
            this.viewMode = t, this.picker.children("div").hide().filter(".datepicker-" + v.viewModes[this.viewMode].clsName).show(), this.updateNavArrows(), this._trigger("changeViewMode", new Date(this.viewDate))
        }
    };
    var u = function (e, i) {
        t.data(e, "datepicker", this), this.element = t(e), this.inputs = t.map(i.inputs, function (t) {
            return t.jquery ? t[0] : t
        }), delete i.inputs, this.keepEmptyValues = i.keepEmptyValues, delete i.keepEmptyValues, p.call(t(this.inputs), i).on("changeDate", t.proxy(this.dateUpdated, this)), this.pickers = t.map(this.inputs, function (e) {
            return t.data(e, "datepicker")
        }), this.updateDates()
    };
    u.prototype = {
        updateDates: function () {
            this.dates = t.map(this.pickers, function (t) {
                return t.getUTCDate()
            }), this.updateRanges()
        },
        updateRanges: function () {
            var e = t.map(this.dates, function (t) {
                return t.valueOf()
            });
            t.each(this.pickers, function (t, i) {
                i.setRange(e)
            })
        },
        clearDates: function () {
            t.each(this.pickers, function (t, e) {
                e.clearDates()
            })
        },
        dateUpdated: function (i) {
            if (!this.updating) {
                this.updating = !0;
                var n = t.data(i.target, "datepicker");
                if (n !== e) {
                    var s = n.getUTCDate(), o = this.keepEmptyValues, r = t.inArray(i.target, this.inputs), a = r - 1,
                        l = r + 1, h = this.inputs.length;
                    if (r !== -1) {
                        if (t.each(this.pickers, function (t, e) {
                            e.getUTCDate() || e !== n && o || e.setUTCDate(s)
                        }), s < this.dates[a]) for (; a >= 0 && s < this.dates[a];) this.pickers[a--].setUTCDate(s); else if (s > this.dates[l]) for (; l < h && s > this.dates[l];) this.pickers[l++].setUTCDate(s);
                        this.updateDates(), delete this.updating
                    }
                }
            }
        },
        destroy: function () {
            t.map(this.pickers, function (t) {
                t.destroy()
            }), t(this.inputs).off("changeDate", this.dateUpdated), delete this.element.data().datepicker
        },
        remove: o("destroy", "Method `remove` is deprecated and will be removed in version 2.0. Use `destroy` instead")
    };
    var c = t.fn.datepicker, p = function (i) {
        var n = Array.apply(null, arguments);
        n.shift();
        var s;
        if (this.each(function () {
            var e = t(this), o = e.data("datepicker"), r = "object" == typeof i && i;
            if (!o) {
                var h = a(this, "date"), c = t.extend({}, f, h, r), p = l(c.language), m = t.extend({}, f, p, h, r);
                e.hasClass("input-daterange") || m.inputs ? (t.extend(m, {inputs: m.inputs || e.find("input").toArray()}), o = new u(this, m)) : o = new d(this, m), e.data("datepicker", o)
            }
            "string" == typeof i && "function" == typeof o[i] && (s = o[i].apply(o, n))
        }), s === e || s instanceof d || s instanceof u) return this;
        if (this.length > 1) throw new Error("Using only allowed for the collection of a single element (" + i + " function)");
        return s
    };
    t.fn.datepicker = p;
    var f = t.fn.datepicker.defaults = {
        assumeNearbyYear: !1,
        autoclose: !1,
        beforeShowDay: t.noop,
        beforeShowMonth: t.noop,
        beforeShowYear: t.noop,
        beforeShowDecade: t.noop,
        beforeShowCentury: t.noop,
        calendarWeeks: !1,
        clearBtn: !1,
        toggleActive: !1,
        daysOfWeekDisabled: [],
        daysOfWeekHighlighted: [],
        datesDisabled: [],
        endDate: 1 / 0,
        forceParse: !0,
        format: "mm/dd/yyyy",
        keepEmptyValues: !1,
        keyboardNavigation: !0,
        language: "en",
        minViewMode: 0,
        maxViewMode: 4,
        multidate: !1,
        multidateSeparator: ",",
        orientation: "auto",
        rtl: !1,
        startDate: -(1 / 0),
        startView: 0,
        todayBtn: !1,
        todayHighlight: !1,
        updateViewDate: !0,
        weekStart: 0,
        disableTouchKeyboard: !1,
        enableOnReadonly: !0,
        showOnFocus: !0,
        zIndexOffset: 10,
        container: "body",
        immediateUpdates: !1,
        title: "",
        templates: {leftArrow: "&#x00AB;", rightArrow: "&#x00BB;"},
        showWeekDays: !0
    }, m = t.fn.datepicker.locale_opts = ["format", "rtl", "weekStart"];
    t.fn.datepicker.Constructor = d;
    var g = t.fn.datepicker.dates = {
        en: {
            days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
            months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            today: "Today",
            clear: "Clear",
            titleFormat: "MM yyyy"
        }
    }, v = {
        viewModes: [{names: ["days", "month"], clsName: "days", e: "changeMonth"}, {
            names: ["months", "year"],
            clsName: "months",
            e: "changeYear",
            navStep: 1
        }, {
            names: ["years", "decade"],
            clsName: "years",
            e: "changeDecade",
            navStep: 10
        }, {
            names: ["decades", "century"],
            clsName: "decades",
            e: "changeCentury",
            navStep: 100
        }, {names: ["centuries", "millennium"], clsName: "centuries", e: "changeMillennium", navStep: 1e3}],
        validParts: /dd?|DD?|mm?|MM?|yy(?:yy)?/g,
        nonpunctuation: /[^ -\/:-@\u5e74\u6708\u65e5\[-`{-~\t\n\r]+/g,
        parseFormat: function (t) {
            if ("function" == typeof t.toValue && "function" == typeof t.toDisplay) return t;
            var e = t.replace(this.validParts, "\0").split("\0"), i = t.match(this.validParts);
            if (!e || !e.length || !i || 0 === i.length) throw new Error("Invalid date format.");
            return {separators: e, parts: i}
        },
        parseDate: function (i, s, o, r) {
            function a(t, e) {
                return e === !0 && (e = 10), t < 100 && (t += 2e3, t > (new Date).getFullYear() + e && (t -= 100)), t
            }

            function l() {
                var t = this.slice(0, h[p].length), e = h[p].slice(0, t.length);
                return t.toLowerCase() === e.toLowerCase()
            }

            if (!i) return e;
            if (i instanceof Date) return i;
            if ("string" == typeof s && (s = v.parseFormat(s)), s.toValue) return s.toValue(i, s, o);
            var h, u, c, p, f, m = {d: "moveDay", m: "moveMonth", w: "moveWeek", y: "moveYear"},
                y = {yesterday: "-1d", today: "+0d", tomorrow: "+1d"};
            if (i in y && (i = y[i]), /^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/i.test(i)) {
                for (h = i.match(/([\-+]\d+)([dmwy])/gi), i = new Date, p = 0; p < h.length; p++) u = h[p].match(/([\-+]\d+)([dmwy])/i), c = Number(u[1]), f = m[u[2].toLowerCase()], i = d.prototype[f](i, c);
                return d.prototype._zero_utc_time(i)
            }
            h = i && i.match(this.nonpunctuation) || [];
            var w, b, x = {}, C = ["yyyy", "yy", "M", "MM", "m", "mm", "d", "dd"], T = {
                yyyy: function (t, e) {
                    return t.setUTCFullYear(r ? a(e, r) : e)
                }, m: function (t, e) {
                    if (isNaN(t)) return t;
                    for (e -= 1; e < 0;) e += 12;
                    for (e %= 12, t.setUTCMonth(e); t.getUTCMonth() !== e;) t.setUTCDate(t.getUTCDate() - 1);
                    return t
                }, d: function (t, e) {
                    return t.setUTCDate(e)
                }
            };
            T.yy = T.yyyy, T.M = T.MM = T.mm = T.m, T.dd = T.d, i = n();
            var E = s.parts.slice();
            if (h.length !== E.length && (E = t(E).filter(function (e, i) {
                return t.inArray(i, C) !== -1
            }).toArray()), h.length === E.length) {
                var S;
                for (p = 0, S = E.length; p < S; p++) {
                    if (w = parseInt(h[p], 10), u = E[p], isNaN(w)) switch (u) {
                        case"MM":
                            b = t(g[o].months).filter(l), w = t.inArray(b[0], g[o].months) + 1;
                            break;
                        case"M":
                            b = t(g[o].monthsShort).filter(l), w = t.inArray(b[0], g[o].monthsShort) + 1
                    }
                    x[u] = w
                }
                var _, k;
                for (p = 0; p < C.length; p++) k = C[p], k in x && !isNaN(x[k]) && (_ = new Date(i), T[k](_, x[k]), isNaN(_) || (i = _))
            }
            return i
        },
        formatDate: function (e, i, n) {
            if (!e) return "";
            if ("string" == typeof i && (i = v.parseFormat(i)), i.toDisplay) return i.toDisplay(e, i, n);
            var s = {
                d: e.getUTCDate(),
                D: g[n].daysShort[e.getUTCDay()],
                DD: g[n].days[e.getUTCDay()],
                m: e.getUTCMonth() + 1,
                M: g[n].monthsShort[e.getUTCMonth()],
                MM: g[n].months[e.getUTCMonth()],
                yy: e.getUTCFullYear().toString().substring(2),
                yyyy: e.getUTCFullYear()
            };
            s.dd = (s.d < 10 ? "0" : "") + s.d, s.mm = (s.m < 10 ? "0" : "") + s.m, e = [];
            for (var o = t.extend([], i.separators), r = 0, a = i.parts.length; r <= a; r++) o.length && e.push(o.shift()), e.push(s[i.parts[r]]);
            return e.join("")
        },
        headTemplate: '<thead><tr><th colspan="7" class="datepicker-title"></th></tr><tr><th class="prev">' + f.templates.leftArrow + '</th><th colspan="5" class="datepicker-switch"></th><th class="next">' + f.templates.rightArrow + "</th></tr></thead>",
        contTemplate: '<tbody><tr><td colspan="7"></td></tr></tbody>',
        footTemplate: '<tfoot><tr><th colspan="7" class="today"></th></tr><tr><th colspan="7" class="clear"></th></tr></tfoot>'
    };
    v.template = '<div class="datepicker"><div class="datepicker-days"><table class="table-condensed">' + v.headTemplate + "<tbody></tbody>" + v.footTemplate + '</table></div><div class="datepicker-months"><table class="table-condensed">' + v.headTemplate + v.contTemplate + v.footTemplate + '</table></div><div class="datepicker-years"><table class="table-condensed">' + v.headTemplate + v.contTemplate + v.footTemplate + '</table></div><div class="datepicker-decades"><table class="table-condensed">' + v.headTemplate + v.contTemplate + v.footTemplate + '</table></div><div class="datepicker-centuries"><table class="table-condensed">' + v.headTemplate + v.contTemplate + v.footTemplate + "</table></div></div>", t.fn.datepicker.DPGlobal = v, t.fn.datepicker.noConflict = function () {
        return t.fn.datepicker = c, this
    }, t.fn.datepicker.version = "1.8.0", t.fn.datepicker.deprecated = function (t) {
        var e = window.console;
        e && e.warn && e.warn("DEPRECATED: " + t)
    }, t(document).on("focus.datepicker.data-api click.datepicker.data-api", '[data-provide="datepicker"]', function (e) {
        var i = t(this);
        i.data("datepicker") || (e.preventDefault(), p.call(i, "show"))
    }), t(function () {
        p.call(t('[data-provide="datepicker-inline"]'))
    })
}), !function () {
    function t(t) {
        return document.createElementNS(h, t)
    }

    function e(t) {
        return (10 > t ? "0" : "") + t
    }

    function i(t) {
        var e = ++v + "";
        return t ? t + e : e
    }

    function n(n, a) {
        function h(t, e) {
            var i = c.offset(), n = /^touch/.test(t.type), s = i.left + y, r = i.top + y,
                h = (n ? t.originalEvent.touches[0] : t).pageX - s, u = (n ? t.originalEvent.touches[0] : t).pageY - r,
                p = Math.sqrt(h * h + u * u), g = !1;
            if (!e || !(w - x > p || p > w + x)) {
                t.preventDefault();
                var v = setTimeout(function () {
                    o.addClass("clockpicker-moving")
                }, 200);
                d && c.append(I.canvas), I.setHand(h, u, !e, !0), l.off(f).on(f, function (t) {
                    t.preventDefault();
                    var e = /^touch/.test(t.type), i = (e ? t.originalEvent.touches[0] : t).pageX - s,
                        n = (e ? t.originalEvent.touches[0] : t).pageY - r;
                    (g || i !== h || n !== u) && (g = !0, I.setHand(i, n, !1, !0))
                }), l.off(m).on(m, function (t) {
                    l.off(m), t.preventDefault();
                    var i = /^touch/.test(t.type), n = (i ? t.originalEvent.changedTouches[0] : t).pageX - s,
                        d = (i ? t.originalEvent.changedTouches[0] : t).pageY - r;
                    (e || g) && n === h && d === u && I.setHand(n, d), "hours" === I.currentView ? I.toggleView("minutes", T / 2) : a.autoclose && (I.minutesView.addClass("clockpicker-dial-out"), setTimeout(function () {
                        I.done()
                    }, T / 2)), c.prepend(N), clearTimeout(v), o.removeClass("clockpicker-moving"), l.off(f)
                })
            }
        }

        var u = r(E), c = u.find(".clockpicker-plate"), g = u.find(".clockpicker-hours"),
            v = u.find(".clockpicker-minutes"), S = u.find(".clockpicker-am-pm-block"),
            _ = "INPUT" === n.prop("tagName"), k = _ ? n : n.find("input"), D = n.find(".input-group-addon"), I = this;
        if (this.id = i("cp"), this.element = n, this.options = a, this.isAppended = !1, this.isShown = !1, this.currentView = "hours", this.isInput = _, this.input = k, this.addon = D, this.popover = u, this.plate = c, this.hoursView = g, this.minutesView = v, this.amPmBlock = S, this.spanHours = u.find(".clockpicker-span-hours"), this.spanMinutes = u.find(".clockpicker-span-minutes"), this.spanAmPm = u.find(".clockpicker-span-am-pm"), this.amOrPm = "PM", a.twelvehour) {
            var $ = ['<div class="clockpicker-am-pm-block">', '<button type="button" class="btn btn-sm btn-default clockpicker-button clockpicker-am-button">', "AM</button>", '<button type="button" class="btn btn-sm btn-default clockpicker-button clockpicker-pm-button">', "PM</button>", "</div>"].join("");
            r($), r('<button type="button" class="btn btn-sm btn-default clockpicker-button am-button">AM</button>').on("click", function () {
                I.amOrPm = "AM", r(".clockpicker-span-am-pm").empty().append("AM")
            }).appendTo(this.amPmBlock), r('<button type="button" class="btn btn-sm btn-default clockpicker-button pm-button">PM</button>').on("click", function () {
                I.amOrPm = "PM", r(".clockpicker-span-am-pm").empty().append("PM")
            }).appendTo(this.amPmBlock)
        }
        a.autoclose || r('<button type="button" class="btn btn-sm btn-default btn-block clockpicker-button">' + a.donetext + "</button>").click(r.proxy(this.done, this)).appendTo(u), "top" !== a.placement && "bottom" !== a.placement || "top" !== a.align && "bottom" !== a.align || (a.align = "left"), "left" !== a.placement && "right" !== a.placement || "left" !== a.align && "right" !== a.align || (a.align = "top"), u.addClass(a.placement), u.addClass("clockpicker-align-" + a.align), this.spanHours.click(r.proxy(this.toggleView, this, "hours")), this.spanMinutes.click(r.proxy(this.toggleView, this, "minutes")), k.on("focus.clockpicker click.clockpicker", r.proxy(this.show, this)), D.on("click.clockpicker", r.proxy(this.toggle, this));
        var M, P, z, A, O = r('<div class="clockpicker-tick"></div>');
        if (a.twelvehour) for (M = 1; 13 > M; M += 1) P = O.clone(), z = M / 6 * Math.PI, A = w, P.css("font-size", "120%"), P.css({
            left: y + Math.sin(z) * A - x,
            top: y - Math.cos(z) * A - x
        }), P.html(0 === M ? "00" : M), g.append(P), P.on(p, h); else for (M = 0; 24 > M; M += 1) {
            P = O.clone(), z = M / 6 * Math.PI;
            var L = M > 0 && 13 > M;
            A = L ? b : w, P.css({
                left: y + Math.sin(z) * A - x,
                top: y - Math.cos(z) * A - x
            }), L && P.css("font-size", "120%"), P.html(0 === M ? "00" : M), g.append(P), P.on(p, h)
        }
        for (M = 0; 60 > M; M += 5) P = O.clone(), z = M / 30 * Math.PI, P.css({
            left: y + Math.sin(z) * w - x,
            top: y - Math.cos(z) * w - x
        }), P.css("font-size", "120%"), P.html(e(M)), v.append(P), P.on(p, h);
        if (c.on(p, function (t) {
            0 === r(t.target).closest(".clockpicker-tick").length && h(t, !0)
        }), d) {
            var N = u.find(".clockpicker-canvas"), j = t("svg");
            j.setAttribute("class", "clockpicker-svg"), j.setAttribute("width", C), j.setAttribute("height", C);
            var W = t("g");
            W.setAttribute("transform", "translate(" + y + "," + y + ")");
            var R = t("circle");
            R.setAttribute("class", "clockpicker-canvas-bearing"), R.setAttribute("cx", 0), R.setAttribute("cy", 0), R.setAttribute("r", 2);
            var H = t("line");
            H.setAttribute("x1", 0), H.setAttribute("y1", 0);
            var F = t("circle");
            F.setAttribute("class", "clockpicker-canvas-bg"), F.setAttribute("r", x);
            var V = t("circle");
            V.setAttribute("class", "clockpicker-canvas-fg"), V.setAttribute("r", 3.5), W.appendChild(H), W.appendChild(F), W.appendChild(V), W.appendChild(R), j.appendChild(W), N.append(j), this.hand = H, this.bg = F, this.fg = V, this.bearing = R, this.g = W, this.canvas = N
        }
        s(this.options.init)
    }

    function s(t) {
        t && "function" == typeof t && t()
    }

    var o, r = window.jQuery, a = r(window), l = r(document), h = "http://www.w3.org/2000/svg",
        d = "SVGAngle" in window && function () {
            var t, e = document.createElement("div");
            return e.innerHTML = "<svg/>", t = (e.firstChild && e.firstChild.namespaceURI) == h, e.innerHTML = "", t
        }(), u = function () {
            var t = document.createElement("div").style;
            return "transition" in t || "WebkitTransition" in t || "MozTransition" in t || "msTransition" in t || "OTransition" in t
        }(), c = "ontouchstart" in window, p = "mousedown" + (c ? " touchstart" : ""),
        f = "mousemove.clockpicker" + (c ? " touchmove.clockpicker" : ""),
        m = "mouseup.clockpicker" + (c ? " touchend.clockpicker" : ""),
        g = navigator.vibrate ? "vibrate" : navigator.webkitVibrate ? "webkitVibrate" : null, v = 0, y = 100, w = 80,
        b = 54, x = 13, C = 2 * y, T = u ? 350 : 1,
        E = ['<div class="popover clockpicker-popover">', '<div class="arrow"></div>', '<div class="popover-title">', '<span class="clockpicker-span-hours text-primary"></span>', " : ", '<span class="clockpicker-span-minutes"></span>', '<span class="clockpicker-span-am-pm"></span>', "</div>", '<div class="popover-content">', '<div class="clockpicker-plate">', '<div class="clockpicker-canvas"></div>', '<div class="clockpicker-dial clockpicker-hours"></div>', '<div class="clockpicker-dial clockpicker-minutes clockpicker-dial-out"></div>', "</div>", '<span class="clockpicker-am-pm-block">', "</span>", "</div>", "</div>"].join("");
    n.DEFAULTS = {
        "default": "",
        fromnow: 0,
        placement: "bottom",
        align: "left",
        donetext: "完成",
        autoclose: !1,
        twelvehour: !1,
        vibrate: !0
    }, n.prototype.toggle = function () {
        this[this.isShown ? "hide" : "show"]()
    }, n.prototype.locate = function () {
        var t = this.element, e = this.popover, i = t.offset(), n = t.outerWidth(), s = t.outerHeight(),
            o = this.options.placement, r = this.options.align, a = {};
        switch (e.show(), o) {
            case"bottom":
                a.top = i.top + s;
                break;
            case"right":
                a.left = i.left + n;
                break;
            case"top":
                a.top = i.top - e.outerHeight();
                break;
            case"left":
                a.left = i.left - e.outerWidth()
        }
        switch (r) {
            case"left":
                a.left = i.left;
                break;
            case"right":
                a.left = i.left + n - e.outerWidth();
                break;
            case"top":
                a.top = i.top;
                break;
            case"bottom":
                a.top = i.top + s - e.outerHeight()
        }
        e.css(a)
    }, n.prototype.show = function () {
        if (!this.isShown) {
            s(this.options.beforeShow);
            var t = this;
            this.isAppended || (o = r(document.body).append(this.popover), a.on("resize.clockpicker" + this.id, function () {
                t.isShown && t.locate()
            }), this.isAppended = !0);
            var i = ((this.input.prop("value") || this.options["default"] || "") + "").split(":");
            if ("now" === i[0]) {
                var n = new Date(+new Date + this.options.fromnow);
                i = [n.getHours(), n.getMinutes()]
            }
            this.hours = +i[0] || 0, this.minutes = +i[1] || 0, this.spanHours.html(e(this.hours)), this.spanMinutes.html(e(this.minutes)), this.toggleView("hours"), this.locate(), this.isShown = !0, l.on("click.clockpicker." + this.id + " focusin.clockpicker." + this.id, function (e) {
                var i = r(e.target);
                0 === i.closest(t.popover).length && 0 === i.closest(t.addon).length && 0 === i.closest(t.input).length && t.hide()
            }), l.on("keyup.clockpicker." + this.id, function (e) {
                27 === e.keyCode && t.hide()
            }), s(this.options.afterShow)
        }
    }, n.prototype.hide = function () {
        s(this.options.beforeHide), this.isShown = !1, l.off("click.clockpicker." + this.id + " focusin.clockpicker." + this.id), l.off("keyup.clockpicker." + this.id), this.popover.hide(), s(this.options.afterHide)
    }, n.prototype.toggleView = function (t, e) {
        var i = !1;
        "minutes" === t && "visible" === r(this.hoursView).css("visibility") && (s(this.options.beforeHourSelect), i = !0);
        var n = "hours" === t, o = n ? this.hoursView : this.minutesView, a = n ? this.minutesView : this.hoursView;
        this.currentView = t, this.spanHours.toggleClass("text-primary", n), this.spanMinutes.toggleClass("text-primary", !n), a.addClass("clockpicker-dial-out"), o.css("visibility", "visible").removeClass("clockpicker-dial-out"), this.resetClock(e), clearTimeout(this.toggleViewTimer), this.toggleViewTimer = setTimeout(function () {
            a.css("visibility", "hidden")
        }, T), i && s(this.options.afterHourSelect)
    }, n.prototype.resetClock = function (t) {
        var e = this.currentView, i = this[e], n = "hours" === e, s = Math.PI / (n ? 6 : 30), o = i * s,
            r = n && i > 0 && 13 > i ? b : w, a = Math.sin(o) * r, l = -Math.cos(o) * r, h = this;
        d && t ? (h.canvas.addClass("clockpicker-canvas-out"), setTimeout(function () {
            h.canvas.removeClass("clockpicker-canvas-out"), h.setHand(a, l)
        }, t)) : this.setHand(a, l)
    }, n.prototype.setHand = function (t, i, n, s) {
        var o, a = Math.atan2(t, -i), l = "hours" === this.currentView, h = Math.PI / (l || n ? 6 : 30),
            u = Math.sqrt(t * t + i * i), c = this.options, p = l && (w + b) / 2 > u, f = p ? b : w;
        if (c.twelvehour && (f = w), 0 > a && (a = 2 * Math.PI + a), o = Math.round(a / h), a = o * h, c.twelvehour ? l ? 0 === o && (o = 12) : (n && (o *= 5), 60 === o && (o = 0)) : l ? (12 === o && (o = 0), o = p ? 0 === o ? 12 : o : 0 === o ? 0 : o + 12) : (n && (o *= 5), 60 === o && (o = 0)), this[this.currentView] !== o && g && this.options.vibrate && (this.vibrateTimer || (navigator[g](10), this.vibrateTimer = setTimeout(r.proxy(function () {
            this.vibrateTimer = null
        }, this), 100))), this[this.currentView] = o, this[l ? "spanHours" : "spanMinutes"].html(e(o)), !d) return void this[l ? "hoursView" : "minutesView"].find(".clockpicker-tick").each(function () {
            var t = r(this);
            t.toggleClass("active", o === +t.html())
        });
        s || !l && o % 5 ? (this.g.insertBefore(this.hand, this.bearing), this.g.insertBefore(this.bg, this.fg), this.bg.setAttribute("class", "clockpicker-canvas-bg clockpicker-canvas-bg-trans")) : (this.g.insertBefore(this.hand, this.bg), this.g.insertBefore(this.fg, this.bg), this.bg.setAttribute("class", "clockpicker-canvas-bg"));
        var m = Math.sin(a) * f, v = -Math.cos(a) * f;
        this.hand.setAttribute("x2", m), this.hand.setAttribute("y2", v), this.bg.setAttribute("cx", m), this.bg.setAttribute("cy", v), this.fg.setAttribute("cx", m), this.fg.setAttribute("cy", v)
    }, n.prototype.done = function () {
        s(this.options.beforeDone), this.hide();
        var t = this.input.prop("value"), i = e(this.hours) + ":" + e(this.minutes);
        this.options.twelvehour && (i += this.amOrPm), this.input.prop("value", i), i !== t && (this.input.triggerHandler("change"), this.isInput || this.element.trigger("change")), this.options.autoclose && this.input.trigger("blur"), s(this.options.afterDone)
    }, n.prototype.remove = function () {
        this.element.removeData("clockpicker"), this.input.off("focus.clockpicker click.clockpicker"), this.addon.off("click.clockpicker"), this.isShown && this.hide(), this.isAppended && (a.off("resize.clockpicker" + this.id), this.popover.remove())
    }, r.fn.clockpicker = function (t) {
        var e = Array.prototype.slice.call(arguments, 1);
        return this.each(function () {
            var i = r(this), s = i.data("clockpicker");
            if (s) "function" == typeof s[t] && s[t].apply(s, e); else {
                var o = r.extend({}, n.DEFAULTS, i.data(), "object" == typeof t && t);
                i.data("clockpicker", new n(i, o))
            }
        })
    }
}(), function (t) {
    "use strict";
    t.fn.counterUp = function (e) {
        var i, n = t.extend({
            time: 400,
            delay: 10,
            offset: 100,
            beginAt: 0,
            formatter: !1,
            context: "window",
            callback: function () {
            }
        }, e);
        return this.each(function () {
            var e = t(this), s = {
                time: t(this).data("counterup-time") || n.time,
                delay: t(this).data("counterup-delay") || n.delay,
                offset: t(this).data("counterup-offset") || n.offset,
                beginAt: t(this).data("counterup-beginat") || n.beginAt,
                context: t(this).data("counterup-context") || n.context
            }, o = function () {
                var o = [], r = s.time / s.delay, a = t(this).attr("data-num") ? t(this).attr("data-num") : e.text(),
                    l = /[0-9]+,[0-9]+/.test(a);
                a = a.replace(/,/g, "");
                var h = (a.split(".")[1] || []).length;
                s.beginAt > a && (s.beginAt = a);
                var d = /[0-9]+:[0-9]+:[0-9]+/.test(a);
                if (d) {
                    var u = a.split(":"), c = 1;
                    for (i = 0; u.length > 0;) i += c * parseInt(u.pop(), 10), c *= 60
                }
                for (var p = r; p >= s.beginAt / a * r; p--) {
                    var f = parseFloat(a / r * p).toFixed(h);
                    if (d) {
                        f = parseInt(i / r * p);
                        var m = parseInt(f / 3600) % 24, g = parseInt(f / 60) % 60, v = parseInt(f % 60, 10);
                        f = (m < 10 ? "0" + m : m) + ":" + (g < 10 ? "0" + g : g) + ":" + (v < 10 ? "0" + v : v)
                    }
                    if (l) for (; /(\d+)(\d{3})/.test(f.toString());) f = f.toString().replace(/(\d+)(\d{3})/, "$1,$2");
                    n.formatter && (f = n.formatter.call(this, f)), o.unshift(f)
                }
                e.data("counterup-nums", o), e.text(s.beginAt);
                var y = function () {
                    return e.data("counterup-nums") ? (e.html(e.data("counterup-nums").shift()), void (e.data("counterup-nums").length ? setTimeout(e.data("counterup-func"), s.delay) : (e.data("counterup-nums", null), e.data("counterup-func", null), n.callback.call(this)))) : void n.callback.call(this)
                };
                e.data("counterup-func", y), setTimeout(e.data("counterup-func"), s.delay)
            };
            e.waypoint(function (t) {
                o(), this.destroy()
            }, {offset: s.offset + "%", context: s.context})
        })
    }
}(jQuery), !function (t) {
    t.fn.equalHeights = function () {
        var e = 0, i = t(this);
        return i.each(function () {
            var i = t(this).innerHeight();
            i > e && (e = i)
        }), i.css("height", e)
    }, t("[data-equal]").each(function () {
        var e = t(this), i = e.data("equal");
        e.find(i).equalHeights()
    })
}(jQuery), !function (t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof module && module.exports ? module.exports = t(require("jquery")) : t(jQuery)
}(function (t) {
    var e = function () {
        function e() {
            var e = this, i = function () {
                var i = ["br-wrapper"];
                "" !== e.options.theme && i.push("br-theme-" + e.options.theme), e.$elem.wrap(t("<div />", {"class": i.join(" ")}))
            }, n = function () {
                e.$elem.unwrap()
            }, s = function (i) {
                return t.isNumeric(i) && (i = Math.floor(i)), t('option[value="' + i + '"]', e.$elem)
            }, o = function () {
                var i = e.options.initialRating;
                return i ? s(i) : t("option:selected", e.$elem)
            }, r = function (t) {
                var i = e.$elem.data("barrating");
                return "undefined" != typeof t ? i[t] : i
            }, a = function (t, i) {
                null !== i && "object" == typeof i ? e.$elem.data("barrating", i) : e.$elem.data("barrating")[t] = i
            }, l = function () {
                var t = o(), i = t.val(), n = t.data("html") ? t.data("html") : t.text();
                a(null, {
                    userOptions: e.options,
                    ratingValue: i,
                    ratingText: n,
                    originalRatingValue: i,
                    originalRatingText: n,
                    readOnly: e.options.readonly,
                    ratingMade: !1
                })
            }, h = function () {
                e.$elem.removeData("barrating")
            }, d = function () {
                return r("ratingText")
            }, u = function () {
                return r("ratingValue")
            }, c = function () {
                var i = t("<div />", {"class": "br-widget"});
                return e.$elem.find("option").each(function () {
                    var n, s, o, r;
                    n = t(this).val(), n && (s = t(this).text(), o = t(this).data("html"), o && (s = o), r = t("<a />", {
                        href: "#",
                        "data-rating-value": n,
                        "data-rating-text": s,
                        html: e.options.showValues ? s : ""
                    }), i.append(r))
                }), e.options.showSelectedRating && i.append(t("<div />", {
                    text: "",
                    "class": "br-current-rating"
                })), e.options.reverse && i.addClass("br-reverse"), e.options.readonly && i.addClass("br-readonly"), i
            }, p = function () {
                return r("userOptions").reverse ? "nextAll" : "prevAll"
            }, f = function (t) {
                s(t).prop("selected", !0), e.$elem.change()
            }, m = function () {
                t("option", e.$elem).prop("selected", function () {
                    return this.defaultSelected
                }), e.$elem.change()
            }, g = function (t) {
                t = t ? t : d(), e.options.showSelectedRating && e.$elem.parent().find(".br-current-rating").text(t)
            }, v = function (t) {
                return Math.round(Math.floor(10 * t) / 10 % 1 * 100)
            }, y = function () {
                e.$widget.find("a").removeClass(function (t, e) {
                    return (e.match(/(^|\s)br-\S+/g) || []).join(" ")
                })
            }, w = function () {
                var i, n, s = e.$widget.find('a[data-rating-value="' + u() + '"]'), o = r("userOptions").initialRating,
                    a = t.isNumeric(u()) ? u() : 0, l = v(o);
                if (y(), s.addClass("br-selected br-current")[p()]().addClass("br-selected"), !r("ratingMade") && t.isNumeric(o)) {
                    if (a >= o || !l) return;
                    i = e.$widget.find("a"), n = s.length ? s[r("userOptions").reverse ? "prev" : "next"]() : i[r("userOptions").reverse ? "last" : "first"](), n.addClass("br-fractional"), n.addClass("br-fractional-" + l)
                }
            }, b = function (t) {
                return !!e.options.deselectable && (!e.$elem.find("option:first").val() && u() == t.attr("data-rating-value"))
            }, x = function (i) {
                i.on("click.barrating", function (i) {
                    var n, s, o = t(this), l = r("userOptions");
                    return i.preventDefault(), n = o.attr("data-rating-value"), s = o.attr("data-rating-text"), b(o) && (n = "", s = ""), a("ratingValue", n), a("ratingText", s), a("ratingMade", !0), f(n), g(s), w(), l.onSelect.call(e, u(), d(), i), !1
                })
            }, C = function (e) {
                e.on("mouseenter.barrating", function () {
                    var e = t(this);
                    y(), e.addClass("br-active")[p()]().addClass("br-active"), g(e.attr("data-rating-text"))
                })
            }, T = function (t) {
                e.$widget.on("mouseleave.barrating blur.barrating", function () {
                    g(), w()
                })
            }, E = function (e) {
                e.on("touchstart.barrating", function (e) {
                    e.preventDefault(), e.stopPropagation(), t(this).click()
                })
            }, S = function (t) {
                t.on("click.barrating", function (t) {
                    t.preventDefault()
                })
            }, _ = function (t) {
                x(t), e.options.hoverState && (C(t), T(t))
            }, k = function (t) {
                t.off(".barrating")
            }, D = function (t) {
                var i = e.$widget.find("a");
                E && E(i), t ? (k(i), S(i)) : _(i)
            };
            this.show = function () {
                r() || (i(), l(), e.$widget = c(), e.$widget.insertAfter(e.$elem), w(), g(), D(e.options.readonly), e.$elem.hide())
            }, this.readonly = function (t) {
                "boolean" == typeof t && r("readOnly") != t && (D(t), a("readOnly", t), e.$widget.toggleClass("br-readonly"))
            }, this.set = function (t) {
                var i = r("userOptions");
                e.$elem.find('option[value="' + t + '"]').val() && (a("ratingValue", t), a("ratingText", e.$elem.find('option[value="' + t + '"]').text()), a("ratingMade", !0), f(u()), g(d()), w(), i.silent || i.onSelect.call(this, u(), d()))
            }, this.clear = function () {
                var t = r("userOptions");
                a("ratingValue", r("originalRatingValue")), a("ratingText", r("originalRatingText")), a("ratingMade", !1), m(), g(d()), w(), t.onClear.call(this, u(), d())
            }, this.destroy = function () {
                var t = u(), i = d(), s = r("userOptions");
                k(e.$widget.find("a")), e.$widget.remove(), h(), n(), e.$elem.show(), s.onDestroy.call(this, t, i)
            }
        }

        return e.prototype.init = function (e, i) {
            return this.$elem = t(i), this.options = t.extend({}, t.fn.barrating.defaults, e), this.options
        }, e
    }();
    t.fn.barrating = function (i, n) {
        return this.each(function () {
            var s = new e;
            if (t(this).is("select") || t.error("Sorry, this plugin only works with select fields."), s.hasOwnProperty(i)) {
                if (s.init(n, this), "show" === i) return s.show(n);
                if (s.$elem.data("barrating")) return s.$widget = t(this).next(".br-widget"), s[i](n)
            } else {
                if ("object" == typeof i || !i) return n = i, s.init(n, this), s.show();
                t.error("Method " + i + " does not exist on jQuery.barrating")
            }
        })
    }, t.fn.barrating.defaults = {
        theme: "",
        initialRating: null,
        showValues: !1,
        showSelectedRating: !0,
        deselectable: !0,
        reverse: !1,
        readonly: !1,
        fastClicks: !0,
        hoverState: !0,
        silent: !1,
        onSelect: function (t, e, i) {
        },
        onClear: function (t, e) {
        },
        onDestroy: function (t, e) {
        }
    }, t.fn.barrating.BarRating = e
}), !function (t, e, i, n) {
    function s(e, i) {
        this.settings = null, this.options = t.extend({}, s.Defaults, i), this.$element = t(e), this._handlers = {}, this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._widths = [], this._invalidated = {}, this._pipe = [], this._drag = {
            time: null,
            target: null,
            pointer: null,
            stage: {start: null, current: null},
            direction: null
        }, this._states = {
            current: {}, tags: {
                initializing: ["busy"], animating: ["busy"], dragging: ["interacting"]
            }
        }, t.each(["onResize", "onThrottledResize"], t.proxy(function (e, i) {
            this._handlers[i] = t.proxy(this[i], this)
        }, this)), t.each(s.Plugins, t.proxy(function (t, e) {
            this._plugins[t.charAt(0).toLowerCase() + t.slice(1)] = new e(this)
        }, this)), t.each(s.Workers, t.proxy(function (e, i) {
            this._pipe.push({filter: i.filter, run: t.proxy(i.run, this)})
        }, this)), this.setup(), this.initialize()
    }

    s.Defaults = {
        items: 3,
        loop: !1,
        center: !1,
        rewind: !1,
        checkVisibility: !0,
        mouseDrag: !0,
        touchDrag: !0,
        pullDrag: !0,
        freeDrag: !1,
        margin: 0,
        stagePadding: 0,
        merge: !1,
        mergeFit: !0,
        autoWidth: !1,
        startPosition: 0,
        rtl: !1,
        smartSpeed: 250,
        fluidSpeed: !1,
        dragEndSpeed: !1,
        responsive: {},
        responsiveRefreshRate: 200,
        responsiveBaseElement: e,
        fallbackEasing: "swing",
        slideTransition: "",
        info: !1,
        nestedItemSelector: !1,
        itemElement: "div",
        stageElement: "div",
        refreshClass: "owl-refresh",
        loadedClass: "owl-loaded",
        loadingClass: "owl-loading",
        rtlClass: "owl-rtl",
        responsiveClass: "owl-responsive",
        dragClass: "owl-drag",
        itemClass: "owl-item",
        stageClass: "owl-stage",
        stageOuterClass: "owl-stage-outer",
        grabClass: "owl-grab"
    }, s.Width = {Default: "default", Inner: "inner", Outer: "outer"}, s.Type = {
        Event: "event",
        State: "state"
    }, s.Plugins = {}, s.Workers = [{
        filter: ["width", "settings"], run: function () {
            this._width = this.$element.width()
        }
    }, {
        filter: ["width", "items", "settings"], run: function (t) {
            t.current = this._items && this._items[this.relative(this._current)]
        }
    }, {
        filter: ["items", "settings"], run: function () {
            this.$stage.children(".cloned").remove()
        }
    }, {
        filter: ["width", "items", "settings"], run: function (t) {
            var e = this.settings.margin || "", i = !this.settings.autoWidth, n = this.settings.rtl,
                s = {width: "auto", "margin-left": n ? e : "", "margin-right": n ? "" : e};
            !i && this.$stage.children().css(s), t.css = s
        }
    }, {
        filter: ["width", "items", "settings"], run: function (t) {
            var e = (this.width() / this.settings.items).toFixed(3) - this.settings.margin, i = null,
                n = this._items.length, s = !this.settings.autoWidth, o = [];
            for (t.items = {
                merge: !1,
                width: e
            }; n--;) i = this._mergers[n], i = this.settings.mergeFit && Math.min(i, this.settings.items) || i, t.items.merge = i > 1 || t.items.merge, o[n] = s ? e * i : this._items[n].width();
            this._widths = o
        }
    }, {
        filter: ["items", "settings"], run: function () {
            var e = [], i = this._items, n = this.settings, s = Math.max(2 * n.items, 4),
                o = 2 * Math.ceil(i.length / 2), r = n.loop && i.length ? n.rewind ? s : Math.max(s, o) : 0, a = "",
                l = "";
            for (r /= 2; r > 0;) e.push(this.normalize(e.length / 2, !0)), a += i[e[e.length - 1]][0].outerHTML, e.push(this.normalize(i.length - 1 - (e.length - 1) / 2, !0)), l = i[e[e.length - 1]][0].outerHTML + l, r -= 1;
            this._clones = e, t(a).addClass("cloned").appendTo(this.$stage), t(l).addClass("cloned").prependTo(this.$stage)
        }
    }, {
        filter: ["width", "items", "settings"], run: function () {
            for (var t = this.settings.rtl ? 1 : -1, e = this._clones.length + this._items.length, i = -1, n = 0, s = 0, o = []; ++i < e;) n = o[i - 1] || 0, s = this._widths[this.relative(i)] + this.settings.margin, o.push(n + s * t);
            this._coordinates = o
        }
    }, {
        filter: ["width", "items", "settings"], run: function () {
            var t = this.settings.stagePadding, e = this._coordinates, i = {
                width: Math.ceil(Math.abs(e[e.length - 1])) + 2 * t,
                "padding-left": t || "",
                "padding-right": t || ""
            };
            this.$stage.css(i)
        }
    }, {
        filter: ["width", "items", "settings"], run: function (t) {
            var e = this._coordinates.length, i = !this.settings.autoWidth, n = this.$stage.children();
            if (i && t.items.merge) for (; e--;) t.css.width = this._widths[this.relative(e)], n.eq(e).css(t.css); else i && (t.css.width = t.items.width, n.css(t.css))
        }
    }, {
        filter: ["items"], run: function () {
            this._coordinates.length < 1 && this.$stage.removeAttr("style")
        }
    }, {
        filter: ["width", "items", "settings"], run: function (t) {
            t.current = t.current ? this.$stage.children().index(t.current) : 0, t.current = Math.max(this.minimum(), Math.min(this.maximum(), t.current)), this.reset(t.current)
        }
    }, {
        filter: ["position"], run: function () {
            this.animate(this.coordinates(this._current))
        }
    }, {
        filter: ["width", "position", "items", "settings"], run: function () {
            var t, e, i, n, s = this.settings.rtl ? 1 : -1, o = 2 * this.settings.stagePadding,
                r = this.coordinates(this.current()) + o, a = r + this.width() * s, l = [];
            for (i = 0, n = this._coordinates.length; i < n; i++) t = this._coordinates[i - 1] || 0, e = Math.abs(this._coordinates[i]) + o * s, (this.op(t, "<=", r) && this.op(t, ">", a) || this.op(e, "<", r) && this.op(e, ">", a)) && l.push(i);
            this.$stage.children(".active").removeClass("active"), this.$stage.children(":eq(" + l.join("), :eq(") + ")").addClass("active"), this.$stage.children(".center").removeClass("center"), this.settings.center && this.$stage.children().eq(this.current()).addClass("center")
        }
    }], s.prototype.initializeStage = function () {
        this.$stage = this.$element.find("." + this.settings.stageClass), this.$stage.length || (this.$element.addClass(this.options.loadingClass), this.$stage = t("<" + this.settings.stageElement + ">", {"class": this.settings.stageClass}).wrap(t("<div/>", {"class": this.settings.stageOuterClass})), this.$element.append(this.$stage.parent()))
    }, s.prototype.initializeItems = function () {
        var e = this.$element.find(".owl-item");
        return e.length ? (this._items = e.get().map(function (e) {
            return t(e)
        }), this._mergers = this._items.map(function () {
            return 1
        }), void this.refresh()) : (this.replace(this.$element.children().not(this.$stage.parent())), this.isVisible() ? this.refresh() : this.invalidate("width"), this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass), void 0)
    }, s.prototype.initialize = function () {
        if (this.enter("initializing"), this.trigger("initialize"), this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl), this.settings.autoWidth && !this.is("pre-loading")) {
            var t, e, i;
            t = this.$element.find("img"), e = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : n, i = this.$element.children(e).width(), t.length && i <= 0 && this.preloadAutoWidthImages(t)
        }
        this.initializeStage(), this.initializeItems(), this.registerEventHandlers(), this.leave("initializing"), this.trigger("initialized")
    }, s.prototype.isVisible = function () {
        return !this.settings.checkVisibility || this.$element.is(":visible")
    }, s.prototype.setup = function () {
        var e = this.viewport(), i = this.options.responsive, n = -1, s = null;
        i ? (t.each(i, function (t) {
            t <= e && t > n && (n = Number(t))
        }), s = t.extend({}, this.options, i[n]), "function" == typeof s.stagePadding && (s.stagePadding = s.stagePadding()), delete s.responsive, s.responsiveClass && this.$element.attr("class", this.$element.attr("class").replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s", "g"), "$1" + n))) : s = t.extend({}, this.options), this.trigger("change", {
            property: {
                name: "settings",
                value: s
            }
        }), this._breakpoint = n, this.settings = s, this.invalidate("settings"), this.trigger("changed", {
            property: {
                name: "settings",
                value: this.settings
            }
        })
    }, s.prototype.optionsLogic = function () {
        this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1)
    }, s.prototype.prepare = function (e) {
        var i = this.trigger("prepare", {content: e});
        return i.data || (i.data = t("<" + this.settings.itemElement + "/>").addClass(this.options.itemClass).append(e)), this.trigger("prepared", {content: i.data}), i.data
    }, s.prototype.update = function () {
        for (var e = 0, i = this._pipe.length, n = t.proxy(function (t) {
            return this[t]
        }, this._invalidated), s = {}; e < i;) (this._invalidated.all || t.grep(this._pipe[e].filter, n).length > 0) && this._pipe[e].run(s), e++;
        this._invalidated = {}, !this.is("valid") && this.enter("valid")
    }, s.prototype.width = function (t) {
        switch (t = t || s.Width.Default) {
            case s.Width.Inner:
            case s.Width.Outer:
                return this._width;
            default:
                return this._width - 2 * this.settings.stagePadding + this.settings.margin
        }
    }, s.prototype.refresh = function () {
        this.enter("refreshing"), this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$element.addClass(this.options.refreshClass), this.update(), this.$element.removeClass(this.options.refreshClass), this.leave("refreshing"), this.trigger("refreshed")
    }, s.prototype.onThrottledResize = function () {
        e.clearTimeout(this.resizeTimer), this.resizeTimer = e.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate)
    }, s.prototype.onResize = function () {
        return !!this._items.length && this._width !== this.$element.width() && !!this.isVisible() && (this.enter("resizing"), this.trigger("resize").isDefaultPrevented() ? (this.leave("resizing"), !1) : (this.invalidate("width"), this.refresh(), this.leave("resizing"), void this.trigger("resized")))
    }, s.prototype.registerEventHandlers = function () {
        t.support.transition && this.$stage.on(t.support.transition.end + ".owl.core", t.proxy(this.onTransitionEnd, this)), !1 !== this.settings.responsive && this.on(e, "resize", this._handlers.onThrottledResize), this.settings.mouseDrag && (this.$element.addClass(this.options.dragClass), this.$stage.on("mousedown.owl.core", t.proxy(this.onDragStart, this)), this.$stage.on("dragstart.owl.core selectstart.owl.core", function () {
            return !1
        })), this.settings.touchDrag && (this.$stage.on("touchstart.owl.core", t.proxy(this.onDragStart, this)), this.$stage.on("touchcancel.owl.core", t.proxy(this.onDragEnd, this)))
    }, s.prototype.onDragStart = function (e) {
        var n = null;
        3 !== e.which && (t.support.transform ? (n = this.$stage.css("transform").replace(/.*\(|\)| /g, "").split(","), n = {
            x: n[16 === n.length ? 12 : 4],
            y: n[16 === n.length ? 13 : 5]
        }) : (n = this.$stage.position(), n = {
            x: this.settings.rtl ? n.left + this.$stage.width() - this.width() + this.settings.margin : n.left,
            y: n.top
        }), this.is("animating") && (t.support.transform ? this.animate(n.x) : this.$stage.stop(), this.invalidate("position")), this.$element.toggleClass(this.options.grabClass, "mousedown" === e.type), this.speed(0), this._drag.time = (new Date).getTime(), this._drag.target = t(e.target), this._drag.stage.start = n, this._drag.stage.current = n, this._drag.pointer = this.pointer(e), t(i).on("mouseup.owl.core touchend.owl.core", t.proxy(this.onDragEnd, this)), t(i).one("mousemove.owl.core touchmove.owl.core", t.proxy(function (e) {
            var n = this.difference(this._drag.pointer, this.pointer(e));
            t(i).on("mousemove.owl.core touchmove.owl.core", t.proxy(this.onDragMove, this)), Math.abs(n.x) < Math.abs(n.y) && this.is("valid") || (e.preventDefault(), this.enter("dragging"), this.trigger("drag"))
        }, this)))
    }, s.prototype.onDragMove = function (t) {
        var e = null, i = null, n = null, s = this.difference(this._drag.pointer, this.pointer(t)),
            o = this.difference(this._drag.stage.start, s);
        this.is("dragging") && (t.preventDefault(), this.settings.loop ? (e = this.coordinates(this.minimum()), i = this.coordinates(this.maximum() + 1) - e, o.x = ((o.x - e) % i + i) % i + e) : (e = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum()), i = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum()), n = this.settings.pullDrag ? -1 * s.x / 5 : 0, o.x = Math.max(Math.min(o.x, e + n), i + n)), this._drag.stage.current = o, this.animate(o.x))
    }, s.prototype.onDragEnd = function (e) {
        var n = this.difference(this._drag.pointer, this.pointer(e)), s = this._drag.stage.current,
            o = n.x > 0 ^ this.settings.rtl ? "left" : "right";
        t(i).off(".owl.core"), this.$element.removeClass(this.options.grabClass), (0 !== n.x && this.is("dragging") || !this.is("valid")) && (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(this.closest(s.x, 0 !== n.x ? o : this._drag.direction)), this.invalidate("position"), this.update(), this._drag.direction = o, (Math.abs(n.x) > 3 || (new Date).getTime() - this._drag.time > 300) && this._drag.target.one("click.owl.core", function () {
            return !1
        })), this.is("dragging") && (this.leave("dragging"), this.trigger("dragged"))
    }, s.prototype.closest = function (e, i) {
        var s = -1, o = 30, r = this.width(), a = this.coordinates();
        return this.settings.freeDrag || t.each(a, t.proxy(function (t, l) {
            return "left" === i && e > l - o && e < l + o ? s = t : "right" === i && e > l - r - o && e < l - r + o ? s = t + 1 : this.op(e, "<", l) && this.op(e, ">", a[t + 1] !== n ? a[t + 1] : l - r) && (s = "left" === i ? t + 1 : t), -1 === s
        }, this)), this.settings.loop || (this.op(e, ">", a[this.minimum()]) ? s = e = this.minimum() : this.op(e, "<", a[this.maximum()]) && (s = e = this.maximum())), s
    }, s.prototype.animate = function (e) {
        var i = this.speed() > 0;
        this.is("animating") && this.onTransitionEnd(), i && (this.enter("animating"), this.trigger("translate")), t.support.transform3d && t.support.transition ? this.$stage.css({
            transform: "translate3d(" + e + "px,0px,0px)",
            transition: this.speed() / 1e3 + "s" + (this.settings.slideTransition ? " " + this.settings.slideTransition : "")
        }) : i ? this.$stage.animate({left: e + "px"}, this.speed(), this.settings.fallbackEasing, t.proxy(this.onTransitionEnd, this)) : this.$stage.css({left: e + "px"})
    }, s.prototype.is = function (t) {
        return this._states.current[t] && this._states.current[t] > 0
    }, s.prototype.current = function (t) {
        if (t === n) return this._current;
        if (0 === this._items.length) return n;
        if (t = this.normalize(t), this._current !== t) {
            var e = this.trigger("change", {property: {name: "position", value: t}});
            e.data !== n && (t = this.normalize(e.data)), this._current = t, this.invalidate("position"), this.trigger("changed", {
                property: {
                    name: "position",
                    value: this._current
                }
            })
        }
        return this._current
    }, s.prototype.invalidate = function (e) {
        return "string" === t.type(e) && (this._invalidated[e] = !0, this.is("valid") && this.leave("valid")), t.map(this._invalidated, function (t, e) {
            return e
        })
    }, s.prototype.reset = function (t) {
        (t = this.normalize(t)) !== n && (this._speed = 0, this._current = t, this.suppress(["translate", "translated"]), this.animate(this.coordinates(t)), this.release(["translate", "translated"]))
    }, s.prototype.normalize = function (t, e) {
        var i = this._items.length, s = e ? 0 : this._clones.length;
        return !this.isNumeric(t) || i < 1 ? t = n : (t < 0 || t >= i + s) && (t = ((t - s / 2) % i + i) % i + s / 2), t
    }, s.prototype.relative = function (t) {
        return t -= this._clones.length / 2, this.normalize(t, !0)
    }, s.prototype.maximum = function (t) {
        var e, i, n, s = this.settings, o = this._coordinates.length;
        if (s.loop) o = this._clones.length / 2 + this._items.length - 1; else if (s.autoWidth || s.merge) {
            if (e = this._items.length) for (i = this._items[--e].width(), n = this.$element.width(); e-- && !((i += this._items[e].width() + this.settings.margin) > n);) ;
            o = e + 1
        } else o = s.center ? this._items.length - 1 : this._items.length - s.items;
        return t && (o -= this._clones.length / 2), Math.max(o, 0)
    }, s.prototype.minimum = function (t) {
        return t ? 0 : this._clones.length / 2
    }, s.prototype.items = function (t) {
        return t === n ? this._items.slice() : (t = this.normalize(t, !0), this._items[t])
    }, s.prototype.mergers = function (t) {
        return t === n ? this._mergers.slice() : (t = this.normalize(t, !0), this._mergers[t])
    }, s.prototype.clones = function (e) {
        var i = this._clones.length / 2, s = i + this._items.length, o = function (t) {
            return t % 2 == 0 ? s + t / 2 : i - (t + 1) / 2
        };
        return e === n ? t.map(this._clones, function (t, e) {
            return o(e)
        }) : t.map(this._clones, function (t, i) {
            return t === e ? o(i) : null
        })
    }, s.prototype.speed = function (t) {
        return t !== n && (this._speed = t), this._speed
    }, s.prototype.coordinates = function (e) {
        var i, s = 1, o = e - 1;
        return e === n ? t.map(this._coordinates, t.proxy(function (t, e) {
            return this.coordinates(e)
        }, this)) : (this.settings.center ? (this.settings.rtl && (s = -1, o = e + 1), i = this._coordinates[e], i += (this.width() - i + (this._coordinates[o] || 0)) / 2 * s) : i = this._coordinates[o] || 0, i = Math.ceil(i))
    }, s.prototype.duration = function (t, e, i) {
        return 0 === i ? 0 : Math.min(Math.max(Math.abs(e - t), 1), 6) * Math.abs(i || this.settings.smartSpeed)
    }, s.prototype.to = function (t, e) {
        var i = this.current(), n = null, s = t - this.relative(i), o = (s > 0) - (s < 0), r = this._items.length,
            a = this.minimum(), l = this.maximum();
        this.settings.loop ? (!this.settings.rewind && Math.abs(s) > r / 2 && (s += -1 * o * r), t = i + s, (n = ((t - a) % r + r) % r + a) !== t && n - s <= l && n - s > 0 && (i = n - s, t = n, this.reset(i))) : this.settings.rewind ? (l += 1, t = (t % l + l) % l) : t = Math.max(a, Math.min(l, t)), this.speed(this.duration(i, t, e)), this.current(t), this.isVisible() && this.update()
    }, s.prototype.next = function (t) {
        t = t || !1, this.to(this.relative(this.current()) + 1, t)
    }, s.prototype.prev = function (t) {
        t = t || !1, this.to(this.relative(this.current()) - 1, t)
    }, s.prototype.onTransitionEnd = function (t) {
        return (t === n || (t.stopPropagation(), (t.target || t.srcElement || t.originalTarget) === this.$stage.get(0))) && (this.leave("animating"), void this.trigger("translated"))
    }, s.prototype.viewport = function () {
        var n;
        return this.options.responsiveBaseElement !== e ? n = t(this.options.responsiveBaseElement).width() : e.innerWidth ? n = e.innerWidth : i.documentElement && i.documentElement.clientWidth ? n = i.documentElement.clientWidth : console.warn("Can not detect viewport width."), n
    }, s.prototype.replace = function (e) {
        this.$stage.empty(), this._items = [], e && (e = e instanceof jQuery ? e : t(e)), this.settings.nestedItemSelector && (e = e.find("." + this.settings.nestedItemSelector)), e.filter(function () {
            return 1 === this.nodeType
        }).each(t.proxy(function (t, e) {
            e = this.prepare(e), this.$stage.append(e), this._items.push(e), this._mergers.push(1 * e.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)
        }, this)), this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items")
    }, s.prototype.add = function (e, i) {
        var s = this.relative(this._current);
        i = i === n ? this._items.length : this.normalize(i, !0), e = e instanceof jQuery ? e : t(e), this.trigger("add", {
            content: e,
            position: i
        }), e = this.prepare(e), 0 === this._items.length || i === this._items.length ? (0 === this._items.length && this.$stage.append(e), 0 !== this._items.length && this._items[i - 1].after(e), this._items.push(e), this._mergers.push(1 * e.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)) : (this._items[i].before(e), this._items.splice(i, 0, e), this._mergers.splice(i, 0, 1 * e.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)), this._items[s] && this.reset(this._items[s].index()), this.invalidate("items"), this.trigger("added", {
            content: e,
            position: i
        })
    }, s.prototype.remove = function (t) {
        (t = this.normalize(t, !0)) !== n && (this.trigger("remove", {
            content: this._items[t],
            position: t
        }), this._items[t].remove(), this._items.splice(t, 1), this._mergers.splice(t, 1), this.invalidate("items"), this.trigger("removed", {
            content: null,
            position: t
        }))
    }, s.prototype.preloadAutoWidthImages = function (e) {
        e.each(t.proxy(function (e, i) {
            this.enter("pre-loading"), i = t(i), t(new Image).one("load", t.proxy(function (t) {
                i.attr("src", t.target.src), i.css("opacity", 1), this.leave("pre-loading"), !this.is("pre-loading") && !this.is("initializing") && this.refresh()
            }, this)).attr("src", i.attr("src") || i.attr("data-src") || i.attr("data-src-retina"))
        }, this))
    }, s.prototype.destroy = function () {
        this.$element.off(".owl.core"), this.$stage.off(".owl.core"), t(i).off(".owl.core"), !1 !== this.settings.responsive && (e.clearTimeout(this.resizeTimer), this.off(e, "resize", this._handlers.onThrottledResize));
        for (var n in this._plugins) this._plugins[n].destroy();
        this.$stage.children(".cloned").remove(), this.$stage.unwrap(), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$stage.remove(), this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class", this.$element.attr("class").replace(new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"), "")).removeData("owl.carousel")
    }, s.prototype.op = function (t, e, i) {
        var n = this.settings.rtl;
        switch (e) {
            case"<":
                return n ? t > i : t < i;
            case">":
                return n ? t < i : t > i;
            case">=":
                return n ? t <= i : t >= i;
            case"<=":
                return n ? t >= i : t <= i
        }
    }, s.prototype.on = function (t, e, i, n) {
        t.addEventListener ? t.addEventListener(e, i, n) : t.attachEvent && t.attachEvent("on" + e, i)
    }, s.prototype.off = function (t, e, i, n) {
        t.removeEventListener ? t.removeEventListener(e, i, n) : t.detachEvent && t.detachEvent("on" + e, i)
    }, s.prototype.trigger = function (e, i, n, o, r) {
        var a = {item: {count: this._items.length, index: this.current()}},
            l = t.camelCase(t.grep(["on", e, n], function (t) {
                return t
            }).join("-").toLowerCase()),
            h = t.Event([e, "owl", n || "carousel"].join(".").toLowerCase(), t.extend({relatedTarget: this}, a, i));
        return this._supress[e] || (t.each(this._plugins, function (t, e) {
            e.onTrigger && e.onTrigger(h)
        }), this.register({
            type: s.Type.Event,
            name: e
        }), this.$element.trigger(h), this.settings && "function" == typeof this.settings[l] && this.settings[l].call(this, h)), h
    }, s.prototype.enter = function (e) {
        t.each([e].concat(this._states.tags[e] || []), t.proxy(function (t, e) {
            this._states.current[e] === n && (this._states.current[e] = 0), this._states.current[e]++
        }, this))
    }, s.prototype.leave = function (e) {
        t.each([e].concat(this._states.tags[e] || []), t.proxy(function (t, e) {
            this._states.current[e]--
        }, this))
    }, s.prototype.register = function (e) {
        if (e.type === s.Type.Event) {
            if (t.event.special[e.name] || (t.event.special[e.name] = {}), !t.event.special[e.name].owl) {
                var i = t.event.special[e.name]._default;
                t.event.special[e.name]._default = function (t) {
                    return !i || !i.apply || t.namespace && -1 !== t.namespace.indexOf("owl") ? t.namespace && t.namespace.indexOf("owl") > -1 : i.apply(this, arguments)
                }, t.event.special[e.name].owl = !0
            }
        } else e.type === s.Type.State && (this._states.tags[e.name] ? this._states.tags[e.name] = this._states.tags[e.name].concat(e.tags) : this._states.tags[e.name] = e.tags, this._states.tags[e.name] = t.grep(this._states.tags[e.name], t.proxy(function (i, n) {
            return t.inArray(i, this._states.tags[e.name]) === n
        }, this)))
    }, s.prototype.suppress = function (e) {
        t.each(e, t.proxy(function (t, e) {
            this._supress[e] = !0
        }, this))
    }, s.prototype.release = function (e) {
        t.each(e, t.proxy(function (t, e) {
            delete this._supress[e]
        }, this))
    }, s.prototype.pointer = function (t) {
        var i = {x: null, y: null};
        return t = t.originalEvent || t || e.event, t = t.touches && t.touches.length ? t.touches[0] : t.changedTouches && t.changedTouches.length ? t.changedTouches[0] : t, t.pageX ? (i.x = t.pageX, i.y = t.pageY) : (i.x = t.clientX, i.y = t.clientY), i
    }, s.prototype.isNumeric = function (t) {
        return !isNaN(parseFloat(t))
    }, s.prototype.difference = function (t, e) {
        return {x: t.x - e.x, y: t.y - e.y}
    }, t.fn.owlCarousel = function (e) {
        var i = Array.prototype.slice.call(arguments, 1);
        return this.each(function () {
            var n = t(this), o = n.data("owl.carousel");
            o || (o = new s(this, "object" == typeof e && e), n.data("owl.carousel", o), t.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"], function (e, i) {
                o.register({
                    type: s.Type.Event,
                    name: i
                }), o.$element.on(i + ".owl.carousel.core", t.proxy(function (t) {
                    t.namespace && t.relatedTarget !== this && (this.suppress([i]), o[i].apply(this, [].slice.call(arguments, 1)), this.release([i]))
                }, o))
            })), "string" == typeof e && "_" !== e.charAt(0) && o[e].apply(o, i)
        })
    }, t.fn.owlCarousel.Constructor = s
}(window.Zepto || window.jQuery, window, document), function (t, e, i, n) {
    var s = function (e) {
        this._core = e, this._interval = null, this._visible = null, this._handlers = {
            "initialized.owl.carousel": t.proxy(function (t) {
                t.namespace && this._core.settings.autoRefresh && this.watch()
            }, this)
        }, this._core.options = t.extend({}, s.Defaults, this._core.options), this._core.$element.on(this._handlers)
    };
    s.Defaults = {autoRefresh: !0, autoRefreshInterval: 500}, s.prototype.watch = function () {
        this._interval || (this._visible = this._core.isVisible(), this._interval = e.setInterval(t.proxy(this.refresh, this), this._core.settings.autoRefreshInterval))
    }, s.prototype.refresh = function () {
        this._core.isVisible() !== this._visible && (this._visible = !this._visible, this._core.$element.toggleClass("owl-hidden", !this._visible), this._visible && this._core.invalidate("width") && this._core.refresh())
    }, s.prototype.destroy = function () {
        var t, i;
        e.clearInterval(this._interval);
        for (t in this._handlers) this._core.$element.off(t, this._handlers[t]);
        for (i in Object.getOwnPropertyNames(this)) "function" != typeof this[i] && (this[i] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.AutoRefresh = s
}(window.Zepto || window.jQuery, window, document), function (t, e, i, n) {
    var s = function (e) {
        this._core = e, this._loaded = [], this._handlers = {
            "initialized.owl.carousel change.owl.carousel resized.owl.carousel": t.proxy(function (e) {
                if (e.namespace && this._core.settings && this._core.settings.lazyLoad && (e.property && "position" == e.property.name || "initialized" == e.type)) {
                    var i = this._core.settings, s = i.center && Math.ceil(i.items / 2) || i.items,
                        o = i.center && -1 * s || 0,
                        r = (e.property && e.property.value !== n ? e.property.value : this._core.current()) + o,
                        a = this._core.clones().length, l = t.proxy(function (t, e) {
                            this.load(e)
                        }, this);
                    for (i.lazyLoadEager > 0 && (s += i.lazyLoadEager, i.loop && (r -= i.lazyLoadEager, s++)); o++ < s;) this.load(a / 2 + this._core.relative(r)), a && t.each(this._core.clones(this._core.relative(r)), l), r++
                }
            }, this)
        }, this._core.options = t.extend({}, s.Defaults, this._core.options), this._core.$element.on(this._handlers)
    };
    s.Defaults = {lazyLoad: !1, lazyLoadEager: 0}, s.prototype.load = function (i) {
        var n = this._core.$stage.children().eq(i), s = n && n.find(".owl-lazy");
        !s || t.inArray(n.get(0), this._loaded) > -1 || (s.each(t.proxy(function (i, n) {
            var s, o = t(n),
                r = e.devicePixelRatio > 1 && o.attr("data-src-retina") || o.attr("data-src") || o.attr("data-srcset");
            this._core.trigger("load", {
                element: o,
                url: r
            }, "lazy"), o.is("img") ? o.one("load.owl.lazy", t.proxy(function () {
                o.css("opacity", 1), this._core.trigger("loaded", {element: o, url: r}, "lazy")
            }, this)).attr("src", r) : o.is("source") ? o.one("load.owl.lazy", t.proxy(function () {
                this._core.trigger("loaded", {element: o, url: r}, "lazy")
            }, this)).attr("srcset", r) : (s = new Image, s.onload = t.proxy(function () {
                o.css({"background-image": 'url("' + r + '")', opacity: "1"}), this._core.trigger("loaded", {
                    element: o,
                    url: r
                }, "lazy")
            }, this), s.src = r)
        }, this)), this._loaded.push(n.get(0)))
    }, s.prototype.destroy = function () {
        var t, e;
        for (t in this.handlers) this._core.$element.off(t, this.handlers[t]);
        for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.Lazy = s
}(window.Zepto || window.jQuery, window, document), function (t, e, i, n) {
    var s = function (i) {
        this._core = i, this._previousHeight = null, this._handlers = {
            "initialized.owl.carousel refreshed.owl.carousel": t.proxy(function (t) {
                t.namespace && this._core.settings.autoHeight && this.update()
            }, this), "changed.owl.carousel": t.proxy(function (t) {
                t.namespace && this._core.settings.autoHeight && "position" === t.property.name && this.update()
            }, this), "loaded.owl.lazy": t.proxy(function (t) {
                t.namespace && this._core.settings.autoHeight && t.element.closest("." + this._core.settings.itemClass).index() === this._core.current() && this.update()
            }, this)
        }, this._core.options = t.extend({}, s.Defaults, this._core.options), this._core.$element.on(this._handlers), this._intervalId = null;
        var n = this;
        t(e).on("load", function () {
            n._core.settings.autoHeight && n.update()
        }), t(e).resize(function () {
            n._core.settings.autoHeight && (null != n._intervalId && clearTimeout(n._intervalId), n._intervalId = setTimeout(function () {
                n.update()
            }, 250))
        })
    };
    s.Defaults = {autoHeight: !1, autoHeightClass: "owl-height"}, s.prototype.update = function () {
        var e = this._core._current, i = e + this._core.settings.items, n = this._core.settings.lazyLoad,
            s = this._core.$stage.children().toArray().slice(e, i), o = [], r = 0;
        t.each(s, function (e, i) {
            o.push(t(i).height())
        }), r = Math.max.apply(null, o), r <= 1 && n && this._previousHeight && (r = this._previousHeight), this._previousHeight = r, this._core.$stage.parent().height(r).addClass(this._core.settings.autoHeightClass)
    }, s.prototype.destroy = function () {
        var t, e;
        for (t in this._handlers) this._core.$element.off(t, this._handlers[t]);
        for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.AutoHeight = s
}(window.Zepto || window.jQuery, window, document), function (t, e, i, n) {
    var s = function (e) {
        this._core = e, this._videos = {}, this._playing = null, this._handlers = {
            "initialized.owl.carousel": t.proxy(function (t) {
                t.namespace && this._core.register({type: "state", name: "playing", tags: ["interacting"]})
            }, this), "resize.owl.carousel": t.proxy(function (t) {
                t.namespace && this._core.settings.video && this.isInFullScreen() && t.preventDefault()
            }, this), "refreshed.owl.carousel": t.proxy(function (t) {
                t.namespace && this._core.is("resizing") && this._core.$stage.find(".cloned .owl-video-frame").remove()
            }, this), "changed.owl.carousel": t.proxy(function (t) {
                t.namespace && "position" === t.property.name && this._playing && this.stop()
            }, this), "prepared.owl.carousel": t.proxy(function (e) {
                if (e.namespace) {
                    var i = t(e.content).find(".owl-video");
                    i.length && (i.css("display", "none"), this.fetch(i, t(e.content)))
                }
            }, this)
        }, this._core.options = t.extend({}, s.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", t.proxy(function (t) {
            this.play(t)
        }, this))
    };
    s.Defaults = {video: !1, videoHeight: !1, videoWidth: !1}, s.prototype.fetch = function (t, e) {
        var i = function () {
                return t.attr("data-vimeo-id") ? "vimeo" : t.attr("data-vzaar-id") ? "vzaar" : "youtube"
            }(), n = t.attr("data-vimeo-id") || t.attr("data-youtube-id") || t.attr("data-vzaar-id"),
            s = t.attr("data-width") || this._core.settings.videoWidth,
            o = t.attr("data-height") || this._core.settings.videoHeight, r = t.attr("href");
        if (!r) throw new Error("Missing video URL.");
        if (n = r.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com|be\-nocookie\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/), n[3].indexOf("youtu") > -1) i = "youtube"; else if (n[3].indexOf("vimeo") > -1) i = "vimeo"; else {
            if (!(n[3].indexOf("vzaar") > -1)) throw new Error("Video URL not supported.");
            i = "vzaar"
        }
        n = n[6], this._videos[r] = {
            type: i,
            id: n,
            width: s,
            height: o
        }, e.attr("data-video", r), this.thumbnail(t, this._videos[r])
    }, s.prototype.thumbnail = function (e, i) {
        var n, s, o, r = i.width && i.height ? "width:" + i.width + "px;height:" + i.height + "px;" : "",
            a = e.find("img"), l = "src", h = "", d = this._core.settings, u = function (i) {
                s = '<div class="owl-video-play-icon"></div>', n = d.lazyLoad ? t("<div/>", {
                    "class": "owl-video-tn " + h,
                    srcType: i
                }) : t("<div/>", {
                    "class": "owl-video-tn",
                    style: "opacity:1;background-image:url(" + i + ")"
                }), e.after(n), e.after(s)
            };
        return e.wrap(t("<div/>", {
            "class": "owl-video-wrapper",
            style: r
        })), this._core.settings.lazyLoad && (l = "data-src", h = "owl-lazy"), a.length ? (u(a.attr(l)), a.remove(), !1) : void ("youtube" === i.type ? (o = "//img.youtube.com/vi/" + i.id + "/hqdefault.jpg", u(o)) : "vimeo" === i.type ? t.ajax({
            type: "GET",
            url: "//vimeo.com/api/v2/video/" + i.id + ".json",
            jsonp: "callback",
            dataType: "jsonp",
            success: function (t) {
                o = t[0].thumbnail_large, u(o)
            }
        }) : "vzaar" === i.type && t.ajax({
            type: "GET",
            url: "//vzaar.com/api/videos/" + i.id + ".json",
            jsonp: "callback",
            dataType: "jsonp",
            success: function (t) {
                o = t.framegrab_url, u(o)
            }
        }))
    }, s.prototype.stop = function () {
        this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null, this._core.leave("playing"), this._core.trigger("stopped", null, "video")
    }, s.prototype.play = function (e) {
        var i, n = t(e.target), s = n.closest("." + this._core.settings.itemClass),
            o = this._videos[s.attr("data-video")], r = o.width || "100%", a = o.height || this._core.$stage.height();
        this._playing || (this._core.enter("playing"), this._core.trigger("play", null, "video"), s = this._core.items(this._core.relative(s.index())), this._core.reset(s.index()), i = t('<iframe frameborder="0" allowfullscreen mozallowfullscreen webkitAllowFullScreen ></iframe>'), i.attr("height", a), i.attr("width", r), "youtube" === o.type ? i.attr("src", "//www.youtube.com/embed/" + o.id + "?autoplay=1&rel=0&v=" + o.id) : "vimeo" === o.type ? i.attr("src", "//player.vimeo.com/video/" + o.id + "?autoplay=1") : "vzaar" === o.type && i.attr("src", "//view.vzaar.com/" + o.id + "/player?autoplay=true"), t(i).wrap('<div class="owl-video-frame" />').insertAfter(s.find(".owl-video")), this._playing = s.addClass("owl-video-playing"))
    }, s.prototype.isInFullScreen = function () {
        var e = i.fullscreenElement || i.mozFullScreenElement || i.webkitFullscreenElement;
        return e && t(e).parent().hasClass("owl-video-frame")
    }, s.prototype.destroy = function () {
        var t, e;
        this._core.$element.off("click.owl.video");
        for (t in this._handlers) this._core.$element.off(t, this._handlers[t]);
        for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.Video = s
}(window.Zepto || window.jQuery, window, document), function (t, e, i, n) {
    var s = function (e) {
        this.core = e, this.core.options = t.extend({}, s.Defaults, this.core.options), this.swapping = !0, this.previous = n, this.next = n, this.handlers = {
            "change.owl.carousel": t.proxy(function (t) {
                t.namespace && "position" == t.property.name && (this.previous = this.core.current(), this.next = t.property.value)
            }, this), "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": t.proxy(function (t) {
                t.namespace && (this.swapping = "translated" == t.type)
            }, this), "translate.owl.carousel": t.proxy(function (t) {
                t.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap()
            }, this)
        }, this.core.$element.on(this.handlers)
    };
    s.Defaults = {animateOut: !1, animateIn: !1}, s.prototype.swap = function () {
        if (1 === this.core.settings.items && t.support.animation && t.support.transition) {
            this.core.speed(0);
            var e, i = t.proxy(this.clear, this), n = this.core.$stage.children().eq(this.previous),
                s = this.core.$stage.children().eq(this.next), o = this.core.settings.animateIn,
                r = this.core.settings.animateOut;
            this.core.current() !== this.previous && (r && (e = this.core.coordinates(this.previous) - this.core.coordinates(this.next), n.one(t.support.animation.end, i).css({left: e + "px"}).addClass("animated owl-animated-out").addClass(r)),
            o && s.one(t.support.animation.end, i).addClass("animated owl-animated-in").addClass(o))
        }
    }, s.prototype.clear = function (e) {
        t(e.target).css({left: ""}).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.onTransitionEnd()
    }, s.prototype.destroy = function () {
        var t, e;
        for (t in this.handlers) this.core.$element.off(t, this.handlers[t]);
        for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.Animate = s
}(window.Zepto || window.jQuery, window, document), function (t, e, i, n) {
    var s = function (e) {
        this._core = e, this._call = null, this._time = 0, this._timeout = 0, this._paused = !0, this._handlers = {
            "changed.owl.carousel": t.proxy(function (t) {
                t.namespace && "settings" === t.property.name ? this._core.settings.autoplay ? this.play() : this.stop() : t.namespace && "position" === t.property.name && this._paused && (this._time = 0)
            }, this), "initialized.owl.carousel": t.proxy(function (t) {
                t.namespace && this._core.settings.autoplay && this.play()
            }, this), "play.owl.autoplay": t.proxy(function (t, e, i) {
                t.namespace && this.play(e, i)
            }, this), "stop.owl.autoplay": t.proxy(function (t) {
                t.namespace && this.stop()
            }, this), "mouseover.owl.autoplay": t.proxy(function () {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
            }, this), "mouseleave.owl.autoplay": t.proxy(function () {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play()
            }, this), "touchstart.owl.core": t.proxy(function () {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
            }, this), "touchend.owl.core": t.proxy(function () {
                this._core.settings.autoplayHoverPause && this.play()
            }, this)
        }, this._core.$element.on(this._handlers), this._core.options = t.extend({}, s.Defaults, this._core.options)
    };
    s.Defaults = {
        autoplay: !1,
        autoplayTimeout: 5e3,
        autoplayHoverPause: !1,
        autoplaySpeed: !1
    }, s.prototype._next = function (n) {
        this._call = e.setTimeout(t.proxy(this._next, this, n), this._timeout * (Math.round(this.read() / this._timeout) + 1) - this.read()), this._core.is("interacting") || i.hidden || this._core.next(n || this._core.settings.autoplaySpeed)
    }, s.prototype.read = function () {
        return (new Date).getTime() - this._time
    }, s.prototype.play = function (i, n) {
        var s;
        this._core.is("rotating") || this._core.enter("rotating"), i = i || this._core.settings.autoplayTimeout, s = Math.min(this._time % (this._timeout || i), i), this._paused ? (this._time = this.read(), this._paused = !1) : e.clearTimeout(this._call), this._time += this.read() % i - s, this._timeout = i, this._call = e.setTimeout(t.proxy(this._next, this, n), i - s)
    }, s.prototype.stop = function () {
        this._core.is("rotating") && (this._time = 0, this._paused = !0, e.clearTimeout(this._call), this._core.leave("rotating"))
    }, s.prototype.pause = function () {
        this._core.is("rotating") && !this._paused && (this._time = this.read(), this._paused = !0, e.clearTimeout(this._call))
    }, s.prototype.destroy = function () {
        var t, e;
        this.stop();
        for (t in this._handlers) this._core.$element.off(t, this._handlers[t]);
        for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.autoplay = s
}(window.Zepto || window.jQuery, window, document), function (t, e, i, n) {
    "use strict";
    var s = function (e) {
        this._core = e, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = {
            next: this._core.next,
            prev: this._core.prev,
            to: this._core.to
        }, this._handlers = {
            "prepared.owl.carousel": t.proxy(function (e) {
                e.namespace && this._core.settings.dotsData && this._templates.push('<div class="' + this._core.settings.dotClass + '">' + t(e.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot") + "</div>")
            }, this), "added.owl.carousel": t.proxy(function (t) {
                t.namespace && this._core.settings.dotsData && this._templates.splice(t.position, 0, this._templates.pop())
            }, this), "remove.owl.carousel": t.proxy(function (t) {
                t.namespace && this._core.settings.dotsData && this._templates.splice(t.position, 1)
            }, this), "changed.owl.carousel": t.proxy(function (t) {
                t.namespace && "position" == t.property.name && this.draw()
            }, this), "initialized.owl.carousel": t.proxy(function (t) {
                t.namespace && !this._initialized && (this._core.trigger("initialize", null, "navigation"), this.initialize(), this.update(), this.draw(), this._initialized = !0, this._core.trigger("initialized", null, "navigation"))
            }, this), "refreshed.owl.carousel": t.proxy(function (t) {
                t.namespace && this._initialized && (this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation"))
            }, this)
        }, this._core.options = t.extend({}, s.Defaults, this._core.options), this.$element.on(this._handlers)
    };
    s.Defaults = {
        nav: !1,
        navText: ['<span aria-label="Previous">&#x2039;</span>', '<span aria-label="Next">&#x203a;</span>'],
        navSpeed: !1,
        navElement: 'button type="button" role="presentation"',
        navContainer: !1,
        navContainerClass: "owl-nav",
        navClass: ["owl-prev", "owl-next"],
        slideBy: 1,
        dotClass: "owl-dot",
        dotsClass: "owl-dots",
        dots: !0,
        dotsEach: !1,
        dotsData: !1,
        dotsSpeed: !1,
        dotsContainer: !1
    }, s.prototype.initialize = function () {
        var e, i = this._core.settings;
        this._controls.$relative = (i.navContainer ? t(i.navContainer) : t("<div>").addClass(i.navContainerClass).appendTo(this.$element)).addClass("disabled"), this._controls.$previous = t("<" + i.navElement + ">").addClass(i.navClass[0]).html(i.navText[0]).prependTo(this._controls.$relative).on("click", t.proxy(function (t) {
            this.prev(i.navSpeed)
        }, this)), this._controls.$next = t("<" + i.navElement + ">").addClass(i.navClass[1]).html(i.navText[1]).appendTo(this._controls.$relative).on("click", t.proxy(function (t) {
            this.next(i.navSpeed)
        }, this)), i.dotsData || (this._templates = [t('<button role="button">').addClass(i.dotClass).append(t("<span>")).prop("outerHTML")]), this._controls.$absolute = (i.dotsContainer ? t(i.dotsContainer) : t("<div>").addClass(i.dotsClass).appendTo(this.$element)).addClass("disabled"), this._controls.$absolute.on("click", "button", t.proxy(function (e) {
            var n = t(e.target).parent().is(this._controls.$absolute) ? t(e.target).index() : t(e.target).parent().index();
            e.preventDefault(), this.to(n, i.dotsSpeed)
        }, this));
        for (e in this._overrides) this._core[e] = t.proxy(this[e], this)
    }, s.prototype.destroy = function () {
        var t, e, i, n, s;
        s = this._core.settings;
        for (t in this._handlers) this.$element.off(t, this._handlers[t]);
        for (e in this._controls) "$relative" === e && s.navContainer ? this._controls[e].html("") : this._controls[e].remove();
        for (n in this.overides) this._core[n] = this._overrides[n];
        for (i in Object.getOwnPropertyNames(this)) "function" != typeof this[i] && (this[i] = null)
    }, s.prototype.update = function () {
        var t, e, i, n = this._core.clones().length / 2, s = n + this._core.items().length, o = this._core.maximum(!0),
            r = this._core.settings, a = r.center || r.autoWidth || r.dotsData ? 1 : r.dotsEach || r.items;
        if ("page" !== r.slideBy && (r.slideBy = Math.min(r.slideBy, r.items)), r.dots || "page" == r.slideBy) for (this._pages = [], t = n, e = 0, i = 0; t < s; t++) {
            if (e >= a || 0 === e) {
                if (this._pages.push({start: Math.min(o, t - n), end: t - n + a - 1}), Math.min(o, t - n) === o) break;
                e = 0, ++i
            }
            e += this._core.mergers(this._core.relative(t))
        }
    }, s.prototype.draw = function () {
        var e, i = this._core.settings, n = this._core.items().length <= i.items,
            s = this._core.relative(this._core.current()), o = i.loop || i.rewind;
        this._controls.$relative.toggleClass("disabled", !i.nav || n), i.nav && (this._controls.$previous.toggleClass("disabled", !o && s <= this._core.minimum(!0)), this._controls.$next.toggleClass("disabled", !o && s >= this._core.maximum(!0))), this._controls.$absolute.toggleClass("disabled", !i.dots || n), i.dots && (e = this._pages.length - this._controls.$absolute.children().length, i.dotsData && 0 !== e ? this._controls.$absolute.html(this._templates.join("")) : e > 0 ? this._controls.$absolute.append(new Array(e + 1).join(this._templates[0])) : e < 0 && this._controls.$absolute.children().slice(e).remove(), this._controls.$absolute.find(".active").removeClass("active"), this._controls.$absolute.children().eq(t.inArray(this.current(), this._pages)).addClass("active"))
    }, s.prototype.onTrigger = function (e) {
        var i = this._core.settings;
        e.page = {
            index: t.inArray(this.current(), this._pages),
            count: this._pages.length,
            size: i && (i.center || i.autoWidth || i.dotsData ? 1 : i.dotsEach || i.items)
        }
    }, s.prototype.current = function () {
        var e = this._core.relative(this._core.current());
        return t.grep(this._pages, t.proxy(function (t, i) {
            return t.start <= e && t.end >= e
        }, this)).pop()
    }, s.prototype.getPosition = function (e) {
        var i, n, s = this._core.settings;
        return "page" == s.slideBy ? (i = t.inArray(this.current(), this._pages), n = this._pages.length, e ? ++i : --i, i = this._pages[(i % n + n) % n].start) : (i = this._core.relative(this._core.current()), n = this._core.items().length, e ? i += s.slideBy : i -= s.slideBy), i
    }, s.prototype.next = function (e) {
        t.proxy(this._overrides.to, this._core)(this.getPosition(!0), e)
    }, s.prototype.prev = function (e) {
        t.proxy(this._overrides.to, this._core)(this.getPosition(!1), e)
    }, s.prototype.to = function (e, i, n) {
        var s;
        !n && this._pages.length ? (s = this._pages.length, t.proxy(this._overrides.to, this._core)(this._pages[(e % s + s) % s].start, i)) : t.proxy(this._overrides.to, this._core)(e, i)
    }, t.fn.owlCarousel.Constructor.Plugins.Navigation = s
}(window.Zepto || window.jQuery, window, document), function (t, e, i, n) {
    "use strict";
    var s = function (i) {
        this._core = i, this._hashes = {}, this.$element = this._core.$element, this._handlers = {
            "initialized.owl.carousel": t.proxy(function (i) {
                i.namespace && "URLHash" === this._core.settings.startPosition && t(e).trigger("hashchange.owl.navigation")
            }, this), "prepared.owl.carousel": t.proxy(function (e) {
                if (e.namespace) {
                    var i = t(e.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");
                    if (!i) return;
                    this._hashes[i] = e.content
                }
            }, this), "changed.owl.carousel": t.proxy(function (i) {
                if (i.namespace && "position" === i.property.name) {
                    var n = this._core.items(this._core.relative(this._core.current())),
                        s = t.map(this._hashes, function (t, e) {
                            return t === n ? e : null
                        }).join();
                    if (!s || e.location.hash.slice(1) === s) return;
                    e.location.hash = s
                }
            }, this)
        }, this._core.options = t.extend({}, s.Defaults, this._core.options), this.$element.on(this._handlers), t(e).on("hashchange.owl.navigation", t.proxy(function (t) {
            var i = e.location.hash.substring(1), s = this._core.$stage.children(),
                o = this._hashes[i] && s.index(this._hashes[i]);
            o !== n && o !== this._core.current() && this._core.to(this._core.relative(o), !1, !0)
        }, this))
    };
    s.Defaults = {URLhashListener: !1}, s.prototype.destroy = function () {
        var i, n;
        t(e).off("hashchange.owl.navigation");
        for (i in this._handlers) this._core.$element.off(i, this._handlers[i]);
        for (n in Object.getOwnPropertyNames(this)) "function" != typeof this[n] && (this[n] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.Hash = s
}(window.Zepto || window.jQuery, window, document), function (t, e, i, n) {
    function s(e, i) {
        var s = !1, o = e.charAt(0).toUpperCase() + e.slice(1);
        return t.each((e + " " + a.join(o + " ") + o).split(" "), function (t, e) {
            if (r[e] !== n) return s = !i || e, !1
        }), s
    }

    function o(t) {
        return s(t, !0)
    }

    var r = t("<support>").get(0).style, a = "Webkit Moz O ms".split(" "), l = {
        transition: {
            end: {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd",
                transition: "transitionend"
            }
        },
        animation: {
            end: {
                WebkitAnimation: "webkitAnimationEnd",
                MozAnimation: "animationend",
                OAnimation: "oAnimationEnd",
                animation: "animationend"
            }
        }
    }, h = {
        csstransforms: function () {
            return !!s("transform")
        }, csstransforms3d: function () {
            return !!s("perspective")
        }, csstransitions: function () {
            return !!s("transition")
        }, cssanimations: function () {
            return !!s("animation")
        }
    };
    h.csstransitions() && (t.support.transition = new String(o("transition")), t.support.transition.end = l.transition.end[t.support.transition]), h.cssanimations() && (t.support.animation = new String(o("animation")), t.support.animation.end = l.animation.end[t.support.animation]), h.csstransforms() && (t.support.transform = new String(o("transform")), t.support.transform3d = h.csstransforms3d())
}(window.Zepto || window.jQuery, window, document), !function (t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : t.Swiper = e()
}(this, function () {
    "use strict";

    function t(t, e) {
        var i = [], r = 0;
        if (t && !e && t instanceof o) return t;
        if (t) if ("string" == typeof t) {
            var a, l, h = t.trim();
            if (h.indexOf("<") >= 0 && h.indexOf(">") >= 0) {
                var d = "div";
                for (0 === h.indexOf("<li") && (d = "ul"), 0 === h.indexOf("<tr") && (d = "tbody"), 0 !== h.indexOf("<td") && 0 !== h.indexOf("<th") || (d = "tr"), 0 === h.indexOf("<tbody") && (d = "table"), 0 === h.indexOf("<option") && (d = "select"), (l = n.createElement(d)).innerHTML = h, r = 0; r < l.childNodes.length; r += 1) i.push(l.childNodes[r])
            } else for (a = e || "#" !== t[0] || t.match(/[ .<>:~]/) ? (e || n).querySelectorAll(t.trim()) : [n.getElementById(t.trim().split("#")[1])], r = 0; r < a.length; r += 1) a[r] && i.push(a[r])
        } else if (t.nodeType || t === s || t === n) i.push(t); else if (t.length > 0 && t[0].nodeType) for (r = 0; r < t.length; r += 1) i.push(t[r]);
        return new o(i)
    }

    function e(t) {
        for (var e = [], i = 0; i < t.length; i += 1) -1 === e.indexOf(t[i]) && e.push(t[i]);
        return e
    }

    function i() {
        var t = this.params, e = this.el;
        if (!e || 0 !== e.offsetWidth) {
            t.breakpoints && this.setBreakpoint();
            var i = this.allowSlideNext, n = this.allowSlidePrev, s = this.snapGrid;
            if (this.allowSlideNext = !0, this.allowSlidePrev = !0, this.updateSize(), this.updateSlides(), t.freeMode) {
                var o = Math.min(Math.max(this.translate, this.maxTranslate()), this.minTranslate());
                this.setTranslate(o), this.updateActiveIndex(), this.updateSlidesClasses(), t.autoHeight && this.updateAutoHeight()
            } else this.updateSlidesClasses(), ("auto" === t.slidesPerView || t.slidesPerView > 1) && this.isEnd && !this.params.centeredSlides ? this.slideTo(this.slides.length - 1, 0, !1, !0) : this.slideTo(this.activeIndex, 0, !1, !0);
            this.allowSlidePrev = n, this.allowSlideNext = i, this.params.watchOverflow && s !== this.snapGrid && this.checkOverflow()
        }
    }

    var n = "undefined" == typeof document ? {
        body: {}, addEventListener: function () {
        }, removeEventListener: function () {
        }, activeElement: {
            blur: function () {
            }, nodeName: ""
        }, querySelector: function () {
            return null
        }, querySelectorAll: function () {
            return []
        }, getElementById: function () {
            return null
        }, createEvent: function () {
            return {
                initEvent: function () {
                }
            }
        }, createElement: function () {
            return {
                children: [], childNodes: [], style: {}, setAttribute: function () {
                }, getElementsByTagName: function () {
                    return []
                }
            }
        }, location: {hash: ""}
    } : document, s = "undefined" == typeof window ? {
        document: n,
        navigator: {userAgent: ""},
        location: {},
        history: {},
        CustomEvent: function () {
            return this
        },
        addEventListener: function () {
        },
        removeEventListener: function () {
        },
        getComputedStyle: function () {
            return {
                getPropertyValue: function () {
                    return ""
                }
            }
        },
        Image: function () {
        },
        Date: function () {
        },
        screen: {},
        setTimeout: function () {
        },
        clearTimeout: function () {
        }
    } : window, o = function (t) {
        for (var e = 0; e < t.length; e += 1) this[e] = t[e];
        return this.length = t.length, this
    };
    t.fn = o.prototype, t.Class = o, t.Dom7 = o;
    var r = {
        addClass: function (t) {
            if (void 0 === t) return this;
            for (var e = t.split(" "), i = 0; i < e.length; i += 1) for (var n = 0; n < this.length; n += 1) void 0 !== this[n].classList && this[n].classList.add(e[i]);
            return this
        }, removeClass: function (t) {
            for (var e = t.split(" "), i = 0; i < e.length; i += 1) for (var n = 0; n < this.length; n += 1) void 0 !== this[n].classList && this[n].classList.remove(e[i]);
            return this
        }, hasClass: function (t) {
            return !!this[0] && this[0].classList.contains(t)
        }, toggleClass: function (t) {
            for (var e = t.split(" "), i = 0; i < e.length; i += 1) for (var n = 0; n < this.length; n += 1) void 0 !== this[n].classList && this[n].classList.toggle(e[i]);
            return this
        }, attr: function (t, e) {
            var i = arguments;
            if (1 === arguments.length && "string" == typeof t) return this[0] ? this[0].getAttribute(t) : void 0;
            for (var n = 0; n < this.length; n += 1) if (2 === i.length) this[n].setAttribute(t, e); else for (var s in t) this[n][s] = t[s], this[n].setAttribute(s, t[s]);
            return this
        }, removeAttr: function (t) {
            for (var e = 0; e < this.length; e += 1) this[e].removeAttribute(t);
            return this
        }, data: function (t, e) {
            var i;
            if (void 0 !== e) {
                for (var n = 0; n < this.length; n += 1) (i = this[n]).dom7ElementDataStorage || (i.dom7ElementDataStorage = {}), i.dom7ElementDataStorage[t] = e;
                return this
            }
            if (i = this[0]) {
                if (i.dom7ElementDataStorage && t in i.dom7ElementDataStorage) return i.dom7ElementDataStorage[t];
                var s = i.getAttribute("data-" + t);
                return s || void 0
            }
        }, transform: function (t) {
            for (var e = 0; e < this.length; e += 1) {
                var i = this[e].style;
                i.webkitTransform = t, i.transform = t
            }
            return this
        }, transition: function (t) {
            "string" != typeof t && (t += "ms");
            for (var e = 0; e < this.length; e += 1) {
                var i = this[e].style;
                i.webkitTransitionDuration = t, i.transitionDuration = t
            }
            return this
        }, on: function () {
            function e(e) {
                var i = e.target;
                if (i) {
                    var n = e.target.dom7EventData || [];
                    if (n.indexOf(e) < 0 && n.unshift(e), t(i).is(a)) l.apply(i, n); else for (var s = t(i).parents(), o = 0; o < s.length; o += 1) t(s[o]).is(a) && l.apply(s[o], n)
                }
            }

            function i(t) {
                var e = t && t.target ? t.target.dom7EventData || [] : [];
                e.indexOf(t) < 0 && e.unshift(t), l.apply(this, e)
            }

            for (var n, s = [], o = arguments.length; o--;) s[o] = arguments[o];
            var r = s[0], a = s[1], l = s[2], h = s[3];
            "function" == typeof s[1] && (r = (n = s)[0], l = n[1], h = n[2], a = void 0), h || (h = !1);
            for (var d, u = r.split(" "), c = 0; c < this.length; c += 1) {
                var p = this[c];
                if (a) for (d = 0; d < u.length; d += 1) {
                    var f = u[d];
                    p.dom7LiveListeners || (p.dom7LiveListeners = {}), p.dom7LiveListeners[f] || (p.dom7LiveListeners[f] = []), p.dom7LiveListeners[f].push({
                        listener: l,
                        proxyListener: e
                    }), p.addEventListener(f, e, h)
                } else for (d = 0; d < u.length; d += 1) {
                    var m = u[d];
                    p.dom7Listeners || (p.dom7Listeners = {}), p.dom7Listeners[m] || (p.dom7Listeners[m] = []), p.dom7Listeners[m].push({
                        listener: l,
                        proxyListener: i
                    }), p.addEventListener(m, i, h)
                }
            }
            return this
        }, off: function () {
            for (var t, e = [], i = arguments.length; i--;) e[i] = arguments[i];
            var n = e[0], s = e[1], o = e[2], r = e[3];
            "function" == typeof e[1] && (n = (t = e)[0], o = t[1], r = t[2], s = void 0), r || (r = !1);
            for (var a = n.split(" "), l = 0; l < a.length; l += 1) for (var h = a[l], d = 0; d < this.length; d += 1) {
                var u = this[d], c = void 0;
                if (!s && u.dom7Listeners ? c = u.dom7Listeners[h] : s && u.dom7LiveListeners && (c = u.dom7LiveListeners[h]), c && c.length) for (var p = c.length - 1; p >= 0; p -= 1) {
                    var f = c[p];
                    o && f.listener === o ? (u.removeEventListener(h, f.proxyListener, r), c.splice(p, 1)) : o || (u.removeEventListener(h, f.proxyListener, r), c.splice(p, 1))
                }
            }
            return this
        }, trigger: function () {
            for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
            for (var i = t[0].split(" "), s = t[1], o = 0; o < i.length; o += 1) for (var r = i[o], a = 0; a < this.length; a += 1) {
                var l = this[a], h = void 0;
                try {
                    h = new d.CustomEvent(r, {detail: s, bubbles: !0, cancelable: !0})
                } catch (d) {
                    (h = n.createEvent("Event")).initEvent(r, !0, !0), h.detail = s
                }
                l.dom7EventData = t.filter(function (t, e) {
                    return e > 0
                }), l.dispatchEvent(h), l.dom7EventData = [], delete l.dom7EventData
            }
            return this
        }, transitionEnd: function (t) {
            function e(o) {
                if (o.target === this) for (t.call(this, o), i = 0; i < n.length; i += 1) s.off(n[i], e)
            }

            var i, n = ["webkitTransitionEnd", "transitionend"], s = this;
            if (t) for (i = 0; i < n.length; i += 1) s.on(n[i], e);
            return this
        }, outerWidth: function (t) {
            if (this.length > 0) {
                if (t) {
                    var e = this.styles();
                    return this[0].offsetWidth + parseFloat(e.getPropertyValue("margin-right")) + parseFloat(e.getPropertyValue("margin-left"))
                }
                return this[0].offsetWidth
            }
            return null
        }, outerHeight: function (t) {
            if (this.length > 0) {
                if (t) {
                    var e = this.styles();
                    return this[0].offsetHeight + parseFloat(e.getPropertyValue("margin-top")) + parseFloat(e.getPropertyValue("margin-bottom"))
                }
                return this[0].offsetHeight
            }
            return null
        }, offset: function () {
            if (this.length > 0) {
                var t = this[0], e = t.getBoundingClientRect(), i = n.body, o = t.clientTop || i.clientTop || 0,
                    r = t.clientLeft || i.clientLeft || 0, a = t === s ? s.scrollY : t.scrollTop,
                    l = t === s ? s.scrollX : t.scrollLeft;
                return {top: e.top + a - o, left: e.left + l - r}
            }
            return null
        }, css: function (t, e) {
            var i;
            if (1 === arguments.length) {
                if ("string" != typeof t) {
                    for (i = 0; i < this.length; i += 1) for (var n in t) this[i].style[n] = t[n];
                    return this
                }
                if (this[0]) return s.getComputedStyle(this[0], null).getPropertyValue(t)
            }
            if (2 === arguments.length && "string" == typeof t) {
                for (i = 0; i < this.length; i += 1) this[i].style[t] = e;
                return this
            }
            return this
        }, each: function (t) {
            if (!t) return this;
            for (var e = 0; e < this.length; e += 1) if (!1 === t.call(this[e], e, this[e])) return this;
            return this
        }, html: function (t) {
            if (void 0 === t) return this[0] ? this[0].innerHTML : void 0;
            for (var e = 0; e < this.length; e += 1) this[e].innerHTML = t;
            return this
        }, text: function (t) {
            if (void 0 === t) return this[0] ? this[0].textContent.trim() : null;
            for (var e = 0; e < this.length; e += 1) this[e].textContent = t;
            return this
        }, is: function (e) {
            var i, r, a = this[0];
            if (!a || void 0 === e) return !1;
            if ("string" == typeof e) {
                if (a.matches) return a.matches(e);
                if (a.webkitMatchesSelector) return a.webkitMatchesSelector(e);
                if (a.msMatchesSelector) return a.msMatchesSelector(e);
                for (i = t(e), r = 0; r < i.length; r += 1) if (i[r] === a) return !0;
                return !1
            }
            if (e === n) return a === n;
            if (e === s) return a === s;
            if (e.nodeType || e instanceof o) {
                for (i = e.nodeType ? [e] : e, r = 0; r < i.length; r += 1) if (i[r] === a) return !0;
                return !1
            }
            return !1
        }, index: function () {
            var t, e = this[0];
            if (e) {
                for (t = 0; null !== (e = e.previousSibling);) 1 === e.nodeType && (t += 1);
                return t
            }
        }, eq: function (t) {
            if (void 0 === t) return this;
            var e, i = this.length;
            return new o(t > i - 1 ? [] : t < 0 ? (e = i + t) < 0 ? [] : [this[e]] : [this[t]])
        }, append: function () {
            for (var t, e = [], i = arguments.length; i--;) e[i] = arguments[i];
            for (var s = 0; s < e.length; s += 1) {
                t = e[s];
                for (var r = 0; r < this.length; r += 1) if ("string" == typeof t) {
                    var a = n.createElement("div");
                    for (a.innerHTML = t; a.firstChild;) this[r].appendChild(a.firstChild)
                } else if (t instanceof o) for (var l = 0; l < t.length; l += 1) this[r].appendChild(t[l]); else this[r].appendChild(t)
            }
            return this
        }, prepend: function (t) {
            var e, i;
            for (e = 0; e < this.length; e += 1) if ("string" == typeof t) {
                var s = n.createElement("div");
                for (s.innerHTML = t, i = s.childNodes.length - 1; i >= 0; i -= 1) this[e].insertBefore(s.childNodes[i], this[e].childNodes[0])
            } else if (t instanceof o) for (i = 0; i < t.length; i += 1) this[e].insertBefore(t[i], this[e].childNodes[0]); else this[e].insertBefore(t, this[e].childNodes[0]);
            return this
        }, next: function (e) {
            return new o(this.length > 0 ? e ? this[0].nextElementSibling && t(this[0].nextElementSibling).is(e) ? [this[0].nextElementSibling] : [] : this[0].nextElementSibling ? [this[0].nextElementSibling] : [] : [])
        }, nextAll: function (e) {
            var i = [], n = this[0];
            if (!n) return new o([]);
            for (; n.nextElementSibling;) {
                var s = n.nextElementSibling;
                e ? t(s).is(e) && i.push(s) : i.push(s), n = s
            }
            return new o(i)
        }, prev: function (e) {
            if (this.length > 0) {
                var i = this[0];
                return new o(e ? i.previousElementSibling && t(i.previousElementSibling).is(e) ? [i.previousElementSibling] : [] : i.previousElementSibling ? [i.previousElementSibling] : [])
            }
            return new o([])
        }, prevAll: function (e) {
            var i = [], n = this[0];
            if (!n) return new o([]);
            for (; n.previousElementSibling;) {
                var s = n.previousElementSibling;
                e ? t(s).is(e) && i.push(s) : i.push(s), n = s
            }
            return new o(i)
        }, parent: function (i) {
            for (var n = [], s = 0; s < this.length; s += 1) null !== this[s].parentNode && (i ? t(this[s].parentNode).is(i) && n.push(this[s].parentNode) : n.push(this[s].parentNode));
            return t(e(n))
        }, parents: function (i) {
            for (var n = [], s = 0; s < this.length; s += 1) for (var o = this[s].parentNode; o;) i ? t(o).is(i) && n.push(o) : n.push(o), o = o.parentNode;
            return t(e(n))
        }, closest: function (t) {
            var e = this;
            return void 0 === t ? new o([]) : (e.is(t) || (e = e.parents(t).eq(0)), e)
        }, find: function (t) {
            for (var e = [], i = 0; i < this.length; i += 1) for (var n = this[i].querySelectorAll(t), s = 0; s < n.length; s += 1) e.push(n[s]);
            return new o(e)
        }, children: function (i) {
            for (var n = [], s = 0; s < this.length; s += 1) for (var r = this[s].childNodes, a = 0; a < r.length; a += 1) i ? 1 === r[a].nodeType && t(r[a]).is(i) && n.push(r[a]) : 1 === r[a].nodeType && n.push(r[a]);
            return new o(e(n))
        }, remove: function () {
            for (var t = 0; t < this.length; t += 1) this[t].parentNode && this[t].parentNode.removeChild(this[t]);
            return this
        }, add: function () {
            for (var e = [], i = arguments.length; i--;) e[i] = arguments[i];
            var n, s;
            for (n = 0; n < e.length; n += 1) {
                var o = t(e[n]);
                for (s = 0; s < o.length; s += 1) this[this.length] = o[s], this.length += 1
            }
            return this
        }, styles: function () {
            return this[0] ? s.getComputedStyle(this[0], null) : {}
        }
    };
    Object.keys(r).forEach(function (e) {
        t.fn[e] = r[e]
    });
    var a, l, h, d = {
        deleteProps: function (t) {
            var e = t;
            Object.keys(e).forEach(function (t) {
                try {
                    e[t] = null
                } catch (t) {
                }
                try {
                    delete e[t]
                } catch (t) {
                }
            })
        }, nextTick: function (t, e) {
            return void 0 === e && (e = 0), setTimeout(t, e)
        }, now: function () {
            return Date.now()
        }, getTranslate: function (t, e) {
            var i, n, o;
            void 0 === e && (e = "x");
            var r = s.getComputedStyle(t, null);
            return s.WebKitCSSMatrix ? ((n = r.transform || r.webkitTransform).split(",").length > 6 && (n = n.split(", ").map(function (t) {
                return t.replace(",", ".")
            }).join(", ")), o = new s.WebKitCSSMatrix("none" === n ? "" : n)) : i = (o = r.MozTransform || r.OTransform || r.MsTransform || r.msTransform || r.transform || r.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","), "x" === e && (n = s.WebKitCSSMatrix ? o.m41 : 16 === i.length ? parseFloat(i[12]) : parseFloat(i[4])), "y" === e && (n = s.WebKitCSSMatrix ? o.m42 : 16 === i.length ? parseFloat(i[13]) : parseFloat(i[5])), n || 0
        }, parseUrlQuery: function (t) {
            var e, i, n, o, r = {}, a = t || s.location.href;
            if ("string" == typeof a && a.length) for (o = (i = (a = a.indexOf("?") > -1 ? a.replace(/\S*\?/, "") : "").split("&").filter(function (t) {
                return "" !== t
            })).length, e = 0; e < o; e += 1) n = i[e].replace(/#\S+/g, "").split("="), r[decodeURIComponent(n[0])] = void 0 === n[1] ? void 0 : decodeURIComponent(n[1]) || "";
            return r
        }, isObject: function (t) {
            return "object" == typeof t && null !== t && t.constructor && t.constructor === Object
        }, extend: function () {
            for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
            for (var i = Object(t[0]), n = 1; n < t.length; n += 1) {
                var s = t[n];
                if (void 0 !== s && null !== s) for (var o = Object.keys(Object(s)), r = 0, a = o.length; r < a; r += 1) {
                    var l = o[r], h = Object.getOwnPropertyDescriptor(s, l);
                    void 0 !== h && h.enumerable && (d.isObject(i[l]) && d.isObject(s[l]) ? d.extend(i[l], s[l]) : !d.isObject(i[l]) && d.isObject(s[l]) ? (i[l] = {}, d.extend(i[l], s[l])) : i[l] = s[l])
                }
            }
            return i
        }
    }, u = (h = n.createElement("div"), {
        touch: s.Modernizr && !0 === s.Modernizr.touch || !!("ontouchstart" in s || s.DocumentTouch && n instanceof s.DocumentTouch),
        pointerEvents: !(!s.navigator.pointerEnabled && !s.PointerEvent),
        prefixedPointerEvents: !!s.navigator.msPointerEnabled,
        transition: (l = h.style, "transition" in l || "webkitTransition" in l || "MozTransition" in l),
        transforms3d: s.Modernizr && !0 === s.Modernizr.csstransforms3d || (a = h.style, "webkitPerspective" in a || "MozPerspective" in a || "OPerspective" in a || "MsPerspective" in a || "perspective" in a),
        flexbox: function () {
            for (var t = h.style, e = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "), i = 0; i < e.length; i += 1) if (e[i] in t) return !0;
            return !1
        }(),
        observer: "MutationObserver" in s || "WebkitMutationObserver" in s,
        passiveListener: function () {
            var t = !1;
            try {
                var e = Object.defineProperty({}, "passive", {
                    get: function () {
                        t = !0
                    }
                });
                s.addEventListener("testPassiveListener", null, e)
            } catch (t) {
            }
            return t
        }(),
        gestures: "ongesturestart" in s
    }), c = function (t) {
        void 0 === t && (t = {});
        var e = this;
        e.params = t, e.eventsListeners = {}, e.params && e.params.on && Object.keys(e.params.on).forEach(function (t) {
            e.on(t, e.params.on[t])
        })
    }, p = {components: {configurable: !0}};
    c.prototype.on = function (t, e, i) {
        var n = this;
        if ("function" != typeof e) return n;
        var s = i ? "unshift" : "push";
        return t.split(" ").forEach(function (t) {
            n.eventsListeners[t] || (n.eventsListeners[t] = []), n.eventsListeners[t][s](e)
        }), n
    }, c.prototype.once = function (t, e, i) {
        var n = this;
        return "function" != typeof e ? n : n.on(t, function s() {
            for (var i = [], o = arguments.length; o--;) i[o] = arguments[o];
            e.apply(n, i), n.off(t, s)
        }, i)
    }, c.prototype.off = function (t, e) {
        var i = this;
        return i.eventsListeners ? (t.split(" ").forEach(function (t) {
            void 0 === e ? i.eventsListeners[t] = [] : i.eventsListeners[t].forEach(function (n, s) {
                n === e && i.eventsListeners[t].splice(s, 1)
            })
        }), i) : i
    }, c.prototype.emit = function () {
        for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
        var i, n, s, o = this;
        return o.eventsListeners ? ("string" == typeof t[0] || Array.isArray(t[0]) ? (i = t[0], n = t.slice(1, t.length), s = o) : (i = t[0].events, n = t[0].data, s = t[0].context || o), (Array.isArray(i) ? i : i.split(" ")).forEach(function (t) {
            if (o.eventsListeners && o.eventsListeners[t]) {
                var e = [];
                o.eventsListeners[t].forEach(function (t) {
                    e.push(t)
                }), e.forEach(function (t) {
                    t.apply(s, n)
                })
            }
        }), o) : o
    }, c.prototype.useModulesParams = function (t) {
        var e = this;
        e.modules && Object.keys(e.modules).forEach(function (i) {
            var n = e.modules[i];
            n.params && d.extend(t, n.params)
        })
    }, c.prototype.useModules = function (t) {
        void 0 === t && (t = {});
        var e = this;
        e.modules && Object.keys(e.modules).forEach(function (i) {
            var n = e.modules[i], s = t[i] || {};
            n.instance && Object.keys(n.instance).forEach(function (t) {
                var i = n.instance[t];
                e[t] = "function" == typeof i ? i.bind(e) : i
            }), n.on && e.on && Object.keys(n.on).forEach(function (t) {
                e.on(t, n.on[t])
            }), n.create && n.create.bind(e)(s)
        })
    }, p.components.set = function (t) {
        this.use && this.use(t)
    }, c.installModule = function (t) {
        for (var e = [], i = arguments.length - 1; i-- > 0;) e[i] = arguments[i + 1];
        var n = this;
        n.prototype.modules || (n.prototype.modules = {});
        var s = t.name || Object.keys(n.prototype.modules).length + "_" + d.now();
        return n.prototype.modules[s] = t, t.proto && Object.keys(t.proto).forEach(function (e) {
            n.prototype[e] = t.proto[e]
        }), t["static"] && Object.keys(t["static"]).forEach(function (e) {
            n[e] = t["static"][e]
        }), t.install && t.install.apply(n, e), n
    }, c.use = function (t) {
        for (var e = [], i = arguments.length - 1; i-- > 0;) e[i] = arguments[i + 1];
        var n = this;
        return Array.isArray(t) ? (t.forEach(function (t) {
            return n.installModule(t)
        }), n) : n.installModule.apply(n, [t].concat(e))
    }, Object.defineProperties(c, p);
    var f = {
            updateSize: function () {
                var t, e, i = this.$el;
                t = void 0 !== this.params.width ? this.params.width : i[0].clientWidth, e = void 0 !== this.params.height ? this.params.height : i[0].clientHeight, 0 === t && this.isHorizontal() || 0 === e && this.isVertical() || (t = t - parseInt(i.css("padding-left"), 10) - parseInt(i.css("padding-right"), 10), e = e - parseInt(i.css("padding-top"), 10) - parseInt(i.css("padding-bottom"), 10), d.extend(this, {
                    width: t,
                    height: e,
                    size: this.isHorizontal() ? t : e
                }))
            }, updateSlides: function () {
                var t = this.params, e = this.$wrapperEl, i = this.size, n = this.rtlTranslate, o = this.wrongRTL,
                    r = this.virtual && t.virtual.enabled, a = r ? this.virtual.slides.length : this.slides.length,
                    l = e.children("." + this.params.slideClass), h = r ? this.virtual.slides.length : l.length, c = [],
                    p = [], f = [], m = t.slidesOffsetBefore;
                "function" == typeof m && (m = t.slidesOffsetBefore.call(this));
                var g = t.slidesOffsetAfter;
                "function" == typeof g && (g = t.slidesOffsetAfter.call(this));
                var v = this.snapGrid.length, y = this.snapGrid.length, w = t.spaceBetween, b = -m, x = 0, C = 0;
                if (void 0 !== i) {
                    var T, E;
                    "string" == typeof w && w.indexOf("%") >= 0 && (w = parseFloat(w.replace("%", "")) / 100 * i), this.virtualSize = -w, n ? l.css({
                        marginLeft: "",
                        marginTop: ""
                    }) : l.css({
                        marginRight: "",
                        marginBottom: ""
                    }), t.slidesPerColumn > 1 && (T = Math.floor(h / t.slidesPerColumn) === h / this.params.slidesPerColumn ? h : Math.ceil(h / t.slidesPerColumn) * t.slidesPerColumn, "auto" !== t.slidesPerView && "row" === t.slidesPerColumnFill && (T = Math.max(T, t.slidesPerView * t.slidesPerColumn)));
                    for (var S, _ = t.slidesPerColumn, k = T / _, D = k - (t.slidesPerColumn * k - h), I = 0; I < h; I += 1) {
                        E = 0;
                        var $ = l.eq(I);
                        if (t.slidesPerColumn > 1) {
                            var M = void 0, P = void 0, z = void 0;
                            "column" === t.slidesPerColumnFill ? (z = I - (P = Math.floor(I / _)) * _, (P > D || P === D && z === _ - 1) && (z += 1) >= _ && (z = 0, P += 1), M = P + z * T / _, $.css({
                                "-webkit-box-ordinal-group": M,
                                "-moz-box-ordinal-group": M,
                                "-ms-flex-order": M,
                                "-webkit-order": M,
                                order: M
                            })) : P = I - (z = Math.floor(I / k)) * k, $.css("margin-" + (this.isHorizontal() ? "top" : "left"), 0 !== z && t.spaceBetween && t.spaceBetween + "px").attr("data-swiper-column", P).attr("data-swiper-row", z)
                        }
                        if ("none" !== $.css("display")) {
                            if ("auto" === t.slidesPerView) {
                                var A = s.getComputedStyle($[0], null), O = $[0].style.transform,
                                    L = $[0].style.webkitTransform;
                                O && ($[0].style.transform = "none"), L && ($[0].style.webkitTransform = "none"), E = this.isHorizontal() ? $[0].getBoundingClientRect().width + parseFloat(A.getPropertyValue("margin-left")) + parseFloat(A.getPropertyValue("margin-right")) : $[0].getBoundingClientRect().height + parseFloat(A.getPropertyValue("margin-top")) + parseFloat(A.getPropertyValue("margin-bottom")), O && ($[0].style.transform = O), L && ($[0].style.webkitTransform = L), t.roundLengths && (E = Math.floor(E))
                            } else E = (i - (t.slidesPerView - 1) * w) / t.slidesPerView, t.roundLengths && (E = Math.floor(E)), l[I] && (this.isHorizontal() ? l[I].style.width = E + "px" : l[I].style.height = E + "px");
                            l[I] && (l[I].swiperSlideSize = E), f.push(E), t.centeredSlides ? (b = b + E / 2 + x / 2 + w, 0 === x && 0 !== I && (b = b - i / 2 - w), 0 === I && (b = b - i / 2 - w), Math.abs(b) < .001 && (b = 0), t.roundLengths && (b = Math.floor(b)), C % t.slidesPerGroup == 0 && c.push(b), p.push(b)) : (t.roundLengths && (b = Math.floor(b)), C % t.slidesPerGroup == 0 && c.push(b), p.push(b), b = b + E + w), this.virtualSize += E + w, x = E, C += 1
                        }
                    }
                    if (this.virtualSize = Math.max(this.virtualSize, i) + g, n && o && ("slide" === t.effect || "coverflow" === t.effect) && e.css({width: this.virtualSize + t.spaceBetween + "px"}), u.flexbox && !t.setWrapperSize || (this.isHorizontal() ? e.css({width: this.virtualSize + t.spaceBetween + "px"}) : e.css({height: this.virtualSize + t.spaceBetween + "px"})), t.slidesPerColumn > 1 && (this.virtualSize = (E + t.spaceBetween) * T, this.virtualSize = Math.ceil(this.virtualSize / t.slidesPerColumn) - t.spaceBetween,
                        this.isHorizontal() ? e.css({width: this.virtualSize + t.spaceBetween + "px"}) : e.css({height: this.virtualSize + t.spaceBetween + "px"}), t.centeredSlides)) {
                        S = [];
                        for (var N = 0; N < c.length; N += 1) {
                            var j = c[N];
                            t.roundLengths && (j = Math.floor(j)), c[N] < this.virtualSize + c[0] && S.push(j)
                        }
                        c = S
                    }
                    if (!t.centeredSlides) {
                        S = [];
                        for (var W = 0; W < c.length; W += 1) {
                            var R = c[W];
                            t.roundLengths && (R = Math.floor(R)), c[W] <= this.virtualSize - i && S.push(R)
                        }
                        c = S, Math.floor(this.virtualSize - i) - Math.floor(c[c.length - 1]) > 1 && c.push(this.virtualSize - i)
                    }
                    0 === c.length && (c = [0]), 0 !== t.spaceBetween && (this.isHorizontal() ? n ? l.css({marginLeft: w + "px"}) : l.css({marginRight: w + "px"}) : l.css({marginBottom: w + "px"})), d.extend(this, {
                        slides: l,
                        snapGrid: c,
                        slidesGrid: p,
                        slidesSizesGrid: f
                    }), h !== a && this.emit("slidesLengthChange"), c.length !== v && (this.params.watchOverflow && this.checkOverflow(), this.emit("snapGridLengthChange")), p.length !== y && this.emit("slidesGridLengthChange"), (t.watchSlidesProgress || t.watchSlidesVisibility) && this.updateSlidesOffset()
                }
            }, updateAutoHeight: function (t) {
                var e, i = [], n = 0;
                if ("number" == typeof t ? this.setTransition(t) : !0 === t && this.setTransition(this.params.speed), "auto" !== this.params.slidesPerView && this.params.slidesPerView > 1) for (e = 0; e < Math.ceil(this.params.slidesPerView); e += 1) {
                    var s = this.activeIndex + e;
                    if (s > this.slides.length) break;
                    i.push(this.slides.eq(s)[0])
                } else i.push(this.slides.eq(this.activeIndex)[0]);
                for (e = 0; e < i.length; e += 1) if (void 0 !== i[e]) {
                    var o = i[e].offsetHeight;
                    n = o > n ? o : n
                }
                n && this.$wrapperEl.css("height", n + "px")
            }, updateSlidesOffset: function () {
                for (var t = this.slides, e = 0; e < t.length; e += 1) t[e].swiperSlideOffset = this.isHorizontal() ? t[e].offsetLeft : t[e].offsetTop
            }, updateSlidesProgress: function (t) {
                void 0 === t && (t = this && this.translate || 0);
                var e = this.params, i = this.slides, n = this.rtlTranslate;
                if (0 !== i.length) {
                    void 0 === i[0].swiperSlideOffset && this.updateSlidesOffset();
                    var s = -t;
                    n && (s = t), i.removeClass(e.slideVisibleClass);
                    for (var o = 0; o < i.length; o += 1) {
                        var r = i[o],
                            a = (s + (e.centeredSlides ? this.minTranslate() : 0) - r.swiperSlideOffset) / (r.swiperSlideSize + e.spaceBetween);
                        if (e.watchSlidesVisibility) {
                            var l = -(s - r.swiperSlideOffset), h = l + this.slidesSizesGrid[o];
                            (l >= 0 && l < this.size || h > 0 && h <= this.size || l <= 0 && h >= this.size) && i.eq(o).addClass(e.slideVisibleClass)
                        }
                        r.progress = n ? -a : a
                    }
                }
            }, updateProgress: function (t) {
                void 0 === t && (t = this && this.translate || 0);
                var e = this.params, i = this.maxTranslate() - this.minTranslate(), n = this.progress, s = this.isBeginning,
                    o = this.isEnd, r = s, a = o;
                0 === i ? (n = 0, s = !0, o = !0) : (s = (n = (t - this.minTranslate()) / i) <= 0, o = n >= 1), d.extend(this, {
                    progress: n,
                    isBeginning: s,
                    isEnd: o
                }), (e.watchSlidesProgress || e.watchSlidesVisibility) && this.updateSlidesProgress(t), s && !r && this.emit("reachBeginning toEdge"), o && !a && this.emit("reachEnd toEdge"), (r && !s || a && !o) && this.emit("fromEdge"), this.emit("progress", n)
            }, updateSlidesClasses: function () {
                var t, e = this.slides, i = this.params, n = this.$wrapperEl, s = this.activeIndex, o = this.realIndex,
                    r = this.virtual && i.virtual.enabled;
                e.removeClass(i.slideActiveClass + " " + i.slideNextClass + " " + i.slidePrevClass + " " + i.slideDuplicateActiveClass + " " + i.slideDuplicateNextClass + " " + i.slideDuplicatePrevClass), (t = r ? this.$wrapperEl.find("." + i.slideClass + '[data-swiper-slide-index="' + s + '"]') : e.eq(s)).addClass(i.slideActiveClass), i.loop && (t.hasClass(i.slideDuplicateClass) ? n.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + o + '"]').addClass(i.slideDuplicateActiveClass) : n.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + o + '"]').addClass(i.slideDuplicateActiveClass));
                var a = t.nextAll("." + i.slideClass).eq(0).addClass(i.slideNextClass);
                i.loop && 0 === a.length && (a = e.eq(0)).addClass(i.slideNextClass);
                var l = t.prevAll("." + i.slideClass).eq(0).addClass(i.slidePrevClass);
                i.loop && 0 === l.length && (l = e.eq(-1)).addClass(i.slidePrevClass), i.loop && (a.hasClass(i.slideDuplicateClass) ? n.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + a.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass) : n.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + a.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass), l.hasClass(i.slideDuplicateClass) ? n.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass) : n.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass))
            }, updateActiveIndex: function (t) {
                var e, i = this.rtlTranslate ? this.translate : -this.translate, n = this.slidesGrid, s = this.snapGrid,
                    o = this.params, r = this.activeIndex, a = this.realIndex, l = this.snapIndex, h = t;
                if (void 0 === h) {
                    for (var u = 0; u < n.length; u += 1) void 0 !== n[u + 1] ? i >= n[u] && i < n[u + 1] - (n[u + 1] - n[u]) / 2 ? h = u : i >= n[u] && i < n[u + 1] && (h = u + 1) : i >= n[u] && (h = u);
                    o.normalizeSlideIndex && (h < 0 || void 0 === h) && (h = 0)
                }
                if ((e = s.indexOf(i) >= 0 ? s.indexOf(i) : Math.floor(h / o.slidesPerGroup)) >= s.length && (e = s.length - 1), h !== r) {
                    var c = parseInt(this.slides.eq(h).attr("data-swiper-slide-index") || h, 10);
                    d.extend(this, {
                        snapIndex: e,
                        realIndex: c,
                        previousIndex: r,
                        activeIndex: h
                    }), this.emit("activeIndexChange"), this.emit("snapIndexChange"), a !== c && this.emit("realIndexChange"), this.emit("slideChange")
                } else e !== l && (this.snapIndex = e, this.emit("snapIndexChange"))
            }, updateClickedSlide: function (e) {
                var i = this.params, n = t(e.target).closest("." + i.slideClass)[0], s = !1;
                if (n) for (var o = 0; o < this.slides.length; o += 1) this.slides[o] === n && (s = !0);
                return n && s ? (this.clickedSlide = n, this.virtual && this.params.virtual.enabled ? this.clickedIndex = parseInt(t(n).attr("data-swiper-slide-index"), 10) : this.clickedIndex = t(n).index(), i.slideToClickedSlide && void 0 !== this.clickedIndex && this.clickedIndex !== this.activeIndex && this.slideToClickedSlide(), void 0) : (this.clickedSlide = void 0, void (this.clickedIndex = void 0))
            }
        }, m = {
            getTranslate: function (t) {
                void 0 === t && (t = this.isHorizontal() ? "x" : "y");
                var e = this.params, i = this.rtlTranslate, n = this.translate, s = this.$wrapperEl;
                if (e.virtualTranslate) return i ? -n : n;
                var o = d.getTranslate(s[0], t);
                return i && (o = -o), o || 0
            }, setTranslate: function (t, e) {
                var i = this.rtlTranslate, n = this.params, s = this.$wrapperEl, o = this.progress, r = 0, a = 0;
                this.isHorizontal() ? r = i ? -t : t : a = t, n.roundLengths && (r = Math.floor(r), a = Math.floor(a)), n.virtualTranslate || (u.transforms3d ? s.transform("translate3d(" + r + "px, " + a + "px, 0px)") : s.transform("translate(" + r + "px, " + a + "px)")), this.previousTranslate = this.translate, this.translate = this.isHorizontal() ? r : a;
                var l = this.maxTranslate() - this.minTranslate();
                (0 === l ? 0 : (t - this.minTranslate()) / l) !== o && this.updateProgress(t), this.emit("setTranslate", this.translate, e)
            }, minTranslate: function () {
                return -this.snapGrid[0]
            }, maxTranslate: function () {
                return -this.snapGrid[this.snapGrid.length - 1]
            }
        }, g = {
            setTransition: function (t, e) {
                this.$wrapperEl.transition(t), this.emit("setTransition", t, e)
            }, transitionStart: function (t, e) {
                void 0 === t && (t = !0);
                var i = this.activeIndex, n = this.params, s = this.previousIndex;
                n.autoHeight && this.updateAutoHeight();
                var o = e;
                if (o || (o = i > s ? "next" : i < s ? "prev" : "reset"), this.emit("transitionStart"), t && i !== s) {
                    if ("reset" === o) return void this.emit("slideResetTransitionStart");
                    this.emit("slideChangeTransitionStart"), "next" === o ? this.emit("slideNextTransitionStart") : this.emit("slidePrevTransitionStart")
                }
            }, transitionEnd: function (t, e) {
                void 0 === t && (t = !0);
                var i = this.activeIndex, n = this.previousIndex;
                this.animating = !1, this.setTransition(0);
                var s = e;
                if (s || (s = i > n ? "next" : i < n ? "prev" : "reset"), this.emit("transitionEnd"), t && i !== n) {
                    if ("reset" === s) return void this.emit("slideResetTransitionEnd");
                    this.emit("slideChangeTransitionEnd"), "next" === s ? this.emit("slideNextTransitionEnd") : this.emit("slidePrevTransitionEnd")
                }
            }
        }, v = {
            slideTo: function (t, e, i, n) {
                void 0 === t && (t = 0), void 0 === e && (e = this.params.speed), void 0 === i && (i = !0);
                var s = this, o = t;
                o < 0 && (o = 0);
                var r = s.params, a = s.snapGrid, l = s.slidesGrid, h = s.previousIndex, d = s.activeIndex,
                    c = s.rtlTranslate;
                if (s.animating && r.preventIntercationOnTransition) return !1;
                var p = Math.floor(o / r.slidesPerGroup);
                p >= a.length && (p = a.length - 1), (d || r.initialSlide || 0) === (h || 0) && i && s.emit("beforeSlideChangeStart");
                var f, m = -a[p];
                if (s.updateProgress(m), r.normalizeSlideIndex) for (var g = 0; g < l.length; g += 1) -Math.floor(100 * m) >= Math.floor(100 * l[g]) && (o = g);
                if (s.initialized && o !== d) {
                    if (!s.allowSlideNext && m < s.translate && m < s.minTranslate()) return !1;
                    if (!s.allowSlidePrev && m > s.translate && m > s.maxTranslate() && (d || 0) !== o) return !1
                }
                return f = o > d ? "next" : o < d ? "prev" : "reset", c && -m === s.translate || !c && m === s.translate ? (s.updateActiveIndex(o), r.autoHeight && s.updateAutoHeight(), s.updateSlidesClasses(), "slide" !== r.effect && s.setTranslate(m), "reset" !== f && (s.transitionStart(i, f), s.transitionEnd(i, f)), !1) : (0 !== e && u.transition ? (s.setTransition(e), s.setTranslate(m), s.updateActiveIndex(o), s.updateSlidesClasses(), s.emit("beforeTransitionStart", e, n), s.transitionStart(i, f), s.animating || (s.animating = !0, s.onSlideToWrapperTransitionEnd || (s.onSlideToWrapperTransitionEnd = function (t) {
                    s && !s.destroyed && t.target === this && (s.$wrapperEl[0].removeEventListener("transitionend", s.onSlideToWrapperTransitionEnd), s.$wrapperEl[0].removeEventListener("webkitTransitionEnd", s.onSlideToWrapperTransitionEnd), s.transitionEnd(i, f))
                }), s.$wrapperEl[0].addEventListener("transitionend", s.onSlideToWrapperTransitionEnd), s.$wrapperEl[0].addEventListener("webkitTransitionEnd", s.onSlideToWrapperTransitionEnd))) : (s.setTransition(0), s.setTranslate(m), s.updateActiveIndex(o), s.updateSlidesClasses(), s.emit("beforeTransitionStart", e, n), s.transitionStart(i, f), s.transitionEnd(i, f)), !0)
            }, slideToLoop: function (t, e, i, n) {
                void 0 === t && (t = 0), void 0 === e && (e = this.params.speed), void 0 === i && (i = !0);
                var s = t;
                return this.params.loop && (s += this.loopedSlides), this.slideTo(s, e, i, n)
            }, slideNext: function (t, e, i) {
                void 0 === t && (t = this.params.speed), void 0 === e && (e = !0);
                var n = this.params, s = this.animating;
                return n.loop ? !s && (this.loopFix(), this._clientLeft = this.$wrapperEl[0].clientLeft, this.slideTo(this.activeIndex + n.slidesPerGroup, t, e, i)) : this.slideTo(this.activeIndex + n.slidesPerGroup, t, e, i)
            }, slidePrev: function (t, e, i) {
                function n(t) {
                    return t < 0 ? -Math.floor(Math.abs(t)) : Math.floor(t)
                }

                void 0 === t && (t = this.params.speed), void 0 === e && (e = !0);
                var s = this.params, o = this.animating, r = this.snapGrid, a = this.slidesGrid, l = this.rtlTranslate;
                if (s.loop) {
                    if (o) return !1;
                    this.loopFix(), this._clientLeft = this.$wrapperEl[0].clientLeft
                }
                var h, d = n(l ? this.translate : -this.translate), u = r.map(function (t) {
                    return n(t)
                }), c = (a.map(function (t) {
                    return n(t)
                }), r[u.indexOf(d)], r[u.indexOf(d) - 1]);
                return void 0 !== c && (h = a.indexOf(c)) < 0 && (h = this.activeIndex - 1), this.slideTo(h, t, e, i)
            }, slideReset: function (t, e, i) {
                return void 0 === t && (t = this.params.speed), void 0 === e && (e = !0), this.slideTo(this.activeIndex, t, e, i)
            }, slideToClosest: function (t, e, i) {
                void 0 === t && (t = this.params.speed), void 0 === e && (e = !0);
                var n = this.activeIndex, s = Math.floor(n / this.params.slidesPerGroup);
                if (s < this.snapGrid.length - 1) {
                    var o = this.rtlTranslate ? this.translate : -this.translate, r = this.snapGrid[s];
                    o - r > (this.snapGrid[s + 1] - r) / 2 && (n = this.params.slidesPerGroup)
                }
                return this.slideTo(n, t, e, i)
            }, slideToClickedSlide: function () {
                var e, i = this, n = i.params, s = i.$wrapperEl,
                    o = "auto" === n.slidesPerView ? i.slidesPerViewDynamic() : n.slidesPerView, r = i.clickedIndex;
                if (n.loop) {
                    if (i.animating) return;
                    e = parseInt(t(i.clickedSlide).attr("data-swiper-slide-index"), 10), n.centeredSlides ? r < i.loopedSlides - o / 2 || r > i.slides.length - i.loopedSlides + o / 2 ? (i.loopFix(), r = s.children("." + n.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + n.slideDuplicateClass + ")").eq(0).index(), d.nextTick(function () {
                        i.slideTo(r)
                    })) : i.slideTo(r) : r > i.slides.length - o ? (i.loopFix(), r = s.children("." + n.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + n.slideDuplicateClass + ")").eq(0).index(), d.nextTick(function () {
                        i.slideTo(r)
                    })) : i.slideTo(r)
                } else i.slideTo(r)
            }
        }, y = {
            loopCreate: function () {
                var e = this, i = e.params, s = e.$wrapperEl;
                s.children("." + i.slideClass + "." + i.slideDuplicateClass).remove();
                var o = s.children("." + i.slideClass);
                if (i.loopFillGroupWithBlank) {
                    var r = i.slidesPerGroup - o.length % i.slidesPerGroup;
                    if (r !== i.slidesPerGroup) {
                        for (var a = 0; a < r; a += 1) {
                            var l = t(n.createElement("div")).addClass(i.slideClass + " " + i.slideBlankClass);
                            s.append(l)
                        }
                        o = s.children("." + i.slideClass)
                    }
                }
                "auto" !== i.slidesPerView || i.loopedSlides || (i.loopedSlides = o.length), e.loopedSlides = parseInt(i.loopedSlides || i.slidesPerView, 10), e.loopedSlides += i.loopAdditionalSlides, e.loopedSlides > o.length && (e.loopedSlides = o.length);
                var h = [], d = [];
                o.each(function (i, n) {
                    var s = t(n);
                    i < e.loopedSlides && d.push(n), i < o.length && i >= o.length - e.loopedSlides && h.push(n), s.attr("data-swiper-slide-index", i)
                });
                for (var u = 0; u < d.length; u += 1) s.append(t(d[u].cloneNode(!0)).addClass(i.slideDuplicateClass));
                for (var c = h.length - 1; c >= 0; c -= 1) s.prepend(t(h[c].cloneNode(!0)).addClass(i.slideDuplicateClass))
            }, loopFix: function () {
                var t, e = this.params, i = this.activeIndex, n = this.slides, s = this.loopedSlides,
                    o = this.allowSlidePrev, r = this.allowSlideNext, a = this.snapGrid, l = this.rtlTranslate;
                this.allowSlidePrev = !0, this.allowSlideNext = !0;
                var h = -a[i] - this.getTranslate();
                i < s ? (t = n.length - 3 * s + i, t += s, this.slideTo(t, 0, !1, !0) && 0 !== h && this.setTranslate((l ? -this.translate : this.translate) - h)) : ("auto" === e.slidesPerView && i >= 2 * s || i >= n.length - s) && (t = -n.length + i + s, t += s, this.slideTo(t, 0, !1, !0) && 0 !== h && this.setTranslate((l ? -this.translate : this.translate) - h)), this.allowSlidePrev = o, this.allowSlideNext = r
            }, loopDestroy: function () {
                var t = this.$wrapperEl, e = this.params, i = this.slides;
                t.children("." + e.slideClass + "." + e.slideDuplicateClass).remove(), i.removeAttr("data-swiper-slide-index")
            }
        }, w = {
            setGrabCursor: function (t) {
                if (!(u.touch || !this.params.simulateTouch || this.params.watchOverflow && this.isLocked)) {
                    var e = this.el;
                    e.style.cursor = "move", e.style.cursor = t ? "-webkit-grabbing" : "-webkit-grab", e.style.cursor = t ? "-moz-grabbin" : "-moz-grab", e.style.cursor = t ? "grabbing" : "grab"
                }
            }, unsetGrabCursor: function () {
                u.touch || this.params.watchOverflow && this.isLocked || (this.el.style.cursor = "")
            }
        }, b = {
            appendSlide: function (t) {
                var e = this.$wrapperEl, i = this.params;
                if (i.loop && this.loopDestroy(), "object" == typeof t && "length" in t) for (var n = 0; n < t.length; n += 1) t[n] && e.append(t[n]); else e.append(t);
                i.loop && this.loopCreate(), i.observer && u.observer || this.update()
            }, prependSlide: function (t) {
                var e = this.params, i = this.$wrapperEl, n = this.activeIndex;
                e.loop && this.loopDestroy();
                var s = n + 1;
                if ("object" == typeof t && "length" in t) {
                    for (var o = 0; o < t.length; o += 1) t[o] && i.prepend(t[o]);
                    s = n + t.length
                } else i.prepend(t);
                e.loop && this.loopCreate(), e.observer && u.observer || this.update(), this.slideTo(s, 0, !1)
            }, addSlide: function (t, e) {
                var i = this.$wrapperEl, n = this.params, s = this.activeIndex;
                n.loop && (s -= this.loopedSlides, this.loopDestroy(), this.slides = i.children("." + n.slideClass));
                var o = this.slides.length;
                if (t <= 0) this.prependSlide(e); else if (t >= o) this.appendSlide(e); else {
                    for (var r = s > t ? s + 1 : s, a = [], l = o - 1; l >= t; l -= 1) {
                        var h = this.slides.eq(l);
                        h.remove(), a.unshift(h)
                    }
                    if ("object" == typeof e && "length" in e) {
                        for (var d = 0; d < e.length; d += 1) e[d] && i.append(e[d]);
                        r = s > t ? s + e.length : s
                    } else i.append(e);
                    for (var c = 0; c < a.length; c += 1) i.append(a[c]);
                    n.loop && this.loopCreate(), n.observer && u.observer || this.update(), n.loop ? this.slideTo(r + this.loopedSlides, 0, !1) : this.slideTo(r, 0, !1)
                }
            }, removeSlide: function (t) {
                var e = this.params, i = this.$wrapperEl, n = this.activeIndex;
                e.loop && (n -= this.loopedSlides, this.loopDestroy(), this.slides = i.children("." + e.slideClass));
                var s, o = n;
                if ("object" == typeof t && "length" in t) {
                    for (var r = 0; r < t.length; r += 1) s = t[r], this.slides[s] && this.slides.eq(s).remove(), s < o && (o -= 1);
                    o = Math.max(o, 0)
                } else s = t, this.slides[s] && this.slides.eq(s).remove(), s < o && (o -= 1), o = Math.max(o, 0);
                e.loop && this.loopCreate(), e.observer && u.observer || this.update(), e.loop ? this.slideTo(o + this.loopedSlides, 0, !1) : this.slideTo(o, 0, !1)
            }, removeAllSlides: function () {
                for (var t = [], e = 0; e < this.slides.length; e += 1) t.push(e);
                this.removeSlide(t)
            }
        }, x = function () {
            var t = s.navigator.userAgent, e = {
                    ios: !1,
                    android: !1,
                    androidChrome: !1,
                    desktop: !1,
                    windows: !1,
                    iphone: !1,
                    ipod: !1,
                    ipad: !1,
                    cordova: s.cordova || s.phonegap,
                    phonegap: s.cordova || s.phonegap
                }, i = t.match(/(Windows Phone);?[\s\/]+([\d.]+)?/), o = t.match(/(Android);?[\s\/]+([\d.]+)?/),
                r = t.match(/(iPad).*OS\s([\d_]+)/), a = t.match(/(iPod)(.*OS\s([\d_]+))?/),
                l = !r && t.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
            if (i && (e.os = "windows", e.osVersion = i[2], e.windows = !0), o && !i && (e.os = "android", e.osVersion = o[2], e.android = !0, e.androidChrome = t.toLowerCase().indexOf("chrome") >= 0), (r || l || a) && (e.os = "ios", e.ios = !0), l && !a && (e.osVersion = l[2].replace(/_/g, "."), e.iphone = !0), r && (e.osVersion = r[2].replace(/_/g, "."), e.ipad = !0), a && (e.osVersion = a[3] ? a[3].replace(/_/g, ".") : null, e.iphone = !0), e.ios && e.osVersion && t.indexOf("Version/") >= 0 && "10" === e.osVersion.split(".")[0] && (e.osVersion = t.toLowerCase().split("version/")[1].split(" ")[0]), e.desktop = !(e.os || e.android || e.webView), e.webView = (l || r || a) && t.match(/.*AppleWebKit(?!.*Safari)/i), e.os && "ios" === e.os) {
                var h = e.osVersion.split("."), d = n.querySelector('meta[name="viewport"]');
                e.minimalUi = !e.webView && (a || l) && (1 * h[0] == 7 ? 1 * h[1] >= 1 : 1 * h[0] > 7) && d && d.getAttribute("content").indexOf("minimal-ui") >= 0
            }
            return e.pixelRatio = s.devicePixelRatio || 1, e
        }(), C = {
            attachEvents: function () {
                var e = this.params, o = this.touchEvents, r = this.el, a = this.wrapperEl;
                this.onTouchStart = function (e) {
                    var i = this.touchEventsData, o = this.params, r = this.touches;
                    if (!this.animating || !o.preventIntercationOnTransition) {
                        var a = e;
                        if (a.originalEvent && (a = a.originalEvent), i.isTouchEvent = "touchstart" === a.type, (i.isTouchEvent || !("which" in a) || 3 !== a.which) && (!i.isTouched || !i.isMoved)) if (o.noSwiping && t(a.target).closest(o.noSwipingSelector ? o.noSwipingSelector : "." + o.noSwipingClass)[0]) this.allowClick = !0; else if (!o.swipeHandler || t(a).closest(o.swipeHandler)[0]) {
                            r.currentX = "touchstart" === a.type ? a.targetTouches[0].pageX : a.pageX, r.currentY = "touchstart" === a.type ? a.targetTouches[0].pageY : a.pageY;
                            var l = r.currentX, h = r.currentY;
                            if (!x.ios || x.cordova || !o.iOSEdgeSwipeDetection || !(l <= o.iOSEdgeSwipeThreshold || l >= s.screen.width - o.iOSEdgeSwipeThreshold)) {
                                if (d.extend(i, {
                                    isTouched: !0,
                                    isMoved: !1,
                                    allowTouchCallbacks: !0,
                                    isScrolling: void 0,
                                    startMoving: void 0
                                }), r.startX = l, r.startY = h, i.touchStartTime = d.now(), this.allowClick = !0, this.updateSize(), this.swipeDirection = void 0, o.threshold > 0 && (i.allowThresholdMove = !1), "touchstart" !== a.type) {
                                    var u = !0;
                                    t(a.target).is(i.formElements) && (u = !1), n.activeElement && t(n.activeElement).is(i.formElements) && n.activeElement !== a.target && n.activeElement.blur(), u && this.allowTouchMove && a.preventDefault()
                                }
                                this.emit("touchStart", a)
                            }
                        }
                    }
                }.bind(this), this.onTouchMove = function (e) {
                    var i = this.touchEventsData, s = this.params, o = this.touches, r = this.rtlTranslate, a = e;
                    if (a.originalEvent && (a = a.originalEvent), i.isTouched) {
                        if (!i.isTouchEvent || "mousemove" !== a.type) {
                            var l = "touchmove" === a.type ? a.targetTouches[0].pageX : a.pageX,
                                h = "touchmove" === a.type ? a.targetTouches[0].pageY : a.pageY;
                            if (a.preventedByNestedSwiper) return o.startX = l, void (o.startY = h);
                            if (!this.allowTouchMove) return this.allowClick = !1, void (i.isTouched && (d.extend(o, {
                                startX: l,
                                startY: h,
                                currentX: l,
                                currentY: h
                            }), i.touchStartTime = d.now()));
                            if (i.isTouchEvent && s.touchReleaseOnEdges && !s.loop) if (this.isVertical()) {
                                if (h < o.startY && this.translate <= this.maxTranslate() || h > o.startY && this.translate >= this.minTranslate()) return i.isTouched = !1, void (i.isMoved = !1)
                            } else if (l < o.startX && this.translate <= this.maxTranslate() || l > o.startX && this.translate >= this.minTranslate()) return;
                            if (i.isTouchEvent && n.activeElement && a.target === n.activeElement && t(a.target).is(i.formElements)) return i.isMoved = !0, void (this.allowClick = !1);
                            if (i.allowTouchCallbacks && this.emit("touchMove", a), !(a.targetTouches && a.targetTouches.length > 1)) {
                                o.currentX = l, o.currentY = h;
                                var u, c = o.currentX - o.startX, p = o.currentY - o.startY;
                                if (void 0 === i.isScrolling && (this.isHorizontal() && o.currentY === o.startY || this.isVertical() && o.currentX === o.startX ? i.isScrolling = !1 : c * c + p * p >= 25 && (u = 180 * Math.atan2(Math.abs(p), Math.abs(c)) / Math.PI, i.isScrolling = this.isHorizontal() ? u > s.touchAngle : 90 - u > s.touchAngle)), i.isScrolling && this.emit("touchMoveOpposite", a), "undefined" == typeof startMoving && (o.currentX === o.startX && o.currentY === o.startY || (i.startMoving = !0)), i.isScrolling) i.isTouched = !1; else if (i.startMoving) {
                                    this.allowClick = !1, a.preventDefault(), s.touchMoveStopPropagation && !s.nested && a.stopPropagation(), i.isMoved || (s.loop && this.loopFix(), i.startTranslate = this.getTranslate(), this.setTransition(0), this.animating && this.$wrapperEl.trigger("webkitTransitionEnd transitionend"), i.allowMomentumBounce = !1, !s.grabCursor || !0 !== this.allowSlideNext && !0 !== this.allowSlidePrev || this.setGrabCursor(!0), this.emit("sliderFirstMove", a)), this.emit("sliderMove", a), i.isMoved = !0;
                                    var f = this.isHorizontal() ? c : p;
                                    o.diff = f, f *= s.touchRatio, r && (f = -f), this.swipeDirection = f > 0 ? "prev" : "next", i.currentTranslate = f + i.startTranslate;
                                    var m = !0, g = s.resistanceRatio;
                                    if (s.touchReleaseOnEdges && (g = 0), f > 0 && i.currentTranslate > this.minTranslate() ? (m = !1, s.resistance && (i.currentTranslate = this.minTranslate() - 1 + Math.pow(-this.minTranslate() + i.startTranslate + f, g))) : f < 0 && i.currentTranslate < this.maxTranslate() && (m = !1, s.resistance && (i.currentTranslate = this.maxTranslate() + 1 - Math.pow(this.maxTranslate() - i.startTranslate - f, g))), m && (a.preventedByNestedSwiper = !0), !this.allowSlideNext && "next" === this.swipeDirection && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate), !this.allowSlidePrev && "prev" === this.swipeDirection && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate), s.threshold > 0) {
                                        if (!(Math.abs(f) > s.threshold || i.allowThresholdMove)) return void (i.currentTranslate = i.startTranslate);
                                        if (!i.allowThresholdMove) return i.allowThresholdMove = !0, o.startX = o.currentX, o.startY = o.currentY, i.currentTranslate = i.startTranslate, void (o.diff = this.isHorizontal() ? o.currentX - o.startX : o.currentY - o.startY)
                                    }
                                    s.followFinger && ((s.freeMode || s.watchSlidesProgress || s.watchSlidesVisibility) && (this.updateActiveIndex(), this.updateSlidesClasses()), s.freeMode && (0 === i.velocities.length && i.velocities.push({
                                        position: o[this.isHorizontal() ? "startX" : "startY"],
                                        time: i.touchStartTime
                                    }), i.velocities.push({
                                        position: o[this.isHorizontal() ? "currentX" : "currentY"],
                                        time: d.now()
                                    })), this.updateProgress(i.currentTranslate), this.setTranslate(i.currentTranslate))
                                }
                            }
                        }
                    } else i.startMoving && i.isScrolling && this.emit("touchMoveOpposite", a)
                }.bind(this), this.onTouchEnd = function (t) {
                    var e = this, i = e.touchEventsData, n = e.params, s = e.touches, o = e.rtlTranslate, r = e.$wrapperEl,
                        a = e.slidesGrid, l = e.snapGrid, h = t;
                    if (h.originalEvent && (h = h.originalEvent), i.allowTouchCallbacks && e.emit("touchEnd", h), i.allowTouchCallbacks = !1, !i.isTouched) return i.isMoved && n.grabCursor && e.setGrabCursor(!1), i.isMoved = !1, void (i.startMoving = !1);
                    n.grabCursor && i.isMoved && i.isTouched && (!0 === e.allowSlideNext || !0 === e.allowSlidePrev) && e.setGrabCursor(!1);
                    var u, c = d.now(), p = c - i.touchStartTime;
                    if (e.allowClick && (e.updateClickedSlide(h), e.emit("tap", h), p < 300 && c - i.lastClickTime > 300 && (i.clickTimeout && clearTimeout(i.clickTimeout), i.clickTimeout = d.nextTick(function () {
                        e && !e.destroyed && e.emit("click", h)
                    }, 300)), p < 300 && c - i.lastClickTime < 300 && (i.clickTimeout && clearTimeout(i.clickTimeout), e.emit("doubleTap", h))), i.lastClickTime = d.now(), d.nextTick(function () {
                        e.destroyed || (e.allowClick = !0)
                    }), !i.isTouched || !i.isMoved || !e.swipeDirection || 0 === s.diff || i.currentTranslate === i.startTranslate) return i.isTouched = !1, i.isMoved = !1, void (i.startMoving = !1);
                    if (i.isTouched = !1, i.isMoved = !1, i.startMoving = !1, u = n.followFinger ? o ? e.translate : -e.translate : -i.currentTranslate, n.freeMode) {
                        if (u < -e.minTranslate()) return void e.slideTo(e.activeIndex);
                        if (u > -e.maxTranslate()) return void (e.slides.length < l.length ? e.slideTo(l.length - 1) : e.slideTo(e.slides.length - 1));
                        if (n.freeModeMomentum) {
                            if (i.velocities.length > 1) {
                                var f = i.velocities.pop(), m = i.velocities.pop(), g = f.position - m.position,
                                    v = f.time - m.time;
                                e.velocity = g / v, e.velocity /= 2, Math.abs(e.velocity) < n.freeModeMinimumVelocity && (e.velocity = 0), (v > 150 || d.now() - f.time > 300) && (e.velocity = 0)
                            } else e.velocity = 0;
                            e.velocity *= n.freeModeMomentumVelocityRatio, i.velocities.length = 0;
                            var y = 1e3 * n.freeModeMomentumRatio, w = e.velocity * y, b = e.translate + w;
                            o && (b = -b);
                            var x, C, T = !1, E = 20 * Math.abs(e.velocity) * n.freeModeMomentumBounceRatio;
                            if (b < e.maxTranslate()) n.freeModeMomentumBounce ? (b + e.maxTranslate() < -E && (b = e.maxTranslate() - E), x = e.maxTranslate(), T = !0, i.allowMomentumBounce = !0) : b = e.maxTranslate(), n.loop && n.centeredSlides && (C = !0); else if (b > e.minTranslate()) n.freeModeMomentumBounce ? (b - e.minTranslate() > E && (b = e.minTranslate() + E), x = e.minTranslate(), T = !0, i.allowMomentumBounce = !0) : b = e.minTranslate(), n.loop && n.centeredSlides && (C = !0); else if (n.freeModeSticky) {
                                for (var S, _ = 0; _ < l.length; _ += 1) if (l[_] > -b) {
                                    S = _;
                                    break
                                }
                                b = -(b = Math.abs(l[S] - b) < Math.abs(l[S - 1] - b) || "next" === e.swipeDirection ? l[S] : l[S - 1])
                            }
                            if (C && e.once("transitionEnd", function () {
                                e.loopFix()
                            }), 0 !== e.velocity) y = o ? Math.abs((-b - e.translate) / e.velocity) : Math.abs((b - e.translate) / e.velocity); else if (n.freeModeSticky) return void e.slideToClosest();
                            n.freeModeMomentumBounce && T ? (e.updateProgress(x), e.setTransition(y), e.setTranslate(b), e.transitionStart(!0, e.swipeDirection), e.animating = !0, r.transitionEnd(function () {
                                e && !e.destroyed && i.allowMomentumBounce && (e.emit("momentumBounce"), e.setTransition(n.speed), e.setTranslate(x), r.transitionEnd(function () {
                                    e && !e.destroyed && e.transitionEnd()
                                }))
                            })) : e.velocity ? (e.updateProgress(b), e.setTransition(y), e.setTranslate(b), e.transitionStart(!0, e.swipeDirection), e.animating || (e.animating = !0, r.transitionEnd(function () {
                                e && !e.destroyed && e.transitionEnd()
                            }))) : e.updateProgress(b), e.updateActiveIndex(), e.updateSlidesClasses()
                        } else if (n.freeModeSticky) return void e.slideToClosest();
                        (!n.freeModeMomentum || p >= n.longSwipesMs) && (e.updateProgress(), e.updateActiveIndex(), e.updateSlidesClasses())
                    } else {
                        for (var k = 0, D = e.slidesSizesGrid[0], I = 0; I < a.length; I += n.slidesPerGroup) void 0 !== a[I + n.slidesPerGroup] ? u >= a[I] && u < a[I + n.slidesPerGroup] && (k = I, D = a[I + n.slidesPerGroup] - a[I]) : u >= a[I] && (k = I, D = a[a.length - 1] - a[a.length - 2]);
                        var $ = (u - a[k]) / D;
                        if (p > n.longSwipesMs) {
                            if (!n.longSwipes) return void e.slideTo(e.activeIndex);
                            "next" === e.swipeDirection && ($ >= n.longSwipesRatio ? e.slideTo(k + n.slidesPerGroup) : e.slideTo(k)), "prev" === e.swipeDirection && ($ > 1 - n.longSwipesRatio ? e.slideTo(k + n.slidesPerGroup) : e.slideTo(k))
                        } else {
                            if (!n.shortSwipes) return void e.slideTo(e.activeIndex);
                            "next" === e.swipeDirection && e.slideTo(k + n.slidesPerGroup), "prev" === e.swipeDirection && e.slideTo(k)
                        }
                    }
                }.bind(this), this.onClick = function (t) {
                    this.allowClick || (this.params.preventClicks && t.preventDefault(), this.params.preventClicksPropagation && this.animating && (t.stopPropagation(), t.stopImmediatePropagation()))
                }.bind(this);
                var l = "container" === e.touchEventsTarget ? r : a, h = !!e.nested;
                if (u.touch || !u.pointerEvents && !u.prefixedPointerEvents) {
                    if (u.touch) {
                        var c = !("touchstart" !== o.start || !u.passiveListener || !e.passiveListeners) && {
                            passive: !0,
                            capture: !1
                        };
                        l.addEventListener(o.start, this.onTouchStart, c), l.addEventListener(o.move, this.onTouchMove, u.passiveListener ? {
                            passive: !1,
                            capture: h
                        } : h), l.addEventListener(o.end, this.onTouchEnd, c)
                    }
                    (e.simulateTouch && !x.ios && !x.android || e.simulateTouch && !u.touch && x.ios) && (l.addEventListener("mousedown", this.onTouchStart, !1), n.addEventListener("mousemove", this.onTouchMove, h), n.addEventListener("mouseup", this.onTouchEnd, !1))
                } else l.addEventListener(o.start, this.onTouchStart, !1), n.addEventListener(o.move, this.onTouchMove, h), n.addEventListener(o.end, this.onTouchEnd, !1);
                (e.preventClicks || e.preventClicksPropagation) && l.addEventListener("click", this.onClick, !0), this.on(x.ios || x.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", i, !0)
            }, detachEvents: function () {
                var t = this.params, e = this.touchEvents, s = this.el, o = this.wrapperEl,
                    r = "container" === t.touchEventsTarget ? s : o, a = !!t.nested;
                if (u.touch || !u.pointerEvents && !u.prefixedPointerEvents) {
                    if (u.touch) {
                        var l = !("onTouchStart" !== e.start || !u.passiveListener || !t.passiveListeners) && {
                            passive: !0,
                            capture: !1
                        };
                        r.removeEventListener(e.start, this.onTouchStart, l), r.removeEventListener(e.move, this.onTouchMove, a), r.removeEventListener(e.end, this.onTouchEnd, l)
                    }
                    (t.simulateTouch && !x.ios && !x.android || t.simulateTouch && !u.touch && x.ios) && (r.removeEventListener("mousedown", this.onTouchStart, !1), n.removeEventListener("mousemove", this.onTouchMove, a), n.removeEventListener("mouseup", this.onTouchEnd, !1))
                } else r.removeEventListener(e.start, this.onTouchStart, !1), n.removeEventListener(e.move, this.onTouchMove, a), n.removeEventListener(e.end, this.onTouchEnd, !1);
                (t.preventClicks || t.preventClicksPropagation) && r.removeEventListener("click", this.onClick, !0), this.off(x.ios || x.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", i)
            }
        }, T = {
            setBreakpoint: function () {
                var t = this.activeIndex, e = this.initialized, i = this.loopedSlides;
                void 0 === i && (i = 0);
                var n = this.params, s = n.breakpoints;
                if (s && (!s || 0 !== Object.keys(s).length)) {
                    var o = this.getBreakpoint(s);
                    if (o && this.currentBreakpoint !== o) {
                        var r = o in s ? s[o] : this.originalParams, a = n.loop && r.slidesPerView !== n.slidesPerView;
                        d.extend(this.params, r), d.extend(this, {
                            allowTouchMove: this.params.allowTouchMove,
                            allowSlideNext: this.params.allowSlideNext,
                            allowSlidePrev: this.params.allowSlidePrev
                        }), this.currentBreakpoint = o, a && e && (this.loopDestroy(), this.loopCreate(), this.updateSlides(), this.slideTo(t - i + this.loopedSlides, 0, !1)), this.emit("breakpoint", r)
                    }
                }
            }, getBreakpoint: function (t) {
                if (t) {
                    var e = !1, i = [];
                    Object.keys(t).forEach(function (t) {
                        i.push(t)
                    }), i.sort(function (t, e) {
                        return parseInt(t, 10) - parseInt(e, 10)
                    });
                    for (var n = 0; n < i.length; n += 1) {
                        var o = i[n];
                        o >= s.innerWidth && !e && (e = o)
                    }
                    return e || "max"
                }
            }
        }, E = function () {
            return {
                isIE: !!s.navigator.userAgent.match(/Trident/g) || !!s.navigator.userAgent.match(/MSIE/g),
                isSafari: (t = s.navigator.userAgent.toLowerCase(), t.indexOf("safari") >= 0 && t.indexOf("chrome") < 0 && t.indexOf("android") < 0),
                isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(s.navigator.userAgent)
            };
            var t
        }(), S = {
            init: !0,
            direction: "horizontal",
            touchEventsTarget: "container",
            initialSlide: 0,
            speed: 300,
            preventIntercationOnTransition: !1,
            iOSEdgeSwipeDetection: !1,
            iOSEdgeSwipeThreshold: 20,
            freeMode: !1,
            freeModeMomentum: !0,
            freeModeMomentumRatio: 1,
            freeModeMomentumBounce: !0,
            freeModeMomentumBounceRatio: 1,
            freeModeMomentumVelocityRatio: 1,
            freeModeSticky: !1,
            freeModeMinimumVelocity: .02,
            autoHeight: !1,
            setWrapperSize: !1,
            virtualTranslate: !1,
            effect: "slide",
            breakpoints: void 0,
            spaceBetween: 0,
            slidesPerView: 1,
            slidesPerColumn: 1,
            slidesPerColumnFill: "column",
            slidesPerGroup: 1,
            centeredSlides: !1,
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0,
            normalizeSlideIndex: !0,
            watchOverflow: !1,
            roundLengths: !1,
            touchRatio: 1,
            touchAngle: 45,
            simulateTouch: !0,
            shortSwipes: !0,
            longSwipes: !0,
            longSwipesRatio: .5,
            longSwipesMs: 300,
            followFinger: !0,
            allowTouchMove: !0,
            threshold: 0,
            touchMoveStopPropagation: !0,
            touchReleaseOnEdges: !1,
            uniqueNavElements: !0,
            resistance: !0,
            resistanceRatio: .85,
            watchSlidesProgress: !1,
            watchSlidesVisibility: !1,
            grabCursor: !1,
            preventClicks: !0,
            preventClicksPropagation: !0,
            slideToClickedSlide: !1,
            preloadImages: !0,
            updateOnImagesReady: !0,
            loop: !1,
            loopAdditionalSlides: 0,
            loopedSlides: null,
            loopFillGroupWithBlank: !1,
            allowSlidePrev: !0,
            allowSlideNext: !0,
            swipeHandler: null,
            noSwiping: !0,
            noSwipingClass: "swiper-no-swiping",
            noSwipingSelector: null,
            passiveListeners: !0,
            containerModifierClass: "swiper-container-",
            slideClass: "swiper-slide",
            slideBlankClass: "swiper-slide-invisible-blank",
            slideActiveClass: "swiper-slide-active",
            slideDuplicateActiveClass: "swiper-slide-duplicate-active",
            slideVisibleClass: "swiper-slide-visible",
            slideDuplicateClass: "swiper-slide-duplicate",
            slideNextClass: "swiper-slide-next",
            slideDuplicateNextClass: "swiper-slide-duplicate-next",
            slidePrevClass: "swiper-slide-prev",
            slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
            wrapperClass: "swiper-wrapper",
            runCallbacksOnInit: !0
        }, _ = {
            update: f,
            translate: m,
            transition: g,
            slide: v,
            loop: y,
            grabCursor: w,
            manipulation: b,
            events: C,
            breakpoints: T,
            checkOverflow: {
                checkOverflow: function () {
                    var t = this.isLocked;
                    this.isLocked = 1 === this.snapGrid.length, this.allowSlideNext = !this.isLocked, this.allowSlidePrev = !this.isLocked, t !== this.isLocked && this.emit(this.isLocked ? "lock" : "unlock"), t && t !== this.isLocked && (this.isEnd = !1, this.navigation.update())
                }
            },
            classes: {
                addClasses: function () {
                    var t = this.classNames, e = this.params, i = this.rtl, n = this.$el, s = [];
                    s.push(e.direction), e.freeMode && s.push("free-mode"), u.flexbox || s.push("no-flexbox"), e.autoHeight && s.push("autoheight"), i && s.push("rtl"), e.slidesPerColumn > 1 && s.push("multirow"),
                    x.android && s.push("android"), x.ios && s.push("ios"), E.isIE && (u.pointerEvents || u.prefixedPointerEvents) && s.push("wp8-" + e.direction), s.forEach(function (i) {
                        t.push(e.containerModifierClass + i)
                    }), n.addClass(t.join(" "))
                }, removeClasses: function () {
                    var t = this.$el, e = this.classNames;
                    t.removeClass(e.join(" "))
                }
            },
            images: {
                loadImage: function (t, e, i, n, o, r) {
                    function a() {
                        r && r()
                    }

                    var l;
                    t.complete && o ? a() : e ? ((l = new s.Image).onload = a, l.onerror = a, n && (l.sizes = n), i && (l.srcset = i), e && (l.src = e)) : a()
                }, preloadImages: function () {
                    function t() {
                        void 0 !== e && null !== e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")))
                    }

                    var e = this;
                    e.imagesToLoad = e.$el.find("img");
                    for (var i = 0; i < e.imagesToLoad.length; i += 1) {
                        var n = e.imagesToLoad[i];
                        e.loadImage(n, n.currentSrc || n.getAttribute("src"), n.srcset || n.getAttribute("srcset"), n.sizes || n.getAttribute("sizes"), !0, t)
                    }
                }
            }
        }, k = {}, D = function (e) {
            function i() {
                for (var n, s, o, r = [], a = arguments.length; a--;) r[a] = arguments[a];
                1 === r.length && r[0].constructor && r[0].constructor === Object ? o = r[0] : (s = (n = r)[0], o = n[1]), o || (o = {}), o = d.extend({}, o), s && !o.el && (o.el = s), e.call(this, o), Object.keys(_).forEach(function (t) {
                    Object.keys(_[t]).forEach(function (e) {
                        i.prototype[e] || (i.prototype[e] = _[t][e])
                    })
                });
                var l = this;
                void 0 === l.modules && (l.modules = {}), Object.keys(l.modules).forEach(function (t) {
                    var e = l.modules[t];
                    if (e.params) {
                        var i = Object.keys(e.params)[0], n = e.params[i];
                        if ("object" != typeof n) return;
                        if (!(i in o && "enabled" in n)) return;
                        !0 === o[i] && (o[i] = {enabled: !0}), "object" != typeof o[i] || "enabled" in o[i] || (o[i].enabled = !0), o[i] || (o[i] = {enabled: !1})
                    }
                });
                var h = d.extend({}, S);
                l.useModulesParams(h), l.params = d.extend({}, h, k, o), l.originalParams = d.extend({}, l.params), l.passedParams = d.extend({}, o), l.$ = t;
                var c = t(l.params.el);
                if (s = c[0]) {
                    if (c.length > 1) {
                        var p = [];
                        return c.each(function (t, e) {
                            var n = d.extend({}, o, {el: e});
                            p.push(new i(n))
                        }), p
                    }
                    s.swiper = l, c.data("swiper", l);
                    var f, m, g = c.children("." + l.params.wrapperClass);
                    return d.extend(l, {
                        $el: c,
                        el: s,
                        $wrapperEl: g,
                        wrapperEl: g[0],
                        classNames: [],
                        slides: t(),
                        slidesGrid: [],
                        snapGrid: [],
                        slidesSizesGrid: [],
                        isHorizontal: function () {
                            return "horizontal" === l.params.direction
                        },
                        isVertical: function () {
                            return "vertical" === l.params.direction
                        },
                        rtl: "rtl" === s.dir.toLowerCase() || "rtl" === c.css("direction"),
                        rtlTranslate: "horizontal" === l.params.direction && ("rtl" === s.dir.toLowerCase() || "rtl" === c.css("direction")),
                        wrongRTL: "-webkit-box" === g.css("display"),
                        activeIndex: 0,
                        realIndex: 0,
                        isBeginning: !0,
                        isEnd: !1,
                        translate: 0,
                        previousTranslate: 0,
                        progress: 0,
                        velocity: 0,
                        animating: !1,
                        allowSlideNext: l.params.allowSlideNext,
                        allowSlidePrev: l.params.allowSlidePrev,
                        touchEvents: (f = ["touchstart", "touchmove", "touchend"], m = ["mousedown", "mousemove", "mouseup"], u.pointerEvents ? m = ["pointerdown", "pointermove", "pointerup"] : u.prefixedPointerEvents && (m = ["MSPointerDown", "MSPointerMove", "MSPointerUp"]), l.touchEventsTouch = {
                            start: f[0],
                            move: f[1],
                            end: f[2]
                        }, l.touchEventsDesktop = {
                            start: m[0],
                            move: m[1],
                            end: m[2]
                        }, u.touch || !l.params.simulateTouch ? l.touchEventsTouch : l.touchEventsDesktop),
                        touchEventsData: {
                            isTouched: void 0,
                            isMoved: void 0,
                            allowTouchCallbacks: void 0,
                            touchStartTime: void 0,
                            isScrolling: void 0,
                            currentTranslate: void 0,
                            startTranslate: void 0,
                            allowThresholdMove: void 0,
                            formElements: "input, select, option, textarea, button, video",
                            lastClickTime: d.now(),
                            clickTimeout: void 0,
                            velocities: [],
                            allowMomentumBounce: void 0,
                            isTouchEvent: void 0,
                            startMoving: void 0
                        },
                        allowClick: !0,
                        allowTouchMove: l.params.allowTouchMove,
                        touches: {startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0},
                        imagesToLoad: [],
                        imagesLoaded: 0
                    }), l.useModules(), l.params.init && l.init(), l
                }
            }

            e && (i.__proto__ = e), i.prototype = Object.create(e && e.prototype), i.prototype.constructor = i;
            var n = {
                extendedDefaults: {configurable: !0},
                defaults: {configurable: !0},
                Class: {configurable: !0},
                $: {configurable: !0}
            };
            return i.prototype.slidesPerViewDynamic = function () {
                var t = this.params, e = this.slides, i = this.slidesGrid, n = this.size, s = this.activeIndex, o = 1;
                if (t.centeredSlides) {
                    for (var r, a = e[s].swiperSlideSize, l = s + 1; l < e.length; l += 1) e[l] && !r && (o += 1, (a += e[l].swiperSlideSize) > n && (r = !0));
                    for (var h = s - 1; h >= 0; h -= 1) e[h] && !r && (o += 1, (a += e[h].swiperSlideSize) > n && (r = !0))
                } else for (var d = s + 1; d < e.length; d += 1) i[d] - i[s] < n && (o += 1);
                return o
            }, i.prototype.update = function () {
                function t() {
                    var t = e.rtlTranslate ? -1 * e.translate : e.translate,
                        i = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
                    e.setTranslate(i), e.updateActiveIndex(), e.updateSlidesClasses()
                }

                var e = this;
                if (e && !e.destroyed) {
                    var i = e.snapGrid, n = e.params;
                    n.breakpoints && e.setBreakpoint(), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.params.freeMode ? (t(), e.params.autoHeight && e.updateAutoHeight()) : (("auto" === e.params.slidesPerView || e.params.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0)) || t(), n.watchOverflow && i !== e.snapGrid && e.checkOverflow(), e.emit("update")
                }
            }, i.prototype.init = function () {
                this.initialized || (this.emit("beforeInit"), this.params.breakpoints && this.setBreakpoint(), this.addClasses(), this.params.loop && this.loopCreate(), this.updateSize(), this.updateSlides(), this.params.watchOverflow && this.checkOverflow(), this.params.grabCursor && this.setGrabCursor(), this.params.preloadImages && this.preloadImages(), this.params.loop ? this.slideTo(this.params.initialSlide + this.loopedSlides, 0, this.params.runCallbacksOnInit) : this.slideTo(this.params.initialSlide, 0, this.params.runCallbacksOnInit), this.attachEvents(), this.initialized = !0, this.emit("init"))
            }, i.prototype.destroy = function (t, e) {
                void 0 === t && (t = !0), void 0 === e && (e = !0);
                var i = this, n = i.params, s = i.$el, o = i.$wrapperEl, r = i.slides;
                return void 0 === i.params || i.destroyed ? null : (i.emit("beforeDestroy"), i.initialized = !1, i.detachEvents(), n.loop && i.loopDestroy(), e && (i.removeClasses(), s.removeAttr("style"), o.removeAttr("style"), r && r.length && r.removeClass([n.slideVisibleClass, n.slideActiveClass, n.slideNextClass, n.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index").removeAttr("data-swiper-column").removeAttr("data-swiper-row")), i.emit("destroy"), Object.keys(i.eventsListeners).forEach(function (t) {
                    i.off(t)
                }), !1 !== t && (i.$el[0].swiper = null, i.$el.data("swiper", null), d.deleteProps(i)), i.destroyed = !0, null)
            }, i.extendDefaults = function (t) {
                d.extend(k, t)
            }, n.extendedDefaults.get = function () {
                return k
            }, n.defaults.get = function () {
                return S
            }, n.Class.get = function () {
                return e
            }, n.$.get = function () {
                return t
            }, Object.defineProperties(i, n), i
        }(c), I = {name: "device", proto: {device: x}, "static": {device: x}},
        $ = {name: "support", proto: {support: u}, "static": {support: u}},
        M = {name: "browser", proto: {browser: E}, "static": {browser: E}}, P = {
            name: "resize", create: function () {
                var t = this;
                d.extend(t, {
                    resize: {
                        resizeHandler: function () {
                            t && !t.destroyed && t.initialized && (t.emit("beforeResize"), t.emit("resize"))
                        }, orientationChangeHandler: function () {
                            t && !t.destroyed && t.initialized && t.emit("orientationchange")
                        }
                    }
                })
            }, on: {
                init: function () {
                    s.addEventListener("resize", this.resize.resizeHandler), s.addEventListener("orientationchange", this.resize.orientationChangeHandler)
                }, destroy: function () {
                    s.removeEventListener("resize", this.resize.resizeHandler), s.removeEventListener("orientationchange", this.resize.orientationChangeHandler)
                }
            }
        }, z = {
            func: s.MutationObserver || s.WebkitMutationObserver, attach: function (t, e) {
                void 0 === e && (e = {});
                var i = this, n = new (0, z.func)(function (t) {
                    t.forEach(function (t) {
                        i.emit("observerUpdate", t)
                    })
                });
                n.observe(t, {
                    attributes: void 0 === e.attributes || e.attributes,
                    childList: void 0 === e.childList || e.childList,
                    characterData: void 0 === e.characterData || e.characterData
                }), i.observer.observers.push(n)
            }, init: function () {
                if (u.observer && this.params.observer) {
                    if (this.params.observeParents) for (var t = this.$el.parents(), e = 0; e < t.length; e += 1) this.observer.attach(t[e]);
                    this.observer.attach(this.$el[0], {childList: !1}), this.observer.attach(this.$wrapperEl[0], {attributes: !1})
                }
            }, destroy: function () {
                this.observer.observers.forEach(function (t) {
                    t.disconnect()
                }), this.observer.observers = []
            }
        }, A = {
            name: "observer", params: {observer: !1, observeParents: !1}, create: function () {
                d.extend(this, {
                    observer: {
                        init: z.init.bind(this),
                        attach: z.attach.bind(this),
                        destroy: z.destroy.bind(this),
                        observers: []
                    }
                })
            }, on: {
                init: function () {
                    this.observer.init()
                }, destroy: function () {
                    this.observer.destroy()
                }
            }
        }, O = {
            update: function (t) {
                function e() {
                    i.updateSlides(), i.updateProgress(), i.updateSlidesClasses(), i.lazy && i.params.lazy.enabled && i.lazy.load()
                }

                var i = this, n = i.params, s = n.slidesPerView, o = n.slidesPerGroup, r = n.centeredSlides, a = i.virtual,
                    l = a.from, h = a.to, u = a.slides, c = a.slidesGrid, p = a.renderSlide, f = a.offset;
                i.updateActiveIndex();
                var m, g, v, y = i.activeIndex || 0;
                m = i.rtlTranslate ? "right" : i.isHorizontal() ? "left" : "top", r ? (g = Math.floor(s / 2) + o, v = Math.floor(s / 2) + o) : (g = s + (o - 1), v = o);
                var w = Math.max((y || 0) - v, 0), b = Math.min((y || 0) + g, u.length - 1),
                    x = (i.slidesGrid[w] || 0) - (i.slidesGrid[0] || 0);
                if (d.extend(i.virtual, {
                    from: w,
                    to: b,
                    offset: x,
                    slidesGrid: i.slidesGrid
                }), l === w && h === b && !t) return i.slidesGrid !== c && x !== f && i.slides.css(m, x + "px"), void i.updateProgress();
                if (i.params.virtual.renderExternal) return i.params.virtual.renderExternal.call(i, {
                    offset: x,
                    from: w,
                    to: b,
                    slides: function () {
                        for (var t = [], e = w; e <= b; e += 1) t.push(u[e]);
                        return t
                    }()
                }), void e();
                var C = [], T = [];
                if (t) i.$wrapperEl.find("." + i.params.slideClass).remove(); else for (var E = l; E <= h; E += 1) (E < w || E > b) && i.$wrapperEl.find("." + i.params.slideClass + '[data-swiper-slide-index="' + E + '"]').remove();
                for (var S = 0; S < u.length; S += 1) S >= w && S <= b && (void 0 === h || t ? T.push(S) : (S > h && T.push(S), S < l && C.push(S)));
                T.forEach(function (t) {
                    i.$wrapperEl.append(p(u[t], t))
                }), C.sort(function (t, e) {
                    return t < e
                }).forEach(function (t) {
                    i.$wrapperEl.prepend(p(u[t], t))
                }), i.$wrapperEl.children(".swiper-slide").css(m, x + "px"), e()
            }, renderSlide: function (e, i) {
                var n = this.params.virtual;
                if (n.cache && this.virtual.cache[i]) return this.virtual.cache[i];
                var s = t(n.renderSlide ? n.renderSlide.call(this, e, i) : '<div class="' + this.params.slideClass + '" data-swiper-slide-index="' + i + '">' + e + "</div>");
                return s.attr("data-swiper-slide-index") || s.attr("data-swiper-slide-index", i), n.cache && (this.virtual.cache[i] = s), s
            }, appendSlide: function (t) {
                this.virtual.slides.push(t), this.virtual.update(!0)
            }, prependSlide: function (t) {
                if (this.virtual.slides.unshift(t), this.params.virtual.cache) {
                    var e = this.virtual.cache, i = {};
                    Object.keys(e).forEach(function (t) {
                        i[t + 1] = e[t]
                    }), this.virtual.cache = i
                }
                this.virtual.update(!0), this.slideNext(0)
            }
        }, L = {
            name: "virtual",
            params: {virtual: {enabled: !1, slides: [], cache: !0, renderSlide: null, renderExternal: null}},
            create: function () {
                d.extend(this, {
                    virtual: {
                        update: O.update.bind(this),
                        appendSlide: O.appendSlide.bind(this),
                        prependSlide: O.prependSlide.bind(this),
                        renderSlide: O.renderSlide.bind(this),
                        slides: this.params.virtual.slides,
                        cache: {}
                    }
                })
            },
            on: {
                beforeInit: function () {
                    if (this.params.virtual.enabled) {
                        this.classNames.push(this.params.containerModifierClass + "virtual");
                        var t = {watchSlidesProgress: !0};
                        d.extend(this.params, t), d.extend(this.originalParams, t), this.virtual.update()
                    }
                }, setTranslate: function () {
                    this.params.virtual.enabled && this.virtual.update()
                }
            }
        }, N = {
            handle: function (t) {
                var e = this.rtlTranslate, i = t;
                i.originalEvent && (i = i.originalEvent);
                var o = i.keyCode || i.charCode;
                if (!this.allowSlideNext && (this.isHorizontal() && 39 === o || this.isVertical() && 40 === o)) return !1;
                if (!this.allowSlidePrev && (this.isHorizontal() && 37 === o || this.isVertical() && 38 === o)) return !1;
                if (!(i.shiftKey || i.altKey || i.ctrlKey || i.metaKey || n.activeElement && n.activeElement.nodeName && ("input" === n.activeElement.nodeName.toLowerCase() || "textarea" === n.activeElement.nodeName.toLowerCase()))) {
                    if (this.params.keyboard.onlyInViewport && (37 === o || 39 === o || 38 === o || 40 === o)) {
                        var r = !1;
                        if (this.$el.parents("." + this.params.slideClass).length > 0 && 0 === this.$el.parents("." + this.params.slideActiveClass).length) return;
                        var a = s.innerWidth, l = s.innerHeight, h = this.$el.offset();
                        e && (h.left -= this.$el[0].scrollLeft);
                        for (var d = [[h.left, h.top], [h.left + this.width, h.top], [h.left, h.top + this.height], [h.left + this.width, h.top + this.height]], u = 0; u < d.length; u += 1) {
                            var c = d[u];
                            c[0] >= 0 && c[0] <= a && c[1] >= 0 && c[1] <= l && (r = !0)
                        }
                        if (!r) return
                    }
                    this.isHorizontal() ? (37 !== o && 39 !== o || (i.preventDefault ? i.preventDefault() : i.returnValue = !1), (39 === o && !e || 37 === o && e) && this.slideNext(), (37 === o && !e || 39 === o && e) && this.slidePrev()) : (38 !== o && 40 !== o || (i.preventDefault ? i.preventDefault() : i.returnValue = !1), 40 === o && this.slideNext(), 38 === o && this.slidePrev()), this.emit("keyPress", o)
                }
            }, enable: function () {
                this.keyboard.enabled || (t(n).on("keydown", this.keyboard.handle), this.keyboard.enabled = !0)
            }, disable: function () {
                this.keyboard.enabled && (t(n).off("keydown", this.keyboard.handle), this.keyboard.enabled = !1)
            }
        }, j = {
            name: "keyboard", params: {keyboard: {enabled: !1, onlyInViewport: !0}}, create: function () {
                d.extend(this, {
                    keyboard: {
                        enabled: !1,
                        enable: N.enable.bind(this),
                        disable: N.disable.bind(this),
                        handle: N.handle.bind(this)
                    }
                })
            }, on: {
                init: function () {
                    this.params.keyboard.enabled && this.keyboard.enable()
                }, destroy: function () {
                    this.keyboard.enabled && this.keyboard.disable()
                }
            }
        }, W = {
            lastScrollTime: d.now(), event: s.navigator.userAgent.indexOf("firefox") > -1 ? "DOMMouseScroll" : function () {
                var t = "onwheel" in n;
                if (!t) {
                    var e = n.createElement("div");
                    e.setAttribute("onwheel", "return;"), t = "function" == typeof e.onwheel
                }
                return !t && n.implementation && n.implementation.hasFeature && !0 !== n.implementation.hasFeature("", "") && (t = n.implementation.hasFeature("Events.wheel", "3.0")), t
            }() ? "wheel" : "mousewheel", normalize: function (t) {
                var e = 0, i = 0, n = 0, s = 0;
                return "detail" in t && (i = t.detail), "wheelDelta" in t && (i = -t.wheelDelta / 120), "wheelDeltaY" in t && (i = -t.wheelDeltaY / 120), "wheelDeltaX" in t && (e = -t.wheelDeltaX / 120), "axis" in t && t.axis === t.HORIZONTAL_AXIS && (e = i, i = 0), n = 10 * e, s = 10 * i, "deltaY" in t && (s = t.deltaY), "deltaX" in t && (n = t.deltaX), (n || s) && t.deltaMode && (1 === t.deltaMode ? (n *= 40, s *= 40) : (n *= 800, s *= 800)), n && !e && (e = n < 1 ? -1 : 1), s && !i && (i = s < 1 ? -1 : 1), {
                    spinX: e,
                    spinY: i,
                    pixelX: n,
                    pixelY: s
                }
            }, handleMouseEnter: function () {
                this.mouseEntered = !0
            }, handleMouseLeave: function () {
                this.mouseEntered = !1
            }, handle: function (t) {
                var e = t, i = this, n = i.params.mousewheel;
                if (!i.mouseEntered && !n.releaseOnEdges) return !0;
                e.originalEvent && (e = e.originalEvent);
                var o = 0, r = i.rtlTranslate ? -1 : 1, a = W.normalize(e);
                if (n.forceToAxis) if (i.isHorizontal()) {
                    if (!(Math.abs(a.pixelX) > Math.abs(a.pixelY))) return !0;
                    o = a.pixelX * r
                } else {
                    if (!(Math.abs(a.pixelY) > Math.abs(a.pixelX))) return !0;
                    o = a.pixelY
                } else o = Math.abs(a.pixelX) > Math.abs(a.pixelY) ? -a.pixelX * r : -a.pixelY;
                if (0 === o) return !0;
                if (n.invert && (o = -o), i.params.freeMode) {
                    i.params.loop && i.loopFix();
                    var l = i.getTranslate() + o * n.sensitivity, h = i.isBeginning, u = i.isEnd;
                    if (l >= i.minTranslate() && (l = i.minTranslate()), l <= i.maxTranslate() && (l = i.maxTranslate()), i.setTransition(0), i.setTranslate(l), i.updateProgress(), i.updateActiveIndex(), i.updateSlidesClasses(), (!h && i.isBeginning || !u && i.isEnd) && i.updateSlidesClasses(), i.params.freeModeSticky && (clearTimeout(i.mousewheel.timeout), i.mousewheel.timeout = d.nextTick(function () {
                        i.slideToClosest()
                    }, 300)), i.emit("scroll", e), i.params.autoplay && i.params.autoplayDisableOnInteraction && i.autoplay.stop(), l === i.minTranslate() || l === i.maxTranslate()) return !0
                } else {
                    if (d.now() - i.mousewheel.lastScrollTime > 60) if (o < 0) if (i.isEnd && !i.params.loop || i.animating) {
                        if (n.releaseOnEdges) return !0
                    } else i.slideNext(), i.emit("scroll", e); else if (i.isBeginning && !i.params.loop || i.animating) {
                        if (n.releaseOnEdges) return !0
                    } else i.slidePrev(), i.emit("scroll", e);
                    i.mousewheel.lastScrollTime = (new s.Date).getTime()
                }
                return e.preventDefault ? e.preventDefault() : e.returnValue = !1, !1
            }, enable: function () {
                if (!W.event) return !1;
                if (this.mousewheel.enabled) return !1;
                var e = this.$el;
                return "container" !== this.params.mousewheel.eventsTarged && (e = t(this.params.mousewheel.eventsTarged)), e.on("mouseenter", this.mousewheel.handleMouseEnter), e.on("mouseleave", this.mousewheel.handleMouseLeave), e.on(W.event, this.mousewheel.handle), this.mousewheel.enabled = !0, !0
            }, disable: function () {
                if (!W.event) return !1;
                if (!this.mousewheel.enabled) return !1;
                var e = this.$el;
                return "container" !== this.params.mousewheel.eventsTarged && (e = t(this.params.mousewheel.eventsTarged)), e.off(W.event, this.mousewheel.handle), this.mousewheel.enabled = !1, !0
            }
        }, R = {
            update: function () {
                var t = this.params.navigation;
                if (!this.params.loop) {
                    var e = this.navigation, i = e.$nextEl, n = e.$prevEl;
                    n && n.length > 0 && (this.isBeginning ? n.addClass(t.disabledClass) : n.removeClass(t.disabledClass), n[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](t.lockClass)), i && i.length > 0 && (this.isEnd ? i.addClass(t.disabledClass) : i.removeClass(t.disabledClass), i[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](t.lockClass))
                }
            }, init: function () {
                var e, i, n = this, s = n.params.navigation;
                (s.nextEl || s.prevEl) && (s.nextEl && (e = t(s.nextEl), n.params.uniqueNavElements && "string" == typeof s.nextEl && e.length > 1 && 1 === n.$el.find(s.nextEl).length && (e = n.$el.find(s.nextEl))), s.prevEl && (i = t(s.prevEl), n.params.uniqueNavElements && "string" == typeof s.prevEl && i.length > 1 && 1 === n.$el.find(s.prevEl).length && (i = n.$el.find(s.prevEl))), e && e.length > 0 && e.on("click", function (t) {
                    t.preventDefault(), n.isEnd && !n.params.loop || n.slideNext()
                }), i && i.length > 0 && i.on("click", function (t) {
                    t.preventDefault(), n.isBeginning && !n.params.loop || n.slidePrev()
                }), d.extend(n.navigation, {$nextEl: e, nextEl: e && e[0], $prevEl: i, prevEl: i && i[0]}))
            }, destroy: function () {
                var t = this.navigation, e = t.$nextEl, i = t.$prevEl;
                e && e.length && (e.off("click"), e.removeClass(this.params.navigation.disabledClass)), i && i.length && (i.off("click"), i.removeClass(this.params.navigation.disabledClass))
            }
        }, H = {
            update: function () {
                var e = this.rtl, i = this.params.pagination;
                if (i.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
                    var n,
                        s = this.virtual && this.params.virtual.enabled ? this.virtual.slides.length : this.slides.length,
                        o = this.pagination.$el,
                        r = this.params.loop ? Math.ceil((s - 2 * this.loopedSlides) / this.params.slidesPerGroup) : this.snapGrid.length;
                    if (this.params.loop ? ((n = Math.ceil((this.activeIndex - this.loopedSlides) / this.params.slidesPerGroup)) > s - 1 - 2 * this.loopedSlides && (n -= s - 2 * this.loopedSlides), n > r - 1 && (n -= r), n < 0 && "bullets" !== this.params.paginationType && (n = r + n)) : n = void 0 !== this.snapIndex ? this.snapIndex : this.activeIndex || 0, "bullets" === i.type && this.pagination.bullets && this.pagination.bullets.length > 0) {
                        var a, l, h, d = this.pagination.bullets;
                        if (i.dynamicBullets && (this.pagination.bulletSize = d.eq(0)[this.isHorizontal() ? "outerWidth" : "outerHeight"](!0), o.css(this.isHorizontal() ? "width" : "height", this.pagination.bulletSize * (i.dynamicMainBullets + 4) + "px"), i.dynamicMainBullets > 1 && void 0 !== this.previousIndex && (this.pagination.dynamicBulletIndex += n - this.previousIndex, this.pagination.dynamicBulletIndex > i.dynamicMainBullets - 1 ? this.pagination.dynamicBulletIndex = i.dynamicMainBullets - 1 : this.pagination.dynamicBulletIndex < 0 && (this.pagination.dynamicBulletIndex = 0)), a = n - this.pagination.dynamicBulletIndex, h = ((l = a + (Math.min(d.length, i.dynamicMainBullets) - 1)) + a) / 2), d.removeClass(i.bulletActiveClass + " " + i.bulletActiveClass + "-next " + i.bulletActiveClass + "-next-next " + i.bulletActiveClass + "-prev " + i.bulletActiveClass + "-prev-prev " + i.bulletActiveClass + "-main"), o.length > 1) d.each(function (e, s) {
                            var o = t(s), r = o.index();
                            r === n && o.addClass(i.bulletActiveClass), i.dynamicBullets && (r >= a && r <= l && o.addClass(i.bulletActiveClass + "-main"), r === a && o.prev().addClass(i.bulletActiveClass + "-prev").prev().addClass(i.bulletActiveClass + "-prev-prev"), r === l && o.next().addClass(i.bulletActiveClass + "-next").next().addClass(i.bulletActiveClass + "-next-next"))
                        }); else if (d.eq(n).addClass(i.bulletActiveClass), i.dynamicBullets) {
                            for (var u = d.eq(a), c = d.eq(l), p = a; p <= l; p += 1) d.eq(p).addClass(i.bulletActiveClass + "-main");
                            u.prev().addClass(i.bulletActiveClass + "-prev").prev().addClass(i.bulletActiveClass + "-prev-prev"), c.next().addClass(i.bulletActiveClass + "-next").next().addClass(i.bulletActiveClass + "-next-next")
                        }
                        if (i.dynamicBullets) {
                            var f = Math.min(d.length, i.dynamicMainBullets + 4),
                                m = (this.pagination.bulletSize * f - this.pagination.bulletSize) / 2 - h * this.pagination.bulletSize,
                                g = e ? "right" : "left";
                            d.css(this.isHorizontal() ? g : "top", m + "px")
                        }
                    }
                    if ("fraction" === i.type && (o.find("." + i.currentClass).text(i.formatFractionCurrent(n + 1)), o.find("." + i.totalClass).text(i.formatFractionTotal(r))), "progressbar" === i.type) {
                        var v;
                        v = i.progressbarOpposite ? this.isHorizontal() ? "vertical" : "horizontal" : this.isHorizontal() ? "horizontal" : "vertical";
                        var y = (n + 1) / r, w = 1, b = 1;
                        "horizontal" === v ? w = y : b = y, o.find("." + i.progressbarFillClass).transform("translate3d(0,0,0) scaleX(" + w + ") scaleY(" + b + ")").transition(this.params.speed)
                    }
                    "custom" === i.type && i.renderCustom ? (o.html(i.renderCustom(this, n + 1, r)), this.emit("paginationRender", this, o[0])) : this.emit("paginationUpdate", this, o[0]), o[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](i.lockClass)
                }
            }, render: function () {
                var t = this.params.pagination;
                if (t.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
                    var e = this.virtual && this.params.virtual.enabled ? this.virtual.slides.length : this.slides.length,
                        i = this.pagination.$el, n = "";
                    if ("bullets" === t.type) {
                        for (var s = this.params.loop ? Math.ceil((e - 2 * this.loopedSlides) / this.params.slidesPerGroup) : this.snapGrid.length, o = 0; o < s; o += 1) n += t.renderBullet ? t.renderBullet.call(this, o, t.bulletClass) : "<" + t.bulletElement + ' class="' + t.bulletClass + '"></' + t.bulletElement + ">";
                        i.html(n), this.pagination.bullets = i.find("." + t.bulletClass)
                    }
                    "fraction" === t.type && (n = t.renderFraction ? t.renderFraction.call(this, t.currentClass, t.totalClass) : '<span class="' + t.currentClass + '"></span> / <span class="' + t.totalClass + '"></span>', i.html(n)), "progressbar" === t.type && (n = t.renderProgressbar ? t.renderProgressbar.call(this, t.progressbarFillClass) : '<span class="' + t.progressbarFillClass + '"></span>', i.html(n)), "custom" !== t.type && this.emit("paginationRender", this.pagination.$el[0])
                }
            }, init: function () {
                var e = this, i = e.params.pagination;
                if (i.el) {
                    var n = t(i.el);
                    0 !== n.length && (e.params.uniqueNavElements && "string" == typeof i.el && n.length > 1 && 1 === e.$el.find(i.el).length && (n = e.$el.find(i.el)), "bullets" === i.type && i.clickable && n.addClass(i.clickableClass), n.addClass(i.modifierClass + i.type), "bullets" === i.type && i.dynamicBullets && (n.addClass("" + i.modifierClass + i.type + "-dynamic"), e.pagination.dynamicBulletIndex = 0, i.dynamicMainBullets < 1 && (i.dynamicMainBullets = 1)), "progressbar" === i.type && i.progressbarOpposite && n.addClass(i.progressbarOppositeClass), i.clickable && n.on("click", "." + i.bulletClass, function (i) {
                        i.preventDefault();
                        var n = t(this).index() * e.params.slidesPerGroup;
                        e.params.loop && (n += e.loopedSlides), e.slideTo(n)
                    }), d.extend(e.pagination, {$el: n, el: n[0]}))
                }
            }, destroy: function () {
                var t = this.params.pagination;
                if (t.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
                    var e = this.pagination.$el;
                    e.removeClass(t.hiddenClass), e.removeClass(t.modifierClass + t.type), this.pagination.bullets && this.pagination.bullets.removeClass(t.bulletActiveClass), t.clickable && e.off("click", "." + t.bulletClass)
                }
            }
        }, F = {
            setTranslate: function () {
                if (this.params.scrollbar.el && this.scrollbar.el) {
                    var t = this.scrollbar, e = this.rtlTranslate, i = this.progress, n = t.dragSize, s = t.trackSize,
                        o = t.$dragEl, r = t.$el, a = this.params.scrollbar, l = n, h = (s - n) * i;
                    e ? (h = -h) > 0 ? (l = n - h, h = 0) : -h + n > s && (l = s + h) : h < 0 ? (l = n + h, h = 0) : h + n > s && (l = s - h), this.isHorizontal() ? (u.transforms3d ? o.transform("translate3d(" + h + "px, 0, 0)") : o.transform("translateX(" + h + "px)"), o[0].style.width = l + "px") : (u.transforms3d ? o.transform("translate3d(0px, " + h + "px, 0)") : o.transform("translateY(" + h + "px)"), o[0].style.height = l + "px"), a.hide && (clearTimeout(this.scrollbar.timeout), r[0].style.opacity = 1, this.scrollbar.timeout = setTimeout(function () {
                        r[0].style.opacity = 0, r.transition(400)
                    }, 1e3))
                }
            }, setTransition: function (t) {
                this.params.scrollbar.el && this.scrollbar.el && this.scrollbar.$dragEl.transition(t)
            }, updateSize: function () {
                if (this.params.scrollbar.el && this.scrollbar.el) {
                    var t = this.scrollbar, e = t.$dragEl, i = t.$el;
                    e[0].style.width = "", e[0].style.height = "";
                    var n, s = this.isHorizontal() ? i[0].offsetWidth : i[0].offsetHeight, o = this.size / this.virtualSize,
                        r = o * (s / this.size);
                    n = "auto" === this.params.scrollbar.dragSize ? s * o : parseInt(this.params.scrollbar.dragSize, 10), this.isHorizontal() ? e[0].style.width = n + "px" : e[0].style.height = n + "px", i[0].style.display = o >= 1 ? "none" : "", this.params.scrollbarHide && (i[0].style.opacity = 0), d.extend(t, {
                        trackSize: s,
                        divider: o,
                        moveDivider: r,
                        dragSize: n
                    }), t.$el[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](this.params.scrollbar.lockClass)
                }
            }, setDragPosition: function (t) {
                var e, i = this.scrollbar, n = this.rtlTranslate, s = i.$el, o = i.dragSize, r = i.trackSize;
                e = ((this.isHorizontal() ? "touchstart" === t.type || "touchmove" === t.type ? t.targetTouches[0].pageX : t.pageX || t.clientX : "touchstart" === t.type || "touchmove" === t.type ? t.targetTouches[0].pageY : t.pageY || t.clientY) - s.offset()[this.isHorizontal() ? "left" : "top"] - o / 2) / (r - o), e = Math.max(Math.min(e, 1), 0), n && (e = 1 - e);
                var a = this.minTranslate() + (this.maxTranslate() - this.minTranslate()) * e;
                this.updateProgress(a), this.setTranslate(a), this.updateActiveIndex(), this.updateSlidesClasses()
            }, onDragStart: function (t) {
                var e = this.params.scrollbar, i = this.scrollbar, n = this.$wrapperEl, s = i.$el, o = i.$dragEl;
                this.scrollbar.isTouched = !0, t.preventDefault(), t.stopPropagation(), n.transition(100), o.transition(100), i.setDragPosition(t), clearTimeout(this.scrollbar.dragTimeout), s.transition(0), e.hide && s.css("opacity", 1), this.emit("scrollbarDragStart", t)
            }, onDragMove: function (t) {
                var e = this.scrollbar, i = this.$wrapperEl, n = e.$el, s = e.$dragEl;
                this.scrollbar.isTouched && (t.preventDefault ? t.preventDefault() : t.returnValue = !1, e.setDragPosition(t), i.transition(0), n.transition(0), s.transition(0), this.emit("scrollbarDragMove", t))
            }, onDragEnd: function (t) {
                var e = this.params.scrollbar, i = this.scrollbar.$el;
                this.scrollbar.isTouched && (this.scrollbar.isTouched = !1, e.hide && (clearTimeout(this.scrollbar.dragTimeout), this.scrollbar.dragTimeout = d.nextTick(function () {
                    i.css("opacity", 0), i.transition(400)
                }, 1e3)), this.emit("scrollbarDragEnd", t), e.snapOnRelease && this.slideToClosest())
            }, enableDraggable: function () {
                if (this.params.scrollbar.el) {
                    var t = this.scrollbar, e = this.touchEvents, i = this.touchEventsDesktop, s = this.params,
                        o = t.$el[0], r = !(!u.passiveListener || !s.passiveListener) && {passive: !1, capture: !1},
                        a = !(!u.passiveListener || !s.passiveListener) && {passive: !0, capture: !1};
                    u.touch || !u.pointerEvents && !u.prefixedPointerEvents ? (u.touch && (o.addEventListener(e.start, this.scrollbar.onDragStart, r), o.addEventListener(e.move, this.scrollbar.onDragMove, r), o.addEventListener(e.end, this.scrollbar.onDragEnd, a)), (s.simulateTouch && !x.ios && !x.android || s.simulateTouch && !u.touch && x.ios) && (o.addEventListener("mousedown", this.scrollbar.onDragStart, r), n.addEventListener("mousemove", this.scrollbar.onDragMove, r), n.addEventListener("mouseup", this.scrollbar.onDragEnd, a))) : (o.addEventListener(i.start, this.scrollbar.onDragStart, r), n.addEventListener(i.move, this.scrollbar.onDragMove, r), n.addEventListener(i.end, this.scrollbar.onDragEnd, a))
                }
            }, disableDraggable: function () {
                if (this.params.scrollbar.el) {
                    var t = this.scrollbar, e = this.touchEvents, i = this.touchEventsDesktop, s = this.params,
                        o = t.$el[0], r = !(!u.passiveListener || !s.passiveListener) && {passive: !1, capture: !1},
                        a = !(!u.passiveListener || !s.passiveListener) && {passive: !0, capture: !1};
                    u.touch || !u.pointerEvents && !u.prefixedPointerEvents ? (u.touch && (o.removeEventListener(e.start, this.scrollbar.onDragStart, r), o.removeEventListener(e.move, this.scrollbar.onDragMove, r), o.removeEventListener(e.end, this.scrollbar.onDragEnd, a)), (s.simulateTouch && !x.ios && !x.android || s.simulateTouch && !u.touch && x.ios) && (o.removeEventListener("mousedown", this.scrollbar.onDragStart, r), n.removeEventListener("mousemove", this.scrollbar.onDragMove, r), n.removeEventListener("mouseup", this.scrollbar.onDragEnd, a))) : (o.removeEventListener(i.start, this.scrollbar.onDragStart, r), n.removeEventListener(i.move, this.scrollbar.onDragMove, r), n.removeEventListener(i.end, this.scrollbar.onDragEnd, a))
                }
            }, init: function () {
                if (this.params.scrollbar.el) {
                    var e = this.scrollbar, i = this.$el, n = this.params.scrollbar, s = t(n.el);
                    this.params.uniqueNavElements && "string" == typeof n.el && s.length > 1 && 1 === i.find(n.el).length && (s = i.find(n.el));
                    var o = s.find("." + this.params.scrollbar.dragClass);
                    0 === o.length && (o = t('<div class="' + this.params.scrollbar.dragClass + '"></div>'), s.append(o)), d.extend(e, {
                        $el: s,
                        el: s[0],
                        $dragEl: o,
                        dragEl: o[0]
                    }), n.draggable && e.enableDraggable()
                }
            }, destroy: function () {
                this.scrollbar.disableDraggable()
            }
        }, V = {
            setTransform: function (e, i) {
                var n = this.rtl, s = t(e), o = n ? -1 : 1, r = s.attr("data-swiper-parallax") || "0",
                    a = s.attr("data-swiper-parallax-x"), l = s.attr("data-swiper-parallax-y"),
                    h = s.attr("data-swiper-parallax-scale"), d = s.attr("data-swiper-parallax-opacity");
                if (a || l ? (a = a || "0", l = l || "0") : this.isHorizontal() ? (a = r, l = "0") : (l = r, a = "0"), a = a.indexOf("%") >= 0 ? parseInt(a, 10) * i * o + "%" : a * i * o + "px", l = l.indexOf("%") >= 0 ? parseInt(l, 10) * i + "%" : l * i + "px", void 0 !== d && null !== d) {
                    var u = d - (d - 1) * (1 - Math.abs(i));
                    s[0].style.opacity = u
                }
                if (void 0 === h || null === h) s.transform("translate3d(" + a + ", " + l + ", 0px)"); else {
                    var c = h - (h - 1) * (1 - Math.abs(i));
                    s.transform("translate3d(" + a + ", " + l + ", 0px) scale(" + c + ")")
                }
            }, setTranslate: function () {
                var e = this, i = e.$el, n = e.slides, s = e.progress, o = e.snapGrid;
                i.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function (t, i) {
                    e.parallax.setTransform(i, s)
                }), n.each(function (i, n) {
                    var r = n.progress;
                    e.params.slidesPerGroup > 1 && "auto" !== e.params.slidesPerView && (r += Math.ceil(i / 2) - s * (o.length - 1)), r = Math.min(Math.max(r, -1), 1), t(n).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function (t, i) {
                        e.parallax.setTransform(i, r)
                    })
                })
            }, setTransition: function (e) {
                void 0 === e && (e = this.params.speed), this.$el.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function (i, n) {
                    var s = t(n), o = parseInt(s.attr("data-swiper-parallax-duration"), 10) || e;
                    0 === e && (o = 0), s.transition(o)
                })
            }
        }, q = {
            getDistanceBetweenTouches: function (t) {
                if (t.targetTouches.length < 2) return 1;
                var e = t.targetTouches[0].pageX, i = t.targetTouches[0].pageY, n = t.targetTouches[1].pageX,
                    s = t.targetTouches[1].pageY;
                return Math.sqrt(Math.pow(n - e, 2) + Math.pow(s - i, 2))
            }, onGestureStart: function (e) {
                var i = this.params.zoom, n = this.zoom, s = n.gesture;
                if (n.fakeGestureTouched = !1, n.fakeGestureMoved = !1, !u.gestures) {
                    if ("touchstart" !== e.type || "touchstart" === e.type && e.targetTouches.length < 2) return;
                    n.fakeGestureTouched = !0, s.scaleStart = q.getDistanceBetweenTouches(e)
                }
                s.$slideEl && s.$slideEl.length || (s.$slideEl = t(e.target).closest(".swiper-slide"), 0 === s.$slideEl.length && (s.$slideEl = this.slides.eq(this.activeIndex)), s.$imageEl = s.$slideEl.find("img, svg, canvas"), s.$imageWrapEl = s.$imageEl.parent("." + i.containerClass), s.maxRatio = s.$imageWrapEl.attr("data-swiper-zoom") || i.maxRatio, 0 !== s.$imageWrapEl.length) ? (s.$imageEl.transition(0), this.zoom.isScaling = !0) : s.$imageEl = void 0
            }, onGestureChange: function (t) {
                var e = this.params.zoom, i = this.zoom, n = i.gesture;
                if (!u.gestures) {
                    if ("touchmove" !== t.type || "touchmove" === t.type && t.targetTouches.length < 2) return;
                    i.fakeGestureMoved = !0, n.scaleMove = q.getDistanceBetweenTouches(t)
                }
                n.$imageEl && 0 !== n.$imageEl.length && (u.gestures ? this.zoom.scale = t.scale * i.currentScale : i.scale = n.scaleMove / n.scaleStart * i.currentScale, i.scale > n.maxRatio && (i.scale = n.maxRatio - 1 + Math.pow(i.scale - n.maxRatio + 1, .5)), i.scale < e.minRatio && (i.scale = e.minRatio + 1 - Math.pow(e.minRatio - i.scale + 1, .5)), n.$imageEl.transform("translate3d(0,0,0) scale(" + i.scale + ")"))
            }, onGestureEnd: function (t) {
                var e = this.params.zoom, i = this.zoom, n = i.gesture;
                if (!u.gestures) {
                    if (!i.fakeGestureTouched || !i.fakeGestureMoved) return;
                    if ("touchend" !== t.type || "touchend" === t.type && t.changedTouches.length < 2 && !x.android) return;
                    i.fakeGestureTouched = !1, i.fakeGestureMoved = !1
                }
                n.$imageEl && 0 !== n.$imageEl.length && (i.scale = Math.max(Math.min(i.scale, n.maxRatio), e.minRatio), n.$imageEl.transition(this.params.speed).transform("translate3d(0,0,0) scale(" + i.scale + ")"), i.currentScale = i.scale, i.isScaling = !1, 1 === i.scale && (n.$slideEl = void 0))
            }, onTouchStart: function (t) {
                var e = this.zoom, i = e.gesture, n = e.image;
                i.$imageEl && 0 !== i.$imageEl.length && (n.isTouched || (x.android && t.preventDefault(), n.isTouched = !0, n.touchesStart.x = "touchstart" === t.type ? t.targetTouches[0].pageX : t.pageX, n.touchesStart.y = "touchstart" === t.type ? t.targetTouches[0].pageY : t.pageY))
            }, onTouchMove: function (t) {
                var e = this.zoom, i = e.gesture, n = e.image, s = e.velocity;
                if (i.$imageEl && 0 !== i.$imageEl.length && (this.allowClick = !1,
                n.isTouched && i.$slideEl)) {
                    n.isMoved || (n.width = i.$imageEl[0].offsetWidth, n.height = i.$imageEl[0].offsetHeight, n.startX = d.getTranslate(i.$imageWrapEl[0], "x") || 0, n.startY = d.getTranslate(i.$imageWrapEl[0], "y") || 0, i.slideWidth = i.$slideEl[0].offsetWidth, i.slideHeight = i.$slideEl[0].offsetHeight, i.$imageWrapEl.transition(0), this.rtl && (n.startX = -n.startX, n.startY = -n.startY));
                    var o = n.width * e.scale, r = n.height * e.scale;
                    if (!(o < i.slideWidth && r < i.slideHeight)) {
                        if (n.minX = Math.min(i.slideWidth / 2 - o / 2, 0), n.maxX = -n.minX, n.minY = Math.min(i.slideHeight / 2 - r / 2, 0), n.maxY = -n.minY, n.touchesCurrent.x = "touchmove" === t.type ? t.targetTouches[0].pageX : t.pageX, n.touchesCurrent.y = "touchmove" === t.type ? t.targetTouches[0].pageY : t.pageY, !n.isMoved && !e.isScaling) {
                            if (this.isHorizontal() && (Math.floor(n.minX) === Math.floor(n.startX) && n.touchesCurrent.x < n.touchesStart.x || Math.floor(n.maxX) === Math.floor(n.startX) && n.touchesCurrent.x > n.touchesStart.x)) return void (n.isTouched = !1);
                            if (!this.isHorizontal() && (Math.floor(n.minY) === Math.floor(n.startY) && n.touchesCurrent.y < n.touchesStart.y || Math.floor(n.maxY) === Math.floor(n.startY) && n.touchesCurrent.y > n.touchesStart.y)) return void (n.isTouched = !1)
                        }
                        t.preventDefault(), t.stopPropagation(), n.isMoved = !0, n.currentX = n.touchesCurrent.x - n.touchesStart.x + n.startX, n.currentY = n.touchesCurrent.y - n.touchesStart.y + n.startY, n.currentX < n.minX && (n.currentX = n.minX + 1 - Math.pow(n.minX - n.currentX + 1, .8)), n.currentX > n.maxX && (n.currentX = n.maxX - 1 + Math.pow(n.currentX - n.maxX + 1, .8)), n.currentY < n.minY && (n.currentY = n.minY + 1 - Math.pow(n.minY - n.currentY + 1, .8)), n.currentY > n.maxY && (n.currentY = n.maxY - 1 + Math.pow(n.currentY - n.maxY + 1, .8)), s.prevPositionX || (s.prevPositionX = n.touchesCurrent.x), s.prevPositionY || (s.prevPositionY = n.touchesCurrent.y), s.prevTime || (s.prevTime = Date.now()), s.x = (n.touchesCurrent.x - s.prevPositionX) / (Date.now() - s.prevTime) / 2, s.y = (n.touchesCurrent.y - s.prevPositionY) / (Date.now() - s.prevTime) / 2, Math.abs(n.touchesCurrent.x - s.prevPositionX) < 2 && (s.x = 0), Math.abs(n.touchesCurrent.y - s.prevPositionY) < 2 && (s.y = 0), s.prevPositionX = n.touchesCurrent.x, s.prevPositionY = n.touchesCurrent.y, s.prevTime = Date.now(), i.$imageWrapEl.transform("translate3d(" + n.currentX + "px, " + n.currentY + "px,0)")
                    }
                }
            }, onTouchEnd: function () {
                var t = this.zoom, e = t.gesture, i = t.image, n = t.velocity;
                if (e.$imageEl && 0 !== e.$imageEl.length) {
                    if (!i.isTouched || !i.isMoved) return i.isTouched = !1, void (i.isMoved = !1);
                    i.isTouched = !1, i.isMoved = !1;
                    var s = 300, o = 300, r = n.x * s, a = i.currentX + r, l = n.y * o, h = i.currentY + l;
                    0 !== n.x && (s = Math.abs((a - i.currentX) / n.x)), 0 !== n.y && (o = Math.abs((h - i.currentY) / n.y));
                    var d = Math.max(s, o);
                    i.currentX = a, i.currentY = h;
                    var u = i.width * t.scale, c = i.height * t.scale;
                    i.minX = Math.min(e.slideWidth / 2 - u / 2, 0), i.maxX = -i.minX, i.minY = Math.min(e.slideHeight / 2 - c / 2, 0), i.maxY = -i.minY, i.currentX = Math.max(Math.min(i.currentX, i.maxX), i.minX), i.currentY = Math.max(Math.min(i.currentY, i.maxY), i.minY), e.$imageWrapEl.transition(d).transform("translate3d(" + i.currentX + "px, " + i.currentY + "px,0)")
                }
            }, onTransitionEnd: function () {
                var t = this.zoom, e = t.gesture;
                e.$slideEl && this.previousIndex !== this.activeIndex && (e.$imageEl.transform("translate3d(0,0,0) scale(1)"), e.$imageWrapEl.transform("translate3d(0,0,0)"), e.$slideEl = void 0, e.$imageEl = void 0, e.$imageWrapEl = void 0, t.scale = 1, t.currentScale = 1)
            }, toggle: function (t) {
                var e = this.zoom;
                e.scale && 1 !== e.scale ? e.out() : e["in"](t)
            }, "in": function (e) {
                var i, n, s, o, r, a, l, h, d, u, c, p, f, m, g, v, y = this.zoom, w = this.params.zoom, b = y.gesture,
                    x = y.image;
                b.$slideEl || (b.$slideEl = this.clickedSlide ? t(this.clickedSlide) : this.slides.eq(this.activeIndex), b.$imageEl = b.$slideEl.find("img, svg, canvas"), b.$imageWrapEl = b.$imageEl.parent("." + w.containerClass)), b.$imageEl && 0 !== b.$imageEl.length && (b.$slideEl.addClass("" + w.zoomedSlideClass), void 0 === x.touchesStart.x && e ? (i = "touchend" === e.type ? e.changedTouches[0].pageX : e.pageX, n = "touchend" === e.type ? e.changedTouches[0].pageY : e.pageY) : (i = x.touchesStart.x, n = x.touchesStart.y), y.scale = b.$imageWrapEl.attr("data-swiper-zoom") || w.maxRatio, y.currentScale = b.$imageWrapEl.attr("data-swiper-zoom") || w.maxRatio, e ? (g = b.$slideEl[0].offsetWidth, v = b.$slideEl[0].offsetHeight, s = b.$slideEl.offset().left + g / 2 - i, o = b.$slideEl.offset().top + v / 2 - n, l = b.$imageEl[0].offsetWidth, h = b.$imageEl[0].offsetHeight, d = l * y.scale, u = h * y.scale, f = -(c = Math.min(g / 2 - d / 2, 0)), m = -(p = Math.min(v / 2 - u / 2, 0)), r = s * y.scale, a = o * y.scale, r < c && (r = c), r > f && (r = f), a < p && (a = p), a > m && (a = m)) : (r = 0, a = 0), b.$imageWrapEl.transition(300).transform("translate3d(" + r + "px, " + a + "px,0)"), b.$imageEl.transition(300).transform("translate3d(0,0,0) scale(" + y.scale + ")"))
            }, out: function () {
                var e = this.zoom, i = this.params.zoom, n = e.gesture;
                n.$slideEl || (n.$slideEl = this.clickedSlide ? t(this.clickedSlide) : this.slides.eq(this.activeIndex), n.$imageEl = n.$slideEl.find("img, svg, canvas"), n.$imageWrapEl = n.$imageEl.parent("." + i.containerClass)), n.$imageEl && 0 !== n.$imageEl.length && (e.scale = 1, e.currentScale = 1, n.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"), n.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"), n.$slideEl.removeClass("" + i.zoomedSlideClass), n.$slideEl = void 0)
            }, enable: function () {
                var t = this.zoom;
                if (!t.enabled) {
                    t.enabled = !0;
                    var e = !("touchstart" !== this.touchEvents.start || !u.passiveListener || !this.params.passiveListeners) && {
                        passive: !0,
                        capture: !1
                    };
                    u.gestures ? (this.$wrapperEl.on("gesturestart", ".swiper-slide", t.onGestureStart, e), this.$wrapperEl.on("gesturechange", ".swiper-slide", t.onGestureChange, e), this.$wrapperEl.on("gestureend", ".swiper-slide", t.onGestureEnd, e)) : "touchstart" === this.touchEvents.start && (this.$wrapperEl.on(this.touchEvents.start, ".swiper-slide", t.onGestureStart, e), this.$wrapperEl.on(this.touchEvents.move, ".swiper-slide", t.onGestureChange, e), this.$wrapperEl.on(this.touchEvents.end, ".swiper-slide", t.onGestureEnd, e)), this.$wrapperEl.on(this.touchEvents.move, "." + this.params.zoom.containerClass, t.onTouchMove)
                }
            }, disable: function () {
                var t = this.zoom;
                if (t.enabled) {
                    this.zoom.enabled = !1;
                    var e = !("touchstart" !== this.touchEvents.start || !u.passiveListener || !this.params.passiveListeners) && {
                        passive: !0,
                        capture: !1
                    };
                    u.gestures ? (this.$wrapperEl.off("gesturestart", ".swiper-slide", t.onGestureStart, e), this.$wrapperEl.off("gesturechange", ".swiper-slide", t.onGestureChange, e), this.$wrapperEl.off("gestureend", ".swiper-slide", t.onGestureEnd, e)) : "touchstart" === this.touchEvents.start && (this.$wrapperEl.off(this.touchEvents.start, ".swiper-slide", t.onGestureStart, e), this.$wrapperEl.off(this.touchEvents.move, ".swiper-slide", t.onGestureChange, e), this.$wrapperEl.off(this.touchEvents.end, ".swiper-slide", t.onGestureEnd, e)), this.$wrapperEl.off(this.touchEvents.move, "." + this.params.zoom.containerClass, t.onTouchMove)
                }
            }
        }, B = {
            loadInSlide: function (e, i) {
                void 0 === i && (i = !0);
                var n = this, s = n.params.lazy;
                if (void 0 !== e && 0 !== n.slides.length) {
                    var o = n.virtual && n.params.virtual.enabled ? n.$wrapperEl.children("." + n.params.slideClass + '[data-swiper-slide-index="' + e + '"]') : n.slides.eq(e),
                        r = o.find("." + s.elementClass + ":not(." + s.loadedClass + "):not(." + s.loadingClass + ")");
                    !o.hasClass(s.elementClass) || o.hasClass(s.loadedClass) || o.hasClass(s.loadingClass) || (r = r.add(o[0])), 0 !== r.length && r.each(function (e, r) {
                        var a = t(r);
                        a.addClass(s.loadingClass);
                        var l = a.attr("data-background"), h = a.attr("data-src"), d = a.attr("data-srcset"),
                            u = a.attr("data-sizes");
                        n.loadImage(a[0], h || l, d, u, !1, function () {
                            if (void 0 !== n && null !== n && n && (!n || n.params) && !n.destroyed) {
                                if (l ? (a.css("background-image", 'url("' + l + '")'), a.removeAttr("data-background")) : (d && (a.attr("srcset", d), a.removeAttr("data-srcset")), u && (a.attr("sizes", u), a.removeAttr("data-sizes")), h && (a.attr("src", h), a.removeAttr("data-src"))), a.addClass(s.loadedClass).removeClass(s.loadingClass), o.find("." + s.preloaderClass).remove(), n.params.loop && i) {
                                    var t = o.attr("data-swiper-slide-index");
                                    if (o.hasClass(n.params.slideDuplicateClass)) {
                                        var e = n.$wrapperEl.children('[data-swiper-slide-index="' + t + '"]:not(.' + n.params.slideDuplicateClass + ")");
                                        n.lazy.loadInSlide(e.index(), !1)
                                    } else {
                                        var r = n.$wrapperEl.children("." + n.params.slideDuplicateClass + '[data-swiper-slide-index="' + t + '"]');
                                        n.lazy.loadInSlide(r.index(), !1)
                                    }
                                }
                                n.emit("lazyImageReady", o[0], a[0])
                            }
                        }), n.emit("lazyImageLoad", o[0], a[0])
                    })
                }
            }, load: function () {
                function e(t) {
                    if (l) {
                        if (s.children("." + o.slideClass + '[data-swiper-slide-index="' + t + '"]').length) return !0
                    } else if (r[t]) return !0;
                    return !1
                }

                function i(e) {
                    return l ? t(e).attr("data-swiper-slide-index") : t(e).index()
                }

                var n = this, s = n.$wrapperEl, o = n.params, r = n.slides, a = n.activeIndex,
                    l = n.virtual && o.virtual.enabled, h = o.lazy, d = o.slidesPerView;
                if ("auto" === d && (d = 0), n.lazy.initialImageLoaded || (n.lazy.initialImageLoaded = !0), n.params.watchSlidesVisibility) s.children("." + o.slideVisibleClass).each(function (e, i) {
                    var s = l ? t(i).attr("data-swiper-slide-index") : t(i).index();
                    n.lazy.loadInSlide(s)
                }); else if (d > 1) for (var u = a; u < a + d; u += 1) e(u) && n.lazy.loadInSlide(u); else n.lazy.loadInSlide(a);
                if (h.loadPrevNext) if (d > 1 || h.loadPrevNextAmount && h.loadPrevNextAmount > 1) {
                    for (var c = h.loadPrevNextAmount, p = d, f = Math.min(a + p + Math.max(c, p), r.length), m = Math.max(a - Math.max(p, c), 0), g = a + d; g < f; g += 1) e(g) && n.lazy.loadInSlide(g);
                    for (var v = m; v < a; v += 1) e(v) && n.lazy.loadInSlide(v)
                } else {
                    var y = s.children("." + o.slideNextClass);
                    y.length > 0 && n.lazy.loadInSlide(i(y));
                    var w = s.children("." + o.slidePrevClass);
                    w.length > 0 && n.lazy.loadInSlide(i(w))
                }
            }
        }, Y = {
            LinearSpline: function (t, e) {
                var i, n, s, o, r, a = function (t, e) {
                    for (n = -1, i = t.length; i - n > 1;) t[s = i + n >> 1] <= e ? n = s : i = s;
                    return i
                };
                return this.x = t, this.y = e, this.lastIndex = t.length - 1, this.interpolate = function (t) {
                    return t ? (r = a(this.x, t), o = r - 1, (t - this.x[o]) * (this.y[r] - this.y[o]) / (this.x[r] - this.x[o]) + this.y[o]) : 0
                }, this
            }, getInterpolateFunction: function (t) {
                this.controller.spline || (this.controller.spline = this.params.loop ? new Y.LinearSpline(this.slidesGrid, t.slidesGrid) : new Y.LinearSpline(this.snapGrid, t.snapGrid))
            }, setTranslate: function (t, e) {
                function i(t) {
                    var e = o.rtlTranslate ? -o.translate : o.translate;
                    "slide" === o.params.controller.by && (o.controller.getInterpolateFunction(t), s = -o.controller.spline.interpolate(-e)), s && "container" !== o.params.controller.by || (n = (t.maxTranslate() - t.minTranslate()) / (o.maxTranslate() - o.minTranslate()), s = (e - o.minTranslate()) * n + t.minTranslate()), o.params.controller.inverse && (s = t.maxTranslate() - s), t.updateProgress(s), t.setTranslate(s, o), t.updateActiveIndex(), t.updateSlidesClasses()
                }

                var n, s, o = this, r = o.controller.control;
                if (Array.isArray(r)) for (var a = 0; a < r.length; a += 1) r[a] !== e && r[a] instanceof D && i(r[a]); else r instanceof D && e !== r && i(r)
            }, setTransition: function (t, e) {
                function i(e) {
                    e.setTransition(t, s), 0 !== t && (e.transitionStart(), e.$wrapperEl.transitionEnd(function () {
                        o && (e.params.loop && "slide" === s.params.controller.by && e.loopFix(), e.transitionEnd())
                    }))
                }

                var n, s = this, o = s.controller.control;
                if (Array.isArray(o)) for (n = 0; n < o.length; n += 1) o[n] !== e && o[n] instanceof D && i(o[n]); else o instanceof D && e !== o && i(o)
            }
        }, U = {
            makeElFocusable: function (t) {
                return t.attr("tabIndex", "0"), t
            }, addElRole: function (t, e) {
                return t.attr("role", e), t
            }, addElLabel: function (t, e) {
                return t.attr("aria-label", e), t
            }, disableEl: function (t) {
                return t.attr("aria-disabled", !0), t
            }, enableEl: function (t) {
                return t.attr("aria-disabled", !1), t
            }, onEnterKey: function (e) {
                var i = this.params.a11y;
                if (13 === e.keyCode) {
                    var n = t(e.target);
                    this.navigation && this.navigation.$nextEl && n.is(this.navigation.$nextEl) && (this.isEnd && !this.params.loop || this.slideNext(), this.isEnd ? this.a11y.notify(i.lastSlideMessage) : this.a11y.notify(i.nextSlideMessage)), this.navigation && this.navigation.$prevEl && n.is(this.navigation.$prevEl) && (this.isBeginning && !this.params.loop || this.slidePrev(), this.isBeginning ? this.a11y.notify(i.firstSlideMessage) : this.a11y.notify(i.prevSlideMessage)), this.pagination && n.is("." + this.params.pagination.bulletClass) && n[0].click()
                }
            }, notify: function (t) {
                var e = this.a11y.liveRegion;
                0 !== e.length && (e.html(""), e.html(t))
            }, updateNavigation: function () {
                if (!this.params.loop) {
                    var t = this.navigation, e = t.$nextEl, i = t.$prevEl;
                    i && i.length > 0 && (this.isBeginning ? this.a11y.disableEl(i) : this.a11y.enableEl(i)), e && e.length > 0 && (this.isEnd ? this.a11y.disableEl(e) : this.a11y.enableEl(e))
                }
            }, updatePagination: function () {
                var e = this, i = e.params.a11y;
                e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.bullets.each(function (n, s) {
                    var o = t(s);
                    e.a11y.makeElFocusable(o), e.a11y.addElRole(o, "button"), e.a11y.addElLabel(o, i.paginationBulletMessage.replace(/{{index}}/, o.index() + 1))
                })
            }, init: function () {
                this.$el.append(this.a11y.liveRegion);
                var t, e, i = this.params.a11y;
                this.navigation && this.navigation.$nextEl && (t = this.navigation.$nextEl), this.navigation && this.navigation.$prevEl && (e = this.navigation.$prevEl), t && (this.a11y.makeElFocusable(t), this.a11y.addElRole(t, "button"), this.a11y.addElLabel(t, i.nextSlideMessage), t.on("keydown", this.a11y.onEnterKey)), e && (this.a11y.makeElFocusable(e), this.a11y.addElRole(e, "button"), this.a11y.addElLabel(e, i.prevSlideMessage), e.on("keydown", this.a11y.onEnterKey)), this.pagination && this.params.pagination.clickable && this.pagination.bullets && this.pagination.bullets.length && this.pagination.$el.on("keydown", "." + this.params.pagination.bulletClass, this.a11y.onEnterKey)
            }, destroy: function () {
                var t, e;
                this.a11y.liveRegion && this.a11y.liveRegion.length > 0 && this.a11y.liveRegion.remove(), this.navigation && this.navigation.$nextEl && (t = this.navigation.$nextEl), this.navigation && this.navigation.$prevEl && (e = this.navigation.$prevEl), t && t.off("keydown", this.a11y.onEnterKey), e && e.off("keydown", this.a11y.onEnterKey), this.pagination && this.params.pagination.clickable && this.pagination.bullets && this.pagination.bullets.length && this.pagination.$el.off("keydown", "." + this.params.pagination.bulletClass, this.a11y.onEnterKey)
            }
        }, X = {
            init: function () {
                if (this.params.history) {
                    if (!s.history || !s.history.pushState) return this.params.history.enabled = !1, void (this.params.hashNavigation.enabled = !0);
                    var t = this.history;
                    t.initialized = !0, t.paths = X.getPathValues(), (t.paths.key || t.paths.value) && (t.scrollToSlide(0, t.paths.value, this.params.runCallbacksOnInit), this.params.history.replaceState || s.addEventListener("popstate", this.history.setHistoryPopState))
                }
            }, destroy: function () {
                this.params.history.replaceState || s.removeEventListener("popstate", this.history.setHistoryPopState)
            }, setHistoryPopState: function () {
                this.history.paths = X.getPathValues(), this.history.scrollToSlide(this.params.speed, this.history.paths.value, !1)
            }, getPathValues: function () {
                var t = s.location.pathname.slice(1).split("/").filter(function (t) {
                    return "" !== t
                }), e = t.length;
                return {key: t[e - 2], value: t[e - 1]}
            }, setHistory: function (t, e) {
                if (this.history.initialized && this.params.history.enabled) {
                    var i = this.slides.eq(e), n = X.slugify(i.attr("data-history"));
                    s.location.pathname.includes(t) || (n = t + "/" + n);
                    var o = s.history.state;
                    o && o.value === n || (this.params.history.replaceState ? s.history.replaceState({value: n}, null, n) : s.history.pushState({value: n}, null, n))
                }
            }, slugify: function (t) {
                return t.toString().toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "")
            }, scrollToSlide: function (t, e, i) {
                if (e) for (var n = 0, s = this.slides.length; n < s; n += 1) {
                    var o = this.slides.eq(n);
                    if (X.slugify(o.attr("data-history")) === e && !o.hasClass(this.params.slideDuplicateClass)) {
                        var r = o.index();
                        this.slideTo(r, t, i)
                    }
                } else this.slideTo(0, t, i)
            }
        }, G = {
            onHashCange: function () {
                var t = n.location.hash.replace("#", "");
                t !== this.slides.eq(this.activeIndex).attr("data-hash") && this.slideTo(this.$wrapperEl.children("." + this.params.slideClass + '[data-hash="' + t + '"]').index())
            }, setHash: function () {
                if (this.hashNavigation.initialized && this.params.hashNavigation.enabled) if (this.params.hashNavigation.replaceState && s.history && s.history.replaceState) s.history.replaceState(null, null, "#" + this.slides.eq(this.activeIndex).attr("data-hash") || ""); else {
                    var t = this.slides.eq(this.activeIndex), e = t.attr("data-hash") || t.attr("data-history");
                    n.location.hash = e || ""
                }
            }, init: function () {
                if (!(!this.params.hashNavigation.enabled || this.params.history && this.params.history.enabled)) {
                    this.hashNavigation.initialized = !0;
                    var e = n.location.hash.replace("#", "");
                    if (e) for (var i = 0, o = this.slides.length; i < o; i += 1) {
                        var r = this.slides.eq(i);
                        if ((r.attr("data-hash") || r.attr("data-history")) === e && !r.hasClass(this.params.slideDuplicateClass)) {
                            var a = r.index();
                            this.slideTo(a, 0, this.params.runCallbacksOnInit, !0)
                        }
                    }
                    this.params.hashNavigation.watchState && t(s).on("hashchange", this.hashNavigation.onHashCange)
                }
            }, destroy: function () {
                this.params.hashNavigation.watchState && t(s).off("hashchange", this.hashNavigation.onHashCange)
            }
        }, Q = {
            run: function () {
                var t = this, e = t.slides.eq(t.activeIndex), i = t.params.autoplay.delay;
                e.attr("data-swiper-autoplay") && (i = e.attr("data-swiper-autoplay") || t.params.autoplay.delay), t.autoplay.timeout = d.nextTick(function () {
                    t.params.autoplay.reverseDirection ? t.params.loop ? (t.loopFix(), t.slidePrev(t.params.speed, !0, !0), t.emit("autoplay")) : t.isBeginning ? t.params.autoplay.stopOnLastSlide ? t.autoplay.stop() : (t.slideTo(t.slides.length - 1, t.params.speed, !0, !0), t.emit("autoplay")) : (t.slidePrev(t.params.speed, !0, !0), t.emit("autoplay")) : t.params.loop ? (t.loopFix(), t.slideNext(t.params.speed, !0, !0), t.emit("autoplay")) : t.isEnd ? t.params.autoplay.stopOnLastSlide ? t.autoplay.stop() : (t.slideTo(0, t.params.speed, !0, !0), t.emit("autoplay")) : (t.slideNext(t.params.speed, !0, !0), t.emit("autoplay"))
                }, i)
            }, start: function () {
                return void 0 === this.autoplay.timeout && !this.autoplay.running && (this.autoplay.running = !0, this.emit("autoplayStart"), this.autoplay.run(), !0)
            }, stop: function () {
                return !!this.autoplay.running && void 0 !== this.autoplay.timeout && (this.autoplay.timeout && (clearTimeout(this.autoplay.timeout), this.autoplay.timeout = void 0), this.autoplay.running = !1, this.emit("autoplayStop"), !0)
            }, pause: function (t) {
                this.autoplay.running && (this.autoplay.paused || (this.autoplay.timeout && clearTimeout(this.autoplay.timeout), this.autoplay.paused = !0, 0 !== t && this.params.autoplay.waitForTransition ? (this.$wrapperEl[0].addEventListener("transitionend", this.autoplay.onTransitionEnd), this.$wrapperEl[0].addEventListener("webkitTransitionEnd", this.autoplay.onTransitionEnd)) : (this.autoplay.paused = !1, this.autoplay.run())))
            }
        }, Z = {
            setTranslate: function () {
                for (var t = this.slides, e = 0; e < t.length; e += 1) {
                    var i = this.slides.eq(e), n = -i[0].swiperSlideOffset;
                    this.params.virtualTranslate || (n -= this.translate);
                    var s = 0;
                    this.isHorizontal() || (s = n, n = 0);
                    var o = this.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(i[0].progress), 0) : 1 + Math.min(Math.max(i[0].progress, -1), 0);
                    i.css({opacity: o}).transform("translate3d(" + n + "px, " + s + "px, 0px)")
                }
            }, setTransition: function (t) {
                var e = this, i = e.slides, n = e.$wrapperEl;
                if (i.transition(t), e.params.virtualTranslate && 0 !== t) {
                    var s = !1;
                    i.transitionEnd(function () {
                        if (!s && e && !e.destroyed) {
                            s = !0, e.animating = !1;
                            for (var t = ["webkitTransitionEnd", "transitionend"], i = 0; i < t.length; i += 1) n.trigger(t[i])
                        }
                    })
                }
            }
        }, K = {
            setTranslate: function () {
                var e, i = this.$el, n = this.$wrapperEl, s = this.slides, o = this.width, r = this.height,
                    a = this.rtlTranslate, l = this.size, h = this.params.cubeEffect, d = this.isHorizontal(),
                    u = this.virtual && this.params.virtual.enabled, c = 0;
                h.shadow && (d ? (0 === (e = n.find(".swiper-cube-shadow")).length && (e = t('<div class="swiper-cube-shadow"></div>'), n.append(e)), e.css({height: o + "px"})) : 0 === (e = i.find(".swiper-cube-shadow")).length && (e = t('<div class="swiper-cube-shadow"></div>'), i.append(e)));
                for (var p = 0; p < s.length; p += 1) {
                    var f = s.eq(p), m = p;
                    u && (m = parseInt(f.attr("data-swiper-slide-index"), 10));
                    var g = 90 * m, v = Math.floor(g / 360);
                    a && (g = -g, v = Math.floor(-g / 360));
                    var y = Math.max(Math.min(f[0].progress, 1), -1), w = 0, b = 0, x = 0;
                    m % 4 == 0 ? (w = 4 * -v * l, x = 0) : (m - 1) % 4 == 0 ? (w = 0, x = 4 * -v * l) : (m - 2) % 4 == 0 ? (w = l + 4 * v * l, x = l) : (m - 3) % 4 == 0 && (w = -l, x = 3 * l + 4 * l * v), a && (w = -w), d || (b = w, w = 0);
                    var C = "rotateX(" + (d ? 0 : -g) + "deg) rotateY(" + (d ? g : 0) + "deg) translate3d(" + w + "px, " + b + "px, " + x + "px)";
                    if (y <= 1 && y > -1 && (c = 90 * m + 90 * y, a && (c = 90 * -m - 90 * y)), f.transform(C), h.slideShadows) {
                        var T = d ? f.find(".swiper-slide-shadow-left") : f.find(".swiper-slide-shadow-top"),
                            S = d ? f.find(".swiper-slide-shadow-right") : f.find(".swiper-slide-shadow-bottom");
                        0 === T.length && (T = t('<div class="swiper-slide-shadow-' + (d ? "left" : "top") + '"></div>'), f.append(T)), 0 === S.length && (S = t('<div class="swiper-slide-shadow-' + (d ? "right" : "bottom") + '"></div>'), f.append(S)), T.length && (T[0].style.opacity = Math.max(-y, 0)), S.length && (S[0].style.opacity = Math.max(y, 0))
                    }
                }
                if (n.css({
                    "-webkit-transform-origin": "50% 50% -" + l / 2 + "px",
                    "-moz-transform-origin": "50% 50% -" + l / 2 + "px",
                    "-ms-transform-origin": "50% 50% -" + l / 2 + "px",
                    "transform-origin": "50% 50% -" + l / 2 + "px"
                }), h.shadow) if (d) e.transform("translate3d(0px, " + (o / 2 + h.shadowOffset) + "px, " + -o / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + h.shadowScale + ")"); else {
                    var _ = Math.abs(c) - 90 * Math.floor(Math.abs(c) / 90),
                        k = 1.5 - (Math.sin(2 * _ * Math.PI / 360) / 2 + Math.cos(2 * _ * Math.PI / 360) / 2),
                        D = h.shadowScale, I = h.shadowScale / k, $ = h.shadowOffset;
                    e.transform("scale3d(" + D + ", 1, " + I + ") translate3d(0px, " + (r / 2 + $) + "px, " + -r / 2 / I + "px) rotateX(-90deg)")
                }
                var M = E.isSafari || E.isUiWebView ? -l / 2 : 0;
                n.transform("translate3d(0px,0," + M + "px) rotateX(" + (this.isHorizontal() ? 0 : c) + "deg) rotateY(" + (this.isHorizontal() ? -c : 0) + "deg)")
            }, setTransition: function (t) {
                var e = this.$el;
                this.slides.transition(t).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(t), this.params.cubeEffect.shadow && !this.isHorizontal() && e.find(".swiper-cube-shadow").transition(t)
            }
        }, J = {
            setTranslate: function () {
                for (var e = this.slides, i = this.rtlTranslate, n = 0; n < e.length; n += 1) {
                    var s = e.eq(n), o = s[0].progress;
                    this.params.flipEffect.limitRotation && (o = Math.max(Math.min(s[0].progress, 1), -1));
                    var r = -180 * o, a = 0, l = -s[0].swiperSlideOffset, h = 0;
                    if (this.isHorizontal() ? i && (r = -r) : (h = l, l = 0, a = -r, r = 0), s[0].style.zIndex = -Math.abs(Math.round(o)) + e.length, this.params.flipEffect.slideShadows) {
                        var d = this.isHorizontal() ? s.find(".swiper-slide-shadow-left") : s.find(".swiper-slide-shadow-top"),
                            u = this.isHorizontal() ? s.find(".swiper-slide-shadow-right") : s.find(".swiper-slide-shadow-bottom");
                        0 === d.length && (d = t('<div class="swiper-slide-shadow-' + (this.isHorizontal() ? "left" : "top") + '"></div>'), s.append(d)), 0 === u.length && (u = t('<div class="swiper-slide-shadow-' + (this.isHorizontal() ? "right" : "bottom") + '"></div>'), s.append(u)), d.length && (d[0].style.opacity = Math.max(-o, 0)), u.length && (u[0].style.opacity = Math.max(o, 0))
                    }
                    s.transform("translate3d(" + l + "px, " + h + "px, 0px) rotateX(" + a + "deg) rotateY(" + r + "deg)")
                }
            }, setTransition: function (t) {
                var e = this, i = e.slides, n = e.activeIndex, s = e.$wrapperEl;
                if (i.transition(t).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(t), e.params.virtualTranslate && 0 !== t) {
                    var o = !1;
                    i.eq(n).transitionEnd(function () {
                        if (!o && e && !e.destroyed) {
                            o = !0, e.animating = !1;
                            for (var t = ["webkitTransitionEnd", "transitionend"], i = 0; i < t.length; i += 1) s.trigger(t[i])
                        }
                    })
                }
            }
        }, tt = {
            setTranslate: function () {
                for (var e = this.width, i = this.height, n = this.slides, s = this.$wrapperEl, o = this.slidesSizesGrid, r = this.params.coverflowEffect, a = this.isHorizontal(), l = this.translate, h = a ? e / 2 - l : i / 2 - l, d = a ? r.rotate : -r.rotate, c = r.depth, p = 0, f = n.length; p < f; p += 1) {
                    var m = n.eq(p), g = o[p], v = (h - m[0].swiperSlideOffset - g / 2) / g * r.modifier, y = a ? d * v : 0,
                        w = a ? 0 : d * v, b = -c * Math.abs(v), x = a ? 0 : r.stretch * v, C = a ? r.stretch * v : 0;
                    Math.abs(C) < .001 && (C = 0), Math.abs(x) < .001 && (x = 0), Math.abs(b) < .001 && (b = 0), Math.abs(y) < .001 && (y = 0), Math.abs(w) < .001 && (w = 0);
                    var T = "translate3d(" + C + "px," + x + "px," + b + "px)  rotateX(" + w + "deg) rotateY(" + y + "deg)";
                    if (m.transform(T), m[0].style.zIndex = 1 - Math.abs(Math.round(v)), r.slideShadows) {
                        var E = a ? m.find(".swiper-slide-shadow-left") : m.find(".swiper-slide-shadow-top"),
                            S = a ? m.find(".swiper-slide-shadow-right") : m.find(".swiper-slide-shadow-bottom");
                        0 === E.length && (E = t('<div class="swiper-slide-shadow-' + (a ? "left" : "top") + '"></div>'), m.append(E)), 0 === S.length && (S = t('<div class="swiper-slide-shadow-' + (a ? "right" : "bottom") + '"></div>'), m.append(S)), E.length && (E[0].style.opacity = v > 0 ? v : 0), S.length && (S[0].style.opacity = -v > 0 ? -v : 0)
                    }
                }
                (u.pointerEvents || u.prefixedPointerEvents) && (s[0].style.perspectiveOrigin = h + "px 50%")
            }, setTransition: function (t) {
                this.slides.transition(t).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(t)
            }
        }, et = [I, $, M, P, A, L, j, {
            name: "mousewheel",
            params: {
                mousewheel: {
                    enabled: !1,
                    releaseOnEdges: !1,
                    invert: !1,
                    forceToAxis: !1,
                    sensitivity: 1,
                    eventsTarged: "container"
                }
            },
            create: function () {
                d.extend(this, {
                    mousewheel: {
                        enabled: !1,
                        enable: W.enable.bind(this),
                        disable: W.disable.bind(this),
                        handle: W.handle.bind(this),
                        handleMouseEnter: W.handleMouseEnter.bind(this),
                        handleMouseLeave: W.handleMouseLeave.bind(this),
                        lastScrollTime: d.now()
                    }
                })
            },
            on: {
                init: function () {
                    this.params.mousewheel.enabled && this.mousewheel.enable()
                }, destroy: function () {
                    this.mousewheel.enabled && this.mousewheel.disable()
                }
            }
        }, {
            name: "navigation",
            params: {
                navigation: {
                    nextEl: null,
                    prevEl: null,
                    hideOnClick: !1,
                    disabledClass: "swiper-button-disabled",
                    hiddenClass: "swiper-button-hidden",
                    lockClass: "swiper-button-lock"
                }
            },
            create: function () {
                d.extend(this, {
                    navigation: {
                        init: R.init.bind(this),
                        update: R.update.bind(this),
                        destroy: R.destroy.bind(this)
                    }
                })
            },
            on: {
                init: function () {
                    this.navigation.init(), this.navigation.update()
                }, toEdge: function () {
                    this.navigation.update()
                }, fromEdge: function () {
                    this.navigation.update()
                }, destroy: function () {
                    this.navigation.destroy()
                }, click: function (e) {
                    var i = this.navigation, n = i.$nextEl, s = i.$prevEl;
                    !this.params.navigation.hideOnClick || t(e.target).is(s) || t(e.target).is(n) || (n && n.toggleClass(this.params.navigation.hiddenClass), s && s.toggleClass(this.params.navigation.hiddenClass))
                }
            }
        }, {
            name: "pagination",
            params: {
                pagination: {
                    el: null,
                    bulletElement: "span",
                    clickable: !1,
                    hideOnClick: !1,
                    renderBullet: null,
                    renderProgressbar: null,
                    renderFraction: null,
                    renderCustom: null,
                    progressbarOpposite: !1,
                    type: "bullets",
                    dynamicBullets: !1,
                    dynamicMainBullets: 1,
                    formatFractionCurrent: function (t) {
                        return t
                    },
                    formatFractionTotal: function (t) {
                        return t
                    },
                    bulletClass: "swiper-pagination-bullet",
                    bulletActiveClass: "swiper-pagination-bullet-active",
                    modifierClass: "swiper-pagination-",
                    currentClass: "swiper-pagination-current",
                    totalClass: "swiper-pagination-total",
                    hiddenClass: "swiper-pagination-hidden",
                    progressbarFillClass: "swiper-pagination-progressbar-fill",
                    progressbarOppositeClass: "swiper-pagination-progressbar-opposite",
                    clickableClass: "swiper-pagination-clickable",
                    lockClass: "swiper-pagination-lock"
                }
            },
            create: function () {
                d.extend(this, {
                    pagination: {
                        init: H.init.bind(this),
                        render: H.render.bind(this),
                        update: H.update.bind(this),
                        destroy: H.destroy.bind(this),
                        dynamicBulletIndex: 0
                    }
                })
            },
            on: {
                init: function () {
                    this.pagination.init(), this.pagination.render(), this.pagination.update()
                }, activeIndexChange: function () {
                    this.params.loop ? this.pagination.update() : void 0 === this.snapIndex && this.pagination.update()
                }, snapIndexChange: function () {
                    this.params.loop || this.pagination.update()
                }, slidesLengthChange: function () {
                    this.params.loop && (this.pagination.render(), this.pagination.update())
                }, snapGridLengthChange: function () {
                    this.params.loop || (this.pagination.render(), this.pagination.update())
                }, destroy: function () {
                    this.pagination.destroy()
                }, click: function (e) {
                    this.params.pagination.el && this.params.pagination.hideOnClick && this.pagination.$el.length > 0 && !t(e.target).hasClass(this.params.pagination.bulletClass) && this.pagination.$el.toggleClass(this.params.pagination.hiddenClass)
                }
            }
        }, {
            name: "scrollbar",
            params: {
                scrollbar: {
                    el: null,
                    dragSize: "auto",
                    hide: !1,
                    draggable: !1,
                    snapOnRelease: !0,
                    lockClass: "swiper-scrollbar-lock",
                    dragClass: "swiper-scrollbar-drag"
                }
            },
            create: function () {
                d.extend(this, {
                    scrollbar: {
                        init: F.init.bind(this),
                        destroy: F.destroy.bind(this),
                        updateSize: F.updateSize.bind(this),
                        setTranslate: F.setTranslate.bind(this),
                        setTransition: F.setTransition.bind(this),
                        enableDraggable: F.enableDraggable.bind(this),
                        disableDraggable: F.disableDraggable.bind(this),
                        setDragPosition: F.setDragPosition.bind(this),
                        onDragStart: F.onDragStart.bind(this),
                        onDragMove: F.onDragMove.bind(this),
                        onDragEnd: F.onDragEnd.bind(this),
                        isTouched: !1,
                        timeout: null,
                        dragTimeout: null
                    }
                })
            },
            on: {
                init: function () {
                    this.scrollbar.init(), this.scrollbar.updateSize(), this.scrollbar.setTranslate()
                }, update: function () {
                    this.scrollbar.updateSize()
                }, resize: function () {
                    this.scrollbar.updateSize()
                }, observerUpdate: function () {
                    this.scrollbar.updateSize()
                }, setTranslate: function () {
                    this.scrollbar.setTranslate()
                }, setTransition: function (t) {
                    this.scrollbar.setTransition(t)
                }, destroy: function () {
                    this.scrollbar.destroy()
                }
            }
        }, {
            name: "parallax", params: {parallax: {enabled: !1}}, create: function () {
                d.extend(this, {
                    parallax: {
                        setTransform: V.setTransform.bind(this),
                        setTranslate: V.setTranslate.bind(this),
                        setTransition: V.setTransition.bind(this)
                    }
                })
            }, on: {
                beforeInit: function () {
                    this.params.parallax.enabled && (this.params.watchSlidesProgress = !0)
                }, init: function () {
                    this.params.parallax && this.parallax.setTranslate()
                }, setTranslate: function () {
                    this.params.parallax && this.parallax.setTranslate()
                }, setTransition: function (t) {
                    this.params.parallax && this.parallax.setTransition(t)
                }
            }
        }, {
            name: "zoom",
            params: {
                zoom: {
                    enabled: !1,
                    maxRatio: 3,
                    minRatio: 1,
                    toggle: !0,
                    containerClass: "swiper-zoom-container",
                    zoomedSlideClass: "swiper-slide-zoomed"
                }
            },
            create: function () {
                var t = this, e = {
                    enabled: !1,
                    scale: 1,
                    currentScale: 1,
                    isScaling: !1,
                    gesture: {
                        $slideEl: void 0,
                        slideWidth: void 0,
                        slideHeight: void 0,
                        $imageEl: void 0,
                        $imageWrapEl: void 0,
                        maxRatio: 3
                    },
                    image: {
                        isTouched: void 0,
                        isMoved: void 0,
                        currentX: void 0,
                        currentY: void 0,
                        minX: void 0,
                        minY: void 0,
                        maxX: void 0,
                        maxY: void 0,
                        width: void 0,
                        height: void 0,
                        startX: void 0,
                        startY: void 0,
                        touchesStart: {},
                        touchesCurrent: {}
                    },
                    velocity: {x: void 0, y: void 0, prevPositionX: void 0, prevPositionY: void 0, prevTime: void 0}
                };
                "onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out".split(" ").forEach(function (i) {
                    e[i] = q[i].bind(t)
                }), d.extend(t, {zoom: e})
            },
            on: {
                init: function () {
                    this.params.zoom.enabled && this.zoom.enable()
                }, destroy: function () {
                    this.zoom.disable()
                }, touchStart: function (t) {
                    this.zoom.enabled && this.zoom.onTouchStart(t)
                }, touchEnd: function (t) {
                    this.zoom.enabled && this.zoom.onTouchEnd(t)
                }, doubleTap: function (t) {
                    this.params.zoom.enabled && this.zoom.enabled && this.params.zoom.toggle && this.zoom.toggle(t)
                }, transitionEnd: function () {
                    this.zoom.enabled && this.params.zoom.enabled && this.zoom.onTransitionEnd()
                }
            }
        }, {
            name: "lazy",
            params: {
                lazy: {
                    enabled: !1,
                    loadPrevNext: !1,
                    loadPrevNextAmount: 1,
                    loadOnTransitionStart: !1,
                    elementClass: "swiper-lazy",
                    loadingClass: "swiper-lazy-loading",
                    loadedClass: "swiper-lazy-loaded",
                    preloaderClass: "swiper-lazy-preloader"
                }
            },
            create: function () {
                d.extend(this, {
                    lazy: {
                        initialImageLoaded: !1,
                        load: B.load.bind(this),
                        loadInSlide: B.loadInSlide.bind(this)
                    }
                })
            },
            on: {
                beforeInit: function () {
                    this.params.lazy.enabled && this.params.preloadImages && (this.params.preloadImages = !1)
                }, init: function () {
                    this.params.lazy.enabled && !this.params.loop && 0 === this.params.initialSlide && this.lazy.load()
                }, scroll: function () {
                    this.params.freeMode && !this.params.freeModeSticky && this.lazy.load()
                }, resize: function () {
                    this.params.lazy.enabled && this.lazy.load()
                }, scrollbarDragMove: function () {
                    this.params.lazy.enabled && this.lazy.load()
                }, transitionStart: function () {
                    this.params.lazy.enabled && (this.params.lazy.loadOnTransitionStart || !this.params.lazy.loadOnTransitionStart && !this.lazy.initialImageLoaded) && this.lazy.load()
                }, transitionEnd: function () {
                    this.params.lazy.enabled && !this.params.lazy.loadOnTransitionStart && this.lazy.load()
                }
            }
        }, {
            name: "controller", params: {controller: {control: void 0, inverse: !1, by: "slide"}}, create: function () {
                d.extend(this, {
                    controller: {
                        control: this.params.controller.control,
                        getInterpolateFunction: Y.getInterpolateFunction.bind(this),
                        setTranslate: Y.setTranslate.bind(this),
                        setTransition: Y.setTransition.bind(this)
                    }
                })
            }, on: {
                update: function () {
                    this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline)
                }, resize: function () {
                    this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline)
                }, observerUpdate: function () {
                    this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline)
                }, setTranslate: function (t, e) {
                    this.controller.control && this.controller.setTranslate(t, e)
                }, setTransition: function (t, e) {
                    this.controller.control && this.controller.setTransition(t, e)
                }
            }
        }, {
            name: "a11y", params: {
                a11y: {
                    enabled: !0,
                    notificationClass: "swiper-notification",
                    prevSlideMessage: "Previous slide",
                    nextSlideMessage: "Next slide",
                    firstSlideMessage: "This is the first slide",
                    lastSlideMessage: "This is the last slide",
                    paginationBulletMessage: "Go to slide {{index}}"
                }
            }, create: function () {
                var e = this;
                d.extend(e, {a11y: {liveRegion: t('<span class="' + e.params.a11y.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>')}}), Object.keys(U).forEach(function (t) {
                    e.a11y[t] = U[t].bind(e)
                })
            }, on: {
                init: function () {
                    this.params.a11y.enabled && (this.a11y.init(), this.a11y.updateNavigation())
                }, toEdge: function () {
                    this.params.a11y.enabled && this.a11y.updateNavigation()
                }, fromEdge: function () {
                    this.params.a11y.enabled && this.a11y.updateNavigation()
                }, paginationUpdate: function () {
                    this.params.a11y.enabled && this.a11y.updatePagination()
                }, destroy: function () {
                    this.params.a11y.enabled && this.a11y.destroy()
                }
            }
        }, {
            name: "history", params: {history: {enabled: !1, replaceState: !1, key: "slides"}}, create: function () {
                d.extend(this, {
                    history: {
                        init: X.init.bind(this),
                        setHistory: X.setHistory.bind(this),
                        setHistoryPopState: X.setHistoryPopState.bind(this),
                        scrollToSlide: X.scrollToSlide.bind(this),
                        destroy: X.destroy.bind(this)
                    }
                })
            }, on: {
                init: function () {
                    this.params.history.enabled && this.history.init()
                }, destroy: function () {
                    this.params.history.enabled && this.history.destroy()
                }, transitionEnd: function () {
                    this.history.initialized && this.history.setHistory(this.params.history.key, this.activeIndex)
                }
            }
        }, {
            name: "hash-navigation",
            params: {hashNavigation: {enabled: !1, replaceState: !1, watchState: !1}},
            create: function () {
                d.extend(this, {
                    hashNavigation: {
                        initialized: !1,
                        init: G.init.bind(this),
                        destroy: G.destroy.bind(this),
                        setHash: G.setHash.bind(this),
                        onHashCange: G.onHashCange.bind(this)
                    }
                })
            },
            on: {
                init: function () {
                    this.params.hashNavigation.enabled && this.hashNavigation.init()
                }, destroy: function () {
                    this.params.hashNavigation.enabled && this.hashNavigation.destroy()
                }, transitionEnd: function () {
                    this.hashNavigation.initialized && this.hashNavigation.setHash()
                }
            }
        }, {
            name: "autoplay",
            params: {
                autoplay: {
                    enabled: !1,
                    delay: 3e3,
                    waitForTransition: !0,
                    disableOnInteraction: !0,
                    stopOnLastSlide: !1,
                    reverseDirection: !1
                }
            },
            create: function () {
                var t = this;
                d.extend(t, {
                    autoplay: {
                        running: !1,
                        paused: !1,
                        run: Q.run.bind(t),
                        start: Q.start.bind(t),
                        stop: Q.stop.bind(t),
                        pause: Q.pause.bind(t),
                        onTransitionEnd: function (e) {
                            t && !t.destroyed && t.$wrapperEl && e.target === this && (t.$wrapperEl[0].removeEventListener("transitionend", t.autoplay.onTransitionEnd), t.$wrapperEl[0].removeEventListener("webkitTransitionEnd", t.autoplay.onTransitionEnd), t.autoplay.paused = !1, t.autoplay.running ? t.autoplay.run() : t.autoplay.stop())
                        }
                    }
                })
            },
            on: {
                init: function () {
                    this.params.autoplay.enabled && this.autoplay.start()
                }, beforeTransitionStart: function (t, e) {
                    this.autoplay.running && (e || !this.params.autoplay.disableOnInteraction ? this.autoplay.pause(t) : this.autoplay.stop())
                }, sliderFirstMove: function () {
                    this.autoplay.running && (this.params.autoplay.disableOnInteraction ? this.autoplay.stop() : this.autoplay.pause())
                }, destroy: function () {
                    this.autoplay.running && this.autoplay.stop()
                }
            }
        }, {
            name: "effect-fade", params: {fadeEffect: {crossFade: !1}}, create: function () {
                d.extend(this, {
                    fadeEffect: {
                        setTranslate: Z.setTranslate.bind(this),
                        setTransition: Z.setTransition.bind(this)
                    }
                })
            }, on: {
                beforeInit: function () {
                    if ("fade" === this.params.effect) {
                        this.classNames.push(this.params.containerModifierClass + "fade");
                        var t = {
                            slidesPerView: 1,
                            slidesPerColumn: 1,
                            slidesPerGroup: 1,
                            watchSlidesProgress: !0,
                            spaceBetween: 0,
                            virtualTranslate: !0
                        };
                        d.extend(this.params, t), d.extend(this.originalParams, t)
                    }
                }, setTranslate: function () {
                    "fade" === this.params.effect && this.fadeEffect.setTranslate()
                }, setTransition: function (t) {
                    "fade" === this.params.effect && this.fadeEffect.setTransition(t)
                }
            }
        }, {
            name: "effect-cube",
            params: {cubeEffect: {slideShadows: !0, shadow: !0, shadowOffset: 20, shadowScale: .94}},
            create: function () {
                d.extend(this, {
                    cubeEffect: {
                        setTranslate: K.setTranslate.bind(this),
                        setTransition: K.setTransition.bind(this)
                    }
                })
            },
            on: {
                beforeInit: function () {
                    if ("cube" === this.params.effect) {
                        this.classNames.push(this.params.containerModifierClass + "cube"), this.classNames.push(this.params.containerModifierClass + "3d");
                        var t = {
                            slidesPerView: 1,
                            slidesPerColumn: 1,
                            slidesPerGroup: 1,
                            watchSlidesProgress: !0,
                            resistanceRatio: 0,
                            spaceBetween: 0,
                            centeredSlides: !1,
                            virtualTranslate: !0
                        };
                        d.extend(this.params, t), d.extend(this.originalParams, t)
                    }
                }, setTranslate: function () {
                    "cube" === this.params.effect && this.cubeEffect.setTranslate()
                }, setTransition: function (t) {
                    "cube" === this.params.effect && this.cubeEffect.setTransition(t)
                }
            }
        }, {
            name: "effect-flip", params: {flipEffect: {slideShadows: !0, limitRotation: !0}}, create: function () {
                d.extend(this, {
                    flipEffect: {
                        setTranslate: J.setTranslate.bind(this),
                        setTransition: J.setTransition.bind(this)
                    }
                })
            }, on: {
                beforeInit: function () {
                    if ("flip" === this.params.effect) {
                        this.classNames.push(this.params.containerModifierClass + "flip"), this.classNames.push(this.params.containerModifierClass + "3d");
                        var t = {
                            slidesPerView: 1,
                            slidesPerColumn: 1,
                            slidesPerGroup: 1,
                            watchSlidesProgress: !0,
                            spaceBetween: 0,
                            virtualTranslate: !0
                        };
                        d.extend(this.params, t), d.extend(this.originalParams, t)
                    }
                }, setTranslate: function () {
                    "flip" === this.params.effect && this.flipEffect.setTranslate()
                }, setTransition: function (t) {
                    "flip" === this.params.effect && this.flipEffect.setTransition(t)
                }
            }
        }, {
            name: "effect-coverflow",
            params: {coverflowEffect: {rotate: 50, stretch: 0, depth: 100, modifier: 1, slideShadows: !0}},
            create: function () {
                d.extend(this, {
                    coverflowEffect: {
                        setTranslate: tt.setTranslate.bind(this),
                        setTransition: tt.setTransition.bind(this)
                    }
                })
            },
            on: {
                beforeInit: function () {
                    "coverflow" === this.params.effect && (this.classNames.push(this.params.containerModifierClass + "coverflow"), this.classNames.push(this.params.containerModifierClass + "3d"), this.params.watchSlidesProgress = !0, this.originalParams.watchSlidesProgress = !0)
                }, setTranslate: function () {
                    "coverflow" === this.params.effect && this.coverflowEffect.setTranslate()
                }, setTransition: function (t) {
                    "coverflow" === this.params.effect && this.coverflowEffect.setTransition(t)
                }
            }
        }];
    return void 0 === D.use && (D.use = D.Class.use, D.installModule = D.Class.installModule), D.use(et), D
}), !function () {
    "use strict";

    function t(t, e) {
        var i;
        for (i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
        return t
    }

    function e(t) {
        if (!this || this.find !== e.prototype.find) return new e(t);
        if (this.length = 0, t) if ("string" == typeof t && (t = this.find(t)), t.nodeType || t === t.window) this.length = 1, this[0] = t; else {
            var i = t.length;
            for (this.length = i; i;) i -= 1, this[i] = t[i]
        }
    }

    e.extend = t, e.contains = function (t, e) {
        do if (e = e.parentNode, e === t) return !0; while (e);
        return !1
    }, e.parseJSON = function (t) {
        return window.JSON && JSON.parse(t)
    }, t(e.prototype, {
        find: function (t) {
            var i = this[0] || document;
            return "string" == typeof t && (t = i.querySelectorAll ? i.querySelectorAll(t) : "#" === t.charAt(0) ? i.getElementById(t.slice(1)) : i.getElementsByTagName(t)), new e(t)
        }, hasClass: function (t) {
            return !!this[0] && new RegExp("(^|\\s+)" + t + "(\\s+|$)").test(this[0].className)
        }, addClass: function (t) {
            for (var e, i = this.length; i;) {
                if (i -= 1, e = this[i], !e.className) return e.className = t, this;
                if (this.hasClass(t)) return this;
                e.className += " " + t
            }
            return this
        }, removeClass: function (t) {
            for (var e, i = new RegExp("(^|\\s+)" + t + "(\\s+|$)"), n = this.length; n;) n -= 1, e = this[n], e.className = e.className.replace(i, " ");
            return this
        }, on: function (t, e) {
            for (var i, n, s = t.split(/\s+/); s.length;) for (t = s.shift(), i = this.length; i;) i -= 1, n = this[i], n.addEventListener ? n.addEventListener(t, e, !1) : n.attachEvent && n.attachEvent("on" + t, e);
            return this
        }, off: function (t, e) {
            for (var i, n, s = t.split(/\s+/); s.length;) for (t = s.shift(), i = this.length; i;) i -= 1, n = this[i], n.removeEventListener ? n.removeEventListener(t, e, !1) : n.detachEvent && n.detachEvent("on" + t, e);
            return this
        }, empty: function () {
            for (var t, e = this.length; e;) for (e -= 1, t = this[e]; t.hasChildNodes();) t.removeChild(t.lastChild);
            return this
        }, first: function () {
            return new e(this[0])
        }
    }), "function" == typeof define && define.amd ? define(function () {
        return e
    }) : (window.blueimp = window.blueimp || {}, window.blueimp.helper = e)
}(), function (t) {
    "use strict";
    "function" == typeof define && define.amd ? define(["./blueimp-helper"], t) : (window.blueimp = window.blueimp || {}, window.blueimp.Gallery = t(window.blueimp.helper || window.jQuery))
}(function (t) {
    "use strict";

    function e(t, i) {
        return void 0 === document.body.style.maxHeight ? null : this && this.options === e.prototype.options ? t && t.length ? (this.list = t, this.num = t.length, this.initOptions(i), void this.initialize()) : void this.console.log("blueimp Gallery: No or empty list provided as first argument.", t) : new e(t, i)
    }

    return t.extend(e.prototype, {
        options: {
            container: "#blueimp-gallery",
            slidesContainer: "div",
            titleElement: "h3",
            displayClass: "blueimp-gallery-display",
            controlsClass: "blueimp-gallery-controls",
            singleClass: "blueimp-gallery-single",
            leftEdgeClass: "blueimp-gallery-left",
            rightEdgeClass: "blueimp-gallery-right",
            playingClass: "blueimp-gallery-playing",
            slideClass: "slide",
            slideLoadingClass: "slide-loading",
            slideErrorClass: "slide-error",
            slideContentClass: "slide-content",
            toggleClass: "toggle",
            prevClass: "prev",
            nextClass: "next",
            closeClass: "close",
            playPauseClass: "play-pause",
            typeProperty: "type",
            titleProperty: "title",
            urlProperty: "href",
            srcsetProperty: "urlset",
            displayTransition: !0,
            clearSlides: !0,
            stretchImages: !1,
            toggleControlsOnReturn: !0,
            toggleControlsOnSlideClick: !0,
            toggleSlideshowOnSpace: !0,
            enableKeyboardNavigation: !0,
            closeOnEscape: !0,
            closeOnSlideClick: !0,
            closeOnSwipeUpOrDown: !0,
            emulateTouchEvents: !0,
            stopTouchEventsPropagation: !1,
            hidePageScrollbars: !0,
            disableScroll: !0,
            carousel: !1,
            continuous: !0,
            unloadElements: !0,
            startSlideshow: !1,
            slideshowInterval: 5e3,
            index: 0,
            preloadRange: 2,
            transitionSpeed: 400,
            slideshowTransitionSpeed: void 0,
            event: void 0,
            onopen: void 0,
            onopened: void 0,
            onslide: void 0,
            onslideend: void 0,
            onslidecomplete: void 0,
            onclose: void 0,
            onclosed: void 0
        },
        carouselOptions: {
            hidePageScrollbars: !1,
            toggleControlsOnReturn: !1,
            toggleSlideshowOnSpace: !1,
            enableKeyboardNavigation: !1,
            closeOnEscape: !1,
            closeOnSlideClick: !1,
            closeOnSwipeUpOrDown: !1,
            disableScroll: !1,
            startSlideshow: !0
        },
        console: window.console && "function" == typeof window.console.log ? window.console : {
            log: function () {
            }
        },
        support: function (e) {
            function i() {
                var t, i, n = s.transition;
                document.body.appendChild(e), n && (t = n.name.slice(0, -9) + "ransform", void 0 !== e.style[t] && (e.style[t] = "translateZ(0)", i = window.getComputedStyle(e).getPropertyValue(n.prefix + "transform"), s.transform = {
                    prefix: n.prefix,
                    name: t,
                    translate: !0,
                    translateZ: !!i && "none" !== i
                })), void 0 !== e.style.backgroundSize && (s.backgroundSize = {}, e.style.backgroundSize = "contain", s.backgroundSize.contain = "contain" === window.getComputedStyle(e).getPropertyValue("background-size"), e.style.backgroundSize = "cover", s.backgroundSize.cover = "cover" === window.getComputedStyle(e).getPropertyValue("background-size")), document.body.removeChild(e)
            }

            var n,
                s = {touch: void 0 !== window.ontouchstart || window.DocumentTouch && document instanceof DocumentTouch},
                o = {
                    webkitTransition: {end: "webkitTransitionEnd", prefix: "-webkit-"},
                    MozTransition: {end: "transitionend", prefix: "-moz-"},
                    OTransition: {end: "otransitionend", prefix: "-o-"},
                    transition: {end: "transitionend", prefix: ""}
                };
            for (n in o) if (o.hasOwnProperty(n) && void 0 !== e.style[n]) {
                s.transition = o[n], s.transition.name = n;
                break
            }
            return document.body ? i() : t(document).on("DOMContentLoaded", i), s
        }(document.createElement("div")),
        requestAnimationFrame: window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame,
        initialize: function () {
            return this.initStartIndex(), this.initWidget() !== !1 && (this.initEventListeners(), this.onslide(this.index), this.ontransitionend(), void (this.options.startSlideshow && this.play()))
        },
        slide: function (t, e) {
            window.clearTimeout(this.timeout);
            var i, n, s, o = this.index;
            if (o !== t && 1 !== this.num) {
                if (e || (e = this.options.transitionSpeed), this.support.transform) {
                    for (this.options.continuous || (t = this.circle(t)), i = Math.abs(o - t) / (o - t), this.options.continuous && (n = i, i = -this.positions[this.circle(t)] / this.slideWidth, i !== n && (t = -i * this.num + t)), s = Math.abs(o - t) - 1; s;) s -= 1, this.move(this.circle((t > o ? t : o) - s - 1), this.slideWidth * i, 0);
                    t = this.circle(t), this.move(o, this.slideWidth * i, e), this.move(t, 0, e), this.options.continuous && this.move(this.circle(t - i), -(this.slideWidth * i), 0)
                } else t = this.circle(t), this.animate(o * -this.slideWidth, t * -this.slideWidth, e);
                this.onslide(t)
            }
        },
        getIndex: function () {
            return this.index
        },
        getNumber: function () {
            return this.num
        },
        prev: function () {
            (this.options.continuous || this.index) && this.slide(this.index - 1)
        },
        next: function () {
            (this.options.continuous || this.index < this.num - 1) && this.slide(this.index + 1)
        },
        play: function (t) {
            var e = this;
            window.clearTimeout(this.timeout), this.interval = t || this.options.slideshowInterval, this.elements[this.index] > 1 && (this.timeout = this.setTimeout(!this.requestAnimationFrame && this.slide || function (t, i) {
                e.animationFrameId = e.requestAnimationFrame.call(window, function () {
                    e.slide(t, i)
                })
            }, [this.index + 1, this.options.slideshowTransitionSpeed], this.interval)), this.container.addClass(this.options.playingClass)
        },
        pause: function () {
            window.clearTimeout(this.timeout), this.interval = null, this.container.removeClass(this.options.playingClass)
        },
        add: function (t) {
            var e;
            for (t.concat || (t = Array.prototype.slice.call(t)), this.list.concat || (this.list = Array.prototype.slice.call(this.list)), this.list = this.list.concat(t), this.num = this.list.length, this.num > 2 && null === this.options.continuous && (this.options.continuous = !0, this.container.removeClass(this.options.leftEdgeClass)), this.container.removeClass(this.options.rightEdgeClass).removeClass(this.options.singleClass), e = this.num - t.length; e < this.num; e += 1) this.addSlide(e), this.positionSlide(e);
            this.positions.length = this.num, this.initSlides(!0)
        },
        resetSlides: function () {
            this.slidesContainer.empty(), this.unloadAllSlides(), this.slides = []
        },
        handleClose: function () {
            var t = this.options;
            this.destroyEventListeners(), this.pause(), this.container[0].style.display = "none", this.container.removeClass(t.displayClass).removeClass(t.singleClass).removeClass(t.leftEdgeClass).removeClass(t.rightEdgeClass), t.hidePageScrollbars && (document.body.style.overflow = this.bodyOverflowStyle), this.options.clearSlides && this.resetSlides(), this.options.onclosed && this.options.onclosed.call(this)
        },
        close: function () {
            function t(i) {
                i.target === e.container[0] && (e.container.off(e.support.transition.end, t), e.handleClose())
            }

            var e = this;
            this.options.onclose && this.options.onclose.call(this), this.support.transition && this.options.displayTransition ? (this.container.on(this.support.transition.end, t), this.container.removeClass(this.options.displayClass)) : this.handleClose()
        },
        circle: function (t) {
            return (this.num + t % this.num) % this.num
        },
        move: function (t, e, i) {
            this.translateX(t, e, i), this.positions[t] = e
        },
        translate: function (t, e, i, n) {
            var s = this.slides[t].style, o = this.support.transition, r = this.support.transform;
            s[o.name + "Duration"] = n + "ms", s[r.name] = "translate(" + e + "px, " + i + "px)" + (r.translateZ ? " translateZ(0)" : "")
        },
        translateX: function (t, e, i) {
            this.translate(t, e, 0, i)
        },
        translateY: function (t, e, i) {
            this.translate(t, 0, e, i)
        },
        animate: function (t, e, i) {
            if (!i) return void (this.slidesContainer[0].style.left = e + "px");
            var n = this, s = (new Date).getTime(), o = window.setInterval(function () {
                var r = (new Date).getTime() - s;
                return r > i ? (n.slidesContainer[0].style.left = e + "px", n.ontransitionend(), void window.clearInterval(o)) : void (n.slidesContainer[0].style.left = (e - t) * (Math.floor(r / i * 100) / 100) + t + "px")
            }, 4)
        },
        preventDefault: function (t) {
            t.preventDefault ? t.preventDefault() : t.returnValue = !1
        },
        stopPropagation: function (t) {
            t.stopPropagation ? t.stopPropagation() : t.cancelBubble = !0
        },
        onresize: function () {
            this.initSlides(!0)
        },
        onmousedown: function (t) {
            t.which && 1 === t.which && "VIDEO" !== t.target.nodeName && (t.preventDefault(), (t.originalEvent || t).touches = [{
                pageX: t.pageX,
                pageY: t.pageY
            }], this.ontouchstart(t))
        },
        onmousemove: function (t) {
            this.touchStart && ((t.originalEvent || t).touches = [{
                pageX: t.pageX,
                pageY: t.pageY
            }], this.ontouchmove(t))
        },
        onmouseup: function (t) {
            this.touchStart && (this.ontouchend(t), delete this.touchStart)
        },
        onmouseout: function (e) {
            if (this.touchStart) {
                var i = e.target, n = e.relatedTarget;
                (!n || n !== i && !t.contains(i, n)) && this.onmouseup(e)
            }
        },
        ontouchstart: function (t) {
            this.options.stopTouchEventsPropagation && this.stopPropagation(t);
            var e = (t.originalEvent || t).touches[0];
            this.touchStart = {
                x: e.pageX,
                y: e.pageY,
                time: Date.now()
            }, this.isScrolling = void 0, this.touchDelta = {}
        },
        ontouchmove: function (t) {
            this.options.stopTouchEventsPropagation && this.stopPropagation(t);
            var e, i, n = (t.originalEvent || t).touches[0], s = (t.originalEvent || t).scale, o = this.index;
            if (!(n.length > 1 || s && 1 !== s)) if (this.options.disableScroll && t.preventDefault(), this.touchDelta = {
                x: n.pageX - this.touchStart.x,
                y: n.pageY - this.touchStart.y
            }, e = this.touchDelta.x, void 0 === this.isScrolling && (this.isScrolling = this.isScrolling || Math.abs(e) < Math.abs(this.touchDelta.y)), this.isScrolling) this.options.closeOnSwipeUpOrDown && this.translateY(o, this.touchDelta.y + this.positions[o], 0); else for (t.preventDefault(), window.clearTimeout(this.timeout), this.options.continuous ? i = [this.circle(o + 1), o, this.circle(o - 1)] : (this.touchDelta.x = e /= !o && e > 0 || o === this.num - 1 && 0 > e ? Math.abs(e) / this.slideWidth + 1 : 1, i = [o], o && i.push(o - 1), o < this.num - 1 && i.unshift(o + 1)); i.length;) o = i.pop(), this.translateX(o, e + this.positions[o], 0)
        },
        ontouchend: function (t) {
            this.options.stopTouchEventsPropagation && this.stopPropagation(t);
            var e, i, n, s, o, r = this.index, a = this.options.transitionSpeed, l = this.slideWidth,
                h = Number(Date.now() - this.touchStart.time) < 250,
                d = h && Math.abs(this.touchDelta.x) > 20 || Math.abs(this.touchDelta.x) > l / 2,
                u = !r && this.touchDelta.x > 0 || r === this.num - 1 && this.touchDelta.x < 0,
                c = !d && this.options.closeOnSwipeUpOrDown && (h && Math.abs(this.touchDelta.y) > 20 || Math.abs(this.touchDelta.y) > this.slideHeight / 2);
            this.options.continuous && (u = !1), e = this.touchDelta.x < 0 ? -1 : 1, this.isScrolling ? c ? this.close() : this.translateY(r, 0, a) : d && !u ? (i = r + e, n = r - e, s = l * e, o = -l * e, this.options.continuous ? (this.move(this.circle(i), s, 0), this.move(this.circle(r - 2 * e), o, 0)) : i >= 0 && i < this.num && this.move(i, s, 0), this.move(r, this.positions[r] + s, a), this.move(this.circle(n), this.positions[this.circle(n)] + s, a), r = this.circle(n), this.onslide(r)) : this.options.continuous ? (this.move(this.circle(r - 1), -l, a), this.move(r, 0, a), this.move(this.circle(r + 1), l, a)) : (r && this.move(r - 1, -l, a), this.move(r, 0, a), r < this.num - 1 && this.move(r + 1, l, a))
        },
        ontouchcancel: function (t) {
            this.touchStart && (this.ontouchend(t), delete this.touchStart)
        },
        ontransitionend: function (t) {
            var e = this.slides[this.index];
            t && e !== t.target || (this.interval && this.play(), this.setTimeout(this.options.onslideend, [this.index, e]))
        },
        oncomplete: function (e) {
            var i, n = e.target || e.srcElement, s = n && n.parentNode;
            n && s && (i = this.getNodeIndex(s), t(s).removeClass(this.options.slideLoadingClass), "error" === e.type ? (t(s).addClass(this.options.slideErrorClass), this.elements[i] = 3) : this.elements[i] = 2, n.clientHeight > this.container[0].clientHeight && (n.style.maxHeight = this.container[0].clientHeight), this.interval && this.slides[this.index] === s && this.play(), this.setTimeout(this.options.onslidecomplete, [i, s]))
        },
        onload: function (t) {
            this.oncomplete(t)
        },
        onerror: function (t) {
            this.oncomplete(t)
        },
        onkeydown: function (t) {
            switch (t.which || t.keyCode) {
                case 13:
                    this.options.toggleControlsOnReturn && (this.preventDefault(t), this.toggleControls());
                    break;
                case 27:
                    this.options.closeOnEscape && (this.close(), t.stopImmediatePropagation());
                    break;
                case 32:
                    this.options.toggleSlideshowOnSpace && (this.preventDefault(t), this.toggleSlideshow());
                    break;
                case 37:
                    this.options.enableKeyboardNavigation && (this.preventDefault(t), this.prev());
                    break;
                case 39:
                    this.options.enableKeyboardNavigation && (this.preventDefault(t), this.next())
            }
        },
        handleClick: function (e) {
            function i(e) {
                return t(s).hasClass(e) || t(o).hasClass(e)
            }

            var n = this.options, s = e.target || e.srcElement, o = s.parentNode;
            i(n.toggleClass) ? (this.preventDefault(e), this.toggleControls()) : i(n.prevClass) ? (this.preventDefault(e), this.prev()) : i(n.nextClass) ? (this.preventDefault(e), this.next()) : i(n.closeClass) ? (this.preventDefault(e), this.close()) : i(n.playPauseClass) ? (this.preventDefault(e), this.toggleSlideshow()) : o === this.slidesContainer[0] ? n.closeOnSlideClick ? (this.preventDefault(e), this.close()) : n.toggleControlsOnSlideClick && (this.preventDefault(e), this.toggleControls()) : o.parentNode && o.parentNode === this.slidesContainer[0] && n.toggleControlsOnSlideClick && (this.preventDefault(e), this.toggleControls())
        },
        onclick: function (t) {
            return this.options.emulateTouchEvents && this.touchDelta && (Math.abs(this.touchDelta.x) > 20 || Math.abs(this.touchDelta.y) > 20) ? void delete this.touchDelta : this.handleClick(t)
        },
        updateEdgeClasses: function (t) {
            t ? this.container.removeClass(this.options.leftEdgeClass) : this.container.addClass(this.options.leftEdgeClass), t === this.num - 1 ? this.container.addClass(this.options.rightEdgeClass) : this.container.removeClass(this.options.rightEdgeClass)
        },
        handleSlide: function (t) {
            this.options.continuous || this.updateEdgeClasses(t), this.loadElements(t), this.options.unloadElements && this.unloadElements(t), this.setTitle(t)
        },
        onslide: function (t) {
            this.index = t, this.handleSlide(t), this.setTimeout(this.options.onslide, [t, this.slides[t]])
        },
        setTitle: function (t) {
            var e = this.slides[t].firstChild.title, i = this.titleElement;
            i.length && (this.titleElement.empty(), e && i[0].appendChild(document.createTextNode(e)))
        },
        setTimeout: function (t, e, i) {
            var n = this;
            return t && window.setTimeout(function () {
                t.apply(n, e || [])
            }, i || 0)
        },
        imageFactory: function (e, i) {
            function n(e) {
                if (!s) {
                    if (e = {type: e.type, target: o}, !o.parentNode) return a.setTimeout(n, [e]);
                    s = !0, t(l).off("load error", n), d && "load" === e.type && (o.style.background = 'url("' + h + '") center no-repeat', o.style.backgroundSize = d), i(e)
                }
            }

            var s, o, r, a = this, l = this.imagePrototype.cloneNode(!1), h = e, d = this.options.stretchImages;
            return "string" != typeof h && (h = this.getItemProperty(e, this.options.urlProperty), r = this.getItemProperty(e, this.options.titleProperty)), d === !0 && (d = "contain"), d = this.support.backgroundSize && this.support.backgroundSize[d] && d, d ? o = this.elementPrototype.cloneNode(!1) : (o = l, l.draggable = !1), r && (o.title = r), t(l).on("load error", n), l.src = h, o
        },
        createElement: function (e, i) {
            var n = e && this.getItemProperty(e, this.options.typeProperty),
                s = n && this[n.split("/")[0] + "Factory"] || this.imageFactory, o = e && s.call(this, e, i),
                r = this.getItemProperty(e, this.options.srcsetProperty);
            return o || (o = this.elementPrototype.cloneNode(!1), this.setTimeout(i, [{
                type: "error",
                target: o
            }])), r && o.setAttribute("srcset", r), t(o).addClass(this.options.slideContentClass), o
        },
        loadElement: function (e) {
            this.elements[e] || (this.slides[e].firstChild ? this.elements[e] = t(this.slides[e]).hasClass(this.options.slideErrorClass) ? 3 : 2 : (this.elements[e] = 1, t(this.slides[e]).addClass(this.options.slideLoadingClass), this.slides[e].appendChild(this.createElement(this.list[e], this.proxyListener))))
        },
        loadElements: function (t) {
            var e, i = Math.min(this.num, 2 * this.options.preloadRange + 1), n = t;
            for (e = 0; i > e; e += 1) n += e * (e % 2 === 0 ? -1 : 1), n = this.circle(n), this.loadElement(n)
        },
        unloadElements: function (t) {
            var e, i;
            for (e in this.elements) this.elements.hasOwnProperty(e) && (i = Math.abs(t - e), i > this.options.preloadRange && i + this.options.preloadRange < this.num && (this.unloadSlide(e), delete this.elements[e]))
        },
        addSlide: function (t) {
            var e = this.slidePrototype.cloneNode(!1);
            e.setAttribute("data-index", t), this.slidesContainer[0].appendChild(e), this.slides.push(e)
        },
        positionSlide: function (t) {
            var e = this.slides[t];
            e.style.width = this.slideWidth + "px", this.support.transform && (e.style.left = t * -this.slideWidth + "px", this.move(t, this.index > t ? -this.slideWidth : this.index < t ? this.slideWidth : 0, 0))
        },
        initSlides: function (e) {
            var i, n;
            for (e || (this.positions = [], this.positions.length = this.num, this.elements = {}, this.imagePrototype = document.createElement("img"), this.elementPrototype = document.createElement("div"), this.slidePrototype = document.createElement("div"), t(this.slidePrototype).addClass(this.options.slideClass), this.slides = this.slidesContainer[0].children, i = this.options.clearSlides || this.slides.length !== this.num), this.slideWidth = this.container[0].offsetWidth, this.slideHeight = this.container[0].offsetHeight, this.slidesContainer[0].style.width = this.num * this.slideWidth + "px", i && this.resetSlides(), n = 0; n < this.num; n += 1) i && this.addSlide(n), this.positionSlide(n);
            this.options.continuous && this.support.transform && (this.move(this.circle(this.index - 1), -this.slideWidth, 0), this.move(this.circle(this.index + 1), this.slideWidth, 0)), this.support.transform || (this.slidesContainer[0].style.left = this.index * -this.slideWidth + "px")
        },
        unloadSlide: function (t) {
            var e, i;
            e = this.slides[t], i = e.firstChild, null !== i && e.removeChild(i)
        },
        unloadAllSlides: function () {
            var t, e;
            for (t = 0, e = this.slides.length; e > t; t++) this.unloadSlide(t)
        },
        toggleControls: function () {
            var t = this.options.controlsClass;
            this.container.hasClass(t) ? this.container.removeClass(t) : this.container.addClass(t)
        },
        toggleSlideshow: function () {
            this.interval ? this.pause() : this.play()
        },
        getNodeIndex: function (t) {
            return parseInt(t.getAttribute("data-index"), 10)
        },
        getNestedProperty: function (t, e) {
            return e.replace(/\[(?:'([^']+)'|"([^"]+)"|(\d+))\]|(?:(?:^|\.)([^\.\[]+))/g, function (e, i, n, s, o) {
                var r = o || i || n || s && parseInt(s, 10);
                e && t && (t = t[r])
            }), t
        },
        getDataProperty: function (e, i) {
            if (e.getAttribute) {
                var n = e.getAttribute("data-" + i.replace(/([A-Z])/g, "-$1").toLowerCase());
                if ("string" == typeof n) {
                    if (/^(true|false|null|-?\d+(\.\d+)?|\{[\s\S]*\}|\[[\s\S]*\])$/.test(n)) try {
                        return t.parseJSON(n)
                    } catch (s) {
                    }
                    return n
                }
            }
        },
        getItemProperty: function (t, e) {
            var i = t[e];
            return void 0 === i && (i = this.getDataProperty(t, e), void 0 === i && (i = this.getNestedProperty(t, e))), i
        },
        initStartIndex: function () {
            var t, e = this.options.index, i = this.options.urlProperty;
            if (e && "number" != typeof e) for (t = 0; t < this.num; t += 1) if (this.list[t] === e || this.getItemProperty(this.list[t], i) === this.getItemProperty(e, i)) {
                e = t;
                break
            }
            this.index = this.circle(parseInt(e, 10) || 0)
        },
        initEventListeners: function () {
            function e(t) {
                var e = i.support.transition && i.support.transition.end === t.type ? "transitionend" : t.type;
                i["on" + e](t)
            }

            var i = this, n = this.slidesContainer;
            t(window).on("resize", e), t(document.body).on("keydown", e), this.container.on("click", e), this.support.touch ? n.on("touchstart touchmove touchend touchcancel", e) : this.options.emulateTouchEvents && this.support.transition && n.on("mousedown mousemove mouseup mouseout", e), this.support.transition && n.on(this.support.transition.end, e), this.proxyListener = e
        },
        destroyEventListeners: function () {
            var e = this.slidesContainer, i = this.proxyListener;
            t(window).off("resize", i), t(document.body).off("keydown", i), this.container.off("click", i), this.support.touch ? e.off("touchstart touchmove touchend touchcancel", i) : this.options.emulateTouchEvents && this.support.transition && e.off("mousedown mousemove mouseup mouseout", i), this.support.transition && e.off(this.support.transition.end, i)
        },
        handleOpen: function () {
            this.options.onopened && this.options.onopened.call(this)
        },
        initWidget: function () {
            function e(t) {
                t.target === i.container[0] && (i.container.off(i.support.transition.end, e), i.handleOpen())
            }

            var i = this;
            return this.container = t(this.options.container), this.container.length ? (this.slidesContainer = this.container.find(this.options.slidesContainer).first(), this.slidesContainer.length ? (this.titleElement = this.container.find(this.options.titleElement).first(), 1 === this.num && this.container.addClass(this.options.singleClass), this.options.onopen && this.options.onopen.call(this), this.support.transition && this.options.displayTransition ? this.container.on(this.support.transition.end, e) : this.handleOpen(), this.options.hidePageScrollbars && (this.bodyOverflowStyle = document.body.style.overflow, document.body.style.overflow = "hidden"), this.container[0].style.display = "block", this.initSlides(), void this.container.addClass(this.options.displayClass)) : (this.console.log("blueimp Gallery: Slides container not found.", this.options.slidesContainer), !1)) : (this.console.log("blueimp Gallery: Widget container not found.", this.options.container), !1)
        },
        initOptions: function (e) {
            this.options = t.extend({}, this.options), (e && e.carousel || this.options.carousel && (!e || e.carousel !== !1)) && t.extend(this.options, this.carouselOptions), t.extend(this.options, e), this.num < 3 && (this.options.continuous = !!this.options.continuous && null), this.support.transition || (this.options.emulateTouchEvents = !1), this.options.event && this.preventDefault(this.options.event)
        }
    }), e
}), function (t) {
    "use strict";
    "function" == typeof define && define.amd ? define(["./blueimp-helper", "./blueimp-gallery"], t) : t(window.blueimp.helper || window.jQuery, window.blueimp.Gallery)
}(function (t, e) {
    "use strict";
    t.extend(e.prototype.options, {fullScreen: !1});
    var i = e.prototype.initialize, n = e.prototype.close;
    return t.extend(e.prototype, {
        getFullScreenElement: function () {
            return document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement
        }, requestFullScreen: function (t) {
            t.requestFullscreen ? t.requestFullscreen() : t.webkitRequestFullscreen ? t.webkitRequestFullscreen() : t.mozRequestFullScreen ? t.mozRequestFullScreen() : t.msRequestFullscreen && t.msRequestFullscreen()
        }, exitFullScreen: function () {
            document.exitFullscreen ? document.exitFullscreen() : document.webkitCancelFullScreen ? document.webkitCancelFullScreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.msExitFullscreen && document.msExitFullscreen()
        }, initialize: function () {
            i.call(this), this.options.fullScreen && !this.getFullScreenElement() && this.requestFullScreen(this.container[0])
        }, close: function () {
            this.getFullScreenElement() === this.container[0] && this.exitFullScreen(), n.call(this)
        }
    }), e
}), function (t) {
    "use strict";
    "function" == typeof define && define.amd ? define(["./blueimp-helper", "./blueimp-gallery"], t) : t(window.blueimp.helper || window.jQuery, window.blueimp.Gallery)
}(function (t, e) {
    "use strict";
    t.extend(e.prototype.options, {
        indicatorContainer: "ol",
        activeIndicatorClass: "active",
        thumbnailProperty: "thumbnail",
        thumbnailIndicators: !0
    });
    var i = e.prototype.initSlides, n = e.prototype.addSlide, s = e.prototype.resetSlides, o = e.prototype.handleClick,
        r = e.prototype.handleSlide, a = e.prototype.handleClose;
    return t.extend(e.prototype, {
        createIndicator: function (e) {
            var i, n, s = this.indicatorPrototype.cloneNode(!1),
                o = this.getItemProperty(e, this.options.titleProperty), r = this.options.thumbnailProperty;
            return this.options.thumbnailIndicators && (r && (i = this.getItemProperty(e, r)), void 0 === i && (n = e.getElementsByTagName && t(e).find("img")[0], n && (i = n.src)), i && (s.style.backgroundImage = 'url("' + i + '")')), o && (s.title = o), s
        }, addIndicator: function (t) {
            if (this.indicatorContainer.length) {
                var e = this.createIndicator(this.list[t]);
                e.setAttribute("data-index", t), this.indicatorContainer[0].appendChild(e), this.indicators.push(e)
            }
        }, setActiveIndicator: function (e) {
            this.indicators && (this.activeIndicator && this.activeIndicator.removeClass(this.options.activeIndicatorClass), this.activeIndicator = t(this.indicators[e]), this.activeIndicator.addClass(this.options.activeIndicatorClass))
        }, initSlides: function (t) {
            t || (this.indicatorContainer = this.container.find(this.options.indicatorContainer), this.indicatorContainer.length && (this.indicatorPrototype = document.createElement("li"), this.indicators = this.indicatorContainer[0].children)), i.call(this, t)
        }, addSlide: function (t) {
            n.call(this, t), this.addIndicator(t)
        }, resetSlides: function () {
            s.call(this), this.indicatorContainer.empty(), this.indicators = []
        }, handleClick: function (t) {
            var e = t.target || t.srcElement, i = e.parentNode;
            if (i === this.indicatorContainer[0]) this.preventDefault(t), this.slide(this.getNodeIndex(e)); else {
                if (i.parentNode !== this.indicatorContainer[0]) return o.call(this, t);
                this.preventDefault(t), this.slide(this.getNodeIndex(i))
            }
        }, handleSlide: function (t) {
            r.call(this, t), this.setActiveIndicator(t)
        }, handleClose: function () {
            this.activeIndicator && this.activeIndicator.removeClass(this.options.activeIndicatorClass), a.call(this)
        }
    }), e
}), function (t) {
    "use strict";
    "function" == typeof define && define.amd ? define(["./blueimp-helper", "./blueimp-gallery"], t) : t(window.blueimp.helper || window.jQuery, window.blueimp.Gallery)
}(function (t, e) {
    "use strict";
    t.extend(e.prototype.options, {
        videoContentClass: "video-content",
        videoLoadingClass: "video-loading",
        videoPlayingClass: "video-playing",
        videoPosterProperty: "poster",
        videoSourcesProperty: "sources"
    });
    var i = e.prototype.handleSlide;
    return t.extend(e.prototype, {
        handleSlide: function (t) {
            i.call(this, t), this.playingVideo && this.playingVideo.pause()
        }, videoFactory: function (e, i, n) {
            var s, o, r, a, l, h = this, d = this.options, u = this.elementPrototype.cloneNode(!1), c = t(u),
                p = [{type: "error", target: u}], f = n || document.createElement("video"),
                m = this.getItemProperty(e, d.urlProperty), g = this.getItemProperty(e, d.typeProperty),
                v = this.getItemProperty(e, d.titleProperty), y = this.getItemProperty(e, d.videoPosterProperty),
                w = this.getItemProperty(e, d.videoSourcesProperty);
            if (c.addClass(d.videoContentClass), v && (u.title = v), f.canPlayType) if (m && g && f.canPlayType(g)) f.src = m; else for (; w && w.length;) if (o = w.shift(), m = this.getItemProperty(o, d.urlProperty), g = this.getItemProperty(o, d.typeProperty), m && g && f.canPlayType(g)) {
                f.src = m;
                break
            }
            return y && (f.poster = y, s = this.imagePrototype.cloneNode(!1), t(s).addClass(d.toggleClass), s.src = y, s.draggable = !1, u.appendChild(s)), r = document.createElement("a"), r.setAttribute("target", "_blank"), n || r.setAttribute("download", v), r.href = m, f.src && (f.controls = !0, (n || t(f)).on("error", function () {
                h.setTimeout(i, p)
            }).on("pause", function () {
                f.seeking || (a = !1, c.removeClass(h.options.videoLoadingClass).removeClass(h.options.videoPlayingClass), l && h.container.addClass(h.options.controlsClass), delete h.playingVideo, h.interval && h.play())
            }).on("playing", function () {
                a = !1, c.removeClass(h.options.videoLoadingClass).addClass(h.options.videoPlayingClass), h.container.hasClass(h.options.controlsClass) ? (l = !0, h.container.removeClass(h.options.controlsClass)) : l = !1
            }).on("play", function () {
                window.clearTimeout(h.timeout), a = !0, c.addClass(h.options.videoLoadingClass), h.playingVideo = f
            }), t(r).on("click", function (t) {
                h.preventDefault(t), a ? f.pause() : f.play()
            }), u.appendChild(n && n.element || f)), u.appendChild(r), this.setTimeout(i, [{
                type: "load",
                target: u
            }]), u
        }
    }), e
}), function (t) {
    "use strict";
    "function" == typeof define && define.amd ? define(["./blueimp-helper", "./blueimp-gallery-video"], t) : t(window.blueimp.helper || window.jQuery, window.blueimp.Gallery)
}(function (t, e) {
    "use strict";
    if (!window.postMessage) return e;
    t.extend(e.prototype.options, {
        vimeoVideoIdProperty: "vimeo",
        vimeoPlayerUrl: "//player.vimeo.com/video/VIDEO_ID?api=1&player_id=PLAYER_ID",
        vimeoPlayerIdPrefix: "vimeo-player-",
        vimeoClickToPlay: !0
    });
    var i = e.prototype.textFactory || e.prototype.imageFactory, n = function (t, e, i, n) {
        this.url = t, this.videoId = e, this.playerId = i, this.clickToPlay = n, this.element = document.createElement("div"), this.listeners = {}
    }, s = 0;
    return t.extend(n.prototype, {
        canPlayType: function () {
            return !0
        }, on: function (t, e) {
            return this.listeners[t] = e, this
        }, loadAPI: function () {
            function e() {
                !n && s.playOnReady && s.play(), n = !0
            }

            for (var i, n, s = this, o = "//f.vimeocdn.com/js/froogaloop2.min.js", r = document.getElementsByTagName("script"), a = r.length; a;) if (a -= 1, r[a].src === o) {
                i = r[a];
                break
            }
            i || (i = document.createElement("script"), i.src = o), t(i).on("load", e), r[0].parentNode.insertBefore(i, r[0]), /loaded|complete/.test(i.readyState) && e()
        }, onReady: function () {
            var t = this;
            this.ready = !0, this.player.addEvent("play", function () {
                t.hasPlayed = !0, t.onPlaying()
            }), this.player.addEvent("pause", function () {
                t.onPause()
            }), this.player.addEvent("finish", function () {
                t.onPause()
            }), this.playOnReady && this.play()
        }, onPlaying: function () {
            this.playStatus < 2 && (this.listeners.playing(), this.playStatus = 2)
        }, onPause: function () {
            this.listeners.pause(), delete this.playStatus
        }, insertIframe: function () {
            var t = document.createElement("iframe");
            t.src = this.url.replace("VIDEO_ID", this.videoId).replace("PLAYER_ID", this.playerId), t.id = this.playerId, this.element.parentNode.replaceChild(t, this.element), this.element = t
        }, play: function () {
            var t = this;
            this.playStatus || (this.listeners.play(), this.playStatus = 1), this.ready ? !this.hasPlayed && (this.clickToPlay || window.navigator && /iP(hone|od|ad)/.test(window.navigator.platform)) ? this.onPlaying() : this.player.api("play") : (this.playOnReady = !0, window.$f ? this.player || (this.insertIframe(), this.player = $f(this.element), this.player.addEvent("ready", function () {
                t.onReady()
            })) : this.loadAPI())
        }, pause: function () {
            this.ready ? this.player.api("pause") : this.playStatus && (delete this.playOnReady, this.listeners.pause(), delete this.playStatus)
        }
    }), t.extend(e.prototype, {
        VimeoPlayer: n, textFactory: function (t, e) {
            var o = this.options, r = this.getItemProperty(t, o.vimeoVideoIdProperty);
            return r ? (void 0 === this.getItemProperty(t, o.urlProperty) && (t[o.urlProperty] = "//vimeo.com/" + r), s += 1, this.videoFactory(t, e, new n(o.vimeoPlayerUrl, r, o.vimeoPlayerIdPrefix + s, o.vimeoClickToPlay))) : i.call(this, t, e)
        }
    }), e
}), function (t) {
    "use strict";
    "function" == typeof define && define.amd ? define(["./blueimp-helper", "./blueimp-gallery-video"], t) : t(window.blueimp.helper || window.jQuery, window.blueimp.Gallery)
}(function (t, e) {
    "use strict";
    if (!window.postMessage) return e;
    t.extend(e.prototype.options, {
        youTubeVideoIdProperty: "youtube",
        youTubePlayerVars: {wmode: "transparent"},
        youTubeClickToPlay: !0
    });
    var i = e.prototype.textFactory || e.prototype.imageFactory, n = function (t, e, i) {
        this.videoId = t, this.playerVars = e, this.clickToPlay = i, this.element = document.createElement("div"), this.listeners = {}
    };
    return t.extend(n.prototype, {
        canPlayType: function () {
            return !0
        }, on: function (t, e) {
            return this.listeners[t] = e, this
        }, loadAPI: function () {
            var t, e = this, i = window.onYouTubeIframeAPIReady, n = "//www.youtube.com/iframe_api",
                s = document.getElementsByTagName("script"), o = s.length;
            for (window.onYouTubeIframeAPIReady = function () {
                i && i.apply(this), e.playOnReady && e.play()
            }; o;) if (o -= 1, s[o].src === n) return;
            t = document.createElement("script"), t.src = n, s[0].parentNode.insertBefore(t, s[0])
        }, onReady: function () {
            this.ready = !0, this.playOnReady && this.play()
        }, onPlaying: function () {
            this.playStatus < 2 && (this.listeners.playing(), this.playStatus = 2)
        }, onPause: function () {
            e.prototype.setTimeout.call(this, this.checkSeek, null, 2e3)
        }, checkSeek: function () {
            (this.stateChange === YT.PlayerState.PAUSED || this.stateChange === YT.PlayerState.ENDED) && (this.listeners.pause(), delete this.playStatus)
        }, onStateChange: function (t) {
            switch (t.data) {
                case YT.PlayerState.PLAYING:
                    this.hasPlayed = !0, this.onPlaying();
                    break;
                case YT.PlayerState.PAUSED:
                case YT.PlayerState.ENDED:
                    this.onPause()
            }
            this.stateChange = t.data
        }, onError: function (t) {
            this.listeners.error(t)
        }, play: function () {
            var t = this;
            this.playStatus || (this.listeners.play(), this.playStatus = 1), this.ready ? !this.hasPlayed && (this.clickToPlay || window.navigator && /iP(hone|od|ad)/.test(window.navigator.platform)) ? this.onPlaying() : this.player.playVideo() : (this.playOnReady = !0, window.YT && YT.Player ? this.player || (this.player = new YT.Player(this.element, {
                videoId: this.videoId,
                playerVars: this.playerVars,
                events: {
                    onReady: function () {
                        t.onReady()
                    }, onStateChange: function (e) {
                        t.onStateChange(e)
                    }, onError: function (e) {
                        t.onError(e)
                    }
                }
            })) : this.loadAPI())
        }, pause: function () {
            this.ready ? this.player.pauseVideo() : this.playStatus && (delete this.playOnReady, this.listeners.pause(), delete this.playStatus)
        }
    }), t.extend(e.prototype, {
        YouTubePlayer: n, textFactory: function (t, e) {
            var s = this.options, o = this.getItemProperty(t, s.youTubeVideoIdProperty);
            return o ? (void 0 === this.getItemProperty(t, s.urlProperty) && (t[s.urlProperty] = "//www.youtube.com/watch?v=" + o), void 0 === this.getItemProperty(t, s.videoPosterProperty) && (t[s.videoPosterProperty] = "//img.youtube.com/vi/" + o + "/maxresdefault.jpg"), this.videoFactory(t, e, new n(o, s.youTubePlayerVars, s.youTubeClickToPlay))) : i.call(this, t, e)
        }
    }), e
}), !function (t) {
    function e(n) {
        if (i[n]) return i[n].exports;
        var s = i[n] = {i: n, l: !1, exports: {}};
        return t[n].call(s.exports, s, s.exports, e), s.l = !0, s.exports
    }

    var i = {};
    e.m = t, e.c = i, e.d = function (t, i, n) {
        e.o(t, i) || Object.defineProperty(t, i, {configurable: !1, enumerable: !0, get: n})
    }, e.n = function (t) {
        var i = t && t.__esModule ? function () {
            return t["default"]
        } : function () {
            return t
        };
        return e.d(i, "a", i), i
    }, e.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, e.p = "", e(e.s = 11)
}([function (t, e, i) {
    "use strict";
    (function (e) {
        var i;
        i = "undefined" != typeof window ? window : void 0 !== e ? e : "undefined" != typeof self ? self : {}, t.exports = i
    }).call(e, i(2))
}, function (t, e, i) {
    "use strict";
    t.exports = function (t) {
        "complete" === document.readyState || "interactive" === document.readyState ? t.call() : document.attachEvent ? document.attachEvent("onreadystatechange", function () {
            "interactive" === document.readyState && t.call()
        }) : document.addEventListener && document.addEventListener("DOMContentLoaded", t)
    }
}, function (t, e, i) {
    "use strict";
    var n, s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t
    } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    };
    n = function () {
        return this
    }();
    try {
        n = n || Function("return this")() || (0, eval)("this")
    } catch (t) {
        "object" === ("undefined" == typeof window ? "undefined" : s(window)) && (n = window)
    }
    t.exports = n
}, , , , , , , , , function (t, e, i) {
    t.exports = i(12)
}, function (t, e, i) {
    "use strict";

    function n(t) {
        return t && t.__esModule ? t : {"default": t}
    }

    var s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t
    } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }, o = n(i(1)), r = i(0), a = n(i(13)), l = r.window.jarallax;
    if (r.window.jarallax = a["default"], r.window.jarallax.noConflict = function () {
        return r.window.jarallax = l, this
    }, void 0 !== r.jQuery) {
        var h = function () {
            var t = arguments || [];
            Array.prototype.unshift.call(t, this);
            var e = a["default"].apply(r.window, t);
            return "object" !== (void 0 === e ? "undefined" : s(e)) ? e : this
        };
        h.constructor = a["default"].constructor;
        var d = r.jQuery.fn.jarallax;
        r.jQuery.fn.jarallax = h, r.jQuery.fn.jarallax.noConflict = function () {
            return r.jQuery.fn.jarallax = d, this
        }
    }
    (0, o["default"])(function () {
        (0, a["default"])(document.querySelectorAll("[data-jarallax]"))
    })
}, function (t, e, i) {
    "use strict";
    (function (t) {
        function n(t) {
            return t && t.__esModule ? t : {"default": t}
        }

        function s(t) {
            p = u.window.innerWidth || document.documentElement.clientWidth, f = u.window.innerHeight || document.documentElement.clientHeight, "object" !== (void 0 === t ? "undefined" : l(t)) || "load" !== t.type && "dom-loaded" !== t.type || (g = !0)
        }

        function o() {
            if (y.length) {
                m = void 0 !== u.window.pageYOffset ? u.window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
                var t = g || !w || w.width !== p || w.height !== f, e = v || t || !w || w.y !== m;
                v = g = !1, (t || e) && (y.forEach(function (i) {
                    t && i.onResize(), e && i.onScroll()
                }), w = {width: p, height: f, y: m}), (0, d["default"])(o)
            }
        }

        Object.defineProperty(e, "__esModule", {value: !0});
        var r = function (t, e) {
            if (Array.isArray(t)) return t;
            if (Symbol.iterator in Object(t)) return function (t, e) {
                var i = [], n = !0, s = !1, o = void 0;
                try {
                    for (var r, a = t[Symbol.iterator](); !(n = (r = a.next()).done) && (i.push(r.value), !e || i.length !== e); n = !0) ;
                } catch (t) {
                    s = !0, o = t
                } finally {
                    try {
                        !n && a["return"] && a["return"]()
                    } finally {
                        if (s) throw o
                    }
                }
                return i
            }(t, e);
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }, a = function () {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }

            return function (e, i, n) {
                return i && t(e.prototype, i), n && t(e, n), e
            }
        }(), l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }, h = n(i(1)), d = n(i(14)), u = i(0), c = function () {
            for (var t = "transform WebkitTransform MozTransform".split(" "), e = document.createElement("div"), i = 0; i < t.length; i++) if (e && void 0 !== e.style[t[i]]) return t[i];
            return !1
        }(), p = void 0, f = void 0, m = void 0, g = !1, v = !1;
        s(), u.window.addEventListener("resize", s), u.window.addEventListener("orientationchange", s), u.window.addEventListener("load", s), (0, h["default"])(function () {
            s({type: "dom-loaded"})
        });
        var y = [], w = !1, b = !!t.ResizeObserver && new t.ResizeObserver(function (t) {
            t && t.length && (0, d["default"])(function () {
                t.forEach(function (t) {
                    t.target && t.target.jarallax && (g || t.target.jarallax.onResize(), v = !0)
                })
            })
        }), x = 0, C = function () {
            function t(e, i) {
                !function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t);
                var n = this;
                n.instanceID = x++, n.$item = e, n.defaults = {
                    type: "scroll",
                    speed: .5,
                    imgSrc: null,
                    imgElement: ".jarallax-img",
                    imgSize: "cover",
                    imgPosition: "50% 50%",
                    imgRepeat: "no-repeat",
                    keepImg: !1,
                    elementInViewport: null,
                    zIndex: -100,
                    disableParallax: !1,
                    disableVideo: !1,
                    automaticResize: !0,
                    videoSrc: null,
                    videoStartTime: 0,
                    videoEndTime: 0,
                    videoVolume: 0,
                    videoPlayOnlyVisible: !0,
                    onScroll: null,
                    onInit: null,
                    onDestroy: null,
                    onCoverImage: null
                };
                var s = n.$item.getAttribute("data-jarallax"), o = JSON.parse(s || "{}");
                s && console.warn("Detected usage of deprecated data-jarallax JSON options, you should use pure data-attribute options. See info here - https://github.com/nk-o/jarallax/issues/53");
                var a = n.$item.dataset || {}, h = {};
                if (Object.keys(a).forEach(function (t) {
                    var e = t.substr(0, 1).toLowerCase() + t.substr(1);
                    e && void 0 !== n.defaults[e] && (h[e] = a[t])
                }), n.options = n.extend({}, n.defaults, o, h, i), n.pureOptions = n.extend({}, n.options), Object.keys(n.options).forEach(function (t) {
                    "true" === n.options[t] ? n.options[t] = !0 : "false" === n.options[t] && (n.options[t] = !1)
                }), n.options.speed = Math.min(2, Math.max(-1, parseFloat(n.options.speed))), (n.options.noAndroid || n.options.noIos) && (console.warn("Detected usage of deprecated noAndroid or noIos options, you should use disableParallax option. See info here - https://github.com/nk-o/jarallax/#disable-on-mobile-devices"), n.options.disableParallax || (n.options.noIos && n.options.noAndroid ? n.options.disableParallax = /iPad|iPhone|iPod|Android/ : n.options.noIos ? n.options.disableParallax = /iPad|iPhone|iPod/ : n.options.noAndroid && (n.options.disableParallax = /Android/))), "string" == typeof n.options.disableParallax && (n.options.disableParallax = new RegExp(n.options.disableParallax)), n.options.disableParallax instanceof RegExp) {
                    var d = n.options.disableParallax;
                    n.options.disableParallax = function () {
                        return d.test(navigator.userAgent)
                    }
                }
                if ("function" != typeof n.options.disableParallax && (n.options.disableParallax = function () {
                    return !1
                }), "string" == typeof n.options.disableVideo && (n.options.disableVideo = new RegExp(n.options.disableVideo)), n.options.disableVideo instanceof RegExp) {
                    var u = n.options.disableVideo;
                    n.options.disableVideo = function () {
                        return u.test(navigator.userAgent)
                    }
                }
                "function" != typeof n.options.disableVideo && (n.options.disableVideo = function () {
                    return !1
                });
                var c = n.options.elementInViewport;
                c && "object" === (void 0 === c ? "undefined" : l(c)) && void 0 !== c.length && (c = r(c, 1)[0]), c instanceof Element || (c = null), n.options.elementInViewport = c, n.image = {
                    src: n.options.imgSrc || null,
                    $container: null,
                    useImgTag: !1,
                    position: /iPad|iPhone|iPod|Android/.test(navigator.userAgent) ? "absolute" : "fixed"
                }, n.initImg() && n.canInitParallax() && n.init()
            }

            return a(t, [{
                key: "css", value: function (t, e) {
                    return "string" == typeof e ? u.window.getComputedStyle(t).getPropertyValue(e) : (e.transform && c && (e[c] = e.transform), Object.keys(e).forEach(function (i) {
                        t.style[i] = e[i]
                    }), t)
                }
            }, {
                key: "extend", value: function (t) {
                    var e = arguments;
                    return t = t || {}, Object.keys(arguments).forEach(function (i) {
                        e[i] && Object.keys(e[i]).forEach(function (n) {
                            t[n] = e[i][n]
                        })
                    }), t
                }
            }, {
                key: "getWindowData", value: function () {
                    return {width: p, height: f, y: m}
                }
            }, {
                key: "initImg", value: function () {
                    var t = this, e = t.options.imgElement;
                    return e && "string" == typeof e && (e = t.$item.querySelector(e)), e instanceof Element || (e = null), e && (t.options.keepImg ? t.image.$item = e.cloneNode(!0) : (t.image.$item = e, t.image.$itemParent = e.parentNode), t.image.useImgTag = !0), !(!t.image.$item && (null === t.image.src && (t.image.src = t.css(t.$item, "background-image").replace(/^url\(['"]?/g, "").replace(/['"]?\)$/g, "")), !t.image.src || "none" === t.image.src))
                }
            }, {
                key: "canInitParallax", value: function () {
                    return c && !this.options.disableParallax()
                }
            }, {
                key: "init", value: function () {
                    var t = this, e = {
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        overflow: "hidden",
                        pointerEvents: "none"
                    }, i = {};
                    if (!t.options.keepImg) {
                        var n = t.$item.getAttribute("style");
                        if (n && t.$item.setAttribute("data-jarallax-original-styles", n), t.image.useImgTag) {
                            var s = t.image.$item.getAttribute("style");
                            s && t.image.$item.setAttribute("data-jarallax-original-styles", s)
                        }
                    }
                    if ("static" === t.css(t.$item, "position") && t.css(t.$item, {position: "relative"}), "auto" === t.css(t.$item, "z-index") && t.css(t.$item, {zIndex: 0}), t.image.$container = document.createElement("div"), t.css(t.image.$container, e), t.css(t.image.$container, {"z-index": t.options.zIndex}), t.image.$container.setAttribute("id", "jarallax-container-" + t.instanceID), t.$item.appendChild(t.image.$container), t.image.useImgTag ? i = t.extend({
                        "object-fit": t.options.imgSize,
                        "object-position": t.options.imgPosition,
                        "font-family": "object-fit: " + t.options.imgSize + "; object-position: " + t.options.imgPosition + ";",
                        "max-width": "none"
                    }, e, i) : (t.image.$item = document.createElement("div"), t.image.src && (i = t.extend({
                        "background-position": t.options.imgPosition,
                        "background-size": t.options.imgSize,
                        "background-repeat": t.options.imgRepeat,
                        "background-image": 'url("' + t.image.src + '")'
                    }, e, i))), "opacity" !== t.options.type && "scale" !== t.options.type && "scale-opacity" !== t.options.type && 1 !== t.options.speed || (t.image.position = "absolute"), "fixed" === t.image.position) for (var o = 0, r = t.$item; null !== r && r !== document && 0 === o;) {
                        var a = t.css(r, "-webkit-transform") || t.css(r, "-moz-transform") || t.css(r, "transform");
                        a && "none" !== a && (o = 1, t.image.position = "absolute"), r = r.parentNode
                    }
                    i.position = t.image.position, t.css(t.image.$item, i), t.image.$container.appendChild(t.image.$item), t.coverImage(), t.clipContainer(), t.onScroll(!0), t.options.automaticResize && b && b.observe(t.$item), t.options.onInit && t.options.onInit.call(t), "none" !== t.css(t.$item, "background-image") && t.css(t.$item, {"background-image": "none"}), t.addToParallaxList()
                }
            }, {
                key: "addToParallaxList", value: function () {
                    y.push(this), 1 === y.length && o()
                }
            }, {
                key: "removeFromParallaxList", value: function () {
                    var t = this;
                    y.forEach(function (e, i) {
                        e.instanceID === t.instanceID && y.splice(i, 1)
                    })
                }
            }, {
                key: "destroy", value: function () {
                    var t = this;
                    t.removeFromParallaxList();
                    var e = t.$item.getAttribute("data-jarallax-original-styles");
                    if (t.$item.removeAttribute("data-jarallax-original-styles"), e ? t.$item.setAttribute("style", e) : t.$item.removeAttribute("style"), t.image.useImgTag) {
                        var i = t.image.$item.getAttribute("data-jarallax-original-styles");
                        t.image.$item.removeAttribute("data-jarallax-original-styles"), i ? t.image.$item.setAttribute("style", e) : t.image.$item.removeAttribute("style"), t.image.$itemParent && t.image.$itemParent.appendChild(t.image.$item)
                    }
                    t.$clipStyles && t.$clipStyles.parentNode.removeChild(t.$clipStyles), t.image.$container && t.image.$container.parentNode.removeChild(t.image.$container), t.options.onDestroy && t.options.onDestroy.call(t), delete t.$item.jarallax
                }
            }, {
                key: "clipContainer", value: function () {
                    if ("fixed" === this.image.position) {
                        var t = this, e = t.image.$container.getBoundingClientRect(), i = e.width, n = e.height;
                        t.$clipStyles || (t.$clipStyles = document.createElement("style"), t.$clipStyles.setAttribute("type", "text/css"), t.$clipStyles.setAttribute("id", "jarallax-clip-" + t.instanceID), (document.head || document.getElementsByTagName("head")[0]).appendChild(t.$clipStyles));
                        var s = "#jarallax-container-" + t.instanceID + " {\n           clip: rect(0 " + i + "px " + n + "px 0);\n           clip: rect(0, " + i + "px, " + n + "px, 0);\n        }";
                        t.$clipStyles.styleSheet ? t.$clipStyles.styleSheet.cssText = s : t.$clipStyles.innerHTML = s
                    }
                }
            }, {
                key: "coverImage", value: function () {
                    var t = this, e = t.image.$container.getBoundingClientRect(), i = e.height, n = t.options.speed,
                        s = "scroll" === t.options.type || "scroll-opacity" === t.options.type, o = 0, r = i, a = 0;
                    return s && (o = n < 0 ? n * Math.max(i, f) : n * (i + f), 1 < n ? r = Math.abs(o - f) : n < 0 ? r = o / n + Math.abs(o) : r += Math.abs(f - i) * (1 - n), o /= 2), t.parallaxScrollDistance = o, a = s ? (f - r) / 2 : (i - r) / 2, t.css(t.image.$item, {
                        height: r + "px",
                        marginTop: a + "px",
                        left: "fixed" === t.image.position ? e.left + "px" : "0",
                        width: e.width + "px"
                    }), t.options.onCoverImage && t.options.onCoverImage.call(t), {
                        image: {height: r, marginTop: a},
                        container: e
                    }
                }
            }, {
                key: "isVisible", value: function () {
                    return this.isElementInViewport || !1
                }
            }, {
                key: "onScroll", value: function (t) {
                    var e = this, i = e.$item.getBoundingClientRect(), n = i.top, s = i.height, o = {}, r = i;
                    if (e.options.elementInViewport && (r = e.options.elementInViewport.getBoundingClientRect()), e.isElementInViewport = 0 <= r.bottom && 0 <= r.right && r.top <= f && r.left <= p, t || e.isElementInViewport) {
                        var a = Math.max(0, n), l = Math.max(0, s + n), h = Math.max(0, -n), d = Math.max(0, n + s - f),
                            u = Math.max(0, s - (n + s - f)), c = Math.max(0, -n + f - s),
                            m = 1 - 2 * (f - n) / (f + s), g = 1;
                        if (s < f ? g = 1 - (h || d) / s : l <= f ? g = l / f : u <= f && (g = u / f), "opacity" !== e.options.type && "scale-opacity" !== e.options.type && "scroll-opacity" !== e.options.type || (o.transform = "translate3d(0,0,0)", o.opacity = g), "scale" === e.options.type || "scale-opacity" === e.options.type) {
                            var v = 1;
                            e.options.speed < 0 ? v -= e.options.speed * g : v += e.options.speed * (1 - g), o.transform = "scale(" + v + ") translate3d(0,0,0)"
                        }
                        if ("scroll" === e.options.type || "scroll-opacity" === e.options.type) {
                            var y = e.parallaxScrollDistance * m;
                            "absolute" === e.image.position && (y -= n), o.transform = "translate3d(0," + y + "px,0)"
                        }
                        e.css(e.image.$item, o), e.options.onScroll && e.options.onScroll.call(e, {
                            section: i,
                            beforeTop: a,
                            beforeTopEnd: l,
                            afterTop: h,
                            beforeBottom: d,
                            beforeBottomEnd: u,
                            afterBottom: c,
                            visiblePercent: g,
                            fromViewportCenter: m
                        })
                    }
                }
            }, {
                key: "onResize", value: function () {
                    this.coverImage(), this.clipContainer()
                }
            }]), t
        }(), T = function (t) {
            ("object" === ("undefined" == typeof HTMLElement ? "undefined" : l(HTMLElement)) ? t instanceof HTMLElement : t && "object" === (void 0 === t ? "undefined" : l(t)) && null !== t && 1 === t.nodeType && "string" == typeof t.nodeName) && (t = [t]);
            for (var e = arguments[1], i = Array.prototype.slice.call(arguments, 2), n = t.length, s = 0, o = void 0; s < n; s++) if ("object" === (void 0 === e ? "undefined" : l(e)) || void 0 === e ? t[s].jarallax || (t[s].jarallax = new C(t[s], e)) : t[s].jarallax && (o = t[s].jarallax[e].apply(t[s].jarallax, i)), void 0 !== o) return o;
            return t
        };
        T.constructor = C, e["default"] = T
    }).call(e, i(2))
}, function (t, e, i) {
    "use strict";
    var n = i(0),
        s = n.requestAnimationFrame || n.webkitRequestAnimationFrame || n.mozRequestAnimationFrame || function (t) {
            var e = +new Date, i = Math.max(0, 16 - (e - o)), n = setTimeout(t, i);
            return o = e, n
        }, o = +new Date,
        r = n.cancelAnimationFrame || n.webkitCancelAnimationFrame || n.mozCancelAnimationFrame || clearTimeout;
    Function.prototype.bind && (s = s.bind(n), r = r.bind(n)), (t.exports = s).cancel = r
}]), !function (t) {
    function e(n) {
        if (i[n]) return i[n].exports;
        var s = i[n] = {i: n, l: !1, exports: {}};
        return t[n].call(s.exports, s, s.exports, e), s.l = !0, s.exports
    }

    var i = {};
    e.m = t, e.c = i, e.d = function (t, i, n) {
        e.o(t, i) || Object.defineProperty(t, i, {configurable: !1, enumerable: !0, get: n})
    }, e.n = function (t) {
        var i = t && t.__esModule ? function () {
            return t["default"]
        } : function () {
            return t
        };
        return e.d(i, "a", i), i
    }, e.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, e.p = "", e(e.s = 4)
}([function (t, e, i) {
    "use strict";
    (function (e) {
        var i;
        i = "undefined" != typeof window ? window : void 0 !== e ? e : "undefined" != typeof self ? self : {}, t.exports = i
    }).call(e, i(2))
}, function (t, e, i) {
    "use strict";
    t.exports = function (t) {
        "complete" === document.readyState || "interactive" === document.readyState ? t.call() : document.attachEvent ? document.attachEvent("onreadystatechange", function () {
            "interactive" === document.readyState && t.call()
        }) : document.addEventListener && document.addEventListener("DOMContentLoaded", t)
    }
}, function (t, e, i) {
    "use strict";
    var n, s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t
    } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    };
    n = function () {
        return this
    }();
    try {
        n = n || Function("return this")() || (0, eval)("this")
    } catch (t) {
        "object" === ("undefined" == typeof window ? "undefined" : s(window)) && (n = window)
    }
    t.exports = n
}, , function (t, e, i) {
    t.exports = i(5)
}, function (t, e, i) {
    "use strict";

    function n(t) {
        return t && t.__esModule ? t : {"default": t}
    }

    var s = n(i(1));
    (0, n(i(6))["default"])(), (0, s["default"])(function () {
        "undefined" != typeof jarallax && jarallax(document.querySelectorAll("[data-jarallax-element]"))
    })
}, function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0}), e["default"] = function () {
        var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : o["default"].jarallax;
        if (void 0 !== t) {
            var e = t.constructor;
            ["initImg", "canInitParallax", "init", "destroy", "clipContainer", "coverImage", "isVisible", "onScroll", "onResize"].forEach(function (t) {
                var i = e.prototype[t];
                e.prototype[t] = function () {
                    var e = this, n = arguments || [];
                    if ("initImg" === t && null !== e.$item.getAttribute("data-jarallax-element") && (e.options.type = "element", e.pureOptions.speed = e.$item.getAttribute("data-jarallax-element") || e.pureOptions.speed), "element" !== e.options.type) return i.apply(e, n);
                    switch (e.pureOptions.threshold = e.$item.getAttribute("data-threshold") || "", t) {
                        case"init":
                            var s = e.pureOptions.speed.split(" ");
                            e.options.speed = e.pureOptions.speed || 0, e.options.speedY = s[0] ? parseFloat(s[0]) : 0, e.options.speedX = s[1] ? parseFloat(s[1]) : 0;
                            var o = e.pureOptions.threshold.split(" ");
                            e.options.thresholdY = o[0] ? parseFloat(o[0]) : null, e.options.thresholdX = o[1] ? parseFloat(o[1]) : null, e.onResize(), e.onScroll(), e.addToParallaxList();
                            break;
                        case"onResize":
                            var r = e.css(e.$item, "transform");
                            e.css(e.$item, {transform: ""});
                            var a = e.$item.getBoundingClientRect();
                            e.itemData = {
                                width: a.width,
                                height: a.height,
                                y: a.top + e.getWindowData().y,
                                x: a.left
                            }, e.css(e.$item, {transform: r});
                            break;
                        case"onScroll":
                            var l = e.getWindowData(),
                                h = (l.y + l.height / 2 - e.itemData.y - e.itemData.height / 2) / (l.height / 2),
                                d = h * e.options.speedY, u = h * e.options.speedX, c = d, p = u;
                            null !== e.options.thresholdY && d > e.options.thresholdY && (c = 0), null !== e.options.thresholdX && u > e.options.thresholdX && (p = 0), e.css(e.$item, {transform: "translate3d(" + p + "px," + c + "px,0)"});
                            break;
                        case"initImg":
                        case"isVisible":
                        case"clipContainer":
                        case"coverImage":
                            return !0
                    }
                    return i.apply(e, n)
                }
            })
        }
    };
    var n, s = i(0), o = (n = s) && n.__esModule ? n : {"default": n}
}]), !function (t) {
    function e(n) {
        if (i[n]) return i[n].exports;
        var s = i[n] = {i: n, l: !1, exports: {}};
        return t[n].call(s.exports, s, s.exports, e), s.l = !0, s.exports
    }

    var i = {};
    e.m = t, e.c = i, e.d = function (t, i, n) {
        e.o(t, i) || Object.defineProperty(t, i, {configurable: !1, enumerable: !0, get: n})
    }, e.n = function (t) {
        var i = t && t.__esModule ? function () {
            return t["default"]
        } : function () {
            return t
        };
        return e.d(i, "a", i), i
    }, e.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, e.p = "", e(e.s = 7)
}([function (t, e, i) {
    "use strict";
    (function (e) {
        var i;
        i = "undefined" != typeof window ? window : void 0 !== e ? e : "undefined" != typeof self ? self : {}, t.exports = i
    }).call(e, i(2))
}, function (t, e, i) {
    "use strict";
    t.exports = function (t) {
        "complete" === document.readyState || "interactive" === document.readyState ? t.call() : document.attachEvent ? document.attachEvent("onreadystatechange", function () {
            "interactive" === document.readyState && t.call()
        }) : document.addEventListener && document.addEventListener("DOMContentLoaded", t)
    }
}, function (t, e, i) {
    "use strict";
    var n, s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t
    } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    };
    n = function () {
        return this
    }();
    try {
        n = n || Function("return this")() || (0, eval)("this")
    } catch (t) {
        "object" === ("undefined" == typeof window ? "undefined" : s(window)) && (n = window)
    }
    t.exports = n
}, function (t, e, i) {
    "use strict";
    t.exports = i(9)
}, , , , function (t, e, i) {
    t.exports = i(8)
}, function (t, e, i) {
    "use strict";

    function n(t) {
        return t && t.__esModule ? t : {"default": t}
    }

    var s = n(i(3)), o = n(i(0)), r = n(i(1)), a = n(i(10));
    o["default"].VideoWorker = o["default"].VideoWorker || s["default"], (0, a["default"])(), (0, r["default"])(function () {
        "undefined" != typeof jarallax && jarallax(document.querySelectorAll("[data-jarallax-video]"))
    })
}, function (t, e, i) {
    "use strict";

    function n() {
        this._done = [], this._fail = []
    }

    Object.defineProperty(e, "__esModule", {value: !0});
    var s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t
    } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }, o = function () {
        function t(t, e) {
            for (var i = 0; i < e.length; i++) {
                var n = e[i];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
            }
        }

        return function (e, i, n) {
            return i && t(e.prototype, i), n && t(e, n), e
        }
    }();
    n.prototype = {
        execute: function (t, e) {
            var i = t.length;
            for (e = Array.prototype.slice.call(e); i--;) t[i].apply(null, e)
        }, resolve: function () {
            this.execute(this._done, arguments)
        }, reject: function () {
            this.execute(this._fail, arguments)
        }, done: function (t) {
            this._done.push(t)
        }, fail: function (t) {
            this._fail.push(t)
        }
    };
    var r = 0, a = 0, l = 0, h = 0, d = 0, u = new n, c = new n, p = function () {
        function t(e, i) {
            !function (t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, t);
            var n = this;
            n.url = e, n.options_default = {
                autoplay: !1,
                loop: !1,
                mute: !1,
                volume: 100,
                showContols: !0,
                startTime: 0,
                endTime: 0
            }, n.options = n.extend({}, n.options_default, i), n.videoID = n.parseURL(e), n.videoID && (n.ID = r++, n.loadAPI(), n.init())
        }

        return o(t, [{
            key: "extend", value: function (t) {
                var e = arguments;
                return t = t || {}, Object.keys(arguments).forEach(function (i) {
                    e[i] && Object.keys(e[i]).forEach(function (n) {
                        t[n] = e[i][n]
                    })
                }), t
            }
        }, {
            key: "parseURL", value: function (t) {
                var e, i, n, s, o,
                    r = !(!(e = t.match(/.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/)) || 11 !== e[1].length) && e[1],
                    a = !(!(i = t.match(/https?:\/\/(?:www\.|player\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/([^\/]*)\/videos\/|album\/(\d+)\/video\/|video\/|)(\d+)(?:$|\/|\?)/)) || !i[3]) && i[3],
                    l = (n = t.split(/,(?=mp4\:|webm\:|ogv\:|ogg\:)/), s = {}, o = 0, n.forEach(function (t) {
                        var e = t.match(/^(mp4|webm|ogv|ogg)\:(.*)/);
                        e && e[1] && e[2] && (s["ogv" === e[1] ? "ogg" : e[1]] = e[2], o = 1)
                    }), !!o && s);
                return r ? (this.type = "youtube", r) : a ? (this.type = "vimeo", a) : !!l && (this.type = "local", l)
            }
        }, {
            key: "isValid", value: function () {
                return !!this.videoID
            }
        }, {
            key: "on", value: function (t, e) {
                this.userEventsList = this.userEventsList || [], (this.userEventsList[t] || (this.userEventsList[t] = [])).push(e)
            }
        }, {
            key: "off", value: function (t, e) {
                var i = this;
                this.userEventsList && this.userEventsList[t] && (e ? this.userEventsList[t].forEach(function (n, s) {
                    n === e && (i.userEventsList[t][s] = !1)
                }) : delete this.userEventsList[t])
            }
        }, {
            key: "fire", value: function (t) {
                var e = this, i = [].slice.call(arguments, 1);
                this.userEventsList && void 0 !== this.userEventsList[t] && this.userEventsList[t].forEach(function (t) {
                    t && t.apply(e, i)
                })
            }
        }, {
            key: "play", value: function (t) {
                var e = this;
                e.player && ("youtube" === e.type && e.player.playVideo && (void 0 !== t && e.player.seekTo(t || 0), YT.PlayerState.PLAYING !== e.player.getPlayerState() && e.player.playVideo()), "vimeo" === e.type && (void 0 !== t && e.player.setCurrentTime(t), e.player.getPaused().then(function (t) {
                    t && e.player.play()
                })), "local" === e.type && (void 0 !== t && (e.player.currentTime = t), e.player.paused && e.player.play()))
            }
        }, {
            key: "pause", value: function () {
                var t = this;
                t.player && ("youtube" === t.type && t.player.pauseVideo && YT.PlayerState.PLAYING === t.player.getPlayerState() && t.player.pauseVideo(), "vimeo" === t.type && t.player.getPaused().then(function (e) {
                    e || t.player.pause()
                }), "local" === t.type && (t.player.paused || t.player.pause()))
            }
        }, {
            key: "mute", value: function () {
                var t = this;
                t.player && ("youtube" === t.type && t.player.mute && t.player.mute(), "vimeo" === t.type && t.player.setVolume && t.player.setVolume(0), "local" === t.type && (t.$video.muted = !0))
            }
        }, {
            key: "unmute", value: function () {
                var t = this;
                t.player && ("youtube" === t.type && t.player.mute && t.player.unMute(), "vimeo" === t.type && t.player.setVolume && t.player.setVolume(t.options.volume), "local" === t.type && (t.$video.muted = !1))
            }
        }, {
            key: "setVolume", value: function () {
                var t = 0 < arguments.length && void 0 !== arguments[0] && arguments[0], e = this;
                e.player && t && ("youtube" === e.type && e.player.setVolume && e.player.setVolume(t), "vimeo" === e.type && e.player.setVolume && e.player.setVolume(t), "local" === e.type && (e.$video.volume = t / 100))
            }
        }, {
            key: "getVolume", value: function (t) {
                var e = this;
                e.player ? ("youtube" === e.type && e.player.getVolume && t(e.player.getVolume()), "vimeo" === e.type && e.player.getVolume && e.player.getVolume().then(function (e) {
                    t(e)
                }), "local" === e.type && t(100 * e.$video.volume)) : t(!1)
            }
        }, {
            key: "getMuted", value: function (t) {
                var e = this;
                e.player ? ("youtube" === e.type && e.player.isMuted && t(e.player.isMuted()), "vimeo" === e.type && e.player.getVolume && e.player.getVolume().then(function (e) {
                    t(!!e)
                }), "local" === e.type && t(e.$video.muted)) : t(null)
            }
        }, {
            key: "getImageURL", value: function (t) {
                var e = this;
                if (e.videoImage) t(e.videoImage); else {
                    if ("youtube" === e.type) {
                        var i = ["maxresdefault", "sddefault", "hqdefault", "0"], n = 0, s = new Image;
                        s.onload = function () {
                            120 !== (this.naturalWidth || this.width) || n === i.length - 1 ? (e.videoImage = "https://img.youtube.com/vi/" + e.videoID + "/" + i[n] + ".jpg", t(e.videoImage)) : (n++, this.src = "https://img.youtube.com/vi/" + e.videoID + "/" + i[n] + ".jpg")
                        }, s.src = "https://img.youtube.com/vi/" + e.videoID + "/" + i[n] + ".jpg"
                    }
                    if ("vimeo" === e.type) {
                        var o = new XMLHttpRequest;
                        o.open("GET", "https://vimeo.com/api/v2/video/" + e.videoID + ".json", !0), o.onreadystatechange = function () {
                            if (4 === this.readyState && 200 <= this.status && this.status < 400) {
                                var i = JSON.parse(this.responseText);
                                e.videoImage = i[0].thumbnail_large, t(e.videoImage)
                            }
                        }, o.send(), o = null
                    }
                }
            }
        }, {
            key: "getIframe",
            value: function (t) {
                this.getVideo(t)
            }
        }, {
            key: "getVideo", value: function (t) {
                var e = this;
                e.$video ? t(e.$video) : e.onAPIready(function () {
                    var i = void 0;
                    if (e.$video || ((i = document.createElement("div")).style.display = "none"), "youtube" === e.type) {
                        e.playerOptions = {}, e.playerOptions.videoId = e.videoID, e.playerOptions.playerVars = {
                            autohide: 1,
                            rel: 0,
                            autoplay: 0,
                            playsinline: 1
                        }, e.options.showContols || (e.playerOptions.playerVars.iv_load_policy = 3, e.playerOptions.playerVars.modestbranding = 1, e.playerOptions.playerVars.controls = 0, e.playerOptions.playerVars.showinfo = 0, e.playerOptions.playerVars.disablekb = 1);
                        var n = void 0, s = void 0;
                        e.playerOptions.events = {
                            onReady: function (t) {
                                e.options.mute ? t.target.mute() : e.options.volume && t.target.setVolume(e.options.volume), e.options.autoplay && e.play(e.options.startTime), e.fire("ready", t), setInterval(function () {
                                    e.getVolume(function (i) {
                                        e.options.volume !== i && (e.options.volume = i, e.fire("volumechange", t))
                                    })
                                }, 150)
                            }, onStateChange: function (t) {
                                e.options.loop && t.data === YT.PlayerState.ENDED && e.play(e.options.startTime), n || t.data !== YT.PlayerState.PLAYING || (n = 1, e.fire("started", t)), t.data === YT.PlayerState.PLAYING && e.fire("play", t), t.data === YT.PlayerState.PAUSED && e.fire("pause", t), t.data === YT.PlayerState.ENDED && e.fire("ended", t), t.data === YT.PlayerState.PLAYING ? s = setInterval(function () {
                                    e.fire("timeupdate", t), e.options.endTime && e.player.getCurrentTime() >= e.options.endTime && (e.options.loop ? e.play(e.options.startTime) : e.pause())
                                }, 150) : clearInterval(s)
                            }
                        };
                        var o = !e.$video;
                        if (o) {
                            var r = document.createElement("div");
                            r.setAttribute("id", e.playerID), i.appendChild(r), document.body.appendChild(i)
                        }
                        e.player = e.player || new window.YT.Player(e.playerID, e.playerOptions), o && (e.$video = document.getElementById(e.playerID), e.videoWidth = parseInt(e.$video.getAttribute("width"), 10) || 1280, e.videoHeight = parseInt(e.$video.getAttribute("height"), 10) || 720)
                    }
                    if ("vimeo" === e.type) {
                        e.playerOptions = "", e.playerOptions += "player_id=" + e.playerID, e.playerOptions += "&autopause=0", e.playerOptions += "&transparent=0", e.options.showContols || (e.playerOptions += "&badge=0&byline=0&portrait=0&title=0"), e.playerOptions += "&autoplay=" + (e.options.autoplay ? "1" : "0"), e.playerOptions += "&loop=" + (e.options.loop ? 1 : 0), e.$video || (e.$video = document.createElement("iframe"), e.$video.setAttribute("id", e.playerID), e.$video.setAttribute("src", "https://player.vimeo.com/video/" + e.videoID + "?" + e.playerOptions), e.$video.setAttribute("frameborder", "0"), i.appendChild(e.$video), document.body.appendChild(i)), e.player = e.player || new Vimeo.Player(e.$video), e.player.getVideoWidth().then(function (t) {
                            e.videoWidth = t || 1280
                        }), e.player.getVideoHeight().then(function (t) {
                            e.videoHeight = t || 720
                        }), e.options.startTime && e.options.autoplay && e.player.setCurrentTime(e.options.startTime), e.options.mute ? e.player.setVolume(0) : e.options.volume && e.player.setVolume(e.options.volume);
                        var a = void 0;
                        e.player.on("timeupdate", function (t) {
                            a || (e.fire("started", t), a = 1), e.fire("timeupdate", t), e.options.endTime && e.options.endTime && t.seconds >= e.options.endTime && (e.options.loop ? e.play(e.options.startTime) : e.pause())
                        }), e.player.on("play", function (t) {
                            e.fire("play", t), e.options.startTime && 0 === t.seconds && e.play(e.options.startTime)
                        }), e.player.on("pause", function (t) {
                            e.fire("pause", t)
                        }), e.player.on("ended", function (t) {
                            e.fire("ended", t)
                        }), e.player.on("loaded", function (t) {
                            e.fire("ready", t)
                        }), e.player.on("volumechange", function (t) {
                            e.fire("volumechange", t)
                        })
                    }
                    if ("local" === e.type) {
                        e.$video || (e.$video = document.createElement("video"), e.options.mute ? e.$video.muted = !0 : e.$video.volume && (e.$video.volume = e.options.volume / 100), e.options.loop && (e.$video.loop = !0), e.$video.setAttribute("playsinline", ""), e.$video.setAttribute("webkit-playsinline", ""), e.$video.setAttribute("id", e.playerID), i.appendChild(e.$video), document.body.appendChild(i), Object.keys(e.videoID).forEach(function (t) {
                            var i, n, s, o;
                            i = e.$video, n = e.videoID[t], s = "video/" + t, (o = document.createElement("source")).src = n, o.type = s, i.appendChild(o)
                        })), e.player = e.player || e.$video;
                        var l = void 0;
                        e.player.addEventListener("playing", function (t) {
                            l || e.fire("started", t), l = 1
                        }), e.player.addEventListener("timeupdate", function (t) {
                            e.fire("timeupdate", t), e.options.endTime && e.options.endTime && this.currentTime >= e.options.endTime && (e.options.loop ? e.play(e.options.startTime) : e.pause())
                        }), e.player.addEventListener("play", function (t) {
                            e.fire("play", t)
                        }), e.player.addEventListener("pause", function (t) {
                            e.fire("pause", t)
                        }), e.player.addEventListener("ended", function (t) {
                            e.fire("ended", t)
                        }), e.player.addEventListener("loadedmetadata", function () {
                            e.videoWidth = this.videoWidth || 1280, e.videoHeight = this.videoHeight || 720, e.fire("ready"), e.options.autoplay && e.play(e.options.startTime)
                        }), e.player.addEventListener("volumechange", function (t) {
                            e.getVolume(function (t) {
                                e.options.volume = t
                            }), e.fire("volumechange", t)
                        })
                    }
                    t(e.$video)
                })
            }
        }, {
            key: "init", value: function () {
                this.playerID = "VideoWorker-" + this.ID
            }
        }, {
            key: "loadAPI", value: function () {
                if (!a || !l) {
                    var t = "";
                    if ("youtube" !== this.type || a || (a = 1, t = "https://www.youtube.com/iframe_api"), "vimeo" !== this.type || l || (l = 1, t = "https://player.vimeo.com/api/player.js"), t) {
                        var e = document.createElement("script"), i = document.getElementsByTagName("head")[0];
                        e.src = t, i.appendChild(e), e = i = null
                    }
                }
            }
        }, {
            key: "onAPIready", value: function (t) {
                if ("youtube" === this.type && ("undefined" != typeof YT && 0 !== YT.loaded || h ? "object" === ("undefined" == typeof YT ? "undefined" : s(YT)) && 1 === YT.loaded ? t() : u.done(function () {
                    t()
                }) : (h = 1, window.onYouTubeIframeAPIReady = function () {
                    window.onYouTubeIframeAPIReady = null, u.resolve("done"), t()
                })), "vimeo" === this.type) if ("undefined" != typeof Vimeo || d) "undefined" != typeof Vimeo ? t() : c.done(function () {
                    t()
                }); else {
                    d = 1;
                    var e = setInterval(function () {
                        "undefined" != typeof Vimeo && (clearInterval(e), c.resolve("done"), t())
                    }, 20)
                }
                "local" === this.type && t()
            }
        }]), t
    }();
    e["default"] = p
}, function (t, e, i) {
    "use strict";

    function n(t) {
        return t && t.__esModule ? t : {"default": t}
    }

    Object.defineProperty(e, "__esModule", {value: !0}), e["default"] = function () {
        var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : o["default"].jarallax;
        if (void 0 !== t) {
            var e = t.constructor, i = e.prototype.init;
            e.prototype.init = function () {
                var t = this;
                i.apply(t), t.video && !t.options.disableVideo() && t.video.getVideo(function (e) {
                    var i = e.parentNode;
                    t.css(e, {
                        position: t.image.position,
                        top: "0px",
                        left: "0px",
                        right: "0px",
                        bottom: "0px",
                        width: "100%",
                        height: "100%",
                        maxWidth: "none",
                        maxHeight: "none",
                        margin: 0,
                        zIndex: -1
                    }), t.$video = e, t.image.$container.appendChild(e), i.parentNode.removeChild(i)
                })
            };
            var n = e.prototype.coverImage;
            e.prototype.coverImage = function () {
                var t = this, e = n.apply(t), i = !!t.image.$item && t.image.$item.nodeName;
                if (e && t.video && i && ("IFRAME" === i || "VIDEO" === i)) {
                    var s = e.image.height, o = s * t.image.width / t.image.height, r = (e.container.width - o) / 2,
                        a = e.image.marginTop;
                    e.container.width > o && (o = e.container.width, s = o * t.image.height / t.image.width, r = 0, a += (e.image.height - s) / 2), "IFRAME" === i && (s += 400, a -= 200), t.css(t.$video, {
                        width: o + "px",
                        marginLeft: r + "px",
                        height: s + "px",
                        marginTop: a + "px"
                    })
                }
                return e
            };
            var r = e.prototype.initImg;
            e.prototype.initImg = function () {
                var t = this, e = r.apply(t);
                return t.options.videoSrc || (t.options.videoSrc = t.$item.getAttribute("data-jarallax-video") || null), t.options.videoSrc ? (t.defaultInitImgResult = e, !0) : e
            };
            var a = e.prototype.canInitParallax;
            e.prototype.canInitParallax = function () {
                var t = this, e = a.apply(t);
                if (!t.options.videoSrc) return e;
                var i = new s["default"](t.options.videoSrc, {
                    autoplay: !0,
                    loop: !0,
                    showContols: !1,
                    startTime: t.options.videoStartTime || 0,
                    endTime: t.options.videoEndTime || 0,
                    mute: t.options.videoVolume ? 0 : 1,
                    volume: t.options.videoVolume || 0
                });
                if (i.isValid()) if (e) {
                    if (i.on("ready", function () {
                        if (t.options.videoPlayOnlyVisible) {
                            var e = t.onScroll;
                            t.onScroll = function () {
                                e.apply(t), t.isVisible() ? i.play() : i.pause()
                            }
                        } else i.play()
                    }), i.on("started", function () {
                        t.image.$default_item = t.image.$item, t.image.$item = t.$video, t.image.width = t.video.videoWidth || 1280, t.image.height = t.video.videoHeight || 720, t.options.imgWidth = t.image.width, t.options.imgHeight = t.image.height, t.coverImage(), t.clipContainer(), t.onScroll(), t.image.$default_item && (t.image.$default_item.style.display = "none")
                    }), t.video = i, !t.defaultInitImgResult) return "local" !== i.type ? (i.getImageURL(function (e) {
                        t.image.src = e, t.init()
                    }), !1) : (t.image.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", !0)
                } else t.defaultInitImgResult || i.getImageURL(function (e) {
                    var i = t.$item.getAttribute("style");
                    i && t.$item.setAttribute("data-jarallax-original-styles", i), t.css(t.$item, {
                        "background-image": 'url("' + e + '")',
                        "background-position": "center",
                        "background-size": "cover"
                    })
                });
                return e
            };
            var l = e.prototype.destroy;
            e.prototype.destroy = function () {
                var t = this;
                t.image.$default_item && (t.image.$item = t.image.$default_item, delete t.image.$default_item), l.apply(t)
            }
        }
    };
    var s = n(i(3)), o = n(i(0))
}]), +function (t) {
    "use strict";

    function e() {
        this._activeZoom = this._initialScrollPosition = this._initialTouchPosition = this._touchMoveListener = null, this._$document = t(document), this._$window = t(window), this._$body = t(document.body), this._boundClick = t.proxy(this._clickHandler, this)
    }

    function i(e) {
        this._fullHeight = this._fullWidth = this._overlay = this._targetImageWrap = null, this._targetImage = e, this._$body = t(document.body)
    }

    e.prototype.listen = function () {
        this._$body.on("click", '[data-action="zoom"]', t.proxy(this._zoom, this))
    }, e.prototype._zoom = function (e) {
        var n = e.target;
        if (n && "IMG" == n.tagName && !this._$body.hasClass("zoom-overlay-open")) return e.metaKey || e.ctrlKey ? window.open(e.target.getAttribute("data-original") || e.target.src, "_blank") : void (n.width >= t(window).width() - i.OFFSET || (this._activeZoomClose(!0), this._activeZoom = new i(n), this._activeZoom.zoomImage(), this._$window.on("scroll.zoom", t.proxy(this._scrollHandler, this)), this._$document.on("keyup.zoom", t.proxy(this._keyHandler, this)), this._$document.on("touchstart.zoom", t.proxy(this._touchStart, this)), document.addEventListener ? document.addEventListener("click", this._boundClick, !0) : document.attachEvent("onclick", this._boundClick, !0), "bubbles" in e ? e.bubbles && e.stopPropagation() : e.cancelBubble = !0))
    }, e.prototype._activeZoomClose = function (t) {
        this._activeZoom && (t ? this._activeZoom.dispose() : this._activeZoom.close(), this._$window.off(".zoom"), this._$document.off(".zoom"), document.removeEventListener("click", this._boundClick, !0), this._activeZoom = null)
    }, e.prototype._scrollHandler = function (e) {
        null === this._initialScrollPosition && (this._initialScrollPosition = t(window).scrollTop());
        var i = this._initialScrollPosition - t(window).scrollTop();
        Math.abs(i) >= 40 && this._activeZoomClose()
    }, e.prototype._keyHandler = function (t) {
        27 == t.keyCode && this._activeZoomClose()
    }, e.prototype._clickHandler = function (t) {
        t.preventDefault ? t.preventDefault() : event.returnValue = !1, "bubbles" in t ? t.bubbles && t.stopPropagation() : t.cancelBubble = !0, this._activeZoomClose()
    }, e.prototype._touchStart = function (e) {
        this._initialTouchPosition = e.touches[0].pageY, t(e.target).on("touchmove.zoom", t.proxy(this._touchMove, this))
    }, e.prototype._touchMove = function (e) {
        Math.abs(e.touches[0].pageY - this._initialTouchPosition) > 10 && (this._activeZoomClose(), t(e.target).off("touchmove.zoom"))
    }, i.OFFSET = 80, i._MAX_WIDTH = 2560, i._MAX_HEIGHT = 4096, i.prototype.zoomImage = function () {
        var e = document.createElement("img");
        e.onload = t.proxy(function () {
            this._fullHeight = Number(e.height), this._fullWidth = Number(e.width), this._zoomOriginal()
        }, this), e.src = this._targetImage.src
    }, i.prototype._zoomOriginal = function () {
        this._targetImageWrap = document.createElement("div"), this._targetImageWrap.className = "zoom-img-wrap", this._targetImage.parentNode.insertBefore(this._targetImageWrap, this._targetImage), this._targetImageWrap.appendChild(this._targetImage), t(this._targetImage).addClass("zoom-img").attr("data-action", "zoom-out"), this._overlay = document.createElement("div"), this._overlay.className = "zoom-overlay", document.querySelector(".page-content").appendChild(this._overlay), this._calculateZoom(), this._triggerAnimation()
    }, i.prototype._calculateZoom = function () {
        this._targetImage.offsetWidth;
        var e = this._fullWidth, n = this._fullHeight, s = (t(window).scrollTop(), e / this._targetImage.width),
            o = t(window).height() - i.OFFSET, r = t(window).width() - i.OFFSET, a = e / n, l = r / o;
        this._imgScaleFactor = r > e && o > n ? s : l > a ? o / n * s : r / e * s
    }, i.prototype._triggerAnimation = function () {
        this._targetImage.offsetWidth;
        var e = t(this._targetImage).offset(), i = t(window).scrollTop(), n = i + t(window).height() / 2,
            s = t(window).width() / 2, o = e.top + this._targetImage.height / 2,
            r = e.left + this._targetImage.width / 2;
        this._translateY = n - o, this._translateX = s - r;
        var a = "scale(" + this._imgScaleFactor + ")",
            l = "translate(" + this._translateX + "px, " + this._translateY + "px)";
        t.support.transition && (l += " translateZ(0)"), t(this._targetImage).css({
            "-webkit-transform": a,
            "-ms-transform": a,
            transform: a
        }), t(this._targetImageWrap).css({
            "-webkit-transform": l,
            "-ms-transform": l,
            transform: l
        }), this._$body.addClass("zoom-overlay-open")
    }, i.prototype.close = function () {
        return this._$body.removeClass("zoom-overlay-open").addClass("zoom-overlay-transitioning"), t(this._targetImage).css({
            "-webkit-transform": "",
            "-ms-transform": "",
            transform: ""
        }), t(this._targetImageWrap).css({
            "-webkit-transform": "",
            "-ms-transform": "",
            transform: ""
        }), t.support.transition ? void t(this._targetImage).one(t.support.transition.end, t.proxy(this.dispose, this)).emulateTransitionEnd(300) : this.dispose()
    }, i.prototype.dispose = function () {
        this._targetImageWrap && this._targetImageWrap.parentNode && (t(this._targetImage).removeClass("zoom-img").attr("data-action", "zoom"), this._targetImageWrap.parentNode.replaceChild(this._targetImage, this._targetImageWrap), this._overlay.parentNode.removeChild(this._overlay), this._$body.removeClass("zoom-overlay-transitioning"))
    }, t(function () {
        (new e).listen()
    })
}(jQuery), function () {
    var t, e;
    t = window.jQuery, e = t(window), t.fn.stick_in_parent = function (i) {
        var n, s, o, r, a, l, h, d, u, c, p, f;
        for (null == i && (i = {}), f = i.sticky_class, a = i.inner_scrolling, p = i.recalc_every, c = i.parent, d = i.offset_top, h = i.spacer, s = i.bottoming, null == d && (d = 0), null == c && (c = void 0), null == a && (a = !0), null == f && (f = "is_stuck"), n = t(document), null == s && (s = !0), u = function (t) {
            var e;
            return window.getComputedStyle ? (t = window.getComputedStyle(t[0]), e = parseFloat(t.getPropertyValue("width")) + parseFloat(t.getPropertyValue("margin-left")) + parseFloat(t.getPropertyValue("margin-right")), "border-box" !== t.getPropertyValue("box-sizing") && (e += parseFloat(t.getPropertyValue("border-left-width")) + parseFloat(t.getPropertyValue("border-right-width")) + parseFloat(t.getPropertyValue("padding-left")) + parseFloat(t.getPropertyValue("padding-right"))), e) : t.outerWidth(!0)
        }, o = function (i, o, r, l, m, g, v, y) {
            var w, b, x, C, T, E, S, _, k, D, I, $;
            if (!i.data("sticky_kit")) {
                if (i.data("sticky_kit", !0), T = n.height(), S = i.parent(), null != c && (S = S.closest(c)), !S.length) throw"failed to find stick parent";
                if (w = x = !1, (I = null != h ? h && i.closest(h) : t("<div />")) && I.css("position", i.css("position")), _ = function () {
                    var t, e, s;
                    if (!y && (T = n.height(), t = parseInt(S.css("border-top-width"), 10), e = parseInt(S.css("padding-top"), 10), o = parseInt(S.css("padding-bottom"), 10), r = S.offset().top + t + e, l = S.height(), x && (w = x = !1, null == h && (i.insertAfter(I), I.detach()), i.css({
                        position: "",
                        top: "",
                        width: "",
                        bottom: ""
                    }).removeClass(f), s = !0), m = i.offset().top - (parseInt(i.css("margin-top"), 10) || 0) - d, g = i.outerHeight(!0), v = i.css("float"), I && I.css({
                        width: u(i),
                        height: g,
                        display: i.css("display"),
                        "vertical-align": i.css("vertical-align"),
                        "float": v
                    }), s)) return $()
                }, _(), g !== l) return C = void 0, E = d, D = p, $ = function () {
                    var t, u, c, b;
                    if (!y && (c = !1, null != D && (--D, 0 >= D && (D = p, _(), c = !0)), c || n.height() === T || _(), c = e.scrollTop(), null != C && (u = c - C), C = c, x ? (s && (b = c + g + E > l + r, w && !b && (w = !1, i.css({
                        position: "fixed",
                        bottom: "",
                        top: E
                    }).trigger("sticky_kit:unbottom"))), c < m && (x = !1, E = d, null == h && ("left" !== v && "right" !== v || i.insertAfter(I), I.detach()), t = {
                        position: "",
                        width: "",
                        top: ""
                    }, i.css(t).removeClass(f).trigger("sticky_kit:unstick")), a && (t = e.height(), g + d > t && !w && (E -= u, E = Math.max(t - g, E), E = Math.min(d, E), x && i.css({top: E + "px"})))) : c > m && (x = !0, t = {
                        position: "fixed",
                        top: E
                    }, t.width = "border-box" === i.css("box-sizing") ? i.outerWidth() + "px" : i.width() + "px", i.css(t).addClass(f), null == h && (i.after(I), "left" !== v && "right" !== v || I.append(i)), i.trigger("sticky_kit:stick")), x && s && (null == b && (b = c + g + E > l + r), !w && b))) return w = !0, "static" === S.css("position") && S.css({position: "relative"}), i.css({
                        position: "absolute",
                        bottom: o,
                        top: "auto"
                    }).trigger("sticky_kit:bottom")
                }, k = function () {
                    return _(), $()
                }, b = function () {
                    if (y = !0, e.off("touchmove", $), e.off("scroll", $), e.off("resize", k), t(document.body).off("sticky_kit:recalc", k), i.off("sticky_kit:detach", b), i.removeData("sticky_kit"), i.css({
                        position: "",
                        bottom: "",
                        top: "",
                        width: ""
                    }), S.position("position", ""), x) return null == h && ("left" !== v && "right" !== v || i.insertAfter(I), I.remove()), i.removeClass(f)
                }, e.on("touchmove", $), e.on("scroll", $), e.on("resize", k), t(document.body).on("sticky_kit:recalc", k), i.on("sticky_kit:detach", b), setTimeout($, 0)
            }
        }, r = 0, l = this.length; r < l; r++) i = this[r], o(t(i));
        return this
    }
}.call(this), !function (t) {
    if ("object" == typeof exports && "undefined" != typeof module) module.exports = t(); else if ("function" == typeof define && define.amd) define([], t); else {
        var e;
        "undefined" != typeof window ? e = window : "undefined" != typeof global ? e = global : "undefined" != typeof self && (e = self), e.Slideout = t()
    }
}(function () {
    return function t(e, i, n) {
        function s(r, a) {
            if (!i[r]) {
                if (!e[r]) {
                    var l = "function" == typeof require && require;
                    if (!a && l) return l(r, !0);
                    if (o) return o(r, !0);
                    var h = new Error("Cannot find module '" + r + "'");
                    throw h.code = "MODULE_NOT_FOUND", h
                }
                var d = i[r] = {exports: {}};
                e[r][0].call(d.exports, function (t) {
                    var i = e[r][1][t];
                    return s(i ? i : t)
                }, d, d.exports, t, e, i, n)
            }
            return i[r].exports
        }

        for (var o = "function" == typeof require && require, r = 0; r < n.length; r++) s(n[r]);
        return s
    }({
        1: [function (t, e, i) {
            "use strict";

            function n(t, e) {
                for (var i in e) e[i] && (t[i] = e[i]);
                return t
            }

            function s(t, e) {
                t.prototype = n(t.prototype || {}, e.prototype)
            }

            function o(t) {
                t = t || {}, this._startOffsetX = 0, this._currentOffsetX = 0, this._opening = !1, this._moved = !0, this._opened = !1, this._preventOpen = !1, this._touch = void 0 === t.touch || t.touch && !0, this.panel = t.panel, this.menu = t.menu, this.panel.className.search("slideout-panel") === -1 && (this.panel.className += " slideout-panel"), this.menu.className.search("slideout-menu") === -1 && (this.menu.className += " slideout-menu"), this._fx = t.fx || "ease", this._duration = parseInt(t.duration, 10) || 300, this._tolerance = parseInt(t.tolerance, 10) || 70, this._padding = this._translateTo = parseInt(t.padding, 10) || 256, this._orientation = "right" === t.side ? -1 : 1, this._translateTo *= this._orientation, this._touch && this._initTouchEvents()
            }

            var r, a = t("decouple"), l = t("emitter"), h = !1, d = window.document, u = d.documentElement,
                c = window.navigator.msPointerEnabled, p = {
                    start: c ? "MSPointerDown" : "touchstart",
                    move: c ? "MSPointerMove" : "touchmove",
                    end: c ? "MSPointerUp" : "touchend"
                }, f = function () {
                    var t = /^(Webkit|Khtml|Moz|ms|O)(?=[A-Z])/, e = d.getElementsByTagName("script")[0].style;
                    for (var i in e) if (t.test(i)) return "-" + i.match(t)[0].toLowerCase() + "-";
                    return "WebkitOpacity" in e ? "-webkit-" : "KhtmlOpacity" in e ? "-khtml-" : ""
                }();
            s(o, l), o.prototype.open = function () {
                var t = this;
                return this.emit("beforeopen"), u.className.search("slideout-open") === -1 && (u.className += " slideout-open"), this._setTransition(), this._translateXTo(this._translateTo), this._opened = !0, setTimeout(function () {
                    t.panel.style.transition = t.panel.style["-webkit-transition"] = "", t.emit("open")
                }, this._duration + 50), this
            }, o.prototype.close = function () {
                var t = this;
                return this.isOpen() || this._opening ? (this.emit("beforeclose"), this._setTransition(), this._translateXTo(0), this._opened = !1, setTimeout(function () {
                    u.className = u.className.replace(/ slideout-open/, ""), t.panel.style.transition = t.panel.style["-webkit-transition"] = t.panel.style[f + "transform"] = t.panel.style.transform = "", t.emit("close")
                }, this._duration + 50), this) : this
            }, o.prototype.toggle = function () {
                return this.isOpen() ? this.close() : this.open()
            }, o.prototype.isOpen = function () {
                return this._opened
            }, o.prototype._translateXTo = function (t) {
                return this._currentOffsetX = t, this.panel.style[f + "transform"] = this.panel.style.transform = "translateX(" + t + "px)", this
            }, o.prototype._setTransition = function () {
                return this.panel.style[f + "transition"] = this.panel.style.transition = f + "transform " + this._duration + "ms " + this._fx, this
            }, o.prototype._initTouchEvents = function () {
                var t = this;
                return this._onScrollFn = a(d, "scroll", function () {
                    t._moved || (clearTimeout(r), h = !0, r = setTimeout(function () {
                        h = !1
                    }, 250))
                }), this._preventMove = function (e) {
                    t._moved && e.preventDefault()
                }, d.addEventListener(p.move, this._preventMove), this._resetTouchFn = function (e) {
                    "undefined" != typeof e.touches && (t._moved = !1, t._opening = !1, t._startOffsetX = e.touches[0].pageX, t._preventOpen = !t._touch || !t.isOpen() && 0 !== t.menu.clientWidth)
                }, this.panel.addEventListener(p.start, this._resetTouchFn), this._onTouchCancelFn = function () {
                    t._moved = !1, t._opening = !1
                }, this.panel.addEventListener("touchcancel", this._onTouchCancelFn), this._onTouchEndFn = function () {
                    t._moved && (t.emit("translateend"), t._opening && Math.abs(t._currentOffsetX) > t._tolerance ? t.open() : t.close()), t._moved = !1
                }, this.panel.addEventListener(p.end, this._onTouchEndFn), this._onTouchMoveFn = function (e) {
                    if (!h && !t._preventOpen && "undefined" != typeof e.touches) {
                        var i = e.touches[0].clientX - t._startOffsetX, n = t._currentOffsetX = i;
                        if (!(Math.abs(n) > t._padding) && Math.abs(i) > 20) {
                            t._opening = !0;
                            var s = i * t._orientation;
                            if (t._opened && s > 0 || !t._opened && s < 0) return;
                            t._moved || t.emit("translatestart"), s <= 0 && (n = i + t._padding * t._orientation, t._opening = !1), t._moved || u.className.search("slideout-open") !== -1 || (u.className += " slideout-open"), t.panel.style[f + "transform"] = t.panel.style.transform = "translateX(" + n + "px)", t.emit("translate", n), t._moved = !0
                        }
                    }
                }, this.panel.addEventListener(p.move, this._onTouchMoveFn), this
            }, o.prototype.enableTouch = function () {
                return this._touch = !0, this
            }, o.prototype.disableTouch = function () {
                return this._touch = !1, this
            }, o.prototype.destroy = function () {
                return this.close(), d.removeEventListener(p.move, this._preventMove), this.panel.removeEventListener(p.start, this._resetTouchFn), this.panel.removeEventListener("touchcancel", this._onTouchCancelFn), this.panel.removeEventListener(p.end, this._onTouchEndFn), this.panel.removeEventListener(p.move, this._onTouchMoveFn), d.removeEventListener("scroll", this._onScrollFn), this.open = this.close = function () {
                }, this
            }, e.exports = o
        }, {decouple: 2, emitter: 3}], 2: [function (t, e, i) {
            "use strict";

            function n(t, e, i) {
                function n(t) {
                    a = t, o()
                }

                function o() {
                    l || (s(r), l = !0)
                }

                function r() {
                    i.call(t, a), l = !1
                }

                var a, l = !1;
                return t.addEventListener(e, n, !1), n
            }

            var s = function () {
                return window.requestAnimationFrame || window.webkitRequestAnimationFrame || function (t) {
                    window.setTimeout(t, 1e3 / 60)
                }
            }();
            e.exports = n
        }, {}], 3: [function (t, e, i) {
            "use strict";
            var n = function (t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            };
            i.__esModule = !0;
            var s = function () {
                function t() {
                    n(this, t)
                }

                return t.prototype.on = function (t, e) {
                    return this._eventCollection = this._eventCollection || {}, this._eventCollection[t] = this._eventCollection[t] || [], this._eventCollection[t].push(e), this
                }, t.prototype.once = function (t, e) {
                    function i() {
                        n.off(t, i), e.apply(this, arguments)
                    }

                    var n = this;
                    return i.listener = e, this.on(t, i), this
                }, t.prototype.off = function (t, e) {
                    var i = void 0;
                    return this._eventCollection && (i = this._eventCollection[t]) ? (i.forEach(function (t, n) {
                        t !== e && t.listener !== e || i.splice(n, 1)
                    }), 0 === i.length && delete this._eventCollection[t], this) : this
                }, t.prototype.emit = function (t) {
                    for (var e = this, i = arguments.length, n = Array(i > 1 ? i - 1 : 0), s = 1; s < i; s++) n[s - 1] = arguments[s];
                    var o = void 0;
                    return this._eventCollection && (o = this._eventCollection[t]) ? (o = o.slice(0), o.forEach(function (t) {
                        return t.apply(e, n)
                    }), this) : this
                }, t
            }();
            i["default"] = s, e.exports = i["default"]
        }, {}]
    }, {}, [1])(1)
}), $(function () {
    "use strict";

    function t() {
        $(".navbar-nav ul").each(function () {
            var t = $(this), e = $(window), i = t.offset().left, n = i + t.width() > e.width();
            n && t.addClass("pull-right")
        })
    }

    function e() {
        var t = $(".blog-sidebar"), e = $(".js-blog-meta"),
            i = $(".navbar-affix").length > 0 ? $(".navbar-affix.affix").height() + 20 : 20;
        t.parent().css("position", "static"), t.stick_in_parent({
            parent: $(".container"),
            offset_top: i
        }), e.stick_in_parent({offset_top: i - 10})
    }

    function i(t) {
        var e = $(window).width();
        e < 750 && (t.params.direction = "horizontal"), e > 750 && (t.params.direction = "vertical"), t.update()
    }

    function n() {
        $(".btn-play").on({
            mouseenter: function () {
                $(this).closest(".video-contain").find(".video-contain__preview").addClass("hover")
            }, mouseleave: function () {
                $(this).closest(".video-contain").find(".video-contain__preview").removeClass("hover")
            }, click: function () {
                var t = $(this).closest(".video-contain"), e = t.find("iframe"), i = e.data("id");
                t.addClass("actived"), e.attr("src", i)
            }
        })
    }

    var s = window.Slideout, o = window.Swiper, r = window.jarallax, a = window.blueimp.Gallery;
    $.fn.extend({
        animateCss: function (t) {
            var e = "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";
            $(this).addClass("animated " + t).one(e, function () {
                $(this).removeClass("animated " + t)
            })
        }
    });
    var l = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    window.objectFitImages(), r(document.querySelectorAll(".intro-bg"), {
        speed: .8,
        type: "scroll",
        imgSize: "cover",
        automaticResize: !0
    }), r(document.querySelectorAll(".jarallax.prlx"), {
        speed: .6,
        type: "scroll",
        imgSize: "auto",
        imgRepeat: "repeat"
    }), $('[data-toggle="tooltip"]').tooltip().on("click", function (t) {
        t.preventDefault()
    });
    var h = function () {
        function t() {
            var t = $(document).scrollTop();
            Math.abs(n - t) <= s || (t > n && t > o ? i.css("top", -$(".navbar__topline").outerHeight()) : t + $(window).height() < $(document).height() && i.css("top", 0), n = t)
        }

        var e, i = $(".navbar-fixed"), n = 0, s = 0, o = i.outerHeight();
        $(window).on("scroll", function () {
            e = !0
        }), setInterval(function () {
            e && (t(), e = !1)
        }, 100)
    };
    l === !1 && ($("html").addClass("no-touch"), h(), t(), e(), n()), $(window).on("resize", function () {
        l === !1 && (h(), t())
    }), $(".room-banner").on({
        mouseenter: function () {
            $(this).addClass("active"), $(".room-banner__more p", $(this)).animateCss("slideInDown"), $(".link-more", $(this)).animateCss("slideInLeft")
        }, mouseleave: function () {
            $(this).removeClass("active")
        }
    });
    var d = function () {
        var t = $("#panelMenu"), e = t.find(".js-menu-title"), i = $("#trigger"),
            n = $("#overPage, .panel-menu-header");
        return {
            init: function () {
                var o = new s({
                    panel: document.getElementById("content"),
                    menu: document.getElementById("panelMenu"),
                    padding: 256,
                    tolerance: 70,
                    touch: !1
                });
                i.on("click", function (t) {
                    t.preventDefault(), o.toggle()
                }), n.on("click", function () {
                    $("html").hasClass("slideout-open") && o.close()
                }), o.on("beforeopen", function () {
                    $(".navbar, .over-page, .page-footer").addClass("open")
                }), o.on("beforeclose", function () {
                    $(".navbar, .over-page, .page-footer").removeClass("open")
                }), o.on("close", function () {
                    t.find("li").removeClass("next active"), e.find(".text").text(e.data("title"))
                }), this.next(), this.prev()
            }, next: function () {
                t.on("click", "ul > li > a", function (i) {
                    var n = $(this);
                    n.next(".panel-list__next").length > 0 && (i.preventDefault(), t.find(".open").closest("ul").addClass("prev"), n.parent().parent().addClass("open"), n.parent().addClass("next active").siblings().addClass("next"), e.addClass("active").find(".text").text(n.text()))
                })
            }, prev: function () {
                t.on("click", ".js-menu-title", function (i) {
                    i.preventDefault();
                    var n = t.find("ul.open:not(.prev)"), s = n.closest(".prev");
                    n.removeClass("open").children().removeClass("next active"), s.removeClass("prev"), e.find(".text").text(s.find("> li.active > a").text()), s.length < 1 && e.removeClass("active").find(".text").text(e.data("title"))
                })
            }
        }
    }();
    d.init(), $(".animsition").animsition({
        inClass: "fade-in",
        outClass: "fade-out",
        inDuration: 1500,
        outDuration: 800,
        linkElement: 'a:not([target="_blank"]):not([href^="#"]):not([href^="tel"]):not([href^="mailto"]):not(#blueimp-gallery a):not(.js-gallery-link)',
        loading: !0,
        loadingParentElement: "body",
        timeout: !1,
        onLoadEvent: !0,
        overlay: !1,
        transition: function (t) {
            window.location.href = t
        }
    }), $(".pricing-panel, .hm-features-2__item").equalHeights(), $(".js-counter").counterUp({
        delay: 10,
        time: 1e3
    }), $(".input-daterange").datepicker({
        orientation: "bottom",
        keyboardNavigation: !0,
        format: "mm/dd/yyyy",
        autoclose: !0
    }), $(".js-input-time").clockpicker({autoclose: !0}), $(".label-control").on("click", function () {
        $(this).next().focus()
    }), $(".js-select-reserved").barrating({hoverState: !1}), $(".js-reserved-check").on("click", function () {
        $(this).closest(".row").find(".br-widget").toggleClass("disable")
    });
    var u = $(".js-home-slider"), c = $(".js-client-carousel"), p = $(".js-history-carousel"),
        f = $(".js-spa-menu-carousel"), m = $(".js-spa-menu-nav"), g = $(".owl-carousel"), v = $(".js-carousel"),
        y = $(".js-service-category"), w = $(".js-room-carousel");
    if (g && g.each(function () {
        var t = $(this);
        c.owlCarousel({
            loop: false,
            nav: !1,
            slideSpeed: 300,
            paginationSpeed: 400,
            autoHeight: !1,
            dots: !0,
            mouseDrag: !0,
            touchDrag: !0,
            dotsContainer: c.next().find(".js-pagination"),
            responsive: {0: {items: 1}, 576: {items: 2}, 992: {items: 3}}
        }), p.owlCarousel({
            items: 1,
            loop: false,
            nav: !1,
            dots: !0,
            dotsContainer: t.next().find(".js-pagination")
        }), t.parent().find(".next").on("click", function () {
            t.trigger("next.owl.carousel")
        }), t.parent().find(".prev").on("click", function () {
            t.trigger("prev.owl.carousel")
        })
    }), u.length > 0) {
        var b = new o(u, {
            loop: !0,
            speed: 1500,
            autoplay: {delay: 5e3, stopOnLastSlide: !0},
            parallax: !0,
            effect: "coverflow",
            coverflowEffect: {rotate: 30, stretch: 0, depth: 100, slideShadows: !0, modifier: 1},
            navigation: {prevEl: ".swiper-button-prev", nextEl: ".swiper-button-next"},
            pagination: {el: ".swiper-pagination", clickable: !0}
        });
        b.on("slideChange", function () {
        })
    }
    if (f.length > 0) {
        var x = new o(f, {speed: 500, effect: "fade", fadeEffect: {crossFade: !0}, allowTouchMove: !1, autoHeight: !1}),
            C = new o(m, {
                speed: 500,
                spaceBetween: 50,
                centeredSlides: !0,
                slidesPerView: "auto",
                mousewheel: {invert: !1},
                slideToClickedSlide: !0,
                navigation: {prevEl: ".js-spa-menu-prev", nextEl: ".js-spa-menu-next"}
            });
        x.controller.control = C, C.controller.control = x
    }
    if (v.length > 0 && v.each(function () {
        var t = $(this), e = new o(t, {
            slidesPerView: 1,
            loop: !0,
            autoplay: 3500,
            speed: 1200,
            pagination: {el: t.find(".js-pagination"), clickable: !0}
        });
        t.find(".js-prev").on("click", function (t) {
            t.preventDefault(), e.slidePrev()
        }), t.find(".js-next").on("click", function (t) {
            t.preventDefault(), e.slideNext()
        })
    }), w.length) {
        var T = new o(w, {spaceBetween: 8}), E = new o(".js-room-thumb", {
            spaceBetween: 0,
            direction: "vertical",
            slidesPerView: "auto",
            centeredSlides: !0,
            touchRatio: .8,
            mousewheel: {invert: !1},
            slideToClickedSlide: !0,
            on: {
                init: function () {
                    i(this)
                }, resize: function () {
                    i(this)
                }
            }
        });
        T.controller.control = E, E.controller.control = T
    }
    if (y.length > 0) {
        var S = new o(y, {
            loop: !0,
            slidesPerView: 2,
            autoplay: 3500,
            speed: 1200,
            navigation: {prevEl: ".js-prev", nextEl: ".js-next"},
            breakpoints: {768: {slidesPerView: 1}}
        });
        S.on("slideChange", function () {
        })
    }
    var _ = $(".js-gallery-link");
    _.on("click", function (t) {
        t.preventDefault();
        var e = {index: _.index(this), event: t, fullscreen: !0, hidePageScrollbars: !1, disableScroll: !0};
        a(_, e)
    });
    var k = $(".js-grid-masonry"), D = k.find(".grid-item");
    D.hide(), $(window).imagesLoaded(function () {
        D.fadeIn(), k.masonry({columnWidth: ".grid-sizer", itemSelector: ".gallery__item", percentPosition: !0});
        var t = k.isotope({
            itemSelector: ".gallery__item",
            resizable: !1,
            percentPosition: !0,
            masonry: {columnWidth: ".grid-sizer"}
        });
        $(".filter-button-group").on("click", "button", function (e) {
            e.preventDefault();
            var i = $(this).attr("data-filter");
            t.isotope({filter: i})
        })
    })
}), function () {
    var t = function () {
        var t = window.google.maps, e = document.getElementById("map"), i = e.getAttribute("data-title"),
            n = e.getAttribute("data-label"), s = {
                zoom: 17,
                scrollwheel: !1,
                center: new t.LatLng((-34.8679988), 138.5118251),
                styles: [{
                    featureType: "water",
                    elementType: "geometry",
                    stylers: [{color: "#e9e9e9"}, {lightness: 17}]
                }, {
                    featureType: "landscape",
                    elementType: "geometry",
                    stylers: [{color: "#f2f2f2"}, {lightness: 20}]
                }, {
                    featureType: "road.highway",
                    elementType: "geometry.fill",
                    stylers: [{color: "#ffffff"}, {lightness: 17}]
                }, {
                    featureType: "road.highway",
                    elementType: "geometry.stroke",
                    stylers: [{color: "#ffffff"}, {lightness: 29}, {weight: .2}]
                }, {
                    featureType: "road.arterial",
                    elementType: "geometry",
                    stylers: [{color: "#ffffff"}, {lightness: 18}]
                }, {
                    featureType: "road.local",
                    elementType: "geometry",
                    stylers: [{color: "#ffffff"}, {lightness: 16}]
                }, {
                    featureType: "poi",
                    elementType: "geometry",
                    stylers: [{color: "#f5f5f5"}, {lightness: 21}]
                }, {
                    featureType: "poi.park",
                    elementType: "geometry",
                    stylers: [{color: "#dedede"}, {lightness: 21}]
                }, {
                    elementType: "labels.text.stroke",
                    stylers: [{visibility: "on"}, {color: "#ffffff"}, {lightness: 16}]
                }, {
                    elementType: "labels.text.fill", stylers: [{saturation: 36}, {color: "#333333"}, {
                        lightness: 40
                    }]
                }, {elementType: "labels.icon", stylers: [{visibility: "off"}]}, {
                    featureType: "transit",
                    elementType: "geometry",
                    stylers: [{color: "#f2f2f2"}, {lightness: 19}]
                }, {
                    featureType: "administrative",
                    elementType: "geometry.fill",
                    stylers: [{color: "#fefefe"}, {lightness: 20}]
                }, {
                    featureType: "administrative",
                    elementType: "geometry.stroke",
                    stylers: [{color: "#fefefe"}, {lightness: 17}, {weight: 1.2}]
                }]
            }, o = new t.Map(e, s),
            r = new t.Marker({title: i, icon: n, position: new t.LatLng((-34.8679988), 138.5118251), map: o});
        return r
    };
    $("#map").length > 0 && window.google.maps.event.addDomListener(window, "load", t)
}();
