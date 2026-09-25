import { cn } from "@portfolio/utils";

const defaultOptions: Intl.DateTimeFormatOptions = {
  month: "short",
  year: "numeric",
};

export interface DateRangeProps extends Omit<
  React.ComponentPropsWithoutRef<"span">,
  "children"
> {
  start: string;
  end: string | null;
  locale: string;
  presentLabel?: string;
  options?: Intl.DateTimeFormatOptions;
}

function DateRange({
  start,
  end,
  locale,
  presentLabel = "Present",
  options = defaultOptions,
  className,
  ...props
}: DateRangeProps) {
  const formatter = new Intl.DateTimeFormat(locale, options);
  const formattedStart = formatter.format(new Date(start));

  return (
    <span data-slot="date-range" className={cn(className)} {...props}>
      <time dateTime={start}>{formattedStart}</time>
      {" – "}
      {end ? (
        <time dateTime={end}>{formatter.format(new Date(end))}</time>
      ) : (
        presentLabel
      )}
    </span>
  );
}

export { DateRange };
