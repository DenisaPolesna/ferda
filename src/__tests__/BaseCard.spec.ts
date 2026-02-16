import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import BaseCard from '@/components/ui/BaseCard.vue'

describe('BaseCard', () => {
  it('renders with title and slot content', () => {
    const wrapper = mount(BaseCard, {
      props: { title: 'Test Card' },
      slots: { default: '<p>Slot content</p>' },
    })
    expect(wrapper.text()).toContain('Test Card')
    expect(wrapper.text()).toContain('Slot content')
    expect(wrapper.find('.base-card__header').exists()).toBe(true)
    expect(wrapper.find('.base-card__content').exists()).toBe(true)
  })

  it('renders without title when title prop is not provided', () => {
    const wrapper = mount(BaseCard, {
      slots: { default: '<span>Content</span>' },
    })
    expect(wrapper.find('.base-card__header').exists()).toBe(false)
    expect(wrapper.text()).toContain('Content')
  })

  it('renders without header when title is empty string', () => {
    const wrapper = mount(BaseCard, {
      props: { title: '' },
      slots: { default: '<div>Body</div>' },
    })
    expect(wrapper.find('.base-card__header').exists()).toBe(false)
  })
})
