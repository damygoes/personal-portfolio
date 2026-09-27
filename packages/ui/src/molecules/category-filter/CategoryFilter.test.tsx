import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { CategoryFilter } from "./CategoryFilter";

describe("CategoryFilter", () => {
  it("links each topic to ?category= and marks the current one", () => {
    render(
      <CategoryFilter
        label="Filter posts by topic"
        active="cycling"
        options={[
          { title: "All", count: 7, href: "/en/blog" },
          {
            slug: "cycling",
            title: "Cycling",
            count: 2,
            href: "/en/blog?category=cycling",
          },
        ]}
      />,
    );
    expect(
      screen.getByRole("group", { name: "Filter posts by topic" }),
    ).toBeInTheDocument();
    const cycling = screen.getByRole("link", { name: /Cycling/ });
    expect(cycling).toHaveAttribute("href", "/en/blog?category=cycling");
    expect(cycling).toHaveAttribute("aria-current", "true");
    expect(screen.getByRole("link", { name: /All/ })).not.toHaveAttribute(
      "aria-current",
    );
    expect(screen.getByText("07")).toBeInTheDocument();
  });
});
