import type { MarqueeItemDTO } from "@portfolio/contracts";
import { Fragment } from "react";
import { OutlineText } from "../../atoms/outline-text/OutlineText";

function MarqueeSet({ items }: { items: MarqueeItemDTO[] }) {
  return (
    <div className="type-display flex items-center gap-6 pr-6 text-[36px] font-bold tracking-[-0.02em] whitespace-nowrap sm:gap-8 sm:pr-8 sm:text-[44px] lg:gap-10 lg:pr-10 lg:text-[56px]">
      {items.map((item, i) => (
        <Fragment key={`${item.text}-${i}`}>
          {item.outlined ? (
            <OutlineText weight="thin">{item.text}</OutlineText>
          ) : (
            <span>{item.text}</span>
          )}
          <span className="text-xl text-spark sm:text-[26px] lg:text-[32px]">
            ✦
          </span>
        </Fragment>
      ))}
    </div>
  );
}

/** Skills band that scrolls forever: two identical sets translate by -50%. Decorative. */
function Marquee({ items }: { items: MarqueeItemDTO[] }) {
  if (!items.length) return null;
  return (
    <div
      data-slot="marquee"
      aria-hidden="true"
      className="band flex h-[88px] shrink-0 items-center overflow-hidden sm:h-[104px] lg:h-32"
    >
      <div className="flex w-max animate-marquee">
        <MarqueeSet items={items} />
        <MarqueeSet items={items} />
      </div>
    </div>
  );
}

export { Marquee };
