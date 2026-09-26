import { n as e } from "./rolldown-runtime-DkW27tQK.js";
import { t } from "./jsx-runtime-DeHZSEgm.js";
import { P as n, t as r } from "./src-3ugP8gNN.js";
import { n as i, t as a } from "./Logo-CmKBFhUa.js";
import { n as o, t as s } from "./LocaleSwitcher-D94MsXVS.js";
import { n as c, t as l } from "./NavList-CbVpOn1B.js";
import { n as u, t as d } from "./MobileMenu-CHgisNfa.js";
function f({
  nav: e,
  alternates: t,
  locale: r,
  localeLabels: i,
  logoHref: o,
  menuOpenLabel: c,
  menuCloseLabel: u,
}) {
  return (0, p.jsx)(`header`, {
    "data-slot": `site-header`,
    className: `sticky top-0 z-30 border-b border-border bg-background/80 backdrop-blur`,
    children: (0, p.jsxs)(n, {
      className: `flex h-16 items-center justify-between`,
      children: [
        (0, p.jsx)(a, { href: o }),
        (0, p.jsxs)(`div`, {
          className: `hidden items-center gap-8 sm:flex`,
          children: [
            (0, p.jsx)(l, { items: e }),
            (0, p.jsx)(s, { alternates: t, current: r, localeLabels: i }),
          ],
        }),
        (0, p.jsx)(d, { items: e, openLabel: c, closeLabel: u }),
      ],
    }),
  });
}
var p;
function m() {
  return (m = e(() => {
    (r(),
      i(),
      o(),
      c(),
      u(),
      (p = t()),
      (f.__docgenInfo = {
        description: ``,
        methods: [],
        displayName: `SiteHeader`,
        props: {
          nav: {
            required: !0,
            tsType: {
              name: `Array`,
              elements: [
                {
                  name: `intersection`,
                  raw: `NavItem & { label: string }`,
                  elements: [
                    { name: `NavItem` },
                    {
                      name: `signature`,
                      type: `object`,
                      raw: `{ label: string }`,
                      signature: {
                        properties: [
                          {
                            key: `label`,
                            value: { name: `string`, required: !0 },
                          },
                        ],
                      },
                    },
                  ],
                },
              ],
              raw: `NavListItem[]`,
            },
            description: ``,
          },
          alternates: {
            required: !0,
            tsType: {
              name: `Array`,
              elements: [{ name: `Alternate` }],
              raw: `Alternate[]`,
            },
            description: ``,
          },
          locale: { required: !0, tsType: { name: `Locale` }, description: `` },
          localeLabels: {
            required: !1,
            tsType: {
              name: `Record`,
              elements: [{ name: `Locale` }, { name: `string` }],
              raw: `Record<Locale, string>`,
            },
            description: ``,
          },
          logoHref: {
            required: !0,
            tsType: { name: `string` },
            description: ``,
          },
          menuOpenLabel: {
            required: !1,
            tsType: { name: `string` },
            description: ``,
          },
          menuCloseLabel: {
            required: !1,
            tsType: { name: `string` },
            description: ``,
          },
        },
      }));
  }))();
}
export { m as n, f as t };
