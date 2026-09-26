import { n as e } from "./rolldown-runtime-DkW27tQK.js";
import { t } from "./jsx-runtime-DeHZSEgm.js";
import { n, t as r } from "./PhotoEssayLayout-BGMM_KQR.js";
import { n as i, t as a } from "./SiteFooter-DlKg2dgI.js";
import { n as o, t as s } from "./SiteHeader-D9rr_rFW.js";
import { a as c, i as l, n as u, r as d } from "./labels-CrXOcAPj.js";
function f({ site: e, post: t }) {
  let n = u(h),
    i = e.nav.map((e) => ({ ...e, label: n.nav[e.key] })),
    o = t.photoSummary?.photoCount ?? 0;
  return (0, p.jsxs)(`div`, {
    id: `top`,
    children: [
      (0, p.jsx)(s, {
        nav: i,
        alternates: [{ locale: `en`, href: `/en` }],
        locale: h,
        logoHref: `/${h}`,
        menuOpenLabel: n.menuOpen,
        menuCloseLabel: n.menuClose,
      }),
      (0, p.jsx)(r, {
        post: t,
        locale: h,
        photoCountLabel: n.photoCount(o),
        relatedReadingTimeLabel: n.readingTime,
        relatedHeading: n.relatedPosts,
      }),
      (0, p.jsx)(a, {
        site: e,
        backToTopLabel: n.backToTop,
        rightsReservedLabel: n.rightsReserved,
      }),
    ],
  });
}
var p, m, h, g, _, v, y;
function b() {
  return (b = e(() => {
    (l(),
      n(),
      i(),
      o(),
      d(),
      (p = t()),
      (m = new c()),
      (h = `en`),
      (g = `a-walk-through-berlin`),
      (_ = {
        title: `Pages/Blog Post (Photo Essay)`,
        component: f,
        parameters: { layout: `fullscreen` },
      }),
      (v = {
        loaders: [
          async () => {
            let e = await m.getSite(h),
              t = await m.getPost(h, g);
            if (!t) throw Error(`Fixture post not found: ${g}`);
            return { site: e, post: t };
          },
        ],
        render: (e, { loaded: t }) => (0, p.jsx)(f, { ...t }),
      }),
      (y = [`Default`]));
  }))();
}
b();
export { v as Default, y as __namedExportsOrder, _ as default };
