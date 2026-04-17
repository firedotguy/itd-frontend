import {
  a,
  d as d_1,
  A,
  c,
  aa as q_1,
  a9,
  B,
  aa,
  k,
  p,
  $,
  i,
  a8,
} from "./index-BNG2MjJY.js";

const ae = "XXR0";
const se = "SXeu";
const ne = "Gam4";
const ie = "eHGn";
const le = "vHxC";
const d = { stepper: ae, track: se, progress: ne, step: ie, active: le };
function oe({ steps: k, currentStep: l, onStepClick: i, className: c }) {
  const y = ((l - 1) / (k - 1)) * 100;
  return a("div", {
    className: `${d.stepper} ${c || ""}`,
    children: [
      a("div", {
        className: d.track,
        children: a("div", {
          className: d.progress,
          style: { width: `${y}%` },
        }),
      }),
      Array.from({ length: k }, (n, E) => E + 1).map((n) =>
        a(
          "button",
          {
            type: "button",
            className: `${d.step} ${l >= n ? d.active : ""}`,
            onClick: () => i?.(n),
            children: n,
          },
          n
        )
      ),
    ],
  });
}
const ce = "elwt";
const me = "YXSR";
const ue = "o6Sz";
const pe = "OWLN";
const de = "pTFJ";
const he = "GDrX";
const fe = "jJIM";
const ve = "WtoQ";
const Ne = "TXb8";
const ge = "yeuv";
const be = "IC1Q";
const ke = "O1Ua";
const ye = "DuRL";
const Ee = "it0G";
const Pe = "KlCu";
const Se = "rRXL";
const $e = "bT0s";
const Ce = "kx8m";
const je = "SPAI";
const Be = "XTFE";
const _e = "sjgh";
const Ae = "BnRs";

const t = {
  page: ce,
  container: me,
  header: ue,
  title: pe,
  subtitle: de,
  stepper: he,
  form: fe,
  error: ve,
  inputGroup: Ne,
  label: ge,
  hint: be,
  input: ke,
  inputError: ye,
  fieldError: Ee,
  avatarSection: Pe,
  avatarPicker: Se,
  avatar: $e,
  avatarEmpty: Ce,
  avatarHint: je,
  emojiPickerPortal: Be,
  emojiPickerBackdrop: _e,
  submitButton: Ae,
};

export const Onboarding = (k) => {
  const [l, i] = d_1(1);
  const [c, y] = d_1("");
  const [n, E] = d_1("");
  const [m, X] = d_1(null);
  const [A, u] = d_1(null);
  const [P, h] = d_1(null);
  const [f, p] = d_1(null);
  const [w, U] = d_1(false);
  const [x, L] = d_1(false);
  const [G, v] = d_1(false);
  const [N, H] = d_1(null);
  const S = A(null);
  const { createProfile: O } = c();

  const R = (r) =>
    r
      ? r.length < 3
        ? "Минимум 3 символа"
        : r.length > 50
        ? "Максимум 50 символов"
        : /^[a-zA-Z0-9_]+$/.test(r)
        ? /^[0-9_]/.test(r)
          ? "Не может начинаться с цифры или _"
          : /_$/.test(r)
          ? "Не может заканчиваться на _"
          : /__/.test(r)
          ? "Не может содержать два _ подряд"
          : null
        : "Только латиница, цифры и _"
      : "Введите username";

  const W = async (r) => {
    r.preventDefault();
    u(null);
    h(null);
    p(null);
    const a = c.trim();
    const o = n.trim();
    if (!a) {
      h("Введите имя");
      return;
    }
    if (a.length < 2) {
      h("Имя должно быть не менее 2 символов");
      return;
    }
    const g = R(o);
    if (g) {
      p(g);
      return;
    }
    L(true);
    try {
      if (!(await p.checkUsername(o))) {
        p("Этот username уже занят");
        return;
      }
      i(2);
    } catch (b) {
      console.error("Failed to check username:", b);
      i(2);
    } finally {
      L(false);
    }
  };

  const z = async (r) => {
    r.preventDefault();

    if (!!m) {
      u(null);
      U(true);
      try {
        await O({ displayName: c.trim(), username: n.trim(), avatar: m });
        $("/");
      } catch (a) {
        console.error("Profile creation error:", a);

        if (i(a)) {
          if (a.code === a8.PROFILE_USERNAME_TAKEN) {
            i(1);
            p("Этот username уже занят");
          } else {
            u(a.message || "Ошибка создания профиля");
          }
        } else {
          u("Произошла ошибка. Попробуйте позже");
        }
      } finally {
        U(false);
      }
    }
  };

  const D = () => {
    i(1);
    u(null);
  };

  const F = (r) => {
    if (r === 1) {
      i(1);
      u(null);
    } else if (r === 2 && l === 1) {
      const a = c.trim();
      const o = n.trim();
      if (
        !a ||
        a.length < 2 ||
        a.length < 2 ||
        R(o) ||
        a.length < 2 ||
        R(o) ||
        f
      ) {
        return;
      }
      i(2);
    }
  };

  const T = q_1((r) => {
    X(r.emoji);
    v(false);
  }, []);

  const J = q_1(() => {
    if (!S.current) {
      return;
    }
    const r = S.current.getBoundingClientRect();
    const a = 280;
    const o = 380;
    const g = window.innerWidth - r.right;
    const b = r.left;
    const K = window.innerHeight - r.bottom;
    let $;
    let C;
    let j;
    let B;

    if (K >= o + 8) {
      $ = r.bottom + 8;
      j = "top";
    } else {
      $ = r.top - o - 8;
      j = "bottom";
    }

    if (b > g) {
      C = r.right - a;
      B = "right";
    } else {
      C = r.left;
      B = "left";
    }

    H({ top: $, left: C, transformOrigin: `${j} ${B}` });
    v(true);
  }, []);

  return a(k, {
    children: [
      a("div", {
        className: t.page,
        children: a("div", {
          className: t.container,
          children: [
            a("div", {
              className: t.header,
              children: [
                a("h1", {
                  className: t.title,
                  children: "Настройка профиля",
                }),
                a("p", {
                  className: t.subtitle,
                  children: "Пожалуйста, укажите данные профиля",
                }),
              ],
            }),
            a(oe, {
              steps: 2,
              currentStep: l,
              onStepClick: F,
              className: t.stepper,
            }),
            A && a("div", { className: t.error, children: A }),
            l === 1 &&
              a("form", {
                className: t.form,
                onSubmit: W,
                children: [
                  a("div", {
                    className: t.inputGroup,
                    children: [
                      a("label", { className: t.label, children: "Имя" }),
                      a("p", {
                        className: t.hint,
                        children: "Как тебя будут видеть другие пользователи",
                      }),
                      a("input", {
                        type: "text",
                        className: `${t.input} ${P ? t.inputError : ""}`,
                        value: c,
                        onInput: (r) => {
                          y(r.target.value);
                          h(null);
                        },
                        placeholder: "Иван Иванов",
                        maxLength: 50,
                      }),
                      P && a("span", { className: t.fieldError, children: P }),
                    ],
                  }),
                  a("div", {
                    className: t.inputGroup,
                    children: [
                      a("label", {
                        className: t.label,
                        children: "Username",
                      }),
                      a("p", {
                        className: t.hint,
                        children:
                          'Уникальный никнейм для твоего профиля (латиница, цифры, и "_")',
                      }),
                      a("input", {
                        type: "text",
                        className: `${t.input} ${f ? t.inputError : ""}`,
                        value: n,
                        onInput: (r) => {
                          E(r.target.value.toLowerCase());
                          p(null);
                        },
                        placeholder: "ivanov1998",
                        maxLength: 50,
                      }),
                      f && a("span", { className: t.fieldError, children: f }),
                    ],
                  }),
                  a(B, {
                    type: "submit",
                    variant: "primary",
                    size: "lg",
                    fullWidth: true,
                    className: t.submitButton,
                    disabled: x,
                    children: x ? "Проверка..." : "Продолжить",
                  }),
                ],
              }),
            l === 2 &&
              a("form", {
                className: t.form,
                onSubmit: z,
                children: [
                  a("div", {
                    className: t.avatarSection,
                    children: [
                      a("label", {
                        className: t.label,
                        children: "Эмоджи-клан",
                      }),
                      a("p", {
                        className: t.hint,
                        children:
                          "Поменять его позже - нельзя. Выбрав эмоджи, ты вступаешь в клан с теми же, у кого такой же!",
                      }),
                      a("div", {
                        className: t.avatarPicker,
                        children: [
                          a("div", {
                            ref: S,
                            className: `${t.avatar} ${m ? "" : t.avatarEmpty}`,
                            onClick: J,
                            children: m || "?",
                          }),
                          a("span", {
                            className: t.avatarHint,
                            children: m
                              ? "Нажми чтобы изменить"
                              : "Нажми чтобы выбрать",
                          }),
                        ],
                      }),
                    ],
                  }),
                  a(B, {
                    type: "button",
                    variant: "secondary",
                    size: "lg",
                    fullWidth: true,
                    onClick: D,
                    disabled: w,
                    children: "Назад",
                  }),
                  a(B, {
                    type: "submit",
                    variant: "primary",
                    size: "lg",
                    fullWidth: true,
                    className: t.submitButton,
                    disabled: w || !m,
                    children: "Завершить",
                  }),
                ],
              }),
          ],
        }),
      }),
      G &&
        N &&
        a9(
          a("div", {
            className: t.emojiPickerPortal,
            style: {
              position: "fixed",
              top: N.top,
              left: N.left,
              zIndex: 1000 /* 1e3 */,
              transformOrigin: N.transformOrigin,
            },
            children: [
              a("div", {
                className: t.emojiPickerBackdrop,
                onClick: () => v(false),
              }),
              a(aa, {
                onEmojiSelect: T,
                onClose: () => v(false),
                excludeCategories: ["Flags"],
              }),
            ],
          }),
          document.body
        ),
    ],
  });
};

export { Onboarding as Onboarding, Onboarding as default };
