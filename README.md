# damilolabada.com

Personal portfolio: work, case studies, about and a blog, in English and German. A pnpm + Turborepo monorepo with a Next.js site, a Sanity Studio and shared packages.

## How it fits together

```text
apps/studio (Sanity Studio) ──writes──► Sanity Content Lake
                                              │ GROQ
packages/sanity ── adapter: queries → mappers ┘
packages/fixtures ── static content (offline, Storybook, CI)
        │  both implement ContentService (@portfolio/contracts)
        ▼
packages/content-core ── shared content rules (numbering, fallbacks, counts)
        ▼
apps/web ── src/lib/content.ts picks the adapter ─► [locale] routes ─► @portfolio/ui templates
```

| Path                     | What it is                                                                                                                             |
| ------------------------ | -------------------------------------------------------------------------------------------------------------------------------------- |
| `apps/web`               | Next.js 16 site: `[locale]` routes, metadata, draft mode, revalidation webhook                                                         |
| `apps/studio`            | Sanity Studio (schemas, Presentation tool) and the seed script                                                                         |
| `packages/ui`            | Every component and page template; Storybook lives here                                                                                |
| `packages/contracts`     | DTO schemas (zod), the `ContentService` / `PreviewAdapter` interfaces, the locale registry                                             |
| `packages/content-core`  | CMS-neutral content rules shared by both adapters                                                                                      |
| `packages/sanity`        | Sanity adapter. Root export is framework-agnostic; `@portfolio/sanity/next` adds draft mode, cache tags and the visual-editing overlay |
| `packages/fixtures`      | Handoff content as typed data (EN + DE draft)                                                                                          |
| `packages/i18n`          | UI string dictionaries                                                                                                                 |
| `packages/design-tokens` | Colours, type scale, motion as CSS variables and Tailwind utilities                                                                    |
| `packages/utils`         | Pure helpers (formatting, `cn`, placeholders)                                                                                          |

Rules worth knowing:

- Pages never import a CMS package. `apps/web/src/lib/content.ts` is the only module that does (ESLint enforces it), so swapping CMS means replacing one adapter.
- `packages/ui` never imports Next. The app injects `next/link` and `next/image` through `UiAdapterProvider`.
- Locales come from `LOCALES` in `packages/contracts/src/locales.ts`. Routes, hreflang, the sitemap, Studio languages and the language switch all derive from it.

## Getting started

Requires Node 24+ and pnpm 11.

```sh
pnpm install
pnpm --filter web dev            # http://localhost:3000 (redirects to /en or /de)
pnpm --filter @portfolio/ui storybook   # http://localhost:6006
pnpm --filter studio dev         # http://localhost:3333
```

Without Sanity env vars the site runs on the fixtures. Force them anytime with `CONTENT_SOURCE=fixtures`.

## Environment

`apps/web/.env.local` (see `.env.example`):

| Variable                                                      | Needed for                                                                                   |
| ------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `NEXT_PUBLIC_SANITY_PROJECT_ID`, `NEXT_PUBLIC_SANITY_DATASET` | Reading from Sanity (otherwise fixtures)                                                     |
| `SANITY_API_READ_TOKEN`                                       | Private datasets (`development`) and drafts in draft mode. Viewer role, server-only          |
| `SANITY_REVALIDATE_SECRET`                                    | Verifying the publish webhook                                                                |
| `NEXT_PUBLIC_SANITY_STUDIO_URL`                               | "Open in Studio" links from the edit overlay                                                 |
| `NEXT_PUBLIC_SITE_URL`                                        | Canonical URLs, sitemap, share links (default: the Vercel URL, then `http://localhost:3000`) |
| `CONTENT_SOURCE=fixtures`                                     | Forcing static content                                                                       |

`apps/studio/.env.local`: `SANITY_STUDIO_PROJECT_ID`, `SANITY_STUDIO_DATASET` (the CLI default for typegen and seed), and `SANITY_STUDIO_PREVIEW_URL` / `SANITY_STUDIO_PREVIEW_URL_PRODUCTION` (the site origin each workspace's Presentation tool previews).

The Studio has two workspaces, `/production` and `/development`, one per dataset. Use the switcher at the top left.

## Content

```sh
pnpm --filter studio typegen     # regenerate packages/sanity/src/sanity.types.ts
pnpm --filter studio seed --dataset development --include-samples --with-translations
pnpm --filter studio seed --dataset production
```

The seed is idempotent and refuses sample posts on `production`. Add `--dry-run` to preview.

## Testing preview and revalidation locally

Everything except Vercel itself runs against the `development` dataset:

1. Fill in `apps/web/.env.local`. Use `openssl rand -hex 32` for `SANITY_REVALIDATE_SECRET`: it's a secret you choose, and later you paste the same value into the Sanity webhook. Run `npx sanity cors add http://localhost:3000 --credentials` once.
2. **Draft mode:** run `pnpm --filter web dev` and `pnpm --filter studio dev`, then open the Studio's Presentation tool. Click a card or section to open its document; unpublished edits show in the preview only.
3. **Caching and the webhook:** run `pnpm --filter web build && pnpm --filter web start`. Publish a change, and the page stays cached. Sanity can't reach `localhost`, so send a signed fake webhook with `pnpm --filter web revalidate:local` (expect `200`), then reload.

## Deploying

Once per environment, in this order:

1. **Production dataset.** In sanity.io/manage → Datasets, create `production`. Seed it with `pnpm --filter studio seed --dataset production --with-translations` (run with `--dry-run` first).
2. **Vercel.** Create a project with root directory `apps/web` and set the env vars above:
   - `NEXT_PUBLIC_SANITY_DATASET=production`
   - `NEXT_PUBLIC_SITE_URL=https://www.damilolabada.com`
   - `NEXT_PUBLIC_SANITY_STUDIO_URL=https://<host>.sanity.studio/production`
   - a fresh `SANITY_REVALIDATE_SECRET`

   Preview deployments can point at `development`.

3. **Sanity (Manage → API):**
   - add the site origin to **CORS origins** with credentials
   - add a **webhook**: URL `https://www.damilolabada.com/api/revalidate`, dataset `production`, trigger on create / update / delete, HTTP POST, and the same secret as `SANITY_REVALIDATE_SECRET`
   - create a robot token with the **Deploy Studio** role
4. **Studio.**
   - Deploy once by hand with `pnpm --filter studio deploy` and pick the hostname.
   - Paste the `appId` it prints into `deployment` in `apps/studio/sanity.cli.ts`, so later deploys don't prompt.
5. **GitHub (Settings → Secrets and variables → Actions):**
   - secret `SANITY_AUTH_TOKEN`: the robot token
   - variable `SANITY_STUDIO_PREVIEW_URL_PRODUCTION`: the site URL

### CI/CD

- `.github/workflows/ci.yml` runs lint, types, tests and build on every PR and every push to `main`. It needs no secrets, because without Sanity env vars the site builds from fixtures.
- `.github/workflows/deploy-studio.yml` redeploys the Studio when `apps/studio`, `packages/contracts` or the lockfile change on `main`. It can also be run by hand.
- Vercel deploys `apps/web` from its Git integration.

Published pages are static. A publish calls the webhook, which expires the `sanity` cache tag, and the next visit renders fresh content. The Presentation tool turns on draft mode (`/api/draft-mode/enable`), which shows drafts with click-to-edit overlays.

## Checks

```sh
pnpm lint && pnpm check-types && pnpm test && pnpm build
node damilolabada-redesign-handoff/scripts/visual-diff.mjs --base http://localhost:3000
```

The pre-push hook runs lint, types and tests.
