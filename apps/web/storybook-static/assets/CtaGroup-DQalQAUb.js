import { n as e } from "./rolldown-runtime-DkW27tQK.js";
import { t } from "./jsx-runtime-DeHZSEgm.js";
import { I as n, W as r, t as i } from "./src-3ugP8gNN.js";
import { n as a, t as o } from "./cn-DT5hf25b.js";
function s({
  primary: e,
  cv: t,
  downloadCvLabel: i = `Download CV`,
  className: a,
}) {
  return (0, c.jsxs)(`div`, {
    "data-slot": `cta-group`,
    className: o(`flex flex-nowrap items-center gap-6`, a),
    children: [
      (0, c.jsxs)(n, {
        href: e.href,
        external: e.external,
        underline: `none`,
        className: l,
        children: [
          (0, c.jsxs)(`span`, {
            className: `relative`,
            children: [
              e.label,
              (0, c.jsx)(`span`, { "aria-hidden": `true`, className: u }),
            ],
          }),
          (0, c.jsx)(r, {
            name: `arrow-right`,
            size: `sm`,
            "aria-hidden": `true`,
            className: d,
          }),
        ],
      }),
      t &&
        (0, c.jsxs)(`a`, {
          href: t.href,
          download: t.fileName,
          className: l,
          children: [
            (0, c.jsxs)(`span`, {
              className: `relative`,
              children: [
                i,
                (0, c.jsx)(`span`, { "aria-hidden": `true`, className: u }),
              ],
            }),
            (0, c.jsx)(r, {
              name: `download`,
              size: `sm`,
              "aria-hidden": `true`,
              className: d,
            }),
          ],
        }),
    ],
  });
}
var c, l, u, d;
function f() {
  return (f = e(() => {
    (i(),
      a(),
      (c = t()),
      (l = `group relative inline-flex shrink-0 items-center gap-2 text-xs font-medium tracking-wide text-foreground uppercase transition-transform duration-300 ease-out hover:-translate-y-0.5 hover:text-primary sm:text-sm lg:text-base`),
      (u = `pointer-events-none absolute -bottom-1 left-0 h-px w-0 bg-primary transition-[width] duration-300 ease-out group-hover:w-full`),
      (d = `transition-transform delay-75 duration-300 ease-out group-hover:translate-x-1`),
      (s.__docgenInfo = {
        description: ``,
        methods: [],
        displayName: `CtaGroup`,
        props: {
          primary: {
            required: !0,
            tsType: { name: `LinkContract` },
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
            defaultValue: { value: `"Download CV"`, computed: !1 },
          },
          className: {
            required: !1,
            tsType: { name: `string` },
            description: ``,
          },
        },
      }));
  }))();
}
export { f as n, s as t };
