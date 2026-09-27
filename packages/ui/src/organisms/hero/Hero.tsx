import type { HomeDTO, SiteSettingsDTO } from "@portfolio/contracts";
import type { Dictionary } from "@portfolio/i18n";
import { LocalClock } from "../../atoms/local-clock/LocalClock";
import { Dot, OutlineText } from "../../atoms/outline-text/OutlineText";
import { LiveDot } from "../../atoms/pill/Pill";
import { SweepLink } from "../../atoms/sweep-link/SweepLink";
import { Badge } from "../../molecules/badge/Badge";
import { MetaList } from "../../molecules/meta-list/MetaList";
import { FitText } from "../../atoms/fit-text/FitText";

export interface HeroProps {
  site: SiteSettingsDTO;
  dict: Dictionary;
  newWork?: HomeDTO["newWork"];
}

/**
 * Home hero. Desktop: 812px, the intro sits bottom-left over the second name line and
 * the badge top-right. Tablet: intro below. Mobile: small badge beside the lede.
 */
function Hero({ site, dict, newWork }: HeroProps) {
  const [first, ...rest] = site.name.split(" ");
  const cv = site.cvUrl && (
    <SweepLink href={site.cvUrl} arrow="down" soft>
      {dict.common.downloadCv}
    </SweepLink>
  );
  return (
    <section
      data-slot="hero"
      aria-label={dict.home.introLabel}
      className="wrap flex shrink-0 flex-col justify-between gap-10 pt-7 pb-9 sm:gap-14 sm:pt-8 sm:pb-10 lg:h-[812px] lg:gap-0 lg:pt-10 lg:pb-12"
    >
      <div className="flex items-start justify-between gap-4 sm:items-center">
        <MetaList items={site.heroMeta} />
        <p
          data-vd="dynamic"
          className="label flex items-center gap-2.5 text-muted"
        >
          <LiveDot />
          <LocalClock
            timeZone={site.timezone}
            prefix={`${dict.common.localTime} `}
          />
        </p>
      </div>

      <div className="relative">
        <FitText as="h1" min={52} className="type-display t-hero flex flex-col">
          <span className="num">{first}</span>
          <span className="flex justify-end">
            <OutlineText>{rest.join(" ")}</OutlineText>
            <Dot />
          </span>
        </FitText>
        <Badge
          size="lg"
          text={dict.home.badge}
          href="#work"
          label={dict.home.jumpToWork}
          className="absolute -top-1 right-0 hidden sm:block lg:-top-2"
        />
        <div className="mt-10 grid grid-cols-[104px_minmax(0,1fr)] items-center gap-x-5 gap-y-6 sm:flex sm:max-w-[560px] sm:flex-col sm:items-stretch sm:gap-4 lg:absolute lg:bottom-0 lg:left-0 lg:mt-0 lg:w-[540px] lg:max-w-none">
          <Badge
            size="sm"
            text={dict.home.badgeShort}
            href="#work"
            label={dict.home.jumpToWork}
            className="sm:hidden"
          />
          <p className="t-lede font-display max-sm:text-[21px]">
            {site.tagline}
          </p>
          <div className="col-span-full flex flex-wrap gap-x-6 border-t border-divider pt-2 sm:gap-x-8 sm:border-t-0 sm:pt-0">
            <SweepLink href="#work" arrow="up-right">
              {dict.common.selectedWork}
            </SweepLink>
            {cv}
          </div>
        </div>
      </div>

      <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="hidden items-center gap-4 sm:flex">
          <span className="relative block h-10 w-px overflow-hidden bg-divider">
            <span className="absolute inset-0 block origin-top animate-scroll-line bg-fg" />
          </span>
          <span className="label-2xs text-muted">{dict.common.scroll}</span>
        </div>
        {newWork && (
          <SweepLink
            href={newWork.href}
            arrow="right"
            className="max-sm:whitespace-normal"
          >
            <span className="text-muted">{dict.common.newWork}</span>{" "}
            {newWork.label}
          </SweepLink>
        )}
      </div>
    </section>
  );
}

export { Hero };
