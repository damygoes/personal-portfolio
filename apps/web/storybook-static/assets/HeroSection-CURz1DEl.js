import { n as e } from "./rolldown-runtime-DkW27tQK.js";
import { n as t } from "./iframe-BESghBLE.js";
import { t as n } from "./jsx-runtime-DeHZSEgm.js";
import {
  B as r,
  M as i,
  P as a,
  R as o,
  W as s,
  f as c,
  t as l,
  v as u,
} from "./src-3ugP8gNN.js";
import { n as d, t as f } from "./cn-DT5hf25b.js";
import { n as p, t as m } from "./CtaGroup-DQalQAUb.js";
function h({ label: e }) {
  let t = (0, g.useRef)(null),
    [n, r] = (0, g.useState)(!0);
  return (
    (0, g.useEffect)(() => {
      let e = t.current?.closest(`[data-slot='hero-section']`);
      if (!e) return;
      let n = () => {
        r(e.getBoundingClientRect().bottom > 0);
      };
      return (
        n(),
        window.addEventListener(`scroll`, n, { passive: !0 }),
        window.addEventListener(`resize`, n),
        () => {
          (window.removeEventListener(`scroll`, n),
            window.removeEventListener(`resize`, n));
        }
      );
    }, []),
    (0, _.jsxs)(`div`, {
      ref: t,
      className: f(
        `fixed bottom-8 left-8 z-10 flex items-center gap-2 transition-opacity duration-300`,
        n ? `opacity-100` : `pointer-events-none opacity-0`,
      ),
      children: [
        (0, _.jsx)(c, { label: e }),
        (0, _.jsx)(s, {
          name: `chevronDown`,
          size: `sm`,
          "aria-hidden": `true`,
          className: `motion-safe:animate-[bounce_1.6s_ease-in-out_infinite] text-muted-foreground`,
        }),
      ],
    })
  );
}
var g, _;
function v() {
  return (v = e(() => {
    (l(),
      d(),
      (g = t()),
      (_ = n()),
      (h.__docgenInfo = {
        description: ``,
        methods: [],
        displayName: `ScrollHintOverlay`,
        props: {
          label: { required: !1, tsType: { name: `string` }, description: `` },
        },
      }));
  }))();
}
function y({
  hero: e,
  facts: t,
  cv: n,
  downloadCvLabel: s,
  scrollHintLabel: c,
}) {
  let [l, ...d] = e.name.split(` `),
    f = d.join(` `);
  return (0, b.jsxs)(`section`, {
    "data-slot": `hero-section`,
    "data-sanity": e.editTarget,
    className: `relative flex min-h-screen items-center py-16 lg:py-20`,
    children: [
      (0, b.jsx)(a, {
        children: (0, b.jsxs)(`div`, {
          className: `flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between`,
          children: [
            (0, b.jsxs)(i, {
              gap: 6,
              className: `lg:max-w-2xl`,
              children: [
                (0, b.jsx)(u, {
                  items: t,
                  className: `text-xs uppercase sm:text-sm lg:text-base`,
                }),
                (0, b.jsxs)(o, {
                  level: 1,
                  size: `display-hero`,
                  className: `leading-none`,
                  children: [
                    (0, b.jsx)(`span`, { className: `block`, children: l }),
                    f &&
                      (0, b.jsxs)(`span`, {
                        className: `block text-transparent`,
                        style: {
                          WebkitTextStroke: `1.5px var(--color-foreground)`,
                        },
                        children: [
                          f,
                          (0, b.jsx)(`span`, {
                            "aria-hidden": `true`,
                            className: `ml-2 inline-block size-4 rounded-full bg-primary sm:size-6`,
                          }),
                        ],
                      }),
                  ],
                }),
                (0, b.jsx)(r, {
                  tone: `muted`,
                  className: `text-balance sm:text-lg lg:text-xl`,
                  children: e.intro,
                }),
              ],
            }),
            (0, b.jsx)(m, {
              primary: e.primaryCta,
              cv: n,
              downloadCvLabel: s,
              className: `lg:mt-10`,
            }),
          ],
        }),
      }),
      (0, b.jsx)(h, { label: c }),
    ],
  });
}
var b;
function x() {
  return (x = e(() => {
    (l(),
      p(),
      v(),
      (b = n()),
      (y.__docgenInfo = {
        description: ``,
        methods: [],
        displayName: `HeroSection`,
        props: {
          hero: { required: !0, tsType: { name: `Hero` }, description: `` },
          facts: {
            required: !0,
            tsType: {
              name: `Array`,
              elements: [{ name: `string` }],
              raw: `string[]`,
            },
            description: ``,
          },
          cv: {
            required: !1,
            tsType: { name: `Site["cv"]`, raw: `Site["cv"]` },
            description: ``,
          },
          downloadCvLabel: {
            required: !1,
            tsType: { name: `string` },
            description: ``,
          },
          scrollHintLabel: {
            required: !1,
            tsType: { name: `string` },
            description: ``,
          },
        },
      }));
  }))();
}
export { x as n, y as t };
