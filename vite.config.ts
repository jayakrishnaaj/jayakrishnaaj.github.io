import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// base: './' keeps asset paths relative, so the build works on GitHub Pages
// (username.github.io/repo-name/) as well as on a custom domain.
export default defineConfig({
  base: './',
  plugins: [react()],
})
