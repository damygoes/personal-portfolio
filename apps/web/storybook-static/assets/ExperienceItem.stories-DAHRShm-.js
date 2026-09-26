import { n as e } from "./rolldown-runtime-DkW27tQK.js";
import { t } from "./jsx-runtime-DeHZSEgm.js";
import { n, t as r } from "./ExperienceItem-DzUHD33p.js";
var i, a, o, s, c;
function l() {
  return (l = e(() => {
    (n(),
      (i = t()),
      (a = {
        title: `Molecules/ExperienceItem`,
        component: r,
        tags: [`autodocs`],
        args: {
          locale: `en`,
          workModeLabel: `Hybrid`,
          item: {
            id: `exp-1`,
            role: `Fullstack developer`,
            company: { name: `Acme Corp`, url: `https://acme.example.com` },
            location: `Berlin, Germany`,
            workMode: `hybrid`,
            period: { start: `2023-03-01`, end: null, isCurrent: !0 },
            summary: `Responsible for the frontend of a B2B SaaS product.`,
            highlights: [
              `Built the design system from scratch`,
              `Reduced load times by 40%`,
            ],
          },
        },
        decorators: [
          (e) =>
            (0, i.jsx)(`div`, {
              className: `max-w-prose`,
              children: (0, i.jsx)(e, {}),
            }),
        ],
      }),
      (o = {}),
      (s = {
        args: {
          workModeLabel: `Remote`,
          item: {
            id: `exp-2`,
            role: `Junior developer`,
            company: { name: `Startup Inc` },
            location: `Remote`,
            workMode: `remote`,
            period: { start: `2021-01-01`, end: `2023-02-01`, isCurrent: !1 },
            summary: `Worked on internal tooling and dashboards.`,
            highlights: [`Shipped the internal analytics tool`],
          },
        },
      }),
      (c = [`Current`, `Past`]));
  }))();
}
l();
export { o as Current, s as Past, c as __namedExportsOrder, a as default };
