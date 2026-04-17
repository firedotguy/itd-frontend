import {
  d,
  A,
  q,
  al,
  ao as y_1,
  am,
  an,
  a,
  a9,
  M,
  ao,
  ap,
  k,
  aj,
  aq,
} from "./index-BNG2MjJY.js";
const gt = 50;
function zt(m, w, B) {
  const [O, N] = d([]);
  const [R, Y] = d(-1);
  const D = A(-1);
  D.current = R;

  const A = q(() => {
    const u = w.current;
    const s = m.current;
    if (!u || !s) {
      return;
    }
    const f = u.getImageData(0, 0, s.width, s.height);

    N((d) => {
      const T = d.slice(0, D.current + 1);
      T.push(f);

      if (T.length > gt) {
        T.shift();
      }

      return T;
    });

    Y((d) => Math.min(d + 1, gt - 1));
  }, [m, w]);

  const U = q(() => {
    N((u) => {
      const s = D.current;
      if (s <= 0) {
        return u;
      }
      const f = w.current;
      if (!f) {
        return u;
      }
      const d = u[s - 1];

      if (d) {
        f.putImageData(d, 0, 0);
        D.current = s - 1;
        Y(s - 1);
        B.current?.();
      }

      return u;
    });
  }, [w, B]);

  const ct = q(() => {
    N((u) => {
      const s = D.current;
      if (s >= u.length - 1) {
        return u;
      }
      const f = w.current;
      if (!f) {
        return u;
      }
      const d = u[s + 1];

      if (d) {
        f.putImageData(d, 0, 0);
        D.current = s + 1;
        Y(s + 1);
        B.current?.();
      }

      return u;
    });
  }, [w, B]);

  const _ = q((u, s) => {
    const f = u.getImageData(0, 0, s.width, s.height);
    N([f]);
    Y(0);
    D.current = 0;
  }, []);

  return {
    historyIndex: R,
    canUndo: R > 0,
    canRedo: R < O.length - 1,
    saveToHistory: A,
    undo: U,
    redo: ct,
    initHistory: _,
  };
}
const Kt = {
  post: { width: 800, height: 500 },
  banner: { width: 1100, height: 380 },
};

export function DrawingCanvas({
  isOpen: m,
  onClose: w,
  onSave: B,
  mode: O = "post",
  saveButtonText: N,
}) {
  const [R, Y] = d(false);
  const [D, A] = d(false);

  const U = q(() => {
    A(true);
    return false;
  }, []);

  const ct = q(() => {
    A(false);
    w();
  }, [w]);

  const _ = q(() => {
    A(false);
  }, []);

  const u = A(null);
  const s = A(null);
  const f = A(null);
  const d = A(null);
  const T = A(1);
  const [b, xt] = d("brush");
  const [q, pt] = d("#000000");
  const [H, Ct] = d(4);
  const Z = A(false);
  const S = A(null);
  const { width: g, height: x } = Kt[O];

  const {
    zoom: dt,
    panOffset: Mt,
    zoomRef: E,
    panOffsetRef: M,
    isPanningRef: J,
    panStartRef: j,
    pinchRef: F,
    updateTransform: p,
    zoomToPoint: X,
    fitAndCenter: Rt,
    zoomIn: Dt,
    zoomOut: Tt,
    zoomReset: bt,
  } = al(s, g, x);

  const V = q(() => {
    const t = u.current;
    const n = f.current;
    if (!t || !n) {
      return;
    }
    const e = t.getContext("2d");
    if (!e) {
      return;
    }
    const i = T.current;
    const a = t.width / i;
    const o = t.height / i;
    const c = E.current;
    const l = M.current;
    e.save();
    e.setTransform(i, 0, 0, i, 0, 0);
    e.clearRect(0, 0, a, o);
    e.translate(l.x, l.y);
    e.scale(c, c);
    e.shadowColor = "rgba(0, 0, 0, 0.15)";
    e.shadowBlur = 20 / c;
    e.shadowOffsetX = 0;
    e.shadowOffsetY = 4 / c;
    e.fillStyle = "#FFFFFF";
    e.fillRect(0, 0, g, x);
    e.shadowColor = "transparent";
    e.shadowBlur = 0;
    e.shadowOffsetY = 0;
    e.imageSmoothingEnabled = c < 2;
    e.drawImage(n, 0, 0, g, x);
    e.imageSmoothingEnabled = true;
    const r = S.current;
    if (r) {
      e.strokeStyle = r.color;
      e.lineWidth = r.lineWidth;
      e.lineCap = "round";
      e.lineJoin = "round";
      e.beginPath();

      if (r.tool === "line") {
        e.moveTo(r.start.x, r.start.y);
        e.lineTo(r.current.x, r.current.y);
      } else if (r.tool === "rectangle") {
        e.rect(
          r.start.x,
          r.start.y,
          r.current.x - r.start.x,
          r.current.y - r.start.y
        );
      } else if (r.tool === "circle") {
        const z = Math.hypot(r.current.x - r.start.x, r.current.y - r.start.y);
        e.arc(r.start.x, r.start.y, z, 0, Math.PI * 2);
      }

      e.stroke();
    }
    e.restore();
  }, [g, x]);

  const k = A(V);
  k.current = V;

  const {
    saveToHistory: $,
    undo: st,
    redo: G,
    canUndo: Et,
    canRedo: Ft,
    initHistory: St,
  } = zt(f, d, k);

  const ht = Rt;

  y_1(() => {
    if (!m || !u.current || !u.current || !s.current) {
      return;
    }
    const t = u.current;
    const n = s.current;
    const e = window.devicePixelRatio || 1;
    T.current = e;
    const i = n.getBoundingClientRect();
    t.width = i.width * e;
    t.height = i.height * e;
    const a = document.createElement("canvas");
    a.width = g * e;
    a.height = x * e;
    const o = a.getContext("2d", { willReadFrequently: true });
    if (!o) {
      return;
    }
    o.scale(e, e);
    o.fillStyle = "#FFFFFF";
    o.fillRect(0, 0, g, x);
    f.current = a;
    d.current = o;
    St(o, a);
    let c = true;
    const l = new ResizeObserver((z) => {
      for (const et of z) {
        const { width: L, height: K } = et.contentRect;
        if (!(L === 0 || K === 0)) {
          t.width = L * T.current;
          t.height = K * T.current;

          if (c) {
            const nt = (L - 64) / g;
            const ut = (K - 64) / x;
            const W = Math.max(am, Math.min(nt, ut));
            p(W, { x: (L - g * W) / 2, y: (K - x * W) / 2 });
          }

          k.current();
        }
      }
    });
    l.observe(n);
    const r = setTimeout(() => {
      c = false;
    }, 500);
    return () => {
      clearTimeout(r);
      l.disconnect();
      f.current = null;
      d.current = null;
    };
  }, [m, g, x]);

  y_1(() => {
    V();
  }, [dt, Mt, V]);

  const Q = q((t) => {
    const n = u.current;
    if (!n) {
      return { x: 0, y: 0 };
    }
    const e = n.getBoundingClientRect();
    let i;
    let a;

    if ("touches" in t) {
      i = t.touches[0].clientX;
      a = t.touches[0].clientY;
    } else {
      i = t.clientX;
      a = t.clientY;
    }

    return {
      x: (i - e.left - M.current.x) / E.current,
      y: (a - e.top - M.current.y) / E.current,
    };
  }, []);

  const ft = q(
    (t) => {
      if (
        ("button" in t && t.button !== 0) ||
        ("touches" in t && t.touches.length > 1)
      ) {
        return;
      }
      t.preventDefault();
      const n = d.current;
      if (!n) {
        return;
      }
      const e = Q(t);
      Z.current = true;

      if (b === "brush" || b === "eraser") {
        n.beginPath();
        n.moveTo(e.x, e.y);
        n.lineCap = "round";
        n.lineJoin = "round";
        n.lineWidth = H;
        n.strokeStyle = b === "eraser" ? "#FFFFFF" : q;
      } else {
        S.current = {
          start: e,
          current: e,
          tool: b,
          color: q,
          lineWidth: H,
        };
      }
    },
    [b, q, H, Q]
  );

  const it = q(
    (t) => {
      if (!Z.current || ("touches" in t && t.touches.length > 1)) {
        return;
      }
      t.preventDefault();
      const n = Q(t);
      if (b === "brush" || b === "eraser") {
        const e = d.current;
        if (!e) {
          return;
        }
        e.lineTo(n.x, n.y);
        e.stroke();
        k.current();
      } else {
        if (S.current) {
          S.current = { ...S.current, current: n };
          k.current();
        }
      }
    },
    [b, Q]
  );

  const tt = q(() => {
    if (!Z.current) {
      return;
    }
    Z.current = false;
    const t = S.current;
    if (t) {
      const n = d.current;
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
      S.current = null;
    }
    $();
    k.current();
  }, [$]);

  const mt = A(it);
  const vt = A(tt);
  mt.current = it;
  vt.current = tt;
  const Yt = q((t) => {
    if (t.button === 1) {
      t.preventDefault();
      J.current = true;
      j.current = { x: t.clientX, y: t.clientY };
    }
  }, []);

  y_1(() => {
    if (!m) {
      return;
    }

    const t = (e) => {
      if (J.current) {
        const i = e.clientX - j.current.x;
        const a = e.clientY - j.current.y;
        j.current = { x: e.clientX, y: e.clientY };
        const o = M.current;
        p(E.current, { x: o.x + i, y: o.y + a });
        return;
      }
      mt.current(e);
    };

    const n = () => {
      if (J.current) {
        J.current = false;
        return;
      }
      vt.current();
    };

    window.addEventListener("mousemove", t);
    window.addEventListener("mouseup", n);

    return () => {
      window.removeEventListener("mousemove", t);
      window.removeEventListener("mouseup", n);
    };
  }, [m, p]);

  y_1(() => {
    if (!m) {
      return;
    }
    const t = (n) => {
      if ((n.ctrlKey || n.metaKey) && n.key === "z") {
        n.preventDefault();
        n.shiftKey ? G() : st();
      }

      if ((n.ctrlKey || n.metaKey) && n.key === "y") {
        n.preventDefault();
        G();
      }

      if ((n.ctrlKey || n.metaKey) && (n.key === "=" || n.key === "+")) {
        n.preventDefault();
        const e = s.current;
        if (!e) {
          return;
        }
        const i = e.getBoundingClientRect();
        const a = i.width / 2;
        const o = i.height / 2;
        const c = E.current;
        const l = Math.min(aq, c + an);
        p(l, X(c, l, M.current, a, o));
      }

      if ((n.ctrlKey || n.metaKey) && n.key === "-") {
        n.preventDefault();
        const e = s.current;
        if (!e) {
          return;
        }
        const i = e.getBoundingClientRect();
        const a = i.width / 2;
        const o = i.height / 2;
        const c = E.current;
        const l = Math.max(am, c - an);
        p(l, X(c, l, M.current, a, o));
      }

      if ((n.ctrlKey || n.metaKey) && n.key === "0") {
        n.preventDefault();
        ht();
      }
    };
    window.addEventListener("keydown", t);

    return () => window.removeEventListener("keydown", t);
  }, [m, st, G, p, X, ht]);

  y_1(() => {
    if (!m) {
      return;
    }
    const t = s.current;
    if (!t) {
      return;
    }
    const n = (e) => {
      e.preventDefault();
      const i = t.getBoundingClientRect();
      const a = e.clientX - i.left;
      const o = e.clientY - i.top;
      if (e.ctrlKey || e.metaKey) {
        const c = E.current;
        const l = e.deltaY > 0 ? -an : an;
        const r = Math.min(aq, Math.max(am, c + l));
        if (r === c) {
          return;
        }
        p(r, X(c, r, M.current, a, o));
      } else {
        p(E.current, {
          x: M.current.x - e.deltaX,
          y: M.current.y - e.deltaY,
        });
      }
    };
    t.addEventListener("wheel", n, { passive: false });

    return () => t.removeEventListener("wheel", n);
  }, [m, p, X]);

  y_1(() => {
    if (!m) {
      return;
    }
    const t = s.current;
    if (!t) {
      return;
    }

    const n = (o, c) =>
      Math.hypot(c.clientX - o.clientX, c.clientY - o.clientY);

    const e = (o) => {
      if (o.touches.length === 2) {
        o.preventDefault();

        if (Z.current) {
          Z.current = false;
          S.current = null;
        }

        const c = t.getBoundingClientRect();
        const l = o.touches[0];
        const r = o.touches[1];
        F.current = {
          dist: n(l, r),
          midX: (l.clientX + r.clientX) / 2 - c.left,
          midY: (l.clientY + r.clientY) / 2 - c.top,
        };
      }
    };

    const i = (o) => {
      if (o.touches.length === 2 && F.current) {
        o.preventDefault();
        const c = t.getBoundingClientRect();
        const l = o.touches[0];
        const r = o.touches[1];
        const z = n(l, r);
        const et = (l.clientX + r.clientX) / 2 - c.left;
        const L = (l.clientY + r.clientY) / 2 - c.top;
        const K = z / F.current.dist;
        const at = E.current;
        const nt = Math.min(aq, Math.max(am, at * K));
        const ut = et - F.current.midX;
        const W = L - F.current.midY;
        const yt = X(at, nt, M.current, F.current.midX, F.current.midY);
        p(nt, { x: yt.x + ut, y: yt.y + W });
        F.current = { dist: z, midX: et, midY: L };
      }
    };

    const a = (o) => {
      if (o.touches.length < 2) {
        F.current = null;
      }
    };

    t.addEventListener("touchstart", e, { passive: false });
    t.addEventListener("touchmove", i, { passive: false });
    t.addEventListener("touchend", a);
    t.addEventListener("touchcancel", a);

    return () => {
      t.removeEventListener("touchstart", e);
      t.removeEventListener("touchmove", i);
      t.removeEventListener("touchend", a);
      t.removeEventListener("touchcancel", a);
    };
  }, [m, p, X]);

  const Xt = q(() => {
    const t = d.current;

    if (t) {
      t.fillStyle = "#FFFFFF";
      t.fillRect(0, 0, g, x);
      $();
      k.current();
    }
  }, [g, x, $]);

  const kt = async () => {
    const t = f.current;
    if (!t || R) {
      return;
    }
    const n = t.toDataURL("image/png");
    Y(true);
    try {
      await B(n);
      w();
    } catch (e) {
      console.error("Failed to save drawing:", e);
    } finally {
      Y(false);
    }
  };

  return m
    ? a(k, {
        children: [
          a(M, {
            onClose: w,
            onBeforeClose: U,
            showHeader: false,
            contentClassName: ao.modalContent,
            size: "wide",
            children: a("div", {
              className: ao.container,
              children: [
                a(ap, {
                  tool: b,
                  color: q,
                  brushSize: H,
                  zoom: dt,
                  canUndo: Et,
                  canRedo: Ft,
                  onToolChange: xt,
                  onColorChange: pt,
                  onBrushSizeChange: Ct,
                  onZoomIn: Dt,
                  onZoomOut: Tt,
                  onZoomReset: bt,
                  onUndo: st,
                  onRedo: G,
                  onClear: Xt,
                }),
                a("div", {
                  ref: s,
                  className: ao.canvasContainer,
                  onMouseDown: Yt,
                  children: a("canvas", {
                    ref: u,
                    className: ao.viewport,
                    onMouseDown: ft,
                    onTouchStart: ft,
                    onTouchMove: it,
                    onTouchEnd: tt,
                    onTouchCancel: tt,
                  }),
                }),
                a("div", {
                  className: ao.actions,
                  children: [
                    a("button", {
                      className: ao.cancelButton,
                      onClick: () => U(),
                      disabled: R,
                      children: "Отмена",
                    }),
                    a("button", {
                      className: ao.saveButton,
                      onClick: kt,
                      disabled: R,
                      children: R
                        ? a(k, { children: [a(aj, {}), "Загрузка..."] })
                        : N ||
                          (O === "banner"
                            ? "Загрузить баннер"
                            : "Добавить рисунок"),
                    }),
                  ],
                }),
              ],
            }),
          }),
          D &&
            a9(
              a("div", {
                className: ao.confirmOverlay,
                onClick: _,
                children: a("div", {
                  className: ao.confirmDialog,
                  onClick: (t) => t.stopPropagation(),
                  children: [
                    a("p", {
                      className: ao.confirmText,
                      children:
                        "Вы действительно хотите закрыть рисовалку? Ваши изменения будут не сохранены.",
                    }),
                    a("div", {
                      className: ao.confirmActions,
                      children: [
                        a("button", {
                          className: ao.confirmCancel,
                          onClick: _,
                          children: "Отмена",
                        }),
                        a("button", {
                          className: ao.confirmClose,
                          onClick: ct,
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

export { DrawingCanvas as DrawingCanvas };
