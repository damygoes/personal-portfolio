import { n as e } from "./rolldown-runtime-DkW27tQK.js";
import { n as t, t as n } from "./WorkSection-3irFFmds.js";
var r, i, a;
function o() {
  return (o = e(() => {
    (t(),
      (r = {
        title: `Organisms/WorkSection`,
        component: n,
        tags: [`autodocs`],
        args: {
          section: {
            id: `work`,
            index: `03`,
            heading: `Selected work`,
            intro: `A few projects I'm proud of.`,
            projects: [
              {
                id: `proj-1`,
                index: `01`,
                title: `Ellie's Note`,
                summary: `A journalling app for new parents.`,
                cover: {
                  src: `https://picsum.photos/seed/work-1/800/600`,
                  width: 800,
                  height: 600,
                  alt: `Ellie's Note`,
                },
                tech: [`TypeScript`, `React Native`],
                href: `/en/work/elliesnote`,
              },
              {
                id: `proj-2`,
                index: `02`,
                title: `damilolabada.com`,
                summary: `This site.`,
                cover: {
                  src: `https://picsum.photos/seed/work-2/800/600`,
                  width: 800,
                  height: 600,
                  alt: `Portfolio`,
                },
                tech: [`Next.js`, `Sanity`],
                href: `/en/work/portfolio`,
              },
            ],
          },
        },
      }),
      (i = {}),
      (a = [`Default`]));
  }))();
}
o();
export { i as Default, a as __namedExportsOrder, r as default };
