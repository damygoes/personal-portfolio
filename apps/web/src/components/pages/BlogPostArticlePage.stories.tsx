import type { Meta, StoryObj } from "@storybook/react-vite";
import type { Post, Site } from "@portfolio/contracts";
import { FixtureContentService } from "@portfolio/fixtures";
import { ArticleLayout } from "../layouts/article-layout/ArticleLayout";
import { SiteFooter } from "../organisms/site-footer/SiteFooter";
import { SiteHeader } from "../organisms/site-header/SiteHeader";
import { getCodeHtml } from "@/lib/get-code-html";
import { getLabels } from "@/lib/i18n/labels";

const contentService = new FixtureContentService();
const locale = "en";
const slug = "organizing-a-frontend-monorepo";

interface Loaded {
  site: Site;
  post: Post;
  codeHtml: Record<string, string>;
}

function BlogPostArticlePageComposition({ site, post, codeHtml }: Loaded) {
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
      <ArticleLayout
        post={post}
        locale={locale}
        readingTimeLabel={labels.readingTime(post.readingTimeMinutes)}
        relatedReadingTimeLabel={labels.readingTime}
        updatedLabel={labels.updated}
        tocHeading={labels.tableOfContents}
        previousLabel={labels.paginationPrevious}
        nextLabel={labels.paginationNext}
        relatedHeading={labels.relatedPosts}
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

const meta: Meta<typeof BlogPostArticlePageComposition> = {
  title: "Pages/Blog Post (Article)",
  component: BlogPostArticlePageComposition,
  parameters: { layout: "fullscreen" },
};

export default meta;
type Story = StoryObj<typeof BlogPostArticlePageComposition>;

export const Default: Story = {
  loaders: [
    async () => {
      const site = await contentService.getSite(locale);
      const post = await contentService.getPost(locale, slug);
      if (!post) throw new Error(`Fixture post not found: ${slug}`);
      const codeHtml = await getCodeHtml(post.body);
      return { site, post, codeHtml };
    },
  ],
  render: (_args, { loaded }) => (
    <BlogPostArticlePageComposition {...(loaded as Loaded)} />
  ),
};
