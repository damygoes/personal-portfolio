"use client";

import { cn } from "@portfolio/utils";

export interface MarqueeProps {
  rows: string[][];
  speed?: number;
  direction?: "left" | "right";
}

function MarqueeRow({
  items,
  speed,
  direction,
}: {
  items: string[];
  speed: number;
  direction: "left" | "right";
}) {
  return (
    <div className="flex overflow-hidden no-scrollbar">
      <div
        className={cn(
          "flex shrink-0 items-center gap-8 motion-safe:animate-marquee",
          direction === "right" && "[animation-direction:reverse]",
        )}
        style={{ animationDuration: `${speed}s` }}
      >
        {items.map((item, index) => (
          <span
            key={index}
            className="font-display text-3xl whitespace-nowrap text-muted-foreground"
          >
            {item}
          </span>
        ))}
      </div>
      <div
        aria-hidden="true"
        className={cn(
          "flex shrink-0 items-center gap-8 motion-safe:animate-marquee",
          direction === "right" && "[animation-direction:reverse]",
        )}
        style={{ animationDuration: `${speed}s` }}
      >
        {items.map((item, index) => (
          <span
            key={index}
            className="font-display text-3xl whitespace-nowrap text-muted-foreground"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

function Marquee({ rows, speed = 45, direction = "left" }: MarqueeProps) {
  return (
    <div data-slot="marquee" className="flex flex-col gap-4">
      {rows.map((items, index) => (
        <MarqueeRow
          key={index}
          items={items}
          speed={speed}
          direction={
            index % 2 === 0
              ? direction
              : direction === "left"
                ? "right"
                : "left"
          }
        />
      ))}
    </div>
  );
}

export { Marquee };
