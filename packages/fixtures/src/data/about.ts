import type { Paragraph, TextRun } from "@portfolio/contracts";

/**
 * About — spec/content-seed.json `about`. Bold project names follow the reference
 * markup (about.html, home.html); `[[…]]` in the seed statement is the highlight.
 */
export const about = {
  statement: [
    {
      text: "I got into software development because I wanted to build things that ",
    },
    { text: "actually help people", highlight: true },
  ] satisfies TextRun[],
  bio: [
    [
      {
        text: "What started as curiosity is now my profession — building web and mobile apps that just get the job done, without over-complicating things.",
      },
    ],
    [
      {
        text: "These days I work as a Software Developer at adesso, building tailored software for companies and public organisations. Before that I led a small engineering team at apomap — where I learned that clear code and clear communication matter equally.",
      },
    ],
    [
      {
        text: "I believe technology should solve real problems simply and reliably. That belief carries into my own products too — like ",
      },
      { text: "Passe.", strong: true },
      {
        text: ", a private-by-default travel journal for the trips worth remembering, and ",
      },
      { text: "ElliesNote", strong: true },
      {
        text: ", a health companion for people living with energy-limiting chronic conditions.",
      },
    ],
    [
      {
        text: "Every project is a new chance to learn and make a difference, and I'm excited to keep growing — as an engineer, a teammate, and a builder.",
      },
    ],
  ] satisfies Paragraph[],
  teaserParagraphs: [
    [
      {
        text: "These days I work as a Software Developer at adesso, building tailored software for companies and public organisations. Before that I led a small engineering team at apomap — where I learned that clear code and clear communication matter equally.",
      },
    ],
    [
      {
        text: "That belief in solving real problems simply carries into my own products too — like ",
      },
      { text: "Passe.", strong: true },
      { text: ", a private-by-default travel journal, and " },
      { text: "ElliesNote", strong: true },
      {
        text: ", a health companion for people living with energy-limiting chronic conditions.",
      },
    ],
  ] satisfies Paragraph[],
  lede: "Software developer based in Germany. I build web and mobile apps that just work — clean, fast, and easy to use.",
  facts: [
    { label: "Now", value: "Software Developer, adesso SE" },
    {
      label: "Building",
      value: "Passe. & ElliesNote",
      links: ["passe", "elliesnote"],
    },
    { label: "Before", value: "Team Lead, apomap GmbH" },
    { label: "Based in", value: "Germany", aboutPageOnly: true },
  ],
  portrait: {
    src: "https://www.damilolabada.com/avatar.jpg",
    alt: "Damilola Bada",
    width: 1099,
    height: 1211,
  },
};
