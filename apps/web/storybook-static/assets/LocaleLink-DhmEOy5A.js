import { n as e } from "./rolldown-runtime-DkW27tQK.js";
import { t } from "./jsx-runtime-DeHZSEgm.js";
import { I as n, t as r } from "./src-3ugP8gNN.js";
import { n as i, t as a } from "./cn-DT5hf25b.js";
function o({ href: e, label: t, active: r }) {
  return (0, s.jsx)(n, {
    href: e,
    underline: `none`,
    "data-slot": `locale-link`,
    "aria-current": r ? `true` : void 0,
    className: a(
      `text-sm font-medium uppercase`,
      r ? `text-foreground` : `text-muted-foreground hover:text-foreground`,
    ),
    children: t,
  });
}
var s;
function c() {
  return (c = e(() => {
    (r(),
      i(),
      (s = t()),
      (o.__docgenInfo = {
        description: ``,
        methods: [],
        displayName: `LocaleLink`,
        props: {
          locale: { required: !0, tsType: { name: `Locale` }, description: `` },
          href: { required: !0, tsType: { name: `string` }, description: `` },
          label: { required: !0, tsType: { name: `string` }, description: `` },
          active: {
            required: !0,
            tsType: { name: `boolean` },
            description: ``,
          },
        },
      }));
  }))();
}
export { c as n, o as t };
