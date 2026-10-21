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
  Paragraph,
  PostCardDTO,
  PostDTO,
  ProjectCardDTO,
  SiteSettingsDTO,
  SkillGroupDTO,
  TextRun,
  TocEntry,
  WorkPageDTO,
} from "@portfolio/contracts";
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
import type {
  AboutRecord,
  CategoryRecord,
  ExperienceRecord,
  PostRecord,
  ProjectRecord,
  RecordSource,
  SectionRecord,
  SiteRecord,
  SkillGroupRecord,
} from "./records";

/**
 * Records → DTOs. Every content rule lives here, so all adapters render the
 * same site from the same content.
 */

const byOrder = <T extends { order: number }>(items: readonly T[]) =>
  [...items].sort((a, b) => a.order - b.order);

const domainOf = (url: string) => new URL(url).hostname.replace(/^www\./, "");

/** Section headings always end in a spark dot, so the stored period is dropped. */
const heading = (value: string | null) => {
  const h = text(value);
  return h ? splitTitleDot(h).title : undefined;
};

/** Plain strings become one-run paragraphs; placeholders are dropped. */
function paragraphs(
  values: readonly (string | Paragraph | null)[],
): Paragraph[] {
  return compact(values).map((v) =>
    typeof v === "string" ? [{ text: v }] : v,
  );
}

function projectCards(
  projects: readonly ProjectRecord[],
  locale: Locale,
): ProjectCardDTO[] {
  const ordered = byOrder(projects);
  return ordered.map((p, i) => {
    const { title, titleDot } = splitTitleDot(p.title);
    const hasCaseStudy = Boolean(p.caseStudy);
    const live = text(p.links.live);
    return {
      index: i + 1,
      total: ordered.length,
      slug: p.slug,
      title,
      titleDot,
      kind: p.kind,
      summary: p.summary,
      teaser: text(p.teaser),
      tech: p.tech,
      status: p.status ?? undefined,
      tone: p.coverTone,
      coverTag: text(p.coverTag),
      cover: p.cover,
      ghost: pad2(i + 1),
      primaryHref: hasCaseStudy
        ? `/${locale}/work/${p.slug}`
        : (text(p.links.github) ?? live ?? `/${locale}/work`),
      externalLink:
        hasCaseStudy && live
          ? { label: domainOf(live), href: live, external: true }
          : undefined,
      hasCaseStudy,
      featured: p.featured,
      editAttrs: p.editAttrs,
    };
  });
}

function toSection(raw: SectionRecord, number: string): CaseSectionDTO | null {
  const base = { label: raw.label, number, editAttrs: raw.editAttrs };
  switch (raw.type) {
    case "textBlock": {
      const body = paragraphs(raw.body);
      const h = heading(raw.heading);
      return h || body.length
        ? { type: "textBlock", ...base, heading: h, body }
        : null;
    }
    case "stepsGrid":
    case "featureGrid": {
      const items = (raw.type === "stepsGrid" ? raw.steps : raw.features).map(
        (i) => ({ title: i.title, text: text(i.text) }),
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
            notes: paragraphs(raw.notes),
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

function toSections(raw: readonly SectionRecord[]): CaseSectionDTO[] {
  const kept = raw
    .map((section) => toSection(section, ""))
    .filter((s): s is CaseSectionDTO => s !== null);
  return numberItems(kept);
}

function toAbout(
  about: AboutRecord,
  projects: readonly ProjectRecord[],
  locale: Locale,
): AboutDTO {
  const facts: FactDTO[] = about.facts.map((f) => {
    const linked = (f.links ?? [])
      .map((slug) => projects.find((p) => p.slug === slug))
      .filter((p): p is ProjectRecord => Boolean(p));
    const value: TextRun[] = linked.length
      ? linked.flatMap((p, i) => [
          ...(i > 0 ? [{ text: " & " }] : []),
          { text: p.title, href: `/${locale}/work/${p.slug}` },
        ])
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
    editAttrs: about.editAttrs,
  };
}

function toExperience(
  experience: readonly ExperienceRecord[],
  locale: Locale,
): ExperienceDTO[] {
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
    editAttrs: e.editAttrs,
  }));
}

function toSkills(groups: readonly SkillGroupRecord[]): SkillGroupDTO[] {
  return byOrder(groups).map((g) => ({
    title: g.title,
    items: g.items,
    count: `(${pad2(g.items.length)})`,
    editAttrs: g.editAttrs,
  }));
}

const newestFirst = (posts: readonly PostRecord[]) =>
  [...posts].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));

function postCard(
  post: PostRecord,
  categories: readonly CategoryRecord[],
  locale: Locale,
): PostCardDTO {
  const cats = post.categories
    .map((slug) => categories.find((c) => c.slug === slug))
    .filter((c): c is CategoryRecord => Boolean(c));
  const primary = cats[0];
  if (!primary) throw new Error(`Post "${post.slug}" has no known category`);
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
    cover: post.cover,
    ghost: post.coverWord,
    sample: post.sample,
    editAttrs: post.editAttrs,
  };
}

function toSite(site: SiteRecord): SiteSettingsDTO {
  return {
    name: site.name,
    tagline: site.tagline,
    email: site.email,
    socials: site.socials.map((s) => ({
      label: s.label,
      href: s.url,
      external: true,
    })),
    cvUrl: text(site.cvUrl),
    location: site.location,
    timezone: site.timezone,
    yearsExperienceLabel: site.yearsExperienceLabel,
    heroMeta: compact(site.heroMeta),
    currentRole: site.currentRole,
    marqueeItems: site.marqueeItems.map((m) => ({
      text: m.text,
      outlined: Boolean(m.outlined),
    })),
    author: {
      name: site.name,
      initials: site.initials,
      role: site.currentRole.title,
      bio: text(site.authorBio),
    },
    editAttrs: site.editAttrs,
  };
}

/** A `ContentService` over any record source. */
export function createContentService(source: RecordSource): ContentService {
  return {
    async getSiteSettings(locale) {
      return toSite(await source.site(locale));
    },

    async getHome(locale): Promise<HomeDTO> {
      const [projects, about, posts, categories] = await Promise.all([
        source.projects(locale),
        source.about(locale),
        source.posts(locale),
        source.categories(locale),
      ]);
      const cards = projectCards(projects, locale);
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
        about: toAbout(about, projects, locale),
        latestPosts: newestFirst(posts)
          .slice(0, 3)
          .map((p) => postCard(p, categories, locale)),
      };
    },

    async getWorkPage(locale): Promise<WorkPageDTO> {
      const cards = projectCards(await source.projects(locale), locale);
      return {
        projectCount: cards.length,
        caseStudyCount: cards.filter((c) => c.hasCaseStudy).length,
        featured: cards.filter((c) => c.featured),
        others: cards.filter((c) => !c.featured),
      };
    },

    async getCaseStudy(slug, locale): Promise<CaseStudyDTO | null> {
      const [raw, projects] = await Promise.all([
        source.caseStudy(slug, locale),
        source.projects(locale),
      ]);
      if (!raw) return null;
      const cards = projectCards(projects, locale);
      const project = cards.find((c) => c.slug === slug);
      if (!project) return null;
      const withCase = cards.filter((c) => c.hasCaseStudy);
      const position = withCase.findIndex((c) => c.slug === slug);
      const nextCase = withCase[position + 1];
      const live = text(projects.find((p) => p.slug === slug)?.links.live);
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
        screens: (raw.screens ?? []).slice(0, 3),
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
        editAttrs: raw.editAttrs,
        contentLocale: raw.contentLocale,
        availableLocales: raw.availableLocales,
      };
    },

    async getAbout(locale): Promise<AboutPageDTO> {
      const [about, projects, experience, groups] = await Promise.all([
        source.about(locale),
        source.projects(locale),
        source.experience(locale),
        source.skillGroups(locale),
      ]);
      const xp = toExperience(experience, locale);
      const years = xp.map((e) => Number(e.start.slice(0, 4)));
      return {
        about: toAbout(about, projects, locale),
        experience: xp,
        experienceSince: years.length ? Math.min(...years) : undefined,
        skills: toSkills(groups),
        skillsIntro: text(about.skillsIntro),
        contentLocale: about.contentLocale,
        availableLocales: about.availableLocales,
      };
    },

    async getBlogIndex(locale, options): Promise<BlogIndexDTO> {
      const [posts, categories] = await Promise.all([
        source.posts(locale),
        source.categories(locale),
      ]);
      const ordered = byOrder(categories);
      const cards = newestFirst(posts).map((p) =>
        postCard(p, categories, locale),
      );
      const active = ordered.some((c) => c.slug === options?.category)
        ? options?.category
        : undefined;
      const filtered = active
        ? cards.filter((c) => c.categories.some((x) => x.slug === active))
        : cards;
      const cats: CategoryDTO[] = ordered.map((c) => ({
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
    },

    async getPost(slug, locale): Promise<PostDTO | null> {
      const [raw, posts, categories, site] = await Promise.all([
        source.post(slug, locale),
        source.posts(locale),
        source.categories(locale),
        source.site(locale),
      ]);
      if (!raw) return null;
      const body = raw.body ?? [];
      const toc: TocEntry[] = body
        .filter((b) => b._type === "heading")
        .map((h, i) => ({ id: h.id, text: h.text, number: pad2(i + 1) }));
      const primary = raw.categories[0];
      const others = newestFirst(posts).filter((p) => p.slug !== slug);
      const related = [
        ...others.filter((p) => p.categories[0] === primary),
        ...others.filter((p) => p.categories[0] !== primary),
      ];
      return {
        ...postCard(raw, categories, locale),
        body,
        toc,
        author: toSite(site).author,
        related: related
          .slice(0, 3)
          .map((p) => postCard(p, categories, locale)),
        contentLocale: raw.contentLocale,
        availableLocales: raw.availableLocales,
      };
    },

    getRoutes: () => source.routes(),
  };
}
