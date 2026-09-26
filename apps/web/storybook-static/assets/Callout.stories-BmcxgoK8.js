import { n as e } from "./rolldown-runtime-DkW27tQK.js";
import { n as t, t as n } from "./Callout--KCseKeO.js";
var r, i, a, o, s, c;
function l() {
  return (l = e(() => {
    (t(),
      (r = (e) => [
        {
          _type: `block`,
          _key: `body-1`,
          style: `normal`,
          markDefs: [],
          children: [
            { _type: `span`, _key: `body-1-span`, text: e, marks: [] },
          ],
        },
      ]),
      (i = { title: `RichText/Callout`, component: n, tags: [`autodocs`] }),
      (a = {
        args: {
          block: {
            _type: `callout`,
            _key: `c1`,
            tone: `info`,
            body: r(`Good to know: this applies to both locales.`),
          },
        },
      }),
      (o = {
        args: {
          block: {
            _type: `callout`,
            _key: `c2`,
            tone: `tip`,
            body: r(
              `You can skip this step if you already have pnpm installed.`,
            ),
          },
        },
      }),
      (s = {
        args: {
          block: {
            _type: `callout`,
            _key: `c3`,
            tone: `warning`,
            body: r(`This will overwrite your local changes.`),
          },
        },
      }),
      (c = [`Info`, `Tip`, `Warning`]));
  }))();
}
l();
export {
  a as Info,
  o as Tip,
  s as Warning,
  c as __namedExportsOrder,
  i as default,
};
