import { n as e } from "./rolldown-runtime-DkW27tQK.js";
import { n as t, t as n } from "./Pagination-KOBupkMm.js";
var r, i, a, o, s;
function c() {
  return (c = e(() => {
    (t(),
      (r = {
        title: `Molecules/Pagination`,
        component: n,
        tags: [`autodocs`],
        args: {
          pagination: {
            page: 2,
            totalPages: 5,
            previousHref: `?page=1`,
            nextHref: `?page=3`,
          },
        },
      }),
      (i = {}),
      (a = {
        args: { pagination: { page: 1, totalPages: 5, nextHref: `?page=2` } },
      }),
      (o = {
        args: {
          pagination: { page: 5, totalPages: 5, previousHref: `?page=4` },
        },
      }),
      (s = [`Default`, `FirstPage`, `LastPage`]));
  }))();
}
c();
export {
  i as Default,
  a as FirstPage,
  o as LastPage,
  s as __namedExportsOrder,
  r as default,
};
