import type {
  BodyBlock,
  EditAttrs,
  ImageDTO,
  Locale,
  Paragraph,
  ProjectTone,
  TextRun,
  Tone,
  WorkMode,
} from "@portfolio/contracts";

/**
 * Source records: content as a CMS adapter hands it over — already resolved
 * to one language, but not yet shaped for the frontend. `createContentService`
 * turns records into DTOs, so every adapter (fixtures, Sanity, …) shares the
 * same business rules: placeholder dropping, numbering, counts, ordering.
 *
 * `null` / `[bracketed]` values are placeholders and never reach a DTO.
 */

interface Editable {
  /** Visual-editing attributes, passed through to the DTO untouched. */
  editAttrs?: EditAttrs;
}

/** For documents translated as a whole (post, case study, about). */
export interface Localized {
  /** The language actually served (the requested one, or its fallback). */
  contentLocale: Locale;
  /** Languages this document has a translation in. */
  availableLocales: Locale[];
}

export interface SiteRecord extends Editable {
  name: string;
  /** "DB" — the author avatar. */
  initials: string;
  tagline: string;
  email: string;
  socials: { label: string; url: string }[];
  cvUrl?: string | null;
  location: string;
  timezone: string;
  yearsExperienceLabel: string;
  heroMeta: string[];
  currentRole: { title: string; company: string };
  marqueeItems: { text: string; outlined?: boolean }[];
  /** One line on the post bio card. */
  authorBio?: string | null;
}

export interface FactRecord {
  label: string;
  value: string;
  /** Project slugs: the value renders as links to their case studies. */
  links?: string[];
  /** Shown on /about but not in the home teaser ("Based in"). */
  aboutPageOnly?: boolean;
}

export interface AboutRecord extends Editable, Localized {
  /** Runs with `highlight` render in --primary. */
  statement: TextRun[];
  bio: Paragraph[];
  teaserParagraphs: Paragraph[];
  lede: string;
  portrait?: ImageDTO;
  facts: FactRecord[];
  /** Intro line of the skills band. */
  skillsIntro?: string | null;
}

export interface ExperienceRecord extends Editable {
  order: number;
  role: string;
  company: string;
  location: string | null;
  workMode: WorkMode | null;
  /** ISO month or date: "2025-11". */
  start: string;
  /** null = current role ("Present" + NOW badge). */
  end: string | null;
  summary?: string | null;
  bullets?: (string | null)[];
}

export interface SkillGroupRecord extends Editable {
  order: number;
  title: string;
  items: string[];
}

export interface ProjectRecord extends Editable {
  order: number;
  slug: string;
  /** "Passe." — a trailing period renders as the spark dot. */
  title: string;
  kind: string;
  /** Hero "New work —" line: "a travel journal". */
  teaser?: string | null;
  coverTag?: string | null;
  status?: { label: string; isNew: boolean } | null;
  summary: string;
  tech: string[];
  links: {
    live?: string | null;
    github?: string | null;
    appStoreId?: string | null;
  };
  coverTone: ProjectTone;
  cover?: ImageDTO;
  featured: boolean;
  /** Slug of the project's case study, when it has one. */
  caseStudy?: string | null;
}

type Box = {
  eyebrow: string;
  title: string;
  sub: string | null;
  isCore?: boolean;
};
type Item = { title: string; text?: string | null };

export type SectionRecord = Editable &
  (
    | {
        type: "textBlock";
        label: string;
        heading: string | null;
        /** Paragraphs as plain strings, or as rich runs. */
        body: (string | Paragraph | null)[];
      }
    | {
        type: "stepsGrid";
        label: string;
        heading: string | null;
        steps: Item[];
      }
    | {
        type: "featureGrid";
        label: string;
        heading: string | null;
        features: Item[];
      }
    | {
        type: "plans";
        label: string;
        heading: string | null;
        plans: {
          name: string;
          price: string;
          period: string;
          features: string[];
        }[];
        note: string | null;
      }
    | {
        type: "architecture";
        label: string;
        heading: string | null;
        core: Box[];
        sub: Box[];
        notes: (string | Paragraph | null)[];
      }
    | {
        type: "quote";
        label: string;
        text: string | null;
        attribution: string | null;
      }
  );

export interface CaseStudyRecord extends Editable, Localized {
  /** Slug of the project this case study belongs to. */
  project: string;
  /** ["Ellies", "Note"]: solid + outlined halves of the title. */
  titleSplit?: [string, string] | null;
  lede: string;
  meta: { label: string; value: string | null }[];
  screens?: ImageDTO[];
  sections: SectionRecord[];
}

export interface CategoryRecord {
  order: number;
  slug: string;
  title: string;
  coverTone: Tone;
}

export interface PostRecord extends Editable, Partial<Localized> {
  slug: string;
  title: string;
  /** Category slugs; the first is the primary one. */
  categories: string[];
  /** ISO date: "2026-08-30". */
  publishedAt: string;
  readingMinutes: number;
  /** Ghost word on the cover while there is no image. */
  coverWord: string;
  excerpt: string;
  cover?: ImageDTO;
  /** Design layout sample — development content only. */
  sample?: boolean;
  /** Only loaded for the post page. */
  body?: BodyBlock[];
}

/**
 * What a CMS adapter implements. Every method returns records for one
 * locale, with field-level fallback already applied. Lists hold one record
 * per document (one per translation group for translated documents).
 */
export interface RecordSource {
  site(locale: Locale): Promise<SiteRecord>;
  about(locale: Locale): Promise<AboutRecord>;
  experience(locale: Locale): Promise<ExperienceRecord[]>;
  skillGroups(locale: Locale): Promise<SkillGroupRecord[]>;
  projects(locale: Locale): Promise<ProjectRecord[]>;
  caseStudy(
    projectSlug: string,
    locale: Locale,
  ): Promise<CaseStudyRecord | null>;
  categories(locale: Locale): Promise<CategoryRecord[]>;
  /** All posts without bodies. */
  posts(locale: Locale): Promise<PostRecord[]>;
  /** One post with its body. */
  post(slug: string, locale: Locale): Promise<(PostRecord & Localized) | null>;
  routes(): Promise<{ caseStudies: string[]; posts: string[] }>;
}

type Unlocalized<T> = Omit<T, keyof Localized>;

/** All content in the default locale, as authored (seed, fixtures). */
export interface ContentSet {
  site: SiteRecord;
  about: Unlocalized<AboutRecord>;
  experience: readonly ExperienceRecord[];
  skillGroups: readonly SkillGroupRecord[];
  projects: readonly ProjectRecord[];
  caseStudies: readonly Unlocalized<CaseStudyRecord>[];
  categories: readonly CategoryRecord[];
  posts: readonly PostRecord[];
}

/** Natural key of an experience entry (it has no slug). */
export const experienceKey = (e: Pick<ExperienceRecord, "company" | "start">) =>
  `${e.company}|${e.start}`;

/**
 * One locale's translation of a `ContentSet`, mirroring how Sanity stores it:
 *
 * - Field-level (site, projects, experience, skill groups, categories):
 *   only the translatable text, per record. A missing or empty value falls
 *   back to the default locale, field by field.
 * - Document-level (about, case studies, posts): its presence means the
 *   document exists in this language. Its fields replace the default-locale
 *   document's; everything not given (dates, categories, links…) is shared.
 */
export interface LocaleContent {
  site?: Partial<
    Pick<
      SiteRecord,
      "tagline" | "location" | "yearsExperienceLabel" | "heroMeta" | "authorBio"
    >
  > & { currentRoleTitle?: string };
  /** By project slug. */
  projects?: Record<
    string,
    Partial<Pick<ProjectRecord, "kind" | "summary" | "teaser" | "coverTag">> & {
      statusLabel?: string;
    }
  >;
  /** By `experienceKey`. */
  experience?: Record<
    string,
    Partial<Pick<ExperienceRecord, "role" | "summary" | "bullets">>
  >;
  /** By skill group order. */
  skillGroups?: Record<number, { title?: string }>;
  /** By category slug. */
  categories?: Record<string, { title?: string }>;
  about?: Partial<Unlocalized<AboutRecord>>;
  /** By project slug. */
  caseStudies?: Record<string, Partial<Unlocalized<CaseStudyRecord>>>;
  /** By post slug. */
  posts?: Record<string, Partial<PostRecord>>;
}

/** Translations of the default-locale content, per locale. */
export type Translations = Partial<Record<Locale, LocaleContent>>;
