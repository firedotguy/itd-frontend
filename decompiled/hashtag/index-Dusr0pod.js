import {
  d,
  K,
  y,
  Hashtag as Hashtag_1,
  J as J_1,
  a,
  a5,
  W as V_1,
  W,
  $,
} from "./index-BNG2MjJY.js";

const A = "d9SR";
const E = "VAiC";
const U = "VYye";
const D = "Emuf";
const F = "jRmf";
const H = "o6Ac";
const J = "JkEd";
const S = "IVMR";
const Y = "YMCw";

const s = {
  page: A,
  header: E,
  backButton: U,
  hashtagName: D,
  empty: F,
  emptyText: H,
  error: J,
  errorText: S,
  retryButton: Y,
};

export const Hashtag = ({ name: f }) => {
  const [p, i] = d([]);
  const [C, g] = d(true);
  const [y, N] = d(null);
  const [d, M] = d(null);
  const [h, x] = d(false);
  const o = f ? decodeURIComponent(f) : "";

  const m = K((t) => t._lastLikeUpdate);

  y(() => {
    if (!m) {
      return;
    }
    const { postId: t, myReaction: a, totalDelta: n } = m;
    i((P) =>
      P.map((c) =>
        c.id === t
          ? {
              ...c,
              reactions: {
                ...c.reactions,
                myReaction: a,
                total: Math.max(0, c.reactions.total + n),
              },
            }
          : c
      )
    );
  }, [m]);
  const r = Hashtag_1(
    async (t) => {
      if (o) {
        try {
          if (t) {
            x(true);
          } else {
            g(true);
            N(null);
          }

          const a = await J_1.getPostsByHashtag(o, { limit: 20, cursor: t });

          i(t ? (n) => [...n, ...a.data] : a.data);

          M(a.nextCursor);
        } catch (a) {
          console.error("Failed to fetch hashtag posts:", a);

          if (!t) {
            N("Не удалось загрузить посты");
          }
        } finally {
          g(false);
          x(false);
        }
      }
    },
    [o]
  );
  y(() => {
    r();
  }, [r]);

  const v = Hashtag_1(() => {
    if (d && !h) {
      r(d);
    }
  }, [d, h, r]);

  const B = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      $("/search");
    }
  };

  const L = Hashtag_1((t) => {
    i((a) => a.filter((n) => n.id !== t));
  }, []);

  return o
    ? a("div", {
        className: s.page,
        children: [
          a("div", {
            className: s.header,
            children: [
              a("button", {
                className: s.backButton,
                onClick: B,
                children: [a(a5, { size: 18 }), "Назад"],
              }),
              a("h1", { className: s.hashtagName, children: ["#", o] }),
            ],
          }),
          C
            ? null
            : y
            ? a("div", {
                className: s.error,
                children: [
                  a("span", { className: s.errorText, children: y }),
                  a("button", {
                    className: s.retryButton,
                    onClick: () => r(),
                    children: "Повторить",
                  }),
                ],
              })
            : p.length === 0
            ? a("div", {
                className: s.empty,
                children: a("span", {
                  className: s.emptyText,
                  children: "Нет постов с этим хештегом",
                }),
              })
            : a(V_1, {
                posts: p,
                renderPost: (t) => a(W, { post: t, onDelete: L }),
                hasMore: !!d,
                isLoadingMore: h,
                onLoadMore: v,
              }),
        ],
      })
    : a("div", {
        className: s.page,
        children: a("div", {
          className: s.error,
          children: a("span", {
            className: s.errorText,
            children: "Хештег не указан",
          }),
        }),
      });
};

export { Hashtag as Hashtag, Hashtag as default };
