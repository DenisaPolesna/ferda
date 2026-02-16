import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { i18n } from '@/i18n'
import AppHeaderNav from '@/components/layout/header/AppHeaderNav.vue'

describe('AppHeaderNav', () => {
  it('renders title and menu button', () => {
    const wrapper = mount(AppHeaderNav)
    expect(wrapper.text()).toContain('Ferda')
    expect(wrapper.find(`button[aria-label="${i18n.global.t('nav.menu')}"]`).exists()).toBe(true)
    expect(wrapper.find('.app-header-nav__title').text()).toBe('Ferda')
  })
})
