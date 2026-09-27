import { cn } from "@portfolio/utils";
import type { ReactNode } from "react";
import { Arrow } from "../arrow/Arrow";

export const talkButtonClass =
  "label inline-flex h-11 items-center gap-2.5 rounded-full bg-fg px-[18px] text-bg transition-colors duration-150 hover:bg-primary lg:h-10";

/** "Let's talk →" — the filled pill that scrolls to #contact. */
function TalkButton({
  href = "#contact",
  children,
  className,
}: {
  href?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <a
      data-slot="talk-button"
      href={href}
      className={cn(talkButtonClass, className)}
    >
      {children} <Arrow dir="right" />
    </a>
  );
}

/** First focusable element; visually hidden until focused, styled like TalkButton. */
function SkipLink({
  href = "#content",
  children,
}: {
  href?: string;
  children: ReactNode;
}) {
  return (
    <a
      data-slot="skip-link"
      href={href}
      className={cn(
        talkButtonClass,
        "fixed top-3 left-3 z-50 -translate-y-24 focus:translate-y-0",
      )}
    >
      {children}
    </a>
  );
}

export { SkipLink, TalkButton };
