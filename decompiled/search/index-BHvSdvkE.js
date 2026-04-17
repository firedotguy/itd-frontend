import {
  ab,
  ac,
  ad,
  d,
  A as A_1,
  y as y_1,
  q as q_1,
  a,
  k,
  f,
  U,
  S,
} from "./index-BNG2MjJY.js";
import { I } from "./IconSearch-DA17k1-r.js";
const A = new ad(1, 300 * 1000 /* 1e3 */);
const R = new ad(1, 300 * 1000 /* 1e3 */);
const p = "data";

const y = {
  async getTrendingHashtags(c = 10) {
    const i = A.get(p);
    if (i) {
      return i;
    }
    const r = await ab.get(`${ac.hashtags.trending}?limit=${c}`);
    let t;

    if (r.data?.hashtags) {
      t = r.data.hashtags;
    } else if (Array.isArray(r.hashtags)) {
      t = r.hashtags;
    } else if (Array.isArray(r.data)) {
      t = r.data;
    } else {
      t = [];
    }

    const n = t.map((o) => ({
      ...o,
      count: o.count ?? o.postsCount ?? 0,
    }));
    A.set(p, n);
    return n;
  },
  async getPopularAvatars() {
    const c = R.get(p);
    if (c) {
      return c;
    }
    const i = await ab.get(ac.users.topClans);

    const t = (i.clans || i.data || i.data || []).map((n) => ({
      ...n,
      count: n.count ?? n.memberCount ?? 0,
    }));

    R.set(p, t);
    return t;
  },
  async searchUsers(c, i = 20, r) {
    const t = new URLSearchParams({ q: c, limit: String(i) });

    if (r) {
      t.append("cursor", r);
    }

    const n = await ab.get(`${ac.users.search}?${t.toString()}`);
    return {
      data: n.data?.users || n.users || n.users || [],
      nextCursor: null,
    };
  },
  async globalSearch(c, i = 5, r = 5) {
    const t = new URLSearchParams({
      q: c,
      userLimit: String(i),
      hashtagLimit: String(r),
    });

    const n = await ab.get(`${ac.search.global}?${t.toString()}`);
    const o = n.data ?? n;
    return {
      users: o.users ?? [],
      hashtags: (o.hashtags ?? []).map((m) => ({
        ...m,
        count: m.count ?? m.postsCount ?? 0,
      })),
    };
  },
  async searchHashtags(c, i = 10) {
    const r = new URLSearchParams({ limit: String(i) });

    if (c) {
      r.set("q", c);
    }

    const t = await ab.get(`${ac.hashtags.search}?${r.toString()}`);
    let n;

    if (t.data?.hashtags) {
      n = t.data.hashtags;
    } else if (Array.isArray(t.hashtags)) {
      n = t.hashtags;
    } else if (Array.isArray(t.data)) {
      n = t.data;
    } else {
      n = [];
    }

    return n.map((o) => ({
      ...o,
      count: o.count ?? o.postsCount ?? 0,
    }));
  },
};

const q = "RRAk";
const W = "Mv9g";
const _ = "Ev4D";
const G = "y0Y6";
const K = "u5RR";
const M = "ErOD";
const O = "CT1D";
const V = "lLfj";
const X = "oDg2";
const J = "TIYf";
const Z = "LCNu";
const aa = "xYEV";
const sa = "jGIQ";
const ea = "BRLl";
const ta = "L36w";
const na = "pn3L";
const ca = "C9eh";
const ra = "tmFd";
const ia = "rCAh";
const oa = "c0IU";
const la = "Xbz9";
const ha = "hbzY";
const da = "l8Gf";
const ma = "pDpY";
const ga = "um5k";

const s = {
  page: q,
  pageTitle: W,
  titleRow: _,
  searchWrapper: G,
  searchIcon: K,
  searchInput: M,
  sections: O,
  section: V,
  sectionHeader: X,
  sectionTitle: J,
  usersList: Z,
  userItem: aa,
  userInfo: sa,
  userUsername: ea,
  clansBadges: ta,
  clanBadge: na,
  clanEmoji: ca,
  clanCount: ra,
  hashtagsList: ia,
  hashtagItem: oa,
  hashtagRank: la,
  hashtagInfo: ha,
  hashtagTag: da,
  hashtagCount: ma,
  empty: ga,
};

const C = (c) =>
  c >= 1000000 /* 1e6 */
    ? `${(c / 1000000) /* 1e6 */
        .toFixed(1)
        .replace(/\.0$/, "")}M`
    : c >= 1000 /* 1e3 */
    ? `${(c / 1000) /* 1e3 */
        .toFixed(1)
        .replace(/\.0$/, "")}K`
    : c.toString();

export const Search = (c) => {
  const [i, r] = d("");
  const [t, n] = d([]);
  const [o, m] = d([]);
  const [S, N] = d([]);
  const [w, f] = d([]);
  const [U, $] = d(true);
  const [D, b] = d(true);
  const [E, v] = d(false);
  const I = A_1(null);
  y_1(() => {
    (async () => {
      try {
        const [l, h] = await Promise.all([
          y.getPopularAvatars(),
          y.getTrendingHashtags(),
        ]);
        n(l.slice(0, 10));
        m(h.slice(0, 10));
      } catch (l) {
        console.error("Failed to fetch search data:", l);
      } finally {
        $(false);
        b(false);
      }
    })();
  }, []);

  const k = q_1(async (e) => {
    const l = e.trim().replace(/^@/, "").replace(/^#/, "");
    if (!l) {
      N([]);
      f([]);
      v(false);
      return;
    }
    v(true);
    try {
      const h = await y.globalSearch(l, 10, 5);
      N(h.users);
      f(h.hashtags);
    } catch (h) {
      console.error("Failed to search:", h);
      N([]);
      f([]);
    } finally {
      v(false);
    }
  }, []);

  const P = (e) => {
    const h = e.target.value;
    r(h);

    if (I.current) {
      clearTimeout(I.current);
    }

    I.current = window.setTimeout(() => {
      k(h);
    }, 1000 /* 1e3 */);
  };

  const B = i.trim().length > 0;
  return a("div", {
    className: s.page,
    children: [
      a("div", {
        className: s.titleRow,
        children: a("h1", { className: s.pageTitle, children: "Поиск" }),
      }),
      a("div", {
        className: s.searchWrapper,
        children: [
          a("div", { className: s.searchIcon, children: a(I, { size: 20 }) }),
          a("input", {
            type: "text",
            className: s.searchInput,
            placeholder: "Поиск людей и хештегов",
            value: i,
            onInput: P,
          }),
        ],
      }),
      a("div", {
        className: s.sections,
        children: B
          ? a(k, {
              children: [
                a("section", {
                  className: s.section,
                  children: [
                    a("div", {
                      className: s.sectionHeader,
                      children: a("h2", {
                        className: s.sectionTitle,
                        children: "Люди",
                      }),
                    }),
                    a("div", {
                      className: s.usersList,
                      children: E
                        ? null
                        : S.length === 0
                        ? a("div", {
                            className: s.empty,
                            children: "Ничего не найдено",
                          })
                        : S.map((e) =>
                            a(
                              "a",
                              {
                                href: `/@${e.username ?? e.userId}`,
                                className: s.userItem,
                                children: [
                                  a(f, {
                                    src: e.avatar,
                                    alt: e.displayName,
                                    size: "md",
                                  }),
                                  a("div", {
                                    className: s.userInfo,
                                    children: [
                                      a(U, {
                                        name: e.displayName,
                                        verified: e.isVerified ?? e.verified,
                                        hasNuksta: e.hasNuksta,
                                        pin: e.pin,
                                      }),
                                      e.username &&
                                        a("span", {
                                          className: s.userUsername,
                                          children: ["@", e.username],
                                        }),
                                    ],
                                  }),
                                ],
                              },
                              e.userId
                            )
                          ),
                    }),
                  ],
                }),
                w.length > 0 &&
                  a("section", {
                    className: s.section,
                    children: [
                      a("div", {
                        className: s.sectionHeader,
                        children: a("h2", {
                          className: s.sectionTitle,
                          children: "Хештеги",
                        }),
                      }),
                      a("div", {
                        className: s.hashtagsList,
                        children: w.map((e) =>
                          a(
                            "a",
                            {
                              href: `/hashtag/${encodeURIComponent(e.name)}`,
                              className: s.hashtagItem,
                              children: a("div", {
                                className: s.hashtagInfo,
                                children: [
                                  a("span", {
                                    className: s.hashtagTag,
                                    children: ["#", e.name],
                                  }),
                                  a("span", {
                                    className: s.hashtagCount,
                                    children: [C(e.count), " постов"],
                                  }),
                                ],
                              }),
                            },
                            e.name
                          )
                        ),
                      }),
                    ],
                  }),
              ],
            })
          : a(k, {
              children: [
                a("section", {
                  className: s.section,
                  children: [
                    a("div", {
                      className: s.sectionHeader,
                      children: a("h2", {
                        className: s.sectionTitle,
                        children: "Топ кланов",
                      }),
                    }),
                    a("div", {
                      className: s.clansBadges,
                      children: U
                        ? a(S, { size: "sm" })
                        : t.length === 0
                        ? a("div", {
                            className: s.empty,
                            children: "Нет данных",
                          })
                        : t.map((e) =>
                            a(
                              "div",
                              {
                                className: s.clanBadge,
                                children: [
                                  a("span", {
                                    className: s.clanEmoji,
                                    children: e.avatar,
                                  }),
                                  a("span", {
                                    className: s.clanCount,
                                    children: C(e.count),
                                  }),
                                ],
                              },
                              e.avatar
                            )
                          ),
                    }),
                  ],
                }),
                a("section", {
                  className: s.section,
                  children: [
                    a("div", {
                      className: s.sectionHeader,
                      children: a("h2", {
                        className: s.sectionTitle,
                        children: "Популярные хештеги",
                      }),
                    }),
                    a("div", {
                      className: s.hashtagsList,
                      children: D
                        ? a(S, { size: "sm" })
                        : o.length === 0
                        ? a("div", {
                            className: s.empty,
                            children: "Нет данных",
                          })
                        : o.map((e, l) =>
                            a(
                              "a",
                              {
                                href: `/hashtag/${encodeURIComponent(e.name)}`,
                                className: s.hashtagItem,
                                children: [
                                  a("span", {
                                    className: s.hashtagRank,
                                    children: l + 1,
                                  }),
                                  a("div", {
                                    className: s.hashtagInfo,
                                    children: [
                                      a("span", {
                                        className: s.hashtagTag,
                                        children: ["#", e.name],
                                      }),
                                      a("span", {
                                        className: s.hashtagCount,
                                        children: [C(e.count), " постов"],
                                      }),
                                    ],
                                  }),
                                ],
                              },
                              e.name
                            )
                          ),
                    }),
                  ],
                }),
              ],
            }),
      }),
    ],
  });
};

export { Search as Search, Search as default };
