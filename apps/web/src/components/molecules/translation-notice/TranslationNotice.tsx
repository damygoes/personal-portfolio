import type { Locale } from "@portfolio/contracts";
import { Icon, Text } from "@portfolio/ui";

export interface TranslationNoticeProps {
  targetLocale: Locale;
  message: string;
}

function TranslationNotice({ message }: TranslationNoticeProps) {
  return (
    <div
      data-slot="translation-notice"
      role="status"
      className="flex items-center gap-2 rounded-md border border-border bg-secondary px-4 py-3"
    >
      <Icon
        name="languages"
        size="sm"
        aria-hidden="true"
        className="text-muted-foreground"
      />
      <Text size="sm" tone="muted">
        {message}
      </Text>
    </div>
  );
}

export { TranslationNotice };
