import type { Category, Locale, Post, PostCard } from "@portfolio/contracts";

type CategoryKey = "engineering" | "photography";

const categories: Record<Locale, Record<CategoryKey, Category>> = {
  en: {
    engineering: {
      slug: "engineering",
      title: "Engineering",
      description: "Notes on building software.",
      href: "/en/blog/category/engineering",
    },
    photography: {
      slug: "photography",
      title: "Photography",
      description: "Photo essays from trips and walks.",
      href: "/en/blog/category/photography",
    },
  },
  de: {
    engineering: {
      slug: "engineering",
      title: "Engineering",
      description: "Notizen zum Software-Bau.",
      href: "/de/blog/category/engineering",
    },
    photography: {
      slug: "photography",
      title: "Fotografie",
      description: "Fotoessays von Reisen und Spaziergängen.",
      href: "/de/blog/category/photography",
    },
  },
};

const postSeo = (
  locale: Locale,
  title: string,
  description: string,
  slug: string,
) => ({
  title,
  description,
  canonicalUrl: `https://damilolabada.com/${locale}/blog/${slug}`,
  noIndex: false,
  alternates: [
    { locale: "en" as const, href: `https://damilolabada.com/en/blog/${slug}` },
    { locale: "de" as const, href: `https://damilolabada.com/de/blog/${slug}` },
  ],
});

function cover(seed: string, alt: string) {
  return {
    src: `https://picsum.photos/seed/${seed}/1600/900`,
    width: 1600,
    height: 900,
    alt,
    lqip: "data:image/jpeg;base64,",
  };
}

function photo(
  seed: string,
  alt: string,
  exif: {
    camera: string;
    lens: string;
    focalLength: string;
    aperture: string;
    shutterSpeed: string;
    iso: number;
    takenAt: string;
  },
) {
  return {
    src: `https://picsum.photos/seed/${seed}/1600/1067`,
    width: 1600,
    height: 1067,
    alt,
    lqip: "data:image/jpeg;base64,",
    exif,
  };
}

/** Picks the localized string for the active locale. */
function t(locale: Locale, en: string, de: string) {
  return locale === "de" ? de : en;
}

function para(key: string, en: string, de: string, locale: Locale) {
  return {
    _type: "block" as const,
    _key: key,
    style: "normal" as const,
    markDefs: [],
    children: [
      { _type: "span" as const, _key: `${key}-span`, text: t(locale, en, de) },
    ],
  };
}

function heading(
  key: string,
  level: "h2" | "h3",
  en: string,
  de: string,
  locale: Locale,
) {
  return {
    _type: "block" as const,
    _key: key,
    style: level,
    markDefs: [],
    children: [
      { _type: "span" as const, _key: `${key}-span`, text: t(locale, en, de) },
    ],
  };
}

function bullet(key: string, en: string, de: string, locale: Locale) {
  return {
    _type: "block" as const,
    _key: key,
    style: "normal" as const,
    listItem: "bullet" as const,
    level: 1,
    markDefs: [],
    children: [
      { _type: "span" as const, _key: `${key}-span`, text: t(locale, en, de) },
    ],
  };
}

function callout(
  key: string,
  tone: "info" | "tip" | "warning",
  en: string,
  de: string,
  locale: Locale,
) {
  return {
    _type: "callout" as const,
    _key: key,
    tone,
    body: [para(`${key}-body`, en, de, locale)],
  };
}

function code(
  key: string,
  language: string,
  code: string,
  filename: string | undefined,
  highlightedLines: number[] = [],
) {
  return {
    _type: "code" as const,
    _key: key,
    language,
    code,
    filename,
    highlightedLines,
  };
}

function figureBlock(
  key: string,
  seed: string,
  alt: string,
  size: "inline" | "wide" | "fullBleed",
  exif?: Parameters<typeof photo>[2],
) {
  return {
    _type: "figure" as const,
    _key: key,
    size,
    showExif: Boolean(exif),
    image: exif ? photo(seed, alt, exif) : cover(seed, alt),
  };
}

function galleryBlock(
  key: string,
  images: ReturnType<typeof photo>[],
  layout: "grid" | "masonry" | "carousel" = "grid",
) {
  return {
    _type: "gallery" as const,
    _key: key,
    layout,
    showExif: true,
    images,
  };
}

function buildPosts(locale: Locale): Post[] {
  const cats = categories[locale];

  const posts: Post[] = [];

  // 1. organizing-a-frontend-monorepo — standard / engineering
  {
    const slug = "organizing-a-frontend-monorepo";
    const title = t(
      locale,
      "Organizing a frontend monorepo",
      "Ein Frontend-Monorepo organisieren",
    );
    const body = [
      para(
        "intro",
        "A short introduction paragraph on why this project lives in a single pnpm + Turborepo workspace instead of several standalone repos.",
        "Ein kurzer Einstieg dazu, warum dieses Projekt in einem einzigen pnpm- und Turborepo-Workspace lebt statt in mehreren eigenständigen Repositories.",
        locale,
      ),
      heading(
        "h2-packages",
        "h2",
        "Splitting into packages",
        "Aufteilung in Pakete",
        locale,
      ),
      para(
        "packages-p1",
        "Design tokens, UI primitives, content contracts, and fixtures each live in their own workspace package, so apps/web only ever imports finished, tested building blocks.",
        "Design-Tokens, UI-Primitives, Content-Contracts und Fixtures leben jeweils in einem eigenen Workspace-Paket, sodass apps/web nur fertige, getestete Bausteine importiert.",
        locale,
      ),
      bullet(
        "li-ui",
        "packages/ui for framework-agnostic primitives",
        "packages/ui für framework-unabhängige Primitives",
        locale,
      ),
      bullet(
        "li-web",
        "apps/web for routing, layouts, and translated copy",
        "apps/web für Routing, Layouts und übersetzte Inhalte",
        locale,
      ),
      callout(
        "callout-tip",
        "tip",
        "Turborepo's remote cache means a clean install rarely re-runs a build step that already ran on CI.",
        "Der Remote-Cache von Turborepo sorgt dafür, dass eine frische Installation selten einen Build-Schritt erneut ausführt, der bereits in der CI lief.",
        locale,
      ),
    ];
    posts.push({
      id: "post-monorepo",
      slug,
      href: `/${locale}/blog/${slug}`,
      title,
      excerpt: t(
        locale,
        "How I split packages and apps in this portfolio project.",
        "Wie ich Pakete und Apps in diesem Portfolio-Projekt aufgeteilt habe.",
      ),
      cover: cover("monorepo", "A laptop showing a code editor on a desk"),
      categories: [cats.engineering],
      publishedAt: "2026-01-15T09:00:00.000Z",
      updatedAt: "2026-02-01T09:00:00.000Z",
      readingTimeMinutes: 6,
      layout: "standard",
      body,
      toc: [
        {
          id: "h2-packages",
          text: t(locale, "Splitting into packages", "Aufteilung in Pakete"),
          level: 2,
        },
      ],
      seo: postSeo(
        locale,
        title,
        t(
          locale,
          "How I split packages and apps in this portfolio project.",
          "Wie ich Pakete und Apps in diesem Portfolio-Projekt aufgeteilt habe.",
        ),
        slug,
      ),
      related: [],
    });
  }

  // 2. designing-a-type-safe-content-layer — standard / engineering
  {
    const slug = "designing-a-type-safe-content-layer";
    const title = t(
      locale,
      "Designing a type-safe content layer",
      "Eine typsichere Content-Schicht entwerfen",
    );
    posts.push({
      id: "post-content-layer",
      slug,
      href: `/${locale}/blog/${slug}`,
      title,
      excerpt: t(
        locale,
        "Zod schemas as the contract between the CMS and every component that renders content.",
        "Zod-Schemas als Vertrag zwischen dem CMS und jeder Komponente, die Inhalte rendert.",
      ),
      cover: cover(
        "content-layer",
        "A schema diagram sketched on a whiteboard",
      ),
      categories: [cats.engineering],
      publishedAt: "2025-11-03T09:00:00.000Z",
      readingTimeMinutes: 7,
      layout: "standard",
      body: [
        para(
          "intro",
          "Every view model the frontend touches — a post, a project, the homepage — is defined once as a zod schema in @portfolio/contracts, and nothing downstream trusts unvalidated data.",
          "Jedes View-Model, mit dem das Frontend arbeitet — ein Beitrag, ein Projekt, die Startseite — wird einmal als Zod-Schema in @portfolio/contracts definiert, und nichts danach vertraut ungeprüften Daten.",
          locale,
        ),
        heading("h2-why-zod", "h2", "Why zod", "Warum Zod", locale),
        para(
          "why-zod-p1",
          "A schema is both the TypeScript type and the runtime guard, so a malformed draft document throws a clear validation error instead of quietly rendering broken markup.",
          "Ein Schema ist gleichzeitig der TypeScript-Typ und die Laufzeitprüfung, sodass ein fehlerhaftes Entwurfsdokument einen klaren Validierungsfehler wirft, statt still kaputtes Markup zu rendern.",
          locale,
        ),
        heading(
          "h3-nested",
          "h3",
          "Nested schemas",
          "Verschachtelte Schemas",
          locale,
        ),
        para(
          "nested-p1",
          "Rich text, images, and SEO metadata are each their own schema, reused across Post, Project, and LegalPage so the shape only has to be right once.",
          "Rich Text, Bilder und SEO-Metadaten sind jeweils eigene Schemas, die in Post, Project und LegalPage wiederverwendet werden — die Form muss also nur einmal stimmen.",
          locale,
        ),
        bullet(
          "li-images",
          "ImageSchema carries a focal point and a blur placeholder",
          "ImageSchema enthält einen Fokuspunkt und einen Blur-Platzhalter",
          locale,
        ),
        bullet(
          "li-richtext",
          "RichTextSchema is Portable Text plus custom figure, gallery, code, and callout blocks",
          "RichTextSchema ist Portable Text plus eigene Figure-, Galerie-, Code- und Callout-Blöcke",
          locale,
        ),
        callout(
          "callout-tip",
          "tip",
          "A ContentService interface with two implementations (Sanity, and static fixtures) means every component was buildable before the CMS existed.",
          "Ein ContentService-Interface mit zwei Implementierungen (Sanity und statische Fixtures) bedeutet, dass jede Komponente gebaut werden konnte, bevor das CMS überhaupt existierte.",
          locale,
        ),
        heading(
          "h2-next",
          "h2",
          "What's next",
          "Was als Nächstes kommt",
          locale,
        ),
        para(
          "next-p1",
          "The Sanity-backed implementation slots in behind the same interface — no component in apps/web needs to change when the real CMS arrives.",
          "Die Sanity-gestützte Implementierung setzt hinter demselben Interface an — keine Komponente in apps/web muss sich ändern, wenn das echte CMS kommt.",
          locale,
        ),
      ],
      toc: [
        { id: "h2-why-zod", text: t(locale, "Why zod", "Warum Zod"), level: 2 },
        {
          id: "h3-nested",
          text: t(locale, "Nested schemas", "Verschachtelte Schemas"),
          level: 3,
        },
        {
          id: "h2-next",
          text: t(locale, "What's next", "Was als Nächstes kommt"),
          level: 2,
        },
      ],
      seo: postSeo(
        locale,
        title,
        t(
          locale,
          "Zod schemas as the contract between the CMS and every component that renders content.",
          "Zod-Schemas als Vertrag zwischen dem CMS und jeder Komponente, die Inhalte rendert.",
        ),
        slug,
      ),
      related: [],
    });
  }

  // 3. shipping-a-design-system-with-storybook — standard / engineering
  {
    const slug = "shipping-a-design-system-with-storybook";
    const title = t(
      locale,
      "Shipping a design system with Storybook",
      "Ein Design-System mit Storybook ausliefern",
    );
    posts.push({
      id: "post-design-system",
      slug,
      href: `/${locale}/blog/${slug}`,
      title,
      excerpt: t(
        locale,
        "Building every primitive in isolation before a single page exists.",
        "Jede Primitive isoliert bauen, bevor auch nur eine Seite existiert.",
      ),
      cover: cover(
        "design-system",
        "A grid of UI components in a Storybook sidebar",
      ),
      categories: [cats.engineering],
      publishedAt: "2025-10-10T09:00:00.000Z",
      readingTimeMinutes: 6,
      layout: "standard",
      body: [
        para(
          "intro",
          "packages/ui shipped 21 primitives — Button, Chip, Heading, and friends — each with a Storybook story before a single apps/web page consumed them.",
          "packages/ui lieferte 21 Primitives — Button, Chip, Heading und weitere — jeweils mit einer Storybook-Story, bevor auch nur eine apps/web-Seite sie nutzte.",
          locale,
        ),
        heading(
          "h2-workflow",
          "h2",
          "Component-first workflow",
          "Komponenten-first-Workflow",
          locale,
        ),
        para(
          "workflow-p1",
          "Building bottom-up caught prop-shape mistakes early: a Chip that only supported one size, an Icon set missing a name a molecule needed.",
          "Der Bottom-up-Aufbau deckte Fehler in der Prop-Form früh auf: ein Chip, der nur eine Größe unterstützte, ein Icon-Set ohne einen Namen, den eine Molekül-Komponente brauchte.",
          locale,
        ),
        bullet(
          "li-a11y",
          "Every interactive primitive ships with keyboard and screen-reader behavior verified in its story",
          "Jede interaktive Primitive wird mit geprüftem Tastatur- und Screenreader-Verhalten in ihrer Story ausgeliefert",
          locale,
        ),
        bullet(
          "li-variants",
          "class-variance-authority keeps size/tone/variant combinations exhaustive and typed",
          "class-variance-authority hält Size-/Tone-/Variant-Kombinationen vollständig und typisiert",
          locale,
        ),
        heading(
          "h2-upgrade",
          "h2",
          "Storybook v10 upgrade",
          "Storybook-v10-Upgrade",
          locale,
        ),
        para(
          "upgrade-p1",
          "Moving to @storybook/react-vite meant swapping the bundler assumptions Storybook made about JSX — more on that in a later post.",
          "Der Wechsel zu @storybook/react-vite bedeutete, die Bundler-Annahmen zu ändern, die Storybook über JSX traf — mehr dazu in einem späteren Beitrag.",
          locale,
        ),
        callout(
          "callout-info",
          "info",
          "autodocs generates a props table straight from each component's TypeScript interface — no manual documentation to keep in sync.",
          "autodocs generiert eine Props-Tabelle direkt aus dem TypeScript-Interface jeder Komponente — keine manuelle Dokumentation, die synchron gehalten werden muss.",
          locale,
        ),
      ],
      toc: [
        {
          id: "h2-workflow",
          text: t(
            locale,
            "Component-first workflow",
            "Komponenten-first-Workflow",
          ),
          level: 2,
        },
        {
          id: "h2-upgrade",
          text: t(locale, "Storybook v10 upgrade", "Storybook-v10-Upgrade"),
          level: 2,
        },
      ],
      seo: postSeo(
        locale,
        title,
        t(
          locale,
          "Building every primitive in isolation before a single page exists.",
          "Jede Primitive isoliert bauen, bevor auch nur eine Seite existiert.",
        ),
        slug,
      ),
      related: [],
    });
  }

  // 4. tailwind-v4-css-first-config-notes — standard / engineering
  {
    const slug = "tailwind-v4-css-first-config-notes";
    const title = t(
      locale,
      "Tailwind v4 CSS-first config notes",
      "Notizen zur CSS-first-Konfiguration von Tailwind v4",
    );
    posts.push({
      id: "post-tailwind-v4",
      slug,
      href: `/${locale}/blog/${slug}`,
      title,
      excerpt: t(
        locale,
        "No more tailwind.config.ts — content scanning and theme tokens both move into CSS.",
        "Kein tailwind.config.ts mehr — Content-Scanning und Theme-Tokens wandern beide in CSS.",
      ),
      cover: cover(
        "tailwind-v4",
        "A terminal showing a Tailwind build running",
      ),
      categories: [cats.engineering],
      publishedAt: "2025-08-18T09:00:00.000Z",
      readingTimeMinutes: 5,
      layout: "standard",
      body: [
        para(
          "intro",
          "Tailwind v4 replaces the JS config file with `@import` and `@source` directives written directly in CSS — a real change for a monorepo where components live in a separate package from the app that renders them.",
          "Tailwind v4 ersetzt die JS-Konfigurationsdatei durch `@import`- und `@source`-Direktiven direkt in CSS — eine echte Umstellung für ein Monorepo, in dem Komponenten in einem anderen Paket liegen als die App, die sie rendert.",
          locale,
        ),
        heading(
          "h2-source",
          "h2",
          "@source is the new content array",
          "@source ist das neue Content-Array",
          locale,
        ),
        para(
          "source-p1",
          "Forgetting a package's src directory in @source is a silent failure: classes compile fine, just without the CSS that makes them do anything.",
          "Ein Package-src-Verzeichnis in @source zu vergessen, ist ein stiller Fehler: Klassen kompilieren einwandfrei, nur ohne das CSS, das sie tatsächlich etwas bewirken lässt.",
          locale,
        ),
        code(
          "code-source",
          "css",
          '@import "tailwindcss";\n@import "@portfolio/design-tokens/styles";\n@source "../../node_modules/@portfolio/ui/src";\n@source "../../app";\n@source "../../src";',
          "globals.css",
          [3],
        ),
        heading(
          "h2-variants",
          "h2",
          "Custom variants",
          "Eigene Varianten",
          locale,
        ),
        para(
          "variants-p1",
          "Dark mode now reads as a single `@custom-variant dark` line instead of a `darkMode` config key, which reads a lot closer to plain CSS.",
          "Dark Mode liest sich jetzt als eine einzelne `@custom-variant dark`-Zeile statt als `darkMode`-Konfigurationsschlüssel — deutlich näher an reinem CSS.",
          locale,
        ),
      ],
      toc: [
        {
          id: "h2-source",
          text: t(
            locale,
            "@source is the new content array",
            "@source ist das neue Content-Array",
          ),
          level: 2,
        },
        {
          id: "h2-variants",
          text: t(locale, "Custom variants", "Eigene Varianten"),
          level: 2,
        },
      ],
      seo: postSeo(
        locale,
        title,
        t(
          locale,
          "No more tailwind.config.ts — content scanning and theme tokens both move into CSS.",
          "Kein tailwind.config.ts mehr — Content-Scanning und Theme-Tokens wandern beide in CSS.",
        ),
        slug,
      ),
      related: [],
    });
  }

  // 5. debugging-a-storybook-jsx-parsing-bug — standard / engineering
  {
    const slug = "debugging-a-storybook-jsx-parsing-bug";
    const title = t(
      locale,
      "Debugging a Storybook JSX parsing bug",
      "Einen JSX-Parsing-Fehler in Storybook debuggen",
    );
    posts.push({
      id: "post-jsx-bug",
      slug,
      href: `/${locale}/blog/${slug}`,
      title,
      excerpt: t(
        locale,
        "A tsconfig setting meant for Next.js's SWC pipeline broke Vite's story parser in a different package.",
        "Eine tsconfig-Einstellung für die SWC-Pipeline von Next.js hat den Vite-Story-Parser in einem anderen Paket kaputt gemacht.",
      ),
      cover: cover("jsx-bug", "A red error overlay on a dark terminal"),
      categories: [cats.engineering],
      publishedAt: "2025-07-22T09:00:00.000Z",
      readingTimeMinutes: 8,
      layout: "standard",
      body: [
        para(
          "intro",
          "Five story files started failing to build with parse errors from Storybook's export-order plugin, right after Storybook was added to apps/web.",
          "Fünf Story-Dateien schlugen plötzlich mit Parse-Fehlern des Export-Order-Plugins von Storybook fehl, direkt nachdem Storybook zu apps/web hinzugefügt wurde.",
          locale,
        ),
        heading(
          "h2-repro",
          "h2",
          "Reproducing the crash",
          "Den Fehler reproduzieren",
          locale,
        ),
        para(
          "repro-p1",
          "Copying a known-good story file from packages/ui into apps/web reproduced the same failure, which ruled out the story content itself.",
          "Eine bekanntermaßen funktionierende Story-Datei aus packages/ui in apps/web zu kopieren, reproduzierte denselben Fehler — das schloss den Story-Inhalt selbst als Ursache aus.",
          locale,
        ),
        callout(
          "callout-warning",
          "warning",
          "apps/web's tsconfig sets `jsx: \"preserve\"`, required by Next.js's SWC compiler — but Vite's esbuild step auto-detects that same tsconfig and leaves JSX unstripped before the plugin's plain JS/ESM lexer tries to read the file.",
          'Die tsconfig von apps/web setzt `jsx: "preserve"`, was der SWC-Compiler von Next.js benötigt — Vites esbuild-Schritt erkennt dieselbe tsconfig jedoch automatisch und lässt JSX unverändert, bevor der reine JS/ESM-Lexer des Plugins die Datei liest.',
          locale,
        ),
        heading("h2-fix", "h2", "The fix", "Die Lösung", locale),
        code(
          "code-fix",
          "ts",
          'config.esbuild = {\n  ...(config.esbuild === false ? {} : config.esbuild),\n  jsx: "automatic",\n};',
          ".storybook/main.ts",
          [3],
        ),
        para(
          "fix-p1",
          "Forcing esbuild's own JSX transform inside Storybook's Vite config — without touching the app's tsconfig — fixed all five files at once.",
          "Esbuilds eigene JSX-Transformation innerhalb der Vite-Konfiguration von Storybook zu erzwingen — ohne die tsconfig der App anzufassen — behob alle fünf Dateien auf einen Schlag.",
          locale,
        ),
      ],
      toc: [
        {
          id: "h2-repro",
          text: t(locale, "Reproducing the crash", "Den Fehler reproduzieren"),
          level: 2,
        },
        { id: "h2-fix", text: t(locale, "The fix", "Die Lösung"), level: 2 },
      ],
      seo: postSeo(
        locale,
        title,
        t(
          locale,
          "A tsconfig setting meant for Next.js's SWC pipeline broke Vite's story parser in a different package.",
          "Eine tsconfig-Einstellung für die SWC-Pipeline von Next.js hat den Vite-Story-Parser in einem anderen Paket kaputt gemacht.",
        ),
        slug,
      ),
      related: [],
    });
  }

  // 6. server-components-and-the-shiki-boundary — standard / engineering
  {
    const slug = "server-components-and-the-shiki-boundary";
    const title = t(
      locale,
      "Server Components and the Shiki boundary",
      "Server Components und die Shiki-Grenze",
    );
    posts.push({
      id: "post-shiki",
      slug,
      href: `/${locale}/blog/${slug}`,
      title,
      excerpt: t(
        locale,
        "Keeping syntax highlighting server-side without making the code block component async.",
        "Syntax-Highlighting serverseitig halten, ohne die Code-Block-Komponente asynchron zu machen.",
      ),
      cover: cover("shiki", "Colorful syntax-highlighted code on a screen"),
      categories: [cats.engineering],
      publishedAt: "2025-06-14T09:00:00.000Z",
      readingTimeMinutes: 6,
      layout: "standard",
      body: [
        para(
          "intro",
          "Shiki does real syntax highlighting server-side, but an async CodeBlock component can't render inside Storybook's client-rendered story tree.",
          "Shiki übernimmt echtes Syntax-Highlighting serverseitig, aber eine asynchrone CodeBlock-Komponente kann nicht innerhalb des client-gerenderten Story-Baums von Storybook gerendert werden.",
          locale,
        ),
        heading(
          "h2-why",
          "h2",
          "Why Shiki can't run in a client tree",
          "Warum Shiki nicht in einem Client-Baum laufen kann",
          locale,
        ),
        para(
          "why-p1",
          "The highlighter itself is synchronous once loaded, but loading its language grammars is an async operation — which is fine in a Server Component, and impossible in Storybook's browser-only renderer.",
          "Der Highlighter selbst arbeitet synchron, sobald er geladen ist, aber das Laden seiner Sprachgrammatiken ist asynchron — das ist in einer Server Component kein Problem, in Storybooks reinem Browser-Renderer aber unmöglich.",
          locale,
        ),
        code(
          "code-helper",
          "ts",
          "export async function highlightCode(code: string, lang: string) {\n  const highlighter = await getHighlighter();\n  return highlighter.codeToHtml(code, { lang });\n}",
          "highlight-code.ts",
          [],
        ),
        heading(
          "h2-boundary",
          "h2",
          "Keeping CodeBlock sync",
          "CodeBlock synchron halten",
          locale,
        ),
        para(
          "boundary-p1",
          "The route resolves highlighted HTML ahead of time and passes it down as a plain string prop, so CodeBlock itself never awaits anything and renders identically in Next.js and in Storybook.",
          "Die Route löst das hervorgehobene HTML im Voraus auf und übergibt es als reinen String-Prop, sodass CodeBlock selbst nie etwas awaitet und in Next.js wie in Storybook identisch rendert.",
          locale,
        ),
      ],
      toc: [
        {
          id: "h2-why",
          text: t(
            locale,
            "Why Shiki can't run in a client tree",
            "Warum Shiki nicht in einem Client-Baum laufen kann",
          ),
          level: 2,
        },
        {
          id: "h2-boundary",
          text: t(
            locale,
            "Keeping CodeBlock sync",
            "CodeBlock synchron halten",
          ),
          level: 2,
        },
      ],
      seo: postSeo(
        locale,
        title,
        t(
          locale,
          "Keeping syntax highlighting server-side without making the code block component async.",
          "Syntax-Highlighting serverseitig halten, ohne die Code-Block-Komponente asynchron zu machen.",
        ),
        slug,
      ),
      related: [],
    });
  }

  // 7. why-i-chose-a-turborepo-monorepo — standard / engineering
  {
    const slug = "why-i-chose-a-turborepo-monorepo";
    const title = t(
      locale,
      "Why I chose a Turborepo monorepo",
      "Warum ich mich für ein Turborepo-Monorepo entschieden habe",
    );
    posts.push({
      id: "post-turborepo",
      slug,
      href: `/${locale}/blog/${slug}`,
      title,
      excerpt: t(
        locale,
        "Weighing a monorepo against separate repos for a solo portfolio project.",
        "Ein Monorepo gegen separate Repositories für ein Solo-Portfolio-Projekt abwägen.",
      ),
      cover: cover("turborepo", "A dependency graph diagram"),
      categories: [cats.engineering],
      publishedAt: "2025-05-02T09:00:00.000Z",
      readingTimeMinutes: 5,
      layout: "standard",
      body: [
        para(
          "intro",
          "A single developer doesn't need a monorepo to coordinate teams — but sharing types between a design-tokens package, a UI library, and a Next.js app benefits from it anyway.",
          "Ein einzelner Entwickler braucht kein Monorepo, um Teams zu koordinieren — aber das Teilen von Typen zwischen einem Design-Tokens-Paket, einer UI-Bibliothek und einer Next.js-App profitiert trotzdem davon.",
          locale,
        ),
        heading(
          "h2-boundaries",
          "h2",
          "Package boundaries",
          "Paketgrenzen",
          locale,
        ),
        para(
          "boundaries-p1",
          "Each workspace package has one job and can be typechecked and tested in isolation — packages/ui has zero knowledge of content contracts, for instance.",
          "Jedes Workspace-Paket hat genau eine Aufgabe und kann isoliert typgeprüft und getestet werden — packages/ui zum Beispiel weiß nichts von Content-Contracts.",
          locale,
        ),
        bullet(
          "li-tokens",
          "design-tokens: CSS custom properties, no components",
          "design-tokens: CSS-Custom-Properties, keine Komponenten",
          locale,
        ),
        bullet(
          "li-ui",
          "ui: framework primitives, no content types",
          "ui: Framework-Primitives, keine Content-Typen",
          locale,
        ),
        bullet(
          "li-contracts",
          "contracts: zod schemas, no React at all",
          "contracts: Zod-Schemas, überhaupt kein React",
          locale,
        ),
        heading("h2-caching", "h2", "Caching wins", "Caching-Vorteile", locale),
        para(
          "caching-p1",
          "Turborepo skips rebuilding a package whose inputs haven't changed, so a docs-only change to one blog post doesn't re-typecheck the whole workspace.",
          "Turborepo überspringt den erneuten Build eines Pakets, dessen Eingaben sich nicht geändert haben — eine reine Textänderung an einem Blogbeitrag löst also keine erneute Typprüfung des gesamten Workspace aus.",
          locale,
        ),
        callout(
          "callout-tip",
          "tip",
          "`turbo run build --filter=web...` only rebuilds apps/web and the packages it actually depends on.",
          "`turbo run build --filter=web...` baut nur apps/web und die Pakete neu, von denen es tatsächlich abhängt.",
          locale,
        ),
      ],
      toc: [
        {
          id: "h2-boundaries",
          text: t(locale, "Package boundaries", "Paketgrenzen"),
          level: 2,
        },
        {
          id: "h2-caching",
          text: t(locale, "Caching wins", "Caching-Vorteile"),
          level: 2,
        },
      ],
      seo: postSeo(
        locale,
        title,
        t(
          locale,
          "Weighing a monorepo against separate repos for a solo portfolio project.",
          "Ein Monorepo gegen separate Repositories für ein Solo-Portfolio-Projekt abwägen.",
        ),
        slug,
      ),
      related: [],
    });
  }

  // 8. lessons-from-a-year-of-freelance-fullstack-work — standard / engineering
  {
    const slug = "lessons-from-a-year-of-freelance-fullstack-work";
    const title = t(
      locale,
      "Lessons from a year of freelance fullstack work",
      "Lektionen aus einem Jahr freiberuflicher Fullstack-Arbeit",
    );
    posts.push({
      id: "post-freelance",
      slug,
      href: `/${locale}/blog/${slug}`,
      title,
      excerpt: t(
        locale,
        "What changed in how I scope, estimate, and hand off client work.",
        "Was sich daran geändert hat, wie ich Kundenarbeit abgrenze, schätze und übergebe.",
      ),
      cover: cover(
        "freelance",
        "A laptop and coffee cup on a desk by a window",
      ),
      categories: [cats.engineering],
      publishedAt: "2025-03-11T09:00:00.000Z",
      readingTimeMinutes: 9,
      layout: "standard",
      body: [
        para(
          "intro",
          "A year of short client engagements taught me more about scoping than any single long-term role had.",
          "Ein Jahr kurzer Kundenprojekte hat mir mehr über Scoping beigebracht als jede einzelne langfristige Anstellung zuvor.",
          locale,
        ),
        heading("h2-scoping", "h2", "Scoping work", "Arbeit abgrenzen", locale),
        para(
          "scoping-p1",
          "A written scope document, agreed before any code is written, prevents more disagreements than any amount of goodwill.",
          "Ein schriftliches Scope-Dokument, das vor dem ersten Code abgestimmt wird, verhindert mehr Meinungsverschiedenheiten als jede Menge guten Willens.",
          locale,
        ),
        heading("h2-no", "h2", "Saying no", "Nein sagen", locale),
        para(
          "no-p1",
          "Turning down a project outside my strengths — usually anything heavy on backend infrastructure I hadn't touched before — kept every finished project actually good.",
          "Ein Projekt außerhalb meiner Stärken abzulehnen — meist alles mit schwerem Backend-Infrastruktur-Fokus, das ich vorher nicht angefasst hatte — hielt jedes abgeschlossene Projekt tatsächlich gut.",
          locale,
        ),
        bullet(
          "li-1",
          "Fixed-price quotes only after a paid discovery call",
          "Festpreisangebote nur nach einem bezahlten Discovery-Call",
          locale,
        ),
        bullet(
          "li-2",
          "A written handoff doc for every project, not just a Slack thread",
          "Ein schriftliches Übergabedokument für jedes Projekt, nicht nur ein Slack-Thread",
          locale,
        ),
      ],
      toc: [
        {
          id: "h2-scoping",
          text: t(locale, "Scoping work", "Arbeit abgrenzen"),
          level: 2,
        },
        { id: "h2-no", text: t(locale, "Saying no", "Nein sagen"), level: 2 },
      ],
      seo: postSeo(
        locale,
        title,
        t(
          locale,
          "What changed in how I scope, estimate, and hand off client work.",
          "Was sich daran geändert hat, wie ich Kundenarbeit abgrenze, schätze und übergebe.",
        ),
        slug,
      ),
      related: [],
    });
  }

  // 9. a-walk-through-berlin — photoEssay / photography (existing)
  {
    const slug = "a-walk-through-berlin";
    const title = t(
      locale,
      "A walk through Berlin",
      "Ein Spaziergang durch Berlin",
    );
    const exif = {
      camera: "Fujifilm X100V",
      lens: "23mm f/2",
      focalLength: "23mm",
      aperture: "f/2.8",
      shutterSpeed: "1/125s",
      iso: 400,
      takenAt: "2025-09-12T18:30:00.000Z",
    };
    posts.push({
      id: "post-berlin-walk",
      slug,
      href: `/${locale}/blog/${slug}`,
      title,
      excerpt: t(
        locale,
        "A handful of frames from a quiet evening walk.",
        "Ein paar Bilder von einem ruhigen Abendspaziergang.",
      ),
      cover: photo("berlin-walk", "A quiet street in Berlin at dusk", exif),
      categories: [cats.photography],
      publishedAt: "2025-09-20T09:00:00.000Z",
      readingTimeMinutes: 3,
      layout: "photoEssay",
      body: [
        figureBlock(
          "figure-1",
          "berlin-walk",
          "A quiet street in Berlin at dusk",
          "fullBleed",
          exif,
        ),
      ],
      toc: [],
      seo: postSeo(
        locale,
        title,
        t(
          locale,
          "A handful of frames from a quiet evening walk.",
          "Ein paar Bilder von einem ruhigen Abendspaziergang.",
        ),
        slug,
      ),
      photoSummary: {
        photoCount: 1,
        cameras: ["Fujifilm X100V"],
        lenses: ["23mm f/2"],
      },
      related: [],
    });
  }

  // 10. an-afternoon-in-kreuzberg — photoEssay / photography
  {
    const slug = "an-afternoon-in-kreuzberg";
    const title = t(
      locale,
      "An afternoon in Kreuzberg",
      "Ein Nachmittag in Kreuzberg",
    );
    const exifBase = {
      camera: "Sony A7 III",
      lens: "35mm f/1.8",
      focalLength: "35mm",
    };
    const image1 = photo("kreuzberg-1", "Street art on a canal-side wall", {
      ...exifBase,
      aperture: "f/2.8",
      shutterSpeed: "1/500s",
      iso: 200,
      takenAt: "2025-12-04T14:10:00.000Z",
    });
    const image2 = photo("kreuzberg-2", "A market stall selling vegetables", {
      ...exifBase,
      aperture: "f/4",
      shutterSpeed: "1/250s",
      iso: 200,
      takenAt: "2025-12-04T14:45:00.000Z",
    });
    const image3 = photo(
      "kreuzberg-3",
      "Cyclists crossing a bridge over the canal",
      {
        ...exifBase,
        aperture: "f/5.6",
        shutterSpeed: "1/1000s",
        iso: 200,
        takenAt: "2025-12-04T15:20:00.000Z",
      },
    );
    posts.push({
      id: "post-kreuzberg",
      slug,
      href: `/${locale}/blog/${slug}`,
      title,
      excerpt: t(
        locale,
        "Canal-side street art, a Saturday market, and a lot of bicycles.",
        "Straßenkunst am Kanal, ein Samstagsmarkt und jede Menge Fahrräder.",
      ),
      cover: image1,
      categories: [cats.photography],
      publishedAt: "2025-12-05T09:00:00.000Z",
      readingTimeMinutes: 4,
      layout: "photoEssay",
      body: [
        figureBlock(
          "figure-1",
          "kreuzberg-1",
          "Street art on a canal-side wall",
          "fullBleed",
          image1.exif,
        ),
        para(
          "intro",
          "Kreuzberg on a Saturday means the Landwehrkanal market is out in force — worth the crowds for the produce alone.",
          "Kreuzberg an einem Samstag bedeutet, dass der Markt am Landwehrkanal in voller Kraft ist — allein wegen der Produkte den Trubel wert.",
          locale,
        ),
        galleryBlock("gallery-1", [image2, image3]),
      ],
      toc: [],
      seo: postSeo(
        locale,
        title,
        t(
          locale,
          "Canal-side street art, a Saturday market, and a lot of bicycles.",
          "Straßenkunst am Kanal, ein Samstagsmarkt und jede Menge Fahrräder.",
        ),
        slug,
      ),
      photoSummary: {
        photoCount: 3,
        cameras: ["Sony A7 III"],
        lenses: ["35mm f/1.8"],
      },
      related: [],
    });
  }

  // 11. autumn-colors-in-the-tiergarten — photoEssay / photography
  {
    const slug = "autumn-colors-in-the-tiergarten";
    const title = t(
      locale,
      "Autumn colors in the Tiergarten",
      "Herbstfarben im Tiergarten",
    );
    const exifBase = {
      camera: "Fujifilm X100V",
      lens: "23mm f/2",
      focalLength: "23mm",
    };
    const image1 = photo("tiergarten-1", "A path through golden autumn trees", {
      ...exifBase,
      aperture: "f/4",
      shutterSpeed: "1/250s",
      iso: 160,
      takenAt: "2025-11-19T10:00:00.000Z",
    });
    const image2 = photo("tiergarten-2", "Sunlight through orange leaves", {
      ...exifBase,
      aperture: "f/2",
      shutterSpeed: "1/2000s",
      iso: 160,
      takenAt: "2025-11-19T10:20:00.000Z",
    });
    const image3 = photo(
      "tiergarten-3",
      "A lake reflecting the autumn tree line",
      {
        ...exifBase,
        aperture: "f/5.6",
        shutterSpeed: "1/500s",
        iso: 160,
        takenAt: "2025-11-19T11:00:00.000Z",
      },
    );
    posts.push({
      id: "post-tiergarten",
      slug,
      href: `/${locale}/blog/${slug}`,
      title,
      excerpt: t(
        locale,
        "One camera, one lens, and an hour of golden light in the park.",
        "Eine Kamera, ein Objektiv und eine Stunde goldenes Licht im Park.",
      ),
      cover: image1,
      categories: [cats.photography],
      publishedAt: "2025-11-20T09:00:00.000Z",
      readingTimeMinutes: 3,
      layout: "photoEssay",
      body: [
        figureBlock(
          "figure-1",
          "tiergarten-1",
          "A path through golden autumn trees",
          "fullBleed",
          image1.exif,
        ),
        galleryBlock("gallery-1", [image2, image3], "masonry"),
      ],
      toc: [],
      seo: postSeo(
        locale,
        title,
        t(
          locale,
          "One camera, one lens, and an hour of golden light in the park.",
          "Eine Kamera, ein Objektiv und eine Stunde goldenes Licht im Park.",
        ),
        slug,
      ),
      photoSummary: {
        photoCount: 3,
        cameras: ["Fujifilm X100V"],
        lenses: ["23mm f/2"],
      },
      related: [],
    });
  }

  // 12. morning-fog-on-the-spree — photoEssay / photography
  {
    const slug = "morning-fog-on-the-spree";
    const title = t(
      locale,
      "Morning fog on the Spree",
      "Morgennebel an der Spree",
    );
    const exifBase = {
      camera: "Fujifilm X100V",
      lens: "23mm f/2",
      focalLength: "23mm",
    };
    const image1 = photo("spree-1", "Fog rolling over the river at sunrise", {
      ...exifBase,
      aperture: "f/2.8",
      shutterSpeed: "1/125s",
      iso: 320,
      takenAt: "2025-04-30T06:15:00.000Z",
    });
    const image2 = photo("spree-2", "A lone rower cutting through the mist", {
      ...exifBase,
      aperture: "f/2.8",
      shutterSpeed: "1/250s",
      iso: 320,
      takenAt: "2025-04-30T06:40:00.000Z",
    });
    posts.push({
      id: "post-spree",
      slug,
      href: `/${locale}/blog/${slug}`,
      title,
      excerpt: t(
        locale,
        "Six a.m., a thermos of coffee, and fog that burned off within the hour.",
        "Sechs Uhr morgens, eine Thermoskanne Kaffee und Nebel, der binnen einer Stunde verschwand.",
      ),
      cover: image1,
      categories: [cats.photography],
      publishedAt: "2025-04-30T09:00:00.000Z",
      readingTimeMinutes: 3,
      layout: "photoEssay",
      body: [
        figureBlock(
          "figure-1",
          "spree-1",
          "Fog rolling over the river at sunrise",
          "fullBleed",
          image1.exif,
        ),
        galleryBlock("gallery-1", [image1, image2], "carousel"),
      ],
      toc: [],
      seo: postSeo(
        locale,
        title,
        t(
          locale,
          "Six a.m., a thermos of coffee, and fog that burned off within the hour.",
          "Sechs Uhr morgens, eine Thermoskanne Kaffee und Nebel, der binnen einer Stunde verschwand.",
        ),
        slug,
      ),
      photoSummary: {
        photoCount: 2,
        cameras: ["Fujifilm X100V"],
        lenses: ["23mm f/2"],
      },
      related: [],
    });
  }

  return posts;
}

const postsByLocale: Record<Locale, Post[]> = {
  en: buildPosts("en"),
  de: buildPosts("de"),
};

export function getPosts(locale: Locale): Post[] {
  return postsByLocale[locale];
}

export function getCategories(locale: Locale): Category[] {
  return Object.values(categories[locale]);
}

export function toPostCard(post: Post): PostCard {
  return {
    id: post.id,
    slug: post.slug,
    href: post.href,
    title: post.title,
    excerpt: post.excerpt,
    cover: post.cover,
    categories: post.categories,
    publishedAt: post.publishedAt,
    readingTimeMinutes: post.readingTimeMinutes,
    layout: post.layout,
  };
}
