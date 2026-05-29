import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const rootDir = fileURLToPath(new URL('.', import.meta.url))

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  base: mode === 'production' ? '/Sri-Jaya-Arts/' : '/',
  plugins: [react()],
  build: {
    rollupOptions: {
      input: path.resolve(rootDir, 'src/main.jsx'),
      output: {
        entryFileNames: 'assets/app.js',
        assetFileNames: (assetInfo) => {
          const assetName = assetInfo.name || ''
          if (assetName.endsWith('.css')) return 'assets/app.css'
          if (assetName === 'Profile image.png') return 'assets/profile-image.png'
          return 'assets/[name][extname]'
        },
      },
    },
  },
}))
