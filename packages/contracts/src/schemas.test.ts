import { describe, expect, it } from "vitest";
import { BlogIndexSchema } from "./blog";
import { HomepageSchema } from "./home";
import { LegalPageSchema } from "./page";
import { ProjectSchema } from "./project";
import { PostSchema } from "./blog";

const seo = {
  title: "Title",
  description: "Description",
  canonicalUrl: "https://example.com",
  noIndex: false,
  alternates: [],
};

const photo = {
  src: "https://cdn.example.com/img.jpg",
  width: 800,
  height: 600,
  alt: "alt text",
};

describe("HomepageSchema", () => {
  it("parses a minimal valid homepage", () => {
    const result = HomepageSchema.safeParse({
      seo,
      hero: {
        name: "Jane Doe",
        facts: { location: "Berlin", role: "Developer", yearsOfExperience: 4 },
        intro: "Intro copy",
        primaryCta: { label: "Contact", href: "#contact", external: false },
      },
    });

    expect(result.success).toBe(true);
  });
});

describe("PostSchema", () => {
  it("parses a minimal valid post", () => {
    const result = PostSchema.safeParse({
      id: "1",
      slug: "hello-world",
      href: "/en/blog/hello-world",
      title: "Hello World",
      excerpt: "An excerpt",
      cover: photo,
      categories: [
        {
          slug: "general",
          title: "General",
          href: "/en/blog/category/general",
        },
      ],
      publishedAt: "2024-01-01T00:00:00.000Z",
      readingTimeMinutes: 5,
      layout: "standard",
      body: [],
      toc: [],
      seo,
      related: [],
    });

    expect(result.success).toBe(true);
  });
});

describe("ProjectSchema", () => {
  it("parses a minimal valid project", () => {
    const result = ProjectSchema.safeParse({
      id: "1",
      title: "Ellies Note",
      summary: "A note-taking app",
      cover: photo,
      tech: ["TypeScript", "React"],
      href: "/en/work/elliesnote",
      slug: "elliesnote",
      role: "Fullstack developer",
      period: { start: "2023-01-01", end: null, isCurrent: true },
      status: "live",
      links: [],
      body: [],
      toc: [],
      seo,
    });

    expect(result.success).toBe(true);
  });
});

describe("BlogIndexSchema", () => {
  it("parses a minimal valid blog index", () => {
    const result = BlogIndexSchema.safeParse({
      heading: "Blog",
      categories: [],
      posts: [],
      pagination: { page: 1, totalPages: 1 },
      seo,
    });

    expect(result.success).toBe(true);
  });
});

describe("LegalPageSchema", () => {
  it("parses a minimal valid legal page", () => {
    const result = LegalPageSchema.safeParse({
      title: "Impressum",
      body: [],
      updatedAt: "2024-01-01T00:00:00.000Z",
      seo,
    });

    expect(result.success).toBe(true);
  });
});
