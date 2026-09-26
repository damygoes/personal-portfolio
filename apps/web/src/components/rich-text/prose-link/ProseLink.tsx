import { Link } from "@portfolio/ui";

export interface ProseLinkProps {
  href: string;
  external: boolean;
  children: React.ReactNode;
}

function ProseLink({ href, external, children }: ProseLinkProps) {
  return (
    <Link href={href} external={external} underline="always">
      {children}
    </Link>
  );
}

export { ProseLink };
