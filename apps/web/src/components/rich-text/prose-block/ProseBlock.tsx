import type { PortableTextBlock } from "@portabletext/types";
import { Text } from "@portfolio/ui";
import { renderSpans } from "../../../lib/portable-text-spans";

export interface ProseBlockProps {
  block: PortableTextBlock;
}

function ProseBlock({ block }: ProseBlockProps) {
  if (block.listItem) {
    return <li>{renderSpans(block)}</li>;
  }

  if (block.style === "blockquote") {
    return (
      <blockquote className="border-l-2 border-border pl-4 italic text-muted-foreground">
        {renderSpans(block)}
      </blockquote>
    );
  }

  return <Text as="p">{renderSpans(block)}</Text>;
}

export { ProseBlock };
