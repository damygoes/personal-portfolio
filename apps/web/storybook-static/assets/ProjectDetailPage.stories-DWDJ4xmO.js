import { n as e } from "./rolldown-runtime-DkW27tQK.js";
import { t } from "./jsx-runtime-DeHZSEgm.js";
import { n, t as r } from "./CaseStudyLayout-cpB0PYKS.js";
import { n as i, t as a } from "./SiteFooter-DlKg2dgI.js";
import { n as o, t as s } from "./SiteHeader-D9rr_rFW.js";
import { a as c, i as l, n as u, r as d } from "./labels-CrXOcAPj.js";
import { n as f, t as p } from "./get-code-html-CPTcBXb4.js";
function m({ site: e, project: t, codeHtml: n }) {
  let i = u(_),
    o = e.nav.map((e) => ({ ...e, label: i.nav[e.key] }));
  return (0, h.jsxs)(`div`, {
    id: `top`,
    children: [
      (0, h.jsx)(s, {
        nav: o,
        alternates: [{ locale: `en`, href: `/en` }],
        locale: _,
        logoHref: `/${_}`,
        menuOpenLabel: i.menuOpen,
        menuCloseLabel: i.menuClose,
      }),
      (0, h.jsx)(r, {
        project: t,
        locale: _,
        statusLabel: i.projectStatus[t.status],
        linkLabels: i.projectLinkKinds,
        tocHeading: i.tableOfContents,
        previousLabel: i.paginationPrevious,
        nextLabel: i.paginationNext,
        codeHtml: n,
      }),
      (0, h.jsx)(a, {
        site: e,
        backToTopLabel: i.backToTop,
        rightsReservedLabel: i.rightsReserved,
      }),
    ],
  });
}
var h, g, _, v, y, b, x;
function S() {
  return (S = e(() => {
    (l(),
      n(),
      i(),
      o(),
      f(),
      d(),
      (h = t()),
      (g = new c()),
      (_ = `en`),
      (v = `elliesnote`),
      (y = {
        title: `Pages/Project Detail`,
        component: m,
        parameters: { layout: `fullscreen` },
      }),
      (b = {
        loaders: [
          async () => {
            let e = await g.getSite(_),
              t = await g.getProject(_, v);
            if (!t) throw Error(`Fixture project not found: ${v}`);
            return { site: e, project: t, codeHtml: await p(t.body) };
          },
        ],
        render: (e, { loaded: t }) => (0, h.jsx)(m, { ...t }),
      }),
      (x = [`Default`]));
  }))();
}
S();
export { b as Default, x as __namedExportsOrder, y as default };
