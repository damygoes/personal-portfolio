import { Fragment } from "react";
import { Dot, OutlineText } from "../../atoms/outline-text/OutlineText";

export interface TitleLinesProps {
  /** Dictionary title pair, e.g. ["Selected", "work"]. */
  lines: readonly string[];
  /** How the second line follows: line break (default) or a space ("The toolkit."). */
  join?: "break" | "space";
  /** Outline the second line. */
  outline?: boolean;
  /** End with the spark dot. */
  dot?: boolean;
}

/** "SELECTED / WORK." — the two-part display title used by section heads and CTAs. */
function TitleLines({
  lines,
  join = "break",
  outline = true,
  dot = true,
}: TitleLinesProps) {
  const [first, ...rest] = lines;
  const second = rest.join(" ");
  return (
    <>
      {first}
      {second && (
        <Fragment>
          {join === "break" ? <br /> : " "}
          {outline ? <OutlineText>{second}</OutlineText> : second}
        </Fragment>
      )}
      {dot && <Dot />}
    </>
  );
}

export { TitleLines };
