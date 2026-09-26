import { n as e } from "./rolldown-runtime-DkW27tQK.js";
import { t } from "./jsx-runtime-DeHZSEgm.js";
import { n, t as r } from "./SocialIconLink---7yWsc4.js";
var i, a, o, s, c, l;
function u() {
  return (u = e(() => {
    (n(),
      (i = t()),
      (a = {
        title: `Atoms/SocialIconLink`,
        component: r,
        tags: [`autodocs`],
        args: {
          link: {
            platform: `github`,
            label: `GitHub`,
            href: `https://github.com/damilolabada`,
          },
        },
      }),
      (o = {}),
      (s = {
        args: {
          link: {
            platform: `linkedin`,
            label: `LinkedIn`,
            href: `https://linkedin.com/in/damilolabada`,
          },
        },
      }),
      (c = {
        render: () =>
          (0, i.jsxs)(`div`, {
            className: `flex gap-2`,
            children: [
              (0, i.jsx)(r, {
                link: { platform: `github`, label: `GitHub`, href: `#` },
              }),
              (0, i.jsx)(r, {
                link: { platform: `linkedin`, label: `LinkedIn`, href: `#` },
              }),
              (0, i.jsx)(r, {
                link: { platform: `other`, label: `Website`, href: `#` },
              }),
            ],
          }),
      }),
      (l = [`Default`, `LinkedIn`, `Group`]));
  }))();
}
u();
export {
  o as Default,
  c as Group,
  s as LinkedIn,
  l as __namedExportsOrder,
  a as default,
};
