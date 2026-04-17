import {
  A,
  T,
  a3 as K_1,
  a2,
  a3,
  a4,
  c,
  y,
  a5 as q_1,
  m,
  a,
  m as m_1,
  a5,
  W,
  a6,
  a7,
} from "./index-BNG2MjJY.js";

const j = "o62U";
const J = "wa1G";
const X = "IVKQ";
const Y = "goKu";
const Z = "HxL9";
const I = "M5lP";
const ee = "L9rs";
const te = "LFVo";
const oe = "PgmD";

const n = {
  postPage: j,
  pageHeader: J,
  pageTitle: X,
  postSection: Y,
  backButton: Z,
  post: I,
  commentsSection: ee,
  fixedInputWrapper: te,
  notFound: oe,
};

export function PostPage({ postId: t, comment: m }) {
  const C = A(null);

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
    currentPostError: k,
    fetchPost: f,
  } = K_1(
    a2((e) => ({
      currentPost: e.currentPost,
      currentPostError: e.currentPostError,
      fetchPost: e.fetchPost,
    }))
  );

  const {
    comments: c,
    commentsLoading: i,
    commentsLoadingMore: S,
    commentsHasMore: w,
    clearComments: v,
    fetchComments: l,
    loadMoreComments: y,
    toggleCommentLike: H,
    addComment: d,
    setHighlightedCommentId: p,
  } = a3(
    a2((e) => ({
      comments: e.comments,
      commentsLoading: e.commentsLoading,
      commentsLoadingMore: e.commentsLoadingMore,
      commentsHasMore: e.commentsHasMore,
      clearComments: e.clearComments,
      fetchComments: e.fetchComments,
      loadMoreComments: e.loadMoreComments,
      toggleCommentLike: e.toggleCommentLike,
      addComment: e.addComment,
      setHighlightedCommentId: e.setHighlightedCommentId,
    }))
  );

  if (t && C.current !== t) {
    C.current = t;
    v();
  }

  const { commentsSort: N, setCommentsSort: b } = a4(
    a2((e) => ({
      commentsSort: e.commentsSort,
      setCommentsSort: e.setCommentsSort,
    }))
  );

  const x = c((e) => e.profile?.id);

  const F = r?.wallOwnerId === x;

  y(() => {
    if (!s) {
      window.scrollTo(0, 0);
    }
  }, [t, s]);

  y(() => {
    if (!t) {
      return;
    }
    let e = false;

    (async () => {
      await f(t);
      return e || (await l(t));
    })();

    return () => {
      e = true;
    };
  }, [t, f, l]);

  y(() => {
    if (s && !i && c.length > 0) {
      p(s);
    }
  }, [s, i, c.length, p]);

  const A = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      m_1("/");
    }
  };

  const T = (e) => {
    b(e);

    if (t) {
      l(t);
    }
  };

  const V = () => {
    if (t && w && !S) {
      y(t);
    }
  };

  const W = (e) => {
    H(e);
  };

  const L = async (e) => {
    if (t) {
      await d(t, e);
    }
  };

  const P = q_1(
    async (e) => {
      if (t) {
        try {
          const a = `voice_${Date.now()}.webm`;
          const u = new File([e], a, { type: e.type || "audio/webm" });
          const D = await m.uploadMedia(u);
          await d(t, { text: "", attachments: [{ mediaId: D.id }] });
        } catch (a) {
          console.error("Failed to send voice message:", a);
        }
      }
    },
    [d, t]
  );

  return k
    ? a("div", {
        className: n.notFound,
        children: [
          a("h2", { children: "Пост не найден" }),
          a("button", {
            onClick: () => m_1("/"),
            children: "Вернуться на главную",
          }),
        ],
      })
    : r
    ? a("div", {
        className: n.postPage,
        children: [
          a("header", {
            className: n.pageHeader,
            children: [
              a("button", {
                className: n.backButton,
                onClick: A,
                children: a(a5, { size: 24 }),
              }),
              a("h1", { className: n.pageTitle, children: "Пост" }),
            ],
          }),
          a("div", {
            className: n.postSection,
            children: [
              a(W, { className: n.post, post: r, variant: "modal" }),
              a("div", {
                className: n.commentsSection,
                "data-comments-section": true,
                children: a(a6, {
                  comments: c,
                  isLoading: i,
                  isLoadingMore: S,
                  hasMore: w,
                  sort: N,
                  onSortChange: T,
                  onLikeComment: W,
                  onAddComment: L,
                  onVoiceSend: P,
                  onLoadMore: V,
                  isWallOwner: F,
                  variant: "page",
                  hideInput: true,
                }),
              }),
            ],
          }),
          a("div", {
            className: n.fixedInputWrapper,
            children: a(a7, {
              onSubmit: (e, a, u) => L({ text: e, spans: a, attachments: u }),
              onVoiceSend: P,
            }),
          }),
        ],
      })
    : null;
}

export { PostPage as PostPage, PostPage as default };
