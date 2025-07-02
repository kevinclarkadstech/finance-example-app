/// <reference types="vitest" />

import legacy from "@vitejs/plugin-legacy";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), legacy()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/setupTests.ts",
  },
  resolve: {
    alias: {
      "@shared": "/src/shared",
      "@loans": "/src/areas/loans",
      "@banking": "/src/areas/banking",
      "@invest": "/src/areas/invest",
      "@credit-card": "/src/areas/credit-card",
      "@home": "/src/areas/home",
      "@auth": "/src/areas/auth",
    },
  },
});
