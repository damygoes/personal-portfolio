import type { Decorator, Preview } from "@storybook/react-vite";
import React from "react";
import "./preview.css";

const withTheme: Decorator = (Story, context) => {
  const theme = context.globals.theme ?? "light";

  return React.createElement(
    "div",
    { className: theme === "dark" ? "dark" : undefined },
    React.createElement(
      "div",
      { className: "bg-background text-foreground min-h-screen p-4" },
      React.createElement(Story),
    ),
  );
};

const preview: Preview = {
  globalTypes: {
    theme: {
      description: "Global theme for components",
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
  },
  initialGlobals: {
    theme: "light",
  },
  decorators: [withTheme],
  parameters: {
    backgrounds: {
      default: "light",
      values: [
        { name: "light", value: "#f3efe6" },
        { name: "dark", value: "#0b1110" },
        { name: "white", value: "#ffffff" },
      ],
    },
  },
};

export default preview;
