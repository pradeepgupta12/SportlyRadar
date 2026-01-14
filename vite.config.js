// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
// import sitemap from 'vite-plugin-sitemap';  // ← Yeh line comment out kar do

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    // sitemap({ ... })  // ← Yeh bhi comment out kar do
  ],
});