import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { fileURLToPath } from "node:url";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: "@assets",
        replacement: fileURLToPath(new URL("src/assets", import.meta.url)),
      },
      {
        find: "@components",
        replacement: fileURLToPath(new URL("src/components", import.meta.url)),
      },
      {
        find: "@hooks",
        replacement: fileURLToPath(new URL("src/hooks", import.meta.url)),
      },
      {
        find: "@pages",
        replacement: fileURLToPath(new URL("src/pages", import.meta.url)),
      },
      {
        find: "@routes",
        replacement: fileURLToPath(new URL("src/routes", import.meta.url)),
      },
      {
        find: "@services",
        replacement: fileURLToPath(new URL("src/services", import.meta.url)),
      },
      {
        find: "@shared",
        replacement: fileURLToPath(new URL("src/shared", import.meta.url)),
      },
      {
        find: "@store",
        replacement: fileURLToPath(new URL("src/store", import.meta.url)),
      },
    ],
  },
});
