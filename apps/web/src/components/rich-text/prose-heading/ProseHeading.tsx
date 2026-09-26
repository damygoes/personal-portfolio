import type { PortableTextBlock } from "@portabletext/types";
import { Heading } from "@portfolio/ui";
import { renderSpans } from "../../../lib/portable-text-spans";

export interface ProseHeadingProps {
  block: PortableTextBlock & { style: "h2" | "h3" };
}

function ProseHeading({ block }: ProseHeadingProps) {
  const level = block.style === "h2" ? 2 : 3;

  return (
    <Heading level={level} id={block._key} className="scroll-mt-24">
      {renderSpans(block)}
    </Heading>
  );
}

export { ProseHeading };
