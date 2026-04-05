const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/index-I6ZkMUXM.js",
      "assets/index-Vt6rge9z.css",
      "assets/index-BabN_4ir.js",
      "assets/index-D0c8aJ6h.js",
      "assets/IconBrand-B3Jl-NM8.js",
      "assets/index-xq5QRf-C.js",
      "assets/index-BGh3BlDW.css",
      "assets/IconPerson-DHNMnMaI.js",
      "assets/IconSearch-Bps_4-EQ.js",
      "assets/index-BK3tZy1c.css",
      "assets/index-C2Rao-GK.js",
      "assets/index-BTe8S9Sm.js",
      "assets/index-2JhX-IcI.css",
      "assets/index-Bxf28ACg.css",
      "assets/index-B-Z-jirm.js",
      "assets/IconNotificationMention-CooCeV3x.js",
      "assets/index-C74YckKO.css",
      "assets/index-qhc97b7-.js",
      "assets/index-ysVQEOk1.css",
      "assets/index-CIsAt1fW.js",
      "assets/index-ZVkbsz1m.css",
      "assets/index-LJZShU7c.js",
      "assets/IconChevronLeft-D0jsyLIy.js",
      "assets/index-DIXM3pTD.css",
      "assets/index-BGsRUOja.js",
      "assets/index-pSIB7Nb3.js",
      "assets/index-DK1lyy5c.css",
      "assets/index-xdltTU7z.js",
      "assets/index-Cmj9rins.css",
      "assets/IconEyeOff-ZkC3-lBc.js",
      "assets/index-2ed4UA7H.css",
      "assets/index-1IEKIXy2.js",
      "assets/index-BkV84Ei0.css",
      "assets/index-DP3UryJH.js",
      "assets/index-BuSB1rTU.css",
      "assets/index-DTSR54_C.js",
      "assets/index-AyR1xSDo.css",
      "assets/index-DMdgLCCX.js",
      "assets/index-BYDms0MW.css",
      "assets/index-BYXGgUgY.js",
      "assets/index-DYMxdUD-.css",
      "assets/index-Caqj9Ja6.js",
      "assets/index-BfSyWtIY.css",
      "assets/index-DXhe9C_c.js",
      "assets/index-Tfl7NUeb.css",
      "assets/index-LuVztXA5.js",
      "assets/index-DxopF78T.css",
      "assets/index-DnuVaapW.js",
      "assets/index-sgOc3eJB.css",
      "assets/index-Qw-NHfIU.js",
      "assets/index-CYFMj30R.css",
      "assets/index-BwqGTeAY.js",
      "assets/index-m8m8PtY3.css",
      "assets/index-CQjjrl5L.js",
      "assets/index-DlXH7sLZ.css",
      "assets/index-G6uc7kvD.js",
      "assets/index-DcwPAf74.css",
      "assets/index-CSxZluPT.js",
      "assets/index-cSZoRzaS.css",
      "assets/index-DjTDhn6W.js",
      "assets/index-CndHYrx2.css",
    ])
) => i.map((i) => d[i]);
(() => {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) {
    return;
  }
  for (const s of document.querySelectorAll('link[rel="modulepreload"]')) {
    r(s);
  }
  new MutationObserver((s) => {
    for (const i of s) {
      if (i.type === "childList") {
        for (const a of i.addedNodes) {
          if (a.tagName === "LINK" && a.rel === "modulepreload") {
            r(a);
          }
        }
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function n(s) {
    const i = {};

    if (s.integrity) {
      i.integrity = s.integrity;
    }

    if (s.referrerPolicy) {
      i.referrerPolicy = s.referrerPolicy;
    }

    if (s.crossOrigin === "use-credentials") {
      i.credentials = "include";
    } else if (s.crossOrigin === "anonymous") {
      i.credentials = "omit";
    } else {
      i.credentials = "same-origin";
    }

    return i;
  }
  function r(s) {
    if (s.ep) {
      return;
    }
    s.ep = true;
    const i = n(s);
    fetch(s.href, i);
  }
})();
let on;
let te;
let Po;
let At;
let Pr;
let Ao;
let xo;
let Oo;
let hr;
let Qn;
let Jn;
let Lo;
const tn = {};
const Mo = [];
const Hs = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
const Array_isArray = Array.isArray;
function tt(e, t) {
  for (const n in t) {
    e[n] = t[n];
  }
  return e;
}
function fr(e) {
  if (e && e.parentNode) {
    e.parentNode.removeChild(e);
  }
}
function nt(e, t, n) {
  let r;
  let s;
  let i;
  const a = {};
  for (i in t) {
    if (i == "key") {
      r = t[i];
    } else if (i == "ref") {
      s = t[i];
    } else {
      a[i] = t[i];
    }
  }

  if (arguments.length > 2) {
    a.children = arguments.length > 3 ? on.call(arguments, 2) : n;
  }

  if (typeof e == "function" && e.defaultProps != null) {
    for (i in e.defaultProps) {
      if (a[i] === undefined) {
        a[i] = e.defaultProps[i];
      }
    }
  }

  return Qt(e, a, r, s, null);
}
function Qt(e, t, n, r, s) {
  const i = {
    type: e,
    props: t,
    key: n,
    ref: r,
    __k: null,
    __: null,
    __b: 0,
    __e: null,
    __c: null,
    constructor: undefined,
    __v: s ?? ++Po,
    __i: -1,
    __u: 0,
  };

  if (s == null && te.vnode != null) {
    te.vnode(i);
  }

  return i;
}
function Vs() {
  return { current: null };
}
function Re(e) {
  return e.children;
}

class Xe {
  constructor(e, t) {
    this.props = e;
    this.context = t;
  }

  setState(e, t) {
    let n;

    n =
      this.__s != null && this.__s != this.state
        ? this.__s
        : (this.__s = tt({}, this.state));

    if (typeof e == "function") {
      e = e(tt({}, n), this.props);
    }

    if (e) {
      tt(n, e);
    }

    if (e != null && this.__v) {
      t && this._sb.push(t);
      er(this);
    }
  }

  forceUpdate(e) {
    if (this.__v) {
      this.__e = true;
      e && this.__h.push(e);
      er(this);
    }
  }
}

function Ut(e, t) {
  if (t == null) {
    return e.__ ? Ut(e.__, e.__i + 1) : null;
  }
  let n;
  for (; t < e.__k.length; t++) {
    if ((n = e.__k[t]) != null && n.__e != null) {
      return n.__e;
    }
  }
  return typeof e.type == "function" ? Ut(e) : null;
}
function $o(e) {
  let t;
  let n;
  if ((e = e.__) != null && e.__c != null) {
    e.__e = null;
    e.__c.base = null;

    for (t = 0; t < e.__k.length; t++) {
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    }

    return $o(e);
  }
}
function er(e) {
  if (
    (!e.__d && (e.__d = true) && At.push(e) && !kn.__r++) ||
    Pr != te.debounceRendering
  ) {
    ((Pr = te.debounceRendering) || Ao)(kn);
  }
}
function kn() {
  let e;
  let t;
  let n;
  let r;
  let s;
  let i;
  let a;
  let c = 1;

  while (At.length) {
    if (At.length > c) {
      At.sort(xo);
    }

    e = At.shift();
    c = At.length;

    if (e.__d) {
      n = undefined;
      r = undefined;
      s = (r = (t = e).__v).__e;
      i = [];
      a = [];

      t.__P &&
        (((n = tt({}, r)).__v = r.__v + 1),
        te.vnode && te.vnode(n),
        mr(
          t.__P,
          n,
          r,
          t.__n,
          t.__P.namespaceURI,
          32 & r.__u ? [s] : null,
          i,
          s ?? Ut(r),
          !!(32 & r.__u),
          a
        ),
        (n.__v = r.__v),
        (n.__.__k[n.__i] = n),
        Fo(i, n, a),
        (r.__e = r.__ = null),
        n.__e != s && $o(n));
    }
  }

  kn.__r = 0;
}
function Do(e, t, n, r, s, i, a, c, u, l, h) {
  let d;
  let f;
  let m;
  let T;
  let g;
  let p;
  let _;
  const v = (r && r.__k) || Mo;
  const t_length = t.length;
  u = Ws(n, t, v, u, t_length);

  for (d = 0; d < t_length; d++) {
    if ((m = n.__k[d]) != null) {
      f = m.__i == -1 ? tn : v[m.__i] || tn;
      m.__i = d;
      p = mr(e, m, f, s, i, a, c, u, l, h);
      T = m.__e;

      m.ref &&
        f.ref != m.ref &&
        (f.ref && pr(f.ref, null, m), h.push(m.ref, m.__c || T, m));

      g == null && T != null && (g = T);

      (_ = !!(4 & m.__u)) || f.__k === m.__k
        ? (u = Uo(m, u, e, _))
        : typeof m.type == "function" && p !== undefined
        ? (u = p)
        : T && (u = T.nextSibling);

      m.__u &= -7;
    }
  }

  n.__e = g;
  return u;
}
function Ws(e, t, n, r, s) {
  let i;
  let a;
  let c;
  let u;
  let l;
  const n_length = n.length;
  let d = n_length;
  let f = 0;
  e.__k = new Array(s);

  for (i = 0; i < s; i++) {
    if ((a = t[i]) != null && typeof a != "boolean" && typeof a != "function") {
      typeof a == "string" ||
      typeof a == "number" ||
      typeof a == "number" ||
      typeof a == "bigint" ||
      typeof a == "number" ||
      typeof a == "bigint" ||
      a.constructor == String
        ? (a = e.__k[i] = Qt(null, a, null, null, null))
        : Array_isArray(a)
        ? (a = e.__k[i] = Qt(Re, { children: a }, null, null, null))
        : a.constructor === undefined && a.__b > 0
        ? (a = e.__k[i] =
            Qt(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v))
        : (e.__k[i] = a);

      u = i + f;
      a.__ = e;
      a.__b = e.__b + 1;
      c = null;
      (l = a.__i = js(a, n, u, d)) != -1 && (d--, (c = n[l]) && (c.__u |= 2));

      c == null || c.__v == null
        ? (l == -1 && (s > n_length ? f-- : s < n_length && f++),
          typeof a.type != "function" && (a.__u |= 4))
        : l != u &&
          (l == u - 1
            ? f--
            : l == u + 1
            ? f++
            : (l > u ? f-- : f++, (a.__u |= 4)));
    } else {
      e.__k[i] = null;
    }
  }

  if (d) {
    for (i = 0; i < n_length; i++) {
      if ((c = n[i]) != null && (2 & c.__u) == 0) {
        c.__e == r && (r = Ut(c));
        Ho(c, c);
      }
    }
  }
  return r;
}
function Uo(e, t, n, r) {
  let s;
  let i;
  if (typeof e.type == "function") {
    s = e.__k;

    for (i = 0; s && i < s.length; i++) {
      if (s[i]) {
        s[i].__ = e;
        t = Uo(s[i], t, n, r);
      }
    }

    return t;
  }

  if (e.__e != t) {
    r &&
      (t && e.type && !t.parentNode && (t = Ut(e)),
      n.insertBefore(e.__e, t || null));

    t = e.__e;
  }

  do {
    t = t && t.nextSibling;
  } while (t != null && t.nodeType == 8);
  return t;
}
function Ge(e, t) {
  t = t || [];

  if (e != null && typeof e != "boolean") {
    if (Array_isArray(e)) {
      e.some((n) => {
        Ge(n, t);
      });
    } else {
      t.push(e);
    }
  }

  return t;
}
function js(e, t, n, r) {
  let s;
  let i;
  let a;

  const { key, type } = e;

  let t_n = t[n];
  const h = t_n != null && (2 & t_n.__u) == 0;
  if (
    (t_n === null && key == null) ||
    (h && key == t_n.key && type == t_n.type)
  ) {
    return n;
  }
  if (r > (h ? 1 : 0)) {
    s = n - 1;

    for (i = n + 1; s >= 0 || i < t.length; ) {
      if (
        (t_n = t[(a = s >= 0 ? s-- : i++)]) != null &&
        (2 & t_n.__u) == 0 &&
        key == t_n.key &&
        type == t_n.type
      ) {
        return a;
      }
    }
  }
  return -1;
}
function Ar(e, t, n) {
  if (t[0] == "-") {
    e.setProperty(t, n ?? "");
  } else {
    e[t] = n == null ? "" : typeof n != "number" || Hs.test(t) ? n : `${n}px`;
  }
}
function ln(e, t, n, r, s) {
  let i;
  let a;
  e: if (t == "style") {
    if (typeof n == "string") {
      e.style.cssText = n;
    } else {
      if (typeof r == "string") {
        e.style.cssText = r = "";
      }

      if (r) {
        for (t in r) {
          if (!n || t in n) {
            Ar(e.style, t, "");
          }
        }
      }

      if (n) {
        for (t in n) {
          if (!r || n[t] != r[t]) {
            Ar(e.style, t, n[t]);
          }
        }
      }
    }
  } else if (t[0] == "o" && t[1] == "n") {
    i = t != (t = t.replace(Oo, "$1"));
    a = t.toLowerCase();

    t =
      a in e || t == "onFocusOut" || t == "onFocusOut" || t == "onFocusIn"
        ? a.slice(2)
        : t.slice(2);

    if (!e.l) {
      e.l = {};
    }

    e.l[t + i] = n;

    if (n) {
      if (r) {
        n.u = r.u;
      } else {
        n.u = hr;
        e.addEventListener(t, i ? Jn : Qn, i);
      }
    } else {
      e.removeEventListener(t, i ? Jn : Qn, i);
    }
  } else {
    if (s == "http://www.w3.org/2000/svg") {
      t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    } else if (
      t != "width" &&
      t != "height" &&
      t != "href" &&
      t != "list" &&
      t != "form" &&
      t != "tabIndex" &&
      t != "download" &&
      t != "rowSpan" &&
      t != "colSpan" &&
      t != "role" &&
      t != "popover" &&
      t in e
    ) {
      try {
        e[t] = n ?? "";
        break e;
      } catch {}
    }

    if (typeof n != "function") {
      if (n == null || (n === false && t[4] != "-")) {
        e.removeAttribute(t);
      } else {
        e.setAttribute(t, t == "popover" && n == 1 ? "" : n);
      }
    }
  }
}
function xr(e) {
  return function (t) {
    if (this.l) {
      const n = this.l[t.type + e];
      if (t.t == null) {
        t.t = hr++;
      } else if (t.t < n.u) {
        return;
      }
      return n(te.event ? te.event(t) : t);
    }
  };
}
function mr(e, t, n, r, s, i, a, c, u, l) {
  let h;
  let d;
  let f;
  let m;
  let T;
  let g;
  let p;
  let _;
  let v;
  let y;
  let C;
  let w;
  let b;
  let k;
  let R;
  let N;
  let P;
  const t_type = t.type;
  if (t.constructor !== undefined) {
    return null;
  }

  if (128 & n.__u) {
    u = !!(32 & n.__u);
    i = [(c = t.__e = n.__e)];
  }

  if ((h = te.__b)) {
    h(t);
  }

  e: if (typeof t_type == "function") {
    try {
      _ = t.props;
      v = "prototype" in t_type && t_type.prototype.render;
      y = (h = t_type.contextType) && r[h.__c];
      C = h ? (y ? y.props.value : h.__) : r;

      if (n.__c) {
        p = (d = t.__c = n.__c).__ = d.__E;
      } else {
        v
          ? (t.__c = d = new t_type(_, C))
          : ((t.__c = d = new Xe(_, C)),
            (d.constructor = t_type),
            (d.render = qs));

        y && y.sub(d);
        d.state || (d.state = {});
        d.__n = r;
        f = d.__d = true;
        d.__h = [];
        d._sb = [];
      }

      if (v && d.__s == null) {
        d.__s = d.state;
      }

      if (v && t_type.getDerivedStateFromProps != null) {
        d.__s == d.state && (d.__s = tt({}, d.__s));
        tt(d.__s, t_type.getDerivedStateFromProps(_, d.__s));
      }

      m = d.props;
      T = d.state;
      d.__v = t;

      if (f) {
        if (
          v &&
          t_type.getDerivedStateFromProps == null &&
          d.componentWillMount != null
        ) {
          d.componentWillMount();
        }

        if (v && d.componentDidMount != null) {
          d.__h.push(d.componentDidMount);
        }
      } else {
        if (
          v &&
          t_type.getDerivedStateFromProps == null &&
          _ !== m &&
          d.componentWillReceiveProps != null
        ) {
          d.componentWillReceiveProps(_, C);
        }

        if (
          t.__v == n.__v ||
          (!d.__e &&
            d.shouldComponentUpdate != null &&
            d.shouldComponentUpdate(_, d.__s, C) === false)
        ) {
          if (t.__v != n.__v) {
            d.props = _;
            d.state = d.__s;
            d.__d = false;
          }

          t.__e = n.__e;
          t.__k = n.__k;

          t.__k.some((U) => {
            if (U) {
              U.__ = t;
            }
          });

          for (w = 0; w < d._sb.length; w++) {
            d.__h.push(d._sb[w]);
          }

          d._sb = [];

          if (d.__h.length) {
            a.push(d);
          }

          break e;
        }

        if (d.componentWillUpdate != null) {
          d.componentWillUpdate(_, d.__s, C);
        }

        if (v && d.componentDidUpdate != null) {
          d.__h.push(() => {
            d.componentDidUpdate(m, T, g);
          });
        }
      }

      d.context = C;
      d.props = _;
      d.__P = e;
      d.__e = false;
      b = te.__r;
      k = 0;

      if (v) {
        d.state = d.__s;
        d.__d = false;

        if (b) {
          b(t);
        }

        h = d.render(d.props, d.state, d.context);

        for (R = 0; R < d._sb.length; R++) {
          d.__h.push(d._sb[R]);
        }

        d._sb = [];
      } else {
        do {
          d.__d = false;

          if (b) {
            b(t);
          }

          h = d.render(d.props, d.state, d.context);
          d.state = d.__s;
        } while (d.__d && ++k < 25);
      }

      d.state = d.__s;

      if (d.getChildContext != null) {
        r = tt(tt({}, r), d.getChildContext());
      }

      if (v && !f && d.getSnapshotBeforeUpdate != null) {
        g = d.getSnapshotBeforeUpdate(m, T);
      }

      N = h;

      if (h != null && h.type === Re && h.key == null) {
        N = Bo(h.props.children);
      }

      c = Do(e, Array_isArray(N) ? N : [N], t, n, r, s, i, a, c, u, l);
      d.base = t.__e;
      t.__u &= -161;

      if (d.__h.length) {
        a.push(d);
      }

      if (p) {
        d.__E = d.__ = null;
      }
    } catch (U) {
      t.__v = null;

      if (u || i != null) {
        if (U.then) {
          for (
            t.__u |= u ? 160 : 128;
            c && c.nodeType == 8 && c.nextSibling;

          ) {
            c = c.nextSibling;
          }
          i[i.indexOf(c)] = null;
          t.__e = c;
        } else {
          for (P = i.length; P--; ) {
            fr(i[P]);
          }
          tr(t);
        }
      } else {
        t.__e = n.__e;
        t.__k = n.__k;

        if (!U.then) {
          tr(t);
        }
      }

      te.__e(U, t, n);
    }
  } else {
    if (i == null && t.__v == n.__v) {
      t.__k = n.__k;
      t.__e = n.__e;
    } else {
      c = t.__e = zs(n.__e, t, n, r, s, i, a, u, l);
    }
  }

  if ((h = te.diffed)) {
    h(t);
  }

  return 128 & t.__u || c;
}
function tr(e) {
  if (e && e.__c) {
    e.__c.__e = true;
  }

  if (e && e.__k) {
    e.__k.forEach(tr);
  }
}
function Fo(e, t, n) {
  for (let r = 0; r < n.length; r++) {
    pr(n[r], n[++r], n[++r]);
  }

  if (te.__c) {
    te.__c(t, e);
  }

  e.some((s) => {
    try {
      e = s.__h;
      s.__h = [];

      e.some((i) => {
        i.call(s);
      });
    } catch (i) {
      te.__e(i, s.__v);
    }
  });
}
function Bo(e) {
  return typeof e != "object" || e == null || (e.__b && e.__b > 0)
    ? e
    : Array_isArray(e)
    ? e.map(Bo)
    : tt({}, e);
}
function zs(e, t, n, r, s, i, a, c, u) {
  let l;
  let h;
  let d;
  let f;
  let m;
  let T;
  let g;
  let p = n.props || tn;

  const { props, type } = t;

  type == "svg"
    ? (s = "http://www.w3.org/2000/svg")
    : type == "math"
    ? (s = "http://www.w3.org/1998/Math/MathML")
    : s || "http://www.w3.org/1999/xhtml";

  if (i != null) {
    for (l = 0; l < i.length; l++) {
      if (
        (m = i[l]) &&
        "setAttribute" in m == !!type &&
        (type ? m.localName == type : m.nodeType == 3)
      ) {
        e = m;
        i[l] = null;
        break;
      }
    }
  }

  if (e == null) {
    if (type == null) {
      return document.createTextNode(props);
    }
    e = document.createElementNS(s, type, props.is && props);

    if (c) {
      te.__m && te.__m(t, i);
      c = false;
    }

    i = null;
  }
  if (type == null) {
    if (p !== props && (!c || e.data != props)) {
      e.data = props;
    }
  } else {
    i = i && on.call(e.childNodes);

    if (!c && i != null) {
      p = {};

      for (l = 0; l < e.attributes.length; l++) {
        p[(m = e.attributes[l]).name] = m.value;
      }
    }

    for (l in p) {
      m = p[l];

      if (l != "children") {
        if (l == "dangerouslySetInnerHTML") {
          d = m;
        } else if (!(l in props)) {
          if (
            (l == "value" && "defaultValue" in props) ||
            (l == "checked" && "defaultChecked" in props)
          ) {
            continue;
          }
          ln(e, l, null, m, s);
        }
      }
    }
    for (l in props) {
      m = props[l];

      switch (l) {
        case "children":
          f = m;
          break;
        case "dangerouslySetInnerHTML":
          h = m;
          break;
        case "value":
          T = m;
          break;
        case "checked":
          g = m;
          break;
        default:
          ln(e, l, m, p[l], s);
          break;
      }
    }
    if (h) {
      if (!c && (!d || (h.__html != d.__html && h.__html != e.innerHTML))) {
        e.innerHTML = h.__html;
      }

      t.__k = [];
    } else {
      if (d) {
        e.innerHTML = "";
      }

      Do(
        t.type == "template" ? e.content : e,
        Array_isArray(f) ? f : [f],
        t,
        n,
        r,
        type == "foreignObject" ? "http://www.w3.org/1999/xhtml" : s,
        i,
        a,
        i ? i[0] : n.__k && Ut(n, 0),
        c,
        u
      );

      if (i != null) {
        for (l = i.length; l--; ) {
          fr(i[l]);
        }
      }
    }

    if (!c) {
      l = "value";

      type == "progress" && T == null
        ? e.removeAttribute("value")
        : T != null &&
          (T !== e[l] ||
            (type == "progress" && !T) ||
            (type == "option" && T != p[l])) &&
          ln(e, l, T, p[l], s);

      l = "checked";
      g != null && g != e[l] && ln(e, l, g, p[l], s);
    }
  }
  return e;
}
function pr(e, t, n) {
  try {
    if (typeof e == "function") {
      const r = typeof e.__u == "function";

      if (r) {
        e.__u();
      }

      if (!r || t != null) {
        e.__u = e(t);
      }
    } else {
      e.current = t;
    }
  } catch (s) {
    te.__e(s, n);
  }
}
function Ho(e, t, n) {
  let r;
  let s;

  if (te.unmount) {
    te.unmount(e);
  }

  if ((r = e.ref)) {
    if (!r.current || r.current == e.__e) {
      pr(r, null, t);
    }
  }

  if ((r = e.__c) != null) {
    if (r.componentWillUnmount) {
      try {
        r.componentWillUnmount();
      } catch (i) {
        te.__e(i, t);
      }
    }
    r.base = null;
    r.__P = null;
  }

  if ((r = e.__k)) {
    for (s = 0; s < r.length; s++) {
      if (r[s]) {
        Ho(r[s], t, n || typeof e.type != "function");
      }
    }
  }

  if (!n) {
    fr(e.__e);
  }

  e.__c = undefined;
  e.__ = undefined;
  e.__e = undefined;
}
function qs(e, t, n) {
  return this.constructor(e, n);
}
function nn(e, t, n) {
  let r;
  let s;
  let i;
  let a;

  if (t == document) {
    t = document.documentElement;
  }

  if (te.__) {
    te.__(e, t);
  }

  s = (r = typeof n == "function") ? null : (n && n.__k) || t.__k;
  i = [];
  a = [];

  mr(
    t,
    (e = ((!r && n) || t).__k = nt(Re, null, [e])),
    s || tn,
    tn,
    t.namespaceURI,
    !r && n ? [n] : s ? null : t.firstChild ? on.call(t.childNodes) : null,
    i,
    !r && n ? n : s ? s.__e : t.firstChild,
    r,
    a
  );

  Fo(i, e, a);
}
function Vo(e, t) {
  nn(e, t, Vo);
}
function Wo(e, t, n) {
  let r;
  let s;
  let i;
  let a;
  const c = tt({}, e.props);

  if (e.type && e.type.defaultProps) {
    a = e.type.defaultProps;
  }

  for (i in t) {
    if (i == "key") {
      r = t[i];
    } else if (i == "ref") {
      s = t[i];
    } else {
      c[i] = t[i] === undefined && a != null ? a[i] : t[i];
    }
  }

  if (arguments.length > 2) {
    c.children = arguments.length > 3 ? on.call(arguments, 2) : n;
  }

  return Qt(e.type, c, r || e.key, s || e.ref, null);
}
function Bt(e) {
  function t(n) {
    if (!this.getChildContext) {
      r = new Set();
      s = {};
      s[t.__c] = this;
      this.getChildContext = () => s;

      this.componentWillUnmount = () => {
        r = null;
      };

      this.shouldComponentUpdate = function (i) {
        if (this.props.value != i.value) {
          r.forEach((a) => {
            a.__e = true;
            er(a);
          });
        }
      };

      this.sub = (i) => {
        r.add(i);
        const i_componentWillUnmount = i.componentWillUnmount;
        i.componentWillUnmount = () => {
          if (r) {
            r.delete(i);
          }

          if (i_componentWillUnmount) {
            i_componentWillUnmount.call(i);
          }
        };
      };
    }

    return n.children;
  }
  t.__c = `__cC${Lo++}`;
  t.__ = e;
  t.Provider = t;
  t.__l = t;

  (t.Consumer = (n, r) => n.children(r)).contextType = t;

  return t;
}
on = Mo.slice;

te = {
  __e(e, t, n, r) {
    let s;
    let i;
    let a;

    while ((t = t.__)) {
      if ((s = t.__c) && !s.__) {
        try {
          if ((i = s.constructor) && i.getDerivedStateFromError != null) {
            s.setState(i.getDerivedStateFromError(e));
            a = s.__d;
          }

          if (s.componentDidCatch != null) {
            s.componentDidCatch(e, r || {});
            a = s.__d;
          }

          if (a) {
            return (s.__E = s);
          }
        } catch (c) {
          e = c;
        }
      }
    }

    throw e;
  },
};

Po = 0;

Xe.prototype.render = Re;
At = [];

Ao =
  typeof Promise == "function"
    ? Promise.prototype.then.bind(Promise.resolve())
    : setTimeout;

xo = (e, t) => e.__v.__b - t.__v.__b;

kn.__r = 0;
Oo = /(PointerCapture)$|Capture$/i;
hr = 0;
Qn = xr(false);
Jn = xr(true);
Lo = 0;
let Ys = 0;
function o(e, t, n, r, s, i) {
  if (!t) {
    ({});
  }

  let a;
  let c;
  let u = t;
  if ("ref" in u) {
    u = {};

    for (c in t) {
      if (c == "ref") {
        a = t[c];
      } else {
        u[c] = t[c];
      }
    }
  }
  const l = {
    type: e,
    props: u,
    key: n,
    ref: a,
    __k: null,
    __: null,
    __b: 0,
    __e: null,
    __c: null,
    constructor: undefined,
    __v: --Ys,
    __i: -1,
    __u: 0,
    __source: s,
    __self: i,
  };
  if (typeof e == "function" && (a = e.defaultProps)) {
    for (c in a) {
      if (u[c] === undefined) {
        u[c] = a[c];
      }
    }
  }

  if (te.vnode) {
    te.vnode(l);
  }

  return l;
}
let wt;
let _e;
let Dn;
let Or;
let Ft = 0;
const jo = [];
const ye = te;

const { __b, __r, diffed, __c, unmount, __ } = ye;

function Ht(e, t) {
  if (ye.__h) {
    ye.__h(_e, e, Ft || t);
  }

  Ft = 0;
  const n = _e.__H || (_e.__H = { __: [], __h: [] });

  if (e >= n.__.length) {
    n.__.push({});
  }

  return n.__[e];
}
function A(e) {
  Ft = 1;
  return gr(Yo, e);
}
function gr(e, t, n) {
  const r = Ht(wt++, 2);
  r.t = e;

  if (
    !r.__c &&
    ((r.__ = [
      n ? n(t) : Yo(undefined, t),
      (c) => {
        const u = r.__N ? r.__N[0] : r.__[0];
        const l = r.t(u, c);

        if (u !== l) {
          r.__N = [l, r.__[1]];
          r.__c.setState({});
        }
      },
    ]),
    (r.__c = _e),
    !_e.__f)
  ) {
    const s = function (c, u, l) {
      if (!r.__c.__H) {
        return true;
      }
      const h = r.__c.__H.__.filter((f) => !!f.__c);
      if (h.every((f) => !f.__N)) {
        return (
          !shouldComponentUpdate || shouldComponentUpdate.call(this, c, u, l)
        );
      }
      let d = r.__c.props !== c;

      h.forEach((f) => {
        if (f.__N) {
          const m = f.__[0];
          f.__ = f.__N;
          f.__N = undefined;

          if (m !== f.__[0]) {
            d = true;
          }
        }
      });

      return (
        (shouldComponentUpdate && shouldComponentUpdate.call(this, c, u, l)) ||
        d
      );
    };
    _e.__f = true;

    var { shouldComponentUpdate, componentWillUpdate } = _e;

    _e.componentWillUpdate = function (c, u, l) {
      if (this.__e) {
        const h = shouldComponentUpdate;
        shouldComponentUpdate = undefined;
        s(c, u, l);
        shouldComponentUpdate = h;
      }

      if (componentWillUpdate) {
        componentWillUpdate.call(this, c, u, l);
      }
    };

    _e.shouldComponentUpdate = s;
  }

  return r.__N || r.__;
}
function B(e, t) {
  const n = Ht(wt++, 3);

  if (!ye.__s && _r(n.__H, t)) {
    n.__ = e;
    n.u = t;
    _e.__H.__h.push(n);
  }
}
function an(e, t) {
  const n = Ht(wt++, 4);

  if (!ye.__s && _r(n.__H, t)) {
    n.__ = e;
    n.u = t;
    _e.__h.push(n);
  }
}
function I(e) {
  Ft = 5;

  return Ce(
    () => ({
      current: e,
    }),
    []
  );
}
function vr(e, t, n) {
  Ft = 6;

  an(
    () => {
      if (typeof e == "function") {
        const r = e(t());
        return () => {
          e(null);

          if (r && typeof r == "function") {
            r();
          }
        };
      }
      if (e) {
        e.current = t();

        return () => (e.current = null);
      }
    },
    n == null ? n : n.concat(e)
  );
}
function Ce(e, t) {
  const n = Ht(wt++, 7);

  if (_r(n.__H, t)) {
    n.__ = e();
    n.__H = t;
    n.__h = e;
  }

  return n.__;
}
function S(e, t) {
  Ft = 8;

  return Ce(() => e, t);
}
function An(e) {
  const t = _e.context[e.__c];
  const n = Ht(wt++, 9);
  n.c = e;
  return t ? (n.__ == null && ((n.__ = true), t.sub(_e)), t.props.value) : e.__;
}
function zo(e, t) {
  if (ye.useDebugValue) {
    ye.useDebugValue(t ? t(e) : e);
  }
}
function qo() {
  const e = Ht(wt++, 11);
  if (!e.__) {
    for (var t = _e.__v; t !== null && !t.__m && t.__ !== null; ) {
      t = t.__;
    }
    const n = t.__m || (t.__m = [0, 0]);
    e.__ = `P${n[0]}-${n[1]++}`;
  }
  return e.__;
}
function Xs() {
  for (let e; (e = jo.shift()); ) {
    if (e.__P && e.__H) {
      try {
        e.__H.__h.forEach(En);
        e.__H.__h.forEach(nr);
        e.__H.__h = [];
      } catch (t) {
        e.__H.__h = [];
        ye.__e(t, e.__v);
      }
    }
  }
}

ye.__b = (e) => {
  _e = null;

  if (__b) {
    __b(e);
  }
};

ye.__ = (e, t) => {
  if (e && t.__k && t.__k.__m) {
    e.__m = t.__k.__m;
  }

  if (__) {
    __(e, t);
  }
};

ye.__r = (e) => {
  if (__r) {
    __r(e);
  }

  wt = 0;
  const t = (_e = e.__c).__H;

  if (t) {
    if (Dn === _e) {
      t.__h = [];
      _e.__h = [];

      t.__.forEach((n) => {
        if (n.__N) {
          n.__ = n.__N;
        }

        n.u = undefined;
        n.__N = undefined;
      });
    } else {
      t.__h.forEach(En);
      t.__h.forEach(nr);
      t.__h = [];
      wt = 0;
    }
  }

  Dn = _e;
};

ye.diffed = (e) => {
  if (diffed) {
    diffed(e);
  }

  const e_c = e.__c;

  if (e_c && e_c.__H) {
    e_c.__H.__h.length &&
      ((jo.push(e_c) !== 1 && Or === ye.requestAnimationFrame) ||
        ((Or = ye.requestAnimationFrame) || Gs)(Xs));

    e_c.__H.__.forEach((n) => {
      if (n.u) {
        n.__H = n.u;
      }

      n.u = undefined;
    });
  }

  Dn = null;
  _e = null;
};

ye.__c = (e, t) => {
  t.some((n) => {
    try {
      n.__h.forEach(En);

      n.__h = n.__h.filter((r) => !r.__ || nr(r));
    } catch (r) {
      t.some((s) => {
        if (s.__h) {
          s.__h = [];
        }
      });

      t = [];
      ye.__e(r, n.__v);
    }
  });

  if (__c) {
    __c(e, t);
  }
};

ye.unmount = (e) => {
  if (unmount) {
    unmount(e);
  }

  let t;
  const e_c = e.__c;

  if (e_c && e_c.__H) {
    e_c.__H.__.forEach((r) => {
      try {
        En(r);
      } catch (s) {
        t = s;
      }
    });

    e_c.__H = undefined;
    t && ye.__e(t, e_c.__v);
  }
};

const Br = typeof requestAnimationFrame == "function";
function Gs(e) {
  let t;

  const n = () => {
    clearTimeout(r);

    if (Br) {
      cancelAnimationFrame(t);
    }

    setTimeout(e);
  };

  var r = setTimeout(n, 35);

  if (Br) {
    t = requestAnimationFrame(n);
  }
}
function En(e) {
  const t = _e;
  const e_c = e.__c;

  if (typeof e_c == "function") {
    e.__c = undefined;
    e_c();
  }

  _e = t;
}
function nr(e) {
  const t = _e;
  e.__c = e.__();
  _e = t;
}
function _r(e, t) {
  return (
    !e ||
    e.length !== t.length ||
    e.length !== t.length ||
    t.some((n, r) => n !== e[r])
  );
}
function Yo(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Xo(e, t) {
  for (const n in t) {
    e[n] = t[n];
  }
  return e;
}
function rr(e, t) {
  for (const n in e) {
    if (n !== "__source" && !(n in t)) {
      return true;
    }
  }
  for (const r in t) {
    if (r !== "__source" && e[r] !== t[r]) {
      return true;
    }
  }
  return false;
}
function Go(e, t) {
  const n = t();
  const r = A({ t: { __: n, u: t } });
  const s = r[0].t;
  const [, i] = r;

  an(() => {
    s.__ = n;
    s.u = t;

    if (Un(s)) {
      i({ t: s });
    }
  }, [e, n, t]);

  B(() => {
    if (Un(s)) {
      i({ t: s });
    }

    return e(() => {
      if (Un(s)) {
        i({ t: s });
      }
    });
  }, [e]);

  return n;
}
function Un(e) {
  let t;
  let n;

  const { u, __: _ } = e;

  try {
    const i = u();
    return !(
      ((t = _) === (n = i) && (t !== 0 || 1 / t == 1 / n)) ||
      (t != t && n != n)
    );
  } catch {
    return true;
  }
}
function Ko(e) {
  e();
}
function Zo(e) {
  return e;
}
function Qo() {
  return [false, Ko];
}
const Jo = an;

class or {
  constructor(e, t) {
    this.props = e;
    this.context = t;
  }

  shouldComponentUpdate(e, t) {
    return rr(this.props, e) || rr(this.state, t);
  }
}

function es(e, t) {
  function n(s) {
    const i = this.props.ref;
    const a = i == s.ref;

    if (!a && i) {
      if (i.call) {
        i(null);
      } else {
        i.current = null;
      }
    }

    if (t) {
      if (!!t(this.props, s)) {
        return !a;
      }
    }

    return rr(this.props, s);
  }
  function r(s) {
    this.shouldComponentUpdate = n;
    return nt(e, s);
  }
  r.displayName = `Memo(${e.displayName || e.name})`;
  r.prototype.isReactComponent = true;
  r.__f = true;
  r.type = e;
  return r;
}
(or.prototype = new Xe()).isPureReactComponent = true;

const {
  __b: _b,
  __e,
  unmount: unmount_2,
  event,
  vnode,
  __r: _r_1,
  diffed: diffed_2,
} = te;

te.__b = (e) => {
  if (e.type && e.type.__f && e.ref) {
    e.props.ref = e.ref;
    e.ref = null;
  }

  if (_b) {
    _b(e);
  }
};
const Ks =
  (typeof Symbol !== "undefined" &&
    Symbol.for &&
    Symbol.for("react.forward_ref")) ||
  3911;
function ts(e) {
  class t {
    constructor(n) {
      const r = Xo({}, n);
      delete r.ref;
      return e(r, n.ref || null);
    }

    static componentWillUnmount() {
      nn(null, t.v);
      t.v = null;
      t.h = null;
    }
  }

  t.$$typeof = Ks;
  t.render = e;
  t.prototype.isReactComponent = true;
  t.__f = true;
  t.displayName = `ForwardRef(${e.displayName || e.name})`;
  return t;
}

const Vr = (e, t) => e == null || Ge(Ge(e).map(t));

const Zs = {
  map: Vr,
  forEach: Vr,
  count(e) {
    return e ? Ge(e).length : 0;
  },
  only(e) {
    const t = Ge(e);
    if (t.length !== 1) {
      throw "Children.only";
    }
    return t[0];
  },
  toArray: Ge,
};

te.__e = (e, t, n, r) => {
  if (e.then) {
    let s;
    for (let i = t; (i = i.__); ) {
      if ((s = i.__c) && s.__c) {
        if (t.__e == null) {
          t.__e = n.__e;
          t.__k = n.__k;
        }

        return s.__c(e, t);
      }
    }
  }
  __e(e, t, n, r);
};
function ns(e, t, n) {
  if (e) {
    e.__c &&
      e.__c.__H &&
      (e.__c.__H.__.forEach((r) => {
        if (typeof r.__c == "function") {
          r.__c();
        }
      }),
      (e.__c.__H = null));

    (e = Xo({}, e)).__c != null &&
      (e.__c.__P === n && (e.__c.__P = t), (e.__c.__e = true), (e.__c = null));

    e.__k = e.__k && e.__k.map((r) => ns(r, t, n));
  }

  return e;
}
function rs(e, t, n) {
  if (e && n) {
    e.__v = null;

    e.__k = e.__k && e.__k.map((r) => rs(r, t, n));

    e.__c &&
      e.__c.__P === t &&
      (e.__e && n.appendChild(e.__e), (e.__c.__e = true), (e.__c.__P = n));
  }

  return e;
}

class xt {
  constructor() {
    this.__u = 0;
    this.o = null;
    this.__b = null;
  }

  componentWillUnmount() {
    this.o = [];
  }

  render(e, t) {
    if (this.__b) {
      if (this.__v.__k) {
        const n = document.createElement("div");
        const r = this.__v.__k[0].__c;
        this.__v.__k[0] = ns(this.__b, n, (r.__O = r.__P));
      }
      this.__b = null;
    }
    const s = t.__a && nt(Re, null, e.fallback);

    if (s) {
      s.__u &= -33;
    }

    return [nt(Re, null, t.__a || e.children), s];
  }
}

function os(e) {
  const t = e.__.__c;
  return t && t.__a && t.__a(e);
}
function me(e) {
  let t;
  let n;
  let r;
  let s = null;
  function i(a) {
    if (!t) {
      e().then(
        (c) => {
          if (c) {
            s = c.default || c;
          }

          r = true;
        },
        (c) => {
          n = c;
          r = true;
        }
      );
    }

    if (n) {
      throw n;
    }

    if (!r) {
      throw t;
    }
    return s ? nt(s, a) : null;
  }
  i.displayName = "Lazy";
  i.__f = true;
  return i;
}

class Xt {
  constructor() {
    this.i = null;
    this.l = null;
  }

  render(e) {
    this.i = null;
    this.l = new Map();
    const t = Ge(e.children);

    if (e.revealOrder && e.revealOrder[0] === "b") {
      t.reverse();
    }

    for (let n = t.length; n--; ) {
      this.l.set(t[n], (this.i = [1, 0, this.i]));
    }
    return e.children;
  }
}

te.unmount = (e) => {
  const e_c = e.__c;

  if (e_c && e_c.__R) {
    e_c.__R();
  }

  if (e_c && 32 & e.__u) {
    e.type = null;
  }

  if (unmount_2) {
    unmount_2(e);
  }
};

(xt.prototype = new Xe()).__c = function (e, t) {
  const t_c = t.__c;
  const r = this;

  if (r.o == null) {
    r.o = [];
  }

  r.o.push(t_c);
  const s = os(r.__v);

  const a = () => {
    if (!i) {
      i = true;
      t_c.__R = null;
      s ? s(c) : c();
    }
  };

  t_c.__R = a;
  var c = () => {
    if (!--r.__u) {
      if (r.state.__a) {
        const u = r.state.__a;
        r.__v.__k[0] = rs(u, u.__c.__P, u.__c.__O);
      }
      let l;
      for (r.setState({ __a: (r.__b = null) }); (l = r.o.pop()); ) {
        l.forceUpdate();
      }
    }
  };

  if (!r.__u++ && 32 & t.__u) {
    if (32 & t.__u) {
      r.setState({ __a: (r.__b = r.__v.__k[0]) });
    }
  }

  e.then(a, a);
};

const jr = (e, t, n) => {
  if (++n[1] === n[0]) {
    e.l.delete(t);
  }

  if (e.props.revealOrder && (e.props.revealOrder[0] !== "t" || !e.l.size)) {
    for (n = e.i; n; ) {
      while (n.length > 3) {
        n.pop()();
      }

      if (n[1] < n[0]) {
        break;
      }
      e.i = n = n[2];
    }
  }
};
function Js(e) {
  this.getChildContext = () => e.context;

  return e.children;
}
function ei(e) {
  const t = this;
  const e_h = e.h;

  if (t.h && t.h !== e_h) {
    t.componentWillUnmount();
  }

  if (!t.v) {
    for (var r = t.__v; r !== null && !r.__m && r.__ !== null; ) {
      r = r.__;
    }
    t.h = e_h;

    t.v = {
      nodeType: 1,
      parentNode: e_h,
      childNodes: [],
      __k: { __m: r.__m },
      contains() {
        return true;
      },
      insertBefore(s, i) {
        this.childNodes.push(s);
        t.h.insertBefore(s, i);
      },
      removeChild(s) {
        this.childNodes.splice(this.childNodes.indexOf(s) >>> 1, 1);
        t.h.removeChild(s);
      },
    };
  }

  nn(nt(Js, { context: t.context }, e.__v), t.v);
}
function Ct(e, t) {
  const n = nt(ei, { __v: e, h: t });
  n.containerInfo = t;
  return n;
}

(Xt.prototype = new Xe()).__a = function (e) {
  const t = this;
  const n = os(t.__v);
  const r = t.l.get(e);
  r[0]++;

  return (s) => {
    const i = () => {
      if (t.props.revealOrder) {
        r.push(s);
        jr(t, e, r);
      } else {
        s();
      }
    };

    if (n) {
      n(i);
    } else {
      i();
    }
  };
};

Xt.prototype.componentDidUpdate = Xt.prototype.componentDidMount = function () {
  const e = this;
  this.l.forEach((t, n) => {
    jr(e, n, t);
  });
};

const ss =
  (typeof Symbol !== "undefined" &&
    Symbol.for &&
    Symbol.for("react.element")) ||
  60103;

const ti =
  /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/;

const ni = /^on(Ani|Tra|Tou|BeforeInp|Compo)/;
const ri = /[A-Z0-9]/g;
const oi = typeof document !== "undefined";

const si = (e) =>
  (typeof Symbol !== "undefined" && typeof Symbol() == "symbol"
    ? /fil|che|rad/
    : /fil|che|ra/
  ).test(e);

function is(e, t, n) {
  if (t.__k == null) {
    t.textContent = "";
  }

  nn(e, t);

  if (typeof n == "function") {
    n();
  }

  return e ? e.__c : null;
}
function ii(e, t, n) {
  Vo(e, t);

  if (typeof n == "function") {
    n();
  }

  return e ? e.__c : null;
}
Xe.prototype.isReactComponent = {};

[
  "componentWillMount",
  "componentWillReceiveProps",
  "componentWillUpdate",
].forEach((e) => {
  Object.defineProperty(Xe.prototype, e, {
    configurable: true,
    get() {
      return this[`UNSAFE_${e}`];
    },
    set(t) {
      Object.defineProperty(this, e, {
        configurable: true,
        writable: true,
        value: t,
      });
    },
  });
});

function ai() {}
function ci() {
  return this.cancelBubble;
}
function li() {
  return this.defaultPrevented;
}
te.event = (e) => {
  if (event) {
    e = event(e);
  }

  e.persist = ai;
  e.isPropagationStopped = ci;
  e.isDefaultPrevented = li;
  e.nativeEvent = e;
  return e.nativeEvent;
};
let wr;

const ui = {
  enumerable: false,
  configurable: true,
  get() {
    return this.class;
  },
};

te.vnode = (e) => {
  if (typeof e.type == "string") {
    ((t) => {
      const { props, type } = t;

      const s = {};
      const i = !type.includes("-");
      for (let a in props) {
        let props_a = props[a];
        if (
          !(
            (a === "value" && "defaultValue" in props && props_a == null) ||
            (oi && a === "children" && type === "noscript") ||
            a === "class" ||
            a === "className"
          )
        ) {
          let u = a.toLowerCase();

          if (a === "defaultValue" && "value" in props && props.value == null) {
            a = "value";
          } else if (a === "download" && props_a === true) {
            props_a = "";
          } else if (u === "translate" && props_a === "no") {
            props_a = false;
          } else if (u[0] === "o" && u[1] === "n") {
            if (u === "ondoubleclick") {
              a = "ondblclick";
            } else if (
              u !== "onchange" ||
              (type !== "input" && type !== "textarea") ||
              si(props.type)
            ) {
              if (u === "onfocus") {
                a = "onfocusin";
              } else if (u === "onblur") {
                a = "onfocusout";
              } else if (ni.test(a)) {
                a = u;
              }
            } else {
              u = a = "oninput";
            }
          } else if (i && ti.test(a)) {
            a = a.replace(ri, "-$&").toLowerCase();
          } else if (props_a === null) {
            props_a = undefined;
          }

          if (u === "oninput" && s[(a = u)]) {
            a = "oninputCapture";
          }

          s[a] = props_a;
        }
      }

      if (type == "select" && s.multiple && Array.isArray(s.value)) {
        s.value = Ge(props.children).forEach((l) => {
          l.props.selected = s.value.includes(l.props.value);
        });
      }

      if (type == "select" && s.defaultValue != null) {
        s.value = Ge(props.children).forEach((l) => {
          l.props.selected = s.multiple
            ? s.defaultValue.includes(l.props.value)
            : s.defaultValue == l.props.value;
        });
      }

      if (props.class && !props.className) {
        s.class = props.class;
        Object.defineProperty(s, "className", ui);
      } else if (
        (props.className && !props.class) ||
        (props.class && props.className)
      ) {
        s.class = s.className = props.className;
      }

      t.props = s;
    })(e);
  }

  e.$$typeof = ss;

  if (vnode) {
    vnode(e);
  }
};
te.__r = (e) => {
  if (_r_1) {
    _r_1(e);
  }

  wr = e.__c;
};
te.diffed = (e) => {
  if (diffed_2) {
    diffed_2(e);
  }

  const { props, __e: _e_1 } = e;

  if (
    _e_1 != null &&
    e.type === "textarea" &&
    "value" in props &&
    props.value !== _e_1.value
  ) {
    _e_1.value = props.value == null ? "" : props.value;
  }

  wr = null;
};
const di = {
  ReactCurrentDispatcher: {
    current: {
      readContext(e) {
        return wr.__n[e.__c].props.value;
      },
      useCallback: S,
      useContext: An,
      useDebugValue: zo,
      useDeferredValue: Zo,
      useEffect: B,
      useId: qo,
      useImperativeHandle: vr,
      useInsertionEffect: Jo,
      useLayoutEffect: an,
      useMemo: Ce,
      useReducer: gr,
      useRef: I,
      useState: A,
      useSyncExternalStore: Go,
      useTransition: Qo,
    },
  },
};
function hi(e) {
  return nt.bind(null, e);
}
function xn(e) {
  return !!e && e.$$typeof === ss;
}
function fi(e) {
  return xn(e) && e.type === Re;
}
function mi(e) {
  return (
    !!e &&
    !!e.displayName &&
    (typeof e.displayName == "string" || e.displayName instanceof String) &&
    e.displayName.startsWith("Memo(")
  );
}
function pi(e) {
  return xn(e) ? Wo(...arguments) : e;
}
function as(e) {
  return !!e.__k && (nn(null, e), true);
}
function gi(e) {
  return (e && (e.base || (e.nodeType === 1 && e))) || null;
}

const vi = (e, t) => e(t);

const _i = (e, t) => e(t);

const cs = Re;
const wi = xn;

const Gt = {
  useState: A,
  useId: qo,
  useReducer: gr,
  useEffect: B,
  useLayoutEffect: an,
  useInsertionEffect: Jo,
  useTransition: Qo,
  useDeferredValue: Zo,
  useSyncExternalStore: Go,
  startTransition: Ko,
  useRef: I,
  useImperativeHandle: vr,
  useMemo: Ce,
  useCallback: S,
  useContext: An,
  useDebugValue: zo,
  version: "18.3.1",
  Children: Zs,
  render: is,
  hydrate: ii,
  unmountComponentAtNode: as,
  createPortal: Ct,
  createElement: nt,
  createContext: Bt,
  createFactory: hi,
  cloneElement: pi,
  createRef: Vs,
  Fragment: Re,
  isValidElement: xn,
  isElement: wi,
  isFragment: fi,
  isMemo: mi,
  findDOMNode: gi,
  Component: Xe,
  PureComponent: or,
  memo: es,
  forwardRef: ts,
  flushSync: _i,
  unstable_batchedUpdates: vi,
  StrictMode: cs,
  Suspense: xt,
  SuspenseList: Xt,
  lazy: me,
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: di,
};

function yi(e) {
  return {
    render(t) {
      is(t, e);
    },
    unmount() {
      as(e);
    },
  };
}
const Ci = "modulepreload";

const Ti = (e) => `/${e}`;

const Gr = {};

const pe = (t, n, r) => {
  let s = Promise.resolve();
  if (n && n.length > 0) {
    let u = (l) =>
      Promise.all(
        l.map((h) =>
          Promise.resolve(h).then(
            (d) => ({
              status: "fulfilled",
              value: d,
            }),
            (d) => ({
              status: "rejected",
              reason: d,
            })
          )
        )
      );
    document.getElementsByTagName("link");
    const a = document.querySelector("meta[property=csp-nonce]");
    const c = a?.nonce || a?.getAttribute("nonce");
    s = u(
      n.map((l) => {
        l = Ti(l);

        if (l in Gr) {
          return;
        }

        Gr[l] = true;
        const h = l.endsWith(".css");
        const d = h ? '[rel="stylesheet"]' : "";
        if (document.querySelector(`link[href="${l}"]${d}`)) {
          return;
        }
        const f = document.createElement("link");
        f.rel = h ? "stylesheet" : Ci;

        if (!h) {
          f.as = "script";
        }

        f.crossOrigin = "";
        f.href = l;

        if (c) {
          f.setAttribute("nonce", c);
        }

        document.head.appendChild(f);

        if (h) {
          return new Promise((m, T) => {
            f.addEventListener("load", m);

            f.addEventListener("error", () =>
              T(new Error(`Unable to preload CSS for ${l}`))
            );
          });
        }
      })
    );
  }
  function i(a) {
    const c = new Event("vite:preloadError", { cancelable: true });
    c.payload = a;
    window.dispatchEvent(c);

    if (!c.defaultPrevented) {
      throw a;
    }
  }
  return s.then((a) => {
    for (const c of a || []) {
      if (c.status === "rejected") {
        i(c.reason);
      }
    }
    return t().catch(i);
  });
};

const Ei = {};
function un(e, t) {
  for (const n in t) {
    e[n] = t[n];
  }
  return e;
}
function Ri(e, t, n) {
  let r;
  const s = /(?:\?([^#]*))?(#.*)?$/;
  const i = e.match(s);
  const a = {};
  if (i && i[1]) {
    for (let c = i[1].split("&"), u = 0; u < c.length; u++) {
      const l = c[u].split("=");
      a[decodeURIComponent(l[0])] = decodeURIComponent(l.slice(1).join("="));
    }
  }
  e = sr(e.replace(s, ""));
  t = sr(t || "");
  for (let h = Math.max(e.length, t.length), d = 0; d < h; d++) {
    if (t[d] && t[d].charAt(0) === ":") {
      const f = t[d].replace(/(^:|[+*?]+$)/g, "");
      const m = (t[d].match(/[+*?]+$/) || Ei)[0] || "";
      const T = ~m.indexOf("+");
      const g = ~m.indexOf("*");
      const p = e[d] || "";
      if (!p && !g && (!m.includes("?") || T)) {
        r = false;
        break;
      }
      a[f] = decodeURIComponent(p);

      if (T || g) {
        a[f] = e.slice(d).map(decodeURIComponent).join("/");
        break;
      }
    } else if (t[d] !== e[d]) {
      r = false;
      break;
    }
  }
  return (n.default === true || r !== false) && a;
}
function Ni(e, t) {
  return e.rank < t.rank ? 1 : e.rank > t.rank ? -1 : e.index - t.index;
}
function Si(e, t) {
  e.index = t;

  e.rank = ((n) => (n.props.default ? 0 : sr(n.props.path).map(ki).join("")))(
    e
  );

  return e.props;
}
function sr(e) {
  return e.replace(/(^\/+|\/+$)/g, "").split("/");
}
function ki(e) {
  return e.charAt(0) == ":"
    ? 1 + "*+?".indexOf(e.charAt(e.length - 1)) || 4
    : 5;
}
const bi = {};
const Ot = [];
const Jt = [];
let Fe = null;
const yr = { url: Cr() };
const ls = Bt(yr);
function Ii() {
  const e = An(ls);
  if (e === yr) {
    const t = A()[1];
    B(() => {
      Jt.push(t);

      return () => Jt.splice(Jt.indexOf(t), 1);
    }, []);
  }
  return [e, $];
}
function Cr() {
  let e;
  return `${
    (e =
      Fe && Fe.location
        ? Fe.location
        : Fe && Fe.getCurrentLocation
        ? Fe.getCurrentLocation()
        : typeof location !== "undefined"
        ? location
        : bi).pathname || ""
  }${e.search || ""}`;
}

export function $(e, t = false) {
  if (typeof e != "string" && e.url) {
    t = e.replace;
    e = e.url;
  }

  if (
    ((n) => {
      for (let r = Ot.length; r--; ) {
        if (Ot[r].canRoute(n)) {
          return true;
        }
      }
      return false;
    })(e)
  ) {
    ((n, r = "push") => {
      if (Fe && Fe[r]) {
        Fe[r](n);
      } else if (typeof history !== "undefined" && history[`${r}State`]) {
        history[`${r}State`](null, null, n);
      }
    })(e, t ? "replace" : "push");
  }

  return us(e);
}

function us(e) {
  let t = false;
  for (let n = 0; n < Ot.length; n++) {
    if (Ot[n].routeTo(e)) {
      t = true;
    }
  }
  return t;
}
function Pi(e) {
  if (e && e.getAttribute) {
    const t = e.getAttribute("href");
    const n = e.getAttribute("target");
    if (t && t.match(/^\//g) && (!n || n.match(/^_?self$/i))) {
      return $(t);
    }
  }
}
function Ai(e) {
  if (e.stopImmediatePropagation) {
    e.stopImmediatePropagation();
  }

  if (e.stopPropagation) {
    e.stopPropagation();
  }

  e.preventDefault();
  return false;
}
function xi(e) {
  if (
    !(
      e.ctrlKey ||
      e.metaKey ||
      e.metaKey ||
      e.altKey ||
      e.metaKey ||
      e.altKey ||
      e.shiftKey ||
      e.metaKey ||
      e.altKey ||
      e.shiftKey ||
      e.button
    )
  ) {
    let e_target = e.target;
    do {
      if (e_target.localName === "a" && e_target.getAttribute("href")) {
        if (
          e_target.hasAttribute("data-native") ||
          e_target.hasAttribute("native")
        ) {
          return;
        }
        if (Pi(e_target)) {
          return Ai(e);
        }
      }
    } while ((e_target = e_target.parentNode));
  }
}
function ds(e) {
  if (e.history) {
    Fe = e.history;
  }

  this.state = { url: e.url || Cr() };
}
un((ds.prototype = new Xe()), {
  shouldComponentUpdate(e) {
    return (
      e.static !== true ||
      e.url !== this.props.url ||
      e.url !== this.props.url ||
      e.onChange !== this.props.onChange
    );
  },
  canRoute(e) {
    const t = Ge(this.props.children);
    return this.g(t, e) !== undefined;
  },
  routeTo(e) {
    this.setState({ url: e });
    const t = this.canRoute(e);

    if (!this.p) {
      this.forceUpdate();
    }

    return t;
  },
  componentWillMount() {
    this.p = true;
  },
  componentDidMount() {
    const e = this;

    if (!Kr) {
      Kr = true;

      Fe ||
        addEventListener("popstate", () => {
          us(Cr());
        });

      addEventListener("click", xi);
    }

    Ot.push(this);

    if (Fe) {
      this.u = Fe.listen((t) => {
        const n = t.location || t;
        e.routeTo(`${n.pathname || ""}${n.search || ""}`);
      });
    }

    this.p = false;
  },
  componentWillUnmount() {
    if (typeof this.u == "function") {
      this.u();
    }

    Ot.splice(Ot.indexOf(this), 1);
  },
  componentWillUpdate() {
    this.p = true;
  },
  componentDidUpdate() {
    this.p = false;
  },
  g(e, t) {
    e = e.filter(Si).sort(Ni);

    for (const r of e) {
      const s = Ri(t, r.props.path, r.props);
      if (s) {
        return [r, s];
      }
    }
  },
  render(e, t) {
    let n;
    let r;
    const e_onChange = e.onChange;
    const t_url = t.url;
    let a = this.c;
    const c = this.g(Ge(e.children), t_url);

    if (c) {
      r = Wo(
        c[0],
        un(un({ url: t_url, matches: (n = c[1]) }, n), {
          key: undefined,
          ref: undefined,
        })
      );
    }

    if (t_url !== (a && a.url)) {
      un(
        yr,
        (a = this.c =
          {
            url: t_url,
            previous: a && a.url,
            current: r,
            path: r ? r.props.path : null,
            matches: n,
          })
      );

      a.router = this;
      a.active = r ? [r] : [];
      for (let u = Jt.length; u--; ) {
        Jt[u]({});
      }

      if (typeof e_onChange == "function") {
        e_onChange(a);
      }
    }

    return nt(ls.Provider, { value: a }, r);
  },
});

const Zr = (e) => {
  let t;
  const n = new Set();

  const r = (l, h) => {
    const d = typeof l == "function" ? l(t) : l;
    if (!Object.is(d, t)) {
      const f = t;

      t =
        h ?? (typeof d != "object" || d === null) ? d : Object.assign({}, t, d);

      n.forEach((m) => m(t, f));
    }
  };

  const s = () => t;

  const c = {
    setState: r,
    getState: s,
    getInitialState: () => u,
    subscribe: (l) => {
      n.add(l);

      return () => n.delete(l);
    },
  };

  const u = (t = e(r, s, c));
  return c;
};

const Oi = (e) => (e ? Zr(e) : Zr);

const Li = (e) => e;

function Mi(e, t = Li) {
  const n = Gt.useSyncExternalStore(
    e.subscribe,
    Gt.useCallback(() => t(e.getState()), [e, t]),
    Gt.useCallback(() => t(e.getInitialState()), [e, t])
  );
  Gt.useDebugValue(n);
  return n;
}

const Qr = (e) => {
  const t = Oi(e);

  const n = (r) => Mi(t, r);

  Object.assign(n, t);
  return n;
};

const ot = (e) => (e ? Qr(e) : Qr);

function Tr(e, t) {
  let n;
  try {
    n = e();
  } catch {
    return;
  }
  return {
    getItem: (s) => {
      let i;

      const a = (u) => (u === null ? null : JSON.parse(u, undefined));

      const c = (i = n.getItem(s)) != null ? i : null;
      return c instanceof Promise ? c.then(a) : a(c);
    },
    setItem: (s, i) => n.setItem(s, JSON.stringify(i, undefined)),
    removeItem: (s) => n.removeItem(s),
  };
}

const ir = (e) => (t) => {
  try {
    const n = e(t);
    return n instanceof Promise
      ? n
      : {
          then(r) {
            return ir(r)(n);
          },
          catch(r) {
            return this;
          },
        };
  } catch (n) {
    return {
      then(r) {
        return this;
      },
      catch(r) {
        return ir(r)(n);
      },
    };
  }
};

const Er = (e, t) => (n, r, s) => {
  let i = {
    storage: Tr(() => localStorage),
    partialize: (g) => g,
    version: 0,
    merge: (g, p) => ({
      ...p,
      ...g,
    }),
    ...t,
  };

  let a = false;
  const c = new Set();
  const u = new Set();
  let i_storage = i.storage;
  if (!i_storage) {
    return e(
      (...g) => {
        console.warn(
          `[zustand persist middleware] Unable to update item '${i.name}', the given storage is currently unavailable.`
        );

        n(...g);
      },
      r,
      s
    );
  }

  const h = () => {
    const g = i.partialize({ ...r() });
    return i_storage.setItem(i.name, { state: g, version: i.version });
  };

  const s_setState = s.setState;
  s.setState = (g, p) => {
    s_setState(g, p);
    return h();
  };
  const f = e(
    (...g) => {
      n(...g);
      return h();
    },
    r,
    s
  );
  s.getInitialState = () => f;
  let m;
  const T = () => {
    let p;
    if (!i_storage) {
      return;
    }
    a = false;

    c.forEach((v) => {
      let y;
      return v((y = r()) != null ? y : f);
    });

    const _ =
      (p = i.onRehydrateStorage) == null ||
      p.call(i, (g = r()) != null ? g : f) ||
      p.call(i, (g = r()) != null ? g : f) ||
      undefined;
    return ir(i_storage.getItem.bind(i_storage))(i.name)
      .then((v) => {
        if (v) {
          if (typeof v.version == "number" && v.version !== i.version) {
            if (i.migrate) {
              const y = i.migrate(v.state, v.version);
              return y instanceof Promise
                ? y.then((C) => [true, C])
                : [true, y];
            }
            console.error(
              "State loaded from storage couldn't be migrated since no migrate function was provided"
            );
          } else {
            return [false, v.state];
          }
        }
        return [false, undefined];
      })
      .then((v) => {
        let y;
        const [C, w] = v;
        m = i.merge(w, (y = r()) != null ? y : f);
        n(m, true);

        if (C) {
          return h();
        }
      })
      .then(() => {
        _?.(m, undefined);
        m = r();
        a = true;

        u.forEach((v) => v(m));
      })
      .catch((v) => {
        _?.(undefined, v);
      });
  };

  s.persist = {
    setOptions: (g) => {
      i = { ...i, ...g };

      if (g.storage) {
        i_storage = g.storage;
      }
    },
    clearStorage: () => {
      i_storage?.removeItem(i.name);
    },
    getOptions: () => i,
    rehydrate: () => T(),
    hasHydrated: () => a,
    onHydrate: (g) => {
      c.add(g);

      return () => {
        c.delete(g);
      };
    },
    onFinishHydration: (g) => {
      u.add(g);

      return () => {
        u.delete(g);
      };
    },
  };

  if (!i.skipHydration) {
    T();
  }

  return m || f;
};

const Di = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";

const Ui = () => {
  if (typeof window !== "undefined") {
    const e = localStorage.getItem("theme-storage");
    if (e) {
      try {
        return JSON.parse(e).state?.theme || "system";
      } catch {
        return "system";
      }
    }
  }
  return "system";
};

const Rn = (e) => {
  const t = e === "system" ? Di() : e;
  document.documentElement.setAttribute("data-theme", t);
};

const Fi = ot()(
  Er(
    (e) => ({
      theme: Ui(),

      setTheme: (t) => {
        Rn(t);
        e({ theme: t });
      },

      toggleTheme: () =>
        e((t) => {
          const n = t.theme === "light" ? "dark" : "light";
          Rn(n);
          return { theme: n };
        }),
    }),
    {
      name: "theme-storage",
      onRehydrateStorage: () => (e) => {
        if (e?.theme) {
          Rn(e.theme);
        }
      },
    }
  )
);

if (typeof window !== "undefined") {
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", () => {
      if (Fi.getState().theme === "system") {
        Rn("system");
      }
    });
}

const hs = ot((e) => ({
  isOpen: false,
  images: [],
  initialIndex: 0,
  open: (t, n = 0) => e({ isOpen: true, images: t, initialIndex: n }),
  close: () => e({ isOpen: false, images: [], initialIndex: 0 }),
}));

const Me = {
  OK: 200,
  CREATED: 201,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  CONFLICT: 409,
  UNPROCESSABLE_ENTITY: 422,
  TOO_MANY_REQUESTS: 429,
  INTERNAL_SERVER_ERROR: 500,
};

function ke(e) {
  return (
    e instanceof Error && "status" in e && "code" in e && e.name === "ApiError"
  );
}
const de = {
  BAD_REQUEST: "BAD_REQUEST",
  UNAUTHORIZED: "UNAUTHORIZED",
  ACCESS_DENIED: "ACCESS_DENIED",
  ENTITY_NOT_FOUND: "ENTITY_NOT_FOUND",
  ENTITY_ALREADY_EXISTS: "ENTITY_ALREADY_EXISTS",
  VALIDATION_ERROR: "VALIDATION_ERROR",
  BUSINESS_RULE_VIOLATION: "BUSINESS_RULE_VIOLATION",
  RATE_LIMIT_EXCEEDED: "RATE_LIMIT_EXCEEDED",
  UNKNOWN_ERROR: "UNKNOWN_ERROR",
  NETWORK_ERROR: "NETWORK_ERROR",
  TIMEOUT: "TIMEOUT",
  CAPTCHA_FAILED: "CAPTCHA_FAILED",
  OTP_INVALID: "OTP_INVALID",
  ACCOUNT_DEACTIVATED: "ACCOUNT_DEACTIVATED",
  ACCOUNT_EMAIL_DOMAIN_NOT_ALLOWED: "ACCOUNT_EMAIL_DOMAIN_NOT_ALLOWED",
  ACCOUNT_INVALID_CREDENTIALS: "ACCOUNT_INVALID_CREDENTIALS",
  ACCOUNT_TEMPORARILY_LOCKED: "ACCOUNT_TEMPORARILY_LOCKED",
  ACCOUNT_CURRENT_PASSWORD_INCORRECT: "ACCOUNT_CURRENT_PASSWORD_INCORRECT",
  SESSION_EXPIRED: "SESSION_EXPIRED",
  SESSION_REVOKED: "SESSION_REVOKED",
  SESSION_INVALID_REFRESH_TOKEN: "SESSION_INVALID_REFRESH_TOKEN",
  MISSING_FLOW_TOKEN: "MISSING_FLOW_TOKEN",
  PROFILE_USERNAME_TAKEN: "PROFILE_USERNAME_TAKEN",
  PROFILE_RESTRICTION_ACTIVE: "PROFILE_RESTRICTION_ACTIVE",
  PROFILE_MODIFICATION_RESTRICTED: "PROFILE_MODIFICATION_RESTRICTED",
  CONTENT_MODERATION_FAILED: "CONTENT_MODERATION_FAILED",
  FILE_TOO_LARGE: "FILE_TOO_LARGE",
  UNSUPPORTED_FILE_TYPE: "UNSUPPORTED_FILE_TYPE",
  UPLOAD_FAILED: "UPLOAD_FAILED",
  VIDEO_REQUIRES_VERIFICATION: "VIDEO_REQUIRES_VERIFICATION",
};
function Bi(e) {
  return "accessToken" in e;
}
function Hi(e) {
  return "accessToken" in e;
}
const Vi = 4000; /* 4e3 */

const Dt = ot((e, t) => ({
  toasts: [],

  addToast: (n) => {
    const r = `toast-${Date.now()}-${Math.random().toString(36).slice(2)}`;
    const s = n.duration ?? Vi;

    e((i) => ({
      toasts: [...i.toasts, { ...n, id: r, duration: s }],
    }));

    if (s > 0) {
      setTimeout(() => {
        t().removeToast(r);
      }, s);
    }

    return r;
  },

  removeToast: (n) => {
    e((r) => ({
      toasts: r.toasts.filter((s) => s.id !== n),
    }));
  },

  clearAll: () => {
    e({ toasts: [] });
  },
}));

const dt = {
  success: (e, t) =>
    Dt.getState().addToast({ type: "success", message: e, duration: t }),
  error: (e, t) =>
    Dt.getState().addToast({ type: "error", message: e, duration: t }),
  warning: (e, t) =>
    Dt.getState().addToast({ type: "warning", message: e, duration: t }),
  info: (e, t) =>
    Dt.getState().addToast({ type: "info", message: e, duration: t }),
};

function Wi() {
  const e = "device_id";
  let t = localStorage.getItem(e);

  if (!t) {
    t = crypto.randomUUID();
    localStorage.setItem(e, t);
  }

  return t;
}
const Jr = Wi();
class fs {
  baseURL;
  defaultTimeout;
  defaultHeaders;
  accessToken = null;
  refreshTokenCallback = null;
  onUnauthorizedCallback = null;
  isRefreshing = false;
  refreshPromise = null;
  constructor(t) {
    this.baseURL = t.baseURL;
    this.defaultTimeout = t.timeout ?? 30000 /* 3e4 */;

    this.defaultHeaders = {
      "Content-Type": "application/json",
      "X-Requested-With": "XMLHttpRequest",
      ...t.headers,
    };
  }
  setAccessToken(t) {
    this.accessToken = t;
  }
  getAccessToken() {
    return this.accessToken;
  }
  setRefreshTokenCallback(t) {
    this.refreshTokenCallback = t;
  }
  setOnUnauthorizedCallback(t) {
    this.onUnauthorizedCallback = t;
  }
  notifyError(t) {
    if (t.status !== Me.UNAUTHORIZED) {
      if (t.code === "PHONE_VERIFICATION_REQUIRED") {
        window.dispatchEvent(new Event("phone-verification-required"));
        return;
      }
      if (t.code === "WRITE_ACCESS_RESTRICTED") {
        dt.error("Вы не можете сделать это сегодня. Попробуйте завтра.");
        return;
      }
      dt.error(t.message || "Произошла ошибка");
    }
  }
  buildUrl(t) {
    const n = this.baseURL.replace(/\/$/, "");
    const r = t.startsWith("/") ? t : `/${t}`;
    return `${n}${r}`;
  }
  buildHeaders(t) {
    const n = new Headers({ ...this.defaultHeaders, ...t });

    if (this.accessToken) {
      n.set("Authorization", `Bearer ${this.accessToken}`);
    }

    n.set("X-Device-Id", Jr);
    return n;
  }
  async handleResponse(t) {
    if (t.status === Me.NO_CONTENT) {
      return null;
    }
    let n;
    try {
      n = await t.json();
    } catch {
      if (!t.ok) {
        throw this.createApiError(
          t.status,
          "Invalid response format",
          "INVALID_RESPONSE"
        );
      }
      return null;
    }
    if (!t.ok) {
      const r = n;
      const r_error = r.error;
      const i = r_error && typeof r_error == "object" ? r_error : r;
      let i_errors = i.errors;
      if (i.violations && Array.isArray(i.violations)) {
        i_errors = {};
        for (const c of i.violations) {
          if (!i_errors[c.field]) {
            i_errors[c.field] = [];
          }

          i_errors[c.field].push(c.message);
        }
      }
      throw this.createApiError(
        t.status,
        i.detail ||
          i.message ||
          i.message ||
          i.title ||
          i.message ||
          i.title ||
          "Request failed",
        i.code || this.mapStatusToErrorCode(t.status),
        i_errors
      );
    }
    return n;
  }
  mapStatusToErrorCode(t) {
    switch (t) {
      case Me.BAD_REQUEST: {
        return de.BAD_REQUEST;
      }
      case Me.UNAUTHORIZED: {
        return de.UNAUTHORIZED;
      }
      case Me.FORBIDDEN: {
        return de.ACCESS_DENIED;
      }
      case Me.NOT_FOUND: {
        return de.ENTITY_NOT_FOUND;
      }
      case Me.CONFLICT: {
        return de.ENTITY_ALREADY_EXISTS;
      }
      case Me.UNPROCESSABLE_ENTITY: {
        return de.VALIDATION_ERROR;
      }
      case Me.TOO_MANY_REQUESTS: {
        return de.RATE_LIMIT_EXCEEDED;
      }
      default: {
        return de.UNKNOWN_ERROR;
      }
    }
  }
  createApiError(t, n, r, s) {
    const i = new Error(n);
    i.status = t;
    i.code = r;
    i.errors = s;
    i.name = "ApiError";
    return i;
  }
  async refreshAccessToken() {
    return this.refreshTokenCallback
      ? this.isRefreshing && this.refreshPromise
        ? this.refreshPromise
        : ((this.isRefreshing = true),
          (this.refreshPromise = this.refreshTokenCallback().finally(() => {
            this.isRefreshing = false;
            this.refreshPromise = null;
          })),
          this.refreshPromise)
      : null;
  }
  async executeRequest(t, n, r, s, i = false) {
    const a = this.buildUrl(n);
    const c = this.buildHeaders(s?.headers);
    const u = new AbortController();
    const l = s?.timeout ?? this.defaultTimeout;

    const h = setTimeout(() => u.abort(), l);

    try {
      const d = await fetch(a, {
        method: t,
        headers: c,
        body: r ? JSON.stringify(r) : undefined,
        signal: u.signal,
        credentials: "include",
        ...s,
      });
      clearTimeout(h);
      const f =
        n.startsWith("/auth/") ||
        n.startsWith("/sign-") ||
        n.startsWith("/sign-") ||
        n.startsWith("/verify-") ||
        n.startsWith("/sign-") ||
        n.startsWith("/verify-") ||
        n.startsWith("/resend-") ||
        n.startsWith("/sign-") ||
        n.startsWith("/verify-") ||
        n.startsWith("/resend-") ||
        n.startsWith("/refresh") ||
        n.startsWith("/sign-") ||
        n.startsWith("/verify-") ||
        n.startsWith("/resend-") ||
        n.startsWith("/refresh") ||
        n.startsWith("/forgot-") ||
        n.startsWith("/sign-") ||
        n.startsWith("/verify-") ||
        n.startsWith("/resend-") ||
        n.startsWith("/refresh") ||
        n.startsWith("/forgot-") ||
        n.startsWith("/reset-") ||
        n.startsWith("/sign-") ||
        n.startsWith("/verify-") ||
        n.startsWith("/resend-") ||
        n.startsWith("/refresh") ||
        n.startsWith("/forgot-") ||
        n.startsWith("/reset-") ||
        n.startsWith("/login/");
      if (d.status === Me.UNAUTHORIZED && !i && !f && this.accessToken) {
        const m = await this.refreshAccessToken();
        if (m) {
          this.setAccessToken(m);
          return this.executeRequest(t, n, r, s, true);
        }
        this.onUnauthorizedCallback?.();

        throw this.createApiError(
          Me.UNAUTHORIZED,
          "Session expired",
          de.UNAUTHORIZED
        );
      }
      return await this.handleResponse(d);
    } catch (d) {
      clearTimeout(h);

      if (d instanceof Error) {
        if (d.name === "AbortError") {
          const m = this.createApiError(0, "Request timeout", de.TIMEOUT);

          if (!i) {
            this.notifyError(m);
          }

          throw m;
        }
        if (d.name === "ApiError") {
          if (!i) {
            this.notifyError(d);
          }

          throw d;
        }
        const f = this.createApiError(
          0,
          d.message || "Network error",
          de.NETWORK_ERROR
        );

        if (!i) {
          this.notifyError(f);
        }

        throw f;
      }

      throw d;
    }
  }
  async get(t, n) {
    return this.executeRequest("GET", t, undefined, n);
  }
  async post(t, n, r) {
    return this.executeRequest("POST", t, n, r);
  }
  async put(t, n, r) {
    return this.executeRequest("PUT", t, n, r);
  }
  async patch(t, n, r) {
    return this.executeRequest("PATCH", t, n, r);
  }
  async delete(t, n) {
    return this.executeRequest("DELETE", t, undefined, n);
  }
  async head(t, n) {
    const r = this.buildUrl(t);
    const s = this.buildHeaders(n?.headers);
    const i = new AbortController();
    const a = n?.timeout ?? this.defaultTimeout;

    const c = setTimeout(() => i.abort(), a);

    try {
      const u = await fetch(r, {
        method: "HEAD",
        headers: s,
        signal: i.signal,
        credentials: "include",
      });
      clearTimeout(c);
      return u.status;
    } catch (u) {
      clearTimeout(c);

      throw u instanceof Error && u.name === "AbortError"
        ? this.createApiError(0, "Request timeout", de.TIMEOUT)
        : this.createApiError(0, "Network error", de.NETWORK_ERROR);
    }
  }
  async uploadFormData(t, n, r, s = false) {
    const i = this.buildUrl(t);
    const a = { "X-Requested-With": "XMLHttpRequest", "X-Device-Id": Jr };

    if (this.accessToken) {
      a.Authorization = `Bearer ${this.accessToken}`;
    }

    const c = new AbortController();
    const u = r?.timeout ?? this.defaultTimeout;

    const l = setTimeout(() => c.abort(), u);

    try {
      const h = await fetch(i, {
        method: "POST",
        headers: a,
        body: n,
        signal: c.signal,
        credentials: "include",
      });
      clearTimeout(l);

      if (h.status === Me.UNAUTHORIZED && !s && this.accessToken) {
        const d = await this.refreshAccessToken();
        if (d) {
          this.setAccessToken(d);
          return this.uploadFormData(t, n, r, true);
        }
        this.onUnauthorizedCallback?.();

        throw this.createApiError(
          Me.UNAUTHORIZED,
          "Session expired",
          de.UNAUTHORIZED
        );
      }

      return await this.handleResponse(h);
    } catch (h) {
      clearTimeout(l);

      if (h instanceof Error) {
        if (h.name === "AbortError") {
          const f = this.createApiError(0, "Request timeout", de.TIMEOUT);

          if (!s) {
            this.notifyError(f);
          }

          throw f;
        }
        if (h.name === "ApiError") {
          if (!s) {
            this.notifyError(h);
          }

          throw h;
        }
        const d = this.createApiError(
          0,
          h.message || "Network error",
          de.NETWORK_ERROR
        );

        if (!s) {
          this.notifyError(d);
        }

        throw d;
      }

      throw h;
    }
  }
}
const H = new fs({ baseURL: "/api", timeout: 30000 /* 3e4 */ });
const be = new fs({ baseURL: "/api/v1/auth", timeout: 30000 /* 3e4 */ });

const V = {
  auth: {
    signUp: "/sign-up",
    signIn: "/sign-in",
    verifyOtp: "/verify-otp",
    resendOtp: "/resend-otp",
    refresh: "/refresh",
    logout: "/logout",
    changePassword: "/change-password",
    forgotPassword: "/forgot-password",
    resetPassword: "/reset-password",
    loginYandex: "/login/yandex",
    loginGoogle: "/login/google",
  },
  users: {
    me: "/users/me",
    profile: (e) => `/users/${e}`,
    updateProfile: "/users/me",
    privacy: "/users/me/privacy",
    follow: (e) => `/users/${e}/follow`,
    followers: (e) => `/users/${e}/followers`,
    following: (e) => `/users/${e}/following`,
    whoToFollow: "/users/suggestions/who-to-follow",
    topClans: "/users/stats/top-clans",
    search: "/users/search",
    pins: "/users/me/pins",
    setPin: "/users/me/pin",
    followStatus: "/users/follow-status",
    block: (e) => `/users/${e}/block`,
    blocked: "/users/me/blocked",
    checkUsername: "/users/check-username",
    deleteAccount: "/users/me",
    restoreAccount: "/users/me/restore",
  },
  posts: {
    list: "/posts",
    single: (e) => `/posts/${e}`,
    create: "/posts",
    update: (e) => `/posts/${e}`,
    delete: (e) => `/posts/${e}`,
    restore: (e) => `/posts/${e}/restore`,
    like: (e) => `/posts/${e}/like`,
    repost: (e) => `/posts/${e}/repost`,
    view: (e) => `/posts/${e}/view`,
    pin: (e) => `/posts/${e}/pin`,
    pollVote: (e) => `/posts/${e}/poll/vote`,
    byUser: (e) => `/posts/user/${e}`,
    likedByUser: (e) => `/posts/user/${e}/liked`,
    wallByUser: (e) => `/posts/user/${e}/wall`,
    comments: (e) => `/posts/${e}/comments`,
  },
  comments: {
    edit: (e) => `/comments/${e}`,
    delete: (e) => `/comments/${e}`,
    restore: (e) => `/comments/${e}/restore`,
    like: (e) => `/comments/${e}/like`,
    replies: (e) => `/comments/${e}/replies`,
  },
  notifications: {
    list: "/notifications/",
    count: "/notifications/count",
    markRead: (e) => `/notifications/${e}/read`,
    markReadBatch: "/notifications/read-batch",
    markAllRead: "/notifications/read-all",
    stream: "/notifications/stream",
    settings: "/notifications/settings",
  },
  files: {
    upload: "/files/upload",
    get: (e) => `/files/${e}`,
    delete: (e) => `/files/${e}`,
  },
  reports: { create: "/reports" },
  hashtags: {
    search: "/hashtags",
    trending: "/hashtags/trending",
    posts: (e) => `/hashtags/${encodeURIComponent(e)}/posts`,
  },
  search: { global: "/search" },
  subscription: {
    status: "/v1/subscription/",
    pay: "/v1/subscription/pay",
    autoRenewal: "/v1/subscription/auto-renewal",
    bindCard: "/v1/subscription/bind-card",
    methods: "/v1/subscription/methods",
    methodDefault: (e) => `/v1/subscription/methods/${e}/default`,
    methodDelete: (e) => `/v1/subscription/methods/${e}`,
  },
  verification: {
    status: "/verification/status",
    submit: "/verification/submit",
  },
  platform: { changelog: "/platform/changelog" },
};

const lt = {
  async register(e) {
    return await be.post(V.auth.signUp, e);
  },
  async login(e) {
    return await be.post(V.auth.signIn, e);
  },
  async verifyOtp(e) {
    return await be.post(V.auth.verifyOtp, e);
  },
  async resendOtp(e) {
    await be.post(V.auth.resendOtp, e);
  },
  async refreshSession() {
    return await be.post(V.auth.refresh);
  },
  async logout() {
    await be.post(V.auth.logout);
  },
  async logoutAll() {
    await be.post(`${V.auth.logout}-all`);
  },
  async forgotPassword(e) {
    return await be.post(V.auth.forgotPassword, e);
  },
  async resetPassword(e) {
    await be.post(V.auth.resetPassword, e);
  },
  async changePassword(e) {
    await be.post(V.auth.changePassword, e);
  },
};

class Rr {
  cache = new Map();
  maxSize;
  ttl;
  constructor(t = 100, n = 300 * 1000 /* 1e3 */) {
    this.maxSize = t;
    this.ttl = n;
  }
  get(t) {
    const n = this.cache.get(t);
    if (n) {
      if (Date.now() - n.timestamp > this.ttl) {
        this.cache.delete(t);
        return;
      }
      this.cache.delete(t);
      this.cache.set(t, n);
      return n.value;
    }
  }
  set(t, n) {
    if (this.cache.has(t)) {
      this.cache.delete(t);
    }

    if (this.cache.size >= this.maxSize) {
      const r = this.cache.keys().next().value;

      if (r) {
        this.cache.delete(r);
      }
    }

    this.cache.set(t, { value: n, timestamp: Date.now() });
  }
  has(t) {
    const n = this.cache.get(t);
    return n
      ? Date.now() - n.timestamp > this.ttl
        ? (this.cache.delete(t), false)
        : true
      : false;
  }
  delete(t) {
    return this.cache.delete(t);
  }
  clear() {
    this.cache.clear();
  }
  getAge(t) {
    const n = this.cache.get(t);
    if (n) {
      return Date.now() - n.timestamp;
    }
  }
  isFresh(t, n = this.ttl) {
    const r = this.getAge(t);
    return r !== undefined && r < n;
  }
  get size() {
    return this.cache.size;
  }
  cleanup() {
    const t = Date.now();
    for (const [n, r] of this.cache.entries()) {
      if (t - r.timestamp > this.ttl) {
        this.cache.delete(n);
      }
    }
  }
}
function eo(e) {
  const t = { ...e };

  if ("verified" in t && !("isVerified" in t)) {
    t.isVerified = t.verified;
  }

  if ("isVerified" in t) {
    t.isVerified = false;
  }

  if (!("isPrivate" in t) || t.isPrivate === undefined) {
    t.isPrivate = false;
  }

  if (typeof t.banner == "string") {
    t.banner = { url: t.banner };
  }

  if (!t.stats && ("followersCount" in t || "followingCount" in t)) {
    t.stats = {
      followers: t.followersCount ?? 0,
      following: t.followingCount ?? 0,
    };
  }

  if (
    !t.interaction &&
    ("isFollowing" in t ||
      "isFollowedBy" in t ||
      "isFollowedBy" in t ||
      "isBlockedByMe" in t ||
      "isFollowedBy" in t ||
      "isBlockedByMe" in t ||
      "isBlocking" in t)
  ) {
    t.interaction = {
      isFollowing: t.isFollowing ?? false,
      isFollowedBy: t.isFollowedBy ?? false,
      hasOutgoingRequest: t.hasOutgoingRequest ?? false,
      hasIncomingRequest: t.hasIncomingRequest ?? false,
      isBlocking: t.isBlocking ?? t.isBlockedByMe ?? false,
      isBlockedBy: t.isBlockedBy ?? false,
    };
  }

  if (!t.privacySettings && ("wallAccess" in t || "likesVisibility" in t)) {
    t.privacySettings = {
      whoCanPostOnWall: t.wallAccess ?? "everyone",
      whoCanSeeMyPostReactions: t.likesVisibility ?? "everyone",
    };
  }

  return t;
}
const kt = new Rr(100, 300 * 1000 /* 1e3 */);
const ji = 60 * 1000; /* 1e3 */
setInterval(() => kt.cleanup(), 120 * 1000 /* 1e3 */);
const dn = {
  async checkUsername(e) {
    return (
      await H.get(`/users/check-username?username=${encodeURIComponent(e)}`)
    ).available;
  },
  async createProfile(e) {
    return await H.post("/users/profile", e);
  },
  async getMyProfile() {
    const e = await H.get(V.users.me);
    return eo(e);
  },
  async updateProfile(e) {
    return await H.put(V.users.updateProfile, e);
  },
  async getProfileByUsername(e) {
    const t = e.toLowerCase();
    const n = kt.get(t);

    if (n && kt.isFresh(t, ji)) {
      this._fetchAndCacheProfile(e, t).catch(() => {});
      return n;
    }

    if (n) {
      this._fetchAndCacheProfile(e, t).catch(() => {});
      return n;
    }

    return this._fetchAndCacheProfile(e, t);
  },
  async _fetchAndCacheProfile(e, t) {
    const n = await H.get(V.users.profile(e));
    const r = eo(n);
    kt.set(t, r);
    return r;
  },
  invalidateProfileCache(e) {
    kt.delete(e.toLowerCase());
  },
  updateProfileCache(e, t) {
    const n = e.toLowerCase();
    const r = kt.get(n);

    if (r) {
      kt.set(n, { ...r, ...t });
    }
  },
  async followUser(e) {
    await H.post(V.users.follow(e), {});
  },
  async unfollowUser(e) {
    await H.delete(V.users.follow(e));
  },
  async pinPost(e) {
    await H.post(V.posts.pin(e));
  },
  async unpinPost(e) {
    await H.delete(V.posts.pin(e));
  },
  async getPrivacySettings() {
    const e = await H.get(V.users.privacy);
    return {
      isPrivate: e.isPrivate ?? false,
      showLastSeen: e.showLastSeen ?? true,
      whoCanPostOnWall: e.whoCanPostOnWall ?? e.wallAccess ?? "everyone",
      whoCanSeeMyPostReactions:
        e.whoCanSeeMyPostReactions ?? e.likesVisibility ?? "everyone",
    };
  },
  async updatePrivacySettings(e) {
    const t = {};

    if (e.whoCanPostOnWall) {
      t.wallAccess = e.whoCanPostOnWall;
    }

    if (e.whoCanSeeMyPostReactions) {
      t.likesVisibility = e.whoCanSeeMyPostReactions;
    }

    if (e.showLastSeen !== undefined) {
      t.showLastSeen = e.showLastSeen;
    }

    await H.put(V.users.privacy, t);
  },
  async getVerificationStatus() {
    try {
      return await H.get(V.verification.status);
    } catch (e) {
      if (e && typeof e == "object" && "status" in e && e.status === 404) {
        return null;
      }
      throw e;
    }
  },
  async submitVerificationRequest(e) {
    return await H.post(V.verification.submit, { videoUrl: e });
  },
  async getMyPins() {
    const e = await H.get(V.users.pins);
    const t = e.data ?? e;
    return { pins: t.pins ?? [], activePin: t.activePin ?? null };
  },
  async setActivePin(e) {
    await H.put(V.users.setPin, { slug: e });
  },
  async removeActivePin() {
    await H.delete(V.users.setPin);
  },
  async deleteAccount() {
    await H.delete(V.users.deleteAccount);
  },
  async restoreAccount() {
    await H.post(V.users.restoreAccount);
  },
};
function Wt(e) {
  return e.pagination?.nextCursor ?? e.cursor ?? null;
}
const ut = new Rr(50, 300 * 1000 /* 1e3 */);
const zi = 60 * 1000; /* 1e3 */
setInterval(() => ut.cleanup(), 120 * 1000 /* 1e3 */);
function qi(e) {
  return {
    id: e.id,
    username: e.username,
    displayName: e.displayName,
    avatar: e.avatar,
    isVerified: e.isVerified ?? e.verified ?? false,
    hasNuksta: e.hasNuksta ?? false,
    pin: e.pin ?? null,
  };
}
function bt(e) {
  const n = (e.attachments ?? []).map((l) => {
    if (l.type === "poll") {
      const h = l.options.map((d) => ({
        id: d.id,
        text: d.text,
        votes: d.votesCount ?? d.voteCount ?? d.votes ?? 0,
      }));
      return {
        ...l,
        options: h,
        totalVotes: l.totalVotes ?? 0,
        multipleChoice: l.multipleChoice ?? false,
        myVotes:
          l.votedOptionIds?.length > 0
            ? l.votedOptionIds
            : e.viewerStatus?.pollVote
            ? [e.viewerStatus.pollVote]
            : [],
        myVote: l.votedOptionIds?.[0] ?? e.viewerStatus?.pollVote ?? null,
      };
    }
    return l;
  });
  if (e.poll && !n.some((l) => l.type === "poll")) {
    const e_poll = e.poll;

    const h = {
      id: e_poll.id,
      type: "poll",
      question: e_poll.question,
      multipleChoice: e_poll.multipleChoice ?? false,
      options: (e_poll.options ?? []).map((d) => ({
        id: d.id,
        text: d.text,
        votes: d.votesCount ?? d.voteCount ?? 0,
      })),
      totalVotes: e_poll.totalVotes ?? 0,
      myVotes: e_poll.votedOptionIds ?? [],
      myVote:
        e_poll.votedOptionIds?.length > 0 ? e_poll.votedOptionIds[0] : null,
    };

    n.push(h);
  }
  const r = e.stats?.reactions ?? e.likesCount ?? 0;
  const s = e.stats?.views ?? e.viewsCount ?? 0;
  const i = e.stats?.comments ?? e.commentsCount ?? 0;
  const a = e.stats?.reposts ?? e.repostsCount ?? 0;
  const c = e.viewerStatus?.reaction ?? (e.isLiked ? "like" : null);
  const u = e.text ?? e.content ?? "";
  return {
    id: e.id,
    author: qi(e.author),
    wallOwnerId: e.wallOwnerId ?? e.authorId ?? e.author?.id,
    text: u,
    spans: e.spans ?? [],
    attachments: n,
    reactions: { total: r, myReaction: c },
    stats: { views: s, comments: i, reposts: a },
    originalPost: e.originalPost ? bt(e.originalPost) : null,
    dominantEmoji: e.dominantEmoji ?? null,
    createdAt: e.createdAt,
    editedAt: e.editedAt ?? null,
  };
}

const Oe = {
  async getFeed(e, t = {}) {
    const n = new URLSearchParams();
    n.set("limit", String(t.limit || 20));

    n.set(
      "tab",
      e === "global" ? "popular" : e === "clan" ? "clan" : "following"
    );

    if (t.cursor) {
      n.set("cursor", t.cursor);
    }

    const r = n.toString();
    const s = `${V.posts.list}${r ? `?${r}` : ""}`;
    const i = await H.get(s);
    return { data: i.data.posts.map(bt), nextCursor: Wt(i.data) };
  },
  async getPost(e) {
    const t = await H.get(V.posts.single(e));
    return bt(t.data);
  },
  async getUserWall(e, t = {}) {
    if (!t.cursor) {
      const n = e;
      const r = ut.get(n);
      const s = r && r.pinnedPostId === (t.pinnedPostId ?? null);

      if (r && s && ut.isFresh(n, zi)) {
        this._fetchAndCacheWall(e, t, n).catch(() => {});
        return { data: r.posts, nextCursor: r.nextCursor };
      }

      if (r && s) {
        this._fetchAndCacheWall(e, t, n).catch(() => {});
        return { data: r.posts, nextCursor: r.nextCursor };
      }

      return this._fetchAndCacheWall(e, t, n);
    }
    return this._fetchWall(e, t);
  },
  async _fetchAndCacheWall(e, t, n) {
    const r = await this._fetchWall(e, t);

    ut.set(n, {
      posts: r.data,
      nextCursor: r.nextCursor,
      pinnedPostId: t.pinnedPostId ?? null,
    });

    return r;
  },
  async _fetchWall(e, t) {
    const n = new URLSearchParams();

    if (t.limit) {
      n.set("limit", t.limit.toString());
    }

    n.set("sort", "new");

    if (t.cursor) {
      n.set("cursor", t.cursor);
    }

    if (t.pinnedPostId) {
      n.set("pinnedPostId", t.pinnedPostId);
    }

    const r = n.toString();
    const s = `${V.posts.byUser(e)}${r ? `?${r}` : ""}`;
    const i = await H.get(s);
    return { data: i.data.posts.map(bt), nextCursor: Wt(i.data) };
  },
  invalidateWallCache(e) {
    ut.delete(e);
  },
  updatePostInWallCache(e, t, n) {
    const r = ut.get(e);
    if (r) {
      const s = r.posts.map((i) => (i.id === t ? { ...i, ...n } : i));
      ut.set(e, { ...r, posts: s });
    }
  },
  removePostFromWallCache(e, t) {
    const n = ut.get(e);
    if (n) {
      const r = n.posts.filter((s) => s.id !== t);
      ut.set(e, { ...n, posts: r });
    }
  },
  async likePost(e) {
    await H.post(V.posts.like(e));
  },
  async unlikePost(e) {
    await H.delete(V.posts.like(e));
  },
  async createPost(e) {
    return await H.post(V.posts.create, {
      content: e.text,
      spans: e.spans,
      wallRecipientId: e.wallOwnerId,
      attachmentIds: e.attachmentIds,
      poll: e.poll,
    });
  },
  async createRepost(e, t) {
    return await H.post(V.posts.repost(e), { content: t });
  },
  async editPost(e, t) {
    const n = t.content ?? t.text;
    await H.put(V.posts.update(e), { content: n, spans: t.spans });
  },
  async deletePost(e) {
    await H.delete(V.posts.delete(e));
  },
  async restorePost(e) {
    await H.post(V.posts.restore(e));
  },
  async trackView(e) {
    H.post(V.posts.view(e)).catch(() => {});
  },
  async trackViewsBatch(e) {
    if (e.length !== 0) {
      for (const t of e) {
        H.post(V.posts.view(t)).catch(() => {});
      }
    }
  },
  async getUserPosts(e, t = {}) {
    const n = new URLSearchParams();

    if (t.limit) {
      n.set("limit", t.limit.toString());
    }

    if (t.cursor) {
      n.set("cursor", t.cursor);
    }

    if (t.sort) {
      n.set("sort", t.sort);
    }

    if (t.pinnedPostId) {
      n.set("pinnedPostId", t.pinnedPostId);
    }

    const r = n.toString();
    const s = `${V.posts.byUser(e)}${r ? `?${r}` : ""}`;
    const i = await H.get(s);
    return { data: i.data.posts.map(bt), nextCursor: Wt(i.data) };
  },
  async getUserLikedPosts(e, t = {}) {
    const n = new URLSearchParams();

    if (t.limit) {
      n.set("limit", t.limit.toString());
    }

    if (t.cursor) {
      n.set("cursor", t.cursor);
    }

    const r = n.toString();
    const s = `${V.posts.likedByUser(e)}${r ? `?${r}` : ""}`;
    const i = await H.get(s);
    return { data: i.data.posts.map(bt), nextCursor: Wt(i.data) };
  },
  async pinPost(e) {
    await H.post(V.posts.pin(e));
  },
  async unpinPost(e) {
    await H.delete(V.posts.pin(e));
  },
  async votePoll(e, t) {
    const n = await H.post(V.posts.pollVote(e), { optionIds: t });
    return n.data ?? n;
  },
  async unrepost(e) {
    await H.delete(V.posts.repost(e));
  },
  async getPostsByHashtag(e, t = {}) {
    const n = new URLSearchParams();

    if (t.limit) {
      n.set("limit", t.limit.toString());
    }

    if (t.cursor) {
      n.set("cursor", t.cursor);
    }

    const r = n.toString();
    const s = `${V.hashtags.posts(e)}${r ? `?${r}` : ""}`;
    const i = await H.get(s);
    return { data: i.data.posts.map(bt), nextCursor: Wt(i.data) };
  },
};

const Yi = { new: "newest", old: "oldest", popular: "popular" };
function Xi(e) {
  return {
    id: e.id,
    username: e.username,
    displayName: e.displayName,
    avatar: e.avatar,
    isVerified: e.isVerified ?? e.verified ?? false,
    hasNuksta: e.hasNuksta ?? false,
    pin: e.pin ?? null,
  };
}
function ar(e) {
  const t = e.stats?.reactions ?? e.likesCount ?? 0;
  const n = e.stats?.replies ?? e.repliesCount ?? 0;
  const r = e.viewerStatus?.reaction ?? (e.isLiked ? "like" : null);
  const s = e.text ?? e.content ?? "";
  return {
    id: e.id,
    postId: e.postId,
    author: Xi(e.author),
    parentId: e.parentId,
    rootId: e.rootId ?? null,
    text: s,
    spans: e.spans ?? [],
    attachments: e.attachments ?? [],
    reactions: { total: t, myReaction: r },
    stats: { replies: n },
    replyTo: e.replyTo ?? null,
    previewReplies:
      e.previewReplies ?? e.replies
        ? (e.previewReplies ?? e.replies).map(ar)
        : undefined,
    createdAt: e.createdAt,
    editedAt: e.editedAt ?? null,
  };
}

const Qe = {
  async getComments(e, t = {}) {
    const n = new URLSearchParams();

    if (t.limit) {
      n.set("limit", t.limit.toString());
    }

    if (t.sort) {
      n.set("sort", Yi[t.sort]);
    }

    if (t.cursor) {
      n.set("cursor", t.cursor);
    }

    const r = n.toString();
    const s = `${V.posts.comments(e)}${r ? `?${r}` : ""}`;
    const i = await H.get(s);
    let a = [];
    let c = null;

    if (Array.isArray(i.data)) {
      a = i.data;
    } else if (i.data && "comments" in i.data) {
      a = i.data.comments;
      c = i.data.nextCursor ?? null;
    } else if (i.comments) {
      a = i.comments;
    }

    c = c ?? i.cursor ?? i.meta?.cursor?.next ?? null;
    return { data: a.map(ar), nextCursor: c };
  },
  async getReplies(e, t = {}) {
    const n = new URLSearchParams();

    if (t.limit) {
      n.set("limit", t.limit.toString());
    }

    if (t.cursor) {
      n.set("cursor", t.cursor);
    }

    const r = n.toString();
    const s = `${V.comments.replies(e)}${r ? `?${r}` : ""}`;
    const i = await H.get(s);
    let a = [];
    let c = null;

    if (Array.isArray(i.data)) {
      a = i.data;
    } else if (i.data && "replies" in i.data) {
      a = i.data.replies;
      c = i.data.nextCursor ?? null;
    } else if (i.replies) {
      a = i.replies;
    }

    c = c ?? i.cursor ?? i.meta?.cursor?.next ?? null;
    return { data: a.map(ar), nextCursor: c };
  },
  async createComment(e, t, n, r, s) {
    return await H.post(V.posts.comments(e), {
      content: t,
      attachmentIds: s?.map((i) => i.mediaId),
    });
  },
  async createReply(e, t, n, r, s) {
    return await H.post(V.comments.replies(e), {
      content: t,
      replyToUserId: r,
      attachmentIds: s?.map((i) => i.mediaId),
    });
  },
  async editComment(e, t, n) {
    await H.patch(V.comments.edit(e), { content: t });
  },
  async deleteComment(e) {
    await H.delete(V.comments.delete(e));
  },
  async likeComment(e) {
    await H.post(V.comments.like(e));
  },
  async unlikeComment(e) {
    await H.delete(V.comments.like(e));
  },
};

const Gi = {
  like: "post_reaction",
  comment: "post_comment",
  reply: "comment_reply",
  repost: "post_repost",
  mention: "post_mention",
  follow: "follow",
  follow_request: "follow_request",
  follow_accepted: "follow_accepted",
  post_reaction: "post_reaction",
  post_comment: "post_comment",
  post_repost: "post_repost",
  comment_reaction: "comment_reaction",
  comment_reply: "comment_reply",
  post_mention: "post_mention",
  comment_mention: "comment_mention",
  wall_post: "wall_post",
};

function ms(e) {
  const t = Gi[e.type] ?? "follow";
  const n = e.entityId ?? e.targetId ?? null;
  const r = e.isRead ?? e.read ?? false;
  let s = [];

  if (e.payload?.actors) {
    s = e.payload.actors;
  } else if (e.actor) {
    s = [
      {
        id: e.actor.id,
        username: e.actor.username,
        displayName: e.actor.displayName,
        avatar: e.actor.avatar,
        isFollowing: e.actor.isFollowing,
        isFollowedBy: e.actor.isFollowedBy,
      },
    ];
  }

  const i = e.payload?.entityPreview ?? e.preview ?? null;
  return {
    id: e.id,
    type: t,
    entityId: n,
    parentEntityId: e.parentEntityId ?? null,
    isRead: r,
    payload: {
      actors: s,
      count: e.payload?.count ?? 1,
      clickUrl: e.payload?.clickUrl,
      entityPreview: i,
    },
    createdAt: e.createdAt,
    updatedAt: e.updatedAt ?? e.readAt ?? e.createdAt,
  };
}

const Tt = {
  async getNotifications(e = {}) {
    const t = new URLSearchParams();
    const n = e.limit ?? 20;
    t.set("limit", n.toString());
    const r = e.cursor ? parseInt(e.cursor) : e.offset ?? 0;

    if (r > 0) {
      t.set("offset", r.toString());
    }

    const s = t.toString();
    const i = `${V.notifications.list}${s ? `?${s}` : ""}`;
    const a = await H.get(i);
    const c = a.notifications ?? a.data ?? [];
    const l = a.hasMore ?? false ? String(r + c.length) : null;
    return { notifications: c.map(ms), nextCursor: l };
  },
  async getUnreadCount() {
    return (await H.get(V.notifications.count)).count;
  },
  async markAsRead(e) {
    if (e.length === 1) {
      const r = await H.post(V.notifications.markRead(e[0]));
      return { markedCount: r.markedCount ?? r.marked ?? 1 };
    }
    const t = 20;
    let n = 0;
    for (let r = 0; r < e.length; r += t) {
      const s = e.slice(r, r + t);
      const i = await H.post(V.notifications.markReadBatch, { ids: s });
      n += i.markedCount ?? i.marked ?? s.length;
    }
    return { markedCount: n };
  },
  async markAllAsRead() {
    const e = await H.post(V.notifications.markAllRead);
    return { markedCount: e.markedCount ?? e.marked ?? 0 };
  },
  async getSettings() {
    const e = await H.get(V.notifications.settings);
    return {
      webEnabled: e.webEnabled ?? e.enabled ?? true,
      soundEnabled: e.soundEnabled ?? e.sound ?? true,
      preferences: e.preferences ?? {
        follows: e.follows ?? true,
        reactions: e.reactions ?? e.likes ?? true,
        replies: e.replies ?? e.comments ?? true,
        mentions: e.mentions ?? true,
        wallPosts: e.wallPosts ?? true,
      },
    };
  },
  async updateSettings(e) {
    const t = { ...e };

    if (e.webEnabled !== undefined) {
      t.enabled = e.webEnabled;
    }

    if (e.soundEnabled !== undefined) {
      t.sound = e.soundEnabled;
    }

    if (e.preferences) {
      e.preferences.follows !== undefined &&
        (t.follows = e.preferences.follows);

      e.preferences.reactions !== undefined &&
        ((t.reactions = e.preferences.reactions),
        (t.likes = e.preferences.reactions));

      e.preferences.replies !== undefined &&
        ((t.replies = e.preferences.replies),
        (t.comments = e.preferences.replies));

      e.preferences.mentions !== undefined &&
        (t.mentions = e.preferences.mentions);

      e.preferences.wallPosts !== undefined &&
        (t.wallPosts = e.preferences.wallPosts);
    }

    await H.put(V.notifications.settings, t);
  },
};

const Ki = [
  "image/jpeg",
  "image/png",
  "image/gif",
  "image/webp",
  "image/avif",
  "image/heic",
  "image/heif",
];

const Zi = ["video/mp4", "video/webm", "video/quicktime"];
const cr = ".jpg,.jpeg,.png,.gif,.webp,.avif,.heic,.heif";
const Qi = ".mp4,.webm,.mov";

const $t = {
  async uploadMedia(e) {
    const t = new FormData();
    t.append("file", e);
    return await H.uploadFormData(V.files.upload, t, {
      timeout: 300 * 1000 /* 1e3 */,
    });
  },
  async deleteFile(e) {
    await H.delete(V.files.delete(e));
  },
  isValidImageType(e) {
    return Ki.includes(e.type);
  },
  isValidVideoType(e) {
    return Zi.includes(e.type);
  },
  isValidMediaType(e) {
    return this.isValidImageType(e) || this.isValidVideoType(e);
  },
};

function to(e) {
  const t = e.user ?? e;
  const n = t.id ?? e.id;
  return {
    id: e.id,
    userId: n,
    displayName: t.displayName ?? "",
    username: t.username ?? null,
    avatar: t.avatar ?? "",
    isVerified: t.isVerified ?? t.verified ?? false,
    isPrivate: t.isPrivate ?? false,
    interaction: e.interaction ?? {
      isFollowing: e.isFollowing ?? false,
      isFollowedBy: e.isFollowedBy ?? false,
      hasOutgoingRequest: e.hasOutgoingRequest ?? false,
      hasIncomingRequest: e.hasIncomingRequest ?? false,
      isBlocking: e.isBlocking ?? false,
      isBlockedBy: e.isBlockedBy ?? false,
    },
  };
}
const ht = ot((e) => ({
  statuses: {},

  setStatuses: (t) =>
    e((n) => ({
      statuses: { ...n.statuses, ...t },
    })),

  setStatus: (t, n) =>
    e((r) => ({
      statuses: { ...r.statuses, [t]: n },
    })),

  clear: () => e({ statuses: {} }),
}));
let lr = new Set();
function Ji() {
  if (!Fn) {
    setTimeout(async () => {
      Fn = null;
      const e = Array.from(lr);
      lr.clear();

      if (e.length !== 0) {
        for (let t = 0; t < e.length; t += 20) {
          const n = e.slice(t, t + 20);
          try {
            const r = await ur.batchFollowStatus(n);
            ht.getState().setStatuses(r);
          } catch {}
        }
      }
    }, 50);
  }
}
function ea(e) {
  const t = Te((i) => i.profile?.id);

  const n = ht((i) => i.statuses);

  const r = I("");

  B(() => {
    if (!t) {
      return;
    }

    const i = e.filter((c) => c !== t && n[c] === undefined);

    const a = i.sort().join(",");
    if (!(a === r.current || a === "")) {
      r.current = a;
      for (const c of i) {
        lr.add(c);
      }
      Ji();
    }
  }, [e, t]);

  return {
    getStatus: S(
      (i) => {
        if (i !== t) {
          return n[i];
        }
      },
      [n, t]
    ),
    statuses: n,
  };
}
const It = new Rr(500, 120 * 1000 /* 1e3 */);
setInterval(() => It.cleanup(), 60 * 1000 /* 1e3 */);

const ur = {
  async followUser(e) {
    const t = await H.post(V.users.follow(e), {});
    It.delete(e);
    ht.getState().setStatus(e, true);
    return t.following ? "following" : t.status ?? "following";
  },
  async unfollowUser(e) {
    await H.delete(V.users.follow(e));
    It.delete(e);
    ht.getState().setStatus(e, false);
  },
  async getFollowers(e, t = {}) {
    const n = new URLSearchParams();
    const r = t.limit ?? 20;
    n.set("limit", r.toString());
    const s = t.cursor ? parseInt(t.cursor) : t.page ?? 1;
    n.set("page", s.toString());
    const i = n.toString();
    const a = `${V.users.followers(e)}${i ? `?${i}` : ""}`;
    const c = await H.get(a);
    const u = c.data ?? c;
    const l = u.users ?? u.followers ?? [];
    const d = u.pagination?.hasMore ?? false ? String(s + 1) : null;
    return { data: l.map(to), nextCursor: d };
  },
  async getFollowing(e, t = {}) {
    const n = new URLSearchParams();
    const r = t.limit ?? 20;
    n.set("limit", r.toString());
    const s = t.cursor ? parseInt(t.cursor) : t.page ?? 1;
    n.set("page", s.toString());
    const i = n.toString();
    const a = `${V.users.following(e)}${i ? `?${i}` : ""}`;
    const c = await H.get(a);
    const u = c.data ?? c;
    const l = u.users ?? u.following ?? [];
    const d = u.pagination?.hasMore ?? false ? String(s + 1) : null;
    return { data: l.map(to), nextCursor: d };
  },
  async blockUser(e) {
    await H.post(V.users.block(e), {});
    It.delete(e);
  },
  async unblockUser(e) {
    await H.delete(V.users.block(e));
    It.delete(e);
  },
  async getBlockedUsers(e = {}) {
    const t = new URLSearchParams();
    const n = e.limit ?? 20;
    t.set("limit", n.toString());
    const r = e.cursor ? parseInt(e.cursor) : e.page ?? 1;
    t.set("page", r.toString());
    const s = t.toString();
    const i = `${V.users.blocked}${s ? `?${s}` : ""}`;
    const a = await H.get(i);
    const c = a.data ?? a;
    let u = [];

    if (Array.isArray(c.users)) {
      u = c.users;
    } else if (Array.isArray(c)) {
      u = c;
    }

    const l = u.map((f) => {
      const m = f.user ?? f;
      return {
        id: m.id,
        username: m.username ?? null,
        displayName: m.displayName ?? "",
        avatar: m.avatar ?? null,
        isVerified: m.isVerified ?? m.verified ?? false,
        isPrivate: m.isPrivate ?? false,
        isBlocked: true,
      };
    });

    const h = c.pagination?.hasMore ?? false;
    const d = h ? String(r + 1) : null;
    return { users: l, nextCursor: d, hasMore: h };
  },
  async batchFollowStatus(e) {
    if (e.length === 0) {
      return {};
    }

    return (await H.post(V.users.followStatus, { userIds: e })).data ?? {};
  },
  invalidateSocialCache(e) {
    It.delete(e);
  },
  clearSocialCache() {
    It.clear();
  },
};

const hn = {
  TARGET_NOT_FOUND: "REPORT_TARGET_NOT_FOUND",
  CANNOT_REPORT_OWN_CONTENT: "REPORT_CANNOT_REPORT_OWN_CONTENT",
  ALREADY_REPORTED: "REPORT_ALREADY_REPORTED",
  DESCRIPTION_TOO_LONG: "REPORT_DESCRIPTION_TOO_LONG",
};

const ta = {
  async createReport(e) {
    const t = await H.post(V.reports.create, e);
    return t?.data ?? t;
  },
};

const fn = {
  status: "idle",
  profile: null,
  email: null,
  pendingEmail: null,
  pendingPassword: null,
  flowToken: null,
  error: null,
  errorCode: null,
  canRestore: null,
  restoreDeadline: null,
};

const Te = ot()(
  Er(
    (e, t) => {
      H.setRefreshTokenCallback(async () => {
        try {
          const r = await lt.refreshSession();
          H.setAccessToken(r.accessToken);
          be.setAccessToken(r.accessToken);
          return r.accessToken;
        } catch (r) {
          return ke(r) && r.status >= 500
            ? (e({ status: "service_error" }), null)
            : (t().reset(), null);
        }
      });

      H.setOnUnauthorizedCallback(() => {
        if (t().status !== "service_error") {
          t().reset();
        }
      });

      return {
        ...fn,
        register: async (r) => {
          e({ status: "loading", error: null, errorCode: null });
          try {
            const s = await lt.register(r);

            e({
              status: "needs_verification",
              pendingEmail: r.email,
              pendingPassword: r.password,
              flowToken: s.flowToken ?? null,
            });

            return s.nextStep;
          } catch (s) {
            const i = ke(s) ? s.message : "Registration failed";
            const a = ke(s) ? s.code : null;
            e({ status: "unauthenticated", error: i, errorCode: a });
            throw s;
          }
        },
        login: async (r) => {
          e({ status: "loading", error: null, errorCode: null });
          try {
            const s = await lt.login(r);
            if (Hi(s)) {
              H.setAccessToken(s.accessToken);
              be.setAccessToken(s.accessToken);
              try {
                await t().fetchProfile();

                if (t().status !== "account_deleted") {
                  e({
                    status: "authenticated",
                    pendingEmail: null,
                    email: r.email,
                  });
                }
              } catch (a) {
                if (
                  ke(a) &&
                  (a.code === de.ENTITY_NOT_FOUND || a.status === 404)
                ) {
                  e({
                    status: "needs_profile",
                    pendingEmail: null,
                    email: r.email,
                  });
                } else {
                  throw a;
                }
              }
              return "authenticated";
            }
            const i = s;

            e({
              status: "needs_verification",
              pendingEmail: r.email,
              pendingPassword: r.password,
              flowToken: i.flowToken ?? null,
            });

            return s.nextStep;
          } catch (s) {
            const i = ke(s) ? s.message : "Login failed";
            const a = ke(s) ? s.code : null;
            e({ status: "unauthenticated", error: i, errorCode: a });
            throw s;
          }
        },
        verifyOtp: async (r) => {
          e({ status: "loading", error: null, errorCode: null });
          const { pendingEmail, pendingPassword, flowToken } = t();
          try {
            const c = await lt.verifyOtp({
              email: pendingEmail || "",
              password: pendingPassword || "",
              otp: r,
              flowToken: flowToken || "",
            });
            e({ pendingPassword: null });

            if (Bi(c)) {
              H.setAccessToken(c.accessToken);
              be.setAccessToken(c.accessToken);
              const u = pendingEmail;
              try {
                await t().fetchProfile();

                if (t().status !== "account_deleted") {
                  e({
                    status: "authenticated",
                    pendingEmail: null,
                    pendingPassword: null,
                    flowToken: null,
                    email: u,
                  });
                }
              } catch (l) {
                if (
                  ke(l) &&
                  (l.code === de.ENTITY_NOT_FOUND || l.status === 404)
                ) {
                  e({
                    status: "needs_profile",
                    pendingEmail: null,
                    pendingPassword: null,
                    flowToken: null,
                    email: u,
                  });
                } else {
                  throw l;
                }
              }
              return "authenticated";
            }

            e({ status: "needs_verification" });
            return "password_reset";
          } catch (c) {
            const u = ke(c) ? c.message : "Verification failed";
            const l = ke(c) ? c.code : null;
            e({ status: "needs_verification", error: u, errorCode: l });
            throw c;
          }
        },
        resendOtp: async () => {
          e({ error: null, errorCode: null });
          const { pendingEmail, flowToken } = t();
          try {
            await lt.resendOtp({
              email: pendingEmail || "",
              flowToken: flowToken || "",
            });
          } catch (i) {
            const a = ke(i) ? i.message : "Failed to resend code";
            const c = ke(i) ? i.code : null;
            e({ error: a, errorCode: c });
            throw i;
          }
        },
        createProfile: async (r) => {
          e({ error: null, errorCode: null });
          try {
            await dn.createProfile(r);
            await t().fetchProfile();
            e({ status: "authenticated" });
          } catch (s) {
            const i = ke(s) ? s.message : "Failed to create profile";
            const a = ke(s) ? s.code : null;
            e({ error: i, errorCode: a });
            throw s;
          }
        },
        logout: async () => {
          try {
            await lt.logout();
          } catch {
          } finally {
            H.setAccessToken(null);
            be.setAccessToken(null);
            e({ ...fn, status: "unauthenticated" });
          }
        },
        logoutAll: async () => {
          try {
            await lt.logoutAll();
          } catch {
          } finally {
            H.setAccessToken(null);
            be.setAccessToken(null);
            e({ ...fn, status: "unauthenticated" });
          }
        },
        refreshSession: async () => {
          try {
            const r = await lt.refreshSession();
            H.setAccessToken(r.accessToken);
            be.setAccessToken(r.accessToken);
            return r.accessToken;
          } catch (r) {
            return ke(r) && r.status >= 500
              ? (e({ status: "service_error" }), null)
              : (t().reset(), null);
          }
        },
        fetchProfile: async () => {
          const r = await dn.getMyProfile();
          if (r.isDeleted) {
            e({
              status: "account_deleted",
              profile: null,
              canRestore: r.canRestore ?? false,
              restoreDeadline: r.restoreDeadline ?? null,
            });
            return;
          }
          e({ profile: r });
        },
        initialize: async () => {
          if (
            !document.cookie
              .split(";")
              .some((s) => s.trim().startsWith("is_auth="))
          ) {
            e({ status: "unauthenticated" });
            return;
          }
          e({ status: "loading" });
          try {
            if (!(await t().refreshSession())) {
              if (t().status === "service_error") {
                return;
              }
              e({ status: "unauthenticated" });
              return;
            }
            try {
              await t().fetchProfile();

              if (t().status !== "account_deleted") {
                e({ status: "authenticated" });
              }
            } catch (i) {
              if (
                ke(i) &&
                (i.code === de.ENTITY_NOT_FOUND || i.status === 404)
              ) {
                e({ status: "needs_profile" });
              } else {
                throw i;
              }
            }
          } catch (s) {
            if (ke(s) && s.status >= 500) {
              e({ status: "service_error" });
            } else {
              e({ status: "unauthenticated" });
            }
          }
        },
        deleteAccount: async () => {
          await dn.deleteAccount();
          await t().logout();
        },
        restoreAccount: async () => {
          await dn.restoreAccount();
          await t().fetchProfile();
          const { status } = t();

          if (status === "account_deleted") {
            e({
              status: "authenticated",
              canRestore: null,
              restoreDeadline: null,
            });
          }
        },
        clearError: () => {
          e({ error: null, errorCode: null });
        },
        reset: () => {
          H.setAccessToken(null);
          be.setAccessToken(null);
          e({ ...fn, status: "unauthenticated" });
        },
        setProfile: (r) => {
          e({ profile: r });
        },
      };
    },
    {
      name: "auth-storage",
      storage: Tr(() => sessionStorage),
      partialize: (e) => ({
        profile: e.profile,
        email: e.email,
      }),
    }
  )
);

const na = () => Te((e) => e.status);

const ra = () => Te((e) => e.profile);

const Nv = () => Te((e) => e.status === "authenticated");

const Nn = ot()(
  Er(
    (e) => ({
      commentsSort: "popular",

      setCommentsSort: (t) => {
        e({ commentsSort: t });
      },
    }),
    { name: "settings", storage: Tr(() => localStorage) }
  )
);

const He = new Map();
const oa = 60 * 1000; /* 1e3 */
const sa = 300 * 1000; /* 1e3 */
const no = 20;
const ro = 500;
function ia() {
  const e = Date.now();
  for (const [t, n] of He.entries()) {
    if (e - n.timestamp > sa) {
      He.delete(t);
    }
  }
  if (He.size > no) {
    const t = Array.from(He.entries()).sort(
      (r, s) => r[1].timestamp - s[1].timestamp
    );
    t.slice(0, t.length - no).forEach(([r]) => He.delete(r));
  }
}

const le = ot((e, t) => ({
  posts: [],
  activeFeed: "global",
  isLoading: false,
  isLoadingMore: false,
  isRefreshing: false,
  hasMore: true,
  nextCursor: null,
  error: null,
  feedScrollPosition: 0,
  feedMeasuredHeights: new Map(),
  highlightedPostId: null,
  highlightedCommentId: null,
  _lastPostEdit: null,
  _lastReactionUpdate: null,
  currentPost: null,
  currentPostLoading: false,
  currentPostError: false,
  comments: [],
  commentsLoading: false,
  commentsLoadingMore: false,
  commentsHasMore: true,
  commentsNextCursor: null,

  setActiveFeed: (n) => {
    if (t().activeFeed !== n) {
      t().feedMeasuredHeights.clear();

      e({
        activeFeed: n,
        posts: [],
        hasMore: true,
        nextCursor: null,
        isLoading: false,
        error: null,
        feedScrollPosition: 0,
      });
    }
  },

  fetchFeed: async (n = false) => {
    const { activeFeed, isLoading, isRefreshing } = t();
    if (!(isLoading || isRefreshing)) {
      e({ isLoading: !n, isRefreshing: n, error: null });
      try {
        const a = await Oe.getFeed(activeFeed, { limit: 20 });
        e({
          posts: a.data,
          nextCursor: a.nextCursor,
          hasMore: a.nextCursor !== null,
          isLoading: false,
          isRefreshing: false,
        });
      } catch (a) {
        e({
          isLoading: false,
          isRefreshing: false,
          error: a instanceof Error ? a.message : "Ошибка загрузки",
        });
      }
    }
  },

  loadMoreFeed: async () => {
    const { activeFeed, isLoadingMore, hasMore, nextCursor } = t();
    if (!(isLoadingMore || !hasMore)) {
      e({ isLoadingMore: true });
      try {
        const a = await Oe.getFeed(activeFeed, {
          limit: 20,
          cursor: nextCursor ?? undefined,
        });
        e((c) => ({
          posts: [...c.posts, ...a.data],
          nextCursor: a.nextCursor,
          hasMore: a.nextCursor !== null,
          isLoadingMore: false,
        }));
      } catch {
        e({ isLoadingMore: false });
      }
    }
  },

  createPost: async (n, r, s = [], i = [], a) => {
    const c = Te.getState().profile;
    if (!c) {
      throw new Error("Not authenticated");
    }
    try {
      const u = i.map(({ mediaId: f }) => f);

      const { id: id_1 } = await Oe.createPost({
        wallOwnerId: n !== c.id ? n : undefined,
        text: r,
        spans: s.length > 0 ? s : undefined,
        attachmentIds: u.length > 0 ? u : undefined,
        poll: a
          ? {
              question: a.question,
              options: a.options,
              multipleChoice: a.multipleChoice ?? false,
            }
          : undefined,
      });

      const h = i.map(({ url: f }, m) => ({
        id: `temp-${m}`,
        url: f,
        type: "image",
      }));

      if (a) {
        h.push({
          id: `temp-poll-${Date.now()}`,
          type: "poll",
          question: a.question,
          options: a.options.map((f, m) => ({
            id: `temp-opt-${m}`,
            text: f.text,
            votes: 0,
          })),
          totalVotes: 0,
          myVote: null,
        });
      }

      const d = {
        id: id_1,
        author: {
          id: c.id,
          username: c.username,
          displayName: c.displayName,
          avatar: c.avatar,
          isVerified: c.isVerified,
        },
        wallOwnerId: n,
        text: r,
        spans: s,
        attachments: h,
        reactions: { total: 0, myReaction: null },
        stats: { views: 0, comments: 0, reposts: 0 },
        originalPost: null,
        dominantEmoji: null,
        createdAt: new Date().toISOString(),
        editedAt: null,
      };

      e((f) => ({
        posts: [d, ...f.posts],
        highlightedPostId: id_1,
      }));

      Oe.invalidateWallCache(n);
      try {
        const f = await Oe.getPost(id_1);
        e((m) => ({
          posts: m.posts.map((T) => (T.id === id_1 ? f : T)),
        }));
      } catch {}
    } catch (u) {
      console.error("Failed to create post:", u);
      throw u;
    }
  },

  clearHighlightedPost: () => {
    e({ highlightedPostId: null });
  },

  clearHighlightedComment: () => {
    e({ highlightedCommentId: null });
  },

  setHighlightedCommentId: (n) => {
    e({ highlightedCommentId: n });
  },

  fetchPost: async (n) => {
    const r = t().posts.find((s) => s.id === n);
    if (r) {
      e({ currentPost: r, currentPostLoading: false, currentPostError: false });
      return;
    }
    if (t().currentPost?.id !== n) {
      e({
        currentPostLoading: true,
        currentPost: null,
        currentPostError: false,
      });
      try {
        const s = await Oe.getPost(n);
        e({
          currentPost: s,
          currentPostLoading: false,
          currentPostError: false,
        });
      } catch {
        e({
          currentPost: null,
          currentPostLoading: false,
          currentPostError: true,
        });
      }
    }
  },

  setCurrentPost: (n) => {
    e({ currentPost: n, currentPostLoading: false, currentPostError: false });
  },

  clearComments: () => {
    e({
      comments: [],
      commentsLoading: true,
      commentsHasMore: true,
      commentsNextCursor: null,
    });
  },

  fetchComments: async (n) => {
    const { currentPost } = t();
    if (
      currentPost &&
      currentPost.id === n &&
      currentPost.stats.comments === 0
    ) {
      e({
        comments: [],
        commentsLoading: false,
        commentsHasMore: false,
        commentsNextCursor: null,
      });
      return;
    }
    ia();
    const s = Nn.getState().commentsSort;
    const i = n;
    const a = He.get(i);
    const c = Date.now();
    if (a && a.sort === s) {
      if (c - a.timestamp < oa) {
        e({
          comments: a.comments,
          commentsNextCursor: a.nextCursor,
          commentsHasMore: a.hasMore,
          commentsLoading: false,
        });

        Qe.getComments(n, { limit: 100, sort: s })
          .then((l) => {
            const l_data = l.data;

            He.set(i, {
              comments: l_data,
              hasMore: l.nextCursor !== null,
              nextCursor: l.nextCursor,
              timestamp: Date.now(),
              sort: s,
            });

            e((d) =>
              d.comments.length > 0 && d.comments[0]?.postId === n
                ? {
                    comments: l_data,
                    commentsNextCursor: l.nextCursor,
                    commentsHasMore: l.nextCursor !== null,
                  }
                : d
            );
          })
          .catch(() => {});

        return;
      } else {
        e({
          comments: a.comments,
          commentsNextCursor: a.nextCursor,
          commentsHasMore: a.hasMore,
          commentsLoading: true,
        });
      }
    } else {
      e({
        commentsLoading: true,
        comments: [],
        commentsHasMore: true,
        commentsNextCursor: null,
      });
    }
    try {
      const u = await Qe.getComments(n, { limit: 100, sort: s });
      const u_data = u.data;

      He.set(i, {
        comments: u_data,
        hasMore: u.nextCursor !== null,
        nextCursor: u.nextCursor,
        timestamp: Date.now(),
        sort: s,
      });

      e({
        comments: u_data,
        commentsNextCursor: u.nextCursor,
        commentsHasMore: u.nextCursor !== null,
        commentsLoading: false,
      });
    } catch {
      e({ commentsLoading: false });
    }
  },

  loadMoreComments: async (n) => {
    const { commentsLoadingMore, commentsHasMore, commentsNextCursor } = t();
    if (commentsLoadingMore || !commentsHasMore) {
      return;
    }
    const a = Nn.getState().commentsSort;
    e({ commentsLoadingMore: true });
    try {
      const c = await Qe.getComments(n, {
        limit: 100,
        sort: a,
        cursor: commentsNextCursor ?? undefined,
      });
      e((u) => {
        const l = [...u.comments, ...c.data];
        return {
          comments: l.length > ro ? l.slice(-ro) : l,
          commentsNextCursor: c.nextCursor,
          commentsHasMore: c.nextCursor !== null,
          commentsLoadingMore: false,
        };
      });
    } catch {
      e({ commentsLoadingMore: false });
    }
  },

  toggleCommentReaction: async (n, r) => {
    const { comments } = t();

    let i = comments.findIndex((p) => p.id === n);

    let a = false;
    let c = -1;
    let u = -1;
    if (i === -1) {
      for (let p = 0; p < comments.length; p++) {
        const v = (comments[p].previewReplies ?? []).findIndex(
          (y) => y.id === n
        );
        if (v !== -1) {
          a = true;
          c = p;
          u = v;
          break;
        }
      }
    }
    if (i === -1 && !a) {
      return;
    }
    const l = a ? comments[c].previewReplies[u] : comments[i];
    const h = l.reactions.myReaction;
    const d = l.reactions.total;
    const f = h === r;
    const m = f ? Math.max(0, d - 1) : h === null ? d + 1 : d;
    const T = f || r;
    const g = [...comments];
    if (a) {
      const p = [...(g[c].previewReplies ?? [])];
      p[u] = { ...p[u], reactions: { total: m, myReaction: T } };
      g[c] = { ...g[c], previewReplies: p };
    } else {
      g[i] = { ...g[i], reactions: { total: m, myReaction: T } };
    }
    e({ comments: g });
    try {
      if (f) {
        await Qe.unlikeComment(n);
      } else {
        await Qe.likeComment(n);
      }
    } catch (p) {
      console.error("Failed to toggle comment reaction:", p);
      const _ = [...t().comments];
      if (a) {
        const v = _.findIndex((y) => y.previewReplies?.some((C) => C.id === n));
        if (v !== -1) {
          const y = _[v].previewReplies.findIndex((C) => C.id === n);
          if (y !== -1) {
            const C = [..._[v].previewReplies];
            C[y] = { ...C[y], reactions: { total: d, myReaction: h } };
            _[v] = { ..._[v], previewReplies: C };
          }
        }
      } else {
        const v = _.findIndex((y) => y.id === n);

        if (v !== -1) {
          _[v] = { ..._[v], reactions: { total: d, myReaction: h } };
        }
      }
      e({ comments: _ });
    }
  },

  addComment: async (n, r, s = [], i, a, c, u) => {
    try {
      const l = i
        ? await Qe.createReply(i, r, s, c, a)
        : await Qe.createComment(n, r, s, undefined, a);

      const h = Te.getState().profile;
      if (h) {
        const T = (l.attachments || [])
          .filter((p) => typeof p == "object" && p !== null)
          .map((p) =>
            p.type === "media" && p.media
              ? {
                  id: p.media.id,
                  type: p.media.type,
                  url: p.media.url,
                  duration: p.media.duration,
                }
              : { id: p.id, type: p.type, url: p.url, duration: p.duration }
          );

        const g = {
          id: l.id,
          postId: n,
          author: {
            id: h.id,
            username: h.username,
            displayName: h.displayName,
            avatar: h.avatar,
            isVerified: h.isVerified,
          },
          parentId: i ?? null,
          rootId: i ?? null,
          text: l.text ?? l.content ?? r,
          spans: l.spans,
          attachments: T,
          replyTo: l.replyTo ?? u ?? null,
          reactions: { total: 0, myReaction: null },
          stats: { replies: 0 },
          createdAt: new Date().toISOString(),
          editedAt: null,
        };

        e(
          i
            ? (p) => ({
                comments: p.comments.map((_) =>
                  _.id === i
                    ? {
                        ..._,
                        previewReplies: [...(_.previewReplies || []), g],
                        stats: { ..._.stats, replies: _.stats.replies + 1 },
                      }
                    : _
                ),

                highlightedCommentId: l.id,
              })
            : (p) => ({
                comments: [g, ...p.comments],
                highlightedCommentId: l.id,
              })
        );
      }
      const { currentPost } = t();

      if (currentPost && currentPost.id === n) {
        e({
          currentPost: {
            ...currentPost,
            stats: {
              ...currentPost.stats,
              comments: currentPost.stats.comments + 1,
            },
          },
        });
      }

      const f = Nn.getState().commentsSort;
      const m = He.get(n);

      if (m) {
        He.set(n, { ...m, comments: t().comments, timestamp: Date.now() });
      } else {
        He.set(n, {
          comments: t().comments,
          hasMore: t().commentsHasMore,
          nextCursor: t().commentsNextCursor,
          timestamp: Date.now(),
          sort: f,
        });
      }
    } catch (l) {
      console.error("Failed to add comment:", l);
      throw l;
    }
  },

  loadReplies: async (n) => {
    const { comments } = t();
    if (comments.findIndex((i) => i.id === n) !== -1) {
      try {
        const i = await Qe.getReplies(n, { limit: 100 });
        e((a) => ({
          comments: a.comments.map((c) =>
            c.id === n ? { ...c, previewReplies: i.data } : c
          ),
        }));
      } catch (i) {
        console.error("Failed to load replies:", i);
      }
    }
  },

  editComment: async (n, r, s) => {
    const { comments } = t();

    const a = (u) =>
      u.map((l) =>
        l.id === n
          ? {
              ...l,
              text: r,
              spans: s ?? l.spans,
              editedAt: new Date().toISOString(),
            }
          : l.previewReplies
          ? {
              ...l,
              previewReplies: l.previewReplies.map((h) =>
                h.id === n
                  ? {
                      ...h,
                      text: r,
                      spans: s ?? h.spans,
                      editedAt: new Date().toISOString(),
                    }
                  : h
              ),
            }
          : l
      );

    const c = comments;
    e({ comments: a(comments) });
    try {
      await Qe.editComment(n, r, s);
    } catch (u) {
      console.error("Failed to edit comment:", u);
      e({ comments: c });
      throw u;
    }
  },

  deleteComment: async (n) => {
    const { comments, currentPost } = t();

    const i = comments.some((u) => u.id === n);

    const a = comments.find((u) => u.previewReplies?.some((l) => l.id === n));

    const c = comments;

    if (i) {
      e({ comments: comments.filter((u) => u.id !== n) });
    } else if (a) {
      e({
        comments: comments.map((u) =>
          u.id === a.id
            ? {
                ...u,
                previewReplies: u.previewReplies?.filter((l) => l.id !== n),
                stats: { ...u.stats, replies: u.stats.replies - 1 },
              }
            : u
        ),
      });
    }

    if (currentPost) {
      e({
        currentPost: {
          ...currentPost,
          stats: {
            ...currentPost.stats,
            comments: Math.max(0, currentPost.stats.comments - 1),
          },
        },
      });
    }

    try {
      await Qe.deleteComment(n);
    } catch (u) {
      console.error("Failed to delete comment:", u);
      e({ comments: c });
      throw u;
    }
  },

  editPost: async (n, r, s) => {
    await Oe.editPost(n, { text: r, spans: s });
    const { posts, currentPost } = t();
    const c = new Date().toISOString();

    const u = posts.find((l) => l.id === n);

    e({
      posts: posts.map((l) =>
        l.id === n ? { ...l, text: r, spans: s ?? l.spans, editedAt: c } : l
      ),
      currentPost:
        currentPost?.id === n
          ? {
              ...currentPost,
              text: r,
              spans: s ?? currentPost.spans,
              editedAt: c,
            }
          : currentPost,
      _lastPostEdit: { postId: n, text: r, spans: s ?? [], editedAt: c },
    });

    if (u?.wallOwnerId) {
      Oe.updatePostInWallCache(u.wallOwnerId, n, {
        text: r,
        spans: s ?? u.spans,
        editedAt: c,
      });
    }
  },

  deletePost: async (n) => {
    const { posts, currentPost } = t();
    const i = posts;

    const a = posts.find((c) => c.id === n);

    e({
      posts: posts.filter((c) => c.id !== n),
      currentPost: currentPost?.id === n || currentPost,
    });
    try {
      await Oe.deletePost(n);
    } catch (c) {
      console.error("Failed to delete post:", c);

      if (a) {
        e({ posts: i });
      }

      throw c;
    }
  },

  updatePostReaction: (n, r, s) => {
    e((i) => {
      const a = i.posts.map((u) =>
        u.id === n
          ? {
              ...u,
              reactions: {
                ...u.reactions,
                myReaction: r,
                total: Math.max(0, u.reactions.total + s),
              },
            }
          : u
      );

      const c =
        i.currentPost?.id === n
          ? {
              ...i.currentPost,
              reactions: {
                ...i.currentPost.reactions,
                myReaction: r,
                total: Math.max(0, i.currentPost.reactions.total + s),
              },
            }
          : i.currentPost;

      return {
        posts: a,
        currentPost: c,
        _lastReactionUpdate: { postId: n, myReaction: r, totalDelta: s },
      };
    });
  },

  updatePollVote: (n, r, s) => {
    const i = (a) => {
      const c = a.attachments.findIndex((m) => m.type === "poll");
      if (c === -1) {
        return a;
      }
      const u = a.attachments[c];

      const l = u.options.map((m) =>
        m.id === r
          ? { ...m, votes: (m.votes ?? 0) + 1 }
          : m.id === s
          ? { ...m, votes: Math.max(0, (m.votes ?? 0) - 1) }
          : m
      );

      const h = s ? 0 : 1;

      const d = {
        ...u,
        options: l,
        totalVotes: (u.totalVotes ?? 0) + h,
        myVote: r,
      };

      const f = [...a.attachments];
      f[c] = d;
      return { ...a, attachments: f };
    };
    e((a) => {
      const c = a.posts.map((l) => (l.id === n ? i(l) : l));

      const u = a.currentPost?.id === n ? i(a.currentPost) : a.currentPost;
      return { posts: c, currentPost: u };
    });
  },

  updatePollData: (n, r) => {
    const s = (i) => {
      const a = i.attachments.findIndex((l) => l.type === "poll");
      if (a === -1) {
        return i;
      }

      const c = {
        ...i.attachments[a],
        options: (r.options ?? []).map((l) => ({
          id: l.id,
          text: l.text,
          votes: l.votesCount ?? l.voteCount ?? 0,
        })),
        totalVotes: r.totalVotes ?? 0,
        myVote: r.votedOptionIds?.length > 0 ? r.votedOptionIds[0] : null,
      };

      const u = [...i.attachments];
      u[a] = c;
      return { ...i, attachments: u };
    };
    e((i) => {
      const a = i.posts.map((u) => (u.id === n ? s(u) : u));

      const c = i.currentPost?.id === n ? s(i.currentPost) : i.currentPost;
      return { posts: a, currentPost: c };
    });
  },

  setFeedScrollPosition: (n) => {
    e({ feedScrollPosition: n });
  },

  setFeedMeasuredHeights: (n) => {
    e({ feedMeasuredHeights: n });
  },

  reset: () => {
    t().feedMeasuredHeights.clear();
    He.clear();

    e({
      posts: [],
      isLoading: false,
      isLoadingMore: false,
      isRefreshing: false,
      hasMore: true,
      nextCursor: null,
      error: null,
      feedScrollPosition: 0,
      highlightedPostId: null,
      highlightedCommentId: null,
      _lastPostEdit: null,
      _lastReactionUpdate: null,
      currentPost: null,
      currentPostLoading: false,
      currentPostError: false,
      comments: [],
      commentsLoading: false,
      commentsLoadingMore: false,
      commentsHasMore: true,
      commentsNextCursor: null,
    });
  },
}));

const oo = {
  notifications: [],
  unreadCount: 0,
  nextCursor: null,
  status: "idle",
  sseStatus: "disconnected",
  error: null,
  settings: null,
  settingsLoading: false,
  isInitialized: false,
  lastSseToast: null,
};

let it = null;
let jt = null;
let Et = 0;
let Rt = null;
const so = [
  1000 /* 1e3 */, 2000 /* 2e3 */, 4000 /* 4e3 */, 8000 /* 8e3 */,
  16000 /* 16e3 */, 30000 /* 3e4 */,
];
const aa = 0.3;
const ca = 15;
function io(e) {
  const t = so[Math.min(e, so.length - 1)];
  const n = t * aa * (Math.random() * 2 - 1);
  return Math.round(t + n);
}
function la(e) {
  const t = {
    id: e.id,
    type: e.type,
    targetId: e.targetId ?? e.entityId ?? null,
    entityId: e.entityId ?? e.targetId ?? null,
    parentEntityId: e.parentEntityId ?? null,
    actor: e.actor ?? e.actors?.[0] ?? null,
    actors: e.actors,
    preview: e.preview ?? e.entityPreview ?? null,
    read: e.read ?? false,
    createdAt: e.createdAt ?? new Date().toISOString(),
    readAt: e.readAt ?? null,
    payload: e.actors
      ? {
          actors: e.actors,
          count: e.count ?? 1,
          clickUrl: e.clickUrl,
          entityPreview: e.entityPreview ?? e.preview ?? null,
        }
      : undefined,
  };
  return ms(t);
}

const Nr = ot()((e, t) => ({
  ...oo,

  initialize: () => {
    if (!t().isInitialized) {
      e({ isInitialized: true });
      t().connectSSE();
      t().fetchUnreadCount();
    }
  },

  fetchNotifications: async (n = false) => {
    const { status, nextCursor, notifications } = t();
    if (
      status !== "loading" &&
      !(!n && nextCursor === null && notifications.length > 0)
    ) {
      e({ status: "loading", error: null });
      try {
        const a = n || (nextCursor ?? undefined);
        const c = await Tt.getNotifications({ cursor: a, limit: 20 });
        e({
          notifications: n
            ? c.notifications
            : [...notifications, ...c.notifications],
          nextCursor: c.nextCursor,
          status: "success",
        });
      } catch (a) {
        const c =
          a instanceof Error ? a.message : "Failed to fetch notifications";
        e({ status: "error", error: c });
      }
    }
  },

  fetchUnreadCount: async () => {
    try {
      const n = await Tt.getUnreadCount();
      e({ unreadCount: n });
    } catch {}
  },

  markAsRead: async (n) => {
    if (n.length === 0) {
      return;
    }
    const r = t();

    const s = n.filter((i) => {
      const a = r.notifications.find((c) => c.id === i);
      return a && !a.isRead;
    });

    e((i) => ({
      notifications: i.notifications.map((a) =>
        n.includes(a.id) ? { ...a, isRead: true } : a
      ),

      unreadCount: Math.max(0, i.unreadCount - s.length),
    }));
    try {
      await Tt.markAsRead(n);
    } catch {}
  },

  markAsReadSilent: async (n) => {
    if (n.length !== 0) {
      e((r) => ({
        unreadCount: Math.max(0, r.unreadCount - n.length),
      }));
      try {
        await Tt.markAsRead(n);
      } catch {}
    }
  },

  markAllAsRead: async () => {
    e((n) => ({
      notifications: n.notifications.map((r) => ({
        ...r,
        isRead: true,
      })),

      unreadCount: 0,
    }));
    try {
      await Tt.markAllAsRead();
    } catch {}
  },

  connectSSE: () => {
    if (it) {
      return;
    }
    const n = H.getAccessToken();
    if (!n) {
      e({ sseStatus: "error", error: "Not authenticated" });
      return;
    }
    e({ sseStatus: "connecting" });
    const r = "/api/notifications/stream";
    it = new AbortController();

    (async () => {
      try {
        const i = await fetch(r, {
          method: "GET",
          headers: {
            Accept: "text/event-stream",
            Authorization: `Bearer ${n}`,
            "Cache-Control": "no-cache",
          },
          signal: it?.signal,
        });
        if (!i.ok) {
          if (i.status === 401) {
            try {
              const l = await lt.refreshSession();
              H.setAccessToken(l.accessToken);
              be.setAccessToken(l.accessToken);
              it = null;
              const h = io(Et);
              Et++;

              jt = setTimeout(() => {
                t().connectSSE();
              }, h);

              return;
            } catch {
              e({ sseStatus: "error", error: "Session expired" });
              return;
            }
          }
          throw new Error(`SSE connection failed: ${i.status}`);
        }
        if (!i.body) {
          throw new Error("SSE response has no body");
        }
        Et = 0;
        e({ sseStatus: "connected", error: null });

        if (Rt) {
          Rt.cancel().catch(() => {});
          Rt = null;
        }

        const a = i.body.getReader();
        Rt = a;
        const c = new TextDecoder();
        let u = "";

        while (true) {
          const { done, value } = await a.read();
          if (done) {
            break;
          }
          u += c.decode(value, { stream: true });
          const d = u.split(`
`);
          u = d.pop() || "";
          let f = "";
          let m = "";
          for (const T of d) {
            if (T.startsWith("event: ")) {
              f = T.slice(7);
            } else if (T.startsWith("data: ")) {
              m = T.slice(6);
            } else if (T === "" && m) {
              try {
                const g = JSON.parse(m);
                const p = f || g.type;
                if (p !== "connected") {
                  if (p === "notification") {
                    const _ = g.payload ?? g;
                    const v = la(_);
                    const y = v.payload.actors[0];

                    const C = {
                      id: v.id,
                      type: v.type,
                      actorName: y?.displayName || "Пользователь",
                      actorUsername: y?.username || "",
                      actorAvatar: y?.avatar || "",
                      count: v.payload.count,
                      message: da(
                        v.type,
                        y?.displayName || "Пользователь",
                        v.payload.count
                      ),
                      clickUrl: v.payload.clickUrl,
                      entityId: v.entityId,
                      parentEntityId: v.parentEntityId,
                    };

                    e((w) => ({
                      notifications: [v, ...w.notifications],
                      unreadCount: g.unreadCount ?? w.unreadCount,
                      lastSseToast: C,
                    }));

                    if (g.sound) {
                      ha();
                    }
                  } else {
                    if (p === "unread_count") {
                      e({ unreadCount: g.payload?.count ?? 0 });
                    }
                  }
                }
              } catch (g) {
                console.error("SSE message parse error:", g, m);
              }
              f = "";
              m = "";
            }
          }
        }
      } catch (i) {
        if (i.name === "AbortError") {
          return;
        }
        e({ sseStatus: "error", error: "SSE connection error" });

        if (Et >= ca) {
          console.warn(
            "SSE: Max reconnect attempts reached, stopping reconnection"
          );

          it = null;
          return;
        }

        const a = io(Et);
        Et++;

        jt = setTimeout(() => {
          it = null;
          t().connectSSE();
        }, a);
      }
    })();
  },

  disconnectSSE: () => {
    if (jt) {
      clearTimeout(jt);
      jt = null;
    }

    if (Rt) {
      Rt.cancel().catch(() => {});
      Rt = null;
    }

    if (it) {
      it.abort();
      it = null;
    }

    Et = 0;
    e({ sseStatus: "disconnected" });
  },

  fetchSettings: async () => {
    e({ settingsLoading: true });
    try {
      const n = await Tt.getSettings();
      e({ settings: n, settingsLoading: false });
    } catch {
      e({ settingsLoading: false });
    }
  },

  updateSettings: async (n) => {
    const { settings: r } = t();
    if (r) {
      const s = {
        webEnabled: n.webEnabled ?? r.webEnabled,
        soundEnabled: n.soundEnabled ?? r.soundEnabled,
        preferences: { ...r.preferences, ...n.preferences },
      };
      e({ settings: s });
    }
    try {
      await Tt.updateSettings(n);
    } catch {
      e({ settings: r });
    }
  },

  reset: () => {
    t().disconnectSSE();
    e(oo);
  },
}));

const ua = {
  follow: (e, t) =>
    t > 1
      ? `${e} и ещё ${t - 1} подписались на вас`
      : `${e} подписался(-ась) на вас`,
  follow_request: (e) => `${e} хочет подписаться на вас`,
  follow_accepted: (e) => `${e} принял(а) вашу заявку`,
  post_reaction: (e, t) =>
    t > 1 ? `${e} и ещё ${t - 1} оценили ваш пост` : `${e} оценил(а) ваш пост`,
  post_comment: (e) => `${e} прокомментировал(а) ваш пост`,
  post_repost: (e, t) =>
    t > 1 ? `${e} и ещё ${t - 1} сделали репост` : `${e} сделал(а) репост`,
  comment_reaction: (e, t) =>
    t > 1
      ? `${e} и ещё ${t - 1} оценили ваш комментарий`
      : `${e} оценил(а) ваш комментарий`,
  comment_reply: (e) => `${e} ответил(а) на ваш комментарий`,
  post_mention: (e) => `${e} упомянул(а) вас в посте`,
  comment_mention: (e) => `${e} упомянул(а) вас в комментарии`,
  wall_post: (e) => `${e} написал(а) на вашей стене`,
  like: (e, t) =>
    t > 1 ? `${e} и ещё ${t - 1} оценили ваш пост` : `${e} оценил(а) ваш пост`,
  comment: (e) => `${e} прокомментировал(а) ваш пост`,
  reply: (e) => `${e} ответил(а) на ваш комментарий`,
  repost: (e, t) =>
    t > 1 ? `${e} и ещё ${t - 1} сделали репост` : `${e} сделал(а) репост`,
  mention: (e) => `${e} упомянул(а) вас в посте`,
};

function da(e, t, n) {
  const ua_e = ua[e];
  return ua_e ? ua_e(t, n) : "Новое уведомление";
}
function ha() {
  try {
    const e = new Audio("/assets/notification.ogg");
    e.volume = 0.5;
    e.play().catch(() => {});
  } catch {}
}

const Sv = () => Nr((e) => e.unreadCount);

const fa = () => Nr((e) => e.lastSseToast);

const ma = ot((e, t) => ({
  portal: { active: false },
  loaded: false,

  fetchPortal: async () => {
    if (!t().loaded) {
      try {
        const n = await H.get("/v1/portal");
        e({ portal: n, loaded: true });
      } catch {
        e({ loaded: true });
      }
    }
  },
}));

const kv = () => ma((e) => e.portal);

const rn = new Set();
let en = null;
const pa = 30000; /* 3e4 */
function ga() {
  if (en === null) {
    en = window.setInterval(() => {
      rn.forEach((e) => e());
    }, pa);
  }
}
function va() {
  if (en !== null) {
    clearInterval(en);
    en = null;
  }
}
function _a(e) {
  rn.add(e);

  if (rn.size === 1) {
    ga();
  }
}
function wa(e) {
  rn.delete(e);

  if (rn.size === 0) {
    va();
  }
}
function Bn(e) {
  const t = Date.now();
  const n = Math.floor((t - e.getTime()) / 1000 /* 1e3 */);
  return n < 60
    ? "сейчас"
    : n < 3600
    ? `${Math.floor(n / 60)} мин.`
    : n < 86400
    ? `${Math.floor(n / 3600)} ч.`
    : n < 604800
    ? `${Math.floor(n / 86400)} дн.`
    : n < 2419200
    ? `${Math.floor(n / 604800)} нед.`
    : e.toLocaleDateString("ru-RU", { day: "numeric", month: "short" });
}
function ps(e) {
  const t = new Date(e).getTime();
  const n = !isNaN(t);
  const r = n ? t : 0;

  const [s, i] = A(() => (n ? Bn(new Date(r)) : ""));

  B(() => {
    if (!n) {
      i("");
      return;
    }
    const a = new Date(r);
    i(Bn(a));
    const c = () => {
      i(Bn(a));
    };
    _a(c);

    return () => wa(c);
  }, [r, n]);

  return s;
}
const ao = 1174;
function mt() {
  const [e, t] = A(() =>
    typeof window === "undefined" ? false : window.innerWidth < ao
  );

  B(() => {
    const n = window.matchMedia(`(max-width: ${ao - 1}px)`);

    const r = (s) => {
      t(s.matches);
    };

    t(n.matches);
    n.addEventListener("change", r);

    return () => {
      n.removeEventListener("change", r);
    };
  }, []);

  return e;
}
const ya = Bt({ isHidden: false });

const Ca = () => {
  const [e, t] = A(false);
  const n = I(0);

  B(() => {
    const r = () => {
      const window_scrollY = window.scrollY;
      const i = window_scrollY - n.current;

      if (i > 10 && window_scrollY > 50) {
        t(true);
      } else if (i < -10) {
        t(false);
      }

      n.current = window_scrollY;
    };
    window.addEventListener("scroll", r, { passive: true });

    return () => window.removeEventListener("scroll", r);
  }, []);

  return e;
};

function Ta() {
  const [e, t] = A(false);
  const [n, r] = A(false);
  const [s, i] = A(0);
  const [a, c] = A(false);
  const [u, l] = A(0);
  const [h, d] = A(0);
  const [f, m] = A([]);
  const [T, g] = A(0);
  const p = I(0);
  const _ = I(null);
  const v = I(null);
  const y = I(null);
  const C = I(null);
  const w = I([]);
  const b = I(null);
  const k = I(null);
  const R = I(null);
  const N = I(null);
  const P = I(null);
  const E = I(null);
  const U = I([]);
  const O = I(false);
  const q = I(0);
  const ee = I([]);
  const Q = I(0);

  B(() => {
    O.current = e;
  }, [e]);

  B(
    () => () => {
      if (b.current) {
        clearInterval(b.current);
      }

      if (k.current) {
        cancelAnimationFrame(k.current);
      }

      if (E.current) {
        clearInterval(E.current);
      }

      if (C.current) {
        C.current.getTracks().forEach(($) => $.stop());
      }

      if (_.current) {
        _.current.ondataavailable = null;
        _.current.onstop = null;
      }

      if (v.current && v.current.state !== "closed") {
        v.current.close();
      }

      if (R.current) {
        R.current.pause();
        R.current.onloadedmetadata = null;
        R.current.ontimeupdate = null;
        R.current.onended = null;
        R.current = null;
      }

      if (N.current) {
        URL.revokeObjectURL(N.current);
      }
    },
    []
  );

  const ie = S(() => {
    if (!y.current) {
      return;
    }
    const y_current = y.current;
    const y_current_frequencyBinCount = y_current.frequencyBinCount;
    const j = new Uint8Array(y_current_frequencyBinCount);
    y_current.getByteFrequencyData(j);
    let Y = 0;
    for (let re = 0; re < y_current_frequencyBinCount; re++) {
      Y += j[re];
    }
    const ne = Y / y_current_frequencyBinCount / 255;
    const se = Math.min(1, ne * 3);
    const he = Math.max(0.1, se);
    if (O.current) {
      const je = performance.now() - q.current;
      const Ee = Math.floor(je / 80);
      ee.current.push(he);

      if (Ee > Q.current) {
        const ee_current = ee.current;

        const ge =
          ee_current.length > 0
            ? ee_current.reduce((Z, L) => Z + L, 0) / ee_current.length
            : 0.05;

        U.current.push(ge);
        p.current += 4;

        m((Z) => [...Z, ge]);

        g(p.current);
        ee.current = [];
        Q.current = Ee;
      }

      k.current = requestAnimationFrame(ie);
    }
  }, []);

  const ae = S(() => {
    const U_current = U.current;
    return U_current.length > 0 ? [...U_current] : [];
  }, []);

  const X = S(async () => {
    try {
      if (N.current) {
        URL.revokeObjectURL(N.current);
        N.current = null;
      }

      P.current = null;

      if (R.current) {
        R.current.pause();
        R.current = null;
      }

      const $ = await navigator.mediaDevices.getUserMedia({
        audio: {
          echoCancellation: true,
          noiseSuppression: true,
          autoGainControl: true,
        },
      });
      C.current = $;
      const z = new AudioContext();
      v.current = z;
      const j = z.createAnalyser();
      j.fftSize = 256;
      j.smoothingTimeConstant = 0.3;
      y.current = j;
      z.createMediaStreamSource($).connect(j);
      const ne = new MediaRecorder($, {
        mimeType: MediaRecorder.isTypeSupported("audio/webm")
          ? "audio/webm"
          : "audio/mp4",
      });
      _.current = ne;
      w.current = [];
      U.current = [];
      q.current = performance.now();
      ee.current = [];
      Q.current = 0;

      ne.ondataavailable = (he) => {
        if (he.data.size > 0) {
          w.current.push(he.data);
        }
      };

      ne.start(100);
      t(true);
      r(false);
      i(0);
      l(0);
      d(0);
      c(false);
      p.current = 0;
      m([]);
      g(0);
      O.current = true;
      const se = Date.now();

      b.current = window.setInterval(() => {
        const he = Math.floor((Date.now() - se) / 1000 /* 1e3 */);
        i(he);
      }, 100);

      k.current = requestAnimationFrame(ie);
    } catch ($) {
      console.error("Error accessing microphone:", $);
    }
  }, [ie]);

  const J = S(
    () =>
      new Promise(($) => {
        O.current = false;
        t(false);

        if (_.current && _.current.state !== "inactive") {
          _.current.onstop = () => {
            if (w.current.length > 0) {
              const j = _.current?.mimeType || "audio/webm";
              const Y = new Blob(w.current, { type: j });
              const ne = URL.createObjectURL(Y);
              N.current = ne;
              P.current = Y;
              const se = new Audio(ne);
              R.current = se;

              se.onloadedmetadata = () => {
                if (isFinite(se.duration)) {
                  d(se.duration);
                } else {
                  se.currentTime = 1e101 /* 1e101 */;

                  se.ontimeupdate = () => {
                    se.ontimeupdate = null;
                    se.currentTime = 0;
                    d(se.duration);
                  };
                }
              };

              se.onended = () => {
                c(false);
                l(0);
                se.currentTime = 0;

                if (E.current) {
                  clearInterval(E.current);
                  E.current = null;
                }
              };

              r(true);
              $(Y);
            } else {
              $(null);
            }
          };

          _.current.stop();
        } else {
          $(null);
        }

        if (C.current) {
          C.current.getTracks().forEach((j) => j.stop());
          C.current = null;
        }

        if (b.current) {
          clearInterval(b.current);
          b.current = null;
        }

        if (k.current) {
          cancelAnimationFrame(k.current);
          k.current = null;
        }

        if (v.current && v.current.state !== "closed") {
          v.current.close();
          v.current = null;
        }

        const z = ae();
        p.current = 0;
        m(z);
        g(0);
        l(0);
      }),
    [ae]
  );

  const D = S(() => {
    O.current = false;

    if (_.current) {
      _.current.ondataavailable = null;
      _.current.onstop = null;
      _.current.state !== "inactive" && _.current.stop();
      _.current = null;
    }

    if (C.current) {
      C.current.getTracks().forEach(($) => $.stop());
      C.current = null;
    }

    if (b.current) {
      clearInterval(b.current);
      b.current = null;
    }

    if (k.current) {
      cancelAnimationFrame(k.current);
      k.current = null;
    }

    if (E.current) {
      clearInterval(E.current);
      E.current = null;
    }

    if (v.current && v.current.state !== "closed") {
      v.current.close();
      v.current = null;
    }

    if (R.current) {
      R.current.pause();
      R.current = null;
    }

    if (N.current) {
      URL.revokeObjectURL(N.current);
      N.current = null;
    }

    P.current = null;
    t(false);
    r(false);
    i(0);
    c(false);
    l(0);
    d(0);
    p.current = 0;
    m([]);
    g(0);
    U.current = [];
    w.current = [];
  }, []);

  const W = S(() => {
    if (E.current) {
      clearInterval(E.current);
    }

    E.current = window.setInterval(() => {
      const R_current = R.current;
      if (
        !R_current ||
        R_current.paused ||
        R_current.paused ||
        R_current.ended
      ) {
        if (E.current) {
          clearInterval(E.current);
          E.current = null;
        }

        return;
      }

      if (R_current.duration > 0) {
        l(R_current.currentTime / R_current.duration);
      }
    }, 100);
  }, []);

  const G = S(() => {
    if (!R.current || !N.current) {
      return;
    }

    if (E.current) {
      clearInterval(E.current);
      E.current = null;
    }

    const R_current = R.current;

    if (R_current.ended || R_current.currentTime >= R_current.duration) {
      R_current.currentTime = 0;
      l(0);
    }

    c(true);

    R_current.play()
      .then(() => {
        W();
      })
      .catch((z) => {
        console.error("Error playing audio:", z);
        c(false);
      });
  }, [W]);

  const M = S(() => {
    if (E.current) {
      clearInterval(E.current);
      E.current = null;
    }

    if (R.current) {
      R.current.pause();

      R.current.duration > 0 && l(R.current.currentTime / R.current.duration);
    }

    c(false);
  }, []);

  const x = S(
    ($) => {
      if (!R.current || !n) {
        return;
      }
      const R_current = R.current;
      const j = Math.max(0, Math.min(1, $));
      R_current.currentTime = j * R_current.duration;
      l(j);

      if (R_current.paused) {
        E.current && (clearInterval(E.current), (E.current = null));

        R_current.play()
          .then(() => {
            c(true);
            W();
          })
          .catch((Y) => {
            console.error("Error playing audio:", Y);
          });
      }
    },
    [n, W]
  );

  const F = S(() => P.current, []);

  return {
    isRecording: e,
    hasRecording: n,
    recordingTime: s,
    audioLevels: f,
    slideOffset: T,
    isPlaying: a,
    playbackProgress: u,
    duration: h,
    audioElementRef: R,
    startRecording: X,
    stopRecording: J,
    cancelRecording: D,
    playAudio: G,
    pauseAudio: M,
    seekTo: x,
    getAudioBlob: F,
  };
}
const Ea = 0.5;
const Ra = 500;
const co = 1000; /* 1e3 */
class Na {
  viewedPosts = new Set();
  observer = null;
  pendingTimers = new Map();
  elementToPostId = new WeakMap();
  constructor() {
    if (typeof window !== "undefined") {
      this.initObserver();
    }
  }
  initObserver() {
    this.observer = new IntersectionObserver(
      (t) => {
        for (const n of t) {
          const r = this.elementToPostId.get(n.target);
          if (r) {
            if (n.isIntersecting) {
              if (!this.pendingTimers.has(r) && !this.viewedPosts.has(r)) {
                const s = window.setTimeout(() => {
                  this.pendingTimers.delete(r);

                  if (!this.viewedPosts.has(r)) {
                    this.sendView(r);
                  }
                }, Ra);
                this.pendingTimers.set(r, s);
              }
            } else {
              const s = this.pendingTimers.get(r);

              if (s !== undefined) {
                clearTimeout(s);
                this.pendingTimers.delete(r);
              }
            }
          }
        }
      },
      { threshold: Ea }
    );
  }
  observe(t, n) {
    if (this.observer && !this.viewedPosts.has(t)) {
      if (!this.viewedPosts.has(t)) {
        this.elementToPostId.set(n, t);
        this.observer.observe(n);
      }
    }
  }
  unobserve(t) {
    if (!this.observer) {
      return;
    }
    const n = this.elementToPostId.get(t);
    if (n) {
      const r = this.pendingTimers.get(n);

      if (r !== undefined) {
        clearTimeout(r);
        this.pendingTimers.delete(n);
      }
    }
    this.observer.unobserve(t);
  }
  sendView(t) {
    if (!this.viewedPosts.has(t)) {
      this.viewedPosts.size >= co &&
        Array.from(this.viewedPosts)
          .slice(0, co / 2)
          .forEach((r) => this.viewedPosts.delete(r));

      this.viewedPosts.add(t);

      Oe.trackView(t).catch(() => {
        this.viewedPosts.delete(t);
      });
    }
  }
  isViewed(t) {
    return this.viewedPosts.has(t);
  }
  clearViewedCache() {
    this.viewedPosts.clear();
  }
  destroy() {
    for (const t of this.pendingTimers.values()) {
      clearTimeout(t);
    }
    this.pendingTimers.clear();

    if (this.observer) {
      this.observer.disconnect();
      this.observer = null;
    }
  }
}
const Hn = new Na();
function Sa(e, t) {
  B(() => {
    const t_current = t.current;
    if (!(!t_current || Hn.isViewed(e))) {
      Hn.observe(e, t_current);

      return () => {
        Hn.unobserve(t_current);
      };
    }
  }, [e, t]);
}
function On(e = "", t = []) {
  const [n, r] = A(e);
  const [s, i] = A(t);
  const a = I(null);

  const c = S((h, d) => {
    r(h);
    i(d);
  }, []);

  const u = S((h) => {
    a.current?.insertText(h);
  }, []);

  const l = S(() => {
    r("");
    i([]);
  }, []);

  return {
    text: n,
    spans: s,
    editorRef: a,
    handleChange: c,
    insertText: u,
    reset: l,
    setText: r,
    setSpans: i,
  };
}

const gs = ({ size: e = 24 }) =>
  o("svg", {
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      o("path", {
        d: "M5 12L12 5L19 12",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
      o("path", {
        d: "M12 19V5",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
    ],
  });

const vs = ({ size: e = 20 }) =>
  o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: e,
    height: e,
    fill: "none",
    viewBox: "0 0 20 20",
    children: o("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "1.833",
      d: "m17.867 9.208-7.659 7.659a5.003 5.003 0 1 1-7.075-7.075l7.659-7.659a3.335 3.335 0 1 1 4.716 4.717l-7.666 7.658a1.667 1.667 0 1 1-2.359-2.358l7.075-7.067",
    }),
  });

const ka = ({ size: e = 18 }) =>
  o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: [
      o("path", { d: "M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z" }),
      o("path", { d: "M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z" }),
    ],
  });

const ba = ({ size: e = 18 }) =>
  o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: [
      o("polyline", { points: "16 18 22 12 16 6" }),
      o("polyline", { points: "8 6 2 12 8 18" }),
    ],
  });

const Ia = ({ size: e = 24 }) =>
  o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: e,
    height: e,
    fill: "none",
    viewBox: "0 0 24 24",
    children: [
      o("circle", {
        cx: "12",
        cy: "12",
        r: "10",
        stroke: "currentColor",
        strokeWidth: "2",
      }),
      o("path", {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeWidth: "2",
        d: "M15 9l-6 6m0-6l6 6",
      }),
    ],
  });

const Pa = ({ size: e = 24 }) =>
  o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: e,
    height: e,
    fill: "none",
    viewBox: "0 0 24 24",
    children: [
      o("circle", {
        cx: "12",
        cy: "12",
        r: "10",
        stroke: "currentColor",
        strokeWidth: "2",
      }),
      o("path", {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeWidth: "2",
        d: "M12 16v-4m0-4h.01",
      }),
    ],
  });

const Aa = ({ size: e = 18 }) =>
  o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: [
      o("line", { x1: "19", y1: "4", x2: "10", y2: "4" }),
      o("line", { x1: "14", y1: "20", x2: "5", y2: "20" }),
      o("line", { x1: "15", y1: "4", x2: "9", y2: "20" }),
    ],
  });

const _s = ({ size: e = 18 }) =>
  o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: [
      o("path", {
        d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",
      }),
      o("path", {
        d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",
      }),
    ],
  });

const xa = ({ size: e = 18 }) =>
  o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    children: o("path", {
      d: "M10 8c-2.2 0-4 1.8-4 4v6h6v-6H8c0-1.1.9-2 2-2V8zm8 0c-2.2 0-4 1.8-4 4v6h6v-6h-4c0-1.1.9-2 2-2V8z",
    }),
  });

const Oa = ({ size: e = 18 }) =>
  o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: [
      o("path", {
        d: "M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94",
      }),
      o("path", {
        d: "M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19",
      }),
      o("line", { x1: "1", y1: "1", x2: "23", y2: "23" }),
      o("path", { d: "M14.12 14.12a3 3 0 1 1-4.24-4.24" }),
    ],
  });

const La = ({ size: e = 18 }) =>
  o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: [
      o("path", { d: "M16 4H9a3 3 0 0 0-3 3c0 1.66 1.34 3 3 3h6" }),
      o("path", { d: "M8 20h7a3 3 0 0 0 3-3c0-1.66-1.34-3-3-3H4" }),
      o("line", { x1: "4", y1: "12", x2: "20", y2: "12" }),
    ],
  });

const Ma = ({ size: e = 24 }) =>
  o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: e,
    height: e,
    fill: "none",
    viewBox: "0 0 24 24",
    children: [
      o("circle", {
        cx: "12",
        cy: "12",
        r: "10",
        stroke: "currentColor",
        strokeWidth: "2",
      }),
      o("path", {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "2",
        d: "M8 12l3 3 5-6",
      }),
    ],
  });

const $a = ({ size: e = 18 }) =>
  o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: [
      o("path", { d: "M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3" }),
      o("line", { x1: "4", y1: "21", x2: "20", y2: "21" }),
    ],
  });

const Da = ({ size: e = 24 }) =>
  o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: e,
    height: e,
    fill: "none",
    viewBox: "0 0 24 24",
    children: o("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M12 9v4m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z",
    }),
  });

const rt = ({ size: e = 24 }) =>
  o("svg", {
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      o("path", {
        d: "M18 6L6 18",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
      o("path", {
        d: "M6 6L18 18",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
    ],
  });

const Sr = ({ filled: e = false, size: t = 20 }) =>
  o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: t,
    height: t,
    fill: "none",
    viewBox: "0 0 20 20",
    children: o("path", {
      stroke: "currentColor",
      strokeWidth: 2,
      d: "M14.953 5.046c-2.73-2.728-7.173-2.728-9.903 0-2.07 2.07-2.634 5.247-1.41 7.888.136.336.232.59.232.798 0 .247-.105.553-.205.849-.195.573-.416 1.222.058 1.696.475.475 1.125.251 1.697.055.294-.1.598-.205.84-.205.215 0 .486.109.798.235a7.034 7.034 0 0 0 7.893-1.412c2.73-2.73 2.73-7.172 0-9.904Z",
      clipRule: "evenodd",
      fill: e ? "currentColor" : "none",
    }),
  });

const ws = ({ size: e = 18 }) =>
  o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: [
      o("path", {
        d: "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",
      }),
      o("path", {
        d: "M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z",
      }),
    ],
  });

const Ua = ({ size: e = 8 }) =>
  o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: e,
    height: e,
    fill: "none",
    viewBox: "0 0 8 8",
    children: [
      o("g", {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "2",
        clipPath: "url(#af)",
        children: o("path", { d: "M1 4h6M4 1v6" }),
      }),
      o("defs", {
        children: o("clipPath", {
          id: "af",
          children: o("path", { fill: "#fff", d: "M0 0h8v8H0z" }),
        }),
      }),
    ],
  });

const Fa = ({ size: e = 8 }) =>
  o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: e,
    height: e,
    fill: "none",
    viewBox: "0 0 8 8",
    children: o("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M1 4h6",
    }),
  });

const ys = ({ size: e = 18 }) =>
  o("svg", {
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: o("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M17.0463 8.361L19.6973 3.35C19.8203 3.118 19.8133 2.839 19.6773 2.613C19.5413 2.387 19.2973 2.25 19.0343 2.25H4.96533C4.55133 2.25 4.21533 2.586 4.21533 3V21C4.21533 21.414 4.55133 21.75 4.96533 21.75C5.37933 21.75 5.71533 21.414 5.71533 21V14.544L19.0443 14.365C19.3073 14.361 19.5483 14.221 19.6813 13.995C19.8143 13.768 19.8183 13.489 19.6943 13.258L17.0463 8.361Z",
      fill: "currentColor",
    }),
  });

const Ln = ({ filled: e = false, size: t = 20, className: n }) =>
  o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: t,
    height: t,
    viewBox: "0 0 20 20",
    fill: "none",
    className: n,
    children: o("path", {
      fill: e ? "currentColor" : "none",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "1.667",
      d: "M10 4.583C8.75 2.917 6.25 2.5 4.583 3.75 2.917 5 2.083 7.5 3.333 10S10 16.667 10 16.667 15.417 12.5 16.667 10s0-5-1.667-6.25-4.167-.833-5 .833Z",
    }),
  });

const Cs = ({ size: e = 24 }) =>
  o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "3",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: { animation: "spin 1s linear infinite" },
    children: o("path", { d: "M19 12a7 7 0 1 1-4.83-6.66" }),
  });

const Ba = ({ size: e = 18 }) =>
  o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: e,
    height: e,
    fill: "none",
    viewBox: "0 0 18 18",
    children: o("g", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      children: [
        o("path", {
          d: "M9 2c-.53 0-1.04.219-1.414.608C7.21 2.998 7 3.526 7 4.077v4.846c0 .55.21 1.08.586 1.469.375.39.884.608 1.414.608.53 0 1.04-.219 1.414-.608.375-.39.586-.918.586-1.469V4.077c0-.55-.21-1.08-.586-1.469A1.963 1.963 0 0 0 9 2Z",
        }),
        o("path", {
          d: "M14 8v1.333c0 1.238-.527 2.425-1.464 3.3C11.598 13.508 10.326 14 9 14s-2.598-.492-3.536-1.367C4.527 11.758 4 10.571 4 9.333V8M9 14v2",
        }),
      ],
    }),
  });

const Ts = ({ size: e = 18 }) =>
  o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: e,
    height: e,
    fill: "none",
    viewBox: "0 0 18 18",
    children: o("path", {
      fill: "currentColor",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M9 9.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM14.25 9.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM3.75 9.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z",
    }),
  });

const Ha = ({ size: e = 20 }) =>
  o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: e,
    height: e,
    viewBox: "0 0 20 20",
    fill: "none",
    children: o("path", {
      fill: "currentColor",
      d: "M10.004 1C14.92 1 18.976 4.61 19 8.955c0 2.747-2.255 5-5.002 5h-1.797a1.477 1.477 0 0 0-1.502 1.501c0 .426.134.753.395 1.013.231.26.393.618.393 1.011 0 .848-.65 1.52-1.483 1.52C5.052 19 1 14.95 1 10s4.052-9 9.004-9ZM5.25 9a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5Zm9-2a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5Zm-7-2a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5Zm4-1a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5Z",
    }),
  });

const Es = ({ size: e = 16 }) =>
  o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: e,
    height: e,
    fill: "none",
    viewBox: "0 0 16 16",
    children: [
      o("rect", {
        width: "4",
        height: "10",
        x: "3",
        y: "3",
        fill: "currentColor",
        rx: "1.5",
      }),
      o("rect", {
        width: "4",
        height: "10",
        x: "9",
        y: "3",
        fill: "currentColor",
        rx: "1.5",
      }),
    ],
  });

const lo = ({ size: e = 18 }) =>
  o("svg", {
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: o("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M20.0397 9.25349L14.7397 3.95349C13.9837 3.19649 12.6657 3.19649 11.9097 3.95349L11.3187 4.54549C10.7487 5.11449 10.5767 5.96749 10.8957 6.75249C11.0497 7.12649 10.9647 7.55249 10.6797 7.83949L9.34373 9.17449C9.22773 9.28849 9.08673 9.37449 8.93473 9.42249L5.77073 10.4125C5.46773 10.5085 5.18573 10.6795 4.95673 10.9065C4.57773 11.2855 4.36973 11.7875 4.36973 12.3225C4.36973 12.8575 4.57873 13.3585 4.95673 13.7355L7.07573 15.8545L3.59573 19.3345C3.30273 19.6275 3.30273 20.1025 3.59573 20.3955C3.74173 20.5415 3.93373 20.6145 4.12573 20.6145C4.31773 20.6145 4.50973 20.5415 4.65573 20.3955L8.13573 16.9145L10.2577 19.0365C10.6467 19.4255 11.1587 19.6195 11.6707 19.6195C12.1837 19.6195 12.6957 19.4245 13.0867 19.0355C13.3147 18.8055 13.4847 18.5235 13.5797 18.2205L14.5687 15.0605C14.6187 14.9045 14.7037 14.7635 14.8167 14.6505L16.1537 13.3125C16.4387 13.0265 16.8627 12.9415 17.2737 13.1085C18.0197 13.4155 18.8747 13.2465 19.4477 12.6745L20.0397 12.0815C20.8187 11.3015 20.8187 10.0325 20.0397 9.25349Z",
      fill: "currentColor",
    }),
  });

const Va = ({ size: e = 20 }) =>
  o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: e,
    height: e,
    fill: "none",
    viewBox: "0 0 24 24",
    children: o("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M18 20V10M12 20V4M6 20v-6",
    }),
  });

const Rs = ({ size: e = 16 }) =>
  o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: e,
    height: e,
    fill: "none",
    viewBox: "0 0 16 16",
    children: o("path", {
      fill: "currentColor",
      d: "M13 6.268c1.333.77 1.333 2.694 0 3.464l-6 3.464c-1.333.77-3-.192-3-1.732V4.536c0-1.54 1.667-2.502 3-1.732l6 3.464Z",
    }),
  });

const Ns = ({ size: e = 24 }) =>
  o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: e,
    height: e,
    fill: "none",
    viewBox: "0 0 24 24",
    children: o("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M5 12h14M12 5v14",
    }),
  });

const bn = ({ size: e = 20 }) =>
  o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: e,
    height: e,
    fill: "none",
    viewBox: "0 0 24 24",
    children: [
      o("path", {
        stroke: "currentColor",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-width": "2",
        d: "m2 9 3-3 3 3",
      }),
      o("path", {
        stroke: "currentColor",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-width": "2",
        d: "M13 18H7a2 2 0 0 1-2-2V6M22 15l-3 3-3-3",
      }),
      o("path", {
        stroke: "currentColor",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-width": "2",
        d: "M11 6h6a2 2 0 0 1 2 2v10",
      }),
    ],
  });

const Wa = ({ size: e = 20, color: t = "currentColor" }) =>
  o("svg", {
    width: e,
    height: e,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      o("path", {
        d: "M10 17.5a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15Z",
        stroke: t,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
      o("path", {
        d: "M7.6 11.908c.585.76 1.445 1.234 2.4 1.234.956 0 1.816-.474 2.4-1.234M7.308 7.504v-.043m-.038-.127a.188.188 0 1 0 .002.374.188.188 0 0 0-.002-.374ZM12.692 7.504v-.043m-.005-.127a.188.188 0 1 0 .002.374.188.188 0 0 0-.002-.374Z",
        stroke: t,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
    ],
  });

const ja = ({ size: e = 16 }) =>
  o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: e,
    height: e,
    fill: "none",
    viewBox: "0 0 16 16",
    children: o("rect", {
      width: "10",
      height: "10",
      x: "3",
      y: "3",
      fill: "currentColor",
      rx: "3",
    }),
  });

const Ss = ({ size: e = 18 }) =>
  o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: [
      o("polyline", { points: "3 6 5 6 21 6" }),
      o("path", {
        d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",
      }),
      o("line", { x1: "10", y1: "11", x2: "10", y2: "17" }),
      o("line", { x1: "14", y1: "11", x2: "14", y2: "17" }),
    ],
  });

const za = ({ size: e = 16 }) =>
  o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: e,
    height: e,
    fill: "none",
    viewBox: "0 0 16 16",
    children: [
      o("path", {
        fill: "#0080FF",
        d: "M6.724.821a1.63 1.63 0 0 1 2.858.051l.556 1.042a1.634 1.634 0 0 0 1.672.856l1.155-.166c1.263-.181 2.238 1.108 1.742 2.303L14.253 6a1.69 1.69 0 0 0 .385 1.863l.847.815c.927.891.544 2.47-.685 2.821l-1.122.32a1.663 1.663 0 0 0-1.192 1.468l-.098 1.181c-.108 1.294-1.56 1.974-2.596 1.216l-.946-.693a1.62 1.62 0 0 0-1.872-.033l-.969.658c-1.06.721-2.49-.01-2.552-1.306l-.058-1.184a1.666 1.666 0 0 0-1.141-1.51l-1.11-.36C-.073 10.864-.402 9.272.556 8.413l.874-.783a1.69 1.69 0 0 0 .448-1.849l-.416-1.108c-.454-1.212.565-2.466 1.821-2.24l1.148.207a1.632 1.632 0 0 0 1.7-.796L6.724.82Z",
      }),
      o("path", {
        stroke: "#fff",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "1.333",
        d: "M10.667 6.667 7.11 10.222 5.334 8.444",
      }),
    ],
  });

const ks = ({ size: e = 20 }) =>
  o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: e,
    height: e,
    fill: "none",
    viewBox: "0 0 20 20",
    children: [
      o("path", {
        stroke: "currentColor",
        strokeWidth: "1.5",
        d: "M2 10s2.91-6 8-6 8 6 8 6-2.91 6-8 6-8-6-8-6Z",
      }),
      o("path", {
        stroke: "currentColor",
        strokeWidth: "1.5",
        d: "M10 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z",
      }),
    ],
  });

const ve = {
  HOME: "/",
  LOGIN: "/login",
  REGISTER: "/register",
  FORGOT_PASSWORD: "/forgot-password",
  VERIFY_EMAIL: "/verify-email",
  RESET_PASSWORD: "/reset-password",
  ONBOARDING: "/onboarding",
  TERMS: "/terms",
  PRIVACY: "/privacy",
  COOKIES: "/cookies",
  EXTERNAL: "/external",
  SUPPORT: "/support",
  CHILD_SAFETY: "/child-safety",
  SUBSCRIPTION_TERMS: "/subscription-terms",
};

const uo = [
  ve.LOGIN,
  ve.REGISTER,
  ve.FORGOT_PASSWORD,
  ve.RESET_PASSWORD,
  ve.VERIFY_EMAIL,
  ve.TERMS,
  ve.PRIVACY,
  ve.COOKIES,
  ve.EXTERNAL,
  ve.SUPPORT,
  ve.CHILD_SAFETY,
  ve.SUBSCRIPTION_TERMS,
];

const qa = [
  ve.LOGIN,
  ve.REGISTER,
  ve.FORGOT_PASSWORD,
  ve.RESET_PASSWORD,
  ve.VERIFY_EMAIL,
  ve.ONBOARDING,
];

const Ya = "QYP36fUx";
const Xa = "_7afjMMjS";
const Ga = "crRhcI7j";
const Ka = "mPvkVXNc";
const Za = "R6rPmVO3";
const Qa = "_4M-jb-Yf";
const Ja = "BzRajAFf";
const ec = "xWaW7ynd";
const tc = "mC4WabM6";
const nc = "CdIxpdOF";
const rc = "o8sqdA1y";
const oc = "G7wJQLhH";
const sc = "Idqhap9T";
const ic = "bcyDy-AX";

const xe = {
  overlay: Ya,
  modalWrapper: Xa,
  wide: Ga,
  modal: Ka,
  frameless: Za,
  header: Qa,
  title: Ja,
  closeButton: ec,
  externalCloseButton: tc,
  mobileOverlay: nc,
  closing: rc,
  bottomSheet: oc,
  dragHandle: sc,
  dragIndicator: ic,
};

const ac = Bt(null);
const cc = 100;
const lc = 0.5;
function yt({
  children: e,
  onClose: t,
  title: n,
  showHeader: r = true,
  showCloseButton: s = true,
  frameless: i = false,
  className: a,
  contentClassName: c,
  size: u = "default",
  onBeforeClose: l,
}) {
  mt();
  const h = I(null);
  const d = I(null);
  const f = I(null);
  const m = mt();
  const T = I(0);
  const g = I(false);
  const [p, _] = A(false);
  const v = I(0);
  const y = I(0);
  const C = I(0);
  B(() => {
    const X = (D) => {
      if (D.key === "Escape") {
        if (l && !l()) {
          return;
        }
        t();
      }
    };

    const J = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    document.addEventListener("keydown", X);

    return () => {
      document.removeEventListener("keydown", X);
      document.documentElement.style.overflow = J;
    };
  }, [t]);

  const w = (X) => {
    f.current = X.target;
  };

  const b = (X) => {
    if (f.current === h.current && X.target === h.current) {
      if (m) {
        k();
      } else {
        if (l && !l()) {
          return;
        }
        t();
      }
    }
    f.current = null;
  };

  const k = S(() => {
    if (l && !l()) {
      E(0, "transform 0.2s ease-out");
      U(0);
      T.current = 0;
      return;
    }
    _(true);

    setTimeout(() => {
      t();
    }, 200);
  }, [t, l]);

  const R = I(false);
  const N = I(false);

  const P = (X) => {
    let J = X;

    while (J && J !== d.current) {
      const W = window.getComputedStyle(J).overflowY;
      if ((W === "auto" || W === "scroll") && J.scrollHeight > J.clientHeight) {
        return J;
      }
      J = J.parentElement;
    }

    return null;
  };

  const E = (X, J) => {
    if (d.current) {
      d.current.style.transform = X > 0 ? `translateY(${X}px)` : "";
      d.current.style.transition = J || "";
    }
  };

  const U = (X) => {
    if (h.current && X > 0) {
      h.current.style.backgroundColor = `rgba(0, 0, 0, ${Math.max(
        0,
        0.4 - X / 500
      )})`;
    } else if (h.current) {
      h.current.style.backgroundColor = "";
    }
  };

  const O = (X) => {
    if (!m) {
      return;
    }
    v.current = X.touches[0].clientY;
    y.current = Date.now();
    C.current = X.touches[0].clientY;
    const X_target = X.target;
    if (X_target.closest(`.${xe.dragHandle}`)) {
      R.current = true;
      N.current = true;
      g.current = true;

      if (d.current) {
        d.current.style.transition = "none";
      }

      return;
    }
    R.current = false;

    if (
      X_target.closest(
        'button, a, input, textarea, select, video, [role="button"]'
      )
    ) {
      N.current = false;
      return;
    }

    if (X_target.tagName === "CANVAS" || X_target.closest("canvas")) {
      N.current = false;
      return;
    }
    const M = P(X_target);
    N.current = !M || M.scrollTop === 0;
  };

  const q = (X) => {
    if (!m) {
      return;
    }
    const J = X.touches[0].clientY;
    const D = J - v.current;
    C.current = J;

    if (R.current) {
      if (D > 0) {
        T.current = D;
        E(D);
        U(D);
        X.preventDefault();
      }

      return;
    }

    if (N.current) {
      if (g.current && T.current > 0) {
        if (D > 0) {
          T.current = D;
          E(D);
          U(D);
          X.preventDefault();
        } else {
          T.current = 0;
          g.current = false;
          E(0);
          U(0);
        }

        return;
      }

      if (D > 0) {
        g.current ||
          ((g.current = true),
          d.current && (d.current.style.transition = "none"));
        T.current = D;
        E(D);
        U(D);
        X.preventDefault();
      }
    }
  };

  const ee = () => {
    if (!m) {
      return;
    }
    const X = C.current - v.current;
    const J = Date.now() - y.current;
    const D = X / J;

    if (g.current && (X > cc || D > lc)) {
      k();
    } else if (T.current > 0) {
      E(0, "transform 0.2s ease-out");
      U(0);
      T.current = 0;
    }

    g.current = false;
    R.current = false;
    N.current = false;
  };

  const ie = (() => {
    if (m && p) {
      return {
        transform: "translateY(100%)",
        transition: "transform 0.2s ease-out",
      };
    }
  })();

  const ae = { onClose: t, isMobile: m, isClosing: p, handleClose: k };
  return o(ac.Provider, {
    value: ae,
    children: o("div", {
      ref: h,
      className: `${xe.overlay} ${m ? xe.mobileOverlay : ""} ${
        p ? xe.closing : ""
      }`,
      onMouseDown: w,
      onMouseUp: b,
      children: o("div", {
        ref: d,
        className: `${xe.modalWrapper} ${u === "wide" ? xe.wide : ""} ${
          m ? xe.bottomSheet : ""
        }`,
        style: ie,
        onTouchStart: O,
        onTouchMove: q,
        onTouchEnd: ee,
        children: [
          i &&
            !m &&
            o("button", {
              type: "button",
              className: xe.externalCloseButton,
              onClick: (X) => {
                X.stopPropagation();
                t();
              },
              children: o(rt, { size: 24 }),
            }),
          m &&
            o("div", {
              className: xe.dragHandle,
              children: o("div", { className: xe.dragIndicator }),
            }),
          o("div", {
            className: `${xe.modal} ${i ? xe.frameless : ""} ${a || ""} ${
              c || ""
            }`,
            children: [
              !i &&
                r &&
                !m &&
                o("div", {
                  className: xe.header,
                  children: [
                    o("span", { className: xe.title, children: n }),
                    s &&
                      o("button", {
                        type: "button",
                        className: xe.closeButton,
                        onClick: (X) => {
                          X.stopPropagation();
                          t();
                        },
                        children: o(rt, { size: 16 }),
                      }),
                  ],
                }),
              e,
            ],
          }),
        ],
      }),
    }),
  });
}
const uc = "GKtAeZvh";
const dc = "_4kYPGG9W";
const hc = "pl3SNO9Y";
const fc = "-OjVJvXv";
const mc = "mKywUPJV";
const pc = "ORxo1gch";
const gc = "_-0ox-2T5";
const vc = "ufqwLNRT";
const _c = "Kb0ZHEmq";
const wc = "L6foA0ob";
const yc = "p8fXVDg6";
const Cc = "iiFzRcQy";

const gt = {
  avatar: uc,
  xs: dc,
  emoji: hc,
  onlineDot: fc,
  sm: mc,
  md: pc,
  lg: gc,
  xl: vc,
  badge: _c,
  followBadge: wc,
  notFollowing: yc,
  following: Cc,
};

function Tc(e) {
  return (
    e.startsWith("http://") ||
    e.startsWith("https://") ||
    e.startsWith("https://") ||
    e.startsWith("/")
  );
}
function Ze({
  src: e,
  alt: t,
  size: n = "md",
  badge: r,
  online: s,
  followBadge: i,
  onFollowBadgeClick: a,
  className: c,
}) {
  const u = e ? Tc(e) : false;
  return o("div", {
    className: `${gt.avatar} ${gt[n]} ${c || ""}`,
    children: [
      u && e
        ? o("img", { src: e, alt: t || "" })
        : o("span", { className: gt.emoji, children: e || "👤" }),
      r && o("div", { className: gt.badge, children: r }),
      i !== undefined
        ? o("button", {
            type: "button",
            className: `${gt.followBadge} ${
              i ? gt.following : gt.notFollowing
            }`,
            onClick: (l) => {
              l.preventDefault();
              l.stopPropagation();
              a?.(l);
            },
            children: i ? o(Fa, { size: 8 }) : o(Ua, { size: 8 }),
          })
        : s && o("span", { className: gt.onlineDot }),
    ],
  });
}
const Ec = "LGbsLd3i";
const Rc = "Qtvr3ePW";
const Nc = "I1XzQEdO";
const Vn = { hint: Ec, multiline: Rc, arrow: Nc };
function dr({ text: e, children: t, className: n, multiline: r }) {
  const s = I(null);
  const [i, a] = A(null);

  const c = S(() => {
    if (!s.current) {
      return;
    }
    const h = s.current.getBoundingClientRect();
    a({ x: h.left + h.width / 2, y: h.top });
  }, []);

  const u = S(() => {
    a(null);
  }, []);

  const l = S(
    (h) => {
      h.stopPropagation();

      if (i) {
        u();
      } else {
        c();
      }
    },
    [i, c, u]
  );

  B(() => {
    if (!i) {
      return;
    }
    const h = (d) => {
      if (s.current && !s.current.contains(d.target)) {
        u();
      }
    };
    document.addEventListener("touchstart", h);
    document.addEventListener("mousedown", h);
    window.addEventListener("scroll", u, true);

    return () => {
      document.removeEventListener("touchstart", h);
      document.removeEventListener("mousedown", h);
      window.removeEventListener("scroll", u, true);
    };
  }, [i, u]);

  return o("span", {
    ref: s,
    className: n,
    onMouseEnter: c,
    onMouseLeave: u,
    onClick: l,
    children: [
      t,
      i &&
        Ct(
          o("div", {
            className: `${Vn.hint} ${r ? Vn.multiline : ""}`,
            style: { left: `${i.x}px`, top: `${i.y}px` },
            children: [e, o("span", { className: Vn.arrow })],
          }),
          document.body
        ),
    ],
  });
}
const Sc = "z8EyAYBL";
const kc = "Y3JzbYs0";
const bc = "XG8iIx1m";
const Ic = "lqZNoMkv";
const zt = {
  sidebar: Sc,
  sidebarContent: kc,
  sidebarBottom: bc,
  legalLinks: Ic,
};

const Pc = () => {
  const [e] = Ii();
  return (
    Ce(() => {
      const n = e.url || "/";
      return qa.some((r) => n.startsWith(r));
    }, [e.url]) ||
    o("aside", {
      className: zt.sidebar,
      children: [
        o("div", { className: zt.sidebarContent }),
        o("div", {
          className: zt.sidebarBottom,
          children: [
            o("ul", {
              className: zt.legalLinks,
              children: [
                o("li", {
                  children: o("a", {
                    href: "https://статус.итд.com",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: "Статус серверов",
                  }),
                }),
                o("li", {
                  children: o("a", {
                    href: "/terms",
                    children: "Условия использования",
                  }),
                }),
                o("li", {
                  children: o("a", {
                    href: "/privacy",
                    children: "Конфиденциальность",
                  }),
                }),
                o("li", {
                  children: o("a", {
                    href: "/cookies",
                    children: "Политика Cookies",
                  }),
                }),
              ],
            }),
            o("span", {
              className: zt.copyright,
              children: "© 2026 ООО «ИТД»",
            }),
          ],
        }),
      ],
    })
  );
};

const bs = Bt(null);
let Ac = 0;
function xc({ children: e }) {
  const [t, n] = A([]);

  const r = S((a) => {
    const c = `modal-${++Ac}`;

    n((u) => [...u, { id: c, component: a }]);

    return c;
  }, []);

  const s = S((a) => {
    n((c) => (a ? c.filter((u) => u.id !== a) : c.slice(0, -1)));
  }, []);

  const i = S(() => {
    n([]);
  }, []);

  B(() => {
    let a = window.location.pathname + window.location.search;
    const c = () => {
      const h = window.location.pathname + window.location.search;

      if (h !== a) {
        a = h;
        n([]);
      }
    };
    window.addEventListener("popstate", c);

    const { pushState, replaceState } = history;

    history.pushState = function (...h) {
      pushState.apply(this, h);
      c();
    };

    history.replaceState = function (...h) {
      replaceState.apply(this, h);
      c();
    };

    return () => {
      window.removeEventListener("popstate", c);
      history.pushState = pushState;
      history.replaceState = replaceState;
    };
  }, []);

  return o(bs.Provider, {
    value: { openModal: r, closeModal: s, closeAllModals: i },
    children: [
      e,
      t.length > 0 &&
        Ct(
          o(Re, {
            children: t.map(({ id: a, component: c }) =>
              o("div", { children: c }, a)
            ),
          }),
          document.body
        ),
    ],
  });
}
function Mn() {
  const e = An(bs);
  if (!e) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return e;
}
const Oc = "eVYjVkOA";
const Lc = "VH5uACo-";
const Mc = "bTnQQZzL";
const $c = "J-wdczzJ";
const Dc = "-aJk1548";
const Uc = "GJ-316Mz";
const ho = { spinner: Oc, spin: Lc, xs: Mc, sm: $c, md: Dc, lg: Uc };
function pt({ size: e = "md", className: t }) {
  const n = [ho.spinner, ho[e], t].filter(Boolean).join(" ");
  return o("div", { className: n, children: o(Cs, {}) });
}
const Fc = "WsNIl9yN";
const Bc = "s-rIVNft";
const Hc = "QJCDyxuF";
const Vc = "idj8YT1-";
const Wc = "PYBTadOt";
const jc = "_0RWSXOse";
const zc = "X3An-GSw";
const qc = "BCtviEiQ";
const Yc = "kZamU7XS";
const Xc = "FVEEba1t";
const Gc = "_2NIyBgLE";
const Kc = "IRuH4aXh";

const Lt = {
  button: Fc,
  primary: Bc,
  secondary: Hc,
  ghost: Vc,
  accent: Wc,
  danger: jc,
  sm: zc,
  md: qc,
  lg: Yc,
  fullWidth: Xc,
  iconOnly: Gc,
  loading: Kc,
};

function Le({
  children: e,
  variant: t = "primary",
  size: n = "md",
  fullWidth: r = false,
  iconOnly: s = false,
  loading: i = false,
  className: a,
  type: c = "button",
  disabled: u,
  ...l
}) {
  const h = [
    Lt.button,
    Lt[t],
    Lt[n],
    r && Lt.fullWidth,
    s && Lt.iconOnly,
    i && Lt.loading,
    a,
  ]
    .filter(Boolean)
    .join(" ");
  return o("button", {
    type: c,
    className: h,
    disabled: u || i,
    ...l,
    children: i ? o(pt, { size: "sm" }) : e,
  });
}
const Zc = "THCvAwre";
const Qc = "sRlzWhtw";
const Jc = "pitt3a-W";
const el = "tBAzXrnN";
const tl = "ZpD0zMWZ";
const nl = "_4WT1OTu3";
const rl = "MILRHLTo";
const ol = "nCy8Y3ZB";
const sl = "Ib0lgBwH";
const il = "V-L-u7tm";
const al = "JALjGN2Z";

const We = {
  picker: Zc,
  searchFloating: Qc,
  searchInput: Jc,
  skinTonePopup: el,
  skinVariantButton: tl,
  skinVariantImage: nl,
  content: rl,
  categoryTitle: ol,
  emojiGrid: sl,
  emojiButton: il,
  noResults: al,
};

const cl = [
  "Smileys & Emotion",
  "People & Body",
  "Animals & Nature",
  "Food & Drink",
  "Travel & Places",
  "Activities",
  "Objects",
  "Symbols",
  "Flags",
];

const ll = ["", "1F3FB", "1F3FC", "1F3FD", "1F3FE", "1F3FF"];
const Is = "emoji-picker-recent";
const Sn = 32;

const ul = (e) => {
  try {
    return String.fromCodePoint(...e.split("-").map((t) => parseInt(t, 16)));
  } catch {
    return "";
  }
};

const kr = (e) =>
  `https://cdn.jsdelivr.net/npm/emoji-datasource-apple@latest/img/apple/64/${e.toLowerCase()}.png`;

const fo = () => {
  try {
    const e = localStorage.getItem(Is);
    return e ? JSON.parse(e) : [];
  } catch {
    return [];
  }
};

const dl = (e) => {
  try {
    localStorage.setItem(Is, JSON.stringify(e.slice(0, Sn)));
  } catch {}
};

const hl = (e) => {
  const t = [];
  const n = {};
  for (const [r, s] of Object.entries(e)) {
    n[r] = s.map((i) => {
      const a = Array.isArray(i.s) ? i.s : [i.s];

      const c = {
        unified: i.u,
        short_name: a[0],
        short_names: a,
        category: r,
        skin_variations: i.v,
      };

      t.push(c);
      return c;
    });
  }
  return { all: t, byCategory: n };
};

let mn = null;

const fl = () => {
  const [e, t] = A(mn);
  const [n, r] = A(!mn);

  B(() => {
    if (mn) {
      return;
    }
    (async () => {
      try {
        const i = await pe(() => import("./emoji-data-DrtcpqC0.js"), []);

        const a = hl(i.default);
        mn = a;
        t(a);
      } catch (i) {
        console.error("Failed to load emoji data:", i);
      } finally {
        r(false);
      }
    })();
  }, []);

  return Ce(
    () => ({
      all: e?.all ?? [],
      byCategory: e?.byCategory ?? {},
      isLoading: n,
    }),
    [e, n]
  );
};

const ml = (e) => {
  const [t, n] = A([]);
  const r = I([]);
  B(() => {
    n(fo());
  }, []);

  const s = Ce(
    () =>
      t
        .slice(0, Sn)
        .map((c) => e.find((u) => u.unified === c))
        .filter((c) => c !== undefined),
    [t, e]
  );

  const i = S((c) => {
    if (!r.current.includes(c)) {
      r.current.push(c);
    }
  }, []);

  const a = S(() => {
    if (r.current.length === 0) {
      return;
    }
    const c = fo();
    const l = [...r.current];
    for (const h of c) {
      if (!l.includes(h)) {
        l.push(h);
      }
    }
    dl(l.slice(0, Sn));
    n(l.slice(0, Sn));
    r.current = [];
  }, []);

  return { recentEmojis: s, addRecentEmoji: i, flushRecentEmojis: a };
};

const pl = ({ emoji: e, onClick: t }) =>
  o("button", {
    className: We.emojiButton,
    onClick: t,
    children: o("img", {
      src: kr(e.unified),
      alt: e.short_name,
      loading: "lazy",
    }),
  });

const Ps = (e) => {
  const t = [e.unified];
  if (e.skin_variations) {
    for (const n of ll.slice(1)) {
      const r = e.skin_variations[n];

      if (r) {
        t.push(r);
      }
    }
  }
  return t;
};

const gl = ({ popup: e, onSelect: t, onClose: n }) => {
  const r = I(null);
  const s = Ps(e.emoji);

  B(() => {
    const i = (a) => {
      if (r.current && !r.current.contains(a.target)) {
        n();
      }
    };
    document.addEventListener("mousedown", i);

    return () => document.removeEventListener("mousedown", i);
  }, [n]);

  return o("div", {
    ref: r,
    className: We.skinTonePopup,
    style: { left: e.x, top: e.y },
    children: s.map((i) =>
      o(
        "button",
        {
          className: We.skinVariantButton,
          onClick: () => t(i, e.emoji.short_name),
          children: o("img", {
            src: kr(i),
            alt: "",
            className: We.skinVariantImage,
          }),
        },
        i
      )
    ),
  });
};

const As = ({ emojis: e, onEmojiClick: t }) =>
  o("div", {
    className: We.emojiGrid,
    children: e.map((n) =>
      o(pl, { emoji: n, onClick: (r) => t(n, r) }, n.unified)
    ),
  });

const vl = ({ name: e, emojis: t, onEmojiClick: n, sectionRef: r }) =>
  o("div", {
    ref: r,
    className: We.categorySection,
    children: [
      o("div", { className: We.categoryTitle, children: e }),
      o(As, { emojis: t, onEmojiClick: n }),
    ],
  });

const _l = ({ value: e, onChange: t, placeholder: n = "Search emojis..." }) =>
  o("div", {
    className: We.searchFloating,
    children: o("input", {
      type: "text",
      className: We.searchInput,
      placeholder: n,
      value: e,
      onInput: (r) => t(r.target.value),
    }),
  });

const wl = ({
  onEmojiSelect: e,
  onClose: t,
  width: n = 280,
  height: r = 380,
  excludeCategories: s = [],
}) => {
  const [i, a] = A("apple");
  const [c, u] = A("");
  const [l, h] = A(null);
  const d = I(null);
  const f = I(null);
  const m = I({});
  const { all: T, byCategory: g, isLoading: p } = fl();
  const { recentEmojis: _, addRecentEmoji: v, flushRecentEmojis: y } = ml(T);
  B(
    () => () => {
      y();
      t?.();
    },
    [y, t]
  );

  const C = Ce(() => {
    if (!c.trim()) {
      return null;
    }
    const N = c.toLowerCase();
    return T.filter(
      (P) =>
        !s.includes(P.category) &&
        P.short_names.some((E) => E.toLowerCase().includes(N))
    ).slice(0, 100);
  }, [c, T, s]);

  const w = Ce(() => {
    if (i === "apple") {
      const N = [];

      if (_.length > 0) {
        N.push({ id: "recent", name: "Recent", emojis: _ });
      }

      for (const P of cl) {
        if (s.includes(P)) {
          continue;
        }
        const E = g[P] || [];

        if (E.length !== 0) {
          N.push({ id: P, name: P.split(" & ")[0], emojis: E });
        }
      }
      return N;
    }
    return [];
  }, [i, _, g, s]);

  const b = S((N, P) => {
    if (Ps(N).length > 1) {
      const P_currentTarget = P.currentTarget;
      const O = f.current?.getBoundingClientRect();
      const q = P_currentTarget.getBoundingClientRect();
      if (O) {
        const ee = q.left - O.left + q.width / 2;
        const Q = q.top - O.top - 60;
        h({ emoji: N, x: ee, y: Q });
      }
      return;
    }
    k(N.unified, N.short_name);
  }, []);

  const k = S(
    (N, P) => {
      v(N);
      h(null);
      e({ unified: N, emoji: ul(N), name: P, imageUrl: kr(N) });
    },
    [e, v]
  );

  const R = () =>
    p
      ? o(pt, {})
      : c && C
      ? C.length === 0
        ? o("div", { className: We.noResults, children: "No emojis found" })
        : o(As, { emojis: C, onEmojiClick: b })
      : o(Re, {
          children: w.map((N) =>
            o(
              vl,
              {
                name: N.name,
                emojis: N.emojis,
                onEmojiClick: b,
                sectionRef: (P) => {
                  m.current[N.id] = P;
                },
              },
              N.id
            )
          ),
        });

  return o("div", {
    className: We.picker,
    style: { width: n, height: r },
    ref: f,
    children: [
      l && o(gl, { popup: l, onSelect: k, onClose: () => h(null) }),
      o("div", { className: We.content, ref: d, children: R() }),
      o(_l, { value: c, onChange: u }),
    ],
  });
};

const yl = "-cIO9SLG";
const Cl = "JNwvD1Vo";
const Tl = "IHofJbwy";
const Wn = { wrapper: yl, popup: Cl, closing: Tl };
const mo = 280;
const po = 380;
const jn = 8;
const El = 100;
const go = 150;
const Rl = 150;
function br({ onEmojiSelect: e, buttonClassName: t, size: n = 20 }) {
  const [r, s] = A(false);
  const [i, a] = A(false);
  const [c, u] = A(null);
  const l = I(null);
  const h = I(null);
  const d = I(null);
  const f = I(null);
  const m = I(null);
  const T = I(null);

  const g = S(() => {
    const l_current = l.current;
    if (!l_current) {
      return;
    }
    const R = l_current.getBoundingClientRect();

    const { innerHeight, innerWidth } = window;

    const E = innerHeight - R.bottom;
    const U = innerWidth - R.left;
    const R_right = R.right;
    const q = E >= po + jn ? "bottom" : "top";
    const ee = U >= mo || U > R_right ? "left" : "right";
    let Q;
    let ie;

    if (q === "top") {
      Q = R.top - po - jn;
    } else {
      Q = R.bottom + jn;
    }

    if (ee === "left") {
      ie = R.left;
    } else {
      ie = R.right - mo;
    }

    u({
      top: Q,
      left: ie,
      transformOrigin: `${q === "top" ? "bottom" : "top"} ${
        ee === "left" ? "left" : "right"
      }`,
    });
  }, []);

  const p = S(() => {
    if (!r && !i) {
      if (!i) {
        g();
        s(true);
      }
    }
  }, [r, i, g]);

  const _ = S(() => {
    if (r && !i) {
      if (!i) {
        a(true);

        T.current = window.setTimeout(() => {
          s(false);
          a(false);
        }, Rl);
      }
    }
  }, [r, i]);

  const v = () => {
    if (m.current) {
      clearTimeout(m.current);
      m.current = null;
    }

    if (T.current) {
      clearTimeout(T.current);
      T.current = null;
    }

    if (i) {
      a(false);
    }

    if (!r) {
      f.current = window.setTimeout(() => {
        p();
      }, El);
    }
  };

  const y = () => {
    if (f.current) {
      clearTimeout(f.current);
      f.current = null;
    }

    m.current = window.setTimeout(() => {
      _();
    }, go);
  };

  B(
    () => () => {
      if (f.current) {
        clearTimeout(f.current);
      }

      if (m.current) {
        clearTimeout(m.current);
      }

      if (T.current) {
        clearTimeout(T.current);
      }
    },
    []
  );

  const C = () => {
    if (m.current) {
      clearTimeout(m.current);
      m.current = null;
    }

    if (T.current) {
      clearTimeout(T.current);
      T.current = null;
    }

    if (i) {
      a(false);
    }
  };

  const w = () => {
    m.current = window.setTimeout(() => {
      _();
    }, go);
  };

  const b = (k) => {
    k.preventDefault();
  };

  return o("div", {
    ref: h,
    className: Wn.wrapper,
    onMouseEnter: v,
    onMouseLeave: y,
    onMouseDown: b,
    children: [
      o("button", {
        ref: l,
        className: t,
        title: "Добавить эмоджи",
        children: o(Wa, { size: n }),
      }),
      r &&
        c &&
        Ct(
          o("div", {
            ref: d,
            className: `${Wn.popup} ${i ? Wn.closing : ""}`,
            style: {
              position: "fixed",
              top: c.top,
              left: c.left,
              transformOrigin: c.transformOrigin,
            },
            onMouseEnter: C,
            onMouseLeave: w,
            onMouseDown: b,
            children: o(wl, { onEmojiSelect: e }),
          }),
          document.body
        ),
    ],
  });
}
const Nl = "_2sS6K7hx";
const Sl = "WGDOlmRO";
const kl = "hvpitmZY";
const bl = "BStIlELw";
const Il = "aY94etMT";
const Pl = "rPynk8pw";
const Al = "BOAqDnoc";
const xl = "haxq9tnV";
const Ol = "_913-arE-";
const Ll = "_76HhedQ0";
const Ml = "_7PQB1LTO";
const $l = "UnOw5SXP";
const Dl = "s594n2Yt";
const Ul = "nOfp-no-";
const Fl = "PRj4ZKu-";
const Bl = "_0a-n56Kv";

const Pe = {
  editor: Nl,
  empty: Sl,
  bold: kl,
  italic: bl,
  underline: Il,
  strike: Pl,
  spoiler: Al,
  monospace: xl,
  quote: Ol,
  link: Ll,
  menu: Ml,
  buttons: $l,
  button: Dl,
  linkForm: Ul,
  linkInput: Fl,
  linkSubmit: Bl,
};

const Hl = [
  { type: "bold", icon: ka, title: "Жирный" },
  { type: "italic", icon: Aa, title: "Курсив" },
  { type: "underline", icon: $a, title: "Подчёркнутый" },
  { type: "strike", icon: La, title: "Зачёркнутый" },
  { type: "spoiler", icon: Oa, title: "Спойлер" },
  { type: "monospace", icon: ba, title: "Моноширинный" },
  { type: "quote", icon: xa, title: "Цитата" },
  { type: "link", icon: _s, title: "Ссылка" },
];

const In = {
  bold: Pe.bold,
  italic: Pe.italic,
  underline: Pe.underline,
  strike: Pe.strike,
  spoiler: Pe.spoiler,
  monospace: Pe.monospace,
  quote: Pe.quote,
  link: Pe.link,
};

const $n = ts(
  (
    {
      value: t,
      spans: n,
      onChange: r,
      placeholder: s = "Написать...",
      maxLength: i = 5000 /* 5e3 */,
      autoFocus: a = false,
      className: c = "",
      minHeight: u = 40,
      maxHeight: l = 400,
      onSubmit: h,
      disableFormatting: d = false,
      onImagePaste: f,
    },
    m
  ) => {
    const T = I(null);
    const [g, p] = A(false);
    const [_, v] = A({ x: 0, y: 0 });
    const [y, C] = A(false);
    const [w, b] = A("");
    const k = I(null);
    const R = I(null);
    const N = I(null);
    const P = I(false);
    const E = I(false);
    const U = I(t);
    const O = I(n);
    const q = I(r);

    B(() => {
      U.current = t;
      O.current = n;
      q.current = r;
    }, [t, n, r]);

    vr(
      m,
      () => ({
        insertText: (x) => {
          const T_current = T.current;
          if (!T_current) {
            return;
          }
          T_current.focus();
          const $ = window.getSelection();
          if (!$) {
            return;
          }
          let z = 0;
          if ($.rangeCount > 0) {
            const re = $.getRangeAt(0);
            z = jl(T_current, re.startContainer, re.startOffset);
          }
          const U_current = U.current;
          const O_current = O.current;
          const ne = U_current.slice(0, z) + x + U_current.slice(z);

          const se = O_current.map((re) =>
            re.offset >= z
              ? { ...re, offset: re.offset + x.length }
              : re.offset + re.length > z
              ? { ...re, length: re.length + x.length }
              : re
          );

          E.current = true;
          U.current = ne;
          O.current = se;
          const he = document.createTextNode(x);
          if ($.rangeCount > 0) {
            const re = $.getRangeAt(0);
            re.deleteContents();
            re.insertNode(he);
            re.setStartAfter(he);
            re.setEndAfter(he);
            $.removeAllRanges();
            $.addRange(re);
          }
          q.current(ne, se);
        },

        focus: () => {
          T.current?.focus();
        },
      }),
      []
    );

    const ee = S(() => {
      if (!t) {
        return "";
      }
      if (n.length === 0) {
        return zn(t);
      }

      const x = [...n].sort((Y, ne) => Y.offset - ne.offset);

      const F = [];
      for (const Y of x) {
        F.push({ pos: Y.offset, type: "start", span: Y });
        F.push({ pos: Y.offset + Y.length, type: "end", span: Y });
      }
      F.sort((Y, ne) =>
        Y.pos !== ne.pos
          ? Y.pos - ne.pos
          : Y.type !== ne.type
          ? Y.type === "end"
            ? -1
            : 1
          : 0
      );
      let $ = "";
      let z = 0;
      const j = [];
      for (const Y of F) {
        if (Y.pos > z) {
          const ne = t.substring(z, Y.pos);
          $ += vo(zn(ne), j);
          z = Y.pos;
        }
        if (Y.type === "start") {
          j.push(Y.span);
        } else {
          const ne = j.indexOf(Y.span);

          if (ne !== -1) {
            j.splice(ne, 1);
          }
        }
      }
      if (z < t.length) {
        const Y = t.substring(z);
        $ += vo(zn(Y), j);
      }
      return $ || "<br>";
    }, [t, n]);

    B(() => {
      if (E.current) {
        E.current = false;
        return;
      }
      const T_current = T.current;
      if (!T_current || (document.activeElement === T_current && t !== "")) {
        return;
      }
      const F = ee();

      if (T_current.innerHTML !== F) {
        T_current.innerHTML = F;
      }
    }, [ee, t]);

    B(() => {
      if (a && T.current) {
        const T_current = T.current;
        T_current.focus();

        if (T_current.childNodes.length > 0) {
          const F = window.getSelection();
          if (F) {
            const $ = document.createRange();
            $.selectNodeContents(T_current);
            $.collapse(false);
            F.removeAllRanges();
            F.addRange($);
          }
        }
      }
    }, [a]);

    B(() => {
      if (y && R.current) {
        R.current.focus();
      }
    }, [y]);

    const Q = S(
      (x) => {
        if (P.current) {
          return;
        }
        const T_current = T.current;
        if (!T_current) {
          return;
        }
        if (x?.data === " ") {
          const j = window.getSelection();
          if (j && j.rangeCount > 0) {
            const ne = j.getRangeAt(0).startContainer;
            let se = null;
            let he = ne;

            while (he && he !== T_current) {
              if (he.nodeType === Node.ELEMENT_NODE) {
                const re = he;
                if (re.tagName === "SPAN" && re.className) {
                  se = re;
                  break;
                }
              }
              he = he.parentNode;
            }

            if (se) {
              const re = se.textContent || "";
              if (re.endsWith(" ")) {
                se.textContent = re.slice(0, -1);
                const je = document.createTextNode(" ");
                se.parentNode?.insertBefore(je, se.nextSibling);
                const ze = document.createRange();
                ze.setStartAfter(je);
                ze.setEndAfter(je);
                j.removeAllRanges();
                j.addRange(ze);
              }
            }
          }
        }
        const $ = T_current.innerText.replace(/\n$/, "");
        if ($.length > i) {
          const j = $.substring(0, i);
          E.current = true;
          r(j, zl(n, j));
          return;
        }
        const z = ql(T_current);
        E.current = true;
        r($, z);
      },
      [i, r, n]
    );

    const ie = S(
      (x) => {
        if (d) {
          return;
        }
        const F = window.getSelection();
        if (!F || F.isCollapsed) {
          return;
        }
        x.preventDefault();
        N.current = F.getRangeAt(0).cloneRange();

        const $ = Math.max(
          10,
          Math.min(x.clientX - 150, window.innerWidth - 310)
        );

        const z = Math.max(10, x.clientY - 50);
        v({ x: $, y: z });
        p(true);
      },
      [d]
    );

    const ae = S(
      (x) => {
        x.preventDefault();

        if (f && x.clipboardData?.files?.length) {
          const Y = Array.from(x.clipboardData.files).filter((ne) =>
            ne.type.startsWith("image/")
          );
          if (Y.length > 0) {
            f(Y);
            return;
          }
        }

        const F = x.clipboardData?.getData("text/plain") || "";
        if (!F) {
          return;
        }
        const $ = window.getSelection();
        if (!$ || !$.rangeCount) {
          return;
        }
        const z = $.getRangeAt(0);
        z.deleteContents();
        const j = document.createTextNode(F);
        z.insertNode(j);
        z.setStartAfter(j);
        z.setEndAfter(j);
        $.removeAllRanges();
        $.addRange(z);
        Q();
      },
      [Q, f]
    );

    const X = S(() => {
      const T_current = T.current;
      if (T_current && !U.current) {
        const F = window.getSelection();
        if (F) {
          const $ = document.createRange();
          $.setStart(T_current, 0);
          $.collapse(true);
          F.removeAllRanges();
          F.addRange($);
        }
      }
    }, []);

    const J = S(
      (x) => {
        if (x.key === "Enter" && !x.shiftKey && h) {
          x.preventDefault();
          h();
          return;
        }
        if (!d && (x.ctrlKey || x.metaKey)) {
          let F = null;
          switch (x.key.toLowerCase()) {
            case "b": {
              F = "bold";
              break;
            }
            case "i": {
              F = "italic";
              break;
            }
            case "u": {
              F = "underline";
              break;
            }
          }

          if (F) {
            x.preventDefault();
            D(F);
          }
        }
      },
      [h, d]
    );

    const D = S(
      (x, F) => {
        const T_current = T.current;
        if (!T_current) {
          return;
        }
        const z = window.getSelection();
        if (
          !z ||
          (N.current && (z.removeAllRanges(), z.addRange(N.current)),
          z.isCollapsed)
        ) {
          return;
        }
        const j = z.getRangeAt(0);
        const Y = document.createElement("span");
        Y.className = In[x];

        if (x === "link" && F) {
          Y.dataset.url = F;
        }

        const ne = Yl(j.commonAncestorContainer, In[x]);
        if (ne) {
          Xl(ne);
        } else {
          try {
            j.surroundContents(Y);
          } catch {
            const se = j.extractContents();
            Y.appendChild(se);
            j.insertNode(Y);
          }
        }
        Q();
        p(false);
        C(false);
        b("");
        N.current = null;
        T_current.focus();
      },
      [Q]
    );

    const W = S(
      (x) => {
        if (x === "link") {
          C(true);
        } else {
          D(x);
        }
      },
      [D]
    );

    const G = S(
      (x) => {
        x.preventDefault();

        if (w.trim()) {
          D("link", w.trim());
        }
      },
      [D, w]
    );

    B(() => {
      if (!g) {
        return;
      }

      const x = ($) => {
        if (k.current && !k.current.contains($.target)) {
          p(false);
          C(false);
          b("");
          N.current = null;
        }
      };

      const F = () => {
        p(false);
        C(false);
        b("");
        N.current = null;
      };

      document.addEventListener("mousedown", x);
      window.addEventListener("scroll", F, true);

      return () => {
        document.removeEventListener("mousedown", x);
        window.removeEventListener("scroll", F, true);
      };
    }, [g]);
    const M = !t;
    return o(Re, {
      children: [
        o("div", {
          ref: T,
          className: `${Pe.editor} ${c} ${M ? Pe.empty : ""}`,
          contentEditable: true,
          "data-placeholder": s,
          onInput: (x) => Q(x),
          onFocus: X,
          onPaste: ae,
          onContextMenu: ie,
          onKeyDown: J,
          onCompositionStart: () => {
            P.current = true;
          },
          onCompositionEnd: () => {
            P.current = false;
            Q();
          },
          style: { minHeight: u, maxHeight: l },
        }),
        g &&
          Ct(
            o("div", {
              ref: k,
              className: Pe.menu,
              style: { left: _.x, top: _.y },
              children: y
                ? o("form", {
                    className: Pe.linkForm,
                    onSubmit: G,
                    children: [
                      o("input", {
                        ref: R,
                        type: "url",
                        className: Pe.linkInput,
                        placeholder: "https://...",
                        value: w,
                        onInput: (x) => b(x.target.value),
                      }),
                      o("button", {
                        type: "submit",
                        className: Pe.linkSubmit,
                        disabled: !w.trim(),
                        children: "OK",
                      }),
                    ],
                  })
                : o("div", {
                    className: Pe.buttons,
                    children: Hl.map(({ type: x, icon: F, title: $ }) =>
                      o(
                        "button",
                        {
                          type: "button",
                          className: Pe.button,
                          onClick: () => W(x),
                          title: $,
                          children: o(F, { size: 16 }),
                        },
                        x
                      )
                    ),
                  }),
            }),
            document.body
          ),
      ],
    });
  }
);

function zn(e) {
  return e
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\n/g, "<br>");
}
function Vl(e) {
  return e
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}
function Wl(e) {
  return e !== "mention" && e !== "hashtag";
}
function vo(e, t) {
  if (t.length === 0) {
    return e;
  }
  let n = e;
  for (const r of t) {
    if (!Wl(r.type)) {
      continue;
    }
    const s = In[r.type];
    const i = r.type === "link" ? ` data-url="${Vl(r.url)}"` : "";
    n = `<span class="${s}"${i}>${n}</span>`;
  }
  return n;
}
function jl(e, t, n) {
  let r = 0;
  const s = document.createTreeWalker(e, NodeFilter.SHOW_TEXT);
  let i = s.nextNode();

  while (i) {
    if (i === t) {
      return r + n;
    }
    r += i.textContent?.length || 0;
    i = s.nextNode();
  }

  return r;
}
function zl(e, t) {
  return e
    .map((n) => {
      const r = n.offset + n.length;
      return n.offset >= t.length
        ? null
        : r > t.length
        ? { ...n, length: t.length - n.offset }
        : n;
    })
    .filter((n) => n !== null);
}
function ql(e) {
  const t = [];

  const n = (r, s) => {
    if (r.nodeType === Node.TEXT_NODE) {
      return s + (r.textContent?.length || 0);
    }
    if (r.nodeType === Node.ELEMENT_NODE) {
      const i = r;
      if (i.tagName === "BR") {
        return s + 1;
      }
      let a = null;
      for (const [l, h] of Object.entries(In)) {
        if (i.classList.contains(h)) {
          a = l;
          break;
        }
      }
      const c = s;
      let u = s;
      for (const l of Array.from(r.childNodes)) {
        u = n(l, u);
      }
      if (a && u > c) {
        const l =
          a === "link"
            ? {
                type: "link",
                url: i.dataset.url || "",
                offset: c,
                length: u - c,
              }
            : { type: a, offset: c, length: u - c };
        t.push(l);
      }
      return u;
    }
    return s;
  };

  n(e, 0);
  return t;
}
function Yl(e, t) {
  let n = e;

  while (n && n.nodeType !== Node.DOCUMENT_NODE) {
    if (n.nodeType === Node.ELEMENT_NODE) {
      const r = n;
      if (r.classList.contains(t)) {
        return r;
      }
    }
    n = n.parentNode;
  }

  return null;
}
function Xl(e) {
  const e_parentNode = e.parentNode;
  if (e_parentNode) {
    while (e.firstChild) {
      e_parentNode.insertBefore(e.firstChild, e);
    }

    e_parentNode.removeChild(e);
  }
}
const Gl = "u13FLJio";
const Kl = "bToZwjfv";
const Zl = "eB--cks6";
const Ql = "_9ohK9-tN";
const Jl = "j2Wceqpa";
const eu = "SKnXo-cA";
const tu = "_8wZrlhZa";
const nu = "ywO8uWzl";
const ru = "q4IPCH5G";
const ou = "iqaeIAPL";
const su = "YGC2tIXC";
const iu = "Hvh4qKiC";
const au = "-bZAaxpL";
const cu = "mY50rIUo";
const lu = "SVQ04Pz4";
const uu = "-aTjRl6d";
const du = "vskBTYBr";
const hu = "_0haeBjBl";
const fu = "m4JSOoi7";
const mu = "xuKvww1d";
const pu = "GMSlkrum";
const gu = "T1UhUe7-";
const vu = "KPX--Htj";
const _u = "UDcyRX73";
const wu = "G9MjuFO7";
const yu = "yAXdi86A";
const Cu = "_5EoTr5dx";
const Tu = "_2aj24MP-";
const Eu = "_5JkW0FiQ";
const Ru = "X4D-Hg95";
const Nu = "WafaU2-d";
const Su = "eb-u7Ezx";
const ku = "u52eDQyv";
const bu = "V-0z6M2W";
const Iu = "_7-fvD6Zx";

const oe = {
  form: Gl,
  dragActive: Kl,
  whatsNew: Zl,
  editor: Ql,
  dragOverlay: Jl,
  attachments: eu,
  attachmentPreview: tu,
  uploading: nu,
  uploadError: ru,
  videoPreviewWrapper: ou,
  videoPlayIcon: su,
  uploadOverlay: iu,
  spinner: au,
  errorOverlay: cu,
  errorText: lu,
  removeAttachment: uu,
  actions: du,
  mediaButtons: hu,
  mediaButton: fu,
  submitGroup: mu,
  charCount: pu,
  error: gu,
  pollContainer: vu,
  pollHeader: _u,
  pollTitle: wu,
  pollClose: yu,
  pollQuestion: Cu,
  pollOptions: Tu,
  pollOptionRow: Eu,
  pollOption: Ru,
  removeOption: Nu,
  addOption: Su,
  pollFooter: ku,
  pollToggle: bu,
  active: Iu,
};

function _o({ src: e, type: t }) {
  return t === "video"
    ? o("div", {
        className: oe.videoPreviewWrapper,
        children: [
          o("video", { src: e, preload: "metadata" }),
          o("div", {
            className: oe.videoPlayIcon,
            children: o("svg", {
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "white",
              children: o("path", { d: "M8 5v14l11-7z" }),
            }),
          }),
        ],
      })
    : o("img", { src: e, alt: "" });
}
function xs({ images: e, uploadingImages: t, onRemove: n }) {
  return e.length > 0 || t.length > 0
    ? o("div", {
        className: oe.attachments,
        children: [
          e.map((s) =>
            o(
              "div",
              {
                className: oe.attachmentPreview,
                children: [
                  o(_o, { src: s.previewUrl, type: s.type }),
                  o("button", {
                    className: oe.removeAttachment,
                    onClick: () => n(s.id),
                    children: o(rt, {}),
                  }),
                ],
              },
              s.id
            )
          ),
          t.map((s) =>
            o(
              "div",
              {
                className: `${oe.attachmentPreview} ${
                  s.error ? oe.uploadError : oe.uploading
                }`,
                children: [
                  o(_o, { src: s.previewUrl, type: s.type }),
                  !s.error &&
                    o("div", {
                      className: oe.uploadOverlay,
                      children: o("div", { className: oe.spinner }),
                    }),
                  s.error &&
                    o("div", {
                      className: oe.errorOverlay,
                      children: o("span", {
                        className: oe.errorText,
                        children: s.error,
                      }),
                    }),
                  o("button", {
                    className: oe.removeAttachment,
                    onClick: () => n(s.id),
                    children: o(rt, {}),
                  }),
                ],
              },
              s.id
            )
          ),
        ],
      })
    : null;
}
const ft = {
  MAX_CHARS: 1000 /* 1e3 */,
  MIN_POLL_OPTIONS: 2,
  MAX_POLL_OPTIONS: 10,
  MAX_POLL_QUESTION_LENGTH: 200,
  MAX_POLL_OPTION_LENGTH: 100,
  MAX_TEXTAREA_HEIGHT: 400,
};
function Pu({
  poll: e,
  onQuestionChange: t,
  onOptionChange: n,
  onAddOption: r,
  onRemoveOption: s,
  onMultipleChoiceToggle: i,
  onClose: a,
}) {
  return o("div", {
    className: oe.pollContainer,
    children: [
      o("div", {
        className: oe.pollHeader,
        children: [
          o("span", { className: oe.pollTitle, children: "Опрос" }),
          o("button", {
            className: oe.pollClose,
            onClick: a,
            children: o(rt, {}),
          }),
        ],
      }),
      o("input", {
        type: "text",
        className: oe.pollQuestion,
        placeholder: "Вопрос опроса",
        value: e.question,
        onInput: (c) => t(c.target.value),
      }),
      o("div", {
        className: oe.pollOptions,
        children: e.options.map((c, u) =>
          o(
            "div",
            {
              className: oe.pollOptionRow,
              children: [
                o("input", {
                  type: "text",
                  className: oe.pollOption,
                  placeholder: `Вариант ${u + 1}`,
                  value: c.text,
                  maxLength: 50,
                  onInput: (l) => n(c.id, l.target.value),
                }),
                e.options.length > ft.MIN_POLL_OPTIONS &&
                  o("button", {
                    className: oe.removeOption,
                    onClick: () => s(c.id),
                    children: o(rt, {}),
                  }),
              ],
            },
            c.id
          )
        ),
      }),
      e.options.length < ft.MAX_POLL_OPTIONS &&
        o("button", {
          className: oe.addOption,
          onClick: r,
          children: [o(Ns, {}), o("span", { children: "Добавить вариант" })],
        }),
      o("div", {
        className: oe.pollFooter,
        children: o("label", {
          className: oe.pollToggle,
          children: [
            o("input", {
              type: "checkbox",
              checked: e.multipleChoice,
              onChange: i,
            }),
            o("span", { children: "Несколько вариантов ответа" }),
          ],
        }),
      }),
    ],
  });
}
const qn = {
  question: "",
  options: [
    { id: "1", text: "" },
    { id: "2", text: "" },
  ],
  multipleChoice: false,
};
function Au() {
  const [e, t] = A(false);
  const [n, r] = A(qn);

  const s = S((T) => {
    if (T.length <= ft.MAX_POLL_QUESTION_LENGTH) {
      r((g) => ({
        ...g,
        question: T,
      }));
    }
  }, []);

  const i = S((T, g) => {
    if (g.length <= ft.MAX_POLL_OPTION_LENGTH) {
      r((p) => ({
        ...p,
        options: p.options.map((_) => (_.id === T ? { ..._, text: g } : _)),
      }));
    }
  }, []);

  const a = S(() => {
    if (n.options.length < ft.MAX_POLL_OPTIONS) {
      r((T) => ({
        ...T,
        options: [...T.options, { id: Date.now().toString(), text: "" }],
      }));
    }
  }, [n.options.length]);

  const c = S(
    (T) => {
      if (n.options.length > ft.MIN_POLL_OPTIONS) {
        r((g) => ({
          ...g,
          options: g.options.filter((p) => p.id !== T),
        }));
      }
    },
    [n.options.length]
  );

  const u = S(() => {
    r((T) => ({
      ...T,
      multipleChoice: !T.multipleChoice,
    }));
  }, []);

  const l = S(() => {
    t(false);
    r(qn);
  }, []);

  const h = S(() => {
    t((T) => !T);
  }, []);

  const d = S(() => {
    if (!e) {
      return true;
    }
    const T = n.question.trim().length > 0;

    const g = n.options.filter((p) => p.text.trim().length > 0);

    return T && g.length >= ft.MIN_POLL_OPTIONS;
  }, [e, n]);

  const f = S(() => {
    if (!(!e || !d())) {
      return {
        question: n.question.trim(),
        options: n.options
          .filter((T) => T.text.trim().length > 0)
          .map((T) => ({
            text: T.text.trim(),
          })),
        multipleChoice: n.multipleChoice,
      };
    }
  }, [e, d, n]);

  const m = S(() => {
    t(false);
    r(qn);
  }, []);

  return {
    isPollOpen: e,
    poll: n,
    togglePoll: h,
    handlePollQuestionChange: s,
    handlePollOptionChange: i,
    handleAddPollOption: a,
    handleRemovePollOption: c,
    handleMultipleChoiceToggle: u,
    handleClosePoll: l,
    isPollValid: d,
    getPollData: f,
    resetPoll: m,
  };
}
const xu = {
  [de.CONTENT_MODERATION_FAILED]: "Изображение содержит запрещённый контент",
  [de.FILE_TOO_LARGE]: "Файл слишком большой",
  [de.UNSUPPORTED_FILE_TYPE]: "Неподдерживаемый формат файла",
  [de.UPLOAD_FAILED]: "Не удалось загрузить файл",
  [de.VIDEO_REQUIRES_VERIFICATION]:
    "Загрузка видео доступна только верифицированным пользователям",
  [de.RATE_LIMIT_EXCEEDED]: "Слишком много запросов. Попробуйте позже",
  [de.UNAUTHORIZED]: "Требуется авторизация",
  [de.ACCESS_DENIED]: "Доступ запрещён",
  [de.NETWORK_ERROR]: "Ошибка сети. Проверьте подключение",
  [de.TIMEOUT]: "Превышено время ожидания",
};
function Ou(e, t = "Произошла ошибка") {
  return e ? xu[e] ?? t : t;
}
function Os(e = 10, t = false) {
  const [n, r] = A([]);
  const [s, i] = A([]);
  const a = I(null);
  const c = I(n);
  const u = I(s);
  c.current = n;
  u.current = s;

  B(
    () => () => {
      c.current.forEach((y) => URL.revokeObjectURL(y.previewUrl));

      u.current.forEach((y) => URL.revokeObjectURL(y.previewUrl));
    },
    []
  );

  const l = s.length > 0;

  const h =
    n.some((y) => y.type === "video") || s.some((y) => y.type === "video");

  const d =
    n.some((y) => y.type === "image") || s.some((y) => y.type === "image");

  const f = S(() => {
    a.current?.click();
  }, []);

  const m = S(
    async (y) => {
      const C = $t.isValidVideoType(y);
      const w = $t.isValidImageType(y);
      if (C && !t) {
        dt.error(
          "Загрузка видео доступна только верифицированным пользователям"
        );
        return;
      }
      if (!w && !C) {
        dt.error("Неподдерживаемый формат файла");
        return;
      }
      const c_current = c.current;
      const u_current = u.current;

      const R =
        c_current.some((O) => O.type === "video") ||
        u_current.some((O) => O.type === "video");

      const N =
        c_current.some((O) => O.type === "image") ||
        u_current.some((O) => O.type === "image");

      if (C && N) {
        dt.error("Нельзя добавить видео вместе с изображениями");
        return;
      }
      if (w && R) {
        dt.error("Нельзя добавить изображения вместе с видео");
        return;
      }
      if (C && R) {
        dt.error("Можно загрузить только 1 видео");
        return;
      }
      const P = `upload-${Date.now()}-${Math.random().toString(36).slice(2)}`;
      const E = URL.createObjectURL(y);
      const U = C ? "video" : "image";
      i((O) => [...O, { id: P, file: y, previewUrl: E, progress: 0, type: U }]);
      try {
        const O = await $t.uploadMedia(y);

        i((q) => q.filter((ee) => ee.id !== P));

        r((q) => [
          ...q,
          {
            id: `img-${Date.now()}-${Math.random().toString(36).slice(2)}`,
            mediaId: O.id,
            url: O.url,
            previewUrl: E,
            type: U,
          },
        ]);
      } catch (O) {
        let q = "Ошибка загрузки";

        if (ke(O)) {
          q = Ou(O.code, O.message);
        } else if (O instanceof Error) {
          q = O.message;
        }

        dt.error(q);

        i((ee) => ee.filter((Q) => Q.id !== P));

        URL.revokeObjectURL(E);
      }
    },
    [t]
  );

  const T = S(
    (y) => {
      const y_target = y.target;
      const y_target_files = y_target.files;
      if (!y_target_files || y_target_files.length === 0) {
        return;
      }
      const b = n.length + s.length;
      const k = e - b;
      if (k <= 0) {
        return;
      }
      Array.from(y_target_files).slice(0, k).forEach(m);
      y_target.value = "";
    },
    [n.length, s.length, e, m]
  );

  const g = S((y) => {
    r((C) => {
      const w = C.find((b) => b.id === y);

      if (w) {
        URL.revokeObjectURL(w.previewUrl);
      }

      return C.filter((b) => b.id !== y);
    });

    i((C) => {
      const w = C.find((b) => b.id === y);

      if (w) {
        URL.revokeObjectURL(w.previewUrl);
      }

      return C.filter((b) => b.id !== y);
    });
  }, []);

  const p = S(
    (y) => {
      const C = y.filter((k) =>
        t ? $t.isValidMediaType(k) : $t.isValidImageType(k)
      );
      if (C.length === 0) {
        return;
      }
      const w = c.current.length + u.current.length;
      const b = e - w;

      if (b > 0) {
        C.slice(0, b).forEach(m);
      }
    },
    [e, m, t]
  );

  const _ = S(
    async (y) => {
      const [C, w] = y.split(",");
      const b = C.match(/:(.*?);/)?.[1] || "image/png";
      const k = atob(w);
      const R = new Uint8Array(k.length);
      for (let E = 0; E < k.length; E++) {
        R[E] = k.charCodeAt(E);
      }
      const N = new Blob([R], { type: b });
      const P = new File([N], `drawing-${Date.now()}.png`, {
        type: "image/png",
      });
      m(P);
    },
    [m]
  );

  const v = S(() => {
    n.forEach((y) => URL.revokeObjectURL(y.previewUrl));

    s.forEach((y) => URL.revokeObjectURL(y.previewUrl));

    r([]);
    i([]);
  }, [n, s]);

  return {
    images: n,
    uploadingImages: s,
    isUploading: l,
    hasVideo: h,
    hasImages: d,
    openFilePicker: f,
    removeImage: g,
    addImage: _,
    uploadFiles: p,
    clearAll: v,
    fileInputRef: a,
    handleFileChange: T,
  };
}
const Lu = me(() =>
  pe(() => import("./index-I6ZkMUXM.js"), __vite__mapDeps([0, 1])).then(
    (e) => ({
      default: e.DrawingCanvas,
    })
  )
);
function Mu({
  onSubmit: e,
  autoFocus: t = false,
  placeholder: n = "Что нового?",
}) {
  const {
    text: r,
    spans: s,
    editorRef: i,
    handleChange: a,
    insertText: c,
    reset: u,
  } = On();

  const [l, h] = A(false);
  const [d, f] = A(false);
  const [m, T] = A(false);
  const g = I(0);
  const p = mt();
  const v = ra()?.isVerified ?? false;

  const {
    images: y,
    uploadingImages: C,
    isUploading: w,
    hasVideo: b,
    openFilePicker: k,
    removeImage: R,
    addImage: N,
    uploadFiles: P,
    clearAll: E,
    fileInputRef: U,
    handleFileChange: O,
  } = Os(10, v);

  const {
    isPollOpen: q,
    poll: ee,
    togglePoll: Q,
    handlePollQuestionChange: ie,
    handlePollOptionChange: ae,
    handleAddPollOption: X,
    handleRemovePollOption: J,
    handleMultipleChoiceToggle: D,
    handleClosePoll: W,
    isPollValid: G,
    getPollData: M,
    resetPoll: x,
  } = Au();

  const F = ft.MAX_CHARS - r.length;
  const $ = F < 0;
  const z = q && G();
  const j = y.length > 0 || C.length > 0;
  const Y = r.trim().length > 0 || z || z || j;
  const ne = v ? `${cr},${Qi}` : cr;

  const se = S(async () => {
    if (!(!Y || $ || $ || w || $ || w || d)) {
      f(true);
      try {
        const ge = y.map((Z) => ({
          mediaId: Z.mediaId,
          url: Z.url,
        }));
        await e?.(r, s, ge, M());
        u();
        E();
        x();
      } catch {
      } finally {
        f(false);
      }
    }
  }, [Y, $, w, d, r, s, y, M, e, u, E, x]);

  const he = S(
    (ge) => {
      N(ge);
    },
    [N]
  );

  const re = S(
    (ge) => {
      c(ge.emoji);
    },
    [c]
  );

  const je = S((ge) => {
    ge.preventDefault();
    ge.stopPropagation();
    g.current++;

    if (ge.dataTransfer?.types.includes("Files")) {
      T(true);
    }
  }, []);

  const ze = S((ge) => {
    ge.preventDefault();
    ge.stopPropagation();
  }, []);

  const Ee = S((ge) => {
    ge.preventDefault();
    ge.stopPropagation();
    g.current--;

    if (g.current === 0) {
      T(false);
    }
  }, []);

  const st = S(
    (ge) => {
      ge.preventDefault();
      ge.stopPropagation();
      g.current = 0;
      T(false);
      const Z = ge.dataTransfer?.files;

      if (Z && Z.length > 0) {
        P(Array.from(Z));
      }
    },
    [P]
  );

  return o("div", {
    className: `${oe.form} ${m ? oe.dragActive : ""}`,
    onDragEnter: je,
    onDragOver: ze,
    onDragLeave: Ee,
    onDrop: st,
    children: [
      m &&
        o("div", {
          className: oe.dragOverlay,
          children: [
            o("svg", {
              width: "32",
              height: "32",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "1.5",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              children: [
                o("rect", {
                  x: "3",
                  y: "3",
                  width: "18",
                  height: "18",
                  rx: "2",
                  ry: "2",
                }),
                o("circle", { cx: "8.5", cy: "8.5", r: "1.5" }),
                o("polyline", { points: "21 15 16 10 5 21" }),
              ],
            }),
            o("span", {
              children: v ? "Перетащите файл" : "Перетащите изображение",
            }),
          ],
        }),
      o("div", {
        className: oe.whatsNew,
        children: o($n, {
          ref: i,
          value: r,
          spans: s,
          onChange: a,
          placeholder: n,
          autoFocus: t,
          className: oe.editor,
          minHeight: 40,
          maxHeight: ft.MAX_TEXTAREA_HEIGHT,
          onImagePaste: P,
        }),
      }),
      o(xs, { images: y, uploadingImages: C, onRemove: R }),
      o("input", {
        ref: U,
        type: "file",
        accept: ne,
        multiple: !b,
        onChange: O,
        style: { display: "none" },
      }),
      q &&
        o(Pu, {
          poll: ee,
          onQuestionChange: ie,
          onOptionChange: ae,
          onAddOption: X,
          onRemoveOption: J,
          onMultipleChoiceToggle: D,
          onClose: W,
        }),
      o("div", {
        className: oe.actions,
        children: [
          o("div", {
            className: oe.mediaButtons,
            children: [
              o("button", {
                className: oe.mediaButton,
                onClick: k,
                title: v ? "Добавить медиа" : "Добавить изображение",
                children: o(vs, {}),
              }),
              !p &&
                o(br, { onEmojiSelect: re, buttonClassName: oe.mediaButton }),
              o("button", {
                className: oe.mediaButton,
                onClick: () => h(true),
                title: "Нарисовать",
                disabled: b,
                children: o(Ha, {}),
              }),
              o("button", {
                className: `${oe.mediaButton} ${q ? oe.active : ""}`,
                onClick: Q,
                title: "Добавить опрос",
                children: o(Va, {}),
              }),
            ],
          }),
          o("div", {
            className: oe.submitGroup,
            children: [
              $ &&
                o("span", {
                  className: `${oe.charCount} ${oe.error}`,
                  children: F,
                }),
              o(Le, {
                size: "lg",
                disabled: !Y || $ || $ || w || $ || w || d,
                loading: d,
                onClick: se,
                children: "Опубликовать",
              }),
            ],
          }),
        ],
      }),
      l &&
        o(xt, {
          fallback: null,
          children: o(Lu, {
            isOpen: l,
            onClose: () => h(false),
            onSave: he,
            mode: "post",
          }),
        }),
    ],
  });
}
const $u = "K6nCQ-U-";
const Du = "_4z8V9ZZv";
const Uu = "_7KXbkQt7";
const Fu = "uYOP8khl";
const Bu = "_6y-KsBSs";
const Hu = "_0V6OU0Ym";
const Vu = "nkzq9EYy";
const Wu = "sPqWHy7d";
const ju = "_9y9syYYY";
const zu = "nDwuZLyW";
const qu = "L5ifDyu9";
const Yu = "YTa76qGd";
const Xu = "pgh3zI5U";
const Gu = "MLUpLifx";

const Ne = {
  modalReport: $u,
  content: Du,
  successIcon: Uu,
  title: Fu,
  subtitle: Bu,
  options: Hu,
  chip: Vu,
  radio: Wu,
  chipActive: ju,
  radioDot: zu,
  detailsSection: qu,
  textarea: Yu,
  error: Xu,
  actions: Gu,
};

const Ku = {
  spam: "spam",
  violence: "violence",
  hate: "harassment",
  adult: "nudity",
  misinfo: "misinformation",
  other: "other",
};

const Zu = [
  { id: "spam", label: "Спам или нежелательный контент" },
  { id: "violence", label: "Насилие или опасные действия" },
  { id: "hate", label: "Ненависть или травля" },
  { id: "adult", label: "Контент для взрослых (18+)" },
  { id: "misinfo", label: "Дезинформация или обман" },
  { id: "other", label: "Другое" },
];

function Ls({ targetType: e, targetId: t, onClose: n, onSubmit: r }) {
  const [s, i] = A(null);
  const [a, c] = A("");
  const [u, l] = A(false);
  const [h, d] = A(null);
  const [f, m] = A(false);

  const T = async () => {
    if (s) {
      l(true);
      d(null);
      try {
        if (r) {
          await r(s, a);
        } else {
          await ta.createReport({
            targetType: e,
            targetId: t,
            reason: Ku[s],
            description: a || undefined,
          });
        }

        m(true);
      } catch (g) {
        console.error("Failed to submit report:", g);

        if (ke(g)) {
          switch (g.code) {
            case hn.CANNOT_REPORT_OWN_CONTENT: {
              d("Вы не можете пожаловаться на свой контент");
              break;
            }
            case hn.ALREADY_REPORTED: {
              d("Вы уже отправляли жалобу на этот контент");
              break;
            }
            case hn.TARGET_NOT_FOUND: {
              d("Контент не найден");
              break;
            }
            case hn.DESCRIPTION_TOO_LONG: {
              d("Описание слишком длинное (макс. 1000 символов)");
              break;
            }
            default: {
              d("Произошла ошибка при отправке жалобы");
            }
          }
        } else {
          d("Произошла ошибка при отправке жалобы");
        }
      } finally {
        l(false);
      }
    }
  };

  return f
    ? o(yt, {
        onClose: n,
        showHeader: false,
        frameless: false,
        className: Ne.modalReport,
        children: o("div", {
          className: Ne.content,
          children: [
            o("div", {
              className: Ne.successIcon,
              children: o("svg", {
                width: "48",
                height: "48",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "var(--accent-primary)",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                children: [
                  o("path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14" }),
                  o("polyline", { points: "22 4 12 14.01 9 11.01" }),
                ],
              }),
            }),
            o("h2", { className: Ne.title, children: "Спасибо за жалобу!" }),
            o("p", {
              className: Ne.subtitle,
              children:
                "Мы рассмотрим вашу жалобу и примем необходимые меры. Вы помогаете сделать сообщество лучше.",
            }),
            o("div", {
              className: Ne.actions,
              children: o(Le, {
                variant: "primary",
                onClick: (g) => {
                  g.stopPropagation();
                  n();
                },
                children: "Понятно",
              }),
            }),
          ],
        }),
      })
    : o(yt, {
        onClose: n,
        showHeader: false,
        frameless: false,
        className: Ne.modalReport,
        children: o("div", {
          className: Ne.content,
          children: [
            o("h2", { className: Ne.title, children: "Пожаловаться" }),
            o("p", {
              className: Ne.subtitle,
              children: "Выберите причину жалобы",
            }),
            o("div", {
              className: Ne.options,
              children: Zu.map((g) =>
                o(
                  "button",
                  {
                    type: "button",
                    className: `${Ne.chip} ${s === g.id ? Ne.chipActive : ""}`,
                    onClick: () => i(g.id),
                    children: [
                      o("span", {
                        className: Ne.radio,
                        children:
                          s === g.id && o("span", { className: Ne.radioDot }),
                      }),
                      g.label,
                    ],
                  },
                  g.id
                )
              ),
            }),
            o("div", {
              className: Ne.detailsSection,
              children: o("textarea", {
                className: Ne.textarea,
                placeholder: "Опишите подробнее (необязательно)...",
                value: a,
                onInput: (g) => c(g.target.value),
                rows: 3,
                maxLength: 1000 /* 1e3 */,
              }),
            }),
            h && o("div", { className: Ne.error, children: h }),
            o("div", {
              className: Ne.actions,
              children: [
                o(Le, {
                  variant: "secondary",
                  onClick: (g) => {
                    g.stopPropagation();
                    n();
                  },
                  disabled: u,
                  children: "Отмена",
                }),
                o(Le, {
                  variant: "primary",
                  onClick: (g) => {
                    g.stopPropagation();
                    T();
                  },
                  disabled: !s || u,
                  children: u ? "Отправка..." : "Отправить",
                }),
              ],
            }),
          ],
        }),
      });
}
const Qu = "j8vGlZKp";
const Ju = "y5-96lzw";
const ed = "lE9vN8i6";
const td = "RrXA28Pz";
const nd = "zrN-dIVb";
const rd = "KSS5ucx7";
const od = "p-q2S5vA";
const sd = "-JVja8g3";
const id = "HotXXjTO";
const ad = "q4tIq6LX";
const cd = "jG-llYOx";
const ld = "-nxjJLcz";
const ud = "FFjif68M";
const dd = "jTVS0CtG";

const $e = {
  userName: Qu,
  pinBadge: Ju,
  text: ed,
  nukstaGlow: td,
  xs: nd,
  sm: rd,
  md: od,
  lg: sd,
  pinWrapper: id,
  pinTooltip: ad,
  pinTooltipFadeIn: cd,
  pinTooltipRow: ld,
  pinTooltipLabel: ud,
  pinTooltipArrow: dd,
};

const hd = { xs: 12, sm: 14, md: 16, lg: 22 };
function cn({
  name: e,
  verified: t,
  hasNuksta: n,
  pin: r,
  size: s = "md",
  className: i,
}) {
  const hd_s = hd[s];
  const c = I(null);
  const [u, l] = A(null);

  const h = S(() => {
    if (!c.current) {
      return;
    }
    const f = c.current.getBoundingClientRect();
    l({ x: f.left + f.width / 2, y: f.top });
  }, []);

  const d = S(() => {
    l(null);
  }, []);

  return o("span", {
    className: `${$e.userName} ${$e[s]} ${i || ""}`,
    children: [
      n
        ? o("span", {
            className: $e.nukstaGlow,
            children: o("span", { className: $e.text, children: e }),
          })
        : o("span", { className: $e.text, children: e }),
      t && o(za, {}),
      r &&
        o("span", {
          ref: c,
          className: $e.pinWrapper,
          onMouseEnter: h,
          onMouseLeave: d,
          children: [
            o("img", {
              src: r.url,
              alt: r.name,
              className: $e.pinBadge,
              width: hd_s,
              height: hd_s,
            }),
            u &&
              Ct(
                o("div", {
                  className: $e.pinTooltip,
                  style: { left: `${u.x}px`, top: `${u.y}px` },
                  children: [
                    o("span", {
                      className: $e.pinTooltipRow,
                      children: [
                        o("span", {
                          className: $e.pinTooltipLabel,
                          children: "Пин:",
                        }),
                        " ",
                        r.name,
                      ],
                    }),
                    r.description &&
                      o("span", {
                        className: $e.pinTooltipRow,
                        children: [
                          o("span", {
                            className: $e.pinTooltipLabel,
                            children: "Ивент:",
                          }),
                          " ",
                          r.description,
                        ],
                      }),
                    o("span", { className: $e.pinTooltipArrow }),
                  ],
                }),
                document.body
              ),
          ],
        }),
    ],
  });
}
const fd = "GOavgVFK";
const md = "WsAFjFg1";
const pd = "luyzBE-G";
const gd = "LGkNQoga";
const vd = "HiaF08Tp";
const _d = "fjKZASHi";
const wd = "YH0jgs8I";
const yd = "iw-oVKLc";
const Cd = "-L1Z1WbU";

const at = {
  repostModal: fd,
  content: md,
  title: pd,
  inputSection: gd,
  textarea: vd,
  originalPost: _d,
  postHeader: wd,
  postText: yd,
  actions: Cd,
};

function Td({ post: e, onClose: t, onSuccess: n }) {
  const [r, s] = A("");
  const [i, a] = A(false);

  const c = Te((l) => l.profile);

  const u = async () => {
    a(true);
    try {
      await Oe.createRepost(e.id, r.trim() || undefined);
      n?.();
      t();
    } catch (l) {
      console.error("Failed to create repost:", l);
    } finally {
      a(false);
    }
  };

  return o(yt, {
    onClose: t,
    showHeader: false,
    frameless: false,
    className: at.repostModal,
    children: o("div", {
      className: at.content,
      children: [
        o("h2", { className: at.title, children: "Репост" }),
        o("div", {
          className: at.inputSection,
          children: [
            c && o(Ze, { src: c.avatar, alt: c.displayName, size: "sm" }),
            o("textarea", {
              className: at.textarea,
              placeholder: "Добавьте комментарий к репосту...",
              value: r,
              onInput: (l) => s(l.target.value),
              rows: 3,
            }),
          ],
        }),
        o("div", {
          className: at.originalPost,
          children: [
            o("div", {
              className: at.postHeader,
              children: [
                o(Ze, {
                  src: e.author.avatar ?? "",
                  alt: e.author.displayName,
                  size: "xs",
                }),
                o(cn, {
                  name: e.author.displayName,
                  verified: e.author.isVerified,
                  hasNuksta: e.author.hasNuksta,
                  pin: e.author.pin,
                  size: "xs",
                }),
              ],
            }),
            o("p", { className: at.postText, children: e.text }),
          ],
        }),
        o("div", {
          className: at.actions,
          children: [
            o(Le, {
              variant: "secondary",
              onClick: (l) => {
                l.stopPropagation();
                t();
              },
              disabled: i,
              children: "Отмена",
            }),
            o(Le, {
              variant: "primary",
              onClick: (l) => {
                l.stopPropagation();
                u();
              },
              disabled: i,
              children: i ? "Репост..." : "Репостнуть",
            }),
          ],
        }),
      ],
    }),
  });
}
const Ed = "YUXc-thD";
const Rd = "AHlpmYy2";
const Nd = "_8tUE-BuY";
const Sd = "RIne2Axl";
const kd = "qfOKVlyM";
const bd = "XA7edfAc";
const Id = "_97G7MW7p";
const Pd = "li-GTJHA";
const Ad = "x0peq7nh";
const xd = "_6pRzoTi7";

const Je = {
  editPostModal: Ed,
  form: Rd,
  whatsNew: Nd,
  editor: Sd,
  actions: kd,
  mediaButtons: bd,
  mediaButton: Id,
  submitGroup: Pd,
  charCount: Ad,
  error: xd,
};

const wo = 5000; /* 5e3 */
function Od({ postId: e, initialText: t, initialSpans: n = [] }) {
  const { closeModal: r } = Mn();

  const s = le((w) => w.editPost);

  const i = Te((w) => w.profile);

  const a = mt();

  const {
    text: c,
    spans: u,
    editorRef: l,
    handleChange: h,
    insertText: d,
  } = On(t, n);

  const [f, m] = A(false);
  const T = wo - c.length;
  const g = T < 0;
  const p = c !== t;
  const _ = JSON.stringify(u) !== JSON.stringify(n);
  const v = p || _;

  const y = S(
    (w) => {
      d(w.emoji);
    },
    [d]
  );

  const C = S(async () => {
    if (!(!c.trim() || g || g || !v || g || !v || f)) {
      m(true);
      try {
        await s(e, c, u);
        r();
      } catch (w) {
        console.error("Failed to update post:", w);
      } finally {
        m(false);
      }
    }
  }, [c, u, g, v, f, s, e, r]);

  return o(yt, {
    frameless: true,
    onClose: r,
    className: Je.editPostModal,
    children: o("div", {
      className: Je.form,
      children: [
        o("div", {
          className: Je.whatsNew,
          children: [
            o(Ze, { src: i?.avatar ?? "", size: "md" }),
            o($n, {
              ref: l,
              value: c,
              spans: u,
              onChange: h,
              placeholder: "Что нового?",
              maxLength: wo,
              autoFocus: true,
              className: Je.editor,
              minHeight: 40,
              maxHeight: 400,
            }),
          ],
        }),
        o("div", {
          className: Je.actions,
          children: [
            o("div", {
              className: Je.mediaButtons,
              children:
                !a &&
                o(br, { onEmojiSelect: y, buttonClassName: Je.mediaButton }),
            }),
            o("div", {
              className: Je.submitGroup,
              children: [
                g &&
                  o("span", {
                    className: `${Je.charCount} ${Je.error}`,
                    children: T,
                  }),
                o(Le, {
                  size: "lg",
                  disabled: !c.trim() || g || g || !v,
                  loading: f,
                  onClick: C,
                  children: "Сохранить",
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}

const yo = (e) => Symbol.iterator in e;

const Co = (e) => "entries" in e;

const To = (e, t) => {
  const n = e instanceof Map ? e : new Map(e.entries());
  const r = t instanceof Map ? t : new Map(t.entries());
  if (n.size !== r.size) {
    return false;
  }
  for (const [s, i] of n) {
    if (!r.has(s) || !Object.is(i, r.get(s))) {
      return false;
    }
  }
  return true;
};

const Ld = (e, t) => {
  const n = e[Symbol.iterator]();
  const r = t[Symbol.iterator]();
  let s = n.next();
  let i = r.next();

  while (!s.done && !i.done) {
    if (!Object.is(s.value, i.value)) {
      return false;
    }
    s = n.next();
    i = r.next();
  }

  return !!s.done && !!i.done;
};

function Md(e, t) {
  return Object.is(e, t)
    ? true
    : typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null ||
      Object.getPrototypeOf(e) !== Object.getPrototypeOf(t)
    ? false
    : yo(e) && yo(t)
    ? Co(e) && Co(t)
      ? To(e, t)
      : Ld(e, t)
    : To(
        { entries: () => Object.entries(e) },
        { entries: () => Object.entries(t) }
      );
}
function Eo(e) {
  const t = Gt.useRef(undefined);
  return (n) => {
    const r = e(n);
    return Md(t.current, r) ? t.current : (t.current = r);
  };
}
const $d = "qW4HNPBu";
const Dd = "tx-JBNZ6";
const Ud = "_033iEEAi";
const Fd = "DNnNfgbz";
const pn = { commentsModal: $d, header: Dd, title: Ud, content: Fd };
function Bd({ postId: e, onClose: t }) {
  const n = I(null);

  const {
    comments: r,
    commentsLoading: s,
    commentsLoadingMore: i,
    commentsHasMore: a,
    clearComments: c,
    fetchComments: u,
    loadMoreComments: l,
    toggleCommentReaction: h,
    addComment: d,
  } = le(
    Eo((C) => ({
      comments: C.comments,
      commentsLoading: C.commentsLoading,
      commentsLoadingMore: C.commentsLoadingMore,
      commentsHasMore: C.commentsHasMore,
      clearComments: C.clearComments,
      fetchComments: C.fetchComments,
      loadMoreComments: C.loadMoreComments,
      toggleCommentReaction: C.toggleCommentReaction,
      addComment: C.addComment,
    }))
  );

  const { commentsSort: f, setCommentsSort: m } = Nn(
    Eo((C) => ({
      commentsSort: C.commentsSort,
      setCommentsSort: C.setCommentsSort,
    }))
  );

  if (n.current !== e) {
    n.current = e;
    c();
  }

  B(() => {
    u(e);
  }, [e, u]);

  const T = S(
    (C) => {
      m(C);
      u(e);
    },
    [m, u, e]
  );

  const g = S(() => {
    if (a && !i) {
      l(e);
    }
  }, [a, i, l, e]);

  const p = S(
    (C, w) => {
      h(C, w ?? "love");
    },
    [h]
  );

  const _ = S(
    (C, w) => {
      h(C, w);
    },
    [h]
  );

  const v = S(
    async (C, w, b, k, R, N) => {
      await d(e, C, w, b, N, k, R);
    },
    [d, e]
  );

  const y = S(
    async (C) => {
      const w = `voice_${Date.now()}.webm`;
      const b = new File([C], w, { type: C.type || "audio/webm" });
      const k = await $t.uploadMedia(b);
      await d(e, "", [], undefined, [{ mediaId: k.id }]);
    },
    [d, e]
  );

  return o(yt, {
    frameless: true,
    onClose: t,
    className: pn.commentsModal,
    children: [
      o("div", {
        className: pn.header,
        children: o("span", { className: pn.title, children: "Комментарии" }),
      }),
      o("div", {
        className: pn.content,
        "data-comments-modal": true,
        children: o(rg, {
          comments: r,
          isLoading: s,
          isLoadingMore: i,
          hasMore: a,
          sort: f,
          onSortChange: T,
          onLikeComment: p,
          onReactionComment: _,
          onAddComment: v,
          onVoiceSend: y,
          onLoadMore: g,
        }),
      }),
    ],
  });
}
const Hd = "QoEaDkke";
const Vd = "clHkuJ7t";
const Wd = "qilC-Ury";
const jd = "_2pYlGMvj";
const gn = { content: Hd, title: Vd, subtitle: Wd, actions: jd };
function zd({ displayName: e, onConfirm: t, onClose: n }) {
  return o(yt, {
    onClose: n,
    showHeader: false,
    children: o("div", {
      className: gn.content,
      children: [
        o("h2", { className: gn.title, children: "Отписаться?" }),
        o("p", {
          className: gn.subtitle,
          children: [
            "Вы действительно хотите отписаться от ",
            o("strong", { children: e }),
            "?",
          ],
        }),
        o("div", {
          className: gn.actions,
          children: [
            o(Le, {
              variant: "secondary",
              onClick: (r) => {
                r.stopPropagation();
                n();
              },
              children: "Отмена",
            }),
            o(Le, {
              variant: "danger",
              onClick: (r) => {
                r.stopPropagation();
                t();
                n();
              },
              children: "Отписаться",
            }),
          ],
        }),
      ],
    }),
  });
}
const qd = "JtDslUlB";
const Yd = "ccJtOIg3";
const Xd = "jttdPuoT";
const Gd = "Ik3feOcb";
const Kd = "OWIVanqr";
const Zd = "ApLgDejC";
const Qd = "wzYde9CM";
const Jd = "jjAXXJME";

const vt = {
  underline: qd,
  monospace: Yd,
  quote: Xd,
  spoiler: Gd,
  revealed: Kd,
  link: Zd,
  mention: Qd,
  hashtag: Jd,
};

function eh(e) {
  try {
    const t = new URL(e);
    return t.protocol === "http:" || t.protocol === "https:";
  } catch {
    return false;
  }
}
function th(e) {
  if (!eh(e)) {
    return "#";
  }
  const n = new TextEncoder().encode(e);
  const r = String.fromCharCode(...n);
  const s = btoa(r);
  return `/external?url=${encodeURIComponent(s)}`;
}
function Ms({ text: e, spans: t = [], className: n = "" }) {
  const [r, s] = A(new Set());

  const i = Ce(() => {
    if (t.length === 0) {
      return [{ text: e, styles: new Set() }];
    }
    const u = [];

    t.forEach((f, m) => {
      u.push({ pos: f.offset, type: "start", span: f, index: m });
      u.push({ pos: f.offset + f.length, type: "end", span: f, index: m });
    });

    u.sort((f, m) =>
      f.pos !== m.pos
        ? f.pos - m.pos
        : f.type !== m.type
        ? f.type === "end"
          ? -1
          : 1
        : 0
    );

    const l = [];
    let h = 0;
    const d = new Map();
    for (const f of u) {
      if (f.pos > h) {
        const m = e.substring(h, f.pos);
        const T = new Set();
        let g;
        let p;
        let _;

        d.forEach((v) => {
          T.add(v.type);

          if (v.type === "link" && v.url) {
            g = v.url;
          }

          if (v.type === "mention" && (v.username || v.id)) {
            p = v.username || v.id;
          }

          if (v.type === "hashtag" && v.tag) {
            _ = v.tag;
          }
        });

        l.push({ text: m, styles: T, url: g, mentionId: p, hashtag: _ });
      }

      if (f.type === "start") {
        d.set(f.index, f.span);
      } else {
        d.delete(f.index);
      }

      h = f.pos;
    }

    if (h < e.length) {
      l.push({ text: e.substring(h), styles: new Set() });
    }

    return l;
  }, [e, t]);

  const a = (u, l) => {
    u.stopPropagation();

    s((h) => {
      const d = new Set(h);

      if (d.has(l)) {
        d.delete(l);
      } else {
        d.add(l);
      }

      return d;
    });
  };

  const c = (u, l) => {
    let u_text = u.text;

    if (u.styles.has("bold")) {
      u_text = o("strong", { children: u_text });
    }

    if (u.styles.has("italic")) {
      u_text = o("em", { children: u_text });
    }

    if (u.styles.has("underline")) {
      u_text = o("span", { className: vt.underline, children: u_text });
    }

    if (u.styles.has("strike")) {
      u_text = o("s", { children: u_text });
    }

    if (u.styles.has("monospace")) {
      u_text = o("code", { className: vt.monospace, children: u_text });
    }

    if (u.styles.has("quote")) {
      u_text = o("span", { className: vt.quote, children: u_text });
    }

    if (u.styles.has("spoiler")) {
      const d = r.has(l);
      u_text = o("span", {
        className: `${vt.spoiler} ${d ? vt.revealed : ""}`,
        onClick: (f) => a(f, l),
        children: u_text,
      });
    }

    if (u.styles.has("link") && u.url) {
      const d = th(u.url);
      u_text = o("a", {
        href: d,
        target: "_blank",
        rel: "noopener noreferrer",
        className: vt.link,
        onClick: (f) => f.stopPropagation(),
        children: u_text,
      });
    }
    if (u.styles.has("mention") && u.mentionId) {
      const d = `/@${u.mentionId}`;
      u_text = o("a", {
        href: d,
        className: vt.mention,
        onClick: (f) => {
          f.preventDefault();
          f.stopPropagation();
          $(d);
        },
        children: u_text,
      });
    }
    if (u.styles.has("hashtag") && u.hashtag) {
      const d = `/hashtag/${encodeURIComponent(u.hashtag)}`;
      u_text = o("a", {
        href: d,
        className: vt.hashtag,
        onClick: (f) => {
          f.preventDefault();
          f.stopPropagation();
          $(d);
        },
        children: u_text,
      });
    }
    return o("span", { children: u_text }, l);
  };

  return o("span", { className: n, children: i.map((u, l) => c(u, l)) });
}
const nh = "t6dMOE-t";
const rh = "dN7ncPvV";
const oh = "goihPOfy";
const sh = "_3cD3eUbW";
const ih = "SWw4qjFC";
const ah = "J5ZRq4aT";
const ch = "zH6fnEQR";
const lh = "OzZxDBjs";
const uh = "r-v5forc";
const dh = "Azp1k6ER";
const hh = "_8AA-g-Mn";
const fh = "aaxVMk0e";
const mh = "QUwLZbFH";
const ph = "Fub6vefq";
const gh = "Uvg1jJsO";
const vh = "_9HuwvxSy";
const _h = "_0-reqUdU";
const wh = "yjejWG8w";
const yh = "rW9UH9FX";
const Ch = "AP0ro9mL";
const Th = "lc7iFAaZ";
const Eh = "D7O8ZJMb";
const Rh = "-OyFh6KG";
const Nh = "FVUgQZaF";

const ce = {
  poll: nh,
  disabled: rh,
  header: oh,
  title: sh,
  meta: ih,
  voteCount: ah,
  options: ch,
  option: lh,
  votingOption: uh,
  preselected: dh,
  optionContent: hh,
  voted: fh,
  optionProgressWrapper: mh,
  optionProgress: ph,
  optionContentInverted: gh,
  optionText: vh,
  optionPercent: _h,
  optionProgressSimple: wh,
  checkmark: yh,
  checkbox: Ch,
  checkboxChecked: Th,
  submitBtn: Eh,
  footer: Rh,
  revoteBtn: Nh,
};

function Sh({
  title: e,
  options: t,
  totalVotes: n,
  voted: r = false,
  selectedOptionId: s = null,
  selectedOptionIds: i = [],
  multipleChoice: a = false,
  onVote: c,
  onVoteMultiple: u,
  className: l,
  disabled: h = false,
}) {
  const [d, f] = A(r);

  const [m, T] = A(() =>
    i.length > 0 ? new Set(i) : s ? new Set([s]) : new Set()
  );

  const [g, p] = A(n);
  const [_, v] = A(t);
  const [y, C] = A(r);
  const [w, b] = A(false);
  const [k, R] = A(new Map());
  const N = I(new Map());

  const P = t.map((D) => `${D.id}:${D.votes}`).join(",");

  B(() => {
    v(t);
    p(n);
    f(r);

    if (i.length > 0) {
      T(new Set(i));
    } else {
      T(s ? new Set([s]) : new Set());
    }

    if (r && !w) {
      C(true);
    }
  }, [P, n, r, s, i.join(",")]);

  B(() => {
    if (r && N.current.size > 0) {
      const D = new Map();

      N.current.forEach((W, G) => {
        D.set(G, W.offsetWidth);
      });

      R(D);
    }
  }, [r]);

  const E = d && !w;

  const U = S(
    (D) => {
      if (h || E) {
        return;
      }
      if (a) {
        T((M) => {
          const x = new Set(M);

          if (x.has(D)) {
            x.delete(D);
          } else {
            x.add(D);
          }

          return x;
        });
        return;
      }
      const W = m.size > 0 ? Array.from(m)[0] : null;

      v((M) =>
        M.map((x) =>
          x.id === D
            ? { ...x, votes: x.votes + 1 }
            : x.id === W
            ? { ...x, votes: Math.max(0, x.votes - 1) }
            : x
        )
      );

      if (!d) {
        p((M) => M + 1);
      }

      T(new Set([D]));
      f(true);
      b(false);
      const G = c?.(D);

      if (G && typeof G.then == "function") {
        G.then((M) => {
          if (M) {
            q(M);
          }
        });
      }

      ee();
    },
    [h, E, a, m, d, c]
  );

  const O = S(() => {
    if (m.size === 0) {
      return;
    }
    const D = Array.from(m);

    v((G) =>
      G.map((M) => (D.includes(M.id) ? { ...M, votes: M.votes + 1 } : M))
    );

    if (!d) {
      p((G) => G + 1);
    }

    f(true);
    b(false);
    const W = u?.(D);

    if (W && typeof W.then == "function") {
      W.then((G) => {
        if (G) {
          q(G);
        }
      });
    }

    ee();
  }, [m, d, u]);

  const q = (D) => {
    const W = (D.options ?? []).map((G) => ({
      id: G.id,
      text: G.text,
      votes: G.votesCount ?? G.voteCount ?? G.votes ?? 0,
    }));
    v(W);
    p(D.totalVotes ?? 0);

    if (D.votedOptionIds && D.votedOptionIds.length > 0) {
      T(new Set(D.votedOptionIds));
    }
  };

  const ee = () => {
    requestAnimationFrame(() => {
      const D = new Map();

      N.current.forEach((W, G) => {
        D.set(G, W.offsetWidth);
      });

      R(D);

      requestAnimationFrame(() => {
        C(true);
      });
    });
  };

  const Q = () => {
    b(true);
    C(false);
  };

  const ie = () => {
    b(false);
    C(true);
  };

  const ae = (D) => (g === 0 ? 0 : Math.round((D / g) * 100));

  const X = (D) =>
    D === 1 ? "1 голос" : D >= 2 && D <= 4 ? `${D} голоса` : `${D} голосов`;

  const J = (D) => {
    D.stopPropagation();
  };

  return o("div", {
    className: `${ce.poll} ${h ? ce.disabled : ""} ${l || ""}`,
    onClick: J,
    children: [
      o("div", {
        className: ce.header,
        children: [
          o("span", { className: ce.title, children: e }),
          d &&
            o("div", {
              className: ce.meta,
              children: o("span", { className: ce.voteCount, children: X(g) }),
            }),
        ],
      }),
      o("div", {
        className: ce.options,
        children: _.map((D) => {
          const W = ae(D.votes);
          const G = m.has(D.id);
          const M = y ? `${W}%` : "0%";
          const x =
            k.get(D.id) ||
            N.current.get(D.id)?.offsetWidth ||
            N.current.get(D.id)?.offsetWidth ||
            0;
          return E
            ? o(
                "div",
                {
                  ref: (F) => {
                    if (F) {
                      N.current.set(D.id, F);
                    }
                  },
                  className: `${ce.option} ${ce.voted} ${G ? ce.selected : ""}`,
                  children: [
                    o("div", {
                      className: ce.optionContent,
                      children: [
                        o("span", {
                          className: ce.optionText,
                          children: [
                            G &&
                              o("span", {
                                className: ce.checkmark,
                                children: "✓ ",
                              }),
                            D.text,
                          ],
                        }),
                        o("span", {
                          className: ce.optionPercent,
                          children: [W, "%"],
                        }),
                      ],
                    }),
                    G &&
                      o("div", {
                        className: ce.optionProgressWrapper,
                        style: { width: M },
                        children: [
                          o("div", { className: ce.optionProgress }),
                          o("div", {
                            className: ce.optionContentInverted,
                            style: { width: `${x}px` },
                            children: [
                              o("span", {
                                className: ce.optionText,
                                children: [
                                  o("span", {
                                    className: ce.checkmark,
                                    children: "✓ ",
                                  }),
                                  D.text,
                                ],
                              }),
                              o("span", {
                                className: ce.optionPercent,
                                children: [W, "%"],
                              }),
                            ],
                          }),
                        ],
                      }),
                    !G &&
                      o("div", {
                        className: ce.optionProgressSimple,
                        style: { width: M },
                      }),
                  ],
                },
                D.id
              )
            : o(
                "div",
                {
                  ref: (F) => {
                    if (F) {
                      N.current.set(D.id, F);
                    }
                  },
                  className: `${ce.option} ${ce.votingOption} ${
                    G ? ce.preselected : ""
                  }`,
                  onClick: () => U(D.id),
                  children: o("div", {
                    className: ce.optionContent,
                    children: [
                      a &&
                        o("span", {
                          className: `${ce.checkbox} ${
                            G ? ce.checkboxChecked : ""
                          }`,
                          children: G && "✓",
                        }),
                      o("span", { className: ce.optionText, children: D.text }),
                    ],
                  }),
                },
                D.id
              );
        }),
      }),
      a &&
        !d &&
        m.size > 0 &&
        !w &&
        o("button", {
          className: ce.submitBtn,
          onClick: O,
          type: "button",
          children: "Проголосовать",
        }),
      d &&
        o("div", {
          className: ce.footer,
          children: w
            ? o(Re, {
                children: [
                  a &&
                    m.size > 0 &&
                    o("button", {
                      className: ce.submitBtn,
                      onClick: O,
                      type: "button",
                      children: "Проголосовать",
                    }),
                  o("button", {
                    className: ce.revoteBtn,
                    onClick: ie,
                    type: "button",
                    children: "Отмена",
                  }),
                ],
              })
            : o("button", {
                className: ce.revoteBtn,
                onClick: Q,
                type: "button",
                children: "Изменить голос",
              }),
        }),
    ],
  });
}
const kh = "zRX0j4Tr";
const bh = "_3HYi31vZ";
const Ih = "sgbXxBQt";
const Ph = "GyS5v2h6";
const Ah = "HxhHv5PS";
const xh = "HhzGlfqd";
const Oh = "bQ6-MeS1";
const Lh = "QCLZpkig";
const Mh = "WIOo5dNL";

const ct = {
  dropdownWrapper: kh,
  trigger: bh,
  menu: Ih,
  hidden: Ph,
  menuItem: Ah,
  danger: xh,
  itemIcon: Oh,
  itemLabel: Lh,
  divider: Mh,
};

function $s({
  trigger: e,
  items: t,
  position: n = "bottom-right",
  dividerAfter: r = [],
  className: s,
}) {
  const [i, a] = A(false);
  const [c, u] = A(false);
  const [l, h] = A({ top: 0, left: 0 });
  const d = I(null);
  const f = I(null);

  const m = S(() => {
    if (!d.current) {
      return;
    }
    const _ = d.current.getBoundingClientRect();
    const v = f.current?.offsetHeight || 150;
    const y = f.current?.offsetWidth || 160;
    let C = 0;
    let w = 0;

    if (n.startsWith("bottom")) {
      C = _.bottom + 4;
    } else {
      C = _.top - v - 4;
    }

    if (n.endsWith("right")) {
      w = _.right - y;
    } else {
      w = _.left;
    }

    const { innerWidth, innerHeight } = window;

    if (w + y > innerWidth) {
      w = innerWidth - y - 8;
    }

    if (w < 8) {
      w = 8;
    }

    if (C + v > innerHeight) {
      C = _.top - v - 4;
    }

    if (C < 8) {
      C = _.bottom + 4;
    }

    h({ top: C, left: w });
    u(true);
  }, [n]);

  const T = S((_) => {
    const _target = _.target;

    if (
      d.current &&
      !d.current.contains(_target) &&
      f.current &&
      !f.current.contains(_target)
    ) {
      a(false);
      u(false);
    }
  }, []);

  B(() => {
    if (i) {
      m();
      document.addEventListener("mousedown", T);
      window.addEventListener("scroll", m, true);
      window.addEventListener("resize", m);

      return () => {
        document.removeEventListener("mousedown", T);
        window.removeEventListener("scroll", m, true);
        window.removeEventListener("resize", m);
      };
    }
  }, [i, T, m]);

  const g = (_) => {
    _.stopPropagation();

    if (i) {
      a(false);
      u(false);
    } else {
      a(true);
    }
  };

  const p = (_, v) => {
    _.stopPropagation();
    v.onClick();
    a(false);
    u(false);
  };

  return o("div", {
    className: `${ct.dropdownWrapper} ${s || ""}`,
    children: [
      o("div", { ref: d, className: ct.trigger, onClick: g, children: e }),
      i &&
        Ct(
          o("div", {
            ref: f,
            className: `${ct.menu} ${c ? "" : ct.hidden}`,
            style: { top: l.top, left: l.left },
            children: t.map((_, v) =>
              o(
                "div",
                {
                  children: [
                    o("button", {
                      type: "button",
                      className: `${ct.menuItem} ${_.danger ? ct.danger : ""}`,
                      onClick: (y) => p(y, _),
                      children: [
                        _.icon &&
                          o("span", {
                            className: ct.itemIcon,
                            children: _.icon,
                          }),
                        o("span", {
                          className: ct.itemLabel,
                          children: _.label,
                        }),
                      ],
                    }),
                    r.includes(_.id) &&
                      v < t.length - 1 &&
                      o("div", { className: ct.divider }),
                  ],
                },
                _.id
              )
            ),
          }),
          document.body
        ),
    ],
  });
}
const $h = "oAyquNjM";
const Dh = "cGo-pqMK";
const Uh = "abh-IRfe";
const Fh = "_3UMrcwJw";
const Bh = "MtmuinE5";
const Hh = "OHOBvjSN";
const Vh = "vPid2PoY";
const Wh = "ShSUtrj1";

const _t = {
  header: $h,
  headerMain: Dh,
  moreDropdown: Uh,
  pinnedBadge: Fh,
  authorInfo: Bh,
  authorLink: Hh,
  time: Vh,
  edited: Wh,
};

function jh({
  author: e,
  createdAt: t,
  editedAt: n,
  postId: r,
  showAvatar: s = true,
  isOnOwnProfile: i = false,
  isPinned: a = false,
  onReport: c,
  onEdit: u,
  onDelete: l,
  onPin: h,
  onCopyLink: d,
}) {
  const f = ps(t);

  const m = Te((v) => v.profile?.id);

  const T = e.id === m;
  const g = 2880 * 60 * 1000; /* 1e3 */
  const p = T && Date.now() - new Date(t).getTime() < g;

  const _ = Ce(() => {
    const v = [];

    v.push({
      id: "copy-link",
      label: "Скопировать ссылку",
      icon: o(_s, { size: 16 }),
      onClick: () => d?.(r),
    });

    if (p) {
      v.push({
        id: "edit",
        label: "Редактировать",
        icon: o(ws, { size: 16 }),
        onClick: () => u?.(r),
      });
    }

    if (i) {
      v.push({
        id: "pin",
        label: a ? "Открепить" : "Закрепить",
        icon: o(lo, { size: 16 }),
        onClick: () => h?.(r),
      });
    }

    if (T || i) {
      v.push({
        id: "delete",
        label: "Удалить",
        icon: o(Ss, { size: 16 }),
        danger: true,
        onClick: () => l?.(r),
      });
    }

    if (!T) {
      v.push({
        id: "report",
        label: "Пожаловаться",
        icon: o(ys, { size: 16 }),
        danger: true,
        onClick: () => c?.(r),
      });
    }

    return v;
  }, [T, p, i, a, r, u, l, h, c, d]);

  return o("header", {
    className: _t.header,
    children: [
      a &&
        o("div", {
          className: _t.pinnedBadge,
          children: [
            o(lo, { size: 14 }),
            o("span", { children: "Закреплённый пост" }),
          ],
        }),
      o("div", {
        className: _t.headerMain,
        children: [
          s &&
            o("a", {
              href: `/@${e.username}`,
              children: o(Ze, {
                src: e.avatar,
                alt: e.displayName,
                size: "sm",
                online: e.online,
              }),
            }),
          o("div", {
            className: _t.authorInfo,
            children: [
              o("a", {
                href: `/@${e.username}`,
                className: _t.authorLink,
                children: o(cn, {
                  name: e.displayName,
                  verified: e.isVerified,
                  hasNuksta: e.hasNuksta,
                  pin: e.pin,
                  size: "sm",
                }),
              }),
              o("time", {
                dateTime: t,
                className: _t.time,
                children: [
                  f,
                  n &&
                    o(dr, {
                      text: new Date(n).toLocaleString("ru-RU"),
                      children: o("span", {
                        className: _t.edited,
                        children: " (ред.)",
                      }),
                    }),
                ],
              }),
            ],
          }),
          o($s, {
            trigger: o(Ts, { size: 18 }),
            items: _,
            position: "bottom-right",
            className: _t.moreDropdown,
          }),
        ],
      }),
    ],
  });
}
function Ds(e, t, n) {
  const { isVisible: r, isRevealing: s, onRevealComplete: i } = n;
  const a = I([]);
  const c = I(null);
  const u = I(null);
  const l = I({ width: 0, height: 0 });
  const h = I(1);

  const d = S((g, p) => {
    const _ = Math.random() * 80 + 60;
    return {
      x: Math.random() * g,
      y: Math.random() * p,
      size: Math.random() * 1.2 + 0.5,
      speedX: (Math.random() - 0.5) * 0.4,
      speedY: (Math.random() - 0.5) * 0.4,
      opacity: Math.random() * 0.5 + 0.2,
      life: Math.random() * _,
      maxLife: _,
    };
  }, []);

  const f = S(
    (g, p) => {
      const _ = Math.floor((g * p) / 600);
      const v = [];
      for (let y = 0; y < _; y++) {
        v.push(d(g, p));
      }
      a.current = v;
    },
    [d]
  );

  const m = S(() => {
    const e_current = e.current;
    const t_current = t.current;
    if (!e_current || !t_current) {
      return;
    }
    const _ = t_current.getBoundingClientRect();
    if (_.width === 0 || _.height === 0) {
      return;
    }
    const v = window.devicePixelRatio || 1;
    if (l.current.width !== _.width || l.current.height !== _.height) {
      l.current = { width: _.width, height: _.height };
      e_current.width = _.width * v;
      e_current.height = _.height * v;
      e_current.style.width = `${_.width}px`;
      e_current.style.height = `${_.height}px`;
      const y = e_current.getContext("2d");

      if (y) {
        y.setTransform(v, 0, 0, v, 0, 0);
        u.current = y;
      }

      f(_.width, _.height);
    }
  }, [e, t, f]);

  const T = S(() => {
    h.current = 1;
  }, []);

  B(() => {
    if (!r) {
      if (c.current) {
        cancelAnimationFrame(c.current);
        c.current = null;
      }

      return;
    }
    m();
    const g = () => {
      const u_current = u.current;
      const { width: _, height: v } = l.current;
      if (!u_current || _ === 0 || _ === 0 || v === 0) {
        c.current = requestAnimationFrame(g);
        return;
      }
      if (s && ((h.current -= 0.05), h.current <= 0)) {
        i();
        return;
      }
      u_current.clearRect(0, 0, _, v);

      a.current.forEach((y, C) => {
        y.x += y.speedX;
        y.y += y.speedY;
        y.life--;

        if (y.x < 0) {
          y.x = _;
        }

        if (y.x > _) {
          y.x = 0;
        }

        if (y.y < 0) {
          y.y = v;
        }

        if (y.y > v) {
          y.y = 0;
        }

        if (y.life <= 0) {
          a.current[C] = d(_, v);
          return;
        }

        const w = y.life / y.maxLife;
        const b = w < 0.3 ? w / 0.3 : 1;
        const k = y.opacity * b * h.current;
        u_current.beginPath();
        u_current.arc(y.x, y.y, y.size, 0, Math.PI * 2);
        u_current.fillStyle = `rgba(255, 255, 255, ${k})`;
        u_current.fill();
      });

      c.current = requestAnimationFrame(g);
    };
    c.current = requestAnimationFrame(g);
    window.addEventListener("resize", m);

    return () => {
      if (c.current) {
        cancelAnimationFrame(c.current);
      }

      window.removeEventListener("resize", m);
    };
  }, [r, s, d, m, i]);

  return { resetOpacity: T };
}
const zh = "_2Gc4qhOv";
const qh = "UY9OONTU";
const Yh = "_0IkXVI0s";
const Xh = "-LecVcA9";
const Gh = "I1O3wwfn";
const qt = { container: zh, hidden: qh, image: Yh, revealing: Xh, canvas: Gh };
const Ro = 5;
function Kh({
  src: e,
  alt: t = "",
  spoiler: n = false,
  width: r,
  height: s,
  className: i = "",
  onClick: a,
}) {
  const [c, u] = A(!n);
  const [l, h] = A(false);
  const [d, f] = A(false);
  const m = I(null);
  const T = I(null);
  const g = I(null);
  const p = I(false);

  const { resetOpacity: _ } = Ds(m, T, {
    isVisible: d && !c && n,
    isRevealing: l,
    onRevealComplete: () => u(true),
  });

  B(() => {
    const T_current = T.current;
    if (!T_current) {
      return;
    }
    const R = new IntersectionObserver(
      (N) => {
        N.forEach((P) => {
          f(P.isIntersecting);
        });
      },
      { threshold: 0, rootMargin: "0px 200px 0px 200px" }
    );
    R.observe(T_current);

    return () => {
      R.disconnect();
    };
  }, []);

  const v = (k) => {
    g.current = { x: k.clientX, y: k.clientY };
    p.current = false;
  };

  const y = (k) => {
    if (!g.current) {
      return;
    }
    const R = Math.abs(k.clientX - g.current.x);
    const N = Math.abs(k.clientY - g.current.y);

    if (R > Ro || N > Ro) {
      p.current = true;
    }
  };

  const C = (k) => {
    if (p.current) {
      p.current = false;
      k.stopPropagation();
      return;
    }

    if (!c && !l && n) {
      k.stopPropagation();
      h(true);
      _();
    } else if (a) {
      a(k);
    }
  };

  const w = !c && n;
  const b = r && s ? { aspectRatio: `${r} / ${s}` } : undefined;
  return n
    ? o("div", {
        ref: T,
        className: `${qt.container} ${i} ${w ? qt.hidden : ""} ${
          l ? qt.revealing : ""
        }`,
        style: b,
        onPointerDown: v,
        onPointerMove: y,
        onClick: C,
        children: [
          o("img", {
            src: e,
            alt: t,
            className: qt.image,
            loading: "lazy",
            width: r,
            height: s,
            draggable: false,
          }),
          w && o("canvas", { ref: m, className: qt.canvas }),
        ],
      })
    : o("img", {
        src: e,
        alt: t,
        className: i,
        loading: "lazy",
        draggable: false,
        onClick: a,
      });
}
const Zh = "_7OM9isQp";
const Qh = "tOcLl5Fe";
const Jh = "K6pRPvna";
const ef = "W7spdM5t";
const tf = "_-2wZA6Y1";
const nf = "eelWZWVN";

const Mt = {
  container: Zh,
  hidden: Qh,
  video: Jh,
  revealing: ef,
  canvas: tf,
  duration: nf,
};

function rf(e) {
  const t = Math.floor(e / 60);
  const n = e % 60;
  return `${t}:${n.toString().padStart(2, "0")}`;
}
function of({
  src: e,
  spoiler: t = false,
  width: n,
  height: r,
  duration: s,
  className: i = "",
}) {
  const a = I(null);
  const c = I(null);
  const u = I(null);
  const [l, h] = A(!t);
  const [d, f] = A(false);
  const [m, T] = A(false);

  const { resetOpacity: g } = Ds(u, c, {
    isVisible: m && !l && t,
    isRevealing: d,
    onRevealComplete: () => h(true),
  });

  B(() => {
    const c_current = c.current;
    if (!c_current) {
      return;
    }
    const C = new IntersectionObserver(
      (w) => {
        w.forEach((b) => {
          T(b.isIntersecting);

          if (!b.isIntersecting && a.current) {
            a.current.pause();
          }
        });
      },
      { threshold: 0.25 }
    );
    C.observe(c_current);

    return () => C.disconnect();
  }, []);

  const p = (y) => {
    y.stopPropagation();

    if (!l && !d && t) {
      f(true);
      g();
      return;
    }
  };

  const _ = !l && t;
  const v = n && r ? { aspectRatio: `${n} / ${r}` } : undefined;
  return o("div", {
    ref: c,
    className: `${Mt.container} ${i} ${_ ? Mt.hidden : ""} ${
      d ? Mt.revealing : ""
    }`,
    style: v,
    onClick: p,
    children: [
      o("video", {
        ref: a,
        src: e,
        controls: l || !t,
        preload: "metadata",
        playsInline: true,
        className: Mt.video,
        width: n,
        height: r,
      }),
      s != null && o("div", { className: Mt.duration, children: rf(s) }),
      _ && o("canvas", { ref: u, className: Mt.canvas }),
    ],
  });
}
const sf = "l4cwyAPN";
const af = "qlCZ-7Jf";
const cf = "_4vGEh5tJ";
const lf = "awFKBPHw";
const uf = "_0vEjHxry";
const et = { mediaWrapper: sf, isFeed: af, media: cf, dragging: lf, image: uf };
const df = 5;
const hf = 0.95;
const Yn = 0.5;
function Ir({ media: e, isFeed: t = false }) {
  const n = e?.filter((R) => R.type === "image") ?? [];

  const r = e?.filter((R) => R.type === "video") ?? [];

  const s = I(null);

  const i = hs((R) => R.open);

  const a = I(false);
  const c = I(0);
  const u = I(0);
  const l = I(false);
  const h = I(0);
  const d = I(0);
  const f = I(0);
  const m = I(null);

  const T = () => {
    if (m.current) {
      cancelAnimationFrame(m.current);
      m.current = null;
    }
  };

  const g = () => {
    const s_current = s.current;
    if (s_current) {
      f.current *= hf;

      if (Math.abs(f.current) < Yn) {
        T();
        return;
      }

      s_current.scrollLeft += f.current;
      m.current = requestAnimationFrame(g);
    }
  };

  const p = (R) => {
    const s_current = s.current;

    if (s_current && n.length + r.length > 1) {
      if (n.length + r.length > 1) {
        T();
        a.current = true;
        s_current.classList.add(et.dragging);
        c.current = R.clientX;
        h.current = R.clientX;
        d.current = Date.now();
        u.current = s_current.scrollLeft;
        l.current = false;
        f.current = 0;
        R.preventDefault();
      }
    }
  };

  const _ = (R) => {
    if (!a.current) {
      return;
    }
    const s_current = s.current;
    if (!s_current) {
      return;
    }
    const P = Date.now();
    const E = R.clientX - c.current;
    const U = R.clientX - h.current;
    const O = P - d.current;

    if (Math.abs(E) > df) {
      l.current = true;
    }

    if (O > 0) {
      f.current = (-U / O) * 16;
    }

    h.current = R.clientX;
    d.current = P;
    s_current.scrollLeft = u.current - E;
  };

  const v = () => {
    if (a.current && Math.abs(f.current) > Yn) {
      g();
    }

    a.current = false;
    s.current?.classList.remove(et.dragging);
  };

  const y = () => {
    if (a.current) {
      Math.abs(f.current) > Yn && g();
      a.current = false;
      s.current?.classList.remove(et.dragging);
    }
  };

  B(
    () => () => {
      T();
      s.current?.classList.remove(et.dragging);
    },
    []
  );

  const C = (R, N) => {
    if (l.current) {
      l.current = false;
      N.stopPropagation();
      return;
    }
    i(
      n.map((P) => ({
        id: P.id,
        url: P.url,
        width: P.width || 800,
        height: P.height || 600,
      })),
      R
    );
  };

  const w = (R) => {
    R.stopPropagation();
    l.current = false;
  };

  const b = Ce(() => {
    const R = [...n, ...r];
    if (R.length === 0) {
      return;
    }
    const N = Math.max(...R.map((P) => P.height || 0));
    return N > 0 ? Math.min(N, 300) : undefined;
  }, [n, r]);

  if (n.length === 0 && r.length === 0) {
    return null;
  }
  const k = n.length + r.length;
  return o("div", {
    className: `${et.mediaWrapper} ${t ? et.isFeed : ""}`,
    "data-count": k,
    style: b ? { height: `${b}px` } : undefined,
    children: o("div", {
      ref: s,
      className: `${et.media} ${t ? et.isFeed : ""}`,
      "data-count": k,
      onClick: w,
      onMouseDown: p,
      onMouseMove: _,
      onMouseUp: v,
      onMouseLeave: y,
      children: [
        r.map((R) =>
          o(
            of,
            {
              src: R.url,
              spoiler: R.spoiler,
              width: R.width,
              height: R.height,
              duration: R.duration,
              className: et.image,
            },
            R.id
          )
        ),
        n.map((R, N) =>
          o(
            Kh,
            {
              src: R.url,
              spoiler: R.spoiler,
              width: R.width,
              height: R.height,
              className: et.image,
              onClick: (P) => C(N, P),
            },
            R.id
          )
        ),
      ],
    }),
  });
}
const ff = "Pc3ZwYUA";
const mf = "uXiMWdXs";
const pf = "_92KcEhCb";
const gf = "A5HN458Y";
const vf = "kVjrCCJb";
const _f = "WIU3w8vr";
const wf = "sxXVgu6K";

const Nt = {
  counter: ff,
  digit: mf,
  prev: pf,
  current: gf,
  animating: vf,
  up: _f,
  down: wf,
};

function yf(e) {
  if (e >= 1000000 /* 1e6 */) {
    const t = e / 1000000; /* 1e6 */
    return t % 1 === 0 ? `${t}M` : `${t.toFixed(1)}M`;
  }
  if (e >= 1000 /* 1e3 */) {
    const t = e / 1000; /* 1e3 */
    return t % 1 === 0 ? `${t}K` : `${t.toFixed(1)}K`;
  }
  return e.toString();
}
function Kt({ value: e }) {
  const t = yf(e);
  const n = I(e);
  const r = I(t.length);
  const s = I(Date.now());

  const [i, a] = A(() =>
    t.split("").map((d, f) => ({
      char: d,
      prevChar: d,
      isAnimating: false,
      key: f,
    }))
  );

  const [c, u] = A(null);

  B(() => {
    if (Date.now() - s.current < 100) {
      n.current = e;
      return;
    }
    if (e === n.current) {
      return;
    }
    const f = e > n.current ? "up" : "down";
    u(f);
    n.current = e;
    const m = t.split("");

    const T = i.map((C) => C.char);

    const g = Math.max(m.length, T.length);
    const p = T.join("").padStart(g, " ").split("");

    const v = m
      .join("")
      .padStart(g, " ")
      .split("")
      .map((C, w) => {
        const b = p[w] || " ";
        const k = i[w - (g - i.length)];
        return C !== b
          ? (r.current++,
            { char: C, prevChar: b, isAnimating: true, key: r.current })
          : { char: C, prevChar: C, isAnimating: false, key: k?.key ?? w };
      })
      .filter((C) => C.char !== " " || C.isAnimating);

    a(v);
    const y = setTimeout(() => {
      a((C) =>
        C.map((w) => ({
          ...w,
          isAnimating: false,
        }))
      );

      u(null);
    }, 300);
    return () => clearTimeout(y);
  }, [e]);

  if (!i.some((d) => d.isAnimating)) {
    return o("span", { children: t });
  }

  const h = c === "up" ? Nt.up : c === "down" ? Nt.down : "";
  return o("span", {
    className: Nt.counter,
    children: i.map((d) =>
      d.isAnimating
        ? o(
            "span",
            {
              className: `${Nt.digit} ${Nt.animating} ${h}`,
              children: [
                o("span", { className: Nt.prev, children: d.prevChar }),
                o("span", { className: Nt.current, children: d.char }),
              ],
            },
            d.key
          )
        : o("span", { children: d.char }, d.key)
    ),
  });
}
const Cf = "QnwlJ0JI";
const Tf = "_4ZjoCms2";
const Ef = "aMkvCscU";
const Rf = "lgOmJE17";
const Nf = "luVObdSy";
const Sf = "Rezs30lQ";
const kf = "_8wD0dR85";
const bf = "ndR5d-hp";
const If = "z-xpwcRG";
const Pf = "DecvAv-7";
const Af = "VRuv-fcD";
const xf = "lo4NvVKr";
const Of = "eJzh56H-";
const Lf = "giKCW-y7";

const Ie = {
  actions: Cf,
  actionsLeft: Tf,
  action: Ef,
  views: Rf,
  liked: Nf,
  reposted: Sf,
  disabled: kf,
  noAnimation: bf,
  reactionWrapper: If,
  actionsRight: Pf,
  captured: Af,
  capturedEmoji: xf,
  capturedText: Of,
  capturedMobile: Lf,
};

function Mf({
  liked: e,
  reposted: t,
  likesCount: n,
  repostsCount: r,
  commentsCount: s,
  viewsCount: i,
  dominantEmoji: a,
  onLike: c,
  onRepost: u,
  onComment: l,
  disableRepost: h = false,
}) {
  const d = I(false);
  return o("footer", {
    className: Ie.actions,
    children: [
      o("div", {
        className: Ie.actionsLeft,
        children: [
          o("div", {
            className: Ie.reactionWrapper,
            onClick: (f) => f.stopPropagation(),
            children: o("button", {
              className: `${Ie.action} ${e ? Ie.liked : ""} ${
                !d.current && e ? Ie.noAnimation : ""
              }`,
              onClick: (f) => {
                f.stopPropagation();
                d.current = true;
                c();
              },
              "aria-label": "Нравится",
              children: [
                o(Ln, { filled: e }, e ? "liked" : "not-liked"),
                o(Kt, { value: n }),
              ],
            }),
          }),
          o("button", {
            className: Ie.action,
            onClick: (f) => {
              f.stopPropagation();
              l();
            },
            "aria-label": "Комментировать",
            children: [o(Sr, {}), o(Kt, { value: s })],
          }),
          o("button", {
            className: `${Ie.action} ${t ? Ie.reposted : ""} ${
              h ? Ie.disabled : ""
            }`,
            onClick: (f) => {
              f.stopPropagation();

              if (!h) {
                u();
              }
            },
            disabled: h,
            "aria-label": "Репост",
            children: [o(bn, {}), o(Kt, { value: r })],
          }),
        ],
      }),
      o("div", {
        className: Ie.actionsRight,
        children: [
          a &&
            o(Re, {
              children: [
                o(dr, {
                  text: "Эмоджи, которое чаще всего лайкало этот пост",
                  className: Ie.captured,
                  children: [
                    o("span", { className: Ie.capturedEmoji, children: a }),
                    o("span", {
                      className: Ie.capturedText,
                      children: "Пост захвачен",
                    }),
                  ],
                }),
                o(dr, {
                  text: "Эмоджи, которое чаще всего лайкало этот пост",
                  className: Ie.capturedMobile,
                  children: o("span", { children: a }),
                }),
              ],
            }),
          o("span", {
            className: Ie.views,
            children: [o(ks, {}), o(Kt, { value: i })],
          }),
        ],
      }),
    ],
  });
}
const $f = "FdYjPIR3";
const Df = "MRPN0AlG";
const Uf = "gVTZJXUf";
const Ff = "PpDQ-7eT";
const Bf = "f-Ewjbkv";
const Hf = "qYj6ku6f";
const Vf = "YmQiahvA";
const Wf = "_4sEs40kd";
const jf = "QflhaLOr";
const zf = "_8yAtdePh";
const qf = "Q0BBb0GB";
const Yf = "LVT25SUb";
const Xf = "_2QopExez";
const Gf = "GWyTusR8";
const Kf = "uA48J3e0";
const Zf = "L9fW2zD6";

const Se = {
  post: $f,
  postInner: Df,
  isFeed: Uf,
  postContent: Ff,
  postBody: Bf,
  textWrapper: Hf,
  text: Vf,
  collapsed: Wf,
  expandButton: jf,
  originalPost: zf,
  originalPostHeader: qf,
  originalPostTime: Yf,
  originalPostText: Xf,
  originalPostMedia: Gf,
  originalPostStats: Kf,
  originalPostStat: Zf,
};

function vn(e) {
  if (e >= 1000000 /* 1e6 */) {
    const t = e / 1000000; /* 1e6 */
    return t % 1 === 0 ? `${t}M` : `${t.toFixed(1)}M`;
  }
  if (e >= 1000 /* 1e3 */) {
    const t = e / 1000; /* 1e3 */
    return t % 1 === 0 ? `${t}K` : `${t.toFixed(1)}K`;
  }
  return e.toString();
}
function Qf(e) {
  if (!e) {
    return "";
  }
  const t = new Date(e);
  return isNaN(t.getTime())
    ? ""
    : t.toLocaleDateString("ru-RU", { day: "numeric", month: "short" });
}
function Jf({ attachments: e }) {
  const t = Ce(() => Pn(e), [e]);
  return (
    t.length === 0 ||
    o("div", {
      className: Se.originalPostMedia,
      children: o(Ir, { media: t }),
    })
  );
}
function em({ originalPost: e }) {
  const t = Qf(e.createdAt);

  const n = S(
    (r) => {
      r.stopPropagation();
      const s = e.author.username ?? e.author.id;
      $(`/@${s}/post/${e.id}`);
    },
    [e.author.username, e.author.id, e.id]
  );

  return o("div", {
    className: Se.originalPost,
    onClick: n,
    children: [
      o("div", {
        className: Se.originalPostHeader,
        children: [
          o(bn, { size: 14 }),
          o(Ze, {
            src: e.author.avatar ?? "",
            alt: e.author.displayName,
            size: "xs",
          }),
          o(cn, {
            name: e.author.displayName,
            verified: e.author.isVerified,
            hasNuksta: e.author.hasNuksta,
            pin: e.author.pin,
            size: "xs",
          }),
          o("span", { className: Se.originalPostTime, children: t }),
        ],
      }),
      e.text && o("div", { className: Se.originalPostText, children: e.text }),
      e.attachments &&
        e.attachments.length > 0 &&
        o(Jf, { attachments: e.attachments }),
      o("div", {
        className: Se.originalPostStats,
        children: [
          o("span", {
            className: Se.originalPostStat,
            children: [o(Ln, { size: 16 }), vn(e.reactions?.total ?? 0)],
          }),
          o("span", {
            className: Se.originalPostStat,
            children: [o(Sr, { size: 16 }), vn(e.stats?.comments ?? 0)],
          }),
          o("span", {
            className: Se.originalPostStat,
            children: [o(bn, { size: 16 }), vn(e.stats?.reposts ?? 0)],
          }),
          o("span", {
            className: Se.originalPostStat,
            children: [o(ks, { size: 16 }), vn(e.stats?.views ?? 0)],
          }),
        ],
      }),
    ],
  });
}
const tm = "cZnuRugG";
const nm = "gXPlO0SF";
const rm = "yfGqJGgk";
const om = "a3a8DYnF";
const sm = "Zm7GdliE";
const im = "x-TM77c0";
const am = "vqhGsmVx";
const cm = "wXZfEkKN";
const lm = "C4SARhpg";
const um = "epV7SM-L";
const dm = "Bkxq4G-V";
const hm = "M1orzhg7";
const fm = "VQtopWsI";
const mm = "vI-SLgZ3";
const pm = "hWCpL6Hf";
const gm = "WAYqGGYB";
const vm = "OWLYzJZs";
const _m = "P15SrtYp";
const wm = "y-9i4poD";
const ym = "qTvjpE7N";
const Cm = "rKM-vAOv";

const we = {
  commentInput: tm,
  replyMode: nm,
  inputRow: rm,
  attachmentStrip: om,
  circleButton: sm,
  micButton: im,
  sendButton: am,
  submitting: cm,
  textareaContainer: lm,
  expanded: um,
  voiceMode: dm,
  inputWrapper: hm,
  commentCharCount: fm,
  error: mm,
  input: pm,
  replyHeader: gm,
  replyText: vm,
  replyName: _m,
  replyClose: wm,
  dragActive: ym,
  dragOverlay: Cm,
};

const Tm = "_2mmgs8Ne";
const Em = "WFxp3J8v";
const Rm = "abwLbpfW";
const Xn = { textInput: Tm, entering: Em, sendButton: Rm };
const Nm = 1000; /* 1e3 */
function Sm({
  text: e,
  spans: t,
  onChange: n,
  placeholder: r,
  onSubmit: s,
  isEntering: i,
  autoFocus: a,
  isSubmitting: c,
  sendDisabled: u,
  onImagePaste: l,
}) {
  const h = Nm - e.length;
  const d = h < 0;
  const f = [Xn.textInput, i ? Xn.entering : ""].filter(Boolean).join(" ");
  return o("div", {
    className: f,
    children: [
      o("div", {
        className: we.inputWrapper,
        children: [
          o($n, {
            value: e,
            spans: t,
            onChange: n,
            placeholder: r,
            autoFocus: a,
            className: we.input,
            minHeight: 24,
            maxHeight: 200,
            onSubmit: d || s,
            disableFormatting: true,
            onImagePaste: l,
          }),
          d &&
            o("span", {
              className: `${we.commentCharCount} ${we.error}`,
              children: h,
            }),
        ],
      }),
      o("button", {
        className: `${we.circleButton} ${we.sendButton} ${Xn.sendButton} ${
          c ? we.submitting : ""
        }`,
        onClick: s,
        disabled: c || u || u || d,
        children: c ? o(pt, { size: "xs" }) : o(gs, { size: 20 }),
      }),
    ],
  });
}
const Zt = 2;
const km = 2;
const _n = Zt + km;
const St = 24;
const bm = 80;
const No = "rgba(142, 142, 147, 0.6)";
const Im = "#FFFFFF";
function Pm({
  levels: e,
  slideOffset: t,
  audioRef: n,
  isRecording: r,
  hasRecording: s,
  isPlaying: i,
  onSeek: a,
  onPlay: c,
}) {
  const u = I(null);
  const l = I(null);
  const h = I(false);
  const d = I(0);
  const f = I(0);
  const m = I(0);
  const T = I(0);
  const g = I(null);
  const p = I(null);
  const _ = I(0);
  const [v, y] = A(0);
  const C = Math.max(1, Math.floor(v / _n));

  B(() => {
    m.current = t;

    if (t === 0) {
      f.current = 0;
    }
  }, [t]);

  B(() => {
    const l_current = l.current;
    if (!l_current) {
      return;
    }
    const U = new ResizeObserver((q) => {
      for (const ee of q) {
        const Q = ee.contentRect.width;

        if (Q > 0) {
          y(Q);
        }
      }
    });
    U.observe(l_current);
    const O = l_current.getBoundingClientRect();

    if (O.width > 0) {
      y(O.width);
    }

    return () => {
      U.disconnect();
    };
  }, []);

  B(() => {
    const u_current = u.current;
    if (!u_current || v === 0) {
      return;
    }
    const U = window.devicePixelRatio || 1;
    u_current.width = v * U;
    u_current.height = St * U;
    u_current.style.width = `${v}px`;
    u_current.style.height = `${St}px`;
  }, [v]);

  const w = S(
    (E) => {
      const u_current = u.current;
      if (!u_current || v === 0) {
        return;
      }
      const O = u_current.getContext("2d");
      if (!O) {
        return;
      }
      const q = window.devicePixelRatio || 1;
      O.clearRect(0, 0, u_current.width, u_current.height);
      O.save();
      O.scale(q, q);
      const ee = St / 2;
      const Q = St - 4;
      for (let ie = 0; ie < C; ie++) {
        let ae;
        if (e.length === 0) {
          ae = 0.05;
        } else if (e.length === 1) {
          ae = e[0];
        } else {
          const M = (ie / (C - 1)) * (e.length - 1);
          const x = Math.floor(M);
          const F = Math.min(x + 1, e.length - 1);
          const $ = M - x;
          ae = e[x] * (1 - $) + e[F] * $;
        }
        const X = Math.max(4, ae * Q);
        const J = ie * _n;
        const D = ee - X / 2;
        const W = ie < E;
        O.fillStyle = W ? Im : No;
        const G = Zt / 2;
        O.beginPath();
        O.roundRect(J, D, Zt, X, G);
        O.fill();
      }
      O.restore();
    },
    [e, v, C]
  );

  const b = S(
    (E) => {
      const u_current = u.current;
      if (!u_current || v === 0) {
        return;
      }
      const O = u_current.getContext("2d");
      if (!O) {
        return;
      }
      const q = window.devicePixelRatio || 1;
      const m_current = m.current;

      const { current } = f;

      if (current !== m_current) {
        const D = E - T.current;
        const W = (_n / bm) * D;

        if (current < m_current) {
          f.current = Math.min(m_current, current + W);
        } else {
          f.current = m_current;
        }
      }
      T.current = E;
      O.clearRect(0, 0, u_current.width, u_current.height);
      O.save();
      O.scale(q, q);
      O.translate(-current, 0);
      const ae = St / 2;
      const X = St - 4;
      const J = C + e.length;
      for (let D = 0; D < J; D++) {
        const W = D - C;
        const G = W >= 0 && W < e.length ? e[W] : 0.05;
        const M = Math.max(4, G * X);
        const x = D * _n;
        const F = ae - M / 2;
        O.fillStyle = No;
        const $ = Zt / 2;
        O.beginPath();
        O.roundRect(x, F, Zt, M, $);
        O.fill();
      }
      O.restore();

      if (f.current !== m.current || r) {
        g.current = requestAnimationFrame(b);
      }
    },
    [e, v, C, r]
  );

  B(() => {
    if (r) {
      T.current = performance.now();
      g.current = requestAnimationFrame(b);
    } else if (g.current) {
      cancelAnimationFrame(g.current);
      g.current = null;
    }

    return () => {
      if (g.current) {
        cancelAnimationFrame(g.current);
        g.current = null;
      }
    };
  }, [r, b]);

  B(() => {
    if (!i || r) {
      if (p.current) {
        cancelAnimationFrame(p.current);
        p.current = null;
      }

      return;
    }
    const E = () => {
      const n_current = n.current;
      if (
        !n_current ||
        n_current.paused ||
        n_current.paused ||
        n_current.ended
      ) {
        p.current = null;
        return;
      }
      const O = n_current.currentTime / n_current.duration;
      const q = Math.ceil(O * C);

      if (q !== _.current) {
        _.current = q;
        w(q);
      }

      p.current = requestAnimationFrame(E);
    };
    p.current = requestAnimationFrame(E);

    return () => {
      if (p.current) {
        cancelAnimationFrame(p.current);
        p.current = null;
      }
    };
  }, [i, r, n, C, w]);

  B(() => {
    if (!r && !i && s) {
      const n_current = n.current;
      if (n_current && n_current.duration > 0 && n_current.currentTime > 0) {
        const U = n_current.currentTime / n_current.duration;
        const O = Math.ceil(U * C);
        _.current = O;
        w(O);
      } else {
        _.current = 0;
        w(0);
      }
    }
  }, [r, i, s, w, n, C]);

  B(() => {
    if (!r && s && !i) {
      w(_.current);
    }
  }, [e, C, r, s, i, w]);

  const k = S((E) => {
    const l_current = l.current;
    if (!l_current) {
      return 0;
    }
    const O = l_current.getBoundingClientRect();
    const q = "touches" in E ? E.touches[0].clientX : E.clientX;
    return Math.max(0, Math.min(1, (q - O.left) / O.width));
  }, []);

  const R = S(
    (E) => {
      if (!(!s || r)) {
        E.preventDefault();

        if (!i) {
          c();
          return;
        }

        h.current = true;
        d.current = k(E);
      }
    },
    [s, r, i, k, c]
  );

  const N = S(
    (E) => {
      if (h.current) {
        d.current = k(E);
      }
    },
    [k]
  );

  const P = S(() => {
    if (h.current) {
      a(d.current);
      h.current = false;
    }
  }, [a]);

  B(() => {
    const E = (O) => N(O);

    const U = () => P();

    window.addEventListener("mousemove", E);
    window.addEventListener("mouseup", U);
    window.addEventListener("touchmove", E);
    window.addEventListener("touchend", U);

    return () => {
      window.removeEventListener("mousemove", E);
      window.removeEventListener("mouseup", U);
      window.removeEventListener("touchmove", E);
      window.removeEventListener("touchend", U);
    };
  }, [N, P]);

  return o("div", {
    ref: l,
    style: {
      width: "100%",
      height: `${St}px`,
      overflow: "hidden",
      cursor: s && !r ? "pointer" : "default",
    },
    onMouseDown: R,
    onTouchStart: R,
    children: o("canvas", { ref: u }),
  });
}
const Am = "-Ho1i5aD";
const xm = "tC8l4Awz";
const Om = "qgaHaLq2";
const Lm = "ABusj9On";
const Mm = "QN61mWs7";
const $m = "sb0Zcaza";
const Dm = "zYZ8RG9n";
const Um = "kV8tSOUW";
const Fm = "MazmNAnz";
const Bm = "IygqjuIv";
const Hm = "Danfku1z";

const De = {
  voiceInput: Am,
  circleButton: xm,
  playButton: Om,
  hasRecording: Lm,
  stopButton: Mm,
  recording: $m,
  sendButton: Dm,
  audioVisualizer: Um,
  waveformContainer: Fm,
  recordingTime: Bm,
  exiting: Hm,
};

function Vm({ onCancel: e, onSend: t, isExiting: n, onExitComplete: r }) {
  const [s, i] = A(false);

  const {
    isRecording: a,
    hasRecording: c,
    recordingTime: u,
    audioLevels: l,
    slideOffset: h,
    isPlaying: d,
    playbackProgress: f,
    duration: m,
    audioElementRef: T,
    startRecording: g,
    stopRecording: p,
    cancelRecording: _,
    playAudio: v,
    pauseAudio: y,
    seekTo: C,
    getAudioBlob: w,
  } = Ta();

  B(() => {
    g();
  }, []);

  B(() => {
    if (n && r) {
      const O = setTimeout(r, 300);
      return () => clearTimeout(O);
    }
  }, [n, r]);

  const b = (O) => {
    if (!isFinite(O) || isNaN(O)) {
      return "00:00";
    }
    const q = Math.floor(O / 60);
    const ee = Math.floor(O % 60);
    return `${q.toString().padStart(2, "0")}:${ee.toString().padStart(2, "0")}`;
  };

  const k = () => {
    if (c) {
      if (d) {
        y();
      } else {
        v();
      }
    }
  };

  const R = () => {
    if (a) {
      p();
    }
  };

  const N = S(
    (O) => {
      C(O);
    },
    [C]
  );

  const P = S(async () => {
    if (!(s || !t)) {
      i(true);
      try {
        let O = null;

        if (a) {
          O = await p();
        } else {
          O = w();
        }

        if (!O) {
          return;
        }

        await t(O);
        _();
        e();
      } catch (O) {
        console.error("Failed to send voice message:", O);
      } finally {
        i(false);
      }
    }
  }, [s, a, p, w, t, _, e]);

  const E = b(a ? u : d ? f * m : m);

  const U = [
    De.voiceInput,
    a ? De.recording : "",
    c ? De.hasRecording : "",
    n ? De.exiting : "",
  ]
    .filter(Boolean)
    .join(" ");

  return o("div", {
    className: U,
    children: [
      o("button", {
        className: `${De.circleButton} ${De.playButton}`,
        onClick: k,
        children: d ? o(Es, { size: 20 }) : o(Rs, { size: 20 }),
      }),
      o("div", {
        className: De.audioVisualizer,
        children: [
          o("div", {
            className: De.waveformContainer,
            children: o(Pm, {
              levels: l,
              slideOffset: h,
              audioRef: T,
              isRecording: a,
              hasRecording: c,
              isPlaying: d,
              onSeek: N,
              onPlay: v,
            }),
          }),
          o("span", { className: De.recordingTime, children: E }),
        ],
      }),
      o("button", {
        className: `${De.circleButton} ${De.stopButton}`,
        onClick: R,
        children: o(ja, { size: 20 }),
      }),
      o("button", {
        className: `${De.circleButton} ${De.sendButton}`,
        onClick: P,
        disabled: s || (a && u < 1),
        children: s ? o(pt, { size: "xs" }) : o(gs, { size: 20 }),
      }),
    ],
  });
}
function Us({
  onSubmit: e,
  onVoiceSend: t,
  placeholder: n = "Написать комментарий...",
  replyTo: r,
  onCancelReply: s,
  autoFocus: i,
}) {
  const { text: a, spans: c, handleChange: u, reset: l } = On();
  const [h, d] = A("text");
  const [f, m] = A(false);
  const [T, g] = A(false);
  const [p, _] = A(false);
  const [v, y] = A(false);
  const C = I(false);
  const w = I(null);
  const b = I(0);

  const {
    images: k,
    uploadingImages: R,
    isUploading: N,
    openFilePicker: P,
    removeImage: E,
    uploadFiles: U,
    clearAll: O,
    fileInputRef: q,
    handleFileChange: ee,
  } = Os(4);

  B(
    () => () => {
      if (w.current) {
        clearTimeout(w.current);
      }
    },
    []
  );
  const Q = k.length > 0 || R.length > 0;
  const ie = a.length > 0 || p || p || Q;
  const ae = h === "voice";
  const X = 1000; /* 1e3 */

  const J = async () => {
    const j = a.trim().length > 0;
    const Y = k.length > 0;
    if ((!j && !Y) || p || N || a.length > X) {
      return;
    }
    const ne = a.trim();
    const se = [...c];

    const he = k.map((re) => ({
      mediaId: re.mediaId,
    }));

    _(true);
    try {
      await e(ne, se, he.length > 0 ? he : undefined);
      l();
      O();
    } catch (re) {
      console.error("Failed to submit comment:", re);
    } finally {
      _(false);
    }
  };

  const D = () => {
    C.current = true;
    d("voice");
    g(false);
  };

  const W = () => {
    m(true);
  };

  const G = () => {
    m(false);
    d("text");
    g(true);

    if (w.current) {
      clearTimeout(w.current);
    }

    w.current = window.setTimeout(() => {
      w.current = null;
      g(false);
    }, 300);
  };

  const M = S((j) => {
    j.preventDefault();
    j.stopPropagation();
    b.current++;

    if (j.dataTransfer?.types.includes("Files")) {
      y(true);
    }
  }, []);

  const x = S((j) => {
    j.preventDefault();
    j.stopPropagation();
  }, []);

  const F = S((j) => {
    j.preventDefault();
    j.stopPropagation();
    b.current--;

    if (b.current === 0) {
      y(false);
    }
  }, []);

  const $ = S(
    (j) => {
      j.preventDefault();
      j.stopPropagation();
      b.current = 0;
      y(false);
      const Y = j.dataTransfer?.files;

      if (Y && Y.length > 0) {
        U(Array.from(Y));
      }
    },
    [U]
  );

  const z = [
    we.commentInput,
    ie ? we.expanded : "",
    ae ? we.voiceMode : "",
    r ? we.replyMode : "",
    v ? we.dragActive : "",
  ]
    .filter(Boolean)
    .join(" ");

  return o("div", {
    className: z,
    onDragEnter: M,
    onDragOver: x,
    onDragLeave: F,
    onDrop: $,
    children: [
      v &&
        o("div", {
          className: we.dragOverlay,
          children: [
            o("svg", {
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "1.5",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              children: [
                o("rect", {
                  x: "3",
                  y: "3",
                  width: "18",
                  height: "18",
                  rx: "2",
                  ry: "2",
                }),
                o("circle", { cx: "8.5", cy: "8.5", r: "1.5" }),
                o("polyline", { points: "21 15 16 10 5 21" }),
              ],
            }),
            o("span", { children: "Перетащите изображение" }),
          ],
        }),
      r &&
        o("div", {
          className: we.replyHeader,
          children: [
            o("span", {
              className: we.replyText,
              children: [
                "Ответ для ",
                o("span", { className: we.replyName, children: r.authorName }),
              ],
            }),
            o("button", {
              className: we.replyClose,
              onClick: s,
              children: o(rt, { size: 16 }),
            }),
          ],
        }),
      !ae &&
        !f &&
        Q &&
        o("div", {
          className: we.attachmentStrip,
          children: o(xs, { images: k, uploadingImages: R, onRemove: E }),
        }),
      o("div", {
        className: we.inputRow,
        children: [
          o("button", {
            className: we.circleButton,
            onClick: ae ? W : P,
            children: ae ? o(rt, { size: 20 }) : o(vs, { size: 20 }),
          }),
          o("div", {
            className: we.textareaContainer,
            children:
              ae || f
                ? o(Vm, {
                    onCancel: W,
                    onSend: t,
                    isExiting: f,
                    onExitComplete: G,
                  })
                : o(Sm, {
                    text: a,
                    spans: c,
                    onChange: u,
                    placeholder: n,
                    onSubmit: J,
                    isEntering: T,
                    autoFocus: i,
                    isSubmitting: p,
                    sendDisabled: N,
                    onImagePaste: U,
                  }),
          }),
          !ae &&
            !f &&
            o("button", {
              className: `${we.circleButton} ${we.micButton}`,
              onClick: D,
              children: o(Ba, { size: 20 }),
            }),
        ],
      }),
      o("input", {
        ref: q,
        type: "file",
        accept: cr,
        multiple: true,
        onChange: ee,
        style: { display: "none" },
      }),
    ],
  });
}

const Gn = ot((e) => ({
  activeAudioId: null,
  setActiveAudio: (t) => e({ activeAudioId: t }),
}));

const Wm = "_4REluXTH";
const jm = "csThJX40";
const zm = "_7tEz9WJs";
const qm = "yICArXOf";
const Ym = "-QGEO-Ir";
const Xm = "F2vpEy3t";
const Gm = "thwOd-Oi";
const Km = "cU3NuD-h";
const Zm = "koGcQrYR";
const Qm = "Ka6vy6TO";

const Ye = {
  voiceMessage: Wm,
  playButton: jm,
  content: zm,
  waveform: qm,
  dragging: Ym,
  bar: Xm,
  played: Gm,
  info: Km,
  time: Zm,
  duration: Qm,
};

const Jm = 45;
function ep(e) {
  let t = 0;
  for (let n = 0; n < e.length; n++) {
    const r = e.charCodeAt(n);
    t = (t << 5) - t + r;
    t = t & t;
  }
  return Math.abs(t);
}
function tp(e) {
  const t = [];
  let n = ep(e);
  for (let r = 0; r < Jm; r++) {
    n = (n * 9301 + 49297) % 233280;
    const s = 0.2 + (n / 233280) * 0.8;
    t.push(s);
  }
  return t;
}
function So(e) {
  if (!isFinite(e) || isNaN(e)) {
    return "0:00";
  }
  const t = Math.floor(e / 60);
  const n = Math.floor(e % 60);
  return `${t}:${n.toString().padStart(2, "0")}`;
}
function np({ src: e, duration: t = 0 }) {
  const n = Ce(() => e, [e]);

  const r = Ce(() => tp(e), [e]);

  const s = Gn((R) => R.activeAudioId);

  const i = Gn((R) => R.setActiveAudio);

  const [a, c] = A(true);
  const [u, l] = A(0);
  const [h, d] = A(t);
  const [f, m] = A(false);
  const T = I(null);
  const g = I(null);
  const p = I(null);
  const _ = s === n;

  B(() => {
    if (s !== n && T.current && !T.current.paused) {
      T.current.pause();
      p.current && (cancelAnimationFrame(p.current), (p.current = null));
    }
  }, [s, n]);

  B(() => {
    const R = new Audio(e);
    T.current = R;

    const N = () => {
      d(R.duration || t);
      c(false);
    };

    const P = () => {
      l(0);

      if (p.current) {
        cancelAnimationFrame(p.current);
        p.current = null;
      }

      i(null);
    };

    const E = () => {
      c(false);
    };

    R.addEventListener("loadedmetadata", N);
    R.addEventListener("ended", P);
    R.addEventListener("error", E);

    return () => {
      R.removeEventListener("loadedmetadata", N);
      R.removeEventListener("ended", P);
      R.removeEventListener("error", E);
      R.pause();
      T.current = null;

      if (p.current) {
        cancelAnimationFrame(p.current);
      }

      if (Gn.getState().activeAudioId === n) {
        i(null);
      }
    };
  }, [e, t, n, i]);

  const v = S(() => {
    if (T.current) {
      l(T.current.currentTime);
      p.current = requestAnimationFrame(v);
    }
  }, []);

  const y = S(() => {
    const T_current = T.current;

    if (T_current && !a) {
      if (_) {
        T_current.pause();
        p.current && (cancelAnimationFrame(p.current), (p.current = null));
        i(null);
      } else {
        i(n);
        T_current.play();
        v();
      }
    }
  }, [_, a, n, i, v]);

  const C = S(
    (R) => {
      if (!g.current || !h) {
        return 0;
      }
      const N = g.current.getBoundingClientRect();
      const R_clientX = R.clientX;
      return Math.max(0, Math.min(R_clientX - N.left, N.width)) / N.width;
    },
    [h]
  );

  const w = S(
    (R) => {
      const T_current = T.current;
      if (!T_current || !h || !h || f) {
        return;
      }
      const P = C(R);
      T_current.currentTime = P * h;
      l(T_current.currentTime);
    },
    [h, f, C]
  );

  const b = S(
    (R) => {
      const T_current = T.current;
      if (!T_current || !h) {
        return;
      }
      m(true);
      const P = C(R);
      T_current.currentTime = P * h;
      l(T_current.currentTime);
    },
    [h, C]
  );

  B(() => {
    if (!f) {
      return;
    }

    const R = (P) => {
      const T_current = T.current;
      if (!T_current || !h) {
        return;
      }
      const U = C(P);
      T_current.currentTime = U * h;
      l(T_current.currentTime);
    };

    const N = () => {
      m(false);
    };

    document.addEventListener("mousemove", R);
    document.addEventListener("mouseup", N);

    return () => {
      document.removeEventListener("mousemove", R);
      document.removeEventListener("mouseup", N);
    };
  }, [f, h, C]);
  const k = h > 0 ? u / h : 0;
  return o("div", {
    className: `${Ye.voiceMessage} ${_ ? Ye.playing : ""}`,
    children: [
      o("button", {
        className: Ye.playButton,
        onClick: y,
        disabled: a,
        children: a
          ? o(Cs, { size: 18 })
          : _
          ? o(Es, { size: 18 })
          : o(Rs, { size: 18 }),
      }),
      o("div", {
        className: Ye.content,
        children: [
          o("div", {
            ref: g,
            className: `${Ye.waveform} ${f ? Ye.dragging : ""}`,
            onClick: w,
            onMouseDown: b,
            children: r.map((R, N) => {
              const E = (N + 0.5) / r.length <= k;
              return o(
                "div",
                {
                  className: `${Ye.bar} ${E ? Ye.played : ""}`,
                  style: { height: `${Math.max(4, R * 24)}px` },
                },
                N
              );
            }),
          }),
          o("div", {
            className: Ye.info,
            children: [
              o("span", {
                className: Ye.time,
                children: So(_ || u > 0 ? u : h),
              }),
              (_ || u > 0) &&
                o("span", { className: Ye.duration, children: ["/ ", So(h)] }),
            ],
          }),
        ],
      }),
    ],
  });
}
const rp = "EMoEIZFv";
const op = "TCFYTRkG";
const sp = "-Jv0cl93";
const ip = "_8ZH4gvtt";
const ap = "VgMMM-FP";
const cp = "MHUIw-Bn";
const lp = "ugI7Vwfw";
const up = "eYiDjO7I";
const dp = "efgl9R1v";
const hp = "N5ciicq2";
const fp = "Y3Xvuphx";
const mp = "P1lAENLs";
const pp = "EafRTyEa";
const gp = "YgCVK2-C";
const vp = "E34stxAv";
const _p = "_5xeGurR-";
const wp = "_8CHHNoFp";
const yp = "qBk55euG";
const Cp = "NTrrYRK4";
const Tp = "Oy71u1HK";
const Ep = "Az3ELd41";
const Rp = "g9UiDqsQ";
const Np = "-tabj2ls";
const Sp = "LiWVk6u3";

const ue = {
  commentWrapper: rp,
  threadItem: op,
  avatarWrapper: sp,
  threadLine: ip,
  commentBody: ap,
  showMoreBtn: cp,
  avatarPlaceholder: lp,
  comment: up,
  small: dp,
  commentTime: hp,
  commentText: fp,
  commentActions: mp,
  commentContent: pp,
  avatarLink: gp,
  authorLink: vp,
  commentHeader: _p,
  moreButton: wp,
  commentHeaderLeft: yp,
  replyMention: Cp,
  commentMedia: Tp,
  reactionWrapper: Ep,
  commentAction: Rp,
  liked: Np,
  replyButton: Sp,
};

function kp({
  author: e,
  commentId: t,
  text: n,
  spans: r = [],
  attachments: s = [],
  createdAt: i,
  reactionsCount: a,
  isReacted: c,
  size: u = "sm",
  onLike: l,
  onReply: h,
  onReport: d,
  onEdit: f,
  onDelete: m,
  replyTo: T,
  hideAvatar: g = false,
  isWallOwner: p = false,
}) {
  n.slice(0, 20);
  const _ = ps(i);

  const v = Te((R) => R.profile?.id);

  const y = e.id === v;
  const C = y || p;
  const w = u === "xs";

  const b = Ce(() => {
    const R = [];

    if (y && f) {
      R.push({
        id: "edit",
        label: "Редактировать",
        icon: o(ws, { size: 16 }),
        onClick: () => f(t),
      });
    }

    if (C && m) {
      R.push({
        id: "delete",
        label: "Удалить",
        icon: o(Ss, { size: 16 }),
        danger: true,
        onClick: () => m(t),
      });
    }

    if (!y) {
      R.push({
        id: "report",
        label: "Пожаловаться",
        icon: o(ys, { size: 16 }),
        danger: true,
        onClick: () => d(t),
      });
    }

    return R;
  }, [y, C, t, f, m, d]);

  const k = `/@${e.username ?? e.id}`;
  return o("div", {
    className: `${ue.comment} ${w ? ue.small : ""}`,
    children: [
      !g &&
        o("a", {
          href: k,
          className: ue.avatarLink,
          children: o(Ze, { src: e.avatar, alt: e.displayName, size: u }),
        }),
      o("div", {
        className: ue.commentContent,
        children: [
          o("div", {
            className: ue.commentHeader,
            children: [
              o("div", {
                className: ue.commentHeaderLeft,
                children: [
                  o("a", {
                    href: k,
                    className: ue.authorLink,
                    children: o(cn, {
                      name: e.displayName,
                      verified: e.isVerified,
                      hasNuksta: e.hasNuksta,
                      pin: e.pin,
                      size: u,
                    }),
                  }),
                  o("span", { className: ue.commentTime, children: _ }),
                ],
              }),
              o($s, {
                trigger: o(Ts, { size: w ? 14 : 16 }),
                items: b,
                position: "bottom-right",
                className: ue.moreButton,
              }),
            ],
          }),
          (T || n) &&
            o("div", {
              className: ue.commentText,
              children: [
                T &&
                  o(Re, {
                    children: [
                      o("a", {
                        href: `/@${T.username}`,
                        className: ue.replyMention,
                        children: ["@", T.displayName],
                      }),
                      ", ",
                    ],
                  }),
                n && o(Ms, { text: n, spans: r }),
              ],
            }),
          Pn(s).length > 0 &&
            o("div", {
              className: ue.commentMedia,
              children: o(Ir, { media: Pn(s) }),
            }),
          s
            .filter((R) => R.type === "audio")
            .map((R) => o(np, { src: R.url, duration: R.duration }, R.id)),
          o("div", {
            className: ue.commentActions,
            children: [
              o("button", {
                className: ue.replyButton,
                onClick: h,
                children: "Ответить",
              }),
              o("div", {
                className: ue.reactionWrapper,
                children: o("button", {
                  className: `${ue.commentAction} ${c ? ue.liked : ""}`,
                  onClick: () => l(),
                  children: [
                    o(Ln, { size: 14, filled: c }),
                    o(Kt, { value: a }),
                  ],
                }),
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function Fs({
  comment: e,
  onLike: t,
  onReaction: n,
  onLikeReply: r,
  onReactionReply: s,
  replyingTo: i,
  onStartReply: a,
  onCancelReply: c,
  onSubmitReply: u,
  onVoiceSend: l,
  onLoadReplies: h,
  onReport: d,
  onEdit: f,
  onDelete: m,
  isLoadingReplies: T = false,
  flashingCommentId: g,
  isWallOwner: p = false,
}) {
  e.id;
  const _ = i?.commentId === e.id;

  const v = {
    id: e.author.id,
    username: e.author.username,
    avatar: e.author.avatar ?? "",
    displayName: e.author.displayName,
    isVerified: e.author.isVerified,
    pin: e.author.pin,
  };

  const y = e.previewReplies ?? [];
  const C = g === e.id;
  const [w] = A({});
  const [b] = A({});
  const k = S(async () => {}, [e.id]);
  const R = S(async (E) => {}, []);
  const N = e.stats.replies > y.length;

  const P = [
    { type: "parent", data: e, author: v },
    ...y.map((E) => ({
      type: "reply",
      data: E,

      author: {
        id: E.author.id,
        username: E.author.username,
        avatar: E.author.avatar ?? "",
        displayName: E.author.displayName,
        isVerified: E.author.isVerified,
        pin: E.author.pin,
      },
    })),
  ];

  return o("div", {
    className: `${ue.commentWrapper} ${C ? "flash-highlight" : ""}`,
    "data-comment-id": e.id,
    children: [
      P.map((E, U) => {
        const q = !(U === P.length - 1 && !_ && !N);
        const ee = g === E.data.id;
        return o(
          "div",
          {
            "data-comment-id": E.data.id,
            className: `${ue.threadItem} ${ee ? "flash-highlight" : ""}`,
            children: [
              o("div", {
                className: ue.avatarWrapper,
                children: [
                  o("a", {
                    href: `/@${E.author.username ?? E.author.id}`,
                    className: ue.avatarLink,
                    children: o(Ze, {
                      src: E.author.avatar,
                      alt: E.author.displayName,
                      size: "sm",
                    }),
                  }),
                  q && o("div", { className: ue.threadLine }),
                ],
              }),
              o("div", {
                className: ue.commentBody,
                children: o(kp, {
                  author: E.author,
                  commentId: E.data.id,
                  text: E.data.text,
                  spans: E.data.spans ?? [],
                  attachments: E.data.attachments ?? [],
                  replyTo: E.data.replyTo,
                  createdAt: E.data.createdAt,
                  reactionsCount: E.data.reactions.total,
                  isReacted: E.data.reactions.myReaction !== null,
                  selectedReaction: E.data.reactions.myReaction,
                  reactionCounts: E.type === "parent" ? w : b[E.data.id] ?? {},
                  size: "sm",
                  onLike: E.type === "parent" ? t : () => r(E.data.id),
                  onReaction:
                    E.type === "parent"
                      ? n
                        ? (Q) => n(e.id, Q)
                        : undefined
                      : s
                      ? (Q) => s(E.data.id, Q)
                      : undefined,
                  onReply: () =>
                    E.type === "parent"
                      ? a(
                          e.id,
                          e.author.username ?? e.author.id,
                          e.author.displayName,
                          e.author.id
                        )
                      : a(
                          e.id,
                          E.data.author.username ?? E.data.author.id,
                          E.data.author.displayName,
                          E.data.author.id,
                          E.data.id
                        ),
                  onReport: d,
                  onEdit: f,
                  onDelete: m,
                  onHoverReaction: E.type === "parent" ? k : () => R(E.data.id),
                  hideAvatar: true,
                  isWallOwner: p,
                }),
              }),
            ],
          },
          E.data.id
        );
      }),
      _ &&
        o("div", {
          className: ue.threadItem,
          children: [
            o("div", {
              className: ue.avatarWrapper,
              children: [
                o("div", { className: ue.avatarPlaceholder }),
                N && o("div", { className: ue.threadLine }),
              ],
            }),
            o("div", {
              className: ue.commentBody,
              children: o(Us, {
                placeholder: "Написать ответ...",
                replyTo: { id: i.commentId, authorName: i.displayName },
                onCancelReply: c,
                onSubmit: u,
                onVoiceSend: l,
                autoFocus: true,
              }),
            }),
          ],
        }),
      N &&
        !T &&
        o("button", {
          className: ue.showMoreBtn,
          onClick: () => h(e.id),
          children: ["Показать ещё ", e.stats.replies - y.length, " ответов"],
        }),
    ],
  });
}
function bp({
  itemCount: e,
  estimatedItemHeight: t,
  overscan: n = 5,
  getItemKey: r = (s) => s,
}) {
  const s = I(null);
  const [i, a] = A(0);
  const [c, u] = A(0);
  const l = I(new Map());
  const h = I(new Map());
  const d = I(0);

  if (d.current !== e) {
    d.current = e;
    h.current.clear();
  }

  const f = S(
    (w) => {
      const b = r(w);
      return l.current.get(b) ?? t;
    },
    [r, t]
  );

  const m = S(
    (w) => {
      if (w === 0) {
        return 0;
      }
      const b = h.current.get(w);
      if (b !== undefined) {
        return b;
      }
      let k = 0;
      let R = 0;
      for (let N = w - 1; N >= 0; N--) {
        const P = h.current.get(N);
        if (P !== undefined) {
          k = N;
          R = P;
          break;
        }
      }
      for (let N = k; N < w; N++) {
        R += f(N);
      }
      h.current.set(w, R);
      return R;
    },
    [f]
  );

  const T = Ce(() => (e === 0 ? 0 : m(e - 1) + f(e - 1)), [e, m, f]);

  const { startIndex: g, endIndex: p } = Ce(() => {
    if (e === 0 || c === 0) {
      return { startIndex: 0, endIndex: 0 };
    }
    let w = 0;
    let b = e - 1;

    while (w < b) {
      const P = Math.floor((w + b) / 2);
      const E = m(P);
      const U = f(P);

      if (E + U < i) {
        w = P + 1;
      } else {
        b = P;
      }
    }

    const k = Math.max(0, w - n);
    let R = w;
    let N = m(w) - i;

    while (R < e && N < c + t * n) {
      N += f(R);
      R++;
    }

    R = Math.min(e - 1, R + n);
    return { startIndex: k, endIndex: R };
  }, [e, i, c, m, f, n, t]);

  const _ = Ce(() => {
    if (e === 0) {
      return [];
    }
    const w = [];
    for (let b = g; b <= p; b++) {
      w.push({ index: b, key: r(b), start: m(b), size: f(b) });
    }
    return w;
  }, [g, p, r, m, f, e]);

  const v = S(
    (w, b) => {
      if (!w) {
        return;
      }
      const k = r(b);
      const R = w.getBoundingClientRect().height;
      if (R <= 0) {
        return;
      }
      const N = l.current.get(k);

      if (N === undefined || Math.abs(N - R) > 2) {
        l.current.set(k, R);
        h.current.clear();
      }
    },
    [r]
  );

  const y = S(() => {
    if (s.current) {
      a(s.current.scrollTop);
    }
  }, []);

  const C = S(
    (w) => {
      if (s.current) {
        s.current.removeEventListener("scroll", y);
      }

      s.current = w;

      if (w) {
        u(w.clientHeight);
        a(w.scrollTop);
        w.addEventListener("scroll", y, { passive: true });
      }
    },
    [y]
  );

  B(() => {
    if (!s.current) {
      return;
    }
    const w = new ResizeObserver((b) => {
      for (const k of b) {
        u(k.contentRect.height);
      }
    });
    w.observe(s.current);

    return () => w.disconnect();
  }, []);

  B(
    () => () => {
      if (s.current) {
        s.current.removeEventListener("scroll", y);
      }
    },
    [y]
  );

  return { containerRef: C, virtualItems: _, totalSize: T, measureElement: v };
}
const Ip = "OSYFbJTc";
const Pp = "BZs335wO";
const Ap = "uHfvgHkC";
const xp = "_0mjuADLO";
const Op = "-irX9LBI";
const Lp = "PkENmhoL";
const Mp = "Ipy3h0nq";
const $p = "_7EbOLXPm";
const Dp = "qUnBivge";
const Up = "XcWtT84I";
const Fp = "I-b0vKPW";
const Bp = "quGM4O7I";
const Hp = "EO684LVX";

const Ue = {
  comments: Ip,
  sortWrapper: Pp,
  sortSelect: Ap,
  commentsList: xp,
  commentItem: Op,
  empty: Lp,
  loading: Mp,
  loadMoreSentinel: $p,
  virtualContainer: Dp,
  virtualContent: Up,
  virtualItem: Fp,
  loadMoreSpinner: Bp,
  inputWrapper: Hp,
};

const Vp = 120;
function Wp({
  comments: e,
  hasMore: t,
  isLoadingMore: n,
  onLoadMore: r,
  replyingTo: s,
  flashingCommentId: i,
  loadingRepliesId: a,
  isWallOwner: c,
  onLikeComment: u,
  onReactionComment: l,
  onLikeReply: h,
  onReactionReply: d,
  onStartReply: f,
  onCancelReply: m,
  onSubmitReply: T,
  onVoiceSend: g,
  onLoadReplies: p,
  onReport: _,
  onEdit: v,
  onDelete: y,
}) {
  const C = I(false);

  const {
    containerRef: w,
    virtualItems: b,
    totalSize: k,
    measureElement: R,
  } = bp({
    itemCount: e.length,
    estimatedItemHeight: Vp,
    overscan: 3,
    getItemKey: (P) => e[P]?.id ?? P,
  });

  B(() => {
    if (!t || n || n || b.length === 0) {
      C.current = false;
      return;
    }
    const P = b[b.length - 1]?.index ?? 0;
    const E = e.length - 5;

    if (P >= E && !C.current) {
      C.current = true;
      r();
    }
  }, [b, e.length, t, n, r]);

  B(() => {
    if (!n) {
      C.current = false;
    }
  }, [n]);

  const N = S(
    (P, E) => {
      R(P, E);
    },
    [R]
  );
  return o("div", {
    ref: w,
    className: Ue.virtualContainer,
    "data-comments-scroll": true,
    children: [
      o("div", {
        className: Ue.virtualContent,
        style: { height: `${k}px` },
        children: b.map((P) => {
          const E = e[P.index];
          return E
            ? o(
                "div",
                {
                  ref: (U) => N(U, P.index),
                  className: Ue.virtualItem,
                  style: {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    transform: `translateY(${P.start}px)`,
                  },
                  children: o(Fs, {
                    comment: E,
                    onLike: () => u(E.id, E.reactions.myReaction),
                    onReaction: l,
                    onLikeReply: h,
                    onReactionReply: d,
                    replyingTo: s?.commentId === E.id ? s : null,
                    onStartReply: f,
                    onCancelReply: m,
                    onSubmitReply: T,
                    onVoiceSend: g,
                    onLoadReplies: p,
                    onReport: _,
                    onEdit: v,
                    onDelete: y,
                    isLoadingReplies: a === E.id,
                    flashingCommentId: i,
                    isWallOwner: c,
                  }),
                },
                P.key
              )
            : null;
        }),
      }),
      n &&
        o("div", {
          className: Ue.loadMoreSpinner,
          children: o(pt, { size: "sm" }),
        }),
    ],
  });
}
const jp = "DolcZKu1";
const zp = "_1lo2seB9";
const qp = "X0vaA15E";
const Yp = "JmzJKMT2";
const Xp = "p8fSWBtD";
const Gp = "TvBLZ6Xz";
const Kp = "ML3QZih-";
const Zp = "F8sHrsZA";
const Qp = "DicPhJTL";
const Jp = "L6r5VJk9";
const eg = "lHdqCdp-";
const tg = "rfKDp2t8";

const Be = {
  editCommentModal: jp,
  form: zp,
  header: qp,
  title: Yp,
  content: Xp,
  editor: Gp,
  actions: Kp,
  mediaButtons: Zp,
  mediaButton: Qp,
  submitGroup: Jp,
  charCount: eg,
  error: tg,
};

const ko = 2000; /* 2e3 */
function ng({ commentId: e, initialText: t, initialSpans: n = [] }) {
  const { closeModal: r } = Mn();

  const s = le((w) => w.editComment);

  const i = Te((w) => w.profile);

  const a = mt();

  const {
    text: c,
    spans: u,
    editorRef: l,
    handleChange: h,
    insertText: d,
  } = On(t, n);

  const [f, m] = A(false);
  const T = ko - c.length;
  const g = T < 0;
  const p = c !== t;
  const _ = JSON.stringify(u) !== JSON.stringify(n);
  const v = p || _;

  const y = S(
    (w) => {
      d(w.emoji);
    },
    [d]
  );

  const C = S(async () => {
    if (!(!c.trim() || g || g || !v || g || !v || f)) {
      m(true);
      try {
        await s(e, c, u);
        r();
      } catch (w) {
        console.error("Failed to update comment:", w);
      } finally {
        m(false);
      }
    }
  }, [c, u, g, v, f, s, e, r]);

  return o(yt, {
    frameless: true,
    onClose: r,
    className: Be.editCommentModal,
    children: o("div", {
      className: Be.form,
      children: [
        o("div", {
          className: Be.header,
          children: o("span", {
            className: Be.title,
            children: "Редактирование комментария",
          }),
        }),
        o("div", {
          className: Be.content,
          children: [
            o(Ze, { src: i?.avatar ?? "", size: "sm" }),
            o($n, {
              ref: l,
              value: c,
              spans: u,
              onChange: h,
              placeholder: "Комментарий...",
              maxLength: ko,
              autoFocus: true,
              className: Be.editor,
              minHeight: 40,
              maxHeight: 300,
              disableFormatting: true,
            }),
          ],
        }),
        o("div", {
          className: Be.actions,
          children: [
            o("div", {
              className: Be.mediaButtons,
              children:
                !a &&
                o(br, { onEmojiSelect: y, buttonClassName: Be.mediaButton }),
            }),
            o("div", {
              className: Be.submitGroup,
              children: [
                g &&
                  o("span", {
                    className: `${Be.charCount} ${Be.error}`,
                    children: T,
                  }),
                o(Le, {
                  size: "md",
                  variant: "ghost",
                  onClick: () => r(),
                  children: "Отмена",
                }),
                o(Le, {
                  size: "md",
                  disabled: !c.trim() || g || g || !v || g || !v || f,
                  onClick: C,
                  children: f ? "Сохранение..." : "Сохранить",
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
function rg({
  comments: e,
  isLoading: t,
  isLoadingMore: n,
  hasMore: r,
  sort: s,
  onSortChange: i,
  onLikeComment: a,
  onReactionComment: c,
  onAddComment: u,
  onVoiceSend: l,
  onLoadMore: h,
  isWallOwner: d = false,
  variant: f = "modal",
  hideInput: m = false,
}) {
  e.length;
  const g = mt() && f === "modal";
  const [p, _] = A(null);
  const [v, y] = A(null);
  const [C, w] = A(null);
  const [b, k] = A(null);
  const R = I(null);
  const { openModal: N } = Mn();

  const P = le((M) => M.highlightedCommentId);

  const E = le((M) => M.clearHighlightedComment);

  const U = le((M) => M.loadReplies);

  const O = le((M) => M.deleteComment);

  const q = le((M) => M.toggleCommentReaction);

  B(() => {
    if (!r || n) {
      return;
    }

    const M = new IntersectionObserver(
      (F) => {
        if (F[0].isIntersecting) {
          h();
        }
      },
      { rootMargin: "200px" }
    );

    const R_current = R.current;

    if (R_current) {
      M.observe(R_current);
    }

    return () => {
      if (R_current) {
        M.unobserve(R_current);
      }
    };
  }, [r, n, h]);

  B(() => {
    if (!P) {
      return;
    }
    const M =
      document.querySelector("[data-comments-scroll]") ||
      document.querySelector("[data-comments-modal]");
    if (M) {
      M.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const F = document.querySelector("[data-comments-section]");

      if (F) {
        F.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
    const x = window.setTimeout(() => {
      y(P);
      E();
      const F = window.setTimeout(() => {
        y(null);
      }, 600);
      return () => clearTimeout(F);
    }, 300);
    return () => clearTimeout(x);
  }, [P, E]);

  const ee = async (M, x, F) => {
    if (p) {
      await u(
        M,
        x,
        p.commentId,
        p.userId,
        { id: p.userId, username: p.username, displayName: p.displayName },
        F
      );

      _(null);
    }
  };

  const Q = (M, x, F, $, z) => {
    _({ commentId: M, username: x, displayName: F, userId: $, replyId: z });
  };

  const ie = () => {
    _(null);
  };

  const ae = S(
    (M) => {
      for (const x of e) {
        const F = x.previewReplies?.find(($) => $.id === M);
        if (F) {
          q(M, (F.reactions.myReaction === "love", "love"));
          return;
        }
      }
    },
    [e, q]
  );

  const X = S(
    (M, x) => {
      q(M, x);
    },
    [q]
  );

  const J = S(
    async (M) => {
      w(M);
      try {
        await U(M);
      } finally {
        w(null);
      }
    },
    [U]
  );

  const D = S((M) => {
    k(M);
  }, []);

  const W = S(
    (M) => {
      let x = "";
      let F = [];
      for (const $ of e) {
        if ($.id === M) {
          x = $.text;
          F = $.spans ?? [];
          break;
        }
        const z = $.previewReplies?.find((j) => j.id === M);
        if (z) {
          x = z.text;
          F = z.spans ?? [];
          break;
        }
      }
      N(o(ng, { commentId: M, initialText: x, initialSpans: F }));
    },
    [e, N]
  );

  const G = S(
    (M) => {
      if (confirm("Вы уверены, что хотите удалить этот комментарий?")) {
        O(M);
      }
    },
    [O]
  );

  return o("div", {
    className: Ue.comments,
    children: [
      o("div", {
        className: Ue.sortWrapper,
        children: o("select", {
          value: s,
          onChange: (M) => i(M.target.value),
          className: Ue.sortSelect,
          children: [
            o("option", { value: "new", children: "Новые" }),
            o("option", { value: "old", children: "Старые" }),
            o("option", { value: "popular", children: "Популярные" }),
          ],
        }),
      }),
      t
        ? o("div", { className: Ue.loading, children: o(pt, {}) })
        : e.length === 0
        ? o("div", { className: Ue.empty, children: "Нет комментариев" })
        : g
        ? o(Wp, {
            comments: e,
            hasMore: r,
            isLoadingMore: n,
            onLoadMore: h,
            replyingTo: p,
            flashingCommentId: v,
            loadingRepliesId: C,
            isWallOwner: d,
            onLikeComment: a,
            onReactionComment: c,
            onLikeReply: ae,
            onReactionReply: X,
            onStartReply: Q,
            onCancelReply: ie,
            onSubmitReply: ee,
            onVoiceSend: l,
            onLoadReplies: J,
            onReport: D,
            onEdit: W,
            onDelete: G,
          })
        : o("div", {
            className: Ue.commentsList,
            children: [
              e.map((M) =>
                o(
                  "div",
                  {
                    className: Ue.commentItem,
                    children: o(Fs, {
                      comment: M,
                      onLike: () => a(M.id, M.reactions.myReaction),
                      onReaction: c,
                      onLikeReply: ae,
                      onReactionReply: X,
                      replyingTo: p?.commentId === M.id ? p : null,
                      onStartReply: Q,
                      onCancelReply: ie,
                      onSubmitReply: ee,
                      onVoiceSend: l,
                      onLoadReplies: J,
                      onReport: D,
                      onEdit: W,
                      onDelete: G,
                      isLoadingReplies: C === M.id,
                      flashingCommentId: v,
                      isWallOwner: d,
                    }),
                  },
                  M.id
                )
              ),
              r &&
                o("div", {
                  ref: R,
                  className: Ue.loadMoreSentinel,
                  children: n && o(pt, { size: "sm" }),
                }),
            ],
          }),
      !m &&
        o("div", {
          className: Ue.inputWrapper,
          children: o(Us, {
            onSubmit: (M, x, F) => u(M, x, undefined, undefined, undefined, F),
            onVoiceSend: l,
          }),
        }),
      b &&
        o(Ls, { targetType: "comment", targetId: b, onClose: () => k(null) }),
    ],
  });
}
function og(e) {
  return {
    id: e.id,
    username: e.username ?? "",
    displayName: e.displayName,
    avatar: e.avatar ?? "",
    isVerified: e.isVerified,
    hasNuksta: e.hasNuksta ?? false,
    pin: e.pin ?? null,
  };
}
function Pn(e) {
  return e
    .filter(
      (t) =>
        t.type === "image" ||
        t.type === "video" ||
        (t.type === "media" && "media" in t)
    )
    .map((t) => (t.type === "media" && "media" in t ? t.media : t));
}
function sg(e) {
  return e.find((t) => t.type === "poll");
}
const ig = 300;
const ag = 500;

const cg = es(
  ({
    post: t,
    variant: n = "feed",
    className: r,
    isOnOwnProfile: s = false,
    isPinned: i = false,
    isHighlighted: a = false,
    onEdit: c,
    onPin: u,
    onDelete: l,
  }) => {
    const h = n === "feed";
    const d = mt();
    const { openModal: f, closeModal: m } = Mn();

    const T = le((L) => L.deletePost);

    const g = le((L) => L.updatePostReaction);

    const p = le((L) => L.updatePollVote);

    const _ = le((L) => L.updatePollData);

    const v = le((L) => L.setCurrentPost);

    const y = le((L) => L.posts.find((K) => K.id === t.id));

    const C = Te((L) => L.profile);

    const w = ht((L) =>
      h && C?.id !== t.author.id ? L.statuses[t.author.id] : undefined
    );

    const b = S(async () => {
      const L = t.author.id;
      ht.getState().setStatus(L, true);
      try {
        await ur.followUser(L);
      } catch {
        ht.getState().setStatus(L, false);
      }
    }, [t.author.id]);

    const k = S(async () => {
      const L = t.author.id;
      ht.getState().setStatus(L, false);
      try {
        await ur.unfollowUser(L);
      } catch {
        ht.getState().setStatus(L, true);
      }
    }, [t.author.id]);

    const R = S(() => {
      if (w !== undefined) {
        if (w) {
          f(
            o(zd, {
              displayName: t.author.displayName,
              onConfirm: k,
              onClose: m,
            })
          );
        } else {
          b();
        }
      }
    }, [w, t.author.displayName, b, k, f, m]);

    const N = I(null);
    const P = I(null);
    const E = I(null);
    const [U, O] = A(ig);
    const [q, ee] = A(0);
    const Q = q > U;
    B(
      () => () => {
        if (E.current) {
          cancelAnimationFrame(E.current);
          E.current = null;
        }
      },
      []
    );

    const ie = S(
      (L) => {
        if (L && h) {
          E.current && cancelAnimationFrame(E.current);

          E.current = requestAnimationFrame(() => {
            E.current = null;
            ee(L.scrollHeight);
          });
        }

        if (P) {
          P.current = L;
        }
      },
      [h]
    );

    const ae = S((L) => {
      L.stopPropagation();

      O((K) => K + ag);
    }, []);

    Sa(t.id, N);
    const X = C?.id === t.author.id;
    const J = t.reactions.myReaction !== null;
    const D = t.reactions.total;

    const W = S(async () => {
      const L = t.reactions.myReaction !== null;
      const K = L ? -1 : 1;
      g(t.id, L || "love", K);
      try {
        if (L) {
          await Oe.unlikePost(t.id);
        } else {
          await Oe.likePost(t.id);
        }
      } catch (fe) {
        g(t.id, L ? "love" : null, -K);
        console.error("Failed to toggle like:", fe);
      }
    }, [t.id, t.reactions.myReaction, g]);

    const G = I(null);
    const M = I(0);

    const x = S((L) => {
      G.current = L.target;
    }, []);

    const F = S(() => {
      if (!J) {
        W();
      }
    }, [J, W]);

    const $ = S(() => {
      v(y ?? t);
      const K = t.author.username ?? t.author.id;
      $(`/@${K}/post/${t.id}`);
    }, [t, y, v]);

    const z = S(
      (L) => {
        const L_target = L.target;
        if (
          L_target.closest("button") ||
          L_target.closest("a") ||
          L_target.closest("a") ||
          L_target.closest("video") ||
          L_target.closest("a") ||
          L_target.closest("video") ||
          L_target.closest("img")
        ) {
          return;
        }
        if (d) {
          const qe = Date.now();
          if (qe - M.current < 300) {
            M.current = 0;
            F();
            return;
          }
          M.current = qe;
          return;
        }
        if (G.current !== L_target) {
          G.current = null;
          return;
        }
        G.current = null;
        const fe = window.getSelection();

        if (!fe || fe.toString().length <= 0) {
          $();
        }
      },
      [d, F, $]
    );

    const j = S(
      (L) => {
        const K = t.author.username ?? t.author.id;
        const fe = `${window.location.origin}/@${K}/post/${L}`;
        navigator.clipboard.writeText(fe);
        dt.success("Ссылка скопирована");
      },
      [t.author.username, t.author.id]
    );

    const Y = S(
      (L) => {
        f(o(Ls, { targetType: "post", targetId: L, onClose: m }));
      },
      [f, m]
    );

    const ne = S(
      (L) => {
        f(
          o(Od, {
            postId: t.id,
            initialText: t.text ?? "",
            initialSpans: t.spans ?? [],
          })
        );
      },
      [f, t.id, t.text, t.spans]
    );

    const se = S(
      async (L) => {
        if (confirm("Вы уверены, что хотите удалить этот пост?")) {
          try {
            await T(L);
            l?.(L);
          } catch (K) {
            console.error("Failed to delete post:", K);
          }
        }
      },
      [T, l]
    );

    const he = S(() => {
      if (d) {
        f(o(Bd, { postId: t.id, onClose: m }));
      } else {
        const L = t.author.username ?? t.author.id;
        $(`/@${L}/post/${t.id}`);
      }
    }, [t.author.username, t.author.id, t.id, d, f, m]);

    const re = S(() => {
      if (!X) {
        f(o(Td, { post: t, onClose: m }));
      }
    }, [f, m, t, X]);

    const je = Ce(() => og(t.author), [t.author]);

    const ze = Ce(() => Pn(t.attachments), [t.attachments]);

    const Ee = Ce(() => sg(t.attachments), [t.attachments]);

    const st = S(
      async (L) => {
        const K = Ee?.myVote ?? null;
        p(t.id, L, K);
        try {
          const fe = await Oe.votePoll(t.id, [L]);
          if (fe) {
            _(t.id, fe);
            return fe;
          }
        } catch (fe) {
          console.error("[Poll] Failed to vote:", fe);

          if (K) {
            p(t.id, K, L);
          }
        }
        return null;
      },
      [t.id, Ee?.myVote, p, _]
    );

    const ge = S(
      async (L) => {
        try {
          const K = await Oe.votePoll(t.id, L);
          if (K) {
            _(t.id, K);
            return K;
          }
        } catch (K) {
          console.error("[Poll] Failed to vote multiple:", K);
        }
        return null;
      },
      [t.id, _]
    );

    const Z = o("div", {
      className: `${Se.postInner} ${h ? Se.isFeed : ""} ${r || ""}`,
      children: [
        h &&
          o("a", {
            href: `/@${t.author.username ?? t.author.id}`,
            children: o(Ze, {
              src: t.author.avatar ?? "",
              alt: t.author.displayName,
              size: "sm",
              followBadge: w,
              onFollowBadgeClick: R,
            }),
          }),
        o("div", {
          className: Se.postContent,
          children: [
            o(jh, {
              author: je,
              createdAt: t.createdAt,
              editedAt: t.editedAt,
              postId: t.id,
              showAvatar: !h,
              isOnOwnProfile: s,
              isPinned: i,
              onReport: Y,
              onEdit: c ?? ne,
              onDelete: se,
              onPin: u,
              onCopyLink: j,
            }),
            o("div", {
              className: Se.postBody,
              children: [
                t.text &&
                  o("div", {
                    className: Se.textWrapper,
                    children: [
                      o("div", {
                        ref: ie,
                        className: `${Se.text} ${Q ? Se.collapsed : ""}`,
                        style: h && Q ? { maxHeight: `${U}px` } : undefined,
                        children: o(Ms, {
                          text: t.text,
                          spans: t.spans ?? [],
                        }),
                      }),
                      h &&
                        Q &&
                        o("button", {
                          type: "button",
                          className: Se.expandButton,
                          onClick: ae,
                          children: "Читать далее",
                        }),
                    ],
                  }),
                ze.length > 0 && o(Ir, { media: ze, isFeed: h }),
                Ee &&
                  o(Sh, {
                    title: Ee.question,
                    options: Ee.options.map((L) => ({
                      id: L.id,
                      text: L.text,
                      votes: L.votes ?? 0,
                    })),
                    totalVotes: Ee.totalVotes ?? 0,
                    voted:
                      (Ee.myVotes ?? []).length > 0 ||
                      (Ee.myVote !== undefined && Ee.myVote !== null),
                    selectedOptionId: Ee.myVote,
                    selectedOptionIds: Ee.myVotes ?? [],
                    multipleChoice: Ee.multipleChoice ?? false,
                    onVote: st,
                    onVoteMultiple: ge,
                    disabled: Ee.id.startsWith("temp-"),
                  }),
                t.originalPost && o(em, { originalPost: t.originalPost }),
                o(Mf, {
                  liked: J,
                  reposted: false,
                  likesCount: D,
                  repostsCount: t.stats.reposts,
                  commentsCount: t.stats.comments,
                  viewsCount: t.stats.views,
                  dominantEmoji: t.dominantEmoji,
                  onLike: W,
                  onRepost: re,
                  onComment: he,
                  disableRepost: X,
                }),
              ],
            }),
          ],
        }),
      ],
    });

    return h
      ? o("article", {
          ref: N,
          className: `${Se.post} ${a ? "flash-highlight" : ""}`,
          onMouseDown: x,
          onClick: z,
          children: Z,
        })
      : o("div", { ref: N, children: Z });
  },
  (e, t) =>
    e.post.id === t.post.id &&
    e.post.text === t.post.text &&
    e.post.reactions.total === t.post.reactions.total &&
    e.post.reactions.myReaction === t.post.reactions.myReaction &&
    e.post.stats.comments === t.post.stats.comments &&
    e.post.stats.reposts === t.post.stats.reposts &&
    e.post.attachments === t.post.attachments &&
    e.variant === t.variant &&
    e.isOnOwnProfile === t.isOnOwnProfile &&
    e.isPinned === t.isPinned &&
    e.isHighlighted === t.isHighlighted
);

const lg = "g6-1VZON";
const ug = "lynW5Wa4";
const dg = "T0fnHo-a";
const hg = "rjatUzSP";
const fg = "QJXel6jH";
const mg = "M0L3TUQK";
const pg = "uaNtVNYe";
const gg = "h2cCDI2R";
const vg = "I-2aZIQb";
const _g = "OiCpxOxo";
const wg = "_68znS2mA";

const Ve = {
  container: lg,
  clearAllButton: ug,
  toastList: dg,
  toast: hg,
  toastLeft: fg,
  toastData: mg,
  title: pg,
  message: gg,
  dragging: vg,
  closeButton: _g,
  belowTabs: wg,
};

const yg = "InmPF5d0";
const Cg = "-yE9w2BE";
const Tg = "-gCyC6KA";
const Eg = "YQDdKE40";
const wn = { badge: yg, red: Cg, green: Tg, blue: Eg };
function Rg({ type: e }) {
  const t =
    e === "like"
      ? wn.red
      : ["wall_post", "reply", "repost"].includes(e)
      ? wn.green
      : wn.blue;
  return o("div", {
    className: `${wn.badge} ${t}`,
    children: [
      e === "follow" && o(Ns, { size: 12 }),
      ["wall_post", "reply"].includes(e) && o(Sr, { size: 12, filled: true }),
      e === "like" && o(Ln, { size: 12, filled: true }),
      e === "repost" && o(bn, { size: 12 }),
    ],
  });
}
const Ng = Bt(null);
function Sg({ children: e }) {
  const [t, n] = A([]);

  const r = S((c) => {
    const u = `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
    n((l) => [
      ...l,
      {
        id: u,
        message: c.message,
        notificationType: c.notificationType || "follow",
        actorName: c.actorName,
        actorUsername: c.actorUsername,
        actorAvatar: c.actorAvatar,
        clickUrl: c.clickUrl,
        apiType: c.apiType,
        entityId: c.entityId,
        parentEntityId: c.parentEntityId,
      },
    ]);
  }, []);

  const s = S((c) => {
    n((u) => u.filter((l) => l.id !== c));
  }, []);

  const i = S(() => {
    n([]);
  }, []);

  const a = fa();

  B(() => {
    if (a) {
      const c = Ig(a.type);

      r({
        message: a.message,
        notificationType: c,
        actorName: a.actorName,
        actorUsername: a.actorUsername,
        actorAvatar: a.actorAvatar,
        clickUrl: a.clickUrl,
        apiType: a.type,
        entityId: a.entityId,
        parentEntityId: a.parentEntityId,
      });

      Nr.setState({ lastSseToast: null });
    }
  }, [a, r]);

  return o(Ng.Provider, {
    value: { toasts: t, addToast: r, removeToast: s, clearAll: i },
    children: [e, o(kg, { toasts: t, onRemove: s, onClearAll: i })],
  });
}
function kg({ toasts: e, onRemove: t, onClearAll: n }) {
  const [r, s] = A(false);

  const i =
    typeof window !== "undefined" &&
    (window.location.pathname === "/" || window.location.pathname === "");

  if (e.length === 0) {
    return null;
  }
  const a = e.slice(-4);

  const c = () => {
    s(true);

    setTimeout(() => {
      n();
      s(false);
    }, 300);
  };

  return o("div", {
    className: `${Ve.container} ${i ? Ve.belowTabs : ""}`,
    children: [
      o("div", {
        className: `${Ve.toastList} ${r ? Ve.clearing : ""}`,
        children: a.map((u, l) =>
          o(
            Ag,
            {
              toast: u,
              onRemove: t,
              clearingDelay: r ? l * 50 : 0,
              isClearing: r,
            },
            u.id
          )
        ),
      }),
      e.length > 1 &&
        o(Le, {
          className: Ve.clearAllButton,
          onClick: c,
          children: "Скрыть все",
        }),
    ],
  });
}
const bg = 80;
function Ig(e) {
  return (
    {
      follow: "follow",
      follow_request: "follow",
      follow_accepted: "follow",
      post_reaction: "like",
      post_comment: "reply",
      post_repost: "repost",
      comment_reaction: "like",
      comment_reply: "reply",
      post_mention: "reply",
      comment_mention: "reply",
      wall_post: "reply",
    }[e] || "follow"
  );
}
function Pg(e) {
  const {
    apiType: t,
    entityId: n,
    parentEntityId: r,
    actorUsername: s,
    clickUrl: i,
  } = e;

  const a = ["post_reaction", "post_repost", "post_mention", "wall_post"];

  const c = [
    "post_comment",
    "comment_reaction",
    "comment_reply",
    "comment_mention",
  ];

  if (t && n && s) {
    if (a.includes(t)) {
      return `/@${s}/post/${n}`;
    }
    if (c.includes(t)) {
      return r ? `/@${s}/post/${r}?comment=${n}` : `/@${s}/post/${n}`;
    }
  }
  return t && ["follow", "follow_request", "follow_accepted"].includes(t) && s
    ? `/@${s}`
    : i || "/notifications";
}
function Ag({
  toast: e,
  onRemove: t,
  clearingDelay: n = 0,
  isClearing: r = false,
}) {
  const s = I(null);
  const [i, a] = A(0);
  const [c, u] = A(false);
  const [l, h] = A(false);
  const d = I(0);
  const f = I(false);

  const m = (w) => {
    d.current = w.clientX;
    f.current = false;
    u(true);
  };

  const T = S(
    (w) => {
      if (!c) {
        return;
      }
      const b = w.clientX - d.current;

      if (Math.abs(b) > 5) {
        f.current = true;
      }

      a(b);
    },
    [c]
  );

  const g = S(() => {
    if (c) {
      u(false);

      if (Math.abs(i) > bg) {
        h(true);
        a(i > 0 ? 400 : -400);

        setTimeout(() => t(e.id), 200);
      } else {
        a(0);

        if (!f.current) {
          const w = Pg(e);

          if (w) {
            $(w);
            t(e.id);
          }
        }
      }
    }
  }, [c, i, t, e]);

  B(() => {
    if (c) {
      document.addEventListener("mousemove", T);
      document.addEventListener("mouseup", g);

      return () => {
        document.removeEventListener("mousemove", T);
        document.removeEventListener("mouseup", g);
      };
    }
  }, [c, T, g]);

  const p = (w) => {
    d.current = w.touches[0].clientX;
    u(true);
  };

  const _ = (w) => {
    if (!c) {
      return;
    }
    const b = w.touches[0].clientX - d.current;
    a(b);
  };

  const v = () => {
    g();
  };

  const y = l || r ? 0 : Math.max(0, 1 - Math.abs(i) / 200);
  const C = r ? 400 : i;
  return o("div", {
    ref: s,
    className: `${Ve.toast} ${c ? Ve.dragging : ""}`,
    style: {
      transform: `translateX(${C}px)`,
      opacity: y,
      transition: c
        ? "none"
        : `transform 0.3s ease ${n}ms, opacity 0.3s ease ${n}ms`,
    },
    onMouseDown: m,
    onTouchStart: p,
    onTouchMove: _,
    onTouchEnd: v,
    children: [
      o("div", {
        className: Ve.toastLeft,
        children: [
          o(Ze, {
            src: e.actorAvatar || "",
            badge: o(Rg, { type: e.notificationType }),
          }),
          o("div", {
            className: Ve.toastData,
            children: [
              e.actorName &&
                o("div", {
                  className: Ve.title,
                  children: o(cn, { name: e.actorName }),
                }),
              o("p", { className: Ve.message, children: e.message }),
            ],
          }),
        ],
      }),
      o("button", {
        className: Ve.closeButton,
        onClick: (w) => {
          w.stopPropagation();
          t(e.id);
        },
        onMouseDown: (w) => w.stopPropagation(),
        onTouchStart: (w) => w.stopPropagation(),
        children: o(rt, { size: 16 }),
      }),
    ],
  });
}
const xg = "Ud6qvRRd";
const Og = "kzTK4YgB";
const Lg = "a7Cxtsok";
const Mg = "D1RDF-pF";
const $g = "wPhOb3DB";
const Dg = "rrrryD13";
const Ug = "pO3FId5P";
const Fg = "Y-gzFyZu";
const Bg = "Bnd7yPWS";
const Hg = "vVObi6FX";
const Vg = "erZ4kzKX";
const Wg = "nyzroaD5";

const Pt = {
  container: xg,
  toast: Og,
  slideUp: Lg,
  leaving: Mg,
  fadeOut: $g,
  info: Dg,
  icon: Ug,
  message: Fg,
  closeButton: Bg,
  success: Hg,
  warning: Vg,
  error: Wg,
};

const jg = { success: Ma, error: Ia, warning: Da, info: Pa };
function zg({ id: e, type: t, message: n, onRemove: r }) {
  const [s, i] = A(false);
  const jg_t = jg[t];

  const c = S(() => {
    i(true);

    setTimeout(() => {
      r(e);
    }, 300);
  }, [e, r]);

  return o("div", {
    className: `${Pt.toast} ${Pt[t]} ${s ? Pt.leaving : ""}`,
    children: [
      o("span", { className: Pt.icon, children: o(jg_t, { size: 20 }) }),
      o("span", { className: Pt.message, children: n }),
      o("button", {
        className: Pt.closeButton,
        onClick: c,
        children: o(rt, { size: 14 }),
      }),
    ],
  });
}
function qg() {
  const e = Dt((n) => n.toasts);

  const t = Dt((n) => n.removeToast);

  return (
    e.length === 0 ||
    o("div", {
      className: Pt.container,
      children: e.map((n) =>
        o(zg, { id: n.id, type: n.type, message: n.message, onRemove: t }, n.id)
      ),
    })
  );
}
const Yg = "bDtnMOtP";
const Xg = "NCty1Mw6";
const Gg = "DPhGAlZS";
const Kg = "Ea-iW9dx";
const yn = { tabs: Yg, indicator: Xg, button: Gg, active: Kg };
function Zg({
  tabs: e,
  defaultTab: t = 0,
  activeIndex: n,
  onChange: r,
  className: s = "",
}) {
  const [i, a] = A(t);
  const c = n !== undefined ? n : i;
  const [u, l] = A({});
  const h = I([]);
  const d = I(null);

  const f = S(() => {
    const p = h.current[c];
    if (p) {
      const p_parentElement = p.parentElement;
      const v = p_parentElement
        ? parseFloat(getComputedStyle(p_parentElement).paddingLeft)
        : 0;
      l({
        width: p.offsetWidth,
        transform: `translateX(${p.offsetLeft - v}px)`,
      });
    }
  }, [c]);

  B(() => {
    f();
  }, [f]);

  B(() => {
    const d_current = d.current;
    if (!d_current) {
      return;
    }
    const _ = new ResizeObserver(() => {
      f();
    });
    _.observe(d_current);

    return () => {
      _.disconnect();
    };
  }, [f]);

  const m = (p) => {
    if (n === undefined) {
      a(p);
    }

    r?.(p, e[p]);
  };

  const T = (p) => (typeof p == "string" ? p : p.label);

  const g = (p, _) => (typeof p == "string" ? `${_}` : p.id);

  return o("div", {
    ref: d,
    className: `${yn.tabs} ${s}`,
    children: [
      o("div", { className: yn.indicator, style: u }),
      e.map((p, _) =>
        o(
          "button",
          {
            ref: (v) => {
              h.current[_] = v;
            },
            onClick: () => m(_),
            className: `${yn.button} ${c === _ ? yn.active : ""}`,
            children: T(p),
          },
          g(p, _)
        )
      ),
    ],
  });
}
function Qg(e) {
  const t = S(() => {
    const s = window.innerWidth * 0.9;
    const i = window.innerHeight * 0.9;
    return e.map((a) => {
      const c = a.width / a.height;
      const u = Math.min(s, a.width);
      const l = Math.min(i, a.height);

      let { width, height } = a;

      if (width > u) {
        width = u;
        height = width / c;
      }

      if (height > l) {
        height = l;
        width = height * c;
      }

      return { width: width, height: height };
    });
  }, [e]);

  const [n, r] = A(t);

  B(() => {
    const s = () => r(t());
    window.addEventListener("resize", s);

    return () => window.removeEventListener("resize", s);
  }, [t]);

  return n;
}
function Jg() {
  B(() => {
    const e = window.innerWidth - document.documentElement.clientWidth;
    const document_documentElement = document.documentElement;
    const n = document_documentElement.style.overflow;
    document_documentElement.style.overflow = "hidden";

    if (e > 0) {
      document_documentElement.style.setProperty(
        "--scrollbar-compensation",
        `${e}px`
      );
    }

    return () => {
      document_documentElement.style.overflow = n;
      document_documentElement.style.setProperty(
        "--scrollbar-compensation",
        "0px"
      );
    };
  }, []);
}
function e0({ onClose: e, onPrev: t, onNext: n }) {
  B(() => {
    const r = (s) => {
      switch (s.key) {
        case "Escape": {
          s.preventDefault();
          s.stopPropagation();
          e();
          break;
        }
        case "ArrowLeft": {
          s.preventDefault();
          s.stopPropagation();
          t();
          break;
        }
        case "ArrowRight": {
          s.preventDefault();
          s.stopPropagation();
          n();
          break;
        }
      }
    };
    window.addEventListener("keydown", r, true);

    return () => window.removeEventListener("keydown", r, true);
  }, [e, t, n]);
}
function t0({ initialIndex: e, total: t }) {
  const [n, r] = A(e);
  const [s, i] = A(false);
  const a = I(null);

  const c = S(() => {
    if (a.current) {
      clearTimeout(a.current);
      a.current = null;
      i(false);
    }
  }, []);

  const u = S(
    (d) => {
      if (d !== n && d >= 0 && d >= 0 && d < t) {
        if (d >= 0) {
          if (d < t) {
            c();
            i(true);
            r(d);

            a.current = window.setTimeout(() => {
              a.current = null;
              i(false);
            }, 500);
          }
        }
      }
    },
    [n, t, c]
  );

  const l = S(() => {
    if (n > 0) {
      u(n - 1);
    }
  }, [n, u]);

  const h = S(() => {
    if (n < t - 1) {
      u(n + 1);
    }
  }, [n, t, u]);

  return {
    currentIndex: n,
    setCurrentIndex: r,
    isAnimating: s,
    setIsAnimating: i,
    cancelAnimation: c,
    goToIndex: u,
    goToPrev: l,
    goToNext: h,
  };
}
const Kn = 150;
const n0 = 0.3;
function bo(e, t) {
  const n = e.clientX - t.clientX;
  const r = e.clientY - t.clientY;
  return Math.sqrt(n * n + r * r);
}
function r0({
  currentIndex: e,
  imagesCount: t,
  imageSizes: n,
  isMobile: r,
  isAnimating: s,
  setIsAnimating: i,
  cancelAnimation: a,
  onIndexChange: c,
  onClose: u,
}) {
  const [l, h] = A(0);
  const [d, f] = A(0);
  const [m, T] = A(false);
  const [g, p] = A(1);
  const [_, v] = A(null);
  const [y, C] = A(1);
  const [w, b] = A(0);
  const [k, R] = A(0);
  const [N, P] = A(false);
  const E = I(1);
  const U = I({ x: 0, y: 0 });
  const O = I(false);
  const q = I(false);
  const ee = I(0);
  const Q = I(0);
  const ie = I(0);
  const ae = I(1);
  const X = I({ x: 0, y: 0 });
  const J = I({ x: 0, y: 0 });
  const D = I({ x: 0, y: 0 });
  const W = I(null);
  const G = I(false);
  const M = I(null);
  const x = I(null);
  const F = I(false);

  const $ = S((Z) => {
    E.current = Z;
    C(Z);
  }, []);

  const z = S((Z, L) => {
    U.current = { x: Z, y: L };
    b(Z);
    R(L);
  }, []);

  const j = S(() => {
    P(true);
    $(1);
    z(0, 0);

    setTimeout(() => P(false), 300);
  }, [$, z]);

  B(() => {
    E.current = 1;
    U.current = { x: 0, y: 0 };
    C(1);
    b(0);
    R(0);
    P(false);
  }, [e]);

  B(
    () => () => {
      if (M.current) {
        clearTimeout(M.current);
        M.current = null;
      }
    },
    []
  );

  const Y = S(
    (Z) => {
      let L = Z;

      if ((e === 0 && L > 0) || (e === t - 1 && L < 0)) {
        L *= n0;
      }

      return L;
    },
    [e, t]
  );

  const ne = S(
    () =>
      Math.abs(d) > Kn
        ? (u(r), true)
        : (i(true),
          f(0),
          p(1),
          (M.current = window.setTimeout(() => {
            M.current = null;
            i(false);
          }, 300)),
          false),
    [d, r, u, i]
  );

  const se = S(
    (Z) => {
      if (!r && t > 1) {
        if (t > 1) {
          a();
          M.current && (clearTimeout(M.current), (M.current = null));
          x.current !== null && (c(x.current), (x.current = null));
          i(false);
          v(null);
          h(0);
          T(true);
          G.current = false;
          D.current = { x: Z.clientX, y: Z.clientY };
          W.current = null;
          Z.preventDefault();
        }
      }
    },
    [r, t, a, c, i]
  );

  const he = S(
    (Z) => {
      if (!m || r) {
        return;
      }
      const L = Z.clientX - D.current.x;
      const K = Z.clientY - D.current.y;

      if (!W.current && (Math.abs(L) > 10 || Math.abs(K) > 10)) {
        W.current = Math.abs(L) > Math.abs(K) ? "x" : "y";
        G.current = true;
      }

      if (W.current === "x") {
        h(Y(L));
      } else if (W.current === "y") {
        f(K);
        const fe = Math.min(Math.abs(K) / Kn, 1);
        p(1 - fe * 0.5);
      }
    },
    [m, r, Y]
  );

  const re = S(() => {
    if (!(!m || r)) {
      T(false);

      if (W.current === "x") {
        const L = x.current ?? e;
        let K = L;

        if (l < -80 && L < t - 1) {
          K = L + 1;
        } else if (l > 80 && L > 0) {
          K = L - 1;
        }

        if (K !== L) {
          const fe = n[K]?.width || 0;
          const qe = n[L]?.width || 0;
          const Vt = K > L ? -qe : fe;
          i(true);
          v(K);
          h(Vt);
          x.current = K;

          M.current = window.setTimeout(() => {
            M.current = null;
            i(false);
            v(null);
            h(0);
            x.current = null;
            c(K);
          }, 500);
        } else {
          i(true);
          h(0);

          M.current = window.setTimeout(() => {
            M.current = null;
            i(false);
          }, 300);
        }
      } else {
        if (W.current === "y") {
          ne();
        }
      }

      W.current = null;
    }
  }, [m, r, e, l, t, n, ne, c, i]);

  const je = S(
    (Z) => {
      if (!r) {
        return;
      }
      Q.current = Math.max(Q.current, Z.touches.length);

      if (Z.touches.length === 2) {
        O.current = true;
        q.current = true;
        ie.current = bo(Z.touches[0], Z.touches[1]);
        ae.current = E.current;
        T(false);
        W.current = null;
        h(0);
        f(0);
        p(1);
        P(false);
        return;
      }

      if (E.current > 1) {
        Q.current = 1;
        X.current = { x: Z.touches[0].clientX, y: Z.touches[0].clientY };
        J.current = { ...U.current };
        T(true);
        G.current = false;
        W.current = null;
        P(false);
        const Z_target_1 = Z.target;
        F.current =
          Z_target_1.tagName === "IMG" &&
          Z_target_1.hasAttribute("data-viewer-image");
        return;
      }
      Q.current = 1;
      q.current = false;
      a();

      if (M.current) {
        clearTimeout(M.current);
        M.current = null;
      }

      i(false);
      h(0);
      const Z_target = Z.target;
      F.current =
        Z_target.tagName === "IMG" &&
        Z_target.hasAttribute("data-viewer-image");
      D.current = { x: Z.touches[0].clientX, y: Z.touches[0].clientY };
      W.current = null;
      T(true);
    },
    [r, a, i]
  );

  const ze = S(
    (Z) => {
      if (!r) {
        return;
      }
      Q.current = Math.max(Q.current, Z.touches.length);

      if (O.current && Z.touches.length >= 2) {
        const fe = bo(Z.touches[0], Z.touches[1]);
        const qe = ae.current * (fe / ie.current);
        $(Math.min(Math.max(qe, 0.5), 5));
        return;
      }

      if (E.current > 1 && m && !O.current) {
        const fe = Z.touches[0].clientX - X.current.x;
        const qe = Z.touches[0].clientY - X.current.y;

        if (Math.abs(fe) > 5 || Math.abs(qe) > 5) {
          G.current = true;
        }

        z(J.current.x + fe, J.current.y + qe);
        return;
      }
      if (!m) {
        return;
      }
      const L = Z.touches[0].clientX - D.current.x;
      const K = Z.touches[0].clientY - D.current.y;

      if (!W.current && (Math.abs(L) > 10 || Math.abs(K) > 10)) {
        W.current = Math.abs(L) > Math.abs(K) ? "x" : "y";
      }

      if (W.current === "x") {
        h(Y(L));
      } else if (W.current === "y") {
        f(K);
        const fe = Math.min(Math.abs(K) / Kn, 1);
        p(Math.round((1 - fe * 0.7) * 100) / 100);
      }
    },
    [r, m, $, z, Y]
  );

  const Ee = S(() => {
    if (r) {
      if (O.current) {
        O.current = false;
        ee.current = Date.now();

        if (E.current < 1.1) {
          j();
        }

        return;
      }
      if (E.current > 1) {
        T(false);
        return;
      }
      if (Q.current > 1 || q.current) {
        T(false);
        f(0);
        p(1);
        W.current = null;
        return;
      }
      if (Date.now() - ee.current < 300) {
        T(false);
        f(0);
        p(1);
        W.current = null;
        return;
      }
      if (m) {
        T(false);

        if (!F.current) {
          if (!W.current) {
            u(true);
            return;
          }
          if (W.current === "y" && d > 30) {
            u(true);
            return;
          }
        }

        if (W.current === "x") {
          let L = e;

          if (l < -50 && e < t - 1) {
            L = e + 1;
          } else if (l > 50 && e > 0) {
            L = e - 1;
          }

          i(true);
          h(0);

          if (L !== e) {
            c(L);
          }

          M.current = window.setTimeout(() => {
            M.current = null;
            i(false);
          }, 500);
        } else {
          if (W.current === "y") {
            ne();
          }
        }
        W.current = null;
      }
    }
  }, [r, m, e, l, d, t, ne, c, u, i, j]);

  const st = S(() => {
    const Z = x.current ?? e;
    const L = n[Z] || { width: 600, height: 400 };
    if (s && _ !== null) {
      const K = n[_] || L;
      return { width: K.width, height: K.height };
    }
    if (m && W.current === "x" && l !== 0) {
      const K = l < 0 ? Math.min(Z + 1, t - 1) : Math.max(Z - 1, 0);
      if (K === Z) {
        return L;
      }
      const fe = n[K] || L;
      const qe = L.width / 2 + fe.width / 2;
      const Vt = Math.min(Math.abs(l) / qe, 1);
      return {
        width: L.width + (fe.width - L.width) * Vt,
        height: L.height + (fe.height - L.height) * Vt,
      };
    }
    return L;
  }, [n, e, s, _, m, l, t]);

  const ge = S(() => {
    i(true);
    f(window.innerHeight);
    p(0);
  }, [i]);

  return {
    offsetX: l,
    offsetY: d,
    isDragging: m,
    opacity: g,
    wasDragging: G,
    displaySize: st(),
    animateClose: ge,
    zoom: { scale: y, panX: w, panY: k, isAnimating: N },
    desktopHandlers: {
      onMouseDown: se,
      onMouseMove: he,
      onMouseUp: re,
      onMouseLeave: re,
    },
    mobileHandlers: { onTouchStart: je, onTouchMove: ze, onTouchEnd: Ee },
  };
}
const o0 = "CNP0fBGd";
const s0 = "FxpoCP7s";
const i0 = "qO26zEBn";
const a0 = "-iyRv-th";
const c0 = "liHkL9mP";
const l0 = "U70eja-G";
const u0 = "q1lrkTZi";
const d0 = "oxBkKER-";
const h0 = "d4VkyUQq";
const f0 = "UK-OMndz";
const m0 = "_2CH2oEyg";
const p0 = "gGVStb2K";
const g0 = "_7Ac4a5ul";
const v0 = "ZyoB5yJC";
const _0 = "DWdVTu-N";

const Ae = {
  viewer: o0,
  closeButton: s0,
  counter: i0,
  windowContainer: a0,
  track: c0,
  slide: l0,
  mobileContainer: u0,
  mobileTrack: d0,
  mobileSlide: h0,
  navArea: f0,
  navLeft: m0,
  navRight: p0,
  dots: g0,
  dot: v0,
  active: _0,
};

function w0({ onClick: e }) {
  return o("button", {
    className: Ae.closeButton,
    onClick: e,
    children: o("svg", {
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      children: o("path", { d: "M18 6L6 18M6 6l12 12" }),
    }),
  });
}
function y0({ current: e, total: t }) {
  return (
    t <= 1 || o("div", { className: Ae.counter, children: [e + 1, " / ", t] })
  );
}
function C0({ currentIndex: e, total: t, onPrev: n, onNext: r }) {
  return (
    t <= 1 ||
    o(Re, {
      children: [
        o("button", {
          className: `${Ae.navArea} ${Ae.navLeft}`,
          onClick: n,
          disabled: e === 0,
          children: o("svg", {
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            children: o("path", { d: "M15 18l-6-6 6-6" }),
          }),
        }),
        o("button", {
          className: `${Ae.navArea} ${Ae.navRight}`,
          onClick: r,
          disabled: e === t - 1,
          children: o("svg", {
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            children: o("path", { d: "M9 18l6-6-6-6" }),
          }),
        }),
      ],
    })
  );
}
function T0({ total: e, currentIndex: t, onDotClick: n }) {
  return (
    e <= 1 ||
    o("div", {
      className: Ae.dots,
      children: Array.from({ length: e }, (r, s) =>
        o(
          "button",
          {
            className: `${Ae.dot} ${s === t ? Ae.active : ""}`,
            onClick: () => n(s),
          },
          s
        )
      ),
    })
  );
}
function E0({
  images: e,
  imageSizes: t,
  currentIndex: n,
  offsetX: r,
  offsetY: s,
  isAnimating: i,
  displaySize: a,
  handlers: c,
  onImageClick: u,
}) {
  const l = I(null);

  const h = () => {
    let d = 0;
    for (let f = 0; f < n; f++) {
      d += t[f]?.width || 0;
    }
    return d;
  };

  return o("div", {
    className: Ae.windowContainer,
    style: {
      width: `${a.width}px`,
      height: `${a.height}px`,
      transform: `translateY(${s}px)`,
      transition: i
        ? "width 0.5s cubic-bezier(0.32, 0.72, 0, 1), height 0.5s cubic-bezier(0.32, 0.72, 0, 1)"
        : "none",
    },
    onMouseDown: c.onMouseDown,
    onMouseMove: c.onMouseMove,
    onMouseUp: c.onMouseUp,
    onMouseLeave: c.onMouseLeave,
    children: o("div", {
      ref: l,
      className: Ae.track,
      style: {
        transform: `translateX(${-h() + r}px)`,
        transition: i
          ? "transform 0.5s cubic-bezier(0.32, 0.72, 0, 1)"
          : "none",
      },
      children: e.map((d, f) =>
        o(
          "div",
          {
            className: Ae.slide,
            onClick: u,
            children: o("img", {
              src: d.url,
              alt: "",
              draggable: false,
              style: {
                width: t[f]?.width || "auto",
                height: t[f]?.height || "auto",
              },
            }),
          },
          d.id
        )
      ),
    }),
  });
}
function R0({
  images: e,
  currentIndex: t,
  offsetX: n,
  offsetY: r,
  isAnimating: s,
  isClosing: i,
  handlers: a,
  onImageClick: c,
  zoom: u,
}) {
  return o("div", {
    className: Ae.mobileContainer,
    style: {
      transform: `translateY(${r}px)`,
      transition: s
        ? `transform ${i ? "0.15s" : "0.3s"} cubic-bezier(0.32, 0.72, 0, 1)`
        : "none",
    },
    onTouchStart: a.onTouchStart,
    onTouchMove: a.onTouchMove,
    onTouchEnd: a.onTouchEnd,
    children: o("div", {
      className: Ae.mobileTrack,
      style: {
        transform: `translateX(calc(-${t * 100}% + ${n}px))`,
        transition: s
          ? "transform 0.5s cubic-bezier(0.32, 0.72, 0, 1)"
          : "none",
      },
      children: e.map((l, h) =>
        o(
          "div",
          {
            className: Ae.mobileSlide,
            onClick: c,
            children: o("img", {
              src: l.url,
              alt: "",
              draggable: false,
              "data-viewer-image": true,
              style:
                h === t && u.scale !== 1
                  ? {
                      transform: `translate(${u.panX}px, ${u.panY}px) scale(${u.scale})`,
                      transition: u.isAnimating
                        ? "transform 0.3s cubic-bezier(0.32, 0.72, 0, 1)"
                        : "none",
                    }
                  : undefined,
            }),
          },
          l.id
        )
      ),
    }),
  });
}
function N0({ images: e, initialIndex: t, onClose: n }) {
  const r = I(null);
  const s = mt();
  const i = Qg(e);
  const a = t0({ initialIndex: t, total: e.length });
  Jg();

  const c = S(
    (d = false) => {
      if (d && s) {
        u.animateClose();
        setTimeout(n, 150);
      } else {
        n();
      }
    },
    [s, n]
  );

  const u = r0({
    currentIndex: a.currentIndex,
    imagesCount: e.length,
    imageSizes: i,
    isMobile: s,
    isAnimating: a.isAnimating,
    setIsAnimating: a.setIsAnimating,
    cancelAnimation: a.cancelAnimation,
    onIndexChange: a.goToIndex,
    onClose: c,
  });

  e0({ onClose: c, onPrev: a.goToPrev, onNext: a.goToNext });

  const l = S(
    (d) => {
      if (u.wasDragging.current) {
        u.wasDragging.current = false;
        return;
      }

      if (d.target === r.current) {
        c();
      }
    },
    [c]
  );

  const h = S(() => {
    if (u.wasDragging.current) {
      u.wasDragging.current = false;
      return;
    }
    c(s);
  }, [c, s]);

  return Ct(
    o("div", {
      ref: r,
      className: Ae.viewer,
      style: {
        "--opacity": u.opacity,
        transition: a.isAnimating
          ? "opacity 0.3s cubic-bezier(0.32, 0.72, 0, 1)"
          : "none",
      },
      onClick: l,
      children: [
        !s && o(w0, { onClick: c }),
        o(y0, { current: a.currentIndex, total: e.length }),
        !s &&
          o(E0, {
            images: e,
            imageSizes: i,
            currentIndex: a.currentIndex,
            offsetX: u.offsetX,
            offsetY: u.offsetY,
            isAnimating: a.isAnimating,
            displaySize: u.displaySize,
            handlers: u.desktopHandlers,
            onImageClick: h,
          }),
        s &&
          o(R0, {
            images: e,
            currentIndex: a.currentIndex,
            offsetX: u.offsetX,
            offsetY: u.offsetY,
            isAnimating: a.isAnimating,
            isClosing: false,
            handlers: u.mobileHandlers,
            onImageClick: h,
            zoom: u.zoom,
          }),
        !s &&
          o(C0, {
            currentIndex: a.currentIndex,
            total: e.length,
            onPrev: a.goToPrev,
            onNext: a.goToNext,
          }),
        o(T0, {
          total: e.length,
          currentIndex: a.currentIndex,
          onDotClick: a.goToIndex,
        }),
      ],
    }),
    document.body
  );
}
function S0() {
  const { isOpen: e, images: t, initialIndex: n, close: r } = hs();
  return e ? o(N0, { images: t, initialIndex: n, onClose: r }) : null;
}
function k0({ children: e, currentPath: t }) {
  const n = na();

  const r = Te((i) => i.initialize);

  B(() => {
    if (n === "idle") {
      r();
    }
  }, [n, r]);

  B(() => {
    if (n === "loading" || n === "idle") {
      return;
    }
    const i = uo.some((a) => t.startsWith(a));

    if (n === "unauthenticated" && !i) {
      $(ve.LOGIN);
    } else if (n === "needs_profile" && t !== ve.ONBOARDING) {
      $(ve.ONBOARDING);
    } else if (
      n === "authenticated" &&
      (t === ve.LOGIN ||
        t === ve.REGISTER ||
        t === ve.REGISTER ||
        t === ve.ONBOARDING)
    ) {
      $(ve.HOME);
    }
  }, [n, t]);

  const s = uo.some((i) => t.startsWith(i));
  return n === "idle" || (n === "loading" && !s)
    ? null
    : n === "service_error"
    ? o(b0, {})
    : n === "account_deleted"
    ? o(I0, {})
    : o(Re, { children: e });
}
function b0() {
  const e = Te((s) => s.initialize);

  const [t, n] = A(false);
  return o("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "100vh",
      padding: "24px",
    },
    children: o("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "16px",
        maxWidth: "400px",
        width: "100%",
        textAlign: "center",
      },
      children: [
        o("h1", {
          style: {
            fontSize: "24px",
            fontWeight: 600,
            color: "var(--text-primary)",
            margin: 0,
          },
          children: "Сервис недоступен",
        }),
        o("p", {
          style: {
            fontSize: "15px",
            color: "var(--text-secondary)",
            margin: 0,
            lineHeight: 1.5,
          },
          children:
            "Не удалось подключиться к серверу. Попробуйте обновить страницу или повторите попытку позже.",
        }),
        o("div", {
          style: { marginTop: "8px" },
          children: o(Le, {
            onClick: async () => {
              n(true);
              try {
                await e();
              } finally {
                n(false);
              }
            },
            disabled: t,
            children: t ? "Подключение..." : "Попробовать снова",
          }),
        }),
      ],
    }),
  });
}
function I0() {
  const e = Te((u) => u.canRestore);

  const t = Te((u) => u.restoreDeadline);

  const n = Te((u) => u.restoreAccount);

  const r = Te((u) => u.logout);

  const [s, i] = A(false);

  const a = t
    ? new Date(t).toLocaleDateString("ru-RU", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : null;

  const c = async () => {
    i(true);
    try {
      await n();
    } catch {
      i(false);
    }
  };

  return o("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "100vh",
      padding: "24px",
    },
    children: o("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "16px",
        maxWidth: "400px",
        width: "100%",
        textAlign: "center",
      },
      children: [
        o("h1", {
          style: {
            fontSize: "24px",
            fontWeight: 600,
            color: "var(--text-primary)",
            margin: 0,
          },
          children: "Аккаунт удалён",
        }),
        s
          ? o("p", {
              style: {
                fontSize: "15px",
                color: "var(--text-secondary)",
                margin: 0,
              },
              children: "Восстановление аккаунта...",
            })
          : e
          ? o(Re, {
              children: [
                o("p", {
                  style: {
                    fontSize: "15px",
                    color: "var(--text-secondary)",
                    margin: 0,
                    lineHeight: 1.5,
                  },
                  children: [
                    "Ваш аккаунт был удалён. Вы можете восстановить его",
                    a ? ` до ${a}` : "",
                    ".",
                  ],
                }),
                o("div", {
                  style: {
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "12px",
                    marginTop: "8px",
                    width: "100%",
                  },
                  children: [
                    o(Le, { onClick: c, children: "Восстановить аккаунт" }),
                    o("button", {
                      type: "button",
                      onClick: () => r(),
                      style: {
                        background: "none",
                        border: "none",
                        color: "var(--text-secondary)",
                        fontSize: "14px",
                        cursor: "pointer",
                        padding: "8px",
                      },
                      children: "Выйти",
                    }),
                  ],
                }),
              ],
            })
          : o(Re, {
              children: [
                o("p", {
                  style: {
                    fontSize: "15px",
                    color: "var(--text-secondary)",
                    margin: 0,
                  },
                  children: "Срок восстановления аккаунта истёк.",
                }),
                o("div", {
                  style: { marginTop: "8px" },
                  children: o(Le, { onClick: () => r(), children: "Выйти" }),
                }),
              ],
            }),
      ],
    }),
  });
}
function P0({
  itemCount: e,
  estimatedItemHeight: t,
  overscan: n = 5,
  gap: r = 0,
  getItemKey: s = (a) => a,
  initialMeasuredHeights: i,
}) {
  const [, a] = A(0);
  const c = I(typeof window !== "undefined" ? window.scrollY : 0);
  const u = I(i ?? new Map());
  const l = I(null);
  const h = I(null);
  const d = I(new Map());

  const f = (y) => u.current.get(y) ?? t;

  const m = (y) => {
    let C = 0;
    for (let w = 0; w < y; w++) {
      C += f(w) + r;
    }
    return C;
  };

  const T = () => {
    if (e === 0) {
      return 0;
    }
    let y = 0;
    for (let C = 0; C < e; C++) {
      y += f(C);
    }
    y += Math.max(0, e - 1) * r;
    return y;
  };

  const g = () => {
    if (e === 0) {
      return { start: 0, end: 0 };
    }
    const c_current = c.current;
    const window_innerHeight = window.innerHeight;
    let w = 0;
    let b = 0;
    for (let N = 0; N < e; N++) {
      const P = f(N) + r;
      if (b + P > c_current) {
        w = N;
        break;
      }
      b += P;
    }
    let k = w;
    let R = 0;
    for (
      let N = w;
      N < e && ((R += f(N) + r), (k = N), !(R >= window_innerHeight));
      N++
    ) {}
    return { start: Math.max(0, w - n), end: Math.min(e - 1, k + n) };
  };

  const p = () => {
    if (e === 0) {
      return [];
    }
    const { start: y, end: C } = g();
    const w = [];
    for (let b = y; b <= C; b++) {
      w.push({ index: b, key: s(b), start: m(b) });
    }
    return w;
  };

  if (!h.current) {
    h.current = new ResizeObserver((y) => {
      let C = false;
      for (const w of y) {
        const w_target = w.target;
        const k = d.current.get(w_target);
        if (k === undefined) {
          continue;
        }
        const R = w.contentRect.height;

        if (R > 0 && u.current.get(k) !== R) {
          u.current.set(k, R);
          C = true;
        }
      }

      if (C) {
        a((w) => w + 1);
      }
    });
  }

  const _ = S((y, C) => {
    if (!y) {
      return;
    }
    d.current.set(y, C);
    h.current?.observe(y);
    const w = y.getBoundingClientRect().height;

    if (w > 0 && u.current.get(C) !== w) {
      u.current.set(C, w);
      a((b) => b + 1);
    }
  }, []);
  B(() => {
    const y = () => {
      if (!l.current) {
        l.current = requestAnimationFrame(() => {
          l.current = null;
          c.current = window.scrollY;

          a((C) => C + 1);
        });
      }
    };
    window.addEventListener("scroll", y, { passive: true });
    c.current = window.scrollY;

    a((C) => C + 1);

    return () => {
      window.removeEventListener("scroll", y);

      if (l.current) {
        cancelAnimationFrame(l.current);
      }

      h.current?.disconnect();
      d.current.clear();
    };
  }, []);
  const v = S(() => new Map(u.current), []);
  return {
    virtualItems: p(),
    totalSize: T(),
    measureElement: _,
    getMeasuredHeights: v,
  };
}
const A0 = "IWKvHh6o";
const x0 = "B0hQs8NU";
const O0 = "q8F-aimP";
const L0 = "qkSaz-qE";

const Cn = {
  virtualFeed: A0,
  virtualContent: x0,
  virtualItem: O0,
  loadingMore: L0,
};

function M0({
  posts: e,
  renderPost: t,
  isLoadingMore: n = false,
  hasMore: r = false,
  onLoadMore: s,
  estimatedPostHeight: i = 300,
  overscan: a = 5,
  gap: c = 10,
  initialMeasuredHeights: u,
  onMeasuredHeightsChange: l,
}) {
  const h = I(null);
  const d = I(false);
  const [f, m] = A(null);
  const [T, g] = A(window.innerWidth < 1174);

  const p = le((N) => N.highlightedPostId);

  const _ = le((N) => N.clearHighlightedPost);

  B(() => {
    const N = () => g(window.innerWidth < 1174);
    window.addEventListener("resize", N);

    return () => window.removeEventListener("resize", N);
  }, []);
  const v = T ? 0 : c;

  const y = S(
    (N) => {
      const e_N = e[N];
      if (!e_N) {
        return N;
      }
      const E = e_N.attachments?.[0]?.id ?? "";
      return `${e_N.id}-${E}`;
    },
    [e]
  );

  const {
    virtualItems: C,
    totalSize: w,
    measureElement: b,
    getMeasuredHeights: k,
  } = P0({
    itemCount: e.length,
    estimatedItemHeight: i,
    overscan: a,
    gap: v,
    getItemKey: y,
    initialMeasuredHeights: u,
  });

  B(
    () => () => {
      if (l) {
        l(k());
      }
    },
    [l, k]
  );

  B(() => {
    if (!p) {
      return;
    }
    h.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    const N = setTimeout(() => {
      m(p);
      _();

      setTimeout(() => m(null), 600);
    }, 300);
    return () => clearTimeout(N);
  }, [p, _]);

  const R = S(() => {
    if (!s || !r || !r || n) {
      return;
    }
    const N =
      document.documentElement.scrollHeight -
      window.scrollY -
      window.innerHeight;

    if (N < 500 && !d.current) {
      d.current = true;
      s();
    }

    if (N > 600) {
      d.current = false;
    }
  }, [s, r, n]);

  B(() => {
    if (!n) {
      d.current = false;
    }
  }, [n]);

  B(() => {
    window.addEventListener("scroll", R, { passive: true });

    return () => window.removeEventListener("scroll", R);
  }, [R]);

  return o("div", {
    ref: h,
    className: Cn.virtualFeed,
    children: [
      o("div", {
        className: Cn.virtualContent,
        style: { height: `${w}px` },
        children: C.map((N) => {
          const P = e[N.index];
          return P
            ? o(
                "div",
                {
                  ref: (E) => b(E, N.index),
                  className: Cn.virtualItem,
                  style: { transform: `translateY(${N.start}px)` },
                  children: t(P, N.index, P.id === f),
                },
                N.key
              )
            : null;
        }),
      }),
      n &&
        o("div", {
          className: Cn.loadingMore,
          children: o(pt, { size: "sm" }),
        }),
    ],
  });
}
const $0 = "qX9ObwT9";
const D0 = "QAdxKv6R";
const U0 = "nTcZk3Cv";
const F0 = "_5UYumbfd";
const Tn = { content: $0, icon: D0, text: U0, button: F0 };
const Io = "phone-verification-required";
function B0() {
  const [e, t] = A(false);

  const n = Te((s) => s.profile?.id ?? "");

  B(() => {
    const s = () => t(true);
    window.addEventListener(Io, s);

    return () => window.removeEventListener(Io, s);
  }, []);

  if (!e) {
    return null;
  }

  const r = `https://t.me/itd_verification_bot?start=${n}`;
  return o(yt, {
    onClose: () => t(false),
    title: "Подтверждение телефона",
    children: o("div", {
      className: Tn.content,
      children: [
        o("div", {
          className: Tn.icon,
          children: o("svg", {
            width: "48",
            height: "48",
            viewBox: "0 0 48 48",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              o("circle", {
                cx: "24",
                cy: "24",
                r: "24",
                fill: "#2AABEE",
                "fill-opacity": "0.12",
              }),
              o("svg", {
                x: "8",
                y: "8",
                width: "32",
                height: "32",
                viewBox: "0 0 1000 1000",
                children: o("path", {
                  d: "M226.328419,494.722069 C372.088573,431.216685 469.284839,389.350049 517.917216,369.122161 C656.772535,311.36743 685.625481,301.334815 704.431427,301.003532 C708.567621,300.93067 717.815839,301.955743 723.806446,306.816707 C728.864797,310.92121 730.256552,316.46581 730.922551,320.357329 C731.588551,324.248848 732.417879,333.113828 731.758626,340.040666 C724.234007,419.102486 691.675104,610.964674 675.110982,699.515267 C668.10208,736.984342 654.301336,749.547532 640.940618,750.777006 C611.904684,753.448938 589.856115,731.588035 561.733393,713.153237 C517.726886,684.306416 492.866009,666.349181 450.150074,638.200013 C400.78442,605.66878 432.786119,587.789048 460.919462,558.568563 C468.282091,550.921423 596.21508,434.556479 598.691227,424.000355 C599.00091,422.680135 599.288312,417.758981 596.36474,415.160431 C593.441168,412.561881 589.126229,413.450484 586.012448,414.157198 C581.598758,415.158943 511.297793,461.625274 375.109553,553.556189 C355.154858,567.258623 337.080515,573.934908 320.886524,573.585046 C303.033948,573.199351 268.692754,563.490928 243.163606,555.192408 C211.851067,545.013936 186.964484,539.632504 189.131547,522.346309 C190.260287,513.342589 202.659244,504.134509 226.328419,494.722069 Z",
                  fill: "#2AABEE",
                }),
              }),
            ],
          }),
        }),
        o("p", {
          className: Tn.text,
          children:
            "Для публикации постов и комментариев необходимо подтвердить номер телефона через Telegram-бота.",
        }),
        o("a", {
          href: r,
          target: "_blank",
          rel: "noopener noreferrer",
          className: Tn.button,
          onClick: () => t(false),
          children: "Подтвердить через Telegram",
        }),
      ],
    }),
  });
}
const H0 = "NoLqdGhZ";
const V0 = "ZJgdLwPI";
const W0 = "r9t-7AuI";
const Zn = { layout: H0, wrapper: V0, content: W0 };

const j0 = me(() =>
  pe(
    () => import("./index-BabN_4ir.js"),
    __vite__mapDeps([2, 3, 4, 5, 6, 7, 8, 9])
  ).then((e) => ({
    default: e.Aside,
  }))
);

const z0 = me(() =>
  pe(
    () => import("./index-C2Rao-GK.js"),
    __vite__mapDeps([10, 3, 7, 8, 11, 12, 13])
  ).then((e) => ({
    default: e.MobileNavigation,
  }))
);

const q0 = ["/login", "/register", "/forgot-password", "/verify-email"];

const Y0 = [
  "/terms",
  "/privacy",
  "/cookies",
  "/external",
  "/careers",
  "/support",
  "/delete-account",
  "/child-safety",
];

const X0 = ({ children: e }) => {
  const t = mt();
  const n = Ca();
  const [r, s] = A(window.location.pathname);
  B(() => {
    const c = () => {
      s(window.location.pathname);
    };
    window.addEventListener("popstate", c);
    const u = history.pushState.bind(history);
    const l = history.replaceState.bind(history);

    history.pushState = (...h) => {
      u(...h);
      c();
    };

    history.replaceState = (...h) => {
      l(...h);
      c();
    };

    return () => {
      window.removeEventListener("popstate", c);
      history.pushState = u;
      history.replaceState = l;
    };
  }, []);
  const i = q0.includes(r);
  const a = Y0.includes(r);
  return i
    ? o(Re, { children: e })
    : o(ya.Provider, {
        value: { isHidden: n },
        children: o("div", {
          className: Zn.layout,
          children: o("div", {
            className: Zn.wrapper,
            children: [
              !a &&
                o(xt, {
                  fallback: null,
                  children: t ? o(z0, {}) : o(j0, {}),
                }),
              !a && !t && o(Pc, {}),
              o("div", { className: Zn.content, children: e }),
            ],
          }),
        }),
      });
};

const G0 = "bpf4GYjz";
const K0 = "crrL7XgI";
const Z0 = "yhENW-7a";
const Q0 = "_928LvLhD";
const J0 = "_6eF0w9KX";

const Yt = {
  page: G0,
  createPostWrapper: K0,
  tabsWrapper: Z0,
  error: Q0,
  empty: J0,
};

const ev = (e) => {
  const t = le((k) => k.posts);

  const n = le((k) => k.activeFeed);

  const r = le((k) => k.isLoading);

  const s = le((k) => k.isLoadingMore);

  const i = le((k) => k.hasMore);

  const a = le((k) => k.error);

  const c = le((k) => k.feedScrollPosition);

  const u = le((k) => k.feedMeasuredHeights);

  const l = le((k) => k.setActiveFeed);

  const h = le((k) => k.fetchFeed);

  const d = le((k) => k.loadMoreFeed);

  const f = le((k) => k.createPost);

  const m = le((k) => k.setFeedScrollPosition);

  const T = le((k) => k.setFeedMeasuredHeights);

  const g = Te((k) => k.profile);

  const p = Te((k) => k.status);

  const _ = I(false);

  const v = Ce(() => t.map((k) => k.author.id), [t]);

  ea(v);

  B(() => {
    if (p === "authenticated" && t.length === 0 && !r) {
      h();
    }
  }, [n, p]);

  B(() => {
    if (t.length > 0 && c > 0 && !_.current) {
      _.current = true;

      requestAnimationFrame(() => {
        window.scrollTo(0, c);
      });
    }
  }, [t.length, c]);

  B(
    () => () => {
      m(window.scrollY);
    },
    [m]
  );

  const y = (k) => {
    const N = ["global", "clan", "following"][k] ?? "global";

    if (N !== n) {
      l(N);
    }
  };

  const C = async (k, R, N, P) => {
    if (g) {
      await f(g.id, k, R, N, P);
    }
  };

  const w = S(() => {
    if (i && !s) {
      d();
    }
  }, [i, s, d]);

  const b = S((k, R, N) => o(cg, { post: k, isHighlighted: N }, k.id), []);

  return o("div", {
    className: Yt.page,
    children: [
      o("div", {
        className: Yt.tabsWrapper,
        children: o(Zg, {
          tabs: ["Для вас", "Лента кланов", "Подписки"],
          activeIndex: n === "global" ? 0 : n === "clan" ? 1 : 2,
          onChange: y,
        }),
      }),
      o("div", {
        className: Yt.createPostWrapper,
        children: [
          g && o(Ze, { src: g.avatar ?? "", alt: g.displayName, size: "sm" }),
          o(Mu, { onSubmit: C }),
        ],
      }),
      a
        ? o("div", {
            className: Yt.error,
            children: [
              o("p", { children: a }),
              o("button", { onClick: () => h(), children: "Повторить" }),
            ],
          })
        : r && t.length === 0
        ? o(pt, {})
        : t.length === 0
        ? o("div", { className: Yt.empty, children: "Нет постов" })
        : t.length > 0
        ? o(M0, {
            posts: t,
            renderPost: b,
            isLoadingMore: s,
            hasMore: i,
            onLoadMore: w,
            estimatedPostHeight: 250,
            overscan: 3,
            initialMeasuredHeights: u,
            onMeasuredHeightsChange: T,
          })
        : null,
    ],
  });
};

const tv = me(() =>
  pe(
    () => import("./index-B-Z-jirm.js"),
    __vite__mapDeps([14, 11, 12, 15, 7, 5, 6, 16])
  ).then((e) => ({
    default: e.Profile,
  }))
);

const nv = me(() =>
  pe(() => import("./index-qhc97b7-.js"), __vite__mapDeps([17, 15, 18])).then(
    (e) => ({
      default: e.Notifications,
    })
  )
);

const rv = me(() =>
  pe(() => import("./index-CIsAt1fW.js"), __vite__mapDeps([19, 20])).then(
    (e) => ({
      default: e.About,
    })
  )
);

const Bs = me(() =>
  pe(() => import("./index-B3K2Yams.js"), []).then((e) => ({
    default: e.NotFound,
  }))
);

const ov = me(() =>
  pe(() => import("./index-LJZShU7c.js"), __vite__mapDeps([21, 22, 23])).then(
    (e) => ({
      default: e.PostPage,
    })
  )
);

const sv = me(() =>
  pe(
    () => import("./index-BGsRUOja.js"),
    __vite__mapDeps([24, 25, 26, 27, 28, 4, 29, 30])
  ).then((e) => ({
    default: e.Login,
  }))
);

const iv = me(() =>
  pe(
    () => import("./index-1IEKIXy2.js"),
    __vite__mapDeps([31, 25, 26, 27, 28, 4, 29, 32])
  ).then((e) => ({
    default: e.Register,
  }))
);

const av = me(() =>
  pe(
    () => import("./index-DP3UryJH.js"),
    __vite__mapDeps([33, 25, 26, 4, 29, 34])
  ).then((e) => ({
    default: e.ForgotPassword,
  }))
);

const cv = me(() =>
  pe(
    () => import("./index-DTSR54_C.js"),
    __vite__mapDeps([35, 4, 29, 36])
  ).then((e) => ({
    default: e.ResetPassword,
  }))
);

const lv = me(() =>
  pe(() => import("./index-CUWx4cIw.js"), []).then((e) => ({
    default: e.VerifyEmail,
  }))
);

const uv = me(() =>
  pe(() => import("./index-DMdgLCCX.js"), __vite__mapDeps([37, 22, 38])).then(
    (e) => ({
      default: e.Terms,
    })
  )
);

const dv = me(() =>
  pe(() => import("./index-BYXGgUgY.js"), __vite__mapDeps([39, 22, 40])).then(
    (e) => ({
      default: e.Privacy,
    })
  )
);

const hv = me(() =>
  pe(() => import("./index-Caqj9Ja6.js"), __vite__mapDeps([41, 22, 42])).then(
    (e) => ({
      default: e.Cookies,
    })
  )
);

const fv = me(() =>
  pe(() => import("./index-DXhe9C_c.js"), __vite__mapDeps([43, 44])).then(
    (e) => ({
      default: e.Onboarding,
    })
  )
);

const mv = me(() =>
  pe(() => import("./index-LuVztXA5.js"), __vite__mapDeps([45, 8, 46])).then(
    (e) => ({
      default: e.Search,
    })
  )
);

const pv = me(() =>
  pe(() => import("./index-DnuVaapW.js"), __vite__mapDeps([47, 22, 48])).then(
    (e) => ({
      default: e.Hashtag,
    })
  )
);

const gv = me(() =>
  pe(() => import("./index-Qw-NHfIU.js"), __vite__mapDeps([49, 22, 50])).then(
    (e) => ({
      default: e.ExternalLink,
    })
  )
);

const vv = me(() =>
  pe(() => import("./index-BwqGTeAY.js"), __vite__mapDeps([51, 22, 52])).then(
    (e) => ({
      default: e.Support,
    })
  )
);

const _v = me(() =>
  pe(() => import("./index-CQjjrl5L.js"), __vite__mapDeps([53, 22, 54])).then(
    (e) => ({
      default: e.DeleteAccount,
    })
  )
);

const wv = me(() =>
  pe(() => import("./index-G6uc7kvD.js"), __vite__mapDeps([55, 22, 56])).then(
    (e) => ({
      default: e.ChildSafety,
    })
  )
);

const yv = me(() =>
  pe(() => import("./index-CSxZluPT.js"), __vite__mapDeps([57, 58])).then(
    (e) => ({
      default: e.Event,
    })
  )
);

const Cv = me(() =>
  pe(() => import("./index-IEL_9KO0.js"), []).then((e) => ({
    default: e.Verification,
  }))
);

const Tv = me(() =>
  pe(() => import("./index-DjTDhn6W.js"), __vite__mapDeps([59, 22, 60])).then(
    (e) => ({
      default: e.SubscriptionTerms,
    })
  )
);

const Ev = ({ slug: e }) => {
  if (!e?.startsWith("@")) {
    return o(Bs, {});
  }
  const t = e.slice(1);
  return o(tv, { username: t });
};

function Rv() {
  const [e, t] = A(window.location.pathname);
  return o(Sg, {
    children: o(xc, {
      children: o(k0, {
        currentPath: e,
        children: [
          o(S0, {}),
          o(qg, {}),
          o(B0, {}),
          o(X0, {
            children: o(xt, {
              fallback: null,
              children: o(ds, {
                onChange: (r) => {
                  const s = e;
                  t(r.url);

                  if (r.url !== "/" && r.url !== s) {
                    window.scrollTo(0, 0);
                  }
                },
                children: [
                  o(ev, { path: "/" }),
                  o(nv, { path: "/notifications" }),
                  o(rv, { path: "/about" }),
                  o(sv, { path: "/login" }),
                  o(iv, { path: "/register" }),
                  o(av, { path: "/forgot-password" }),
                  o(cv, { path: "/reset-password" }),
                  o(lv, { path: "/verify-email" }),
                  o(uv, { path: "/terms" }),
                  o(dv, { path: "/privacy" }),
                  o(hv, { path: "/cookies" }),
                  o(fv, { path: "/onboarding" }),
                  o(mv, { path: "/search" }),
                  o(pv, { path: "/hashtag/:name" }),
                  o(gv, { path: "/external" }),
                  o(vv, { path: "/support" }),
                  o(_v, { path: "/delete-account" }),
                  o(wv, { path: "/child-safety" }),
                  o(yv, { path: "/event" }),
                  o(Cv, { path: "/verification" }),
                  o(Tv, { path: "/subscription-terms" }),
                  o(ov, { path: "/:username/post/:postId" }),
                  o(Ev, { path: "/:slug" }),
                  o(Bs, { default: true }),
                ],
              }),
            }),
          }),
        ],
      }),
    }),
  });
}
yi(document.getElementById("root")).render(o(cs, { children: o(Rv, {}) }));
export {
  $ as $,
  I as A,
  Le as B,
  Ii as C,
  ts as D,
  Oe as E,
  vr as F,
  le as G,
  Nv as H,
  rt as I,
  zd as J,
  Zg as K,
  Mu as L,
  yt as M,
  cg as N,
  Sv as O,
  xt as P,
  ws as Q,
  Ls as R,
  pt as S,
  Ce as T,
  cn as U,
  M0 as V,
  Sr as W,
  Ln as X,
  bn as Y,
  Eo as Z,
  pe as __,
  lt as a,
  Nn as a0,
  rg as a1,
  Us as a2,
  de as a3,
  Ct as a4,
  wl as a5,
  H as a6,
  V as a7,
  Rr as a8,
  kv as a9,
  ma as aa,
  Io as ab,
  qa as ac,
  Cs as ad,
  Pa as ae,
  dr as af,
  Ri as ag,
  Te as b,
  Mn as c,
  A as d,
  Ze as e,
  mt as f,
  Fi as g,
  Nr as h,
  ke as i,
  Ha as j,
  Re as k,
  $s as l,
  $t as m,
  Ts as n,
  za as o,
  dn as p,
  S as q,
  ys as r,
  ur as s,
  dt as t,
  o as u,
  ra as v,
  Ns as w,
  Ss as x,
  B as y,
  me as z,
};
