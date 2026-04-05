import {
  v,
  h_1 as H_1,
  h,
  a9,
  aa,
  y,
  H_1 as H_1_1,
  y as y_1,
  A,
  C,
  c,
  aa as aa_1,
  O,
  h as h_1,
  ac,
  u,
  y_1 as y_1_1,
  ad,
  w,
} from "./index-DOyq0flg.js";

import { I, l } from "./index-D0c8aJ6h.js";
import { I as I_1, a } from "./IconPerson-DHNMnMaI.js";
import { I as I_2 } from "./IconSearch-Bps_4-EQ.js";
import { C as C_1 } from "./index-BTe8S9Sm.js";
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

const r = {
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
  const i = v();
  const N = H_1();
  const { initialize: P, disconnectSSE: A } = h();
  const l = a9();

  const S = aa((e) => e.fetchPortal);

  y(() => {
    if (N) {
      P();
    }

    return () => {
      A();
    };
  }, [N, P, A]);

  y(() => {
    S();
  }, [S]);

  const w = i?.username ? `/@${i.username}` : "/profile";

  const h = H_1_1(
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
      { id: "profile", label: "Профиль", icon: a, href: w },
    ],
    [w]
  );

  const [O, y] = y_1({});
  const [z, $] = y_1(true);
  const u = A([]);
  const f = A(null);
  const [c] = C();
  const { openModal: L } = c();

  const C = aa_1((e) => e.fetchFeed);

  const B = aa_1((e) => e.isRefreshing);

  const m = O();

  const E = h_1(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    C(true);
  }, [C]);

  const _ = H_1_1(() => {
    const e = c.url || "/";
    return ac.some((n) => e.startsWith(n));
  }, [c.url]);

  const x = H_1_1(() => {
    const e = c.url || "/";
    return i?.username
      ? e === `/@${i.username}` || e.startsWith(`/@${i.username}/`)
      : false;
  }, [c.url, i?.username]);

  const g = A(null);

  const v = h_1((e, n = false) => {
    if (!n && g.current === e) {
      return;
    }
    g.current = e;
    const a = u.current[e];
    const o = f.current;
    if (a && o) {
      const s = parseFloat(getComputedStyle(o).paddingLeft) || 0;

      y({
        width: a.offsetWidth,
        transform: `translateX(${a.offsetLeft - s}px)`,
      });

      $(true);
    }
  }, []);

  y(() => {
    const e = c.url || "/";

    if (!h.some((a) => a.href === e)) {
      $(false);
    }
  }, [c.url, h]);

  y(() => {
    const e = f.current;
    if (!e) {
      return;
    }
    const n = e.querySelector(`.${r.active}`);
    if (n) {
      const a = u.current.indexOf(n);

      if (a !== -1) {
        g.current = null;
        v(a);
      }
    }
  }, []);

  y(() => {
    const e = f.current;
    if (!e) {
      return;
    }

    const n = () => {
      const o = e.querySelector(`.${r.active}`);
      if (o) {
        const s = u.current.indexOf(o);

        if (s !== -1) {
          v(s, true);
        }
      }
    };

    const a = new ResizeObserver(n);
    a.observe(e);
    window.addEventListener("resize", n);

    return () => {
      a.disconnect();
      window.removeEventListener("resize", n);
    };
  }, [v]);

  const F = () => {
    L(u(C_1, {}));
  };
  return (
    _ ||
    u("div", {
      className: r.mobileNavigationWrapper,
      children: [
        u("nav", {
          ref: f,
          className: r.navigation,
          children: [
            u("div", {
              className: `${r.indicator} ${z ? "" : r.indicatorHidden}`,
              style: O,
            }),
            h.map((e, n) => {
              const a = e.icon;
              const o = e.id === "event";
              const s = o && l.active && !!l.url;
              return u(
                l,
                {
                  path: e.href,
                  children: ({ matches: M }) => {
                    const I = M || (e.id === "profile" && x);
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
                      className: `${r.navItem} ${I ? r.active : ""}`,
                      onClick: (p) => {
                        if (I && e.id === "feed") {
                          p.preventDefault();
                          E();
                        }
                      },
                      children: [
                        u("span", {
                          className: r.iconWrapper,
                          children: o
                            ? u("img", {
                                src: l.active
                                  ? "/assets/portal/portal-active.gif"
                                  : "/assets/portal/portal-inactive.png",
                                alt: "Ивент",
                                className: `${r.portalImage} ${
                                  l.active ? r.portalImageActive : ""
                                }`,
                              })
                            : u(y_1_1, {
                                children: [
                                  e.id === "feed" && B ? u(ad, {}) : u(a, {}),
                                  e.id === "notifications" &&
                                    m > 0 &&
                                    u("span", {
                                      className: r.badge,
                                      children: m > 99 ? "99+" : m,
                                    }),
                                ],
                              }),
                        }),
                        u("span", {
                          className: r.label,
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
          className: r.createButton,
          onClick: F,
          "aria-label": "Создать пост",
          children: u(w, {}),
        }),
      ],
    })
  );
};

export { MobileNavigation as MobileNavigation };
