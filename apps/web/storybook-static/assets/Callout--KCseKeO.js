import { n as e } from "./rolldown-runtime-DkW27tQK.js";
import { t } from "./jsx-runtime-DeHZSEgm.js";
import { W as n, t as r } from "./src-3ugP8gNN.js";
import { n as i, t as a } from "./cn-DT5hf25b.js";
import { n as o, t as s } from "./ProseBlock-Dm3lbwo5.js";
function c({ block: e }) {
  return (0, l.jsxs)(`div`, {
    "data-slot": `callout`,
    role: `note`,
    className: a(`flex gap-3 rounded-lg border p-4`, d[e.tone]),
    children: [
      (0, l.jsx)(n, {
        name: u[e.tone],
        size: `sm`,
        "aria-hidden": `true`,
        className: `mt-0.5 shrink-0`,
      }),
      (0, l.jsx)(`div`, {
        className: `flex flex-col gap-2 [&_p]:m-0`,
        children: e.body.map((e) => (0, l.jsx)(s, { block: e }, e._key)),
      }),
    ],
  });
}
var l, u, d;
function f() {
  return (f = e(() => {
    (r(),
      i(),
      o(),
      (l = t()),
      (u = { info: `help`, tip: `sparkles`, warning: `alert` }),
      (d = {
        info: `border-border bg-secondary text-secondary-foreground`,
        tip: `border-success/30 bg-success-muted text-success`,
        warning: `border-warning/30 bg-warning-muted text-warning`,
      }),
      (c.__docgenInfo = {
        description: ``,
        methods: [],
        displayName: `Callout`,
        props: {
          block: {
            required: !0,
            tsType: { name: `CalloutBlock` },
            description: ``,
          },
        },
      }));
  }))();
}
export { f as n, c as t };
