import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // eslint-disable-next-line no-undef
  const env = loadEnv(mode, process.cwd())
  console.log('env: ', env)

  return {
    resolve: {
      // 别名
      alias: {
        // eslint-disable-next-line no-undef
        '@': resolve(__dirname, './src')
      }
    },
    // 开发服务器配置
    server: {
      host: '0.0.0.0'
    },

    plugins: [react()]
  }
})
