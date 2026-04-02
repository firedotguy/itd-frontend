import { u } from "./index-BPAoISKs.js";
const t = "_8p-mcWuM";
const c = "icLk-jCA";
const e = "oy1QaXhw";
const s = "VwhfL5yz";
const o = { notFound: t, title: c, description: e, link: s };

export const NotFound = (i) =>
  u("div", {
    className: o.notFound,
    children: [
      u("h1", { className: o.title, children: "404" }),
      u("p", { className: o.description, children: "Page not found" }),
      u("a", { href: "/", className: o.link, children: "Go back home" }),
    ],
  });

export { NotFound as NotFound };
