import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/diro_technical_test/',
  plugins: [
    react({
      jsxRuntime: 'classic' 
    })
  ],
});