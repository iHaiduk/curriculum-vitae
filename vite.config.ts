import fs from 'node:fs'
import path from 'node:path'
import { defineConfig, type Plugin } from 'vite'
// import react from '@vitejs/plugin-react'
import { vitePrerenderPlugin } from "vite-prerender-plugin"
import preact from "@preact/preset-vite";

// During prerender, asset imports (avatar, qr, etc.) resolve to absolute
// `file://.../vite-prerender-plugin/headless-prerender/assets/<name>` URLs and
// get baked into the HTML. The filename hashes match the real emitted assets,
// so we just rewrite the broken prefix to the relative `./assets/` path.
function fixPrerenderAssetUrls(): Plugin {
  return {
    name: 'fix-prerender-asset-urls',
    apply: 'build',
    enforce: 'post',
    writeBundle(options) {
      const htmlPath = path.join(options.dir ?? 'dist', 'index.html')
      if (!fs.existsSync(htmlPath)) return
      const html = fs.readFileSync(htmlPath, 'utf-8')
      const fixed = html.replace(/file:\/\/[^"']*\/headless-prerender\/assets\//g, './assets/')
      if (fixed !== html) fs.writeFileSync(htmlPath, fixed)
    },
  }
}

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
    fixPrerenderAssetUrls(),
  ],
})
