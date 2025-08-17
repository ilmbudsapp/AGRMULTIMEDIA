import { defineConfig } from 'vite';

// Local config for development stability
export default defineConfig({
  optimizeDeps: {
    include: ['react', 'react-dom']
  },
  esbuild: {
    logOverride: { 'this-is-undefined-in-esm': 'silent' }
  }
});