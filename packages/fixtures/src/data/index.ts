import type { ContentSet, Translations } from "@portfolio/content-core";
import { about } from "./about";
import { caseStudies } from "./case-studies";
import { categories } from "./categories";
import { de } from "./de";
import { experience } from "./experience";
import { posts } from "./posts";
import { projects } from "./projects";
import { site } from "./site";
import { skillGroups, skillsIntro } from "./skills";

/** All fixture content in the default locale (EN) — also the Sanity seed's source. */
export const content: ContentSet = {
  site,
  about: { ...about, skillsIntro },
  experience,
  skillGroups,
  projects,
  caseStudies,
  categories,
  posts,
};

/** Translations of `content`, per locale. Adding a locale = adding its file here. */
export const translations: Translations = { de };
