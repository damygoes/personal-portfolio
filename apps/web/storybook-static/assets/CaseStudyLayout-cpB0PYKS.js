import { n as e } from "./rolldown-runtime-DkW27tQK.js";
import { t } from "./jsx-runtime-DeHZSEgm.js";
import { A as n, M as r, P as i, t as a } from "./src-3ugP8gNN.js";
import { n as o, t as s } from "./PrevNextNav-Cn4YbfWd.js";
import { n as c, t as l } from "./TableOfContents-DRuDK5QS.js";
import { n as u, t as d } from "./RichTextRenderer-Bgfx5Rah.js";
import { n as f, t as p } from "./CaseStudyHeader-BFwuUcaI.js";
function m({
  project: e,
  locale: t,
  statusLabel: a,
  linkLabels: o,
  tocHeading: c,
  previousLabel: u,
  nextLabel: f,
  codeHtml: m,
  richTextLabels: g,
}) {
  return (0, h.jsxs)(`article`, {
    "data-slot": `case-study-layout`,
    children: [
      (0, h.jsx)(p, { project: e, locale: t, statusLabel: a, linkLabels: o }),
      (0, h.jsx)(i, {
        size: `wide`,
        className: `py-12`,
        children: (0, h.jsxs)(r, {
          gap: 12,
          children: [
            (0, h.jsxs)(n, {
              cols: { base: 1, lg: 4 },
              gap: 12,
              children: [
                (0, h.jsx)(`div`, {
                  className: `max-w-prose lg:col-span-3`,
                  children: (0, h.jsx)(d, {
                    value: e.body,
                    variant: `article`,
                    codeHtml: m,
                    labels: g,
                  }),
                }),
                e.toc.length > 0 &&
                  (0, h.jsx)(`aside`, {
                    className: `lg:col-span-1`,
                    children: (0, h.jsx)(`div`, {
                      className: `lg:sticky lg:top-24`,
                      children: (0, h.jsx)(l, { entries: e.toc, heading: c }),
                    }),
                  }),
              ],
            }),
            (0, h.jsx)(`div`, {
              className: `max-w-prose`,
              children: (0, h.jsx)(s, {
                previous: e.previous,
                next: e.next,
                previousLabel: u,
                nextLabel: f,
              }),
            }),
          ],
        }),
      }),
    ],
  });
}
var h;
function g() {
  return (g = e(() => {
    (a(),
      o(),
      c(),
      f(),
      u(),
      (h = t()),
      (m.__docgenInfo = {
        description: ``,
        methods: [],
        displayName: `CaseStudyLayout`,
        props: {
          project: {
            required: !0,
            tsType: { name: `Project` },
            description: ``,
          },
          locale: { required: !0, tsType: { name: `string` }, description: `` },
          statusLabel: {
            required: !0,
            tsType: { name: `string` },
            description: ``,
          },
          linkLabels: {
            required: !0,
            tsType: {
              name: `Record`,
              elements: [
                {
                  name: `Project["links"][number]["kind"]`,
                  raw: `Project["links"][number]["kind"]`,
                },
                { name: `string` },
              ],
              raw: `Record<Project["links"][number]["kind"], string>`,
            },
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
export { g as n, m as t };
