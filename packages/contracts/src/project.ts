import { z } from "zod";
import {
  EditTargetSchema,
  ImageSchema,
  LinkSchema,
  ParagraphSchema,
} from "./common";

export const ProjectToneSchema = z.enum(["warm", "lagoon", "card"]);
export type ProjectTone = z.infer<typeof ProjectToneSchema>;

export const ProjectCardSchema = z.object({
  /** 1-based position in the project order: "01 / 05". */
  index: z.number().int(),
  total: z.number().int(),
  slug: z.string(),
  /** "Passe" — the trailing period of "Passe." is `titleDot`. */
  title: z.string(),
  titleDot: z.boolean(),
  kind: z.string(),
  summary: z.string(),
  /** Short description for the hero's "New work —" link ("a travel journal"). */
  teaser: z.string().optional(),
  tech: z.array(z.string()),
  /** The pill. Cards prefix "New ·" when `isNew`. */
  status: z.object({ label: z.string(), isNew: z.boolean() }).optional(),
  tone: ProjectToneSchema,
  /** Label in the cover's top-left corner ("Latest · iOS & web"). */
  coverTag: z.string().optional(),
  cover: ImageSchema.optional(),
  /** Zero-padded index, drawn as the ghost numeral. */
  ghost: z.string(),
  /** Case study path, or the GitHub URL when there is none. */
  primaryHref: z.string(),
  /** Secondary link on featured cards ("passe.cc ↗"). */
  externalLink: LinkSchema.optional(),
  hasCaseStudy: z.boolean(),
  featured: z.boolean(),
  editTarget: EditTargetSchema,
});
export type ProjectCardDTO = z.infer<typeof ProjectCardSchema>;

const sectionBase = {
  label: z.string(),
  /** "01" — computed after empty sections are dropped. */
  number: z.string(),
  heading: z.string().optional(),
  editTarget: EditTargetSchema,
};

const ItemSchema = z.object({
  title: z.string(),
  text: z.string().optional(),
  image: ImageSchema.optional(),
});

const ArchBoxSchema = z.object({
  eyebrow: z.string(),
  title: z.string(),
  sub: z.string().optional(),
  isCore: z.boolean().optional(),
});

export const CaseSectionSchema = z.discriminatedUnion("type", [
  z.object({
    type: z.literal("textBlock"),
    ...sectionBase,
    body: z.array(ParagraphSchema),
  }),
  z.object({
    type: z.literal("stepsGrid"),
    ...sectionBase,
    steps: z.array(ItemSchema).min(1),
  }),
  z.object({
    type: z.literal("featureGrid"),
    ...sectionBase,
    features: z.array(ItemSchema).min(1),
  }),
  z.object({
    type: z.literal("plans"),
    ...sectionBase,
    plans: z
      .array(
        z.object({
          name: z.string(),
          price: z.string(),
          period: z.string(),
          features: z.array(z.string()),
        }),
      )
      .min(1),
    note: z.string().optional(),
  }),
  z.object({
    type: z.literal("architecture"),
    ...sectionBase,
    core: z.array(ArchBoxSchema).min(1),
    sub: z.array(ArchBoxSchema),
    notes: z.array(ParagraphSchema),
  }),
  z.object({
    type: z.literal("quote"),
    ...sectionBase,
    text: z.string(),
    attribution: z.string().optional(),
  }),
]);
export type CaseSectionDTO = z.infer<typeof CaseSectionSchema>;
export type CaseSectionType = CaseSectionDTO["type"];

export const CaseStudySchema = z.object({
  project: ProjectCardSchema,
  /** "01" — position among projects with a case study. */
  caseNumber: z.string(),
  /** "ELLIES" solid + "NOTE" outlined; always followed by a spark dot. */
  titleParts: z
    .array(z.object({ text: z.string(), outlined: z.boolean() }))
    .min(1),
  lede: z.string(),
  meta: z.array(z.object({ label: z.string(), value: z.string() })),
  /** Live site for the "Visit passe.cc" link. */
  visit: z.object({ domain: z.string(), href: z.string() }).optional(),
  screens: z.array(ImageSchema).max(3),
  sections: z.array(CaseSectionSchema),
  next: z.discriminatedUnion("kind", [
    z.object({
      kind: z.literal("project"),
      title: z.string(),
      titleDot: z.boolean(),
      href: z.string(),
      index: z.number().int(),
      total: z.number().int(),
    }),
    /** Last case study: "More projects 03 — 05" → All work. */
    z.object({
      kind: z.literal("allWork"),
      href: z.string(),
      from: z.number().int(),
      total: z.number().int(),
    }),
  ]),
  editTarget: EditTargetSchema,
});
export type CaseStudyDTO = z.infer<typeof CaseStudySchema>;
