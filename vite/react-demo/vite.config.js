// @ts-check
import reactPlugin from '@vitejs/plugin-react'

/**
 * @type { import('vite').UserConfig }
 */
const config = {
  plugins: [reactPlugin],
  server: {
    // hmr: false,
    cors: { origin: '*' }
  }
}

export default config
