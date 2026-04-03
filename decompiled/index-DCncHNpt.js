import {
  u,
  d,
  I,
  B,
  M,
  a,
  q as b_1,
  i,
  d as d_1,
  s,
  S as S_1,
  t,
  k,
  A,
  q,
  u as u_1,
  f as f_1,
  g,
  P as P_1,
  N,
  h,
  j,
  l,
  y,
  $,
  m,
  n,
  U,
  o,
  p,
  r,
  B as B_1,
  v,
  w,
  x,
  z,
  C,
  E,
  R,
  F,
  G,
  H,
  J,
  K,
  s as s_1,
  O,
  Q as Q_1,
  T,
  V,
  W,
  X,
  Y,
  Z,
} from "./index-Bi0Sh8eD.js";

import { I as I_1 } from "./IconCheck-CCpQ_eon.js";

const In = ({ size: t = 24 }) =>
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

const Sn = () =>
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

const Ln = ({ size: t = 24 }) =>
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

const Mn = ({ size: t = 24 }) =>
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

const xn = "L-PzWuiQ";
const Bn = "oXH-hyO9";
const An = "nQLamJ2B";
const Fn = "gTC1YNf4";
const Rn = "_-4yHS7h8";
const Tn = "_2Ks-COe5";
const En = "DQuZdM2t";

const Q = {
  form: xn,
  field: Bn,
  label: An,
  hint: Fn,
  fieldError: Rn,
  error: Tn,
  actions: En,
};

function $n({ onClose: t, onBack: a }) {
  const [u, r] = d("");
  const [n, h] = d("");
  const [i, M] = d("");
  const [B, y] = d(false);
  const [k, R] = d(null);
  const [g, m] = d({});

  const x = async (I) => {
    I.preventDefault();
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
          const O = {};
          for (const [U, E] of Object.entries(N.errors)) {
            O[U] = E[0] || "Ошибка валидации";
          }
          m(O);
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

  const z = u.length > 0 && n.length >= 10 && i.length > 0;
  return u(M, {
    onClose: a,
    title: "Смена пароля",
    children: u("form", {
      onSubmit: x,
      className: Q.form,
      children: [
        u("div", {
          className: Q.field,
          children: [
            u("label", { className: Q.label, children: "Текущий пароль" }),
            u(I, {
              type: "password",
              value: u,
              onChange: r,
              placeholder: "Введите текущий пароль",
              autoComplete: "current-password",
            }),
            g.currentPassword &&
              u("span", {
                className: Q.fieldError,
                children: g.currentPassword,
              }),
          ],
        }),
        u("div", {
          className: Q.field,
          children: [
            u("label", { className: Q.label, children: "Новый пароль" }),
            u(I, {
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
            g.newPassword &&
              u("span", { className: Q.fieldError, children: g.newPassword }),
          ],
        }),
        u("div", {
          className: Q.field,
          children: [
            u("label", {
              className: Q.label,
              children: "Подтверждение пароля",
            }),
            u(I, {
              type: "password",
              value: i,
              onChange: M,
              placeholder: "Повторите новый пароль",
              autoComplete: "new-password",
            }),
            g.confirmPassword &&
              u("span", {
                className: Q.fieldError,
                children: g.confirmPassword,
              }),
          ],
        }),
        k && u("div", { className: Q.error, children: k }),
        u("div", {
          className: Q.actions,
          children: [
            u(B, {
              type: "button",
              variant: "secondary",
              onClick: a,
              disabled: B,
              children: "Отмена",
            }),
            u(B, {
              type: "submit",
              disabled: !z || B,
              children: B ? "Сохранение..." : "Сменить пароль",
            }),
          ],
        }),
      ],
    }),
  });
}
function Dn() {
  const { theme: t, setTheme: a } = d_1();
  return u(k, {
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
            u(S_1, { value: t, options: t, onChange: (u) => a(u) }),
          ],
        }),
      }),
    ],
  });
}
function zn({ onChangePassword: t }) {
  return u(k, {
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
const Un = [
  { id: "account", icon: u_1, label: "Аккаунт" },
  { id: "appearance", icon: f_1, label: "Оформление" },
  { id: "security", icon: Mn, label: "Безопасность" },
  { id: "privacy", icon: Ln, label: "Приватность" },
  { id: "notifications", icon: g, label: "Уведомления" },
];
function jn({ onClose: t }) {
  const [a, u] = d("account");
  const [r, n] = d(null);
  const [h, i] = d(false);
  const [M, B] = d({});
  const [y, k] = d({});
  const R = A(null);
  const g = A(null);
  const m = A(null);
  const x = Object.values(M).some(Boolean);
  const z = Object.values(y).some(Boolean);

  const I = q(
    (p) => (j) => {
      B((W) => ({
        ...W,
        [p]: j,
      }));
    },
    []
  );

  const N = q(
    (p) => (j) => {
      k((W) => ({
        ...W,
        [p]: j,
      }));
    },
    []
  );

  const O = async () => {
    const p = [];

    if (M.account) {
      p.push(R.current?.save() ?? Promise.resolve());
    }

    if (M.notifications) {
      p.push(g.current?.save() ?? Promise.resolve());
    }

    if (M.privacy) {
      p.push(m.current?.save() ?? Promise.resolve());
    }

    await Promise.all(p);
  };

  const U = () => {
    R.current?.discard();
    g.current?.discard();
    m.current?.discard();
  };

  const E = (p) => {
    if (p !== a) {
      if (x) {
        n({ type: "tab", tab: p });
      } else {
        u(p);
      }
    }
  };

  const V = () => {
    if (x) {
      n({ type: "close" });
    } else {
      t();
    }
  };

  const A = () => {
    U();
    const p = r;
    n(null);

    if (p?.type === "tab") {
      u(p.tab);
    } else if (p?.type === "close") {
      t();
    }
  };

  const J = async () => {
    await O();
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
          onDirtyChange: I("account"),
          onSavingChange: N("account"),
          onClose: t,
        });
      }
      case "appearance": {
        return u(Dn, {});
      }
      case "security": {
        return u(zn, { onChangePassword: () => i(true) });
      }
      case "notifications": {
        return u(N, {
          ref: g,
          onDirtyChange: I("notifications"),
          onSavingChange: N("notifications"),
        });
      }
      case "privacy": {
        return u(P_1, {
          ref: m,
          onDirtyChange: I("privacy"),
          onSavingChange: N("privacy"),
        });
      }
    }
  };

  return h
    ? u($n, { onClose: t, onBack: () => i(false) })
    : u(M, {
        onClose: V,
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
                  children: Un.map((p) =>
                    u(
                      "button",
                      {
                        type: "button",
                        className: `${s.navItem} ${a === p.id ? s.active : ""}`,
                        onClick: () => E(p.id),
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
                x &&
                  u("div", {
                    className: s.actionBar,
                    children: [
                      u(B, {
                        variant: "secondary",
                        onClick: V,
                        children: "Отмена",
                      }),
                      u(B, {
                        variant: "primary",
                        onClick: O,
                        disabled: z,
                        loading: z,
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
                          onClick: A,
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
const On = "-sE1X4FD";
const Vn = "xpvwp-rl";
const Wn = "_9n4VLpjh";
const qn = "ZsCn2sgV";
const _n = "_248T2ZtV";
const me = { checkbox: On, disabled: Vn, input: Wn, checkmark: qn, label: _n };
function Hn({
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
const Zn = "clHUi236";
const Xn = "yiO0wbWK";
const Kn = "sMnMo9RR";
const Yn = "csorFBDI";
const Gn = "xUb4GhPl";
const Qn = "Tfk454-S";
const Jn = "IEwsd6vv";
const et = "NKbAkExq";
const nt = "A6o1aA7A";
const tt = "ZpUj8PQa";
const st = "rRMuZ0yV";
const at = "CHE2D-gj";
const ot = "u9XlaVeB";
const it = "trJ3W3kj";
const rt = "dKyMWEKh";

const P = {
  userListModal: Zn,
  content: Xn,
  userList: Kn,
  userItem: Yn,
  clickable: Gn,
  userInfo: Qn,
  displayName: Jn,
  username: et,
  followButton: nt,
  actionButtons: tt,
  acceptButton: st,
  rejectButton: at,
  actionStatus: ot,
  empty: it,
  loadMoreSentinel: rt,
};

function Se({ userId: t, type: a, title: u, onCountChange: r }) {
  const { closeModal: n } = j();

  const h = b_1((s) => s.profile?.id);

  const i = A(null);
  const M = `${t || "me"}-${a}`;
  const [B, y] = d([]);
  const [k, R] = d(true);
  const [g, m] = d(false);
  const [x, z] = d(null);
  const [I, N] = d(new Map());
  const [O, U] = d(new Set());
  const [E, V] = d(new Map());
  const [A, J] = d(new Set());
  const K = A(null);
  const p = a === "pending-incoming";
  const j = a === "pending-outgoing";

  if (i.current !== M) {
    i.current = M;
    y([]);
    R(true);
    z(null);
    N(new Map());
    U(new Set());
    V(new Map());
    J(new Set());
  }

  const W = q(
    async (s) => {
      const T = !s;

      if (T) {
        R(true);
      } else {
        m(true);
      }

      try {
        let d;
        switch (a) {
          case "followers": {
            if (!t) {
              throw new Error("userId required for followers");
            }
            d = await l.getFollowers(t, { limit: 20, cursor: s });
            break;
          }
          case "following": {
            if (!t) {
              throw new Error("userId required for following");
            }
            d = await l.getFollowing(t, { limit: 20, cursor: s });
            break;
          }
          case "pending-incoming": {
            d = { data: [], nextCursor: null };
            break;
          }
          case "pending-outgoing": {
            d = { data: [], nextCursor: null };
            break;
          }
        }
        if (T) {
          y(d.data);
          const v = new Map();

          d.data.forEach((C) => {
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
            const C = new Set(v.map((Y) => Y.userId));

            const $ = d.data.filter((Y) => !C.has(Y.userId));

            return [...v, ...$];
          });

          N((v) => {
            const C = new Map(v);

            d.data.forEach(($) => {
              if (!C.has($.userId)) {
                if ($.interaction.isFollowing) {
                  C.set($.userId, "following");
                } else if ($.interaction.hasOutgoingRequest) {
                  C.set($.userId, "requested");
                } else {
                  C.set($.userId, null);
                }
              }
            });

            return C;
          });
        }
        z(d.nextCursor);
      } catch (d) {
        console.error("Failed to fetch users:", d);
      } finally {
        R(false);
        m(false);
      }
    },
    [t, a]
  );

  y(() => {
    W();
  }, [W]);

  y(() => {
    if (!x || g) {
      return;
    }

    const s = new IntersectionObserver(
      (d) => {
        if (d[0].isIntersecting) {
          W(x);
        }
      },
      { rootMargin: "100px" }
    );

    const T = K.current;

    if (T) {
      s.observe(T);
    }

    return () => {
      if (T) {
        s.unobserve(T);
      }
    };
  }, [x, g, W]);

  const oe = q(
    async (s, T) => {
      T.stopPropagation();

      if (!O.has(s)) {
        U((d) => new Set(d).add(s));
        try {
          const d = I.get(s);
          if (d === "following" || d === "requested") {
            await l.unfollowUser(s);

            N((v) => {
              const C = new Map(v);
              C.set(s, null);
              return C;
            });
          } else {
            const v = await l.followUser(s);
            N((C) => {
              const $ = new Map(C);
              $.set(s, v);
              return $;
            });
          }
        } catch (d) {
          console.error("Failed to toggle follow:", d);
        } finally {
          U((d) => {
            const v = new Set(d);
            v.delete(s);
            return v;
          });
        }
      }
    },
    [I, O]
  );

  const _ = q(
    async (s, T) => {
      T.stopPropagation();

      if (!A.has(s)) {
        console.warn("acceptFollowRequest not implemented in old backend");
      }
    },
    [A]
  );

  const ee = q(
    async (s, T) => {
      T.stopPropagation();

      if (!A.has(s)) {
        console.warn("removeFollower not implemented in old backend");
      }
    },
    [A]
  );

  const ae = q(
    async (s, T) => {
      T.stopPropagation();

      if (!A.has(s)) {
        J((d) => new Set(d).add(s));
        try {
          await l.unfollowUser(s);

          V((d) => {
            const v = new Map(d);
            v.set(s, "rejected");
            return v;
          });
        } catch (d) {
          console.error("Failed to cancel follow request:", d);
        } finally {
          J((d) => {
            const v = new Set(d);
            v.delete(s);
            return v;
          });
        }
      }
    },
    [A]
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
    className: P.userListModal,
    children: u("div", {
      className: P.content,
      children: k
        ? u(m, {})
        : B.length === 0
        ? u("div", { className: P.empty, children: X() })
        : u("div", {
            className: P.userList,
            children: [
              B.map((s) => {
                const T = I.get(s.userId);
                const d = T === "following";
                const v = T === "requested";
                const C = O.has(s.userId);
                const $ = s.userId === h;
                const Y = E.get(s.userId);
                const F = A.has(s.userId);

                const G = () =>
                  d ? "Отписаться" : v ? "Отменить" : "Подписаться";

                if (p) {
                  return u(
                    "div",
                    {
                      className: `${P.userItem} ${
                        s.username ? P.clickable : ""
                      }`,
                      onClick: () => se(s.username),
                      children: [
                        u(n, { src: s.avatar, size: "md" }),
                        u("div", {
                          className: P.userInfo,
                          children: [
                            u(U, {
                              name: s.displayName,
                              verified: s.isVerified,
                              pin: s.pin,
                              size: "md",
                              className: P.displayName,
                            }),
                            s.username &&
                              u("span", {
                                className: P.username,
                                children: ["@", s.username],
                              }),
                          ],
                        }),
                        Y === "accepted"
                          ? u("span", {
                              className: P.actionStatus,
                              children: "Принято",
                            })
                          : Y === "rejected"
                          ? u("span", {
                              className: P.actionStatus,
                              children: "Отклонено",
                            })
                          : u("div", {
                              className: P.actionButtons,
                              children: [
                                u(B, {
                                  size: "sm",
                                  variant: "primary",
                                  disabled: F,
                                  onClick: (q) => _(s.userId, q),
                                  className: P.acceptButton,
                                  children: u(I_1, { size: 16 }),
                                }),
                                u(B, {
                                  size: "sm",
                                  variant: "secondary",
                                  disabled: F,
                                  onClick: (q) => ee(s.userId, q),
                                  className: P.rejectButton,
                                  children: u(o, { size: 16 }),
                                }),
                              ],
                            }),
                      ],
                    },
                    s.userId
                  );
                }

                if (j) {
                  return u(
                    "div",
                    {
                      className: `${P.userItem} ${
                        s.username ? P.clickable : ""
                      }`,
                      onClick: () => se(s.username),
                      children: [
                        u(n, { src: s.avatar, size: "md" }),
                        u("div", {
                          className: P.userInfo,
                          children: [
                            u(U, {
                              name: s.displayName,
                              verified: s.isVerified,
                              pin: s.pin,
                              size: "md",
                              className: P.displayName,
                            }),
                            s.username &&
                              u("span", {
                                className: P.username,
                                children: ["@", s.username],
                              }),
                          ],
                        }),
                        Y === "rejected"
                          ? u("span", {
                              className: P.actionStatus,
                              children: "Отменено",
                            })
                          : u(B, {
                              size: "sm",
                              variant: "secondary",
                              disabled: F,
                              onClick: (q) => ae(s.userId, q),
                              className: P.followButton,
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
                    className: `${P.userItem} ${s.username ? P.clickable : ""}`,
                    onClick: () => se(s.username),
                    children: [
                      u(n, { src: s.avatar, size: "md" }),
                      u("div", {
                        className: P.userInfo,
                        children: [
                          u(U, {
                            name: s.displayName,
                            verified: s.isVerified,
                            size: "md",
                            className: P.displayName,
                          }),
                          s.username &&
                            u("span", {
                              className: P.username,
                              children: ["@", s.username],
                            }),
                        ],
                      }),
                      !$ &&
                        u(B, {
                          size: "sm",
                          variant: d || v ? "secondary" : "primary",
                          disabled: C,
                          onClick: (q) => oe(s.userId, q),
                          className: P.followButton,
                          children: G(),
                        }),
                    ],
                  },
                  s.userId
                );
              }),
              x &&
                u("div", {
                  ref: K,
                  className: P.loadMoreSentinel,
                  children: g && u(m, { size: "sm" }),
                }),
            ],
          }),
    }),
  });
}
const lt = "_2uZqwv31";
const ct = "n1bAn5KB";
const dt = "_5CkFRdhv";
const ut = "_0PddXEMG";
const ht = "KS4RxOQ2";
const ft = "x0i4BYqy";
const mt = "GH3ZRjz3";
const pt = "Mic5Lsx0";
const wt = "d5PWRv19";
const gt = "_8A6hckjC";
const vt = "_6K5CbR-T";
const bt = "UPtTJ7RZ";
const yt = "G1zp6CtS";
const Nt = "gfCy5iZ-";
const Ct = "aoFNSXhn";
const kt = "_6G2DsFIq";
const Pt = "_7IsCrdcT";
const It = "Q6BWkOKZ";
const St = "pJ6wP8rM";
const Lt = "UsWKjPqW";

const S = {
  modal: lt,
  content: ct,
  statusIcon: dt,
  title: ut,
  description: ht,
  rejectionNotice: ft,
  rejectionTitle: mt,
  rejectionReason: pt,
  fileInput: wt,
  dropzone: gt,
  dropzoneIcon: vt,
  dropzoneText: bt,
  dropzoneHint: yt,
  preview: Nt,
  video: Ct,
  removeButton: kt,
  error: Pt,
  progressBar: It,
  progressFill: St,
  actions: Lt,
};

const Mt = 50 * 1024 * 1024;
const xt = ["video/mp4", "video/webm", "video/quicktime"];
function Bt({ onClose: t }) {
  const [a, u] = d("loading");
  const [r, n] = d(null);
  const [h, i] = d(null);
  const [M, B] = d(false);
  const [y, k] = d(false);
  const [R, g] = d(null);
  const [m, x] = d(0);
  const z = A(null);

  y(() => {
    (async () => {
      try {
        const V = await p.getVerificationStatus();
        u(V);
      } catch (V) {
        console.error("Failed to load verification status:", V);
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

  const I = (E) => {
    const A = E.target.files?.[0];
    if (A) {
      g(null);

      if (!xt.includes(A.type)) {
        g("Поддерживаются только форматы MP4, WebM и MOV");
        return;
      }

      if (A.size > Mt) {
        g("Размер видео не должен превышать 50 МБ");
        return;
      }

      if (h) {
        URL.revokeObjectURL(h);
      }

      n(A);
      i(URL.createObjectURL(A));
    }
  };

  const N = () => {
    z.current?.click();
  };

  const O = () => {
    if (h) {
      URL.revokeObjectURL(h);
    }

    n(null);
    i(null);

    if (z.current) {
      z.current.value = "";
    }
  };

  const U = async () => {
    if (!(!r || !M)) {
      k(true);
      g(null);
      x(0);
      try {
        x(30);
        const E = await r.uploadMedia(r);
        x(70);
        await p.submitVerificationRequest(E.url);
        x(100);
        const V = await p.getVerificationStatus();
        u(V);
      } catch (E) {
        console.error("Failed to submit verification request:", E);
        g("Не удалось отправить заявку. Попробуйте позже.");
      } finally {
        k(false);
      }
    }
  };

  if (a === "loading") {
    return u(M, {
      onClose: t,
      showHeader: false,
      className: S.modal,
      children: u("div", { className: S.content, children: u(m, {}) }),
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
      className: S.modal,
      children: u("div", {
        className: S.content,
        children: [
          u("div", {
            className: S.statusIcon,
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
            className: S.title,
            children:
              a.status === "approved"
                ? "Вы верифицированы!"
                : "Заявка на рассмотрении",
          }),
          u("p", {
            className: S.description,
            children:
              a.status === "approved"
                ? "Поздравляем! Ваш аккаунт верифицирован."
                : "Ваша заявка на верификацию находится на рассмотрении. Мы уведомим вас о результате.",
          }),
          u("div", {
            className: S.actions,
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
    className: S.modal,
    children: u("div", {
      className: S.content,
      children: [
        u("h2", { className: S.title, children: "Верификация" }),
        u("p", {
          className: S.description,
          children:
            "Запишите видео, в котором объясните, почему вам нужна галочка и без неё никак.",
        }),
        a?.status === "rejected" &&
          u("div", {
            className: S.rejectionNotice,
            children: [
              u("span", {
                className: S.rejectionTitle,
                children: "Предыдущая заявка отклонена",
              }),
              a.reason &&
                u("span", {
                  className: S.rejectionReason,
                  children: a.reason,
                }),
            ],
          }),
        u("input", {
          ref: z,
          type: "file",
          accept: "video/mp4,video/webm,video/quicktime,.mp4,.webm,.mov",
          onChange: I,
          className: S.fileInput,
        }),
        r
          ? u("div", {
              className: S.preview,
              children: [
                u("video", { src: h, controls: true, className: S.video }),
                u("button", {
                  className: S.removeButton,
                  onClick: O,
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
              className: S.dropzone,
              onClick: N,
              children: [
                u("div", {
                  className: S.dropzoneIcon,
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
                  className: S.dropzoneText,
                  children: "Нажмите, чтобы выбрать видео",
                }),
                u("span", {
                  className: S.dropzoneHint,
                  children: "MP4, WebM или MOV, до 50 МБ",
                }),
              ],
            }),
        R && u("div", { className: S.error, children: R }),
        y &&
          u("div", {
            className: S.progressBar,
            children: u("div", {
              className: S.progressFill,
              style: { width: `${m}%` },
            }),
          }),
        u(Hn, {
          checked: M,
          onChange: B,
          disabled: y,
          label:
            "Я соглашаюсь с тем, что моё видео может быть использовано в контенте Nowkie",
        }),
        u("div", {
          className: S.actions,
          children: [
            u(B, {
              variant: "secondary",
              onClick: () => t(),
              disabled: y,
              children: "Отмена",
            }),
            u(B, {
              variant: "primary",
              onClick: U,
              disabled: !r || !M || !M || y,
              children: y ? "Отправка..." : "Отправить заявку",
            }),
          ],
        }),
      ],
    }),
  });
}
const At = "cIObOWX1";
const Ft = "CsIbGceP";
const Rt = "AEG6P-zR";
const Tt = "_4DLI4vxA";
const Et = "-Or9HeQV";
const $t = "r2TckDeC";
const Dt = "BLErSWUX";
const zt = "-KzyufFU";
const Ut = "ZDyP3TiR";
const jt = "z4EUhqrg";
const Ot = "-D3fn7RS";
const Vt = "h-5Dd8A9";
const Wt = "iLZE-6Ka";
const qt = "NkXf1I05";
const _t = "ZxpffQeN";
const Ht = "lMt54pXx";
const Zt = "Evwe2Uf-";
const Xt = "XHxlUBEZ";
const Kt = "NxlmS7bS";
const Yt = "Xnp1EFrD";
const Gt = "HkPDFh5Y";
const Qt = "at4eWYfl";
const Jt = "GVHheubk";
const es = "-rjihNlb";
const ns = "hSN99swS";
const ts = "wD-vYWrg";
const ss = "LIXEFTYA";
const as = "XHEEbVAb";
const os = "udD7eGIN";
const is = "XJHSs8qR";
const rs = "E0F6ysgZ";

const f = {
  page: At,
  tabsWrapper: Ft,
  tabs: Rt,
  createPostWrapper: Tt,
  writePostButton: Et,
  profileCard: $t,
  banner: Dt,
  bannerActions: zt,
  bannerActionButton: Ut,
  deleteBannerButton: jt,
  profileContent: Ot,
  avatarRow: Vt,
  avatar: Wt,
  actions: qt,
  ownActions: _t,
  mobileActions: Ht,
  infoContainer: Zt,
  userInfo: Xt,
  name: Kt,
  username: Yt,
  bio: Gt,
  metaItem: Qt,
  followsYou: Jt,
  stats: es,
  stat: ns,
  clickable: ts,
  statValue: ss,
  statLabel: as,
  error: os,
  bannerPlaceholder: is,
  emptyPosts: rs,
};

const ls = "EEr4AufL";
const cs = "oMgX9Ykl";
const ds = "vffvZARh";
const us = "GoKIwSa0";
const hs = "ovvEebnP";
const fs = "Pl-AQ1t9";

const de = {
  content: ls,
  title: cs,
  description: ds,
  username: us,
  warning: hs,
  actions: fs,
};

function ms({
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
      className: de.content,
      children: [
        u(n, { src: u, alt: a, size: "lg" }),
        u("h2", {
          className: de.title,
          children: "Заблокировать пользователя?",
        }),
        u("p", {
          className: de.description,
          children: [
            "Вы уверены, что хотите заблокировать",
            " ",
            u("strong", { children: a }),
            t &&
              u("span", { className: de.username, children: [" (@", t, ")"] }),
            "?",
          ],
        }),
        u("p", {
          className: de.warning,
          children:
            "Заблокированный пользователь не сможет видеть ваш профиль и контент.",
        }),
        u("div", {
          className: de.actions,
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
function ps(t) {
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
function xe({
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
function ws({
  isOwnProfile: t,
  isFollowing: a,
  isRequested: u = false,
  isFollowLoading: r,
  onEditProfile: n,
  onToggleFollow: h,
  fullWidth: i = false,
}) {
  const [M, B] = d(false);
  const k = z()?.subscription?.isActive;
  return t
    ? u(k, {
        children: [
          u("div", {
            className: f.ownActions,
            children: [
              u(B, { onClick: n, fullWidth: i, children: "Редактировать" }),
              !k &&
                u(B, {
                  variant: "secondary",
                  onClick: () => B(true),
                  fullWidth: i,
                  children: "ИТД НУКСТА",
                }),
            ],
          }),
          u(C, { isOpen: M, onClose: () => B(false) }),
        ],
      })
    : u(B, {
        variant: a || u ? "secondary" : "primary",
        onClick: h,
        disabled: r,
        fullWidth: i,
        children: a
          ? u(k, { children: [u(I_1, { size: 18 }), "Вы подписаны"] })
          : u
          ? "Заявка отправлена"
          : u(k, { children: [u(E, { size: 18 }), "Подписаться"] }),
      });
}
function Be({
  isOwnProfile: t,
  isVerified: a = false,
  isBlocked: u = false,
  onVerificationRequest: r,
  onBlockUser: n,
  onReportUser: h,
  ...i
}) {
  const B = (() => {
    const y = [];

    if (!t && n) {
      y.push({
        id: "block",
        label: u ? "Разблокировать" : "Заблокировать",
        icon: u(In, { size: 18 }),
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
      B.length > 0 &&
        u(B_1, {
          trigger: u(B, {
            variant: "secondary",
            iconOnly: true,
            children: u(v, { size: 18 }),
          }),
          items: B,
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
      u(ws, { isOwnProfile: t, isVerified: a, ...i }),
    ],
  });
}
function gs(t) {
  return new Date(t).toLocaleDateString("ru-RU", {
    month: "long",
    year: "numeric",
  });
}
function vs({
  profile: t,
  isOwnProfile: a,
  isFollowing: u,
  isRequested: r = false,
  isFollowLoading: n,
  isBlocked: h = false,
  isFollowedBy: i = false,
  isPhone: M,
  onEditProfile: B,
  onToggleFollow: y,
  onBlockUser: k,
  onFollowersClick: R,
  onFollowingClick: g,
  onBannerUpdate: m,
}) {
  const [x, z] = d(false);
  const { openModal: I, closeModal: N } = j();

  const O = q(() => {
    z(true);
  }, []);

  const U = q(() => {
    I(u(Bt, { onClose: N }));
  }, [I, N]);

  const E = q(() => {
    if (h) {
      k?.();
      return;
    }
    I(
      u(ms, {
        username: t.username || "",
        displayName: t.displayName,
        avatar: t.avatar,
        onConfirm: () => k?.(),
        onClose: N,
      })
    );
  }, [h, k, I, N, t]);

  const V = q(() => {
    I(u(R, { targetType: "user", targetId: t.id, onClose: N }));
  }, [I, N, t.id]);

  const A = q(() => {
    z(false);
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
        const [j, W] = p.split(",");
        const oe = j.match(/:(.*?);/)?.[1] || "image/png";
        const _ = atob(W);
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
      } catch (j) {
        console.error("Failed to upload banner:", j);
        F.error("Не удалось загрузить баннер");
        throw j;
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
                  onClick: O,
                  title: "Нарисовать баннер",
                  children: u(f_1, { size: 20 }),
                }),
                t.banner?.url &&
                  u("button", {
                    className: `${f.bannerActionButton} ${f.deleteBannerButton}`,
                    onClick: J,
                    title: "Удалить баннер",
                    children: u(G, { size: 20 }),
                  }),
              ],
            }),
        ],
      }),
      u(H, { isOpen: x, onClose: A, onSave: K, mode: "banner" }),
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
              !M &&
                u(Be, {
                  isOwnProfile: a,
                  isFollowing: u,
                  isRequested: r,
                  isFollowLoading: n,
                  isVerified: t.isVerified,
                  isBlocked: h,
                  onEditProfile: B,
                  onToggleFollow: y,
                  onVerificationRequest: U,
                  onBlockUser: E,
                  onReportUser: V,
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
              M &&
                u(k, {
                  children: [
                    u(xe, {
                      isPhone: true,
                      followers: t.stats?.followers ?? 0,
                      following: t.stats?.following ?? 0,
                      onFollowersClick: R,
                      onFollowingClick: g,
                    }),
                    u("div", {
                      className: f.mobileActions,
                      children: u(Be, {
                        isOwnProfile: a,
                        isFollowing: u,
                        isRequested: r,
                        isFollowLoading: n,
                        isVerified: t.isVerified,
                        isBlocked: h,
                        onEditProfile: B,
                        onToggleFollow: y,
                        onVerificationRequest: U,
                        onBlockUser: E,
                        onReportUser: V,
                      }),
                    }),
                  ],
                }),
              t.bio && u("p", { className: f.bio, children: t.bio }),
              !M &&
                u(xe, {
                  followers: t.stats?.followers ?? 0,
                  following: t.stats?.following ?? 0,
                  onFollowersClick: R,
                  onFollowingClick: g,
                }),
              !a &&
                !t.online &&
                t.lastSeen &&
                u("span", {
                  className: f.metaItem,
                  children: ["Был(а) в сети: ", ps(t.lastSeen)],
                }),
              t.createdAt &&
                u("span", {
                  className: f.metaItem,
                  children: [u(Sn, {}), " Регистрация: ", gs(t.createdAt)],
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
function bs({ username: t }) {
  const a = b_1((o) => o.profile);

  const u = a?.id;

  const r = b_1((o) => o.setProfile);

  const [n, h] = d(null);
  const [i, M] = d(true);
  const [B, y] = d(null);
  const [k, R] = d("posts");
  const [g, m] = d([]);
  const [x, z] = d(false);
  const [I, N] = d(null);
  const [O, U] = d([]);
  const [E, V] = d(false);
  const [A, J] = d(null);
  const [K, p] = d(false);
  const [j, W] = d(null);
  const [oe, _] = d("none");
  const [ee, ae] = d(false);
  const [se, X] = d(false);
  const [s, T] = d(false);
  const d = !!(a && n && a.id === n.id);
  const v = oe === "following";
  const C = oe === "requested";
  y(() => {
    if (!n || d || d || !a) {
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
  }, [n?.id, d, a]);

  const $ = q(async (o, w, l) => {
    z(true);
    try {
      const H = await J.getUserWall(o, {
        cursor: l,
        limit: 20,
        pinnedPostId: w,
      });

      const Z = H.data;

      m(l ? (Ze) => [...Ze, ...Z] : Z);

      N(H.nextCursor);
    } catch (H) {
      console.error("Failed to fetch wall posts:", H);
    } finally {
      z(false);
    }
  }, []);

  const Y = q(
    async (o, w) => {
      if (!K) {
        V(true);
      }

      W(null);
      try {
        const l = await J.getUserLikedPosts(o, { cursor: w, limit: 20 });
        const H = l.data;

        U(w ? (Z) => [...Z, ...H] : H);

        J(l.nextCursor);
        p(true);
      } catch (l) {
        console.error("Failed to fetch liked posts:", l);

        if (l && typeof l == "object" && "status" in l && l.status === 403) {
          W("Лайки скрыты настройками приватности");
        }
      } finally {
        V(false);
      }
    },
    [K]
  );

  y(() => {
    if (k === "likes" && n) {
      Y(n.id);
    }
  }, [k, n?.id, Y]);

  const F = K((o) => o.posts);

  const G = K((o) => o.highlightedPostId);

  y(() => {
    if (!G || !n) {
      return;
    }
    const o = F.find((l) => l.id === G);

    if (
      o &&
      o.wallOwnerId === n.id &&
      o.wallOwnerId === n.id &&
      !g.some((l) => l.id === G)
    ) {
      if (o.wallOwnerId === n.id) {
        if (!g.some((l) => l.id === G)) {
          m((l) => [o, ...l]);
        }
      }
    }
  }, [G, F, n?.id, g]);

  y(() => {
    if (g.length !== 0) {
      m((o) =>
        o.map((w) => {
          const l = F.find((H) => H.id === w.id);
          return l &&
            (l.editedAt !== w.editedAt || l.attachments !== w.attachments)
            ? l
            : w;
        })
      );
    }
  }, [F]);

  const q = K((o) => o._lastPostEdit);
  y(() => {
    if (q) {
      m((o) =>
        o.map((w) =>
          w.id === q.postId
            ? { ...w, text: q.text, spans: q.spans, editedAt: q.editedAt }
            : w
        )
      );
    }
  }, [q]);
  const he = K((o) => o._lastReactionUpdate);
  y(() => {
    if (!he) {
      return;
    }
    const { postId: o, myReaction: w, totalDelta: l } = he;

    const H = (Z) =>
      Z.id === o
        ? {
            ...Z,
            reactions: {
              ...Z.reactions,
              myReaction: w,
              total: Math.max(0, Z.reactions.total + l),
            },
          }
        : Z;

    m((Z) => Z.map(H));

    U((Z) => Z.map(H));
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
      M(true);
      y(null);
      U([]);
      p(false);
      J(null);
      W(null);
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
            $(l.username || l.id, l.pinnedPostId);
        }
      } catch (l) {
        if (!fe.current || o.signal.aborted) {
          return;
        }
        console.error("Failed to fetch profile:", l);
        y("Профиль не найден");
      } finally {
        if (fe.current && !o.signal.aborted) {
          M(false);
        }
      }
    })();

    return () => {
      o.abort();
    };
  }, [t, u, $]);

  const Ne = q(async () => {
    if (!(!n || ee)) {
      ae(true);
      try {
        const o = await l.followUser(n.id);
        _(o);

        if (o === "following" && n.stats) {
          const w = n.stats.followers + 1;

          h((l) =>
            l && l.stats ? { ...l, stats: { ...l.stats, followers: w } } : l
          );

          if (n.username) {
            p.updateProfileCache(n.username, {
              stats: { ...n.stats, followers: w },
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

          h((w) =>
            w && w.stats ? { ...w, stats: { ...w.stats, followers: o } } : w
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
    if (n && !x) {
      if (k === "posts" && I) {
        $(n.username || n.id, n.pinnedPostId, I);
      } else if (k === "likes" && A && !E) {
        Y(n.id, A);
      }
    }
  }, [n, k, I, A, x, E, $, Y]);

  const $e = q(
    async (o) => {
      if (!n) {
        return;
      }
      const w = n.pinnedPostId === o;
      const H = { ...n, pinnedPostId: w || o };
      h(H);

      if (a) {
        r(H);
      }

      try {
        if (w) {
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
      J.invalidateWallCache(n.username || n.id);
      await $(n.username || n.id, n.pinnedPostId);
    }
  }, [n, $]);

  const ze = q(
    (o) => {
      m((w) => w.filter((l) => l.id !== o));

      U((w) => w.filter((l) => l.id !== o));

      if (n) {
        J.removePostFromWallCache(n.username || n.id, o);
      }
    },
    [n]
  );

  const Ue = q((o) => {
    R(o);
  }, []);

  const je = q(async () => {
    if (!(!n || s || s || d)) {
      T(true);
      try {
        if (se) {
          await l.unblockUser(n.id);
          X(false);
          F.success("Пользователь разблокирован");
        } else {
          await l.blockUser(n.id);
          X(true);
          F.success("Пользователь заблокирован");
          v && _("none");
        }

        if (n.username) {
          p.invalidateProfileCache(n.username);
        }
      } catch (o) {
        console.error("Failed to toggle block:", o);
        F.error("Не удалось выполнить действие");
      } finally {
        T(false);
      }
    }
  }, [n, se, s, d, v]);

  const Oe = q(
    (o) => {
      h((w) => (w ? { ...w, banner: o } : null));

      if (a) {
        r({ ...a, banner: o });
      }
    },
    [a, r]
  );

  const Ve = k === "posts" ? g : O;
  const We = k === "posts" ? x : E;
  const qe = k === "posts" ? I : A;
  const _e = n?.interaction?.isFollowedBy ?? false;
  const He = n?.interaction?.isBlockedBy ?? false;
  return {
    profile: n,
    loading: i,
    error: B,
    posts: Ve,
    postsLoading: We,
    nextCursor: qe,
    isOwnProfile: d,
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
    activeTab: k,
    handleTabChange: Ue,
    likesError: j,
    hasLoadedLikes: K,
    updateBanner: Oe,
    isBlocked: se,
    handleBlockUser: je,
  };
}

export const Profile = ({ username: t }) => {
  const a = s_1();
  const u = O();
  const { openModal: r, closeModal: n } = j();

  const h = K((F) => F.createPost);

  const {
    profile: i,
    loading: M,
    error: B,
    posts: y,
    postsLoading: k,
    nextCursor: R,
    isOwnProfile: g,
    isFollowing: m,
    isFollowedBy: x,
    isBlockedBy: z,
    isRequested: I,
    isFollowLoading: N,
    isBlocked: O,
    handleFollow: U,
    handleUnfollow: E,
    handleBlockUser: V,
    handleLoadMore: A,
    handlePinPost: J,
    refreshPosts: K,
    removePost: p,
    activeTab: j,
    handleTabChange: W,
    likesError: oe,
    updateBanner: _,
  } = bs({ username: t });

  const ee = q(() => {
    if (m || I) {
      r(
        u(Q_1, {
          displayName: i?.displayName ?? "",
          onConfirm: E,
          onClose: n,
        })
      );
    } else {
      U();
    }
  }, [m, I, i?.displayName, U, E, r, n]);

  const ae = () => {
    r(u(jn, { onClose: n }));
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

  const s = async (F, G, q, he) => {
    if (i) {
      await h(i.id, F, G, q, he);
      K();
    }
  };

  const T = q(() => {
    if (i) {
      r(
        u(T, {
          wallOwnerId: i.id,
          placeholder: `Написать на стене ${i.displayName}`,
          onPostCreated: K,
        })
      );
    }
  }, [i, r, K]);

  const d = V(() => {
    if (j !== "posts" || !i?.pinnedPostId) {
      return y;
    }
    const F = y.find((G) => G.id === i.pinnedPostId);
    return F ? [F, ...y.filter((G) => G.id !== i.pinnedPostId)] : y;
  }, [y, i?.pinnedPostId, j]);

  const v = V(() => {
    if (!u) {
      return false;
    }
    if (g) {
      return true;
    }
    if (O || z) {
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
        return m && x;
      }
      default: {
        return false;
      }
    }
  }, [u, g, O, z, i?.privacySettings?.whoCanPostOnWall, m, x]);

  const C = g || i?.privacySettings?.whoCanSeeMyPostReactions === "everyone";

  const $ = V(() => {
    const F = ["Посты"];

    if (C) {
      F.push("Лайки");
    }

    return F;
  }, [C]);

  const Y = q(
    (F) => {
      W(C ? (F === 0 ? "posts" : "likes") : "posts");
    },
    [W, C]
  );

  return M
    ? null
    : B || !i
    ? u("div", {
        className: f.page,
        children: u("div", {
          className: f.error,
          children: B || "Профиль не найден",
        }),
      })
    : u("div", {
        className: f.page,
        children: [
          u(vs, {
            profile: i,
            isOwnProfile: g,
            isFollowing: m,
            isRequested: I,
            isFollowLoading: N,
            isBlocked: O,
            isFollowedBy: x,
            isPhone: a,
            onEditProfile: ae,
            onToggleFollow: ee,
            onBlockUser: V,
            onFollowersClick: se,
            onFollowingClick: X,
            onBannerUpdate: _,
          }),
          u("div", {
            className: f.tabsWrapper,
            children: u(W, {
              className: f.tabs,
              tabs: $,
              activeIndex: j === "posts" ? 0 : 1,
              onChange: Y,
            }),
          }),
          v &&
            u(k, {
              children: [
                u("div", {
                  className: f.createPostWrapper,
                  children: [
                    u(n, {
                      src: i.avatar ?? "",
                      alt: i.displayName,
                      size: "sm",
                    }),
                    u(X, {
                      onSubmit: s,
                      placeholder: g
                        ? "Что нового?"
                        : `Написать на стене ${i.displayName}`,
                    }),
                  ],
                }),
                u(B, {
                  variant: "secondary",
                  className: f.writePostButton,
                  onClick: T,
                  children: "Написать на стене",
                }),
              ],
            }),
          O
            ? u("div", {
                className: f.emptyPosts,
                children: "Вы заблокировали этого пользователя",
              })
            : oe
            ? u("div", { className: f.emptyPosts, children: oe })
            : d.length > 0
            ? u(Y, {
                posts: d,
                renderPost: (F, G, q) =>
                  u(Z, {
                    post: F,
                    isOnOwnProfile: g && j === "posts",
                    isPinned: j === "posts" && i?.pinnedPostId === F.id,
                    isHighlighted: q,
                    onPin: g && j === "posts" ? J : undefined,
                    onDelete: j === "posts" ? p : undefined,
                  }),
                hasMore: !!R,
                isLoadingMore: k,
                onLoadMore: A,
              })
            : k && d.length === 0
            ? u(m, {})
            : u("div", {
                className: f.emptyPosts,
                children: j === "posts" ? "Нет постов" : "Нет лайков",
              }),
        ],
      });
};

export { Profile as Profile };
