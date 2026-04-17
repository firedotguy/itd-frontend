import { d, c, q as q_1, i, a8, a, I as B_1 } from "./index-BNG2MjJY.js";
import { C } from "./index-BBxKOu2w.js";
import { V as V_1 } from "./index-DG6vYOjg.js";
import { I } from "./IconBrand-nLDG7MIE.js";
import { I as I_1, a as a_1 } from "./IconEyeOff-DHTVaamG.js";
const V = "rxvI";
const G = "lMor";
const W = "a7My";
const x = "DXEM";
const R = "ZXkp";
const U = "uZY3";
const z = "rAFk";
const X = "tTkI";
const Z = "MRwq";
const q = "vx8X";
const F = "zyJQ";
const K = "j8xg";
const Y = "qtd3";
const $ = "blZM";
const j = "IgGG";
const H = "hPM8";
const J = "A1yW";
const Q = "pKbf";
const ee = "mUPZ";

const s = {
  page: V,
  container: G,
  logo: W,
  form: x,
  header: R,
  error: U,
  title: z,
  subtitle: X,
  inputs: Z,
  inputGroup: q,
  label: F,
  inputWrapper: K,
  input: Y,
  inputError: $,
  fieldError: j,
  eyeButton: H,
  forgotPassword: J,
  submitButton: Q,
  signupLink: ee,
};

export const Login = (se) => {
  const [n, g] = d("");
  const [i, C] = d("");
  const [p, y] = d(false);
  const [A, u] = d(false);
  const [h, t] = d(null);
  const [d, m] = d(null);
  const [I, f] = d("credentials");
  const { login: E, status: v, reset: N } = c();
  const l = v === "loading";

  const k = (a) => {
    a.preventDefault();
    t(null);
    m(null);

    if (!n.trim()) {
      t("Введите email");
      return;
    }

    if (!i.trim()) {
      t("Введите пароль");
      return;
    }
    u(true);
  };

  const w = q_1(
    async (a) => {
      u(false);
      try {
        if (
          (await E({ email: n, password: i, turnstileToken: a })) !==
          "authenticated"
        ) {
          f("verify");
        }
      } catch (c) {
        if (i(c)) {
          switch (c.code) {
            case a8.ACCOUNT_INVALID_CREDENTIALS: {
              t("Неверный email или пароль");
              break;
            }
            case a8.ACCOUNT_DEACTIVATED: {
              t("Аккаунт деактивирован");
              break;
            }
            case a8.ACCOUNT_TEMPORARILY_LOCKED: {
              t("Аккаунт временно заблокирован. Попробуйте позже");
              break;
            }
            case a8.CAPTCHA_FAILED: {
              t("Проверка captcha не пройдена. Попробуйте снова");
              break;
            }
            case a8.RATE_LIMIT_EXCEEDED: {
              t("Слишком много попыток. Попробуйте позже");
              break;
            }
            case a8.ACCOUNT_EMAIL_DOMAIN_NOT_ALLOWED: {
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
    [n, i, E]
  );

  const L = q_1(() => {
    N();
    f("credentials");
  }, [N]);

  return a("div", {
    className: s.page,
    children: [
      a("div", {
        className: s.container,
        children: [
          a("div", { className: s.logo, children: a(I, {}) }),
          I === "credentials"
            ? a("form", {
                className: s.form,
                onSubmit: k,
                children: [
                  a("div", {
                    className: s.header,
                    children: [
                      a("h1", { className: s.title, children: "Вход" }),
                      a("p", {
                        className: s.subtitle,
                        children: "Пожалуйста, введите ваши данные",
                      }),
                    ],
                  }),
                  h && a("div", { className: s.error, children: h }),
                  a("div", {
                    className: s.inputs,
                    children: [
                      a("div", {
                        className: s.inputGroup,
                        children: [
                          a("label", {
                            className: s.label,
                            children: "E-Mail",
                          }),
                          a("input", {
                            type: "email",
                            className: `${s.input} ${d ? s.inputError : ""}`,
                            value: n,
                            onInput: (a) => {
                              g(a.target.value);
                              m(null);
                            },
                            placeholder: "ilya@gmail.com",
                            disabled: l,
                          }),
                          d &&
                            a("span", {
                              className: s.fieldError,
                              children: d,
                            }),
                        ],
                      }),
                      a("div", {
                        className: s.inputGroup,
                        children: [
                          a("label", {
                            className: s.label,
                            children: "Пароль",
                          }),
                          a("div", {
                            className: s.inputWrapper,
                            children: [
                              a("input", {
                                type: p ? "text" : "password",
                                className: s.input,
                                value: i,
                                onInput: (a) => C(a.target.value),
                                placeholder: "••••••••••••",
                                disabled: l,
                              }),
                              a("button", {
                                type: "button",
                                className: s.eyeButton,
                                onClick: () => y(!p),
                                children: p
                                  ? a(I_1, { size: 20 })
                                  : a(a_1, { size: 20 }),
                              }),
                            ],
                          }),
                          a("a", {
                            href: "/forgot-password",
                            className: s.forgotPassword,
                            children: "Забыли пароль?",
                          }),
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
                    children: l ? "Вход..." : "Войти",
                  }),
                  a("p", {
                    className: s.signupLink,
                    children: [
                      "Еще нет аккаунта? ",
                      a("a", {
                        href: "/register",
                        children: "Создать аккаунт",
                      }),
                    ],
                  }),
                ],
              })
            : a(V_1, { email: n, onBack: L }),
        ],
      }),
      a(C, { isOpen: A, onClose: () => u(false), onVerify: w }),
    ],
  });
};

export { Login as Login, Login as default };
