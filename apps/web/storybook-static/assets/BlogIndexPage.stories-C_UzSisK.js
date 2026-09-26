import { n as e } from "./rolldown-runtime-DkW27tQK.js";
import { t } from "./jsx-runtime-DeHZSEgm.js";
import { M as n, P as r, t as i } from "./src-3ugP8gNN.js";
import { n as a, t as o } from "./CategoryFilter-C21xM8-V.js";
import { n as s, t as c } from "./Pagination-KOBupkMm.js";
import { n as l, t as u } from "./BlogHeader-Do7Hsi8f.js";
import { n as d, t as f } from "./PostGrid-IIXgxv_g.js";
import { n as p, t as m } from "./SiteFooter-DlKg2dgI.js";
import { n as h, t as g } from "./SiteHeader-D9rr_rFW.js";
import { a as _, i as v, n as y, r as b } from "./labels-CrXOcAPj.js";
function x({ site: e, blogIndex: t }) {
  let i = y(w),
    a = e.nav.map((e) => ({ ...e, label: i.nav[e.key] }));
  return (0, S.jsxs)(`div`, {
    id: `top`,
    children: [
      (0, S.jsx)(g, {
        nav: a,
        alternates: [{ locale: `en`, href: `/en` }],
        locale: w,
        logoHref: `/${w}`,
        menuOpenLabel: i.menuOpen,
        menuCloseLabel: i.menuClose,
      }),
      (0, S.jsx)(u, {
        heading: t.heading,
        intro: t.intro,
        activeCategory: t.activeCategory,
      }),
      (0, S.jsx)(r, {
        className: `pb-16`,
        children: (0, S.jsxs)(n, {
          gap: 8,
          children: [
            (0, S.jsx)(o, {
              allHref: `/${w}/blog`,
              items: t.categories,
              allLabel: i.categoryAll,
            }),
            (0, S.jsx)(f, {
              posts: t.posts,
              locale: w,
              readingTimeLabel: i.readingTime,
              emptyLabel: i.postGridEmpty,
            }),
            (0, S.jsx)(c, {
              pagination: t.pagination,
              previousLabel: i.paginationPrevious,
              nextLabel: i.paginationNext,
            }),
          ],
        }),
      }),
      (0, S.jsx)(m, {
        site: e,
        backToTopLabel: i.backToTop,
        rightsReservedLabel: i.rightsReserved,
      }),
    ],
  });
}
var S, C, w, T, E, D;
function O() {
  return (O = e(() => {
    (v(),
      i(),
      a(),
      s(),
      l(),
      d(),
      p(),
      h(),
      b(),
      (S = t()),
      (C = new _()),
      (w = `en`),
      (T = {
        title: `Pages/Blog Index`,
        component: x,
        parameters: { layout: `fullscreen` },
      }),
      (E = {
        loaders: [
          async () => ({
            site: await C.getSite(w),
            blogIndex: await C.getBlogIndex(w),
          }),
        ],
        render: (e, { loaded: t }) => (0, S.jsx)(x, { ...t }),
      }),
      (D = [`Default`]));
  }))();
}
O();
export { E as Default, D as __namedExportsOrder, T as default };
