import { n as e } from "./rolldown-runtime-DkW27tQK.js";
import { t } from "./jsx-runtime-DeHZSEgm.js";
import { n, t as r } from "./AboutSection-CaJcyJba.js";
import { n as i, t as a } from "./ContactSection-DRe_hgn1.js";
import { n as o, t as s } from "./ExperienceSection-CjUDhQtu.js";
import { n as c, t as l } from "./HeroSection-CURz1DEl.js";
import { n as u, t as d } from "./SiteFooter-DlKg2dgI.js";
import { n as f, t as p } from "./SiteHeader-D9rr_rFW.js";
import { n as m, t as h } from "./SkillsSection-BReU_egO.js";
import { n as g, t as _ } from "./WorkSection-3irFFmds.js";
import { a as v, i as y, n as b, r as x, t as S } from "./labels-CrXOcAPj.js";
function C({ site: e, homepage: t }) {
  let n = b(E),
    i = e.nav.map((e) => ({ ...e, label: n.nav[e.key] }));
  return (0, w.jsxs)(`div`, {
    id: `top`,
    children: [
      (0, w.jsx)(p, {
        nav: i,
        alternates: [{ locale: `en`, href: `/en` }],
        locale: E,
        logoHref: `/${E}`,
        menuOpenLabel: n.menuOpen,
        menuCloseLabel: n.menuClose,
      }),
      (0, w.jsx)(l, {
        hero: t.hero,
        facts: S(E, t.hero),
        cv: e.cv,
        downloadCvLabel: n.downloadCv,
        scrollHintLabel: n.scrollHint,
      }),
      t.about && (0, w.jsx)(r, { section: t.about }),
      t.experience &&
        (0, w.jsx)(s, {
          section: t.experience,
          locale: E,
          workModeLabels: n.workModes,
          presentLabel: n.present,
          detailsLabel: n.experienceDetails,
          closeLabel: n.experienceClose,
        }),
      t.work &&
        (0, w.jsx)(_, {
          section: t.work,
          viewAllHref: `/${E}/projects`,
          viewAllLabel: n.viewAllProjects,
        }),
      t.skills && (0, w.jsx)(h, { section: t.skills }),
      t.contact &&
        (0, w.jsx)(a, { section: t.contact, sayHelloLabel: n.sayHello }),
      (0, w.jsx)(d, {
        site: e,
        backToTopLabel: n.backToTop,
        rightsReservedLabel: n.rightsReserved,
      }),
    ],
  });
}
var w, T, E, D, O, k;
function A() {
  return (A = e(() => {
    (y(),
      n(),
      i(),
      o(),
      c(),
      u(),
      f(),
      m(),
      g(),
      x(),
      (w = t()),
      (T = new v()),
      (E = `en`),
      (D = {
        title: `Pages/Home`,
        component: C,
        parameters: { layout: `fullscreen` },
      }),
      (O = {
        loaders: [
          async () => ({
            site: await T.getSite(E),
            homepage: await T.getHomepage(E),
          }),
        ],
        render: (e, { loaded: t }) => (0, w.jsx)(C, { ...t }),
      }),
      (k = [`Default`]));
  }))();
}
A();
export { O as Default, k as __namedExportsOrder, D as default };
