import fs from 'node:fs'
import path from 'node:path'
import { defineConfig, type Plugin } from 'vite'
// import react from '@vitejs/plugin-react'
import { vitePrerenderPlugin } from "vite-prerender-plugin"
import preact from "@preact/preset-vite";

// Post-build HTML processing applied after prerender:
//  1. Fix absolute `file://.../headless-prerender/assets/` image URLs that the
//     prerender step bakes in (hashes already match the emitted assets).
//  2. Inline the bundled CSS so it is no longer a render-blocking request (FCP/LCP).
//  3. Load Google Fonts non-render-blocking (text paints immediately in fallback).
//  4. Preload the hero avatar (LCP candidate) and mark it high priority.
function optimizeBuiltHtml(): Plugin {
  return {
    name: 'optimize-built-html',
    apply: 'build',
    enforce: 'post',
    writeBundle(options) {
      const outDir = options.dir ?? 'dist'
      const htmlPath = path.join(outDir, 'index.html')
      if (!fs.existsSync(htmlPath)) return
      let html = fs.readFileSync(htmlPath, 'utf-8')

      // 1. Rewrite leaked prerender file:// asset URLs to relative paths.
      html = html.replace(/file:\/\/[^"']*\/headless-prerender\/assets\//g, './assets/')

      // 1b. Empty the decorative inline icon SVGs in the prerendered markup.
      // They make up ~85% of the HTML, are aria-hidden, and the client render
      // repaints them; keeping the sized <svg> shells avoids any layout shift.
      html = html.replace(/(<svg\b[^>]*>)[\s\S]*?(<\/svg>)/g, '$1$2')

      // 2. Inline bundled stylesheets to remove render-blocking CSS requests.
      html = html.replace(
        /<link\b[^>]*rel="stylesheet"[^>]*href="(\.\/assets\/[^"]+\.css)"[^>]*>/g,
        (tag, href) => {
          const cssPath = path.join(outDir, href.replace(/^\.\//, ''))
          if (!fs.existsSync(cssPath)) return tag
          const css = fs.readFileSync(cssPath, 'utf-8')
          return `<style>${css}</style>`
        },
      )

      // 3. Make the Google Fonts stylesheet non-render-blocking.
      html = html.replace(
        /<link\b([^>]*href="https:\/\/fonts\.googleapis\.com\/[^"]*"[^>]*)rel="stylesheet"([^>]*)>/g,
        (_tag, before, after) =>
          `<link ${before}rel="stylesheet" media="print" onload="this.media='all'"${after}>` +
          `<noscript><link ${before}rel="stylesheet"${after}></noscript>`,
      )

      // 4. Preload the hero avatar (LCP) and flag it high priority.
      const avatar = html.match(/\.\/assets\/avatar_black-[^"']+\.(?:webp|png)/)?.[0]
      if (avatar) {
        const type = avatar.endsWith('.webp') ? ' type="image/webp"' : ''
        html = html.replace(
          '</head>',
          `  <link rel="preload" as="image"${type} href="${avatar}" fetchpriority="high">\n  </head>`,
        )
        html = html.replace(
          new RegExp(`(<img[^>]*src="${avatar.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}")`),
          '$1 fetchpriority="high" decoding="async"',
        )
      }

      fs.writeFileSync(htmlPath, html)
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
    optimizeBuiltHtml(),
  ],
})
