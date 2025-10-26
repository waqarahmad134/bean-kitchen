import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";

// ✅ define `global` shim for browser (avoids "global is not defined")
const defineGlobalsForBrowser = {
  global: "window",
};

export default defineConfig({
  base: "/",
  plugins: [
    react(),
    runtimeErrorOverlay(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
    },
  },
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist"),
    emptyOutDir: true,
  },
  define: defineGlobalsForBrowser, // ✅ add this line
  server: {
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
});
