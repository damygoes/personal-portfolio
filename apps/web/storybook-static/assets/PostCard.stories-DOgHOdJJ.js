import { n as e } from "./rolldown-runtime-DkW27tQK.js";
import { t } from "./jsx-runtime-DeHZSEgm.js";
import { n, t as r } from "./PostCard-D88PLe3F.js";
var i, a, o, s, c, l;
function u() {
  return (u = e(() => {
    (n(),
      (i = t()),
      (a = {
        title: `Molecules/PostCard`,
        component: r,
        tags: [`autodocs`],
        args: {
          locale: `en`,
          readingTimeLabel: `6 min read`,
          post: {
            id: `post-1`,
            slug: `organizing-a-frontend-monorepo`,
            href: `/en/blog/organizing-a-frontend-monorepo`,
            title: `Organizing a frontend monorepo`,
            excerpt: `How I split packages and apps in this portfolio project.`,
            cover: {
              src: `https://picsum.photos/seed/monorepo/800/600`,
              width: 800,
              height: 600,
              alt: `A laptop showing a code editor on a desk`,
            },
            categories: [
              {
                slug: `engineering`,
                title: `Engineering`,
                href: `/en/blog/category/engineering`,
              },
            ],
            publishedAt: `2026-01-15T09:00:00.000Z`,
            readingTimeMinutes: 6,
            layout: `standard`,
          },
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
      (s = {
        args: { variant: `featured` },
        decorators: [
          (e) =>
            (0, i.jsx)(`div`, {
              className: `max-w-2xl`,
              children: (0, i.jsx)(e, {}),
            }),
        ],
      }),
      (c = { args: { variant: `compact` } }),
      (l = [`Default`, `Featured`, `Compact`]));
  }))();
}
u();
export {
  c as Compact,
  o as Default,
  s as Featured,
  l as __namedExportsOrder,
  a as default,
};
