import type { Dictionary } from "./en";

/**
 * UI strings (DE) — DRAFT, machine-drafted, needs Damilola's review before shipping.
 * From damilolabada-redesign-handoff/spec/i18n/ui.de.json; "added" keys mirror en.ts.
 */
export const de: Dictionary = {
  nav: {
    work: "Projekte",
    about: "Über mich",
    blog: "Blog",
    home: "Start",
    letsTalk: "Lass uns reden",
    menu: "Menü",
    close: "Schließen",
    skipToContent: "Zum Inhalt springen",
    // added
    homeLabel: "{name}, Startseite",
    main: "Hauptnavigation",
    siteMenu: "Seitenmenü",
    breadcrumb: "Brotkrümelnavigation",
  },
  theme: {
    dark: "Dunkler Modus",
    light: "Heller Modus",
  },
  lang: {
    en: "EN",
    de: "DE",
  },
  common: {
    localTime: "Ortszeit",
    local: "Ortszeit",
    scroll: "(Scrollen)",
    downloadCv: "Lebenslauf herunterladen",
    selectedWork: "Ausgewählte Projekte",
    readCaseStudy: "Case Study lesen",
    viewOnGithub: "Auf GitHub ansehen",
    allWork: "Alle Projekte",
    allPosts: "Alle Beiträge",
    readPost: "Beitrag lesen",
    moreAboutMe: "Mehr über mich",
    backToTop: "Nach oben",
    minRead: "{n} Min. Lesezeit",
    min: "{n} Min.",
    present: "heute",
    now: "Aktuell",
    latest: "Neu",
    newWork: "Neues Projekt —",
    projectOf: "{i} / {n}",
    // added
    new: "Neu",
  },
  home: {
    sections: {
      work: "Ausgewählte Projekte",
      about: "Über mich",
      blog: "Blog",
      contact: "Kontakt",
    },
    workTitle: ["Ausgewählte", "Projekte"],
    workIntro:
      "Produkte, die ich entworfen, gebaut und veröffentlicht habe — die neuesten zuerst.",
    moreProjects: "+ {n} weitere Projekte · {names}",
    blogTitle: ["Neueste", "Beiträge"],
    contactTitle: ["Lass uns", "zusammenarbeiten"],
    dropALine: "Schreib mir",
    // added
    introLabel: "Intro",
    badge: "FULLSTACK-ENTWICKLER ✦ WEB & MOBILE ✦ ",
    badgeShort: "FULLSTACK ✦ WEB & MOBILE ✦ ",
    jumpToWork: "Zu den ausgewählten Projekten",
  },
  work: {
    title: ["Ausgewählte", "Projekte"],
    lede: "Produkte, die ich entworfen, gebaut und veröffentlicht habe — von Apps im App Store bis zu den Systemen dahinter.",
    count: "{projects} Projekte · {cases} Case Studies",
    more: "Experimente & Open Source",
    allOnGithub: "Alles auf GitHub",
    // added
    moreLabel: "Mehr",
    projectsLabel: "Projekte",
  },
  case: {
    allWork: "← Alle Projekte",
    caseStudy: "Case Study {n}",
    visit: "{domain} besuchen",
    screens: "App-Screens",
    nextProject: "Nächstes Projekt",
    moreProjects: "Weitere Projekte",
    // added
    screensLabel: "{title} App-Screens",
  },
  about: {
    title: ["Über", "mich"],
    experience: "Erfahrung",
    experienceTitle: ["Wo ich", "gebaut habe"],
    skills: "Skills",
    skillsTitle: ["Mein", "Werkzeug"],
    // added
    bioLabel: "Über mich",
    workMode: {
      onsite: "Vor Ort",
      hybrid: "Hybrid",
      remote: "Remote",
    },
  },
  blog: {
    title: ["Notizen &", "Texte"],
    lede: "Über Code, Radfahren, Fotografie — und woran ich gerade baue.",
    count: "{n} Beiträge",
    filterLabel: "Beiträge nach Thema filtern",
    all: "Alle",
    allWriting: "← Alle Beiträge",
    onThisPage: "Auf dieser Seite",
    share: "Teilen",
    copyLink: "Link kopieren",
    linkCopied: "Link kopiert",
    writtenBy: "Geschrieben von",
    keepReading: ["Weiter", "lesen"],
    moreFromBlog: "Mehr aus dem Blog",
    fig: "Abb. {n}",
    // added
    since: "Seit {year}",
    postsLabel: "Beiträge",
    aboutMe: "Über mich",
  },
  cta: {
    eyebrow: "Ein Projekt im Kopf?",
    title: ["Lass uns", "zusammenarbeiten"],
  },
  footer: {
    sitemap: "Sitemap",
    elsewhere: "Anderswo",
    basedIn: "Standort",
    rights: "© {year} Damilola Bada. Alle Rechte vorbehalten.",
    builtWith: "Mit Liebe gebaut in Deutschland",
    contact: "Kontakt",
    email: "E-Mail",
    cv: "Lebenslauf",
  },
};
