import { n as e } from "./rolldown-runtime-DkW27tQK.js";
import { t } from "./jsx-runtime-DeHZSEgm.js";
import { n, t as r } from "./MobileMenu-CHgisNfa.js";
var i, a, o, s;
function c() {
  return (c = e(() => {
    (n(),
      (i = t()),
      (a = {
        title: `Organisms/MobileMenu`,
        component: r,
        tags: [`autodocs`],
        args: {
          items: [
            { key: `about`, href: `/en#about`, index: `01`, label: `About` },
            { key: `work`, href: `/en#work`, index: `03`, label: `Work` },
            { key: `blog`, href: `/en/blog`, label: `Blog` },
          ],
        },
        decorators: [
          (e) =>
            (0, i.jsx)(`div`, {
              className: `max-w-sm`,
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
