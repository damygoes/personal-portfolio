import { render, screen } from "@testing-library/react";
import { createRef } from "react";
import { describe, expect, it } from "vitest";

import { Text } from "./Text";

describe("Text", () => {
  it("renders a <p> by default", () => {
    render(<Text>Hello</Text>);
    const el = screen.getByText("Hello");
    expect(el.tagName).toBe("P");
    expect(el).toHaveAttribute("data-slot", "text");
  });

  it("renders the element passed via `as`", () => {
    render(<Text as="span">Hello</Text>);
    expect(screen.getByText("Hello").tagName).toBe("SPAN");
  });

  it("merges className instead of overwriting variant classes", () => {
    render(<Text className="custom-class">Hello</Text>);
    const el = screen.getByText("Hello");
    expect(el).toHaveClass("custom-class");
    expect(el).toHaveClass("text-base");
  });

  it("renders the full fixed type scale, from 2xs to 7xl", () => {
    render(<Text size="2xs">Hello</Text>);
    expect(screen.getByText("Hello")).toHaveClass("text-2xs");

    render(<Text size="7xl">Hello again</Text>);
    expect(screen.getByText("Hello again")).toHaveClass("text-7xl");
  });

  it("applies the tone variant", () => {
    render(<Text tone="muted">Hello</Text>);
    expect(screen.getByText("Hello")).toHaveClass("text-muted-foreground");
  });

  it("forwards the ref to the rendered element", () => {
    const ref = createRef<HTMLElement>();
    render(<Text ref={ref}>Hello</Text>);
    expect(ref.current?.tagName).toBe("P");
  });
});
