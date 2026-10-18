import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 5174,
    strictPort: false
  },
  preview: {
    port: 4174
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false
  }
});
