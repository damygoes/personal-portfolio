import { render, screen } from "@testing-library/react";
import { createRef } from "react";
import { describe, expect, it } from "vitest";

import { VisuallyHidden } from "./VisuallyHidden";

describe("VisuallyHidden", () => {
  it("renders a <span> with the sr-only class", () => {
    render(<VisuallyHidden>Hello</VisuallyHidden>);
    const el = screen.getByText("Hello");
    expect(el.tagName).toBe("SPAN");
    expect(el).toHaveClass("sr-only");
    expect(el).toHaveAttribute("data-slot", "visually-hidden");
  });

  it("is still present in the accessibility tree", () => {
    render(<VisuallyHidden>Hello</VisuallyHidden>);
    expect(screen.getByText("Hello")).toBeInTheDocument();
  });

  it("merges className", () => {
    render(<VisuallyHidden className="custom-class">Hello</VisuallyHidden>);
    expect(screen.getByText("Hello")).toHaveClass("custom-class", "sr-only");
  });

  it("forwards the ref", () => {
    const ref = createRef<HTMLSpanElement>();
    render(<VisuallyHidden ref={ref}>Hello</VisuallyHidden>);
    expect(ref.current?.tagName).toBe("SPAN");
  });
});
