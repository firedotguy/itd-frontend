import {
  A,
  T,
  u as o_1,
  N,
  T as T_1,
  b,
  q_1 as y_1,
  I_1 as q_1,
  m,
  u,
  o_1_1 as $_1,
  E,
  o_1 as o_1_1,
  W,
} from "./index-d9k9JBOp.js";

import { I as I_1 } from "./IconChevronLeft-DkZkOYu3.js";
const J = "NCJMh6VC";
const Z = "Q1CXQizH";
const K = "lp5GRZTP";
const I = "jnSbHonP";
const ee = "nDnu9hhf";
const te = "s32UFpYS";
const oe = "_1w3Yc5mB";
const ne = "aX-yM5Hy";
const ae = "lGzPgBLd";

const a = {
  postPage: J,
  pageHeader: Z,
  pageTitle: K,
  postSection: I,
  backButton: ee,
  post: te,
  commentsSection: oe,
  fixedInputWrapper: ne,
  notFound: ae,
};

export function PostPage({ postId: t, comment: c }) {
  const f = A(null);

  const m = T(
    () =>
      c ||
      new URLSearchParams(window.location.search).get("comment") ||
      new URLSearchParams(window.location.search).get("comment") ||
      undefined,
    [c]
  );

  const {
    currentPost: r,
    currentPostError: N,
    comments: i,
    commentsLoading: l,
    commentsLoadingMore: S,
    commentsHasMore: p,
    fetchPost: w,
    clearComments: b,
    fetchComments: d,
    loadMoreComments: k,
    toggleCommentReaction: h,
    addComment: u,
    setHighlightedCommentId: P,
  } = o_1(
    N((e) => ({
      currentPost: e.currentPost,
      currentPostError: e.currentPostError,
      comments: e.comments,
      commentsLoading: e.commentsLoading,
      commentsLoadingMore: e.commentsLoadingMore,
      commentsHasMore: e.commentsHasMore,
      fetchPost: e.fetchPost,
      clearComments: e.clearComments,
      fetchComments: e.fetchComments,
      loadMoreComments: e.loadMoreComments,
      toggleCommentReaction: e.toggleCommentReaction,
      addComment: e.addComment,
      setHighlightedCommentId: e.setHighlightedCommentId,
    }))
  );

  if (t && f.current !== t) {
    f.current = t;
    b();
  }

  const { commentsSort: R, setCommentsSort: F } = T_1(
    N((e) => ({
      commentsSort: e.commentsSort,
      setCommentsSort: e.setCommentsSort,
    }))
  );

  const T = b((e) => e.profile?.id);

  const A = r?.wallOwnerId === T;

  y_1(() => {
    if (!m) {
      window.scrollTo(0, 0);
    }
  }, [t, m]);

  y_1(() => {
    if (!t) {
      return;
    }
    let e = false;

    (async () => {
      await w(t);
      return e || (await d(t));
    })();

    return () => {
      e = true;
    };
  }, [t, w, d]);

  y_1(() => {
    if (m && !l && i.length > 0) {
      P(m);
    }
  }, [m, l, i.length, P]);

  const B = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      $_1("/");
    }
  };

  const W = (e) => {
    F(e);

    if (t) {
      d(t);
    }
  };

  const x = () => {
    if (t && p && !S) {
      k(t);
    }
  };

  const z = (e, n) => {
    h(e, n ?? "love");
  };

  const D = q_1(
    (e, n) => {
      h(e, n);
    },
    [h]
  );

  const M = async (e, n, s, g, E, U) => {
    if (t) {
      await u(t, e, n, s, U, g, E);
    }
  };

  const v = q_1(
    async (e) => {
      if (t) {
        try {
          const n = `voice_${Date.now()}.webm`;
          const s = new File([e], n, { type: e.type || "audio/webm" });
          const g = await m.uploadMedia(s);
          await u(t, "", [], undefined, [{ mediaId: g.id }]);
        } catch (n) {
          console.error("Failed to send voice message:", n);
        }
      }
    },
    [u, t]
  );

  return N
    ? u("div", {
        className: a.notFound,
        children: [
          u("h2", { children: "Пост не найден" }),
          u("button", {
            onClick: () => $_1("/"),
            children: "Вернуться на главную",
          }),
        ],
      })
    : r
    ? u("div", {
        className: a.postPage,
        children: [
          u("header", {
            className: a.pageHeader,
            children: [
              u("button", {
                className: a.backButton,
                onClick: B,
                children: u(I_1, { size: 24 }),
              }),
              u("h1", { className: a.pageTitle, children: "Пост" }),
            ],
          }),
          u("div", {
            className: a.postSection,
            children: [
              u(E, { className: a.post, post: r, variant: "modal" }),
              u("div", {
                className: a.commentsSection,
                "data-comments-section": true,
                children: u(o_1_1, {
                  comments: i,
                  isLoading: l,
                  isLoadingMore: S,
                  hasMore: p,
                  sort: R,
                  onSortChange: W,
                  onLikeComment: z,
                  onReactionComment: D,
                  onAddComment: M,
                  onVoiceSend: v,
                  onLoadMore: x,
                  isWallOwner: A,
                  variant: "page",
                  hideInput: true,
                }),
              }),
            ],
          }),
          u("div", {
            className: a.fixedInputWrapper,
            children: u(W, {
              onSubmit: (e, n, s) =>
                M(e, n, undefined, undefined, undefined, s),
              onVoiceSend: v,
            }),
          }),
        ],
      })
    : null;
}

export { PostPage as PostPage, PostPage as default };
