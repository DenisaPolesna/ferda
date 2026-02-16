import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { MOCK_USER_NAME, MOCK_USER_ROLE } from '@/mocks/auth'
import AppHeaderUser from '@/components/layout/header/AppHeaderUser.vue'

describe('AppHeaderUser', () => {
  it('renders user name from auth', () => {
    const wrapper = mount(AppHeaderUser)
    expect(wrapper.text()).toContain(MOCK_USER_NAME.toUpperCase())
  })

  it('toggles menu on button click', async () => {
    const wrapper = mount(AppHeaderUser)
    expect(wrapper.find('.app-header-user__menu').exists()).toBe(false)

    await wrapper.find('.app-header-user__trigger').trigger('click')
    expect(wrapper.find('.app-header-user__menu').exists()).toBe(true)

    await wrapper.find('.app-header-user__trigger').trigger('click')
    expect(wrapper.find('.app-header-user__menu').exists()).toBe(false)
  })

  it('closes menu when clicking outside', async () => {
    const wrapper = mount(AppHeaderUser, {
      attachTo: document.body,
    })

    await wrapper.find('.app-header-user__trigger').trigger('click')
    expect(wrapper.find('.app-header-user__menu').exists()).toBe(true)

    await document.body.click()
    expect(wrapper.find('.app-header-user__menu').exists()).toBe(false)

    wrapper.unmount()
  })

  it('shows user name and role in menu when open', async () => {
    const wrapper = mount(AppHeaderUser)
    await wrapper.find('.app-header-user__trigger').trigger('click')
    expect(wrapper.text()).toContain(MOCK_USER_NAME)
    expect(wrapper.text()).toContain(MOCK_USER_ROLE)
  })
})
