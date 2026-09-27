"use client";

import { cn } from "@portfolio/utils";
import { useEffect, useState } from "react";
import { Arrow } from "../../atoms/arrow/Arrow";
import { SweepLink } from "../../atoms/sweep-link/SweepLink";

export interface ShareLinksProps {
  /** Absolute URL of the post. Falls back to the current location when omitted. */
  url?: string;
  labels: { share: string; copyLink: string; linkCopied: string };
  className?: string;
}

/** "Share": LinkedIn + Copy link (label swaps to "Link copied" for 2s, announced politely). */
function ShareLinks({ url, labels, className }: ShareLinksProps) {
  const [copied, setCopied] = useState(false);
  const [href, setHref] = useState(url ?? "");

  useEffect(() => {
    if (!url) setHref(window.location.href);
  }, [url]);

  useEffect(() => {
    if (!copied) return;
    const id = window.setTimeout(() => setCopied(false), 2000);
    return () => window.clearTimeout(id);
  }, [copied]);

  const copy = async () => {
    await navigator.clipboard.writeText(href || window.location.href);
    setCopied(true);
  };

  return (
    <aside
      data-slot="share-links"
      aria-label={labels.share}
      className={cn("flex", className)}
    >
      <p className="label-2xs text-muted">{labels.share}</p>
      <SweepLink
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(href)}`}
        arrow="up-right"
      >
        LinkedIn
      </SweepLink>
      <button
        type="button"
        onClick={copy}
        className="sweep sweep-soft cursor-pointer"
      >
        {copied ? labels.linkCopied : labels.copyLink}
        <Arrow dir="up-right" />
      </button>
      <span role="status" aria-live="polite" className="sr-only">
        {copied ? labels.linkCopied : ""}
      </span>
    </aside>
  );
}

export { ShareLinks };
