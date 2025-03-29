import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Polyfill for crypto.getRandomValues
if (!globalThis.crypto) {
  globalThis.crypto = {
    getRandomValues: (arr) => require("crypto").randomBytes(arr.length),
  };
}

export default defineConfig({
  plugins: [react()],
  base: "/Portfolio2025/",
});