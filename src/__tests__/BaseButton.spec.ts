import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import BaseButton from '@/components/ui/BaseButton.vue'

describe('BaseButton', () => {
  it('renders slot content', () => {
    const wrapper = mount(BaseButton, {
      slots: { default: 'Click me' },
    })
    expect(wrapper.text()).toBe('Click me')
  })

  it('defaults to type="button"', () => {
    const wrapper = mount(BaseButton, { slots: { default: 'Submit' } })
    expect(wrapper.find('button').attributes('type')).toBe('button')
  })

  it('accepts type prop', () => {
    const wrapper = mount(BaseButton, {
      props: { type: 'submit' },
      slots: { default: 'Submit' },
    })
    expect(wrapper.find('button').attributes('type')).toBe('submit')
  })

  it('emits click when clicked', async () => {
    const wrapper = mount(BaseButton, {
      slots: { default: 'Click me' },
    })
    await wrapper.find('button').trigger('click')
    expect(wrapper.emitted('click')).toBeTruthy()
  })
})
