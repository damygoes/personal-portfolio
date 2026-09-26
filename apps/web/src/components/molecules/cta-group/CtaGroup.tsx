import type { Link as LinkContract, Site } from "@portfolio/contracts";
import { Button } from "@portfolio/ui";

export interface CtaGroupProps {
  primary: LinkContract;
  cv?: Site["cv"];
  downloadCvLabel?: string;
}

function CtaGroup({
  primary,
  cv,
  downloadCvLabel = "Download CV",
}: CtaGroupProps) {
  return (
    <div data-slot="cta-group" className="flex flex-wrap items-center gap-4">
      <Button
        size="lg"
        render={
          <a
            href={primary.href}
            target={primary.external ? "_blank" : undefined}
            rel={primary.external ? "noopener" : undefined}
          />
        }
      >
        {primary.label}
      </Button>
      {cv && (
        <Button
          size="lg"
          variant="outline"
          icon="download"
          iconPosition="end"
          render={<a href={cv.href} download={cv.fileName} />}
        >
          {downloadCvLabel}
        </Button>
      )}
    </div>
  );
}

export { CtaGroup };
