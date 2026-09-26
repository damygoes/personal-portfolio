import { n as e } from "./rolldown-runtime-DkW27tQK.js";
import { t } from "./jsx-runtime-DeHZSEgm.js";
import { n, t as r } from "./ExifItem-CbNmEB-y.js";
var i, a, o, s, c;
function l() {
  return (l = e(() => {
    (n(),
      (i = t()),
      (a = {
        title: `Atoms/ExifItem`,
        component: r,
        tags: [`autodocs`],
        args: { label: `Aperture`, value: `f/2.8` },
      }),
      (o = {}),
      (s = {
        render: () =>
          (0, i.jsxs)(`dl`, {
            className: `grid grid-cols-2 gap-4 sm:grid-cols-4`,
            children: [
              (0, i.jsx)(r, { label: `Camera`, value: `Fujifilm X100V` }),
              (0, i.jsx)(r, { label: `Lens`, value: `23mm f/2` }),
              (0, i.jsx)(r, { label: `Aperture`, value: `f/2.8` }),
              (0, i.jsx)(r, { label: `Shutter speed`, value: `1/125s` }),
            ],
          }),
      }),
      (c = [`Default`, `Group`]));
  }))();
}
l();
export { o as Default, s as Group, c as __namedExportsOrder, a as default };
