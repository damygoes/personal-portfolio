import { n as e } from "./rolldown-runtime-DkW27tQK.js";
import { t } from "./jsx-runtime-DeHZSEgm.js";
import { A as n, B as r, t as i } from "./src-3ugP8gNN.js";
import { n as a, t as o } from "./PostCard-D88PLe3F.js";
function s({
  posts: e,
  locale: t,
  readingTimeLabel: i,
  emptyLabel: a = `No posts yet.`,
}) {
  return e.length === 0
    ? (0, c.jsx)(r, { size: `base`, tone: `muted`, children: a })
    : (0, c.jsx)(n, {
        "data-slot": `post-grid`,
        cols: { base: 1, sm: 2, lg: 3 },
        gap: 8,
        children: e.map((e) =>
          (0, c.jsx)(
            o,
            { post: e, locale: t, readingTimeLabel: i(e.readingTimeMinutes) },
            e.id,
          ),
        ),
      });
}
var c;
function l() {
  return (l = e(() => {
    (i(),
      a(),
      (c = t()),
      (s.__docgenInfo = {
        description: ``,
        methods: [],
        displayName: `PostGrid`,
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
          emptyLabel: {
            required: !1,
            tsType: { name: `string` },
            description: ``,
            defaultValue: { value: `"No posts yet."`, computed: !1 },
          },
        },
      }));
  }))();
}
export { l as n, s as t };
