import {
  a,
  A,
  y,
  f,
  U_1_1 as U_1,
  A as A_1,
  s as E_1,
  A_1 as A_1_1,
  U_1 as U_1_1,
  A_1_1 as A_1_1_1,
  a0,
  $,
  l as l_1,
  a1,
  d,
  q,
  u,
  s,
  S,
} from "./index-BNG2MjJY.js";

import { a as a_1, y as y_1 } from "./IconCheck-BRYRONNA.js";
const ne = "Xdto";
const oe = "g52c";
const se = "Pyp1";
const le = "DHDV";
const ae = "tIVA";
const re = "pibm";
const ie = "nu2g";
const ce = "AxsX";
const de = "WxVy";
const ue = "xpaR";
const ge = "PorH";
const me = "aSbh";
const fe = "RrGZ";
const pe = "w8wg";
const we = "DXYW";
const he = "yz2D";
const ye = "QlmA";
const Re = "DFHI";
const be = "rsun";
const Ce = "HqBz";
const Ne = "IzqG";
const Ae = "Ioi2";
const ke = "ORmx";

const l = {
  page: ne,
  pageTitle: oe,
  list: se,
  item: le,
  btn: ae,
  content: re,
  badge: ie,
  red: ce,
  green: de,
  blue: ue,
  purple: ge,
  avatarLink: me,
  info: fe,
  header: pe,
  actorLink: we,
  name: he,
  action: ye,
  text: Re,
  date: be,
  titleRow: Ce,
  unread: Ne,
  empty: Ae,
  loadMore: ke,
};

function ve(n) {
  if (!n) {
    return "";
  }
  const r = new Date(n);
  return isNaN(r.getTime())
    ? ""
    : r.toLocaleDateString("ru-RU", { day: "numeric", month: "short" });
}

const G = {
  follow: {
    badgeColor: "blue",
    icon: a(E_1, { size: 12 }),
    getAction: (n) =>
      n > 1
        ? `и ещё ${n - 1} человек подписались на вас`
        : "подписался(-ась) на вас",
  },
  follow_request: {
    badgeColor: "blue",
    icon: a(E_1, { size: 12 }),
    getAction: () => "хочет подписаться на вас",
  },
  follow_accepted: {
    badgeColor: "green",
    icon: a(y_1, { size: 12 }),
    getAction: () => "принял(а) вашу заявку на подписку",
  },
  post_reaction: {
    badgeColor: "red",
    icon: a(A_1_1_1, { size: 12, filled: true }),
    getAction: (n) =>
      n > 1 ? `и ещё ${n - 1} человек оценили ваш пост` : "оценил(а) ваш пост",
  },
  post_comment: {
    badgeColor: "green",
    icon: a(U_1_1, { size: 12, filled: true }),
    getAction: () => "прокомментировал(а) ваш пост",
  },
  post_repost: {
    badgeColor: "blue",
    icon: a(a0, { size: 12 }),
    getAction: (n) =>
      n > 1
        ? `и ещё ${n - 1} человек сделали репост`
        : "сделал(а) репост вашего поста",
  },
  comment_reaction: {
    badgeColor: "red",
    icon: a(A_1_1_1, { size: 12, filled: true }),
    getAction: (n) =>
      n > 1
        ? `и ещё ${n - 1} человек оценили ваш комментарий`
        : "оценил(а) ваш комментарий",
  },
  comment_reply: {
    badgeColor: "green",
    icon: a(U_1_1, { size: 12, filled: true }),
    getAction: () => "ответил(а) на ваш комментарий",
  },
  post_mention: {
    badgeColor: "purple",
    icon: a(a_1, { size: 12 }),
    getAction: () => "упомянул(а) вас в посте",
  },
  comment_mention: {
    badgeColor: "purple",
    icon: a(a_1, { size: 12 }),
    getAction: () => "упомянул(а) вас в комментарии",
  },
  wall_post: {
    badgeColor: "blue",
    icon: a(A_1_1, { size: 12 }),
    getAction: () => "написал(а) на вашей стене",
  },
};

const Fe = ({ type: n }) => {
  const r = G[n];

  const y =
    r?.badgeColor === "red"
      ? l.red
      : r?.badgeColor === "green"
      ? l.green
      : r?.badgeColor === "purple"
      ? l.purple
      : l.blue;

  return a("div", {
    className: `${l.badge} ${y}`,
    children: r?.icon || a(U_1_1, { size: 12 }),
  });
};

function _e({
  notification: n,
  isVisuallyUnread: r,
  onMarkRead: y,
  onVisible: A,
  followStatus: p,
  onFollowToggle: $,
  isFollowLoading: w,
}) {
  const q = G[n.type];
  const s = n.payload.actors[0];
  const S = n.payload.count;
  const x = A(null);
  y(() => {
    if (n.isRead) {
      return;
    }
    const i = x.current;
    if (!i) {
      return;
    }
    const d = new IntersectionObserver(
      (h) => {
        if (h[0].isIntersecting) {
          A(n.id);
          d.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    d.observe(i);

    return () => d.disconnect();
  }, [n.id, n.isRead, A]);

  const k = () => {
    y(n.id);
    const { type: i, entityId: d, parentEntityId: h, payload: T } = n;
    let f = T.clickUrl;

    const z = [
      "post_reaction",
      "post_comment",
      "post_repost",
      "post_mention",
      "wall_post",
    ];

    const M = ["comment_reaction", "comment_reply", "comment_mention"];

    if (d && s?.username) {
      if (z.includes(i)) {
        if (i === "post_comment" && h) {
          f = `/@${s.username}/post/${h}?comment=${d}`;
        } else {
          f = `/@${s.username}/post/${d}`;
        }
      } else if (M.includes(i)) {
        if (h) {
          f = `/@${s.username}/post/${h}?comment=${d}`;
        } else {
          f = `/@${s.username}/post/${d}`;
        }
      }
    }

    if (
      !f &&
      s?.username &&
      ["follow", "follow_request", "follow_accepted"].includes(i)
    ) {
      f = `/@${s.username}`;
    }

    if (f) {
      $(f);
    }
  };

  const R = n.type === "follow" || n.type === "follow_request";

  const m = w
    ? "loading"
    : p
    ? p.isFollowing
      ? "following"
      : p.hasOutgoingRequest
      ? "requested"
      : "none"
    : "none";

  const C = () => {
    switch (m) {
      case "loading": {
        return "Загрузка...";
      }
      case "following": {
        return "Отписаться";
      }
      case "requested": {
        return "Отменить";
      }
      default: {
        return p?.isFollowedBy ? "Подписаться в ответ" : "Подписаться";
      }
    }
  };

  const N = () =>
    m === "following" || m === "requested" ? "secondary" : "primary";

  const v = (i) => {
    i.stopPropagation();

    if (s?.id && !w) {
      $(s.id);
    }
  };

  const F = (i) => {
    i.stopPropagation();
    i.preventDefault();
    y(n.id);

    if (s?.username) {
      $(`/@${s.username}`);
    }
  };

  return a("div", {
    ref: x,
    className: `${l.item} ${r ? l.unread : ""}`,
    onClick: k,
    role: "button",
    tabIndex: 0,
    children: [
      a("div", {
        className: l.content,
        children: [
          a("a", {
            href: s?.username ? `/@${s.username}` : "#",
            className: l.avatarLink,
            onClick: F,
            title: "Перейти в профиль",
            children: a(f, {
              src: s?.avatar || "",
              alt: s?.displayName || "User",
              size: "md",
              badge: a(Fe, { type: n.type }),
            }),
          }),
          a("div", {
            className: l.info,
            children: [
              a("div", {
                className: l.header,
                children: [
                  a("a", {
                    href: s?.username ? `/@${s.username}` : "#",
                    className: l.actorLink,
                    onClick: F,
                    title: "Перейти в профиль",
                    children: a(U_1, {
                      name: s?.displayName || "Пользователь",
                      verified: s?.isVerified ?? s?.verified ?? false,
                      pin: s?.pin,
                      size: "sm",
                      className: l.name,
                    }),
                  }),
                  a("span", {
                    className: l.action,
                    children: q?.getAction(S) || "уведомление",
                  }),
                ],
              }),
              n.payload.entityPreview &&
                a("p", {
                  className: l.text,
                  children: n.payload.entityPreview,
                }),
              a("span", { className: l.date, children: ve(n.createdAt) }),
            ],
          }),
        ],
      }),
      R &&
        s?.id &&
        a(A_1, {
          variant: N(),
          size: "md",
          className: l.btn,
          onClick: v,
          disabled: w,
          children: [m === "none" && a(E_1, { size: 18 }), C()],
        }),
    ],
  });
}

export const Notifications = (n) => {
  const {
    notifications: r,
    status: y,
    nextCursor: A,
    fetchNotifications: p,
    markAsRead: $,
    markAsReadSilent: w,
    markAllAsRead: q,
  } = l_1();

  const s = a1();
  const S = A(null);
  const [x, k] = d(new Set());
  const R = A(new Set());
  const b = A(null);
  const m = A(new Set());
  const [C, N] = d(new Map());
  const [v, F] = d(new Set());
  y(() => {
    const e = new Set();
    for (const o of r) {
      if (!o.isRead) {
        e.add(o.id);
      }
    }
    k((o) => {
      const c = new Set(o);
      for (const a of e) {
        c.add(a);
      }
      return c;
    });
  }, [r]);
  const i = q(() => {
    const e = Array.from(R.current);

    if (e.length !== 0) {
      R.current.clear();
      w(e);
    }
  }, [w]);

  y(
    () => () => {
      if (b.current) {
        clearTimeout(b.current);
      }

      const e = Array.from(R.current);

      if (e.length > 0) {
        R.current.clear();
        w(e);
      }
    },
    [w]
  );

  y(() => {
    p(true);
    m.current.clear();
  }, [p]);

  y(() => {
    const e = ["follow", "follow_request"];
    const o = [];
    for (const c of r) {
      if (!e.includes(c.type)) {
        continue;
      }
      const a = c.payload.actors[0];

      if (a?.id && !C.has(a.id)) {
        if (!C.has(a.id)) {
          o.push([
            a.id,
            {
              isFollowing: a.isFollowing ?? false,
              isFollowedBy: a.isFollowedBy ?? true,
              hasOutgoingRequest: false,
              hasIncomingRequest: false,
              isBlocking: false,
              isBlockedBy: false,
            },
          ]);
        }
      }
    }

    if (o.length > 0) {
      N((c) => {
        const a = new Map(c);
        for (const [u, g] of o) {
          a.set(u, g);
        }
        return a;
      });
    }
  }, [r]);

  u({
    sentinelRef: S,
    hasMore: !!A,
    isLoading: y === "loading",
    onLoadMore: p,
  });

  const d = q(
    (e) => {
      if (!m.current.has(e)) {
        m.current.add(e);
        R.current.add(e);
        b.current && clearTimeout(b.current);
        b.current = setTimeout(i, 500);
      }
    },
    [i]
  );

  const h = q(
    (e) => {
      k((o) => {
        const c = new Set(o);
        c.delete(e);
        return c;
      });

      if (!m.current.has(e)) {
        m.current.add(e);
        $([e]);
      }
    },
    [$]
  );

  const T = q(() => {
    k(new Set());
    q();
  }, [q]);

  const f = q(
    async (e) => {
      if (!v.has(e)) {
        F((o) => new Set(o).add(e));
        try {
          const o = C.get(e);
          if (o?.isFollowing || o?.hasOutgoingRequest) {
            await s.unfollowUser(e);

            N((a) => {
              const u = new Map(a);
              const g = u.get(e);

              if (g) {
                u.set(e, {
                  ...g,
                  isFollowing: false,
                  hasOutgoingRequest: false,
                });
              }

              return u;
            });
          } else {
            const a = await s.followUser(e);
            N((u) => {
              const g = new Map(u);
              const D = g.get(e);

              if (D) {
                g.set(e, {
                  ...D,
                  isFollowing: a === "following",
                  hasOutgoingRequest: a === "requested",
                });
              } else {
                g.set(e, {
                  isFollowing: a === "following",
                  isFollowedBy: true,
                  hasOutgoingRequest: a === "requested",
                  hasIncomingRequest: false,
                  isBlocking: false,
                  isBlockedBy: false,
                });
              }

              return g;
            });
          }
        } catch (o) {
          if (
            o?.status === 409 ||
            o?.code === "CONFLICT" ||
            o?.code === "CONFLICT" ||
            o?.message?.includes("Already following")
          ) {
            N((a) => {
              const u = new Map(a);
              const g = u.get(e);

              u.set(e, {
                ...(g ?? {
                  isFollowedBy: true,
                  hasIncomingRequest: false,
                  isBlocking: false,
                  isBlockedBy: false,
                }),
                isFollowing: true,
                hasOutgoingRequest: false,
              });

              return u;
            });
          } else {
            console.error("Failed to toggle follow:", o);
          }
        } finally {
          F((o) => {
            const c = new Set(o);
            c.delete(e);
            return c;
          });
        }
      }
    },
    [C, v]
  );

  const z = y === "loading";
  const M = r.length === 0 && !z;
  return a("div", {
    className: l.page,
    children: [
      a("div", {
        className: l.titleRow,
        children: [
          a("h1", { className: l.pageTitle, children: "Уведомления" }),
          s > 0 &&
            a(A_1, {
              variant: "ghost",
              size: "sm",
              onClick: T,
              children: "Прочитать все",
            }),
        ],
      }),
      M
        ? a("div", {
            className: l.empty,
            children: a("p", { children: "Нет уведомлений" }),
          })
        : a("div", {
            className: l.list,
            children: [
              r.map((e) => {
                const o = e.payload.actors[0]?.id;
                return a(
                  _e,
                  {
                    notification: e,
                    isVisuallyUnread: x.has(e.id),
                    onMarkRead: h,
                    onVisible: d,
                    followStatus: o ? C.get(o) ?? null : null,
                    onFollowToggle: f,
                    isFollowLoading: o ? v.has(o) : false,
                  },
                  e.id
                );
              }),
              A &&
                a("div", {
                  ref: S,
                  className: l.loadMore,
                  children: z && a(S, { size: "sm" }),
                }),
            ],
          }),
    ],
  });
};

export { Notifications as Notifications };
