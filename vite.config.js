import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/la-hat/', // <-- must match the repo name!
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  }
}) 