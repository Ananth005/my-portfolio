import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'  // ← ADD THIS

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react()],
  resolve: {              // ← ADD THIS BLOCK
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
