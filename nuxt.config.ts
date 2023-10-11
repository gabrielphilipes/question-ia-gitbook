// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: 'src',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss', // https://nuxt.com/modules/tailwindcss
    'nuxt-headlessui', // https://nuxt.com/modules/headlessui
  ]
})
