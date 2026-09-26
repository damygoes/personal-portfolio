import { n as e } from "./rolldown-runtime-DkW27tQK.js";
import { n as t, t as n } from "./AboutSection-CaJcyJba.js";
var r, i, a;
function o() {
  return (o = e(() => {
    (t(),
      (r = {
        title: `Organisms/AboutSection`,
        component: n,
        tags: [`autodocs`],
        args: {
          section: {
            id: `about`,
            index: `01`,
            heading: `About`,
            portrait: {
              src: `https://picsum.photos/seed/portrait/800/1000`,
              width: 800,
              height: 1e3,
              alt: `Portrait photo`,
            },
            body: [
              {
                _type: `block`,
                _key: `about-p1`,
                style: `normal`,
                markDefs: [],
                children: [
                  {
                    _type: `span`,
                    _key: `about-p1-span`,
                    text: `A short bio paragraph.`,
                  },
                ],
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
