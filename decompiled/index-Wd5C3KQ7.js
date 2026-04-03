import {
  a2,
  a3,
  u,
  h,
  d as d_1,
  a0,
  c,
  ab,
  ad as M_1,
  ac,
  ad,
  t,
} from "./index-d9k9JBOp.js";

const x = {
  async getStatus() {
    return a2.get(a3.subscription.status);
  },
  async pay() {
    return a2.post(a3.subscription.pay);
  },
  async setAutoRenewal(s) {
    return a2.post(a3.subscription.autoRenewal, { enabled: s });
  },
  async bindCard() {
    return a2.post(a3.subscription.bindCard);
  },
  async getMethods() {
    return (await a2.get(a3.subscription.methods)).data;
  },
  async setDefaultMethod(s) {
    return a2.put(a3.subscription.methodDefault(s));
  },
  async deleteMethod(s) {
    return a2.delete(a3.subscription.methodDelete(s));
  },
};

const k = ({ size: s = 24 }) =>
  u("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: s,
    height: s,
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

const B = ({ size: s = 24 }) =>
  u("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: s,
    height: s,
    viewBox: "0 0 24 24",
    fill: "none",
    children: u("path", {
      fill: "currentColor",
      "fill-rule": "evenodd",
      d: "M8.078 10.367c0-.01.006-.019.006-.029V5.636a3.46 3.46 0 0 0 1.257.526.749.749 0 1 0 .299-1.469c-1.135-.23-1.589-1.333-1.606-1.375a.75.75 0 0 0-1.45.269v4.3a2.873 2.873 0 0 0-1.418-.384 2.92 2.92 0 0 0-2.916 2.918 2.92 2.92 0 0 0 2.916 2.916 2.92 2.92 0 0 0 2.917-2.916c0-.019-.005-.035-.005-.054ZM21.75 6.503a.749.749 0 0 0-1.067-.68c-2.557 1.189-5.245 1.683-7.982 1.469a.752.752 0 0 0-.568.196.752.752 0 0 0-.24.55v7.697a2.866 2.866 0 0 0-1.402-.377 2.907 2.907 0 0 0-2.903 2.904 2.906 2.906 0 0 0 2.903 2.903 2.906 2.906 0 0 0 2.903-2.903v-6.925c.183.007.368.023.552.023 2.151 0 4.26-.427 6.303-1.228V14.2a2.87 2.87 0 0 0-1.403-.377 2.906 2.906 0 0 0-2.903 2.903 2.906 2.906 0 0 0 2.903 2.903 2.906 2.906 0 0 0 2.903-2.903V6.502Z",
      "clip-rule": "evenodd",
    }),
  });

const S = ({ size: s = 20 }) =>
  u("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: s,
    height: s,
    viewBox: "0 0 20 20",
    fill: "none",
    children: u("path", {
      fill: "currentColor",
      d: "M9.905 2.501c2.422 0 4.113 1.669 4.113 4.06v6.88c0 2.39-1.69 4.06-4.113 4.06H4.113c-2.422 0-4.113-1.67-4.113-4.06V6.56c0-2.391 1.691-4.06 4.113-4.06zm8.053 2.379c.439-.223.954-.2 1.373.064.419.263.669.72.669 1.22v7.675a1.43 1.43 0 0 1-1.412 1.436c-.215 0-.43-.05-.631-.153l-1.481-.748a1.62 1.62 0 0 1-.888-1.457V7.085c0-.621.34-1.18.888-1.456z",
    }),
  });

const C = "uX6mG52K";
const R = "u5FjrrfL";
const T = "Z9f7Q3jS";
const I = "L-43NjOb";
const G = "E60wxVvR";
const D = "_0dqhEKnD";
const A = "c-uIo5yi";
const P = "cB-8IXk5";
const $ = "aUamxQ7e";
const V = "ObQk27rJ";
const Z = "ovunVXLq";
const z = "ohs8Npaw";
const U = "_0K-Z1eD9";
const X = "LMo4ifSx";
const _ = "_9DD7EG-T";
const O = "R0v2YBUB";
const H = "kM0p8-Sv";
const K = "GWzRyPXS";
const j = "PURIUyt6";
const E = "oTS4L6S0";
const q = "hgcZGLcX";
const Q = "FCPywiPM";
const F = "ynvn-v5t";
const J = "rost2Xx2";
const W = "mAyptXfj";
const Y = "IJ-MKy8P";
const ee = "av5HkGSu";
const ae = "-TUw-Z3K";
const se = "eLLh95k2";
const ne = "wc3kGqhz";

const a = {
  modal: C,
  sub: R,
  title: T,
  section: I,
  profileSection: G,
  label: D,
  labelRow: A,
  dim: P,
  row: $,
  icon: V,
  iconGradient: Z,
  name: z,
  nameGradient: U,
  nameBadge: X,
  plans: _,
  planOption: O,
  selected: H,
  radio: K,
  radioDot: j,
  features: E,
  featureContent: q,
  featureTitle: Q,
  gradientText: F,
  soon: J,
  infoBtn: W,
  footer: Y,
  disclaimer: ee,
  disclaimerLink: ae,
  subscribeBtn: se,
  activeLabel: ne,
};

function d({ text: s }) {
  return u(ad, {
    text: s,
    multiline: true,
    children: u("span", {
      className: a.infoBtn,
      children: u(ac, { size: 14 }),
    }),
  });
}
function ce({ isOpen: s, onClose: m }) {
  const l = h();
  const [t, r] = d_1(false);
  if (!s) {
    return null;
  }
  const h = l?.subscription?.isActive ?? false;
  const u = "199";
  const v = "месяц";

  const p = async () => {
    if (!t) {
      r(true);
      try {
        const c = await x.pay();
        if (c.error) {
          t.error(c.error);
          return;
        }

        if (c.confirmationUrl) {
          window.location.href = c.confirmationUrl;
        }
      } catch (c) {
        t.error(c?.message || "Ошибка при создании платежа");
      } finally {
        r(false);
      }
    }
  };

  return a0(
    u(M_1, {
      onClose: m,
      showHeader: false,
      frameless: true,
      className: a.modal,
      children: u("div", {
        className: a.sub,
        children: [
          u("div", { className: a.title, children: "ИТД НУКСТА" }),
          u("div", {
            className: `${a.section} ${a.profileSection}`,
            children: [
              u("div", {
                className: a.label,
                children: "Ваш профиль с ИТД НУКСТА",
              }),
              u("div", {
                className: a.row,
                children: [
                  u(c, { src: l?.avatar || null, size: "sm" }),
                  u("div", {
                    children: [
                      u("div", {
                        className: a.name,
                        children: [
                          u("span", {
                            className: a.nameGradient,
                            children: l?.displayName,
                          }),
                          u("span", { className: a.nameBadge, children: "🐙" }),
                        ],
                      }),
                      u("div", { className: a.dim, children: "только что" }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          u("div", {
            className: a.plans,
            children: u("button", {
              type: "button",
              className: `${a.planOption} ${a.selected}`,
              children: [
                u("div", {
                  className: a.row,
                  children: [
                    u("div", {
                      className: a.radio,
                      children: u("div", { className: a.radioDot }),
                    }),
                    u("span", { children: "Ежемесячно" }),
                  ],
                }),
                u("span", { className: a.dim, children: "199 ₽ / месяц" }),
              ],
            }),
          }),
          u("div", {
            className: a.section,
            children: [
              u("div", {
                className: a.labelRow,
                children: [
                  u("span", {
                    className: a.label,
                    children: "Прикольные украшалки",
                  }),
                  u(d, {
                    text: "итд — полностью независимый проект, который мы делаем сами, без инвесторов и крупных компаний. подписка НУКСТА — это способ поддержать нас, если вам хочется. это совсем не обязательно, мы рады каждому и так! ❤️",
                  }),
                ],
              }),
              u("div", {
                className: a.features,
                children: [
                  u("div", {
                    className: a.row,
                    children: [
                      u("span", {
                        className: a.icon,
                        children: u("div", { className: a.iconGradient }),
                      }),
                      u("div", {
                        children: [
                          u("div", {
                            className: `${a.featureTitle} ${a.gradientText}`,
                            children: "Уникальный цвет ника",
                          }),
                          u("div", {
                            className: a.dim,
                            children:
                              "Клевый цвет ника, который показывает, что вы поддерживаете итд!",
                          }),
                        ],
                      }),
                    ],
                  }),
                  u("div", {
                    className: a.row,
                    children: [
                      u("span", {
                        className: a.icon,
                        children: u(ab, { size: 20 }),
                      }),
                      u("div", {
                        children: [
                          u("div", {
                            className: a.featureTitle,
                            children: "Пин поддерживателя",
                          }),
                          u("div", {
                            className: a.dim,
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
            className: a.section,
            children: [
              u("div", {
                className: a.labelRow,
                children: [
                  u("span", {
                    className: a.label,
                    children: "Сможете с нами тестить новые штуки",
                  }),
                  u(d, {
                    text: "мы постоянно добавляем в итд новые штуки и обычно тестим их внутри команды перед релизом. с подпиской НУКСТА вы сможете попробовать их первыми вместе с нами! а когда всё протестим — фишки станут доступны всем пользователям итд",
                  }),
                ],
              }),
              u("div", {
                className: a.features,
                children: [
                  u("div", {
                    className: a.row,
                    children: [
                      u("span", {
                        className: a.icon,
                        children: u(S, { size: 20 }),
                      }),
                      u("div", {
                        className: a.featureContent,
                        children: [
                          u("div", {
                            className: a.featureTitle,
                            children: "Загрузка видео",
                          }),
                          u("div", {
                            className: a.dim,
                            children:
                              "Получите возможность загружать видео одним из первых",
                          }),
                        ],
                      }),
                    ],
                  }),
                  u("div", {
                    className: a.row,
                    children: [
                      u("span", {
                        className: a.icon,
                        children: u(k, { size: 20 }),
                      }),
                      u("div", {
                        className: a.featureContent,
                        children: [
                          u("div", {
                            className: a.featureTitle,
                            children: [
                              "Сообщения ",
                              u("span", {
                                className: a.soon,
                                children: "soon",
                              }),
                            ],
                          }),
                          u("div", {
                            className: a.dim,
                            children:
                              "Получите доступ к месенджеру одним из первых",
                          }),
                        ],
                      }),
                    ],
                  }),
                  u("div", {
                    className: a.row,
                    children: [
                      u("span", {
                        className: a.icon,
                        children: u(B, { size: 20 }),
                      }),
                      u("div", {
                        className: a.featureContent,
                        children: [
                          u("div", {
                            className: a.featureTitle,
                            children: [
                              "Музыка ",
                              u("span", {
                                className: a.soon,
                                children: "soon",
                              }),
                            ],
                          }),
                          u("div", {
                            className: a.dim,
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
            className: a.footer,
            children: [
              u("div", {
                className: a.disclaimer,
                children: [
                  "Оплачивая, вы соглашаетесь с ",
                  u("a", {
                    href: "/subscription-terms",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: a.disclaimerLink,
                    children: "условиями подписки",
                  }),
                  ", ",
                  u("a", {
                    href: "/privacy",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: a.disclaimerLink,
                    children: "политикой конфиденциальности",
                  }),
                  " и ",
                  u("a", {
                    href: "/terms",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: a.disclaimerLink,
                    children: "условиями использования",
                  }),
                  ".",
                ],
              }),
              h
                ? u("div", {
                    className: a.activeLabel,
                    children: "Подписка активна",
                  })
                : u("button", {
                    type: "button",
                    className: a.subscribeBtn,
                    onClick: p,
                    disabled: t,
                    children: `Подключить за ${u}₽ в ${v}`,
                  }),
            ],
          }),
        ],
      }),
    }),
    document.body
  );
}
export { ce as S, x as s };
