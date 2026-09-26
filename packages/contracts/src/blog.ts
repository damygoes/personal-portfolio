import { z } from "zod";
import {
  EditTargetSchema,
  IsoDateSchema,
  NeighbourSchema,
  PhotoSchema,
  SeoSchema,
} from "./common";
import { RichTextSchema, TocEntrySchema } from "./rich-text";

export const CategorySchema = z.object({
  slug: z.string(),
  title: z.string(),
  description: z.string().optional(),
  href: z.string(),
});
export type Category = z.infer<typeof CategorySchema>;

/** 'photoEssay' → full-bleed layout with galleries and EXIF. */
export const PostLayoutSchema = z.enum(["standard", "photoEssay"]);
export type PostLayout = z.infer<typeof PostLayoutSchema>;

export const PostCardSchema = z.object({
  id: z.string(),
  slug: z.string(),
  href: z.string(),
  title: z.string(),
  excerpt: z.string(),
  cover: PhotoSchema,
  categories: z.array(CategorySchema).min(1),
  publishedAt: IsoDateSchema,
  readingTimeMinutes: z.number().int().min(1),
  layout: PostLayoutSchema,
  editTarget: EditTargetSchema,
});
export type PostCard = z.infer<typeof PostCardSchema>;

export const PostSchema = PostCardSchema.extend({
  updatedAt: IsoDateSchema.optional(),
  body: RichTextSchema,
  toc: z.array(TocEntrySchema),
  seo: SeoSchema,
  /** Only for photoEssay: aggregated from the EXIF of every photo in the post. */
  photoSummary: z
    .object({
      photoCount: z.number().int(),
      cameras: z.array(z.string()),
      lenses: z.array(z.string()),
    })
    .optional(),
  related: z.array(PostCardSchema).max(3),
  previous: NeighbourSchema.optional(),
  next: NeighbourSchema.optional(),
});
export type Post = z.infer<typeof PostSchema>;

export const CategoryFilterItemSchema = CategorySchema.extend({
  postCount: z.number().int(),
  active: z.boolean(),
});

export const PaginationSchema = z.object({
  page: z.number().int().min(1),
  totalPages: z.number().int().min(1),
  previousHref: z.string().optional(),
  nextHref: z.string().optional(),
});

/** /[locale]/blog and /[locale]/blog/category/[slug] */
export const BlogIndexSchema = z.object({
  heading: z.string(),
  intro: z.string().optional(),
  activeCategory: CategorySchema.optional(),
  categories: z.array(CategoryFilterItemSchema),
  posts: z.array(PostCardSchema),
  pagination: PaginationSchema,
  seo: SeoSchema,
});
export type BlogIndex = z.infer<typeof BlogIndexSchema>;
export type CategoryFilterItem = z.infer<typeof CategoryFilterItemSchema>;
export type Pagination = z.infer<typeof PaginationSchema>;
