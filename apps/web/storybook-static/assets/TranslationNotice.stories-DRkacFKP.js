import { n as e } from "./rolldown-runtime-DkW27tQK.js";
import { t } from "./jsx-runtime-DeHZSEgm.js";
import { B as n, W as r, t as i } from "./src-3ugP8gNN.js";
function a({ message: e }) {
  return (0, o.jsxs)(`div`, {
    "data-slot": `translation-notice`,
    role: `status`,
    className: `flex items-center gap-2 rounded-md border border-border bg-secondary px-4 py-3`,
    children: [
      (0, o.jsx)(r, {
        name: `languages`,
        size: `sm`,
        "aria-hidden": `true`,
        className: `text-muted-foreground`,
      }),
      (0, o.jsx)(n, { size: `sm`, tone: `muted`, children: e }),
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
        displayName: `TranslationNotice`,
        props: {
          targetLocale: {
            required: !0,
            tsType: { name: `Locale` },
            description: ``,
          },
          message: {
            required: !0,
            tsType: { name: `string` },
            description: ``,
          },
        },
      }));
  }))();
}
var c, l, u;
function d() {
  return (d = e(() => {
    (s(),
      (c = {
        title: `Molecules/TranslationNotice`,
        component: a,
        tags: [`autodocs`],
        args: {
          targetLocale: `de`,
          message: `This post isn't available in German yet — showing the English version.`,
        },
      }),
      (l = {}),
      (u = [`Default`]));
  }))();
}
d();
export { l as Default, u as __namedExportsOrder, c as default };
