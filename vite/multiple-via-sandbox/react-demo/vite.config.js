// @ts-check
import reactPlugin from '@vitejs/plugin-react'

/**
 * @type { import('vite').UserConfig }
 */
const config = {
  plugins: [reactPlugin],
  server: {
    port: 3020,
    // hmr: false,
    hmr: {
      protocol: 'ws',
      host: '127.0.0.1',
    },
    cors: { origin: '*' }
  }
}

export default config
