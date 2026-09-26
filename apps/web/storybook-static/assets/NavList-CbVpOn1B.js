import { n as e } from "./rolldown-runtime-DkW27tQK.js";
import { n as t } from "./iframe-BESghBLE.js";
import { t as n } from "./jsx-runtime-DeHZSEgm.js";
import { I as r, b as i, t as a } from "./src-3ugP8gNN.js";
import { n as o, t as s } from "./cn-DT5hf25b.js";
function c(e) {
  let [t, n] = (0, u.useState)(void 0);
  return (
    (0, u.useEffect)(() => {
      let t = e
        .map((e) => (e.href.includes(`#`) ? e.href.split(`#`)[1] : void 0))
        .filter((e) => !!e);
      if (t.length === 0) return;
      let r = new IntersectionObserver(
        (e) => {
          let t = e.find((e) => e.isIntersecting);
          t && n(t.target.id);
        },
        { rootMargin: `-40% 0px -55% 0px` },
      );
      return (
        t
          .map((e) => document.getElementById(e))
          .filter((e) => !!e)
          .forEach((e) => r.observe(e)),
        () => r.disconnect()
      );
    }, [e]),
    t
  );
}
function l({ items: e, orientation: t = `horizontal`, onNavigate: n }) {
  let a = c(e);
  return (0, d.jsx)(`ul`, {
    "data-slot": `nav-list`,
    className: s(`flex gap-6`, t === `vertical` && `flex-col gap-4`),
    children: e.map((e) => {
      let t = e.href.includes(`#`) && e.href.endsWith(`#${a}`);
      return (0, d.jsx)(
        `li`,
        {
          children: (0, d.jsxs)(r, {
            href: e.href,
            underline: `none`,
            onClick: n,
            "aria-current": t ? `true` : void 0,
            className: s(
              `inline-flex items-center gap-2 text-sm font-medium`,
              t
                ? `text-foreground`
                : `text-muted-foreground hover:text-foreground`,
            ),
            children: [e.index && (0, d.jsx)(i, { index: e.index }), e.label],
          }),
        },
        e.key,
      );
    }),
  });
}
var u, d;
function f() {
  return (f = e(() => {
    (a(),
      o(),
      (u = t()),
      (d = n()),
      (l.__docgenInfo = {
        description: ``,
        methods: [],
        displayName: `NavList`,
        props: {
          items: {
            required: !0,
            tsType: {
              name: `Array`,
              elements: [
                {
                  name: `intersection`,
                  raw: `NavItem & { label: string }`,
                  elements: [
                    { name: `NavItem` },
                    {
                      name: `signature`,
                      type: `object`,
                      raw: `{ label: string }`,
                      signature: {
                        properties: [
                          {
                            key: `label`,
                            value: { name: `string`, required: !0 },
                          },
                        ],
                      },
                    },
                  ],
                },
              ],
              raw: `NavListItem[]`,
            },
            description: ``,
          },
          orientation: {
            required: !1,
            tsType: {
              name: `union`,
              raw: `"horizontal" | "vertical"`,
              elements: [
                { name: `literal`, value: `"horizontal"` },
                { name: `literal`, value: `"vertical"` },
              ],
            },
            description: ``,
            defaultValue: { value: `"horizontal"`, computed: !1 },
          },
          onNavigate: {
            required: !1,
            tsType: {
              name: `signature`,
              type: `function`,
              raw: `() => void`,
              signature: { arguments: [], return: { name: `void` } },
            },
            description: ``,
          },
        },
      }));
  }))();
}
export { f as n, l as t };
