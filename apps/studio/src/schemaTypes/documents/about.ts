import { UserIcon } from "@sanity/icons/User";
import { defineArrayMember, defineField, defineType } from "sanity";
import { apiVersion } from "../../env";
import { imageField, languageField } from "../shared";

/**
 * The About page and home teaser. Translated as a whole document: one About
 * per language, linked by the document-internationalization plugin.
 */
export const about = defineType({
  name: "about",
  title: "About",
  type: "document",
  icon: UserIcon,
  fields: [
    {
      ...languageField,
      validation: (rule) =>
        rule.custom(async (language, context) => {
          if (!language) return true;
          const id = context.document?._id.replace(/^drafts\./, "");
          const others = await context
            .getClient({ apiVersion })
            .fetch<number>(
              `count(*[_type == "about" && language == $language && !(sanity::versionOf($id))])`,
              { language, id },
            );
          return others === 0 || `There is already an About in "${language}"`;
        }),
    },
    defineField({
      name: "statement",
      type: "statementText",
      description:
        "One paragraph. Mark words as Highlight to draw them in lagoon.",
    }),
    defineField({
      name: "lede",
      type: "text",
      rows: 3,
      validation: (r) => r.required(),
    }),
    defineField({
      name: "bio",
      type: "richText",
      description: "The About page bio.",
    }),
    defineField({
      name: "teaserParagraphs",
      title: "Home teaser",
      type: "richText",
      description: "The paragraphs shown in the home About section.",
    }),
    imageField("portrait"),
    defineField({
      name: "facts",
      type: "array",
      of: [
        defineArrayMember({
          name: "fact",
          type: "object",
          fields: [
            defineField({
              name: "label",
              type: "string",
              validation: (r) => r.required(),
            }),
            defineField({
              name: "value",
              type: "string",
              description: "Shown when no projects are linked.",
            }),
            defineField({
              name: "projects",
              type: "array",
              description: "Linking projects renders their titles as links.",
              of: [
                defineArrayMember({
                  type: "reference",
                  to: [{ type: "project" }],
                }),
              ],
            }),
            defineField({
              name: "aboutPageOnly",
              title: "About page only",
              type: "boolean",
              description: "Hide from the home teaser.",
              initialValue: false,
            }),
          ],
          preview: { select: { title: "label", subtitle: "value" } },
        }),
      ],
    }),
    defineField({
      name: "skillsIntro",
      title: "Skills intro",
      type: "string",
      description: "Line above the skills band.",
    }),
  ],
  preview: {
    select: { language: "language" },
    prepare: ({ language }) => ({
      title: "About",
      subtitle: language ? String(language).toUpperCase() : "No language",
    }),
  },
});
