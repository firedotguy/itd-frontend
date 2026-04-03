import {
  b as b_1,
  d,
  DeleteAccount_1 as u_1,
  B as B_1,
  $,
} from "./index-Bi0Sh8eD.js";
import { DeleteAccount as DeleteAccount_1 } from "./IconChevronLeft-C4YP5sax.js";
const N = "M2rKTk0Q";
const p = "ZKUdcypt";
const k = "iALLzpmi";
const A = "qomClx-n";
const g = "AIM-4-3n";
const v = "OpLhkOWK";
const B = "mK45ZH-W";
const T = "C44MTjUB";
const x = "m1n6vd-q";
const y = "QiGVZpyY";
const b = "yop1-990";
const w = "WJ-AYWel";
const C = "ir7f4AiB";
const K = "qF2AuaKA";

const e = {
  legal: N,
  backButton: p,
  title: k,
  updated: A,
  section: g,
  sectionTitle: v,
  text: B,
  list: T,
  contact: x,
  actions: y,
  confirmBlock: b,
  confirmText: w,
  confirmActions: C,
  error: K,
};

export function DeleteAccount(L) {
  const a = b_1((m) => m.deleteAccount);

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

  return u_1("div", {
    className: e.legal,
    children: [
      u_1("button", {
        className: e.backButton,
        onClick: r,
        children: [
          u_1(DeleteAccount_1, { size: 20 }),
          u_1("span", { children: "Назад" }),
        ],
      }),
      u_1("h1", { className: e.title, children: "Удаление аккаунта" }),
      u_1("p", { className: e.updated, children: "Приложение ИТД" }),
      u_1("section", {
        className: e.section,
        children: [
          u_1("h2", {
            className: e.sectionTitle,
            children: "Какие данные будут удалены",
          }),
          u_1("ul", {
            className: e.list,
            children: [
              u_1("li", { children: "Профиль (имя, аватар, описание)" }),
              u_1("li", { children: "Публикации и комментарии" }),
              u_1("li", { children: "Подписки и подписчики" }),
              u_1("li", { children: "Уведомления" }),
              u_1("li", { children: "Загруженные файлы и медиа" }),
            ],
          }),
        ],
      }),
      u_1("section", {
        className: e.section,
        children: [
          u_1("h2", {
            className: e.sectionTitle,
            children: "Что может сохраняться",
          }),
          u_1("p", {
            className: e.text,
            children:
              "Некоторые данные могут быть сохранены в анонимизированном виде в соответствии с требованиями законодательства, безопасности или для предотвращения нарушений.",
          }),
        ],
      }),
      u_1("section", {
        className: e.section,
        children: [
          u_1("h2", { className: e.sectionTitle, children: "Восстановление" }),
          u_1("p", {
            className: e.text,
            children:
              "После удаления у вас будет 30 дней на восстановление аккаунта. Для этого просто войдите в приложение в течение этого периода. По истечении 30 дней аккаунт и данные будут удалены безвозвратно.",
          }),
        ],
      }),
      u_1("section", {
        className: e.section,
        children: [
          u_1("h2", {
            className: e.sectionTitle,
            children: "Связаться с нами",
          }),
          u_1("p", {
            className: e.text,
            children: [
              "Если у вас возникли вопросы, свяжитесь с нами:",
              " ",
              u_1("a", {
                href: "mailto:nowkie.com@gmail.com",
                className: e.contact,
                children: "nowkie.com@gmail.com",
              }),
            ],
          }),
        ],
      }),
      i === "info" &&
        u_1("div", {
          className: e.actions,
          children: u_1(B_1, {
            variant: "danger",
            onClick: () => n("confirm"),
            children: "Удалить аккаунт",
          }),
        }),
      i === "confirm" &&
        u_1("div", {
          className: e.confirmBlock,
          children: [
            u_1("p", {
              className: e.confirmText,
              children:
                "Вы действительно хотите удалить аккаунт? У вас будет 30 дней на восстановление аккаунта, если вы передумаете.",
            }),
            s && u_1("p", { className: e.error, children: s }),
            u_1("div", {
              className: e.confirmActions,
              children: [
                u_1(B_1, {
                  variant: "secondary",
                  onClick: () => n("info"),
                  children: "Отмена",
                }),
                u_1(B_1, {
                  variant: "danger",
                  onClick: d,
                  children: "Удалить аккаунт",
                }),
              ],
            }),
          ],
        }),
      i === "deleting" &&
        u_1("div", {
          className: e.actions,
          children: u_1(B_1, {
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
