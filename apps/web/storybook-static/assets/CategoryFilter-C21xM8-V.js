import { n as e } from "./rolldown-runtime-DkW27tQK.js";
import { t } from "./jsx-runtime-DeHZSEgm.js";
import { g as n, t as r } from "./src-3ugP8gNN.js";
function i({ items: e, allHref: t, allLabel: r = `All` }) {
  let i = e.every((e) => !e.active);
  return (0, a.jsxs)(`nav`, {
    "data-slot": `category-filter`,
    "aria-label": `Categories`,
    className: `flex flex-wrap gap-2`,
    children: [
      (0, a.jsx)(n, { label: r, href: t, active: i }),
      e.map((e) =>
        (0, a.jsx)(
          n,
          {
            label: `${e.title} (${e.postCount})`,
            href: e.href,
            active: e.active,
          },
          e.slug,
        ),
      ),
    ],
  });
}
var a;
function o() {
  return (o = e(() => {
    (r(),
      (a = t()),
      (i.__docgenInfo = {
        description: ``,
        methods: [],
        displayName: `CategoryFilter`,
        props: {
          items: {
            required: !0,
            tsType: {
              name: `Array`,
              elements: [{ name: `CategoryFilterItem` }],
              raw: `CategoryFilterItem[]`,
            },
            description: ``,
          },
          allHref: {
            required: !0,
            tsType: { name: `string` },
            description: ``,
          },
          allLabel: {
            required: !1,
            tsType: { name: `string` },
            description: ``,
            defaultValue: { value: `"All"`, computed: !1 },
          },
        },
      }));
  }))();
}
export { o as n, i as t };
