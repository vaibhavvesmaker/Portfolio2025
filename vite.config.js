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
  base: "/", // Use "/" if deploying to the root of a domain (e.g., Netlify)
  server: {
    hmr: true, // Enable Hot Module Replacement
    watch: {
      usePolling: true, // Use polling for file changes (helps on some systems)
    },
  },
  build: {
    outDir: "dist", // Ensure the output directory is "dist"
    chunkSizeWarningLimit: 1000, // Suppress warnings for large chunks
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom", "framer-motion", "@react-three/fiber"], // Split vendor libraries into a separate chunk
        },
      },
    },
  },
  optimizeDeps: {
    include: ["react", "react-dom", "framer-motion", "@react-three/fiber"], // Pre-bundle these dependencies
  },
});