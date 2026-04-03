const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/index-DIT0DJHa.js",
      "assets/IconCheck-C4r3nClc.js",
      "assets/index-DhOCwZAW.css",
      "assets/index-CFKTm8b5.js",
      "assets/index-ysVQEOk1.css",
      "assets/index-V2uaGbAS.js",
      "assets/index-ZVkbsz1m.css",
      "assets/index-CyrHvdAp.js",
      "assets/IconChevronLeft-BiitjQQ9.js",
      "assets/index-DIXM3pTD.css",
      "assets/index-Cvcuf5c_.js",
      "assets/index-BomtBnuJ.js",
      "assets/index-DK1lyy5c.css",
      "assets/index-DUTIixzc.js",
      "assets/index-Cmj9rins.css",
      "assets/IconEyeOff-BR5RLWq7.js",
      "assets/index-2ed4UA7H.css",
      "assets/index-CQe1UkF_.js",
      "assets/index-BkV84Ei0.css",
      "assets/index-CRj8SIjp.js",
      "assets/index-BuSB1rTU.css",
      "assets/index-B_YfkcVj.js",
      "assets/index-AyR1xSDo.css",
      "assets/index-Bl7PlgOD.js",
      "assets/index-BYDms0MW.css",
      "assets/index-ibVz4LmD.js",
      "assets/index-DYMxdUD-.css",
      "assets/index-Dl4PN8wh.js",
      "assets/index-BfSyWtIY.css",
      "assets/index-6e9hczcR.js",
      "assets/index-Tfl7NUeb.css",
      "assets/index-By23IUud.js",
      "assets/index-DxopF78T.css",
      "assets/index-EHPplxfL.js",
      "assets/index-sgOc3eJB.css",
      "assets/index-Cb1fhgMG.js",
      "assets/index-CYFMj30R.css",
      "assets/index-BJ433-fF.js",
      "assets/index-m8m8PtY3.css",
      "assets/index-Dv_rcYhl.js",
      "assets/index-DlXH7sLZ.css",
      "assets/index-39p5--XD.js",
      "assets/index-DcwPAf74.css",
      "assets/index-ByRPfZXp.js",
      "assets/index-cSZoRzaS.css",
      "assets/index-B4V5mhcS.js",
      "assets/index-CndHYrx2.css",
    ])
) => i.map((i) => d[i]);
(() => {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) {
    return;
  }
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) {
    r(i);
  }
  new MutationObserver((i) => {
    for (const s of i) {
      if (s.type === "childList") {
        for (const a of s.addedNodes) {
          if (a.tagName === "LINK" && a.rel === "modulepreload") {
            r(a);
          }
        }
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function o(i) {
    const s = {};

    if (i.integrity) {
      s.integrity = i.integrity;
    }

    if (i.referrerPolicy) {
      s.referrerPolicy = i.referrerPolicy;
    }

    if (i.crossOrigin === "use-credentials") {
      s.credentials = "include";
    } else if (i.crossOrigin === "anonymous") {
      s.credentials = "omit";
    } else {
      s.credentials = "same-origin";
    }

    return s;
  }
  function r(i) {
    if (i.ep) {
      return;
    }
    i.ep = true;
    const s = o(i);
    fetch(i.href, s);
  }
})();
let On;
let pe;
let Es;
let Qt;
let Cr;
let Rs;
let Ss;
let Is;
let er;
let Ho;
let Wo;
let xs;
const An = {};
const Ps = [];
const Xi = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
const Array_isArray = Array.isArray;
function Nt(e, t) {
  for (const o in t) {
    e[o] = t[o];
  }
  return e;
}
function tr(e) {
  if (e && e.parentNode) {
    e.parentNode.removeChild(e);
  }
}
function Tt(e, t, o) {
  let r;
  let i;
  let s;
  const a = {};
  for (s in t) {
    if (s == "key") {
      r = t[s];
    } else if (s == "ref") {
      i = t[s];
    } else {
      a[s] = t[s];
    }
  }

  if (arguments.length > 2) {
    a.children = arguments.length > 3 ? On.call(arguments, 2) : o;
  }

  if (typeof e == "function" && e.defaultProps != null) {
    for (s in e.defaultProps) {
      if (a[s] === undefined) {
        a[s] = e.defaultProps[s];
      }
    }
  }

  return Sn(e, a, r, i, null);
}
function Sn(e, t, o, r, i) {
  const s = {
    type: e,
    props: t,
    key: o,
    ref: r,
    __k: null,
    __: null,
    __b: 0,
    __e: null,
    __c: null,
    constructor: undefined,
    __v: i ?? ++Es,
    __i: -1,
    __u: 0,
  };

  if (i == null && pe.vnode != null) {
    pe.vnode(s);
  }

  return s;
}
function Yi() {
  return { current: null };
}
function Se(e) {
  return e.children;
}

class pt {
  constructor(e, t) {
    this.props = e;
    this.context = t;
  }

  setState(e, t) {
    let o;

    o =
      this.__s != null && this.__s != this.state
        ? this.__s
        : (this.__s = Nt({}, this.state));

    if (typeof e == "function") {
      e = e(Nt({}, o), this.props);
    }

    if (e) {
      Nt(o, e);
    }

    if (e != null && this.__v) {
      t && this._sb.push(t);
      Vo(this);
    }
  }

  forceUpdate(e) {
    if (this.__v) {
      this.__e = true;
      e && this.__h.push(e);
      Vo(this);
    }
  }
}

function dn(e, t) {
  if (t == null) {
    return e.__ ? dn(e.__, e.__i + 1) : null;
  }
  let o;
  for (; t < e.__k.length; t++) {
    if ((o = e.__k[t]) != null && o.__e != null) {
      return o.__e;
    }
  }
  return typeof e.type == "function" ? dn(e) : null;
}
function As(e) {
  let t;
  let o;
  if ((e = e.__) != null && e.__c != null) {
    e.__e = null;
    e.__c.base = null;

    for (t = 0; t < e.__k.length; t++) {
      if ((o = e.__k[t]) != null && o.__e != null) {
        e.__e = e.__c.base = o.__e;
        break;
      }
    }

    return As(e);
  }
}
function Vo(e) {
  if (
    (!e.__d && (e.__d = true) && Qt.push(e) && !uo.__r++) ||
    Cr != pe.debounceRendering
  ) {
    ((Cr = pe.debounceRendering) || Rs)(uo);
  }
}
function uo() {
  let e;
  let t;
  let o;
  let r;
  let i;
  let s;
  let a;
  let c = 1;

  while (Qt.length) {
    if (Qt.length > c) {
      Qt.sort(Ss);
    }

    e = Qt.shift();
    c = Qt.length;

    if (e.__d) {
      o = undefined;
      r = undefined;
      i = (r = (t = e).__v).__e;
      s = [];
      a = [];

      t.__P &&
        (((o = Nt({}, r)).__v = r.__v + 1),
        pe.vnode && pe.vnode(o),
        nr(
          t.__P,
          o,
          r,
          t.__n,
          t.__P.namespaceURI,
          32 & r.__u ? [i] : null,
          s,
          i ?? dn(r),
          !!(32 & r.__u),
          a
        ),
        (o.__v = r.__v),
        (o.__.__k[o.__i] = o),
        $s(s, o, a),
        (r.__e = r.__ = null),
        o.__e != i && As(o));
    }
  }

  uo.__r = 0;
}
function Ms(e, t, o, r, i, s, a, c, u, l, h) {
  let d;
  let f;
  let m;
  let N;
  let w;
  let v;
  let p;
  const y = (r && r.__k) || Ps;
  const t_length = t.length;
  u = Gi(o, t, y, u, t_length);

  for (d = 0; d < t_length; d++) {
    if ((m = o.__k[d]) != null) {
      f = m.__i == -1 ? An : y[m.__i] || An;
      m.__i = d;
      v = nr(e, m, f, i, s, a, c, u, l, h);
      N = m.__e;

      m.ref &&
        f.ref != m.ref &&
        (f.ref && or(f.ref, null, m), h.push(m.ref, m.__c || N, m));

      w == null && N != null && (w = N);

      (p = !!(4 & m.__u)) || f.__k === m.__k
        ? (u = Ls(m, u, e, p))
        : typeof m.type == "function" && v !== undefined
        ? (u = v)
        : N && (u = N.nextSibling);

      m.__u &= -7;
    }
  }

  o.__e = w;
  return u;
}
function Gi(e, t, o, r, i) {
  let s;
  let a;
  let c;
  let u;
  let l;
  const o_length = o.length;
  let d = o_length;
  let f = 0;
  e.__k = new Array(i);

  for (s = 0; s < i; s++) {
    if ((a = t[s]) != null && typeof a != "boolean" && typeof a != "function") {
      typeof a == "string" ||
      typeof a == "number" ||
      typeof a == "number" ||
      typeof a == "bigint" ||
      typeof a == "number" ||
      typeof a == "bigint" ||
      a.constructor == String
        ? (a = e.__k[s] = Sn(null, a, null, null, null))
        : Array_isArray(a)
        ? (a = e.__k[s] = Sn(Se, { children: a }, null, null, null))
        : a.constructor === undefined && a.__b > 0
        ? (a = e.__k[s] =
            Sn(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v))
        : (e.__k[s] = a);

      u = s + f;
      a.__ = e;
      a.__b = e.__b + 1;
      c = null;
      (l = a.__i = Zi(a, o, u, d)) != -1 && (d--, (c = o[l]) && (c.__u |= 2));

      c == null || c.__v == null
        ? (l == -1 && (i > o_length ? f-- : i < o_length && f++),
          typeof a.type != "function" && (a.__u |= 4))
        : l != u &&
          (l == u - 1
            ? f--
            : l == u + 1
            ? f++
            : (l > u ? f-- : f++, (a.__u |= 4)));
    } else {
      e.__k[s] = null;
    }
  }

  if (d) {
    for (s = 0; s < o_length; s++) {
      if ((c = o[s]) != null && (2 & c.__u) == 0) {
        c.__e == r && (r = dn(c));
        Ds(c, c);
      }
    }
  }
  return r;
}
function Ls(e, t, o, r) {
  let i;
  let s;
  if (typeof e.type == "function") {
    i = e.__k;

    for (s = 0; i && s < i.length; s++) {
      if (i[s]) {
        i[s].__ = e;
        t = Ls(i[s], t, o, r);
      }
    }

    return t;
  }

  if (e.__e != t) {
    r &&
      (t && e.type && !t.parentNode && (t = dn(e)),
      o.insertBefore(e.__e, t || null));

    t = e.__e;
  }

  do {
    t = t && t.nextSibling;
  } while (t != null && t.nodeType == 8);
  return t;
}
function gt(e, t) {
  t = t || [];

  if (e != null && typeof e != "boolean") {
    if (Array_isArray(e)) {
      e.some((o) => {
        gt(o, t);
      });
    } else {
      t.push(e);
    }
  }

  return t;
}
function Zi(e, t, o, r) {
  let i;
  let s;
  let a;

  const { key, type } = e;

  let t_o = t[o];
  const h = t_o != null && (2 & t_o.__u) == 0;
  if (
    (t_o === null && key == null) ||
    (h && key == t_o.key && type == t_o.type)
  ) {
    return o;
  }
  if (r > (h ? 1 : 0)) {
    i = o - 1;

    for (s = o + 1; i >= 0 || s < t.length; ) {
      if (
        (t_o = t[(a = i >= 0 ? i-- : s++)]) != null &&
        (2 & t_o.__u) == 0 &&
        key == t_o.key &&
        type == t_o.type
      ) {
        return a;
      }
    }
  }
  return -1;
}
function Nr(e, t, o) {
  if (t[0] == "-") {
    e.setProperty(t, o ?? "");
  } else {
    e[t] = o == null ? "" : typeof o != "number" || Xi.test(t) ? o : `${o}px`;
  }
}
function zn(e, t, o, r, i) {
  let s;
  let a;
  e: if (t == "style") {
    if (typeof o == "string") {
      e.style.cssText = o;
    } else {
      if (typeof r == "string") {
        e.style.cssText = r = "";
      }

      if (r) {
        for (t in r) {
          if (!o || t in o) {
            Nr(e.style, t, "");
          }
        }
      }

      if (o) {
        for (t in o) {
          if (!r || o[t] != r[t]) {
            Nr(e.style, t, o[t]);
          }
        }
      }
    }
  } else if (t[0] == "o" && t[1] == "n") {
    s = t != (t = t.replace(Is, "$1"));
    a = t.toLowerCase();

    t =
      a in e || t == "onFocusOut" || t == "onFocusOut" || t == "onFocusIn"
        ? a.slice(2)
        : t.slice(2);

    if (!e.l) {
      e.l = {};
    }

    e.l[t + s] = o;

    if (o) {
      if (r) {
        o.u = r.u;
      } else {
        o.u = er;
        e.addEventListener(t, s ? Wo : Ho, s);
      }
    } else {
      e.removeEventListener(t, s ? Wo : Ho, s);
    }
  } else {
    if (i == "http://www.w3.org/2000/svg") {
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
        e[t] = o ?? "";
        break e;
      } catch {}
    }

    if (typeof o != "function") {
      if (o == null || (o === false && t[4] != "-")) {
        e.removeAttribute(t);
      } else {
        e.setAttribute(t, t == "popover" && o == 1 ? "" : o);
      }
    }
  }
}
function br(e) {
  return function (t) {
    if (this.l) {
      const o = this.l[t.type + e];
      if (t.t == null) {
        t.t = er++;
      } else if (t.t < o.u) {
        return;
      }
      return o(pe.event ? pe.event(t) : t);
    }
  };
}
function nr(e, t, o, r, i, s, a, c, u, l) {
  let h;
  let d;
  let f;
  let m;
  let N;
  let w;
  let v;
  let p;
  let y;
  let T;
  let g;
  let b;
  let S;
  let R;
  let k;
  let _;
  let P;
  const t_type = t.type;
  if (t.constructor !== undefined) {
    return null;
  }

  if (128 & o.__u) {
    u = !!(32 & o.__u);
    s = [(c = t.__e = o.__e)];
  }

  if ((h = pe.__b)) {
    h(t);
  }

  e: if (typeof t_type == "function") {
    try {
      p = t.props;
      y = "prototype" in t_type && t_type.prototype.render;
      T = (h = t_type.contextType) && r[h.__c];
      g = h ? (T ? T.props.value : h.__) : r;

      if (o.__c) {
        v = (d = t.__c = o.__c).__ = d.__E;
      } else {
        y
          ? (t.__c = d = new t_type(p, g))
          : ((t.__c = d = new pt(p, g)),
            (d.constructor = t_type),
            (d.render = Ki));

        T && T.sub(d);
        d.state || (d.state = {});
        d.__n = r;
        f = d.__d = true;
        d.__h = [];
        d._sb = [];
      }

      if (y && d.__s == null) {
        d.__s = d.state;
      }

      if (y && t_type.getDerivedStateFromProps != null) {
        d.__s == d.state && (d.__s = Nt({}, d.__s));
        Nt(d.__s, t_type.getDerivedStateFromProps(p, d.__s));
      }

      m = d.props;
      N = d.state;
      d.__v = t;

      if (f) {
        if (
          y &&
          t_type.getDerivedStateFromProps == null &&
          d.componentWillMount != null
        ) {
          d.componentWillMount();
        }

        if (y && d.componentDidMount != null) {
          d.__h.push(d.componentDidMount);
        }
      } else {
        if (
          y &&
          t_type.getDerivedStateFromProps == null &&
          p !== m &&
          d.componentWillReceiveProps != null
        ) {
          d.componentWillReceiveProps(p, g);
        }

        if (
          t.__v == o.__v ||
          (!d.__e &&
            d.shouldComponentUpdate != null &&
            d.shouldComponentUpdate(p, d.__s, g) === false)
        ) {
          if (t.__v != o.__v) {
            d.props = p;
            d.state = d.__s;
            d.__d = false;
          }

          t.__e = o.__e;
          t.__k = o.__k;

          t.__k.some((F) => {
            if (F) {
              F.__ = t;
            }
          });

          for (b = 0; b < d._sb.length; b++) {
            d.__h.push(d._sb[b]);
          }

          d._sb = [];

          if (d.__h.length) {
            a.push(d);
          }

          break e;
        }

        if (d.componentWillUpdate != null) {
          d.componentWillUpdate(p, d.__s, g);
        }

        if (y && d.componentDidUpdate != null) {
          d.__h.push(() => {
            d.componentDidUpdate(m, N, w);
          });
        }
      }

      d.context = g;
      d.props = p;
      d.__P = e;
      d.__e = false;
      S = pe.__r;
      R = 0;

      if (y) {
        d.state = d.__s;
        d.__d = false;

        if (S) {
          S(t);
        }

        h = d.render(d.props, d.state, d.context);

        for (k = 0; k < d._sb.length; k++) {
          d.__h.push(d._sb[k]);
        }

        d._sb = [];
      } else {
        do {
          d.__d = false;

          if (S) {
            S(t);
          }

          h = d.render(d.props, d.state, d.context);
          d.state = d.__s;
        } while (d.__d && ++R < 25);
      }

      d.state = d.__s;

      if (d.getChildContext != null) {
        r = Nt(Nt({}, r), d.getChildContext());
      }

      if (y && !f && d.getSnapshotBeforeUpdate != null) {
        w = d.getSnapshotBeforeUpdate(m, N);
      }

      _ = h;

      if (h != null && h.type === Se && h.key == null) {
        _ = Os(h.props.children);
      }

      c = Ms(e, Array_isArray(_) ? _ : [_], t, o, r, i, s, a, c, u, l);
      d.base = t.__e;
      t.__u &= -161;

      if (d.__h.length) {
        a.push(d);
      }

      if (v) {
        d.__E = d.__ = null;
      }
    } catch (F) {
      t.__v = null;

      if (u || s != null) {
        if (F.then) {
          for (
            t.__u |= u ? 160 : 128;
            c && c.nodeType == 8 && c.nextSibling;

          ) {
            c = c.nextSibling;
          }
          s[s.indexOf(c)] = null;
          t.__e = c;
        } else {
          for (P = s.length; P--; ) {
            tr(s[P]);
          }
          jo(t);
        }
      } else {
        t.__e = o.__e;
        t.__k = o.__k;

        if (!F.then) {
          jo(t);
        }
      }

      pe.__e(F, t, o);
    }
  } else {
    if (s == null && t.__v == o.__v) {
      t.__k = o.__k;
      t.__e = o.__e;
    } else {
      c = t.__e = qi(o.__e, t, o, r, i, s, a, u, l);
    }
  }

  if ((h = pe.diffed)) {
    h(t);
  }

  return 128 & t.__u || c;
}
function jo(e) {
  if (e && e.__c) {
    e.__c.__e = true;
  }

  if (e && e.__k) {
    e.__k.forEach(jo);
  }
}
function $s(e, t, o) {
  for (let r = 0; r < o.length; r++) {
    or(o[r], o[++r], o[++r]);
  }

  if (pe.__c) {
    pe.__c(t, e);
  }

  e.some((i) => {
    try {
      e = i.__h;
      i.__h = [];

      e.some((s) => {
        s.call(i);
      });
    } catch (s) {
      pe.__e(s, i.__v);
    }
  });
}
function Os(e) {
  return typeof e != "object" || e == null || (e.__b && e.__b > 0)
    ? e
    : Array_isArray(e)
    ? e.map(Os)
    : Nt({}, e);
}
function qi(e, t, o, r, i, s, a, c, u) {
  let l;
  let h;
  let d;
  let f;
  let m;
  let N;
  let w;
  let v = o.props || An;

  const { props, type } = t;

  type == "svg"
    ? (i = "http://www.w3.org/2000/svg")
    : type == "math"
    ? (i = "http://www.w3.org/1998/Math/MathML")
    : i || "http://www.w3.org/1999/xhtml";

  if (s != null) {
    for (l = 0; l < s.length; l++) {
      if (
        (m = s[l]) &&
        "setAttribute" in m == !!type &&
        (type ? m.localName == type : m.nodeType == 3)
      ) {
        e = m;
        s[l] = null;
        break;
      }
    }
  }

  if (e == null) {
    if (type == null) {
      return document.createTextNode(props);
    }
    e = document.createElementNS(i, type, props.is && props);

    if (c) {
      pe.__m && pe.__m(t, s);
      c = false;
    }

    s = null;
  }
  if (type == null) {
    if (v !== props && (!c || e.data != props)) {
      e.data = props;
    }
  } else {
    s = s && On.call(e.childNodes);

    if (!c && s != null) {
      v = {};

      for (l = 0; l < e.attributes.length; l++) {
        v[(m = e.attributes[l]).name] = m.value;
      }
    }

    for (l in v) {
      m = v[l];

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
          zn(e, l, null, m, i);
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
          N = m;
          break;
        case "checked":
          w = m;
          break;
        default:
          zn(e, l, m, v[l], i);
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

      Ms(
        t.type == "template" ? e.content : e,
        Array_isArray(f) ? f : [f],
        t,
        o,
        r,
        type == "foreignObject" ? "http://www.w3.org/1999/xhtml" : i,
        s,
        a,
        s ? s[0] : o.__k && dn(o, 0),
        c,
        u
      );

      if (s != null) {
        for (l = s.length; l--; ) {
          tr(s[l]);
        }
      }
    }

    if (!c) {
      l = "value";

      type == "progress" && N == null
        ? e.removeAttribute("value")
        : N != null &&
          (N !== e[l] ||
            (type == "progress" && !N) ||
            (type == "option" && N != v[l])) &&
          zn(e, l, N, v[l], i);

      l = "checked";
      w != null && w != e[l] && zn(e, l, w, v[l], i);
    }
  }
  return e;
}
function or(e, t, o) {
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
  } catch (i) {
    pe.__e(i, o);
  }
}
function Ds(e, t, o) {
  let r;
  let i;

  if (pe.unmount) {
    pe.unmount(e);
  }

  if ((r = e.ref)) {
    if (!r.current || r.current == e.__e) {
      or(r, null, t);
    }
  }

  if ((r = e.__c) != null) {
    if (r.componentWillUnmount) {
      try {
        r.componentWillUnmount();
      } catch (s) {
        pe.__e(s, t);
      }
    }
    r.base = null;
    r.__P = null;
  }

  if ((r = e.__k)) {
    for (i = 0; i < r.length; i++) {
      if (r[i]) {
        Ds(r[i], t, o || typeof e.type != "function");
      }
    }
  }

  if (!o) {
    tr(e.__e);
  }

  e.__c = undefined;
  e.__ = undefined;
  e.__e = undefined;
}
function Ki(e, t, o) {
  return this.constructor(e, o);
}
function Mn(e, t, o) {
  let r;
  let i;
  let s;
  let a;

  if (t == document) {
    t = document.documentElement;
  }

  if (pe.__) {
    pe.__(e, t);
  }

  i = (r = typeof o == "function") ? null : (o && o.__k) || t.__k;
  s = [];
  a = [];

  nr(
    t,
    (e = ((!r && o) || t).__k = Tt(Se, null, [e])),
    i || An,
    An,
    t.namespaceURI,
    !r && o ? [o] : i ? null : t.firstChild ? On.call(t.childNodes) : null,
    s,
    !r && o ? o : i ? i.__e : t.firstChild,
    r,
    a
  );

  $s(s, e, a);
}
function Bs(e, t) {
  Mn(e, t, Bs);
}
function Us(e, t, o) {
  let r;
  let i;
  let s;
  let a;
  const c = Nt({}, e.props);

  if (e.type && e.type.defaultProps) {
    a = e.type.defaultProps;
  }

  for (s in t) {
    if (s == "key") {
      r = t[s];
    } else if (s == "ref") {
      i = t[s];
    } else {
      c[s] = t[s] === undefined && a != null ? a[s] : t[s];
    }
  }

  if (arguments.length > 2) {
    c.children = arguments.length > 3 ? On.call(arguments, 2) : o;
  }

  return Sn(e.type, c, r || e.key, i || e.ref, null);
}
function fn(e) {
  function t(o) {
    if (!this.getChildContext) {
      r = new Set();
      i = {};
      i[t.__c] = this;
      this.getChildContext = () => i;

      this.componentWillUnmount = () => {
        r = null;
      };

      this.shouldComponentUpdate = function (s) {
        if (this.props.value != s.value) {
          r.forEach((a) => {
            a.__e = true;
            Vo(a);
          });
        }
      };

      this.sub = (s) => {
        r.add(s);
        const s_componentWillUnmount = s.componentWillUnmount;
        s.componentWillUnmount = () => {
          if (r) {
            r.delete(s);
          }

          if (s_componentWillUnmount) {
            s_componentWillUnmount.call(s);
          }
        };
      };
    }

    return o.children;
  }
  t.__c = `__cC${xs++}`;
  t.__ = e;
  t.Provider = t;
  t.__l = t;

  (t.Consumer = (o, r) => o.children(r)).contextType = t;

  return t;
}
On = Ps.slice;

pe = {
  __e(e, t, o, r) {
    let i;
    let s;
    let a;

    while ((t = t.__)) {
      if ((i = t.__c) && !i.__) {
        try {
          if ((s = i.constructor) && s.getDerivedStateFromError != null) {
            i.setState(s.getDerivedStateFromError(e));
            a = i.__d;
          }

          if (i.componentDidCatch != null) {
            i.componentDidCatch(e, r || {});
            a = i.__d;
          }

          if (a) {
            return (i.__E = i);
          }
        } catch (c) {
          e = c;
        }
      }
    }

    throw e;
  },
};

Es = 0;

pt.prototype.render = Se;
Qt = [];

Rs =
  typeof Promise == "function"
    ? Promise.prototype.then.bind(Promise.resolve())
    : setTimeout;

Ss = (e, t) => e.__v.__b - t.__v.__b;

uo.__r = 0;
Is = /(PointerCapture)$|Capture$/i;
er = 0;
Ho = br(false);
Wo = br(true);
xs = 0;
let Ji = 0;
function n(e, t, o, r, i, s) {
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
    key: o,
    ref: a,
    __k: null,
    __: null,
    __b: 0,
    __e: null,
    __c: null,
    constructor: undefined,
    __v: --Ji,
    __i: -1,
    __u: 0,
    __source: i,
    __self: s,
  };
  if (typeof e == "function" && (a = e.defaultProps)) {
    for (c in a) {
      if (u[c] === undefined) {
        u[c] = a[c];
      }
    }
  }

  if (pe.vnode) {
    pe.vnode(l);
  }

  return l;
}
let Ft;
let xe;
let ko;
let Tr;
let hn = 0;
const Fs = [];
const $e = pe;

const { __b, __r, diffed, __c, unmount, __ } = $e;

function mn(e, t) {
  if ($e.__h) {
    $e.__h(xe, e, hn || t);
  }

  hn = 0;
  const o = xe.__H || (xe.__H = { __: [], __h: [] });

  if (e >= o.__.length) {
    o.__.push({});
  }

  return o.__[e];
}
function I(e) {
  hn = 1;
  return rr(Vs, e);
}
function rr(e, t, o) {
  const r = mn(Ft++, 2);
  r.t = e;

  if (
    !r.__c &&
    ((r.__ = [
      o ? o(t) : Vs(undefined, t),
      (c) => {
        const u = r.__N ? r.__N[0] : r.__[0];
        const l = r.t(u, c);

        if (u !== l) {
          r.__N = [l, r.__[1]];
          r.__c.setState({});
        }
      },
    ]),
    (r.__c = xe),
    !xe.__f)
  ) {
    const i = function (c, u, l) {
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
    xe.__f = true;

    var { shouldComponentUpdate, componentWillUpdate } = xe;

    xe.componentWillUpdate = function (c, u, l) {
      if (this.__e) {
        const h = shouldComponentUpdate;
        shouldComponentUpdate = undefined;
        i(c, u, l);
        shouldComponentUpdate = h;
      }

      if (componentWillUpdate) {
        componentWillUpdate.call(this, c, u, l);
      }
    };

    xe.shouldComponentUpdate = i;
  }

  return r.__N || r.__;
}
function W(e, t) {
  const o = mn(Ft++, 3);

  if (!$e.__s && sr(o.__H, t)) {
    o.__ = e;
    o.u = t;
    xe.__H.__h.push(o);
  }
}
function Bn(e, t) {
  const o = mn(Ft++, 4);

  if (!$e.__s && sr(o.__H, t)) {
    o.__ = e;
    o.u = t;
    xe.__h.push(o);
  }
}
function x(e) {
  hn = 5;

  return Re(
    () => ({
      current: e,
    }),
    []
  );
}
function pn(e, t, o) {
  hn = 6;

  Bn(
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
    o == null ? o : o.concat(e)
  );
}
function Re(e, t) {
  const o = mn(Ft++, 7);

  if (sr(o.__H, t)) {
    o.__ = e();
    o.__H = t;
    o.__h = e;
  }

  return o.__;
}
function E(e, t) {
  hn = 8;

  return Re(() => e, t);
}
function go(e) {
  const t = xe.context[e.__c];
  const o = mn(Ft++, 9);
  o.c = e;
  return t ? (o.__ == null && ((o.__ = true), t.sub(xe)), t.props.value) : e.__;
}
function Hs(e, t) {
  if ($e.useDebugValue) {
    $e.useDebugValue(t ? t(e) : e);
  }
}
function Ws() {
  const e = mn(Ft++, 11);
  if (!e.__) {
    for (var t = xe.__v; t !== null && !t.__m && t.__ !== null; ) {
      t = t.__;
    }
    const o = t.__m || (t.__m = [0, 0]);
    e.__ = `P${o[0]}-${o[1]++}`;
  }
  return e.__;
}
function Qi() {
  for (let e; (e = Fs.shift()); ) {
    if (e.__P && e.__H) {
      try {
        e.__H.__h.forEach(io);
        e.__H.__h.forEach(zo);
        e.__H.__h = [];
      } catch (t) {
        e.__H.__h = [];
        $e.__e(t, e.__v);
      }
    }
  }
}

$e.__b = (e) => {
  xe = null;

  if (__b) {
    __b(e);
  }
};

$e.__ = (e, t) => {
  if (e && t.__k && t.__k.__m) {
    e.__m = t.__k.__m;
  }

  if (__) {
    __(e, t);
  }
};

$e.__r = (e) => {
  if (__r) {
    __r(e);
  }

  Ft = 0;
  const t = (xe = e.__c).__H;

  if (t) {
    if (ko === xe) {
      t.__h = [];
      xe.__h = [];

      t.__.forEach((o) => {
        if (o.__N) {
          o.__ = o.__N;
        }

        o.u = undefined;
        o.__N = undefined;
      });
    } else {
      t.__h.forEach(io);
      t.__h.forEach(zo);
      t.__h = [];
      Ft = 0;
    }
  }

  ko = xe;
};

$e.diffed = (e) => {
  if (diffed) {
    diffed(e);
  }

  const e_c = e.__c;

  if (e_c && e_c.__H) {
    e_c.__H.__h.length &&
      ((Fs.push(e_c) !== 1 && Tr === $e.requestAnimationFrame) ||
        ((Tr = $e.requestAnimationFrame) || ea)(Qi));

    e_c.__H.__.forEach((o) => {
      if (o.u) {
        o.__H = o.u;
      }

      o.u = undefined;
    });
  }

  ko = null;
  xe = null;
};

$e.__c = (e, t) => {
  t.some((o) => {
    try {
      o.__h.forEach(io);

      o.__h = o.__h.filter((r) => !r.__ || zo(r));
    } catch (r) {
      t.some((i) => {
        if (i.__h) {
          i.__h = [];
        }
      });

      t = [];
      $e.__e(r, o.__v);
    }
  });

  if (__c) {
    __c(e, t);
  }
};

$e.unmount = (e) => {
  if (unmount) {
    unmount(e);
  }

  let t;
  const e_c = e.__c;

  if (e_c && e_c.__H) {
    e_c.__H.__.forEach((r) => {
      try {
        io(r);
      } catch (i) {
        t = i;
      }
    });

    e_c.__H = undefined;
    t && $e.__e(t, e_c.__v);
  }
};

const Pr = typeof requestAnimationFrame == "function";
function ea(e) {
  let t;

  const o = () => {
    clearTimeout(r);

    if (Pr) {
      cancelAnimationFrame(t);
    }

    setTimeout(e);
  };

  var r = setTimeout(o, 35);

  if (Pr) {
    t = requestAnimationFrame(o);
  }
}
function io(e) {
  const t = xe;
  const e_c = e.__c;

  if (typeof e_c == "function") {
    e.__c = undefined;
    e_c();
  }

  xe = t;
}
function zo(e) {
  const t = xe;
  e.__c = e.__();
  xe = t;
}
function sr(e, t) {
  return (
    !e ||
    e.length !== t.length ||
    e.length !== t.length ||
    t.some((o, r) => o !== e[r])
  );
}
function Vs(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function js(e, t) {
  for (const o in t) {
    e[o] = t[o];
  }
  return e;
}
function Xo(e, t) {
  for (const o in e) {
    if (o !== "__source" && !(o in t)) {
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
function zs(e, t) {
  const o = t();
  const r = I({ t: { __: o, u: t } });
  const i = r[0].t;
  const [, s] = r;

  Bn(() => {
    i.__ = o;
    i.u = t;

    if (Eo(i)) {
      s({ t: i });
    }
  }, [e, o, t]);

  W(() => {
    if (Eo(i)) {
      s({ t: i });
    }

    return e(() => {
      if (Eo(i)) {
        s({ t: i });
      }
    });
  }, [e]);

  return o;
}
function Eo(e) {
  let t;
  let o;

  const { u, __: _ } = e;

  try {
    const s = u();
    return !(
      ((t = _) === (o = s) && (t !== 0 || 1 / t == 1 / o)) ||
      (t != t && o != o)
    );
  } catch {
    return true;
  }
}
function Xs(e) {
  e();
}
function Ys(e) {
  return e;
}
function Gs() {
  return [false, Xs];
}
const Zs = Bn;

class Yo {
  constructor(e, t) {
    this.props = e;
    this.context = t;
  }

  shouldComponentUpdate(e, t) {
    return Xo(this.props, e) || Xo(this.state, t);
  }
}

function qs(e, t) {
  function o(i) {
    const s = this.props.ref;
    const a = s == i.ref;

    if (!a && s) {
      if (s.call) {
        s(null);
      } else {
        s.current = null;
      }
    }

    if (t) {
      if (!!t(this.props, i)) {
        return !a;
      }
    }

    return Xo(this.props, i);
  }
  function r(i) {
    this.shouldComponentUpdate = o;
    return Tt(e, i);
  }
  r.displayName = `Memo(${e.displayName || e.name})`;
  r.prototype.isReactComponent = true;
  r.__f = true;
  r.type = e;
  return r;
}
(Yo.prototype = new pt()).isPureReactComponent = true;

const {
  __b: _b,
  __e,
  unmount: unmount_2,
  event,
  vnode,
  __r: _r_1,
  diffed: diffed_2,
} = pe;

pe.__b = (e) => {
  if (e.type && e.type.__f && e.ref) {
    e.props.ref = e.ref;
    e.ref = null;
  }

  if (_b) {
    _b(e);
  }
};
const ta =
  (typeof Symbol !== "undefined" &&
    Symbol.for &&
    Symbol.for("react.forward_ref")) ||
  3911;
function Un(e) {
  class t {
    constructor(o) {
      const r = js({}, o);
      delete r.ref;
      return e(r, o.ref || null);
    }

    static componentWillUnmount() {
      Mn(null, t.v);
      t.v = null;
      t.h = null;
    }
  }

  t.$$typeof = ta;
  t.render = e;
  t.prototype.isReactComponent = true;
  t.__f = true;
  t.displayName = `ForwardRef(${e.displayName || e.name})`;
  return t;
}

const Mr = (e, t) => e == null || gt(gt(e).map(t));

const na = {
  map: Mr,
  forEach: Mr,
  count(e) {
    return e ? gt(e).length : 0;
  },
  only(e) {
    const t = gt(e);
    if (t.length !== 1) {
      throw "Children.only";
    }
    return t[0];
  },
  toArray: gt,
};

pe.__e = (e, t, o, r) => {
  if (e.then) {
    let i;
    for (let s = t; (s = s.__); ) {
      if ((i = s.__c) && i.__c) {
        if (t.__e == null) {
          t.__e = o.__e;
          t.__k = o.__k;
        }

        return i.__c(e, t);
      }
    }
  }
  __e(e, t, o, r);
};
function Ks(e, t, o) {
  if (e) {
    e.__c &&
      e.__c.__H &&
      (e.__c.__H.__.forEach((r) => {
        if (typeof r.__c == "function") {
          r.__c();
        }
      }),
      (e.__c.__H = null));

    (e = js({}, e)).__c != null &&
      (e.__c.__P === o && (e.__c.__P = t), (e.__c.__e = true), (e.__c = null));

    e.__k = e.__k && e.__k.map((r) => Ks(r, t, o));
  }

  return e;
}
function Js(e, t, o) {
  if (e && o) {
    e.__v = null;

    e.__k = e.__k && e.__k.map((r) => Js(r, t, o));

    e.__c &&
      e.__c.__P === t &&
      (e.__e && o.appendChild(e.__e), (e.__c.__e = true), (e.__c.__P = o));
  }

  return e;
}

class In {
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
        const o = document.createElement("div");
        const r = this.__v.__k[0].__c;
        this.__v.__k[0] = Ks(this.__b, o, (r.__O = r.__P));
      }
      this.__b = null;
    }
    const i = t.__a && Tt(Se, null, e.fallback);

    if (i) {
      i.__u &= -33;
    }

    return [Tt(Se, null, t.__a || e.children), i];
  }
}

function Qs(e) {
  const t = e.__.__c;
  return t && t.__a && t.__a(e);
}
function Pe(e) {
  let t;
  let o;
  let r;
  let i = null;
  function s(a) {
    if (!t) {
      e().then(
        (c) => {
          if (c) {
            i = c.default || c;
          }

          r = true;
        },
        (c) => {
          o = c;
          r = true;
        }
      );
    }

    if (o) {
      throw o;
    }

    if (!r) {
      throw t;
    }
    return i ? Tt(i, a) : null;
  }
  s.displayName = "Lazy";
  s.__f = true;
  return s;
}

class Tn {
  constructor() {
    this.i = null;
    this.l = null;
  }

  render(e) {
    this.i = null;
    this.l = new Map();
    const t = gt(e.children);

    if (e.revealOrder && e.revealOrder[0] === "b") {
      t.reverse();
    }

    for (let o = t.length; o--; ) {
      this.l.set(t[o], (this.i = [1, 0, this.i]));
    }
    return e.children;
  }
}

pe.unmount = (e) => {
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

(In.prototype = new pt()).__c = function (e, t) {
  const t_c = t.__c;
  const r = this;

  if (r.o == null) {
    r.o = [];
  }

  r.o.push(t_c);
  const i = Qs(r.__v);

  const a = () => {
    if (!s) {
      s = true;
      t_c.__R = null;
      i ? i(c) : c();
    }
  };

  t_c.__R = a;
  var c = () => {
    if (!--r.__u) {
      if (r.state.__a) {
        const u = r.state.__a;
        r.__v.__k[0] = Js(u, u.__c.__P, u.__c.__O);
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

const $r = (e, t, o) => {
  if (++o[1] === o[0]) {
    e.l.delete(t);
  }

  if (e.props.revealOrder && (e.props.revealOrder[0] !== "t" || !e.l.size)) {
    for (o = e.i; o; ) {
      while (o.length > 3) {
        o.pop()();
      }

      if (o[1] < o[0]) {
        break;
      }
      e.i = o = o[2];
    }
  }
};
function ra(e) {
  this.getChildContext = () => e.context;

  return e.children;
}
function sa(e) {
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
      insertBefore(i, s) {
        this.childNodes.push(i);
        t.h.insertBefore(i, s);
      },
      removeChild(i) {
        this.childNodes.splice(this.childNodes.indexOf(i) >>> 1, 1);
        t.h.removeChild(i);
      },
    };
  }

  Mn(Tt(ra, { context: t.context }, e.__v), t.v);
}
function wt(e, t) {
  const o = Tt(sa, { __v: e, h: t });
  o.containerInfo = t;
  return o;
}

(Tn.prototype = new pt()).__a = function (e) {
  const t = this;
  const o = Qs(t.__v);
  const r = t.l.get(e);
  r[0]++;

  return (i) => {
    const s = () => {
      if (t.props.revealOrder) {
        r.push(i);
        $r(t, e, r);
      } else {
        i();
      }
    };

    if (o) {
      o(s);
    } else {
      s();
    }
  };
};

Tn.prototype.componentDidUpdate = Tn.prototype.componentDidMount = function () {
  const e = this;
  this.l.forEach((t, o) => {
    $r(e, o, t);
  });
};

const ei =
  (typeof Symbol !== "undefined" &&
    Symbol.for &&
    Symbol.for("react.element")) ||
  60103;

const ia =
  /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/;

const aa = /^on(Ani|Tra|Tou|BeforeInp|Compo)/;
const ca = /[A-Z0-9]/g;
const la = typeof document !== "undefined";

const ua = (e) =>
  (typeof Symbol !== "undefined" && typeof Symbol() == "symbol"
    ? /fil|che|rad/
    : /fil|che|ra/
  ).test(e);

function ti(e, t, o) {
  if (t.__k == null) {
    t.textContent = "";
  }

  Mn(e, t);

  if (typeof o == "function") {
    o();
  }

  return e ? e.__c : null;
}
function da(e, t, o) {
  Bs(e, t);

  if (typeof o == "function") {
    o();
  }

  return e ? e.__c : null;
}
pt.prototype.isReactComponent = {};

[
  "componentWillMount",
  "componentWillReceiveProps",
  "componentWillUpdate",
].forEach((e) => {
  Object.defineProperty(pt.prototype, e, {
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

function ha() {}
function fa() {
  return this.cancelBubble;
}
function ma() {
  return this.defaultPrevented;
}
pe.event = (e) => {
  if (event) {
    e = event(e);
  }

  e.persist = ha;
  e.isPropagationStopped = fa;
  e.isDefaultPrevented = ma;
  e.nativeEvent = e;
  return e.nativeEvent;
};
let ir;

const pa = {
  enumerable: false,
  configurable: true,
  get() {
    return this.class;
  },
};

pe.vnode = (e) => {
  if (typeof e.type == "string") {
    ((t) => {
      const { props, type } = t;

      const i = {};
      const s = !type.includes("-");
      for (let a in props) {
        let props_a = props[a];
        if (
          !(
            (a === "value" && "defaultValue" in props && props_a == null) ||
            (la && a === "children" && type === "noscript") ||
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
              ua(props.type)
            ) {
              if (u === "onfocus") {
                a = "onfocusin";
              } else if (u === "onblur") {
                a = "onfocusout";
              } else if (aa.test(a)) {
                a = u;
              }
            } else {
              u = a = "oninput";
            }
          } else if (s && ia.test(a)) {
            a = a.replace(ca, "-$&").toLowerCase();
          } else if (props_a === null) {
            props_a = undefined;
          }

          if (u === "oninput" && i[(a = u)]) {
            a = "oninputCapture";
          }

          i[a] = props_a;
        }
      }

      if (type == "select" && i.multiple && Array.isArray(i.value)) {
        i.value = gt(props.children).forEach((l) => {
          l.props.selected = i.value.includes(l.props.value);
        });
      }

      if (type == "select" && i.defaultValue != null) {
        i.value = gt(props.children).forEach((l) => {
          l.props.selected = i.multiple
            ? i.defaultValue.includes(l.props.value)
            : i.defaultValue == l.props.value;
        });
      }

      if (props.class && !props.className) {
        i.class = props.class;
        Object.defineProperty(i, "className", pa);
      } else if (
        (props.className && !props.class) ||
        (props.class && props.className)
      ) {
        i.class = i.className = props.className;
      }

      t.props = i;
    })(e);
  }

  e.$$typeof = ei;

  if (vnode) {
    vnode(e);
  }
};
pe.__r = (e) => {
  if (_r_1) {
    _r_1(e);
  }

  ir = e.__c;
};
pe.diffed = (e) => {
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

  ir = null;
};
const ga = {
  ReactCurrentDispatcher: {
    current: {
      readContext(e) {
        return ir.__n[e.__c].props.value;
      },
      useCallback: E,
      useContext: go,
      useDebugValue: Hs,
      useDeferredValue: Ys,
      useEffect: W,
      useId: Ws,
      useImperativeHandle: pn,
      useInsertionEffect: Zs,
      useLayoutEffect: Bn,
      useMemo: Re,
      useReducer: rr,
      useRef: x,
      useState: I,
      useSyncExternalStore: zs,
      useTransition: Gs,
    },
  },
};
function va(e) {
  return Tt.bind(null, e);
}
function vo(e) {
  return !!e && e.$$typeof === ei;
}
function wa(e) {
  return vo(e) && e.type === Se;
}
function ya(e) {
  return (
    !!e &&
    !!e.displayName &&
    (typeof e.displayName == "string" || e.displayName instanceof String) &&
    e.displayName.startsWith("Memo(")
  );
}
function _a(e) {
  return vo(e) ? Us(...arguments) : e;
}
function ni(e) {
  return !!e.__k && (Mn(null, e), true);
}
function Ca(e) {
  return (e && (e.base || (e.nodeType === 1 && e))) || null;
}

const Na = (e, t) => e(t);

const ba = (e, t) => e(t);

const oi = Se;
const Ta = vo;

const kn = {
  useState: I,
  useId: Ws,
  useReducer: rr,
  useEffect: W,
  useLayoutEffect: Bn,
  useInsertionEffect: Zs,
  useTransition: Gs,
  useDeferredValue: Ys,
  useSyncExternalStore: zs,
  startTransition: Xs,
  useRef: x,
  useImperativeHandle: pn,
  useMemo: Re,
  useCallback: E,
  useContext: go,
  useDebugValue: Hs,
  version: "18.3.1",
  Children: na,
  render: ti,
  hydrate: da,
  unmountComponentAtNode: ni,
  createPortal: wt,
  createElement: Tt,
  createContext: fn,
  createFactory: va,
  cloneElement: _a,
  createRef: Yi,
  Fragment: Se,
  isValidElement: vo,
  isElement: Ta,
  isFragment: wa,
  isMemo: ya,
  findDOMNode: Ca,
  Component: pt,
  PureComponent: Yo,
  memo: qs,
  forwardRef: Un,
  flushSync: ba,
  unstable_batchedUpdates: Na,
  StrictMode: oi,
  Suspense: In,
  SuspenseList: Tn,
  lazy: Pe,
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: ga,
};

function ka(e) {
  return {
    render(t) {
      ti(t, e);
    },
    unmount() {
      ni(e);
    },
  };
}
const Ea = "modulepreload";

const Ra = (e) => `/${e}`;

const Fr = {};

const Ae = (t, o, r) => {
  let i = Promise.resolve();
  if (o && o.length > 0) {
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
    i = u(
      o.map((l) => {
        l = Ra(l);

        if (l in Fr) {
          return;
        }

        Fr[l] = true;
        const h = l.endsWith(".css");
        const d = h ? '[rel="stylesheet"]' : "";
        if (document.querySelector(`link[href="${l}"]${d}`)) {
          return;
        }
        const f = document.createElement("link");
        f.rel = h ? "stylesheet" : Ea;

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
          return new Promise((m, N) => {
            f.addEventListener("load", m);

            f.addEventListener("error", () =>
              N(new Error(`Unable to preload CSS for ${l}`))
            );
          });
        }
      })
    );
  }
  function s(a) {
    const c = new Event("vite:preloadError", { cancelable: true });
    c.payload = a;
    window.dispatchEvent(c);

    if (!c.defaultPrevented) {
      throw a;
    }
  }
  return i.then((a) => {
    for (const c of a || []) {
      if (c.status === "rejected") {
        s(c.reason);
      }
    }
    return t().catch(s);
  });
};

const Sa = {};
function Xn(e, t) {
  for (const o in t) {
    e[o] = t[o];
  }
  return e;
}
function ri(e, t, o) {
  let r;
  const i = /(?:\?([^#]*))?(#.*)?$/;
  const s = e.match(i);
  const a = {};
  if (s && s[1]) {
    for (let c = s[1].split("&"), u = 0; u < c.length; u++) {
      const l = c[u].split("=");
      a[decodeURIComponent(l[0])] = decodeURIComponent(l.slice(1).join("="));
    }
  }
  e = Go(e.replace(i, ""));
  t = Go(t || "");
  for (let h = Math.max(e.length, t.length), d = 0; d < h; d++) {
    if (t[d] && t[d].charAt(0) === ":") {
      const f = t[d].replace(/(^:|[+*?]+$)/g, "");
      const m = (t[d].match(/[+*?]+$/) || Sa)[0] || "";
      const N = ~m.indexOf("+");
      const w = ~m.indexOf("*");
      const v = e[d] || "";
      if (!v && !w && (!m.includes("?") || N)) {
        r = false;
        break;
      }
      a[f] = decodeURIComponent(v);

      if (N || w) {
        a[f] = e.slice(d).map(decodeURIComponent).join("/");
        break;
      }
    } else if (t[d] !== e[d]) {
      r = false;
      break;
    }
  }
  return (o.default === true || r !== false) && a;
}
function Ia(e, t) {
  return e.rank < t.rank ? 1 : e.rank > t.rank ? -1 : e.index - t.index;
}
function xa(e, t) {
  e.index = t;

  e.rank = ((o) => (o.props.default ? 0 : Go(o.props.path).map(Pa).join("")))(
    e
  );

  return e.props;
}
function Go(e) {
  return e.replace(/(^\/+|\/+$)/g, "").split("/");
}
function Pa(e) {
  return e.charAt(0) == ":"
    ? 1 + "*+?".indexOf(e.charAt(e.length - 1)) || 4
    : 5;
}
const Aa = {};
const en = [];
const xn = [];
let rt = null;
const ar = { url: cr() };
const si = fn(ar);
function Fn() {
  const e = go(si);
  if (e === ar) {
    const t = I()[1];
    W(() => {
      xn.push(t);

      return () => xn.splice(xn.indexOf(t), 1);
    }, []);
  }
  return [e, $];
}
function cr() {
  let e;
  return `${
    (e =
      rt && rt.location
        ? rt.location
        : rt && rt.getCurrentLocation
        ? rt.getCurrentLocation()
        : typeof location !== "undefined"
        ? location
        : Aa).pathname || ""
  }${e.search || ""}`;
}

export function $(e, t = false) {
  if (typeof e != "string" && e.url) {
    t = e.replace;
    e = e.url;
  }

  if (
    ((o) => {
      for (let r = en.length; r--; ) {
        if (en[r].canRoute(o)) {
          return true;
        }
      }
      return false;
    })(e)
  ) {
    ((o, r = "push") => {
      if (rt && rt[r]) {
        rt[r](o);
      } else if (typeof history !== "undefined" && history[`${r}State`]) {
        history[`${r}State`](null, null, o);
      }
    })(e, t ? "replace" : "push");
  }

  return ii(e);
}

function ii(e) {
  let t = false;
  for (let o = 0; o < en.length; o++) {
    if (en[o].routeTo(e)) {
      t = true;
    }
  }
  return t;
}
function Ma(e) {
  if (e && e.getAttribute) {
    const t = e.getAttribute("href");
    const o = e.getAttribute("target");
    if (t && t.match(/^\//g) && (!o || o.match(/^_?self$/i))) {
      return $(t);
    }
  }
}
function La(e) {
  if (e.stopImmediatePropagation) {
    e.stopImmediatePropagation();
  }

  if (e.stopPropagation) {
    e.stopPropagation();
  }

  e.preventDefault();
  return false;
}
function $a(e) {
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
        if (Ma(e_target)) {
          return La(e);
        }
      }
    } while ((e_target = e_target.parentNode));
  }
}
function ai(e) {
  if (e.history) {
    rt = e.history;
  }

  this.state = { url: e.url || cr() };
}
Xn((ai.prototype = new pt()), {
  shouldComponentUpdate(e) {
    return (
      e.static !== true ||
      e.url !== this.props.url ||
      e.url !== this.props.url ||
      e.onChange !== this.props.onChange
    );
  },
  canRoute(e) {
    const t = gt(this.props.children);
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

    if (!Hr) {
      Hr = true;

      rt ||
        addEventListener("popstate", () => {
          ii(cr());
        });

      addEventListener("click", $a);
    }

    en.push(this);

    if (rt) {
      this.u = rt.listen((t) => {
        const o = t.location || t;
        e.routeTo(`${o.pathname || ""}${o.search || ""}`);
      });
    }

    this.p = false;
  },
  componentWillUnmount() {
    if (typeof this.u == "function") {
      this.u();
    }

    en.splice(en.indexOf(this), 1);
  },
  componentWillUpdate() {
    this.p = true;
  },
  componentDidUpdate() {
    this.p = false;
  },
  g(e, t) {
    e = e.filter(xa).sort(Ia);

    for (const r of e) {
      const i = ri(t, r.props.path, r.props);
      if (i) {
        return [r, i];
      }
    }
  },
  render(e, t) {
    let o;
    let r;
    const e_onChange = e.onChange;
    const t_url = t.url;
    let a = this.c;
    const c = this.g(gt(e.children), t_url);

    if (c) {
      r = Us(
        c[0],
        Xn(Xn({ url: t_url, matches: (o = c[1]) }, o), {
          key: undefined,
          ref: undefined,
        })
      );
    }

    if (t_url !== (a && a.url)) {
      Xn(
        ar,
        (a = this.c =
          {
            url: t_url,
            previous: a && a.url,
            current: r,
            path: r ? r.props.path : null,
            matches: o,
          })
      );

      a.router = this;
      a.active = r ? [r] : [];
      for (let u = xn.length; u--; ) {
        xn[u]({});
      }

      if (typeof e_onChange == "function") {
        e_onChange(a);
      }
    }

    return Tt(si.Provider, { value: a }, r);
  },
});

const Wr = (e) => {
  let t;
  const o = new Set();

  const r = (l, h) => {
    const d = typeof l == "function" ? l(t) : l;
    if (!Object.is(d, t)) {
      const f = t;

      t =
        h ?? (typeof d != "object" || d === null) ? d : Object.assign({}, t, d);

      o.forEach((m) => m(t, f));
    }
  };

  const i = () => t;

  const c = {
    setState: r,
    getState: i,
    getInitialState: () => u,
    subscribe: (l) => {
      o.add(l);

      return () => o.delete(l);
    },
  };

  const u = (t = e(r, i, c));
  return c;
};

const Oa = (e) => (e ? Wr(e) : Wr);

const Da = (e) => e;

function Ba(e, t = Da) {
  const o = kn.useSyncExternalStore(
    e.subscribe,
    kn.useCallback(() => t(e.getState()), [e, t]),
    kn.useCallback(() => t(e.getInitialState()), [e, t])
  );
  kn.useDebugValue(o);
  return o;
}

const Vr = (e) => {
  const t = Oa(e);

  const o = (r) => Ba(t, r);

  Object.assign(o, t);
  return o;
};

const Rt = (e) => (e ? Vr(e) : Vr);

function lr(e, t) {
  let o;
  try {
    o = e();
  } catch {
    return;
  }
  return {
    getItem: (i) => {
      let s;

      const a = (u) => (u === null ? null : JSON.parse(u, undefined));

      const c = (s = o.getItem(i)) != null ? s : null;
      return c instanceof Promise ? c.then(a) : a(c);
    },
    setItem: (i, s) => o.setItem(i, JSON.stringify(s, undefined)),
    removeItem: (i) => o.removeItem(i),
  };
}

const Zo = (e) => (t) => {
  try {
    const o = e(t);
    return o instanceof Promise
      ? o
      : {
          then(r) {
            return Zo(r)(o);
          },
          catch(r) {
            return this;
          },
        };
  } catch (o) {
    return {
      then(r) {
        return this;
      },
      catch(r) {
        return Zo(r)(o);
      },
    };
  }
};

const ur = (e, t) => (o, r, i) => {
  let s = {
    storage: lr(() => localStorage),
    partialize: (w) => w,
    version: 0,
    merge: (w, v) => ({
      ...v,
      ...w,
    }),
    ...t,
  };

  let a = false;
  const c = new Set();
  const u = new Set();
  let s_storage = s.storage;
  if (!s_storage) {
    return e(
      (...w) => {
        console.warn(
          `[zustand persist middleware] Unable to update item '${s.name}', the given storage is currently unavailable.`
        );

        o(...w);
      },
      r,
      i
    );
  }

  const h = () => {
    const w = s.partialize({ ...r() });
    return s_storage.setItem(s.name, { state: w, version: s.version });
  };

  const i_setState = i.setState;
  i.setState = (w, v) => {
    i_setState(w, v);
    return h();
  };
  const f = e(
    (...w) => {
      o(...w);
      return h();
    },
    r,
    i
  );
  i.getInitialState = () => f;
  let m;
  const N = () => {
    let v;
    if (!s_storage) {
      return;
    }
    a = false;

    c.forEach((y) => {
      let T;
      return y((T = r()) != null ? T : f);
    });

    const p =
      (v = s.onRehydrateStorage) == null ||
      v.call(s, (w = r()) != null ? w : f) ||
      v.call(s, (w = r()) != null ? w : f) ||
      undefined;
    return Zo(s_storage.getItem.bind(s_storage))(s.name)
      .then((y) => {
        if (y) {
          if (typeof y.version == "number" && y.version !== s.version) {
            if (s.migrate) {
              const T = s.migrate(y.state, y.version);
              return T instanceof Promise
                ? T.then((g) => [true, g])
                : [true, T];
            }
            console.error(
              "State loaded from storage couldn't be migrated since no migrate function was provided"
            );
          } else {
            return [false, y.state];
          }
        }
        return [false, undefined];
      })
      .then((y) => {
        let T;
        const [g, b] = y;
        m = s.merge(b, (T = r()) != null ? T : f);
        o(m, true);

        if (g) {
          return h();
        }
      })
      .then(() => {
        p?.(m, undefined);
        m = r();
        a = true;

        u.forEach((y) => y(m));
      })
      .catch((y) => {
        p?.(undefined, y);
      });
  };

  i.persist = {
    setOptions: (w) => {
      s = { ...s, ...w };

      if (w.storage) {
        s_storage = w.storage;
      }
    },
    clearStorage: () => {
      s_storage?.removeItem(s.name);
    },
    getOptions: () => s,
    rehydrate: () => N(),
    hasHydrated: () => a,
    onHydrate: (w) => {
      c.add(w);

      return () => {
        c.delete(w);
      };
    },
    onFinishHydration: (w) => {
      u.add(w);

      return () => {
        u.delete(w);
      };
    },
  };

  if (!s.skipHydration) {
    N();
  }

  return m || f;
};

const Fa = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";

const Ha = () => {
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

const ao = (e) => {
  const t = e === "system" ? Fa() : e;
  document.documentElement.setAttribute("data-theme", t);
};

const Wa = Rt()(
  ur(
    (e) => ({
      theme: Ha(),

      setTheme: (t) => {
        ao(t);
        e({ theme: t });
      },

      toggleTheme: () =>
        e((t) => {
          const o = t.theme === "light" ? "dark" : "light";
          ao(o);
          return { theme: o };
        }),
    }),
    {
      name: "theme-storage",
      onRehydrateStorage: () => (e) => {
        if (e?.theme) {
          ao(e.theme);
        }
      },
    }
  )
);

if (typeof window !== "undefined") {
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", () => {
      if (Wa.getState().theme === "system") {
        ao("system");
      }
    });
}

const ci = Rt((e) => ({
  isOpen: false,
  images: [],
  initialIndex: 0,
  open: (t, o = 0) => e({ isOpen: true, images: t, initialIndex: o }),
  close: () => e({ isOpen: false, images: [], initialIndex: 0 }),
}));

const et = {
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

function He(e) {
  return (
    e instanceof Error && "status" in e && "code" in e && e.name === "ApiError"
  );
}
const ke = {
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
function Va(e) {
  return "accessToken" in e;
}
function ja(e) {
  return "accessToken" in e;
}
const za = 4000; /* 4e3 */

const un = Rt((e, t) => ({
  toasts: [],

  addToast: (o) => {
    const r = `toast-${Date.now()}-${Math.random().toString(36).slice(2)}`;
    const i = o.duration ?? za;

    e((s) => ({
      toasts: [...s.toasts, { ...o, id: r, duration: i }],
    }));

    if (i > 0) {
      setTimeout(() => {
        t().removeToast(r);
      }, i);
    }

    return r;
  },

  removeToast: (o) => {
    e((r) => ({
      toasts: r.toasts.filter((i) => i.id !== o),
    }));
  },

  clearAll: () => {
    e({ toasts: [] });
  },
}));

const Ue = {
  success: (e, t) =>
    un.getState().addToast({ type: "success", message: e, duration: t }),
  error: (e, t) =>
    un.getState().addToast({ type: "error", message: e, duration: t }),
  warning: (e, t) =>
    un.getState().addToast({ type: "warning", message: e, duration: t }),
  info: (e, t) =>
    un.getState().addToast({ type: "info", message: e, duration: t }),
};

function Xa() {
  const e = "device_id";
  let t = localStorage.getItem(e);

  if (!t) {
    t = crypto.randomUUID();
    localStorage.setItem(e, t);
  }

  return t;
}
const jr = Xa();
class li {
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
    if (t.status !== et.UNAUTHORIZED) {
      if (t.code === "PHONE_VERIFICATION_REQUIRED") {
        window.dispatchEvent(new Event("phone-verification-required"));
        return;
      }
      if (t.code === "WRITE_ACCESS_RESTRICTED") {
        Ue.error("Вы не можете сделать это сегодня. Попробуйте завтра.");
        return;
      }
      Ue.error(t.message || "Произошла ошибка");
    }
  }
  buildUrl(t) {
    const o = this.baseURL.replace(/\/$/, "");
    const r = t.startsWith("/") ? t : `/${t}`;
    return `${o}${r}`;
  }
  buildHeaders(t) {
    const o = new Headers({ ...this.defaultHeaders, ...t });

    if (this.accessToken) {
      o.set("Authorization", `Bearer ${this.accessToken}`);
    }

    o.set("X-Device-Id", jr);
    return o;
  }
  async handleResponse(t) {
    if (t.status === et.NO_CONTENT) {
      return null;
    }
    let o;
    try {
      o = await t.json();
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
      const r = o;
      const r_error = r.error;
      const s = r_error && typeof r_error == "object" ? r_error : r;
      let s_errors = s.errors;
      if (s.violations && Array.isArray(s.violations)) {
        s_errors = {};
        for (const c of s.violations) {
          if (!s_errors[c.field]) {
            s_errors[c.field] = [];
          }

          s_errors[c.field].push(c.message);
        }
      }
      throw this.createApiError(
        t.status,
        s.detail ||
          s.message ||
          s.message ||
          s.title ||
          s.message ||
          s.title ||
          "Request failed",
        s.code || this.mapStatusToErrorCode(t.status),
        s_errors
      );
    }
    return o;
  }
  mapStatusToErrorCode(t) {
    switch (t) {
      case et.BAD_REQUEST: {
        return ke.BAD_REQUEST;
      }
      case et.UNAUTHORIZED: {
        return ke.UNAUTHORIZED;
      }
      case et.FORBIDDEN: {
        return ke.ACCESS_DENIED;
      }
      case et.NOT_FOUND: {
        return ke.ENTITY_NOT_FOUND;
      }
      case et.CONFLICT: {
        return ke.ENTITY_ALREADY_EXISTS;
      }
      case et.UNPROCESSABLE_ENTITY: {
        return ke.VALIDATION_ERROR;
      }
      case et.TOO_MANY_REQUESTS: {
        return ke.RATE_LIMIT_EXCEEDED;
      }
      default: {
        return ke.UNKNOWN_ERROR;
      }
    }
  }
  createApiError(t, o, r, i) {
    const s = new Error(o);
    s.status = t;
    s.code = r;
    s.errors = i;
    s.name = "ApiError";
    return s;
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
  async executeRequest(t, o, r, i, s = false) {
    const a = this.buildUrl(o);
    const c = this.buildHeaders(i?.headers);
    const u = new AbortController();
    const l = i?.timeout ?? this.defaultTimeout;

    const h = setTimeout(() => u.abort(), l);

    try {
      const d = await fetch(a, {
        method: t,
        headers: c,
        body: r ? JSON.stringify(r) : undefined,
        signal: u.signal,
        credentials: "include",
        ...i,
      });
      clearTimeout(h);
      const f =
        o.startsWith("/auth/") ||
        o.startsWith("/sign-") ||
        o.startsWith("/sign-") ||
        o.startsWith("/verify-") ||
        o.startsWith("/sign-") ||
        o.startsWith("/verify-") ||
        o.startsWith("/resend-") ||
        o.startsWith("/sign-") ||
        o.startsWith("/verify-") ||
        o.startsWith("/resend-") ||
        o.startsWith("/refresh") ||
        o.startsWith("/sign-") ||
        o.startsWith("/verify-") ||
        o.startsWith("/resend-") ||
        o.startsWith("/refresh") ||
        o.startsWith("/forgot-") ||
        o.startsWith("/sign-") ||
        o.startsWith("/verify-") ||
        o.startsWith("/resend-") ||
        o.startsWith("/refresh") ||
        o.startsWith("/forgot-") ||
        o.startsWith("/reset-") ||
        o.startsWith("/sign-") ||
        o.startsWith("/verify-") ||
        o.startsWith("/resend-") ||
        o.startsWith("/refresh") ||
        o.startsWith("/forgot-") ||
        o.startsWith("/reset-") ||
        o.startsWith("/login/");
      if (d.status === et.UNAUTHORIZED && !s && !f && this.accessToken) {
        const m = await this.refreshAccessToken();
        if (m) {
          this.setAccessToken(m);
          return this.executeRequest(t, o, r, i, true);
        }
        this.onUnauthorizedCallback?.();

        throw this.createApiError(
          et.UNAUTHORIZED,
          "Session expired",
          ke.UNAUTHORIZED
        );
      }
      return await this.handleResponse(d);
    } catch (d) {
      clearTimeout(h);

      if (d instanceof Error) {
        if (d.name === "AbortError") {
          const m = this.createApiError(0, "Request timeout", ke.TIMEOUT);

          if (!s) {
            this.notifyError(m);
          }

          throw m;
        }
        if (d.name === "ApiError") {
          if (!s) {
            this.notifyError(d);
          }

          throw d;
        }
        const f = this.createApiError(
          0,
          d.message || "Network error",
          ke.NETWORK_ERROR
        );

        if (!s) {
          this.notifyError(f);
        }

        throw f;
      }

      throw d;
    }
  }
  async get(t, o) {
    return this.executeRequest("GET", t, undefined, o);
  }
  async post(t, o, r) {
    return this.executeRequest("POST", t, o, r);
  }
  async put(t, o, r) {
    return this.executeRequest("PUT", t, o, r);
  }
  async patch(t, o, r) {
    return this.executeRequest("PATCH", t, o, r);
  }
  async delete(t, o) {
    return this.executeRequest("DELETE", t, undefined, o);
  }
  async head(t, o) {
    const r = this.buildUrl(t);
    const i = this.buildHeaders(o?.headers);
    const s = new AbortController();
    const a = o?.timeout ?? this.defaultTimeout;

    const c = setTimeout(() => s.abort(), a);

    try {
      const u = await fetch(r, {
        method: "HEAD",
        headers: i,
        signal: s.signal,
        credentials: "include",
      });
      clearTimeout(c);
      return u.status;
    } catch (u) {
      clearTimeout(c);

      throw u instanceof Error && u.name === "AbortError"
        ? this.createApiError(0, "Request timeout", ke.TIMEOUT)
        : this.createApiError(0, "Network error", ke.NETWORK_ERROR);
    }
  }
  async uploadFormData(t, o, r, i = false) {
    const s = this.buildUrl(t);
    const a = { "X-Requested-With": "XMLHttpRequest", "X-Device-Id": jr };

    if (this.accessToken) {
      a.Authorization = `Bearer ${this.accessToken}`;
    }

    const c = new AbortController();
    const u = r?.timeout ?? this.defaultTimeout;

    const l = setTimeout(() => c.abort(), u);

    try {
      const h = await fetch(s, {
        method: "POST",
        headers: a,
        body: o,
        signal: c.signal,
        credentials: "include",
      });
      clearTimeout(l);

      if (h.status === et.UNAUTHORIZED && !i && this.accessToken) {
        const d = await this.refreshAccessToken();
        if (d) {
          this.setAccessToken(d);
          return this.uploadFormData(t, o, r, true);
        }
        this.onUnauthorizedCallback?.();

        throw this.createApiError(
          et.UNAUTHORIZED,
          "Session expired",
          ke.UNAUTHORIZED
        );
      }

      return await this.handleResponse(h);
    } catch (h) {
      clearTimeout(l);

      if (h instanceof Error) {
        if (h.name === "AbortError") {
          const f = this.createApiError(0, "Request timeout", ke.TIMEOUT);

          if (!i) {
            this.notifyError(f);
          }

          throw f;
        }
        if (h.name === "ApiError") {
          if (!i) {
            this.notifyError(h);
          }

          throw h;
        }
        const d = this.createApiError(
          0,
          h.message || "Network error",
          ke.NETWORK_ERROR
        );

        if (!i) {
          this.notifyError(d);
        }

        throw d;
      }

      throw h;
    }
  }
}
const G = new li({ baseURL: "/api", timeout: 30000 /* 3e4 */ });
const Ve = new li({ baseURL: "/api/v1/auth", timeout: 30000 /* 3e4 */ });

const q = {
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

const Pt = {
  async register(e) {
    return await Ve.post(q.auth.signUp, e);
  },
  async login(e) {
    return await Ve.post(q.auth.signIn, e);
  },
  async verifyOtp(e) {
    return await Ve.post(q.auth.verifyOtp, e);
  },
  async resendOtp(e) {
    await Ve.post(q.auth.resendOtp, e);
  },
  async refreshSession() {
    return await Ve.post(q.auth.refresh);
  },
  async logout() {
    await Ve.post(q.auth.logout);
  },
  async logoutAll() {
    await Ve.post(`${q.auth.logout}-all`);
  },
  async forgotPassword(e) {
    return await Ve.post(q.auth.forgotPassword, e);
  },
  async resetPassword(e) {
    await Ve.post(q.auth.resetPassword, e);
  },
  async changePassword(e) {
    await Ve.post(q.auth.changePassword, e);
  },
};

class dr {
  cache = new Map();
  maxSize;
  ttl;
  constructor(t = 100, o = 300 * 1000 /* 1e3 */) {
    this.maxSize = t;
    this.ttl = o;
  }
  get(t) {
    const o = this.cache.get(t);
    if (o) {
      if (Date.now() - o.timestamp > this.ttl) {
        this.cache.delete(t);
        return;
      }
      this.cache.delete(t);
      this.cache.set(t, o);
      return o.value;
    }
  }
  set(t, o) {
    if (this.cache.has(t)) {
      this.cache.delete(t);
    }

    if (this.cache.size >= this.maxSize) {
      const r = this.cache.keys().next().value;

      if (r) {
        this.cache.delete(r);
      }
    }

    this.cache.set(t, { value: o, timestamp: Date.now() });
  }
  has(t) {
    const o = this.cache.get(t);
    return o
      ? Date.now() - o.timestamp > this.ttl
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
    const o = this.cache.get(t);
    if (o) {
      return Date.now() - o.timestamp;
    }
  }
  isFresh(t, o = this.ttl) {
    const r = this.getAge(t);
    return r !== undefined && r < o;
  }
  get size() {
    return this.cache.size;
  }
  cleanup() {
    const t = Date.now();
    for (const [o, r] of this.cache.entries()) {
      if (t - r.timestamp > this.ttl) {
        this.cache.delete(o);
      }
    }
  }
}
function zr(e) {
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
const Zt = new dr(100, 300 * 1000 /* 1e3 */);
const Ya = 60 * 1000; /* 1e3 */
setInterval(() => Zt.cleanup(), 120 * 1000 /* 1e3 */);
const bt = {
  async checkUsername(e) {
    return (
      await G.get(`/users/check-username?username=${encodeURIComponent(e)}`)
    ).available;
  },
  async createProfile(e) {
    return await G.post("/users/profile", e);
  },
  async getMyProfile() {
    const e = await G.get(q.users.me);
    return zr(e);
  },
  async updateProfile(e) {
    return await G.put(q.users.updateProfile, e);
  },
  async getProfileByUsername(e) {
    const t = e.toLowerCase();
    const o = Zt.get(t);

    if (o && Zt.isFresh(t, Ya)) {
      this._fetchAndCacheProfile(e, t).catch(() => {});
      return o;
    }

    if (o) {
      this._fetchAndCacheProfile(e, t).catch(() => {});
      return o;
    }

    return this._fetchAndCacheProfile(e, t);
  },
  async _fetchAndCacheProfile(e, t) {
    const o = await G.get(q.users.profile(e));
    const r = zr(o);
    Zt.set(t, r);
    return r;
  },
  invalidateProfileCache(e) {
    Zt.delete(e.toLowerCase());
  },
  updateProfileCache(e, t) {
    const o = e.toLowerCase();
    const r = Zt.get(o);

    if (r) {
      Zt.set(o, { ...r, ...t });
    }
  },
  async followUser(e) {
    await G.post(q.users.follow(e), {});
  },
  async unfollowUser(e) {
    await G.delete(q.users.follow(e));
  },
  async pinPost(e) {
    await G.post(q.posts.pin(e));
  },
  async unpinPost(e) {
    await G.delete(q.posts.pin(e));
  },
  async getPrivacySettings() {
    const e = await G.get(q.users.privacy);
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

    await G.put(q.users.privacy, t);
  },
  async getVerificationStatus() {
    try {
      return await G.get(q.verification.status);
    } catch (e) {
      if (e && typeof e == "object" && "status" in e && e.status === 404) {
        return null;
      }
      throw e;
    }
  },
  async submitVerificationRequest(e) {
    return await G.post(q.verification.submit, { videoUrl: e });
  },
  async getMyPins() {
    const e = await G.get(q.users.pins);
    const t = e.data ?? e;
    return { pins: t.pins ?? [], activePin: t.activePin ?? null };
  },
  async setActivePin(e) {
    await G.put(q.users.setPin, { slug: e });
  },
  async removeActivePin() {
    await G.delete(q.users.setPin);
  },
  async deleteAccount() {
    await G.delete(q.users.deleteAccount);
  },
  async restoreAccount() {
    await G.post(q.users.restoreAccount);
  },
};
function vn(e) {
  return e.pagination?.nextCursor ?? e.cursor ?? null;
}
const At = new dr(50, 300 * 1000 /* 1e3 */);
const Ga = 60 * 1000; /* 1e3 */
setInterval(() => At.cleanup(), 120 * 1000 /* 1e3 */);
function Za(e) {
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
function qt(e) {
  const o = (e.attachments ?? []).map((l) => {
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
  if (e.poll && !o.some((l) => l.type === "poll")) {
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

    o.push(h);
  }
  const r = e.stats?.reactions ?? e.likesCount ?? 0;
  const i = e.stats?.views ?? e.viewsCount ?? 0;
  const s = e.stats?.comments ?? e.commentsCount ?? 0;
  const a = e.stats?.reposts ?? e.repostsCount ?? 0;
  const c = e.viewerStatus?.reaction ?? (e.isLiked ? "like" : null);
  const u = e.text ?? e.content ?? "";
  return {
    id: e.id,
    author: Za(e.author),
    wallOwnerId: e.wallOwnerId ?? e.authorId ?? e.author?.id,
    text: u,
    spans: e.spans ?? [],
    attachments: o,
    reactions: { total: r, myReaction: c },
    stats: { views: i, comments: s, reposts: a },
    originalPost: e.originalPost ? qt(e.originalPost) : null,
    dominantEmoji: e.dominantEmoji ?? null,
    createdAt: e.createdAt,
    editedAt: e.editedAt ?? null,
  };
}

const qe = {
  async getFeed(e, t = {}) {
    const o = new URLSearchParams();
    o.set("limit", String(t.limit || 20));

    o.set(
      "tab",
      e === "global" ? "popular" : e === "clan" ? "clan" : "following"
    );

    if (t.cursor) {
      o.set("cursor", t.cursor);
    }

    const r = o.toString();
    const i = `${q.posts.list}${r ? `?${r}` : ""}`;
    const s = await G.get(i);
    return { data: s.data.posts.map(qt), nextCursor: vn(s.data) };
  },
  async getPost(e) {
    const t = await G.get(q.posts.single(e));
    return qt(t.data);
  },
  async getUserWall(e, t = {}) {
    if (!t.cursor) {
      const o = e;
      const r = At.get(o);
      const i = r && r.pinnedPostId === (t.pinnedPostId ?? null);

      if (r && i && At.isFresh(o, Ga)) {
        this._fetchAndCacheWall(e, t, o).catch(() => {});
        return { data: r.posts, nextCursor: r.nextCursor };
      }

      if (r && i) {
        this._fetchAndCacheWall(e, t, o).catch(() => {});
        return { data: r.posts, nextCursor: r.nextCursor };
      }

      return this._fetchAndCacheWall(e, t, o);
    }
    return this._fetchWall(e, t);
  },
  async _fetchAndCacheWall(e, t, o) {
    const r = await this._fetchWall(e, t);

    At.set(o, {
      posts: r.data,
      nextCursor: r.nextCursor,
      pinnedPostId: t.pinnedPostId ?? null,
    });

    return r;
  },
  async _fetchWall(e, t) {
    const o = new URLSearchParams();

    if (t.limit) {
      o.set("limit", t.limit.toString());
    }

    o.set("sort", "new");

    if (t.cursor) {
      o.set("cursor", t.cursor);
    }

    if (t.pinnedPostId) {
      o.set("pinnedPostId", t.pinnedPostId);
    }

    const r = o.toString();
    const i = `${q.posts.byUser(e)}${r ? `?${r}` : ""}`;
    const s = await G.get(i);
    return { data: s.data.posts.map(qt), nextCursor: vn(s.data) };
  },
  invalidateWallCache(e) {
    At.delete(e);
  },
  updatePostInWallCache(e, t, o) {
    const r = At.get(e);
    if (r) {
      const i = r.posts.map((s) => (s.id === t ? { ...s, ...o } : s));
      At.set(e, { ...r, posts: i });
    }
  },
  removePostFromWallCache(e, t) {
    const o = At.get(e);
    if (o) {
      const r = o.posts.filter((i) => i.id !== t);
      At.set(e, { ...o, posts: r });
    }
  },
  async likePost(e) {
    await G.post(q.posts.like(e));
  },
  async unlikePost(e) {
    await G.delete(q.posts.like(e));
  },
  async createPost(e) {
    return await G.post(q.posts.create, {
      content: e.text,
      spans: e.spans,
      wallRecipientId: e.wallOwnerId,
      attachmentIds: e.attachmentIds,
      poll: e.poll,
    });
  },
  async createRepost(e, t) {
    return await G.post(q.posts.repost(e), { content: t });
  },
  async editPost(e, t) {
    const o = t.content ?? t.text;
    await G.put(q.posts.update(e), { content: o, spans: t.spans });
  },
  async deletePost(e) {
    await G.delete(q.posts.delete(e));
  },
  async restorePost(e) {
    await G.post(q.posts.restore(e));
  },
  async trackView(e) {
    G.post(q.posts.view(e)).catch(() => {});
  },
  async trackViewsBatch(e) {
    if (e.length !== 0) {
      for (const t of e) {
        G.post(q.posts.view(t)).catch(() => {});
      }
    }
  },
  async getUserPosts(e, t = {}) {
    const o = new URLSearchParams();

    if (t.limit) {
      o.set("limit", t.limit.toString());
    }

    if (t.cursor) {
      o.set("cursor", t.cursor);
    }

    if (t.sort) {
      o.set("sort", t.sort);
    }

    if (t.pinnedPostId) {
      o.set("pinnedPostId", t.pinnedPostId);
    }

    const r = o.toString();
    const i = `${q.posts.byUser(e)}${r ? `?${r}` : ""}`;
    const s = await G.get(i);
    return { data: s.data.posts.map(qt), nextCursor: vn(s.data) };
  },
  async getUserLikedPosts(e, t = {}) {
    const o = new URLSearchParams();

    if (t.limit) {
      o.set("limit", t.limit.toString());
    }

    if (t.cursor) {
      o.set("cursor", t.cursor);
    }

    const r = o.toString();
    const i = `${q.posts.likedByUser(e)}${r ? `?${r}` : ""}`;
    const s = await G.get(i);
    return { data: s.data.posts.map(qt), nextCursor: vn(s.data) };
  },
  async pinPost(e) {
    await G.post(q.posts.pin(e));
  },
  async unpinPost(e) {
    await G.delete(q.posts.pin(e));
  },
  async votePoll(e, t) {
    const o = await G.post(q.posts.pollVote(e), { optionIds: t });
    return o.data ?? o;
  },
  async unrepost(e) {
    await G.delete(q.posts.repost(e));
  },
  async getPostsByHashtag(e, t = {}) {
    const o = new URLSearchParams();

    if (t.limit) {
      o.set("limit", t.limit.toString());
    }

    if (t.cursor) {
      o.set("cursor", t.cursor);
    }

    const r = o.toString();
    const i = `${q.hashtags.posts(e)}${r ? `?${r}` : ""}`;
    const s = await G.get(i);
    return { data: s.data.posts.map(qt), nextCursor: vn(s.data) };
  },
};

const qa = { new: "newest", old: "oldest", popular: "popular" };
function Ka(e) {
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
function qo(e) {
  const t = e.stats?.reactions ?? e.likesCount ?? 0;
  const o = e.stats?.replies ?? e.repliesCount ?? 0;
  const r = e.viewerStatus?.reaction ?? (e.isLiked ? "like" : null);
  const i = e.text ?? e.content ?? "";
  return {
    id: e.id,
    postId: e.postId,
    author: Ka(e.author),
    parentId: e.parentId,
    rootId: e.rootId ?? null,
    text: i,
    spans: e.spans ?? [],
    attachments: e.attachments ?? [],
    reactions: { total: t, myReaction: r },
    stats: { replies: o },
    replyTo: e.replyTo ?? null,
    previewReplies:
      e.previewReplies ?? e.replies
        ? (e.previewReplies ?? e.replies).map(qo)
        : undefined,
    createdAt: e.createdAt,
    editedAt: e.editedAt ?? null,
  };
}

const yt = {
  async getComments(e, t = {}) {
    const o = new URLSearchParams();

    if (t.limit) {
      o.set("limit", t.limit.toString());
    }

    if (t.sort) {
      o.set("sort", qa[t.sort]);
    }

    if (t.cursor) {
      o.set("cursor", t.cursor);
    }

    const r = o.toString();
    const i = `${q.posts.comments(e)}${r ? `?${r}` : ""}`;
    const s = await G.get(i);
    let a = [];
    let c = null;

    if (Array.isArray(s.data)) {
      a = s.data;
    } else if (s.data && "comments" in s.data) {
      a = s.data.comments;
      c = s.data.nextCursor ?? null;
    } else if (s.comments) {
      a = s.comments;
    }

    c = c ?? s.cursor ?? s.meta?.cursor?.next ?? null;
    return { data: a.map(qo), nextCursor: c };
  },
  async getReplies(e, t = {}) {
    const o = new URLSearchParams();

    if (t.limit) {
      o.set("limit", t.limit.toString());
    }

    if (t.cursor) {
      o.set("cursor", t.cursor);
    }

    const r = o.toString();
    const i = `${q.comments.replies(e)}${r ? `?${r}` : ""}`;
    const s = await G.get(i);
    let a = [];
    let c = null;

    if (Array.isArray(s.data)) {
      a = s.data;
    } else if (s.data && "replies" in s.data) {
      a = s.data.replies;
      c = s.data.nextCursor ?? null;
    } else if (s.replies) {
      a = s.replies;
    }

    c = c ?? s.cursor ?? s.meta?.cursor?.next ?? null;
    return { data: a.map(qo), nextCursor: c };
  },
  async createComment(e, t, o, r, i) {
    return await G.post(q.posts.comments(e), {
      content: t,
      attachmentIds: i?.map((s) => s.mediaId),
    });
  },
  async createReply(e, t, o, r, i) {
    return await G.post(q.comments.replies(e), {
      content: t,
      replyToUserId: r,
      attachmentIds: i?.map((s) => s.mediaId),
    });
  },
  async editComment(e, t, o) {
    await G.patch(q.comments.edit(e), { content: t });
  },
  async deleteComment(e) {
    await G.delete(q.comments.delete(e));
  },
  async likeComment(e) {
    await G.post(q.comments.like(e));
  },
  async unlikeComment(e) {
    await G.delete(q.comments.like(e));
  },
};

const Ja = {
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

function ui(e) {
  const t = Ja[e.type] ?? "follow";
  const o = e.entityId ?? e.targetId ?? null;
  const r = e.isRead ?? e.read ?? false;
  let i = [];

  if (e.payload?.actors) {
    i = e.payload.actors;
  } else if (e.actor) {
    i = [
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

  const s = e.payload?.entityPreview ?? e.preview ?? null;
  return {
    id: e.id,
    type: t,
    entityId: o,
    parentEntityId: e.parentEntityId ?? null,
    isRead: r,
    payload: {
      actors: i,
      count: e.payload?.count ?? 1,
      clickUrl: e.payload?.clickUrl,
      entityPreview: s,
    },
    createdAt: e.createdAt,
    updatedAt: e.updatedAt ?? e.readAt ?? e.createdAt,
  };
}

const Wt = {
  async getNotifications(e = {}) {
    const t = new URLSearchParams();
    const o = e.limit ?? 20;
    t.set("limit", o.toString());
    const r = e.cursor ? parseInt(e.cursor) : e.offset ?? 0;

    if (r > 0) {
      t.set("offset", r.toString());
    }

    const i = t.toString();
    const s = `${q.notifications.list}${i ? `?${i}` : ""}`;
    const a = await G.get(s);
    const c = a.notifications ?? a.data ?? [];
    const l = a.hasMore ?? false ? String(r + c.length) : null;
    return { notifications: c.map(ui), nextCursor: l };
  },
  async getUnreadCount() {
    return (await G.get(q.notifications.count)).count;
  },
  async markAsRead(e) {
    if (e.length === 1) {
      const r = await G.post(q.notifications.markRead(e[0]));
      return { markedCount: r.markedCount ?? r.marked ?? 1 };
    }
    const t = 20;
    let o = 0;
    for (let r = 0; r < e.length; r += t) {
      const i = e.slice(r, r + t);
      const s = await G.post(q.notifications.markReadBatch, { ids: i });
      o += s.markedCount ?? s.marked ?? i.length;
    }
    return { markedCount: o };
  },
  async markAllAsRead() {
    const e = await G.post(q.notifications.markAllRead);
    return { markedCount: e.markedCount ?? e.marked ?? 0 };
  },
  async getSettings() {
    const e = await G.get(q.notifications.settings);
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

    await G.put(q.notifications.settings, t);
  },
};

const Qa = [
  "image/jpeg",
  "image/png",
  "image/gif",
  "image/webp",
  "image/avif",
  "image/heic",
  "image/heif",
];

const ec = ["video/mp4", "video/webm", "video/quicktime"];
const Ko = ".jpg,.jpeg,.png,.gif,.webp,.avif,.heic,.heif";
const tc = ".mp4,.webm,.mov";

const ln = {
  async uploadMedia(e) {
    const t = new FormData();
    t.append("file", e);
    return await G.uploadFormData(q.files.upload, t, {
      timeout: 300 * 1000 /* 1e3 */,
    });
  },
  async deleteFile(e) {
    await G.delete(q.files.delete(e));
  },
  isValidImageType(e) {
    return Qa.includes(e.type);
  },
  isValidVideoType(e) {
    return ec.includes(e.type);
  },
  isValidMediaType(e) {
    return this.isValidImageType(e) || this.isValidVideoType(e);
  },
};

function Xr(e) {
  const t = e.user ?? e;
  const o = t.id ?? e.id;
  return {
    id: e.id,
    userId: o,
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
const Mt = Rt((e) => ({
  statuses: {},

  setStatuses: (t) =>
    e((o) => ({
      statuses: { ...o.statuses, ...t },
    })),

  setStatus: (t, o) =>
    e((r) => ({
      statuses: { ...r.statuses, [t]: o },
    })),

  clear: () => e({ statuses: {} }),
}));
let Jo = new Set();
function nc() {
  if (!Ro) {
    setTimeout(async () => {
      Ro = null;
      const e = Array.from(Jo);
      Jo.clear();

      if (e.length !== 0) {
        for (let t = 0; t < e.length; t += 20) {
          const o = e.slice(t, t + 20);
          try {
            const r = await Ln.batchFollowStatus(o);
            Mt.getState().setStatuses(r);
          } catch {}
        }
      }
    }, 50);
  }
}
function oc(e) {
  const t = Ne((s) => s.profile?.id);

  const o = Mt((s) => s.statuses);

  const r = x("");

  W(() => {
    if (!t) {
      return;
    }

    const s = e.filter((c) => c !== t && o[c] === undefined);

    const a = s.sort().join(",");
    if (!(a === r.current || a === "")) {
      r.current = a;
      for (const c of s) {
        Jo.add(c);
      }
      nc();
    }
  }, [e, t]);

  return {
    getStatus: E(
      (s) => {
        if (s !== t) {
          return o[s];
        }
      },
      [o, t]
    ),
    statuses: o,
  };
}
const Kt = new dr(500, 120 * 1000 /* 1e3 */);
setInterval(() => Kt.cleanup(), 60 * 1000 /* 1e3 */);

const Ln = {
  async followUser(e) {
    const t = await G.post(q.users.follow(e), {});
    Kt.delete(e);
    Mt.getState().setStatus(e, true);
    return t.following ? "following" : t.status ?? "following";
  },
  async unfollowUser(e) {
    await G.delete(q.users.follow(e));
    Kt.delete(e);
    Mt.getState().setStatus(e, false);
  },
  async getFollowers(e, t = {}) {
    const o = new URLSearchParams();
    const r = t.limit ?? 20;
    o.set("limit", r.toString());
    const i = t.cursor ? parseInt(t.cursor) : t.page ?? 1;
    o.set("page", i.toString());
    const s = o.toString();
    const a = `${q.users.followers(e)}${s ? `?${s}` : ""}`;
    const c = await G.get(a);
    const u = c.data ?? c;
    const l = u.users ?? u.followers ?? [];
    const d = u.pagination?.hasMore ?? false ? String(i + 1) : null;
    return { data: l.map(Xr), nextCursor: d };
  },
  async getFollowing(e, t = {}) {
    const o = new URLSearchParams();
    const r = t.limit ?? 20;
    o.set("limit", r.toString());
    const i = t.cursor ? parseInt(t.cursor) : t.page ?? 1;
    o.set("page", i.toString());
    const s = o.toString();
    const a = `${q.users.following(e)}${s ? `?${s}` : ""}`;
    const c = await G.get(a);
    const u = c.data ?? c;
    const l = u.users ?? u.following ?? [];
    const d = u.pagination?.hasMore ?? false ? String(i + 1) : null;
    return { data: l.map(Xr), nextCursor: d };
  },
  async blockUser(e) {
    await G.post(q.users.block(e), {});
    Kt.delete(e);
  },
  async unblockUser(e) {
    await G.delete(q.users.block(e));
    Kt.delete(e);
  },
  async getBlockedUsers(e = {}) {
    const t = new URLSearchParams();
    const o = e.limit ?? 20;
    t.set("limit", o.toString());
    const r = e.cursor ? parseInt(e.cursor) : e.page ?? 1;
    t.set("page", r.toString());
    const i = t.toString();
    const s = `${q.users.blocked}${i ? `?${i}` : ""}`;
    const a = await G.get(s);
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

    return (await G.post(q.users.followStatus, { userIds: e })).data ?? {};
  },
  invalidateSocialCache(e) {
    Kt.delete(e);
  },
  clearSocialCache() {
    Kt.clear();
  },
};

const Yn = {
  TARGET_NOT_FOUND: "REPORT_TARGET_NOT_FOUND",
  CANNOT_REPORT_OWN_CONTENT: "REPORT_CANNOT_REPORT_OWN_CONTENT",
  ALREADY_REPORTED: "REPORT_ALREADY_REPORTED",
  DESCRIPTION_TOO_LONG: "REPORT_DESCRIPTION_TOO_LONG",
};

const rc = {
  async createReport(e) {
    const t = await G.post(q.reports.create, e);
    return t?.data ?? t;
  },
};

const sc = {
  async getChangelog() {
    const e = await G.get(q.platform.changelog);
    return e.data ?? e;
  },
};

const mt = {
  async getStatus() {
    return G.get(q.subscription.status);
  },
  async pay() {
    return G.post(q.subscription.pay);
  },
  async setAutoRenewal(e) {
    return G.post(q.subscription.autoRenewal, { enabled: e });
  },
  async bindCard() {
    return G.post(q.subscription.bindCard);
  },
  async getMethods() {
    return (await G.get(q.subscription.methods)).data;
  },
  async setDefaultMethod(e) {
    return G.put(q.subscription.methodDefault(e));
  },
  async deleteMethod(e) {
    return G.delete(q.subscription.methodDelete(e));
  },
};

const Gn = {
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

const Ne = Rt()(
  ur(
    (e, t) => {
      G.setRefreshTokenCallback(async () => {
        try {
          const r = await Pt.refreshSession();
          G.setAccessToken(r.accessToken);
          Ve.setAccessToken(r.accessToken);
          return r.accessToken;
        } catch (r) {
          return He(r) && r.status >= 500
            ? (e({ status: "service_error" }), null)
            : (t().reset(), null);
        }
      });

      G.setOnUnauthorizedCallback(() => {
        if (t().status !== "service_error") {
          t().reset();
        }
      });

      return {
        ...Gn,
        register: async (r) => {
          e({ status: "loading", error: null, errorCode: null });
          try {
            const i = await Pt.register(r);

            e({
              status: "needs_verification",
              pendingEmail: r.email,
              pendingPassword: r.password,
              flowToken: i.flowToken ?? null,
            });

            return i.nextStep;
          } catch (i) {
            const s = He(i) ? i.message : "Registration failed";
            const a = He(i) ? i.code : null;
            e({ status: "unauthenticated", error: s, errorCode: a });
            throw i;
          }
        },
        login: async (r) => {
          e({ status: "loading", error: null, errorCode: null });
          try {
            const i = await Pt.login(r);
            if (ja(i)) {
              G.setAccessToken(i.accessToken);
              Ve.setAccessToken(i.accessToken);
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
                  He(a) &&
                  (a.code === ke.ENTITY_NOT_FOUND || a.status === 404)
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
            const s = i;

            e({
              status: "needs_verification",
              pendingEmail: r.email,
              pendingPassword: r.password,
              flowToken: s.flowToken ?? null,
            });

            return i.nextStep;
          } catch (i) {
            const s = He(i) ? i.message : "Login failed";
            const a = He(i) ? i.code : null;
            e({ status: "unauthenticated", error: s, errorCode: a });
            throw i;
          }
        },
        verifyOtp: async (r) => {
          e({ status: "loading", error: null, errorCode: null });
          const { pendingEmail, pendingPassword, flowToken } = t();
          try {
            const c = await Pt.verifyOtp({
              email: pendingEmail || "",
              password: pendingPassword || "",
              otp: r,
              flowToken: flowToken || "",
            });
            e({ pendingPassword: null });

            if (Va(c)) {
              G.setAccessToken(c.accessToken);
              Ve.setAccessToken(c.accessToken);
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
                  He(l) &&
                  (l.code === ke.ENTITY_NOT_FOUND || l.status === 404)
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
            const u = He(c) ? c.message : "Verification failed";
            const l = He(c) ? c.code : null;
            e({ status: "needs_verification", error: u, errorCode: l });
            throw c;
          }
        },
        resendOtp: async () => {
          e({ error: null, errorCode: null });
          const { pendingEmail, flowToken } = t();
          try {
            await Pt.resendOtp({
              email: pendingEmail || "",
              flowToken: flowToken || "",
            });
          } catch (s) {
            const a = He(s) ? s.message : "Failed to resend code";
            const c = He(s) ? s.code : null;
            e({ error: a, errorCode: c });
            throw s;
          }
        },
        createProfile: async (r) => {
          e({ error: null, errorCode: null });
          try {
            await bt.createProfile(r);
            await t().fetchProfile();
            e({ status: "authenticated" });
          } catch (i) {
            const s = He(i) ? i.message : "Failed to create profile";
            const a = He(i) ? i.code : null;
            e({ error: s, errorCode: a });
            throw i;
          }
        },
        logout: async () => {
          try {
            await Pt.logout();
          } catch {
          } finally {
            G.setAccessToken(null);
            Ve.setAccessToken(null);
            e({ ...Gn, status: "unauthenticated" });
          }
        },
        logoutAll: async () => {
          try {
            await Pt.logoutAll();
          } catch {
          } finally {
            G.setAccessToken(null);
            Ve.setAccessToken(null);
            e({ ...Gn, status: "unauthenticated" });
          }
        },
        refreshSession: async () => {
          try {
            const r = await Pt.refreshSession();
            G.setAccessToken(r.accessToken);
            Ve.setAccessToken(r.accessToken);
            return r.accessToken;
          } catch (r) {
            return He(r) && r.status >= 500
              ? (e({ status: "service_error" }), null)
              : (t().reset(), null);
          }
        },
        fetchProfile: async () => {
          const r = await bt.getMyProfile();
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
              .some((i) => i.trim().startsWith("is_auth="))
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
            } catch (s) {
              if (
                He(s) &&
                (s.code === ke.ENTITY_NOT_FOUND || s.status === 404)
              ) {
                e({ status: "needs_profile" });
              } else {
                throw s;
              }
            }
          } catch (i) {
            if (He(i) && i.status >= 500) {
              e({ status: "service_error" });
            } else {
              e({ status: "unauthenticated" });
            }
          }
        },
        deleteAccount: async () => {
          await bt.deleteAccount();
          await t().logout();
        },
        restoreAccount: async () => {
          await bt.restoreAccount();
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
          G.setAccessToken(null);
          Ve.setAccessToken(null);
          e({ ...Gn, status: "unauthenticated" });
        },
        setProfile: (r) => {
          e({ profile: r });
        },
      };
    },
    {
      name: "auth-storage",
      storage: lr(() => sessionStorage),
      partialize: (e) => ({
        profile: e.profile,
        email: e.email,
      }),
    }
  )
);

const ic = () => Ne((e) => e.status);

const wo = () => Ne((e) => e.profile);

const di = () => Ne((e) => e.status === "authenticated");

const co = Rt()(
  ur(
    (e) => ({
      commentsSort: "popular",

      setCommentsSort: (t) => {
        e({ commentsSort: t });
      },
    }),
    { name: "settings", storage: lr(() => localStorage) }
  )
);

const ct = new Map();
const ac = 60 * 1000; /* 1e3 */
const cc = 300 * 1000; /* 1e3 */
const Yr = 20;
const Gr = 500;
function lc() {
  const e = Date.now();
  for (const [t, o] of ct.entries()) {
    if (e - o.timestamp > cc) {
      ct.delete(t);
    }
  }
  if (ct.size > Yr) {
    const t = Array.from(ct.entries()).sort(
      (r, i) => r[1].timestamp - i[1].timestamp
    );
    t.slice(0, t.length - Yr).forEach(([r]) => ct.delete(r));
  }
}

const ye = Rt((e, t) => ({
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

  setActiveFeed: (o) => {
    if (t().activeFeed !== o) {
      t().feedMeasuredHeights.clear();

      e({
        activeFeed: o,
        posts: [],
        hasMore: true,
        nextCursor: null,
        isLoading: false,
        error: null,
        feedScrollPosition: 0,
      });
    }
  },

  fetchFeed: async (o = false) => {
    const { activeFeed, isLoading, isRefreshing } = t();
    if (!(isLoading || isRefreshing)) {
      e({ isLoading: !o, isRefreshing: o, error: null });
      try {
        const a = await qe.getFeed(activeFeed, { limit: 20 });
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
        const a = await qe.getFeed(activeFeed, {
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

  createPost: async (o, r, i = [], s = [], a) => {
    const c = Ne.getState().profile;
    if (!c) {
      throw new Error("Not authenticated");
    }
    try {
      const u = s.map(({ mediaId: f }) => f);

      const { id: id_1 } = await qe.createPost({
        wallOwnerId: o !== c.id ? o : undefined,
        text: r,
        spans: i.length > 0 ? i : undefined,
        attachmentIds: u.length > 0 ? u : undefined,
        poll: a
          ? {
              question: a.question,
              options: a.options,
              multipleChoice: a.multipleChoice ?? false,
            }
          : undefined,
      });

      const h = s.map(({ url: f }, m) => ({
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
        wallOwnerId: o,
        text: r,
        spans: i,
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

      qe.invalidateWallCache(o);
      try {
        const f = await qe.getPost(id_1);
        e((m) => ({
          posts: m.posts.map((N) => (N.id === id_1 ? f : N)),
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

  setHighlightedCommentId: (o) => {
    e({ highlightedCommentId: o });
  },

  fetchPost: async (o) => {
    const r = t().posts.find((i) => i.id === o);
    if (r) {
      e({ currentPost: r, currentPostLoading: false, currentPostError: false });
      return;
    }
    if (t().currentPost?.id !== o) {
      e({
        currentPostLoading: true,
        currentPost: null,
        currentPostError: false,
      });
      try {
        const i = await qe.getPost(o);
        e({
          currentPost: i,
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

  setCurrentPost: (o) => {
    e({ currentPost: o, currentPostLoading: false, currentPostError: false });
  },

  clearComments: () => {
    e({
      comments: [],
      commentsLoading: true,
      commentsHasMore: true,
      commentsNextCursor: null,
    });
  },

  fetchComments: async (o) => {
    const { currentPost } = t();
    if (
      currentPost &&
      currentPost.id === o &&
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
    lc();
    const i = co.getState().commentsSort;
    const s = o;
    const a = ct.get(s);
    const c = Date.now();
    if (a && a.sort === i) {
      if (c - a.timestamp < ac) {
        e({
          comments: a.comments,
          commentsNextCursor: a.nextCursor,
          commentsHasMore: a.hasMore,
          commentsLoading: false,
        });

        yt.getComments(o, { limit: 100, sort: i })
          .then((l) => {
            const l_data = l.data;

            ct.set(s, {
              comments: l_data,
              hasMore: l.nextCursor !== null,
              nextCursor: l.nextCursor,
              timestamp: Date.now(),
              sort: i,
            });

            e((d) =>
              d.comments.length > 0 && d.comments[0]?.postId === o
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
      const u = await yt.getComments(o, { limit: 100, sort: i });
      const u_data = u.data;

      ct.set(s, {
        comments: u_data,
        hasMore: u.nextCursor !== null,
        nextCursor: u.nextCursor,
        timestamp: Date.now(),
        sort: i,
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

  loadMoreComments: async (o) => {
    const { commentsLoadingMore, commentsHasMore, commentsNextCursor } = t();
    if (commentsLoadingMore || !commentsHasMore) {
      return;
    }
    const a = co.getState().commentsSort;
    e({ commentsLoadingMore: true });
    try {
      const c = await yt.getComments(o, {
        limit: 100,
        sort: a,
        cursor: commentsNextCursor ?? undefined,
      });
      e((u) => {
        const l = [...u.comments, ...c.data];
        return {
          comments: l.length > Gr ? l.slice(-Gr) : l,
          commentsNextCursor: c.nextCursor,
          commentsHasMore: c.nextCursor !== null,
          commentsLoadingMore: false,
        };
      });
    } catch {
      e({ commentsLoadingMore: false });
    }
  },

  toggleCommentReaction: async (o, r) => {
    const { comments } = t();

    let s = comments.findIndex((v) => v.id === o);

    let a = false;
    let c = -1;
    let u = -1;
    if (s === -1) {
      for (let v = 0; v < comments.length; v++) {
        const y = (comments[v].previewReplies ?? []).findIndex(
          (T) => T.id === o
        );
        if (y !== -1) {
          a = true;
          c = v;
          u = y;
          break;
        }
      }
    }
    if (s === -1 && !a) {
      return;
    }
    const l = a ? comments[c].previewReplies[u] : comments[s];
    const h = l.reactions.myReaction;
    const d = l.reactions.total;
    const f = h === r;
    const m = f ? Math.max(0, d - 1) : h === null ? d + 1 : d;
    const N = f || r;
    const w = [...comments];
    if (a) {
      const v = [...(w[c].previewReplies ?? [])];
      v[u] = { ...v[u], reactions: { total: m, myReaction: N } };
      w[c] = { ...w[c], previewReplies: v };
    } else {
      w[s] = { ...w[s], reactions: { total: m, myReaction: N } };
    }
    e({ comments: w });
    try {
      if (f) {
        await yt.unlikeComment(o);
      } else {
        await yt.likeComment(o);
      }
    } catch (v) {
      console.error("Failed to toggle comment reaction:", v);
      const p = [...t().comments];
      if (a) {
        const y = p.findIndex((T) => T.previewReplies?.some((g) => g.id === o));
        if (y !== -1) {
          const T = p[y].previewReplies.findIndex((g) => g.id === o);
          if (T !== -1) {
            const g = [...p[y].previewReplies];
            g[T] = { ...g[T], reactions: { total: d, myReaction: h } };
            p[y] = { ...p[y], previewReplies: g };
          }
        }
      } else {
        const y = p.findIndex((T) => T.id === o);

        if (y !== -1) {
          p[y] = { ...p[y], reactions: { total: d, myReaction: h } };
        }
      }
      e({ comments: p });
    }
  },

  addComment: async (o, r, i = [], s, a, c, u) => {
    try {
      const l = s
        ? await yt.createReply(s, r, i, c, a)
        : await yt.createComment(o, r, i, undefined, a);

      const h = Ne.getState().profile;
      if (h) {
        const N = (l.attachments || [])
          .filter((v) => typeof v == "object" && v !== null)
          .map((v) =>
            v.type === "media" && v.media
              ? {
                  id: v.media.id,
                  type: v.media.type,
                  url: v.media.url,
                  duration: v.media.duration,
                }
              : { id: v.id, type: v.type, url: v.url, duration: v.duration }
          );

        const w = {
          id: l.id,
          postId: o,
          author: {
            id: h.id,
            username: h.username,
            displayName: h.displayName,
            avatar: h.avatar,
            isVerified: h.isVerified,
          },
          parentId: s ?? null,
          rootId: s ?? null,
          text: l.text ?? l.content ?? r,
          spans: l.spans,
          attachments: N,
          replyTo: l.replyTo ?? u ?? null,
          reactions: { total: 0, myReaction: null },
          stats: { replies: 0 },
          createdAt: new Date().toISOString(),
          editedAt: null,
        };

        e(
          s
            ? (v) => ({
                comments: v.comments.map((p) =>
                  p.id === s
                    ? {
                        ...p,
                        previewReplies: [...(p.previewReplies || []), w],
                        stats: { ...p.stats, replies: p.stats.replies + 1 },
                      }
                    : p
                ),

                highlightedCommentId: l.id,
              })
            : (v) => ({
                comments: [w, ...v.comments],
                highlightedCommentId: l.id,
              })
        );
      }
      const { currentPost } = t();

      if (currentPost && currentPost.id === o) {
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

      const f = co.getState().commentsSort;
      const m = ct.get(o);

      if (m) {
        ct.set(o, { ...m, comments: t().comments, timestamp: Date.now() });
      } else {
        ct.set(o, {
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

  loadReplies: async (o) => {
    const { comments } = t();
    if (comments.findIndex((s) => s.id === o) !== -1) {
      try {
        const s = await yt.getReplies(o, { limit: 100 });
        e((a) => ({
          comments: a.comments.map((c) =>
            c.id === o ? { ...c, previewReplies: s.data } : c
          ),
        }));
      } catch (s) {
        console.error("Failed to load replies:", s);
      }
    }
  },

  editComment: async (o, r, i) => {
    const { comments } = t();

    const a = (u) =>
      u.map((l) =>
        l.id === o
          ? {
              ...l,
              text: r,
              spans: i ?? l.spans,
              editedAt: new Date().toISOString(),
            }
          : l.previewReplies
          ? {
              ...l,
              previewReplies: l.previewReplies.map((h) =>
                h.id === o
                  ? {
                      ...h,
                      text: r,
                      spans: i ?? h.spans,
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
      await yt.editComment(o, r, i);
    } catch (u) {
      console.error("Failed to edit comment:", u);
      e({ comments: c });
      throw u;
    }
  },

  deleteComment: async (o) => {
    const { comments, currentPost } = t();

    const s = comments.some((u) => u.id === o);

    const a = comments.find((u) => u.previewReplies?.some((l) => l.id === o));

    const c = comments;

    if (s) {
      e({ comments: comments.filter((u) => u.id !== o) });
    } else if (a) {
      e({
        comments: comments.map((u) =>
          u.id === a.id
            ? {
                ...u,
                previewReplies: u.previewReplies?.filter((l) => l.id !== o),
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
      await yt.deleteComment(o);
    } catch (u) {
      console.error("Failed to delete comment:", u);
      e({ comments: c });
      throw u;
    }
  },

  editPost: async (o, r, i) => {
    await qe.editPost(o, { text: r, spans: i });
    const { posts, currentPost } = t();
    const c = new Date().toISOString();

    const u = posts.find((l) => l.id === o);

    e({
      posts: posts.map((l) =>
        l.id === o ? { ...l, text: r, spans: i ?? l.spans, editedAt: c } : l
      ),
      currentPost:
        currentPost?.id === o
          ? {
              ...currentPost,
              text: r,
              spans: i ?? currentPost.spans,
              editedAt: c,
            }
          : currentPost,
      _lastPostEdit: { postId: o, text: r, spans: i ?? [], editedAt: c },
    });

    if (u?.wallOwnerId) {
      qe.updatePostInWallCache(u.wallOwnerId, o, {
        text: r,
        spans: i ?? u.spans,
        editedAt: c,
      });
    }
  },

  deletePost: async (o) => {
    const { posts, currentPost } = t();
    const s = posts;

    const a = posts.find((c) => c.id === o);

    e({
      posts: posts.filter((c) => c.id !== o),
      currentPost: currentPost?.id === o || currentPost,
    });
    try {
      await qe.deletePost(o);
    } catch (c) {
      console.error("Failed to delete post:", c);

      if (a) {
        e({ posts: s });
      }

      throw c;
    }
  },

  updatePostReaction: (o, r, i) => {
    e((s) => {
      const a = s.posts.map((u) =>
        u.id === o
          ? {
              ...u,
              reactions: {
                ...u.reactions,
                myReaction: r,
                total: Math.max(0, u.reactions.total + i),
              },
            }
          : u
      );

      const c =
        s.currentPost?.id === o
          ? {
              ...s.currentPost,
              reactions: {
                ...s.currentPost.reactions,
                myReaction: r,
                total: Math.max(0, s.currentPost.reactions.total + i),
              },
            }
          : s.currentPost;

      return {
        posts: a,
        currentPost: c,
        _lastReactionUpdate: { postId: o, myReaction: r, totalDelta: i },
      };
    });
  },

  updatePollVote: (o, r, i) => {
    const s = (a) => {
      const c = a.attachments.findIndex((m) => m.type === "poll");
      if (c === -1) {
        return a;
      }
      const u = a.attachments[c];

      const l = u.options.map((m) =>
        m.id === r
          ? { ...m, votes: (m.votes ?? 0) + 1 }
          : m.id === i
          ? { ...m, votes: Math.max(0, (m.votes ?? 0) - 1) }
          : m
      );

      const h = i ? 0 : 1;

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
      const c = a.posts.map((l) => (l.id === o ? s(l) : l));

      const u = a.currentPost?.id === o ? s(a.currentPost) : a.currentPost;
      return { posts: c, currentPost: u };
    });
  },

  updatePollData: (o, r) => {
    const i = (s) => {
      const a = s.attachments.findIndex((l) => l.type === "poll");
      if (a === -1) {
        return s;
      }

      const c = {
        ...s.attachments[a],
        options: (r.options ?? []).map((l) => ({
          id: l.id,
          text: l.text,
          votes: l.votesCount ?? l.voteCount ?? 0,
        })),
        totalVotes: r.totalVotes ?? 0,
        myVote: r.votedOptionIds?.length > 0 ? r.votedOptionIds[0] : null,
      };

      const u = [...s.attachments];
      u[a] = c;
      return { ...s, attachments: u };
    };
    e((s) => {
      const a = s.posts.map((u) => (u.id === o ? i(u) : u));

      const c = s.currentPost?.id === o ? i(s.currentPost) : s.currentPost;
      return { posts: a, currentPost: c };
    });
  },

  setFeedScrollPosition: (o) => {
    e({ feedScrollPosition: o });
  },

  setFeedMeasuredHeights: (o) => {
    e({ feedMeasuredHeights: o });
  },

  reset: () => {
    t().feedMeasuredHeights.clear();
    ct.clear();

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

const Zr = {
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

let St = null;
let wn = null;
let Vt = 0;
let jt = null;
const qr = [
  1000 /* 1e3 */, 2000 /* 2e3 */, 4000 /* 4e3 */, 8000 /* 8e3 */,
  16000 /* 16e3 */, 30000 /* 3e4 */,
];
const uc = 0.3;
const dc = 15;
function Kr(e) {
  const t = qr[Math.min(e, qr.length - 1)];
  const o = t * uc * (Math.random() * 2 - 1);
  return Math.round(t + o);
}
function hc(e) {
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
  return ui(t);
}

const gn = Rt()((e, t) => ({
  ...Zr,

  initialize: () => {
    if (!t().isInitialized) {
      e({ isInitialized: true });
      t().connectSSE();
      t().fetchUnreadCount();
    }
  },

  fetchNotifications: async (o = false) => {
    const { status, nextCursor, notifications } = t();
    if (
      status !== "loading" &&
      !(!o && nextCursor === null && notifications.length > 0)
    ) {
      e({ status: "loading", error: null });
      try {
        const a = o || (nextCursor ?? undefined);
        const c = await Wt.getNotifications({ cursor: a, limit: 20 });
        e({
          notifications: o
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
      const o = await Wt.getUnreadCount();
      e({ unreadCount: o });
    } catch {}
  },

  markAsRead: async (o) => {
    if (o.length === 0) {
      return;
    }
    const r = t();

    const i = o.filter((s) => {
      const a = r.notifications.find((c) => c.id === s);
      return a && !a.isRead;
    });

    e((s) => ({
      notifications: s.notifications.map((a) =>
        o.includes(a.id) ? { ...a, isRead: true } : a
      ),

      unreadCount: Math.max(0, s.unreadCount - i.length),
    }));
    try {
      await Wt.markAsRead(o);
    } catch {}
  },

  markAsReadSilent: async (o) => {
    if (o.length !== 0) {
      e((r) => ({
        unreadCount: Math.max(0, r.unreadCount - o.length),
      }));
      try {
        await Wt.markAsRead(o);
      } catch {}
    }
  },

  markAllAsRead: async () => {
    e((o) => ({
      notifications: o.notifications.map((r) => ({
        ...r,
        isRead: true,
      })),

      unreadCount: 0,
    }));
    try {
      await Wt.markAllAsRead();
    } catch {}
  },

  connectSSE: () => {
    if (St) {
      return;
    }
    const o = G.getAccessToken();
    if (!o) {
      e({ sseStatus: "error", error: "Not authenticated" });
      return;
    }
    e({ sseStatus: "connecting" });
    const r = "/api/notifications/stream";
    St = new AbortController();

    (async () => {
      try {
        const s = await fetch(r, {
          method: "GET",
          headers: {
            Accept: "text/event-stream",
            Authorization: `Bearer ${o}`,
            "Cache-Control": "no-cache",
          },
          signal: St?.signal,
        });
        if (!s.ok) {
          if (s.status === 401) {
            try {
              const l = await Pt.refreshSession();
              G.setAccessToken(l.accessToken);
              Ve.setAccessToken(l.accessToken);
              St = null;
              const h = Kr(Vt);
              Vt++;

              wn = setTimeout(() => {
                t().connectSSE();
              }, h);

              return;
            } catch {
              e({ sseStatus: "error", error: "Session expired" });
              return;
            }
          }
          throw new Error(`SSE connection failed: ${s.status}`);
        }
        if (!s.body) {
          throw new Error("SSE response has no body");
        }
        Vt = 0;
        e({ sseStatus: "connected", error: null });

        if (jt) {
          jt.cancel().catch(() => {});
          jt = null;
        }

        const a = s.body.getReader();
        jt = a;
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
          for (const N of d) {
            if (N.startsWith("event: ")) {
              f = N.slice(7);
            } else if (N.startsWith("data: ")) {
              m = N.slice(6);
            } else if (N === "" && m) {
              try {
                const w = JSON.parse(m);
                const v = f || w.type;
                if (v !== "connected") {
                  if (v === "notification") {
                    const p = w.payload ?? w;
                    const y = hc(p);
                    const T = y.payload.actors[0];

                    const g = {
                      id: y.id,
                      type: y.type,
                      actorName: T?.displayName || "Пользователь",
                      actorUsername: T?.username || "",
                      actorAvatar: T?.avatar || "",
                      count: y.payload.count,
                      message: mc(
                        y.type,
                        T?.displayName || "Пользователь",
                        y.payload.count
                      ),
                      clickUrl: y.payload.clickUrl,
                      entityId: y.entityId,
                      parentEntityId: y.parentEntityId,
                    };

                    e((b) => ({
                      notifications: [y, ...b.notifications],
                      unreadCount: w.unreadCount ?? b.unreadCount,
                      lastSseToast: g,
                    }));

                    if (w.sound) {
                      pc();
                    }
                  } else {
                    if (v === "unread_count") {
                      e({ unreadCount: w.payload?.count ?? 0 });
                    }
                  }
                }
              } catch (w) {
                console.error("SSE message parse error:", w, m);
              }
              f = "";
              m = "";
            }
          }
        }
      } catch (s) {
        if (s.name === "AbortError") {
          return;
        }
        e({ sseStatus: "error", error: "SSE connection error" });

        if (Vt >= dc) {
          console.warn(
            "SSE: Max reconnect attempts reached, stopping reconnection"
          );

          St = null;
          return;
        }

        const a = Kr(Vt);
        Vt++;

        wn = setTimeout(() => {
          St = null;
          t().connectSSE();
        }, a);
      }
    })();
  },

  disconnectSSE: () => {
    if (wn) {
      clearTimeout(wn);
      wn = null;
    }

    if (jt) {
      jt.cancel().catch(() => {});
      jt = null;
    }

    if (St) {
      St.abort();
      St = null;
    }

    Vt = 0;
    e({ sseStatus: "disconnected" });
  },

  fetchSettings: async () => {
    e({ settingsLoading: true });
    try {
      const o = await Wt.getSettings();
      e({ settings: o, settingsLoading: false });
    } catch {
      e({ settingsLoading: false });
    }
  },

  updateSettings: async (o) => {
    const { settings: r } = t();
    if (r) {
      const i = {
        webEnabled: o.webEnabled ?? r.webEnabled,
        soundEnabled: o.soundEnabled ?? r.soundEnabled,
        preferences: { ...r.preferences, ...o.preferences },
      };
      e({ settings: i });
    }
    try {
      await Wt.updateSettings(o);
    } catch {
      e({ settings: r });
    }
  },

  reset: () => {
    t().disconnectSSE();
    e(Zr);
  },
}));

const fc = {
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

function mc(e, t, o) {
  const fc_e = fc[e];
  return fc_e ? fc_e(t, o) : "Новое уведомление";
}
function pc() {
  try {
    const e = new Audio("/assets/notification.ogg");
    e.volume = 0.5;
    e.play().catch(() => {});
  } catch {}
}

const hi = () => gn((e) => e.unreadCount);

const gc = () => gn((e) => e.lastSseToast);

const hr = Rt((e, t) => ({
  portal: { active: false },
  loaded: false,

  fetchPortal: async () => {
    if (!t().loaded) {
      try {
        const o = await G.get("/v1/portal");
        e({ portal: o, loaded: true });
      } catch {
        e({ loaded: true });
      }
    }
  },
}));

const fi = () => hr((e) => e.portal);

const $n = new Set();
let Pn = null;
const vc = 30000; /* 3e4 */
function wc() {
  if (Pn === null) {
    Pn = window.setInterval(() => {
      $n.forEach((e) => e());
    }, vc);
  }
}
function yc() {
  if (Pn !== null) {
    clearInterval(Pn);
    Pn = null;
  }
}
function _c(e) {
  $n.add(e);

  if ($n.size === 1) {
    wc();
  }
}
function Cc(e) {
  $n.delete(e);

  if ($n.size === 0) {
    yc();
  }
}
function So(e) {
  const t = Date.now();
  const o = Math.floor((t - e.getTime()) / 1000 /* 1e3 */);
  return o < 60
    ? "сейчас"
    : o < 3600
    ? `${Math.floor(o / 60)} мин.`
    : o < 86400
    ? `${Math.floor(o / 3600)} ч.`
    : o < 604800
    ? `${Math.floor(o / 86400)} дн.`
    : o < 2419200
    ? `${Math.floor(o / 604800)} нед.`
    : e.toLocaleDateString("ru-RU", { day: "numeric", month: "short" });
}
function mi(e) {
  const t = new Date(e).getTime();
  const o = !isNaN(t);
  const r = o ? t : 0;

  const [i, s] = I(() => (o ? So(new Date(r)) : ""));

  W(() => {
    if (!o) {
      s("");
      return;
    }
    const a = new Date(r);
    s(So(a));
    const c = () => {
      s(So(a));
    };
    _c(c);

    return () => Cc(c);
  }, [r, o]);

  return i;
}
const Jr = 1174;
function kt() {
  const [e, t] = I(() =>
    typeof window === "undefined" ? false : window.innerWidth < Jr
  );

  W(() => {
    const o = window.matchMedia(`(max-width: ${Jr - 1}px)`);

    const r = (i) => {
      t(i.matches);
    };

    t(o.matches);
    o.addEventListener("change", r);

    return () => {
      o.removeEventListener("change", r);
    };
  }, []);

  return e;
}
const Nc = fn({ isHidden: false });

const bc = () => {
  const [e, t] = I(false);
  const o = x(0);

  W(() => {
    const r = () => {
      const window_scrollY = window.scrollY;
      const s = window_scrollY - o.current;

      if (s > 10 && window_scrollY > 50) {
        t(true);
      } else if (s < -10) {
        t(false);
      }

      o.current = window_scrollY;
    };
    window.addEventListener("scroll", r, { passive: true });

    return () => window.removeEventListener("scroll", r);
  }, []);

  return e;
};

function Tc() {
  const [e, t] = I(false);
  const [o, r] = I(false);
  const [i, s] = I(0);
  const [a, c] = I(false);
  const [u, l] = I(0);
  const [h, d] = I(0);
  const [f, m] = I([]);
  const [N, w] = I(0);
  const v = x(0);
  const p = x(null);
  const y = x(null);
  const T = x(null);
  const g = x(null);
  const b = x([]);
  const S = x(null);
  const R = x(null);
  const k = x(null);
  const _ = x(null);
  const P = x(null);
  const C = x(null);
  const F = x([]);
  const O = x(false);
  const K = x(0);
  const ae = x([]);
  const X = x(0);

  W(() => {
    O.current = e;
  }, [e]);

  W(
    () => () => {
      if (S.current) {
        clearInterval(S.current);
      }

      if (R.current) {
        cancelAnimationFrame(R.current);
      }

      if (C.current) {
        clearInterval(C.current);
      }

      if (g.current) {
        g.current.getTracks().forEach((U) => U.stop());
      }

      if (p.current) {
        p.current.ondataavailable = null;
        p.current.onstop = null;
      }

      if (y.current && y.current.state !== "closed") {
        y.current.close();
      }

      if (k.current) {
        k.current.pause();
        k.current.onloadedmetadata = null;
        k.current.ontimeupdate = null;
        k.current.onended = null;
        k.current = null;
      }

      if (_.current) {
        URL.revokeObjectURL(_.current);
      }
    },
    []
  );

  const Z = E(() => {
    if (!T.current) {
      return;
    }
    const T_current = T.current;
    const T_current_frequencyBinCount = T_current.frequencyBinCount;
    const ee = new Uint8Array(T_current_frequencyBinCount);
    T_current.getByteFrequencyData(ee);
    let M = 0;
    for (let ue = 0; ue < T_current_frequencyBinCount; ue++) {
      M += ee[ue];
    }
    const ne = M / T_current_frequencyBinCount / 255;
    const re = Math.min(1, ne * 3);
    const de = Math.max(0.1, re);
    if (O.current) {
      const De = performance.now() - K.current;
      const Me = Math.floor(De / 80);
      ae.current.push(de);

      if (Me > X.current) {
        const ae_current = ae.current;

        const Ee =
          ae_current.length > 0
            ? ae_current.reduce((le, H) => le + H, 0) / ae_current.length
            : 0.05;

        F.current.push(Ee);
        v.current += 4;

        m((le) => [...le, Ee]);

        w(v.current);
        ae.current = [];
        X.current = Me;
      }

      R.current = requestAnimationFrame(Z);
    }
  }, []);

  const ce = E(() => {
    const F_current = F.current;
    return F_current.length > 0 ? [...F_current] : [];
  }, []);

  const J = E(async () => {
    try {
      if (_.current) {
        URL.revokeObjectURL(_.current);
        _.current = null;
      }

      P.current = null;

      if (k.current) {
        k.current.pause();
        k.current = null;
      }

      const U = await navigator.mediaDevices.getUserMedia({
        audio: {
          echoCancellation: true,
          noiseSuppression: true,
          autoGainControl: true,
        },
      });
      g.current = U;
      const oe = new AudioContext();
      y.current = oe;
      const ee = oe.createAnalyser();
      ee.fftSize = 256;
      ee.smoothingTimeConstant = 0.3;
      T.current = ee;
      oe.createMediaStreamSource(U).connect(ee);
      const ne = new MediaRecorder(U, {
        mimeType: MediaRecorder.isTypeSupported("audio/webm")
          ? "audio/webm"
          : "audio/mp4",
      });
      p.current = ne;
      b.current = [];
      F.current = [];
      K.current = performance.now();
      ae.current = [];
      X.current = 0;

      ne.ondataavailable = (de) => {
        if (de.data.size > 0) {
          b.current.push(de.data);
        }
      };

      ne.start(100);
      t(true);
      r(false);
      s(0);
      l(0);
      d(0);
      c(false);
      v.current = 0;
      m([]);
      w(0);
      O.current = true;
      const re = Date.now();

      S.current = window.setInterval(() => {
        const de = Math.floor((Date.now() - re) / 1000 /* 1e3 */);
        s(de);
      }, 100);

      R.current = requestAnimationFrame(Z);
    } catch (U) {
      console.error("Error accessing microphone:", U);
    }
  }, [Z]);

  const te = E(
    () =>
      new Promise((U) => {
        O.current = false;
        t(false);

        if (p.current && p.current.state !== "inactive") {
          p.current.onstop = () => {
            if (b.current.length > 0) {
              const ee = p.current?.mimeType || "audio/webm";
              const M = new Blob(b.current, { type: ee });
              const ne = URL.createObjectURL(M);
              _.current = ne;
              P.current = M;
              const re = new Audio(ne);
              k.current = re;

              re.onloadedmetadata = () => {
                if (isFinite(re.duration)) {
                  d(re.duration);
                } else {
                  re.currentTime = 1e101 /* 1e101 */;

                  re.ontimeupdate = () => {
                    re.ontimeupdate = null;
                    re.currentTime = 0;
                    d(re.duration);
                  };
                }
              };

              re.onended = () => {
                c(false);
                l(0);
                re.currentTime = 0;

                if (C.current) {
                  clearInterval(C.current);
                  C.current = null;
                }
              };

              r(true);
              U(M);
            } else {
              U(null);
            }
          };

          p.current.stop();
        } else {
          U(null);
        }

        if (g.current) {
          g.current.getTracks().forEach((ee) => ee.stop());
          g.current = null;
        }

        if (S.current) {
          clearInterval(S.current);
          S.current = null;
        }

        if (R.current) {
          cancelAnimationFrame(R.current);
          R.current = null;
        }

        if (y.current && y.current.state !== "closed") {
          y.current.close();
          y.current = null;
        }

        const oe = ce();
        v.current = 0;
        m(oe);
        w(0);
        l(0);
      }),
    [ce]
  );

  const B = E(() => {
    O.current = false;

    if (p.current) {
      p.current.ondataavailable = null;
      p.current.onstop = null;
      p.current.state !== "inactive" && p.current.stop();
      p.current = null;
    }

    if (g.current) {
      g.current.getTracks().forEach((U) => U.stop());
      g.current = null;
    }

    if (S.current) {
      clearInterval(S.current);
      S.current = null;
    }

    if (R.current) {
      cancelAnimationFrame(R.current);
      R.current = null;
    }

    if (C.current) {
      clearInterval(C.current);
      C.current = null;
    }

    if (y.current && y.current.state !== "closed") {
      y.current.close();
      y.current = null;
    }

    if (k.current) {
      k.current.pause();
      k.current = null;
    }

    if (_.current) {
      URL.revokeObjectURL(_.current);
      _.current = null;
    }

    P.current = null;
    t(false);
    r(false);
    s(0);
    c(false);
    l(0);
    d(0);
    v.current = 0;
    m([]);
    w(0);
    F.current = [];
    b.current = [];
  }, []);

  const z = E(() => {
    if (C.current) {
      clearInterval(C.current);
    }

    C.current = window.setInterval(() => {
      const k_current = k.current;
      if (
        !k_current ||
        k_current.paused ||
        k_current.paused ||
        k_current.ended
      ) {
        if (C.current) {
          clearInterval(C.current);
          C.current = null;
        }

        return;
      }

      if (k_current.duration > 0) {
        l(k_current.currentTime / k_current.duration);
      }
    }, 100);
  }, []);

  const Q = E(() => {
    if (!k.current || !_.current) {
      return;
    }

    if (C.current) {
      clearInterval(C.current);
      C.current = null;
    }

    const k_current = k.current;

    if (k_current.ended || k_current.currentTime >= k_current.duration) {
      k_current.currentTime = 0;
      l(0);
    }

    c(true);

    k_current
      .play()
      .then(() => {
        z();
      })
      .catch((oe) => {
        console.error("Error playing audio:", oe);
        c(false);
      });
  }, [z]);

  const D = E(() => {
    if (C.current) {
      clearInterval(C.current);
      C.current = null;
    }

    if (k.current) {
      k.current.pause();

      k.current.duration > 0 && l(k.current.currentTime / k.current.duration);
    }

    c(false);
  }, []);

  const $ = E(
    (U) => {
      if (!k.current || !o) {
        return;
      }
      const k_current = k.current;
      const ee = Math.max(0, Math.min(1, U));
      k_current.currentTime = ee * k_current.duration;
      l(ee);

      if (k_current.paused) {
        C.current && (clearInterval(C.current), (C.current = null));

        k_current
          .play()
          .then(() => {
            c(true);
            z();
          })
          .catch((M) => {
            console.error("Error playing audio:", M);
          });
      }
    },
    [o, z]
  );

  const V = E(() => P.current, []);

  return {
    isRecording: e,
    hasRecording: o,
    recordingTime: i,
    audioLevels: f,
    slideOffset: N,
    isPlaying: a,
    playbackProgress: u,
    duration: h,
    audioElementRef: k,
    startRecording: J,
    stopRecording: te,
    cancelRecording: B,
    playAudio: Q,
    pauseAudio: D,
    seekTo: $,
    getAudioBlob: V,
  };
}
const kc = 0.5;
const Ec = 500;
const Qr = 1000; /* 1e3 */
class Rc {
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
        for (const o of t) {
          const r = this.elementToPostId.get(o.target);
          if (r) {
            if (o.isIntersecting) {
              if (!this.pendingTimers.has(r) && !this.viewedPosts.has(r)) {
                const i = window.setTimeout(() => {
                  this.pendingTimers.delete(r);

                  if (!this.viewedPosts.has(r)) {
                    this.sendView(r);
                  }
                }, Ec);
                this.pendingTimers.set(r, i);
              }
            } else {
              const i = this.pendingTimers.get(r);

              if (i !== undefined) {
                clearTimeout(i);
                this.pendingTimers.delete(r);
              }
            }
          }
        }
      },
      { threshold: kc }
    );
  }
  observe(t, o) {
    if (this.observer && !this.viewedPosts.has(t)) {
      if (!this.viewedPosts.has(t)) {
        this.elementToPostId.set(o, t);
        this.observer.observe(o);
      }
    }
  }
  unobserve(t) {
    if (!this.observer) {
      return;
    }
    const o = this.elementToPostId.get(t);
    if (o) {
      const r = this.pendingTimers.get(o);

      if (r !== undefined) {
        clearTimeout(r);
        this.pendingTimers.delete(o);
      }
    }
    this.observer.unobserve(t);
  }
  sendView(t) {
    if (!this.viewedPosts.has(t)) {
      this.viewedPosts.size >= Qr &&
        Array.from(this.viewedPosts)
          .slice(0, Qr / 2)
          .forEach((r) => this.viewedPosts.delete(r));

      this.viewedPosts.add(t);

      qe.trackView(t).catch(() => {
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
const Io = new Rc();
function Sc(e, t) {
  W(() => {
    const t_current = t.current;
    if (!(!t_current || Io.isViewed(e))) {
      Io.observe(e, t_current);

      return () => {
        Io.unobserve(t_current);
      };
    }
  }, [e, t]);
}
function yo(e = "", t = []) {
  const [o, r] = I(e);
  const [i, s] = I(t);
  const a = x(null);

  const c = E((h, d) => {
    r(h);
    s(d);
  }, []);

  const u = E((h) => {
    a.current?.insertText(h);
  }, []);

  const l = E(() => {
    r("");
    s([]);
  }, []);

  return {
    text: o,
    spans: i,
    editorRef: a,
    handleChange: c,
    insertText: u,
    reset: l,
    setText: r,
    setSpans: s,
  };
}

const pi = ({ size: e = 24 }) =>
  n("svg", {
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      n("path", {
        d: "M5 12L12 5L19 12",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
      n("path", {
        d: "M12 19V5",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
    ],
  });

const gi = ({ size: e = 20 }) =>
  n("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: e,
    height: e,
    fill: "none",
    viewBox: "0 0 20 20",
    children: n("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "1.833",
      d: "m17.867 9.208-7.659 7.659a5.003 5.003 0 1 1-7.075-7.075l7.659-7.659a3.335 3.335 0 1 1 4.716 4.717l-7.666 7.658a1.667 1.667 0 1 1-2.359-2.358l7.075-7.067",
    }),
  });

const Ic = ({ size: e = 18 }) =>
  n("svg", {
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
      n("path", { d: "M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z" }),
      n("path", { d: "M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z" }),
    ],
  });

const xc = () =>
  n("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "36",
    height: "18",
    fill: "none",
    children: [
      n("path", { fill: "currentColor", d: "M12 3V0h12v3h-4v11h-4V3h-4Z" }),
      n("path", {
        fill: "currentColor",
        d: "M12 3V0h12v3h-4v11h-4V3h-4ZM9 0 3 9V0H0v14h3l6-9v9h3V0H9Z",
      }),
      n("path", {
        fill: "currentColor",
        "fill-rule": "evenodd",
        d: "M34 11h2v7h-3v-4h-9v4h-3v-7c3 0 3-4 3-11h10v11Zm-7-8v8h4V3h-4Z",
        "clip-rule": "evenodd",
      }),
    ],
  });

const Pc = ({ size: e = 18 }) =>
  n("svg", {
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
      n("polyline", { points: "16 18 22 12 16 6" }),
      n("polyline", { points: "8 6 2 12 8 18" }),
    ],
  });

const Ac = ({ size: e = 24 }) =>
  n("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: e,
    height: e,
    fill: "none",
    viewBox: "0 0 24 24",
    children: [
      n("circle", {
        cx: "12",
        cy: "12",
        r: "10",
        stroke: "currentColor",
        strokeWidth: "2",
      }),
      n("path", {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeWidth: "2",
        d: "M15 9l-6 6m0-6l6 6",
      }),
    ],
  });

const vi = ({ size: e = 24 }) =>
  n("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: e,
    height: e,
    fill: "none",
    viewBox: "0 0 24 24",
    children: [
      n("circle", {
        cx: "12",
        cy: "12",
        r: "10",
        stroke: "currentColor",
        strokeWidth: "2",
      }),
      n("path", {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeWidth: "2",
        d: "M12 16v-4m0-4h.01",
      }),
    ],
  });

const Mc = ({ size: e = 18 }) =>
  n("svg", {
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
      n("line", { x1: "19", y1: "4", x2: "10", y2: "4" }),
      n("line", { x1: "14", y1: "20", x2: "5", y2: "20" }),
      n("line", { x1: "15", y1: "4", x2: "9", y2: "20" }),
    ],
  });

const wi = ({ size: e = 18 }) =>
  n("svg", {
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
      n("path", {
        d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",
      }),
      n("path", {
        d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",
      }),
    ],
  });

const Lc = ({ size: e = 18 }) =>
  n("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    children: n("path", {
      d: "M10 8c-2.2 0-4 1.8-4 4v6h6v-6H8c0-1.1.9-2 2-2V8zm8 0c-2.2 0-4 1.8-4 4v6h6v-6h-4c0-1.1.9-2 2-2V8z",
    }),
  });

const $c = ({ size: e = 18 }) =>
  n("svg", {
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
      n("path", {
        d: "M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94",
      }),
      n("path", {
        d: "M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19",
      }),
      n("line", { x1: "1", y1: "1", x2: "23", y2: "23" }),
      n("path", { d: "M14.12 14.12a3 3 0 1 1-4.24-4.24" }),
    ],
  });

const Oc = ({ size: e = 18 }) =>
  n("svg", {
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
      n("path", { d: "M16 4H9a3 3 0 0 0-3 3c0 1.66 1.34 3 3 3h6" }),
      n("path", { d: "M8 20h7a3 3 0 0 0 3-3c0-1.66-1.34-3-3-3H4" }),
      n("line", { x1: "4", y1: "12", x2: "20", y2: "12" }),
    ],
  });

const Dc = ({ size: e = 24 }) =>
  n("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: e,
    height: e,
    fill: "none",
    viewBox: "0 0 24 24",
    children: [
      n("circle", {
        cx: "12",
        cy: "12",
        r: "10",
        stroke: "currentColor",
        strokeWidth: "2",
      }),
      n("path", {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "2",
        d: "M8 12l3 3 5-6",
      }),
    ],
  });

const Bc = ({ size: e = 18 }) =>
  n("svg", {
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
      n("path", { d: "M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3" }),
      n("line", { x1: "4", y1: "21", x2: "20", y2: "21" }),
    ],
  });

const Uc = ({ size: e = 24 }) =>
  n("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: e,
    height: e,
    fill: "none",
    viewBox: "0 0 24 24",
    children: n("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M12 9v4m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z",
    }),
  });

const Fc = ({ size: e = 18 }) =>
  n("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: e,
    height: e,
    fill: "none",
    viewBox: "0 0 18 18",
    children: n("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "m5 7 4 4 4-4",
    }),
  });

const Et = ({ size: e = 24 }) =>
  n("svg", {
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      n("path", {
        d: "M18 6L6 18",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
      n("path", {
        d: "M6 6L18 18",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
    ],
  });

const fr = ({ filled: e = false, size: t = 20 }) =>
  n("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: t,
    height: t,
    fill: "none",
    viewBox: "0 0 20 20",
    children: n("path", {
      stroke: "currentColor",
      strokeWidth: 2,
      d: "M14.953 5.046c-2.73-2.728-7.173-2.728-9.903 0-2.07 2.07-2.634 5.247-1.41 7.888.136.336.232.59.232.798 0 .247-.105.553-.205.849-.195.573-.416 1.222.058 1.696.475.475 1.125.251 1.697.055.294-.1.598-.205.84-.205.215 0 .486.109.798.235a7.034 7.034 0 0 0 7.893-1.412c2.73-2.73 2.73-7.172 0-9.904Z",
      clipRule: "evenodd",
      fill: e ? "currentColor" : "none",
    }),
  });

const yi = ({ size: e = 18 }) =>
  n("svg", {
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
      n("path", {
        d: "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",
      }),
      n("path", {
        d: "M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z",
      }),
    ],
  });

const _i = () =>
  n("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    fill: "none",
    children: n("path", {
      fill: "currentColor",
      "fill-rule": "evenodd",
      d: "M20.689 10.968a2.806 2.806 0 0 0-2.244-1.108H5.555c-.887 0-1.705.404-2.244 1.107a2.808 2.808 0 0 0-.485 2.455l1.65 6.112a2.83 2.83 0 0 0 2.729 2.09h9.589a2.832 2.832 0 0 0 2.729-2.09l1.65-6.111a2.804 2.804 0 0 0-.484-2.455ZM8.436 3.875h7.125a.75.75 0 0 0 0-1.5H8.436a.75.75 0 0 0 0 1.5ZM5.682 7.253h12.634a.75.75 0 0 0 0-1.5H5.682a.75.75 0 0 0 0 1.5Z",
      "clip-rule": "evenodd",
    }),
  });

const Hc = ({ size: e = 8 }) =>
  n("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: e,
    height: e,
    fill: "none",
    viewBox: "0 0 8 8",
    children: [
      n("g", {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "2",
        clipPath: "url(#af)",
        children: n("path", { d: "M1 4h6M4 1v6" }),
      }),
      n("defs", {
        children: n("clipPath", {
          id: "af",
          children: n("path", { fill: "#fff", d: "M0 0h8v8H0z" }),
        }),
      }),
    ],
  });

const Wc = ({ size: e = 8 }) =>
  n("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: e,
    height: e,
    fill: "none",
    viewBox: "0 0 8 8",
    children: n("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M1 4h6",
    }),
  });

const Ci = ({ size: e = 18 }) =>
  n("svg", {
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: n("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M17.0463 8.361L19.6973 3.35C19.8203 3.118 19.8133 2.839 19.6773 2.613C19.5413 2.387 19.2973 2.25 19.0343 2.25H4.96533C4.55133 2.25 4.21533 2.586 4.21533 3V21C4.21533 21.414 4.55133 21.75 4.96533 21.75C5.37933 21.75 5.71533 21.414 5.71533 21V14.544L19.0443 14.365C19.3073 14.361 19.5483 14.221 19.6813 13.995C19.8143 13.768 19.8183 13.489 19.6943 13.258L17.0463 8.361Z",
      fill: "currentColor",
    }),
  });

const _o = ({ filled: e = false, size: t = 20, className: o }) =>
  n("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: t,
    height: t,
    viewBox: "0 0 20 20",
    fill: "none",
    className: o,
    children: n("path", {
      fill: e ? "currentColor" : "none",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "1.667",
      d: "M10 4.583C8.75 2.917 6.25 2.5 4.583 3.75 2.917 5 2.083 7.5 3.333 10S10 16.667 10 16.667 15.417 12.5 16.667 10s0-5-1.667-6.25-4.167-.833-5 .833Z",
    }),
  });

const Hn = ({ size: e = 24 }) =>
  n("svg", {
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
    children: n("path", { d: "M19 12a7 7 0 1 1-4.83-6.66" }),
  });

const Ni = ({ size: e = 24 }) =>
  n("svg", {
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      n("path", {
        d: "M9 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H9",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
      n("path", {
        d: "M16 17L21 12L16 7",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
      n("path", {
        d: "M21 12H9",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
    ],
  });

const Vc = ({ size: e = 24 }) =>
  n("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    fill: "none",
    children: [
      n("path", {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M10.84 10.355a6.684 6.684 0 0 1 7.462-1.374c.158.071.331-.078.268-.24a8.109 8.109 0 0 0-1.825-2.773 8.175 8.175 0 0 0-5.837-2.429A8.175 8.175 0 0 0 5.07 5.968a8.338 8.338 0 0 0-1.66 9.34c.162.394.297.74.297 1.047 0 .326-.135.72-.26 1.094-.23.663-.46 1.354.02 1.844.49.49 1.18.25 1.843.019.374-.135.758-.26 1.075-.26.307 0 .653.135 1.047.289.958.45 2.123.793 3.22.786.176 0 .24-.222.108-.339-2.656-2.359-2.297-7.039.08-9.433Z",
        clipRule: "evenodd",
      }),
      n("path", {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M20.34 17.93c0-.154.064-.324.164-.576a5.052 5.052 0 0 0-1.002-5.662 4.959 4.959 0 0 0-3.537-1.469 4.958 4.958 0 0 0-3.537 1.47 5.034 5.034 0 0 0 0 7.095A5.011 5.011 0 0 0 18.06 19.8c.229-.093.426-.173.586-.173.178.001.397.077.61.15.406.14.866.299 1.196-.033.33-.332.174-.791.036-1.197-.073-.215-.149-.436-.149-.617Z",
        clipRule: "evenodd",
      }),
    ],
  });

const jc = ({ size: e = 18 }) =>
  n("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: e,
    height: e,
    fill: "none",
    viewBox: "0 0 18 18",
    children: n("g", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      children: [
        n("path", {
          d: "M9 2c-.53 0-1.04.219-1.414.608C7.21 2.998 7 3.526 7 4.077v4.846c0 .55.21 1.08.586 1.469.375.39.884.608 1.414.608.53 0 1.04-.219 1.414-.608.375-.39.586-.918.586-1.469V4.077c0-.55-.21-1.08-.586-1.469A1.963 1.963 0 0 0 9 2Z",
        }),
        n("path", {
          d: "M14 8v1.333c0 1.238-.527 2.425-1.464 3.3C11.598 13.508 10.326 14 9 14s-2.598-.492-3.536-1.367C4.527 11.758 4 10.571 4 9.333V8M9 14v2",
        }),
      ],
    }),
  });

const bi = ({ size: e = 18 }) =>
  n("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: e,
    height: e,
    fill: "none",
    viewBox: "0 0 18 18",
    children: n("path", {
      fill: "currentColor",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M9 9.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM14.25 9.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM3.75 9.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z",
    }),
  });

const zc = ({ size: e = 24 }) =>
  n("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    fill: "none",
    children: n("path", {
      fill: "currentColor",
      "fill-rule": "evenodd",
      d: "M8.078 10.367c0-.01.006-.019.006-.029V5.636a3.46 3.46 0 0 0 1.257.526.749.749 0 1 0 .299-1.469c-1.135-.23-1.589-1.333-1.606-1.375a.75.75 0 0 0-1.45.269v4.3a2.873 2.873 0 0 0-1.418-.384 2.92 2.92 0 0 0-2.916 2.918 2.92 2.92 0 0 0 2.916 2.916 2.92 2.92 0 0 0 2.917-2.916c0-.019-.005-.035-.005-.054ZM21.75 6.503a.749.749 0 0 0-1.067-.68c-2.557 1.189-5.245 1.683-7.982 1.469a.752.752 0 0 0-.568.196.752.752 0 0 0-.24.55v7.697a2.866 2.866 0 0 0-1.402-.377 2.907 2.907 0 0 0-2.903 2.904 2.906 2.906 0 0 0 2.903 2.903 2.906 2.906 0 0 0 2.903-2.903v-6.925c.183.007.368.023.552.023 2.151 0 4.26-.427 6.303-1.228V14.2a2.87 2.87 0 0 0-1.403-.377 2.906 2.906 0 0 0-2.903 2.903 2.906 2.906 0 0 0 2.903 2.903 2.906 2.906 0 0 0 2.903-2.903V6.502Z",
      "clip-rule": "evenodd",
    }),
  });

const Xc = ({ size: e = 18 }) =>
  n("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: e,
    height: e,
    fill: "none",
    viewBox: "0 0 18 18",
    children: [
      n("path", {
        fill: "currentColor",
        d: "M7.17 14.288c.03.12.064.238.102.354.213.661.543 1.251.926 1.772a3.964 3.964 0 0 1-2.036-1.164.573.573 0 0 1-.094-.67.654.654 0 0 1 .626-.328c.16.014.32.025.477.036ZM9.002 1.5c3.602 0 5.222 3.092 5.222 5.286 0 .277-.008.517-.015.74-.006.202-.011.384-.01.56-.253.05-.49.126-.706.213a3.832 3.832 0 0 0-.803-.23v.001a5.083 5.083 0 0 0-2.274.149l-.009.003-.01.003c-2.594.808-3.54 3.168-3.364 5.22-1.696-.11-3.138-.427-3.744-1.285-.346-.489-.38-1.091-.101-1.787.651-1.392.635-1.909.605-2.848a21.233 21.233 0 0 1-.015-.739c0-2.194 1.621-5.286 5.224-5.286Z",
      }),
      n("path", {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M17.758 11.709a2.743 2.743 0 0 0-1.751-1.575 3.024 3.024 0 0 0-1.38-.095c-.423.069-.806.313-1.128.54-.311-.218-.704-.466-1.129-.535a3.083 3.083 0 0 0-1.378.09c-1.768.55-2.312 2.412-1.818 3.893.77 2.377 4.084 3.888 4.225 3.952a.247.247 0 0 0 .2 0c.139-.063 3.404-1.548 4.22-3.95.261-.783.239-1.607-.061-2.32Z",
        clipRule: "evenodd",
      }),
    ],
  });

const Yc = ({ size: e = 18 }) =>
  n("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: e,
    height: e,
    fill: "none",
    viewBox: "0 0 18 18",
    children: [
      n("path", {
        fill: "currentColor",
        d: "M7.048 14.278c.022.184.052.368.09.55v.001a6.5 6.5 0 0 0 .466 1.403 4.044 4.044 0 0 1-1.442-.982.573.573 0 0 1-.094-.67.654.654 0 0 1 .626-.328c.12.01.237.018.354.026Zm3.925 1.383c.052.062.108.12.166.179h-.001a3.253 3.253 0 0 1-.166-.179ZM9 1.5c3.602 0 5.222 3.092 5.222 5.286 0 .088-.005.173-.006.254A6.5 6.5 0 0 0 7 13.443c-1.682-.111-3.11-.43-3.712-1.283-.346-.489-.38-1.091-.101-1.787.651-1.392.635-1.909.605-2.848a21.233 21.233 0 0 1-.015-.739c0-2.194 1.621-5.286 5.224-5.286Zm.32 10.333-.067.177c.02-.06.042-.119.065-.177l.075-.174a4.47 4.47 0 0 0-.074.174Zm4.998-2.759v.002c-.017-.003-.034-.008-.051-.01l.051.008Zm-.344-.05Z",
      }),
      n("path", {
        fill: "currentColor",
        d: "M15.065 11.348c.324 0 .587.263.587.587v1.956a.587.587 0 0 0 1.174 0V13.5a3.327 3.327 0 1 0-1.33 2.66.587.587 0 0 1 .704.94 4.5 4.5 0 1 1 1.8-3.6v.391a1.76 1.76 0 0 1-3.05 1.2 2.152 2.152 0 1 1-.386-3.46.586.586 0 0 1 .501-.283ZM12.522 13.5a.978.978 0 1 0 1.956 0 .978.978 0 0 0-1.956 0Z",
      }),
    ],
  });

const es = ({ size: e = 18 }) =>
  n("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: e,
    height: e,
    fill: "none",
    viewBox: "0 0 18 18",
    children: [
      n("path", {
        fill: "currentColor",
        d: "M6.694 14.252c.453.038.891.066 1.317.084.034.63.168 1.26.406 1.864-.021.07-.043.153-.065.243a3.946 3.946 0 0 1-2.19-1.193.573.573 0 0 1-.094-.67.654.654 0 0 1 .626-.328ZM9.001 1.5c3.602 0 5.222 3.092 5.222 5.286 0 .277-.008.517-.015.74-.005.17-.01.327-.01.477a5.988 5.988 0 0 0-4.44 1.75l-.001.002a6.01 6.01 0 0 0-1.734 3.733c-2.108-.05-4.014-.307-4.735-1.328-.346-.489-.38-1.091-.101-1.787.651-1.392.635-1.909.605-2.848a21.233 21.233 0 0 1-.015-.739c0-2.194 1.621-5.286 5.224-5.286Zm1.963 9.894a3.977 3.977 0 0 0-.004.004l.004-.004Z",
      }),
      n("path", {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M16.83 11.17a4.008 4.008 0 0 0-5.659 0 4.017 4.017 0 0 0-.805 4.506c.077.192.132.337.132.456 0 .141-.06.316-.117.486-.111.327-.238.698.034.969.27.271.642.143.97.031.167-.057.34-.117.48-.117.122 0 .277.062.455.134a4.019 4.019 0 0 0 4.51-.807 4.007 4.007 0 0 0 0-5.659Z",
        clipRule: "evenodd",
      }),
    ],
  });

const Gc = ({ size: e = 18 }) =>
  n("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: e,
    height: e,
    fill: "none",
    viewBox: "0 0 18 18",
    children: [
      n("path", {
        fill: "currentColor",
        d: "M6.694 14.252c.479.04.941.069 1.389.087a4.72 4.72 0 0 0 .067 2.063 3.968 3.968 0 0 1-1.988-1.152.573.573 0 0 1-.094-.67.654.654 0 0 1 .626-.328ZM9.001 1.5c3.269 0 4.905 2.546 5.18 4.657-1.042.362-1.842 1.336-1.842 2.559v1.764c-1.79.208-3.352 1.368-4.009 3.012-2.228-.033-4.286-.261-5.042-1.332-.346-.489-.38-1.091-.101-1.787.651-1.392.635-1.909.605-2.848a21.233 21.233 0 0 1-.015-.739c0-2.194 1.621-5.286 5.224-5.286Zm3.919 10.944a2.894 2.894 0 0 1 .191.007l-.191-.007Z",
      }),
      n("path", {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M15.835 15.172c0-.01.006-.018.006-.028v-4.477a3.56 3.56 0 0 0 1.259.5c.404.077.801-.17.885-.556.083-.387-.18-.764-.586-.842-1.136-.22-1.591-1.27-1.608-1.31a.756.756 0 0 0-.838-.446.725.725 0 0 0-.614.703v4.094a2.99 2.99 0 0 0-1.42-.365c-1.61 0-2.919 1.246-2.919 2.778C10 16.754 11.31 18 12.92 18c1.61 0 2.92-1.245 2.92-2.777 0-.018-.005-.033-.005-.051Z",
        clipRule: "evenodd",
      }),
    ],
  });

const Zc = ({ size: e = 18 }) =>
  n("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: e,
    height: e,
    fill: "none",
    viewBox: "0 0 18 18",
    children: [
      n("path", {
        fill: "currentColor",
        d: "M6.694 14.252C7.151 14.291 7.593 14.318 8.021 14.336 8.121 15.23 8.613 16.004 9.322 16.484 9.215 16.494 9.106 16.5 8.997 16.5H8.995C7.933 16.5 6.927 16.055 6.162 15.25 6.077 15.163 6.023 15.051 6.006 14.931 5.989 14.81 6.011 14.687 6.068 14.58 6.186 14.36 6.439 14.233 6.694 14.252ZM9.001 1.5C12.603 1.5 14.223 4.592 14.223 6.786 14.223 7.063 14.216 7.303 14.208 7.525 14.203 7.697 14.199 7.855 14.198 8.007 14.133 8.003 14.067 8 14 8 12.343 8 11 9.343 11 11 9.517 11 8.287 12.076 8.045 13.489 5.928 13.44 4.012 13.185 3.288 12.16 2.942 11.671 2.908 11.069 3.187 10.373 3.838 8.981 3.822 8.464 3.792 7.525 3.784 7.303 3.777 7.062 3.777 6.786 3.777 4.592 5.398 1.5 9.001 1.5ZM13 11C13 10.448 13.448 10 14 10 14.552 10 15 10.448 15 11V17C15 17.552 14.552 18 14 18 13.448 18 13 17.552 13 17V11Z",
      }),
      n("path", {
        fill: "currentColor",
        d: "M11 15C10.4477 15 10 14.5523 10 14C10 13.4477 10.4477 13 11 13H17C17.5523 13 18 13.4477 18 14C18 14.5523 17.5523 15 17 15H11Z",
      }),
    ],
  });

const mr = ({ size: e = 24 }) =>
  n("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: e,
    height: e,
    fill: "none",
    viewBox: "0 0 24 24",
    children: n("path", {
      fill: "currentColor",
      fillRule: "evenodd",
      d: "M19.742 13.807c-.86-1.832-.837-2.52-.798-3.773.01-.296.02-.617.02-.986C18.964 6.122 16.804 2 12 2 7.197 2 5.036 6.122 5.036 9.048c0 .368.01.69.02.986.04 1.252.062 1.941-.807 3.797-.372.928-.327 1.73.135 2.382C5.492 17.783 8.7 18 12 18s6.508-.216 7.616-1.787c.463-.653.508-1.454.125-2.406Zm-4.686 5.198c-1.848.193-3.852.192-6.13-.002a.873.873 0 0 0-.835.437.763.763 0 0 0 .125.893C9.236 21.407 10.578 22 11.994 22h.002c1.42 0 2.765-.592 3.788-1.667a.765.765 0 0 0 .122-.9c-.162-.294-.495-.458-.85-.428Z",
      clipRule: "evenodd",
    }),
  });

const qc = ({ size: e = 20 }) =>
  n("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: e,
    height: e,
    viewBox: "0 0 20 20",
    fill: "none",
    children: n("path", {
      fill: "currentColor",
      d: "M10.004 1C14.92 1 18.976 4.61 19 8.955c0 2.747-2.255 5-5.002 5h-1.797a1.477 1.477 0 0 0-1.502 1.501c0 .426.134.753.395 1.013.231.26.393.618.393 1.011 0 .848-.65 1.52-1.483 1.52C5.052 19 1 14.95 1 10s4.052-9 9.004-9ZM5.25 9a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5Zm9-2a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5Zm-7-2a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5Zm4-1a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5Z",
    }),
  });

const Ti = ({ size: e = 16 }) =>
  n("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: e,
    height: e,
    fill: "none",
    viewBox: "0 0 16 16",
    children: [
      n("rect", {
        width: "4",
        height: "10",
        x: "3",
        y: "3",
        fill: "currentColor",
        rx: "1.5",
      }),
      n("rect", {
        width: "4",
        height: "10",
        x: "9",
        y: "3",
        fill: "currentColor",
        rx: "1.5",
      }),
    ],
  });

const ki = ({ size: e = 24 }) =>
  n("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: e,
    height: e,
    fill: "none",
    viewBox: "0 0 24 24",
    children: n("path", {
      fill: "currentColor",
      fillRule: "evenodd",
      d: "M11.998 11a3.996 3.996 0 0 0 4-4c.084-2.213-1.702-4-4-4A3.995 3.995 0 0 0 8 7c0 2.213 1.787 4 3.998 4Zm6.94 6.878c-.3-1.04-.9-1.986-2.097-2.743C15.843 14.473 14.246 14 12.05 14c-4.292 0-6.39 1.892-6.987 3.878-.2.568.1 1.136.598 1.42C7.458 20.431 9.654 21 12.05 21c2.296 0 4.492-.662 6.288-1.703.5-.284.8-.851.6-1.419Z",
      clipRule: "evenodd",
    }),
  });

const Qo = ({ size: e = 18 }) =>
  n("svg", {
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: n("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M20.0397 9.25349L14.7397 3.95349C13.9837 3.19649 12.6657 3.19649 11.9097 3.95349L11.3187 4.54549C10.7487 5.11449 10.5767 5.96749 10.8957 6.75249C11.0497 7.12649 10.9647 7.55249 10.6797 7.83949L9.34373 9.17449C9.22773 9.28849 9.08673 9.37449 8.93473 9.42249L5.77073 10.4125C5.46773 10.5085 5.18573 10.6795 4.95673 10.9065C4.57773 11.2855 4.36973 11.7875 4.36973 12.3225C4.36973 12.8575 4.57873 13.3585 4.95673 13.7355L7.07573 15.8545L3.59573 19.3345C3.30273 19.6275 3.30273 20.1025 3.59573 20.3955C3.74173 20.5415 3.93373 20.6145 4.12573 20.6145C4.31773 20.6145 4.50973 20.5415 4.65573 20.3955L8.13573 16.9145L10.2577 19.0365C10.6467 19.4255 11.1587 19.6195 11.6707 19.6195C12.1837 19.6195 12.6957 19.4245 13.0867 19.0355C13.3147 18.8055 13.4847 18.5235 13.5797 18.2205L14.5687 15.0605C14.6187 14.9045 14.7037 14.7635 14.8167 14.6505L16.1537 13.3125C16.4387 13.0265 16.8627 12.9415 17.2737 13.1085C18.0197 13.4155 18.8747 13.2465 19.4477 12.6745L20.0397 12.0815C20.8187 11.3015 20.8187 10.0325 20.0397 9.25349Z",
      fill: "currentColor",
    }),
  });

const Kc = ({ size: e = 20 }) =>
  n("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: e,
    height: e,
    fill: "none",
    viewBox: "0 0 24 24",
    children: n("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M18 20V10M12 20V4M6 20v-6",
    }),
  });

const Ei = ({ size: e = 16 }) =>
  n("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: e,
    height: e,
    fill: "none",
    viewBox: "0 0 16 16",
    children: n("path", {
      fill: "currentColor",
      d: "M13 6.268c1.333.77 1.333 2.694 0 3.464l-6 3.464c-1.333.77-3-.192-3-1.732V4.536c0-1.54 1.667-2.502 3-1.732l6 3.464Z",
    }),
  });

const pr = ({ size: e = 24 }) =>
  n("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: e,
    height: e,
    fill: "none",
    viewBox: "0 0 24 24",
    children: n("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M5 12h14M12 5v14",
    }),
  });

const ho = ({ size: e = 20 }) =>
  n("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: e,
    height: e,
    fill: "none",
    viewBox: "0 0 24 24",
    children: [
      n("path", {
        stroke: "currentColor",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-width": "2",
        d: "m2 9 3-3 3 3",
      }),
      n("path", {
        stroke: "currentColor",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-width": "2",
        d: "M13 18H7a2 2 0 0 1-2-2V6M22 15l-3 3-3-3",
      }),
      n("path", {
        stroke: "currentColor",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-width": "2",
        d: "M11 6h6a2 2 0 0 1 2 2v10",
      }),
    ],
  });

const Ri = ({ size: e = 24 }) =>
  n("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    fill: "none",
    children: n("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "3",
      d: "m19.5 19.5-3-3M11 4.5a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13Z",
    }),
  });

const Jc = ({ size: e = 20, color: t = "currentColor" }) =>
  n("svg", {
    width: e,
    height: e,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      n("path", {
        d: "M10 17.5a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15Z",
        stroke: t,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
      n("path", {
        d: "M7.6 11.908c.585.76 1.445 1.234 2.4 1.234.956 0 1.816-.474 2.4-1.234M7.308 7.504v-.043m-.038-.127a.188.188 0 1 0 .002.374.188.188 0 0 0-.002-.374ZM12.692 7.504v-.043m-.005-.127a.188.188 0 1 0 .002.374.188.188 0 0 0-.002-.374Z",
        stroke: t,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
    ],
  });

const Qc = ({ size: e = 16 }) =>
  n("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: e,
    height: e,
    fill: "none",
    viewBox: "0 0 16 16",
    children: n("rect", {
      width: "10",
      height: "10",
      x: "3",
      y: "3",
      fill: "currentColor",
      rx: "3",
    }),
  });

const Si = ({ size: e = 18 }) =>
  n("svg", {
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
      n("polyline", { points: "3 6 5 6 21 6" }),
      n("path", {
        d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",
      }),
      n("line", { x1: "10", y1: "11", x2: "10", y2: "17" }),
      n("line", { x1: "14", y1: "11", x2: "14", y2: "17" }),
    ],
  });

const el = ({ size: e = 16 }) =>
  n("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: e,
    height: e,
    fill: "none",
    viewBox: "0 0 16 16",
    children: [
      n("path", {
        fill: "#0080FF",
        d: "M6.724.821a1.63 1.63 0 0 1 2.858.051l.556 1.042a1.634 1.634 0 0 0 1.672.856l1.155-.166c1.263-.181 2.238 1.108 1.742 2.303L14.253 6a1.69 1.69 0 0 0 .385 1.863l.847.815c.927.891.544 2.47-.685 2.821l-1.122.32a1.663 1.663 0 0 0-1.192 1.468l-.098 1.181c-.108 1.294-1.56 1.974-2.596 1.216l-.946-.693a1.62 1.62 0 0 0-1.872-.033l-.969.658c-1.06.721-2.49-.01-2.552-1.306l-.058-1.184a1.666 1.666 0 0 0-1.141-1.51l-1.11-.36C-.073 10.864-.402 9.272.556 8.413l.874-.783a1.69 1.69 0 0 0 .448-1.849l-.416-1.108c-.454-1.212.565-2.466 1.821-2.24l1.148.207a1.632 1.632 0 0 0 1.7-.796L6.724.82Z",
      }),
      n("path", {
        stroke: "#fff",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "1.333",
        d: "M10.667 6.667 7.11 10.222 5.334 8.444",
      }),
    ],
  });

const tl = ({ size: e = 20 }) =>
  n("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: e,
    height: e,
    viewBox: "0 0 20 20",
    fill: "none",
    children: n("path", {
      fill: "currentColor",
      d: "M9.905 2.501c2.422 0 4.113 1.669 4.113 4.06v6.88c0 2.39-1.69 4.06-4.113 4.06H4.113c-2.422 0-4.113-1.67-4.113-4.06V6.56c0-2.391 1.691-4.06 4.113-4.06zm8.053 2.379c.439-.223.954-.2 1.373.064.419.263.669.72.669 1.22v7.675a1.43 1.43 0 0 1-1.412 1.436c-.215 0-.43-.05-.631-.153l-1.481-.748a1.62 1.62 0 0 1-.888-1.457V7.085c0-.621.34-1.18.888-1.456z",
    }),
  });

const Ii = ({ size: e = 20 }) =>
  n("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: e,
    height: e,
    fill: "none",
    viewBox: "0 0 20 20",
    children: [
      n("path", {
        stroke: "currentColor",
        strokeWidth: "1.5",
        d: "M2 10s2.91-6 8-6 8 6 8 6-2.91 6-8 6-8-6-8-6Z",
      }),
      n("path", {
        stroke: "currentColor",
        strokeWidth: "1.5",
        d: "M10 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z",
      }),
    ],
  });

function gr(e) {
  const t = Fn()[0];
  return e.children({
    url: t.url,
    path: t.path,
    matches: ri(t.path || t.url, e.path, {}) !== false,
  });
}
const nl = "fI4fDVi7";
const ol = "yZbr8ne7";
const rl = "GstMeOlK";
const sl = "AuAu4fWH";
const il = "GpuNQx-t";
const al = "JGhUMn6Z";
const cl = "GNnsM0Nx";
const ll = "VPqB7n6W";
const ul = "TAGBLFdY";
const dl = "hUJldwZ5";
const hl = "AnK9iBJg";
const fl = "ssMbXx3H";
const ml = "qlwe9qHu";

const Xe = {
  aside: nl,
  asideBottom: ol,
  logoutButton: rl,
  asideBrand: sl,
  asideBrandVersion: il,
  nav: al,
  navItem: cl,
  active: ll,
  iconWrapper: ul,
  portalButton: dl,
  portalActive: hl,
  portalImage: fl,
  badge: ml,
};

const Ie = {
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

const ts = [
  Ie.LOGIN,
  Ie.REGISTER,
  Ie.FORGOT_PASSWORD,
  Ie.RESET_PASSWORD,
  Ie.VERIFY_EMAIL,
  Ie.TERMS,
  Ie.PRIVACY,
  Ie.COOKIES,
  Ie.EXTERNAL,
  Ie.SUPPORT,
  Ie.CHILD_SAFETY,
  Ie.SUBSCRIPTION_TERMS,
];

const vr = [
  Ie.LOGIN,
  Ie.REGISTER,
  Ie.FORGOT_PASSWORD,
  Ie.RESET_PASSWORD,
  Ie.VERIFY_EMAIL,
  Ie.ONBOARDING,
];

const pl = "QYP36fUx";
const gl = "_7afjMMjS";
const vl = "crRhcI7j";
const wl = "mPvkVXNc";
const yl = "R6rPmVO3";
const _l = "_4M-jb-Yf";
const Cl = "BzRajAFf";
const Nl = "xWaW7ynd";
const bl = "mC4WabM6";
const Tl = "CdIxpdOF";
const kl = "o8sqdA1y";
const El = "G7wJQLhH";
const Rl = "Idqhap9T";
const Sl = "bcyDy-AX";

const Ze = {
  overlay: pl,
  modalWrapper: gl,
  wide: vl,
  modal: wl,
  frameless: yl,
  header: _l,
  title: Cl,
  closeButton: Nl,
  externalCloseButton: bl,
  mobileOverlay: Tl,
  closing: kl,
  bottomSheet: El,
  dragHandle: Rl,
  dragIndicator: Sl,
};

const Il = fn(null);
const xl = 100;
const Pl = 0.5;
function Ke({
  children: e,
  onClose: t,
  title: o,
  showHeader: r = true,
  showCloseButton: i = true,
  frameless: s = false,
  className: a,
  contentClassName: c,
  size: u = "default",
  onBeforeClose: l,
}) {
  console.log("[Modal] RENDER", { title: o, frameless: s, isMobile: kt() });
  const h = x(null);
  const d = x(null);
  const f = x(null);
  const m = kt();
  const N = x(0);
  const w = x(false);
  const [v, p] = I(false);
  const y = x(0);
  const T = x(0);
  const g = x(0);
  W(() => {
    const J = (B) => {
      if (B.key === "Escape") {
        if (l && !l()) {
          return;
        }
        t();
      }
    };

    const te = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    document.addEventListener("keydown", J);

    return () => {
      document.removeEventListener("keydown", J);
      document.documentElement.style.overflow = te;
    };
  }, [t]);

  const b = (J) => {
    f.current = J.target;
  };

  const S = (J) => {
    if (f.current === h.current && J.target === h.current) {
      if (m) {
        R();
      } else {
        if (l && !l()) {
          return;
        }
        t();
      }
    }
    f.current = null;
  };

  const R = E(() => {
    if (l && !l()) {
      C(0, "transform 0.2s ease-out");
      F(0);
      N.current = 0;
      return;
    }
    p(true);

    setTimeout(() => {
      t();
    }, 200);
  }, [t, l]);

  const k = x(false);
  const _ = x(false);

  const P = (J) => {
    let te = J;

    while (te && te !== d.current) {
      const z = window.getComputedStyle(te).overflowY;
      if (
        (z === "auto" || z === "scroll") &&
        te.scrollHeight > te.clientHeight
      ) {
        return te;
      }
      te = te.parentElement;
    }

    return null;
  };

  const C = (J, te) => {
    if (d.current) {
      d.current.style.transform = J > 0 ? `translateY(${J}px)` : "";
      d.current.style.transition = te || "";
    }
  };

  const F = (J) => {
    if (h.current && J > 0) {
      h.current.style.backgroundColor = `rgba(0, 0, 0, ${Math.max(
        0,
        0.4 - J / 500
      )})`;
    } else if (h.current) {
      h.current.style.backgroundColor = "";
    }
  };

  const O = (J) => {
    if (!m) {
      return;
    }
    y.current = J.touches[0].clientY;
    T.current = Date.now();
    g.current = J.touches[0].clientY;
    const J_target = J.target;
    if (J_target.closest(`.${Ze.dragHandle}`)) {
      k.current = true;
      _.current = true;
      w.current = true;

      if (d.current) {
        d.current.style.transition = "none";
      }

      return;
    }
    k.current = false;

    if (
      J_target.closest(
        'button, a, input, textarea, select, video, [role="button"]'
      )
    ) {
      _.current = false;
      return;
    }

    if (J_target.tagName === "CANVAS" || J_target.closest("canvas")) {
      _.current = false;
      return;
    }
    const D = P(J_target);
    _.current = !D || D.scrollTop === 0;
  };

  const K = (J) => {
    if (!m) {
      return;
    }
    const te = J.touches[0].clientY;
    const B = te - y.current;
    g.current = te;

    if (k.current) {
      if (B > 0) {
        N.current = B;
        C(B);
        F(B);
        J.preventDefault();
      }

      return;
    }

    if (_.current) {
      if (w.current && N.current > 0) {
        if (B > 0) {
          N.current = B;
          C(B);
          F(B);
          J.preventDefault();
        } else {
          N.current = 0;
          w.current = false;
          C(0);
          F(0);
        }

        return;
      }

      if (B > 0) {
        w.current ||
          ((w.current = true),
          d.current && (d.current.style.transition = "none"));
        N.current = B;
        C(B);
        F(B);
        J.preventDefault();
      }
    }
  };

  const ae = () => {
    if (!m) {
      return;
    }
    const J = g.current - y.current;
    const te = Date.now() - T.current;
    const B = J / te;

    if (w.current && (J > xl || B > Pl)) {
      R();
    } else if (N.current > 0) {
      C(0, "transform 0.2s ease-out");
      F(0);
      N.current = 0;
    }

    w.current = false;
    k.current = false;
    _.current = false;
  };

  const Z = (() => {
    if (m && v) {
      return {
        transform: "translateY(100%)",
        transition: "transform 0.2s ease-out",
      };
    }
  })();

  const ce = { onClose: t, isMobile: m, isClosing: v, handleClose: R };
  return n(Il.Provider, {
    value: ce,
    children: n("div", {
      ref: h,
      className: `${Ze.overlay} ${m ? Ze.mobileOverlay : ""} ${
        v ? Ze.closing : ""
      }`,
      onMouseDown: b,
      onMouseUp: S,
      children: n("div", {
        ref: d,
        className: `${Ze.modalWrapper} ${u === "wide" ? Ze.wide : ""} ${
          m ? Ze.bottomSheet : ""
        }`,
        style: Z,
        onTouchStart: O,
        onTouchMove: K,
        onTouchEnd: ae,
        children: [
          s &&
            !m &&
            n("button", {
              type: "button",
              className: Ze.externalCloseButton,
              onClick: (J) => {
                J.stopPropagation();
                t();
              },
              children: n(Et, { size: 24 }),
            }),
          m &&
            n("div", {
              className: Ze.dragHandle,
              children: n("div", { className: Ze.dragIndicator }),
            }),
          n("div", {
            className: `${Ze.modal} ${s ? Ze.frameless : ""} ${a || ""} ${
              c || ""
            }`,
            children: [
              !s &&
                r &&
                !m &&
                n("div", {
                  className: Ze.header,
                  children: [
                    n("span", { className: Ze.title, children: o }),
                    i &&
                      n("button", {
                        type: "button",
                        className: Ze.closeButton,
                        onClick: (J) => {
                          J.stopPropagation();
                          t();
                        },
                        children: n(Et, { size: 16 }),
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
const Al = "V50n6WS3";
const Ml = "op1vWsdX";
const Ll = "_6WE1-ZQb";
const $l = "wQFhiSkQ";
const Ol = "Lsbi80je";
const Dl = "bMJRT07h";
const Bl = "d6UOyTyY";
const Ul = "eSQfgRTM";
const Fl = "q1AtksiZ";
const Hl = "jHe-Wv1B";
const Wl = "vQ8h8naJ";

const ht = {
  changelog: Al,
  entry: Ml,
  entryHeader: Ll,
  version: $l,
  date: Ol,
  changes: Dl,
  change: Bl,
  singleChange: Ul,
  note: Fl,
  loading: Hl,
  divider: Wl,
};

function Vl({ isOpen: e, onClose: t }) {
  const [o, r] = I([]);
  const [i, s] = I(true);

  W(() => {
    if (!e) {
      return;
    }
    let a = false;

    sc.getChangelog()
      .then((c) => {
        if (!a) {
          r(c);
          s(false);
        }
      })
      .catch(() => {
        if (!a) {
          s(false);
        }
      });

    return () => {
      a = true;
    };
  }, [e]);

  return e
    ? wt(
        n(Ke, {
          onClose: t,
          title: "Что нового",
          size: "default",
          children: n("div", {
            className: ht.changelog,
            children: i
              ? n("div", { className: ht.loading, children: "Загрузка..." })
              : o.map((a, c) =>
                  n(
                    "div",
                    {
                      className: ht.entry,
                      children: [
                        n("div", {
                          className: ht.entryHeader,
                          children: [
                            n("span", {
                              className: ht.version,
                              children: ["v", a.version],
                            }),
                            n("span", {
                              className: ht.date,
                              children: a.date,
                            }),
                          ],
                        }),
                        a.changes.length === 1 && !a.changes[0].startsWith("•")
                          ? n("p", {
                              className: ht.singleChange,
                              children: a.changes[0],
                            })
                          : n("ul", {
                              className: ht.changes,
                              children: a.changes.map((u, l) =>
                                n(
                                  "li",
                                  { className: ht.change, children: u },
                                  l
                                )
                              ),
                            }),
                        a.note &&
                          n("p", { className: ht.note, children: a.note }),
                        c < o.length - 1 && n("div", { className: ht.divider }),
                      ],
                    },
                    a.version
                  )
                ),
          }),
        }),
        document.body
      )
    : null;
}
const jl = "GKtAeZvh";
const zl = "_4kYPGG9W";
const Xl = "pl3SNO9Y";
const Yl = "-OjVJvXv";
const Gl = "mKywUPJV";
const Zl = "ORxo1gch";
const ql = "_-0ox-2T5";
const Kl = "ufqwLNRT";
const Jl = "Kb0ZHEmq";
const Ql = "L6foA0ob";
const eu = "p8fXVDg6";
const tu = "iiFzRcQy";

const $t = {
  avatar: jl,
  xs: zl,
  emoji: Xl,
  onlineDot: Yl,
  sm: Gl,
  md: Zl,
  lg: ql,
  xl: Kl,
  badge: Jl,
  followBadge: Ql,
  notFollowing: eu,
  following: tu,
};

function nu(e) {
  return (
    e.startsWith("http://") ||
    e.startsWith("https://") ||
    e.startsWith("https://") ||
    e.startsWith("/")
  );
}
function st({
  src: e,
  alt: t,
  size: o = "md",
  badge: r,
  online: i,
  followBadge: s,
  onFollowBadgeClick: a,
  className: c,
}) {
  const u = e ? nu(e) : false;
  return n("div", {
    className: `${$t.avatar} ${$t[o]} ${c || ""}`,
    children: [
      u && e
        ? n("img", { src: e, alt: t || "" })
        : n("span", { className: $t.emoji, children: e || "👤" }),
      r && n("div", { className: $t.badge, children: r }),
      s !== undefined
        ? n("button", {
            type: "button",
            className: `${$t.followBadge} ${
              s ? $t.following : $t.notFollowing
            }`,
            onClick: (l) => {
              l.preventDefault();
              l.stopPropagation();
              a?.(l);
            },
            children: s ? n(Wc, { size: 8 }) : n(Hc, { size: 8 }),
          })
        : i && n("span", { className: $t.onlineDot }),
    ],
  });
}
const ou = "LGbsLd3i";
const ru = "Qtvr3ePW";
const su = "I1XzQEdO";
const xo = { hint: ou, multiline: ru, arrow: su };
function fo({ text: e, children: t, className: o, multiline: r }) {
  const i = x(null);
  const [s, a] = I(null);

  const c = E(() => {
    if (!i.current) {
      return;
    }
    const h = i.current.getBoundingClientRect();
    a({ x: h.left + h.width / 2, y: h.top });
  }, []);

  const u = E(() => {
    a(null);
  }, []);

  const l = E(
    (h) => {
      h.stopPropagation();

      if (s) {
        u();
      } else {
        c();
      }
    },
    [s, c, u]
  );

  W(() => {
    if (!s) {
      return;
    }
    const h = (d) => {
      if (i.current && !i.current.contains(d.target)) {
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
  }, [s, u]);

  return n("span", {
    ref: i,
    className: o,
    onMouseEnter: c,
    onMouseLeave: u,
    onClick: l,
    children: [
      t,
      s &&
        wt(
          n("div", {
            className: `${xo.hint} ${r ? xo.multiline : ""}`,
            style: { left: `${s.x}px`, top: `${s.y}px` },
            children: [e, n("span", { className: xo.arrow })],
          }),
          document.body
        ),
    ],
  });
}
const iu = "uX6mG52K";
const au = "u5FjrrfL";
const cu = "Z9f7Q3jS";
const lu = "L-43NjOb";
const uu = "E60wxVvR";
const du = "_0dqhEKnD";
const hu = "c-uIo5yi";
const fu = "cB-8IXk5";
const mu = "aUamxQ7e";
const pu = "ObQk27rJ";
const gu = "ovunVXLq";
const vu = "ohs8Npaw";
const wu = "_0K-Z1eD9";
const yu = "LMo4ifSx";
const _u = "_9DD7EG-T";
const Cu = "R0v2YBUB";
const Nu = "kM0p8-Sv";
const bu = "GWzRyPXS";
const Tu = "PURIUyt6";
const ku = "oTS4L6S0";
const Eu = "hgcZGLcX";
const Ru = "FCPywiPM";
const Su = "ynvn-v5t";
const Iu = "rost2Xx2";
const xu = "mAyptXfj";
const Pu = "IJ-MKy8P";
const Au = "av5HkGSu";
const Mu = "-TUw-Z3K";
const Lu = "eLLh95k2";
const $u = "wc3kGqhz";

const se = {
  modal: iu,
  sub: au,
  title: cu,
  section: lu,
  profileSection: uu,
  label: du,
  labelRow: hu,
  dim: fu,
  row: mu,
  icon: pu,
  iconGradient: gu,
  name: vu,
  nameGradient: wu,
  nameBadge: yu,
  plans: _u,
  planOption: Cu,
  selected: Nu,
  radio: bu,
  radioDot: Tu,
  features: ku,
  featureContent: Eu,
  featureTitle: Ru,
  gradientText: Su,
  soon: Iu,
  infoBtn: xu,
  footer: Pu,
  disclaimer: Au,
  disclaimerLink: Mu,
  subscribeBtn: Lu,
  activeLabel: $u,
};

function ns({ text: e }) {
  return n(fo, {
    text: e,
    multiline: true,
    children: n("span", {
      className: se.infoBtn,
      children: n(vi, { size: 14 }),
    }),
  });
}
function xi({ isOpen: e, onClose: t }) {
  const o = wo();
  const [r, i] = I(false);
  if (!e) {
    return null;
  }
  const s = o?.subscription?.isActive ?? false;
  const a = "199";
  const c = "месяц";

  const u = async () => {
    if (!r) {
      i(true);
      try {
        const l = await mt.pay();
        if (l.error) {
          Ue.error(l.error);
          return;
        }

        if (l.confirmationUrl) {
          window.location.href = l.confirmationUrl;
        }
      } catch (l) {
        Ue.error(l?.message || "Ошибка при создании платежа");
      } finally {
        i(false);
      }
    }
  };

  return wt(
    n(Ke, {
      onClose: t,
      showHeader: false,
      frameless: true,
      className: se.modal,
      children: n("div", {
        className: se.sub,
        children: [
          n("div", { className: se.title, children: "ИТД НУКСТА" }),
          n("div", {
            className: `${se.section} ${se.profileSection}`,
            children: [
              n("div", {
                className: se.label,
                children: "Ваш профиль с ИТД НУКСТА",
              }),
              n("div", {
                className: se.row,
                children: [
                  n(st, { src: o?.avatar || null, size: "sm" }),
                  n("div", {
                    children: [
                      n("div", {
                        className: se.name,
                        children: [
                          n("span", {
                            className: se.nameGradient,
                            children: o?.displayName,
                          }),
                          n("span", {
                            className: se.nameBadge,
                            children: "🐙",
                          }),
                        ],
                      }),
                      n("div", { className: se.dim, children: "только что" }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          n("div", {
            className: se.plans,
            children: n("button", {
              type: "button",
              className: `${se.planOption} ${se.selected}`,
              children: [
                n("div", {
                  className: se.row,
                  children: [
                    n("div", {
                      className: se.radio,
                      children: n("div", { className: se.radioDot }),
                    }),
                    n("span", { children: "Ежемесячно" }),
                  ],
                }),
                n("span", { className: se.dim, children: "199 ₽ / месяц" }),
              ],
            }),
          }),
          n("div", {
            className: se.section,
            children: [
              n("div", {
                className: se.labelRow,
                children: [
                  n("span", {
                    className: se.label,
                    children: "Прикольные украшалки",
                  }),
                  n(ns, {
                    text: "итд — полностью независимый проект, который мы делаем сами, без инвесторов и крупных компаний. подписка НУКСТА — это способ поддержать нас, если вам хочется. это совсем не обязательно, мы рады каждому и так! ❤️",
                  }),
                ],
              }),
              n("div", {
                className: se.features,
                children: [
                  n("div", {
                    className: se.row,
                    children: [
                      n("span", {
                        className: se.icon,
                        children: n("div", { className: se.iconGradient }),
                      }),
                      n("div", {
                        children: [
                          n("div", {
                            className: `${se.featureTitle} ${se.gradientText}`,
                            children: "Уникальный цвет ника",
                          }),
                          n("div", {
                            className: se.dim,
                            children:
                              "Клевый цвет ника, который показывает, что вы поддерживаете итд!",
                          }),
                        ],
                      }),
                    ],
                  }),
                  n("div", {
                    className: se.row,
                    children: [
                      n("span", {
                        className: se.icon,
                        children: n(Qo, { size: 20 }),
                      }),
                      n("div", {
                        children: [
                          n("div", {
                            className: se.featureTitle,
                            children: "Пин поддерживателя",
                          }),
                          n("div", {
                            className: se.dim,
                            children:
                              "Получите уникальный пин за поддержку итд",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          n("div", {
            className: se.section,
            children: [
              n("div", {
                className: se.labelRow,
                children: [
                  n("span", {
                    className: se.label,
                    children: "Сможете с нами тестить новые штуки",
                  }),
                  n(ns, {
                    text: "мы постоянно добавляем в итд новые штуки и обычно тестим их внутри команды перед релизом. с подпиской НУКСТА вы сможете попробовать их первыми вместе с нами! а когда всё протестим — фишки станут доступны всем пользователям итд",
                  }),
                ],
              }),
              n("div", {
                className: se.features,
                children: [
                  n("div", {
                    className: se.row,
                    children: [
                      n("span", {
                        className: se.icon,
                        children: n(tl, { size: 20 }),
                      }),
                      n("div", {
                        className: se.featureContent,
                        children: [
                          n("div", {
                            className: se.featureTitle,
                            children: "Загрузка видео",
                          }),
                          n("div", {
                            className: se.dim,
                            children:
                              "Получите возможность загружать видео одним из первых",
                          }),
                        ],
                      }),
                    ],
                  }),
                  n("div", {
                    className: se.row,
                    children: [
                      n("span", {
                        className: se.icon,
                        children: n(Vc, { size: 20 }),
                      }),
                      n("div", {
                        className: se.featureContent,
                        children: [
                          n("div", {
                            className: se.featureTitle,
                            children: [
                              "Сообщения ",
                              n("span", {
                                className: se.soon,
                                children: "soon",
                              }),
                            ],
                          }),
                          n("div", {
                            className: se.dim,
                            children:
                              "Получите доступ к месенджеру одним из первых",
                          }),
                        ],
                      }),
                    ],
                  }),
                  n("div", {
                    className: se.row,
                    children: [
                      n("span", {
                        className: se.icon,
                        children: n(zc, { size: 20 }),
                      }),
                      n("div", {
                        className: se.featureContent,
                        children: [
                          n("div", {
                            className: se.featureTitle,
                            children: [
                              "Музыка ",
                              n("span", {
                                className: se.soon,
                                children: "soon",
                              }),
                            ],
                          }),
                          n("div", {
                            className: se.dim,
                            children:
                              "Получите доступ к музыке без рекламы в итд раньше всех",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          n("div", {
            className: se.footer,
            children: [
              n("div", {
                className: se.disclaimer,
                children: [
                  "Оплачивая, вы соглашаетесь с ",
                  n("a", {
                    href: "/subscription-terms",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: se.disclaimerLink,
                    children: "условиями подписки",
                  }),
                  ", ",
                  n("a", {
                    href: "/privacy",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: se.disclaimerLink,
                    children: "политикой конфиденциальности",
                  }),
                  " и ",
                  n("a", {
                    href: "/terms",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: se.disclaimerLink,
                    children: "условиями использования",
                  }),
                  ".",
                ],
              }),
              s
                ? n("div", {
                    className: se.activeLabel,
                    children: "Подписка активна",
                  })
                : n("button", {
                    type: "button",
                    className: se.subscribeBtn,
                    onClick: u,
                    disabled: r,
                    children: `Подключить за ${a}₽ в ${c}`,
                  }),
            ],
          }),
        ],
      }),
    }),
    document.body
  );
}

const Pi = ({
  href: e,
  icon: t,
  children: o,
  badge: r,
  onActiveClick: i,
  isActive: s = false,
}) =>
  n(gr, {
    path: e,
    children: ({ matches: a }) => {
      const c = a || s;
      return n("a", {
        href: e,
        className: `${Xe.navItem} ${c ? Xe.active : ""}`,
        onClick: (u) => {
          if (c && i) {
            u.preventDefault();
            i();
          }
        },
        children: [
          n("span", {
            className: Xe.iconWrapper,
            children: [
              t,
              r !== undefined &&
                r > 0 &&
                n("span", {
                  className: Xe.badge,
                  children: r > 99 ? "99+" : r,
                }),
            ],
          }),
          n("span", { children: o }),
        ],
      });
    },
  });

const Po = (e) => n(Pi, { ...e });

const Ou = () => {
  const [e] = Fn();

  const t = ye((g) => g.fetchFeed);

  const o = ye((g) => g.isRefreshing);

  const r = Ne((g) => g.logout);

  const i = di();
  const s = wo();
  const a = hi();
  const { initialize: c, disconnectSSE: u } = gn();
  const [l, h] = I(false);
  const [d, f] = I(false);
  const m = fi();

  const N = hr((g) => g.fetchPortal);

  const w = s?.username ? `/@${s.username}` : "/profile";

  W(() => {
    if (i) {
      c();
    }

    return () => {
      u();
    };
  }, [i, c, u]);

  W(() => {
    N();
  }, [N]);

  const v = E(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    t(true);
  }, [t]);

  const p = E(() => {
    r();
  }, [r]);

  const y = Re(() => {
    const g = e.url || "/";
    return vr.some((b) => g.startsWith(b));
  }, [e.url]);

  const T = Re(() => {
    const g = e.url || "/";
    return s?.username
      ? g === `/@${s.username}` || g.startsWith(`/@${s.username}/`)
      : false;
  }, [e.url, s?.username]);

  return (
    y ||
    n("aside", {
      className: Xe.aside,
      children: [
        n("div", {
          className: Xe.asideTop,
          children: [
            n("div", {
              className: Xe.asideBrand,
              children: [
                n(xc, {}),
                n("button", {
                  className: Xe.asideBrandVersion,
                  onClick: () => h(true),
                  title: "Что нового",
                  children: "v1.1",
                }),
              ],
            }),
            n("nav", {
              className: Xe.nav,
              children: [
                n(Po, {
                  href: "/",
                  icon: o ? n(Hn, {}) : n(_i, {}),
                  onActiveClick: v,
                  children: "Лента",
                }),
                n(Po, {
                  href: "/search",
                  icon: n(Ri, {}),
                  children: "Поиск",
                }),
                n(gr, {
                  path: "/event",
                  children: ({ matches: g }) =>
                    n("a", {
                      href: m.active && m.url ? m.url : "/event",
                      target: m.active && m.url ? "_blank" : undefined,
                      rel:
                        m.active && m.url ? "noopener noreferrer" : undefined,
                      className: `${Xe.portalButton} ${
                        m.active ? Xe.portalActive : ""
                      } ${g ? Xe.active : ""}`,
                      title: "Ивент",
                      children: [
                        n("img", {
                          src: m.active
                            ? "/assets/portal/portal-active.gif"
                            : "/assets/portal/portal-inactive.png",
                          alt: "Ивент",
                          className: Xe.portalImage,
                        }),
                        n("span", { children: "Ивент" }),
                      ],
                    }),
                }),
                n(Po, {
                  href: "/notifications",
                  icon: n(mr, {}),
                  badge: a,
                  children: "Уведомления",
                }),
                n(Pi, {
                  href: w,
                  icon: n(ki, {}),
                  isActive: T,
                  children: "Профиль",
                }),
              ],
            }),
          ],
        }),
        n("div", {
          className: Xe.asideBottom,
          children: [
            !s?.subscription?.isActive &&
              n("button", {
                className: Xe.logoutButton,
                onClick: () => f(true),
                children: [
                  n("span", { children: "⭐" }),
                  n("span", { children: "ИТД НУКСТА" }),
                ],
              }),
            n("button", {
              className: Xe.logoutButton,
              onClick: p,
              children: [n(Ni, { size: 20 }), n("span", { children: "Выйти" })],
            }),
          ],
        }),
        n(Vl, { isOpen: l, onClose: () => h(false) }),
        n(xi, { isOpen: d, onClose: () => f(false) }),
      ],
    })
  );
};

const Du = "z8EyAYBL";
const Bu = "Y3JzbYs0";
const Uu = "XG8iIx1m";
const Fu = "lqZNoMkv";
const yn = {
  sidebar: Du,
  sidebarContent: Bu,
  sidebarBottom: Uu,
  legalLinks: Fu,
};

const Hu = () => {
  const [e] = Fn();
  return (
    Re(() => {
      const o = e.url || "/";
      return vr.some((r) => o.startsWith(r));
    }, [e.url]) ||
    n("aside", {
      className: yn.sidebar,
      children: [
        n("div", { className: yn.sidebarContent }),
        n("div", {
          className: yn.sidebarBottom,
          children: [
            n("ul", {
              className: yn.legalLinks,
              children: [
                n("li", {
                  children: n("a", {
                    href: "https://статус.итд.com",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: "Статус серверов",
                  }),
                }),
                n("li", {
                  children: n("a", {
                    href: "/terms",
                    children: "Условия использования",
                  }),
                }),
                n("li", {
                  children: n("a", {
                    href: "/privacy",
                    children: "Конфиденциальность",
                  }),
                }),
                n("li", {
                  children: n("a", {
                    href: "/cookies",
                    children: "Политика Cookies",
                  }),
                }),
              ],
            }),
            n("span", {
              className: yn.copyright,
              children: "© 2026 ООО «ИТД»",
            }),
          ],
        }),
      ],
    })
  );
};

const Wu = "s6RgBrB6";
const Vu = "JOIWgkha";
const ju = "_3zENkokD";
const zu = "_6Pioebei";
const Xu = "Vxc0MjRf";
const Yu = "iQtUV16G";
const Gu = "ZtAKIgsJ";
const Zu = "_1tR-HPhB";
const qu = "Yi-2DSIb";
const Ku = "pBba2HCe";
const Ju = "ozGvh6zv";
const Qu = "_4pOcvhRL";

const Je = {
  mobileNavigationWrapper: Wu,
  navigation: Vu,
  indicator: ju,
  indicatorHidden: zu,
  navItem: Xu,
  label: Yu,
  active: Gu,
  createButton: Zu,
  iconWrapper: qu,
  portalImage: Ku,
  portalImageActive: Ju,
  badge: Qu,
};

const Ai = fn(null);
let ed = 0;
function td({ children: e }) {
  const [t, o] = I([]);

  const r = E((a) => {
    const c = `modal-${++ed}`;

    o((u) => [...u, { id: c, component: a }]);

    return c;
  }, []);

  const i = E((a) => {
    o((c) => (a ? c.filter((u) => u.id !== a) : c.slice(0, -1)));
  }, []);

  const s = E(() => {
    o([]);
  }, []);

  W(() => {
    let a = window.location.pathname + window.location.search;
    const c = () => {
      const h = window.location.pathname + window.location.search;

      if (h !== a) {
        a = h;
        o([]);
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

  return n(Ai.Provider, {
    value: { openModal: r, closeModal: i, closeAllModals: s },
    children: [
      e,
      t.length > 0 &&
        wt(
          n(Se, {
            children: t.map(({ id: a, component: c }) =>
              n("div", { children: c }, a)
            ),
          }),
          document.body
        ),
    ],
  });
}
function tn() {
  const e = go(Ai);
  if (!e) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return e;
}
const nd = "eVYjVkOA";
const od = "VH5uACo-";
const rd = "bTnQQZzL";
const sd = "J-wdczzJ";
const id = "-aJk1548";
const ad = "GJ-316Mz";
const os = { spinner: nd, spin: od, xs: rd, sm: sd, md: id, lg: ad };
function vt({ size: e = "md", className: t }) {
  const o = [os.spinner, os[e], t].filter(Boolean).join(" ");
  return n("div", { className: o, children: n(Hn, {}) });
}
const cd = "WsNIl9yN";
const ld = "s-rIVNft";
const ud = "QJCDyxuF";
const dd = "idj8YT1-";
const hd = "PYBTadOt";
const fd = "_0RWSXOse";
const md = "X3An-GSw";
const pd = "BCtviEiQ";
const gd = "kZamU7XS";
const vd = "FVEEba1t";
const wd = "_2NIyBgLE";
const yd = "IRuH4aXh";

const sn = {
  button: cd,
  primary: ld,
  secondary: ud,
  ghost: dd,
  accent: hd,
  danger: fd,
  sm: md,
  md: pd,
  lg: gd,
  fullWidth: vd,
  iconOnly: wd,
  loading: yd,
};

function Oe({
  children: e,
  variant: t = "primary",
  size: o = "md",
  fullWidth: r = false,
  iconOnly: i = false,
  loading: s = false,
  className: a,
  type: c = "button",
  disabled: u,
  ...l
}) {
  const h = [
    sn.button,
    sn[t],
    sn[o],
    r && sn.fullWidth,
    i && sn.iconOnly,
    s && sn.loading,
    a,
  ]
    .filter(Boolean)
    .join(" ");
  return n("button", {
    type: c,
    className: h,
    disabled: u || s,
    ...l,
    children: s ? n(vt, { size: "sm" }) : e,
  });
}
const _d = "THCvAwre";
const Cd = "sRlzWhtw";
const Nd = "pitt3a-W";
const bd = "tBAzXrnN";
const Td = "ZpD0zMWZ";
const kd = "_4WT1OTu3";
const Ed = "MILRHLTo";
const Rd = "nCy8Y3ZB";
const Sd = "Ib0lgBwH";
const Id = "V-L-u7tm";
const xd = "JALjGN2Z";

const dt = {
  picker: _d,
  searchFloating: Cd,
  searchInput: Nd,
  skinTonePopup: bd,
  skinVariantButton: Td,
  skinVariantImage: kd,
  content: Ed,
  categoryTitle: Rd,
  emojiGrid: Sd,
  emojiButton: Id,
  noResults: xd,
};

const Pd = [
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

const Ad = ["", "1F3FB", "1F3FC", "1F3FD", "1F3FE", "1F3FF"];
const Mi = "emoji-picker-recent";
const lo = 32;

const Md = (e) => {
  try {
    return String.fromCodePoint(...e.split("-").map((t) => parseInt(t, 16)));
  } catch {
    return "";
  }
};

const wr = (e) =>
  `https://cdn.jsdelivr.net/npm/emoji-datasource-apple@latest/img/apple/64/${e.toLowerCase()}.png`;

const rs = () => {
  try {
    const e = localStorage.getItem(Mi);
    return e ? JSON.parse(e) : [];
  } catch {
    return [];
  }
};

const Ld = (e) => {
  try {
    localStorage.setItem(Mi, JSON.stringify(e.slice(0, lo)));
  } catch {}
};

const $d = (e) => {
  const t = [];
  const o = {};
  for (const [r, i] of Object.entries(e)) {
    o[r] = i.map((s) => {
      const a = Array.isArray(s.s) ? s.s : [s.s];

      const c = {
        unified: s.u,
        short_name: a[0],
        short_names: a,
        category: r,
        skin_variations: s.v,
      };

      t.push(c);
      return c;
    });
  }
  return { all: t, byCategory: o };
};

let Zn = null;

const Od = () => {
  const [e, t] = I(Zn);
  const [o, r] = I(!Zn);

  W(() => {
    if (Zn) {
      return;
    }
    (async () => {
      try {
        const s = await Ae(() => import("./emoji-data-DrtcpqC0.js"), []);

        const a = $d(s.default);
        Zn = a;
        t(a);
      } catch (s) {
        console.error("Failed to load emoji data:", s);
      } finally {
        r(false);
      }
    })();
  }, []);

  return Re(
    () => ({
      all: e?.all ?? [],
      byCategory: e?.byCategory ?? {},
      isLoading: o,
    }),
    [e, o]
  );
};

const Dd = (e) => {
  const [t, o] = I([]);
  const r = x([]);
  W(() => {
    o(rs());
  }, []);

  const i = Re(
    () =>
      t
        .slice(0, lo)
        .map((c) => e.find((u) => u.unified === c))
        .filter((c) => c !== undefined),
    [t, e]
  );

  const s = E((c) => {
    if (!r.current.includes(c)) {
      r.current.push(c);
    }
  }, []);

  const a = E(() => {
    if (r.current.length === 0) {
      return;
    }
    const c = rs();
    const l = [...r.current];
    for (const h of c) {
      if (!l.includes(h)) {
        l.push(h);
      }
    }
    Ld(l.slice(0, lo));
    o(l.slice(0, lo));
    r.current = [];
  }, []);

  return { recentEmojis: i, addRecentEmoji: s, flushRecentEmojis: a };
};

const Bd = ({ emoji: e, onClick: t }) =>
  n("button", {
    className: dt.emojiButton,
    onClick: t,
    children: n("img", {
      src: wr(e.unified),
      alt: e.short_name,
      loading: "lazy",
    }),
  });

const Li = (e) => {
  const t = [e.unified];
  if (e.skin_variations) {
    for (const o of Ad.slice(1)) {
      const r = e.skin_variations[o];

      if (r) {
        t.push(r);
      }
    }
  }
  return t;
};

const Ud = ({ popup: e, onSelect: t, onClose: o }) => {
  const r = x(null);
  const i = Li(e.emoji);

  W(() => {
    const s = (a) => {
      if (r.current && !r.current.contains(a.target)) {
        o();
      }
    };
    document.addEventListener("mousedown", s);

    return () => document.removeEventListener("mousedown", s);
  }, [o]);

  return n("div", {
    ref: r,
    className: dt.skinTonePopup,
    style: { left: e.x, top: e.y },
    children: i.map((s) =>
      n(
        "button",
        {
          className: dt.skinVariantButton,
          onClick: () => t(s, e.emoji.short_name),
          children: n("img", {
            src: wr(s),
            alt: "",
            className: dt.skinVariantImage,
          }),
        },
        s
      )
    ),
  });
};

const $i = ({ emojis: e, onEmojiClick: t }) =>
  n("div", {
    className: dt.emojiGrid,
    children: e.map((o) =>
      n(Bd, { emoji: o, onClick: (r) => t(o, r) }, o.unified)
    ),
  });

const Fd = ({ name: e, emojis: t, onEmojiClick: o, sectionRef: r }) =>
  n("div", {
    ref: r,
    className: dt.categorySection,
    children: [
      n("div", { className: dt.categoryTitle, children: e }),
      n($i, { emojis: t, onEmojiClick: o }),
    ],
  });

const Hd = ({ value: e, onChange: t, placeholder: o = "Search emojis..." }) =>
  n("div", {
    className: dt.searchFloating,
    children: n("input", {
      type: "text",
      className: dt.searchInput,
      placeholder: o,
      value: e,
      onInput: (r) => t(r.target.value),
    }),
  });

const Wd = ({
  onEmojiSelect: e,
  onClose: t,
  width: o = 280,
  height: r = 380,
  excludeCategories: i = [],
}) => {
  const [s, a] = I("apple");
  const [c, u] = I("");
  const [l, h] = I(null);
  const d = x(null);
  const f = x(null);
  const m = x({});
  const { all: N, byCategory: w, isLoading: v } = Od();
  const { recentEmojis: p, addRecentEmoji: y, flushRecentEmojis: T } = Dd(N);
  W(
    () => () => {
      T();
      t?.();
    },
    [T, t]
  );

  const g = Re(() => {
    if (!c.trim()) {
      return null;
    }
    const _ = c.toLowerCase();
    return N.filter(
      (P) =>
        !i.includes(P.category) &&
        P.short_names.some((C) => C.toLowerCase().includes(_))
    ).slice(0, 100);
  }, [c, N, i]);

  const b = Re(() => {
    if (s === "apple") {
      const _ = [];

      if (p.length > 0) {
        _.push({ id: "recent", name: "Recent", emojis: p });
      }

      for (const P of Pd) {
        if (i.includes(P)) {
          continue;
        }
        const C = w[P] || [];

        if (C.length !== 0) {
          _.push({ id: P, name: P.split(" & ")[0], emojis: C });
        }
      }
      return _;
    }
    return [];
  }, [s, p, w, i]);

  const S = E((_, P) => {
    if (Li(_).length > 1) {
      const P_currentTarget = P.currentTarget;
      const O = f.current?.getBoundingClientRect();
      const K = P_currentTarget.getBoundingClientRect();
      if (O) {
        const ae = K.left - O.left + K.width / 2;
        const X = K.top - O.top - 60;
        h({ emoji: _, x: ae, y: X });
      }
      return;
    }
    R(_.unified, _.short_name);
  }, []);

  const R = E(
    (_, P) => {
      y(_);
      h(null);
      e({ unified: _, emoji: Md(_), name: P, imageUrl: wr(_) });
    },
    [e, y]
  );

  const k = () =>
    v
      ? n(vt, {})
      : c && g
      ? g.length === 0
        ? n("div", { className: dt.noResults, children: "No emojis found" })
        : n($i, { emojis: g, onEmojiClick: S })
      : n(Se, {
          children: b.map((_) =>
            n(
              Fd,
              {
                name: _.name,
                emojis: _.emojis,
                onEmojiClick: S,
                sectionRef: (P) => {
                  m.current[_.id] = P;
                },
              },
              _.id
            )
          ),
        });

  return n("div", {
    className: dt.picker,
    style: { width: o, height: r },
    ref: f,
    children: [
      l && n(Ud, { popup: l, onSelect: R, onClose: () => h(null) }),
      n("div", { className: dt.content, ref: d, children: k() }),
      n(Hd, { value: c, onChange: u }),
    ],
  });
};

const Vd = "-cIO9SLG";
const jd = "JNwvD1Vo";
const zd = "IHofJbwy";
const Ao = { wrapper: Vd, popup: jd, closing: zd };
const ss = 280;
const is = 380;
const Mo = 8;
const Xd = 100;
const as = 150;
const Yd = 150;
function yr({ onEmojiSelect: e, buttonClassName: t, size: o = 20 }) {
  const [r, i] = I(false);
  const [s, a] = I(false);
  const [c, u] = I(null);
  const l = x(null);
  const h = x(null);
  const d = x(null);
  const f = x(null);
  const m = x(null);
  const N = x(null);

  const w = E(() => {
    const l_current = l.current;
    if (!l_current) {
      return;
    }
    const k = l_current.getBoundingClientRect();

    const { innerHeight, innerWidth } = window;

    const C = innerHeight - k.bottom;
    const F = innerWidth - k.left;
    const k_right = k.right;
    const K = C >= is + Mo ? "bottom" : "top";
    const ae = F >= ss || F > k_right ? "left" : "right";
    let X;
    let Z;

    if (K === "top") {
      X = k.top - is - Mo;
    } else {
      X = k.bottom + Mo;
    }

    if (ae === "left") {
      Z = k.left;
    } else {
      Z = k.right - ss;
    }

    u({
      top: X,
      left: Z,
      transformOrigin: `${K === "top" ? "bottom" : "top"} ${
        ae === "left" ? "left" : "right"
      }`,
    });
  }, []);

  const v = E(() => {
    if (!r && !s) {
      if (!s) {
        w();
        i(true);
      }
    }
  }, [r, s, w]);

  const p = E(() => {
    if (r && !s) {
      if (!s) {
        a(true);

        N.current = window.setTimeout(() => {
          i(false);
          a(false);
        }, Yd);
      }
    }
  }, [r, s]);

  const y = () => {
    if (m.current) {
      clearTimeout(m.current);
      m.current = null;
    }

    if (N.current) {
      clearTimeout(N.current);
      N.current = null;
    }

    if (s) {
      a(false);
    }

    if (!r) {
      f.current = window.setTimeout(() => {
        v();
      }, Xd);
    }
  };

  const T = () => {
    if (f.current) {
      clearTimeout(f.current);
      f.current = null;
    }

    m.current = window.setTimeout(() => {
      p();
    }, as);
  };

  W(
    () => () => {
      if (f.current) {
        clearTimeout(f.current);
      }

      if (m.current) {
        clearTimeout(m.current);
      }

      if (N.current) {
        clearTimeout(N.current);
      }
    },
    []
  );

  const g = () => {
    if (m.current) {
      clearTimeout(m.current);
      m.current = null;
    }

    if (N.current) {
      clearTimeout(N.current);
      N.current = null;
    }

    if (s) {
      a(false);
    }
  };

  const b = () => {
    m.current = window.setTimeout(() => {
      p();
    }, as);
  };

  const S = (R) => {
    R.preventDefault();
  };

  return n("div", {
    ref: h,
    className: Ao.wrapper,
    onMouseEnter: y,
    onMouseLeave: T,
    onMouseDown: S,
    children: [
      n("button", {
        ref: l,
        className: t,
        title: "Добавить эмоджи",
        children: n(Jc, { size: o }),
      }),
      r &&
        c &&
        wt(
          n("div", {
            ref: d,
            className: `${Ao.popup} ${s ? Ao.closing : ""}`,
            style: {
              position: "fixed",
              top: c.top,
              left: c.left,
              transformOrigin: c.transformOrigin,
            },
            onMouseEnter: g,
            onMouseLeave: b,
            onMouseDown: S,
            children: n(Wd, { onEmojiSelect: e }),
          }),
          document.body
        ),
    ],
  });
}
const Gd = "ea0BOksL";
const Zd = "_3x0lVqeJ";
const qd = "k1PR-0WB";
const Kd = "wRV5rijq";
const Jd = "GlXz5E-N";
const Qd = "IHhDMDG-";
const eh = "elFWsy5U";
const th = "eapcoUbX";
const nh = "_6XVFDO74";
const oh = "_8u1ESpvI";
const rh = "fP-JtUai";
const sh = "G1-kgIh2";
const ih = "BbahIL--";
const ah = "pxz5YAHz";
const ch = "GdwJM8jd";
const lh = "Iy4DuTTO";
const uh = "cVrkG6OP";
const dh = "K2WqA9qX";
const hh = "F9c4GceQ";
const fh = "g9QMGpAA";
const mh = "mJqJVajZ";
const ph = "_12S7evy3";
const gh = "lX21h9TT";
const vh = "nbY8-Al7";
const wh = "I0ApjuFw";

const he = {
  modalContent: Gd,
  container: Zd,
  toolbar: qd,
  toolGroup: Kd,
  separator: Jd,
  spacer: Qd,
  toolButton: eh,
  active: th,
  sizeButton: nh,
  sizePreview: oh,
  colorPalette: rh,
  colorButton: sh,
  colorPicker: ih,
  zoomLabel: ah,
  canvasContainer: ch,
  viewport: lh,
  actions: uh,
  cancelButton: dh,
  saveButton: hh,
  confirmOverlay: fh,
  confirmDialog: mh,
  confirmText: ph,
  confirmActions: gh,
  confirmCancel: vh,
  confirmClose: wh,
};

const yh = {
  post: { width: 800, height: 500 },
  banner: { width: 1100, height: 380 },
};

const _h = [
  "#000000",
  "#FFFFFF",
  "#FF3B30",
  "#FF9500",
  "#FFCC00",
  "#34C759",
  "#007AFF",
  "#5856D6",
  "#AF52DE",
  "#FF2D55",
  "#8E8E93",
  "#00C7BE",
];

const Ch = [2, 4, 8, 12, 20, 32];
const zt = 0.25;
const _n = 4;
const an = 0.15;
function Nh({
  isOpen: e,
  onClose: t,
  onSave: o,
  mode: r = "post",
  saveButtonText: i,
}) {
  const [s, a] = I(false);
  const [c, u] = I(false);

  const l = E(() => {
    u(true);
    return false;
  }, []);

  const h = E(() => {
    u(false);
    t();
  }, [t]);

  const d = E(() => {
    u(false);
  }, []);

  const f = x(null);
  const m = x(null);
  const N = x(null);
  const w = x(null);
  const v = x(1);
  const [p, y] = I("brush");
  const [T, g] = I("#000000");
  const [b, S] = I(4);
  const R = x(false);
  const [k, _] = I([]);
  const [P, C] = I(-1);
  const [F, O] = I(1);
  const [K, ae] = I({ x: 0, y: 0 });
  const X = x(1);
  const Z = x({ x: 0, y: 0 });
  const ce = x(false);
  const J = x({ x: 0, y: 0 });
  const te = x(null);
  const B = x(null);
  const { width: z, height: Q } = yh[r];

  const D = E((L, Y) => {
    X.current = L;
    Z.current = Y;
    O(L);
    ae(Y);
  }, []);

  const $ = E((L, Y, j, ve, me) => {
    const fe = (ve - j.x) / L;
    const Ce = (me - j.y) / L;
    return { x: ve - fe * Y, y: me - Ce * Y };
  }, []);

  const V = E(() => {
    const f_current = f.current;
    const N_current = N.current;
    if (!f_current || !N_current) {
      return;
    }
    const j = f_current.getContext("2d");
    if (!j) {
      return;
    }
    const v_current = v.current;
    const me = f_current.width / v_current;
    const fe = f_current.height / v_current;
    const X_current = X.current;
    const Z_current = Z.current;
    j.save();
    j.setTransform(v_current, 0, 0, v_current, 0, 0);
    j.clearRect(0, 0, me, fe);
    j.translate(Z_current.x, Z_current.y);
    j.scale(X_current, X_current);
    j.shadowColor = "rgba(0, 0, 0, 0.15)";
    j.shadowBlur = 20 / X_current;
    j.shadowOffsetX = 0;
    j.shadowOffsetY = 4 / X_current;
    j.fillStyle = "#FFFFFF";
    j.fillRect(0, 0, z, Q);
    j.shadowColor = "transparent";
    j.shadowBlur = 0;
    j.shadowOffsetY = 0;
    j.imageSmoothingEnabled = X_current < 2;
    j.drawImage(N_current, 0, 0, z, Q);
    j.imageSmoothingEnabled = true;
    const B_current = B.current;
    if (B_current) {
      j.strokeStyle = B_current.color;
      j.lineWidth = B_current.lineWidth;
      j.lineCap = "round";
      j.lineJoin = "round";
      j.beginPath();

      if (B_current.tool === "line") {
        j.moveTo(B_current.start.x, B_current.start.y);
        j.lineTo(B_current.current.x, B_current.current.y);
      } else if (B_current.tool === "rectangle") {
        j.rect(
          B_current.start.x,
          B_current.start.y,
          B_current.current.x - B_current.start.x,
          B_current.current.y - B_current.start.y
        );
      } else if (B_current.tool === "circle") {
        const nn = Math.hypot(
          B_current.current.x - B_current.start.x,
          B_current.current.y - B_current.start.y
        );
        j.arc(B_current.start.x, B_current.start.y, nn, 0, Math.PI * 2);
      }

      j.stroke();
    }
    j.restore();
  }, [z, Q]);

  const U = x(V);
  U.current = V;
  const ee = E(
    (L = Infinity) => {
      const m_current = m.current;
      if (!m_current) {
        return;
      }
      const j = m_current.getBoundingClientRect();
      const ve = 32;
      const me = (j.width - ve * 2) / z;
      const fe = (j.height - ve * 2) / Q;
      const Ce = Math.max(zt, Math.min(me, fe, L));
      D(Ce, { x: (j.width - z * Ce) / 2, y: (j.height - Q * Ce) / 2 });
    },
    [z, Q, D]
  );

  W(() => {
    if (!e || !f.current || !f.current || !m.current) {
      return;
    }
    const f_current = f.current;
    const m_current = m.current;
    const j = window.devicePixelRatio || 1;
    v.current = j;
    const ve = m_current.getBoundingClientRect();
    f_current.width = ve.width * j;
    f_current.height = ve.height * j;
    const me = document.createElement("canvas");
    me.width = z * j;
    me.height = Q * j;
    const fe = me.getContext("2d", { willReadFrequently: true });
    if (!fe) {
      return;
    }
    fe.scale(j, j);
    fe.fillStyle = "#FFFFFF";
    fe.fillRect(0, 0, z, Q);
    N.current = me;
    w.current = fe;
    const Ce = fe.getImageData(0, 0, me.width, me.height);
    _([Ce]);
    C(0);
    let Be = true;
    const we = new ResizeObserver((Vn) => {
      for (const jn of Vn) {
        const { width: on, height: Ht } = jn.contentRect;
        if (!(on === 0 || Ht === 0)) {
          f_current.width = on * v.current;
          f_current.height = Ht * v.current;

          if (Be) {
            const bo = (on - 64) / z;
            const To = (Ht - 64) / Q;
            const rn = Math.max(zt, Math.min(bo, To));
            D(rn, { x: (on - z * rn) / 2, y: (Ht - Q * rn) / 2 });
          }

          U.current();
        }
      }
    });
    we.observe(m_current);
    const nn = setTimeout(() => {
      Be = false;
    }, 500);
    return () => {
      clearTimeout(nn);
      we.disconnect();
      N.current = null;
      w.current = null;
    };
  }, [e, z, Q]);

  W(() => {
    V();
  }, [F, K, V]);

  const M = E(() => {
    const w_current = w.current;
    const N_current = N.current;
    if (!w_current || !N_current) {
      return;
    }
    const j = w_current.getImageData(0, 0, N_current.width, N_current.height);

    _((ve) => {
      const me = ve.slice(0, P + 1);
      me.push(j);

      if (me.length > 50) {
        me.shift();
      }

      return me;
    });

    C((ve) => Math.min(ve + 1, 49));
  }, [P]);

  const ne = E(() => {
    if (P <= 0) {
      return;
    }
    const w_current = w.current;
    if (!w_current) {
      return;
    }
    const Y = P - 1;
    const k_Y = k[Y];

    if (k_Y) {
      w_current.putImageData(k_Y, 0, 0);
      C(Y);
      U.current();
    }
  }, [P, k]);

  const re = E(() => {
    if (P >= k.length - 1) {
      return;
    }
    const w_current = w.current;
    if (!w_current) {
      return;
    }
    const Y = P + 1;
    const k_Y = k[Y];

    if (k_Y) {
      w_current.putImageData(k_Y, 0, 0);
      C(Y);
      U.current();
    }
  }, [P, k]);

  const de = E((L) => {
    const f_current = f.current;
    if (!f_current) {
      return { x: 0, y: 0 };
    }
    const j = f_current.getBoundingClientRect();
    let ve;
    let me;

    if ("touches" in L) {
      ve = L.touches[0].clientX;
      me = L.touches[0].clientY;
    } else {
      ve = L.clientX;
      me = L.clientY;
    }

    return {
      x: (ve - j.left - Z.current.x) / X.current,
      y: (me - j.top - Z.current.y) / X.current,
    };
  }, []);

  const ue = E(
    (L) => {
      if (
        ("button" in L && L.button !== 0) ||
        ("touches" in L && L.touches.length > 1)
      ) {
        return;
      }
      L.preventDefault();
      const w_current = w.current;
      if (!w_current) {
        return;
      }
      const j = de(L);
      R.current = true;

      if (p === "brush" || p === "eraser") {
        w_current.beginPath();
        w_current.moveTo(j.x, j.y);
        w_current.lineCap = "round";
        w_current.lineJoin = "round";
        w_current.lineWidth = b;
        w_current.strokeStyle = p === "eraser" ? "#FFFFFF" : T;
      } else {
        B.current = {
          start: j,
          current: j,
          tool: p,
          color: T,
          lineWidth: b,
        };
      }
    },
    [p, T, b, de]
  );

  const De = E(
    (L) => {
      if (!R.current || ("touches" in L && L.touches.length > 1)) {
        return;
      }
      L.preventDefault();
      const Y = de(L);
      if (p === "brush" || p === "eraser") {
        const w_current = w.current;
        if (!w_current) {
          return;
        }
        w_current.lineTo(Y.x, Y.y);
        w_current.stroke();
        U.current();
      } else {
        if (B.current) {
          B.current = { ...B.current, current: Y };
          U.current();
        }
      }
    },
    [p, de]
  );

  const je = E(() => {
    if (!R.current) {
      return;
    }
    R.current = false;
    const B_current = B.current;
    if (B_current) {
      const w_current = w.current;
      if (w_current) {
        w_current.strokeStyle = B_current.color;
        w_current.lineWidth = B_current.lineWidth;
        w_current.lineCap = "round";
        w_current.lineJoin = "round";
        w_current.beginPath();

        if (B_current.tool === "line") {
          w_current.moveTo(B_current.start.x, B_current.start.y);
          w_current.lineTo(B_current.current.x, B_current.current.y);
        } else if (B_current.tool === "rectangle") {
          w_current.rect(
            B_current.start.x,
            B_current.start.y,
            B_current.current.x - B_current.start.x,
            B_current.current.y - B_current.start.y
          );
        } else if (B_current.tool === "circle") {
          const j = Math.hypot(
            B_current.current.x - B_current.start.x,
            B_current.current.y - B_current.start.y
          );
          w_current.arc(
            B_current.start.x,
            B_current.start.y,
            j,
            0,
            Math.PI * 2
          );
        }

        w_current.stroke();
      }
      B.current = null;
    }
    M();
    U.current();
  }, [M]);

  const Me = x(De);
  const it = x(je);
  Me.current = De;
  it.current = je;
  const Ee = E((L) => {
    if (L.button === 1) {
      L.preventDefault();
      ce.current = true;
      J.current = { x: L.clientX, y: L.clientY };
    }
  }, []);

  W(() => {
    if (!e) {
      return;
    }

    const L = (j) => {
      if (ce.current) {
        const ve = j.clientX - J.current.x;
        const me = j.clientY - J.current.y;
        J.current = { x: j.clientX, y: j.clientY };
        const Z_current = Z.current;
        D(X.current, { x: Z_current.x + ve, y: Z_current.y + me });
        return;
      }
      Me.current(j);
    };

    const Y = () => {
      if (ce.current) {
        ce.current = false;
        return;
      }
      it.current();
    };

    window.addEventListener("mousemove", L);
    window.addEventListener("mouseup", Y);

    return () => {
      window.removeEventListener("mousemove", L);
      window.removeEventListener("mouseup", Y);
    };
  }, [e, D]);

  W(() => {
    if (!e) {
      return;
    }
    const L = (Y) => {
      if ((Y.ctrlKey || Y.metaKey) && Y.key === "z") {
        Y.preventDefault();
        Y.shiftKey ? re() : ne();
      }

      if ((Y.ctrlKey || Y.metaKey) && Y.key === "y") {
        Y.preventDefault();
        re();
      }

      if ((Y.ctrlKey || Y.metaKey) && (Y.key === "=" || Y.key === "+")) {
        Y.preventDefault();
        const m_current = m.current;
        if (!m_current) {
          return;
        }
        const ve = m_current.getBoundingClientRect();
        const me = ve.width / 2;
        const fe = ve.height / 2;
        const X_current = X.current;
        const Be = Math.min(_n, X_current + an);
        D(Be, $(X_current, Be, Z.current, me, fe));
      }

      if ((Y.ctrlKey || Y.metaKey) && Y.key === "-") {
        Y.preventDefault();
        const m_current = m.current;
        if (!m_current) {
          return;
        }
        const ve = m_current.getBoundingClientRect();
        const me = ve.width / 2;
        const fe = ve.height / 2;
        const X_current = X.current;
        const Be = Math.max(zt, X_current - an);
        D(Be, $(X_current, Be, Z.current, me, fe));
      }

      if ((Y.ctrlKey || Y.metaKey) && Y.key === "0") {
        Y.preventDefault();
        ee();
      }
    };
    window.addEventListener("keydown", L);

    return () => window.removeEventListener("keydown", L);
  }, [e, ne, re, D, $, ee]);

  W(() => {
    if (!e) {
      return;
    }
    const m_current = m.current;
    if (!m_current) {
      return;
    }
    const Y = (j) => {
      j.preventDefault();
      const ve = m_current.getBoundingClientRect();
      const me = j.clientX - ve.left;
      const fe = j.clientY - ve.top;
      if (j.ctrlKey || j.metaKey) {
        const X_current = X.current;
        const Be = j.deltaY > 0 ? -an : an;
        const we = Math.min(_n, Math.max(zt, X_current + Be));
        if (we === X_current) {
          return;
        }
        D(we, $(X_current, we, Z.current, me, fe));
      } else {
        D(X.current, {
          x: Z.current.x - j.deltaX,
          y: Z.current.y - j.deltaY,
        });
      }
    };
    m_current.addEventListener("wheel", Y, { passive: false });

    return () => m_current.removeEventListener("wheel", Y);
  }, [e, D, $]);

  W(() => {
    if (!e) {
      return;
    }
    const m_current = m.current;
    if (!m_current) {
      return;
    }

    const Y = (fe, Ce) =>
      Math.hypot(Ce.clientX - fe.clientX, Ce.clientY - fe.clientY);

    const j = (fe) => {
      if (fe.touches.length === 2) {
        fe.preventDefault();

        if (R.current) {
          R.current = false;
          B.current = null;
        }

        const Ce = m_current.getBoundingClientRect();
        const Be = fe.touches[0];
        const we = fe.touches[1];
        te.current = {
          dist: Y(Be, we),
          midX: (Be.clientX + we.clientX) / 2 - Ce.left,
          midY: (Be.clientY + we.clientY) / 2 - Ce.top,
        };
      }
    };

    const ve = (fe) => {
      if (fe.touches.length === 2 && te.current) {
        fe.preventDefault();
        const Ce = m_current.getBoundingClientRect();
        const Be = fe.touches[0];
        const we = fe.touches[1];
        const nn = Y(Be, we);
        const Vn = (Be.clientX + we.clientX) / 2 - Ce.left;
        const jn = (Be.clientY + we.clientY) / 2 - Ce.top;
        const on = nn / te.current.dist;
        const X_current = X.current;
        const No = Math.min(_n, Math.max(zt, X_current * on));
        const bo = Vn - te.current.midX;
        const To = jn - te.current.midY;
        const rn = $(
          X_current,
          No,
          Z.current,
          te.current.midX,
          te.current.midY
        );
        D(No, { x: rn.x + bo, y: rn.y + To });
        te.current = { dist: nn, midX: Vn, midY: jn };
      }
    };

    const me = (fe) => {
      if (fe.touches.length < 2) {
        te.current = null;
      }
    };

    m_current.addEventListener("touchstart", j, { passive: false });
    m_current.addEventListener("touchmove", ve, { passive: false });
    m_current.addEventListener("touchend", me);
    m_current.addEventListener("touchcancel", me);

    return () => {
      m_current.removeEventListener("touchstart", j);
      m_current.removeEventListener("touchmove", ve);
      m_current.removeEventListener("touchend", me);
      m_current.removeEventListener("touchcancel", me);
    };
  }, [e, D, $]);

  const le = E(() => {
    const w_current = w.current;

    if (w_current) {
      w_current.fillStyle = "#FFFFFF";
      w_current.fillRect(0, 0, z, Q);
      M();
      U.current();
    }
  }, [z, Q, M]);

  const H = async () => {
    const N_current = N.current;
    if (!N_current || s) {
      return;
    }
    const Y = N_current.toDataURL("image/png");
    a(true);
    try {
      await o(Y);
      t();
    } catch (j) {
      console.error("Failed to save drawing:", j);
    } finally {
      a(false);
    }
  };

  const ie = () => {
    const m_current = m.current;
    if (!m_current) {
      return;
    }
    const Y = m_current.getBoundingClientRect();
    const j = Y.width / 2;
    const ve = Y.height / 2;
    const X_current = X.current;
    const fe = Math.min(_n, X_current + an);
    D(fe, $(X_current, fe, Z.current, j, ve));
  };

  const be = () => {
    const m_current = m.current;
    if (!m_current) {
      return;
    }
    const Y = m_current.getBoundingClientRect();
    const j = Y.width / 2;
    const ve = Y.height / 2;
    const X_current = X.current;
    const fe = Math.max(zt, X_current - an);
    D(fe, $(X_current, fe, Z.current, j, ve));
  };

  const Qe = () => ee();

  return e
    ? n(Se, {
        children: [
          n(Ke, {
            onClose: t,
            onBeforeClose: l,
            showHeader: false,
            contentClassName: he.modalContent,
            size: "wide",
            children: n("div", {
              className: he.container,
              children: [
                n("div", {
                  className: he.toolbar,
                  children: [
                    n("div", {
                      className: he.toolGroup,
                      children: [
                        n("button", {
                          className: `${he.toolButton} ${
                            p === "brush" ? he.active : ""
                          }`,
                          onClick: () => y("brush"),
                          title: "Кисть",
                          children: n(bh, {}),
                        }),
                        n("button", {
                          className: `${he.toolButton} ${
                            p === "eraser" ? he.active : ""
                          }`,
                          onClick: () => y("eraser"),
                          title: "Ластик",
                          children: n(Th, {}),
                        }),
                        n("button", {
                          className: `${he.toolButton} ${
                            p === "line" ? he.active : ""
                          }`,
                          onClick: () => y("line"),
                          title: "Линия",
                          children: n(kh, {}),
                        }),
                        n("button", {
                          className: `${he.toolButton} ${
                            p === "rectangle" ? he.active : ""
                          }`,
                          onClick: () => y("rectangle"),
                          title: "Прямоугольник",
                          children: n(Eh, {}),
                        }),
                        n("button", {
                          className: `${he.toolButton} ${
                            p === "circle" ? he.active : ""
                          }`,
                          onClick: () => y("circle"),
                          title: "Круг",
                          children: n(Rh, {}),
                        }),
                      ],
                    }),
                    n("div", { className: he.separator }),
                    n("div", {
                      className: he.toolGroup,
                      children: Ch.map((L) =>
                        n(
                          "button",
                          {
                            className: `${he.sizeButton} ${
                              b === L ? he.active : ""
                            }`,
                            onClick: () => S(L),
                            title: `${L}px`,
                            children: n("span", {
                              className: he.sizePreview,
                              style: {
                                width: Math.min(L, 20),
                                height: Math.min(L, 20),
                              },
                            }),
                          },
                          L
                        )
                      ),
                    }),
                    n("div", { className: he.separator }),
                    n("div", {
                      className: he.colorPalette,
                      children: [
                        _h.map((L) =>
                          n(
                            "button",
                            {
                              className: `${he.colorButton} ${
                                T === L ? he.active : ""
                              }`,
                              style: { backgroundColor: L },
                              onClick: () => g(L),
                              title: L,
                            },
                            L
                          )
                        ),
                        n("input", {
                          type: "color",
                          value: T,
                          onChange: (L) => g(L.currentTarget.value),
                          className: he.colorPicker,
                          title: "Свой цвет",
                        }),
                      ],
                    }),
                    n("div", { className: he.spacer }),
                    n("div", {
                      className: he.toolGroup,
                      children: [
                        n("button", {
                          className: he.toolButton,
                          onClick: be,
                          disabled: F <= zt,
                          title: "Уменьшить",
                          children: n(Ah, {}),
                        }),
                        n("button", {
                          className: he.zoomLabel,
                          onClick: Qe,
                          title: "Сбросить зум",
                          children: [Math.round(F * 100), "%"],
                        }),
                        n("button", {
                          className: he.toolButton,
                          onClick: ie,
                          disabled: F >= _n,
                          title: "Увеличить",
                          children: n(Ph, {}),
                        }),
                      ],
                    }),
                    n("div", { className: he.separator }),
                    n("div", {
                      className: he.toolGroup,
                      children: [
                        n("button", {
                          className: he.toolButton,
                          onClick: ne,
                          disabled: P <= 0,
                          title: "Отменить (Ctrl+Z)",
                          children: n(Sh, {}),
                        }),
                        n("button", {
                          className: he.toolButton,
                          onClick: re,
                          disabled: P >= k.length - 1,
                          title: "Повторить (Ctrl+Y)",
                          children: n(Ih, {}),
                        }),
                        n("button", {
                          className: he.toolButton,
                          onClick: le,
                          title: "Очистить",
                          children: n(xh, {}),
                        }),
                      ],
                    }),
                  ],
                }),
                n("div", {
                  ref: m,
                  className: he.canvasContainer,
                  onMouseDown: Ee,
                  children: n("canvas", {
                    ref: f,
                    className: he.viewport,
                    onMouseDown: ue,
                    onTouchStart: ue,
                    onTouchMove: De,
                    onTouchEnd: je,
                    onTouchCancel: je,
                  }),
                }),
                n("div", {
                  className: he.actions,
                  children: [
                    n("button", {
                      className: he.cancelButton,
                      onClick: () => l(),
                      disabled: s,
                      children: "Отмена",
                    }),
                    n("button", {
                      className: he.saveButton,
                      onClick: H,
                      disabled: s,
                      children: s
                        ? n(Se, { children: [n(Hn, {}), "Загрузка..."] })
                        : i ||
                          (r === "banner"
                            ? "Загрузить баннер"
                            : "Добавить рисунок"),
                    }),
                  ],
                }),
              ],
            }),
          }),
          c &&
            wt(
              n("div", {
                className: he.confirmOverlay,
                onClick: d,
                children: n("div", {
                  className: he.confirmDialog,
                  onClick: (L) => L.stopPropagation(),
                  children: [
                    n("p", {
                      className: he.confirmText,
                      children:
                        "Вы действительно хотите закрыть рисовалку? Ваши изменения будут не сохранены.",
                    }),
                    n("div", {
                      className: he.confirmActions,
                      children: [
                        n("button", {
                          className: he.confirmCancel,
                          onClick: d,
                          children: "Отмена",
                        }),
                        n("button", {
                          className: he.confirmClose,
                          onClick: h,
                          children: "Закрыть",
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              document.body
            ),
        ],
      })
    : null;
}

const bh = () =>
  n("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: [
      n("path", {
        d: "m9.06 11.9 8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08",
      }),
      n("path", {
        d: "M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1.08 1.1 2.49 2.02 4 2.02 2.2 0 4-1.8 4-4.04a3.01 3.01 0 0 0-3-3.02z",
      }),
    ],
  });

const Th = () =>
  n("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: [
      n("path", {
        d: "m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21",
      }),
      n("path", { d: "M22 21H7" }),
      n("path", { d: "m5 11 9 9" }),
    ],
  });

const kh = () =>
  n("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: n("line", { x1: "5", y1: "19", x2: "19", y2: "5" }),
  });

const Eh = () =>
  n("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: n("rect", {
      x: "3",
      y: "3",
      width: "18",
      height: "18",
      rx: "2",
    }),
  });

const Rh = () =>
  n("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: n("circle", { cx: "12", cy: "12", r: "10" }),
  });

const Sh = () =>
  n("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: [
      n("path", { d: "M3 7v6h6" }),
      n("path", { d: "M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13" }),
    ],
  });

const Ih = () =>
  n("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: [
      n("path", { d: "M21 7v6h-6" }),
      n("path", { d: "M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7" }),
    ],
  });

const xh = () =>
  n("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: [
      n("path", { d: "M3 6h18" }),
      n("path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" }),
      n("path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" }),
    ],
  });

const Ph = () =>
  n("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: [
      n("circle", { cx: "11", cy: "11", r: "8" }),
      n("line", { x1: "21", y1: "21", x2: "16.65", y2: "16.65" }),
      n("line", { x1: "11", y1: "8", x2: "11", y2: "14" }),
      n("line", { x1: "8", y1: "11", x2: "14", y2: "11" }),
    ],
  });

const Ah = () =>
  n("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: [
      n("circle", { cx: "11", cy: "11", r: "8" }),
      n("line", { x1: "21", y1: "21", x2: "16.65", y2: "16.65" }),
      n("line", { x1: "8", y1: "11", x2: "14", y2: "11" }),
    ],
  });

const Mh = "_2sS6K7hx";
const Lh = "WGDOlmRO";
const $h = "hvpitmZY";
const Oh = "BStIlELw";
const Dh = "aY94etMT";
const Bh = "rPynk8pw";
const Uh = "BOAqDnoc";
const Fh = "haxq9tnV";
const Hh = "_913-arE-";
const Wh = "_76HhedQ0";
const Vh = "_7PQB1LTO";
const jh = "UnOw5SXP";
const zh = "s594n2Yt";
const Xh = "nOfp-no-";
const Yh = "PRj4ZKu-";
const Gh = "_0a-n56Kv";

const Ye = {
  editor: Mh,
  empty: Lh,
  bold: $h,
  italic: Oh,
  underline: Dh,
  strike: Bh,
  spoiler: Uh,
  monospace: Fh,
  quote: Hh,
  link: Wh,
  menu: Vh,
  buttons: jh,
  button: zh,
  linkForm: Xh,
  linkInput: Yh,
  linkSubmit: Gh,
};

const Zh = [
  { type: "bold", icon: Ic, title: "Жирный" },
  { type: "italic", icon: Mc, title: "Курсив" },
  { type: "underline", icon: Bc, title: "Подчёркнутый" },
  { type: "strike", icon: Oc, title: "Зачёркнутый" },
  { type: "spoiler", icon: $c, title: "Спойлер" },
  { type: "monospace", icon: Pc, title: "Моноширинный" },
  { type: "quote", icon: Lc, title: "Цитата" },
  { type: "link", icon: wi, title: "Ссылка" },
];

const mo = {
  bold: Ye.bold,
  italic: Ye.italic,
  underline: Ye.underline,
  strike: Ye.strike,
  spoiler: Ye.spoiler,
  monospace: Ye.monospace,
  quote: Ye.quote,
  link: Ye.link,
};

const Co = Un(
  (
    {
      value: t,
      spans: o,
      onChange: r,
      placeholder: i = "Написать...",
      maxLength: s = 5000 /* 5e3 */,
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
    const N = x(null);
    const [w, v] = I(false);
    const [p, y] = I({ x: 0, y: 0 });
    const [T, g] = I(false);
    const [b, S] = I("");
    const R = x(null);
    const k = x(null);
    const _ = x(null);
    const P = x(false);
    const C = x(false);
    const F = x(t);
    const O = x(o);
    const K = x(r);

    W(() => {
      F.current = t;
      O.current = o;
      K.current = r;
    }, [t, o, r]);

    pn(
      m,
      () => ({
        insertText: ($) => {
          const N_current = N.current;
          if (!N_current) {
            return;
          }
          N_current.focus();
          const U = window.getSelection();
          if (!U) {
            return;
          }
          let oe = 0;
          if (U.rangeCount > 0) {
            const ue = U.getRangeAt(0);
            oe = Jh(N_current, ue.startContainer, ue.startOffset);
          }
          const F_current = F.current;
          const O_current = O.current;
          const ne = F_current.slice(0, oe) + $ + F_current.slice(oe);

          const re = O_current.map((ue) =>
            ue.offset >= oe
              ? { ...ue, offset: ue.offset + $.length }
              : ue.offset + ue.length > oe
              ? { ...ue, length: ue.length + $.length }
              : ue
          );

          C.current = true;
          F.current = ne;
          O.current = re;
          const de = document.createTextNode($);
          if (U.rangeCount > 0) {
            const ue = U.getRangeAt(0);
            ue.deleteContents();
            ue.insertNode(de);
            ue.setStartAfter(de);
            ue.setEndAfter(de);
            U.removeAllRanges();
            U.addRange(ue);
          }
          K.current(ne, re);
        },

        focus: () => {
          N.current?.focus();
        },
      }),
      []
    );

    const ae = E(() => {
      if (!t) {
        return "";
      }
      if (o.length === 0) {
        return Lo(t);
      }

      const $ = [...o].sort((M, ne) => M.offset - ne.offset);

      const V = [];
      for (const M of $) {
        V.push({ pos: M.offset, type: "start", span: M });
        V.push({ pos: M.offset + M.length, type: "end", span: M });
      }
      V.sort((M, ne) =>
        M.pos !== ne.pos
          ? M.pos - ne.pos
          : M.type !== ne.type
          ? M.type === "end"
            ? -1
            : 1
          : 0
      );
      let U = "";
      let oe = 0;
      const ee = [];
      for (const M of V) {
        if (M.pos > oe) {
          const ne = t.substring(oe, M.pos);
          U += cs(Lo(ne), ee);
          oe = M.pos;
        }
        if (M.type === "start") {
          ee.push(M.span);
        } else {
          const ne = ee.indexOf(M.span);

          if (ne !== -1) {
            ee.splice(ne, 1);
          }
        }
      }
      if (oe < t.length) {
        const M = t.substring(oe);
        U += cs(Lo(M), ee);
      }
      return U || "<br>";
    }, [t, o]);

    W(() => {
      if (C.current) {
        C.current = false;
        return;
      }
      const N_current = N.current;
      if (!N_current || (document.activeElement === N_current && t !== "")) {
        return;
      }
      const V = ae();

      if (N_current.innerHTML !== V) {
        N_current.innerHTML = V;
      }
    }, [ae, t]);

    W(() => {
      if (a && N.current) {
        const N_current = N.current;
        N_current.focus();

        if (N_current.childNodes.length > 0) {
          const V = window.getSelection();
          if (V) {
            const U = document.createRange();
            U.selectNodeContents(N_current);
            U.collapse(false);
            V.removeAllRanges();
            V.addRange(U);
          }
        }
      }
    }, [a]);

    W(() => {
      if (T && k.current) {
        k.current.focus();
      }
    }, [T]);

    const X = E(
      ($) => {
        if (P.current) {
          return;
        }
        const N_current = N.current;
        if (!N_current) {
          return;
        }
        if ($?.data === " ") {
          const ee = window.getSelection();
          if (ee && ee.rangeCount > 0) {
            const ne = ee.getRangeAt(0).startContainer;
            let re = null;
            let de = ne;

            while (de && de !== N_current) {
              if (de.nodeType === Node.ELEMENT_NODE) {
                const ue = de;
                if (ue.tagName === "SPAN" && ue.className) {
                  re = ue;
                  break;
                }
              }
              de = de.parentNode;
            }

            if (re) {
              const ue = re.textContent || "";
              if (ue.endsWith(" ")) {
                re.textContent = ue.slice(0, -1);
                const De = document.createTextNode(" ");
                re.parentNode?.insertBefore(De, re.nextSibling);
                const je = document.createRange();
                je.setStartAfter(De);
                je.setEndAfter(De);
                ee.removeAllRanges();
                ee.addRange(je);
              }
            }
          }
        }
        const U = N_current.innerText.replace(/\n$/, "");
        if (U.length > s) {
          const ee = U.substring(0, s);
          C.current = true;
          r(ee, Qh(o, ee));
          return;
        }
        const oe = ef(N_current);
        C.current = true;
        r(U, oe);
      },
      [s, r, o]
    );

    const Z = E(
      ($) => {
        if (d) {
          return;
        }
        const V = window.getSelection();
        if (!V || V.isCollapsed) {
          return;
        }
        $.preventDefault();
        _.current = V.getRangeAt(0).cloneRange();

        const U = Math.max(
          10,
          Math.min($.clientX - 150, window.innerWidth - 310)
        );

        const oe = Math.max(10, $.clientY - 50);
        y({ x: U, y: oe });
        v(true);
      },
      [d]
    );

    const ce = E(
      ($) => {
        $.preventDefault();

        if (f && $.clipboardData?.files?.length) {
          const M = Array.from($.clipboardData.files).filter((ne) =>
            ne.type.startsWith("image/")
          );
          if (M.length > 0) {
            f(M);
            return;
          }
        }

        const V = $.clipboardData?.getData("text/plain") || "";
        if (!V) {
          return;
        }
        const U = window.getSelection();
        if (!U || !U.rangeCount) {
          return;
        }
        const oe = U.getRangeAt(0);
        oe.deleteContents();
        const ee = document.createTextNode(V);
        oe.insertNode(ee);
        oe.setStartAfter(ee);
        oe.setEndAfter(ee);
        U.removeAllRanges();
        U.addRange(oe);
        X();
      },
      [X, f]
    );

    const J = E(() => {
      const N_current = N.current;
      if (N_current && !F.current) {
        const V = window.getSelection();
        if (V) {
          const U = document.createRange();
          U.setStart(N_current, 0);
          U.collapse(true);
          V.removeAllRanges();
          V.addRange(U);
        }
      }
    }, []);

    const te = E(
      ($) => {
        if ($.key === "Enter" && !$.shiftKey && h) {
          $.preventDefault();
          h();
          return;
        }
        if (!d && ($.ctrlKey || $.metaKey)) {
          let V = null;
          switch ($.key.toLowerCase()) {
            case "b": {
              V = "bold";
              break;
            }
            case "i": {
              V = "italic";
              break;
            }
            case "u": {
              V = "underline";
              break;
            }
          }

          if (V) {
            $.preventDefault();
            B(V);
          }
        }
      },
      [h, d]
    );

    const B = E(
      ($, V) => {
        const N_current = N.current;
        if (!N_current) {
          return;
        }
        const oe = window.getSelection();
        if (
          !oe ||
          (_.current && (oe.removeAllRanges(), oe.addRange(_.current)),
          oe.isCollapsed)
        ) {
          return;
        }
        const ee = oe.getRangeAt(0);
        const M = document.createElement("span");
        M.className = mo[$];

        if ($ === "link" && V) {
          M.dataset.url = V;
        }

        const ne = tf(ee.commonAncestorContainer, mo[$]);
        if (ne) {
          nf(ne);
        } else {
          try {
            ee.surroundContents(M);
          } catch {
            const re = ee.extractContents();
            M.appendChild(re);
            ee.insertNode(M);
          }
        }
        X();
        v(false);
        g(false);
        S("");
        _.current = null;
        N_current.focus();
      },
      [X]
    );

    const z = E(
      ($) => {
        if ($ === "link") {
          g(true);
        } else {
          B($);
        }
      },
      [B]
    );

    const Q = E(
      ($) => {
        $.preventDefault();

        if (b.trim()) {
          B("link", b.trim());
        }
      },
      [B, b]
    );

    W(() => {
      if (!w) {
        return;
      }

      const $ = (U) => {
        if (R.current && !R.current.contains(U.target)) {
          v(false);
          g(false);
          S("");
          _.current = null;
        }
      };

      const V = () => {
        v(false);
        g(false);
        S("");
        _.current = null;
      };

      document.addEventListener("mousedown", $);
      window.addEventListener("scroll", V, true);

      return () => {
        document.removeEventListener("mousedown", $);
        window.removeEventListener("scroll", V, true);
      };
    }, [w]);
    const D = !t;
    return n(Se, {
      children: [
        n("div", {
          ref: N,
          className: `${Ye.editor} ${c} ${D ? Ye.empty : ""}`,
          contentEditable: true,
          "data-placeholder": i,
          onInput: ($) => X($),
          onFocus: J,
          onPaste: ce,
          onContextMenu: Z,
          onKeyDown: te,
          onCompositionStart: () => {
            P.current = true;
          },
          onCompositionEnd: () => {
            P.current = false;
            X();
          },
          style: { minHeight: u, maxHeight: l },
        }),
        w &&
          wt(
            n("div", {
              ref: R,
              className: Ye.menu,
              style: { left: p.x, top: p.y },
              children: T
                ? n("form", {
                    className: Ye.linkForm,
                    onSubmit: Q,
                    children: [
                      n("input", {
                        ref: k,
                        type: "url",
                        className: Ye.linkInput,
                        placeholder: "https://...",
                        value: b,
                        onInput: ($) => S($.target.value),
                      }),
                      n("button", {
                        type: "submit",
                        className: Ye.linkSubmit,
                        disabled: !b.trim(),
                        children: "OK",
                      }),
                    ],
                  })
                : n("div", {
                    className: Ye.buttons,
                    children: Zh.map(({ type: $, icon: V, title: U }) =>
                      n(
                        "button",
                        {
                          type: "button",
                          className: Ye.button,
                          onClick: () => z($),
                          title: U,
                          children: n(V, { size: 16 }),
                        },
                        $
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

function Lo(e) {
  return e
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\n/g, "<br>");
}
function qh(e) {
  return e
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}
function Kh(e) {
  return e !== "mention" && e !== "hashtag";
}
function cs(e, t) {
  if (t.length === 0) {
    return e;
  }
  let o = e;
  for (const r of t) {
    if (!Kh(r.type)) {
      continue;
    }
    const i = mo[r.type];
    const s = r.type === "link" ? ` data-url="${qh(r.url)}"` : "";
    o = `<span class="${i}"${s}>${o}</span>`;
  }
  return o;
}
function Jh(e, t, o) {
  let r = 0;
  const i = document.createTreeWalker(e, NodeFilter.SHOW_TEXT);
  let s = i.nextNode();

  while (s) {
    if (s === t) {
      return r + o;
    }
    r += s.textContent?.length || 0;
    s = i.nextNode();
  }

  return r;
}
function Qh(e, t) {
  return e
    .map((o) => {
      const r = o.offset + o.length;
      return o.offset >= t.length
        ? null
        : r > t.length
        ? { ...o, length: t.length - o.offset }
        : o;
    })
    .filter((o) => o !== null);
}
function ef(e) {
  const t = [];

  const o = (r, i) => {
    if (r.nodeType === Node.TEXT_NODE) {
      return i + (r.textContent?.length || 0);
    }
    if (r.nodeType === Node.ELEMENT_NODE) {
      const s = r;
      if (s.tagName === "BR") {
        return i + 1;
      }
      let a = null;
      for (const [l, h] of Object.entries(mo)) {
        if (s.classList.contains(h)) {
          a = l;
          break;
        }
      }
      const c = i;
      let u = i;
      for (const l of Array.from(r.childNodes)) {
        u = o(l, u);
      }
      if (a && u > c) {
        const l =
          a === "link"
            ? {
                type: "link",
                url: s.dataset.url || "",
                offset: c,
                length: u - c,
              }
            : { type: a, offset: c, length: u - c };
        t.push(l);
      }
      return u;
    }
    return i;
  };

  o(e, 0);
  return t;
}
function tf(e, t) {
  let o = e;

  while (o && o.nodeType !== Node.DOCUMENT_NODE) {
    if (o.nodeType === Node.ELEMENT_NODE) {
      const r = o;
      if (r.classList.contains(t)) {
        return r;
      }
    }
    o = o.parentNode;
  }

  return null;
}
function nf(e) {
  const e_parentNode = e.parentNode;
  if (e_parentNode) {
    while (e.firstChild) {
      e_parentNode.insertBefore(e.firstChild, e);
    }

    e_parentNode.removeChild(e);
  }
}
const of = "u13FLJio";
const rf = "bToZwjfv";
const sf = "eB--cks6";
const af = "_9ohK9-tN";
const cf = "j2Wceqpa";
const lf = "SKnXo-cA";
const uf = "_8wZrlhZa";
const df = "ywO8uWzl";
const hf = "q4IPCH5G";
const ff = "iqaeIAPL";
const mf = "YGC2tIXC";
const pf = "Hvh4qKiC";
const gf = "-bZAaxpL";
const vf = "mY50rIUo";
const wf = "SVQ04Pz4";
const yf = "-aTjRl6d";
const _f = "vskBTYBr";
const Cf = "_0haeBjBl";
const Nf = "m4JSOoi7";
const bf = "xuKvww1d";
const Tf = "GMSlkrum";
const kf = "T1UhUe7-";
const Ef = "KPX--Htj";
const Rf = "UDcyRX73";
const Sf = "G9MjuFO7";
const If = "yAXdi86A";
const xf = "_5EoTr5dx";
const Pf = "_2aj24MP-";
const Af = "_5JkW0FiQ";
const Mf = "X4D-Hg95";
const Lf = "WafaU2-d";
const $f = "eb-u7Ezx";
const Of = "u52eDQyv";
const Df = "V-0z6M2W";
const Bf = "_7-fvD6Zx";

const ge = {
  form: of,
  dragActive: rf,
  whatsNew: sf,
  editor: af,
  dragOverlay: cf,
  attachments: lf,
  attachmentPreview: uf,
  uploading: df,
  uploadError: hf,
  videoPreviewWrapper: ff,
  videoPlayIcon: mf,
  uploadOverlay: pf,
  spinner: gf,
  errorOverlay: vf,
  errorText: wf,
  removeAttachment: yf,
  actions: _f,
  mediaButtons: Cf,
  mediaButton: Nf,
  submitGroup: bf,
  charCount: Tf,
  error: kf,
  pollContainer: Ef,
  pollHeader: Rf,
  pollTitle: Sf,
  pollClose: If,
  pollQuestion: xf,
  pollOptions: Pf,
  pollOptionRow: Af,
  pollOption: Mf,
  removeOption: Lf,
  addOption: $f,
  pollFooter: Of,
  pollToggle: Df,
  active: Bf,
};

function ls({ src: e, type: t }) {
  return t === "video"
    ? n("div", {
        className: ge.videoPreviewWrapper,
        children: [
          n("video", { src: e, preload: "metadata" }),
          n("div", {
            className: ge.videoPlayIcon,
            children: n("svg", {
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "white",
              children: n("path", { d: "M8 5v14l11-7z" }),
            }),
          }),
        ],
      })
    : n("img", { src: e, alt: "" });
}
function Oi({ images: e, uploadingImages: t, onRemove: o }) {
  return e.length > 0 || t.length > 0
    ? n("div", {
        className: ge.attachments,
        children: [
          e.map((i) =>
            n(
              "div",
              {
                className: ge.attachmentPreview,
                children: [
                  n(ls, { src: i.previewUrl, type: i.type }),
                  n("button", {
                    className: ge.removeAttachment,
                    onClick: () => o(i.id),
                    children: n(Et, {}),
                  }),
                ],
              },
              i.id
            )
          ),
          t.map((i) =>
            n(
              "div",
              {
                className: `${ge.attachmentPreview} ${
                  i.error ? ge.uploadError : ge.uploading
                }`,
                children: [
                  n(ls, { src: i.previewUrl, type: i.type }),
                  !i.error &&
                    n("div", {
                      className: ge.uploadOverlay,
                      children: n("div", { className: ge.spinner }),
                    }),
                  i.error &&
                    n("div", {
                      className: ge.errorOverlay,
                      children: n("span", {
                        className: ge.errorText,
                        children: i.error,
                      }),
                    }),
                  n("button", {
                    className: ge.removeAttachment,
                    onClick: () => o(i.id),
                    children: n(Et, {}),
                  }),
                ],
              },
              i.id
            )
          ),
        ],
      })
    : null;
}
const Lt = {
  MAX_CHARS: 1000 /* 1e3 */,
  MIN_POLL_OPTIONS: 2,
  MAX_POLL_OPTIONS: 10,
  MAX_POLL_QUESTION_LENGTH: 200,
  MAX_POLL_OPTION_LENGTH: 100,
  MAX_TEXTAREA_HEIGHT: 400,
};
function Uf({
  poll: e,
  onQuestionChange: t,
  onOptionChange: o,
  onAddOption: r,
  onRemoveOption: i,
  onMultipleChoiceToggle: s,
  onClose: a,
}) {
  return n("div", {
    className: ge.pollContainer,
    children: [
      n("div", {
        className: ge.pollHeader,
        children: [
          n("span", { className: ge.pollTitle, children: "Опрос" }),
          n("button", {
            className: ge.pollClose,
            onClick: a,
            children: n(Et, {}),
          }),
        ],
      }),
      n("input", {
        type: "text",
        className: ge.pollQuestion,
        placeholder: "Вопрос опроса",
        value: e.question,
        onInput: (c) => t(c.target.value),
      }),
      n("div", {
        className: ge.pollOptions,
        children: e.options.map((c, u) =>
          n(
            "div",
            {
              className: ge.pollOptionRow,
              children: [
                n("input", {
                  type: "text",
                  className: ge.pollOption,
                  placeholder: `Вариант ${u + 1}`,
                  value: c.text,
                  maxLength: 50,
                  onInput: (l) => o(c.id, l.target.value),
                }),
                e.options.length > Lt.MIN_POLL_OPTIONS &&
                  n("button", {
                    className: ge.removeOption,
                    onClick: () => i(c.id),
                    children: n(Et, {}),
                  }),
              ],
            },
            c.id
          )
        ),
      }),
      e.options.length < Lt.MAX_POLL_OPTIONS &&
        n("button", {
          className: ge.addOption,
          onClick: r,
          children: [n(pr, {}), n("span", { children: "Добавить вариант" })],
        }),
      n("div", {
        className: ge.pollFooter,
        children: n("label", {
          className: ge.pollToggle,
          children: [
            n("input", {
              type: "checkbox",
              checked: e.multipleChoice,
              onChange: s,
            }),
            n("span", { children: "Несколько вариантов ответа" }),
          ],
        }),
      }),
    ],
  });
}
const $o = {
  question: "",
  options: [
    { id: "1", text: "" },
    { id: "2", text: "" },
  ],
  multipleChoice: false,
};
function Ff() {
  const [e, t] = I(false);
  const [o, r] = I($o);

  const i = E((N) => {
    if (N.length <= Lt.MAX_POLL_QUESTION_LENGTH) {
      r((w) => ({
        ...w,
        question: N,
      }));
    }
  }, []);

  const s = E((N, w) => {
    if (w.length <= Lt.MAX_POLL_OPTION_LENGTH) {
      r((v) => ({
        ...v,
        options: v.options.map((p) => (p.id === N ? { ...p, text: w } : p)),
      }));
    }
  }, []);

  const a = E(() => {
    if (o.options.length < Lt.MAX_POLL_OPTIONS) {
      r((N) => ({
        ...N,
        options: [...N.options, { id: Date.now().toString(), text: "" }],
      }));
    }
  }, [o.options.length]);

  const c = E(
    (N) => {
      if (o.options.length > Lt.MIN_POLL_OPTIONS) {
        r((w) => ({
          ...w,
          options: w.options.filter((v) => v.id !== N),
        }));
      }
    },
    [o.options.length]
  );

  const u = E(() => {
    r((N) => ({
      ...N,
      multipleChoice: !N.multipleChoice,
    }));
  }, []);

  const l = E(() => {
    t(false);
    r($o);
  }, []);

  const h = E(() => {
    t((N) => !N);
  }, []);

  const d = E(() => {
    if (!e) {
      return true;
    }
    const N = o.question.trim().length > 0;

    const w = o.options.filter((v) => v.text.trim().length > 0);

    return N && w.length >= Lt.MIN_POLL_OPTIONS;
  }, [e, o]);

  const f = E(() => {
    if (!(!e || !d())) {
      return {
        question: o.question.trim(),
        options: o.options
          .filter((N) => N.text.trim().length > 0)
          .map((N) => ({
            text: N.text.trim(),
          })),
        multipleChoice: o.multipleChoice,
      };
    }
  }, [e, d, o]);

  const m = E(() => {
    t(false);
    r($o);
  }, []);

  return {
    isPollOpen: e,
    poll: o,
    togglePoll: h,
    handlePollQuestionChange: i,
    handlePollOptionChange: s,
    handleAddPollOption: a,
    handleRemovePollOption: c,
    handleMultipleChoiceToggle: u,
    handleClosePoll: l,
    isPollValid: d,
    getPollData: f,
    resetPoll: m,
  };
}
const Hf = {
  [ke.CONTENT_MODERATION_FAILED]: "Изображение содержит запрещённый контент",
  [ke.FILE_TOO_LARGE]: "Файл слишком большой",
  [ke.UNSUPPORTED_FILE_TYPE]: "Неподдерживаемый формат файла",
  [ke.UPLOAD_FAILED]: "Не удалось загрузить файл",
  [ke.VIDEO_REQUIRES_VERIFICATION]:
    "Загрузка видео доступна только верифицированным пользователям",
  [ke.RATE_LIMIT_EXCEEDED]: "Слишком много запросов. Попробуйте позже",
  [ke.UNAUTHORIZED]: "Требуется авторизация",
  [ke.ACCESS_DENIED]: "Доступ запрещён",
  [ke.NETWORK_ERROR]: "Ошибка сети. Проверьте подключение",
  [ke.TIMEOUT]: "Превышено время ожидания",
};
function Wf(e, t = "Произошла ошибка") {
  return e ? Hf[e] ?? t : t;
}
function Di(e = 10, t = false) {
  const [o, r] = I([]);
  const [i, s] = I([]);
  const a = x(null);
  const c = x(o);
  const u = x(i);
  c.current = o;
  u.current = i;

  W(
    () => () => {
      c.current.forEach((T) => URL.revokeObjectURL(T.previewUrl));

      u.current.forEach((T) => URL.revokeObjectURL(T.previewUrl));
    },
    []
  );

  const l = i.length > 0;

  const h =
    o.some((T) => T.type === "video") || i.some((T) => T.type === "video");

  const d =
    o.some((T) => T.type === "image") || i.some((T) => T.type === "image");

  const f = E(() => {
    a.current?.click();
  }, []);

  const m = E(
    async (T) => {
      const g = ln.isValidVideoType(T);
      const b = ln.isValidImageType(T);
      if (g && !t) {
        Ue.error(
          "Загрузка видео доступна только верифицированным пользователям"
        );
        return;
      }
      if (!b && !g) {
        Ue.error("Неподдерживаемый формат файла");
        return;
      }
      const c_current = c.current;
      const u_current = u.current;

      const k =
        c_current.some((O) => O.type === "video") ||
        u_current.some((O) => O.type === "video");

      const _ =
        c_current.some((O) => O.type === "image") ||
        u_current.some((O) => O.type === "image");

      if (g && _) {
        Ue.error("Нельзя добавить видео вместе с изображениями");
        return;
      }
      if (b && k) {
        Ue.error("Нельзя добавить изображения вместе с видео");
        return;
      }
      if (g && k) {
        Ue.error("Можно загрузить только 1 видео");
        return;
      }
      const P = `upload-${Date.now()}-${Math.random().toString(36).slice(2)}`;
      const C = URL.createObjectURL(T);
      const F = g ? "video" : "image";
      s((O) => [...O, { id: P, file: T, previewUrl: C, progress: 0, type: F }]);
      try {
        const O = await ln.uploadMedia(T);

        s((K) => K.filter((ae) => ae.id !== P));

        r((K) => [
          ...K,
          {
            id: `img-${Date.now()}-${Math.random().toString(36).slice(2)}`,
            mediaId: O.id,
            url: O.url,
            previewUrl: C,
            type: F,
          },
        ]);
      } catch (O) {
        let K = "Ошибка загрузки";

        if (He(O)) {
          K = Wf(O.code, O.message);
        } else if (O instanceof Error) {
          K = O.message;
        }

        Ue.error(K);

        s((ae) => ae.filter((X) => X.id !== P));

        URL.revokeObjectURL(C);
      }
    },
    [t]
  );

  const N = E(
    (T) => {
      const T_target = T.target;
      const T_target_files = T_target.files;
      if (!T_target_files || T_target_files.length === 0) {
        return;
      }
      const S = o.length + i.length;
      const R = e - S;
      if (R <= 0) {
        return;
      }
      Array.from(T_target_files).slice(0, R).forEach(m);
      T_target.value = "";
    },
    [o.length, i.length, e, m]
  );

  const w = E((T) => {
    r((g) => {
      const b = g.find((S) => S.id === T);

      if (b) {
        URL.revokeObjectURL(b.previewUrl);
      }

      return g.filter((S) => S.id !== T);
    });

    s((g) => {
      const b = g.find((S) => S.id === T);

      if (b) {
        URL.revokeObjectURL(b.previewUrl);
      }

      return g.filter((S) => S.id !== T);
    });
  }, []);

  const v = E(
    (T) => {
      const g = T.filter((R) =>
        t ? ln.isValidMediaType(R) : ln.isValidImageType(R)
      );
      if (g.length === 0) {
        return;
      }
      const b = c.current.length + u.current.length;
      const S = e - b;

      if (S > 0) {
        g.slice(0, S).forEach(m);
      }
    },
    [e, m, t]
  );

  const p = E(
    async (T) => {
      const [g, b] = T.split(",");
      const S = g.match(/:(.*?);/)?.[1] || "image/png";
      const R = atob(b);
      const k = new Uint8Array(R.length);
      for (let C = 0; C < R.length; C++) {
        k[C] = R.charCodeAt(C);
      }
      const _ = new Blob([k], { type: S });
      const P = new File([_], `drawing-${Date.now()}.png`, {
        type: "image/png",
      });
      m(P);
    },
    [m]
  );

  const y = E(() => {
    o.forEach((T) => URL.revokeObjectURL(T.previewUrl));

    i.forEach((T) => URL.revokeObjectURL(T.previewUrl));

    r([]);
    s([]);
  }, [o, i]);

  return {
    images: o,
    uploadingImages: i,
    isUploading: l,
    hasVideo: h,
    hasImages: d,
    openFilePicker: f,
    removeImage: w,
    addImage: p,
    uploadFiles: v,
    clearAll: y,
    fileInputRef: a,
    handleFileChange: N,
  };
}
function Bi({
  onSubmit: e,
  autoFocus: t = false,
  placeholder: o = "Что нового?",
}) {
  const {
    text: r,
    spans: i,
    editorRef: s,
    handleChange: a,
    insertText: c,
    reset: u,
  } = yo();

  const [l, h] = I(false);
  const [d, f] = I(false);
  const [m, N] = I(false);
  const w = x(0);
  const v = kt();
  const y = wo()?.isVerified ?? false;

  const {
    images: T,
    uploadingImages: g,
    isUploading: b,
    hasVideo: S,
    openFilePicker: R,
    removeImage: k,
    addImage: _,
    uploadFiles: P,
    clearAll: C,
    fileInputRef: F,
    handleFileChange: O,
  } = Di(10, y);

  const {
    isPollOpen: K,
    poll: ae,
    togglePoll: X,
    handlePollQuestionChange: Z,
    handlePollOptionChange: ce,
    handleAddPollOption: J,
    handleRemovePollOption: te,
    handleMultipleChoiceToggle: B,
    handleClosePoll: z,
    isPollValid: Q,
    getPollData: D,
    resetPoll: $,
  } = Ff();

  const V = Lt.MAX_CHARS - r.length;
  const U = V < 0;
  const oe = K && Q();
  const ee = T.length > 0 || g.length > 0;
  const M = r.trim().length > 0 || oe || oe || ee;
  const ne = y ? `${Ko},${tc}` : Ko;

  const re = E(async () => {
    if (!(!M || U || U || b || U || b || d)) {
      f(true);
      try {
        const Ee = T.map((le) => ({
          mediaId: le.mediaId,
          url: le.url,
        }));
        await e?.(r, i, Ee, D());
        u();
        C();
        $();
      } catch {
      } finally {
        f(false);
      }
    }
  }, [M, U, b, d, r, i, T, D, e, u, C, $]);

  const de = E(
    (Ee) => {
      _(Ee);
    },
    [_]
  );

  const ue = E(
    (Ee) => {
      c(Ee.emoji);
    },
    [c]
  );

  const De = E((Ee) => {
    Ee.preventDefault();
    Ee.stopPropagation();
    w.current++;

    if (Ee.dataTransfer?.types.includes("Files")) {
      N(true);
    }
  }, []);

  const je = E((Ee) => {
    Ee.preventDefault();
    Ee.stopPropagation();
  }, []);

  const Me = E((Ee) => {
    Ee.preventDefault();
    Ee.stopPropagation();
    w.current--;

    if (w.current === 0) {
      N(false);
    }
  }, []);

  const it = E(
    (Ee) => {
      Ee.preventDefault();
      Ee.stopPropagation();
      w.current = 0;
      N(false);
      const le = Ee.dataTransfer?.files;

      if (le && le.length > 0) {
        P(Array.from(le));
      }
    },
    [P]
  );

  return n("div", {
    className: `${ge.form} ${m ? ge.dragActive : ""}`,
    onDragEnter: De,
    onDragOver: je,
    onDragLeave: Me,
    onDrop: it,
    children: [
      m &&
        n("div", {
          className: ge.dragOverlay,
          children: [
            n("svg", {
              width: "32",
              height: "32",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "1.5",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              children: [
                n("rect", {
                  x: "3",
                  y: "3",
                  width: "18",
                  height: "18",
                  rx: "2",
                  ry: "2",
                }),
                n("circle", { cx: "8.5", cy: "8.5", r: "1.5" }),
                n("polyline", { points: "21 15 16 10 5 21" }),
              ],
            }),
            n("span", {
              children: y ? "Перетащите файл" : "Перетащите изображение",
            }),
          ],
        }),
      n("div", {
        className: ge.whatsNew,
        children: n(Co, {
          ref: s,
          value: r,
          spans: i,
          onChange: a,
          placeholder: o,
          autoFocus: t,
          className: ge.editor,
          minHeight: 40,
          maxHeight: Lt.MAX_TEXTAREA_HEIGHT,
          onImagePaste: P,
        }),
      }),
      n(Oi, { images: T, uploadingImages: g, onRemove: k }),
      n("input", {
        ref: F,
        type: "file",
        accept: ne,
        multiple: !S,
        onChange: O,
        style: { display: "none" },
      }),
      K &&
        n(Uf, {
          poll: ae,
          onQuestionChange: Z,
          onOptionChange: ce,
          onAddOption: J,
          onRemoveOption: te,
          onMultipleChoiceToggle: B,
          onClose: z,
        }),
      n("div", {
        className: ge.actions,
        children: [
          n("div", {
            className: ge.mediaButtons,
            children: [
              n("button", {
                className: ge.mediaButton,
                onClick: R,
                title: y ? "Добавить медиа" : "Добавить изображение",
                children: n(gi, {}),
              }),
              !v &&
                n(yr, { onEmojiSelect: ue, buttonClassName: ge.mediaButton }),
              n("button", {
                className: ge.mediaButton,
                onClick: () => h(true),
                title: "Нарисовать",
                disabled: S,
                children: n(qc, {}),
              }),
              n("button", {
                className: `${ge.mediaButton} ${K ? ge.active : ""}`,
                onClick: X,
                title: "Добавить опрос",
                children: n(Kc, {}),
              }),
            ],
          }),
          n("div", {
            className: ge.submitGroup,
            children: [
              U &&
                n("span", {
                  className: `${ge.charCount} ${ge.error}`,
                  children: V,
                }),
              n(Oe, {
                size: "lg",
                disabled: !M || U || U || b || U || b || d,
                loading: d,
                onClick: re,
                children: "Опубликовать",
              }),
            ],
          }),
        ],
      }),
      n(Nh, { isOpen: l, onClose: () => h(false), onSave: de, mode: "post" }),
    ],
  });
}
const Vf = "GcSCKwwz";
const jf = "zBZFa-2a";
const us = { createPostModal: Vf, title: jf };
function zf({ wallOwnerId: e, placeholder: t, onPostCreated: o }) {
  const { closeModal: r } = tn();

  const i = Ne((c) => c.profile);

  const s = ye((c) => c.createPost);

  const a = async (c, u, l, h) => {
    if (!i) {
      return;
    }
    const d = e ?? i.id;
    await s(d, c, u, l, h);
    await o?.();
    r();
  };

  return n(Ke, {
    frameless: true,
    onClose: r,
    className: us.createPostModal,
    children: [
      n("h2", { className: us.title, children: "Создать пост" }),
      n(Bi, { onSubmit: a, autoFocus: true, placeholder: t }),
    ],
  });
}

const Xf = () => {
  const e = wo();
  const t = di();
  const { initialize: o, disconnectSSE: r } = gn();
  const i = fi();

  const s = hr((_) => _.fetchPortal);

  W(() => {
    if (t) {
      o();
    }

    return () => {
      r();
    };
  }, [t, o, r]);

  W(() => {
    s();
  }, [s]);

  const a = e?.username ? `/@${e.username}` : "/profile";

  const c = Re(
    () => [
      { id: "feed", label: "Лента", icon: _i, href: "/" },
      { id: "search", label: "Поиск", icon: Ri, href: "/search" },
      { id: "event", label: "Ивент", icon: null, href: "/event" },
      {
        id: "notifications",
        label: "Уведы",
        icon: mr,
        href: "/notifications",
      },
      { id: "profile", label: "Профиль", icon: ki, href: a },
    ],
    [a]
  );

  const [u, l] = I({});
  const [h, d] = I(true);
  const f = x([]);
  const m = x(null);
  const [N] = Fn();
  const { openModal: w } = tn();

  const v = ye((_) => _.fetchFeed);

  const p = ye((_) => _.isRefreshing);

  const y = hi();

  const T = E(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    v(true);
  }, [v]);

  const g = Re(() => {
    const _ = N.url || "/";
    return vr.some((P) => _.startsWith(P));
  }, [N.url]);

  const b = Re(() => {
    const _ = N.url || "/";
    return e?.username
      ? _ === `/@${e.username}` || _.startsWith(`/@${e.username}/`)
      : false;
  }, [N.url, e?.username]);

  const S = x(null);

  const R = E((_, P = false) => {
    if (!P && S.current === _) {
      return;
    }
    S.current = _;
    const C = f.current[_];
    const m_current = m.current;
    if (C && m_current) {
      const O = parseFloat(getComputedStyle(m_current).paddingLeft) || 0;

      l({
        width: C.offsetWidth,
        transform: `translateX(${C.offsetLeft - O}px)`,
      });

      d(true);
    }
  }, []);

  W(() => {
    const _ = N.url || "/";

    if (!c.some((C) => C.href === _)) {
      d(false);
    }
  }, [N.url, c]);

  W(() => {
    const m_current = m.current;
    if (!m_current) {
      return;
    }
    const P = m_current.querySelector(`.${Je.active}`);
    if (P) {
      const C = f.current.indexOf(P);

      if (C !== -1) {
        S.current = null;
        R(C);
      }
    }
  }, []);

  W(() => {
    const m_current = m.current;
    if (!m_current) {
      return;
    }

    const P = () => {
      const F = m_current.querySelector(`.${Je.active}`);
      if (F) {
        const O = f.current.indexOf(F);

        if (O !== -1) {
          R(O, true);
        }
      }
    };

    const C = new ResizeObserver(P);
    C.observe(m_current);
    window.addEventListener("resize", P);

    return () => {
      C.disconnect();
      window.removeEventListener("resize", P);
    };
  }, [R]);

  const k = () => {
    w(n(zf, {}));
  };
  return (
    g ||
    n("div", {
      className: Je.mobileNavigationWrapper,
      children: [
        n("nav", {
          ref: m,
          className: Je.navigation,
          children: [
            n("div", {
              className: `${Je.indicator} ${h ? "" : Je.indicatorHidden}`,
              style: u,
            }),
            c.map((_, P) => {
              const _icon = _.icon;
              const F = _.id === "event";
              const O = F && i.active && !!i.url;
              return n(
                gr,
                {
                  path: _.href,
                  children: ({ matches: K }) => {
                    const ae = K || (_.id === "profile" && b);
                    return n("a", {
                      href: O ? i.url : _.href,
                      target: O ? "_blank" : undefined,
                      rel: O ? "noopener noreferrer" : undefined,
                      ref: (X) => {
                        f.current[P] = X;

                        if (X && ae) {
                          R(P);
                        }
                      },
                      className: `${Je.navItem} ${ae ? Je.active : ""}`,
                      onClick: (X) => {
                        if (ae && _.id === "feed") {
                          X.preventDefault();
                          T();
                        }
                      },
                      children: [
                        n("span", {
                          className: Je.iconWrapper,
                          children: F
                            ? n("img", {
                                src: i.active
                                  ? "/assets/portal/portal-active.gif"
                                  : "/assets/portal/portal-inactive.png",
                                alt: "Ивент",
                                className: `${Je.portalImage} ${
                                  i.active ? Je.portalImageActive : ""
                                }`,
                              })
                            : n(Se, {
                                children: [
                                  _.id === "feed" && p
                                    ? n(Hn, {})
                                    : n(_icon, {}),
                                  _.id === "notifications" &&
                                    y > 0 &&
                                    n("span", {
                                      className: Je.badge,
                                      children: y > 99 ? "99+" : y,
                                    }),
                                ],
                              }),
                        }),
                        n("span", {
                          className: Je.label,
                          children: _.label,
                        }),
                      ],
                    });
                  },
                },
                _.id
              );
            }),
          ],
        }),
        n("button", {
          className: Je.createButton,
          onClick: k,
          "aria-label": "Создать пост",
          children: n(pr, {}),
        }),
      ],
    })
  );
};

const Yf = "K6nCQ-U-";
const Gf = "_4z8V9ZZv";
const Zf = "_7KXbkQt7";
const qf = "uYOP8khl";
const Kf = "_6y-KsBSs";
const Jf = "_0V6OU0Ym";
const Qf = "nkzq9EYy";
const em = "sPqWHy7d";
const tm = "_9y9syYYY";
const nm = "nDwuZLyW";
const om = "L5ifDyu9";
const rm = "YTa76qGd";
const sm = "pgh3zI5U";
const im = "MLUpLifx";

const Fe = {
  modalReport: Yf,
  content: Gf,
  successIcon: Zf,
  title: qf,
  subtitle: Kf,
  options: Jf,
  chip: Qf,
  radio: em,
  chipActive: tm,
  radioDot: nm,
  detailsSection: om,
  textarea: rm,
  error: sm,
  actions: im,
};

const am = {
  spam: "spam",
  violence: "violence",
  hate: "harassment",
  adult: "nudity",
  misinfo: "misinformation",
  other: "other",
};

const cm = [
  { id: "spam", label: "Спам или нежелательный контент" },
  { id: "violence", label: "Насилие или опасные действия" },
  { id: "hate", label: "Ненависть или травля" },
  { id: "adult", label: "Контент для взрослых (18+)" },
  { id: "misinfo", label: "Дезинформация или обман" },
  { id: "other", label: "Другое" },
];

function Ui({ targetType: e, targetId: t, onClose: o, onSubmit: r }) {
  const [i, s] = I(null);
  const [a, c] = I("");
  const [u, l] = I(false);
  const [h, d] = I(null);
  const [f, m] = I(false);

  const N = async () => {
    if (i) {
      l(true);
      d(null);
      try {
        if (r) {
          await r(i, a);
        } else {
          await rc.createReport({
            targetType: e,
            targetId: t,
            reason: am[i],
            description: a || undefined,
          });
        }

        m(true);
      } catch (w) {
        console.error("Failed to submit report:", w);

        if (He(w)) {
          switch (w.code) {
            case Yn.CANNOT_REPORT_OWN_CONTENT: {
              d("Вы не можете пожаловаться на свой контент");
              break;
            }
            case Yn.ALREADY_REPORTED: {
              d("Вы уже отправляли жалобу на этот контент");
              break;
            }
            case Yn.TARGET_NOT_FOUND: {
              d("Контент не найден");
              break;
            }
            case Yn.DESCRIPTION_TOO_LONG: {
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
    ? n(Ke, {
        onClose: o,
        showHeader: false,
        frameless: false,
        className: Fe.modalReport,
        children: n("div", {
          className: Fe.content,
          children: [
            n("div", {
              className: Fe.successIcon,
              children: n("svg", {
                width: "48",
                height: "48",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "var(--accent-primary)",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                children: [
                  n("path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14" }),
                  n("polyline", { points: "22 4 12 14.01 9 11.01" }),
                ],
              }),
            }),
            n("h2", { className: Fe.title, children: "Спасибо за жалобу!" }),
            n("p", {
              className: Fe.subtitle,
              children:
                "Мы рассмотрим вашу жалобу и примем необходимые меры. Вы помогаете сделать сообщество лучше.",
            }),
            n("div", {
              className: Fe.actions,
              children: n(Oe, {
                variant: "primary",
                onClick: (w) => {
                  w.stopPropagation();
                  o();
                },
                children: "Понятно",
              }),
            }),
          ],
        }),
      })
    : n(Ke, {
        onClose: o,
        showHeader: false,
        frameless: false,
        className: Fe.modalReport,
        children: n("div", {
          className: Fe.content,
          children: [
            n("h2", { className: Fe.title, children: "Пожаловаться" }),
            n("p", {
              className: Fe.subtitle,
              children: "Выберите причину жалобы",
            }),
            n("div", {
              className: Fe.options,
              children: cm.map((w) =>
                n(
                  "button",
                  {
                    type: "button",
                    className: `${Fe.chip} ${i === w.id ? Fe.chipActive : ""}`,
                    onClick: () => s(w.id),
                    children: [
                      n("span", {
                        className: Fe.radio,
                        children:
                          i === w.id && n("span", { className: Fe.radioDot }),
                      }),
                      w.label,
                    ],
                  },
                  w.id
                )
              ),
            }),
            n("div", {
              className: Fe.detailsSection,
              children: n("textarea", {
                className: Fe.textarea,
                placeholder: "Опишите подробнее (необязательно)...",
                value: a,
                onInput: (w) => c(w.target.value),
                rows: 3,
                maxLength: 1000 /* 1e3 */,
              }),
            }),
            h && n("div", { className: Fe.error, children: h }),
            n("div", {
              className: Fe.actions,
              children: [
                n(Oe, {
                  variant: "secondary",
                  onClick: (w) => {
                    w.stopPropagation();
                    o();
                  },
                  disabled: u,
                  children: "Отмена",
                }),
                n(Oe, {
                  variant: "primary",
                  onClick: (w) => {
                    w.stopPropagation();
                    N();
                  },
                  disabled: !i || u,
                  children: u ? "Отправка..." : "Отправить",
                }),
              ],
            }),
          ],
        }),
      });
}
const lm = "j8vGlZKp";
const um = "y5-96lzw";
const dm = "lE9vN8i6";
const hm = "RrXA28Pz";
const fm = "zrN-dIVb";
const mm = "KSS5ucx7";
const pm = "p-q2S5vA";
const gm = "-JVja8g3";
const vm = "HotXXjTO";
const wm = "q4tIq6LX";
const ym = "jG-llYOx";
const _m = "-nxjJLcz";
const Cm = "FFjif68M";
const Nm = "jTVS0CtG";

const tt = {
  userName: lm,
  pinBadge: um,
  text: dm,
  nukstaGlow: hm,
  xs: fm,
  sm: mm,
  md: pm,
  lg: gm,
  pinWrapper: vm,
  pinTooltip: wm,
  pinTooltipFadeIn: ym,
  pinTooltipRow: _m,
  pinTooltipLabel: Cm,
  pinTooltipArrow: Nm,
};

const bm = { xs: 12, sm: 14, md: 16, lg: 22 };
function Wn({
  name: e,
  verified: t,
  hasNuksta: o,
  pin: r,
  size: i = "md",
  className: s,
}) {
  const bm_i = bm[i];
  const c = x(null);
  const [u, l] = I(null);

  const h = E(() => {
    if (!c.current) {
      return;
    }
    const f = c.current.getBoundingClientRect();
    l({ x: f.left + f.width / 2, y: f.top });
  }, []);

  const d = E(() => {
    l(null);
  }, []);

  return n("span", {
    className: `${tt.userName} ${tt[i]} ${s || ""}`,
    children: [
      o
        ? n("span", {
            className: tt.nukstaGlow,
            children: n("span", { className: tt.text, children: e }),
          })
        : n("span", { className: tt.text, children: e }),
      t && n(el, {}),
      r &&
        n("span", {
          ref: c,
          className: tt.pinWrapper,
          onMouseEnter: h,
          onMouseLeave: d,
          children: [
            n("img", {
              src: `/assets/pins/${r.slug}.png`,
              alt: r.name,
              className: tt.pinBadge,
              width: bm_i,
              height: bm_i,
            }),
            u &&
              wt(
                n("div", {
                  className: tt.pinTooltip,
                  style: { left: `${u.x}px`, top: `${u.y}px` },
                  children: [
                    n("span", {
                      className: tt.pinTooltipRow,
                      children: [
                        n("span", {
                          className: tt.pinTooltipLabel,
                          children: "Пин:",
                        }),
                        " ",
                        r.name,
                      ],
                    }),
                    r.description &&
                      n("span", {
                        className: tt.pinTooltipRow,
                        children: [
                          n("span", {
                            className: tt.pinTooltipLabel,
                            children: "Ивент:",
                          }),
                          " ",
                          r.description,
                        ],
                      }),
                    n("span", { className: tt.pinTooltipArrow }),
                  ],
                }),
                document.body
              ),
          ],
        }),
    ],
  });
}
const Tm = "GOavgVFK";
const km = "WsAFjFg1";
const Em = "luyzBE-G";
const Rm = "LGkNQoga";
const Sm = "HiaF08Tp";
const Im = "fjKZASHi";
const xm = "YH0jgs8I";
const Pm = "iw-oVKLc";
const Am = "-L1Z1WbU";

const It = {
  repostModal: Tm,
  content: km,
  title: Em,
  inputSection: Rm,
  textarea: Sm,
  originalPost: Im,
  postHeader: xm,
  postText: Pm,
  actions: Am,
};

function Mm({ post: e, onClose: t, onSuccess: o }) {
  const [r, i] = I("");
  const [s, a] = I(false);

  const c = Ne((l) => l.profile);

  const u = async () => {
    a(true);
    try {
      await qe.createRepost(e.id, r.trim() || undefined);
      o?.();
      t();
    } catch (l) {
      console.error("Failed to create repost:", l);
    } finally {
      a(false);
    }
  };

  return n(Ke, {
    onClose: t,
    showHeader: false,
    frameless: false,
    className: It.repostModal,
    children: n("div", {
      className: It.content,
      children: [
        n("h2", { className: It.title, children: "Репост" }),
        n("div", {
          className: It.inputSection,
          children: [
            c && n(st, { src: c.avatar, alt: c.displayName, size: "sm" }),
            n("textarea", {
              className: It.textarea,
              placeholder: "Добавьте комментарий к репосту...",
              value: r,
              onInput: (l) => i(l.target.value),
              rows: 3,
            }),
          ],
        }),
        n("div", {
          className: It.originalPost,
          children: [
            n("div", {
              className: It.postHeader,
              children: [
                n(st, {
                  src: e.author.avatar ?? "",
                  alt: e.author.displayName,
                  size: "xs",
                }),
                n(Wn, {
                  name: e.author.displayName,
                  verified: e.author.isVerified,
                  hasNuksta: e.author.hasNuksta,
                  pin: e.author.pin,
                  size: "xs",
                }),
              ],
            }),
            n("p", { className: It.postText, children: e.text }),
          ],
        }),
        n("div", {
          className: It.actions,
          children: [
            n(Oe, {
              variant: "secondary",
              onClick: (l) => {
                l.stopPropagation();
                t();
              },
              disabled: s,
              children: "Отмена",
            }),
            n(Oe, {
              variant: "primary",
              onClick: (l) => {
                l.stopPropagation();
                u();
              },
              disabled: s,
              children: s ? "Репост..." : "Репостнуть",
            }),
          ],
        }),
      ],
    }),
  });
}
const Lm = "YUXc-thD";
const $m = "AHlpmYy2";
const Om = "_8tUE-BuY";
const Dm = "RIne2Axl";
const Bm = "qfOKVlyM";
const Um = "XA7edfAc";
const Fm = "_97G7MW7p";
const Hm = "li-GTJHA";
const Wm = "x0peq7nh";
const Vm = "_6pRzoTi7";

const _t = {
  editPostModal: Lm,
  form: $m,
  whatsNew: Om,
  editor: Dm,
  actions: Bm,
  mediaButtons: Um,
  mediaButton: Fm,
  submitGroup: Hm,
  charCount: Wm,
  error: Vm,
};

const ds = 5000; /* 5e3 */
function jm({ postId: e, initialText: t, initialSpans: o = [] }) {
  const { closeModal: r } = tn();

  const i = ye((b) => b.editPost);

  const s = Ne((b) => b.profile);

  const a = kt();

  const {
    text: c,
    spans: u,
    editorRef: l,
    handleChange: h,
    insertText: d,
  } = yo(t, o);

  const [f, m] = I(false);
  const N = ds - c.length;
  const w = N < 0;
  const v = c !== t;
  const p = JSON.stringify(u) !== JSON.stringify(o);
  const y = v || p;

  const T = E(
    (b) => {
      d(b.emoji);
    },
    [d]
  );

  const g = E(async () => {
    if (!(!c.trim() || w || w || !y || w || !y || f)) {
      m(true);
      try {
        await i(e, c, u);
        r();
      } catch (b) {
        console.error("Failed to update post:", b);
      } finally {
        m(false);
      }
    }
  }, [c, u, w, y, f, i, e, r]);

  return n(Ke, {
    frameless: true,
    onClose: r,
    className: _t.editPostModal,
    children: n("div", {
      className: _t.form,
      children: [
        n("div", {
          className: _t.whatsNew,
          children: [
            n(st, { src: s?.avatar ?? "", size: "md" }),
            n(Co, {
              ref: l,
              value: c,
              spans: u,
              onChange: h,
              placeholder: "Что нового?",
              maxLength: ds,
              autoFocus: true,
              className: _t.editor,
              minHeight: 40,
              maxHeight: 400,
            }),
          ],
        }),
        n("div", {
          className: _t.actions,
          children: [
            n("div", {
              className: _t.mediaButtons,
              children:
                !a &&
                n(yr, { onEmojiSelect: T, buttonClassName: _t.mediaButton }),
            }),
            n("div", {
              className: _t.submitGroup,
              children: [
                w &&
                  n("span", {
                    className: `${_t.charCount} ${_t.error}`,
                    children: N,
                  }),
                n(Oe, {
                  size: "lg",
                  disabled: !c.trim() || w || w || !y,
                  loading: f,
                  onClick: g,
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

const hs = (e) => Symbol.iterator in e;

const fs = (e) => "entries" in e;

const ms = (e, t) => {
  const o = e instanceof Map ? e : new Map(e.entries());
  const r = t instanceof Map ? t : new Map(t.entries());
  if (o.size !== r.size) {
    return false;
  }
  for (const [i, s] of o) {
    if (!r.has(i) || !Object.is(s, r.get(i))) {
      return false;
    }
  }
  return true;
};

const zm = (e, t) => {
  const o = e[Symbol.iterator]();
  const r = t[Symbol.iterator]();
  let i = o.next();
  let s = r.next();

  while (!i.done && !s.done) {
    if (!Object.is(i.value, s.value)) {
      return false;
    }
    i = o.next();
    s = r.next();
  }

  return !!i.done && !!s.done;
};

function Xm(e, t) {
  return Object.is(e, t)
    ? true
    : typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null ||
      Object.getPrototypeOf(e) !== Object.getPrototypeOf(t)
    ? false
    : hs(e) && hs(t)
    ? fs(e) && fs(t)
      ? ms(e, t)
      : zm(e, t)
    : ms(
        { entries: () => Object.entries(e) },
        { entries: () => Object.entries(t) }
      );
}
function ps(e) {
  const t = kn.useRef(undefined);
  return (o) => {
    const r = e(o);
    return Xm(t.current, r) ? t.current : (t.current = r);
  };
}
const Ym = "qW4HNPBu";
const Gm = "tx-JBNZ6";
const Zm = "_033iEEAi";
const qm = "DNnNfgbz";
const qn = { commentsModal: Ym, header: Gm, title: Zm, content: qm };
function Km({ postId: e, onClose: t }) {
  console.log("[CommentsModal] RENDER", { postId: e });
  const o = x(null);

  const {
    comments: r,
    commentsLoading: i,
    commentsLoadingMore: s,
    commentsHasMore: a,
    clearComments: c,
    fetchComments: u,
    loadMoreComments: l,
    toggleCommentReaction: h,
    addComment: d,
  } = ye(
    ps((g) => ({
      comments: g.comments,
      commentsLoading: g.commentsLoading,
      commentsLoadingMore: g.commentsLoadingMore,
      commentsHasMore: g.commentsHasMore,
      clearComments: g.clearComments,
      fetchComments: g.fetchComments,
      loadMoreComments: g.loadMoreComments,
      toggleCommentReaction: g.toggleCommentReaction,
      addComment: g.addComment,
    }))
  );

  const { commentsSort: f, setCommentsSort: m } = co(
    ps((g) => ({
      commentsSort: g.commentsSort,
      setCommentsSort: g.setCommentsSort,
    }))
  );

  if (o.current !== e) {
    o.current = e;
    c();
  }

  W(() => {
    u(e);
  }, [e, u]);

  const N = E(
    (g) => {
      m(g);
      u(e);
    },
    [m, u, e]
  );

  const w = E(() => {
    if (a && !s) {
      l(e);
    }
  }, [a, s, l, e]);

  const v = E(
    (g, b) => {
      h(g, b ?? "love");
    },
    [h]
  );

  const p = E(
    (g, b) => {
      h(g, b);
    },
    [h]
  );

  const y = E(
    async (g, b, S, R, k, _) => {
      await d(e, g, b, S, _, R, k);
    },
    [d, e]
  );

  const T = E(
    async (g) => {
      const b = `voice_${Date.now()}.webm`;
      const S = new File([g], b, { type: g.type || "audio/webm" });
      const R = await ln.uploadMedia(S);
      await d(e, "", [], undefined, [{ mediaId: R.id }]);
    },
    [d, e]
  );

  return n(Ke, {
    frameless: true,
    onClose: t,
    className: qn.commentsModal,
    children: [
      n("div", {
        className: qn.header,
        children: n("span", { className: qn.title, children: "Комментарии" }),
      }),
      n("div", {
        className: qn.content,
        "data-comments-modal": true,
        children: n(f1, {
          comments: r,
          isLoading: i,
          isLoadingMore: s,
          hasMore: a,
          sort: f,
          onSortChange: N,
          onLikeComment: v,
          onReactionComment: p,
          onAddComment: y,
          onVoiceSend: T,
          onLoadMore: w,
        }),
      }),
    ],
  });
}
const Jm = "QoEaDkke";
const Qm = "clHkuJ7t";
const ep = "qilC-Ury";
const tp = "_2pYlGMvj";
const Kn = { content: Jm, title: Qm, subtitle: ep, actions: tp };
function np({ displayName: e, onConfirm: t, onClose: o }) {
  return n(Ke, {
    onClose: o,
    showHeader: false,
    children: n("div", {
      className: Kn.content,
      children: [
        n("h2", { className: Kn.title, children: "Отписаться?" }),
        n("p", {
          className: Kn.subtitle,
          children: [
            "Вы действительно хотите отписаться от ",
            n("strong", { children: e }),
            "?",
          ],
        }),
        n("div", {
          className: Kn.actions,
          children: [
            n(Oe, {
              variant: "secondary",
              onClick: (r) => {
                r.stopPropagation();
                o();
              },
              children: "Отмена",
            }),
            n(Oe, {
              variant: "danger",
              onClick: (r) => {
                r.stopPropagation();
                t();
                o();
              },
              children: "Отписаться",
            }),
          ],
        }),
      ],
    }),
  });
}
const op = "JtDslUlB";
const rp = "ccJtOIg3";
const sp = "jttdPuoT";
const ip = "Ik3feOcb";
const ap = "OWIVanqr";
const cp = "ApLgDejC";
const lp = "wzYde9CM";
const up = "jjAXXJME";

const Ot = {
  underline: op,
  monospace: rp,
  quote: sp,
  spoiler: ip,
  revealed: ap,
  link: cp,
  mention: lp,
  hashtag: up,
};

function dp(e) {
  try {
    const t = new URL(e);
    return t.protocol === "http:" || t.protocol === "https:";
  } catch {
    return false;
  }
}
function hp(e) {
  if (!dp(e)) {
    return "#";
  }
  const o = new TextEncoder().encode(e);
  const r = String.fromCharCode(...o);
  const i = btoa(r);
  return `/external?url=${encodeURIComponent(i)}`;
}
function Fi({ text: e, spans: t = [], className: o = "" }) {
  const [r, i] = I(new Set());

  const s = Re(() => {
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
        const N = new Set();
        let w;
        let v;
        let p;

        d.forEach((y) => {
          N.add(y.type);

          if (y.type === "link" && y.url) {
            w = y.url;
          }

          if (y.type === "mention" && (y.username || y.id)) {
            v = y.username || y.id;
          }

          if (y.type === "hashtag" && y.tag) {
            p = y.tag;
          }
        });

        l.push({ text: m, styles: N, url: w, mentionId: v, hashtag: p });
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

    i((h) => {
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
      u_text = n("strong", { children: u_text });
    }

    if (u.styles.has("italic")) {
      u_text = n("em", { children: u_text });
    }

    if (u.styles.has("underline")) {
      u_text = n("span", { className: Ot.underline, children: u_text });
    }

    if (u.styles.has("strike")) {
      u_text = n("s", { children: u_text });
    }

    if (u.styles.has("monospace")) {
      u_text = n("code", { className: Ot.monospace, children: u_text });
    }

    if (u.styles.has("quote")) {
      u_text = n("span", { className: Ot.quote, children: u_text });
    }

    if (u.styles.has("spoiler")) {
      const d = r.has(l);
      u_text = n("span", {
        className: `${Ot.spoiler} ${d ? Ot.revealed : ""}`,
        onClick: (f) => a(f, l),
        children: u_text,
      });
    }

    if (u.styles.has("link") && u.url) {
      const d = hp(u.url);
      u_text = n("a", {
        href: d,
        target: "_blank",
        rel: "noopener noreferrer",
        className: Ot.link,
        onClick: (f) => f.stopPropagation(),
        children: u_text,
      });
    }
    if (u.styles.has("mention") && u.mentionId) {
      const d = `/@${u.mentionId}`;
      u_text = n("a", {
        href: d,
        className: Ot.mention,
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
      u_text = n("a", {
        href: d,
        className: Ot.hashtag,
        onClick: (f) => {
          f.preventDefault();
          f.stopPropagation();
          $(d);
        },
        children: u_text,
      });
    }
    return n("span", { children: u_text }, l);
  };

  return n("span", { className: o, children: s.map((u, l) => c(u, l)) });
}
const fp = "t6dMOE-t";
const mp = "dN7ncPvV";
const pp = "goihPOfy";
const gp = "_3cD3eUbW";
const vp = "SWw4qjFC";
const wp = "J5ZRq4aT";
const yp = "zH6fnEQR";
const _p = "OzZxDBjs";
const Cp = "r-v5forc";
const Np = "Azp1k6ER";
const bp = "_8AA-g-Mn";
const Tp = "aaxVMk0e";
const kp = "QUwLZbFH";
const Ep = "Fub6vefq";
const Rp = "Uvg1jJsO";
const Sp = "_9HuwvxSy";
const Ip = "_0-reqUdU";
const xp = "yjejWG8w";
const Pp = "rW9UH9FX";
const Ap = "AP0ro9mL";
const Mp = "lc7iFAaZ";
const Lp = "D7O8ZJMb";
const $p = "-OyFh6KG";
const Op = "FVUgQZaF";

const _e = {
  poll: fp,
  disabled: mp,
  header: pp,
  title: gp,
  meta: vp,
  voteCount: wp,
  options: yp,
  option: _p,
  votingOption: Cp,
  preselected: Np,
  optionContent: bp,
  voted: Tp,
  optionProgressWrapper: kp,
  optionProgress: Ep,
  optionContentInverted: Rp,
  optionText: Sp,
  optionPercent: Ip,
  optionProgressSimple: xp,
  checkmark: Pp,
  checkbox: Ap,
  checkboxChecked: Mp,
  submitBtn: Lp,
  footer: $p,
  revoteBtn: Op,
};

function Dp({
  title: e,
  options: t,
  totalVotes: o,
  voted: r = false,
  selectedOptionId: i = null,
  selectedOptionIds: s = [],
  multipleChoice: a = false,
  onVote: c,
  onVoteMultiple: u,
  className: l,
  disabled: h = false,
}) {
  const [d, f] = I(r);

  const [m, N] = I(() =>
    s.length > 0 ? new Set(s) : i ? new Set([i]) : new Set()
  );

  const [w, v] = I(o);
  const [p, y] = I(t);
  const [T, g] = I(r);
  const [b, S] = I(false);
  const [R, k] = I(new Map());
  const _ = x(new Map());

  const P = t.map((B) => `${B.id}:${B.votes}`).join(",");

  W(() => {
    y(t);
    v(o);
    f(r);

    if (s.length > 0) {
      N(new Set(s));
    } else {
      N(i ? new Set([i]) : new Set());
    }

    if (r && !b) {
      g(true);
    }
  }, [P, o, r, i, s.join(",")]);

  W(() => {
    if (r && _.current.size > 0) {
      const B = new Map();

      _.current.forEach((z, Q) => {
        B.set(Q, z.offsetWidth);
      });

      k(B);
    }
  }, [r]);

  const C = d && !b;

  const F = E(
    (B) => {
      if (h || C) {
        return;
      }
      if (a) {
        N((D) => {
          const $ = new Set(D);

          if ($.has(B)) {
            $.delete(B);
          } else {
            $.add(B);
          }

          return $;
        });
        return;
      }
      const z = m.size > 0 ? Array.from(m)[0] : null;

      y((D) =>
        D.map(($) =>
          $.id === B
            ? { ...$, votes: $.votes + 1 }
            : $.id === z
            ? { ...$, votes: Math.max(0, $.votes - 1) }
            : $
        )
      );

      if (!d) {
        v((D) => D + 1);
      }

      N(new Set([B]));
      f(true);
      S(false);
      const Q = c?.(B);

      if (Q && typeof Q.then == "function") {
        Q.then((D) => {
          if (D) {
            K(D);
          }
        });
      }

      ae();
    },
    [h, C, a, m, d, c]
  );

  const O = E(() => {
    if (m.size === 0) {
      return;
    }
    const B = Array.from(m);

    y((Q) =>
      Q.map((D) => (B.includes(D.id) ? { ...D, votes: D.votes + 1 } : D))
    );

    if (!d) {
      v((Q) => Q + 1);
    }

    f(true);
    S(false);
    const z = u?.(B);

    if (z && typeof z.then == "function") {
      z.then((Q) => {
        if (Q) {
          K(Q);
        }
      });
    }

    ae();
  }, [m, d, u]);

  const K = (B) => {
    const z = (B.options ?? []).map((Q) => ({
      id: Q.id,
      text: Q.text,
      votes: Q.votesCount ?? Q.voteCount ?? Q.votes ?? 0,
    }));
    y(z);
    v(B.totalVotes ?? 0);

    if (B.votedOptionIds && B.votedOptionIds.length > 0) {
      N(new Set(B.votedOptionIds));
    }
  };

  const ae = () => {
    requestAnimationFrame(() => {
      const B = new Map();

      _.current.forEach((z, Q) => {
        B.set(Q, z.offsetWidth);
      });

      k(B);

      requestAnimationFrame(() => {
        g(true);
      });
    });
  };

  const X = () => {
    S(true);
    g(false);
  };

  const Z = () => {
    S(false);
    g(true);
  };

  const ce = (B) => (w === 0 ? 0 : Math.round((B / w) * 100));

  const J = (B) =>
    B === 1 ? "1 голос" : B >= 2 && B <= 4 ? `${B} голоса` : `${B} голосов`;

  const te = (B) => {
    B.stopPropagation();
  };

  return n("div", {
    className: `${_e.poll} ${h ? _e.disabled : ""} ${l || ""}`,
    onClick: te,
    children: [
      n("div", {
        className: _e.header,
        children: [
          n("span", { className: _e.title, children: e }),
          d &&
            n("div", {
              className: _e.meta,
              children: n("span", { className: _e.voteCount, children: J(w) }),
            }),
        ],
      }),
      n("div", {
        className: _e.options,
        children: p.map((B) => {
          const z = ce(B.votes);
          const Q = m.has(B.id);
          const D = T ? `${z}%` : "0%";
          const $ =
            R.get(B.id) ||
            _.current.get(B.id)?.offsetWidth ||
            _.current.get(B.id)?.offsetWidth ||
            0;
          return C
            ? n(
                "div",
                {
                  ref: (V) => {
                    if (V) {
                      _.current.set(B.id, V);
                    }
                  },
                  className: `${_e.option} ${_e.voted} ${Q ? _e.selected : ""}`,
                  children: [
                    n("div", {
                      className: _e.optionContent,
                      children: [
                        n("span", {
                          className: _e.optionText,
                          children: [
                            Q &&
                              n("span", {
                                className: _e.checkmark,
                                children: "✓ ",
                              }),
                            B.text,
                          ],
                        }),
                        n("span", {
                          className: _e.optionPercent,
                          children: [z, "%"],
                        }),
                      ],
                    }),
                    Q &&
                      n("div", {
                        className: _e.optionProgressWrapper,
                        style: { width: D },
                        children: [
                          n("div", { className: _e.optionProgress }),
                          n("div", {
                            className: _e.optionContentInverted,
                            style: { width: `${$}px` },
                            children: [
                              n("span", {
                                className: _e.optionText,
                                children: [
                                  n("span", {
                                    className: _e.checkmark,
                                    children: "✓ ",
                                  }),
                                  B.text,
                                ],
                              }),
                              n("span", {
                                className: _e.optionPercent,
                                children: [z, "%"],
                              }),
                            ],
                          }),
                        ],
                      }),
                    !Q &&
                      n("div", {
                        className: _e.optionProgressSimple,
                        style: { width: D },
                      }),
                  ],
                },
                B.id
              )
            : n(
                "div",
                {
                  ref: (V) => {
                    if (V) {
                      _.current.set(B.id, V);
                    }
                  },
                  className: `${_e.option} ${_e.votingOption} ${
                    Q ? _e.preselected : ""
                  }`,
                  onClick: () => F(B.id),
                  children: n("div", {
                    className: _e.optionContent,
                    children: [
                      a &&
                        n("span", {
                          className: `${_e.checkbox} ${
                            Q ? _e.checkboxChecked : ""
                          }`,
                          children: Q && "✓",
                        }),
                      n("span", { className: _e.optionText, children: B.text }),
                    ],
                  }),
                },
                B.id
              );
        }),
      }),
      a &&
        !d &&
        m.size > 0 &&
        !b &&
        n("button", {
          className: _e.submitBtn,
          onClick: O,
          type: "button",
          children: "Проголосовать",
        }),
      d &&
        n("div", {
          className: _e.footer,
          children: b
            ? n(Se, {
                children: [
                  a &&
                    m.size > 0 &&
                    n("button", {
                      className: _e.submitBtn,
                      onClick: O,
                      type: "button",
                      children: "Проголосовать",
                    }),
                  n("button", {
                    className: _e.revoteBtn,
                    onClick: Z,
                    type: "button",
                    children: "Отмена",
                  }),
                ],
              })
            : n("button", {
                className: _e.revoteBtn,
                onClick: X,
                type: "button",
                children: "Изменить голос",
              }),
        }),
    ],
  });
}
const Bp = "zRX0j4Tr";
const Up = "_3HYi31vZ";
const Fp = "sgbXxBQt";
const Hp = "GyS5v2h6";
const Wp = "HxhHv5PS";
const Vp = "HhzGlfqd";
const jp = "bQ6-MeS1";
const zp = "QCLZpkig";
const Xp = "WIOo5dNL";

const xt = {
  dropdownWrapper: Bp,
  trigger: Up,
  menu: Fp,
  hidden: Hp,
  menuItem: Wp,
  danger: Vp,
  itemIcon: jp,
  itemLabel: zp,
  divider: Xp,
};

function Hi({
  trigger: e,
  items: t,
  position: o = "bottom-right",
  dividerAfter: r = [],
  className: i,
}) {
  const [s, a] = I(false);
  const [c, u] = I(false);
  const [l, h] = I({ top: 0, left: 0 });
  const d = x(null);
  const f = x(null);

  const m = E(() => {
    if (!d.current) {
      return;
    }
    const p = d.current.getBoundingClientRect();
    const y = f.current?.offsetHeight || 150;
    const T = f.current?.offsetWidth || 160;
    let g = 0;
    let b = 0;

    if (o.startsWith("bottom")) {
      g = p.bottom + 4;
    } else {
      g = p.top - y - 4;
    }

    if (o.endsWith("right")) {
      b = p.right - T;
    } else {
      b = p.left;
    }

    const { innerWidth, innerHeight } = window;

    if (b + T > innerWidth) {
      b = innerWidth - T - 8;
    }

    if (b < 8) {
      b = 8;
    }

    if (g + y > innerHeight) {
      g = p.top - y - 4;
    }

    if (g < 8) {
      g = p.bottom + 4;
    }

    h({ top: g, left: b });
    u(true);
  }, [o]);

  const N = E((p) => {
    const p_target = p.target;

    if (
      d.current &&
      !d.current.contains(p_target) &&
      f.current &&
      !f.current.contains(p_target)
    ) {
      a(false);
      u(false);
    }
  }, []);

  W(() => {
    if (s) {
      m();
      document.addEventListener("mousedown", N);
      window.addEventListener("scroll", m, true);
      window.addEventListener("resize", m);

      return () => {
        document.removeEventListener("mousedown", N);
        window.removeEventListener("scroll", m, true);
        window.removeEventListener("resize", m);
      };
    }
  }, [s, N, m]);

  const w = (p) => {
    p.stopPropagation();

    if (s) {
      a(false);
      u(false);
    } else {
      a(true);
    }
  };

  const v = (p, y) => {
    p.stopPropagation();
    y.onClick();
    a(false);
    u(false);
  };

  return n("div", {
    className: `${xt.dropdownWrapper} ${i || ""}`,
    children: [
      n("div", { ref: d, className: xt.trigger, onClick: w, children: e }),
      s &&
        wt(
          n("div", {
            ref: f,
            className: `${xt.menu} ${c ? "" : xt.hidden}`,
            style: { top: l.top, left: l.left },
            children: t.map((p, y) =>
              n(
                "div",
                {
                  children: [
                    n("button", {
                      type: "button",
                      className: `${xt.menuItem} ${p.danger ? xt.danger : ""}`,
                      onClick: (T) => v(T, p),
                      children: [
                        p.icon &&
                          n("span", {
                            className: xt.itemIcon,
                            children: p.icon,
                          }),
                        n("span", {
                          className: xt.itemLabel,
                          children: p.label,
                        }),
                      ],
                    }),
                    r.includes(p.id) &&
                      y < t.length - 1 &&
                      n("div", { className: xt.divider }),
                  ],
                },
                p.id
              )
            ),
          }),
          document.body
        ),
    ],
  });
}
const Yp = "oAyquNjM";
const Gp = "cGo-pqMK";
const Zp = "abh-IRfe";
const qp = "_3UMrcwJw";
const Kp = "MtmuinE5";
const Jp = "OHOBvjSN";
const Qp = "vPid2PoY";
const e0 = "ShSUtrj1";

const Dt = {
  header: Yp,
  headerMain: Gp,
  moreDropdown: Zp,
  pinnedBadge: qp,
  authorInfo: Kp,
  authorLink: Jp,
  time: Qp,
  edited: e0,
};

function t0({
  author: e,
  createdAt: t,
  editedAt: o,
  postId: r,
  showAvatar: i = true,
  isOnOwnProfile: s = false,
  isPinned: a = false,
  onReport: c,
  onEdit: u,
  onDelete: l,
  onPin: h,
  onCopyLink: d,
}) {
  const f = mi(t);

  const m = Ne((y) => y.profile?.id);

  const N = e.id === m;
  const w = 2880 * 60 * 1000; /* 1e3 */
  const v = N && Date.now() - new Date(t).getTime() < w;

  const p = Re(() => {
    const y = [];

    y.push({
      id: "copy-link",
      label: "Скопировать ссылку",
      icon: n(wi, { size: 16 }),
      onClick: () => d?.(r),
    });

    if (v) {
      y.push({
        id: "edit",
        label: "Редактировать",
        icon: n(yi, { size: 16 }),
        onClick: () => u?.(r),
      });
    }

    if (s) {
      y.push({
        id: "pin",
        label: a ? "Открепить" : "Закрепить",
        icon: n(Qo, { size: 16 }),
        onClick: () => h?.(r),
      });
    }

    if (N || s) {
      y.push({
        id: "delete",
        label: "Удалить",
        icon: n(Si, { size: 16 }),
        danger: true,
        onClick: () => l?.(r),
      });
    }

    if (!N) {
      y.push({
        id: "report",
        label: "Пожаловаться",
        icon: n(Ci, { size: 16 }),
        danger: true,
        onClick: () => c?.(r),
      });
    }

    return y;
  }, [N, v, s, a, r, u, l, h, c, d]);

  return n("header", {
    className: Dt.header,
    children: [
      a &&
        n("div", {
          className: Dt.pinnedBadge,
          children: [
            n(Qo, { size: 14 }),
            n("span", { children: "Закреплённый пост" }),
          ],
        }),
      n("div", {
        className: Dt.headerMain,
        children: [
          i &&
            n("a", {
              href: `/@${e.username}`,
              children: n(st, {
                src: e.avatar,
                alt: e.displayName,
                size: "sm",
                online: e.online,
              }),
            }),
          n("div", {
            className: Dt.authorInfo,
            children: [
              n("a", {
                href: `/@${e.username}`,
                className: Dt.authorLink,
                children: n(Wn, {
                  name: e.displayName,
                  verified: e.isVerified,
                  hasNuksta: e.hasNuksta,
                  pin: e.pin,
                  size: "sm",
                }),
              }),
              n("time", {
                dateTime: t,
                className: Dt.time,
                children: [
                  f,
                  o &&
                    n(fo, {
                      text: new Date(o).toLocaleString("ru-RU"),
                      children: n("span", {
                        className: Dt.edited,
                        children: " (ред.)",
                      }),
                    }),
                ],
              }),
            ],
          }),
          n(Hi, {
            trigger: n(bi, { size: 18 }),
            items: p,
            position: "bottom-right",
            className: Dt.moreDropdown,
          }),
        ],
      }),
    ],
  });
}
function Wi(e, t, o) {
  const { isVisible: r, isRevealing: i, onRevealComplete: s } = o;
  const a = x([]);
  const c = x(null);
  const u = x(null);
  const l = x({ width: 0, height: 0 });
  const h = x(1);

  const d = E((w, v) => {
    const p = Math.random() * 80 + 60;
    return {
      x: Math.random() * w,
      y: Math.random() * v,
      size: Math.random() * 1.2 + 0.5,
      speedX: (Math.random() - 0.5) * 0.4,
      speedY: (Math.random() - 0.5) * 0.4,
      opacity: Math.random() * 0.5 + 0.2,
      life: Math.random() * p,
      maxLife: p,
    };
  }, []);

  const f = E(
    (w, v) => {
      const p = Math.floor((w * v) / 600);
      const y = [];
      for (let T = 0; T < p; T++) {
        y.push(d(w, v));
      }
      a.current = y;
    },
    [d]
  );

  const m = E(() => {
    const e_current = e.current;
    const t_current = t.current;
    if (!e_current || !t_current) {
      return;
    }
    const p = t_current.getBoundingClientRect();
    if (p.width === 0 || p.height === 0) {
      return;
    }
    const y = window.devicePixelRatio || 1;
    if (l.current.width !== p.width || l.current.height !== p.height) {
      l.current = { width: p.width, height: p.height };
      e_current.width = p.width * y;
      e_current.height = p.height * y;
      e_current.style.width = `${p.width}px`;
      e_current.style.height = `${p.height}px`;
      const T = e_current.getContext("2d");

      if (T) {
        T.setTransform(y, 0, 0, y, 0, 0);
        u.current = T;
      }

      f(p.width, p.height);
    }
  }, [e, t, f]);

  const N = E(() => {
    h.current = 1;
  }, []);

  W(() => {
    if (!r) {
      if (c.current) {
        cancelAnimationFrame(c.current);
        c.current = null;
      }

      return;
    }
    m();
    const w = () => {
      const u_current = u.current;
      const { width: p, height: y } = l.current;
      if (!u_current || p === 0 || p === 0 || y === 0) {
        c.current = requestAnimationFrame(w);
        return;
      }
      if (i && ((h.current -= 0.05), h.current <= 0)) {
        s();
        return;
      }
      u_current.clearRect(0, 0, p, y);

      a.current.forEach((T, g) => {
        T.x += T.speedX;
        T.y += T.speedY;
        T.life--;

        if (T.x < 0) {
          T.x = p;
        }

        if (T.x > p) {
          T.x = 0;
        }

        if (T.y < 0) {
          T.y = y;
        }

        if (T.y > y) {
          T.y = 0;
        }

        if (T.life <= 0) {
          a.current[g] = d(p, y);
          return;
        }

        const b = T.life / T.maxLife;
        const S = b < 0.3 ? b / 0.3 : 1;
        const R = T.opacity * S * h.current;
        u_current.beginPath();
        u_current.arc(T.x, T.y, T.size, 0, Math.PI * 2);
        u_current.fillStyle = `rgba(255, 255, 255, ${R})`;
        u_current.fill();
      });

      c.current = requestAnimationFrame(w);
    };
    c.current = requestAnimationFrame(w);
    window.addEventListener("resize", m);

    return () => {
      if (c.current) {
        cancelAnimationFrame(c.current);
      }

      window.removeEventListener("resize", m);
    };
  }, [r, i, d, m, s]);

  return { resetOpacity: N };
}
const n0 = "_2Gc4qhOv";
const o0 = "UY9OONTU";
const r0 = "_0IkXVI0s";
const s0 = "-LecVcA9";
const i0 = "I1O3wwfn";
const Cn = { container: n0, hidden: o0, image: r0, revealing: s0, canvas: i0 };
const gs = 5;
function a0({
  src: e,
  alt: t = "",
  spoiler: o = false,
  width: r,
  height: i,
  className: s = "",
  onClick: a,
}) {
  const [c, u] = I(!o);
  const [l, h] = I(false);
  const [d, f] = I(false);
  const m = x(null);
  const N = x(null);
  const w = x(null);
  const v = x(false);

  const { resetOpacity: p } = Wi(m, N, {
    isVisible: d && !c && o,
    isRevealing: l,
    onRevealComplete: () => u(true),
  });

  W(() => {
    const N_current = N.current;
    if (!N_current) {
      return;
    }
    const k = new IntersectionObserver(
      (_) => {
        _.forEach((P) => {
          f(P.isIntersecting);
        });
      },
      { threshold: 0, rootMargin: "0px 200px 0px 200px" }
    );
    k.observe(N_current);

    return () => {
      k.disconnect();
    };
  }, []);

  const y = (R) => {
    w.current = { x: R.clientX, y: R.clientY };
    v.current = false;
  };

  const T = (R) => {
    if (!w.current) {
      return;
    }
    const k = Math.abs(R.clientX - w.current.x);
    const _ = Math.abs(R.clientY - w.current.y);

    if (k > gs || _ > gs) {
      v.current = true;
    }
  };

  const g = (R) => {
    if (v.current) {
      v.current = false;
      R.stopPropagation();
      return;
    }

    if (!c && !l && o) {
      R.stopPropagation();
      h(true);
      p();
    } else if (a) {
      a(R);
    }
  };

  const b = !c && o;
  const S = r && i ? { aspectRatio: `${r} / ${i}` } : undefined;
  return o
    ? n("div", {
        ref: N,
        className: `${Cn.container} ${s} ${b ? Cn.hidden : ""} ${
          l ? Cn.revealing : ""
        }`,
        style: S,
        onPointerDown: y,
        onPointerMove: T,
        onClick: g,
        children: [
          n("img", {
            src: e,
            alt: t,
            className: Cn.image,
            loading: "lazy",
            width: r,
            height: i,
            draggable: false,
          }),
          b && n("canvas", { ref: m, className: Cn.canvas }),
        ],
      })
    : n("img", {
        src: e,
        alt: t,
        className: s,
        loading: "lazy",
        draggable: false,
        onClick: a,
      });
}
const c0 = "_7OM9isQp";
const l0 = "tOcLl5Fe";
const u0 = "K6pRPvna";
const d0 = "W7spdM5t";
const h0 = "_-2wZA6Y1";
const f0 = "eelWZWVN";

const cn = {
  container: c0,
  hidden: l0,
  video: u0,
  revealing: d0,
  canvas: h0,
  duration: f0,
};

function m0(e) {
  const t = Math.floor(e / 60);
  const o = e % 60;
  return `${t}:${o.toString().padStart(2, "0")}`;
}
function p0({
  src: e,
  spoiler: t = false,
  width: o,
  height: r,
  duration: i,
  className: s = "",
}) {
  const a = x(null);
  const c = x(null);
  const u = x(null);
  const [l, h] = I(!t);
  const [d, f] = I(false);
  const [m, N] = I(false);

  const { resetOpacity: w } = Wi(u, c, {
    isVisible: m && !l && t,
    isRevealing: d,
    onRevealComplete: () => h(true),
  });

  W(() => {
    const c_current = c.current;
    if (!c_current) {
      return;
    }
    const g = new IntersectionObserver(
      (b) => {
        b.forEach((S) => {
          N(S.isIntersecting);

          if (!S.isIntersecting && a.current) {
            a.current.pause();
          }
        });
      },
      { threshold: 0.25 }
    );
    g.observe(c_current);

    return () => g.disconnect();
  }, []);

  const v = (T) => {
    T.stopPropagation();

    if (!l && !d && t) {
      f(true);
      w();
      return;
    }
  };

  const p = !l && t;
  const y = o && r ? { aspectRatio: `${o} / ${r}` } : undefined;
  return n("div", {
    ref: c,
    className: `${cn.container} ${s} ${p ? cn.hidden : ""} ${
      d ? cn.revealing : ""
    }`,
    style: y,
    onClick: v,
    children: [
      n("video", {
        ref: a,
        src: e,
        controls: l || !t,
        preload: "metadata",
        playsInline: true,
        className: cn.video,
        width: o,
        height: r,
      }),
      i != null && n("div", { className: cn.duration, children: m0(i) }),
      p && n("canvas", { ref: u, className: cn.canvas }),
    ],
  });
}
const g0 = "l4cwyAPN";
const v0 = "qlCZ-7Jf";
const w0 = "_4vGEh5tJ";
const y0 = "awFKBPHw";
const _0 = "_0vEjHxry";
const Ct = { mediaWrapper: g0, isFeed: v0, media: w0, dragging: y0, image: _0 };
const C0 = 5;
const N0 = 0.95;
const Oo = 0.5;
function _r({ media: e, isFeed: t = false }) {
  const o = e?.filter((k) => k.type === "image") ?? [];

  const r = e?.filter((k) => k.type === "video") ?? [];

  const i = x(null);

  const s = ci((k) => k.open);

  const a = x(false);
  const c = x(0);
  const u = x(0);
  const l = x(false);
  const h = x(0);
  const d = x(0);
  const f = x(0);
  const m = x(null);

  const N = () => {
    if (m.current) {
      cancelAnimationFrame(m.current);
      m.current = null;
    }
  };

  const w = () => {
    const i_current = i.current;
    if (i_current) {
      f.current *= N0;

      if (Math.abs(f.current) < Oo) {
        N();
        return;
      }

      i_current.scrollLeft += f.current;
      m.current = requestAnimationFrame(w);
    }
  };

  const v = (k) => {
    const i_current = i.current;

    if (i_current && o.length + r.length > 1) {
      if (o.length + r.length > 1) {
        N();
        a.current = true;
        i_current.classList.add(Ct.dragging);
        c.current = k.clientX;
        h.current = k.clientX;
        d.current = Date.now();
        u.current = i_current.scrollLeft;
        l.current = false;
        f.current = 0;
        k.preventDefault();
      }
    }
  };

  const p = (k) => {
    if (!a.current) {
      return;
    }
    const i_current = i.current;
    if (!i_current) {
      return;
    }
    const P = Date.now();
    const C = k.clientX - c.current;
    const F = k.clientX - h.current;
    const O = P - d.current;

    if (Math.abs(C) > C0) {
      l.current = true;
    }

    if (O > 0) {
      f.current = (-F / O) * 16;
    }

    h.current = k.clientX;
    d.current = P;
    i_current.scrollLeft = u.current - C;
  };

  const y = () => {
    if (a.current && Math.abs(f.current) > Oo) {
      w();
    }

    a.current = false;
    i.current?.classList.remove(Ct.dragging);
  };

  const T = () => {
    if (a.current) {
      Math.abs(f.current) > Oo && w();
      a.current = false;
      i.current?.classList.remove(Ct.dragging);
    }
  };

  W(
    () => () => {
      N();
      i.current?.classList.remove(Ct.dragging);
    },
    []
  );

  const g = (k, _) => {
    if (l.current) {
      l.current = false;
      _.stopPropagation();
      return;
    }
    s(
      o.map((P) => ({
        id: P.id,
        url: P.url,
        width: P.width || 800,
        height: P.height || 600,
      })),
      k
    );
  };

  const b = (k) => {
    k.stopPropagation();
    l.current = false;
  };

  const S = Re(() => {
    if (!t) {
      return;
    }
    const k = [...o, ...r];
    if (k.length === 0) {
      return;
    }
    const _ = Math.max(...k.map((P) => P.height || 0));
    return _ > 0 ? Math.min(_, 300) : undefined;
  }, [o, r, t]);

  if (o.length === 0 && r.length === 0) {
    return null;
  }
  const R = o.length + r.length;
  return n("div", {
    className: `${Ct.mediaWrapper} ${t ? Ct.isFeed : ""}`,
    "data-count": R,
    style: S ? { height: `${S}px` } : undefined,
    children: n("div", {
      ref: i,
      className: `${Ct.media} ${t ? Ct.isFeed : ""}`,
      "data-count": R,
      onClick: b,
      onMouseDown: v,
      onMouseMove: p,
      onMouseUp: y,
      onMouseLeave: T,
      children: [
        r.map((k) =>
          n(
            p0,
            {
              src: k.url,
              spoiler: k.spoiler,
              width: k.width,
              height: k.height,
              duration: k.duration,
              className: Ct.image,
            },
            k.id
          )
        ),
        o.map((k, _) =>
          n(
            a0,
            {
              src: k.url,
              spoiler: k.spoiler,
              width: k.width,
              height: k.height,
              className: Ct.image,
              onClick: (P) => g(_, P),
            },
            k.id
          )
        ),
      ],
    }),
  });
}
const b0 = "Pc3ZwYUA";
const T0 = "uXiMWdXs";
const k0 = "_92KcEhCb";
const E0 = "A5HN458Y";
const R0 = "kVjrCCJb";
const S0 = "WIU3w8vr";
const I0 = "sxXVgu6K";

const Xt = {
  counter: b0,
  digit: T0,
  prev: k0,
  current: E0,
  animating: R0,
  up: S0,
  down: I0,
};

function x0(e) {
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
function En({ value: e }) {
  const t = x0(e);
  const o = x(e);
  const r = x(t.length);
  const i = x(Date.now());

  const [s, a] = I(() =>
    t.split("").map((d, f) => ({
      char: d,
      prevChar: d,
      isAnimating: false,
      key: f,
    }))
  );

  const [c, u] = I(null);

  W(() => {
    if (Date.now() - i.current < 100) {
      o.current = e;
      return;
    }
    if (e === o.current) {
      return;
    }
    const f = e > o.current ? "up" : "down";
    u(f);
    o.current = e;
    const m = t.split("");

    const N = s.map((g) => g.char);

    const w = Math.max(m.length, N.length);
    const v = N.join("").padStart(w, " ").split("");

    const y = m
      .join("")
      .padStart(w, " ")
      .split("")
      .map((g, b) => {
        const S = v[b] || " ";
        const R = s[b - (w - s.length)];
        return g !== S
          ? (r.current++,
            { char: g, prevChar: S, isAnimating: true, key: r.current })
          : { char: g, prevChar: g, isAnimating: false, key: R?.key ?? b };
      })
      .filter((g) => g.char !== " " || g.isAnimating);

    a(y);
    const T = setTimeout(() => {
      a((g) =>
        g.map((b) => ({
          ...b,
          isAnimating: false,
        }))
      );

      u(null);
    }, 300);
    return () => clearTimeout(T);
  }, [e]);

  if (!s.some((d) => d.isAnimating)) {
    return n("span", { children: t });
  }

  const h = c === "up" ? Xt.up : c === "down" ? Xt.down : "";
  return n("span", {
    className: Xt.counter,
    children: s.map((d) =>
      d.isAnimating
        ? n(
            "span",
            {
              className: `${Xt.digit} ${Xt.animating} ${h}`,
              children: [
                n("span", { className: Xt.prev, children: d.prevChar }),
                n("span", { className: Xt.current, children: d.char }),
              ],
            },
            d.key
          )
        : n("span", { children: d.char }, d.key)
    ),
  });
}
const P0 = "QnwlJ0JI";
const A0 = "_4ZjoCms2";
const M0 = "aMkvCscU";
const L0 = "lgOmJE17";
const $0 = "luVObdSy";
const O0 = "Rezs30lQ";
const D0 = "_8wD0dR85";
const B0 = "ndR5d-hp";
const U0 = "z-xpwcRG";
const F0 = "DecvAv-7";
const H0 = "VRuv-fcD";
const W0 = "lo4NvVKr";
const V0 = "eJzh56H-";
const j0 = "giKCW-y7";

const ze = {
  actions: P0,
  actionsLeft: A0,
  action: M0,
  views: L0,
  liked: $0,
  reposted: O0,
  disabled: D0,
  noAnimation: B0,
  reactionWrapper: U0,
  actionsRight: F0,
  captured: H0,
  capturedEmoji: W0,
  capturedText: V0,
  capturedMobile: j0,
};

function z0({
  liked: e,
  reposted: t,
  likesCount: o,
  repostsCount: r,
  commentsCount: i,
  viewsCount: s,
  dominantEmoji: a,
  onLike: c,
  onRepost: u,
  onComment: l,
  disableRepost: h = false,
}) {
  const d = x(false);
  return n("footer", {
    className: ze.actions,
    children: [
      n("div", {
        className: ze.actionsLeft,
        children: [
          n("div", {
            className: ze.reactionWrapper,
            onClick: (f) => f.stopPropagation(),
            children: n("button", {
              className: `${ze.action} ${e ? ze.liked : ""} ${
                !d.current && e ? ze.noAnimation : ""
              }`,
              onClick: (f) => {
                f.stopPropagation();
                d.current = true;
                c();
              },
              "aria-label": "Нравится",
              children: [
                n(_o, { filled: e }, e ? "liked" : "not-liked"),
                n(En, { value: o }),
              ],
            }),
          }),
          n("button", {
            className: ze.action,
            onClick: (f) => {
              f.stopPropagation();
              l();
            },
            "aria-label": "Комментировать",
            children: [n(fr, {}), n(En, { value: i })],
          }),
          n("button", {
            className: `${ze.action} ${t ? ze.reposted : ""} ${
              h ? ze.disabled : ""
            }`,
            onClick: (f) => {
              f.stopPropagation();

              if (!h) {
                u();
              }
            },
            disabled: h,
            "aria-label": "Репост",
            children: [n(ho, {}), n(En, { value: r })],
          }),
        ],
      }),
      n("div", {
        className: ze.actionsRight,
        children: [
          a &&
            n(Se, {
              children: [
                n(fo, {
                  text: "Эмоджи, которое чаще всего лайкало этот пост",
                  className: ze.captured,
                  children: [
                    n("span", { className: ze.capturedEmoji, children: a }),
                    n("span", {
                      className: ze.capturedText,
                      children: "Пост захвачен",
                    }),
                  ],
                }),
                n(fo, {
                  text: "Эмоджи, которое чаще всего лайкало этот пост",
                  className: ze.capturedMobile,
                  children: n("span", { children: a }),
                }),
              ],
            }),
          n("span", {
            className: ze.views,
            children: [n(Ii, {}), n(En, { value: s })],
          }),
        ],
      }),
    ],
  });
}
const X0 = "FdYjPIR3";
const Y0 = "MRPN0AlG";
const G0 = "gVTZJXUf";
const Z0 = "PpDQ-7eT";
const q0 = "f-Ewjbkv";
const K0 = "qYj6ku6f";
const J0 = "YmQiahvA";
const Q0 = "_4sEs40kd";
const eg = "QflhaLOr";
const tg = "_8yAtdePh";
const ng = "Q0BBb0GB";
const og = "LVT25SUb";
const rg = "_2QopExez";
const sg = "GWyTusR8";
const ig = "uA48J3e0";
const ag = "L9fW2zD6";

const We = {
  post: X0,
  postInner: Y0,
  isFeed: G0,
  postContent: Z0,
  postBody: q0,
  textWrapper: K0,
  text: J0,
  collapsed: Q0,
  expandButton: eg,
  originalPost: tg,
  originalPostHeader: ng,
  originalPostTime: og,
  originalPostText: rg,
  originalPostMedia: sg,
  originalPostStats: ig,
  originalPostStat: ag,
};

function Jn(e) {
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
function cg(e) {
  if (!e) {
    return "";
  }
  const t = new Date(e);
  return isNaN(t.getTime())
    ? ""
    : t.toLocaleDateString("ru-RU", { day: "numeric", month: "short" });
}
function lg({ attachments: e }) {
  const t = Re(() => po(e), [e]);
  return (
    t.length === 0 ||
    n("div", {
      className: We.originalPostMedia,
      children: n(_r, { media: t }),
    })
  );
}
function ug({ originalPost: e }) {
  const t = cg(e.createdAt);

  const o = E(
    (r) => {
      r.stopPropagation();
      const i = e.author.username ?? e.author.id;
      $(`/@${i}/post/${e.id}`);
    },
    [e.author.username, e.author.id, e.id]
  );

  return n("div", {
    className: We.originalPost,
    onClick: o,
    children: [
      n("div", {
        className: We.originalPostHeader,
        children: [
          n(ho, { size: 14 }),
          n(st, {
            src: e.author.avatar ?? "",
            alt: e.author.displayName,
            size: "xs",
          }),
          n(Wn, {
            name: e.author.displayName,
            verified: e.author.isVerified,
            hasNuksta: e.author.hasNuksta,
            pin: e.author.pin,
            size: "xs",
          }),
          n("span", { className: We.originalPostTime, children: t }),
        ],
      }),
      e.text && n("div", { className: We.originalPostText, children: e.text }),
      e.attachments &&
        e.attachments.length > 0 &&
        n(lg, { attachments: e.attachments }),
      n("div", {
        className: We.originalPostStats,
        children: [
          n("span", {
            className: We.originalPostStat,
            children: [n(_o, { size: 16 }), Jn(e.reactions?.total ?? 0)],
          }),
          n("span", {
            className: We.originalPostStat,
            children: [n(fr, { size: 16 }), Jn(e.stats?.comments ?? 0)],
          }),
          n("span", {
            className: We.originalPostStat,
            children: [n(ho, { size: 16 }), Jn(e.stats?.reposts ?? 0)],
          }),
          n("span", {
            className: We.originalPostStat,
            children: [n(Ii, { size: 16 }), Jn(e.stats?.views ?? 0)],
          }),
        ],
      }),
    ],
  });
}
const dg = "cZnuRugG";
const hg = "gXPlO0SF";
const fg = "yfGqJGgk";
const mg = "a3a8DYnF";
const pg = "Zm7GdliE";
const gg = "x-TM77c0";
const vg = "vqhGsmVx";
const wg = "wXZfEkKN";
const yg = "C4SARhpg";
const _g = "epV7SM-L";
const Cg = "Bkxq4G-V";
const Ng = "M1orzhg7";
const bg = "VQtopWsI";
const Tg = "vI-SLgZ3";
const kg = "hWCpL6Hf";
const Eg = "WAYqGGYB";
const Rg = "OWLYzJZs";
const Sg = "P15SrtYp";
const Ig = "y-9i4poD";
const xg = "qTvjpE7N";
const Pg = "rKM-vAOv";

const Le = {
  commentInput: dg,
  replyMode: hg,
  inputRow: fg,
  attachmentStrip: mg,
  circleButton: pg,
  micButton: gg,
  sendButton: vg,
  submitting: wg,
  textareaContainer: yg,
  expanded: _g,
  voiceMode: Cg,
  inputWrapper: Ng,
  commentCharCount: bg,
  error: Tg,
  input: kg,
  replyHeader: Eg,
  replyText: Rg,
  replyName: Sg,
  replyClose: Ig,
  dragActive: xg,
  dragOverlay: Pg,
};

const Ag = "_2mmgs8Ne";
const Mg = "WFxp3J8v";
const Lg = "abwLbpfW";
const Do = { textInput: Ag, entering: Mg, sendButton: Lg };
const $g = 1000; /* 1e3 */
function Og({
  text: e,
  spans: t,
  onChange: o,
  placeholder: r,
  onSubmit: i,
  isEntering: s,
  autoFocus: a,
  isSubmitting: c,
  sendDisabled: u,
  onImagePaste: l,
}) {
  const h = $g - e.length;
  const d = h < 0;
  const f = [Do.textInput, s ? Do.entering : ""].filter(Boolean).join(" ");
  return n("div", {
    className: f,
    children: [
      n("div", {
        className: Le.inputWrapper,
        children: [
          n(Co, {
            value: e,
            spans: t,
            onChange: o,
            placeholder: r,
            autoFocus: a,
            className: Le.input,
            minHeight: 24,
            maxHeight: 200,
            onSubmit: d || i,
            disableFormatting: true,
            onImagePaste: l,
          }),
          d &&
            n("span", {
              className: `${Le.commentCharCount} ${Le.error}`,
              children: h,
            }),
        ],
      }),
      n("button", {
        className: `${Le.circleButton} ${Le.sendButton} ${Do.sendButton} ${
          c ? Le.submitting : ""
        }`,
        onClick: i,
        disabled: c || u || u || d,
        children: c ? n(vt, { size: "xs" }) : n(pi, { size: 20 }),
      }),
    ],
  });
}
const Rn = 2;
const Dg = 2;
const Qn = Rn + Dg;
const Yt = 24;
const Bg = 80;
const vs = "rgba(142, 142, 147, 0.6)";
const Ug = "#FFFFFF";
function Fg({
  levels: e,
  slideOffset: t,
  audioRef: o,
  isRecording: r,
  hasRecording: i,
  isPlaying: s,
  onSeek: a,
  onPlay: c,
}) {
  const u = x(null);
  const l = x(null);
  const h = x(false);
  const d = x(0);
  const f = x(0);
  const m = x(0);
  const N = x(0);
  const w = x(null);
  const v = x(null);
  const p = x(0);
  const [y, T] = I(0);
  const g = Math.max(1, Math.floor(y / Qn));

  W(() => {
    m.current = t;

    if (t === 0) {
      f.current = 0;
    }
  }, [t]);

  W(() => {
    const l_current = l.current;
    if (!l_current) {
      return;
    }
    const F = new ResizeObserver((K) => {
      for (const ae of K) {
        const X = ae.contentRect.width;

        if (X > 0) {
          T(X);
        }
      }
    });
    F.observe(l_current);
    const O = l_current.getBoundingClientRect();

    if (O.width > 0) {
      T(O.width);
    }

    return () => {
      F.disconnect();
    };
  }, []);

  W(() => {
    const u_current = u.current;
    if (!u_current || y === 0) {
      return;
    }
    const F = window.devicePixelRatio || 1;
    u_current.width = y * F;
    u_current.height = Yt * F;
    u_current.style.width = `${y}px`;
    u_current.style.height = `${Yt}px`;
  }, [y]);

  const b = E(
    (C) => {
      const u_current = u.current;
      if (!u_current || y === 0) {
        return;
      }
      const O = u_current.getContext("2d");
      if (!O) {
        return;
      }
      const K = window.devicePixelRatio || 1;
      O.clearRect(0, 0, u_current.width, u_current.height);
      O.save();
      O.scale(K, K);
      const ae = Yt / 2;
      const X = Yt - 4;
      for (let Z = 0; Z < g; Z++) {
        let ce;
        if (e.length === 0) {
          ce = 0.05;
        } else if (e.length === 1) {
          ce = e[0];
        } else {
          const D = (Z / (g - 1)) * (e.length - 1);
          const $ = Math.floor(D);
          const V = Math.min($ + 1, e.length - 1);
          const U = D - $;
          ce = e[$] * (1 - U) + e[V] * U;
        }
        const J = Math.max(4, ce * X);
        const te = Z * Qn;
        const B = ae - J / 2;
        const z = Z < C;
        O.fillStyle = z ? Ug : vs;
        const Q = Rn / 2;
        O.beginPath();
        O.roundRect(te, B, Rn, J, Q);
        O.fill();
      }
      O.restore();
    },
    [e, y, g]
  );

  const S = E(
    (C) => {
      const u_current = u.current;
      if (!u_current || y === 0) {
        return;
      }
      const O = u_current.getContext("2d");
      if (!O) {
        return;
      }
      const K = window.devicePixelRatio || 1;
      const m_current = m.current;

      const { current } = f;

      if (current !== m_current) {
        const B = C - N.current;
        const z = (Qn / Bg) * B;

        if (current < m_current) {
          f.current = Math.min(m_current, current + z);
        } else {
          f.current = m_current;
        }
      }
      N.current = C;
      O.clearRect(0, 0, u_current.width, u_current.height);
      O.save();
      O.scale(K, K);
      O.translate(-current, 0);
      const ce = Yt / 2;
      const J = Yt - 4;
      const te = g + e.length;
      for (let B = 0; B < te; B++) {
        const z = B - g;
        const Q = z >= 0 && z < e.length ? e[z] : 0.05;
        const D = Math.max(4, Q * J);
        const $ = B * Qn;
        const V = ce - D / 2;
        O.fillStyle = vs;
        const U = Rn / 2;
        O.beginPath();
        O.roundRect($, V, Rn, D, U);
        O.fill();
      }
      O.restore();

      if (f.current !== m.current || r) {
        w.current = requestAnimationFrame(S);
      }
    },
    [e, y, g, r]
  );

  W(() => {
    if (r) {
      N.current = performance.now();
      w.current = requestAnimationFrame(S);
    } else if (w.current) {
      cancelAnimationFrame(w.current);
      w.current = null;
    }

    return () => {
      if (w.current) {
        cancelAnimationFrame(w.current);
        w.current = null;
      }
    };
  }, [r, S]);

  W(() => {
    if (!s || r) {
      if (v.current) {
        cancelAnimationFrame(v.current);
        v.current = null;
      }

      return;
    }
    const C = () => {
      const o_current = o.current;
      if (
        !o_current ||
        o_current.paused ||
        o_current.paused ||
        o_current.ended
      ) {
        v.current = null;
        return;
      }
      const O = o_current.currentTime / o_current.duration;
      const K = Math.ceil(O * g);

      if (K !== p.current) {
        p.current = K;
        b(K);
      }

      v.current = requestAnimationFrame(C);
    };
    v.current = requestAnimationFrame(C);

    return () => {
      if (v.current) {
        cancelAnimationFrame(v.current);
        v.current = null;
      }
    };
  }, [s, r, o, g, b]);

  W(() => {
    if (!r && !s && i) {
      const o_current = o.current;
      if (o_current && o_current.duration > 0 && o_current.currentTime > 0) {
        const F = o_current.currentTime / o_current.duration;
        const O = Math.ceil(F * g);
        p.current = O;
        b(O);
      } else {
        p.current = 0;
        b(0);
      }
    }
  }, [r, s, i, b, o, g]);

  W(() => {
    if (!r && i && !s) {
      b(p.current);
    }
  }, [e, g, r, i, s, b]);

  const R = E((C) => {
    const l_current = l.current;
    if (!l_current) {
      return 0;
    }
    const O = l_current.getBoundingClientRect();
    const K = "touches" in C ? C.touches[0].clientX : C.clientX;
    return Math.max(0, Math.min(1, (K - O.left) / O.width));
  }, []);

  const k = E(
    (C) => {
      if (!(!i || r)) {
        C.preventDefault();

        if (!s) {
          c();
          return;
        }

        h.current = true;
        d.current = R(C);
      }
    },
    [i, r, s, R, c]
  );

  const _ = E(
    (C) => {
      if (h.current) {
        d.current = R(C);
      }
    },
    [R]
  );

  const P = E(() => {
    if (h.current) {
      a(d.current);
      h.current = false;
    }
  }, [a]);

  W(() => {
    const C = (O) => _(O);

    const F = () => P();

    window.addEventListener("mousemove", C);
    window.addEventListener("mouseup", F);
    window.addEventListener("touchmove", C);
    window.addEventListener("touchend", F);

    return () => {
      window.removeEventListener("mousemove", C);
      window.removeEventListener("mouseup", F);
      window.removeEventListener("touchmove", C);
      window.removeEventListener("touchend", F);
    };
  }, [_, P]);

  return n("div", {
    ref: l,
    style: {
      width: "100%",
      height: `${Yt}px`,
      overflow: "hidden",
      cursor: i && !r ? "pointer" : "default",
    },
    onMouseDown: k,
    onTouchStart: k,
    children: n("canvas", { ref: u }),
  });
}
const Hg = "-Ho1i5aD";
const Wg = "tC8l4Awz";
const Vg = "qgaHaLq2";
const jg = "ABusj9On";
const zg = "QN61mWs7";
const Xg = "sb0Zcaza";
const Yg = "zYZ8RG9n";
const Gg = "kV8tSOUW";
const Zg = "MazmNAnz";
const qg = "IygqjuIv";
const Kg = "Danfku1z";

const nt = {
  voiceInput: Hg,
  circleButton: Wg,
  playButton: Vg,
  hasRecording: jg,
  stopButton: zg,
  recording: Xg,
  sendButton: Yg,
  audioVisualizer: Gg,
  waveformContainer: Zg,
  recordingTime: qg,
  exiting: Kg,
};

function Jg({ onCancel: e, onSend: t, isExiting: o, onExitComplete: r }) {
  const [i, s] = I(false);

  const {
    isRecording: a,
    hasRecording: c,
    recordingTime: u,
    audioLevels: l,
    slideOffset: h,
    isPlaying: d,
    playbackProgress: f,
    duration: m,
    audioElementRef: N,
    startRecording: w,
    stopRecording: v,
    cancelRecording: p,
    playAudio: y,
    pauseAudio: T,
    seekTo: g,
    getAudioBlob: b,
  } = Tc();

  W(() => {
    w();
  }, []);

  W(() => {
    if (o && r) {
      const O = setTimeout(r, 300);
      return () => clearTimeout(O);
    }
  }, [o, r]);

  const S = (O) => {
    if (!isFinite(O) || isNaN(O)) {
      return "00:00";
    }
    const K = Math.floor(O / 60);
    const ae = Math.floor(O % 60);
    return `${K.toString().padStart(2, "0")}:${ae.toString().padStart(2, "0")}`;
  };

  const R = () => {
    if (c) {
      if (d) {
        T();
      } else {
        y();
      }
    }
  };

  const k = () => {
    if (a) {
      v();
    }
  };

  const _ = E(
    (O) => {
      g(O);
    },
    [g]
  );

  const P = E(async () => {
    if (!(i || !t)) {
      s(true);
      try {
        let O = null;

        if (a) {
          O = await v();
        } else {
          O = b();
        }

        if (!O) {
          return;
        }

        await t(O);
        p();
        e();
      } catch (O) {
        console.error("Failed to send voice message:", O);
      } finally {
        s(false);
      }
    }
  }, [i, a, v, b, t, p, e]);

  const C = S(a ? u : d ? f * m : m);

  const F = [
    nt.voiceInput,
    a ? nt.recording : "",
    c ? nt.hasRecording : "",
    o ? nt.exiting : "",
  ]
    .filter(Boolean)
    .join(" ");

  return n("div", {
    className: F,
    children: [
      n("button", {
        className: `${nt.circleButton} ${nt.playButton}`,
        onClick: R,
        children: d ? n(Ti, { size: 20 }) : n(Ei, { size: 20 }),
      }),
      n("div", {
        className: nt.audioVisualizer,
        children: [
          n("div", {
            className: nt.waveformContainer,
            children: n(Fg, {
              levels: l,
              slideOffset: h,
              audioRef: N,
              isRecording: a,
              hasRecording: c,
              isPlaying: d,
              onSeek: _,
              onPlay: y,
            }),
          }),
          n("span", { className: nt.recordingTime, children: C }),
        ],
      }),
      n("button", {
        className: `${nt.circleButton} ${nt.stopButton}`,
        onClick: k,
        children: n(Qc, { size: 20 }),
      }),
      n("button", {
        className: `${nt.circleButton} ${nt.sendButton}`,
        onClick: P,
        disabled: i || (a && u < 1),
        children: i ? n(vt, { size: "xs" }) : n(pi, { size: 20 }),
      }),
    ],
  });
}
function Vi({
  onSubmit: e,
  onVoiceSend: t,
  placeholder: o = "Написать комментарий...",
  replyTo: r,
  onCancelReply: i,
  autoFocus: s,
}) {
  const { text: a, spans: c, handleChange: u, reset: l } = yo();
  const [h, d] = I("text");
  const [f, m] = I(false);
  const [N, w] = I(false);
  const [v, p] = I(false);
  const [y, T] = I(false);
  const g = x(false);
  const b = x(null);
  const S = x(0);

  const {
    images: R,
    uploadingImages: k,
    isUploading: _,
    openFilePicker: P,
    removeImage: C,
    uploadFiles: F,
    clearAll: O,
    fileInputRef: K,
    handleFileChange: ae,
  } = Di(4);

  W(
    () => () => {
      if (b.current) {
        clearTimeout(b.current);
      }
    },
    []
  );
  const X = R.length > 0 || k.length > 0;
  const Z = a.length > 0 || v || v || X;
  const ce = h === "voice";
  const J = 1000; /* 1e3 */

  const te = async () => {
    const ee = a.trim().length > 0;
    const M = R.length > 0;
    if ((!ee && !M) || v || _ || a.length > J) {
      return;
    }
    const ne = a.trim();
    const re = [...c];

    const de = R.map((ue) => ({
      mediaId: ue.mediaId,
    }));

    p(true);
    try {
      await e(ne, re, de.length > 0 ? de : undefined);
      l();
      O();
    } catch (ue) {
      console.error("Failed to submit comment:", ue);
    } finally {
      p(false);
    }
  };

  const B = () => {
    g.current = true;
    d("voice");
    w(false);
  };

  const z = () => {
    m(true);
  };

  const Q = () => {
    m(false);
    d("text");
    w(true);

    if (b.current) {
      clearTimeout(b.current);
    }

    b.current = window.setTimeout(() => {
      b.current = null;
      w(false);
    }, 300);
  };

  const D = E((ee) => {
    ee.preventDefault();
    ee.stopPropagation();
    S.current++;

    if (ee.dataTransfer?.types.includes("Files")) {
      T(true);
    }
  }, []);

  const $ = E((ee) => {
    ee.preventDefault();
    ee.stopPropagation();
  }, []);

  const V = E((ee) => {
    ee.preventDefault();
    ee.stopPropagation();
    S.current--;

    if (S.current === 0) {
      T(false);
    }
  }, []);

  const U = E(
    (ee) => {
      ee.preventDefault();
      ee.stopPropagation();
      S.current = 0;
      T(false);
      const M = ee.dataTransfer?.files;

      if (M && M.length > 0) {
        F(Array.from(M));
      }
    },
    [F]
  );

  const oe = [
    Le.commentInput,
    Z ? Le.expanded : "",
    ce ? Le.voiceMode : "",
    r ? Le.replyMode : "",
    y ? Le.dragActive : "",
  ]
    .filter(Boolean)
    .join(" ");

  return n("div", {
    className: oe,
    onDragEnter: D,
    onDragOver: $,
    onDragLeave: V,
    onDrop: U,
    children: [
      y &&
        n("div", {
          className: Le.dragOverlay,
          children: [
            n("svg", {
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "1.5",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              children: [
                n("rect", {
                  x: "3",
                  y: "3",
                  width: "18",
                  height: "18",
                  rx: "2",
                  ry: "2",
                }),
                n("circle", { cx: "8.5", cy: "8.5", r: "1.5" }),
                n("polyline", { points: "21 15 16 10 5 21" }),
              ],
            }),
            n("span", { children: "Перетащите изображение" }),
          ],
        }),
      r &&
        n("div", {
          className: Le.replyHeader,
          children: [
            n("span", {
              className: Le.replyText,
              children: [
                "Ответ для ",
                n("span", { className: Le.replyName, children: r.authorName }),
              ],
            }),
            n("button", {
              className: Le.replyClose,
              onClick: i,
              children: n(Et, { size: 16 }),
            }),
          ],
        }),
      !ce &&
        !f &&
        X &&
        n("div", {
          className: Le.attachmentStrip,
          children: n(Oi, { images: R, uploadingImages: k, onRemove: C }),
        }),
      n("div", {
        className: Le.inputRow,
        children: [
          n("button", {
            className: Le.circleButton,
            onClick: ce ? z : P,
            children: ce ? n(Et, { size: 20 }) : n(gi, { size: 20 }),
          }),
          n("div", {
            className: Le.textareaContainer,
            children:
              ce || f
                ? n(Jg, {
                    onCancel: z,
                    onSend: t,
                    isExiting: f,
                    onExitComplete: Q,
                  })
                : n(Og, {
                    text: a,
                    spans: c,
                    onChange: u,
                    placeholder: o,
                    onSubmit: te,
                    isEntering: N,
                    autoFocus: s,
                    isSubmitting: v,
                    sendDisabled: _,
                    onImagePaste: F,
                  }),
          }),
          !ce &&
            !f &&
            n("button", {
              className: `${Le.circleButton} ${Le.micButton}`,
              onClick: B,
              children: n(jc, { size: 20 }),
            }),
        ],
      }),
      n("input", {
        ref: K,
        type: "file",
        accept: Ko,
        multiple: true,
        onChange: ae,
        style: { display: "none" },
      }),
    ],
  });
}

const Bo = Rt((e) => ({
  activeAudioId: null,
  setActiveAudio: (t) => e({ activeAudioId: t }),
}));

const Qg = "_4REluXTH";
const ev = "csThJX40";
const tv = "_7tEz9WJs";
const nv = "yICArXOf";
const ov = "-QGEO-Ir";
const rv = "F2vpEy3t";
const sv = "thwOd-Oi";
const iv = "cU3NuD-h";
const av = "koGcQrYR";
const cv = "Ka6vy6TO";

const ft = {
  voiceMessage: Qg,
  playButton: ev,
  content: tv,
  waveform: nv,
  dragging: ov,
  bar: rv,
  played: sv,
  info: iv,
  time: av,
  duration: cv,
};

const lv = 45;
function uv(e) {
  let t = 0;
  for (let o = 0; o < e.length; o++) {
    const r = e.charCodeAt(o);
    t = (t << 5) - t + r;
    t = t & t;
  }
  return Math.abs(t);
}
function dv(e) {
  const t = [];
  let o = uv(e);
  for (let r = 0; r < lv; r++) {
    o = (o * 9301 + 49297) % 233280;
    const i = 0.2 + (o / 233280) * 0.8;
    t.push(i);
  }
  return t;
}
function ws(e) {
  if (!isFinite(e) || isNaN(e)) {
    return "0:00";
  }
  const t = Math.floor(e / 60);
  const o = Math.floor(e % 60);
  return `${t}:${o.toString().padStart(2, "0")}`;
}
function hv({ src: e, duration: t = 0 }) {
  const o = Re(() => e, [e]);

  const r = Re(() => dv(e), [e]);

  const i = Bo((k) => k.activeAudioId);

  const s = Bo((k) => k.setActiveAudio);

  const [a, c] = I(true);
  const [u, l] = I(0);
  const [h, d] = I(t);
  const [f, m] = I(false);
  const N = x(null);
  const w = x(null);
  const v = x(null);
  const p = i === o;

  W(() => {
    if (i !== o && N.current && !N.current.paused) {
      N.current.pause();
      v.current && (cancelAnimationFrame(v.current), (v.current = null));
    }
  }, [i, o]);

  W(() => {
    const k = new Audio(e);
    N.current = k;

    const _ = () => {
      d(k.duration || t);
      c(false);
    };

    const P = () => {
      l(0);

      if (v.current) {
        cancelAnimationFrame(v.current);
        v.current = null;
      }

      s(null);
    };

    const C = () => {
      c(false);
    };

    k.addEventListener("loadedmetadata", _);
    k.addEventListener("ended", P);
    k.addEventListener("error", C);

    return () => {
      k.removeEventListener("loadedmetadata", _);
      k.removeEventListener("ended", P);
      k.removeEventListener("error", C);
      k.pause();
      N.current = null;

      if (v.current) {
        cancelAnimationFrame(v.current);
      }

      if (Bo.getState().activeAudioId === o) {
        s(null);
      }
    };
  }, [e, t, o, s]);

  const y = E(() => {
    if (N.current) {
      l(N.current.currentTime);
      v.current = requestAnimationFrame(y);
    }
  }, []);

  const T = E(() => {
    const N_current = N.current;

    if (N_current && !a) {
      if (p) {
        N_current.pause();
        v.current && (cancelAnimationFrame(v.current), (v.current = null));
        s(null);
      } else {
        s(o);
        N_current.play();
        y();
      }
    }
  }, [p, a, o, s, y]);

  const g = E(
    (k) => {
      if (!w.current || !h) {
        return 0;
      }
      const _ = w.current.getBoundingClientRect();
      const k_clientX = k.clientX;
      return Math.max(0, Math.min(k_clientX - _.left, _.width)) / _.width;
    },
    [h]
  );

  const b = E(
    (k) => {
      const N_current = N.current;
      if (!N_current || !h || !h || f) {
        return;
      }
      const P = g(k);
      N_current.currentTime = P * h;
      l(N_current.currentTime);
    },
    [h, f, g]
  );

  const S = E(
    (k) => {
      const N_current = N.current;
      if (!N_current || !h) {
        return;
      }
      m(true);
      const P = g(k);
      N_current.currentTime = P * h;
      l(N_current.currentTime);
    },
    [h, g]
  );

  W(() => {
    if (!f) {
      return;
    }

    const k = (P) => {
      const N_current = N.current;
      if (!N_current || !h) {
        return;
      }
      const F = g(P);
      N_current.currentTime = F * h;
      l(N_current.currentTime);
    };

    const _ = () => {
      m(false);
    };

    document.addEventListener("mousemove", k);
    document.addEventListener("mouseup", _);

    return () => {
      document.removeEventListener("mousemove", k);
      document.removeEventListener("mouseup", _);
    };
  }, [f, h, g]);
  const R = h > 0 ? u / h : 0;
  return n("div", {
    className: `${ft.voiceMessage} ${p ? ft.playing : ""}`,
    children: [
      n("button", {
        className: ft.playButton,
        onClick: T,
        disabled: a,
        children: a
          ? n(Hn, { size: 18 })
          : p
          ? n(Ti, { size: 18 })
          : n(Ei, { size: 18 }),
      }),
      n("div", {
        className: ft.content,
        children: [
          n("div", {
            ref: w,
            className: `${ft.waveform} ${f ? ft.dragging : ""}`,
            onClick: b,
            onMouseDown: S,
            children: r.map((k, _) => {
              const C = (_ + 0.5) / r.length <= R;
              return n(
                "div",
                {
                  className: `${ft.bar} ${C ? ft.played : ""}`,
                  style: { height: `${Math.max(4, k * 24)}px` },
                },
                _
              );
            }),
          }),
          n("div", {
            className: ft.info,
            children: [
              n("span", {
                className: ft.time,
                children: ws(p || u > 0 ? u : h),
              }),
              (p || u > 0) &&
                n("span", { className: ft.duration, children: ["/ ", ws(h)] }),
            ],
          }),
        ],
      }),
    ],
  });
}
const fv = "EMoEIZFv";
const mv = "TCFYTRkG";
const pv = "-Jv0cl93";
const gv = "_8ZH4gvtt";
const vv = "VgMMM-FP";
const wv = "MHUIw-Bn";
const yv = "ugI7Vwfw";
const _v = "eYiDjO7I";
const Cv = "efgl9R1v";
const Nv = "N5ciicq2";
const bv = "Y3Xvuphx";
const Tv = "P1lAENLs";
const kv = "EafRTyEa";
const Ev = "YgCVK2-C";
const Rv = "E34stxAv";
const Sv = "_5xeGurR-";
const Iv = "_8CHHNoFp";
const xv = "qBk55euG";
const Pv = "NTrrYRK4";
const Av = "Oy71u1HK";
const Mv = "Az3ELd41";
const Lv = "g9UiDqsQ";
const $v = "-tabj2ls";
const Ov = "LiWVk6u3";

const Te = {
  commentWrapper: fv,
  threadItem: mv,
  avatarWrapper: pv,
  threadLine: gv,
  commentBody: vv,
  showMoreBtn: wv,
  avatarPlaceholder: yv,
  comment: _v,
  small: Cv,
  commentTime: Nv,
  commentText: bv,
  commentActions: Tv,
  commentContent: kv,
  avatarLink: Ev,
  authorLink: Rv,
  commentHeader: Sv,
  moreButton: Iv,
  commentHeaderLeft: xv,
  replyMention: Pv,
  commentMedia: Av,
  reactionWrapper: Mv,
  commentAction: Lv,
  liked: $v,
  replyButton: Ov,
};

function Dv({
  author: e,
  commentId: t,
  text: o,
  spans: r = [],
  attachments: i = [],
  createdAt: s,
  reactionsCount: a,
  isReacted: c,
  size: u = "sm",
  onLike: l,
  onReply: h,
  onReport: d,
  onEdit: f,
  onDelete: m,
  replyTo: N,
  hideAvatar: w = false,
  isWallOwner: v = false,
}) {
  console.log("[CommentBase] RENDER", { commentId: t, text: o.slice(0, 20) });
  const p = mi(s);

  const y = Ne((k) => k.profile?.id);

  const T = e.id === y;
  const g = T || v;
  const b = u === "xs";

  const S = Re(() => {
    const k = [];

    if (T && f) {
      k.push({
        id: "edit",
        label: "Редактировать",
        icon: n(yi, { size: 16 }),
        onClick: () => f(t),
      });
    }

    if (g && m) {
      k.push({
        id: "delete",
        label: "Удалить",
        icon: n(Si, { size: 16 }),
        danger: true,
        onClick: () => m(t),
      });
    }

    if (!T) {
      k.push({
        id: "report",
        label: "Пожаловаться",
        icon: n(Ci, { size: 16 }),
        danger: true,
        onClick: () => d(t),
      });
    }

    return k;
  }, [T, g, t, f, m, d]);

  const R = `/@${e.username ?? e.id}`;
  return n("div", {
    className: `${Te.comment} ${b ? Te.small : ""}`,
    children: [
      !w &&
        n("a", {
          href: R,
          className: Te.avatarLink,
          children: n(st, { src: e.avatar, alt: e.displayName, size: u }),
        }),
      n("div", {
        className: Te.commentContent,
        children: [
          n("div", {
            className: Te.commentHeader,
            children: [
              n("div", {
                className: Te.commentHeaderLeft,
                children: [
                  n("a", {
                    href: R,
                    className: Te.authorLink,
                    children: n(Wn, {
                      name: e.displayName,
                      verified: e.isVerified,
                      hasNuksta: e.hasNuksta,
                      pin: e.pin,
                      size: u,
                    }),
                  }),
                  n("span", { className: Te.commentTime, children: p }),
                ],
              }),
              n(Hi, {
                trigger: n(bi, { size: b ? 14 : 16 }),
                items: S,
                position: "bottom-right",
                className: Te.moreButton,
              }),
            ],
          }),
          (N || o) &&
            n("div", {
              className: Te.commentText,
              children: [
                N &&
                  n(Se, {
                    children: [
                      n("a", {
                        href: `/@${N.username}`,
                        className: Te.replyMention,
                        children: ["@", N.displayName],
                      }),
                      ", ",
                    ],
                  }),
                o && n(Fi, { text: o, spans: r }),
              ],
            }),
          po(i).length > 0 &&
            n("div", {
              className: Te.commentMedia,
              children: n(_r, { media: po(i) }),
            }),
          i
            .filter((k) => k.type === "audio")
            .map((k) => n(hv, { src: k.url, duration: k.duration }, k.id)),
          n("div", {
            className: Te.commentActions,
            children: [
              n("button", {
                className: Te.replyButton,
                onClick: h,
                children: "Ответить",
              }),
              n("div", {
                className: Te.reactionWrapper,
                children: n("button", {
                  className: `${Te.commentAction} ${c ? Te.liked : ""}`,
                  onClick: () => l(),
                  children: [
                    n(_o, { size: 14, filled: c }),
                    n(En, { value: a }),
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
function ji({
  comment: e,
  onLike: t,
  onReaction: o,
  onLikeReply: r,
  onReactionReply: i,
  replyingTo: s,
  onStartReply: a,
  onCancelReply: c,
  onSubmitReply: u,
  onVoiceSend: l,
  onLoadReplies: h,
  onReport: d,
  onEdit: f,
  onDelete: m,
  isLoadingReplies: N = false,
  flashingCommentId: w,
  isWallOwner: v = false,
}) {
  console.log("[CommentItem] RENDER", { commentId: e.id });
  const p = s?.commentId === e.id;

  const y = {
    id: e.author.id,
    username: e.author.username,
    avatar: e.author.avatar ?? "",
    displayName: e.author.displayName,
    isVerified: e.author.isVerified,
    pin: e.author.pin,
  };

  const T = e.previewReplies ?? [];
  const g = w === e.id;
  const [b] = I({});
  const [S] = I({});
  const R = E(async () => {}, [e.id]);
  const k = E(async (C) => {}, []);
  const _ = e.stats.replies > T.length;

  const P = [
    { type: "parent", data: e, author: y },
    ...T.map((C) => ({
      type: "reply",
      data: C,

      author: {
        id: C.author.id,
        username: C.author.username,
        avatar: C.author.avatar ?? "",
        displayName: C.author.displayName,
        isVerified: C.author.isVerified,
        pin: C.author.pin,
      },
    })),
  ];

  return n("div", {
    className: `${Te.commentWrapper} ${g ? "flash-highlight" : ""}`,
    "data-comment-id": e.id,
    children: [
      P.map((C, F) => {
        const K = !(F === P.length - 1 && !p && !_);
        const ae = w === C.data.id;
        return n(
          "div",
          {
            "data-comment-id": C.data.id,
            className: `${Te.threadItem} ${ae ? "flash-highlight" : ""}`,
            children: [
              n("div", {
                className: Te.avatarWrapper,
                children: [
                  n("a", {
                    href: `/@${C.author.username ?? C.author.id}`,
                    className: Te.avatarLink,
                    children: n(st, {
                      src: C.author.avatar,
                      alt: C.author.displayName,
                      size: "sm",
                    }),
                  }),
                  K && n("div", { className: Te.threadLine }),
                ],
              }),
              n("div", {
                className: Te.commentBody,
                children: n(Dv, {
                  author: C.author,
                  commentId: C.data.id,
                  text: C.data.text,
                  spans: C.data.spans ?? [],
                  attachments: C.data.attachments ?? [],
                  replyTo: C.data.replyTo,
                  createdAt: C.data.createdAt,
                  reactionsCount: C.data.reactions.total,
                  isReacted: C.data.reactions.myReaction !== null,
                  selectedReaction: C.data.reactions.myReaction,
                  reactionCounts: C.type === "parent" ? b : S[C.data.id] ?? {},
                  size: "sm",
                  onLike: C.type === "parent" ? t : () => r(C.data.id),
                  onReaction:
                    C.type === "parent"
                      ? o
                        ? (X) => o(e.id, X)
                        : undefined
                      : i
                      ? (X) => i(C.data.id, X)
                      : undefined,
                  onReply: () =>
                    C.type === "parent"
                      ? a(
                          e.id,
                          e.author.username ?? e.author.id,
                          e.author.displayName,
                          e.author.id
                        )
                      : a(
                          e.id,
                          C.data.author.username ?? C.data.author.id,
                          C.data.author.displayName,
                          C.data.author.id,
                          C.data.id
                        ),
                  onReport: d,
                  onEdit: f,
                  onDelete: m,
                  onHoverReaction: C.type === "parent" ? R : () => k(C.data.id),
                  hideAvatar: true,
                  isWallOwner: v,
                }),
              }),
            ],
          },
          C.data.id
        );
      }),
      p &&
        n("div", {
          className: Te.threadItem,
          children: [
            n("div", {
              className: Te.avatarWrapper,
              children: [
                n("div", { className: Te.avatarPlaceholder }),
                _ && n("div", { className: Te.threadLine }),
              ],
            }),
            n("div", {
              className: Te.commentBody,
              children: n(Vi, {
                placeholder: "Написать ответ...",
                replyTo: { id: s.commentId, authorName: s.displayName },
                onCancelReply: c,
                onSubmit: u,
                onVoiceSend: l,
                autoFocus: true,
              }),
            }),
          ],
        }),
      _ &&
        !N &&
        n("button", {
          className: Te.showMoreBtn,
          onClick: () => h(e.id),
          children: ["Показать ещё ", e.stats.replies - T.length, " ответов"],
        }),
    ],
  });
}
function Bv({
  itemCount: e,
  estimatedItemHeight: t,
  overscan: o = 5,
  getItemKey: r = (i) => i,
}) {
  const i = x(null);
  const [s, a] = I(0);
  const [c, u] = I(0);
  const l = x(new Map());
  const h = x(new Map());
  const d = x(0);

  if (d.current !== e) {
    d.current = e;
    h.current.clear();
  }

  const f = E(
    (b) => {
      const S = r(b);
      return l.current.get(S) ?? t;
    },
    [r, t]
  );

  const m = E(
    (b) => {
      if (b === 0) {
        return 0;
      }
      const S = h.current.get(b);
      if (S !== undefined) {
        return S;
      }
      let R = 0;
      let k = 0;
      for (let _ = b - 1; _ >= 0; _--) {
        const P = h.current.get(_);
        if (P !== undefined) {
          R = _;
          k = P;
          break;
        }
      }
      for (let _ = R; _ < b; _++) {
        k += f(_);
      }
      h.current.set(b, k);
      return k;
    },
    [f]
  );

  const N = Re(() => (e === 0 ? 0 : m(e - 1) + f(e - 1)), [e, m, f]);

  const { startIndex: w, endIndex: v } = Re(() => {
    if (e === 0 || c === 0) {
      return { startIndex: 0, endIndex: 0 };
    }
    let b = 0;
    let S = e - 1;

    while (b < S) {
      const P = Math.floor((b + S) / 2);
      const C = m(P);
      const F = f(P);

      if (C + F < s) {
        b = P + 1;
      } else {
        S = P;
      }
    }

    const R = Math.max(0, b - o);
    let k = b;
    let _ = m(b) - s;

    while (k < e && _ < c + t * o) {
      _ += f(k);
      k++;
    }

    k = Math.min(e - 1, k + o);
    return { startIndex: R, endIndex: k };
  }, [e, s, c, m, f, o, t]);

  const p = Re(() => {
    if (e === 0) {
      return [];
    }
    const b = [];
    for (let S = w; S <= v; S++) {
      b.push({ index: S, key: r(S), start: m(S), size: f(S) });
    }
    return b;
  }, [w, v, r, m, f, e]);

  const y = E(
    (b, S) => {
      if (!b) {
        return;
      }
      const R = r(S);
      const k = b.getBoundingClientRect().height;
      if (k <= 0) {
        return;
      }
      const _ = l.current.get(R);

      if (_ === undefined || Math.abs(_ - k) > 2) {
        l.current.set(R, k);
        h.current.clear();
      }
    },
    [r]
  );

  const T = E(() => {
    if (i.current) {
      a(i.current.scrollTop);
    }
  }, []);

  const g = E(
    (b) => {
      if (i.current) {
        i.current.removeEventListener("scroll", T);
      }

      i.current = b;

      if (b) {
        u(b.clientHeight);
        a(b.scrollTop);
        b.addEventListener("scroll", T, { passive: true });
      }
    },
    [T]
  );

  W(() => {
    if (!i.current) {
      return;
    }
    const b = new ResizeObserver((S) => {
      for (const R of S) {
        u(R.contentRect.height);
      }
    });
    b.observe(i.current);

    return () => b.disconnect();
  }, []);

  W(
    () => () => {
      if (i.current) {
        i.current.removeEventListener("scroll", T);
      }
    },
    [T]
  );

  return { containerRef: g, virtualItems: p, totalSize: N, measureElement: y };
}
const Uv = "OSYFbJTc";
const Fv = "BZs335wO";
const Hv = "uHfvgHkC";
const Wv = "_0mjuADLO";
const Vv = "-irX9LBI";
const jv = "PkENmhoL";
const zv = "Ipy3h0nq";
const Xv = "_7EbOLXPm";
const Yv = "qUnBivge";
const Gv = "XcWtT84I";
const Zv = "I-b0vKPW";
const qv = "quGM4O7I";
const Kv = "EO684LVX";

const ot = {
  comments: Uv,
  sortWrapper: Fv,
  sortSelect: Hv,
  commentsList: Wv,
  commentItem: Vv,
  empty: jv,
  loading: zv,
  loadMoreSentinel: Xv,
  virtualContainer: Yv,
  virtualContent: Gv,
  virtualItem: Zv,
  loadMoreSpinner: qv,
  inputWrapper: Kv,
};

const Jv = 120;
function Qv({
  comments: e,
  hasMore: t,
  isLoadingMore: o,
  onLoadMore: r,
  replyingTo: i,
  flashingCommentId: s,
  loadingRepliesId: a,
  isWallOwner: c,
  onLikeComment: u,
  onReactionComment: l,
  onLikeReply: h,
  onReactionReply: d,
  onStartReply: f,
  onCancelReply: m,
  onSubmitReply: N,
  onVoiceSend: w,
  onLoadReplies: v,
  onReport: p,
  onEdit: y,
  onDelete: T,
}) {
  const g = x(false);

  const {
    containerRef: b,
    virtualItems: S,
    totalSize: R,
    measureElement: k,
  } = Bv({
    itemCount: e.length,
    estimatedItemHeight: Jv,
    overscan: 3,
    getItemKey: (P) => e[P]?.id ?? P,
  });

  W(() => {
    if (!t || o || o || S.length === 0) {
      g.current = false;
      return;
    }
    const P = S[S.length - 1]?.index ?? 0;
    const C = e.length - 5;

    if (P >= C && !g.current) {
      g.current = true;
      r();
    }
  }, [S, e.length, t, o, r]);

  W(() => {
    if (!o) {
      g.current = false;
    }
  }, [o]);

  const _ = E(
    (P, C) => {
      k(P, C);
    },
    [k]
  );
  return n("div", {
    ref: b,
    className: ot.virtualContainer,
    "data-comments-scroll": true,
    children: [
      n("div", {
        className: ot.virtualContent,
        style: { height: `${R}px` },
        children: S.map((P) => {
          const C = e[P.index];
          return C
            ? n(
                "div",
                {
                  ref: (F) => _(F, P.index),
                  className: ot.virtualItem,
                  style: {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    transform: `translateY(${P.start}px)`,
                  },
                  children: n(ji, {
                    comment: C,
                    onLike: () => u(C.id, C.reactions.myReaction),
                    onReaction: l,
                    onLikeReply: h,
                    onReactionReply: d,
                    replyingTo: i?.commentId === C.id ? i : null,
                    onStartReply: f,
                    onCancelReply: m,
                    onSubmitReply: N,
                    onVoiceSend: w,
                    onLoadReplies: v,
                    onReport: p,
                    onEdit: y,
                    onDelete: T,
                    isLoadingReplies: a === C.id,
                    flashingCommentId: s,
                    isWallOwner: c,
                  }),
                },
                P.key
              )
            : null;
        }),
      }),
      o &&
        n("div", {
          className: ot.loadMoreSpinner,
          children: n(vt, { size: "sm" }),
        }),
    ],
  });
}
const e1 = "DolcZKu1";
const t1 = "_1lo2seB9";
const n1 = "X0vaA15E";
const o1 = "JmzJKMT2";
const r1 = "p8fSWBtD";
const s1 = "TvBLZ6Xz";
const i1 = "ML3QZih-";
const a1 = "F8sHrsZA";
const c1 = "DicPhJTL";
const l1 = "L6r5VJk9";
const u1 = "lHdqCdp-";
const d1 = "rfKDp2t8";

const at = {
  editCommentModal: e1,
  form: t1,
  header: n1,
  title: o1,
  content: r1,
  editor: s1,
  actions: i1,
  mediaButtons: a1,
  mediaButton: c1,
  submitGroup: l1,
  charCount: u1,
  error: d1,
};

const ys = 2000; /* 2e3 */
function h1({ commentId: e, initialText: t, initialSpans: o = [] }) {
  const { closeModal: r } = tn();

  const i = ye((b) => b.editComment);

  const s = Ne((b) => b.profile);

  const a = kt();

  const {
    text: c,
    spans: u,
    editorRef: l,
    handleChange: h,
    insertText: d,
  } = yo(t, o);

  const [f, m] = I(false);
  const N = ys - c.length;
  const w = N < 0;
  const v = c !== t;
  const p = JSON.stringify(u) !== JSON.stringify(o);
  const y = v || p;

  const T = E(
    (b) => {
      d(b.emoji);
    },
    [d]
  );

  const g = E(async () => {
    if (!(!c.trim() || w || w || !y || w || !y || f)) {
      m(true);
      try {
        await i(e, c, u);
        r();
      } catch (b) {
        console.error("Failed to update comment:", b);
      } finally {
        m(false);
      }
    }
  }, [c, u, w, y, f, i, e, r]);

  return n(Ke, {
    frameless: true,
    onClose: r,
    className: at.editCommentModal,
    children: n("div", {
      className: at.form,
      children: [
        n("div", {
          className: at.header,
          children: n("span", {
            className: at.title,
            children: "Редактирование комментария",
          }),
        }),
        n("div", {
          className: at.content,
          children: [
            n(st, { src: s?.avatar ?? "", size: "sm" }),
            n(Co, {
              ref: l,
              value: c,
              spans: u,
              onChange: h,
              placeholder: "Комментарий...",
              maxLength: ys,
              autoFocus: true,
              className: at.editor,
              minHeight: 40,
              maxHeight: 300,
              disableFormatting: true,
            }),
          ],
        }),
        n("div", {
          className: at.actions,
          children: [
            n("div", {
              className: at.mediaButtons,
              children:
                !a &&
                n(yr, { onEmojiSelect: T, buttonClassName: at.mediaButton }),
            }),
            n("div", {
              className: at.submitGroup,
              children: [
                w &&
                  n("span", {
                    className: `${at.charCount} ${at.error}`,
                    children: N,
                  }),
                n(Oe, {
                  size: "md",
                  variant: "ghost",
                  onClick: () => r(),
                  children: "Отмена",
                }),
                n(Oe, {
                  size: "md",
                  disabled: !c.trim() || w || w || !y || w || !y || f,
                  onClick: g,
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
function f1({
  comments: e,
  isLoading: t,
  isLoadingMore: o,
  hasMore: r,
  sort: i,
  onSortChange: s,
  onLikeComment: a,
  onReactionComment: c,
  onAddComment: u,
  onVoiceSend: l,
  onLoadMore: h,
  isWallOwner: d = false,
  variant: f = "modal",
  hideInput: m = false,
}) {
  console.log("[Comments] RENDER", {
    commentsCount: e.length,
    isLoading: t,
    isLoadingMore: o,
    hasMore: r,
    sort: i,
  });
  const w = kt() && f === "modal";
  const [v, p] = I(null);
  const [y, T] = I(null);
  const [g, b] = I(null);
  const [S, R] = I(null);
  const k = x(null);
  const { openModal: _ } = tn();

  const P = ye((D) => D.highlightedCommentId);

  const C = ye((D) => D.clearHighlightedComment);

  const F = ye((D) => D.loadReplies);

  const O = ye((D) => D.deleteComment);

  const K = ye((D) => D.toggleCommentReaction);

  W(() => {
    if (!r || o) {
      return;
    }

    const D = new IntersectionObserver(
      (V) => {
        if (V[0].isIntersecting) {
          h();
        }
      },
      { rootMargin: "200px" }
    );

    const k_current = k.current;

    if (k_current) {
      D.observe(k_current);
    }

    return () => {
      if (k_current) {
        D.unobserve(k_current);
      }
    };
  }, [r, o, h]);

  W(() => {
    if (!P) {
      return;
    }
    const D =
      document.querySelector("[data-comments-scroll]") ||
      document.querySelector("[data-comments-modal]");
    if (D) {
      D.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const V = document.querySelector("[data-comments-section]");

      if (V) {
        V.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
    const $ = window.setTimeout(() => {
      T(P);
      C();
      const V = window.setTimeout(() => {
        T(null);
      }, 600);
      return () => clearTimeout(V);
    }, 300);
    return () => clearTimeout($);
  }, [P, C]);

  const ae = async (D, $, V) => {
    if (v) {
      await u(
        D,
        $,
        v.commentId,
        v.userId,
        { id: v.userId, username: v.username, displayName: v.displayName },
        V
      );

      p(null);
    }
  };

  const X = (D, $, V, U, oe) => {
    p({ commentId: D, username: $, displayName: V, userId: U, replyId: oe });
  };

  const Z = () => {
    p(null);
  };

  const ce = E(
    (D) => {
      for (const $ of e) {
        const V = $.previewReplies?.find((U) => U.id === D);
        if (V) {
          K(D, (V.reactions.myReaction === "love", "love"));
          return;
        }
      }
    },
    [e, K]
  );

  const J = E(
    (D, $) => {
      K(D, $);
    },
    [K]
  );

  const te = E(
    async (D) => {
      b(D);
      try {
        await F(D);
      } finally {
        b(null);
      }
    },
    [F]
  );

  const B = E((D) => {
    R(D);
  }, []);

  const z = E(
    (D) => {
      let $ = "";
      let V = [];
      for (const U of e) {
        if (U.id === D) {
          $ = U.text;
          V = U.spans ?? [];
          break;
        }
        const oe = U.previewReplies?.find((ee) => ee.id === D);
        if (oe) {
          $ = oe.text;
          V = oe.spans ?? [];
          break;
        }
      }
      _(n(h1, { commentId: D, initialText: $, initialSpans: V }));
    },
    [e, _]
  );

  const Q = E(
    (D) => {
      if (confirm("Вы уверены, что хотите удалить этот комментарий?")) {
        O(D);
      }
    },
    [O]
  );

  return n("div", {
    className: ot.comments,
    children: [
      n("div", {
        className: ot.sortWrapper,
        children: n("select", {
          value: i,
          onChange: (D) => s(D.target.value),
          className: ot.sortSelect,
          children: [
            n("option", { value: "new", children: "Новые" }),
            n("option", { value: "old", children: "Старые" }),
            n("option", { value: "popular", children: "Популярные" }),
          ],
        }),
      }),
      t
        ? n("div", { className: ot.loading, children: n(vt, {}) })
        : e.length === 0
        ? n("div", { className: ot.empty, children: "Нет комментариев" })
        : w
        ? n(Qv, {
            comments: e,
            hasMore: r,
            isLoadingMore: o,
            onLoadMore: h,
            replyingTo: v,
            flashingCommentId: y,
            loadingRepliesId: g,
            isWallOwner: d,
            onLikeComment: a,
            onReactionComment: c,
            onLikeReply: ce,
            onReactionReply: J,
            onStartReply: X,
            onCancelReply: Z,
            onSubmitReply: ae,
            onVoiceSend: l,
            onLoadReplies: te,
            onReport: B,
            onEdit: z,
            onDelete: Q,
          })
        : n("div", {
            className: ot.commentsList,
            children: [
              e.map((D) =>
                n(
                  "div",
                  {
                    className: ot.commentItem,
                    children: n(ji, {
                      comment: D,
                      onLike: () => a(D.id, D.reactions.myReaction),
                      onReaction: c,
                      onLikeReply: ce,
                      onReactionReply: J,
                      replyingTo: v?.commentId === D.id ? v : null,
                      onStartReply: X,
                      onCancelReply: Z,
                      onSubmitReply: ae,
                      onVoiceSend: l,
                      onLoadReplies: te,
                      onReport: B,
                      onEdit: z,
                      onDelete: Q,
                      isLoadingReplies: g === D.id,
                      flashingCommentId: y,
                      isWallOwner: d,
                    }),
                  },
                  D.id
                )
              ),
              r &&
                n("div", {
                  ref: k,
                  className: ot.loadMoreSentinel,
                  children: o && n(vt, { size: "sm" }),
                }),
            ],
          }),
      !m &&
        n("div", {
          className: ot.inputWrapper,
          children: n(Vi, {
            onSubmit: (D, $, V) => u(D, $, undefined, undefined, undefined, V),
            onVoiceSend: l,
          }),
        }),
      S &&
        n(Ui, { targetType: "comment", targetId: S, onClose: () => R(null) }),
    ],
  });
}
function m1(e) {
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
function po(e) {
  return e
    .filter(
      (t) =>
        t.type === "image" ||
        t.type === "video" ||
        (t.type === "media" && "media" in t)
    )
    .map((t) => (t.type === "media" && "media" in t ? t.media : t));
}
function p1(e) {
  return e.find((t) => t.type === "poll");
}
const g1 = 300;
const v1 = 500;

const w1 = qs(
  ({
    post: t,
    variant: o = "feed",
    className: r,
    isOnOwnProfile: i = false,
    isPinned: s = false,
    isHighlighted: a = false,
    onEdit: c,
    onPin: u,
    onDelete: l,
  }) => {
    const h = o === "feed";
    const d = kt();
    const { openModal: f, closeModal: m } = tn();

    const N = ye((H) => H.deletePost);

    const w = ye((H) => H.updatePostReaction);

    const v = ye((H) => H.updatePollVote);

    const p = ye((H) => H.updatePollData);

    const y = ye((H) => H.setCurrentPost);

    const T = ye((H) => H.posts.find((ie) => ie.id === t.id));

    const g = Ne((H) => H.profile);

    const b = Mt((H) =>
      h && g?.id !== t.author.id ? H.statuses[t.author.id] : undefined
    );

    const S = E(async () => {
      const H = t.author.id;
      Mt.getState().setStatus(H, true);
      try {
        await Ln.followUser(H);
      } catch {
        Mt.getState().setStatus(H, false);
      }
    }, [t.author.id]);

    const R = E(async () => {
      const H = t.author.id;
      Mt.getState().setStatus(H, false);
      try {
        await Ln.unfollowUser(H);
      } catch {
        Mt.getState().setStatus(H, true);
      }
    }, [t.author.id]);

    const k = E(() => {
      if (b !== undefined) {
        if (b) {
          f(
            n(np, {
              displayName: t.author.displayName,
              onConfirm: R,
              onClose: m,
            })
          );
        } else {
          S();
        }
      }
    }, [b, t.author.displayName, S, R, f, m]);

    const _ = x(null);
    const P = x(null);
    const C = x(null);
    const [F, O] = I(g1);
    const [K, ae] = I(0);
    const X = K > F;
    W(
      () => () => {
        if (C.current) {
          cancelAnimationFrame(C.current);
          C.current = null;
        }
      },
      []
    );

    const Z = E(
      (H) => {
        if (H && h) {
          C.current && cancelAnimationFrame(C.current);

          C.current = requestAnimationFrame(() => {
            C.current = null;
            ae(H.scrollHeight);
          });
        }

        if (P) {
          P.current = H;
        }
      },
      [h]
    );

    const ce = E((H) => {
      H.stopPropagation();

      O((ie) => ie + v1);
    }, []);

    Sc(t.id, _);
    const J = g?.id === t.author.id;
    const te = t.reactions.myReaction !== null;
    const B = t.reactions.total;

    const z = E(async () => {
      const H = t.reactions.myReaction !== null;
      const ie = H ? -1 : 1;
      w(t.id, H || "love", ie);
      try {
        if (H) {
          await qe.unlikePost(t.id);
        } else {
          await qe.likePost(t.id);
        }
      } catch (be) {
        w(t.id, H ? "love" : null, -ie);
        console.error("Failed to toggle like:", be);
      }
    }, [t.id, t.reactions.myReaction, w]);

    const Q = x(null);
    const D = x(0);

    const $ = E((H) => {
      Q.current = H.target;
    }, []);

    const V = E(() => {
      if (!te) {
        z();
      }
    }, [te, z]);

    const U = E(() => {
      y(T ?? t);
      const ie = t.author.username ?? t.author.id;
      $(`/@${ie}/post/${t.id}`);
    }, [t, T, y]);

    const oe = E(
      (H) => {
        const H_target = H.target;
        if (
          H_target.closest("button") ||
          H_target.closest("a") ||
          H_target.closest("a") ||
          H_target.closest("video") ||
          H_target.closest("a") ||
          H_target.closest("video") ||
          H_target.closest("img")
        ) {
          return;
        }
        if (d) {
          const Qe = Date.now();
          if (Qe - D.current < 300) {
            D.current = 0;
            V();
            return;
          }
          D.current = Qe;
          return;
        }
        if (Q.current !== H_target) {
          Q.current = null;
          return;
        }
        Q.current = null;
        const be = window.getSelection();

        if (!be || be.toString().length <= 0) {
          U();
        }
      },
      [d, V, U]
    );

    const ee = E(
      (H) => {
        const ie = t.author.username ?? t.author.id;
        const be = `${window.location.origin}/@${ie}/post/${H}`;
        navigator.clipboard.writeText(be);
        Ue.success("Ссылка скопирована");
      },
      [t.author.username, t.author.id]
    );

    const M = E(
      (H) => {
        f(n(Ui, { targetType: "post", targetId: H, onClose: m }));
      },
      [f, m]
    );

    const ne = E(
      (H) => {
        f(
          n(jm, {
            postId: t.id,
            initialText: t.text ?? "",
            initialSpans: t.spans ?? [],
          })
        );
      },
      [f, t.id, t.text, t.spans]
    );

    const re = E(
      async (H) => {
        if (confirm("Вы уверены, что хотите удалить этот пост?")) {
          try {
            await N(H);
            l?.(H);
          } catch (ie) {
            console.error("Failed to delete post:", ie);
          }
        }
      },
      [N, l]
    );

    const de = E(() => {
      if (d) {
        f(n(Km, { postId: t.id, onClose: m }));
      } else {
        const H = t.author.username ?? t.author.id;
        $(`/@${H}/post/${t.id}`);
      }
    }, [t.author.username, t.author.id, t.id, d, f, m]);

    const ue = E(() => {
      if (!J) {
        f(n(Mm, { post: t, onClose: m }));
      }
    }, [f, m, t, J]);

    const De = Re(() => m1(t.author), [t.author]);

    const je = Re(() => po(t.attachments), [t.attachments]);

    const Me = Re(() => p1(t.attachments), [t.attachments]);

    const it = E(
      async (H) => {
        const ie = Me?.myVote ?? null;
        v(t.id, H, ie);
        try {
          const be = await qe.votePoll(t.id, [H]);
          if (be) {
            p(t.id, be);
            return be;
          }
        } catch (be) {
          console.error("[Poll] Failed to vote:", be);

          if (ie) {
            v(t.id, ie, H);
          }
        }
        return null;
      },
      [t.id, Me?.myVote, v, p]
    );

    const Ee = E(
      async (H) => {
        try {
          const ie = await qe.votePoll(t.id, H);
          if (ie) {
            p(t.id, ie);
            return ie;
          }
        } catch (ie) {
          console.error("[Poll] Failed to vote multiple:", ie);
        }
        return null;
      },
      [t.id, p]
    );

    const le = n("div", {
      className: `${We.postInner} ${h ? We.isFeed : ""} ${r || ""}`,
      children: [
        h &&
          n("a", {
            href: `/@${t.author.username ?? t.author.id}`,
            children: n(st, {
              src: t.author.avatar ?? "",
              alt: t.author.displayName,
              size: "sm",
              followBadge: b,
              onFollowBadgeClick: k,
            }),
          }),
        n("div", {
          className: We.postContent,
          children: [
            n(t0, {
              author: De,
              createdAt: t.createdAt,
              editedAt: t.editedAt,
              postId: t.id,
              showAvatar: !h,
              isOnOwnProfile: i,
              isPinned: s,
              onReport: M,
              onEdit: c ?? ne,
              onDelete: re,
              onPin: u,
              onCopyLink: ee,
            }),
            n("div", {
              className: We.postBody,
              children: [
                t.text &&
                  n("div", {
                    className: We.textWrapper,
                    children: [
                      n("div", {
                        ref: Z,
                        className: `${We.text} ${X ? We.collapsed : ""}`,
                        style: h && X ? { maxHeight: `${F}px` } : undefined,
                        children: n(Fi, {
                          text: t.text,
                          spans: t.spans ?? [],
                        }),
                      }),
                      h &&
                        X &&
                        n("button", {
                          type: "button",
                          className: We.expandButton,
                          onClick: ce,
                          children: "Читать далее",
                        }),
                    ],
                  }),
                je.length > 0 && n(_r, { media: je, isFeed: h }),
                Me &&
                  n(Dp, {
                    title: Me.question,
                    options: Me.options.map((H) => ({
                      id: H.id,
                      text: H.text,
                      votes: H.votes ?? 0,
                    })),
                    totalVotes: Me.totalVotes ?? 0,
                    voted:
                      (Me.myVotes ?? []).length > 0 ||
                      (Me.myVote !== undefined && Me.myVote !== null),
                    selectedOptionId: Me.myVote,
                    selectedOptionIds: Me.myVotes ?? [],
                    multipleChoice: Me.multipleChoice ?? false,
                    onVote: it,
                    onVoteMultiple: Ee,
                    disabled: Me.id.startsWith("temp-"),
                  }),
                t.originalPost && n(ug, { originalPost: t.originalPost }),
                n(z0, {
                  liked: te,
                  reposted: false,
                  likesCount: B,
                  repostsCount: t.stats.reposts,
                  commentsCount: t.stats.comments,
                  viewsCount: t.stats.views,
                  dominantEmoji: t.dominantEmoji,
                  onLike: z,
                  onRepost: ue,
                  onComment: de,
                  disableRepost: J,
                }),
              ],
            }),
          ],
        }),
      ],
    });

    return h
      ? n("article", {
          ref: _,
          className: `${We.post} ${a ? "flash-highlight" : ""}`,
          onMouseDown: $,
          onClick: oe,
          children: le,
        })
      : n("div", { ref: _, children: le });
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

const y1 = "g6-1VZON";
const _1 = "lynW5Wa4";
const C1 = "T0fnHo-a";
const N1 = "rjatUzSP";
const b1 = "QJXel6jH";
const T1 = "M0L3TUQK";
const k1 = "uaNtVNYe";
const E1 = "h2cCDI2R";
const R1 = "I-2aZIQb";
const S1 = "OiCpxOxo";
const I1 = "_68znS2mA";

const lt = {
  container: y1,
  clearAllButton: _1,
  toastList: C1,
  toast: N1,
  toastLeft: b1,
  toastData: T1,
  title: k1,
  message: E1,
  dragging: R1,
  closeButton: S1,
  belowTabs: I1,
};

const x1 = "InmPF5d0";
const P1 = "-yE9w2BE";
const A1 = "-gCyC6KA";
const M1 = "YQDdKE40";
const eo = { badge: x1, red: P1, green: A1, blue: M1 };
function L1({ type: e }) {
  const t =
    e === "like"
      ? eo.red
      : ["wall_post", "reply", "repost"].includes(e)
      ? eo.green
      : eo.blue;
  return n("div", {
    className: `${eo.badge} ${t}`,
    children: [
      e === "follow" && n(pr, { size: 12 }),
      ["wall_post", "reply"].includes(e) && n(fr, { size: 12, filled: true }),
      e === "like" && n(_o, { size: 12, filled: true }),
      e === "repost" && n(ho, { size: 12 }),
    ],
  });
}
const $1 = fn(null);
function O1({ children: e }) {
  const [t, o] = I([]);

  const r = E((c) => {
    const u = `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
    o((l) => [
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

  const i = E((c) => {
    o((u) => u.filter((l) => l.id !== c));
  }, []);

  const s = E(() => {
    o([]);
  }, []);

  const a = gc();

  W(() => {
    if (a) {
      const c = U1(a.type);

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

      gn.setState({ lastSseToast: null });
    }
  }, [a, r]);

  return n($1.Provider, {
    value: { toasts: t, addToast: r, removeToast: i, clearAll: s },
    children: [e, n(D1, { toasts: t, onRemove: i, onClearAll: s })],
  });
}
function D1({ toasts: e, onRemove: t, onClearAll: o }) {
  const [r, i] = I(false);

  const s =
    typeof window !== "undefined" &&
    (window.location.pathname === "/" || window.location.pathname === "");

  if (e.length === 0) {
    return null;
  }
  const a = e.slice(-4);

  const c = () => {
    i(true);

    setTimeout(() => {
      o();
      i(false);
    }, 300);
  };

  return n("div", {
    className: `${lt.container} ${s ? lt.belowTabs : ""}`,
    children: [
      n("div", {
        className: `${lt.toastList} ${r ? lt.clearing : ""}`,
        children: a.map((u, l) =>
          n(
            H1,
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
        n(Oe, {
          className: lt.clearAllButton,
          onClick: c,
          children: "Скрыть все",
        }),
    ],
  });
}
const B1 = 80;
function U1(e) {
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
function F1(e) {
  const {
    apiType: t,
    entityId: o,
    parentEntityId: r,
    actorUsername: i,
    clickUrl: s,
  } = e;

  const a = ["post_reaction", "post_repost", "post_mention", "wall_post"];

  const c = [
    "post_comment",
    "comment_reaction",
    "comment_reply",
    "comment_mention",
  ];

  if (t && o && i) {
    if (a.includes(t)) {
      return `/@${i}/post/${o}`;
    }
    if (c.includes(t)) {
      return r ? `/@${i}/post/${r}?comment=${o}` : `/@${i}/post/${o}`;
    }
  }
  return t && ["follow", "follow_request", "follow_accepted"].includes(t) && i
    ? `/@${i}`
    : s || "/notifications";
}
function H1({
  toast: e,
  onRemove: t,
  clearingDelay: o = 0,
  isClearing: r = false,
}) {
  const i = x(null);
  const [s, a] = I(0);
  const [c, u] = I(false);
  const [l, h] = I(false);
  const d = x(0);
  const f = x(false);

  const m = (b) => {
    d.current = b.clientX;
    f.current = false;
    u(true);
  };

  const N = E(
    (b) => {
      if (!c) {
        return;
      }
      const S = b.clientX - d.current;

      if (Math.abs(S) > 5) {
        f.current = true;
      }

      a(S);
    },
    [c]
  );

  const w = E(() => {
    if (c) {
      u(false);

      if (Math.abs(s) > B1) {
        h(true);
        a(s > 0 ? 400 : -400);

        setTimeout(() => t(e.id), 200);
      } else {
        a(0);

        if (!f.current) {
          const b = F1(e);

          if (b) {
            $(b);
            t(e.id);
          }
        }
      }
    }
  }, [c, s, t, e]);

  W(() => {
    if (c) {
      document.addEventListener("mousemove", N);
      document.addEventListener("mouseup", w);

      return () => {
        document.removeEventListener("mousemove", N);
        document.removeEventListener("mouseup", w);
      };
    }
  }, [c, N, w]);

  const v = (b) => {
    d.current = b.touches[0].clientX;
    u(true);
  };

  const p = (b) => {
    if (!c) {
      return;
    }
    const S = b.touches[0].clientX - d.current;
    a(S);
  };

  const y = () => {
    w();
  };

  const T = l || r ? 0 : Math.max(0, 1 - Math.abs(s) / 200);
  const g = r ? 400 : s;
  return n("div", {
    ref: i,
    className: `${lt.toast} ${c ? lt.dragging : ""}`,
    style: {
      transform: `translateX(${g}px)`,
      opacity: T,
      transition: c
        ? "none"
        : `transform 0.3s ease ${o}ms, opacity 0.3s ease ${o}ms`,
    },
    onMouseDown: m,
    onTouchStart: v,
    onTouchMove: p,
    onTouchEnd: y,
    children: [
      n("div", {
        className: lt.toastLeft,
        children: [
          n(st, {
            src: e.actorAvatar || "",
            badge: n(L1, { type: e.notificationType }),
          }),
          n("div", {
            className: lt.toastData,
            children: [
              e.actorName &&
                n("div", {
                  className: lt.title,
                  children: n(Wn, { name: e.actorName }),
                }),
              n("p", { className: lt.message, children: e.message }),
            ],
          }),
        ],
      }),
      n("button", {
        className: lt.closeButton,
        onClick: (b) => {
          b.stopPropagation();
          t(e.id);
        },
        onMouseDown: (b) => b.stopPropagation(),
        onTouchStart: (b) => b.stopPropagation(),
        children: n(Et, { size: 16 }),
      }),
    ],
  });
}
const W1 = "Ud6qvRRd";
const V1 = "kzTK4YgB";
const j1 = "a7Cxtsok";
const z1 = "D1RDF-pF";
const X1 = "wPhOb3DB";
const Y1 = "rrrryD13";
const G1 = "pO3FId5P";
const Z1 = "Y-gzFyZu";
const q1 = "Bnd7yPWS";
const K1 = "vVObi6FX";
const J1 = "erZ4kzKX";
const Q1 = "nyzroaD5";

const Jt = {
  container: W1,
  toast: V1,
  slideUp: j1,
  leaving: z1,
  fadeOut: X1,
  info: Y1,
  icon: G1,
  message: Z1,
  closeButton: q1,
  success: K1,
  warning: J1,
  error: Q1,
};

const ew = { success: Dc, error: Ac, warning: Uc, info: vi };
function tw({ id: e, type: t, message: o, onRemove: r }) {
  const [i, s] = I(false);
  const ew_t = ew[t];

  const c = E(() => {
    s(true);

    setTimeout(() => {
      r(e);
    }, 300);
  }, [e, r]);

  return n("div", {
    className: `${Jt.toast} ${Jt[t]} ${i ? Jt.leaving : ""}`,
    children: [
      n("span", { className: Jt.icon, children: n(ew_t, { size: 20 }) }),
      n("span", { className: Jt.message, children: o }),
      n("button", {
        className: Jt.closeButton,
        onClick: c,
        children: n(Et, { size: 14 }),
      }),
    ],
  });
}
function nw() {
  const e = un((o) => o.toasts);

  const t = un((o) => o.removeToast);

  return (
    e.length === 0 ||
    n("div", {
      className: Jt.container,
      children: e.map((o) =>
        n(tw, { id: o.id, type: o.type, message: o.message, onRemove: t }, o.id)
      ),
    })
  );
}
const ow = "bDtnMOtP";
const rw = "NCty1Mw6";
const sw = "DPhGAlZS";
const iw = "Ea-iW9dx";
const to = { tabs: ow, indicator: rw, button: sw, active: iw };
function aw({
  tabs: e,
  defaultTab: t = 0,
  activeIndex: o,
  onChange: r,
  className: i = "",
}) {
  const [s, a] = I(t);
  const c = o !== undefined ? o : s;
  const [u, l] = I({});
  const h = x([]);
  const d = x(null);

  const f = E(() => {
    const v = h.current[c];
    if (v) {
      const v_parentElement = v.parentElement;
      const y = v_parentElement
        ? parseFloat(getComputedStyle(v_parentElement).paddingLeft)
        : 0;
      l({
        width: v.offsetWidth,
        transform: `translateX(${v.offsetLeft - y}px)`,
      });
    }
  }, [c]);

  W(() => {
    f();
  }, [f]);

  W(() => {
    const d_current = d.current;
    if (!d_current) {
      return;
    }
    const p = new ResizeObserver(() => {
      f();
    });
    p.observe(d_current);

    return () => {
      p.disconnect();
    };
  }, [f]);

  const m = (v) => {
    if (o === undefined) {
      a(v);
    }

    r?.(v, e[v]);
  };

  const N = (v) => (typeof v == "string" ? v : v.label);

  const w = (v, p) => (typeof v == "string" ? `${p}` : v.id);

  return n("div", {
    ref: d,
    className: `${to.tabs} ${i}`,
    children: [
      n("div", { className: to.indicator, style: u }),
      e.map((v, p) =>
        n(
          "button",
          {
            ref: (y) => {
              h.current[p] = y;
            },
            onClick: () => m(p),
            className: `${to.button} ${c === p ? to.active : ""}`,
            children: N(v),
          },
          w(v, p)
        )
      ),
    ],
  });
}
const cw = "NVOOxjgX";
const lw = "Y1pJGa1C";
const uw = "Y-AJ8Bcl";
const dw = "UoWopgfe";
const hw = "_8Vne0lg2";
const fw = "_28Ha-lQH";
const mw = "vfJEvaRM";
const pw = "KTWTUpWU";
const gw = "iPq57X43";
const vw = "LgYwhGUE";

const Bt = {
  inputWrapper: cw,
  label: lw,
  hint: uw,
  input: dw,
  error: hw,
  small: fw,
  medium: mw,
  large: pw,
  default: "nPKZPuOS",
  outline: gw,
  errorText: vw,
};

function _s({
  value: e,
  onChange: t,
  label: o,
  hint: r,
  error: i,
  size: s = "medium",
  variant: a = "default",
  className: c,
  ...u
}) {
  const l = (h) => {
    t?.(h.currentTarget.value);
  };
  return n("div", {
    className: Bt.inputWrapper,
    children: [
      o &&
        n("label", {
          className: Bt.label,
          children: [o, r && n("span", { className: Bt.hint, children: r })],
        }),
      n("input", {
        className: `${Bt.input} ${Bt[s]} ${Bt[a]} ${i ? Bt.error : ""} ${
          c || ""
        }`,
        value: e,
        onInput: l,
        ...u,
      }),
      i && n("span", { className: Bt.errorText, children: i }),
    ],
  });
}
const ww = "yKLEGJjv";
const yw = "btqpFnmb";
const _w = "Mcw5oPSa";
const Cw = "I-BCvdb9";
const no = { content: ww, title: yw, subtitle: _w, actions: Cw };
function Nw({ expiresAt: e, onConfirm: t, onClose: o }) {
  const [r, i] = I(false);

  const s = new Date(e).toLocaleDateString("ru-RU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const a = async () => {
    if (!r) {
      i(true);
      try {
        await t();
        o();
      } catch {
        i(false);
      }
    }
  };

  return n(Ke, {
    onClose: o,
    showHeader: false,
    children: n("div", {
      className: no.content,
      children: [
        n("h2", { className: no.title, children: "Отключить автопродление?" }),
        n("p", {
          className: no.subtitle,
          children: [
            "Подписка будет действовать до ",
            s,
            ". После этой даты она просто не продлится автоматически. Вы сможете включить автопродление обратно в любой момент.",
          ],
        }),
        n("div", {
          className: no.actions,
          children: [
            n(Oe, {
              variant: "secondary",
              onClick: (c) => {
                c.stopPropagation();
                o();
              },
              children: "Оставить",
            }),
            n(Oe, {
              variant: "danger",
              onClick: (c) => {
                c.stopPropagation();
                a();
              },
              disabled: r,
              children: "Отключить автопродление",
            }),
          ],
        }),
      ],
    }),
  });
}
const bw = "HRvdFDjB";
const Tw = "oUBbcbTN";
const kw = "_2kNXD7Wp";
const Ew = "Rw-qHiyh";
const Rw = "Mf3brSiH";
const Nn = {
  content: bw,
  title: Tw,
  subtitle: kw,
  disclaimer: Ew,
  actions: Rw,
};
function Sw({ onConfirm: e, onClose: t }) {
  const [o, r] = I(false);

  const i = async () => {
    if (!o) {
      r(true);
      try {
        await e();
        t();
      } catch {
        r(false);
      }
    }
  };

  return n(Ke, {
    onClose: t,
    showHeader: false,
    children: n("div", {
      className: Nn.content,
      children: [
        n("h2", { className: Nn.title, children: "Включить автопродление?" }),
        n("p", {
          className: Nn.subtitle,
          children:
            "Подписка будет автоматически продлеваться каждый месяц. Средства будут списываться с привязанной карты.",
        }),
        n("p", {
          className: Nn.disclaimer,
          children: [
            "Нажимая «Включить», вы соглашаетесь с",
            " ",
            n("a", {
              href: "/subscription-terms",
              target: "_blank",
              rel: "noopener noreferrer",
              children: "условиями подписки",
            }),
            ",",
            " ",
            n("a", {
              href: "/privacy",
              target: "_blank",
              rel: "noopener noreferrer",
              children: "политикой конфиденциальности",
            }),
            " и",
            " ",
            n("a", {
              href: "/terms",
              target: "_blank",
              rel: "noopener noreferrer",
              children: "условиями использования",
            }),
            ".",
          ],
        }),
        n("div", {
          className: Nn.actions,
          children: [
            n(Oe, {
              variant: "secondary",
              onClick: (s) => {
                s.stopPropagation();
                t();
              },
              children: "Отмена",
            }),
            n(Oe, {
              variant: "primary",
              onClick: (s) => {
                s.stopPropagation();
                i();
              },
              disabled: o,
              children: "Включить",
            }),
          ],
        }),
      ],
    }),
  });
}
const Iw = "auLTZ1kb";
const xw = "ew-0JcAX";
const Pw = "PUBzv9z1";
const Aw = "YTQ-O-Jq";
const oo = { content: Iw, title: xw, subtitle: Pw, actions: Aw };
function Mw({ onClose: e }) {
  const t = async () => {
    await Ne.getState().deleteAccount();
    e();
  };
  return n(Ke, {
    onClose: e,
    showHeader: false,
    children: n("div", {
      className: oo.content,
      children: [
        n("h2", { className: oo.title, children: "Удалить аккаунт?" }),
        n("p", {
          className: oo.subtitle,
          children:
            "Вы действительно хотите удалить аккаунт? У вас будет 30 дней на восстановление аккаунта, если вы передумаете.",
        }),
        n("div", {
          className: oo.actions,
          children: [
            n(Oe, {
              variant: "secondary",
              onClick: (o) => {
                o.stopPropagation();
                e();
              },
              children: "Отмена",
            }),
            n(Oe, {
              variant: "danger",
              onClick: (o) => {
                o.stopPropagation();
                t();
              },
              children: "Удалить аккаунт",
            }),
          ],
        }),
      ],
    }),
  });
}
const Lw = "pLfPrgJ5";
const $w = "mieIfajF";
const Ow = "BbGOi3lO";
const Dw = "MbkPeeiM";
const Bw = "qZD40Z6k";
const Uw = "hQr2usrz";
const Fw = "pf7q9vs0";
const Hw = "V5xmKxYo";
const Ww = "rvWQR6Xa";
const Vw = "_7yzPm4JT";
const jw = "MMIk7qf0";
const zw = "KPGEssbG";
const Xw = "iYFBq1pq";
const Yw = "Q7pQ-w1E";
const Gw = "MKmLd4RT";
const Zw = "t65j2CUn";
const qw = "smTw77K0";
const Kw = "XvRWODkp";
const Jw = "HEGEWJQQ";
const Qw = "_6-NUgiaG";
const ey = "_2qKSMSK0";
const ty = "Vd3Omle7";
const ny = "_9lJIfmJW";
const oy = "h9xdn3cX";
const ry = "iYLHTDhv";
const sy = "aNx8mglN";
const iy = "yZwuPX7N";
const ay = "doLL9-3u";
const cy = "rS40gGQ1";
const ly = "rO7FJKjS";
const uy = "sKTJO-8u";
const dy = "O34mZMP-";
const hy = "qFEgm3nA";
const fy = "_8QZBocZJ";
const my = "CS8kW48F";
const py = "Xbe8XAiR";
const gy = "PoMEkcnH";
const vy = "i-crt3Uo";
const wy = "_9Si0cK4K";
const yy = "FkHpXk4J";
const _y = "_9Mmd-Oyx";
const Cy = "_2T7P171x";
const Ny = "SsHbiTj4";
const by = "_4RLslTa2";
const Ty = "MErHFAft";
const ky = "zCq-iLoM";
const Ey = "L3ey0Xp8";
const Ry = "Dis44184";
const Sy = "_0JZ-djug";
const Iy = "_3wpSaahs";
const xy = "J5--smNi";

const A = {
  modalContainer: Lw,
  settingsModal: $w,
  sidebar: Ow,
  sidebarTitle: Dw,
  navItem: Bw,
  active: Uw,
  contentWrapper: Fw,
  content: Hw,
  actionBar: Ww,
  confirmOverlay: Vw,
  confirmDialog: jw,
  confirmText: zw,
  confirmActions: Xw,
  contentTitle: Yw,
  subscriptionCancel: Gw,
  subscriptionRenew: Zw,
  paymentMethod: qw,
  paymentMethodActions: Kw,
  paymentMethodBtn: Jw,
  paymentMethodBtnDanger: Qw,
  section: ey,
  sectionTitle: ty,
  settingItem: ny,
  clickable: oy,
  column: ry,
  settingInfo: sy,
  settingIcon: iy,
  blue: ay,
  red: cy,
  purple: ly,
  settingText: uy,
  settingTitle: dy,
  settingDescription: hy,
  settingControl: fy,
  avatarDisplay: my,
  pinGrid: py,
  pinItem: gy,
  pinActive: vy,
  pinImage: wy,
  pinName: yy,
  bioTextarea: _y,
  fieldError: Cy,
  saveError: Ny,
  emptyBlocklist: by,
  blockedUsersList: Ty,
  blockedUserItem: ky,
  blockedUserInfo: Ey,
  blockedUserName: Ry,
  blockedUserUsername: Sy,
  deleteAccountButton: Iy,
  logoutButton: xy,
};

const d_ = Un(({ onDirtyChange: t, onSavingChange: o, onClose: r }, i) => {
  const s = Ne((M) => M.profile);

  const a = Ne((M) => M.logout);

  const { openModal: c, closeModal: u } = tn();
  const l = kt();
  const [h] = Fn();
  const d = h?.url || window.location.pathname;
  const [f, m] = I(false);
  const [N, w] = I(false);
  const [v, p] = I(false);
  const [y, T] = I([]);
  const [g, b] = I(true);
  const [S, R] = I(false);
  const [k, _] = I(false);
  const [P, C] = I({});
  const [F, O] = I(null);
  const [K, ae] = I(null);
  const [X, Z] = I({ name: "", username: "", bio: "", avatar: "😀" });
  const [ce, J] = I([]);
  const [te, B] = I(null);
  const z = x(null);
  const [Q, D] = I(true);

  W(() => {
    if (s) {
      const M = {
        name: s.displayName,
        username: s.username || "",
        bio: s.bio || "",
        avatar: s.avatar,
      };
      Z(M);
      ae(M);
      b(false);
      const ne = s.pin ?? null;
      B(ne);
      z.current = ne;
    }
  }, [s]);

  W(() => {
    bt.getMyPins()
      .then((M) => {
        J(M.pins);

        if (M.activePin && !z.current) {
          const ne = M.pins.find((re) => re.slug === M.activePin);

          if (ne) {
            B(ne);
            z.current = ne;
          }
        }
      })
      .catch(() => J([]))
      .finally(() => D(false));
  }, []);

  W(() => {
    if (s?.subscription?.isActive) {
      mt.getMethods()
        .then(T)
        .catch(() => T([]));
    }
  }, [s?.subscription?.isActive]);

  W(() => {
    t(k);
  }, [k]);

  W(() => {
    o(S);
  }, [S]);

  const $ = E(
    (M, ne) => {
      if (!K) {
        return false;
      }

      const re = Object.keys(M).some((ue) => M[ue] !== K[ue]);

      const de = (ne?.slug ?? null) !== (z.current?.slug ?? null);
      return re || de;
    },
    [K]
  );

  const V = (M, ne) => {
    if (P[M]) {
      C((re) => {
        const de = { ...re };
        delete de[M];
        return de;
      });
    }

    O(null);

    Z((re) => {
      const de = { ...re, [M]: ne };
      _($(de, te));
      return de;
    });
  };

  const U = E(
    (M) => {
      const ne = te?.slug === M.slug || M;
      B(ne);
      _($(X, ne));
    },
    [te, X, $]
  );

  const oe = async () => {
    if (!k || S) {
      return;
    }
    R(true);
    C({});
    O(null);
    const M = K?.username;
    const X_username = X.username;
    try {
      if (K && Object.keys(X).some((De) => X[De] !== K[De])) {
        await bt.updateProfile({
          displayName: X.name,
          username: X.username || undefined,
          bio: X.bio || null,
        });
      }

      if ((te?.slug ?? null) !== (z.current?.slug ?? null)) {
        if (te) {
          await bt.setActivePin(te.slug);
        } else {
          await bt.removeActivePin();
        }
      }

      ae({ ...X });
      z.current = te;
      _(false);
      const ue = Ne.getState().profile;

      if (ue) {
        Ne.getState().setProfile({
          ...ue,
          displayName: X.name,
          username: X.username,
          bio: X.bio || null,
          pin: te,
        });
      }

      if (
        X_username &&
        X_username !== M &&
        (d === `/@${M}` || d === `/@${s?.id}`)
      ) {
        $(`/@${X_username}`);
      }
    } catch (re) {
      console.error("Failed to save profile:", re);

      if (He(re)) {
        if (re.errors) {
          const de = {};
          for (const [ue, De] of Object.entries(re.errors)) {
            de[ue] = De[0] || "Ошибка валидации";
          }
          C(de);
        } else {
          O(re.message || "Не удалось сохранить изменения");
        }
      } else {
        O("Не удалось сохранить изменения");
      }
    } finally {
      R(false);
    }
  };

  const ee = () => {
    if (K) {
      Z({ ...K });
      B(z.current);
      _(false);
    }
  };

  pn(i, () => ({
    save: oe,
    discard: ee,
  }));

  return g
    ? n(Se, {
        children: [
          n("h2", { className: A.contentTitle, children: "Аккаунт" }),
          n(vt, {}),
        ],
      })
    : n(Se, {
        children: [
          n("h2", { className: A.contentTitle, children: "Аккаунт" }),
          n("div", {
            className: A.section,
            children: [
              s?.subscription?.isActive
                ? n("div", {
                    className: A.settingItem,
                    children: [
                      n("div", {
                        className: A.settingInfo,
                        children: n("div", {
                          className: A.settingText,
                          children: [
                            n("span", {
                              className: A.settingTitle,
                              children: "Подписка ИТД НУКСТА",
                            }),
                            n("span", {
                              className: A.settingDescription,
                              children: [
                                s.subscription.expiresAt
                                  ? (() => {
                                      const M = new Date(
                                        s.subscription.expiresAt
                                      );

                                      const ne = new Date();

                                      const re = Math.max(
                                        0,
                                        Math.ceil(
                                          (M.getTime() - ne.getTime()) /
                                            (1000 /* 1e3 */ * 60 * 60 * 24)
                                        )
                                      );

                                      return `до ${M.toLocaleDateString(
                                        "ru-RU",
                                        {
                                          day: "numeric",
                                          month: "long",
                                          year: "numeric",
                                        }
                                      )} (${re} ${
                                        re === 1
                                          ? "день"
                                          : re < 5
                                          ? "дня"
                                          : "дней"
                                      })`;
                                    })()
                                  : "Активна",
                                s.subscription.autoRenewal === false &&
                                  " • автопродление отключено",
                              ],
                            }),
                          ],
                        }),
                      }),
                      y.length > 0
                        ? s.subscription.autoRenewal
                          ? n("button", {
                              type: "button",
                              className: A.subscriptionCancel,
                              onClick: () => m(true),
                              children: "Отключить автопродление",
                            })
                          : n("button", {
                              type: "button",
                              className: A.subscriptionRenew,
                              onClick: () => w(true),
                              children: "Включить автопродление",
                            })
                        : n("button", {
                            type: "button",
                            className: A.subscriptionRenew,
                            onClick: async () => {
                              try {
                                const M = await mt.bindCard();
                                if (M.error) {
                                  Ue.error(M.error);
                                  return;
                                }

                                if (M.confirmationUrl) {
                                  window.open(M.confirmationUrl, "_blank");
                                }
                              } catch (M) {
                                Ue.error(M?.message || "Ошибка");
                              }
                            },
                            children: "Включить автопродление",
                          }),
                    ],
                  })
                : null,
              s?.subscription?.isActive &&
                n("div", {
                  className: A.settingItem,
                  children: [
                    n("div", {
                      className: A.settingInfo,
                      children: n("div", {
                        className: A.settingText,
                        children: [
                          n("span", {
                            className: A.settingTitle,
                            children: "Методы оплаты",
                          }),
                          n("span", {
                            className: A.settingDescription,
                            children:
                              y.length === 0
                                ? "Нет привязанных карт"
                                : y.map((M) =>
                                    n(
                                      "div",
                                      {
                                        className: A.paymentMethod,
                                        children: [
                                          n("span", {
                                            children: [
                                              M.cardBrand || "Карта",
                                              " •••• ",
                                              M.cardLast4 || "****",
                                              M.isDefault && " — основная",
                                            ],
                                          }),
                                          n("span", {
                                            className: A.paymentMethodActions,
                                            children: [
                                              !M.isDefault &&
                                                n("button", {
                                                  type: "button",
                                                  className: A.paymentMethodBtn,
                                                  onClick: async () => {
                                                    await mt.setDefaultMethod(
                                                      M.id
                                                    );
                                                    const ne =
                                                      await mt.getMethods();
                                                    T(ne);
                                                  },
                                                  children: "Сделать основной",
                                                }),
                                              n("button", {
                                                type: "button",
                                                className:
                                                  A.paymentMethodBtnDanger,
                                                onClick: async () => {
                                                  const ne =
                                                    await mt.deleteMethod(M.id);

                                                  const re =
                                                    await mt.getMethods();

                                                  T(re);

                                                  if (
                                                    ne.autoRenewalDisabled &&
                                                    s
                                                  ) {
                                                    Ne.getState().setProfile({
                                                      ...s,
                                                      subscription: {
                                                        ...s.subscription,
                                                        autoRenewal: false,
                                                      },
                                                    });
                                                  }
                                                },
                                                children: "Удалить",
                                              }),
                                            ],
                                          }),
                                        ],
                                      },
                                      M.id
                                    )
                                  ),
                          }),
                        ],
                      }),
                    }),
                    n("button", {
                      type: "button",
                      className: A.paymentMethodBtn,
                      onClick: async () => {
                        try {
                          const M = await mt.bindCard();
                          if (M.error) {
                            Ue.error(M.error);
                            return;
                          }

                          if (M.confirmationUrl) {
                            window.open(M.confirmationUrl, "_blank");
                          }
                        } catch (M) {
                          Ue.error(M?.message || "Ошибка");
                        }
                      },
                      children: "Привязать карту",
                    }),
                  ],
                }),
              n("div", {
                className: A.settingItem,
                children: [
                  n("div", {
                    className: A.settingInfo,
                    children: n("div", {
                      className: A.settingText,
                      children: [
                        n("span", {
                          className: A.settingTitle,
                          children: "Эмоджи-клан",
                        }),
                        n("span", {
                          className: A.settingDescription,
                          children: "Выбран при регистрации. Изменить нельзя",
                        }),
                      ],
                    }),
                  }),
                  n("div", {
                    className: A.avatarDisplay,
                    children: X.avatar,
                  }),
                ],
              }),
              n("div", {
                className: A.settingItem,
                children: [
                  n("div", {
                    className: A.settingInfo,
                    children: n("div", {
                      className: A.settingText,
                      children: [
                        n("span", {
                          className: A.settingTitle,
                          children: "Имя",
                        }),
                        n("span", {
                          className: A.settingDescription,
                          children: "Ваше отображаемое имя",
                        }),
                      ],
                    }),
                  }),
                  n("div", {
                    className: A.settingControl,
                    children: [
                      n(_s, {
                        value: X.name,
                        onChange: (M) => V("name", M),
                      }),
                      P.displayName &&
                        n("span", {
                          className: A.fieldError,
                          children: P.displayName,
                        }),
                    ],
                  }),
                ],
              }),
              n("div", {
                className: A.settingItem,
                children: [
                  n("div", {
                    className: A.settingInfo,
                    children: n("div", {
                      className: A.settingText,
                      children: [
                        n("span", {
                          className: A.settingTitle,
                          children: "Username",
                        }),
                        n("span", {
                          className: A.settingDescription,
                          children:
                            "Ваш уникальный идентификатор (только латиница, цифры и _)",
                        }),
                      ],
                    }),
                  }),
                  n("div", {
                    className: A.settingControl,
                    children: [
                      n(_s, {
                        value: X.username,
                        onChange: (M) => V("username", M),
                      }),
                      P.username &&
                        n("span", {
                          className: A.fieldError,
                          children: P.username,
                        }),
                    ],
                  }),
                ],
              }),
              n("div", {
                className: `${A.settingItem} ${A.column}`,
                children: [
                  n("div", {
                    className: A.settingInfo,
                    children: n("div", {
                      className: A.settingText,
                      children: [
                        n("span", {
                          className: A.settingTitle,
                          children: "О себе",
                        }),
                        n("span", {
                          className: A.settingDescription,
                          children: "Расскажите немного о себе",
                        }),
                      ],
                    }),
                  }),
                  n("textarea", {
                    className: A.bioTextarea,
                    value: X.bio,
                    onChange: (M) => V("bio", M.target.value),
                    placeholder: "Напиши что-нибудь о себе...",
                    rows: 3,
                  }),
                  P.bio &&
                    n("span", { className: A.fieldError, children: P.bio }),
                ],
              }),
              !Q &&
                ce.length > 0 &&
                n("div", {
                  className: `${A.settingItem} ${A.column}`,
                  children: [
                    n("div", {
                      className: A.settingInfo,
                      children: n("div", {
                        className: A.settingText,
                        children: [
                          n("span", {
                            className: A.settingTitle,
                            children: "Пин",
                          }),
                          n("span", {
                            className: A.settingDescription,
                            children: "Отображается рядом с именем",
                          }),
                        ],
                      }),
                    }),
                    n("div", {
                      className: A.pinGrid,
                      children: ce.map((M) =>
                        n(
                          "button",
                          {
                            className: `${A.pinItem} ${
                              te?.slug === M.slug ? A.pinActive : ""
                            }`,
                            onClick: () => U(M),
                            disabled: S,
                            title: M.description || M.name,
                            type: "button",
                            children: [
                              n("img", {
                                src: `/assets/pins/${M.slug}.png`,
                                alt: M.name,
                                className: A.pinImage,
                              }),
                              n("span", {
                                className: A.pinName,
                                children: M.name,
                              }),
                            ],
                          },
                          M.slug
                        )
                      ),
                    }),
                  ],
                }),
              F && n("div", { className: A.saveError, children: F }),
            ],
          }),
          l &&
            n("div", {
              className: A.section,
              children: n("button", {
                type: "button",
                className: A.logoutButton,
                onClick: () => {
                  a();
                  r();
                },
                children: [
                  n(Ni, { size: 20 }),
                  n("span", { children: "Выйти из аккаунта" }),
                ],
              }),
            }),
          n("div", {
            className: A.section,
            children: n("button", {
              type: "button",
              className: A.deleteAccountButton,
              onClick: () => c(n(Mw, { onClose: u })),
              children: "Удалить аккаунт",
            }),
          }),
          f &&
            s?.subscription?.expiresAt &&
            n(Nw, {
              expiresAt: s.subscription.expiresAt,
              onConfirm: async () => {
                const M = await mt.setAutoRenewal(false);
                Ne.getState().setProfile({
                  ...s,
                  subscription: {
                    ...s.subscription,
                    autoRenewal: M.autoRenewal,
                  },
                });
              },
              onClose: () => m(false),
            }),
          N &&
            n(Sw, {
              onConfirm: async () => {
                const M = await mt.setAutoRenewal(true);
                Ne.getState().setProfile({
                  ...s,
                  subscription: {
                    ...s.subscription,
                    autoRenewal: M.autoRenewal,
                  },
                });
              },
              onClose: () => w(false),
            }),
          n(xi, {
            isOpen: v,
            onClose: () => {
              p(false);

              mt.getMethods()
                .then(T)
                .catch(() => {});
            },
          }),
        ],
      });
});

const Py = "VTYYWVhN";
const Ay = "xJNAnk3E";
const My = "Jb9vmr45";
const Ly = "otok2a-L";
const $y = "gRf2HMVj";
const Oy = "zNll7clI";
const Dy = "ayLHJkUj";

const Gt = {
  selectWrapper: Py,
  select: Ay,
  open: My,
  selectedValue: Ly,
  dropdown: $y,
  option: Oy,
  selected: Dy,
};

function Cs({ value: e, options: t, onChange: o, disabled: r }) {
  const [i, s] = I(false);
  const a = x(null);

  const c = t.find((l) => l.value === e);

  W(() => {
    const l = (h) => {
      if (a.current && !a.current.contains(h.target)) {
        s(false);
      }
    };

    if (i) {
      document.addEventListener("mousedown", l);
    }

    return () => {
      document.removeEventListener("mousedown", l);
    };
  }, [i]);
  const u = (l) => {
    o(l);
    s(false);
  };
  return n("div", {
    ref: a,
    className: Gt.selectWrapper,
    children: [
      n("button", {
        type: "button",
        className: `${Gt.select} ${i ? Gt.open : ""}`,
        onClick: (l) => {
          l.stopPropagation();

          if (!r) {
            s(!i);
          }
        },
        disabled: r,
        children: [
          n("span", { className: Gt.selectedValue, children: c?.label }),
          n(Fc, { size: 16 }),
        ],
      }),
      i &&
        n("div", {
          className: Gt.dropdown,
          children: t.map((l) =>
            n(
              "button",
              {
                type: "button",
                className: `${Gt.option} ${l.value === e ? Gt.selected : ""}`,
                onClick: () => u(l.value),
                children: l.label,
              },
              l.value
            )
          ),
        }),
    ],
  });
}

const Ns = [
  { value: "everyone", label: "Все" },
  { value: "followers", label: "Подписчики" },
  { value: "mutual", label: "Взаимные подписчики" },
  { value: "nobody", label: "Никто" },
];

const h_ = [
  { value: "light", label: "Светлая" },
  { value: "dark", label: "Тёмная" },
  { value: "system", label: "Системная" },
];

const By = "yIp1zbgr";
const Uy = "SGtMRtjC";
const bs = { toggle: By, active: Uy };
function Ut({ checked: e, onChange: t, disabled: o }) {
  const r = (i) => {
    i.stopPropagation();

    if (!o) {
      t(!e);
    }
  };
  return n("button", {
    type: "button",
    className: `${bs.toggle} ${e ? bs.active : ""}`,
    onClick: r,
    disabled: o,
    role: "switch",
    "aria-checked": e,
  });
}

const f_ = Un(({ onDirtyChange: t, onSavingChange: o }, r) => {
  const { settings: i, fetchSettings: s, updateSettings: a } = gn();

  const [c, u] = I({
    webEnabled: true,
    soundEnabled: true,
    follows: true,
    reactions: true,
    replies: true,
    mentions: true,
    wallPosts: true,
  });

  const [l, h] = I(null);
  const [d, f] = I(false);
  const [m, N] = I(false);
  const [w, v] = I(false);

  W(() => {
    if (!w && !i) {
      s();
    }
  }, [w]);

  W(() => {
    if (i && !w) {
      const g = {
        webEnabled: i.webEnabled,
        soundEnabled: i.soundEnabled,
        follows: i.preferences.follows,
        reactions: i.preferences.reactions,
        replies: i.preferences.replies,
        mentions: i.preferences.mentions,
        wallPosts: i.preferences.wallPosts,
      };
      u(g);
      h(g);
      f(false);
      v(true);
    }
  }, [i, w]);

  W(() => {
    t(d);
  }, [d]);

  W(() => {
    o(m);
  }, [m]);

  const p = (g, b) => {
    const S = { ...c, [g]: b };
    u(S);

    if (l) {
      const R = Object.keys(S).some((k) => S[k] !== l[k]);
      f(R);
    }
  };

  const y = async () => {
    if (!(!d || m)) {
      N(true);
      try {
        await a({
          webEnabled: c.webEnabled,
          soundEnabled: c.soundEnabled,
          preferences: {
            follows: c.follows,
            reactions: c.reactions,
            replies: c.replies,
            mentions: c.mentions,
            wallPosts: c.wallPosts,
          },
        });

        h({ ...c });
        f(false);
        Ue.success("Настройки уведомлений сохранены");
      } catch (g) {
        console.error("Failed to save notification settings:", g);
        Ue.error("Не удалось сохранить настройки");
      } finally {
        N(false);
      }
    }
  };

  const T = () => {
    if (l) {
      u({ ...l });
      f(false);
    }
  };

  pn(r, () => ({
    save: y,
    discard: T,
  }));

  return n(Se, {
    children: [
      n("h2", { className: A.contentTitle, children: "Уведомления" }),
      n("div", {
        className: A.section,
        children: [
          n("div", { className: A.sectionTitle, children: "Основные" }),
          n("div", {
            className: `${A.settingItem} ${A.clickable}`,
            onClick: () => p("webEnabled", !c.webEnabled),
            children: [
              n("div", {
                className: A.settingInfo,
                children: [
                  n("div", {
                    className: `${A.settingIcon} ${A.blue}`,
                    children: n(mr, { size: 20 }),
                  }),
                  n("div", {
                    className: A.settingText,
                    children: [
                      n("span", {
                        className: A.settingTitle,
                        children: "Уведомления",
                      }),
                      n("span", {
                        className: A.settingDescription,
                        children: "Включение или отключение всех уведомлений",
                      }),
                    ],
                  }),
                ],
              }),
              n(Ut, {
                checked: c.webEnabled,
                onChange: (g) => p("webEnabled", g),
              }),
            ],
          }),
          n("div", {
            className: `${A.settingItem} ${A.clickable}`,
            onClick: () => p("soundEnabled", !c.soundEnabled),
            children: [
              n("div", {
                className: A.settingInfo,
                children: [
                  n("div", {
                    className: `${A.settingIcon} ${A.blue}`,
                    children: n(Gc, { size: 20 }),
                  }),
                  n("div", {
                    className: A.settingText,
                    children: [
                      n("span", {
                        className: A.settingTitle,
                        children: "Уведомления со звуком",
                      }),
                      n("span", {
                        className: A.settingDescription,
                        children: "Воспроизводить звуки уведомлений",
                      }),
                    ],
                  }),
                ],
              }),
              n(Ut, {
                checked: c.soundEnabled,
                onChange: (g) => p("soundEnabled", g),
              }),
            ],
          }),
        ],
      }),
      n("div", {
        className: A.section,
        children: [
          n("div", { className: A.sectionTitle, children: "Пользователи" }),
          n("div", {
            className: `${A.settingItem} ${A.clickable}`,
            onClick: () => p("follows", !c.follows),
            children: [
              n("div", {
                className: A.settingInfo,
                children: [
                  n("div", {
                    className: `${A.settingIcon} ${A.blue}`,
                    children: n(Zc, { size: 20 }),
                  }),
                  n("div", {
                    className: A.settingText,
                    children: [
                      n("span", {
                        className: A.settingTitle,
                        children: "Подписки",
                      }),
                      n("span", {
                        className: A.settingDescription,
                        children: "Уведомления о подписках и запросах в друзья",
                      }),
                    ],
                  }),
                ],
              }),
              n(Ut, {
                checked: c.follows,
                onChange: (g) => p("follows", g),
              }),
            ],
          }),
          n("div", {
            className: `${A.settingItem} ${A.clickable}`,
            onClick: () => p("wallPosts", !c.wallPosts),
            children: [
              n("div", {
                className: A.settingInfo,
                children: [
                  n("div", {
                    className: `${A.settingIcon} ${A.blue}`,
                    children: n(es, { size: 20 }),
                  }),
                  n("div", {
                    className: A.settingText,
                    children: [
                      n("span", {
                        className: A.settingTitle,
                        children: "Посты на стене",
                      }),
                      n("span", {
                        className: A.settingDescription,
                        children: "Уведомления о новых постах на вашей стене",
                      }),
                    ],
                  }),
                ],
              }),
              n(Ut, {
                checked: c.wallPosts,
                onChange: (g) => p("wallPosts", g),
              }),
            ],
          }),
        ],
      }),
      n("div", {
        className: A.section,
        children: [
          n("div", { className: A.sectionTitle, children: "Посты" }),
          n("div", {
            className: `${A.settingItem} ${A.clickable}`,
            onClick: () => p("reactions", !c.reactions),
            children: [
              n("div", {
                className: A.settingInfo,
                children: [
                  n("div", {
                    className: `${A.settingIcon} ${A.red}`,
                    children: n(Xc, { size: 20 }),
                  }),
                  n("div", {
                    className: A.settingText,
                    children: [
                      n("span", {
                        className: A.settingTitle,
                        children: "Лайки и реакции",
                      }),
                      n("span", {
                        className: A.settingDescription,
                        children:
                          "Уведомления о реакциях на ваши посты и комментарии",
                      }),
                    ],
                  }),
                ],
              }),
              n(Ut, {
                checked: c.reactions,
                onChange: (g) => p("reactions", g),
              }),
            ],
          }),
          n("div", {
            className: `${A.settingItem} ${A.clickable}`,
            onClick: () => p("replies", !c.replies),
            children: [
              n("div", {
                className: A.settingInfo,
                children: [
                  n("div", {
                    className: `${A.settingIcon} ${A.blue}`,
                    children: n(es, { size: 20 }),
                  }),
                  n("div", {
                    className: A.settingText,
                    children: [
                      n("span", {
                        className: A.settingTitle,
                        children: "Комментарии и ответы",
                      }),
                      n("span", {
                        className: A.settingDescription,
                        children: "Уведомления о новых комментариях и ответах",
                      }),
                    ],
                  }),
                ],
              }),
              n(Ut, {
                checked: c.replies,
                onChange: (g) => p("replies", g),
              }),
            ],
          }),
          n("div", {
            className: `${A.settingItem} ${A.clickable}`,
            onClick: () => p("mentions", !c.mentions),
            children: [
              n("div", {
                className: A.settingInfo,
                children: [
                  n("div", {
                    className: `${A.settingIcon} ${A.purple}`,
                    children: n(Yc, { size: 20 }),
                  }),
                  n("div", {
                    className: A.settingText,
                    children: [
                      n("span", {
                        className: A.settingTitle,
                        children: "Упоминания",
                      }),
                      n("span", {
                        className: A.settingDescription,
                        children: "Уведомления когда вас упоминают в постах",
                      }),
                    ],
                  }),
                ],
              }),
              n(Ut, {
                checked: c.mentions,
                onChange: (g) => p("mentions", g),
              }),
            ],
          }),
        ],
      }),
    ],
  });
});

const m_ = Un(({ onDirtyChange: t, onSavingChange: o }, r) => {
  const [i, s] = I({
    isPrivate: false,
    whoCanPostOnWall: "everyone",
    whoCanSeeMyPostReactions: "everyone",
    showLastSeen: true,
  });

  const [a, c] = I(null);
  const [u, l] = I(false);
  const [h, d] = I(false);
  const [f, m] = I(false);
  const [N, w] = I(false);
  const [v, p] = I([]);
  const [y, T] = I(null);
  const [g, b] = I(true);
  const [S, R] = I(false);
  const [k, _] = I(false);

  W(() => {
    P();

    if (!k) {
      C();
    }
  }, []);

  W(() => {
    t(u);
  }, [u]);

  W(() => {
    o(h);
  }, [h]);

  const P = async () => {
    if (!N) {
      m(true);
    }

    try {
      const Z = await bt.getPrivacySettings();

      const ce = {
        isPrivate: Z.isPrivate ?? false,
        whoCanPostOnWall: Z.whoCanPostOnWall ?? "everyone",
        whoCanSeeMyPostReactions: Z.whoCanSeeMyPostReactions ?? "everyone",
        showLastSeen: Z.showLastSeen ?? true,
      };

      s(ce);
      c(ce);
      l(false);
      w(true);
    } catch (Z) {
      console.error("Failed to load privacy settings:", Z);
    } finally {
      m(false);
    }
  };

  const C = async (Z) => {
    if (!S) {
      R(true);
      try {
        const ce = await Ln.getBlockedUsers({ cursor: Z, limit: 20 });

        p(Z ? (J) => [...J, ...ce.users] : ce.users);

        T(ce.nextCursor);
        b(ce.hasMore);
        _(true);
      } catch (ce) {
        console.error("Failed to load blocked users:", ce);
      } finally {
        R(false);
      }
    }
  };

  const F = async (Z) => {
    try {
      await Ln.unblockUser(Z);

      p((ce) => ce.filter((J) => J.id !== Z));

      Ue.success("Пользователь разблокирован");
    } catch (ce) {
      console.error("Failed to unblock user:", ce);
      Ue.error("Не удалось разблокировать пользователя");
    }
  };

  const O = () => {
    if (g && y) {
      C(y);
    }
  };

  const K = (Z, ce) => {
    const J = { ...i, [Z]: ce };
    s(J);

    if (a) {
      const te = Object.keys(J).some((B) => J[B] !== a[B]);
      l(te);
    }
  };

  const ae = async () => {
    if (!(!u || h)) {
      d(true);
      try {
        await bt.updatePrivacySettings({
          whoCanPostOnWall: i.whoCanPostOnWall,
          whoCanSeeMyPostReactions: i.whoCanSeeMyPostReactions,
          showLastSeen: i.showLastSeen,
        });

        c({ ...i });
        l(false);
        Ue.success("Настройки приватности сохранены");
      } catch (Z) {
        console.error("Failed to save privacy settings:", Z);
        Ue.error("Не удалось сохранить настройки");
      } finally {
        d(false);
      }
    }
  };

  const X = () => {
    if (a) {
      s({ ...a });
      l(false);
    }
  };

  pn(r, () => ({
    save: ae,
    discard: X,
  }));

  return n(Se, {
    children: [
      n("h2", { className: A.contentTitle, children: "Приватность" }),
      N &&
        n("div", {
          className: A.section,
          children: [
            n("div", {
              className: A.settingItem,
              children: [
                n("div", {
                  className: A.settingInfo,
                  children: n("div", {
                    className: A.settingText,
                    children: [
                      n("span", {
                        className: A.settingTitle,
                        children: "Стена",
                      }),
                      n("span", {
                        className: A.settingDescription,
                        children: "Кто может писать на вашей стене",
                      }),
                    ],
                  }),
                }),
                n(Cs, {
                  value: i.whoCanPostOnWall,
                  options: Ns,
                  onChange: (Z) => K("whoCanPostOnWall", Z),
                }),
              ],
            }),
            n("div", {
              className: A.settingItem,
              children: [
                n("div", {
                  className: A.settingInfo,
                  children: n("div", {
                    className: A.settingText,
                    children: [
                      n("span", {
                        className: A.settingTitle,
                        children: "Лайки",
                      }),
                      n("span", {
                        className: A.settingDescription,
                        children: "Кто может видеть ваши лайкнутые посты",
                      }),
                    ],
                  }),
                }),
                n(Cs, {
                  value: i.whoCanSeeMyPostReactions,
                  options: Ns,
                  onChange: (Z) => K("whoCanSeeMyPostReactions", Z),
                }),
              ],
            }),
            n("div", {
              className: `${A.settingItem} ${A.clickable}`,
              onClick: () => K("showLastSeen", !i.showLastSeen),
              children: [
                n("div", {
                  className: A.settingInfo,
                  children: n("div", {
                    className: A.settingText,
                    children: [
                      n("span", {
                        className: A.settingTitle,
                        children: "Онлайн-статус",
                      }),
                      n("span", {
                        className: A.settingDescription,
                        children: "Показывать время последнего визита",
                      }),
                    ],
                  }),
                }),
                n(Ut, {
                  checked: i.showLastSeen,
                  onChange: (Z) => K("showLastSeen", Z),
                }),
              ],
            }),
          ],
        }),
      n("div", {
        className: A.section,
        children: [
          n("div", {
            className: A.sectionTitle,
            children: "Чёрный список",
          }),
          S && !k
            ? n(vt, {})
            : k
            ? n(Se, {
                children:
                  v.length === 0
                    ? n("div", {
                        className: A.emptyBlocklist,
                        children: "Чёрный список пуст",
                      })
                    : n("div", {
                        className: A.blockedUsersList,
                        children: [
                          v.map((Z) =>
                            n(
                              "div",
                              {
                                className: A.blockedUserItem,
                                children: [
                                  n(st, {
                                    src: Z.avatar,
                                    alt: Z.displayName,
                                    size: "sm",
                                  }),
                                  n("div", {
                                    className: A.blockedUserInfo,
                                    children: [
                                      n("span", {
                                        className: A.blockedUserName,
                                        children: Z.displayName,
                                      }),
                                      Z.username &&
                                        n("span", {
                                          className: A.blockedUserUsername,
                                          children: ["@", Z.username],
                                        }),
                                    ],
                                  }),
                                  n(Oe, {
                                    size: "sm",
                                    variant: "secondary",
                                    onClick: () => F(Z.id),
                                    children: "Разблокировать",
                                  }),
                                ],
                              },
                              Z.id
                            )
                          ),
                          g &&
                            n(Oe, {
                              variant: "secondary",
                              onClick: O,
                              disabled: S,
                              children: S ? "Загрузка..." : "Загрузить ещё",
                            }),
                        ],
                      }),
              })
            : null,
        ],
      }),
    ],
  });
});

function Fy(e) {
  const t = E(() => {
    const i = window.innerWidth * 0.9;
    const s = window.innerHeight * 0.9;
    return e.map((a) => {
      const c = a.width / a.height;
      const u = Math.min(i, a.width);
      const l = Math.min(s, a.height);

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

  const [o, r] = I(t);

  W(() => {
    const i = () => r(t());
    window.addEventListener("resize", i);

    return () => window.removeEventListener("resize", i);
  }, [t]);

  return o;
}
function Hy() {
  W(() => {
    const e = window.innerWidth - document.documentElement.clientWidth;
    const document_documentElement = document.documentElement;
    const o = document_documentElement.style.overflow;
    document_documentElement.style.overflow = "hidden";

    if (e > 0) {
      document_documentElement.style.setProperty(
        "--scrollbar-compensation",
        `${e}px`
      );
    }

    return () => {
      document_documentElement.style.overflow = o;
      document_documentElement.style.setProperty(
        "--scrollbar-compensation",
        "0px"
      );
    };
  }, []);
}
function Wy({ onClose: e, onPrev: t, onNext: o }) {
  W(() => {
    const r = (i) => {
      switch (i.key) {
        case "Escape": {
          i.preventDefault();
          i.stopPropagation();
          e();
          break;
        }
        case "ArrowLeft": {
          i.preventDefault();
          i.stopPropagation();
          t();
          break;
        }
        case "ArrowRight": {
          i.preventDefault();
          i.stopPropagation();
          o();
          break;
        }
      }
    };
    window.addEventListener("keydown", r, true);

    return () => window.removeEventListener("keydown", r, true);
  }, [e, t, o]);
}
function Vy({ initialIndex: e, total: t }) {
  const [o, r] = I(e);
  const [i, s] = I(false);
  const a = x(null);

  const c = E(() => {
    if (a.current) {
      clearTimeout(a.current);
      a.current = null;
      s(false);
    }
  }, []);

  const u = E(
    (d) => {
      if (d !== o && d >= 0 && d >= 0 && d < t) {
        if (d >= 0) {
          if (d < t) {
            c();
            s(true);
            r(d);

            a.current = window.setTimeout(() => {
              a.current = null;
              s(false);
            }, 500);
          }
        }
      }
    },
    [o, t, c]
  );

  const l = E(() => {
    if (o > 0) {
      u(o - 1);
    }
  }, [o, u]);

  const h = E(() => {
    if (o < t - 1) {
      u(o + 1);
    }
  }, [o, t, u]);

  return {
    currentIndex: o,
    setCurrentIndex: r,
    isAnimating: i,
    setIsAnimating: s,
    cancelAnimation: c,
    goToIndex: u,
    goToPrev: l,
    goToNext: h,
  };
}
const Uo = 150;
const jy = 0.3;
function Ts(e, t) {
  const o = e.clientX - t.clientX;
  const r = e.clientY - t.clientY;
  return Math.sqrt(o * o + r * r);
}
function zy({
  currentIndex: e,
  imagesCount: t,
  imageSizes: o,
  isMobile: r,
  isAnimating: i,
  setIsAnimating: s,
  cancelAnimation: a,
  onIndexChange: c,
  onClose: u,
}) {
  const [l, h] = I(0);
  const [d, f] = I(0);
  const [m, N] = I(false);
  const [w, v] = I(1);
  const [p, y] = I(null);
  const [T, g] = I(1);
  const [b, S] = I(0);
  const [R, k] = I(0);
  const [_, P] = I(false);
  const C = x(1);
  const F = x({ x: 0, y: 0 });
  const O = x(false);
  const K = x(false);
  const ae = x(0);
  const X = x(0);
  const Z = x(0);
  const ce = x(1);
  const J = x({ x: 0, y: 0 });
  const te = x({ x: 0, y: 0 });
  const B = x({ x: 0, y: 0 });
  const z = x(null);
  const Q = x(false);
  const D = x(null);
  const $ = x(null);
  const V = x(false);

  const U = E((le) => {
    C.current = le;
    g(le);
  }, []);

  const oe = E((le, H) => {
    F.current = { x: le, y: H };
    S(le);
    k(H);
  }, []);

  const ee = E(() => {
    P(true);
    U(1);
    oe(0, 0);

    setTimeout(() => P(false), 300);
  }, [U, oe]);

  W(() => {
    C.current = 1;
    F.current = { x: 0, y: 0 };
    g(1);
    S(0);
    k(0);
    P(false);
  }, [e]);

  W(
    () => () => {
      if (D.current) {
        clearTimeout(D.current);
        D.current = null;
      }
    },
    []
  );

  const M = E(
    (le) => {
      let H = le;

      if ((e === 0 && H > 0) || (e === t - 1 && H < 0)) {
        H *= jy;
      }

      return H;
    },
    [e, t]
  );

  const ne = E(
    () =>
      Math.abs(d) > Uo
        ? (u(r), true)
        : (s(true),
          f(0),
          v(1),
          (D.current = window.setTimeout(() => {
            D.current = null;
            s(false);
          }, 300)),
          false),
    [d, r, u, s]
  );

  const re = E(
    (le) => {
      if (!r && t > 1) {
        if (t > 1) {
          a();
          D.current && (clearTimeout(D.current), (D.current = null));
          $.current !== null && (c($.current), ($.current = null));
          s(false);
          y(null);
          h(0);
          N(true);
          Q.current = false;
          B.current = { x: le.clientX, y: le.clientY };
          z.current = null;
          le.preventDefault();
        }
      }
    },
    [r, t, a, c, s]
  );

  const de = E(
    (le) => {
      if (!m || r) {
        return;
      }
      const H = le.clientX - B.current.x;
      const ie = le.clientY - B.current.y;

      if (!z.current && (Math.abs(H) > 10 || Math.abs(ie) > 10)) {
        z.current = Math.abs(H) > Math.abs(ie) ? "x" : "y";
        Q.current = true;
      }

      if (z.current === "x") {
        h(M(H));
      } else if (z.current === "y") {
        f(ie);
        const be = Math.min(Math.abs(ie) / Uo, 1);
        v(1 - be * 0.5);
      }
    },
    [m, r, M]
  );

  const ue = E(() => {
    if (!(!m || r)) {
      N(false);

      if (z.current === "x") {
        const H = $.current ?? e;
        let ie = H;

        if (l < -80 && H < t - 1) {
          ie = H + 1;
        } else if (l > 80 && H > 0) {
          ie = H - 1;
        }

        if (ie !== H) {
          const be = o[ie]?.width || 0;
          const Qe = o[H]?.width || 0;
          const L = ie > H ? -Qe : be;
          s(true);
          y(ie);
          h(L);
          $.current = ie;

          D.current = window.setTimeout(() => {
            D.current = null;
            s(false);
            y(null);
            h(0);
            $.current = null;
            c(ie);
          }, 500);
        } else {
          s(true);
          h(0);

          D.current = window.setTimeout(() => {
            D.current = null;
            s(false);
          }, 300);
        }
      } else {
        if (z.current === "y") {
          ne();
        }
      }

      z.current = null;
    }
  }, [m, r, e, l, t, o, ne, c, s]);

  const De = E(
    (le) => {
      if (!r) {
        return;
      }
      X.current = Math.max(X.current, le.touches.length);

      if (le.touches.length === 2) {
        O.current = true;
        K.current = true;
        Z.current = Ts(le.touches[0], le.touches[1]);
        ce.current = C.current;
        N(false);
        z.current = null;
        h(0);
        f(0);
        v(1);
        P(false);
        return;
      }

      if (C.current > 1) {
        X.current = 1;

        J.current = {
          x: le.touches[0].clientX,
          y: le.touches[0].clientY,
        };

        te.current = { ...F.current };
        N(true);
        Q.current = false;
        z.current = null;
        P(false);
        const le_target_1 = le.target;
        V.current =
          le_target_1.tagName === "IMG" &&
          le_target_1.hasAttribute("data-viewer-image");
        return;
      }
      X.current = 1;
      K.current = false;
      a();

      if (D.current) {
        clearTimeout(D.current);
        D.current = null;
      }

      s(false);
      h(0);
      const le_target = le.target;
      V.current =
        le_target.tagName === "IMG" &&
        le_target.hasAttribute("data-viewer-image");
      B.current = { x: le.touches[0].clientX, y: le.touches[0].clientY };
      z.current = null;
      N(true);
    },
    [r, a, s]
  );

  const je = E(
    (le) => {
      if (!r) {
        return;
      }
      X.current = Math.max(X.current, le.touches.length);

      if (O.current && le.touches.length >= 2) {
        const be = Ts(le.touches[0], le.touches[1]);
        const Qe = ce.current * (be / Z.current);
        U(Math.min(Math.max(Qe, 0.5), 5));
        return;
      }

      if (C.current > 1 && m && !O.current) {
        const be = le.touches[0].clientX - J.current.x;
        const Qe = le.touches[0].clientY - J.current.y;

        if (Math.abs(be) > 5 || Math.abs(Qe) > 5) {
          Q.current = true;
        }

        oe(te.current.x + be, te.current.y + Qe);
        return;
      }
      if (!m) {
        return;
      }
      const H = le.touches[0].clientX - B.current.x;
      const ie = le.touches[0].clientY - B.current.y;

      if (!z.current && (Math.abs(H) > 10 || Math.abs(ie) > 10)) {
        z.current = Math.abs(H) > Math.abs(ie) ? "x" : "y";
      }

      if (z.current === "x") {
        h(M(H));
      } else if (z.current === "y") {
        f(ie);
        const be = Math.min(Math.abs(ie) / Uo, 1);
        v(Math.round((1 - be * 0.7) * 100) / 100);
      }
    },
    [r, m, U, oe, M]
  );

  const Me = E(() => {
    if (r) {
      if (O.current) {
        O.current = false;
        ae.current = Date.now();

        if (C.current < 1.1) {
          ee();
        }

        return;
      }
      if (C.current > 1) {
        N(false);
        return;
      }
      if (X.current > 1 || K.current) {
        N(false);
        f(0);
        v(1);
        z.current = null;
        return;
      }
      if (Date.now() - ae.current < 300) {
        N(false);
        f(0);
        v(1);
        z.current = null;
        return;
      }
      if (m) {
        N(false);

        if (!V.current) {
          if (!z.current) {
            u(true);
            return;
          }
          if (z.current === "y" && d > 30) {
            u(true);
            return;
          }
        }

        if (z.current === "x") {
          let H = e;

          if (l < -50 && e < t - 1) {
            H = e + 1;
          } else if (l > 50 && e > 0) {
            H = e - 1;
          }

          s(true);
          h(0);

          if (H !== e) {
            c(H);
          }

          D.current = window.setTimeout(() => {
            D.current = null;
            s(false);
          }, 500);
        } else {
          if (z.current === "y") {
            ne();
          }
        }
        z.current = null;
      }
    }
  }, [r, m, e, l, d, t, ne, c, u, s, ee]);

  const it = E(() => {
    const le = $.current ?? e;
    const H = o[le] || { width: 600, height: 400 };
    if (i && p !== null) {
      const ie = o[p] || H;
      return { width: ie.width, height: ie.height };
    }
    if (m && z.current === "x" && l !== 0) {
      const ie = l < 0 ? Math.min(le + 1, t - 1) : Math.max(le - 1, 0);
      if (ie === le) {
        return H;
      }
      const be = o[ie] || H;
      const Qe = H.width / 2 + be.width / 2;
      const L = Math.min(Math.abs(l) / Qe, 1);
      return {
        width: H.width + (be.width - H.width) * L,
        height: H.height + (be.height - H.height) * L,
      };
    }
    return H;
  }, [o, e, i, p, m, l, t]);

  const Ee = E(() => {
    s(true);
    f(window.innerHeight);
    v(0);
  }, [s]);

  return {
    offsetX: l,
    offsetY: d,
    isDragging: m,
    opacity: w,
    wasDragging: Q,
    displaySize: it(),
    animateClose: Ee,
    zoom: { scale: T, panX: b, panY: R, isAnimating: _ },
    desktopHandlers: {
      onMouseDown: re,
      onMouseMove: de,
      onMouseUp: ue,
      onMouseLeave: ue,
    },
    mobileHandlers: { onTouchStart: De, onTouchMove: je, onTouchEnd: Me },
  };
}
const Xy = "CNP0fBGd";
const Yy = "FxpoCP7s";
const Gy = "qO26zEBn";
const Zy = "-iyRv-th";
const qy = "liHkL9mP";
const Ky = "U70eja-G";
const Jy = "q1lrkTZi";
const Qy = "oxBkKER-";
const e2 = "d4VkyUQq";
const t2 = "UK-OMndz";
const n2 = "_2CH2oEyg";
const o2 = "gGVStb2K";
const r2 = "_7Ac4a5ul";
const s2 = "ZyoB5yJC";
const i2 = "DWdVTu-N";

const Ge = {
  viewer: Xy,
  closeButton: Yy,
  counter: Gy,
  windowContainer: Zy,
  track: qy,
  slide: Ky,
  mobileContainer: Jy,
  mobileTrack: Qy,
  mobileSlide: e2,
  navArea: t2,
  navLeft: n2,
  navRight: o2,
  dots: r2,
  dot: s2,
  active: i2,
};

function a2({ onClick: e }) {
  return n("button", {
    className: Ge.closeButton,
    onClick: e,
    children: n("svg", {
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      children: n("path", { d: "M18 6L6 18M6 6l12 12" }),
    }),
  });
}
function c2({ current: e, total: t }) {
  return (
    t <= 1 || n("div", { className: Ge.counter, children: [e + 1, " / ", t] })
  );
}
function l2({ currentIndex: e, total: t, onPrev: o, onNext: r }) {
  return (
    t <= 1 ||
    n(Se, {
      children: [
        n("button", {
          className: `${Ge.navArea} ${Ge.navLeft}`,
          onClick: o,
          disabled: e === 0,
          children: n("svg", {
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            children: n("path", { d: "M15 18l-6-6 6-6" }),
          }),
        }),
        n("button", {
          className: `${Ge.navArea} ${Ge.navRight}`,
          onClick: r,
          disabled: e === t - 1,
          children: n("svg", {
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            children: n("path", { d: "M9 18l6-6-6-6" }),
          }),
        }),
      ],
    })
  );
}
function u2({ total: e, currentIndex: t, onDotClick: o }) {
  return (
    e <= 1 ||
    n("div", {
      className: Ge.dots,
      children: Array.from({ length: e }, (r, i) =>
        n(
          "button",
          {
            className: `${Ge.dot} ${i === t ? Ge.active : ""}`,
            onClick: () => o(i),
          },
          i
        )
      ),
    })
  );
}
function d2({
  images: e,
  imageSizes: t,
  currentIndex: o,
  offsetX: r,
  offsetY: i,
  isAnimating: s,
  displaySize: a,
  handlers: c,
  onImageClick: u,
}) {
  const l = x(null);

  const h = () => {
    let d = 0;
    for (let f = 0; f < o; f++) {
      d += t[f]?.width || 0;
    }
    return d;
  };

  return n("div", {
    className: Ge.windowContainer,
    style: {
      width: `${a.width}px`,
      height: `${a.height}px`,
      transform: `translateY(${i}px)`,
      transition: s
        ? "width 0.5s cubic-bezier(0.32, 0.72, 0, 1), height 0.5s cubic-bezier(0.32, 0.72, 0, 1)"
        : "none",
    },
    onMouseDown: c.onMouseDown,
    onMouseMove: c.onMouseMove,
    onMouseUp: c.onMouseUp,
    onMouseLeave: c.onMouseLeave,
    children: n("div", {
      ref: l,
      className: Ge.track,
      style: {
        transform: `translateX(${-h() + r}px)`,
        transition: s
          ? "transform 0.5s cubic-bezier(0.32, 0.72, 0, 1)"
          : "none",
      },
      children: e.map((d, f) =>
        n(
          "div",
          {
            className: Ge.slide,
            onClick: u,
            children: n("img", {
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
function h2({
  images: e,
  currentIndex: t,
  offsetX: o,
  offsetY: r,
  isAnimating: i,
  isClosing: s,
  handlers: a,
  onImageClick: c,
  zoom: u,
}) {
  return n("div", {
    className: Ge.mobileContainer,
    style: {
      transform: `translateY(${r}px)`,
      transition: i
        ? `transform ${s ? "0.15s" : "0.3s"} cubic-bezier(0.32, 0.72, 0, 1)`
        : "none",
    },
    onTouchStart: a.onTouchStart,
    onTouchMove: a.onTouchMove,
    onTouchEnd: a.onTouchEnd,
    children: n("div", {
      className: Ge.mobileTrack,
      style: {
        transform: `translateX(calc(-${t * 100}% + ${o}px))`,
        transition: i
          ? "transform 0.5s cubic-bezier(0.32, 0.72, 0, 1)"
          : "none",
      },
      children: e.map((l, h) =>
        n(
          "div",
          {
            className: Ge.mobileSlide,
            onClick: c,
            children: n("img", {
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
function f2({ images: e, initialIndex: t, onClose: o }) {
  const r = x(null);
  const i = kt();
  const s = Fy(e);
  const a = Vy({ initialIndex: t, total: e.length });
  Hy();

  const c = E(
    (d = false) => {
      if (d && i) {
        u.animateClose();
        setTimeout(o, 150);
      } else {
        o();
      }
    },
    [i, o]
  );

  const u = zy({
    currentIndex: a.currentIndex,
    imagesCount: e.length,
    imageSizes: s,
    isMobile: i,
    isAnimating: a.isAnimating,
    setIsAnimating: a.setIsAnimating,
    cancelAnimation: a.cancelAnimation,
    onIndexChange: a.goToIndex,
    onClose: c,
  });

  Wy({ onClose: c, onPrev: a.goToPrev, onNext: a.goToNext });

  const l = E(
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

  const h = E(() => {
    if (u.wasDragging.current) {
      u.wasDragging.current = false;
      return;
    }
    c(i);
  }, [c, i]);

  return wt(
    n("div", {
      ref: r,
      className: Ge.viewer,
      style: {
        "--opacity": u.opacity,
        transition: a.isAnimating
          ? "opacity 0.3s cubic-bezier(0.32, 0.72, 0, 1)"
          : "none",
      },
      onClick: l,
      children: [
        !i && n(a2, { onClick: c }),
        n(c2, { current: a.currentIndex, total: e.length }),
        !i &&
          n(d2, {
            images: e,
            imageSizes: s,
            currentIndex: a.currentIndex,
            offsetX: u.offsetX,
            offsetY: u.offsetY,
            isAnimating: a.isAnimating,
            displaySize: u.displaySize,
            handlers: u.desktopHandlers,
            onImageClick: h,
          }),
        i &&
          n(h2, {
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
        !i &&
          n(l2, {
            currentIndex: a.currentIndex,
            total: e.length,
            onPrev: a.goToPrev,
            onNext: a.goToNext,
          }),
        n(u2, {
          total: e.length,
          currentIndex: a.currentIndex,
          onDotClick: a.goToIndex,
        }),
      ],
    }),
    document.body
  );
}
function m2() {
  const { isOpen: e, images: t, initialIndex: o, close: r } = ci();
  return e ? n(f2, { images: t, initialIndex: o, onClose: r }) : null;
}
function p2({ children: e, currentPath: t }) {
  const o = ic();

  const r = Ne((s) => s.initialize);

  W(() => {
    if (o === "idle") {
      r();
    }
  }, [o, r]);

  W(() => {
    if (o === "loading" || o === "idle") {
      return;
    }
    const s = ts.some((a) => t.startsWith(a));

    if (o === "unauthenticated" && !s) {
      $(Ie.LOGIN);
    } else if (o === "needs_profile" && t !== Ie.ONBOARDING) {
      $(Ie.ONBOARDING);
    } else if (
      o === "authenticated" &&
      (t === Ie.LOGIN ||
        t === Ie.REGISTER ||
        t === Ie.REGISTER ||
        t === Ie.ONBOARDING)
    ) {
      $(Ie.HOME);
    }
  }, [o, t]);

  const i = ts.some((s) => t.startsWith(s));
  return o === "idle" || (o === "loading" && !i)
    ? null
    : o === "service_error"
    ? n(g2, {})
    : o === "account_deleted"
    ? n(v2, {})
    : n(Se, { children: e });
}
function g2() {
  const e = Ne((i) => i.initialize);

  const [t, o] = I(false);
  return n("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "100vh",
      padding: "24px",
    },
    children: n("div", {
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
        n("h1", {
          style: {
            fontSize: "24px",
            fontWeight: 600,
            color: "var(--text-primary)",
            margin: 0,
          },
          children: "Сервис недоступен",
        }),
        n("p", {
          style: {
            fontSize: "15px",
            color: "var(--text-secondary)",
            margin: 0,
            lineHeight: 1.5,
          },
          children:
            "Не удалось подключиться к серверу. Попробуйте обновить страницу или повторите попытку позже.",
        }),
        n("div", {
          style: { marginTop: "8px" },
          children: n(Oe, {
            onClick: async () => {
              o(true);
              try {
                await e();
              } finally {
                o(false);
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
function v2() {
  const e = Ne((u) => u.canRestore);

  const t = Ne((u) => u.restoreDeadline);

  const o = Ne((u) => u.restoreAccount);

  const r = Ne((u) => u.logout);

  const [i, s] = I(false);

  const a = t
    ? new Date(t).toLocaleDateString("ru-RU", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : null;

  const c = async () => {
    s(true);
    try {
      await o();
    } catch {
      s(false);
    }
  };

  return n("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "100vh",
      padding: "24px",
    },
    children: n("div", {
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
        n("h1", {
          style: {
            fontSize: "24px",
            fontWeight: 600,
            color: "var(--text-primary)",
            margin: 0,
          },
          children: "Аккаунт удалён",
        }),
        i
          ? n("p", {
              style: {
                fontSize: "15px",
                color: "var(--text-secondary)",
                margin: 0,
              },
              children: "Восстановление аккаунта...",
            })
          : e
          ? n(Se, {
              children: [
                n("p", {
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
                n("div", {
                  style: {
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "12px",
                    marginTop: "8px",
                    width: "100%",
                  },
                  children: [
                    n(Oe, { onClick: c, children: "Восстановить аккаунт" }),
                    n("button", {
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
          : n(Se, {
              children: [
                n("p", {
                  style: {
                    fontSize: "15px",
                    color: "var(--text-secondary)",
                    margin: 0,
                  },
                  children: "Срок восстановления аккаунта истёк.",
                }),
                n("div", {
                  style: { marginTop: "8px" },
                  children: n(Oe, { onClick: () => r(), children: "Выйти" }),
                }),
              ],
            }),
      ],
    }),
  });
}
function w2({
  itemCount: e,
  estimatedItemHeight: t,
  overscan: o = 5,
  gap: r = 0,
  getItemKey: i = (a) => a,
  initialMeasuredHeights: s,
}) {
  const [, a] = I(0);
  const c = x(typeof window !== "undefined" ? window.scrollY : 0);
  const u = x(s ?? new Map());
  const l = x(null);
  const h = x(null);
  const d = x(new Map());

  const f = (T) => u.current.get(T) ?? t;

  const m = (T) => {
    let g = 0;
    for (let b = 0; b < T; b++) {
      g += f(b) + r;
    }
    return g;
  };

  const N = () => {
    if (e === 0) {
      return 0;
    }
    let T = 0;
    for (let g = 0; g < e; g++) {
      T += f(g);
    }
    T += Math.max(0, e - 1) * r;
    return T;
  };

  const w = () => {
    if (e === 0) {
      return { start: 0, end: 0 };
    }
    const c_current = c.current;
    const window_innerHeight = window.innerHeight;
    let b = 0;
    let S = 0;
    for (let _ = 0; _ < e; _++) {
      const P = f(_) + r;
      if (S + P > c_current) {
        b = _;
        break;
      }
      S += P;
    }
    let R = b;
    let k = 0;
    for (
      let _ = b;
      _ < e && ((k += f(_) + r), (R = _), !(k >= window_innerHeight));
      _++
    ) {}
    return { start: Math.max(0, b - o), end: Math.min(e - 1, R + o) };
  };

  const v = () => {
    if (e === 0) {
      return [];
    }
    const { start: T, end: g } = w();
    const b = [];
    for (let S = T; S <= g; S++) {
      b.push({ index: S, key: i(S), start: m(S) });
    }
    return b;
  };

  if (!h.current) {
    h.current = new ResizeObserver((T) => {
      let g = false;
      for (const b of T) {
        const b_target = b.target;
        const R = d.current.get(b_target);
        if (R === undefined) {
          continue;
        }
        const k = b.contentRect.height;

        if (k > 0 && u.current.get(R) !== k) {
          u.current.set(R, k);
          g = true;
        }
      }

      if (g) {
        a((b) => b + 1);
      }
    });
  }

  const p = E((T, g) => {
    if (!T) {
      return;
    }
    d.current.set(T, g);
    h.current?.observe(T);
    const b = T.getBoundingClientRect().height;

    if (b > 0 && u.current.get(g) !== b) {
      u.current.set(g, b);
      a((S) => S + 1);
    }
  }, []);
  W(() => {
    const T = () => {
      if (!l.current) {
        l.current = requestAnimationFrame(() => {
          l.current = null;
          c.current = window.scrollY;

          a((g) => g + 1);
        });
      }
    };
    window.addEventListener("scroll", T, { passive: true });
    c.current = window.scrollY;

    a((g) => g + 1);

    return () => {
      window.removeEventListener("scroll", T);

      if (l.current) {
        cancelAnimationFrame(l.current);
      }

      h.current?.disconnect();
      d.current.clear();
    };
  }, []);
  const y = E(() => new Map(u.current), []);
  return {
    virtualItems: v(),
    totalSize: N(),
    measureElement: p,
    getMeasuredHeights: y,
  };
}
const y2 = "IWKvHh6o";
const _2 = "B0hQs8NU";
const C2 = "q8F-aimP";
const N2 = "qkSaz-qE";

const ro = {
  virtualFeed: y2,
  virtualContent: _2,
  virtualItem: C2,
  loadingMore: N2,
};

function b2({
  posts: e,
  renderPost: t,
  isLoadingMore: o = false,
  hasMore: r = false,
  onLoadMore: i,
  estimatedPostHeight: s = 300,
  overscan: a = 5,
  gap: c = 10,
  initialMeasuredHeights: u,
  onMeasuredHeightsChange: l,
}) {
  const h = x(null);
  const d = x(false);
  const [f, m] = I(null);
  const [N, w] = I(window.innerWidth < 1174);

  const v = ye((_) => _.highlightedPostId);

  const p = ye((_) => _.clearHighlightedPost);

  W(() => {
    const _ = () => w(window.innerWidth < 1174);
    window.addEventListener("resize", _);

    return () => window.removeEventListener("resize", _);
  }, []);
  const y = N ? 0 : c;

  const T = E(
    (_) => {
      const e_1 = e[_];
      if (!e_1) {
        return _;
      }
      const C = e_1.attachments?.[0]?.id ?? "";
      return `${e_1.id}-${C}`;
    },
    [e]
  );

  const {
    virtualItems: g,
    totalSize: b,
    measureElement: S,
    getMeasuredHeights: R,
  } = w2({
    itemCount: e.length,
    estimatedItemHeight: s,
    overscan: a,
    gap: y,
    getItemKey: T,
    initialMeasuredHeights: u,
  });

  W(
    () => () => {
      if (l) {
        l(R());
      }
    },
    [l, R]
  );

  W(() => {
    if (!v) {
      return;
    }
    h.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    const _ = setTimeout(() => {
      m(v);
      p();

      setTimeout(() => m(null), 600);
    }, 300);
    return () => clearTimeout(_);
  }, [v, p]);

  const k = E(() => {
    if (!i || !r || !r || o) {
      return;
    }
    const _ =
      document.documentElement.scrollHeight -
      window.scrollY -
      window.innerHeight;

    if (_ < 500 && !d.current) {
      d.current = true;
      i();
    }

    if (_ > 600) {
      d.current = false;
    }
  }, [i, r, o]);

  W(() => {
    if (!o) {
      d.current = false;
    }
  }, [o]);

  W(() => {
    window.addEventListener("scroll", k, { passive: true });

    return () => window.removeEventListener("scroll", k);
  }, [k]);

  return n("div", {
    ref: h,
    className: ro.virtualFeed,
    children: [
      n("div", {
        className: ro.virtualContent,
        style: { height: `${b}px` },
        children: g.map((_) => {
          const P = e[_.index];
          return P
            ? n(
                "div",
                {
                  ref: (C) => S(C, _.index),
                  className: ro.virtualItem,
                  style: { transform: `translateY(${_.start}px)` },
                  children: t(P, _.index, P.id === f),
                },
                _.key
              )
            : null;
        }),
      }),
      o &&
        n("div", {
          className: ro.loadingMore,
          children: n(vt, { size: "sm" }),
        }),
    ],
  });
}
const T2 = "qX9ObwT9";
const k2 = "QAdxKv6R";
const E2 = "nTcZk3Cv";
const R2 = "_5UYumbfd";
const so = { content: T2, icon: k2, text: E2, button: R2 };
const ks = "phone-verification-required";
function S2() {
  const [e, t] = I(false);

  const o = Ne((i) => i.profile?.id ?? "");

  W(() => {
    const i = () => t(true);
    window.addEventListener(ks, i);

    return () => window.removeEventListener(ks, i);
  }, []);

  if (!e) {
    return null;
  }

  const r = `https://t.me/itd_verification_bot?start=${o}`;
  return n(Ke, {
    onClose: () => t(false),
    title: "Подтверждение телефона",
    children: n("div", {
      className: so.content,
      children: [
        n("div", {
          className: so.icon,
          children: n("svg", {
            width: "48",
            height: "48",
            viewBox: "0 0 48 48",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              n("circle", {
                cx: "24",
                cy: "24",
                r: "24",
                fill: "#2AABEE",
                "fill-opacity": "0.12",
              }),
              n("svg", {
                x: "8",
                y: "8",
                width: "32",
                height: "32",
                viewBox: "0 0 1000 1000",
                children: n("path", {
                  d: "M226.328419,494.722069 C372.088573,431.216685 469.284839,389.350049 517.917216,369.122161 C656.772535,311.36743 685.625481,301.334815 704.431427,301.003532 C708.567621,300.93067 717.815839,301.955743 723.806446,306.816707 C728.864797,310.92121 730.256552,316.46581 730.922551,320.357329 C731.588551,324.248848 732.417879,333.113828 731.758626,340.040666 C724.234007,419.102486 691.675104,610.964674 675.110982,699.515267 C668.10208,736.984342 654.301336,749.547532 640.940618,750.777006 C611.904684,753.448938 589.856115,731.588035 561.733393,713.153237 C517.726886,684.306416 492.866009,666.349181 450.150074,638.200013 C400.78442,605.66878 432.786119,587.789048 460.919462,558.568563 C468.282091,550.921423 596.21508,434.556479 598.691227,424.000355 C599.00091,422.680135 599.288312,417.758981 596.36474,415.160431 C593.441168,412.561881 589.126229,413.450484 586.012448,414.157198 C581.598758,415.158943 511.297793,461.625274 375.109553,553.556189 C355.154858,567.258623 337.080515,573.934908 320.886524,573.585046 C303.033948,573.199351 268.692754,563.490928 243.163606,555.192408 C211.851067,545.013936 186.964484,539.632504 189.131547,522.346309 C190.260287,513.342589 202.659244,504.134509 226.328419,494.722069 Z",
                  fill: "#2AABEE",
                }),
              }),
            ],
          }),
        }),
        n("p", {
          className: so.text,
          children:
            "Для публикации постов и комментариев необходимо подтвердить номер телефона через Telegram-бота.",
        }),
        n("a", {
          href: r,
          target: "_blank",
          rel: "noopener noreferrer",
          className: so.button,
          onClick: () => t(false),
          children: "Подтвердить через Telegram",
        }),
      ],
    }),
  });
}
const I2 = "NoLqdGhZ";
const x2 = "ZJgdLwPI";
const P2 = "r9t-7AuI";
const Fo = { layout: I2, wrapper: x2, content: P2 };
const A2 = ["/login", "/register", "/forgot-password", "/verify-email"];

const M2 = [
  "/terms",
  "/privacy",
  "/cookies",
  "/external",
  "/careers",
  "/support",
  "/delete-account",
  "/child-safety",
];

const L2 = ({ children: e }) => {
  const t = kt();
  const o = bc();
  const [r, i] = I(window.location.pathname);
  W(() => {
    const c = () => {
      i(window.location.pathname);
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
  const s = A2.includes(r);
  const a = M2.includes(r);
  return s
    ? n(Se, { children: e })
    : n(Nc.Provider, {
        value: { isHidden: o },
        children: n("div", {
          className: Fo.layout,
          children: n("div", {
            className: Fo.wrapper,
            children: [
              !a && (t ? n(Xf, {}) : n(Ou, {})),
              !a && !t && n(Hu, {}),
              n("div", { className: Fo.content, children: e }),
            ],
          }),
        }),
      });
};

const $2 = "bpf4GYjz";
const O2 = "crrL7XgI";
const D2 = "yhENW-7a";
const B2 = "_928LvLhD";
const U2 = "_6eF0w9KX";

const bn = {
  page: $2,
  createPostWrapper: O2,
  tabsWrapper: D2,
  error: B2,
  empty: U2,
};

const F2 = (e) => {
  const t = ye((R) => R.posts);

  const o = ye((R) => R.activeFeed);

  const r = ye((R) => R.isLoading);

  const i = ye((R) => R.isLoadingMore);

  const s = ye((R) => R.hasMore);

  const a = ye((R) => R.error);

  const c = ye((R) => R.feedScrollPosition);

  const u = ye((R) => R.feedMeasuredHeights);

  const l = ye((R) => R.setActiveFeed);

  const h = ye((R) => R.fetchFeed);

  const d = ye((R) => R.loadMoreFeed);

  const f = ye((R) => R.createPost);

  const m = ye((R) => R.setFeedScrollPosition);

  const N = ye((R) => R.setFeedMeasuredHeights);

  const w = Ne((R) => R.profile);

  const v = Ne((R) => R.status);

  const p = x(false);

  const y = Re(() => t.map((R) => R.author.id), [t]);

  oc(y);

  W(() => {
    if (v === "authenticated" && t.length === 0 && !r) {
      h();
    }
  }, [o, v]);

  W(() => {
    if (t.length > 0 && c > 0 && !p.current) {
      p.current = true;

      requestAnimationFrame(() => {
        window.scrollTo(0, c);
      });
    }
  }, [t.length, c]);

  W(
    () => () => {
      m(window.scrollY);
    },
    [m]
  );

  const T = (R) => {
    const _ = ["global", "clan", "following"][R] ?? "global";

    if (_ !== o) {
      l(_);
    }
  };

  const g = async (R, k, _, P) => {
    if (w) {
      await f(w.id, R, k, _, P);
    }
  };

  const b = E(() => {
    if (s && !i) {
      d();
    }
  }, [s, i, d]);

  const S = E((R, k, _) => n(w1, { post: R, isHighlighted: _ }, R.id), []);

  return n("div", {
    className: bn.page,
    children: [
      n("div", {
        className: bn.tabsWrapper,
        children: n(aw, {
          tabs: ["Для вас", "Лента кланов", "Подписки"],
          activeIndex: o === "global" ? 0 : o === "clan" ? 1 : 2,
          onChange: T,
        }),
      }),
      n("div", {
        className: bn.createPostWrapper,
        children: [
          w && n(st, { src: w.avatar ?? "", alt: w.displayName, size: "sm" }),
          n(Bi, { onSubmit: g }),
        ],
      }),
      a
        ? n("div", {
            className: bn.error,
            children: [
              n("p", { children: a }),
              n("button", { onClick: () => h(), children: "Повторить" }),
            ],
          })
        : r && t.length === 0
        ? n(vt, {})
        : t.length === 0
        ? n("div", { className: bn.empty, children: "Нет постов" })
        : t.length > 0
        ? n(b2, {
            posts: t,
            renderPost: S,
            isLoadingMore: i,
            hasMore: s,
            onLoadMore: b,
            estimatedPostHeight: 250,
            overscan: 3,
            initialMeasuredHeights: u,
            onMeasuredHeightsChange: N,
          })
        : null,
    ],
  });
};

const H2 = Pe(() =>
  Ae(() => import("./index-DIT0DJHa.js"), __vite__mapDeps([0, 1, 2])).then(
    (e) => ({
      default: e.Profile,
    })
  )
);

const W2 = Pe(() =>
  Ae(() => import("./index-CFKTm8b5.js"), __vite__mapDeps([3, 1, 4])).then(
    (e) => ({
      default: e.Notifications,
    })
  )
);

const V2 = Pe(() =>
  Ae(() => import("./index-V2uaGbAS.js"), __vite__mapDeps([5, 6])).then(
    (e) => ({
      default: e.About,
    })
  )
);

const zi = Pe(() =>
  Ae(() => import("./index-DlZjnWP0.js"), []).then((e) => ({
    default: e.NotFound,
  }))
);

const j2 = Pe(() =>
  Ae(() => import("./index-CyrHvdAp.js"), __vite__mapDeps([7, 8, 9])).then(
    (e) => ({
      default: e.PostPage,
    })
  )
);

const z2 = Pe(() =>
  Ae(
    () => import("./index-Cvcuf5c_.js"),
    __vite__mapDeps([10, 11, 12, 13, 14, 15, 16])
  ).then((e) => ({
    default: e.Login,
  }))
);

const X2 = Pe(() =>
  Ae(
    () => import("./index-CQe1UkF_.js"),
    __vite__mapDeps([17, 11, 12, 13, 14, 15, 18])
  ).then((e) => ({
    default: e.Register,
  }))
);

const Y2 = Pe(() =>
  Ae(
    () => import("./index-CRj8SIjp.js"),
    __vite__mapDeps([19, 11, 12, 15, 20])
  ).then((e) => ({
    default: e.ForgotPassword,
  }))
);

const G2 = Pe(() =>
  Ae(() => import("./index-B_YfkcVj.js"), __vite__mapDeps([21, 15, 22])).then(
    (e) => ({
      default: e.ResetPassword,
    })
  )
);

const Z2 = Pe(() =>
  Ae(() => import("./index-BUfvzD1M.js"), []).then((e) => ({
    default: e.VerifyEmail,
  }))
);

const q2 = Pe(() =>
  Ae(() => import("./index-Bl7PlgOD.js"), __vite__mapDeps([23, 8, 24])).then(
    (e) => ({
      default: e.Terms,
    })
  )
);

const K2 = Pe(() =>
  Ae(() => import("./index-ibVz4LmD.js"), __vite__mapDeps([25, 8, 26])).then(
    (e) => ({
      default: e.Privacy,
    })
  )
);

const J2 = Pe(() =>
  Ae(() => import("./index-Dl4PN8wh.js"), __vite__mapDeps([27, 8, 28])).then(
    (e) => ({
      default: e.Cookies,
    })
  )
);

const Q2 = Pe(() =>
  Ae(() => import("./index-6e9hczcR.js"), __vite__mapDeps([29, 30])).then(
    (e) => ({
      default: e.Onboarding,
    })
  )
);

const e_ = Pe(() =>
  Ae(() => import("./index-By23IUud.js"), __vite__mapDeps([31, 32])).then(
    (e) => ({
      default: e.Search,
    })
  )
);

const t_ = Pe(() =>
  Ae(() => import("./index-EHPplxfL.js"), __vite__mapDeps([33, 8, 34])).then(
    (e) => ({
      default: e.Hashtag,
    })
  )
);

const n_ = Pe(() =>
  Ae(() => import("./index-Cb1fhgMG.js"), __vite__mapDeps([35, 8, 36])).then(
    (e) => ({
      default: e.ExternalLink,
    })
  )
);

const o_ = Pe(() =>
  Ae(() => import("./index-BJ433-fF.js"), __vite__mapDeps([37, 8, 38])).then(
    (e) => ({
      default: e.Support,
    })
  )
);

const r_ = Pe(() =>
  Ae(() => import("./index-Dv_rcYhl.js"), __vite__mapDeps([39, 8, 40])).then(
    (e) => ({
      default: e.DeleteAccount,
    })
  )
);

const s_ = Pe(() =>
  Ae(() => import("./index-39p5--XD.js"), __vite__mapDeps([41, 8, 42])).then(
    (e) => ({
      default: e.ChildSafety,
    })
  )
);

const i_ = Pe(() =>
  Ae(() => import("./index-ByRPfZXp.js"), __vite__mapDeps([43, 44])).then(
    (e) => ({
      default: e.Event,
    })
  )
);

const a_ = Pe(() =>
  Ae(() => import("./index-MSYEMaP7.js"), []).then((e) => ({
    default: e.Verification,
  }))
);

const c_ = Pe(() =>
  Ae(() => import("./index-B4V5mhcS.js"), __vite__mapDeps([45, 8, 46])).then(
    (e) => ({
      default: e.SubscriptionTerms,
    })
  )
);

const l_ = ({ slug: e }) => {
  if (!e?.startsWith("@")) {
    return n(zi, {});
  }
  const t = e.slice(1);
  return n(H2, { username: t });
};

function u_() {
  const [e, t] = I(window.location.pathname);
  return n(O1, {
    children: n(td, {
      children: n(p2, {
        currentPath: e,
        children: [
          n(m2, {}),
          n(nw, {}),
          n(S2, {}),
          n(L2, {
            children: n(In, {
              fallback: null,
              children: n(ai, {
                onChange: (r) => {
                  const i = e;
                  t(r.url);

                  if (r.url !== "/" && r.url !== i) {
                    window.scrollTo(0, 0);
                  }
                },
                children: [
                  n(F2, { path: "/" }),
                  n(W2, { path: "/notifications" }),
                  n(V2, { path: "/about" }),
                  n(z2, { path: "/login" }),
                  n(X2, { path: "/register" }),
                  n(Y2, { path: "/forgot-password" }),
                  n(G2, { path: "/reset-password" }),
                  n(Z2, { path: "/verify-email" }),
                  n(q2, { path: "/terms" }),
                  n(K2, { path: "/privacy" }),
                  n(J2, { path: "/cookies" }),
                  n(Q2, { path: "/onboarding" }),
                  n(e_, { path: "/search" }),
                  n(t_, { path: "/hashtag/:name" }),
                  n(n_, { path: "/external" }),
                  n(o_, { path: "/support" }),
                  n(r_, { path: "/delete-account" }),
                  n(s_, { path: "/child-safety" }),
                  n(i_, { path: "/event" }),
                  n(a_, { path: "/verification" }),
                  n(c_, { path: "/subscription-terms" }),
                  n(j2, { path: "/:username/post/:postId" }),
                  n(l_, { path: "/:slug" }),
                  n(zi, { default: true }),
                ],
              }),
            }),
          }),
        ],
      }),
    }),
  });
}
ka(document.getElementById("root")).render(n(oi, { children: n(u_, {}) }));
export {
  $ as $,
  x as A,
  Oe as B,
  xi as C,
  Hi as D,
  pr as E,
  Ue as F,
  Si as G,
  Nh as H,
  _s as I,
  qe as J,
  ye as K,
  kt as L,
  Ke as M,
  f_ as N,
  di as O,
  m_ as P,
  np as Q,
  Ui as R,
  Cs as S,
  zf as T,
  Wn as U,
  Re as V,
  aw as W,
  Bi as X,
  b2 as Y,
  w1 as Z,
  gn as __,
  Pt as a,
  hi as a0,
  yi as a1,
  Yc as a2,
  fr as a3,
  _o as a4,
  ho as a5,
  ps as a6,
  co as a7,
  f1 as a8,
  Vi as a9,
  ke as aa,
  xc as ab,
  wt as ac,
  Wd as ad,
  G as ae,
  q as af,
  dr as ag,
  Ri as ah,
  fi as ai,
  hr as aj,
  ks as ak,
  Ne as b,
  Wa as c,
  I as d,
  ki as e,
  qc as f,
  mr as g,
  d_ as h,
  He as i,
  tn as j,
  Se as k,
  Ln as l,
  vt as m,
  st as n,
  Et as o,
  bt as p,
  E as q,
  ln as r,
  A as s,
  h_ as t,
  n as u,
  bi as v,
  el as w,
  Ci as x,
  W as y,
  wo as z,
};
