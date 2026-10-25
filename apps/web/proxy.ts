import { DEFAULT_LOCALE, isLocale, type Locale } from "@portfolio/contracts";
import { NextResponse, type NextRequest } from "next/server";

/**
 * Every page lives under a locale prefix (`/en/work`, `/de/work`). Unprefixed
 * paths redirect to the visitor's preferred registry locale. Unknown prefixes
 * (`/fr/work`) end up at `/en/fr/work`, which is a 404.
 */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const first = pathname.split("/")[1] ?? "";
  if (isLocale(first)) return NextResponse.next();

  const url = request.nextUrl.clone();
  url.pathname = `/${preferredLocale(request)}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

/** The first Accept-Language entry (by q) whose language is in the registry. */
function preferredLocale(request: NextRequest): Locale {
  const header = request.headers.get("accept-language") ?? "";
  const ranked = header
    .split(",")
    .map((part) => {
      const [tag = "", ...params] = part.trim().split(";");
      const q = params.find((p) => p.trim().startsWith("q="));
      return {
        lang: tag.split("-")[0]!.toLowerCase(),
        q: q ? Number(q.trim().slice(2)) : 1,
      };
    })
    .filter((entry) => entry.lang && entry.q > 0)
    .sort((a, b) => b.q - a.q);
  return ranked.map((entry) => entry.lang).find(isLocale) ?? DEFAULT_LOCALE;
}

export const config = {
  // Pages only: skip Next internals, API routes, metadata files and assets.
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|.*\\..*).*)",
  ],
};
