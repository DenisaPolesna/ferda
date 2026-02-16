import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import AppSidebar from '@/components/layout/AppSidebar.vue'

describe('AppSidebar', () => {
  it('renders section title and nav items', () => {
    const wrapper = mount(AppSidebar)
    expect(wrapper.text()).toContain('APPLICATIONS')
    expect(wrapper.text()).toContain('Registry')
    expect(wrapper.find('.app-sidebar__item--active').exists()).toBe(true)
  })
})
