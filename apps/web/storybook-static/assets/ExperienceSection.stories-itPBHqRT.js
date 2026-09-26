import { n as e } from "./rolldown-runtime-DkW27tQK.js";
import { n as t, t as n } from "./ExperienceSection-CjUDhQtu.js";
var r, i, a;
function o() {
  return (o = e(() => {
    (t(),
      (r = {
        title: `Organisms/ExperienceSection`,
        component: n,
        tags: [`autodocs`],
        args: {
          locale: `en`,
          workModeLabels: {
            onsite: `On-site`,
            hybrid: `Hybrid`,
            remote: `Remote`,
          },
          section: {
            id: `experience`,
            index: `02`,
            heading: `Experience`,
            items: [
              {
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
              {
                id: `exp-2`,
                role: `Junior developer`,
                company: { name: `Startup Inc` },
                location: `Remote`,
                workMode: `remote`,
                period: {
                  start: `2021-01-01`,
                  end: `2023-02-01`,
                  isCurrent: !1,
                },
                summary: `Worked on internal tooling and dashboards.`,
                highlights: [`Shipped the internal analytics tool`],
              },
            ],
          },
        },
      }),
      (i = {}),
      (a = [`Default`]));
  }))();
}
o();
export { i as Default, a as __namedExportsOrder, r as default };
