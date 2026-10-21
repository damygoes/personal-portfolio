/**
 * Import boundaries that keep the CMS swappable: only a content adapter
 * package (and the app's single content module) may import a CMS SDK.
 */

const CMS_PACKAGES = [
  "@portfolio/sanity",
  "@portfolio/sanity/*",
  "sanity",
  "sanity/*",
  "next-sanity",
  "next-sanity/*",
  "@sanity/*",
];

const ADAPTER_PACKAGES = ["@portfolio/fixtures"];

function restrict(group, message) {
  return {
    "no-restricted-imports": ["error", { patterns: [{ group, message }] }],
  };
}

/**
 * For CMS-neutral packages (ui, contracts): no CMS SDK at all.
 *
 * @type {import("eslint").Linter.Config}
 */
export const noCmsImports = {
  rules: restrict(
    CMS_PACKAGES,
    "This package is CMS-neutral: take DTOs from @portfolio/contracts instead.",
  ),
};

/**
 * For the web app: CMS SDKs and content adapters only in `contentModule`.
 *
 * @param {string} contentModule glob of the app's content module
 * @returns {import("eslint").Linter.Config}
 */
export function contentBoundary(contentModule) {
  return {
    ignores: [contentModule],
    rules: restrict(
      [...CMS_PACKAGES, ...ADAPTER_PACKAGES],
      `Import content through ${contentModule}, never a CMS or adapter package directly.`,
    ),
  };
}
