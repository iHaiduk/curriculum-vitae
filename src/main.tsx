import { render } from 'preact';
import { renderToString } from 'preact-render-to-string';

import 'semantic-ui-css/components/reset.min.css'
import 'semantic-ui-css/components/container.min.css'

import './main.css'

import App from './App.tsx'

// Client-side hydration / render (skipped during build-time prerender, where there is no DOM).
if (typeof document !== 'undefined') {
  render(<App />, document.getElementById('root')!);
}

// Build-time prerender entry: vite-prerender-plugin calls this to bake static HTML into #root.
export async function prerender() {
  return { html: renderToString(<App />) };
}
