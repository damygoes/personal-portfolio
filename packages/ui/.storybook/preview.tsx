import type { Decorator, Preview } from "@storybook/react-vite";
import { useEffect } from "react";
import "./preview.css";

/** Mirrors production: `.dark` on <html>, `lang` follows the locale. */
const withDocument: Decorator = (Story, context) => {
  const dark = context.globals.theme === "dark";
  const locale = context.globals.locale === "de" ? "de" : "en";
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    document.documentElement.lang = locale;
  }, [dark, locale]);
  const fullscreen = context.parameters.layout === "fullscreen";
  return fullscreen ? (
    <Story />
  ) : (
    <div className="min-h-screen bg-bg p-6 text-fg">
      <Story />
    </div>
  );
};

const preview: Preview = {
  globalTypes: {
    theme: {
      description: "Colour theme",
      toolbar: {
        title: "Theme",
        icon: "circlehollow",
        items: [
          { value: "light", icon: "sun", title: "Light" },
          { value: "dark", icon: "moon", title: "Dark" },
        ],
        dynamicTitle: true,
      },
    },
    locale: {
      description: "Locale",
      toolbar: {
        title: "Locale",
        icon: "globe",
        items: [
          { value: "en", title: "EN" },
          { value: "de", title: "DE" },
        ],
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: { theme: "light", locale: "en" },
  decorators: [withDocument],
  parameters: {
    layout: "padded",
    backgrounds: { disable: true },
    viewport: {
      options: {
        mobile: {
          name: "Mobile 390",
          styles: { width: "390px", height: "844px" },
          type: "mobile",
        },
        tablet: {
          name: "Tablet 768",
          styles: { width: "768px", height: "1024px" },
          type: "tablet",
        },
        desktop: {
          name: "Desktop 1440",
          styles: { width: "1440px", height: "900px" },
          type: "desktop",
        },
      },
    },
    a11y: { test: "error" },
  },
};

export default preview;
