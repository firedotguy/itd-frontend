import { d, A, d as d_1, a, B, k, B as B_1 } from "./index-BNG2MjJY.js";
const S = "L6Ln";
const K = "ovIP";
const O = "VLie";
const j = "B3Nt";
const z = "wtfO";
const H = "ce3i";
const V = "kc0o";
const J = "wpTp";
const Q = "AZTo";
const U = "RQgG";

const c = {
  form: S,
  inputGroup: K,
  label: O,
  codeInputs: j,
  codeInput: z,
  error: H,
  errorText: V,
  submitButton: J,
  resendLink: Q,
  resendButton: U,
};

const F = ({
  label: i = "Код с почты",
  error: o,
  buttonText: d = "Продолжить",
  resendText: p = "Отправить код повторно",
  countdownText: u = (l) => `Получить новый код через ${l}с`,
  countdownDuration: a = 90,
  onSubmit: m,
  onResend: h,
  disabled: s = false,
}) => {
  const [l, g] = d(["", "", "", "", "", ""]);
  const [w, T] = d(a);
  const [k, B] = d(false);
  const f = A([]);

  d_1(() => {
    f.current[0]?.focus();
  }, []);

  d_1(() => {
    if (w > 0) {
      const e = setTimeout(() => T(w - 1), 1000 /* 1e3 */);
      return () => clearTimeout(e);
    } else {
      B(true);
    }
  }, [w]);

  const v = (e, t) => {
    if (!/^\d*$/.test(t)) {
      return;
    }
    const r = [...l];
    r[e] = t.slice(-1);
    g(r);

    if (t && e < 5) {
      f.current[e + 1]?.focus();
    }
  };

  const L = (e, t) => {
    if (t.key === "Backspace" && !l[e] && e > 0) {
      f.current[e - 1]?.focus();
    }
  };

  const R = (e) => {
    e.preventDefault();

    const r = (e.clipboardData?.getData("text") || "")
      .replace(/\D/g, "")
      .slice(0, 6)
      .split("");

    const C = [...l];

    r.forEach((G, N) => {
      if (N < 6) {
        C[N] = G;
      }
    });

    g(C);
    const E = Math.min(r.length, 5);
    f.current[E]?.focus();
  };

  const D = (e) => {
    e.preventDefault();
    const t = l.join("");
    m?.(t);
  };

  const A = () => {
    if (k) {
      h?.();
      T(a);
      B(false);
    }
  };

  const x = l.every((e) => e !== "");

  return a("form", {
    className: c.form,
    onSubmit: D,
    children: [
      a("div", {
        className: c.inputGroup,
        children: [
          a("label", { className: c.label, children: i }),
          a("div", {
            className: c.codeInputs,
            children: l.map((e, t) =>
              a(
                "input",
                {
                  ref: (r) => {
                    f.current[t] = r;
                  },
                  type: "text",
                  inputMode: "numeric",
                  pattern: "[0-9]*",
                  className: `${c.codeInput} ${o ? c.error : ""}`,
                  value: e,
                  onInput: (r) => v(t, r.target.value),
                  onKeyDown: (r) => L(t, r),
                  onPaste: R,
                  maxLength: 1,
                  disabled: s,
                },
                t
              )
            ),
          }),
          o && a("p", { className: c.errorText, children: o }),
        ],
      }),
      a(B, {
        type: "submit",
        variant: "primary",
        size: "lg",
        fullWidth: true,
        className: c.submitButton,
        disabled: !x || s,
        children: d,
      }),
      a("p", {
        className: c.resendLink,
        children: k
          ? a("button", {
              type: "button",
              className: c.resendButton,
              onClick: A,
              disabled: s,
              children: p,
            })
          : a(k, { children: u(w) }),
      }),
    ],
  });
};

const W = "0x4AAAAAACHhxczw6fJGwPBg";
function Y({ onVerify: i, onExpire: o, onError: d, theme: p = "auto" }) {
  const u = A(null);
  const a = A(null);
  const [m, h] = d(false);

  d_1(() => {
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
      if (a.current && window.turnstile) {
        window.turnstile.remove(a.current);
        a.current = null;
      }
    };
  }, []);

  d_1(() => {
    if (!m || !u.current || !u.current || a.current) {
      return;
    }
    const s = window.turnstile;

    if (s) {
      a.current = s.render(u.current, {
        sitekey: W,
        theme: p,
        callback: i,
        "expired-callback": o,
        "error-callback": d,
      });
    }
  }, [m, i, o, d, p]);

  return a("div", {
    style: { display: "flex", width: "300px", height: "65px" },
    ref: u,
  });
}
const Z = "CrD5";
const _ = { modal: Z };

export function C({ isOpen: i, onClose: o, onVerify: d }) {
  if (!i) {
    return null;
  }
  const p = (u) => {
    d(u);
    o();
  };
  return a(B_1, {
    onClose: o,
    showHeader: false,
    className: _.modal,
    frameless: true,
    children: a(Y, { onVerify: p, onError: () => {} }),
  });
}

export { C as C, F as O };
