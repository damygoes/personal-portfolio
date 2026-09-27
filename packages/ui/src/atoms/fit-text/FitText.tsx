"use client";

import {
  useEffect,
  useLayoutEffect,
  useRef,
  type ComponentPropsWithoutRef,
  type ElementType,
} from "react";

const useIsomorphicLayoutEffect =
  typeof window === "undefined" ? useEffect : useLayoutEffect;

type FitTextProps<T extends ElementType> = {
  as?: T;
  /** Smallest font size in px (t-hero 52, t-xl 36 per interactions.md). */
  min: number;
} & Omit<ComponentPropsWithoutRef<T>, "as">;

function availableWidth(el: HTMLElement) {
  const parent = el.parentElement;
  if (!parent) return el.clientWidth;
  const cs = getComputedStyle(parent);
  const inner =
    parent.clientWidth -
    parseFloat(cs.paddingLeft) -
    parseFloat(cs.paddingRight);
  return Math.min(el.clientWidth || inner, inner);
}

/**
 * Display text that must never overflow horizontally (long German words, narrow
 * phones). It keeps the design size and only steps the font size down when the words
 * can't fit the available width: to `min` first, below it only if a single word is
 * still too wide. Uppercase display text is never hyphenated, so shrinking is the only option.
 */
function FitText<T extends ElementType = "h2">({
  as,
  min,
  style,
  ...props
}: FitTextProps<T>) {
  const ref = useRef<HTMLElement>(null);

  useIsomorphicLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    let lastWidth = -1;
    const fit = () => {
      const width = el.parentElement?.clientWidth ?? 0;
      if (width === lastWidth) return;
      lastWidth = width;
      el.style.fontSize = "";
      for (let i = 0; i < 3; i++) {
        const avail = availableWidth(el);
        const need = el.scrollWidth;
        if (!avail || need <= avail + 1) return;
        const size = parseFloat(getComputedStyle(el).fontSize);
        let next = Math.floor((size * avail) / need);
        // Step to the minimum first; only a word that still doesn't fit goes below it,
        // because "never allow horizontal overflow" is the hard rule.
        if (next < min && size > min) next = min;
        if (next >= size) return;
        el.style.fontSize = `${next}px`;
      }
    };
    fit();
    const observer = new ResizeObserver(fit);
    if (el.parentElement) observer.observe(el.parentElement);
    void document.fonts?.ready.then(() => {
      lastWidth = -1;
      fit();
    });
    return () => observer.disconnect();
  }, [min]);

  const Tag = (as ?? "h2") as ElementType;
  return <Tag ref={ref} data-fit-text="" style={style} {...props} />;
}

export { FitText };
