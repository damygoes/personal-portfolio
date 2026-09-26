import type { Meta, StoryObj } from "@storybook/react-vite";
import type {
  ProjectCard as ProjectCardData,
  Site,
} from "@portfolio/contracts";
import { FixtureContentService } from "@portfolio/fixtures";
import { Container, Grid, Heading, Stack } from "@portfolio/ui";
import { ProjectCard } from "../molecules/project-card/ProjectCard";
import { SiteFooter } from "../organisms/site-footer/SiteFooter";
import { SiteHeader } from "../organisms/site-header/SiteHeader";
import { getLabels } from "@/lib/i18n/labels";

const contentService = new FixtureContentService();
const locale = "en";

interface Loaded {
  site: Site;
  projects: ProjectCardData[];
}

function ProjectsIndexPageComposition({ site, projects }: Loaded) {
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
      <Container className="py-16">
        <Stack gap={8}>
          <Heading level={1} size="2xl">
            {labels.nav.work}
          </Heading>
          <Grid cols={{ base: 1, sm: 2, lg: 3 }} gap={8}>
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </Grid>
        </Stack>
      </Container>
      <SiteFooter
        site={site}
        backToTopLabel={labels.backToTop}
        rightsReservedLabel={labels.rightsReserved}
      />
    </div>
  );
}

const meta: Meta<typeof ProjectsIndexPageComposition> = {
  title: "Pages/Projects Index",
  component: ProjectsIndexPageComposition,
  parameters: { layout: "fullscreen" },
};

export default meta;
type Story = StoryObj<typeof ProjectsIndexPageComposition>;

export const Default: Story = {
  loaders: [
    async () => ({
      site: await contentService.getSite(locale),
      projects: await contentService.getProjects(locale),
    }),
  ],
  render: (_args, { loaded }) => (
    <ProjectsIndexPageComposition {...(loaded as Loaded)} />
  ),
};
