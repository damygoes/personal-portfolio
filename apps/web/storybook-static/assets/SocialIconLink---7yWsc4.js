import { n as e } from "./rolldown-runtime-DkW27tQK.js";
import { t } from "./jsx-runtime-DeHZSEgm.js";
import { I as n, O as r, W as i, t as a } from "./src-3ugP8gNN.js";
function o({ link: e }) {
  return (0, s.jsxs)(n, {
    href: e.href,
    external: !0,
    underline: `none`,
    "data-slot": `social-icon-link`,
    className: `inline-flex size-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:text-foreground`,
    children: [
      (0, s.jsx)(i, { name: c[e.platform], size: `sm`, "aria-hidden": `true` }),
      (0, s.jsx)(r, { children: e.label }),
    ],
  });
}
var s, c;
function l() {
  return (l = e(() => {
    (a(),
      (s = t()),
      (c = { linkedin: `at`, github: `document`, other: `external-link` }),
      (o.__docgenInfo = {
        description: ``,
        methods: [],
        displayName: `SocialIconLink`,
        props: {
          link: {
            required: !0,
            tsType: { name: `SocialLink` },
            description: ``,
          },
        },
      }));
  }))();
}
export { l as n, o as t };
