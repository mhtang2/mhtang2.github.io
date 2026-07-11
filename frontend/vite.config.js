import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  // Site is served at the domain root (mtang.me). Override with VITE_BASE_PATH if needed.
  base: process.env.VITE_BASE_PATH || (mode === 'production' ? '/' : '/'),
  plugins: [react(), tailwindcss()],
}))
