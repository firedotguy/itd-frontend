import { d, u, a9, B, a, $ as $_1, i, a8 } from "./index-BPAoISKs.js";
import { I, a as a_1 } from "./IconEyeOff-DE5biNZb.js";
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
  const [N, n] = d(null);
  const [d, a] = d(null);
  const [p, m] = d(null);
  const [i, E] = d(false);

  const B = async (o) => {
    o.preventDefault();
    n(null);
    a(null);
    m(null);

    if (!t.trim()) {
      a("Введите новый пароль");
      return;
    }

    if (t.length < 10) {
      a("Минимум 10 символов");
      return;
    }
    if (t.length > 128) {
      a("Максимум 128 символов");
      return;
    }
    if (!/^[\x21-\x7E]+$/.test(t)) {
      a("Только латиница, цифры и знаки пунктуации");
      return;
    }
    if (t !== f) {
      m("Пароли не совпадают");
      return;
    }
    E(true);
    try {
      await a.resetPassword({ newPassword: t });
      $_1("/login");
    } catch (h) {
      if (i(h)) {
        switch (h.code) {
          case a8.MISSING_FLOW_TOKEN:
          case a8.UNAUTHORIZED:
          case a8.BAD_REQUEST: {
            n("Сессия сброса пароля истекла. Начните заново");
            break;
          }
          case a8.VALIDATION_ERROR: {
            a("Пароль не соответствует требованиям");
            break;
          }
          case a8.RATE_LIMIT_EXCEEDED: {
            n("Слишком много попыток. Попробуйте позже");
            break;
          }
          default: {
            n(h.message || "Произошла ошибка");
          }
        }
      } else {
        n("Произошла ошибка. Попробуйте позже");
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
        u("div", { className: s.logo, children: u(a9, {}) }),
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
                            a(null);
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
                            ? u(I, { size: 20 })
                            : u(a_1, { size: 20 }),
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
                            ? u(I, { size: 20 })
                            : u(a_1, { size: 20 }),
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
