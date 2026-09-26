import { n as e } from "./rolldown-runtime-DkW27tQK.js";
import { n as t } from "./iframe-BESghBLE.js";
import { t as n } from "./jsx-runtime-DeHZSEgm.js";
import { H as r, t as i } from "./src-3ugP8gNN.js";
import { n as a, t as o } from "./Lightbox-CplaJCrD.js";
var s, c, l, u, d, f, p;
function m() {
  return (m = e(() => {
    ((s = t()),
      i(),
      a(),
      (c = n()),
      (l = [
        {
          src: `https://picsum.photos/seed/lightbox-1/1600/1000`,
          width: 1600,
          height: 1e3,
          alt: `Photo 1`,
        },
        {
          src: `https://picsum.photos/seed/lightbox-2/1600/1000`,
          width: 1600,
          height: 1e3,
          alt: `Photo 2`,
          exif: { camera: `Fujifilm X100V`, aperture: `f/2.8` },
        },
      ]),
      (u = {
        title: `Organisms/Lightbox`,
        component: o,
        tags: [`autodocs`],
        args: { photos: l, startIndex: 0, open: !0, onOpenChange: () => {} },
      }),
      (d = {}),
      (f = {
        render: () => {
          function e() {
            let [e, t] = (0, s.useState)(!1);
            return (0, c.jsxs)(c.Fragment, {
              children: [
                (0, c.jsx)(r, {
                  onClick: () => t(!0),
                  children: `Open lightbox`,
                }),
                (0, c.jsx)(o, {
                  photos: l,
                  startIndex: 0,
                  open: e,
                  onOpenChange: t,
                }),
              ],
            });
          }
          return (0, c.jsx)(e, {});
        },
      }),
      (p = [`Open`, `Interactive`]));
  }))();
}
m();
export { f as Interactive, d as Open, p as __namedExportsOrder, u as default };
