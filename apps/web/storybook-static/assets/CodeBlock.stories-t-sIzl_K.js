import { n as e } from "./rolldown-runtime-DkW27tQK.js";
import { n as t, t as n } from "./CodeBlock-B_AKcPZq.js";
var r, i, a, o, s, c, l;
function u() {
  return (u = e(() => {
    (t(),
      (r = `function add(a: number, b: number) {
  return a + b;
}`),
      (i = {
        _type: `code`,
        _key: `code-1`,
        language: `typescript`,
        code: r,
        filename: `add.ts`,
        highlightedLines: [2],
      }),
      (a = `<pre class="shiki"><code>${r
        .split(
          `
`,
        )
        .map((e) => `<span class="line">${e}</span>`).join(`
`)}</code></pre>`),
      (o = {
        title: `RichText/CodeBlock`,
        component: n,
        tags: [`autodocs`],
        args: { block: i, html: a },
      }),
      (s = {}),
      (c = { args: { block: { ...i, filename: void 0 } } }),
      (l = [`WithFilename`, `WithoutFilename`]));
  }))();
}
u();
export {
  s as WithFilename,
  c as WithoutFilename,
  l as __namedExportsOrder,
  o as default,
};
