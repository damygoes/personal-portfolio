import { ProjectsIcon } from "@sanity/icons/Projects";
import { defineArrayMember, defineField, defineType } from "sanity";
import {
  I18N_STRING,
  I18N_TEXT,
  imageField,
  orderField,
  slugField,
  stringList,
} from "../shared";

/**
 * A project card. Its case study (if any) is the `caseStudy` document that
 * references it, so the link lives in one place.
 */
export const project = defineType({
  name: "project",
  title: "Project",
  type: "document",
  icon: ProjectsIcon,
  groups: [
    { name: "card", title: "Card", default: true },
    { name: "media", title: "Media" },
    { name: "links", title: "Links" },
  ],
  fields: [
    defineField({
      name: "title",
      type: "string",
      group: "card",
      description: 'A trailing period ("Passe.") is drawn as the spark dot.',
      validation: (r) => r.required(),
    }),
    { ...slugField(), group: "card" },
    defineField({
      name: "kind",
      type: I18N_STRING,
      group: "card",
      description: '"iOS app"',
    }),
    defineField({ name: "platforms", type: I18N_STRING, group: "card" }),
    defineField({
      name: "summary",
      type: I18N_TEXT,
      group: "card",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "teaser",
      type: I18N_STRING,
      group: "card",
      description: 'Hero "New work —" line: "a travel journal".',
    }),
    defineField({
      name: "coverTag",
      type: I18N_STRING,
      group: "card",
      description: 'Corner label on the cover: "Latest · iOS & web".',
    }),
    { ...stringList("tech"), group: "card" },
    defineField({
      name: "status",
      type: "object",
      group: "card",
      fields: [
        defineField({ name: "label", type: I18N_STRING }),
        defineField({
          name: "isNew",
          type: "boolean",
          description: 'Cards prefix the label with "New ·".',
          initialValue: false,
        }),
      ],
    }),
    defineField({
      name: "featured",
      type: "boolean",
      group: "card",
      initialValue: false,
    }),
    { ...orderField, group: "card" },
    defineField({
      name: "coverTone",
      type: "string",
      group: "media",
      options: {
        list: [
          { title: "Warm (coral)", value: "warm" },
          { title: "Lagoon", value: "lagoon" },
          { title: "Card", value: "card" },
        ],
        layout: "radio",
      },
      validation: (r) => r.required(),
    }),
    { ...imageField("cover"), group: "media" },
    defineField({
      name: "screens",
      type: "array",
      group: "media",
      description: "App screens for the case study (up to 3).",
      of: [
        defineArrayMember({
          type: "image",
          options: { hotspot: true },
          fields: [defineField({ name: "alt", type: "string" })],
        }),
      ],
      validation: (r) => r.max(3),
    }),
    defineField({
      name: "links",
      type: "object",
      group: "links",
      fields: [
        defineField({ name: "live", type: "url" }),
        defineField({ name: "github", type: "url" }),
        defineField({
          name: "appStoreId",
          title: "App Store ID",
          type: "string",
        }),
        defineField({ name: "playStore", type: "url" }),
      ],
    }),
  ],
  orderings: [
    {
      title: "Order",
      name: "order",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
  preview: {
    select: { title: "title", subtitle: "slug.current", media: "cover" },
  },
});
