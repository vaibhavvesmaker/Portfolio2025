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
  server: {
    hmr: true, // Enable Hot Module Replacement
    watch: {
      usePolling: true, // Use polling for file changes (helps on some systems)
    },
  },
  build: {
    chunkSizeWarningLimit: 1000, // Increase chunk size limit to avoid warnings
  },
  optimizeDeps: {
    include: ["react", "react-dom", "framer-motion", "@react-three/fiber"], // Pre-bundle these dependencies
  },
});