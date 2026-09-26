import { n as e } from "./rolldown-runtime-DkW27tQK.js";
import { t } from "./jsx-runtime-DeHZSEgm.js";
import { B as n, m as r, t as i } from "./src-3ugP8gNN.js";
function a({ block: e, html: t, copyLabel: i, copiedLabel: a }) {
  return (0, o.jsxs)(`div`, {
    "data-slot": `code-block`,
    className: `overflow-hidden rounded-lg border border-border`,
    children: [
      e.filename &&
        (0, o.jsxs)(`div`, {
          className: `flex items-center justify-between border-b border-border bg-secondary px-4 py-2`,
          children: [
            (0, o.jsx)(n, {
              size: `sm`,
              tone: `muted`,
              as: `span`,
              className: `font-mono`,
              children: e.filename,
            }),
            (0, o.jsx)(r, { value: e.code, label: i, copiedLabel: a }),
          ],
        }),
      (0, o.jsxs)(`div`, {
        className: `relative overflow-x-auto text-sm [&_pre]:p-4 [&_pre]:!bg-transparent`,
        children: [
          !e.filename &&
            (0, o.jsx)(`div`, {
              className: `absolute top-2 right-2`,
              children: (0, o.jsx)(r, {
                value: e.code,
                label: i,
                copiedLabel: a,
              }),
            }),
          (0, o.jsx)(`div`, { dangerouslySetInnerHTML: { __html: t } }),
        ],
      }),
    ],
  });
}
var o;
function s() {
  return (s = e(() => {
    (i(),
      (o = t()),
      (a.__docgenInfo = {
        description: ``,
        methods: [],
        displayName: `CodeBlock`,
        props: {
          block: {
            required: !0,
            tsType: { name: `CodeBlockData` },
            description: ``,
          },
          html: {
            required: !0,
            tsType: { name: `string` },
            description:
              "Pre-rendered by `highlightCode` (server-side, via Shiki) — this component stays sync so it can render anywhere.",
          },
          copyLabel: {
            required: !1,
            tsType: { name: `string` },
            description: ``,
          },
          copiedLabel: {
            required: !1,
            tsType: { name: `string` },
            description: ``,
          },
        },
      }));
  }))();
}
export { s as n, a as t };
