# Project history and Sanity: a learning note

This note explains how the portfolio was built, commit by commit (grouped by phase). It then goes deep on two steps: the commit that introduced Sanity (Part 2), and Phase 3, which turned `apps/web` into the real site (Part 3).

Read it top to bottom once. After that, use the glossary and the study order at the end.

**The project in one paragraph.** This is a monorepo (many packages in one repo, managed with pnpm and Turborepo). `packages/ui` holds the visual components, previewed in Storybook. `packages/contracts` defines the shapes of data (DTOs) the UI expects. Content comes from Sanity, a CMS edited in the browser, or from hard-coded TypeScript files ("fixtures") when Sanity isn't configured. `apps/web` is the Next.js site. It serves every page under a language prefix (`/en/work`, `/de/work`), and it can show unpublished drafts to an editor inside the Sanity Studio.

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

### Phase G: Readiness check before Phase 3 (2026-10-25)

Before building the site, we checked that the earlier phases were really finished. Starting on a shaky base would mean debugging three layers at once.

- **What was checked:**
  - Phase 1 (components and Storybook) was marked done on 2026-09-27.
  - Phase 2 (Studio and adapter) was built, and seeded into the `development` dataset with German translations, on 2026-10-21.
  - `pnpm check-types` and `pnpm test` were green.
- **Which plan to follow:** the plan has two copies. An older copy, attached in chat, still mentioned `packages/content`, `editTarget` and fixed document ids. The copy in the repo (`damilolabada-redesign-handoff/IMPLEMENTATION_PLAN.md`) has later amendments, so it wins. Its "Amendment: localisation and CMS decoupling" section overrides the original Phase 3 text where they differ.
- **Decisions taken:**
  - host on **Vercel**
  - build **all of Phase 3 in one pass**, including preview and the publish webhook
  - work on the branch `feat/phase-3-web`
- **What was missing:** `apps/web/.env.local` had the Sanity token but not the project ID and dataset, so the site still served fixtures. That's a setting, not code, so it didn't block the work.
- **Why this way:** a short checklist (status notes, green checks, which document is current) is cheaper than finding out halfway through that a dependency isn't done.

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
  - `presentationTool`: a live preview of the site inside the Studio. The route it needs in `apps/web` arrived in Phase 3 (Part 3, section 6).
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
- `next.ts` was an empty placeholder in this commit; Phase 3 filled it with the preview glue (see Part 3, section 6).
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

## Part 3: Phase 3 in depth: `apps/web` (branch `feat/phase-3-web`)

Phase 3 connects the pieces. The ui templates already existed (Storybook), and so did the content services (fixtures and Sanity). Phase 3 adds the Next.js routes that fetch content and render templates, plus everything a real website needs: languages, SEO, caching, and a way for an editor to preview drafts.

### The request flow

```text
browser ──► proxy.ts ── no /en or /de? redirect using Accept-Language
               │
               ▼
        app/[locale]/…/page.tsx   (thin: resolve locale → fetch DTOs → render template)
               │
               ▼
        src/lib/content.ts  ── the only file that knows the CMS
          │                      │
   fixtures (no env)      @portfolio/sanity/next
                            ├─ published reads: cached, tag "sanity"
                            └─ draft mode: drafts + click-to-edit attributes
               │
               ▼
        @portfolio/ui templates (HomePage, WorkPage, …)

Sanity publish ──webhook──► /api/revalidate ── expires tag "sanity"
Studio Presentation ──────► /api/draft-mode/enable ── sets the draft cookie
```

### 1. Locale routing: `proxy.ts` and `app/[locale]`

- **What:** every page lives under a language prefix: `/en/work`, `/de/work`. [proxy.ts](../../apps/web/proxy.ts) runs before each request. If the path has no known locale, it redirects to one picked from the browser's `Accept-Language` header (German browsers go to `/de`, everyone else to `/en`).
- **How:**
  - `proxy.ts` is Next 16's new name for middleware.
  - The [layout](../../apps/web/app/[locale]/layout.tsx) sits inside `app/[locale]/`, so `locale` reaches every page as a route parameter.
  - `generateStaticParams` lists the locales from `LOCALES`, and `dynamicParams = false` makes any other value a 404.
- **Why every locale is prefixed, even English:** a URL then always says which language it is. Caching and hreflang stay simple, and the language switch only swaps the prefix (slugs are shared between languages).
- **Unknown pages:** `app/[locale]/[...rest]/page.tsx` catches unmatched paths and calls `notFound()`, so the localised [not-found.tsx](../../apps/web/app/[locale]/not-found.tsx) renders inside the site chrome. A 404 page doesn't receive route parameters, so it reads the locale with `next/root-params`, a Next 16 feature for exactly this.

### 2. The layout, providers and theme

- **What:** [providers.tsx](../../apps/web/src/components/providers.tsx) is a small client component that wraps the page in:
  - **next-themes**, which remembers light or dark mode and runs a tiny script before the page paints, so there's no flash of the wrong theme
  - a **bridge** that passes next-themes' state into the ui's `ThemeControllerProvider`, so the existing `ThemeToggle` controls it
  - **`UiAdapterProvider`**, which hands `next/link` and `next/image` to the ui package
- **Why the bridge:** `packages/ui` must not depend on Next or next-themes; that's how Storybook can render it. The ui defines a tiny interface (`isDark`, `toggle`), and the app plugs a real implementation into it.
- **A detail worth knowing:** on the server, the stored theme is unknown. The bridge reports "light" until hydration finishes, which avoids a hydration mismatch on the toggle's `aria-pressed`.

### 3. Thin routes

Each page file does three things: check the locale, fetch DTOs from `content`, and render one template. For example, [work/page.tsx](../../apps/web/app/[locale]/work/page.tsx):

```tsx
const locale = resolveLocale((await params).locale);
const [chrome, work] = await Promise.all([
  pageChrome(locale, "/work"),
  content.getWorkPage(locale),
]);
return <WorkPage {...chrome} work={work} />;
```

- [page.ts](../../apps/web/src/lib/page.ts) holds the two shared helpers: `resolveLocale` and `pageChrome` (site settings, dictionary and language-switch URLs).
- **Static generation:** `generateStaticParams` in `work/[slug]` and `blog/[slug]` asks `content.getRoutes()` for the slugs, so every case study and post is pre-rendered at build time. The blog index is the one dynamic page, because it reads `?category=`.
- **No-JS filter:** the category filter is plain links (`?category=cycling`) filtered on the server, so it works without JavaScript.
- **`cache()`:** `generateMetadata` and the page both need the same post. Wrapping the fetch in React's `cache()` means one request serves both.

### 4. Server-side code highlighting

[highlight.ts](../../apps/web/src/lib/highlight.ts) runs Shiki on the server for code blocks that come without pre-rendered HTML (Sanity's). Shiki normally outputs inline colours from a theme. Instead, we read each token's scope (comment, string, keyword, heading) and output only the design's three classes, `.k`, `.s` and `.c`. Colours then come from the design tokens, so they follow light and dark mode.

### 5. SEO and metadata

[seo.ts](../../apps/web/src/lib/seo.ts) builds each page's metadata in one place:

- **Title template:** `%s — Damilola Bada`. The home page sets its own full title.
- **hreflang:** tells search engines "this page exists in these languages". It lists only languages that actually have the content, plus `x-default` (English).
- **Canonical fallback:** if a German page shows English content (no translation yet), its canonical URL points to the English page, so search engines don't index duplicates.
- **Open Graph:**
  - a post or case study with a cover image shares that image
  - other pages get a generated brand card from [/api/og](../../apps/web/app/api/og/route.tsx)
  - posts add `article:published_time`
- **Sitemap and robots:** [sitemap.ts](../../apps/web/app/sitemap.ts) lists every page in every language with its alternates. [robots.ts](../../apps/web/app/robots.ts) points crawlers to it.

The ui templates also wrap fallback-language content in `<div lang="en">` (`ContentLang` in [Pages.tsx](../../packages/ui/src/templates/pages/Pages.tsx)). Screen readers and hyphenation then use the right language, even on a `/de` page.

### 6. `@portfolio/sanity/next`: preview and caching

[next.ts](../../packages/sanity/src/next.ts) fills the placeholder from Phase 2. It returns two things.

**`content`: a draft-aware `ContentService`.** Every method first checks `draftMode()`:

- **Normal visitors** get published content.
  - Each fetch carries `{ next: { tags: ["sanity"] } }`, so Next caches it until that tag is revalidated.
  - These reads skip Sanity's API CDN: Next already caches them, and after a publish the CDN could briefly serve the old copy.
- **Editors in draft mode** get the `drafts` perspective (unpublished changes), uncached, plus `data-sanity` attributes. Those attributes let the Studio's overlay know which document each card or section came from.

**`preview`: the `PreviewAdapter`** from `@portfolio/contracts`:

- `enable`: Sanity's Presentation tool opens `/api/draft-mode/enable` with a one-time secret. We validate it with Sanity, turn on draft mode (a cookie), and redirect to the page. Inside the Studio the site runs in a cross-site iframe, so the cookie is set `SameSite=None; Partitioned`, or browsers would drop it.
- `disable`: turns draft mode off.
- `revalidate`: Sanity calls `/api/revalidate` after each publish. We check the webhook's signature (proof that Sanity sent it), then expire the `sanity` tag. The next visitor gets a freshly rendered page.
- `Overlay`: the click-to-edit layer, loaded only in the browser and only in draft mode. It also keeps the Studio's document panel in sync with the page you're viewing.

The [route files](../../apps/web/app/api/) are one line each (`export const GET = preview.enable`), so no Sanity code lives in `app/`.

**Why no stega:** Sanity can hide invisible characters inside every string ("stega") so any text becomes clickable. But `content-core` inspects strings, for example splitting "Passe." into a title and a dot, and the hidden characters would break that. So click-to-edit works on cards, sections, the about block and the post header (via `data-sanity`), not on every single word.

**Why not `next-sanity`:** it's the usual package, but it requires the full `sanity` Studio package as a peer, which would be installed into the website. We use the same building blocks it uses (`@sanity/visual-editing`, `@sanity/preview-url-secret`, `@sanity/webhook`) directly. That's about 150 lines in `next.ts` and `overlay-client.tsx`.

### 7. Two small fixes found by testing

- **The oversized arrow.** In the header, "Let's talk →" drew its arrow too large. Geist Mono has no → glyph. Next's font loader adds a fallback face (Arial scaled to 135% to match Geist's metrics), and the arrow came from that face. The layout now sets the mono variable without the fallback face, so the arrow comes from the system monospace font, as in the design. (`adjustFontFallback: false` should do this, but Turbopack currently ignores it.)
- **Mobile performance.** Lighthouse scored 86–89 because the hero headline (the largest element) waited for its font while three fonts downloaded at once. Preloading only Bricolage, the headline font, brought performance to 90–92.

---

## Part 4: Why this way and not another?

| Decision                              | Alternative                         | Why this one                                                                                | Trade-off                            |
| ------------------------------------- | ----------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------ |
| Studio is its own app (`apps/studio`) | Embed the Studio in the Next.js app | Deploys and upgrades independently; a Studio problem can't break the site                   | One more app to maintain             |
| `ContentService` adapter interface    | Run GROQ queries inside pages       | Pages never import Sanity, so swapping CMS means rewriting one package (ESLint enforces it) | An extra layer of mapping code       |
| Queries separate from mappers         | Query and transform in one function | Queries stay plain and type-checkable by TypeGen; logic is unit-testable                    | More files                           |
| Two translation plugins               | One approach for everything         | Each fits its content (long documents vs short labels)                                      | Editors learn two models             |
| TypeGen for types                     | Hand-written types                  | A query that doesn't match the schema becomes a compile error                               | A generate step to remember          |
| Seed from fixtures                    | Type content into the Studio        | Storybook and CMS start identical; the dataset can be rebuilt any time                      | Seed script to maintain              |
| Locale registry in `contracts`        | Hard-code languages in each place   | Add a locale in one place                                                                   | Everything depends on that package   |
| Prefix every locale (`/en/…`)         | Unprefixed default language         | Every URL names its language; the switch only swaps the prefix                              | `/` always redirects once            |
| Adapter provides the route handlers   | Sanity code in `app/api/*`          | `app/` stays CMS-neutral; a new CMS brings its own handlers                                 | One more indirection to follow       |
| One cache tag + webhook               | Time-based revalidation             | Edits appear on the next visit, not after a timer                                           | Every publish refreshes every page   |
| next-themes bridged into the ui       | ui stores the theme itself          | No-flash script and persistence for free; Storybook keeps working without it                | A small bridge component             |
| `data-sanity` attributes, no stega    | Stega on every string               | Content logic keeps working on clean strings                                                | Only blocks are clickable, not words |

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
- **Proxy**: Next 16's name for middleware; code that runs before a request reaches a page.
- **`generateStaticParams`**: tells Next which dynamic pages (locales, slugs) to build ahead of time.
- **Draft mode**: a cookie that makes Next skip its caches and render fresh, unpublished content for one browser.
- **Visual Editing / Presentation tool**: the Studio view that shows the site in an iframe with click-to-edit overlays.
- **Stega**: invisible characters Sanity can hide in strings to map text back to its field.
- **ISR / cache tag**: Next keeps rendered pages and fetched data; a tag names a group of cached data that can be expired at once.
- **Webhook**: an HTTP request Sanity sends to the site when content changes.
- **hreflang**: a link tag telling search engines which URL holds the same page in another language.
- **Canonical URL**: the one URL search engines should index when several show the same content.

## Suggested study order

1. Run `pnpm --filter studio dev` and click around. Every form you see comes from a schema file.
2. Read [shared.ts](../../apps/studio/src/schemaTypes/shared.ts), then [post.ts](../../apps/studio/src/schemaTypes/documents/post.ts) and [project.ts](../../apps/studio/src/schemaTypes/documents/project.ts).
3. Read [languages.ts](../../apps/studio/src/languages.ts) and [locales.ts](../../packages/contracts/src/locales.ts).
4. Read [queries.ts](../../packages/sanity/src/queries.ts), then one mapper in [mappers.ts](../../packages/sanity/src/mappers.ts).
5. Try a query in the Studio's Vision tool, for example `*[_type == "project"]{title, "slug": slug.current}`.
6. Run `pnpm --filter web dev`, open `http://localhost:3000`, and watch the redirect to `/en` or `/de`. Switch language on a case study and note that only the prefix changes.
7. Read [proxy.ts](../../apps/web/proxy.ts), then [layout.tsx](../../apps/web/app/[locale]/layout.tsx), then one page such as [blog/[slug]/page.tsx](../../apps/web/app/[locale]/blog/[slug]/page.tsx).
8. Read [content.ts](../../apps/web/src/lib/content.ts) and [next.ts](../../packages/sanity/src/next.ts) together: that's the whole CMS boundary.
9. Open the Studio's Presentation tool and click a project card: draft mode turns on and the card's document opens.

## Caveats

- This note was written from reading the schemas, config, adapter entry points and seed script. The mapper internals, tests and the case-study block schemas were not studied line by line.
- `packages/sanity/src/sanity.types.ts` is generated. Regenerate it with `pnpm --filter studio typegen`.
- The `.agents/skills/sanity-best-practices` files are reference docs for AI tools, not app code.
- The German content is a machine draft pending your review.
- Part 3 describes code on the `feat/phase-3-web` branch, which isn't committed yet, so it has no commit hash.
- **Not verified automatically in Phase 3:**
  - the full draft-mode round trip in the Presentation tool (it needs a logged-in Studio session)
  - a keyboard-only walkthrough and a screen-reader pass
  - Lighthouse on the real Vercel deployment (the 90–92 scores are from a local production build)
