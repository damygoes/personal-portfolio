import { n as e } from "./rolldown-runtime-DkW27tQK.js";
import { t } from "./jsx-runtime-DeHZSEgm.js";
import { B as n, M as r, t as i } from "./src-3ugP8gNN.js";
function a({ group: e }) {
  return (0, o.jsxs)(r, {
    gap: 2,
    "data-slot": `skill-group`,
    "data-sanity": e.editTarget,
    children: [
      (0, o.jsx)(n, {
        size: `sm`,
        weight: `semibold`,
        className: `text-primary uppercase tracking-widest`,
        children: e.title,
      }),
      (0, o.jsx)(n, {
        size: `sm`,
        tone: `muted`,
        children: e.skills.join(`, `),
      }),
    ],
  });
}
var o;
function s() {
  return (s = e(() => {
    (i(),
      (o = t()),
      (a.__docgenInfo = {
        description: ``,
        methods: [],
        displayName: `SkillGroup`,
        props: {
          group: {
            required: !0,
            tsType: { name: `SkillGroupData` },
            description: ``,
          },
        },
      }));
  }))();
}
export { s as n, a as t };
