import { a_1 as e_1, c, K, a as a_1, Q, M } from "./index-BNG2MjJY.js";
const C = "cQeg";
const S = "ZF9t";
const a = { createPostModal: C, title: S };
function b({ wallOwnerId: r, placeholder: l, onPostCreated: c }) {
  const { closeModal: s } = e_1();

  const o = c((t) => t.profile);

  const n = K((t) => t.createPost);

  const i = async (t, u, d, m) => {
    if (!o) {
      return;
    }
    const M = r ?? o.id;
    await n({ wallOwnerId: M, text: t, spans: u, attachments: d, poll: m });
    await c?.();
    s();
  };

  return a_1(M, {
    frameless: true,
    onClose: s,
    className: a.createPostModal,
    children: [
      a_1("h2", { className: a.title, children: "Создать пост" }),
      a_1(Q, { onSubmit: i, autoFocus: true, placeholder: l }),
    ],
  });
}
export { b as C };
