import { n as e } from "./rolldown-runtime-DkW27tQK.js";
import { t } from "./jsx-runtime-DeHZSEgm.js";
import { A as n, E as r, M as i, P as a, t as o } from "./src-3ugP8gNN.js";
import { n as s, t as c } from "./PrevNextNav-Cn4YbfWd.js";
import { n as l, t as u } from "./TableOfContents-DRuDK5QS.js";
import { n as d, t as f } from "./PostHeader-BeR9z-lT.js";
import { n as p, t as m } from "./RelatedPosts-DUuX-aIf.js";
import { n as h, t as g } from "./RichTextRenderer-Bgfx5Rah.js";
function _({
  post: e,
  locale: t,
  readingTimeLabel: o,
  relatedReadingTimeLabel: s,
  updatedLabel: l,
  tocHeading: d,
  previousLabel: p,
  nextLabel: h,
  relatedHeading: _,
  codeHtml: y,
  richTextLabels: b,
}) {
  return (0, v.jsxs)(`article`, {
    "data-slot": `article-layout`,
    children: [
      (0, v.jsx)(f, {
        post: e,
        locale: t,
        readingTimeLabel: o,
        updatedLabel: l,
      }),
      (0, v.jsx)(a, {
        size: `wide`,
        className: `py-12`,
        children: (0, v.jsxs)(i, {
          gap: 12,
          children: [
            (0, v.jsxs)(n, {
              cols: { base: 1, lg: 4 },
              gap: 12,
              children: [
                (0, v.jsx)(`div`, {
                  className: `max-w-prose lg:col-span-3`,
                  children: (0, v.jsx)(g, {
                    value: e.body,
                    variant: `article`,
                    codeHtml: y,
                    labels: b,
                  }),
                }),
                e.toc.length > 0 &&
                  (0, v.jsx)(`aside`, {
                    className: `lg:col-span-1`,
                    children: (0, v.jsx)(`div`, {
                      className: `lg:sticky lg:top-24`,
                      children: (0, v.jsx)(u, { entries: e.toc, heading: d }),
                    }),
                  }),
              ],
            }),
            (0, v.jsxs)(`div`, {
              className: `max-w-prose`,
              children: [
                (0, v.jsx)(r, { spacing: `none` }),
                (0, v.jsx)(`div`, {
                  className: `pt-16`,
                  children: (0, v.jsx)(c, {
                    previous: e.previous,
                    next: e.next,
                    previousLabel: p,
                    nextLabel: h,
                  }),
                }),
              ],
            }),
            (0, v.jsx)(m, {
              posts: e.related,
              locale: t,
              readingTimeLabel: s,
              heading: _,
            }),
          ],
        }),
      }),
    ],
  });
}
var v;
function y() {
  return (y = e(() => {
    (o(),
      s(),
      l(),
      d(),
      p(),
      h(),
      (v = t()),
      (_.__docgenInfo = {
        description: ``,
        methods: [],
        displayName: `ArticleLayout`,
        props: {
          post: { required: !0, tsType: { name: `Post` }, description: `` },
          locale: { required: !0, tsType: { name: `string` }, description: `` },
          readingTimeLabel: {
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
          updatedLabel: {
            required: !1,
            tsType: { name: `string` },
            description: ``,
          },
          tocHeading: {
            required: !1,
            tsType: { name: `string` },
            description: ``,
          },
          previousLabel: {
            required: !1,
            tsType: { name: `string` },
            description: ``,
          },
          nextLabel: {
            required: !1,
            tsType: { name: `string` },
            description: ``,
          },
          relatedHeading: {
            required: !1,
            tsType: { name: `string` },
            description: ``,
          },
          codeHtml: {
            required: !1,
            tsType: {
              name: `Record`,
              elements: [{ name: `string` }, { name: `string` }],
              raw: `Record<string, string>`,
            },
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
export { y as n, _ as t };
