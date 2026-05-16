import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

import htmlPlugin from './plugins'

export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    // htmlPlugin({
    //   entry: './src/main.js'
    // })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  server: {
    port: "8083",
    cors: true
  },
  build: {
    minify: false,
    // lib: {
    //   entry: './src/main.js',
    //   formats: ['es'],
    //   fileName: 'index'
    // }
    rolldownOptions: {
      preserveEntrySignatures: 'allow-extension'
    }
  }
})
