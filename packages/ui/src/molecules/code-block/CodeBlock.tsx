import type { CodeBlock as CodeBlockDTO } from "@portfolio/contracts";
import { cn } from "@portfolio/utils";

export interface CodeBlockProps {
  block: Pick<
    CodeBlockDTO,
    "code" | "html" | "filename" | "language" | "languageLabel"
  >;
  className?: string;
}

/**
 * Code with a filename/language bar. `html` is pre-highlighted by the content layer
 * (tokens .k keyword → primary, .s string → spark-text, .c comment → muted).
 */
function CodeBlock({ block, className }: CodeBlockProps) {
  const language = block.languageLabel ?? block.language;
  return (
    <div
      data-slot="code-block"
      className={cn(
        "overflow-hidden rounded-xl border border-border bg-card",
        className,
      )}
    >
      <div className="flex items-center justify-between gap-4 border-b border-border px-4 py-2.5">
        <span className="label-2xs min-w-0 truncate text-muted">
          {block.filename}
        </span>
        <span className="label-2xs shrink-0 text-muted">{language}</span>
      </div>
      {block.html ? (
        <pre
          className="px-4 py-5 font-mono text-[13px] leading-[1.7] whitespace-pre-wrap text-fg sm:text-sm [&_.c]:text-muted [&_.k]:text-primary [&_.s]:text-spark-text"
          dangerouslySetInnerHTML={{ __html: block.html }}
        />
      ) : (
        <pre className="px-4 py-5 font-mono text-[13px] leading-[1.7] whitespace-pre-wrap text-fg sm:text-sm">
          {block.code}
        </pre>
      )}
    </div>
  );
}

export { CodeBlock };
