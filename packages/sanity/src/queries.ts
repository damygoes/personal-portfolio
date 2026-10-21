import { defineQuery } from "groq";

/**
 * GROQ only: no mapping logic here. Field-level translations are fetched
 * whole and resolved by the mappers along the fallback chain; translated
 * documents are fetched for every language in `$chain` and picked there.
 *
 * Translations share their slug, so a translation group is "same type, same
 * slug" and `availableLocales` is the languages of that group.
 */

const image = /* groq */ `{
  alt,
  crop,
  hotspot,
  asset->{ _id, url, metadata { lqip, dimensions { width, height } } }
}`;

export const SITE_SETTINGS_QUERY =
  defineQuery(`*[_type == "siteSettings" && _id == "siteSettings"][0]{
  _id,
  _type,
  name,
  initials,
  tagline,
  email,
  socials[]{ label, url },
  "cvFileUrl": cvFile.asset->url,
  cvUrl,
  location,
  timezone,
  yearsExperienceLabel,
  heroMeta,
  currentRole{ title, company },
  marqueeItems[]{ text, outlined },
  authorBio
}`);

export const ABOUT_QUERY =
  defineQuery(`*[_type == "about" && language in $chain]{
  _id,
  _type,
  language,
  statement,
  lede,
  bio,
  teaserParagraphs,
  portrait${image},
  facts[]{
    _key,
    label,
    value,
    "projects": projects[]->slug.current,
    aboutPageOnly
  },
  skillsIntro,
  "availableLocales": *[_type == "about" && defined(language)].language
}`);

export const EXPERIENCE_QUERY =
  defineQuery(`*[_type == "experience"] | order(order asc){
  _id,
  _type,
  order,
  role,
  company,
  location,
  workMode,
  startDate,
  endDate,
  summary,
  bullets
}`);

export const SKILL_GROUPS_QUERY =
  defineQuery(`*[_type == "skillGroup"] | order(order asc){
  _id,
  _type,
  order,
  title,
  items
}`);

export const PROJECTS_QUERY =
  defineQuery(`*[_type == "project" && defined(slug.current)] | order(order asc){
  _id,
  _type,
  order,
  title,
  "slug": slug.current,
  kind,
  teaser,
  coverTag,
  status{ label, isNew },
  summary,
  tech,
  links{ live, github, appStoreId },
  coverTone,
  cover${image},
  featured,
  "hasCaseStudy": count(*[_type == "caseStudy" && project._ref == ^._id]) > 0
}`);

export const CASE_STUDY_QUERY = defineQuery(`*[
  _type == "caseStudy" &&
  language in $chain &&
  project._ref == *[_type == "project" && slug.current == $slug][0]._id
]{
  _id,
  _type,
  language,
  "project": project->slug.current,
  "screens": project->screens[]${image},
  titleSplit{ solid, outlined },
  lede,
  meta[]{ label, value },
  sections[]{
    _key,
    _type,
    label,
    heading,
    body,
    steps[]{ title, text },
    features[]{ title, text },
    plans[]{ name, price, period, features },
    note,
    core[]{ eyebrow, title, sub, isCore },
    sub[]{ eyebrow, title, sub },
    notes,
    text,
    attribution
  },
  "availableLocales": *[
    _type == "caseStudy" && defined(language) && project._ref == ^.project._ref
  ].language
}`);

export const CATEGORIES_QUERY =
  defineQuery(`*[_type == "category" && defined(slug.current)] | order(order asc){
  _id,
  _type,
  order,
  title,
  "slug": slug.current,
  coverTone
}`);

const postCard = /* groq */ `
  _id,
  _type,
  language,
  title,
  "slug": slug.current,
  excerpt,
  publishedAt,
  "categories": categories[]->slug.current,
  cover${image},
  coverWord,
  sample,
  "plainText": pt::text(body)
`;

export const POSTS_QUERY = defineQuery(`*[
  _type == "post" && language in $chain && defined(slug.current)
] | order(publishedAt desc){${postCard}}`);

export const POST_QUERY = defineQuery(`*[
  _type == "post" && language in $chain && slug.current == $slug
]{
  ${postCard},
  body[]{
    ...,
    _type == "figure" => { caption, "image": image${image} },
    _type == "gallery" => { caption, "images": images[]${image} }
  },
  "availableLocales": *[
    _type == "post" && defined(language) && slug.current == $slug
  ].language
}`);

export const ROUTES_QUERY = defineQuery(`{
  "caseStudies": array::unique(*[_type == "caseStudy" && defined(project)].project->slug.current),
  "posts": array::unique(*[_type == "post" && defined(slug.current)].slug.current)
}`);
