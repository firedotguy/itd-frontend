import {
  a6,
  a7,
  u,
  v,
  d as d_1,
  a4,
  u as u_1,
  M as M_1,
  ae as ae_1,
  af,
  t,
} from "./index-DOyq0flg.js";

const y = {
  async getStatus() {
    return a6.get(a7.subscription.status);
  },
  async pay() {
    return a6.post(a7.subscription.pay);
  },
  async setAutoRenewal(n) {
    return a6.post(a7.subscription.autoRenewal, { enabled: n });
  },
  async bindCard() {
    return a6.post(a7.subscription.bindCard);
  },
  async getMethods() {
    return (await a6.get(a7.subscription.methods)).data;
  },
  async setDefaultMethod(n) {
    return a6.put(a7.subscription.methodDefault(n));
  },
  async deleteMethod(n) {
    return a6.delete(a7.subscription.methodDelete(n));
  },
};

const ae = ({ size: n = 24 }) =>
  u("svg", {
    width: n,
    height: n,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      u("path", {
        d: "M9 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H9",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
      u("path", {
        d: "M16 17L21 12L16 7",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
      u("path", {
        d: "M21 12H9",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
    ],
  });

const L = ({ size: n = 24 }) =>
  u("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: n,
    height: n,
    viewBox: "0 0 24 24",
    fill: "none",
    children: [
      u("path", {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M10.84 10.355a6.684 6.684 0 0 1 7.462-1.374c.158.071.331-.078.268-.24a8.109 8.109 0 0 0-1.825-2.773 8.175 8.175 0 0 0-5.837-2.429A8.175 8.175 0 0 0 5.07 5.968a8.338 8.338 0 0 0-1.66 9.34c.162.394.297.74.297 1.047 0 .326-.135.72-.26 1.094-.23.663-.46 1.354.02 1.844.49.49 1.18.25 1.843.019.374-.135.758-.26 1.075-.26.307 0 .653.135 1.047.289.958.45 2.123.793 3.22.786.176 0 .24-.222.108-.339-2.656-2.359-2.297-7.039.08-9.433Z",
        clipRule: "evenodd",
      }),
      u("path", {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M20.34 17.93c0-.154.064-.324.164-.576a5.052 5.052 0 0 0-1.002-5.662 4.959 4.959 0 0 0-3.537-1.469 4.958 4.958 0 0 0-3.537 1.47 5.034 5.034 0 0 0 0 7.095A5.011 5.011 0 0 0 18.06 19.8c.229-.093.426-.173.586-.173.178.001.397.077.61.15.406.14.866.299 1.196-.033.33-.332.174-.791.036-1.197-.073-.215-.149-.436-.149-.617Z",
        clipRule: "evenodd",
      }),
    ],
  });

const C = ({ size: n = 24 }) =>
  u("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: n,
    height: n,
    viewBox: "0 0 24 24",
    fill: "none",
    children: u("path", {
      fill: "currentColor",
      "fill-rule": "evenodd",
      d: "M8.078 10.367c0-.01.006-.019.006-.029V5.636a3.46 3.46 0 0 0 1.257.526.749.749 0 1 0 .299-1.469c-1.135-.23-1.589-1.333-1.606-1.375a.75.75 0 0 0-1.45.269v4.3a2.873 2.873 0 0 0-1.418-.384 2.92 2.92 0 0 0-2.916 2.918 2.92 2.92 0 0 0 2.916 2.916 2.92 2.92 0 0 0 2.917-2.916c0-.019-.005-.035-.005-.054ZM21.75 6.503a.749.749 0 0 0-1.067-.68c-2.557 1.189-5.245 1.683-7.982 1.469a.752.752 0 0 0-.568.196.752.752 0 0 0-.24.55v7.697a2.866 2.866 0 0 0-1.402-.377 2.907 2.907 0 0 0-2.903 2.904 2.906 2.906 0 0 0 2.903 2.903 2.906 2.906 0 0 0 2.903-2.903v-6.925c.183.007.368.023.552.023 2.151 0 4.26-.427 6.303-1.228V14.2a2.87 2.87 0 0 0-1.403-.377 2.906 2.906 0 0 0-2.903 2.903 2.906 2.906 0 0 0 2.903 2.903 2.906 2.906 0 0 0 2.903-2.903V6.502Z",
      "clip-rule": "evenodd",
    }),
  });

const M = ({ size: n = 20 }) =>
  u("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: n,
    height: n,
    viewBox: "0 0 20 20",
    fill: "none",
    children: u("path", {
      fill: "currentColor",
      d: "M9.905 2.501c2.422 0 4.113 1.669 4.113 4.06v6.88c0 2.39-1.69 4.06-4.113 4.06H4.113c-2.422 0-4.113-1.67-4.113-4.06V6.56c0-2.391 1.691-4.06 4.113-4.06zm8.053 2.379c.439-.223.954-.2 1.373.064.419.263.669.72.669 1.22v7.675a1.43 1.43 0 0 1-1.412 1.436c-.215 0-.43-.05-.631-.153l-1.481-.748a1.62 1.62 0 0 1-.888-1.457V7.085c0-.621.34-1.18.888-1.456z",
    }),
  });

const x = "uX6mG52K";
const B = "u5FjrrfL";
const I = "Z9f7Q3jS";
const R = "L-43NjOb";
const S = "E60wxVvR";
const T = "_0dqhEKnD";
const G = "c-uIo5yi";
const D = "cB-8IXk5";
const P = "aUamxQ7e";
const A = "ObQk27rJ";
const _ = "ovunVXLq";
const V = "ohs8Npaw";
const j = "_0K-Z1eD9";
const H = "JMg1QWQj";
const Z = "_9DD7EG-T";
const $ = "R0v2YBUB";
const U = "kM0p8-Sv";
const X = "GWzRyPXS";
const O = "PURIUyt6";
const z = "oTS4L6S0";
const K = "hgcZGLcX";
const Q = "FCPywiPM";
const W = "ynvn-v5t";
const E = "rost2Xx2";
const q = "mAyptXfj";
const J = "IJ-MKy8P";
const F = "av5HkGSu";
const Y = "-TUw-Z3K";
const ee = "eLLh95k2";
const se = "wc3kGqhz";

const s = {
  modal: x,
  sub: B,
  title: I,
  section: R,
  profileSection: S,
  label: T,
  labelRow: G,
  dim: D,
  row: P,
  icon: A,
  iconGradient: _,
  name: V,
  nameGradient: j,
  namePinBadge: H,
  plans: Z,
  planOption: $,
  selected: U,
  radio: X,
  radioDot: O,
  features: z,
  featureContent: K,
  featureTitle: Q,
  gradientText: W,
  soon: E,
  infoBtn: q,
  footer: J,
  disclaimer: F,
  disclaimerLink: Y,
  subscribeBtn: ee,
  activeLabel: se,
};

function d({ text: n }) {
  return u(af, {
    text: n,
    multiline: true,
    children: u("span", {
      className: s.infoBtn,
      children: u(ae_1, { size: 14 }),
    }),
  });
}
function ie({ isOpen: n, onClose: h }) {
  const c = v();
  const [r, l] = d_1(false);
  if (!n) {
    return null;
  }
  const m = c?.subscription?.isActive ?? false;
  const u = "199";

  const p = async () => {
    if (!r) {
      l(true);
      try {
        const t = await y.pay();
        if (t.error) {
          t.error(t.error);
          return;
        }

        if (t.confirmationUrl) {
          window.open(t.confirmationUrl, "_blank");
        }
      } catch (t) {
        t.error(t?.message || "Ошибка при создании платежа");
      } finally {
        l(false);
      }
    }
  };

  return a4(
    u(M_1, {
      onClose: h,
      showHeader: false,
      frameless: true,
      className: s.modal,
      children: u("div", {
        className: s.sub,
        children: [
          u("div", { className: s.title, children: "ИТД НУКСТА" }),
          u("div", {
            className: `${s.section} ${s.profileSection}`,
            children: [
              u("div", {
                className: s.label,
                children: "Ваш профиль с ИТД НУКСТА",
              }),
              u("div", {
                className: s.row,
                children: [
                  u(u_1, { src: c?.avatar || null, size: "sm" }),
                  u("div", {
                    children: [
                      u("div", {
                        className: s.name,
                        children: [
                          u("span", {
                            className: s.nameGradient,
                            children: c?.displayName,
                          }),
                          u("img", {
                            src: "/assets/pins/subscription_nuksta.gif",
                            alt: "НУКСТА",
                            width: 24,
                            height: 24,
                            className: s.namePinBadge,
                          }),
                        ],
                      }),
                      u("div", { className: s.dim, children: "только что" }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          u("div", {
            className: s.plans,
            children: u("button", {
              type: "button",
              className: `${s.planOption} ${s.selected}`,
              children: [
                u("div", {
                  className: s.row,
                  children: [
                    u("div", {
                      className: s.radio,
                      children: u("div", { className: s.radioDot }),
                    }),
                    u("span", { children: "1 месяц" }),
                  ],
                }),
                u("span", { className: s.dim, children: "199 ₽" }),
              ],
            }),
          }),
          u("div", {
            className: s.section,
            children: [
              u("div", {
                className: s.labelRow,
                children: [
                  u("span", {
                    className: s.label,
                    children: "Прикольные украшалки",
                  }),
                  u(d, {
                    text: "итд — полностью независимый проект, который мы делаем сами, без инвесторов и крупных компаний. подписка НУКСТА — это способ поддержать нас, если вам хочется. это совсем не обязательно, мы рады каждому и так! ❤️",
                  }),
                ],
              }),
              u("div", {
                className: s.features,
                children: [
                  u("div", {
                    className: s.row,
                    children: [
                      u("span", {
                        className: s.icon,
                        children: u("div", { className: s.iconGradient }),
                      }),
                      u("div", {
                        children: [
                          u("div", {
                            className: `${s.featureTitle} ${s.gradientText}`,
                            children: "Уникальный цвет ника",
                          }),
                          u("div", {
                            className: s.dim,
                            children:
                              "Клевый цвет ника, который показывает, что вы поддерживаете итд!",
                          }),
                        ],
                      }),
                    ],
                  }),
                  u("div", {
                    className: s.row,
                    children: [
                      u("span", {
                        className: s.icon,
                        children: u("img", {
                          src: "/assets/pins/subscription_nuksta.gif",
                          alt: "Пин",
                          width: 20,
                          height: 20,
                        }),
                      }),
                      u("div", {
                        children: [
                          u("div", {
                            className: s.featureTitle,
                            children: "Пин поддерживателя",
                          }),
                          u("div", {
                            className: s.dim,
                            children:
                              "Получите уникальный пин за поддержку итд",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          u("div", {
            className: s.section,
            children: [
              u("div", {
                className: s.labelRow,
                children: [
                  u("span", {
                    className: s.label,
                    children: "Сможете с нами тестить новые штуки",
                  }),
                  u(d, {
                    text: "мы постоянно добавляем в итд новые штуки и обычно тестим их внутри команды перед релизом. с подпиской НУКСТА вы сможете попробовать их первыми вместе с нами! а когда всё протестим — фишки станут доступны всем пользователям итд",
                  }),
                ],
              }),
              u("div", {
                className: s.features,
                children: [
                  u("div", {
                    className: s.row,
                    children: [
                      u("span", {
                        className: s.icon,
                        children: u(M, { size: 20 }),
                      }),
                      u("div", {
                        className: s.featureContent,
                        children: [
                          u("div", {
                            className: s.featureTitle,
                            children: "Загрузка видео",
                          }),
                          u("div", {
                            className: s.dim,
                            children:
                              "Получите возможность загружать видео одним из первых",
                          }),
                        ],
                      }),
                    ],
                  }),
                  u("div", {
                    className: s.row,
                    children: [
                      u("span", {
                        className: s.icon,
                        children: u(L, { size: 20 }),
                      }),
                      u("div", {
                        className: s.featureContent,
                        children: [
                          u("div", {
                            className: s.featureTitle,
                            children: [
                              "Сообщения ",
                              u("span", {
                                className: s.soon,
                                children: "soon",
                              }),
                            ],
                          }),
                          u("div", {
                            className: s.dim,
                            children:
                              "Получите доступ к месенджеру одним из первых",
                          }),
                        ],
                      }),
                    ],
                  }),
                  u("div", {
                    className: s.row,
                    children: [
                      u("span", {
                        className: s.icon,
                        children: u(C, { size: 20 }),
                      }),
                      u("div", {
                        className: s.featureContent,
                        children: [
                          u("div", {
                            className: s.featureTitle,
                            children: [
                              "Музыка ",
                              u("span", {
                                className: s.soon,
                                children: "soon",
                              }),
                            ],
                          }),
                          u("div", {
                            className: s.dim,
                            children:
                              "Получите доступ к музыке без рекламы в итд раньше всех",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          u("div", {
            className: s.footer,
            children: [
              u("div", {
                className: s.disclaimer,
                children: [
                  "Оплачивая, вы соглашаетесь с ",
                  u("a", {
                    href: "/subscription-terms",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: s.disclaimerLink,
                    children: "условиями платного доступа",
                  }),
                  ", ",
                  u("a", {
                    href: "/privacy",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: s.disclaimerLink,
                    children: "политикой конфиденциальности",
                  }),
                  " и ",
                  u("a", {
                    href: "/terms",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: s.disclaimerLink,
                    children: "условиями использования",
                  }),
                  ".",
                ],
              }),
              m
                ? u("div", {
                    className: s.activeLabel,
                    children: "Подписка активна",
                  })
                : u("button", {
                    type: "button",
                    className: s.subscribeBtn,
                    onClick: p,
                    disabled: r,
                    children: `Оплатить ${u}₽`,
                  }),
            ],
          }),
        ],
      }),
    }),
    document.body
  );
}
export { ae as I, ie as S };
