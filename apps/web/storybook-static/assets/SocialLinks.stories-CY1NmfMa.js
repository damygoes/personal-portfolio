import { n as e } from "./rolldown-runtime-DkW27tQK.js";
import { t } from "./jsx-runtime-DeHZSEgm.js";
import { n, t as r } from "./SocialIconLink---7yWsc4.js";
function i({ links: e }) {
  return (0, a.jsx)(`ul`, {
    "data-slot": `social-links`,
    className: `flex items-center gap-2`,
    children: e.map((e) =>
      (0, a.jsx)(`li`, { children: (0, a.jsx)(r, { link: e }) }, e.href),
    ),
  });
}
var a;
function o() {
  return (o = e(() => {
    (n(),
      (a = t()),
      (i.__docgenInfo = {
        description: ``,
        methods: [],
        displayName: `SocialLinks`,
        props: {
          links: {
            required: !0,
            tsType: {
              name: `Array`,
              elements: [{ name: `SocialLink` }],
              raw: `SocialLink[]`,
            },
            description: ``,
          },
        },
      }));
  }))();
}
var s, c, l;
function u() {
  return (u = e(() => {
    (o(),
      (s = {
        title: `Molecules/SocialLinks`,
        component: i,
        tags: [`autodocs`],
        args: {
          links: [
            {
              platform: `github`,
              label: `GitHub`,
              href: `https://github.com/damilolabada`,
            },
            {
              platform: `linkedin`,
              label: `LinkedIn`,
              href: `https://linkedin.com/in/damilolabada`,
            },
          ],
        },
      }),
      (c = {}),
      (l = [`Default`]));
  }))();
}
u();
export { c as Default, l as __namedExportsOrder, s as default };
