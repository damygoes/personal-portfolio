import { FixtureContentService } from "@portfolio/fixtures";
import { getDictionary } from "@portfolio/i18n";
import { HomePage } from "@portfolio/ui";

// Interim route until Phase 3 adds app/[locale] and the Sanity content layer.
export default async function Home() {
  const service = new FixtureContentService();
  const [site, home] = await Promise.all([
    service.getSiteSettings("en"),
    service.getHome("en"),
  ]);
  return (
    <HomePage
      site={site}
      dict={getDictionary("en")}
      locale="en"
      alternates={{ en: "/en", de: "/de" }}
      home={home}
    />
  );
}
