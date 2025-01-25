import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { visualizer } from 'rollup-plugin-visualizer';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), visualizer()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0].toString(); // Split by node_modules
          }
          // You can add more conditions here to split your own modules
        },
      },
    },
    chunkSizeWarningLimit: 1000, // Increase the limit if necessary
  },
})

// Example of dynamic import
// const LazyComponent = React.lazy(() => import('./LazyComponent'));
