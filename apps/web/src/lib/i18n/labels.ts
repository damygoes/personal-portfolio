import type { Hero, Locale, NavKey, ProjectLink } from "@portfolio/contracts";

type ProjectStatus = "live" | "inDevelopment" | "archived";
type WorkMode = "onsite" | "hybrid" | "remote";

export interface Labels {
  nav: Record<NavKey, string>;
  scrollHint: string;
  downloadCv: string;
  workModes: Record<WorkMode, string>;
  experienceDetails: string;
  experienceClose: string;
  present: string;
  readingTime: (minutes: number) => string;
  updated: string;
  paginationPrevious: string;
  paginationNext: string;
  categoryAll: string;
  postGridEmpty: string;
  tableOfContents: string;
  relatedPosts: string;
  photoCount: (count: number) => string;
  projectStatus: Record<ProjectStatus, string>;
  projectLinkKinds: Record<ProjectLink["kind"], string>;
  copy: string;
  copied: string;
  playVideo: string;
  exif: {
    camera: string;
    lens: string;
    focalLength: string;
    aperture: string;
    shutterSpeed: string;
    iso: string;
  };
  menuOpen: string;
  menuClose: string;
  backToTop: string;
  rightsReserved: string;
  sayHello: string;
  viewAllProjects: string;
  notFoundHeading: string;
  notFoundBody: string;
  backHome: string;
}

const labelsByLocale: Record<Locale, Labels> = {
  en: {
    nav: {
      about: "About",
      experience: "Experience",
      work: "Work",
      skills: "Technologies",
      contact: "Contact",
      blog: "Blog",
    },
    scrollHint: "Scroll",
    downloadCv: "Download CV",
    workModes: { onsite: "Onsite", hybrid: "Hybrid", remote: "Remote" },
    experienceDetails: "Details",
    experienceClose: "Close",
    present: "Present",
    readingTime: (minutes) => `${minutes} min read`,
    updated: "Updated",
    paginationPrevious: "Previous",
    paginationNext: "Next",
    categoryAll: "All",
    postGridEmpty: "No posts yet.",
    tableOfContents: "On this page",
    relatedPosts: "Related posts",
    photoCount: (count) => `${count} photo${count === 1 ? "" : "s"}`,
    projectStatus: {
      live: "Live",
      inDevelopment: "In development",
      archived: "Archived",
    },
    projectLinkKinds: {
      live: "View live",
      repository: "View code",
      appStore: "App Store",
      playStore: "Google Play",
      other: "Visit link",
    },
    copy: "Copy",
    copied: "Copied!",
    playVideo: "Play video",
    exif: {
      camera: "Camera",
      lens: "Lens",
      focalLength: "Focal length",
      aperture: "Aperture",
      shutterSpeed: "Shutter speed",
      iso: "ISO",
    },
    menuOpen: "Open menu",
    menuClose: "Close menu",
    backToTop: "Back to top",
    rightsReserved: "All rights reserved.",
    sayHello: "Say hello",
    viewAllProjects: "View all projects",
    notFoundHeading: "Page not found",
    notFoundBody:
      "The page you're looking for doesn't exist or may have moved.",
    backHome: "Back home",
  },
  de: {
    nav: {
      about: "Über mich",
      experience: "Erfahrung",
      work: "Projekte",
      skills: "Technologien",
      contact: "Kontakt",
      blog: "Blog",
    },
    scrollHint: "Scrollen",
    downloadCv: "Lebenslauf herunterladen",
    workModes: { onsite: "Vor Ort", hybrid: "Hybrid", remote: "Remote" },
    experienceDetails: "Details",
    experienceClose: "Schließen",
    present: "Aktuell",
    readingTime: (minutes) => `${minutes} Min. Lesezeit`,
    updated: "Aktualisiert",
    paginationPrevious: "Zurück",
    paginationNext: "Weiter",
    categoryAll: "Alle",
    postGridEmpty: "Noch keine Beiträge.",
    tableOfContents: "Auf dieser Seite",
    relatedPosts: "Ähnliche Beiträge",
    photoCount: (count) => `${count} Foto${count === 1 ? "" : "s"}`,
    projectStatus: {
      live: "Live",
      inDevelopment: "In Entwicklung",
      archived: "Archiviert",
    },
    projectLinkKinds: {
      live: "Live ansehen",
      repository: "Code ansehen",
      appStore: "App Store",
      playStore: "Google Play",
      other: "Link öffnen",
    },
    copy: "Kopieren",
    copied: "Kopiert!",
    playVideo: "Video abspielen",
    exif: {
      camera: "Kamera",
      lens: "Objektiv",
      focalLength: "Brennweite",
      aperture: "Blende",
      shutterSpeed: "Verschlusszeit",
      iso: "ISO",
    },
    menuOpen: "Menü öffnen",
    menuClose: "Menü schließen",
    backToTop: "Nach oben",
    rightsReserved: "Alle Rechte vorbehalten.",
    sayHello: "Sag hallo",
    viewAllProjects: "Alle Projekte ansehen",
    notFoundHeading: "Seite nicht gefunden",
    notFoundBody: "Die gesuchte Seite existiert nicht oder wurde verschoben.",
    backHome: "Zur Startseite",
  },
};

export function getLabels(locale: Locale): Labels {
  return labelsByLocale[locale];
}

/** Builds the Hero's `facts` strings from its structured `facts` field. */
export function getHeroFacts(locale: Locale, hero: Hero): string[] {
  const { location, role, yearsOfExperience } = hero.facts;
  if (locale === "de") {
    return [
      `Wohnhaft in ${location}`,
      role,
      `${yearsOfExperience}+ Jahre Erfahrung`,
    ];
  }
  return [`Based in ${location}`, role, `${yearsOfExperience}+ yrs experience`];
}
