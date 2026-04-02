import { u, $ } from "./index-BPAoISKs.js";
import { I } from "./IconChevronLeft-CGSManWK.js";
const n = "e6b7JrxV";
const t = "JNWH2vsk";
const a = "k6BkwqXE";
const h = "FGQ5zIEx";
const r = "nqaHjNJ5";
const o = "_4FBE2s54";
const d = "zzFNsVno";
const m = "DjbU5Ucp";
const N = "-rq5oxJZ";
const p = "GRR8M36w";

const l = {
  legal: n,
  backButton: t,
  title: a,
  updated: h,
  section: r,
  sectionTitle: o,
  subsectionTitle: d,
  text: m,
  list: N,
  contact: p,
};

export function Privacy(u) {
  const c = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      $("/");
    }
  };
  return u("div", {
    className: l.legal,
    children: [
      u("button", {
        className: l.backButton,
        onClick: c,
        children: [u(I, { size: 20 }), u("span", { children: "Назад" })],
      }),
      u("h1", { className: l.title, children: "Политика конфиденциальности" }),
      u("p", {
        className: l.updated,
        children: "Последнее обновление: 16 декабря 2025",
      }),
      u("section", {
        className: l.section,
        children: [
          u("h2", {
            className: l.sectionTitle,
            children: "1. Общие положения",
          }),
          u("p", {
            className: l.text,
            children:
              "Настоящая Политика конфиденциальности определяет порядок обработки и защиты персональных данных пользователей сервиса итд.",
          }),
          u("p", {
            className: l.text,
            children: [
              "Оператором персональных данных является:",
              u("br", {}),
              "Общество с ограниченной ответственностью «НОУКИ»",
              u("br", {}),
              "ИНН: 9729409454",
              u("br", {}),
              "ОГРН: 1257700460434",
              u("br", {}),
              "Юридический адрес: 119361, г. Москва, вн.тер. г. Муниципальный Округ Очаково-Матвеевское, пер. 1-Й Очаковский, дом 10, помещение 7/3",
            ],
          }),
          u("p", {
            className: l.text,
            children:
              "Используя сервис итд, пользователь подтверждает согласие с настоящей Политикой конфиденциальности.",
          }),
        ],
      }),
      u("section", {
        className: l.section,
        children: [
          u("h2", {
            className: l.sectionTitle,
            children: "2. Правовые основания обработки персональных данных",
          }),
          u("p", {
            className: l.text,
            children:
              "Обработка персональных данных осуществляется на основании:",
          }),
          u("ul", {
            className: l.list,
            children: [
              u("li", {
                children:
                  "согласия субъекта персональных данных (ст. 6 ч.1 п.1 152-ФЗ);",
              }),
              u("li", {
                children:
                  "необходимости исполнения Пользовательского соглашения, стороной которого является пользователь (ст. 6 ч.1 п.5 152-ФЗ).",
              }),
            ],
          }),
        ],
      }),
      u("section", {
        className: l.section,
        children: [
          u("h2", {
            className: l.sectionTitle,
            children: "3. Какие персональные данные мы обрабатываем",
          }),
          u("h3", {
            className: l.subsectionTitle,
            children: "3.1. Данные, предоставляемые пользователем",
          }),
          u("ul", {
            className: l.list,
            children: [
              u("li", { children: "адрес электронной почты;" }),
              u("li", { children: "пароль (в зашифрованном виде);" }),
              u("li", { children: "имя пользователя и информация профиля;" }),
              u("li", {
                children:
                  "контент, публикуемый пользователем (посты, комментарии, изображения);",
              }),
              u("li", {
                children: "голосовые сообщения, размещаемые в комментариях.",
              }),
            ],
          }),
          u("h3", {
            className: l.subsectionTitle,
            children: "3.2. Данные, собираемые автоматически",
          }),
          u("ul", {
            className: l.list,
            children: [
              u("li", {
                children:
                  "IP-адрес — для безопасности и предотвращения злоупотреблений",
              }),
              u("li", {
                children: "Cookies — для авторизации и запоминания настроек",
              }),
              u("li", {
                children:
                  "Данные устройства — тип браузера, ОС (для корректного отображения)",
              }),
              u("li", {
                children:
                  "Действия в сервисе — лайки, просмотры, подписки (для работы ленты)",
              }),
            ],
          }),
        ],
      }),
      u("section", {
        className: l.section,
        children: [
          u("h2", {
            className: l.sectionTitle,
            children: "4. Цели обработки персональных данных",
          }),
          u("p", {
            className: l.text,
            children: "Персональные данные обрабатываются в следующих целях:",
          }),
          u("ul", {
            className: l.list,
            children: [
              u("li", { children: "регистрация и авторизация пользователей;" }),
              u("li", { children: "обеспечение функционирования сервиса;" }),
              u("li", { children: "отображение пользовательского контента;" }),
              u("li", {
                children: "защита сервиса от злоупотреблений и нарушений;",
              }),
              u("li", { children: "улучшение качества работы сервиса." }),
            ],
          }),
        ],
      }),
      u("section", {
        className: l.section,
        children: [
          u("h2", {
            className: l.sectionTitle,
            children: "5. Публичность пользовательского контента",
          }),
          u("p", {
            className: l.text,
            children:
              "5.1. Пользователь осознаёт и соглашается с тем, что контент, размещаемый им в сервисе итд, может быть доступен другим пользователям сервиса и в сети Интернет в рамках функционала платформы.",
          }),
          u("p", {
            className: l.text,
            children:
              "5.2. Пользователь самостоятельно определяет объём персональных данных, размещаемых им в публичном доступе.",
          }),
        ],
      }),
      u("section", {
        className: l.section,
        children: [
          u("h2", {
            className: l.sectionTitle,
            children: "6. Передача персональных данных третьим лицам",
          }),
          u("p", {
            className: l.text,
            children:
              "Оператор не передаёт персональные данные третьим лицам, за исключением следующих случаев:",
          }),
          u("ul", {
            className: l.list,
            children: [
              u("li", {
                children:
                  "если это требуется законодательством Российской Федерации;",
              }),
              u("li", {
                children:
                  "для защиты прав и законных интересов оператора или пользователей.",
              }),
            ],
          }),
          u("p", {
            className: l.text,
            children:
              "Персональные данные не продаются и не передаются рекламодателям.",
          }),
        ],
      }),
      u("section", {
        className: l.section,
        children: [
          u("h2", {
            className: l.sectionTitle,
            children: "7. Хранение персональных данных",
          }),
          u("ul", {
            className: l.list,
            children: [
              u("li", {
                children:
                  "7.1. Персональные данные пользователей хранятся на серверах, расположенных на территории Российской Федерации.",
              }),
              u("li", {
                children:
                  "7.2. Персональные данные хранятся в течение срока существования аккаунта пользователя.",
              }),
              u("li", {
                children:
                  "7.3. После удаления аккаунта персональные данные удаляются или обезличиваются в течение 30 календарных дней, если иное не требуется законодательством РФ.",
              }),
            ],
          }),
        ],
      }),
      u("section", {
        className: l.section,
        children: [
          u("h2", {
            className: l.sectionTitle,
            children: "8. Защита персональных данных",
          }),
          u("p", {
            className: l.text,
            children:
              "Оператор принимает необходимые организационные и технические меры для защиты персональных данных от неправомерного доступа, утраты, изменения или распространения, включая:",
          }),
          u("ul", {
            className: l.list,
            children: [
              u("li", {
                children: "использование шифрования для защиты паролей;",
              }),
              u("li", {
                children: "ограничение доступа к персональным данным;",
              }),
              u("li", {
                children: "контроль доступа к информационным системам.",
              }),
            ],
          }),
        ],
      }),
      u("section", {
        className: l.section,
        children: [
          u("h2", {
            className: l.sectionTitle,
            children: "9. Права пользователя",
          }),
          u("p", { className: l.text, children: "Пользователь имеет право:" }),
          u("ul", {
            className: l.list,
            children: [
              u("li", {
                children: "получать информацию о своих персональных данных;",
              }),
              u("li", {
                children: "изменять или дополнять персональные данные;",
              }),
              u("li", { children: "удалить аккаунт и персональные данные;" }),
              u("li", {
                children: "запросить копию обрабатываемых персональных данных.",
              }),
            ],
          }),
          u("p", {
            className: l.text,
            children: [
              "Для реализации своих прав пользователь может обратиться по адресу: ",
              u("a", {
                href: "mailto:nowkie.com@gmail.com",
                className: l.contact,
                children: "nowkie.com@gmail.com",
              }),
            ],
          }),
        ],
      }),
      u("section", {
        className: l.section,
        children: [
          u("h2", { className: l.sectionTitle, children: "10. Дети" }),
          u("p", {
            className: l.text,
            children:
              "Сервис итд не предназначен для использования лицами младше 13 лет. Если оператору станет известно, что персональные данные были получены от лица младше 13 лет, аккаунт будет удалён.",
          }),
        ],
      }),
      u("section", {
        className: l.section,
        children: [
          u("h2", {
            className: l.sectionTitle,
            children: "11. Изменение политики",
          }),
          u("p", {
            className: l.text,
            children:
              "Оператор вправе вносить изменения в настоящую Политику конфиденциальности. Актуальная версия всегда доступна на сайте. Продолжение использования сервиса означает согласие пользователя с обновлённой редакцией.",
          }),
        ],
      }),
      u("section", {
        className: l.section,
        children: [
          u("h2", {
            className: l.sectionTitle,
            children: "12. Контактная информация",
          }),
          u("p", {
            className: l.text,
            children: [
              "По всем вопросам, связанным с обработкой персональных данных, можно обращаться по адресу: ",
              u("a", {
                href: "mailto:nowkie.com@gmail.com",
                className: l.contact,
                children: "nowkie.com@gmail.com",
              }),
            ],
          }),
        ],
      }),
    ],
  });
}

export { Privacy as Privacy, Privacy as default };
