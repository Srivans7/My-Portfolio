import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { glslify } from "vite-plugin-glslify";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), glslify()],
  assetsInclude: ["**/*.glb"],
  base: './',
  build: {
    // Prevent Vite from inlining assets as data URIs so loader sees real file URLs
    assetsInlineLimit: 0,
  },
});
