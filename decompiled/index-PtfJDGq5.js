import { d, A, y, u, B, k, M } from "./index-l7r8kpkZ.js";
const K = "cXHFiYQv";
const P = "sBtkK49F";
const $ = "rF-V8nmG";
const S = "PAoOcsDi";
const z = "gnagFaYr";
const H = "InvrM4rr";
const O = "PRXm4r4u";
const j = "voYrBy5F";
const J = "tkYLykoI";
const U = "lMYxskJL";

const c = {
  form: K,
  inputGroup: P,
  label: $,
  codeInputs: S,
  codeInput: z,
  error: H,
  errorText: O,
  submitButton: j,
  resendLink: J,
  resendButton: U,
};

const W = ({
  label: i = "Код с почты",
  error: o,
  buttonText: d = "Продолжить",
  resendText: p = "Отправить код повторно",
  countdownText: u = (a) => `Получить новый код через ${a}с`,
  countdownDuration: l = 90,
  onSubmit: m,
  onResend: h,
  disabled: s = false,
}) => {
  const [a, k] = d(["", "", "", "", "", ""]);
  const [y, g] = d(l);
  const [B, v] = d(false);
  const f = A([]);

  y(() => {
    f.current[0]?.focus();
  }, []);

  y(() => {
    if (y > 0) {
      const t = setTimeout(() => g(y - 1), 1000 /* 1e3 */);
      return () => clearTimeout(t);
    } else {
      v(true);
    }
  }, [y]);

  const T = (t, e) => {
    if (!/^\d*$/.test(e)) {
      return;
    }
    const r = [...a];
    r[t] = e.slice(-1);
    k(r);

    if (e && t < 5) {
      f.current[t + 1]?.focus();
    }
  };

  const R = (t, e) => {
    if (e.key === "Backspace" && !a[t] && t > 0) {
      f.current[t - 1]?.focus();
    }
  };

  const D = (t) => {
    t.preventDefault();

    const r = (t.clipboardData?.getData("text") || "")
      .replace(/\D/g, "")
      .slice(0, 6)
      .split("");

    const C = [...a];

    r.forEach((Y, N) => {
      if (N < 6) {
        C[N] = Y;
      }
    });

    k(C);
    const M = Math.min(r.length, 5);
    f.current[M]?.focus();
  };

  const L = (t) => {
    t.preventDefault();
    const e = a.join("");
    m?.(e);
  };

  const A = () => {
    if (B) {
      h?.();
      g(l);
      v(false);
    }
  };

  const x = a.every((t) => t !== "");

  return u("form", {
    className: c.form,
    onSubmit: L,
    children: [
      u("div", {
        className: c.inputGroup,
        children: [
          u("label", { className: c.label, children: i }),
          u("div", {
            className: c.codeInputs,
            children: a.map((t, e) =>
              u(
                "input",
                {
                  ref: (r) => {
                    f.current[e] = r;
                  },
                  type: "text",
                  inputMode: "numeric",
                  pattern: "[0-9]*",
                  className: `${c.codeInput} ${o ? c.error : ""}`,
                  value: t,
                  onInput: (r) => T(e, r.target.value),
                  onKeyDown: (r) => R(e, r),
                  onPaste: D,
                  maxLength: 1,
                  disabled: s,
                },
                e
              )
            ),
          }),
          o && u("p", { className: c.errorText, children: o }),
        ],
      }),
      u(B, {
        type: "submit",
        variant: "primary",
        size: "lg",
        fullWidth: true,
        className: c.submitButton,
        disabled: !x || s,
        children: d,
      }),
      u("p", {
        className: c.resendLink,
        children: B
          ? u("button", {
              type: "button",
              className: c.resendButton,
              onClick: A,
              disabled: s,
              children: p,
            })
          : u(k, { children: u(y) }),
      }),
    ],
  });
};

const V = "0x4AAAAAACHhxczw6fJGwPBg";
function X({ onVerify: i, onExpire: o, onError: d, theme: p = "auto" }) {
  const u = A(null);
  const l = A(null);
  const [m, h] = d(false);

  y(() => {
    window.onTurnstileLoad = () => {
      h(true);
    };

    if (document.getElementById("cf-turnstile-script")) {
      if (window.turnstile) {
        h(true);
      }
    } else {
      const s = document.createElement("script");
      s.id = "cf-turnstile-script";
      s.src =
        "https://challenges.cloudflare.com/turnstile/v0/api.js?onload=onTurnstileLoad";
      s.async = true;
      s.defer = true;
      document.head.appendChild(s);
    }

    return () => {
      if (l.current && window.turnstile) {
        window.turnstile.remove(l.current);
        l.current = null;
      }
    };
  }, []);

  y(() => {
    if (!m || !u.current || !u.current || l.current) {
      return;
    }
    const s = window.turnstile;

    if (s) {
      l.current = s.render(u.current, {
        sitekey: V,
        theme: p,
        callback: i,
        "expired-callback": o,
        "error-callback": d,
      });
    }
  }, [m, i, o, d, p]);

  return u("div", {
    style: { display: "flex", width: "300px", height: "65px" },
    ref: u,
  });
}
const _ = "_7p-zmUKq";
const q = { modal: _ };

export function C({ isOpen: i, onClose: o, onVerify: d }) {
  if (!i) {
    return null;
  }
  const p = (u) => {
    d(u);
    o();
  };
  return u(M, {
    onClose: o,
    showHeader: false,
    className: q.modal,
    frameless: true,
    children: u(X, { onVerify: p, onError: () => {} }),
  });
}

export { C as C, W as O };
