import { documentInternationalization } from "@sanity/document-internationalization";
import { visionTool } from "@sanity/vision";
import {
  defineConfig,
  defineField,
  defineSingleton,
  type WorkspaceOptions,
} from "sanity";
import { defineLocations, presentationTool } from "sanity/presentation";
import { structureTool } from "sanity/structure";
import { internationalizedArray } from "sanity-plugin-internationalized-array";
import { apiVersion, previewUrls, projectId } from "./src/env";
import {
  baseLanguage,
  fieldTranslatedDocumentTypes,
  languages,
  translatedDocumentTypes,
} from "./src/languages";
import { schemaTypes } from "./src/schemaTypes";
import { structure } from "./src/structure";

const siteSettingsSingleton = defineSingleton({
  documentId: "siteSettings",
  schemaType: "siteSettings",
  title: "Site settings",
});

/** One workspace per dataset: same schema and plugins, its own preview site. */
const workspace = ({
  name,
  title,
  dataset,
  previewUrl,
}: {
  name: string;
  title: string;
  dataset: string;
  previewUrl: string;
}): WorkspaceOptions => ({
  name,
  title,
  basePath: `/${name}`,
  projectId,
  dataset,

  plugins: [
    structureTool({ structure }),
    presentationTool({
      previewUrl: {
        initial: previewUrl,
        previewMode: {
          enable: "/api/draft-mode/enable",
          disable: "/api/draft-mode/disable",
        },
      },
      // "Used on" links in the document panel (slugs are shared per language).
      resolve: {
        locations: {
          post: defineLocations({
            select: {
              title: "title",
              slug: "slug.current",
              language: "language",
            },
            resolve: (doc) => ({
              locations: doc?.slug
                ? [
                    {
                      title: doc.title ?? "Post",
                      href: `/${doc.language ?? "en"}/blog/${doc.slug}`,
                    },
                    { title: "Blog", href: `/${doc.language ?? "en"}/blog` },
                  ]
                : [],
            }),
          }),
          caseStudy: defineLocations({
            select: { slug: "project.slug.current", language: "language" },
            resolve: (doc) => ({
              locations: doc?.slug
                ? [
                    {
                      title: "Case study",
                      href: `/${doc.language ?? "en"}/work/${doc.slug}`,
                    },
                  ]
                : [],
            }),
          }),
        },
      },
    }),
    documentInternationalization({
      supportedLanguages: languages,
      schemaTypes: translatedDocumentTypes,
      languageField: "language",
      apiVersion,
    }),
    internationalizedArray({
      languages,
      defaultLanguages: [baseLanguage],
      fieldTypes: [
        "string",
        "text",
        "stringList",
        defineField({
          name: "file",
          type: "file",
          options: { accept: "application/pdf" },
        }),
      ],
      buttonLocations: ["field", "document"],
      languageFilter: { documentTypes: fieldTranslatedDocumentTypes },
    }),
    visionTool({ defaultApiVersion: apiVersion }),
  ],

  schema: {
    types: schemaTypes,
  },

  document: {
    singletons: [siteSettingsSingleton],
    // The plugin offers one "New <type> (<language>)" template per language;
    // hide the language-less defaults so every translated document has one.
    newDocumentOptions: (prev, { creationContext }) =>
      creationContext.type === "global"
        ? prev.filter(
            (item) => !translatedDocumentTypes.includes(item.templateId),
          )
        : prev,
  },
});

export default defineConfig([
  workspace({
    name: "production",
    title: "Damilola Bada",
    dataset: "production",
    previewUrl: previewUrls.production,
  }),
  workspace({
    name: "development",
    title: "Damilola Bada (development)",
    dataset: "development",
    previewUrl: previewUrls.development,
  }),
]);
