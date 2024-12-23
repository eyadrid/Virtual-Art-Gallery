import { defineConfig } from 'vite';

export default defineConfig({
  base: '/Virtual_Art_Gallery',
  build: {
    rollupOptions: {
      input: '/main.js',
    },
  },
});
