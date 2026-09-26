import { n as e } from "./rolldown-runtime-DkW27tQK.js";
import { t } from "./jsx-runtime-DeHZSEgm.js";
import { H as n, t as r } from "./src-3ugP8gNN.js";
function i({ links: e, labels: t }) {
  return e.length === 0
    ? null
    : (0, a.jsx)(`div`, {
        "data-slot": `project-links`,
        className: `flex flex-wrap gap-3`,
        children: e.map((e) =>
          (0, a.jsx)(
            n,
            {
              variant: `outline`,
              size: `sm`,
              icon: o[e.kind],
              render: (0, a.jsx)(`a`, {
                href: e.href,
                target: `_blank`,
                rel: `noopener`,
              }),
              children: t[e.kind],
            },
            e.href,
          ),
        ),
      });
}
var a, o;
function s() {
  return (s = e(() => {
    (r(),
      (a = t()),
      (o = {
        live: `external-link`,
        repository: `document`,
        appStore: `apple`,
        playStore: `play-store`,
        other: `external-link`,
      }),
      (i.__docgenInfo = {
        description: ``,
        methods: [],
        displayName: `ProjectLinks`,
        props: {
          links: {
            required: !0,
            tsType: {
              name: `Array`,
              elements: [{ name: `ProjectLink` }],
              raw: `ProjectLink[]`,
            },
            description: ``,
          },
          labels: {
            required: !0,
            tsType: {
              name: `Record`,
              elements: [
                { name: `ProjectLink["kind"]`, raw: `ProjectLink["kind"]` },
                { name: `string` },
              ],
              raw: `Record<ProjectLink["kind"], string>`,
            },
            description: ``,
          },
        },
      }));
  }))();
}
export { s as n, i as t };
