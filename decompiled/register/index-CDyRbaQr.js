import { d, a8 as c_1, q as q_1, i, a8, a, B } from "./index-BNG2MjJY.js";
import { C } from "./index-BBxKOu2w.js";
import { I as V_1 } from "./index-DG6vYOjg.js";
import { I } from "./IconBrand-nLDG7MIE.js";
import { I as I_1, a as a_1 } from "./IconEyeOff-DHTVaamG.js";
const G = "deuV";
const M = "bgny";
const x = "w0gq";
const $ = "fEpO";
const X = "VqpG";
const q = "pkvT";
const z = "W0M1";
const Z = "HRkT";
const F = "ZsZ2";
const H = "lvXS";
const Y = "jETP";
const j = "pAtR";
const J = "m9Jv";
const U = "TdvT";
const K = "G9Il";
const Q = "soxA";
const ee = "p2Po";
const re = "aaZW";
const te = "mdXc";

const r = {
  page: G,
  container: M,
  logo: x,
  form: $,
  header: X,
  error: q,
  title: z,
  subtitle: Z,
  inputs: F,
  inputGroup: H,
  inputWrapper: Y,
  input: j,
  label: J,
  inputError: U,
  fieldError: K,
  eyeButton: Q,
  terms: ee,
  submitButton: re,
  loginLink: te,
};

export const Register = (se) => {
  const [o, y] = d("");
  const [s, A] = d("");
  const [d, I] = d(false);
  const [k, u] = d(false);
  const [E, n] = d(null);
  const [m, i] = d(null);
  const [h, l] = d(null);
  const [w, b] = d("credentials");
  const { register: N, status: C, reset: g } = c_1();
  const p = C === "loading";

  const T = (a) => {
    a.preventDefault();
    n(null);
    i(null);
    l(null);

    if (!o.trim()) {
      i("Введите email");
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
    u(true);
  };

  const _ = q_1(
    async (a) => {
      u(false);
      try {
        await N({ email: o, password: s, turnstileToken: a });
        b("verify");
      } catch (f) {
        if (i(f)) {
          switch (f.code) {
            case a8.ENTITY_ALREADY_EXISTS: {
              i("Этот email уже зарегистрирован");
              break;
            }
            case a8.ACCOUNT_EMAIL_DOMAIN_NOT_ALLOWED: {
              i("Этот email домен не разрешён");
              break;
            }
            case a8.CAPTCHA_FAILED: {
              n("Проверка captcha не пройдена. Попробуйте снова");
              break;
            }
            case a8.RATE_LIMIT_EXCEEDED: {
              n("Слишком много попыток. Попробуйте позже");
              break;
            }
            case a8.VALIDATION_ERROR: {
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
    [o, s, N]
  );

  const B = q_1(() => {
    g();
    b("credentials");
  }, [g]);

  return a("div", {
    className: r.page,
    children: [
      a("div", {
        className: r.container,
        children: [
          a("div", { className: r.logo, children: a(I, {}) }),
          w === "credentials"
            ? a("form", {
                className: r.form,
                onSubmit: T,
                children: [
                  a("div", {
                    className: r.header,
                    children: [
                      a("h1", {
                        className: r.title,
                        children: "Создание аккаунта",
                      }),
                      a("p", {
                        className: r.subtitle,
                        children: "Пожалуйста, введите ваши данные",
                      }),
                    ],
                  }),
                  E && a("div", { className: r.error, children: E }),
                  a("div", {
                    className: r.inputs,
                    children: [
                      a("div", {
                        className: r.inputGroup,
                        children: [
                          a("label", {
                            className: r.label,
                            children: "E-Mail",
                          }),
                          a("input", {
                            type: "email",
                            className: `${r.input} ${m ? r.inputError : ""}`,
                            value: o,
                            onInput: (a) => {
                              y(a.target.value);
                              i(null);
                            },
                            placeholder: "ilya@gmail.com",
                            disabled: p,
                          }),
                          m &&
                            a("span", {
                              className: r.fieldError,
                              children: m,
                            }),
                        ],
                      }),
                      a("div", {
                        className: r.inputGroup,
                        children: [
                          a("label", {
                            className: r.label,
                            children: "Пароль",
                          }),
                          a("div", {
                            className: r.inputWrapper,
                            children: [
                              a("input", {
                                type: d ? "text" : "password",
                                className: `${r.input} ${
                                  h ? r.inputError : ""
                                }`,
                                value: s,
                                onInput: (a) => {
                                  A(a.target.value);
                                  l(null);
                                },
                                placeholder: "Минимум 10 символов",
                                disabled: p,
                              }),
                              a("button", {
                                type: "button",
                                className: r.eyeButton,
                                onClick: () => I(!d),
                                children: d
                                  ? a(I_1, { size: 20 })
                                  : a(a_1, { size: 20 }),
                              }),
                            ],
                          }),
                          h &&
                            a("span", {
                              className: r.fieldError,
                              children: h,
                            }),
                        ],
                      }),
                    ],
                  }),
                  a("p", {
                    className: r.terms,
                    children: [
                      "Продолжая, вы соглашаетесь с",
                      " ",
                      a("a", {
                        href: "/terms",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: "условиями использования",
                      }),
                      " и",
                      " ",
                      a("a", {
                        href: "/privacy",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: "политикой конфиденциальности",
                      }),
                    ],
                  }),
                  a(B, {
                    type: "submit",
                    variant: "primary",
                    size: "lg",
                    fullWidth: true,
                    className: r.submitButton,
                    disabled: p,
                    children: p ? "Регистрация..." : "Продолжить",
                  }),
                  a("p", {
                    className: r.loginLink,
                    children: [
                      "Уже есть аккаунт? ",
                      a("a", { href: "/login", children: "Войти" }),
                    ],
                  }),
                ],
              })
            : a(V_1, { email: o, onBack: B }),
        ],
      }),
      a(C, { isOpen: k, onClose: () => u(false), onVerify: _ }),
    ],
  });
};

export { Register as Register, Register as default };
