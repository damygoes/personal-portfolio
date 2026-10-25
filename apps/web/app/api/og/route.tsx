import { ImageResponse } from "next/og";

// Brand colours (light theme) from @portfolio/design-tokens.
const BG = "#f3efe6";
const FG = "#0f1a19";
const PRIMARY = "#0b6b66";
const SPARK = "#e2583e";

/**
 * Brand-style Open Graph card for pages without a cover image:
 * `/api/og?title=Selected%20work`. Covers (case studies, posts) are used
 * directly when they exist.
 */
export function GET(request: Request) {
  const title =
    new URL(request.url).searchParams.get("title")?.slice(0, 90) ||
    "Damilola Bada";
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 72,
        background: BG,
        color: FG,
      }}
    >
      <div
        style={{
          display: "flex",
          fontSize: 28,
          letterSpacing: 4,
          textTransform: "uppercase",
          color: PRIMARY,
        }}
      >
        damilolabada.com
      </div>
      <div
        style={{
          display: "flex",
          fontSize: title.length > 40 ? 76 : 104,
          fontWeight: 800,
          lineHeight: 1,
          letterSpacing: -2,
          textTransform: "uppercase",
        }}
      >
        {title}
        <span style={{ color: SPARK }}>.</span>
      </div>
      <div style={{ display: "flex", fontSize: 30 }}>Damilola Bada</div>
    </div>,
    { width: 1200, height: 630 },
  );
}
