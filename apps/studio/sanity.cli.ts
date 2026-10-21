import { defineCliConfig } from "sanity/cli";

export default defineCliConfig({
  api: {
    projectId: process.env.SANITY_STUDIO_PROJECT_ID || "jok2puek",
    dataset: process.env.SANITY_STUDIO_DATASET || "development",
  },
  deployment: {
    autoUpdates: true,
  },
  typegen: {
    // Queries live in the CMS adapter package, not in the web app.
    path: "../../packages/sanity/src/**/*.{ts,tsx}",
    schema: "schema.json",
    generates: "../../packages/sanity/src/sanity.types.ts",
    overloadClientMethods: true,
  },
});
