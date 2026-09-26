import type { Alternate, Locale } from "@portfolio/contracts";
import { LocaleLink } from "../../atoms/locale-link/LocaleLink";

export interface LocaleSwitcherProps {
  alternates: Alternate[];
  current: Locale;
  localeLabels?: Record<Locale, string>;
}

const defaultLabels: Record<Locale, string> = { en: "EN", de: "DE" };

function LocaleSwitcher({
  alternates,
  current,
  localeLabels = defaultLabels,
}: LocaleSwitcherProps) {
  return (
    <ul data-slot="locale-switcher" className="flex items-center gap-2">
      {alternates.map((alternate, index) => (
        <li key={alternate.locale} className="flex items-center gap-2">
          {index > 0 && (
            <span aria-hidden="true" className="text-muted-foreground">
              /
            </span>
          )}
          <LocaleLink
            locale={alternate.locale}
            href={alternate.href}
            label={localeLabels[alternate.locale]}
            active={alternate.locale === current}
          />
        </li>
      ))}
    </ul>
  );
}

export { LocaleSwitcher };
