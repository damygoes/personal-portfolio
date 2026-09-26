import { n as e } from "./rolldown-runtime-DkW27tQK.js";
import { t } from "./jsx-runtime-DeHZSEgm.js";
import {
  B as n,
  I as r,
  M as i,
  R as a,
  S as o,
  c as s,
  g as c,
  o as l,
  t as u,
} from "./src-3ugP8gNN.js";
import { n as d, t as f } from "./cn-DT5hf25b.js";
function p({
  post: e,
  locale: t,
  readingTimeLabel: u,
  variant: d = `default`,
}) {
  let p = d === `compact`,
    h = d === `featured`;
  return (0, m.jsxs)(r, {
    href: e.href,
    underline: `none`,
    "data-slot": `post-card`,
    "data-sanity": e.editTarget,
    className: f(`group flex gap-4`, p ? `flex-row items-center` : `flex-col`),
    children: [
      (0, m.jsx)(`div`, {
        className: f(
          `relative overflow-hidden rounded-lg bg-secondary`,
          p
            ? `aspect-square w-20 shrink-0`
            : h
              ? `aspect-[16/9]`
              : `aspect-[4/3]`,
        ),
        children: (0, m.jsx)(o, {
          src: e.cover.src,
          alt: e.cover.alt,
          blurDataURL: e.cover.lqip,
          fill: !0,
          sizes: p ? `80px` : `(min-width: 1024px) 33vw, 100vw`,
          className: `transition-transform duration-300 group-hover:scale-105`,
        }),
      }),
      (0, m.jsxs)(i, {
        gap: p ? 1 : 2,
        children: [
          (0, m.jsx)(`div`, {
            className: `flex flex-wrap gap-1.5`,
            children: e.categories.map((e) =>
              (0, m.jsx)(c, { label: e.title, size: `sm` }, e.slug),
            ),
          }),
          (0, m.jsx)(a, {
            level: 3,
            size: p ? `sm` : h ? `lg` : `md`,
            children: e.title,
          }),
          !p &&
            (0, m.jsx)(n, { size: `base`, tone: `muted`, children: e.excerpt }),
          (0, m.jsxs)(`div`, {
            className: `flex items-center gap-2 text-sm text-muted-foreground`,
            children: [
              (0, m.jsx)(s, { date: e.publishedAt, locale: t }),
              (0, m.jsx)(`span`, { "aria-hidden": `true`, children: `·` }),
              (0, m.jsx)(l, { minutes: e.readingTimeMinutes, label: u }),
            ],
          }),
        ],
      }),
    ],
  });
}
var m;
function h() {
  return (h = e(() => {
    (u(),
      d(),
      (m = t()),
      (p.__docgenInfo = {
        description: ``,
        methods: [],
        displayName: `PostCard`,
        props: {
          post: {
            required: !0,
            tsType: { name: `PostCardData` },
            description: ``,
          },
          locale: { required: !0, tsType: { name: `string` }, description: `` },
          readingTimeLabel: {
            required: !0,
            tsType: { name: `string` },
            description: ``,
          },
          variant: {
            required: !1,
            tsType: {
              name: `union`,
              raw: `"default" | "featured" | "compact"`,
              elements: [
                { name: `literal`, value: `"default"` },
                { name: `literal`, value: `"featured"` },
                { name: `literal`, value: `"compact"` },
              ],
            },
            description: ``,
            defaultValue: { value: `"default"`, computed: !1 },
          },
        },
      }));
  }))();
}
export { h as n, p as t };
