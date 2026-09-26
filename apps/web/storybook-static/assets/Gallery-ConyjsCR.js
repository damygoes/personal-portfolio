import { n as e } from "./rolldown-runtime-DkW27tQK.js";
import { n as t } from "./iframe-BESghBLE.js";
import { t as n } from "./jsx-runtime-DeHZSEgm.js";
import { S as r, t as i } from "./src-3ugP8gNN.js";
import { n as a, t as o } from "./cn-DT5hf25b.js";
import { n as s, t as c } from "./Lightbox-CplaJCrD.js";
function l({ index: e, block: t, onOpen: n }) {
  let i = t.images[e];
  return (0, h.jsx)(`button`, {
    type: `button`,
    onClick: () => n(e),
    className: `relative aspect-square w-full overflow-hidden bg-secondary`,
    children: (0, h.jsx)(r, {
      src: i.src,
      alt: i.alt,
      blurDataURL: i.lqip,
      fill: !0,
      sizes: `(min-width: 1024px) 25vw, 50vw`,
    }),
  });
}
function u({ block: e, onOpen: t }) {
  return (0, h.jsx)(`div`, {
    className: `grid grid-cols-2 gap-2 sm:grid-cols-3`,
    children: e.images.map((n, r) =>
      (0, h.jsx)(l, { index: r, block: e, onOpen: t }, r),
    ),
  });
}
function d({ block: e, onOpen: t }) {
  return (0, h.jsx)(`div`, {
    className: `columns-2 gap-2 sm:columns-3 [&>*]:mb-2`,
    children: e.images.map((e, n) =>
      (0, h.jsx)(
        `button`,
        {
          type: `button`,
          onClick: () => t(n),
          className: `relative block w-full overflow-hidden bg-secondary`,
          children: (0, h.jsx)(r, {
            src: e.src,
            alt: e.alt,
            blurDataURL: e.lqip,
            width: e.width,
            height: e.height,
            className: `w-full`,
          }),
        },
        n,
      ),
    ),
  });
}
function f({ block: e, onOpen: t }) {
  return (0, h.jsx)(`div`, {
    className: `flex snap-x snap-mandatory gap-2 overflow-x-auto no-scrollbar`,
    children: e.images.map((n, r) =>
      (0, h.jsx)(
        `div`,
        {
          className: `w-3/4 shrink-0 snap-start sm:w-1/2 lg:w-1/3`,
          children: (0, h.jsx)(l, { index: r, block: e, onOpen: t }),
        },
        r,
      ),
    ),
  });
}
function p({ block: e }) {
  let [t, n] = (0, m.useState)(null),
    r = g[e.layout];
  return (0, h.jsxs)(`figure`, {
    "data-slot": `gallery`,
    className: o(`mx-auto max-w-wide`),
    children: [
      (0, h.jsx)(r, { block: e, onOpen: n }),
      e.caption &&
        (0, h.jsx)(`figcaption`, {
          className: `mt-2 text-center text-sm text-muted-foreground`,
          children: e.caption,
        }),
      (0, h.jsx)(c, {
        photos: e.images,
        startIndex: t ?? 0,
        open: t !== null,
        onOpenChange: (e) => !e && n(null),
      }),
    ],
  });
}
var m, h, g;
function _() {
  return (_ = e(() => {
    (i(),
      a(),
      (m = t()),
      s(),
      (h = n()),
      (g = { grid: u, masonry: d, carousel: f }),
      (p.__docgenInfo = {
        description: ``,
        methods: [],
        displayName: `Gallery`,
        props: {
          block: {
            required: !0,
            tsType: { name: `GalleryBlock` },
            description: ``,
          },
        },
      }));
  }))();
}
export { _ as n, p as t };
