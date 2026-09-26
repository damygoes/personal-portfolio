import { n as e } from "./rolldown-runtime-DkW27tQK.js";
import { t } from "./jsx-runtime-DeHZSEgm.js";
import { B as n, c as r, g as i, o as a, t as o } from "./src-3ugP8gNN.js";
function s({
  publishedAt: e,
  updatedAt: t,
  readingTimeMinutes: o,
  categories: s,
  locale: l,
  readingTimeLabel: u,
  updatedLabel: d = `Updated`,
}) {
  return (0, c.jsxs)(`div`, {
    "data-slot": `post-meta`,
    className: `flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-muted-foreground`,
    children: [
      (0, c.jsx)(r, { date: e, locale: l }),
      t &&
        (0, c.jsxs)(n, {
          as: `span`,
          size: `sm`,
          tone: `muted`,
          children: [d, ` `, (0, c.jsx)(r, { date: t, locale: l })],
        }),
      (0, c.jsx)(`span`, { "aria-hidden": `true`, children: `·` }),
      (0, c.jsx)(a, { minutes: o, label: u }),
      (0, c.jsx)(`span`, { "aria-hidden": `true`, children: `·` }),
      (0, c.jsx)(`div`, {
        className: `flex flex-wrap gap-1.5`,
        children: s.map((e) =>
          (0, c.jsx)(i, { label: e.title, href: e.href, size: `sm` }, e.slug),
        ),
      }),
    ],
  });
}
var c;
function l() {
  return (l = e(() => {
    (o(),
      (c = t()),
      (s.__docgenInfo = {
        description: ``,
        methods: [],
        displayName: `PostMeta`,
        props: {
          publishedAt: {
            required: !0,
            tsType: { name: `string` },
            description: ``,
          },
          updatedAt: {
            required: !1,
            tsType: { name: `string` },
            description: ``,
          },
          readingTimeMinutes: {
            required: !0,
            tsType: { name: `number` },
            description: ``,
          },
          categories: {
            required: !0,
            tsType: {
              name: `Array`,
              elements: [{ name: `Category` }],
              raw: `Category[]`,
            },
            description: ``,
          },
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
            defaultValue: { value: `"Updated"`, computed: !1 },
          },
        },
      }));
  }))();
}
export { l as n, s as t };
