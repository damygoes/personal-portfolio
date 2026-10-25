import { DEFAULT_LOCALE } from "@portfolio/contracts";
import { getDictionary } from "@portfolio/i18n";
import { HomePage, localeAlternates } from "@portfolio/ui";
import { content } from "@/lib/content";

// Interim route until Phase 3 adds app/[locale].
export default async function Home() {
  const locale = DEFAULT_LOCALE;
  const [site, home] = await Promise.all([
    content.getSiteSettings(locale),
    content.getHome(locale),
  ]);
  return (
    <HomePage
      site={site}
      dict={getDictionary(locale)}
      locale={locale}
      alternates={localeAlternates("")}
      home={home}
    />
  );
}
