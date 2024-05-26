import { _ as Ha } from "./index-1bf06f50.js";
import "vue";
var Tt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Vo(a) {
  return a && a.__esModule && Object.prototype.hasOwnProperty.call(a, "default") ? a.default : a;
}
var Gt = function(a) {
  return a && a.Math == Math && a;
}, U = (
  // eslint-disable-next-line es/no-global-this -- safe
  Gt(typeof globalThis == "object" && globalThis) || Gt(typeof window == "object" && window) || // eslint-disable-next-line no-restricted-globals -- safe
  Gt(typeof self == "object" && self) || Gt(typeof Tt == "object" && Tt) || // eslint-disable-next-line no-new-func -- fallback
  function() {
    return this;
  }() || Tt || Function("return this")()
), ot = {}, L = function(a) {
  try {
    return !!a();
  } catch {
    return !0;
  }
}, Nl = L, ce = !Nl(function() {
  return Object.defineProperty({}, 1, { get: function() {
    return 7;
  } })[1] != 7;
}), Ml = L, br = !Ml(function() {
  var a = (function() {
  }).bind();
  return typeof a != "function" || a.hasOwnProperty("prototype");
}), _l = br, Ht = Function.prototype.call, Y = _l ? Ht.bind(Ht) : function() {
  return Ht.apply(Ht, arguments);
}, Lo = {}, ko = {}.propertyIsEnumerable, Bo = Object.getOwnPropertyDescriptor, Dl = Bo && !ko.call({ 1: 2 }, 1);
Lo.f = Dl ? function(e) {
  var t = Bo(this, e);
  return !!t && t.enumerable;
} : ko;
var xr = function(a, e) {
  return {
    enumerable: !(a & 1),
    configurable: !(a & 2),
    writable: !(a & 4),
    value: e
  };
}, Fo = br, jo = Function.prototype, Ya = jo.call, Vl = Fo && jo.bind.bind(Ya, Ya), k = Fo ? Vl : function(a) {
  return function() {
    return Ya.apply(a, arguments);
  };
}, Uo = k, Ll = Uo({}.toString), kl = Uo("".slice), Fe = function(a) {
  return kl(Ll(a), 8, -1);
}, Bl = k, Fl = L, jl = Fe, Zr = Object, Ul = Bl("".split), zo = Fl(function() {
  return !Zr("z").propertyIsEnumerable(0);
}) ? function(a) {
  return jl(a) == "String" ? Ul(a, "") : Zr(a);
} : Zr, je = function(a) {
  return a == null;
}, zl = je, Gl = TypeError, ge = function(a) {
  if (zl(a))
    throw Gl("Can't call method on " + a);
  return a;
}, Hl = zo, Yl = ge, Ct = function(a) {
  return Hl(Yl(a));
}, Xa = typeof document == "object" && document.all, Xl = typeof Xa > "u" && Xa !== void 0, Go = {
  all: Xa,
  IS_HTMLDDA: Xl
}, Ho = Go, Wl = Ho.all, D = Ho.IS_HTMLDDA ? function(a) {
  return typeof a == "function" || a === Wl;
} : function(a) {
  return typeof a == "function";
}, mn = D, Yo = Go, ql = Yo.all, Te = Yo.IS_HTMLDDA ? function(a) {
  return typeof a == "object" ? a !== null : mn(a) || a === ql;
} : function(a) {
  return typeof a == "object" ? a !== null : mn(a);
}, Jr = U, Ql = D, Kl = function(a) {
  return Ql(a) ? a : void 0;
}, Ue = function(a, e) {
  return arguments.length < 2 ? Kl(Jr[a]) : Jr[a] && Jr[a][e];
}, Zl = k, Tr = Zl({}.isPrototypeOf), Sr = typeof navigator < "u" && String(navigator.userAgent) || "", Xo = U, ea = Sr, bn = Xo.process, xn = Xo.Deno, Tn = bn && bn.versions || xn && xn.version, Sn = Tn && Tn.v8, ue, cr;
Sn && (ue = Sn.split("."), cr = ue[0] > 0 && ue[0] < 4 ? 1 : +(ue[0] + ue[1]));
!cr && ea && (ue = ea.match(/Edge\/(\d+)/), (!ue || ue[1] >= 74) && (ue = ea.match(/Chrome\/(\d+)/), ue && (cr = +ue[1])));
var Oi = cr, On = Oi, Jl = L, eh = U, th = eh.String, Wo = !!Object.getOwnPropertySymbols && !Jl(function() {
  var a = Symbol();
  return !th(a) || !(Object(a) instanceof Symbol) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
  !Symbol.sham && On && On < 41;
}), rh = Wo, qo = rh && !Symbol.sham && typeof Symbol.iterator == "symbol", ah = Ue, ih = D, nh = Tr, sh = qo, oh = Object, Qo = sh ? function(a) {
  return typeof a == "symbol";
} : function(a) {
  var e = ah("Symbol");
  return ih(e) && nh(e.prototype, oh(a));
}, uh = String, Or = function(a) {
  try {
    return uh(a);
  } catch {
    return "Object";
  }
}, lh = D, hh = Or, vh = TypeError, Se = function(a) {
  if (lh(a))
    return a;
  throw vh(hh(a) + " is not a function");
}, fh = Se, ch = je, ut = function(a, e) {
  var t = a[e];
  return ch(t) ? void 0 : fh(t);
}, ta = Y, ra = D, aa = Te, gh = TypeError, dh = function(a, e) {
  var t, r;
  if (e === "string" && ra(t = a.toString) && !aa(r = ta(t, a)) || ra(t = a.valueOf) && !aa(r = ta(t, a)) || e !== "string" && ra(t = a.toString) && !aa(r = ta(t, a)))
    return r;
  throw gh("Can't convert object to primitive value");
}, Ko = { exports: {} }, En = U, ph = Object.defineProperty, Ei = function(a, e) {
  try {
    ph(En, a, { value: e, configurable: !0, writable: !0 });
  } catch {
    En[a] = e;
  }
  return e;
}, yh = U, mh = Ei, $n = "__core-js_shared__", bh = yh[$n] || mh($n, {}), $i = bh, wn = $i;
(Ko.exports = function(a, e) {
  return wn[a] || (wn[a] = e !== void 0 ? e : {});
})("versions", []).push({
  version: "3.32.0",
  mode: "global",
  copyright: "© 2014-2023 Denis Pushkarev (zloirock.ru)",
  license: "https://github.com/zloirock/core-js/blob/v3.32.0/LICENSE",
  source: "https://github.com/zloirock/core-js"
});
var wi = Ko.exports, xh = ge, Th = Object, Er = function(a) {
  return Th(xh(a));
}, Sh = k, Oh = Er, Eh = Sh({}.hasOwnProperty), le = Object.hasOwn || function(e, t) {
  return Eh(Oh(e), t);
}, $h = k, wh = 0, Ch = Math.random(), Ah = $h(1 .toString), Zo = function(a) {
  return "Symbol(" + (a === void 0 ? "" : a) + ")_" + Ah(++wh + Ch, 36);
}, Ph = U, Rh = wi, Cn = le, Ih = Zo, Nh = Wo, Mh = qo, Je = Ph.Symbol, ia = Rh("wks"), _h = Mh ? Je.for || Je : Je && Je.withoutSetter || Ih, G = function(a) {
  return Cn(ia, a) || (ia[a] = Nh && Cn(Je, a) ? Je[a] : _h("Symbol." + a)), ia[a];
}, Dh = Y, An = Te, Pn = Qo, Vh = ut, Lh = dh, kh = G, Bh = TypeError, Fh = kh("toPrimitive"), jh = function(a, e) {
  if (!An(a) || Pn(a))
    return a;
  var t = Vh(a, Fh), r;
  if (t) {
    if (e === void 0 && (e = "default"), r = Dh(t, a, e), !An(r) || Pn(r))
      return r;
    throw Bh("Can't convert object to primitive value");
  }
  return e === void 0 && (e = "number"), Lh(a, e);
}, Uh = jh, zh = Qo, Ci = function(a) {
  var e = Uh(a, "string");
  return zh(e) ? e : e + "";
}, Gh = U, Rn = Te, Wa = Gh.document, Hh = Rn(Wa) && Rn(Wa.createElement), $r = function(a) {
  return Hh ? Wa.createElement(a) : {};
}, Yh = ce, Xh = L, Wh = $r, Jo = !Yh && !Xh(function() {
  return Object.defineProperty(Wh("div"), "a", {
    get: function() {
      return 7;
    }
  }).a != 7;
}), qh = ce, Qh = Y, Kh = Lo, Zh = xr, Jh = Ct, ev = Ci, tv = le, rv = Jo, In = Object.getOwnPropertyDescriptor;
ot.f = qh ? In : function(e, t) {
  if (e = Jh(e), t = ev(t), rv)
    try {
      return In(e, t);
    } catch {
    }
  if (tv(e, t))
    return Zh(!Qh(Kh.f, e, t), e[t]);
};
var de = {}, av = ce, iv = L, eu = av && iv(function() {
  return Object.defineProperty(function() {
  }, "prototype", {
    value: 42,
    writable: !1
  }).prototype != 42;
}), nv = Te, sv = String, ov = TypeError, K = function(a) {
  if (nv(a))
    return a;
  throw ov(sv(a) + " is not an object");
}, uv = ce, lv = Jo, hv = eu, Yt = K, Nn = Ci, vv = TypeError, na = Object.defineProperty, fv = Object.getOwnPropertyDescriptor, sa = "enumerable", oa = "configurable", ua = "writable";
de.f = uv ? hv ? function(e, t, r) {
  if (Yt(e), t = Nn(t), Yt(r), typeof e == "function" && t === "prototype" && "value" in r && ua in r && !r[ua]) {
    var i = fv(e, t);
    i && i[ua] && (e[t] = r.value, r = {
      configurable: oa in r ? r[oa] : i[oa],
      enumerable: sa in r ? r[sa] : i[sa],
      writable: !1
    });
  }
  return na(e, t, r);
} : na : function(e, t, r) {
  if (Yt(e), t = Nn(t), Yt(r), lv)
    try {
      return na(e, t, r);
    } catch {
    }
  if ("get" in r || "set" in r)
    throw vv("Accessors not supported");
  return "value" in r && (e[t] = r.value), e;
};
var cv = ce, gv = de, dv = xr, At = cv ? function(a, e, t) {
  return gv.f(a, e, dv(1, t));
} : function(a, e, t) {
  return a[e] = t, a;
}, tu = { exports: {} }, qa = ce, pv = le, ru = Function.prototype, yv = qa && Object.getOwnPropertyDescriptor, Ai = pv(ru, "name"), mv = Ai && (function() {
}).name === "something", bv = Ai && (!qa || qa && yv(ru, "name").configurable), wr = {
  EXISTS: Ai,
  PROPER: mv,
  CONFIGURABLE: bv
}, xv = k, Tv = D, Qa = $i, Sv = xv(Function.toString);
Tv(Qa.inspectSource) || (Qa.inspectSource = function(a) {
  return Sv(a);
});
var Pi = Qa.inspectSource, Ov = U, Ev = D, Mn = Ov.WeakMap, $v = Ev(Mn) && /native code/.test(String(Mn)), wv = wi, Cv = Zo, _n = wv("keys"), Ri = function(a) {
  return _n[a] || (_n[a] = Cv(a));
}, Ii = {}, Av = $v, au = U, Pv = Te, Rv = At, la = le, ha = $i, Iv = Ri, Nv = Ii, Dn = "Object already initialized", Ka = au.TypeError, Mv = au.WeakMap, gr, Et, dr, _v = function(a) {
  return dr(a) ? Et(a) : gr(a, {});
}, Dv = function(a) {
  return function(e) {
    var t;
    if (!Pv(e) || (t = Et(e)).type !== a)
      throw Ka("Incompatible receiver, " + a + " required");
    return t;
  };
};
if (Av || ha.state) {
  var fe = ha.state || (ha.state = new Mv());
  fe.get = fe.get, fe.has = fe.has, fe.set = fe.set, gr = function(a, e) {
    if (fe.has(a))
      throw Ka(Dn);
    return e.facade = a, fe.set(a, e), e;
  }, Et = function(a) {
    return fe.get(a) || {};
  }, dr = function(a) {
    return fe.has(a);
  };
} else {
  var Xe = Iv("state");
  Nv[Xe] = !0, gr = function(a, e) {
    if (la(a, Xe))
      throw Ka(Dn);
    return e.facade = a, Rv(a, Xe, e), e;
  }, Et = function(a) {
    return la(a, Xe) ? a[Xe] : {};
  }, dr = function(a) {
    return la(a, Xe);
  };
}
var Cr = {
  set: gr,
  get: Et,
  has: dr,
  enforce: _v,
  getterFor: Dv
}, Ni = k, Vv = L, Lv = D, Xt = le, Za = ce, kv = wr.CONFIGURABLE, Bv = Pi, iu = Cr, Fv = iu.enforce, jv = iu.get, Vn = String, or = Object.defineProperty, Uv = Ni("".slice), zv = Ni("".replace), Gv = Ni([].join), Hv = Za && !Vv(function() {
  return or(function() {
  }, "length", { value: 8 }).length !== 8;
}), Yv = String(String).split("String"), Xv = tu.exports = function(a, e, t) {
  Uv(Vn(e), 0, 7) === "Symbol(" && (e = "[" + zv(Vn(e), /^Symbol\(([^)]*)\)/, "$1") + "]"), t && t.getter && (e = "get " + e), t && t.setter && (e = "set " + e), (!Xt(a, "name") || kv && a.name !== e) && (Za ? or(a, "name", { value: e, configurable: !0 }) : a.name = e), Hv && t && Xt(t, "arity") && a.length !== t.arity && or(a, "length", { value: t.arity });
  try {
    t && Xt(t, "constructor") && t.constructor ? Za && or(a, "prototype", { writable: !1 }) : a.prototype && (a.prototype = void 0);
  } catch {
  }
  var r = Fv(a);
  return Xt(r, "source") || (r.source = Gv(Yv, typeof e == "string" ? e : "")), a;
};
Function.prototype.toString = Xv(function() {
  return Lv(this) && jv(this).source || Bv(this);
}, "toString");
var nu = tu.exports, Wv = D, qv = de, Qv = nu, Kv = Ei, ze = function(a, e, t, r) {
  r || (r = {});
  var i = r.enumerable, n = r.name !== void 0 ? r.name : e;
  if (Wv(t) && Qv(t, n, r), r.global)
    i ? a[e] = t : Kv(e, t);
  else {
    try {
      r.unsafe ? a[e] && (i = !0) : delete a[e];
    } catch {
    }
    i ? a[e] = t : qv.f(a, e, {
      value: t,
      enumerable: !1,
      configurable: !r.nonConfigurable,
      writable: !r.nonWritable
    });
  }
  return a;
}, su = {}, Zv = Math.ceil, Jv = Math.floor, ef = Math.trunc || function(e) {
  var t = +e;
  return (t > 0 ? Jv : Zv)(t);
}, tf = ef, Ar = function(a) {
  var e = +a;
  return e !== e || e === 0 ? 0 : tf(e);
}, rf = Ar, af = Math.max, nf = Math.min, ou = function(a, e) {
  var t = rf(a);
  return t < 0 ? af(t + e, 0) : nf(t, e);
}, sf = Ar, of = Math.min, lt = function(a) {
  return a > 0 ? of(sf(a), 9007199254740991) : 0;
}, uf = lt, Pr = function(a) {
  return uf(a.length);
}, lf = Ct, hf = ou, vf = Pr, Ln = function(a) {
  return function(e, t, r) {
    var i = lf(e), n = vf(i), o = hf(r, n), s;
    if (a && t != t) {
      for (; n > o; )
        if (s = i[o++], s != s)
          return !0;
    } else
      for (; n > o; o++)
        if ((a || o in i) && i[o] === t)
          return a || o || 0;
    return !a && -1;
  };
}, uu = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: Ln(!0),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: Ln(!1)
}, ff = k, va = le, cf = Ct, gf = uu.indexOf, df = Ii, kn = ff([].push), lu = function(a, e) {
  var t = cf(a), r = 0, i = [], n;
  for (n in t)
    !va(df, n) && va(t, n) && kn(i, n);
  for (; e.length > r; )
    va(t, n = e[r++]) && (~gf(i, n) || kn(i, n));
  return i;
}, Mi = [
  "constructor",
  "hasOwnProperty",
  "isPrototypeOf",
  "propertyIsEnumerable",
  "toLocaleString",
  "toString",
  "valueOf"
], pf = lu, yf = Mi, mf = yf.concat("length", "prototype");
su.f = Object.getOwnPropertyNames || function(e) {
  return pf(e, mf);
};
var hu = {};
hu.f = Object.getOwnPropertySymbols;
var bf = Ue, xf = k, Tf = su, Sf = hu, Of = K, Ef = xf([].concat), $f = bf("Reflect", "ownKeys") || function(e) {
  var t = Tf.f(Of(e)), r = Sf.f;
  return r ? Ef(t, r(e)) : t;
}, Bn = le, wf = $f, Cf = ot, Af = de, Pf = function(a, e, t) {
  for (var r = wf(e), i = Af.f, n = Cf.f, o = 0; o < r.length; o++) {
    var s = r[o];
    !Bn(a, s) && !(t && Bn(t, s)) && i(a, s, n(e, s));
  }
}, Rf = L, If = D, Nf = /#|\.prototype\./, Pt = function(a, e) {
  var t = _f[Mf(a)];
  return t == Vf ? !0 : t == Df ? !1 : If(e) ? Rf(e) : !!e;
}, Mf = Pt.normalize = function(a) {
  return String(a).replace(Nf, ".").toLowerCase();
}, _f = Pt.data = {}, Df = Pt.NATIVE = "N", Vf = Pt.POLYFILL = "P", vu = Pt, fa = U, Lf = ot.f, kf = At, Bf = ze, Ff = Ei, jf = Pf, Uf = vu, ee = function(a, e) {
  var t = a.target, r = a.global, i = a.stat, n, o, s, u, l, h;
  if (r ? o = fa : i ? o = fa[t] || Ff(t, {}) : o = (fa[t] || {}).prototype, o)
    for (s in e) {
      if (l = e[s], a.dontCallGetSet ? (h = Lf(o, s), u = h && h.value) : u = o[s], n = Uf(r ? s : t + (i ? "." : "#") + s, a.forced), !n && u !== void 0) {
        if (typeof l == typeof u)
          continue;
        jf(l, u);
      }
      (a.sham || u && u.sham) && kf(l, "sham", !0), Bf(o, s, l, a);
    }
}, zf = Fe, Rt = typeof process < "u" && zf(process) == "process", Gf = k, Hf = Se, Yf = function(a, e, t) {
  try {
    return Gf(Hf(Object.getOwnPropertyDescriptor(a, e)[t]));
  } catch {
  }
}, Xf = D, Wf = String, qf = TypeError, Qf = function(a) {
  if (typeof a == "object" || Xf(a))
    return a;
  throw qf("Can't set " + Wf(a) + " as a prototype");
}, Kf = Yf, Zf = K, Jf = Qf, fu = Object.setPrototypeOf || ("__proto__" in {} ? function() {
  var a = !1, e = {}, t;
  try {
    t = Kf(Object.prototype, "__proto__", "set"), t(e, []), a = e instanceof Array;
  } catch {
  }
  return function(i, n) {
    return Zf(i), Jf(n), a ? t(i, n) : i.__proto__ = n, i;
  };
}() : void 0), ec = de.f, tc = le, rc = G, Fn = rc("toStringTag"), _i = function(a, e, t) {
  a && !t && (a = a.prototype), a && !tc(a, Fn) && ec(a, Fn, { configurable: !0, value: e });
}, jn = nu, ac = de, ic = function(a, e, t) {
  return t.get && jn(t.get, e, { getter: !0 }), t.set && jn(t.set, e, { setter: !0 }), ac.f(a, e, t);
}, nc = Ue, sc = ic, oc = G, uc = ce, Un = oc("species"), lc = function(a) {
  var e = nc(a);
  uc && e && !e[Un] && sc(e, Un, {
    configurable: !0,
    get: function() {
      return this;
    }
  });
}, hc = Tr, vc = TypeError, fc = function(a, e) {
  if (hc(e, a))
    return a;
  throw vc("Incorrect invocation");
}, cc = G, gc = cc("toStringTag"), cu = {};
cu[gc] = "z";
var dc = String(cu) === "[object z]", pc = dc, yc = D, ur = Fe, mc = G, bc = mc("toStringTag"), xc = Object, Tc = ur(function() {
  return arguments;
}()) == "Arguments", Sc = function(a, e) {
  try {
    return a[e];
  } catch {
  }
}, Di = pc ? ur : function(a) {
  var e, t, r;
  return a === void 0 ? "Undefined" : a === null ? "Null" : typeof (t = Sc(e = xc(a), bc)) == "string" ? t : Tc ? ur(e) : (r = ur(e)) == "Object" && yc(e.callee) ? "Arguments" : r;
}, Oc = k, Ec = L, gu = D, $c = Di, wc = Ue, Cc = Pi, du = function() {
}, Ac = [], pu = wc("Reflect", "construct"), Vi = /^\s*(?:class|function)\b/, Pc = Oc(Vi.exec), Rc = !Vi.exec(du), ft = function(e) {
  if (!gu(e))
    return !1;
  try {
    return pu(du, Ac, e), !0;
  } catch {
    return !1;
  }
}, yu = function(e) {
  if (!gu(e))
    return !1;
  switch ($c(e)) {
    case "AsyncFunction":
    case "GeneratorFunction":
    case "AsyncGeneratorFunction":
      return !1;
  }
  try {
    return Rc || !!Pc(Vi, Cc(e));
  } catch {
    return !0;
  }
};
yu.sham = !0;
var Ic = !pu || Ec(function() {
  var a;
  return ft(ft.call) || !ft(Object) || !ft(function() {
    a = !0;
  }) || a;
}) ? yu : ft, Nc = Ic, Mc = Or, _c = TypeError, Dc = function(a) {
  if (Nc(a))
    return a;
  throw _c(Mc(a) + " is not a constructor");
}, zn = K, Vc = Dc, Lc = je, kc = G, Bc = kc("species"), mu = function(a, e) {
  var t = zn(a).constructor, r;
  return t === void 0 || Lc(r = zn(t)[Bc]) ? e : Vc(r);
}, Fc = br, bu = Function.prototype, Gn = bu.apply, Hn = bu.call, Li = typeof Reflect == "object" && Reflect.apply || (Fc ? Hn.bind(Gn) : function() {
  return Hn.apply(Gn, arguments);
}), jc = Fe, Uc = k, It = function(a) {
  if (jc(a) === "Function")
    return Uc(a);
}, Yn = It, zc = Se, Gc = br, Hc = Yn(Yn.bind), ki = function(a, e) {
  return zc(a), e === void 0 ? a : Gc ? Hc(a, e) : function() {
    return a.apply(e, arguments);
  };
}, Yc = Ue, xu = Yc("document", "documentElement"), Xc = k, Wc = Xc([].slice), qc = TypeError, Qc = function(a, e) {
  if (a < e)
    throw qc("Not enough arguments");
  return a;
}, Kc = Sr, Tu = /(?:ipad|iphone|ipod).*applewebkit/i.test(Kc), ae = U, Zc = Li, Jc = ki, Xn = D, eg = le, Su = L, Wn = xu, tg = Wc, qn = $r, rg = Qc, ag = Tu, ig = Rt, Ja = ae.setImmediate, ei = ae.clearImmediate, ng = ae.process, ca = ae.Dispatch, sg = ae.Function, Qn = ae.MessageChannel, og = ae.String, ga = 0, St = {}, Kn = "onreadystatechange", $t, Ne, da, pa;
Su(function() {
  $t = ae.location;
});
var Bi = function(a) {
  if (eg(St, a)) {
    var e = St[a];
    delete St[a], e();
  }
}, ya = function(a) {
  return function() {
    Bi(a);
  };
}, Zn = function(a) {
  Bi(a.data);
}, Jn = function(a) {
  ae.postMessage(og(a), $t.protocol + "//" + $t.host);
};
(!Ja || !ei) && (Ja = function(e) {
  rg(arguments.length, 1);
  var t = Xn(e) ? e : sg(e), r = tg(arguments, 1);
  return St[++ga] = function() {
    Zc(t, void 0, r);
  }, Ne(ga), ga;
}, ei = function(e) {
  delete St[e];
}, ig ? Ne = function(a) {
  ng.nextTick(ya(a));
} : ca && ca.now ? Ne = function(a) {
  ca.now(ya(a));
} : Qn && !ag ? (da = new Qn(), pa = da.port2, da.port1.onmessage = Zn, Ne = Jc(pa.postMessage, pa)) : ae.addEventListener && Xn(ae.postMessage) && !ae.importScripts && $t && $t.protocol !== "file:" && !Su(Jn) ? (Ne = Jn, ae.addEventListener("message", Zn, !1)) : Kn in qn("script") ? Ne = function(a) {
  Wn.appendChild(qn("script"))[Kn] = function() {
    Wn.removeChild(this), Bi(a);
  };
} : Ne = function(a) {
  setTimeout(ya(a), 0);
});
var Ou = {
  set: Ja,
  clear: ei
}, Eu = function() {
  this.head = null, this.tail = null;
};
Eu.prototype = {
  add: function(a) {
    var e = { item: a, next: null }, t = this.tail;
    t ? t.next = e : this.head = e, this.tail = e;
  },
  get: function() {
    var a = this.head;
    if (a) {
      var e = this.head = a.next;
      return e === null && (this.tail = null), a.item;
    }
  }
};
var $u = Eu, ug = Sr, lg = /ipad|iphone|ipod/i.test(ug) && typeof Pebble < "u", hg = Sr, vg = /web0s(?!.*chrome)/i.test(hg), Le = U, es = ki, fg = ot.f, ma = Ou.set, cg = $u, gg = Tu, dg = lg, pg = vg, ba = Rt, ts = Le.MutationObserver || Le.WebKitMutationObserver, rs = Le.document, as = Le.process, Wt = Le.Promise, is = fg(Le, "queueMicrotask"), ti = is && is.value, We, xa, Ta, qt, ns;
if (!ti) {
  var Qt = new cg(), Kt = function() {
    var a, e;
    for (ba && (a = as.domain) && a.exit(); e = Qt.get(); )
      try {
        e();
      } catch (t) {
        throw Qt.head && We(), t;
      }
    a && a.enter();
  };
  !gg && !ba && !pg && ts && rs ? (xa = !0, Ta = rs.createTextNode(""), new ts(Kt).observe(Ta, { characterData: !0 }), We = function() {
    Ta.data = xa = !xa;
  }) : !dg && Wt && Wt.resolve ? (qt = Wt.resolve(void 0), qt.constructor = Wt, ns = es(qt.then, qt), We = function() {
    ns(Kt);
  }) : ba ? We = function() {
    as.nextTick(Kt);
  } : (ma = es(ma, Le), We = function() {
    ma(Kt);
  }), ti = function(a) {
    Qt.head || We(), Qt.add(a);
  };
}
var yg = ti, mg = function(a, e) {
  try {
    arguments.length == 1 ? console.error(a) : console.error(a, e);
  } catch {
  }
}, Fi = function(a) {
  try {
    return { error: !1, value: a() };
  } catch (e) {
    return { error: !0, value: e };
  }
}, bg = U, Rr = bg.Promise, wu = typeof Deno == "object" && Deno && typeof Deno.version == "object", xg = wu, Tg = Rt, Sg = !xg && !Tg && typeof window == "object" && typeof document == "object", Og = U, Ot = Rr, Eg = D, $g = vu, wg = Pi, Cg = G, Ag = Sg, Pg = wu, Sa = Oi;
Ot && Ot.prototype;
var Rg = Cg("species"), ri = !1, Cu = Eg(Og.PromiseRejectionEvent), Ig = $g("Promise", function() {
  var a = wg(Ot), e = a !== String(Ot);
  if (!e && Sa === 66)
    return !0;
  if (!Sa || Sa < 51 || !/native code/.test(a)) {
    var t = new Ot(function(n) {
      n(1);
    }), r = function(n) {
      n(function() {
      }, function() {
      });
    }, i = t.constructor = {};
    if (i[Rg] = r, ri = t.then(function() {
    }) instanceof r, !ri)
      return !0;
  }
  return !e && (Ag || Pg) && !Cu;
}), Nt = {
  CONSTRUCTOR: Ig,
  REJECTION_EVENT: Cu,
  SUBCLASSING: ri
}, ht = {}, ss = Se, Ng = TypeError, Mg = function(a) {
  var e, t;
  this.promise = new a(function(r, i) {
    if (e !== void 0 || t !== void 0)
      throw Ng("Bad Promise constructor");
    e = r, t = i;
  }), this.resolve = ss(e), this.reject = ss(t);
};
ht.f = function(a) {
  return new Mg(a);
};
var _g = ee, pr = Rt, we = U, nt = Y, os = ze, us = fu, Dg = _i, Vg = lc, Lg = Se, lr = D, kg = Te, Bg = fc, Fg = mu, Au = Ou.set, ji = yg, jg = mg, Ug = Fi, zg = $u, Pu = Cr, yr = Rr, Ui = Nt, Ru = ht, Ir = "Promise", Iu = Ui.CONSTRUCTOR, Gg = Ui.REJECTION_EVENT, Hg = Ui.SUBCLASSING, Oa = Pu.getterFor(Ir), Yg = Pu.set, Ze = yr && yr.prototype, Ve = yr, Zt = Ze, Nu = we.TypeError, ai = we.document, zi = we.process, ii = Ru.f, Xg = ii, Wg = !!(ai && ai.createEvent && we.dispatchEvent), Mu = "unhandledrejection", qg = "rejectionhandled", ls = 0, _u = 1, Qg = 2, Gi = 1, Du = 2, Jt, hs, Kg, vs, Vu = function(a) {
  var e;
  return kg(a) && lr(e = a.then) ? e : !1;
}, Lu = function(a, e) {
  var t = e.value, r = e.state == _u, i = r ? a.ok : a.fail, n = a.resolve, o = a.reject, s = a.domain, u, l, h;
  try {
    i ? (r || (e.rejection === Du && Jg(e), e.rejection = Gi), i === !0 ? u = t : (s && s.enter(), u = i(t), s && (s.exit(), h = !0)), u === a.promise ? o(Nu("Promise-chain cycle")) : (l = Vu(u)) ? nt(l, u, n, o) : n(u)) : o(t);
  } catch (f) {
    s && !h && s.exit(), o(f);
  }
}, ku = function(a, e) {
  a.notified || (a.notified = !0, ji(function() {
    for (var t = a.reactions, r; r = t.get(); )
      Lu(r, a);
    a.notified = !1, e && !a.rejection && Zg(a);
  }));
}, Bu = function(a, e, t) {
  var r, i;
  Wg ? (r = ai.createEvent("Event"), r.promise = e, r.reason = t, r.initEvent(a, !1, !0), we.dispatchEvent(r)) : r = { promise: e, reason: t }, !Gg && (i = we["on" + a]) ? i(r) : a === Mu && jg("Unhandled promise rejection", t);
}, Zg = function(a) {
  nt(Au, we, function() {
    var e = a.facade, t = a.value, r = fs(a), i;
    if (r && (i = Ug(function() {
      pr ? zi.emit("unhandledRejection", t, e) : Bu(Mu, e, t);
    }), a.rejection = pr || fs(a) ? Du : Gi, i.error))
      throw i.value;
  });
}, fs = function(a) {
  return a.rejection !== Gi && !a.parent;
}, Jg = function(a) {
  nt(Au, we, function() {
    var e = a.facade;
    pr ? zi.emit("rejectionHandled", e) : Bu(qg, e, a.value);
  });
}, et = function(a, e, t) {
  return function(r) {
    a(e, r, t);
  };
}, rt = function(a, e, t) {
  a.done || (a.done = !0, t && (a = t), a.value = e, a.state = Qg, ku(a, !0));
}, ni = function(a, e, t) {
  if (!a.done) {
    a.done = !0, t && (a = t);
    try {
      if (a.facade === e)
        throw Nu("Promise can't be resolved itself");
      var r = Vu(e);
      r ? ji(function() {
        var i = { done: !1 };
        try {
          nt(
            r,
            e,
            et(ni, i, a),
            et(rt, i, a)
          );
        } catch (n) {
          rt(i, n, a);
        }
      }) : (a.value = e, a.state = _u, ku(a, !1));
    } catch (i) {
      rt({ done: !1 }, i, a);
    }
  }
};
if (Iu && (Ve = function(e) {
  Bg(this, Zt), Lg(e), nt(Jt, this);
  var t = Oa(this);
  try {
    e(et(ni, t), et(rt, t));
  } catch (r) {
    rt(t, r);
  }
}, Zt = Ve.prototype, Jt = function(e) {
  Yg(this, {
    type: Ir,
    done: !1,
    notified: !1,
    parent: !1,
    reactions: new zg(),
    rejection: !1,
    state: ls,
    value: void 0
  });
}, Jt.prototype = os(Zt, "then", function(e, t) {
  var r = Oa(this), i = ii(Fg(this, Ve));
  return r.parent = !0, i.ok = lr(e) ? e : !0, i.fail = lr(t) && t, i.domain = pr ? zi.domain : void 0, r.state == ls ? r.reactions.add(i) : ji(function() {
    Lu(i, r);
  }), i.promise;
}), hs = function() {
  var a = new Jt(), e = Oa(a);
  this.promise = a, this.resolve = et(ni, e), this.reject = et(rt, e);
}, Ru.f = ii = function(a) {
  return a === Ve || a === Kg ? new hs(a) : Xg(a);
}, lr(yr) && Ze !== Object.prototype)) {
  vs = Ze.then, Hg || os(Ze, "then", function(e, t) {
    var r = this;
    return new Ve(function(i, n) {
      nt(vs, r, i, n);
    }).then(e, t);
  }, { unsafe: !0 });
  try {
    delete Ze.constructor;
  } catch {
  }
  us && us(Ze, Zt);
}
_g({ global: !0, constructor: !0, wrap: !0, forced: Iu }, {
  Promise: Ve
});
Dg(Ve, Ir, !1);
Vg(Ir);
var Mt = {}, ed = G, td = Mt, rd = ed("iterator"), ad = Array.prototype, id = function(a) {
  return a !== void 0 && (td.Array === a || ad[rd] === a);
}, nd = Di, cs = ut, sd = je, od = Mt, ud = G, ld = ud("iterator"), Fu = function(a) {
  if (!sd(a))
    return cs(a, ld) || cs(a, "@@iterator") || od[nd(a)];
}, hd = Y, vd = Se, fd = K, cd = Or, gd = Fu, dd = TypeError, pd = function(a, e) {
  var t = arguments.length < 2 ? gd(a) : e;
  if (vd(t))
    return fd(hd(t, a));
  throw dd(cd(a) + " is not iterable");
}, yd = Y, gs = K, md = ut, bd = function(a, e, t) {
  var r, i;
  gs(a);
  try {
    if (r = md(a, "return"), !r) {
      if (e === "throw")
        throw t;
      return t;
    }
    r = yd(r, a);
  } catch (n) {
    i = !0, r = n;
  }
  if (e === "throw")
    throw t;
  if (i)
    throw r;
  return gs(r), t;
}, xd = ki, Td = Y, Sd = K, Od = Or, Ed = id, $d = Pr, ds = Tr, wd = pd, Cd = Fu, ps = bd, Ad = TypeError, hr = function(a, e) {
  this.stopped = a, this.result = e;
}, ys = hr.prototype, ju = function(a, e, t) {
  var r = t && t.that, i = !!(t && t.AS_ENTRIES), n = !!(t && t.IS_RECORD), o = !!(t && t.IS_ITERATOR), s = !!(t && t.INTERRUPTED), u = xd(e, r), l, h, f, c, v, d, g, p = function(x) {
    return l && ps(l, "normal", x), new hr(!0, x);
  }, y = function(x) {
    return i ? (Sd(x), s ? u(x[0], x[1], p) : u(x[0], x[1])) : s ? u(x, p) : u(x);
  };
  if (n)
    l = a.iterator;
  else if (o)
    l = a;
  else {
    if (h = Cd(a), !h)
      throw Ad(Od(a) + " is not iterable");
    if (Ed(h)) {
      for (f = 0, c = $d(a); c > f; f++)
        if (v = y(a[f]), v && ds(ys, v))
          return v;
      return new hr(!1);
    }
    l = wd(a, h);
  }
  for (d = n ? a.next : l.next; !(g = Td(d, l)).done; ) {
    try {
      v = y(g.value);
    } catch (x) {
      ps(l, "throw", x);
    }
    if (typeof v == "object" && v && ds(ys, v))
      return v;
  }
  return new hr(!1);
}, Pd = G, Uu = Pd("iterator"), zu = !1;
try {
  var Rd = 0, ms = {
    next: function() {
      return { done: !!Rd++ };
    },
    return: function() {
      zu = !0;
    }
  };
  ms[Uu] = function() {
    return this;
  }, Array.from(ms, function() {
    throw 2;
  });
} catch {
}
var Id = function(a, e) {
  if (!e && !zu)
    return !1;
  var t = !1;
  try {
    var r = {};
    r[Uu] = function() {
      return {
        next: function() {
          return { done: t = !0 };
        }
      };
    }, a(r);
  } catch {
  }
  return t;
}, Nd = Rr, Md = Id, _d = Nt.CONSTRUCTOR, Gu = _d || !Md(function(a) {
  Nd.all(a).then(void 0, function() {
  });
}), Dd = ee, Vd = Y, Ld = Se, kd = ht, Bd = Fi, Fd = ju, jd = Gu;
Dd({ target: "Promise", stat: !0, forced: jd }, {
  all: function(e) {
    var t = this, r = kd.f(t), i = r.resolve, n = r.reject, o = Bd(function() {
      var s = Ld(t.resolve), u = [], l = 0, h = 1;
      Fd(e, function(f) {
        var c = l++, v = !1;
        h++, Vd(s, t, f).then(function(d) {
          v || (v = !0, u[c] = d, --h || i(u));
        }, n);
      }), --h || i(u);
    });
    return o.error && n(o.value), r.promise;
  }
});
var Ud = ee, zd = Nt.CONSTRUCTOR, si = Rr, Gd = Ue, Hd = D, Yd = ze, bs = si && si.prototype;
Ud({ target: "Promise", proto: !0, forced: zd, real: !0 }, {
  catch: function(a) {
    return this.then(void 0, a);
  }
});
if (Hd(si)) {
  var xs = Gd("Promise").prototype.catch;
  bs.catch !== xs && Yd(bs, "catch", xs, { unsafe: !0 });
}
var Xd = ee, Wd = Y, qd = Se, Qd = ht, Kd = Fi, Zd = ju, Jd = Gu;
Xd({ target: "Promise", stat: !0, forced: Jd }, {
  race: function(e) {
    var t = this, r = Qd.f(t), i = r.reject, n = Kd(function() {
      var o = qd(t.resolve);
      Zd(e, function(s) {
        Wd(o, t, s).then(r.resolve, i);
      });
    });
    return n.error && i(n.value), r.promise;
  }
});
var ep = ee, tp = Y, rp = ht, ap = Nt.CONSTRUCTOR;
ep({ target: "Promise", stat: !0, forced: ap }, {
  reject: function(e) {
    var t = rp.f(this);
    return tp(t.reject, void 0, e), t.promise;
  }
});
var ip = K, np = Te, sp = ht, op = function(a, e) {
  if (ip(a), np(e) && e.constructor === a)
    return e;
  var t = sp.f(a), r = t.resolve;
  return r(e), t.promise;
}, up = ee, lp = Ue, hp = Nt.CONSTRUCTOR, vp = op;
lp("Promise");
up({ target: "Promise", stat: !0, forced: hp }, {
  resolve: function(e) {
    return vp(this, e);
  }
});
function Ts(a, e, t, r, i, n, o) {
  try {
    var s = a[n](o), u = s.value;
  } catch (l) {
    t(l);
    return;
  }
  s.done ? e(u) : Promise.resolve(u).then(r, i);
}
function xe(a) {
  return function() {
    var e = this, t = arguments;
    return new Promise(function(r, i) {
      var n = a.apply(e, t);
      function o(u) {
        Ts(n, r, i, o, s, "next", u);
      }
      function s(u) {
        Ts(n, r, i, o, s, "throw", u);
      }
      o(void 0);
    });
  };
}
var fp = Di, cp = String, pe = function(a) {
  if (fp(a) === "Symbol")
    throw TypeError("Cannot convert a Symbol value to a string");
  return cp(a);
}, gp = K, Hu = function() {
  var a = gp(this), e = "";
  return a.hasIndices && (e += "d"), a.global && (e += "g"), a.ignoreCase && (e += "i"), a.multiline && (e += "m"), a.dotAll && (e += "s"), a.unicode && (e += "u"), a.unicodeSets && (e += "v"), a.sticky && (e += "y"), e;
}, Hi = L, dp = U, Yi = dp.RegExp, Xi = Hi(function() {
  var a = Yi("a", "y");
  return a.lastIndex = 2, a.exec("abcd") != null;
}), pp = Xi || Hi(function() {
  return !Yi("a", "y").sticky;
}), yp = Xi || Hi(function() {
  var a = Yi("^r", "gy");
  return a.lastIndex = 2, a.exec("str") != null;
}), Yu = {
  BROKEN_CARET: yp,
  MISSED_STICKY: pp,
  UNSUPPORTED_Y: Xi
}, Xu = {}, mp = lu, bp = Mi, xp = Object.keys || function(e) {
  return mp(e, bp);
}, Tp = ce, Sp = eu, Op = de, Ep = K, $p = Ct, wp = xp;
Xu.f = Tp && !Sp ? Object.defineProperties : function(e, t) {
  Ep(e);
  for (var r = $p(t), i = wp(t), n = i.length, o = 0, s; n > o; )
    Op.f(e, s = i[o++], r[s]);
  return e;
};
var Cp = K, Ap = Xu, Ss = Mi, Pp = Ii, Rp = xu, Ip = $r, Np = Ri, Os = ">", Es = "<", oi = "prototype", ui = "script", Wu = Np("IE_PROTO"), Ea = function() {
}, qu = function(a) {
  return Es + ui + Os + a + Es + "/" + ui + Os;
}, $s = function(a) {
  a.write(qu("")), a.close();
  var e = a.parentWindow.Object;
  return a = null, e;
}, Mp = function() {
  var a = Ip("iframe"), e = "java" + ui + ":", t;
  return a.style.display = "none", Rp.appendChild(a), a.src = String(e), t = a.contentWindow.document, t.open(), t.write(qu("document.F=Object")), t.close(), t.F;
}, er, vr = function() {
  try {
    er = new ActiveXObject("htmlfile");
  } catch {
  }
  vr = typeof document < "u" ? document.domain && er ? $s(er) : Mp() : $s(er);
  for (var a = Ss.length; a--; )
    delete vr[oi][Ss[a]];
  return vr();
};
Pp[Wu] = !0;
var Wi = Object.create || function(e, t) {
  var r;
  return e !== null ? (Ea[oi] = Cp(e), r = new Ea(), Ea[oi] = null, r[Wu] = e) : r = vr(), t === void 0 ? r : Ap.f(r, t);
}, _p = L, Dp = U, Vp = Dp.RegExp, Lp = _p(function() {
  var a = Vp(".", "s");
  return !(a.dotAll && a.exec(`
`) && a.flags === "s");
}), kp = L, Bp = U, Fp = Bp.RegExp, jp = kp(function() {
  var a = Fp("(?<a>b)", "g");
  return a.exec("b").groups.a !== "b" || "b".replace(a, "$<a>c") !== "bc";
}), tt = Y, Nr = k, Up = pe, zp = Hu, Gp = Yu, Hp = wi, Yp = Wi, Xp = Cr.get, Wp = Lp, qp = jp, Qp = Hp("native-string-replace", String.prototype.replace), mr = RegExp.prototype.exec, li = mr, Kp = Nr("".charAt), Zp = Nr("".indexOf), Jp = Nr("".replace), $a = Nr("".slice), hi = function() {
  var a = /a/, e = /b*/g;
  return tt(mr, a, "a"), tt(mr, e, "a"), a.lastIndex !== 0 || e.lastIndex !== 0;
}(), Qu = Gp.BROKEN_CARET, vi = /()??/.exec("")[1] !== void 0, ey = hi || vi || Qu || Wp || qp;
ey && (li = function(e) {
  var t = this, r = Xp(t), i = Up(e), n = r.raw, o, s, u, l, h, f, c;
  if (n)
    return n.lastIndex = t.lastIndex, o = tt(li, n, i), t.lastIndex = n.lastIndex, o;
  var v = r.groups, d = Qu && t.sticky, g = tt(zp, t), p = t.source, y = 0, x = i;
  if (d && (g = Jp(g, "y", ""), Zp(g, "g") === -1 && (g += "g"), x = $a(i, t.lastIndex), t.lastIndex > 0 && (!t.multiline || t.multiline && Kp(i, t.lastIndex - 1) !== `
`) && (p = "(?: " + p + ")", x = " " + x, y++), s = new RegExp("^(?:" + p + ")", g)), vi && (s = new RegExp("^" + p + "$(?!\\s)", g)), hi && (u = t.lastIndex), l = tt(mr, d ? s : t, x), d ? l ? (l.input = $a(l.input, y), l[0] = $a(l[0], y), l.index = t.lastIndex, t.lastIndex += l[0].length) : t.lastIndex = 0 : hi && l && (t.lastIndex = t.global ? l.index + l[0].length : u), vi && l && l.length > 1 && tt(Qp, l[0], s, function() {
    for (h = 1; h < arguments.length - 2; h++)
      arguments[h] === void 0 && (l[h] = void 0);
  }), l && v)
    for (l.groups = f = Yp(null), h = 0; h < v.length; h++)
      c = v[h], f[c[0]] = l[c[1]];
  return l;
});
var Mr = li, ty = ee, ws = Mr;
ty({ target: "RegExp", proto: !0, forced: /./.exec !== ws }, {
  exec: ws
});
var Cs = It, As = ze, ry = Mr, Ps = L, Ku = G, ay = At, iy = Ku("species"), wa = RegExp.prototype, qi = function(a, e, t, r) {
  var i = Ku(a), n = !Ps(function() {
    var l = {};
    return l[i] = function() {
      return 7;
    }, ""[a](l) != 7;
  }), o = n && !Ps(function() {
    var l = !1, h = /a/;
    return a === "split" && (h = {}, h.constructor = {}, h.constructor[iy] = function() {
      return h;
    }, h.flags = "", h[i] = /./[i]), h.exec = function() {
      return l = !0, null;
    }, h[i](""), !l;
  });
  if (!n || !o || t) {
    var s = Cs(/./[i]), u = e(i, ""[a], function(l, h, f, c, v) {
      var d = Cs(l), g = h.exec;
      return g === ry || g === wa.exec ? n && !v ? { done: !0, value: s(h, f, c) } : { done: !0, value: d(f, h, c) } : { done: !1 };
    });
    As(String.prototype, a, u[0]), As(wa, i, u[1]);
  }
  r && ay(wa[i], "sham", !0);
}, Qi = k, ny = Ar, sy = pe, oy = ge, uy = Qi("".charAt), Rs = Qi("".charCodeAt), ly = Qi("".slice), Is = function(a) {
  return function(e, t) {
    var r = sy(oy(e)), i = ny(t), n = r.length, o, s;
    return i < 0 || i >= n ? a ? "" : void 0 : (o = Rs(r, i), o < 55296 || o > 56319 || i + 1 === n || (s = Rs(r, i + 1)) < 56320 || s > 57343 ? a ? uy(r, i) : o : a ? ly(r, i, i + 2) : (o - 55296 << 10) + (s - 56320) + 65536);
  };
}, hy = {
  // `String.prototype.codePointAt` method
  // https://tc39.es/ecma262/#sec-string.prototype.codepointat
  codeAt: Is(!1),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: Is(!0)
}, vy = hy.charAt, Ki = function(a, e, t) {
  return e + (t ? vy(a, e).length : 1);
}, Ns = Y, fy = K, cy = D, gy = Fe, dy = Mr, py = TypeError, Zi = function(a, e) {
  var t = a.exec;
  if (cy(t)) {
    var r = Ns(t, a, e);
    return r !== null && fy(r), r;
  }
  if (gy(a) === "RegExp")
    return Ns(dy, a, e);
  throw py("RegExp#exec called on incompatible receiver");
}, yy = Y, my = qi, by = K, xy = je, Ty = lt, Ca = pe, Sy = ge, Oy = ut, Ey = Ki, Ms = Zi;
my("match", function(a, e, t) {
  return [
    // `String.prototype.match` method
    // https://tc39.es/ecma262/#sec-string.prototype.match
    function(i) {
      var n = Sy(this), o = xy(i) ? void 0 : Oy(i, a);
      return o ? yy(o, i, n) : new RegExp(i)[a](Ca(n));
    },
    // `RegExp.prototype[@@match]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@match
    function(r) {
      var i = by(this), n = Ca(r), o = t(e, i, n);
      if (o.done)
        return o.value;
      if (!i.global)
        return Ms(i, n);
      var s = i.unicode;
      i.lastIndex = 0;
      for (var u = [], l = 0, h; (h = Ms(i, n)) !== null; ) {
        var f = Ca(h[0]);
        u[l] = f, f === "" && (i.lastIndex = Ey(n, Ty(i.lastIndex), s)), l++;
      }
      return l === 0 ? null : u;
    }
  ];
});
var Ji = k, $y = Er, wy = Math.floor, Aa = Ji("".charAt), Cy = Ji("".replace), Pa = Ji("".slice), Ay = /\$([$&'`]|\d{1,2}|<[^>]*>)/g, Py = /\$([$&'`]|\d{1,2})/g, Ry = function(a, e, t, r, i, n) {
  var o = t + a.length, s = r.length, u = Py;
  return i !== void 0 && (i = $y(i), u = Ay), Cy(n, u, function(l, h) {
    var f;
    switch (Aa(h, 0)) {
      case "$":
        return "$";
      case "&":
        return a;
      case "`":
        return Pa(e, 0, t);
      case "'":
        return Pa(e, o);
      case "<":
        f = i[Pa(h, 1, -1)];
        break;
      default:
        var c = +h;
        if (c === 0)
          return l;
        if (c > s) {
          var v = wy(c / 10);
          return v === 0 ? l : v <= s ? r[v - 1] === void 0 ? Aa(h, 1) : r[v - 1] + Aa(h, 1) : l;
        }
        f = r[c - 1];
    }
    return f === void 0 ? "" : f;
  });
}, Iy = Li, _s = Y, _r = k, Ny = qi, My = L, _y = K, Dy = D, Vy = je, Ly = Ar, ky = lt, qe = pe, By = ge, Fy = Ki, jy = ut, Uy = Ry, zy = Zi, Gy = G, fi = Gy("replace"), Hy = Math.max, Yy = Math.min, Xy = _r([].concat), Ra = _r([].push), Ds = _r("".indexOf), Vs = _r("".slice), Wy = function(a) {
  return a === void 0 ? a : String(a);
}, qy = function() {
  return "a".replace(/./, "$0") === "$0";
}(), Ls = function() {
  return /./[fi] ? /./[fi]("a", "$0") === "" : !1;
}(), Qy = !My(function() {
  var a = /./;
  return a.exec = function() {
    var e = [];
    return e.groups = { a: "7" }, e;
  }, "".replace(a, "$<a>") !== "7";
});
Ny("replace", function(a, e, t) {
  var r = Ls ? "$" : "$0";
  return [
    // `String.prototype.replace` method
    // https://tc39.es/ecma262/#sec-string.prototype.replace
    function(n, o) {
      var s = By(this), u = Vy(n) ? void 0 : jy(n, fi);
      return u ? _s(u, n, s, o) : _s(e, qe(s), n, o);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@replace
    function(i, n) {
      var o = _y(this), s = qe(i);
      if (typeof n == "string" && Ds(n, r) === -1 && Ds(n, "$<") === -1) {
        var u = t(e, o, s, n);
        if (u.done)
          return u.value;
      }
      var l = Dy(n);
      l || (n = qe(n));
      var h = o.global;
      if (h) {
        var f = o.unicode;
        o.lastIndex = 0;
      }
      for (var c = []; ; ) {
        var v = zy(o, s);
        if (v === null || (Ra(c, v), !h))
          break;
        var d = qe(v[0]);
        d === "" && (o.lastIndex = Fy(s, ky(o.lastIndex), f));
      }
      for (var g = "", p = 0, y = 0; y < c.length; y++) {
        v = c[y];
        for (var x = qe(v[0]), b = Hy(Yy(Ly(v.index), s.length), 0), T = [], $ = 1; $ < v.length; $++)
          Ra(T, Wy(v[$]));
        var E = v.groups;
        if (l) {
          var S = Xy([x], T, b, s);
          E !== void 0 && Ra(S, E);
          var C = qe(Iy(n, void 0, S));
        } else
          C = Uy(x, s, b, T, E, n);
        b >= p && (g += Vs(s, p, b) + C, p = b + x.length);
      }
      return g + Vs(s, p);
    }
  ];
}, !Qy || !qy || Ls);
var Ky = Te, Zy = Fe, Jy = G, em = Jy("match"), Zu = function(a) {
  var e;
  return Ky(a) && ((e = a[em]) !== void 0 ? !!e : Zy(a) == "RegExp");
}, tm = Zu, rm = TypeError, en = function(a) {
  if (tm(a))
    throw rm("The method doesn't accept regular expressions");
  return a;
}, am = G, im = am("match"), tn = function(a) {
  var e = /./;
  try {
    "/./"[a](e);
  } catch {
    try {
      return e[im] = !1, "/./"[a](e);
    } catch {
    }
  }
  return !1;
}, nm = ee, Ju = It, sm = ot.f, om = lt, ks = pe, um = en, lm = ge, hm = tn, Bs = Ju("".startsWith), vm = Ju("".slice), fm = Math.min, el = hm("startsWith"), cm = !el && !!function() {
  var a = sm(String.prototype, "startsWith");
  return a && !a.writable;
}();
nm({ target: "String", proto: !0, forced: !cm && !el }, {
  startsWith: function(e) {
    var t = ks(lm(this));
    um(e);
    var r = om(fm(arguments.length > 1 ? arguments[1] : void 0, t.length)), i = ks(e);
    return Bs ? Bs(t, i, r) : vm(t, r, r + i.length) === i;
  }
});
var gm = G, dm = Wi, pm = de.f, ci = gm("unscopables"), gi = Array.prototype;
gi[ci] == null && pm(gi, ci, {
  configurable: !0,
  value: dm(null)
});
var ym = function(a) {
  gi[ci][a] = !0;
}, mm = L, bm = !mm(function() {
  function a() {
  }
  return a.prototype.constructor = null, Object.getPrototypeOf(new a()) !== a.prototype;
}), xm = le, Tm = D, Sm = Er, Om = Ri, Em = bm, Fs = Om("IE_PROTO"), di = Object, $m = di.prototype, tl = Em ? di.getPrototypeOf : function(a) {
  var e = Sm(a);
  if (xm(e, Fs))
    return e[Fs];
  var t = e.constructor;
  return Tm(t) && e instanceof t ? t.prototype : e instanceof di ? $m : null;
}, wm = L, Cm = D, Am = Te, js = tl, Pm = ze, Rm = G, pi = Rm("iterator"), rl = !1, ke, Ia, Na;
[].keys && (Na = [].keys(), "next" in Na ? (Ia = js(js(Na)), Ia !== Object.prototype && (ke = Ia)) : rl = !0);
var Im = !Am(ke) || wm(function() {
  var a = {};
  return ke[pi].call(a) !== a;
});
Im && (ke = {});
Cm(ke[pi]) || Pm(ke, pi, function() {
  return this;
});
var al = {
  IteratorPrototype: ke,
  BUGGY_SAFARI_ITERATORS: rl
}, Nm = al.IteratorPrototype, Mm = Wi, _m = xr, Dm = _i, Vm = Mt, Lm = function() {
  return this;
}, km = function(a, e, t, r) {
  var i = e + " Iterator";
  return a.prototype = Mm(Nm, { next: _m(+!r, t) }), Dm(a, i, !1), Vm[i] = Lm, a;
}, Bm = ee, Fm = Y, il = wr, jm = D, Um = km, Us = tl, zs = fu, zm = _i, Gm = At, Ma = ze, Hm = G, Ym = Mt, nl = al, Xm = il.PROPER, Wm = il.CONFIGURABLE, Gs = nl.IteratorPrototype, tr = nl.BUGGY_SAFARI_ITERATORS, ct = Hm("iterator"), Hs = "keys", gt = "values", Ys = "entries", qm = function() {
  return this;
}, Qm = function(a, e, t, r, i, n, o) {
  Um(t, e, r);
  var s = function(y) {
    if (y === i && c)
      return c;
    if (!tr && y in h)
      return h[y];
    switch (y) {
      case Hs:
        return function() {
          return new t(this, y);
        };
      case gt:
        return function() {
          return new t(this, y);
        };
      case Ys:
        return function() {
          return new t(this, y);
        };
    }
    return function() {
      return new t(this);
    };
  }, u = e + " Iterator", l = !1, h = a.prototype, f = h[ct] || h["@@iterator"] || i && h[i], c = !tr && f || s(i), v = e == "Array" && h.entries || f, d, g, p;
  if (v && (d = Us(v.call(new a())), d !== Object.prototype && d.next && (Us(d) !== Gs && (zs ? zs(d, Gs) : jm(d[ct]) || Ma(d, ct, qm)), zm(d, u, !0))), Xm && i == gt && f && f.name !== gt && (Wm ? Gm(h, "name", gt) : (l = !0, c = function() {
    return Fm(f, this);
  })), i)
    if (g = {
      values: s(gt),
      keys: n ? c : s(Hs),
      entries: s(Ys)
    }, o)
      for (p in g)
        (tr || l || !(p in h)) && Ma(h, p, g[p]);
    else
      Bm({ target: e, proto: !0, forced: tr || l }, g);
  return h[ct] !== c && Ma(h, ct, c, { name: i }), Ym[e] = c, g;
}, Km = function(a, e) {
  return { value: a, done: e };
}, Zm = Ct, rn = ym, Xs = Mt, sl = Cr, Jm = de.f, e0 = Qm, rr = Km, t0 = ce, ol = "Array Iterator", r0 = sl.set, a0 = sl.getterFor(ol), i0 = e0(Array, "Array", function(a, e) {
  r0(this, {
    type: ol,
    target: Zm(a),
    // target
    index: 0,
    // next index
    kind: e
    // kind
  });
}, function() {
  var a = a0(this), e = a.target, t = a.kind, r = a.index++;
  return !e || r >= e.length ? (a.target = void 0, rr(void 0, !0)) : t == "keys" ? rr(r, !1) : t == "values" ? rr(e[r], !1) : rr([r, e[r]], !1);
}, "values"), Ws = Xs.Arguments = Xs.Array;
rn("keys");
rn("values");
rn("entries");
if (t0 && Ws.name !== "values")
  try {
    Jm(Ws, "name", { value: "values" });
  } catch {
  }
var n0 = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
}, s0 = $r, _a = s0("span").classList, qs = _a && _a.constructor && _a.constructor.prototype, o0 = qs === Object.prototype ? void 0 : qs, Qs = U, ul = n0, u0 = o0, mt = i0, Da = At, ll = G, Va = ll("iterator"), Ks = ll("toStringTag"), La = mt.values, hl = function(a, e) {
  if (a) {
    if (a[Va] !== La)
      try {
        Da(a, Va, La);
      } catch {
        a[Va] = La;
      }
    if (a[Ks] || Da(a, Ks, e), ul[e]) {
      for (var t in mt)
        if (a[t] !== mt[t])
          try {
            Da(a, t, mt[t]);
          } catch {
            a[t] = mt[t];
          }
    }
  }
};
for (var ka in ul)
  hl(Qs[ka] && Qs[ka].prototype, ka);
hl(u0, "DOMTokenList");
function l0(a, e) {
  if (Ha(a) !== "object" || a === null)
    return a;
  var t = a[Symbol.toPrimitive];
  if (t !== void 0) {
    var r = t.call(a, e || "default");
    if (Ha(r) !== "object")
      return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(a);
}
function h0(a) {
  var e = l0(a, "string");
  return Ha(e) === "symbol" ? e : String(e);
}
function an(a, e, t) {
  return e = h0(e), e in a ? Object.defineProperty(a, e, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : a[e] = t, a;
}
var v0 = Se, f0 = Er, c0 = zo, g0 = Pr, d0 = TypeError, Zs = function(a) {
  return function(e, t, r, i) {
    v0(t);
    var n = f0(e), o = c0(n), s = g0(n), u = a ? s - 1 : 0, l = a ? -1 : 1;
    if (r < 2)
      for (; ; ) {
        if (u in o) {
          i = o[u], u += l;
          break;
        }
        if (u += l, a ? u < 0 : s <= u)
          throw d0("Reduce of empty array with no initial value");
      }
    for (; a ? u >= 0 : s > u; u += l)
      u in o && (i = t(i, o[u], u, n));
    return i;
  };
}, p0 = {
  // `Array.prototype.reduce` method
  // https://tc39.es/ecma262/#sec-array.prototype.reduce
  left: Zs(!1),
  // `Array.prototype.reduceRight` method
  // https://tc39.es/ecma262/#sec-array.prototype.reduceright
  right: Zs(!0)
}, y0 = L, vl = function(a, e) {
  var t = [][a];
  return !!t && y0(function() {
    t.call(null, e || function() {
      return 1;
    }, 1);
  });
}, m0 = ee, b0 = p0.left, x0 = vl, Js = Oi, T0 = Rt, S0 = !T0 && Js > 79 && Js < 83, O0 = S0 || !x0("reduce");
m0({ target: "Array", proto: !0, forced: O0 }, {
  reduce: function(e) {
    var t = arguments.length;
    return b0(this, e, t, t > 1 ? arguments[1] : void 0);
  }
});
var E0 = ee, fl = It, $0 = ot.f, w0 = lt, eo = pe, C0 = en, A0 = ge, P0 = tn, to = fl("".endsWith), R0 = fl("".slice), I0 = Math.min, cl = P0("endsWith"), N0 = !cl && !!function() {
  var a = $0(String.prototype, "endsWith");
  return a && !a.writable;
}();
E0({ target: "String", proto: !0, forced: !N0 && !cl }, {
  endsWith: function(e) {
    var t = eo(A0(this));
    C0(e);
    var r = arguments.length > 1 ? arguments[1] : void 0, i = t.length, n = r === void 0 ? i : I0(w0(r), i), o = eo(e);
    return to ? to(t, o, n) : R0(t, n - o.length, n) === o;
  }
});
var M0 = Ci, _0 = de, D0 = xr, V0 = function(a, e, t) {
  var r = M0(e);
  r in a ? _0.f(a, r, D0(0, t)) : a[r] = t;
}, ro = ou, L0 = Pr, k0 = V0, B0 = Array, F0 = Math.max, j0 = function(a, e, t) {
  for (var r = L0(a), i = ro(e, r), n = ro(t === void 0 ? r : t, r), o = B0(F0(n - i, 0)), s = 0; i < n; i++, s++)
    k0(o, s, a[i]);
  return o.length = s, o;
}, U0 = Li, dt = Y, nn = k, z0 = qi, G0 = K, H0 = je, Y0 = Zu, ao = ge, X0 = mu, W0 = Ki, q0 = lt, Ba = pe, Q0 = ut, io = j0, no = Zi, K0 = Mr, Z0 = Yu, J0 = L, Qe = Z0.UNSUPPORTED_Y, so = 4294967295, eb = Math.min, gl = [].push, tb = nn(/./.exec), Ke = nn(gl), pt = nn("".slice), rb = !J0(function() {
  var a = /(?:)/, e = a.exec;
  a.exec = function() {
    return e.apply(this, arguments);
  };
  var t = "ab".split(a);
  return t.length !== 2 || t[0] !== "a" || t[1] !== "b";
});
z0("split", function(a, e, t) {
  var r;
  return "abbc".split(/(b)*/)[1] == "c" || // eslint-disable-next-line regexp/no-empty-group -- required for testing
  "test".split(/(?:)/, -1).length != 4 || "ab".split(/(?:ab)*/).length != 2 || ".".split(/(.?)(.?)/).length != 4 || // eslint-disable-next-line regexp/no-empty-capturing-group, regexp/no-empty-group -- required for testing
  ".".split(/()()/).length > 1 || "".split(/.?/).length ? r = function(i, n) {
    var o = Ba(ao(this)), s = n === void 0 ? so : n >>> 0;
    if (s === 0)
      return [];
    if (i === void 0)
      return [o];
    if (!Y0(i))
      return dt(e, o, i, s);
    for (var u = [], l = (i.ignoreCase ? "i" : "") + (i.multiline ? "m" : "") + (i.unicode ? "u" : "") + (i.sticky ? "y" : ""), h = 0, f = new RegExp(i.source, l + "g"), c, v, d; (c = dt(K0, f, o)) && (v = f.lastIndex, !(v > h && (Ke(u, pt(o, h, c.index)), c.length > 1 && c.index < o.length && U0(gl, u, io(c, 1)), d = c[0].length, h = v, u.length >= s))); )
      f.lastIndex === c.index && f.lastIndex++;
    return h === o.length ? (d || !tb(f, "")) && Ke(u, "") : Ke(u, pt(o, h)), u.length > s ? io(u, 0, s) : u;
  } : "0".split(void 0, 0).length ? r = function(i, n) {
    return i === void 0 && n === 0 ? [] : dt(e, this, i, n);
  } : r = e, [
    // `String.prototype.split` method
    // https://tc39.es/ecma262/#sec-string.prototype.split
    function(n, o) {
      var s = ao(this), u = H0(n) ? void 0 : Q0(n, a);
      return u ? dt(u, n, s, o) : dt(r, Ba(s), n, o);
    },
    // `RegExp.prototype[@@split]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@split
    //
    // NOTE: This cannot be properly polyfilled in engines that don't support
    // the 'y' flag.
    function(i, n) {
      var o = G0(this), s = Ba(i), u = t(r, o, s, n, r !== e);
      if (u.done)
        return u.value;
      var l = X0(o, RegExp), h = o.unicode, f = (o.ignoreCase ? "i" : "") + (o.multiline ? "m" : "") + (o.unicode ? "u" : "") + (Qe ? "g" : "y"), c = new l(Qe ? "^(?:" + o.source + ")" : o, f), v = n === void 0 ? so : n >>> 0;
      if (v === 0)
        return [];
      if (s.length === 0)
        return no(c, s) === null ? [s] : [];
      for (var d = 0, g = 0, p = []; g < s.length; ) {
        c.lastIndex = Qe ? 0 : g;
        var y = no(c, Qe ? pt(s, g) : s), x;
        if (y === null || (x = eb(q0(c.lastIndex + (Qe ? g : 0)), s.length)) === d)
          g = W0(s, g, h);
        else {
          if (Ke(p, pt(s, d, g)), p.length === v)
            return p;
          for (var b = 1; b <= y.length - 1; b++)
            if (Ke(p, y[b]), p.length === v)
              return p;
          g = d = x;
        }
      }
      return Ke(p, pt(s, d)), p;
    }
  ];
}, !rb, Qe);
var Dr = { exports: {} }, bt = { exports: {} };
(function() {
  var a, e, t, r, i, n;
  typeof performance < "u" && performance !== null && performance.now ? bt.exports = function() {
    return performance.now();
  } : typeof process < "u" && process !== null && process.hrtime ? (bt.exports = function() {
    return (a() - i) / 1e6;
  }, e = process.hrtime, a = function() {
    var o;
    return o = e(), o[0] * 1e9 + o[1];
  }, r = a(), n = process.uptime() * 1e9, i = r - n) : Date.now ? (bt.exports = function() {
    return Date.now() - t;
  }, t = Date.now()) : (bt.exports = function() {
    return (/* @__PURE__ */ new Date()).getTime() - t;
  }, t = (/* @__PURE__ */ new Date()).getTime());
}).call(Tt);
var ab = bt.exports, ib = ab, be = typeof window > "u" ? Tt : window, ar = ["moz", "webkit"], at = "AnimationFrame", st = be["request" + at], wt = be["cancel" + at] || be["cancelRequest" + at];
for (var yt = 0; !st && yt < ar.length; yt++)
  st = be[ar[yt] + "Request" + at], wt = be[ar[yt] + "Cancel" + at] || be[ar[yt] + "CancelRequest" + at];
if (!st || !wt) {
  var Fa = 0, oo = 0, Me = [], nb = 1e3 / 60;
  st = function(a) {
    if (Me.length === 0) {
      var e = ib(), t = Math.max(0, nb - (e - Fa));
      Fa = t + e, setTimeout(function() {
        var r = Me.slice(0);
        Me.length = 0;
        for (var i = 0; i < r.length; i++)
          if (!r[i].cancelled)
            try {
              r[i].callback(Fa);
            } catch (n) {
              setTimeout(function() {
                throw n;
              }, 0);
            }
      }, Math.round(t));
    }
    return Me.push({
      handle: ++oo,
      callback: a,
      cancelled: !1
    }), oo;
  }, wt = function(a) {
    for (var e = 0; e < Me.length; e++)
      Me[e].handle === a && (Me[e].cancelled = !0);
  };
}
Dr.exports = function(a) {
  return st.call(be, a);
};
Dr.exports.cancel = function() {
  wt.apply(be, arguments);
};
Dr.exports.polyfill = function(a) {
  a || (a = be), a.requestAnimationFrame = st, a.cancelAnimationFrame = wt;
};
var sb = Dr.exports;
const ja = /* @__PURE__ */ Vo(sb);
var dl = `	
\v\f\r                　\u2028\u2029\uFEFF`, ob = k, ub = ge, lb = pe, yi = dl, uo = ob("".replace), hb = RegExp("^[" + yi + "]+"), vb = RegExp("(^|[^" + yi + "])[" + yi + "]+$"), Ua = function(a) {
  return function(e) {
    var t = lb(ub(e));
    return a & 1 && (t = uo(t, hb, "")), a & 2 && (t = uo(t, vb, "$1")), t;
  };
}, fb = {
  // `String.prototype.{ trimLeft, trimStart }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimstart
  start: Ua(1),
  // `String.prototype.{ trimRight, trimEnd }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimend
  end: Ua(2),
  // `String.prototype.trim` method
  // https://tc39.es/ecma262/#sec-string.prototype.trim
  trim: Ua(3)
}, cb = wr.PROPER, gb = L, lo = dl, ho = "​᠎", db = function(a) {
  return gb(function() {
    return !!lo[a]() || ho[a]() !== ho || cb && lo[a].name !== a;
  });
}, pb = ee, yb = fb.trim, mb = db;
pb({ target: "String", proto: !0, forced: mb("trim") }, {
  trim: function() {
    return yb(this);
  }
});
var bb = function(a) {
  this.ok = !1, this.alpha = 1, a.charAt(0) == "#" && (a = a.substr(1, 6)), a = a.replace(/ /g, ""), a = a.toLowerCase();
  var e = {
    aliceblue: "f0f8ff",
    antiquewhite: "faebd7",
    aqua: "00ffff",
    aquamarine: "7fffd4",
    azure: "f0ffff",
    beige: "f5f5dc",
    bisque: "ffe4c4",
    black: "000000",
    blanchedalmond: "ffebcd",
    blue: "0000ff",
    blueviolet: "8a2be2",
    brown: "a52a2a",
    burlywood: "deb887",
    cadetblue: "5f9ea0",
    chartreuse: "7fff00",
    chocolate: "d2691e",
    coral: "ff7f50",
    cornflowerblue: "6495ed",
    cornsilk: "fff8dc",
    crimson: "dc143c",
    cyan: "00ffff",
    darkblue: "00008b",
    darkcyan: "008b8b",
    darkgoldenrod: "b8860b",
    darkgray: "a9a9a9",
    darkgreen: "006400",
    darkkhaki: "bdb76b",
    darkmagenta: "8b008b",
    darkolivegreen: "556b2f",
    darkorange: "ff8c00",
    darkorchid: "9932cc",
    darkred: "8b0000",
    darksalmon: "e9967a",
    darkseagreen: "8fbc8f",
    darkslateblue: "483d8b",
    darkslategray: "2f4f4f",
    darkturquoise: "00ced1",
    darkviolet: "9400d3",
    deeppink: "ff1493",
    deepskyblue: "00bfff",
    dimgray: "696969",
    dodgerblue: "1e90ff",
    feldspar: "d19275",
    firebrick: "b22222",
    floralwhite: "fffaf0",
    forestgreen: "228b22",
    fuchsia: "ff00ff",
    gainsboro: "dcdcdc",
    ghostwhite: "f8f8ff",
    gold: "ffd700",
    goldenrod: "daa520",
    gray: "808080",
    green: "008000",
    greenyellow: "adff2f",
    honeydew: "f0fff0",
    hotpink: "ff69b4",
    indianred: "cd5c5c",
    indigo: "4b0082",
    ivory: "fffff0",
    khaki: "f0e68c",
    lavender: "e6e6fa",
    lavenderblush: "fff0f5",
    lawngreen: "7cfc00",
    lemonchiffon: "fffacd",
    lightblue: "add8e6",
    lightcoral: "f08080",
    lightcyan: "e0ffff",
    lightgoldenrodyellow: "fafad2",
    lightgrey: "d3d3d3",
    lightgreen: "90ee90",
    lightpink: "ffb6c1",
    lightsalmon: "ffa07a",
    lightseagreen: "20b2aa",
    lightskyblue: "87cefa",
    lightslateblue: "8470ff",
    lightslategray: "778899",
    lightsteelblue: "b0c4de",
    lightyellow: "ffffe0",
    lime: "00ff00",
    limegreen: "32cd32",
    linen: "faf0e6",
    magenta: "ff00ff",
    maroon: "800000",
    mediumaquamarine: "66cdaa",
    mediumblue: "0000cd",
    mediumorchid: "ba55d3",
    mediumpurple: "9370d8",
    mediumseagreen: "3cb371",
    mediumslateblue: "7b68ee",
    mediumspringgreen: "00fa9a",
    mediumturquoise: "48d1cc",
    mediumvioletred: "c71585",
    midnightblue: "191970",
    mintcream: "f5fffa",
    mistyrose: "ffe4e1",
    moccasin: "ffe4b5",
    navajowhite: "ffdead",
    navy: "000080",
    oldlace: "fdf5e6",
    olive: "808000",
    olivedrab: "6b8e23",
    orange: "ffa500",
    orangered: "ff4500",
    orchid: "da70d6",
    palegoldenrod: "eee8aa",
    palegreen: "98fb98",
    paleturquoise: "afeeee",
    palevioletred: "d87093",
    papayawhip: "ffefd5",
    peachpuff: "ffdab9",
    peru: "cd853f",
    pink: "ffc0cb",
    plum: "dda0dd",
    powderblue: "b0e0e6",
    purple: "800080",
    rebeccapurple: "663399",
    red: "ff0000",
    rosybrown: "bc8f8f",
    royalblue: "4169e1",
    saddlebrown: "8b4513",
    salmon: "fa8072",
    sandybrown: "f4a460",
    seagreen: "2e8b57",
    seashell: "fff5ee",
    sienna: "a0522d",
    silver: "c0c0c0",
    skyblue: "87ceeb",
    slateblue: "6a5acd",
    slategray: "708090",
    snow: "fffafa",
    springgreen: "00ff7f",
    steelblue: "4682b4",
    tan: "d2b48c",
    teal: "008080",
    thistle: "d8bfd8",
    tomato: "ff6347",
    turquoise: "40e0d0",
    violet: "ee82ee",
    violetred: "d02090",
    wheat: "f5deb3",
    white: "ffffff",
    whitesmoke: "f5f5f5",
    yellow: "ffff00",
    yellowgreen: "9acd32"
  };
  a = e[a] || a;
  for (var t = [
    {
      re: /^rgba\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3}),\s*((?:\d?\.)?\d)\)$/,
      example: ["rgba(123, 234, 45, 0.8)", "rgba(255,234,245,1.0)"],
      process: function(u) {
        return [
          parseInt(u[1]),
          parseInt(u[2]),
          parseInt(u[3]),
          parseFloat(u[4])
        ];
      }
    },
    {
      re: /^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/,
      example: ["rgb(123, 234, 45)", "rgb(255,234,245)"],
      process: function(u) {
        return [
          parseInt(u[1]),
          parseInt(u[2]),
          parseInt(u[3])
        ];
      }
    },
    {
      re: /^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
      example: ["#00ff00", "336699"],
      process: function(u) {
        return [
          parseInt(u[1], 16),
          parseInt(u[2], 16),
          parseInt(u[3], 16)
        ];
      }
    },
    {
      re: /^([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
      example: ["#fb0", "f0f"],
      process: function(u) {
        return [
          parseInt(u[1] + u[1], 16),
          parseInt(u[2] + u[2], 16),
          parseInt(u[3] + u[3], 16)
        ];
      }
    }
  ], r = 0; r < t.length; r++) {
    var i = t[r].re, n = t[r].process, o = i.exec(a);
    if (o) {
      var s = n(o);
      this.r = s[0], this.g = s[1], this.b = s[2], s.length > 3 && (this.alpha = s[3]), this.ok = !0;
    }
  }
  this.r = this.r < 0 || isNaN(this.r) ? 0 : this.r > 255 ? 255 : this.r, this.g = this.g < 0 || isNaN(this.g) ? 0 : this.g > 255 ? 255 : this.g, this.b = this.b < 0 || isNaN(this.b) ? 0 : this.b > 255 ? 255 : this.b, this.alpha = this.alpha < 0 ? 0 : this.alpha > 1 || isNaN(this.alpha) ? 1 : this.alpha, this.toRGB = function() {
    return "rgb(" + this.r + ", " + this.g + ", " + this.b + ")";
  }, this.toRGBA = function() {
    return "rgba(" + this.r + ", " + this.g + ", " + this.b + ", " + this.alpha + ")";
  }, this.toHex = function() {
    var u = this.r.toString(16), l = this.g.toString(16), h = this.b.toString(16);
    return u.length == 1 && (u = "0" + u), l.length == 1 && (l = "0" + l), h.length == 1 && (h = "0" + h), "#" + u + l + h;
  }, this.getHelpXML = function() {
    for (var u = new Array(), l = 0; l < t.length; l++)
      for (var h = t[l].example, f = 0; f < h.length; f++)
        u[u.length] = h[f];
    for (var c in e)
      u[u.length] = c;
    var v = document.createElement("ul");
    v.setAttribute("id", "rgbcolor-examples");
    for (var l = 0; l < u.length; l++)
      try {
        var d = document.createElement("li"), g = new RGBColor(u[l]), p = document.createElement("div");
        p.style.cssText = "margin: 3px; border: 1px solid black; background:" + g.toHex() + "; color:" + g.toHex(), p.appendChild(document.createTextNode("test"));
        var y = document.createTextNode(
          " " + u[l] + " -> " + g.toRGB() + " -> " + g.toHex()
        );
        d.appendChild(p), d.appendChild(y), v.appendChild(d);
      } catch {
      }
    return v;
  };
};
const mi = /* @__PURE__ */ Vo(bb);
var xb = ee, Tb = It, Sb = uu.indexOf, Ob = vl, bi = Tb([].indexOf), pl = !!bi && 1 / bi([1], 1, -0) < 0, Eb = pl || !Ob("indexOf");
xb({ target: "Array", proto: !0, forced: Eb }, {
  indexOf: function(e) {
    var t = arguments.length > 1 ? arguments[1] : void 0;
    return pl ? bi(this, e, t) || 0 : Sb(this, e, t);
  }
});
var $b = ee, wb = k, Cb = en, Ab = ge, vo = pe, Pb = tn, Rb = wb("".indexOf);
$b({ target: "String", proto: !0, forced: !Pb("includes") }, {
  includes: function(e) {
    return !!~Rb(
      vo(Ab(this)),
      vo(Cb(e)),
      arguments.length > 1 ? arguments[1] : void 0
    );
  }
});
var Ib = Fe, Nb = Array.isArray || function(e) {
  return Ib(e) == "Array";
}, Mb = ee, _b = k, Db = Nb, Vb = _b([].reverse), fo = [1, 2];
Mb({ target: "Array", proto: !0, forced: String(fo) === String(fo.reverse()) }, {
  reverse: function() {
    return Db(this) && (this.length = this.length), Vb(this);
  }
});
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var yl = function(a, e) {
  return (yl = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, r) {
    t.__proto__ = r;
  } || function(t, r) {
    for (var i in r)
      Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i]);
  })(a, e);
};
function ml(a, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  function t() {
    this.constructor = a;
  }
  yl(a, e), a.prototype = e === null ? Object.create(e) : (t.prototype = e.prototype, new t());
}
function Lb(a) {
  var e = "";
  Array.isArray(a) || (a = [a]);
  for (var t = 0; t < a.length; t++) {
    var r = a[t];
    if (r.type === m.CLOSE_PATH)
      e += "z";
    else if (r.type === m.HORIZ_LINE_TO)
      e += (r.relative ? "h" : "H") + r.x;
    else if (r.type === m.VERT_LINE_TO)
      e += (r.relative ? "v" : "V") + r.y;
    else if (r.type === m.MOVE_TO)
      e += (r.relative ? "m" : "M") + r.x + " " + r.y;
    else if (r.type === m.LINE_TO)
      e += (r.relative ? "l" : "L") + r.x + " " + r.y;
    else if (r.type === m.CURVE_TO)
      e += (r.relative ? "c" : "C") + r.x1 + " " + r.y1 + " " + r.x2 + " " + r.y2 + " " + r.x + " " + r.y;
    else if (r.type === m.SMOOTH_CURVE_TO)
      e += (r.relative ? "s" : "S") + r.x2 + " " + r.y2 + " " + r.x + " " + r.y;
    else if (r.type === m.QUAD_TO)
      e += (r.relative ? "q" : "Q") + r.x1 + " " + r.y1 + " " + r.x + " " + r.y;
    else if (r.type === m.SMOOTH_QUAD_TO)
      e += (r.relative ? "t" : "T") + r.x + " " + r.y;
    else {
      if (r.type !== m.ARC)
        throw new Error('Unexpected command type "' + r.type + '" at index ' + t + ".");
      e += (r.relative ? "a" : "A") + r.rX + " " + r.rY + " " + r.xRot + " " + +r.lArcFlag + " " + +r.sweepFlag + " " + r.x + " " + r.y;
    }
  }
  return e;
}
function xi(a, e) {
  var t = a[0], r = a[1];
  return [t * Math.cos(e) - r * Math.sin(e), t * Math.sin(e) + r * Math.cos(e)];
}
function oe() {
  for (var a = [], e = 0; e < arguments.length; e++)
    a[e] = arguments[e];
  for (var t = 0; t < a.length; t++)
    if (typeof a[t] != "number")
      throw new Error("assertNumbers arguments[" + t + "] is not a number. " + typeof a[t] + " == typeof " + a[t]);
  return !0;
}
var Ee = Math.PI;
function za(a, e, t) {
  a.lArcFlag = a.lArcFlag === 0 ? 0 : 1, a.sweepFlag = a.sweepFlag === 0 ? 0 : 1;
  var r = a.rX, i = a.rY, n = a.x, o = a.y;
  r = Math.abs(a.rX), i = Math.abs(a.rY);
  var s = xi([(e - n) / 2, (t - o) / 2], -a.xRot / 180 * Ee), u = s[0], l = s[1], h = Math.pow(u, 2) / Math.pow(r, 2) + Math.pow(l, 2) / Math.pow(i, 2);
  1 < h && (r *= Math.sqrt(h), i *= Math.sqrt(h)), a.rX = r, a.rY = i;
  var f = Math.pow(r, 2) * Math.pow(l, 2) + Math.pow(i, 2) * Math.pow(u, 2), c = (a.lArcFlag !== a.sweepFlag ? 1 : -1) * Math.sqrt(Math.max(0, (Math.pow(r, 2) * Math.pow(i, 2) - f) / f)), v = r * l / i * c, d = -i * u / r * c, g = xi([v, d], a.xRot / 180 * Ee);
  a.cX = g[0] + (e + n) / 2, a.cY = g[1] + (t + o) / 2, a.phi1 = Math.atan2((l - d) / i, (u - v) / r), a.phi2 = Math.atan2((-l - d) / i, (-u - v) / r), a.sweepFlag === 0 && a.phi2 > a.phi1 && (a.phi2 -= 2 * Ee), a.sweepFlag === 1 && a.phi2 < a.phi1 && (a.phi2 += 2 * Ee), a.phi1 *= 180 / Ee, a.phi2 *= 180 / Ee;
}
function co(a, e, t) {
  oe(a, e, t);
  var r = a * a + e * e - t * t;
  if (0 > r)
    return [];
  if (r === 0)
    return [[a * t / (a * a + e * e), e * t / (a * a + e * e)]];
  var i = Math.sqrt(r);
  return [[(a * t + e * i) / (a * a + e * e), (e * t - a * i) / (a * a + e * e)], [(a * t - e * i) / (a * a + e * e), (e * t + a * i) / (a * a + e * e)]];
}
var j, ye = Math.PI / 180;
function go(a, e, t) {
  return (1 - t) * a + t * e;
}
function po(a, e, t, r) {
  return a + Math.cos(r / 180 * Ee) * e + Math.sin(r / 180 * Ee) * t;
}
function yo(a, e, t, r) {
  var i = 1e-6, n = e - a, o = t - e, s = 3 * n + 3 * (r - t) - 6 * o, u = 6 * (o - n), l = 3 * n;
  return Math.abs(s) < i ? [-l / u] : function(h, f, c) {
    c === void 0 && (c = 1e-6);
    var v = h * h / 4 - f;
    if (v < -c)
      return [];
    if (v <= c)
      return [-h / 2];
    var d = Math.sqrt(v);
    return [-h / 2 - d, -h / 2 + d];
  }(u / s, l / s, i);
}
function mo(a, e, t, r, i) {
  var n = 1 - i;
  return a * (n * n * n) + e * (3 * n * n * i) + t * (3 * n * i * i) + r * (i * i * i);
}
(function(a) {
  function e() {
    return i(function(s, u, l) {
      return s.relative && (s.x1 !== void 0 && (s.x1 += u), s.y1 !== void 0 && (s.y1 += l), s.x2 !== void 0 && (s.x2 += u), s.y2 !== void 0 && (s.y2 += l), s.x !== void 0 && (s.x += u), s.y !== void 0 && (s.y += l), s.relative = !1), s;
    });
  }
  function t() {
    var s = NaN, u = NaN, l = NaN, h = NaN;
    return i(function(f, c, v) {
      return f.type & m.SMOOTH_CURVE_TO && (f.type = m.CURVE_TO, s = isNaN(s) ? c : s, u = isNaN(u) ? v : u, f.x1 = f.relative ? c - s : 2 * c - s, f.y1 = f.relative ? v - u : 2 * v - u), f.type & m.CURVE_TO ? (s = f.relative ? c + f.x2 : f.x2, u = f.relative ? v + f.y2 : f.y2) : (s = NaN, u = NaN), f.type & m.SMOOTH_QUAD_TO && (f.type = m.QUAD_TO, l = isNaN(l) ? c : l, h = isNaN(h) ? v : h, f.x1 = f.relative ? c - l : 2 * c - l, f.y1 = f.relative ? v - h : 2 * v - h), f.type & m.QUAD_TO ? (l = f.relative ? c + f.x1 : f.x1, h = f.relative ? v + f.y1 : f.y1) : (l = NaN, h = NaN), f;
    });
  }
  function r() {
    var s = NaN, u = NaN;
    return i(function(l, h, f) {
      if (l.type & m.SMOOTH_QUAD_TO && (l.type = m.QUAD_TO, s = isNaN(s) ? h : s, u = isNaN(u) ? f : u, l.x1 = l.relative ? h - s : 2 * h - s, l.y1 = l.relative ? f - u : 2 * f - u), l.type & m.QUAD_TO) {
        s = l.relative ? h + l.x1 : l.x1, u = l.relative ? f + l.y1 : l.y1;
        var c = l.x1, v = l.y1;
        l.type = m.CURVE_TO, l.x1 = ((l.relative ? 0 : h) + 2 * c) / 3, l.y1 = ((l.relative ? 0 : f) + 2 * v) / 3, l.x2 = (l.x + 2 * c) / 3, l.y2 = (l.y + 2 * v) / 3;
      } else
        s = NaN, u = NaN;
      return l;
    });
  }
  function i(s) {
    var u = 0, l = 0, h = NaN, f = NaN;
    return function(c) {
      if (isNaN(h) && !(c.type & m.MOVE_TO))
        throw new Error("path must start with moveto");
      var v = s(c, u, l, h, f);
      return c.type & m.CLOSE_PATH && (u = h, l = f), c.x !== void 0 && (u = c.relative ? u + c.x : c.x), c.y !== void 0 && (l = c.relative ? l + c.y : c.y), c.type & m.MOVE_TO && (h = u, f = l), v;
    };
  }
  function n(s, u, l, h, f, c) {
    return oe(s, u, l, h, f, c), i(function(v, d, g, p) {
      var y = v.x1, x = v.x2, b = v.relative && !isNaN(p), T = v.x !== void 0 ? v.x : b ? 0 : d, $ = v.y !== void 0 ? v.y : b ? 0 : g;
      function E(ne) {
        return ne * ne;
      }
      v.type & m.HORIZ_LINE_TO && u !== 0 && (v.type = m.LINE_TO, v.y = v.relative ? 0 : g), v.type & m.VERT_LINE_TO && l !== 0 && (v.type = m.LINE_TO, v.x = v.relative ? 0 : d), v.x !== void 0 && (v.x = v.x * s + $ * l + (b ? 0 : f)), v.y !== void 0 && (v.y = T * u + v.y * h + (b ? 0 : c)), v.x1 !== void 0 && (v.x1 = v.x1 * s + v.y1 * l + (b ? 0 : f)), v.y1 !== void 0 && (v.y1 = y * u + v.y1 * h + (b ? 0 : c)), v.x2 !== void 0 && (v.x2 = v.x2 * s + v.y2 * l + (b ? 0 : f)), v.y2 !== void 0 && (v.y2 = x * u + v.y2 * h + (b ? 0 : c));
      var S = s * h - u * l;
      if (v.xRot !== void 0 && (s !== 1 || u !== 0 || l !== 0 || h !== 1))
        if (S === 0)
          delete v.rX, delete v.rY, delete v.xRot, delete v.lArcFlag, delete v.sweepFlag, v.type = m.LINE_TO;
        else {
          var C = v.xRot * Math.PI / 180, N = Math.sin(C), _ = Math.cos(C), B = 1 / E(v.rX), P = 1 / E(v.rY), X = E(_) * B + E(N) * P, W = 2 * N * _ * (B - P), z = E(N) * B + E(_) * P, q = X * h * h - W * u * h + z * u * u, H = W * (s * h + u * l) - 2 * (X * l * h + z * s * u), Q = X * l * l - W * s * l + z * s * s, R = (Math.atan2(H, q - Q) + Math.PI) % Math.PI / 2, M = Math.sin(R), Z = Math.cos(R);
          v.rX = Math.abs(S) / Math.sqrt(q * E(Z) + H * M * Z + Q * E(M)), v.rY = Math.abs(S) / Math.sqrt(q * E(M) - H * M * Z + Q * E(Z)), v.xRot = 180 * R / Math.PI;
        }
      return v.sweepFlag !== void 0 && 0 > S && (v.sweepFlag = +!v.sweepFlag), v;
    });
  }
  function o() {
    return function(s) {
      var u = {};
      for (var l in s)
        u[l] = s[l];
      return u;
    };
  }
  a.ROUND = function(s) {
    function u(l) {
      return Math.round(l * s) / s;
    }
    return s === void 0 && (s = 1e13), oe(s), function(l) {
      return l.x1 !== void 0 && (l.x1 = u(l.x1)), l.y1 !== void 0 && (l.y1 = u(l.y1)), l.x2 !== void 0 && (l.x2 = u(l.x2)), l.y2 !== void 0 && (l.y2 = u(l.y2)), l.x !== void 0 && (l.x = u(l.x)), l.y !== void 0 && (l.y = u(l.y)), l.rX !== void 0 && (l.rX = u(l.rX)), l.rY !== void 0 && (l.rY = u(l.rY)), l;
    };
  }, a.TO_ABS = e, a.TO_REL = function() {
    return i(function(s, u, l) {
      return s.relative || (s.x1 !== void 0 && (s.x1 -= u), s.y1 !== void 0 && (s.y1 -= l), s.x2 !== void 0 && (s.x2 -= u), s.y2 !== void 0 && (s.y2 -= l), s.x !== void 0 && (s.x -= u), s.y !== void 0 && (s.y -= l), s.relative = !0), s;
    });
  }, a.NORMALIZE_HVZ = function(s, u, l) {
    return s === void 0 && (s = !0), u === void 0 && (u = !0), l === void 0 && (l = !0), i(function(h, f, c, v, d) {
      if (isNaN(v) && !(h.type & m.MOVE_TO))
        throw new Error("path must start with moveto");
      return u && h.type & m.HORIZ_LINE_TO && (h.type = m.LINE_TO, h.y = h.relative ? 0 : c), l && h.type & m.VERT_LINE_TO && (h.type = m.LINE_TO, h.x = h.relative ? 0 : f), s && h.type & m.CLOSE_PATH && (h.type = m.LINE_TO, h.x = h.relative ? v - f : v, h.y = h.relative ? d - c : d), h.type & m.ARC && (h.rX === 0 || h.rY === 0) && (h.type = m.LINE_TO, delete h.rX, delete h.rY, delete h.xRot, delete h.lArcFlag, delete h.sweepFlag), h;
    });
  }, a.NORMALIZE_ST = t, a.QT_TO_C = r, a.INFO = i, a.SANITIZE = function(s) {
    s === void 0 && (s = 0), oe(s);
    var u = NaN, l = NaN, h = NaN, f = NaN;
    return i(function(c, v, d, g, p) {
      var y = Math.abs, x = !1, b = 0, T = 0;
      if (c.type & m.SMOOTH_CURVE_TO && (b = isNaN(u) ? 0 : v - u, T = isNaN(l) ? 0 : d - l), c.type & (m.CURVE_TO | m.SMOOTH_CURVE_TO) ? (u = c.relative ? v + c.x2 : c.x2, l = c.relative ? d + c.y2 : c.y2) : (u = NaN, l = NaN), c.type & m.SMOOTH_QUAD_TO ? (h = isNaN(h) ? v : 2 * v - h, f = isNaN(f) ? d : 2 * d - f) : c.type & m.QUAD_TO ? (h = c.relative ? v + c.x1 : c.x1, f = c.relative ? d + c.y1 : c.y2) : (h = NaN, f = NaN), c.type & m.LINE_COMMANDS || c.type & m.ARC && (c.rX === 0 || c.rY === 0 || !c.lArcFlag) || c.type & m.CURVE_TO || c.type & m.SMOOTH_CURVE_TO || c.type & m.QUAD_TO || c.type & m.SMOOTH_QUAD_TO) {
        var $ = c.x === void 0 ? 0 : c.relative ? c.x : c.x - v, E = c.y === void 0 ? 0 : c.relative ? c.y : c.y - d;
        b = isNaN(h) ? c.x1 === void 0 ? b : c.relative ? c.x : c.x1 - v : h - v, T = isNaN(f) ? c.y1 === void 0 ? T : c.relative ? c.y : c.y1 - d : f - d;
        var S = c.x2 === void 0 ? 0 : c.relative ? c.x : c.x2 - v, C = c.y2 === void 0 ? 0 : c.relative ? c.y : c.y2 - d;
        y($) <= s && y(E) <= s && y(b) <= s && y(T) <= s && y(S) <= s && y(C) <= s && (x = !0);
      }
      return c.type & m.CLOSE_PATH && y(v - g) <= s && y(d - p) <= s && (x = !0), x ? [] : c;
    });
  }, a.MATRIX = n, a.ROTATE = function(s, u, l) {
    u === void 0 && (u = 0), l === void 0 && (l = 0), oe(s, u, l);
    var h = Math.sin(s), f = Math.cos(s);
    return n(f, h, -h, f, u - u * f + l * h, l - u * h - l * f);
  }, a.TRANSLATE = function(s, u) {
    return u === void 0 && (u = 0), oe(s, u), n(1, 0, 0, 1, s, u);
  }, a.SCALE = function(s, u) {
    return u === void 0 && (u = s), oe(s, u), n(s, 0, 0, u, 0, 0);
  }, a.SKEW_X = function(s) {
    return oe(s), n(1, 0, Math.atan(s), 1, 0, 0);
  }, a.SKEW_Y = function(s) {
    return oe(s), n(1, Math.atan(s), 0, 1, 0, 0);
  }, a.X_AXIS_SYMMETRY = function(s) {
    return s === void 0 && (s = 0), oe(s), n(-1, 0, 0, 1, s, 0);
  }, a.Y_AXIS_SYMMETRY = function(s) {
    return s === void 0 && (s = 0), oe(s), n(1, 0, 0, -1, 0, s);
  }, a.A_TO_C = function() {
    return i(function(s, u, l) {
      return m.ARC === s.type ? function(h, f, c) {
        var v, d, g, p;
        h.cX || za(h, f, c);
        for (var y = Math.min(h.phi1, h.phi2), x = Math.max(h.phi1, h.phi2) - y, b = Math.ceil(x / 90), T = new Array(b), $ = f, E = c, S = 0; S < b; S++) {
          var C = go(h.phi1, h.phi2, S / b), N = go(h.phi1, h.phi2, (S + 1) / b), _ = N - C, B = 4 / 3 * Math.tan(_ * ye / 4), P = [Math.cos(C * ye) - B * Math.sin(C * ye), Math.sin(C * ye) + B * Math.cos(C * ye)], X = P[0], W = P[1], z = [Math.cos(N * ye), Math.sin(N * ye)], q = z[0], H = z[1], Q = [q + B * Math.sin(N * ye), H - B * Math.cos(N * ye)], R = Q[0], M = Q[1];
          T[S] = { relative: h.relative, type: m.CURVE_TO };
          var Z = function(ne, ve) {
            var Oe = xi([ne * h.rX, ve * h.rY], h.xRot), He = Oe[0], Dt = Oe[1];
            return [h.cX + He, h.cY + Dt];
          };
          v = Z(X, W), T[S].x1 = v[0], T[S].y1 = v[1], d = Z(R, M), T[S].x2 = d[0], T[S].y2 = d[1], g = Z(q, H), T[S].x = g[0], T[S].y = g[1], h.relative && (T[S].x1 -= $, T[S].y1 -= E, T[S].x2 -= $, T[S].y2 -= E, T[S].x -= $, T[S].y -= E), $ = (p = [T[S].x, T[S].y])[0], E = p[1];
        }
        return T;
      }(s, s.relative ? 0 : u, s.relative ? 0 : l) : s;
    });
  }, a.ANNOTATE_ARCS = function() {
    return i(function(s, u, l) {
      return s.relative && (u = 0, l = 0), m.ARC === s.type && za(s, u, l), s;
    });
  }, a.CLONE = o, a.CALCULATE_BOUNDS = function() {
    var s = function(c) {
      var v = {};
      for (var d in c)
        v[d] = c[d];
      return v;
    }, u = e(), l = r(), h = t(), f = i(function(c, v, d) {
      var g = h(l(u(s(c))));
      function p(M) {
        M > f.maxX && (f.maxX = M), M < f.minX && (f.minX = M);
      }
      function y(M) {
        M > f.maxY && (f.maxY = M), M < f.minY && (f.minY = M);
      }
      if (g.type & m.DRAWING_COMMANDS && (p(v), y(d)), g.type & m.HORIZ_LINE_TO && p(g.x), g.type & m.VERT_LINE_TO && y(g.y), g.type & m.LINE_TO && (p(g.x), y(g.y)), g.type & m.CURVE_TO) {
        p(g.x), y(g.y);
        for (var x = 0, b = yo(v, g.x1, g.x2, g.x); x < b.length; x++)
          0 < (R = b[x]) && 1 > R && p(mo(v, g.x1, g.x2, g.x, R));
        for (var T = 0, $ = yo(d, g.y1, g.y2, g.y); T < $.length; T++)
          0 < (R = $[T]) && 1 > R && y(mo(d, g.y1, g.y2, g.y, R));
      }
      if (g.type & m.ARC) {
        p(g.x), y(g.y), za(g, v, d);
        for (var E = g.xRot / 180 * Math.PI, S = Math.cos(E) * g.rX, C = Math.sin(E) * g.rX, N = -Math.sin(E) * g.rY, _ = Math.cos(E) * g.rY, B = g.phi1 < g.phi2 ? [g.phi1, g.phi2] : -180 > g.phi2 ? [g.phi2 + 360, g.phi1 + 360] : [g.phi2, g.phi1], P = B[0], X = B[1], W = function(M) {
          var Z = M[0], ne = M[1], ve = 180 * Math.atan2(ne, Z) / Math.PI;
          return ve < P ? ve + 360 : ve;
        }, z = 0, q = co(N, -S, 0).map(W); z < q.length; z++)
          (R = q[z]) > P && R < X && p(po(g.cX, S, N, R));
        for (var H = 0, Q = co(_, -C, 0).map(W); H < Q.length; H++) {
          var R;
          (R = Q[H]) > P && R < X && y(po(g.cY, C, _, R));
        }
      }
      return c;
    });
    return f.minX = 1 / 0, f.maxX = -1 / 0, f.minY = 1 / 0, f.maxY = -1 / 0, f;
  };
})(j || (j = {}));
var se, bl = function() {
  function a() {
  }
  return a.prototype.round = function(e) {
    return this.transform(j.ROUND(e));
  }, a.prototype.toAbs = function() {
    return this.transform(j.TO_ABS());
  }, a.prototype.toRel = function() {
    return this.transform(j.TO_REL());
  }, a.prototype.normalizeHVZ = function(e, t, r) {
    return this.transform(j.NORMALIZE_HVZ(e, t, r));
  }, a.prototype.normalizeST = function() {
    return this.transform(j.NORMALIZE_ST());
  }, a.prototype.qtToC = function() {
    return this.transform(j.QT_TO_C());
  }, a.prototype.aToC = function() {
    return this.transform(j.A_TO_C());
  }, a.prototype.sanitize = function(e) {
    return this.transform(j.SANITIZE(e));
  }, a.prototype.translate = function(e, t) {
    return this.transform(j.TRANSLATE(e, t));
  }, a.prototype.scale = function(e, t) {
    return this.transform(j.SCALE(e, t));
  }, a.prototype.rotate = function(e, t, r) {
    return this.transform(j.ROTATE(e, t, r));
  }, a.prototype.matrix = function(e, t, r, i, n, o) {
    return this.transform(j.MATRIX(e, t, r, i, n, o));
  }, a.prototype.skewX = function(e) {
    return this.transform(j.SKEW_X(e));
  }, a.prototype.skewY = function(e) {
    return this.transform(j.SKEW_Y(e));
  }, a.prototype.xSymmetry = function(e) {
    return this.transform(j.X_AXIS_SYMMETRY(e));
  }, a.prototype.ySymmetry = function(e) {
    return this.transform(j.Y_AXIS_SYMMETRY(e));
  }, a.prototype.annotateArcs = function() {
    return this.transform(j.ANNOTATE_ARCS());
  }, a;
}(), kb = function(a) {
  return a === " " || a === "	" || a === "\r" || a === `
`;
}, bo = function(a) {
  return "0".charCodeAt(0) <= a.charCodeAt(0) && a.charCodeAt(0) <= "9".charCodeAt(0);
}, Bb = function(a) {
  function e() {
    var t = a.call(this) || this;
    return t.curNumber = "", t.curCommandType = -1, t.curCommandRelative = !1, t.canParseCommandOrComma = !0, t.curNumberHasExp = !1, t.curNumberHasExpDigits = !1, t.curNumberHasDecimal = !1, t.curArgs = [], t;
  }
  return ml(e, a), e.prototype.finish = function(t) {
    if (t === void 0 && (t = []), this.parse(" ", t), this.curArgs.length !== 0 || !this.canParseCommandOrComma)
      throw new SyntaxError("Unterminated command at the path end.");
    return t;
  }, e.prototype.parse = function(t, r) {
    var i = this;
    r === void 0 && (r = []);
    for (var n = function(f) {
      r.push(f), i.curArgs.length = 0, i.canParseCommandOrComma = !0;
    }, o = 0; o < t.length; o++) {
      var s = t[o], u = !(this.curCommandType !== m.ARC || this.curArgs.length !== 3 && this.curArgs.length !== 4 || this.curNumber.length !== 1 || this.curNumber !== "0" && this.curNumber !== "1"), l = bo(s) && (this.curNumber === "0" && s === "0" || u);
      if (!bo(s) || l)
        if (s !== "e" && s !== "E")
          if (s !== "-" && s !== "+" || !this.curNumberHasExp || this.curNumberHasExpDigits)
            if (s !== "." || this.curNumberHasExp || this.curNumberHasDecimal || u) {
              if (this.curNumber && this.curCommandType !== -1) {
                var h = Number(this.curNumber);
                if (isNaN(h))
                  throw new SyntaxError("Invalid number ending at " + o);
                if (this.curCommandType === m.ARC) {
                  if (this.curArgs.length === 0 || this.curArgs.length === 1) {
                    if (0 > h)
                      throw new SyntaxError('Expected positive number, got "' + h + '" at index "' + o + '"');
                  } else if ((this.curArgs.length === 3 || this.curArgs.length === 4) && this.curNumber !== "0" && this.curNumber !== "1")
                    throw new SyntaxError('Expected a flag, got "' + this.curNumber + '" at index "' + o + '"');
                }
                this.curArgs.push(h), this.curArgs.length === Fb[this.curCommandType] && (m.HORIZ_LINE_TO === this.curCommandType ? n({ type: m.HORIZ_LINE_TO, relative: this.curCommandRelative, x: h }) : m.VERT_LINE_TO === this.curCommandType ? n({ type: m.VERT_LINE_TO, relative: this.curCommandRelative, y: h }) : this.curCommandType === m.MOVE_TO || this.curCommandType === m.LINE_TO || this.curCommandType === m.SMOOTH_QUAD_TO ? (n({ type: this.curCommandType, relative: this.curCommandRelative, x: this.curArgs[0], y: this.curArgs[1] }), m.MOVE_TO === this.curCommandType && (this.curCommandType = m.LINE_TO)) : this.curCommandType === m.CURVE_TO ? n({ type: m.CURVE_TO, relative: this.curCommandRelative, x1: this.curArgs[0], y1: this.curArgs[1], x2: this.curArgs[2], y2: this.curArgs[3], x: this.curArgs[4], y: this.curArgs[5] }) : this.curCommandType === m.SMOOTH_CURVE_TO ? n({ type: m.SMOOTH_CURVE_TO, relative: this.curCommandRelative, x2: this.curArgs[0], y2: this.curArgs[1], x: this.curArgs[2], y: this.curArgs[3] }) : this.curCommandType === m.QUAD_TO ? n({ type: m.QUAD_TO, relative: this.curCommandRelative, x1: this.curArgs[0], y1: this.curArgs[1], x: this.curArgs[2], y: this.curArgs[3] }) : this.curCommandType === m.ARC && n({ type: m.ARC, relative: this.curCommandRelative, rX: this.curArgs[0], rY: this.curArgs[1], xRot: this.curArgs[2], lArcFlag: this.curArgs[3], sweepFlag: this.curArgs[4], x: this.curArgs[5], y: this.curArgs[6] })), this.curNumber = "", this.curNumberHasExpDigits = !1, this.curNumberHasExp = !1, this.curNumberHasDecimal = !1, this.canParseCommandOrComma = !0;
              }
              if (!kb(s))
                if (s === "," && this.canParseCommandOrComma)
                  this.canParseCommandOrComma = !1;
                else if (s !== "+" && s !== "-" && s !== ".")
                  if (l)
                    this.curNumber = s, this.curNumberHasDecimal = !1;
                  else {
                    if (this.curArgs.length !== 0)
                      throw new SyntaxError("Unterminated command at index " + o + ".");
                    if (!this.canParseCommandOrComma)
                      throw new SyntaxError('Unexpected character "' + s + '" at index ' + o + ". Command cannot follow comma");
                    if (this.canParseCommandOrComma = !1, s !== "z" && s !== "Z")
                      if (s === "h" || s === "H")
                        this.curCommandType = m.HORIZ_LINE_TO, this.curCommandRelative = s === "h";
                      else if (s === "v" || s === "V")
                        this.curCommandType = m.VERT_LINE_TO, this.curCommandRelative = s === "v";
                      else if (s === "m" || s === "M")
                        this.curCommandType = m.MOVE_TO, this.curCommandRelative = s === "m";
                      else if (s === "l" || s === "L")
                        this.curCommandType = m.LINE_TO, this.curCommandRelative = s === "l";
                      else if (s === "c" || s === "C")
                        this.curCommandType = m.CURVE_TO, this.curCommandRelative = s === "c";
                      else if (s === "s" || s === "S")
                        this.curCommandType = m.SMOOTH_CURVE_TO, this.curCommandRelative = s === "s";
                      else if (s === "q" || s === "Q")
                        this.curCommandType = m.QUAD_TO, this.curCommandRelative = s === "q";
                      else if (s === "t" || s === "T")
                        this.curCommandType = m.SMOOTH_QUAD_TO, this.curCommandRelative = s === "t";
                      else {
                        if (s !== "a" && s !== "A")
                          throw new SyntaxError('Unexpected character "' + s + '" at index ' + o + ".");
                        this.curCommandType = m.ARC, this.curCommandRelative = s === "a";
                      }
                    else
                      r.push({ type: m.CLOSE_PATH }), this.canParseCommandOrComma = !0, this.curCommandType = -1;
                  }
                else
                  this.curNumber = s, this.curNumberHasDecimal = s === ".";
            } else
              this.curNumber += s, this.curNumberHasDecimal = !0;
          else
            this.curNumber += s;
        else
          this.curNumber += s, this.curNumberHasExp = !0;
      else
        this.curNumber += s, this.curNumberHasExpDigits = this.curNumberHasExp;
    }
    return r;
  }, e.prototype.transform = function(t) {
    return Object.create(this, { parse: { value: function(r, i) {
      i === void 0 && (i = []);
      for (var n = 0, o = Object.getPrototypeOf(this).parse.call(this, r); n < o.length; n++) {
        var s = o[n], u = t(s);
        Array.isArray(u) ? i.push.apply(i, u) : i.push(u);
      }
      return i;
    } } });
  }, e;
}(bl), m = function(a) {
  function e(t) {
    var r = a.call(this) || this;
    return r.commands = typeof t == "string" ? e.parse(t) : t, r;
  }
  return ml(e, a), e.prototype.encode = function() {
    return e.encode(this.commands);
  }, e.prototype.getBounds = function() {
    var t = j.CALCULATE_BOUNDS();
    return this.transform(t), t;
  }, e.prototype.transform = function(t) {
    for (var r = [], i = 0, n = this.commands; i < n.length; i++) {
      var o = t(n[i]);
      Array.isArray(o) ? r.push.apply(r, o) : r.push(o);
    }
    return this.commands = r, this;
  }, e.encode = function(t) {
    return Lb(t);
  }, e.parse = function(t) {
    var r = new Bb(), i = [];
    return r.parse(t, i), r.finish(i), i;
  }, e.CLOSE_PATH = 1, e.MOVE_TO = 2, e.HORIZ_LINE_TO = 4, e.VERT_LINE_TO = 8, e.LINE_TO = 16, e.CURVE_TO = 32, e.SMOOTH_CURVE_TO = 64, e.QUAD_TO = 128, e.SMOOTH_QUAD_TO = 256, e.ARC = 512, e.LINE_COMMANDS = e.LINE_TO | e.HORIZ_LINE_TO | e.VERT_LINE_TO, e.DRAWING_COMMANDS = e.HORIZ_LINE_TO | e.VERT_LINE_TO | e.LINE_TO | e.CURVE_TO | e.SMOOTH_CURVE_TO | e.QUAD_TO | e.SMOOTH_QUAD_TO | e.ARC, e;
}(bl), Fb = ((se = {})[m.MOVE_TO] = 2, se[m.LINE_TO] = 2, se[m.HORIZ_LINE_TO] = 1, se[m.VERT_LINE_TO] = 1, se[m.CLOSE_PATH] = 0, se[m.QUAD_TO] = 4, se[m.SMOOTH_QUAD_TO] = 2, se[m.CURVE_TO] = 6, se[m.SMOOTH_CURVE_TO] = 4, se[m.ARC] = 7, se), jb = Y, Ub = le, zb = Tr, Gb = Hu, xo = RegExp.prototype, Hb = function(a) {
  var e = a.flags;
  return e === void 0 && !("flags" in xo) && !Ub(a, "flags") && zb(xo, a) ? jb(Gb, a) : e;
}, Yb = wr.PROPER, Xb = ze, Wb = K, To = pe, qb = L, Qb = Hb, sn = "toString", Kb = RegExp.prototype, xl = Kb[sn], Zb = qb(function() {
  return xl.call({ source: "a", flags: "b" }) != "/a/b";
}), Jb = Yb && xl.name != sn;
(Zb || Jb) && Xb(RegExp.prototype, sn, function() {
  var e = Wb(this), t = To(e.source), r = To(Qb(e));
  return "/" + t + "/" + r;
}, { unsafe: !0 });
function fr(a) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? fr = function(e) {
    return typeof e;
  } : fr = function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, fr(a);
}
function e1(a, e) {
  if (!(a instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
var t1 = [512, 512, 456, 512, 328, 456, 335, 512, 405, 328, 271, 456, 388, 335, 292, 512, 454, 405, 364, 328, 298, 271, 496, 456, 420, 388, 360, 335, 312, 292, 273, 512, 482, 454, 428, 405, 383, 364, 345, 328, 312, 298, 284, 271, 259, 496, 475, 456, 437, 420, 404, 388, 374, 360, 347, 335, 323, 312, 302, 292, 282, 273, 265, 512, 497, 482, 468, 454, 441, 428, 417, 405, 394, 383, 373, 364, 354, 345, 337, 328, 320, 312, 305, 298, 291, 284, 278, 271, 265, 259, 507, 496, 485, 475, 465, 456, 446, 437, 428, 420, 412, 404, 396, 388, 381, 374, 367, 360, 354, 347, 341, 335, 329, 323, 318, 312, 307, 302, 297, 292, 287, 282, 278, 273, 269, 265, 261, 512, 505, 497, 489, 482, 475, 468, 461, 454, 447, 441, 435, 428, 422, 417, 411, 405, 399, 394, 389, 383, 378, 373, 368, 364, 359, 354, 350, 345, 341, 337, 332, 328, 324, 320, 316, 312, 309, 305, 301, 298, 294, 291, 287, 284, 281, 278, 274, 271, 268, 265, 262, 259, 257, 507, 501, 496, 491, 485, 480, 475, 470, 465, 460, 456, 451, 446, 442, 437, 433, 428, 424, 420, 416, 412, 408, 404, 400, 396, 392, 388, 385, 381, 377, 374, 370, 367, 363, 360, 357, 354, 350, 347, 344, 341, 338, 335, 332, 329, 326, 323, 320, 318, 315, 312, 310, 307, 304, 302, 299, 297, 294, 292, 289, 287, 285, 282, 280, 278, 275, 273, 271, 269, 267, 265, 263, 261, 259], r1 = [9, 11, 12, 13, 13, 14, 14, 15, 15, 15, 15, 16, 16, 16, 16, 17, 17, 17, 17, 17, 17, 17, 18, 18, 18, 18, 18, 18, 18, 18, 18, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24];
function a1(a, e, t, r, i) {
  if (typeof a == "string" && (a = document.getElementById(a)), !a || fr(a) !== "object" || !("getContext" in a))
    throw new TypeError("Expecting canvas with `getContext` method in processCanvasRGB(A) calls!");
  var n = a.getContext("2d");
  try {
    return n.getImageData(e, t, r, i);
  } catch (o) {
    throw new Error("unable to access image data: " + o);
  }
}
function i1(a, e, t, r, i, n) {
  if (!(isNaN(n) || n < 1)) {
    n |= 0;
    var o = a1(a, e, t, r, i);
    o = n1(o, e, t, r, i, n), a.getContext("2d").putImageData(o, e, t);
  }
}
function n1(a, e, t, r, i, n) {
  for (var o = a.data, s = 2 * n + 1, u = r - 1, l = i - 1, h = n + 1, f = h * (h + 1) / 2, c = new So(), v = c, d, g = 1; g < s; g++)
    v = v.next = new So(), g === h && (d = v);
  v.next = c;
  for (var p = null, y = null, x = 0, b = 0, T = t1[n], $ = r1[n], E = 0; E < i; E++) {
    v = c;
    for (var S = o[b], C = o[b + 1], N = o[b + 2], _ = o[b + 3], B = 0; B < h; B++)
      v.r = S, v.g = C, v.b = N, v.a = _, v = v.next;
    for (var P = 0, X = 0, W = 0, z = 0, q = h * S, H = h * C, Q = h * N, R = h * _, M = f * S, Z = f * C, ne = f * N, ve = f * _, Oe = 1; Oe < h; Oe++) {
      var He = b + ((u < Oe ? u : Oe) << 2), Dt = o[He], ln = o[He + 1], hn = o[He + 2], vn = o[He + 3], Vt = h - Oe;
      M += (v.r = Dt) * Vt, Z += (v.g = ln) * Vt, ne += (v.b = hn) * Vt, ve += (v.a = vn) * Vt, P += Dt, X += ln, W += hn, z += vn, v = v.next;
    }
    p = c, y = d;
    for (var Fr = 0; Fr < r; Fr++) {
      var jr = ve * T >> $;
      if (o[b + 3] = jr, jr !== 0) {
        var Ur = 255 / jr;
        o[b] = (M * T >> $) * Ur, o[b + 1] = (Z * T >> $) * Ur, o[b + 2] = (ne * T >> $) * Ur;
      } else
        o[b] = o[b + 1] = o[b + 2] = 0;
      M -= q, Z -= H, ne -= Q, ve -= R, q -= p.r, H -= p.g, Q -= p.b, R -= p.a;
      var Ae = Fr + n + 1;
      Ae = x + (Ae < u ? Ae : u) << 2, P += p.r = o[Ae], X += p.g = o[Ae + 1], W += p.b = o[Ae + 2], z += p.a = o[Ae + 3], M += P, Z += X, ne += W, ve += z, p = p.next;
      var Lt = y, fn = Lt.r, cn = Lt.g, gn = Lt.b, dn = Lt.a;
      q += fn, H += cn, Q += gn, R += dn, P -= fn, X -= cn, W -= gn, z -= dn, y = y.next, b += 4;
    }
    x += r;
  }
  for (var Ye = 0; Ye < r; Ye++) {
    b = Ye << 2;
    var Pe = o[b], Re = o[b + 1], Ie = o[b + 2], te = o[b + 3], zr = h * Pe, Gr = h * Re, Hr = h * Ie, Yr = h * te, kt = f * Pe, Bt = f * Re, Ft = f * Ie, jt = f * te;
    v = c;
    for (var pn = 0; pn < h; pn++)
      v.r = Pe, v.g = Re, v.b = Ie, v.a = te, v = v.next;
    for (var yn = r, Xr = 0, Wr = 0, qr = 0, Qr = 0, Ut = 1; Ut <= n; Ut++) {
      b = yn + Ye << 2;
      var zt = h - Ut;
      kt += (v.r = Pe = o[b]) * zt, Bt += (v.g = Re = o[b + 1]) * zt, Ft += (v.b = Ie = o[b + 2]) * zt, jt += (v.a = te = o[b + 3]) * zt, Qr += Pe, Xr += Re, Wr += Ie, qr += te, v = v.next, Ut < l && (yn += r);
    }
    b = Ye, p = c, y = d;
    for (var Kr = 0; Kr < i; Kr++) {
      var re = b << 2;
      o[re + 3] = te = jt * T >> $, te > 0 ? (te = 255 / te, o[re] = (kt * T >> $) * te, o[re + 1] = (Bt * T >> $) * te, o[re + 2] = (Ft * T >> $) * te) : o[re] = o[re + 1] = o[re + 2] = 0, kt -= zr, Bt -= Gr, Ft -= Hr, jt -= Yr, zr -= p.r, Gr -= p.g, Hr -= p.b, Yr -= p.a, re = Ye + ((re = Kr + h) < l ? re : l) * r << 2, kt += Qr += p.r = o[re], Bt += Xr += p.g = o[re + 1], Ft += Wr += p.b = o[re + 2], jt += qr += p.a = o[re + 3], p = p.next, zr += Pe = y.r, Gr += Re = y.g, Hr += Ie = y.b, Yr += te = y.a, Qr -= Pe, Xr -= Re, Wr -= Ie, qr -= te, y = y.next, b += r;
    }
  }
  return a;
}
var So = (
  /**
   * Set properties.
   */
  function a() {
    e1(this, a), this.r = 0, this.g = 0, this.b = 0, this.a = 0, this.next = null;
  }
);
function s1() {
  var {
    DOMParser: a
  } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, e = {
    window: null,
    ignoreAnimation: !0,
    ignoreMouse: !0,
    DOMParser: a,
    createCanvas(t, r) {
      return new OffscreenCanvas(t, r);
    },
    createImage(t) {
      return xe(function* () {
        var r = yield fetch(t), i = yield r.blob(), n = yield createImageBitmap(i);
        return n;
      })();
    }
  };
  return (typeof DOMParser < "u" || typeof a > "u") && Reflect.deleteProperty(e, "DOMParser"), e;
}
function o1(a) {
  var {
    DOMParser: e,
    canvas: t,
    fetch: r
  } = a;
  return {
    window: null,
    ignoreAnimation: !0,
    ignoreMouse: !0,
    DOMParser: e,
    fetch: r,
    createCanvas: t.createCanvas,
    createImage: t.loadImage
  };
}
var x2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  offscreen: s1,
  node: o1
});
function vt(a) {
  return a.replace(/(?!\u3000)\s+/gm, " ");
}
function u1(a) {
  return a.replace(/^[\n \t]+/, "");
}
function l1(a) {
  return a.replace(/[\n \t]+$/, "");
}
function ie(a) {
  var e = (a || "").match(/-?(\d+(?:\.\d*(?:[eE][+-]?\d+)?)?|\.\d+)(?=\D|$)/gm) || [];
  return e.map(parseFloat);
}
var h1 = /^[A-Z-]+$/;
function v1(a) {
  return h1.test(a) ? a.toLowerCase() : a;
}
function Tl(a) {
  var e = /url\(('([^']+)'|"([^"]+)"|([^'")]+))\)/.exec(a) || [];
  return e[2] || e[3] || e[4];
}
function f1(a) {
  if (!a.startsWith("rgb"))
    return a;
  var e = 3, t = a.replace(/\d+(\.\d+)?/g, (r, i) => e-- && i ? String(Math.round(parseFloat(r))) : r);
  return t;
}
var c1 = /(\[[^\]]+\])/g, g1 = /(#[^\s+>~.[:]+)/g, d1 = /(\.[^\s+>~.[:]+)/g, p1 = /(::[^\s+>~.[:]+|:first-line|:first-letter|:before|:after)/gi, y1 = /(:[\w-]+\([^)]*\))/gi, m1 = /(:[^\s+>~.[:]+)/g, b1 = /([^\s+>~.[:]+)/g;
function _e(a, e) {
  var t = e.exec(a);
  return t ? [a.replace(e, " "), t.length] : [a, 0];
}
function x1(a) {
  var e = [0, 0, 0], t = a.replace(/:not\(([^)]*)\)/g, "     $1 ").replace(/{[\s\S]*/gm, " "), r = 0;
  return [t, r] = _e(t, c1), e[1] += r, [t, r] = _e(t, g1), e[0] += r, [t, r] = _e(t, d1), e[1] += r, [t, r] = _e(t, p1), e[2] += r, [t, r] = _e(t, y1), e[1] += r, [t, r] = _e(t, m1), e[1] += r, t = t.replace(/[*\s+>~]/g, " ").replace(/[#.]/g, " "), [t, r] = _e(t, b1), e[2] += r, e.join("");
}
var it = 1e-8;
function Oo(a) {
  return Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2));
}
function Ti(a, e) {
  return (a[0] * e[0] + a[1] * e[1]) / (Oo(a) * Oo(e));
}
function Eo(a, e) {
  return (a[0] * e[1] < a[1] * e[0] ? -1 : 1) * Math.acos(Ti(a, e));
}
function $o(a) {
  return a * a * a;
}
function wo(a) {
  return 3 * a * a * (1 - a);
}
function Co(a) {
  return 3 * a * (1 - a) * (1 - a);
}
function Ao(a) {
  return (1 - a) * (1 - a) * (1 - a);
}
function Po(a) {
  return a * a;
}
function Ro(a) {
  return 2 * a * (1 - a);
}
function Io(a) {
  return (1 - a) * (1 - a);
}
class O {
  constructor(e, t, r) {
    this.document = e, this.name = t, this.value = r, this.isNormalizedColor = !1;
  }
  static empty(e) {
    return new O(e, "EMPTY", "");
  }
  split() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : " ", {
      document: t,
      name: r
    } = this;
    return vt(this.getString()).trim().split(e).map((i) => new O(t, r, i));
  }
  hasValue(e) {
    var {
      value: t
    } = this;
    return t !== null && t !== "" && (e || t !== 0) && typeof t < "u";
  }
  isString(e) {
    var {
      value: t
    } = this, r = typeof t == "string";
    return !r || !e ? r : e.test(t);
  }
  isUrlDefinition() {
    return this.isString(/^url\(/);
  }
  isPixels() {
    if (!this.hasValue())
      return !1;
    var e = this.getString();
    switch (!0) {
      case e.endsWith("px"):
      case /^[0-9]+$/.test(e):
        return !0;
      default:
        return !1;
    }
  }
  setValue(e) {
    return this.value = e, this;
  }
  getValue(e) {
    return typeof e > "u" || this.hasValue() ? this.value : e;
  }
  getNumber(e) {
    if (!this.hasValue())
      return typeof e > "u" ? 0 : parseFloat(e);
    var {
      value: t
    } = this, r = parseFloat(t);
    return this.isString(/%$/) && (r /= 100), r;
  }
  getString(e) {
    return typeof e > "u" || this.hasValue() ? typeof this.value > "u" ? "" : String(this.value) : String(e);
  }
  getColor(e) {
    var t = this.getString(e);
    return this.isNormalizedColor || (this.isNormalizedColor = !0, t = f1(t), this.value = t), t;
  }
  getDpi() {
    return 96;
  }
  getRem() {
    return this.document.rootEmSize;
  }
  getEm() {
    return this.document.emSize;
  }
  getUnits() {
    return this.getString().replace(/[0-9.-]/g, "");
  }
  getPixels(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    if (!this.hasValue())
      return 0;
    var [r, i] = typeof e == "boolean" ? [void 0, e] : [e], {
      viewPort: n
    } = this.document.screen;
    switch (!0) {
      case this.isString(/vmin$/):
        return this.getNumber() / 100 * Math.min(n.computeSize("x"), n.computeSize("y"));
      case this.isString(/vmax$/):
        return this.getNumber() / 100 * Math.max(n.computeSize("x"), n.computeSize("y"));
      case this.isString(/vw$/):
        return this.getNumber() / 100 * n.computeSize("x");
      case this.isString(/vh$/):
        return this.getNumber() / 100 * n.computeSize("y");
      case this.isString(/rem$/):
        return this.getNumber() * this.getRem();
      case this.isString(/em$/):
        return this.getNumber() * this.getEm();
      case this.isString(/ex$/):
        return this.getNumber() * this.getEm() / 2;
      case this.isString(/px$/):
        return this.getNumber();
      case this.isString(/pt$/):
        return this.getNumber() * this.getDpi() * (1 / 72);
      case this.isString(/pc$/):
        return this.getNumber() * 15;
      case this.isString(/cm$/):
        return this.getNumber() * this.getDpi() / 2.54;
      case this.isString(/mm$/):
        return this.getNumber() * this.getDpi() / 25.4;
      case this.isString(/in$/):
        return this.getNumber() * this.getDpi();
      case (this.isString(/%$/) && i):
        return this.getNumber() * this.getEm();
      case this.isString(/%$/):
        return this.getNumber() * n.computeSize(r);
      default: {
        var o = this.getNumber();
        return t && o < 1 ? o * n.computeSize(r) : o;
      }
    }
  }
  getMilliseconds() {
    return this.hasValue() ? this.isString(/ms$/) ? this.getNumber() : this.getNumber() * 1e3 : 0;
  }
  getRadians() {
    if (!this.hasValue())
      return 0;
    switch (!0) {
      case this.isString(/deg$/):
        return this.getNumber() * (Math.PI / 180);
      case this.isString(/grad$/):
        return this.getNumber() * (Math.PI / 200);
      case this.isString(/rad$/):
        return this.getNumber();
      default:
        return this.getNumber() * (Math.PI / 180);
    }
  }
  getDefinition() {
    var e = this.getString(), t = /#([^)'"]+)/.exec(e);
    return t && (t = t[1]), t || (t = e), this.document.definitions[t];
  }
  getFillStyleDefinition(e, t) {
    var r = this.getDefinition();
    if (!r)
      return null;
    if (typeof r.createGradient == "function")
      return r.createGradient(this.document.ctx, e, t);
    if (typeof r.createPattern == "function") {
      if (r.getHrefAttribute().hasValue()) {
        var i = r.getAttribute("patternTransform");
        r = r.getHrefAttribute().getDefinition(), i.hasValue() && r.getAttribute("patternTransform", !0).setValue(i.value);
      }
      return r.createPattern(this.document.ctx, e, t);
    }
    return null;
  }
  getTextBaseline() {
    return this.hasValue() ? O.textBaselineMapping[this.getString()] : null;
  }
  addOpacity(e) {
    for (var t = this.getColor(), r = t.length, i = 0, n = 0; n < r && (t[n] === "," && i++, i !== 3); n++)
      ;
    if (e.hasValue() && this.isString() && i !== 3) {
      var o = new mi(t);
      o.ok && (o.alpha = e.getNumber(), t = o.toRGBA());
    }
    return new O(this.document, this.name, t);
  }
}
O.textBaselineMapping = {
  baseline: "alphabetic",
  "before-edge": "top",
  "text-before-edge": "top",
  middle: "middle",
  central: "middle",
  "after-edge": "bottom",
  "text-after-edge": "bottom",
  ideographic: "ideographic",
  alphabetic: "alphabetic",
  hanging: "hanging",
  mathematical: "alphabetic"
};
class T1 {
  constructor() {
    this.viewPorts = [];
  }
  clear() {
    this.viewPorts = [];
  }
  setCurrent(e, t) {
    this.viewPorts.push({
      width: e,
      height: t
    });
  }
  removeCurrent() {
    this.viewPorts.pop();
  }
  getCurrent() {
    var {
      viewPorts: e
    } = this;
    return e[e.length - 1];
  }
  get width() {
    return this.getCurrent().width;
  }
  get height() {
    return this.getCurrent().height;
  }
  computeSize(e) {
    return typeof e == "number" ? e : e === "x" ? this.width : e === "y" ? this.height : Math.sqrt(Math.pow(this.width, 2) + Math.pow(this.height, 2)) / Math.sqrt(2);
  }
}
class V {
  constructor(e, t) {
    this.x = e, this.y = t;
  }
  static parse(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, [r = t, i = t] = ie(e);
    return new V(r, i);
  }
  static parseScale(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1, [r = t, i = r] = ie(e);
    return new V(r, i);
  }
  static parsePath(e) {
    for (var t = ie(e), r = t.length, i = [], n = 0; n < r; n += 2)
      i.push(new V(t[n], t[n + 1]));
    return i;
  }
  angleTo(e) {
    return Math.atan2(e.y - this.y, e.x - this.x);
  }
  applyTransform(e) {
    var {
      x: t,
      y: r
    } = this, i = t * e[0] + r * e[2] + e[4], n = t * e[1] + r * e[3] + e[5];
    this.x = i, this.y = n;
  }
}
class S1 {
  constructor(e) {
    this.screen = e, this.working = !1, this.events = [], this.eventElements = [], this.onClick = this.onClick.bind(this), this.onMouseMove = this.onMouseMove.bind(this);
  }
  isWorking() {
    return this.working;
  }
  start() {
    if (!this.working) {
      var {
        screen: e,
        onClick: t,
        onMouseMove: r
      } = this, i = e.ctx.canvas;
      i.onclick = t, i.onmousemove = r, this.working = !0;
    }
  }
  stop() {
    if (this.working) {
      var e = this.screen.ctx.canvas;
      this.working = !1, e.onclick = null, e.onmousemove = null;
    }
  }
  hasEvents() {
    return this.working && this.events.length > 0;
  }
  runEvents() {
    if (this.working) {
      var {
        screen: e,
        events: t,
        eventElements: r
      } = this, {
        style: i
      } = e.ctx.canvas;
      i && (i.cursor = ""), t.forEach((n, o) => {
        for (var {
          run: s
        } = n, u = r[o]; u; )
          s(u), u = u.parent;
      }), this.events = [], this.eventElements = [];
    }
  }
  checkPath(e, t) {
    if (!(!this.working || !t)) {
      var {
        events: r,
        eventElements: i
      } = this;
      r.forEach((n, o) => {
        var {
          x: s,
          y: u
        } = n;
        !i[o] && t.isPointInPath && t.isPointInPath(s, u) && (i[o] = e);
      });
    }
  }
  checkBoundingBox(e, t) {
    if (!(!this.working || !t)) {
      var {
        events: r,
        eventElements: i
      } = this;
      r.forEach((n, o) => {
        var {
          x: s,
          y: u
        } = n;
        !i[o] && t.isPointInBox(s, u) && (i[o] = e);
      });
    }
  }
  mapXY(e, t) {
    for (var {
      window: r,
      ctx: i
    } = this.screen, n = new V(e, t), o = i.canvas; o; )
      n.x -= o.offsetLeft, n.y -= o.offsetTop, o = o.offsetParent;
    return r.scrollX && (n.x += r.scrollX), r.scrollY && (n.y += r.scrollY), n;
  }
  onClick(e) {
    var {
      x: t,
      y: r
    } = this.mapXY(e.clientX, e.clientY);
    this.events.push({
      type: "onclick",
      x: t,
      y: r,
      run(i) {
        i.onClick && i.onClick();
      }
    });
  }
  onMouseMove(e) {
    var {
      x: t,
      y: r
    } = this.mapXY(e.clientX, e.clientY);
    this.events.push({
      type: "onmousemove",
      x: t,
      y: r,
      run(i) {
        i.onMouseMove && i.onMouseMove();
      }
    });
  }
}
var Sl = typeof window < "u" ? window : null, Ol = typeof fetch < "u" ? fetch.bind(void 0) : null;
class Vr {
  constructor(e) {
    var {
      fetch: t = Ol,
      window: r = Sl
    } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.ctx = e, this.FRAMERATE = 30, this.MAX_VIRTUAL_PIXELS = 3e4, this.CLIENT_WIDTH = 800, this.CLIENT_HEIGHT = 600, this.viewPort = new T1(), this.mouse = new S1(this), this.animations = [], this.waits = [], this.frameDuration = 0, this.isReadyLock = !1, this.isFirstRender = !0, this.intervalId = null, this.window = r, this.fetch = t;
  }
  wait(e) {
    this.waits.push(e);
  }
  ready() {
    return this.readyPromise ? this.readyPromise : Promise.resolve();
  }
  isReady() {
    if (this.isReadyLock)
      return !0;
    var e = this.waits.every((t) => t());
    return e && (this.waits = [], this.resolveReady && this.resolveReady()), this.isReadyLock = e, e;
  }
  setDefaults(e) {
    e.strokeStyle = "rgba(0,0,0,0)", e.lineCap = "butt", e.lineJoin = "miter", e.miterLimit = 4;
  }
  setViewBox(e) {
    var {
      document: t,
      ctx: r,
      aspectRatio: i,
      width: n,
      desiredWidth: o,
      height: s,
      desiredHeight: u,
      minX: l = 0,
      minY: h = 0,
      refX: f,
      refY: c,
      clip: v = !1,
      clipX: d = 0,
      clipY: g = 0
    } = e, p = vt(i).replace(/^defer\s/, ""), [y, x] = p.split(" "), b = y || "xMidYMid", T = x || "meet", $ = n / o, E = s / u, S = Math.min($, E), C = Math.max($, E), N = o, _ = u;
    T === "meet" && (N *= S, _ *= S), T === "slice" && (N *= C, _ *= C);
    var B = new O(t, "refX", f), P = new O(t, "refY", c), X = B.hasValue() && P.hasValue();
    if (X && r.translate(-S * B.getPixels("x"), -S * P.getPixels("y")), v) {
      var W = S * d, z = S * g;
      r.beginPath(), r.moveTo(W, z), r.lineTo(n, z), r.lineTo(n, s), r.lineTo(W, s), r.closePath(), r.clip();
    }
    if (!X) {
      var q = T === "meet" && S === E, H = T === "slice" && C === E, Q = T === "meet" && S === $, R = T === "slice" && C === $;
      b.startsWith("xMid") && (q || H) && r.translate(n / 2 - N / 2, 0), b.endsWith("YMid") && (Q || R) && r.translate(0, s / 2 - _ / 2), b.startsWith("xMax") && (q || H) && r.translate(n - N, 0), b.endsWith("YMax") && (Q || R) && r.translate(0, s - _);
    }
    switch (!0) {
      case b === "none":
        r.scale($, E);
        break;
      case T === "meet":
        r.scale(S, S);
        break;
      case T === "slice":
        r.scale(C, C);
        break;
    }
    r.translate(-l, -h);
  }
  start(e) {
    var {
      enableRedraw: t = !1,
      ignoreMouse: r = !1,
      ignoreAnimation: i = !1,
      ignoreDimensions: n = !1,
      ignoreClear: o = !1,
      forceRedraw: s,
      scaleWidth: u,
      scaleHeight: l,
      offsetX: h,
      offsetY: f
    } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, {
      FRAMERATE: c,
      mouse: v
    } = this, d = 1e3 / c;
    if (this.frameDuration = d, this.readyPromise = new Promise((b) => {
      this.resolveReady = b;
    }), this.isReady() && this.render(e, n, o, u, l, h, f), !!t) {
      var g = Date.now(), p = g, y = 0, x = () => {
        g = Date.now(), y = g - p, y >= d && (p = g - y % d, this.shouldUpdate(i, s) && (this.render(e, n, o, u, l, h, f), v.runEvents())), this.intervalId = ja(x);
      };
      r || v.start(), this.intervalId = ja(x);
    }
  }
  stop() {
    this.intervalId && (ja.cancel(this.intervalId), this.intervalId = null), this.mouse.stop();
  }
  shouldUpdate(e, t) {
    if (!e) {
      var {
        frameDuration: r
      } = this, i = this.animations.reduce((n, o) => o.update(r) || n, !1);
      if (i)
        return !0;
    }
    return !!(typeof t == "function" && t() || !this.isReadyLock && this.isReady() || this.mouse.hasEvents());
  }
  render(e, t, r, i, n, o, s) {
    var {
      CLIENT_WIDTH: u,
      CLIENT_HEIGHT: l,
      viewPort: h,
      ctx: f,
      isFirstRender: c
    } = this, v = f.canvas;
    h.clear(), v.width && v.height ? h.setCurrent(v.width, v.height) : h.setCurrent(u, l);
    var d = e.getStyle("width"), g = e.getStyle("height");
    !t && (c || typeof i != "number" && typeof n != "number") && (d.hasValue() && (v.width = d.getPixels("x"), v.style && (v.style.width = "".concat(v.width, "px"))), g.hasValue() && (v.height = g.getPixels("y"), v.style && (v.style.height = "".concat(v.height, "px"))));
    var p = v.clientWidth || v.width, y = v.clientHeight || v.height;
    if (t && d.hasValue() && g.hasValue() && (p = d.getPixels("x"), y = g.getPixels("y")), h.setCurrent(p, y), typeof o == "number" && e.getAttribute("x", !0).setValue(o), typeof s == "number" && e.getAttribute("y", !0).setValue(s), typeof i == "number" || typeof n == "number") {
      var x = ie(e.getAttribute("viewBox").getString()), b = 0, T = 0;
      if (typeof i == "number") {
        var $ = e.getStyle("width");
        $.hasValue() ? b = $.getPixels("x") / i : isNaN(x[2]) || (b = x[2] / i);
      }
      if (typeof n == "number") {
        var E = e.getStyle("height");
        E.hasValue() ? T = E.getPixels("y") / n : isNaN(x[3]) || (T = x[3] / n);
      }
      b || (b = T), T || (T = b), e.getAttribute("width", !0).setValue(i), e.getAttribute("height", !0).setValue(n);
      var S = e.getStyle("transform", !0, !0);
      S.setValue("".concat(S.getString(), " scale(").concat(1 / b, ", ").concat(1 / T, ")"));
    }
    r || f.clearRect(0, 0, p, y), e.render(f), c && (this.isFirstRender = !1);
  }
}
Vr.defaultWindow = Sl;
Vr.defaultFetch = Ol;
var {
  defaultFetch: O1
} = Vr, E1 = typeof DOMParser < "u" ? DOMParser : null;
class Ga {
  constructor() {
    var {
      fetch: e = O1,
      DOMParser: t = E1
    } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.fetch = e, this.DOMParser = t;
  }
  parse(e) {
    var t = this;
    return xe(function* () {
      return e.startsWith("<") ? t.parseFromString(e) : t.load(e);
    })();
  }
  parseFromString(e) {
    var t = new this.DOMParser();
    try {
      return this.checkDocument(t.parseFromString(e, "image/svg+xml"));
    } catch {
      return this.checkDocument(t.parseFromString(e, "text/xml"));
    }
  }
  checkDocument(e) {
    var t = e.getElementsByTagName("parsererror")[0];
    if (t)
      throw new Error(t.textContent);
    return e;
  }
  load(e) {
    var t = this;
    return xe(function* () {
      var r = yield t.fetch(e), i = yield r.text();
      return t.parseFromString(i);
    })();
  }
}
class $1 {
  constructor(e, t) {
    this.type = "translate", this.point = null, this.point = V.parse(t);
  }
  apply(e) {
    var {
      x: t,
      y: r
    } = this.point;
    e.translate(t || 0, r || 0);
  }
  unapply(e) {
    var {
      x: t,
      y: r
    } = this.point;
    e.translate(-1 * t || 0, -1 * r || 0);
  }
  applyToPoint(e) {
    var {
      x: t,
      y: r
    } = this.point;
    e.applyTransform([1, 0, 0, 1, t || 0, r || 0]);
  }
}
class w1 {
  constructor(e, t, r) {
    this.type = "rotate", this.angle = null, this.originX = null, this.originY = null, this.cx = 0, this.cy = 0;
    var i = ie(t);
    this.angle = new O(e, "angle", i[0]), this.originX = r[0], this.originY = r[1], this.cx = i[1] || 0, this.cy = i[2] || 0;
  }
  apply(e) {
    var {
      cx: t,
      cy: r,
      originX: i,
      originY: n,
      angle: o
    } = this, s = t + i.getPixels("x"), u = r + n.getPixels("y");
    e.translate(s, u), e.rotate(o.getRadians()), e.translate(-s, -u);
  }
  unapply(e) {
    var {
      cx: t,
      cy: r,
      originX: i,
      originY: n,
      angle: o
    } = this, s = t + i.getPixels("x"), u = r + n.getPixels("y");
    e.translate(s, u), e.rotate(-1 * o.getRadians()), e.translate(-s, -u);
  }
  applyToPoint(e) {
    var {
      cx: t,
      cy: r,
      angle: i
    } = this, n = i.getRadians();
    e.applyTransform([
      1,
      0,
      0,
      1,
      t || 0,
      r || 0
      // this.p.y
    ]), e.applyTransform([Math.cos(n), Math.sin(n), -Math.sin(n), Math.cos(n), 0, 0]), e.applyTransform([
      1,
      0,
      0,
      1,
      -t || 0,
      -r || 0
      // -this.p.y
    ]);
  }
}
class C1 {
  constructor(e, t, r) {
    this.type = "scale", this.scale = null, this.originX = null, this.originY = null;
    var i = V.parseScale(t);
    (i.x === 0 || i.y === 0) && (i.x = it, i.y = it), this.scale = i, this.originX = r[0], this.originY = r[1];
  }
  apply(e) {
    var {
      scale: {
        x: t,
        y: r
      },
      originX: i,
      originY: n
    } = this, o = i.getPixels("x"), s = n.getPixels("y");
    e.translate(o, s), e.scale(t, r || t), e.translate(-o, -s);
  }
  unapply(e) {
    var {
      scale: {
        x: t,
        y: r
      },
      originX: i,
      originY: n
    } = this, o = i.getPixels("x"), s = n.getPixels("y");
    e.translate(o, s), e.scale(1 / t, 1 / r || t), e.translate(-o, -s);
  }
  applyToPoint(e) {
    var {
      x: t,
      y: r
    } = this.scale;
    e.applyTransform([t || 0, 0, 0, r || 0, 0, 0]);
  }
}
class El {
  constructor(e, t, r) {
    this.type = "matrix", this.matrix = [], this.originX = null, this.originY = null, this.matrix = ie(t), this.originX = r[0], this.originY = r[1];
  }
  apply(e) {
    var {
      originX: t,
      originY: r,
      matrix: i
    } = this, n = t.getPixels("x"), o = r.getPixels("y");
    e.translate(n, o), e.transform(i[0], i[1], i[2], i[3], i[4], i[5]), e.translate(-n, -o);
  }
  unapply(e) {
    var {
      originX: t,
      originY: r,
      matrix: i
    } = this, n = i[0], o = i[2], s = i[4], u = i[1], l = i[3], h = i[5], f = 0, c = 0, v = 1, d = 1 / (n * (l * v - h * c) - o * (u * v - h * f) + s * (u * c - l * f)), g = t.getPixels("x"), p = r.getPixels("y");
    e.translate(g, p), e.transform(d * (l * v - h * c), d * (h * f - u * v), d * (s * c - o * v), d * (n * v - s * f), d * (o * h - s * l), d * (s * u - n * h)), e.translate(-g, -p);
  }
  applyToPoint(e) {
    e.applyTransform(this.matrix);
  }
}
class $l extends El {
  constructor(e, t, r) {
    super(e, t, r), this.type = "skew", this.angle = null, this.angle = new O(e, "angle", t);
  }
}
class A1 extends $l {
  constructor(e, t, r) {
    super(e, t, r), this.type = "skewX", this.matrix = [1, 0, Math.tan(this.angle.getRadians()), 1, 0, 0];
  }
}
class P1 extends $l {
  constructor(e, t, r) {
    super(e, t, r), this.type = "skewY", this.matrix = [1, Math.tan(this.angle.getRadians()), 0, 1, 0, 0];
  }
}
function R1(a) {
  return vt(a).trim().replace(/\)([a-zA-Z])/g, ") $1").replace(/\)(\s?,\s?)/g, ") ").split(/\s(?=[a-z])/);
}
function I1(a) {
  var [e, t] = a.split("(");
  return [e.trim(), t.trim().replace(")", "")];
}
class Be {
  constructor(e, t, r) {
    this.document = e, this.transforms = [];
    var i = R1(t);
    i.forEach((n) => {
      if (n !== "none") {
        var [o, s] = I1(n), u = Be.transformTypes[o];
        typeof u < "u" && this.transforms.push(new u(this.document, s, r));
      }
    });
  }
  static fromElement(e, t) {
    var r = t.getStyle("transform", !1, !0), [i, n = i] = t.getStyle("transform-origin", !1, !0).split(), o = [i, n];
    return r.hasValue() ? new Be(e, r.getString(), o) : null;
  }
  apply(e) {
    for (var {
      transforms: t
    } = this, r = t.length, i = 0; i < r; i++)
      t[i].apply(e);
  }
  unapply(e) {
    for (var {
      transforms: t
    } = this, r = t.length, i = r - 1; i >= 0; i--)
      t[i].unapply(e);
  }
  // TODO: applyToPoint unused ... remove?
  applyToPoint(e) {
    for (var {
      transforms: t
    } = this, r = t.length, i = 0; i < r; i++)
      t[i].applyToPoint(e);
  }
}
Be.transformTypes = {
  translate: $1,
  rotate: w1,
  scale: C1,
  matrix: El,
  skewX: A1,
  skewY: P1
};
class I {
  constructor(e, t) {
    var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
    if (this.document = e, this.node = t, this.captureTextNodes = r, this.attributes = {}, this.styles = {}, this.stylesSpecificity = {}, this.animationFrozen = !1, this.animationFrozenValue = "", this.parent = null, this.children = [], !(!t || t.nodeType !== 1)) {
      if (Array.from(t.attributes).forEach((s) => {
        var u = v1(s.nodeName);
        this.attributes[u] = new O(e, u, s.value);
      }), this.addStylesFromStyleDefinition(), this.getAttribute("style").hasValue()) {
        var i = this.getAttribute("style").getString().split(";").map((s) => s.trim());
        i.forEach((s) => {
          if (s) {
            var [u, l] = s.split(":").map((h) => h.trim());
            this.styles[u] = new O(e, u, l);
          }
        });
      }
      var {
        definitions: n
      } = e, o = this.getAttribute("id");
      o.hasValue() && (n[o.getString()] || (n[o.getString()] = this)), Array.from(t.childNodes).forEach((s) => {
        if (s.nodeType === 1)
          this.addChild(s);
        else if (r && (s.nodeType === 3 || s.nodeType === 4)) {
          var u = e.createTextNode(s);
          u.getText().length > 0 && this.addChild(u);
        }
      });
    }
  }
  getAttribute(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, r = this.attributes[e];
    if (!r && t) {
      var i = new O(this.document, e, "");
      return this.attributes[e] = i, i;
    }
    return r || O.empty(this.document);
  }
  getHrefAttribute() {
    for (var e in this.attributes)
      if (e === "href" || e.endsWith(":href"))
        return this.attributes[e];
    return O.empty(this.document);
  }
  getStyle(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, i = this.styles[e];
    if (i)
      return i;
    var n = this.getAttribute(e);
    if (n != null && n.hasValue())
      return this.styles[e] = n, n;
    if (!r) {
      var {
        parent: o
      } = this;
      if (o) {
        var s = o.getStyle(e);
        if (s != null && s.hasValue())
          return s;
      }
    }
    if (t) {
      var u = new O(this.document, e, "");
      return this.styles[e] = u, u;
    }
    return i || O.empty(this.document);
  }
  render(e) {
    if (!(this.getStyle("display").getString() === "none" || this.getStyle("visibility").getString() === "hidden")) {
      if (e.save(), this.getStyle("mask").hasValue()) {
        var t = this.getStyle("mask").getDefinition();
        t && (this.applyEffects(e), t.apply(e, this));
      } else if (this.getStyle("filter").getValue("none") !== "none") {
        var r = this.getStyle("filter").getDefinition();
        r && (this.applyEffects(e), r.apply(e, this));
      } else
        this.setContext(e), this.renderChildren(e), this.clearContext(e);
      e.restore();
    }
  }
  setContext(e) {
  }
  applyEffects(e) {
    var t = Be.fromElement(this.document, this);
    t && t.apply(e);
    var r = this.getStyle("clip-path", !1, !0);
    if (r.hasValue()) {
      var i = r.getDefinition();
      i && i.apply(e);
    }
  }
  clearContext(e) {
  }
  renderChildren(e) {
    this.children.forEach((t) => {
      t.render(e);
    });
  }
  addChild(e) {
    var t = e instanceof I ? e : this.document.createElement(e);
    t.parent = this, I.ignoreChildTypes.includes(t.type) || this.children.push(t);
  }
  matchesSelector(e) {
    var t, {
      node: r
    } = this;
    if (typeof r.matches == "function")
      return r.matches(e);
    var i = (t = r.getAttribute) === null || t === void 0 ? void 0 : t.call(r, "class");
    return !i || i === "" ? !1 : i.split(" ").some((n) => ".".concat(n) === e);
  }
  addStylesFromStyleDefinition() {
    var {
      styles: e,
      stylesSpecificity: t
    } = this.document;
    for (var r in e)
      if (!r.startsWith("@") && this.matchesSelector(r)) {
        var i = e[r], n = t[r];
        if (i)
          for (var o in i) {
            var s = this.stylesSpecificity[o];
            typeof s > "u" && (s = "000"), n >= s && (this.styles[o] = i[o], this.stylesSpecificity[o] = n);
          }
      }
  }
  removeStyles(e, t) {
    var r = t.reduce((i, n) => {
      var o = e.getStyle(n);
      if (!o.hasValue())
        return i;
      var s = o.getString();
      return o.setValue(""), [...i, [n, s]];
    }, []);
    return r;
  }
  restoreStyles(e, t) {
    t.forEach((r) => {
      var [i, n] = r;
      e.getStyle(i, !0).setValue(n);
    });
  }
  isFirstChild() {
    var e;
    return ((e = this.parent) === null || e === void 0 ? void 0 : e.children.indexOf(this)) === 0;
  }
}
I.ignoreChildTypes = ["title"];
class N1 extends I {
  constructor(e, t, r) {
    super(e, t, r);
  }
}
function M1(a) {
  var e = a.trim();
  return /^('|")/.test(e) ? e : '"'.concat(e, '"');
}
function _1(a) {
  return typeof process > "u" ? a : a.trim().split(",").map(M1).join(",");
}
function D1(a) {
  if (!a)
    return "";
  var e = a.trim().toLowerCase();
  switch (e) {
    case "normal":
    case "italic":
    case "oblique":
    case "inherit":
    case "initial":
    case "unset":
      return e;
    default:
      return /^oblique\s+(-|)\d+deg$/.test(e) ? e : "";
  }
}
function V1(a) {
  if (!a)
    return "";
  var e = a.trim().toLowerCase();
  switch (e) {
    case "normal":
    case "bold":
    case "lighter":
    case "bolder":
    case "inherit":
    case "initial":
    case "unset":
      return e;
    default:
      return /^[\d.]+$/.test(e) ? e : "";
  }
}
class J {
  constructor(e, t, r, i, n, o) {
    var s = o ? typeof o == "string" ? J.parse(o) : o : {};
    this.fontFamily = n || s.fontFamily, this.fontSize = i || s.fontSize, this.fontStyle = e || s.fontStyle, this.fontWeight = r || s.fontWeight, this.fontVariant = t || s.fontVariant;
  }
  static parse() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", t = arguments.length > 1 ? arguments[1] : void 0, r = "", i = "", n = "", o = "", s = "", u = vt(e).trim().split(" "), l = {
      fontSize: !1,
      fontStyle: !1,
      fontWeight: !1,
      fontVariant: !1
    };
    return u.forEach((h) => {
      switch (!0) {
        case (!l.fontStyle && J.styles.includes(h)):
          h !== "inherit" && (r = h), l.fontStyle = !0;
          break;
        case (!l.fontVariant && J.variants.includes(h)):
          h !== "inherit" && (i = h), l.fontStyle = !0, l.fontVariant = !0;
          break;
        case (!l.fontWeight && J.weights.includes(h)):
          h !== "inherit" && (n = h), l.fontStyle = !0, l.fontVariant = !0, l.fontWeight = !0;
          break;
        case !l.fontSize:
          h !== "inherit" && ([o] = h.split("/")), l.fontStyle = !0, l.fontVariant = !0, l.fontWeight = !0, l.fontSize = !0;
          break;
        default:
          h !== "inherit" && (s += h);
      }
    }), new J(r, i, n, o, s, t);
  }
  toString() {
    return [
      D1(this.fontStyle),
      this.fontVariant,
      V1(this.fontWeight),
      this.fontSize,
      // Wrap fontFamily only on nodejs and only for canvas.ctx
      _1(this.fontFamily)
    ].join(" ").trim();
  }
}
J.styles = "normal|italic|oblique|inherit";
J.variants = "normal|small-caps|inherit";
J.weights = "normal|bold|bolder|lighter|100|200|300|400|500|600|700|800|900|inherit";
class he {
  constructor() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Number.NaN, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Number.NaN, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Number.NaN, i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : Number.NaN;
    this.x1 = e, this.y1 = t, this.x2 = r, this.y2 = i, this.addPoint(e, t), this.addPoint(r, i);
  }
  get x() {
    return this.x1;
  }
  get y() {
    return this.y1;
  }
  get width() {
    return this.x2 - this.x1;
  }
  get height() {
    return this.y2 - this.y1;
  }
  addPoint(e, t) {
    typeof e < "u" && ((isNaN(this.x1) || isNaN(this.x2)) && (this.x1 = e, this.x2 = e), e < this.x1 && (this.x1 = e), e > this.x2 && (this.x2 = e)), typeof t < "u" && ((isNaN(this.y1) || isNaN(this.y2)) && (this.y1 = t, this.y2 = t), t < this.y1 && (this.y1 = t), t > this.y2 && (this.y2 = t));
  }
  addX(e) {
    this.addPoint(e, null);
  }
  addY(e) {
    this.addPoint(null, e);
  }
  addBoundingBox(e) {
    if (e) {
      var {
        x1: t,
        y1: r,
        x2: i,
        y2: n
      } = e;
      this.addPoint(t, r), this.addPoint(i, n);
    }
  }
  sumCubic(e, t, r, i, n) {
    return Math.pow(1 - e, 3) * t + 3 * Math.pow(1 - e, 2) * e * r + 3 * (1 - e) * Math.pow(e, 2) * i + Math.pow(e, 3) * n;
  }
  bezierCurveAdd(e, t, r, i, n) {
    var o = 6 * t - 12 * r + 6 * i, s = -3 * t + 9 * r - 9 * i + 3 * n, u = 3 * r - 3 * t;
    if (s === 0) {
      if (o === 0)
        return;
      var l = -u / o;
      0 < l && l < 1 && (e ? this.addX(this.sumCubic(l, t, r, i, n)) : this.addY(this.sumCubic(l, t, r, i, n)));
      return;
    }
    var h = Math.pow(o, 2) - 4 * u * s;
    if (!(h < 0)) {
      var f = (-o + Math.sqrt(h)) / (2 * s);
      0 < f && f < 1 && (e ? this.addX(this.sumCubic(f, t, r, i, n)) : this.addY(this.sumCubic(f, t, r, i, n)));
      var c = (-o - Math.sqrt(h)) / (2 * s);
      0 < c && c < 1 && (e ? this.addX(this.sumCubic(c, t, r, i, n)) : this.addY(this.sumCubic(c, t, r, i, n)));
    }
  }
  // from http://blog.hackers-cafe.net/2009/06/how-to-calculate-bezier-curves-bounding.html
  addBezierCurve(e, t, r, i, n, o, s, u) {
    this.addPoint(e, t), this.addPoint(s, u), this.bezierCurveAdd(!0, e, r, n, s), this.bezierCurveAdd(!1, t, i, o, u);
  }
  addQuadraticCurve(e, t, r, i, n, o) {
    var s = e + 0.6666666666666666 * (r - e), u = t + 2 / 3 * (i - t), l = s + 1 / 3 * (n - e), h = u + 1 / 3 * (o - t);
    this.addBezierCurve(e, t, s, l, u, h, n, o);
  }
  isPointInBox(e, t) {
    var {
      x1: r,
      y1: i,
      x2: n,
      y2: o
    } = this;
    return r <= e && e <= n && i <= t && t <= o;
  }
}
class w extends m {
  constructor(e) {
    super(e.replace(/([+\-.])\s+/gm, "$1").replace(/[^MmZzLlHhVvCcSsQqTtAae\d\s.,+-].*/g, "")), this.control = null, this.start = null, this.current = null, this.command = null, this.commands = this.commands, this.i = -1, this.previousCommand = null, this.points = [], this.angles = [];
  }
  reset() {
    this.i = -1, this.command = null, this.previousCommand = null, this.start = new V(0, 0), this.control = new V(0, 0), this.current = new V(0, 0), this.points = [], this.angles = [];
  }
  isEnd() {
    var {
      i: e,
      commands: t
    } = this;
    return e >= t.length - 1;
  }
  next() {
    var e = this.commands[++this.i];
    return this.previousCommand = this.command, this.command = e, e;
  }
  getPoint() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "x", t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "y", r = new V(this.command[e], this.command[t]);
    return this.makeAbsolute(r);
  }
  getAsControlPoint(e, t) {
    var r = this.getPoint(e, t);
    return this.control = r, r;
  }
  getAsCurrentPoint(e, t) {
    var r = this.getPoint(e, t);
    return this.current = r, r;
  }
  getReflectedControlPoint() {
    var e = this.previousCommand.type;
    if (e !== m.CURVE_TO && e !== m.SMOOTH_CURVE_TO && e !== m.QUAD_TO && e !== m.SMOOTH_QUAD_TO)
      return this.current;
    var {
      current: {
        x: t,
        y: r
      },
      control: {
        x: i,
        y: n
      }
    } = this, o = new V(2 * t - i, 2 * r - n);
    return o;
  }
  makeAbsolute(e) {
    if (this.command.relative) {
      var {
        x: t,
        y: r
      } = this.current;
      e.x += t, e.y += r;
    }
    return e;
  }
  addMarker(e, t, r) {
    var {
      points: i,
      angles: n
    } = this;
    r && n.length > 0 && !n[n.length - 1] && (n[n.length - 1] = i[i.length - 1].angleTo(r)), this.addMarkerAngle(e, t ? t.angleTo(e) : null);
  }
  addMarkerAngle(e, t) {
    this.points.push(e), this.angles.push(t);
  }
  getMarkerPoints() {
    return this.points;
  }
  getMarkerAngles() {
    for (var {
      angles: e
    } = this, t = e.length, r = 0; r < t; r++)
      if (!e[r]) {
        for (var i = r + 1; i < t; i++)
          if (e[i]) {
            e[r] = e[i];
            break;
          }
      }
    return e;
  }
}
class Ge extends I {
  constructor() {
    super(...arguments), this.modifiedEmSizeStack = !1;
  }
  calculateOpacity() {
    for (var e = 1, t = this; t; ) {
      var r = t.getStyle("opacity", !1, !0);
      r.hasValue(!0) && (e *= r.getNumber()), t = t.parent;
    }
    return e;
  }
  setContext(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    if (!t) {
      var r = this.getStyle("fill"), i = this.getStyle("fill-opacity"), n = this.getStyle("stroke"), o = this.getStyle("stroke-opacity");
      if (r.isUrlDefinition()) {
        var s = r.getFillStyleDefinition(this, i);
        s && (e.fillStyle = s);
      } else if (r.hasValue()) {
        r.getString() === "currentColor" && r.setValue(this.getStyle("color").getColor());
        var u = r.getColor();
        u !== "inherit" && (e.fillStyle = u === "none" ? "rgba(0,0,0,0)" : u);
      }
      if (i.hasValue()) {
        var l = new O(this.document, "fill", e.fillStyle).addOpacity(i).getColor();
        e.fillStyle = l;
      }
      if (n.isUrlDefinition()) {
        var h = n.getFillStyleDefinition(this, o);
        h && (e.strokeStyle = h);
      } else if (n.hasValue()) {
        n.getString() === "currentColor" && n.setValue(this.getStyle("color").getColor());
        var f = n.getString();
        f !== "inherit" && (e.strokeStyle = f === "none" ? "rgba(0,0,0,0)" : f);
      }
      if (o.hasValue()) {
        var c = new O(this.document, "stroke", e.strokeStyle).addOpacity(o).getString();
        e.strokeStyle = c;
      }
      var v = this.getStyle("stroke-width");
      if (v.hasValue()) {
        var d = v.getPixels();
        e.lineWidth = d || it;
      }
      var g = this.getStyle("stroke-linecap"), p = this.getStyle("stroke-linejoin"), y = this.getStyle("stroke-miterlimit"), x = this.getStyle("stroke-dasharray"), b = this.getStyle("stroke-dashoffset");
      if (g.hasValue() && (e.lineCap = g.getString()), p.hasValue() && (e.lineJoin = p.getString()), y.hasValue() && (e.miterLimit = y.getNumber()), x.hasValue() && x.getString() !== "none") {
        var T = ie(x.getString());
        typeof e.setLineDash < "u" ? e.setLineDash(T) : typeof e.webkitLineDash < "u" ? e.webkitLineDash = T : typeof e.mozDash < "u" && !(T.length === 1 && T[0] === 0) && (e.mozDash = T);
        var $ = b.getPixels();
        typeof e.lineDashOffset < "u" ? e.lineDashOffset = $ : typeof e.webkitLineDashOffset < "u" ? e.webkitLineDashOffset = $ : typeof e.mozDashOffset < "u" && (e.mozDashOffset = $);
      }
    }
    if (this.modifiedEmSizeStack = !1, typeof e.font < "u") {
      var E = this.getStyle("font"), S = this.getStyle("font-style"), C = this.getStyle("font-variant"), N = this.getStyle("font-weight"), _ = this.getStyle("font-size"), B = this.getStyle("font-family"), P = new J(S.getString(), C.getString(), N.getString(), _.hasValue() ? "".concat(_.getPixels(!0), "px") : "", B.getString(), J.parse(E.getString(), e.font));
      S.setValue(P.fontStyle), C.setValue(P.fontVariant), N.setValue(P.fontWeight), _.setValue(P.fontSize), B.setValue(P.fontFamily), e.font = P.toString(), _.isPixels() && (this.document.emSize = _.getPixels(), this.modifiedEmSizeStack = !0);
    }
    t || (this.applyEffects(e), e.globalAlpha = this.calculateOpacity());
  }
  clearContext(e) {
    super.clearContext(e), this.modifiedEmSizeStack && this.document.popEmSize();
  }
}
class A extends Ge {
  constructor(e, t, r) {
    super(e, t, r), this.type = "path", this.pathParser = null, this.pathParser = new w(this.getAttribute("d").getString());
  }
  path(e) {
    var {
      pathParser: t
    } = this, r = new he();
    for (t.reset(), e && e.beginPath(); !t.isEnd(); )
      switch (t.next().type) {
        case w.MOVE_TO:
          this.pathM(e, r);
          break;
        case w.LINE_TO:
          this.pathL(e, r);
          break;
        case w.HORIZ_LINE_TO:
          this.pathH(e, r);
          break;
        case w.VERT_LINE_TO:
          this.pathV(e, r);
          break;
        case w.CURVE_TO:
          this.pathC(e, r);
          break;
        case w.SMOOTH_CURVE_TO:
          this.pathS(e, r);
          break;
        case w.QUAD_TO:
          this.pathQ(e, r);
          break;
        case w.SMOOTH_QUAD_TO:
          this.pathT(e, r);
          break;
        case w.ARC:
          this.pathA(e, r);
          break;
        case w.CLOSE_PATH:
          this.pathZ(e, r);
          break;
      }
    return r;
  }
  getBoundingBox(e) {
    return this.path();
  }
  getMarkers() {
    var {
      pathParser: e
    } = this, t = e.getMarkerPoints(), r = e.getMarkerAngles(), i = t.map((n, o) => [n, r[o]]);
    return i;
  }
  renderChildren(e) {
    this.path(e), this.document.screen.mouse.checkPath(this, e);
    var t = this.getStyle("fill-rule");
    e.fillStyle !== "" && (t.getString("inherit") !== "inherit" ? e.fill(t.getString()) : e.fill()), e.strokeStyle !== "" && (this.getAttribute("vector-effect").getString() === "non-scaling-stroke" ? (e.save(), e.setTransform(1, 0, 0, 1, 0, 0), e.stroke(), e.restore()) : e.stroke());
    var r = this.getMarkers();
    if (r) {
      var i = r.length - 1, n = this.getStyle("marker-start"), o = this.getStyle("marker-mid"), s = this.getStyle("marker-end");
      if (n.isUrlDefinition()) {
        var u = n.getDefinition(), [l, h] = r[0];
        u.render(e, l, h);
      }
      if (o.isUrlDefinition())
        for (var f = o.getDefinition(), c = 1; c < i; c++) {
          var [v, d] = r[c];
          f.render(e, v, d);
        }
      if (s.isUrlDefinition()) {
        var g = s.getDefinition(), [p, y] = r[i];
        g.render(e, p, y);
      }
    }
  }
  static pathM(e) {
    var t = e.getAsCurrentPoint();
    return e.start = e.current, {
      point: t
    };
  }
  pathM(e, t) {
    var {
      pathParser: r
    } = this, {
      point: i
    } = A.pathM(r), {
      x: n,
      y: o
    } = i;
    r.addMarker(i), t.addPoint(n, o), e && e.moveTo(n, o);
  }
  static pathL(e) {
    var {
      current: t
    } = e, r = e.getAsCurrentPoint();
    return {
      current: t,
      point: r
    };
  }
  pathL(e, t) {
    var {
      pathParser: r
    } = this, {
      current: i,
      point: n
    } = A.pathL(r), {
      x: o,
      y: s
    } = n;
    r.addMarker(n, i), t.addPoint(o, s), e && e.lineTo(o, s);
  }
  static pathH(e) {
    var {
      current: t,
      command: r
    } = e, i = new V((r.relative ? t.x : 0) + r.x, t.y);
    return e.current = i, {
      current: t,
      point: i
    };
  }
  pathH(e, t) {
    var {
      pathParser: r
    } = this, {
      current: i,
      point: n
    } = A.pathH(r), {
      x: o,
      y: s
    } = n;
    r.addMarker(n, i), t.addPoint(o, s), e && e.lineTo(o, s);
  }
  static pathV(e) {
    var {
      current: t,
      command: r
    } = e, i = new V(t.x, (r.relative ? t.y : 0) + r.y);
    return e.current = i, {
      current: t,
      point: i
    };
  }
  pathV(e, t) {
    var {
      pathParser: r
    } = this, {
      current: i,
      point: n
    } = A.pathV(r), {
      x: o,
      y: s
    } = n;
    r.addMarker(n, i), t.addPoint(o, s), e && e.lineTo(o, s);
  }
  static pathC(e) {
    var {
      current: t
    } = e, r = e.getPoint("x1", "y1"), i = e.getAsControlPoint("x2", "y2"), n = e.getAsCurrentPoint();
    return {
      current: t,
      point: r,
      controlPoint: i,
      currentPoint: n
    };
  }
  pathC(e, t) {
    var {
      pathParser: r
    } = this, {
      current: i,
      point: n,
      controlPoint: o,
      currentPoint: s
    } = A.pathC(r);
    r.addMarker(s, o, n), t.addBezierCurve(i.x, i.y, n.x, n.y, o.x, o.y, s.x, s.y), e && e.bezierCurveTo(n.x, n.y, o.x, o.y, s.x, s.y);
  }
  static pathS(e) {
    var {
      current: t
    } = e, r = e.getReflectedControlPoint(), i = e.getAsControlPoint("x2", "y2"), n = e.getAsCurrentPoint();
    return {
      current: t,
      point: r,
      controlPoint: i,
      currentPoint: n
    };
  }
  pathS(e, t) {
    var {
      pathParser: r
    } = this, {
      current: i,
      point: n,
      controlPoint: o,
      currentPoint: s
    } = A.pathS(r);
    r.addMarker(s, o, n), t.addBezierCurve(i.x, i.y, n.x, n.y, o.x, o.y, s.x, s.y), e && e.bezierCurveTo(n.x, n.y, o.x, o.y, s.x, s.y);
  }
  static pathQ(e) {
    var {
      current: t
    } = e, r = e.getAsControlPoint("x1", "y1"), i = e.getAsCurrentPoint();
    return {
      current: t,
      controlPoint: r,
      currentPoint: i
    };
  }
  pathQ(e, t) {
    var {
      pathParser: r
    } = this, {
      current: i,
      controlPoint: n,
      currentPoint: o
    } = A.pathQ(r);
    r.addMarker(o, n, n), t.addQuadraticCurve(i.x, i.y, n.x, n.y, o.x, o.y), e && e.quadraticCurveTo(n.x, n.y, o.x, o.y);
  }
  static pathT(e) {
    var {
      current: t
    } = e, r = e.getReflectedControlPoint();
    e.control = r;
    var i = e.getAsCurrentPoint();
    return {
      current: t,
      controlPoint: r,
      currentPoint: i
    };
  }
  pathT(e, t) {
    var {
      pathParser: r
    } = this, {
      current: i,
      controlPoint: n,
      currentPoint: o
    } = A.pathT(r);
    r.addMarker(o, n, n), t.addQuadraticCurve(i.x, i.y, n.x, n.y, o.x, o.y), e && e.quadraticCurveTo(n.x, n.y, o.x, o.y);
  }
  static pathA(e) {
    var {
      current: t,
      command: r
    } = e, {
      rX: i,
      rY: n,
      xRot: o,
      lArcFlag: s,
      sweepFlag: u
    } = r, l = o * (Math.PI / 180), h = e.getAsCurrentPoint(), f = new V(Math.cos(l) * (t.x - h.x) / 2 + Math.sin(l) * (t.y - h.y) / 2, -Math.sin(l) * (t.x - h.x) / 2 + Math.cos(l) * (t.y - h.y) / 2), c = Math.pow(f.x, 2) / Math.pow(i, 2) + Math.pow(f.y, 2) / Math.pow(n, 2);
    c > 1 && (i *= Math.sqrt(c), n *= Math.sqrt(c));
    var v = (s === u ? -1 : 1) * Math.sqrt((Math.pow(i, 2) * Math.pow(n, 2) - Math.pow(i, 2) * Math.pow(f.y, 2) - Math.pow(n, 2) * Math.pow(f.x, 2)) / (Math.pow(i, 2) * Math.pow(f.y, 2) + Math.pow(n, 2) * Math.pow(f.x, 2)));
    isNaN(v) && (v = 0);
    var d = new V(v * i * f.y / n, v * -n * f.x / i), g = new V((t.x + h.x) / 2 + Math.cos(l) * d.x - Math.sin(l) * d.y, (t.y + h.y) / 2 + Math.sin(l) * d.x + Math.cos(l) * d.y), p = Eo([1, 0], [(f.x - d.x) / i, (f.y - d.y) / n]), y = [(f.x - d.x) / i, (f.y - d.y) / n], x = [(-f.x - d.x) / i, (-f.y - d.y) / n], b = Eo(y, x);
    return Ti(y, x) <= -1 && (b = Math.PI), Ti(y, x) >= 1 && (b = 0), {
      currentPoint: h,
      rX: i,
      rY: n,
      sweepFlag: u,
      xAxisRotation: l,
      centp: g,
      a1: p,
      ad: b
    };
  }
  pathA(e, t) {
    var {
      pathParser: r
    } = this, {
      currentPoint: i,
      rX: n,
      rY: o,
      sweepFlag: s,
      xAxisRotation: u,
      centp: l,
      a1: h,
      ad: f
    } = A.pathA(r), c = 1 - s ? 1 : -1, v = h + c * (f / 2), d = new V(l.x + n * Math.cos(v), l.y + o * Math.sin(v));
    if (r.addMarkerAngle(d, v - c * Math.PI / 2), r.addMarkerAngle(i, v - c * Math.PI), t.addPoint(i.x, i.y), e && !isNaN(h) && !isNaN(f)) {
      var g = n > o ? n : o, p = n > o ? 1 : n / o, y = n > o ? o / n : 1;
      e.translate(l.x, l.y), e.rotate(u), e.scale(p, y), e.arc(0, 0, g, h, h + f, !!(1 - s)), e.scale(1 / p, 1 / y), e.rotate(-u), e.translate(-l.x, -l.y);
    }
  }
  static pathZ(e) {
    e.current = e.start;
  }
  pathZ(e, t) {
    A.pathZ(this.pathParser), e && t.x1 !== t.x2 && t.y1 !== t.y2 && e.closePath();
  }
}
class wl extends A {
  constructor(e, t, r) {
    super(e, t, r), this.type = "glyph", this.horizAdvX = this.getAttribute("horiz-adv-x").getNumber(), this.unicode = this.getAttribute("unicode").getString(), this.arabicForm = this.getAttribute("arabic-form").getString();
  }
}
class Ce extends Ge {
  constructor(e, t, r) {
    super(e, t, new.target === Ce ? !0 : r), this.type = "text", this.x = 0, this.y = 0, this.measureCache = -1;
  }
  setContext(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    super.setContext(e, t);
    var r = this.getStyle("dominant-baseline").getTextBaseline() || this.getStyle("alignment-baseline").getTextBaseline();
    r && (e.textBaseline = r);
  }
  initializeCoordinates() {
    this.x = 0, this.y = 0, this.leafTexts = [], this.textChunkStart = 0, this.minX = Number.POSITIVE_INFINITY, this.maxX = Number.NEGATIVE_INFINITY;
  }
  getBoundingBox(e) {
    if (this.type !== "text")
      return this.getTElementBoundingBox(e);
    this.initializeCoordinates(), this.adjustChildCoordinatesRecursive(e);
    var t = null;
    return this.children.forEach((r, i) => {
      var n = this.getChildBoundingBox(e, this, this, i);
      t ? t.addBoundingBox(n) : t = n;
    }), t;
  }
  getFontSize() {
    var {
      document: e,
      parent: t
    } = this, r = J.parse(e.ctx.font).fontSize, i = t.getStyle("font-size").getNumber(r);
    return i;
  }
  getTElementBoundingBox(e) {
    var t = this.getFontSize();
    return new he(this.x, this.y - t, this.x + this.measureText(e), this.y);
  }
  getGlyph(e, t, r) {
    var i = t[r], n = null;
    if (e.isArabic) {
      var o = t.length, s = t[r - 1], u = t[r + 1], l = "isolated";
      if ((r === 0 || s === " ") && r < o - 1 && u !== " " && (l = "terminal"), r > 0 && s !== " " && r < o - 1 && u !== " " && (l = "medial"), r > 0 && s !== " " && (r === o - 1 || u === " ") && (l = "initial"), typeof e.glyphs[i] < "u") {
        var h = e.glyphs[i];
        n = h instanceof wl ? h : h[l];
      }
    } else
      n = e.glyphs[i];
    return n || (n = e.missingGlyph), n;
  }
  getText() {
    return "";
  }
  getTextFromNode(e) {
    var t = e || this.node, r = Array.from(t.parentNode.childNodes), i = r.indexOf(t), n = r.length - 1, o = vt(
      // textNode.value
      // || textNode.text
      t.textContent || ""
    );
    return i === 0 && (o = u1(o)), i === n && (o = l1(o)), o;
  }
  renderChildren(e) {
    if (this.type !== "text") {
      this.renderTElementChildren(e);
      return;
    }
    this.initializeCoordinates(), this.adjustChildCoordinatesRecursive(e), this.children.forEach((r, i) => {
      this.renderChild(e, this, this, i);
    });
    var {
      mouse: t
    } = this.document.screen;
    t.isWorking() && t.checkBoundingBox(this, this.getBoundingBox(e));
  }
  renderTElementChildren(e) {
    var {
      document: t,
      parent: r
    } = this, i = this.getText(), n = r.getStyle("font-family").getDefinition();
    if (n) {
      for (var {
        unitsPerEm: o
      } = n.fontFace, s = J.parse(t.ctx.font), u = r.getStyle("font-size").getNumber(s.fontSize), l = r.getStyle("font-style").getString(s.fontStyle), h = u / o, f = n.isRTL ? i.split("").reverse().join("") : i, c = ie(r.getAttribute("dx").getString()), v = f.length, d = 0; d < v; d++) {
        var g = this.getGlyph(n, f, d);
        e.translate(this.x, this.y), e.scale(h, -h);
        var p = e.lineWidth;
        e.lineWidth = e.lineWidth * o / u, l === "italic" && e.transform(1, 0, 0.4, 1, 0, 0), g.render(e), l === "italic" && e.transform(1, 0, -0.4, 1, 0, 0), e.lineWidth = p, e.scale(1 / h, -1 / h), e.translate(-this.x, -this.y), this.x += u * (g.horizAdvX || n.horizAdvX) / o, typeof c[d] < "u" && !isNaN(c[d]) && (this.x += c[d]);
      }
      return;
    }
    var {
      x: y,
      y: x
    } = this;
    e.fillStyle && e.fillText(i, y, x), e.strokeStyle && e.strokeText(i, y, x);
  }
  applyAnchoring() {
    if (!(this.textChunkStart >= this.leafTexts.length)) {
      var e = this.leafTexts[this.textChunkStart], t = e.getStyle("text-anchor").getString("start"), r = !1, i = 0;
      t === "start" && !r || t === "end" && r ? i = e.x - this.minX : t === "end" && !r || t === "start" && r ? i = e.x - this.maxX : i = e.x - (this.minX + this.maxX) / 2;
      for (var n = this.textChunkStart; n < this.leafTexts.length; n++)
        this.leafTexts[n].x += i;
      this.minX = Number.POSITIVE_INFINITY, this.maxX = Number.NEGATIVE_INFINITY, this.textChunkStart = this.leafTexts.length;
    }
  }
  adjustChildCoordinatesRecursive(e) {
    this.children.forEach((t, r) => {
      this.adjustChildCoordinatesRecursiveCore(e, this, this, r);
    }), this.applyAnchoring();
  }
  adjustChildCoordinatesRecursiveCore(e, t, r, i) {
    var n = r.children[i];
    n.children.length > 0 ? n.children.forEach((o, s) => {
      t.adjustChildCoordinatesRecursiveCore(e, t, n, s);
    }) : this.adjustChildCoordinates(e, t, r, i);
  }
  adjustChildCoordinates(e, t, r, i) {
    var n = r.children[i];
    if (typeof n.measureText != "function")
      return n;
    e.save(), n.setContext(e, !0);
    var o = n.getAttribute("x"), s = n.getAttribute("y"), u = n.getAttribute("dx"), l = n.getAttribute("dy"), h = n.getStyle("font-family").getDefinition(), f = !!h && h.isRTL;
    i === 0 && (o.hasValue() || o.setValue(n.getInheritedAttribute("x")), s.hasValue() || s.setValue(n.getInheritedAttribute("y")), u.hasValue() || u.setValue(n.getInheritedAttribute("dx")), l.hasValue() || l.setValue(n.getInheritedAttribute("dy")));
    var c = n.measureText(e);
    return f && (t.x -= c), o.hasValue() ? (t.applyAnchoring(), n.x = o.getPixels("x"), u.hasValue() && (n.x += u.getPixels("x"))) : (u.hasValue() && (t.x += u.getPixels("x")), n.x = t.x), t.x = n.x, f || (t.x += c), s.hasValue() ? (n.y = s.getPixels("y"), l.hasValue() && (n.y += l.getPixels("y"))) : (l.hasValue() && (t.y += l.getPixels("y")), n.y = t.y), t.y = n.y, t.leafTexts.push(n), t.minX = Math.min(t.minX, n.x, n.x + c), t.maxX = Math.max(t.maxX, n.x, n.x + c), n.clearContext(e), e.restore(), n;
  }
  getChildBoundingBox(e, t, r, i) {
    var n = r.children[i];
    if (typeof n.getBoundingBox != "function")
      return null;
    var o = n.getBoundingBox(e);
    return o ? (n.children.forEach((s, u) => {
      var l = t.getChildBoundingBox(e, t, n, u);
      o.addBoundingBox(l);
    }), o) : null;
  }
  renderChild(e, t, r, i) {
    var n = r.children[i];
    n.render(e), n.children.forEach((o, s) => {
      t.renderChild(e, t, n, s);
    });
  }
  measureText(e) {
    var {
      measureCache: t
    } = this;
    if (~t)
      return t;
    var r = this.getText(), i = this.measureTargetText(e, r);
    return this.measureCache = i, i;
  }
  measureTargetText(e, t) {
    if (!t.length)
      return 0;
    var {
      parent: r
    } = this, i = r.getStyle("font-family").getDefinition();
    if (i) {
      for (var n = this.getFontSize(), o = i.isRTL ? t.split("").reverse().join("") : t, s = ie(r.getAttribute("dx").getString()), u = o.length, l = 0, h = 0; h < u; h++) {
        var f = this.getGlyph(i, o, h);
        l += (f.horizAdvX || i.horizAdvX) * n / i.fontFace.unitsPerEm, typeof s[h] < "u" && !isNaN(s[h]) && (l += s[h]);
      }
      return l;
    }
    if (!e.measureText)
      return t.length * 10;
    e.save(), this.setContext(e, !0);
    var {
      width: c
    } = e.measureText(t);
    return this.clearContext(e), e.restore(), c;
  }
  /**
   * Inherits positional attributes from {@link TextElement} parent(s). Attributes
   * are only inherited from a parent to its first child.
   * @param name - The attribute name.
   * @returns The attribute value or null.
   */
  getInheritedAttribute(e) {
    for (var t = this; t instanceof Ce && t.isFirstChild(); ) {
      var r = t.parent.getAttribute(e);
      if (r.hasValue(!0))
        return r.getValue("0");
      t = t.parent;
    }
    return null;
  }
}
class Lr extends Ce {
  constructor(e, t, r) {
    super(e, t, new.target === Lr ? !0 : r), this.type = "tspan", this.text = this.children.length > 0 ? "" : this.getTextFromNode();
  }
  getText() {
    return this.text;
  }
}
class L1 extends Lr {
  constructor() {
    super(...arguments), this.type = "textNode";
  }
}
class _t extends Ge {
  constructor() {
    super(...arguments), this.type = "svg", this.root = !1;
  }
  setContext(e) {
    var t, {
      document: r
    } = this, {
      screen: i,
      window: n
    } = r, o = e.canvas;
    if (i.setDefaults(e), o.style && typeof e.font < "u" && n && typeof n.getComputedStyle < "u") {
      e.font = n.getComputedStyle(o).getPropertyValue("font");
      var s = new O(r, "fontSize", J.parse(e.font).fontSize);
      s.hasValue() && (r.rootEmSize = s.getPixels("y"), r.emSize = r.rootEmSize);
    }
    this.getAttribute("x").hasValue() || this.getAttribute("x", !0).setValue(0), this.getAttribute("y").hasValue() || this.getAttribute("y", !0).setValue(0);
    var {
      width: u,
      height: l
    } = i.viewPort;
    this.getStyle("width").hasValue() || this.getStyle("width", !0).setValue("100%"), this.getStyle("height").hasValue() || this.getStyle("height", !0).setValue("100%"), this.getStyle("color").hasValue() || this.getStyle("color", !0).setValue("black");
    var h = this.getAttribute("refX"), f = this.getAttribute("refY"), c = this.getAttribute("viewBox"), v = c.hasValue() ? ie(c.getString()) : null, d = !this.root && this.getStyle("overflow").getValue("hidden") !== "visible", g = 0, p = 0, y = 0, x = 0;
    v && (g = v[0], p = v[1]), this.root || (u = this.getStyle("width").getPixels("x"), l = this.getStyle("height").getPixels("y"), this.type === "marker" && (y = g, x = p, g = 0, p = 0)), i.viewPort.setCurrent(u, l), this.node && (!this.parent || ((t = this.node.parentNode) === null || t === void 0 ? void 0 : t.nodeName) === "foreignObject") && this.getStyle("transform", !1, !0).hasValue() && !this.getStyle("transform-origin", !1, !0).hasValue() && this.getStyle("transform-origin", !0, !0).setValue("50% 50%"), super.setContext(e), e.translate(this.getAttribute("x").getPixels("x"), this.getAttribute("y").getPixels("y")), v && (u = v[2], l = v[3]), r.setViewBox({
      ctx: e,
      aspectRatio: this.getAttribute("preserveAspectRatio").getString(),
      width: i.viewPort.width,
      desiredWidth: u,
      height: i.viewPort.height,
      desiredHeight: l,
      minX: g,
      minY: p,
      refX: h.getValue(),
      refY: f.getValue(),
      clip: d,
      clipX: y,
      clipY: x
    }), v && (i.viewPort.removeCurrent(), i.viewPort.setCurrent(u, l));
  }
  clearContext(e) {
    super.clearContext(e), this.document.screen.viewPort.removeCurrent();
  }
  /**
   * Resize SVG to fit in given size.
   * @param width
   * @param height
   * @param preserveAspectRatio
   */
  resize(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, i = this.getAttribute("width", !0), n = this.getAttribute("height", !0), o = this.getAttribute("viewBox"), s = this.getAttribute("style"), u = i.getNumber(0), l = n.getNumber(0);
    if (r)
      if (typeof r == "string")
        this.getAttribute("preserveAspectRatio", !0).setValue(r);
      else {
        var h = this.getAttribute("preserveAspectRatio");
        h.hasValue() && h.setValue(h.getString().replace(/^\s*(\S.*\S)\s*$/, "$1"));
      }
    if (i.setValue(e), n.setValue(t), o.hasValue() || o.setValue("0 0 ".concat(u || e, " ").concat(l || t)), s.hasValue()) {
      var f = this.getStyle("width"), c = this.getStyle("height");
      f.hasValue() && f.setValue("".concat(e, "px")), c.hasValue() && c.setValue("".concat(t, "px"));
    }
  }
}
class Cl extends A {
  constructor() {
    super(...arguments), this.type = "rect";
  }
  path(e) {
    var t = this.getAttribute("x").getPixels("x"), r = this.getAttribute("y").getPixels("y"), i = this.getStyle("width", !1, !0).getPixels("x"), n = this.getStyle("height", !1, !0).getPixels("y"), o = this.getAttribute("rx"), s = this.getAttribute("ry"), u = o.getPixels("x"), l = s.getPixels("y");
    if (o.hasValue() && !s.hasValue() && (l = u), s.hasValue() && !o.hasValue() && (u = l), u = Math.min(u, i / 2), l = Math.min(l, n / 2), e) {
      var h = 4 * ((Math.sqrt(2) - 1) / 3);
      e.beginPath(), n > 0 && i > 0 && (e.moveTo(t + u, r), e.lineTo(t + i - u, r), e.bezierCurveTo(t + i - u + h * u, r, t + i, r + l - h * l, t + i, r + l), e.lineTo(t + i, r + n - l), e.bezierCurveTo(t + i, r + n - l + h * l, t + i - u + h * u, r + n, t + i - u, r + n), e.lineTo(t + u, r + n), e.bezierCurveTo(t + u - h * u, r + n, t, r + n - l + h * l, t, r + n - l), e.lineTo(t, r + l), e.bezierCurveTo(t, r + l - h * l, t + u - h * u, r, t + u, r), e.closePath());
    }
    return new he(t, r, t + i, r + n);
  }
  getMarkers() {
    return null;
  }
}
class k1 extends A {
  constructor() {
    super(...arguments), this.type = "circle";
  }
  path(e) {
    var t = this.getAttribute("cx").getPixels("x"), r = this.getAttribute("cy").getPixels("y"), i = this.getAttribute("r").getPixels();
    return e && i > 0 && (e.beginPath(), e.arc(t, r, i, 0, Math.PI * 2, !1), e.closePath()), new he(t - i, r - i, t + i, r + i);
  }
  getMarkers() {
    return null;
  }
}
class B1 extends A {
  constructor() {
    super(...arguments), this.type = "ellipse";
  }
  path(e) {
    var t = 4 * ((Math.sqrt(2) - 1) / 3), r = this.getAttribute("rx").getPixels("x"), i = this.getAttribute("ry").getPixels("y"), n = this.getAttribute("cx").getPixels("x"), o = this.getAttribute("cy").getPixels("y");
    return e && r > 0 && i > 0 && (e.beginPath(), e.moveTo(n + r, o), e.bezierCurveTo(n + r, o + t * i, n + t * r, o + i, n, o + i), e.bezierCurveTo(n - t * r, o + i, n - r, o + t * i, n - r, o), e.bezierCurveTo(n - r, o - t * i, n - t * r, o - i, n, o - i), e.bezierCurveTo(n + t * r, o - i, n + r, o - t * i, n + r, o), e.closePath()), new he(n - r, o - i, n + r, o + i);
  }
  getMarkers() {
    return null;
  }
}
class F1 extends A {
  constructor() {
    super(...arguments), this.type = "line";
  }
  getPoints() {
    return [new V(this.getAttribute("x1").getPixels("x"), this.getAttribute("y1").getPixels("y")), new V(this.getAttribute("x2").getPixels("x"), this.getAttribute("y2").getPixels("y"))];
  }
  path(e) {
    var [{
      x: t,
      y: r
    }, {
      x: i,
      y: n
    }] = this.getPoints();
    return e && (e.beginPath(), e.moveTo(t, r), e.lineTo(i, n)), new he(t, r, i, n);
  }
  getMarkers() {
    var [e, t] = this.getPoints(), r = e.angleTo(t);
    return [[e, r], [t, r]];
  }
}
class Al extends A {
  constructor(e, t, r) {
    super(e, t, r), this.type = "polyline", this.points = [], this.points = V.parsePath(this.getAttribute("points").getString());
  }
  path(e) {
    var {
      points: t
    } = this, [{
      x: r,
      y: i
    }] = t, n = new he(r, i);
    return e && (e.beginPath(), e.moveTo(r, i)), t.forEach((o) => {
      var {
        x: s,
        y: u
      } = o;
      n.addPoint(s, u), e && e.lineTo(s, u);
    }), n;
  }
  getMarkers() {
    var {
      points: e
    } = this, t = e.length - 1, r = [];
    return e.forEach((i, n) => {
      n !== t && r.push([i, i.angleTo(e[n + 1])]);
    }), r.length > 0 && r.push([e[e.length - 1], r[r.length - 1][1]]), r;
  }
}
class j1 extends Al {
  constructor() {
    super(...arguments), this.type = "polygon";
  }
  path(e) {
    var t = super.path(e), [{
      x: r,
      y: i
    }] = this.points;
    return e && (e.lineTo(r, i), e.closePath()), t;
  }
}
class U1 extends I {
  constructor() {
    super(...arguments), this.type = "pattern";
  }
  createPattern(e, t, r) {
    var i = this.getStyle("width").getPixels("x", !0), n = this.getStyle("height").getPixels("y", !0), o = new _t(this.document, null);
    o.attributes.viewBox = new O(this.document, "viewBox", this.getAttribute("viewBox").getValue()), o.attributes.width = new O(this.document, "width", "".concat(i, "px")), o.attributes.height = new O(this.document, "height", "".concat(n, "px")), o.attributes.transform = new O(this.document, "transform", this.getAttribute("patternTransform").getValue()), o.children = this.children;
    var s = this.document.createCanvas(i, n), u = s.getContext("2d"), l = this.getAttribute("x"), h = this.getAttribute("y");
    l.hasValue() && h.hasValue() && u.translate(l.getPixels("x", !0), h.getPixels("y", !0)), r.hasValue() ? this.styles["fill-opacity"] = r : Reflect.deleteProperty(this.styles, "fill-opacity");
    for (var f = -1; f <= 1; f++)
      for (var c = -1; c <= 1; c++)
        u.save(), o.attributes.x = new O(this.document, "x", f * s.width), o.attributes.y = new O(this.document, "y", c * s.height), o.render(u), u.restore();
    var v = e.createPattern(s, "repeat");
    return v;
  }
}
class z1 extends I {
  constructor() {
    super(...arguments), this.type = "marker";
  }
  render(e, t, r) {
    if (t) {
      var {
        x: i,
        y: n
      } = t, o = this.getAttribute("orient").getString("auto"), s = this.getAttribute("markerUnits").getString("strokeWidth");
      e.translate(i, n), o === "auto" && e.rotate(r), s === "strokeWidth" && e.scale(e.lineWidth, e.lineWidth), e.save();
      var u = new _t(this.document, null);
      u.type = this.type, u.attributes.viewBox = new O(this.document, "viewBox", this.getAttribute("viewBox").getValue()), u.attributes.refX = new O(this.document, "refX", this.getAttribute("refX").getValue()), u.attributes.refY = new O(this.document, "refY", this.getAttribute("refY").getValue()), u.attributes.width = new O(this.document, "width", this.getAttribute("markerWidth").getValue()), u.attributes.height = new O(this.document, "height", this.getAttribute("markerHeight").getValue()), u.attributes.overflow = new O(this.document, "overflow", this.getAttribute("overflow").getValue()), u.attributes.fill = new O(this.document, "fill", this.getAttribute("fill").getColor("black")), u.attributes.stroke = new O(this.document, "stroke", this.getAttribute("stroke").getValue("none")), u.children = this.children, u.render(e), e.restore(), s === "strokeWidth" && e.scale(1 / e.lineWidth, 1 / e.lineWidth), o === "auto" && e.rotate(-r), e.translate(-i, -n);
    }
  }
}
class G1 extends I {
  constructor() {
    super(...arguments), this.type = "defs";
  }
  render() {
  }
}
class on extends Ge {
  constructor() {
    super(...arguments), this.type = "g";
  }
  getBoundingBox(e) {
    var t = new he();
    return this.children.forEach((r) => {
      t.addBoundingBox(r.getBoundingBox(e));
    }), t;
  }
}
class Pl extends I {
  constructor(e, t, r) {
    super(e, t, r), this.attributesToInherit = ["gradientUnits"], this.stops = [];
    var {
      stops: i,
      children: n
    } = this;
    n.forEach((o) => {
      o.type === "stop" && i.push(o);
    });
  }
  getGradientUnits() {
    return this.getAttribute("gradientUnits").getString("objectBoundingBox");
  }
  createGradient(e, t, r) {
    var i = this;
    this.getHrefAttribute().hasValue() && (i = this.getHrefAttribute().getDefinition(), this.inheritStopContainer(i));
    var {
      stops: n
    } = i, o = this.getGradient(e, t);
    if (!o)
      return this.addParentOpacity(r, n[n.length - 1].color);
    if (n.forEach((p) => {
      o.addColorStop(p.offset, this.addParentOpacity(r, p.color));
    }), this.getAttribute("gradientTransform").hasValue()) {
      var {
        document: s
      } = this, {
        MAX_VIRTUAL_PIXELS: u,
        viewPort: l
      } = s.screen, [h] = l.viewPorts, f = new Cl(s, null);
      f.attributes.x = new O(s, "x", -u / 3), f.attributes.y = new O(s, "y", -u / 3), f.attributes.width = new O(s, "width", u), f.attributes.height = new O(s, "height", u);
      var c = new on(s, null);
      c.attributes.transform = new O(s, "transform", this.getAttribute("gradientTransform").getValue()), c.children = [f];
      var v = new _t(s, null);
      v.attributes.x = new O(s, "x", 0), v.attributes.y = new O(s, "y", 0), v.attributes.width = new O(s, "width", h.width), v.attributes.height = new O(s, "height", h.height), v.children = [c];
      var d = s.createCanvas(h.width, h.height), g = d.getContext("2d");
      return g.fillStyle = o, v.render(g), g.createPattern(d, "no-repeat");
    }
    return o;
  }
  inheritStopContainer(e) {
    this.attributesToInherit.forEach((t) => {
      !this.getAttribute(t).hasValue() && e.getAttribute(t).hasValue() && this.getAttribute(t, !0).setValue(e.getAttribute(t).getValue());
    });
  }
  addParentOpacity(e, t) {
    if (e.hasValue()) {
      var r = new O(this.document, "color", t);
      return r.addOpacity(e).getColor();
    }
    return t;
  }
}
class H1 extends Pl {
  constructor(e, t, r) {
    super(e, t, r), this.type = "linearGradient", this.attributesToInherit.push("x1", "y1", "x2", "y2");
  }
  getGradient(e, t) {
    var r = this.getGradientUnits() === "objectBoundingBox", i = r ? t.getBoundingBox(e) : null;
    if (r && !i)
      return null;
    !this.getAttribute("x1").hasValue() && !this.getAttribute("y1").hasValue() && !this.getAttribute("x2").hasValue() && !this.getAttribute("y2").hasValue() && (this.getAttribute("x1", !0).setValue(0), this.getAttribute("y1", !0).setValue(0), this.getAttribute("x2", !0).setValue(1), this.getAttribute("y2", !0).setValue(0));
    var n = r ? i.x + i.width * this.getAttribute("x1").getNumber() : this.getAttribute("x1").getPixels("x"), o = r ? i.y + i.height * this.getAttribute("y1").getNumber() : this.getAttribute("y1").getPixels("y"), s = r ? i.x + i.width * this.getAttribute("x2").getNumber() : this.getAttribute("x2").getPixels("x"), u = r ? i.y + i.height * this.getAttribute("y2").getNumber() : this.getAttribute("y2").getPixels("y");
    return n === s && o === u ? null : e.createLinearGradient(n, o, s, u);
  }
}
class Y1 extends Pl {
  constructor(e, t, r) {
    super(e, t, r), this.type = "radialGradient", this.attributesToInherit.push("cx", "cy", "r", "fx", "fy", "fr");
  }
  getGradient(e, t) {
    var r = this.getGradientUnits() === "objectBoundingBox", i = t.getBoundingBox(e);
    if (r && !i)
      return null;
    this.getAttribute("cx").hasValue() || this.getAttribute("cx", !0).setValue("50%"), this.getAttribute("cy").hasValue() || this.getAttribute("cy", !0).setValue("50%"), this.getAttribute("r").hasValue() || this.getAttribute("r", !0).setValue("50%");
    var n = r ? i.x + i.width * this.getAttribute("cx").getNumber() : this.getAttribute("cx").getPixels("x"), o = r ? i.y + i.height * this.getAttribute("cy").getNumber() : this.getAttribute("cy").getPixels("y"), s = n, u = o;
    this.getAttribute("fx").hasValue() && (s = r ? i.x + i.width * this.getAttribute("fx").getNumber() : this.getAttribute("fx").getPixels("x")), this.getAttribute("fy").hasValue() && (u = r ? i.y + i.height * this.getAttribute("fy").getNumber() : this.getAttribute("fy").getPixels("y"));
    var l = r ? (i.width + i.height) / 2 * this.getAttribute("r").getNumber() : this.getAttribute("r").getPixels(), h = this.getAttribute("fr").getPixels();
    return e.createRadialGradient(s, u, h, n, o, l);
  }
}
class X1 extends I {
  constructor(e, t, r) {
    super(e, t, r), this.type = "stop";
    var i = Math.max(0, Math.min(1, this.getAttribute("offset").getNumber())), n = this.getStyle("stop-opacity"), o = this.getStyle("stop-color", !0);
    o.getString() === "" && o.setValue("#000"), n.hasValue() && (o = o.addOpacity(n)), this.offset = i, this.color = o.getColor();
  }
}
class un extends I {
  constructor(e, t, r) {
    super(e, t, r), this.type = "animate", this.duration = 0, this.initialValue = null, this.initialUnits = "", this.removed = !1, this.frozen = !1, e.screen.animations.push(this), this.begin = this.getAttribute("begin").getMilliseconds(), this.maxDuration = this.begin + this.getAttribute("dur").getMilliseconds(), this.from = this.getAttribute("from"), this.to = this.getAttribute("to"), this.values = new O(e, "values", null);
    var i = this.getAttribute("values");
    i.hasValue() && this.values.setValue(i.getString().split(";"));
  }
  getProperty() {
    var e = this.getAttribute("attributeType").getString(), t = this.getAttribute("attributeName").getString();
    return e === "CSS" ? this.parent.getStyle(t, !0) : this.parent.getAttribute(t, !0);
  }
  calcValue() {
    var {
      initialUnits: e
    } = this, {
      progress: t,
      from: r,
      to: i
    } = this.getProgress(), n = r.getNumber() + (i.getNumber() - r.getNumber()) * t;
    return e === "%" && (n *= 100), "".concat(n).concat(e);
  }
  update(e) {
    var {
      parent: t
    } = this, r = this.getProperty();
    if (this.initialValue || (this.initialValue = r.getString(), this.initialUnits = r.getUnits()), this.duration > this.maxDuration) {
      var i = this.getAttribute("fill").getString("remove");
      if (this.getAttribute("repeatCount").getString() === "indefinite" || this.getAttribute("repeatDur").getString() === "indefinite")
        this.duration = 0;
      else if (i === "freeze" && !this.frozen)
        this.frozen = !0, t.animationFrozen = !0, t.animationFrozenValue = r.getString();
      else if (i === "remove" && !this.removed)
        return this.removed = !0, r.setValue(t.animationFrozen ? t.animationFrozenValue : this.initialValue), !0;
      return !1;
    }
    this.duration += e;
    var n = !1;
    if (this.begin < this.duration) {
      var o = this.calcValue(), s = this.getAttribute("type");
      if (s.hasValue()) {
        var u = s.getString();
        o = "".concat(u, "(").concat(o, ")");
      }
      r.setValue(o), n = !0;
    }
    return n;
  }
  getProgress() {
    var {
      document: e,
      values: t
    } = this, r = {
      progress: (this.duration - this.begin) / (this.maxDuration - this.begin)
    };
    if (t.hasValue()) {
      var i = r.progress * (t.getValue().length - 1), n = Math.floor(i), o = Math.ceil(i);
      r.from = new O(e, "from", parseFloat(t.getValue()[n])), r.to = new O(e, "to", parseFloat(t.getValue()[o])), r.progress = (i - n) / (o - n);
    } else
      r.from = this.from, r.to = this.to;
    return r;
  }
}
class W1 extends un {
  constructor() {
    super(...arguments), this.type = "animateColor";
  }
  calcValue() {
    var {
      progress: e,
      from: t,
      to: r
    } = this.getProgress(), i = new mi(t.getColor()), n = new mi(r.getColor());
    if (i.ok && n.ok) {
      var o = i.r + (n.r - i.r) * e, s = i.g + (n.g - i.g) * e, u = i.b + (n.b - i.b) * e;
      return "rgb(".concat(Math.floor(o), ", ").concat(Math.floor(s), ", ").concat(Math.floor(u), ")");
    }
    return this.getAttribute("from").getColor();
  }
}
class q1 extends un {
  constructor() {
    super(...arguments), this.type = "animateTransform";
  }
  calcValue() {
    var {
      progress: e,
      from: t,
      to: r
    } = this.getProgress(), i = ie(t.getString()), n = ie(r.getString()), o = i.map((s, u) => {
      var l = n[u];
      return s + (l - s) * e;
    }).join(" ");
    return o;
  }
}
class Q1 extends I {
  constructor(e, t, r) {
    super(e, t, r), this.type = "font", this.glyphs = {}, this.horizAdvX = this.getAttribute("horiz-adv-x").getNumber();
    var {
      definitions: i
    } = e, {
      children: n
    } = this;
    for (var o of n)
      switch (o.type) {
        case "font-face": {
          this.fontFace = o;
          var s = o.getStyle("font-family");
          s.hasValue() && (i[s.getString()] = this);
          break;
        }
        case "missing-glyph":
          this.missingGlyph = o;
          break;
        case "glyph": {
          var u = o;
          u.arabicForm ? (this.isRTL = !0, this.isArabic = !0, typeof this.glyphs[u.unicode] > "u" && (this.glyphs[u.unicode] = {}), this.glyphs[u.unicode][u.arabicForm] = u) : this.glyphs[u.unicode] = u;
          break;
        }
      }
  }
  render() {
  }
}
class K1 extends I {
  constructor(e, t, r) {
    super(e, t, r), this.type = "font-face", this.ascent = this.getAttribute("ascent").getNumber(), this.descent = this.getAttribute("descent").getNumber(), this.unitsPerEm = this.getAttribute("units-per-em").getNumber();
  }
}
class Z1 extends A {
  constructor() {
    super(...arguments), this.type = "missing-glyph", this.horizAdvX = 0;
  }
}
class J1 extends Ce {
  constructor() {
    super(...arguments), this.type = "tref";
  }
  getText() {
    var e = this.getHrefAttribute().getDefinition();
    if (e) {
      var t = e.children[0];
      if (t)
        return t.getText();
    }
    return "";
  }
}
class e2 extends Ce {
  constructor(e, t, r) {
    super(e, t, r), this.type = "a";
    var {
      childNodes: i
    } = t, n = i[0], o = i.length > 0 && Array.from(i).every((s) => s.nodeType === 3);
    this.hasText = o, this.text = o ? this.getTextFromNode(n) : "";
  }
  getText() {
    return this.text;
  }
  renderChildren(e) {
    if (this.hasText) {
      super.renderChildren(e);
      var {
        document: t,
        x: r,
        y: i
      } = this, {
        mouse: n
      } = t.screen, o = new O(t, "fontSize", J.parse(t.ctx.font).fontSize);
      n.isWorking() && n.checkBoundingBox(this, new he(r, i - o.getPixels("y"), r + this.measureText(e), i));
    } else if (this.children.length > 0) {
      var s = new on(this.document, null);
      s.children = this.children, s.parent = this, s.render(e);
    }
  }
  onClick() {
    var {
      window: e
    } = this.document;
    e && e.open(this.getHrefAttribute().getString());
  }
  onMouseMove() {
    var e = this.document.ctx;
    e.canvas.style.cursor = "pointer";
  }
}
function No(a, e) {
  var t = Object.keys(a);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(a);
    e && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(a, i).enumerable;
    })), t.push.apply(t, r);
  }
  return t;
}
function ir(a) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? No(Object(t), !0).forEach(function(r) {
      an(a, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(t)) : No(Object(t)).forEach(function(r) {
      Object.defineProperty(a, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return a;
}
class t2 extends Ce {
  constructor(e, t, r) {
    super(e, t, r), this.type = "textPath", this.textWidth = 0, this.textHeight = 0, this.pathLength = -1, this.glyphInfo = null, this.letterSpacingCache = [], this.measuresCache = /* @__PURE__ */ new Map([["", 0]]);
    var i = this.getHrefAttribute().getDefinition();
    this.text = this.getTextFromNode(), this.dataArray = this.parsePathData(i);
  }
  getText() {
    return this.text;
  }
  path(e) {
    var {
      dataArray: t
    } = this;
    e && e.beginPath(), t.forEach((r) => {
      var {
        type: i,
        points: n
      } = r;
      switch (i) {
        case w.LINE_TO:
          e && e.lineTo(n[0], n[1]);
          break;
        case w.MOVE_TO:
          e && e.moveTo(n[0], n[1]);
          break;
        case w.CURVE_TO:
          e && e.bezierCurveTo(n[0], n[1], n[2], n[3], n[4], n[5]);
          break;
        case w.QUAD_TO:
          e && e.quadraticCurveTo(n[0], n[1], n[2], n[3]);
          break;
        case w.ARC: {
          var [o, s, u, l, h, f, c, v] = n, d = u > l ? u : l, g = u > l ? 1 : u / l, p = u > l ? l / u : 1;
          e && (e.translate(o, s), e.rotate(c), e.scale(g, p), e.arc(0, 0, d, h, h + f, !!(1 - v)), e.scale(1 / g, 1 / p), e.rotate(-c), e.translate(-o, -s));
          break;
        }
        case w.CLOSE_PATH:
          e && e.closePath();
          break;
      }
    });
  }
  renderChildren(e) {
    this.setTextData(e), e.save();
    var t = this.parent.getStyle("text-decoration").getString(), r = this.getFontSize(), {
      glyphInfo: i
    } = this, n = e.fillStyle;
    t === "underline" && e.beginPath(), i.forEach((o, s) => {
      var {
        p0: u,
        p1: l,
        rotation: h,
        text: f
      } = o;
      e.save(), e.translate(u.x, u.y), e.rotate(h), e.fillStyle && e.fillText(f, 0, 0), e.strokeStyle && e.strokeText(f, 0, 0), e.restore(), t === "underline" && (s === 0 && e.moveTo(u.x, u.y + r / 8), e.lineTo(l.x, l.y + r / 5));
    }), t === "underline" && (e.lineWidth = r / 20, e.strokeStyle = n, e.stroke(), e.closePath()), e.restore();
  }
  getLetterSpacingAt() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
    return this.letterSpacingCache[e] || 0;
  }
  findSegmentToFitChar(e, t, r, i, n, o, s, u, l) {
    var h = o, f = this.measureText(e, u);
    u === " " && t === "justify" && r < i && (f += (i - r) / n), l > -1 && (h += this.getLetterSpacingAt(l));
    var c = this.textHeight / 20, v = this.getEquidistantPointOnPath(h, c, 0), d = this.getEquidistantPointOnPath(h + f, c, 0), g = {
      p0: v,
      p1: d
    }, p = v && d ? Math.atan2(d.y - v.y, d.x - v.x) : 0;
    if (s) {
      var y = Math.cos(Math.PI / 2 + p) * s, x = Math.cos(-p) * s;
      g.p0 = ir(ir({}, v), {}, {
        x: v.x + y,
        y: v.y + x
      }), g.p1 = ir(ir({}, d), {}, {
        x: d.x + y,
        y: d.y + x
      });
    }
    return h += f, {
      offset: h,
      segment: g,
      rotation: p
    };
  }
  measureText(e, t) {
    var {
      measuresCache: r
    } = this, i = t || this.getText();
    if (r.has(i))
      return r.get(i);
    var n = this.measureTargetText(e, i);
    return r.set(i, n), n;
  }
  // This method supposes what all custom fonts already loaded.
  // If some font will be loaded after this method call, <textPath> will not be rendered correctly.
  // You need to call this method manually to update glyphs cache.
  setTextData(e) {
    if (!this.glyphInfo) {
      var t = this.getText(), r = t.split(""), i = t.split(" ").length - 1, n = this.parent.getAttribute("dx").split().map((T) => T.getPixels("x")), o = this.parent.getAttribute("dy").getPixels("y"), s = this.parent.getStyle("text-anchor").getString("start"), u = this.getStyle("letter-spacing"), l = this.parent.getStyle("letter-spacing"), h = 0;
      !u.hasValue() || u.getValue() === "inherit" ? h = l.getPixels() : u.hasValue() && u.getValue() !== "initial" && u.getValue() !== "unset" && (h = u.getPixels());
      var f = [], c = t.length;
      this.letterSpacingCache = f;
      for (var v = 0; v < c; v++)
        f.push(typeof n[v] < "u" ? n[v] : h);
      var d = f.reduce((T, $, E) => E === 0 ? 0 : T + $ || 0, 0), g = this.measureText(e), p = Math.max(g + d, 0);
      this.textWidth = g, this.textHeight = this.getFontSize(), this.glyphInfo = [];
      var y = this.getPathLength(), x = this.getStyle("startOffset").getNumber(0) * y, b = 0;
      (s === "middle" || s === "center") && (b = -p / 2), (s === "end" || s === "right") && (b = -p), b += x, r.forEach((T, $) => {
        var {
          offset: E,
          segment: S,
          rotation: C
        } = this.findSegmentToFitChar(e, s, p, y, i, b, o, T, $);
        b = E, !(!S.p0 || !S.p1) && this.glyphInfo.push({
          // transposeX: midpoint.x,
          // transposeY: midpoint.y,
          text: r[$],
          p0: S.p0,
          p1: S.p1,
          rotation: C
        });
      });
    }
  }
  parsePathData(e) {
    if (this.pathLength = -1, !e)
      return [];
    var t = [], {
      pathParser: r
    } = e;
    for (r.reset(); !r.isEnd(); ) {
      var {
        current: i
      } = r, n = i ? i.x : 0, o = i ? i.y : 0, s = r.next(), u = s.type, l = [];
      switch (s.type) {
        case w.MOVE_TO:
          this.pathM(r, l);
          break;
        case w.LINE_TO:
          u = this.pathL(r, l);
          break;
        case w.HORIZ_LINE_TO:
          u = this.pathH(r, l);
          break;
        case w.VERT_LINE_TO:
          u = this.pathV(r, l);
          break;
        case w.CURVE_TO:
          this.pathC(r, l);
          break;
        case w.SMOOTH_CURVE_TO:
          u = this.pathS(r, l);
          break;
        case w.QUAD_TO:
          this.pathQ(r, l);
          break;
        case w.SMOOTH_QUAD_TO:
          u = this.pathT(r, l);
          break;
        case w.ARC:
          l = this.pathA(r);
          break;
        case w.CLOSE_PATH:
          A.pathZ(r);
          break;
      }
      s.type !== w.CLOSE_PATH ? t.push({
        type: u,
        points: l,
        start: {
          x: n,
          y: o
        },
        pathLength: this.calcLength(n, o, u, l)
      }) : t.push({
        type: w.CLOSE_PATH,
        points: [],
        pathLength: 0
      });
    }
    return t;
  }
  pathM(e, t) {
    var {
      x: r,
      y: i
    } = A.pathM(e).point;
    t.push(r, i);
  }
  pathL(e, t) {
    var {
      x: r,
      y: i
    } = A.pathL(e).point;
    return t.push(r, i), w.LINE_TO;
  }
  pathH(e, t) {
    var {
      x: r,
      y: i
    } = A.pathH(e).point;
    return t.push(r, i), w.LINE_TO;
  }
  pathV(e, t) {
    var {
      x: r,
      y: i
    } = A.pathV(e).point;
    return t.push(r, i), w.LINE_TO;
  }
  pathC(e, t) {
    var {
      point: r,
      controlPoint: i,
      currentPoint: n
    } = A.pathC(e);
    t.push(r.x, r.y, i.x, i.y, n.x, n.y);
  }
  pathS(e, t) {
    var {
      point: r,
      controlPoint: i,
      currentPoint: n
    } = A.pathS(e);
    return t.push(r.x, r.y, i.x, i.y, n.x, n.y), w.CURVE_TO;
  }
  pathQ(e, t) {
    var {
      controlPoint: r,
      currentPoint: i
    } = A.pathQ(e);
    t.push(r.x, r.y, i.x, i.y);
  }
  pathT(e, t) {
    var {
      controlPoint: r,
      currentPoint: i
    } = A.pathT(e);
    return t.push(r.x, r.y, i.x, i.y), w.QUAD_TO;
  }
  pathA(e) {
    var {
      rX: t,
      rY: r,
      sweepFlag: i,
      xAxisRotation: n,
      centp: o,
      a1: s,
      ad: u
    } = A.pathA(e);
    return i === 0 && u > 0 && (u -= 2 * Math.PI), i === 1 && u < 0 && (u += 2 * Math.PI), [o.x, o.y, t, r, s, u, n, i];
  }
  calcLength(e, t, r, i) {
    var n = 0, o = null, s = null, u = 0;
    switch (r) {
      case w.LINE_TO:
        return this.getLineLength(e, t, i[0], i[1]);
      case w.CURVE_TO:
        for (n = 0, o = this.getPointOnCubicBezier(0, e, t, i[0], i[1], i[2], i[3], i[4], i[5]), u = 0.01; u <= 1; u += 0.01)
          s = this.getPointOnCubicBezier(u, e, t, i[0], i[1], i[2], i[3], i[4], i[5]), n += this.getLineLength(o.x, o.y, s.x, s.y), o = s;
        return n;
      case w.QUAD_TO:
        for (n = 0, o = this.getPointOnQuadraticBezier(0, e, t, i[0], i[1], i[2], i[3]), u = 0.01; u <= 1; u += 0.01)
          s = this.getPointOnQuadraticBezier(u, e, t, i[0], i[1], i[2], i[3]), n += this.getLineLength(o.x, o.y, s.x, s.y), o = s;
        return n;
      case w.ARC: {
        n = 0;
        var l = i[4], h = i[5], f = i[4] + h, c = Math.PI / 180;
        if (Math.abs(l - f) < c && (c = Math.abs(l - f)), o = this.getPointOnEllipticalArc(i[0], i[1], i[2], i[3], l, 0), h < 0)
          for (u = l - c; u > f; u -= c)
            s = this.getPointOnEllipticalArc(i[0], i[1], i[2], i[3], u, 0), n += this.getLineLength(o.x, o.y, s.x, s.y), o = s;
        else
          for (u = l + c; u < f; u += c)
            s = this.getPointOnEllipticalArc(i[0], i[1], i[2], i[3], u, 0), n += this.getLineLength(o.x, o.y, s.x, s.y), o = s;
        return s = this.getPointOnEllipticalArc(i[0], i[1], i[2], i[3], f, 0), n += this.getLineLength(o.x, o.y, s.x, s.y), n;
      }
    }
    return 0;
  }
  getPointOnLine(e, t, r, i, n) {
    var o = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : t, s = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : r, u = (n - r) / (i - t + it), l = Math.sqrt(e * e / (1 + u * u));
    i < t && (l *= -1);
    var h = u * l, f = null;
    if (i === t)
      f = {
        x: o,
        y: s + h
      };
    else if ((s - r) / (o - t + it) === u)
      f = {
        x: o + l,
        y: s + h
      };
    else {
      var c = 0, v = 0, d = this.getLineLength(t, r, i, n);
      if (d < it)
        return null;
      var g = (o - t) * (i - t) + (s - r) * (n - r);
      g /= d * d, c = t + g * (i - t), v = r + g * (n - r);
      var p = this.getLineLength(o, s, c, v), y = Math.sqrt(e * e - p * p);
      l = Math.sqrt(y * y / (1 + u * u)), i < t && (l *= -1), h = u * l, f = {
        x: c + l,
        y: v + h
      };
    }
    return f;
  }
  getPointOnPath(e) {
    var t = this.getPathLength(), r = 0, i = null;
    if (e < -5e-5 || e - 5e-5 > t)
      return null;
    var {
      dataArray: n
    } = this;
    for (var o of n) {
      if (o && (o.pathLength < 5e-5 || r + o.pathLength + 5e-5 < e)) {
        r += o.pathLength;
        continue;
      }
      var s = e - r, u = 0;
      switch (o.type) {
        case w.LINE_TO:
          i = this.getPointOnLine(s, o.start.x, o.start.y, o.points[0], o.points[1], o.start.x, o.start.y);
          break;
        case w.ARC: {
          var l = o.points[4], h = o.points[5], f = o.points[4] + h;
          if (u = l + s / o.pathLength * h, h < 0 && u < f || h >= 0 && u > f)
            break;
          i = this.getPointOnEllipticalArc(o.points[0], o.points[1], o.points[2], o.points[3], u, o.points[6]);
          break;
        }
        case w.CURVE_TO:
          u = s / o.pathLength, u > 1 && (u = 1), i = this.getPointOnCubicBezier(u, o.start.x, o.start.y, o.points[0], o.points[1], o.points[2], o.points[3], o.points[4], o.points[5]);
          break;
        case w.QUAD_TO:
          u = s / o.pathLength, u > 1 && (u = 1), i = this.getPointOnQuadraticBezier(u, o.start.x, o.start.y, o.points[0], o.points[1], o.points[2], o.points[3]);
          break;
      }
      if (i)
        return i;
      break;
    }
    return null;
  }
  getLineLength(e, t, r, i) {
    return Math.sqrt((r - e) * (r - e) + (i - t) * (i - t));
  }
  getPathLength() {
    return this.pathLength === -1 && (this.pathLength = this.dataArray.reduce((e, t) => t.pathLength > 0 ? e + t.pathLength : e, 0)), this.pathLength;
  }
  getPointOnCubicBezier(e, t, r, i, n, o, s, u, l) {
    var h = u * $o(e) + o * wo(e) + i * Co(e) + t * Ao(e), f = l * $o(e) + s * wo(e) + n * Co(e) + r * Ao(e);
    return {
      x: h,
      y: f
    };
  }
  getPointOnQuadraticBezier(e, t, r, i, n, o, s) {
    var u = o * Po(e) + i * Ro(e) + t * Io(e), l = s * Po(e) + n * Ro(e) + r * Io(e);
    return {
      x: u,
      y: l
    };
  }
  getPointOnEllipticalArc(e, t, r, i, n, o) {
    var s = Math.cos(o), u = Math.sin(o), l = {
      x: r * Math.cos(n),
      y: i * Math.sin(n)
    };
    return {
      x: e + (l.x * s - l.y * u),
      y: t + (l.x * u + l.y * s)
    };
  }
  // TODO need some optimisations. possibly build cache only for curved segments?
  buildEquidistantCache(e, t) {
    var r = this.getPathLength(), i = t || 0.25, n = e || r / 100;
    if (!this.equidistantCache || this.equidistantCache.step !== n || this.equidistantCache.precision !== i) {
      this.equidistantCache = {
        step: n,
        precision: i,
        points: []
      };
      for (var o = 0, s = 0; s <= r; s += i) {
        var u = this.getPointOnPath(s), l = this.getPointOnPath(s + i);
        !u || !l || (o += this.getLineLength(u.x, u.y, l.x, l.y), o >= n && (this.equidistantCache.points.push({
          x: u.x,
          y: u.y,
          distance: s
        }), o -= n));
      }
    }
  }
  getEquidistantPointOnPath(e, t, r) {
    if (this.buildEquidistantCache(t, r), e < 0 || e - this.getPathLength() > 5e-5)
      return null;
    var i = Math.round(e / this.getPathLength() * (this.equidistantCache.points.length - 1));
    return this.equidistantCache.points[i] || null;
  }
}
var r2 = /^\s*data:(([^/,;]+\/[^/,;]+)(?:;([^,;=]+=[^,;=]+))?)?(?:;(base64))?,(.*)$/i;
class a2 extends Ge {
  constructor(e, t, r) {
    super(e, t, r), this.type = "image", this.loaded = !1;
    var i = this.getHrefAttribute().getString();
    if (i) {
      var n = i.endsWith(".svg") || /^\s*data:image\/svg\+xml/i.test(i);
      e.images.push(this), n ? this.loadSvg(i) : this.loadImage(i), this.isSvg = n;
    }
  }
  loadImage(e) {
    var t = this;
    return xe(function* () {
      try {
        var r = yield t.document.createImage(e);
        t.image = r;
      } catch (i) {
        console.error('Error while loading image "'.concat(e, '":'), i);
      }
      t.loaded = !0;
    })();
  }
  loadSvg(e) {
    var t = this;
    return xe(function* () {
      var r = r2.exec(e);
      if (r) {
        var i = r[5];
        r[4] === "base64" ? t.image = atob(i) : t.image = decodeURIComponent(i);
      } else
        try {
          var n = yield t.document.fetch(e), o = yield n.text();
          t.image = o;
        } catch (s) {
          console.error('Error while loading image "'.concat(e, '":'), s);
        }
      t.loaded = !0;
    })();
  }
  renderChildren(e) {
    var {
      document: t,
      image: r,
      loaded: i
    } = this, n = this.getAttribute("x").getPixels("x"), o = this.getAttribute("y").getPixels("y"), s = this.getStyle("width").getPixels("x"), u = this.getStyle("height").getPixels("y");
    if (!(!i || !r || !s || !u)) {
      if (e.save(), e.translate(n, o), this.isSvg) {
        var l = t.canvg.forkString(e, this.image, {
          ignoreMouse: !0,
          ignoreAnimation: !0,
          ignoreDimensions: !0,
          ignoreClear: !0,
          offsetX: 0,
          offsetY: 0,
          scaleWidth: s,
          scaleHeight: u
        });
        l.document.documentElement.parent = this, l.render();
      } else {
        var h = this.image;
        t.setViewBox({
          ctx: e,
          aspectRatio: this.getAttribute("preserveAspectRatio").getString(),
          width: s,
          desiredWidth: h.width,
          height: u,
          desiredHeight: h.height
        }), this.loaded && (typeof h.complete > "u" || h.complete) && e.drawImage(h, 0, 0);
      }
      e.restore();
    }
  }
  getBoundingBox() {
    var e = this.getAttribute("x").getPixels("x"), t = this.getAttribute("y").getPixels("y"), r = this.getStyle("width").getPixels("x"), i = this.getStyle("height").getPixels("y");
    return new he(e, t, e + r, t + i);
  }
}
class i2 extends Ge {
  constructor() {
    super(...arguments), this.type = "symbol";
  }
  render(e) {
  }
}
class n2 {
  constructor(e) {
    this.document = e, this.loaded = !1, e.fonts.push(this);
  }
  load(e, t) {
    var r = this;
    return xe(function* () {
      try {
        var {
          document: i
        } = r, n = yield i.canvg.parser.load(t), o = n.getElementsByTagName("font");
        Array.from(o).forEach((s) => {
          var u = i.createElement(s);
          i.definitions[e] = u;
        });
      } catch (s) {
        console.error('Error while loading font "'.concat(t, '":'), s);
      }
      r.loaded = !0;
    })();
  }
}
class Rl extends I {
  constructor(e, t, r) {
    super(e, t, r), this.type = "style";
    var i = vt(
      Array.from(t.childNodes).map((o) => o.textContent).join("").replace(/(\/\*([^*]|[\r\n]|(\*+([^*/]|[\r\n])))*\*+\/)|(^[\s]*\/\/.*)/gm, "").replace(/@import.*;/g, "")
      // remove imports
    ), n = i.split("}");
    n.forEach((o) => {
      var s = o.trim();
      if (s) {
        var u = s.split("{"), l = u[0].split(","), h = u[1].split(";");
        l.forEach((f) => {
          var c = f.trim();
          if (c) {
            var v = e.styles[c] || {};
            if (h.forEach((p) => {
              var y = p.indexOf(":"), x = p.substr(0, y).trim(), b = p.substr(y + 1, p.length - y).trim();
              x && b && (v[x] = new O(e, x, b));
            }), e.styles[c] = v, e.stylesSpecificity[c] = x1(c), c === "@font-face") {
              var d = v["font-family"].getString().replace(/"|'/g, ""), g = v.src.getString().split(",");
              g.forEach((p) => {
                if (p.indexOf('format("svg")') > 0) {
                  var y = Tl(p);
                  y && new n2(e).load(d, y);
                }
              });
            }
          }
        });
      }
    });
  }
}
Rl.parseExternalUrl = Tl;
class s2 extends Ge {
  constructor() {
    super(...arguments), this.type = "use";
  }
  setContext(e) {
    super.setContext(e);
    var t = this.getAttribute("x"), r = this.getAttribute("y");
    t.hasValue() && e.translate(t.getPixels("x"), 0), r.hasValue() && e.translate(0, r.getPixels("y"));
  }
  path(e) {
    var {
      element: t
    } = this;
    t && t.path(e);
  }
  renderChildren(e) {
    var {
      document: t,
      element: r
    } = this;
    if (r) {
      var i = r;
      if (r.type === "symbol" && (i = new _t(t, null), i.attributes.viewBox = new O(t, "viewBox", r.getAttribute("viewBox").getString()), i.attributes.preserveAspectRatio = new O(t, "preserveAspectRatio", r.getAttribute("preserveAspectRatio").getString()), i.attributes.overflow = new O(t, "overflow", r.getAttribute("overflow").getString()), i.children = r.children, r.styles.opacity = new O(t, "opacity", this.calculateOpacity())), i.type === "svg") {
        var n = this.getStyle("width", !1, !0), o = this.getStyle("height", !1, !0);
        n.hasValue() && (i.attributes.width = new O(t, "width", n.getString())), o.hasValue() && (i.attributes.height = new O(t, "height", o.getString()));
      }
      var s = i.parent;
      i.parent = this, i.render(e), i.parent = s;
    }
  }
  getBoundingBox(e) {
    var {
      element: t
    } = this;
    return t ? t.getBoundingBox(e) : null;
  }
  elementTransform() {
    var {
      document: e,
      element: t
    } = this;
    return Be.fromElement(e, t);
  }
  get element() {
    return this.cachedElement || (this.cachedElement = this.getHrefAttribute().getDefinition()), this.cachedElement;
  }
}
function nr(a, e, t, r, i, n) {
  return a[t * r * 4 + e * 4 + n];
}
function sr(a, e, t, r, i, n, o) {
  a[t * r * 4 + e * 4 + n] = o;
}
function F(a, e, t) {
  var r = a[e];
  return r * t;
}
function me(a, e, t, r) {
  return e + Math.cos(a) * t + Math.sin(a) * r;
}
class Il extends I {
  constructor(e, t, r) {
    super(e, t, r), this.type = "feColorMatrix";
    var i = ie(this.getAttribute("values").getString());
    switch (this.getAttribute("type").getString("matrix")) {
      case "saturate": {
        var n = i[0];
        i = [0.213 + 0.787 * n, 0.715 - 0.715 * n, 0.072 - 0.072 * n, 0, 0, 0.213 - 0.213 * n, 0.715 + 0.285 * n, 0.072 - 0.072 * n, 0, 0, 0.213 - 0.213 * n, 0.715 - 0.715 * n, 0.072 + 0.928 * n, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1];
        break;
      }
      case "hueRotate": {
        var o = i[0] * Math.PI / 180;
        i = [me(o, 0.213, 0.787, -0.213), me(o, 0.715, -0.715, -0.715), me(o, 0.072, -0.072, 0.928), 0, 0, me(o, 0.213, -0.213, 0.143), me(o, 0.715, 0.285, 0.14), me(o, 0.072, -0.072, -0.283), 0, 0, me(o, 0.213, -0.213, -0.787), me(o, 0.715, -0.715, 0.715), me(o, 0.072, 0.928, 0.072), 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1];
        break;
      }
      case "luminanceToAlpha":
        i = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.2125, 0.7154, 0.0721, 0, 0, 0, 0, 0, 0, 1];
        break;
    }
    this.matrix = i, this.includeOpacity = this.getAttribute("includeOpacity").hasValue();
  }
  apply(e, t, r, i, n) {
    for (var {
      includeOpacity: o,
      matrix: s
    } = this, u = e.getImageData(0, 0, i, n), l = 0; l < n; l++)
      for (var h = 0; h < i; h++) {
        var f = nr(u.data, h, l, i, n, 0), c = nr(u.data, h, l, i, n, 1), v = nr(u.data, h, l, i, n, 2), d = nr(u.data, h, l, i, n, 3), g = F(s, 0, f) + F(s, 1, c) + F(s, 2, v) + F(s, 3, d) + F(s, 4, 1), p = F(s, 5, f) + F(s, 6, c) + F(s, 7, v) + F(s, 8, d) + F(s, 9, 1), y = F(s, 10, f) + F(s, 11, c) + F(s, 12, v) + F(s, 13, d) + F(s, 14, 1), x = F(s, 15, f) + F(s, 16, c) + F(s, 17, v) + F(s, 18, d) + F(s, 19, 1);
        o && (g = 0, p = 0, y = 0, x *= d / 255), sr(u.data, h, l, i, n, 0, g), sr(u.data, h, l, i, n, 1, p), sr(u.data, h, l, i, n, 2, y), sr(u.data, h, l, i, n, 3, x);
      }
    e.clearRect(0, 0, i, n), e.putImageData(u, 0, 0);
  }
}
class kr extends I {
  constructor() {
    super(...arguments), this.type = "mask";
  }
  apply(e, t) {
    var {
      document: r
    } = this, i = this.getAttribute("x").getPixels("x"), n = this.getAttribute("y").getPixels("y"), o = this.getStyle("width").getPixels("x"), s = this.getStyle("height").getPixels("y");
    if (!o && !s) {
      var u = new he();
      this.children.forEach((d) => {
        u.addBoundingBox(d.getBoundingBox(e));
      }), i = Math.floor(u.x1), n = Math.floor(u.y1), o = Math.floor(u.width), s = Math.floor(u.height);
    }
    var l = this.removeStyles(t, kr.ignoreStyles), h = r.createCanvas(i + o, n + s), f = h.getContext("2d");
    r.screen.setDefaults(f), this.renderChildren(f), new Il(r, {
      nodeType: 1,
      childNodes: [],
      attributes: [{
        nodeName: "type",
        value: "luminanceToAlpha"
      }, {
        nodeName: "includeOpacity",
        value: "true"
      }]
    }).apply(f, 0, 0, i + o, n + s);
    var c = r.createCanvas(i + o, n + s), v = c.getContext("2d");
    r.screen.setDefaults(v), t.render(v), v.globalCompositeOperation = "destination-in", v.fillStyle = f.createPattern(h, "no-repeat"), v.fillRect(0, 0, i + o, n + s), e.fillStyle = v.createPattern(c, "no-repeat"), e.fillRect(0, 0, i + o, n + s), this.restoreStyles(t, l);
  }
  render(e) {
  }
}
kr.ignoreStyles = ["mask", "transform", "clip-path"];
var Mo = () => {
};
class o2 extends I {
  constructor() {
    super(...arguments), this.type = "clipPath";
  }
  apply(e) {
    var {
      document: t
    } = this, r = Reflect.getPrototypeOf(e), {
      beginPath: i,
      closePath: n
    } = e;
    r && (r.beginPath = Mo, r.closePath = Mo), Reflect.apply(i, e, []), this.children.forEach((o) => {
      if (!(typeof o.path > "u")) {
        var s = typeof o.elementTransform < "u" ? o.elementTransform() : null;
        s || (s = Be.fromElement(t, o)), s && s.apply(e), o.path(e), r && (r.closePath = n), s && s.unapply(e);
      }
    }), Reflect.apply(n, e, []), e.clip(), r && (r.beginPath = i, r.closePath = n);
  }
  render(e) {
  }
}
class Br extends I {
  constructor() {
    super(...arguments), this.type = "filter";
  }
  apply(e, t) {
    var {
      document: r,
      children: i
    } = this, n = t.getBoundingBox(e);
    if (n) {
      var o = 0, s = 0;
      i.forEach((y) => {
        var x = y.extraFilterDistance || 0;
        o = Math.max(o, x), s = Math.max(s, x);
      });
      var u = Math.floor(n.width), l = Math.floor(n.height), h = u + 2 * o, f = l + 2 * s;
      if (!(h < 1 || f < 1)) {
        var c = Math.floor(n.x), v = Math.floor(n.y), d = this.removeStyles(t, Br.ignoreStyles), g = r.createCanvas(h, f), p = g.getContext("2d");
        r.screen.setDefaults(p), p.translate(-c + o, -v + s), t.render(p), i.forEach((y) => {
          typeof y.apply == "function" && y.apply(p, 0, 0, h, f);
        }), e.drawImage(g, 0, 0, h, f, c - o, v - s, h, f), this.restoreStyles(t, d);
      }
    }
  }
  render(e) {
  }
}
Br.ignoreStyles = ["filter", "transform", "clip-path"];
class u2 extends I {
  constructor(e, t, r) {
    super(e, t, r), this.type = "feDropShadow", this.addStylesFromStyleDefinition();
  }
  apply(e, t, r, i, n) {
  }
}
class l2 extends I {
  constructor() {
    super(...arguments), this.type = "feMorphology";
  }
  apply(e, t, r, i, n) {
  }
}
class h2 extends I {
  constructor() {
    super(...arguments), this.type = "feComposite";
  }
  apply(e, t, r, i, n) {
  }
}
class v2 extends I {
  constructor(e, t, r) {
    super(e, t, r), this.type = "feGaussianBlur", this.blurRadius = Math.floor(this.getAttribute("stdDeviation").getNumber()), this.extraFilterDistance = this.blurRadius;
  }
  apply(e, t, r, i, n) {
    var {
      document: o,
      blurRadius: s
    } = this, u = o.window ? o.window.document.body : null, l = e.canvas;
    l.id = o.getUniqueId(), u && (l.style.display = "none", u.appendChild(l)), i1(l, t, r, i, n, s), u && u.removeChild(l);
  }
}
class f2 extends I {
  constructor() {
    super(...arguments), this.type = "title";
  }
}
class c2 extends I {
  constructor() {
    super(...arguments), this.type = "desc";
  }
}
var g2 = {
  svg: _t,
  rect: Cl,
  circle: k1,
  ellipse: B1,
  line: F1,
  polyline: Al,
  polygon: j1,
  path: A,
  pattern: U1,
  marker: z1,
  defs: G1,
  linearGradient: H1,
  radialGradient: Y1,
  stop: X1,
  animate: un,
  animateColor: W1,
  animateTransform: q1,
  font: Q1,
  "font-face": K1,
  "missing-glyph": Z1,
  glyph: wl,
  text: Ce,
  tspan: Lr,
  tref: J1,
  a: e2,
  textPath: t2,
  image: a2,
  g: on,
  symbol: i2,
  style: Rl,
  use: s2,
  mask: kr,
  clipPath: o2,
  filter: Br,
  feDropShadow: u2,
  feMorphology: l2,
  feComposite: h2,
  feColorMatrix: Il,
  feGaussianBlur: v2,
  title: f2,
  desc: c2
};
function _o(a, e) {
  var t = Object.keys(a);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(a);
    e && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(a, i).enumerable;
    })), t.push.apply(t, r);
  }
  return t;
}
function d2(a) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? _o(Object(t), !0).forEach(function(r) {
      an(a, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(t)) : _o(Object(t)).forEach(function(r) {
      Object.defineProperty(a, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return a;
}
function p2(a, e) {
  var t = document.createElement("canvas");
  return t.width = a, t.height = e, t;
}
function y2(a) {
  return Si.apply(this, arguments);
}
function Si() {
  return Si = xe(function* (a) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, t = document.createElement("img");
    return e && (t.crossOrigin = "Anonymous"), new Promise((r, i) => {
      t.onload = () => {
        r(t);
      }, t.onerror = (n, o, s, u, l) => {
        i(l);
      }, t.src = a;
    });
  }), Si.apply(this, arguments);
}
class $e {
  constructor(e) {
    var {
      rootEmSize: t = 12,
      emSize: r = 12,
      createCanvas: i = $e.createCanvas,
      createImage: n = $e.createImage,
      anonymousCrossOrigin: o
    } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.canvg = e, this.definitions = {}, this.styles = {}, this.stylesSpecificity = {}, this.images = [], this.fonts = [], this.emSizeStack = [], this.uniqueId = 0, this.screen = e.screen, this.rootEmSize = t, this.emSize = r, this.createCanvas = i, this.createImage = this.bindCreateImage(n, o), this.screen.wait(this.isImagesLoaded.bind(this)), this.screen.wait(this.isFontsLoaded.bind(this));
  }
  bindCreateImage(e, t) {
    return typeof t == "boolean" ? (r, i) => e(r, typeof i == "boolean" ? i : t) : e;
  }
  get window() {
    return this.screen.window;
  }
  get fetch() {
    return this.screen.fetch;
  }
  get ctx() {
    return this.screen.ctx;
  }
  get emSize() {
    var {
      emSizeStack: e
    } = this;
    return e[e.length - 1];
  }
  set emSize(e) {
    var {
      emSizeStack: t
    } = this;
    t.push(e);
  }
  popEmSize() {
    var {
      emSizeStack: e
    } = this;
    e.pop();
  }
  getUniqueId() {
    return "canvg".concat(++this.uniqueId);
  }
  isImagesLoaded() {
    return this.images.every((e) => e.loaded);
  }
  isFontsLoaded() {
    return this.fonts.every((e) => e.loaded);
  }
  createDocumentElement(e) {
    var t = this.createElement(e.documentElement);
    return t.root = !0, t.addStylesFromStyleDefinition(), this.documentElement = t, t;
  }
  createElement(e) {
    var t = e.nodeName.replace(/^[^:]+:/, ""), r = $e.elementTypes[t];
    return typeof r < "u" ? new r(this, e) : new N1(this, e);
  }
  createTextNode(e) {
    return new L1(this, e);
  }
  setViewBox(e) {
    this.screen.setViewBox(d2({
      document: this
    }, e));
  }
}
$e.createCanvas = p2;
$e.createImage = y2;
$e.elementTypes = g2;
function Do(a, e) {
  var t = Object.keys(a);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(a);
    e && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(a, i).enumerable;
    })), t.push.apply(t, r);
  }
  return t;
}
function De(a) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Do(Object(t), !0).forEach(function(r) {
      an(a, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(t)) : Do(Object(t)).forEach(function(r) {
      Object.defineProperty(a, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return a;
}
class xt {
  /**
   * Main constructor.
   * @param ctx - Rendering context.
   * @param svg - SVG Document.
   * @param options - Rendering options.
   */
  constructor(e, t) {
    var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    this.parser = new Ga(r), this.screen = new Vr(e, r), this.options = r;
    var i = new $e(this, r), n = i.createDocumentElement(t);
    this.document = i, this.documentElement = n;
  }
  /**
   * Create Canvg instance from SVG source string or URL.
   * @param ctx - Rendering context.
   * @param svg - SVG source string or URL.
   * @param options - Rendering options.
   * @returns Canvg instance.
   */
  static from(e, t) {
    var r = arguments;
    return xe(function* () {
      var i = r.length > 2 && r[2] !== void 0 ? r[2] : {}, n = new Ga(i), o = yield n.parse(t);
      return new xt(e, o, i);
    })();
  }
  /**
   * Create Canvg instance from SVG source string.
   * @param ctx - Rendering context.
   * @param svg - SVG source string.
   * @param options - Rendering options.
   * @returns Canvg instance.
   */
  static fromString(e, t) {
    var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, i = new Ga(r), n = i.parseFromString(t);
    return new xt(e, n, r);
  }
  /**
   * Create new Canvg instance with inherited options.
   * @param ctx - Rendering context.
   * @param svg - SVG source string or URL.
   * @param options - Rendering options.
   * @returns Canvg instance.
   */
  fork(e, t) {
    var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return xt.from(e, t, De(De({}, this.options), r));
  }
  /**
   * Create new Canvg instance with inherited options.
   * @param ctx - Rendering context.
   * @param svg - SVG source string.
   * @param options - Rendering options.
   * @returns Canvg instance.
   */
  forkString(e, t) {
    var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return xt.fromString(e, t, De(De({}, this.options), r));
  }
  /**
   * Document is ready promise.
   * @returns Ready promise.
   */
  ready() {
    return this.screen.ready();
  }
  /**
   * Document is ready value.
   * @returns Is ready or not.
   */
  isReady() {
    return this.screen.isReady();
  }
  /**
   * Render only first frame, ignoring animations and mouse.
   * @param options - Rendering options.
   */
  render() {
    var e = arguments, t = this;
    return xe(function* () {
      var r = e.length > 0 && e[0] !== void 0 ? e[0] : {};
      t.start(De({
        enableRedraw: !0,
        ignoreAnimation: !0,
        ignoreMouse: !0
      }, r)), yield t.ready(), t.stop();
    })();
  }
  /**
   * Start rendering.
   * @param options - Render options.
   */
  start() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, {
      documentElement: t,
      screen: r,
      options: i
    } = this;
    r.start(t, De(De({
      enableRedraw: !0
    }, i), e));
  }
  /**
   * Stop rendering.
   */
  stop() {
    this.screen.stop();
  }
  /**
   * Resize SVG to fit in given size.
   * @param width
   * @param height
   * @param preserveAspectRatio
   */
  resize(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
    this.documentElement.resize(e, t, r);
  }
}
export {
  e2 as AElement,
  W1 as AnimateColorElement,
  un as AnimateElement,
  q1 as AnimateTransformElement,
  he as BoundingBox,
  $o as CB1,
  wo as CB2,
  Co as CB3,
  Ao as CB4,
  xt as Canvg,
  k1 as CircleElement,
  o2 as ClipPathElement,
  G1 as DefsElement,
  c2 as DescElement,
  $e as Document,
  I as Element,
  B1 as EllipseElement,
  Il as FeColorMatrixElement,
  h2 as FeCompositeElement,
  u2 as FeDropShadowElement,
  v2 as FeGaussianBlurElement,
  l2 as FeMorphologyElement,
  Br as FilterElement,
  J as Font,
  Q1 as FontElement,
  K1 as FontFaceElement,
  on as GElement,
  wl as GlyphElement,
  Pl as GradientElement,
  a2 as ImageElement,
  F1 as LineElement,
  H1 as LinearGradientElement,
  z1 as MarkerElement,
  kr as MaskElement,
  El as Matrix,
  Z1 as MissingGlyphElement,
  S1 as Mouse,
  it as PSEUDO_ZERO,
  Ga as Parser,
  A as PathElement,
  w as PathParser,
  U1 as PatternElement,
  V as Point,
  j1 as PolygonElement,
  Al as PolylineElement,
  O as Property,
  Po as QB1,
  Ro as QB2,
  Io as QB3,
  Y1 as RadialGradientElement,
  Cl as RectElement,
  Ge as RenderedElement,
  w1 as Rotate,
  _t as SVGElement,
  n2 as SVGFontLoader,
  C1 as Scale,
  Vr as Screen,
  $l as Skew,
  A1 as SkewX,
  P1 as SkewY,
  X1 as StopElement,
  Rl as StyleElement,
  i2 as SymbolElement,
  J1 as TRefElement,
  Lr as TSpanElement,
  Ce as TextElement,
  t2 as TextPathElement,
  f2 as TitleElement,
  Be as Transform,
  $1 as Translate,
  N1 as UnknownElement,
  s2 as UseElement,
  T1 as ViewPort,
  vt as compressSpaces,
  xt as default,
  x1 as getSelectorSpecificity,
  v1 as normalizeAttributeName,
  f1 as normalizeColor,
  Tl as parseExternalUrl,
  x2 as presets,
  ie as toNumbers,
  u1 as trimLeft,
  l1 as trimRight,
  Oo as vectorMagnitude,
  Eo as vectorsAngle,
  Ti as vectorsRatio
};
