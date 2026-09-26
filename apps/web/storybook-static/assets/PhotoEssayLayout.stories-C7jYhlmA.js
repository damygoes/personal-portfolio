import { n as e } from "./rolldown-runtime-DkW27tQK.js";
import { n as t, t as n } from "./PhotoEssayLayout-BGMM_KQR.js";
var r, i, a;
function o() {
  return (o = e(() => {
    (t(),
      (r = {
        title: `Layouts/PhotoEssayLayout`,
        component: n,
        tags: [`autodocs`],
        args: {
          post: {
            id: `post-2`,
            slug: `a-walk-through-berlin`,
            href: `/en/blog/a-walk-through-berlin`,
            title: `A walk through Berlin`,
            excerpt: `A handful of frames from a quiet evening walk.`,
            cover: {
              src: `https://picsum.photos/seed/pe-layout/1600/1000`,
              width: 1600,
              height: 1e3,
              alt: `Berlin street`,
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
            body: [
              {
                _type: `figure`,
                _key: `figure-1`,
                size: `fullBleed`,
                showExif: !0,
                image: {
                  src: `https://picsum.photos/seed/pe-layout-figure/1600/1000`,
                  width: 1600,
                  height: 1e3,
                  alt: `A quiet street in Berlin`,
                  exif: { camera: `Fujifilm X100V`, aperture: `f/2.8` },
                },
              },
            ],
            toc: [],
            seo: {
              title: `A walk through Berlin`,
              description: ``,
              canonicalUrl: `https://damilolabada.com/en/blog/a-walk-through-berlin`,
              noIndex: !1,
              alternates: [],
            },
            photoSummary: {
              photoCount: 1,
              cameras: [`Fujifilm X100V`],
              lenses: [`23mm f/2`],
            },
            related: [],
          },
          locale: `en`,
          photoCountLabel: `1 photo`,
          relatedReadingTimeLabel: (e) => `${e} min read`,
        },
      }),
      (i = {}),
      (a = [`Default`]));
  }))();
}
o();
export { i as Default, a as __namedExportsOrder, r as default };
