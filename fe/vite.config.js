import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import alias from '@rollup/plugin-alias'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(), 
    alias({ entries: [
      { find: '@Students', replacement: resolve('./src/Students') },
      { find: '@Assets', replacement: resolve('./src/Assets') },
    ]})]
})
