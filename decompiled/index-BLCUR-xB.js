import { u as u_1, B, $ } from "./index-BPAoISKs.js";
import { I } from "./IconChevronLeft-CGSManWK.js";
const s = "ep7kL5lZ";
const t = "JNmcBfAR";
const r = "KcF6M8d4";
const d = "KAUAnD6y";
const h = "qMwifCjn";
const o = "GICeXBxI";
const m = "I9h--iHM";
const N = "brQp2tnu";
const g = "SI6j5TjU";
const p = "_3ERUfuMB";
const u = "c9D2N-9G";
const y = "_8snvVCt4";
const T = "g-STQQ0A";
const v = "dJbtkWtv";
const f = "hETXfBt7";

const l = {
  legal: s,
  backButton: t,
  title: r,
  updated: d,
  vacancy: h,
  vacancyHeader: o,
  vacancyTitle: m,
  vacancyBadge: N,
  section: g,
  sectionTitle: p,
  text: u,
  list: y,
  tagList: T,
  tag: v,
  applyLink: f,
};

export function Careers(B) {
  const i = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      $("/");
    }
  };
  return u_1("div", {
    className: l.legal,
    children: [
      u_1("button", {
        className: l.backButton,
        onClick: i,
        children: [u_1(I, { size: 20 }), u_1("span", { children: "Назад" })],
      }),
      u_1("h1", { className: l.title, children: "Вакансии" }),
      u_1("p", {
        className: l.updated,
        children: "Мы ищем тех, кто хочет строить продукт с нуля",
      }),
      u_1("div", {
        className: l.vacancy,
        children: [
          u_1("div", {
            className: l.vacancyHeader,
            children: [
              u_1("h2", {
                className: l.vacancyTitle,
                children:
                  "Fullstack-разработчик React, Node.js/TypeScript (Bun)",
              }),
              u_1("span", { className: l.vacancyBadge, children: "Удалённо" }),
            ],
          }),
          u_1("p", {
            className: l.text,
            children:
              "ИТД — активно развивающаяся социальная сеть. Мы строим платформу с нуля, используем современный стек и не боимся нестандартных решений.",
          }),
          u_1("section", {
            className: l.section,
            children: [
              u_1("h3", { className: l.sectionTitle, children: "Стек" }),
              u_1("ul", {
                className: l.tagList,
                children: [
                  u_1("li", { className: l.tag, children: "React" }),
                  u_1("li", { className: l.tag, children: "TypeScript" }),
                  u_1("li", { className: l.tag, children: "Zustand" }),
                  u_1("li", { className: l.tag, children: "Bun" }),
                  u_1("li", { className: l.tag, children: "ElysiaJS" }),
                  u_1("li", { className: l.tag, children: "Drizzle ORM" }),
                  u_1("li", { className: l.tag, children: "PostgreSQL" }),
                  u_1("li", { className: l.tag, children: "Redis" }),
                  u_1("li", { className: l.tag, children: "ClickHouse" }),
                  u_1("li", { className: l.tag, children: "Docker" }),
                  u_1("li", { className: l.tag, children: "Kubernetes" }),
                ],
              }),
            ],
          }),
          u_1("section", {
            className: l.section,
            children: [
              u_1("h3", {
                className: l.sectionTitle,
                children: "Что предстоит делать",
              }),
              u_1("ul", {
                className: l.list,
                children: [
                  u_1("li", {
                    children:
                      "Разрабатывать фичи целиком — от UI до схемы данных",
                  }),
                  u_1("li", {
                    children:
                      "Проектировать React-компоненты с фокусом на производительность: мемоизация, code splitting, профилирование ререндеров",
                  }),
                  u_1("li", {
                    children:
                      "Проектировать API на ElysiaJS: эндпоинты, валидация, обработка ошибок",
                  }),
                  u_1("li", {
                    children:
                      "Проектировать схемы PostgreSQL: нормализация, индексы, миграции через Drizzle",
                  }),
                  u_1("li", {
                    children:
                      "Реализовывать real-time функциональность: события, уведомления, онлайн-статусы",
                  }),
                  u_1("li", {
                    children:
                      "Настраивать кэширование и rate-limiting на Redis",
                  }),
                  u_1("li", {
                    children:
                      "Оптимизировать узкие места на фронте и бэке под растущую нагрузку",
                  }),
                  u_1("li", {
                    children:
                      "Участвовать в код-ревью и архитектурных решениях",
                  }),
                ],
              }),
            ],
          }),
          u_1("section", {
            className: l.section,
            children: [
              u_1("h3", { className: l.sectionTitle, children: "Требования" }),
              u_1("ul", {
                className: l.list,
                children: [
                  u_1("li", {
                    children: [
                      u_1("strong", { children: "React:" }),
                      " хуки, мемоизация, понимание жизненного цикла рендеринга. Опыт с Zustand или аналогичным стейт-менеджером",
                    ],
                  }),
                  u_1("li", {
                    children: [
                      u_1("strong", { children: "Оптимизация фронтенда:" }),
                      " устранение лишних ререндеров, React DevTools Profiler, code splitting, lazy loading",
                    ],
                  }),
                  u_1("li", {
                    children: [
                      u_1("strong", { children: "Node.js/TypeScript:" }),
                      " уверенная серверная разработка. Опыт с Bun — плюс",
                    ],
                  }),
                  u_1("li", {
                    children: [
                      u_1("strong", { children: "PostgreSQL:" }),
                      " проектирование схем, эффективные запросы, индексы, транзакции, миграции",
                    ],
                  }),
                  u_1("li", {
                    children: [
                      u_1("strong", { children: "Redis:" }),
                      " кэш с инвалидацией, TTL, счётчики, rate-limit",
                    ],
                  }),
                  u_1("li", {
                    children: [
                      u_1("strong", { children: "Продовая зрелость:" }),
                      " умение дебажить прод, довести задачу до релиза — логи, метрики, понятные ошибки",
                    ],
                  }),
                  u_1("li", {
                    children: [
                      u_1("strong", { children: "Качество кода:" }),
                      " читаемость, тесты там, где они действительно нужны",
                    ],
                  }),
                ],
              }),
            ],
          }),
          u_1("section", {
            className: l.section,
            children: [
              u_1("h3", {
                className: l.sectionTitle,
                children: "Будет полезно",
              }),
              u_1("ul", {
                className: l.list,
                children: [
                  u_1("li", {
                    children: "Опыт highload и оптимизации узких мест",
                  }),
                  u_1("li", { children: "WebRTC: ICE candidates, STUN/TURN" }),
                  u_1("li", {
                    children:
                      "Мобильная разработка: Swift (iOS) / Kotlin (Android)",
                  }),
                  u_1("li", { children: "Kubernetes" }),
                  u_1("li", {
                    children:
                      "Использование ИИ-инструментов (Claude Code / Gemini / аналоги) как ускоритель разработки",
                  }),
                ],
              }),
            ],
          }),
          u_1("section", {
            className: l.section,
            children: [
              u_1("h3", { className: l.sectionTitle, children: "Условия" }),
              u_1("ul", {
                className: l.list,
                children: [
                  u_1("li", { children: "Удалённый формат" }),
                  u_1("li", {
                    children:
                      "Гибкий процесс и влияние на архитектуру и продуктовые решения",
                  }),
                  u_1("li", {
                    children:
                      "Оплата: проектная за конкретные фичи/задачи, либо фикс по уровню + бонусы за результат — обсуждаем индивидуально",
                  }),
                  u_1("li", {
                    children:
                      "Пересмотр условий по итогам испытательного периода и далее регулярно",
                  }),
                ],
              }),
            ],
          }),
          u_1("section", {
            className: l.section,
            children: [
              u_1("h3", {
                className: l.sectionTitle,
                children: "Преимущества работы с нами",
              }),
              u_1("ul", {
                className: l.list,
                children: [
                  u_1("li", {
                    children:
                      "Реальные инженерные задачи: real-time, производительность, устойчивость продакшена",
                  }),
                  u_1("li", {
                    children:
                      "Короткие циклы: понятные задачи, минимум митингов, максимум результата",
                  }),
                  u_1("li", {
                    children:
                      "Гибкость по графику и объёму: full-time, part-time или проектное сотрудничество",
                  }),
                ],
              }),
            ],
          }),
          u_1("a", {
            href: "https://forms.gle/ESK7qvJhFFf7sbzb8",
            target: "_blank",
            rel: "noopener noreferrer",
            className: l.applyLink,
            children: u_1(B, {
              variant: "primary",
              size: "lg",
              children: "Откликнуться",
            }),
          }),
        ],
      }),
    ],
  });
}

export { Careers as Careers, Careers as default };
