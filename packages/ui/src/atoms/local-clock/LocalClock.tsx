"use client";

import { useLocalTime } from "../../lib/use-local-time";

export interface LocalClockProps {
  timeZone: string;
  /** Text before / after the time ("Local time 20:15", "20:15 local"). */
  prefix?: string;
  suffix?: string;
  className?: string;
}

/** Live HH:MM for a time zone. Renders nothing until mounted, so SSR and hydration agree. */
function LocalClock({
  timeZone,
  prefix = "",
  suffix = "",
  className,
}: LocalClockProps) {
  const time = useLocalTime(timeZone);
  if (!time) return null;
  return (
    <span data-slot="local-clock" data-vd="dynamic" className={className}>
      {`${prefix}${time}${suffix}`}
    </span>
  );
}

export { LocalClock };
