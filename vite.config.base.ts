import { UserConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
// https://vitejs.dev/config/
export const config: UserConfig = {
  plugins: [vue()],
  server: {
    host: '0.0.0.0'
  },
  css: { preprocessorOptions: { scss: { charset: false } } },
  resolve: {
    alias: {
      "/@": resolve(__dirname, "./src")
    }
  }
}
