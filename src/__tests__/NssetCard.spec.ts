import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import NssetCard from '@/components/domain/set/NssetCard.vue'
import { mockNsSet } from './fixtures/domain'

describe('NssetCard', () => {
  it('renders NSSet title and handle', () => {
    const wrapper = mount(NssetCard, { props: { nsset: mockNsSet } })
    expect(wrapper.text()).toContain('NSSet')
    expect(wrapper.text()).toContain('ZEMEPLOCHA-NSSET')
    expect(wrapper.text()).toContain('REG-CZNIC')
  })

  it('renders DNS entries', () => {
    const wrapper = mount(NssetCard, { props: { nsset: mockNsSet } })
    expect(wrapper.text()).toContain('dns.zemeplocha.cz')
    expect(wrapper.text()).toContain('1.1.1.1')
    expect(wrapper.text()).toContain('dns2.zemeplocha.cz')
    expect(wrapper.text()).toContain('2.2.2.2')
  })

  it('renders links with correct hrefs', () => {
    const wrapper = mount(NssetCard, { props: { nsset: mockNsSet } })
    expect(wrapper.find(`a[href="#${mockNsSet.handle}"]`).exists()).toBe(true)
    expect(wrapper.find(`a[href="#${mockNsSet.registrar}"]`).exists()).toBe(true)
  })

  it('renders correct number of DNS entries', () => {
    const wrapper = mount(NssetCard, { props: { nsset: mockNsSet } })
    expect(wrapper.findAll('.nsset-card__dns-list > div').length).toBe(mockNsSet.dns.length)
  })
})
