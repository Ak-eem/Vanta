import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Served by Flask at /app/ (assets) with the page at /. `npm run dev` proxies the socket to Flask.
export default defineConfig({
  plugins: [react()],
  base: process.env.VANTA_BASE ?? '/app/',
  build: { outDir: 'dist', sourcemap: false, chunkSizeWarningLimit: 900, rollupOptions: { input: { main: 'index.html', phone: 'phone.html' } } },
  server: { port: 3000, proxy: { '/socket.io': { target: 'http://127.0.0.1:5000', ws: true } } },
  test: { environment: 'node' },
})
