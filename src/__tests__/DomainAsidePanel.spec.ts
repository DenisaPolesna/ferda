import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import DomainAsidePanel from '@/components/domain/DomainAsidePanel.vue'
import { mockDomainDetail } from './fixtures/domain'

describe('DomainAsidePanel', () => {
  it('renders owner ContactCard and other cards', () => {
    const wrapper = mount(DomainAsidePanel, {
      props: { domain: mockDomainDetail, verbose: true },
      global: {
        stubs: {
          ContactCard: { template: '<div data-test="contact-card">Contact</div>' },
          ContactListCard: true,
          NssetCard: { template: '<div data-test="nsset">NSSet</div>' },
          KeysetCard: { template: '<div data-test="keyset">KeySet</div>' },
        },
      },
    })
    expect(wrapper.find('.domain-aside-panel').exists()).toBe(true)
    expect(wrapper.findAll('[data-test="contact-card"]').length).toBeGreaterThan(0)
    expect(wrapper.find('[data-test="nsset"]').exists()).toBe(true)
    expect(wrapper.find('[data-test="keyset"]').exists()).toBe(true)
  })

  it('renders ContactCard for owner and each admin contact when verbose', () => {
    const wrapper = mount(DomainAsidePanel, {
      props: { domain: mockDomainDetail, verbose: true },
      global: {
        stubs: {
          ContactListCard: true,
          NssetCard: true,
          KeysetCard: true,
          ContactCard: { template: '<div data-test="contact-card">Contact</div>' },
        },
      },
    })
    // 1 owner + 2 admin contacts = 3 ContactCards
    expect(wrapper.findAll('[data-test="contact-card"]').length).toBe(3)
  })

  it('renders ContactListCard when not verbose', () => {
    const wrapper = mount(DomainAsidePanel, {
      props: { domain: mockDomainDetail, verbose: false },
      global: {
        stubs: {
          ContactCard: true,
          NssetCard: true,
          KeysetCard: true,
          ContactListCard: { template: '<div data-test="contact-list">Contacts</div>' },
        },
      },
    })
    expect(wrapper.find('[data-test="contact-list"]').exists()).toBe(true)
  })
})
