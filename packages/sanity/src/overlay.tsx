"use client";

import dynamic from "next/dynamic";

/** Browser-only: the overlay touches `window` and reads the live URL. */
export const SanityOverlay = dynamic(
  () => import("./overlay-client").then((m) => m.SanityOverlayClient),
  {
    ssr: false,
  },
);
