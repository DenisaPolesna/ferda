import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import AppHeader from '@/components/layout/header/AppHeader.vue'
import AppHeaderUser from '@/components/layout/header/AppHeaderUser.vue'

describe('AppHeader', () => {
  it('renders header with nav and user', () => {
    const wrapper = mount(AppHeader, {
      global: { stubs: ['AppHeaderNav', 'AppHeaderUser'] },
    })
    expect(wrapper.find('.app-header').exists()).toBe(true)
  })

  it('renders AppHeaderUser', () => {
    const wrapper = mount(AppHeader, {
      global: { stubs: ['AppHeaderNav'] },
    })
    expect(wrapper.findComponent(AppHeaderUser).exists()).toBe(true)
  })
})
