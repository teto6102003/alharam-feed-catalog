import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // A relative base also supports deployment to a GitHub Pages project URL.
base: '/alharam-feed-catalog/',  plugins: [react(), tailwindcss()],
  server: {
    host: '0.0.0.0',
  },
  preview: {
    host: '0.0.0.0',
  },
});
