import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import eslintPlugin from 'vite-plugin-eslint'

export default defineConfig({
    plugins:[
        react(),
        eslintPlugin({
            cache: false,
            include: ['./src/**/*.js', './src/**/*.ts', './src/**/*.jsx', './src/**/*.tsx'],
            exclude: [],
          }),
    ],
    build: {
        outDir: 'dist'
    },
    server: {
        open: '/hate-frontend/',
    }
})