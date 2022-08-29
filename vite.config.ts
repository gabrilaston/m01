import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: './',
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "./src/styles/scssConfig.scss";' // 添加公共样式
      }
    }  
  },
})
