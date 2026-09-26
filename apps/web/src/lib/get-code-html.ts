import type { CodeBlock, RichText, RichTextNode } from "@portfolio/contracts";
import { highlightCode } from "./highlight-code";

const isCodeBlock = (node: RichTextNode): node is CodeBlock =>
  node._type === "code";

/** Resolves every `code` block's Shiki HTML ahead of render, keyed by block `_key`. */
export async function getCodeHtml(
  body: RichText,
): Promise<Record<string, string>> {
  const entries = await Promise.all(
    body
      .filter(isCodeBlock)
      .map(async (block) => [block._key, await highlightCode(block)] as const),
  );
  return Object.fromEntries(entries);
}
