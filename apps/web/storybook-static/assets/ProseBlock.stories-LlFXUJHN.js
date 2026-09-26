import { n as e } from "./rolldown-runtime-DkW27tQK.js";
import { t } from "./jsx-runtime-DeHZSEgm.js";
import { n, t as r } from "./ProseBlock-Dm3lbwo5.js";
var i, a, o, s, c, l;
function u() {
  return (u = e(() => {
    (n(),
      (i = t()),
      (a = {
        title: `RichText/ProseBlock`,
        component: r,
        tags: [`autodocs`],
        args: {
          block: {
            _type: `block`,
            _key: `intro`,
            style: `normal`,
            markDefs: [],
            children: [
              {
                _type: `span`,
                _key: `intro-span-1`,
                text: `A short introduction paragraph with `,
                marks: [],
              },
              {
                _type: `span`,
                _key: `intro-span-2`,
                text: `bold`,
                marks: [`strong`],
              },
              { _type: `span`, _key: `intro-span-3`, text: ` and `, marks: [] },
              {
                _type: `span`,
                _key: `intro-span-4`,
                text: `italic`,
                marks: [`em`],
              },
              {
                _type: `span`,
                _key: `intro-span-5`,
                text: ` text.`,
                marks: [],
              },
            ],
          },
        },
      }),
      (o = {}),
      (s = {
        args: {
          block: {
            _type: `block`,
            _key: `quote`,
            style: `blockquote`,
            markDefs: [],
            children: [
              {
                _type: `span`,
                _key: `quote-span`,
                text: `A quoted paragraph.`,
                marks: [],
              },
            ],
          },
        },
      }),
      (c = {
        render: () =>
          (0, i.jsxs)(`ul`, {
            className: `list-disc pl-5`,
            children: [
              (0, i.jsx)(r, {
                block: {
                  _type: `block`,
                  _key: `item-1`,
                  style: `normal`,
                  listItem: `bullet`,
                  level: 1,
                  markDefs: [],
                  children: [
                    {
                      _type: `span`,
                      _key: `item-1-span`,
                      text: `First item`,
                      marks: [],
                    },
                  ],
                },
              }),
              (0, i.jsx)(r, {
                block: {
                  _type: `block`,
                  _key: `item-2`,
                  style: `normal`,
                  listItem: `bullet`,
                  level: 1,
                  markDefs: [],
                  children: [
                    {
                      _type: `span`,
                      _key: `item-2-span`,
                      text: `Second item`,
                      marks: [],
                    },
                  ],
                },
              }),
            ],
          }),
      }),
      (l = [`Normal`, `Blockquote`, `ListItem`]));
  }))();
}
u();
export {
  s as Blockquote,
  c as ListItem,
  o as Normal,
  l as __namedExportsOrder,
  a as default,
};
