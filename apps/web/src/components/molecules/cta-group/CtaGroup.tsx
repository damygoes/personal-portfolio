import type { Link as LinkContract, Site } from "@portfolio/contracts";
import { Icon, Link } from "@portfolio/ui";
import { cn } from "@portfolio/utils";

export interface CtaGroupProps {
  primary: LinkContract;
  cv?: Site["cv"];
  downloadCvLabel?: string;
  className?: string;
}

const ctaLinkClassName =
  "group relative inline-flex shrink-0 items-center gap-2 text-xs font-medium tracking-wide text-foreground uppercase transition-transform duration-300 ease-out hover:-translate-y-0.5 hover:text-primary sm:text-sm lg:text-base";

const ctaUnderlineClassName =
  "pointer-events-none absolute -bottom-1 left-0 h-px w-0 bg-primary transition-[width] duration-300 ease-out group-hover:w-full";

const ctaIconClassName =
  "transition-transform delay-75 duration-300 ease-out group-hover:translate-x-1";

function CtaGroup({
  primary,
  cv,
  downloadCvLabel = "Download CV",
  className,
}: CtaGroupProps) {
  return (
    <div
      data-slot="cta-group"
      className={cn("flex flex-nowrap items-center gap-6", className)}
    >
      <Link
        href={primary.href}
        external={primary.external}
        underline="none"
        className={ctaLinkClassName}
      >
        <span className="relative">
          {primary.label}
          <span aria-hidden="true" className={ctaUnderlineClassName} />
        </span>
        <Icon
          name="arrow-right"
          size="sm"
          aria-hidden="true"
          className={ctaIconClassName}
        />
      </Link>
      {cv && (
        <a href={cv.href} download={cv.fileName} className={ctaLinkClassName}>
          <span className="relative">
            {downloadCvLabel}
            <span aria-hidden="true" className={ctaUnderlineClassName} />
          </span>
          <Icon
            name="download"
            size="sm"
            aria-hidden="true"
            className={ctaIconClassName}
          />
        </a>
      )}
    </div>
  );
}

export { CtaGroup };
