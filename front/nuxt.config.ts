export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: { enabled: true },
    plugins: [
        '~/plugins/axios.ts',
    ],
    buildDir: '../back/public',
    imports: {
        dirs: ['composables/**', 'utils/**', 'stores/**'],
    },
    css: [
        '~/assets/scss/main.scss',
    ],
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@import "@/assets/scss/_variables.scss";',
                    api: 'modern-compiler',
                },
            },
        },
    },
    components: [
        '~/components',
        { path: '~/components/ui', pathPrefix: false },
        { path: '~/components/domain', pathPrefix: false },
    ],
    runtimeConfig: {
        public: {
            apiBase: process.env.API_BASE_URL || 'http://localhost:5001'
        }
    }
})
