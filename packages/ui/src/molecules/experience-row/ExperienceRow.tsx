import type { ExperienceDTO, WorkMode } from "@portfolio/contracts";
import { cn } from "@portfolio/utils";
import { NowBadge } from "../../atoms/pill/Pill";

export interface ExperienceRowProps {
  item: ExperienceDTO;
  labels: { now: string; workMode: Record<WorkMode, string> };
  className?: string;
}

/**
 * One role (`.xp-row`): when | role | body on a 3/4/5 grid. On desktop the row lifts
 * to --card on hover and a spark arrow slides in. Date spans the row on tablet.
 */
function ExperienceRow({ item, labels, className }: ExperienceRowProps) {
  const place = [
    item.company,
    item.location,
    item.workMode && labels.workMode[item.workMode],
  ]
    .filter(Boolean)
    .join(" · ");
  return (
    <li
      data-slot="experience-row"
      {...item.editAttrs}
      className={cn(
        "group g12 gap-y-3 border-b border-divider py-7 transition-colors duration-150 sm:py-8 lg:px-4 lg:py-10 lg:hover:bg-card",
        className,
      )}
    >
      <div className="col-span-12 flex flex-row items-center justify-between gap-4 sm:justify-start lg:col-span-3 lg:flex-col lg:items-start lg:gap-3">
        <p className="label text-muted">{item.when}</p>
        {item.isCurrent && <NowBadge>{labels.now}</NowBadge>}
      </div>
      <div className="col-span-12 flex flex-col gap-2 sm:col-span-5 lg:col-span-4">
        <h3 className="font-display text-2xl leading-[1.1] font-bold tracking-[-0.015em] sm:text-[28px] lg:text-[32px]">
          {item.role}{" "}
          <span
            aria-hidden="true"
            className="inline-block -translate-x-2 text-[24px] text-spark opacity-0 transition-[opacity,transform] duration-300 ease-standard group-hover:translate-x-0 group-hover:opacity-100"
          >
            →
          </span>
        </h3>
        <p className="label text-muted">{place}</p>
      </div>
      {item.summary ? (
        <p className="t-body col-span-12 sm:col-span-7 lg:col-span-5">
          {item.summary}
        </p>
      ) : (
        <ul className="col-span-12 flex flex-col gap-1.5 text-[15px] leading-[1.6] text-fg-soft sm:col-span-7 sm:text-base lg:col-span-5">
          {item.bullets.map((bullet) => (
            <li
              key={bullet}
              className="flex gap-3 before:shrink-0 before:text-spark-text before:content-['—']"
            >
              {bullet}
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}

export { ExperienceRow };
