import { z } from "zod";
import {
  EditTargetSchema,
  ImageSchema,
  LinkSchema,
  PeriodSchema,
  SeoSchema,
  SocialLinkSchema,
} from "./common";
import { RichTextSchema } from "./rich-text";
import { ProjectCardSchema } from "./project";
import { SectionIdSchema } from "./site";

export const HeroSchema = z.object({
  name: z.string(),
  /** Rendered as "Based in {location} · {role} · {years}+ yrs experience" via messages. */
  facts: z.object({
    location: z.string(),
    role: z.string(),
    /** Computed from careerStartDate at build/revalidate time. */
    yearsOfExperience: z.number().int(),
  }),
  intro: z.string(),
  primaryCta: LinkSchema,
  editTarget: EditTargetSchema,
});
export type Hero = z.infer<typeof HeroSchema>;

const SectionBase = z.object({
  id: SectionIdSchema,
  /** "01" … — derived from order among *enabled* sections */
  index: z.string(),
  heading: z.string(),
  /** Points at the section object → overlay for the `enabled` toggle etc. */
  editTarget: EditTargetSchema,
});

export const AboutSectionSchema = SectionBase.extend({
  portrait: ImageSchema,
  body: RichTextSchema,
});

export const ExperienceItemSchema = z.object({
  id: z.string(),
  role: z.string(),
  company: z.object({ name: z.string(), url: z.string().optional() }),
  location: z.string(),
  workMode: z.enum(["onsite", "hybrid", "remote"]),
  period: PeriodSchema,
  summary: z.string(),
  highlights: z.array(z.string()),
  editTarget: EditTargetSchema,
});
export type ExperienceItem = z.infer<typeof ExperienceItemSchema>;

export const ExperienceSectionSchema = SectionBase.extend({
  /** Sorted newest first by the content layer. */
  items: z.array(ExperienceItemSchema),
});

export const WorkSectionSchema = SectionBase.extend({
  intro: z.string().optional(),
  projects: z.array(ProjectCardSchema),
});

export const SkillGroupSchema = z.object({
  title: z.string(),
  skills: z.array(z.string()),
  editTarget: EditTargetSchema,
});

export const SkillsSectionSchema = SectionBase.extend({
  /** Derived from `groups` (single source of truth); split into rows for the marquee. */
  marqueeRows: z.array(z.array(z.string())),
  groups: z.array(SkillGroupSchema),
});

export const ContactSectionSchema = SectionBase.extend({
  body: z.string(),
  cta: z.object({ label: z.string(), email: z.string() }),
  socials: z.array(SocialLinkSchema),
});

/** Fixed order. A missing section = disabled in the CMS. */
export const HomepageSchema = z.object({
  seo: SeoSchema,
  hero: HeroSchema,
  about: AboutSectionSchema.optional(),
  experience: ExperienceSectionSchema.optional(),
  work: WorkSectionSchema.optional(),
  skills: SkillsSectionSchema.optional(),
  contact: ContactSectionSchema.optional(),
});

export type AboutSection = z.infer<typeof AboutSectionSchema>;
export type ExperienceSection = z.infer<typeof ExperienceSectionSchema>;
export type WorkSection = z.infer<typeof WorkSectionSchema>;
export type SkillGroup = z.infer<typeof SkillGroupSchema>;
export type SkillsSection = z.infer<typeof SkillsSectionSchema>;
export type ContactSection = z.infer<typeof ContactSectionSchema>;
export type Homepage = z.infer<typeof HomepageSchema>;
