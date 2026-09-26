import type { Pagination as PaginationData } from "@portfolio/contracts";
import { Button, Text } from "@portfolio/ui";

export interface PaginationProps {
  pagination: PaginationData;
  previousLabel?: string;
  nextLabel?: string;
  summaryLabel?: string;
}

function Pagination({
  pagination,
  previousLabel = "Previous",
  nextLabel = "Next",
  summaryLabel,
}: PaginationProps) {
  return (
    <nav
      data-slot="pagination"
      aria-label="Pagination"
      className="flex items-center justify-between gap-4"
    >
      <Button
        variant="outline"
        size="sm"
        icon="chevron-left"
        disabled={!pagination.previousHref}
        render={
          pagination.previousHref ? (
            <a href={pagination.previousHref} />
          ) : undefined
        }
      >
        {previousLabel}
      </Button>

      <Text size="sm" tone="muted">
        {summaryLabel ?? `${pagination.page} / ${pagination.totalPages}`}
      </Text>

      <Button
        variant="outline"
        size="sm"
        icon="arrow-right"
        iconPosition="end"
        disabled={!pagination.nextHref}
        render={
          pagination.nextHref ? <a href={pagination.nextHref} /> : undefined
        }
      >
        {nextLabel}
      </Button>
    </nav>
  );
}

export { Pagination };
