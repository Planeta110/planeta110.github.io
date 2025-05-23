// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    assetsInclude: ["**/*.md"],
  },

  integrations: [react()],
  site: "https://planeta110.github.io",
});
