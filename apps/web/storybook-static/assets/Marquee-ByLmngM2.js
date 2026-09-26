import { n as e } from "./rolldown-runtime-DkW27tQK.js";
import { t } from "./jsx-runtime-DeHZSEgm.js";
import { n, t as r } from "./cn-DT5hf25b.js";
function i({ items: e }) {
  return (0, s.jsx)(s.Fragment, {
    children: e.map((e, t) =>
      (0, s.jsxs)(
        `span`,
        {
          className: `flex shrink-0 items-center gap-8`,
          children: [
            (0, s.jsx)(`span`, {
              className: r(
                `font-display text-3xl font-extrabold whitespace-nowrap uppercase sm:text-4xl lg:text-5xl`,
                t % 2 == 1
                  ? `text-transparent [-webkit-text-stroke:1.5px_var(--color-foreground)]`
                  : `text-foreground`,
              ),
              children: e,
            }),
            (0, s.jsx)(`span`, {
              "aria-hidden": `true`,
              className: `text-lg text-primary sm:text-xl`,
              children: `✦`,
            }),
          ],
        },
        t,
      ),
    ),
  });
}
function a({ items: e, speed: t, direction: n }) {
  return (0, s.jsxs)(`div`, {
    className: `flex overflow-hidden no-scrollbar`,
    children: [
      (0, s.jsx)(`div`, {
        className: r(
          `flex shrink-0 items-center gap-8 motion-safe:animate-marquee`,
          n === `right` && `[animation-direction:reverse]`,
        ),
        style: { animationDuration: `${t}s` },
        children: (0, s.jsx)(i, { items: e }),
      }),
      (0, s.jsx)(`div`, {
        "aria-hidden": `true`,
        className: r(
          `flex shrink-0 items-center gap-8 motion-safe:animate-marquee`,
          n === `right` && `[animation-direction:reverse]`,
        ),
        style: { animationDuration: `${t}s` },
        children: (0, s.jsx)(i, { items: e }),
      }),
    ],
  });
}
function o({ rows: e, speed: t = 45, direction: n = `left` }) {
  return (0, s.jsx)(`div`, {
    "data-slot": `marquee`,
    className: `flex flex-col gap-4`,
    children: e.map((e, r) =>
      (0, s.jsx)(
        a,
        {
          items: e,
          speed: t,
          direction: r % 2 == 0 ? n : n === `left` ? `right` : `left`,
        },
        r,
      ),
    ),
  });
}
var s;
function c() {
  return (c = e(() => {
    (n(),
      (s = t()),
      (o.__docgenInfo = {
        description: ``,
        methods: [],
        displayName: `Marquee`,
        props: {
          rows: {
            required: !0,
            tsType: {
              name: `Array`,
              elements: [
                {
                  name: `Array`,
                  elements: [{ name: `string` }],
                  raw: `string[]`,
                },
              ],
              raw: `string[][]`,
            },
            description: ``,
          },
          speed: {
            required: !1,
            tsType: { name: `number` },
            description: ``,
            defaultValue: { value: `45`, computed: !1 },
          },
          direction: {
            required: !1,
            tsType: {
              name: `union`,
              raw: `"left" | "right"`,
              elements: [
                { name: `literal`, value: `"left"` },
                { name: `literal`, value: `"right"` },
              ],
            },
            description: ``,
            defaultValue: { value: `"left"`, computed: !1 },
          },
        },
      }));
  }))();
}
export { c as n, o as t };
