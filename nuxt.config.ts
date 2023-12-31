// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    srcDir: 'src',
    devtools: { enabled: true },
    modules: [
        '@nuxtjs/tailwindcss', // https://nuxt.com/modules/tailwindcss
        'nuxt-headlessui', // https://nuxt.com/modules/headlessui
        '@pinia/nuxt', // https://pinia.vuejs.org/ssr/nuxt.html#nuxt-js
        '@vueuse/nuxt', // https://vueuse.org/nuxt/README.html
        'nuxt-icon', // https://nuxt.com/modules/icon
        '@nuxtjs/eslint-module', // https://nuxt.com/modules/eslint
        '@nuxtjs/i18n', // https://nuxt.com/modules/i18n
    ],
    eslint: {
        lintOnStart: false,
        include: ['src/**/*.{js,ts,vue}'],
    },
    i18n: {
        vueI18n: './i18n.config.ts'
    }
})
