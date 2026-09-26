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
    skills: "Technologies",
    contact: "Let's work together",
  },
  de: {
    about: "Über mich",
    experience: "Erfahrung",
    work: "Ausgewählte Projekte",
    skills: "Technologien",
    contact: "Lass uns zusammenarbeiten",
  },
};

const portrait = {
  src: "https://images.unsplash.com/photo-1693287728946-058e154f3a14?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
          ? "Ich baue Web- und Mobile-Apps, die einfach funktionieren — sauber, schnell und einfach zu bedienen. Ich liebe es, Ideen in die Realität umzusetzen und echte Probleme für Menschen zu lösen."
          : "I build web and mobile apps that just work — clean, fast, and easy to use. I love turning ideas into reality and solving real problems for people.",
      primaryCta: {
        label: locale === "de" ? "Ausgewählte Projekte" : "Selected work",
        href: `/${locale}#work`,
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
              text:
                locale === "de"
                  ? "Ich bin Fullstack-Entwickler mit Sitz in Deutschland und konzentriere mich darauf, Web- und Mobile-Produkte zu bauen, die sich einfach anfühlen — auch wenn die Systeme dahinter es nicht sind. Meine Arbeit reicht von Design-Systemen über Frontend-Architektur bis hin zu den Backend-Services, die alles schnell und zuverlässig laufen lassen."
                  : "I'm a fullstack developer based in Germany, focused on building web and mobile products that feel simple even when the systems behind them aren't. My work spans design systems, frontend architecture, and the backend services that keep everything fast and reliable.",
            },
          ],
          markDefs: [],
        },
        {
          _type: "block",
          _key: "about-p2",
          style: "normal",
          children: [
            {
              _type: "span",
              _key: "about-p2-span",
              text:
                locale === "de"
                  ? "In den letzten vier Jahren habe ich alles von frühen MVPs bis hin zu produktiven SaaS-Plattformen ausgeliefert, mit wachsendem Fokus darauf, KI auf echte Produktprobleme anzuwenden statt sie nur als Feature aufzusetzen. Mir sind sauberer Code, durchdachtes UX und Dinge, die tatsächlich funktionieren, wichtig."
                  : "Over the past four years I've shipped everything from early-stage MVPs to production SaaS platforms, with a growing focus on applying AI to real product problems rather than bolting it on as a feature. I care about clean code, thoughtful UX, and shipping things that actually work.",
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
        {
          id: "exp-2",
          role: locale === "de" ? "Frontend-Entwickler" : "Frontend developer",
          company: {
            name: "Northwind Digital",
            url: "https://northwind.example.com",
          },
          location: locale === "de" ? "Remote" : "Remote",
          workMode: "remote",
          period: { start: "2022-01-01", end: "2023-02-28", isCurrent: false },
          summary:
            locale === "de"
              ? "Entwicklung und Wartung mehrerer React-basierter Marketing-Sites und interner Tools für ein verteiltes Team."
              : "Built and maintained several React-based marketing sites and internal tools for a distributed team.",
          highlights: [
            locale === "de"
              ? "Komponentenbibliothek für 6 Produktteams eingeführt"
              : "Introduced a shared component library used by 6 product teams",
            locale === "de"
              ? "Core Web Vitals über alle Sites hinweg verbessert"
              : "Improved Core Web Vitals scores across all sites",
          ],
        },
        {
          id: "exp-3",
          role: "Fullstack developer",
          company: {
            name: "Bluepeak Software",
            url: "https://bluepeak.example.com",
          },
          location:
            locale === "de" ? "München, Deutschland" : "Munich, Germany",
          workMode: "onsite",
          period: { start: "2021-02-01", end: "2021-12-31", isCurrent: false },
          summary:
            locale === "de"
              ? "Entwicklung von Kundenprojekten mit Node.js und React für eine Digitalagentur."
              : "Built client projects with Node.js and React for a digital agency.",
          highlights: [
            locale === "de"
              ? "5 Kundenprojekte termingerecht ausgeliefert"
              : "Delivered 5 client projects on schedule",
            locale === "de"
              ? "REST-APIs für mobile Begleit-Apps entworfen"
              : "Designed REST APIs powering companion mobile apps",
          ],
        },
        {
          id: "exp-4",
          role:
            locale === "de"
              ? "Junior Frontend-Entwickler"
              : "Junior frontend developer",
          company: {
            name: "Studio Nine",
            url: "https://studionine.example.com",
          },
          location:
            locale === "de" ? "Hamburg, Deutschland" : "Hamburg, Germany",
          workMode: "hybrid",
          period: { start: "2020-06-01", end: "2021-01-31", isCurrent: false },
          summary:
            locale === "de"
              ? "Umsetzung von Webdesigns in responsive, barrierefreie Interfaces für kleine Unternehmenskunden."
              : "Turned web designs into responsive, accessible interfaces for small business clients.",
          highlights: [
            locale === "de"
              ? "Über 20 responsive Websites gebaut"
              : "Built more than 20 responsive websites",
            locale === "de"
              ? "Barrierefreiheits-Audits eingeführt"
              : "Introduced accessibility audits into the team's workflow",
          ],
        },
        {
          id: "exp-5",
          role:
            locale === "de"
              ? "Web-Entwickler (Praktikum)"
              : "Web developer intern",
          company: {
            name: "Vantage Labs",
            url: "https://vantagelabs.example.com",
          },
          location: locale === "de" ? "Köln, Deutschland" : "Cologne, Germany",
          workMode: "onsite",
          period: { start: "2019-09-01", end: "2020-05-31", isCurrent: false },
          summary:
            locale === "de"
              ? "Unterstützung des Entwicklungsteams bei Wartung und Tests einer internen Web-App."
              : "Supported the engineering team with maintenance and testing of an internal web app.",
          highlights: [
            locale === "de"
              ? "Testabdeckung des Frontends verdoppelt"
              : "Doubled the frontend's test coverage",
            locale === "de"
              ? "Erste eigene Feature-Umsetzung von Anfang bis Ende"
              : "Shipped a first end-to-end feature independently",
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
        [
          "React",
          "✦",
          "Next.js",
          "✦",
          "React Native",
          "✦",
          "TypeScript",
          "✦",
          "Tailwind CSS",
          "✦",
        ],
        [
          "Node.js",
          "✦",
          "NestJS",
          "✦",
          "PostgreSQL",
          "✦",
          "Docker",
          "✦",
          "AWS",
          "✦",
        ],
      ],
      groups: [
        {
          title: "Frontend",
          skills: [
            "React",
            "Next.js",
            "React Native",
            "TypeScript",
            "Tailwind CSS",
          ],
        },
        {
          title: "Backend",
          skills: [
            "Node.js",
            "NestJS",
            "Express",
            "REST API",
            "GraphQL",
            "Golang",
          ],
        },
        {
          title: "Database",
          skills: [
            "PostgreSQL",
            "MongoDB",
            "Redis",
            "Prisma",
            "TypeORM",
            "Drizzle ORM",
          ],
        },
        {
          title:
            locale === "de"
              ? "DevOps, Tools & Architektur"
              : "DevOps, Tools & Architecture",
          skills: [
            "Docker",
            "AWS",
            "Git",
            "CI/CD",
            "Testing",
            "Monorepo",
            "Microservices",
            "Serverless",
          ],
        },
      ],
    },
    contact: {
      id: "contact",
      index: "05",
      heading: h.contact,
      body:
        locale === "de"
          ? "Bereit, deine Ideen zum Leben zu erwecken? Lass uns über dein nächstes Projekt sprechen und gemeinsam etwas Großartiges schaffen."
          : "Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.",
      cta: {
        label: locale === "de" ? "E-Mail senden" : "Send an email",
        email: "badadamilola@gmx.de",
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
