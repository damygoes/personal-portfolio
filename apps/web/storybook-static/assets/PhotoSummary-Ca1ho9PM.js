import { n as e } from "./rolldown-runtime-DkW27tQK.js";
import { t } from "./jsx-runtime-DeHZSEgm.js";
import { t as n, v as r } from "./src-3ugP8gNN.js";
function i({ summary: e, photoCountLabel: t }) {
  let n = [t, ...e.cameras, ...e.lenses];
  return (0, a.jsx)(r, { items: n });
}
var a;
function o() {
  return (o = e(() => {
    (n(),
      (a = t()),
      (i.__docgenInfo = {
        description: ``,
        methods: [],
        displayName: `PhotoSummary`,
        props: {
          summary: {
            required: !0,
            tsType: {
              name: `NonNullable`,
              elements: [
                { name: `Post["photoSummary"]`, raw: `Post["photoSummary"]` },
              ],
              raw: `NonNullable<Post["photoSummary"]>`,
            },
            description: ``,
          },
          photoCountLabel: {
            required: !0,
            tsType: { name: `string` },
            description: ``,
          },
        },
      }));
  }))();
}
export { o as n, i as t };
