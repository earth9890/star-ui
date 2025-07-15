import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'star-ui': path.resolve(__dirname, '../dist/index.js'),
    },
  },
  server: {
    port: 3000,
    open: true,
  },
});