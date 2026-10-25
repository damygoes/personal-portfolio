import type { CaseStudyRecord, Localized } from "@portfolio/content-core";

/**
 * spec/content-seed.json `caseStudies`. `null` = placeholder for Damilola to fill:
 * the service drops it, and a section left with no content is skipped entirely.
 */
export type RawCaseStudy = Omit<CaseStudyRecord, keyof Localized>;

export const caseStudies: RawCaseStudy[] = [
  {
    project: "passe",
    lede: "A private-by-default travel journal for people who actually go places.",
    meta: [
      { label: "Role", value: null },
      { label: "Platforms", value: "iOS · Web · Android coming soon" },
      { label: "Timeline", value: null },
      {
        label: "Stack",
        value:
          "React Native, Expo, TypeScript, Next.js (API), NeonDB (PostgreSQL)",
      },
    ],
    sections: [
      {
        type: "textBlock",
        label: "Overview",
        heading: "A place for the memories worth keeping.",
        body: [
          "Passe. is a travel journal for people who actually go places. Every trip starts private. You document it with photos pinned to the places they were taken and notes as short or long as you like, then share a curated selection with the people you choose — a single trip, or even a single memory.",
          null,
        ],
      },
      {
        type: "textBlock",
        label: "Challenge",
        heading: "A camera roll is not a memory.",
        body: [
          "Twelve thousand photographs, no idea which morning was which.",
          null,
        ],
      },
      {
        type: "stepsGrid",
        label: "How it works",
        heading: "Three minutes a trip.",
        steps: [
          { title: "Create a trip", text: "Name, countries and dates." },
          {
            title: "Add a memory",
            text: "Attach photos and pin them to a location.",
          },
          {
            title: "Write as much as you like",
            text: "From a brief line to the full story.",
          },
        ],
      },
      {
        type: "featureGrid",
        label: "Key features",
        heading: "Private first, shareable on your terms.",
        features: [
          {
            title: "Private by default",
            text: "Every trip starts closed. Nothing is public, nothing is suggested to strangers.",
          },
          {
            title: "A map that grows",
            text: "Cities, countries and routes add up into your own geographic record.",
          },
          {
            title: "Keepsakes",
            text: "Export trips as PDF memory books, zines and postcard sets.",
          },
          {
            title: "Selective sharing",
            text: "Share a trip — or a single memory — through links you control.",
          },
        ],
      },
      {
        type: "plans",
        label: "Business model",
        heading: "Free to start, paid for keepers.",
        plans: [
          {
            name: "Free",
            price: "€0",
            period: "/ month",
            features: ["3 trips", "10 memories per trip", "Private journaling"],
          },
          {
            name: "Explorer",
            price: "€4",
            period: "/ month",
            features: ["20 trips", "50 memories per trip", "Public portfolio"],
          },
          {
            name: "Collector",
            price: "€9",
            period: "/ month",
            features: [
              "Unlimited trips & memories",
              "PDF, zine & postcard exports",
            ],
          },
        ],
        note: "Cancel anytime — journals stay on the free tier if a subscription lapses.",
      },
      {
        type: "architecture",
        label: "How it's built",
        heading: "One TypeScript codebase, phone to database.",
        core: [
          {
            eyebrow: "Mobile app",
            title: "React Native · Expo",
            sub: "iOS · Android coming soon",
          },
          { eyebrow: "API", title: "Next.js", sub: "TypeScript", isCore: true },
          { eyebrow: "Database", title: "NeonDB", sub: "PostgreSQL" },
        ],
        sub: [
          { eyebrow: "Web", title: "passe.cc", sub: null },
          { eyebrow: "Media", title: "Photos & places", sub: null },
          { eyebrow: "Exports", title: "Books & zines", sub: null },
        ],
        notes: [null],
      },
      { type: "quote", label: "Outcome", text: null, attribution: null },
    ],
  },
  {
    project: "elliesnote",
    titleSplit: ["Ellies", "Note"],
    lede: "A privacy-first health companion for people with energy-limiting chronic conditions like ME/CFS and fibromyalgia.",
    meta: [
      { label: "Role", value: null },
      { label: "Type", value: "iOS app · Own product" },
      { label: "Timeline", value: null },
      {
        label: "Stack",
        value:
          "React Native, Expo, TypeScript, Next.js (API), NeonDB (PostgreSQL), QStash",
      },
    ],
    sections: [
      {
        type: "textBlock",
        label: "Overview",
        heading: "A health companion that asks for thirty seconds a day.",
        body: [
          "ElliesNote is built for people with energy-limiting chronic conditions like ME/CFS and fibromyalgia. Gentle 30-second daily check-ins, crash-day logging, Apple Health sync, and AI-powered insights that reveal the patterns behind good and bad days. Live on the App Store.",
          null,
        ],
      },
      { type: "textBlock", label: "Challenge", heading: null, body: [null] },
      {
        type: "featureGrid",
        label: "Key features",
        heading: "Four things, done gently.",
        features: [
          { title: "30-second daily check-ins" },
          { title: "Crash-day logging" },
          { title: "Apple Health sync" },
          { title: "AI-powered insights" },
        ],
      },
      {
        type: "architecture",
        label: "How it's built",
        heading: "One TypeScript codebase from phone to database.",
        core: [
          {
            eyebrow: "Mobile app",
            title: "React Native · Expo",
            sub: "TypeScript",
          },
          { eyebrow: "API", title: "Next.js", sub: "TypeScript", isCore: true },
          { eyebrow: "Database", title: "NeonDB", sub: "PostgreSQL" },
        ],
        sub: [
          {
            eyebrow: "On device",
            title: "Apple Health",
            sub: "Synced into the app",
          },
          { eyebrow: "Messaging", title: "QStash", sub: null },
          { eyebrow: "Privacy", title: "Privacy-first", sub: null },
        ],
        notes: [null],
      },
      { type: "quote", label: "Outcome", text: null, attribution: null },
    ],
  },
];
