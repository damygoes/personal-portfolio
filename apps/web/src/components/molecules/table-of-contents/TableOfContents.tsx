import type { TocEntry } from "@portfolio/contracts";
import { Disclosure, Heading, Link } from "@portfolio/ui";
import { cn } from "@portfolio/utils";

export interface TableOfContentsProps {
  entries: TocEntry[];
  heading?: string;
}

function TocList({ entries }: { entries: TocEntry[] }) {
  return (
    <ul className="flex flex-col gap-2 text-sm">
      {entries.map((entry) => (
        <li key={entry.id} className={cn(entry.level === 3 && "pl-4")}>
          <Link
            href={`#${entry.id}`}
            underline="hover"
            className="text-muted-foreground"
          >
            {entry.text}
          </Link>
        </li>
      ))}
    </ul>
  );
}

function TableOfContents({
  entries,
  heading = "On this page",
}: TableOfContentsProps) {
  if (entries.length === 0) return null;

  return (
    <nav data-slot="table-of-contents" aria-label={heading}>
      <div className="hidden lg:block">
        <Heading level={4} size="sm" className="mb-3">
          {heading}
        </Heading>
        <TocList entries={entries} />
      </div>

      <div className="lg:hidden">
        <Disclosure
          trigger={
            <Heading level={4} size="sm">
              {heading}
            </Heading>
          }
        >
          <div className="pt-3">
            <TocList entries={entries} />
          </div>
        </Disclosure>
      </div>
    </nav>
  );
}

export { TableOfContents };
