import { u } from "./index-BPAoISKs.js";
const s = "ueM92BcA";
const o = "t5k9LKZG";
const i = "_79QslgvH";
const e = { about: s, title: o, description: i };

export const About = (c) =>
  u("div", {
    className: e.about,
    children: [
      u("h1", { className: e.title, children: "About" }),
      u("p", {
        className: e.description,
        children: "This page demonstrates Preact Router navigation.",
      }),
    ],
  });

export { About as About };
