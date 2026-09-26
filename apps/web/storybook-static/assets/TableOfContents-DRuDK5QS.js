import { n as e } from "./rolldown-runtime-DkW27tQK.js";
import { t } from "./jsx-runtime-DeHZSEgm.js";
import { I as n, R as r, t as i, w as a } from "./src-3ugP8gNN.js";
import { n as o, t as s } from "./cn-DT5hf25b.js";
function c({ entries: e }) {
  return (0, u.jsx)(`ul`, {
    className: `flex flex-col gap-2 text-sm`,
    children: e.map((e) =>
      (0, u.jsx)(
        `li`,
        {
          className: s(e.level === 3 && `pl-4`),
          children: (0, u.jsx)(n, {
            href: `#${e.id}`,
            underline: `hover`,
            className: `text-muted-foreground`,
            children: e.text,
          }),
        },
        e.id,
      ),
    ),
  });
}
function l({ entries: e, heading: t = `On this page` }) {
  return e.length === 0
    ? null
    : (0, u.jsxs)(`nav`, {
        "data-slot": `table-of-contents`,
        "aria-label": t,
        children: [
          (0, u.jsxs)(`div`, {
            className: `hidden lg:block`,
            children: [
              (0, u.jsx)(r, {
                level: 4,
                size: `sm`,
                className: `mb-3`,
                children: t,
              }),
              (0, u.jsx)(c, { entries: e }),
            ],
          }),
          (0, u.jsx)(`div`, {
            className: `lg:hidden`,
            children: (0, u.jsx)(a, {
              trigger: (0, u.jsx)(r, { level: 4, size: `sm`, children: t }),
              children: (0, u.jsx)(`div`, {
                className: `pt-3`,
                children: (0, u.jsx)(c, { entries: e }),
              }),
            }),
          }),
        ],
      });
}
var u;
function d() {
  return (d = e(() => {
    (i(),
      o(),
      (u = t()),
      (l.__docgenInfo = {
        description: ``,
        methods: [],
        displayName: `TableOfContents`,
        props: {
          entries: {
            required: !0,
            tsType: {
              name: `Array`,
              elements: [{ name: `TocEntry` }],
              raw: `TocEntry[]`,
            },
            description: ``,
          },
          heading: {
            required: !1,
            tsType: { name: `string` },
            description: ``,
            defaultValue: { value: `"On this page"`, computed: !1 },
          },
        },
      }));
  }))();
}
export { d as n, l as t };
