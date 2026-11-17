<<<<<<< HEAD

=======
>>>>>>> 8db309981a72daacc371d1b9e3cb55c3db5dae09
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
<<<<<<< HEAD
  server: {
    host: '0.0.0.0',
    port: 5173,
    strictPort: true,
    allowedHosts: ['mgs-shop']
  }
=======
  base: '/Portfolio/',
>>>>>>> 8db309981a72daacc371d1b9e3cb55c3db5dae09
})
