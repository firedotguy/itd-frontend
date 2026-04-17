import { a as a_1, a5, $ } from "./index-BNG2MjJY.js";
const n = "Cw3x";
const a = "bI00";
const o = "Cak0";
const r = "VcHi";
const h = "vxOV";
const d = "onBh";
const m = "cgfx";
const N = "zrqj";
const p = "CyzP";
const u = "v5BI";

const c = {
  legal: n,
  backButton: a,
  title: o,
  updated: r,
  section: h,
  sectionTitle: d,
  subsectionTitle: m,
  text: N,
  list: p,
  contact: u,
};

export function ChildSafety(f) {
  const s = () => {
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
        onClick: s,
        children: [a_1(a5, { size: 20 }), a_1("span", { children: "Назад" })],
      }),
      a_1("h1", {
        className: c.title,
        children: "Стандарты безопасности детей",
      }),
      a_1("p", {
        className: c.updated,
        children: "Последнее обновление: 8 марта 2026",
      }),
      a_1("section", {
        className: c.section,
        children: [
          a_1("h2", { className: c.sectionTitle, children: "Наша позиция" }),
          a_1("p", {
            className: c.text,
            children:
              "ИТД придерживается политики абсолютной нетерпимости к сексуальному насилию над детьми и их эксплуатации (CSAE). Мы запрещаем любой контент, который изображает, поощряет или способствует сексуальной эксплуатации или насилию в отношении несовершеннолетних, включая, но не ограничиваясь:",
          }),
          a_1("ul", {
            className: c.list,
            children: [
              a_1("li", {
                children:
                  "Материалы сексуального насилия над детьми (CSAM) в любой форме",
              }),
              a_1("li", { children: "Сексуализацию несовершеннолетних" }),
              a_1("li", {
                children:
                  "Груминг — установление доверительного контакта с несовершеннолетними в целях эксплуатации",
              }),
              a_1("li", {
                children:
                  "Секс-торговлю и торговлю людьми с участием несовершеннолетних",
              }),
              a_1("li", {
                children:
                  "Любые призывы, инструкции или рекомендации, связанные с эксплуатацией детей",
              }),
            ],
          }),
        ],
      }),
      a_1("section", {
        className: c.section,
        children: [
          a_1("h2", {
            className: c.sectionTitle,
            children: "Меры по обеспечению безопасности",
          }),
          a_1("p", {
            className: c.text,
            children:
              "Мы применяем следующие меры для защиты несовершеннолетних на платформе:",
          }),
          a_1("ul", {
            className: c.list,
            children: [
              a_1("li", {
                children:
                  "Модерация контента — публикации и комментарии проверяются на наличие запрещённого контента",
              }),
              a_1("li", {
                children:
                  "Система жалоб — любой пользователь может пожаловаться на контент или аккаунт, нарушающий правила безопасности детей",
              }),
              a_1("li", {
                children:
                  "Блокировка аккаунтов — аккаунты, нарушающие данные стандарты, немедленно блокируются без возможности восстановления",
              }),
              a_1("li", {
                children:
                  "Сотрудничество с правоохранительными органами — мы передаём информацию о выявленных нарушениях в соответствующие органы в соответствии с действующим законодательством",
              }),
            ],
          }),
        ],
      }),
      a_1("section", {
        className: c.section,
        children: [
          a_1("h2", {
            className: c.sectionTitle,
            children: "Как сообщить о нарушении",
          }),
          a_1("p", {
            className: c.text,
            children:
              "Если вы обнаружили контент, связанный с сексуальной эксплуатацией или насилием над детьми, немедленно сообщите об этом:",
          }),
          a_1("h3", { className: c.subsectionTitle, children: "В приложении" }),
          a_1("p", {
            className: c.text,
            children:
              "Нажмите на меню публикации или профиля и выберите «Пожаловаться». Выберите категорию, связанную с безопасностью детей. Жалобы данной категории рассматриваются в приоритетном порядке.",
          }),
          a_1("h3", {
            className: c.subsectionTitle,
            children: "По электронной почте",
          }),
          a_1("p", {
            className: c.text,
            children: [
              "Отправьте сообщение на адрес ",
              a_1("a", {
                href: "mailto:nowkie.com@gmail.com",
                className: c.contact,
                children: "nowkie.com@gmail.com",
              }),
              " с темой «Безопасность детей». Укажите ссылку на контент или имя пользователя, а также описание нарушения.",
            ],
          }),
        ],
      }),
      a_1("section", {
        className: c.section,
        children: [
          a_1("h2", {
            className: c.sectionTitle,
            children: "Обязательства перед законодательством",
          }),
          a_1("p", {
            className: c.text,
            children:
              "Приложение ИТД соответствует действующему законодательству Российской Федерации и международным стандартам в отношении безопасности детей. Мы обязуемся:",
          }),
          a_1("ul", {
            className: c.list,
            children: [
              a_1("li", {
                children:
                  "Удалять любой незаконный контент, связанный с эксплуатацией несовершеннолетних, незамедлительно после обнаружения",
              }),
              a_1("li", {
                children:
                  "Сообщать о выявленных нарушениях в региональные и национальные правоохранительные органы",
              }),
              a_1("li", {
                children:
                  "Сохранять необходимые данные для содействия расследованиям в соответствии с требованиями закона",
              }),
              a_1("li", {
                children:
                  "Регулярно пересматривать и обновлять наши стандарты безопасности",
              }),
            ],
          }),
        ],
      }),
      a_1("section", {
        className: c.section,
        children: [
          a_1("h2", {
            className: c.sectionTitle,
            children: "Контактная информация",
          }),
          a_1("p", {
            className: c.text,
            children:
              "По вопросам, связанным с безопасностью детей на платформе ИТД:",
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
        ],
      }),
      a_1("section", {
        className: c.section,
        children: [
          a_1("h2", { className: c.sectionTitle, children: "Дополнительно" }),
          a_1("ul", {
            className: c.list,
            children: [
              a_1("li", {
                children: a_1("a", {
                  href: "/terms",
                  className: c.contact,
                  onClick: (l) => {
                    l.preventDefault();
                    $("/terms");
                  },
                  children: "Пользовательское соглашение",
                }),
              }),
              a_1("li", {
                children: a_1("a", {
                  href: "/privacy",
                  className: c.contact,
                  onClick: (l) => {
                    l.preventDefault();
                    $("/privacy");
                  },
                  children: "Политика конфиденциальности",
                }),
              }),
              a_1("li", {
                children: a_1("a", {
                  href: "/support",
                  className: c.contact,
                  onClick: (l) => {
                    l.preventDefault();
                    $("/support");
                  },
                  children: "Поддержка",
                }),
              }),
            ],
          }),
        ],
      }),
    ],
  });
}

export { ChildSafety as ChildSafety, ChildSafety as default };
