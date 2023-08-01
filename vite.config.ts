import { defineConfig } from 'vite'

import react from '@vitejs/plugin-react-swc'
import path from 'node:path'
import unoCSS from 'unocss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [unoCSS(), react()],
  resolve: { alias: { '@': path.resolve(__dirname, `./src`) } },
})
