import { render, screen } from "@testing-library/react";
import { createRef } from "react";
import { describe, expect, it } from "vitest";

import { Container } from "./Container";

describe("Container", () => {
  it("renders a <div> by default with the default size", () => {
    render(<Container>Hello</Container>);
    const el = screen.getByText("Hello");
    expect(el.tagName).toBe("DIV");
    expect(el).toHaveAttribute("data-slot", "container");
    expect(el).toHaveClass("max-w-content");
  });

  it("renders the element passed via `as`", () => {
    render(<Container as="section">Hello</Container>);
    expect(screen.getByText("Hello").tagName).toBe("SECTION");
  });

  it("applies the size variant", () => {
    render(<Container size="wide">Hello</Container>);
    expect(screen.getByText("Hello")).toHaveClass("max-w-wide");
  });

  it("merges className", () => {
    render(<Container className="custom-class">Hello</Container>);
    expect(screen.getByText("Hello")).toHaveClass("custom-class", "mx-auto");
  });

  it("forwards the ref", () => {
    const ref = createRef<HTMLElement>();
    render(<Container ref={ref}>Hello</Container>);
    expect(ref.current?.tagName).toBe("DIV");
  });
});
