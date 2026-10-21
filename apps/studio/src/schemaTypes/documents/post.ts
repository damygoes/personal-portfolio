import { DocumentTextIcon } from "@sanity/icons/DocumentText";
import { defineArrayMember, defineField, defineType } from "sanity";
import { imageField, languageField, slugField } from "../shared";

/** A blog post, translated as a whole document. Categories only — no free tags. */
export const post = defineType({
  name: "post",
  title: "Post",
  type: "document",
  icon: DocumentTextIcon,
  fields: [
    languageField,
    defineField({
      name: "title",
      type: "string",
      validation: (r) => r.required(),
    }),
    slugField(),
    defineField({
      name: "excerpt",
      type: "text",
      rows: 3,
      validation: (r) => r.required(),
    }),
    defineField({
      name: "publishedAt",
      type: "date",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "categories",
      type: "array",
      description:
        "The first category is the primary one (card label and cover colour).",
      of: [
        defineArrayMember({ type: "reference", to: [{ type: "category" }] }),
      ],
      validation: (r) => r.required().min(1).unique(),
    }),
    imageField("cover"),
    defineField({
      name: "coverWord",
      type: "string",
      description: "Ghost word on the cover while there is no image.",
      validation: (r) => r.required().max(12),
    }),
    defineField({ name: "body", type: "postBody" }),
    defineField({
      name: "sample",
      type: "boolean",
      description: "Design layout sample — development dataset only.",
      readOnly: true,
      hidden: ({ value }) => !value,
    }),
  ],
  orderings: [
    {
      title: "Newest",
      name: "newest",
      by: [{ field: "publishedAt", direction: "desc" }],
    },
  ],
  preview: {
    select: {
      title: "title",
      date: "publishedAt",
      language: "language",
      media: "cover",
    },
    prepare: ({ title, date, language, media }) => ({
      title,
      subtitle: [language ? String(language).toUpperCase() : null, date]
        .filter(Boolean)
        .join(" · "),
      media,
    }),
  },
});
