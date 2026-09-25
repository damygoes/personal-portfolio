import { render, screen } from "@testing-library/react";
import { createRef } from "react";
import { describe, expect, it } from "vitest";

import { Grid } from "./Grid";

describe("Grid", () => {
  it("renders a <div> with the grid class and default gap", () => {
    render(<Grid>Hello</Grid>);
    const el = screen.getByText("Hello");
    expect(el.tagName).toBe("DIV");
    expect(el).toHaveAttribute("data-slot", "grid");
    expect(el).toHaveClass("grid", "gap-4");
  });

  it("resolves a plain number `cols` to a base grid-cols class", () => {
    render(<Grid cols={3}>Hello</Grid>);
    expect(screen.getByText("Hello")).toHaveClass("grid-cols-3");
  });

  it("resolves a responsive `cols` object to breakpoint-prefixed classes", () => {
    render(<Grid cols={{ base: 1, md: 2, lg: 3 }}>Hello</Grid>);
    const el = screen.getByText("Hello");
    expect(el).toHaveClass("grid-cols-1", "md:grid-cols-2", "lg:grid-cols-3");
  });

  it("merges className", () => {
    render(<Grid className="custom-class">Hello</Grid>);
    expect(screen.getByText("Hello")).toHaveClass("custom-class", "grid");
  });

  it("forwards the ref", () => {
    const ref = createRef<HTMLDivElement>();
    render(<Grid ref={ref}>Hello</Grid>);
    expect(ref.current?.tagName).toBe("DIV");
  });
});
