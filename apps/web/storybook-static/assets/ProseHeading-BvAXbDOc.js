import { n as e } from "./rolldown-runtime-DkW27tQK.js";
import { t } from "./jsx-runtime-DeHZSEgm.js";
import { R as n, t as r } from "./src-3ugP8gNN.js";
import { n as i, t as a } from "./portable-text-spans-CpkEatpk.js";
function o({ block: e }) {
  let t = e.style === `h2` ? 2 : 3;
  return (0, s.jsx)(n, {
    level: t,
    id: e._key,
    className: `scroll-mt-24`,
    children: i(e),
  });
}
var s;
function c() {
  return (c = e(() => {
    (r(),
      a(),
      (s = t()),
      (o.__docgenInfo = {
        description: ``,
        methods: [],
        displayName: `ProseHeading`,
        props: {
          block: {
            required: !0,
            tsType: {
              name: `intersection`,
              raw: `PortableTextBlock & { style: "h2" | "h3" }`,
              elements: [
                { name: `PortableTextBlock` },
                {
                  name: `signature`,
                  type: `object`,
                  raw: `{ style: "h2" | "h3" }`,
                  signature: {
                    properties: [
                      {
                        key: `style`,
                        value: {
                          name: `union`,
                          raw: `"h2" | "h3"`,
                          elements: [
                            { name: `literal`, value: `"h2"` },
                            { name: `literal`, value: `"h3"` },
                          ],
                          required: !0,
                        },
                      },
                    ],
                  },
                },
              ],
            },
            description: ``,
          },
        },
      }));
  }))();
}
export { c as n, o as t };
