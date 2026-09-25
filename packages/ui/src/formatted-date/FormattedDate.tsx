import { cn } from "@portfolio/utils";

const defaultOptions: Intl.DateTimeFormatOptions = {
  year: "numeric",
  month: "long",
  day: "numeric",
};

export interface FormattedDateProps extends Omit<
  React.ComponentPropsWithoutRef<"time">,
  "dateTime" | "children"
> {
  date: string;
  locale: string;
  options?: Intl.DateTimeFormatOptions;
}

function FormattedDate({
  date,
  locale,
  options = defaultOptions,
  className,
  ...props
}: FormattedDateProps) {
  const formatted = new Intl.DateTimeFormat(locale, options).format(
    new Date(date),
  );

  return (
    <time
      data-slot="formatted-date"
      dateTime={date}
      className={cn(className)}
      {...props}
    >
      {formatted}
    </time>
  );
}

export { FormattedDate };
