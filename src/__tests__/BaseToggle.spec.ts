import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import BaseToggle from '@/components/ui/BaseToggle.vue'

describe('BaseToggle', () => {
  it('renders toggle', () => {
    const wrapper = mount(BaseToggle, {
      props: { modelValue: false },
    })
    expect(wrapper.find('.base-toggle__input').exists()).toBe(true)
    expect(wrapper.find('.base-toggle__slider').exists()).toBe(true)
  })

  it('emits update:modelValue when toggled', async () => {
    const wrapper = mount(BaseToggle, {
      props: { modelValue: false },
    })
    const input = wrapper.find('.base-toggle__input')
    await input.setValue(true)
    expect(wrapper.emitted('update:modelValue')).toEqual([[true]])
  })

  it('shows checked state when modelValue is true', () => {
    const wrapper = mount(BaseToggle, {
      props: { modelValue: true },
    })
    expect((wrapper.find('.base-toggle__input').element as HTMLInputElement).checked).toBe(true)
  })
})
