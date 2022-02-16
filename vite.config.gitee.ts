import { defineConfig } from 'vite'
import { config } from './vite.config.base'
config.base = "/nani-doc-web/"
// https://vitejs.dev/config/
export default defineConfig(config)
