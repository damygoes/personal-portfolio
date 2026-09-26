import type { Meta, StoryObj } from "@storybook/react-vite";
import type { BlogIndex, Site } from "@portfolio/contracts";
import { FixtureContentService } from "@portfolio/fixtures";
import { Container, Stack } from "@portfolio/ui";
import { CategoryFilter } from "../molecules/category-filter/CategoryFilter";
import { Pagination } from "../molecules/pagination/Pagination";
import { BlogHeader } from "../organisms/blog-header/BlogHeader";
import { PostGrid } from "../organisms/post-grid/PostGrid";
import { SiteFooter } from "../organisms/site-footer/SiteFooter";
import { SiteHeader } from "../organisms/site-header/SiteHeader";
import { getLabels } from "@/lib/i18n/labels";

const contentService = new FixtureContentService();
const locale = "en";

interface Loaded {
  site: Site;
  blogIndex: BlogIndex;
}

function BlogIndexPageComposition({ site, blogIndex }: Loaded) {
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
      <BlogHeader
        heading={blogIndex.heading}
        intro={blogIndex.intro}
        activeCategory={blogIndex.activeCategory}
      />
      <Container className="pb-16">
        <Stack gap={8}>
          <CategoryFilter
            allHref={`/${locale}/blog`}
            items={blogIndex.categories}
            allLabel={labels.categoryAll}
          />
          <PostGrid
            posts={blogIndex.posts}
            locale={locale}
            readingTimeLabel={labels.readingTime}
            emptyLabel={labels.postGridEmpty}
          />
          <Pagination
            pagination={blogIndex.pagination}
            previousLabel={labels.paginationPrevious}
            nextLabel={labels.paginationNext}
          />
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

const meta: Meta<typeof BlogIndexPageComposition> = {
  title: "Pages/Blog Index",
  component: BlogIndexPageComposition,
  parameters: { layout: "fullscreen" },
};

export default meta;
type Story = StoryObj<typeof BlogIndexPageComposition>;

export const Default: Story = {
  loaders: [
    async () => ({
      site: await contentService.getSite(locale),
      blogIndex: await contentService.getBlogIndex(locale),
    }),
  ],
  render: (_args, { loaded }) => (
    <BlogIndexPageComposition {...(loaded as Loaded)} />
  ),
};
