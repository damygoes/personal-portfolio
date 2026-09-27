import { z } from "zod";
import { AboutSchema, ExperienceSchema, SkillGroupSchema } from "./about";
import { PostCardSchema } from "./blog";
import { ProjectCardSchema } from "./project";

export const HomeSchema = z.object({
  /** Latest featured project, for the hero's "New work —" link. */
  newWork: z.object({ label: z.string(), href: z.string() }).optional(),
  featured: z.array(ProjectCardSchema),
  /** Non-featured projects, named in the "+ 3 more projects" row. */
  more: z.array(ProjectCardSchema),
  about: AboutSchema,
  latestPosts: z.array(PostCardSchema).max(3),
});
export type HomeDTO = z.infer<typeof HomeSchema>;

export const WorkPageSchema = z.object({
  projectCount: z.number().int(),
  caseStudyCount: z.number().int(),
  featured: z.array(ProjectCardSchema),
  others: z.array(ProjectCardSchema),
});
export type WorkPageDTO = z.infer<typeof WorkPageSchema>;

export const AboutPageSchema = z.object({
  about: AboutSchema,
  experience: z.array(ExperienceSchema),
  /** First year of experience: "2020 — Now". */
  experienceSince: z.number().int().optional(),
  skills: z.array(SkillGroupSchema),
  skillsIntro: z.string().optional(),
});
export type AboutPageDTO = z.infer<typeof AboutPageSchema>;
