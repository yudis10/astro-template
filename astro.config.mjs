import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  site: "https://online.detik.com",
  // Change to your site URL
  vite: {
    build: {
      cssCodeSplit: false,
    },
  },
  integrations: [
    sitemap(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  base: "/design/static/starter-project/preview/",
  // Change to your base path
  build: {
    format: "file",
    assets: "_starter-project",
    // Change to your project name
    inlineStylesheets: "never",
  },
  compressHTML: false,
  output: "server",
  outDir: "./preview",
  adapter: node({
    mode: "standalone",
  }),
});
