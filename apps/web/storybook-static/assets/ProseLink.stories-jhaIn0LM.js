import { n as e } from "./rolldown-runtime-DkW27tQK.js";
import { t } from "./jsx-runtime-DeHZSEgm.js";
import { n, t as r } from "./ProseLink-Dat61un5.js";
var i, a, o, s, c;
function l() {
  return (l = e(() => {
    (n(),
      (i = t()),
      (a = {
        title: `RichText/ProseLink`,
        component: r,
        tags: [`autodocs`],
        args: {
          href: `https://example.com`,
          external: !0,
          children: `an external link`,
        },
        decorators: [
          (e) =>
            (0, i.jsxs)(`p`, {
              children: [
                `Some paragraph text with `,
                (0, i.jsx)(e, {}),
                ` inline.`,
              ],
            }),
        ],
      }),
      (o = {}),
      (s = {
        args: { href: `/en/blog`, external: !1, children: `the blog index` },
      }),
      (c = [`External`, `Internal`]));
  }))();
}
l();
export { o as External, s as Internal, c as __namedExportsOrder, a as default };
