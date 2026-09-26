import { n as e } from "./rolldown-runtime-DkW27tQK.js";
import { n as t } from "./iframe-BESghBLE.js";
import { t as n } from "./jsx-runtime-DeHZSEgm.js";
import { n as r, t as i } from "./ProseLink-Dat61un5.js";
function a(e) {
  let t = e.markDefs ?? [];
  return e.children.filter(c).map((e) => {
    let n = e.text;
    for (let r of e.marks ?? [])
      if (r === `strong`)
        n = (0, s.jsx)(`strong`, { children: n }, `${e._key}-strong`);
      else if (r === `em`)
        n = (0, s.jsx)(`em`, { children: n }, `${e._key}-em`);
      else if (r === `code`)
        n = (0, s.jsx)(
          `code`,
          {
            className: `rounded bg-secondary px-1 py-0.5 font-mono text-[0.9em]`,
            children: n,
          },
          `${e._key}-code`,
        );
      else {
        let a = t.find((e) => e._key === r);
        a?._type === `link` &&
          (n = (0, s.jsx)(
            i,
            { href: a.href, external: a.external, children: n },
            `${e._key}-link`,
          ));
      }
    return (0, s.jsx)(o.Fragment, { children: n }, e._key);
  });
}
var o, s, c;
function l() {
  return (l = e(() => {
    ((o = t()),
      r(),
      (s = n()),
      (c = (e) => typeof e == `object` && !!e && e._type === `span`));
  }))();
}
export { a as n, l as t };
