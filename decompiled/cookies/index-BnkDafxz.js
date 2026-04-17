import { a as a_1, a5, $ } from "./index-BNG2MjJY.js";
const t = "hr37";
const o = "M9As";
const n = "SP5D";
const a = "F6TN";
const h = "I36f";
const r = "gZuW";
const d = "HChG";
const m = "cJnf";
const N = "iFFu";

const c = {
  legal: t,
  backButton: o,
  title: n,
  updated: a,
  section: h,
  sectionTitle: r,
  text: d,
  list: m,
  contact: N,
};

export function Cookies(k) {
  const i = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      $("/");
    }
  };
  return a_1("div", {
    className: c.legal,
    children: [
      a_1("button", {
        className: c.backButton,
        onClick: i,
        children: [a_1(a5, { size: 20 }), a_1("span", { children: "Назад" })],
      }),
      a_1("h1", { className: c.title, children: "Политика cookies" }),
      a_1("p", {
        className: c.updated,
        children: "Последнее обновление: 5 февраля 2025",
      }),
      a_1("section", {
        className: c.section,
        children: [
          a_1("h2", {
            className: c.sectionTitle,
            children: "Какие cookies мы используем",
          }),
          a_1("p", {
            className: c.text,
            children:
              "Мы используем только технические cookies, необходимые для работы сайта — чтобы вы оставались авторизованы. Без них вход в аккаунт невозможен.",
          }),
          a_1("p", {
            className: c.text,
            children: "Мы не используем рекламные или аналитические cookies.",
          }),
        ],
      }),
      a_1("section", {
        className: c.section,
        children: [
          a_1("h2", {
            className: c.sectionTitle,
            children: "Как управлять cookies",
          }),
          a_1("p", {
            className: c.text,
            children:
              "Вы можете удалить или заблокировать cookies в настройках браузера:",
          }),
          a_1("ul", {
            className: c.list,
            children: [
              a_1("li", {
                children:
                  "Chrome: Настройки → Конфиденциальность и безопасность → Файлы cookie",
              }),
              a_1("li", {
                children:
                  "Firefox: Настройки → Приватность и Защита → Куки и данные сайтов",
              }),
              a_1("li", {
                children:
                  "Safari: Настройки → Конфиденциальность → Управление данными веб-сайтов",
              }),
            ],
          }),
          a_1("p", {
            className: c.text,
            children:
              "Если заблокируете все cookies — не сможете войти в аккаунт. Просто предупреждаем.",
          }),
        ],
      }),
      a_1("section", {
        className: c.section,
        children: [
          a_1("h2", {
            className: c.sectionTitle,
            children: "Что мы НЕ делаем",
          }),
          a_1("ul", {
            className: c.list,
            children: [
              a_1("li", { children: "Не используем рекламные cookies" }),
              a_1("li", { children: "Не отслеживаем вас на других сайтах" }),
              a_1("li", {
                children: "Не передаём данные cookies третьим лицам",
              }),
              a_1("li", {
                children: "Не используем cookies для профилирования",
              }),
            ],
          }),
        ],
      }),
      a_1("section", {
        className: c.section,
        children: [
          a_1("h2", { className: c.sectionTitle, children: "Вопросы" }),
          a_1("p", {
            className: c.text,
            children: [
              "Что-то непонятно? Пишите на ",
              a_1("a", {
                href: "mailto:nowkie.com@gmail.com",
                className: c.contact,
                children: "nowkie.com@gmail.com",
              }),
            ],
          }),
        ],
      }),
    ],
  });
}

export { Cookies as Cookies, Cookies as default };
