import { z } from "zod";
import {
  EditTargetSchema,
  ImageSchema,
  IsoDateSchema,
  ParagraphSchema,
  TextRunSchema,
} from "./common";

export const FactSchema = z.object({
  label: z.string(),
  /** Runs may link ("Passe." → its case study). */
  value: z.array(TextRunSchema).min(1),
  /** The home teaser shows only these (no "Based in"). */
  onHome: z.boolean(),
});
export type FactDTO = z.infer<typeof FactSchema>;

export const AboutSchema = z.object({
  /** Highlighted runs render in --primary; a spark dot always follows. */
  statement: z.array(TextRunSchema).min(1),
  bio: z.array(ParagraphSchema),
  teaserParagraphs: z.array(ParagraphSchema),
  lede: z.string(),
  portrait: ImageSchema.optional(),
  facts: z.array(FactSchema),
  editTarget: EditTargetSchema,
});
export type AboutDTO = z.infer<typeof AboutSchema>;

export const WorkModeSchema = z.enum(["onsite", "hybrid", "remote"]);
export type WorkMode = z.infer<typeof WorkModeSchema>;

export const ExperienceSchema = z.object({
  start: IsoDateSchema,
  end: IsoDateSchema.nullable(),
  /** "Nov 2025 — Present" */
  when: z.string(),
  isCurrent: z.boolean(),
  role: z.string(),
  company: z.string(),
  location: z.string().optional(),
  workMode: WorkModeSchema.optional(),
  summary: z.string().optional(),
  bullets: z.array(z.string()),
  editTarget: EditTargetSchema,
});
export type ExperienceDTO = z.infer<typeof ExperienceSchema>;

export const SkillGroupSchema = z.object({
  title: z.string(),
  items: z.array(z.string()),
  /** "(05)" */
  count: z.string(),
  editTarget: EditTargetSchema,
});
export type SkillGroupDTO = z.infer<typeof SkillGroupSchema>;
