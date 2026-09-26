import type { Meta, StoryObj } from "@storybook/react-vite";
import type { Project, Site } from "@portfolio/contracts";
import { FixtureContentService } from "@portfolio/fixtures";
import { CaseStudyLayout } from "../layouts/case-study-layout/CaseStudyLayout";
import { SiteFooter } from "../organisms/site-footer/SiteFooter";
import { SiteHeader } from "../organisms/site-header/SiteHeader";
import { getCodeHtml } from "@/lib/get-code-html";
import { getLabels } from "@/lib/i18n/labels";

const contentService = new FixtureContentService();
const locale = "en";
const slug = "elliesnote";

interface Loaded {
  site: Site;
  project: Project;
  codeHtml: Record<string, string>;
}

function ProjectDetailPageComposition({ site, project, codeHtml }: Loaded) {
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
      <CaseStudyLayout
        project={project}
        locale={locale}
        statusLabel={labels.projectStatus[project.status]}
        linkLabels={labels.projectLinkKinds}
        tocHeading={labels.tableOfContents}
        previousLabel={labels.paginationPrevious}
        nextLabel={labels.paginationNext}
        codeHtml={codeHtml}
      />
      <SiteFooter
        site={site}
        backToTopLabel={labels.backToTop}
        rightsReservedLabel={labels.rightsReserved}
      />
    </div>
  );
}

const meta: Meta<typeof ProjectDetailPageComposition> = {
  title: "Pages/Project Detail",
  component: ProjectDetailPageComposition,
  parameters: { layout: "fullscreen" },
};

export default meta;
type Story = StoryObj<typeof ProjectDetailPageComposition>;

export const Default: Story = {
  loaders: [
    async () => {
      const site = await contentService.getSite(locale);
      const project = await contentService.getProject(locale, slug);
      if (!project) throw new Error(`Fixture project not found: ${slug}`);
      const codeHtml = await getCodeHtml(project.body);
      return { site, project, codeHtml };
    },
  ],
  render: (_args, { loaded }) => (
    <ProjectDetailPageComposition {...(loaded as Loaded)} />
  ),
};
