import { z } from "zod";
import {
  EditTargetSchema,
  ImageSchema,
  NeighbourSchema,
  PeriodSchema,
  SeoSchema,
} from "./common";
import { RichTextSchema, TocEntrySchema } from "./rich-text";

export const ProjectStatusSchema = z.enum([
  "live",
  "inDevelopment",
  "archived",
]);

export const ProjectLinkSchema = z.object({
  kind: z.enum(["live", "repository", "appStore", "playStore", "other"]),
  href: z.string(),
});
export type ProjectLink = z.infer<typeof ProjectLinkSchema>;

/** Card on the homepage "Selected Work" section. */
export const ProjectCardSchema = z.object({
  id: z.string(),
  /** "01", "02" … — derived from position */
  index: z.string(),
  title: z.string(),
  summary: z.string(),
  cover: ImageSchema,
  tech: z.array(z.string()),
  /** Internal case-study URL, e.g. "/de/work/elliesnote" */
  href: z.string(),
  editTarget: EditTargetSchema,
});
export type ProjectCard = z.infer<typeof ProjectCardSchema>;

/** Case-study page. */
export const ProjectSchema = ProjectCardSchema.omit({ index: true }).extend({
  slug: z.string(),
  role: z.string(),
  period: PeriodSchema,
  status: ProjectStatusSchema,
  links: z.array(ProjectLinkSchema),
  body: RichTextSchema,
  toc: z.array(TocEntrySchema),
  seo: SeoSchema,
  previous: NeighbourSchema.optional(),
  next: NeighbourSchema.optional(),
});
export type Project = z.infer<typeof ProjectSchema>;
