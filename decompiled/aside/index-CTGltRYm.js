import {
  ab,
  ac,
  d,
  af as y_1,
  a9,
  a,
  L as M_1,
  C,
  I as K_1,
  c as c_1,
  L,
  M_1 as M_1_1,
  a1,
  l,
  af,
  ag,
  l as l_1,
  a9 as a9_1,
  ai,
  aj,
  ac as ac_1,
} from "./index-BNG2MjJY.js";

import { I, l as l_2 } from "./index-CHR4I1fo.js";
import { I as I_1 } from "./IconBrand-nLDG7MIE.js";
import { I as I_2 } from "./IconLogout-BsNXC1Tm.js";
import { I as I_3, a as a_1 } from "./IconPerson-BnPDelda.js";
import { I as I_4 } from "./IconSearch-DA17k1-r.js";

const ee = {
  async getChangelog() {
    const t = await ab.get(ac.platform.changelog);
    return t.data ?? t;
  },
};

const ae = "kXga";
const te = "PiNa";
const ne = "NPkb";
const se = "e8Et";
const oe = "oYqa";
const ce = "NLMt";
const ie = "UCVN";
const re = "XrhO";
const le = "j6up";
const de = "xw8W";
const he = "RizO";
const ue = "GC31";
const ge = "Rnfw";

const n = {
  aside: ae,
  asideBottom: te,
  logoutButton: ne,
  asideBrand: se,
  asideBrandVersion: oe,
  nav: ce,
  navItem: ie,
  active: re,
  iconWrapper: le,
  portalButton: de,
  portalActive: he,
  portalImage: ue,
  badge: ge,
};

const pe = "t7OS";
const me = "AJJg";
const ve = "xcOU";
const fe = "qasP";
const Ne = "CzeS";
const Ie = "or3u";
const Ce = "ZWsK";
const Be = "uUIZ";
const Se = "wcDC";
const Ae = "WxVY";
const Pe = "t2d0";

const c = {
  changelog: pe,
  entry: me,
  entryHeader: ve,
  version: fe,
  date: Ne,
  changes: Ie,
  change: Ce,
  singleChange: Be,
  note: Se,
  loading: Ae,
  divider: Pe,
};

function be({ isOpen: t, onClose: h }) {
  const [u, i] = d([]);
  const [d, o] = d(true);

  y_1(() => {
    if (!t) {
      return;
    }
    let a = false;

    ee.getChangelog()
      .then((r) => {
        if (!a) {
          i(r);
          o(false);
        }
      })
      .catch(() => {
        if (!a) {
          o(false);
        }
      });

    return () => {
      a = true;
    };
  }, [t]);

  return t
    ? a9(
        a(M_1, {
          onClose: h,
          title: "Что нового",
          size: "default",
          children: a("div", {
            className: c.changelog,
            children: d
              ? a("div", { className: c.loading, children: "Загрузка..." })
              : u.map((a, r) =>
                  a(
                    "div",
                    {
                      className: c.entry,
                      children: [
                        a("div", {
                          className: c.entryHeader,
                          children: [
                            a("span", {
                              className: c.version,
                              children: ["v", a.version],
                            }),
                            a("span", {
                              className: c.date,
                              children: a.date,
                            }),
                          ],
                        }),
                        a.changes.length === 1 && !a.changes[0].startsWith("•")
                          ? a("p", {
                              className: c.singleChange,
                              children: a.changes[0],
                            })
                          : a("ul", {
                              className: c.changes,
                              children: a.changes.map((g, m) =>
                                a("li", { className: c.change, children: g }, m)
                              ),
                            }),
                        a.note &&
                          a("p", { className: c.note, children: a.note }),
                        r < u.length - 1 && a("div", { className: c.divider }),
                      ],
                    },
                    a.version
                  )
                ),
          }),
        }),
        document.body
      )
    : null;
}

const b = ({
  href: t,
  icon: h,
  children: u,
  badge: i,
  onActiveClick: d,
  isActive: o = false,
}) =>
  a(l_2, {
    path: t,
    children: ({ matches: a }) => {
      const r = a || o;
      return a("a", {
        href: t,
        className: `${n.navItem} ${r ? n.active : ""}`,
        onClick: (g) => {
          if (r && d) {
            g.preventDefault();
            d();
          }
        },
        children: [
          a("span", {
            className: n.iconWrapper,
            children: [
              h,
              i !== undefined &&
                i > 0 &&
                a("span", {
                  className: n.badge,
                  children: i > 99 ? "99+" : i,
                }),
            ],
          }),
          a("span", { children: u }),
        ],
      });
    },
  });

const v = (t) => a(b, { ...t });

export const Aside = () => {
  const [t] = C();

  const h = K_1((s) => s.fetchFeed);

  const u = K_1((s) => s.isRefreshing);

  const i = c_1((s) => s.logout);

  const d = L();
  const o = M_1_1();
  const a = a1();
  const { initialize: r, disconnectSSE: g } = l();
  const [m, N] = d(false);
  const [w, I] = d(false);
  const l = af();

  const C = ag((s) => s.fetchPortal);

  const $ = o?.username ? `/@${o.username}` : "/profile";

  y_1(() => {
    if (d) {
      r();
    }

    return () => {
      g();
    };
  }, [d, r, g]);

  y_1(() => {
    C();
  }, [C]);

  const k = l_1(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    h(true);
  }, [h]);

  const W = l_1(() => {
    i();
  }, [i]);

  const L = a9_1(() => {
    const s = t.url || "/";
    return ai.some((R) => s.startsWith(R));
  }, [t.url]);

  const O = a9_1(() => {
    const s = t.url || "/";
    return o?.username
      ? s === `/@${o.username}` || s.startsWith(`/@${o.username}/`)
      : false;
  }, [t.url, o?.username]);

  return (
    L ||
    a("aside", {
      className: n.aside,
      children: [
        a("div", {
          className: n.asideTop,
          children: [
            a("div", {
              className: n.asideBrand,
              children: [
                a(I_1, {}),
                a("button", {
                  className: n.asideBrandVersion,
                  onClick: () => N(true),
                  title: "Что нового",
                  children: "v1.1",
                }),
              ],
            }),
            a("nav", {
              className: n.nav,
              children: [
                a(v, {
                  href: "/",
                  icon: u ? a(aj, {}) : a(I, {}),
                  onActiveClick: k,
                  children: "Лента",
                }),
                a(v, {
                  href: "/search",
                  icon: a(I_4, {}),
                  children: "Поиск",
                }),
                a(l_2, {
                  path: "/event",
                  children: ({ matches: s }) =>
                    a("a", {
                      href: l.active && l.url ? l.url : "/event",
                      target: l.active && l.url ? "_blank" : undefined,
                      rel:
                        l.active && l.url ? "noopener noreferrer" : undefined,
                      className: `${n.portalButton} ${
                        l.active ? n.portalActive : ""
                      } ${s ? n.active : ""}`,
                      title: "Ивент",
                      children: [
                        a("img", {
                          src: l.active
                            ? "/assets/portal/portal-active.gif"
                            : "/assets/portal/portal-inactive.png",
                          alt: "Ивент",
                          className: n.portalImage,
                        }),
                        a("span", { children: "Ивент" }),
                      ],
                    }),
                }),
                a(v, {
                  href: "/notifications",
                  icon: a(I_3, {}),
                  badge: a,
                  children: "Уведомления",
                }),
                a(b, {
                  href: $,
                  icon: a(a_1, {}),
                  isActive: O,
                  children: "Профиль",
                }),
              ],
            }),
          ],
        }),
        a("div", {
          className: n.asideBottom,
          children: [
            !o?.subscription?.isActive &&
              a("button", {
                className: n.logoutButton,
                onClick: () => I(true),
                children: [
                  a("span", { children: "⭐" }),
                  a("span", { children: "ИТД НУКСТА" }),
                ],
              }),
            a("button", {
              className: n.logoutButton,
              onClick: W,
              children: [
                a(I_2, { size: 20 }),
                a("span", { children: "Выйти" }),
              ],
            }),
          ],
        }),
        a(be, { isOpen: m, onClose: () => N(false) }),
        a(ac_1, { isOpen: w, onClose: () => I(false) }),
      ],
    })
  );
};

export { Aside as Aside };
