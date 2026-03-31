import { T as T_1, u, $ } from "./index-BPAoISKs.js";
import { I } from "./IconChevronLeft-CGSManWK.js";
const N = "jRhSP5DY";
const f = "OhXMnVM0";
const w = "_12aBmgiN";
const k = "im68BWEY";
const B = "Kh7HZS-J";
const g = "_1dz9EYNw";
const v = "BmYWWTNc";
const x = "_13eNnYjo";
const b = "WvQXPD7m";
const L = "_08oLyt-m";
const U = "XyhsyoP8";
const S = "hzyTLVvC";
const C = "RD-FupFo";
const W = "SosS6GJL";
const T = "Mm5NzsGg";

const e = {
  page: N,
  backButton: f,
  iconWrapper: w,
  title: k,
  description: B,
  urlSection: g,
  sectionTitle: v,
  urlBox: x,
  domain: b,
  fullUrl: L,
  warningSection: U,
  warningList: S,
  actions: C,
  primaryButton: W,
  secondaryButton: T,
};

export function ExternalLink({ url: r }) {
  const t = T_1(() => {
    try {
      const l = new URLSearchParams(window.location.search).get("url") || r;
      if (!l) {
        return null;
      }
      const m = atob(l);

      const p = Uint8Array.from(m, (y) => y.charCodeAt(0));

      return new TextDecoder().decode(p);
    } catch {
      return null;
    }
  }, [r]);

  const { domain: i, fullUrl: h } = T_1(() => {
    if (!t) {
      return { domain: null, fullUrl: null };
    }
    try {
      const o = new URL(t);
      return o.protocol !== "http:" && o.protocol !== "https:"
        ? { domain: null, fullUrl: null }
        : { domain: o.hostname, fullUrl: t };
    } catch {
      return { domain: null, fullUrl: null };
    }
  }, [t]);

  const c = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      $("/");
    }
  };

  const u = () => {
    if (t) {
      window.location.href = t;
    }
  };

  return !t || !i
    ? u("div", {
        className: e.page,
        children: [
          u("button", {
            className: e.backButton,
            onClick: c,
            children: [u(I, { size: 20 }), u("span", { children: "Назад" })],
          }),
          u("div", {
            className: e.iconWrapper,
            children: u("svg", {
              width: "48",
              height: "48",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "1.5",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              children: [
                u("circle", { cx: "12", cy: "12", r: "10" }),
                u("line", { x1: "12", y1: "8", x2: "12", y2: "12" }),
                u("line", { x1: "12", y1: "16", x2: "12.01", y2: "16" }),
              ],
            }),
          }),
          u("h1", { className: e.title, children: "Неверная ссылка" }),
          u("p", {
            className: e.description,
            children:
              "Не удалось определить адрес для перехода. Возможно, ссылка была повреждена или устарела.",
          }),
          u("button", {
            className: e.primaryButton,
            onClick: () => $("/"),
            children: "На главную",
          }),
        ],
      })
    : u("div", {
        className: e.page,
        children: [
          u("button", {
            className: e.backButton,
            onClick: c,
            children: [u(I, { size: 20 }), u("span", { children: "Назад" })],
          }),
          u("div", {
            className: e.iconWrapper,
            children: u("svg", {
              width: "48",
              height: "48",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "1.5",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              children: [
                u("path", {
                  d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
                }),
                u("polyline", { points: "15 3 21 3 21 9" }),
                u("line", { x1: "10", y1: "14", x2: "21", y2: "3" }),
              ],
            }),
          }),
          u("h1", { className: e.title, children: "Переход на внешний сайт" }),
          u("p", {
            className: e.description,
            children:
              "Вы покидаете ИТД и переходите на внешний ресурс. Мы не можем гарантировать безопасность и содержимое этого сайта. Убедитесь, что доверяете этому ресурсу.",
          }),
          u("div", {
            className: e.urlSection,
            children: [
              u("h2", {
                className: e.sectionTitle,
                children: "Адрес назначения",
              }),
              u("div", {
                className: e.urlBox,
                children: [
                  u("span", { className: e.domain, children: i }),
                  u("span", { className: e.fullUrl, children: h }),
                ],
              }),
            ],
          }),
          u("div", {
            className: e.warningSection,
            children: [
              u("h2", {
                className: e.sectionTitle,
                children: "Обратите внимание",
              }),
              u("ul", {
                className: e.warningList,
                children: [
                  u("li", {
                    children:
                      "ИТД не несёт ответственности за содержимое внешних сайтов",
                  }),
                  u("li", {
                    children:
                      "Не вводите личные данные на подозрительных ресурсах",
                  }),
                  u("li", {
                    children: "Проверяйте адрес сайта перед вводом паролей",
                  }),
                ],
              }),
            ],
          }),
          u("div", {
            className: e.actions,
            children: [
              u("button", {
                className: e.primaryButton,
                onClick: u,
                children: ["Перейти на ", i],
              }),
              u("button", {
                className: e.secondaryButton,
                onClick: c,
                children: "Остаться на ИТД",
              }),
            ],
          }),
        ],
      });
}

export { ExternalLink as ExternalLink, ExternalLink as default };
