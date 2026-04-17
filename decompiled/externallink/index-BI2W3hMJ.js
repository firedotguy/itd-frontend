import { a5 as a_1, T as T_1, a5, ae, $ } from "./index-BNG2MjJY.js";

const w = ({ size: t = 48 }) =>
  a_1("svg", {
    width: t,
    height: t,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: [
      a_1("path", {
        d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
      }),
      a_1("polyline", { points: "15 3 21 3 21 9" }),
      a_1("line", { x1: "10", y1: "14", x2: "21", y2: "3" }),
    ],
  });

const y = "CJqB";
const k = "Nsrn";
const B = "g0Oe";
const g = "ggnV";
const b = "Ilyv";
const v = "Zjpr";
const U = "kfHA";
const x = "zHOR";
const L = "P6ms";
const C = "Qc6r";
const S = "cFFd";
const T = "bwpG";
const I = "u2Bm";
const W = "Tob5";
const z = "v87I";

const e = {
  page: y,
  backButton: k,
  iconWrapper: B,
  title: g,
  description: b,
  urlSection: v,
  sectionTitle: U,
  urlBox: x,
  domain: L,
  fullUrl: C,
  warningSection: S,
  warningList: T,
  actions: I,
  primaryButton: W,
  secondaryButton: z,
};

export function ExternalLink({ url: t }) {
  const c = T_1(() => {
    try {
      const i = new URLSearchParams(window.location.search).get("url") || t;
      if (!i) {
        return null;
      }
      const m = atob(i);

      const p = Uint8Array.from(m, (f) => f.charCodeAt(0));

      return new TextDecoder().decode(p);
    } catch {
      return null;
    }
  }, [t]);

  const { domain: o, fullUrl: u } = T_1(() => {
    if (!c) {
      return { domain: null, fullUrl: null };
    }
    try {
      const l = new URL(c);
      return l.protocol !== "http:" && l.protocol !== "https:"
        ? { domain: null, fullUrl: null }
        : { domain: l.hostname, fullUrl: c };
    } catch {
      return { domain: null, fullUrl: null };
    }
  }, [c]);

  const r = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      $("/");
    }
  };

  const h = () => {
    if (c) {
      window.location.href = c;
    }
  };

  return !c || !o
    ? a_1("div", {
        className: e.page,
        children: [
          a_1("button", {
            className: e.backButton,
            onClick: r,
            children: [
              a_1(a5, { size: 20 }),
              a_1("span", { children: "Назад" }),
            ],
          }),
          a_1("div", {
            className: e.iconWrapper,
            children: a_1(ae, { size: 48 }),
          }),
          a_1("h1", { className: e.title, children: "Неверная ссылка" }),
          a_1("p", {
            className: e.description,
            children:
              "Не удалось определить адрес для перехода. Возможно, ссылка была повреждена или устарела.",
          }),
          a_1("button", {
            className: e.primaryButton,
            onClick: () => $("/"),
            children: "На главную",
          }),
        ],
      })
    : a_1("div", {
        className: e.page,
        children: [
          a_1("button", {
            className: e.backButton,
            onClick: r,
            children: [
              a_1(a5, { size: 20 }),
              a_1("span", { children: "Назад" }),
            ],
          }),
          a_1("div", {
            className: e.iconWrapper,
            children: a_1(w, { size: 48 }),
          }),
          a_1("h1", {
            className: e.title,
            children: "Переход на внешний сайт",
          }),
          a_1("p", {
            className: e.description,
            children:
              "Вы покидаете ИТД и переходите на внешний ресурс. Мы не можем гарантировать безопасность и содержимое этого сайта. Убедитесь, что доверяете этому ресурсу.",
          }),
          a_1("div", {
            className: e.urlSection,
            children: [
              a_1("h2", {
                className: e.sectionTitle,
                children: "Адрес назначения",
              }),
              a_1("div", {
                className: e.urlBox,
                children: [
                  a_1("span", { className: e.domain, children: o }),
                  a_1("span", { className: e.fullUrl, children: u }),
                ],
              }),
            ],
          }),
          a_1("div", {
            className: e.warningSection,
            children: [
              a_1("h2", {
                className: e.sectionTitle,
                children: "Обратите внимание",
              }),
              a_1("ul", {
                className: e.warningList,
                children: [
                  a_1("li", {
                    children:
                      "ИТД не несёт ответственности за содержимое внешних сайтов",
                  }),
                  a_1("li", {
                    children:
                      "Не вводите личные данные на подозрительных ресурсах",
                  }),
                  a_1("li", {
                    children: "Проверяйте адрес сайта перед вводом паролей",
                  }),
                ],
              }),
            ],
          }),
          a_1("div", {
            className: e.actions,
            children: [
              a_1("button", {
                className: e.primaryButton,
                onClick: h,
                children: ["Перейти на ", o],
              }),
              a_1("button", {
                className: e.secondaryButton,
                onClick: r,
                children: "Остаться на ИТД",
              }),
            ],
          }),
        ],
      });
}

export { ExternalLink as ExternalLink, ExternalLink as default };
