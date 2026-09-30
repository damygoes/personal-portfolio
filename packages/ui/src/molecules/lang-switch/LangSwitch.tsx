import { LOCALES, LOCALE_META, type Locale } from "@portfolio/contracts";
import { cn } from "@portfolio/utils";
import { Fragment, type ReactNode } from "react";
import { Anchor } from "../../lib/adapters";

export interface LangOption {
  /** BCP 47 code, used for `lang` / `hreflang`: "de". */
  code: string;
  /** Short label: "DE". */
  label: string;
  /** Native name, shown in the menu: "Deutsch". */
  name: string;
  /** The current route in this locale. */
  href: string;
}

export interface LangSwitchProps {
  current: string;
  options: readonly LangOption[];
  /** Accessible name for the switcher: "Language". */
  label: string;
  /**
   * `auto`: the designed "EN / DE" toggle for up to 2 locales, a menu from 3.
   * `inline`: always the toggle (wraps), for roomy places like the menu dialog.
   */
  variant?: "auto" | "inline";
  className?: string;
  /** Separator colour. */
  mutedClassName?: string;
}

/** Options for every registry locale, from the current route's alternates. */
export function localeOptions(
  alternates: Record<Locale, string>,
): LangOption[] {
  return LOCALES.map((code) => ({
    code,
    label: LOCALE_META[code].label,
    name: LOCALE_META[code].name,
    href: alternates[code],
  }));
}

/** Links to the same route in each locale. */
function LangSwitch({
  current,
  options,
  label,
  variant = "auto",
  className,
  mutedClassName = "text-muted",
}: LangSwitchProps) {
  if (variant === "auto" && options.length > 2) {
    return (
      <LangMenu
        current={current}
        options={options}
        label={label}
        className={className}
      />
    );
  }
  return (
    <nav
      data-slot="lang-switch"
      aria-label={label}
      className={cn("label flex flex-wrap items-center gap-x-2", className)}
    >
      {options.map((o, i) => (
        <Fragment key={o.code}>
          {i > 0 && (
            <span aria-hidden="true" className={mutedClassName}>
              /
            </span>
          )}
          <LangLink option={o} current={current} className="min-h-11">
            {o.label}
          </LangLink>
        </Fragment>
      ))}
    </nav>
  );
}

/**
 * 3+ locales: a disclosure (native <details>, works without JS) listing each
 * locale by its native name. Needs a design pass before a third locale ships.
 */
function LangMenu({
  current,
  options,
  label,
  className,
}: Omit<LangSwitchProps, "variant" | "mutedClassName">) {
  const active = options.find((o) => o.code === current) ?? options[0];
  return (
    <details
      data-slot="lang-switch"
      data-variant="menu"
      className={cn("label group relative w-fit", className)}
    >
      <summary
        aria-label={`${label}: ${active?.name ?? ""}`}
        className="flex min-h-11 cursor-pointer list-none items-center gap-1 [&::-webkit-details-marker]:hidden"
      >
        {active?.label}
        <span
          aria-hidden="true"
          className="text-spark transition-transform group-open:rotate-180"
        >
          ↓
        </span>
      </summary>
      <nav
        aria-label={label}
        className="absolute top-full right-0 z-50 mt-2 min-w-44 rounded-lg border border-border bg-card p-2"
      >
        <ul>
          {options.map((o) => (
            <li key={o.code}>
              <LangLink
                option={o}
                current={current}
                className="min-h-11 justify-between gap-4 rounded px-3 aria-[current=true]:text-primary"
              >
                <span>{o.name}</span>
                <span className="text-muted">{o.label}</span>
              </LangLink>
            </li>
          ))}
        </ul>
      </nav>
    </details>
  );
}

function LangLink({
  option,
  current,
  className,
  children,
}: {
  option: LangOption;
  current: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <Anchor
      href={option.href}
      hrefLang={option.code}
      lang={option.code}
      aria-current={option.code === current ? "true" : undefined}
      className={cn("flex items-center", className)}
    >
      {children}
    </Anchor>
  );
}

export { LangSwitch };
