import { ag, ah, y, u, k } from "./index-BPAoISKs.js";
const i = "_-7Xe-49W";
const d = "_07qFtRu2";
const h = "_6EaeVaVY";
const p = "WfOJ2SDV";
const n = { event: i, icon: d, title: h, description: p };

export const Event = (m) => {
  const r = ag();

  const t = ah((s) => s.fetchPortal);

  y(() => {
    t();
  }, [t]);

  if (r.active && r.url) {
    window.open(r.url, "_blank", "noopener,noreferrer");
  }

  return u("div", {
    className: n.event,
    children:
      r.active && r.url
        ? u(k, {
            children: [
              u("span", { className: n.icon, children: "✨" }),
              u("h1", { className: n.title, children: "Ивент активен!" }),
              u("p", {
                className: n.description,
                children: [
                  "Ссылка должна была открыться в новой вкладке.",
                  " ",
                  u("a", {
                    href: r.url,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: "Открыть вручную",
                  }),
                ],
              }),
            ],
          })
        : u(k, {
            children: [
              u("span", { className: n.icon, children: "✨" }),
              u("h1", {
                className: n.title,
                children: "Нет активного ивента",
              }),
              u("p", {
                className: n.description,
                children:
                  "Сейчас нет активных ивентов. Следите за обновлениями!",
              }),
            ],
          }),
  });
};

export { Event as Event };
