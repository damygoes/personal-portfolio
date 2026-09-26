import type { Locale, Site } from "@portfolio/contracts";

const nav: Record<Locale, Site["nav"]> = {
  en: [
    { key: "about", href: "/en#about", index: "01" },
    { key: "experience", href: "/en#experience", index: "02" },
    { key: "work", href: "/en#work", index: "03" },
    { key: "skills", href: "/en#skills", index: "04" },
    { key: "contact", href: "/en#contact", index: "05" },
    { key: "blog", href: "/en/blog" },
  ],
  de: [
    { key: "about", href: "/de#about", index: "01" },
    { key: "experience", href: "/de#experience", index: "02" },
    { key: "work", href: "/de#work", index: "03" },
    { key: "skills", href: "/de#skills", index: "04" },
    { key: "contact", href: "/de#contact", index: "05" },
    { key: "blog", href: "/de/blog" },
  ],
};

const footerTagline: Record<Locale, string> = {
  en: "Built from scratch, deployed with care.",
  de: "Von Grund auf gebaut, mit Sorgfalt veröffentlicht.",
};

const legalLinks: Record<Locale, Site["legalLinks"]> = {
  en: [
    { title: "Impressum", href: "/en/impressum" },
    { title: "Privacy policy", href: "/en/datenschutz" },
  ],
  de: [
    { title: "Impressum", href: "/de/impressum" },
    { title: "Datenschutz", href: "/de/datenschutz" },
  ],
};

export function getSite(locale: Locale): Site {
  return {
    locale,
    siteName: "Damilola Bada",
    siteUrl: "https://damilolabada.com",
    defaultDescription:
      locale === "de"
        ? "Fullstack-Entwickler mit Fokus auf Frontend-Grundlagen und KI-Engineering."
        : "Fullstack developer focused on frontend fundamentals and AI engineering.",
    owner: { name: "Damilola Bada", email: "badadamilola@gmail.com" },
    socials: [
      {
        platform: "github",
        label: "GitHub",
        href: "https://github.com/damilolabada",
      },
      {
        platform: "linkedin",
        label: "LinkedIn",
        href: "https://linkedin.com/in/damilolabada",
      },
    ],
    cv: { href: "/cv/damilola-bada-en.pdf", fileName: "damilola-bada-en.pdf" },
    nav: nav[locale],
    footer: { tagline: footerTagline[locale], copyrightYear: 2026 },
    legalLinks: legalLinks[locale],
  };
}
