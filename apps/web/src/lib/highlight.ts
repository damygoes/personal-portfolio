import "server-only";
import type { BodyBlock } from "@portfolio/contracts";
import { codeToTokens, type ThemedToken } from "shiki";

/**
 * Server-side syntax highlighting for post code blocks. Shiki tokenises; we
 * keep only the design's three token classes (.k keyword/heading, .s string,
 * .c comment) so colours come from the theme tokens and follow light/dark.
 * Blocks that already carry `html` (fixtures) or use an unknown language
 * render as plain text.
 */
export async function highlightCodeBlocks(
  body: BodyBlock[],
): Promise<BodyBlock[]> {
  return Promise.all(
    body.map(async (block) => {
      if (block._type !== "code" || block.html) return block;
      const html = await highlight(block.code, block.language);
      return html ? { ...block, html } : block;
    }),
  );
}

async function highlight(code: string, lang: string) {
  try {
    const { tokens } = await codeToTokens(code, {
      lang: lang.toLowerCase() as never,
      theme: "github-light",
      includeExplanation: true,
    });
    return tokens.map((line) => line.map(renderToken).join("")).join("\n");
  } catch {
    return undefined;
  }
}

function renderToken(token: ThemedToken) {
  const text = escapeHtml(token.content);
  const cls = tokenClass(token);
  return cls ? `<span class="${cls}">${text}</span>` : text;
}

function tokenClass(token: ThemedToken): "k" | "s" | "c" | undefined {
  const scopes = (token.explanation ?? [])
    .flatMap((e) => e.scopes.map((s) => s.scopeName))
    .join(" ");
  if (/\bcomment\b/.test(scopes)) return "c";
  if (/\bstring\b/.test(scopes)) return "s";
  if (/\b(keyword|storage|markup\.heading|entity\.name\.tag)\b/.test(scopes))
    return "k";
  return undefined;
}

const escapeHtml = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
