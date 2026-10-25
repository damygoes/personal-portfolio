import { contentBoundary } from "@portfolio/eslint-config/boundaries";
import { nextJsConfig } from "@portfolio/eslint-config/next-js";

/** @type {import("eslint").Linter.Config[]} */
export default [...nextJsConfig, contentBoundary("src/lib/content.ts")];
