"use client";

import { cn } from "@portfolio/utils";

export interface MarqueeProps {
  rows: string[][];
  speed?: number;
  direction?: "left" | "right";
}

function MarqueeItems({ items }: { items: string[] }) {
  return (
    <>
      {items.map((item, index) => (
        <span key={index} className="flex shrink-0 items-center gap-8">
          <span
            className={cn(
              "font-display text-3xl font-extrabold whitespace-nowrap uppercase sm:text-4xl lg:text-5xl",
              index % 2 === 1
                ? "text-transparent [-webkit-text-stroke:1.5px_var(--color-foreground)]"
                : "text-foreground",
            )}
          >
            {item}
          </span>
          <span aria-hidden="true" className="text-lg text-primary sm:text-xl">
            ✦
          </span>
        </span>
      ))}
    </>
  );
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
        <MarqueeItems items={items} />
      </div>
      <div
        aria-hidden="true"
        className={cn(
          "flex shrink-0 items-center gap-8 motion-safe:animate-marquee",
          direction === "right" && "[animation-direction:reverse]",
        )}
        style={{ animationDuration: `${speed}s` }}
      >
        <MarqueeItems items={items} />
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
