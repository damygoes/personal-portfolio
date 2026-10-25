# Project history and Sanity: a learning note

This note explains how the portfolio was built, commit by commit (grouped by phase), and then goes deep on the most recent commit, which introduced Sanity.

Read it top to bottom once. After that, use the glossary and the study order at the end.

**The project in one paragraph.** This is a monorepo (many packages in one repo, managed with pnpm and Turborepo). `packages/ui` holds the visual components, previewed in Storybook. `packages/contracts` defines the shapes of data (DTOs) the UI expects. `apps/web` is the Next.js site. Until recently, content came from hard-coded TypeScript files ("fixtures"). The latest commit adds a real CMS, Sanity, so content can be edited in a browser.

Commit hashes are in parentheses so you can run `git show <hash>` to see the real change.

---

## Part 1: Project history

### Phase A: Tooling (0c930c2, 53830b8, 1d17dad)

- **What:** The repo started from `create-turbo`, the official Turborepo template. It came with two sample apps (`web` and `docs`). Then husky, commitlint and lint-staged were added.
- **Why:** In a monorepo, you want checks to run automatically so mistakes don't reach the repo.
- **How:**
  - **husky** runs scripts on git events (`.husky/pre-commit`, `commit-msg`, `pre-push`).
  - **lint-staged** runs linters only on the files you are committing.
  - **commitlint** enforces conventional commit messages (`feat:`, `chore:`, `build:`). That is why every commit message has that shape.
- **Why this way:** Local hooks give fast feedback. CI alone would tell you only after you push.

### Phase B: Foundations (83ad6bd)

- **What:** Design tokens (`packages/design-tokens`), Storybook for `packages/ui`, and the `cn` class-name helper. The unused `apps/docs` sample app was deleted.
- **Why:** Colours, spacing and type should be defined once and shared, not copied into each component.
- **How:** Tokens live in `packages/design-tokens/styles/tokens.css` as CSS variables. Storybook lets you build and look at components in isolation, with no pages or data needed.

### Phase C: Primitives (eeafbc8, 54ed361, 271925f)

- **What:** Small building blocks such as `Container`, `Disclosure`, `Divider`, `Chip`, `CopyButton` and `DateRange`. Each has a component, a test and a story. The pre-push hook now runs the tests. A later fix made `CopyButton` a client component (it uses browser APIs).
- **Why:** Small, tested pieces make bigger components reliable.
- **How:** One folder per component, with `X.tsx`, `X.test.tsx` and `X.stories.tsx` side by side.

### Phase D: First web components, fixtures and shared types (e221cc3, f9b7f96, 421ac01)

- **What:** A first set of components inside `apps/web`, plus `packages/fixtures` (hard-coded sample content), `packages/contracts` (shared types) and homepage stories built on that mock data.
- **Why:** Building the UI before the CMS exists means the design isn't shaped by what the CMS makes easy. Fixtures stand in for the CMS.
- **How:** Components receive plain data shaped by the contracts. They never know where it came from. This idea matters again in Part 2.

### Phase E: The rebuild (8d812ce, d1a1c29)

- **What:** The Phase D components were thrown away. The new design from the handoff replaced the old Playfair / DM Mono look. New components went into `packages/ui`, organised as atoms, molecules, organisms and templates. Features the new design dropped (photo essays, lightbox, EXIF, pagination, legal pages) were removed. The footer got more spacing.
- **Why:** The old visual layer no longer matched the design, so patching it would have cost more than rebuilding.
- **How:** Moving components out of `apps/web` into `packages/ui` makes them reusable and Storybook-testable on their own. The web app became a thin shell.

### Phase F: Sanity groundwork (0d94690)

This commit is named "implemented sanity packages", but it mostly prepared the ground. The Studio and the real adapter arrived in the next commit.

- **Locale registry** (`packages/contracts/src/locales.ts`): one list of supported languages (`LOCALES`) plus metadata. Studio languages, routes and the language switch all derive from it. It also defines `fallbackChain`: try the requested language, then English.
- **Import boundaries** (`packages/eslint-config/boundaries.js`): lint rules that forbid importing any CMS package outside the one place designed for it. This keeps the CMS swappable.
- **LangSwitch**: becomes a toggle for 2 or fewer locales and a menu for 3 or more.
- **`packages/i18n`**: UI string dictionaries (English and German) now have tests.

---

## Part 2: The Sanity commit in depth (24d35f5)

"feat: setup sanity development instance with seeded data". It changed 93 files, but much of that is the lockfile and AI reference docs under `.agents/skills`.

### The big picture

```md
Sanity Studio ──writes──► Content Lake (cloud DB, project jok2puek, dataset "development")
(apps/studio) │
│ GROQ queries
▼
packages/sanity (queries → mappers)
│
▼
packages/content-core (shared logic)
│
▼
ContentService ◄── same interface as the fixtures version
│
▼
apps/web
```

Sanity has two halves:

- The **Studio** is the editing UI. It is a React app that you own and configure.
- The **Content Lake** is the hosted database that stores the content.

This commit sets up the Studio, a bridge from the Content Lake to your site, and a script that fills the database.

### 1. `apps/studio`: the editing app

- **[sanity.config.ts](../../apps/studio/sanity.config.ts)** is the Studio's entry point. It sets the project ID and dataset, then lists plugins:
  - `structureTool`: the sidebar and document lists.
  - `presentationTool`: a live preview of the site inside the Studio. The route it needs in `apps/web` doesn't exist yet (Phase 3).
  - `visionTool`: a playground for testing GROQ, Sanity's query language.
  - Two translation plugins (see below).
- **[sanity.cli.ts](../../apps/studio/sanity.cli.ts)** configures the `sanity` command line, including **TypeGen**, which turns your schema and queries into TypeScript types.
- **[src/env.ts](../../apps/studio/src/env.ts)** reads the project ID and dataset from env vars, with defaults. It also pins an `apiVersion` date. Sanity versions its API by date, so behaviour doesn't change under you.

### 2. Schemas: describing your content

Everything in [src/schemaTypes/](../../apps/studio/src/schemaTypes/) uses `defineType` and `defineField`. This is Sanity's central idea: you describe content as code, and the editing forms are generated from that description.

There are three kinds of schema:

- **Documents** are the things editors create: `post`, `project`, `caseStudy`, `about`, `experience`, `skillGroup`, `category` and `siteSettings`.
- **Objects and blocks** are reusable pieces that live inside documents, such as case-study sections or post body blocks.
- **Shared helpers** in [shared.ts](../../apps/studio/src/schemaTypes/shared.ts) are small factories: `slugField()`, `imageField()` (alt text required), `orderField` and so on. Each rule is written once and reused.

Worth studying:

- **Validation:** rules like `required().min(1)` run in the editor.
- **References:** `post.categories` points to `category` documents, so a category is edited in one place.
- **Portable Text:** `richText` and `postBody` use Sanity's rich-text format. It is stored as structured JSON, not HTML. The adapter's `portable-text.ts` converts it into what the UI needs.
- **Slugs:** `isUniquePerLanguage` runs a small GROQ query so a slug is unique per language, not globally. English and German versions share a slug.
- **Singleton:** `siteSettings` is declared a singleton, so there is exactly one and editors can't create a second.

### 3. Translations: two strategies

| Approach                                                     | Used for                                                          | How it works                                                                                      |
| ------------------------------------------------------------ | ----------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| **Document-level** (`@sanity/document-internationalization`) | `post`, `caseStudy`, `about`                                      | One document per language, linked by a hidden `translation.metadata` document                     |
| **Field-level** (`sanity-plugin-internationalized-array`)    | `project`, `experience`, `skillGroup`, `category`, `siteSettings` | One document; each text field is an array like `[{_key: "en", value: …}, {_key: "de", value: …}]` |

Why both:

- **Long, structured content** (posts, case studies) can differ in body and structure per language, and each language can be published separately. Separate documents fit.
- **Short labels** (project summaries, job roles) are the same record in every language. A document per language would be heavy and the copies could drift apart.

The language list is not hard-coded in the Studio. [languages.ts](../../apps/studio/src/languages.ts) derives it from the `LOCALES` registry in `@portfolio/contracts`. Adding a locale there adds it to the Studio and the site.

### 4. `structure.ts`: the sidebar

[structure.ts](../../apps/studio/src/structure.ts) replaces Sanity's default flat list of types with a custom sidebar. Site settings is a singleton. About, Case studies and Posts get per-language lists ("Posts (EN)", "Posts (DE)"). Dividers separate groups. The `LISTED` set prevents a type appearing twice, and any type you add later still shows up at the bottom automatically.

### 5. `packages/sanity`: the adapter

This is the code that reads from Sanity for the website, in three layers:

1. **[queries.ts](../../packages/sanity/src/queries.ts)** holds GROQ queries only, with no logic. They are wrapped in `defineQuery` so TypeGen can generate exact result types into `sanity.types.ts`.
2. **[mappers.ts](../../packages/sanity/src/mappers.ts)** turns raw Sanity results into your own record shapes. It picks the right language and falls back to English when a translation is missing.
3. **[source.ts](../../packages/sanity/src/source.ts)** and **[index.ts](../../packages/sanity/src/index.ts)** wire it together. `createSanityContentService()` returns a `ContentService`, the same interface the fixtures implement.

Other pieces:

- `images.ts` builds image URLs and blur placeholders.
- `seed.ts` builds the documents for seeding.
- `next.ts` is an empty placeholder for Phase 3's preview glue.
- `sanity.types.ts` is generated. Never edit it by hand.

### 6. `packages/content-core` and the fixtures refactor

Logic that shouldn't depend on any CMS (fallback rules, numbering, reading time) moved into `content-core`. Both the fixtures and Sanity now use it, which is why `packages/fixtures/src/service.ts` shrank a lot. Storybook and the real site therefore behave the same way.

### 7. The seed script

[scripts/seed.ts](../../apps/studio/scripts/seed.ts) fills the dataset from the existing fixtures, so nothing was retyped by hand.

- It runs through `sanity exec --with-user-token`, using your `sanity login`, so no write token is needed.
- It is **idempotent**: documents are matched by natural keys (slug, language, and so on) and only rewritten if the content changed. You can run it repeatedly.
- It refuses to write sample posts to `production`, and has a `--dry-run` flag.
- The German machine translations are seeded only with `--with-translations`.

### 8. Wiring in `apps/web`

[content.ts](../../apps/web/src/lib/content.ts) now picks the Sanity service when the env vars are set. Otherwise it uses fixtures, or you can force them with `CONTENT_SOURCE=fixtures`. [turbo.json](../../turbo.json) lists the env vars so Turborepo's cache rebuilds when they change.

---

## Part 3: Why this way and not another?

| Decision                              | Alternative                         | Why this one                                                                                | Trade-off                          |
| ------------------------------------- | ----------------------------------- | ------------------------------------------------------------------------------------------- | ---------------------------------- |
| Studio is its own app (`apps/studio`) | Embed the Studio in the Next.js app | Deploys and upgrades independently; a Studio problem can't break the site                   | One more app to maintain           |
| `ContentService` adapter interface    | Run GROQ queries inside pages       | Pages never import Sanity, so swapping CMS means rewriting one package (ESLint enforces it) | An extra layer of mapping code     |
| Queries separate from mappers         | Query and transform in one function | Queries stay plain and type-checkable by TypeGen; logic is unit-testable                    | More files                         |
| Two translation plugins               | One approach for everything         | Each fits its content (long documents vs short labels)                                      | Editors learn two models           |
| TypeGen for types                     | Hand-written types                  | A query that doesn't match the schema becomes a compile error                               | A generate step to remember        |
| Seed from fixtures                    | Type content into the Studio        | Storybook and CMS start identical; the dataset can be rebuilt any time                      | Seed script to maintain            |
| Locale registry in `contracts`        | Hard-code languages in each place   | Add a locale in one place                                                                   | Everything depends on that package |

---

## Glossary

- **Studio**: Sanity's editing UI (a React app).
- **Content Lake**: Sanity's hosted content database.
- **Dataset**: a named collection of documents inside a project. Here: `development` (and `production`).
- **Document**: one piece of content with a type, such as a post.
- **Singleton**: a document type with exactly one instance, such as site settings.
- **Reference**: a link from one document to another.
- **GROQ**: Sanity's query language. Open the Vision tool in the Studio to try it.
- **TypeGen**: generates TypeScript types from your schema and GROQ queries.
- **Portable Text**: Sanity's structured rich-text format.
- **Perspective**: whether a query sees published content or drafts.
- **apiVersion**: a date that pins the API's behaviour.
- **Seeding**: filling a dataset with initial content from a script.
- **DTO**: a plain data shape passed between layers (defined in `@portfolio/contracts`).
- **Fixture**: hard-coded sample content used before the CMS existed.

## Suggested study order

1. Run `pnpm --filter studio dev` and click around. Every form you see comes from a schema file.
2. Read [shared.ts](../../apps/studio/src/schemaTypes/shared.ts), then [post.ts](../../apps/studio/src/schemaTypes/documents/post.ts) and [project.ts](../../apps/studio/src/schemaTypes/documents/project.ts).
3. Read [languages.ts](../../apps/studio/src/languages.ts) and [locales.ts](../../packages/contracts/src/locales.ts).
4. Read [queries.ts](../../packages/sanity/src/queries.ts), then one mapper in [mappers.ts](../../packages/sanity/src/mappers.ts).
5. Try a query in the Studio's Vision tool, for example `*[_type == "project"]{title, "slug": slug.current}`.

## Caveats

- This note was written from reading the schemas, config, adapter entry points and seed script. The mapper internals, tests and the case-study block schemas were not studied line by line.
- `packages/sanity/src/sanity.types.ts` is generated. Regenerate it with `pnpm --filter studio typegen`.
- The `.agents/skills/sanity-best-practices` files are reference docs for AI tools, not app code.
- The German content is a machine draft pending your review.
- Preview and Visual Editing are configured in the Studio but inert until Phase 3 adds the web routes.
