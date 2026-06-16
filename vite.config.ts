import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
import { vitePrerenderPlugin } from "vite-prerender-plugin"
import preact from "@preact/preset-vite";

// https://vite.dev/config/
export default defineConfig({
  // Relative base so hashed assets resolve correctly under the
  // GitHub Pages sub-path (https://ihaiduk.github.io/curriculum-vitae/).
  base: './',
  plugins: [
    preact(),
    // Bakes the rendered app into #root at build time so the HTML is fully
    // readable by search engines, ATS and AI crawlers without running JS.
    vitePrerenderPlugin({ renderTarget: '#root' }),
  ],
})
