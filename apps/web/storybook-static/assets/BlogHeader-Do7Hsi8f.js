import { n as e } from "./rolldown-runtime-DkW27tQK.js";
import { t } from "./jsx-runtime-DeHZSEgm.js";
import { B as n, M as r, P as i, R as a, t as o } from "./src-3ugP8gNN.js";
function s({ heading: e, intro: t, activeCategory: o }) {
  return (0, c.jsx)(`header`, {
    "data-slot": `blog-header`,
    className: `py-16`,
    children: (0, c.jsx)(i, {
      children: (0, c.jsxs)(r, {
        gap: 3,
        children: [
          (0, c.jsx)(a, { level: 1, size: `2xl`, children: e }),
          (o?.description ?? t) &&
            (0, c.jsx)(n, {
              size: `lg`,
              tone: `muted`,
              className: `max-w-prose`,
              children: o?.description ?? t,
            }),
        ],
      }),
    }),
  });
}
var c;
function l() {
  return (l = e(() => {
    (o(),
      (c = t()),
      (s.__docgenInfo = {
        description: ``,
        methods: [],
        displayName: `BlogHeader`,
        props: {
          heading: {
            required: !0,
            tsType: { name: `string` },
            description: ``,
          },
          intro: { required: !1, tsType: { name: `string` }, description: `` },
          activeCategory: {
            required: !1,
            tsType: { name: `Category` },
            description: ``,
          },
        },
      }));
  }))();
}
export { l as n, s as t };
