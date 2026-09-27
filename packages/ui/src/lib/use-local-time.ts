"use client";

import { useEffect, useState } from "react";

const format = (timeZone: string) =>
  new Intl.DateTimeFormat("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone,
  }).format(new Date());

/** "HH:MM" in the given zone, refreshed every 30s. Null on the server and first render. */
export function useLocalTime(timeZone: string): string | null {
  const [time, setTime] = useState<string | null>(null);
  useEffect(() => {
    const tick = () => setTime(format(timeZone));
    tick();
    const id = window.setInterval(tick, 30_000);
    return () => window.clearInterval(id);
  }, [timeZone]);
  return time;
}
