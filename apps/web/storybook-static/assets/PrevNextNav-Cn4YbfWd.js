import { n as e } from "./rolldown-runtime-DkW27tQK.js";
import { t } from "./jsx-runtime-DeHZSEgm.js";
import { B as n, I as r, t as i } from "./src-3ugP8gNN.js";
import { n as a, t as o } from "./cn-DT5hf25b.js";
function s({
  previous: e,
  next: t,
  previousLabel: i = `Previous`,
  nextLabel: a = `Next`,
}) {
  return !e && !t
    ? null
    : (0, c.jsxs)(`nav`, {
        "data-slot": `prev-next-nav`,
        "aria-label": `Related pages`,
        className: `grid grid-cols-2 gap-4 border-t border-border pt-6`,
        children: [
          (0, c.jsx)(`div`, {
            className: o(!e && `invisible`),
            children:
              e &&
              (0, c.jsxs)(r, {
                href: e.href,
                underline: `none`,
                className: `group flex flex-col gap-1`,
                children: [
                  (0, c.jsx)(n, {
                    size: `xs`,
                    tone: `muted`,
                    className: `uppercase tracking-wide`,
                    children: i,
                  }),
                  (0, c.jsx)(n, {
                    size: `base`,
                    weight: `medium`,
                    className: `group-hover:underline`,
                    children: e.title,
                  }),
                ],
              }),
          }),
          (0, c.jsx)(`div`, {
            className: o(`text-right`, !t && `invisible`),
            children:
              t &&
              (0, c.jsxs)(r, {
                href: t.href,
                underline: `none`,
                className: `group flex flex-col gap-1`,
                children: [
                  (0, c.jsx)(n, {
                    size: `xs`,
                    tone: `muted`,
                    className: `uppercase tracking-wide`,
                    children: a,
                  }),
                  (0, c.jsx)(n, {
                    size: `base`,
                    weight: `medium`,
                    className: `group-hover:underline`,
                    children: t.title,
                  }),
                ],
              }),
          }),
        ],
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
        displayName: `PrevNextNav`,
        props: {
          previous: {
            required: !1,
            tsType: { name: `Neighbour` },
            description: ``,
          },
          next: {
            required: !1,
            tsType: { name: `Neighbour` },
            description: ``,
          },
          previousLabel: {
            required: !1,
            tsType: { name: `string` },
            description: ``,
            defaultValue: { value: `"Previous"`, computed: !1 },
          },
          nextLabel: {
            required: !1,
            tsType: { name: `string` },
            description: ``,
            defaultValue: { value: `"Next"`, computed: !1 },
          },
        },
      }));
  }))();
}
export { l as n, s as t };
