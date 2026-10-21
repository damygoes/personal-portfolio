import { CogIcon } from "@sanity/icons/Cog";
import { DocumentTextIcon } from "@sanity/icons/DocumentText";
import { UserIcon } from "@sanity/icons/User";
import type { StructureResolver } from "sanity/structure";
import { languages } from "./languages";

/**
 * Every type placed by hand below. Each must be listed here, or the
 * catch-all adds it a second time and the Studio errors on duplicate ids.
 * translation.metadata is listed to keep it hidden.
 */
const LISTED = new Set([
  "siteSettings",
  "about",
  "project",
  "caseStudy",
  "experience",
  "skillGroup",
  "post",
  "category",
  "translation.metadata",
]);

/** One filtered list per language, e.g. Posts → English / Deutsch. */
function byLanguage(
  S: Parameters<StructureResolver>[0],
  type: string,
  title: string,
  icon: typeof DocumentTextIcon,
) {
  return S.listItem()
    .title(title)
    .icon(icon)
    .child(
      S.list()
        .title(title)
        .items(
          languages.map((lang) =>
            S.listItem()
              .title(`${title} (${lang.id.toUpperCase()})`)
              .icon(icon)
              .child(
                S.documentTypeList(type)
                  .title(`${title} (${lang.title})`)
                  .filter("_type == $type && language == $language")
                  .params({ type, language: lang.id }),
              ),
          ),
        ),
    );
}

export const structure: StructureResolver = (S) => {
  // Types added to the schema later still show up, at the end.
  const others = S.documentTypeListItems().filter(
    (item) => !LISTED.has(item.getId() ?? ""),
  );
  return S.list()
    .title("Content")
    .items([
      S.listItem().singleton("siteSettings").icon(CogIcon),
      // One About per language; translations are created from the EN About.
      byLanguage(S, "about", "About", UserIcon),
      S.divider(),
      S.documentTypeListItem("project").title("Projects"),
      byLanguage(S, "caseStudy", "Case studies", DocumentTextIcon),
      S.documentTypeListItem("experience").title("Experience"),
      S.documentTypeListItem("skillGroup").title("Skill groups"),
      S.divider(),
      byLanguage(S, "post", "Posts", DocumentTextIcon),
      S.documentTypeListItem("category").title("Categories"),
      ...(others.length ? [S.divider(), ...others] : []),
    ]);
};
