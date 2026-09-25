import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";

import { Disclosure } from "./Disclosure";

describe("Disclosure", () => {
  it("renders the trigger and starts closed by default", () => {
    render(<Disclosure trigger="Question">Answer</Disclosure>);
    expect(
      screen.getByRole("button", { name: "Question" }),
    ).toBeInTheDocument();
    expect(screen.queryByText("Answer")).not.toBeInTheDocument();
  });

  it("opens the panel when the trigger is clicked", async () => {
    const user = userEvent.setup();
    render(<Disclosure trigger="Question">Answer</Disclosure>);

    await user.click(screen.getByRole("button", { name: "Question" }));

    expect(screen.getByText("Answer")).toBeVisible();
  });

  it("starts open when `defaultOpen` is set", () => {
    render(
      <Disclosure trigger="Question" defaultOpen>
        Answer
      </Disclosure>,
    );
    expect(screen.getByText("Answer")).toBeVisible();
  });

  it("calls onOpenChange when toggled", async () => {
    const user = userEvent.setup();
    const onOpenChange = vi.fn();
    render(
      <Disclosure trigger="Question" onOpenChange={onOpenChange}>
        Answer
      </Disclosure>,
    );

    await user.click(screen.getByRole("button", { name: "Question" }));

    expect(onOpenChange).toHaveBeenCalledWith(true, expect.anything());
  });

  it("does not open when disabled", async () => {
    const user = userEvent.setup();
    render(
      <Disclosure trigger="Question" disabled>
        Answer
      </Disclosure>,
    );

    await user.click(screen.getByRole("button", { name: "Question" }));

    expect(screen.queryByText("Answer")).not.toBeInTheDocument();
  });
});
