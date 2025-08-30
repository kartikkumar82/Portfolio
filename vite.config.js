import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  
  // Base path for GitHub Pages
  base: '/Portfolio/',   // 👈 MUST match your repo name (case-sensitive)

  // Optional: improve build for GitHub Pages
  build: {
    outDir: 'dist',      // default folder to deploy
    sourcemap: true,     // optional: helpful for debugging CSS/JS
  },
})
