import { documentInternationalization } from "@sanity/document-internationalization";
import { visionTool } from "@sanity/vision";
import { defineConfig, defineSingleton } from "sanity";
import { presentationTool } from "sanity/presentation";
import { structureTool } from "sanity/structure";
import { internationalizedArray } from "sanity-plugin-internationalized-array";
import { apiVersion, dataset, previewUrl, projectId } from "./src/env";
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

export default defineConfig({
  name: "default",
  title: "Damilola Bada",
  projectId,
  dataset,

  plugins: [
    structureTool({ structure }),
    presentationTool({
      // Phase 3 adds this route to apps/web.
      previewUrl: {
        initial: previewUrl,
        previewMode: { enable: "/api/draft-mode/enable" },
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
      fieldTypes: ["string", "text", "stringList"],
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
