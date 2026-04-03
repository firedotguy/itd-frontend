const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/index-DCncHNpt.js",
      "assets/IconCheck-CCpQ_eon.js",
      "assets/index-DhOCwZAW.css",
      "assets/index-VzoboGnE.js",
      "assets/index-ysVQEOk1.css",
      "assets/index-CT7ri1Pu.js",
      "assets/index-ZVkbsz1m.css",
      "assets/index-rg50IUX8.js",
      "assets/IconChevronLeft-C4YP5sax.js",
      "assets/index-DIXM3pTD.css",
      "assets/index-BIH_ihsi.js",
      "assets/index-DI_K67MG.js",
      "assets/index-DK1lyy5c.css",
      "assets/index-B4IzU39D.js",
      "assets/index-Cmj9rins.css",
      "assets/IconEyeOff-o_RbFUtL.js",
      "assets/index-2ed4UA7H.css",
      "assets/index-hkmiX_pv.js",
      "assets/index-BkV84Ei0.css",
      "assets/index-ruzSVsPm.js",
      "assets/index-BuSB1rTU.css",
      "assets/index-DYplDNCA.js",
      "assets/index-AyR1xSDo.css",
      "assets/index-DiXDf6tA.js",
      "assets/index-BYDms0MW.css",
      "assets/index-Dx7RaqBn.js",
      "assets/index-DYMxdUD-.css",
      "assets/index-c-gAbw5O.js",
      "assets/index-BfSyWtIY.css",
      "assets/index-CSrJ0MeY.js",
      "assets/index-Tfl7NUeb.css",
      "assets/index-DRDz13FW.js",
      "assets/index-DxopF78T.css",
      "assets/index-Cgymt85z.js",
      "assets/index-sgOc3eJB.css",
      "assets/index-KVT1ctWT.js",
      "assets/index-CYFMj30R.css",
      "assets/index-D67LXInR.js",
      "assets/index-m8m8PtY3.css",
      "assets/index-Hw781Py1.js",
      "assets/index-DlXH7sLZ.css",
      "assets/index-CBcelRK0.js",
      "assets/index-DcwPAf74.css",
      "assets/index-BKxrAukA.js",
      "assets/index-cSZoRzaS.css",
      "assets/index-CbBZok-S.js",
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
  function o(s) {
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
    const i = o(s);
    fetch(s.href, i);
  }
})();
let $n;
let fe;
let Es;
let Jt;
let Cr;
let Rs;
let Ss;
let Is;
let er;
let Fo;
let Ho;
let xs;
const Pn = {};
const Ps = [];
const zi = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
const Array_isArray = Array.isArray;
function Ct(e, t) {
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
function bt(e, t, o) {
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
    a.children = arguments.length > 3 ? $n.call(arguments, 2) : o;
  }

  if (typeof e == "function" && e.defaultProps != null) {
    for (i in e.defaultProps) {
      if (a[i] === undefined) {
        a[i] = e.defaultProps[i];
      }
    }
  }

  return Rn(e, a, r, s, null);
}
function Rn(e, t, o, r, s) {
  const i = {
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
    __v: s ?? ++Es,
    __i: -1,
    __u: 0,
  };

  if (s == null && fe.vnode != null) {
    fe.vnode(i);
  }

  return i;
}
function Xi() {
  return { current: null };
}
function Re(e) {
  return e.children;
}

class mt {
  constructor(e, t) {
    this.props = e;
    this.context = t;
  }

  setState(e, t) {
    let o;

    o =
      this.__s != null && this.__s != this.state
        ? this.__s
        : (this.__s = Ct({}, this.state));

    if (typeof e == "function") {
      e = e(Ct({}, o), this.props);
    }

    if (e) {
      Ct(o, e);
    }

    if (e != null && this.__v) {
      t && this._sb.push(t);
      Wo(this);
    }
  }

  forceUpdate(e) {
    if (this.__v) {
      this.__e = true;
      e && this.__h.push(e);
      Wo(this);
    }
  }
}

function un(e, t) {
  if (t == null) {
    return e.__ ? un(e.__, e.__i + 1) : null;
  }
  let o;
  for (; t < e.__k.length; t++) {
    if ((o = e.__k[t]) != null && o.__e != null) {
      return o.__e;
    }
  }
  return typeof e.type == "function" ? un(e) : null;
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
function Wo(e) {
  if (
    (!e.__d && (e.__d = true) && Jt.push(e) && !lo.__r++) ||
    Cr != fe.debounceRendering
  ) {
    ((Cr = fe.debounceRendering) || Rs)(lo);
  }
}
function lo() {
  let e;
  let t;
  let o;
  let r;
  let s;
  let i;
  let a;
  let c = 1;

  while (Jt.length) {
    if (Jt.length > c) {
      Jt.sort(Ss);
    }

    e = Jt.shift();
    c = Jt.length;

    if (e.__d) {
      o = undefined;
      r = undefined;
      s = (r = (t = e).__v).__e;
      i = [];
      a = [];

      t.__P &&
        (((o = Ct({}, r)).__v = r.__v + 1),
        fe.vnode && fe.vnode(o),
        nr(
          t.__P,
          o,
          r,
          t.__n,
          t.__P.namespaceURI,
          32 & r.__u ? [s] : null,
          i,
          s ?? un(r),
          !!(32 & r.__u),
          a
        ),
        (o.__v = r.__v),
        (o.__.__k[o.__i] = o),
        $s(i, o, a),
        (r.__e = r.__ = null),
        o.__e != s && As(o));
    }
  }

  lo.__r = 0;
}
function Ls(e, t, o, r, s, i, a, c, u, l, h) {
  let d;
  let f;
  let m;
  let C;
  let w;
  let v;
  let p;
  const y = (r && r.__k) || Ps;
  const t_length = t.length;
  u = Yi(o, t, y, u, t_length);

  for (d = 0; d < t_length; d++) {
    if ((m = o.__k[d]) != null) {
      f = m.__i == -1 ? Pn : y[m.__i] || Pn;
      m.__i = d;
      v = nr(e, m, f, s, i, a, c, u, l, h);
      C = m.__e;

      m.ref &&
        f.ref != m.ref &&
        (f.ref && or(f.ref, null, m), h.push(m.ref, m.__c || C, m));

      w == null && C != null && (w = C);

      (p = !!(4 & m.__u)) || f.__k === m.__k
        ? (u = Ms(m, u, e, p))
        : typeof m.type == "function" && v !== undefined
        ? (u = v)
        : C && (u = C.nextSibling);

      m.__u &= -7;
    }
  }

  o.__e = w;
  return u;
}
function Yi(e, t, o, r, s) {
  let i;
  let a;
  let c;
  let u;
  let l;
  const o_length = o.length;
  let d = o_length;
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
        ? (a = e.__k[i] = Rn(null, a, null, null, null))
        : Array_isArray(a)
        ? (a = e.__k[i] = Rn(Re, { children: a }, null, null, null))
        : a.constructor === undefined && a.__b > 0
        ? (a = e.__k[i] =
            Rn(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v))
        : (e.__k[i] = a);

      u = i + f;
      a.__ = e;
      a.__b = e.__b + 1;
      c = null;
      (l = a.__i = Zi(a, o, u, d)) != -1 && (d--, (c = o[l]) && (c.__u |= 2));

      c == null || c.__v == null
        ? (l == -1 && (s > o_length ? f-- : s < o_length && f++),
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
    for (i = 0; i < o_length; i++) {
      if ((c = o[i]) != null && (2 & c.__u) == 0) {
        c.__e == r && (r = un(c));
        Ds(c, c);
      }
    }
  }
  return r;
}
function Ms(e, t, o, r) {
  let s;
  let i;
  if (typeof e.type == "function") {
    s = e.__k;

    for (i = 0; s && i < s.length; i++) {
      if (s[i]) {
        s[i].__ = e;
        t = Ms(s[i], t, o, r);
      }
    }

    return t;
  }

  if (e.__e != t) {
    r &&
      (t && e.type && !t.parentNode && (t = un(e)),
      o.insertBefore(e.__e, t || null));

    t = e.__e;
  }

  do {
    t = t && t.nextSibling;
  } while (t != null && t.nodeType == 8);
  return t;
}
function pt(e, t) {
  t = t || [];

  if (e != null && typeof e != "boolean") {
    if (Array_isArray(e)) {
      e.some((o) => {
        pt(o, t);
      });
    } else {
      t.push(e);
    }
  }

  return t;
}
function Zi(e, t, o, r) {
  let s;
  let i;
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
    s = o - 1;

    for (i = o + 1; s >= 0 || i < t.length; ) {
      if (
        (t_o = t[(a = s >= 0 ? s-- : i++)]) != null &&
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
    e[t] = o == null ? "" : typeof o != "number" || zi.test(t) ? o : `${o}px`;
  }
}
function jn(e, t, o, r, s) {
  let i;
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
    i = t != (t = t.replace(Is, "$1"));
    a = t.toLowerCase();

    t =
      a in e || t == "onFocusOut" || t == "onFocusOut" || t == "onFocusIn"
        ? a.slice(2)
        : t.slice(2);

    if (!e.l) {
      e.l = {};
    }

    e.l[t + i] = o;

    if (o) {
      if (r) {
        o.u = r.u;
      } else {
        o.u = er;
        e.addEventListener(t, i ? Ho : Fo, i);
      }
    } else {
      e.removeEventListener(t, i ? Ho : Fo, i);
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
      return o(fe.event ? fe.event(t) : t);
    }
  };
}
function nr(e, t, o, r, s, i, a, c, u, l) {
  let h;
  let d;
  let f;
  let m;
  let C;
  let w;
  let v;
  let p;
  let y;
  let T;
  let g;
  let _;
  let S;
  let k;
  let E;
  let b;
  let P;
  const t_type = t.type;
  if (t.constructor !== undefined) {
    return null;
  }

  if (128 & o.__u) {
    u = !!(32 & o.__u);
    i = [(c = t.__e = o.__e)];
  }

  if ((h = fe.__b)) {
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
          : ((t.__c = d = new mt(p, g)),
            (d.constructor = t_type),
            (d.render = Gi));

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
        d.__s == d.state && (d.__s = Ct({}, d.__s));
        Ct(d.__s, t_type.getDerivedStateFromProps(p, d.__s));
      }

      m = d.props;
      C = d.state;
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

          t.__k.some((O) => {
            if (O) {
              O.__ = t;
            }
          });

          for (_ = 0; _ < d._sb.length; _++) {
            d.__h.push(d._sb[_]);
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
            d.componentDidUpdate(m, C, w);
          });
        }
      }

      d.context = g;
      d.props = p;
      d.__P = e;
      d.__e = false;
      S = fe.__r;
      k = 0;

      if (y) {
        d.state = d.__s;
        d.__d = false;

        if (S) {
          S(t);
        }

        h = d.render(d.props, d.state, d.context);

        for (E = 0; E < d._sb.length; E++) {
          d.__h.push(d._sb[E]);
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
        } while (d.__d && ++k < 25);
      }

      d.state = d.__s;

      if (d.getChildContext != null) {
        r = Ct(Ct({}, r), d.getChildContext());
      }

      if (y && !f && d.getSnapshotBeforeUpdate != null) {
        w = d.getSnapshotBeforeUpdate(m, C);
      }

      b = h;

      if (h != null && h.type === Re && h.key == null) {
        b = Os(h.props.children);
      }

      c = Ls(e, Array_isArray(b) ? b : [b], t, o, r, s, i, a, c, u, l);
      d.base = t.__e;
      t.__u &= -161;

      if (d.__h.length) {
        a.push(d);
      }

      if (v) {
        d.__E = d.__ = null;
      }
    } catch (O) {
      t.__v = null;

      if (u || i != null) {
        if (O.then) {
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
            tr(i[P]);
          }
          Vo(t);
        }
      } else {
        t.__e = o.__e;
        t.__k = o.__k;

        if (!O.then) {
          Vo(t);
        }
      }

      fe.__e(O, t, o);
    }
  } else {
    if (i == null && t.__v == o.__v) {
      t.__k = o.__k;
      t.__e = o.__e;
    } else {
      c = t.__e = qi(o.__e, t, o, r, s, i, a, u, l);
    }
  }

  if ((h = fe.diffed)) {
    h(t);
  }

  return 128 & t.__u || c;
}
function Vo(e) {
  if (e && e.__c) {
    e.__c.__e = true;
  }

  if (e && e.__k) {
    e.__k.forEach(Vo);
  }
}
function $s(e, t, o) {
  for (let r = 0; r < o.length; r++) {
    or(o[r], o[++r], o[++r]);
  }

  if (fe.__c) {
    fe.__c(t, e);
  }

  e.some((s) => {
    try {
      e = s.__h;
      s.__h = [];

      e.some((i) => {
        i.call(s);
      });
    } catch (i) {
      fe.__e(i, s.__v);
    }
  });
}
function Os(e) {
  return typeof e != "object" || e == null || (e.__b && e.__b > 0)
    ? e
    : Array_isArray(e)
    ? e.map(Os)
    : Ct({}, e);
}
function qi(e, t, o, r, s, i, a, c, u) {
  let l;
  let h;
  let d;
  let f;
  let m;
  let C;
  let w;
  let v = o.props || Pn;

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
      fe.__m && fe.__m(t, i);
      c = false;
    }

    i = null;
  }
  if (type == null) {
    if (v !== props && (!c || e.data != props)) {
      e.data = props;
    }
  } else {
    i = i && $n.call(e.childNodes);

    if (!c && i != null) {
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
          jn(e, l, null, m, s);
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
          C = m;
          break;
        case "checked":
          w = m;
          break;
        default:
          jn(e, l, m, v[l], s);
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

      Ls(
        t.type == "template" ? e.content : e,
        Array_isArray(f) ? f : [f],
        t,
        o,
        r,
        type == "foreignObject" ? "http://www.w3.org/1999/xhtml" : s,
        i,
        a,
        i ? i[0] : o.__k && un(o, 0),
        c,
        u
      );

      if (i != null) {
        for (l = i.length; l--; ) {
          tr(i[l]);
        }
      }
    }

    if (!c) {
      l = "value";

      type == "progress" && C == null
        ? e.removeAttribute("value")
        : C != null &&
          (C !== e[l] ||
            (type == "progress" && !C) ||
            (type == "option" && C != v[l])) &&
          jn(e, l, C, v[l], s);

      l = "checked";
      w != null && w != e[l] && jn(e, l, w, v[l], s);
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
  } catch (s) {
    fe.__e(s, o);
  }
}
function Ds(e, t, o) {
  let r;
  let s;

  if (fe.unmount) {
    fe.unmount(e);
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
      } catch (i) {
        fe.__e(i, t);
      }
    }
    r.base = null;
    r.__P = null;
  }

  if ((r = e.__k)) {
    for (s = 0; s < r.length; s++) {
      if (r[s]) {
        Ds(r[s], t, o || typeof e.type != "function");
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
function Gi(e, t, o) {
  return this.constructor(e, o);
}
function An(e, t, o) {
  let r;
  let s;
  let i;
  let a;

  if (t == document) {
    t = document.documentElement;
  }

  if (fe.__) {
    fe.__(e, t);
  }

  s = (r = typeof o == "function") ? null : (o && o.__k) || t.__k;
  i = [];
  a = [];

  nr(
    t,
    (e = ((!r && o) || t).__k = bt(Re, null, [e])),
    s || Pn,
    Pn,
    t.namespaceURI,
    !r && o ? [o] : s ? null : t.firstChild ? $n.call(t.childNodes) : null,
    i,
    !r && o ? o : s ? s.__e : t.firstChild,
    r,
    a
  );

  $s(i, e, a);
}
function Bs(e, t) {
  An(e, t, Bs);
}
function Us(e, t, o) {
  let r;
  let s;
  let i;
  let a;
  const c = Ct({}, e.props);

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
    c.children = arguments.length > 3 ? $n.call(arguments, 2) : o;
  }

  return Rn(e.type, c, r || e.key, s || e.ref, null);
}
function hn(e) {
  function t(o) {
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
            Wo(a);
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

    return o.children;
  }
  t.__c = `__cC${xs++}`;
  t.__ = e;
  t.Provider = t;
  t.__l = t;

  (t.Consumer = (o, r) => o.children(r)).contextType = t;

  return t;
}
$n = Ps.slice;

fe = {
  __e(e, t, o, r) {
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

Es = 0;

mt.prototype.render = Re;
Jt = [];

Rs =
  typeof Promise == "function"
    ? Promise.prototype.then.bind(Promise.resolve())
    : setTimeout;

Ss = (e, t) => e.__v.__b - t.__v.__b;

lo.__r = 0;
Is = /(PointerCapture)$|Capture$/i;
er = 0;
Fo = br(false);
Ho = br(true);
xs = 0;
let Ki = 0;
function n(e, t, o, r, s, i) {
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
    __v: --Ki,
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

  if (fe.vnode) {
    fe.vnode(l);
  }

  return l;
}
let Ut;
let xe;
let To;
let Tr;
let dn = 0;
const Fs = [];
const $e = fe;

const { __b, __r, diffed, __c, unmount, __ } = $e;

function fn(e, t) {
  if ($e.__h) {
    $e.__h(xe, e, dn || t);
  }

  dn = 0;
  const o = xe.__H || (xe.__H = { __: [], __h: [] });

  if (e >= o.__.length) {
    o.__.push({});
  }

  return o.__[e];
}
function x(e) {
  dn = 1;
  return rr(Vs, e);
}
function rr(e, t, o) {
  const r = fn(Ut++, 2);
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
    xe.__f = true;

    var { shouldComponentUpdate, componentWillUpdate } = xe;

    xe.componentWillUpdate = function (c, u, l) {
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

    xe.shouldComponentUpdate = s;
  }

  return r.__N || r.__;
}
function W(e, t) {
  const o = fn(Ut++, 3);

  if (!$e.__s && sr(o.__H, t)) {
    o.__ = e;
    o.u = t;
    xe.__H.__h.push(o);
  }
}
function Dn(e, t) {
  const o = fn(Ut++, 4);

  if (!$e.__s && sr(o.__H, t)) {
    o.__ = e;
    o.u = t;
    xe.__h.push(o);
  }
}
function I(e) {
  dn = 5;

  return Se(
    () => ({
      current: e,
    }),
    []
  );
}
function mn(e, t, o) {
  dn = 6;

  Dn(
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
function Se(e, t) {
  const o = fn(Ut++, 7);

  if (sr(o.__H, t)) {
    o.__ = e();
    o.__H = t;
    o.__h = e;
  }

  return o.__;
}
function R(e, t) {
  dn = 8;

  return Se(() => e, t);
}
function po(e) {
  const t = xe.context[e.__c];
  const o = fn(Ut++, 9);
  o.c = e;
  return t ? (o.__ == null && ((o.__ = true), t.sub(xe)), t.props.value) : e.__;
}
function Hs(e, t) {
  if ($e.useDebugValue) {
    $e.useDebugValue(t ? t(e) : e);
  }
}
function Ws() {
  const e = fn(Ut++, 11);
  if (!e.__) {
    for (var t = xe.__v; t !== null && !t.__m && t.__ !== null; ) {
      t = t.__;
    }
    const o = t.__m || (t.__m = [0, 0]);
    e.__ = `P${o[0]}-${o[1]++}`;
  }
  return e.__;
}
function Ji() {
  for (let e; (e = Fs.shift()); ) {
    if (e.__P && e.__H) {
      try {
        e.__H.__h.forEach(so);
        e.__H.__h.forEach(jo);
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

  Ut = 0;
  const t = (xe = e.__c).__H;

  if (t) {
    if (To === xe) {
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
      t.__h.forEach(so);
      t.__h.forEach(jo);
      t.__h = [];
      Ut = 0;
    }
  }

  To = xe;
};

$e.diffed = (e) => {
  if (diffed) {
    diffed(e);
  }

  const e_c = e.__c;

  if (e_c && e_c.__H) {
    e_c.__H.__h.length &&
      ((Fs.push(e_c) !== 1 && Tr === $e.requestAnimationFrame) ||
        ((Tr = $e.requestAnimationFrame) || Qi)(Ji));

    e_c.__H.__.forEach((o) => {
      if (o.u) {
        o.__H = o.u;
      }

      o.u = undefined;
    });
  }

  To = null;
  xe = null;
};

$e.__c = (e, t) => {
  t.some((o) => {
    try {
      o.__h.forEach(so);

      o.__h = o.__h.filter((r) => !r.__ || jo(r));
    } catch (r) {
      t.some((s) => {
        if (s.__h) {
          s.__h = [];
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
        so(r);
      } catch (s) {
        t = s;
      }
    });

    e_c.__H = undefined;
    t && $e.__e(t, e_c.__v);
  }
};

const Pr = typeof requestAnimationFrame == "function";
function Qi(e) {
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
function so(e) {
  const t = xe;
  const e_c = e.__c;

  if (typeof e_c == "function") {
    e.__c = undefined;
    e_c();
  }

  xe = t;
}
function jo(e) {
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
function zo(e, t) {
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
  const r = x({ t: { __: o, u: t } });
  const s = r[0].t;
  const [, i] = r;

  Dn(() => {
    s.__ = o;
    s.u = t;

    if (ko(s)) {
      i({ t: s });
    }
  }, [e, o, t]);

  W(() => {
    if (ko(s)) {
      i({ t: s });
    }

    return e(() => {
      if (ko(s)) {
        i({ t: s });
      }
    });
  }, [e]);

  return o;
}
function ko(e) {
  let t;
  let o;

  const { u, __: _ } = e;

  try {
    const i = u();
    return !(
      ((t = _) === (o = i) && (t !== 0 || 1 / t == 1 / o)) ||
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
function Zs() {
  return [false, Xs];
}
const qs = Dn;

class Xo {
  constructor(e, t) {
    this.props = e;
    this.context = t;
  }

  shouldComponentUpdate(e, t) {
    return zo(this.props, e) || zo(this.state, t);
  }
}

function Gs(e, t) {
  function o(s) {
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

    return zo(this.props, s);
  }
  function r(s) {
    this.shouldComponentUpdate = o;
    return bt(e, s);
  }
  r.displayName = `Memo(${e.displayName || e.name})`;
  r.prototype.isReactComponent = true;
  r.__f = true;
  r.type = e;
  return r;
}
(Xo.prototype = new mt()).isPureReactComponent = true;

const {
  __b: _b,
  __e,
  unmount: unmount_2,
  event,
  vnode,
  __r: _r_1,
  diffed: diffed_2,
} = fe;

fe.__b = (e) => {
  if (e.type && e.type.__f && e.ref) {
    e.props.ref = e.ref;
    e.ref = null;
  }

  if (_b) {
    _b(e);
  }
};
const ea =
  (typeof Symbol !== "undefined" &&
    Symbol.for &&
    Symbol.for("react.forward_ref")) ||
  3911;
function Bn(e) {
  class t {
    constructor(o) {
      const r = js({}, o);
      delete r.ref;
      return e(r, o.ref || null);
    }

    static componentWillUnmount() {
      An(null, t.v);
      t.v = null;
      t.h = null;
    }
  }

  t.$$typeof = ea;
  t.render = e;
  t.prototype.isReactComponent = true;
  t.__f = true;
  t.displayName = `ForwardRef(${e.displayName || e.name})`;
  return t;
}

const Lr = (e, t) => e == null || pt(pt(e).map(t));

const ta = {
  map: Lr,
  forEach: Lr,
  count(e) {
    return e ? pt(e).length : 0;
  },
  only(e) {
    const t = pt(e);
    if (t.length !== 1) {
      throw "Children.only";
    }
    return t[0];
  },
  toArray: pt,
};

fe.__e = (e, t, o, r) => {
  if (e.then) {
    let s;
    for (let i = t; (i = i.__); ) {
      if ((s = i.__c) && s.__c) {
        if (t.__e == null) {
          t.__e = o.__e;
          t.__k = o.__k;
        }

        return s.__c(e, t);
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

class Sn {
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
    const s = t.__a && bt(Re, null, e.fallback);

    if (s) {
      s.__u &= -33;
    }

    return [bt(Re, null, t.__a || e.children), s];
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
    return s ? bt(s, a) : null;
  }
  i.displayName = "Lazy";
  i.__f = true;
  return i;
}

class bn {
  constructor() {
    this.i = null;
    this.l = null;
  }

  render(e) {
    this.i = null;
    this.l = new Map();
    const t = pt(e.children);

    if (e.revealOrder && e.revealOrder[0] === "b") {
      t.reverse();
    }

    for (let o = t.length; o--; ) {
      this.l.set(t[o], (this.i = [1, 0, this.i]));
    }
    return e.children;
  }
}

fe.unmount = (e) => {
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

(Sn.prototype = new mt()).__c = function (e, t) {
  const t_c = t.__c;
  const r = this;

  if (r.o == null) {
    r.o = [];
  }

  r.o.push(t_c);
  const s = Qs(r.__v);

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
function oa(e) {
  this.getChildContext = () => e.context;

  return e.children;
}
function ra(e) {
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

  An(bt(oa, { context: t.context }, e.__v), t.v);
}
function vt(e, t) {
  const o = bt(ra, { __v: e, h: t });
  o.containerInfo = t;
  return o;
}

(bn.prototype = new mt()).__a = function (e) {
  const t = this;
  const o = Qs(t.__v);
  const r = t.l.get(e);
  r[0]++;

  return (s) => {
    const i = () => {
      if (t.props.revealOrder) {
        r.push(s);
        $r(t, e, r);
      } else {
        s();
      }
    };

    if (o) {
      o(i);
    } else {
      i();
    }
  };
};

bn.prototype.componentDidUpdate = bn.prototype.componentDidMount = function () {
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

const sa =
  /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/;

const ia = /^on(Ani|Tra|Tou|BeforeInp|Compo)/;
const aa = /[A-Z0-9]/g;
const ca = typeof document !== "undefined";

const la = (e) =>
  (typeof Symbol !== "undefined" && typeof Symbol() == "symbol"
    ? /fil|che|rad/
    : /fil|che|ra/
  ).test(e);

function ti(e, t, o) {
  if (t.__k == null) {
    t.textContent = "";
  }

  An(e, t);

  if (typeof o == "function") {
    o();
  }

  return e ? e.__c : null;
}
function ua(e, t, o) {
  Bs(e, t);

  if (typeof o == "function") {
    o();
  }

  return e ? e.__c : null;
}
mt.prototype.isReactComponent = {};

[
  "componentWillMount",
  "componentWillReceiveProps",
  "componentWillUpdate",
].forEach((e) => {
  Object.defineProperty(mt.prototype, e, {
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

function da() {}
function ha() {
  return this.cancelBubble;
}
function fa() {
  return this.defaultPrevented;
}
fe.event = (e) => {
  if (event) {
    e = event(e);
  }

  e.persist = da;
  e.isPropagationStopped = ha;
  e.isDefaultPrevented = fa;
  e.nativeEvent = e;
  return e.nativeEvent;
};
let ir;

const ma = {
  enumerable: false,
  configurable: true,
  get() {
    return this.class;
  },
};

fe.vnode = (e) => {
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
            (ca && a === "children" && type === "noscript") ||
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
              la(props.type)
            ) {
              if (u === "onfocus") {
                a = "onfocusin";
              } else if (u === "onblur") {
                a = "onfocusout";
              } else if (ia.test(a)) {
                a = u;
              }
            } else {
              u = a = "oninput";
            }
          } else if (i && sa.test(a)) {
            a = a.replace(aa, "-$&").toLowerCase();
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
        s.value = pt(props.children).forEach((l) => {
          l.props.selected = s.value.includes(l.props.value);
        });
      }

      if (type == "select" && s.defaultValue != null) {
        s.value = pt(props.children).forEach((l) => {
          l.props.selected = s.multiple
            ? s.defaultValue.includes(l.props.value)
            : s.defaultValue == l.props.value;
        });
      }

      if (props.class && !props.className) {
        s.class = props.class;
        Object.defineProperty(s, "className", ma);
      } else if (
        (props.className && !props.class) ||
        (props.class && props.className)
      ) {
        s.class = s.className = props.className;
      }

      t.props = s;
    })(e);
  }

  e.$$typeof = ei;

  if (vnode) {
    vnode(e);
  }
};
fe.__r = (e) => {
  if (_r_1) {
    _r_1(e);
  }

  ir = e.__c;
};
fe.diffed = (e) => {
  if (diffed_2) {
    diffed_2(e);
  }

  const { props, __e: _e } = e;

  if (
    _e != null &&
    e.type === "textarea" &&
    "value" in props &&
    props.value !== _e.value
  ) {
    _e.value = props.value == null ? "" : props.value;
  }

  ir = null;
};
const pa = {
  ReactCurrentDispatcher: {
    current: {
      readContext(e) {
        return ir.__n[e.__c].props.value;
      },
      useCallback: R,
      useContext: po,
      useDebugValue: Hs,
      useDeferredValue: Ys,
      useEffect: W,
      useId: Ws,
      useImperativeHandle: mn,
      useInsertionEffect: qs,
      useLayoutEffect: Dn,
      useMemo: Se,
      useReducer: rr,
      useRef: I,
      useState: x,
      useSyncExternalStore: zs,
      useTransition: Zs,
    },
  },
};
function ga(e) {
  return bt.bind(null, e);
}
function go(e) {
  return !!e && e.$$typeof === ei;
}
function va(e) {
  return go(e) && e.type === Re;
}
function wa(e) {
  return (
    !!e &&
    !!e.displayName &&
    (typeof e.displayName == "string" || e.displayName instanceof String) &&
    e.displayName.startsWith("Memo(")
  );
}
function ya(e) {
  return go(e) ? Us(...arguments) : e;
}
function ni(e) {
  return !!e.__k && (An(null, e), true);
}
function _a(e) {
  return (e && (e.base || (e.nodeType === 1 && e))) || null;
}

const Ca = (e, t) => e(t);

const Na = (e, t) => e(t);

const oi = Re;
const ba = go;

const Tn = {
  useState: x,
  useId: Ws,
  useReducer: rr,
  useEffect: W,
  useLayoutEffect: Dn,
  useInsertionEffect: qs,
  useTransition: Zs,
  useDeferredValue: Ys,
  useSyncExternalStore: zs,
  startTransition: Xs,
  useRef: I,
  useImperativeHandle: mn,
  useMemo: Se,
  useCallback: R,
  useContext: po,
  useDebugValue: Hs,
  version: "18.3.1",
  Children: ta,
  render: ti,
  hydrate: ua,
  unmountComponentAtNode: ni,
  createPortal: vt,
  createElement: bt,
  createContext: hn,
  createFactory: ga,
  cloneElement: ya,
  createRef: Xi,
  Fragment: Re,
  isValidElement: go,
  isElement: ba,
  isFragment: va,
  isMemo: wa,
  findDOMNode: _a,
  Component: mt,
  PureComponent: Xo,
  memo: Gs,
  forwardRef: Bn,
  flushSync: Na,
  unstable_batchedUpdates: Ca,
  StrictMode: oi,
  Suspense: Sn,
  SuspenseList: bn,
  lazy: Pe,
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: pa,
};

function Ta(e) {
  return {
    render(t) {
      ti(t, e);
    },
    unmount() {
      ni(e);
    },
  };
}
const ka = "modulepreload";

const Ea = (e) => `/${e}`;

const Fr = {};

const Ae = (t, o, r) => {
  let s = Promise.resolve();
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
    s = u(
      o.map((l) => {
        l = Ea(l);

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
        f.rel = h ? "stylesheet" : ka;

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
          return new Promise((m, C) => {
            f.addEventListener("load", m);

            f.addEventListener("error", () =>
              C(new Error(`Unable to preload CSS for ${l}`))
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

const Ra = {};
function zn(e, t) {
  for (const o in t) {
    e[o] = t[o];
  }
  return e;
}
function ri(e, t, o) {
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
  e = Yo(e.replace(s, ""));
  t = Yo(t || "");
  for (let h = Math.max(e.length, t.length), d = 0; d < h; d++) {
    if (t[d] && t[d].charAt(0) === ":") {
      const f = t[d].replace(/(^:|[+*?]+$)/g, "");
      const m = (t[d].match(/[+*?]+$/) || Ra)[0] || "";
      const C = ~m.indexOf("+");
      const w = ~m.indexOf("*");
      const v = e[d] || "";
      if (!v && !w && (!m.includes("?") || C)) {
        r = false;
        break;
      }
      a[f] = decodeURIComponent(v);

      if (C || w) {
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
function Sa(e, t) {
  return e.rank < t.rank ? 1 : e.rank > t.rank ? -1 : e.index - t.index;
}
function Ia(e, t) {
  e.index = t;

  e.rank = ((o) => (o.props.default ? 0 : Yo(o.props.path).map(xa).join("")))(
    e
  );

  return e.props;
}
function Yo(e) {
  return e.replace(/(^\/+|\/+$)/g, "").split("/");
}
function xa(e) {
  return e.charAt(0) == ":"
    ? 1 + "*+?".indexOf(e.charAt(e.length - 1)) || 4
    : 5;
}
const Pa = {};
const Qt = [];
const In = [];
let ot = null;
const ar = { url: cr() };
const si = hn(ar);
function Un() {
  const e = po(si);
  if (e === ar) {
    const t = x()[1];
    W(() => {
      In.push(t);

      return () => In.splice(In.indexOf(t), 1);
    }, []);
  }
  return [e, $];
}
function cr() {
  let e;
  return `${
    (e =
      ot && ot.location
        ? ot.location
        : ot && ot.getCurrentLocation
        ? ot.getCurrentLocation()
        : typeof location !== "undefined"
        ? location
        : Pa).pathname || ""
  }${e.search || ""}`;
}

export function $(e, t = false) {
  if (typeof e != "string" && e.url) {
    t = e.replace;
    e = e.url;
  }

  if (
    ((o) => {
      for (let r = Qt.length; r--; ) {
        if (Qt[r].canRoute(o)) {
          return true;
        }
      }
      return false;
    })(e)
  ) {
    ((o, r = "push") => {
      if (ot && ot[r]) {
        ot[r](o);
      } else if (typeof history !== "undefined" && history[`${r}State`]) {
        history[`${r}State`](null, null, o);
      }
    })(e, t ? "replace" : "push");
  }

  return ii(e);
}

function ii(e) {
  let t = false;
  for (let o = 0; o < Qt.length; o++) {
    if (Qt[o].routeTo(e)) {
      t = true;
    }
  }
  return t;
}
function Aa(e) {
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
function Ma(e) {
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
        if (Aa(e_target)) {
          return La(e);
        }
      }
    } while ((e_target = e_target.parentNode));
  }
}
function ai(e) {
  if (e.history) {
    ot = e.history;
  }

  this.state = { url: e.url || cr() };
}
zn((ai.prototype = new mt()), {
  shouldComponentUpdate(e) {
    return (
      e.static !== true ||
      e.url !== this.props.url ||
      e.url !== this.props.url ||
      e.onChange !== this.props.onChange
    );
  },
  canRoute(e) {
    const t = pt(this.props.children);
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

      ot ||
        addEventListener("popstate", () => {
          ii(cr());
        });

      addEventListener("click", Ma);
    }

    Qt.push(this);

    if (ot) {
      this.u = ot.listen((t) => {
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

    Qt.splice(Qt.indexOf(this), 1);
  },
  componentWillUpdate() {
    this.p = true;
  },
  componentDidUpdate() {
    this.p = false;
  },
  g(e, t) {
    e = e.filter(Ia).sort(Sa);

    for (const r of e) {
      const s = ri(t, r.props.path, r.props);
      if (s) {
        return [r, s];
      }
    }
  },
  render(e, t) {
    let o;
    let r;
    const e_onChange = e.onChange;
    const t_url = t.url;
    let a = this.c;
    const c = this.g(pt(e.children), t_url);

    if (c) {
      r = Us(
        c[0],
        zn(zn({ url: t_url, matches: (o = c[1]) }, o), {
          key: undefined,
          ref: undefined,
        })
      );
    }

    if (t_url !== (a && a.url)) {
      zn(
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
      for (let u = In.length; u--; ) {
        In[u]({});
      }

      if (typeof e_onChange == "function") {
        e_onChange(a);
      }
    }

    return bt(si.Provider, { value: a }, r);
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

  const s = () => t;

  const c = {
    setState: r,
    getState: s,
    getInitialState: () => u,
    subscribe: (l) => {
      o.add(l);

      return () => o.delete(l);
    },
  };

  const u = (t = e(r, s, c));
  return c;
};

const $a = (e) => (e ? Wr(e) : Wr);

const Oa = (e) => e;

function Da(e, t = Oa) {
  const o = Tn.useSyncExternalStore(
    e.subscribe,
    Tn.useCallback(() => t(e.getState()), [e, t]),
    Tn.useCallback(() => t(e.getInitialState()), [e, t])
  );
  Tn.useDebugValue(o);
  return o;
}

const Vr = (e) => {
  const t = $a(e);

  const o = (r) => Da(t, r);

  Object.assign(o, t);
  return o;
};

const Et = (e) => (e ? Vr(e) : Vr);

function lr(e, t) {
  let o;
  try {
    o = e();
  } catch {
    return;
  }
  return {
    getItem: (s) => {
      let i;

      const a = (u) => (u === null ? null : JSON.parse(u, undefined));

      const c = (i = o.getItem(s)) != null ? i : null;
      return c instanceof Promise ? c.then(a) : a(c);
    },
    setItem: (s, i) => o.setItem(s, JSON.stringify(i, undefined)),
    removeItem: (s) => o.removeItem(s),
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

const ur = (e, t) => (o, r, s) => {
  let i = {
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
  let i_storage = i.storage;
  if (!i_storage) {
    return e(
      (...w) => {
        console.warn(
          `[zustand persist middleware] Unable to update item '${i.name}', the given storage is currently unavailable.`
        );

        o(...w);
      },
      r,
      s
    );
  }

  const h = () => {
    const w = i.partialize({ ...r() });
    return i_storage.setItem(i.name, { state: w, version: i.version });
  };

  const s_setState = s.setState;
  s.setState = (w, v) => {
    s_setState(w, v);
    return h();
  };
  const f = e(
    (...w) => {
      o(...w);
      return h();
    },
    r,
    s
  );
  s.getInitialState = () => f;
  let m;
  const C = () => {
    let v;
    if (!i_storage) {
      return;
    }
    a = false;

    c.forEach((y) => {
      let T;
      return y((T = r()) != null ? T : f);
    });

    const p =
      (v = i.onRehydrateStorage) == null ||
      v.call(i, (w = r()) != null ? w : f) ||
      v.call(i, (w = r()) != null ? w : f) ||
      undefined;
    return Zo(i_storage.getItem.bind(i_storage))(i.name)
      .then((y) => {
        if (y) {
          if (typeof y.version == "number" && y.version !== i.version) {
            if (i.migrate) {
              const T = i.migrate(y.state, y.version);
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
        const [g, _] = y;
        m = i.merge(_, (T = r()) != null ? T : f);
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

  s.persist = {
    setOptions: (w) => {
      i = { ...i, ...w };

      if (w.storage) {
        i_storage = w.storage;
      }
    },
    clearStorage: () => {
      i_storage?.removeItem(i.name);
    },
    getOptions: () => i,
    rehydrate: () => C(),
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

  if (!i.skipHydration) {
    C();
  }

  return m || f;
};

const Ua = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";

const Fa = () => {
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

const io = (e) => {
  const t = e === "system" ? Ua() : e;
  document.documentElement.setAttribute("data-theme", t);
};

const Ha = Et()(
  ur(
    (e) => ({
      theme: Fa(),

      setTheme: (t) => {
        io(t);
        e({ theme: t });
      },

      toggleTheme: () =>
        e((t) => {
          const o = t.theme === "light" ? "dark" : "light";
          io(o);
          return { theme: o };
        }),
    }),
    {
      name: "theme-storage",
      onRehydrateStorage: () => (e) => {
        if (e?.theme) {
          io(e.theme);
        }
      },
    }
  )
);

if (typeof window !== "undefined") {
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", () => {
      if (Ha.getState().theme === "system") {
        io("system");
      }
    });
}

const ci = Et((e) => ({
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

function Ue(e) {
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
function Wa(e) {
  return "accessToken" in e;
}
function Va(e) {
  return "accessToken" in e;
}
const ja = 4000; /* 4e3 */

const ln = Et((e, t) => ({
  toasts: [],

  addToast: (o) => {
    const r = `toast-${Date.now()}-${Math.random().toString(36).slice(2)}`;
    const s = o.duration ?? ja;

    e((i) => ({
      toasts: [...i.toasts, { ...o, id: r, duration: s }],
    }));

    if (s > 0) {
      setTimeout(() => {
        t().removeToast(r);
      }, s);
    }

    return r;
  },

  removeToast: (o) => {
    e((r) => ({
      toasts: r.toasts.filter((s) => s.id !== o),
    }));
  },

  clearAll: () => {
    e({ toasts: [] });
  },
}));

const We = {
  success: (e, t) =>
    ln.getState().addToast({ type: "success", message: e, duration: t }),
  error: (e, t) =>
    ln.getState().addToast({ type: "error", message: e, duration: t }),
  warning: (e, t) =>
    ln.getState().addToast({ type: "warning", message: e, duration: t }),
  info: (e, t) =>
    ln.getState().addToast({ type: "info", message: e, duration: t }),
};

function za() {
  const e = "device_id";
  let t = localStorage.getItem(e);

  if (!t) {
    t = crypto.randomUUID();
    localStorage.setItem(e, t);
  }

  return t;
}
const jr = za();
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
        We.error("Вы не можете сделать это сегодня. Попробуйте завтра.");
        return;
      }
      We.error(t.message || "Произошла ошибка");
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
  createApiError(t, o, r, s) {
    const i = new Error(o);
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
  async executeRequest(t, o, r, s, i = false) {
    const a = this.buildUrl(o);
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
      if (d.status === et.UNAUTHORIZED && !i && !f && this.accessToken) {
        const m = await this.refreshAccessToken();
        if (m) {
          this.setAccessToken(m);
          return this.executeRequest(t, o, r, s, true);
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
          ke.NETWORK_ERROR
        );

        if (!i) {
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
    const s = this.buildHeaders(o?.headers);
    const i = new AbortController();
    const a = o?.timeout ?? this.defaultTimeout;

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
        ? this.createApiError(0, "Request timeout", ke.TIMEOUT)
        : this.createApiError(0, "Network error", ke.NETWORK_ERROR);
    }
  }
  async uploadFormData(t, o, r, s = false) {
    const i = this.buildUrl(t);
    const a = { "X-Requested-With": "XMLHttpRequest", "X-Device-Id": jr };

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
        body: o,
        signal: c.signal,
        credentials: "include",
      });
      clearTimeout(l);

      if (h.status === et.UNAUTHORIZED && !s && this.accessToken) {
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
          ke.NETWORK_ERROR
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
const G = new li({ baseURL: "/api", timeout: 30000 /* 3e4 */ });
const He = new li({ baseURL: "/api/v1/auth", timeout: 30000 /* 3e4 */ });

const K = {
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
  },
  verification: {
    status: "/verification/status",
    submit: "/verification/submit",
  },
  platform: { changelog: "/platform/changelog" },
};

const xt = {
  async register(e) {
    return await He.post(K.auth.signUp, e);
  },
  async login(e) {
    return await He.post(K.auth.signIn, e);
  },
  async verifyOtp(e) {
    return await He.post(K.auth.verifyOtp, e);
  },
  async resendOtp(e) {
    await He.post(K.auth.resendOtp, e);
  },
  async refreshSession() {
    return await He.post(K.auth.refresh);
  },
  async logout() {
    await He.post(K.auth.logout);
  },
  async logoutAll() {
    await He.post(`${K.auth.logout}-all`);
  },
  async forgotPassword(e) {
    return await He.post(K.auth.forgotPassword, e);
  },
  async resetPassword(e) {
    await He.post(K.auth.resetPassword, e);
  },
  async changePassword(e) {
    await He.post(K.auth.changePassword, e);
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
const Xa = 60 * 1000; /* 1e3 */
setInterval(() => Zt.cleanup(), 120 * 1000 /* 1e3 */);
const Nt = {
  async checkUsername(e) {
    return (
      await G.get(`/users/check-username?username=${encodeURIComponent(e)}`)
    ).available;
  },
  async createProfile(e) {
    return await G.post("/users/profile", e);
  },
  async getMyProfile() {
    const e = await G.get(K.users.me);
    return zr(e);
  },
  async updateProfile(e) {
    return await G.put(K.users.updateProfile, e);
  },
  async getProfileByUsername(e) {
    const t = e.toLowerCase();
    const o = Zt.get(t);

    if (o && Zt.isFresh(t, Xa)) {
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
    const o = await G.get(K.users.profile(e));
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
    await G.post(K.users.follow(e), {});
  },
  async unfollowUser(e) {
    await G.delete(K.users.follow(e));
  },
  async pinPost(e) {
    await G.post(K.posts.pin(e));
  },
  async unpinPost(e) {
    await G.delete(K.posts.pin(e));
  },
  async getPrivacySettings() {
    const e = await G.get(K.users.privacy);
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

    await G.put(K.users.privacy, t);
  },
  async getVerificationStatus() {
    try {
      return await G.get(K.verification.status);
    } catch (e) {
      if (e && typeof e == "object" && "status" in e && e.status === 404) {
        return null;
      }
      throw e;
    }
  },
  async submitVerificationRequest(e) {
    return await G.post(K.verification.submit, { videoUrl: e });
  },
  async getMyPins() {
    const e = await G.get(K.users.pins);
    const t = e.data ?? e;
    return { pins: t.pins ?? [], activePin: t.activePin ?? null };
  },
  async setActivePin(e) {
    await G.put(K.users.setPin, { slug: e });
  },
  async removeActivePin() {
    await G.delete(K.users.setPin);
  },
  async deleteAccount() {
    await G.delete(K.users.deleteAccount);
  },
  async restoreAccount() {
    await G.post(K.users.restoreAccount);
  },
};
function gn(e) {
  return e.pagination?.nextCursor ?? e.cursor ?? null;
}
const Pt = new dr(50, 300 * 1000 /* 1e3 */);
const Ya = 60 * 1000; /* 1e3 */
setInterval(() => Pt.cleanup(), 120 * 1000 /* 1e3 */);
function Za(e) {
  return {
    id: e.id,
    username: e.username,
    displayName: e.displayName,
    avatar: e.avatar,
    isVerified: e.isVerified ?? e.verified ?? false,
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
  const s = e.stats?.views ?? e.viewsCount ?? 0;
  const i = e.stats?.comments ?? e.commentsCount ?? 0;
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
    stats: { views: s, comments: i, reposts: a },
    originalPost: e.originalPost ? qt(e.originalPost) : null,
    dominantEmoji: e.dominantEmoji ?? null,
    createdAt: e.createdAt,
    editedAt: e.editedAt ?? null,
  };
}

const Ge = {
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
    const s = `${K.posts.list}${r ? `?${r}` : ""}`;
    const i = await G.get(s);
    return { data: i.data.posts.map(qt), nextCursor: gn(i.data) };
  },
  async getPost(e) {
    const t = await G.get(K.posts.single(e));
    return qt(t.data);
  },
  async getUserWall(e, t = {}) {
    if (!t.cursor) {
      const o = e;
      const r = Pt.get(o);
      const s = r && r.pinnedPostId === (t.pinnedPostId ?? null);

      if (r && s && Pt.isFresh(o, Ya)) {
        this._fetchAndCacheWall(e, t, o).catch(() => {});
        return { data: r.posts, nextCursor: r.nextCursor };
      }

      if (r && s) {
        this._fetchAndCacheWall(e, t, o).catch(() => {});
        return { data: r.posts, nextCursor: r.nextCursor };
      }

      return this._fetchAndCacheWall(e, t, o);
    }
    return this._fetchWall(e, t);
  },
  async _fetchAndCacheWall(e, t, o) {
    const r = await this._fetchWall(e, t);

    Pt.set(o, {
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
    const s = `${K.posts.byUser(e)}${r ? `?${r}` : ""}`;
    const i = await G.get(s);
    return { data: i.data.posts.map(qt), nextCursor: gn(i.data) };
  },
  invalidateWallCache(e) {
    Pt.delete(e);
  },
  updatePostInWallCache(e, t, o) {
    const r = Pt.get(e);
    if (r) {
      const s = r.posts.map((i) => (i.id === t ? { ...i, ...o } : i));
      Pt.set(e, { ...r, posts: s });
    }
  },
  removePostFromWallCache(e, t) {
    const o = Pt.get(e);
    if (o) {
      const r = o.posts.filter((s) => s.id !== t);
      Pt.set(e, { ...o, posts: r });
    }
  },
  async likePost(e) {
    await G.post(K.posts.like(e));
  },
  async unlikePost(e) {
    await G.delete(K.posts.like(e));
  },
  async createPost(e) {
    return await G.post(K.posts.create, {
      content: e.text,
      spans: e.spans,
      wallRecipientId: e.wallOwnerId,
      attachmentIds: e.attachmentIds,
      poll: e.poll,
    });
  },
  async createRepost(e, t) {
    return await G.post(K.posts.repost(e), { content: t });
  },
  async editPost(e, t) {
    const o = t.content ?? t.text;
    await G.put(K.posts.update(e), { content: o, spans: t.spans });
  },
  async deletePost(e) {
    await G.delete(K.posts.delete(e));
  },
  async restorePost(e) {
    await G.post(K.posts.restore(e));
  },
  async trackView(e) {
    G.post(K.posts.view(e)).catch(() => {});
  },
  async trackViewsBatch(e) {
    if (e.length !== 0) {
      for (const t of e) {
        G.post(K.posts.view(t)).catch(() => {});
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
    const s = `${K.posts.byUser(e)}${r ? `?${r}` : ""}`;
    const i = await G.get(s);
    return { data: i.data.posts.map(qt), nextCursor: gn(i.data) };
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
    const s = `${K.posts.likedByUser(e)}${r ? `?${r}` : ""}`;
    const i = await G.get(s);
    return { data: i.data.posts.map(qt), nextCursor: gn(i.data) };
  },
  async pinPost(e) {
    await G.post(K.posts.pin(e));
  },
  async unpinPost(e) {
    await G.delete(K.posts.pin(e));
  },
  async votePoll(e, t) {
    const o = await G.post(K.posts.pollVote(e), { optionIds: t });
    return o.data ?? o;
  },
  async unrepost(e) {
    await G.delete(K.posts.repost(e));
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
    const s = `${K.hashtags.posts(e)}${r ? `?${r}` : ""}`;
    const i = await G.get(s);
    return { data: i.data.posts.map(qt), nextCursor: gn(i.data) };
  },
};

const qa = { new: "newest", old: "oldest", popular: "popular" };
function Ga(e) {
  return {
    id: e.id,
    username: e.username,
    displayName: e.displayName,
    avatar: e.avatar,
    isVerified: e.isVerified ?? e.verified ?? false,
    pin: e.pin ?? null,
  };
}
function qo(e) {
  const t = e.stats?.reactions ?? e.likesCount ?? 0;
  const o = e.stats?.replies ?? e.repliesCount ?? 0;
  const r = e.viewerStatus?.reaction ?? (e.isLiked ? "like" : null);
  const s = e.text ?? e.content ?? "";
  return {
    id: e.id,
    postId: e.postId,
    author: Ga(e.author),
    parentId: e.parentId,
    rootId: e.rootId ?? null,
    text: s,
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

const wt = {
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
    const s = `${K.posts.comments(e)}${r ? `?${r}` : ""}`;
    const i = await G.get(s);
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
    const s = `${K.comments.replies(e)}${r ? `?${r}` : ""}`;
    const i = await G.get(s);
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
    return { data: a.map(qo), nextCursor: c };
  },
  async createComment(e, t, o, r, s) {
    return await G.post(K.posts.comments(e), {
      content: t,
      attachmentIds: s?.map((i) => i.mediaId),
    });
  },
  async createReply(e, t, o, r, s) {
    return await G.post(K.comments.replies(e), {
      content: t,
      replyToUserId: r,
      attachmentIds: s?.map((i) => i.mediaId),
    });
  },
  async editComment(e, t, o) {
    await G.patch(K.comments.edit(e), { content: t });
  },
  async deleteComment(e) {
    await G.delete(K.comments.delete(e));
  },
  async likeComment(e) {
    await G.post(K.comments.like(e));
  },
  async unlikeComment(e) {
    await G.delete(K.comments.like(e));
  },
};

const Ka = {
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
  const t = Ka[e.type] ?? "follow";
  const o = e.entityId ?? e.targetId ?? null;
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
    entityId: o,
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

const Ht = {
  async getNotifications(e = {}) {
    const t = new URLSearchParams();
    const o = e.limit ?? 20;
    t.set("limit", o.toString());
    const r = e.cursor ? parseInt(e.cursor) : e.offset ?? 0;

    if (r > 0) {
      t.set("offset", r.toString());
    }

    const s = t.toString();
    const i = `${K.notifications.list}${s ? `?${s}` : ""}`;
    const a = await G.get(i);
    const c = a.notifications ?? a.data ?? [];
    const l = a.hasMore ?? false ? String(r + c.length) : null;
    return { notifications: c.map(ui), nextCursor: l };
  },
  async getUnreadCount() {
    return (await G.get(K.notifications.count)).count;
  },
  async markAsRead(e) {
    if (e.length === 1) {
      const r = await G.post(K.notifications.markRead(e[0]));
      return { markedCount: r.markedCount ?? r.marked ?? 1 };
    }
    const t = 20;
    let o = 0;
    for (let r = 0; r < e.length; r += t) {
      const s = e.slice(r, r + t);
      const i = await G.post(K.notifications.markReadBatch, { ids: s });
      o += i.markedCount ?? i.marked ?? s.length;
    }
    return { markedCount: o };
  },
  async markAllAsRead() {
    const e = await G.post(K.notifications.markAllRead);
    return { markedCount: e.markedCount ?? e.marked ?? 0 };
  },
  async getSettings() {
    const e = await G.get(K.notifications.settings);
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

    await G.put(K.notifications.settings, t);
  },
};

const Ja = [
  "image/jpeg",
  "image/png",
  "image/gif",
  "image/webp",
  "image/avif",
  "image/heic",
  "image/heif",
];

const Qa = ["video/mp4", "video/webm", "video/quicktime"];
const Go = ".jpg,.jpeg,.png,.gif,.webp,.avif,.heic,.heif";
const ec = ".mp4,.webm,.mov";

const cn = {
  async uploadMedia(e) {
    const t = new FormData();
    t.append("file", e);
    return await G.uploadFormData(K.files.upload, t, {
      timeout: 300 * 1000 /* 1e3 */,
    });
  },
  async deleteFile(e) {
    await G.delete(K.files.delete(e));
  },
  isValidImageType(e) {
    return Ja.includes(e.type);
  },
  isValidVideoType(e) {
    return Qa.includes(e.type);
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
const At = Et((e) => ({
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
let Ko = new Set();
function tc() {
  if (!Eo) {
    setTimeout(async () => {
      Eo = null;
      const e = Array.from(Ko);
      Ko.clear();

      if (e.length !== 0) {
        for (let t = 0; t < e.length; t += 20) {
          const o = e.slice(t, t + 20);
          try {
            const r = await Ln.batchFollowStatus(o);
            At.getState().setStatuses(r);
          } catch {}
        }
      }
    }, 50);
  }
}
function nc(e) {
  const t = Ne((i) => i.profile?.id);

  const o = At((i) => i.statuses);

  const r = I("");

  W(() => {
    if (!t) {
      return;
    }

    const i = e.filter((c) => c !== t && o[c] === undefined);

    const a = i.sort().join(",");
    if (!(a === r.current || a === "")) {
      r.current = a;
      for (const c of i) {
        Ko.add(c);
      }
      tc();
    }
  }, [e, t]);

  return {
    getStatus: R(
      (i) => {
        if (i !== t) {
          return o[i];
        }
      },
      [o, t]
    ),
    statuses: o,
  };
}
const Gt = new dr(500, 120 * 1000 /* 1e3 */);
setInterval(() => Gt.cleanup(), 60 * 1000 /* 1e3 */);

const Ln = {
  async followUser(e) {
    const t = await G.post(K.users.follow(e), {});
    Gt.delete(e);
    At.getState().setStatus(e, true);
    return t.following ? "following" : t.status ?? "following";
  },
  async unfollowUser(e) {
    await G.delete(K.users.follow(e));
    Gt.delete(e);
    At.getState().setStatus(e, false);
  },
  async getFollowers(e, t = {}) {
    const o = new URLSearchParams();
    const r = t.limit ?? 20;
    o.set("limit", r.toString());
    const s = t.cursor ? parseInt(t.cursor) : t.page ?? 1;
    o.set("page", s.toString());
    const i = o.toString();
    const a = `${K.users.followers(e)}${i ? `?${i}` : ""}`;
    const c = await G.get(a);
    const u = c.data ?? c;
    const l = u.users ?? u.followers ?? [];
    const d = u.pagination?.hasMore ?? false ? String(s + 1) : null;
    return { data: l.map(Xr), nextCursor: d };
  },
  async getFollowing(e, t = {}) {
    const o = new URLSearchParams();
    const r = t.limit ?? 20;
    o.set("limit", r.toString());
    const s = t.cursor ? parseInt(t.cursor) : t.page ?? 1;
    o.set("page", s.toString());
    const i = o.toString();
    const a = `${K.users.following(e)}${i ? `?${i}` : ""}`;
    const c = await G.get(a);
    const u = c.data ?? c;
    const l = u.users ?? u.following ?? [];
    const d = u.pagination?.hasMore ?? false ? String(s + 1) : null;
    return { data: l.map(Xr), nextCursor: d };
  },
  async blockUser(e) {
    await G.post(K.users.block(e), {});
    Gt.delete(e);
  },
  async unblockUser(e) {
    await G.delete(K.users.block(e));
    Gt.delete(e);
  },
  async getBlockedUsers(e = {}) {
    const t = new URLSearchParams();
    const o = e.limit ?? 20;
    t.set("limit", o.toString());
    const r = e.cursor ? parseInt(e.cursor) : e.page ?? 1;
    t.set("page", r.toString());
    const s = t.toString();
    const i = `${K.users.blocked}${s ? `?${s}` : ""}`;
    const a = await G.get(i);
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

    return (await G.post(K.users.followStatus, { userIds: e })).data ?? {};
  },
  invalidateSocialCache(e) {
    Gt.delete(e);
  },
  clearSocialCache() {
    Gt.clear();
  },
};

const Xn = {
  TARGET_NOT_FOUND: "REPORT_TARGET_NOT_FOUND",
  CANNOT_REPORT_OWN_CONTENT: "REPORT_CANNOT_REPORT_OWN_CONTENT",
  ALREADY_REPORTED: "REPORT_ALREADY_REPORTED",
  DESCRIPTION_TOO_LONG: "REPORT_DESCRIPTION_TOO_LONG",
};

const oc = {
  async createReport(e) {
    const t = await G.post(K.reports.create, e);
    return t?.data ?? t;
  },
};

const rc = {
  async getChangelog() {
    const e = await G.get(K.platform.changelog);
    return e.data ?? e;
  },
};

const Jo = {
  async getStatus() {
    return G.get(K.subscription.status);
  },
  async pay() {
    return G.post(K.subscription.pay);
  },
  async setAutoRenewal(e) {
    return G.post(K.subscription.autoRenewal, { enabled: e });
  },
};

const Yn = {
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

const Ne = Et()(
  ur(
    (e, t) => {
      G.setRefreshTokenCallback(async () => {
        try {
          const r = await xt.refreshSession();
          G.setAccessToken(r.accessToken);
          He.setAccessToken(r.accessToken);
          return r.accessToken;
        } catch (r) {
          return Ue(r) && r.status >= 500
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
        ...Yn,
        register: async (r) => {
          e({ status: "loading", error: null, errorCode: null });
          try {
            const s = await xt.register(r);

            e({
              status: "needs_verification",
              pendingEmail: r.email,
              pendingPassword: r.password,
              flowToken: s.flowToken ?? null,
            });

            return s.nextStep;
          } catch (s) {
            const i = Ue(s) ? s.message : "Registration failed";
            const a = Ue(s) ? s.code : null;
            e({ status: "unauthenticated", error: i, errorCode: a });
            throw s;
          }
        },
        login: async (r) => {
          e({ status: "loading", error: null, errorCode: null });
          try {
            const s = await xt.login(r);
            if (Va(s)) {
              G.setAccessToken(s.accessToken);
              He.setAccessToken(s.accessToken);
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
                  Ue(a) &&
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
            const i = s;

            e({
              status: "needs_verification",
              pendingEmail: r.email,
              pendingPassword: r.password,
              flowToken: i.flowToken ?? null,
            });

            return s.nextStep;
          } catch (s) {
            const i = Ue(s) ? s.message : "Login failed";
            const a = Ue(s) ? s.code : null;
            e({ status: "unauthenticated", error: i, errorCode: a });
            throw s;
          }
        },
        verifyOtp: async (r) => {
          e({ status: "loading", error: null, errorCode: null });
          const { pendingEmail, pendingPassword, flowToken } = t();
          try {
            const c = await xt.verifyOtp({
              email: pendingEmail || "",
              password: pendingPassword || "",
              otp: r,
              flowToken: flowToken || "",
            });
            e({ pendingPassword: null });

            if (Wa(c)) {
              G.setAccessToken(c.accessToken);
              He.setAccessToken(c.accessToken);
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
                  Ue(l) &&
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
            const u = Ue(c) ? c.message : "Verification failed";
            const l = Ue(c) ? c.code : null;
            e({ status: "needs_verification", error: u, errorCode: l });
            throw c;
          }
        },
        resendOtp: async () => {
          e({ error: null, errorCode: null });
          const { pendingEmail, flowToken } = t();
          try {
            await xt.resendOtp({
              email: pendingEmail || "",
              flowToken: flowToken || "",
            });
          } catch (i) {
            const a = Ue(i) ? i.message : "Failed to resend code";
            const c = Ue(i) ? i.code : null;
            e({ error: a, errorCode: c });
            throw i;
          }
        },
        createProfile: async (r) => {
          e({ error: null, errorCode: null });
          try {
            await Nt.createProfile(r);
            await t().fetchProfile();
            e({ status: "authenticated" });
          } catch (s) {
            const i = Ue(s) ? s.message : "Failed to create profile";
            const a = Ue(s) ? s.code : null;
            e({ error: i, errorCode: a });
            throw s;
          }
        },
        logout: async () => {
          try {
            await xt.logout();
          } catch {
          } finally {
            G.setAccessToken(null);
            He.setAccessToken(null);
            e({ ...Yn, status: "unauthenticated" });
          }
        },
        logoutAll: async () => {
          try {
            await xt.logoutAll();
          } catch {
          } finally {
            G.setAccessToken(null);
            He.setAccessToken(null);
            e({ ...Yn, status: "unauthenticated" });
          }
        },
        refreshSession: async () => {
          try {
            const r = await xt.refreshSession();
            G.setAccessToken(r.accessToken);
            He.setAccessToken(r.accessToken);
            return r.accessToken;
          } catch (r) {
            return Ue(r) && r.status >= 500
              ? (e({ status: "service_error" }), null)
              : (t().reset(), null);
          }
        },
        fetchProfile: async () => {
          const r = await Nt.getMyProfile();
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
                Ue(i) &&
                (i.code === ke.ENTITY_NOT_FOUND || i.status === 404)
              ) {
                e({ status: "needs_profile" });
              } else {
                throw i;
              }
            }
          } catch (s) {
            if (Ue(s) && s.status >= 500) {
              e({ status: "service_error" });
            } else {
              e({ status: "unauthenticated" });
            }
          }
        },
        deleteAccount: async () => {
          await Nt.deleteAccount();
          await t().logout();
        },
        restoreAccount: async () => {
          await Nt.restoreAccount();
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
          He.setAccessToken(null);
          e({ ...Yn, status: "unauthenticated" });
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

const sc = () => Ne((e) => e.status);

const vo = () => Ne((e) => e.profile);

const di = () => Ne((e) => e.status === "authenticated");

const ao = Et()(
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

const at = new Map();
const ic = 60 * 1000; /* 1e3 */
const ac = 300 * 1000; /* 1e3 */
const Yr = 20;
const Zr = 500;
function cc() {
  const e = Date.now();
  for (const [t, o] of at.entries()) {
    if (e - o.timestamp > ac) {
      at.delete(t);
    }
  }
  if (at.size > Yr) {
    const t = Array.from(at.entries()).sort(
      (r, s) => r[1].timestamp - s[1].timestamp
    );
    t.slice(0, t.length - Yr).forEach(([r]) => at.delete(r));
  }
}

const we = Et((e, t) => ({
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
        const a = await Ge.getFeed(activeFeed, { limit: 20 });
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
        const a = await Ge.getFeed(activeFeed, {
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

  createPost: async (o, r, s = [], i = [], a) => {
    const c = Ne.getState().profile;
    if (!c) {
      throw new Error("Not authenticated");
    }
    try {
      const u = i.map(({ mediaId: f }) => f);

      const { id: id_1 } = await Ge.createPost({
        wallOwnerId: o !== c.id ? o : undefined,
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
        wallOwnerId: o,
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

      Ge.invalidateWallCache(o);
      try {
        const f = await Ge.getPost(id_1);
        e((m) => ({
          posts: m.posts.map((C) => (C.id === id_1 ? f : C)),
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
    const r = t().posts.find((s) => s.id === o);
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
        const s = await Ge.getPost(o);
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
    cc();
    const s = ao.getState().commentsSort;
    const i = o;
    const a = at.get(i);
    const c = Date.now();
    if (a && a.sort === s) {
      if (c - a.timestamp < ic) {
        e({
          comments: a.comments,
          commentsNextCursor: a.nextCursor,
          commentsHasMore: a.hasMore,
          commentsLoading: false,
        });

        wt.getComments(o, { limit: 100, sort: s })
          .then((l) => {
            const l_data = l.data;

            at.set(i, {
              comments: l_data,
              hasMore: l.nextCursor !== null,
              nextCursor: l.nextCursor,
              timestamp: Date.now(),
              sort: s,
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
      const u = await wt.getComments(o, { limit: 100, sort: s });
      const u_data = u.data;

      at.set(i, {
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

  loadMoreComments: async (o) => {
    const { commentsLoadingMore, commentsHasMore, commentsNextCursor } = t();
    if (commentsLoadingMore || !commentsHasMore) {
      return;
    }
    const a = ao.getState().commentsSort;
    e({ commentsLoadingMore: true });
    try {
      const c = await wt.getComments(o, {
        limit: 100,
        sort: a,
        cursor: commentsNextCursor ?? undefined,
      });
      e((u) => {
        const l = [...u.comments, ...c.data];
        return {
          comments: l.length > Zr ? l.slice(-Zr) : l,
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

    let i = comments.findIndex((v) => v.id === o);

    let a = false;
    let c = -1;
    let u = -1;
    if (i === -1) {
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
    if (i === -1 && !a) {
      return;
    }
    const l = a ? comments[c].previewReplies[u] : comments[i];
    const h = l.reactions.myReaction;
    const d = l.reactions.total;
    const f = h === r;
    const m = f ? Math.max(0, d - 1) : h === null ? d + 1 : d;
    const C = f || r;
    const w = [...comments];
    if (a) {
      const v = [...(w[c].previewReplies ?? [])];
      v[u] = { ...v[u], reactions: { total: m, myReaction: C } };
      w[c] = { ...w[c], previewReplies: v };
    } else {
      w[i] = { ...w[i], reactions: { total: m, myReaction: C } };
    }
    e({ comments: w });
    try {
      if (f) {
        await wt.unlikeComment(o);
      } else {
        await wt.likeComment(o);
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

  addComment: async (o, r, s = [], i, a, c, u) => {
    try {
      const l = i
        ? await wt.createReply(i, r, s, c, a)
        : await wt.createComment(o, r, s, undefined, a);

      const h = Ne.getState().profile;
      if (h) {
        const C = (l.attachments || [])
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
          parentId: i ?? null,
          rootId: i ?? null,
          text: l.text ?? l.content ?? r,
          spans: l.spans,
          attachments: C,
          replyTo: l.replyTo ?? u ?? null,
          reactions: { total: 0, myReaction: null },
          stats: { replies: 0 },
          createdAt: new Date().toISOString(),
          editedAt: null,
        };

        e(
          i
            ? (v) => ({
                comments: v.comments.map((p) =>
                  p.id === i
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

      const f = ao.getState().commentsSort;
      const m = at.get(o);

      if (m) {
        at.set(o, { ...m, comments: t().comments, timestamp: Date.now() });
      } else {
        at.set(o, {
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
    if (comments.findIndex((i) => i.id === o) !== -1) {
      try {
        const i = await wt.getReplies(o, { limit: 100 });
        e((a) => ({
          comments: a.comments.map((c) =>
            c.id === o ? { ...c, previewReplies: i.data } : c
          ),
        }));
      } catch (i) {
        console.error("Failed to load replies:", i);
      }
    }
  },

  editComment: async (o, r, s) => {
    const { comments } = t();

    const a = (u) =>
      u.map((l) =>
        l.id === o
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
                h.id === o
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
      await wt.editComment(o, r, s);
    } catch (u) {
      console.error("Failed to edit comment:", u);
      e({ comments: c });
      throw u;
    }
  },

  deleteComment: async (o) => {
    const { comments, currentPost } = t();

    const i = comments.some((u) => u.id === o);

    const a = comments.find((u) => u.previewReplies?.some((l) => l.id === o));

    const c = comments;

    if (i) {
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
      await wt.deleteComment(o);
    } catch (u) {
      console.error("Failed to delete comment:", u);
      e({ comments: c });
      throw u;
    }
  },

  editPost: async (o, r, s) => {
    await Ge.editPost(o, { text: r, spans: s });
    const { posts, currentPost } = t();
    const c = new Date().toISOString();

    const u = posts.find((l) => l.id === o);

    e({
      posts: posts.map((l) =>
        l.id === o ? { ...l, text: r, spans: s ?? l.spans, editedAt: c } : l
      ),
      currentPost:
        currentPost?.id === o
          ? {
              ...currentPost,
              text: r,
              spans: s ?? currentPost.spans,
              editedAt: c,
            }
          : currentPost,
      _lastPostEdit: { postId: o, text: r, spans: s ?? [], editedAt: c },
    });

    if (u?.wallOwnerId) {
      Ge.updatePostInWallCache(u.wallOwnerId, o, {
        text: r,
        spans: s ?? u.spans,
        editedAt: c,
      });
    }
  },

  deletePost: async (o) => {
    const { posts, currentPost } = t();
    const i = posts;

    const a = posts.find((c) => c.id === o);

    e({
      posts: posts.filter((c) => c.id !== o),
      currentPost: currentPost?.id === o || currentPost,
    });
    try {
      await Ge.deletePost(o);
    } catch (c) {
      console.error("Failed to delete post:", c);

      if (a) {
        e({ posts: i });
      }

      throw c;
    }
  },

  updatePostReaction: (o, r, s) => {
    e((i) => {
      const a = i.posts.map((u) =>
        u.id === o
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
        i.currentPost?.id === o
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
        _lastReactionUpdate: { postId: o, myReaction: r, totalDelta: s },
      };
    });
  },

  updatePollVote: (o, r, s) => {
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
      const c = a.posts.map((l) => (l.id === o ? i(l) : l));

      const u = a.currentPost?.id === o ? i(a.currentPost) : a.currentPost;
      return { posts: c, currentPost: u };
    });
  },

  updatePollData: (o, r) => {
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
      const a = i.posts.map((u) => (u.id === o ? s(u) : u));

      const c = i.currentPost?.id === o ? s(i.currentPost) : i.currentPost;
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
    at.clear();

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

const qr = {
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

let Rt = null;
let vn = null;
let Wt = 0;
let Vt = null;
const Gr = [
  1000 /* 1e3 */, 2000 /* 2e3 */, 4000 /* 4e3 */, 8000 /* 8e3 */,
  16000 /* 16e3 */, 30000 /* 3e4 */,
];
const lc = 0.3;
const uc = 15;
function Kr(e) {
  const t = Gr[Math.min(e, Gr.length - 1)];
  const o = t * lc * (Math.random() * 2 - 1);
  return Math.round(t + o);
}
function dc(e) {
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

const pn = Et()((e, t) => ({
  ...qr,

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
        const c = await Ht.getNotifications({ cursor: a, limit: 20 });
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
      const o = await Ht.getUnreadCount();
      e({ unreadCount: o });
    } catch {}
  },

  markAsRead: async (o) => {
    if (o.length === 0) {
      return;
    }
    const r = t();

    const s = o.filter((i) => {
      const a = r.notifications.find((c) => c.id === i);
      return a && !a.isRead;
    });

    e((i) => ({
      notifications: i.notifications.map((a) =>
        o.includes(a.id) ? { ...a, isRead: true } : a
      ),

      unreadCount: Math.max(0, i.unreadCount - s.length),
    }));
    try {
      await Ht.markAsRead(o);
    } catch {}
  },

  markAsReadSilent: async (o) => {
    if (o.length !== 0) {
      e((r) => ({
        unreadCount: Math.max(0, r.unreadCount - o.length),
      }));
      try {
        await Ht.markAsRead(o);
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
      await Ht.markAllAsRead();
    } catch {}
  },

  connectSSE: () => {
    if (Rt) {
      return;
    }
    const o = G.getAccessToken();
    if (!o) {
      e({ sseStatus: "error", error: "Not authenticated" });
      return;
    }
    e({ sseStatus: "connecting" });
    const r = "/api/notifications/stream";
    Rt = new AbortController();

    (async () => {
      try {
        const i = await fetch(r, {
          method: "GET",
          headers: {
            Accept: "text/event-stream",
            Authorization: `Bearer ${o}`,
            "Cache-Control": "no-cache",
          },
          signal: Rt?.signal,
        });
        if (!i.ok) {
          if (i.status === 401) {
            try {
              const l = await xt.refreshSession();
              G.setAccessToken(l.accessToken);
              He.setAccessToken(l.accessToken);
              Rt = null;
              const h = Kr(Wt);
              Wt++;

              vn = setTimeout(() => {
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
        Wt = 0;
        e({ sseStatus: "connected", error: null });

        if (Vt) {
          Vt.cancel().catch(() => {});
          Vt = null;
        }

        const a = i.body.getReader();
        Vt = a;
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
          for (const C of d) {
            if (C.startsWith("event: ")) {
              f = C.slice(7);
            } else if (C.startsWith("data: ")) {
              m = C.slice(6);
            } else if (C === "" && m) {
              try {
                const w = JSON.parse(m);
                const v = f || w.type;
                if (v !== "connected") {
                  if (v === "notification") {
                    const p = w.payload ?? w;
                    const y = dc(p);
                    const T = y.payload.actors[0];

                    const g = {
                      id: y.id,
                      type: y.type,
                      actorName: T?.displayName || "Пользователь",
                      actorUsername: T?.username || "",
                      actorAvatar: T?.avatar || "",
                      count: y.payload.count,
                      message: fc(
                        y.type,
                        T?.displayName || "Пользователь",
                        y.payload.count
                      ),
                      clickUrl: y.payload.clickUrl,
                      entityId: y.entityId,
                      parentEntityId: y.parentEntityId,
                    };

                    e((_) => ({
                      notifications: [y, ..._.notifications],
                      unreadCount: w.unreadCount ?? _.unreadCount,
                      lastSseToast: g,
                    }));

                    if (w.sound) {
                      mc();
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
      } catch (i) {
        if (i.name === "AbortError") {
          return;
        }
        e({ sseStatus: "error", error: "SSE connection error" });

        if (Wt >= uc) {
          console.warn(
            "SSE: Max reconnect attempts reached, stopping reconnection"
          );

          Rt = null;
          return;
        }

        const a = Kr(Wt);
        Wt++;

        vn = setTimeout(() => {
          Rt = null;
          t().connectSSE();
        }, a);
      }
    })();
  },

  disconnectSSE: () => {
    if (vn) {
      clearTimeout(vn);
      vn = null;
    }

    if (Vt) {
      Vt.cancel().catch(() => {});
      Vt = null;
    }

    if (Rt) {
      Rt.abort();
      Rt = null;
    }

    Wt = 0;
    e({ sseStatus: "disconnected" });
  },

  fetchSettings: async () => {
    e({ settingsLoading: true });
    try {
      const o = await Ht.getSettings();
      e({ settings: o, settingsLoading: false });
    } catch {
      e({ settingsLoading: false });
    }
  },

  updateSettings: async (o) => {
    const { settings: r } = t();
    if (r) {
      const s = {
        webEnabled: o.webEnabled ?? r.webEnabled,
        soundEnabled: o.soundEnabled ?? r.soundEnabled,
        preferences: { ...r.preferences, ...o.preferences },
      };
      e({ settings: s });
    }
    try {
      await Ht.updateSettings(o);
    } catch {
      e({ settings: r });
    }
  },

  reset: () => {
    t().disconnectSSE();
    e(qr);
  },
}));

const hc = {
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

function fc(e, t, o) {
  const hc_e = hc[e];
  return hc_e ? hc_e(t, o) : "Новое уведомление";
}
function mc() {
  try {
    const e = new Audio("/assets/notification.ogg");
    e.volume = 0.5;
    e.play().catch(() => {});
  } catch {}
}

const hi = () => pn((e) => e.unreadCount);

const pc = () => pn((e) => e.lastSseToast);

const hr = Et((e, t) => ({
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

const Mn = new Set();
let xn = null;
const gc = 30000; /* 3e4 */
function vc() {
  if (xn === null) {
    xn = window.setInterval(() => {
      Mn.forEach((e) => e());
    }, gc);
  }
}
function wc() {
  if (xn !== null) {
    clearInterval(xn);
    xn = null;
  }
}
function yc(e) {
  Mn.add(e);

  if (Mn.size === 1) {
    vc();
  }
}
function _c(e) {
  Mn.delete(e);

  if (Mn.size === 0) {
    wc();
  }
}
function Ro(e) {
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

  const [s, i] = x(() => (o ? Ro(new Date(r)) : ""));

  W(() => {
    if (!o) {
      i("");
      return;
    }
    const a = new Date(r);
    i(Ro(a));
    const c = () => {
      i(Ro(a));
    };
    yc(c);

    return () => _c(c);
  }, [r, o]);

  return s;
}
const Jr = 1174;
function Tt() {
  const [e, t] = x(() =>
    typeof window === "undefined" ? false : window.innerWidth < Jr
  );

  W(() => {
    const o = window.matchMedia(`(max-width: ${Jr - 1}px)`);

    const r = (s) => {
      t(s.matches);
    };

    t(o.matches);
    o.addEventListener("change", r);

    return () => {
      o.removeEventListener("change", r);
    };
  }, []);

  return e;
}
const Cc = hn({ isHidden: false });

const Nc = () => {
  const [e, t] = x(false);
  const o = I(0);

  W(() => {
    const r = () => {
      const window_scrollY = window.scrollY;
      const i = window_scrollY - o.current;

      if (i > 10 && window_scrollY > 50) {
        t(true);
      } else if (i < -10) {
        t(false);
      }

      o.current = window_scrollY;
    };
    window.addEventListener("scroll", r, { passive: true });

    return () => window.removeEventListener("scroll", r);
  }, []);

  return e;
};

function bc() {
  const [e, t] = x(false);
  const [o, r] = x(false);
  const [s, i] = x(0);
  const [a, c] = x(false);
  const [u, l] = x(0);
  const [h, d] = x(0);
  const [f, m] = x([]);
  const [C, w] = x(0);
  const v = I(0);
  const p = I(null);
  const y = I(null);
  const T = I(null);
  const g = I(null);
  const _ = I([]);
  const S = I(null);
  const k = I(null);
  const E = I(null);
  const b = I(null);
  const P = I(null);
  const N = I(null);
  const O = I([]);
  const B = I(false);
  const Q = I(0);
  const ie = I([]);
  const X = I(0);

  W(() => {
    B.current = e;
  }, [e]);

  W(
    () => () => {
      if (S.current) {
        clearInterval(S.current);
      }

      if (k.current) {
        cancelAnimationFrame(k.current);
      }

      if (N.current) {
        clearInterval(N.current);
      }

      if (g.current) {
        g.current.getTracks().forEach((M) => M.stop());
      }

      if (p.current) {
        p.current.ondataavailable = null;
        p.current.onstop = null;
      }

      if (y.current && y.current.state !== "closed") {
        y.current.close();
      }

      if (E.current) {
        E.current.pause();
        E.current.onloadedmetadata = null;
        E.current.ontimeupdate = null;
        E.current.onended = null;
        E.current = null;
      }

      if (b.current) {
        URL.revokeObjectURL(b.current);
      }
    },
    []
  );

  const Y = R(() => {
    if (!T.current) {
      return;
    }
    const T_current = T.current;
    const T_current_frequencyBinCount = T_current.frequencyBinCount;
    const Z = new Uint8Array(T_current_frequencyBinCount);
    T_current.getByteFrequencyData(Z);
    let J = 0;
    for (let ue = 0; ue < T_current_frequencyBinCount; ue++) {
      J += Z[ue];
    }
    const ce = J / T_current_frequencyBinCount / 255;
    const me = Math.min(1, ce * 3);
    const _e = Math.max(0.1, me);
    if (B.current) {
      const Ze = performance.now() - Q.current;
      const Le = Math.floor(Ze / 80);
      ie.current.push(_e);

      if (Le > X.current) {
        const ie_current = ie.current;

        const Ee =
          ie_current.length > 0
            ? ie_current.reduce((ae, H) => ae + H, 0) / ie_current.length
            : 0.05;

        O.current.push(Ee);
        v.current += 4;

        m((ae) => [...ae, Ee]);

        w(v.current);
        ie.current = [];
        X.current = Le;
      }

      k.current = requestAnimationFrame(Y);
    }
  }, []);

  const ne = R(() => {
    const O_current = O.current;
    return O_current.length > 0 ? [...O_current] : [];
  }, []);

  const te = R(async () => {
    try {
      if (b.current) {
        URL.revokeObjectURL(b.current);
        b.current = null;
      }

      P.current = null;

      if (E.current) {
        E.current.pause();
        E.current = null;
      }

      const M = await navigator.mediaDevices.getUserMedia({
        audio: {
          echoCancellation: true,
          noiseSuppression: true,
          autoGainControl: true,
        },
      });
      g.current = M;
      const q = new AudioContext();
      y.current = q;
      const Z = q.createAnalyser();
      Z.fftSize = 256;
      Z.smoothingTimeConstant = 0.3;
      T.current = Z;
      q.createMediaStreamSource(M).connect(Z);
      const ce = new MediaRecorder(M, {
        mimeType: MediaRecorder.isTypeSupported("audio/webm")
          ? "audio/webm"
          : "audio/mp4",
      });
      p.current = ce;
      _.current = [];
      O.current = [];
      Q.current = performance.now();
      ie.current = [];
      X.current = 0;

      ce.ondataavailable = (_e) => {
        if (_e.data.size > 0) {
          _.current.push(_e.data);
        }
      };

      ce.start(100);
      t(true);
      r(false);
      i(0);
      l(0);
      d(0);
      c(false);
      v.current = 0;
      m([]);
      w(0);
      B.current = true;
      const me = Date.now();

      S.current = window.setInterval(() => {
        const _e = Math.floor((Date.now() - me) / 1000 /* 1e3 */);
        i(_e);
      }, 100);

      k.current = requestAnimationFrame(Y);
    } catch (M) {
      console.error("Error accessing microphone:", M);
    }
  }, [Y]);

  const oe = R(
    () =>
      new Promise((M) => {
        B.current = false;
        t(false);

        if (p.current && p.current.state !== "inactive") {
          p.current.onstop = () => {
            if (_.current.length > 0) {
              const Z = p.current?.mimeType || "audio/webm";
              const J = new Blob(_.current, { type: Z });
              const ce = URL.createObjectURL(J);
              b.current = ce;
              P.current = J;
              const me = new Audio(ce);
              E.current = me;

              me.onloadedmetadata = () => {
                if (isFinite(me.duration)) {
                  d(me.duration);
                } else {
                  me.currentTime = 1e101 /* 1e101 */;

                  me.ontimeupdate = () => {
                    me.ontimeupdate = null;
                    me.currentTime = 0;
                    d(me.duration);
                  };
                }
              };

              me.onended = () => {
                c(false);
                l(0);
                me.currentTime = 0;

                if (N.current) {
                  clearInterval(N.current);
                  N.current = null;
                }
              };

              r(true);
              M(J);
            } else {
              M(null);
            }
          };

          p.current.stop();
        } else {
          M(null);
        }

        if (g.current) {
          g.current.getTracks().forEach((Z) => Z.stop());
          g.current = null;
        }

        if (S.current) {
          clearInterval(S.current);
          S.current = null;
        }

        if (k.current) {
          cancelAnimationFrame(k.current);
          k.current = null;
        }

        if (y.current && y.current.state !== "closed") {
          y.current.close();
          y.current = null;
        }

        const q = ne();
        v.current = 0;
        m(q);
        w(0);
        l(0);
      }),
    [ne]
  );

  const F = R(() => {
    B.current = false;

    if (p.current) {
      p.current.ondataavailable = null;
      p.current.onstop = null;
      p.current.state !== "inactive" && p.current.stop();
      p.current = null;
    }

    if (g.current) {
      g.current.getTracks().forEach((M) => M.stop());
      g.current = null;
    }

    if (S.current) {
      clearInterval(S.current);
      S.current = null;
    }

    if (k.current) {
      cancelAnimationFrame(k.current);
      k.current = null;
    }

    if (N.current) {
      clearInterval(N.current);
      N.current = null;
    }

    if (y.current && y.current.state !== "closed") {
      y.current.close();
      y.current = null;
    }

    if (E.current) {
      E.current.pause();
      E.current = null;
    }

    if (b.current) {
      URL.revokeObjectURL(b.current);
      b.current = null;
    }

    P.current = null;
    t(false);
    r(false);
    i(0);
    c(false);
    l(0);
    d(0);
    v.current = 0;
    m([]);
    w(0);
    O.current = [];
    _.current = [];
  }, []);

  const z = R(() => {
    if (N.current) {
      clearInterval(N.current);
    }

    N.current = window.setInterval(() => {
      const E_current = E.current;
      if (
        !E_current ||
        E_current.paused ||
        E_current.paused ||
        E_current.ended
      ) {
        if (N.current) {
          clearInterval(N.current);
          N.current = null;
        }

        return;
      }

      if (E_current.duration > 0) {
        l(E_current.currentTime / E_current.duration);
      }
    }, 100);
  }, []);

  const ee = R(() => {
    if (!E.current || !b.current) {
      return;
    }

    if (N.current) {
      clearInterval(N.current);
      N.current = null;
    }

    const E_current = E.current;

    if (E_current.ended || E_current.currentTime >= E_current.duration) {
      E_current.currentTime = 0;
      l(0);
    }

    c(true);

    E_current.play()
      .then(() => {
        z();
      })
      .catch((q) => {
        console.error("Error playing audio:", q);
        c(false);
      });
  }, [z]);

  const U = R(() => {
    if (N.current) {
      clearInterval(N.current);
      N.current = null;
    }

    if (E.current) {
      E.current.pause();

      E.current.duration > 0 && l(E.current.currentTime / E.current.duration);
    }

    c(false);
  }, []);

  const D = R(
    (M) => {
      if (!E.current || !o) {
        return;
      }
      const E_current = E.current;
      const Z = Math.max(0, Math.min(1, M));
      E_current.currentTime = Z * E_current.duration;
      l(Z);

      if (E_current.paused) {
        N.current && (clearInterval(N.current), (N.current = null));

        E_current.play()
          .then(() => {
            c(true);
            z();
          })
          .catch((J) => {
            console.error("Error playing audio:", J);
          });
      }
    },
    [o, z]
  );

  const L = R(() => P.current, []);

  return {
    isRecording: e,
    hasRecording: o,
    recordingTime: s,
    audioLevels: f,
    slideOffset: C,
    isPlaying: a,
    playbackProgress: u,
    duration: h,
    audioElementRef: E,
    startRecording: te,
    stopRecording: oe,
    cancelRecording: F,
    playAudio: ee,
    pauseAudio: U,
    seekTo: D,
    getAudioBlob: L,
  };
}
const Tc = 0.5;
const kc = 500;
const Qr = 1000; /* 1e3 */
class Ec {
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
                const s = window.setTimeout(() => {
                  this.pendingTimers.delete(r);

                  if (!this.viewedPosts.has(r)) {
                    this.sendView(r);
                  }
                }, kc);
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
      { threshold: Tc }
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

      Ge.trackView(t).catch(() => {
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
const So = new Ec();
function Rc(e, t) {
  W(() => {
    const t_current = t.current;
    if (!(!t_current || So.isViewed(e))) {
      So.observe(e, t_current);

      return () => {
        So.unobserve(t_current);
      };
    }
  }, [e, t]);
}
function wo(e = "", t = []) {
  const [o, r] = x(e);
  const [s, i] = x(t);
  const a = I(null);

  const c = R((h, d) => {
    r(h);
    i(d);
  }, []);

  const u = R((h) => {
    a.current?.insertText(h);
  }, []);

  const l = R(() => {
    r("");
    i([]);
  }, []);

  return {
    text: o,
    spans: s,
    editorRef: a,
    handleChange: c,
    insertText: u,
    reset: l,
    setText: r,
    setSpans: i,
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

const Sc = ({ size: e = 18 }) =>
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

const Ic = () =>
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

const xc = ({ size: e = 18 }) =>
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

const Pc = ({ size: e = 24 }) =>
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

const Ac = ({ size: e = 18 }) =>
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
      n("path", { d: "M16 4H9a3 3 0 0 0-3 3c0 1.66 1.34 3 3 3h6" }),
      n("path", { d: "M8 20h7a3 3 0 0 0 3-3c0-1.66-1.34-3-3-3H4" }),
      n("line", { x1: "4", y1: "12", x2: "20", y2: "12" }),
    ],
  });

const Oc = ({ size: e = 24 }) =>
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

const Dc = ({ size: e = 18 }) =>
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

const Bc = ({ size: e = 24 }) =>
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

const Uc = ({ size: e = 18 }) =>
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

const kt = ({ size: e = 24 }) =>
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

const Fc = ({ size: e = 8 }) =>
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

const Hc = ({ size: e = 8 }) =>
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

const yo = ({ filled: e = false, size: t = 20, className: o }) =>
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

const Fn = ({ size: e = 24 }) =>
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

const Wc = ({ size: e = 24 }) =>
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

const Vc = ({ size: e = 18 }) =>
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

const jc = ({ size: e = 24 }) =>
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

const zc = ({ size: e = 18 }) =>
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

const Gc = ({ size: e = 20 }) =>
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

const uo = ({ size: e = 20 }) =>
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

const Kc = ({ size: e = 20, color: t = "currentColor" }) =>
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

const Jc = ({ size: e = 16 }) =>
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

const Qc = ({ size: e = 16 }) =>
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

const el = ({ size: e = 20 }) =>
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
  const t = Un()[0];
  return e.children({
    url: t.url,
    path: t.path,
    matches: ri(t.path || t.url, e.path, {}) !== false,
  });
}
const tl = "fI4fDVi7";
const nl = "yZbr8ne7";
const ol = "GstMeOlK";
const rl = "AuAu4fWH";
const sl = "GpuNQx-t";
const il = "JGhUMn6Z";
const al = "GNnsM0Nx";
const cl = "VPqB7n6W";
const ll = "TAGBLFdY";
const ul = "hUJldwZ5";
const dl = "AnK9iBJg";
const hl = "ssMbXx3H";
const fl = "qlwe9qHu";

const ze = {
  aside: tl,
  asideBottom: nl,
  logoutButton: ol,
  asideBrand: rl,
  asideBrandVersion: sl,
  nav: il,
  navItem: al,
  active: cl,
  iconWrapper: ll,
  portalButton: ul,
  portalActive: dl,
  portalImage: hl,
  badge: fl,
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

const ml = "QYP36fUx";
const pl = "_7afjMMjS";
const gl = "crRhcI7j";
const vl = "mPvkVXNc";
const wl = "R6rPmVO3";
const yl = "_4M-jb-Yf";
const _l = "BzRajAFf";
const Cl = "xWaW7ynd";
const Nl = "mC4WabM6";
const bl = "CdIxpdOF";
const Tl = "o8sqdA1y";
const kl = "G7wJQLhH";
const El = "Idqhap9T";
const Rl = "bcyDy-AX";

const qe = {
  overlay: ml,
  modalWrapper: pl,
  wide: gl,
  modal: vl,
  frameless: wl,
  header: yl,
  title: _l,
  closeButton: Cl,
  externalCloseButton: Nl,
  mobileOverlay: bl,
  closing: Tl,
  bottomSheet: kl,
  dragHandle: El,
  dragIndicator: Rl,
};

const Sl = hn(null);
const Il = 100;
const xl = 0.5;
function Ke({
  children: e,
  onClose: t,
  title: o,
  showHeader: r = true,
  showCloseButton: s = true,
  frameless: i = false,
  className: a,
  contentClassName: c,
  size: u = "default",
  onBeforeClose: l,
}) {
  console.log("[Modal] RENDER", { title: o, frameless: i, isMobile: Tt() });
  const h = I(null);
  const d = I(null);
  const f = I(null);
  const m = Tt();
  const C = I(0);
  const w = I(false);
  const [v, p] = x(false);
  const y = I(0);
  const T = I(0);
  const g = I(0);
  W(() => {
    const te = (F) => {
      if (F.key === "Escape") {
        if (l && !l()) {
          return;
        }
        t();
      }
    };

    const oe = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    document.addEventListener("keydown", te);

    return () => {
      document.removeEventListener("keydown", te);
      document.documentElement.style.overflow = oe;
    };
  }, [t]);

  const _ = (te) => {
    f.current = te.target;
  };

  const S = (te) => {
    if (f.current === h.current && te.target === h.current) {
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

  const k = R(() => {
    if (l && !l()) {
      N(0, "transform 0.2s ease-out");
      O(0);
      C.current = 0;
      return;
    }
    p(true);

    setTimeout(() => {
      t();
    }, 200);
  }, [t, l]);

  const E = I(false);
  const b = I(false);

  const P = (te) => {
    let oe = te;

    while (oe && oe !== d.current) {
      const z = window.getComputedStyle(oe).overflowY;
      if (
        (z === "auto" || z === "scroll") &&
        oe.scrollHeight > oe.clientHeight
      ) {
        return oe;
      }
      oe = oe.parentElement;
    }

    return null;
  };

  const N = (te, oe) => {
    if (d.current) {
      d.current.style.transform = te > 0 ? `translateY(${te}px)` : "";
      d.current.style.transition = oe || "";
    }
  };

  const O = (te) => {
    if (h.current && te > 0) {
      h.current.style.backgroundColor = `rgba(0, 0, 0, ${Math.max(
        0,
        0.4 - te / 500
      )})`;
    } else if (h.current) {
      h.current.style.backgroundColor = "";
    }
  };

  const B = (te) => {
    if (!m) {
      return;
    }
    y.current = te.touches[0].clientY;
    T.current = Date.now();
    g.current = te.touches[0].clientY;
    const te_target = te.target;
    if (te_target.closest(`.${qe.dragHandle}`)) {
      E.current = true;
      b.current = true;
      w.current = true;

      if (d.current) {
        d.current.style.transition = "none";
      }

      return;
    }
    E.current = false;

    if (
      te_target.closest(
        'button, a, input, textarea, select, video, [role="button"]'
      )
    ) {
      b.current = false;
      return;
    }

    if (te_target.tagName === "CANVAS" || te_target.closest("canvas")) {
      b.current = false;
      return;
    }
    const U = P(te_target);
    b.current = !U || U.scrollTop === 0;
  };

  const Q = (te) => {
    if (!m) {
      return;
    }
    const oe = te.touches[0].clientY;
    const F = oe - y.current;
    g.current = oe;

    if (E.current) {
      if (F > 0) {
        C.current = F;
        N(F);
        O(F);
        te.preventDefault();
      }

      return;
    }

    if (b.current) {
      if (w.current && C.current > 0) {
        if (F > 0) {
          C.current = F;
          N(F);
          O(F);
          te.preventDefault();
        } else {
          C.current = 0;
          w.current = false;
          N(0);
          O(0);
        }

        return;
      }

      if (F > 0) {
        w.current ||
          ((w.current = true),
          d.current && (d.current.style.transition = "none"));
        C.current = F;
        N(F);
        O(F);
        te.preventDefault();
      }
    }
  };

  const ie = () => {
    if (!m) {
      return;
    }
    const te = g.current - y.current;
    const oe = Date.now() - T.current;
    const F = te / oe;

    if (w.current && (te > Il || F > xl)) {
      k();
    } else if (C.current > 0) {
      N(0, "transform 0.2s ease-out");
      O(0);
      C.current = 0;
    }

    w.current = false;
    E.current = false;
    b.current = false;
  };

  const Y = (() => {
    if (m && v) {
      return {
        transform: "translateY(100%)",
        transition: "transform 0.2s ease-out",
      };
    }
  })();

  const ne = { onClose: t, isMobile: m, isClosing: v, handleClose: k };
  return n(Sl.Provider, {
    value: ne,
    children: n("div", {
      ref: h,
      className: `${qe.overlay} ${m ? qe.mobileOverlay : ""} ${
        v ? qe.closing : ""
      }`,
      onMouseDown: _,
      onMouseUp: S,
      children: n("div", {
        ref: d,
        className: `${qe.modalWrapper} ${u === "wide" ? qe.wide : ""} ${
          m ? qe.bottomSheet : ""
        }`,
        style: Y,
        onTouchStart: B,
        onTouchMove: Q,
        onTouchEnd: ie,
        children: [
          i &&
            !m &&
            n("button", {
              type: "button",
              className: qe.externalCloseButton,
              onClick: (te) => {
                te.stopPropagation();
                t();
              },
              children: n(kt, { size: 24 }),
            }),
          m &&
            n("div", {
              className: qe.dragHandle,
              children: n("div", { className: qe.dragIndicator }),
            }),
          n("div", {
            className: `${qe.modal} ${i ? qe.frameless : ""} ${a || ""} ${
              c || ""
            }`,
            children: [
              !i &&
                r &&
                !m &&
                n("div", {
                  className: qe.header,
                  children: [
                    n("span", { className: qe.title, children: o }),
                    s &&
                      n("button", {
                        type: "button",
                        className: qe.closeButton,
                        onClick: (te) => {
                          te.stopPropagation();
                          t();
                        },
                        children: n(kt, { size: 16 }),
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
const Pl = "V50n6WS3";
const Al = "op1vWsdX";
const Ll = "_6WE1-ZQb";
const Ml = "wQFhiSkQ";
const $l = "Lsbi80je";
const Ol = "bMJRT07h";
const Dl = "d6UOyTyY";
const Bl = "eSQfgRTM";
const Ul = "q1AtksiZ";
const Fl = "jHe-Wv1B";
const Hl = "vQ8h8naJ";

const dt = {
  changelog: Pl,
  entry: Al,
  entryHeader: Ll,
  version: Ml,
  date: $l,
  changes: Ol,
  change: Dl,
  singleChange: Bl,
  note: Ul,
  loading: Fl,
  divider: Hl,
};

function Wl({ isOpen: e, onClose: t }) {
  const [o, r] = x([]);
  const [s, i] = x(true);

  W(() => {
    if (!e) {
      return;
    }
    let a = false;

    rc.getChangelog()
      .then((c) => {
        if (!a) {
          r(c);
          i(false);
        }
      })
      .catch(() => {
        if (!a) {
          i(false);
        }
      });

    return () => {
      a = true;
    };
  }, [e]);

  return e
    ? vt(
        n(Ke, {
          onClose: t,
          title: "Что нового",
          size: "default",
          children: n("div", {
            className: dt.changelog,
            children: s
              ? n("div", { className: dt.loading, children: "Загрузка..." })
              : o.map((a, c) =>
                  n(
                    "div",
                    {
                      className: dt.entry,
                      children: [
                        n("div", {
                          className: dt.entryHeader,
                          children: [
                            n("span", {
                              className: dt.version,
                              children: ["v", a.version],
                            }),
                            n("span", {
                              className: dt.date,
                              children: a.date,
                            }),
                          ],
                        }),
                        a.changes.length === 1 && !a.changes[0].startsWith("•")
                          ? n("p", {
                              className: dt.singleChange,
                              children: a.changes[0],
                            })
                          : n("ul", {
                              className: dt.changes,
                              children: a.changes.map((u, l) =>
                                n(
                                  "li",
                                  { className: dt.change, children: u },
                                  l
                                )
                              ),
                            }),
                        a.note &&
                          n("p", { className: dt.note, children: a.note }),
                        c < o.length - 1 && n("div", { className: dt.divider }),
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
const Vl = "GKtAeZvh";
const jl = "_4kYPGG9W";
const zl = "pl3SNO9Y";
const Xl = "-OjVJvXv";
const Yl = "mKywUPJV";
const Zl = "ORxo1gch";
const ql = "_-0ox-2T5";
const Gl = "ufqwLNRT";
const Kl = "Kb0ZHEmq";
const Jl = "L6foA0ob";
const Ql = "p8fXVDg6";
const eu = "iiFzRcQy";

const Mt = {
  avatar: Vl,
  xs: jl,
  emoji: zl,
  onlineDot: Xl,
  sm: Yl,
  md: Zl,
  lg: ql,
  xl: Gl,
  badge: Kl,
  followBadge: Jl,
  notFollowing: Ql,
  following: eu,
};

function tu(e) {
  return (
    e.startsWith("http://") ||
    e.startsWith("https://") ||
    e.startsWith("https://") ||
    e.startsWith("/")
  );
}
function rt({
  src: e,
  alt: t,
  size: o = "md",
  badge: r,
  online: s,
  followBadge: i,
  onFollowBadgeClick: a,
  className: c,
}) {
  const u = e ? tu(e) : false;
  return n("div", {
    className: `${Mt.avatar} ${Mt[o]} ${c || ""}`,
    children: [
      u && e
        ? n("img", { src: e, alt: t || "" })
        : n("span", { className: Mt.emoji, children: e || "👤" }),
      r && n("div", { className: Mt.badge, children: r }),
      i !== undefined
        ? n("button", {
            type: "button",
            className: `${Mt.followBadge} ${
              i ? Mt.following : Mt.notFollowing
            }`,
            onClick: (l) => {
              l.preventDefault();
              l.stopPropagation();
              a?.(l);
            },
            children: i ? n(Hc, { size: 8 }) : n(Fc, { size: 8 }),
          })
        : s && n("span", { className: Mt.onlineDot }),
    ],
  });
}
const nu = "LGbsLd3i";
const ou = "Qtvr3ePW";
const ru = "I1XzQEdO";
const Io = { hint: nu, multiline: ou, arrow: ru };
function ho({ text: e, children: t, className: o, multiline: r }) {
  const s = I(null);
  const [i, a] = x(null);

  const c = R(() => {
    if (!s.current) {
      return;
    }
    const h = s.current.getBoundingClientRect();
    a({ x: h.left + h.width / 2, y: h.top });
  }, []);

  const u = R(() => {
    a(null);
  }, []);

  const l = R(
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

  W(() => {
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

  return n("span", {
    ref: s,
    className: o,
    onMouseEnter: c,
    onMouseLeave: u,
    onClick: l,
    children: [
      t,
      i &&
        vt(
          n("div", {
            className: `${Io.hint} ${r ? Io.multiline : ""}`,
            style: { left: `${i.x}px`, top: `${i.y}px` },
            children: [e, n("span", { className: Io.arrow })],
          }),
          document.body
        ),
    ],
  });
}
const su = "uX6mG52K";
const iu = "u5FjrrfL";
const au = "Z9f7Q3jS";
const cu = "L-43NjOb";
const lu = "E60wxVvR";
const uu = "_0dqhEKnD";
const du = "c-uIo5yi";
const hu = "cB-8IXk5";
const fu = "aUamxQ7e";
const mu = "ObQk27rJ";
const pu = "ovunVXLq";
const gu = "ohs8Npaw";
const vu = "_0K-Z1eD9";
const wu = "LMo4ifSx";
const yu = "_9DD7EG-T";
const _u = "R0v2YBUB";
const Cu = "kM0p8-Sv";
const Nu = "GWzRyPXS";
const bu = "PURIUyt6";
const Tu = "oTS4L6S0";
const ku = "hgcZGLcX";
const Eu = "FCPywiPM";
const Ru = "ynvn-v5t";
const Su = "rost2Xx2";
const Iu = "mAyptXfj";
const xu = "IJ-MKy8P";
const Pu = "av5HkGSu";
const Au = "-TUw-Z3K";
const Lu = "eLLh95k2";
const Mu = "wc3kGqhz";

const re = {
  modal: su,
  sub: iu,
  title: au,
  section: cu,
  profileSection: lu,
  label: uu,
  labelRow: du,
  dim: hu,
  row: fu,
  icon: mu,
  iconGradient: pu,
  name: gu,
  nameGradient: vu,
  nameBadge: wu,
  plans: yu,
  planOption: _u,
  selected: Cu,
  radio: Nu,
  radioDot: bu,
  features: Tu,
  featureContent: ku,
  featureTitle: Eu,
  gradientText: Ru,
  soon: Su,
  infoBtn: Iu,
  footer: xu,
  disclaimer: Pu,
  disclaimerLink: Au,
  subscribeBtn: Lu,
  activeLabel: Mu,
};

function ns({ text: e }) {
  return n(ho, {
    text: e,
    multiline: true,
    children: n("span", {
      className: re.infoBtn,
      children: n(vi, { size: 14 }),
    }),
  });
}
function $u({ isOpen: e, onClose: t }) {
  const o = vo();
  const [r, s] = x(false);
  if (!e) {
    return null;
  }
  const i = o?.subscription?.isActive ?? false;
  const a = "199";
  const c = "месяц";

  const u = async () => {
    if (!r) {
      s(true);
      try {
        const l = await Jo.pay();
        if (l.error) {
          We.error(l.error);
          return;
        }

        if (l.confirmationUrl) {
          window.location.href = l.confirmationUrl;
        }
      } catch (l) {
        We.error(l?.message || "Ошибка при создании платежа");
      } finally {
        s(false);
      }
    }
  };

  return vt(
    n(Ke, {
      onClose: t,
      showHeader: false,
      frameless: true,
      className: re.modal,
      children: n("div", {
        className: re.sub,
        children: [
          n("div", { className: re.title, children: "ИТД НУКСТА" }),
          n("div", {
            className: `${re.section} ${re.profileSection}`,
            children: [
              n("div", {
                className: re.label,
                children: "Ваш профиль с ИТД НУКСТА",
              }),
              n("div", {
                className: re.row,
                children: [
                  n(rt, { src: o?.avatar || null, size: "sm" }),
                  n("div", {
                    children: [
                      n("div", {
                        className: re.name,
                        children: [
                          n("span", {
                            className: re.nameGradient,
                            children: o?.displayName,
                          }),
                          n("span", {
                            className: re.nameBadge,
                            children: "🐙",
                          }),
                        ],
                      }),
                      n("div", { className: re.dim, children: "только что" }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          n("div", {
            className: re.plans,
            children: n("button", {
              type: "button",
              className: `${re.planOption} ${re.selected}`,
              children: [
                n("div", {
                  className: re.row,
                  children: [
                    n("div", {
                      className: re.radio,
                      children: n("div", { className: re.radioDot }),
                    }),
                    n("span", { children: "Ежемесячно" }),
                  ],
                }),
                n("span", { className: re.dim, children: "199 ₽ / месяц" }),
              ],
            }),
          }),
          n("div", {
            className: re.section,
            children: [
              n("div", {
                className: re.labelRow,
                children: [
                  n("span", {
                    className: re.label,
                    children: "Прикольные украшалки",
                  }),
                  n(ns, {
                    text: "итд — полностью независимый проект, который мы делаем сами, без инвесторов и крупных компаний. подписка НУКСТА — это способ поддержать нас, если вам хочется. это совсем не обязательно, мы рады каждому и так! ❤️",
                  }),
                ],
              }),
              n("div", {
                className: re.features,
                children: [
                  n("div", {
                    className: re.row,
                    children: [
                      n("span", {
                        className: re.icon,
                        children: n("div", { className: re.iconGradient }),
                      }),
                      n("div", {
                        children: [
                          n("div", {
                            className: `${re.featureTitle} ${re.gradientText}`,
                            children: "Уникальный цвет ника",
                          }),
                          n("div", {
                            className: re.dim,
                            children:
                              "Клевый цвет ника, который показывает, что вы поддерживаете итд!",
                          }),
                        ],
                      }),
                    ],
                  }),
                  n("div", {
                    className: re.row,
                    children: [
                      n("span", {
                        className: re.icon,
                        children: n(Qo, { size: 20 }),
                      }),
                      n("div", {
                        children: [
                          n("div", {
                            className: re.featureTitle,
                            children: "Пин поддерживателя",
                          }),
                          n("div", {
                            className: re.dim,
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
            className: re.section,
            children: [
              n("div", {
                className: re.labelRow,
                children: [
                  n("span", {
                    className: re.label,
                    children: "Сможете с нами тестить новые штуки",
                  }),
                  n(ns, {
                    text: "мы постоянно добавляем в итд новые штуки и обычно тестим их внутри команды перед релизом. с подпиской НУКСТА вы сможете попробовать их первыми вместе с нами! а когда всё протестим — фишки станут доступны всем пользователям итд",
                  }),
                ],
              }),
              n("div", {
                className: re.features,
                children: [
                  n("div", {
                    className: re.row,
                    children: [
                      n("span", {
                        className: re.icon,
                        children: n(el, { size: 20 }),
                      }),
                      n("div", {
                        className: re.featureContent,
                        children: [
                          n("div", {
                            className: re.featureTitle,
                            children: "Загрузка видео",
                          }),
                          n("div", {
                            className: re.dim,
                            children:
                              "Получите возможность загружать видео одним из первых",
                          }),
                        ],
                      }),
                    ],
                  }),
                  n("div", {
                    className: re.row,
                    children: [
                      n("span", {
                        className: re.icon,
                        children: n(Wc, { size: 20 }),
                      }),
                      n("div", {
                        className: re.featureContent,
                        children: [
                          n("div", {
                            className: re.featureTitle,
                            children: [
                              "Сообщения ",
                              n("span", {
                                className: re.soon,
                                children: "soon",
                              }),
                            ],
                          }),
                          n("div", {
                            className: re.dim,
                            children:
                              "Получите доступ к месенджеру одним из первых",
                          }),
                        ],
                      }),
                    ],
                  }),
                  n("div", {
                    className: re.row,
                    children: [
                      n("span", {
                        className: re.icon,
                        children: n(jc, { size: 20 }),
                      }),
                      n("div", {
                        className: re.featureContent,
                        children: [
                          n("div", {
                            className: re.featureTitle,
                            children: [
                              "Музыка ",
                              n("span", {
                                className: re.soon,
                                children: "soon",
                              }),
                            ],
                          }),
                          n("div", {
                            className: re.dim,
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
            className: re.footer,
            children: [
              n("div", {
                className: re.disclaimer,
                children: [
                  "Оплачивая, вы соглашаетесь с ",
                  n("a", {
                    href: "/subscription-terms",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: re.disclaimerLink,
                    children: "условиями подписки",
                  }),
                  ", ",
                  n("a", {
                    href: "/privacy",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: re.disclaimerLink,
                    children: "политикой конфиденциальности",
                  }),
                  " и ",
                  n("a", {
                    href: "/terms",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: re.disclaimerLink,
                    children: "условиями использования",
                  }),
                  ".",
                ],
              }),
              i
                ? n("div", {
                    className: re.activeLabel,
                    children: "Подписка активна",
                  })
                : n("button", {
                    type: "button",
                    className: re.subscribeBtn,
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

const xi = ({
  href: e,
  icon: t,
  children: o,
  badge: r,
  onActiveClick: s,
  isActive: i = false,
}) =>
  n(gr, {
    path: e,
    children: ({ matches: a }) => {
      const c = a || i;
      return n("a", {
        href: e,
        className: `${ze.navItem} ${c ? ze.active : ""}`,
        onClick: (u) => {
          if (c && s) {
            u.preventDefault();
            s();
          }
        },
        children: [
          n("span", {
            className: ze.iconWrapper,
            children: [
              t,
              r !== undefined &&
                r > 0 &&
                n("span", {
                  className: ze.badge,
                  children: r > 99 ? "99+" : r,
                }),
            ],
          }),
          n("span", { children: o }),
        ],
      });
    },
  });

const xo = (e) => n(xi, { ...e });

const Ou = () => {
  const [e] = Un();

  const t = we((g) => g.fetchFeed);

  const o = we((g) => g.isRefreshing);

  const r = Ne((g) => g.logout);

  const s = di();
  const i = vo();
  const a = hi();
  const { initialize: c, disconnectSSE: u } = pn();
  const [l, h] = x(false);
  const [d, f] = x(false);
  const m = fi();

  const C = hr((g) => g.fetchPortal);

  const w = i?.username ? `/@${i.username}` : "/profile";

  W(() => {
    if (s) {
      c();
    }

    return () => {
      u();
    };
  }, [s, c, u]);

  W(() => {
    C();
  }, [C]);

  const v = R(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    t(true);
  }, [t]);

  const p = R(() => {
    r();
  }, [r]);

  const y = Se(() => {
    const g = e.url || "/";
    return vr.some((_) => g.startsWith(_));
  }, [e.url]);

  const T = Se(() => {
    const g = e.url || "/";
    return i?.username
      ? g === `/@${i.username}` || g.startsWith(`/@${i.username}/`)
      : false;
  }, [e.url, i?.username]);

  return (
    y ||
    n("aside", {
      className: ze.aside,
      children: [
        n("div", {
          className: ze.asideTop,
          children: [
            n("div", {
              className: ze.asideBrand,
              children: [
                n(Ic, {}),
                n("button", {
                  className: ze.asideBrandVersion,
                  onClick: () => h(true),
                  title: "Что нового",
                  children: "v1.1",
                }),
              ],
            }),
            n("nav", {
              className: ze.nav,
              children: [
                n(xo, {
                  href: "/",
                  icon: o ? n(Fn, {}) : n(_i, {}),
                  onActiveClick: v,
                  children: "Лента",
                }),
                n(xo, {
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
                      className: `${ze.portalButton} ${
                        m.active ? ze.portalActive : ""
                      } ${g ? ze.active : ""}`,
                      title: "Ивент",
                      children: [
                        n("img", {
                          src: m.active
                            ? "/assets/portal/portal-active.gif"
                            : "/assets/portal/portal-inactive.png",
                          alt: "Ивент",
                          className: ze.portalImage,
                        }),
                        n("span", { children: "Ивент" }),
                      ],
                    }),
                }),
                n(xo, {
                  href: "/notifications",
                  icon: n(mr, {}),
                  badge: a,
                  children: "Уведомления",
                }),
                n(xi, {
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
          className: ze.asideBottom,
          children: [
            !i?.subscription?.isActive &&
              n("button", {
                className: ze.logoutButton,
                onClick: () => f(true),
                children: [
                  n("span", { children: "⭐" }),
                  n("span", { children: "ИТД НУКСТА" }),
                ],
              }),
            n("button", {
              className: ze.logoutButton,
              onClick: p,
              children: [n(Ni, { size: 20 }), n("span", { children: "Выйти" })],
            }),
          ],
        }),
        n(Wl, { isOpen: l, onClose: () => h(false) }),
        n($u, { isOpen: d, onClose: () => f(false) }),
      ],
    })
  );
};

const Du = "z8EyAYBL";
const Bu = "Y3JzbYs0";
const Uu = "XG8iIx1m";
const Fu = "lqZNoMkv";
const wn = {
  sidebar: Du,
  sidebarContent: Bu,
  sidebarBottom: Uu,
  legalLinks: Fu,
};

const Hu = () => {
  const [e] = Un();
  return (
    Se(() => {
      const o = e.url || "/";
      return vr.some((r) => o.startsWith(r));
    }, [e.url]) ||
    n("aside", {
      className: wn.sidebar,
      children: [
        n("div", { className: wn.sidebarContent }),
        n("div", {
          className: wn.sidebarBottom,
          children: [
            n("ul", {
              className: wn.legalLinks,
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
              className: wn.copyright,
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
const Zu = "ZtAKIgsJ";
const qu = "_1tR-HPhB";
const Gu = "Yi-2DSIb";
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
  active: Zu,
  createButton: qu,
  iconWrapper: Gu,
  portalImage: Ku,
  portalImageActive: Ju,
  badge: Qu,
};

const Pi = hn(null);
let ed = 0;
function td({ children: e }) {
  const [t, o] = x([]);

  const r = R((a) => {
    const c = `modal-${++ed}`;

    o((u) => [...u, { id: c, component: a }]);

    return c;
  }, []);

  const s = R((a) => {
    o((c) => (a ? c.filter((u) => u.id !== a) : c.slice(0, -1)));
  }, []);

  const i = R(() => {
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

  return n(Pi.Provider, {
    value: { openModal: r, closeModal: s, closeAllModals: i },
    children: [
      e,
      t.length > 0 &&
        vt(
          n(Re, {
            children: t.map(({ id: a, component: c }) =>
              n("div", { children: c }, a)
            ),
          }),
          document.body
        ),
    ],
  });
}
function en() {
  const e = po(Pi);
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
function gt({ size: e = "md", className: t }) {
  const o = [os.spinner, os[e], t].filter(Boolean).join(" ");
  return n("div", { className: o, children: n(Fn, {}) });
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

const rn = {
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
  iconOnly: s = false,
  loading: i = false,
  className: a,
  type: c = "button",
  disabled: u,
  ...l
}) {
  const h = [
    rn.button,
    rn[t],
    rn[o],
    r && rn.fullWidth,
    s && rn.iconOnly,
    i && rn.loading,
    a,
  ]
    .filter(Boolean)
    .join(" ");
  return n("button", {
    type: c,
    className: h,
    disabled: u || i,
    ...l,
    children: i ? n(gt, { size: "sm" }) : e,
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

const ut = {
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
const Ai = "emoji-picker-recent";
const co = 32;

const Ld = (e) => {
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
    const e = localStorage.getItem(Ai);
    return e ? JSON.parse(e) : [];
  } catch {
    return [];
  }
};

const Md = (e) => {
  try {
    localStorage.setItem(Ai, JSON.stringify(e.slice(0, co)));
  } catch {}
};

const $d = (e) => {
  const t = [];
  const o = {};
  for (const [r, s] of Object.entries(e)) {
    o[r] = s.map((i) => {
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
  return { all: t, byCategory: o };
};

let Zn = null;

const Od = () => {
  const [e, t] = x(Zn);
  const [o, r] = x(!Zn);

  W(() => {
    if (Zn) {
      return;
    }
    (async () => {
      try {
        const i = await Ae(() => import("./emoji-data-DrtcpqC0.js"), []);

        const a = $d(i.default);
        Zn = a;
        t(a);
      } catch (i) {
        console.error("Failed to load emoji data:", i);
      } finally {
        r(false);
      }
    })();
  }, []);

  return Se(
    () => ({
      all: e?.all ?? [],
      byCategory: e?.byCategory ?? {},
      isLoading: o,
    }),
    [e, o]
  );
};

const Dd = (e) => {
  const [t, o] = x([]);
  const r = I([]);
  W(() => {
    o(rs());
  }, []);

  const s = Se(
    () =>
      t
        .slice(0, co)
        .map((c) => e.find((u) => u.unified === c))
        .filter((c) => c !== undefined),
    [t, e]
  );

  const i = R((c) => {
    if (!r.current.includes(c)) {
      r.current.push(c);
    }
  }, []);

  const a = R(() => {
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
    Md(l.slice(0, co));
    o(l.slice(0, co));
    r.current = [];
  }, []);

  return { recentEmojis: s, addRecentEmoji: i, flushRecentEmojis: a };
};

const Bd = ({ emoji: e, onClick: t }) =>
  n("button", {
    className: ut.emojiButton,
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
  const r = I(null);
  const s = Li(e.emoji);

  W(() => {
    const i = (a) => {
      if (r.current && !r.current.contains(a.target)) {
        o();
      }
    };
    document.addEventListener("mousedown", i);

    return () => document.removeEventListener("mousedown", i);
  }, [o]);

  return n("div", {
    ref: r,
    className: ut.skinTonePopup,
    style: { left: e.x, top: e.y },
    children: s.map((i) =>
      n(
        "button",
        {
          className: ut.skinVariantButton,
          onClick: () => t(i, e.emoji.short_name),
          children: n("img", {
            src: wr(i),
            alt: "",
            className: ut.skinVariantImage,
          }),
        },
        i
      )
    ),
  });
};

const Mi = ({ emojis: e, onEmojiClick: t }) =>
  n("div", {
    className: ut.emojiGrid,
    children: e.map((o) =>
      n(Bd, { emoji: o, onClick: (r) => t(o, r) }, o.unified)
    ),
  });

const Fd = ({ name: e, emojis: t, onEmojiClick: o, sectionRef: r }) =>
  n("div", {
    ref: r,
    className: ut.categorySection,
    children: [
      n("div", { className: ut.categoryTitle, children: e }),
      n(Mi, { emojis: t, onEmojiClick: o }),
    ],
  });

const Hd = ({ value: e, onChange: t, placeholder: o = "Search emojis..." }) =>
  n("div", {
    className: ut.searchFloating,
    children: n("input", {
      type: "text",
      className: ut.searchInput,
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
  excludeCategories: s = [],
}) => {
  const [i, a] = x("apple");
  const [c, u] = x("");
  const [l, h] = x(null);
  const d = I(null);
  const f = I(null);
  const m = I({});
  const { all: C, byCategory: w, isLoading: v } = Od();
  const { recentEmojis: p, addRecentEmoji: y, flushRecentEmojis: T } = Dd(C);
  W(
    () => () => {
      T();
      t?.();
    },
    [T, t]
  );

  const g = Se(() => {
    if (!c.trim()) {
      return null;
    }
    const b = c.toLowerCase();
    return C.filter(
      (P) =>
        !s.includes(P.category) &&
        P.short_names.some((N) => N.toLowerCase().includes(b))
    ).slice(0, 100);
  }, [c, C, s]);

  const _ = Se(() => {
    if (i === "apple") {
      const b = [];

      if (p.length > 0) {
        b.push({ id: "recent", name: "Recent", emojis: p });
      }

      for (const P of Pd) {
        if (s.includes(P)) {
          continue;
        }
        const N = w[P] || [];

        if (N.length !== 0) {
          b.push({ id: P, name: P.split(" & ")[0], emojis: N });
        }
      }
      return b;
    }
    return [];
  }, [i, p, w, s]);

  const S = R((b, P) => {
    if (Li(b).length > 1) {
      const P_currentTarget = P.currentTarget;
      const B = f.current?.getBoundingClientRect();
      const Q = P_currentTarget.getBoundingClientRect();
      if (B) {
        const ie = Q.left - B.left + Q.width / 2;
        const X = Q.top - B.top - 60;
        h({ emoji: b, x: ie, y: X });
      }
      return;
    }
    k(b.unified, b.short_name);
  }, []);

  const k = R(
    (b, P) => {
      y(b);
      h(null);
      e({ unified: b, emoji: Ld(b), name: P, imageUrl: wr(b) });
    },
    [e, y]
  );

  const E = () =>
    v
      ? n(gt, {})
      : c && g
      ? g.length === 0
        ? n("div", { className: ut.noResults, children: "No emojis found" })
        : n(Mi, { emojis: g, onEmojiClick: S })
      : n(Re, {
          children: _.map((b) =>
            n(
              Fd,
              {
                name: b.name,
                emojis: b.emojis,
                onEmojiClick: S,
                sectionRef: (P) => {
                  m.current[b.id] = P;
                },
              },
              b.id
            )
          ),
        });

  return n("div", {
    className: ut.picker,
    style: { width: o, height: r },
    ref: f,
    children: [
      l && n(Ud, { popup: l, onSelect: k, onClose: () => h(null) }),
      n("div", { className: ut.content, ref: d, children: E() }),
      n(Hd, { value: c, onChange: u }),
    ],
  });
};

const Vd = "-cIO9SLG";
const jd = "JNwvD1Vo";
const zd = "IHofJbwy";
const Po = { wrapper: Vd, popup: jd, closing: zd };
const ss = 280;
const is = 380;
const Ao = 8;
const Xd = 100;
const as = 150;
const Yd = 150;
function yr({ onEmojiSelect: e, buttonClassName: t, size: o = 20 }) {
  const [r, s] = x(false);
  const [i, a] = x(false);
  const [c, u] = x(null);
  const l = I(null);
  const h = I(null);
  const d = I(null);
  const f = I(null);
  const m = I(null);
  const C = I(null);

  const w = R(() => {
    const l_current = l.current;
    if (!l_current) {
      return;
    }
    const E = l_current.getBoundingClientRect();

    const { innerHeight, innerWidth } = window;

    const N = innerHeight - E.bottom;
    const O = innerWidth - E.left;
    const E_right = E.right;
    const Q = N >= is + Ao ? "bottom" : "top";
    const ie = O >= ss || O > E_right ? "left" : "right";
    let X;
    let Y;

    if (Q === "top") {
      X = E.top - is - Ao;
    } else {
      X = E.bottom + Ao;
    }

    if (ie === "left") {
      Y = E.left;
    } else {
      Y = E.right - ss;
    }

    u({
      top: X,
      left: Y,
      transformOrigin: `${Q === "top" ? "bottom" : "top"} ${
        ie === "left" ? "left" : "right"
      }`,
    });
  }, []);

  const v = R(() => {
    if (!r && !i) {
      if (!i) {
        w();
        s(true);
      }
    }
  }, [r, i, w]);

  const p = R(() => {
    if (r && !i) {
      if (!i) {
        a(true);

        C.current = window.setTimeout(() => {
          s(false);
          a(false);
        }, Yd);
      }
    }
  }, [r, i]);

  const y = () => {
    if (m.current) {
      clearTimeout(m.current);
      m.current = null;
    }

    if (C.current) {
      clearTimeout(C.current);
      C.current = null;
    }

    if (i) {
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

      if (C.current) {
        clearTimeout(C.current);
      }
    },
    []
  );

  const g = () => {
    if (m.current) {
      clearTimeout(m.current);
      m.current = null;
    }

    if (C.current) {
      clearTimeout(C.current);
      C.current = null;
    }

    if (i) {
      a(false);
    }
  };

  const _ = () => {
    m.current = window.setTimeout(() => {
      p();
    }, as);
  };

  const S = (k) => {
    k.preventDefault();
  };

  return n("div", {
    ref: h,
    className: Po.wrapper,
    onMouseEnter: y,
    onMouseLeave: T,
    onMouseDown: S,
    children: [
      n("button", {
        ref: l,
        className: t,
        title: "Добавить эмоджи",
        children: n(Kc, { size: o }),
      }),
      r &&
        c &&
        vt(
          n("div", {
            ref: d,
            className: `${Po.popup} ${i ? Po.closing : ""}`,
            style: {
              position: "fixed",
              top: c.top,
              left: c.left,
              transformOrigin: c.transformOrigin,
            },
            onMouseEnter: g,
            onMouseLeave: _,
            onMouseDown: S,
            children: n(Wd, { onEmojiSelect: e }),
          }),
          document.body
        ),
    ],
  });
}
const Zd = "ea0BOksL";
const qd = "_3x0lVqeJ";
const Gd = "k1PR-0WB";
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

const le = {
  modalContent: Zd,
  container: qd,
  toolbar: Gd,
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
const jt = 0.25;
const yn = 4;
const sn = 0.15;
function Nh({
  isOpen: e,
  onClose: t,
  onSave: o,
  mode: r = "post",
  saveButtonText: s,
}) {
  const [i, a] = x(false);
  const [c, u] = x(false);

  const l = R(() => {
    u(true);
    return false;
  }, []);

  const h = R(() => {
    u(false);
    t();
  }, [t]);

  const d = R(() => {
    u(false);
  }, []);

  const f = I(null);
  const m = I(null);
  const C = I(null);
  const w = I(null);
  const v = I(1);
  const [p, y] = x("brush");
  const [T, g] = x("#000000");
  const [_, S] = x(4);
  const k = I(false);
  const [E, b] = x([]);
  const [P, N] = x(-1);
  const [O, B] = x(1);
  const [Q, ie] = x({ x: 0, y: 0 });
  const X = I(1);
  const Y = I({ x: 0, y: 0 });
  const ne = I(false);
  const te = I({ x: 0, y: 0 });
  const oe = I(null);
  const F = I(null);
  const { width: z, height: ee } = yh[r];

  const U = R(($, j) => {
    X.current = $;
    Y.current = j;
    B($);
    ie(j);
  }, []);

  const D = R(($, j, V, ge, he) => {
    const de = (ge - V.x) / $;
    const Ce = (he - V.y) / $;
    return { x: ge - de * j, y: he - Ce * j };
  }, []);

  const L = R(() => {
    const f_current = f.current;
    const C_current = C.current;
    if (!f_current || !C_current) {
      return;
    }
    const V = f_current.getContext("2d");
    if (!V) {
      return;
    }
    const v_current = v.current;
    const he = f_current.width / v_current;
    const de = f_current.height / v_current;
    const X_current = X.current;
    const Y_current = Y.current;
    V.save();
    V.setTransform(v_current, 0, 0, v_current, 0, 0);
    V.clearRect(0, 0, he, de);
    V.translate(Y_current.x, Y_current.y);
    V.scale(X_current, X_current);
    V.shadowColor = "rgba(0, 0, 0, 0.15)";
    V.shadowBlur = 20 / X_current;
    V.shadowOffsetX = 0;
    V.shadowOffsetY = 4 / X_current;
    V.fillStyle = "#FFFFFF";
    V.fillRect(0, 0, z, ee);
    V.shadowColor = "transparent";
    V.shadowBlur = 0;
    V.shadowOffsetY = 0;
    V.imageSmoothingEnabled = X_current < 2;
    V.drawImage(C_current, 0, 0, z, ee);
    V.imageSmoothingEnabled = true;
    const F_current = F.current;
    if (F_current) {
      V.strokeStyle = F_current.color;
      V.lineWidth = F_current.lineWidth;
      V.lineCap = "round";
      V.lineJoin = "round";
      V.beginPath();

      if (F_current.tool === "line") {
        V.moveTo(F_current.start.x, F_current.start.y);
        V.lineTo(F_current.current.x, F_current.current.y);
      } else if (F_current.tool === "rectangle") {
        V.rect(
          F_current.start.x,
          F_current.start.y,
          F_current.current.x - F_current.start.x,
          F_current.current.y - F_current.start.y
        );
      } else if (F_current.tool === "circle") {
        const tn = Math.hypot(
          F_current.current.x - F_current.start.x,
          F_current.current.y - F_current.start.y
        );
        V.arc(F_current.start.x, F_current.start.y, tn, 0, Math.PI * 2);
      }

      V.stroke();
    }
    V.restore();
  }, [z, ee]);

  const M = I(L);
  M.current = L;
  const Z = R(
    ($ = Infinity) => {
      const m_current = m.current;
      if (!m_current) {
        return;
      }
      const V = m_current.getBoundingClientRect();
      const ge = 32;
      const he = (V.width - ge * 2) / z;
      const de = (V.height - ge * 2) / ee;
      const Ce = Math.max(jt, Math.min(he, de, $));
      U(Ce, { x: (V.width - z * Ce) / 2, y: (V.height - ee * Ce) / 2 });
    },
    [z, ee, U]
  );

  W(() => {
    if (!e || !f.current || !f.current || !m.current) {
      return;
    }
    const f_current = f.current;
    const m_current = m.current;
    const V = window.devicePixelRatio || 1;
    v.current = V;
    const ge = m_current.getBoundingClientRect();
    f_current.width = ge.width * V;
    f_current.height = ge.height * V;
    const he = document.createElement("canvas");
    he.width = z * V;
    he.height = ee * V;
    const de = he.getContext("2d", { willReadFrequently: true });
    if (!de) {
      return;
    }
    de.scale(V, V);
    de.fillStyle = "#FFFFFF";
    de.fillRect(0, 0, z, ee);
    C.current = he;
    w.current = de;
    const Ce = de.getImageData(0, 0, he.width, he.height);
    b([Ce]);
    N(0);
    let De = true;
    const ve = new ResizeObserver((Wn) => {
      for (const Vn of Wn) {
        const { width: nn, height: Ft } = Vn.contentRect;
        if (!(nn === 0 || Ft === 0)) {
          f_current.width = nn * v.current;
          f_current.height = Ft * v.current;

          if (De) {
            const No = (nn - 64) / z;
            const bo = (Ft - 64) / ee;
            const on = Math.max(jt, Math.min(No, bo));
            U(on, { x: (nn - z * on) / 2, y: (Ft - ee * on) / 2 });
          }

          M.current();
        }
      }
    });
    ve.observe(m_current);
    const tn = setTimeout(() => {
      De = false;
    }, 500);
    return () => {
      clearTimeout(tn);
      ve.disconnect();
      C.current = null;
      w.current = null;
    };
  }, [e, z, ee]);

  W(() => {
    L();
  }, [O, Q, L]);

  const J = R(() => {
    const w_current = w.current;
    const C_current = C.current;
    if (!w_current || !C_current) {
      return;
    }
    const V = w_current.getImageData(0, 0, C_current.width, C_current.height);

    b((ge) => {
      const he = ge.slice(0, P + 1);
      he.push(V);

      if (he.length > 50) {
        he.shift();
      }

      return he;
    });

    N((ge) => Math.min(ge + 1, 49));
  }, [P]);

  const ce = R(() => {
    if (P <= 0) {
      return;
    }
    const w_current = w.current;
    if (!w_current) {
      return;
    }
    const j = P - 1;
    const E_j = E[j];

    if (E_j) {
      w_current.putImageData(E_j, 0, 0);
      N(j);
      M.current();
    }
  }, [P, E]);

  const me = R(() => {
    if (P >= E.length - 1) {
      return;
    }
    const w_current = w.current;
    if (!w_current) {
      return;
    }
    const j = P + 1;
    const E_j = E[j];

    if (E_j) {
      w_current.putImageData(E_j, 0, 0);
      N(j);
      M.current();
    }
  }, [P, E]);

  const _e = R(($) => {
    const f_current = f.current;
    if (!f_current) {
      return { x: 0, y: 0 };
    }
    const V = f_current.getBoundingClientRect();
    let ge;
    let he;

    if ("touches" in $) {
      ge = $.touches[0].clientX;
      he = $.touches[0].clientY;
    } else {
      ge = $.clientX;
      he = $.clientY;
    }

    return {
      x: (ge - V.left - Y.current.x) / X.current,
      y: (he - V.top - Y.current.y) / X.current,
    };
  }, []);

  const ue = R(
    ($) => {
      if (
        ("button" in $ && $.button !== 0) ||
        ("touches" in $ && $.touches.length > 1)
      ) {
        return;
      }
      $.preventDefault();
      const w_current = w.current;
      if (!w_current) {
        return;
      }
      const V = _e($);
      k.current = true;

      if (p === "brush" || p === "eraser") {
        w_current.beginPath();
        w_current.moveTo(V.x, V.y);
        w_current.lineCap = "round";
        w_current.lineJoin = "round";
        w_current.lineWidth = _;
        w_current.strokeStyle = p === "eraser" ? "#FFFFFF" : T;
      } else {
        F.current = {
          start: V,
          current: V,
          tool: p,
          color: T,
          lineWidth: _,
        };
      }
    },
    [p, T, _, _e]
  );

  const Ze = R(
    ($) => {
      if (!k.current || ("touches" in $ && $.touches.length > 1)) {
        return;
      }
      $.preventDefault();
      const j = _e($);
      if (p === "brush" || p === "eraser") {
        const w_current = w.current;
        if (!w_current) {
          return;
        }
        w_current.lineTo(j.x, j.y);
        w_current.stroke();
        M.current();
      } else {
        if (F.current) {
          F.current = { ...F.current, current: j };
          M.current();
        }
      }
    },
    [p, _e]
  );

  const Ve = R(() => {
    if (!k.current) {
      return;
    }
    k.current = false;
    const F_current = F.current;
    if (F_current) {
      const w_current = w.current;
      if (w_current) {
        w_current.strokeStyle = F_current.color;
        w_current.lineWidth = F_current.lineWidth;
        w_current.lineCap = "round";
        w_current.lineJoin = "round";
        w_current.beginPath();

        if (F_current.tool === "line") {
          w_current.moveTo(F_current.start.x, F_current.start.y);
          w_current.lineTo(F_current.current.x, F_current.current.y);
        } else if (F_current.tool === "rectangle") {
          w_current.rect(
            F_current.start.x,
            F_current.start.y,
            F_current.current.x - F_current.start.x,
            F_current.current.y - F_current.start.y
          );
        } else if (F_current.tool === "circle") {
          const V = Math.hypot(
            F_current.current.x - F_current.start.x,
            F_current.current.y - F_current.start.y
          );
          w_current.arc(
            F_current.start.x,
            F_current.start.y,
            V,
            0,
            Math.PI * 2
          );
        }

        w_current.stroke();
      }
      F.current = null;
    }
    J();
    M.current();
  }, [J]);

  const Le = I(Ze);
  const st = I(Ve);
  Le.current = Ze;
  st.current = Ve;
  const Ee = R(($) => {
    if ($.button === 1) {
      $.preventDefault();
      ne.current = true;
      te.current = { x: $.clientX, y: $.clientY };
    }
  }, []);

  W(() => {
    if (!e) {
      return;
    }

    const $ = (V) => {
      if (ne.current) {
        const ge = V.clientX - te.current.x;
        const he = V.clientY - te.current.y;
        te.current = { x: V.clientX, y: V.clientY };
        const Y_current = Y.current;
        U(X.current, { x: Y_current.x + ge, y: Y_current.y + he });
        return;
      }
      Le.current(V);
    };

    const j = () => {
      if (ne.current) {
        ne.current = false;
        return;
      }
      st.current();
    };

    window.addEventListener("mousemove", $);
    window.addEventListener("mouseup", j);

    return () => {
      window.removeEventListener("mousemove", $);
      window.removeEventListener("mouseup", j);
    };
  }, [e, U]);

  W(() => {
    if (!e) {
      return;
    }
    const $ = (j) => {
      if ((j.ctrlKey || j.metaKey) && j.key === "z") {
        j.preventDefault();
        j.shiftKey ? me() : ce();
      }

      if ((j.ctrlKey || j.metaKey) && j.key === "y") {
        j.preventDefault();
        me();
      }

      if ((j.ctrlKey || j.metaKey) && (j.key === "=" || j.key === "+")) {
        j.preventDefault();
        const m_current = m.current;
        if (!m_current) {
          return;
        }
        const ge = m_current.getBoundingClientRect();
        const he = ge.width / 2;
        const de = ge.height / 2;
        const X_current = X.current;
        const De = Math.min(yn, X_current + sn);
        U(De, D(X_current, De, Y.current, he, de));
      }

      if ((j.ctrlKey || j.metaKey) && j.key === "-") {
        j.preventDefault();
        const m_current = m.current;
        if (!m_current) {
          return;
        }
        const ge = m_current.getBoundingClientRect();
        const he = ge.width / 2;
        const de = ge.height / 2;
        const X_current = X.current;
        const De = Math.max(jt, X_current - sn);
        U(De, D(X_current, De, Y.current, he, de));
      }

      if ((j.ctrlKey || j.metaKey) && j.key === "0") {
        j.preventDefault();
        Z();
      }
    };
    window.addEventListener("keydown", $);

    return () => window.removeEventListener("keydown", $);
  }, [e, ce, me, U, D, Z]);

  W(() => {
    if (!e) {
      return;
    }
    const m_current = m.current;
    if (!m_current) {
      return;
    }
    const j = (V) => {
      V.preventDefault();
      const ge = m_current.getBoundingClientRect();
      const he = V.clientX - ge.left;
      const de = V.clientY - ge.top;
      if (V.ctrlKey || V.metaKey) {
        const X_current = X.current;
        const De = V.deltaY > 0 ? -sn : sn;
        const ve = Math.min(yn, Math.max(jt, X_current + De));
        if (ve === X_current) {
          return;
        }
        U(ve, D(X_current, ve, Y.current, he, de));
      } else {
        U(X.current, {
          x: Y.current.x - V.deltaX,
          y: Y.current.y - V.deltaY,
        });
      }
    };
    m_current.addEventListener("wheel", j, { passive: false });

    return () => m_current.removeEventListener("wheel", j);
  }, [e, U, D]);

  W(() => {
    if (!e) {
      return;
    }
    const m_current = m.current;
    if (!m_current) {
      return;
    }

    const j = (de, Ce) =>
      Math.hypot(Ce.clientX - de.clientX, Ce.clientY - de.clientY);

    const V = (de) => {
      if (de.touches.length === 2) {
        de.preventDefault();

        if (k.current) {
          k.current = false;
          F.current = null;
        }

        const Ce = m_current.getBoundingClientRect();
        const De = de.touches[0];
        const ve = de.touches[1];
        oe.current = {
          dist: j(De, ve),
          midX: (De.clientX + ve.clientX) / 2 - Ce.left,
          midY: (De.clientY + ve.clientY) / 2 - Ce.top,
        };
      }
    };

    const ge = (de) => {
      if (de.touches.length === 2 && oe.current) {
        de.preventDefault();
        const Ce = m_current.getBoundingClientRect();
        const De = de.touches[0];
        const ve = de.touches[1];
        const tn = j(De, ve);
        const Wn = (De.clientX + ve.clientX) / 2 - Ce.left;
        const Vn = (De.clientY + ve.clientY) / 2 - Ce.top;
        const nn = tn / oe.current.dist;
        const X_current = X.current;
        const Co = Math.min(yn, Math.max(jt, X_current * nn));
        const No = Wn - oe.current.midX;
        const bo = Vn - oe.current.midY;
        const on = D(
          X_current,
          Co,
          Y.current,
          oe.current.midX,
          oe.current.midY
        );
        U(Co, { x: on.x + No, y: on.y + bo });
        oe.current = { dist: tn, midX: Wn, midY: Vn };
      }
    };

    const he = (de) => {
      if (de.touches.length < 2) {
        oe.current = null;
      }
    };

    m_current.addEventListener("touchstart", V, { passive: false });
    m_current.addEventListener("touchmove", ge, { passive: false });
    m_current.addEventListener("touchend", he);
    m_current.addEventListener("touchcancel", he);

    return () => {
      m_current.removeEventListener("touchstart", V);
      m_current.removeEventListener("touchmove", ge);
      m_current.removeEventListener("touchend", he);
      m_current.removeEventListener("touchcancel", he);
    };
  }, [e, U, D]);

  const ae = R(() => {
    const w_current = w.current;

    if (w_current) {
      w_current.fillStyle = "#FFFFFF";
      w_current.fillRect(0, 0, z, ee);
      J();
      M.current();
    }
  }, [z, ee, J]);

  const H = async () => {
    const C_current = C.current;
    if (!C_current || i) {
      return;
    }
    const j = C_current.toDataURL("image/png");
    a(true);
    try {
      await o(j);
      t();
    } catch (V) {
      console.error("Failed to save drawing:", V);
    } finally {
      a(false);
    }
  };

  const se = () => {
    const m_current = m.current;
    if (!m_current) {
      return;
    }
    const j = m_current.getBoundingClientRect();
    const V = j.width / 2;
    const ge = j.height / 2;
    const X_current = X.current;
    const de = Math.min(yn, X_current + sn);
    U(de, D(X_current, de, Y.current, V, ge));
  };

  const be = () => {
    const m_current = m.current;
    if (!m_current) {
      return;
    }
    const j = m_current.getBoundingClientRect();
    const V = j.width / 2;
    const ge = j.height / 2;
    const X_current = X.current;
    const de = Math.max(jt, X_current - sn);
    U(de, D(X_current, de, Y.current, V, ge));
  };

  const Qe = () => Z();

  return e
    ? n(Re, {
        children: [
          n(Ke, {
            onClose: t,
            onBeforeClose: l,
            showHeader: false,
            contentClassName: le.modalContent,
            size: "wide",
            children: n("div", {
              className: le.container,
              children: [
                n("div", {
                  className: le.toolbar,
                  children: [
                    n("div", {
                      className: le.toolGroup,
                      children: [
                        n("button", {
                          className: `${le.toolButton} ${
                            p === "brush" ? le.active : ""
                          }`,
                          onClick: () => y("brush"),
                          title: "Кисть",
                          children: n(bh, {}),
                        }),
                        n("button", {
                          className: `${le.toolButton} ${
                            p === "eraser" ? le.active : ""
                          }`,
                          onClick: () => y("eraser"),
                          title: "Ластик",
                          children: n(Th, {}),
                        }),
                        n("button", {
                          className: `${le.toolButton} ${
                            p === "line" ? le.active : ""
                          }`,
                          onClick: () => y("line"),
                          title: "Линия",
                          children: n(kh, {}),
                        }),
                        n("button", {
                          className: `${le.toolButton} ${
                            p === "rectangle" ? le.active : ""
                          }`,
                          onClick: () => y("rectangle"),
                          title: "Прямоугольник",
                          children: n(Eh, {}),
                        }),
                        n("button", {
                          className: `${le.toolButton} ${
                            p === "circle" ? le.active : ""
                          }`,
                          onClick: () => y("circle"),
                          title: "Круг",
                          children: n(Rh, {}),
                        }),
                      ],
                    }),
                    n("div", { className: le.separator }),
                    n("div", {
                      className: le.toolGroup,
                      children: Ch.map(($) =>
                        n(
                          "button",
                          {
                            className: `${le.sizeButton} ${
                              _ === $ ? le.active : ""
                            }`,
                            onClick: () => S($),
                            title: `${$}px`,
                            children: n("span", {
                              className: le.sizePreview,
                              style: {
                                width: Math.min($, 20),
                                height: Math.min($, 20),
                              },
                            }),
                          },
                          $
                        )
                      ),
                    }),
                    n("div", { className: le.separator }),
                    n("div", {
                      className: le.colorPalette,
                      children: [
                        _h.map(($) =>
                          n(
                            "button",
                            {
                              className: `${le.colorButton} ${
                                T === $ ? le.active : ""
                              }`,
                              style: { backgroundColor: $ },
                              onClick: () => g($),
                              title: $,
                            },
                            $
                          )
                        ),
                        n("input", {
                          type: "color",
                          value: T,
                          onChange: ($) => g($.currentTarget.value),
                          className: le.colorPicker,
                          title: "Свой цвет",
                        }),
                      ],
                    }),
                    n("div", { className: le.spacer }),
                    n("div", {
                      className: le.toolGroup,
                      children: [
                        n("button", {
                          className: le.toolButton,
                          onClick: be,
                          disabled: O <= jt,
                          title: "Уменьшить",
                          children: n(Ah, {}),
                        }),
                        n("button", {
                          className: le.zoomLabel,
                          onClick: Qe,
                          title: "Сбросить зум",
                          children: [Math.round(O * 100), "%"],
                        }),
                        n("button", {
                          className: le.toolButton,
                          onClick: se,
                          disabled: O >= yn,
                          title: "Увеличить",
                          children: n(Ph, {}),
                        }),
                      ],
                    }),
                    n("div", { className: le.separator }),
                    n("div", {
                      className: le.toolGroup,
                      children: [
                        n("button", {
                          className: le.toolButton,
                          onClick: ce,
                          disabled: P <= 0,
                          title: "Отменить (Ctrl+Z)",
                          children: n(Sh, {}),
                        }),
                        n("button", {
                          className: le.toolButton,
                          onClick: me,
                          disabled: P >= E.length - 1,
                          title: "Повторить (Ctrl+Y)",
                          children: n(Ih, {}),
                        }),
                        n("button", {
                          className: le.toolButton,
                          onClick: ae,
                          title: "Очистить",
                          children: n(xh, {}),
                        }),
                      ],
                    }),
                  ],
                }),
                n("div", {
                  ref: m,
                  className: le.canvasContainer,
                  onMouseDown: Ee,
                  children: n("canvas", {
                    ref: f,
                    className: le.viewport,
                    onMouseDown: ue,
                    onTouchStart: ue,
                    onTouchMove: Ze,
                    onTouchEnd: Ve,
                    onTouchCancel: Ve,
                  }),
                }),
                n("div", {
                  className: le.actions,
                  children: [
                    n("button", {
                      className: le.cancelButton,
                      onClick: () => l(),
                      disabled: i,
                      children: "Отмена",
                    }),
                    n("button", {
                      className: le.saveButton,
                      onClick: H,
                      disabled: i,
                      children: i
                        ? n(Re, { children: [n(Fn, {}), "Загрузка..."] })
                        : s ||
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
            vt(
              n("div", {
                className: le.confirmOverlay,
                onClick: d,
                children: n("div", {
                  className: le.confirmDialog,
                  onClick: ($) => $.stopPropagation(),
                  children: [
                    n("p", {
                      className: le.confirmText,
                      children:
                        "Вы действительно хотите закрыть рисовалку? Ваши изменения будут не сохранены.",
                    }),
                    n("div", {
                      className: le.confirmActions,
                      children: [
                        n("button", {
                          className: le.confirmCancel,
                          onClick: d,
                          children: "Отмена",
                        }),
                        n("button", {
                          className: le.confirmClose,
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

const Lh = "_2sS6K7hx";
const Mh = "WGDOlmRO";
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
const Zh = "_0a-n56Kv";

const Xe = {
  editor: Lh,
  empty: Mh,
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
  linkSubmit: Zh,
};

const qh = [
  { type: "bold", icon: Sc, title: "Жирный" },
  { type: "italic", icon: Ac, title: "Курсив" },
  { type: "underline", icon: Dc, title: "Подчёркнутый" },
  { type: "strike", icon: $c, title: "Зачёркнутый" },
  { type: "spoiler", icon: Mc, title: "Спойлер" },
  { type: "monospace", icon: xc, title: "Моноширинный" },
  { type: "quote", icon: Lc, title: "Цитата" },
  { type: "link", icon: wi, title: "Ссылка" },
];

const fo = {
  bold: Xe.bold,
  italic: Xe.italic,
  underline: Xe.underline,
  strike: Xe.strike,
  spoiler: Xe.spoiler,
  monospace: Xe.monospace,
  quote: Xe.quote,
  link: Xe.link,
};

const _o = Bn(
  (
    {
      value: t,
      spans: o,
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
    const C = I(null);
    const [w, v] = x(false);
    const [p, y] = x({ x: 0, y: 0 });
    const [T, g] = x(false);
    const [_, S] = x("");
    const k = I(null);
    const E = I(null);
    const b = I(null);
    const P = I(false);
    const N = I(false);
    const O = I(t);
    const B = I(o);
    const Q = I(r);

    W(() => {
      O.current = t;
      B.current = o;
      Q.current = r;
    }, [t, o, r]);

    mn(
      m,
      () => ({
        insertText: (D) => {
          const C_current = C.current;
          if (!C_current) {
            return;
          }
          C_current.focus();
          const M = window.getSelection();
          if (!M) {
            return;
          }
          let q = 0;
          if (M.rangeCount > 0) {
            const ue = M.getRangeAt(0);
            q = Jh(C_current, ue.startContainer, ue.startOffset);
          }
          const O_current = O.current;
          const B_current = B.current;
          const ce = O_current.slice(0, q) + D + O_current.slice(q);

          const me = B_current.map((ue) =>
            ue.offset >= q
              ? { ...ue, offset: ue.offset + D.length }
              : ue.offset + ue.length > q
              ? { ...ue, length: ue.length + D.length }
              : ue
          );

          N.current = true;
          O.current = ce;
          B.current = me;
          const _e = document.createTextNode(D);
          if (M.rangeCount > 0) {
            const ue = M.getRangeAt(0);
            ue.deleteContents();
            ue.insertNode(_e);
            ue.setStartAfter(_e);
            ue.setEndAfter(_e);
            M.removeAllRanges();
            M.addRange(ue);
          }
          Q.current(ce, me);
        },

        focus: () => {
          C.current?.focus();
        },
      }),
      []
    );

    const ie = R(() => {
      if (!t) {
        return "";
      }
      if (o.length === 0) {
        return Lo(t);
      }

      const D = [...o].sort((J, ce) => J.offset - ce.offset);

      const L = [];
      for (const J of D) {
        L.push({ pos: J.offset, type: "start", span: J });
        L.push({ pos: J.offset + J.length, type: "end", span: J });
      }
      L.sort((J, ce) =>
        J.pos !== ce.pos
          ? J.pos - ce.pos
          : J.type !== ce.type
          ? J.type === "end"
            ? -1
            : 1
          : 0
      );
      let M = "";
      let q = 0;
      const Z = [];
      for (const J of L) {
        if (J.pos > q) {
          const ce = t.substring(q, J.pos);
          M += cs(Lo(ce), Z);
          q = J.pos;
        }
        if (J.type === "start") {
          Z.push(J.span);
        } else {
          const ce = Z.indexOf(J.span);

          if (ce !== -1) {
            Z.splice(ce, 1);
          }
        }
      }
      if (q < t.length) {
        const J = t.substring(q);
        M += cs(Lo(J), Z);
      }
      return M || "<br>";
    }, [t, o]);

    W(() => {
      if (N.current) {
        N.current = false;
        return;
      }
      const C_current = C.current;
      if (!C_current || (document.activeElement === C_current && t !== "")) {
        return;
      }
      const L = ie();

      if (C_current.innerHTML !== L) {
        C_current.innerHTML = L;
      }
    }, [ie, t]);

    W(() => {
      if (a && C.current) {
        const C_current = C.current;
        C_current.focus();

        if (C_current.childNodes.length > 0) {
          const L = window.getSelection();
          if (L) {
            const M = document.createRange();
            M.selectNodeContents(C_current);
            M.collapse(false);
            L.removeAllRanges();
            L.addRange(M);
          }
        }
      }
    }, [a]);

    W(() => {
      if (T && E.current) {
        E.current.focus();
      }
    }, [T]);

    const X = R(
      (D) => {
        if (P.current) {
          return;
        }
        const C_current = C.current;
        if (!C_current) {
          return;
        }
        if (D?.data === " ") {
          const Z = window.getSelection();
          if (Z && Z.rangeCount > 0) {
            const ce = Z.getRangeAt(0).startContainer;
            let me = null;
            let _e = ce;

            while (_e && _e !== C_current) {
              if (_e.nodeType === Node.ELEMENT_NODE) {
                const ue = _e;
                if (ue.tagName === "SPAN" && ue.className) {
                  me = ue;
                  break;
                }
              }
              _e = _e.parentNode;
            }

            if (me) {
              const ue = me.textContent || "";
              if (ue.endsWith(" ")) {
                me.textContent = ue.slice(0, -1);
                const Ze = document.createTextNode(" ");
                me.parentNode?.insertBefore(Ze, me.nextSibling);
                const Ve = document.createRange();
                Ve.setStartAfter(Ze);
                Ve.setEndAfter(Ze);
                Z.removeAllRanges();
                Z.addRange(Ve);
              }
            }
          }
        }
        const M = C_current.innerText.replace(/\n$/, "");
        if (M.length > i) {
          const Z = M.substring(0, i);
          N.current = true;
          r(Z, Qh(o, Z));
          return;
        }
        const q = ef(C_current);
        N.current = true;
        r(M, q);
      },
      [i, r, o]
    );

    const Y = R(
      (D) => {
        if (d) {
          return;
        }
        const L = window.getSelection();
        if (!L || L.isCollapsed) {
          return;
        }
        D.preventDefault();
        b.current = L.getRangeAt(0).cloneRange();

        const M = Math.max(
          10,
          Math.min(D.clientX - 150, window.innerWidth - 310)
        );

        const q = Math.max(10, D.clientY - 50);
        y({ x: M, y: q });
        v(true);
      },
      [d]
    );

    const ne = R(
      (D) => {
        D.preventDefault();

        if (f && D.clipboardData?.files?.length) {
          const J = Array.from(D.clipboardData.files).filter((ce) =>
            ce.type.startsWith("image/")
          );
          if (J.length > 0) {
            f(J);
            return;
          }
        }

        const L = D.clipboardData?.getData("text/plain") || "";
        if (!L) {
          return;
        }
        const M = window.getSelection();
        if (!M || !M.rangeCount) {
          return;
        }
        const q = M.getRangeAt(0);
        q.deleteContents();
        const Z = document.createTextNode(L);
        q.insertNode(Z);
        q.setStartAfter(Z);
        q.setEndAfter(Z);
        M.removeAllRanges();
        M.addRange(q);
        X();
      },
      [X, f]
    );

    const te = R(() => {
      const C_current = C.current;
      if (C_current && !O.current) {
        const L = window.getSelection();
        if (L) {
          const M = document.createRange();
          M.setStart(C_current, 0);
          M.collapse(true);
          L.removeAllRanges();
          L.addRange(M);
        }
      }
    }, []);

    const oe = R(
      (D) => {
        if (D.key === "Enter" && !D.shiftKey && h) {
          D.preventDefault();
          h();
          return;
        }
        if (!d && (D.ctrlKey || D.metaKey)) {
          let L = null;
          switch (D.key.toLowerCase()) {
            case "b": {
              L = "bold";
              break;
            }
            case "i": {
              L = "italic";
              break;
            }
            case "u": {
              L = "underline";
              break;
            }
          }

          if (L) {
            D.preventDefault();
            F(L);
          }
        }
      },
      [h, d]
    );

    const F = R(
      (D, L) => {
        const C_current = C.current;
        if (!C_current) {
          return;
        }
        const q = window.getSelection();
        if (
          !q ||
          (b.current && (q.removeAllRanges(), q.addRange(b.current)),
          q.isCollapsed)
        ) {
          return;
        }
        const Z = q.getRangeAt(0);
        const J = document.createElement("span");
        J.className = fo[D];

        if (D === "link" && L) {
          J.dataset.url = L;
        }

        const ce = tf(Z.commonAncestorContainer, fo[D]);
        if (ce) {
          nf(ce);
        } else {
          try {
            Z.surroundContents(J);
          } catch {
            const me = Z.extractContents();
            J.appendChild(me);
            Z.insertNode(J);
          }
        }
        X();
        v(false);
        g(false);
        S("");
        b.current = null;
        C_current.focus();
      },
      [X]
    );

    const z = R(
      (D) => {
        if (D === "link") {
          g(true);
        } else {
          F(D);
        }
      },
      [F]
    );

    const ee = R(
      (D) => {
        D.preventDefault();

        if (_.trim()) {
          F("link", _.trim());
        }
      },
      [F, _]
    );

    W(() => {
      if (!w) {
        return;
      }

      const D = (M) => {
        if (k.current && !k.current.contains(M.target)) {
          v(false);
          g(false);
          S("");
          b.current = null;
        }
      };

      const L = () => {
        v(false);
        g(false);
        S("");
        b.current = null;
      };

      document.addEventListener("mousedown", D);
      window.addEventListener("scroll", L, true);

      return () => {
        document.removeEventListener("mousedown", D);
        window.removeEventListener("scroll", L, true);
      };
    }, [w]);
    const U = !t;
    return n(Re, {
      children: [
        n("div", {
          ref: C,
          className: `${Xe.editor} ${c} ${U ? Xe.empty : ""}`,
          contentEditable: true,
          "data-placeholder": s,
          onInput: (D) => X(D),
          onFocus: te,
          onPaste: ne,
          onContextMenu: Y,
          onKeyDown: oe,
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
          vt(
            n("div", {
              ref: k,
              className: Xe.menu,
              style: { left: p.x, top: p.y },
              children: T
                ? n("form", {
                    className: Xe.linkForm,
                    onSubmit: ee,
                    children: [
                      n("input", {
                        ref: E,
                        type: "url",
                        className: Xe.linkInput,
                        placeholder: "https://...",
                        value: _,
                        onInput: (D) => S(D.target.value),
                      }),
                      n("button", {
                        type: "submit",
                        className: Xe.linkSubmit,
                        disabled: !_.trim(),
                        children: "OK",
                      }),
                    ],
                  })
                : n("div", {
                    className: Xe.buttons,
                    children: qh.map(({ type: D, icon: L, title: M }) =>
                      n(
                        "button",
                        {
                          type: "button",
                          className: Xe.button,
                          onClick: () => z(D),
                          title: M,
                          children: n(L, { size: 16 }),
                        },
                        D
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
function Gh(e) {
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
    const s = fo[r.type];
    const i = r.type === "link" ? ` data-url="${Gh(r.url)}"` : "";
    o = `<span class="${s}"${i}>${o}</span>`;
  }
  return o;
}
function Jh(e, t, o) {
  let r = 0;
  const s = document.createTreeWalker(e, NodeFilter.SHOW_TEXT);
  let i = s.nextNode();

  while (i) {
    if (i === t) {
      return r + o;
    }
    r += i.textContent?.length || 0;
    i = s.nextNode();
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

  const o = (r, s) => {
    if (r.nodeType === Node.TEXT_NODE) {
      return s + (r.textContent?.length || 0);
    }
    if (r.nodeType === Node.ELEMENT_NODE) {
      const i = r;
      if (i.tagName === "BR") {
        return s + 1;
      }
      let a = null;
      for (const [l, h] of Object.entries(fo)) {
        if (i.classList.contains(h)) {
          a = l;
          break;
        }
      }
      const c = s;
      let u = s;
      for (const l of Array.from(r.childNodes)) {
        u = o(l, u);
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
const Lf = "X4D-Hg95";
const Mf = "WafaU2-d";
const $f = "eb-u7Ezx";
const Of = "u52eDQyv";
const Df = "V-0z6M2W";
const Bf = "_7-fvD6Zx";

const pe = {
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
  pollOption: Lf,
  removeOption: Mf,
  addOption: $f,
  pollFooter: Of,
  pollToggle: Df,
  active: Bf,
};

function ls({ src: e, type: t }) {
  return t === "video"
    ? n("div", {
        className: pe.videoPreviewWrapper,
        children: [
          n("video", { src: e, preload: "metadata" }),
          n("div", {
            className: pe.videoPlayIcon,
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
function $i({ images: e, uploadingImages: t, onRemove: o }) {
  return e.length > 0 || t.length > 0
    ? n("div", {
        className: pe.attachments,
        children: [
          e.map((s) =>
            n(
              "div",
              {
                className: pe.attachmentPreview,
                children: [
                  n(ls, { src: s.previewUrl, type: s.type }),
                  n("button", {
                    className: pe.removeAttachment,
                    onClick: () => o(s.id),
                    children: n(kt, {}),
                  }),
                ],
              },
              s.id
            )
          ),
          t.map((s) =>
            n(
              "div",
              {
                className: `${pe.attachmentPreview} ${
                  s.error ? pe.uploadError : pe.uploading
                }`,
                children: [
                  n(ls, { src: s.previewUrl, type: s.type }),
                  !s.error &&
                    n("div", {
                      className: pe.uploadOverlay,
                      children: n("div", { className: pe.spinner }),
                    }),
                  s.error &&
                    n("div", {
                      className: pe.errorOverlay,
                      children: n("span", {
                        className: pe.errorText,
                        children: s.error,
                      }),
                    }),
                  n("button", {
                    className: pe.removeAttachment,
                    onClick: () => o(s.id),
                    children: n(kt, {}),
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
  onRemoveOption: s,
  onMultipleChoiceToggle: i,
  onClose: a,
}) {
  return n("div", {
    className: pe.pollContainer,
    children: [
      n("div", {
        className: pe.pollHeader,
        children: [
          n("span", { className: pe.pollTitle, children: "Опрос" }),
          n("button", {
            className: pe.pollClose,
            onClick: a,
            children: n(kt, {}),
          }),
        ],
      }),
      n("input", {
        type: "text",
        className: pe.pollQuestion,
        placeholder: "Вопрос опроса",
        value: e.question,
        onInput: (c) => t(c.target.value),
      }),
      n("div", {
        className: pe.pollOptions,
        children: e.options.map((c, u) =>
          n(
            "div",
            {
              className: pe.pollOptionRow,
              children: [
                n("input", {
                  type: "text",
                  className: pe.pollOption,
                  placeholder: `Вариант ${u + 1}`,
                  value: c.text,
                  maxLength: 50,
                  onInput: (l) => o(c.id, l.target.value),
                }),
                e.options.length > Lt.MIN_POLL_OPTIONS &&
                  n("button", {
                    className: pe.removeOption,
                    onClick: () => s(c.id),
                    children: n(kt, {}),
                  }),
              ],
            },
            c.id
          )
        ),
      }),
      e.options.length < Lt.MAX_POLL_OPTIONS &&
        n("button", {
          className: pe.addOption,
          onClick: r,
          children: [n(pr, {}), n("span", { children: "Добавить вариант" })],
        }),
      n("div", {
        className: pe.pollFooter,
        children: n("label", {
          className: pe.pollToggle,
          children: [
            n("input", {
              type: "checkbox",
              checked: e.multipleChoice,
              onChange: i,
            }),
            n("span", { children: "Несколько вариантов ответа" }),
          ],
        }),
      }),
    ],
  });
}
const Mo = {
  question: "",
  options: [
    { id: "1", text: "" },
    { id: "2", text: "" },
  ],
  multipleChoice: false,
};
function Ff() {
  const [e, t] = x(false);
  const [o, r] = x(Mo);

  const s = R((C) => {
    if (C.length <= Lt.MAX_POLL_QUESTION_LENGTH) {
      r((w) => ({
        ...w,
        question: C,
      }));
    }
  }, []);

  const i = R((C, w) => {
    if (w.length <= Lt.MAX_POLL_OPTION_LENGTH) {
      r((v) => ({
        ...v,
        options: v.options.map((p) => (p.id === C ? { ...p, text: w } : p)),
      }));
    }
  }, []);

  const a = R(() => {
    if (o.options.length < Lt.MAX_POLL_OPTIONS) {
      r((C) => ({
        ...C,
        options: [...C.options, { id: Date.now().toString(), text: "" }],
      }));
    }
  }, [o.options.length]);

  const c = R(
    (C) => {
      if (o.options.length > Lt.MIN_POLL_OPTIONS) {
        r((w) => ({
          ...w,
          options: w.options.filter((v) => v.id !== C),
        }));
      }
    },
    [o.options.length]
  );

  const u = R(() => {
    r((C) => ({
      ...C,
      multipleChoice: !C.multipleChoice,
    }));
  }, []);

  const l = R(() => {
    t(false);
    r(Mo);
  }, []);

  const h = R(() => {
    t((C) => !C);
  }, []);

  const d = R(() => {
    if (!e) {
      return true;
    }
    const C = o.question.trim().length > 0;

    const w = o.options.filter((v) => v.text.trim().length > 0);

    return C && w.length >= Lt.MIN_POLL_OPTIONS;
  }, [e, o]);

  const f = R(() => {
    if (!(!e || !d())) {
      return {
        question: o.question.trim(),
        options: o.options
          .filter((C) => C.text.trim().length > 0)
          .map((C) => ({
            text: C.text.trim(),
          })),
        multipleChoice: o.multipleChoice,
      };
    }
  }, [e, d, o]);

  const m = R(() => {
    t(false);
    r(Mo);
  }, []);

  return {
    isPollOpen: e,
    poll: o,
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
function Oi(e = 10, t = false) {
  const [o, r] = x([]);
  const [s, i] = x([]);
  const a = I(null);
  const c = I(o);
  const u = I(s);
  c.current = o;
  u.current = s;

  W(
    () => () => {
      c.current.forEach((T) => URL.revokeObjectURL(T.previewUrl));

      u.current.forEach((T) => URL.revokeObjectURL(T.previewUrl));
    },
    []
  );

  const l = s.length > 0;

  const h =
    o.some((T) => T.type === "video") || s.some((T) => T.type === "video");

  const d =
    o.some((T) => T.type === "image") || s.some((T) => T.type === "image");

  const f = R(() => {
    a.current?.click();
  }, []);

  const m = R(
    async (T) => {
      const g = cn.isValidVideoType(T);
      const _ = cn.isValidImageType(T);
      if (g && !t) {
        We.error(
          "Загрузка видео доступна только верифицированным пользователям"
        );
        return;
      }
      if (!_ && !g) {
        We.error("Неподдерживаемый формат файла");
        return;
      }
      const c_current = c.current;
      const u_current = u.current;

      const E =
        c_current.some((B) => B.type === "video") ||
        u_current.some((B) => B.type === "video");

      const b =
        c_current.some((B) => B.type === "image") ||
        u_current.some((B) => B.type === "image");

      if (g && b) {
        We.error("Нельзя добавить видео вместе с изображениями");
        return;
      }
      if (_ && E) {
        We.error("Нельзя добавить изображения вместе с видео");
        return;
      }
      if (g && E) {
        We.error("Можно загрузить только 1 видео");
        return;
      }
      const P = `upload-${Date.now()}-${Math.random().toString(36).slice(2)}`;
      const N = URL.createObjectURL(T);
      const O = g ? "video" : "image";
      i((B) => [...B, { id: P, file: T, previewUrl: N, progress: 0, type: O }]);
      try {
        const B = await cn.uploadMedia(T);

        i((Q) => Q.filter((ie) => ie.id !== P));

        r((Q) => [
          ...Q,
          {
            id: `img-${Date.now()}-${Math.random().toString(36).slice(2)}`,
            mediaId: B.id,
            url: B.url,
            previewUrl: N,
            type: O,
          },
        ]);
      } catch (B) {
        let Q = "Ошибка загрузки";

        if (Ue(B)) {
          Q = Wf(B.code, B.message);
        } else if (B instanceof Error) {
          Q = B.message;
        }

        We.error(Q);

        i((ie) => ie.filter((X) => X.id !== P));

        URL.revokeObjectURL(N);
      }
    },
    [t]
  );

  const C = R(
    (T) => {
      const T_target = T.target;
      const T_target_files = T_target.files;
      if (!T_target_files || T_target_files.length === 0) {
        return;
      }
      const S = o.length + s.length;
      const k = e - S;
      if (k <= 0) {
        return;
      }
      Array.from(T_target_files).slice(0, k).forEach(m);
      T_target.value = "";
    },
    [o.length, s.length, e, m]
  );

  const w = R((T) => {
    r((g) => {
      const _ = g.find((S) => S.id === T);

      if (_) {
        URL.revokeObjectURL(_.previewUrl);
      }

      return g.filter((S) => S.id !== T);
    });

    i((g) => {
      const _ = g.find((S) => S.id === T);

      if (_) {
        URL.revokeObjectURL(_.previewUrl);
      }

      return g.filter((S) => S.id !== T);
    });
  }, []);

  const v = R(
    (T) => {
      const g = T.filter((k) =>
        t ? cn.isValidMediaType(k) : cn.isValidImageType(k)
      );
      if (g.length === 0) {
        return;
      }
      const _ = c.current.length + u.current.length;
      const S = e - _;

      if (S > 0) {
        g.slice(0, S).forEach(m);
      }
    },
    [e, m, t]
  );

  const p = R(
    async (T) => {
      const [g, _] = T.split(",");
      const S = g.match(/:(.*?);/)?.[1] || "image/png";
      const k = atob(_);
      const E = new Uint8Array(k.length);
      for (let N = 0; N < k.length; N++) {
        E[N] = k.charCodeAt(N);
      }
      const b = new Blob([E], { type: S });
      const P = new File([b], `drawing-${Date.now()}.png`, {
        type: "image/png",
      });
      m(P);
    },
    [m]
  );

  const y = R(() => {
    o.forEach((T) => URL.revokeObjectURL(T.previewUrl));

    s.forEach((T) => URL.revokeObjectURL(T.previewUrl));

    r([]);
    i([]);
  }, [o, s]);

  return {
    images: o,
    uploadingImages: s,
    isUploading: l,
    hasVideo: h,
    hasImages: d,
    openFilePicker: f,
    removeImage: w,
    addImage: p,
    uploadFiles: v,
    clearAll: y,
    fileInputRef: a,
    handleFileChange: C,
  };
}
function Di({
  onSubmit: e,
  autoFocus: t = false,
  placeholder: o = "Что нового?",
}) {
  const {
    text: r,
    spans: s,
    editorRef: i,
    handleChange: a,
    insertText: c,
    reset: u,
  } = wo();

  const [l, h] = x(false);
  const [d, f] = x(false);
  const [m, C] = x(false);
  const w = I(0);
  const v = Tt();
  const y = vo()?.isVerified ?? false;

  const {
    images: T,
    uploadingImages: g,
    isUploading: _,
    hasVideo: S,
    openFilePicker: k,
    removeImage: E,
    addImage: b,
    uploadFiles: P,
    clearAll: N,
    fileInputRef: O,
    handleFileChange: B,
  } = Oi(10, y);

  const {
    isPollOpen: Q,
    poll: ie,
    togglePoll: X,
    handlePollQuestionChange: Y,
    handlePollOptionChange: ne,
    handleAddPollOption: te,
    handleRemovePollOption: oe,
    handleMultipleChoiceToggle: F,
    handleClosePoll: z,
    isPollValid: ee,
    getPollData: U,
    resetPoll: D,
  } = Ff();

  const L = Lt.MAX_CHARS - r.length;
  const M = L < 0;
  const q = Q && ee();
  const Z = T.length > 0 || g.length > 0;
  const J = r.trim().length > 0 || q || q || Z;
  const ce = y ? `${Go},${ec}` : Go;

  const me = R(async () => {
    if (!(!J || M || M || _ || M || _ || d)) {
      f(true);
      try {
        const Ee = T.map((ae) => ({
          mediaId: ae.mediaId,
          url: ae.url,
        }));
        await e?.(r, s, Ee, U());
        u();
        N();
        D();
      } catch {
      } finally {
        f(false);
      }
    }
  }, [J, M, _, d, r, s, T, U, e, u, N, D]);

  const _e = R(
    (Ee) => {
      b(Ee);
    },
    [b]
  );

  const ue = R(
    (Ee) => {
      c(Ee.emoji);
    },
    [c]
  );

  const Ze = R((Ee) => {
    Ee.preventDefault();
    Ee.stopPropagation();
    w.current++;

    if (Ee.dataTransfer?.types.includes("Files")) {
      C(true);
    }
  }, []);

  const Ve = R((Ee) => {
    Ee.preventDefault();
    Ee.stopPropagation();
  }, []);

  const Le = R((Ee) => {
    Ee.preventDefault();
    Ee.stopPropagation();
    w.current--;

    if (w.current === 0) {
      C(false);
    }
  }, []);

  const st = R(
    (Ee) => {
      Ee.preventDefault();
      Ee.stopPropagation();
      w.current = 0;
      C(false);
      const ae = Ee.dataTransfer?.files;

      if (ae && ae.length > 0) {
        P(Array.from(ae));
      }
    },
    [P]
  );

  return n("div", {
    className: `${pe.form} ${m ? pe.dragActive : ""}`,
    onDragEnter: Ze,
    onDragOver: Ve,
    onDragLeave: Le,
    onDrop: st,
    children: [
      m &&
        n("div", {
          className: pe.dragOverlay,
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
        className: pe.whatsNew,
        children: n(_o, {
          ref: i,
          value: r,
          spans: s,
          onChange: a,
          placeholder: o,
          autoFocus: t,
          className: pe.editor,
          minHeight: 40,
          maxHeight: Lt.MAX_TEXTAREA_HEIGHT,
          onImagePaste: P,
        }),
      }),
      n($i, { images: T, uploadingImages: g, onRemove: E }),
      n("input", {
        ref: O,
        type: "file",
        accept: ce,
        multiple: !S,
        onChange: B,
        style: { display: "none" },
      }),
      Q &&
        n(Uf, {
          poll: ie,
          onQuestionChange: Y,
          onOptionChange: ne,
          onAddOption: te,
          onRemoveOption: oe,
          onMultipleChoiceToggle: F,
          onClose: z,
        }),
      n("div", {
        className: pe.actions,
        children: [
          n("div", {
            className: pe.mediaButtons,
            children: [
              n("button", {
                className: pe.mediaButton,
                onClick: k,
                title: y ? "Добавить медиа" : "Добавить изображение",
                children: n(gi, {}),
              }),
              !v &&
                n(yr, { onEmojiSelect: ue, buttonClassName: pe.mediaButton }),
              n("button", {
                className: pe.mediaButton,
                onClick: () => h(true),
                title: "Нарисовать",
                disabled: S,
                children: n(qc, {}),
              }),
              n("button", {
                className: `${pe.mediaButton} ${Q ? pe.active : ""}`,
                onClick: X,
                title: "Добавить опрос",
                children: n(Gc, {}),
              }),
            ],
          }),
          n("div", {
            className: pe.submitGroup,
            children: [
              M &&
                n("span", {
                  className: `${pe.charCount} ${pe.error}`,
                  children: L,
                }),
              n(Oe, {
                size: "lg",
                disabled: !J || M || M || _ || M || _ || d,
                loading: d,
                onClick: me,
                children: "Опубликовать",
              }),
            ],
          }),
        ],
      }),
      n(Nh, { isOpen: l, onClose: () => h(false), onSave: _e, mode: "post" }),
    ],
  });
}
const Vf = "GcSCKwwz";
const jf = "zBZFa-2a";
const us = { createPostModal: Vf, title: jf };
function zf({ wallOwnerId: e, placeholder: t, onPostCreated: o }) {
  const { closeModal: r } = en();

  const s = Ne((c) => c.profile);

  const i = we((c) => c.createPost);

  const a = async (c, u, l, h) => {
    if (!s) {
      return;
    }
    const d = e ?? s.id;
    await i(d, c, u, l, h);
    await o?.();
    r();
  };

  return n(Ke, {
    frameless: true,
    onClose: r,
    className: us.createPostModal,
    children: [
      n("h2", { className: us.title, children: "Создать пост" }),
      n(Di, { onSubmit: a, autoFocus: true, placeholder: t }),
    ],
  });
}

const Xf = () => {
  const e = vo();
  const t = di();
  const { initialize: o, disconnectSSE: r } = pn();
  const s = fi();

  const i = hr((b) => b.fetchPortal);

  W(() => {
    if (t) {
      o();
    }

    return () => {
      r();
    };
  }, [t, o, r]);

  W(() => {
    i();
  }, [i]);

  const a = e?.username ? `/@${e.username}` : "/profile";

  const c = Se(
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

  const [u, l] = x({});
  const [h, d] = x(true);
  const f = I([]);
  const m = I(null);
  const [C] = Un();
  const { openModal: w } = en();

  const v = we((b) => b.fetchFeed);

  const p = we((b) => b.isRefreshing);

  const y = hi();

  const T = R(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    v(true);
  }, [v]);

  const g = Se(() => {
    const b = C.url || "/";
    return vr.some((P) => b.startsWith(P));
  }, [C.url]);

  const _ = Se(() => {
    const b = C.url || "/";
    return e?.username
      ? b === `/@${e.username}` || b.startsWith(`/@${e.username}/`)
      : false;
  }, [C.url, e?.username]);

  const S = I(null);

  const k = R((b, P = false) => {
    if (!P && S.current === b) {
      return;
    }
    S.current = b;
    const N = f.current[b];
    const m_current = m.current;
    if (N && m_current) {
      const B = parseFloat(getComputedStyle(m_current).paddingLeft) || 0;

      l({
        width: N.offsetWidth,
        transform: `translateX(${N.offsetLeft - B}px)`,
      });

      d(true);
    }
  }, []);

  W(() => {
    const b = C.url || "/";

    if (!c.some((N) => N.href === b)) {
      d(false);
    }
  }, [C.url, c]);

  W(() => {
    const m_current = m.current;
    if (!m_current) {
      return;
    }
    const P = m_current.querySelector(`.${Je.active}`);
    if (P) {
      const N = f.current.indexOf(P);

      if (N !== -1) {
        S.current = null;
        k(N);
      }
    }
  }, []);

  W(() => {
    const m_current = m.current;
    if (!m_current) {
      return;
    }

    const P = () => {
      const O = m_current.querySelector(`.${Je.active}`);
      if (O) {
        const B = f.current.indexOf(O);

        if (B !== -1) {
          k(B, true);
        }
      }
    };

    const N = new ResizeObserver(P);
    N.observe(m_current);
    window.addEventListener("resize", P);

    return () => {
      N.disconnect();
      window.removeEventListener("resize", P);
    };
  }, [k]);

  const E = () => {
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
            c.map((b, P) => {
              const b_icon = b.icon;
              const O = b.id === "event";
              const B = O && s.active && !!s.url;
              return n(
                gr,
                {
                  path: b.href,
                  children: ({ matches: Q }) => {
                    const ie = Q || (b.id === "profile" && _);
                    return n("a", {
                      href: B ? s.url : b.href,
                      target: B ? "_blank" : undefined,
                      rel: B ? "noopener noreferrer" : undefined,
                      ref: (X) => {
                        f.current[P] = X;

                        if (X && ie) {
                          k(P);
                        }
                      },
                      className: `${Je.navItem} ${ie ? Je.active : ""}`,
                      onClick: (X) => {
                        if (ie && b.id === "feed") {
                          X.preventDefault();
                          T();
                        }
                      },
                      children: [
                        n("span", {
                          className: Je.iconWrapper,
                          children: O
                            ? n("img", {
                                src: s.active
                                  ? "/assets/portal/portal-active.gif"
                                  : "/assets/portal/portal-inactive.png",
                                alt: "Ивент",
                                className: `${Je.portalImage} ${
                                  s.active ? Je.portalImageActive : ""
                                }`,
                              })
                            : n(Re, {
                                children: [
                                  b.id === "feed" && p
                                    ? n(Fn, {})
                                    : n(b_icon, {}),
                                  b.id === "notifications" &&
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
                          children: b.label,
                        }),
                      ],
                    });
                  },
                },
                b.id
              );
            }),
          ],
        }),
        n("button", {
          className: Je.createButton,
          onClick: E,
          "aria-label": "Создать пост",
          children: n(pr, {}),
        }),
      ],
    })
  );
};

const Yf = "K6nCQ-U-";
const Zf = "_4z8V9ZZv";
const qf = "_7KXbkQt7";
const Gf = "uYOP8khl";
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

const Be = {
  modalReport: Yf,
  content: Zf,
  successIcon: qf,
  title: Gf,
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

function Bi({ targetType: e, targetId: t, onClose: o, onSubmit: r }) {
  const [s, i] = x(null);
  const [a, c] = x("");
  const [u, l] = x(false);
  const [h, d] = x(null);
  const [f, m] = x(false);

  const C = async () => {
    if (s) {
      l(true);
      d(null);
      try {
        if (r) {
          await r(s, a);
        } else {
          await oc.createReport({
            targetType: e,
            targetId: t,
            reason: am[s],
            description: a || undefined,
          });
        }

        m(true);
      } catch (w) {
        console.error("Failed to submit report:", w);

        if (Ue(w)) {
          switch (w.code) {
            case Xn.CANNOT_REPORT_OWN_CONTENT: {
              d("Вы не можете пожаловаться на свой контент");
              break;
            }
            case Xn.ALREADY_REPORTED: {
              d("Вы уже отправляли жалобу на этот контент");
              break;
            }
            case Xn.TARGET_NOT_FOUND: {
              d("Контент не найден");
              break;
            }
            case Xn.DESCRIPTION_TOO_LONG: {
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
        className: Be.modalReport,
        children: n("div", {
          className: Be.content,
          children: [
            n("div", {
              className: Be.successIcon,
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
            n("h2", { className: Be.title, children: "Спасибо за жалобу!" }),
            n("p", {
              className: Be.subtitle,
              children:
                "Мы рассмотрим вашу жалобу и примем необходимые меры. Вы помогаете сделать сообщество лучше.",
            }),
            n("div", {
              className: Be.actions,
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
        className: Be.modalReport,
        children: n("div", {
          className: Be.content,
          children: [
            n("h2", { className: Be.title, children: "Пожаловаться" }),
            n("p", {
              className: Be.subtitle,
              children: "Выберите причину жалобы",
            }),
            n("div", {
              className: Be.options,
              children: cm.map((w) =>
                n(
                  "button",
                  {
                    type: "button",
                    className: `${Be.chip} ${s === w.id ? Be.chipActive : ""}`,
                    onClick: () => i(w.id),
                    children: [
                      n("span", {
                        className: Be.radio,
                        children:
                          s === w.id && n("span", { className: Be.radioDot }),
                      }),
                      w.label,
                    ],
                  },
                  w.id
                )
              ),
            }),
            n("div", {
              className: Be.detailsSection,
              children: n("textarea", {
                className: Be.textarea,
                placeholder: "Опишите подробнее (необязательно)...",
                value: a,
                onInput: (w) => c(w.target.value),
                rows: 3,
                maxLength: 1000 /* 1e3 */,
              }),
            }),
            h && n("div", { className: Be.error, children: h }),
            n("div", {
              className: Be.actions,
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
                    C();
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
const lm = "j8vGlZKp";
const um = "y5-96lzw";
const dm = "lE9vN8i6";
const hm = "zrN-dIVb";
const fm = "KSS5ucx7";
const mm = "p-q2S5vA";
const pm = "-JVja8g3";
const gm = "HotXXjTO";
const vm = "q4tIq6LX";
const wm = "jG-llYOx";
const ym = "-nxjJLcz";
const _m = "FFjif68M";
const Cm = "jTVS0CtG";

const ht = {
  userName: lm,
  pinBadge: um,
  text: dm,
  xs: hm,
  sm: fm,
  md: mm,
  lg: pm,
  pinWrapper: gm,
  pinTooltip: vm,
  pinTooltipFadeIn: wm,
  pinTooltipRow: ym,
  pinTooltipLabel: _m,
  pinTooltipArrow: Cm,
};

const Nm = { xs: 12, sm: 14, md: 16, lg: 22 };
function Hn({ name: e, verified: t, pin: o, size: r = "md", className: s }) {
  const Nm_r = Nm[r];
  const a = I(null);
  const [c, u] = x(null);

  const l = R(() => {
    if (!a.current) {
      return;
    }
    const d = a.current.getBoundingClientRect();
    u({ x: d.left + d.width / 2, y: d.top });
  }, []);

  const h = R(() => {
    u(null);
  }, []);

  return n("span", {
    className: `${ht.userName} ${ht[r]} ${s || ""}`,
    children: [
      n("span", { className: ht.text, children: e }),
      t && n(Qc, {}),
      o &&
        n("span", {
          ref: a,
          className: ht.pinWrapper,
          onMouseEnter: l,
          onMouseLeave: h,
          children: [
            n("img", {
              src: `/assets/pins/${o.slug}.png`,
              alt: o.name,
              className: ht.pinBadge,
              width: Nm_r,
              height: Nm_r,
            }),
            c &&
              vt(
                n("div", {
                  className: ht.pinTooltip,
                  style: { left: `${c.x}px`, top: `${c.y}px` },
                  children: [
                    n("span", {
                      className: ht.pinTooltipRow,
                      children: [
                        n("span", {
                          className: ht.pinTooltipLabel,
                          children: "Пин:",
                        }),
                        " ",
                        o.name,
                      ],
                    }),
                    o.description &&
                      n("span", {
                        className: ht.pinTooltipRow,
                        children: [
                          n("span", {
                            className: ht.pinTooltipLabel,
                            children: "Ивент:",
                          }),
                          " ",
                          o.description,
                        ],
                      }),
                    n("span", { className: ht.pinTooltipArrow }),
                  ],
                }),
                document.body
              ),
          ],
        }),
    ],
  });
}
const bm = "GOavgVFK";
const Tm = "WsAFjFg1";
const km = "luyzBE-G";
const Em = "LGkNQoga";
const Rm = "HiaF08Tp";
const Sm = "fjKZASHi";
const Im = "YH0jgs8I";
const xm = "iw-oVKLc";
const Pm = "-L1Z1WbU";

const St = {
  repostModal: bm,
  content: Tm,
  title: km,
  inputSection: Em,
  textarea: Rm,
  originalPost: Sm,
  postHeader: Im,
  postText: xm,
  actions: Pm,
};

function Am({ post: e, onClose: t, onSuccess: o }) {
  const [r, s] = x("");
  const [i, a] = x(false);

  const c = Ne((l) => l.profile);

  const u = async () => {
    a(true);
    try {
      await Ge.createRepost(e.id, r.trim() || undefined);
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
    className: St.repostModal,
    children: n("div", {
      className: St.content,
      children: [
        n("h2", { className: St.title, children: "Репост" }),
        n("div", {
          className: St.inputSection,
          children: [
            c && n(rt, { src: c.avatar, alt: c.displayName, size: "sm" }),
            n("textarea", {
              className: St.textarea,
              placeholder: "Добавьте комментарий к репосту...",
              value: r,
              onInput: (l) => s(l.target.value),
              rows: 3,
            }),
          ],
        }),
        n("div", {
          className: St.originalPost,
          children: [
            n("div", {
              className: St.postHeader,
              children: [
                n(rt, {
                  src: e.author.avatar ?? "",
                  alt: e.author.displayName,
                  size: "xs",
                }),
                n(Hn, {
                  name: e.author.displayName,
                  verified: e.author.isVerified,
                  pin: e.author.pin,
                  size: "xs",
                }),
              ],
            }),
            n("p", { className: St.postText, children: e.text }),
          ],
        }),
        n("div", {
          className: St.actions,
          children: [
            n(Oe, {
              variant: "secondary",
              onClick: (l) => {
                l.stopPropagation();
                t();
              },
              disabled: i,
              children: "Отмена",
            }),
            n(Oe, {
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
const Lm = "YUXc-thD";
const Mm = "AHlpmYy2";
const $m = "_8tUE-BuY";
const Om = "RIne2Axl";
const Dm = "qfOKVlyM";
const Bm = "XA7edfAc";
const Um = "_97G7MW7p";
const Fm = "li-GTJHA";
const Hm = "x0peq7nh";
const Wm = "_6pRzoTi7";

const yt = {
  editPostModal: Lm,
  form: Mm,
  whatsNew: $m,
  editor: Om,
  actions: Dm,
  mediaButtons: Bm,
  mediaButton: Um,
  submitGroup: Fm,
  charCount: Hm,
  error: Wm,
};

const ds = 5000; /* 5e3 */
function Vm({ postId: e, initialText: t, initialSpans: o = [] }) {
  const { closeModal: r } = en();

  const s = we((_) => _.editPost);

  const i = Ne((_) => _.profile);

  const a = Tt();

  const {
    text: c,
    spans: u,
    editorRef: l,
    handleChange: h,
    insertText: d,
  } = wo(t, o);

  const [f, m] = x(false);
  const C = ds - c.length;
  const w = C < 0;
  const v = c !== t;
  const p = JSON.stringify(u) !== JSON.stringify(o);
  const y = v || p;

  const T = R(
    (_) => {
      d(_.emoji);
    },
    [d]
  );

  const g = R(async () => {
    if (!(!c.trim() || w || w || !y || w || !y || f)) {
      m(true);
      try {
        await s(e, c, u);
        r();
      } catch (_) {
        console.error("Failed to update post:", _);
      } finally {
        m(false);
      }
    }
  }, [c, u, w, y, f, s, e, r]);

  return n(Ke, {
    frameless: true,
    onClose: r,
    className: yt.editPostModal,
    children: n("div", {
      className: yt.form,
      children: [
        n("div", {
          className: yt.whatsNew,
          children: [
            n(rt, { src: i?.avatar ?? "", size: "md" }),
            n(_o, {
              ref: l,
              value: c,
              spans: u,
              onChange: h,
              placeholder: "Что нового?",
              maxLength: ds,
              autoFocus: true,
              className: yt.editor,
              minHeight: 40,
              maxHeight: 400,
            }),
          ],
        }),
        n("div", {
          className: yt.actions,
          children: [
            n("div", {
              className: yt.mediaButtons,
              children:
                !a &&
                n(yr, { onEmojiSelect: T, buttonClassName: yt.mediaButton }),
            }),
            n("div", {
              className: yt.submitGroup,
              children: [
                w &&
                  n("span", {
                    className: `${yt.charCount} ${yt.error}`,
                    children: C,
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
  for (const [s, i] of o) {
    if (!r.has(s) || !Object.is(i, r.get(s))) {
      return false;
    }
  }
  return true;
};

const jm = (e, t) => {
  const o = e[Symbol.iterator]();
  const r = t[Symbol.iterator]();
  let s = o.next();
  let i = r.next();

  while (!s.done && !i.done) {
    if (!Object.is(s.value, i.value)) {
      return false;
    }
    s = o.next();
    i = r.next();
  }

  return !!s.done && !!i.done;
};

function zm(e, t) {
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
      : jm(e, t)
    : ms(
        { entries: () => Object.entries(e) },
        { entries: () => Object.entries(t) }
      );
}
function ps(e) {
  const t = Tn.useRef(undefined);
  return (o) => {
    const r = e(o);
    return zm(t.current, r) ? t.current : (t.current = r);
  };
}
const Xm = "qW4HNPBu";
const Ym = "tx-JBNZ6";
const Zm = "_033iEEAi";
const qm = "DNnNfgbz";
const qn = { commentsModal: Xm, header: Ym, title: Zm, content: qm };
function Gm({ postId: e, onClose: t }) {
  console.log("[CommentsModal] RENDER", { postId: e });
  const o = I(null);

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
  } = we(
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

  const { commentsSort: f, setCommentsSort: m } = ao(
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

  const C = R(
    (g) => {
      m(g);
      u(e);
    },
    [m, u, e]
  );

  const w = R(() => {
    if (a && !i) {
      l(e);
    }
  }, [a, i, l, e]);

  const v = R(
    (g, _) => {
      h(g, _ ?? "love");
    },
    [h]
  );

  const p = R(
    (g, _) => {
      h(g, _);
    },
    [h]
  );

  const y = R(
    async (g, _, S, k, E, b) => {
      await d(e, g, _, S, b, k, E);
    },
    [d, e]
  );

  const T = R(
    async (g) => {
      const _ = `voice_${Date.now()}.webm`;
      const S = new File([g], _, { type: g.type || "audio/webm" });
      const k = await cn.uploadMedia(S);
      await d(e, "", [], undefined, [{ mediaId: k.id }]);
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
        children: n(h1, {
          comments: r,
          isLoading: s,
          isLoadingMore: i,
          hasMore: a,
          sort: f,
          onSortChange: C,
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
const Km = "QoEaDkke";
const Jm = "clHkuJ7t";
const Qm = "qilC-Ury";
const ep = "_2pYlGMvj";
const Gn = { content: Km, title: Jm, subtitle: Qm, actions: ep };
function tp({ displayName: e, onConfirm: t, onClose: o }) {
  return n(Ke, {
    onClose: o,
    showHeader: false,
    children: n("div", {
      className: Gn.content,
      children: [
        n("h2", { className: Gn.title, children: "Отписаться?" }),
        n("p", {
          className: Gn.subtitle,
          children: [
            "Вы действительно хотите отписаться от ",
            n("strong", { children: e }),
            "?",
          ],
        }),
        n("div", {
          className: Gn.actions,
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
const np = "JtDslUlB";
const op = "ccJtOIg3";
const rp = "jttdPuoT";
const sp = "Ik3feOcb";
const ip = "OWIVanqr";
const ap = "ApLgDejC";
const cp = "wzYde9CM";
const lp = "jjAXXJME";

const $t = {
  underline: np,
  monospace: op,
  quote: rp,
  spoiler: sp,
  revealed: ip,
  link: ap,
  mention: cp,
  hashtag: lp,
};

function up(e) {
  try {
    const t = new URL(e);
    return t.protocol === "http:" || t.protocol === "https:";
  } catch {
    return false;
  }
}
function dp(e) {
  if (!up(e)) {
    return "#";
  }
  const o = new TextEncoder().encode(e);
  const r = String.fromCharCode(...o);
  const s = btoa(r);
  return `/external?url=${encodeURIComponent(s)}`;
}
function Ui({ text: e, spans: t = [], className: o = "" }) {
  const [r, s] = x(new Set());

  const i = Se(() => {
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
        const C = new Set();
        let w;
        let v;
        let p;

        d.forEach((y) => {
          C.add(y.type);

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

        l.push({ text: m, styles: C, url: w, mentionId: v, hashtag: p });
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
      u_text = n("strong", { children: u_text });
    }

    if (u.styles.has("italic")) {
      u_text = n("em", { children: u_text });
    }

    if (u.styles.has("underline")) {
      u_text = n("span", { className: $t.underline, children: u_text });
    }

    if (u.styles.has("strike")) {
      u_text = n("s", { children: u_text });
    }

    if (u.styles.has("monospace")) {
      u_text = n("code", { className: $t.monospace, children: u_text });
    }

    if (u.styles.has("quote")) {
      u_text = n("span", { className: $t.quote, children: u_text });
    }

    if (u.styles.has("spoiler")) {
      const d = r.has(l);
      u_text = n("span", {
        className: `${$t.spoiler} ${d ? $t.revealed : ""}`,
        onClick: (f) => a(f, l),
        children: u_text,
      });
    }

    if (u.styles.has("link") && u.url) {
      const d = dp(u.url);
      u_text = n("a", {
        href: d,
        target: "_blank",
        rel: "noopener noreferrer",
        className: $t.link,
        onClick: (f) => f.stopPropagation(),
        children: u_text,
      });
    }
    if (u.styles.has("mention") && u.mentionId) {
      const d = `/@${u.mentionId}`;
      u_text = n("a", {
        href: d,
        className: $t.mention,
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
        className: $t.hashtag,
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

  return n("span", { className: o, children: i.map((u, l) => c(u, l)) });
}
const hp = "t6dMOE-t";
const fp = "dN7ncPvV";
const mp = "goihPOfy";
const pp = "_3cD3eUbW";
const gp = "SWw4qjFC";
const vp = "J5ZRq4aT";
const wp = "zH6fnEQR";
const yp = "OzZxDBjs";
const _p = "r-v5forc";
const Cp = "Azp1k6ER";
const Np = "_8AA-g-Mn";
const bp = "aaxVMk0e";
const Tp = "QUwLZbFH";
const kp = "Fub6vefq";
const Ep = "Uvg1jJsO";
const Rp = "_9HuwvxSy";
const Sp = "_0-reqUdU";
const Ip = "yjejWG8w";
const xp = "rW9UH9FX";
const Pp = "AP0ro9mL";
const Ap = "lc7iFAaZ";
const Lp = "D7O8ZJMb";
const Mp = "-OyFh6KG";
const $p = "FVUgQZaF";

const ye = {
  poll: hp,
  disabled: fp,
  header: mp,
  title: pp,
  meta: gp,
  voteCount: vp,
  options: wp,
  option: yp,
  votingOption: _p,
  preselected: Cp,
  optionContent: Np,
  voted: bp,
  optionProgressWrapper: Tp,
  optionProgress: kp,
  optionContentInverted: Ep,
  optionText: Rp,
  optionPercent: Sp,
  optionProgressSimple: Ip,
  checkmark: xp,
  checkbox: Pp,
  checkboxChecked: Ap,
  submitBtn: Lp,
  footer: Mp,
  revoteBtn: $p,
};

function Op({
  title: e,
  options: t,
  totalVotes: o,
  voted: r = false,
  selectedOptionId: s = null,
  selectedOptionIds: i = [],
  multipleChoice: a = false,
  onVote: c,
  onVoteMultiple: u,
  className: l,
  disabled: h = false,
}) {
  const [d, f] = x(r);

  const [m, C] = x(() =>
    i.length > 0 ? new Set(i) : s ? new Set([s]) : new Set()
  );

  const [w, v] = x(o);
  const [p, y] = x(t);
  const [T, g] = x(r);
  const [_, S] = x(false);
  const [k, E] = x(new Map());
  const b = I(new Map());

  const P = t.map((F) => `${F.id}:${F.votes}`).join(",");

  W(() => {
    y(t);
    v(o);
    f(r);

    if (i.length > 0) {
      C(new Set(i));
    } else {
      C(s ? new Set([s]) : new Set());
    }

    if (r && !_) {
      g(true);
    }
  }, [P, o, r, s, i.join(",")]);

  W(() => {
    if (r && b.current.size > 0) {
      const F = new Map();

      b.current.forEach((z, ee) => {
        F.set(ee, z.offsetWidth);
      });

      E(F);
    }
  }, [r]);

  const N = d && !_;

  const O = R(
    (F) => {
      if (h || N) {
        return;
      }
      if (a) {
        C((U) => {
          const D = new Set(U);

          if (D.has(F)) {
            D.delete(F);
          } else {
            D.add(F);
          }

          return D;
        });
        return;
      }
      const z = m.size > 0 ? Array.from(m)[0] : null;

      y((U) =>
        U.map((D) =>
          D.id === F
            ? { ...D, votes: D.votes + 1 }
            : D.id === z
            ? { ...D, votes: Math.max(0, D.votes - 1) }
            : D
        )
      );

      if (!d) {
        v((U) => U + 1);
      }

      C(new Set([F]));
      f(true);
      S(false);
      const ee = c?.(F);

      if (ee && typeof ee.then == "function") {
        ee.then((U) => {
          if (U) {
            Q(U);
          }
        });
      }

      ie();
    },
    [h, N, a, m, d, c]
  );

  const B = R(() => {
    if (m.size === 0) {
      return;
    }
    const F = Array.from(m);

    y((ee) =>
      ee.map((U) => (F.includes(U.id) ? { ...U, votes: U.votes + 1 } : U))
    );

    if (!d) {
      v((ee) => ee + 1);
    }

    f(true);
    S(false);
    const z = u?.(F);

    if (z && typeof z.then == "function") {
      z.then((ee) => {
        if (ee) {
          Q(ee);
        }
      });
    }

    ie();
  }, [m, d, u]);

  const Q = (F) => {
    const z = (F.options ?? []).map((ee) => ({
      id: ee.id,
      text: ee.text,
      votes: ee.votesCount ?? ee.voteCount ?? ee.votes ?? 0,
    }));
    y(z);
    v(F.totalVotes ?? 0);

    if (F.votedOptionIds && F.votedOptionIds.length > 0) {
      C(new Set(F.votedOptionIds));
    }
  };

  const ie = () => {
    requestAnimationFrame(() => {
      const F = new Map();

      b.current.forEach((z, ee) => {
        F.set(ee, z.offsetWidth);
      });

      E(F);

      requestAnimationFrame(() => {
        g(true);
      });
    });
  };

  const X = () => {
    S(true);
    g(false);
  };

  const Y = () => {
    S(false);
    g(true);
  };

  const ne = (F) => (w === 0 ? 0 : Math.round((F / w) * 100));

  const te = (F) =>
    F === 1 ? "1 голос" : F >= 2 && F <= 4 ? `${F} голоса` : `${F} голосов`;

  const oe = (F) => {
    F.stopPropagation();
  };

  return n("div", {
    className: `${ye.poll} ${h ? ye.disabled : ""} ${l || ""}`,
    onClick: oe,
    children: [
      n("div", {
        className: ye.header,
        children: [
          n("span", { className: ye.title, children: e }),
          d &&
            n("div", {
              className: ye.meta,
              children: n("span", { className: ye.voteCount, children: te(w) }),
            }),
        ],
      }),
      n("div", {
        className: ye.options,
        children: p.map((F) => {
          const z = ne(F.votes);
          const ee = m.has(F.id);
          const U = T ? `${z}%` : "0%";
          const D =
            k.get(F.id) ||
            b.current.get(F.id)?.offsetWidth ||
            b.current.get(F.id)?.offsetWidth ||
            0;
          return N
            ? n(
                "div",
                {
                  ref: (L) => {
                    if (L) {
                      b.current.set(F.id, L);
                    }
                  },
                  className: `${ye.option} ${ye.voted} ${
                    ee ? ye.selected : ""
                  }`,
                  children: [
                    n("div", {
                      className: ye.optionContent,
                      children: [
                        n("span", {
                          className: ye.optionText,
                          children: [
                            ee &&
                              n("span", {
                                className: ye.checkmark,
                                children: "✓ ",
                              }),
                            F.text,
                          ],
                        }),
                        n("span", {
                          className: ye.optionPercent,
                          children: [z, "%"],
                        }),
                      ],
                    }),
                    ee &&
                      n("div", {
                        className: ye.optionProgressWrapper,
                        style: { width: U },
                        children: [
                          n("div", { className: ye.optionProgress }),
                          n("div", {
                            className: ye.optionContentInverted,
                            style: { width: `${D}px` },
                            children: [
                              n("span", {
                                className: ye.optionText,
                                children: [
                                  n("span", {
                                    className: ye.checkmark,
                                    children: "✓ ",
                                  }),
                                  F.text,
                                ],
                              }),
                              n("span", {
                                className: ye.optionPercent,
                                children: [z, "%"],
                              }),
                            ],
                          }),
                        ],
                      }),
                    !ee &&
                      n("div", {
                        className: ye.optionProgressSimple,
                        style: { width: U },
                      }),
                  ],
                },
                F.id
              )
            : n(
                "div",
                {
                  ref: (L) => {
                    if (L) {
                      b.current.set(F.id, L);
                    }
                  },
                  className: `${ye.option} ${ye.votingOption} ${
                    ee ? ye.preselected : ""
                  }`,
                  onClick: () => O(F.id),
                  children: n("div", {
                    className: ye.optionContent,
                    children: [
                      a &&
                        n("span", {
                          className: `${ye.checkbox} ${
                            ee ? ye.checkboxChecked : ""
                          }`,
                          children: ee && "✓",
                        }),
                      n("span", { className: ye.optionText, children: F.text }),
                    ],
                  }),
                },
                F.id
              );
        }),
      }),
      a &&
        !d &&
        m.size > 0 &&
        !_ &&
        n("button", {
          className: ye.submitBtn,
          onClick: B,
          type: "button",
          children: "Проголосовать",
        }),
      d &&
        n("div", {
          className: ye.footer,
          children: _
            ? n(Re, {
                children: [
                  a &&
                    m.size > 0 &&
                    n("button", {
                      className: ye.submitBtn,
                      onClick: B,
                      type: "button",
                      children: "Проголосовать",
                    }),
                  n("button", {
                    className: ye.revoteBtn,
                    onClick: Y,
                    type: "button",
                    children: "Отмена",
                  }),
                ],
              })
            : n("button", {
                className: ye.revoteBtn,
                onClick: X,
                type: "button",
                children: "Изменить голос",
              }),
        }),
    ],
  });
}
const Dp = "zRX0j4Tr";
const Bp = "_3HYi31vZ";
const Up = "sgbXxBQt";
const Fp = "GyS5v2h6";
const Hp = "HxhHv5PS";
const Wp = "HhzGlfqd";
const Vp = "bQ6-MeS1";
const jp = "QCLZpkig";
const zp = "WIOo5dNL";

const It = {
  dropdownWrapper: Dp,
  trigger: Bp,
  menu: Up,
  hidden: Fp,
  menuItem: Hp,
  danger: Wp,
  itemIcon: Vp,
  itemLabel: jp,
  divider: zp,
};

function Fi({
  trigger: e,
  items: t,
  position: o = "bottom-right",
  dividerAfter: r = [],
  className: s,
}) {
  const [i, a] = x(false);
  const [c, u] = x(false);
  const [l, h] = x({ top: 0, left: 0 });
  const d = I(null);
  const f = I(null);

  const m = R(() => {
    if (!d.current) {
      return;
    }
    const p = d.current.getBoundingClientRect();
    const y = f.current?.offsetHeight || 150;
    const T = f.current?.offsetWidth || 160;
    let g = 0;
    let _ = 0;

    if (o.startsWith("bottom")) {
      g = p.bottom + 4;
    } else {
      g = p.top - y - 4;
    }

    if (o.endsWith("right")) {
      _ = p.right - T;
    } else {
      _ = p.left;
    }

    const { innerWidth, innerHeight } = window;

    if (_ + T > innerWidth) {
      _ = innerWidth - T - 8;
    }

    if (_ < 8) {
      _ = 8;
    }

    if (g + y > innerHeight) {
      g = p.top - y - 4;
    }

    if (g < 8) {
      g = p.bottom + 4;
    }

    h({ top: g, left: _ });
    u(true);
  }, [o]);

  const C = R((p) => {
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
    if (i) {
      m();
      document.addEventListener("mousedown", C);
      window.addEventListener("scroll", m, true);
      window.addEventListener("resize", m);

      return () => {
        document.removeEventListener("mousedown", C);
        window.removeEventListener("scroll", m, true);
        window.removeEventListener("resize", m);
      };
    }
  }, [i, C, m]);

  const w = (p) => {
    p.stopPropagation();

    if (i) {
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
    className: `${It.dropdownWrapper} ${s || ""}`,
    children: [
      n("div", { ref: d, className: It.trigger, onClick: w, children: e }),
      i &&
        vt(
          n("div", {
            ref: f,
            className: `${It.menu} ${c ? "" : It.hidden}`,
            style: { top: l.top, left: l.left },
            children: t.map((p, y) =>
              n(
                "div",
                {
                  children: [
                    n("button", {
                      type: "button",
                      className: `${It.menuItem} ${p.danger ? It.danger : ""}`,
                      onClick: (T) => v(T, p),
                      children: [
                        p.icon &&
                          n("span", {
                            className: It.itemIcon,
                            children: p.icon,
                          }),
                        n("span", {
                          className: It.itemLabel,
                          children: p.label,
                        }),
                      ],
                    }),
                    r.includes(p.id) &&
                      y < t.length - 1 &&
                      n("div", { className: It.divider }),
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
const Xp = "oAyquNjM";
const Yp = "cGo-pqMK";
const Zp = "abh-IRfe";
const qp = "_3UMrcwJw";
const Gp = "MtmuinE5";
const Kp = "OHOBvjSN";
const Jp = "vPid2PoY";
const Qp = "ShSUtrj1";

const Ot = {
  header: Xp,
  headerMain: Yp,
  moreDropdown: Zp,
  pinnedBadge: qp,
  authorInfo: Gp,
  authorLink: Kp,
  time: Jp,
  edited: Qp,
};

function e0({
  author: e,
  createdAt: t,
  editedAt: o,
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
  const f = mi(t);

  const m = Ne((y) => y.profile?.id);

  const C = e.id === m;
  const w = 2880 * 60 * 1000; /* 1e3 */
  const v = C && Date.now() - new Date(t).getTime() < w;

  const p = Se(() => {
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

    if (i) {
      y.push({
        id: "pin",
        label: a ? "Открепить" : "Закрепить",
        icon: n(Qo, { size: 16 }),
        onClick: () => h?.(r),
      });
    }

    if (C || i) {
      y.push({
        id: "delete",
        label: "Удалить",
        icon: n(Si, { size: 16 }),
        danger: true,
        onClick: () => l?.(r),
      });
    }

    if (!C) {
      y.push({
        id: "report",
        label: "Пожаловаться",
        icon: n(Ci, { size: 16 }),
        danger: true,
        onClick: () => c?.(r),
      });
    }

    return y;
  }, [C, v, i, a, r, u, l, h, c, d]);

  return n("header", {
    className: Ot.header,
    children: [
      a &&
        n("div", {
          className: Ot.pinnedBadge,
          children: [
            n(Qo, { size: 14 }),
            n("span", { children: "Закреплённый пост" }),
          ],
        }),
      n("div", {
        className: Ot.headerMain,
        children: [
          s &&
            n("a", {
              href: `/@${e.username}`,
              children: n(rt, {
                src: e.avatar,
                alt: e.displayName,
                size: "sm",
                online: e.online,
              }),
            }),
          n("div", {
            className: Ot.authorInfo,
            children: [
              n("a", {
                href: `/@${e.username}`,
                className: Ot.authorLink,
                children: n(Hn, {
                  name: e.displayName,
                  verified: e.isVerified,
                  pin: e.pin,
                  size: "sm",
                }),
              }),
              n("time", {
                dateTime: t,
                className: Ot.time,
                children: [
                  f,
                  o &&
                    n(ho, {
                      text: new Date(o).toLocaleString("ru-RU"),
                      children: n("span", {
                        className: Ot.edited,
                        children: " (ред.)",
                      }),
                    }),
                ],
              }),
            ],
          }),
          n(Fi, {
            trigger: n(bi, { size: 18 }),
            items: p,
            position: "bottom-right",
            className: Ot.moreDropdown,
          }),
        ],
      }),
    ],
  });
}
function Hi(e, t, o) {
  const { isVisible: r, isRevealing: s, onRevealComplete: i } = o;
  const a = I([]);
  const c = I(null);
  const u = I(null);
  const l = I({ width: 0, height: 0 });
  const h = I(1);

  const d = R((w, v) => {
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

  const f = R(
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

  const m = R(() => {
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

  const C = R(() => {
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
      if (s && ((h.current -= 0.05), h.current <= 0)) {
        i();
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

        const _ = T.life / T.maxLife;
        const S = _ < 0.3 ? _ / 0.3 : 1;
        const k = T.opacity * S * h.current;
        u_current.beginPath();
        u_current.arc(T.x, T.y, T.size, 0, Math.PI * 2);
        u_current.fillStyle = `rgba(255, 255, 255, ${k})`;
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
  }, [r, s, d, m, i]);

  return { resetOpacity: C };
}
const t0 = "_2Gc4qhOv";
const n0 = "UY9OONTU";
const o0 = "_0IkXVI0s";
const r0 = "-LecVcA9";
const s0 = "I1O3wwfn";
const _n = { container: t0, hidden: n0, image: o0, revealing: r0, canvas: s0 };
const gs = 5;
function i0({
  src: e,
  alt: t = "",
  spoiler: o = false,
  width: r,
  height: s,
  className: i = "",
  onClick: a,
}) {
  const [c, u] = x(!o);
  const [l, h] = x(false);
  const [d, f] = x(false);
  const m = I(null);
  const C = I(null);
  const w = I(null);
  const v = I(false);

  const { resetOpacity: p } = Hi(m, C, {
    isVisible: d && !c && o,
    isRevealing: l,
    onRevealComplete: () => u(true),
  });

  W(() => {
    const C_current = C.current;
    if (!C_current) {
      return;
    }
    const E = new IntersectionObserver(
      (b) => {
        b.forEach((P) => {
          f(P.isIntersecting);
        });
      },
      { threshold: 0, rootMargin: "0px 200px 0px 200px" }
    );
    E.observe(C_current);

    return () => {
      E.disconnect();
    };
  }, []);

  const y = (k) => {
    w.current = { x: k.clientX, y: k.clientY };
    v.current = false;
  };

  const T = (k) => {
    if (!w.current) {
      return;
    }
    const E = Math.abs(k.clientX - w.current.x);
    const b = Math.abs(k.clientY - w.current.y);

    if (E > gs || b > gs) {
      v.current = true;
    }
  };

  const g = (k) => {
    if (v.current) {
      v.current = false;
      k.stopPropagation();
      return;
    }

    if (!c && !l && o) {
      k.stopPropagation();
      h(true);
      p();
    } else if (a) {
      a(k);
    }
  };

  const _ = !c && o;
  const S = r && s ? { aspectRatio: `${r} / ${s}` } : undefined;
  return o
    ? n("div", {
        ref: C,
        className: `${_n.container} ${i} ${_ ? _n.hidden : ""} ${
          l ? _n.revealing : ""
        }`,
        style: S,
        onPointerDown: y,
        onPointerMove: T,
        onClick: g,
        children: [
          n("img", {
            src: e,
            alt: t,
            className: _n.image,
            loading: "lazy",
            width: r,
            height: s,
            draggable: false,
          }),
          _ && n("canvas", { ref: m, className: _n.canvas }),
        ],
      })
    : n("img", {
        src: e,
        alt: t,
        className: i,
        loading: "lazy",
        draggable: false,
        onClick: a,
      });
}
const a0 = "_7OM9isQp";
const c0 = "tOcLl5Fe";
const l0 = "K6pRPvna";
const u0 = "W7spdM5t";
const d0 = "_-2wZA6Y1";
const h0 = "eelWZWVN";

const an = {
  container: a0,
  hidden: c0,
  video: l0,
  revealing: u0,
  canvas: d0,
  duration: h0,
};

function f0(e) {
  const t = Math.floor(e / 60);
  const o = e % 60;
  return `${t}:${o.toString().padStart(2, "0")}`;
}
function m0({
  src: e,
  spoiler: t = false,
  width: o,
  height: r,
  duration: s,
  className: i = "",
}) {
  const a = I(null);
  const c = I(null);
  const u = I(null);
  const [l, h] = x(!t);
  const [d, f] = x(false);
  const [m, C] = x(false);

  const { resetOpacity: w } = Hi(u, c, {
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
      (_) => {
        _.forEach((S) => {
          C(S.isIntersecting);

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
    className: `${an.container} ${i} ${p ? an.hidden : ""} ${
      d ? an.revealing : ""
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
        className: an.video,
        width: o,
        height: r,
      }),
      s != null && n("div", { className: an.duration, children: f0(s) }),
      p && n("canvas", { ref: u, className: an.canvas }),
    ],
  });
}
const p0 = "l4cwyAPN";
const g0 = "qlCZ-7Jf";
const v0 = "_4vGEh5tJ";
const w0 = "awFKBPHw";
const y0 = "_0vEjHxry";
const _t = { mediaWrapper: p0, isFeed: g0, media: v0, dragging: w0, image: y0 };
const _0 = 5;
const C0 = 0.95;
const $o = 0.5;
function _r({ media: e, isFeed: t = false }) {
  const o = e?.filter((k) => k.type === "image") ?? [];

  const r = e?.filter((k) => k.type === "video") ?? [];

  const s = I(null);

  const i = ci((k) => k.open);

  const a = I(false);
  const c = I(0);
  const u = I(0);
  const l = I(false);
  const h = I(0);
  const d = I(0);
  const f = I(0);
  const m = I(null);

  const C = () => {
    if (m.current) {
      cancelAnimationFrame(m.current);
      m.current = null;
    }
  };

  const w = () => {
    const s_current = s.current;
    if (s_current) {
      f.current *= C0;

      if (Math.abs(f.current) < $o) {
        C();
        return;
      }

      s_current.scrollLeft += f.current;
      m.current = requestAnimationFrame(w);
    }
  };

  const v = (k) => {
    const s_current = s.current;

    if (s_current && o.length + r.length > 1) {
      if (o.length + r.length > 1) {
        C();
        a.current = true;
        s_current.classList.add(_t.dragging);
        c.current = k.clientX;
        h.current = k.clientX;
        d.current = Date.now();
        u.current = s_current.scrollLeft;
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
    const s_current = s.current;
    if (!s_current) {
      return;
    }
    const b = Date.now();
    const P = k.clientX - c.current;
    const N = k.clientX - h.current;
    const O = b - d.current;

    if (Math.abs(P) > _0) {
      l.current = true;
    }

    if (O > 0) {
      f.current = (-N / O) * 16;
    }

    h.current = k.clientX;
    d.current = b;
    s_current.scrollLeft = u.current - P;
  };

  const y = () => {
    if (a.current && Math.abs(f.current) > $o) {
      w();
    }

    a.current = false;
    s.current?.classList.remove(_t.dragging);
  };

  const T = () => {
    if (a.current) {
      Math.abs(f.current) > $o && w();
      a.current = false;
      s.current?.classList.remove(_t.dragging);
    }
  };

  W(
    () => () => {
      C();
      s.current?.classList.remove(_t.dragging);
    },
    []
  );

  const g = (k, E) => {
    if (l.current) {
      l.current = false;
      E.stopPropagation();
      return;
    }
    i(
      o.map((b) => ({
        id: b.id,
        url: b.url,
        width: b.width || 800,
        height: b.height || 600,
      })),
      k
    );
  };

  const _ = (k) => {
    k.stopPropagation();
    l.current = false;
  };

  if (o.length === 0 && r.length === 0) {
    return null;
  }
  const S = o.length + r.length;
  return n("div", {
    className: `${_t.mediaWrapper} ${t ? _t.isFeed : ""}`,
    "data-count": S,
    children: n("div", {
      ref: s,
      className: `${_t.media} ${t ? _t.isFeed : ""}`,
      "data-count": S,
      onClick: _,
      onMouseDown: v,
      onMouseMove: p,
      onMouseUp: y,
      onMouseLeave: T,
      children: [
        r.map((k) =>
          n(
            m0,
            {
              src: k.url,
              spoiler: k.spoiler,
              width: k.width,
              height: k.height,
              duration: k.duration,
              className: _t.image,
            },
            k.id
          )
        ),
        o.map((k, E) =>
          n(
            i0,
            {
              src: k.url,
              spoiler: k.spoiler,
              width: k.width,
              height: k.height,
              className: _t.image,
              onClick: (b) => g(E, b),
            },
            k.id
          )
        ),
      ],
    }),
  });
}
const N0 = "Pc3ZwYUA";
const b0 = "uXiMWdXs";
const T0 = "_92KcEhCb";
const k0 = "A5HN458Y";
const E0 = "kVjrCCJb";
const R0 = "WIU3w8vr";
const S0 = "sxXVgu6K";

const zt = {
  counter: N0,
  digit: b0,
  prev: T0,
  current: k0,
  animating: E0,
  up: R0,
  down: S0,
};

function I0(e) {
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
function kn({ value: e }) {
  const t = I0(e);
  const o = I(e);
  const r = I(t.length);
  const s = I(Date.now());

  const [i, a] = x(() =>
    t.split("").map((d, f) => ({
      char: d,
      prevChar: d,
      isAnimating: false,
      key: f,
    }))
  );

  const [c, u] = x(null);

  W(() => {
    if (Date.now() - s.current < 100) {
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

    const C = i.map((g) => g.char);

    const w = Math.max(m.length, C.length);
    const v = C.join("").padStart(w, " ").split("");

    const y = m
      .join("")
      .padStart(w, " ")
      .split("")
      .map((g, _) => {
        const S = v[_] || " ";
        const k = i[_ - (w - i.length)];
        return g !== S
          ? (r.current++,
            { char: g, prevChar: S, isAnimating: true, key: r.current })
          : { char: g, prevChar: g, isAnimating: false, key: k?.key ?? _ };
      })
      .filter((g) => g.char !== " " || g.isAnimating);

    a(y);
    const T = setTimeout(() => {
      a((g) =>
        g.map((_) => ({
          ..._,
          isAnimating: false,
        }))
      );

      u(null);
    }, 300);
    return () => clearTimeout(T);
  }, [e]);

  if (!i.some((d) => d.isAnimating)) {
    return n("span", { children: t });
  }

  const h = c === "up" ? zt.up : c === "down" ? zt.down : "";
  return n("span", {
    className: zt.counter,
    children: i.map((d) =>
      d.isAnimating
        ? n(
            "span",
            {
              className: `${zt.digit} ${zt.animating} ${h}`,
              children: [
                n("span", { className: zt.prev, children: d.prevChar }),
                n("span", { className: zt.current, children: d.char }),
              ],
            },
            d.key
          )
        : n("span", { children: d.char }, d.key)
    ),
  });
}
const x0 = "QnwlJ0JI";
const P0 = "_4ZjoCms2";
const A0 = "aMkvCscU";
const L0 = "lgOmJE17";
const M0 = "luVObdSy";
const $0 = "Rezs30lQ";
const O0 = "_8wD0dR85";
const D0 = "ndR5d-hp";
const B0 = "z-xpwcRG";
const U0 = "DecvAv-7";
const F0 = "VRuv-fcD";
const H0 = "lo4NvVKr";
const W0 = "eJzh56H-";
const V0 = "giKCW-y7";

const je = {
  actions: x0,
  actionsLeft: P0,
  action: A0,
  views: L0,
  liked: M0,
  reposted: $0,
  disabled: O0,
  noAnimation: D0,
  reactionWrapper: B0,
  actionsRight: U0,
  captured: F0,
  capturedEmoji: H0,
  capturedText: W0,
  capturedMobile: V0,
};

function j0({
  liked: e,
  reposted: t,
  likesCount: o,
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
  return n("footer", {
    className: je.actions,
    children: [
      n("div", {
        className: je.actionsLeft,
        children: [
          n("div", {
            className: je.reactionWrapper,
            onClick: (f) => f.stopPropagation(),
            children: n("button", {
              className: `${je.action} ${e ? je.liked : ""} ${
                !d.current && e ? je.noAnimation : ""
              }`,
              onClick: (f) => {
                f.stopPropagation();
                d.current = true;
                c();
              },
              "aria-label": "Нравится",
              children: [
                n(yo, { filled: e }, e ? "liked" : "not-liked"),
                n(kn, { value: o }),
              ],
            }),
          }),
          n("button", {
            className: je.action,
            onClick: (f) => {
              f.stopPropagation();
              l();
            },
            "aria-label": "Комментировать",
            children: [n(fr, {}), n(kn, { value: s })],
          }),
          n("button", {
            className: `${je.action} ${t ? je.reposted : ""} ${
              h ? je.disabled : ""
            }`,
            onClick: (f) => {
              f.stopPropagation();

              if (!h) {
                u();
              }
            },
            disabled: h,
            "aria-label": "Репост",
            children: [n(uo, {}), n(kn, { value: r })],
          }),
        ],
      }),
      n("div", {
        className: je.actionsRight,
        children: [
          a &&
            n(Re, {
              children: [
                n(ho, {
                  text: "Эмоджи, которое чаще всего лайкало этот пост",
                  className: je.captured,
                  children: [
                    n("span", { className: je.capturedEmoji, children: a }),
                    n("span", {
                      className: je.capturedText,
                      children: "Пост захвачен",
                    }),
                  ],
                }),
                n(ho, {
                  text: "Эмоджи, которое чаще всего лайкало этот пост",
                  className: je.capturedMobile,
                  children: n("span", { children: a }),
                }),
              ],
            }),
          n("span", {
            className: je.views,
            children: [n(Ii, {}), n(kn, { value: i })],
          }),
        ],
      }),
    ],
  });
}
const z0 = "FdYjPIR3";
const X0 = "MRPN0AlG";
const Y0 = "gVTZJXUf";
const Z0 = "PpDQ-7eT";
const q0 = "f-Ewjbkv";
const G0 = "qYj6ku6f";
const K0 = "YmQiahvA";
const J0 = "_4sEs40kd";
const Q0 = "QflhaLOr";
const eg = "_8yAtdePh";
const tg = "Q0BBb0GB";
const ng = "LVT25SUb";
const og = "_2QopExez";
const rg = "GWyTusR8";
const sg = "uA48J3e0";
const ig = "L9fW2zD6";

const Fe = {
  post: z0,
  postInner: X0,
  isFeed: Y0,
  postContent: Z0,
  postBody: q0,
  textWrapper: G0,
  text: K0,
  collapsed: J0,
  expandButton: Q0,
  originalPost: eg,
  originalPostHeader: tg,
  originalPostTime: ng,
  originalPostText: og,
  originalPostMedia: rg,
  originalPostStats: sg,
  originalPostStat: ig,
};

function Kn(e) {
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
function ag(e) {
  if (!e) {
    return "";
  }
  const t = new Date(e);
  return isNaN(t.getTime())
    ? ""
    : t.toLocaleDateString("ru-RU", { day: "numeric", month: "short" });
}
function cg({ attachments: e }) {
  const t = Se(() => mo(e), [e]);
  return (
    t.length === 0 ||
    n("div", {
      className: Fe.originalPostMedia,
      children: n(_r, { media: t }),
    })
  );
}
function lg({ originalPost: e }) {
  const t = ag(e.createdAt);

  const o = R(
    (r) => {
      r.stopPropagation();
      const s = e.author.username ?? e.author.id;
      $(`/@${s}/post/${e.id}`);
    },
    [e.author.username, e.author.id, e.id]
  );

  return n("div", {
    className: Fe.originalPost,
    onClick: o,
    children: [
      n("div", {
        className: Fe.originalPostHeader,
        children: [
          n(uo, { size: 14 }),
          n(rt, {
            src: e.author.avatar ?? "",
            alt: e.author.displayName,
            size: "xs",
          }),
          n(Hn, {
            name: e.author.displayName,
            verified: e.author.isVerified,
            pin: e.author.pin,
            size: "xs",
          }),
          n("span", { className: Fe.originalPostTime, children: t }),
        ],
      }),
      e.text && n("div", { className: Fe.originalPostText, children: e.text }),
      e.attachments &&
        e.attachments.length > 0 &&
        n(cg, { attachments: e.attachments }),
      n("div", {
        className: Fe.originalPostStats,
        children: [
          n("span", {
            className: Fe.originalPostStat,
            children: [n(yo, { size: 16 }), Kn(e.reactions?.total ?? 0)],
          }),
          n("span", {
            className: Fe.originalPostStat,
            children: [n(fr, { size: 16 }), Kn(e.stats?.comments ?? 0)],
          }),
          n("span", {
            className: Fe.originalPostStat,
            children: [n(uo, { size: 16 }), Kn(e.stats?.reposts ?? 0)],
          }),
          n("span", {
            className: Fe.originalPostStat,
            children: [n(Ii, { size: 16 }), Kn(e.stats?.views ?? 0)],
          }),
        ],
      }),
    ],
  });
}
const ug = "cZnuRugG";
const dg = "gXPlO0SF";
const hg = "yfGqJGgk";
const fg = "a3a8DYnF";
const mg = "Zm7GdliE";
const pg = "x-TM77c0";
const gg = "vqhGsmVx";
const vg = "wXZfEkKN";
const wg = "C4SARhpg";
const yg = "epV7SM-L";
const _g = "Bkxq4G-V";
const Cg = "M1orzhg7";
const Ng = "VQtopWsI";
const bg = "vI-SLgZ3";
const Tg = "hWCpL6Hf";
const kg = "WAYqGGYB";
const Eg = "OWLYzJZs";
const Rg = "P15SrtYp";
const Sg = "y-9i4poD";
const Ig = "qTvjpE7N";
const xg = "rKM-vAOv";

const Me = {
  commentInput: ug,
  replyMode: dg,
  inputRow: hg,
  attachmentStrip: fg,
  circleButton: mg,
  micButton: pg,
  sendButton: gg,
  submitting: vg,
  textareaContainer: wg,
  expanded: yg,
  voiceMode: _g,
  inputWrapper: Cg,
  commentCharCount: Ng,
  error: bg,
  input: Tg,
  replyHeader: kg,
  replyText: Eg,
  replyName: Rg,
  replyClose: Sg,
  dragActive: Ig,
  dragOverlay: xg,
};

const Pg = "_2mmgs8Ne";
const Ag = "WFxp3J8v";
const Lg = "abwLbpfW";
const Oo = { textInput: Pg, entering: Ag, sendButton: Lg };
const Mg = 1000; /* 1e3 */
function $g({
  text: e,
  spans: t,
  onChange: o,
  placeholder: r,
  onSubmit: s,
  isEntering: i,
  autoFocus: a,
  isSubmitting: c,
  sendDisabled: u,
  onImagePaste: l,
}) {
  const h = Mg - e.length;
  const d = h < 0;
  const f = [Oo.textInput, i ? Oo.entering : ""].filter(Boolean).join(" ");
  return n("div", {
    className: f,
    children: [
      n("div", {
        className: Me.inputWrapper,
        children: [
          n(_o, {
            value: e,
            spans: t,
            onChange: o,
            placeholder: r,
            autoFocus: a,
            className: Me.input,
            minHeight: 24,
            maxHeight: 200,
            onSubmit: d || s,
            disableFormatting: true,
            onImagePaste: l,
          }),
          d &&
            n("span", {
              className: `${Me.commentCharCount} ${Me.error}`,
              children: h,
            }),
        ],
      }),
      n("button", {
        className: `${Me.circleButton} ${Me.sendButton} ${Oo.sendButton} ${
          c ? Me.submitting : ""
        }`,
        onClick: s,
        disabled: c || u || u || d,
        children: c ? n(gt, { size: "xs" }) : n(pi, { size: 20 }),
      }),
    ],
  });
}
const En = 2;
const Og = 2;
const Jn = En + Og;
const Xt = 24;
const Dg = 80;
const vs = "rgba(142, 142, 147, 0.6)";
const Bg = "#FFFFFF";
function Ug({
  levels: e,
  slideOffset: t,
  audioRef: o,
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
  const C = I(0);
  const w = I(null);
  const v = I(null);
  const p = I(0);
  const [y, T] = x(0);
  const g = Math.max(1, Math.floor(y / Jn));

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
    const O = new ResizeObserver((Q) => {
      for (const ie of Q) {
        const X = ie.contentRect.width;

        if (X > 0) {
          T(X);
        }
      }
    });
    O.observe(l_current);
    const B = l_current.getBoundingClientRect();

    if (B.width > 0) {
      T(B.width);
    }

    return () => {
      O.disconnect();
    };
  }, []);

  W(() => {
    const u_current = u.current;
    if (!u_current || y === 0) {
      return;
    }
    const O = window.devicePixelRatio || 1;
    u_current.width = y * O;
    u_current.height = Xt * O;
    u_current.style.width = `${y}px`;
    u_current.style.height = `${Xt}px`;
  }, [y]);

  const _ = R(
    (N) => {
      const u_current = u.current;
      if (!u_current || y === 0) {
        return;
      }
      const B = u_current.getContext("2d");
      if (!B) {
        return;
      }
      const Q = window.devicePixelRatio || 1;
      B.clearRect(0, 0, u_current.width, u_current.height);
      B.save();
      B.scale(Q, Q);
      const ie = Xt / 2;
      const X = Xt - 4;
      for (let Y = 0; Y < g; Y++) {
        let ne;
        if (e.length === 0) {
          ne = 0.05;
        } else if (e.length === 1) {
          ne = e[0];
        } else {
          const U = (Y / (g - 1)) * (e.length - 1);
          const D = Math.floor(U);
          const L = Math.min(D + 1, e.length - 1);
          const M = U - D;
          ne = e[D] * (1 - M) + e[L] * M;
        }
        const te = Math.max(4, ne * X);
        const oe = Y * Jn;
        const F = ie - te / 2;
        const z = Y < N;
        B.fillStyle = z ? Bg : vs;
        const ee = En / 2;
        B.beginPath();
        B.roundRect(oe, F, En, te, ee);
        B.fill();
      }
      B.restore();
    },
    [e, y, g]
  );

  const S = R(
    (N) => {
      const u_current = u.current;
      if (!u_current || y === 0) {
        return;
      }
      const B = u_current.getContext("2d");
      if (!B) {
        return;
      }
      const Q = window.devicePixelRatio || 1;
      const m_current = m.current;

      const { current } = f;

      if (current !== m_current) {
        const F = N - C.current;
        const z = (Jn / Dg) * F;

        if (current < m_current) {
          f.current = Math.min(m_current, current + z);
        } else {
          f.current = m_current;
        }
      }
      C.current = N;
      B.clearRect(0, 0, u_current.width, u_current.height);
      B.save();
      B.scale(Q, Q);
      B.translate(-current, 0);
      const ne = Xt / 2;
      const te = Xt - 4;
      const oe = g + e.length;
      for (let F = 0; F < oe; F++) {
        const z = F - g;
        const ee = z >= 0 && z < e.length ? e[z] : 0.05;
        const U = Math.max(4, ee * te);
        const D = F * Jn;
        const L = ne - U / 2;
        B.fillStyle = vs;
        const M = En / 2;
        B.beginPath();
        B.roundRect(D, L, En, U, M);
        B.fill();
      }
      B.restore();

      if (f.current !== m.current || r) {
        w.current = requestAnimationFrame(S);
      }
    },
    [e, y, g, r]
  );

  W(() => {
    if (r) {
      C.current = performance.now();
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
    if (!i || r) {
      if (v.current) {
        cancelAnimationFrame(v.current);
        v.current = null;
      }

      return;
    }
    const N = () => {
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
      const B = o_current.currentTime / o_current.duration;
      const Q = Math.ceil(B * g);

      if (Q !== p.current) {
        p.current = Q;
        _(Q);
      }

      v.current = requestAnimationFrame(N);
    };
    v.current = requestAnimationFrame(N);

    return () => {
      if (v.current) {
        cancelAnimationFrame(v.current);
        v.current = null;
      }
    };
  }, [i, r, o, g, _]);

  W(() => {
    if (!r && !i && s) {
      const o_current = o.current;
      if (o_current && o_current.duration > 0 && o_current.currentTime > 0) {
        const O = o_current.currentTime / o_current.duration;
        const B = Math.ceil(O * g);
        p.current = B;
        _(B);
      } else {
        p.current = 0;
        _(0);
      }
    }
  }, [r, i, s, _, o, g]);

  W(() => {
    if (!r && s && !i) {
      _(p.current);
    }
  }, [e, g, r, s, i, _]);

  const k = R((N) => {
    const l_current = l.current;
    if (!l_current) {
      return 0;
    }
    const B = l_current.getBoundingClientRect();
    const Q = "touches" in N ? N.touches[0].clientX : N.clientX;
    return Math.max(0, Math.min(1, (Q - B.left) / B.width));
  }, []);

  const E = R(
    (N) => {
      if (!(!s || r)) {
        N.preventDefault();

        if (!i) {
          c();
          return;
        }

        h.current = true;
        d.current = k(N);
      }
    },
    [s, r, i, k, c]
  );

  const b = R(
    (N) => {
      if (h.current) {
        d.current = k(N);
      }
    },
    [k]
  );

  const P = R(() => {
    if (h.current) {
      a(d.current);
      h.current = false;
    }
  }, [a]);

  W(() => {
    const N = (B) => b(B);

    const O = () => P();

    window.addEventListener("mousemove", N);
    window.addEventListener("mouseup", O);
    window.addEventListener("touchmove", N);
    window.addEventListener("touchend", O);

    return () => {
      window.removeEventListener("mousemove", N);
      window.removeEventListener("mouseup", O);
      window.removeEventListener("touchmove", N);
      window.removeEventListener("touchend", O);
    };
  }, [b, P]);

  return n("div", {
    ref: l,
    style: {
      width: "100%",
      height: `${Xt}px`,
      overflow: "hidden",
      cursor: s && !r ? "pointer" : "default",
    },
    onMouseDown: E,
    onTouchStart: E,
    children: n("canvas", { ref: u }),
  });
}
const Fg = "-Ho1i5aD";
const Hg = "tC8l4Awz";
const Wg = "qgaHaLq2";
const Vg = "ABusj9On";
const jg = "QN61mWs7";
const zg = "sb0Zcaza";
const Xg = "zYZ8RG9n";
const Yg = "kV8tSOUW";
const Zg = "MazmNAnz";
const qg = "IygqjuIv";
const Gg = "Danfku1z";

const tt = {
  voiceInput: Fg,
  circleButton: Hg,
  playButton: Wg,
  hasRecording: Vg,
  stopButton: jg,
  recording: zg,
  sendButton: Xg,
  audioVisualizer: Yg,
  waveformContainer: Zg,
  recordingTime: qg,
  exiting: Gg,
};

function Kg({ onCancel: e, onSend: t, isExiting: o, onExitComplete: r }) {
  const [s, i] = x(false);

  const {
    isRecording: a,
    hasRecording: c,
    recordingTime: u,
    audioLevels: l,
    slideOffset: h,
    isPlaying: d,
    playbackProgress: f,
    duration: m,
    audioElementRef: C,
    startRecording: w,
    stopRecording: v,
    cancelRecording: p,
    playAudio: y,
    pauseAudio: T,
    seekTo: g,
    getAudioBlob: _,
  } = bc();

  W(() => {
    w();
  }, []);

  W(() => {
    if (o && r) {
      const B = setTimeout(r, 300);
      return () => clearTimeout(B);
    }
  }, [o, r]);

  const S = (B) => {
    if (!isFinite(B) || isNaN(B)) {
      return "00:00";
    }
    const Q = Math.floor(B / 60);
    const ie = Math.floor(B % 60);
    return `${Q.toString().padStart(2, "0")}:${ie.toString().padStart(2, "0")}`;
  };

  const k = () => {
    if (c) {
      if (d) {
        T();
      } else {
        y();
      }
    }
  };

  const E = () => {
    if (a) {
      v();
    }
  };

  const b = R(
    (B) => {
      g(B);
    },
    [g]
  );

  const P = R(async () => {
    if (!(s || !t)) {
      i(true);
      try {
        let B = null;

        if (a) {
          B = await v();
        } else {
          B = _();
        }

        if (!B) {
          return;
        }

        await t(B);
        p();
        e();
      } catch (B) {
        console.error("Failed to send voice message:", B);
      } finally {
        i(false);
      }
    }
  }, [s, a, v, _, t, p, e]);

  const N = S(a ? u : d ? f * m : m);

  const O = [
    tt.voiceInput,
    a ? tt.recording : "",
    c ? tt.hasRecording : "",
    o ? tt.exiting : "",
  ]
    .filter(Boolean)
    .join(" ");

  return n("div", {
    className: O,
    children: [
      n("button", {
        className: `${tt.circleButton} ${tt.playButton}`,
        onClick: k,
        children: d ? n(Ti, { size: 20 }) : n(Ei, { size: 20 }),
      }),
      n("div", {
        className: tt.audioVisualizer,
        children: [
          n("div", {
            className: tt.waveformContainer,
            children: n(Ug, {
              levels: l,
              slideOffset: h,
              audioRef: C,
              isRecording: a,
              hasRecording: c,
              isPlaying: d,
              onSeek: b,
              onPlay: y,
            }),
          }),
          n("span", { className: tt.recordingTime, children: N }),
        ],
      }),
      n("button", {
        className: `${tt.circleButton} ${tt.stopButton}`,
        onClick: E,
        children: n(Jc, { size: 20 }),
      }),
      n("button", {
        className: `${tt.circleButton} ${tt.sendButton}`,
        onClick: P,
        disabled: s || (a && u < 1),
        children: s ? n(gt, { size: "xs" }) : n(pi, { size: 20 }),
      }),
    ],
  });
}
function Wi({
  onSubmit: e,
  onVoiceSend: t,
  placeholder: o = "Написать комментарий...",
  replyTo: r,
  onCancelReply: s,
  autoFocus: i,
}) {
  const { text: a, spans: c, handleChange: u, reset: l } = wo();
  const [h, d] = x("text");
  const [f, m] = x(false);
  const [C, w] = x(false);
  const [v, p] = x(false);
  const [y, T] = x(false);
  const g = I(false);
  const _ = I(null);
  const S = I(0);

  const {
    images: k,
    uploadingImages: E,
    isUploading: b,
    openFilePicker: P,
    removeImage: N,
    uploadFiles: O,
    clearAll: B,
    fileInputRef: Q,
    handleFileChange: ie,
  } = Oi(4);

  W(
    () => () => {
      if (_.current) {
        clearTimeout(_.current);
      }
    },
    []
  );
  const X = k.length > 0 || E.length > 0;
  const Y = a.length > 0 || v || v || X;
  const ne = h === "voice";
  const te = 1000; /* 1e3 */

  const oe = async () => {
    const Z = a.trim().length > 0;
    const J = k.length > 0;
    if ((!Z && !J) || v || b || a.length > te) {
      return;
    }
    const ce = a.trim();
    const me = [...c];

    const _e = k.map((ue) => ({
      mediaId: ue.mediaId,
    }));

    p(true);
    try {
      await e(ce, me, _e.length > 0 ? _e : undefined);
      l();
      B();
    } catch (ue) {
      console.error("Failed to submit comment:", ue);
    } finally {
      p(false);
    }
  };

  const F = () => {
    g.current = true;
    d("voice");
    w(false);
  };

  const z = () => {
    m(true);
  };

  const ee = () => {
    m(false);
    d("text");
    w(true);

    if (_.current) {
      clearTimeout(_.current);
    }

    _.current = window.setTimeout(() => {
      _.current = null;
      w(false);
    }, 300);
  };

  const U = R((Z) => {
    Z.preventDefault();
    Z.stopPropagation();
    S.current++;

    if (Z.dataTransfer?.types.includes("Files")) {
      T(true);
    }
  }, []);

  const D = R((Z) => {
    Z.preventDefault();
    Z.stopPropagation();
  }, []);

  const L = R((Z) => {
    Z.preventDefault();
    Z.stopPropagation();
    S.current--;

    if (S.current === 0) {
      T(false);
    }
  }, []);

  const M = R(
    (Z) => {
      Z.preventDefault();
      Z.stopPropagation();
      S.current = 0;
      T(false);
      const J = Z.dataTransfer?.files;

      if (J && J.length > 0) {
        O(Array.from(J));
      }
    },
    [O]
  );

  const q = [
    Me.commentInput,
    Y ? Me.expanded : "",
    ne ? Me.voiceMode : "",
    r ? Me.replyMode : "",
    y ? Me.dragActive : "",
  ]
    .filter(Boolean)
    .join(" ");

  return n("div", {
    className: q,
    onDragEnter: U,
    onDragOver: D,
    onDragLeave: L,
    onDrop: M,
    children: [
      y &&
        n("div", {
          className: Me.dragOverlay,
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
          className: Me.replyHeader,
          children: [
            n("span", {
              className: Me.replyText,
              children: [
                "Ответ для ",
                n("span", { className: Me.replyName, children: r.authorName }),
              ],
            }),
            n("button", {
              className: Me.replyClose,
              onClick: s,
              children: n(kt, { size: 16 }),
            }),
          ],
        }),
      !ne &&
        !f &&
        X &&
        n("div", {
          className: Me.attachmentStrip,
          children: n($i, { images: k, uploadingImages: E, onRemove: N }),
        }),
      n("div", {
        className: Me.inputRow,
        children: [
          n("button", {
            className: Me.circleButton,
            onClick: ne ? z : P,
            children: ne ? n(kt, { size: 20 }) : n(gi, { size: 20 }),
          }),
          n("div", {
            className: Me.textareaContainer,
            children:
              ne || f
                ? n(Kg, {
                    onCancel: z,
                    onSend: t,
                    isExiting: f,
                    onExitComplete: ee,
                  })
                : n($g, {
                    text: a,
                    spans: c,
                    onChange: u,
                    placeholder: o,
                    onSubmit: oe,
                    isEntering: C,
                    autoFocus: i,
                    isSubmitting: v,
                    sendDisabled: b,
                    onImagePaste: O,
                  }),
          }),
          !ne &&
            !f &&
            n("button", {
              className: `${Me.circleButton} ${Me.micButton}`,
              onClick: F,
              children: n(Vc, { size: 20 }),
            }),
        ],
      }),
      n("input", {
        ref: Q,
        type: "file",
        accept: Go,
        multiple: true,
        onChange: ie,
        style: { display: "none" },
      }),
    ],
  });
}

const Do = Et((e) => ({
  activeAudioId: null,
  setActiveAudio: (t) => e({ activeAudioId: t }),
}));

const Jg = "_4REluXTH";
const Qg = "csThJX40";
const ev = "_7tEz9WJs";
const tv = "yICArXOf";
const nv = "-QGEO-Ir";
const ov = "F2vpEy3t";
const rv = "thwOd-Oi";
const sv = "cU3NuD-h";
const iv = "koGcQrYR";
const av = "Ka6vy6TO";

const ft = {
  voiceMessage: Jg,
  playButton: Qg,
  content: ev,
  waveform: tv,
  dragging: nv,
  bar: ov,
  played: rv,
  info: sv,
  time: iv,
  duration: av,
};

const cv = 45;
function lv(e) {
  let t = 0;
  for (let o = 0; o < e.length; o++) {
    const r = e.charCodeAt(o);
    t = (t << 5) - t + r;
    t = t & t;
  }
  return Math.abs(t);
}
function uv(e) {
  const t = [];
  let o = lv(e);
  for (let r = 0; r < cv; r++) {
    o = (o * 9301 + 49297) % 233280;
    const s = 0.2 + (o / 233280) * 0.8;
    t.push(s);
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
function dv({ src: e, duration: t = 0 }) {
  const o = Se(() => e, [e]);

  const r = Se(() => uv(e), [e]);

  const s = Do((E) => E.activeAudioId);

  const i = Do((E) => E.setActiveAudio);

  const [a, c] = x(true);
  const [u, l] = x(0);
  const [h, d] = x(t);
  const [f, m] = x(false);
  const C = I(null);
  const w = I(null);
  const v = I(null);
  const p = s === o;

  W(() => {
    if (s !== o && C.current && !C.current.paused) {
      C.current.pause();
      v.current && (cancelAnimationFrame(v.current), (v.current = null));
    }
  }, [s, o]);

  W(() => {
    const E = new Audio(e);
    C.current = E;

    const b = () => {
      d(E.duration || t);
      c(false);
    };

    const P = () => {
      l(0);

      if (v.current) {
        cancelAnimationFrame(v.current);
        v.current = null;
      }

      i(null);
    };

    const N = () => {
      c(false);
    };

    E.addEventListener("loadedmetadata", b);
    E.addEventListener("ended", P);
    E.addEventListener("error", N);

    return () => {
      E.removeEventListener("loadedmetadata", b);
      E.removeEventListener("ended", P);
      E.removeEventListener("error", N);
      E.pause();
      C.current = null;

      if (v.current) {
        cancelAnimationFrame(v.current);
      }

      if (Do.getState().activeAudioId === o) {
        i(null);
      }
    };
  }, [e, t, o, i]);

  const y = R(() => {
    if (C.current) {
      l(C.current.currentTime);
      v.current = requestAnimationFrame(y);
    }
  }, []);

  const T = R(() => {
    const C_current = C.current;

    if (C_current && !a) {
      if (p) {
        C_current.pause();
        v.current && (cancelAnimationFrame(v.current), (v.current = null));
        i(null);
      } else {
        i(o);
        C_current.play();
        y();
      }
    }
  }, [p, a, o, i, y]);

  const g = R(
    (E) => {
      if (!w.current || !h) {
        return 0;
      }
      const b = w.current.getBoundingClientRect();
      const E_clientX = E.clientX;
      return Math.max(0, Math.min(E_clientX - b.left, b.width)) / b.width;
    },
    [h]
  );

  const _ = R(
    (E) => {
      const C_current = C.current;
      if (!C_current || !h || !h || f) {
        return;
      }
      const P = g(E);
      C_current.currentTime = P * h;
      l(C_current.currentTime);
    },
    [h, f, g]
  );

  const S = R(
    (E) => {
      const C_current = C.current;
      if (!C_current || !h) {
        return;
      }
      m(true);
      const P = g(E);
      C_current.currentTime = P * h;
      l(C_current.currentTime);
    },
    [h, g]
  );

  W(() => {
    if (!f) {
      return;
    }

    const E = (P) => {
      const C_current = C.current;
      if (!C_current || !h) {
        return;
      }
      const O = g(P);
      C_current.currentTime = O * h;
      l(C_current.currentTime);
    };

    const b = () => {
      m(false);
    };

    document.addEventListener("mousemove", E);
    document.addEventListener("mouseup", b);

    return () => {
      document.removeEventListener("mousemove", E);
      document.removeEventListener("mouseup", b);
    };
  }, [f, h, g]);
  const k = h > 0 ? u / h : 0;
  return n("div", {
    className: `${ft.voiceMessage} ${p ? ft.playing : ""}`,
    children: [
      n("button", {
        className: ft.playButton,
        onClick: T,
        disabled: a,
        children: a
          ? n(Fn, { size: 18 })
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
            onClick: _,
            onMouseDown: S,
            children: r.map((E, b) => {
              const N = (b + 0.5) / r.length <= k;
              return n(
                "div",
                {
                  className: `${ft.bar} ${N ? ft.played : ""}`,
                  style: { height: `${Math.max(4, E * 24)}px` },
                },
                b
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
const hv = "EMoEIZFv";
const fv = "TCFYTRkG";
const mv = "-Jv0cl93";
const pv = "_8ZH4gvtt";
const gv = "VgMMM-FP";
const vv = "MHUIw-Bn";
const wv = "ugI7Vwfw";
const yv = "eYiDjO7I";
const _v = "efgl9R1v";
const Cv = "N5ciicq2";
const Nv = "Y3Xvuphx";
const bv = "P1lAENLs";
const Tv = "EafRTyEa";
const kv = "YgCVK2-C";
const Ev = "E34stxAv";
const Rv = "_5xeGurR-";
const Sv = "_8CHHNoFp";
const Iv = "qBk55euG";
const xv = "NTrrYRK4";
const Pv = "Oy71u1HK";
const Av = "Az3ELd41";
const Lv = "g9UiDqsQ";
const Mv = "-tabj2ls";
const $v = "LiWVk6u3";

const Te = {
  commentWrapper: hv,
  threadItem: fv,
  avatarWrapper: mv,
  threadLine: pv,
  commentBody: gv,
  showMoreBtn: vv,
  avatarPlaceholder: wv,
  comment: yv,
  small: _v,
  commentTime: Cv,
  commentText: Nv,
  commentActions: bv,
  commentContent: Tv,
  avatarLink: kv,
  authorLink: Ev,
  commentHeader: Rv,
  moreButton: Sv,
  commentHeaderLeft: Iv,
  replyMention: xv,
  commentMedia: Pv,
  reactionWrapper: Av,
  commentAction: Lv,
  liked: Mv,
  replyButton: $v,
};

function Ov({
  author: e,
  commentId: t,
  text: o,
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
  replyTo: C,
  hideAvatar: w = false,
  isWallOwner: v = false,
}) {
  console.log("[CommentBase] RENDER", { commentId: t, text: o.slice(0, 20) });
  const p = mi(i);

  const y = Ne((E) => E.profile?.id);

  const T = e.id === y;
  const g = T || v;
  const _ = u === "xs";

  const S = Se(() => {
    const E = [];

    if (T && f) {
      E.push({
        id: "edit",
        label: "Редактировать",
        icon: n(yi, { size: 16 }),
        onClick: () => f(t),
      });
    }

    if (g && m) {
      E.push({
        id: "delete",
        label: "Удалить",
        icon: n(Si, { size: 16 }),
        danger: true,
        onClick: () => m(t),
      });
    }

    if (!T) {
      E.push({
        id: "report",
        label: "Пожаловаться",
        icon: n(Ci, { size: 16 }),
        danger: true,
        onClick: () => d(t),
      });
    }

    return E;
  }, [T, g, t, f, m, d]);

  const k = `/@${e.username ?? e.id}`;
  return n("div", {
    className: `${Te.comment} ${_ ? Te.small : ""}`,
    children: [
      !w &&
        n("a", {
          href: k,
          className: Te.avatarLink,
          children: n(rt, { src: e.avatar, alt: e.displayName, size: u }),
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
                    href: k,
                    className: Te.authorLink,
                    children: n(Hn, {
                      name: e.displayName,
                      verified: e.isVerified,
                      pin: e.pin,
                      size: u,
                    }),
                  }),
                  n("span", { className: Te.commentTime, children: p }),
                ],
              }),
              n(Fi, {
                trigger: n(bi, { size: _ ? 14 : 16 }),
                items: S,
                position: "bottom-right",
                className: Te.moreButton,
              }),
            ],
          }),
          (C || o) &&
            n("div", {
              className: Te.commentText,
              children: [
                C &&
                  n(Re, {
                    children: [
                      n("a", {
                        href: `/@${C.username}`,
                        className: Te.replyMention,
                        children: ["@", C.displayName],
                      }),
                      ", ",
                    ],
                  }),
                o && n(Ui, { text: o, spans: r }),
              ],
            }),
          mo(s).length > 0 &&
            n("div", {
              className: Te.commentMedia,
              children: n(_r, { media: mo(s) }),
            }),
          s
            .filter((E) => E.type === "audio")
            .map((E) => n(dv, { src: E.url, duration: E.duration }, E.id)),
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
                    n(yo, { size: 14, filled: c }),
                    n(kn, { value: a }),
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
function Vi({
  comment: e,
  onLike: t,
  onReaction: o,
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
  isLoadingReplies: C = false,
  flashingCommentId: w,
  isWallOwner: v = false,
}) {
  console.log("[CommentItem] RENDER", { commentId: e.id });
  const p = i?.commentId === e.id;

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
  const [_] = x({});
  const [S] = x({});
  const k = R(async () => {}, [e.id]);
  const E = R(async (N) => {}, []);
  const b = e.stats.replies > T.length;

  const P = [
    { type: "parent", data: e, author: y },
    ...T.map((N) => ({
      type: "reply",
      data: N,

      author: {
        id: N.author.id,
        username: N.author.username,
        avatar: N.author.avatar ?? "",
        displayName: N.author.displayName,
        isVerified: N.author.isVerified,
        pin: N.author.pin,
      },
    })),
  ];

  return n("div", {
    className: `${Te.commentWrapper} ${g ? "flash-highlight" : ""}`,
    "data-comment-id": e.id,
    children: [
      P.map((N, O) => {
        const Q = !(O === P.length - 1 && !p && !b);
        const ie = w === N.data.id;
        return n(
          "div",
          {
            "data-comment-id": N.data.id,
            className: `${Te.threadItem} ${ie ? "flash-highlight" : ""}`,
            children: [
              n("div", {
                className: Te.avatarWrapper,
                children: [
                  n("a", {
                    href: `/@${N.author.username ?? N.author.id}`,
                    className: Te.avatarLink,
                    children: n(rt, {
                      src: N.author.avatar,
                      alt: N.author.displayName,
                      size: "sm",
                    }),
                  }),
                  Q && n("div", { className: Te.threadLine }),
                ],
              }),
              n("div", {
                className: Te.commentBody,
                children: n(Ov, {
                  author: N.author,
                  commentId: N.data.id,
                  text: N.data.text,
                  spans: N.data.spans ?? [],
                  attachments: N.data.attachments ?? [],
                  replyTo: N.data.replyTo,
                  createdAt: N.data.createdAt,
                  reactionsCount: N.data.reactions.total,
                  isReacted: N.data.reactions.myReaction !== null,
                  selectedReaction: N.data.reactions.myReaction,
                  reactionCounts: N.type === "parent" ? _ : S[N.data.id] ?? {},
                  size: "sm",
                  onLike: N.type === "parent" ? t : () => r(N.data.id),
                  onReaction:
                    N.type === "parent"
                      ? o
                        ? (X) => o(e.id, X)
                        : undefined
                      : s
                      ? (X) => s(N.data.id, X)
                      : undefined,
                  onReply: () =>
                    N.type === "parent"
                      ? a(
                          e.id,
                          e.author.username ?? e.author.id,
                          e.author.displayName,
                          e.author.id
                        )
                      : a(
                          e.id,
                          N.data.author.username ?? N.data.author.id,
                          N.data.author.displayName,
                          N.data.author.id,
                          N.data.id
                        ),
                  onReport: d,
                  onEdit: f,
                  onDelete: m,
                  onHoverReaction: N.type === "parent" ? k : () => E(N.data.id),
                  hideAvatar: true,
                  isWallOwner: v,
                }),
              }),
            ],
          },
          N.data.id
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
                b && n("div", { className: Te.threadLine }),
              ],
            }),
            n("div", {
              className: Te.commentBody,
              children: n(Wi, {
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
      b &&
        !C &&
        n("button", {
          className: Te.showMoreBtn,
          onClick: () => h(e.id),
          children: ["Показать ещё ", e.stats.replies - T.length, " ответов"],
        }),
    ],
  });
}
function Dv({
  itemCount: e,
  estimatedItemHeight: t,
  overscan: o = 5,
  getItemKey: r = (s) => s,
}) {
  const s = I(null);
  const [i, a] = x(0);
  const [c, u] = x(0);
  const l = I(new Map());
  const h = I(new Map());
  const d = I(0);

  if (d.current !== e) {
    d.current = e;
    h.current.clear();
  }

  const f = R(
    (_) => {
      const S = r(_);
      return l.current.get(S) ?? t;
    },
    [r, t]
  );

  const m = R(
    (_) => {
      if (_ === 0) {
        return 0;
      }
      const S = h.current.get(_);
      if (S !== undefined) {
        return S;
      }
      let k = 0;
      let E = 0;
      for (let b = _ - 1; b >= 0; b--) {
        const P = h.current.get(b);
        if (P !== undefined) {
          k = b;
          E = P;
          break;
        }
      }
      for (let b = k; b < _; b++) {
        E += f(b);
      }
      h.current.set(_, E);
      return E;
    },
    [f]
  );

  const C = Se(() => (e === 0 ? 0 : m(e - 1) + f(e - 1)), [e, m, f]);

  const { startIndex: w, endIndex: v } = Se(() => {
    if (e === 0 || c === 0) {
      return { startIndex: 0, endIndex: 0 };
    }
    let _ = 0;
    let S = e - 1;

    while (_ < S) {
      const P = Math.floor((_ + S) / 2);
      const N = m(P);
      const O = f(P);

      if (N + O < i) {
        _ = P + 1;
      } else {
        S = P;
      }
    }

    const k = Math.max(0, _ - o);
    let E = _;
    let b = m(_) - i;

    while (E < e && b < c + t * o) {
      b += f(E);
      E++;
    }

    E = Math.min(e - 1, E + o);
    return { startIndex: k, endIndex: E };
  }, [e, i, c, m, f, o, t]);

  const p = Se(() => {
    if (e === 0) {
      return [];
    }
    const _ = [];
    for (let S = w; S <= v; S++) {
      _.push({ index: S, key: r(S), start: m(S), size: f(S) });
    }
    return _;
  }, [w, v, r, m, f, e]);

  const y = R(
    (_, S) => {
      if (!_) {
        return;
      }
      const k = r(S);
      const E = _.getBoundingClientRect().height;
      if (E <= 0) {
        return;
      }
      const b = l.current.get(k);

      if (b === undefined || Math.abs(b - E) > 2) {
        l.current.set(k, E);
        h.current.clear();
      }
    },
    [r]
  );

  const T = R(() => {
    if (s.current) {
      a(s.current.scrollTop);
    }
  }, []);

  const g = R(
    (_) => {
      if (s.current) {
        s.current.removeEventListener("scroll", T);
      }

      s.current = _;

      if (_) {
        u(_.clientHeight);
        a(_.scrollTop);
        _.addEventListener("scroll", T, { passive: true });
      }
    },
    [T]
  );

  W(() => {
    if (!s.current) {
      return;
    }
    const _ = new ResizeObserver((S) => {
      for (const k of S) {
        u(k.contentRect.height);
      }
    });
    _.observe(s.current);

    return () => _.disconnect();
  }, []);

  W(
    () => () => {
      if (s.current) {
        s.current.removeEventListener("scroll", T);
      }
    },
    [T]
  );

  return { containerRef: g, virtualItems: p, totalSize: C, measureElement: y };
}
const Bv = "OSYFbJTc";
const Uv = "BZs335wO";
const Fv = "uHfvgHkC";
const Hv = "_0mjuADLO";
const Wv = "-irX9LBI";
const Vv = "PkENmhoL";
const jv = "Ipy3h0nq";
const zv = "_7EbOLXPm";
const Xv = "qUnBivge";
const Yv = "XcWtT84I";
const Zv = "I-b0vKPW";
const qv = "quGM4O7I";
const Gv = "EO684LVX";

const nt = {
  comments: Bv,
  sortWrapper: Uv,
  sortSelect: Fv,
  commentsList: Hv,
  commentItem: Wv,
  empty: Vv,
  loading: jv,
  loadMoreSentinel: zv,
  virtualContainer: Xv,
  virtualContent: Yv,
  virtualItem: Zv,
  loadMoreSpinner: qv,
  inputWrapper: Gv,
};

const Kv = 120;
function Jv({
  comments: e,
  hasMore: t,
  isLoadingMore: o,
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
  onSubmitReply: C,
  onVoiceSend: w,
  onLoadReplies: v,
  onReport: p,
  onEdit: y,
  onDelete: T,
}) {
  const g = I(false);

  const {
    containerRef: _,
    virtualItems: S,
    totalSize: k,
    measureElement: E,
  } = Dv({
    itemCount: e.length,
    estimatedItemHeight: Kv,
    overscan: 3,
    getItemKey: (P) => e[P]?.id ?? P,
  });

  W(() => {
    if (!t || o || o || S.length === 0) {
      g.current = false;
      return;
    }
    const P = S[S.length - 1]?.index ?? 0;
    const N = e.length - 5;

    if (P >= N && !g.current) {
      g.current = true;
      r();
    }
  }, [S, e.length, t, o, r]);

  W(() => {
    if (!o) {
      g.current = false;
    }
  }, [o]);

  const b = R(
    (P, N) => {
      E(P, N);
    },
    [E]
  );
  return n("div", {
    ref: _,
    className: nt.virtualContainer,
    "data-comments-scroll": true,
    children: [
      n("div", {
        className: nt.virtualContent,
        style: { height: `${k}px` },
        children: S.map((P) => {
          const N = e[P.index];
          return N
            ? n(
                "div",
                {
                  ref: (O) => b(O, P.index),
                  className: nt.virtualItem,
                  style: {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    transform: `translateY(${P.start}px)`,
                  },
                  children: n(Vi, {
                    comment: N,
                    onLike: () => u(N.id, N.reactions.myReaction),
                    onReaction: l,
                    onLikeReply: h,
                    onReactionReply: d,
                    replyingTo: s?.commentId === N.id ? s : null,
                    onStartReply: f,
                    onCancelReply: m,
                    onSubmitReply: C,
                    onVoiceSend: w,
                    onLoadReplies: v,
                    onReport: p,
                    onEdit: y,
                    onDelete: T,
                    isLoadingReplies: a === N.id,
                    flashingCommentId: i,
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
          className: nt.loadMoreSpinner,
          children: n(gt, { size: "sm" }),
        }),
    ],
  });
}
const Qv = "DolcZKu1";
const e1 = "_1lo2seB9";
const t1 = "X0vaA15E";
const n1 = "JmzJKMT2";
const o1 = "p8fSWBtD";
const r1 = "TvBLZ6Xz";
const s1 = "ML3QZih-";
const i1 = "F8sHrsZA";
const a1 = "DicPhJTL";
const c1 = "L6r5VJk9";
const l1 = "lHdqCdp-";
const u1 = "rfKDp2t8";

const it = {
  editCommentModal: Qv,
  form: e1,
  header: t1,
  title: n1,
  content: o1,
  editor: r1,
  actions: s1,
  mediaButtons: i1,
  mediaButton: a1,
  submitGroup: c1,
  charCount: l1,
  error: u1,
};

const ys = 2000; /* 2e3 */
function d1({ commentId: e, initialText: t, initialSpans: o = [] }) {
  const { closeModal: r } = en();

  const s = we((_) => _.editComment);

  const i = Ne((_) => _.profile);

  const a = Tt();

  const {
    text: c,
    spans: u,
    editorRef: l,
    handleChange: h,
    insertText: d,
  } = wo(t, o);

  const [f, m] = x(false);
  const C = ys - c.length;
  const w = C < 0;
  const v = c !== t;
  const p = JSON.stringify(u) !== JSON.stringify(o);
  const y = v || p;

  const T = R(
    (_) => {
      d(_.emoji);
    },
    [d]
  );

  const g = R(async () => {
    if (!(!c.trim() || w || w || !y || w || !y || f)) {
      m(true);
      try {
        await s(e, c, u);
        r();
      } catch (_) {
        console.error("Failed to update comment:", _);
      } finally {
        m(false);
      }
    }
  }, [c, u, w, y, f, s, e, r]);

  return n(Ke, {
    frameless: true,
    onClose: r,
    className: it.editCommentModal,
    children: n("div", {
      className: it.form,
      children: [
        n("div", {
          className: it.header,
          children: n("span", {
            className: it.title,
            children: "Редактирование комментария",
          }),
        }),
        n("div", {
          className: it.content,
          children: [
            n(rt, { src: i?.avatar ?? "", size: "sm" }),
            n(_o, {
              ref: l,
              value: c,
              spans: u,
              onChange: h,
              placeholder: "Комментарий...",
              maxLength: ys,
              autoFocus: true,
              className: it.editor,
              minHeight: 40,
              maxHeight: 300,
              disableFormatting: true,
            }),
          ],
        }),
        n("div", {
          className: it.actions,
          children: [
            n("div", {
              className: it.mediaButtons,
              children:
                !a &&
                n(yr, { onEmojiSelect: T, buttonClassName: it.mediaButton }),
            }),
            n("div", {
              className: it.submitGroup,
              children: [
                w &&
                  n("span", {
                    className: `${it.charCount} ${it.error}`,
                    children: C,
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
function h1({
  comments: e,
  isLoading: t,
  isLoadingMore: o,
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
  console.log("[Comments] RENDER", {
    commentsCount: e.length,
    isLoading: t,
    isLoadingMore: o,
    hasMore: r,
    sort: s,
  });
  const w = Tt() && f === "modal";
  const [v, p] = x(null);
  const [y, T] = x(null);
  const [g, _] = x(null);
  const [S, k] = x(null);
  const E = I(null);
  const { openModal: b } = en();

  const P = we((U) => U.highlightedCommentId);

  const N = we((U) => U.clearHighlightedComment);

  const O = we((U) => U.loadReplies);

  const B = we((U) => U.deleteComment);

  const Q = we((U) => U.toggleCommentReaction);

  W(() => {
    if (!r || o) {
      return;
    }

    const U = new IntersectionObserver(
      (L) => {
        if (L[0].isIntersecting) {
          h();
        }
      },
      { rootMargin: "200px" }
    );

    const E_current = E.current;

    if (E_current) {
      U.observe(E_current);
    }

    return () => {
      if (E_current) {
        U.unobserve(E_current);
      }
    };
  }, [r, o, h]);

  W(() => {
    if (!P) {
      return;
    }
    const U =
      document.querySelector("[data-comments-scroll]") ||
      document.querySelector("[data-comments-modal]");
    if (U) {
      U.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const L = document.querySelector("[data-comments-section]");

      if (L) {
        L.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
    const D = window.setTimeout(() => {
      T(P);
      N();
      const L = window.setTimeout(() => {
        T(null);
      }, 600);
      return () => clearTimeout(L);
    }, 300);
    return () => clearTimeout(D);
  }, [P, N]);

  const ie = async (U, D, L) => {
    if (v) {
      await u(
        U,
        D,
        v.commentId,
        v.userId,
        { id: v.userId, username: v.username, displayName: v.displayName },
        L
      );

      p(null);
    }
  };

  const X = (U, D, L, M, q) => {
    p({ commentId: U, username: D, displayName: L, userId: M, replyId: q });
  };

  const Y = () => {
    p(null);
  };

  const ne = R(
    (U) => {
      for (const D of e) {
        const L = D.previewReplies?.find((M) => M.id === U);
        if (L) {
          Q(U, (L.reactions.myReaction === "love", "love"));
          return;
        }
      }
    },
    [e, Q]
  );

  const te = R(
    (U, D) => {
      Q(U, D);
    },
    [Q]
  );

  const oe = R(
    async (U) => {
      _(U);
      try {
        await O(U);
      } finally {
        _(null);
      }
    },
    [O]
  );

  const F = R((U) => {
    k(U);
  }, []);

  const z = R(
    (U) => {
      let D = "";
      let L = [];
      for (const M of e) {
        if (M.id === U) {
          D = M.text;
          L = M.spans ?? [];
          break;
        }
        const q = M.previewReplies?.find((Z) => Z.id === U);
        if (q) {
          D = q.text;
          L = q.spans ?? [];
          break;
        }
      }
      b(n(d1, { commentId: U, initialText: D, initialSpans: L }));
    },
    [e, b]
  );

  const ee = R(
    (U) => {
      if (confirm("Вы уверены, что хотите удалить этот комментарий?")) {
        B(U);
      }
    },
    [B]
  );

  return n("div", {
    className: nt.comments,
    children: [
      n("div", {
        className: nt.sortWrapper,
        children: n("select", {
          value: s,
          onChange: (U) => i(U.target.value),
          className: nt.sortSelect,
          children: [
            n("option", { value: "new", children: "Новые" }),
            n("option", { value: "old", children: "Старые" }),
            n("option", { value: "popular", children: "Популярные" }),
          ],
        }),
      }),
      t
        ? n("div", { className: nt.loading, children: n(gt, {}) })
        : e.length === 0
        ? n("div", { className: nt.empty, children: "Нет комментариев" })
        : w
        ? n(Jv, {
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
            onLikeReply: ne,
            onReactionReply: te,
            onStartReply: X,
            onCancelReply: Y,
            onSubmitReply: ie,
            onVoiceSend: l,
            onLoadReplies: oe,
            onReport: F,
            onEdit: z,
            onDelete: ee,
          })
        : n("div", {
            className: nt.commentsList,
            children: [
              e.map((U) =>
                n(
                  "div",
                  {
                    className: nt.commentItem,
                    children: n(Vi, {
                      comment: U,
                      onLike: () => a(U.id, U.reactions.myReaction),
                      onReaction: c,
                      onLikeReply: ne,
                      onReactionReply: te,
                      replyingTo: v?.commentId === U.id ? v : null,
                      onStartReply: X,
                      onCancelReply: Y,
                      onSubmitReply: ie,
                      onVoiceSend: l,
                      onLoadReplies: oe,
                      onReport: F,
                      onEdit: z,
                      onDelete: ee,
                      isLoadingReplies: g === U.id,
                      flashingCommentId: y,
                      isWallOwner: d,
                    }),
                  },
                  U.id
                )
              ),
              r &&
                n("div", {
                  ref: E,
                  className: nt.loadMoreSentinel,
                  children: o && n(gt, { size: "sm" }),
                }),
            ],
          }),
      !m &&
        n("div", {
          className: nt.inputWrapper,
          children: n(Wi, {
            onSubmit: (U, D, L) => u(U, D, undefined, undefined, undefined, L),
            onVoiceSend: l,
          }),
        }),
      S &&
        n(Bi, { targetType: "comment", targetId: S, onClose: () => k(null) }),
    ],
  });
}
function f1(e) {
  return {
    id: e.id,
    username: e.username ?? "",
    displayName: e.displayName,
    avatar: e.avatar ?? "",
    isVerified: e.isVerified,
    pin: e.pin ?? null,
  };
}
function mo(e) {
  return e
    .filter(
      (t) =>
        t.type === "image" ||
        t.type === "video" ||
        (t.type === "media" && "media" in t)
    )
    .map((t) => (t.type === "media" && "media" in t ? t.media : t));
}
function m1(e) {
  return e.find((t) => t.type === "poll");
}
const p1 = 300;
const g1 = 500;

const v1 = Gs(
  ({
    post: t,
    variant: o = "feed",
    className: r,
    isOnOwnProfile: s = false,
    isPinned: i = false,
    isHighlighted: a = false,
    onEdit: c,
    onPin: u,
    onDelete: l,
  }) => {
    const h = o === "feed";
    const d = Tt();
    const { openModal: f, closeModal: m } = en();

    const C = we((H) => H.deletePost);

    const w = we((H) => H.updatePostReaction);

    const v = we((H) => H.updatePollVote);

    const p = we((H) => H.updatePollData);

    const y = we((H) => H.setCurrentPost);

    const T = we((H) => H.posts.find((se) => se.id === t.id));

    const g = Ne((H) => H.profile);

    const _ = At((H) =>
      h && g?.id !== t.author.id ? H.statuses[t.author.id] : undefined
    );

    const S = R(async () => {
      const H = t.author.id;
      At.getState().setStatus(H, true);
      try {
        await Ln.followUser(H);
      } catch {
        At.getState().setStatus(H, false);
      }
    }, [t.author.id]);

    const k = R(async () => {
      const H = t.author.id;
      At.getState().setStatus(H, false);
      try {
        await Ln.unfollowUser(H);
      } catch {
        At.getState().setStatus(H, true);
      }
    }, [t.author.id]);

    const E = R(() => {
      if (_ !== undefined) {
        if (_) {
          f(
            n(tp, {
              displayName: t.author.displayName,
              onConfirm: k,
              onClose: m,
            })
          );
        } else {
          S();
        }
      }
    }, [_, t.author.displayName, S, k, f, m]);

    const b = I(null);
    const P = I(null);
    const N = I(null);
    const [O, B] = x(p1);
    const [Q, ie] = x(0);
    const X = Q > O;
    W(
      () => () => {
        if (N.current) {
          cancelAnimationFrame(N.current);
          N.current = null;
        }
      },
      []
    );

    const Y = R(
      (H) => {
        if (H && h) {
          N.current && cancelAnimationFrame(N.current);

          N.current = requestAnimationFrame(() => {
            N.current = null;
            ie(H.scrollHeight);
          });
        }

        if (P) {
          P.current = H;
        }
      },
      [h]
    );

    const ne = R((H) => {
      H.stopPropagation();

      B((se) => se + g1);
    }, []);

    Rc(t.id, b);
    const te = g?.id === t.author.id;
    const oe = t.reactions.myReaction !== null;
    const F = t.reactions.total;

    const z = R(async () => {
      const H = t.reactions.myReaction !== null;
      const se = H ? -1 : 1;
      w(t.id, H || "love", se);
      try {
        if (H) {
          await Ge.unlikePost(t.id);
        } else {
          await Ge.likePost(t.id);
        }
      } catch (be) {
        w(t.id, H ? "love" : null, -se);
        console.error("Failed to toggle like:", be);
      }
    }, [t.id, t.reactions.myReaction, w]);

    const ee = I(null);
    const U = I(0);

    const D = R((H) => {
      ee.current = H.target;
    }, []);

    const L = R(() => {
      if (!oe) {
        z();
      }
    }, [oe, z]);

    const M = R(() => {
      y(T ?? t);
      const se = t.author.username ?? t.author.id;
      $(`/@${se}/post/${t.id}`);
    }, [t, T, y]);

    const q = R(
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
          if (Qe - U.current < 300) {
            U.current = 0;
            L();
            return;
          }
          U.current = Qe;
          return;
        }
        if (ee.current !== H_target) {
          ee.current = null;
          return;
        }
        ee.current = null;
        const be = window.getSelection();

        if (!be || be.toString().length <= 0) {
          M();
        }
      },
      [d, L, M]
    );

    const Z = R(
      (H) => {
        const se = t.author.username ?? t.author.id;
        const be = `${window.location.origin}/@${se}/post/${H}`;
        navigator.clipboard.writeText(be);
        We.success("Ссылка скопирована");
      },
      [t.author.username, t.author.id]
    );

    const J = R(
      (H) => {
        f(n(Bi, { targetType: "post", targetId: H, onClose: m }));
      },
      [f, m]
    );

    const ce = R(
      (H) => {
        f(
          n(Vm, {
            postId: t.id,
            initialText: t.text ?? "",
            initialSpans: t.spans ?? [],
          })
        );
      },
      [f, t.id, t.text, t.spans]
    );

    const me = R(
      async (H) => {
        if (confirm("Вы уверены, что хотите удалить этот пост?")) {
          try {
            await C(H);
            l?.(H);
          } catch (se) {
            console.error("Failed to delete post:", se);
          }
        }
      },
      [C, l]
    );

    const _e = R(() => {
      if (d) {
        f(n(Gm, { postId: t.id, onClose: m }));
      } else {
        const H = t.author.username ?? t.author.id;
        $(`/@${H}/post/${t.id}`);
      }
    }, [t.author.username, t.author.id, t.id, d, f, m]);

    const ue = R(() => {
      if (!te) {
        f(n(Am, { post: t, onClose: m }));
      }
    }, [f, m, t, te]);

    const Ze = Se(() => f1(t.author), [t.author]);

    const Ve = Se(() => mo(t.attachments), [t.attachments]);

    const Le = Se(() => m1(t.attachments), [t.attachments]);

    const st = R(
      async (H) => {
        const se = Le?.myVote ?? null;
        v(t.id, H, se);
        try {
          const be = await Ge.votePoll(t.id, [H]);
          if (be) {
            p(t.id, be);
            return be;
          }
        } catch (be) {
          console.error("[Poll] Failed to vote:", be);

          if (se) {
            v(t.id, se, H);
          }
        }
        return null;
      },
      [t.id, Le?.myVote, v, p]
    );

    const Ee = R(
      async (H) => {
        try {
          const se = await Ge.votePoll(t.id, H);
          if (se) {
            p(t.id, se);
            return se;
          }
        } catch (se) {
          console.error("[Poll] Failed to vote multiple:", se);
        }
        return null;
      },
      [t.id, p]
    );

    const ae = n("div", {
      className: `${Fe.postInner} ${h ? Fe.isFeed : ""} ${r || ""}`,
      children: [
        h &&
          n("a", {
            href: `/@${t.author.username ?? t.author.id}`,
            children: n(rt, {
              src: t.author.avatar ?? "",
              alt: t.author.displayName,
              size: "sm",
              followBadge: _,
              onFollowBadgeClick: E,
            }),
          }),
        n("div", {
          className: Fe.postContent,
          children: [
            n(e0, {
              author: Ze,
              createdAt: t.createdAt,
              editedAt: t.editedAt,
              postId: t.id,
              showAvatar: !h,
              isOnOwnProfile: s,
              isPinned: i,
              onReport: J,
              onEdit: c ?? ce,
              onDelete: me,
              onPin: u,
              onCopyLink: Z,
            }),
            n("div", {
              className: Fe.postBody,
              children: [
                t.text &&
                  n("div", {
                    className: Fe.textWrapper,
                    children: [
                      n("div", {
                        ref: Y,
                        className: `${Fe.text} ${X ? Fe.collapsed : ""}`,
                        style: h && X ? { maxHeight: `${O}px` } : undefined,
                        children: n(Ui, {
                          text: t.text,
                          spans: t.spans ?? [],
                        }),
                      }),
                      h &&
                        X &&
                        n("button", {
                          type: "button",
                          className: Fe.expandButton,
                          onClick: ne,
                          children: "Читать далее",
                        }),
                    ],
                  }),
                Ve.length > 0 && n(_r, { media: Ve, isFeed: h }),
                Le &&
                  n(Op, {
                    title: Le.question,
                    options: Le.options.map((H) => ({
                      id: H.id,
                      text: H.text,
                      votes: H.votes ?? 0,
                    })),
                    totalVotes: Le.totalVotes ?? 0,
                    voted:
                      (Le.myVotes ?? []).length > 0 ||
                      (Le.myVote !== undefined && Le.myVote !== null),
                    selectedOptionId: Le.myVote,
                    selectedOptionIds: Le.myVotes ?? [],
                    multipleChoice: Le.multipleChoice ?? false,
                    onVote: st,
                    onVoteMultiple: Ee,
                    disabled: Le.id.startsWith("temp-"),
                  }),
                t.originalPost && n(lg, { originalPost: t.originalPost }),
                n(j0, {
                  liked: oe,
                  reposted: false,
                  likesCount: F,
                  repostsCount: t.stats.reposts,
                  commentsCount: t.stats.comments,
                  viewsCount: t.stats.views,
                  dominantEmoji: t.dominantEmoji,
                  onLike: z,
                  onRepost: ue,
                  onComment: _e,
                  disableRepost: te,
                }),
              ],
            }),
          ],
        }),
      ],
    });

    return h
      ? n("article", {
          ref: b,
          className: `${Fe.post} ${a ? "flash-highlight" : ""}`,
          onMouseDown: D,
          onClick: q,
          children: ae,
        })
      : n("div", { ref: b, children: ae });
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

const w1 = "g6-1VZON";
const y1 = "lynW5Wa4";
const _1 = "T0fnHo-a";
const C1 = "rjatUzSP";
const N1 = "QJXel6jH";
const b1 = "M0L3TUQK";
const T1 = "uaNtVNYe";
const k1 = "h2cCDI2R";
const E1 = "I-2aZIQb";
const R1 = "OiCpxOxo";
const S1 = "_68znS2mA";

const ct = {
  container: w1,
  clearAllButton: y1,
  toastList: _1,
  toast: C1,
  toastLeft: N1,
  toastData: b1,
  title: T1,
  message: k1,
  dragging: E1,
  closeButton: R1,
  belowTabs: S1,
};

const I1 = "InmPF5d0";
const x1 = "-yE9w2BE";
const P1 = "-gCyC6KA";
const A1 = "YQDdKE40";
const Qn = { badge: I1, red: x1, green: P1, blue: A1 };
function L1({ type: e }) {
  const t =
    e === "like"
      ? Qn.red
      : ["wall_post", "reply", "repost"].includes(e)
      ? Qn.green
      : Qn.blue;
  return n("div", {
    className: `${Qn.badge} ${t}`,
    children: [
      e === "follow" && n(pr, { size: 12 }),
      ["wall_post", "reply"].includes(e) && n(fr, { size: 12, filled: true }),
      e === "like" && n(yo, { size: 12, filled: true }),
      e === "repost" && n(uo, { size: 12 }),
    ],
  });
}
const M1 = hn(null);
function $1({ children: e }) {
  const [t, o] = x([]);

  const r = R((c) => {
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

  const s = R((c) => {
    o((u) => u.filter((l) => l.id !== c));
  }, []);

  const i = R(() => {
    o([]);
  }, []);

  const a = pc();

  W(() => {
    if (a) {
      const c = B1(a.type);

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

      pn.setState({ lastSseToast: null });
    }
  }, [a, r]);

  return n(M1.Provider, {
    value: { toasts: t, addToast: r, removeToast: s, clearAll: i },
    children: [e, n(O1, { toasts: t, onRemove: s, onClearAll: i })],
  });
}
function O1({ toasts: e, onRemove: t, onClearAll: o }) {
  const [r, s] = x(false);

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
      o();
      s(false);
    }, 300);
  };

  return n("div", {
    className: `${ct.container} ${i ? ct.belowTabs : ""}`,
    children: [
      n("div", {
        className: `${ct.toastList} ${r ? ct.clearing : ""}`,
        children: a.map((u, l) =>
          n(
            F1,
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
          className: ct.clearAllButton,
          onClick: c,
          children: "Скрыть все",
        }),
    ],
  });
}
const D1 = 80;
function B1(e) {
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
function U1(e) {
  const {
    apiType: t,
    entityId: o,
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

  if (t && o && s) {
    if (a.includes(t)) {
      return `/@${s}/post/${o}`;
    }
    if (c.includes(t)) {
      return r ? `/@${s}/post/${r}?comment=${o}` : `/@${s}/post/${o}`;
    }
  }
  return t && ["follow", "follow_request", "follow_accepted"].includes(t) && s
    ? `/@${s}`
    : i || "/notifications";
}
function F1({
  toast: e,
  onRemove: t,
  clearingDelay: o = 0,
  isClearing: r = false,
}) {
  const s = I(null);
  const [i, a] = x(0);
  const [c, u] = x(false);
  const [l, h] = x(false);
  const d = I(0);
  const f = I(false);

  const m = (_) => {
    d.current = _.clientX;
    f.current = false;
    u(true);
  };

  const C = R(
    (_) => {
      if (!c) {
        return;
      }
      const S = _.clientX - d.current;

      if (Math.abs(S) > 5) {
        f.current = true;
      }

      a(S);
    },
    [c]
  );

  const w = R(() => {
    if (c) {
      u(false);

      if (Math.abs(i) > D1) {
        h(true);
        a(i > 0 ? 400 : -400);

        setTimeout(() => t(e.id), 200);
      } else {
        a(0);

        if (!f.current) {
          const _ = U1(e);

          if (_) {
            $(_);
            t(e.id);
          }
        }
      }
    }
  }, [c, i, t, e]);

  W(() => {
    if (c) {
      document.addEventListener("mousemove", C);
      document.addEventListener("mouseup", w);

      return () => {
        document.removeEventListener("mousemove", C);
        document.removeEventListener("mouseup", w);
      };
    }
  }, [c, C, w]);

  const v = (_) => {
    d.current = _.touches[0].clientX;
    u(true);
  };

  const p = (_) => {
    if (!c) {
      return;
    }
    const S = _.touches[0].clientX - d.current;
    a(S);
  };

  const y = () => {
    w();
  };

  const T = l || r ? 0 : Math.max(0, 1 - Math.abs(i) / 200);
  const g = r ? 400 : i;
  return n("div", {
    ref: s,
    className: `${ct.toast} ${c ? ct.dragging : ""}`,
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
        className: ct.toastLeft,
        children: [
          n(rt, {
            src: e.actorAvatar || "",
            badge: n(L1, { type: e.notificationType }),
          }),
          n("div", {
            className: ct.toastData,
            children: [
              e.actorName &&
                n("div", {
                  className: ct.title,
                  children: n(Hn, { name: e.actorName }),
                }),
              n("p", { className: ct.message, children: e.message }),
            ],
          }),
        ],
      }),
      n("button", {
        className: ct.closeButton,
        onClick: (_) => {
          _.stopPropagation();
          t(e.id);
        },
        onMouseDown: (_) => _.stopPropagation(),
        onTouchStart: (_) => _.stopPropagation(),
        children: n(kt, { size: 16 }),
      }),
    ],
  });
}
const H1 = "Ud6qvRRd";
const W1 = "kzTK4YgB";
const V1 = "a7Cxtsok";
const j1 = "D1RDF-pF";
const z1 = "wPhOb3DB";
const X1 = "rrrryD13";
const Y1 = "pO3FId5P";
const Z1 = "Y-gzFyZu";
const q1 = "Bnd7yPWS";
const G1 = "vVObi6FX";
const K1 = "erZ4kzKX";
const J1 = "nyzroaD5";

const Kt = {
  container: H1,
  toast: W1,
  slideUp: V1,
  leaving: j1,
  fadeOut: z1,
  info: X1,
  icon: Y1,
  message: Z1,
  closeButton: q1,
  success: G1,
  warning: K1,
  error: J1,
};

const Q1 = { success: Oc, error: Pc, warning: Bc, info: vi };
function ew({ id: e, type: t, message: o, onRemove: r }) {
  const [s, i] = x(false);
  const Q1_t = Q1[t];

  const c = R(() => {
    i(true);

    setTimeout(() => {
      r(e);
    }, 300);
  }, [e, r]);

  return n("div", {
    className: `${Kt.toast} ${Kt[t]} ${s ? Kt.leaving : ""}`,
    children: [
      n("span", { className: Kt.icon, children: n(Q1_t, { size: 20 }) }),
      n("span", { className: Kt.message, children: o }),
      n("button", {
        className: Kt.closeButton,
        onClick: c,
        children: n(kt, { size: 14 }),
      }),
    ],
  });
}
function tw() {
  const e = ln((o) => o.toasts);

  const t = ln((o) => o.removeToast);

  return (
    e.length === 0 ||
    n("div", {
      className: Kt.container,
      children: e.map((o) =>
        n(ew, { id: o.id, type: o.type, message: o.message, onRemove: t }, o.id)
      ),
    })
  );
}
const nw = "bDtnMOtP";
const ow = "NCty1Mw6";
const rw = "DPhGAlZS";
const sw = "Ea-iW9dx";
const eo = { tabs: nw, indicator: ow, button: rw, active: sw };
function iw({
  tabs: e,
  defaultTab: t = 0,
  activeIndex: o,
  onChange: r,
  className: s = "",
}) {
  const [i, a] = x(t);
  const c = o !== undefined ? o : i;
  const [u, l] = x({});
  const h = I([]);
  const d = I(null);

  const f = R(() => {
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

  const C = (v) => (typeof v == "string" ? v : v.label);

  const w = (v, p) => (typeof v == "string" ? `${p}` : v.id);

  return n("div", {
    ref: d,
    className: `${eo.tabs} ${s}`,
    children: [
      n("div", { className: eo.indicator, style: u }),
      e.map((v, p) =>
        n(
          "button",
          {
            ref: (y) => {
              h.current[p] = y;
            },
            onClick: () => m(p),
            className: `${eo.button} ${c === p ? eo.active : ""}`,
            children: C(v),
          },
          w(v, p)
        )
      ),
    ],
  });
}
const aw = "NVOOxjgX";
const cw = "Y1pJGa1C";
const lw = "Y-AJ8Bcl";
const uw = "UoWopgfe";
const dw = "_8Vne0lg2";
const hw = "_28Ha-lQH";
const fw = "vfJEvaRM";
const mw = "KTWTUpWU";
const pw = "iPq57X43";
const gw = "LgYwhGUE";

const Dt = {
  inputWrapper: aw,
  label: cw,
  hint: lw,
  input: uw,
  error: dw,
  small: hw,
  medium: fw,
  large: mw,
  default: "nPKZPuOS",
  outline: pw,
  errorText: gw,
};

function _s({
  value: e,
  onChange: t,
  label: o,
  hint: r,
  error: s,
  size: i = "medium",
  variant: a = "default",
  className: c,
  ...u
}) {
  const l = (h) => {
    t?.(h.currentTarget.value);
  };
  return n("div", {
    className: Dt.inputWrapper,
    children: [
      o &&
        n("label", {
          className: Dt.label,
          children: [o, r && n("span", { className: Dt.hint, children: r })],
        }),
      n("input", {
        className: `${Dt.input} ${Dt[i]} ${Dt[a]} ${s ? Dt.error : ""} ${
          c || ""
        }`,
        value: e,
        onInput: l,
        ...u,
      }),
      s && n("span", { className: Dt.errorText, children: s }),
    ],
  });
}
const vw = "yKLEGJjv";
const ww = "btqpFnmb";
const yw = "Mcw5oPSa";
const _w = "I-BCvdb9";
const to = { content: vw, title: ww, subtitle: yw, actions: _w };
function Cw({ expiresAt: e, onConfirm: t, onClose: o }) {
  const [r, s] = x(false);

  const i = new Date(e).toLocaleDateString("ru-RU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const a = async () => {
    if (!r) {
      s(true);
      try {
        await t();
        o();
      } catch {
        s(false);
      }
    }
  };

  return n(Ke, {
    onClose: o,
    showHeader: false,
    children: n("div", {
      className: to.content,
      children: [
        n("h2", { className: to.title, children: "Отключить автопродление?" }),
        n("p", {
          className: to.subtitle,
          children: [
            "Подписка будет действовать до ",
            i,
            ". После этой даты она просто не продлится автоматически. Вы сможете включить автопродление обратно в любой момент.",
          ],
        }),
        n("div", {
          className: to.actions,
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
const Nw = "HRvdFDjB";
const bw = "oUBbcbTN";
const Tw = "_2kNXD7Wp";
const kw = "Rw-qHiyh";
const Ew = "Mf3brSiH";
const Cn = {
  content: Nw,
  title: bw,
  subtitle: Tw,
  disclaimer: kw,
  actions: Ew,
};
function Rw({ onConfirm: e, onClose: t }) {
  const [o, r] = x(false);

  const s = async () => {
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
      className: Cn.content,
      children: [
        n("h2", { className: Cn.title, children: "Включить автопродление?" }),
        n("p", {
          className: Cn.subtitle,
          children:
            "Подписка будет автоматически продлеваться каждый месяц. Средства будут списываться с привязанной карты.",
        }),
        n("p", {
          className: Cn.disclaimer,
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
          className: Cn.actions,
          children: [
            n(Oe, {
              variant: "secondary",
              onClick: (i) => {
                i.stopPropagation();
                t();
              },
              children: "Отмена",
            }),
            n(Oe, {
              variant: "primary",
              onClick: (i) => {
                i.stopPropagation();
                s();
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
const Sw = "auLTZ1kb";
const Iw = "ew-0JcAX";
const xw = "PUBzv9z1";
const Pw = "YTQ-O-Jq";
const no = { content: Sw, title: Iw, subtitle: xw, actions: Pw };
function Aw({ onClose: e }) {
  const t = async () => {
    await Ne.getState().deleteAccount();
    e();
  };
  return n(Ke, {
    onClose: e,
    showHeader: false,
    children: n("div", {
      className: no.content,
      children: [
        n("h2", { className: no.title, children: "Удалить аккаунт?" }),
        n("p", {
          className: no.subtitle,
          children:
            "Вы действительно хотите удалить аккаунт? У вас будет 30 дней на восстановление аккаунта, если вы передумаете.",
        }),
        n("div", {
          className: no.actions,
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
const Mw = "mieIfajF";
const $w = "BbGOi3lO";
const Ow = "MbkPeeiM";
const Dw = "qZD40Z6k";
const Bw = "hQr2usrz";
const Uw = "pf7q9vs0";
const Fw = "V5xmKxYo";
const Hw = "rvWQR6Xa";
const Ww = "_7yzPm4JT";
const Vw = "MMIk7qf0";
const jw = "KPGEssbG";
const zw = "iYFBq1pq";
const Xw = "Q7pQ-w1E";
const Yw = "MKmLd4RT";
const Zw = "t65j2CUn";
const qw = "_2qKSMSK0";
const Gw = "Vd3Omle7";
const Kw = "_9lJIfmJW";
const Jw = "h9xdn3cX";
const Qw = "iYLHTDhv";
const e2 = "aNx8mglN";
const t2 = "yZwuPX7N";
const n2 = "doLL9-3u";
const o2 = "rS40gGQ1";
const r2 = "rO7FJKjS";
const s2 = "sKTJO-8u";
const i2 = "O34mZMP-";
const a2 = "qFEgm3nA";
const c2 = "_8QZBocZJ";
const l2 = "CS8kW48F";
const u2 = "Xbe8XAiR";
const d2 = "PoMEkcnH";
const h2 = "i-crt3Uo";
const f2 = "_9Si0cK4K";
const m2 = "FkHpXk4J";
const p2 = "_9Mmd-Oyx";
const g2 = "_2T7P171x";
const v2 = "SsHbiTj4";
const w2 = "_4RLslTa2";
const y2 = "MErHFAft";
const _2 = "zCq-iLoM";
const C2 = "L3ey0Xp8";
const N2 = "Dis44184";
const b2 = "_0JZ-djug";
const T2 = "_3wpSaahs";
const k2 = "J5--smNi";

const A = {
  modalContainer: Lw,
  settingsModal: Mw,
  sidebar: $w,
  sidebarTitle: Ow,
  navItem: Dw,
  active: Bw,
  contentWrapper: Uw,
  content: Fw,
  actionBar: Hw,
  confirmOverlay: Ww,
  confirmDialog: Vw,
  confirmText: jw,
  confirmActions: zw,
  contentTitle: Xw,
  subscriptionCancel: Yw,
  subscriptionRenew: Zw,
  section: qw,
  sectionTitle: Gw,
  settingItem: Kw,
  clickable: Jw,
  column: Qw,
  settingInfo: e2,
  settingIcon: t2,
  blue: n2,
  red: o2,
  purple: r2,
  settingText: s2,
  settingTitle: i2,
  settingDescription: a2,
  settingControl: c2,
  avatarDisplay: l2,
  pinGrid: u2,
  pinItem: d2,
  pinActive: h2,
  pinImage: f2,
  pinName: m2,
  bioTextarea: p2,
  fieldError: g2,
  saveError: v2,
  emptyBlocklist: w2,
  blockedUsersList: y2,
  blockedUserItem: _2,
  blockedUserInfo: C2,
  blockedUserName: N2,
  blockedUserUsername: b2,
  deleteAccountButton: T2,
  logoutButton: k2,
};

const i_ = Bn(({ onDirtyChange: t, onSavingChange: o, onClose: r }, s) => {
  const i = Ne((L) => L.profile);

  const a = Ne((L) => L.logout);

  const { openModal: c, closeModal: u } = en();
  const l = Tt();
  const [h] = Un();
  const d = h?.url || window.location.pathname;
  const [f, m] = x(false);
  const [C, w] = x(false);
  const [v, p] = x(true);
  const [y, T] = x(false);
  const [g, _] = x(false);
  const [S, k] = x({});
  const [E, b] = x(null);
  const [P, N] = x(null);
  const [O, B] = x({ name: "", username: "", bio: "", avatar: "😀" });
  const [Q, ie] = x([]);
  const [X, Y] = x(null);
  const ne = I(null);
  const [te, oe] = x(true);

  W(() => {
    if (i) {
      const L = {
        name: i.displayName,
        username: i.username || "",
        bio: i.bio || "",
        avatar: i.avatar,
      };
      B(L);
      N(L);
      p(false);
      const M = i.pin ?? null;
      Y(M);
      ne.current = M;
    }
  }, [i]);

  W(() => {
    Nt.getMyPins()
      .then((L) => {
        ie(L.pins);

        if (L.activePin && !ne.current) {
          const M = L.pins.find((q) => q.slug === L.activePin);

          if (M) {
            Y(M);
            ne.current = M;
          }
        }
      })
      .catch(() => ie([]))
      .finally(() => oe(false));
  }, []);

  W(() => {
    t(g);
  }, [g]);

  W(() => {
    o(y);
  }, [y]);

  const F = R(
    (L, M) => {
      if (!P) {
        return false;
      }

      const q = Object.keys(L).some((J) => L[J] !== P[J]);

      const Z = (M?.slug ?? null) !== (ne.current?.slug ?? null);
      return q || Z;
    },
    [P]
  );

  const z = (L, M) => {
    if (S[L]) {
      k((q) => {
        const Z = { ...q };
        delete Z[L];
        return Z;
      });
    }

    b(null);

    B((q) => {
      const Z = { ...q, [L]: M };
      _(F(Z, X));
      return Z;
    });
  };

  const ee = R(
    (L) => {
      const M = X?.slug === L.slug || L;
      Y(M);
      _(F(O, M));
    },
    [X, O, F]
  );

  const U = async () => {
    if (!g || y) {
      return;
    }
    T(true);
    k({});
    b(null);
    const L = P?.username;
    const O_username = O.username;
    try {
      if (P && Object.keys(O).some((ce) => O[ce] !== P[ce])) {
        await Nt.updateProfile({
          displayName: O.name,
          username: O.username || undefined,
          bio: O.bio || null,
        });
      }

      if ((X?.slug ?? null) !== (ne.current?.slug ?? null)) {
        if (X) {
          await Nt.setActivePin(X.slug);
        } else {
          await Nt.removeActivePin();
        }
      }

      N({ ...O });
      ne.current = X;
      _(false);
      const J = Ne.getState().profile;

      if (J) {
        Ne.getState().setProfile({
          ...J,
          displayName: O.name,
          username: O.username,
          bio: O.bio || null,
          pin: X,
        });
      }

      if (
        O_username &&
        O_username !== L &&
        (d === `/@${L}` || d === `/@${i?.id}`)
      ) {
        $(`/@${O_username}`);
      }
    } catch (q) {
      console.error("Failed to save profile:", q);

      if (Ue(q)) {
        if (q.errors) {
          const Z = {};
          for (const [J, ce] of Object.entries(q.errors)) {
            Z[J] = ce[0] || "Ошибка валидации";
          }
          k(Z);
        } else {
          b(q.message || "Не удалось сохранить изменения");
        }
      } else {
        b("Не удалось сохранить изменения");
      }
    } finally {
      T(false);
    }
  };

  const D = () => {
    if (P) {
      B({ ...P });
      Y(ne.current);
      _(false);
    }
  };

  mn(s, () => ({
    save: U,
    discard: D,
  }));

  return v
    ? n(Re, {
        children: [
          n("h2", { className: A.contentTitle, children: "Аккаунт" }),
          n(gt, {}),
        ],
      })
    : n(Re, {
        children: [
          n("h2", { className: A.contentTitle, children: "Аккаунт" }),
          n("div", {
            className: A.section,
            children: [
              i?.subscription?.isActive
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
                                i.subscription.expiresAt
                                  ? (() => {
                                      const L = new Date(
                                        i.subscription.expiresAt
                                      );

                                      const M = new Date();

                                      const q = Math.max(
                                        0,
                                        Math.ceil(
                                          (L.getTime() - M.getTime()) /
                                            (1000 /* 1e3 */ * 60 * 60 * 24)
                                        )
                                      );

                                      return `до ${L.toLocaleDateString(
                                        "ru-RU",
                                        {
                                          day: "numeric",
                                          month: "long",
                                          year: "numeric",
                                        }
                                      )} (${q} ${
                                        q === 1
                                          ? "день"
                                          : q < 5
                                          ? "дня"
                                          : "дней"
                                      })`;
                                    })()
                                  : "Активна",
                                i.subscription.autoRenewal === false &&
                                  " • автопродление отключено",
                              ],
                            }),
                          ],
                        }),
                      }),
                      i.subscription.autoRenewal
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
                          }),
                    ],
                  })
                : null,
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
                    children: O.avatar,
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
                        value: O.name,
                        onChange: (L) => z("name", L),
                      }),
                      S.displayName &&
                        n("span", {
                          className: A.fieldError,
                          children: S.displayName,
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
                        value: O.username,
                        onChange: (L) => z("username", L),
                      }),
                      S.username &&
                        n("span", {
                          className: A.fieldError,
                          children: S.username,
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
                    value: O.bio,
                    onChange: (L) => z("bio", L.target.value),
                    placeholder: "Напиши что-нибудь о себе...",
                    rows: 3,
                  }),
                  S.bio &&
                    n("span", { className: A.fieldError, children: S.bio }),
                ],
              }),
              !te &&
                Q.length > 0 &&
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
                      children: Q.map((L) =>
                        n(
                          "button",
                          {
                            className: `${A.pinItem} ${
                              X?.slug === L.slug ? A.pinActive : ""
                            }`,
                            onClick: () => ee(L),
                            disabled: y,
                            title: L.description || L.name,
                            type: "button",
                            children: [
                              n("img", {
                                src: `/assets/pins/${L.slug}.png`,
                                alt: L.name,
                                className: A.pinImage,
                              }),
                              n("span", {
                                className: A.pinName,
                                children: L.name,
                              }),
                            ],
                          },
                          L.slug
                        )
                      ),
                    }),
                  ],
                }),
              E && n("div", { className: A.saveError, children: E }),
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
              onClick: () => c(n(Aw, { onClose: u })),
              children: "Удалить аккаунт",
            }),
          }),
          f &&
            i?.subscription?.expiresAt &&
            n(Cw, {
              expiresAt: i.subscription.expiresAt,
              onConfirm: async () => {
                const L = await Jo.setAutoRenewal(false);
                Ne.getState().setProfile({
                  ...i,
                  subscription: {
                    ...i.subscription,
                    autoRenewal: L.autoRenewal,
                  },
                });
              },
              onClose: () => m(false),
            }),
          C &&
            n(Rw, {
              onConfirm: async () => {
                const L = await Jo.setAutoRenewal(true);
                Ne.getState().setProfile({
                  ...i,
                  subscription: {
                    ...i.subscription,
                    autoRenewal: L.autoRenewal,
                  },
                });
              },
              onClose: () => w(false),
            }),
        ],
      });
});

const E2 = "VTYYWVhN";
const R2 = "xJNAnk3E";
const S2 = "Jb9vmr45";
const I2 = "otok2a-L";
const x2 = "gRf2HMVj";
const P2 = "zNll7clI";
const A2 = "ayLHJkUj";

const Yt = {
  selectWrapper: E2,
  select: R2,
  open: S2,
  selectedValue: I2,
  dropdown: x2,
  option: P2,
  selected: A2,
};

function Cs({ value: e, options: t, onChange: o, disabled: r }) {
  const [s, i] = x(false);
  const a = I(null);

  const c = t.find((l) => l.value === e);

  W(() => {
    const l = (h) => {
      if (a.current && !a.current.contains(h.target)) {
        i(false);
      }
    };

    if (s) {
      document.addEventListener("mousedown", l);
    }

    return () => {
      document.removeEventListener("mousedown", l);
    };
  }, [s]);
  const u = (l) => {
    o(l);
    i(false);
  };
  return n("div", {
    ref: a,
    className: Yt.selectWrapper,
    children: [
      n("button", {
        type: "button",
        className: `${Yt.select} ${s ? Yt.open : ""}`,
        onClick: (l) => {
          l.stopPropagation();

          if (!r) {
            i(!s);
          }
        },
        disabled: r,
        children: [
          n("span", { className: Yt.selectedValue, children: c?.label }),
          n(Uc, { size: 16 }),
        ],
      }),
      s &&
        n("div", {
          className: Yt.dropdown,
          children: t.map((l) =>
            n(
              "button",
              {
                type: "button",
                className: `${Yt.option} ${l.value === e ? Yt.selected : ""}`,
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

const a_ = [
  { value: "light", label: "Светлая" },
  { value: "dark", label: "Тёмная" },
  { value: "system", label: "Системная" },
];

const L2 = "yIp1zbgr";
const M2 = "SGtMRtjC";
const bs = { toggle: L2, active: M2 };
function Bt({ checked: e, onChange: t, disabled: o }) {
  const r = (s) => {
    s.stopPropagation();

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

const c_ = Bn(({ onDirtyChange: t, onSavingChange: o }, r) => {
  const { settings: s, fetchSettings: i, updateSettings: a } = pn();

  const [c, u] = x({
    webEnabled: true,
    soundEnabled: true,
    follows: true,
    reactions: true,
    replies: true,
    mentions: true,
    wallPosts: true,
  });

  const [l, h] = x(null);
  const [d, f] = x(false);
  const [m, C] = x(false);
  const [w, v] = x(false);

  W(() => {
    if (!w && !s) {
      i();
    }
  }, [w]);

  W(() => {
    if (s && !w) {
      const g = {
        webEnabled: s.webEnabled,
        soundEnabled: s.soundEnabled,
        follows: s.preferences.follows,
        reactions: s.preferences.reactions,
        replies: s.preferences.replies,
        mentions: s.preferences.mentions,
        wallPosts: s.preferences.wallPosts,
      };
      u(g);
      h(g);
      f(false);
      v(true);
    }
  }, [s, w]);

  W(() => {
    t(d);
  }, [d]);

  W(() => {
    o(m);
  }, [m]);

  const p = (g, _) => {
    const S = { ...c, [g]: _ };
    u(S);

    if (l) {
      const k = Object.keys(S).some((E) => S[E] !== l[E]);
      f(k);
    }
  };

  const y = async () => {
    if (!(!d || m)) {
      C(true);
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
        We.success("Настройки уведомлений сохранены");
      } catch (g) {
        console.error("Failed to save notification settings:", g);
        We.error("Не удалось сохранить настройки");
      } finally {
        C(false);
      }
    }
  };

  const T = () => {
    if (l) {
      u({ ...l });
      f(false);
    }
  };

  mn(r, () => ({
    save: y,
    discard: T,
  }));

  return n(Re, {
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
              n(Bt, {
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
                    children: n(Yc, { size: 20 }),
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
              n(Bt, {
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
              n(Bt, {
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
              n(Bt, {
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
                    children: n(zc, { size: 20 }),
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
              n(Bt, {
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
              n(Bt, {
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
                    children: n(Xc, { size: 20 }),
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
              n(Bt, {
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

const l_ = Bn(({ onDirtyChange: t, onSavingChange: o }, r) => {
  const [s, i] = x({
    isPrivate: false,
    whoCanPostOnWall: "everyone",
    whoCanSeeMyPostReactions: "everyone",
    showLastSeen: true,
  });

  const [a, c] = x(null);
  const [u, l] = x(false);
  const [h, d] = x(false);
  const [f, m] = x(false);
  const [C, w] = x(false);
  const [v, p] = x([]);
  const [y, T] = x(null);
  const [g, _] = x(true);
  const [S, k] = x(false);
  const [E, b] = x(false);

  W(() => {
    P();

    if (!E) {
      N();
    }
  }, []);

  W(() => {
    t(u);
  }, [u]);

  W(() => {
    o(h);
  }, [h]);

  const P = async () => {
    if (!C) {
      m(true);
    }

    try {
      const Y = await Nt.getPrivacySettings();

      const ne = {
        isPrivate: Y.isPrivate ?? false,
        whoCanPostOnWall: Y.whoCanPostOnWall ?? "everyone",
        whoCanSeeMyPostReactions: Y.whoCanSeeMyPostReactions ?? "everyone",
        showLastSeen: Y.showLastSeen ?? true,
      };

      i(ne);
      c(ne);
      l(false);
      w(true);
    } catch (Y) {
      console.error("Failed to load privacy settings:", Y);
    } finally {
      m(false);
    }
  };

  const N = async (Y) => {
    if (!S) {
      k(true);
      try {
        const ne = await Ln.getBlockedUsers({ cursor: Y, limit: 20 });

        p(Y ? (te) => [...te, ...ne.users] : ne.users);

        T(ne.nextCursor);
        _(ne.hasMore);
        b(true);
      } catch (ne) {
        console.error("Failed to load blocked users:", ne);
      } finally {
        k(false);
      }
    }
  };

  const O = async (Y) => {
    try {
      await Ln.unblockUser(Y);

      p((ne) => ne.filter((te) => te.id !== Y));

      We.success("Пользователь разблокирован");
    } catch (ne) {
      console.error("Failed to unblock user:", ne);
      We.error("Не удалось разблокировать пользователя");
    }
  };

  const B = () => {
    if (g && y) {
      N(y);
    }
  };

  const Q = (Y, ne) => {
    const te = { ...s, [Y]: ne };
    i(te);

    if (a) {
      const oe = Object.keys(te).some((F) => te[F] !== a[F]);
      l(oe);
    }
  };

  const ie = async () => {
    if (!(!u || h)) {
      d(true);
      try {
        await Nt.updatePrivacySettings({
          whoCanPostOnWall: s.whoCanPostOnWall,
          whoCanSeeMyPostReactions: s.whoCanSeeMyPostReactions,
          showLastSeen: s.showLastSeen,
        });

        c({ ...s });
        l(false);
        We.success("Настройки приватности сохранены");
      } catch (Y) {
        console.error("Failed to save privacy settings:", Y);
        We.error("Не удалось сохранить настройки");
      } finally {
        d(false);
      }
    }
  };

  const X = () => {
    if (a) {
      i({ ...a });
      l(false);
    }
  };

  mn(r, () => ({
    save: ie,
    discard: X,
  }));

  return n(Re, {
    children: [
      n("h2", { className: A.contentTitle, children: "Приватность" }),
      C &&
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
                  value: s.whoCanPostOnWall,
                  options: Ns,
                  onChange: (Y) => Q("whoCanPostOnWall", Y),
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
                  value: s.whoCanSeeMyPostReactions,
                  options: Ns,
                  onChange: (Y) => Q("whoCanSeeMyPostReactions", Y),
                }),
              ],
            }),
            n("div", {
              className: `${A.settingItem} ${A.clickable}`,
              onClick: () => Q("showLastSeen", !s.showLastSeen),
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
                n(Bt, {
                  checked: s.showLastSeen,
                  onChange: (Y) => Q("showLastSeen", Y),
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
          S && !E
            ? n(gt, {})
            : E
            ? n(Re, {
                children:
                  v.length === 0
                    ? n("div", {
                        className: A.emptyBlocklist,
                        children: "Чёрный список пуст",
                      })
                    : n("div", {
                        className: A.blockedUsersList,
                        children: [
                          v.map((Y) =>
                            n(
                              "div",
                              {
                                className: A.blockedUserItem,
                                children: [
                                  n(rt, {
                                    src: Y.avatar,
                                    alt: Y.displayName,
                                    size: "sm",
                                  }),
                                  n("div", {
                                    className: A.blockedUserInfo,
                                    children: [
                                      n("span", {
                                        className: A.blockedUserName,
                                        children: Y.displayName,
                                      }),
                                      Y.username &&
                                        n("span", {
                                          className: A.blockedUserUsername,
                                          children: ["@", Y.username],
                                        }),
                                    ],
                                  }),
                                  n(Oe, {
                                    size: "sm",
                                    variant: "secondary",
                                    onClick: () => O(Y.id),
                                    children: "Разблокировать",
                                  }),
                                ],
                              },
                              Y.id
                            )
                          ),
                          g &&
                            n(Oe, {
                              variant: "secondary",
                              onClick: B,
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

function $2(e) {
  const t = R(() => {
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

  const [o, r] = x(t);

  W(() => {
    const s = () => r(t());
    window.addEventListener("resize", s);

    return () => window.removeEventListener("resize", s);
  }, [t]);

  return o;
}
function O2() {
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
function D2({ onClose: e, onPrev: t, onNext: o }) {
  W(() => {
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
          o();
          break;
        }
      }
    };
    window.addEventListener("keydown", r, true);

    return () => window.removeEventListener("keydown", r, true);
  }, [e, t, o]);
}
function B2({ initialIndex: e, total: t }) {
  const [o, r] = x(e);
  const [s, i] = x(false);
  const a = I(null);

  const c = R(() => {
    if (a.current) {
      clearTimeout(a.current);
      a.current = null;
      i(false);
    }
  }, []);

  const u = R(
    (d) => {
      if (d !== o && d >= 0 && d >= 0 && d < t) {
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
    [o, t, c]
  );

  const l = R(() => {
    if (o > 0) {
      u(o - 1);
    }
  }, [o, u]);

  const h = R(() => {
    if (o < t - 1) {
      u(o + 1);
    }
  }, [o, t, u]);

  return {
    currentIndex: o,
    setCurrentIndex: r,
    isAnimating: s,
    setIsAnimating: i,
    cancelAnimation: c,
    goToIndex: u,
    goToPrev: l,
    goToNext: h,
  };
}
const Bo = 150;
const U2 = 0.3;
function Ts(e, t) {
  const o = e.clientX - t.clientX;
  const r = e.clientY - t.clientY;
  return Math.sqrt(o * o + r * r);
}
function F2({
  currentIndex: e,
  imagesCount: t,
  imageSizes: o,
  isMobile: r,
  isAnimating: s,
  setIsAnimating: i,
  cancelAnimation: a,
  onIndexChange: c,
  onClose: u,
}) {
  const [l, h] = x(0);
  const [d, f] = x(0);
  const [m, C] = x(false);
  const [w, v] = x(1);
  const [p, y] = x(null);
  const [T, g] = x(1);
  const [_, S] = x(0);
  const [k, E] = x(0);
  const [b, P] = x(false);
  const N = I(1);
  const O = I({ x: 0, y: 0 });
  const B = I(false);
  const Q = I(false);
  const ie = I(0);
  const X = I(0);
  const Y = I(0);
  const ne = I(1);
  const te = I({ x: 0, y: 0 });
  const oe = I({ x: 0, y: 0 });
  const F = I({ x: 0, y: 0 });
  const z = I(null);
  const ee = I(false);
  const U = I(null);
  const D = I(null);
  const L = I(false);

  const M = R((ae) => {
    N.current = ae;
    g(ae);
  }, []);

  const q = R((ae, H) => {
    O.current = { x: ae, y: H };
    S(ae);
    E(H);
  }, []);

  const Z = R(() => {
    P(true);
    M(1);
    q(0, 0);

    setTimeout(() => P(false), 300);
  }, [M, q]);

  W(() => {
    N.current = 1;
    O.current = { x: 0, y: 0 };
    g(1);
    S(0);
    E(0);
    P(false);
  }, [e]);

  W(
    () => () => {
      if (U.current) {
        clearTimeout(U.current);
        U.current = null;
      }
    },
    []
  );

  const J = R(
    (ae) => {
      let H = ae;

      if ((e === 0 && H > 0) || (e === t - 1 && H < 0)) {
        H *= U2;
      }

      return H;
    },
    [e, t]
  );

  const ce = R(
    () =>
      Math.abs(d) > Bo
        ? (u(r), true)
        : (i(true),
          f(0),
          v(1),
          (U.current = window.setTimeout(() => {
            U.current = null;
            i(false);
          }, 300)),
          false),
    [d, r, u, i]
  );

  const me = R(
    (ae) => {
      if (!r && t > 1) {
        if (t > 1) {
          a();
          U.current && (clearTimeout(U.current), (U.current = null));
          D.current !== null && (c(D.current), (D.current = null));
          i(false);
          y(null);
          h(0);
          C(true);
          ee.current = false;
          F.current = { x: ae.clientX, y: ae.clientY };
          z.current = null;
          ae.preventDefault();
        }
      }
    },
    [r, t, a, c, i]
  );

  const _e = R(
    (ae) => {
      if (!m || r) {
        return;
      }
      const H = ae.clientX - F.current.x;
      const se = ae.clientY - F.current.y;

      if (!z.current && (Math.abs(H) > 10 || Math.abs(se) > 10)) {
        z.current = Math.abs(H) > Math.abs(se) ? "x" : "y";
        ee.current = true;
      }

      if (z.current === "x") {
        h(J(H));
      } else if (z.current === "y") {
        f(se);
        const be = Math.min(Math.abs(se) / Bo, 1);
        v(1 - be * 0.5);
      }
    },
    [m, r, J]
  );

  const ue = R(() => {
    if (!(!m || r)) {
      C(false);

      if (z.current === "x") {
        const H = D.current ?? e;
        let se = H;

        if (l < -80 && H < t - 1) {
          se = H + 1;
        } else if (l > 80 && H > 0) {
          se = H - 1;
        }

        if (se !== H) {
          const be = o[se]?.width || 0;
          const Qe = o[H]?.width || 0;
          const $ = se > H ? -Qe : be;
          i(true);
          y(se);
          h($);
          D.current = se;

          U.current = window.setTimeout(() => {
            U.current = null;
            i(false);
            y(null);
            h(0);
            D.current = null;
            c(se);
          }, 500);
        } else {
          i(true);
          h(0);

          U.current = window.setTimeout(() => {
            U.current = null;
            i(false);
          }, 300);
        }
      } else {
        if (z.current === "y") {
          ce();
        }
      }

      z.current = null;
    }
  }, [m, r, e, l, t, o, ce, c, i]);

  const Ze = R(
    (ae) => {
      if (!r) {
        return;
      }
      X.current = Math.max(X.current, ae.touches.length);

      if (ae.touches.length === 2) {
        B.current = true;
        Q.current = true;
        Y.current = Ts(ae.touches[0], ae.touches[1]);
        ne.current = N.current;
        C(false);
        z.current = null;
        h(0);
        f(0);
        v(1);
        P(false);
        return;
      }

      if (N.current > 1) {
        X.current = 1;

        te.current = {
          x: ae.touches[0].clientX,
          y: ae.touches[0].clientY,
        };

        oe.current = { ...O.current };
        C(true);
        ee.current = false;
        z.current = null;
        P(false);
        const ae_target_1 = ae.target;
        L.current =
          ae_target_1.tagName === "IMG" &&
          ae_target_1.hasAttribute("data-viewer-image");
        return;
      }
      X.current = 1;
      Q.current = false;
      a();

      if (U.current) {
        clearTimeout(U.current);
        U.current = null;
      }

      i(false);
      h(0);
      const ae_target = ae.target;
      L.current =
        ae_target.tagName === "IMG" &&
        ae_target.hasAttribute("data-viewer-image");
      F.current = { x: ae.touches[0].clientX, y: ae.touches[0].clientY };
      z.current = null;
      C(true);
    },
    [r, a, i]
  );

  const Ve = R(
    (ae) => {
      if (!r) {
        return;
      }
      X.current = Math.max(X.current, ae.touches.length);

      if (B.current && ae.touches.length >= 2) {
        const be = Ts(ae.touches[0], ae.touches[1]);
        const Qe = ne.current * (be / Y.current);
        M(Math.min(Math.max(Qe, 0.5), 5));
        return;
      }

      if (N.current > 1 && m && !B.current) {
        const be = ae.touches[0].clientX - te.current.x;
        const Qe = ae.touches[0].clientY - te.current.y;

        if (Math.abs(be) > 5 || Math.abs(Qe) > 5) {
          ee.current = true;
        }

        q(oe.current.x + be, oe.current.y + Qe);
        return;
      }
      if (!m) {
        return;
      }
      const H = ae.touches[0].clientX - F.current.x;
      const se = ae.touches[0].clientY - F.current.y;

      if (!z.current && (Math.abs(H) > 10 || Math.abs(se) > 10)) {
        z.current = Math.abs(H) > Math.abs(se) ? "x" : "y";
      }

      if (z.current === "x") {
        h(J(H));
      } else if (z.current === "y") {
        f(se);
        const be = Math.min(Math.abs(se) / Bo, 1);
        v(Math.round((1 - be * 0.7) * 100) / 100);
      }
    },
    [r, m, M, q, J]
  );

  const Le = R(() => {
    if (r) {
      if (B.current) {
        B.current = false;
        ie.current = Date.now();

        if (N.current < 1.1) {
          Z();
        }

        return;
      }
      if (N.current > 1) {
        C(false);
        return;
      }
      if (X.current > 1 || Q.current) {
        C(false);
        f(0);
        v(1);
        z.current = null;
        return;
      }
      if (Date.now() - ie.current < 300) {
        C(false);
        f(0);
        v(1);
        z.current = null;
        return;
      }
      if (m) {
        C(false);

        if (!L.current) {
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

          i(true);
          h(0);

          if (H !== e) {
            c(H);
          }

          U.current = window.setTimeout(() => {
            U.current = null;
            i(false);
          }, 500);
        } else {
          if (z.current === "y") {
            ce();
          }
        }
        z.current = null;
      }
    }
  }, [r, m, e, l, d, t, ce, c, u, i, Z]);

  const st = R(() => {
    const ae = D.current ?? e;
    const H = o[ae] || { width: 600, height: 400 };
    if (s && p !== null) {
      const se = o[p] || H;
      return { width: se.width, height: se.height };
    }
    if (m && z.current === "x" && l !== 0) {
      const se = l < 0 ? Math.min(ae + 1, t - 1) : Math.max(ae - 1, 0);
      if (se === ae) {
        return H;
      }
      const be = o[se] || H;
      const Qe = H.width / 2 + be.width / 2;
      const $ = Math.min(Math.abs(l) / Qe, 1);
      return {
        width: H.width + (be.width - H.width) * $,
        height: H.height + (be.height - H.height) * $,
      };
    }
    return H;
  }, [o, e, s, p, m, l, t]);

  const Ee = R(() => {
    i(true);
    f(window.innerHeight);
    v(0);
  }, [i]);

  return {
    offsetX: l,
    offsetY: d,
    isDragging: m,
    opacity: w,
    wasDragging: ee,
    displaySize: st(),
    animateClose: Ee,
    zoom: { scale: T, panX: _, panY: k, isAnimating: b },
    desktopHandlers: {
      onMouseDown: me,
      onMouseMove: _e,
      onMouseUp: ue,
      onMouseLeave: ue,
    },
    mobileHandlers: { onTouchStart: Ze, onTouchMove: Ve, onTouchEnd: Le },
  };
}
const H2 = "CNP0fBGd";
const W2 = "FxpoCP7s";
const V2 = "qO26zEBn";
const j2 = "-iyRv-th";
const z2 = "liHkL9mP";
const X2 = "U70eja-G";
const Y2 = "q1lrkTZi";
const Z2 = "oxBkKER-";
const q2 = "d4VkyUQq";
const G2 = "UK-OMndz";
const K2 = "_2CH2oEyg";
const J2 = "gGVStb2K";
const Q2 = "_7Ac4a5ul";
const ey = "ZyoB5yJC";
const ty = "DWdVTu-N";

const Ye = {
  viewer: H2,
  closeButton: W2,
  counter: V2,
  windowContainer: j2,
  track: z2,
  slide: X2,
  mobileContainer: Y2,
  mobileTrack: Z2,
  mobileSlide: q2,
  navArea: G2,
  navLeft: K2,
  navRight: J2,
  dots: Q2,
  dot: ey,
  active: ty,
};

function ny({ onClick: e }) {
  return n("button", {
    className: Ye.closeButton,
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
function oy({ current: e, total: t }) {
  return (
    t <= 1 || n("div", { className: Ye.counter, children: [e + 1, " / ", t] })
  );
}
function ry({ currentIndex: e, total: t, onPrev: o, onNext: r }) {
  return (
    t <= 1 ||
    n(Re, {
      children: [
        n("button", {
          className: `${Ye.navArea} ${Ye.navLeft}`,
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
          className: `${Ye.navArea} ${Ye.navRight}`,
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
function sy({ total: e, currentIndex: t, onDotClick: o }) {
  return (
    e <= 1 ||
    n("div", {
      className: Ye.dots,
      children: Array.from({ length: e }, (r, s) =>
        n(
          "button",
          {
            className: `${Ye.dot} ${s === t ? Ye.active : ""}`,
            onClick: () => o(s),
          },
          s
        )
      ),
    })
  );
}
function iy({
  images: e,
  imageSizes: t,
  currentIndex: o,
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
    for (let f = 0; f < o; f++) {
      d += t[f]?.width || 0;
    }
    return d;
  };

  return n("div", {
    className: Ye.windowContainer,
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
    children: n("div", {
      ref: l,
      className: Ye.track,
      style: {
        transform: `translateX(${-h() + r}px)`,
        transition: i
          ? "transform 0.5s cubic-bezier(0.32, 0.72, 0, 1)"
          : "none",
      },
      children: e.map((d, f) =>
        n(
          "div",
          {
            className: Ye.slide,
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
function ay({
  images: e,
  currentIndex: t,
  offsetX: o,
  offsetY: r,
  isAnimating: s,
  isClosing: i,
  handlers: a,
  onImageClick: c,
  zoom: u,
}) {
  return n("div", {
    className: Ye.mobileContainer,
    style: {
      transform: `translateY(${r}px)`,
      transition: s
        ? `transform ${i ? "0.15s" : "0.3s"} cubic-bezier(0.32, 0.72, 0, 1)`
        : "none",
    },
    onTouchStart: a.onTouchStart,
    onTouchMove: a.onTouchMove,
    onTouchEnd: a.onTouchEnd,
    children: n("div", {
      className: Ye.mobileTrack,
      style: {
        transform: `translateX(calc(-${t * 100}% + ${o}px))`,
        transition: s
          ? "transform 0.5s cubic-bezier(0.32, 0.72, 0, 1)"
          : "none",
      },
      children: e.map((l, h) =>
        n(
          "div",
          {
            className: Ye.mobileSlide,
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
function cy({ images: e, initialIndex: t, onClose: o }) {
  const r = I(null);
  const s = Tt();
  const i = $2(e);
  const a = B2({ initialIndex: t, total: e.length });
  O2();

  const c = R(
    (d = false) => {
      if (d && s) {
        u.animateClose();
        setTimeout(o, 150);
      } else {
        o();
      }
    },
    [s, o]
  );

  const u = F2({
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

  D2({ onClose: c, onPrev: a.goToPrev, onNext: a.goToNext });

  const l = R(
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

  const h = R(() => {
    if (u.wasDragging.current) {
      u.wasDragging.current = false;
      return;
    }
    c(s);
  }, [c, s]);

  return vt(
    n("div", {
      ref: r,
      className: Ye.viewer,
      style: {
        "--opacity": u.opacity,
        transition: a.isAnimating
          ? "opacity 0.3s cubic-bezier(0.32, 0.72, 0, 1)"
          : "none",
      },
      onClick: l,
      children: [
        !s && n(ny, { onClick: c }),
        n(oy, { current: a.currentIndex, total: e.length }),
        !s &&
          n(iy, {
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
          n(ay, {
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
          n(ry, {
            currentIndex: a.currentIndex,
            total: e.length,
            onPrev: a.goToPrev,
            onNext: a.goToNext,
          }),
        n(sy, {
          total: e.length,
          currentIndex: a.currentIndex,
          onDotClick: a.goToIndex,
        }),
      ],
    }),
    document.body
  );
}
function ly() {
  const { isOpen: e, images: t, initialIndex: o, close: r } = ci();
  return e ? n(cy, { images: t, initialIndex: o, onClose: r }) : null;
}
function uy({ children: e, currentPath: t }) {
  const o = sc();

  const r = Ne((i) => i.initialize);

  W(() => {
    if (o === "idle") {
      r();
    }
  }, [o, r]);

  W(() => {
    if (o === "loading" || o === "idle") {
      return;
    }
    const i = ts.some((a) => t.startsWith(a));

    if (o === "unauthenticated" && !i) {
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

  const s = ts.some((i) => t.startsWith(i));
  return o === "idle" || (o === "loading" && !s)
    ? null
    : o === "service_error"
    ? n(dy, {})
    : o === "account_deleted"
    ? n(hy, {})
    : n(Re, { children: e });
}
function dy() {
  const e = Ne((s) => s.initialize);

  const [t, o] = x(false);
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
function hy() {
  const e = Ne((u) => u.canRestore);

  const t = Ne((u) => u.restoreDeadline);

  const o = Ne((u) => u.restoreAccount);

  const r = Ne((u) => u.logout);

  const [s, i] = x(false);

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
      await o();
    } catch {
      i(false);
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
        s
          ? n("p", {
              style: {
                fontSize: "15px",
                color: "var(--text-secondary)",
                margin: 0,
              },
              children: "Восстановление аккаунта...",
            })
          : e
          ? n(Re, {
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
          : n(Re, {
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
function fy({
  itemCount: e,
  estimatedItemHeight: t,
  overscan: o = 5,
  gap: r = 0,
  getItemKey: s = (a) => a,
  initialMeasuredHeights: i,
}) {
  const [, a] = x(0);
  const c = I(typeof window !== "undefined" ? window.scrollY : 0);
  const u = I(i ?? new Map());
  const l = I(null);
  const h = I(null);
  const d = I(new Map());

  const f = (T) => u.current.get(T) ?? t;

  const m = (T) => {
    let g = 0;
    for (let _ = 0; _ < T; _++) {
      g += f(_) + r;
    }
    return g;
  };

  const C = () => {
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
    let _ = 0;
    let S = 0;
    for (let b = 0; b < e; b++) {
      const P = f(b) + r;
      if (S + P > c_current) {
        _ = b;
        break;
      }
      S += P;
    }
    let k = _;
    let E = 0;
    for (
      let b = _;
      b < e && ((E += f(b) + r), (k = b), !(E >= window_innerHeight));
      b++
    ) {}
    return { start: Math.max(0, _ - o), end: Math.min(e - 1, k + o) };
  };

  const v = () => {
    if (e === 0) {
      return [];
    }
    const { start: T, end: g } = w();
    const _ = [];
    for (let S = T; S <= g; S++) {
      _.push({ index: S, key: s(S), start: m(S) });
    }
    return _;
  };

  if (!h.current) {
    h.current = new ResizeObserver((T) => {
      let g = false;
      for (const _ of T) {
        const _target = _.target;
        const k = d.current.get(_target);
        if (k === undefined) {
          continue;
        }
        const E = _.contentRect.height;

        if (E > 0 && u.current.get(k) !== E) {
          u.current.set(k, E);
          g = true;
        }
      }

      if (g) {
        a((_) => _ + 1);
      }
    });
  }

  const p = R((T, g) => {
    if (!T) {
      return;
    }
    d.current.set(T, g);
    h.current?.observe(T);
    const _ = T.getBoundingClientRect().height;

    if (_ > 0 && u.current.get(g) !== _) {
      u.current.set(g, _);
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
  const y = R(() => new Map(u.current), []);
  return {
    virtualItems: v(),
    totalSize: C(),
    measureElement: p,
    getMeasuredHeights: y,
  };
}
const my = "IWKvHh6o";
const py = "B0hQs8NU";
const gy = "q8F-aimP";
const vy = "qkSaz-qE";

const oo = {
  virtualFeed: my,
  virtualContent: py,
  virtualItem: gy,
  loadingMore: vy,
};

function wy({
  posts: e,
  renderPost: t,
  isLoadingMore: o = false,
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
  const [f, m] = x(null);
  const [C, w] = x(window.innerWidth < 1174);

  const v = we((b) => b.highlightedPostId);

  const p = we((b) => b.clearHighlightedPost);

  W(() => {
    const b = () => w(window.innerWidth < 1174);
    window.addEventListener("resize", b);

    return () => window.removeEventListener("resize", b);
  }, []);
  const y = C ? 0 : c;

  const T = R(
    (b) => {
      const e_b = e[b];
      if (!e_b) {
        return b;
      }
      const N = e_b.attachments?.[0]?.id ?? "";
      return `${e_b.id}-${N}`;
    },
    [e]
  );

  const {
    virtualItems: g,
    totalSize: _,
    measureElement: S,
    getMeasuredHeights: k,
  } = fy({
    itemCount: e.length,
    estimatedItemHeight: i,
    overscan: a,
    gap: y,
    getItemKey: T,
    initialMeasuredHeights: u,
  });

  W(
    () => () => {
      if (l) {
        l(k());
      }
    },
    [l, k]
  );

  W(() => {
    if (!v) {
      return;
    }
    h.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    const b = setTimeout(() => {
      m(v);
      p();

      setTimeout(() => m(null), 600);
    }, 300);
    return () => clearTimeout(b);
  }, [v, p]);

  const E = R(() => {
    if (!s || !r || !r || o) {
      return;
    }
    const b =
      document.documentElement.scrollHeight -
      window.scrollY -
      window.innerHeight;

    if (b < 500 && !d.current) {
      d.current = true;
      s();
    }

    if (b > 600) {
      d.current = false;
    }
  }, [s, r, o]);

  W(() => {
    if (!o) {
      d.current = false;
    }
  }, [o]);

  W(() => {
    window.addEventListener("scroll", E, { passive: true });

    return () => window.removeEventListener("scroll", E);
  }, [E]);

  return n("div", {
    ref: h,
    className: oo.virtualFeed,
    children: [
      n("div", {
        className: oo.virtualContent,
        style: { height: `${_}px` },
        children: g.map((b) => {
          const P = e[b.index];
          return P
            ? n(
                "div",
                {
                  ref: (N) => S(N, b.index),
                  className: oo.virtualItem,
                  style: { transform: `translateY(${b.start}px)` },
                  children: t(P, b.index, P.id === f),
                },
                b.key
              )
            : null;
        }),
      }),
      o &&
        n("div", {
          className: oo.loadingMore,
          children: n(gt, { size: "sm" }),
        }),
    ],
  });
}
const yy = "qX9ObwT9";
const _y = "QAdxKv6R";
const Cy = "nTcZk3Cv";
const Ny = "_5UYumbfd";
const ro = { content: yy, icon: _y, text: Cy, button: Ny };
const ks = "phone-verification-required";
function by() {
  const [e, t] = x(false);

  const o = Ne((s) => s.profile?.id ?? "");

  W(() => {
    const s = () => t(true);
    window.addEventListener(ks, s);

    return () => window.removeEventListener(ks, s);
  }, []);

  if (!e) {
    return null;
  }

  const r = `https://t.me/itd_verification_bot?start=${o}`;
  return n(Ke, {
    onClose: () => t(false),
    title: "Подтверждение телефона",
    children: n("div", {
      className: ro.content,
      children: [
        n("div", {
          className: ro.icon,
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
          className: ro.text,
          children:
            "Для публикации постов и комментариев необходимо подтвердить номер телефона через Telegram-бота.",
        }),
        n("a", {
          href: r,
          target: "_blank",
          rel: "noopener noreferrer",
          className: ro.button,
          onClick: () => t(false),
          children: "Подтвердить через Telegram",
        }),
      ],
    }),
  });
}
const Ty = "NoLqdGhZ";
const ky = "ZJgdLwPI";
const Ey = "r9t-7AuI";
const Uo = { layout: Ty, wrapper: ky, content: Ey };
const Ry = ["/login", "/register", "/forgot-password", "/verify-email"];

const Sy = [
  "/terms",
  "/privacy",
  "/cookies",
  "/external",
  "/careers",
  "/support",
  "/delete-account",
  "/child-safety",
];

const Iy = ({ children: e }) => {
  const t = Tt();
  const o = Nc();
  const [r, s] = x(window.location.pathname);
  W(() => {
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
  const i = Ry.includes(r);
  const a = Sy.includes(r);
  return i
    ? n(Re, { children: e })
    : n(Cc.Provider, {
        value: { isHidden: o },
        children: n("div", {
          className: Uo.layout,
          children: n("div", {
            className: Uo.wrapper,
            children: [
              !a && (t ? n(Xf, {}) : n(Ou, {})),
              !a && !t && n(Hu, {}),
              n("div", { className: Uo.content, children: e }),
            ],
          }),
        }),
      });
};

const xy = "bpf4GYjz";
const Py = "crrL7XgI";
const Ay = "yhENW-7a";
const Ly = "_928LvLhD";
const My = "_6eF0w9KX";

const Nn = {
  page: xy,
  createPostWrapper: Py,
  tabsWrapper: Ay,
  error: Ly,
  empty: My,
};

const $y = (e) => {
  const t = we((k) => k.posts);

  const o = we((k) => k.activeFeed);

  const r = we((k) => k.isLoading);

  const s = we((k) => k.isLoadingMore);

  const i = we((k) => k.hasMore);

  const a = we((k) => k.error);

  const c = we((k) => k.feedScrollPosition);

  const u = we((k) => k.feedMeasuredHeights);

  const l = we((k) => k.setActiveFeed);

  const h = we((k) => k.fetchFeed);

  const d = we((k) => k.loadMoreFeed);

  const f = we((k) => k.createPost);

  const m = we((k) => k.setFeedScrollPosition);

  const C = we((k) => k.setFeedMeasuredHeights);

  const w = Ne((k) => k.profile);

  const v = Ne((k) => k.status);

  const p = I(false);

  const y = Se(() => t.map((k) => k.author.id), [t]);

  nc(y);

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

  const T = (k) => {
    const b = ["global", "clan", "following"][k] ?? "global";

    if (b !== o) {
      l(b);
    }
  };

  const g = async (k, E, b, P) => {
    if (w) {
      await f(w.id, k, E, b, P);
    }
  };

  const _ = R(() => {
    if (i && !s) {
      d();
    }
  }, [i, s, d]);

  const S = R((k, E, b) => n(v1, { post: k, isHighlighted: b }, k.id), []);

  return n("div", {
    className: Nn.page,
    children: [
      n("div", {
        className: Nn.tabsWrapper,
        children: n(iw, {
          tabs: ["Для вас", "Лента кланов", "Подписки"],
          activeIndex: o === "global" ? 0 : o === "clan" ? 1 : 2,
          onChange: T,
        }),
      }),
      n("div", {
        className: Nn.createPostWrapper,
        children: [
          w && n(rt, { src: w.avatar ?? "", alt: w.displayName, size: "sm" }),
          n(Di, { onSubmit: g }),
        ],
      }),
      a
        ? n("div", {
            className: Nn.error,
            children: [
              n("p", { children: a }),
              n("button", { onClick: () => h(), children: "Повторить" }),
            ],
          })
        : r && t.length === 0
        ? n(gt, {})
        : t.length === 0
        ? n("div", { className: Nn.empty, children: "Нет постов" })
        : t.length > 0
        ? n(wy, {
            posts: t,
            renderPost: S,
            isLoadingMore: s,
            hasMore: i,
            onLoadMore: _,
            estimatedPostHeight: 250,
            overscan: 3,
            initialMeasuredHeights: u,
            onMeasuredHeightsChange: C,
          })
        : null,
    ],
  });
};

const Oy = Pe(() =>
  Ae(() => import("./index-DCncHNpt.js"), __vite__mapDeps([0, 1, 2])).then(
    (e) => ({
      default: e.Profile,
    })
  )
);

const Dy = Pe(() =>
  Ae(() => import("./index-VzoboGnE.js"), __vite__mapDeps([3, 1, 4])).then(
    (e) => ({
      default: e.Notifications,
    })
  )
);

const By = Pe(() =>
  Ae(() => import("./index-CT7ri1Pu.js"), __vite__mapDeps([5, 6])).then(
    (e) => ({
      default: e.About,
    })
  )
);

const ji = Pe(() =>
  Ae(() => import("./index-B7oGrQlR.js"), []).then((e) => ({
    default: e.NotFound,
  }))
);

const Uy = Pe(() =>
  Ae(() => import("./index-rg50IUX8.js"), __vite__mapDeps([7, 8, 9])).then(
    (e) => ({
      default: e.PostPage,
    })
  )
);

const Fy = Pe(() =>
  Ae(
    () => import("./index-BIH_ihsi.js"),
    __vite__mapDeps([10, 11, 12, 13, 14, 15, 16])
  ).then((e) => ({
    default: e.Login,
  }))
);

const Hy = Pe(() =>
  Ae(
    () => import("./index-hkmiX_pv.js"),
    __vite__mapDeps([17, 11, 12, 13, 14, 15, 18])
  ).then((e) => ({
    default: e.Register,
  }))
);

const Wy = Pe(() =>
  Ae(
    () => import("./index-ruzSVsPm.js"),
    __vite__mapDeps([19, 11, 12, 15, 20])
  ).then((e) => ({
    default: e.ForgotPassword,
  }))
);

const Vy = Pe(() =>
  Ae(() => import("./index-DYplDNCA.js"), __vite__mapDeps([21, 15, 22])).then(
    (e) => ({
      default: e.ResetPassword,
    })
  )
);

const jy = Pe(() =>
  Ae(() => import("./index-Bo5OPheE.js"), []).then((e) => ({
    default: e.VerifyEmail,
  }))
);

const zy = Pe(() =>
  Ae(() => import("./index-DiXDf6tA.js"), __vite__mapDeps([23, 8, 24])).then(
    (e) => ({
      default: e.Terms,
    })
  )
);

const Xy = Pe(() =>
  Ae(() => import("./index-Dx7RaqBn.js"), __vite__mapDeps([25, 8, 26])).then(
    (e) => ({
      default: e.Privacy,
    })
  )
);

const Yy = Pe(() =>
  Ae(() => import("./index-c-gAbw5O.js"), __vite__mapDeps([27, 8, 28])).then(
    (e) => ({
      default: e.Cookies,
    })
  )
);

const Zy = Pe(() =>
  Ae(() => import("./index-CSrJ0MeY.js"), __vite__mapDeps([29, 30])).then(
    (e) => ({
      default: e.Onboarding,
    })
  )
);

const qy = Pe(() =>
  Ae(() => import("./index-DRDz13FW.js"), __vite__mapDeps([31, 32])).then(
    (e) => ({
      default: e.Search,
    })
  )
);

const Gy = Pe(() =>
  Ae(() => import("./index-Cgymt85z.js"), __vite__mapDeps([33, 8, 34])).then(
    (e) => ({
      default: e.Hashtag,
    })
  )
);

const Ky = Pe(() =>
  Ae(() => import("./index-KVT1ctWT.js"), __vite__mapDeps([35, 8, 36])).then(
    (e) => ({
      default: e.ExternalLink,
    })
  )
);

const Jy = Pe(() =>
  Ae(() => import("./index-D67LXInR.js"), __vite__mapDeps([37, 8, 38])).then(
    (e) => ({
      default: e.Support,
    })
  )
);

const Qy = Pe(() =>
  Ae(() => import("./index-Hw781Py1.js"), __vite__mapDeps([39, 8, 40])).then(
    (e) => ({
      default: e.DeleteAccount,
    })
  )
);

const e_ = Pe(() =>
  Ae(() => import("./index-CBcelRK0.js"), __vite__mapDeps([41, 8, 42])).then(
    (e) => ({
      default: e.ChildSafety,
    })
  )
);

const t_ = Pe(() =>
  Ae(() => import("./index-BKxrAukA.js"), __vite__mapDeps([43, 44])).then(
    (e) => ({
      default: e.Event,
    })
  )
);

const n_ = Pe(() =>
  Ae(() => import("./index-D9knPRnJ.js"), []).then((e) => ({
    default: e.Verification,
  }))
);

const o_ = Pe(() =>
  Ae(() => import("./index-CbBZok-S.js"), __vite__mapDeps([45, 8, 46])).then(
    (e) => ({
      default: e.SubscriptionTerms,
    })
  )
);

const r_ = ({ slug: e }) => {
  if (!e?.startsWith("@")) {
    return n(ji, {});
  }
  const t = e.slice(1);
  return n(Oy, { username: t });
};

function s_() {
  const [e, t] = x(window.location.pathname);
  return n($1, {
    children: n(td, {
      children: n(uy, {
        currentPath: e,
        children: [
          n(ly, {}),
          n(tw, {}),
          n(by, {}),
          n(Iy, {
            children: n(Sn, {
              fallback: null,
              children: n(ai, {
                onChange: (r) => {
                  const s = e;
                  t(r.url);

                  if (r.url !== "/" && r.url !== s) {
                    window.scrollTo(0, 0);
                  }
                },
                children: [
                  n($y, { path: "/" }),
                  n(Dy, { path: "/notifications" }),
                  n(By, { path: "/about" }),
                  n(Fy, { path: "/login" }),
                  n(Hy, { path: "/register" }),
                  n(Wy, { path: "/forgot-password" }),
                  n(Vy, { path: "/reset-password" }),
                  n(jy, { path: "/verify-email" }),
                  n(zy, { path: "/terms" }),
                  n(Xy, { path: "/privacy" }),
                  n(Yy, { path: "/cookies" }),
                  n(Zy, { path: "/onboarding" }),
                  n(qy, { path: "/search" }),
                  n(Gy, { path: "/hashtag/:name" }),
                  n(Ky, { path: "/external" }),
                  n(Jy, { path: "/support" }),
                  n(Qy, { path: "/delete-account" }),
                  n(e_, { path: "/child-safety" }),
                  n(t_, { path: "/event" }),
                  n(n_, { path: "/verification" }),
                  n(o_, { path: "/subscription-terms" }),
                  n(Uy, { path: "/:username/post/:postId" }),
                  n(r_, { path: "/:slug" }),
                  n(ji, { default: true }),
                ],
              }),
            }),
          }),
        ],
      }),
    }),
  });
}
Ta(document.getElementById("root")).render(n(oi, { children: n(s_, {}) }));
export {
  $ as $,
  I as A,
  Oe as B,
  $u as C,
  Fi as D,
  pr as E,
  We as F,
  Si as G,
  Nh as H,
  _s as I,
  Ge as J,
  we as K,
  Tt as L,
  Ke as M,
  c_ as N,
  di as O,
  l_ as P,
  tp as Q,
  Bi as R,
  Cs as S,
  zf as T,
  Hn as U,
  Se as V,
  iw as W,
  Di as X,
  wy as Y,
  v1 as Z,
  pn as __,
  xt as a,
  hi as a0,
  yi as a1,
  Xc as a2,
  fr as a3,
  yo as a4,
  uo as a5,
  ps as a6,
  ao as a7,
  h1 as a8,
  Wi as a9,
  ke as aa,
  Ic as ab,
  vt as ac,
  Wd as ad,
  G as ae,
  K as af,
  dr as ag,
  Ri as ah,
  fi as ai,
  hr as aj,
  ks as ak,
  Ne as b,
  Ha as c,
  x as d,
  ki as e,
  qc as f,
  mr as g,
  i_ as h,
  Ue as i,
  en as j,
  Re as k,
  Ln as l,
  gt as m,
  rt as n,
  kt as o,
  Nt as p,
  R as q,
  cn as r,
  A as s,
  a_ as t,
  n as u,
  bi as v,
  Qc as w,
  Ci as x,
  W as y,
  vo as z,
};
