import {
  u,
  d,
  I as I_1,
  B,
  M,
  a,
  q as b_1,
  i,
  c,
  s,
  s as s_1,
  t,
  k as k_1,
  A,
  q,
  u as u_1,
  f as f_1,
  g,
  P,
  N,
  h,
  B as B_1,
  l,
  y,
  $,
  m,
  n,
  U,
  o,
  p,
  r,
  D,
  v,
  w,
  x,
  z,
  R,
  C,
  E,
  F,
  G,
  H,
  J,
  K,
  L,
  O,
  T,
  Q as Q_1,
  V,
  W,
  X,
} from "./index-BPAoISKs.js";

import { I as I_2 } from "./IconCheck-BI1LTQ_u.js";

const kn = ({ size: t = 24 }) =>
  u("svg", {
    width: t,
    height: t,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      u("circle", {
        cx: "12",
        cy: "12",
        r: "9",
        stroke: "currentColor",
        strokeWidth: "2",
      }),
      u("path", {
        d: "M5.5 5.5L18.5 18.5",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
      }),
    ],
  });

const Pn = () =>
  u("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "16",
    fill: "none",
    children: u("path", {
      stroke: "currentColor",
      "stroke-width": "1.333",
      d: "M12.667 2.667H3.333C2.597 2.667 2 3.264 2 4v9.333c0 .737.597 1.334 1.333 1.334h9.334c.736 0 1.333-.597 1.333-1.334V4c0-.736-.597-1.333-1.333-1.333ZM10.666 1.333V4M5.333 1.333V4M2 6.667h12",
    }),
  });

const In = ({ size: t = 24 }) =>
  u("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: t,
    height: t,
    fill: "none",
    viewBox: "0 0 24 24",
    children: u("path", {
      fill: "currentColor",
      fillRule: "evenodd",
      d: "M18.723 10.043a.918.918 0 0 0-.658-.261c-1.069 0-1.939.832-1.939 1.853 0 .015 0 .049-.004.06l-.008 1.876c0 .22-.18.392-.41.392a.397.397 0 0 1-.41-.392V5.948c0-.366-.153-.722-.42-.98-.548-.52-1.48-.523-2.045.003-.27.27-.42.618-.42.977v5.034a.401.401 0 0 1-.409.391c-.219 0-.41-.182-.41-.391v-6.61a1.342 1.342 0 0 0-.422-.968 1.408 1.408 0 0 0-.471-.3 1.513 1.513 0 0 0-1.098-.001 1.426 1.426 0 0 0-.783.747c-.072.156-.11.342-.11.522v6.61a.401.401 0 0 1-.41.391c-.219 0-.41-.182-.41-.391V7.126c0-.736-.671-1.382-1.438-1.382C5.677 5.744 5 6.385 5 7.116v7.276c.023 1.768.759 3.426 2.074 4.67A7.162 7.162 0 0 0 12 21a7.16 7.16 0 0 0 4.926-1.937c1.315-1.245 2.052-2.907 2.074-4.684v-3.704c0-.241-.097-.461-.277-.632Z",
      clipRule: "evenodd",
    }),
  });

const Sn = ({ size: t = 24 }) =>
  u("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: t,
    height: t,
    fill: "none",
    viewBox: "0 0 24 24",
    children: u("path", {
      fill: "currentColor",
      fillRule: "evenodd",
      d: "M18.532 5.497C17.905 4.83 12.91 3 12 3c-.91 0-5.906 1.83-6.532 2.498-.497.533-.491.944-.452 3.218.016.923.037 2.18.037 3.919 0 6.07 6.75 8.322 6.818 8.345a.424.424 0 0 0 .258 0c.068-.023 6.818-2.276 6.818-8.345 0-1.735.021-2.99.037-3.912.038-2.28.046-2.691-.453-3.226Z",
      clipRule: "evenodd",
    }),
  });

const Ln = "L-PzWuiQ";
const Mn = "oXH-hyO9";
const Bn = "nQLamJ2B";
const xn = "gTC1YNf4";
const Fn = "_-4yHS7h8";
const An = "_2Ks-COe5";
const Rn = "DQuZdM2t";

const Q = {
  form: Ln,
  field: Mn,
  label: Bn,
  hint: xn,
  fieldError: Fn,
  error: An,
  actions: Rn,
};

function Tn({ onClose: t, onBack: a }) {
  const [u, r] = d("");
  const [n, h] = d("");
  const [i, B] = d("");
  const [$, y] = d(false);
  const [L, R] = d(null);
  const [w, m] = d({});

  const M = async (P) => {
    P.preventDefault();
    R(null);
    m({});

    if (n !== i) {
      m({ confirmPassword: "Пароли не совпадают" });
      return;
    }

    if (n.length < 10) {
      m({ newPassword: "Минимум 10 символов" });
      return;
    }
    if (n.length > 128) {
      m({ newPassword: "Максимум 128 символов" });
      return;
    }
    if (!/^[\x21-\x7E]+$/.test(n)) {
      m({ newPassword: "Только латиница, цифры и знаки пунктуации" });
      return;
    }
    y(true);
    try {
      await a.changePassword({ currentPassword: u, newPassword: n });
      await b_1.getState().logout();
      t();
    } catch (N) {
      if (i(N)) {
        if (N.code === "CURRENT_PASSWORD_INCORRECT") {
          m({ currentPassword: "Неверный текущий пароль" });
        } else if (N.errors) {
          const V = {};
          for (const [z, T] of Object.entries(N.errors)) {
            V[z] = T[0] || "Ошибка валидации";
          }
          m(V);
        } else {
          R(N.message || "Не удалось сменить пароль");
        }
      } else {
        R("Не удалось сменить пароль");
      }
    } finally {
      y(false);
    }
  };

  const D = u.length > 0 && n.length >= 10 && i.length > 0;
  return u(M, {
    onClose: a,
    title: "Смена пароля",
    children: u("form", {
      onSubmit: M,
      className: Q.form,
      children: [
        u("div", {
          className: Q.field,
          children: [
            u("label", { className: Q.label, children: "Текущий пароль" }),
            u(I_1, {
              type: "password",
              value: u,
              onChange: r,
              placeholder: "Введите текущий пароль",
              autoComplete: "current-password",
            }),
            w.currentPassword &&
              u("span", {
                className: Q.fieldError,
                children: w.currentPassword,
              }),
          ],
        }),
        u("div", {
          className: Q.field,
          children: [
            u("label", { className: Q.label, children: "Новый пароль" }),
            u(I_1, {
              type: "password",
              value: n,
              onChange: h,
              placeholder: "Введите новый пароль",
              autoComplete: "new-password",
            }),
            u("span", {
              className: Q.hint,
              children: "Минимум 10 символов, латиница, цифры и пунктуация",
            }),
            w.newPassword &&
              u("span", { className: Q.fieldError, children: w.newPassword }),
          ],
        }),
        u("div", {
          className: Q.field,
          children: [
            u("label", {
              className: Q.label,
              children: "Подтверждение пароля",
            }),
            u(I_1, {
              type: "password",
              value: i,
              onChange: B,
              placeholder: "Повторите новый пароль",
              autoComplete: "new-password",
            }),
            w.confirmPassword &&
              u("span", {
                className: Q.fieldError,
                children: w.confirmPassword,
              }),
          ],
        }),
        L && u("div", { className: Q.error, children: L }),
        u("div", {
          className: Q.actions,
          children: [
            u(B, {
              type: "button",
              variant: "secondary",
              onClick: a,
              disabled: $,
              children: "Отмена",
            }),
            u(B, {
              type: "submit",
              disabled: !D || $,
              children: $ ? "Сохранение..." : "Сменить пароль",
            }),
          ],
        }),
      ],
    }),
  });
}
function En() {
  const { theme: t, setTheme: a } = c();
  return u(k_1, {
    children: [
      u("h2", { className: s.contentTitle, children: "Оформление" }),
      u("div", {
        className: s.section,
        children: u("div", {
          className: s.settingItem,
          children: [
            u("div", {
              className: s.settingInfo,
              children: u("div", {
                className: s.settingText,
                children: [
                  u("span", { className: s.settingTitle, children: "Тема" }),
                  u("span", {
                    className: s.settingDescription,
                    children: "Выберите цветовую схему приложения",
                  }),
                ],
              }),
            }),
            u(s_1, { value: t, options: t, onChange: (u) => a(u) }),
          ],
        }),
      }),
    ],
  });
}
function $n({ onChangePassword: t }) {
  return u(k_1, {
    children: [
      u("h2", { className: s.contentTitle, children: "Безопасность" }),
      u("div", {
        className: s.section,
        children: u("div", {
          className: s.settingItem,
          children: [
            u("div", {
              className: s.settingInfo,
              children: u("div", {
                className: s.settingText,
                children: [
                  u("span", { className: s.settingTitle, children: "Пароль" }),
                  u("span", {
                    className: s.settingDescription,
                    children: "Изменить пароль от аккаунта",
                  }),
                ],
              }),
            }),
            u(B, { size: "sm", onClick: t, children: "Сменить пароль" }),
          ],
        }),
      }),
    ],
  });
}
const Dn = [
  { id: "account", icon: u_1, label: "Аккаунт" },
  { id: "appearance", icon: f_1, label: "Оформление" },
  { id: "security", icon: Sn, label: "Безопасность" },
  { id: "privacy", icon: In, label: "Приватность" },
  { id: "notifications", icon: g, label: "Уведомления" },
];
function zn({ onClose: t }) {
  const [a, u] = d("account");
  const [r, n] = d(null);
  const [h, i] = d(false);
  const [B, $] = d({});
  const [y, L] = d({});
  const R = A(null);
  const w = A(null);
  const m = A(null);
  const M = Object.values(B).some(Boolean);
  const D = Object.values(y).some(Boolean);

  const P = q(
    (p) => (U) => {
      $((O) => ({
        ...O,
        [p]: U,
      }));
    },
    []
  );

  const N = q(
    (p) => (U) => {
      L((O) => ({
        ...O,
        [p]: U,
      }));
    },
    []
  );

  const V = async () => {
    const p = [];

    if (B.account) {
      p.push(R.current?.save() ?? Promise.resolve());
    }

    if (B.notifications) {
      p.push(w.current?.save() ?? Promise.resolve());
    }

    if (B.privacy) {
      p.push(m.current?.save() ?? Promise.resolve());
    }

    await Promise.all(p);
  };

  const z = () => {
    R.current?.discard();
    w.current?.discard();
    m.current?.discard();
  };

  const T = (p) => {
    if (p !== a) {
      if (M) {
        n({ type: "tab", tab: p });
      } else {
        u(p);
      }
    }
  };

  const W = () => {
    if (M) {
      n({ type: "close" });
    } else {
      t();
    }
  };

  const x = () => {
    z();
    const p = r;
    n(null);

    if (p?.type === "tab") {
      u(p.tab);
    } else if (p?.type === "close") {
      t();
    }
  };

  const J = async () => {
    await V();
    const p = r;
    n(null);

    if (p?.type === "tab") {
      u(p.tab);
    } else if (p?.type === "close") {
      t();
    }
  };

  const K = () => {
    switch (a) {
      case "account": {
        return u(h, {
          ref: R,
          onDirtyChange: P("account"),
          onSavingChange: N("account"),
          onClose: t,
        });
      }
      case "appearance": {
        return u(En, {});
      }
      case "security": {
        return u($n, { onChangePassword: () => i(true) });
      }
      case "notifications": {
        return u(N, {
          ref: w,
          onDirtyChange: P("notifications"),
          onSavingChange: N("notifications"),
        });
      }
      case "privacy": {
        return u(P, {
          ref: m,
          onDirtyChange: P("privacy"),
          onSavingChange: N("privacy"),
        });
      }
    }
  };

  return h
    ? u(Tn, { onClose: t, onBack: () => i(false) })
    : u(M, {
        onClose: W,
        frameless: true,
        size: "wide",
        className: s.modalContainer,
        children: u("div", {
          className: s.settingsModal,
          children: [
            u("div", {
              className: s.sidebar,
              children: [
                u("div", { className: s.sidebarTitle, children: "Настройки" }),
                u("nav", {
                  children: Dn.map((p) =>
                    u(
                      "button",
                      {
                        type: "button",
                        className: `${s.navItem} ${a === p.id ? s.active : ""}`,
                        onClick: () => T(p.id),
                        children: [
                          u(p.icon, {}),
                          u("span", { children: p.label }),
                        ],
                      },
                      p.id
                    )
                  ),
                }),
              ],
            }),
            u("div", {
              className: s.contentWrapper,
              children: [
                u("div", { className: s.content, children: K() }),
                M &&
                  u("div", {
                    className: s.actionBar,
                    children: [
                      u(B, {
                        variant: "secondary",
                        onClick: W,
                        children: "Отмена",
                      }),
                      u(B, {
                        variant: "primary",
                        onClick: V,
                        disabled: D,
                        loading: D,
                        children: "Сохранить",
                      }),
                    ],
                  }),
              ],
            }),
            r &&
              u("div", {
                className: s.confirmOverlay,
                children: u("div", {
                  className: s.confirmDialog,
                  children: [
                    u("div", {
                      className: s.confirmText,
                      children: [
                        "У вас есть несохранённые изменения.",
                        `
`,
                        "Сохранить?",
                      ],
                    }),
                    u("div", {
                      className: s.confirmActions,
                      children: [
                        u(B, {
                          variant: "secondary",
                          onClick: x,
                          children: "Не сохранять",
                        }),
                        u(B, {
                          variant: "accent",
                          onClick: J,
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
const Un = "-sE1X4FD";
const jn = "xpvwp-rl";
const Vn = "_9n4VLpjh";
const Wn = "ZsCn2sgV";
const On = "_248T2ZtV";
const me = { checkbox: Un, disabled: jn, input: Vn, checkmark: Wn, label: On };
function qn({
  checked: t,
  onChange: a,
  label: u,
  disabled: r = false,
  className: n = "",
}) {
  const h = (i) => {
    a(i.target.checked);
  };
  return u("label", {
    className: `${me.checkbox} ${r ? me.disabled : ""} ${n}`,
    children: [
      u("input", {
        type: "checkbox",
        checked: t,
        onChange: h,
        disabled: r,
        className: me.input,
      }),
      u("span", { className: me.checkmark }),
      u && u("span", { className: me.label, children: u }),
    ],
  });
}
const _n = "clHUi236";
const Hn = "yiO0wbWK";
const Zn = "sMnMo9RR";
const Xn = "csorFBDI";
const Kn = "xUb4GhPl";
const Gn = "Tfk454-S";
const Yn = "IEwsd6vv";
const Qn = "NKbAkExq";
const Jn = "A6o1aA7A";
const et = "ZpUj8PQa";
const nt = "rRMuZ0yV";
const tt = "CHE2D-gj";
const st = "u9XlaVeB";
const at = "trJ3W3kj";
const ot = "dKyMWEKh";

const k = {
  userListModal: _n,
  content: Hn,
  userList: Zn,
  userItem: Xn,
  clickable: Kn,
  userInfo: Gn,
  displayName: Yn,
  username: Qn,
  followButton: Jn,
  actionButtons: et,
  acceptButton: nt,
  rejectButton: tt,
  actionStatus: st,
  empty: at,
  loadMoreSentinel: ot,
};

function Se({ userId: t, type: a, title: u, onCountChange: r }) {
  const { closeModal: n } = B_1();

  const h = b_1((s) => s.profile?.id);

  const i = A(null);
  const B = `${t || "me"}-${a}`;
  const [$, y] = d([]);
  const [L, R] = d(true);
  const [w, m] = d(false);
  const [M, D] = d(null);
  const [P, N] = d(new Map());
  const [V, z] = d(new Set());
  const [T, W] = d(new Map());
  const [x, J] = d(new Set());
  const K = A(null);
  const p = a === "pending-incoming";
  const U = a === "pending-outgoing";

  if (i.current !== B) {
    i.current = B;
    y([]);
    R(true);
    D(null);
    N(new Map());
    z(new Set());
    W(new Map());
    J(new Set());
  }

  const O = q(
    async (s) => {
      const A = !s;

      if (A) {
        R(true);
      } else {
        m(true);
      }

      try {
        let c;
        switch (a) {
          case "followers": {
            if (!t) {
              throw new Error("userId required for followers");
            }
            c = await l.getFollowers(t, { limit: 20, cursor: s });
            break;
          }
          case "following": {
            if (!t) {
              throw new Error("userId required for following");
            }
            c = await l.getFollowing(t, { limit: 20, cursor: s });
            break;
          }
          case "pending-incoming": {
            c = { data: [], nextCursor: null };
            break;
          }
          case "pending-outgoing": {
            c = { data: [], nextCursor: null };
            break;
          }
        }
        if (A) {
          y(c.data);
          const v = new Map();

          c.data.forEach((C) => {
            if (C.interaction.isFollowing) {
              v.set(C.userId, "following");
            } else if (C.interaction.hasOutgoingRequest) {
              v.set(C.userId, "requested");
            } else {
              v.set(C.userId, null);
            }
          });

          N(v);
        } else {
          y((v) => {
            const C = new Set(v.map((G) => G.userId));

            const E = c.data.filter((G) => !C.has(G.userId));

            return [...v, ...E];
          });

          N((v) => {
            const C = new Map(v);

            c.data.forEach((E) => {
              if (!C.has(E.userId)) {
                if (E.interaction.isFollowing) {
                  C.set(E.userId, "following");
                } else if (E.interaction.hasOutgoingRequest) {
                  C.set(E.userId, "requested");
                } else {
                  C.set(E.userId, null);
                }
              }
            });

            return C;
          });
        }
        D(c.nextCursor);
      } catch (c) {
        console.error("Failed to fetch users:", c);
      } finally {
        R(false);
        m(false);
      }
    },
    [t, a]
  );

  y(() => {
    O();
  }, [O]);

  y(() => {
    if (!M || w) {
      return;
    }

    const s = new IntersectionObserver(
      (c) => {
        if (c[0].isIntersecting) {
          O(M);
        }
      },
      { rootMargin: "100px" }
    );

    const A = K.current;

    if (A) {
      s.observe(A);
    }

    return () => {
      if (A) {
        s.unobserve(A);
      }
    };
  }, [M, w, O]);

  const oe = q(
    async (s, A) => {
      A.stopPropagation();

      if (!V.has(s)) {
        z((c) => new Set(c).add(s));
        try {
          const c = P.get(s);
          if (c === "following" || c === "requested") {
            await l.unfollowUser(s);

            N((v) => {
              const C = new Map(v);
              C.set(s, null);
              return C;
            });
          } else {
            const v = await l.followUser(s);
            N((C) => {
              const E = new Map(C);
              E.set(s, v);
              return E;
            });
          }
        } catch (c) {
          console.error("Failed to toggle follow:", c);
        } finally {
          z((c) => {
            const v = new Set(c);
            v.delete(s);
            return v;
          });
        }
      }
    },
    [P, V]
  );

  const _ = q(
    async (s, A) => {
      A.stopPropagation();

      if (!x.has(s)) {
        console.warn("acceptFollowRequest not implemented in old backend");
      }
    },
    [x]
  );

  const ee = q(
    async (s, A) => {
      A.stopPropagation();

      if (!x.has(s)) {
        console.warn("removeFollower not implemented in old backend");
      }
    },
    [x]
  );

  const ae = q(
    async (s, A) => {
      A.stopPropagation();

      if (!x.has(s)) {
        J((c) => new Set(c).add(s));
        try {
          await l.unfollowUser(s);

          W((c) => {
            const v = new Map(c);
            v.set(s, "rejected");
            return v;
          });
        } catch (c) {
          console.error("Failed to cancel follow request:", c);
        } finally {
          J((c) => {
            const v = new Set(c);
            v.delete(s);
            return v;
          });
        }
      }
    },
    [x]
  );

  const se = q(
    (s) => {
      if (s) {
        n();
        $(`/@${s}`);
      }
    },
    [n]
  );

  const X = () => {
    switch (a) {
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

  return u(M, {
    onClose: n,
    title: u,
    className: k.userListModal,
    children: u("div", {
      className: k.content,
      children: L
        ? u(m, {})
        : $.length === 0
        ? u("div", { className: k.empty, children: X() })
        : u("div", {
            className: k.userList,
            children: [
              $.map((s) => {
                const A = P.get(s.userId);
                const c = A === "following";
                const v = A === "requested";
                const C = V.has(s.userId);
                const E = s.userId === h;
                const G = T.get(s.userId);
                const F = x.has(s.userId);

                const Y = () =>
                  c ? "Отписаться" : v ? "Отменить" : "Подписаться";

                if (p) {
                  return u(
                    "div",
                    {
                      className: `${k.userItem} ${
                        s.username ? k.clickable : ""
                      }`,
                      onClick: () => se(s.username),
                      children: [
                        u(n, { src: s.avatar, size: "md" }),
                        u("div", {
                          className: k.userInfo,
                          children: [
                            u(U, {
                              name: s.displayName,
                              verified: s.isVerified,
                              pin: s.pin,
                              size: "md",
                              className: k.displayName,
                            }),
                            s.username &&
                              u("span", {
                                className: k.username,
                                children: ["@", s.username],
                              }),
                          ],
                        }),
                        G === "accepted"
                          ? u("span", {
                              className: k.actionStatus,
                              children: "Принято",
                            })
                          : G === "rejected"
                          ? u("span", {
                              className: k.actionStatus,
                              children: "Отклонено",
                            })
                          : u("div", {
                              className: k.actionButtons,
                              children: [
                                u(B, {
                                  size: "sm",
                                  variant: "primary",
                                  disabled: F,
                                  onClick: (q) => _(s.userId, q),
                                  className: k.acceptButton,
                                  children: u(I_2, { size: 16 }),
                                }),
                                u(B, {
                                  size: "sm",
                                  variant: "secondary",
                                  disabled: F,
                                  onClick: (q) => ee(s.userId, q),
                                  className: k.rejectButton,
                                  children: u(o, { size: 16 }),
                                }),
                              ],
                            }),
                      ],
                    },
                    s.userId
                  );
                }

                if (U) {
                  return u(
                    "div",
                    {
                      className: `${k.userItem} ${
                        s.username ? k.clickable : ""
                      }`,
                      onClick: () => se(s.username),
                      children: [
                        u(n, { src: s.avatar, size: "md" }),
                        u("div", {
                          className: k.userInfo,
                          children: [
                            u(U, {
                              name: s.displayName,
                              verified: s.isVerified,
                              pin: s.pin,
                              size: "md",
                              className: k.displayName,
                            }),
                            s.username &&
                              u("span", {
                                className: k.username,
                                children: ["@", s.username],
                              }),
                          ],
                        }),
                        G === "rejected"
                          ? u("span", {
                              className: k.actionStatus,
                              children: "Отменено",
                            })
                          : u(B, {
                              size: "sm",
                              variant: "secondary",
                              disabled: F,
                              onClick: (q) => ae(s.userId, q),
                              className: k.followButton,
                              children: "Отменить",
                            }),
                      ],
                    },
                    s.userId
                  );
                }

                return u(
                  "div",
                  {
                    className: `${k.userItem} ${s.username ? k.clickable : ""}`,
                    onClick: () => se(s.username),
                    children: [
                      u(n, { src: s.avatar, size: "md" }),
                      u("div", {
                        className: k.userInfo,
                        children: [
                          u(U, {
                            name: s.displayName,
                            verified: s.isVerified,
                            size: "md",
                            className: k.displayName,
                          }),
                          s.username &&
                            u("span", {
                              className: k.username,
                              children: ["@", s.username],
                            }),
                        ],
                      }),
                      !E &&
                        u(B, {
                          size: "sm",
                          variant: c || v ? "secondary" : "primary",
                          disabled: C,
                          onClick: (q) => oe(s.userId, q),
                          className: k.followButton,
                          children: Y(),
                        }),
                    ],
                  },
                  s.userId
                );
              }),
              M &&
                u("div", {
                  ref: K,
                  className: k.loadMoreSentinel,
                  children: w && u(m, { size: "sm" }),
                }),
            ],
          }),
    }),
  });
}
const it = "_2uZqwv31";
const rt = "n1bAn5KB";
const lt = "_5CkFRdhv";
const ct = "_0PddXEMG";
const dt = "KS4RxOQ2";
const ut = "x0i4BYqy";
const ht = "GH3ZRjz3";
const ft = "Mic5Lsx0";
const mt = "d5PWRv19";
const pt = "_8A6hckjC";
const gt = "_6K5CbR-T";
const wt = "UPtTJ7RZ";
const vt = "G1zp6CtS";
const bt = "gfCy5iZ-";
const yt = "aoFNSXhn";
const Nt = "_6G2DsFIq";
const Ct = "_7IsCrdcT";
const kt = "Q6BWkOKZ";
const Pt = "pJ6wP8rM";
const It = "UsWKjPqW";

const I = {
  modal: it,
  content: rt,
  statusIcon: lt,
  title: ct,
  description: dt,
  rejectionNotice: ut,
  rejectionTitle: ht,
  rejectionReason: ft,
  fileInput: mt,
  dropzone: pt,
  dropzoneIcon: gt,
  dropzoneText: wt,
  dropzoneHint: vt,
  preview: bt,
  video: yt,
  removeButton: Nt,
  error: Ct,
  progressBar: kt,
  progressFill: Pt,
  actions: It,
};

const St = 50 * 1024 * 1024;
const Lt = ["video/mp4", "video/webm", "video/quicktime"];
function Mt({ onClose: t }) {
  const [a, u] = d("loading");
  const [r, n] = d(null);
  const [h, i] = d(null);
  const [B, $] = d(false);
  const [y, L] = d(false);
  const [R, w] = d(null);
  const [m, M] = d(0);
  const D = A(null);

  y(() => {
    (async () => {
      try {
        const W = await p.getVerificationStatus();
        u(W);
      } catch (W) {
        console.error("Failed to load verification status:", W);
        u(null);
      }
    })();
  }, []);

  y(
    () => () => {
      if (h) {
        URL.revokeObjectURL(h);
      }
    },
    [h]
  );

  const P = (T) => {
    const x = T.target.files?.[0];
    if (x) {
      w(null);

      if (!Lt.includes(x.type)) {
        w("Поддерживаются только форматы MP4, WebM и MOV");
        return;
      }

      if (x.size > St) {
        w("Размер видео не должен превышать 50 МБ");
        return;
      }

      if (h) {
        URL.revokeObjectURL(h);
      }

      n(x);
      i(URL.createObjectURL(x));
    }
  };

  const N = () => {
    D.current?.click();
  };

  const V = () => {
    if (h) {
      URL.revokeObjectURL(h);
    }

    n(null);
    i(null);

    if (D.current) {
      D.current.value = "";
    }
  };

  const z = async () => {
    if (!(!r || !B)) {
      L(true);
      w(null);
      M(0);
      try {
        M(30);
        const T = await r.uploadMedia(r);
        M(70);
        await p.submitVerificationRequest(T.url);
        M(100);
        const W = await p.getVerificationStatus();
        u(W);
      } catch (T) {
        console.error("Failed to submit verification request:", T);
        w("Не удалось отправить заявку. Попробуйте позже.");
      } finally {
        L(false);
      }
    }
  };

  if (a === "loading") {
    return u(M, {
      onClose: t,
      showHeader: false,
      className: I.modal,
      children: u("div", { className: I.content, children: u(m, {}) }),
    });
  }

  if (
    a &&
    typeof a == "object" &&
    (a.status === "pending" || a.status === "approved")
  ) {
    return u(M, {
      onClose: t,
      showHeader: false,
      className: I.modal,
      children: u("div", {
        className: I.content,
        children: [
          u("div", {
            className: I.statusIcon,
            children:
              a.status === "approved"
                ? u("svg", {
                    width: "48",
                    height: "48",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "var(--accent-primary)",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    children: [
                      u("path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14" }),
                      u("polyline", { points: "22 4 12 14.01 9 11.01" }),
                    ],
                  })
                : u("svg", {
                    width: "48",
                    height: "48",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "var(--text-secondary)",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    children: [
                      u("circle", { cx: "12", cy: "12", r: "10" }),
                      u("polyline", { points: "12 6 12 12 16 14" }),
                    ],
                  }),
          }),
          u("h2", {
            className: I.title,
            children:
              a.status === "approved"
                ? "Вы верифицированы!"
                : "Заявка на рассмотрении",
          }),
          u("p", {
            className: I.description,
            children:
              a.status === "approved"
                ? "Поздравляем! Ваш аккаунт верифицирован."
                : "Ваша заявка на верификацию находится на рассмотрении. Мы уведомим вас о результате.",
          }),
          u("div", {
            className: I.actions,
            children: u(B, {
              variant: "primary",
              onClick: () => t(),
              children: "Понятно",
            }),
          }),
        ],
      }),
    });
  }

  return u(M, {
    onClose: t,
    showHeader: false,
    className: I.modal,
    children: u("div", {
      className: I.content,
      children: [
        u("h2", { className: I.title, children: "Верификация" }),
        u("p", {
          className: I.description,
          children:
            "Запишите видео, в котором объясните, почему вам нужна галочка и без неё никак.",
        }),
        a?.status === "rejected" &&
          u("div", {
            className: I.rejectionNotice,
            children: [
              u("span", {
                className: I.rejectionTitle,
                children: "Предыдущая заявка отклонена",
              }),
              a.reason &&
                u("span", {
                  className: I.rejectionReason,
                  children: a.reason,
                }),
            ],
          }),
        u("input", {
          ref: D,
          type: "file",
          accept: "video/mp4,video/webm,video/quicktime,.mp4,.webm,.mov",
          onChange: P,
          className: I.fileInput,
        }),
        r
          ? u("div", {
              className: I.preview,
              children: [
                u("video", { src: h, controls: true, className: I.video }),
                u("button", {
                  className: I.removeButton,
                  onClick: V,
                  type: "button",
                  children: u("svg", {
                    width: "20",
                    height: "20",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    children: [
                      u("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
                      u("line", { x1: "6", y1: "6", x2: "18", y2: "18" }),
                    ],
                  }),
                }),
              ],
            })
          : u("div", {
              className: I.dropzone,
              onClick: N,
              children: [
                u("div", {
                  className: I.dropzoneIcon,
                  children: u("svg", {
                    width: "48",
                    height: "48",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "1.5",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    children: [
                      u("polygon", { points: "23 7 16 12 23 17 23 7" }),
                      u("rect", {
                        x: "1",
                        y: "5",
                        width: "15",
                        height: "14",
                        rx: "2",
                        ry: "2",
                      }),
                    ],
                  }),
                }),
                u("span", {
                  className: I.dropzoneText,
                  children: "Нажмите, чтобы выбрать видео",
                }),
                u("span", {
                  className: I.dropzoneHint,
                  children: "MP4, WebM или MOV, до 50 МБ",
                }),
              ],
            }),
        R && u("div", { className: I.error, children: R }),
        y &&
          u("div", {
            className: I.progressBar,
            children: u("div", {
              className: I.progressFill,
              style: { width: `${m}%` },
            }),
          }),
        u(qn, {
          checked: B,
          onChange: $,
          disabled: y,
          label:
            "Я соглашаюсь с тем, что моё видео может быть использовано в контенте Nowkie",
        }),
        u("div", {
          className: I.actions,
          children: [
            u(B, {
              variant: "secondary",
              onClick: () => t(),
              disabled: y,
              children: "Отмена",
            }),
            u(B, {
              variant: "primary",
              onClick: z,
              disabled: !r || !B || !B || y,
              children: y ? "Отправка..." : "Отправить заявку",
            }),
          ],
        }),
      ],
    }),
  });
}
const Bt = "cIObOWX1";
const xt = "CsIbGceP";
const Ft = "AEG6P-zR";
const At = "_4DLI4vxA";
const Rt = "-Or9HeQV";
const Tt = "r2TckDeC";
const Et = "BLErSWUX";
const $t = "-KzyufFU";
const Dt = "ZDyP3TiR";
const zt = "z4EUhqrg";
const Ut = "-D3fn7RS";
const jt = "h-5Dd8A9";
const Vt = "iLZE-6Ka";
const Wt = "NkXf1I05";
const Ot = "lMt54pXx";
const qt = "Evwe2Uf-";
const _t = "XHxlUBEZ";
const Ht = "NxlmS7bS";
const Zt = "Xnp1EFrD";
const Xt = "HkPDFh5Y";
const Kt = "at4eWYfl";
const Gt = "GVHheubk";
const Yt = "-rjihNlb";
const Qt = "hSN99swS";
const Jt = "wD-vYWrg";
const es = "LIXEFTYA";
const ns = "XHEEbVAb";
const ts = "udD7eGIN";
const ss = "XJHSs8qR";
const as = "E0F6ysgZ";

const f = {
  page: Bt,
  tabsWrapper: xt,
  tabs: Ft,
  createPostWrapper: At,
  writePostButton: Rt,
  profileCard: Tt,
  banner: Et,
  bannerActions: $t,
  bannerActionButton: Dt,
  deleteBannerButton: zt,
  profileContent: Ut,
  avatarRow: jt,
  avatar: Vt,
  actions: Wt,
  mobileActions: Ot,
  infoContainer: qt,
  userInfo: _t,
  name: Ht,
  username: Zt,
  bio: Xt,
  metaItem: Kt,
  followsYou: Gt,
  stats: Yt,
  stat: Qt,
  clickable: Jt,
  statValue: es,
  statLabel: ns,
  error: ts,
  bannerPlaceholder: ss,
  emptyPosts: as,
};

const os = "EEr4AufL";
const is = "oMgX9Ykl";
const rs = "vffvZARh";
const ls = "GoKIwSa0";
const cs = "ovvEebnP";
const ds = "Pl-AQ1t9";

const ce = {
  content: os,
  title: is,
  description: rs,
  username: ls,
  warning: cs,
  actions: ds,
};

function us({
  username: t,
  displayName: a,
  avatar: u,
  onConfirm: r,
  onClose: n,
}) {
  const h = () => {
    r();
    n();
  };
  return u(M, {
    onClose: n,
    showHeader: false,
    children: u("div", {
      className: ce.content,
      children: [
        u(n, { src: u, alt: a, size: "lg" }),
        u("h2", {
          className: ce.title,
          children: "Заблокировать пользователя?",
        }),
        u("p", {
          className: ce.description,
          children: [
            "Вы уверены, что хотите заблокировать",
            " ",
            u("strong", { children: a }),
            t &&
              u("span", { className: ce.username, children: [" (@", t, ")"] }),
            "?",
          ],
        }),
        u("p", {
          className: ce.warning,
          children:
            "Заблокированный пользователь не сможет видеть ваш профиль и контент.",
        }),
        u("div", {
          className: ce.actions,
          children: [
            u(B, {
              variant: "secondary",
              onClick: () => n(),
              fullWidth: true,
              children: "Отмена",
            }),
            u(B, {
              variant: "danger",
              onClick: () => h(),
              fullWidth: true,
              children: "Заблокировать",
            }),
          ],
        }),
      ],
    }),
  });
}
function Le(t, a, u, r) {
  const n = Math.abs(t);
  const h = n % 10;
  const i = n % 100;
  return i >= 11 && i <= 19 ? r : h === 1 ? a : h >= 2 && h <= 4 ? u : r;
}
function hs(t) {
  if (!t) {
    return null;
  }
  switch (t.unit) {
    case "just_now": {
      return "только что";
    }
    case "minutes": {
      const a = t.value ?? 1;
      const u = Le(a, "минуту", "минуты", "минут");
      return `${a} ${u} назад`;
    }
    case "hours": {
      const a = t.value ?? 1;
      const u = Le(a, "час", "часа", "часов");
      return `${a} ${u} назад`;
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
function Me(t) {
  return t >= 1000000 /* 1e6 */
    ? `${(t / 1000000) /* 1e6 */
        .toFixed(1)}M`
    : t >= 1000 /* 1e3 */
    ? `${(t / 1000) /* 1e3 */
        .toFixed(1)}K`
    : t.toString();
}
function Be({
  followers: t,
  following: a,
  isPhone: u = false,
  onFollowersClick: r,
  onFollowingClick: n,
}) {
  return u("div", {
    className: f.stats,
    children: [
      u("div", {
        className: `${f.stat} ${r ? f.clickable : ""}`,
        onClick: r,
        children: [
          u("span", { className: f.statValue, children: Me(t) }),
          u("span", { className: f.statLabel, children: "подписчиков" }),
        ],
      }),
      u && u("hr", {}),
      u("div", {
        className: `${f.stat} ${n ? f.clickable : ""}`,
        onClick: n,
        children: [
          u("span", { className: f.statValue, children: Me(a) }),
          u("span", { className: f.statLabel, children: "подписок" }),
        ],
      }),
    ],
  });
}
function fs({
  isOwnProfile: t,
  isFollowing: a,
  isRequested: u = false,
  isFollowLoading: r,
  onEditProfile: n,
  onToggleFollow: h,
  fullWidth: i = false,
}) {
  return t
    ? u(B, { onClick: n, fullWidth: i, children: "Редактировать" })
    : u(B, {
        variant: a || u ? "secondary" : "primary",
        onClick: h,
        disabled: r,
        fullWidth: i,
        children: a
          ? u(k_1, { children: [u(I_2, { size: 18 }), "Вы подписаны"] })
          : u
          ? "Заявка отправлена"
          : u(k_1, { children: [u(z, { size: 18 }), "Подписаться"] }),
      });
}
function xe({
  isOwnProfile: t,
  isVerified: a = false,
  isBlocked: u = false,
  onVerificationRequest: r,
  onBlockUser: n,
  onReportUser: h,
  ...i
}) {
  const $ = (() => {
    const y = [];

    if (!t && n) {
      y.push({
        id: "block",
        label: u ? "Разблокировать" : "Заблокировать",
        icon: u(kn, { size: 18 }),
        danger: !u,
        onClick: n,
      });
    }

    if (!t && h) {
      y.push({
        id: "report",
        label: "Пожаловаться",
        icon: u(x, { size: 18 }),
        danger: true,
        onClick: h,
      });
    }

    return y;
  })();
  return u("div", {
    className: f.actions,
    children: [
      $.length > 0 &&
        u(D, {
          trigger: u(B, {
            variant: "secondary",
            iconOnly: true,
            children: u(v, { size: 18 }),
          }),
          items: $,
          position: "bottom-right",
        }),
      t &&
        !a &&
        r &&
        u(B, {
          variant: "secondary",
          iconOnly: true,
          onClick: r,
          children: u(w, { size: 18 }),
        }),
      u(fs, { isOwnProfile: t, isVerified: a, ...i }),
    ],
  });
}
function ms(t) {
  return new Date(t).toLocaleDateString("ru-RU", {
    month: "long",
    year: "numeric",
  });
}
function ps({
  profile: t,
  isOwnProfile: a,
  isFollowing: u,
  isRequested: r = false,
  isFollowLoading: n,
  isBlocked: h = false,
  isFollowedBy: i = false,
  isPhone: B,
  onEditProfile: $,
  onToggleFollow: y,
  onBlockUser: L,
  onFollowersClick: R,
  onFollowingClick: w,
  onBannerUpdate: m,
}) {
  const [M, D] = d(false);
  const { openModal: P, closeModal: N } = B_1();

  const V = q(() => {
    D(true);
  }, []);

  const z = q(() => {
    P(u(Mt, { onClose: N }));
  }, [P, N]);

  const T = q(() => {
    if (h) {
      L?.();
      return;
    }
    P(
      u(us, {
        username: t.username || "",
        displayName: t.displayName,
        avatar: t.avatar,
        onConfirm: () => L?.(),
        onClose: N,
      })
    );
  }, [h, L, P, N, t]);

  const W = q(() => {
    P(u(R, { targetType: "user", targetId: t.id, onClose: N }));
  }, [P, N, t.id]);

  const x = q(() => {
    D(false);
  }, []);

  const J = q(async () => {
    try {
      await p.updateProfile({ bannerId: null });
      m?.(null);
    } catch (p) {
      console.error("Failed to delete banner:", p);
    }
  }, [m]);

  const K = q(
    async (p) => {
      try {
        const [U, O] = p.split(",");
        const oe = U.match(/:(.*?);/)?.[1] || "image/png";
        const _ = atob(O);
        const ee = new Uint8Array(_.length);
        for (let s = 0; s < _.length; s++) {
          ee[s] = _.charCodeAt(s);
        }
        const ae = new Blob([ee], { type: oe });
        const se = new File([ae], "banner.png", { type: "image/png" });
        const X = await r.uploadMedia(se);
        await p.updateProfile({ bannerId: X.id });

        m?.({
          id: X.id,
          type: "image",
          url: X.url,
          width: X.width,
          height: X.height,
        });
      } catch (U) {
        console.error("Failed to upload banner:", U);
        C.error("Не удалось загрузить баннер");
        throw U;
      }
    },
    [m]
  );

  return u("div", {
    className: f.profileCard,
    children: [
      u("div", {
        className: f.banner,
        children: [
          t.banner?.url
            ? u("img", { src: t.banner.url, alt: "Banner" })
            : u("div", { className: f.bannerPlaceholder }),
          a &&
            u("div", {
              className: f.bannerActions,
              children: [
                u("button", {
                  className: f.bannerActionButton,
                  onClick: V,
                  title: "Нарисовать баннер",
                  children: u(f_1, { size: 20 }),
                }),
                t.banner?.url &&
                  u("button", {
                    className: `${f.bannerActionButton} ${f.deleteBannerButton}`,
                    onClick: J,
                    title: "Удалить баннер",
                    children: u(E, { size: 20 }),
                  }),
              ],
            }),
        ],
      }),
      u(F, { isOpen: M, onClose: x, onSave: K, mode: "banner" }),
      u("div", {
        className: f.profileContent,
        children: [
          u("div", {
            className: f.avatarRow,
            children: [
              u(n, {
                src: t.avatar,
                alt: t.displayName,
                size: "lg",
                online: t.online,
                className: f.avatar,
              }),
              !B &&
                u(xe, {
                  isOwnProfile: a,
                  isFollowing: u,
                  isRequested: r,
                  isFollowLoading: n,
                  isVerified: t.isVerified,
                  isBlocked: h,
                  onEditProfile: $,
                  onToggleFollow: y,
                  onVerificationRequest: z,
                  onBlockUser: T,
                  onReportUser: W,
                }),
            ],
          }),
          u("div", {
            className: f.infoContainer,
            children: [
              u("div", {
                className: f.userInfo,
                children: [
                  u(U, {
                    name: t.displayName,
                    verified: t.isVerified,
                    pin: t.pin,
                    size: "lg",
                    className: f.name,
                  }),
                  t.username &&
                    u("span", {
                      className: f.username,
                      children: ["@", t.username],
                    }),
                ],
              }),
              B &&
                u(k_1, {
                  children: [
                    u(Be, {
                      isPhone: true,
                      followers: t.stats?.followers ?? 0,
                      following: t.stats?.following ?? 0,
                      onFollowersClick: R,
                      onFollowingClick: w,
                    }),
                    u("div", {
                      className: f.mobileActions,
                      children: u(xe, {
                        isOwnProfile: a,
                        isFollowing: u,
                        isRequested: r,
                        isFollowLoading: n,
                        isVerified: t.isVerified,
                        isBlocked: h,
                        onEditProfile: $,
                        onToggleFollow: y,
                        onVerificationRequest: z,
                        onBlockUser: T,
                        onReportUser: W,
                      }),
                    }),
                  ],
                }),
              t.bio && u("p", { className: f.bio, children: t.bio }),
              !B &&
                u(Be, {
                  followers: t.stats?.followers ?? 0,
                  following: t.stats?.following ?? 0,
                  onFollowersClick: R,
                  onFollowingClick: w,
                }),
              !a &&
                !t.online &&
                t.lastSeen &&
                u("span", {
                  className: f.metaItem,
                  children: ["Был(а) в сети: ", hs(t.lastSeen)],
                }),
              t.createdAt &&
                u("span", {
                  className: f.metaItem,
                  children: [u(Pn, {}), " Регистрация: ", ms(t.createdAt)],
                }),
              i &&
                !a &&
                u("span", {
                  className: f.followsYou,
                  children: "Подписан на вас",
                }),
            ],
          }),
        ],
      }),
    ],
  });
}
function gs({ username: t }) {
  const a = b_1((o) => o.profile);

  const u = a?.id;

  const r = b_1((o) => o.setProfile);

  const [n, h] = d(null);
  const [i, B] = d(true);
  const [$, y] = d(null);
  const [L, R] = d("posts");
  const [w, m] = d([]);
  const [M, D] = d(false);
  const [P, N] = d(null);
  const [V, z] = d([]);
  const [T, W] = d(false);
  const [x, J] = d(null);
  const [K, p] = d(false);
  const [U, O] = d(null);
  const [oe, _] = d("none");
  const [ee, ae] = d(false);
  const [se, X] = d(false);
  const [s, A] = d(false);
  const c = !!(a && n && a.id === n.id);
  const v = oe === "following";
  const C = oe === "requested";
  y(() => {
    if (!n || c || c || !a) {
      _("none");
      X(false);
      return;
    }

    if (n.interaction) {
      n.interaction.isFollowing
        ? _("following")
        : n.interaction.hasOutgoingRequest
        ? _("requested")
        : _("none");

      X(n.interaction.isBlocking);
    }
  }, [n?.id, c, a]);

  const E = q(async (o, g, l) => {
    D(true);
    try {
      const H = await G.getUserWall(o, {
        cursor: l,
        limit: 20,
        pinnedPostId: g,
      });

      const Z = H.data;

      m(l ? (Ze) => [...Ze, ...Z] : Z);

      N(H.nextCursor);
    } catch (H) {
      console.error("Failed to fetch wall posts:", H);
    } finally {
      D(false);
    }
  }, []);

  const G = q(
    async (o, g) => {
      if (!K) {
        W(true);
      }

      O(null);
      try {
        const l = await G.getUserLikedPosts(o, { cursor: g, limit: 20 });
        const H = l.data;

        z(g ? (Z) => [...Z, ...H] : H);

        J(l.nextCursor);
        p(true);
      } catch (l) {
        console.error("Failed to fetch liked posts:", l);

        if (l && typeof l == "object" && "status" in l && l.status === 403) {
          O("Лайки скрыты настройками приватности");
        }
      } finally {
        W(false);
      }
    },
    [K]
  );

  y(() => {
    if (L === "likes" && n) {
      G(n.id);
    }
  }, [L, n?.id, G]);

  const F = H((o) => o.posts);

  const Y = H((o) => o.highlightedPostId);

  y(() => {
    if (!Y || !n) {
      return;
    }
    const o = F.find((l) => l.id === Y);

    if (
      o &&
      o.wallOwnerId === n.id &&
      o.wallOwnerId === n.id &&
      !w.some((l) => l.id === Y)
    ) {
      if (o.wallOwnerId === n.id) {
        if (!w.some((l) => l.id === Y)) {
          m((l) => [o, ...l]);
        }
      }
    }
  }, [Y, F, n?.id, w]);

  y(() => {
    if (w.length !== 0) {
      m((o) =>
        o.map((g) => {
          const l = F.find((H) => H.id === g.id);
          return l &&
            (l.editedAt !== g.editedAt || l.attachments !== g.attachments)
            ? l
            : g;
        })
      );
    }
  }, [F]);

  const q = H((o) => o._lastPostEdit);
  y(() => {
    if (q) {
      m((o) =>
        o.map((g) =>
          g.id === q.postId
            ? { ...g, text: q.text, spans: q.spans, editedAt: q.editedAt }
            : g
        )
      );
    }
  }, [q]);
  const he = H((o) => o._lastReactionUpdate);
  y(() => {
    if (!he) {
      return;
    }
    const { postId: o, myReaction: g, totalDelta: l } = he;

    const H = (Z) =>
      Z.id === o
        ? {
            ...Z,
            reactions: {
              ...Z.reactions,
              myReaction: g,
              total: Math.max(0, Z.reactions.total + l),
            },
          }
        : Z;

    m((Z) => Z.map(H));

    z((Z) => Z.map(H));
  }, [he]);
  const fe = A(true);

  y(() => {
    fe.current = true;

    return () => {
      fe.current = false;
    };
  }, []);

  y(() => {
    const o = new AbortController();

    (async () => {
      h(null);
      m([]);
      N(null);
      B(true);
      y(null);
      z([]);
      p(false);
      J(null);
      O(null);
      R("posts");
      _("none");
      X(false);
      try {
        let l = null;

        if (t) {
          l = await p.getProfileByUsername(t);
        } else {
          l = await p.getMyProfile();
        }

        if (!fe.current || o.signal.aborted) {
          return;
        }

        if (l) {
          h(l);
          (l.interaction?.isBlocking ?? false) ||
            E(l.username || l.id, l.pinnedPostId);
        }
      } catch (l) {
        if (!fe.current || o.signal.aborted) {
          return;
        }
        console.error("Failed to fetch profile:", l);
        y("Профиль не найден");
      } finally {
        if (fe.current && !o.signal.aborted) {
          B(false);
        }
      }
    })();

    return () => {
      o.abort();
    };
  }, [t, u, E]);

  const Ne = q(async () => {
    if (!(!n || ee)) {
      ae(true);
      try {
        const o = await l.followUser(n.id);
        _(o);

        if (o === "following" && n.stats) {
          const g = n.stats.followers + 1;

          h((l) =>
            l && l.stats ? { ...l, stats: { ...l.stats, followers: g } } : l
          );

          if (n.username) {
            p.updateProfileCache(n.username, {
              stats: { ...n.stats, followers: g },
            });
          }
        }
      } catch (o) {
        console.error("Failed to follow:", o);
      } finally {
        ae(false);
      }
    }
  }, [n, ee]);

  const Ce = q(async () => {
    if (!(!n || ee)) {
      ae(true);
      try {
        await l.unfollowUser(n.id);
        _("none");

        if (v && n.stats) {
          const o = n.stats.followers - 1;

          h((g) =>
            g && g.stats ? { ...g, stats: { ...g.stats, followers: o } } : g
          );

          if (n.username) {
            p.updateProfileCache(n.username, {
              stats: { ...n.stats, followers: o },
            });
          }
        }
      } catch (o) {
        console.error("Failed to unfollow:", o);
      } finally {
        ae(false);
      }
    }
  }, [n, v, ee]);

  const Te = q(async () => {
    if (v || C) {
      await Ce();
    } else {
      await Ne();
    }
  }, [v, C, Ne, Ce]);

  const Ee = q(() => {
    if (n && !M) {
      if (L === "posts" && P) {
        E(n.username || n.id, n.pinnedPostId, P);
      } else if (L === "likes" && x && !T) {
        G(n.id, x);
      }
    }
  }, [n, L, P, x, M, T, E, G]);

  const $e = q(
    async (o) => {
      if (!n) {
        return;
      }
      const g = n.pinnedPostId === o;
      const H = { ...n, pinnedPostId: g || o };
      h(H);

      if (a) {
        r(H);
      }

      try {
        if (g) {
          await p.unpinPost(o);
        } else {
          await p.pinPost(o);
        }
      } catch (Z) {
        h(n);

        if (a) {
          r(n);
        }

        console.error("Failed to pin/unpin post:", Z);
      }
    },
    [n, a, r]
  );

  const De = q(async () => {
    if (n) {
      G.invalidateWallCache(n.username || n.id);
      await E(n.username || n.id, n.pinnedPostId);
    }
  }, [n, E]);

  const ze = q(
    (o) => {
      m((g) => g.filter((l) => l.id !== o));

      z((g) => g.filter((l) => l.id !== o));

      if (n) {
        G.removePostFromWallCache(n.username || n.id, o);
      }
    },
    [n]
  );

  const Ue = q((o) => {
    R(o);
  }, []);

  const je = q(async () => {
    if (!(!n || s || s || c)) {
      A(true);
      try {
        if (se) {
          await l.unblockUser(n.id);
          X(false);
          C.success("Пользователь разблокирован");
        } else {
          await l.blockUser(n.id);
          X(true);
          C.success("Пользователь заблокирован");
          v && _("none");
        }

        if (n.username) {
          p.invalidateProfileCache(n.username);
        }
      } catch (o) {
        console.error("Failed to toggle block:", o);
        C.error("Не удалось выполнить действие");
      } finally {
        A(false);
      }
    }
  }, [n, se, s, c, v]);

  const Ve = q(
    (o) => {
      h((g) => (g ? { ...g, banner: o } : null));

      if (a) {
        r({ ...a, banner: o });
      }
    },
    [a, r]
  );

  const We = L === "posts" ? w : V;
  const Oe = L === "posts" ? M : T;
  const qe = L === "posts" ? P : x;
  const _e = n?.interaction?.isFollowedBy ?? false;
  const He = n?.interaction?.isBlockedBy ?? false;
  return {
    profile: n,
    loading: i,
    error: $,
    posts: We,
    postsLoading: Oe,
    nextCursor: qe,
    isOwnProfile: c,
    isFollowing: v,
    isFollowedBy: _e,
    isBlockedBy: He,
    isRequested: C,
    isFollowLoading: ee,
    handleToggleFollow: Te,
    handleFollow: Ne,
    handleUnfollow: Ce,
    handleLoadMore: Ee,
    handlePinPost: $e,
    refreshPosts: De,
    removePost: ze,
    activeTab: L,
    handleTabChange: Ue,
    likesError: U,
    hasLoadedLikes: K,
    updateBanner: Ve,
    isBlocked: se,
    handleBlockUser: je,
  };
}

export const Profile = ({ username: t }) => {
  const a = J();
  const u = K();
  const { openModal: r, closeModal: n } = B_1();

  const h = H((F) => F.createPost);

  const {
    profile: i,
    loading: B,
    error: $,
    posts: y,
    postsLoading: L,
    nextCursor: R,
    isOwnProfile: w,
    isFollowing: m,
    isFollowedBy: M,
    isBlockedBy: D,
    isRequested: P,
    isFollowLoading: N,
    isBlocked: V,
    handleFollow: z,
    handleUnfollow: T,
    handleBlockUser: W,
    handleLoadMore: x,
    handlePinPost: J,
    refreshPosts: K,
    removePost: p,
    activeTab: U,
    handleTabChange: O,
    likesError: oe,
    updateBanner: _,
  } = gs({ username: t });

  const ee = q(() => {
    if (m || P) {
      r(
        u(L, {
          displayName: i?.displayName ?? "",
          onConfirm: T,
          onClose: n,
        })
      );
    } else {
      z();
    }
  }, [m, P, i?.displayName, z, T, r, n]);

  const ae = () => {
    r(u(zn, { onClose: n }));
  };

  const se = q(() => {
    if (i) {
      r(u(Se, { userId: i.id, type: "followers", title: "Подписчики" }));
    }
  }, [i, r]);

  const X = q(() => {
    if (i) {
      r(u(Se, { userId: i.id, type: "following", title: "Подписки" }));
    }
  }, [i, r]);

  const s = async (F, Y, q, he) => {
    if (i) {
      await h(i.id, F, Y, q, he);
      K();
    }
  };

  const A = q(() => {
    if (i) {
      r(
        u(O, {
          wallOwnerId: i.id,
          placeholder: `Написать на стене ${i.displayName}`,
          onPostCreated: K,
        })
      );
    }
  }, [i, r, K]);

  const c = T(() => {
    if (U !== "posts" || !i?.pinnedPostId) {
      return y;
    }
    const F = y.find((Y) => Y.id === i.pinnedPostId);
    return F ? [F, ...y.filter((Y) => Y.id !== i.pinnedPostId)] : y;
  }, [y, i?.pinnedPostId, U]);

  const v = T(() => {
    if (!u) {
      return false;
    }
    if (w) {
      return true;
    }
    if (V || D) {
      return false;
    }
    switch (i?.privacySettings?.whoCanPostOnWall) {
      case "everyone": {
        return true;
      }
      case "followers": {
        return m;
      }
      case "mutual": {
        return m && M;
      }
      default: {
        return false;
      }
    }
  }, [u, w, V, D, i?.privacySettings?.whoCanPostOnWall, m, M]);

  const C = w || i?.privacySettings?.whoCanSeeMyPostReactions === "everyone";

  const E = T(() => {
    const F = ["Посты"];

    if (C) {
      F.push("Лайки");
    }

    return F;
  }, [C]);

  const G = q(
    (F) => {
      O(C ? (F === 0 ? "posts" : "likes") : "posts");
    },
    [O, C]
  );

  return B
    ? null
    : $ || !i
    ? u("div", {
        className: f.page,
        children: u("div", {
          className: f.error,
          children: $ || "Профиль не найден",
        }),
      })
    : u("div", {
        className: f.page,
        children: [
          u(ps, {
            profile: i,
            isOwnProfile: w,
            isFollowing: m,
            isRequested: P,
            isFollowLoading: N,
            isBlocked: V,
            isFollowedBy: M,
            isPhone: a,
            onEditProfile: ae,
            onToggleFollow: ee,
            onBlockUser: W,
            onFollowersClick: se,
            onFollowingClick: X,
            onBannerUpdate: _,
          }),
          u("div", {
            className: f.tabsWrapper,
            children: u(Q_1, {
              className: f.tabs,
              tabs: E,
              activeIndex: U === "posts" ? 0 : 1,
              onChange: G,
            }),
          }),
          v &&
            u(k_1, {
              children: [
                u("div", {
                  className: f.createPostWrapper,
                  children: [
                    u(n, {
                      src: i.avatar ?? "",
                      alt: i.displayName,
                      size: "sm",
                    }),
                    u(V, {
                      onSubmit: s,
                      placeholder: w
                        ? "Что нового?"
                        : `Написать на стене ${i.displayName}`,
                    }),
                  ],
                }),
                u(B, {
                  variant: "secondary",
                  className: f.writePostButton,
                  onClick: A,
                  children: "Написать на стене",
                }),
              ],
            }),
          V
            ? u("div", {
                className: f.emptyPosts,
                children: "Вы заблокировали этого пользователя",
              })
            : oe
            ? u("div", { className: f.emptyPosts, children: oe })
            : c.length > 0
            ? u(W, {
                posts: c,
                renderPost: (F, Y, q) =>
                  u(X, {
                    post: F,
                    isOnOwnProfile: w && U === "posts",
                    isPinned: U === "posts" && i?.pinnedPostId === F.id,
                    isHighlighted: q,
                    onPin: w && U === "posts" ? J : undefined,
                    onDelete: U === "posts" ? p : undefined,
                  }),
                hasMore: !!R,
                isLoadingMore: L,
                onLoadMore: x,
              })
            : L && c.length === 0
            ? u(m, {})
            : u("div", {
                className: f.emptyPosts,
                children: U === "posts" ? "Нет постов" : "Нет лайков",
              }),
        ],
      });
};

export { Profile as Profile };
