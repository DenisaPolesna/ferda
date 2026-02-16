import { config } from '@vue/test-utils'
import { i18n } from '@/i18n'

config.global.plugins = [i18n]

// Use English for all tests so assertions match
;(i18n.global.locale as { value: string }).value = 'en'
