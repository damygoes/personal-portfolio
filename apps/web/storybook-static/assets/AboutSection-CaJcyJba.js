import { n as e } from "./rolldown-runtime-DkW27tQK.js";
import { t } from "./jsx-runtime-DeHZSEgm.js";
import { A as n, S as r, t as i } from "./src-3ugP8gNN.js";
import { n as a, t as o } from "./RichTextRenderer-Bgfx5Rah.js";
import { n as s, t as c } from "./SectionShell-0PZZYm29.js";
function l({ section: e }) {
  return (0, u.jsx)(c, {
    id: e.id,
    index: e.index,
    heading: e.heading,
    children: (0, u.jsxs)(n, {
      cols: { base: 1, lg: 2 },
      gap: 8,
      "data-sanity": e.editTarget,
      children: [
        (0, u.jsx)(`div`, {
          className: `relative aspect-[4/5] overflow-hidden rounded-lg bg-secondary`,
          children: (0, u.jsx)(r, {
            src: e.portrait.src,
            alt: e.portrait.alt,
            blurDataURL: e.portrait.lqip,
            fill: !0,
            sizes: `(min-width: 1024px) 40vw, 100vw`,
          }),
        }),
        (0, u.jsx)(o, { value: e.body, variant: `compact` }),
      ],
    }),
  });
}
var u;
function d() {
  return (d = e(() => {
    (i(),
      a(),
      s(),
      (u = t()),
      (l.__docgenInfo = {
        description: ``,
        methods: [],
        displayName: `AboutSection`,
        props: {
          section: {
            required: !0,
            tsType: { name: `AboutSectionData` },
            description: ``,
          },
        },
      }));
  }))();
}
export { d as n, l as t };
