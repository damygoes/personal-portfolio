import type { ExperienceItem as ExperienceItemContract } from "@portfolio/contracts";
import {
  DateRange,
  Disclosure,
  Heading,
  Link,
  Text,
  WorkModeBadge,
} from "@portfolio/ui";

export interface ExperienceItemProps {
  item: ExperienceItemContract;
  locale: string;
  workModeLabel: string;
  detailsLabel?: string;
  closeLabel?: string;
  presentLabel?: string;
}

function ExperienceItem({
  item,
  locale,
  workModeLabel,
  detailsLabel = "Details",
  closeLabel = "Close",
  presentLabel = "Present",
}: ExperienceItemProps) {
  return (
    <article
      data-slot="experience-item"
      className="flex flex-col gap-3 border-b border-border py-8 last:border-b-0"
    >
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <Heading level={3} size="md">
          {item.role}
          {" · "}
          {item.company.url ? (
            <Link href={item.company.url} external underline="hover">
              {item.company.name}
            </Link>
          ) : (
            item.company.name
          )}
        </Heading>
        <Text size="sm" tone="muted">
          <DateRange
            start={item.period.start}
            end={item.period.end}
            locale={locale}
            presentLabel={presentLabel}
          />
        </Text>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <WorkModeBadge mode={item.workMode} label={workModeLabel} />
        <Text size="sm" tone="muted">
          {item.location}
        </Text>
      </div>

      <Text size="base">{item.summary}</Text>

      <Disclosure
        defaultOpen={item.period.isCurrent}
        trigger={
          <Text size="sm" weight="medium">
            {detailsLabel} / {closeLabel}
          </Text>
        }
      >
        <ul className="mt-3 flex flex-col gap-2">
          {item.highlights.map((highlight, index) => (
            <li
              key={index}
              className="flex gap-2 text-sm text-muted-foreground"
            >
              <span aria-hidden="true">–</span>
              {highlight}
            </li>
          ))}
        </ul>
      </Disclosure>
    </article>
  );
}

export { ExperienceItem };
