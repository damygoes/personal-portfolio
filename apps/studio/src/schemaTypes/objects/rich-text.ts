import { defineArrayMember, defineField, defineType } from "sanity";

const linkAnnotation = defineArrayMember({
  name: "link",
  type: "object",
  title: "Link",
  fields: [
    defineField({
      name: "href",
      type: "url",
      title: "URL",
      description: "Absolute URL, or a site path like /en/work/passe.",
      validation: (rule) =>
        rule
          .required()
          .uri({ allowRelative: true, scheme: ["http", "https", "mailto"] }),
    }),
  ],
});

/** Plain paragraphs: bold, italic and links. About bio, case-study text. */
export const richText = defineType({
  name: "richText",
  title: "Rich text",
  type: "array",
  of: [
    defineArrayMember({
      type: "block",
      styles: [{ title: "Normal", value: "normal" }],
      lists: [],
      marks: {
        decorators: [
          { title: "Strong", value: "strong" },
          { title: "Emphasis", value: "em" },
        ],
        annotations: [linkAnnotation],
      },
    }),
  ],
});

/** The About statement: one paragraph; "highlight" renders in --primary. */
export const statementText = defineType({
  name: "statementText",
  title: "Statement",
  type: "array",
  of: [
    defineArrayMember({
      type: "block",
      styles: [{ title: "Normal", value: "normal" }],
      lists: [],
      marks: {
        decorators: [{ title: "Highlight", value: "highlight" }],
        annotations: [],
      },
    }),
  ],
  validation: (rule) => rule.required().max(1),
});
