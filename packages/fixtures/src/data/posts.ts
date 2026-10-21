import type { PostRecord } from "@portfolio/content-core";

const codeReviewTemplate = `## What & why
<!-- One paragraph. Link the ticket. -->

## How to test
- [ ] Steps a reviewer can follow locally

## Checklist
- [ ] Types and tests updated
- [ ] No new warnings in CI
- [ ] Screenshots for UI changes`;

/** Tokens exactly as in reference-html/blog-post.html. */
const codeReviewTemplateHtml = `<span class="k">## What &amp; why</span>
<span class="c">&lt;!-- One paragraph. Link the ticket. --&gt;</span>

<span class="k">## How to test</span>
- [ ] Steps a reviewer can follow locally

<span class="k">## Checklist</span>
- [ ] Types and tests updated
- [ ] No new warnings in CI
- [ ] Screenshots for UI changes`;

/**
 * spec/content-seed.json `posts` — every post is a layout SAMPLE from the design
 * (`sample: true`): Storybook and the development dataset only, never production.
 * The code-review body is the sample article from reference-html/blog-post.html;
 * its figure is a placeholder there, so it is left out.
 */
export const posts: PostRecord[] = [
  {
    sample: true,
    slug: "shipping-a-react-native-app-solo",
    title: "Shipping a React Native app to the App Store as a solo developer",
    categories: ["tech"],
    publishedAt: "2026-09-14",
    readingMinutes: 9,
    coverWord: "Ship",
    excerpt:
      "Everything I wish I'd known before submitting my first app — from Expo builds to App Review.",
  },
  {
    sample: true,
    slug: "code-review-team-of-three",
    title: "What leading a team of three taught me about code review",
    categories: ["programming"],
    publishedAt: "2026-08-30",
    readingMinutes: 7,
    coverWord: "Code",
    excerpt:
      "Reviews stopped being about catching bugs and started being about sharing context. Here's the checklist we landed on.",
    body: [
      {
        _type: "paragraph",
        _key: "p1",
        children: [
          {
            text: "When I became team lead at apomap, I inherited a review process that mostly worked. Pull requests got approved, bugs got caught, and nobody complained. But reviews felt like a gate, not a conversation — and with three developers each owning a different part of the product, that gap mattered.",
          },
        ],
      },
      {
        _type: "heading",
        _key: "h1",
        id: "s1",
        text: "Reviews are conversations",
      },
      {
        _type: "paragraph",
        _key: "p2",
        children: [
          {
            text: "The first thing we changed was the question a reviewer asks. Instead of ",
          },
          { text: "“is this correct?”", strong: true },
          { text: ", we started with " },
          { text: "“do I understand why this exists?”", strong: true },
          {
            text: " If the answer was no, the pull request description needed work before the code did.",
          },
        ],
      },
      {
        _type: "pullQuote",
        _key: "q1",
        text: "A good review leaves both people knowing more than they did before.",
      },
      { _type: "heading", _key: "h2", id: "s2", text: "Keep it small" },
      {
        _type: "paragraph",
        _key: "p3",
        children: [
          {
            text: "Large pull requests get skimmed. We agreed on a soft limit for changed lines, and anything bigger got split up or walked through on a short call. Smaller changes also meant faster feedback, which made people more willing to open a draft early.",
          },
        ],
      },
      { _type: "heading", _key: "h3", id: "s3", text: "The checklist" },
      {
        _type: "paragraph",
        _key: "p4",
        children: [
          {
            text: "We kept a short checklist in the pull request template. It fit on one screen, so people actually read it:",
          },
        ],
      },
      {
        _type: "code",
        _key: "c1",
        filename: ".github/pull_request_template.md",
        language: "markdown",
        languageLabel: "Markdown",
        code: codeReviewTemplate,
        html: codeReviewTemplateHtml,
      },
      { _type: "heading", _key: "h4", id: "s4", text: "What changed" },
      {
        _type: "list",
        _key: "l1",
        ordered: true,
        items: [
          [
            {
              text: "Reviews got faster, because the context was already written down.",
            },
          ],
          [
            {
              text: "Newer developers asked more questions — in the open, where everyone learned.",
            },
          ],
          [
            {
              text: "“LGTM” without a comment became the exception rather than the rule.",
            },
          ],
        ],
      },
      {
        _type: "paragraph",
        _key: "p5",
        children: [
          {
            text: "The checklist was never really the point. It just gave us a shared place to start the conversation.",
          },
        ],
      },
    ],
  },
  {
    sample: true,
    slug: "black-forest-before-work",
    title: "Riding the Black Forest before work",
    categories: ["cycling"],
    publishedAt: "2026-08-12",
    readingMinutes: 5,
    coverWord: "Ride",
    excerpt:
      "Early climbs, empty roads and why the best debugging happens somewhere around kilometre forty.",
  },
  {
    sample: true,
    slug: "one-lens-for-a-month",
    title: "One lens for a month",
    categories: ["photography"],
    publishedAt: "2026-07-28",
    readingMinutes: 4,
    coverWord: "Light",
    excerpt:
      "Constraints make better apps. It turns out they make better photos too.",
  },
  {
    sample: true,
    slug: "go-for-typescript-developers",
    title: "Go for TypeScript developers: first impressions",
    categories: ["tech"],
    publishedAt: "2026-07-09",
    readingMinutes: 6,
    coverWord: "Go",
    excerpt:
      "What surprised me moving from Node to Go while building a small URL analyzer.",
  },
  {
    sample: true,
    slug: "first-200km-ride",
    title: "My first 200 km ride, and what it taught me about pacing",
    categories: ["cycling"],
    publishedAt: "2026-06-21",
    readingMinutes: 8,
    coverWord: "200",
    excerpt:
      "Start slower than feels right. Eat before you're hungry. Good advice for long projects, too.",
  },
  {
    sample: true,
    slug: "light-lines-vosges",
    title: "Light, lines and long climbs in the Vosges",
    categories: ["photography"],
    publishedAt: "2026-06-02",
    readingMinutes: 5,
    coverWord: "Vosges",
    excerpt:
      "A weekend of switchbacks and golden hour, just across the border.",
  },
];
