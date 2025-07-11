import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: '/LP/', // 👈 thêm dòng này
  plugins: [vue()]
})
