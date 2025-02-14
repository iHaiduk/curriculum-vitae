import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
import { viteSingleFile } from "vite-plugin-singlefile"
import preact from "@preact/preset-vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [preact(), viteSingleFile()],
  build: {
    assetsDir: 'curriculum-vitae',
  }
})
