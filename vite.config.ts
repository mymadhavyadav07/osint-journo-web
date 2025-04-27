import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    // Disable error overlay in development
    open: false,
    overlay: false, // Disable error overlay in development
  },
  build: {
    sourcemap: false, // Don't include sourcemaps in production
    minify: 'terser',  // Minify JavaScript in production
    terserOptions: {
      compress: {
        drop_console: true, // Remove console logs in production
      },
      mangle: true,
    },
  },
});
