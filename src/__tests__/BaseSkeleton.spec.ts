import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import BaseSkeleton from '@/components/ui/BaseSkeleton.vue'

describe('BaseSkeleton', () => {
  it('renders skeleton with default props', () => {
    const wrapper = mount(BaseSkeleton)
    expect(wrapper.find('.base-skeleton').exists()).toBe(true)
    expect(wrapper.element.getAttribute('aria-hidden')).toBe('true')
    expect(wrapper.attributes('style')).toContain('width: 100%')
    expect(wrapper.attributes('style')).toContain('height: 1em')
  })

  it('applies circle class when circle prop is true', () => {
    const wrapper = mount(BaseSkeleton, { props: { circle: true } })
    expect(wrapper.find('.base-skeleton--circle').exists()).toBe(true)
  })

  it('does not apply circle class when circle is false', () => {
    const wrapper = mount(BaseSkeleton, { props: { circle: false } })
    expect(wrapper.find('.base-skeleton--circle').exists()).toBe(false)
  })

  it('applies numeric width and height as pixels', () => {
    const wrapper = mount(BaseSkeleton, {
      props: { width: 200, height: 24 },
    })
    expect(wrapper.attributes('style')).toContain('width: 200px')
    expect(wrapper.attributes('style')).toContain('height: 24px')
  })

  it('applies string width and height as-is', () => {
    const wrapper = mount(BaseSkeleton, {
      props: { width: '280px', height: '2rem' },
    })
    expect(wrapper.attributes('style')).toContain('width: 280px')
    expect(wrapper.attributes('style')).toContain('height: 2rem')
  })
})
