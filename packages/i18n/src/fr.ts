import type { Dictionary } from "./en";

/**
 * UI strings (FR) — DRAFT, machine-drafted, needs Damilola's review before shipping.
 * Translated from de.ts / en.ts; "added" keys mirror en.ts.
 * Register: formal "vous" where a direct address is unavoidable.
 */
export const fr: Dictionary = {
  nav: {
    work: "Projets",
    about: "À propos",
    blog: "Blog",
    home: "Accueil",
    letsTalk: "Parlons-en",
    menu: "Menu",
    close: "Fermer",
    skipToContent: "Aller au contenu",
    // added
    homeLabel: "{name}, page d’accueil",
    main: "Navigation principale",
    siteMenu: "Menu du site",
    breadcrumb: "Fil d’Ariane",
  },
  theme: {
    dark: "Mode sombre",
    light: "Mode clair",
  },
  lang: {
    // added
    label: "Langue",
  },
  common: {
    localTime: "Heure locale",
    local: "Heure locale",
    scroll: "(Défiler)",
    downloadCv: "Télécharger le CV",
    selectedWork: "Projets sélectionnés",
    readCaseStudy: "Lire l’étude de cas",
    viewOnGithub: "Voir sur GitHub",
    allWork: "Tous les projets",
    allPosts: "Tous les articles",
    readPost: "Lire l’article",
    moreAboutMe: "En savoir plus sur moi",
    backToTop: "Retour en haut",
    minRead: "{n} min de lecture",
    min: "{n} min",
    present: "aujourd’hui",
    now: "En ce moment",
    latest: "Nouveau",
    newWork: "Nouveau projet —",
    projectOf: "{i} / {n}",
    // added
    new: "Nouveau",
  },
  home: {
    sections: {
      work: "Projets sélectionnés",
      about: "À propos",
      blog: "Blog",
      contact: "Contact",
    },
    workTitle: ["Projets", "sélectionnés"],
    workIntro:
      "Des produits que j’ai conçus, développés et lancés — les plus récents en premier.",
    moreProjects: "+ {n} autres projets · {names}",
    blogTitle: ["Derniers", "articles"],
    contactTitle: ["Travaillons", "ensemble"],
    dropALine: "Écrivez-moi",
    // added
    introLabel: "Intro",
    badge: "DÉVELOPPEUR FULL-STACK ✦ WEB & MOBILE ✦ ",
    badgeShort: "FULL-STACK ✦ WEB & MOBILE ✦ ",
    jumpToWork: "Aller aux projets sélectionnés",
  },
  work: {
    title: ["Projets", "sélectionnés"],
    lede: "Des produits que j’ai conçus, développés et lancés — des apps sur l’App Store aux systèmes qui les font tourner.",
    count: "{projects} projets · {cases} études de cas",
    more: "Expériences & open source",
    allOnGithub: "Tout sur GitHub",
    // added
    moreLabel: "Plus",
    projectsLabel: "Projets",
  },
  case: {
    allWork: "← Tous les projets",
    caseStudy: "Étude de cas {n}",
    visit: "Visiter {domain}",
    screens: "Écrans de l’app",
    nextProject: "Projet suivant",
    moreProjects: "Autres projets",
    // added
    screensLabel: "Écrans de l’app {title}",
  },
  about: {
    title: ["À", "propos"],
    experience: "Expérience",
    experienceTitle: ["Mon", "parcours"],
    skills: "Compétences",
    skillsTitle: ["Ma boîte", "à outils"],
    // added
    bioLabel: "À propos de moi",
    workMode: {
      onsite: "Sur site",
      hybrid: "Hybride",
      remote: "À distance",
    },
  },
  blog: {
    title: ["Notes &", "écrits"],
    lede: "Sur le code, le vélo, la photographie — et ce que je construis en ce moment.",
    count: "{n} articles",
    filterLabel: "Filtrer les articles par thème",
    all: "Tous",
    allWriting: "← Tous les articles",
    onThisPage: "Sur cette page",
    share: "Partager",
    copyLink: "Copier le lien",
    linkCopied: "Lien copié",
    writtenBy: "Écrit par",
    keepReading: ["Continuer", "la lecture"],
    moreFromBlog: "Plus d’articles du blog",
    fig: "Fig. {n}",
    // added
    since: "Depuis {year}",
    postsLabel: "Articles",
    aboutMe: "À propos de moi",
  },
  cta: {
    eyebrow: "Un projet en tête\u00A0?",
    title: ["Travaillons", "ensemble"],
  },
  // added: not designed in the handoff; uses the page-hero layout
  notFound: {
    title: ["Page", "introuvable"],
    lede: "Cette page n’existe pas ou a été déplacée.",
    home: "Retour à l’accueil",
    metaTitle: "Page introuvable",
  },
  footer: {
    sitemap: "Plan du site",
    elsewhere: "Ailleurs",
    basedIn: "Basé à",
    rights: "© {year} Damilola Bada. Tous droits réservés.",
    builtWith: "Fait avec amour en Allemagne",
    contact: "Contact",
    email: "E-mail",
    cv: "CV",
  },
};
