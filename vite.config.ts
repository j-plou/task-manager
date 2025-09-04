import { defineConfig } from 'vite'
import RubyPlugin from 'vite-plugin-ruby'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [
    RubyPlugin(),
    vue(),
  ],
  resolve: {
    alias: {
      '@': '/rails/app/javascript',
    },
  },
  build: {
//    outDir: '/rails/app/public/vite-dev',
    rollupOptions: {
      input: {
        application: '@/entrypoints/application.js',
        'hello/index': '@/hello/index.js',
        'goodbye/index': '@/goodbye/index.js',
      },
    },
  },
  server: {
    host: '0.0.0.0',
    port: 3036
  }
})
