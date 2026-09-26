import { n as e } from "./rolldown-runtime-DkW27tQK.js";
import { t } from "./jsx-runtime-DeHZSEgm.js";
import {
  B as n,
  M as r,
  P as i,
  R as a,
  c as o,
  t as s,
} from "./src-3ugP8gNN.js";
import { n as c, t as l } from "./RichTextRenderer-Bgfx5Rah.js";
function u({ page: e, locale: t, updatedLabel: s = `Last updated` }) {
  return (0, d.jsx)(`article`, {
    "data-slot": `prose-layout`,
    className: `py-16`,
    children: (0, d.jsx)(i, {
      size: `prose`,
      children: (0, d.jsxs)(r, {
        gap: 8,
        children: [
          (0, d.jsxs)(r, {
            gap: 2,
            children: [
              (0, d.jsx)(a, { level: 1, size: `2xl`, children: e.title }),
              (0, d.jsxs)(n, {
                size: `sm`,
                tone: `muted`,
                children: [
                  s,
                  ` `,
                  (0, d.jsx)(o, { date: e.updatedAt, locale: t }),
                ],
              }),
            ],
          }),
          (0, d.jsx)(l, { value: e.body, variant: `compact` }),
        ],
      }),
    }),
  });
}
var d;
function f() {
  return (f = e(() => {
    (s(),
      c(),
      (d = t()),
      (u.__docgenInfo = {
        description: ``,
        methods: [],
        displayName: `ProseLayout`,
        props: {
          page: {
            required: !0,
            tsType: { name: `LegalPage` },
            description: ``,
          },
          locale: { required: !0, tsType: { name: `string` }, description: `` },
          updatedLabel: {
            required: !1,
            tsType: { name: `string` },
            description: ``,
            defaultValue: { value: `"Last updated"`, computed: !1 },
          },
        },
      }));
  }))();
}
export { f as n, u as t };
