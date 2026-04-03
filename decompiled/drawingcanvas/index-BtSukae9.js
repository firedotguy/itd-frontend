import {
  q as d_1,
  q,
  A,
  y,
  u,
  a0,
  d_1 as d_1_1,
  k,
  aa,
} from "./index-d9k9JBOp.js";

const Yt = "ea0BOksL";
const zt = "_3x0lVqeJ";
const Wt = "k1PR-0WB";
const At = "wRV5rijq";
const Zt = "GlXz5E-N";
const $t = "IHhDMDG-";
const Kt = "elFWsy5U";
const jt = "eapcoUbX";
const Gt = "_6XVFDO74";
const Ot = "_8u1ESpvI";
const _t = "fP-JtUai";
const Ht = "G1-kgIh2";
const Jt = "BbahIL--";
const Ut = "pxz5YAHz";
const Vt = "GdwJM8jd";
const qt = "Iy4DuTTO";
const Qt = "cVrkG6OP";
const te = "K2WqA9qX";
const ee = "F9c4GceQ";
const ne = "g9QMGpAA";
const re = "mJqJVajZ";
const oe = "_12S7evy3";
const ce = "lX21h9TT";
const ie = "nbY8-Al7";
const se = "I0ApjuFw";

const o = {
  modalContent: Yt,
  container: zt,
  toolbar: Wt,
  toolGroup: At,
  separator: Zt,
  spacer: $t,
  toolButton: Kt,
  active: jt,
  sizeButton: Gt,
  sizePreview: Ot,
  colorPalette: _t,
  colorButton: Ht,
  colorPicker: Jt,
  zoomLabel: Ut,
  canvasContainer: Vt,
  viewport: qt,
  actions: Qt,
  cancelButton: te,
  saveButton: ee,
  confirmOverlay: ne,
  confirmDialog: re,
  confirmText: oe,
  confirmActions: ce,
  confirmCancel: ie,
  confirmClose: se,
};

const ae = {
  post: { width: 800, height: 500 },
  banner: { width: 1100, height: 380 },
};

const le = [
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

const ue = [2, 4, 8, 12, 20, 32];
const R = 0.25;
const Z = 4;
const P = 0.15;

export function DrawingCanvas({
  isOpen: x,
  onClose: $,
  onSave: pt,
  mode: ut = "post",
  saveButtonText: Ct,
}) {
  const [K, dt] = d_1(false);
  const [kt, rt] = d_1(false);

  const ht = q(() => {
    rt(true);
    return false;
  }, []);

  const bt = q(() => {
    rt(false);
    $();
  }, [$]);

  const ft = q(() => {
    rt(false);
  }, []);

  const Y = A(null);
  const p = A(null);
  const z = A(null);
  const k = A(null);
  const j = A(1);
  const [m, W] = d_1("brush");
  const [A, mt] = d_1("#000000");
  const [G, Bt] = d_1(4);
  const D = A(false);
  const [I, vt] = d_1([]);
  const [C, O] = d_1(-1);
  const [_, Mt] = d_1(1);
  const [Ft, Lt] = d_1({ x: 0, y: 0 });
  const g = A(1);
  const v = A({ x: 0, y: 0 });
  const H = A(false);
  const J = A({ x: 0, y: 0 });
  const b = A(null);
  const F = A(null);
  const { width: y, height: w } = ae[ut];

  const h = q((t, n) => {
    g.current = t;
    v.current = n;
    Mt(t);
    Lt(n);
  }, []);

  const B = q((t, n, e, s, i) => {
    const c = (s - e.x) / t;
    const l = (i - e.y) / t;
    return { x: s - c * n, y: i - l * n };
  }, []);

  const U = q(() => {
    const t = Y.current;
    const n = z.current;
    if (!t || !n) {
      return;
    }
    const e = t.getContext("2d");
    if (!e) {
      return;
    }
    const s = j.current;
    const i = t.width / s;
    const c = t.height / s;
    const l = g.current;
    const u = v.current;
    e.save();
    e.setTransform(s, 0, 0, s, 0, 0);
    e.clearRect(0, 0, i, c);
    e.translate(u.x, u.y);
    e.scale(l, l);
    e.shadowColor = "rgba(0, 0, 0, 0.15)";
    e.shadowBlur = 20 / l;
    e.shadowOffsetX = 0;
    e.shadowOffsetY = 4 / l;
    e.fillStyle = "#FFFFFF";
    e.fillRect(0, 0, y, w);
    e.shadowColor = "transparent";
    e.shadowBlur = 0;
    e.shadowOffsetY = 0;
    e.imageSmoothingEnabled = l < 2;
    e.drawImage(n, 0, 0, y, w);
    e.imageSmoothingEnabled = true;
    const a = F.current;
    if (a) {
      e.strokeStyle = a.color;
      e.lineWidth = a.lineWidth;
      e.lineCap = "round";
      e.lineJoin = "round";
      e.beginPath();

      if (a.tool === "line") {
        e.moveTo(a.start.x, a.start.y);
        e.lineTo(a.current.x, a.current.y);
      } else if (a.tool === "rectangle") {
        e.rect(
          a.start.x,
          a.start.y,
          a.current.x - a.start.x,
          a.current.y - a.start.y
        );
      } else if (a.tool === "circle") {
        const E = Math.hypot(a.current.x - a.start.x, a.current.y - a.start.y);
        e.arc(a.start.x, a.start.y, E, 0, Math.PI * 2);
      }

      e.stroke();
    }
    e.restore();
  }, [y, w]);

  const L = A(U);
  L.current = U;
  const ot = q(
    (t = Infinity) => {
      const n = p.current;
      if (!n) {
        return;
      }
      const e = n.getBoundingClientRect();
      const s = 32;
      const i = (e.width - s * 2) / y;
      const c = (e.height - s * 2) / w;
      const l = Math.max(R, Math.min(i, c, t));
      h(l, { x: (e.width - y * l) / 2, y: (e.height - w * l) / 2 });
    },
    [y, w, h]
  );

  y(() => {
    if (!x || !Y.current || !Y.current || !p.current) {
      return;
    }
    const t = Y.current;
    const n = p.current;
    const e = window.devicePixelRatio || 1;
    j.current = e;
    const s = n.getBoundingClientRect();
    t.width = s.width * e;
    t.height = s.height * e;
    const i = document.createElement("canvas");
    i.width = y * e;
    i.height = w * e;
    const c = i.getContext("2d", { willReadFrequently: true });
    if (!c) {
      return;
    }
    c.scale(e, e);
    c.fillStyle = "#FFFFFF";
    c.fillRect(0, 0, y, w);
    z.current = i;
    k.current = c;
    const l = c.getImageData(0, 0, i.width, i.height);
    vt([l]);
    O(0);
    let u = true;
    const a = new ResizeObserver((et) => {
      for (const nt of et) {
        const { width: T, height: N } = nt.contentRect;
        if (!(T === 0 || N === 0)) {
          t.width = T * j.current;
          t.height = N * j.current;

          if (u) {
            const at = (T - 64) / y;
            const lt = (N - 64) / w;
            const S = Math.max(R, Math.min(at, lt));
            h(S, { x: (T - y * S) / 2, y: (N - w * S) / 2 });
          }

          L.current();
        }
      }
    });
    a.observe(n);
    const E = setTimeout(() => {
      u = false;
    }, 500);
    return () => {
      clearTimeout(E);
      a.disconnect();
      z.current = null;
      k.current = null;
    };
  }, [x, y, w]);

  y(() => {
    U();
  }, [_, Ft, U]);

  const V = q(() => {
    const t = k.current;
    const n = z.current;
    if (!t || !n) {
      return;
    }
    const e = t.getImageData(0, 0, n.width, n.height);

    vt((s) => {
      const i = s.slice(0, C + 1);
      i.push(e);

      if (i.length > 50) {
        i.shift();
      }

      return i;
    });

    O((s) => Math.min(s + 1, 49));
  }, [C]);

  const ct = q(() => {
    if (C <= 0) {
      return;
    }
    const t = k.current;
    if (!t) {
      return;
    }
    const n = C - 1;
    const e = I[n];

    if (e) {
      t.putImageData(e, 0, 0);
      O(n);
      L.current();
    }
  }, [C, I]);

  const q = q(() => {
    if (C >= I.length - 1) {
      return;
    }
    const t = k.current;
    if (!t) {
      return;
    }
    const n = C + 1;
    const e = I[n];

    if (e) {
      t.putImageData(e, 0, 0);
      O(n);
      L.current();
    }
  }, [C, I]);

  const Q = q((t) => {
    const n = Y.current;
    if (!n) {
      return { x: 0, y: 0 };
    }
    const e = n.getBoundingClientRect();
    let s;
    let i;

    if ("touches" in t) {
      s = t.touches[0].clientX;
      i = t.touches[0].clientY;
    } else {
      s = t.clientX;
      i = t.clientY;
    }

    return {
      x: (s - e.left - v.current.x) / g.current,
      y: (i - e.top - v.current.y) / g.current,
    };
  }, []);

  const yt = q(
    (t) => {
      if (
        ("button" in t && t.button !== 0) ||
        ("touches" in t && t.touches.length > 1)
      ) {
        return;
      }
      t.preventDefault();
      const n = k.current;
      if (!n) {
        return;
      }
      const e = Q(t);
      D.current = true;

      if (m === "brush" || m === "eraser") {
        n.beginPath();
        n.moveTo(e.x, e.y);
        n.lineCap = "round";
        n.lineJoin = "round";
        n.lineWidth = G;
        n.strokeStyle = m === "eraser" ? "#FFFFFF" : A;
      } else {
        F.current = {
          start: e,
          current: e,
          tool: m,
          color: A,
          lineWidth: G,
        };
      }
    },
    [m, A, G, Q]
  );

  const it = q(
    (t) => {
      if (!D.current || ("touches" in t && t.touches.length > 1)) {
        return;
      }
      t.preventDefault();
      const n = Q(t);
      if (m === "brush" || m === "eraser") {
        const e = k.current;
        if (!e) {
          return;
        }
        e.lineTo(n.x, n.y);
        e.stroke();
        L.current();
      } else {
        if (F.current) {
          F.current = { ...F.current, current: n };
          L.current();
        }
      }
    },
    [m, Q]
  );

  const tt = q(() => {
    if (!D.current) {
      return;
    }
    D.current = false;
    const t = F.current;
    if (t) {
      const n = k.current;
      if (n) {
        n.strokeStyle = t.color;
        n.lineWidth = t.lineWidth;
        n.lineCap = "round";
        n.lineJoin = "round";
        n.beginPath();

        if (t.tool === "line") {
          n.moveTo(t.start.x, t.start.y);
          n.lineTo(t.current.x, t.current.y);
        } else if (t.tool === "rectangle") {
          n.rect(
            t.start.x,
            t.start.y,
            t.current.x - t.start.x,
            t.current.y - t.start.y
          );
        } else if (t.tool === "circle") {
          const e = Math.hypot(
            t.current.x - t.start.x,
            t.current.y - t.start.y
          );
          n.arc(t.start.x, t.start.y, e, 0, Math.PI * 2);
        }

        n.stroke();
      }
      F.current = null;
    }
    V();
    L.current();
  }, [V]);

  const wt = A(it);
  const gt = A(tt);
  wt.current = it;
  gt.current = tt;
  const Nt = q((t) => {
    if (t.button === 1) {
      t.preventDefault();
      H.current = true;
      J.current = { x: t.clientX, y: t.clientY };
    }
  }, []);

  y(() => {
    if (!x) {
      return;
    }

    const t = (e) => {
      if (H.current) {
        const s = e.clientX - J.current.x;
        const i = e.clientY - J.current.y;
        J.current = { x: e.clientX, y: e.clientY };
        const c = v.current;
        h(g.current, { x: c.x + s, y: c.y + i });
        return;
      }
      wt.current(e);
    };

    const n = () => {
      if (H.current) {
        H.current = false;
        return;
      }
      gt.current();
    };

    window.addEventListener("mousemove", t);
    window.addEventListener("mouseup", n);

    return () => {
      window.removeEventListener("mousemove", t);
      window.removeEventListener("mouseup", n);
    };
  }, [x, h]);

  y(() => {
    if (!x) {
      return;
    }
    const t = (n) => {
      if ((n.ctrlKey || n.metaKey) && n.key === "z") {
        n.preventDefault();
        n.shiftKey ? q() : ct();
      }

      if ((n.ctrlKey || n.metaKey) && n.key === "y") {
        n.preventDefault();
        q();
      }

      if ((n.ctrlKey || n.metaKey) && (n.key === "=" || n.key === "+")) {
        n.preventDefault();
        const e = p.current;
        if (!e) {
          return;
        }
        const s = e.getBoundingClientRect();
        const i = s.width / 2;
        const c = s.height / 2;
        const l = g.current;
        const u = Math.min(Z, l + P);
        h(u, B(l, u, v.current, i, c));
      }

      if ((n.ctrlKey || n.metaKey) && n.key === "-") {
        n.preventDefault();
        const e = p.current;
        if (!e) {
          return;
        }
        const s = e.getBoundingClientRect();
        const i = s.width / 2;
        const c = s.height / 2;
        const l = g.current;
        const u = Math.max(R, l - P);
        h(u, B(l, u, v.current, i, c));
      }

      if ((n.ctrlKey || n.metaKey) && n.key === "0") {
        n.preventDefault();
        ot();
      }
    };
    window.addEventListener("keydown", t);

    return () => window.removeEventListener("keydown", t);
  }, [x, ct, q, h, B, ot]);

  y(() => {
    if (!x) {
      return;
    }
    const t = p.current;
    if (!t) {
      return;
    }
    const n = (e) => {
      e.preventDefault();
      const s = t.getBoundingClientRect();
      const i = e.clientX - s.left;
      const c = e.clientY - s.top;
      if (e.ctrlKey || e.metaKey) {
        const l = g.current;
        const u = e.deltaY > 0 ? -P : P;
        const a = Math.min(Z, Math.max(R, l + u));
        if (a === l) {
          return;
        }
        h(a, B(l, a, v.current, i, c));
      } else {
        h(g.current, {
          x: v.current.x - e.deltaX,
          y: v.current.y - e.deltaY,
        });
      }
    };
    t.addEventListener("wheel", n, { passive: false });

    return () => t.removeEventListener("wheel", n);
  }, [x, h, B]);

  y(() => {
    if (!x) {
      return;
    }
    const t = p.current;
    if (!t) {
      return;
    }

    const n = (c, l) =>
      Math.hypot(l.clientX - c.clientX, l.clientY - c.clientY);

    const e = (c) => {
      if (c.touches.length === 2) {
        c.preventDefault();

        if (D.current) {
          D.current = false;
          F.current = null;
        }

        const l = t.getBoundingClientRect();
        const u = c.touches[0];
        const a = c.touches[1];
        b.current = {
          dist: n(u, a),
          midX: (u.clientX + a.clientX) / 2 - l.left,
          midY: (u.clientY + a.clientY) / 2 - l.top,
        };
      }
    };

    const s = (c) => {
      if (c.touches.length === 2 && b.current) {
        c.preventDefault();
        const l = t.getBoundingClientRect();
        const u = c.touches[0];
        const a = c.touches[1];
        const E = n(u, a);
        const et = (u.clientX + a.clientX) / 2 - l.left;
        const nt = (u.clientY + a.clientY) / 2 - l.top;
        const T = E / b.current.dist;
        const N = g.current;
        const st = Math.min(Z, Math.max(R, N * T));
        const at = et - b.current.midX;
        const lt = nt - b.current.midY;
        const S = B(N, st, v.current, b.current.midX, b.current.midY);
        h(st, { x: S.x + at, y: S.y + lt });
        b.current = { dist: E, midX: et, midY: nt };
      }
    };

    const i = (c) => {
      if (c.touches.length < 2) {
        b.current = null;
      }
    };

    t.addEventListener("touchstart", e, { passive: false });
    t.addEventListener("touchmove", s, { passive: false });
    t.addEventListener("touchend", i);
    t.addEventListener("touchcancel", i);

    return () => {
      t.removeEventListener("touchstart", e);
      t.removeEventListener("touchmove", s);
      t.removeEventListener("touchend", i);
      t.removeEventListener("touchcancel", i);
    };
  }, [x, h, B]);

  const Rt = q(() => {
    const t = k.current;

    if (t) {
      t.fillStyle = "#FFFFFF";
      t.fillRect(0, 0, y, w);
      V();
      L.current();
    }
  }, [y, w, V]);

  const Dt = async () => {
    const t = z.current;
    if (!t || K) {
      return;
    }
    const n = t.toDataURL("image/png");
    dt(true);
    try {
      await pt(n);
      $();
    } catch (e) {
      console.error("Failed to save drawing:", e);
    } finally {
      dt(false);
    }
  };

  const It = () => {
    const t = p.current;
    if (!t) {
      return;
    }
    const n = t.getBoundingClientRect();
    const e = n.width / 2;
    const s = n.height / 2;
    const i = g.current;
    const c = Math.min(Z, i + P);
    h(c, B(i, c, v.current, e, s));
  };

  const Et = () => {
    const t = p.current;
    if (!t) {
      return;
    }
    const n = t.getBoundingClientRect();
    const e = n.width / 2;
    const s = n.height / 2;
    const i = g.current;
    const c = Math.max(R, i - P);
    h(c, B(i, c, v.current, e, s));
  };

  const Tt = () => ot();

  return x
    ? u(k, {
        children: [
          u(d_1_1, {
            onClose: $,
            onBeforeClose: ht,
            showHeader: false,
            contentClassName: o.modalContent,
            size: "wide",
            children: u("div", {
              className: o.container,
              children: [
                u("div", {
                  className: o.toolbar,
                  children: [
                    u("div", {
                      className: o.toolGroup,
                      children: [
                        u("button", {
                          className: `${o.toolButton} ${
                            m === "brush" ? o.active : ""
                          }`,
                          onClick: () => W("brush"),
                          title: "Кисть",
                          children: u(de, {}),
                        }),
                        u("button", {
                          className: `${o.toolButton} ${
                            m === "eraser" ? o.active : ""
                          }`,
                          onClick: () => W("eraser"),
                          title: "Ластик",
                          children: u(he, {}),
                        }),
                        u("button", {
                          className: `${o.toolButton} ${
                            m === "line" ? o.active : ""
                          }`,
                          onClick: () => W("line"),
                          title: "Линия",
                          children: u(fe, {}),
                        }),
                        u("button", {
                          className: `${o.toolButton} ${
                            m === "rectangle" ? o.active : ""
                          }`,
                          onClick: () => W("rectangle"),
                          title: "Прямоугольник",
                          children: u(me, {}),
                        }),
                        u("button", {
                          className: `${o.toolButton} ${
                            m === "circle" ? o.active : ""
                          }`,
                          onClick: () => W("circle"),
                          title: "Круг",
                          children: u(ve, {}),
                        }),
                      ],
                    }),
                    u("div", { className: o.separator }),
                    u("div", {
                      className: o.toolGroup,
                      children: ue.map((t) =>
                        u(
                          "button",
                          {
                            className: `${o.sizeButton} ${
                              G === t ? o.active : ""
                            }`,
                            onClick: () => Bt(t),
                            title: `${t}px`,
                            children: u("span", {
                              className: o.sizePreview,
                              style: {
                                width: Math.min(t, 20),
                                height: Math.min(t, 20),
                              },
                            }),
                          },
                          t
                        )
                      ),
                    }),
                    u("div", { className: o.separator }),
                    u("div", {
                      className: o.colorPalette,
                      children: [
                        le.map((t) =>
                          u(
                            "button",
                            {
                              className: `${o.colorButton} ${
                                A === t ? o.active : ""
                              }`,
                              style: { backgroundColor: t },
                              onClick: () => mt(t),
                              title: t,
                            },
                            t
                          )
                        ),
                        u("input", {
                          type: "color",
                          value: A,
                          onChange: (t) => mt(t.currentTarget.value),
                          className: o.colorPicker,
                          title: "Свой цвет",
                        }),
                      ],
                    }),
                    u("div", { className: o.spacer }),
                    u("div", {
                      className: o.toolGroup,
                      children: [
                        u("button", {
                          className: o.toolButton,
                          onClick: Et,
                          disabled: _ <= R,
                          title: "Уменьшить",
                          children: u(pe, {}),
                        }),
                        u("button", {
                          className: o.zoomLabel,
                          onClick: Tt,
                          title: "Сбросить зум",
                          children: [Math.round(_ * 100), "%"],
                        }),
                        u("button", {
                          className: o.toolButton,
                          onClick: It,
                          disabled: _ >= Z,
                          title: "Увеличить",
                          children: u(xe, {}),
                        }),
                      ],
                    }),
                    u("div", { className: o.separator }),
                    u("div", {
                      className: o.toolGroup,
                      children: [
                        u("button", {
                          className: o.toolButton,
                          onClick: ct,
                          disabled: C <= 0,
                          title: "Отменить (Ctrl+Z)",
                          children: u(ye, {}),
                        }),
                        u("button", {
                          className: o.toolButton,
                          onClick: q,
                          disabled: C >= I.length - 1,
                          title: "Повторить (Ctrl+Y)",
                          children: u(we, {}),
                        }),
                        u("button", {
                          className: o.toolButton,
                          onClick: Rt,
                          title: "Очистить",
                          children: u(ge, {}),
                        }),
                      ],
                    }),
                  ],
                }),
                u("div", {
                  ref: p,
                  className: o.canvasContainer,
                  onMouseDown: Nt,
                  children: u("canvas", {
                    ref: Y,
                    className: o.viewport,
                    onMouseDown: yt,
                    onTouchStart: yt,
                    onTouchMove: it,
                    onTouchEnd: tt,
                    onTouchCancel: tt,
                  }),
                }),
                u("div", {
                  className: o.actions,
                  children: [
                    u("button", {
                      className: o.cancelButton,
                      onClick: () => ht(),
                      disabled: K,
                      children: "Отмена",
                    }),
                    u("button", {
                      className: o.saveButton,
                      onClick: Dt,
                      disabled: K,
                      children: K
                        ? u(k, { children: [u(aa, {}), "Загрузка..."] })
                        : Ct ||
                          (ut === "banner"
                            ? "Загрузить баннер"
                            : "Добавить рисунок"),
                    }),
                  ],
                }),
              ],
            }),
          }),
          kt &&
            a0(
              u("div", {
                className: o.confirmOverlay,
                onClick: ft,
                children: u("div", {
                  className: o.confirmDialog,
                  onClick: (t) => t.stopPropagation(),
                  children: [
                    u("p", {
                      className: o.confirmText,
                      children:
                        "Вы действительно хотите закрыть рисовалку? Ваши изменения будут не сохранены.",
                    }),
                    u("div", {
                      className: o.confirmActions,
                      children: [
                        u("button", {
                          className: o.confirmCancel,
                          onClick: ft,
                          children: "Отмена",
                        }),
                        u("button", {
                          className: o.confirmClose,
                          onClick: bt,
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

const de = () =>
  u("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: [
      u("path", {
        d: "m9.06 11.9 8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08",
      }),
      u("path", {
        d: "M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1.08 1.1 2.49 2.02 4 2.02 2.2 0 4-1.8 4-4.04a3.01 3.01 0 0 0-3-3.02z",
      }),
    ],
  });

const he = () =>
  u("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: [
      u("path", {
        d: "m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21",
      }),
      u("path", { d: "M22 21H7" }),
      u("path", { d: "m5 11 9 9" }),
    ],
  });

const fe = () =>
  u("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: u("line", { x1: "5", y1: "19", x2: "19", y2: "5" }),
  });

const me = () =>
  u("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: u("rect", {
      x: "3",
      y: "3",
      width: "18",
      height: "18",
      rx: "2",
    }),
  });

const ve = () =>
  u("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: u("circle", { cx: "12", cy: "12", r: "10" }),
  });

const ye = () =>
  u("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: [
      u("path", { d: "M3 7v6h6" }),
      u("path", { d: "M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13" }),
    ],
  });

const we = () =>
  u("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: [
      u("path", { d: "M21 7v6h-6" }),
      u("path", { d: "M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7" }),
    ],
  });

const ge = () =>
  u("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: [
      u("path", { d: "M3 6h18" }),
      u("path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" }),
      u("path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" }),
    ],
  });

const xe = () =>
  u("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: [
      u("circle", { cx: "11", cy: "11", r: "8" }),
      u("line", { x1: "21", y1: "21", x2: "16.65", y2: "16.65" }),
      u("line", { x1: "11", y1: "8", x2: "11", y2: "14" }),
      u("line", { x1: "8", y1: "11", x2: "14", y2: "11" }),
    ],
  });

const pe = () =>
  u("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: [
      u("circle", { cx: "11", cy: "11", r: "8" }),
      u("line", { x1: "21", y1: "21", x2: "16.65", y2: "16.65" }),
      u("line", { x1: "8", y1: "11", x2: "14", y2: "11" }),
    ],
  });

export { DrawingCanvas as DrawingCanvas };
