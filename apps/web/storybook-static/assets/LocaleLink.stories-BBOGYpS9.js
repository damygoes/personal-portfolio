import { n as e } from "./rolldown-runtime-DkW27tQK.js";
import { t } from "./jsx-runtime-DeHZSEgm.js";
import { n, t as r } from "./LocaleLink-DhmEOy5A.js";
var i, a, o, s, c, l;
function u() {
  return (u = e(() => {
    (n(),
      (i = t()),
      (a = {
        title: `Atoms/LocaleLink`,
        component: r,
        tags: [`autodocs`],
        args: { locale: `en`, href: `/en`, label: `EN`, active: !0 },
      }),
      (o = {}),
      (s = { args: { active: !1 } }),
      (c = {
        render: () =>
          (0, i.jsxs)(`div`, {
            className: `flex items-center gap-2`,
            children: [
              (0, i.jsx)(r, {
                locale: `en`,
                href: `/en`,
                label: `EN`,
                active: !0,
              }),
              (0, i.jsx)(`span`, {
                "aria-hidden": `true`,
                className: `text-muted-foreground`,
                children: `/`,
              }),
              (0, i.jsx)(r, {
                locale: `de`,
                href: `/de`,
                label: `DE`,
                active: !1,
              }),
            ],
          }),
      }),
      (l = [`Active`, `Inactive`, `Group`]));
  }))();
}
u();
export {
  o as Active,
  c as Group,
  s as Inactive,
  l as __namedExportsOrder,
  a as default,
};
