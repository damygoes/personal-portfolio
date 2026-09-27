import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { ShareLinks } from "./ShareLinks";

const labels = {
  share: "Share",
  copyLink: "Copy link",
  linkCopied: "Link copied",
};
const url = "https://www.damilolabada.com/en/blog/post";

describe("ShareLinks", () => {
  it("shares to LinkedIn with the post URL", () => {
    render(<ShareLinks url={url} labels={labels} />);
    expect(
      screen.getByRole("link", { name: /LinkedIn/ }).getAttribute("href"),
    ).toContain(encodeURIComponent(url));
  });

  it("copies the link and announces it for 2s", async () => {
    const user = userEvent.setup();
    const writeText = vi
      .spyOn(navigator.clipboard, "writeText")
      .mockResolvedValue();
    render(<ShareLinks url={url} labels={labels} />);
    await user.click(screen.getByRole("button", { name: /Copy link/ }));
    expect(writeText).toHaveBeenCalledWith(url);
    expect(screen.getByRole("status")).toHaveTextContent("Link copied");
    await act(() => new Promise((r) => setTimeout(r, 2100)));
    expect(
      screen.getByRole("button", { name: /Copy link/ }),
    ).toBeInTheDocument();
  });
});
