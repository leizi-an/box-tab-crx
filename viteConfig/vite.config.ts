import { fileURLToPath, URL } from "node:url";
import path from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

export default defineConfig({
  plugins: [vue(), vueJsx()],
  css: {
    preprocessorOptions: {
      less: {
        additionalData: `@import "${path.resolve(
          process.cwd(),
          "src/assets/base.less"
        )}";`,
      },
    },
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL(`${process.cwd()}/src`, import.meta.url)),
    },
  },
});
