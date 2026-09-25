import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Img } from "./Img";

describe("Img", () => {
  it("renders an img with the given src and alt", () => {
    const { getByAltText } = render(<Img src="/photo.jpg" alt="A photo" />);
    const el = getByAltText("A photo");
    expect(el).toHaveAttribute("src", "/photo.jpg");
    expect(el).toHaveAttribute("data-slot", "img");
  });

  it("lazy loads by default and eager loads when priority", () => {
    const { getByAltText, rerender } = render(
      <Img src="/photo.jpg" alt="A photo" />,
    );
    expect(getByAltText("A photo")).toHaveAttribute("loading", "lazy");

    rerender(<Img src="/photo.jpg" alt="A photo" priority />);
    expect(getByAltText("A photo")).toHaveAttribute("loading", "eager");
    expect(getByAltText("A photo")).toHaveAttribute("fetchpriority", "high");
  });

  it("applies fill and objectPosition styles", () => {
    const { getByAltText } = render(
      <Img src="/photo.jpg" alt="A photo" fill objectPosition="top" />,
    );
    const el = getByAltText("A photo");
    expect(el).toHaveClass("absolute", "inset-0", "size-full", "object-cover");
    expect(el).toHaveStyle({ objectPosition: "top" });
  });

  it("wraps with a blurred background when blurDataURL is given", () => {
    const { container, getByAltText } = render(
      <Img
        src="/photo.jpg"
        alt="A photo"
        blurDataURL="data:image/png;base64,abc"
      />,
    );
    const wrapper = container.querySelector('[data-slot="img-wrapper"]');
    expect(wrapper).toHaveStyle({
      backgroundImage: "url(data:image/png;base64,abc)",
    });
    expect(wrapper).toContainElement(getByAltText("A photo"));
  });

  it("merges className", () => {
    const { getByAltText } = render(
      <Img src="/photo.jpg" alt="A photo" className="custom-class" />,
    );
    expect(getByAltText("A photo")).toHaveClass("custom-class");
  });
});
