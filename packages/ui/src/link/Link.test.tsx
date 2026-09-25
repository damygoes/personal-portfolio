import { render, screen } from "@testing-library/react";
import { createRef } from "react";
import { describe, expect, it } from "vitest";

import { Link } from "./Link";

describe("Link", () => {
  it("renders an <a> with the given href", () => {
    render(<Link href="/about">About</Link>);
    const el = screen.getByRole("link", { name: "About" });
    expect(el).toHaveAttribute("href", "/about");
    expect(el).toHaveAttribute("data-slot", "link");
  });

  it("does not set target/rel by default", () => {
    render(<Link href="/about">About</Link>);
    const el = screen.getByRole("link", { name: "About" });
    expect(el).not.toHaveAttribute("target");
    expect(el).not.toHaveAttribute("rel");
  });

  it("sets target=_blank and rel=noopener when external", () => {
    render(
      <Link href="https://example.com" external>
        Example
      </Link>,
    );
    const el = screen.getByRole("link", { name: "Example" });
    expect(el).toHaveAttribute("target", "_blank");
    expect(el).toHaveAttribute("rel", "noopener");
  });

  it("merges className", () => {
    render(
      <Link href="/about" className="custom-class">
        About
      </Link>,
    );
    expect(screen.getByRole("link", { name: "About" })).toHaveClass(
      "custom-class",
    );
  });

  it("swaps the rendered element via `render`", () => {
    render(
      <Link href="/about" render={<button type="button" />}>
        About
      </Link>,
    );
    expect(screen.queryByRole("link")).not.toBeInTheDocument();
    expect(screen.getByRole("button", { name: "About" })).toHaveAttribute(
      "href",
      "/about",
    );
  });

  it("forwards the ref to the anchor element", () => {
    const ref = createRef<HTMLAnchorElement>();
    render(
      <Link href="/about" ref={ref}>
        About
      </Link>,
    );
    expect(ref.current?.tagName).toBe("A");
  });
});
