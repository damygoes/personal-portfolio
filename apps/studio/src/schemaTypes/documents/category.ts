import { TagIcon } from "@sanity/icons/Tag";
import { defineField, defineType } from "sanity";
import { I18N_STRING, TONES, orderField, slugField } from "../shared";

export const category = defineType({
  name: "category",
  title: "Category",
  type: "document",
  icon: TagIcon,
  fields: [
    defineField({
      name: "title",
      type: I18N_STRING,
      validation: (r) => r.required(),
    }),
    // Source is the EN title inside the internationalized array.
    slugField("title.0.value"),
    defineField({
      name: "coverTone",
      type: "string",
      description: "Cover colour of posts whose first category this is.",
      options: { list: TONES, layout: "radio" },
      validation: (r) => r.required(),
    }),
    orderField,
  ],
  orderings: [
    {
      title: "Order",
      name: "order",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
  preview: {
    select: { title: "title", slug: "slug.current" },
    prepare: ({ title, slug }) => ({
      title: (title as { value?: string }[] | undefined)?.[0]?.value ?? slug,
      subtitle: slug,
    }),
  },
});
