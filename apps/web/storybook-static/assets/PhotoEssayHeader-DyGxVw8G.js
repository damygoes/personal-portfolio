import { n as e } from "./rolldown-runtime-DkW27tQK.js";
import { t } from "./jsx-runtime-DeHZSEgm.js";
import {
  M as n,
  P as r,
  R as i,
  S as a,
  c as o,
  t as s,
} from "./src-3ugP8gNN.js";
import { n as c, t as l } from "./PhotoSummary-Ca1ho9PM.js";
function u({ post: e, locale: t, photoCountLabel: s }) {
  return (0, d.jsxs)(`header`, {
    "data-slot": `photo-essay-header`,
    className: `relative flex h-[80vh] min-h-[480px] items-end`,
    children: [
      (0, d.jsx)(`div`, {
        className: `absolute inset-0`,
        children: (0, d.jsx)(a, {
          src: e.cover.src,
          alt: e.cover.alt,
          blurDataURL: e.cover.lqip,
          fill: !0,
          priority: !0,
          sizes: `100vw`,
          className: `brightness-75`,
        }),
      }),
      (0, d.jsx)(r, {
        size: `wide`,
        className: `relative pb-12 text-white`,
        children: (0, d.jsxs)(n, {
          gap: 3,
          children: [
            (0, d.jsx)(o, { date: e.publishedAt, locale: t }),
            (0, d.jsx)(i, { level: 1, size: `2xl`, children: e.title }),
            e.photoSummary &&
              (0, d.jsx)(l, { summary: e.photoSummary, photoCountLabel: s }),
          ],
        }),
      }),
    ],
  });
}
var d;
function f() {
  return (f = e(() => {
    (s(),
      c(),
      (d = t()),
      (u.__docgenInfo = {
        description: ``,
        methods: [],
        displayName: `PhotoEssayHeader`,
        props: {
          post: { required: !0, tsType: { name: `Post` }, description: `` },
          locale: { required: !0, tsType: { name: `string` }, description: `` },
          photoCountLabel: {
            required: !0,
            tsType: { name: `string` },
            description: ``,
          },
        },
      }));
  }))();
}
export { f as n, u as t };
