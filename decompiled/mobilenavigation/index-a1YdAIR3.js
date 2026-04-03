import {
  h,
  v,
  F,
  a5,
  a6,
  F_1 as y_1,
  v as v_1,
  y_1 as y_1_1,
  A,
  a8,
  a as a_1,
  o,
  a6 as a6_1,
  F as F_1,
  a9,
  u,
  y_1_1 as y_1_1_1,
  aa,
  i,
} from "./index-d9k9JBOp.js";

import { I, l } from "./index-Btyz4zMp.js";
import { I as I_1, a as a_2 } from "./IconPerson-CKwAvIF3.js";
import { I as I_2 } from "./IconSearch-UKypaLoB.js";
import { C } from "./index-BCbnsBqH.js";
const oe = "s6RgBrB6";
const se = "JOIWgkha";
const ie = "_3zENkokD";
const ce = "_6Pioebei";
const le = "Vxc0MjRf";
const de = "iQtUV16G";
const ue = "ZtAKIgsJ";
const fe = "_1tR-HPhB";
const ve = "Yi-2DSIb";
const pe = "pBba2HCe";
const he = "ozGvh6zv";
const me = "_4pOcvhRL";

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
  const i = h();
  const N = v();
  const { initialize: P, disconnectSSE: A } = F();
  const l = a5();

  const S = a6((e) => e.fetchPortal);

  y_1(() => {
    if (N) {
      P();
    }

    return () => {
      A();
    };
  }, [N, P, A]);

  y_1(() => {
    S();
  }, [S]);

  const $ = i?.username ? `/@${i.username}` : "/profile";

  const h = v_1(
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
      { id: "profile", label: "Профиль", icon: a_2, href: $ },
    ],
    [$]
  );

  const [z, H] = y_1_1({});
  const [L, w] = y_1_1(true);
  const u = A([]);
  const f = A(null);
  const [c] = a8();
  const { openModal: O } = a_1();

  const C = o((e) => e.fetchFeed);

  const B = o((e) => e.isRefreshing);

  const m = a6_1();

  const E = F_1(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    C(true);
  }, [C]);

  const F = v_1(() => {
    const e = c.url || "/";
    return a9.some((n) => e.startsWith(n));
  }, [c.url]);

  const _ = v_1(() => {
    const e = c.url || "/";
    return i?.username
      ? e === `/@${i.username}` || e.startsWith(`/@${i.username}/`)
      : false;
  }, [c.url, i?.username]);

  const g = A(null);

  const v = F_1((e, n = false) => {
    if (!n && g.current === e) {
      return;
    }
    g.current = e;
    const r = u.current[e];
    const o = f.current;
    if (r && o) {
      const s = parseFloat(getComputedStyle(o).paddingLeft) || 0;

      H({
        width: r.offsetWidth,
        transform: `translateX(${r.offsetLeft - s}px)`,
      });

      w(true);
    }
  }, []);

  y_1(() => {
    const e = c.url || "/";

    if (!h.some((r) => r.href === e)) {
      w(false);
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
        g.current = null;
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

  const x = () => {
    O(u(C, {}));
  };
  return (
    F ||
    u("div", {
      className: a.mobileNavigationWrapper,
      children: [
        u("nav", {
          ref: f,
          className: a.navigation,
          children: [
            u("div", {
              className: `${a.indicator} ${L ? "" : a.indicatorHidden}`,
              style: z,
            }),
            h.map((e, n) => {
              const r = e.icon;
              const o = e.id === "event";
              const s = o && l.active && !!l.url;
              return u(
                l,
                {
                  path: e.href,
                  children: ({ matches: M }) => {
                    const I = M || (e.id === "profile" && _);
                    return u("a", {
                      href: s ? l.url : e.href,
                      target: s ? "_blank" : undefined,
                      rel: s ? "noopener noreferrer" : undefined,
                      ref: (p) => {
                        u.current[n] = p;

                        if (p && I) {
                          v(n);
                        }
                      },
                      className: `${a.navItem} ${I ? a.active : ""}`,
                      onClick: (p) => {
                        if (I && e.id === "feed") {
                          p.preventDefault();
                          E();
                        }
                      },
                      children: [
                        u("span", {
                          className: a.iconWrapper,
                          children: o
                            ? u("img", {
                                src: l.active
                                  ? "/assets/portal/portal-active.gif"
                                  : "/assets/portal/portal-inactive.png",
                                alt: "Ивент",
                                className: `${a.portalImage} ${
                                  l.active ? a.portalImageActive : ""
                                }`,
                              })
                            : u(y_1_1_1, {
                                children: [
                                  e.id === "feed" && B ? u(aa, {}) : u(r, {}),
                                  e.id === "notifications" &&
                                    m > 0 &&
                                    u("span", {
                                      className: a.badge,
                                      children: m > 99 ? "99+" : m,
                                    }),
                                ],
                              }),
                        }),
                        u("span", {
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
        u("button", {
          className: a.createButton,
          onClick: x,
          "aria-label": "Создать пост",
          children: u(i, {}),
        }),
      ],
    })
  );
};

export { MobileNavigation as MobileNavigation };
