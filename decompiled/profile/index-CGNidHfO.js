import {
  u,
  a,
  b as b_1,
  A,
  d as d_1,
  q,
  s,
  y,
  $,
  S,
  c,
  U,
  B,
  I,
  M,
  p,
  d_1 as d_1_1,
  D,
  u as u_1,
  f,
  g,
  h,
  k,
  i,
  R,
  t,
  j,
  l,
  P,
  z,
  _,
  n,
  o,
  r,
  v as v_1,
  q as q_1,
  B as B_1,
  x,
  C,
  V,
  E,
} from "./index-d9k9JBOp.js";

import { C as C_1 } from "./index-BCbnsBqH.js";
import { I as I_1 } from "./IconCheck-DzRBFxf9.js";
import { S as S_1 } from "./index-Wd5C3KQ7.js";
const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/index-BtSukae9.js",
      "assets/index-d9k9JBOp.js",
      "assets/index-BDZxwo8K.css",
      "assets/index-Vt6rge9z.css",
      "assets/index-CbBFQyne.js",
      "assets/IconPerson-CKwAvIF3.js",
      "assets/index-Wd5C3KQ7.js",
      "assets/index-DcUSQXLZ.css",
      "assets/IconLogout-CG8_2tQ6.js",
      "assets/IconNotificationMention-Cr8AcwM5.js",
      "assets/index-DN0-XDZ-.css",
    ])
) => i.map((i) => d[i]);

const ft = ({ size: n = 24 }) =>
  u("svg", {
    width: n,
    height: n,
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

const mt = () =>
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

const pt = "-sE1X4FD";
const wt = "xpvwp-rl";
const gt = "_9n4VLpjh";
const vt = "ZsCn2sgV";
const bt = "_248T2ZtV";
const ce = { checkbox: pt, disabled: wt, input: gt, checkmark: vt, label: bt };
function yt({
  checked: n,
  onChange: o,
  label: p,
  disabled: c = false,
  className: t = "",
}) {
  const u = (i) => {
    o(i.target.checked);
  };
  return u("label", {
    className: `${ce.checkbox} ${c ? ce.disabled : ""} ${t}`,
    children: [
      u("input", {
        type: "checkbox",
        checked: n,
        onChange: u,
        disabled: c,
        className: ce.input,
      }),
      u("span", { className: ce.checkmark }),
      p && u("span", { className: ce.label, children: p }),
    ],
  });
}
const kt = "clHUi236";
const Nt = "yiO0wbWK";
const Pt = "sMnMo9RR";
const Ct = "csorFBDI";
const It = "xUb4GhPl";
const Lt = "Tfk454-S";
const Mt = "IEwsd6vv";
const St = "NKbAkExq";
const Bt = "A6o1aA7A";
const xt = "ZpUj8PQa";
const Ft = "rRMuZ0yV";
const At = "CHE2D-gj";
const Rt = "u9XlaVeB";
const zt = "trJ3W3kj";
const Et = "dKyMWEKh";

const v = {
  userListModal: kt,
  content: Nt,
  userList: Pt,
  userItem: Ct,
  clickable: It,
  userInfo: Lt,
  displayName: Mt,
  username: St,
  followButton: Bt,
  actionButtons: xt,
  acceptButton: Ft,
  rejectButton: At,
  actionStatus: Rt,
  empty: zt,
  loadMoreSentinel: Et,
};

function Pe({ userId: n, type: o, title: p, onCountChange: c }) {
  const { closeModal: t } = a();

  const u = b_1((s) => s.profile?.id);

  const i = A(null);
  const F = `${n || "me"}-${o}`;
  const [A, y] = d_1([]);
  const [C, W] = d_1(true);
  const [k, N] = d_1(false);
  const [B, D] = d_1(null);
  const [S, x] = d_1(new Map());
  const [q, E] = d_1(new Set());
  const [R, $] = d_1(new Map());
  const [L, ee] = d_1(new Set());
  const K = A(null);
  const te = o === "pending-incoming";
  const U = o === "pending-outgoing";

  if (i.current !== F) {
    i.current = F;
    y([]);
    W(true);
    D(null);
    x(new Map());
    E(new Set());
    $(new Map());
    ee(new Set());
  }

  const H = q(
    async (s) => {
      const I = !s;

      if (I) {
        W(true);
      } else {
        N(true);
      }

      try {
        let l;
        switch (o) {
          case "followers": {
            if (!n) {
              throw new Error("userId required for followers");
            }
            l = await s.getFollowers(n, { limit: 20, cursor: s });
            break;
          }
          case "following": {
            if (!n) {
              throw new Error("userId required for following");
            }
            l = await s.getFollowing(n, { limit: 20, cursor: s });
            break;
          }
          case "pending-incoming": {
            l = { data: [], nextCursor: null };
            break;
          }
          case "pending-outgoing": {
            l = { data: [], nextCursor: null };
            break;
          }
        }
        if (I) {
          y(l.data);
          const f = new Map();

          l.data.forEach((g) => {
            if (g.interaction.isFollowing) {
              f.set(g.userId, "following");
            } else if (g.interaction.hasOutgoingRequest) {
              f.set(g.userId, "requested");
            } else {
              f.set(g.userId, null);
            }
          });

          x(f);
        } else {
          y((f) => {
            const g = new Set(f.map((Z) => Z.userId));

            const M = l.data.filter((Z) => !g.has(Z.userId));

            return [...f, ...M];
          });

          x((f) => {
            const g = new Map(f);

            l.data.forEach((M) => {
              if (!g.has(M.userId)) {
                if (M.interaction.isFollowing) {
                  g.set(M.userId, "following");
                } else if (M.interaction.hasOutgoingRequest) {
                  g.set(M.userId, "requested");
                } else {
                  g.set(M.userId, null);
                }
              }
            });

            return g;
          });
        }
        D(l.nextCursor);
      } catch (l) {
        console.error("Failed to fetch users:", l);
      } finally {
        W(false);
        N(false);
      }
    },
    [n, o]
  );

  y(() => {
    H();
  }, [H]);

  y(() => {
    if (!B || k) {
      return;
    }

    const s = new IntersectionObserver(
      (l) => {
        if (l[0].isIntersecting) {
          H(B);
        }
      },
      { rootMargin: "100px" }
    );

    const I = K.current;

    if (I) {
      s.observe(I);
    }

    return () => {
      if (I) {
        s.unobserve(I);
      }
    };
  }, [B, k, H]);

  const se = q(
    async (s, I) => {
      I.stopPropagation();

      if (!q.has(s)) {
        E((l) => new Set(l).add(s));
        try {
          const l = S.get(s);
          if (l === "following" || l === "requested") {
            await s.unfollowUser(s);

            x((f) => {
              const g = new Map(f);
              g.set(s, null);
              return g;
            });
          } else {
            const f = await s.followUser(s);
            x((g) => {
              const M = new Map(g);
              M.set(s, f);
              return M;
            });
          }
        } catch (l) {
          console.error("Failed to toggle follow:", l);
        } finally {
          E((l) => {
            const f = new Set(l);
            f.delete(s);
            return f;
          });
        }
      }
    },
    [S, q]
  );

  const V = q(
    async (s, I) => {
      I.stopPropagation();

      if (!L.has(s)) {
        console.warn("acceptFollowRequest not implemented in old backend");
      }
    },
    [L]
  );

  const G = q(
    async (s, I) => {
      I.stopPropagation();

      if (!L.has(s)) {
        console.warn("removeFollower not implemented in old backend");
      }
    },
    [L]
  );

  const ne = q(
    async (s, I) => {
      I.stopPropagation();

      if (!L.has(s)) {
        ee((l) => new Set(l).add(s));
        try {
          await s.unfollowUser(s);

          $((l) => {
            const f = new Map(l);
            f.set(s, "rejected");
            return f;
          });
        } catch (l) {
          console.error("Failed to cancel follow request:", l);
        } finally {
          ee((l) => {
            const f = new Set(l);
            f.delete(s);
            return f;
          });
        }
      }
    },
    [L]
  );

  const J = q(
    (s) => {
      if (s) {
        t();
        $(`/@${s}`);
      }
    },
    [t]
  );

  const O = () => {
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

  return u(M, {
    onClose: t,
    title: p,
    className: v.userListModal,
    children: u("div", {
      className: v.content,
      children: C
        ? u(S, {})
        : A.length === 0
        ? u("div", { className: v.empty, children: O() })
        : u("div", {
            className: v.userList,
            children: [
              A.map((s) => {
                const I = S.get(s.userId);
                const l = I === "following";
                const f = I === "requested";
                const g = q.has(s.userId);
                const M = s.userId === u;
                const Z = R.get(s.userId);
                const P = L.has(s.userId);

                const X = () =>
                  l ? "Отписаться" : f ? "Отменить" : "Подписаться";

                if (te) {
                  return u(
                    "div",
                    {
                      className: `${v.userItem} ${
                        s.username ? v.clickable : ""
                      }`,
                      onClick: () => J(s.username),
                      children: [
                        u(c, { src: s.avatar, size: "md" }),
                        u("div", {
                          className: v.userInfo,
                          children: [
                            u(U, {
                              name: s.displayName,
                              verified: s.isVerified,
                              pin: s.pin,
                              size: "md",
                              className: v.displayName,
                            }),
                            s.username &&
                              u("span", {
                                className: v.username,
                                children: ["@", s.username],
                              }),
                          ],
                        }),
                        Z === "accepted"
                          ? u("span", {
                              className: v.actionStatus,
                              children: "Принято",
                            })
                          : Z === "rejected"
                          ? u("span", {
                              className: v.actionStatus,
                              children: "Отклонено",
                            })
                          : u("div", {
                              className: v.actionButtons,
                              children: [
                                u(B, {
                                  size: "sm",
                                  variant: "primary",
                                  disabled: P,
                                  onClick: (z) => V(s.userId, z),
                                  className: v.acceptButton,
                                  children: u(I_1, { size: 16 }),
                                }),
                                u(B, {
                                  size: "sm",
                                  variant: "secondary",
                                  disabled: P,
                                  onClick: (z) => G(s.userId, z),
                                  className: v.rejectButton,
                                  children: u(I, { size: 16 }),
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
                      className: `${v.userItem} ${
                        s.username ? v.clickable : ""
                      }`,
                      onClick: () => J(s.username),
                      children: [
                        u(c, { src: s.avatar, size: "md" }),
                        u("div", {
                          className: v.userInfo,
                          children: [
                            u(U, {
                              name: s.displayName,
                              verified: s.isVerified,
                              pin: s.pin,
                              size: "md",
                              className: v.displayName,
                            }),
                            s.username &&
                              u("span", {
                                className: v.username,
                                children: ["@", s.username],
                              }),
                          ],
                        }),
                        Z === "rejected"
                          ? u("span", {
                              className: v.actionStatus,
                              children: "Отменено",
                            })
                          : u(B, {
                              size: "sm",
                              variant: "secondary",
                              disabled: P,
                              onClick: (z) => ne(s.userId, z),
                              className: v.followButton,
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
                    className: `${v.userItem} ${s.username ? v.clickable : ""}`,
                    onClick: () => J(s.username),
                    children: [
                      u(c, { src: s.avatar, size: "md" }),
                      u("div", {
                        className: v.userInfo,
                        children: [
                          u(U, {
                            name: s.displayName,
                            verified: s.isVerified,
                            size: "md",
                            className: v.displayName,
                          }),
                          s.username &&
                            u("span", {
                              className: v.username,
                              children: ["@", s.username],
                            }),
                        ],
                      }),
                      !M &&
                        u(B, {
                          size: "sm",
                          variant: l || f ? "secondary" : "primary",
                          disabled: g,
                          onClick: (z) => se(s.userId, z),
                          className: v.followButton,
                          children: X(),
                        }),
                    ],
                  },
                  s.userId
                );
              }),
              B &&
                u("div", {
                  ref: K,
                  className: v.loadMoreSentinel,
                  children: k && u(S, { size: "sm" }),
                }),
            ],
          }),
    }),
  });
}
const $t = "_2uZqwv31";
const Ut = "n1bAn5KB";
const Dt = "_5CkFRdhv";
const Vt = "_0PddXEMG";
const jt = "KS4RxOQ2";
const _t = "x0i4BYqy";
const Wt = "GH3ZRjz3";
const Ot = "Mic5Lsx0";
const Tt = "d5PWRv19";
const qt = "_8A6hckjC";
const Ht = "_6K5CbR-T";
const Zt = "UPtTJ7RZ";
const Xt = "G1zp6CtS";
const Kt = "gfCy5iZ-";
const Gt = "aoFNSXhn";
const Yt = "_6G2DsFIq";
const Qt = "_7IsCrdcT";
const Jt = "Q6BWkOKZ";
const en = "pJ6wP8rM";
const tn = "UsWKjPqW";

const b = {
  modal: $t,
  content: Ut,
  statusIcon: Dt,
  title: Vt,
  description: jt,
  rejectionNotice: _t,
  rejectionTitle: Wt,
  rejectionReason: Ot,
  fileInput: Tt,
  dropzone: qt,
  dropzoneIcon: Ht,
  dropzoneText: Zt,
  dropzoneHint: Xt,
  preview: Kt,
  video: Gt,
  removeButton: Yt,
  error: Qt,
  progressBar: Jt,
  progressFill: en,
  actions: tn,
};

const nn = 50 * 1024 * 1024;
const sn = ["video/mp4", "video/webm", "video/quicktime"];
function on({ onClose: n }) {
  const [o, p] = d_1("loading");
  const [c, t] = d_1(null);
  const [u, i] = d_1(null);
  const [F, A] = d_1(false);
  const [y, C] = d_1(false);
  const [W, k] = d_1(null);
  const [N, B] = d_1(0);
  const D = A(null);

  y(() => {
    (async () => {
      try {
        const $ = await p.getVerificationStatus();
        p($);
      } catch ($) {
        console.error("Failed to load verification status:", $);
        p(null);
      }
    })();
  }, []);

  y(
    () => () => {
      if (u) {
        URL.revokeObjectURL(u);
      }
    },
    [u]
  );

  const S = (R) => {
    const L = R.target.files?.[0];
    if (L) {
      k(null);

      if (!sn.includes(L.type)) {
        k("Поддерживаются только форматы MP4, WebM и MOV");
        return;
      }

      if (L.size > nn) {
        k("Размер видео не должен превышать 50 МБ");
        return;
      }

      if (u) {
        URL.revokeObjectURL(u);
      }

      t(L);
      i(URL.createObjectURL(L));
    }
  };

  const x = () => {
    D.current?.click();
  };

  const q = () => {
    if (u) {
      URL.revokeObjectURL(u);
    }

    t(null);
    i(null);

    if (D.current) {
      D.current.value = "";
    }
  };

  const E = async () => {
    if (!(!c || !F)) {
      C(true);
      k(null);
      B(0);
      try {
        B(30);
        const R = await d_1_1.uploadMedia(c);
        B(70);
        await p.submitVerificationRequest(R.url);
        B(100);
        const $ = await p.getVerificationStatus();
        p($);
      } catch (R) {
        console.error("Failed to submit verification request:", R);
        k("Не удалось отправить заявку. Попробуйте позже.");
      } finally {
        C(false);
      }
    }
  };

  if (o === "loading") {
    return u(M, {
      onClose: n,
      showHeader: false,
      className: b.modal,
      children: u("div", { className: b.content, children: u(S, {}) }),
    });
  }

  if (
    o &&
    typeof o == "object" &&
    (o.status === "pending" || o.status === "approved")
  ) {
    return u(M, {
      onClose: n,
      showHeader: false,
      className: b.modal,
      children: u("div", {
        className: b.content,
        children: [
          u("div", {
            className: b.statusIcon,
            children:
              o.status === "approved"
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
            className: b.title,
            children:
              o.status === "approved"
                ? "Вы верифицированы!"
                : "Заявка на рассмотрении",
          }),
          u("p", {
            className: b.description,
            children:
              o.status === "approved"
                ? "Поздравляем! Ваш аккаунт верифицирован."
                : "Ваша заявка на верификацию находится на рассмотрении. Мы уведомим вас о результате.",
          }),
          u("div", {
            className: b.actions,
            children: u(B, {
              variant: "primary",
              onClick: () => n(),
              children: "Понятно",
            }),
          }),
        ],
      }),
    });
  }

  return u(M, {
    onClose: n,
    showHeader: false,
    className: b.modal,
    children: u("div", {
      className: b.content,
      children: [
        u("h2", { className: b.title, children: "Верификация" }),
        u("p", {
          className: b.description,
          children:
            "Запишите видео, в котором объясните, почему вам нужна галочка и без неё никак.",
        }),
        o?.status === "rejected" &&
          u("div", {
            className: b.rejectionNotice,
            children: [
              u("span", {
                className: b.rejectionTitle,
                children: "Предыдущая заявка отклонена",
              }),
              o.reason &&
                u("span", {
                  className: b.rejectionReason,
                  children: o.reason,
                }),
            ],
          }),
        u("input", {
          ref: D,
          type: "file",
          accept: "video/mp4,video/webm,video/quicktime,.mp4,.webm,.mov",
          onChange: S,
          className: b.fileInput,
        }),
        c
          ? u("div", {
              className: b.preview,
              children: [
                u("video", { src: u, controls: true, className: b.video }),
                u("button", {
                  className: b.removeButton,
                  onClick: q,
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
              className: b.dropzone,
              onClick: x,
              children: [
                u("div", {
                  className: b.dropzoneIcon,
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
                  className: b.dropzoneText,
                  children: "Нажмите, чтобы выбрать видео",
                }),
                u("span", {
                  className: b.dropzoneHint,
                  children: "MP4, WebM или MOV, до 50 МБ",
                }),
              ],
            }),
        W && u("div", { className: b.error, children: W }),
        y &&
          u("div", {
            className: b.progressBar,
            children: u("div", {
              className: b.progressFill,
              style: { width: `${N}%` },
            }),
          }),
        u(yt, {
          checked: F,
          onChange: A,
          disabled: y,
          label:
            "Я соглашаюсь с тем, что моё видео может быть использовано в контенте Nowkie",
        }),
        u("div", {
          className: b.actions,
          children: [
            u(B, {
              variant: "secondary",
              onClick: () => n(),
              disabled: y,
              children: "Отмена",
            }),
            u(B, {
              variant: "primary",
              onClick: E,
              disabled: !c || !F || !F || y,
              children: y ? "Отправка..." : "Отправить заявку",
            }),
          ],
        }),
      ],
    }),
  });
}
const an = "cIObOWX1";
const rn = "CsIbGceP";
const ln = "AEG6P-zR";
const cn = "_4DLI4vxA";
const dn = "-Or9HeQV";
const un = "r2TckDeC";
const hn = "BLErSWUX";
const fn = "-KzyufFU";
const mn = "ZDyP3TiR";
const pn = "z4EUhqrg";
const wn = "-D3fn7RS";
const gn = "h-5Dd8A9";
const vn = "iLZE-6Ka";
const bn = "NkXf1I05";
const yn = "ZxpffQeN";
const kn = "lMt54pXx";
const Nn = "Evwe2Uf-";
const Pn = "XHxlUBEZ";
const Cn = "NxlmS7bS";
const In = "Xnp1EFrD";
const Ln = "HkPDFh5Y";
const Mn = "at4eWYfl";
const Sn = "GVHheubk";
const Bn = "-rjihNlb";
const xn = "hSN99swS";
const Fn = "wD-vYWrg";
const An = "LIXEFTYA";
const Rn = "XHEEbVAb";
const zn = "udD7eGIN";
const En = "XJHSs8qR";
const $n = "E0F6ysgZ";

const d = {
  page: an,
  tabsWrapper: rn,
  tabs: ln,
  createPostWrapper: cn,
  writePostButton: dn,
  profileCard: un,
  banner: hn,
  bannerActions: fn,
  bannerActionButton: mn,
  deleteBannerButton: pn,
  profileContent: wn,
  avatarRow: gn,
  avatar: vn,
  actions: bn,
  ownActions: yn,
  mobileActions: kn,
  infoContainer: Nn,
  userInfo: Pn,
  name: Cn,
  username: In,
  bio: Ln,
  metaItem: Mn,
  followsYou: Sn,
  stats: Bn,
  stat: xn,
  clickable: Fn,
  statValue: An,
  statLabel: Rn,
  error: zn,
  bannerPlaceholder: En,
  emptyPosts: $n,
};

const Un = "EEr4AufL";
const Dn = "oMgX9Ykl";
const Vn = "vffvZARh";
const jn = "GoKIwSa0";
const _n = "ovvEebnP";
const Wn = "Pl-AQ1t9";

const ae = {
  content: Un,
  title: Dn,
  description: Vn,
  username: jn,
  warning: _n,
  actions: Wn,
};

function On({
  username: n,
  displayName: o,
  avatar: p,
  onConfirm: c,
  onClose: t,
}) {
  const u = () => {
    c();
    t();
  };
  return u(M, {
    onClose: t,
    showHeader: false,
    children: u("div", {
      className: ae.content,
      children: [
        u(c, { src: p, alt: o, size: "lg" }),
        u("h2", {
          className: ae.title,
          children: "Заблокировать пользователя?",
        }),
        u("p", {
          className: ae.description,
          children: [
            "Вы уверены, что хотите заблокировать",
            " ",
            u("strong", { children: o }),
            n &&
              u("span", { className: ae.username, children: [" (@", n, ")"] }),
            "?",
          ],
        }),
        u("p", {
          className: ae.warning,
          children:
            "Заблокированный пользователь не сможет видеть ваш профиль и контент.",
        }),
        u("div", {
          className: ae.actions,
          children: [
            u(B, {
              variant: "secondary",
              onClick: () => t(),
              fullWidth: true,
              children: "Отмена",
            }),
            u(B, {
              variant: "danger",
              onClick: () => u(),
              fullWidth: true,
              children: "Заблокировать",
            }),
          ],
        }),
      ],
    }),
  });
}
function Ce(n, o, p, c) {
  const t = Math.abs(n);
  const u = t % 10;
  const i = t % 100;
  return i >= 11 && i <= 19 ? c : u === 1 ? o : u >= 2 && u <= 4 ? p : c;
}
function Tn(n) {
  if (!n) {
    return null;
  }
  switch (n.unit) {
    case "just_now": {
      return "только что";
    }
    case "minutes": {
      const o = n.value ?? 1;
      const p = Ce(o, "минуту", "минуты", "минут");
      return `${o} ${p} назад`;
    }
    case "hours": {
      const o = n.value ?? 1;
      const p = Ce(o, "час", "часа", "часов");
      return `${o} ${p} назад`;
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
function Ie(n) {
  return n >= 1000000 /* 1e6 */
    ? `${(n / 1000000) /* 1e6 */
        .toFixed(1)}M`
    : n >= 1000 /* 1e3 */
    ? `${(n / 1000) /* 1e3 */
        .toFixed(1)}K`
    : n.toString();
}
function Le({
  followers: n,
  following: o,
  isPhone: p = false,
  onFollowersClick: c,
  onFollowingClick: t,
}) {
  return u("div", {
    className: d.stats,
    children: [
      u("div", {
        className: `${d.stat} ${c ? d.clickable : ""}`,
        onClick: c,
        children: [
          u("span", { className: d.statValue, children: Ie(n) }),
          u("span", { className: d.statLabel, children: "подписчиков" }),
        ],
      }),
      p && u("hr", {}),
      u("div", {
        className: `${d.stat} ${t ? d.clickable : ""}`,
        onClick: t,
        children: [
          u("span", { className: d.statValue, children: Ie(o) }),
          u("span", { className: d.statLabel, children: "подписок" }),
        ],
      }),
    ],
  });
}
function qn({
  isOwnProfile: n,
  isFollowing: o,
  isRequested: p = false,
  isFollowLoading: c,
  onEditProfile: t,
  onToggleFollow: u,
  fullWidth: i = false,
}) {
  const [F, A] = d_1(false);
  const C = h()?.subscription?.isActive;
  return n
    ? u(k, {
        children: [
          u("div", {
            className: d.ownActions,
            children: [
              u(B, { onClick: t, fullWidth: i, children: "Редактировать" }),
              !C &&
                u(B, {
                  variant: "secondary",
                  onClick: () => A(true),
                  fullWidth: i,
                  children: "ИТД НУКСТА",
                }),
            ],
          }),
          u(S_1, { isOpen: F, onClose: () => A(false) }),
        ],
      })
    : u(B, {
        variant: o || p ? "secondary" : "primary",
        onClick: u,
        disabled: c,
        fullWidth: i,
        children: o
          ? u(k, { children: [u(I_1, { size: 18 }), "Вы подписаны"] })
          : p
          ? "Заявка отправлена"
          : u(k, { children: [u(i, { size: 18 }), "Подписаться"] }),
      });
}
function Me({
  isOwnProfile: n,
  isVerified: o = false,
  isBlocked: p = false,
  onVerificationRequest: c,
  onBlockUser: t,
  onReportUser: u,
  ...i
}) {
  const A = (() => {
    const y = [];

    if (!n && t) {
      y.push({
        id: "block",
        label: p ? "Разблокировать" : "Заблокировать",
        icon: u(ft, { size: 18 }),
        danger: !p,
        onClick: t,
      });
    }

    if (!n && u) {
      y.push({
        id: "report",
        label: "Пожаловаться",
        icon: u(g, { size: 18 }),
        danger: true,
        onClick: u,
      });
    }

    return y;
  })();
  return u("div", {
    className: d.actions,
    children: [
      A.length > 0 &&
        u(D, {
          trigger: u(B, {
            variant: "secondary",
            iconOnly: true,
            children: u(u_1, { size: 18 }),
          }),
          items: A,
          position: "bottom-right",
        }),
      n &&
        !o &&
        c &&
        u(B, {
          variant: "secondary",
          iconOnly: true,
          onClick: c,
          children: u(f, { size: 18 }),
        }),
      u(qn, { isOwnProfile: n, isVerified: o, ...i }),
    ],
  });
}
const Hn = z(() =>
  _(() => import("./index-BtSukae9.js"), __vite__mapDeps([0, 1, 2, 3])).then(
    (n) => ({
      default: n.DrawingCanvas,
    })
  )
);
function Zn(n) {
  return new Date(n).toLocaleDateString("ru-RU", {
    month: "long",
    year: "numeric",
  });
}
function Xn({
  profile: n,
  isOwnProfile: o,
  isFollowing: p,
  isRequested: c = false,
  isFollowLoading: t,
  isBlocked: u = false,
  isFollowedBy: i = false,
  isPhone: F,
  onEditProfile: A,
  onToggleFollow: y,
  onBlockUser: C,
  onFollowersClick: W,
  onFollowingClick: k,
  onBannerUpdate: N,
}) {
  const [B, D] = d_1(false);
  const { openModal: S, closeModal: x } = a();

  const q = q(() => {
    D(true);
  }, []);

  const E = q(() => {
    S(u(on, { onClose: x }));
  }, [S, x]);

  const R = q(() => {
    if (u) {
      C?.();
      return;
    }
    S(
      u(On, {
        username: n.username || "",
        displayName: n.displayName,
        avatar: n.avatar,
        onConfirm: () => C?.(),
        onClose: x,
      })
    );
  }, [u, C, S, x, n]);

  const $ = q(() => {
    S(u(R, { targetType: "user", targetId: n.id, onClose: x }));
  }, [S, x, n.id]);

  const L = q(() => {
    D(false);
  }, []);

  const ee = q(async () => {
    try {
      await p.updateProfile({ bannerId: null });
      N?.(null);
    } catch (te) {
      console.error("Failed to delete banner:", te);
    }
  }, [N]);

  const K = q(
    async (te) => {
      try {
        const [U, H] = te.split(",");
        const se = U.match(/:(.*?);/)?.[1] || "image/png";
        const V = atob(H);
        const G = new Uint8Array(V.length);
        for (let s = 0; s < V.length; s++) {
          G[s] = V.charCodeAt(s);
        }
        const ne = new Blob([G], { type: se });
        const J = new File([ne], "banner.png", { type: "image/png" });
        const O = await d_1_1.uploadMedia(J);
        await p.updateProfile({ bannerId: O.id });

        N?.({
          id: O.id,
          type: "image",
          url: O.url,
          width: O.width,
          height: O.height,
        });
      } catch (U) {
        console.error("Failed to upload banner:", U);
        t.error("Не удалось загрузить баннер");
        throw U;
      }
    },
    [N]
  );

  return u("div", {
    className: d.profileCard,
    children: [
      u("div", {
        className: d.banner,
        children: [
          n.banner?.url
            ? u("img", { src: n.banner.url, alt: "Banner" })
            : u("div", { className: d.bannerPlaceholder }),
          o &&
            u("div", {
              className: d.bannerActions,
              children: [
                u("button", {
                  className: d.bannerActionButton,
                  onClick: q,
                  title: "Нарисовать баннер",
                  children: u(j, { size: 20 }),
                }),
                n.banner?.url &&
                  u("button", {
                    className: `${d.bannerActionButton} ${d.deleteBannerButton}`,
                    onClick: ee,
                    title: "Удалить баннер",
                    children: u(l, { size: 20 }),
                  }),
              ],
            }),
        ],
      }),
      B &&
        u(P, {
          fallback: null,
          children: u(Hn, { isOpen: B, onClose: L, onSave: K, mode: "banner" }),
        }),
      u("div", {
        className: d.profileContent,
        children: [
          u("div", {
            className: d.avatarRow,
            children: [
              u(c, {
                src: n.avatar,
                alt: n.displayName,
                size: "lg",
                online: n.online,
                className: d.avatar,
              }),
              !F &&
                u(Me, {
                  isOwnProfile: o,
                  isFollowing: p,
                  isRequested: c,
                  isFollowLoading: t,
                  isVerified: n.isVerified,
                  isBlocked: u,
                  onEditProfile: A,
                  onToggleFollow: y,
                  onVerificationRequest: E,
                  onBlockUser: R,
                  onReportUser: $,
                }),
            ],
          }),
          u("div", {
            className: d.infoContainer,
            children: [
              u("div", {
                className: d.userInfo,
                children: [
                  u(U, {
                    name: n.displayName,
                    verified: n.isVerified,
                    hasNuksta: n.hasNuksta,
                    pin: n.pin,
                    size: "lg",
                    className: d.name,
                  }),
                  n.username &&
                    u("span", {
                      className: d.username,
                      children: ["@", n.username],
                    }),
                ],
              }),
              F &&
                u(k, {
                  children: [
                    u(Le, {
                      isPhone: true,
                      followers: n.stats?.followers ?? 0,
                      following: n.stats?.following ?? 0,
                      onFollowersClick: W,
                      onFollowingClick: k,
                    }),
                    u("div", {
                      className: d.mobileActions,
                      children: u(Me, {
                        isOwnProfile: o,
                        isFollowing: p,
                        isRequested: c,
                        isFollowLoading: t,
                        isVerified: n.isVerified,
                        isBlocked: u,
                        onEditProfile: A,
                        onToggleFollow: y,
                        onVerificationRequest: E,
                        onBlockUser: R,
                        onReportUser: $,
                      }),
                    }),
                  ],
                }),
              n.bio && u("p", { className: d.bio, children: n.bio }),
              !F &&
                u(Le, {
                  followers: n.stats?.followers ?? 0,
                  following: n.stats?.following ?? 0,
                  onFollowersClick: W,
                  onFollowingClick: k,
                }),
              !o &&
                !n.online &&
                n.lastSeen &&
                u("span", {
                  className: d.metaItem,
                  children: ["Был(а) в сети: ", Tn(n.lastSeen)],
                }),
              n.createdAt &&
                u("span", {
                  className: d.metaItem,
                  children: [u(mt, {}), " Регистрация: ", Zn(n.createdAt)],
                }),
              i &&
                !o &&
                u("span", {
                  className: d.followsYou,
                  children: "Подписан на вас",
                }),
            ],
          }),
        ],
      }),
    ],
  });
}
function Kn({ username: n }) {
  const o = b_1((a) => a.profile);

  const p = o?.id;

  const c = b_1((a) => a.setProfile);

  const [t, u] = d_1(null);
  const [i, F] = d_1(true);
  const [A, y] = d_1(null);
  const [C, W] = d_1("posts");
  const [k, N] = d_1([]);
  const [B, D] = d_1(false);
  const [S, x] = d_1(null);
  const [q, E] = d_1([]);
  const [R, $] = d_1(false);
  const [L, ee] = d_1(null);
  const [K, te] = d_1(false);
  const [U, H] = d_1(null);
  const [se, V] = d_1("none");
  const [G, ne] = d_1(false);
  const [J, O] = d_1(false);
  const [s, I] = d_1(false);
  const l = !!(o && t && o.id === t.id);
  const f = se === "following";
  const g = se === "requested";
  y(() => {
    if (!t || l || l || !o) {
      V("none");
      O(false);
      return;
    }

    if (t.interaction) {
      t.interaction.isFollowing
        ? V("following")
        : t.interaction.hasOutgoingRequest
        ? V("requested")
        : V("none");

      O(t.interaction.isBlocking);
    }
  }, [t?.id, l, o]);

  const M = q(async (a, h, r) => {
    D(true);
    try {
      const j = await n.getUserWall(a, {
        cursor: r,
        limit: 20,
        pinnedPostId: h,
      });

      const _ = j.data;

      N(r ? (qe) => [...qe, ..._] : _);

      x(j.nextCursor);
    } catch (j) {
      console.error("Failed to fetch wall posts:", j);
    } finally {
      D(false);
    }
  }, []);

  const Z = q(
    async (a, h) => {
      if (!K) {
        $(true);
      }

      H(null);
      try {
        const r = await n.getUserLikedPosts(a, { cursor: h, limit: 20 });
        const j = r.data;

        E(h ? (_) => [..._, ...j] : j);

        ee(r.nextCursor);
        te(true);
      } catch (r) {
        console.error("Failed to fetch liked posts:", r);

        if (r && typeof r == "object" && "status" in r && r.status === 403) {
          H("Лайки скрыты настройками приватности");
        }
      } finally {
        $(false);
      }
    },
    [K]
  );

  y(() => {
    if (C === "likes" && t) {
      Z(t.id);
    }
  }, [C, t?.id, Z]);

  const P = o((a) => a.posts);

  const X = o((a) => a.highlightedPostId);

  y(() => {
    if (!X || !t) {
      return;
    }
    const a = P.find((r) => r.id === X);

    if (
      a &&
      a.wallOwnerId === t.id &&
      a.wallOwnerId === t.id &&
      !k.some((r) => r.id === X)
    ) {
      if (a.wallOwnerId === t.id) {
        if (!k.some((r) => r.id === X)) {
          N((r) => [a, ...r]);
        }
      }
    }
  }, [X, P, t?.id, k]);

  y(() => {
    if (k.length !== 0) {
      N((a) =>
        a.map((h) => {
          const r = P.find((j) => j.id === h.id);
          return r &&
            (r.editedAt !== h.editedAt || r.attachments !== h.attachments)
            ? r
            : h;
        })
      );
    }
  }, [P]);

  const z = o((a) => a._lastPostEdit);
  y(() => {
    if (z) {
      N((a) =>
        a.map((h) =>
          h.id === z.postId
            ? { ...h, text: z.text, spans: z.spans, editedAt: z.editedAt }
            : h
        )
      );
    }
  }, [z]);
  const re = o((a) => a._lastReactionUpdate);
  y(() => {
    if (!re) {
      return;
    }
    const { postId: a, myReaction: h, totalDelta: r } = re;

    const j = (_) =>
      _.id === a
        ? {
            ..._,
            reactions: {
              ..._.reactions,
              myReaction: h,
              total: Math.max(0, _.reactions.total + r),
            },
          }
        : _;

    N((_) => _.map(j));

    E((_) => _.map(j));
  }, [re]);
  const le = A(true);

  y(() => {
    le.current = true;

    return () => {
      le.current = false;
    };
  }, []);

  y(() => {
    const a = new AbortController();

    (async () => {
      u(null);
      N([]);
      x(null);
      F(true);
      y(null);
      E([]);
      te(false);
      ee(null);
      H(null);
      W("posts");
      V("none");
      O(false);
      try {
        let r = null;

        if (n) {
          r = await p.getProfileByUsername(n);
        } else {
          r = await p.getMyProfile();
        }

        if (!le.current || a.signal.aborted) {
          return;
        }

        if (r) {
          u(r);
          (r.interaction?.isBlocking ?? false) ||
            M(r.username || r.id, r.pinnedPostId);
        }
      } catch (r) {
        if (!le.current || a.signal.aborted) {
          return;
        }
        console.error("Failed to fetch profile:", r);
        y("Профиль не найден");
      } finally {
        if (le.current && !a.signal.aborted) {
          F(false);
        }
      }
    })();

    return () => {
      a.abort();
    };
  }, [n, p, M]);

  const ve = q(async () => {
    if (!(!t || G)) {
      ne(true);
      try {
        const a = await s.followUser(t.id);
        V(a);

        if (a === "following" && t.stats) {
          const h = t.stats.followers + 1;

          u((r) =>
            r && r.stats ? { ...r, stats: { ...r.stats, followers: h } } : r
          );

          if (t.username) {
            p.updateProfileCache(t.username, {
              stats: { ...t.stats, followers: h },
            });
          }
        }
      } catch (a) {
        console.error("Failed to follow:", a);
      } finally {
        ne(false);
      }
    }
  }, [t, G]);

  const be = q(async () => {
    if (!(!t || G)) {
      ne(true);
      try {
        await s.unfollowUser(t.id);
        V("none");

        if (f && t.stats) {
          const a = t.stats.followers - 1;

          u((h) =>
            h && h.stats ? { ...h, stats: { ...h.stats, followers: a } } : h
          );

          if (t.username) {
            p.updateProfileCache(t.username, {
              stats: { ...t.stats, followers: a },
            });
          }
        }
      } catch (a) {
        console.error("Failed to unfollow:", a);
      } finally {
        ne(false);
      }
    }
  }, [t, f, G]);

  const Ae = q(async () => {
    if (f || g) {
      await be();
    } else {
      await ve();
    }
  }, [f, g, ve, be]);

  const Re = q(() => {
    if (t && !B) {
      if (C === "posts" && S) {
        M(t.username || t.id, t.pinnedPostId, S);
      } else if (C === "likes" && L && !R) {
        Z(t.id, L);
      }
    }
  }, [t, C, S, L, B, R, M, Z]);

  const ze = q(
    async (a) => {
      if (!t) {
        return;
      }
      const h = t.pinnedPostId === a;
      const j = { ...t, pinnedPostId: h || a };
      u(j);

      if (o) {
        c(j);
      }

      try {
        if (h) {
          await p.unpinPost(a);
        } else {
          await p.pinPost(a);
        }
      } catch (_) {
        u(t);

        if (o) {
          c(t);
        }

        console.error("Failed to pin/unpin post:", _);
      }
    },
    [t, o, c]
  );

  const Ee = q(async () => {
    if (t) {
      n.invalidateWallCache(t.username || t.id);
      await M(t.username || t.id, t.pinnedPostId);
    }
  }, [t, M]);

  const $e = q(
    (a) => {
      N((h) => h.filter((r) => r.id !== a));

      E((h) => h.filter((r) => r.id !== a));

      if (t) {
        n.removePostFromWallCache(t.username || t.id, a);
      }
    },
    [t]
  );

  const Ue = q((a) => {
    W(a);
  }, []);

  const De = q(async () => {
    if (!(!t || s || s || l)) {
      I(true);
      try {
        if (J) {
          await s.unblockUser(t.id);
          O(false);
          t.success("Пользователь разблокирован");
        } else {
          await s.blockUser(t.id);
          O(true);
          t.success("Пользователь заблокирован");
          f && V("none");
        }

        if (t.username) {
          p.invalidateProfileCache(t.username);
        }
      } catch (a) {
        console.error("Failed to toggle block:", a);
        t.error("Не удалось выполнить действие");
      } finally {
        I(false);
      }
    }
  }, [t, J, s, l, f]);

  const Ve = q(
    (a) => {
      u((h) => (h ? { ...h, banner: a } : null));

      if (o) {
        c({ ...o, banner: a });
      }
    },
    [o, c]
  );

  const je = C === "posts" ? k : q;
  const _e = C === "posts" ? B : R;
  const We = C === "posts" ? S : L;
  const Oe = t?.interaction?.isFollowedBy ?? false;
  const Te = t?.interaction?.isBlockedBy ?? false;
  return {
    profile: t,
    loading: i,
    error: A,
    posts: je,
    postsLoading: _e,
    nextCursor: We,
    isOwnProfile: l,
    isFollowing: f,
    isFollowedBy: Oe,
    isBlockedBy: Te,
    isRequested: g,
    isFollowLoading: G,
    handleToggleFollow: Ae,
    handleFollow: ve,
    handleUnfollow: be,
    handleLoadMore: Re,
    handlePinPost: ze,
    refreshPosts: Ee,
    removePost: $e,
    activeTab: C,
    handleTabChange: Ue,
    likesError: U,
    hasLoadedLikes: K,
    updateBanner: Ve,
    isBlocked: J,
    handleBlockUser: De,
  };
}

const Gn = z(() =>
  _(
    () => import("./index-CbBFQyne.js"),
    __vite__mapDeps([4, 1, 2, 5, 6, 7, 8, 9, 10])
  ).then((n) => ({
    default: n.SettingsModal,
  }))
);

export const Profile = ({ username: n }) => {
  const o = r();
  const p = v_1();
  const { openModal: c, closeModal: t } = a();

  const u = o((P) => P.createPost);

  const {
    profile: i,
    loading: F,
    error: A,
    posts: y,
    postsLoading: C,
    nextCursor: W,
    isOwnProfile: k,
    isFollowing: N,
    isFollowedBy: B,
    isBlockedBy: D,
    isRequested: S,
    isFollowLoading: x,
    isBlocked: q,
    handleFollow: E,
    handleUnfollow: R,
    handleBlockUser: $,
    handleLoadMore: L,
    handlePinPost: ee,
    refreshPosts: K,
    removePost: te,
    activeTab: U,
    handleTabChange: H,
    likesError: se,
    updateBanner: V,
  } = Kn({ username: n });

  const G = q(() => {
    if (N || S) {
      c(
        u(q_1, {
          displayName: i?.displayName ?? "",
          onConfirm: R,
          onClose: t,
        })
      );
    } else {
      E();
    }
  }, [N, S, i?.displayName, E, R, c, t]);

  const ne = () => {
    c(u(Gn, { onClose: t }));
  };

  const J = q(() => {
    if (i) {
      c(u(Pe, { userId: i.id, type: "followers", title: "Подписчики" }));
    }
  }, [i, c]);

  const O = q(() => {
    if (i) {
      c(u(Pe, { userId: i.id, type: "following", title: "Подписки" }));
    }
  }, [i, c]);

  const s = async (P, X, z, re) => {
    if (i) {
      await u(i.id, P, X, z, re);
      K();
    }
  };

  const I = q(() => {
    if (i) {
      c(
        u(C_1, {
          wallOwnerId: i.id,
          placeholder: `Написать на стене ${i.displayName}`,
          onPostCreated: K,
        })
      );
    }
  }, [i, c, K]);

  const l = B_1(() => {
    if (U !== "posts" || !i?.pinnedPostId) {
      return y;
    }
    const P = y.find((X) => X.id === i.pinnedPostId);
    return P ? [P, ...y.filter((X) => X.id !== i.pinnedPostId)] : y;
  }, [y, i?.pinnedPostId, U]);

  const f = B_1(() => {
    if (!p) {
      return false;
    }
    if (k) {
      return true;
    }
    if (q || D) {
      return false;
    }
    switch (i?.privacySettings?.whoCanPostOnWall) {
      case "everyone": {
        return true;
      }
      case "followers": {
        return N;
      }
      case "mutual": {
        return N && B;
      }
      default: {
        return false;
      }
    }
  }, [p, k, q, D, i?.privacySettings?.whoCanPostOnWall, N, B]);

  const g = k || i?.privacySettings?.whoCanSeeMyPostReactions === "everyone";

  const M = B_1(() => {
    const P = ["Посты"];

    if (g) {
      P.push("Лайки");
    }

    return P;
  }, [g]);

  const Z = q(
    (P) => {
      H(g ? (P === 0 ? "posts" : "likes") : "posts");
    },
    [H, g]
  );

  return F
    ? null
    : A || !i
    ? u("div", {
        className: d.page,
        children: u("div", {
          className: d.error,
          children: A || "Профиль не найден",
        }),
      })
    : u("div", {
        className: d.page,
        children: [
          u(Xn, {
            profile: i,
            isOwnProfile: k,
            isFollowing: N,
            isRequested: S,
            isFollowLoading: x,
            isBlocked: q,
            isFollowedBy: B,
            isPhone: o,
            onEditProfile: ne,
            onToggleFollow: G,
            onBlockUser: $,
            onFollowersClick: J,
            onFollowingClick: O,
            onBannerUpdate: V,
          }),
          u("div", {
            className: d.tabsWrapper,
            children: u(x, {
              className: d.tabs,
              tabs: M,
              activeIndex: U === "posts" ? 0 : 1,
              onChange: Z,
            }),
          }),
          f &&
            u(k, {
              children: [
                u("div", {
                  className: d.createPostWrapper,
                  children: [
                    u(c, {
                      src: i.avatar ?? "",
                      alt: i.displayName,
                      size: "sm",
                    }),
                    u(C, {
                      onSubmit: s,
                      placeholder: k
                        ? "Что нового?"
                        : `Написать на стене ${i.displayName}`,
                    }),
                  ],
                }),
                u(B, {
                  variant: "secondary",
                  className: d.writePostButton,
                  onClick: I,
                  children: "Написать на стене",
                }),
              ],
            }),
          q
            ? u("div", {
                className: d.emptyPosts,
                children: "Вы заблокировали этого пользователя",
              })
            : se
            ? u("div", { className: d.emptyPosts, children: se })
            : l.length > 0
            ? u(V, {
                posts: l,
                renderPost: (P, X, z) =>
                  u(E, {
                    post: P,
                    isOnOwnProfile: k && U === "posts",
                    isPinned: U === "posts" && i?.pinnedPostId === P.id,
                    isHighlighted: z,
                    onPin: k && U === "posts" ? ee : undefined,
                    onDelete: U === "posts" ? te : undefined,
                  }),
                hasMore: !!W,
                isLoadingMore: C,
                onLoadMore: L,
              })
            : C && l.length === 0
            ? u(S, {})
            : u("div", {
                className: d.emptyPosts,
                children: U === "posts" ? "Нет постов" : "Нет лайков",
              }),
        ],
      });
};

export { Profile as Profile };
