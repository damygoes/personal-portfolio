import {
  architecture,
  featureGrid,
  plans,
  quote,
  stepsGrid,
  textBlock,
} from "./blocks/case-sections";
import {
  codeBlock,
  figure,
  gallery,
  postBody,
  pullQuote,
} from "./blocks/post-blocks";
import { about } from "./documents/about";
import { caseStudy } from "./documents/case-study";
import { category } from "./documents/category";
import { experience } from "./documents/experience";
import { post } from "./documents/post";
import { project } from "./documents/project";
import { siteSettings } from "./documents/site-settings";
import { skillGroup } from "./documents/skill-group";
import { richText, statementText } from "./objects/rich-text";
import { stringListType } from "./objects/string-list";

export const schemaTypes = [
  // Documents
  siteSettings,
  about,
  experience,
  skillGroup,
  project,
  caseStudy,
  category,
  post,
  // Objects
  stringListType,
  richText,
  statementText,
  postBody,
  // Blocks
  textBlock,
  stepsGrid,
  featureGrid,
  plans,
  architecture,
  quote,
  codeBlock,
  pullQuote,
  figure,
  gallery,
];
