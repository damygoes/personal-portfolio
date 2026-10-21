import type {
  BodyBlock,
  ImageDTO,
  Paragraph,
  TextRun,
} from "@portfolio/contracts";

/**
 * Portable Text → the contract's rich-text shapes. Only what the design
 * renders survives: strong, highlight and links. Emphasis and inline code
 * marks fall back to plain text.
 */

interface Span {
  _type: "span";
  text?: string;
  marks?: string[];
}

interface MarkDef {
  _key: string;
  _type: string;
  href?: string;
}

export interface PtBlock {
  _type: "block";
  _key: string;
  style?: string;
  listItem?: string;
  children?: Span[];
  markDefs?: MarkDef[] | null;
}

function toRuns(block: PtBlock): TextRun[] {
  const links = new Map(
    (block.markDefs ?? [])
      .filter((d) => d._type === "link" && d.href)
      .map((d) => [d._key, d.href as string]),
  );
  return (block.children ?? [])
    .filter((span) => span.text)
    .map((span) => {
      const marks = span.marks ?? [];
      const href = marks.map((m) => links.get(m)).find(Boolean);
      return {
        text: span.text as string,
        ...(marks.includes("strong") && { strong: true }),
        ...(marks.includes("highlight") && { highlight: true }),
        ...(href && { href }),
      };
    });
}

const isBlock = (value: { _type: string }): value is PtBlock =>
  value._type === "block";

/** Blocks → paragraphs of runs; empty blocks are dropped. */
export function toParagraphs(
  blocks: readonly { _type: string }[] | null | undefined,
): Paragraph[] {
  return (blocks ?? [])
    .filter(isBlock)
    .map(toRuns)
    .filter((runs): runs is Paragraph => runs.length > 0);
}

/** A single-paragraph field (the About statement) → its runs. */
export function toRunsOf(
  blocks: readonly { _type: string }[] | null | undefined,
): TextRun[] {
  return toParagraphs(blocks).flat();
}

type CustomBlock =
  | {
      _type: "code";
      _key: string;
      code?: string;
      language?: string;
      languageLabel?: string | null;
      filename?: string | null;
    }
  | { _type: "pullQuote"; _key: string; text?: string }
  | { _type: "figure"; _key: string; caption?: string | null; image?: unknown }
  | {
      _type: "gallery";
      _key: string;
      caption?: string | null;
      images?: unknown[] | null;
    };

export type PostBodyInput = readonly (
  PtBlock | CustomBlock | { _type: string; _key: string }
)[];

/**
 * Post body → BodyBlocks. H2 blocks become headings with stable anchors
 * ("s1", "s2", …) shared with the TOC; consecutive list items are grouped.
 */
export function toBodyBlocks(
  body: PostBodyInput | null | undefined,
  image: (value: unknown) => ImageDTO | undefined,
): BodyBlock[] {
  const out: BodyBlock[] = [];
  let headings = 0;
  for (const item of body ?? []) {
    if (isBlock(item)) {
      const runs = toRuns(item);
      if (!runs.length) continue;
      if (item.listItem) {
        const ordered = item.listItem === "number";
        const last = out.at(-1);
        if (last?._type === "list" && last.ordered === ordered) {
          last.items.push(runs);
        } else {
          out.push({ _type: "list", _key: item._key, ordered, items: [runs] });
        }
      } else if (item.style === "h2") {
        headings += 1;
        out.push({
          _type: "heading",
          _key: item._key,
          id: `s${headings}`,
          text: runs.map((r) => r.text).join(""),
        });
      } else {
        out.push({ _type: "paragraph", _key: item._key, children: runs });
      }
      continue;
    }
    const block = item as CustomBlock;
    switch (block._type) {
      case "code":
        if (block.code && block.language) {
          out.push({
            _type: "code",
            _key: block._key,
            code: block.code,
            language: block.language,
            languageLabel: block.languageLabel ?? undefined,
            filename: block.filename ?? undefined,
          });
        }
        break;
      case "pullQuote":
        if (block.text) {
          out.push({ _type: "pullQuote", _key: block._key, text: block.text });
        }
        break;
      case "figure": {
        const img = image(block.image);
        if (img) {
          out.push({
            _type: "figure",
            _key: block._key,
            image: img,
            caption: block.caption ?? undefined,
          });
        }
        break;
      }
      case "gallery": {
        const images = (block.images ?? [])
          .map(image)
          .filter((i): i is ImageDTO => Boolean(i));
        if (images.length) {
          out.push({
            _type: "gallery",
            _key: block._key,
            images,
            caption: block.caption ?? undefined,
          });
        }
        break;
      }
    }
  }
  return out;
}
