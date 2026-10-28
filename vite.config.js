import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { readFileSync } from 'node:fs'

const isolationHeaders = {
  'Cross-Origin-Embedder-Policy': 'credentialless',
  'Cross-Origin-Opener-Policy': 'same-origin',
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), {
    name: 'fullstack-static-runtime',
    generateBundle() {
      this.emitFile({ type: 'asset', fileName: 'coi-serviceworker.js', source: readFileSync(new URL('./node_modules/coi-serviceworker/coi-serviceworker.js', import.meta.url), 'utf8') })
    },
  }],
  base: './',
  server: { headers: isolationHeaders, watch: { ignored: ['**/tmp/**', '**/.codex-remote-attachments/**', '**/test-results/**'] } },
  preview: { headers: isolationHeaders },
  build: { chunkSizeWarningLimit: 1800 },
})
