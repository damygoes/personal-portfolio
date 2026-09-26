import type { Homepage, Locale } from "@portfolio/contracts";
import { getProjects, toProjectCard } from "./projects";

const heading: Record<
  Locale,
  Record<"about" | "experience" | "work" | "skills" | "contact", string>
> = {
  en: {
    about: "About",
    experience: "Experience",
    work: "Selected work",
    skills: "Skills",
    contact: "Contact",
  },
  de: {
    about: "Über mich",
    experience: "Erfahrung",
    work: "Ausgewählte Projekte",
    skills: "Fähigkeiten",
    contact: "Kontakt",
  },
};

const portrait = {
  src: "https://cdn.example.com/images/portrait.jpg",
  width: 800,
  height: 1000,
  alt: "Portrait photo",
  lqip: "data:image/jpeg;base64,",
};

export function getHomepage(locale: Locale): Homepage {
  const h = heading[locale];
  const projects = getProjects(locale);

  return {
    seo: {
      title: "Damilola Bada — Fullstack developer",
      description:
        locale === "de"
          ? "Fullstack-Entwickler mit Fokus auf Frontend-Grundlagen und KI-Engineering."
          : "Fullstack developer focused on frontend fundamentals and AI engineering.",
      canonicalUrl: `https://damilolabada.com/${locale}`,
      noIndex: false,
      alternates: [
        { locale: "en", href: "https://damilolabada.com/en" },
        { locale: "de", href: "https://damilolabada.com/de" },
      ],
    },
    hero: {
      name: "Damilola Bada",
      facts: {
        location: locale === "de" ? "Deutschland" : "Germany",
        role: "Fullstack developer",
        yearsOfExperience: 4,
      },
      intro:
        locale === "de"
          ? "Ich baue durchdachte, performante Web-Erlebnisse — vom Design-System bis zur Produktion."
          : "I build thoughtful, performant web experiences — from design system to production.",
      primaryCta: {
        label: locale === "de" ? "Kontakt aufnehmen" : "Get in touch",
        href: `/${locale}#contact`,
        external: false,
      },
    },
    about: {
      id: "about",
      index: "01",
      heading: h.about,
      portrait,
      body: [
        {
          _type: "block",
          _key: "about-p1",
          style: "normal",
          children: [
            {
              _type: "span",
              _key: "about-p1-span",
              text: "A short bio paragraph.",
            },
          ],
          markDefs: [],
        },
      ],
    },
    experience: {
      id: "experience",
      index: "02",
      heading: h.experience,
      items: [
        {
          id: "exp-1",
          role: "Fullstack developer",
          company: { name: "Acme Corp", url: "https://acme.example.com" },
          location: locale === "de" ? "Berlin, Deutschland" : "Berlin, Germany",
          workMode: "hybrid",
          period: { start: "2023-03-01", end: null, isCurrent: true },
          summary:
            locale === "de"
              ? "Verantwortlich für das Frontend eines B2B-SaaS-Produkts."
              : "Responsible for the frontend of a B2B SaaS product.",
          highlights: [
            locale === "de"
              ? "Design-System von Grund auf aufgebaut"
              : "Built the design system from scratch",
            locale === "de"
              ? "Ladezeiten um 40% reduziert"
              : "Reduced load times by 40%",
          ],
        },
      ],
    },
    work: {
      id: "work",
      index: "03",
      heading: h.work,
      projects: projects.map((project, i) =>
        toProjectCard(project, String(i + 1).padStart(2, "0")),
      ),
    },
    skills: {
      id: "skills",
      index: "04",
      heading: h.skills,
      marqueeRows: [
        ["TypeScript", "React", "Next.js"],
        ["Node.js", "PostgreSQL", "Tailwind CSS"],
      ],
      groups: [
        {
          title: "Frontend",
          skills: ["TypeScript", "React", "Next.js", "Tailwind CSS"],
        },
        { title: "Backend", skills: ["Node.js", "PostgreSQL"] },
      ],
    },
    contact: {
      id: "contact",
      index: "05",
      heading: h.contact,
      body:
        locale === "de"
          ? "Ich freue mich immer über ein Gespräch — schreib mir einfach."
          : "I'm always happy to chat — just reach out.",
      cta: {
        label: locale === "de" ? "E-Mail senden" : "Send an email",
        email: "badadamilola@gmail.com",
      },
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
    },
  };
}
