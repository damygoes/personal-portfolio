import type { ImageDTO } from "@portfolio/contracts";
import { cn } from "@portfolio/utils";
import { Picture } from "../../lib/adapters";

const phoneSizes = {
  /** Featured project cover: 180×360 / 240×480 / 280×560. */
  feature:
    "h-[360px] w-[180px] rounded-[32px] sm:h-[480px] sm:w-[240px] sm:rounded-[44px] lg:h-[560px] lg:w-[280px]",
  /** Case-study cover: 150×300 / 200×400 / 280×560. */
  case: "h-[300px] w-[150px] rounded-[28px] sm:h-[400px] sm:w-[200px] sm:rounded-[44px] lg:h-[560px] lg:w-[280px]",
} as const;

export interface PhoneFrameProps {
  screen?: ImageDTO;
  size?: keyof typeof phoneSizes;
  className?: string;
}

/** Outlined phone (`.phone .phone-notch`) holding an app screenshot. */
function PhoneFrame({ screen, size = "feature", className }: PhoneFrameProps) {
  return (
    <div
      data-slot="phone-frame"
      data-vd="media"
      className={cn(
        "relative flex shrink-0 items-center justify-center overflow-hidden border-[1.5px] border-cover-line",
        phoneSizes[size],
        className,
      )}
    >
      {screen && (
        <Picture
          src={screen.src}
          alt={screen.alt}
          width={screen.width}
          height={screen.height}
          className="absolute inset-0 size-full object-cover"
        />
      )}
      <span
        aria-hidden="true"
        className="absolute top-3 left-1/2 -ml-[30px] h-[18px] w-[60px] rounded-full border-[1.5px] border-cover-line sm:top-4 sm:-ml-11 sm:h-6 sm:w-[88px]"
      />
    </div>
  );
}

/** Outlined browser window anchored to the bottom of a project cover. */
function BrowserFrame({
  screen,
  className,
}: {
  screen?: ImageDTO;
  className?: string;
}) {
  return (
    <div
      data-slot="browser-frame"
      className={cn(
        "relative flex h-[76%] w-[82%] flex-col rounded-t-xl border border-b-0 border-divider bg-bg",
        className,
      )}
    >
      <div
        aria-hidden="true"
        className="flex h-6 items-center gap-1.5 border-b border-divider px-3 sm:h-8"
      >
        <span className="size-2 rounded-full border border-muted" />
        <span className="size-2 rounded-full border border-muted" />
        <span className="size-2 rounded-full border border-muted" />
      </div>
      <div className="relative grow overflow-hidden">
        {screen && (
          <Picture
            src={screen.src}
            alt={screen.alt}
            width={screen.width}
            height={screen.height}
            className="absolute inset-0 size-full object-cover object-top"
          />
        )}
      </div>
    </div>
  );
}

export { BrowserFrame, PhoneFrame };
