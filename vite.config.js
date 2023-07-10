import { defineConfig } from "vite";
import { resolve } from "path";
import vue from "@vitejs/plugin-vue";
import ElementPlus from "unplugin-element-plus/vite";
import pkg from "./package.json";
import config from "./src/settings/config.json";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  let name = `${config.prefix}${config.namespace}${config.name}`;
  if (mode === "debug") {
    name = `${config.prefix}${config.namespace}${config.name}${config.debugSuffix}`;
  }
  let defaultExternal = ["vue", "element-plus", "@vueuse/core", "axios"];
  if (config.external) {
    defaultExternal = [...defaultExternal, ...Object.keys(config.dependencies)];
  }
  return {
    plugins: [vue(), ElementPlus()],
    build: {
      lib: {
        entry: resolve(__dirname, "src/lib/index.ts"),
        formats: ["iife", "es"],
        name: name || pkg.name,
      },
      rollupOptions: {
        external: defaultExternal,
        output: {
          globals: {
            vue: "Vue",
            "element-plus": "elementPlus",
            "@vueuse/core": "core",
          },
          extend: true,
        },
      },
    },
  };
});
