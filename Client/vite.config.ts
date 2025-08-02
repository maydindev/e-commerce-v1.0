import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: "../API/wwwroot",
    chunkSizeWarningLimit: 1024,
    emptyOutDir: true
  },
  server: {
    port: 3000
  },
  plugins: [react()],
})
