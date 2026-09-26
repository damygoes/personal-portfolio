import { n as e } from "./rolldown-runtime-DkW27tQK.js";
import { t } from "./jsx-runtime-DeHZSEgm.js";
import {
  B as n,
  I as r,
  R as i,
  i as a,
  t as o,
  u as s,
  w as c,
} from "./src-3ugP8gNN.js";
function l({
  item: e,
  locale: t,
  workModeLabel: o,
  detailsLabel: l = `Details`,
  closeLabel: d = `Close`,
  presentLabel: f = `Present`,
}) {
  return (0, u.jsxs)(`article`, {
    "data-slot": `experience-item`,
    className: `flex flex-col gap-3 border-b border-border py-8 last:border-b-0`,
    children: [
      (0, u.jsxs)(`div`, {
        className: `flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1`,
        children: [
          (0, u.jsxs)(i, {
            level: 3,
            size: `md`,
            children: [
              e.role,
              ` · `,
              e.company.url
                ? (0, u.jsx)(r, {
                    href: e.company.url,
                    external: !0,
                    underline: `hover`,
                    children: e.company.name,
                  })
                : e.company.name,
            ],
          }),
          (0, u.jsx)(n, {
            size: `sm`,
            tone: `muted`,
            children: (0, u.jsx)(s, {
              start: e.period.start,
              end: e.period.end,
              locale: t,
              presentLabel: f,
            }),
          }),
        ],
      }),
      (0, u.jsxs)(`div`, {
        className: `flex flex-wrap items-center gap-2`,
        children: [
          (0, u.jsx)(a, { mode: e.workMode, label: o }),
          (0, u.jsx)(n, { size: `sm`, tone: `muted`, children: e.location }),
        ],
      }),
      (0, u.jsx)(n, { size: `base`, children: e.summary }),
      (0, u.jsx)(c, {
        defaultOpen: e.period.isCurrent,
        trigger: (0, u.jsxs)(n, {
          size: `sm`,
          weight: `medium`,
          children: [l, ` / `, d],
        }),
        children: (0, u.jsx)(`ul`, {
          className: `mt-3 flex flex-col gap-2`,
          children: e.highlights.map((e, t) =>
            (0, u.jsxs)(
              `li`,
              {
                className: `flex gap-2 text-sm text-muted-foreground`,
                children: [
                  (0, u.jsx)(`span`, { "aria-hidden": `true`, children: `–` }),
                  e,
                ],
              },
              t,
            ),
          ),
        }),
      }),
    ],
  });
}
var u;
function d() {
  return (d = e(() => {
    (o(),
      (u = t()),
      (l.__docgenInfo = {
        description: ``,
        methods: [],
        displayName: `ExperienceItem`,
        props: {
          item: {
            required: !0,
            tsType: { name: `ExperienceItemContract` },
            description: ``,
          },
          locale: { required: !0, tsType: { name: `string` }, description: `` },
          workModeLabel: {
            required: !0,
            tsType: { name: `string` },
            description: ``,
          },
          detailsLabel: {
            required: !1,
            tsType: { name: `string` },
            description: ``,
            defaultValue: { value: `"Details"`, computed: !1 },
          },
          closeLabel: {
            required: !1,
            tsType: { name: `string` },
            description: ``,
            defaultValue: { value: `"Close"`, computed: !1 },
          },
          presentLabel: {
            required: !1,
            tsType: { name: `string` },
            description: ``,
            defaultValue: { value: `"Present"`, computed: !1 },
          },
        },
      }));
  }))();
}
export { d as n, l as t };
