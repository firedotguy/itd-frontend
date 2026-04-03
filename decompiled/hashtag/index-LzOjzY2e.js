import {
  d,
  o,
  y,
  q as q_1,
  n,
  q_1 as q_1_1,
  V,
  E as E_1,
  $,
} from "./index-d9k9JBOp.js";
import { I } from "./IconChevronLeft-DkZkOYu3.js";
const U = "Ga794i-w";
const q = "u4c1nCmS";
const A = "iXnARpJB";
const D = "w7fKo2N4";
const E = "v83B8fyc";
const F = "_2Kaw4uM3";
const H = "u5iqJjma";
const K = "NyWI14sR";
const S = "Jlu-sI5I";

const s = {
  page: U,
  header: q,
  backButton: A,
  hashtagName: D,
  empty: E,
  emptyText: F,
  error: H,
  errorText: K,
  retryButton: S,
};

export const Hashtag = ({ name: p }) => {
  const [f, i] = d([]);
  const [v, y] = d(true);
  const [g, N] = d(null);
  const [d, w] = d(null);
  const [h, x] = d(false);
  const o = p ? decodeURIComponent(p) : "";

  const m = o((t) => t._lastReactionUpdate);

  y(() => {
    if (!m) {
      return;
    }
    const { postId: t, myReaction: a, totalDelta: n } = m;
    i((I) =>
      I.map((c) =>
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
  const r = q_1(
    async (t) => {
      if (o) {
        try {
          if (t) {
            x(true);
          } else {
            y(true);
            N(null);
          }

          const a = await n.getPostsByHashtag(o, { limit: 20, cursor: t });

          i(t ? (n) => [...n, ...a.data] : a.data);

          w(a.nextCursor);
        } catch (a) {
          console.error("Failed to fetch hashtag posts:", a);

          if (!t) {
            N("Не удалось загрузить посты");
          }
        } finally {
          y(false);
          x(false);
        }
      }
    },
    [o]
  );
  y(() => {
    r();
  }, [r]);

  const C = q_1(() => {
    if (d && !h) {
      r(d);
    }
  }, [d, h, r]);

  const M = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      $("/search");
    }
  };

  const k = q_1((t) => {
    i((a) => a.filter((n) => n.id !== t));
  }, []);

  return o
    ? q_1_1("div", {
        className: s.page,
        children: [
          q_1_1("div", {
            className: s.header,
            children: [
              q_1_1("button", {
                className: s.backButton,
                onClick: M,
                children: [q_1_1(I, { size: 18 }), "Назад"],
              }),
              q_1_1("h1", { className: s.hashtagName, children: ["#", o] }),
            ],
          }),
          v
            ? null
            : g
            ? q_1_1("div", {
                className: s.error,
                children: [
                  q_1_1("span", { className: s.errorText, children: g }),
                  q_1_1("button", {
                    className: s.retryButton,
                    onClick: () => r(),
                    children: "Повторить",
                  }),
                ],
              })
            : f.length === 0
            ? q_1_1("div", {
                className: s.empty,
                children: q_1_1("span", {
                  className: s.emptyText,
                  children: "Нет постов с этим хештегом",
                }),
              })
            : q_1_1(V, {
                posts: f,
                renderPost: (t) => q_1_1(E_1, { post: t, onDelete: k }),
                hasMore: !!d,
                isLoadingMore: h,
                onLoadMore: C,
              }),
        ],
      })
    : q_1_1("div", {
        className: s.page,
        children: q_1_1("div", {
          className: s.error,
          children: q_1_1("span", {
            className: s.errorText,
            children: "Хештег не указан",
          }),
        }),
      });
};

export { Hashtag as Hashtag, Hashtag as default };
