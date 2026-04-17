import {
  d,
  a,
  b as B_1,
  b,
  $ as $_1,
  a8 as i_1,
  a8,
} from "./index-BNG2MjJY.js";
import { I } from "./IconBrand-nLDG7MIE.js";
import { I as I_1, a as a_1 } from "./IconEyeOff-DHTVaamG.js";
const R = "eloR";
const G = "c31A";
const O = "EUAL";
const S = "Lgrd";
const W = "n77Q";
const T = "ViYh";
const U = "Ucqo";
const _ = "WJrO";
const x = "kngW";
const z = "jhqY";
const D = "KPRB";
const $ = "SRGv";
const q = "XqPr";
const H = "Mq8n";
const M = "z2kO";
const K = "GHiH";
const Q = "xMCT";
const V = "HUCi";
const X = "UG3Z";

const s = {
  page: R,
  container: G,
  logo: O,
  form: S,
  header: W,
  title: T,
  subtitle: U,
  error: _,
  inputs: x,
  inputGroup: z,
  label: D,
  inputWrapper: $,
  input: q,
  inputError: H,
  fieldError: M,
  hint: K,
  eyeButton: Q,
  submitButton: V,
  backLink: X,
};

export const ResetPassword = (Y) => {
  const [t, g] = d("");
  const [f, v] = d("");
  const [c, y] = d(false);
  const [u, I] = d(false);
  const [b, a] = d(null);
  const [d, n] = d(null);
  const [p, m] = d(null);
  const [l, E] = d(false);

  const k = async (o) => {
    o.preventDefault();
    a(null);
    n(null);
    m(null);

    if (!t.trim()) {
      n("Введите новый пароль");
      return;
    }

    if (t.length < 10) {
      n("Минимум 10 символов");
      return;
    }
    if (t.length > 128) {
      n("Максимум 128 символов");
      return;
    }
    if (!/^[\x21-\x7E]+$/.test(t)) {
      n("Только латиница, цифры и знаки пунктуации");
      return;
    }
    if (t !== f) {
      m("Пароли не совпадают");
      return;
    }
    E(true);
    try {
      await b.resetPassword({ newPassword: t });
      $_1("/login");
    } catch (h) {
      if (i_1(h)) {
        switch (h.code) {
          case a8.MISSING_FLOW_TOKEN:
          case a8.UNAUTHORIZED:
          case a8.BAD_REQUEST: {
            a("Сессия сброса пароля истекла. Начните заново");
            break;
          }
          case a8.VALIDATION_ERROR: {
            n("Пароль не соответствует требованиям");
            break;
          }
          case a8.RATE_LIMIT_EXCEEDED: {
            a("Слишком много попыток. Попробуйте позже");
            break;
          }
          default: {
            a(h.message || "Произошла ошибка");
          }
        }
      } else {
        a("Произошла ошибка. Попробуйте позже");
      }
    } finally {
      E(false);
    }
  };

  return a("div", {
    className: s.page,
    children: a("div", {
      className: s.container,
      children: [
        a("div", { className: s.logo, children: a(I, {}) }),
        a("form", {
          className: s.form,
          onSubmit: k,
          children: [
            a("div", {
              className: s.header,
              children: [
                a("h1", { className: s.title, children: "Новый пароль" }),
                a("p", {
                  className: s.subtitle,
                  children: "Придумайте новый пароль для вашего аккаунта",
                }),
              ],
            }),
            b && a("div", { className: s.error, children: b }),
            a("div", {
              className: s.inputs,
              children: [
                a("div", {
                  className: s.inputGroup,
                  children: [
                    a("label", {
                      className: s.label,
                      children: "Новый пароль",
                    }),
                    a("div", {
                      className: s.inputWrapper,
                      children: [
                        a("input", {
                          type: c ? "text" : "password",
                          className: `${s.input} ${d ? s.inputError : ""}`,
                          value: t,
                          onInput: (o) => {
                            g(o.target.value);
                            n(null);
                          },
                          placeholder: "••••••••••••",
                          autoComplete: "new-password",
                          disabled: l,
                        }),
                        a("button", {
                          type: "button",
                          className: s.eyeButton,
                          onClick: () => y(!c),
                          children: c
                            ? a(I_1, { size: 20 })
                            : a(a_1, { size: 20 }),
                        }),
                      ],
                    }),
                    a("span", {
                      className: s.hint,
                      children:
                        "Минимум 10 символов, латиница, цифры и пунктуация",
                    }),
                    d && a("span", { className: s.fieldError, children: d }),
                  ],
                }),
                a("div", {
                  className: s.inputGroup,
                  children: [
                    a("label", {
                      className: s.label,
                      children: "Подтверждение пароля",
                    }),
                    a("div", {
                      className: s.inputWrapper,
                      children: [
                        a("input", {
                          type: u ? "text" : "password",
                          className: `${s.input} ${p ? s.inputError : ""}`,
                          value: f,
                          onInput: (o) => {
                            v(o.target.value);
                            m(null);
                          },
                          placeholder: "••••••••••••",
                          autoComplete: "new-password",
                          disabled: l,
                        }),
                        a("button", {
                          type: "button",
                          className: s.eyeButton,
                          onClick: () => I(!u),
                          children: u
                            ? a(I_1, { size: 20 })
                            : a(a_1, { size: 20 }),
                        }),
                      ],
                    }),
                    p && a("span", { className: s.fieldError, children: p }),
                  ],
                }),
              ],
            }),
            a(B_1, {
              type: "submit",
              variant: "primary",
              size: "lg",
              fullWidth: true,
              className: s.submitButton,
              disabled: l,
              children: l ? "Сохранение..." : "Сохранить пароль",
            }),
            a("p", {
              className: s.backLink,
              children: a("a", {
                href: "/login",
                children: "Вернуться ко входу",
              }),
            }),
          ],
        }),
      ],
    }),
  });
};

export { ResetPassword as ResetPassword, ResetPassword as default };
