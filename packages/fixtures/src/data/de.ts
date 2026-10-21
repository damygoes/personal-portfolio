import type { LocaleContent } from "@portfolio/content-core";
import { posts } from "./posts";

/**
 * German content — DRAFT, machine-translated, needs Damilola's review before
 * it ships. Seeded into the development dataset only (`--with-translations`).
 *
 * Mirrors how Sanity stores translations: field-level overlays (only the
 * translatable text; anything missing falls back to EN) and whole documents
 * for about, case studies and posts. Placeholders stay null, as in EN.
 * Product, tier and tech names, code, URLs and slugs are not translated.
 * Experience companies/locations are plain (untranslated) fields in the schema.
 */

const codeReview = posts.find((p) => p.slug === "code-review-team-of-three");
const codeBlock = codeReview?.body?.find((b) => b._type === "code");

export const de: LocaleContent = {
  site: {
    tagline:
      "Ich entwickle Web- und Mobile-Apps, die einfach funktionieren – klar, schnell und leicht zu bedienen.",
    location: "Deutschland",
    yearsExperienceLabel: "4+ Jahre Erfahrung",
    heroMeta: [
      "Lebt in Deutschland",
      "Fullstack-Entwickler",
      "4+ Jahre Erfahrung",
    ],
    authorBio:
      "Software Engineer bei adesso SE. Ich entwickle Web- und Mobile-Apps und schreibe über Code, Radfahren und Fotografie.",
  },

  projects: {
    passe: {
      kind: "iOS-App",
      teaser: "ein Reisetagebuch",
      coverTag: "Aktuell · iOS & Web",
      statusLabel: "Im App Store verfügbar",
      summary:
        "Ein standardmäßig privates Reisetagebuch für Menschen, die wirklich unterwegs sind. Hefte Fotos und Notizen an die Orte, an denen sie entstanden sind, sieh zu, wie sich deine Karte über die Jahre füllt, und teile eine Reise nur mit den Menschen, die du auswählst.",
    },
    elliesnote: {
      kind: "iOS-App",
      coverTag: "iOS-App",
      statusLabel: "Im App Store verfügbar",
      summary:
        "Ein Gesundheitsbegleiter mit Fokus auf Datenschutz für Menschen mit energielimitierenden chronischen Erkrankungen wie ME/CFS und Fibromyalgie. Sanfte 30-Sekunden-Check-ins am Tag, Protokolle für Crash-Tage, Synchronisierung mit Apple Health und KI-gestützte Einblicke, die die Muster hinter guten und schlechten Tagen sichtbar machen.",
    },
    "url-analyzer": {
      kind: "Web-App",
      summary:
        "Eine Web-App, die Metadaten beliebiger URLs abruft und anzeigt – darunter Titel, Überschriften, defekte Links und mehr. Entwickelt mit React und Go.",
    },
    "kpi-bot": {
      kind: "SaaS-Dashboard",
      summary:
        "Ein SaaS-Dashboard, das sich mit Stripe-Konten verbindet und Abo-Kennzahlen wie MRR, ARR und Churn-Rate in Echtzeit visualisiert.",
    },
    archetype: {
      summary:
        "Eine skalierbare Microservice-Architektur mit Node.js – mit gemeinsamen TypeORM-Modellen, modularem Monorepo-Setup und unabhängigem Deployment der Services. Entwickelt mit Docker, Express und Lerna.",
    },
  },

  experience: {
    "adesso SE|2025-11": {
      summary:
        "Ich entwickle maßgeschneiderte Softwarelösungen bei einem der führenden IT-Dienstleister Europas – und helfe Unternehmen und öffentlichen Organisationen, ihre Kernprozesse zu stärken und digitale Exzellenz zu erreichen.",
    },
    "apomap GmbH|2025-01": {
      role: "Teamleiter",
      bullets: [
        "Mentoring und Code-Reviews für ein Team aus 3 Entwicklern",
        "Projektzeitpläne steuern und hochwertige Ergebnisse sicherstellen",
        "CI/CD-Pipelines aufgebaut und gepflegt, um Deployments zu vereinfachen",
        "Bewerbungsgespräche und Onboarding neuer Entwickler durchgeführt",
        "Projektanforderungen gemeinsam mit Product Managern definiert",
      ],
    },
    "apomap GmbH|2022-11": {
      role: "Fullstack-Entwickler",
      bullets: [
        "GraphQL-APIs für effizienten Datenabruf entworfen",
        "Responsive UIs mit React und Tailwind CSS entwickelt",
        "Performance einer React-Webanwendung optimiert",
        "Logistik- und Kassensystem-APIs von Drittanbietern integriert, um Abläufe in Apotheken zu verbessern",
      ],
    },
    "MyCodeCareer|2022-09": {
      role: "Frontend-Entwickler",
      bullets: [
        "Mit UX-Designern an besseren UI-Workflows gearbeitet",
        "Die Firmenwebsite nach modernen React-Best-Practices neu aufgebaut",
      ],
    },
    "Brainnest GmbH|2022-06": {
      role: "Frontend-Entwickler (Trainee)",
      bullets: [
        "Gemeinsam mit dem Team UI-Komponenten entwickelt",
        "Code reviewt und Feedback zur Frontend-Umsetzung gegeben",
        "Best Practices der Webentwicklung angewendet",
      ],
    },
    "Freelance & personal projects|2020-06": {
      role: "Autodidaktischer Fullstack-Entwickler",
      bullets: [
        "Websites mit WordPress, Elementor, React und Node.js erstellt und betreut",
        "Kleine Unternehmen dabei unterstützt, ihre Online-Präsenz zu verbessern",
        "Fullstack-Konzepte wie Authentifizierung, APIs und Deployment geübt",
        "Selbststudium mit einer Teilzeitstelle in Logistik und Zustellung vereinbart",
      ],
    },
    "Personal|2020-01": {
      role: "Beruflicher Neustart",
      bullets: [
        "Die Tech-Branche und Möglichkeiten zum Selbststudium recherchiert",
        "Ein langfristiges Ziel für den Wechsel in die Softwareentwicklung festgelegt",
      ],
    },
  },

  skillGroups: {
    3: { title: "Datenbanken" },
  },

  categories: {
    tech: { title: "Technik" },
    programming: { title: "Programmierung" },
    cycling: { title: "Radfahren" },
    photography: { title: "Fotografie" },
  },

  about: {
    statement: [
      {
        text: "Ich bin zur Fullstack-Entwicklung gekommen, weil ich Dinge bauen wollte, die ",
      },
      { text: "Menschen wirklich helfen", highlight: true },
    ],
    lede: "Fullstack-Entwickler aus Deutschland. Ich entwickle Web- und Mobile-Apps, die einfach funktionieren – klar, schnell und leicht zu bedienen.",
    bio: [
      [
        {
          text: "Was als Neugier begann, ist heute mein Beruf: Web- und Mobile-Apps zu bauen, die ihren Zweck erfüllen, ohne die Dinge unnötig zu verkomplizieren.",
        },
      ],
      [
        {
          text: "Heute arbeite ich als Software Engineer bei adesso und entwickle maßgeschneiderte Software für Unternehmen und öffentliche Organisationen. Davor habe ich bei apomap ein kleines Entwicklungsteam geleitet – und dabei gelernt, dass klarer Code und klare Kommunikation gleich wichtig sind.",
        },
      ],
      [
        {
          text: "Ich bin überzeugt, dass Technologie echte Probleme einfach und zuverlässig lösen sollte. Diese Überzeugung steckt auch in meinen eigenen Produkten – etwa in ",
        },
        { text: "Passe.", strong: true },
        {
          text: ", einem standardmäßig privaten Reisetagebuch für die Reisen, an die man sich erinnern will, und in ",
        },
        { text: "ElliesNote", strong: true },
        {
          text: ", einem Gesundheitsbegleiter für Menschen mit energielimitierenden chronischen Erkrankungen.",
        },
      ],
      [
        {
          text: "Jedes Projekt ist eine neue Chance, dazuzulernen und etwas zu bewirken – und ich freue mich darauf, weiter zu wachsen: als Engineer, als Teamplayer und als jemand, der Dinge baut.",
        },
      ],
    ],
    teaserParagraphs: [
      [
        {
          text: "Heute arbeite ich als Software Engineer bei adesso und entwickle maßgeschneiderte Software für Unternehmen und öffentliche Organisationen. Davor habe ich bei apomap ein kleines Entwicklungsteam geleitet – und dabei gelernt, dass klarer Code und klare Kommunikation gleich wichtig sind.",
        },
      ],
      [
        {
          text: "Diese Überzeugung, echte Probleme einfach zu lösen, steckt auch in meinen eigenen Produkten – etwa in ",
        },
        { text: "Passe.", strong: true },
        { text: ", einem standardmäßig privaten Reisetagebuch, und in " },
        { text: "ElliesNote", strong: true },
        {
          text: ", einem Gesundheitsbegleiter für Menschen mit energielimitierenden chronischen Erkrankungen.",
        },
      ],
    ],
    facts: [
      { label: "Jetzt", value: "Software Engineer, adesso SE" },
      {
        label: "Eigene Produkte",
        value: "Passe. & ElliesNote",
        links: ["passe", "elliesnote"],
      },
      { label: "Davor", value: "Teamleiter, apomap GmbH" },
      { label: "Wohnort", value: "Deutschland", aboutPageOnly: true },
    ],
    skillsIntro:
      "Der Stack, mit dem ich eine Idee vom Schema bis in den App Store bringe.",
  },

  caseStudies: {
    passe: {
      lede: "Ein standardmäßig privates Reisetagebuch für Menschen, die wirklich unterwegs sind.",
      meta: [
        { label: "Rolle", value: null },
        { label: "Plattformen", value: "iOS · Web · Android folgt bald" },
        { label: "Zeitraum", value: null },
        {
          label: "Stack",
          value:
            "React Native, Expo, TypeScript, Next.js (API), NeonDB (PostgreSQL)",
        },
      ],
      sections: [
        {
          type: "textBlock",
          label: "Überblick",
          heading: "Ein Ort für die Erinnerungen, die bleiben sollen.",
          body: [
            "Passe. ist ein Reisetagebuch für Menschen, die wirklich unterwegs sind. Jede Reise beginnt privat. Du dokumentierst sie mit Fotos, die an den Orten angeheftet sind, an denen sie entstanden sind, und mit Notizen, so kurz oder lang du willst – und teilst dann eine kuratierte Auswahl mit den Menschen, die du auswählst: eine ganze Reise oder auch nur eine einzelne Erinnerung.",
            null,
          ],
        },
        {
          type: "textBlock",
          label: "Herausforderung",
          heading: "Eine Kamerarolle ist keine Erinnerung.",
          body: [
            "Zwölftausend Fotos – und keine Ahnung, welcher Morgen welcher war.",
            null,
          ],
        },
        {
          type: "stepsGrid",
          label: "So funktioniert’s",
          heading: "Drei Minuten pro Reise.",
          steps: [
            { title: "Reise anlegen", text: "Name, Länder und Daten." },
            {
              title: "Erinnerung hinzufügen",
              text: "Fotos anhängen und an einen Ort heften.",
            },
            {
              title: "Schreib, so viel du willst",
              text: "Von einer kurzen Zeile bis zur ganzen Geschichte.",
            },
          ],
        },
        {
          type: "featureGrid",
          label: "Kernfunktionen",
          heading: "Privat zuerst, teilbar zu deinen Bedingungen.",
          features: [
            {
              title: "Standardmäßig privat",
              text: "Jede Reise beginnt geschlossen. Nichts ist öffentlich, nichts wird Fremden vorgeschlagen.",
            },
            {
              title: "Eine Karte, die wächst",
              text: "Städte, Länder und Routen ergeben deine ganz eigene geografische Chronik.",
            },
            {
              title: "Andenken",
              text: "Exportiere Reisen als PDF-Erinnerungsbücher, Zines und Postkarten-Sets.",
            },
            {
              title: "Gezieltes Teilen",
              text: "Teile eine Reise – oder eine einzelne Erinnerung – über Links, die du kontrollierst.",
            },
          ],
        },
        {
          type: "plans",
          label: "Geschäftsmodell",
          heading: "Kostenlos starten, fürs Bewahren zahlen.",
          plans: [
            {
              name: "Free",
              price: "€0",
              period: "/ Monat",
              features: [
                "3 Reisen",
                "10 Erinnerungen pro Reise",
                "Privates Tagebuch",
              ],
            },
            {
              name: "Explorer",
              price: "€4",
              period: "/ Monat",
              features: [
                "20 Reisen",
                "50 Erinnerungen pro Reise",
                "Öffentliches Portfolio",
              ],
            },
            {
              name: "Collector",
              price: "€9",
              period: "/ Monat",
              features: [
                "Unbegrenzte Reisen & Erinnerungen",
                "Exporte als PDF, Zine & Postkarte",
              ],
            },
          ],
          note: "Jederzeit kündbar – läuft ein Abo aus, bleiben deine Tagebücher im kostenlosen Tarif erhalten.",
        },
        {
          type: "architecture",
          label: "So ist es gebaut",
          heading:
            "Eine TypeScript-Codebasis, vom Smartphone bis zur Datenbank.",
          core: [
            {
              eyebrow: "Mobile App",
              title: "React Native · Expo",
              sub: "iOS · Android folgt bald",
            },
            {
              eyebrow: "API",
              title: "Next.js",
              sub: "TypeScript",
              isCore: true,
            },
            { eyebrow: "Datenbank", title: "NeonDB", sub: "PostgreSQL" },
          ],
          sub: [
            { eyebrow: "Web", title: "passe.cc", sub: null },
            { eyebrow: "Medien", title: "Fotos & Orte", sub: null },
            { eyebrow: "Exporte", title: "Bücher & Zines", sub: null },
          ],
          notes: [null],
        },
        { type: "quote", label: "Ergebnis", text: null, attribution: null },
      ],
    },
    elliesnote: {
      lede: "Ein Gesundheitsbegleiter mit Fokus auf Datenschutz für Menschen mit energielimitierenden chronischen Erkrankungen wie ME/CFS und Fibromyalgie.",
      meta: [
        { label: "Rolle", value: null },
        { label: "Typ", value: "iOS-App · Eigenes Produkt" },
        { label: "Zeitraum", value: null },
        {
          label: "Stack",
          value:
            "React Native, Expo, TypeScript, Next.js (API), NeonDB (PostgreSQL), QStash",
        },
      ],
      sections: [
        {
          type: "textBlock",
          label: "Überblick",
          heading:
            "Ein Gesundheitsbegleiter, der dich um dreißig Sekunden am Tag bittet.",
          body: [
            "ElliesNote ist für Menschen mit energielimitierenden chronischen Erkrankungen wie ME/CFS und Fibromyalgie gemacht. Sanfte 30-Sekunden-Check-ins am Tag, Protokolle für Crash-Tage, Synchronisierung mit Apple Health und KI-gestützte Einblicke, die die Muster hinter guten und schlechten Tagen sichtbar machen. Im App Store verfügbar.",
            null,
          ],
        },
        {
          type: "textBlock",
          label: "Herausforderung",
          heading: null,
          body: [null],
        },
        {
          type: "featureGrid",
          label: "Kernfunktionen",
          heading: "Vier Dinge, behutsam gemacht.",
          features: [
            { title: "Tägliche 30-Sekunden-Check-ins" },
            { title: "Protokoll für Crash-Tage" },
            { title: "Synchronisierung mit Apple Health" },
            { title: "KI-gestützte Einblicke" },
          ],
        },
        {
          type: "architecture",
          label: "So ist es gebaut",
          heading:
            "Eine TypeScript-Codebasis vom Smartphone bis zur Datenbank.",
          core: [
            {
              eyebrow: "Mobile App",
              title: "React Native · Expo",
              sub: "TypeScript",
            },
            {
              eyebrow: "API",
              title: "Next.js",
              sub: "TypeScript",
              isCore: true,
            },
            { eyebrow: "Datenbank", title: "NeonDB", sub: "PostgreSQL" },
          ],
          sub: [
            {
              eyebrow: "Auf dem Gerät",
              title: "Apple Health",
              sub: "In die App synchronisiert",
            },
            { eyebrow: "Messaging", title: "QStash", sub: null },
            { eyebrow: "Datenschutz", title: "Datenschutz zuerst", sub: null },
          ],
          notes: [null],
        },
        { type: "quote", label: "Ergebnis", text: null, attribution: null },
      ],
    },
  },

  posts: {
    "shipping-a-react-native-app-solo": {
      title:
        "Eine React-Native-App als Solo-Entwickler in den App Store bringen",
      excerpt:
        "Alles, was ich gern gewusst hätte, bevor ich meine erste App eingereicht habe – von Expo-Builds bis zum App Review.",
    },
    "code-review-team-of-three": {
      title:
        "Was mich die Leitung eines Dreierteams über Code-Reviews gelehrt hat",
      excerpt:
        "Reviews drehten sich irgendwann nicht mehr ums Fehlerfinden, sondern ums Teilen von Kontext. Hier ist die Checkliste, bei der wir gelandet sind.",
      body: [
        {
          _type: "paragraph",
          _key: "p1",
          children: [
            {
              text: "Als ich bei apomap Teamleiter wurde, habe ich einen Review-Prozess übernommen, der im Großen und Ganzen funktionierte. Pull Requests wurden freigegeben, Bugs wurden gefunden, und niemand beschwerte sich. Aber Reviews fühlten sich wie eine Schranke an, nicht wie ein Gespräch – und bei drei Entwicklern, die jeweils einen anderen Teil des Produkts verantworteten, machte diese Lücke einen Unterschied.",
            },
          ],
        },
        {
          _type: "heading",
          _key: "h1",
          id: "s1",
          text: "Reviews sind Gespräche",
        },
        {
          _type: "paragraph",
          _key: "p2",
          children: [
            {
              text: "Als Erstes haben wir die Frage geändert, die sich ein Reviewer stellt. Statt ",
            },
            { text: "„Ist das korrekt?“", strong: true },
            { text: " fingen wir mit " },
            { text: "„Verstehe ich, warum es das gibt?“", strong: true },
            {
              text: " an. Lautete die Antwort Nein, brauchte die Beschreibung des Pull Requests Arbeit, bevor es der Code tat.",
            },
          ],
        },
        {
          _type: "pullQuote",
          _key: "q1",
          text: "Nach einem guten Review wissen beide Seiten mehr als vorher.",
        },
        { _type: "heading", _key: "h2", id: "s2", text: "Halte es klein" },
        {
          _type: "paragraph",
          _key: "p3",
          children: [
            {
              text: "Große Pull Requests werden nur überflogen. Wir einigten uns auf ein weiches Limit für geänderte Zeilen, und alles, was größer war, wurde aufgeteilt oder in einem kurzen Call durchgegangen. Kleinere Änderungen bedeuteten auch schnelleres Feedback – und damit mehr Bereitschaft, früh einen Draft zu öffnen.",
            },
          ],
        },
        { _type: "heading", _key: "h3", id: "s3", text: "Die Checkliste" },
        {
          _type: "paragraph",
          _key: "p4",
          children: [
            {
              text: "Wir hatten eine kurze Checkliste im Pull-Request-Template. Sie passte auf einen Bildschirm, also wurde sie tatsächlich gelesen:",
            },
          ],
        },
        // The template is code: it stays as written.
        ...(codeBlock ? [codeBlock] : []),
        {
          _type: "heading",
          _key: "h4",
          id: "s4",
          text: "Was sich verändert hat",
        },
        {
          _type: "list",
          _key: "l1",
          ordered: true,
          items: [
            [
              {
                text: "Reviews wurden schneller, weil der Kontext schon aufgeschrieben war.",
              },
            ],
            [
              {
                text: "Neuere Entwickler stellten mehr Fragen – offen, wo alle etwas davon lernten.",
              },
            ],
            [
              {
                text: "„LGTM“ ohne Kommentar wurde zur Ausnahme statt zur Regel.",
              },
            ],
          ],
        },
        {
          _type: "paragraph",
          _key: "p5",
          children: [
            {
              text: "Um die Checkliste ging es eigentlich nie. Sie gab uns nur einen gemeinsamen Ort, an dem das Gespräch beginnen konnte.",
            },
          ],
        },
      ],
    },
    "black-forest-before-work": {
      title: "Vor der Arbeit durch den Schwarzwald",
      excerpt:
        "Frühe Anstiege, leere Straßen – und warum das beste Debugging irgendwo um Kilometer vierzig passiert.",
    },
    "one-lens-for-a-month": {
      title: "Ein Objektiv für einen Monat",
      excerpt:
        "Einschränkungen machen Apps besser. Wie sich zeigt, auch Fotos.",
    },
    "go-for-typescript-developers": {
      title: "Go für TypeScript-Entwickler: erste Eindrücke",
      excerpt:
        "Was mich beim Wechsel von Node zu Go überrascht hat, während ich einen kleinen URL Analyzer gebaut habe.",
    },
    "first-200km-ride": {
      title: "Meine erste 200-km-Tour und was sie mich über Pacing gelehrt hat",
      excerpt:
        "Fang langsamer an, als es sich richtig anfühlt. Iss, bevor du Hunger hast. Ein guter Rat auch für lange Projekte.",
    },
    "light-lines-vosges": {
      title: "Licht, Linien und lange Anstiege in den Vogesen",
      excerpt:
        "Ein Wochenende voller Serpentinen und goldener Stunde, gleich hinter der Grenze.",
    },
  },
};
