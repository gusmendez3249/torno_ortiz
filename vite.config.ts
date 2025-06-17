import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/torno_ortiz/', // ✅ nombre exacto del repo
  plugins: [react()],
});

