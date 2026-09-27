import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { UiAdapterProvider } from "../../lib/adapters";
import { Ghost, ImageFrame } from "./ImageFrame";

const image = {
  src: "https://example.com/a.jpg",
  alt: "Portrait",
  width: 10,
  height: 10,
};

describe("ImageFrame", () => {
  it("shows the decoration only while there is no image", () => {
    const { container, rerender } = render(
      <ImageFrame fallback={<Ghost>DB</Ghost>} />,
    );
    expect(screen.getByText("DB")).toHaveAttribute("aria-hidden", "true");
    expect(container.firstChild).toHaveAttribute("data-vd", "media");
    rerender(<ImageFrame image={image} fallback={<Ghost>DB</Ghost>} />);
    expect(screen.queryByText("DB")).toBeNull();
    expect(screen.getByRole("img", { name: "Portrait" })).toHaveAttribute(
      "src",
      image.src,
    );
  });

  it("uses the app image component when provided", () => {
    render(
      <UiAdapterProvider
        Image={(props) => <span data-testid="next-image">{props.alt}</span>}
      >
        <ImageFrame image={image} />
      </UiAdapterProvider>,
    );
    expect(screen.getByTestId("next-image")).toHaveTextContent("Portrait");
  });
});
