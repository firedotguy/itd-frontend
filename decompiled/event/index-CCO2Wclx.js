import { af, ag, y, af as af_1, k } from "./index-BNG2MjJY.js";
const i = "pgOL";
const d = "Gdzn";
const p = "VM7c";
const h = "HNaj";
const n = { event: i, icon: d, title: p, description: h };

export const Event = (m) => {
  const r = af();

  const t = ag((s) => s.fetchPortal);

  y(() => {
    t();
  }, [t]);

  if (r.active && r.url) {
    window.open(r.url, "_blank", "noopener,noreferrer");
  }

  return af_1("div", {
    className: n.event,
    children:
      r.active && r.url
        ? af_1(k, {
            children: [
              af_1("span", { className: n.icon, children: "✨" }),
              af_1("h1", { className: n.title, children: "Ивент активен!" }),
              af_1("p", {
                className: n.description,
                children: [
                  "Ссылка должна была открыться в новой вкладке.",
                  " ",
                  af_1("a", {
                    href: r.url,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: "Открыть вручную",
                  }),
                ],
              }),
            ],
          })
        : af_1(k, {
            children: [
              af_1("span", { className: n.icon, children: "✨" }),
              af_1("h1", {
                className: n.title,
                children: "Нет активного ивента",
              }),
              af_1("p", {
                className: n.description,
                children:
                  "Сейчас нет активных ивентов. Следите за обновлениями!",
              }),
            ],
          }),
  });
};

export { Event as Event };
