import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { CodeBlock } from "./CodeBlock";

describe("CodeBlock", () => {
  it("shows filename and language, and uses highlighted HTML when present", () => {
    const { container } = render(
      <CodeBlock
        block={{
          code: "## Title",
          html: '<span class="k">## Title</span>',
          language: "markdown",
          languageLabel: "Markdown",
          filename: "a.md",
        }}
      />,
    );
    expect(screen.getByText("a.md")).toBeInTheDocument();
    expect(screen.getByText("Markdown")).toBeInTheDocument();
    expect(container.querySelector("pre .k")).toHaveTextContent("## Title");
  });

  it("falls back to plain text", () => {
    render(<CodeBlock block={{ code: "pnpm dev", language: "bash" }} />);
    expect(screen.getByText("pnpm dev").tagName).toBe("PRE");
    expect(screen.getByText("bash")).toBeInTheDocument();
  });
});
