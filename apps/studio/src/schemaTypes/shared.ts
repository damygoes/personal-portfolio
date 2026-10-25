import {
  defineArrayMember,
  defineField,
  type SlugValidationContext,
} from "sanity";
import { apiVersion } from "../env";

/**
 * Field-level translation types registered by sanity-plugin-internationalized-array
 * (see `fieldTypes` in sanity.config.ts).
 */
export const I18N_STRING = "internationalizedArrayString";
export const I18N_TEXT = "internationalizedArrayText";
export const I18N_STRING_LIST = "internationalizedArrayStringList";
export const I18N_FILE = "internationalizedArrayFile";

/** The language field the document-internationalization plugin writes. */
export const languageField = defineField({
  name: "language",
  type: "string",
  readOnly: true,
  hidden: true,
});

/**
 * Slugs are shared across translations (`/en/blog/x` ↔ `/de/blog/x`), so a
 * slug only has to be unique among documents of the same type and language.
 */
export async function isUniquePerLanguage(
  slug: string,
  context: SlugValidationContext,
): Promise<boolean> {
  const { document, getClient } = context;
  if (!document) return true;
  const client = getClient({ apiVersion });
  return client.fetch(
    `!defined(*[
      !(sanity::versionOf($id)) &&
      _type == $type &&
      slug.current == $slug &&
      language == $language
    ][0]._id)`,
    {
      id: document._id.replace(/^drafts\./, ""),
      type: document._type,
      slug,
      language: (document as { language?: string }).language ?? null,
    },
  );
}

export const slugField = (source = "title") =>
  defineField({
    name: "slug",
    type: "slug",
    options: { source, isUnique: isUniquePerLanguage },
    validation: (rule) => rule.required(),
  });

/** Image with required alt text. */
export const imageField = (name: string, title?: string) =>
  defineField({
    name,
    title,
    type: "image",
    options: { hotspot: true },
    fields: [
      defineField({
        name: "alt",
        type: "string",
        validation: (rule) => rule.required().warning("Describe the image"),
      }),
    ],
  });

export const orderField = defineField({
  name: "order",
  type: "number",
  description: "Position in lists (1 = first).",
  validation: (rule) => rule.required().integer().min(1),
});

export const stringList = (name: string, title?: string) =>
  defineField({
    name,
    title,
    type: "array",
    of: [defineArrayMember({ type: "string" })],
  });

/** Every cover / background tone the design defines. */
export const TONES = [
  { title: "Warm (coral)", value: "warm" },
  { title: "Lagoon", value: "lagoon" },
  { title: "Card", value: "card" },
  { title: "Ink", value: "ink" },
  { title: "Stone", value: "stone" },
];
