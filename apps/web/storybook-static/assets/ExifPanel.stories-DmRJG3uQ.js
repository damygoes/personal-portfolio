import { n as e } from "./rolldown-runtime-DkW27tQK.js";
import { t } from "./jsx-runtime-DeHZSEgm.js";
import { n, t as r } from "./ExifPanel-C-Iw9OF1.js";
var i, a, o, s, c, l;
function u() {
  return (u = e(() => {
    (n(),
      (i = t()),
      (a = {
        title: `Molecules/ExifPanel`,
        component: r,
        tags: [`autodocs`],
        args: {
          exif: {
            camera: `Fujifilm X100V`,
            lens: `23mm f/2`,
            focalLength: `23mm`,
            aperture: `f/2.8`,
            shutterSpeed: `1/125s`,
            iso: 400,
          },
        },
      }),
      (o = {}),
      (s = {
        args: { variant: `overlay` },
        decorators: [
          (e) =>
            (0, i.jsx)(`div`, {
              className: `relative h-40 w-full max-w-md bg-secondary`,
              children: (0, i.jsx)(e, {}),
            }),
        ],
      }),
      (c = { args: { exif: {} } }),
      (l = [`Inline`, `Overlay`, `Empty`]));
  }))();
}
u();
export {
  c as Empty,
  o as Inline,
  s as Overlay,
  l as __namedExportsOrder,
  a as default,
};
