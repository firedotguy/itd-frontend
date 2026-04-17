import { a as a_1, a5, $ } from "./index-BNG2MjJY.js";
const a = "cGcV";
const n = "DGWC";
const o = "OLs3";
const r = "P8o5";
const h = "q5m5";
const d = "kYca";
const m = "lILV";
const N = "E1vl";
const p = "iWaR";
const u = "MszC";

const c = {
  legal: a,
  backButton: n,
  title: o,
  updated: r,
  section: h,
  sectionTitle: d,
  subsectionTitle: m,
  text: N,
  list: p,
  contact: u,
};

export function Support(k) {
  const l = () => {
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
        onClick: l,
        children: [a_1(a5, { size: 20 }), a_1("span", { children: "Назад" })],
      }),
      a_1("h1", { className: c.title, children: "Поддержка" }),
      a_1("p", { className: c.updated, children: "Приложение итд" }),
      a_1("section", {
        className: c.section,
        children: [
          a_1("h2", {
            className: c.sectionTitle,
            children: "Связаться с нами",
          }),
          a_1("p", {
            className: c.text,
            children:
              "Если у вас возникли вопросы по работе приложения, аккаунту, контенту или безопасности, свяжитесь с нами любым удобным способом:",
          }),
          a_1("ul", {
            className: c.list,
            children: [
              a_1("li", {
                children: [
                  "E-mail: ",
                  a_1("a", {
                    href: "mailto:nowkie.com@gmail.com",
                    className: c.contact,
                    children: "nowkie.com@gmail.com",
                  }),
                ],
              }),
              a_1("li", {
                children: [
                  "Сайт: ",
                  a_1("a", {
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
          a_1("p", {
            className: c.text,
            children: "Ответы на обращения предоставляются в разумный срок.",
          }),
        ],
      }),
      a_1("section", {
        className: c.section,
        children: [
          a_1("h2", { className: c.sectionTitle, children: "Частые вопросы" }),
          a_1("h3", {
            className: c.subsectionTitle,
            children: "Как восстановить доступ к аккаунту?",
          }),
          a_1("p", {
            className: c.text,
            children:
              "Воспользуйтесь функцией «Забыли пароль?» на экране входа. На вашу электронную почту будет отправлена ссылка для сброса пароля.",
          }),
          a_1("h3", {
            className: c.subsectionTitle,
            children: "Как удалить аккаунт?",
          }),
          a_1("p", {
            className: c.text,
            children:
              "Вы можете удалить аккаунт в настройках профиля. После удаления все ваши данные будут удалены в течение 30 дней.",
          }),
          a_1("h3", {
            className: c.subsectionTitle,
            children: "Как пожаловаться на контент?",
          }),
          a_1("p", {
            className: c.text,
            children:
              "Нажмите на меню поста или комментария и выберите «Пожаловаться». Мы рассмотрим жалобу и примем меры в случае нарушения правил.",
          }),
          a_1("h3", {
            className: c.subsectionTitle,
            children: "Как изменить имя пользователя?",
          }),
          a_1("p", {
            className: c.text,
            children:
              "Перейдите в настройки профиля и измените имя пользователя в соответствующем поле.",
          }),
        ],
      }),
      a_1("section", {
        className: c.section,
        children: [
          a_1("h2", { className: c.sectionTitle, children: "Дополнительно" }),
          a_1("p", {
            className: c.text,
            children:
              "По вопросам конфиденциальности и правил использования ознакомьтесь с соответствующими документами:",
          }),
          a_1("ul", {
            className: c.list,
            children: [
              a_1("li", {
                children: a_1("a", {
                  href: "/privacy",
                  className: c.contact,
                  onClick: (t) => {
                    t.preventDefault();
                    $("/privacy");
                  },
                  children: "Политика конфиденциальности",
                }),
              }),
              a_1("li", {
                children: a_1("a", {
                  href: "/terms",
                  className: c.contact,
                  onClick: (t) => {
                    t.preventDefault();
                    $("/terms");
                  },
                  children: "Пользовательское соглашение",
                }),
              }),
              a_1("li", {
                children: a_1("a", {
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
