import { render, screen } from "@testing-library/react";
import { createRef } from "react";
import { describe, expect, it } from "vitest";

import { Stack } from "./Stack";

describe("Stack", () => {
  it("renders a <div> by default, flex-col, stretch, gap-4", () => {
    render(<Stack>Hello</Stack>);
    const el = screen.getByText("Hello");
    expect(el.tagName).toBe("DIV");
    expect(el).toHaveAttribute("data-slot", "stack");
    expect(el).toHaveClass("flex", "flex-col", "items-stretch", "gap-4");
  });

  it("renders the element passed via `as`", () => {
    render(<Stack as="ul">Hello</Stack>);
    expect(screen.getByText("Hello").tagName).toBe("UL");
  });

  it("applies direction and align variants", () => {
    render(
      <Stack direction="row" align="center">
        Hello
      </Stack>,
    );
    const el = screen.getByText("Hello");
    expect(el).toHaveClass("flex-row", "items-center");
  });

  it("resolves the gap prop to a literal gap-{n} class", () => {
    render(<Stack gap={8}>Hello</Stack>);
    expect(screen.getByText("Hello")).toHaveClass("gap-8");
  });

  it("merges className", () => {
    render(<Stack className="custom-class">Hello</Stack>);
    expect(screen.getByText("Hello")).toHaveClass("custom-class", "flex");
  });

  it("forwards the ref", () => {
    const ref = createRef<HTMLElement>();
    render(<Stack ref={ref}>Hello</Stack>);
    expect(ref.current?.tagName).toBe("DIV");
  });
});
