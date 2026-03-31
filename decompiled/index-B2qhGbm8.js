import {
  A,
  T,
  q_1 as H_1,
  a4,
  a5,
  b,
  $_1 as y_1,
  I_1 as q_1,
  r,
  u,
  a6 as $_1,
  T as T_1,
  a6,
  a7,
} from "./index-BPAoISKs.js";

import { I as I_1 } from "./IconChevronLeft-CGSManWK.js";
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

export function PostPage({ postId: t, comment: m }) {
  const f = A(null);

  const s = T(
    () =>
      m ||
      new URLSearchParams(window.location.search).get("comment") ||
      new URLSearchParams(window.location.search).get("comment") ||
      undefined,
    [m]
  );

  const {
    currentPost: r,
    currentPostError: b,
    comments: i,
    commentsLoading: l,
    commentsLoadingMore: S,
    commentsHasMore: p,
    fetchPost: w,
    clearComments: N,
    fetchComments: d,
    loadMoreComments: k,
    toggleCommentReaction: h,
    addComment: u,
    setHighlightedCommentId: P,
  } = H_1(
    a4((e) => ({
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
    N();
  }

  const { commentsSort: R, setCommentsSort: F } = a5(
    a4((e) => ({
      commentsSort: e.commentsSort,
      setCommentsSort: e.setCommentsSort,
    }))
  );

  const T = b((e) => e.profile?.id);

  const A = r?.wallOwnerId === T;

  y_1(() => {
    if (!s) {
      window.scrollTo(0, 0);
    }
  }, [t, s]);

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
    if (s && !l && i.length > 0) {
      P(s);
    }
  }, [s, l, i.length, P]);

  const B = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      $_1("/");
    }
  };

  const x = (e) => {
    F(e);

    if (t) {
      d(t);
    }
  };

  const z = () => {
    if (t && p && !S) {
      k(t);
    }
  };

  const D = (e, n) => {
    h(e, n ?? "love");
  };

  const U = q_1(
    (e, n) => {
      h(e, n);
    },
    [h]
  );

  const M = async (e, n, c, g, V, W) => {
    if (t) {
      await u(t, e, n, c, W, g, V);
    }
  };

  const v = q_1(
    async (e) => {
      if (t) {
        try {
          const n = `voice_${Date.now()}.webm`;
          const c = new File([e], n, { type: e.type || "audio/webm" });
          const g = await r.uploadMedia(c);
          await u(t, "", [], undefined, [{ mediaId: g.id }]);
        } catch (n) {
          console.error("Failed to send voice message:", n);
        }
      }
    },
    [u, t]
  );

  return b
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
              u(T_1, { className: a.post, post: r, variant: "modal" }),
              u("div", {
                className: a.commentsSection,
                "data-comments-section": true,
                children: u(a6, {
                  comments: i,
                  isLoading: l,
                  isLoadingMore: S,
                  hasMore: p,
                  sort: R,
                  onSortChange: x,
                  onLikeComment: D,
                  onReactionComment: U,
                  onAddComment: M,
                  onVoiceSend: v,
                  onLoadMore: z,
                  isWallOwner: A,
                  variant: "page",
                  hideInput: true,
                }),
              }),
            ],
          }),
          u("div", {
            className: a.fixedInputWrapper,
            children: u(a7, {
              onSubmit: (e, n, c) =>
                M(e, n, undefined, undefined, undefined, c),
              onVoiceSend: v,
            }),
          }),
        ],
      })
    : null;
}

export { PostPage as PostPage, PostPage as default };
