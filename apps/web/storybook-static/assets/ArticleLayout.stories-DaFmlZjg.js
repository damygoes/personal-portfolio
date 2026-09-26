import { n as e } from "./rolldown-runtime-DkW27tQK.js";
import { n as t, t as n } from "./ArticleLayout-DYiIEnx6.js";
var r, i, a;
function o() {
  return (o = e(() => {
    (t(),
      (r = {
        title: `Layouts/ArticleLayout`,
        component: n,
        tags: [`autodocs`],
        args: {
          post: {
            id: `post-1`,
            slug: `organizing-a-frontend-monorepo`,
            href: `/en/blog/organizing-a-frontend-monorepo`,
            title: `Organizing a frontend monorepo`,
            excerpt: `How I split packages and apps in this portfolio project.`,
            cover: {
              src: `https://picsum.photos/seed/article/1600/900`,
              width: 1600,
              height: 900,
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
            body: [
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
                _key: `h2-packages`,
                style: `h2`,
                markDefs: [],
                children: [
                  {
                    _type: `span`,
                    _key: `h2-packages-span`,
                    text: `Splitting into packages`,
                  },
                ],
              },
            ],
            toc: [
              { id: `h2-packages`, text: `Splitting into packages`, level: 2 },
            ],
            seo: {
              title: `Organizing a frontend monorepo`,
              description: ``,
              canonicalUrl: `https://damilolabada.com/en/blog/organizing-a-frontend-monorepo`,
              noIndex: !1,
              alternates: [],
            },
            related: [
              {
                id: `post-2`,
                slug: `a-walk-through-berlin`,
                href: `/en/blog/a-walk-through-berlin`,
                title: `A walk through Berlin`,
                excerpt: `A handful of frames from a quiet evening walk.`,
                cover: {
                  src: `https://picsum.photos/seed/article-related/400/400`,
                  width: 400,
                  height: 400,
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
          },
          locale: `en`,
          readingTimeLabel: `6 min read`,
          relatedReadingTimeLabel: (e) => `${e} min read`,
        },
      }),
      (i = {}),
      (a = [`Default`]));
  }))();
}
o();
export { i as Default, a as __namedExportsOrder, r as default };
