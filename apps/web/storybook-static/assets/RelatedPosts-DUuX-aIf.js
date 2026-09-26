import { n as e } from "./rolldown-runtime-DkW27tQK.js";
import { t } from "./jsx-runtime-DeHZSEgm.js";
import { A as n, M as r, R as i, t as a } from "./src-3ugP8gNN.js";
import { n as o, t as s } from "./PostCard-D88PLe3F.js";
function c({
  posts: e,
  locale: t,
  readingTimeLabel: a,
  heading: o = `Related posts`,
}) {
  return e.length === 0
    ? null
    : (0, l.jsxs)(r, {
        gap: 6,
        "data-slot": `related-posts`,
        children: [
          (0, l.jsx)(i, { level: 2, size: `lg`, children: o }),
          (0, l.jsx)(n, {
            cols: { base: 1, sm: 3 },
            gap: 6,
            children: e.map((e) =>
              (0, l.jsx)(
                s,
                {
                  post: e,
                  locale: t,
                  readingTimeLabel: a(e.readingTimeMinutes),
                  variant: `compact`,
                },
                e.id,
              ),
            ),
          }),
        ],
      });
}
var l;
function u() {
  return (u = e(() => {
    (a(),
      o(),
      (l = t()),
      (c.__docgenInfo = {
        description: ``,
        methods: [],
        displayName: `RelatedPosts`,
        props: {
          posts: {
            required: !0,
            tsType: {
              name: `Array`,
              elements: [{ name: `PostCardData` }],
              raw: `PostCardData[]`,
            },
            description: ``,
          },
          locale: { required: !0, tsType: { name: `string` }, description: `` },
          readingTimeLabel: {
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
          heading: {
            required: !1,
            tsType: { name: `string` },
            description: ``,
            defaultValue: { value: `"Related posts"`, computed: !1 },
          },
        },
      }));
  }))();
}
export { u as n, c as t };
