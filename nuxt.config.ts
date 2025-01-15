// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: { enabled: true },
    imports: {
        dirs: ['composables/**', 'utils/**', 'stores/**'],
    },
    css: [
        '~/assets/scss/main.scss', // 글로벌로 적용될 SCSS 파일 경로
    ],
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@import "@/assets/scss/_variables.scss";', // _variables.scss 등 공통 파일을 여기에서 불러올 수 있습니다.
                    api: 'modern-compiler', // or "modern"
                },
            },
        },
    },
    components: [
        '~/components',
        { path: '~/components/ui', pathPrefix: false },
        { path: '~/components/domain', pathPrefix: false },
    ],
})
