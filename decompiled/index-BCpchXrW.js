import { u, $ } from "./index-l7r8kpkZ.js";
import { I } from "./IconChevronLeft-D2h5ggw0.js";
const t = "QWIbnX00";
const o = "_6SuIJlBk";
const n = "RmmBDdJi";
const a = "Vsw0yLAw";
const r = "IQ-KXCU-";
const h = "i8hF8rs5";
const d = "qcj6WjRb";
const m = "rv7jpclC";
const k = "ws0CaSF2";

const c = {
  legal: t,
  backButton: o,
  title: n,
  updated: a,
  section: r,
  sectionTitle: h,
  text: d,
  list: m,
  contact: k,
};

export function Cookies(N) {
  const i = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      $("/");
    }
  };
  return u("div", {
    className: c.legal,
    children: [
      u("button", {
        className: c.backButton,
        onClick: i,
        children: [u(I, { size: 20 }), u("span", { children: "Назад" })],
      }),
      u("h1", { className: c.title, children: "Политика cookies" }),
      u("p", {
        className: c.updated,
        children: "Последнее обновление: 5 февраля 2025",
      }),
      u("section", {
        className: c.section,
        children: [
          u("h2", {
            className: c.sectionTitle,
            children: "Какие cookies мы используем",
          }),
          u("p", {
            className: c.text,
            children:
              "Мы используем только технические cookies, необходимые для работы сайта — чтобы вы оставались авторизованы. Без них вход в аккаунт невозможен.",
          }),
          u("p", {
            className: c.text,
            children: "Мы не используем рекламные или аналитические cookies.",
          }),
        ],
      }),
      u("section", {
        className: c.section,
        children: [
          u("h2", {
            className: c.sectionTitle,
            children: "Как управлять cookies",
          }),
          u("p", {
            className: c.text,
            children:
              "Вы можете удалить или заблокировать cookies в настройках браузера:",
          }),
          u("ul", {
            className: c.list,
            children: [
              u("li", {
                children:
                  "Chrome: Настройки → Конфиденциальность и безопасность → Файлы cookie",
              }),
              u("li", {
                children:
                  "Firefox: Настройки → Приватность и Защита → Куки и данные сайтов",
              }),
              u("li", {
                children:
                  "Safari: Настройки → Конфиденциальность → Управление данными веб-сайтов",
              }),
            ],
          }),
          u("p", {
            className: c.text,
            children:
              "Если заблокируете все cookies — не сможете войти в аккаунт. Просто предупреждаем.",
          }),
        ],
      }),
      u("section", {
        className: c.section,
        children: [
          u("h2", { className: c.sectionTitle, children: "Что мы НЕ делаем" }),
          u("ul", {
            className: c.list,
            children: [
              u("li", { children: "Не используем рекламные cookies" }),
              u("li", { children: "Не отслеживаем вас на других сайтах" }),
              u("li", { children: "Не передаём данные cookies третьим лицам" }),
              u("li", { children: "Не используем cookies для профилирования" }),
            ],
          }),
        ],
      }),
      u("section", {
        className: c.section,
        children: [
          u("h2", { className: c.sectionTitle, children: "Вопросы" }),
          u("p", {
            className: c.text,
            children: [
              "Что-то непонятно? Пишите на ",
              u("a", {
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
