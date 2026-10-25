import { CogIcon } from "@sanity/icons/Cog";
import { defineArrayMember, defineField, defineType } from "sanity";
import { I18N_FILE, I18N_STRING, I18N_STRING_LIST, I18N_TEXT } from "../shared";

/** Site-wide settings: header, hero meta, contact, marquee, footer. Singleton. */
export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site settings",
  type: "document",
  icon: CogIcon,
  groups: [
    { name: "identity", title: "Identity", default: true },
    { name: "hero", title: "Hero & marquee" },
    { name: "contact", title: "Contact & links" },
  ],
  fields: [
    defineField({
      name: "name",
      type: "string",
      group: "identity",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "initials",
      type: "string",
      group: "identity",
      description: 'Shown in the author avatar ("DB").',
      validation: (r) => r.required().max(3),
    }),
    defineField({ name: "tagline", type: I18N_TEXT, group: "identity" }),
    defineField({
      name: "currentRole",
      type: "object",
      group: "identity",
      fields: [
        defineField({ name: "title", type: I18N_STRING }),
        defineField({ name: "company", type: "string" }),
      ],
    }),
    defineField({
      name: "authorBio",
      title: "Author bio",
      type: I18N_TEXT,
      group: "identity",
      description: "One line on the bio card under each post.",
    }),
    defineField({ name: "location", type: I18N_STRING, group: "identity" }),
    defineField({
      name: "timezone",
      type: "string",
      group: "identity",
      description: "IANA zone for the live clock (Europe/Berlin).",
      initialValue: "Europe/Berlin",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "yearsExperienceLabel",
      title: "Experience label",
      type: I18N_STRING,
      group: "hero",
      description: '"4+ yrs experience"',
    }),
    defineField({
      name: "heroMeta",
      title: "Hero meta",
      type: I18N_STRING_LIST,
      group: "hero",
    }),
    defineField({
      name: "marqueeItems",
      type: "array",
      group: "hero",
      of: [
        defineArrayMember({
          name: "marqueeItem",
          type: "object",
          fields: [
            defineField({
              name: "text",
              type: "string",
              validation: (r) => r.required(),
            }),
            defineField({
              name: "outlined",
              type: "boolean",
              initialValue: false,
            }),
          ],
          preview: {
            select: { title: "text", outlined: "outlined" },
            prepare: ({ title, outlined }) => ({
              title,
              subtitle: outlined ? "Outlined" : undefined,
            }),
          },
        }),
      ],
    }),
    defineField({
      name: "email",
      type: "string",
      group: "contact",
      validation: (r) => r.required().email(),
    }),
    defineField({
      name: "socials",
      type: "array",
      group: "contact",
      of: [
        defineArrayMember({
          name: "social",
          type: "object",
          fields: [
            defineField({
              name: "label",
              type: "string",
              validation: (r) => r.required(),
            }),
            defineField({
              name: "url",
              type: "url",
              validation: (r) => r.required(),
            }),
          ],
          preview: { select: { title: "label", subtitle: "url" } },
        }),
      ],
    }),
    defineField({
      name: "cvFile",
      title: "CV (PDF)",
      type: I18N_FILE,
      group: "contact",
      description:
        "One PDF per language; missing languages use the English CV. Takes precedence over the CV URL.",
    }),
    defineField({
      name: "cvUrl",
      title: "CV URL",
      type: "url",
      group: "contact",
    }),
  ],
  preview: { prepare: () => ({ title: "Site settings" }) },
});
