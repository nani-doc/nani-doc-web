import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import { BASE_PATH } from './src/constant'

// https://vitejs.dev/config/
export default defineConfig({
  base: `${BASE_PATH}/`,
  plugins: [vue()],
  server: {
    host: '0.0.0.0'
  },
  resolve: {
    alias: {
      "/@": resolve(__dirname, "./src")
    }
  }
})
