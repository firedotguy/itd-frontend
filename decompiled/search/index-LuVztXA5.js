import {
  a6,
  a7,
  a8,
  d,
  A as A_1,
  y,
  q as q_1,
  a7 as a7_1,
  k,
  e,
  U,
  S as S_1,
} from "./index-DOyq0flg.js";
import { I as I_1 } from "./IconSearch-Bps_4-EQ.js";
const H = new a8(1, 300 * 1000 /* 1e3 */);
const A = new a8(1, 300 * 1000 /* 1e3 */);
const p = "data";

const I = {
  async getTrendingHashtags(c = 10) {
    const i = H.get(p);
    if (i) {
      return i;
    }
    const r = await a6.get(`${a7.hashtags.trending}?limit=${c}`);
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
    H.set(p, n);
    return n;
  },
  async getPopularAvatars() {
    const c = A.get(p);
    if (c) {
      return c;
    }
    const i = await a6.get(a7.users.topClans);

    const t = (i.clans || i.data || i.data || []).map((n) => ({
      ...n,
      count: n.count ?? n.memberCount ?? 0,
    }));

    A.set(p, t);
    return t;
  },
  async searchUsers(c, i = 20, r) {
    const t = new URLSearchParams({ q: c, limit: String(i) });

    if (r) {
      t.append("cursor", r);
    }

    const n = await a6.get(`${a7.users.search}?${t.toString()}`);
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

    const n = await a6.get(`${a7.search.global}?${t.toString()}`);
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

    const t = await a6.get(`${a7.hashtags.search}?${r.toString()}`);
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

const j = "V8n0-A6j";
const q = "lLeSRXJI";
const M = "PhJGbQsP";
const O = "QMiCPNNZ";
const W = "YftXFSHB";
const X = "VUVtn1zM";
const Y = "hBNiYwQ9";
const _ = "l8pT2ZJ9";
const G = "docWdaJH";
const K = "vISuOJy2";
const Z = "FzJvK--w";
const aa = "Xe2SUuJb";
const sa = "kjmHROlS";
const ea = "_0GZt--4J";
const ta = "Shwdcf1Q";
const na = "VLVaXrye";
const ca = "JQYm8lDu";
const ra = "qkqd1sP3";
const ia = "tTzhpSOu";
const oa = "QT6-NgzT";
const la = "biGy82Rx";
const ha = "s79N-yu3";
const da = "d4whLTgb";
const ma = "lgrMViUt";
const ga = "Nh8PLa47";

const s = {
  page: j,
  pageTitle: q,
  titleRow: M,
  searchWrapper: O,
  searchIcon: W,
  searchInput: X,
  sections: Y,
  section: _,
  sectionHeader: G,
  sectionTitle: K,
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

const S = (c) =>
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
  const [C, N] = d([]);
  const [w, f] = d([]);
  const [U, P] = d(true);
  const [$, b] = d(true);
  const [Q, y] = d(false);
  const v = A_1(null);
  y(() => {
    (async () => {
      try {
        const [l, h] = await Promise.all([
          I.getPopularAvatars(),
          I.getTrendingHashtags(),
        ]);
        n(l.slice(0, 10));
        m(h.slice(0, 10));
      } catch (l) {
        console.error("Failed to fetch search data:", l);
      } finally {
        P(false);
        b(false);
      }
    })();
  }, []);

  const J = q_1(async (e) => {
    const l = e.trim().replace(/^@/, "").replace(/^#/, "");
    if (!l) {
      N([]);
      f([]);
      y(false);
      return;
    }
    y(true);
    try {
      const h = await I.globalSearch(l, 10, 5);
      N(h.users);
      f(h.hashtags);
    } catch (h) {
      console.error("Failed to search:", h);
      N([]);
      f([]);
    } finally {
      y(false);
    }
  }, []);

  const k = (e) => {
    const h = e.target.value;
    r(h);

    if (v.current) {
      clearTimeout(v.current);
    }

    v.current = window.setTimeout(() => {
      J(h);
    }, 1000 /* 1e3 */);
  };

  const z = i.trim().length > 0;
  return a7_1("div", {
    className: s.page,
    children: [
      a7_1("div", {
        className: s.titleRow,
        children: a7_1("h1", { className: s.pageTitle, children: "Поиск" }),
      }),
      a7_1("div", {
        className: s.searchWrapper,
        children: [
          a7_1("div", {
            className: s.searchIcon,
            children: a7_1(I_1, { size: 20 }),
          }),
          a7_1("input", {
            type: "text",
            className: s.searchInput,
            placeholder: "Поиск людей и хештегов",
            value: i,
            onInput: k,
          }),
        ],
      }),
      a7_1("div", {
        className: s.sections,
        children: z
          ? a7_1(k, {
              children: [
                a7_1("section", {
                  className: s.section,
                  children: [
                    a7_1("div", {
                      className: s.sectionHeader,
                      children: a7_1("h2", {
                        className: s.sectionTitle,
                        children: "Люди",
                      }),
                    }),
                    a7_1("div", {
                      className: s.usersList,
                      children: Q
                        ? null
                        : C.length === 0
                        ? a7_1("div", {
                            className: s.empty,
                            children: "Ничего не найдено",
                          })
                        : C.map((e) =>
                            a7_1(
                              "a",
                              {
                                href: `/@${e.username ?? e.userId}`,
                                className: s.userItem,
                                children: [
                                  a7_1(e, {
                                    src: e.avatar,
                                    alt: e.displayName,
                                    size: "md",
                                  }),
                                  a7_1("div", {
                                    className: s.userInfo,
                                    children: [
                                      a7_1(U, {
                                        name: e.displayName,
                                        verified: e.isVerified ?? e.verified,
                                        hasNuksta: e.hasNuksta,
                                        pin: e.pin,
                                      }),
                                      e.username &&
                                        a7_1("span", {
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
                  a7_1("section", {
                    className: s.section,
                    children: [
                      a7_1("div", {
                        className: s.sectionHeader,
                        children: a7_1("h2", {
                          className: s.sectionTitle,
                          children: "Хештеги",
                        }),
                      }),
                      a7_1("div", {
                        className: s.hashtagsList,
                        children: w.map((e) =>
                          a7_1(
                            "a",
                            {
                              href: `/hashtag/${encodeURIComponent(e.name)}`,
                              className: s.hashtagItem,
                              children: a7_1("div", {
                                className: s.hashtagInfo,
                                children: [
                                  a7_1("span", {
                                    className: s.hashtagTag,
                                    children: ["#", e.name],
                                  }),
                                  a7_1("span", {
                                    className: s.hashtagCount,
                                    children: [S(e.count), " постов"],
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
          : a7_1(k, {
              children: [
                a7_1("section", {
                  className: s.section,
                  children: [
                    a7_1("div", {
                      className: s.sectionHeader,
                      children: a7_1("h2", {
                        className: s.sectionTitle,
                        children: "Топ кланов",
                      }),
                    }),
                    a7_1("div", {
                      className: s.clansBadges,
                      children: U
                        ? a7_1(S_1, { size: "sm" })
                        : t.length === 0
                        ? a7_1("div", {
                            className: s.empty,
                            children: "Нет данных",
                          })
                        : t.map((e) =>
                            a7_1(
                              "div",
                              {
                                className: s.clanBadge,
                                children: [
                                  a7_1("span", {
                                    className: s.clanEmoji,
                                    children: e.avatar,
                                  }),
                                  a7_1("span", {
                                    className: s.clanCount,
                                    children: S(e.count),
                                  }),
                                ],
                              },
                              e.avatar
                            )
                          ),
                    }),
                  ],
                }),
                a7_1("section", {
                  className: s.section,
                  children: [
                    a7_1("div", {
                      className: s.sectionHeader,
                      children: a7_1("h2", {
                        className: s.sectionTitle,
                        children: "Популярные хештеги",
                      }),
                    }),
                    a7_1("div", {
                      className: s.hashtagsList,
                      children: $
                        ? a7_1(S_1, { size: "sm" })
                        : o.length === 0
                        ? a7_1("div", {
                            className: s.empty,
                            children: "Нет данных",
                          })
                        : o.map((e, l) =>
                            a7_1(
                              "a",
                              {
                                href: `/hashtag/${encodeURIComponent(e.name)}`,
                                className: s.hashtagItem,
                                children: [
                                  a7_1("span", {
                                    className: s.hashtagRank,
                                    children: l + 1,
                                  }),
                                  a7_1("div", {
                                    className: s.hashtagInfo,
                                    children: [
                                      a7_1("span", {
                                        className: s.hashtagTag,
                                        children: ["#", e.name],
                                      }),
                                      a7_1("span", {
                                        className: s.hashtagCount,
                                        children: [S(e.count), " постов"],
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
