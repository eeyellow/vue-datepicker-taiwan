import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { fileURLToPath, URL } from 'node:url';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    lib: {
      entry: './src/components/index.js',
      name: 'lcDatepicker',
      formats: ['es', 'umd', 'iife', 'cjs'],
      fileName: (format) => `lcDatepicker.${format}.js`
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        format: 'es'
      }
    }
  }
});
