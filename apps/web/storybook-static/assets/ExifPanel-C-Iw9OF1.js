import { n as e } from "./rolldown-runtime-DkW27tQK.js";
import { t } from "./jsx-runtime-DeHZSEgm.js";
import { n, t as r } from "./ExifItem-CbNmEB-y.js";
import { n as i, t as a } from "./cn-DT5hf25b.js";
function o({ exif: e, labels: t, variant: n = `inline` }) {
  let i = { ...c, ...t },
    o = [
      e.camera && { label: i.camera, value: e.camera },
      e.lens && { label: i.lens, value: e.lens },
      e.focalLength && { label: i.focalLength, value: e.focalLength },
      e.aperture && { label: i.aperture, value: e.aperture },
      e.shutterSpeed && { label: i.shutterSpeed, value: e.shutterSpeed },
      e.iso && { label: i.iso, value: String(e.iso) },
    ].filter((e) => !!e);
  return o.length === 0
    ? null
    : (0, s.jsx)(`dl`, {
        "data-slot": `exif-panel`,
        className: a(
          `grid grid-cols-2 gap-4 sm:grid-cols-3`,
          n === `overlay` &&
            `absolute inset-x-0 bottom-0 bg-background/80 p-4 backdrop-blur-sm`,
        ),
        children: o.map((e) =>
          (0, s.jsx)(r, { label: e.label, value: e.value }, e.label),
        ),
      });
}
var s, c;
function l() {
  return (l = e(() => {
    (n(),
      i(),
      (s = t()),
      (c = {
        camera: `Camera`,
        lens: `Lens`,
        focalLength: `Focal length`,
        aperture: `Aperture`,
        shutterSpeed: `Shutter speed`,
        iso: `ISO`,
      }),
      (o.__docgenInfo = {
        description: ``,
        methods: [],
        displayName: `ExifPanel`,
        props: {
          exif: { required: !0, tsType: { name: `Exif` }, description: `` },
          labels: {
            required: !1,
            tsType: { name: `ExifPanelLabels` },
            description: ``,
          },
          variant: {
            required: !1,
            tsType: {
              name: `union`,
              raw: `"inline" | "overlay"`,
              elements: [
                { name: `literal`, value: `"inline"` },
                { name: `literal`, value: `"overlay"` },
              ],
            },
            description: ``,
            defaultValue: { value: `"inline"`, computed: !1 },
          },
        },
      }));
  }))();
}
export { l as n, o as t };
