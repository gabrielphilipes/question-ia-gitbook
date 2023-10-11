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
  ]
})
