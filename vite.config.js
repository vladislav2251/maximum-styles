import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  plugins: [sveltekit()],
  server: {
    port: 3000,
    host: '0.0.0.0',
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@lib': path.resolve(__dirname, 'src/lib'),
      '@components': path.resolve(__dirname, 'src/lib/components'),
      '@context': path.resolve(__dirname, 'src/lib/context'),
      '@stores': path.resolve(__dirname, 'src/stores'),
      '@modules': path.resolve(__dirname, 'node_modules'),
    },
  },
});
