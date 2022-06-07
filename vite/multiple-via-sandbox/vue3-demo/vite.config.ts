import path from 'path';
import vue from '@vitejs/plugin-vue';

export default {
  plugins: [vue()],
  resolve: {
    alias: {
      '/@': path.resolve(__dirname, './src'),
      '/@views': path.resolve(__dirname, './src/views'),
      '/@components': path.resolve(__dirname, './src/components'),
      '/@utils': path.resolve(__dirname, './src/utils'),
    },
  },
  optimizeDeps: {
    include: ['lodash'],
  },
  server: {
    port: 3030,
    hmr: {
      protocol: 'ws',
      host: '127.0.0.1',
    },
    proxy: {
      '/foo': 'http://localhost:4567/foo',
      '/api': {
        target: 'http://jsonplaceholder.typicode.com',
        changeOrigin: true,
        rewrite: (path: string) => path.replace(/^\/api/, ''),
      },
    },
  },
  // ...
};
