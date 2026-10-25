/**
 * Site settings — spec/content-seed.json `siteSettings`.
 * `authorBio` is the one line from reference-html/blog-post.html (bio card); the seed has no field for it.
 */
export const site = {
  name: "Damilola Bada",
  initials: "DB",
  tagline:
    "I build web and mobile apps that just work — clean, fast, and easy to use.",
  email: "badadamilola@gmx.de",
  socials: [
    { label: "LinkedIn", url: "https://linkedin.com/in/damilolabada" },
    { label: "GitHub", url: "https://github.com/damygoes" },
  ],
  cvUrl: "https://www.damilolabada.com/resume.pdf",
  location: "Germany",
  timezone: "Europe/Berlin",
  yearsExperienceLabel: "4+ yrs experience",
  heroMeta: ["Based in Germany", "Software Developer", "4+ yrs experience"],
  currentRole: { title: "Software Developer", company: "adesso SE" },
  marqueeItems: [
    { text: "React" },
    { text: "Next.js", outlined: true },
    { text: "React Native", outlined: true },
    { text: "TypeScript", outlined: true },
    { text: "Node.js" },
    { text: "GraphQL" },
    { text: "PostgreSQL" },
    { text: "Docker" },
  ],
  authorBio:
    "Software Developer at adesso SE. I build web and mobile apps, and write about code, cycling and photography.",
};
