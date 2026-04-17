import {
  x,
  L,
  l,
  af,
  ag,
  y_1_1 as y_1,
  T,
  y_1 as y_1_1,
  A,
  C,
  e,
  af as af_1,
  a1,
  x as x_1,
  ai,
  a as a_1,
  x_1 as x_1_1,
  aj,
  E,
} from "./index-BNG2MjJY.js";

import { I, l as l_1 } from "./index-CHR4I1fo.js";
import { I as I_1, a as a_2 } from "./IconPerson-BnPDelda.js";
import { I as I_2 } from "./IconSearch-DA17k1-r.js";
import { C as C_1 } from "./index-FKEGswqY.js";
const oe = "UExZ";
const se = "wivc";
const ie = "kaT0";
const ce = "O2mD";
const le = "Hoxy";
const de = "TaGI";
const ue = "pTIM";
const fe = "w6cw";
const ve = "mboA";
const pe = "PnV7";
const he = "DoOd";
const me = "G3dF";

const a = {
  mobileNavigationWrapper: oe,
  navigation: se,
  indicator: ie,
  indicatorHidden: ce,
  navItem: le,
  label: de,
  active: ue,
  createButton: fe,
  iconWrapper: ve,
  portalImage: pe,
  portalImageActive: he,
  badge: me,
};

export const MobileNavigation = () => {
  const i = x();
  const N = L();
  const { initialize: P, disconnectSSE: w } = l();
  const l = af();

  const R = ag((e) => e.fetchPortal);

  y_1(() => {
    if (N) {
      P();
    }

    return () => {
      w();
    };
  }, [N, P, w]);

  y_1(() => {
    R();
  }, [R]);

  const S = i?.username ? `/@${i.username}` : "/profile";

  const h = T(
    () => [
      { id: "feed", label: "Лента", icon: I, href: "/" },
      { id: "search", label: "Поиск", icon: I_2, href: "/search" },
      { id: "event", label: "Ивент", icon: null, href: "/event" },
      {
        id: "notifications",
        label: "Уведы",
        icon: I_1,
        href: "/notifications",
      },
      { id: "profile", label: "Профиль", icon: a_2, href: S },
    ],
    [S]
  );

  const [E, L] = y_1_1({});
  const [O, $] = y_1_1(true);
  const u = A([]);
  const f = A(null);
  const [c] = C();
  const { openModal: x } = e();

  const C = af_1((e) => e.fetchFeed);

  const H = af_1((e) => e.isRefreshing);

  const m = a1();

  const T = x_1(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    C(true);
  }, [C]);

  const F = T(() => {
    const e = c.url || "/";
    return ai.some((n) => e.startsWith(n));
  }, [c.url]);

  const z = T(() => {
    const e = c.url || "/";
    return i?.username
      ? e === `/@${i.username}` || e.startsWith(`/@${i.username}/`)
      : false;
  }, [c.url, i?.username]);

  const I = A(null);

  const v = x_1((e, n = false) => {
    if (!n && I.current === e) {
      return;
    }
    I.current = e;
    const r = u.current[e];
    const o = f.current;
    if (r && o) {
      const s = parseFloat(getComputedStyle(o).paddingLeft) || 0;

      L({
        width: r.offsetWidth,
        transform: `translateX(${r.offsetLeft - s}px)`,
      });

      $(true);
    }
  }, []);

  y_1(() => {
    const e = c.url || "/";

    if (!h.some((r) => r.href === e)) {
      $(false);
    }
  }, [c.url, h]);

  y_1(() => {
    const e = f.current;
    if (!e) {
      return;
    }
    const n = e.querySelector(`.${a.active}`);
    if (n) {
      const r = u.current.indexOf(n);

      if (r !== -1) {
        I.current = null;
        v(r);
      }
    }
  }, []);

  y_1(() => {
    const e = f.current;
    if (!e) {
      return;
    }

    const n = () => {
      const o = e.querySelector(`.${a.active}`);
      if (o) {
        const s = u.current.indexOf(o);

        if (s !== -1) {
          v(s, true);
        }
      }
    };

    const r = new ResizeObserver(n);
    r.observe(e);
    window.addEventListener("resize", n);

    return () => {
      r.disconnect();
      window.removeEventListener("resize", n);
    };
  }, [v]);

  const M = () => {
    x(a_1(C_1, {}));
  };
  return (
    F ||
    a_1("div", {
      className: a.mobileNavigationWrapper,
      children: [
        a_1("nav", {
          ref: f,
          className: a.navigation,
          children: [
            a_1("div", {
              className: `${a.indicator} ${O ? "" : a.indicatorHidden}`,
              style: E,
            }),
            h.map((e, n) => {
              const r = e.icon;
              const o = e.id === "event";
              const s = o && l.active && !!l.url;
              return a_1(
                l_1,
                {
                  path: e.href,
                  children: ({ matches: U }) => {
                    const g = U || (e.id === "profile" && z);
                    return a_1("a", {
                      href: s ? l.url : e.href,
                      target: s ? "_blank" : undefined,
                      rel: s ? "noopener noreferrer" : undefined,
                      ref: (p) => {
                        u.current[n] = p;

                        if (p && g) {
                          v(n);
                        }
                      },
                      className: `${a.navItem} ${g ? a.active : ""}`,
                      onClick: (p) => {
                        if (g && e.id === "feed") {
                          p.preventDefault();
                          T();
                        }
                      },
                      children: [
                        a_1("span", {
                          className: a.iconWrapper,
                          children: o
                            ? a_1("img", {
                                src: l.active
                                  ? "/assets/portal/portal-active.gif"
                                  : "/assets/portal/portal-inactive.png",
                                alt: "Ивент",
                                className: `${a.portalImage} ${
                                  l.active ? a.portalImageActive : ""
                                }`,
                              })
                            : a_1(x_1_1, {
                                children: [
                                  e.id === "feed" && H
                                    ? a_1(aj, {})
                                    : a_1(r, {}),
                                  e.id === "notifications" &&
                                    m > 0 &&
                                    a_1("span", {
                                      className: a.badge,
                                      children: m > 99 ? "99+" : m,
                                    }),
                                ],
                              }),
                        }),
                        a_1("span", {
                          className: a.label,
                          children: e.label,
                        }),
                      ],
                    });
                  },
                },
                e.id
              );
            }),
          ],
        }),
        a_1("button", {
          className: a.createButton,
          onClick: M,
          "aria-label": "Создать пост",
          children: a_1(E, {}),
        }),
      ],
    })
  );
};

export { MobileNavigation as MobileNavigation };
