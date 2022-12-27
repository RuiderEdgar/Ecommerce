import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                router: resolve(__dirname, 'router/thankYou.html'),
            },
        },
    },
})