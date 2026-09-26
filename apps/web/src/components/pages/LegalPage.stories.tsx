import type { Meta, StoryObj } from "@storybook/react-vite";
import type { LegalPage as LegalPageData, Site } from "@portfolio/contracts";
import { FixtureContentService } from "@portfolio/fixtures";
import { ProseLayout } from "../layouts/prose-layout/ProseLayout";
import { SiteFooter } from "../organisms/site-footer/SiteFooter";
import { SiteHeader } from "../organisms/site-header/SiteHeader";
import { getLabels } from "@/lib/i18n/labels";

const contentService = new FixtureContentService();
const locale = "en";

interface Loaded {
  site: Site;
  page: LegalPageData;
}

function LegalPageComposition({ site, page }: Loaded) {
  const labels = getLabels(locale);
  const nav = site.nav.map((item) => ({
    ...item,
    label: labels.nav[item.key],
  }));

  return (
    <div id="top">
      <SiteHeader
        nav={nav}
        alternates={[{ locale: "en", href: "/en" }]}
        locale={locale}
        logoHref={`/${locale}`}
        menuOpenLabel={labels.menuOpen}
        menuCloseLabel={labels.menuClose}
      />
      <ProseLayout page={page} locale={locale} updatedLabel={labels.updated} />
      <SiteFooter
        site={site}
        backToTopLabel={labels.backToTop}
        rightsReservedLabel={labels.rightsReserved}
      />
    </div>
  );
}

const meta: Meta<typeof LegalPageComposition> = {
  title: "Pages/Legal Page",
  component: LegalPageComposition,
  parameters: { layout: "fullscreen" },
};

export default meta;
type Story = StoryObj<typeof LegalPageComposition>;

async function loadLegalPage(slug: string) {
  const site = await contentService.getSite(locale);
  const page = await contentService.getLegalPage(locale, slug);
  if (!page) throw new Error(`Fixture legal page not found: ${slug}`);
  return { site, page };
}

export const Impressum: Story = {
  loaders: [() => loadLegalPage("impressum")],
  render: (_args, { loaded }) => (
    <LegalPageComposition {...(loaded as Loaded)} />
  ),
};

export const Datenschutz: Story = {
  loaders: [() => loadLegalPage("datenschutz")],
  render: (_args, { loaded }) => (
    <LegalPageComposition {...(loaded as Loaded)} />
  ),
};
