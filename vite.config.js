import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Update the 'base' field if deploying to GitHub Pages or a subdirectory
export default defineConfig({
  plugins: [react()],
  base: '/your-repo-name/', // Change this if deploying to GitHub Pages
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
  resolve: {
    alias: {
      '@': '/src', // Allows imports like "@/components/MyComponent"
    },
  },
  esbuild: {
    jsxInject: `import React from 'react'`,
  },
});
