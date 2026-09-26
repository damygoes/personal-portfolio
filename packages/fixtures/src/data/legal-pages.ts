import type { LegalPage, Locale } from "@portfolio/contracts";

const legalPagesByLocale: Record<Locale, Record<string, LegalPage>> = {
  en: {
    impressum: {
      title: "Impressum",
      body: [],
      updatedAt: "2026-01-01T00:00:00.000Z",
      seo: {
        title: "Impressum",
        description: "Legal notice.",
        canonicalUrl: "https://damilolabada.com/en/impressum",
        noIndex: true,
        alternates: [],
      },
    },
    datenschutz: {
      title: "Privacy policy",
      body: [],
      updatedAt: "2026-01-01T00:00:00.000Z",
      seo: {
        title: "Privacy policy",
        description: "Privacy policy.",
        canonicalUrl: "https://damilolabada.com/en/datenschutz",
        noIndex: true,
        alternates: [],
      },
    },
  },
  de: {
    impressum: {
      title: "Impressum",
      body: [],
      updatedAt: "2026-01-01T00:00:00.000Z",
      seo: {
        title: "Impressum",
        description: "Rechtlicher Hinweis.",
        canonicalUrl: "https://damilolabada.com/de/impressum",
        noIndex: true,
        alternates: [],
      },
    },
    datenschutz: {
      title: "Datenschutz",
      body: [],
      updatedAt: "2026-01-01T00:00:00.000Z",
      seo: {
        title: "Datenschutz",
        description: "Datenschutzerklärung.",
        canonicalUrl: "https://damilolabada.com/de/datenschutz",
        noIndex: true,
        alternates: [],
      },
    },
  },
};

export function getLegalPage(locale: Locale, slug: string): LegalPage | null {
  return legalPagesByLocale[locale][slug] ?? null;
}

export function getLegalPageSlugs(locale: Locale): string[] {
  return Object.keys(legalPagesByLocale[locale]);
}
