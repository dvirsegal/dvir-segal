import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // GitHub Pages serves under /dvir-segal/; set VITE_BASE=/ for Cloudflare Pages (root).
  base: process.env.VITE_BASE || '/dvir-segal/',
  plugins: [react()],
});
