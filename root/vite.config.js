import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: "/Code-king-pm/",  // Replace "Code-king-pm" with your repo name
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
  },
});
