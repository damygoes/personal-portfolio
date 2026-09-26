import { n as e } from "./rolldown-runtime-DkW27tQK.js";
import { n as t } from "./iframe-BESghBLE.js";
import { t as n } from "./jsx-runtime-DeHZSEgm.js";
import { H as r, O as i, S as a, t as o } from "./src-3ugP8gNN.js";
import { n as s, t as c } from "./ExifPanel-C-Iw9OF1.js";
function l({
  photos: e,
  startIndex: t,
  open: n,
  onOpenChange: o,
  closeLabel: s = `Close`,
  previousLabel: l = `Previous photo`,
  nextLabel: f = `Next photo`,
}) {
  let [p, m] = (0, u.useState)(t);
  if (
    ((0, u.useEffect)(() => {
      n && m(t);
    }, [n, t]),
    (0, u.useEffect)(() => {
      if (!n) return;
      function t(t) {
        (t.key === `Escape` && o(!1),
          t.key === `ArrowRight` && m((t) => (t + 1) % e.length),
          t.key === `ArrowLeft` && m((t) => (t - 1 + e.length) % e.length));
      }
      return (
        window.addEventListener(`keydown`, t),
        () => window.removeEventListener(`keydown`, t)
      );
    }, [n, o, e.length]),
    !n)
  )
    return null;
  let h = e[p];
  return h
    ? (0, d.jsxs)(`div`, {
        "data-slot": `lightbox`,
        role: `dialog`,
        "aria-modal": `true`,
        className: `fixed inset-0 z-50 flex flex-col bg-background/95 backdrop-blur`,
        children: [
          (0, d.jsx)(`div`, {
            className: `flex items-center justify-end p-4`,
            children: (0, d.jsx)(r, {
              variant: `ghost`,
              size: `icon-sm`,
              icon: `close`,
              "aria-label": s,
              onClick: () => o(!1),
            }),
          }),
          (0, d.jsxs)(`div`, {
            className: `relative flex-1`,
            children: [
              (0, d.jsx)(a, {
                src: h.src,
                alt: h.alt,
                blurDataURL: h.lqip,
                fill: !0,
                sizes: `100vw`,
                className: `object-contain`,
              }),
              e.length > 1 &&
                (0, d.jsxs)(d.Fragment, {
                  children: [
                    (0, d.jsx)(r, {
                      variant: `ghost`,
                      size: `icon`,
                      icon: `chevron-left`,
                      "aria-label": l,
                      className: `absolute top-1/2 left-2 -translate-y-1/2`,
                      onClick: () => m((t) => (t - 1 + e.length) % e.length),
                    }),
                    (0, d.jsx)(r, {
                      variant: `ghost`,
                      size: `icon`,
                      icon: `arrow-right`,
                      "aria-label": f,
                      className: `absolute top-1/2 right-2 -translate-y-1/2`,
                      onClick: () => m((t) => (t + 1) % e.length),
                    }),
                  ],
                }),
            ],
          }),
          h.exif &&
            (0, d.jsx)(`div`, {
              className: `p-4`,
              children: (0, d.jsx)(c, { exif: h.exif }),
            }),
          (0, d.jsxs)(i, { children: [p + 1, ` / `, e.length] }),
        ],
      })
    : null;
}
var u, d;
function f() {
  return (f = e(() => {
    (o(),
      (u = t()),
      s(),
      (d = n()),
      (l.__docgenInfo = {
        description: ``,
        methods: [],
        displayName: `Lightbox`,
        props: {
          photos: {
            required: !0,
            tsType: {
              name: `Array`,
              elements: [{ name: `Photo` }],
              raw: `Photo[]`,
            },
            description: ``,
          },
          startIndex: {
            required: !0,
            tsType: { name: `number` },
            description: ``,
          },
          open: { required: !0, tsType: { name: `boolean` }, description: `` },
          onOpenChange: {
            required: !0,
            tsType: {
              name: `signature`,
              type: `function`,
              raw: `(open: boolean) => void`,
              signature: {
                arguments: [{ type: { name: `boolean` }, name: `open` }],
                return: { name: `void` },
              },
            },
            description: ``,
          },
          closeLabel: {
            required: !1,
            tsType: { name: `string` },
            description: ``,
            defaultValue: { value: `"Close"`, computed: !1 },
          },
          previousLabel: {
            required: !1,
            tsType: { name: `string` },
            description: ``,
            defaultValue: { value: `"Previous photo"`, computed: !1 },
          },
          nextLabel: {
            required: !1,
            tsType: { name: `string` },
            description: ``,
            defaultValue: { value: `"Next photo"`, computed: !1 },
          },
        },
      }));
  }))();
}
export { f as n, l as t };
