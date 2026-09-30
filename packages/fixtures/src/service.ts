import type {
  AboutDTO,
  AboutPageDTO,
  BlogIndexDTO,
  CaseSectionDTO,
  CaseStudyDTO,
  CategoryDTO,
  ContentService,
  ExperienceDTO,
  FactDTO,
  HomeDTO,
  Locale,
  PostCardDTO,
  PostDTO,
  ProjectCardDTO,
  SiteSettingsDTO,
  SkillGroupDTO,
  TocEntry,
  WorkPageDTO,
} from "@portfolio/contracts";
import { DEFAULT_LOCALE } from "@portfolio/contracts";
import { getDictionary } from "@portfolio/i18n";
import {
  compact,
  formatDate,
  formatPeriod,
  numberItems,
  pad2,
  splitTitleDot,
  text,
} from "@portfolio/utils";
import { about } from "./data/about";
import { caseStudies, type RawSection } from "./data/case-studies";
import { categories } from "./data/categories";
import { experience } from "./data/experience";
import { posts } from "./data/posts";
import { projects } from "./data/projects";
import { site } from "./data/site";
import { skillGroups, skillsIntro } from "./data/skills";

/**
 * Static content for Storybook and local development. Content is EN only, so
 * every locale gets the EN text (the documented fallback) with locale-aware
 * dates, labels and links.
 */

const byOrder = <T extends { order: number }>(items: T[]) =>
  [...items].sort((a, b) => a.order - b.order);

const domainOf = (url: string) => new URL(url).hostname.replace(/^www\./, "");

/** Section headings always end in a spark dot, so the stored period is dropped. */
const heading = (value: string | null) => {
  const h = text(value);
  return h ? splitTitleDot(h).title : undefined;
};

/** Fixtures hold EN only: every locale is served the default-locale fallback. */
const fallbackContent = {
  contentLocale: DEFAULT_LOCALE,
  availableLocales: [DEFAULT_LOCALE],
};

function toProjectCard(locale: Locale, slug: string): ProjectCardDTO {
  const ordered = byOrder(projects);
  const index = ordered.findIndex((p) => p.slug === slug);
  const p = ordered[index];
  if (!p) throw new Error(`Unknown project: ${slug}`);
  const { title, titleDot } = splitTitleDot(p.title);
  const hasCaseStudy = Boolean(p.caseStudy);
  return {
    index: index + 1,
    total: ordered.length,
    slug: p.slug,
    title,
    titleDot,
    kind: p.kind,
    summary: p.summary,
    teaser: p.teaser,
    tech: p.tech,
    status: p.status,
    tone: p.coverTone,
    coverTag: p.coverTag,
    ghost: pad2(index + 1),
    primaryHref: hasCaseStudy
      ? `/${locale}/work/${p.slug}`
      : (p.links.github ?? p.links.live ?? `/${locale}/work`),
    externalLink:
      hasCaseStudy && p.links.live
        ? { label: domainOf(p.links.live), href: p.links.live, external: true }
        : undefined,
    hasCaseStudy,
    featured: p.featured,
  };
}

function allProjectCards(locale: Locale): ProjectCardDTO[] {
  return byOrder(projects).map((p) => toProjectCard(locale, p.slug));
}

function toSection(raw: RawSection, number: string): CaseSectionDTO | null {
  const base = { label: raw.label, number };
  switch (raw.type) {
    case "textBlock": {
      const body = compact(raw.body).map((t) => [{ text: t }]);
      const h = heading(raw.heading);
      return h || body.length
        ? { type: "textBlock", ...base, heading: h, body }
        : null;
    }
    case "stepsGrid":
    case "featureGrid": {
      const items = (raw.type === "stepsGrid" ? raw.steps : raw.features).map(
        (i) => ({
          title: i.title,
          text: text(i.text),
        }),
      );
      if (!items.length) return null;
      return raw.type === "stepsGrid"
        ? {
            type: "stepsGrid",
            ...base,
            heading: heading(raw.heading),
            steps: items,
          }
        : {
            type: "featureGrid",
            ...base,
            heading: heading(raw.heading),
            features: items,
          };
    }
    case "plans":
      return raw.plans.length
        ? {
            type: "plans",
            ...base,
            heading: heading(raw.heading),
            plans: raw.plans,
            note: text(raw.note),
          }
        : null;
    case "architecture": {
      const box = (b: {
        eyebrow: string;
        title: string;
        sub: string | null;
        isCore?: boolean;
      }) => ({
        eyebrow: b.eyebrow,
        title: b.title,
        sub: text(b.sub),
        isCore: b.isCore,
      });
      return raw.core.length
        ? {
            type: "architecture",
            ...base,
            heading: heading(raw.heading),
            core: raw.core.map(box),
            sub: raw.sub.map(box),
            notes: compact(raw.notes).map((t) => [{ text: t }]),
          }
        : null;
    }
    case "quote": {
      const quote = text(raw.text);
      return quote
        ? {
            type: "quote",
            ...base,
            text: quote,
            attribution: text(raw.attribution),
          }
        : null;
    }
  }
}

function toSections(raw: RawSection[]): CaseSectionDTO[] {
  const kept = raw
    .map((section) => toSection(section, ""))
    .filter((s): s is CaseSectionDTO => s !== null);
  return numberItems(kept);
}

function toAbout(locale: Locale): AboutDTO {
  const facts: FactDTO[] = about.facts.map((f) => {
    const links = f.links ?? [];
    const value =
      links.length === 2
        ? [
            { text: "Passe.", href: `/${locale}/work/${links[0]}` },
            { text: " & " },
            { text: "ElliesNote", href: `/${locale}/work/${links[1]}` },
          ]
        : [{ text: f.value }];
    return { label: f.label, value, onHome: !f.aboutPageOnly };
  });
  return {
    statement: about.statement,
    bio: about.bio,
    teaserParagraphs: about.teaserParagraphs,
    lede: about.lede,
    portrait: about.portrait,
    facts,
  };
}

function toExperience(locale: Locale): ExperienceDTO[] {
  const present = getDictionary(locale).common.present;
  return byOrder(experience).map((e) => ({
    start: e.start,
    end: e.end,
    when: formatPeriod(e.start, e.end, locale, present),
    isCurrent: e.end === null,
    role: e.role,
    company: e.company,
    location: text(e.location),
    workMode: e.workMode ?? undefined,
    summary: text(e.summary),
    bullets: compact(e.bullets),
  }));
}

function toSkills(): SkillGroupDTO[] {
  return skillGroups.map((g) => ({
    title: g.title,
    items: g.items,
    count: `(${pad2(g.items.length)})`,
  }));
}

const categoryRef = (slug: string) => {
  const c = categories.find((cat) => cat.slug === slug);
  if (!c) throw new Error(`Unknown category: ${slug}`);
  return c;
};

const newestFirst = [...posts].sort((a, b) =>
  b.publishedAt.localeCompare(a.publishedAt),
);

function toPostCard(locale: Locale, post: (typeof posts)[number]): PostCardDTO {
  const cats = post.categories.map(categoryRef);
  const primary = cats[0]!;
  return {
    slug: post.slug,
    href: `/${locale}/blog/${post.slug}`,
    title: post.title,
    excerpt: post.excerpt,
    date: post.publishedAt,
    dateLabel: formatDate(post.publishedAt, locale),
    readingMinutes: post.readingMinutes,
    category: { slug: primary.slug, title: primary.title },
    categories: cats.map((c) => ({ slug: c.slug, title: c.title })),
    tone: primary.coverTone,
    ghost: post.coverWord,
    sample: post.sample,
  };
}

function toSite(): SiteSettingsDTO {
  return {
    name: site.name,
    tagline: site.tagline,
    email: site.email,
    socials: site.socials.map((s) => ({
      label: s.label,
      href: s.url,
      external: true,
    })),
    cvUrl: site.cvUrl,
    location: site.location,
    timezone: site.timezone,
    yearsExperienceLabel: site.yearsExperienceLabel,
    heroMeta: site.heroMeta,
    currentRole: site.currentRole,
    marqueeItems: site.marqueeItems.map((m) => ({
      text: m.text,
      outlined: Boolean(m.outlined),
    })),
    author: {
      name: site.name,
      initials: site.initials,
      role: site.currentRole.title,
      bio: site.authorBio,
    },
  };
}

export class FixtureContentService implements ContentService {
  async getSiteSettings(_locale: Locale): Promise<SiteSettingsDTO> {
    return toSite();
  }

  async getHome(locale: Locale): Promise<HomeDTO> {
    const cards = allProjectCards(locale);
    const featured = cards.filter((c) => c.featured);
    const latest = featured[0];
    return {
      newWork: latest
        ? {
            label: `${latest.title}${latest.titleDot ? "." : ""}${latest.teaser ? `, ${latest.teaser}` : ""}`,
            href: latest.primaryHref,
          }
        : undefined,
      featured,
      more: cards.filter((c) => !c.featured),
      about: toAbout(locale),
      latestPosts: newestFirst.slice(0, 3).map((p) => toPostCard(locale, p)),
    };
  }

  async getWorkPage(locale: Locale): Promise<WorkPageDTO> {
    const cards = allProjectCards(locale);
    return {
      projectCount: cards.length,
      caseStudyCount: cards.filter((c) => c.hasCaseStudy).length,
      featured: cards.filter((c) => c.featured),
      others: cards.filter((c) => !c.featured),
    };
  }

  async getCaseStudy(
    slug: string,
    locale: Locale,
  ): Promise<CaseStudyDTO | null> {
    const raw = caseStudies.find((c) => c.project === slug);
    if (!raw) return null;
    const cards = allProjectCards(locale);
    const project = cards.find((c) => c.slug === slug)!;
    const withCase = cards.filter((c) => c.hasCaseStudy);
    const position = withCase.findIndex((c) => c.slug === slug);
    const nextCase = withCase[position + 1];
    const live = byOrder(projects).find((p) => p.slug === slug)?.links.live;
    return {
      project,
      caseNumber: pad2(position + 1),
      titleParts: raw.titleSplit
        ? [
            { text: raw.titleSplit[0], outlined: false },
            { text: raw.titleSplit[1], outlined: true },
          ]
        : [{ text: project.title, outlined: false }],
      lede: raw.lede,
      meta: raw.meta
        .map((m) => ({ label: m.label, value: text(m.value) }))
        .filter(
          (m): m is { label: string; value: string } => m.value !== undefined,
        ),
      visit: live ? { domain: domainOf(live), href: live } : undefined,
      screens: [],
      sections: toSections(raw.sections),
      next: nextCase
        ? {
            kind: "project",
            title: nextCase.title,
            titleDot: nextCase.titleDot,
            href: nextCase.primaryHref,
            index: nextCase.index,
            total: nextCase.total,
          }
        : {
            kind: "allWork",
            href: `/${locale}/work`,
            from: withCase.length + 1,
            total: cards.length,
          },
      ...fallbackContent,
    };
  }

  async getAbout(locale: Locale): Promise<AboutPageDTO> {
    const xp = toExperience(locale);
    const years = xp.map((e) => Number(e.start.slice(0, 4)));
    return {
      about: toAbout(locale),
      experience: xp,
      experienceSince: years.length ? Math.min(...years) : undefined,
      skills: toSkills(),
      skillsIntro,
      ...fallbackContent,
    };
  }

  async getBlogIndex(
    locale: Locale,
    options?: { category?: string },
  ): Promise<BlogIndexDTO> {
    const cards = newestFirst.map((p) => toPostCard(locale, p));
    const active = categories.some((c) => c.slug === options?.category)
      ? options?.category
      : undefined;
    const filtered = active
      ? cards.filter((c) => c.categories.some((x) => x.slug === active))
      : cards;
    const cats: CategoryDTO[] = categories.map((c) => ({
      slug: c.slug,
      title: c.title,
      tone: c.coverTone,
      count: cards.filter((p) => p.categories.some((x) => x.slug === c.slug))
        .length,
    }));
    const years = cards.map((c) => Number(c.date.slice(0, 4)));
    return {
      total: cards.length,
      sinceYear: years.length ? Math.min(...years) : undefined,
      categories: cats,
      activeCategory: active,
      featured: filtered[0],
      posts: filtered.slice(1),
    };
  }

  async getPost(slug: string, locale: Locale): Promise<PostDTO | null> {
    const raw = posts.find((p) => p.slug === slug);
    if (!raw) return null;
    const card = toPostCard(locale, raw);
    const body = raw.body ?? [];
    const headings = body.filter((b) => b._type === "heading");
    const toc: TocEntry[] = headings.map((h, i) => ({
      id: h.id,
      text: h.text,
      number: pad2(i + 1),
    }));
    const others = newestFirst.filter((p) => p.slug !== slug);
    const sameCategory = others.filter(
      (p) => p.categories[0] === raw.categories[0],
    );
    const rest = others.filter((p) => p.categories[0] !== raw.categories[0]);
    return {
      ...card,
      body,
      toc,
      author: toSite().author,
      related: [...sameCategory, ...rest]
        .slice(0, 3)
        .map((p) => toPostCard(locale, p)),
      ...fallbackContent,
    };
  }

  async getRoutes() {
    return {
      caseStudies: caseStudies.map((c) => c.project),
      posts: posts.map((p) => p.slug),
    };
  }
}
