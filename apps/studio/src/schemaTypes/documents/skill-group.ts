import { StackIcon } from "@sanity/icons/Stack";
import { defineField, defineType } from "sanity";
import { I18N_STRING, orderField, stringList } from "../shared";

export const skillGroup = defineType({
  name: "skillGroup",
  title: "Skill group",
  type: "document",
  icon: StackIcon,
  fields: [
    defineField({
      name: "title",
      type: I18N_STRING,
      validation: (r) => r.required(),
    }),
    { ...stringList("items"), validation: (r) => r.required().min(1) },
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
    select: { title: "title", items: "items" },
    prepare: ({ title, items }) => ({
      title:
        (title as { value?: string }[] | undefined)?.[0]?.value ??
        "Skill group",
      subtitle: `${(items as string[] | undefined)?.length ?? 0} skills`,
    }),
  },
});
