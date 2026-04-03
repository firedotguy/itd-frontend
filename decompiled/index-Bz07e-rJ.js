import { d, b, q as q_1, i, aa, u, ab, B } from "./index-l7r8kpkZ.js";
import { C } from "./index-PtfJDGq5.js";
import { V } from "./index-CLcnoJ_t.js";
import { I, a } from "./IconEyeOff--_kUN7pY.js";
const P = "HAwgnEEf";
const W = "_520SIeft";
const x = "aO9i5DDs";
const G = "m-XHVEdA";
const J = "EVVlDXCO";
const $ = "uk3dJE8m";
const z = "Qn2m-esi";
const X = "PRyD6ovh";
const j = "JRZJnqe4";
const q = "-xNqEKaQ";
const Q = "uezMG7CZ";
const Z = "BbAvZc1-";
const F = "HQjTHL0b";
const Y = "jwmo1tBu";
const K = "jpW4bCwR";
const U = "_9T3LHe9E";
const ee = "NH9H9-Ir";
const re = "eibNJeO1";
const te = "NL2n67AJ";

const r = {
  page: P,
  container: W,
  logo: x,
  form: G,
  header: J,
  error: $,
  title: z,
  subtitle: X,
  inputs: j,
  inputGroup: q,
  inputWrapper: Q,
  input: Z,
  label: F,
  inputError: Y,
  fieldError: K,
  eyeButton: U,
  terms: ee,
  submitButton: re,
  loginLink: te,
};

export const Register = (se) => {
  const [i, v] = d("");
  const [s, A] = d("");
  const [p, C] = d(false);
  const [I, d] = d(false);
  const [E, n] = d(null);
  const [m, o] = d(null);
  const [h, l] = d(null);
  const [w, b] = d("credentials");
  const { register: N, status: k, reset: g } = b();
  const u = k === "loading";

  const _ = (a) => {
    a.preventDefault();
    n(null);
    o(null);
    l(null);

    if (!i.trim()) {
      o("Введите email");
      return;
    }

    if (!s.trim()) {
      l("Введите пароль");
      return;
    }
    if (s.length < 10) {
      l("Минимум 10 символов");
      return;
    }
    if (s.length > 128) {
      l("Максимум 128 символов");
      return;
    }
    if (!/^[\x21-\x7E]+$/.test(s)) {
      l("Только латиница, цифры и знаки пунктуации");
      return;
    }
    d(true);
  };

  const L = q_1(
    async (a) => {
      d(false);
      try {
        await N({ email: i, password: s, turnstileToken: a });
        b("verify");
      } catch (f) {
        if (i(f)) {
          switch (f.code) {
            case aa.ENTITY_ALREADY_EXISTS: {
              o("Этот email уже зарегистрирован");
              break;
            }
            case aa.ACCOUNT_EMAIL_DOMAIN_NOT_ALLOWED: {
              o("Этот email домен не разрешён");
              break;
            }
            case aa.CAPTCHA_FAILED: {
              n("Проверка captcha не пройдена. Попробуйте снова");
              break;
            }
            case aa.RATE_LIMIT_EXCEEDED: {
              n("Слишком много попыток. Попробуйте позже");
              break;
            }
            case aa.VALIDATION_ERROR: {
              n("Проверьте введённые данные");
              break;
            }
            default: {
              n(f.message || "Ошибка регистрации");
            }
          }
        } else {
          n("Произошла ошибка. Попробуйте позже");
        }
      }
    },
    [i, s, N]
  );

  const B = q_1(() => {
    g();
    b("credentials");
  }, [g]);

  return u("div", {
    className: r.page,
    children: [
      u("div", {
        className: r.container,
        children: [
          u("div", { className: r.logo, children: u(ab, {}) }),
          w === "credentials"
            ? u("form", {
                className: r.form,
                onSubmit: _,
                children: [
                  u("div", {
                    className: r.header,
                    children: [
                      u("h1", {
                        className: r.title,
                        children: "Создание аккаунта",
                      }),
                      u("p", {
                        className: r.subtitle,
                        children: "Пожалуйста, введите ваши данные",
                      }),
                    ],
                  }),
                  E && u("div", { className: r.error, children: E }),
                  u("div", {
                    className: r.inputs,
                    children: [
                      u("div", {
                        className: r.inputGroup,
                        children: [
                          u("label", {
                            className: r.label,
                            children: "E-Mail",
                          }),
                          u("input", {
                            type: "email",
                            className: `${r.input} ${m ? r.inputError : ""}`,
                            value: i,
                            onInput: (a) => {
                              v(a.target.value);
                              o(null);
                            },
                            placeholder: "ilya@gmail.com",
                            disabled: u,
                          }),
                          m &&
                            u("span", {
                              className: r.fieldError,
                              children: m,
                            }),
                        ],
                      }),
                      u("div", {
                        className: r.inputGroup,
                        children: [
                          u("label", {
                            className: r.label,
                            children: "Пароль",
                          }),
                          u("div", {
                            className: r.inputWrapper,
                            children: [
                              u("input", {
                                type: p ? "text" : "password",
                                className: `${r.input} ${
                                  h ? r.inputError : ""
                                }`,
                                value: s,
                                onInput: (a) => {
                                  A(a.target.value);
                                  l(null);
                                },
                                placeholder: "Минимум 10 символов",
                                disabled: u,
                              }),
                              u("button", {
                                type: "button",
                                className: r.eyeButton,
                                onClick: () => C(!p),
                                children: p
                                  ? u(I, { size: 20 })
                                  : u(a, { size: 20 }),
                              }),
                            ],
                          }),
                          h &&
                            u("span", {
                              className: r.fieldError,
                              children: h,
                            }),
                        ],
                      }),
                    ],
                  }),
                  u("p", {
                    className: r.terms,
                    children: [
                      "Продолжая, вы соглашаетесь с",
                      " ",
                      u("a", {
                        href: "/terms",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: "условиями использования",
                      }),
                      " и",
                      " ",
                      u("a", {
                        href: "/privacy",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: "политикой конфиденциальности",
                      }),
                    ],
                  }),
                  u(B, {
                    type: "submit",
                    variant: "primary",
                    size: "lg",
                    fullWidth: true,
                    className: r.submitButton,
                    disabled: u,
                    children: u ? "Регистрация..." : "Продолжить",
                  }),
                  u("p", {
                    className: r.loginLink,
                    children: [
                      "Уже есть аккаунт? ",
                      u("a", { href: "/login", children: "Войти" }),
                    ],
                  }),
                ],
              })
            : u(V, { email: i, onBack: B }),
        ],
      }),
      u(C, { isOpen: I, onClose: () => d(false), onVerify: L }),
    ],
  });
};

export { Register as Register, Register as default };
