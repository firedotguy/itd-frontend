import {
  a2 as Y_1,
  Z,
  y as A_1,
  d,
  y,
  q,
  l,
  u,
  B,
  m,
  n,
  z as U_1,
  z,
  _,
  a0,
  a1,
  a2,
  a3,
  $,
} from "./index-BPAoISKs.js";

import { I } from "./IconCheck-BI1LTQ_u.js";
const ne = "P3Nv664-";
const oe = "TjFPtUjO";
const se = "FVzwkwHP";
const re = "PUa4FZiJ";
const le = "iVYbwWPU";
const ae = "-CGZDum0";
const ie = "nkg1aG1Y";
const ce = "_1s5kl7dI";
const de = "J18V9XAT";
const ue = "v5iKoEiS";
const ge = "_53tkhErT";
const me = "S-80SJVH";
const fe = "AADxYCa-";
const pe = "gLpongRO";
const we = "OCBRPy-H";
const he = "MTN9pCcR";
const ye = "VXdy3b5K";
const be = "qs9xk1h-";
const Ce = "pjFerM1n";
const Re = "EPxHezfh";
const Ne = "gLJwthYt";
const ke = "_-4T-IMkn";

const r = {
  page: ne,
  pageTitle: oe,
  list: se,
  item: re,
  btn: le,
  content: ae,
  badge: ie,
  red: ce,
  green: de,
  blue: ue,
  purple: ge,
  avatarLink: me,
  actorLink: fe,
  info: pe,
  header: we,
  action: he,
  text: ye,
  date: be,
  titleRow: Ce,
  unread: Re,
  empty: Ne,
  loadMore: ke,
};

function ve(n) {
  if (!n) {
    return "";
  }
  const a = new Date(n);
  return isNaN(a.getTime())
    ? ""
    : a.toLocaleDateString("ru-RU", { day: "numeric", month: "short" });
}

const j = {
  follow: {
    badgeColor: "blue",
    icon: u(z, { size: 12 }),
    getAction: (n) =>
      n > 1
        ? `и ещё ${n - 1} человек подписались на вас`
        : "подписался(-ась) на вас",
  },
  follow_request: {
    badgeColor: "blue",
    icon: u(z, { size: 12 }),
    getAction: () => "хочет подписаться на вас",
  },
  follow_accepted: {
    badgeColor: "green",
    icon: u(I, { size: 12 }),
    getAction: () => "принял(а) вашу заявку на подписку",
  },
  post_reaction: {
    badgeColor: "red",
    icon: u(a2, { size: 12, filled: true }),
    getAction: (n) =>
      n > 1 ? `и ещё ${n - 1} человек оценили ваш пост` : "оценил(а) ваш пост",
  },
  post_comment: {
    badgeColor: "green",
    icon: u(a1, { size: 12, filled: true }),
    getAction: () => "прокомментировал(а) ваш пост",
  },
  post_repost: {
    badgeColor: "blue",
    icon: u(a3, { size: 12 }),
    getAction: (n) =>
      n > 1
        ? `и ещё ${n - 1} человек сделали репост`
        : "сделал(а) репост вашего поста",
  },
  comment_reaction: {
    badgeColor: "red",
    icon: u(a2, { size: 12, filled: true }),
    getAction: (n) =>
      n > 1
        ? `и ещё ${n - 1} человек оценили ваш комментарий`
        : "оценил(а) ваш комментарий",
  },
  comment_reply: {
    badgeColor: "green",
    icon: u(a1, { size: 12, filled: true }),
    getAction: () => "ответил(а) на ваш комментарий",
  },
  post_mention: {
    badgeColor: "purple",
    icon: u(a0, { size: 12 }),
    getAction: () => "упомянул(а) вас в посте",
  },
  comment_mention: {
    badgeColor: "purple",
    icon: u(a0, { size: 12 }),
    getAction: () => "упомянул(а) вас в комментарии",
  },
  wall_post: {
    badgeColor: "blue",
    icon: u(_, { size: 12 }),
    getAction: () => "написал(а) на вашей стене",
  },
};

const Ae = ({ type: n }) => {
  const a = j[n];

  const w =
    a?.badgeColor === "red"
      ? r.red
      : a?.badgeColor === "green"
      ? r.green
      : a?.badgeColor === "purple"
      ? r.purple
      : r.blue;

  return u("div", {
    className: `${r.badge} ${w}`,
    children: a?.icon || u(a1, { size: 12 }),
  });
};

const Fe = ({ dateString: n }) => {
  const a = ve(n);
  return u("span", { className: r.date, children: a });
};

const _e = ({
  notification: n,
  isVisuallyUnread: a,
  onMarkRead: w,
  onVisible: b,
  followStatus: p,
  onFollowToggle: B,
  isFollowLoading: h,
}) => {
  const $ = j[n.type];
  const s = n.payload.actors[0];
  const I = n.payload.count;
  const q = A_1(null);
  y(() => {
    if (n.isRead) {
      return;
    }
    const c = q.current;
    if (!c) {
      return;
    }
    const d = new IntersectionObserver(
      (y) => {
        if (y[0].isIntersecting) {
          b(n.id);
          d.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    d.observe(c);

    return () => d.disconnect();
  }, [n.id, n.isRead, b]);

  const F = () => {
    w(n.id);
    const { type: c, entityId: d, parentEntityId: y, payload: z } = n;
    let f = z.clickUrl;

    const M = [
      "post_reaction",
      "post_comment",
      "post_repost",
      "post_mention",
      "wall_post",
    ];

    const x = ["comment_reaction", "comment_reply", "comment_mention"];

    if (d && s?.username) {
      if (M.includes(c)) {
        if (c === "post_comment" && y) {
          f = `/@${s.username}/post/${y}?comment=${d}`;
        } else {
          f = `/@${s.username}/post/${d}`;
        }
      } else if (x.includes(c)) {
        if (y) {
          f = `/@${s.username}/post/${y}?comment=${d}`;
        } else {
          f = `/@${s.username}/post/${d}`;
        }
      }
    }

    if (
      !f &&
      s?.username &&
      ["follow", "follow_request", "follow_accepted"].includes(c)
    ) {
      f = `/@${s.username}`;
    }

    if (f) {
      $(f);
    }
  };

  const C = n.type === "follow" || n.type === "follow_request";

  const m = h
    ? "loading"
    : p
    ? p.isFollowing
      ? "following"
      : p.hasOutgoingRequest
      ? "requested"
      : "none"
    : "none";

  const N = () => {
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

  const k = () =>
    m === "following" || m === "requested" ? "secondary" : "primary";

  const _ = (c) => {
    c.stopPropagation();

    if (s?.id && !h) {
      B(s.id);
    }
  };

  const T = (c) => {
    c.stopPropagation();
    c.preventDefault();
    w(n.id);

    if (s?.username) {
      $(`/@${s.username}`);
    }
  };

  return u("div", {
    ref: q,
    className: `${r.item} ${a ? r.unread : ""}`,
    onClick: F,
    role: "button",
    tabIndex: 0,
    children: [
      u("div", {
        className: r.content,
        children: [
          u("a", {
            href: s?.username ? `/@${s.username}` : "#",
            className: r.avatarLink,
            onClick: T,
            title: "Перейти в профиль",
            children: u(n, {
              src: s?.avatar || "",
              alt: s?.displayName || "User",
              size: "md",
              badge: u(Ae, { type: n.type }),
            }),
          }),
          u("div", {
            className: r.info,
            children: [
              u("div", {
                className: r.header,
                children: [
                  u("a", {
                    href: s?.username ? `/@${s.username}` : "#",
                    className: r.actorLink,
                    onClick: T,
                    title: "Перейти в профиль",
                    children: u(U_1, {
                      name: s?.displayName || "Пользователь",
                      verified: s?.isVerified ?? s?.verified ?? false,
                      pin: s?.pin,
                      size: "sm",
                      className: r.name,
                    }),
                  }),
                  u("span", {
                    className: r.action,
                    children: $?.getAction(I) || "уведомление",
                  }),
                ],
              }),
              n.payload.entityPreview &&
                u("p", {
                  className: r.text,
                  children: n.payload.entityPreview,
                }),
              u(Fe, { dateString: n.createdAt }),
            ],
          }),
        ],
      }),
      C &&
        s?.id &&
        u(B, {
          variant: k(),
          size: "md",
          className: r.btn,
          onClick: _,
          disabled: h,
          children: [m === "none" && u(z, { size: 18 }), N()],
        }),
    ],
  });
};

const Te = () =>
  u("div", {
    className: r.empty,
    children: u("p", { children: "Нет уведомлений" }),
  });

export const Notifications = (n) => {
  const {
    notifications: a,
    status: w,
    nextCursor: b,
    fetchNotifications: p,
    markAsRead: B,
    markAsReadSilent: h,
    markAllAsRead: $,
  } = Y_1();

  const s = Z();
  const I = A_1(null);
  const [q, F] = d(new Set());
  const C = A_1(new Set());
  const R = A_1(null);
  const m = A_1(new Set());
  const [N, k] = d(new Map());
  const [_, T] = d(new Set());
  const c = A_1(new Set());
  y(() => {
    const e = new Set();
    for (const o of a) {
      if (!o.isRead) {
        e.add(o.id);
      }
    }
    F((o) => {
      const i = new Set(o);
      for (const l of e) {
        i.add(l);
      }
      return i;
    });
  }, [a]);
  const d = q(() => {
    const e = Array.from(C.current);

    if (e.length !== 0) {
      C.current.clear();
      h(e);
    }
  }, [h]);

  y(
    () => () => {
      if (R.current) {
        clearTimeout(R.current);
      }

      const e = Array.from(C.current);

      if (e.length > 0) {
        C.current.clear();
        h(e);
      }
    },
    [h]
  );

  y(() => {
    p(true);
    c.current.clear();
    m.current.clear();
  }, [p]);

  y(() => {
    const e = ["follow", "follow_request"];
    const o = [];
    for (const i of a) {
      if (!e.includes(i.type)) {
        continue;
      }
      const l = i.payload.actors[0];

      if (l?.id && !N.has(l.id)) {
        if (!N.has(l.id)) {
          o.push([
            l.id,
            {
              isFollowing: l.isFollowing ?? false,
              isFollowedBy: l.isFollowedBy ?? true,
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
      k((i) => {
        const l = new Map(i);
        for (const [u, g] of o) {
          l.set(u, g);
        }
        return l;
      });
    }
  }, [a]);

  y(() => {
    const e = I.current;
    if (!e || !b) {
      return;
    }
    const o = new IntersectionObserver(
      (i) => {
        if (i[0].isIntersecting && w !== "loading" && b) {
          p();
        }
      },
      { threshold: 0.1, rootMargin: "100px" }
    );
    o.observe(e);

    return () => o.disconnect();
  }, [p, w, b]);

  const y = q(
    (e) => {
      if (!m.current.has(e)) {
        m.current.add(e);
        C.current.add(e);
        R.current && clearTimeout(R.current);
        R.current = setTimeout(d, 500);
      }
    },
    [d]
  );

  const z = q(
    (e) => {
      F((o) => {
        const i = new Set(o);
        i.delete(e);
        return i;
      });

      if (!m.current.has(e)) {
        m.current.add(e);
        B([e]);
      }
    },
    [B]
  );

  const f = q(() => {
    F(new Set());
    $();
  }, [$]);

  const M = q(
    async (e) => {
      if (!_.has(e)) {
        T((o) => new Set(o).add(e));
        try {
          const o = N.get(e);
          if (o?.isFollowing || o?.hasOutgoingRequest) {
            await l.unfollowUser(e);

            k((l) => {
              const u = new Map(l);
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
            const l = await l.followUser(e);
            k((u) => {
              const g = new Map(u);
              const V = g.get(e);

              if (V) {
                g.set(e, {
                  ...V,
                  isFollowing: l === "following",
                  hasOutgoingRequest: l === "requested",
                });
              } else {
                g.set(e, {
                  isFollowing: l === "following",
                  isFollowedBy: true,
                  hasOutgoingRequest: l === "requested",
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
            k((l) => {
              const u = new Map(l);
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
          T((o) => {
            const i = new Set(o);
            i.delete(e);
            return i;
          });
        }
      }
    },
    [N, _]
  );

  const x = w === "loading";
  const L = a.length === 0 && !x;
  return u("div", {
    className: r.page,
    children: [
      u("div", {
        className: r.titleRow,
        children: [
          u("h1", { className: r.pageTitle, children: "Уведомления" }),
          s > 0 &&
            u(B, {
              variant: "ghost",
              size: "sm",
              onClick: f,
              children: "Прочитать все",
            }),
        ],
      }),
      L
        ? u(Te, {})
        : u("div", {
            className: r.list,
            children: [
              a.map((e) => {
                const o = e.payload.actors[0]?.id;
                return u(
                  _e,
                  {
                    notification: e,
                    isVisuallyUnread: q.has(e.id),
                    onMarkRead: z,
                    onVisible: y,
                    followStatus: o ? N.get(o) ?? null : null,
                    onFollowToggle: M,
                    isFollowLoading: o ? _.has(o) : false,
                  },
                  e.id
                );
              }),
              b &&
                u("div", {
                  ref: I,
                  className: r.loadMore,
                  children: x && u(m, { size: "sm" }),
                }),
            ],
          }),
    ],
  });
};

export { Notifications as Notifications };
