import type { CodeBlock as CodeBlockData } from "@portfolio/contracts";
import { CopyButton, Text } from "@portfolio/ui";

export interface CodeBlockProps {
  block: CodeBlockData;
  /** Pre-rendered by `highlightCode` (server-side, via Shiki) — this component stays sync so it can render anywhere. */
  html: string;
  copyLabel?: string;
  copiedLabel?: string;
}

function CodeBlock({ block, html, copyLabel, copiedLabel }: CodeBlockProps) {
  return (
    <div
      data-slot="code-block"
      className="overflow-hidden rounded-lg border border-border"
    >
      {block.filename && (
        <div className="flex items-center justify-between border-b border-border bg-secondary px-4 py-2">
          <Text size="sm" tone="muted" as="span" className="font-mono">
            {block.filename}
          </Text>
          <CopyButton
            value={block.code}
            label={copyLabel}
            copiedLabel={copiedLabel}
          />
        </div>
      )}
      <div className="relative overflow-x-auto text-sm [&_pre]:p-4 [&_pre]:!bg-transparent">
        {!block.filename && (
          <div className="absolute top-2 right-2">
            <CopyButton
              value={block.code}
              label={copyLabel}
              copiedLabel={copiedLabel}
            />
          </div>
        )}
        {/* eslint-disable-next-line react/no-danger -- `html` is Shiki output, not user content */}
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </div>
  );
}

export { CodeBlock };
