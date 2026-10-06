import { defineConfig } from 'vite';

export default defineConfig({
  // Cloudflare Pages serves from the root; VITE_BASE overrides it if ever needed.
  base: process.env.VITE_BASE || '/',
});
