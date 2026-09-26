import tailwindcss from "@tailwindcss/vite";
import type { StorybookConfig } from "@storybook/react-vite";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(ts|tsx)"],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  async viteFinal(config) {
    config.plugins = [...(config.plugins ?? []), tailwindcss()];
    config.resolve ??= {};
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(__dirname, "../src"),
    };
    // The app's own tsconfig sets `jsx: "preserve"` (required for Next.js's SWC
    // pipeline), but Vite's esbuild step auto-detects that same tsconfig and would
    // otherwise leave raw JSX in place before Storybook's export-order plugin
    // (which uses a plain JS/ESM lexer, not a JSX parser) tries to read the file.
    config.esbuild = {
      ...(config.esbuild === false ? {} : config.esbuild),
      jsx: "automatic",
    };
    return config;
  },
};

export default config;
