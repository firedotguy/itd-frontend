import { u as u_1, $ } from "./index-DOyq0flg.js";
import { I } from "./IconChevronLeft-D0jsyLIy.js";
const n = "a9LVpEPJ";
const a = "_4zyCFlti";
const o = "-lOPP2Ey";
const r = "mzHLDcSf";
const h = "_0mmsD7Vy";
const m = "SiBvpJUA";
const d = "WHQo01N1";
const N = "_1Lefc36J";
const p = "Bajolw1L";
const u = "FNZKdEbE";

const c = {
  legal: n,
  backButton: a,
  title: o,
  updated: r,
  section: h,
  sectionTitle: m,
  subsectionTitle: d,
  text: N,
  list: p,
  contact: u,
};

export function Support(f) {
  const s = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      $("/");
    }
  };
  return u_1("div", {
    className: c.legal,
    children: [
      u_1("button", {
        className: c.backButton,
        onClick: s,
        children: [u_1(I, { size: 20 }), u_1("span", { children: "Назад" })],
      }),
      u_1("h1", { className: c.title, children: "Поддержка" }),
      u_1("p", { className: c.updated, children: "Приложение итд" }),
      u_1("section", {
        className: c.section,
        children: [
          u_1("h2", {
            className: c.sectionTitle,
            children: "Связаться с нами",
          }),
          u_1("p", {
            className: c.text,
            children:
              "Если у вас возникли вопросы по работе приложения, аккаунту, контенту или безопасности, свяжитесь с нами любым удобным способом:",
          }),
          u_1("ul", {
            className: c.list,
            children: [
              u_1("li", {
                children: [
                  "E-mail: ",
                  u_1("a", {
                    href: "mailto:nowkie.com@gmail.com",
                    className: c.contact,
                    children: "nowkie.com@gmail.com",
                  }),
                ],
              }),
              u_1("li", {
                children: [
                  "Сайт: ",
                  u_1("a", {
                    href: "https://итд.com",
                    className: c.contact,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: "итд.com",
                  }),
                ],
              }),
            ],
          }),
          u_1("p", {
            className: c.text,
            children: "Ответы на обращения предоставляются в разумный срок.",
          }),
        ],
      }),
      u_1("section", {
        className: c.section,
        children: [
          u_1("h2", { className: c.sectionTitle, children: "Частые вопросы" }),
          u_1("h3", {
            className: c.subsectionTitle,
            children: "Как восстановить доступ к аккаунту?",
          }),
          u_1("p", {
            className: c.text,
            children:
              "Воспользуйтесь функцией «Забыли пароль?» на экране входа. На вашу электронную почту будет отправлена ссылка для сброса пароля.",
          }),
          u_1("h3", {
            className: c.subsectionTitle,
            children: "Как удалить аккаунт?",
          }),
          u_1("p", {
            className: c.text,
            children:
              "Вы можете удалить аккаунт в настройках профиля. После удаления все ваши данные будут удалены в течение 30 дней.",
          }),
          u_1("h3", {
            className: c.subsectionTitle,
            children: "Как пожаловаться на контент?",
          }),
          u_1("p", {
            className: c.text,
            children:
              "Нажмите на меню поста или комментария и выберите «Пожаловаться». Мы рассмотрим жалобу и примем меры в случае нарушения правил.",
          }),
          u_1("h3", {
            className: c.subsectionTitle,
            children: "Как изменить имя пользователя?",
          }),
          u_1("p", {
            className: c.text,
            children:
              "Перейдите в настройки профиля и измените имя пользователя в соответствующем поле.",
          }),
        ],
      }),
      u_1("section", {
        className: c.section,
        children: [
          u_1("h2", { className: c.sectionTitle, children: "Дополнительно" }),
          u_1("p", {
            className: c.text,
            children:
              "По вопросам конфиденциальности и правил использования ознакомьтесь с соответствующими документами:",
          }),
          u_1("ul", {
            className: c.list,
            children: [
              u_1("li", {
                children: u_1("a", {
                  href: "/privacy",
                  className: c.contact,
                  onClick: (t) => {
                    t.preventDefault();
                    $("/privacy");
                  },
                  children: "Политика конфиденциальности",
                }),
              }),
              u_1("li", {
                children: u_1("a", {
                  href: "/terms",
                  className: c.contact,
                  onClick: (t) => {
                    t.preventDefault();
                    $("/terms");
                  },
                  children: "Пользовательское соглашение",
                }),
              }),
              u_1("li", {
                children: u_1("a", {
                  href: "/cookies",
                  className: c.contact,
                  onClick: (t) => {
                    t.preventDefault();
                    $("/cookies");
                  },
                  children: "Политика использования cookies",
                }),
              }),
            ],
          }),
        ],
      }),
    ],
  });
}

export { Support as Support, Support as default };
