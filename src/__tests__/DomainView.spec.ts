import { describe, it, expect } from 'vitest'
import { flushPromises, mount } from '@vue/test-utils'
import DomainView from '@/views/DomainView.vue'
import DomainMainPanel from '@/components/domain/DomainMainPanel.vue'
import DomainAsidePanel from '@/components/domain/DomainAsidePanel.vue'
import { mockDomainDetail } from './fixtures/domain'

describe('DomainView', () => {
  it('renders domain view with header and layout', () => {
    const wrapper = mount(DomainView, {
      props: { domain: mockDomainDetail, verbose: false },
      global: {
        stubs: {
          DomainHeader: { template: '<div data-test="domain-header">Header</div>' },
          DomainMainPanel: { template: '<div data-test="domain-main">Main</div>' },
          DomainAsidePanel: { template: '<div data-test="domain-aside">Aside</div>' },
        },
      },
    })
    expect(wrapper.find('.domain-view').exists()).toBe(true)
    expect(wrapper.find('[data-test="domain-header"]').exists()).toBe(true)
    expect(wrapper.find('[data-test="domain-main"]').exists()).toBe(true)
    expect(wrapper.find('[data-test="domain-aside"]').exists()).toBe(true)
  })

  it('passes domain and verbose to child components', async () => {
    const wrapper = mount(DomainView, {
      props: { domain: mockDomainDetail, verbose: true },
      global: { stubs: { DomainHeader: true } },
    })
    await flushPromises()
    const mainPanel = wrapper.findComponent(DomainMainPanel)
    const asidePanel = wrapper.findComponent(DomainAsidePanel)
    expect(mainPanel.props('domainEvents')).toEqual(mockDomainDetail.events)
    expect(mainPanel.props('verbose')).toBe(true)
    expect(asidePanel.props('domain')).toEqual(mockDomainDetail)
    expect(asidePanel.props('verbose')).toBe(true)
  })

  it('emits update:verbose when DomainHeader emits', async () => {
    const wrapper = mount(DomainView, {
      props: { domain: mockDomainDetail, verbose: false },
      global: {
        stubs: {
          DomainHeader: {
            template:
              '<button data-test="toggle" @click="$emit(\'update:verbose\', true)">Toggle</button>',
          },
          DomainMainPanel: true,
          DomainAsidePanel: true,
        },
      },
    })
    await wrapper.find('[data-test="toggle"]').trigger('click')
    expect(wrapper.emitted('update:verbose')).toEqual([[true]])
  })
})
