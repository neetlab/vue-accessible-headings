/// <reference types="vitest" />
import vue from "@vitejs/plugin-vue";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";

const dirname = path.dirname(fileURLToPath(import.meta.url));

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],

  build: {
    lib: {
      entry: path.resolve(dirname, "src/index.ts"),
      name: "vue-accessible-headings",
      fileName: "index",
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
  },

  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./test/vitest-setup.ts"],
  },
});
