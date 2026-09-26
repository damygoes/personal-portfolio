import { Link } from "@portfolio/ui";

export interface LogoProps {
  href: string;
}

function Logo({ href }: LogoProps) {
  return (
    <Link
      href={href}
      underline="none"
      data-slot="logo"
      aria-label="Home"
      className="font-display text-lg font-bold tracking-tight"
    >
      DB<span aria-hidden="true">©</span>
    </Link>
  );
}

export { Logo };
