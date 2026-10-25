import { cn } from "@portfolio/utils";
import { useId } from "react";

export interface BadgeProps {
  /** Ring text, e.g. "SOFTWARE DEVELOPER ✦ WEB & MOBILE ✦ ". */
  text: string;
  href: string;
  /** Accessible name of the core link. */
  label: string;
  /** lg: 176 desktop / 120 tablet (hidden on mobile). sm: 104, mobile only. */
  size: "lg" | "sm";
  className?: string;
}

/** Rotating text ring around a coral core that links to #work. */
function Badge({ text, href, label, size, className }: BadgeProps) {
  const pathId = useId();
  const lg = size === "lg";
  return (
    <div
      data-slot="badge"
      className={cn(
        "relative shrink-0",
        lg ? "size-[120px] lg:size-[176px]" : "size-[104px]",
        className,
      )}
    >
      <svg
        viewBox="0 0 176 176"
        aria-hidden="true"
        className="absolute inset-0 size-full origin-center animate-spin-slow"
      >
        <defs>
          <path
            id={pathId}
            d="M88,88 m-70,0 a70,70 0 1,1 140,0 a70,70 0 1,1 -140,0"
          />
        </defs>
        <text
          className="fill-current font-mono"
          style={{
            fontSize: lg ? 11 : 13,
            letterSpacing: lg ? "0.15em" : "0.12em",
          }}
        >
          <textPath href={`#${pathId}`} textLength={436} lengthAdjust="spacing">
            {text}
          </textPath>
        </text>
      </svg>
      <a
        href={href}
        aria-label={label}
        className={cn(
          "absolute top-1/4 left-1/4 flex size-1/2 items-center justify-center rounded-full bg-spark font-mono transition-transform duration-300 ease-standard hover:scale-[1.08]",
          lg ? "text-[22px] lg:text-[30px]" : "text-[20px]",
        )}
      >
        ↘
      </a>
    </div>
  );
}

export { Badge };
