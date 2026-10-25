import type { SkillGroupDTO } from "@portfolio/contracts";
import { cn } from "@portfolio/utils";

/** A skills column on the band: "FRONTEND (05)" then the items in Bricolage. */
function SkillCol({
  group,
  className,
}: {
  group: SkillGroupDTO;
  className?: string;
}) {
  return (
    <div
      data-slot="skill-col"
      {...group.editAttrs}
      className={cn(
        "flex flex-col gap-4 border-t border-band-line pt-4 sm:gap-6 sm:pt-6",
        className,
      )}
    >
      <p className="label flex items-center justify-between gap-4 text-band-muted">
        <span>{group.title}</span>
        <span>{group.count}</span>
      </p>
      <ul className="flex flex-col gap-1.5 font-display hyphens-auto text-xl leading-[1.15] font-semibold tracking-[-0.015em] sm:gap-2 sm:text-[28px] lg:text-[32px]">
        {group.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export { SkillCol };
