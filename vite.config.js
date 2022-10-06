import * as path from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  root: path.resolve(__dirname, 'src'),

  build: {
    rollupOptions: {
      input: {
        stack: '/pages/stack/index.html',
        queue: '/pages/queue/index.html'
      }
    },
    outDir: '../dist'
  },
  server: {
    port: 8099
  }
})
