import { n as e } from "./rolldown-runtime-DkW27tQK.js";
import { t } from "./jsx-runtime-DeHZSEgm.js";
import {
  B as n,
  I as r,
  M as i,
  P as a,
  R as o,
  W as s,
  b as c,
  t as l,
} from "./src-3ugP8gNN.js";
function u({ section: e, sayHelloLabel: t = `Say hello` }) {
  let l = e.heading.split(` `),
    u = l.pop();
  return (0, d.jsx)(`section`, {
    id: e.id,
    "data-slot": `contact-section`,
    className: `py-24 sm:py-32`,
    children: (0, d.jsx)(a, {
      children: (0, d.jsxs)(i, {
        gap: 10,
        align: `start`,
        children: [
          (0, d.jsx)(c, { index: e.index }),
          (0, d.jsxs)(o, {
            level: 2,
            size: `display-lg`,
            className: `leading-none`,
            children: [
              l.length > 0 &&
                (0, d.jsxs)(`span`, { children: [l.join(` `), ` `] }),
              u &&
                (0, d.jsx)(`span`, {
                  className: `text-transparent`,
                  style: { WebkitTextStroke: `1.5px var(--color-foreground)` },
                  children: u,
                }),
            ],
          }),
          (0, d.jsx)(n, {
            size: `lg`,
            tone: `muted`,
            className: `max-w-prose`,
            children: e.body,
          }),
          (0, d.jsxs)(`div`, {
            children: [
              (0, d.jsx)(n, {
                size: `sm`,
                tone: `muted`,
                className: `mb-2 tracking-widest uppercase`,
                children: t,
              }),
              (0, d.jsx)(r, {
                href: `mailto:${e.cta.email}`,
                underline: `hover`,
                className: `font-display text-3xl font-bold text-foreground sm:text-5xl`,
                children: e.cta.email,
              }),
            ],
          }),
          (0, d.jsx)(`div`, {
            className: `flex flex-wrap items-center gap-6`,
            children: e.socials.map((e) =>
              (0, d.jsxs)(
                r,
                {
                  href: e.href,
                  external: !0,
                  underline: `hover`,
                  className: `inline-flex items-center gap-1.5 text-sm font-medium tracking-widest text-muted-foreground uppercase hover:text-foreground`,
                  children: [
                    e.label,
                    (0, d.jsx)(s, {
                      name: `external-link`,
                      size: `xs`,
                      "aria-hidden": `true`,
                    }),
                  ],
                },
                e.href,
              ),
            ),
          }),
        ],
      }),
    }),
  });
}
var d;
function f() {
  return (f = e(() => {
    (l(),
      (d = t()),
      (u.__docgenInfo = {
        description: ``,
        methods: [],
        displayName: `ContactSection`,
        props: {
          section: {
            required: !0,
            tsType: { name: `ContactSectionData` },
            description: ``,
          },
          sayHelloLabel: {
            required: !1,
            tsType: { name: `string` },
            description: ``,
            defaultValue: { value: `"Say hello"`, computed: !1 },
          },
        },
      }));
  }))();
}
export { f as n, u as t };
