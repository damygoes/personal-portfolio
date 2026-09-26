import { n as e } from "./rolldown-runtime-DkW27tQK.js";
import { t } from "./jsx-runtime-DeHZSEgm.js";
import { P as n, t as r } from "./src-3ugP8gNN.js";
import { n as i, t as a } from "./RelatedPosts-DUuX-aIf.js";
import { n as o, t as s } from "./RichTextRenderer-Bgfx5Rah.js";
import { n as c, t as l } from "./PhotoEssayHeader-DyGxVw8G.js";
function u({
  post: e,
  locale: t,
  photoCountLabel: r,
  relatedReadingTimeLabel: i,
  relatedHeading: o,
  richTextLabels: c,
}) {
  return (0, d.jsxs)(`article`, {
    "data-slot": `photo-essay-layout`,
    children: [
      (0, d.jsx)(l, { post: e, locale: t, photoCountLabel: r }),
      (0, d.jsx)(n, {
        size: `prose`,
        className: `py-8`,
        children: (0, d.jsx)(s, {
          value: e.body,
          variant: `photoEssay`,
          labels: c,
        }),
      }),
      (0, d.jsx)(n, {
        size: `wide`,
        className: `pb-16`,
        children: (0, d.jsx)(a, {
          posts: e.related,
          locale: t,
          readingTimeLabel: i,
          heading: o,
        }),
      }),
    ],
  });
}
var d;
function f() {
  return (f = e(() => {
    (r(),
      i(),
      c(),
      o(),
      (d = t()),
      (u.__docgenInfo = {
        description: ``,
        methods: [],
        displayName: `PhotoEssayLayout`,
        props: {
          post: { required: !0, tsType: { name: `Post` }, description: `` },
          locale: { required: !0, tsType: { name: `string` }, description: `` },
          photoCountLabel: {
            required: !0,
            tsType: { name: `string` },
            description: ``,
          },
          relatedReadingTimeLabel: {
            required: !0,
            tsType: {
              name: `signature`,
              type: `function`,
              raw: `(minutes: number) => string`,
              signature: {
                arguments: [{ type: { name: `number` }, name: `minutes` }],
                return: { name: `string` },
              },
            },
            description: ``,
          },
          relatedHeading: {
            required: !1,
            tsType: { name: `string` },
            description: ``,
          },
          richTextLabels: {
            required: !1,
            tsType: { name: `RichTextLabels` },
            description: ``,
          },
        },
      }));
  }))();
}
export { f as n, u as t };
