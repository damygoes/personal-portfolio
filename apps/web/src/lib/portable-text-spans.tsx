import type {
  PortableTextBlock,
  PortableTextSpan,
  PortableTextMarkDefinition,
} from "@portabletext/types";
import { Fragment } from "react";
import { ProseLink } from "../components/rich-text/prose-link/ProseLink";

interface LinkMarkDef extends PortableTextMarkDefinition {
  _type: "link";
  href: string;
  external: boolean;
}

const isSpan = (child: unknown): child is PortableTextSpan =>
  typeof child === "object" &&
  child !== null &&
  (child as { _type?: unknown })._type === "span";

/** Renders a Portable Text block's `children` spans, applying marks (bold/italic/code/link). */
export function renderSpans(block: PortableTextBlock) {
  const markDefs = (block.markDefs ?? []) as LinkMarkDef[];

  return block.children.filter(isSpan).map((span) => {
    let node: React.ReactNode = span.text;

    for (const mark of span.marks ?? []) {
      if (mark === "strong") {
        node = <strong key={`${span._key}-strong`}>{node}</strong>;
      } else if (mark === "em") {
        node = <em key={`${span._key}-em`}>{node}</em>;
      } else if (mark === "code") {
        node = (
          <code
            key={`${span._key}-code`}
            className="rounded bg-secondary px-1 py-0.5 font-mono text-[0.9em]"
          >
            {node}
          </code>
        );
      } else {
        const markDef = markDefs.find((def) => def._key === mark);
        if (markDef?._type === "link") {
          node = (
            <ProseLink
              key={`${span._key}-link`}
              href={markDef.href}
              external={markDef.external}
            >
              {node}
            </ProseLink>
          );
        }
      }
    }

    return <Fragment key={span._key}>{node}</Fragment>;
  });
}
