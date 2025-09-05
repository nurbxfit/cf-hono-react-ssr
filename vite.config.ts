import { cloudflare } from '@cloudflare/vite-plugin'
import { defineConfig } from 'vite'
import ssrPlugin from 'vite-ssr-components/plugin'
import react from "@vitejs/plugin-react"
import tailwindcss from '@tailwindcss/vite'
import path from "path";

export default defineConfig({
  plugins: [react(), cloudflare(), ssrPlugin(), tailwindcss(),],
  build: {
    rollupOptions: {
      input: "./src/workers/index.tsx", // point to your Hono SSR entry,
    },
    outDir: "dist",
    manifest: true,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  }

})
