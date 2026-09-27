import type {
  AboutPageDTO,
  BlogIndexDTO,
  CaseStudyDTO,
  HomeDTO,
  PostDTO,
  WorkPageDTO,
} from "@portfolio/contracts";
import { formatMessage, pad2 } from "@portfolio/utils";
import { SectionLabel } from "../../atoms/section-label/SectionLabel";
import { SweepLink } from "../../atoms/sweep-link/SweepLink";
import { pagePaths, type ChromeProps } from "../../lib/types";
import { CategoryFilter } from "../../molecules/category-filter/CategoryFilter";
import { SectionHead } from "../../molecules/section-head/SectionHead";
import { TitleLines } from "../../molecules/title-lines/TitleLines";
import { AboutFull, AboutTeaser } from "../../organisms/about/About";
import {
  ArticleLayout,
  PostCover,
  PostHeader,
  RelatedPosts,
} from "../../organisms/article/Article";
import { CaseCover, CaseHero } from "../../organisms/case-study/CaseHero";
import {
  CaseSections,
  NextProject,
} from "../../organisms/case-study/CaseSections";
import { ContactCTA, ContactSection } from "../../organisms/contact/Contact";
import {
  ExperienceList,
  SkillsBand,
} from "../../organisms/experience/Experience";
import { Hero } from "../../organisms/hero/Hero";
import { Marquee } from "../../organisms/marquee/Marquee";
import { PageHero } from "../../organisms/page-hero/PageHero";
import { FeaturedPost, PostGrid } from "../../organisms/post-list/PostList";
import {
  FeaturedProjects,
  MoreRow,
  ProjectGrid,
} from "../../organisms/project-list/ProjectList";
import { SiteShell } from "../site-shell/SiteShell";

interface PageChrome extends ChromeProps {
  menuOpen?: boolean;
  year?: number;
}

/** Numbers the home sections that actually render: 01, 02, … */
function numbering<K extends string>(keys: K[]): Record<K, string> {
  return Object.fromEntries(keys.map((k, i) => [k, pad2(i + 1)])) as Record<
    K,
    string
  >;
}

export function HomePage({ home, ...chrome }: PageChrome & { home: HomeDTO }) {
  const { dict, site, locale } = chrome;
  const paths = pagePaths(locale);
  const hasWork = home.featured.length + home.more.length > 0;
  const hasPosts = home.latestPosts.length > 0;
  const n = numbering(
    [hasWork && "work", "about", hasPosts && "blog", "contact"].filter(
      Boolean,
    ) as ("work" | "about" | "blog" | "contact")[],
  );
  return (
    <SiteShell {...chrome} active={null}>
      <Hero site={site} dict={dict} newWork={home.newWork} />
      <Marquee items={site.marqueeItems} />
      {hasWork && (
        <section id="work" aria-labelledby="work-title" className="sec wrap">
          <SectionHead
            label={
              <SectionLabel number={n.work}>
                {dict.home.sections.work}
              </SectionLabel>
            }
            titleId="work-title"
            title={<TitleLines lines={dict.home.workTitle} />}
            aside={
              <p className="t-body max-w-[360px]">{dict.home.workIntro}</p>
            }
          />
          <FeaturedProjects projects={home.featured} dict={dict} />
          {home.more.length > 0 && (
            <MoreRow
              left={
                <p className="label text-muted">
                  {formatMessage(dict.home.moreProjects, {
                    n: home.more.length,
                    names: home.more.map((p) => p.title).join(", "),
                  })}
                </p>
              }
              right={
                <SweepLink href={paths.work} arrow="right">
                  {dict.common.allWork}
                </SweepLink>
              }
            />
          )}
        </section>
      )}
      <AboutTeaser
        about={home.about}
        site={site}
        dict={dict}
        number={n.about}
        aboutHref={paths.about}
      />
      {hasPosts && (
        <section
          id="blog"
          aria-labelledby="blog-title"
          className="sec wrap rule"
        >
          <SectionHead
            label={
              <SectionLabel number={n.blog}>
                {dict.home.sections.blog}
              </SectionLabel>
            }
            titleId="blog-title"
            title={<TitleLines lines={dict.home.blogTitle} />}
            aside={
              <SweepLink href={paths.blog} arrow="right">
                {dict.common.allPosts}
              </SweepLink>
            }
          />
          <PostGrid posts={home.latestPosts} dict={dict} variant="home" />
        </section>
      )}
      <ContactSection site={site} dict={dict} number={n.contact} />
    </SiteShell>
  );
}

export function WorkPage({
  work,
  ...chrome
}: PageChrome & { work: WorkPageDTO }) {
  const { dict, site, locale } = chrome;
  const paths = pagePaths(locale);
  const gitHub = site.socials.find((s) => s.label === "GitHub");
  return (
    <SiteShell {...chrome} active="work">
      <PageHero
        crumbsLabel={dict.nav.breadcrumb}
        crumbs={[
          { label: dict.nav.home, href: paths.home },
          { label: dict.nav.work },
        ]}
        title={dict.work.title}
        titleId="work-page-title"
        lede={dict.work.lede}
        count={formatMessage(dict.work.count, {
          projects: pad2(work.projectCount),
          cases: work.caseStudyCount,
        })}
      />
      <section aria-label={dict.work.projectsLabel} className="wrap pb-[160px]">
        <FeaturedProjects projects={work.featured} dict={dict} />
        {work.others.length > 0 && (
          <>
            <MoreRow
              left={
                <p className="label">
                  <span className="num">{dict.work.moreLabel}</span> ·{" "}
                  {dict.work.more}
                </p>
              }
              right={
                gitHub && (
                  <SweepLink href={gitHub.href} arrow="up-right" soft>
                    {dict.work.allOnGithub}
                  </SweepLink>
                )
              }
            />
            <ProjectGrid projects={work.others} dict={dict} />
          </>
        )}
      </section>
      <ContactCTA site={site} dict={dict} />
    </SiteShell>
  );
}

export function CaseStudyPage({
  study,
  ...chrome
}: PageChrome & { study: CaseStudyDTO }) {
  const { dict, site, locale } = chrome;
  return (
    <SiteShell {...chrome} active="work">
      <CaseHero study={study} dict={dict} workHref={pagePaths(locale).work} />
      <CaseCover study={study} dict={dict} />
      <CaseSections study={study} />
      <NextProject study={study} dict={dict} />
      <ContactCTA site={site} dict={dict} />
    </SiteShell>
  );
}

export function AboutPage({
  page,
  ...chrome
}: PageChrome & { page: AboutPageDTO }) {
  const { dict, site, locale } = chrome;
  const hasXp = page.experience.length > 0;
  const n = numbering(
    [hasXp && "experience", page.skills.length > 0 && "skills"].filter(
      Boolean,
    ) as ("experience" | "skills")[],
  );
  return (
    <SiteShell {...chrome} active="about">
      <PageHero
        crumbsLabel={dict.nav.breadcrumb}
        crumbs={[
          { label: dict.nav.home, href: pagePaths(locale).home },
          { label: dict.nav.about },
        ]}
        title={dict.about.title}
        primaryFirst
        titleId="about-page-title"
        lede={page.about.lede}
        count={site.yearsExperienceLabel}
      />
      <AboutFull about={page.about} site={site} dict={dict} />
      <Marquee items={site.marqueeItems} />
      <ExperienceList
        items={page.experience}
        since={page.experienceSince}
        number={n.experience}
        dict={dict}
      />
      <SkillsBand
        groups={page.skills}
        intro={page.skillsIntro}
        number={n.skills}
        dict={dict}
      />
      <ContactCTA site={site} dict={dict} />
    </SiteShell>
  );
}

export function BlogPage({
  blog,
  ...chrome
}: PageChrome & { blog: BlogIndexDTO }) {
  const { dict, site, locale } = chrome;
  const paths = pagePaths(locale);
  const count = [
    formatMessage(dict.blog.count, { n: pad2(blog.total) }),
    blog.sinceYear && formatMessage(dict.blog.since, { year: blog.sinceYear }),
  ]
    .filter(Boolean)
    .join(" · ");
  return (
    <SiteShell {...chrome} active="blog">
      <PageHero
        variant="blog"
        crumbsLabel={dict.nav.breadcrumb}
        crumbs={[
          { label: dict.nav.home, href: paths.home },
          { label: dict.nav.blog },
        ]}
        title={dict.blog.title}
        titleId="blog-title"
        lede={dict.blog.lede}
        count={count}
      >
        <CategoryFilter
          label={dict.blog.filterLabel}
          active={blog.activeCategory}
          options={[
            { title: dict.blog.all, count: blog.total, href: paths.blog },
            ...blog.categories.map((c) => ({
              slug: c.slug,
              title: c.title,
              count: c.count,
              href: `${paths.blog}?category=${c.slug}`,
            })),
          ]}
        />
      </PageHero>
      <section aria-label={dict.blog.postsLabel} className="wrap pb-[160px]">
        {blog.featured && <FeaturedPost post={blog.featured} dict={dict} />}
        <PostGrid posts={blog.posts} dict={dict} variant="grid" />
      </section>
      <ContactCTA site={site} dict={dict} />
    </SiteShell>
  );
}

export function BlogPostPage({
  post,
  shareUrl,
  ...chrome
}: PageChrome & { post: PostDTO; shareUrl?: string }) {
  const { dict, site, locale } = chrome;
  const paths = pagePaths(locale);
  return (
    <SiteShell {...chrome} active="blog">
      <PostHeader post={post} dict={dict} blogHref={paths.blog} />
      <PostCover post={post} />
      <ArticleLayout
        post={post}
        dict={dict}
        site={site}
        aboutHref={paths.about}
        shareUrl={shareUrl}
      />
      <RelatedPosts post={post} dict={dict} blogHref={paths.blog} />
      <ContactCTA site={site} dict={dict} />
    </SiteShell>
  );
}
