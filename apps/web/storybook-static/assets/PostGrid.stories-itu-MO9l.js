import { n as e } from "./rolldown-runtime-DkW27tQK.js";
import { n as t, t as n } from "./PostGrid-IIXgxv_g.js";
var r, i, a, o;
function s() {
  return (s = e(() => {
    (t(),
      (r = {
        title: `Organisms/PostGrid`,
        component: n,
        tags: [`autodocs`],
        args: {
          posts: [
            {
              id: `post-1`,
              slug: `organizing-a-frontend-monorepo`,
              href: `/en/blog/organizing-a-frontend-monorepo`,
              title: `Organizing a frontend monorepo`,
              excerpt: `How I split packages and apps in this portfolio project.`,
              cover: {
                src: `https://picsum.photos/seed/grid-1/800/600`,
                width: 800,
                height: 600,
                alt: `Monorepo`,
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
            {
              id: `post-2`,
              slug: `a-walk-through-berlin`,
              href: `/en/blog/a-walk-through-berlin`,
              title: `A walk through Berlin`,
              excerpt: `A handful of frames from a quiet evening walk.`,
              cover: {
                src: `https://picsum.photos/seed/grid-2/800/600`,
                width: 800,
                height: 600,
                alt: `Berlin`,
              },
              categories: [
                {
                  slug: `photography`,
                  title: `Photography`,
                  href: `/en/blog/category/photography`,
                },
              ],
              publishedAt: `2025-09-20T09:00:00.000Z`,
              readingTimeMinutes: 3,
              layout: `photoEssay`,
            },
          ],
          locale: `en`,
          readingTimeLabel: (e) => `${e} min read`,
        },
      }),
      (i = {}),
      (a = { args: { posts: [] } }),
      (o = [`Default`, `Empty`]));
  }))();
}
s();
export { i as Default, a as Empty, o as __namedExportsOrder, r as default };
