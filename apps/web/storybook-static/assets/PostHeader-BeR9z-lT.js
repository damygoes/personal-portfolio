import { n as e } from "./rolldown-runtime-DkW27tQK.js";
import { t } from "./jsx-runtime-DeHZSEgm.js";
import { M as n, P as r, R as i, S as a, t as o } from "./src-3ugP8gNN.js";
import { n as s, t as c } from "./PostMeta-BEYrKDN2.js";
function l({ post: e, locale: t, readingTimeLabel: o, updatedLabel: s }) {
  return (0, u.jsxs)(`header`, {
    "data-slot": `post-header`,
    className: `py-16`,
    children: [
      (0, u.jsx)(r, {
        size: `prose`,
        children: (0, u.jsxs)(n, {
          gap: 4,
          children: [
            (0, u.jsx)(i, { level: 1, size: `2xl`, children: e.title }),
            (0, u.jsx)(c, {
              publishedAt: e.publishedAt,
              updatedAt: e.updatedAt,
              readingTimeMinutes: e.readingTimeMinutes,
              categories: e.categories,
              locale: t,
              readingTimeLabel: o,
              updatedLabel: s,
            }),
          ],
        }),
      }),
      (0, u.jsx)(r, {
        size: `wide`,
        className: `mt-8`,
        children: (0, u.jsx)(`div`, {
          className: `relative aspect-[16/9] overflow-hidden rounded-lg bg-secondary`,
          children: (0, u.jsx)(a, {
            src: e.cover.src,
            alt: e.cover.alt,
            blurDataURL: e.cover.lqip,
            fill: !0,
            priority: !0,
            sizes: `100vw`,
          }),
        }),
      }),
    ],
  });
}
var u;
function d() {
  return (d = e(() => {
    (o(),
      s(),
      (u = t()),
      (l.__docgenInfo = {
        description: ``,
        methods: [],
        displayName: `PostHeader`,
        props: {
          post: { required: !0, tsType: { name: `Post` }, description: `` },
          locale: { required: !0, tsType: { name: `string` }, description: `` },
          readingTimeLabel: {
            required: !0,
            tsType: { name: `string` },
            description: ``,
          },
          updatedLabel: {
            required: !1,
            tsType: { name: `string` },
            description: ``,
          },
        },
      }));
  }))();
}
export { d as n, l as t };
