import { n as e } from "./rolldown-runtime-DkW27tQK.js";
import { t } from "./jsx-runtime-DeHZSEgm.js";
import {
  B as n,
  M as r,
  P as i,
  R as a,
  S as o,
  g as s,
  n as c,
  t as l,
  u,
} from "./src-3ugP8gNN.js";
import { n as d, t as f } from "./ProjectLinks-BDJHiouA.js";
function p({
  project: e,
  locale: t,
  statusLabel: l,
  linkLabels: d,
  presentLabel: p,
}) {
  return (0, m.jsx)(`header`, {
    "data-slot": `case-study-header`,
    className: `py-16`,
    children: (0, m.jsxs)(i, {
      size: `wide`,
      children: [
        (0, m.jsxs)(r, {
          gap: 6,
          children: [
            (0, m.jsxs)(`div`, {
              className: `flex flex-wrap items-center gap-3`,
              children: [
                (0, m.jsx)(c, { status: e.status, label: l }),
                (0, m.jsx)(n, { size: `sm`, tone: `muted`, children: e.role }),
                (0, m.jsx)(n, {
                  size: `sm`,
                  tone: `muted`,
                  children: (0, m.jsx)(u, {
                    start: e.period.start,
                    end: e.period.end,
                    locale: t,
                    presentLabel: p,
                  }),
                }),
              ],
            }),
            (0, m.jsx)(a, { level: 1, size: `2xl`, children: e.title }),
            (0, m.jsx)(n, {
              size: `lg`,
              tone: `muted`,
              className: `max-w-prose`,
              children: e.summary,
            }),
            (0, m.jsx)(`div`, {
              className: `flex flex-wrap gap-2`,
              children: e.tech.map((e) => (0, m.jsx)(s, { label: e }, e)),
            }),
            (0, m.jsx)(f, { links: e.links, labels: d }),
          ],
        }),
        (0, m.jsx)(`div`, {
          className: `relative mt-8 aspect-[16/9] overflow-hidden rounded-lg bg-secondary`,
          children: (0, m.jsx)(o, {
            src: e.cover.src,
            alt: e.cover.alt,
            blurDataURL: e.cover.lqip,
            fill: !0,
            priority: !0,
            sizes: `100vw`,
          }),
        }),
      ],
    }),
  });
}
var m;
function h() {
  return (h = e(() => {
    (l(),
      d(),
      (m = t()),
      (p.__docgenInfo = {
        description: ``,
        methods: [],
        displayName: `CaseStudyHeader`,
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
          presentLabel: {
            required: !1,
            tsType: { name: `string` },
            description: ``,
          },
        },
      }));
  }))();
}
export { h as n, p as t };
