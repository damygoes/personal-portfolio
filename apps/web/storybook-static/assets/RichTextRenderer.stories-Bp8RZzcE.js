import { n as e } from "./rolldown-runtime-DkW27tQK.js";
import { t } from "./jsx-runtime-DeHZSEgm.js";
import { n, t as r } from "./RichTextRenderer-Bgfx5Rah.js";
var i, a, o, s, c;
function l() {
  return (l = e(() => {
    (n(),
      (i = t()),
      (a = {
        title: `Organisms/RichTextRenderer`,
        component: r,
        tags: [`autodocs`],
        args: {
          value: [
            {
              _type: `block`,
              _key: `intro`,
              style: `normal`,
              markDefs: [],
              children: [
                {
                  _type: `span`,
                  _key: `intro-span`,
                  text: `A short introduction paragraph.`,
                },
              ],
            },
            {
              _type: `block`,
              _key: `h2-1`,
              style: `h2`,
              markDefs: [],
              children: [
                {
                  _type: `span`,
                  _key: `h2-1-span`,
                  text: `Splitting into packages`,
                },
              ],
            },
            {
              _type: `block`,
              _key: `li-1`,
              style: `normal`,
              listItem: `bullet`,
              level: 1,
              markDefs: [],
              children: [
                {
                  _type: `span`,
                  _key: `li-1-span`,
                  text: `packages/ui for primitives`,
                },
              ],
            },
            {
              _type: `block`,
              _key: `li-2`,
              style: `normal`,
              listItem: `bullet`,
              level: 1,
              markDefs: [],
              children: [
                {
                  _type: `span`,
                  _key: `li-2-span`,
                  text: `apps/web for everything else`,
                },
              ],
            },
            {
              _type: `callout`,
              _key: `callout-1`,
              tone: `tip`,
              body: [
                {
                  _type: `block`,
                  _key: `callout-1-body`,
                  style: `normal`,
                  markDefs: [],
                  children: [
                    {
                      _type: `span`,
                      _key: `callout-1-body-span`,
                      text: `You can mix and match blocks freely.`,
                    },
                  ],
                },
              ],
            },
            {
              _type: `figure`,
              _key: `figure-1`,
              size: `wide`,
              showExif: !1,
              image: {
                src: `https://picsum.photos/seed/richtext/1200/800`,
                width: 1200,
                height: 800,
                alt: `A laptop on a desk`,
              },
            },
          ],
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
      (s = { args: { variant: `compact` } }),
      (c = [`Article`, `Compact`]));
  }))();
}
l();
export { o as Article, s as Compact, c as __namedExportsOrder, a as default };
