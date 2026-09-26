import { n as e } from "./rolldown-runtime-DkW27tQK.js";
import { t } from "./jsx-runtime-DeHZSEgm.js";
function n({ label: e, value: t }) {
  return (0, r.jsxs)(`div`, {
    "data-slot": `exif-item`,
    className: `flex flex-col gap-0.5`,
    children: [
      (0, r.jsx)(`dt`, {
        className: `text-xs tracking-wide text-muted-foreground uppercase`,
        children: e,
      }),
      (0, r.jsx)(`dd`, {
        className: `font-mono text-sm text-foreground`,
        children: t,
      }),
    ],
  });
}
var r;
function i() {
  return (i = e(() => {
    ((r = t()),
      (n.__docgenInfo = {
        description: ``,
        methods: [],
        displayName: `ExifItem`,
        props: {
          label: { required: !0, tsType: { name: `string` }, description: `` },
          value: { required: !0, tsType: { name: `string` }, description: `` },
        },
      }));
  }))();
}
export { i as n, n as t };
