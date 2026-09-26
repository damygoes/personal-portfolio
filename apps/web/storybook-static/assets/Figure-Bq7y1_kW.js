import { n as e } from "./rolldown-runtime-DkW27tQK.js";
import { t } from "./jsx-runtime-DeHZSEgm.js";
import { S as n, t as r } from "./src-3ugP8gNN.js";
import { n as i, t as a } from "./cn-DT5hf25b.js";
import { n as o, t as s } from "./ExifPanel-C-Iw9OF1.js";
function c({ block: e, exifLabels: t }) {
  let { image: r } = e;
  return (0, l.jsxs)(`figure`, {
    "data-slot": `figure`,
    className: a(`relative mx-auto`, u[e.size]),
    children: [
      (0, l.jsxs)(`div`, {
        className: `relative aspect-[3/2] w-full overflow-hidden bg-secondary`,
        children: [
          (0, l.jsx)(n, {
            src: r.src,
            alt: r.alt,
            blurDataURL: r.lqip,
            objectPosition: r.focalPoint
              ? `${r.focalPoint.x * 100}% ${r.focalPoint.y * 100}%`
              : void 0,
            fill: !0,
            sizes: `(min-width: 1024px) 80vw, 100vw`,
          }),
          e.showExif &&
            r.exif &&
            (0, l.jsx)(s, { exif: r.exif, labels: t, variant: `overlay` }),
        ],
      }),
      r.caption &&
        (0, l.jsx)(`figcaption`, {
          className: `mt-2 text-center text-sm text-muted-foreground`,
          children: r.caption,
        }),
    ],
  });
}
var l, u;
function d() {
  return (d = e(() => {
    (r(),
      i(),
      o(),
      (l = t()),
      (u = {
        inline: `max-w-prose`,
        wide: `max-w-wide`,
        fullBleed: `max-w-none`,
      }),
      (c.__docgenInfo = {
        description: ``,
        methods: [],
        displayName: `Figure`,
        props: {
          block: {
            required: !0,
            tsType: { name: `FigureBlock` },
            description: ``,
          },
          exifLabels: {
            required: !1,
            tsType: { name: `ExifPanelLabels` },
            description: ``,
          },
        },
      }));
  }))();
}
export { d as n, c as t };
