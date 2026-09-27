import type { FactDTO } from "@portfolio/contracts";
import { cn } from "@portfolio/utils";
import { Runs } from "../../atoms/runs/Runs";

export interface FactsProps {
  facts: FactDTO[];
  /** Home teaser: only `onHome` facts, links as plain text. */
  variant?: "teaser" | "full";
  className?: string;
}

/** Now / Building / Before (/ Based in) — a hairline-separated definition list. */
function Facts({ facts, variant = "full", className }: FactsProps) {
  const shown = variant === "teaser" ? facts.filter((f) => f.onHome) : facts;
  if (!shown.length) return null;
  return (
    <dl
      data-slot="facts"
      className={cn("flex flex-col border-t border-divider", className)}
    >
      {shown.map((fact) => (
        <div
          key={fact.label}
          className="flex justify-between gap-4 border-b border-divider py-4"
        >
          <dt className="label text-muted">{fact.label}</dt>
          <dd className="text-right text-[15px] font-medium">
            <Runs runs={fact.value} plain={variant === "teaser"} />
          </dd>
        </div>
      ))}
    </dl>
  );
}

export { Facts };
