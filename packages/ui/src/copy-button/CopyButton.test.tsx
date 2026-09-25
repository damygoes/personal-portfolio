import { render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it, vi } from "vitest";

import { CopyButton } from "./CopyButton";

// userEvent.setup() installs its own navigator.clipboard stub, so ours must
// be defined after setup() and before render/click for writeText to be a spy.
function stubClipboard() {
  const writeText = vi.fn().mockResolvedValue(undefined);
  Object.defineProperty(navigator, "clipboard", {
    value: { writeText },
    configurable: true,
  });
  return writeText;
}

describe("CopyButton", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("copies the value to the clipboard on click", async () => {
    const user = userEvent.setup();
    const writeText = stubClipboard();
    const { getByRole } = render(<CopyButton value="hello@example.com" />);

    await user.click(getByRole("button", { name: "Copy" }));

    await waitFor(() =>
      expect(writeText).toHaveBeenCalledWith("hello@example.com"),
    );
  });

  it("shows the copied state after a successful copy, then resets", async () => {
    const user = userEvent.setup();
    stubClipboard();
    const { getByRole } = render(
      <CopyButton value="hello@example.com" resetAfterMs={10} />,
    );

    await user.click(getByRole("button", { name: "Copy" }));

    await waitFor(() =>
      expect(getByRole("button", { name: "Copied" })).toBeInTheDocument(),
    );

    await waitFor(
      () => expect(getByRole("button", { name: "Copy" })).toBeInTheDocument(),
      { timeout: 1000 },
    );
  });

  it("supports custom labels", async () => {
    const user = userEvent.setup();
    stubClipboard();
    const { getByRole } = render(
      <CopyButton
        value="hello@example.com"
        label="Copy email"
        copiedLabel="Email copied"
      />,
    );

    expect(getByRole("button", { name: "Copy email" })).toBeInTheDocument();
    await user.click(getByRole("button", { name: "Copy email" }));

    await waitFor(() =>
      expect(getByRole("button", { name: "Email copied" })).toBeInTheDocument(),
    );
  });
});
