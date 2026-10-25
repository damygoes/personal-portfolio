import { DocumentTextIcon } from "@sanity/icons/DocumentText";
import { defineArrayMember, defineField, defineType } from "sanity";
import { caseSectionTypes } from "../blocks/case-sections";
import { languageField } from "../shared";

/** A project's case study, translated as a whole document. */
export const caseStudy = defineType({
  name: "caseStudy",
  title: "Case study",
  type: "document",
  icon: DocumentTextIcon,
  fields: [
    languageField,
    defineField({
      name: "project",
      type: "reference",
      to: [{ type: "project" }],
      description: "The case study's URL is the project's slug.",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "titleSplit",
      title: "Title split",
      type: "object",
      description: 'Optional two-tone title: "Ellies" solid + "Note" outlined.',
      fields: [
        defineField({ name: "solid", type: "string" }),
        defineField({ name: "outlined", type: "string" }),
      ],
    }),
    defineField({
      name: "lede",
      type: "text",
      rows: 3,
      validation: (r) => r.required(),
    }),
    defineField({
      name: "meta",
      type: "array",
      description: "Role, platforms, timeline, stack… Empty values are hidden.",
      of: [
        defineArrayMember({
          name: "metaItem",
          type: "object",
          fields: [
            defineField({
              name: "label",
              type: "string",
              validation: (r) => r.required(),
            }),
            defineField({ name: "value", type: "string" }),
          ],
          preview: { select: { title: "label", subtitle: "value" } },
        }),
      ],
    }),
    defineField({
      name: "sections",
      type: "array",
      of: caseSectionTypes.map((type) => defineArrayMember({ type })),
    }),
  ],
  preview: {
    select: { title: "project.title", language: "language" },
    prepare: ({ title, language }) => ({
      title: title ?? "Case study",
      subtitle: language ? String(language).toUpperCase() : undefined,
    }),
  },
});
