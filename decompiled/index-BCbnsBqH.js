import { a as a_1, b, o, u, o as o_1, M } from "./index-d9k9JBOp.js";
const p = "GcSCKwwz";
const w = "zBZFa-2a";
const a = { createPostModal: p, title: w };
function F({ wallOwnerId: r, placeholder: l, onPostCreated: c }) {
  const { closeModal: o } = a_1();

  const s = b((t) => t.profile);

  const n = o((t) => t.createPost);

  const i = async (t, u, d, m) => {
    if (!s) {
      return;
    }
    const M = r ?? s.id;
    await n(M, t, u, d, m);
    await c?.();
    o();
  };

  return u(M, {
    frameless: true,
    onClose: o,
    className: a.createPostModal,
    children: [
      u("h2", { className: a.title, children: "Создать пост" }),
      u(o_1, { onSubmit: i, autoFocus: true, placeholder: l }),
    ],
  });
}
export { F as o };
