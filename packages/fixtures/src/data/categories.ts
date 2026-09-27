import type { Tone } from "@portfolio/contracts";

/** spec/content-seed.json `categories` */
export const categories: { slug: string; title: string; coverTone: Tone }[] = [
  { slug: "tech", title: "Tech", coverTone: "lagoon" },
  { slug: "programming", title: "Programming", coverTone: "ink" },
  { slug: "cycling", title: "Cycling", coverTone: "warm" },
  { slug: "photography", title: "Photography", coverTone: "stone" },
];
