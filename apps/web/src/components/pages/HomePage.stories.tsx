import type { Meta, StoryObj } from "@storybook/react-vite";
import type { Homepage, Site } from "@portfolio/contracts";
import { FixtureContentService } from "@portfolio/fixtures";
import { AboutSection } from "../organisms/about-section/AboutSection";
import { ContactSection } from "../organisms/contact-section/ContactSection";
import { ExperienceSection } from "../organisms/experience-section/ExperienceSection";
import { HeroSection } from "../organisms/hero-section/HeroSection";
import { SiteFooter } from "../organisms/site-footer/SiteFooter";
import { SiteHeader } from "../organisms/site-header/SiteHeader";
import { SkillsSection } from "../organisms/skills-section/SkillsSection";
import { WorkSection } from "../organisms/work-section/WorkSection";
import { getHeroFacts, getLabels } from "@/lib/i18n/labels";

const contentService = new FixtureContentService();
const locale = "en";

interface Loaded {
  site: Site;
  homepage: Homepage;
}

function HomePageComposition({ site, homepage }: Loaded) {
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
      <HeroSection
        hero={homepage.hero}
        facts={getHeroFacts(locale, homepage.hero)}
        cv={site.cv}
        downloadCvLabel={labels.downloadCv}
        scrollHintLabel={labels.scrollHint}
      />
      {homepage.about && <AboutSection section={homepage.about} />}
      {homepage.experience && (
        <ExperienceSection
          section={homepage.experience}
          locale={locale}
          workModeLabels={labels.workModes}
          presentLabel={labels.present}
          detailsLabel={labels.experienceDetails}
          closeLabel={labels.experienceClose}
        />
      )}
      {homepage.work && (
        <WorkSection
          section={homepage.work}
          viewAllHref={`/${locale}/projects`}
          viewAllLabel={labels.viewAllProjects}
        />
      )}
      {homepage.skills && <SkillsSection section={homepage.skills} />}
      {homepage.contact && (
        <ContactSection
          section={homepage.contact}
          sayHelloLabel={labels.sayHello}
        />
      )}
      <SiteFooter
        site={site}
        backToTopLabel={labels.backToTop}
        rightsReservedLabel={labels.rightsReserved}
      />
    </div>
  );
}

const meta: Meta<typeof HomePageComposition> = {
  title: "Pages/Home",
  component: HomePageComposition,
  parameters: { layout: "fullscreen" },
};

export default meta;
type Story = StoryObj<typeof HomePageComposition>;

export const Default: Story = {
  loaders: [
    async () => ({
      site: await contentService.getSite(locale),
      homepage: await contentService.getHomepage(locale),
    }),
  ],
  render: (_args, { loaded }) => (
    <HomePageComposition {...(loaded as Loaded)} />
  ),
};
