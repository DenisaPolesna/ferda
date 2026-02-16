import { createI18n } from 'vue-i18n'
import cs from './locales/cs'
import en from './locales/en'

export const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: 'en',
  fallbackLocale: 'cs',
  messages: {
    cs,
    en,
  },
})
