export type Locale = "en" | "de";

const intlLocale: Record<Locale, string> = { en: "en-US", de: "de-DE" };

function toDate(iso: string): Date {
  // "2025-11" (month precision) is valid input for experience dates.
  const full = /^\d{4}-\d{2}$/.test(iso) ? `${iso}-01` : iso;
  return new Date(`${full.slice(0, 10)}T00:00:00Z`);
}

/** EN "Aug 30, 2026" · DE "30. Aug. 2026" */
export function formatDate(iso: string, locale: Locale): string {
  return new Intl.DateTimeFormat(intlLocale[locale], {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  }).format(toDate(iso));
}

/** EN "Nov 2025" · DE "Nov. 2025" */
export function formatMonthYear(iso: string, locale: Locale): string {
  return new Intl.DateTimeFormat(intlLocale[locale], {
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  }).format(toDate(iso));
}

/** "Nov 2025 — Present" — `end` null means ongoing. */
export function formatPeriod(
  start: string,
  end: string | null | undefined,
  locale: Locale,
  presentLabel: string,
): string {
  const to = end ? formatMonthYear(end, locale) : presentLabel;
  return `${formatMonthYear(start, locale)} — ${to}`;
}

/** 1 → "01" */
export function pad2(n: number): string {
  return String(n).padStart(2, "0");
}

/** Fills `{name}` placeholders; unknown keys are left as-is. */
export function formatMessage(
  template: string,
  vars: Record<string, string | number>,
): string {
  return template.replace(/\{(\w+)\}/g, (match, key: string) =>
    key in vars ? String(vars[key]) : match,
  );
}

export function countWords(text: string): number {
  return text.trim().split(/\s+/).filter(Boolean).length;
}

/** Words / 225, rounded up, at least 1. */
export function readingMinutes(words: number): number {
  return Math.max(1, Math.ceil(words / 225));
}

/** "Passe." → { title: "Passe", titleDot: true } — the trailing period renders as a spark dot. */
export function splitTitleDot(raw: string): {
  title: string;
  titleDot: boolean;
} {
  const trimmed = raw.trim();
  return trimmed.endsWith(".")
    ? { title: trimmed.slice(0, -1), titleDot: true }
    : { title: trimmed, titleDot: false };
}
