import { n as e } from "./rolldown-runtime-DkW27tQK.js";
import { t } from "./jsx-runtime-DeHZSEgm.js";
import { n, t as r } from "./ProseLayout-CLTOTyXi.js";
import { n as i, t as a } from "./SiteFooter-DlKg2dgI.js";
import { n as o, t as s } from "./SiteHeader-D9rr_rFW.js";
import { a as c, i as l, n as u, r as d } from "./labels-CrXOcAPj.js";
function f({ site: e, page: t }) {
  let n = u(g),
    i = e.nav.map((e) => ({ ...e, label: n.nav[e.key] }));
  return (0, m.jsxs)(`div`, {
    id: `top`,
    children: [
      (0, m.jsx)(s, {
        nav: i,
        alternates: [{ locale: `en`, href: `/en` }],
        locale: g,
        logoHref: `/${g}`,
        menuOpenLabel: n.menuOpen,
        menuCloseLabel: n.menuClose,
      }),
      (0, m.jsx)(r, { page: t, locale: g, updatedLabel: n.updated }),
      (0, m.jsx)(a, {
        site: e,
        backToTopLabel: n.backToTop,
        rightsReservedLabel: n.rightsReserved,
      }),
    ],
  });
}
async function p(e) {
  let t = await h.getSite(g),
    n = await h.getLegalPage(g, e);
  if (!n) throw Error(`Fixture legal page not found: ${e}`);
  return { site: t, page: n };
}
var m, h, g, _, v, y, b;
function x() {
  return (x = e(() => {
    (l(),
      n(),
      i(),
      o(),
      d(),
      (m = t()),
      (h = new c()),
      (g = `en`),
      (_ = {
        title: `Pages/Legal Page`,
        component: f,
        parameters: { layout: `fullscreen` },
      }),
      (v = {
        loaders: [() => p(`impressum`)],
        render: (e, { loaded: t }) => (0, m.jsx)(f, { ...t }),
      }),
      (y = {
        loaders: [() => p(`datenschutz`)],
        render: (e, { loaded: t }) => (0, m.jsx)(f, { ...t }),
      }),
      (b = [`Impressum`, `Datenschutz`]));
  }))();
}
x();
export {
  y as Datenschutz,
  v as Impressum,
  b as __namedExportsOrder,
  _ as default,
};
