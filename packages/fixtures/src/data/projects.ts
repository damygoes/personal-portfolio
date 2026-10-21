import type { ProjectRecord } from "@portfolio/content-core";

/**
 * spec/content-seed.json `projects`. The seed's status "New · Live on the App Store"
 * is stored as label + isNew: cards prefix "New ·", the case-study pill does not.
 * GitHub links point at the profile until the repo URLs exist (seed note).
 */
export const projects: ProjectRecord[] = [
  {
    order: 1,
    slug: "passe",
    title: "Passe.",
    kind: "iOS app",
    teaser: "a travel journal",
    coverTag: "Latest · iOS & web",
    status: { label: "Live on the App Store", isNew: true },
    summary:
      "A private-by-default travel journal for people who actually go places. Pin photos and notes to the places they happened, watch your map fill in over the years, and share a trip only with the people you choose.",
    tech: [
      "React Native",
      "Expo",
      "TypeScript",
      "Next.js (API)",
      "NeonDB (PostgreSQL)",
    ],
    links: { live: "https://www.passe.cc", appStoreId: "6787004123" },
    coverTone: "warm",
    featured: true,
    caseStudy: "passe",
  },
  {
    order: 2,
    slug: "elliesnote",
    title: "ElliesNote",
    kind: "iOS app",
    coverTag: "iOS app",
    status: { label: "Live on the App Store", isNew: false },
    summary:
      "A privacy-first health companion for people with energy-limiting chronic conditions like ME/CFS and fibromyalgia. Gentle 30-second daily check-ins, crash-day logging, Apple Health sync, and AI-powered insights that reveal the patterns behind good and bad days.",
    tech: [
      "React Native",
      "Expo",
      "TypeScript",
      "Next.js (API)",
      "NeonDB (PostgreSQL)",
      "QStash",
    ],
    links: { live: "https://elliesnote.cc" },
    coverTone: "lagoon",
    featured: true,
    caseStudy: "elliesnote",
  },
  {
    order: 3,
    slug: "url-analyzer",
    title: "URL Analyzer",
    kind: "Web app",
    summary:
      "A web app that fetches and displays metadata from any URL, including title, headings, broken links, and more. Built with React and Go.",
    tech: [
      "Golang",
      "Gin",
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Tanstack Query",
      "Zustand",
      "Docker",
    ],
    links: { github: "https://github.com/damygoes" },
    coverTone: "card",
    featured: false,
  },
  {
    order: 4,
    slug: "kpi-bot",
    title: "KPI Bot",
    kind: "SaaS dashboard",
    summary:
      "A SaaS dashboard that connects to Stripe accounts to visualize real-time subscription metrics like MRR, ARR, churn rate, and more.",
    tech: [
      "Next.js",
      "TypeScript",
      "Stripe API",
      "Drizzle ORM",
      "PostgreSQL",
      "Recharts",
      "Shadcn UI",
    ],
    links: { github: "https://github.com/damygoes" },
    coverTone: "card",
    featured: false,
  },
  {
    order: 5,
    slug: "archetype",
    title: "Archetype",
    kind: "Backend",
    summary:
      "A scalable Node.js microservices architecture with shared TypeORM models, modular monorepo setup, and independent service deployment. Built with Docker, Express, and Lerna.",
    tech: [
      "TypeScript",
      "Node.js",
      "Express",
      "TypeORM",
      "Lerna",
      "Docker",
      "MySQL",
    ],
    links: { github: "https://github.com/damygoes" },
    coverTone: "card",
    featured: false,
  },
];
