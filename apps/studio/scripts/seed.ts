/**
 * Seeds a dataset with the site's content, from the same typed fixture data
 * Storybook uses (spec/content-seed.json + reference-HTML additions, plus the
 * translations). Documents are built by `@portfolio/sanity/seed`; this script
 * only does the I/O.
 *
 *   pnpm --filter studio seed --dataset development --include-samples --with-translations
 *   pnpm --filter studio seed --dataset production
 *   … add --dry-run to print what would change without writing.
 *
 * - Runs with your CLI login (`sanity exec --with-user-token`): no write token.
 * - Idempotent: existing documents are found by natural key (slug, company +
 *   start, order, language) and only rewritten when their content changed;
 *   new ones get a generated id. Only the singletons have fixed ids.
 * - Sample posts are written only with --include-samples, never to production.
 * - Translations (machine-drafted, under review) only with --with-translations.
 */
import { randomUUID } from "node:crypto";
import { content, translations } from "@portfolio/fixtures/data";
import {
  clean,
  seedDocuments,
  seedLookups,
  translationMetadata,
} from "@portfolio/sanity/seed";
import { getCliClient } from "sanity/cli";
import { apiVersion } from "../src/env";

const args = process.argv.slice(2);
const option = (name: string) => {
  const i = args.indexOf(`--${name}`);
  return i >= 0 ? args[i + 1] : undefined;
};

const baseClient = getCliClient({ apiVersion });
const dataset = option("dataset") ?? baseClient.config().dataset ?? "";
const client = baseClient.withConfig({ dataset });
const includeSamples = args.includes("--include-samples");
const withTranslations = args.includes("--with-translations");
const dryRun = args.includes("--dry-run");

if (includeSamples && dataset === "production") {
  console.error("Refusing: sample posts never go to the production dataset.");
  process.exit(1);
}
if (withTranslations) {
  console.warn(
    `Note: the translations (${Object.keys(translations).join(", ")}) are a machine draft pending review.`,
  );
}

const seedTranslations = withTranslations ? translations : {};

const PUBLISHED = `!(_id in path("drafts.**")) && !(_id in path("versions.**"))`;
const SYSTEM = new Set(["_id", "_rev", "_createdAt", "_updatedAt", "_system"]);
/** Key order differs between what we build and what Sanity returns: sort deeply. */
const sortKeys = (value: unknown): unknown =>
  Array.isArray(value)
    ? value.map(sortKeys)
    : value && typeof value === "object"
      ? Object.fromEntries(
          Object.entries(value)
            .sort(([a], [b]) => a.localeCompare(b))
            .map(([k, v]) => [k, sortKeys(v)]),
        )
      : value;
const stable = (doc: Record<string, unknown>) =>
  JSON.stringify(
    sortKeys(
      Object.fromEntries(
        Object.entries(doc).filter(([key]) => !SYSTEM.has(key)),
      ),
    ),
  );

async function uploadPortrait() {
  const portrait = content.about.portrait;
  if (!portrait) return undefined;
  if (dryRun) {
    // Compare against what is stored instead of uploading.
    return client.fetch(`*[_id == "about-en"][0].portrait`);
  }
  const response = await fetch(portrait.src);
  if (!response.ok)
    throw new Error(`Portrait download failed: ${response.status}`);
  // Assets are deduplicated by content hash, so re-uploading is a no-op.
  const asset = await client.assets.upload(
    "image",
    Buffer.from(await response.arrayBuffer()),
    { filename: new URL(portrait.src).pathname.split("/").pop() },
  );
  return {
    _type: "image" as const,
    alt: portrait.alt,
    asset: { _type: "reference" as const, _ref: asset._id },
  };
}

async function main() {
  console.log(
    `Seeding "${dataset}"${includeSamples ? " with samples" : ""}${withTranslations ? " with translations" : ""}${dryRun ? " (dry run)" : ""}…`,
  );

  // 1. Resolve ids: existing documents by natural key, new ones generated.
  const ids = new Map<string, string>();
  for (const lookup of seedLookups(content, includeSamples, seedTranslations)) {
    const existing = await client.fetch<string | null>(
      `*[${lookup.filter} && ${PUBLISHED}][0]._id`,
      lookup.params,
    );
    ids.set(`${lookup.kind}:${lookup.key}`, existing ?? randomUUID());
  }

  // 2. Build every document, plus one translation.metadata per group.
  const { documents, translationGroups } = seedDocuments(content, {
    includeSamples,
    translations: seedTranslations,
    portrait: await uploadPortrait(),
    id: (kind, key) => {
      const id = ids.get(`${kind}:${key}`);
      if (!id) throw new Error(`No id for ${kind} "${key}"`);
      return id;
    },
  });
  const docs = [...documents];
  for (const group of translationGroups) {
    // Reuse the group's metadata document (found via any of its versions).
    const metadataId = await client.fetch<string | null>(
      `*[_type == "translation.metadata" && count(translations[value._ref in $ids]) > 0][0]._id`,
      { ids: group.map((d) => d._id) },
    );
    docs.push(translationMetadata(metadataId ?? randomUUID(), group));
  }

  // 3. Write what changed, in one transaction.
  const stats = { created: 0, updated: 0, unchanged: 0 };
  const transaction = client.transaction();
  for (const doc of docs) {
    const existing = await client.fetch<Record<string, unknown> | null>(
      `*[_id == $id][0]`,
      { id: doc._id },
    );
    if (existing && stable(clean(doc)) === stable(existing)) {
      stats.unchanged += 1;
      continue;
    }
    const slug = (doc.slug as { current?: string } | undefined)?.current;
    const language = doc.language ? ` (${String(doc.language)})` : "";
    console.log(
      `${existing ? "update" : "create"}  ${doc._type} ${slug ?? doc._id}${language}`,
    );
    stats[existing ? "updated" : "created"] += 1;
    transaction.createOrReplace(doc);
  }
  if (!dryRun && stats.created + stats.updated > 0) await transaction.commit();

  console.log(
    `Done: ${stats.created} created, ${stats.updated} updated, ${stats.unchanged} unchanged.`,
  );
}

main().catch((error: unknown) => {
  console.error(error);
  process.exit(1);
});
