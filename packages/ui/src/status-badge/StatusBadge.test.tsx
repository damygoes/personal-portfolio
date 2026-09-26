import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { StatusBadge } from "./StatusBadge";

describe("StatusBadge", () => {
  it("renders the pre-resolved label with the status as a data attribute", () => {
    const { getByText } = render(<StatusBadge status="live" label="Live" />);
    const el = getByText("Live");
    expect(el).toHaveAttribute("data-slot", "status-badge");
    expect(el).toHaveAttribute("data-status", "live");
  });

  it("applies the success tone for a live status", () => {
    const { getByText } = render(<StatusBadge status="live" label="Live" />);
    expect(getByText("Live")).toHaveClass("text-success");
  });

  it("applies the warning tone for an inDevelopment status", () => {
    const { getByText } = render(
      <StatusBadge status="inDevelopment" label="In development" />,
    );
    expect(getByText("In development")).toHaveClass("text-warning");
  });

  it("falls back to the muted tone for an unknown status", () => {
    const { getByText } = render(
      <StatusBadge status="something-else" label="Something else" />,
    );
    expect(getByText("Something else")).toHaveClass("text-muted-foreground");
  });

  it("merges className", () => {
    const { getByText } = render(
      <StatusBadge status="live" label="Live" className="custom-class" />,
    );
    expect(getByText("Live")).toHaveClass("custom-class");
  });
});
