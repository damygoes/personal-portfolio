"use client";

import type {
  HistoryAdapter,
  HistoryRefresh,
} from "@sanity/visual-editing/react";
import { VisualEditing } from "@sanity/visual-editing/react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useMemo, useState } from "react";

type Navigate = Parameters<HistoryAdapter["subscribe"]>[0];

/**
 * Click-to-edit overlays plus the Presentation tool's navigation sync, wired to
 * the App Router (after next-sanity's `VisualEditing`, without its Studio peer).
 * Edits refresh the server components, which re-fetch drafts in draft mode.
 */
export function SanityOverlayClient() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [navigate, setNavigate] = useState<Navigate>();

  const history = useMemo<HistoryAdapter>(
    () => ({
      subscribe: (next) => {
        setNavigate(() => next);
        return () => setNavigate(undefined);
      },
      update: (update) => {
        if (update.type === "push") router.push(update.url);
        else if (update.type === "replace") router.replace(update.url);
        else if (update.type === "pop") router.back();
      },
    }),
    [router],
  );

  // Tell the Studio where the preview is, so its document list follows.
  useEffect(() => {
    const query = searchParams.size ? `?${searchParams.toString()}` : "";
    navigate?.({ type: "push", url: `${pathname}${query}` });
  }, [navigate, pathname, searchParams]);

  const refresh = useCallback(
    (_payload: HistoryRefresh) => {
      router.refresh();
      return new Promise<void>((resolve) => setTimeout(resolve, 1000));
    },
    [router],
  );

  return <VisualEditing portal history={history} refresh={refresh} />;
}
