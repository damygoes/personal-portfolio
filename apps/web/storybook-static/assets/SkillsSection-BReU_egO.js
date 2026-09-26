import { n as e } from "./rolldown-runtime-DkW27tQK.js";
import { t } from "./jsx-runtime-DeHZSEgm.js";
import { A as n, t as r } from "./src-3ugP8gNN.js";
import { n as i, t as a } from "./Marquee-ByLmngM2.js";
import { n as o, t as s } from "./SkillGroup-xn_B4482.js";
import { n as c, t as l } from "./SectionShell-0PZZYm29.js";
function u({ section: e }) {
  return (0, d.jsx)(l, {
    id: e.id,
    index: e.index,
    heading: e.heading,
    children: (0, d.jsxs)(`div`, {
      className: `flex flex-col gap-20`,
      children: [
        (0, d.jsx)(a, { rows: e.marqueeRows }),
        (0, d.jsx)(n, {
          cols: { base: 1, sm: 2, lg: 4 },
          gap: 10,
          children: e.groups.map((e) => (0, d.jsx)(s, { group: e }, e.title)),
        }),
      ],
    }),
  });
}
var d;
function f() {
  return (f = e(() => {
    (r(),
      i(),
      o(),
      c(),
      (d = t()),
      (u.__docgenInfo = {
        description: ``,
        methods: [],
        displayName: `SkillsSection`,
        props: {
          section: {
            required: !0,
            tsType: { name: `SkillsSectionData` },
            description: ``,
          },
        },
      }));
  }))();
}
export { f as n, u as t };
