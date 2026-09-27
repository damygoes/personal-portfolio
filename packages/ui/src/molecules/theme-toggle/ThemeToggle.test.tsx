import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { ThemeToggle } from "./ThemeToggle";

describe("ThemeToggle", () => {
  it("toggles .dark on <html> and flips its label", async () => {
    render(<ThemeToggle labels={{ dark: "Dark mode", light: "Light mode" }} />);
    const button = screen.getByRole("button", { name: "Dark mode" });
    expect(button).toHaveAttribute("aria-pressed", "false");
    await userEvent.click(button);
    expect(document.documentElement).toHaveClass("dark");
    expect(
      await screen.findByRole("button", { name: "Light mode" }),
    ).toHaveAttribute("aria-pressed", "true");
  });
});
