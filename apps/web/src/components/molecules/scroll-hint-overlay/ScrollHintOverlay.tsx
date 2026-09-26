"use client";

import { Icon, ScrollHint } from "@portfolio/ui";
import { cn } from "@portfolio/utils";
import { useEffect, useRef, useState } from "react";

export interface ScrollHintOverlayProps {
  label?: string;
}

function ScrollHintOverlay({ label }: ScrollHintOverlayProps) {
  const anchorRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const section = anchorRef.current?.closest("[data-slot='hero-section']");
    if (!section) return;

    // Track the hero's own bottom edge directly on scroll, rather than via
    // IntersectionObserver: the hero's fluid display-hero clamp can render
    // it taller than one viewport, so "still intersecting the viewport at
    // all" stays true well past where the next section starts, and a
    // zero-height rootMargin sentinel only fires two events (enter/exit)
    // which land on the wrong side of that transition for a tall target.
    // A scroll listener re-measures every frame, so it can't miss the
    // moment the hero's bottom actually crosses the viewport top.
    const update = () => {
      setVisible(section.getBoundingClientRect().bottom > 0);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div
      ref={anchorRef}
      className={cn(
        "fixed bottom-8 left-8 z-10 flex items-center gap-2 transition-opacity duration-300",
        visible ? "opacity-100" : "pointer-events-none opacity-0",
      )}
    >
      <ScrollHint label={label} />
      <Icon
        name="chevronDown"
        size="sm"
        aria-hidden="true"
        className="motion-safe:animate-[bounce_1.6s_ease-in-out_infinite] text-muted-foreground"
      />
    </div>
  );
}

export { ScrollHintOverlay };
