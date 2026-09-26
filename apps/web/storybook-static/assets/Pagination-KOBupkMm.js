import { n as e } from "./rolldown-runtime-DkW27tQK.js";
import { t } from "./jsx-runtime-DeHZSEgm.js";
import { B as n, H as r, t as i } from "./src-3ugP8gNN.js";
function a({
  pagination: e,
  previousLabel: t = `Previous`,
  nextLabel: i = `Next`,
  summaryLabel: a,
}) {
  return (0, o.jsxs)(`nav`, {
    "data-slot": `pagination`,
    "aria-label": `Pagination`,
    className: `flex items-center justify-between gap-4`,
    children: [
      (0, o.jsx)(r, {
        variant: `outline`,
        size: `sm`,
        icon: `chevron-left`,
        disabled: !e.previousHref,
        render: e.previousHref
          ? (0, o.jsx)(`a`, { href: e.previousHref })
          : void 0,
        children: t,
      }),
      (0, o.jsx)(n, {
        size: `sm`,
        tone: `muted`,
        children: a ?? `${e.page} / ${e.totalPages}`,
      }),
      (0, o.jsx)(r, {
        variant: `outline`,
        size: `sm`,
        icon: `arrow-right`,
        iconPosition: `end`,
        disabled: !e.nextHref,
        render: e.nextHref ? (0, o.jsx)(`a`, { href: e.nextHref }) : void 0,
        children: i,
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
        displayName: `Pagination`,
        props: {
          pagination: {
            required: !0,
            tsType: { name: `PaginationData` },
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
          summaryLabel: {
            required: !1,
            tsType: { name: `string` },
            description: ``,
          },
        },
      }));
  }))();
}
export { s as n, a as t };
