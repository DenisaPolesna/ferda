import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import DomainMainPanel from '@/components/domain/DomainMainPanel.vue'
import { mockEvents, mockStateFlags } from './fixtures/domain'

describe('DomainMainPanel', () => {
  it('renders AuthInfoRow, EventsSection and StateFlagsSection', () => {
    const wrapper = mount(DomainMainPanel, {
      props: {
        domainEvents: mockEvents,
        domainStateFlags: mockStateFlags,
        domainExpiresAt: '2021-01-15T00:00:00Z',
        verbose: true,
      },
      global: {
        stubs: ['AuthInfoRow', 'EventsSection', 'StateFlagsSection'],
      },
    })
    expect(wrapper.find('.domain-main-panel').exists()).toBe(true)
    expect(wrapper.findComponent({ name: 'AuthInfoRow' }).exists()).toBe(true)
    expect(wrapper.findComponent({ name: 'EventsSection' }).exists()).toBe(true)
    expect(wrapper.findComponent({ name: 'StateFlagsSection' }).exists()).toBe(true)
  })
})
