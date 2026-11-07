import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";

import { isDraftPreviewBuild } from "./scripts/drafts-preview.mjs";

const rootDir = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig(({ mode }) => {
  /**
   * Drafts are compiled into the app only for review builds:
   *   - `npm run dev`                          (mode === "development")
   *   - VITE_BLOG_PREVIEW_DRAFTS=1 npm run build
   *   - a Vercel **Preview** deployment        (VERCEL_ENV === "preview")
   *
   * Every other build — including Vercel Production, where VERCEL_ENV is
   * "production" — resolves `@blog-drafts` to an empty module, so no draft
   * text or metadata can reach a public JavaScript file. See
   * src/data/blogDrafts.empty.js for the reasoning.
   *
   * VERCEL_ENV is set by Vercel itself for every build and cannot be
   * "preview" during a production deployment, so production stays excluded
   * even if a dashboard variable is misconfigured.
   */
  // One shared rule, also used by scripts/prerender.mjs.
  const draftsEnabled = isDraftPreviewBuild(process.env, mode);

  // The runtime switch in src/lib/blogEnv.js reads this through
  // import.meta.env, so the build-time alias and the runtime check can
  // never disagree about whether drafts are on.
  if (draftsEnabled) process.env.VITE_BLOG_PREVIEW_DRAFTS = "1";

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
