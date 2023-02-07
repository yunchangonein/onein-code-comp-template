import { defineConfig } from "vite";
import { resolve } from "path";
import vue from "@vitejs/plugin-vue";
import ElementPlus from "unplugin-element-plus/vite";
import pkg from "./package.json";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), ElementPlus()],
  build: {
    lib: {
      entry: resolve(__dirname, "src/lib/main.ts"),
      name: pkg.name,
      fileName: pkg.name,
    },
    rollupOptions: {
      external: ["vue", "element-plus", "@vueuse/core", "axios"],
      output: {
        globals: {
          vue: "vue",
          "element-plus": "elementPlus",
        },
      },
    },
  },
});
