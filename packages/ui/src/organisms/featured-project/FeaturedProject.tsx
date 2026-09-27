import type { ProjectCardDTO, ProjectTone } from "@portfolio/contracts";
import type { Dictionary } from "@portfolio/i18n";
import { cn, pad2 } from "@portfolio/utils";
import { ChipList } from "../../atoms/chip/ChipList";
import { PhoneFrame } from "../../atoms/device-frame/DeviceFrame";
import { Ghost, ImageFrame } from "../../atoms/image-frame/ImageFrame";
import { Dot } from "../../atoms/outline-text/OutlineText";
import { Pill } from "../../atoms/pill/Pill";
import { SweepLink } from "../../atoms/sweep-link/SweepLink";
import { Anchor } from "../../lib/adapters";

export const projectToneClass: Record<ProjectTone, string> = {
  warm: "cover-warm",
  lagoon: "tone-lagoon",
  card: "tone-card border border-border",
};

export interface FeaturedProjectProps {
  project: ProjectCardDTO;
  dict: Dictionary;
  /** `is-rev`: cover on the right (desktop). */
  reverse?: boolean;
  className?: string;
}

/** Featured project (`.feat`): 7-column cover with a phone, 5-column text. Stacked below 1024. */
function FeaturedProject({
  project,
  dict,
  reverse,
  className,
}: FeaturedProjectProps) {
  const status = project.status
    ? project.status.isNew
      ? `${dict.common.new} · ${project.status.label}`
      : project.status.label
    : null;
  return (
    <article
      data-slot="featured-project"
      data-sanity={project.editTarget}
      className={cn("group g12 relative items-stretch", className)}
    >
      <ImageFrame
        image={project.cover}
        priority={project.index === 1}
        sizes="(min-width: 1024px) 58vw, 100vw"
        zoom="flex items-center justify-center"
        className={cn(
          "col-span-12 h-[460px] rounded-[20px] sm:h-[560px] sm:rounded-3xl lg:col-span-7 lg:h-[680px]",
          projectToneClass[project.tone],
          reverse && "lg:order-2",
        )}
        fallback={
          <>
            <Ghost className="bottom-[-40px] left-4 text-[240px] sm:bottom-[-64px] sm:left-8 sm:text-[320px] lg:text-[400px]">
              {project.ghost}
            </Ghost>
            <PhoneFrame />
          </>
        }
      >
        <span
          aria-hidden="true"
          className="absolute top-[22px] right-[22px] size-3 rounded-full bg-[var(--cover-dot,var(--spark))] sm:top-8 sm:right-8 sm:size-4"
        />
        {project.coverTag && (
          <p className="label absolute top-[18px] left-5 text-cover-fg sm:top-7 sm:left-8">
            {project.coverTag}
          </p>
        )}
      </ImageFrame>
      <div
        className={cn(
          "col-span-12 flex flex-col justify-between gap-6 sm:gap-8 lg:col-span-5 lg:py-2",
          // `.feat.is-rev .feat-text` (32px) outranks the mobile 24px padding in site.css.
          reverse ? "pt-8 lg:order-1 lg:pr-6" : "pt-6 sm:pt-8 lg:pl-6",
        )}
      >
        <div className="flex flex-col gap-5 sm:gap-6">
          <div className="flex items-center justify-between gap-4">
            <p className="label text-muted">
              <span className="num">{pad2(project.index)}</span> /{" "}
              {pad2(project.total)}
            </p>
            {status && <Pill>{status}</Pill>}
          </div>
          <h3 className="t-md font-display">
            <Anchor href={project.primaryHref} className="card-link">
              {project.title}
              {project.titleDot && <Dot />}
            </Anchor>
          </h3>
          <p className="t-body-lg">{project.summary}</p>
        </div>
        <div className="flex flex-col gap-8">
          <ChipList items={project.tech} />
          <div className="flex flex-wrap gap-8">
            <SweepLink arrow={project.hasCaseStudy ? "right" : "up-right"}>
              {project.hasCaseStudy
                ? dict.common.readCaseStudy
                : dict.common.viewOnGithub}
            </SweepLink>
            {project.externalLink && (
              <SweepLink
                href={project.externalLink.href}
                arrow="up-right"
                soft
                className="lift"
              >
                {project.externalLink.label}
              </SweepLink>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

export { FeaturedProject };
