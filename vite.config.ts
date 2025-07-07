import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "node:path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), react()],
  resolve: {
    alias: {
      "@app": path.resolve(__dirname, "./src/app"),
      "@features": path.resolve(__dirname, "./src/features"),
      "@shared": path.resolve(__dirname, "./src/shared"),
      "@layout": path.resolve(__dirname, "./src/layout"),
      "@widgets": path.resolve(__dirname, "./src/widgets"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@routers": path.resolve(__dirname, "./src/routers"),
    },
  },
});
