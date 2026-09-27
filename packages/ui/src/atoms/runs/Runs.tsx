import type { TextRun } from "@portfolio/contracts";
import { Anchor } from "../../lib/adapters";

export interface RunsProps {
  runs: TextRun[];
  /** Links render as plain text (e.g. the home teaser facts). */
  plain?: boolean;
  linkClassName?: string;
}

/** Inline text: `strong` → semi-bold --fg, `highlight` → --primary, `href` → link. */
function Runs({ runs, plain, linkClassName = "text-primary" }: RunsProps) {
  return (
    <>
      {runs.map((run, i) => {
        if (run.href && !plain) {
          return (
            <Anchor key={i} href={run.href} className={linkClassName}>
              {run.text}
            </Anchor>
          );
        }
        if (run.highlight) {
          return (
            <span key={i} className="num">
              {run.text}
            </span>
          );
        }
        if (run.strong) {
          return (
            <strong key={i} className="font-semibold text-fg">
              {run.text}
            </strong>
          );
        }
        return <span key={i}>{run.text}</span>;
      })}
    </>
  );
}

export { Runs };
