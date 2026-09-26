import type { Locale, Project, ProjectCard } from "@portfolio/contracts";

const projectSeo = (
  locale: Locale,
  title: string,
  description: string,
  slug: string,
) => ({
  title,
  description,
  canonicalUrl: `https://damilolabada.com/${locale}/work/${slug}`,
  noIndex: false,
  alternates: [
    { locale: "en" as const, href: `https://damilolabada.com/en/work/${slug}` },
    { locale: "de" as const, href: `https://damilolabada.com/de/work/${slug}` },
  ],
});

const cover = {
  src: "https://cdn.example.com/images/elliesnote-cover.jpg",
  width: 1600,
  height: 1000,
  alt: "Screenshot of the Ellie's Note app dashboard",
  lqip: "data:image/jpeg;base64,",
};

const projectsByLocale: Record<Locale, Project[]> = {
  en: [
    {
      id: "proj-elliesnote",
      title: "Ellie's Note",
      summary:
        "A journalling app for new parents to track feeds, sleep and milestones.",
      cover,
      tech: ["TypeScript", "React Native", "Node.js", "PostgreSQL"],
      href: "/en/work/elliesnote",
      slug: "elliesnote",
      role: "Fullstack developer",
      period: { start: "2023-02-01", end: null, isCurrent: true },
      status: "live",
      links: [
        { kind: "live", href: "https://elliesnote.app" },
        { kind: "appStore", href: "https://apps.apple.com/app/elliesnote" },
      ],
      body: [],
      toc: [],
      seo: projectSeo(
        "en",
        "Ellie's Note — case study",
        "How I built a cross-platform journalling app for new parents.",
        "elliesnote",
      ),
    },
    {
      id: "proj-portfolio",
      title: "damilolabada.com",
      summary: "This site — a Sanity-backed, next-intl portfolio and blog.",
      cover: { ...cover, alt: "Screenshot of this portfolio homepage" },
      tech: ["Next.js", "Sanity", "Tailwind CSS", "Turborepo"],
      href: "/en/work/portfolio",
      slug: "portfolio",
      role: "Designer & developer",
      period: { start: "2025-11-01", end: "2026-03-01", isCurrent: false },
      status: "inDevelopment",
      links: [
        {
          kind: "repository",
          href: "https://github.com/damilolabada/personal-portfolio",
        },
      ],
      body: [],
      toc: [],
      seo: projectSeo(
        "en",
        "damilolabada.com — case study",
        "Notes on building this portfolio as a Turborepo monorepo.",
        "portfolio",
      ),
    },
  ],
  de: [],
};

// German fixtures mirror the English ones with locale-appropriate copy; kept minimal for now.
projectsByLocale.de = projectsByLocale.en.map((project) => ({
  ...project,
  href: project.href.replace("/en/", "/de/"),
  seo: projectSeo(
    "de",
    project.seo.title,
    project.seo.description,
    project.slug,
  ),
}));

export function getProjects(locale: Locale): Project[] {
  return projectsByLocale[locale];
}

export function toProjectCard(project: Project, index: string): ProjectCard {
  return {
    id: project.id,
    index,
    title: project.title,
    summary: project.summary,
    cover: project.cover,
    tech: project.tech,
    href: project.href,
  };
}
