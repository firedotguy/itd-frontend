import {
  d as c_1,
  d,
  q as q_1,
  $,
  i,
  a8,
  a as a_1,
  M,
  B as B_1,
} from "./index-BNG2MjJY.js";
import { O } from "./index-BBxKOu2w.js";
const k = "Ey2f";
const v = "MzQd";
const D = "MO9q";
const L = "RTZD";
const q = "mNog";
const F = "wPeq";
const U = "U3F1";
const B = "b5mW";
const V = "XRIn";
const X = "fhl9";
const H = "iq57";

const a = {
  container: k,
  header: v,
  title: D,
  subtitle: L,
  error: q,
  success: F,
  backButton: U,
  expiredModal: B,
  expiredTitle: V,
  expiredText: X,
  expiredActions: H,
};

function Z({ email: y, onBack: l }) {
  const { verifyOtp: p, resendOtp: o } = c_1();
  const [m, t] = d(null);
  const [M, E] = d(false);
  const [I, i] = d(false);
  const [R, d] = d(false);
  const [x, b] = d(false);

  const S = (s) =>
    i(s)
      ? s.code === a8.MISSING_FLOW_TOKEN ||
        s.code === a8.UNAUTHORIZED ||
        (s.code === a8.BAD_REQUEST &&
          s.message?.toLowerCase().includes("flow token"))
      : false;

  const g = q_1(
    async (s) => {
      t(null);
      E(true);
      try {
        const r = await p(s);

        if (r === "authenticated") {
          if (c_1.getState().status === "needs_profile") {
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
        } else if (i(r)) {
          switch (r.code) {
            case a8.OTP_INVALID: {
              t("Неверный код. Попробуйте снова");
              break;
            }
            case a8.RATE_LIMIT_EXCEEDED: {
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

  const A = q_1(async () => {
    t(null);
    i(false);
    try {
      await o();
      i(true);

      setTimeout(() => i(false), 3000 /* 3e3 */);
    } catch (s) {
      if (i(s)) {
        if (s.code === a8.RATE_LIMIT_EXCEEDED) {
          t("Слишком много запросов. Попробуйте позже");
        } else {
          t(s.message || "Не удалось отправить код");
        }
      } else {
        t("Произошла ошибка. Попробуйте позже");
      }
    }
  }, [o]);

  const O = q_1(async () => {
    b(true);
    try {
      await o();
      d(false);
      i(true);

      setTimeout(() => i(false), 3000 /* 3e3 */);
    } catch (s) {
      d(false);

      if (i(s)) {
        t(s.message || "Не удалось отправить код");
      } else {
        t("Произошла ошибка. Попробуйте позже");
      }
    } finally {
      b(false);
    }
  }, [o]);

  const T = q_1(() => {
    d(false);
    l?.();
  }, [l]);

  return a_1("div", {
    className: a.container,
    children: [
      a_1("div", {
        className: a.header,
        children: [
          a_1("h1", { className: a.title, children: "Подтверждение действия" }),
          a_1("p", {
            className: a.subtitle,
            children: [
              "Мы отправили шестизначный код на почту ",
              y,
              ", чтобы убедиться, что вы – настоящий её владелец.",
            ],
          }),
        ],
      }),
      m && a_1("div", { className: a.error, children: m }),
      I &&
        a_1("div", {
          className: a.success,
          children: "Код отправлен повторно",
        }),
      a_1(O, { onSubmit: g, onResend: A, disabled: M }),
      l &&
        a_1("button", {
          type: "button",
          className: a.backButton,
          onClick: l,
          children: "Назад",
        }),
      R &&
        a_1(M, {
          onClose: T,
          showHeader: false,
          children: a_1("div", {
            className: a.expiredModal,
            children: [
              a_1("h2", {
                className: a.expiredTitle,
                children: "Время истекло",
              }),
              a_1("p", {
                className: a.expiredText,
                children:
                  "Прошло слишком много времени, и прошлый код больше не действителен. Отправить новый код?",
              }),
              a_1("div", {
                className: a.expiredActions,
                children: [
                  a_1(B_1, {
                    variant: "secondary",
                    onClick: T,
                    disabled: x,
                    children: "Нет, закрыть",
                  }),
                  a_1(B_1, {
                    onClick: O,
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
export { Z as V };
