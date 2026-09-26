import type { LegalPage, Locale } from "@portfolio/contracts";

function para(key: string, text: string) {
  return {
    _type: "block" as const,
    _key: key,
    style: "normal" as const,
    markDefs: [],
    children: [{ _type: "span" as const, _key: `${key}-span`, text }],
  };
}

function heading(key: string, text: string) {
  return {
    _type: "block" as const,
    _key: key,
    style: "h2" as const,
    markDefs: [],
    children: [{ _type: "span" as const, _key: `${key}-span`, text }],
  };
}

const impressumBody: Record<Locale, LegalPage["body"]> = {
  en: [
    heading("h2-provider", "Service provider"),
    para(
      "provider-p1",
      "Damilola Bada, Musterstraße 1, 10115 Berlin, Germany.",
    ),
    para("provider-p2", "Email: badadamilola@gmail.com"),
    heading("h2-responsible", "Responsible for content"),
    para(
      "responsible-p1",
      "Damilola Bada, at the address above, responsible per § 55 (2) RStV.",
    ),
    heading("h2-disclaimer", "Disclaimer"),
    para(
      "disclaimer-p1",
      "Despite careful review of content, no liability is assumed for the content of external links. The operators of linked pages are solely responsible for their content.",
    ),
  ],
  de: [
    heading("h2-provider", "Diensteanbieter"),
    para(
      "provider-p1",
      "Damilola Bada, Musterstraße 1, 10115 Berlin, Deutschland.",
    ),
    para("provider-p2", "E-Mail: badadamilola@gmail.com"),
    heading("h2-responsible", "Verantwortlich für den Inhalt"),
    para(
      "responsible-p1",
      "Damilola Bada, unter der oben genannten Anschrift, verantwortlich gemäß § 55 Abs. 2 RStV.",
    ),
    heading("h2-disclaimer", "Haftungsausschluss"),
    para(
      "disclaimer-p1",
      "Trotz sorgfältiger inhaltlicher Kontrolle wird keine Haftung für die Inhalte externer Links übernommen. Für den Inhalt verlinkter Seiten sind ausschließlich deren Betreiber verantwortlich.",
    ),
  ],
};

const datenschutzBody: Record<Locale, LegalPage["body"]> = {
  en: [
    heading("h2-overview", "Overview"),
    para(
      "overview-p1",
      "This page explains what data this site collects and why, in plain language. This is a personal portfolio site with no analytics trackers and no advertising.",
    ),
    heading("h2-hosting", "Hosting"),
    para(
      "hosting-p1",
      "This site is a statically generated Next.js application. Standard web server logs (IP address, requested URL, timestamp, user agent) may be retained briefly by the hosting provider for security and abuse prevention.",
    ),
    heading("h2-contact", "Contact"),
    para(
      "contact-p1",
      "If you email the address listed on the contact section, that message and your email address are stored only as long as needed to respond.",
    ),
    heading("h2-rights", "Your rights"),
    para(
      "rights-p1",
      "You may request information about, correction of, or deletion of any personal data held about you by contacting badadamilola@gmail.com.",
    ),
  ],
  de: [
    heading("h2-overview", "Überblick"),
    para(
      "overview-p1",
      "Diese Seite erklärt in einfacher Sprache, welche Daten diese Website erfasst und warum. Es handelt sich um eine persönliche Portfolio-Website ohne Analyse-Tracker und ohne Werbung.",
    ),
    heading("h2-hosting", "Hosting"),
    para(
      "hosting-p1",
      "Diese Website ist eine statisch generierte Next.js-Anwendung. Standard-Webserver-Logs (IP-Adresse, angeforderte URL, Zeitstempel, User-Agent) können vom Hosting-Anbieter kurzzeitig zur Sicherheit und Missbrauchsprävention gespeichert werden.",
    ),
    heading("h2-contact", "Kontakt"),
    para(
      "contact-p1",
      "Wenn Sie eine E-Mail an die im Kontaktbereich angegebene Adresse senden, werden diese Nachricht und Ihre E-Mail-Adresse nur so lange gespeichert, wie es zur Beantwortung notwendig ist.",
    ),
    heading("h2-rights", "Ihre Rechte"),
    para(
      "rights-p1",
      "Sie können Auskunft über, Berichtigung von oder Löschung Ihrer bei uns gespeicherten personenbezogenen Daten verlangen, indem Sie badadamilola@gmail.com kontaktieren.",
    ),
  ],
};

const legalPagesByLocale: Record<Locale, Record<string, LegalPage>> = {
  en: {
    impressum: {
      title: "Impressum",
      body: impressumBody.en,
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
      body: datenschutzBody.en,
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
      body: impressumBody.de,
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
      body: datenschutzBody.de,
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
