import { render, screen } from "@testing-library/react";
import { createRef } from "react";
import { describe, expect, it } from "vitest";

import { Heading } from "./Heading";

describe("Heading", () => {
  it("renders the tag matching `level`", () => {
    render(<Heading level={2}>Hello</Heading>);
    const el = screen.getByText("Hello");
    expect(el.tagName).toBe("H2");
    expect(el).toHaveAttribute("data-slot", "heading");
    expect(el).toHaveAttribute("data-level", "2");
  });

  it("derives a default size from `level` when `size` is omitted", () => {
    render(<Heading level={1}>Hello</Heading>);
    expect(screen.getByText("Hello")).toHaveClass("text-4xl");
  });

  it("lets an explicit `size` override the level-derived default", () => {
    render(
      <Heading level={1} size="sm">
        Hello
      </Heading>,
    );
    const el = screen.getByText("Hello");
    expect(el.tagName).toBe("H1");
    expect(el).toHaveClass("text-lg");
  });

  it("renders each fluid display size with the matching token class", () => {
    render(
      <Heading level={1} size="display-hero">
        Hello
      </Heading>,
    );
    expect(screen.getByText("Hello")).toHaveClass("text-display-hero");
  });

  it("merges className", () => {
    render(
      <Heading level={3} className="custom-class">
        Hello
      </Heading>,
    );
    expect(screen.getByText("Hello")).toHaveClass("custom-class");
  });

  it("forwards the ref to the rendered heading element", () => {
    const ref = createRef<HTMLHeadingElement>();
    render(
      <Heading level={4} ref={ref}>
        Hello
      </Heading>,
    );
    expect(ref.current?.tagName).toBe("H4");
  });
});
