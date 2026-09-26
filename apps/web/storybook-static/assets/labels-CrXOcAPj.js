import { n as e } from "./rolldown-runtime-DkW27tQK.js";
function t(e, t) {
  return {
    src: `https://picsum.photos/seed/${e}/1600/1000`,
    width: 1600,
    height: 1e3,
    alt: t,
    lqip: `data:image/jpeg;base64,`,
  };
}
function n(e, t, n) {
  return e === `de` ? n : t;
}
function r(e, t, r, i) {
  return {
    _type: `block`,
    _key: e,
    style: `normal`,
    markDefs: [],
    children: [{ _type: `span`, _key: `${e}-span`, text: n(i, t, r) }],
  };
}
function i(e, t, r, i) {
  return {
    _type: `block`,
    _key: e,
    style: `h2`,
    markDefs: [],
    children: [{ _type: `span`, _key: `${e}-span`, text: n(i, t, r) }],
  };
}
function a(e, t, r, i) {
  return {
    _type: `block`,
    _key: e,
    style: `normal`,
    listItem: `bullet`,
    level: 1,
    markDefs: [],
    children: [{ _type: `span`, _key: `${e}-span`, text: n(i, t, r) }],
  };
}
function o(e, t, n, i, a) {
  return {
    _type: `callout`,
    _key: e,
    tone: t,
    body: [r(`${e}-body`, n, i, a)],
  };
}
function s(e) {
  let s = [];
  {
    let c = `elliesnote`,
      l = `Ellie's Note`;
    s.push({
      id: `proj-elliesnote`,
      title: l,
      summary: n(
        e,
        `A journalling app for new parents to track feeds, sleep and milestones.`,
        `Eine Tagebuch-App für frischgebackene Eltern zum Tracken von Mahlzeiten, Schlaf und Meilensteinen.`,
      ),
      cover: t(
        `elliesnote-cover`,
        `Screenshot of the Ellie's Note app dashboard`,
      ),
      tech: [`TypeScript`, `React Native`, `Node.js`, `PostgreSQL`],
      href: `/${e}/work/${c}`,
      slug: c,
      role: n(e, `Fullstack developer`, `Fullstack-Entwickler`),
      period: { start: `2023-02-01`, end: null, isCurrent: !0 },
      status: `live`,
      links: [
        { kind: `live`, href: `https://elliesnote.app` },
        { kind: `appStore`, href: `https://apps.apple.com/app/elliesnote` },
      ],
      body: [
        r(
          `intro`,
          `Ellie's Note started as a weekend project to replace a paper feeding log and grew into a small subscription app used by a few hundred families.`,
          `Ellie's Note begann als Wochenendprojekt zum Ersatz eines Papier-Fütterungslogs und wuchs zu einer kleinen Abo-App, die von einigen Hundert Familien genutzt wird.`,
          e,
        ),
        i(`h2-overview`, `Overview`, `Überblick`, e),
        r(
          `overview-p1`,
          `A React Native app synced through a small Node.js API, with Postgres as the source of truth and an offline-first cache on-device for sleepless 3am logging.`,
          `Eine React-Native-App, synchronisiert über eine kleine Node.js-API, mit Postgres als Datenquelle und einem Offline-First-Cache auf dem Gerät für das Protokollieren um 3 Uhr morgens.`,
          e,
        ),
        a(
          `li-1`,
          `Shared timeline for both parents, synced in near real-time`,
          `Gemeinsame Timeline für beide Elternteile, nahezu in Echtzeit synchronisiert`,
          e,
        ),
        a(
          `li-2`,
          `Growth-chart percentiles computed against WHO reference tables`,
          `Wachstumskurven-Perzentile berechnet anhand von WHO-Referenztabellen`,
          e,
        ),
        i(`h2-challenges`, `Challenges`, `Herausforderungen`, e),
        r(
          `challenges-p1`,
          `Offline-first sync conflicts — two parents logging the same feed on two phones — needed a last-write-wins strategy with a manual merge UI as a fallback.`,
          `Offline-First-Sync-Konflikte — zwei Elternteile protokollieren dieselbe Mahlzeit auf zwei Handys — erforderten eine Last-Write-Wins-Strategie mit einer manuellen Merge-Oberfläche als Rückfallebene.`,
          e,
        ),
        o(
          `callout-tip`,
          `tip`,
          `Shipping the growth-chart feature first, before push notifications, turned out to be the single biggest driver of subscriptions.`,
          `Das Wachstumskurven-Feature vor den Push-Benachrichtigungen auszuliefern, erwies sich als der mit Abstand größte Treiber für Abonnements.`,
          e,
        ),
      ],
      toc: [
        { id: `h2-overview`, text: n(e, `Overview`, `Überblick`), level: 2 },
        {
          id: `h2-challenges`,
          text: n(e, `Challenges`, `Herausforderungen`),
          level: 2,
        },
      ],
      seo: u(
        e,
        `${l} — case study`,
        n(
          e,
          `How I built a cross-platform journalling app for new parents.`,
          `Wie ich eine plattformübergreifende Tagebuch-App für frischgebackene Eltern gebaut habe.`,
        ),
        c,
      ),
    });
  }
  {
    let a = `portfolio`,
      o = `damilolabada.com`;
    s.push({
      id: `proj-portfolio`,
      title: o,
      summary: n(
        e,
        `This site — a Sanity-backed, next-intl portfolio and blog.`,
        `Diese Seite — ein Sanity-gestütztes Portfolio und Blog mit next-intl.`,
      ),
      cover: t(`portfolio-cover`, `Screenshot of this portfolio homepage`),
      tech: [`Next.js`, `Sanity`, `Tailwind CSS`, `Turborepo`],
      href: `/${e}/work/${a}`,
      slug: a,
      role: n(e, `Designer & developer`, `Designer & Entwickler`),
      period: { start: `2025-11-01`, end: `2026-03-01`, isCurrent: !1 },
      status: `inDevelopment`,
      links: [
        {
          kind: `repository`,
          href: `https://github.com/damilolabada/personal-portfolio`,
        },
      ],
      body: [
        r(
          `intro`,
          `A ground-up rebuild of my portfolio as a Turborepo monorepo, split into a design-tokens package, a headless UI library, content contracts, and a Next.js app.`,
          `Ein kompletter Neuaufbau meines Portfolios als Turborepo-Monorepo, aufgeteilt in ein Design-Tokens-Paket, eine headless UI-Bibliothek, Content-Contracts und eine Next.js-App.`,
          e,
        ),
        i(`h2-overview`, `Overview`, `Überblick`, e),
        r(
          `overview-p1`,
          `Every content type — homepage sections, blog posts, case studies, legal pages — is defined once as a zod schema, with a fixtures-backed mock service standing in for Sanity until the CMS schemas are finished.`,
          `Jeder Inhaltstyp — Homepage-Abschnitte, Blogbeiträge, Case Studies, rechtliche Seiten — wird einmal als Zod-Schema definiert, mit einem Fixtures-gestützten Mock-Service als Platzhalter für Sanity, bis die CMS-Schemas fertig sind.`,
          e,
        ),
        i(`h2-challenges`, `Challenges`, `Herausforderungen`, e),
        r(
          `challenges-p1`,
          `Keeping UI components decoupled from next-intl meant every component takes pre-resolved label props instead of calling a translation hook directly — a small extra layer that pays off once Sanity-authored copy needs to render the exact same components.`,
          `UI-Komponenten von next-intl zu entkoppeln bedeutete, dass jede Komponente vorab aufgelöste Label-Props statt eines direkten Übersetzungs-Hooks erhält — eine kleine zusätzliche Schicht, die sich auszahlt, sobald in Sanity verfasste Inhalte dieselben Komponenten rendern müssen.`,
          e,
        ),
      ],
      toc: [
        { id: `h2-overview`, text: n(e, `Overview`, `Überblick`), level: 2 },
        {
          id: `h2-challenges`,
          text: n(e, `Challenges`, `Herausforderungen`),
          level: 2,
        },
      ],
      seo: u(
        e,
        `${o} — case study`,
        n(
          e,
          `Notes on building this portfolio as a Turborepo monorepo.`,
          `Notizen zum Aufbau dieses Portfolios als Turborepo-Monorepo.`,
        ),
        a,
      ),
    });
  }
  {
    let o = `routinely`,
      c = `Routinely`;
    s.push({
      id: `proj-routinely`,
      title: c,
      summary: n(
        e,
        `A habit-tracking app built around small, forgiving daily streaks.`,
        `Eine Habit-Tracking-App rund um kleine, nachsichtige tägliche Streaks.`,
      ),
      cover: t(`routinely-cover`, `Screenshot of the Routinely habit tracker`),
      tech: [`React Native`, `Expo`, `Supabase`],
      href: `/${e}/work/${o}`,
      slug: o,
      role: n(e, `Mobile developer`, `Mobile Entwickler`),
      period: { start: `2024-06-01`, end: null, isCurrent: !0 },
      status: `live`,
      links: [
        { kind: `appStore`, href: `https://apps.apple.com/app/routinely` },
        {
          kind: `playStore`,
          href: `https://play.google.com/store/apps/details?id=com.routinely`,
        },
      ],
      body: [
        r(
          `intro`,
          `Most habit trackers punish a missed day so harshly that people delete the app. Routinely's streak logic forgives one missed day per week without resetting progress.`,
          `Die meisten Habit-Tracker bestrafen einen verpassten Tag so hart, dass Nutzer die App löschen. Die Streak-Logik von Routinely verzeiht einen verpassten Tag pro Woche, ohne den Fortschritt zurückzusetzen.`,
          e,
        ),
        i(`h2-overview`, `Overview`, `Überblick`, e),
        r(
          `overview-p1`,
          `Built with Expo for a fast iteration loop and Supabase for auth and sync, so the whole backend is a hosted Postgres instance with row-level security instead of a bespoke API.`,
          `Gebaut mit Expo für schnelle Iterationszyklen und Supabase für Auth und Synchronisierung — das gesamte Backend ist eine gehostete Postgres-Instanz mit Row-Level-Security statt einer eigenen API.`,
          e,
        ),
        a(
          `li-1`,
          `Widget support for at-a-glance streak status on the home screen`,
          `Widget-Unterstützung für den Streak-Status auf einen Blick auf dem Homescreen`,
          e,
        ),
        a(
          `li-2`,
          `Local notifications scheduled entirely on-device, no push infrastructure`,
          `Lokale Benachrichtigungen komplett auf dem Gerät geplant, keine Push-Infrastruktur`,
          e,
        ),
        i(`h2-impact`, `Impact`, `Wirkung`, e),
        r(
          `impact-p1`,
          `Week-two retention roughly doubled after switching from strict streaks to the forgiving model, based on the app's own anonymized usage counters.`,
          `Die Retention in Woche zwei verdoppelte sich in etwa nach dem Wechsel von strikten Streaks zum nachsichtigen Modell, basierend auf den anonymisierten Nutzungszählern der App.`,
          e,
        ),
      ],
      toc: [
        { id: `h2-overview`, text: n(e, `Overview`, `Überblick`), level: 2 },
        { id: `h2-impact`, text: n(e, `Impact`, `Wirkung`), level: 2 },
      ],
      seo: u(
        e,
        `${c} — case study`,
        n(
          e,
          `Designing a habit tracker that forgives a missed day instead of punishing it.`,
          `Eine Habit-Tracking-App entwerfen, die einen verpassten Tag verzeiht statt bestraft.`,
        ),
        o,
      ),
    });
  }
  {
    let a = `devnotes-cli`,
      c = `devnotes-cli`;
    s.push({
      id: `proj-devnotes-cli`,
      title: c,
      summary: n(
        e,
        `An open-source CLI for keeping dated engineering notes alongside a git repo.`,
        `Ein Open-Source-CLI zum Führen datierter Engineering-Notizen neben einem Git-Repository.`,
      ),
      cover: t(`devnotes-cover`, `A terminal window showing the devnotes CLI`),
      tech: [`Node.js`, `TypeScript`, `Commander.js`],
      href: `/${e}/work/${a}`,
      slug: a,
      role: n(e, `Creator & maintainer`, `Ersteller & Maintainer`),
      period: { start: `2022-01-01`, end: `2023-09-01`, isCurrent: !1 },
      status: `archived`,
      links: [
        {
          kind: `repository`,
          href: `https://github.com/damilolabada/devnotes-cli`,
        },
        { kind: `other`, href: `https://www.npmjs.com/package/devnotes-cli` },
      ],
      body: [
        r(
          `intro`,
          "A small CLI that scaffolds a dated markdown file in a `.devnotes/` folder, so debugging notes and decisions live next to the code they're about, versioned in the same repo.",
          "Ein kleines CLI, das eine datierte Markdown-Datei in einem `.devnotes/`-Ordner anlegt, sodass Debugging-Notizen und Entscheidungen neben dem Code liegen, auf den sie sich beziehen, versioniert im selben Repository.",
          e,
        ),
        i(`h2-overview`, `Overview`, `Überblick`, e),
        r(
          `overview-p1`,
          "Peaked at a few hundred weekly npm downloads before I folded the idea into a plain shell alias — the CLI mostly just typed less than `mkdir` and `$EDITOR` combined.",
          "Erreichte einige Hundert wöchentliche npm-Downloads, bevor ich die Idee in einen einfachen Shell-Alias überführte — das CLI tippte im Wesentlichen nur weniger als `mkdir` und `$EDITOR` zusammen.",
          e,
        ),
        o(
          `callout-info`,
          `info`,
          `Archived in favor of a three-line shell function — a good reminder that not every recurring task needs a published package.`,
          `Archiviert zugunsten einer drei Zeilen langen Shell-Funktion — eine gute Erinnerung, dass nicht jede wiederkehrende Aufgabe ein veröffentlichtes Paket braucht.`,
          e,
        ),
      ],
      toc: [
        { id: `h2-overview`, text: n(e, `Overview`, `Überblick`), level: 2 },
      ],
      seo: u(
        e,
        `${c} — case study`,
        n(
          e,
          `A small open-source CLI, and the lesson in knowing when to retire one.`,
          `Ein kleines Open-Source-CLI und die Lektion, wann man eines besser einstellt.`,
        ),
        a,
      ),
    });
  }
  {
    let o = `component-atlas`,
      c = `Component Atlas`;
    s.push({
      id: `proj-component-atlas`,
      title: c,
      summary: n(
        e,
        `A visual diffing tool for catching unintended design-system regressions.`,
        `Ein visuelles Diffing-Tool zum Erkennen unbeabsichtigter Design-System-Regressionen.`,
      ),
      cover: t(
        `component-atlas-cover`,
        `A grid of component screenshots with diff highlights`,
      ),
      tech: [`React`, `Storybook`, `Vite`, `Playwright`],
      href: `/${e}/work/${o}`,
      slug: o,
      role: n(e, `Solo developer`, `Solo-Entwickler`),
      period: { start: `2026-02-01`, end: null, isCurrent: !0 },
      status: `inDevelopment`,
      links: [
        {
          kind: `repository`,
          href: `https://github.com/damilolabada/component-atlas`,
        },
        { kind: `other`, href: `https://component-atlas-demo.vercel.app` },
      ],
      body: [
        r(
          `intro`,
          `A side project born from one too many Storybook PRs that silently changed a shared component's padding for every consumer.`,
          `Ein Nebenprojekt, entstanden aus einem Storybook-PR zu viel, der stillschweigend das Padding einer gemeinsam genutzten Komponente für alle Verwender änderte.`,
          e,
        ),
        i(`h2-overview`, `Overview`, `Überblick`, e),
        r(
          `overview-p1`,
          `Crawls a Storybook build, screenshots every story with Playwright, and diffs pixel output against the previous commit's screenshots in CI.`,
          `Durchsucht einen Storybook-Build, fotografiert jede Story mit Playwright und vergleicht die Pixel-Ausgabe mit den Screenshots des vorherigen Commits in der CI.`,
          e,
        ),
        a(
          `li-1`,
          `Renders a side-by-side diff view as a PR comment, not just a pass/fail check`,
          `Rendert eine Nebeneinander-Diff-Ansicht als PR-Kommentar, nicht nur eine Bestanden/Durchgefallen-Prüfung`,
          e,
        ),
        a(
          `li-2`,
          `Ignores anti-aliasing noise below a configurable pixel-difference threshold`,
          `Ignoriert Anti-Aliasing-Rauschen unterhalb eines konfigurierbaren Pixel-Differenz-Schwellenwerts`,
          e,
        ),
        r(
          `status-p1`,
          `Still pre-1.0 — currently dogfeeding it against this portfolio's own packages/ui Storybook.`,
          `Noch vor 1.0 — wird derzeit am eigenen packages/ui-Storybook dieses Portfolios im Eigenversuch getestet.`,
          e,
        ),
      ],
      toc: [
        { id: `h2-overview`, text: n(e, `Overview`, `Überblick`), level: 2 },
      ],
      seo: u(
        e,
        `${c} — case study`,
        n(
          e,
          `Building a visual regression tool for a component library, one Storybook PR mistake at a time.`,
          `Ein visuelles Regressionstool für eine Komponentenbibliothek bauen — ein Storybook-PR-Fehler nach dem anderen.`,
        ),
        o,
      ),
    });
  }
  for (let e = 0; e < s.length; e++) {
    let t = s[e];
    if (!t) continue;
    let n = s[e - 1],
      r = s[e + 1];
    (n && (t.previous = { title: n.title, href: n.href }),
      r && (t.next = { title: r.title, href: r.href }));
  }
  return s;
}
function c(e) {
  return d[e];
}
function l(e, t) {
  return {
    id: e.id,
    index: t,
    title: e.title,
    summary: e.summary,
    cover: e.cover,
    tech: e.tech,
    href: e.href,
  };
}
var u, d;
function f() {
  return (f = e(() => {
    ((u = (e, t, n, r) => ({
      title: t,
      description: n,
      canonicalUrl: `https://damilolabada.com/${e}/work/${r}`,
      noIndex: !1,
      alternates: [
        { locale: `en`, href: `https://damilolabada.com/en/work/${r}` },
        { locale: `de`, href: `https://damilolabada.com/de/work/${r}` },
      ],
    })),
      (d = { en: s(`en`), de: s(`de`) }));
  }))();
}
function p(e) {
  let t = m[e],
    n = c(e);
  return {
    seo: {
      title: `Damilola Bada — Fullstack developer`,
      description:
        e === `de`
          ? `Fullstack-Entwickler mit Fokus auf Frontend-Grundlagen und KI-Engineering.`
          : `Fullstack developer focused on frontend fundamentals and AI engineering.`,
      canonicalUrl: `https://damilolabada.com/${e}`,
      noIndex: !1,
      alternates: [
        { locale: `en`, href: `https://damilolabada.com/en` },
        { locale: `de`, href: `https://damilolabada.com/de` },
      ],
    },
    hero: {
      name: `Damilola Bada`,
      facts: {
        location: e === `de` ? `Deutschland` : `Germany`,
        role: `Fullstack developer`,
        yearsOfExperience: 4,
      },
      intro:
        e === `de`
          ? `Ich baue Web- und Mobile-Apps, die einfach funktionieren — sauber, schnell und einfach zu bedienen. Ich liebe es, Ideen in die Realität umzusetzen und echte Probleme für Menschen zu lösen.`
          : `I build web and mobile apps that just work — clean, fast, and easy to use. I love turning ideas into reality and solving real problems for people.`,
      primaryCta: {
        label: e === `de` ? `Ausgewählte Projekte` : `Selected work`,
        href: `/${e}#work`,
        external: !1,
      },
    },
    about: {
      id: `about`,
      index: `01`,
      heading: t.about,
      portrait: h,
      body: [
        {
          _type: `block`,
          _key: `about-p1`,
          style: `normal`,
          children: [
            {
              _type: `span`,
              _key: `about-p1-span`,
              text:
                e === `de`
                  ? `Ich bin Fullstack-Entwickler mit Sitz in Deutschland und konzentriere mich darauf, Web- und Mobile-Produkte zu bauen, die sich einfach anfühlen — auch wenn die Systeme dahinter es nicht sind. Meine Arbeit reicht von Design-Systemen über Frontend-Architektur bis hin zu den Backend-Services, die alles schnell und zuverlässig laufen lassen.`
                  : `I'm a fullstack developer based in Germany, focused on building web and mobile products that feel simple even when the systems behind them aren't. My work spans design systems, frontend architecture, and the backend services that keep everything fast and reliable.`,
            },
          ],
          markDefs: [],
        },
        {
          _type: `block`,
          _key: `about-p2`,
          style: `normal`,
          children: [
            {
              _type: `span`,
              _key: `about-p2-span`,
              text:
                e === `de`
                  ? `In den letzten vier Jahren habe ich alles von frühen MVPs bis hin zu produktiven SaaS-Plattformen ausgeliefert, mit wachsendem Fokus darauf, KI auf echte Produktprobleme anzuwenden statt sie nur als Feature aufzusetzen. Mir sind sauberer Code, durchdachtes UX und Dinge, die tatsächlich funktionieren, wichtig.`
                  : `Over the past four years I've shipped everything from early-stage MVPs to production SaaS platforms, with a growing focus on applying AI to real product problems rather than bolting it on as a feature. I care about clean code, thoughtful UX, and shipping things that actually work.`,
            },
          ],
          markDefs: [],
        },
      ],
    },
    experience: {
      id: `experience`,
      index: `02`,
      heading: t.experience,
      items: [
        {
          id: `exp-1`,
          role: `Fullstack developer`,
          company: { name: `Acme Corp`, url: `https://acme.example.com` },
          location: e === `de` ? `Berlin, Deutschland` : `Berlin, Germany`,
          workMode: `hybrid`,
          period: { start: `2023-03-01`, end: null, isCurrent: !0 },
          summary:
            e === `de`
              ? `Verantwortlich für das Frontend eines B2B-SaaS-Produkts.`
              : `Responsible for the frontend of a B2B SaaS product.`,
          highlights: [
            e === `de`
              ? `Design-System von Grund auf aufgebaut`
              : `Built the design system from scratch`,
            e === `de`
              ? `Ladezeiten um 40% reduziert`
              : `Reduced load times by 40%`,
          ],
        },
        {
          id: `exp-2`,
          role: e === `de` ? `Frontend-Entwickler` : `Frontend developer`,
          company: {
            name: `Northwind Digital`,
            url: `https://northwind.example.com`,
          },
          location: `Remote`,
          workMode: `remote`,
          period: { start: `2022-01-01`, end: `2023-02-28`, isCurrent: !1 },
          summary:
            e === `de`
              ? `Entwicklung und Wartung mehrerer React-basierter Marketing-Sites und interner Tools für ein verteiltes Team.`
              : `Built and maintained several React-based marketing sites and internal tools for a distributed team.`,
          highlights: [
            e === `de`
              ? `Komponentenbibliothek für 6 Produktteams eingeführt`
              : `Introduced a shared component library used by 6 product teams`,
            e === `de`
              ? `Core Web Vitals über alle Sites hinweg verbessert`
              : `Improved Core Web Vitals scores across all sites`,
          ],
        },
        {
          id: `exp-3`,
          role: `Fullstack developer`,
          company: {
            name: `Bluepeak Software`,
            url: `https://bluepeak.example.com`,
          },
          location: e === `de` ? `München, Deutschland` : `Munich, Germany`,
          workMode: `onsite`,
          period: { start: `2021-02-01`, end: `2021-12-31`, isCurrent: !1 },
          summary:
            e === `de`
              ? `Entwicklung von Kundenprojekten mit Node.js und React für eine Digitalagentur.`
              : `Built client projects with Node.js and React for a digital agency.`,
          highlights: [
            e === `de`
              ? `5 Kundenprojekte termingerecht ausgeliefert`
              : `Delivered 5 client projects on schedule`,
            e === `de`
              ? `REST-APIs für mobile Begleit-Apps entworfen`
              : `Designed REST APIs powering companion mobile apps`,
          ],
        },
        {
          id: `exp-4`,
          role:
            e === `de`
              ? `Junior Frontend-Entwickler`
              : `Junior frontend developer`,
          company: {
            name: `Studio Nine`,
            url: `https://studionine.example.com`,
          },
          location: e === `de` ? `Hamburg, Deutschland` : `Hamburg, Germany`,
          workMode: `hybrid`,
          period: { start: `2020-06-01`, end: `2021-01-31`, isCurrent: !1 },
          summary:
            e === `de`
              ? `Umsetzung von Webdesigns in responsive, barrierefreie Interfaces für kleine Unternehmenskunden.`
              : `Turned web designs into responsive, accessible interfaces for small business clients.`,
          highlights: [
            e === `de`
              ? `Über 20 responsive Websites gebaut`
              : `Built more than 20 responsive websites`,
            e === `de`
              ? `Barrierefreiheits-Audits eingeführt`
              : `Introduced accessibility audits into the team's workflow`,
          ],
        },
        {
          id: `exp-5`,
          role:
            e === `de` ? `Web-Entwickler (Praktikum)` : `Web developer intern`,
          company: {
            name: `Vantage Labs`,
            url: `https://vantagelabs.example.com`,
          },
          location: e === `de` ? `Köln, Deutschland` : `Cologne, Germany`,
          workMode: `onsite`,
          period: { start: `2019-09-01`, end: `2020-05-31`, isCurrent: !1 },
          summary:
            e === `de`
              ? `Unterstützung des Entwicklungsteams bei Wartung und Tests einer internen Web-App.`
              : `Supported the engineering team with maintenance and testing of an internal web app.`,
          highlights: [
            e === `de`
              ? `Testabdeckung des Frontends verdoppelt`
              : `Doubled the frontend's test coverage`,
            e === `de`
              ? `Erste eigene Feature-Umsetzung von Anfang bis Ende`
              : `Shipped a first end-to-end feature independently`,
          ],
        },
      ],
    },
    work: {
      id: `work`,
      index: `03`,
      heading: t.work,
      projects: n.map((e, t) => l(e, String(t + 1).padStart(2, `0`))),
    },
    skills: {
      id: `skills`,
      index: `04`,
      heading: t.skills,
      marqueeRows: [
        [
          `React`,
          `✦`,
          `Next.js`,
          `✦`,
          `React Native`,
          `✦`,
          `TypeScript`,
          `✦`,
          `Tailwind CSS`,
          `✦`,
        ],
        [
          `Node.js`,
          `✦`,
          `NestJS`,
          `✦`,
          `PostgreSQL`,
          `✦`,
          `Docker`,
          `✦`,
          `AWS`,
          `✦`,
        ],
      ],
      groups: [
        {
          title: `Frontend`,
          skills: [
            `React`,
            `Next.js`,
            `React Native`,
            `TypeScript`,
            `Tailwind CSS`,
          ],
        },
        {
          title: `Backend`,
          skills: [
            `Node.js`,
            `NestJS`,
            `Express`,
            `REST API`,
            `GraphQL`,
            `Golang`,
          ],
        },
        {
          title: `Database`,
          skills: [
            `PostgreSQL`,
            `MongoDB`,
            `Redis`,
            `Prisma`,
            `TypeORM`,
            `Drizzle ORM`,
          ],
        },
        {
          title:
            e === `de`
              ? `DevOps, Tools & Architektur`
              : `DevOps, Tools & Architecture`,
          skills: [
            `Docker`,
            `AWS`,
            `Git`,
            `CI/CD`,
            `Testing`,
            `Monorepo`,
            `Microservices`,
            `Serverless`,
          ],
        },
      ],
    },
    contact: {
      id: `contact`,
      index: `05`,
      heading: t.contact,
      body:
        e === `de`
          ? `Bereit, deine Ideen zum Leben zu erwecken? Lass uns über dein nächstes Projekt sprechen und gemeinsam etwas Großartiges schaffen.`
          : `Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.`,
      cta: {
        label: e === `de` ? `E-Mail senden` : `Send an email`,
        email: `badadamilola@gmx.de`,
      },
      socials: [
        {
          platform: `github`,
          label: `GitHub`,
          href: `https://github.com/damilolabada`,
        },
        {
          platform: `linkedin`,
          label: `LinkedIn`,
          href: `https://linkedin.com/in/damilolabada`,
        },
      ],
    },
  };
}
var m, h;
function g() {
  return (g = e(() => {
    (f(),
      (m = {
        en: {
          about: `About`,
          experience: `Experience`,
          work: `Selected work`,
          skills: `Technologies`,
          contact: `Let's work together`,
        },
        de: {
          about: `Über mich`,
          experience: `Erfahrung`,
          work: `Ausgewählte Projekte`,
          skills: `Technologien`,
          contact: `Lass uns zusammenarbeiten`,
        },
      }),
      (h = {
        src: `https://images.unsplash.com/photo-1693287728946-058e154f3a14?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
        width: 800,
        height: 1e3,
        alt: `Portrait photo`,
        lqip: `data:image/jpeg;base64,`,
      }));
  }))();
}
function _(e, t) {
  return {
    _type: `block`,
    _key: e,
    style: `normal`,
    markDefs: [],
    children: [{ _type: `span`, _key: `${e}-span`, text: t }],
  };
}
function v(e, t) {
  return {
    _type: `block`,
    _key: e,
    style: `h2`,
    markDefs: [],
    children: [{ _type: `span`, _key: `${e}-span`, text: t }],
  };
}
function y(e, t) {
  return C[e][t] ?? null;
}
function b(e) {
  return Object.keys(C[e]);
}
var x, S, C;
function w() {
  return (w = e(() => {
    ((x = {
      en: [
        v(`h2-provider`, `Service provider`),
        _(
          `provider-p1`,
          `Damilola Bada, Musterstraße 1, 10115 Berlin, Germany.`,
        ),
        _(`provider-p2`, `Email: badadamilola@gmail.com`),
        v(`h2-responsible`, `Responsible for content`),
        _(
          `responsible-p1`,
          `Damilola Bada, at the address above, responsible per § 55 (2) RStV.`,
        ),
        v(`h2-disclaimer`, `Disclaimer`),
        _(
          `disclaimer-p1`,
          `Despite careful review of content, no liability is assumed for the content of external links. The operators of linked pages are solely responsible for their content.`,
        ),
      ],
      de: [
        v(`h2-provider`, `Diensteanbieter`),
        _(
          `provider-p1`,
          `Damilola Bada, Musterstraße 1, 10115 Berlin, Deutschland.`,
        ),
        _(`provider-p2`, `E-Mail: badadamilola@gmail.com`),
        v(`h2-responsible`, `Verantwortlich für den Inhalt`),
        _(
          `responsible-p1`,
          `Damilola Bada, unter der oben genannten Anschrift, verantwortlich gemäß § 55 Abs. 2 RStV.`,
        ),
        v(`h2-disclaimer`, `Haftungsausschluss`),
        _(
          `disclaimer-p1`,
          `Trotz sorgfältiger inhaltlicher Kontrolle wird keine Haftung für die Inhalte externer Links übernommen. Für den Inhalt verlinkter Seiten sind ausschließlich deren Betreiber verantwortlich.`,
        ),
      ],
    }),
      (S = {
        en: [
          v(`h2-overview`, `Overview`),
          _(
            `overview-p1`,
            `This page explains what data this site collects and why, in plain language. This is a personal portfolio site with no analytics trackers and no advertising.`,
          ),
          v(`h2-hosting`, `Hosting`),
          _(
            `hosting-p1`,
            `This site is a statically generated Next.js application. Standard web server logs (IP address, requested URL, timestamp, user agent) may be retained briefly by the hosting provider for security and abuse prevention.`,
          ),
          v(`h2-contact`, `Contact`),
          _(
            `contact-p1`,
            `If you email the address listed on the contact section, that message and your email address are stored only as long as needed to respond.`,
          ),
          v(`h2-rights`, `Your rights`),
          _(
            `rights-p1`,
            `You may request information about, correction of, or deletion of any personal data held about you by contacting badadamilola@gmail.com.`,
          ),
        ],
        de: [
          v(`h2-overview`, `Überblick`),
          _(
            `overview-p1`,
            `Diese Seite erklärt in einfacher Sprache, welche Daten diese Website erfasst und warum. Es handelt sich um eine persönliche Portfolio-Website ohne Analyse-Tracker und ohne Werbung.`,
          ),
          v(`h2-hosting`, `Hosting`),
          _(
            `hosting-p1`,
            `Diese Website ist eine statisch generierte Next.js-Anwendung. Standard-Webserver-Logs (IP-Adresse, angeforderte URL, Zeitstempel, User-Agent) können vom Hosting-Anbieter kurzzeitig zur Sicherheit und Missbrauchsprävention gespeichert werden.`,
          ),
          v(`h2-contact`, `Kontakt`),
          _(
            `contact-p1`,
            `Wenn Sie eine E-Mail an die im Kontaktbereich angegebene Adresse senden, werden diese Nachricht und Ihre E-Mail-Adresse nur so lange gespeichert, wie es zur Beantwortung notwendig ist.`,
          ),
          v(`h2-rights`, `Ihre Rechte`),
          _(
            `rights-p1`,
            `Sie können Auskunft über, Berichtigung von oder Löschung Ihrer bei uns gespeicherten personenbezogenen Daten verlangen, indem Sie badadamilola@gmail.com kontaktieren.`,
          ),
        ],
      }),
      (C = {
        en: {
          impressum: {
            title: `Impressum`,
            body: x.en,
            updatedAt: `2026-01-01T00:00:00.000Z`,
            seo: {
              title: `Impressum`,
              description: `Legal notice.`,
              canonicalUrl: `https://damilolabada.com/en/impressum`,
              noIndex: !0,
              alternates: [],
            },
          },
          datenschutz: {
            title: `Privacy policy`,
            body: S.en,
            updatedAt: `2026-01-01T00:00:00.000Z`,
            seo: {
              title: `Privacy policy`,
              description: `Privacy policy.`,
              canonicalUrl: `https://damilolabada.com/en/datenschutz`,
              noIndex: !0,
              alternates: [],
            },
          },
        },
        de: {
          impressum: {
            title: `Impressum`,
            body: x.de,
            updatedAt: `2026-01-01T00:00:00.000Z`,
            seo: {
              title: `Impressum`,
              description: `Rechtlicher Hinweis.`,
              canonicalUrl: `https://damilolabada.com/de/impressum`,
              noIndex: !0,
              alternates: [],
            },
          },
          datenschutz: {
            title: `Datenschutz`,
            body: S.de,
            updatedAt: `2026-01-01T00:00:00.000Z`,
            seo: {
              title: `Datenschutz`,
              description: `Datenschutzerklärung.`,
              canonicalUrl: `https://damilolabada.com/de/datenschutz`,
              noIndex: !0,
              alternates: [],
            },
          },
        },
      }));
  }))();
}
function T(e, t) {
  return {
    src: `https://picsum.photos/seed/${e}/1600/900`,
    width: 1600,
    height: 900,
    alt: t,
    lqip: `data:image/jpeg;base64,`,
  };
}
function E(e, t, n) {
  return {
    src: `https://picsum.photos/seed/${e}/1600/1067`,
    width: 1600,
    height: 1067,
    alt: t,
    lqip: `data:image/jpeg;base64,`,
    exif: n,
  };
}
function D(e, t, n) {
  return e === `de` ? n : t;
}
function O(e, t, n, r) {
  return {
    _type: `block`,
    _key: e,
    style: `normal`,
    markDefs: [],
    children: [{ _type: `span`, _key: `${e}-span`, text: D(r, t, n) }],
  };
}
function k(e, t, n, r, i) {
  return {
    _type: `block`,
    _key: e,
    style: t,
    markDefs: [],
    children: [{ _type: `span`, _key: `${e}-span`, text: D(i, n, r) }],
  };
}
function A(e, t, n, r) {
  return {
    _type: `block`,
    _key: e,
    style: `normal`,
    listItem: `bullet`,
    level: 1,
    markDefs: [],
    children: [{ _type: `span`, _key: `${e}-span`, text: D(r, t, n) }],
  };
}
function j(e, t, n, r, i) {
  return {
    _type: `callout`,
    _key: e,
    tone: t,
    body: [O(`${e}-body`, n, r, i)],
  };
}
function M(e, t, n, r, i = []) {
  return {
    _type: `code`,
    _key: e,
    language: t,
    code: n,
    filename: r,
    highlightedLines: i,
  };
}
function N(e, t, n, r, i) {
  return {
    _type: `figure`,
    _key: e,
    size: r,
    showExif: !!i,
    image: i ? E(t, n, i) : T(t, n),
  };
}
function P(e, t, n = `grid`) {
  return { _type: `gallery`, _key: e, layout: n, showExif: !0, images: t };
}
function F(e) {
  let t = z[e],
    n = [];
  {
    let r = `organizing-a-frontend-monorepo`,
      i = D(
        e,
        `Organizing a frontend monorepo`,
        `Ein Frontend-Monorepo organisieren`,
      ),
      a = [
        O(
          `intro`,
          `A short introduction paragraph on why this project lives in a single pnpm + Turborepo workspace instead of several standalone repos.`,
          `Ein kurzer Einstieg dazu, warum dieses Projekt in einem einzigen pnpm- und Turborepo-Workspace lebt statt in mehreren eigenständigen Repositories.`,
          e,
        ),
        k(
          `h2-packages`,
          `h2`,
          `Splitting into packages`,
          `Aufteilung in Pakete`,
          e,
        ),
        O(
          `packages-p1`,
          `Design tokens, UI primitives, content contracts, and fixtures each live in their own workspace package, so apps/web only ever imports finished, tested building blocks.`,
          `Design-Tokens, UI-Primitives, Content-Contracts und Fixtures leben jeweils in einem eigenen Workspace-Paket, sodass apps/web nur fertige, getestete Bausteine importiert.`,
          e,
        ),
        A(
          `li-ui`,
          `packages/ui for framework-agnostic primitives`,
          `packages/ui für framework-unabhängige Primitives`,
          e,
        ),
        A(
          `li-web`,
          `apps/web for routing, layouts, and translated copy`,
          `apps/web für Routing, Layouts und übersetzte Inhalte`,
          e,
        ),
        j(
          `callout-tip`,
          `tip`,
          `Turborepo's remote cache means a clean install rarely re-runs a build step that already ran on CI.`,
          `Der Remote-Cache von Turborepo sorgt dafür, dass eine frische Installation selten einen Build-Schritt erneut ausführt, der bereits in der CI lief.`,
          e,
        ),
      ];
    n.push({
      id: `post-monorepo`,
      slug: r,
      href: `/${e}/blog/${r}`,
      title: i,
      excerpt: D(
        e,
        `How I split packages and apps in this portfolio project.`,
        `Wie ich Pakete und Apps in diesem Portfolio-Projekt aufgeteilt habe.`,
      ),
      cover: T(`monorepo`, `A laptop showing a code editor on a desk`),
      categories: [t.engineering],
      publishedAt: `2026-01-15T09:00:00.000Z`,
      updatedAt: `2026-02-01T09:00:00.000Z`,
      readingTimeMinutes: 6,
      layout: `standard`,
      body: a,
      toc: [
        {
          id: `h2-packages`,
          text: D(e, `Splitting into packages`, `Aufteilung in Pakete`),
          level: 2,
        },
      ],
      seo: B(
        e,
        i,
        D(
          e,
          `How I split packages and apps in this portfolio project.`,
          `Wie ich Pakete und Apps in diesem Portfolio-Projekt aufgeteilt habe.`,
        ),
        r,
      ),
      related: [],
    });
  }
  {
    let r = `designing-a-type-safe-content-layer`,
      i = D(
        e,
        `Designing a type-safe content layer`,
        `Eine typsichere Content-Schicht entwerfen`,
      );
    n.push({
      id: `post-content-layer`,
      slug: r,
      href: `/${e}/blog/${r}`,
      title: i,
      excerpt: D(
        e,
        `Zod schemas as the contract between the CMS and every component that renders content.`,
        `Zod-Schemas als Vertrag zwischen dem CMS und jeder Komponente, die Inhalte rendert.`,
      ),
      cover: T(`content-layer`, `A schema diagram sketched on a whiteboard`),
      categories: [t.engineering],
      publishedAt: `2025-11-03T09:00:00.000Z`,
      readingTimeMinutes: 7,
      layout: `standard`,
      body: [
        O(
          `intro`,
          `Every view model the frontend touches — a post, a project, the homepage — is defined once as a zod schema in @portfolio/contracts, and nothing downstream trusts unvalidated data.`,
          `Jedes View-Model, mit dem das Frontend arbeitet — ein Beitrag, ein Projekt, die Startseite — wird einmal als Zod-Schema in @portfolio/contracts definiert, und nichts danach vertraut ungeprüften Daten.`,
          e,
        ),
        k(`h2-why-zod`, `h2`, `Why zod`, `Warum Zod`, e),
        O(
          `why-zod-p1`,
          `A schema is both the TypeScript type and the runtime guard, so a malformed draft document throws a clear validation error instead of quietly rendering broken markup.`,
          `Ein Schema ist gleichzeitig der TypeScript-Typ und die Laufzeitprüfung, sodass ein fehlerhaftes Entwurfsdokument einen klaren Validierungsfehler wirft, statt still kaputtes Markup zu rendern.`,
          e,
        ),
        k(`h3-nested`, `h3`, `Nested schemas`, `Verschachtelte Schemas`, e),
        O(
          `nested-p1`,
          `Rich text, images, and SEO metadata are each their own schema, reused across Post, Project, and LegalPage so the shape only has to be right once.`,
          `Rich Text, Bilder und SEO-Metadaten sind jeweils eigene Schemas, die in Post, Project und LegalPage wiederverwendet werden — die Form muss also nur einmal stimmen.`,
          e,
        ),
        A(
          `li-images`,
          `ImageSchema carries a focal point and a blur placeholder`,
          `ImageSchema enthält einen Fokuspunkt und einen Blur-Platzhalter`,
          e,
        ),
        A(
          `li-richtext`,
          `RichTextSchema is Portable Text plus custom figure, gallery, code, and callout blocks`,
          `RichTextSchema ist Portable Text plus eigene Figure-, Galerie-, Code- und Callout-Blöcke`,
          e,
        ),
        j(
          `callout-tip`,
          `tip`,
          `A ContentService interface with two implementations (Sanity, and static fixtures) means every component was buildable before the CMS existed.`,
          `Ein ContentService-Interface mit zwei Implementierungen (Sanity und statische Fixtures) bedeutet, dass jede Komponente gebaut werden konnte, bevor das CMS überhaupt existierte.`,
          e,
        ),
        k(`h2-next`, `h2`, `What's next`, `Was als Nächstes kommt`, e),
        O(
          `next-p1`,
          `The Sanity-backed implementation slots in behind the same interface — no component in apps/web needs to change when the real CMS arrives.`,
          `Die Sanity-gestützte Implementierung setzt hinter demselben Interface an — keine Komponente in apps/web muss sich ändern, wenn das echte CMS kommt.`,
          e,
        ),
      ],
      toc: [
        { id: `h2-why-zod`, text: D(e, `Why zod`, `Warum Zod`), level: 2 },
        {
          id: `h3-nested`,
          text: D(e, `Nested schemas`, `Verschachtelte Schemas`),
          level: 3,
        },
        {
          id: `h2-next`,
          text: D(e, `What's next`, `Was als Nächstes kommt`),
          level: 2,
        },
      ],
      seo: B(
        e,
        i,
        D(
          e,
          `Zod schemas as the contract between the CMS and every component that renders content.`,
          `Zod-Schemas als Vertrag zwischen dem CMS und jeder Komponente, die Inhalte rendert.`,
        ),
        r,
      ),
      related: [],
    });
  }
  {
    let r = `shipping-a-design-system-with-storybook`,
      i = D(
        e,
        `Shipping a design system with Storybook`,
        `Ein Design-System mit Storybook ausliefern`,
      );
    n.push({
      id: `post-design-system`,
      slug: r,
      href: `/${e}/blog/${r}`,
      title: i,
      excerpt: D(
        e,
        `Building every primitive in isolation before a single page exists.`,
        `Jede Primitive isoliert bauen, bevor auch nur eine Seite existiert.`,
      ),
      cover: T(
        `design-system`,
        `A grid of UI components in a Storybook sidebar`,
      ),
      categories: [t.engineering],
      publishedAt: `2025-10-10T09:00:00.000Z`,
      readingTimeMinutes: 6,
      layout: `standard`,
      body: [
        O(
          `intro`,
          `packages/ui shipped 21 primitives — Button, Chip, Heading, and friends — each with a Storybook story before a single apps/web page consumed them.`,
          `packages/ui lieferte 21 Primitives — Button, Chip, Heading und weitere — jeweils mit einer Storybook-Story, bevor auch nur eine apps/web-Seite sie nutzte.`,
          e,
        ),
        k(
          `h2-workflow`,
          `h2`,
          `Component-first workflow`,
          `Komponenten-first-Workflow`,
          e,
        ),
        O(
          `workflow-p1`,
          `Building bottom-up caught prop-shape mistakes early: a Chip that only supported one size, an Icon set missing a name a molecule needed.`,
          `Der Bottom-up-Aufbau deckte Fehler in der Prop-Form früh auf: ein Chip, der nur eine Größe unterstützte, ein Icon-Set ohne einen Namen, den eine Molekül-Komponente brauchte.`,
          e,
        ),
        A(
          `li-a11y`,
          `Every interactive primitive ships with keyboard and screen-reader behavior verified in its story`,
          `Jede interaktive Primitive wird mit geprüftem Tastatur- und Screenreader-Verhalten in ihrer Story ausgeliefert`,
          e,
        ),
        A(
          `li-variants`,
          `class-variance-authority keeps size/tone/variant combinations exhaustive and typed`,
          `class-variance-authority hält Size-/Tone-/Variant-Kombinationen vollständig und typisiert`,
          e,
        ),
        k(
          `h2-upgrade`,
          `h2`,
          `Storybook v10 upgrade`,
          `Storybook-v10-Upgrade`,
          e,
        ),
        O(
          `upgrade-p1`,
          `Moving to @storybook/react-vite meant swapping the bundler assumptions Storybook made about JSX — more on that in a later post.`,
          `Der Wechsel zu @storybook/react-vite bedeutete, die Bundler-Annahmen zu ändern, die Storybook über JSX traf — mehr dazu in einem späteren Beitrag.`,
          e,
        ),
        j(
          `callout-info`,
          `info`,
          `autodocs generates a props table straight from each component's TypeScript interface — no manual documentation to keep in sync.`,
          `autodocs generiert eine Props-Tabelle direkt aus dem TypeScript-Interface jeder Komponente — keine manuelle Dokumentation, die synchron gehalten werden muss.`,
          e,
        ),
      ],
      toc: [
        {
          id: `h2-workflow`,
          text: D(e, `Component-first workflow`, `Komponenten-first-Workflow`),
          level: 2,
        },
        {
          id: `h2-upgrade`,
          text: D(e, `Storybook v10 upgrade`, `Storybook-v10-Upgrade`),
          level: 2,
        },
      ],
      seo: B(
        e,
        i,
        D(
          e,
          `Building every primitive in isolation before a single page exists.`,
          `Jede Primitive isoliert bauen, bevor auch nur eine Seite existiert.`,
        ),
        r,
      ),
      related: [],
    });
  }
  {
    let r = `tailwind-v4-css-first-config-notes`,
      i = D(
        e,
        `Tailwind v4 CSS-first config notes`,
        `Notizen zur CSS-first-Konfiguration von Tailwind v4`,
      );
    n.push({
      id: `post-tailwind-v4`,
      slug: r,
      href: `/${e}/blog/${r}`,
      title: i,
      excerpt: D(
        e,
        `No more tailwind.config.ts — content scanning and theme tokens both move into CSS.`,
        `Kein tailwind.config.ts mehr — Content-Scanning und Theme-Tokens wandern beide in CSS.`,
      ),
      cover: T(`tailwind-v4`, `A terminal showing a Tailwind build running`),
      categories: [t.engineering],
      publishedAt: `2025-08-18T09:00:00.000Z`,
      readingTimeMinutes: 5,
      layout: `standard`,
      body: [
        O(
          `intro`,
          "Tailwind v4 replaces the JS config file with `@import` and `@source` directives written directly in CSS — a real change for a monorepo where components live in a separate package from the app that renders them.",
          "Tailwind v4 ersetzt die JS-Konfigurationsdatei durch `@import`- und `@source`-Direktiven direkt in CSS — eine echte Umstellung für ein Monorepo, in dem Komponenten in einem anderen Paket liegen als die App, die sie rendert.",
          e,
        ),
        k(
          `h2-source`,
          `h2`,
          `@source is the new content array`,
          `@source ist das neue Content-Array`,
          e,
        ),
        O(
          `source-p1`,
          `Forgetting a package's src directory in @source is a silent failure: classes compile fine, just without the CSS that makes them do anything.`,
          `Ein Package-src-Verzeichnis in @source zu vergessen, ist ein stiller Fehler: Klassen kompilieren einwandfrei, nur ohne das CSS, das sie tatsächlich etwas bewirken lässt.`,
          e,
        ),
        M(
          `code-source`,
          `css`,
          `@import "tailwindcss";
@import "@portfolio/design-tokens/styles";
@source "../../node_modules/@portfolio/ui/src";
@source "../../app";
@source "../../src";`,
          `globals.css`,
          [3],
        ),
        k(`h2-variants`, `h2`, `Custom variants`, `Eigene Varianten`, e),
        O(
          `variants-p1`,
          "Dark mode now reads as a single `@custom-variant dark` line instead of a `darkMode` config key, which reads a lot closer to plain CSS.",
          "Dark Mode liest sich jetzt als eine einzelne `@custom-variant dark`-Zeile statt als `darkMode`-Konfigurationsschlüssel — deutlich näher an reinem CSS.",
          e,
        ),
      ],
      toc: [
        {
          id: `h2-source`,
          text: D(
            e,
            `@source is the new content array`,
            `@source ist das neue Content-Array`,
          ),
          level: 2,
        },
        {
          id: `h2-variants`,
          text: D(e, `Custom variants`, `Eigene Varianten`),
          level: 2,
        },
      ],
      seo: B(
        e,
        i,
        D(
          e,
          `No more tailwind.config.ts — content scanning and theme tokens both move into CSS.`,
          `Kein tailwind.config.ts mehr — Content-Scanning und Theme-Tokens wandern beide in CSS.`,
        ),
        r,
      ),
      related: [],
    });
  }
  {
    let r = `debugging-a-storybook-jsx-parsing-bug`,
      i = D(
        e,
        `Debugging a Storybook JSX parsing bug`,
        `Einen JSX-Parsing-Fehler in Storybook debuggen`,
      );
    n.push({
      id: `post-jsx-bug`,
      slug: r,
      href: `/${e}/blog/${r}`,
      title: i,
      excerpt: D(
        e,
        `A tsconfig setting meant for Next.js's SWC pipeline broke Vite's story parser in a different package.`,
        `Eine tsconfig-Einstellung für die SWC-Pipeline von Next.js hat den Vite-Story-Parser in einem anderen Paket kaputt gemacht.`,
      ),
      cover: T(`jsx-bug`, `A red error overlay on a dark terminal`),
      categories: [t.engineering],
      publishedAt: `2025-07-22T09:00:00.000Z`,
      readingTimeMinutes: 8,
      layout: `standard`,
      body: [
        O(
          `intro`,
          `Five story files started failing to build with parse errors from Storybook's export-order plugin, right after Storybook was added to apps/web.`,
          `Fünf Story-Dateien schlugen plötzlich mit Parse-Fehlern des Export-Order-Plugins von Storybook fehl, direkt nachdem Storybook zu apps/web hinzugefügt wurde.`,
          e,
        ),
        k(
          `h2-repro`,
          `h2`,
          `Reproducing the crash`,
          `Den Fehler reproduzieren`,
          e,
        ),
        O(
          `repro-p1`,
          `Copying a known-good story file from packages/ui into apps/web reproduced the same failure, which ruled out the story content itself.`,
          `Eine bekanntermaßen funktionierende Story-Datei aus packages/ui in apps/web zu kopieren, reproduzierte denselben Fehler — das schloss den Story-Inhalt selbst als Ursache aus.`,
          e,
        ),
        j(
          `callout-warning`,
          `warning`,
          `apps/web's tsconfig sets \`jsx: "preserve"\`, required by Next.js's SWC compiler — but Vite's esbuild step auto-detects that same tsconfig and leaves JSX unstripped before the plugin's plain JS/ESM lexer tries to read the file.`,
          'Die tsconfig von apps/web setzt `jsx: "preserve"`, was der SWC-Compiler von Next.js benötigt — Vites esbuild-Schritt erkennt dieselbe tsconfig jedoch automatisch und lässt JSX unverändert, bevor der reine JS/ESM-Lexer des Plugins die Datei liest.',
          e,
        ),
        k(`h2-fix`, `h2`, `The fix`, `Die Lösung`, e),
        M(
          `code-fix`,
          `ts`,
          `config.esbuild = {
  ...(config.esbuild === false ? {} : config.esbuild),
  jsx: "automatic",
};`,
          `.storybook/main.ts`,
          [3],
        ),
        O(
          `fix-p1`,
          `Forcing esbuild's own JSX transform inside Storybook's Vite config — without touching the app's tsconfig — fixed all five files at once.`,
          `Esbuilds eigene JSX-Transformation innerhalb der Vite-Konfiguration von Storybook zu erzwingen — ohne die tsconfig der App anzufassen — behob alle fünf Dateien auf einen Schlag.`,
          e,
        ),
      ],
      toc: [
        {
          id: `h2-repro`,
          text: D(e, `Reproducing the crash`, `Den Fehler reproduzieren`),
          level: 2,
        },
        { id: `h2-fix`, text: D(e, `The fix`, `Die Lösung`), level: 2 },
      ],
      seo: B(
        e,
        i,
        D(
          e,
          `A tsconfig setting meant for Next.js's SWC pipeline broke Vite's story parser in a different package.`,
          `Eine tsconfig-Einstellung für die SWC-Pipeline von Next.js hat den Vite-Story-Parser in einem anderen Paket kaputt gemacht.`,
        ),
        r,
      ),
      related: [],
    });
  }
  {
    let r = `server-components-and-the-shiki-boundary`,
      i = D(
        e,
        `Server Components and the Shiki boundary`,
        `Server Components und die Shiki-Grenze`,
      );
    n.push({
      id: `post-shiki`,
      slug: r,
      href: `/${e}/blog/${r}`,
      title: i,
      excerpt: D(
        e,
        `Keeping syntax highlighting server-side without making the code block component async.`,
        `Syntax-Highlighting serverseitig halten, ohne die Code-Block-Komponente asynchron zu machen.`,
      ),
      cover: T(`shiki`, `Colorful syntax-highlighted code on a screen`),
      categories: [t.engineering],
      publishedAt: `2025-06-14T09:00:00.000Z`,
      readingTimeMinutes: 6,
      layout: `standard`,
      body: [
        O(
          `intro`,
          `Shiki does real syntax highlighting server-side, but an async CodeBlock component can't render inside Storybook's client-rendered story tree.`,
          `Shiki übernimmt echtes Syntax-Highlighting serverseitig, aber eine asynchrone CodeBlock-Komponente kann nicht innerhalb des client-gerenderten Story-Baums von Storybook gerendert werden.`,
          e,
        ),
        k(
          `h2-why`,
          `h2`,
          `Why Shiki can't run in a client tree`,
          `Warum Shiki nicht in einem Client-Baum laufen kann`,
          e,
        ),
        O(
          `why-p1`,
          `The highlighter itself is synchronous once loaded, but loading its language grammars is an async operation — which is fine in a Server Component, and impossible in Storybook's browser-only renderer.`,
          `Der Highlighter selbst arbeitet synchron, sobald er geladen ist, aber das Laden seiner Sprachgrammatiken ist asynchron — das ist in einer Server Component kein Problem, in Storybooks reinem Browser-Renderer aber unmöglich.`,
          e,
        ),
        M(
          `code-helper`,
          `ts`,
          `export async function highlightCode(code: string, lang: string) {
  const highlighter = await getHighlighter();
  return highlighter.codeToHtml(code, { lang });
}`,
          `highlight-code.ts`,
          [],
        ),
        k(
          `h2-boundary`,
          `h2`,
          `Keeping CodeBlock sync`,
          `CodeBlock synchron halten`,
          e,
        ),
        O(
          `boundary-p1`,
          `The route resolves highlighted HTML ahead of time and passes it down as a plain string prop, so CodeBlock itself never awaits anything and renders identically in Next.js and in Storybook.`,
          `Die Route löst das hervorgehobene HTML im Voraus auf und übergibt es als reinen String-Prop, sodass CodeBlock selbst nie etwas awaitet und in Next.js wie in Storybook identisch rendert.`,
          e,
        ),
      ],
      toc: [
        {
          id: `h2-why`,
          text: D(
            e,
            `Why Shiki can't run in a client tree`,
            `Warum Shiki nicht in einem Client-Baum laufen kann`,
          ),
          level: 2,
        },
        {
          id: `h2-boundary`,
          text: D(e, `Keeping CodeBlock sync`, `CodeBlock synchron halten`),
          level: 2,
        },
      ],
      seo: B(
        e,
        i,
        D(
          e,
          `Keeping syntax highlighting server-side without making the code block component async.`,
          `Syntax-Highlighting serverseitig halten, ohne die Code-Block-Komponente asynchron zu machen.`,
        ),
        r,
      ),
      related: [],
    });
  }
  {
    let r = `why-i-chose-a-turborepo-monorepo`,
      i = D(
        e,
        `Why I chose a Turborepo monorepo`,
        `Warum ich mich für ein Turborepo-Monorepo entschieden habe`,
      );
    n.push({
      id: `post-turborepo`,
      slug: r,
      href: `/${e}/blog/${r}`,
      title: i,
      excerpt: D(
        e,
        `Weighing a monorepo against separate repos for a solo portfolio project.`,
        `Ein Monorepo gegen separate Repositories für ein Solo-Portfolio-Projekt abwägen.`,
      ),
      cover: T(`turborepo`, `A dependency graph diagram`),
      categories: [t.engineering],
      publishedAt: `2025-05-02T09:00:00.000Z`,
      readingTimeMinutes: 5,
      layout: `standard`,
      body: [
        O(
          `intro`,
          `A single developer doesn't need a monorepo to coordinate teams — but sharing types between a design-tokens package, a UI library, and a Next.js app benefits from it anyway.`,
          `Ein einzelner Entwickler braucht kein Monorepo, um Teams zu koordinieren — aber das Teilen von Typen zwischen einem Design-Tokens-Paket, einer UI-Bibliothek und einer Next.js-App profitiert trotzdem davon.`,
          e,
        ),
        k(`h2-boundaries`, `h2`, `Package boundaries`, `Paketgrenzen`, e),
        O(
          `boundaries-p1`,
          `Each workspace package has one job and can be typechecked and tested in isolation — packages/ui has zero knowledge of content contracts, for instance.`,
          `Jedes Workspace-Paket hat genau eine Aufgabe und kann isoliert typgeprüft und getestet werden — packages/ui zum Beispiel weiß nichts von Content-Contracts.`,
          e,
        ),
        A(
          `li-tokens`,
          `design-tokens: CSS custom properties, no components`,
          `design-tokens: CSS-Custom-Properties, keine Komponenten`,
          e,
        ),
        A(
          `li-ui`,
          `ui: framework primitives, no content types`,
          `ui: Framework-Primitives, keine Content-Typen`,
          e,
        ),
        A(
          `li-contracts`,
          `contracts: zod schemas, no React at all`,
          `contracts: Zod-Schemas, überhaupt kein React`,
          e,
        ),
        k(`h2-caching`, `h2`, `Caching wins`, `Caching-Vorteile`, e),
        O(
          `caching-p1`,
          `Turborepo skips rebuilding a package whose inputs haven't changed, so a docs-only change to one blog post doesn't re-typecheck the whole workspace.`,
          `Turborepo überspringt den erneuten Build eines Pakets, dessen Eingaben sich nicht geändert haben — eine reine Textänderung an einem Blogbeitrag löst also keine erneute Typprüfung des gesamten Workspace aus.`,
          e,
        ),
        j(
          `callout-tip`,
          `tip`,
          "`turbo run build --filter=web...` only rebuilds apps/web and the packages it actually depends on.",
          "`turbo run build --filter=web...` baut nur apps/web und die Pakete neu, von denen es tatsächlich abhängt.",
          e,
        ),
      ],
      toc: [
        {
          id: `h2-boundaries`,
          text: D(e, `Package boundaries`, `Paketgrenzen`),
          level: 2,
        },
        {
          id: `h2-caching`,
          text: D(e, `Caching wins`, `Caching-Vorteile`),
          level: 2,
        },
      ],
      seo: B(
        e,
        i,
        D(
          e,
          `Weighing a monorepo against separate repos for a solo portfolio project.`,
          `Ein Monorepo gegen separate Repositories für ein Solo-Portfolio-Projekt abwägen.`,
        ),
        r,
      ),
      related: [],
    });
  }
  {
    let r = `lessons-from-a-year-of-freelance-fullstack-work`,
      i = D(
        e,
        `Lessons from a year of freelance fullstack work`,
        `Lektionen aus einem Jahr freiberuflicher Fullstack-Arbeit`,
      );
    n.push({
      id: `post-freelance`,
      slug: r,
      href: `/${e}/blog/${r}`,
      title: i,
      excerpt: D(
        e,
        `What changed in how I scope, estimate, and hand off client work.`,
        `Was sich daran geändert hat, wie ich Kundenarbeit abgrenze, schätze und übergebe.`,
      ),
      cover: T(`freelance`, `A laptop and coffee cup on a desk by a window`),
      categories: [t.engineering],
      publishedAt: `2025-03-11T09:00:00.000Z`,
      readingTimeMinutes: 9,
      layout: `standard`,
      body: [
        O(
          `intro`,
          `A year of short client engagements taught me more about scoping than any single long-term role had.`,
          `Ein Jahr kurzer Kundenprojekte hat mir mehr über Scoping beigebracht als jede einzelne langfristige Anstellung zuvor.`,
          e,
        ),
        k(`h2-scoping`, `h2`, `Scoping work`, `Arbeit abgrenzen`, e),
        O(
          `scoping-p1`,
          `A written scope document, agreed before any code is written, prevents more disagreements than any amount of goodwill.`,
          `Ein schriftliches Scope-Dokument, das vor dem ersten Code abgestimmt wird, verhindert mehr Meinungsverschiedenheiten als jede Menge guten Willens.`,
          e,
        ),
        k(`h2-no`, `h2`, `Saying no`, `Nein sagen`, e),
        O(
          `no-p1`,
          `Turning down a project outside my strengths — usually anything heavy on backend infrastructure I hadn't touched before — kept every finished project actually good.`,
          `Ein Projekt außerhalb meiner Stärken abzulehnen — meist alles mit schwerem Backend-Infrastruktur-Fokus, das ich vorher nicht angefasst hatte — hielt jedes abgeschlossene Projekt tatsächlich gut.`,
          e,
        ),
        A(
          `li-1`,
          `Fixed-price quotes only after a paid discovery call`,
          `Festpreisangebote nur nach einem bezahlten Discovery-Call`,
          e,
        ),
        A(
          `li-2`,
          `A written handoff doc for every project, not just a Slack thread`,
          `Ein schriftliches Übergabedokument für jedes Projekt, nicht nur ein Slack-Thread`,
          e,
        ),
      ],
      toc: [
        {
          id: `h2-scoping`,
          text: D(e, `Scoping work`, `Arbeit abgrenzen`),
          level: 2,
        },
        { id: `h2-no`, text: D(e, `Saying no`, `Nein sagen`), level: 2 },
      ],
      seo: B(
        e,
        i,
        D(
          e,
          `What changed in how I scope, estimate, and hand off client work.`,
          `Was sich daran geändert hat, wie ich Kundenarbeit abgrenze, schätze und übergebe.`,
        ),
        r,
      ),
      related: [],
    });
  }
  {
    let r = `a-walk-through-berlin`,
      i = D(e, `A walk through Berlin`, `Ein Spaziergang durch Berlin`),
      a = {
        camera: `Fujifilm X100V`,
        lens: `23mm f/2`,
        focalLength: `23mm`,
        aperture: `f/2.8`,
        shutterSpeed: `1/125s`,
        iso: 400,
        takenAt: `2025-09-12T18:30:00.000Z`,
      };
    n.push({
      id: `post-berlin-walk`,
      slug: r,
      href: `/${e}/blog/${r}`,
      title: i,
      excerpt: D(
        e,
        `A handful of frames from a quiet evening walk.`,
        `Ein paar Bilder von einem ruhigen Abendspaziergang.`,
      ),
      cover: E(`berlin-walk`, `A quiet street in Berlin at dusk`, a),
      categories: [t.photography],
      publishedAt: `2025-09-20T09:00:00.000Z`,
      readingTimeMinutes: 3,
      layout: `photoEssay`,
      body: [
        N(
          `figure-1`,
          `berlin-walk`,
          `A quiet street in Berlin at dusk`,
          `fullBleed`,
          a,
        ),
      ],
      toc: [],
      seo: B(
        e,
        i,
        D(
          e,
          `A handful of frames from a quiet evening walk.`,
          `Ein paar Bilder von einem ruhigen Abendspaziergang.`,
        ),
        r,
      ),
      photoSummary: {
        photoCount: 1,
        cameras: [`Fujifilm X100V`],
        lenses: [`23mm f/2`],
      },
      related: [],
    });
  }
  {
    let r = `an-afternoon-in-kreuzberg`,
      i = D(e, `An afternoon in Kreuzberg`, `Ein Nachmittag in Kreuzberg`),
      a = { camera: `Sony A7 III`, lens: `35mm f/1.8`, focalLength: `35mm` },
      o = E(`kreuzberg-1`, `Street art on a canal-side wall`, {
        ...a,
        aperture: `f/2.8`,
        shutterSpeed: `1/500s`,
        iso: 200,
        takenAt: `2025-12-04T14:10:00.000Z`,
      }),
      s = E(`kreuzberg-2`, `A market stall selling vegetables`, {
        ...a,
        aperture: `f/4`,
        shutterSpeed: `1/250s`,
        iso: 200,
        takenAt: `2025-12-04T14:45:00.000Z`,
      }),
      c = E(`kreuzberg-3`, `Cyclists crossing a bridge over the canal`, {
        ...a,
        aperture: `f/5.6`,
        shutterSpeed: `1/1000s`,
        iso: 200,
        takenAt: `2025-12-04T15:20:00.000Z`,
      });
    n.push({
      id: `post-kreuzberg`,
      slug: r,
      href: `/${e}/blog/${r}`,
      title: i,
      excerpt: D(
        e,
        `Canal-side street art, a Saturday market, and a lot of bicycles.`,
        `Straßenkunst am Kanal, ein Samstagsmarkt und jede Menge Fahrräder.`,
      ),
      cover: o,
      categories: [t.photography],
      publishedAt: `2025-12-05T09:00:00.000Z`,
      readingTimeMinutes: 4,
      layout: `photoEssay`,
      body: [
        N(
          `figure-1`,
          `kreuzberg-1`,
          `Street art on a canal-side wall`,
          `fullBleed`,
          o.exif,
        ),
        O(
          `intro`,
          `Kreuzberg on a Saturday means the Landwehrkanal market is out in force — worth the crowds for the produce alone.`,
          `Kreuzberg an einem Samstag bedeutet, dass der Markt am Landwehrkanal in voller Kraft ist — allein wegen der Produkte den Trubel wert.`,
          e,
        ),
        P(`gallery-1`, [s, c]),
      ],
      toc: [],
      seo: B(
        e,
        i,
        D(
          e,
          `Canal-side street art, a Saturday market, and a lot of bicycles.`,
          `Straßenkunst am Kanal, ein Samstagsmarkt und jede Menge Fahrräder.`,
        ),
        r,
      ),
      photoSummary: {
        photoCount: 3,
        cameras: [`Sony A7 III`],
        lenses: [`35mm f/1.8`],
      },
      related: [],
    });
  }
  {
    let r = `autumn-colors-in-the-tiergarten`,
      i = D(e, `Autumn colors in the Tiergarten`, `Herbstfarben im Tiergarten`),
      a = { camera: `Fujifilm X100V`, lens: `23mm f/2`, focalLength: `23mm` },
      o = E(`tiergarten-1`, `A path through golden autumn trees`, {
        ...a,
        aperture: `f/4`,
        shutterSpeed: `1/250s`,
        iso: 160,
        takenAt: `2025-11-19T10:00:00.000Z`,
      }),
      s = E(`tiergarten-2`, `Sunlight through orange leaves`, {
        ...a,
        aperture: `f/2`,
        shutterSpeed: `1/2000s`,
        iso: 160,
        takenAt: `2025-11-19T10:20:00.000Z`,
      }),
      c = E(`tiergarten-3`, `A lake reflecting the autumn tree line`, {
        ...a,
        aperture: `f/5.6`,
        shutterSpeed: `1/500s`,
        iso: 160,
        takenAt: `2025-11-19T11:00:00.000Z`,
      });
    n.push({
      id: `post-tiergarten`,
      slug: r,
      href: `/${e}/blog/${r}`,
      title: i,
      excerpt: D(
        e,
        `One camera, one lens, and an hour of golden light in the park.`,
        `Eine Kamera, ein Objektiv und eine Stunde goldenes Licht im Park.`,
      ),
      cover: o,
      categories: [t.photography],
      publishedAt: `2025-11-20T09:00:00.000Z`,
      readingTimeMinutes: 3,
      layout: `photoEssay`,
      body: [
        N(
          `figure-1`,
          `tiergarten-1`,
          `A path through golden autumn trees`,
          `fullBleed`,
          o.exif,
        ),
        P(`gallery-1`, [s, c], `masonry`),
      ],
      toc: [],
      seo: B(
        e,
        i,
        D(
          e,
          `One camera, one lens, and an hour of golden light in the park.`,
          `Eine Kamera, ein Objektiv und eine Stunde goldenes Licht im Park.`,
        ),
        r,
      ),
      photoSummary: {
        photoCount: 3,
        cameras: [`Fujifilm X100V`],
        lenses: [`23mm f/2`],
      },
      related: [],
    });
  }
  {
    let r = `morning-fog-on-the-spree`,
      i = D(e, `Morning fog on the Spree`, `Morgennebel an der Spree`),
      a = { camera: `Fujifilm X100V`, lens: `23mm f/2`, focalLength: `23mm` },
      o = E(`spree-1`, `Fog rolling over the river at sunrise`, {
        ...a,
        aperture: `f/2.8`,
        shutterSpeed: `1/125s`,
        iso: 320,
        takenAt: `2025-04-30T06:15:00.000Z`,
      }),
      s = E(`spree-2`, `A lone rower cutting through the mist`, {
        ...a,
        aperture: `f/2.8`,
        shutterSpeed: `1/250s`,
        iso: 320,
        takenAt: `2025-04-30T06:40:00.000Z`,
      });
    n.push({
      id: `post-spree`,
      slug: r,
      href: `/${e}/blog/${r}`,
      title: i,
      excerpt: D(
        e,
        `Six a.m., a thermos of coffee, and fog that burned off within the hour.`,
        `Sechs Uhr morgens, eine Thermoskanne Kaffee und Nebel, der binnen einer Stunde verschwand.`,
      ),
      cover: o,
      categories: [t.photography],
      publishedAt: `2025-04-30T09:00:00.000Z`,
      readingTimeMinutes: 3,
      layout: `photoEssay`,
      body: [
        N(
          `figure-1`,
          `spree-1`,
          `Fog rolling over the river at sunrise`,
          `fullBleed`,
          o.exif,
        ),
        P(`gallery-1`, [o, s], `carousel`),
      ],
      toc: [],
      seo: B(
        e,
        i,
        D(
          e,
          `Six a.m., a thermos of coffee, and fog that burned off within the hour.`,
          `Sechs Uhr morgens, eine Thermoskanne Kaffee und Nebel, der binnen einer Stunde verschwand.`,
        ),
        r,
      ),
      photoSummary: {
        photoCount: 2,
        cameras: [`Fujifilm X100V`],
        lenses: [`23mm f/2`],
      },
      related: [],
    });
  }
  return n;
}
function I(e) {
  return V[e];
}
function L(e) {
  return Object.values(z[e]);
}
function R(e) {
  return {
    id: e.id,
    slug: e.slug,
    href: e.href,
    title: e.title,
    excerpt: e.excerpt,
    cover: e.cover,
    categories: e.categories,
    publishedAt: e.publishedAt,
    readingTimeMinutes: e.readingTimeMinutes,
    layout: e.layout,
  };
}
var z, B, V;
function H() {
  return (H = e(() => {
    ((z = {
      en: {
        engineering: {
          slug: `engineering`,
          title: `Engineering`,
          description: `Notes on building software.`,
          href: `/en/blog/category/engineering`,
        },
        photography: {
          slug: `photography`,
          title: `Photography`,
          description: `Photo essays from trips and walks.`,
          href: `/en/blog/category/photography`,
        },
      },
      de: {
        engineering: {
          slug: `engineering`,
          title: `Engineering`,
          description: `Notizen zum Software-Bau.`,
          href: `/de/blog/category/engineering`,
        },
        photography: {
          slug: `photography`,
          title: `Fotografie`,
          description: `Fotoessays von Reisen und Spaziergängen.`,
          href: `/de/blog/category/photography`,
        },
      },
    }),
      (B = (e, t, n, r) => ({
        title: t,
        description: n,
        canonicalUrl: `https://damilolabada.com/${e}/blog/${r}`,
        noIndex: !1,
        alternates: [
          { locale: `en`, href: `https://damilolabada.com/en/blog/${r}` },
          { locale: `de`, href: `https://damilolabada.com/de/blog/${r}` },
        ],
      })),
      (V = { en: F(`en`), de: F(`de`) }));
  }))();
}
function U(e) {
  return {
    locale: e,
    siteName: `Damilola Bada`,
    siteUrl: `https://damilolabada.com`,
    defaultDescription:
      e === `de`
        ? `Fullstack-Entwickler mit Fokus auf Frontend-Grundlagen und KI-Engineering.`
        : `Fullstack developer focused on frontend fundamentals and AI engineering.`,
    owner: { name: `Damilola Bada`, email: `badadamilola@gmail.com` },
    socials: [
      {
        platform: `github`,
        label: `GitHub`,
        href: `https://github.com/damilolabada`,
      },
      {
        platform: `linkedin`,
        label: `LinkedIn`,
        href: `https://linkedin.com/in/damilolabada`,
      },
    ],
    cv: { href: `/cv/damilola-bada-en.pdf`, fileName: `damilola-bada-en.pdf` },
    nav: W[e],
    footer: { tagline: G[e], copyrightYear: 2026 },
    legalLinks: K[e],
  };
}
var W, G, K;
function q() {
  return (q = e(() => {
    ((W = {
      en: [
        { key: `about`, href: `/en#about`, index: `01` },
        { key: `experience`, href: `/en#experience`, index: `02` },
        { key: `work`, href: `/en#work`, index: `03` },
        { key: `skills`, href: `/en#skills`, index: `04` },
        { key: `contact`, href: `/en#contact`, index: `05` },
        { key: `blog`, href: `/en/blog` },
      ],
      de: [
        { key: `about`, href: `/de#about`, index: `01` },
        { key: `experience`, href: `/de#experience`, index: `02` },
        { key: `work`, href: `/de#work`, index: `03` },
        { key: `skills`, href: `/de#skills`, index: `04` },
        { key: `contact`, href: `/de#contact`, index: `05` },
        { key: `blog`, href: `/de/blog` },
      ],
    }),
      (G = {
        en: `Built with love from Germany`,
        de: `Mit Liebe aus Deutschland gebaut`,
      }),
      (K = {
        en: [
          { title: `Impressum`, href: `/en/impressum` },
          { title: `Privacy policy`, href: `/en/datenschutz` },
        ],
        de: [
          { title: `Impressum`, href: `/de/impressum` },
          { title: `Datenschutz`, href: `/de/datenschutz` },
        ],
      }));
  }))();
}
var J, Y;
function X() {
  return (X = e(() => {
    (g(),
      w(),
      H(),
      f(),
      q(),
      (J = 6),
      (Y = class {
        async getSite(e) {
          return U(e);
        }
        async getHomepage(e) {
          return p(e);
        }
        async getBlogIndex(e, t) {
          let n = I(e),
            r = L(e),
            i = t?.category ? r.find((e) => e.slug === t.category) : void 0;
          if (t?.category && !i) return null;
          let a = i
              ? n.filter((e) => e.categories.some((e) => e.slug === i.slug))
              : n,
            o = t?.page ?? 1,
            s = Math.max(1, Math.ceil(a.length / J));
          if (o > s) return null;
          let c = (o - 1) * J,
            l = a.slice(c, c + J);
          return {
            heading: i ? i.title : `Blog`,
            activeCategory: i,
            categories: r.map((e) => ({
              ...e,
              postCount: n.filter((t) =>
                t.categories.some((t) => t.slug === e.slug),
              ).length,
              active: e.slug === i?.slug,
            })),
            posts: l.map(R),
            pagination: {
              page: o,
              totalPages: s,
              previousHref: o > 1 ? `?page=${o - 1}` : void 0,
              nextHref: o < s ? `?page=${o + 1}` : void 0,
            },
            seo: {
              title: i ? i.title : `Blog`,
              description:
                i?.description ?? `Posts about engineering and photography.`,
              canonicalUrl: `https://damilolabada.com/${e}/blog`,
              noIndex: !1,
              alternates: [
                { locale: `en`, href: `https://damilolabada.com/en/blog` },
                { locale: `de`, href: `https://damilolabada.com/de/blog` },
              ],
            },
          };
        }
        async getPost(e, t) {
          let n = I(e).find((e) => e.slug === t);
          if (!n) return null;
          let r = I(e)
            .filter((e) => e.slug !== t)
            .slice(0, 3)
            .map(R);
          return { ...n, related: r };
        }
        async getProject(e, t) {
          return c(e).find((e) => e.slug === t) ?? null;
        }
        async getProjects(e) {
          return c(e).map((e, t) => l(e, String(t + 1).padStart(2, `0`)));
        }
        async getLegalPage(e, t) {
          return y(e, t);
        }
        async getRoutes() {
          let e = [`en`, `de`];
          return {
            posts: e.flatMap((e) =>
              I(e).map((t) => ({ locale: e, slug: t.slug })),
            ),
            projects: e.flatMap((e) =>
              c(e).map((t) => ({ locale: e, slug: t.slug })),
            ),
            categories: e.flatMap((e) =>
              L(e).map((t) => ({ locale: e, slug: t.slug })),
            ),
            legalPages: e.flatMap((e) =>
              b(e).map((t) => ({ locale: e, slug: t })),
            ),
          };
        }
      }));
  }))();
}
function Z() {
  return (Z = e(() => {
    X();
  }))();
}
function ee(e) {
  return Q[e];
}
function te(e, t) {
  let { location: n, role: r, yearsOfExperience: i } = t.facts;
  return e === `de`
    ? [`Wohnhaft in ${n}`, r, `${i}+ Jahre Erfahrung`]
    : [`Based in ${n}`, r, `${i}+ yrs experience`];
}
var Q;
function $() {
  return ($ = e(() => {
    Q = {
      en: {
        nav: {
          about: `About`,
          experience: `Experience`,
          work: `Work`,
          skills: `Technologies`,
          contact: `Contact`,
          blog: `Blog`,
        },
        scrollHint: `Scroll`,
        downloadCv: `Download CV`,
        workModes: { onsite: `Onsite`, hybrid: `Hybrid`, remote: `Remote` },
        experienceDetails: `Details`,
        experienceClose: `Close`,
        present: `Present`,
        readingTime: (e) => `${e} min read`,
        updated: `Updated`,
        paginationPrevious: `Previous`,
        paginationNext: `Next`,
        categoryAll: `All`,
        postGridEmpty: `No posts yet.`,
        tableOfContents: `On this page`,
        relatedPosts: `Related posts`,
        photoCount: (e) => `${e} photo${e === 1 ? `` : `s`}`,
        projectStatus: {
          live: `Live`,
          inDevelopment: `In development`,
          archived: `Archived`,
        },
        projectLinkKinds: {
          live: `View live`,
          repository: `View code`,
          appStore: `App Store`,
          playStore: `Google Play`,
          other: `Visit link`,
        },
        copy: `Copy`,
        copied: `Copied!`,
        playVideo: `Play video`,
        exif: {
          camera: `Camera`,
          lens: `Lens`,
          focalLength: `Focal length`,
          aperture: `Aperture`,
          shutterSpeed: `Shutter speed`,
          iso: `ISO`,
        },
        menuOpen: `Open menu`,
        menuClose: `Close menu`,
        backToTop: `Back to top`,
        rightsReserved: `All rights reserved.`,
        sayHello: `Say hello`,
        viewAllProjects: `View all projects`,
        notFoundHeading: `Page not found`,
        notFoundBody: `The page you're looking for doesn't exist or may have moved.`,
        backHome: `Back home`,
      },
      de: {
        nav: {
          about: `Über mich`,
          experience: `Erfahrung`,
          work: `Projekte`,
          skills: `Technologien`,
          contact: `Kontakt`,
          blog: `Blog`,
        },
        scrollHint: `Scrollen`,
        downloadCv: `Lebenslauf herunterladen`,
        workModes: { onsite: `Vor Ort`, hybrid: `Hybrid`, remote: `Remote` },
        experienceDetails: `Details`,
        experienceClose: `Schließen`,
        present: `Aktuell`,
        readingTime: (e) => `${e} Min. Lesezeit`,
        updated: `Aktualisiert`,
        paginationPrevious: `Zurück`,
        paginationNext: `Weiter`,
        categoryAll: `Alle`,
        postGridEmpty: `Noch keine Beiträge.`,
        tableOfContents: `Auf dieser Seite`,
        relatedPosts: `Ähnliche Beiträge`,
        photoCount: (e) => `${e} Foto${e === 1 ? `` : `s`}`,
        projectStatus: {
          live: `Live`,
          inDevelopment: `In Entwicklung`,
          archived: `Archiviert`,
        },
        projectLinkKinds: {
          live: `Live ansehen`,
          repository: `Code ansehen`,
          appStore: `App Store`,
          playStore: `Google Play`,
          other: `Link öffnen`,
        },
        copy: `Kopieren`,
        copied: `Kopiert!`,
        playVideo: `Video abspielen`,
        exif: {
          camera: `Kamera`,
          lens: `Objektiv`,
          focalLength: `Brennweite`,
          aperture: `Blende`,
          shutterSpeed: `Verschlusszeit`,
          iso: `ISO`,
        },
        menuOpen: `Menü öffnen`,
        menuClose: `Menü schließen`,
        backToTop: `Nach oben`,
        rightsReserved: `Alle Rechte vorbehalten.`,
        sayHello: `Sag hallo`,
        viewAllProjects: `Alle Projekte ansehen`,
        notFoundHeading: `Seite nicht gefunden`,
        notFoundBody: `Die gesuchte Seite existiert nicht oder wurde verschoben.`,
        backHome: `Zur Startseite`,
      },
    };
  }))();
}
export { Y as a, Z as i, ee as n, X as o, $ as r, te as t };
