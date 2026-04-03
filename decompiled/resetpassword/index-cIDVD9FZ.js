import {
  d,
  u,
  B,
  Z,
  $ as $_1,
  X as X_1,
  ResetPassword as ResetPassword_1,
} from "./index-d9k9JBOp.js";
import { I } from "./IconBrand-Dvd5sQwh.js";
import { I as I_1, a } from "./IconEyeOff-BO24q3Jn.js";
const A = "Osz6NIgK";
const L = "h1ojWSXm";
const W = "v-x9Vo1a";
const _ = "h9WO8HpN";
const O = "wolXvddi";
const z = "_8BZ6CJ2H";
const R = "BP6fpDaa";
const S = "U-22u7it";
const T = "FIDPDt4f";
const X = "F8aeXJ9A";
const Q = "Tt7Kx30O";
const $ = "sEQEFFxa";
const F = "pzQ9kXr2";
const G = "jR6AxWDQ";
const U = "-HgXJQXM";
const H = "vMx4j6qy";
const M = "_2QLzIYD9";
const j = "cnL9mT30";
const J = "_4lU-Wmyq";

const s = {
  page: A,
  container: L,
  logo: W,
  form: _,
  header: O,
  title: z,
  subtitle: R,
  error: S,
  inputs: T,
  inputGroup: X,
  label: Q,
  inputWrapper: $,
  input: F,
  inputError: G,
  fieldError: U,
  hint: H,
  eyeButton: M,
  submitButton: j,
  backLink: J,
};

export const ResetPassword = (K) => {
  const [t, v] = d("");
  const [f, g] = d("");
  const [c, y] = d(false);
  const [u, I] = d(false);
  const [N, a] = d(null);
  const [d, n] = d(null);
  const [p, m] = d(null);
  const [i, E] = d(false);

  const B = async (o) => {
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
      await Z.resetPassword({ newPassword: t });
      $_1("/login");
    } catch (h) {
      if (X_1(h)) {
        switch (h.code) {
          case ResetPassword_1.MISSING_FLOW_TOKEN:
          case ResetPassword_1.UNAUTHORIZED:
          case ResetPassword_1.BAD_REQUEST: {
            a("Сессия сброса пароля истекла. Начните заново");
            break;
          }
          case ResetPassword_1.VALIDATION_ERROR: {
            n("Пароль не соответствует требованиям");
            break;
          }
          case ResetPassword_1.RATE_LIMIT_EXCEEDED: {
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

  return u("div", {
    className: s.page,
    children: u("div", {
      className: s.container,
      children: [
        u("div", { className: s.logo, children: u(I, {}) }),
        u("form", {
          className: s.form,
          onSubmit: B,
          children: [
            u("div", {
              className: s.header,
              children: [
                u("h1", { className: s.title, children: "Новый пароль" }),
                u("p", {
                  className: s.subtitle,
                  children: "Придумайте новый пароль для вашего аккаунта",
                }),
              ],
            }),
            N && u("div", { className: s.error, children: N }),
            u("div", {
              className: s.inputs,
              children: [
                u("div", {
                  className: s.inputGroup,
                  children: [
                    u("label", {
                      className: s.label,
                      children: "Новый пароль",
                    }),
                    u("div", {
                      className: s.inputWrapper,
                      children: [
                        u("input", {
                          type: c ? "text" : "password",
                          className: `${s.input} ${d ? s.inputError : ""}`,
                          value: t,
                          onInput: (o) => {
                            v(o.target.value);
                            n(null);
                          },
                          placeholder: "••••••••••••",
                          autoComplete: "new-password",
                          disabled: i,
                        }),
                        u("button", {
                          type: "button",
                          className: s.eyeButton,
                          onClick: () => y(!c),
                          children: c
                            ? u(I_1, { size: 20 })
                            : u(a, { size: 20 }),
                        }),
                      ],
                    }),
                    u("span", {
                      className: s.hint,
                      children:
                        "Минимум 10 символов, латиница, цифры и пунктуация",
                    }),
                    d && u("span", { className: s.fieldError, children: d }),
                  ],
                }),
                u("div", {
                  className: s.inputGroup,
                  children: [
                    u("label", {
                      className: s.label,
                      children: "Подтверждение пароля",
                    }),
                    u("div", {
                      className: s.inputWrapper,
                      children: [
                        u("input", {
                          type: u ? "text" : "password",
                          className: `${s.input} ${p ? s.inputError : ""}`,
                          value: f,
                          onInput: (o) => {
                            g(o.target.value);
                            m(null);
                          },
                          placeholder: "••••••••••••",
                          autoComplete: "new-password",
                          disabled: i,
                        }),
                        u("button", {
                          type: "button",
                          className: s.eyeButton,
                          onClick: () => I(!u),
                          children: u
                            ? u(I_1, { size: 20 })
                            : u(a, { size: 20 }),
                        }),
                      ],
                    }),
                    p && u("span", { className: s.fieldError, children: p }),
                  ],
                }),
              ],
            }),
            u(B, {
              type: "submit",
              variant: "primary",
              size: "lg",
              fullWidth: true,
              className: s.submitButton,
              disabled: i,
              children: i ? "Сохранение..." : "Сохранить пароль",
            }),
            u("p", {
              className: s.backLink,
              children: u("a", {
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
