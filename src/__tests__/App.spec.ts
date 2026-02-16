import { describe, it, expect, vi, beforeEach } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import App from '@/App.vue'
import DomainView from '@/views/DomainView.vue'
import { mockDomainDetail } from './fixtures/domain'

describe('App', () => {
  beforeEach(() => {
    vi.stubGlobal(
      'fetch',
      vi.fn().mockResolvedValue({
        ok: true,
        json: () => Promise.resolve({}),
      }),
    )
  })

  it('renders app structure', () => {
    const wrapper = shallowMount(App)
    expect(wrapper.find('.app').exists()).toBe(true)
  })

  it('shows loading initially', () => {
    const wrapper = shallowMount(App)
    expect(wrapper.find('.app__skeleton').exists()).toBe(true)
  })

  it('shows error when fetch fails', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn().mockResolvedValue({
        ok: false,
        status: 404,
      }),
    )

    const wrapper = shallowMount(App)
    await new Promise((resolve) => setTimeout(resolve, 0))
    expect(wrapper.find('.app__error').exists()).toBe(true)
  })

  it('shows DomainView after fetch', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn().mockResolvedValue({
        ok: true,
        json: () => Promise.resolve(mockDomainDetail),
      }),
    )

    const wrapper = shallowMount(App, {
      global: {
        stubs: {
          DomainViewAsync: DomainView,
        },
      },
    })
    await new Promise((resolve) => setTimeout(resolve, 0))
    expect(wrapper.find('.app__skeleton').exists()).toBe(false)
    expect(wrapper.findComponent(DomainView).exists()).toBe(true)
  })
})
