import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import DomainDetailSkeleton from '@/components/domain/DomainDetailSkeleton.vue'

describe('DomainDetailSkeleton', () => {
  it('renders layout with header, main and aside sections', () => {
    const wrapper = mount(DomainDetailSkeleton)
    expect(wrapper.find('.domain-detail-skeleton').exists()).toBe(true)
    expect(wrapper.find('.domain-detail-skeleton__header').exists()).toBe(true)
    expect(wrapper.find('.domain-detail-skeleton__layout').exists()).toBe(true)
    expect(wrapper.find('.domain-detail-skeleton__main').exists()).toBe(true)
    expect(wrapper.find('.domain-detail-skeleton__aside').exists()).toBe(true)
  })

  it('shows header section by default', () => {
    const wrapper = mount(DomainDetailSkeleton)
    expect(wrapper.find('.domain-detail-skeleton__title').exists()).toBe(true)
    expect(wrapper.find('.domain-detail-skeleton__verbose').exists()).toBe(true)
  })

  it('hides header when showHeader is false', () => {
    const wrapper = mount(DomainDetailSkeleton, {
      props: { showHeader: false },
    })
    expect(wrapper.find('.domain-detail-skeleton__header').exists()).toBe(false)
  })

  it('renders 3 cards in main section', () => {
    const wrapper = mount(DomainDetailSkeleton)
    const mainCards = wrapper.find('.domain-detail-skeleton__main').findAll('.domain-detail-skeleton__card')
    expect(mainCards).toHaveLength(3)
  })

  it('renders 3 cards in aside section', () => {
    const wrapper = mount(DomainDetailSkeleton)
    const asideCards = wrapper.find('.domain-detail-skeleton__aside').findAll('.domain-detail-skeleton__card')
    expect(asideCards).toHaveLength(3)
  })

  it('renders BaseSkeleton components for shimmer effect', () => {
    const wrapper = mount(DomainDetailSkeleton)
    expect(wrapper.findAll('.base-skeleton').length).toBeGreaterThan(0)
  })
})
