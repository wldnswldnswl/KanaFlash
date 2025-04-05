import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {VitePWA} from "vite-plugin-pwa";
// import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
    base: '/main',
    plugins: [
      react(),
    // tailwindcss(),
      VitePWA({
          registerType: 'autoUpdate',
          manifest: false, // manifest 직접 불러오게 설정
          includeAssets: [
              'favicon.svg',
              'robots.txt',
              'apple-touch-icon.png',
              "pwa-192x192.png",
              "pwa-512x512.png",
          ],
          srcDir: 'src',
          filename: 'sw.js'
      }),

  ],
    resolve: {
        alias: {
            'tailwindcss': '/node_modules/tailwindcss', // Alias for Tailwind CSS
        },
    },
})
