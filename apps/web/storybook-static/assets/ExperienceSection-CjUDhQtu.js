import { n as e } from "./rolldown-runtime-DkW27tQK.js";
import { t } from "./jsx-runtime-DeHZSEgm.js";
import { n, t as r } from "./ExperienceItem-DzUHD33p.js";
import { n as i, t as a } from "./SectionShell-0PZZYm29.js";
function o({
  section: e,
  locale: t,
  workModeLabels: n,
  presentLabel: i,
  detailsLabel: o,
  closeLabel: c,
}) {
  return (0, s.jsx)(a, {
    id: e.id,
    index: e.index,
    heading: e.heading,
    children: (0, s.jsx)(`div`, {
      "data-sanity": e.editTarget,
      className: `flex flex-col`,
      children: e.items.map((e) =>
        (0, s.jsx)(
          r,
          {
            item: e,
            locale: t,
            workModeLabel: n[e.workMode],
            presentLabel: i,
            detailsLabel: o,
            closeLabel: c,
          },
          e.id,
        ),
      ),
    }),
  });
}
var s;
function c() {
  return (c = e(() => {
    (n(),
      i(),
      (s = t()),
      (o.__docgenInfo = {
        description: ``,
        methods: [],
        displayName: `ExperienceSection`,
        props: {
          section: {
            required: !0,
            tsType: { name: `ExperienceSectionData` },
            description: ``,
          },
          locale: { required: !0, tsType: { name: `string` }, description: `` },
          workModeLabels: {
            required: !0,
            tsType: {
              name: `Record`,
              elements: [
                {
                  name: `union`,
                  raw: `"onsite" | "hybrid" | "remote"`,
                  elements: [
                    { name: `literal`, value: `"onsite"` },
                    { name: `literal`, value: `"hybrid"` },
                    { name: `literal`, value: `"remote"` },
                  ],
                },
                { name: `string` },
              ],
              raw: `Record<"onsite" | "hybrid" | "remote", string>`,
            },
            description: ``,
          },
          presentLabel: {
            required: !1,
            tsType: { name: `string` },
            description: ``,
          },
          detailsLabel: {
            required: !1,
            tsType: { name: `string` },
            description: ``,
          },
          closeLabel: {
            required: !1,
            tsType: { name: `string` },
            description: ``,
          },
        },
      }));
  }))();
}
export { c as n, o as t };
