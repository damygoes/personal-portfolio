import { BillIcon } from "@sanity/icons/Bill";
import { CommentIcon } from "@sanity/icons/Comment";
import { ComponentIcon } from "@sanity/icons/Component";
import { StackIcon } from "@sanity/icons/Stack";
import { TextIcon } from "@sanity/icons/Text";
import { ThLargeIcon } from "@sanity/icons/ThLarge";
import { defineArrayMember, defineField, defineType } from "sanity";
import { imageField, stringList } from "../shared";

/**
 * Case-study section blocks. Each has a short `label` ("Overview") shown in the
 * section rail; numbers ("01") are computed after empty sections are dropped.
 * A section with no content is skipped on the site, so placeholders can stay empty.
 */

const label = defineField({
  name: "label",
  type: "string",
  description: 'Section rail label, e.g. "Overview".',
  validation: (rule) => rule.required(),
});

const heading = defineField({
  name: "heading",
  type: "string",
  description: "A trailing period is drawn as the spark dot.",
});

const withLabelPreview = {
  select: { title: "label", subtitle: "heading" },
};

export const textBlock = defineType({
  name: "textBlock",
  title: "Text",
  type: "object",
  icon: TextIcon,
  fields: [label, heading, defineField({ name: "body", type: "richText" })],
  preview: withLabelPreview,
});

const gridItem = (name: string, textRequired: boolean) =>
  defineArrayMember({
    name,
    type: "object",
    fields: [
      defineField({
        name: "title",
        type: "string",
        validation: (r) => r.required(),
      }),
      defineField({
        name: "text",
        type: "text",
        rows: 3,
        validation: (r) => (textRequired ? r.required() : r),
      }),
      imageField("image"),
    ],
  });

export const stepsGrid = defineType({
  name: "stepsGrid",
  title: "Steps",
  type: "object",
  icon: ThLargeIcon,
  fields: [
    label,
    heading,
    defineField({
      name: "steps",
      type: "array",
      of: [gridItem("step", false)],
    }),
  ],
  preview: withLabelPreview,
});

export const featureGrid = defineType({
  name: "featureGrid",
  title: "Features",
  type: "object",
  icon: ComponentIcon,
  fields: [
    label,
    heading,
    defineField({
      name: "features",
      type: "array",
      of: [gridItem("feature", false)],
    }),
  ],
  preview: withLabelPreview,
});

export const plans = defineType({
  name: "plans",
  title: "Plans",
  type: "object",
  icon: BillIcon,
  fields: [
    label,
    heading,
    defineField({
      name: "plans",
      type: "array",
      of: [
        defineArrayMember({
          name: "plan",
          type: "object",
          fields: [
            defineField({
              name: "name",
              type: "string",
              validation: (r) => r.required(),
            }),
            defineField({
              name: "price",
              type: "string",
              validation: (r) => r.required(),
            }),
            defineField({ name: "period", type: "string" }),
            stringList("features"),
          ],
          preview: { select: { title: "name", subtitle: "price" } },
        }),
      ],
    }),
    defineField({ name: "note", type: "string" }),
  ],
  preview: withLabelPreview,
});

const box = (name: string, withCore: boolean) =>
  defineArrayMember({
    name,
    type: "object",
    fields: [
      defineField({ name: "eyebrow", type: "string" }),
      defineField({
        name: "title",
        type: "string",
        validation: (r) => r.required(),
      }),
      defineField({ name: "sub", type: "string" }),
      ...(withCore ? [defineField({ name: "isCore", type: "boolean" })] : []),
    ],
    preview: { select: { title: "title", subtitle: "eyebrow" } },
  });

export const architecture = defineType({
  name: "architecture",
  title: "Architecture",
  type: "object",
  icon: StackIcon,
  fields: [
    label,
    heading,
    defineField({
      name: "core",
      type: "array",
      of: [box("coreBox", true)],
      validation: (r) => r.max(3),
    }),
    defineField({
      name: "sub",
      type: "array",
      of: [box("subBox", false)],
      validation: (r) => r.max(3),
    }),
    defineField({ name: "notes", type: "richText" }),
  ],
  preview: withLabelPreview,
});

export const quote = defineType({
  name: "quote",
  title: "Quote",
  type: "object",
  icon: CommentIcon,
  fields: [
    label,
    defineField({ name: "text", type: "text", rows: 3 }),
    defineField({ name: "attribution", type: "string" }),
  ],
  preview: { select: { title: "label", subtitle: "text" } },
});

export const caseSectionTypes = [
  "textBlock",
  "stepsGrid",
  "featureGrid",
  "plans",
  "architecture",
  "quote",
];
