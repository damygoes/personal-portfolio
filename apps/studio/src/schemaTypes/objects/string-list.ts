import { defineArrayMember, defineType } from "sanity";

/**
 * A list of strings, registered as a named type so the internationalized-array
 * plugin can translate whole lists (hero meta, experience bullets).
 */
export const stringListType = defineType({
  name: "stringList",
  title: "List",
  type: "array",
  of: [defineArrayMember({ type: "string" })],
});
