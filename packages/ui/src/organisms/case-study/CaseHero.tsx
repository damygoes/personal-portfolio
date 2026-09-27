import type { CaseStudyDTO } from "@portfolio/contracts";
import type { Dictionary } from "@portfolio/i18n";
import { cn, formatMessage } from "@portfolio/utils";
import { PhoneFrame } from "../../atoms/device-frame/DeviceFrame";
import { Ghost, ImageFrame } from "../../atoms/image-frame/ImageFrame";
import { Dot, OutlineText } from "../../atoms/outline-text/OutlineText";
import { Pill } from "../../atoms/pill/Pill";
import { SweepLink } from "../../atoms/sweep-link/SweepLink";
import { Crumbs } from "../../molecules/crumbs/Crumbs";
import { projectToneClass } from "../featured-project/FeaturedProject";
import { FitText } from "../../atoms/fit-text/FitText";

interface CaseProps {
  study: CaseStudyDTO;
  dict: Dictionary;
}

/** Breadcrumb, giant name, lede + status/visit, and the Role/Platforms/Timeline/Stack meta. */
function CaseHero({ study, dict, workHref }: CaseProps & { workHref: string }) {
  const { project } = study;
  return (
    <section
      data-slot="case-hero"
      data-sanity={study.editTarget}
      aria-labelledby="cs-title"
      className="wrap flex flex-col gap-8 pt-6 pb-16 sm:gap-12 sm:pt-10 sm:pb-24"
    >
      <Crumbs
        label={dict.nav.breadcrumb}
        items={[
          { label: dict.case.allWork, href: workHref },
          {
            label: formatMessage(dict.case.caseStudy, { n: study.caseNumber }),
          },
        ]}
      />
      <FitText as="h1" min={40} id="cs-title" className="type-display cs-title">
        {study.titleParts.map((part) =>
          part.outlined ? (
            <OutlineText key={part.text}>{part.text}</OutlineText>
          ) : (
            <span key={part.text} className="num">
              {part.text}
            </span>
          ),
        )}
        <Dot />
      </FitText>
      <div className="g12 items-end gap-y-8">
        <p className="t-lede col-span-12 font-display lg:col-span-7">
          {study.lede}
        </p>
        {(project.status || study.visit) && (
          <div className="col-span-12 flex flex-row flex-wrap items-start gap-8 lg:col-span-4 lg:col-start-9 lg:flex-col lg:gap-0">
            {project.status && (
              <Pill className="mb-2">{project.status.label}</Pill>
            )}
            {study.visit && (
              <SweepLink href={study.visit.href} arrow="up-right">
                {formatMessage(dict.case.visit, { domain: study.visit.domain })}
              </SweepLink>
            )}
          </div>
        )}
      </div>
      {study.meta.length > 0 && (
        <dl className="grid grid-cols-1 gap-6 border-t border-fg pt-6 sm:grid-cols-2 sm:gap-y-8 lg:grid-cols-4 lg:gap-y-6">
          {study.meta.map((m) => (
            <div key={m.label} className="flex flex-col gap-2.5">
              <dt className="label-2xs text-muted">{m.label}</dt>
              <dd className="text-base leading-[1.5] font-medium">{m.value}</dd>
            </div>
          ))}
        </dl>
      )}
    </section>
  );
}

/** Full-bleed cover with three phone screens (middle raised, third hidden on mobile). */
function CaseCover({ study, dict }: CaseProps) {
  const { project } = study;
  const screens = [0, 1, 2].map((i) => study.screens[i]);
  return (
    <ImageFrame
      label={formatMessage(dict.case.screensLabel, {
        title: `${project.title}${project.titleDot ? "." : ""}`,
      })}
      className={cn(
        "flex h-[440px] items-center justify-center gap-6 sm:h-[560px] lg:h-[760px] lg:gap-12",
        projectToneClass[project.tone],
      )}
    >
      {study.screens.length === 0 && (
        <Ghost className="bottom-[-40px] left-3 text-[220px] sm:bottom-[-80px] sm:left-8 sm:text-[300px] lg:left-12 lg:text-[420px]">
          {project.ghost}
        </Ghost>
      )}
      {screens.map((screen, i) => (
        <PhoneFrame
          key={i}
          size="case"
          screen={screen}
          className={cn(
            i === 1 && "-translate-y-10",
            i === 2 && "max-sm:hidden",
          )}
        />
      ))}
      <span
        aria-hidden="true"
        className="absolute top-[22px] right-[22px] size-3 rounded-full bg-[var(--cover-dot,var(--spark))] sm:top-8 sm:right-8 sm:size-4"
      />
      <p className="label absolute top-[18px] left-5 text-cover-fg sm:top-7 sm:left-8">
        {dict.case.screens}
      </p>
    </ImageFrame>
  );
}

export { CaseCover, CaseHero };
