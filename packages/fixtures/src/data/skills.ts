import type { SkillGroupRecord } from "@portfolio/content-core";

/** spec/content-seed.json `skillGroups` + `skillsIntro` */
export const skillGroups: SkillGroupRecord[] = [
  {
    order: 1,
    title: "Frontend",
    items: ["React", "Next.js", "React Native", "TypeScript", "Tailwind CSS"],
  },
  {
    order: 2,
    title: "Backend",
    items: ["Node.js", "NestJS", "Express", "REST API", "GraphQL", "Golang"],
  },
  {
    order: 3,
    title: "Database",
    items: [
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "Prisma",
      "TypeORM",
      "Drizzle ORM",
    ],
  },
  {
    order: 4,
    title: "DevOps & Tools",
    items: [
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
];

export const skillsIntro =
  "The stack I reach for to take an idea from schema to App Store.";
