import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";

const rootDir = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig(({ mode }) => {
  /**
   * Drafts are compiled into the app only for local review:
   *   - `npm run dev`                          (mode === "development")
   *   - VITE_BLOG_PREVIEW_DRAFTS=1 npm run build
   *
   * Every other build resolves `@blog-drafts` to an empty module, so no draft
   * text or metadata can reach a public JavaScript file. See
   * src/data/blogDrafts.empty.js for the reasoning.
   */
  const draftsEnabled =
    mode === "development" || process.env.VITE_BLOG_PREVIEW_DRAFTS === "1";

  return {
    plugins: [react()],

    resolve: {
      alias: {
        "@blog-drafts": path.resolve(
          rootDir,
          draftsEnabled
            ? "src/data/blogDrafts.js"
            : "src/data/blogDrafts.empty.js"
        ),
      },
    },

    server: {
      host: "0.0.0.0",
      port: 3000,
      allowedHosts: true,
      cors: true,
    },

    build: {
      rollupOptions: {
        output: {
          // Split large vendor libraries into cached, parallel-loadable chunks
          manualChunks(id) {
            if (id.includes("node_modules")) {
              if (id.includes("framer-motion")) return "framer-motion";
              if (id.includes("react-icons")) return "react-icons";
              if (
                id.includes("/react/") ||
                id.includes("/react-dom/") ||
                id.includes("/react-router") ||
                id.includes("/scheduler/")
              ) {
                return "vendor";
              }
            }
          },
        },
      },
    },
  };
});
