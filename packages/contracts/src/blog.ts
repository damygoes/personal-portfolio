import { z } from "zod";
import {
  EditAttrsSchema,
  ImageSchema,
  LocalizedContentFields,
  IsoDateSchema,
  ToneSchema,
} from "./common";
import { BodyBlockSchema, TocEntrySchema } from "./rich-text";
import { AuthorSchema } from "./site";

export const CategoryRefSchema = z.object({
  slug: z.string(),
  title: z.string(),
});
export type CategoryRefDTO = z.infer<typeof CategoryRefSchema>;

export const CategorySchema = CategoryRefSchema.extend({
  tone: ToneSchema,
  /** Number of posts in this category. */
  count: z.number().int(),
});
export type CategoryDTO = z.infer<typeof CategorySchema>;

export const PostCardSchema = z.object({
  slug: z.string(),
  href: z.string(),
  title: z.string(),
  excerpt: z.string(),
  date: IsoDateSchema,
  /** EN "Aug 30, 2026" · DE "30. Aug. 2026" */
  dateLabel: z.string(),
  readingMinutes: z.number().int(),
  /** The first category: shown on cards and sets the cover tone. */
  category: CategoryRefSchema,
  categories: z.array(CategoryRefSchema).min(1),
  tone: ToneSchema,
  cover: ImageSchema.optional(),
  /** Ghost word drawn on the cover while there is no image. */
  ghost: z.string(),
  /** Layout sample from the design — never in production. */
  sample: z.boolean().optional(),
  editAttrs: EditAttrsSchema,
});
export type PostCardDTO = z.infer<typeof PostCardSchema>;

export const PostSchema = PostCardSchema.extend({
  body: z.array(BodyBlockSchema),
  toc: z.array(TocEntrySchema),
  author: AuthorSchema,
  /** Same category first, then latest; max 3. */
  related: z.array(PostCardSchema).max(3),
  ...LocalizedContentFields,
});
export type PostDTO = z.infer<typeof PostSchema>;

export const BlogIndexSchema = z.object({
  /** Posts across all categories. */
  total: z.number().int(),
  /** Year of the oldest post: "Since 2026". */
  sinceYear: z.number().int().optional(),
  categories: z.array(CategorySchema),
  /** Slug from `?category=`; undefined = All. */
  activeCategory: z.string().optional(),
  /** Newest post in the current filter. */
  featured: PostCardSchema.optional(),
  posts: z.array(PostCardSchema),
});
export type BlogIndexDTO = z.infer<typeof BlogIndexSchema>;
