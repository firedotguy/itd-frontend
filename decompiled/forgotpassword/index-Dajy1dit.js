import {
  d,
  C as q_1,
  b,
  a8 as i_1,
  a8,
  $,
  a,
  b as b_1,
} from "./index-BNG2MjJY.js";
import { O, C } from "./index-BBxKOu2w.js";
import { I } from "./IconBrand-nLDG7MIE.js";
import { I as I_1, a as a_1 } from "./IconEyeOff-DHTVaamG.js";
const Z = "zchi";
const j = "viEa";
const ee = "LsBV";
const se = "J04u";
const ae = "Wr7F";
const te = "dPsN";
const re = "z6Hk";
const le = "BL8r";
const ne = "CMVV";
const oe = "aoCV";
const ie = "oCXz";
const ce = "l4HR";
const ue = "lLyz";
const de = "YEcv";
const pe = "SQf6";
const me = "zgpB";
const he = "KmkL";
const fe = "hYnJ";
const be = "IwT4";
const Ne = "lw2S";

const s = {
  page: Z,
  container: j,
  logo: ee,
  form: se,
  header: ae,
  title: te,
  subtitle: re,
  error: le,
  inputs: ne,
  inputGroup: oe,
  label: ie,
  input: ce,
  inputWrapper: ue,
  inputError: de,
  fieldError: pe,
  eyeButton: me,
  success: he,
  backButton: fe,
  submitButton: be,
  backLink: Ne,
};

export const ForgotPassword = (Ee) => {
  const [l, M] = d("");
  const [f, V] = d("");
  const [O, P] = d("");
  const [u, a] = d(null);
  const [w, b] = d(null);
  const [v, c] = d(null);
  const [d, N] = d(false);
  const [W, y] = d(false);
  const [m, p] = d("email");
  const [n, S] = d("");
  const [k, _] = d("");
  const [C, $] = d(false);
  const [I, F] = d(false);
  const [g, E] = d(null);
  const [x, T] = d(false);

  const G = (t) => {
    t.preventDefault();
    a(null);
    b(null);

    if (!l.trim()) {
      b("Введите email");
      return;
    }

    y(true);
  };

  const H = q_1(
    async (t) => {
      y(false);
      N(true);
      try {
        const o = await b.forgotPassword({ email: l, turnstileToken: t });
        V(o.flowToken ?? "");
        p("otp");
      } catch (o) {
        if (i_1(o)) {
          switch (o.code) {
            case a8.ENTITY_NOT_FOUND: {
              b("Аккаунт с таким email не найден");
              break;
            }
            case a8.CAPTCHA_FAILED: {
              a("Проверка captcha не пройдена. Попробуйте снова");
              break;
            }
            case a8.RATE_LIMIT_EXCEEDED: {
              a("Слишком много попыток. Попробуйте позже");
              break;
            }
            default: {
              a(o.message || "Произошла ошибка");
            }
          }
        } else {
          a("Произошла ошибка. Попробуйте позже");
        }
      } finally {
        N(false);
      }
    },
    [l]
  );

  const X = q_1((t) => {
    P(t);
    a(null);
    p("password");
  }, []);

  const U = q_1(
    async (t) => {
      t.preventDefault();
      a(null);
      c(null);
      E(null);

      if (!n.trim()) {
        c("Введите новый пароль");
        return;
      }

      if (n.length < 10) {
        c("Минимум 10 символов");
        return;
      }
      if (n.length > 128) {
        c("Максимум 128 символов");
        return;
      }
      if (!/^[\x21-\x7E]+$/.test(n)) {
        c("Только латиница, цифры и знаки пунктуации");
        return;
      }
      if (n !== k) {
        E("Пароли не совпадают");
        return;
      }
      N(true);
      try {
        await b.resetPassword({
          email: l,
          flowToken: f,
          otp: O,
          newPassword: n,
        });

        $("/login");
      } catch (o) {
        if (i_1(o)) {
          switch (o.code) {
            case a8.OTP_INVALID: {
              a("Неверный код. Попробуйте снова");
              p("otp");
              P("");
              break;
            }
            case a8.MISSING_FLOW_TOKEN:
            case a8.UNAUTHORIZED: {
              a("Сессия истекла. Начните заново");
              p("email");
              break;
            }
            case a8.RATE_LIMIT_EXCEEDED: {
              a("Слишком много попыток. Попробуйте позже");
              break;
            }
            case a8.VALIDATION_ERROR: {
              c("Пароль не соответствует требованиям");
              break;
            }
            default: {
              a(o.message || "Произошла ошибка");
            }
          }
        } else {
          a("Произошла ошибка. Попробуйте позже");
        }
      } finally {
        N(false);
      }
    },
    [l, f, O, n, k]
  );

  const Y = q_1(async () => {
    a(null);
    T(false);
    try {
      await b.resendOtp({ email: l, flowToken: f });
      T(true);

      setTimeout(() => T(false), 3000 /* 3e3 */);
    } catch (t) {
      if (i_1(t)) {
        if (t.code === a8.RATE_LIMIT_EXCEEDED) {
          a("Слишком много запросов. Попробуйте позже");
        } else {
          a(t.message || "Не удалось отправить код");
        }
      } else {
        a("Произошла ошибка. Попробуйте позже");
      }
    }
  }, [l, f]);

  const A = q_1(() => {
    a(null);

    if (m === "password") {
      c(null);
      E(null);
      S("");
      _("");
      p("otp");
    } else {
      p("email");
    }
  }, [m]);

  return a("div", {
    className: s.page,
    children: [
      a("div", {
        className: s.container,
        children: [
          a("div", { className: s.logo, children: a(I, {}) }),
          m === "email" &&
            a("form", {
              className: s.form,
              onSubmit: G,
              children: [
                a("div", {
                  className: s.header,
                  children: [
                    a("h1", {
                      className: s.title,
                      children: "Забыли пароль?",
                    }),
                    a("p", {
                      className: s.subtitle,
                      children: "Введите ваш E-Mail для восстановления",
                    }),
                  ],
                }),
                u && a("div", { className: s.error, children: u }),
                a("div", {
                  className: s.inputs,
                  children: a("div", {
                    className: s.inputGroup,
                    children: [
                      a("label", { className: s.label, children: "E-Mail" }),
                      a("input", {
                        type: "email",
                        className: `${s.input} ${w ? s.inputError : ""}`,
                        value: l,
                        onInput: (t) => {
                          M(t.target.value);
                          b(null);
                        },
                        placeholder: "ilya@gmail.com",
                        disabled: d,
                      }),
                      w && a("span", { className: s.fieldError, children: w }),
                    ],
                  }),
                }),
                a(b_1, {
                  type: "submit",
                  variant: "primary",
                  size: "lg",
                  fullWidth: true,
                  className: s.submitButton,
                  disabled: d,
                  children: d ? "Отправка..." : "Отправить",
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
          m === "otp" &&
            a("div", {
              className: s.form,
              children: [
                a("div", {
                  className: s.header,
                  children: [
                    a("h1", { className: s.title, children: "Введите код" }),
                    a("p", {
                      className: s.subtitle,
                      children: ["Мы отправили шестизначный код на ", l],
                    }),
                  ],
                }),
                u && a("div", { className: s.error, children: u }),
                x &&
                  a("div", {
                    className: s.success,
                    children: "Код отправлен повторно",
                  }),
                a(O, {
                  onSubmit: X,
                  onResend: Y,
                  disabled: d,
                  buttonText: "Продолжить",
                }),
                a("button", {
                  type: "button",
                  className: s.backButton,
                  onClick: A,
                  children: "Назад",
                }),
              ],
            }),
          m === "password" &&
            a("form", {
              className: s.form,
              onSubmit: U,
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
                u && a("div", { className: s.error, children: u }),
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
                              type: C ? "text" : "password",
                              className: `${s.input} ${v ? s.inputError : ""}`,
                              value: n,
                              onInput: (t) => {
                                S(t.target.value);
                                c(null);
                              },
                              placeholder: "Минимум 10 символов",
                              autoComplete: "new-password",
                              autoFocus: true,
                            }),
                            a("button", {
                              type: "button",
                              className: s.eyeButton,
                              onClick: () => $(!C),
                              children: C
                                ? a(I_1, { size: 20 })
                                : a(a_1, { size: 20 }),
                            }),
                          ],
                        }),
                        v &&
                          a("span", { className: s.fieldError, children: v }),
                      ],
                    }),
                    a("div", {
                      className: s.inputGroup,
                      children: [
                        a("label", {
                          className: s.label,
                          children: "Повторите пароль",
                        }),
                        a("div", {
                          className: s.inputWrapper,
                          children: [
                            a("input", {
                              type: I ? "text" : "password",
                              className: `${s.input} ${g ? s.inputError : ""}`,
                              value: k,
                              onInput: (t) => {
                                _(t.target.value);
                                E(null);
                              },
                              placeholder: "Повторите пароль",
                              autoComplete: "new-password",
                            }),
                            a("button", {
                              type: "button",
                              className: s.eyeButton,
                              onClick: () => F(!I),
                              children: I
                                ? a(I_1, { size: 20 })
                                : a(a_1, { size: 20 }),
                            }),
                          ],
                        }),
                        g &&
                          a("span", { className: s.fieldError, children: g }),
                      ],
                    }),
                  ],
                }),
                a(b_1, {
                  type: "submit",
                  variant: "primary",
                  size: "lg",
                  fullWidth: true,
                  className: s.submitButton,
                  disabled: d || !n.trim(),
                  children: d ? "Сброс..." : "Сбросить пароль",
                }),
                a("button", {
                  type: "button",
                  className: s.backButton,
                  onClick: A,
                  children: "Назад",
                }),
              ],
            }),
        ],
      }),
      a(C, { isOpen: W, onClose: () => y(false), onVerify: H }),
    ],
  });
};

export { ForgotPassword as ForgotPassword, ForgotPassword as default };
