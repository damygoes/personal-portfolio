import { n as e } from "./rolldown-runtime-DkW27tQK.js";
import { t } from "./jsx-runtime-DeHZSEgm.js";
import { n, t as r } from "./TableOfContents-DRuDK5QS.js";
var i, a, o, s;
function c() {
  return (c = e(() => {
    (n(),
      (i = t()),
      (a = {
        title: `Molecules/TableOfContents`,
        component: r,
        tags: [`autodocs`],
        args: {
          entries: [
            { id: `intro`, text: `Introduction`, level: 2 },
            { id: `packages`, text: `Splitting into packages`, level: 2 },
            { id: `packages-ui`, text: `packages/ui`, level: 3 },
            { id: `conclusion`, text: `Conclusion`, level: 2 },
          ],
        },
        decorators: [
          (e) =>
            (0, i.jsx)(`div`, {
              className: `max-w-xs`,
              children: (0, i.jsx)(e, {}),
            }),
        ],
      }),
      (o = {}),
      (s = [`Default`]));
  }))();
}
c();
export { o as Default, s as __namedExportsOrder, a as default };
