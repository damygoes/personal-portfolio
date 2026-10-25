import type {
  AboutDTO,
  Paragraph,
  SiteSettingsDTO,
} from "@portfolio/contracts";
import type { Dictionary } from "@portfolio/i18n";
import { cn } from "@portfolio/utils";
import { Ghost, ImageFrame } from "../../atoms/image-frame/ImageFrame";
import { Dot } from "../../atoms/outline-text/OutlineText";
import { Runs } from "../../atoms/runs/Runs";
import { SectionLabel } from "../../atoms/section-label/SectionLabel";
import { SweepLink } from "../../atoms/sweep-link/SweepLink";
import { Facts } from "../../molecules/facts/Facts";

interface AboutProps {
  about: AboutDTO;
  site: SiteSettingsDTO;
  dict: Dictionary;
}

function Portrait({
  about,
  site,
  className,
}: {
  about: AboutDTO;
  site: SiteSettingsDTO;
  className: string;
}) {
  return (
    <div className="flex flex-col gap-4">
      <ImageFrame
        image={about.portrait}
        sizes="(min-width: 1024px) 40vw, (min-width: 640px) 42vw, 100vw"
        className={cn("rounded-3xl border border-border bg-card", className)}
        fallback={
          <Ghost className="bottom-[-40px] left-[-12px] text-[220px] lg:text-[280px]">
            {site.author.initials}
          </Ghost>
        }
      />
      <p className="label-2xs flex items-center justify-between gap-4 text-muted">
        <span>{site.name}</span>
        <span>{site.location}</span>
      </p>
    </div>
  );
}

function Statement({
  about,
  className,
}: {
  about: AboutDTO;
  className?: string;
}) {
  return (
    <p className={cn("t-statement font-display", className)}>
      <Runs runs={about.statement} />
      <Dot />
    </p>
  );
}

function Paragraphs({ paragraphs }: { paragraphs: Paragraph[] }) {
  return (
    <div className="t-body-lg flex flex-col gap-5">
      {paragraphs.map((p, i) => (
        <p key={i}>
          <Runs runs={p} />
        </p>
      ))}
    </div>
  );
}

/** Home "02 About": statement across 9 columns, portrait, two paragraphs, facts, links. */
function AboutTeaser({
  about,
  site,
  dict,
  number,
  aboutHref,
}: AboutProps & { number: string; aboutHref: string }) {
  return (
    <section
      id="about"
      data-slot="about-teaser"
      {...about.editAttrs}
      aria-labelledby="about-title"
      className="sec wrap rule"
    >
      <div className="g12">
        <SectionLabel
          id="about-title"
          number={number}
          className="col-span-12 mb-6 lg:col-span-3 lg:mb-0 lg:pt-3.5"
        >
          {dict.home.sections.about}
        </SectionLabel>
        <Statement about={about} className="col-span-12 lg:col-span-9" />
      </div>
      <div className="g12 mt-10 items-start gap-y-10 sm:mt-16 sm:gap-y-0 lg:mt-24">
        <div className="col-span-12 sm:col-span-5 lg:col-span-4 lg:col-start-4">
          <Portrait
            about={about}
            site={site}
            className="h-[440px] sm:h-[460px] lg:h-[520px]"
          />
        </div>
        <div className="col-span-12 flex flex-col gap-10 sm:col-span-7 sm:col-start-6 lg:col-span-4 lg:col-start-9 lg:gap-12">
          <Paragraphs paragraphs={about.teaserParagraphs} />
          <Facts facts={about.facts} variant="teaser" />
          <div className="flex flex-wrap gap-8">
            <SweepLink href={aboutHref} arrow="right">
              {dict.common.moreAboutMe}
            </SweepLink>
            {site.cvUrl && (
              <SweepLink href={site.cvUrl} arrow="down" soft>
                {dict.common.downloadCv}
              </SweepLink>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/** About page bio: 5-column portrait, 6-column text with statement, bio, facts, links. */
function AboutFull({ about, site, dict }: AboutProps) {
  const linkedIn = site.socials[0];
  const gitHub = site.socials[1];
  return (
    <section
      data-slot="about-full"
      {...about.editAttrs}
      aria-label={dict.about.bioLabel}
      className="wrap pb-[160px]"
    >
      <div className="g12 items-start gap-y-10 sm:gap-y-0">
        <div className="col-span-12 sm:col-span-5">
          <Portrait
            about={about}
            site={site}
            className="h-[440px] sm:h-[480px] lg:h-[640px]"
          />
        </div>
        <div className="col-span-12 flex flex-col gap-10 sm:col-span-7 sm:col-start-6 lg:col-span-6 lg:col-start-7 lg:gap-12">
          <Statement
            about={about}
            className="text-[28px] leading-[1.1] sm:text-[32px] sm:leading-[1.1] lg:text-[40px]"
          />
          <Paragraphs paragraphs={about.bio} />
          <Facts facts={about.facts} />
          <div className="flex flex-wrap gap-8">
            {site.cvUrl && (
              <SweepLink href={site.cvUrl} arrow="down">
                {dict.common.downloadCv}
              </SweepLink>
            )}
            {[linkedIn, gitHub].map(
              (social) =>
                social && (
                  <SweepLink
                    key={social.href}
                    href={social.href}
                    arrow="up-right"
                    soft
                  >
                    {social.label}
                  </SweepLink>
                ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export { AboutFull, AboutTeaser };
