import type { CodeBlock } from "@portfolio/contracts";
import { codeToHtml } from "shiki";
import { cn } from "@portfolio/utils";

/** Server-side syntax highlighting for `CodeBlock` — call this where the RichText tree is
 * rendered (Server Component), then pass the resulting HTML into the `CodeBlock` component. */
export async function highlightCode(block: CodeBlock): Promise<string> {
  return codeToHtml(block.code, {
    lang: block.language,
    themes: { light: "github-light", dark: "github-dark" },
    transformers: [
      {
        line(node, line) {
          if (block.highlightedLines.includes(line)) {
            node.properties.class = cn(
              node.properties.class as string,
              "bg-warning-muted",
            );
          }
        },
      },
    ],
  });
}
