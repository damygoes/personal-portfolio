import type {
  CaseSectionDTO,
  CaseStudyDTO,
  ImageDTO,
} from "@portfolio/contracts";
import type { Dictionary } from "@portfolio/i18n";
import { cn, pad2 } from "@portfolio/utils";
import type { ReactNode } from "react";
import { ImageFrame } from "../../atoms/image-frame/ImageFrame";
import { Dot } from "../../atoms/outline-text/OutlineText";
import { Runs } from "../../atoms/runs/Runs";
import { SectionLabel } from "../../atoms/section-label/SectionLabel";
import { Anchor } from "../../lib/adapters";
import { PullQuote } from "../../molecules/figure/Figure";

type Item = { title: string; text?: string; image?: ImageDTO };

/** A step or feature: optional screenshot, number, title, text. */
function FeatureItem({
  item,
  index,
  layout,
}: {
  item: Item;
  index: number;
  layout: "steps" | "grid";
}) {
  const stepsRow = layout === "steps" && item.image;
  return (
    <div
      className={cn(
        "flex flex-col gap-2.5 sm:gap-4",
        stepsRow && "sm:grid sm:grid-cols-2 sm:items-center sm:gap-x-6 lg:flex",
      )}
    >
      {item.image && (
        <ImageFrame
          image={item.image}
          sizes="(min-width: 1024px) 25vw, 50vw"
          className={cn(
            "h-[240px] rounded-xl border border-border bg-card sm:h-[320px] sm:rounded-2xl lg:h-[360px]",
            stepsRow && "sm:row-span-3",
          )}
        />
      )}
      <p className="label text-muted">
        <span className="num">{pad2(index + 1)}</span>
      </p>
      <h3 className="font-display text-lg leading-[1.2] font-bold tracking-[-0.01em] sm:text-2xl">
        {item.title}
      </h3>
      {item.text && <p className="t-body text-[15px]">{item.text}</p>}
    </div>
  );
}

function SectionBody({ section }: { section: CaseSectionDTO }) {
  switch (section.type) {
    case "textBlock":
      return (
        <>
          {section.body.map((p, i) => (
            <p key={i} className="t-body-lg">
              <Runs runs={p} />
            </p>
          ))}
        </>
      );
    case "plans":
      return (
        <>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
            {section.plans.map((plan) => (
              <div
                key={plan.name}
                className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-7"
              >
                <p className="label-2xs text-muted">{plan.name}</p>
                <p className="font-display text-5xl leading-none font-bold tracking-[-0.02em]">
                  {plan.price}
                  <small className="ml-1.5 font-mono text-xs font-normal tracking-[0.15em] text-muted">
                    {plan.period}
                  </small>
                </p>
                <ul className="flex flex-col gap-1.5 text-[15px] leading-[1.5] text-fg-soft">
                  {plan.features.map((f) => (
                    <li
                      key={f}
                      className="flex gap-2.5 before:text-spark-text before:content-['—']"
                    >
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          {section.note && <p className="t-body">{section.note}</p>}
        </>
      );
    case "architecture": {
      const box = (b: (typeof section.core)[number], i: number) => (
        <div
          key={`${b.eyebrow}-${i}`}
          className={cn(
            "relative flex flex-col gap-2 rounded-xl border p-5",
            b.isCore
              ? "border-primary bg-primary text-primary-fg"
              : "border-border bg-card",
          )}
        >
          <p className={cn("label-2xs", !b.isCore && "text-muted")}>
            {b.eyebrow}
          </p>
          <h4 className="font-display text-[22px] leading-[1.2] font-bold">
            {b.title}
          </h4>
          {b.sub && (
            <p
              className={cn(
                "text-sm",
                b.isCore ? "leading-[1.5]" : "leading-[1.6] text-fg-soft",
              )}
            >
              {b.sub}
            </p>
          )}
        </div>
      );
      return (
        <>
          <div className="grid grid-cols-1 items-stretch gap-4 sm:grid-cols-3">
            {section.core.map(box)}
            {section.sub.length > 0 && (
              <div className="col-span-full grid grid-cols-1 gap-4 sm:grid-cols-3">
                {section.sub.map(box)}
              </div>
            )}
          </div>
          {section.notes.map((p, i) => (
            <p key={i} className="t-body-lg">
              <Runs runs={p} />
            </p>
          ))}
        </>
      );
    }
    case "quote":
      return (
        <PullQuote text={section.text} attribution={section.attribution} />
      );
    default:
      return null;
  }
}

function SectionRow({
  section,
  first,
  children,
}: {
  section: CaseSectionDTO;
  first: boolean;
  children?: ReactNode;
}) {
  return (
    <div
      {...section.editAttrs}
      className={cn("g12 gap-y-6", !first && "rule pt-32")}
    >
      <SectionLabel
        number={section.number}
        className="col-span-12 pt-2.5 lg:col-span-3"
      >
        {section.label}
      </SectionLabel>
      <div className="col-span-12 flex flex-col gap-8 lg:col-span-8 lg:col-start-4">
        {section.heading && (
          <h2 className="cs-h font-display">
            {section.heading}
            <Dot />
          </h2>
        )}
        {children}
      </div>
    </div>
  );
}

/**
 * Numbered case-study sections. Steps and feature grids run full width under their
 * heading row; everything else sits in the 8-column content area.
 */
function CaseSections({ study }: { study: CaseStudyDTO }) {
  if (!study.sections.length) return null;
  return (
    <section
      data-slot="case-sections"
      className="sec wrap flex flex-col gap-32"
    >
      {study.sections.map((section, i) => {
        const first = i === 0;
        if (section.type === "stepsGrid" || section.type === "featureGrid") {
          const items =
            section.type === "stepsGrid" ? section.steps : section.features;
          const steps = section.type === "stepsGrid";
          return (
            <div key={section.number} className="flex flex-col">
              <SectionRow section={section} first={first} />
              <div
                className={cn(
                  "mt-16 grid",
                  steps
                    ? "grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-6"
                    : "grid-cols-2 gap-x-4 gap-y-8 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-4 lg:gap-6",
                )}
              >
                {items.map((item, idx) => (
                  <FeatureItem
                    key={item.title}
                    item={item}
                    index={idx}
                    layout={steps ? "steps" : "grid"}
                  />
                ))}
              </div>
            </div>
          );
        }
        return (
          <SectionRow key={section.number} section={section} first={first}>
            <SectionBody section={section} />
          </SectionRow>
        );
      })}
    </section>
  );
}

/** "Next project 02 / 05 — ElliesNote →", or "More projects 03 — 05 — All work →". */
function NextProject({
  study,
  dict,
}: {
  study: CaseStudyDTO;
  dict: Dictionary;
}) {
  const { next } = study;
  const isProject = next.kind === "project";
  return (
    <section
      data-slot="next-project"
      aria-label={dict.case.nextProject}
      className="wrap flex flex-col gap-4 border-t border-divider py-16 sm:py-24"
    >
      <p className="label text-muted">
        {isProject ? (
          <>
            {dict.case.nextProject}{" "}
            <span className="num">{pad2(next.index)}</span> / {pad2(next.total)}
          </>
        ) : (
          <>
            {dict.case.moreProjects}{" "}
            <span className="num">{pad2(next.from)}</span> — {pad2(next.total)}
          </>
        )}
      </p>
      <Anchor
        href={next.href}
        className="type-display t-next flex items-baseline justify-between gap-6 transition-colors duration-150 hover:text-primary"
      >
        <span>
          {isProject
            ? `${next.title}${next.titleDot ? "." : ""}`
            : dict.common.allWork}
        </span>
        <span aria-hidden="true" className="dot">
          →
        </span>
      </Anchor>
    </section>
  );
}

export { CaseSections, NextProject };
