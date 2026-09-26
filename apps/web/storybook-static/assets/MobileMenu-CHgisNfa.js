import { n as e } from "./rolldown-runtime-DkW27tQK.js";
import { n as t } from "./iframe-BESghBLE.js";
import { t as n } from "./jsx-runtime-DeHZSEgm.js";
import { H as r, t as i } from "./src-3ugP8gNN.js";
import { n as a, t as o } from "./NavList-CbVpOn1B.js";
function s({
  items: e,
  openLabel: t = `Open menu`,
  closeLabel: n = `Close menu`,
}) {
  let [i, a] = (0, c.useState)(!1);
  return (
    (0, c.useEffect)(() => {
      if (i)
        return (
          (document.body.style.overflow = `hidden`),
          () => {
            document.body.style.overflow = ``;
          }
        );
    }, [i]),
    (0, c.useEffect)(() => {
      if (!i) return;
      function e(e) {
        e.key === `Escape` && a(!1);
      }
      return (
        window.addEventListener(`keydown`, e),
        () => window.removeEventListener(`keydown`, e)
      );
    }, [i]),
    (0, l.jsxs)(`div`, {
      "data-slot": `mobile-menu`,
      className: `sm:hidden`,
      children: [
        (0, l.jsx)(r, {
          variant: `ghost`,
          size: `icon`,
          icon: i ? `close` : `menu`,
          "aria-label": i ? n : t,
          "aria-expanded": i,
          onClick: () => a((e) => !e),
        }),
        i &&
          (0, l.jsx)(`div`, {
            role: `dialog`,
            "aria-modal": `true`,
            className: `fixed inset-0 top-16 z-40 flex flex-col bg-background p-6`,
            children: (0, l.jsx)(o, {
              items: e,
              orientation: `vertical`,
              onNavigate: () => a(!1),
            }),
          }),
      ],
    })
  );
}
var c, l;
function u() {
  return (u = e(() => {
    (i(),
      (c = t()),
      a(),
      (l = n()),
      (s.__docgenInfo = {
        description: ``,
        methods: [],
        displayName: `MobileMenu`,
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
          openLabel: {
            required: !1,
            tsType: { name: `string` },
            description: ``,
            defaultValue: { value: `"Open menu"`, computed: !1 },
          },
          closeLabel: {
            required: !1,
            tsType: { name: `string` },
            description: ``,
            defaultValue: { value: `"Close menu"`, computed: !1 },
          },
        },
      }));
  }))();
}
export { u as n, s as t };
