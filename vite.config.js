import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Code-king-pm/', // Change to match your repo name if using GitHub Pages
  server: {
    port: 3000,
    open: true,
  },
});
