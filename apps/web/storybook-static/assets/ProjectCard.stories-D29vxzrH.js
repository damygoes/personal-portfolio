import { n as e } from "./rolldown-runtime-DkW27tQK.js";
import { t } from "./jsx-runtime-DeHZSEgm.js";
import { n, t as r } from "./ProjectCard-CUrqYZQB.js";
var i, a, o, s;
function c() {
  return (c = e(() => {
    (n(),
      (i = t()),
      (a = {
        title: `Molecules/ProjectCard`,
        component: r,
        tags: [`autodocs`],
        args: {
          project: {
            id: `proj-1`,
            index: `01`,
            title: `Ellie's Note`,
            summary: `A journalling app for new parents to track feeds, sleep and milestones.`,
            cover: {
              src: `https://picsum.photos/seed/elliesnote/800/600`,
              width: 800,
              height: 600,
              alt: `Screenshot of the Ellie's Note app dashboard`,
            },
            tech: [`TypeScript`, `React Native`, `Node.js`],
            href: `/en/work/elliesnote`,
          },
        },
        decorators: [
          (e) =>
            (0, i.jsx)(`div`, {
              className: `max-w-sm`,
              children: (0, i.jsx)(e, {}),
            }),
        ],
      }),
      (o = {}),
      (s = [`Default`]));
  }))();
}
c();
export { o as Default, s as __namedExportsOrder, a as default };
