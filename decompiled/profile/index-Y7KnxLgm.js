import {
  A,
  d,
  B as q_1,
  s as s_1,
  y,
  u,
  a,
  B,
  M,
  b,
  c,
  i,
  a as a_1,
  $,
  S,
  f,
  U,
  I,
  p,
  g,
  m,
  D,
  h,
  C,
  q_1 as q_1_1,
  k,
  j,
  l,
  t,
  n,
  o,
  r,
  v,
  w,
  x as x_1,
  z,
  E,
  R,
  y as y_1,
  P,
  H as H_1,
  _,
  p as p_1,
  K,
  L,
  N,
  T,
  O,
  Q,
  V,
  W as W_1,
} from "./index-BNG2MjJY.js";

import { C as C_1 } from "./index-FKEGswqY.js";
import { I as I_1, a as a_2 } from "./IconCheck-BRYRONNA.js";
import { I as I_2, a as a_3 } from "./IconPerson-BnPDelda.js";
import { I as I_3 } from "./IconLogout-BsNXC1Tm.js";
const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/index-Clm4iso2.js",
      "assets/index-BNG2MjJY.js",
      "assets/index-C4LZx-s-.css",
    ])
) => i.map((i) => d[i]);
function vn(n, o) {
  const l = A(null);
  const u = `${n || "me"}-${o}`;
  const [t, i] = d([]);
  const [c, h] = d(true);
  const [P, m] = d(false);
  const [L, k] = d(null);
  const [N, b] = d(new Map());
  const [S, M] = d(new Set());
  const I = A(null);

  if (l.current !== u) {
    l.current = u;
    i([]);
    h(true);
    k(null);
    b(new Map());
    M(new Set());
  }

  const g = q_1(
    async (r) => {
      const E = !r;

      if (E) {
        h(true);
      } else {
        m(true);
      }

      try {
        let p;
        switch (o) {
          case "followers": {
            if (!n) {
              throw new Error("userId required for followers");
            }
            p = await s_1.getFollowers(n, { limit: 20, cursor: r });
            break;
          }
          case "following": {
            if (!n) {
              throw new Error("userId required for following");
            }
            p = await s_1.getFollowing(n, { limit: 20, cursor: r });
            break;
          }
          case "pending-incoming":
          case "pending-outgoing": {
            p = { data: [], nextCursor: null };
            break;
          }
        }
        const O = (v) => {
          const a = new Map();
          for (const w of v) {
            if (w.interaction.isFollowing) {
              a.set(w.userId, "following");
            } else if (w.interaction.hasOutgoingRequest) {
              a.set(w.userId, "requested");
            } else {
              a.set(w.userId, null);
            }
          }
          return a;
        };

        if (E) {
          i(p.data);
          b(O(p.data));
        } else {
          i((v) => {
            const a = new Set(v.map((w) => w.userId));
            return [...v, ...p.data.filter((w) => !a.has(w.userId))];
          });

          b((v) => {
            const a = new Map(v);
            for (const w of p.data) {
              if (!a.has(w.userId)) {
                if (w.interaction.isFollowing) {
                  a.set(w.userId, "following");
                } else if (w.interaction.hasOutgoingRequest) {
                  a.set(w.userId, "requested");
                } else {
                  a.set(w.userId, null);
                }
              }
            }
            return a;
          });
        }

        k(p.nextCursor);
      } catch (p) {
        console.error("Failed to fetch users:", p);
      } finally {
        h(false);
        m(false);
      }
    },
    [n, o]
  );
  y(() => {
    g();
  }, [g]);
  const B = q_1(() => {
    if (L) {
      g(L);
    }
  }, [L, g]);
  u({ sentinelRef: I, hasMore: !!L, isLoading: P, onLoadMore: B });
  const D = q_1(
    async (r, E) => {
      E.stopPropagation();

      if (!S.has(r)) {
        M((p) => new Set(p).add(r));
        try {
          const p = N.get(r);
          if (p === "following" || p === "requested") {
            await s_1.unfollowUser(r);

            b((O) => {
              const v = new Map(O);
              v.set(r, null);
              return v;
            });
          } else {
            const O = await s_1.followUser(r);
            b((v) => {
              const a = new Map(v);
              a.set(r, O);
              return a;
            });
          }
        } catch (p) {
          console.error("Failed to toggle follow:", p);
        } finally {
          M((p) => {
            const O = new Set(p);
            O.delete(r);
            return O;
          });
        }
      }
    },
    [N, S]
  );
  return {
    users: t,
    isLoading: c,
    isLoadingMore: P,
    nextCursor: L,
    loadMoreRef: I,
    userFollowStatus: N,
    loadingFollowIds: S,
    handleToggleFollow: D,
  };
}

const wn = ({ size: n = 18 }) =>
  a("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: n,
    height: n,
    fill: "none",
    viewBox: "0 0 18 18",
    children: [
      a("path", {
        fill: "currentColor",
        d: "M7.17 14.288c.03.12.064.238.102.354.213.661.543 1.251.926 1.772a3.964 3.964 0 0 1-2.036-1.164.573.573 0 0 1-.094-.67.654.654 0 0 1 .626-.328c.16.014.32.025.477.036ZM9.002 1.5c3.602 0 5.222 3.092 5.222 5.286 0 .277-.008.517-.015.74-.006.202-.011.384-.01.56-.253.05-.49.126-.706.213a3.832 3.832 0 0 0-.803-.23v.001a5.083 5.083 0 0 0-2.274.149l-.009.003-.01.003c-2.594.808-3.54 3.168-3.364 5.22-1.696-.11-3.138-.427-3.744-1.285-.346-.489-.38-1.091-.101-1.787.651-1.392.635-1.909.605-2.848a21.233 21.233 0 0 1-.015-.739c0-2.194 1.621-5.286 5.224-5.286Z",
      }),
      a("path", {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M17.758 11.709a2.743 2.743 0 0 0-1.751-1.575 3.024 3.024 0 0 0-1.38-.095c-.423.069-.806.313-1.128.54-.311-.218-.704-.466-1.129-.535a3.083 3.083 0 0 0-1.378.09c-1.768.55-2.312 2.412-1.818 3.893.77 2.377 4.084 3.888 4.225 3.952a.247.247 0 0 0 .2 0c.139-.063 3.404-1.548 4.22-3.95.261-.783.239-1.607-.061-2.32Z",
        clipRule: "evenodd",
      }),
    ],
  });

const Se = ({ size: n = 18 }) =>
  a("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: n,
    height: n,
    fill: "none",
    viewBox: "0 0 18 18",
    children: [
      a("path", {
        fill: "currentColor",
        d: "M6.694 14.252c.453.038.891.066 1.317.084.034.63.168 1.26.406 1.864-.021.07-.043.153-.065.243a3.946 3.946 0 0 1-2.19-1.193.573.573 0 0 1-.094-.67.654.654 0 0 1 .626-.328ZM9.001 1.5c3.602 0 5.222 3.092 5.222 5.286 0 .277-.008.517-.015.74-.005.17-.01.327-.01.477a5.988 5.988 0 0 0-4.44 1.75l-.001.002a6.01 6.01 0 0 0-1.734 3.733c-2.108-.05-4.014-.307-4.735-1.328-.346-.489-.38-1.091-.101-1.787.651-1.392.635-1.909.605-2.848a21.233 21.233 0 0 1-.015-.739c0-2.194 1.621-5.286 5.224-5.286Zm1.963 9.894a3.977 3.977 0 0 0-.004.004l.004-.004Z",
      }),
      a("path", {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M16.83 11.17a4.008 4.008 0 0 0-5.659 0 4.017 4.017 0 0 0-.805 4.506c.077.192.132.337.132.456 0 .141-.06.316-.117.486-.111.327-.238.698.034.969.27.271.642.143.97.031.167-.057.34-.117.48-.117.122 0 .277.062.455.134a4.019 4.019 0 0 0 4.51-.807 4.007 4.007 0 0 0 0-5.659Z",
        clipRule: "evenodd",
      }),
    ],
  });

const Nn = ({ size: n = 18 }) =>
  a("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: n,
    height: n,
    fill: "none",
    viewBox: "0 0 18 18",
    children: [
      a("path", {
        fill: "currentColor",
        d: "M6.694 14.252c.479.04.941.069 1.389.087a4.72 4.72 0 0 0 .067 2.063 3.968 3.968 0 0 1-1.988-1.152.573.573 0 0 1-.094-.67.654.654 0 0 1 .626-.328ZM9.001 1.5c3.269 0 4.905 2.546 5.18 4.657-1.042.362-1.842 1.336-1.842 2.559v1.764c-1.79.208-3.352 1.368-4.009 3.012-2.228-.033-4.286-.261-5.042-1.332-.346-.489-.38-1.091-.101-1.787.651-1.392.635-1.909.605-2.848a21.233 21.233 0 0 1-.015-.739c0-2.194 1.621-5.286 5.224-5.286Zm3.919 10.944a2.894 2.894 0 0 1 .191.007l-.191-.007Z",
      }),
      a("path", {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M15.835 15.172c0-.01.006-.018.006-.028v-4.477a3.56 3.56 0 0 0 1.259.5c.404.077.801-.17.885-.556.083-.387-.18-.764-.586-.842-1.136-.22-1.591-1.27-1.608-1.31a.756.756 0 0 0-.838-.446.725.725 0 0 0-.614.703v4.094a2.99 2.99 0 0 0-1.42-.365c-1.61 0-2.919 1.246-2.919 2.778C10 16.754 11.31 18 12.92 18c1.61 0 2.92-1.245 2.92-2.777 0-.018-.005-.033-.005-.051Z",
        clipRule: "evenodd",
      }),
    ],
  });

const bn = ({ size: n = 18 }) =>
  a("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: n,
    height: n,
    fill: "none",
    viewBox: "0 0 18 18",
    children: [
      a("path", {
        fill: "currentColor",
        d: "M6.694 14.252C7.151 14.291 7.593 14.318 8.021 14.336 8.121 15.23 8.613 16.004 9.322 16.484 9.215 16.494 9.106 16.5 8.997 16.5H8.995C7.933 16.5 6.927 16.055 6.162 15.25 6.077 15.163 6.023 15.051 6.006 14.931 5.989 14.81 6.011 14.687 6.068 14.58 6.186 14.36 6.439 14.233 6.694 14.252ZM9.001 1.5C12.603 1.5 14.223 4.592 14.223 6.786 14.223 7.063 14.216 7.303 14.208 7.525 14.203 7.697 14.199 7.855 14.198 8.007 14.133 8.003 14.067 8 14 8 12.343 8 11 9.343 11 11 9.517 11 8.287 12.076 8.045 13.489 5.928 13.44 4.012 13.185 3.288 12.16 2.942 11.671 2.908 11.069 3.187 10.373 3.838 8.981 3.822 8.464 3.792 7.525 3.784 7.303 3.777 7.062 3.777 6.786 3.777 4.592 5.398 1.5 9.001 1.5ZM13 11C13 10.448 13.448 10 14 10 14.552 10 15 10.448 15 11V17C15 17.552 14.552 18 14 18 13.448 18 13 17.552 13 17V11Z",
      }),
      a("path", {
        fill: "currentColor",
        d: "M11 15C10.4477 15 10 14.5523 10 14C10 13.4477 10.4477 13 11 13H17C17.5523 13 18 13.4477 18 14C18 14.5523 17.5523 15 17 15H11Z",
      }),
    ],
  });

const yn = ({ size: n = 48 }) =>
  a("svg", {
    width: n,
    height: n,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: [
      a("polygon", { points: "23 7 16 12 23 17 23 7" }),
      a("rect", {
        x: "1",
        y: "5",
        width: "15",
        height: "14",
        rx: "2",
        ry: "2",
      }),
    ],
  });

const Cn = ({ size: n = 24 }) =>
  a("svg", {
    width: n,
    height: n,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      a("circle", {
        cx: "12",
        cy: "12",
        r: "9",
        stroke: "currentColor",
        strokeWidth: "2",
      }),
      a("path", {
        d: "M5.5 5.5L18.5 18.5",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
      }),
    ],
  });

const Pn = () =>
  a("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "16",
    fill: "none",
    children: a("path", {
      stroke: "currentColor",
      "stroke-width": "1.333",
      d: "M12.667 2.667H3.333C2.597 2.667 2 3.264 2 4v9.333c0 .737.597 1.334 1.333 1.334h9.334c.736 0 1.333-.597 1.333-1.334V4c0-.736-.597-1.333-1.333-1.333ZM10.666 1.333V4M5.333 1.333V4M2 6.667h12",
    }),
  });

const kn = ({ size: n = 18 }) =>
  a("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: n,
    height: n,
    fill: "none",
    viewBox: "0 0 18 18",
    children: a("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "m5 7 4 4 4-4",
    }),
  });

const In = ({ size: n = 48 }) =>
  a("svg", {
    width: n,
    height: n,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: [
      a("circle", { cx: "12", cy: "12", r: "10" }),
      a("polyline", { points: "12 6 12 12 16 14" }),
    ],
  });

const Sn = ({ size: n = 24 }) =>
  a("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: n,
    height: n,
    fill: "none",
    viewBox: "0 0 24 24",
    children: a("path", {
      fill: "currentColor",
      fillRule: "evenodd",
      d: "M18.723 10.043a.918.918 0 0 0-.658-.261c-1.069 0-1.939.832-1.939 1.853 0 .015 0 .049-.004.06l-.008 1.876c0 .22-.18.392-.41.392a.397.397 0 0 1-.41-.392V5.948c0-.366-.153-.722-.42-.98-.548-.52-1.48-.523-2.045.003-.27.27-.42.618-.42.977v5.034a.401.401 0 0 1-.409.391c-.219 0-.41-.182-.41-.391v-6.61a1.342 1.342 0 0 0-.422-.968 1.408 1.408 0 0 0-.471-.3 1.513 1.513 0 0 0-1.098-.001 1.426 1.426 0 0 0-.783.747c-.072.156-.11.342-.11.522v6.61a.401.401 0 0 1-.41.391c-.219 0-.41-.182-.41-.391V7.126c0-.736-.671-1.382-1.438-1.382C5.677 5.744 5 6.385 5 7.116v7.276c.023 1.768.759 3.426 2.074 4.67A7.162 7.162 0 0 0 12 21a7.16 7.16 0 0 0 4.926-1.937c1.315-1.245 2.052-2.907 2.074-4.684v-3.704c0-.241-.097-.461-.277-.632Z",
      clipRule: "evenodd",
    }),
  });

const Ln = ({ size: n = 24 }) =>
  a("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: n,
    height: n,
    fill: "none",
    viewBox: "0 0 24 24",
    children: a("path", {
      fill: "currentColor",
      fillRule: "evenodd",
      d: "M18.532 5.497C17.905 4.83 12.91 3 12 3c-.91 0-5.906 1.83-6.532 2.498-.497.533-.491.944-.452 3.218.016.923.037 2.18.037 3.919 0 6.07 6.75 8.322 6.818 8.345a.424.424 0 0 0 .258 0c.068-.023 6.818-2.276 6.818-8.345 0-1.735.021-2.99.037-3.912.038-2.28.046-2.691-.453-3.226Z",
      clipRule: "evenodd",
    }),
  });

const Tn = "NayQ";
const Mn = "LH4F";
const $n = "tlfS";
const xn = "rPfd";
const Bn = "ZKVr";
const An = "yzU1";
const Un = "PjXW";
const En = "kfDQ";
const Fn = "f0LH";
const Rn = "LBlu";

const ce = {
  inputWrapper: Tn,
  label: Mn,
  hint: $n,
  input: xn,
  error: Bn,
  small: An,
  medium: Un,
  large: En,
  default: "vUX4",
  outline: Fn,
  errorText: Rn,
};

function pe({
  value: n,
  onChange: o,
  label: l,
  hint: u,
  error: t,
  size: i = "medium",
  variant: c = "default",
  className: h,
  ...P
}) {
  const m = (L) => {
    o?.(L.currentTarget.value);
  };
  return a("div", {
    className: ce.inputWrapper,
    children: [
      l &&
        a("label", {
          className: ce.label,
          children: [l, u && a("span", { className: ce.hint, children: u })],
        }),
      a("input", {
        className: `${ce.input} ${ce[i]} ${ce[c]} ${t ? ce.error : ""} ${
          h || ""
        }`,
        value: n,
        onInput: m,
        ...P,
      }),
      t && a("span", { className: ce.errorText, children: t }),
    ],
  });
}
const Dn = "CO1T";
const On = "gEsD";
const zn = "S8G7";
const Vn = "XWnV";
const jn = "y8d2";
const Wn = "UxkA";
const Hn = "y5zU";

const ne = {
  form: Dn,
  field: On,
  label: zn,
  hint: Vn,
  fieldError: jn,
  error: Wn,
  actions: Hn,
};

function qn({ onClose: n, onBack: o }) {
  const [l, u] = d("");
  const [t, i] = d("");
  const [c, h] = d("");
  const [P, m] = d(false);
  const [L, k] = d(null);
  const [N, b] = d({});

  const S = async (I) => {
    I.preventDefault();
    k(null);
    b({});

    if (t !== c) {
      b({ confirmPassword: "Пароли не совпадают" });
      return;
    }

    if (t.length < 10) {
      b({ newPassword: "Минимум 10 символов" });
      return;
    }
    if (t.length > 128) {
      b({ newPassword: "Максимум 128 символов" });
      return;
    }
    if (!/^[\x21-\x7E]+$/.test(t)) {
      b({ newPassword: "Только латиница, цифры и знаки пунктуации" });
      return;
    }
    m(true);
    try {
      await b.changePassword({ currentPassword: l, newPassword: t });
      await c.getState().logout();
      n();
    } catch (g) {
      if (i(g)) {
        if (g.code === "CURRENT_PASSWORD_INCORRECT") {
          b({ currentPassword: "Неверный текущий пароль" });
        } else if (g.errors) {
          const B = {};
          for (const [D, r] of Object.entries(g.errors)) {
            B[D] = r[0] || "Ошибка валидации";
          }
          b(B);
        } else {
          k(g.message || "Не удалось сменить пароль");
        }
      } else {
        k("Не удалось сменить пароль");
      }
    } finally {
      m(false);
    }
  };

  const M = l.length > 0 && t.length >= 10 && c.length > 0;
  return a(M, {
    onClose: o,
    title: "Смена пароля",
    children: a("form", {
      onSubmit: S,
      className: ne.form,
      children: [
        a("div", {
          className: ne.field,
          children: [
            a("label", { className: ne.label, children: "Текущий пароль" }),
            a(pe, {
              type: "password",
              value: l,
              onChange: u,
              placeholder: "Введите текущий пароль",
              autoComplete: "current-password",
            }),
            N.currentPassword &&
              a("span", {
                className: ne.fieldError,
                children: N.currentPassword,
              }),
          ],
        }),
        a("div", {
          className: ne.field,
          children: [
            a("label", { className: ne.label, children: "Новый пароль" }),
            a(pe, {
              type: "password",
              value: t,
              onChange: i,
              placeholder: "Введите новый пароль",
              autoComplete: "new-password",
            }),
            a("span", {
              className: ne.hint,
              children: "Минимум 10 символов, латиница, цифры и пунктуация",
            }),
            N.newPassword &&
              a("span", { className: ne.fieldError, children: N.newPassword }),
          ],
        }),
        a("div", {
          className: ne.field,
          children: [
            a("label", {
              className: ne.label,
              children: "Подтверждение пароля",
            }),
            a(pe, {
              type: "password",
              value: c,
              onChange: h,
              placeholder: "Повторите новый пароль",
              autoComplete: "new-password",
            }),
            N.confirmPassword &&
              a("span", {
                className: ne.fieldError,
                children: N.confirmPassword,
              }),
          ],
        }),
        L && a("div", { className: ne.error, children: L }),
        a("div", {
          className: ne.actions,
          children: [
            a(B, {
              type: "button",
              variant: "secondary",
              onClick: o,
              disabled: P,
              children: "Отмена",
            }),
            a(B, {
              type: "submit",
              disabled: !M || P,
              children: P ? "Сохранение..." : "Сменить пароль",
            }),
          ],
        }),
      ],
    }),
  });
}
const Zn = "TXXN";
const _n = "OwF7";
const Gn = "SKDU";
const Xn = "GZJA";
const Kn = "Xqkf";
const Jn = "ubRf";
const Yn = "bid3";
const Qn = "CLVU";
const es = "Va1v";
const ns = "NpDu";
const ss = "NFR9";
const ts = "zXCP";
const as = "LTtv";
const os = "P257";
const is = "juBz";

const W = {
  userListModal: Zn,
  content: _n,
  userList: Gn,
  userItem: Xn,
  clickable: Kn,
  userInfo: Jn,
  displayName: Yn,
  username: Qn,
  followButton: es,
  actionButtons: ns,
  acceptButton: ss,
  rejectButton: ts,
  actionStatus: as,
  empty: os,
  loadMoreSentinel: is,
};

function Le({ userId: n, type: o, title: l, onCountChange: u }) {
  const { closeModal: t } = a_1();

  const i = c((a) => a.profile?.id);

  const {
    users: c,
    isLoading: h,
    isLoadingMore: P,
    nextCursor: m,
    loadMoreRef: L,
    userFollowStatus: k,
    loadingFollowIds: N,
    handleToggleFollow: b,
  } = vn(n, o);

  const [S, M] = d(new Map());
  const [I, g] = d(new Set());
  const B = o === "pending-incoming";
  const D = o === "pending-outgoing";

  const r = q_1(
    (a) => {
      if (a) {
        t();
        $(`/@${a}`);
      }
    },
    [t]
  );

  const E = q_1(
    async (a, w) => {
      w.stopPropagation();

      if (!I.has(a)) {
        console.warn("acceptFollowRequest not implemented in old backend");
      }
    },
    [I]
  );

  const p = q_1(
    async (a, w) => {
      w.stopPropagation();

      if (!I.has(a)) {
        console.warn("removeFollower not implemented in old backend");
      }
    },
    [I]
  );

  const O = q_1(
    async (a, w) => {
      w.stopPropagation();

      if (!I.has(a)) {
        g((z) => new Set(z).add(a));
        try {
          await s_1.unfollowUser(a);

          M((z) => {
            const j = new Map(z);
            j.set(a, "rejected");
            return j;
          });
        } catch (z) {
          console.error("Failed to cancel follow request:", z);
        } finally {
          g((z) => {
            const j = new Set(z);
            j.delete(a);
            return j;
          });
        }
      }
    },
    [I]
  );

  const v = () => {
    switch (o) {
      case "followers": {
        return "Нет подписчиков";
      }
      case "following": {
        return "Нет подписок";
      }
      case "pending-incoming": {
        return "Нет заявок";
      }
      case "pending-outgoing": {
        return "Нет исходящих заявок";
      }
    }
  };

  return a(M, {
    onClose: t,
    title: l,
    className: W.userListModal,
    children: a("div", {
      className: W.content,
      children: h
        ? a(S, {})
        : c.length === 0
        ? a("div", { className: W.empty, children: v() })
        : a("div", {
            className: W.userList,
            children: [
              c.map((a) => {
                const w = k.get(a.userId);
                const z = w === "following";
                const j = w === "requested";
                const K = N.has(a.userId);
                const Z = a.userId === i;
                const Y = S.get(a.userId);
                const Q = I.has(a.userId);

                const C = () =>
                  z ? "Отписаться" : j ? "Отменить" : "Подписаться";

                if (B) {
                  return a(
                    "div",
                    {
                      className: `${W.userItem} ${
                        a.username ? W.clickable : ""
                      }`,
                      onClick: () => r(a.username),
                      children: [
                        a(f, { src: a.avatar, size: "md" }),
                        a("div", {
                          className: W.userInfo,
                          children: [
                            a(U, {
                              name: a.displayName,
                              verified: a.isVerified,
                              pin: a.pin,
                              size: "md",
                              className: W.displayName,
                            }),
                            a.username &&
                              a("span", {
                                className: W.username,
                                children: ["@", a.username],
                              }),
                          ],
                        }),
                        Y === "accepted"
                          ? a("span", {
                              className: W.actionStatus,
                              children: "Принято",
                            })
                          : Y === "rejected"
                          ? a("span", {
                              className: W.actionStatus,
                              children: "Отклонено",
                            })
                          : a("div", {
                              className: W.actionButtons,
                              children: [
                                a(B, {
                                  size: "sm",
                                  variant: "primary",
                                  disabled: Q,
                                  onClick: (A) => E(a.userId, A),
                                  className: W.acceptButton,
                                  children: a(I_1, { size: 16 }),
                                }),
                                a(B, {
                                  size: "sm",
                                  variant: "secondary",
                                  disabled: Q,
                                  onClick: (A) => p(a.userId, A),
                                  className: W.rejectButton,
                                  children: a(I, { size: 16 }),
                                }),
                              ],
                            }),
                      ],
                    },
                    a.userId
                  );
                }

                if (D) {
                  return a(
                    "div",
                    {
                      className: `${W.userItem} ${
                        a.username ? W.clickable : ""
                      }`,
                      onClick: () => r(a.username),
                      children: [
                        a(f, { src: a.avatar, size: "md" }),
                        a("div", {
                          className: W.userInfo,
                          children: [
                            a(U, {
                              name: a.displayName,
                              verified: a.isVerified,
                              pin: a.pin,
                              size: "md",
                              className: W.displayName,
                            }),
                            a.username &&
                              a("span", {
                                className: W.username,
                                children: ["@", a.username],
                              }),
                          ],
                        }),
                        Y === "rejected"
                          ? a("span", {
                              className: W.actionStatus,
                              children: "Отменено",
                            })
                          : a(B, {
                              size: "sm",
                              variant: "secondary",
                              disabled: Q,
                              onClick: (A) => O(a.userId, A),
                              className: W.followButton,
                              children: "Отменить",
                            }),
                      ],
                    },
                    a.userId
                  );
                }

                return a(
                  "div",
                  {
                    className: `${W.userItem} ${a.username ? W.clickable : ""}`,
                    onClick: () => r(a.username),
                    children: [
                      a(f, { src: a.avatar, size: "md" }),
                      a("div", {
                        className: W.userInfo,
                        children: [
                          a(U, {
                            name: a.displayName,
                            verified: a.isVerified,
                            size: "md",
                            className: W.displayName,
                          }),
                          a.username &&
                            a("span", {
                              className: W.username,
                              children: ["@", a.username],
                            }),
                        ],
                      }),
                      !Z &&
                        a(B, {
                          size: "sm",
                          variant: z || j ? "secondary" : "primary",
                          disabled: K,
                          onClick: (A) => b(a.userId, A),
                          className: W.followButton,
                          children: C(),
                        }),
                    ],
                  },
                  a.userId
                );
              }),
              m &&
                a("div", {
                  ref: L,
                  className: W.loadMoreSentinel,
                  children: P && a(S, { size: "sm" }),
                }),
            ],
          }),
    }),
  });
}
const cs = "qAm0";
const ls = "K4wf";
const rs = "Rmnj";
const ds = "bsLL";
const us = "kUyU";
const fe = { checkbox: cs, disabled: ls, input: rs, checkmark: ds, label: us };
function hs({
  checked: n,
  onChange: o,
  label: l,
  disabled: u = false,
  className: t = "",
}) {
  const i = (c) => {
    o(c.target.checked);
  };
  return a("label", {
    className: `${fe.checkbox} ${u ? fe.disabled : ""} ${t}`,
    children: [
      a("input", {
        type: "checkbox",
        checked: n,
        onChange: i,
        disabled: u,
        className: fe.input,
      }),
      a("span", { className: fe.checkmark }),
      l && a("span", { className: fe.label, children: l }),
    ],
  });
}
const ms = "KExv";
const fs = "rI8a";
const gs = "uay7";
const ps = "p9i7";
const vs = "S5qA";
const ws = "Me3V";
const Ns = "by8O";
const bs = "GXKr";
const ys = "VJm6";
const Cs = "XKOE";
const Ps = "Z50n";
const ks = "h4GB";
const Is = "Du8E";
const Ss = "tUXk";
const Ls = "F8ng";
const Ts = "er4W";
const Ms = "ZXGN";
const $s = "R6IC";
const xs = "KBVr";
const Bs = "TJqX";

const H = {
  modal: ms,
  content: fs,
  statusIcon: gs,
  title: ps,
  description: vs,
  rejectionNotice: ws,
  rejectionTitle: Ns,
  rejectionReason: bs,
  fileInput: ys,
  dropzone: Cs,
  dropzoneIcon: Ps,
  dropzoneText: ks,
  dropzoneHint: Is,
  preview: Ss,
  video: Ls,
  removeButton: Ts,
  error: Ms,
  progressBar: $s,
  progressFill: xs,
  actions: Bs,
};

const As = 50 * 1024 * 1024;
const Us = ["video/mp4", "video/webm", "video/quicktime"];
function Es({ onClose: n }) {
  const [o, l] = d("loading");
  const [u, t] = d(null);
  const [i, c] = d(null);
  const [h, P] = d(false);
  const [m, L] = d(false);
  const [k, N] = d(null);
  const [b, S] = d(0);
  const M = A(null);

  y(() => {
    (async () => {
      try {
        const E = await p.getVerificationStatus();
        l(E);
      } catch (E) {
        console.error("Failed to load verification status:", E);
        l(null);
      }
    })();
  }, []);

  y(
    () => () => {
      if (i) {
        URL.revokeObjectURL(i);
      }
    },
    [i]
  );

  const I = (r) => {
    const p = r.target.files?.[0];
    if (p) {
      N(null);

      if (!Us.includes(p.type)) {
        N("Поддерживаются только форматы MP4, WebM и MOV");
        return;
      }

      if (p.size > As) {
        N("Размер видео не должен превышать 50 МБ");
        return;
      }

      if (i) {
        URL.revokeObjectURL(i);
      }

      t(p);
      c(URL.createObjectURL(p));
    }
  };

  const g = () => {
    M.current?.click();
  };

  const B = () => {
    if (i) {
      URL.revokeObjectURL(i);
    }

    t(null);
    c(null);

    if (M.current) {
      M.current.value = "";
    }
  };

  const D = async () => {
    if (!(!u || !h)) {
      L(true);
      N(null);
      S(0);
      try {
        S(30);
        const r = await m.uploadMedia(u);
        S(70);
        await p.submitVerificationRequest(r.url);
        S(100);
        const E = await p.getVerificationStatus();
        l(E);
      } catch (r) {
        console.error("Failed to submit verification request:", r);
        N("Не удалось отправить заявку. Попробуйте позже.");
      } finally {
        L(false);
      }
    }
  };

  if (o === "loading") {
    return a(M, {
      onClose: n,
      showHeader: false,
      className: H.modal,
      children: a("div", { className: H.content, children: a(S, {}) }),
    });
  }

  if (
    o &&
    typeof o == "object" &&
    (o.status === "pending" || o.status === "approved")
  ) {
    return a(M, {
      onClose: n,
      showHeader: false,
      className: H.modal,
      children: a("div", {
        className: H.content,
        children: [
          a("div", {
            className: H.statusIcon,
            children:
              o.status === "approved"
                ? a(g, { size: 48 })
                : a(In, { size: 48 }),
          }),
          a("h2", {
            className: H.title,
            children:
              o.status === "approved"
                ? "Вы верифицированы!"
                : "Заявка на рассмотрении",
          }),
          a("p", {
            className: H.description,
            children:
              o.status === "approved"
                ? "Поздравляем! Ваш аккаунт верифицирован."
                : "Ваша заявка на верификацию находится на рассмотрении. Мы уведомим вас о результате.",
          }),
          a("div", {
            className: H.actions,
            children: a(B, {
              variant: "primary",
              onClick: () => n(),
              children: "Понятно",
            }),
          }),
        ],
      }),
    });
  }

  return a(M, {
    onClose: n,
    showHeader: false,
    className: H.modal,
    children: a("div", {
      className: H.content,
      children: [
        a("h2", { className: H.title, children: "Верификация" }),
        a("p", {
          className: H.description,
          children:
            "Запишите видео, в котором объясните, почему вам нужна галочка и без неё никак.",
        }),
        o?.status === "rejected" &&
          a("div", {
            className: H.rejectionNotice,
            children: [
              a("span", {
                className: H.rejectionTitle,
                children: "Предыдущая заявка отклонена",
              }),
              o.reason &&
                a("span", {
                  className: H.rejectionReason,
                  children: o.reason,
                }),
            ],
          }),
        a("input", {
          ref: M,
          type: "file",
          accept: "video/mp4,video/webm,video/quicktime,.mp4,.webm,.mov",
          onChange: I,
          className: H.fileInput,
        }),
        u
          ? a("div", {
              className: H.preview,
              children: [
                a("video", { src: i, controls: true, className: H.video }),
                a("button", {
                  className: H.removeButton,
                  onClick: B,
                  type: "button",
                  children: a(I, { size: 20 }),
                }),
              ],
            })
          : a("div", {
              className: H.dropzone,
              onClick: g,
              children: [
                a("div", {
                  className: H.dropzoneIcon,
                  children: a(yn, { size: 48 }),
                }),
                a("span", {
                  className: H.dropzoneText,
                  children: "Нажмите, чтобы выбрать видео",
                }),
                a("span", {
                  className: H.dropzoneHint,
                  children: "MP4, WebM или MOV, до 50 МБ",
                }),
              ],
            }),
        k && a("div", { className: H.error, children: k }),
        m &&
          a("div", {
            className: H.progressBar,
            children: a("div", {
              className: H.progressFill,
              style: { width: `${b}%` },
            }),
          }),
        a(hs, {
          checked: h,
          onChange: P,
          disabled: m,
          label:
            "Я соглашаюсь с тем, что моё видео может быть использовано в контенте Nowkie",
        }),
        a("div", {
          className: H.actions,
          children: [
            a(B, {
              variant: "secondary",
              onClick: () => n(),
              disabled: m,
              children: "Отмена",
            }),
            a(B, {
              variant: "primary",
              onClick: D,
              disabled: !u || !h || !h || m,
              children: m ? "Отправка..." : "Отправить заявку",
            }),
          ],
        }),
      ],
    }),
  });
}
const Fs = "BG0Q";
const Rs = "ZxuV";
const Te = { toggle: Fs, active: Rs };
function le({ checked: n, onChange: o, disabled: l }) {
  const u = (t) => {
    t.stopPropagation();

    if (!l) {
      o(!n);
    }
  };
  return a("button", {
    type: "button",
    className: `${Te.toggle} ${n ? Te.active : ""}`,
    onClick: u,
    disabled: l,
    role: "switch",
    "aria-checked": n,
  });
}
const Ds = "HA3I";
const Os = "WrNw";
const zs = "kxFr";
const Vs = "Ay9j";
const js = "x1E5";
const Ws = "mhKJ";
const Hs = "JPGP";
const qs = "MjGt";
const Zs = "b9z7";
const _s = "Mz4c";
const Gs = "tmIi";
const Xs = "KPd3";
const Ks = "MJi9";
const Js = "a5Fb";
const Ys = "P0T8";
const Qs = "sh2T";
const et = "PzGE";
const nt = "BC6P";
const st = "E25V";
const tt = "wDGa";
const at = "eaET";
const ot = "B5s6";
const it = "g6dj";
const ct = "jE2g";
const lt = "EuxN";
const rt = "tVfN";
const dt = "N34X";
const ut = "wtfC";
const ht = "rA2i";
const mt = "SBI0";
const ft = "rpW2";

const x = {
  page: Ds,
  tabsWrapper: Os,
  tabs: zs,
  createPostWrapper: Vs,
  writePostButton: js,
  profileCard: Ws,
  banner: Hs,
  bannerActions: qs,
  bannerActionButton: Zs,
  deleteBannerButton: _s,
  profileContent: Gs,
  avatarRow: Xs,
  avatar: Ks,
  actions: Js,
  ownActions: Ys,
  mobileActions: Qs,
  infoContainer: et,
  userInfo: nt,
  name: st,
  username: tt,
  bio: at,
  metaItem: ot,
  followsYou: it,
  stats: ct,
  stat: lt,
  clickable: rt,
  statValue: dt,
  statLabel: ut,
  error: ht,
  bannerPlaceholder: mt,
  emptyPosts: ft,
};

const gt = "kaSr";
const pt = "xCUP";
const vt = "e2JV";
const wt = "bqOq";
const we = { content: gt, title: pt, subtitle: vt, actions: wt };
function Nt({ onClose: n }) {
  const o = async () => {
    await c.getState().deleteAccount();
    n();
  };
  return a(M, {
    onClose: n,
    showHeader: false,
    children: a("div", {
      className: we.content,
      children: [
        a("h2", { className: we.title, children: "Удалить аккаунт?" }),
        a("p", {
          className: we.subtitle,
          children:
            "Вы действительно хотите удалить аккаунт? У вас будет 30 дней на восстановление аккаунта, если вы передумаете.",
        }),
        a("div", {
          className: we.actions,
          children: [
            a(B, {
              variant: "secondary",
              onClick: (l) => {
                l.stopPropagation();
                n();
              },
              children: "Отмена",
            }),
            a(B, {
              variant: "danger",
              onClick: (l) => {
                l.stopPropagation();
                o();
              },
              children: "Удалить аккаунт",
            }),
          ],
        }),
      ],
    }),
  });
}
const bt = "pZsc";
const yt = "hmXQ";
const Ct = "ps6u";
const Pt = "DFkP";
const kt = "krAx";
const It = "wLVw";
const St = "vSte";
const Lt = "Yegx";
const Tt = "kxpc";
const Mt = "PJ1j";
const $t = "V1jm";
const xt = "zbHb";
const Bt = "Gw6s";
const At = "k1lZ";
const Ut = "XUeA";
const Et = "MVrJ";
const Ft = "x6vx";
const Rt = "WKA3";
const Dt = "f7Nu";
const Ot = "J6GQ";
const zt = "sRnC";
const Vt = "cwxV";
const jt = "dzE5";
const Wt = "kXcM";
const Ht = "vM9t";
const qt = "fClZ";
const Zt = "rGRg";
const _t = "MI69";
const Gt = "CMGU";
const Xt = "TuRw";
const Kt = "cdDB";
const Jt = "OZUc";
const Yt = "C408";
const Qt = "BiaS";
const ea = "zEzH";
const na = "oVam";
const sa = "g5Iu";
const ta = "NDkH";
const aa = "jnsX";
const oa = "xTk9";
const ia = "Yywa";
const ca = "GzaK";
const la = "RhHI";
const ra = "JNMh";
const da = "RHS7";

const s = {
  modalContainer: bt,
  settingsModal: yt,
  sidebar: Ct,
  sidebarTitle: Pt,
  navItem: kt,
  active: It,
  contentWrapper: St,
  content: Lt,
  actionBar: Tt,
  confirmOverlay: Mt,
  confirmDialog: $t,
  confirmText: xt,
  confirmActions: Bt,
  contentTitle: At,
  section: Ut,
  sectionTitle: Et,
  settingItem: Ft,
  clickable: Rt,
  column: Dt,
  settingInfo: Ot,
  settingIcon: zt,
  blue: Vt,
  red: jt,
  purple: Wt,
  settingText: Ht,
  settingTitle: qt,
  settingDescription: Zt,
  settingControl: _t,
  avatarDisplay: Gt,
  pinGrid: Xt,
  pinItem: Kt,
  pinActive: Jt,
  pinImage: Yt,
  pinName: Qt,
  bioTextarea: ea,
  fieldError: na,
  saveError: sa,
  emptyBlocklist: ta,
  blockedUsersList: aa,
  blockedUserItem: oa,
  blockedUserInfo: ia,
  blockedUserName: ca,
  blockedUserUsername: la,
  deleteAccountButton: ra,
  logoutButton: da,
};

const ua = D(({ onDirtyChange: o, onSavingChange: l, onClose: u }, t) => {
  const i = c((f) => f.profile);

  const c = c((f) => f.logout);

  const { openModal: h, closeModal: P } = a_1();
  const m = h();
  const [L] = C();
  const k = L?.url || window.location.pathname;
  const [N, b] = d(true);
  const [S, M] = d(false);
  const [I, g] = d(false);
  const [B, D] = d({});
  const [r, E] = d(null);
  const [p, O] = d(null);
  const [v, a] = d({ name: "", username: "", bio: "", avatar: "😀" });
  const [w, z] = d([]);
  const [j, K] = d(null);
  const Z = A(null);
  const [Y, Q] = d(true);

  y(() => {
    if (i) {
      const f = {
        name: i.displayName,
        username: i.username || "",
        bio: i.bio || "",
        avatar: i.avatar,
      };
      a(f);
      O(f);
      b(false);
      const U = i.pin ?? null;
      K(U);
      Z.current = U;
    }
  }, [i]);

  y(() => {
    p.getMyPins()
      .then((f) => {
        z(f.pins);

        if (f.activePin && !Z.current) {
          const U = f.pins.find((_) => _.slug === f.activePin);

          if (U) {
            K(U);
            Z.current = U;
          }
        }
      })
      .catch(() => z([]))
      .finally(() => Q(false));
  }, []);

  y(() => {
    o(I);
  }, [I]);

  y(() => {
    l(S);
  }, [S]);

  const C = q_1(
    (f, U) => {
      if (!p) {
        return false;
      }

      const _ = Object.keys(f).some((T) => f[T] !== p[T]);

      const V = (U?.slug ?? null) !== (Z.current?.slug ?? null);
      return _ || V;
    },
    [p]
  );

  const A = (f, U) => {
    if (B[f]) {
      D((_) => {
        const V = { ..._ };
        delete V[f];
        return V;
      });
    }

    E(null);

    a((_) => {
      const V = { ..._, [f]: U };
      g(C(V, j));
      return V;
    });
  };

  const y = q_1(
    (f) => {
      const U = j?.slug === f.slug || f;
      K(U);
      g(C(v, U));
    },
    [j, v, C]
  );

  const $ = async () => {
    if (!I || S) {
      return;
    }
    M(true);
    D({});
    E(null);
    const f = p?.username;
    const U = v.username;
    try {
      if (p && Object.keys(v).some((X) => v[X] !== p[X])) {
        await p.updateProfile({
          displayName: v.name,
          username: v.username || undefined,
          bio: v.bio || null,
        });
      }

      if ((j?.slug ?? null) !== (Z.current?.slug ?? null)) {
        if (j) {
          await p.setActivePin(j.slug);
        } else {
          await p.removeActivePin();
        }
      }

      O({ ...v });
      Z.current = j;
      g(false);
      const T = c.getState().profile;

      if (T) {
        c.getState().setProfile({
          ...T,
          displayName: v.name,
          username: v.username,
          bio: v.bio || null,
          pin: j,
        });
      }

      if (U && U !== f && (k === `/@${f}` || k === `/@${i?.id}`)) {
        $(`/@${U}`);
      }
    } catch (_) {
      console.error("Failed to save profile:", _);

      if (i(_)) {
        if (_.errors) {
          const V = {};
          for (const [T, X] of Object.entries(_.errors)) {
            V[T] = X[0] || "Ошибка валидации";
          }
          D(V);
        } else {
          E(_.message || "Не удалось сохранить изменения");
        }
      } else {
        E("Не удалось сохранить изменения");
      }
    } finally {
      M(false);
    }
  };

  const R = () => {
    if (p) {
      a({ ...p });
      K(Z.current);
      g(false);
    }
  };

  q_1_1(t, () => ({
    save: $,
    discard: R,
  }));

  return N
    ? a(k, {
        children: [
          a("h2", { className: s.contentTitle, children: "Аккаунт" }),
          a(S, {}),
        ],
      })
    : a(k, {
        children: [
          a("h2", { className: s.contentTitle, children: "Аккаунт" }),
          a("div", {
            className: s.section,
            children: [
              i?.subscription?.isActive
                ? a("div", {
                    className: s.settingItem,
                    children: a("div", {
                      className: s.settingInfo,
                      children: a("div", {
                        className: s.settingText,
                        children: [
                          a("span", {
                            className: s.settingTitle,
                            children: "Подписка ИТД НУКСТА",
                          }),
                          a("span", {
                            className: s.settingDescription,
                            children: i.subscription.expiresAt
                              ? (() => {
                                  const f = new Date(i.subscription.expiresAt);

                                  const U = new Date();

                                  const _ = Math.max(
                                    0,
                                    Math.ceil(
                                      (f.getTime() - U.getTime()) /
                                        (1000 /* 1e3 */ * 60 * 60 * 24)
                                    )
                                  );

                                  return `до ${f.toLocaleDateString("ru-RU", {
                                    day: "numeric",
                                    month: "long",
                                    year: "numeric",
                                  })} (${_} ${
                                    _ === 1 ? "день" : _ < 5 ? "дня" : "дней"
                                  })`;
                                })()
                              : "Активна",
                          }),
                        ],
                      }),
                    }),
                  })
                : null,
              a("div", {
                className: s.settingItem,
                children: [
                  a("div", {
                    className: s.settingInfo,
                    children: a("div", {
                      className: s.settingText,
                      children: [
                        a("span", {
                          className: s.settingTitle,
                          children: "Эмоджи-клан",
                        }),
                        a("span", {
                          className: s.settingDescription,
                          children: "Выбран при регистрации. Изменить нельзя",
                        }),
                      ],
                    }),
                  }),
                  a("div", {
                    className: s.avatarDisplay,
                    children: v.avatar,
                  }),
                ],
              }),
              a("div", {
                className: s.settingItem,
                children: [
                  a("div", {
                    className: s.settingInfo,
                    children: a("div", {
                      className: s.settingText,
                      children: [
                        a("span", {
                          className: s.settingTitle,
                          children: "Имя",
                        }),
                        a("span", {
                          className: s.settingDescription,
                          children: "Ваше отображаемое имя",
                        }),
                      ],
                    }),
                  }),
                  a("div", {
                    className: s.settingControl,
                    children: [
                      a(pe, {
                        value: v.name,
                        onChange: (f) => A("name", f),
                      }),
                      B.displayName &&
                        a("span", {
                          className: s.fieldError,
                          children: B.displayName,
                        }),
                    ],
                  }),
                ],
              }),
              a("div", {
                className: s.settingItem,
                children: [
                  a("div", {
                    className: s.settingInfo,
                    children: a("div", {
                      className: s.settingText,
                      children: [
                        a("span", {
                          className: s.settingTitle,
                          children: "Username",
                        }),
                        a("span", {
                          className: s.settingDescription,
                          children:
                            "Ваш уникальный идентификатор (только латиница, цифры и _)",
                        }),
                      ],
                    }),
                  }),
                  a("div", {
                    className: s.settingControl,
                    children: [
                      a(pe, {
                        value: v.username,
                        onChange: (f) => A("username", f),
                      }),
                      B.username &&
                        a("span", {
                          className: s.fieldError,
                          children: B.username,
                        }),
                    ],
                  }),
                ],
              }),
              a("div", {
                className: `${s.settingItem} ${s.column}`,
                children: [
                  a("div", {
                    className: s.settingInfo,
                    children: a("div", {
                      className: s.settingText,
                      children: [
                        a("span", {
                          className: s.settingTitle,
                          children: "О себе",
                        }),
                        a("span", {
                          className: s.settingDescription,
                          children: "Расскажите немного о себе",
                        }),
                      ],
                    }),
                  }),
                  a("textarea", {
                    className: s.bioTextarea,
                    value: v.bio,
                    onChange: (f) => A("bio", f.target.value),
                    placeholder: "Напиши что-нибудь о себе...",
                    rows: 3,
                  }),
                  B.bio &&
                    a("span", { className: s.fieldError, children: B.bio }),
                ],
              }),
              !Y &&
                w.length > 0 &&
                a("div", {
                  className: `${s.settingItem} ${s.column}`,
                  children: [
                    a("div", {
                      className: s.settingInfo,
                      children: a("div", {
                        className: s.settingText,
                        children: [
                          a("span", {
                            className: s.settingTitle,
                            children: "Пин",
                          }),
                          a("span", {
                            className: s.settingDescription,
                            children: "Отображается рядом с именем",
                          }),
                        ],
                      }),
                    }),
                    a("div", {
                      className: s.pinGrid,
                      children: w.map((f) =>
                        a(
                          "button",
                          {
                            className: `${s.pinItem} ${
                              j?.slug === f.slug ? s.pinActive : ""
                            }`,
                            onClick: () => y(f),
                            disabled: S,
                            title: f.description || f.name,
                            type: "button",
                            children: [
                              a("img", {
                                src: f.url,
                                alt: f.name,
                                className: s.pinImage,
                              }),
                              a("span", {
                                className: s.pinName,
                                children: f.name,
                              }),
                            ],
                          },
                          f.slug
                        )
                      ),
                    }),
                  ],
                }),
              r && a("div", { className: s.saveError, children: r }),
            ],
          }),
          m &&
            a("div", {
              className: s.section,
              children: a("button", {
                type: "button",
                className: s.logoutButton,
                onClick: () => {
                  c();
                  u();
                },
                children: [
                  a(I_3, { size: 20 }),
                  a("span", { children: "Выйти из аккаунта" }),
                ],
              }),
            }),
          a("div", {
            className: s.section,
            children: a("button", {
              type: "button",
              className: s.deleteAccountButton,
              onClick: () => h(a(Nt, { onClose: P })),
              children: "Удалить аккаунт",
            }),
          }),
        ],
      });
});

const ha = "pzZL";
const ma = "SUDl";
const fa = "uIYQ";
const ga = "qfdz";
const pa = "ogpd";
const va = "Lvsn";
const wa = "sK6D";

const de = {
  selectWrapper: ha,
  select: ma,
  open: fa,
  selectedValue: ga,
  dropdown: pa,
  option: va,
  selected: wa,
};

function Ce({ value: n, options: o, onChange: l, disabled: u }) {
  const [t, i] = d(false);
  const c = A(null);

  const h = o.find((m) => m.value === n);

  y(() => {
    const m = (L) => {
      if (c.current && !c.current.contains(L.target)) {
        i(false);
      }
    };

    if (t) {
      document.addEventListener("mousedown", m);
    }

    return () => {
      document.removeEventListener("mousedown", m);
    };
  }, [t]);
  const P = (m) => {
    l(m);
    i(false);
  };
  return a("div", {
    ref: c,
    className: de.selectWrapper,
    children: [
      a("button", {
        type: "button",
        className: `${de.select} ${t ? de.open : ""}`,
        onClick: (m) => {
          m.stopPropagation();

          if (!u) {
            i(!t);
          }
        },
        disabled: u,
        children: [
          a("span", { className: de.selectedValue, children: h?.label }),
          a(kn, { size: 16 }),
        ],
      }),
      t &&
        a("div", {
          className: de.dropdown,
          children: o.map((m) =>
            a(
              "button",
              {
                type: "button",
                className: `${de.option} ${m.value === n ? de.selected : ""}`,
                onClick: () => P(m.value),
                children: m.label,
              },
              m.value
            )
          ),
        }),
    ],
  });
}

const Me = [
  { value: "everyone", label: "Все" },
  { value: "followers", label: "Подписчики" },
  { value: "mutual", label: "Взаимные подписчики" },
  { value: "nobody", label: "Никто" },
];

const Na = [
  { value: "light", label: "Светлая" },
  { value: "dark", label: "Тёмная" },
  { value: "system", label: "Системная" },
];

function ba() {
  const { theme: n, setTheme: o } = j();
  return a(k, {
    children: [
      a("h2", { className: s.contentTitle, children: "Оформление" }),
      a("div", {
        className: s.section,
        children: a("div", {
          className: s.settingItem,
          children: [
            a("div", {
              className: s.settingInfo,
              children: a("div", {
                className: s.settingText,
                children: [
                  a("span", { className: s.settingTitle, children: "Тема" }),
                  a("span", {
                    className: s.settingDescription,
                    children: "Выберите цветовую схему приложения",
                  }),
                ],
              }),
            }),
            a(Ce, { value: n, options: Na, onChange: (l) => o(l) }),
          ],
        }),
      }),
    ],
  });
}
function ya({ onChangePassword: n }) {
  return a(k, {
    children: [
      a("h2", { className: s.contentTitle, children: "Безопасность" }),
      a("div", {
        className: s.section,
        children: a("div", {
          className: s.settingItem,
          children: [
            a("div", {
              className: s.settingInfo,
              children: a("div", {
                className: s.settingText,
                children: [
                  a("span", { className: s.settingTitle, children: "Пароль" }),
                  a("span", {
                    className: s.settingDescription,
                    children: "Изменить пароль от аккаунта",
                  }),
                ],
              }),
            }),
            a(B, { size: "sm", onClick: n, children: "Сменить пароль" }),
          ],
        }),
      }),
    ],
  });
}

const Ca = D(({ onDirtyChange: o, onSavingChange: l }, u) => {
  const { settings: t, fetchSettings: i, updateSettings: c } = l();

  const [h, P] = d({
    webEnabled: true,
    soundEnabled: true,
    follows: true,
    reactions: true,
    replies: true,
    mentions: true,
    wallPosts: true,
  });

  const [m, L] = d(null);
  const [k, N] = d(false);
  const [b, S] = d(false);
  const [M, I] = d(false);

  y(() => {
    if (!M && !t) {
      i();
    }
  }, [M]);

  y(() => {
    if (t && !M) {
      const r = {
        webEnabled: t.webEnabled,
        soundEnabled: t.soundEnabled,
        follows: t.preferences.follows,
        reactions: t.preferences.reactions,
        replies: t.preferences.replies,
        mentions: t.preferences.mentions,
        wallPosts: t.preferences.wallPosts,
      };
      P(r);
      L(r);
      N(false);
      I(true);
    }
  }, [t, M]);

  y(() => {
    o(k);
  }, [k]);

  y(() => {
    l(b);
  }, [b]);

  const g = (r, E) => {
    const p = { ...h, [r]: E };
    P(p);

    if (m) {
      const O = Object.keys(p).some((v) => p[v] !== m[v]);
      N(O);
    }
  };

  const B = async () => {
    if (!(!k || b)) {
      S(true);
      try {
        await c({
          webEnabled: h.webEnabled,
          soundEnabled: h.soundEnabled,
          preferences: {
            follows: h.follows,
            reactions: h.reactions,
            replies: h.replies,
            mentions: h.mentions,
            wallPosts: h.wallPosts,
          },
        });

        L({ ...h });
        N(false);
        t.success("Настройки уведомлений сохранены");
      } catch (r) {
        console.error("Failed to save notification settings:", r);
        t.error("Не удалось сохранить настройки");
      } finally {
        S(false);
      }
    }
  };

  const D = () => {
    if (m) {
      P({ ...m });
      N(false);
    }
  };

  q_1_1(u, () => ({
    save: B,
    discard: D,
  }));

  return a(k, {
    children: [
      a("h2", { className: s.contentTitle, children: "Уведомления" }),
      a("div", {
        className: s.section,
        children: [
          a("div", { className: s.sectionTitle, children: "Основные" }),
          a("div", {
            className: `${s.settingItem} ${s.clickable}`,
            onClick: () => g("webEnabled", !h.webEnabled),
            children: [
              a("div", {
                className: s.settingInfo,
                children: [
                  a("div", {
                    className: `${s.settingIcon} ${s.blue}`,
                    children: a(I_2, { size: 20 }),
                  }),
                  a("div", {
                    className: s.settingText,
                    children: [
                      a("span", {
                        className: s.settingTitle,
                        children: "Уведомления",
                      }),
                      a("span", {
                        className: s.settingDescription,
                        children: "Включение или отключение всех уведомлений",
                      }),
                    ],
                  }),
                ],
              }),
              a(le, {
                checked: h.webEnabled,
                onChange: (r) => g("webEnabled", r),
              }),
            ],
          }),
          a("div", {
            className: `${s.settingItem} ${s.clickable}`,
            onClick: () => g("soundEnabled", !h.soundEnabled),
            children: [
              a("div", {
                className: s.settingInfo,
                children: [
                  a("div", {
                    className: `${s.settingIcon} ${s.blue}`,
                    children: a(Nn, { size: 20 }),
                  }),
                  a("div", {
                    className: s.settingText,
                    children: [
                      a("span", {
                        className: s.settingTitle,
                        children: "Уведомления со звуком",
                      }),
                      a("span", {
                        className: s.settingDescription,
                        children: "Воспроизводить звуки уведомлений",
                      }),
                    ],
                  }),
                ],
              }),
              a(le, {
                checked: h.soundEnabled,
                onChange: (r) => g("soundEnabled", r),
              }),
            ],
          }),
        ],
      }),
      a("div", {
        className: s.section,
        children: [
          a("div", { className: s.sectionTitle, children: "Пользователи" }),
          a("div", {
            className: `${s.settingItem} ${s.clickable}`,
            onClick: () => g("follows", !h.follows),
            children: [
              a("div", {
                className: s.settingInfo,
                children: [
                  a("div", {
                    className: `${s.settingIcon} ${s.blue}`,
                    children: a(bn, { size: 20 }),
                  }),
                  a("div", {
                    className: s.settingText,
                    children: [
                      a("span", {
                        className: s.settingTitle,
                        children: "Подписки",
                      }),
                      a("span", {
                        className: s.settingDescription,
                        children: "Уведомления о подписках и запросах в друзья",
                      }),
                    ],
                  }),
                ],
              }),
              a(le, {
                checked: h.follows,
                onChange: (r) => g("follows", r),
              }),
            ],
          }),
          a("div", {
            className: `${s.settingItem} ${s.clickable}`,
            onClick: () => g("wallPosts", !h.wallPosts),
            children: [
              a("div", {
                className: s.settingInfo,
                children: [
                  a("div", {
                    className: `${s.settingIcon} ${s.blue}`,
                    children: a(Se, { size: 20 }),
                  }),
                  a("div", {
                    className: s.settingText,
                    children: [
                      a("span", {
                        className: s.settingTitle,
                        children: "Посты на стене",
                      }),
                      a("span", {
                        className: s.settingDescription,
                        children: "Уведомления о новых постах на вашей стене",
                      }),
                    ],
                  }),
                ],
              }),
              a(le, {
                checked: h.wallPosts,
                onChange: (r) => g("wallPosts", r),
              }),
            ],
          }),
        ],
      }),
      a("div", {
        className: s.section,
        children: [
          a("div", { className: s.sectionTitle, children: "Посты" }),
          a("div", {
            className: `${s.settingItem} ${s.clickable}`,
            onClick: () => g("reactions", !h.reactions),
            children: [
              a("div", {
                className: s.settingInfo,
                children: [
                  a("div", {
                    className: `${s.settingIcon} ${s.red}`,
                    children: a(wn, { size: 20 }),
                  }),
                  a("div", {
                    className: s.settingText,
                    children: [
                      a("span", {
                        className: s.settingTitle,
                        children: "Лайки и реакции",
                      }),
                      a("span", {
                        className: s.settingDescription,
                        children:
                          "Уведомления о реакциях на ваши посты и комментарии",
                      }),
                    ],
                  }),
                ],
              }),
              a(le, {
                checked: h.reactions,
                onChange: (r) => g("reactions", r),
              }),
            ],
          }),
          a("div", {
            className: `${s.settingItem} ${s.clickable}`,
            onClick: () => g("replies", !h.replies),
            children: [
              a("div", {
                className: s.settingInfo,
                children: [
                  a("div", {
                    className: `${s.settingIcon} ${s.blue}`,
                    children: a(Se, { size: 20 }),
                  }),
                  a("div", {
                    className: s.settingText,
                    children: [
                      a("span", {
                        className: s.settingTitle,
                        children: "Комментарии и ответы",
                      }),
                      a("span", {
                        className: s.settingDescription,
                        children: "Уведомления о новых комментариях и ответах",
                      }),
                    ],
                  }),
                ],
              }),
              a(le, {
                checked: h.replies,
                onChange: (r) => g("replies", r),
              }),
            ],
          }),
          a("div", {
            className: `${s.settingItem} ${s.clickable}`,
            onClick: () => g("mentions", !h.mentions),
            children: [
              a("div", {
                className: s.settingInfo,
                children: [
                  a("div", {
                    className: `${s.settingIcon} ${s.purple}`,
                    children: a(a_2, { size: 20 }),
                  }),
                  a("div", {
                    className: s.settingText,
                    children: [
                      a("span", {
                        className: s.settingTitle,
                        children: "Упоминания",
                      }),
                      a("span", {
                        className: s.settingDescription,
                        children: "Уведомления когда вас упоминают в постах",
                      }),
                    ],
                  }),
                ],
              }),
              a(le, {
                checked: h.mentions,
                onChange: (r) => g("mentions", r),
              }),
            ],
          }),
        ],
      }),
    ],
  });
});

const Pa = D(({ onDirtyChange: o, onSavingChange: l }, u) => {
  const [t, i] = d({
    isPrivate: false,
    whoCanPostOnWall: "everyone",
    whoCanSeeMyPostReactions: "everyone",
    showLastSeen: true,
  });

  const [c, h] = d(null);
  const [P, m] = d(false);
  const [L, k] = d(false);
  const [N, b] = d(false);
  const [S, M] = d(false);
  const [I, g] = d([]);
  const [B, D] = d(null);
  const [r, E] = d(true);
  const [p, O] = d(false);
  const [v, a] = d(false);

  y(() => {
    w();

    if (!v) {
      z();
    }
  }, []);

  y(() => {
    o(P);
  }, [P]);

  y(() => {
    l(L);
  }, [L]);

  const w = async () => {
    if (!S) {
      b(true);
    }

    try {
      const C = await p.getPrivacySettings();

      const A = {
        isPrivate: C.isPrivate ?? false,
        whoCanPostOnWall: C.whoCanPostOnWall ?? "everyone",
        whoCanSeeMyPostReactions: C.whoCanSeeMyPostReactions ?? "everyone",
        showLastSeen: C.showLastSeen ?? true,
      };

      i(A);
      h(A);
      m(false);
      M(true);
    } catch (C) {
      console.error("Failed to load privacy settings:", C);
    } finally {
      b(false);
    }
  };

  const z = async (C) => {
    if (!p) {
      O(true);
      try {
        const A = await s_1.getBlockedUsers({ cursor: C, limit: 20 });

        g(C ? (y) => [...y, ...A.users] : A.users);

        D(A.nextCursor);
        E(A.hasMore);
        a(true);
      } catch (A) {
        console.error("Failed to load blocked users:", A);
      } finally {
        O(false);
      }
    }
  };

  const j = async (C) => {
    try {
      await s_1.unblockUser(C);

      g((A) => A.filter((y) => y.id !== C));

      t.success("Пользователь разблокирован");
    } catch (A) {
      console.error("Failed to unblock user:", A);
      t.error("Не удалось разблокировать пользователя");
    }
  };

  const K = () => {
    if (r && B) {
      z(B);
    }
  };

  const Z = (C, A) => {
    const y = { ...t, [C]: A };
    i(y);

    if (c) {
      const $ = Object.keys(y).some((R) => y[R] !== c[R]);
      m($);
    }
  };

  const Y = async () => {
    if (!(!P || L)) {
      k(true);
      try {
        await p.updatePrivacySettings({
          whoCanPostOnWall: t.whoCanPostOnWall,
          whoCanSeeMyPostReactions: t.whoCanSeeMyPostReactions,
          showLastSeen: t.showLastSeen,
        });

        h({ ...t });
        m(false);
        t.success("Настройки приватности сохранены");
      } catch (C) {
        console.error("Failed to save privacy settings:", C);
        t.error("Не удалось сохранить настройки");
      } finally {
        k(false);
      }
    }
  };

  const Q = () => {
    if (c) {
      i({ ...c });
      m(false);
    }
  };

  q_1_1(u, () => ({
    save: Y,
    discard: Q,
  }));

  return a(k, {
    children: [
      a("h2", { className: s.contentTitle, children: "Приватность" }),
      S &&
        a("div", {
          className: s.section,
          children: [
            a("div", {
              className: s.settingItem,
              children: [
                a("div", {
                  className: s.settingInfo,
                  children: a("div", {
                    className: s.settingText,
                    children: [
                      a("span", {
                        className: s.settingTitle,
                        children: "Стена",
                      }),
                      a("span", {
                        className: s.settingDescription,
                        children: "Кто может писать на вашей стене",
                      }),
                    ],
                  }),
                }),
                a(Ce, {
                  value: t.whoCanPostOnWall,
                  options: Me,
                  onChange: (C) => Z("whoCanPostOnWall", C),
                }),
              ],
            }),
            a("div", {
              className: s.settingItem,
              children: [
                a("div", {
                  className: s.settingInfo,
                  children: a("div", {
                    className: s.settingText,
                    children: [
                      a("span", {
                        className: s.settingTitle,
                        children: "Лайки",
                      }),
                      a("span", {
                        className: s.settingDescription,
                        children: "Кто может видеть ваши лайкнутые посты",
                      }),
                    ],
                  }),
                }),
                a(Ce, {
                  value: t.whoCanSeeMyPostReactions,
                  options: Me,
                  onChange: (C) => Z("whoCanSeeMyPostReactions", C),
                }),
              ],
            }),
            a("div", {
              className: `${s.settingItem} ${s.clickable}`,
              onClick: () => Z("showLastSeen", !t.showLastSeen),
              children: [
                a("div", {
                  className: s.settingInfo,
                  children: a("div", {
                    className: s.settingText,
                    children: [
                      a("span", {
                        className: s.settingTitle,
                        children: "Онлайн-статус",
                      }),
                      a("span", {
                        className: s.settingDescription,
                        children: "Показывать время последнего визита",
                      }),
                    ],
                  }),
                }),
                a(le, {
                  checked: t.showLastSeen,
                  onChange: (C) => Z("showLastSeen", C),
                }),
              ],
            }),
          ],
        }),
      a("div", {
        className: s.section,
        children: [
          a("div", {
            className: s.sectionTitle,
            children: "Чёрный список",
          }),
          p && !v
            ? a(S, {})
            : v
            ? a(k, {
                children:
                  I.length === 0
                    ? a("div", {
                        className: s.emptyBlocklist,
                        children: "Чёрный список пуст",
                      })
                    : a("div", {
                        className: s.blockedUsersList,
                        children: [
                          I.map((C) =>
                            a(
                              "div",
                              {
                                className: s.blockedUserItem,
                                children: [
                                  a(f, {
                                    src: C.avatar,
                                    alt: C.displayName,
                                    size: "sm",
                                  }),
                                  a("div", {
                                    className: s.blockedUserInfo,
                                    children: [
                                      a("span", {
                                        className: s.blockedUserName,
                                        children: C.displayName,
                                      }),
                                      C.username &&
                                        a("span", {
                                          className: s.blockedUserUsername,
                                          children: ["@", C.username],
                                        }),
                                    ],
                                  }),
                                  a(B, {
                                    size: "sm",
                                    variant: "secondary",
                                    onClick: () => j(C.id),
                                    children: "Разблокировать",
                                  }),
                                ],
                              },
                              C.id
                            )
                          ),
                          r &&
                            a(B, {
                              variant: "secondary",
                              onClick: K,
                              disabled: p,
                              children: p ? "Загрузка..." : "Загрузить ещё",
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

const ka = [
  { id: "account", icon: a_3, label: "Аккаунт" },
  { id: "appearance", icon: n, label: "Оформление" },
  { id: "security", icon: Ln, label: "Безопасность" },
  { id: "privacy", icon: Sn, label: "Приватность" },
  { id: "notifications", icon: I_2, label: "Уведомления" },
];

function Ia({ onClose: n }) {
  const [o, l] = d("account");
  const [u, t] = d(null);
  const [i, c] = d(false);
  const [h, P] = d({});
  const [m, L] = d({});
  const k = A(null);
  const N = A(null);
  const b = A(null);
  const S = Object.values(h).some(Boolean);
  const M = Object.values(m).some(Boolean);

  const I = q_1(
    (a) => (w) => {
      P((z) => ({
        ...z,
        [a]: w,
      }));
    },
    []
  );

  const g = q_1(
    (a) => (w) => {
      L((z) => ({
        ...z,
        [a]: w,
      }));
    },
    []
  );

  const B = async () => {
    const a = [];

    if (h.account) {
      a.push(k.current?.save() ?? Promise.resolve());
    }

    if (h.notifications) {
      a.push(N.current?.save() ?? Promise.resolve());
    }

    if (h.privacy) {
      a.push(b.current?.save() ?? Promise.resolve());
    }

    await Promise.all(a);
  };

  const D = () => {
    k.current?.discard();
    N.current?.discard();
    b.current?.discard();
  };

  const r = (a) => {
    if (a !== o) {
      if (S) {
        t({ type: "tab", tab: a });
      } else {
        l(a);
      }
    }
  };

  const E = () => {
    if (S) {
      t({ type: "close" });
    } else {
      n();
    }
  };

  const p = () => {
    D();
    const a = u;
    t(null);

    if (a?.type === "tab") {
      l(a.tab);
    } else if (a?.type === "close") {
      n();
    }
  };

  const O = async () => {
    await B();
    const a = u;
    t(null);

    if (a?.type === "tab") {
      l(a.tab);
    } else if (a?.type === "close") {
      n();
    }
  };

  const v = () => {
    switch (o) {
      case "account": {
        return a(ua, {
          ref: k,
          onDirtyChange: I("account"),
          onSavingChange: g("account"),
          onClose: n,
        });
      }
      case "appearance": {
        return a(ba, {});
      }
      case "security": {
        return a(ya, { onChangePassword: () => c(true) });
      }
      case "notifications": {
        return a(Ca, {
          ref: N,
          onDirtyChange: I("notifications"),
          onSavingChange: g("notifications"),
        });
      }
      case "privacy": {
        return a(Pa, {
          ref: b,
          onDirtyChange: I("privacy"),
          onSavingChange: g("privacy"),
        });
      }
    }
  };

  return i
    ? a(qn, { onClose: n, onBack: () => c(false) })
    : a(M, {
        onClose: E,
        frameless: true,
        size: "wide",
        className: s.modalContainer,
        children: a("div", {
          className: s.settingsModal,
          children: [
            a("div", {
              className: s.sidebar,
              children: [
                a("div", { className: s.sidebarTitle, children: "Настройки" }),
                a("nav", {
                  children: ka.map((a) =>
                    a(
                      "button",
                      {
                        type: "button",
                        className: `${s.navItem} ${o === a.id ? s.active : ""}`,
                        onClick: () => r(a.id),
                        children: [
                          a(a.icon, {}),
                          a("span", { children: a.label }),
                        ],
                      },
                      a.id
                    )
                  ),
                }),
              ],
            }),
            a("div", {
              className: s.contentWrapper,
              children: [
                a("div", { className: s.content, children: v() }),
                S &&
                  a("div", {
                    className: s.actionBar,
                    children: [
                      a(B, {
                        variant: "secondary",
                        onClick: E,
                        children: "Отмена",
                      }),
                      a(B, {
                        variant: "primary",
                        onClick: B,
                        disabled: M,
                        loading: M,
                        children: "Сохранить",
                      }),
                    ],
                  }),
              ],
            }),
            u &&
              a("div", {
                className: s.confirmOverlay,
                children: a("div", {
                  className: s.confirmDialog,
                  children: [
                    a("div", {
                      className: s.confirmText,
                      children: [
                        "У вас есть несохранённые изменения.",
                        `
`,
                        "Сохранить?",
                      ],
                    }),
                    a("div", {
                      className: s.confirmActions,
                      children: [
                        a(B, {
                          variant: "secondary",
                          onClick: p,
                          children: "Не сохранять",
                        }),
                        a(B, {
                          variant: "accent",
                          onClick: O,
                          children: "Сохранить",
                        }),
                      ],
                    }),
                  ],
                }),
              }),
          ],
        }),
      });
}
const Sa = "JsYY";
const La = "e2BO";
const Ta = "TyEy";
const Ma = "O8dh";
const $a = "VIdX";
const xa = "ocNQ";

const he = {
  content: Sa,
  title: La,
  description: Ta,
  username: Ma,
  warning: $a,
  actions: xa,
};

function Ba({
  username: n,
  displayName: o,
  avatar: l,
  onConfirm: u,
  onClose: t,
}) {
  const i = () => {
    u();
    t();
  };
  return a(M, {
    onClose: t,
    showHeader: false,
    children: a("div", {
      className: he.content,
      children: [
        a(f, { src: l, alt: o, size: "lg" }),
        a("h2", {
          className: he.title,
          children: "Заблокировать пользователя?",
        }),
        a("p", {
          className: he.description,
          children: [
            "Вы уверены, что хотите заблокировать",
            " ",
            a("strong", { children: o }),
            n &&
              a("span", { className: he.username, children: [" (@", n, ")"] }),
            "?",
          ],
        }),
        a("p", {
          className: he.warning,
          children:
            "Заблокированный пользователь не сможет видеть ваш профиль и контент.",
        }),
        a("div", {
          className: he.actions,
          children: [
            a(B, {
              variant: "secondary",
              onClick: () => t(),
              fullWidth: true,
              children: "Отмена",
            }),
            a(B, {
              variant: "danger",
              onClick: () => i(),
              fullWidth: true,
              children: "Заблокировать",
            }),
          ],
        }),
      ],
    }),
  });
}
function $e(n, o, l, u) {
  const t = Math.abs(n);
  const i = t % 10;
  const c = t % 100;
  return c >= 11 && c <= 19 ? u : i === 1 ? o : i >= 2 && i <= 4 ? l : u;
}
function Aa(n) {
  if (!n) {
    return null;
  }
  switch (n.unit) {
    case "just_now": {
      return "только что";
    }
    case "minutes": {
      const o = n.value ?? 1;
      const l = $e(o, "минуту", "минуты", "минут");
      return `${o} ${l} назад`;
    }
    case "hours": {
      const o = n.value ?? 1;
      const l = $e(o, "час", "часа", "часов");
      return `${o} ${l} назад`;
    }
    case "recently": {
      return "недавно";
    }
    case "this_week": {
      return "на этой неделе";
    }
    case "this_month": {
      return "в этом месяце";
    }
    case "long_ago": {
      return "давно";
    }
    default: {
      return null;
    }
  }
}
function xe(n) {
  return n >= 1000000 /* 1e6 */
    ? `${(n / 1000000) /* 1e6 */
        .toFixed(1)}M`
    : n >= 1000 /* 1e3 */
    ? `${(n / 1000) /* 1e3 */
        .toFixed(1)}K`
    : n.toString();
}
function Be({
  followers: n,
  following: o,
  isPhone: l = false,
  onFollowersClick: u,
  onFollowingClick: t,
}) {
  return a("div", {
    className: x.stats,
    children: [
      a("div", {
        className: `${x.stat} ${u ? x.clickable : ""}`,
        onClick: u,
        children: [
          a("span", { className: x.statValue, children: xe(n) }),
          a("span", { className: x.statLabel, children: "подписчиков" }),
        ],
      }),
      l && a("hr", {}),
      a("div", {
        className: `${x.stat} ${t ? x.clickable : ""}`,
        onClick: t,
        children: [
          a("span", { className: x.statValue, children: xe(o) }),
          a("span", { className: x.statLabel, children: "подписок" }),
        ],
      }),
    ],
  });
}
function Ua({
  isOwnProfile: n,
  isFollowing: o,
  isRequested: l = false,
  isFollowLoading: u,
  onEditProfile: t,
  onToggleFollow: i,
  fullWidth: c = false,
}) {
  const [h, P] = d(false);
  const L = x_1()?.subscription?.isActive;
  return n
    ? a(k, {
        children: [
          a("div", {
            className: x.ownActions,
            children: [
              a(B, { onClick: t, fullWidth: c, children: "Редактировать" }),
              !L &&
                a(B, {
                  variant: "secondary",
                  onClick: () => P(true),
                  fullWidth: c,
                  children: "ИТД НУКСТА",
                }),
            ],
          }),
          a(z, { isOpen: h, onClose: () => P(false) }),
        ],
      })
    : a(B, {
        variant: o || l ? "secondary" : "primary",
        onClick: i,
        disabled: u,
        fullWidth: c,
        children: o
          ? a(k, { children: [a(I_1, { size: 18 }), "Вы подписаны"] })
          : l
          ? "Заявка отправлена"
          : a(k, { children: [a(E, { size: 18 }), "Подписаться"] }),
      });
}
function Ae({
  isOwnProfile: n,
  isVerified: o = false,
  isBlocked: l = false,
  onVerificationRequest: u,
  onBlockUser: t,
  onReportUser: i,
  ...c
}) {
  const P = (() => {
    const m = [];

    if (!n && t) {
      m.push({
        id: "block",
        label: l ? "Разблокировать" : "Заблокировать",
        icon: a(Cn, { size: 18 }),
        danger: !l,
        onClick: t,
      });
    }

    if (!n && i) {
      m.push({
        id: "report",
        label: "Пожаловаться",
        icon: a(w, { size: 18 }),
        danger: true,
        onClick: i,
      });
    }

    return m;
  })();
  return a("div", {
    className: x.actions,
    children: [
      P.length > 0 &&
        a(o, {
          trigger: a(B, {
            variant: "secondary",
            iconOnly: true,
            children: a(r, { size: 18 }),
          }),
          items: P,
          position: "bottom-right",
        }),
      n &&
        !o &&
        u &&
        a(B, {
          variant: "secondary",
          iconOnly: true,
          onClick: u,
          children: a(v, { size: 18 }),
        }),
      a(Ua, { isOwnProfile: n, isVerified: o, ...c }),
    ],
  });
}
const Ea = H_1(() =>
  _(() => import("./index-Clm4iso2.js"), __vite__mapDeps([0, 1, 2])).then(
    (n) => ({
      default: n.DrawingCanvas,
    })
  )
);
function Fa(n) {
  return new Date(n).toLocaleDateString("ru-RU", {
    month: "long",
    year: "numeric",
  });
}
function Ra({
  profile: n,
  isOwnProfile: o,
  isFollowing: l,
  isRequested: u = false,
  isFollowLoading: t,
  isBlocked: i = false,
  isFollowedBy: c = false,
  isPhone: h,
  onEditProfile: P,
  onToggleFollow: m,
  onBlockUser: L,
  onFollowersClick: k,
  onFollowingClick: N,
  onBannerUpdate: b,
}) {
  const [S, M] = d(false);
  const { openModal: I, closeModal: g } = a_1();

  const B = q_1(() => {
    M(true);
  }, []);

  const D = q_1(() => {
    I(a(Es, { onClose: g }));
  }, [I, g]);

  const r = q_1(() => {
    if (i) {
      L?.();
      return;
    }
    I(
      a(Ba, {
        username: n.username || "",
        displayName: n.displayName,
        avatar: n.avatar,
        onConfirm: () => L?.(),
        onClose: g,
      })
    );
  }, [i, L, I, g, n]);

  const E = q_1(() => {
    I(a(R, { targetType: "user", targetId: n.id, onClose: g }));
  }, [I, g, n.id]);

  const p = q_1(() => {
    M(false);
  }, []);

  const O = q_1(async () => {
    try {
      await p.updateProfile({ bannerId: null });
      b?.(null);
    } catch (a) {
      console.error("Failed to delete banner:", a);
    }
  }, [b]);

  const v = q_1(
    async (a) => {
      try {
        const [w, z] = a.split(",");
        const j = w.match(/:(.*?);/)?.[1] || "image/png";
        const K = atob(z);
        const Z = new Uint8Array(K.length);
        for (let A = 0; A < K.length; A++) {
          Z[A] = K.charCodeAt(A);
        }
        const Y = new Blob([Z], { type: j });
        const Q = new File([Y], "banner.png", { type: "image/png" });
        const C = await m.uploadMedia(Q);
        await p.updateProfile({ bannerId: C.id });

        b?.({
          id: C.id,
          type: "image",
          url: C.url,
          width: C.width,
          height: C.height,
        });
      } catch (w) {
        console.error("Failed to upload banner:", w);
        t.error("Не удалось загрузить баннер");
        throw w;
      }
    },
    [b]
  );

  return a("div", {
    className: x.profileCard,
    children: [
      a("div", {
        className: x.banner,
        children: [
          n.banner?.url
            ? a("img", { src: n.banner.url, alt: "Banner" })
            : a("div", { className: x.bannerPlaceholder }),
          o &&
            a("div", {
              className: x.bannerActions,
              children: [
                a("button", {
                  className: x.bannerActionButton,
                  onClick: B,
                  title: "Нарисовать баннер",
                  children: a(n, { size: 20 }),
                }),
                n.banner?.url &&
                  a("button", {
                    className: `${x.bannerActionButton} ${x.deleteBannerButton}`,
                    onClick: O,
                    title: "Удалить баннер",
                    children: a(y_1, { size: 20 }),
                  }),
              ],
            }),
        ],
      }),
      S &&
        a(P, {
          fallback: null,
          children: a(Ea, { isOpen: S, onClose: p, onSave: v, mode: "banner" }),
        }),
      a("div", {
        className: x.profileContent,
        children: [
          a("div", {
            className: x.avatarRow,
            children: [
              a(f, {
                src: n.avatar,
                alt: n.displayName,
                size: "lg",
                online: n.online,
                className: x.avatar,
              }),
              !h &&
                a(Ae, {
                  isOwnProfile: o,
                  isFollowing: l,
                  isRequested: u,
                  isFollowLoading: t,
                  isVerified: n.isVerified,
                  isBlocked: i,
                  onEditProfile: P,
                  onToggleFollow: m,
                  onVerificationRequest: D,
                  onBlockUser: r,
                  onReportUser: E,
                }),
            ],
          }),
          a("div", {
            className: x.infoContainer,
            children: [
              a("div", {
                className: x.userInfo,
                children: [
                  a(U, {
                    name: n.displayName,
                    verified: n.isVerified,
                    hasNuksta: n.hasNuksta,
                    pin: n.pin,
                    size: "lg",
                    className: x.name,
                  }),
                  n.username &&
                    a("span", {
                      className: x.username,
                      children: ["@", n.username],
                    }),
                ],
              }),
              h &&
                a(k, {
                  children: [
                    a(Be, {
                      isPhone: true,
                      followers: n.stats?.followers ?? 0,
                      following: n.stats?.following ?? 0,
                      onFollowersClick: k,
                      onFollowingClick: N,
                    }),
                    a("div", {
                      className: x.mobileActions,
                      children: a(Ae, {
                        isOwnProfile: o,
                        isFollowing: l,
                        isRequested: u,
                        isFollowLoading: t,
                        isVerified: n.isVerified,
                        isBlocked: i,
                        onEditProfile: P,
                        onToggleFollow: m,
                        onVerificationRequest: D,
                        onBlockUser: r,
                        onReportUser: E,
                      }),
                    }),
                  ],
                }),
              n.bio && a("p", { className: x.bio, children: n.bio }),
              !h &&
                a(Be, {
                  followers: n.stats?.followers ?? 0,
                  following: n.stats?.following ?? 0,
                  onFollowersClick: k,
                  onFollowingClick: N,
                }),
              !o &&
                !n.online &&
                n.lastSeen &&
                a("span", {
                  className: x.metaItem,
                  children: ["Был(а) в сети: ", Aa(n.lastSeen)],
                }),
              n.createdAt &&
                a("span", {
                  className: x.metaItem,
                  children: [a(Pn, {}), " Регистрация: ", Fa(n.createdAt)],
                }),
              c &&
                !o &&
                a("span", {
                  className: x.followsYou,
                  children: "Подписан на вас",
                }),
            ],
          }),
        ],
      }),
    ],
  });
}
function Da({ profile: n, isBlocked: o }) {
  const [l, u] = d("posts");
  const [t, i] = d([]);
  const [c, h] = d(false);
  const [P, m] = d(null);
  const [L, k] = d([]);
  const [N, b] = d(false);
  const [S, M] = d(null);
  const [I, g] = d(false);
  const [B, D] = d(null);

  const r = q_1(async (y, $, R) => {
    h(true);
    try {
      const f = await p_1.getUserWall(y, {
        cursor: R,
        limit: 20,
        pinnedPostId: $,
      });

      const U = f.data;

      i((_) => (R ? [..._, ...U] : U));

      m(f.nextCursor);
    } catch (f) {
      console.error("Failed to fetch wall posts:", f);
    } finally {
      h(false);
    }
  }, []);

  const E = q_1(
    async (y, $) => {
      if (!I) {
        b(true);
      }

      D(null);
      try {
        const R = await p_1.getUserLikedPosts(y, { cursor: $, limit: 20 });
        const f = R.data;

        k((U) => ($ ? [...U, ...f] : f));

        M(R.nextCursor);
        g(true);
      } catch (R) {
        console.error("Failed to fetch liked posts:", R);

        if (R && typeof R == "object" && "status" in R && R.status === 403) {
          D("Лайки скрыты настройками приватности");
        }
      } finally {
        b(false);
      }
    },
    [I]
  );

  y(() => {
    if (n && !o) {
      if (!o) {
        r(n.username || n.id, n.pinnedPostId);
      }
    }
  }, [n?.id, o, r]);

  y(() => {
    if (l === "likes" && n) {
      E(n.id);
    }
  }, [l, n?.id, E]);

  const p = K((y) => y.posts);

  const O = K((y) => y.highlightedPostId);

  const v = K((y) => y._lastPostEdit);

  const a = K((y) => y._lastLikeUpdate);

  y(() => {
    if (!O || !n) {
      return;
    }
    const y = p.find(($) => $.id === O);

    if (
      y &&
      y.wallOwnerId === n.id &&
      y.wallOwnerId === n.id &&
      !t.some(($) => $.id === O)
    ) {
      if (y.wallOwnerId === n.id) {
        if (!t.some(($) => $.id === O)) {
          i(($) => [y, ...$]);
        }
      }
    }
  }, [O, p, n?.id, t]);

  y(() => {
    if (t.length !== 0) {
      i((y) =>
        y.map(($) => {
          const R = p.find((f) => f.id === $.id);
          return R &&
            (R.editedAt !== $.editedAt || R.attachments !== $.attachments)
            ? R
            : $;
        })
      );
    }
  }, [p]);

  y(() => {
    if (v) {
      i((y) =>
        y.map(($) =>
          $.id === v.postId
            ? { ...$, text: v.text, spans: v.spans, editedAt: v.editedAt }
            : $
        )
      );
    }
  }, [v]);

  y(() => {
    if (!a) {
      return;
    }
    const { postId: y, myReaction: $, totalDelta: R } = a;

    const f = (U) =>
      U.id === y
        ? {
            ...U,
            reactions: {
              ...U.reactions,
              myReaction: $,
              total: Math.max(0, U.reactions.total + R),
            },
          }
        : U;

    i((U) => U.map(f));

    k((U) => U.map(f));
  }, [a]);

  const w = q_1(() => {
    if (n && !c) {
      if (l === "posts" && P) {
        r(n.username || n.id, n.pinnedPostId, P);
      } else if (l === "likes" && S && !N) {
        E(n.id, S);
      }
    }
  }, [n, l, P, S, c, N, r, E]);

  const z = q_1(
    async (y) => {
      if (!n) {
        return;
      }
      const $ = n.pinnedPostId === y;
      try {
        if ($) {
          await p.unpinPost(y);
        } else {
          await p.pinPost(y);
        }
      } catch (R) {
        console.error("Failed to pin/unpin post:", R);
        throw R;
      }
    },
    [n]
  );

  const j = q_1(async () => {
    if (n) {
      p_1.invalidateWallCache(n.username || n.id);
      await r(n.username || n.id, n.pinnedPostId);
    }
  }, [n, r]);

  const K = q_1(
    (y) => {
      i(($) => $.filter((R) => R.id !== y));

      k(($) => $.filter((R) => R.id !== y));

      if (n) {
        p_1.removePostFromWallCache(n.username || n.id, y);
      }
    },
    [n]
  );

  const Z = q_1((y) => {
    u(y);
  }, []);

  const Y = q_1(() => {
    i([]);
    m(null);
    k([]);
    g(false);
    M(null);
    D(null);
    u("posts");
  }, []);

  return {
    posts: l === "posts" ? t : L,
    postsLoading: l === "posts" ? c : N,
    nextCursor: l === "posts" ? P : S,
    activeTab: l,
    likesError: B,
    hasLoadedLikes: I,
    handleLoadMore: w,
    handlePinPost: z,
    refreshPosts: j,
    removePost: K,
    handleTabChange: Z,
    resetPosts: Y,
  };
}
function Oa({ username: n }) {
  const o = c((T) => T.profile);

  const l = o?.id;

  const u = c((T) => T.setProfile);

  const [t, i] = d(null);
  const [c, h] = d(true);
  const [P, m] = d(null);
  const [L, k] = d("none");
  const [N, b] = d(false);
  const [S, M] = d(false);
  const [I, g] = d(false);
  const B = !!(o && t && o.id === t.id);
  const D = L === "following";
  const r = L === "requested";
  const E = t?.interaction?.isFollowedBy ?? false;
  const p = t?.interaction?.isBlockedBy ?? false;

  const {
    posts: O,
    postsLoading: v,
    nextCursor: a,
    activeTab: w,
    likesError: z,
    hasLoadedLikes: j,
    handleLoadMore: K,
    handlePinPost: Z,
    refreshPosts: Y,
    removePost: Q,
    handleTabChange: C,
    resetPosts: A,
  } = Da({ profile: t, isBlocked: S });

  y(() => {
    if (!t || B || B || !o) {
      k("none");
      M(false);
      return;
    }

    if (t.interaction) {
      t.interaction.isFollowing
        ? k("following")
        : t.interaction.hasOutgoingRequest
        ? k("requested")
        : k("none");

      M(t.interaction.isBlocking);
    }
  }, [t?.id, B, o]);
  const y = A(true);

  y(() => {
    y.current = true;

    return () => {
      y.current = false;
    };
  }, []);

  y(() => {
    const T = new AbortController();

    (async () => {
      i(null);
      h(true);
      m(null);
      k("none");
      M(false);
      A();
      try {
        const ee = n ? await p.getProfileByUsername(n) : await p.getMyProfile();
        if (!y.current || T.signal.aborted) {
          return;
        }

        if (ee) {
          i(ee);
        }
      } catch (ee) {
        if (!y.current || T.signal.aborted) {
          return;
        }
        console.error("Failed to fetch profile:", ee);
        m("Профиль не найден");
      } finally {
        if (y.current && !T.signal.aborted) {
          h(false);
        }
      }
    })();

    return () => {
      T.abort();
    };
  }, [n, l, A]);

  const $ = q_1(async () => {
    if (!(!t || N)) {
      b(true);
      try {
        const T = await s_1.followUser(t.id);
        k(T);

        if (T === "following" && t.stats) {
          const X = t.stats.followers + 1;

          i((ee) =>
            ee?.stats ? { ...ee, stats: { ...ee.stats, followers: X } } : ee
          );

          if (t.username) {
            p.updateProfileCache(t.username, {
              stats: { ...t.stats, followers: X },
            });
          }
        }
      } catch (T) {
        console.error("Failed to follow:", T);
      } finally {
        b(false);
      }
    }
  }, [t, N]);

  const R = q_1(async () => {
    if (!(!t || N)) {
      b(true);
      try {
        await s_1.unfollowUser(t.id);
        k("none");

        if (D && t.stats) {
          const T = t.stats.followers - 1;

          i((X) =>
            X?.stats ? { ...X, stats: { ...X.stats, followers: T } } : X
          );

          if (t.username) {
            p.updateProfileCache(t.username, {
              stats: { ...t.stats, followers: T },
            });
          }
        }
      } catch (T) {
        console.error("Failed to unfollow:", T);
      } finally {
        b(false);
      }
    }
  }, [t, D, N]);

  const f = q_1(async () => {
    if (D || r) {
      await R();
    } else {
      await $();
    }
  }, [D, r, $, R]);

  const U = q_1(
    async (T) => {
      if (!t) {
        return;
      }
      const ee = t.pinnedPostId === T || T;
      const Ie = { ...t, pinnedPostId: ee };
      i(Ie);

      if (o) {
        u(Ie);
      }

      try {
        await Z(T);
      } catch {
        i(t);

        if (o) {
          u(t);
        }
      }
    },
    [t, o, u, Z]
  );

  const _ = q_1(async () => {
    if (!(!t || I || I || B)) {
      g(true);
      try {
        if (S) {
          await s_1.unblockUser(t.id);
          M(false);
          t.success("Пользователь разблокирован");
        } else {
          await s_1.blockUser(t.id);
          M(true);
          t.success("Пользователь заблокирован");
          D && k("none");
        }

        if (t.username) {
          p.invalidateProfileCache(t.username);
        }
      } catch (T) {
        console.error("Failed to toggle block:", T);
        t.error("Не удалось выполнить действие");
      } finally {
        g(false);
      }
    }
  }, [t, S, I, B, D]);

  const V = q_1(
    (T) => {
      i((X) => (X ? { ...X, banner: T } : null));

      if (o) {
        u({ ...o, banner: T });
      }
    },
    [o, u]
  );

  return {
    profile: t,
    loading: c,
    error: P,
    posts: O,
    postsLoading: v,
    nextCursor: a,
    isOwnProfile: B,
    isFollowing: D,
    isFollowedBy: E,
    isBlockedBy: p,
    isRequested: r,
    isFollowLoading: N,
    handleToggleFollow: f,
    handleFollow: $,
    handleUnfollow: R,
    handleLoadMore: K,
    handlePinPost: U,
    refreshPosts: Y,
    removePost: Q,
    activeTab: w,
    handleTabChange: C,
    likesError: z,
    hasLoadedLikes: j,
    updateBanner: V,
    isBlocked: S,
    handleBlockUser: _,
  };
}

export const Profile = ({ username: n }) => {
  const o = h();
  const l = L();
  const { openModal: u, closeModal: t } = a_1();

  const i = K((V) => V.createPost);

  const {
    profile: c,
    loading: h,
    error: P,
    posts: m,
    postsLoading: L,
    nextCursor: k,
    isOwnProfile: N,
    isFollowing: b,
    isFollowedBy: S,
    isBlockedBy: M,
    isRequested: I,
    isFollowLoading: g,
    isBlocked: B,
    handleFollow: D,
    handleUnfollow: r,
    handleBlockUser: E,
    handleLoadMore: p,
    handlePinPost: O,
    refreshPosts: v,
    removePost: a,
    activeTab: w,
    handleTabChange: z,
    likesError: j,
    updateBanner: K,
  } = Oa({ username: n });

  const Z = q_1(() => {
    if (b || I) {
      u(
        a(N, {
          displayName: c?.displayName ?? "",
          onConfirm: r,
          onClose: t,
        })
      );
    } else {
      D();
    }
  }, [b, I, c?.displayName, D, r, u, t]);

  const Y = () => {
    u(a(Ia, { onClose: t }));
  };

  const Q = q_1(() => {
    if (c) {
      u(a(Le, { userId: c.id, type: "followers", title: "Подписчики" }));
    }
  }, [c, u]);

  const C = q_1(() => {
    if (c) {
      u(a(Le, { userId: c.id, type: "following", title: "Подписки" }));
    }
  }, [c, u]);

  const A = async (V, T, X, ee) => {
    if (c) {
      await i({
        wallOwnerId: c.id,
        text: V,
        spans: T,
        attachments: X,
        poll: ee,
      });

      v();
    }
  };

  const y = q_1(() => {
    if (c) {
      u(
        a(C_1, {
          wallOwnerId: c.id,
          placeholder: `Написать на стене ${c.displayName}`,
          onPostCreated: v,
        })
      );
    }
  }, [c, u, v]);

  const $ = T(() => {
    if (w !== "posts" || !c?.pinnedPostId) {
      return m;
    }
    const V = m.find((T) => T.id === c.pinnedPostId);
    return V ? [V, ...m.filter((T) => T.id !== c.pinnedPostId)] : m;
  }, [m, c?.pinnedPostId, w]);

  const R = T(() => {
    if (!l) {
      return false;
    }
    if (N) {
      return true;
    }
    if (B || M) {
      return false;
    }
    switch (c?.privacySettings?.whoCanPostOnWall) {
      case "everyone": {
        return true;
      }
      case "followers": {
        return b;
      }
      case "mutual": {
        return b && S;
      }
      default: {
        return false;
      }
    }
  }, [l, N, B, M, c?.privacySettings?.whoCanPostOnWall, b, S]);

  const f = N || c?.privacySettings?.whoCanSeeMyPostReactions === "everyone";

  const U = T(() => {
    const V = ["Посты"];

    if (f) {
      V.push("Лайки");
    }

    return V;
  }, [f]);

  const _ = q_1(
    (V) => {
      z(f ? (V === 0 ? "posts" : "likes") : "posts");
    },
    [z, f]
  );

  return h
    ? null
    : P || !c
    ? a("div", {
        className: x.page,
        children: a("div", {
          className: x.error,
          children: P || "Профиль не найден",
        }),
      })
    : a("div", {
        className: x.page,
        children: [
          a(Ra, {
            profile: c,
            isOwnProfile: N,
            isFollowing: b,
            isRequested: I,
            isFollowLoading: g,
            isBlocked: B,
            isFollowedBy: S,
            isPhone: o,
            onEditProfile: Y,
            onToggleFollow: Z,
            onBlockUser: E,
            onFollowersClick: Q,
            onFollowingClick: C,
            onBannerUpdate: K,
          }),
          a("div", {
            className: x.tabsWrapper,
            children: a(O, {
              className: x.tabs,
              tabs: U,
              activeIndex: w === "posts" ? 0 : 1,
              onChange: _,
            }),
          }),
          R &&
            a(k, {
              children: [
                a("div", {
                  className: x.createPostWrapper,
                  children: [
                    a(f, {
                      src: c.avatar ?? "",
                      alt: c.displayName,
                      size: "sm",
                    }),
                    a(Q, {
                      onSubmit: A,
                      placeholder: N
                        ? "Что нового?"
                        : `Написать на стене ${c.displayName}`,
                    }),
                  ],
                }),
                a(B, {
                  variant: "secondary",
                  className: x.writePostButton,
                  onClick: y,
                  children: "Написать на стене",
                }),
              ],
            }),
          B
            ? a("div", {
                className: x.emptyPosts,
                children: "Вы заблокировали этого пользователя",
              })
            : j
            ? a("div", { className: x.emptyPosts, children: j })
            : $.length > 0
            ? a(V, {
                posts: $,
                renderPost: (V, T, X) =>
                  a(W_1, {
                    post: V,
                    isOnOwnProfile: N && w === "posts",
                    isPinned: w === "posts" && c?.pinnedPostId === V.id,
                    isHighlighted: X,
                    onPin: N && w === "posts" ? O : undefined,
                    onDelete: w === "posts" ? a : undefined,
                  }),
                hasMore: !!k,
                isLoadingMore: L,
                onLoadMore: p,
              })
            : L && $.length === 0
            ? a(S, {})
            : a("div", {
                className: x.emptyPosts,
                children: w === "posts" ? "Нет постов" : "Нет лайков",
              }),
        ],
      });
};

export { Profile as Profile };
