import type { Category, Locale, Post, PostCard } from "@portfolio/contracts";

type CategoryKey = "engineering" | "photography";

const categories: Record<Locale, Record<CategoryKey, Category>> = {
  en: {
    engineering: {
      slug: "engineering",
      title: "Engineering",
      description: "Notes on building software.",
      href: "/en/blog/category/engineering",
    },
    photography: {
      slug: "photography",
      title: "Photography",
      description: "Photo essays from trips and walks.",
      href: "/en/blog/category/photography",
    },
  },
  de: {
    engineering: {
      slug: "engineering",
      title: "Engineering",
      description: "Notizen zum Software-Bau.",
      href: "/de/blog/category/engineering",
    },
    photography: {
      slug: "photography",
      title: "Fotografie",
      description: "Fotoessays von Reisen und Spaziergängen.",
      href: "/de/blog/category/photography",
    },
  },
};

const postSeo = (
  locale: Locale,
  title: string,
  description: string,
  slug: string,
) => ({
  title,
  description,
  canonicalUrl: `https://damilolabada.com/${locale}/blog/${slug}`,
  noIndex: false,
  alternates: [
    { locale: "en" as const, href: `https://damilolabada.com/en/blog/${slug}` },
    { locale: "de" as const, href: `https://damilolabada.com/de/blog/${slug}` },
  ],
});

const cover = {
  src: "https://cdn.example.com/images/post-cover-1.jpg",
  width: 1600,
  height: 900,
  alt: "A laptop showing a code editor on a desk",
  lqip: "data:image/jpeg;base64,",
};

const photoEssayCover = {
  src: "https://cdn.example.com/images/street-photo-1.jpg",
  width: 2000,
  height: 1333,
  alt: "A quiet street in Berlin at dusk",
  lqip: "data:image/jpeg;base64,",
  exif: {
    camera: "Fujifilm X100V",
    lens: "23mm f/2",
    focalLength: "23mm",
    aperture: "f/2.8",
    shutterSpeed: "1/125s",
    iso: 400,
    takenAt: "2025-09-12T18:30:00.000Z",
  },
};

function buildPosts(locale: Locale): Post[] {
  const cats = categories[locale];

  const standard: Post = {
    id: "post-monorepo",
    slug: "organizing-a-frontend-monorepo",
    href: `/${locale}/blog/organizing-a-frontend-monorepo`,
    title:
      locale === "de"
        ? "Ein Frontend-Monorepo organisieren"
        : "Organizing a frontend monorepo",
    excerpt:
      locale === "de"
        ? "Wie ich Pakete und Apps in diesem Portfolio-Projekt aufgeteilt habe."
        : "How I split packages and apps in this portfolio project.",
    cover,
    categories: [cats.engineering],
    publishedAt: "2026-01-15T09:00:00.000Z",
    readingTimeMinutes: 6,
    layout: "standard",
    updatedAt: "2026-02-01T09:00:00.000Z",
    body: [
      {
        _type: "block",
        _key: "intro",
        style: "normal",
        children: [
          {
            _type: "span",
            _key: "intro-span",
            text: "A short introduction paragraph.",
          },
        ],
        markDefs: [],
      },
      {
        _type: "block",
        _key: "h2-packages",
        style: "h2",
        children: [
          {
            _type: "span",
            _key: "h2-packages-span",
            text: "Splitting into packages",
          },
        ],
        markDefs: [],
      },
    ],
    toc: [{ id: "h2-packages", text: "Splitting into packages", level: 2 }],
    seo: postSeo(
      locale,
      "Organizing a frontend monorepo",
      "How I split packages and apps in this portfolio project.",
      "organizing-a-frontend-monorepo",
    ),
    related: [],
  };

  const photoEssay: Post = {
    id: "post-berlin-walk",
    slug: "a-walk-through-berlin",
    href: `/${locale}/blog/a-walk-through-berlin`,
    title:
      locale === "de"
        ? "Ein Spaziergang durch Berlin"
        : "A walk through Berlin",
    excerpt:
      locale === "de"
        ? "Ein paar Bilder von einem ruhigen Abendspaziergang."
        : "A handful of frames from a quiet evening walk.",
    cover: photoEssayCover,
    categories: [cats.photography],
    publishedAt: "2025-09-20T09:00:00.000Z",
    readingTimeMinutes: 3,
    layout: "photoEssay",
    body: [
      {
        _type: "figure",
        _key: "figure-1",
        image: photoEssayCover,
        size: "fullBleed",
        showExif: true,
      },
    ],
    toc: [],
    seo: postSeo(
      locale,
      "A walk through Berlin",
      "A handful of frames from a quiet evening walk.",
      "a-walk-through-berlin",
    ),
    photoSummary: {
      photoCount: 1,
      cameras: ["Fujifilm X100V"],
      lenses: ["23mm f/2"],
    },
    related: [],
  };

  return [standard, photoEssay];
}

const postsByLocale: Record<Locale, Post[]> = {
  en: buildPosts("en"),
  de: buildPosts("de"),
};

export function getPosts(locale: Locale): Post[] {
  return postsByLocale[locale];
}

export function getCategories(locale: Locale): Category[] {
  return Object.values(categories[locale]);
}

export function toPostCard(post: Post): PostCard {
  return {
    id: post.id,
    slug: post.slug,
    href: post.href,
    title: post.title,
    excerpt: post.excerpt,
    cover: post.cover,
    categories: post.categories,
    publishedAt: post.publishedAt,
    readingTimeMinutes: post.readingTimeMinutes,
    layout: post.layout,
  };
}
