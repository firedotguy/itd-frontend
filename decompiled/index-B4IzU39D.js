import {
  b,
  d,
  q,
  $,
  d as d_1,
  aa,
  q as q_1,
  M,
  B as B_1,
} from "./index-Bi0Sh8eD.js";
import { O } from "./index-DI_K67MG.js";
const k = "xc0lamdu";
const C = "_-2-rtzMk";
const v = "hP-JXKgZ";
const D = "t3E0JxaL";
const B = "QOfBRzdD";
const F = "m-cIN6M2";
const P = "_37W6YYBl";
const V = "bucV9ajy";
const U = "P5lNffnm";
const X = "Zg0Fw8yb";
const Z = "LmpmPLTF";

const a = {
  container: k,
  header: C,
  title: v,
  subtitle: D,
  error: B,
  success: F,
  backButton: P,
  expiredModal: V,
  expiredTitle: U,
  expiredText: X,
  expiredActions: Z,
};

function K({ email: w, onBack: l }) {
  const { verifyOtp: p, resendOtp: o } = b();
  const [m, t] = d(null);
  const [M, E] = d(false);
  const [I, c] = d(false);
  const [g, d] = d(false);
  const [x, b] = d(false);

  const S = (s) =>
    d_1(s)
      ? s.code === aa.MISSING_FLOW_TOKEN ||
        s.code === aa.UNAUTHORIZED ||
        (s.code === aa.BAD_REQUEST &&
          s.message?.toLowerCase().includes("flow token"))
      : false;

  const _ = q(
    async (s) => {
      t(null);
      E(true);
      try {
        const r = await p(s);

        if (r === "authenticated") {
          if (b.getState().status === "needs_profile") {
            $("/onboarding");
          } else {
            $("/");
          }
        } else if (r === "password_reset") {
          $("/reset-password");
        }
      } catch (r) {
        if (S(r)) {
          d(true);
        } else if (d_1(r)) {
          switch (r.code) {
            case aa.OTP_INVALID: {
              t("Неверный код. Попробуйте снова");
              break;
            }
            case aa.RATE_LIMIT_EXCEEDED: {
              t("Слишком много попыток. Попробуйте позже");
              break;
            }
            default: {
              t(r.message || "Ошибка проверки кода");
            }
          }
        } else {
          t("Произошла ошибка. Попробуйте позже");
        }
      } finally {
        E(false);
      }
    },
    [p]
  );

  const A = q(async () => {
    t(null);
    c(false);
    try {
      await o();
      c(true);

      setTimeout(() => c(false), 3000 /* 3e3 */);
    } catch (s) {
      if (d_1(s)) {
        if (s.code === aa.RATE_LIMIT_EXCEEDED) {
          t("Слишком много запросов. Попробуйте позже");
        } else {
          t(s.message || "Не удалось отправить код");
        }
      } else {
        t("Произошла ошибка. Попробуйте позже");
      }
    }
  }, [o]);

  const R = q(async () => {
    b(true);
    try {
      await o();
      d(false);
      c(true);

      setTimeout(() => c(false), 3000 /* 3e3 */);
    } catch (s) {
      d(false);

      if (d_1(s)) {
        t(s.message || "Не удалось отправить код");
      } else {
        t("Произошла ошибка. Попробуйте позже");
      }
    } finally {
      b(false);
    }
  }, [o]);

  const T = q(() => {
    d(false);
    l?.();
  }, [l]);

  return q_1("div", {
    className: a.container,
    children: [
      q_1("div", {
        className: a.header,
        children: [
          q_1("h1", { className: a.title, children: "Подтверждение действия" }),
          q_1("p", {
            className: a.subtitle,
            children: [
              "Мы отправили шестизначный код на почту ",
              w,
              ", чтобы убедиться, что вы – настоящий её владелец.",
            ],
          }),
        ],
      }),
      m && q_1("div", { className: a.error, children: m }),
      I &&
        q_1("div", {
          className: a.success,
          children: "Код отправлен повторно",
        }),
      q_1(O, { onSubmit: _, onResend: A, disabled: M }),
      l &&
        q_1("button", {
          type: "button",
          className: a.backButton,
          onClick: l,
          children: "Назад",
        }),
      g &&
        q_1(M, {
          onClose: T,
          showHeader: false,
          children: q_1("div", {
            className: a.expiredModal,
            children: [
              q_1("h2", {
                className: a.expiredTitle,
                children: "Время истекло",
              }),
              q_1("p", {
                className: a.expiredText,
                children:
                  "Прошло слишком много времени, и прошлый код больше не действителен. Отправить новый код?",
              }),
              q_1("div", {
                className: a.expiredActions,
                children: [
                  q_1(B_1, {
                    variant: "secondary",
                    onClick: T,
                    disabled: x,
                    children: "Нет, закрыть",
                  }),
                  q_1(B_1, {
                    onClick: R,
                    disabled: x,
                    children: "Да, отправить",
                  }),
                ],
              }),
            ],
          }),
        }),
    ],
  });
}
export { K as V };
