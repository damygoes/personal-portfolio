import { n as e } from "./rolldown-runtime-DkW27tQK.js";
import { t } from "./jsx-runtime-DeHZSEgm.js";
import {
  B as n,
  E as r,
  H as i,
  I as a,
  M as o,
  P as s,
  t as c,
} from "./src-3ugP8gNN.js";
function l({
  site: e,
  backToTopLabel: t = `Back to top`,
  rightsReservedLabel: c = `All rights reserved.`,
}) {
  return (0, u.jsx)(`footer`, {
    "data-slot": `site-footer`,
    className: `py-16`,
    children: (0, u.jsxs)(s, {
      children: [
        (0, u.jsx)(r, { spacing: `lg` }),
        (0, u.jsxs)(o, {
          gap: 6,
          children: [
            (0, u.jsxs)(`div`, {
              className: `flex flex-wrap items-center justify-between gap-4 text-sm text-muted-foreground`,
              children: [
                (0, u.jsxs)(`div`, {
                  className: `flex flex-wrap items-center gap-4`,
                  children: [
                    (0, u.jsxs)(n, {
                      size: `sm`,
                      tone: `muted`,
                      children: [
                        `© `,
                        e.footer.copyrightYear,
                        ` `,
                        e.siteName,
                        `. `,
                        c,
                      ],
                    }),
                    e.legalLinks.map((e) =>
                      (0, u.jsx)(
                        a,
                        {
                          href: e.href,
                          underline: `hover`,
                          className: `text-muted-foreground`,
                          children: e.title,
                        },
                        e.href,
                      ),
                    ),
                  ],
                }),
                (0, u.jsx)(n, {
                  size: `sm`,
                  tone: `muted`,
                  children: e.footer.tagline,
                }),
              ],
            }),
            (0, u.jsx)(i, {
              variant: `ghost`,
              size: `sm`,
              icon: `chevron-up`,
              render: (0, u.jsx)(`a`, { href: `#top` }),
              className: `self-start`,
              children: t,
            }),
          ],
        }),
      ],
    }),
  });
}
var u;
function d() {
  return (d = e(() => {
    (c(),
      (u = t()),
      (l.__docgenInfo = {
        description: ``,
        methods: [],
        displayName: `SiteFooter`,
        props: {
          site: { required: !0, tsType: { name: `Site` }, description: `` },
          backToTopLabel: {
            required: !1,
            tsType: { name: `string` },
            description: ``,
            defaultValue: { value: `"Back to top"`, computed: !1 },
          },
          rightsReservedLabel: {
            required: !1,
            tsType: { name: `string` },
            description: ``,
            defaultValue: { value: `"All rights reserved."`, computed: !1 },
          },
        },
      }));
  }))();
}
export { d as n, l as t };
