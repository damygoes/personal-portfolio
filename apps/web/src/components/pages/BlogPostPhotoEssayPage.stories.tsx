import type { Meta, StoryObj } from "@storybook/react-vite";
import type { Post, Site } from "@portfolio/contracts";
import { FixtureContentService } from "@portfolio/fixtures";
import { PhotoEssayLayout } from "../layouts/photo-essay-layout/PhotoEssayLayout";
import { SiteFooter } from "../organisms/site-footer/SiteFooter";
import { SiteHeader } from "../organisms/site-header/SiteHeader";
import { getLabels } from "@/lib/i18n/labels";

const contentService = new FixtureContentService();
const locale = "en";
const slug = "a-walk-through-berlin";

interface Loaded {
  site: Site;
  post: Post;
}

function BlogPostPhotoEssayPageComposition({ site, post }: Loaded) {
  const labels = getLabels(locale);
  const nav = site.nav.map((item) => ({
    ...item,
    label: labels.nav[item.key],
  }));
  const photoCount = post.photoSummary?.photoCount ?? 0;

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
      <PhotoEssayLayout
        post={post}
        locale={locale}
        photoCountLabel={labels.photoCount(photoCount)}
        relatedReadingTimeLabel={labels.readingTime}
        relatedHeading={labels.relatedPosts}
      />
      <SiteFooter
        site={site}
        backToTopLabel={labels.backToTop}
        rightsReservedLabel={labels.rightsReserved}
      />
    </div>
  );
}

const meta: Meta<typeof BlogPostPhotoEssayPageComposition> = {
  title: "Pages/Blog Post (Photo Essay)",
  component: BlogPostPhotoEssayPageComposition,
  parameters: { layout: "fullscreen" },
};

export default meta;
type Story = StoryObj<typeof BlogPostPhotoEssayPageComposition>;

export const Default: Story = {
  loaders: [
    async () => {
      const site = await contentService.getSite(locale);
      const post = await contentService.getPost(locale, slug);
      if (!post) throw new Error(`Fixture post not found: ${slug}`);
      return { site, post };
    },
  ],
  render: (_args, { loaded }) => (
    <BlogPostPhotoEssayPageComposition {...(loaded as Loaded)} />
  ),
};
