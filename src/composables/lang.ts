import { LangLocales } from '~/types/LangLocales'

export const text = (text: keyof LangLocales) => {
    const { t } = useI18n()
    return t(text)
}
