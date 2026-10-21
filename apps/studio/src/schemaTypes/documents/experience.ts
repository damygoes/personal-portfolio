import { CaseIcon } from "@sanity/icons/Case";
import { defineField, defineType } from "sanity";
import {
  I18N_STRING,
  I18N_STRING_LIST,
  I18N_TEXT,
  orderField,
} from "../shared";

const MONTH = /^\d{4}-(0[1-9]|1[0-2])$/;

export const experience = defineType({
  name: "experience",
  title: "Experience",
  type: "document",
  icon: CaseIcon,
  fields: [
    defineField({
      name: "role",
      type: I18N_STRING,
      validation: (r) => r.required(),
    }),
    defineField({
      name: "company",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({ name: "location", type: "string" }),
    defineField({
      name: "workMode",
      type: "string",
      options: {
        list: [
          { title: "On-site", value: "onsite" },
          { title: "Hybrid", value: "hybrid" },
          { title: "Remote", value: "remote" },
        ],
        layout: "radio",
      },
    }),
    defineField({
      name: "startDate",
      type: "string",
      description: "Month: YYYY-MM",
      validation: (r) => r.required().regex(MONTH, { name: "YYYY-MM" }),
    }),
    defineField({
      name: "endDate",
      type: "string",
      description:
        'Month: YYYY-MM. Empty = current role ("Present" + NOW badge).',
      validation: (r) => r.regex(MONTH, { name: "YYYY-MM" }),
    }),
    defineField({
      name: "summary",
      type: I18N_TEXT,
      description: "Either a summary or bullets.",
    }),
    defineField({ name: "bullets", type: I18N_STRING_LIST }),
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
    select: {
      company: "company",
      role: "role",
      start: "startDate",
      end: "endDate",
    },
    prepare: ({ company, role, start, end }) => ({
      title: company,
      subtitle: `${(role as { value?: string }[] | undefined)?.[0]?.value ?? ""} · ${start ?? ""} — ${end ?? "now"}`,
    }),
  },
});
