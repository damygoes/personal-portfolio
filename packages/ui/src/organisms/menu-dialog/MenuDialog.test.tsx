import { getDictionary } from "@portfolio/i18n";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { storyData } from "../../stories/story-data";
import { MenuDialog } from "./MenuDialog";

describe("MenuDialog", () => {
  it("opens from Menu, marks the active page, closes on Escape and returns focus", async () => {
    const data = await storyData("en");
    const user = userEvent.setup();
    render(<MenuDialog {...data.chrome("/work")} active="work" />);
    const trigger = screen.getByRole("button", { name: /Menu/ });
    await user.click(trigger);
    const dialog = await screen.findByRole("dialog", {
      name: getDictionary("en").nav.siteMenu,
    });
    expect(dialog).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Work/ })).toHaveAttribute(
      "aria-current",
      "page",
    );
    await user.keyboard("{Escape}");
    await waitFor(() => expect(screen.queryByRole("dialog")).toBeNull());
    await waitFor(() => expect(trigger).toHaveFocus());
  });
});
