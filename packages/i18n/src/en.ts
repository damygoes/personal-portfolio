/**
 * UI strings (EN) — from damilolabada-redesign-handoff/spec/i18n/ui.en.json.
 * Keys not in the handoff file are marked "added": they are copy that appears in the
 * reference markup (badge ring, aria-labels, work modes) but had no dictionary key.
 */
export const en = {
  nav: {
    work: "Work",
    about: "About",
    blog: "Blog",
    home: "Home",
    letsTalk: "Let's talk",
    menu: "Menu",
    close: "Close",
    skipToContent: "Skip to content",
    // added
    homeLabel: "{name}, home",
    main: "Main",
    siteMenu: "Site menu",
    breadcrumb: "Breadcrumb",
  },
  theme: {
    dark: "Dark mode",
    light: "Light mode",
  },
  lang: {
    en: "EN",
    de: "DE",
  },
  common: {
    localTime: "Local time",
    local: "local",
    scroll: "(Scroll)",
    downloadCv: "Download CV",
    selectedWork: "Selected work",
    readCaseStudy: "Read case study",
    viewOnGithub: "View on GitHub",
    allWork: "All work",
    allPosts: "All posts",
    readPost: "Read post",
    moreAboutMe: "More about me",
    backToTop: "Back to top",
    minRead: "{n} min read",
    min: "{n} min",
    present: "Present",
    now: "Now",
    latest: "Latest",
    newWork: "New work —",
    projectOf: "{i} / {n}",
    // added
    new: "New",
  },
  home: {
    sections: {
      work: "Selected work",
      about: "About",
      blog: "Blog",
      contact: "Contact",
    },
    workTitle: ["Selected", "work"],
    workIntro: "Products I've designed, built and shipped — most recent first.",
    moreProjects: "+ {n} more projects · {names}",
    blogTitle: ["Latest", "writing"],
    contactTitle: ["Let's work", "together"],
    dropALine: "Drop me a line",
    // added
    introLabel: "Intro",
    badge: "FULLSTACK DEVELOPER ✦ WEB & MOBILE ✦ ",
    badgeShort: "FULLSTACK ✦ WEB & MOBILE ✦ ",
    jumpToWork: "Jump to selected work",
  },
  work: {
    title: ["Selected", "work"],
    lede: "Products I've designed, built and shipped — from apps on the App Store to the systems behind them.",
    count: "{projects} projects · {cases} case studies",
    more: "Experiments & open source",
    allOnGithub: "All on GitHub",
    // added
    moreLabel: "More",
    projectsLabel: "Projects",
  },
  case: {
    allWork: "← All work",
    caseStudy: "Case study {n}",
    visit: "Visit {domain}",
    screens: "App screens",
    nextProject: "Next project",
    moreProjects: "More projects",
    // added
    screensLabel: "{title} app screens",
  },
  about: {
    title: ["About", "me"],
    experience: "Experience",
    experienceTitle: ["Where I've", "built things"],
    skills: "Skills",
    skillsTitle: ["The", "toolkit"],
    // added
    bioLabel: "Bio",
    workMode: {
      onsite: "On-site",
      hybrid: "Hybrid",
      remote: "Remote",
    },
  },
  blog: {
    title: ["Notes &", "writing"],
    lede: "On code, cycling, photography — and whatever I'm building right now.",
    count: "{n} posts",
    filterLabel: "Filter posts by topic",
    all: "All",
    allWriting: "← All writing",
    onThisPage: "On this page",
    share: "Share",
    copyLink: "Copy link",
    linkCopied: "Link copied",
    writtenBy: "Written by",
    keepReading: ["Keep", "reading"],
    moreFromBlog: "More from the blog",
    fig: "Fig. {n}",
    // added
    since: "Since {year}",
    postsLabel: "Posts",
    aboutMe: "About me",
  },
  cta: {
    eyebrow: "Got a project in mind?",
    title: ["Let's work", "together"],
  },
  footer: {
    sitemap: "Sitemap",
    elsewhere: "Elsewhere",
    basedIn: "Based in",
    rights: "© {year} Damilola Bada. All rights reserved.",
    builtWith: "Built with love from Germany",
    contact: "Contact",
    email: "Email",
    cv: "CV",
  },
};

export type Dictionary = typeof en;
