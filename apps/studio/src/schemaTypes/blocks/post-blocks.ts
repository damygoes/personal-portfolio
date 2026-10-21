import { CodeBlockIcon } from "@sanity/icons/CodeBlock";
import { ImageIcon } from "@sanity/icons/Image";
import { ImagesIcon } from "@sanity/icons/Images";
import { BlockquoteIcon } from "@sanity/icons/Blockquote";
import { defineArrayMember, defineField, defineType } from "sanity";
import { imageField } from "../shared";

export const codeBlock = defineType({
  name: "code",
  title: "Code",
  type: "object",
  icon: CodeBlockIcon,
  fields: [
    defineField({ name: "filename", type: "string" }),
    defineField({
      name: "language",
      type: "string",
      description: "Shiki language id: ts, tsx, md, bash, …",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "languageLabel",
      type: "string",
      description:
        'Shown in the code bar ("Markdown"). Defaults to the language id.',
    }),
    defineField({
      name: "code",
      type: "text",
      rows: 12,
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: { title: "filename", subtitle: "language" },
    prepare: ({ title, subtitle }) => ({ title: title || "Code", subtitle }),
  },
});

export const pullQuote = defineType({
  name: "pullQuote",
  title: "Pull quote",
  type: "object",
  icon: BlockquoteIcon,
  fields: [
    defineField({
      name: "text",
      type: "text",
      rows: 3,
      validation: (r) => r.required(),
    }),
  ],
  preview: { select: { title: "text" } },
});

export const figure = defineType({
  name: "figure",
  title: "Figure",
  type: "object",
  icon: ImageIcon,
  fields: [
    { ...imageField("image"), validation: (rule) => rule.required() },
    defineField({ name: "caption", type: "string" }),
  ],
  preview: { select: { title: "caption", media: "image" } },
});

/** Reserved for the photography layout (not designed yet); renders as figures. */
export const gallery = defineType({
  name: "gallery",
  title: "Gallery",
  type: "object",
  icon: ImagesIcon,
  fields: [
    defineField({
      name: "images",
      type: "array",
      of: [
        defineArrayMember({
          type: "image",
          options: { hotspot: true },
          fields: [defineField({ name: "alt", type: "string" })],
        }),
      ],
      validation: (rule) => rule.required().min(1),
    }),
    defineField({ name: "caption", type: "string" }),
  ],
  preview: {
    select: { title: "caption", media: "images.0" },
    prepare: ({ title, media }) => ({ title: title || "Gallery", media }),
  },
});

/** Post body: paragraphs, H2 sections (numbered in the TOC), lists, custom blocks. */
export const postBody = defineType({
  name: "postBody",
  title: "Body",
  type: "array",
  of: [
    defineArrayMember({
      type: "block",
      styles: [
        { title: "Normal", value: "normal" },
        { title: "Section heading", value: "h2" },
      ],
      lists: [
        { title: "Bullet", value: "bullet" },
        { title: "Numbered", value: "number" },
      ],
      marks: {
        decorators: [
          { title: "Strong", value: "strong" },
          { title: "Emphasis", value: "em" },
          { title: "Code", value: "code" },
        ],
        annotations: [
          defineArrayMember({
            name: "link",
            type: "object",
            fields: [
              defineField({
                name: "href",
                type: "url",
                validation: (rule) =>
                  rule.required().uri({
                    allowRelative: true,
                    scheme: ["http", "https", "mailto"],
                  }),
              }),
            ],
          }),
        ],
      },
    }),
    defineArrayMember({ type: "code" }),
    defineArrayMember({ type: "pullQuote" }),
    defineArrayMember({ type: "figure" }),
    defineArrayMember({ type: "gallery" }),
  ],
});
