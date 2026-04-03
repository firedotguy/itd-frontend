import {
  u as u_1,
  d,
  A,
  b,
  q,
  ac,
  B,
  ad,
  k,
  p,
  $,
  i,
  aa,
} from "./index-Bi0Sh8eD.js";

const ae = "A7QUMP5L";
const ne = "pGvEOTxS";
const se = "-nsFX-HU";
const ie = "-vCwS0R-";
const le = "xB1BkbmH";
const u = { stepper: ae, track: ne, progress: se, step: ie, active: le };
function oe({ steps: k, currentStep: l, onStepClick: i, className: c }) {
  const E = ((l - 1) / (k - 1)) * 100;
  return u_1("div", {
    className: `${u.stepper} ${c || ""}`,
    children: [
      u_1("div", {
        className: u.track,
        children: u_1("div", {
          className: u.progress,
          style: { width: `${E}%` },
        }),
      }),
      Array.from({ length: k }, (s, y) => y + 1).map((s) =>
        u_1(
          "button",
          {
            type: "button",
            className: `${u.step} ${l >= s ? u.active : ""}`,
            onClick: () => i?.(s),
            children: s,
          },
          s
        )
      ),
    ],
  });
}
const ce = "nj86MwK9";
const me = "uCvgEFWz";
const pe = "saAqedCJ";
const de = "OA7KKel8";
const ue = "Fn0kAL0x";
const he = "jUT7s-Cp";
const fe = "_0eUUh7Kp";
const ve = "AS-ICavZ";
const Ne = "T4mWmFxa";
const ge = "inzg3byq";
const be = "zp-ROfQn";
const ke = "BUdDKKI6";
const Ee = "O0iYFET2";
const ye = "SUqfH6Oo";
const Pe = "_0bd-NjD0";
const Se = "_3EeTqA7h";
const $e = "wR6EKCp0";
const Ce = "VnQgrcVm";
const Ae = "mh9nzH3y";
const _e = "W2aJyl5M";
const Ue = "x7yWR5rt";
const je = "_-5ZF1lMm";

const t = {
  page: ce,
  container: me,
  header: pe,
  title: de,
  subtitle: ue,
  stepper: he,
  form: fe,
  error: ve,
  inputGroup: Ne,
  label: ge,
  hint: be,
  input: ke,
  inputError: Ee,
  fieldError: ye,
  avatarSection: Pe,
  avatarPicker: Se,
  avatar: $e,
  avatarEmpty: Ce,
  avatarHint: Ae,
  emojiPickerPortal: _e,
  emojiPickerBackdrop: Ue,
  submitButton: je,
};

export const Onboarding = (k) => {
  const [l, i] = d(1);
  const [c, E] = d("");
  const [s, y] = d("");
  const [m, H] = d(null);
  const [j, p] = d(null);
  const [P, h] = d(null);
  const [f, d] = d(null);
  const [B, w] = d(false);
  const [x, F] = d(false);
  const [L, v] = d(false);
  const [N, R] = d(null);
  const S = A(null);
  const { createProfile: W } = b();

  const O = (r) =>
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

  const I = async (r) => {
    r.preventDefault();
    p(null);
    h(null);
    d(null);
    const a = c.trim();
    const o = s.trim();
    if (!a) {
      h("Введите имя");
      return;
    }
    if (a.length < 2) {
      h("Имя должно быть не менее 2 символов");
      return;
    }
    const g = O(o);
    if (g) {
      d(g);
      return;
    }
    F(true);
    try {
      if (!(await p.checkUsername(o))) {
        d("Этот username уже занят");
        return;
      }
      i(2);
    } catch (b) {
      console.error("Failed to check username:", b);
      i(2);
    } finally {
      F(false);
    }
  };

  const K = async (r) => {
    r.preventDefault();

    if (!!m) {
      p(null);
      w(true);
      try {
        await W({ displayName: c.trim(), username: s.trim(), avatar: m });
        $("/");
      } catch (a) {
        console.error("Profile creation error:", a);

        if (i(a)) {
          if (a.code === aa.PROFILE_USERNAME_TAKEN) {
            i(1);
            d("Этот username уже занят");
          } else {
            p(a.message || "Ошибка создания профиля");
          }
        } else {
          p("Произошла ошибка. Попробуйте позже");
        }
      } finally {
        w(false);
      }
    }
  };

  const D = () => {
    i(1);
    p(null);
  };

  const T = (r) => {
    if (r === 1) {
      i(1);
      p(null);
    } else if (r === 2 && l === 1) {
      const a = c.trim();
      const o = s.trim();
      if (
        !a ||
        a.length < 2 ||
        a.length < 2 ||
        O(o) ||
        a.length < 2 ||
        O(o) ||
        f
      ) {
        return;
      }
      i(2);
    }
  };

  const q = q((r) => {
    H(r.emoji);
    v(false);
  }, []);

  const G = q(() => {
    if (!S.current) {
      return;
    }
    const r = S.current.getBoundingClientRect();
    const a = 280;
    const o = 380;
    const g = window.innerWidth - r.right;
    const b = r.left;
    const M = window.innerHeight - r.bottom;
    let $;
    let C;
    let A;
    let _;

    if (M >= o + 8) {
      $ = r.bottom + 8;
      A = "top";
    } else {
      $ = r.top - o - 8;
      A = "bottom";
    }

    if (b > g) {
      C = r.right - a;
      _ = "right";
    } else {
      C = r.left;
      _ = "left";
    }

    R({ top: $, left: C, transformOrigin: `${A} ${_}` });
    v(true);
  }, []);

  return u_1(k, {
    children: [
      u_1("div", {
        className: t.page,
        children: u_1("div", {
          className: t.container,
          children: [
            u_1("div", {
              className: t.header,
              children: [
                u_1("h1", {
                  className: t.title,
                  children: "Настройка профиля",
                }),
                u_1("p", {
                  className: t.subtitle,
                  children: "Пожалуйста, укажите данные профиля",
                }),
              ],
            }),
            u_1(oe, {
              steps: 2,
              currentStep: l,
              onStepClick: T,
              className: t.stepper,
            }),
            j && u_1("div", { className: t.error, children: j }),
            l === 1 &&
              u_1("form", {
                className: t.form,
                onSubmit: I,
                children: [
                  u_1("div", {
                    className: t.inputGroup,
                    children: [
                      u_1("label", { className: t.label, children: "Имя" }),
                      u_1("p", {
                        className: t.hint,
                        children: "Как тебя будут видеть другие пользователи",
                      }),
                      u_1("input", {
                        type: "text",
                        className: `${t.input} ${P ? t.inputError : ""}`,
                        value: c,
                        onInput: (r) => {
                          E(r.target.value);
                          h(null);
                        },
                        placeholder: "Иван Иванов",
                        maxLength: 50,
                      }),
                      P &&
                        u_1("span", { className: t.fieldError, children: P }),
                    ],
                  }),
                  u_1("div", {
                    className: t.inputGroup,
                    children: [
                      u_1("label", {
                        className: t.label,
                        children: "Username",
                      }),
                      u_1("p", {
                        className: t.hint,
                        children:
                          'Уникальный никнейм для твоего профиля (латиница, цифры, и "_")',
                      }),
                      u_1("input", {
                        type: "text",
                        className: `${t.input} ${f ? t.inputError : ""}`,
                        value: s,
                        onInput: (r) => {
                          y(r.target.value.toLowerCase());
                          d(null);
                        },
                        placeholder: "ivanov1998",
                        maxLength: 50,
                      }),
                      f &&
                        u_1("span", { className: t.fieldError, children: f }),
                    ],
                  }),
                  u_1(B, {
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
              u_1("form", {
                className: t.form,
                onSubmit: K,
                children: [
                  u_1("div", {
                    className: t.avatarSection,
                    children: [
                      u_1("label", {
                        className: t.label,
                        children: "Эмоджи-клан",
                      }),
                      u_1("p", {
                        className: t.hint,
                        children:
                          "Поменять его позже - нельзя. Выбрав эмоджи, ты вступаешь в клан с теми же, у кого такой же!",
                      }),
                      u_1("div", {
                        className: t.avatarPicker,
                        children: [
                          u_1("div", {
                            ref: S,
                            className: `${t.avatar} ${m ? "" : t.avatarEmpty}`,
                            onClick: G,
                            children: m || "?",
                          }),
                          u_1("span", {
                            className: t.avatarHint,
                            children: m
                              ? "Нажми чтобы изменить"
                              : "Нажми чтобы выбрать",
                          }),
                        ],
                      }),
                    ],
                  }),
                  u_1(B, {
                    type: "button",
                    variant: "secondary",
                    size: "lg",
                    fullWidth: true,
                    onClick: D,
                    disabled: B,
                    children: "Назад",
                  }),
                  u_1(B, {
                    type: "submit",
                    variant: "primary",
                    size: "lg",
                    fullWidth: true,
                    className: t.submitButton,
                    disabled: B || !m,
                    children: "Завершить",
                  }),
                ],
              }),
          ],
        }),
      }),
      L &&
        N &&
        ac(
          u_1("div", {
            className: t.emojiPickerPortal,
            style: {
              position: "fixed",
              top: N.top,
              left: N.left,
              zIndex: 1000 /* 1e3 */,
              transformOrigin: N.transformOrigin,
            },
            children: [
              u_1("div", {
                className: t.emojiPickerBackdrop,
                onClick: () => v(false),
              }),
              u_1(ad, {
                onEmojiSelect: q,
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
