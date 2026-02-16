import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import KeysetCard from '@/components/domain/set/KeysetCard.vue'
import { mockKeySet } from './fixtures/domain'

describe('KeysetCard', () => {
  it('renders KeySet title and handle', () => {
    const wrapper = mount(KeysetCard, { props: { keyset: mockKeySet } })
    expect(wrapper.text()).toContain('KeySet')
    expect(wrapper.text()).toContain('ZEMEPLOCHA-KEYSET')
    expect(wrapper.text()).toContain('REG-CZNIC')
  })

  it('renders DNS keys', () => {
    const wrapper = mount(KeysetCard, { props: { keyset: mockKeySet } })
    expect(wrapper.text()).toContain('DNS keys')
    mockKeySet.dns_keys.forEach((key) => {
      expect(wrapper.text()).toContain(key)
    })
  })

  it('renders links with correct hrefs', () => {
    const wrapper = mount(KeysetCard, { props: { keyset: mockKeySet } })
    expect(wrapper.find(`a[href="#${mockKeySet.handle}"]`).exists()).toBe(true)
    expect(wrapper.find(`a[href="#${mockKeySet.registrar}"]`).exists()).toBe(true)
  })

  it('renders correct number of DNS keys', () => {
    const wrapper = mount(KeysetCard, { props: { keyset: mockKeySet } })
    expect(wrapper.findAll('.keyset-card__dns-key').length).toBe(mockKeySet.dns_keys.length)
  })
})
