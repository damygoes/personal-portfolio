import { n as e } from "./rolldown-runtime-DkW27tQK.js";
import { t } from "./jsx-runtime-DeHZSEgm.js";
import { B as n, t as r } from "./src-3ugP8gNN.js";
import { n as i, t as a } from "./portable-text-spans-CpkEatpk.js";
function o({ block: e }) {
  return e.listItem
    ? (0, s.jsx)(`li`, { children: i(e) })
    : e.style === `blockquote`
      ? (0, s.jsx)(`blockquote`, {
          className: `border-l-2 border-border pl-4 italic text-muted-foreground`,
          children: i(e),
        })
      : (0, s.jsx)(n, { as: `p`, children: i(e) });
}
var s;
function c() {
  return (c = e(() => {
    (r(),
      a(),
      (s = t()),
      (o.__docgenInfo = {
        description: ``,
        methods: [],
        displayName: `ProseBlock`,
        props: {
          block: {
            required: !0,
            tsType: { name: `PortableTextBlock` },
            description: ``,
          },
        },
      }));
  }))();
}
export { c as n, o as t };
