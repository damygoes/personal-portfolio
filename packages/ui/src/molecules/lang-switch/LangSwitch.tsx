import type { Locale } from "@portfolio/contracts";
import { cn } from "@portfolio/utils";
import { Fragment } from "react";
import { Anchor } from "../../lib/adapters";

export interface LangSwitchProps {
  locale: Locale;
  /** The current route in each locale. */
  alternates: Record<Locale, string>;
  labels: Record<Locale, string>;
  className?: string;
  /** Separator colour. */
  mutedClassName?: string;
}

const ORDER: Locale[] = ["en", "de"];

/** "EN / DE": links to the same route in the other locale. */
function LangSwitch({
  locale,
  alternates,
  labels,
  className,
  mutedClassName = "text-muted",
}: LangSwitchProps) {
  return (
    <div
      data-slot="lang-switch"
      className={cn("label flex items-center gap-2", className)}
    >
      {ORDER.map((l, i) => (
        <Fragment key={l}>
          {i > 0 && (
            <span aria-hidden="true" className={mutedClassName}>
              /
            </span>
          )}
          <Anchor
            href={alternates[l]}
            hrefLang={l}
            lang={l}
            aria-current={l === locale ? "true" : undefined}
            className="flex min-h-11 items-center"
          >
            {labels[l]}
          </Anchor>
        </Fragment>
      ))}
    </div>
  );
}

export { LangSwitch };
