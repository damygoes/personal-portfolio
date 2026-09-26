import type { Locale, Project, ProjectCard } from "@portfolio/contracts";

const projectSeo = (
  locale: Locale,
  title: string,
  description: string,
  slug: string,
) => ({
  title,
  description,
  canonicalUrl: `https://damilolabada.com/${locale}/work/${slug}`,
  noIndex: false,
  alternates: [
    { locale: "en" as const, href: `https://damilolabada.com/en/work/${slug}` },
    { locale: "de" as const, href: `https://damilolabada.com/de/work/${slug}` },
  ],
});

function cover(seed: string, alt: string) {
  return {
    src: `https://picsum.photos/seed/${seed}/1600/1000`,
    width: 1600,
    height: 1000,
    alt,
    lqip: "data:image/jpeg;base64,",
  };
}

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

function heading(key: string, en: string, de: string, locale: Locale) {
  return {
    _type: "block" as const,
    _key: key,
    style: "h2" as const,
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

function buildProjects(locale: Locale): Project[] {
  const projects: Project[] = [];

  // 1. Ellie's Note — live
  {
    const slug = "elliesnote";
    const title = "Ellie's Note";
    projects.push({
      id: "proj-elliesnote",
      title,
      summary: t(
        locale,
        "A journalling app for new parents to track feeds, sleep and milestones.",
        "Eine Tagebuch-App für frischgebackene Eltern zum Tracken von Mahlzeiten, Schlaf und Meilensteinen.",
      ),
      cover: cover(
        "elliesnote-cover",
        "Screenshot of the Ellie's Note app dashboard",
      ),
      tech: ["TypeScript", "React Native", "Node.js", "PostgreSQL"],
      href: `/${locale}/work/${slug}`,
      slug,
      role: t(locale, "Fullstack developer", "Fullstack-Entwickler"),
      period: { start: "2023-02-01", end: null, isCurrent: true },
      status: "live",
      links: [
        { kind: "live", href: "https://elliesnote.app" },
        { kind: "appStore", href: "https://apps.apple.com/app/elliesnote" },
      ],
      body: [
        para(
          "intro",
          "Ellie's Note started as a weekend project to replace a paper feeding log and grew into a small subscription app used by a few hundred families.",
          "Ellie's Note begann als Wochenendprojekt zum Ersatz eines Papier-Fütterungslogs und wuchs zu einer kleinen Abo-App, die von einigen Hundert Familien genutzt wird.",
          locale,
        ),
        heading("h2-overview", "Overview", "Überblick", locale),
        para(
          "overview-p1",
          "A React Native app synced through a small Node.js API, with Postgres as the source of truth and an offline-first cache on-device for sleepless 3am logging.",
          "Eine React-Native-App, synchronisiert über eine kleine Node.js-API, mit Postgres als Datenquelle und einem Offline-First-Cache auf dem Gerät für das Protokollieren um 3 Uhr morgens.",
          locale,
        ),
        bullet(
          "li-1",
          "Shared timeline for both parents, synced in near real-time",
          "Gemeinsame Timeline für beide Elternteile, nahezu in Echtzeit synchronisiert",
          locale,
        ),
        bullet(
          "li-2",
          "Growth-chart percentiles computed against WHO reference tables",
          "Wachstumskurven-Perzentile berechnet anhand von WHO-Referenztabellen",
          locale,
        ),
        heading("h2-challenges", "Challenges", "Herausforderungen", locale),
        para(
          "challenges-p1",
          "Offline-first sync conflicts — two parents logging the same feed on two phones — needed a last-write-wins strategy with a manual merge UI as a fallback.",
          "Offline-First-Sync-Konflikte — zwei Elternteile protokollieren dieselbe Mahlzeit auf zwei Handys — erforderten eine Last-Write-Wins-Strategie mit einer manuellen Merge-Oberfläche als Rückfallebene.",
          locale,
        ),
        callout(
          "callout-tip",
          "tip",
          "Shipping the growth-chart feature first, before push notifications, turned out to be the single biggest driver of subscriptions.",
          "Das Wachstumskurven-Feature vor den Push-Benachrichtigungen auszuliefern, erwies sich als der mit Abstand größte Treiber für Abonnements.",
          locale,
        ),
      ],
      toc: [
        {
          id: "h2-overview",
          text: t(locale, "Overview", "Überblick"),
          level: 2,
        },
        {
          id: "h2-challenges",
          text: t(locale, "Challenges", "Herausforderungen"),
          level: 2,
        },
      ],
      seo: projectSeo(
        locale,
        `${title} — case study`,
        t(
          locale,
          "How I built a cross-platform journalling app for new parents.",
          "Wie ich eine plattformübergreifende Tagebuch-App für frischgebackene Eltern gebaut habe.",
        ),
        slug,
      ),
    });
  }

  // 2. damilolabada.com — inDevelopment
  {
    const slug = "portfolio";
    const title = "damilolabada.com";
    projects.push({
      id: "proj-portfolio",
      title,
      summary: t(
        locale,
        "This site — a Sanity-backed, next-intl portfolio and blog.",
        "Diese Seite — ein Sanity-gestütztes Portfolio und Blog mit next-intl.",
      ),
      cover: cover("portfolio-cover", "Screenshot of this portfolio homepage"),
      tech: ["Next.js", "Sanity", "Tailwind CSS", "Turborepo"],
      href: `/${locale}/work/${slug}`,
      slug,
      role: t(locale, "Designer & developer", "Designer & Entwickler"),
      period: { start: "2025-11-01", end: "2026-03-01", isCurrent: false },
      status: "inDevelopment",
      links: [
        {
          kind: "repository",
          href: "https://github.com/damilolabada/personal-portfolio",
        },
      ],
      body: [
        para(
          "intro",
          "A ground-up rebuild of my portfolio as a Turborepo monorepo, split into a design-tokens package, a headless UI library, content contracts, and a Next.js app.",
          "Ein kompletter Neuaufbau meines Portfolios als Turborepo-Monorepo, aufgeteilt in ein Design-Tokens-Paket, eine headless UI-Bibliothek, Content-Contracts und eine Next.js-App.",
          locale,
        ),
        heading("h2-overview", "Overview", "Überblick", locale),
        para(
          "overview-p1",
          "Every content type — homepage sections, blog posts, case studies, legal pages — is defined once as a zod schema, with a fixtures-backed mock service standing in for Sanity until the CMS schemas are finished.",
          "Jeder Inhaltstyp — Homepage-Abschnitte, Blogbeiträge, Case Studies, rechtliche Seiten — wird einmal als Zod-Schema definiert, mit einem Fixtures-gestützten Mock-Service als Platzhalter für Sanity, bis die CMS-Schemas fertig sind.",
          locale,
        ),
        heading("h2-challenges", "Challenges", "Herausforderungen", locale),
        para(
          "challenges-p1",
          "Keeping UI components decoupled from next-intl meant every component takes pre-resolved label props instead of calling a translation hook directly — a small extra layer that pays off once Sanity-authored copy needs to render the exact same components.",
          "UI-Komponenten von next-intl zu entkoppeln bedeutete, dass jede Komponente vorab aufgelöste Label-Props statt eines direkten Übersetzungs-Hooks erhält — eine kleine zusätzliche Schicht, die sich auszahlt, sobald in Sanity verfasste Inhalte dieselben Komponenten rendern müssen.",
          locale,
        ),
      ],
      toc: [
        {
          id: "h2-overview",
          text: t(locale, "Overview", "Überblick"),
          level: 2,
        },
        {
          id: "h2-challenges",
          text: t(locale, "Challenges", "Herausforderungen"),
          level: 2,
        },
      ],
      seo: projectSeo(
        locale,
        `${title} — case study`,
        t(
          locale,
          "Notes on building this portfolio as a Turborepo monorepo.",
          "Notizen zum Aufbau dieses Portfolios als Turborepo-Monorepo.",
        ),
        slug,
      ),
    });
  }

  // 3. Routinely — live
  {
    const slug = "routinely";
    const title = "Routinely";
    projects.push({
      id: "proj-routinely",
      title,
      summary: t(
        locale,
        "A habit-tracking app built around small, forgiving daily streaks.",
        "Eine Habit-Tracking-App rund um kleine, nachsichtige tägliche Streaks.",
      ),
      cover: cover(
        "routinely-cover",
        "Screenshot of the Routinely habit tracker",
      ),
      tech: ["React Native", "Expo", "Supabase"],
      href: `/${locale}/work/${slug}`,
      slug,
      role: t(locale, "Mobile developer", "Mobile Entwickler"),
      period: { start: "2024-06-01", end: null, isCurrent: true },
      status: "live",
      links: [
        { kind: "appStore", href: "https://apps.apple.com/app/routinely" },
        {
          kind: "playStore",
          href: "https://play.google.com/store/apps/details?id=com.routinely",
        },
      ],
      body: [
        para(
          "intro",
          "Most habit trackers punish a missed day so harshly that people delete the app. Routinely's streak logic forgives one missed day per week without resetting progress.",
          "Die meisten Habit-Tracker bestrafen einen verpassten Tag so hart, dass Nutzer die App löschen. Die Streak-Logik von Routinely verzeiht einen verpassten Tag pro Woche, ohne den Fortschritt zurückzusetzen.",
          locale,
        ),
        heading("h2-overview", "Overview", "Überblick", locale),
        para(
          "overview-p1",
          "Built with Expo for a fast iteration loop and Supabase for auth and sync, so the whole backend is a hosted Postgres instance with row-level security instead of a bespoke API.",
          "Gebaut mit Expo für schnelle Iterationszyklen und Supabase für Auth und Synchronisierung — das gesamte Backend ist eine gehostete Postgres-Instanz mit Row-Level-Security statt einer eigenen API.",
          locale,
        ),
        bullet(
          "li-1",
          "Widget support for at-a-glance streak status on the home screen",
          "Widget-Unterstützung für den Streak-Status auf einen Blick auf dem Homescreen",
          locale,
        ),
        bullet(
          "li-2",
          "Local notifications scheduled entirely on-device, no push infrastructure",
          "Lokale Benachrichtigungen komplett auf dem Gerät geplant, keine Push-Infrastruktur",
          locale,
        ),
        heading("h2-impact", "Impact", "Wirkung", locale),
        para(
          "impact-p1",
          "Week-two retention roughly doubled after switching from strict streaks to the forgiving model, based on the app's own anonymized usage counters.",
          "Die Retention in Woche zwei verdoppelte sich in etwa nach dem Wechsel von strikten Streaks zum nachsichtigen Modell, basierend auf den anonymisierten Nutzungszählern der App.",
          locale,
        ),
      ],
      toc: [
        {
          id: "h2-overview",
          text: t(locale, "Overview", "Überblick"),
          level: 2,
        },
        { id: "h2-impact", text: t(locale, "Impact", "Wirkung"), level: 2 },
      ],
      seo: projectSeo(
        locale,
        `${title} — case study`,
        t(
          locale,
          "Designing a habit tracker that forgives a missed day instead of punishing it.",
          "Eine Habit-Tracking-App entwerfen, die einen verpassten Tag verzeiht statt bestraft.",
        ),
        slug,
      ),
    });
  }

  // 4. devnotes-cli — archived
  {
    const slug = "devnotes-cli";
    const title = "devnotes-cli";
    projects.push({
      id: "proj-devnotes-cli",
      title,
      summary: t(
        locale,
        "An open-source CLI for keeping dated engineering notes alongside a git repo.",
        "Ein Open-Source-CLI zum Führen datierter Engineering-Notizen neben einem Git-Repository.",
      ),
      cover: cover(
        "devnotes-cover",
        "A terminal window showing the devnotes CLI",
      ),
      tech: ["Node.js", "TypeScript", "Commander.js"],
      href: `/${locale}/work/${slug}`,
      slug,
      role: t(locale, "Creator & maintainer", "Ersteller & Maintainer"),
      period: { start: "2022-01-01", end: "2023-09-01", isCurrent: false },
      status: "archived",
      links: [
        {
          kind: "repository",
          href: "https://github.com/damilolabada/devnotes-cli",
        },
        { kind: "other", href: "https://www.npmjs.com/package/devnotes-cli" },
      ],
      body: [
        para(
          "intro",
          "A small CLI that scaffolds a dated markdown file in a `.devnotes/` folder, so debugging notes and decisions live next to the code they're about, versioned in the same repo.",
          "Ein kleines CLI, das eine datierte Markdown-Datei in einem `.devnotes/`-Ordner anlegt, sodass Debugging-Notizen und Entscheidungen neben dem Code liegen, auf den sie sich beziehen, versioniert im selben Repository.",
          locale,
        ),
        heading("h2-overview", "Overview", "Überblick", locale),
        para(
          "overview-p1",
          "Peaked at a few hundred weekly npm downloads before I folded the idea into a plain shell alias — the CLI mostly just typed less than `mkdir` and `$EDITOR` combined.",
          "Erreichte einige Hundert wöchentliche npm-Downloads, bevor ich die Idee in einen einfachen Shell-Alias überführte — das CLI tippte im Wesentlichen nur weniger als `mkdir` und `$EDITOR` zusammen.",
          locale,
        ),
        callout(
          "callout-info",
          "info",
          "Archived in favor of a three-line shell function — a good reminder that not every recurring task needs a published package.",
          "Archiviert zugunsten einer drei Zeilen langen Shell-Funktion — eine gute Erinnerung, dass nicht jede wiederkehrende Aufgabe ein veröffentlichtes Paket braucht.",
          locale,
        ),
      ],
      toc: [
        {
          id: "h2-overview",
          text: t(locale, "Overview", "Überblick"),
          level: 2,
        },
      ],
      seo: projectSeo(
        locale,
        `${title} — case study`,
        t(
          locale,
          "A small open-source CLI, and the lesson in knowing when to retire one.",
          "Ein kleines Open-Source-CLI und die Lektion, wann man eines besser einstellt.",
        ),
        slug,
      ),
    });
  }

  // 5. Component Atlas — inDevelopment
  {
    const slug = "component-atlas";
    const title = "Component Atlas";
    projects.push({
      id: "proj-component-atlas",
      title,
      summary: t(
        locale,
        "A visual diffing tool for catching unintended design-system regressions.",
        "Ein visuelles Diffing-Tool zum Erkennen unbeabsichtigter Design-System-Regressionen.",
      ),
      cover: cover(
        "component-atlas-cover",
        "A grid of component screenshots with diff highlights",
      ),
      tech: ["React", "Storybook", "Vite", "Playwright"],
      href: `/${locale}/work/${slug}`,
      slug,
      role: t(locale, "Solo developer", "Solo-Entwickler"),
      period: { start: "2026-02-01", end: null, isCurrent: true },
      status: "inDevelopment",
      links: [
        {
          kind: "repository",
          href: "https://github.com/damilolabada/component-atlas",
        },
        { kind: "other", href: "https://component-atlas-demo.vercel.app" },
      ],
      body: [
        para(
          "intro",
          "A side project born from one too many Storybook PRs that silently changed a shared component's padding for every consumer.",
          "Ein Nebenprojekt, entstanden aus einem Storybook-PR zu viel, der stillschweigend das Padding einer gemeinsam genutzten Komponente für alle Verwender änderte.",
          locale,
        ),
        heading("h2-overview", "Overview", "Überblick", locale),
        para(
          "overview-p1",
          "Crawls a Storybook build, screenshots every story with Playwright, and diffs pixel output against the previous commit's screenshots in CI.",
          "Durchsucht einen Storybook-Build, fotografiert jede Story mit Playwright und vergleicht die Pixel-Ausgabe mit den Screenshots des vorherigen Commits in der CI.",
          locale,
        ),
        bullet(
          "li-1",
          "Renders a side-by-side diff view as a PR comment, not just a pass/fail check",
          "Rendert eine Nebeneinander-Diff-Ansicht als PR-Kommentar, nicht nur eine Bestanden/Durchgefallen-Prüfung",
          locale,
        ),
        bullet(
          "li-2",
          "Ignores anti-aliasing noise below a configurable pixel-difference threshold",
          "Ignoriert Anti-Aliasing-Rauschen unterhalb eines konfigurierbaren Pixel-Differenz-Schwellenwerts",
          locale,
        ),
        para(
          "status-p1",
          "Still pre-1.0 — currently dogfeeding it against this portfolio's own packages/ui Storybook.",
          "Noch vor 1.0 — wird derzeit am eigenen packages/ui-Storybook dieses Portfolios im Eigenversuch getestet.",
          locale,
        ),
      ],
      toc: [
        {
          id: "h2-overview",
          text: t(locale, "Overview", "Überblick"),
          level: 2,
        },
      ],
      seo: projectSeo(
        locale,
        `${title} — case study`,
        t(
          locale,
          "Building a visual regression tool for a component library, one Storybook PR mistake at a time.",
          "Ein visuelles Regressionstool für eine Komponentenbibliothek bauen — ein Storybook-PR-Fehler nach dem anderen.",
        ),
        slug,
      ),
    });
  }

  // Wire up previous/next neighbours in array order.
  for (let i = 0; i < projects.length; i++) {
    const current = projects[i];
    if (!current) continue;
    const previous = projects[i - 1];
    const next = projects[i + 1];
    if (previous) {
      current.previous = { title: previous.title, href: previous.href };
    }
    if (next) {
      current.next = { title: next.title, href: next.href };
    }
  }

  return projects;
}

const projectsByLocale: Record<Locale, Project[]> = {
  en: buildProjects("en"),
  de: buildProjects("de"),
};

export function getProjects(locale: Locale): Project[] {
  return projectsByLocale[locale];
}

export function toProjectCard(project: Project, index: string): ProjectCard {
  return {
    id: project.id,
    index,
    title: project.title,
    summary: project.summary,
    cover: project.cover,
    tech: project.tech,
    href: project.href,
  };
}
