import enUS from '~/lang/en-US.ts'

export default defineI18nConfig(() => ({
    strategy: 'no_prefix',
    locales: [
        {
            code: 'en',
            name: 'English'
        }
    ],
    locale: 'en',
    defaultLocale: 'en',
    messages: {
        en: enUS
    }
}))
