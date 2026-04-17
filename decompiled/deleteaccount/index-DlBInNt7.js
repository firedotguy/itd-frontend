import { a as c_1, d, a, a5, B as B_1, $ } from "./index-BNG2MjJY.js";
const f = "Vpma";
const p = "hS7L";
const k = "DJsW";
const g = "bCVe";
const v = "RQC6";
const w = "hz9N";
const x = "uHCo";
const B = "riJf";
const T = "O89X";
const A = "XJJr";
const C = "LQJh";
const b = "DAPr";
const y = "Je1w";
const J = "cLPw";

const e = {
  legal: f,
  backButton: p,
  title: k,
  updated: g,
  section: v,
  sectionTitle: w,
  text: x,
  list: B,
  contact: T,
  actions: A,
  confirmBlock: C,
  confirmText: b,
  confirmActions: y,
  error: J,
};

export function DeleteAccount(D) {
  const a = c_1((h) => h.deleteAccount);

  const [i, n] = d("info");
  const [s, l] = d(null);

  const r = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      $("/");
    }
  };

  const d = async () => {
    n("deleting");
    l(null);
    try {
      await a();
    } catch {
      l("Не удалось удалить аккаунт. Попробуйте позже.");
      n("confirm");
    }
  };

  return a("div", {
    className: e.legal,
    children: [
      a("button", {
        className: e.backButton,
        onClick: r,
        children: [a(a5, { size: 20 }), a("span", { children: "Назад" })],
      }),
      a("h1", { className: e.title, children: "Удаление аккаунта" }),
      a("p", { className: e.updated, children: "Приложение ИТД" }),
      a("section", {
        className: e.section,
        children: [
          a("h2", {
            className: e.sectionTitle,
            children: "Какие данные будут удалены",
          }),
          a("ul", {
            className: e.list,
            children: [
              a("li", { children: "Профиль (имя, аватар, описание)" }),
              a("li", { children: "Публикации и комментарии" }),
              a("li", { children: "Подписки и подписчики" }),
              a("li", { children: "Уведомления" }),
              a("li", { children: "Загруженные файлы и медиа" }),
            ],
          }),
        ],
      }),
      a("section", {
        className: e.section,
        children: [
          a("h2", {
            className: e.sectionTitle,
            children: "Что может сохраняться",
          }),
          a("p", {
            className: e.text,
            children:
              "Некоторые данные могут быть сохранены в анонимизированном виде в соответствии с требованиями законодательства, безопасности или для предотвращения нарушений.",
          }),
        ],
      }),
      a("section", {
        className: e.section,
        children: [
          a("h2", { className: e.sectionTitle, children: "Восстановление" }),
          a("p", {
            className: e.text,
            children:
              "После удаления у вас будет 30 дней на восстановление аккаунта. Для этого просто войдите в приложение в течение этого периода. По истечении 30 дней аккаунт и данные будут удалены безвозвратно.",
          }),
        ],
      }),
      a("section", {
        className: e.section,
        children: [
          a("h2", { className: e.sectionTitle, children: "Связаться с нами" }),
          a("p", {
            className: e.text,
            children: [
              "Если у вас возникли вопросы, свяжитесь с нами:",
              " ",
              a("a", {
                href: "mailto:nowkie.com@gmail.com",
                className: e.contact,
                children: "nowkie.com@gmail.com",
              }),
            ],
          }),
        ],
      }),
      i === "info" &&
        a("div", {
          className: e.actions,
          children: a(B_1, {
            variant: "danger",
            onClick: () => n("confirm"),
            children: "Удалить аккаунт",
          }),
        }),
      i === "confirm" &&
        a("div", {
          className: e.confirmBlock,
          children: [
            a("p", {
              className: e.confirmText,
              children:
                "Вы действительно хотите удалить аккаунт? У вас будет 30 дней на восстановление аккаунта, если вы передумаете.",
            }),
            s && a("p", { className: e.error, children: s }),
            a("div", {
              className: e.confirmActions,
              children: [
                a(B_1, {
                  variant: "secondary",
                  onClick: () => n("info"),
                  children: "Отмена",
                }),
                a(B_1, {
                  variant: "danger",
                  onClick: d,
                  children: "Удалить аккаунт",
                }),
              ],
            }),
          ],
        }),
      i === "deleting" &&
        a("div", {
          className: e.actions,
          children: a(B_1, {
            variant: "danger",
            disabled: true,
            loading: true,
            children: "Удаление...",
          }),
        }),
    ],
  });
}

export { DeleteAccount as DeleteAccount, DeleteAccount as default };
