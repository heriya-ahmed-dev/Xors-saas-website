import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
    base: '/Xors-saas-website/',
  plugins: [
    tailwindcss(),
  ],
})