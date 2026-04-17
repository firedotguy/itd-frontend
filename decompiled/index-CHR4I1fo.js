import { a, C, ak } from "./index-BNG2MjJY.js";

export const I = () =>
  a("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    fill: "none",
    children: a("path", {
      fill: "currentColor",
      "fill-rule": "evenodd",
      d: "M20.689 10.968a2.806 2.806 0 0 0-2.244-1.108H5.555c-.887 0-1.705.404-2.244 1.107a2.808 2.808 0 0 0-.485 2.455l1.65 6.112a2.83 2.83 0 0 0 2.729 2.09h9.589a2.832 2.832 0 0 0 2.729-2.09l1.65-6.111a2.804 2.804 0 0 0-.484-2.455ZM8.436 3.875h7.125a.75.75 0 0 0 0-1.5H8.436a.75.75 0 0 0 0 1.5ZM5.682 7.253h12.634a.75.75 0 0 0 0-1.5H5.682a.75.75 0 0 0 0 1.5Z",
      "clip-rule": "evenodd",
    }),
  });

function o(l) {
  const a = C()[0];
  return l.children({
    url: a.url,
    path: a.path,
    matches: ak(a.path || a.url, l.path, {}) !== false,
  });
}
export { I as I, o as l };
