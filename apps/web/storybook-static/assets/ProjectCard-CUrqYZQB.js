import { n as e } from "./rolldown-runtime-DkW27tQK.js";
import { t } from "./jsx-runtime-DeHZSEgm.js";
import {
  B as n,
  I as r,
  M as i,
  R as a,
  S as o,
  b as s,
  g as c,
  t as l,
} from "./src-3ugP8gNN.js";
function u({ project: e }) {
  return (0, d.jsxs)(r, {
    href: e.href,
    underline: `none`,
    "data-slot": `project-card`,
    "data-sanity": e.editTarget,
    className: `group flex flex-col gap-4`,
    children: [
      (0, d.jsx)(`div`, {
        className: `relative aspect-[4/3] overflow-hidden rounded-lg bg-secondary`,
        children: (0, d.jsx)(o, {
          src: e.cover.src,
          alt: e.cover.alt,
          blurDataURL: e.cover.lqip,
          objectPosition: e.cover.focalPoint
            ? `${e.cover.focalPoint.x * 100}% ${e.cover.focalPoint.y * 100}%`
            : void 0,
          fill: !0,
          sizes: `(min-width: 1024px) 33vw, 100vw`,
          className: `transition-transform duration-300 group-hover:scale-105`,
        }),
      }),
      (0, d.jsxs)(i, {
        gap: 2,
        children: [
          (0, d.jsxs)(`div`, {
            className: `flex items-center gap-2`,
            children: [
              (0, d.jsx)(s, { index: e.index }),
              (0, d.jsx)(a, { level: 3, size: `md`, children: e.title }),
            ],
          }),
          (0, d.jsx)(n, { size: `base`, tone: `muted`, children: e.summary }),
          (0, d.jsx)(`div`, {
            className: `flex flex-wrap gap-2 pt-1`,
            children: e.tech.map((e) =>
              (0, d.jsx)(c, { label: e, size: `sm` }, e),
            ),
          }),
        ],
      }),
    ],
  });
}
var d;
function f() {
  return (f = e(() => {
    (l(),
      (d = t()),
      (u.__docgenInfo = {
        description: ``,
        methods: [],
        displayName: `ProjectCard`,
        props: {
          project: {
            required: !0,
            tsType: { name: `ProjectCardData` },
            description: ``,
          },
        },
      }));
  }))();
}
export { f as n, u as t };
