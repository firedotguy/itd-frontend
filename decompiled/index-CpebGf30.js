import {
  ac,
  ad,
  ae,
  d,
  A,
  y,
  q as q_1,
  ad as ad_1,
  af,
  n,
  U,
  n as n_1,
  ac as ac_1,
} from "./index-BPAoISKs.js";

const w = new ae(1, 300 * 1000 /* 1e3 */);
const C = new ae(1, 300 * 1000 /* 1e3 */);
const p = "data";

const v = {
  async getTrendingHashtags(c = 10) {
    const i = w.get(p);
    if (i) {
      return i;
    }
    const r = await ac.get(`${ad.hashtags.trending}?limit=${c}`);
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
    w.set(p, n);
    return n;
  },
  async getPopularAvatars() {
    const c = C.get(p);
    if (c) {
      return c;
    }
    const i = await ac.get(ad.users.topClans);

    const t = (i.clans || i.data || i.data || []).map((n) => ({
      ...n,
      count: n.count ?? n.memberCount ?? 0,
    }));

    C.set(p, t);
    return t;
  },
  async searchUsers(c, i = 20, r) {
    const t = new URLSearchParams({ q: c, limit: String(i) });

    if (r) {
      t.append("cursor", r);
    }

    const n = await ac.get(`${ad.users.search}?${t.toString()}`);
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

    const n = await ac.get(`${ad.search.global}?${t.toString()}`);
    const o = n.data ?? n;
    return {
      users: o.users ?? [],
      hashtags: (o.hashtags ?? []).map((g) => ({
        ...g,
        count: g.count ?? g.postsCount ?? 0,
      })),
    };
  },
  async searchHashtags(c, i = 10) {
    const r = new URLSearchParams({ limit: String(i) });

    if (c) {
      r.set("q", c);
    }

    const t = await ac.get(`${ad.hashtags.search}?${r.toString()}`);
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

const E = "V8n0-A6j";
const F = "lLeSRXJI";
const j = "PhJGbQsP";
const q = "QMiCPNNZ";
const M = "YftXFSHB";
const O = "VUVtn1zM";
const W = "hBNiYwQ9";
const X = "l8pT2ZJ9";
const Y = "docWdaJH";
const _ = "vISuOJy2";
const G = "FzJvK--w";
const K = "Xe2SUuJb";
const Z = "kjmHROlS";
const aa = "_0GZt--4J";
const sa = "Shwdcf1Q";
const ea = "VLVaXrye";
const ta = "JQYm8lDu";
const na = "qkqd1sP3";
const ca = "tTzhpSOu";
const ra = "QT6-NgzT";
const ia = "biGy82Rx";
const oa = "s79N-yu3";
const la = "d4whLTgb";
const ha = "lgrMViUt";
const da = "Nh8PLa47";

const s = {
  page: E,
  pageTitle: F,
  titleRow: j,
  searchWrapper: q,
  searchIcon: M,
  searchInput: O,
  sections: W,
  section: X,
  sectionHeader: Y,
  sectionTitle: _,
  usersList: G,
  userItem: K,
  userInfo: Z,
  userUsername: aa,
  clansBadges: sa,
  clanBadge: ea,
  clanEmoji: ta,
  clanCount: na,
  hashtagsList: ca,
  hashtagItem: ra,
  hashtagRank: ia,
  hashtagInfo: oa,
  hashtagTag: la,
  hashtagCount: ha,
  empty: da,
};

const T = (c) =>
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
  const [o, g] = d([]);
  const [I, N] = d([]);
  const [A, U] = d(true);
  const [H, R] = d(true);
  const [P, f] = d(false);
  const y = A(null);
  y(() => {
    (async () => {
      try {
        const [l, h] = await Promise.all([
          v.getPopularAvatars(),
          v.getTrendingHashtags(),
        ]);
        n(l.slice(0, 10));
        g(h.slice(0, 10));
      } catch (l) {
        console.error("Failed to fetch search data:", l);
      } finally {
        U(false);
        R(false);
      }
    })();
  }, []);

  const $ = q_1(async (e) => {
    const l = e.trim().replace(/^@/, "");
    if (!l) {
      N([]);
      f(false);
      return;
    }
    f(true);
    try {
      const h = await v.searchUsers(l, 20);
      N(h.data);
    } catch (h) {
      console.error("Failed to search users:", h);
      N([]);
    } finally {
      f(false);
    }
  }, []);

  const Q = (e) => {
    const h = e.target.value;
    r(h);

    if (y.current) {
      clearTimeout(y.current);
    }

    y.current = window.setTimeout(() => {
      $(h);
    }, 1000 /* 1e3 */);
  };

  const b = i.trim().length > 0;
  return ad_1("div", {
    className: s.page,
    children: [
      ad_1("div", {
        className: s.titleRow,
        children: ad_1("h1", { className: s.pageTitle, children: "Поиск" }),
      }),
      ad_1("div", {
        className: s.searchWrapper,
        children: [
          ad_1("div", {
            className: s.searchIcon,
            children: ad_1(af, { size: 20 }),
          }),
          ad_1("input", {
            type: "text",
            className: s.searchInput,
            placeholder: "Поиск людей",
            value: i,
            onInput: Q,
          }),
        ],
      }),
      ad_1("div", {
        className: s.sections,
        children: b
          ? ad_1("section", {
              className: s.section,
              children: [
                ad_1("div", {
                  className: s.sectionHeader,
                  children: ad_1("h2", {
                    className: s.sectionTitle,
                    children: "Результаты поиска",
                  }),
                }),
                ad_1("div", {
                  className: s.usersList,
                  children: P
                    ? null
                    : I.length === 0
                    ? ad_1("div", {
                        className: s.empty,
                        children: "Ничего не найдено",
                      })
                    : I.map((e) =>
                        ad_1(
                          "a",
                          {
                            href: `/@${e.username ?? e.userId}`,
                            className: s.userItem,
                            children: [
                              ad_1(n, {
                                src: e.avatar,
                                alt: e.displayName,
                                size: "md",
                              }),
                              ad_1("div", {
                                className: s.userInfo,
                                children: [
                                  ad_1(U, {
                                    name: e.displayName,
                                    verified: e.isVerified ?? e.verified,
                                    pin: e.pin,
                                  }),
                                  e.username &&
                                    ad_1("span", {
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
            })
          : ad_1(n_1, {
              children: [
                ad_1("section", {
                  className: s.section,
                  children: [
                    ad_1("div", {
                      className: s.sectionHeader,
                      children: ad_1("h2", {
                        className: s.sectionTitle,
                        children: "Топ кланов",
                      }),
                    }),
                    ad_1("div", {
                      className: s.clansBadges,
                      children: A
                        ? ad_1(ac_1, { size: "sm" })
                        : t.length === 0
                        ? ad_1("div", {
                            className: s.empty,
                            children: "Нет данных",
                          })
                        : t.map((e) =>
                            ad_1(
                              "div",
                              {
                                className: s.clanBadge,
                                children: [
                                  ad_1("span", {
                                    className: s.clanEmoji,
                                    children: e.avatar,
                                  }),
                                  ad_1("span", {
                                    className: s.clanCount,
                                    children: T(e.count),
                                  }),
                                ],
                              },
                              e.avatar
                            )
                          ),
                    }),
                  ],
                }),
                ad_1("section", {
                  className: s.section,
                  children: [
                    ad_1("div", {
                      className: s.sectionHeader,
                      children: ad_1("h2", {
                        className: s.sectionTitle,
                        children: "Популярные хештеги",
                      }),
                    }),
                    ad_1("div", {
                      className: s.hashtagsList,
                      children: H
                        ? ad_1(ac_1, { size: "sm" })
                        : o.length === 0
                        ? ad_1("div", {
                            className: s.empty,
                            children: "Нет данных",
                          })
                        : o.map((e, l) =>
                            ad_1(
                              "a",
                              {
                                href: `/hashtag/${encodeURIComponent(e.name)}`,
                                className: s.hashtagItem,
                                children: [
                                  ad_1("span", {
                                    className: s.hashtagRank,
                                    children: l + 1,
                                  }),
                                  ad_1("div", {
                                    className: s.hashtagInfo,
                                    children: [
                                      ad_1("span", {
                                        className: s.hashtagTag,
                                        children: ["#", e.name],
                                      }),
                                      ad_1("span", {
                                        className: s.hashtagCount,
                                        children: [T(e.count), " постов"],
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
