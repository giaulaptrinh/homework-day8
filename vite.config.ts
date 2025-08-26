import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueRouter from "unplugin-vue-router/vite";
import layouts from "vite-plugin-vue-layouts";
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueRouter({
      extensions: [".vue", ".md"],
    }),
    layouts({
      layoutsDirs: "src/layouts",
      pagesDirs: "src/pages",
      defaultLayout: "default",
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
