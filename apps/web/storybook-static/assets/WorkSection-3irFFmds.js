import { n as e } from "./rolldown-runtime-DkW27tQK.js";
import { t } from "./jsx-runtime-DeHZSEgm.js";
import { A as n, B as r, I as i, t as a } from "./src-3ugP8gNN.js";
import { n as o, t as s } from "./ProjectCard-CUrqYZQB.js";
import { n as c, t as l } from "./SectionShell-0PZZYm29.js";
function u({
  section: e,
  viewAllHref: t,
  viewAllLabel: a = `View all projects`,
}) {
  return (0, d.jsx)(l, {
    id: e.id,
    index: e.index,
    heading: e.heading,
    children: (0, d.jsxs)(`div`, {
      "data-sanity": e.editTarget,
      className: `flex flex-col gap-8`,
      children: [
        e.intro &&
          (0, d.jsx)(r, {
            size: `lg`,
            tone: `muted`,
            className: `max-w-prose`,
            children: e.intro,
          }),
        (0, d.jsx)(n, {
          cols: { base: 1, sm: 2, lg: 3 },
          gap: 12,
          children: e.projects.map((e) => (0, d.jsx)(s, { project: e }, e.id)),
        }),
        t &&
          (0, d.jsx)(i, {
            href: t,
            underline: `hover`,
            className: `self-start`,
            children: a,
          }),
      ],
    }),
  });
}
var d;
function f() {
  return (f = e(() => {
    (a(),
      o(),
      c(),
      (d = t()),
      (u.__docgenInfo = {
        description: ``,
        methods: [],
        displayName: `WorkSection`,
        props: {
          section: {
            required: !0,
            tsType: { name: `WorkSectionData` },
            description: ``,
          },
          viewAllHref: {
            required: !1,
            tsType: { name: `string` },
            description: ``,
          },
          viewAllLabel: {
            required: !1,
            tsType: { name: `string` },
            description: ``,
            defaultValue: { value: `"View all projects"`, computed: !1 },
          },
        },
      }));
  }))();
}
export { f as n, u as t };
