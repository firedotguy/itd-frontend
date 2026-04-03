import {
  d,
  q_1 as b_1,
  q as q_1,
  X as X_1,
  Y as Y_1,
  u,
  B,
} from "./index-d9k9JBOp.js";
import { C } from "./index-DUDm9B-H.js";
import { V as V_1 } from "./index-epGVmFJj.js";
import { I } from "./IconBrand-Dvd5sQwh.js";
import { I as I_1, a } from "./IconEyeOff-BO24q3Jn.js";
const W = "t5oO8-4Z";
const V = "_08esxaRX";
const U = "r8lsLZcX";
const Z = "a-AltNnW";
const F = "sLmgZn7O";
const G = "gwOnNlDG";
const M = "I0E2SIQH";
const x = "h1muhFRY";
const z = "K6LUzmSd";
const Y = "F-eZP3Z3";
const q = "i8qYWkc1";
const H = "CxUaWUwc";
const X = "snRcI1jZ";
const j = "qb1vvhxv";
const K = "WFEAG6J2";
const Q = "eiB-iHqV";
const $ = "jyNy1FoY";
const J = "Iy7f3zBR";
const ee = "ZQrfRHNk";

const s = {
  page: W,
  container: V,
  logo: U,
  form: Z,
  header: F,
  error: G,
  title: M,
  subtitle: x,
  inputs: z,
  inputGroup: Y,
  label: q,
  inputWrapper: H,
  input: X,
  inputError: j,
  fieldError: K,
  eyeButton: Q,
  forgotPassword: $,
  submitButton: J,
  signupLink: ee,
};

export const Login = (se) => {
  const [o, g] = d("");
  const [i, C] = d("");
  const [u, y] = d(false);
  const [A, d] = d(false);
  const [h, t] = d(null);
  const [p, m] = d(null);
  const [I, f] = d("credentials");
  const { login: N, status: v, reset: E } = b_1();
  const l = v === "loading";

  const w = (a) => {
    a.preventDefault();
    t(null);
    m(null);

    if (!o.trim()) {
      t("Введите email");
      return;
    }

    if (!i.trim()) {
      t("Введите пароль");
      return;
    }
    d(true);
  };

  const L = q_1(
    async (a) => {
      d(false);
      try {
        if (
          (await N({ email: o, password: i, turnstileToken: a })) !==
          "authenticated"
        ) {
          f("verify");
        }
      } catch (c) {
        if (X_1(c)) {
          switch (c.code) {
            case Y_1.ACCOUNT_INVALID_CREDENTIALS: {
              t("Неверный email или пароль");
              break;
            }
            case Y_1.ACCOUNT_DEACTIVATED: {
              t("Аккаунт деактивирован");
              break;
            }
            case Y_1.ACCOUNT_TEMPORARILY_LOCKED: {
              t("Аккаунт временно заблокирован. Попробуйте позже");
              break;
            }
            case Y_1.CAPTCHA_FAILED: {
              t("Проверка captcha не пройдена. Попробуйте снова");
              break;
            }
            case Y_1.RATE_LIMIT_EXCEEDED: {
              t("Слишком много попыток. Попробуйте позже");
              break;
            }
            case Y_1.ACCOUNT_EMAIL_DOMAIN_NOT_ALLOWED: {
              m("Этот email домен не разрешён");
              break;
            }
            default: {
              t(c.message || "Ошибка входа");
            }
          }
        } else {
          t("Произошла ошибка. Попробуйте позже");
        }
      }
    },
    [o, i, N]
  );

  const k = q_1(() => {
    E();
    f("credentials");
  }, [E]);

  return u("div", {
    className: s.page,
    children: [
      u("div", {
        className: s.container,
        children: [
          u("div", { className: s.logo, children: u(I, {}) }),
          I === "credentials"
            ? u("form", {
                className: s.form,
                onSubmit: w,
                children: [
                  u("div", {
                    className: s.header,
                    children: [
                      u("h1", { className: s.title, children: "Вход" }),
                      u("p", {
                        className: s.subtitle,
                        children: "Пожалуйста, введите ваши данные",
                      }),
                    ],
                  }),
                  h && u("div", { className: s.error, children: h }),
                  u("div", {
                    className: s.inputs,
                    children: [
                      u("div", {
                        className: s.inputGroup,
                        children: [
                          u("label", {
                            className: s.label,
                            children: "E-Mail",
                          }),
                          u("input", {
                            type: "email",
                            className: `${s.input} ${p ? s.inputError : ""}`,
                            value: o,
                            onInput: (a) => {
                              g(a.target.value);
                              m(null);
                            },
                            placeholder: "ilya@gmail.com",
                            disabled: l,
                          }),
                          p &&
                            u("span", {
                              className: s.fieldError,
                              children: p,
                            }),
                        ],
                      }),
                      u("div", {
                        className: s.inputGroup,
                        children: [
                          u("label", {
                            className: s.label,
                            children: "Пароль",
                          }),
                          u("div", {
                            className: s.inputWrapper,
                            children: [
                              u("input", {
                                type: u ? "text" : "password",
                                className: s.input,
                                value: i,
                                onInput: (a) => C(a.target.value),
                                placeholder: "••••••••••••",
                                disabled: l,
                              }),
                              u("button", {
                                type: "button",
                                className: s.eyeButton,
                                onClick: () => y(!u),
                                children: u
                                  ? u(I_1, { size: 20 })
                                  : u(a, { size: 20 }),
                              }),
                            ],
                          }),
                          u("a", {
                            href: "/forgot-password",
                            className: s.forgotPassword,
                            children: "Забыли пароль?",
                          }),
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
                    disabled: l,
                    children: l ? "Вход..." : "Войти",
                  }),
                  u("p", {
                    className: s.signupLink,
                    children: [
                      "Еще нет аккаунта? ",
                      u("a", {
                        href: "/register",
                        children: "Создать аккаунт",
                      }),
                    ],
                  }),
                ],
              })
            : u(V_1, { email: o, onBack: k }),
        ],
      }),
      u(C, { isOpen: A, onClose: () => d(false), onVerify: L }),
    ],
  });
};

export { Login as Login, Login as default };
