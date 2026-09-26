import { n as e } from "./rolldown-runtime-DkW27tQK.js";
import { t } from "./jsx-runtime-DeHZSEgm.js";
import { M as n, P as r, R as i, b as a, t as o } from "./src-3ugP8gNN.js";
function s({ id: e, index: t, heading: o, children: s }) {
  return (0, c.jsx)(`section`, {
    id: e,
    "data-slot": `section-shell`,
    className: `py-16 sm:py-24`,
    children: (0, c.jsx)(r, {
      children: (0, c.jsxs)(n, {
        gap: 12,
        children: [
          (0, c.jsxs)(`div`, {
            className: `flex items-center gap-3`,
            children: [
              (0, c.jsx)(a, { index: t }),
              (0, c.jsx)(i, { level: 2, size: `xl`, children: o }),
            ],
          }),
          s,
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
        displayName: `SectionShell`,
        props: {
          id: { required: !0, tsType: { name: `SectionId` }, description: `` },
          index: { required: !0, tsType: { name: `string` }, description: `` },
          heading: {
            required: !0,
            tsType: { name: `string` },
            description: ``,
          },
          children: {
            required: !0,
            tsType: { name: `ReactReactNode`, raw: `React.ReactNode` },
            description: ``,
          },
        },
      }));
  }))();
}
export { l as n, s as t };
