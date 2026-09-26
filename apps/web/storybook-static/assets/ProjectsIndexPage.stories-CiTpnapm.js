import { n as e } from "./rolldown-runtime-DkW27tQK.js";
import { t } from "./jsx-runtime-DeHZSEgm.js";
import { A as n, M as r, P as i, R as a, t as o } from "./src-3ugP8gNN.js";
import { n as s, t as c } from "./ProjectCard-CUrqYZQB.js";
import { n as l, t as u } from "./SiteFooter-DlKg2dgI.js";
import { n as d, t as f } from "./SiteHeader-D9rr_rFW.js";
import { a as p, i as m, n as h, r as g } from "./labels-CrXOcAPj.js";
function _({ site: e, projects: t }) {
  let o = h(b),
    s = e.nav.map((e) => ({ ...e, label: o.nav[e.key] }));
  return (0, v.jsxs)(`div`, {
    id: `top`,
    children: [
      (0, v.jsx)(f, {
        nav: s,
        alternates: [{ locale: `en`, href: `/en` }],
        locale: b,
        logoHref: `/${b}`,
        menuOpenLabel: o.menuOpen,
        menuCloseLabel: o.menuClose,
      }),
      (0, v.jsx)(i, {
        className: `py-16`,
        children: (0, v.jsxs)(r, {
          gap: 8,
          children: [
            (0, v.jsx)(a, { level: 1, size: `2xl`, children: o.nav.work }),
            (0, v.jsx)(n, {
              cols: { base: 1, sm: 2, lg: 3 },
              gap: 8,
              children: t.map((e) => (0, v.jsx)(c, { project: e }, e.id)),
            }),
          ],
        }),
      }),
      (0, v.jsx)(u, {
        site: e,
        backToTopLabel: o.backToTop,
        rightsReservedLabel: o.rightsReserved,
      }),
    ],
  });
}
var v, y, b, x, S, C;
function w() {
  return (w = e(() => {
    (m(),
      o(),
      s(),
      l(),
      d(),
      g(),
      (v = t()),
      (y = new p()),
      (b = `en`),
      (x = {
        title: `Pages/Projects Index`,
        component: _,
        parameters: { layout: `fullscreen` },
      }),
      (S = {
        loaders: [
          async () => ({
            site: await y.getSite(b),
            projects: await y.getProjects(b),
          }),
        ],
        render: (e, { loaded: t }) => (0, v.jsx)(_, { ...t }),
      }),
      (C = [`Default`]));
  }))();
}
w();
export { S as Default, C as __namedExportsOrder, x as default };
