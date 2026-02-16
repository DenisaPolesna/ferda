import { describe, it, expect, vi, beforeEach } from 'vitest'
import { flushPromises, mount } from '@vue/test-utils'
import { defineComponent, h } from 'vue'
import { useDomainDetail } from '@/composables/useDomainDetail'
import { mockDomainDetail } from './fixtures/domain'
import { i18n } from '@/i18n'

describe('useDomainDetail', () => {
  beforeEach(() => {
    vi.stubGlobal(
      'fetch',
      vi.fn().mockResolvedValue({
        ok: true,
        json: () => Promise.resolve(mockDomainDetail),
      }),
    )
  })

  it('returns domain and error refs and refetch function', () => {
    const TestComponent = defineComponent({
      setup() {
        const { domain, error, refetch } = useDomainDetail()
        return () => h('div', { 'data-domain': domain.value, 'data-error': error.value, 'data-refetch': !!refetch })
      },
    })
    const wrapper = mount(TestComponent)
    expect(wrapper.attributes('data-refetch')).toBe('true')
  })

  it('fetches domain on mount and populates domain ref', async () => {
    const TestComponent = defineComponent({
      setup() {
        const { domain } = useDomainDetail()
        return () => h('div', {}, domain.value ? domain.value.fqdn : 'loading')
      },
    })
    const wrapper = mount(TestComponent)
    await flushPromises()
    expect(wrapper.text()).toBe(mockDomainDetail.fqdn)
  })

  it('sets error when fetch returns non-ok response', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn().mockResolvedValue({ ok: false, status: 404 }),
    )

    const TestComponent = defineComponent({
      setup() {
        const { error } = useDomainDetail()
        return () => h('div', { 'data-error': error.value })
      },
    })
    const wrapper = mount(TestComponent)
    await flushPromises()
    expect(wrapper.attributes('data-error')).toContain('404')
  })

  it('sets error when fetch rejects', async () => {
    vi.stubGlobal('fetch', vi.fn().mockRejectedValue(new Error('Network error')))

    const TestComponent = defineComponent({
      setup() {
        const { error } = useDomainDetail()
        return () => h('div', { 'data-error': error.value })
      },
    })
    const wrapper = mount(TestComponent)
    await flushPromises()
    expect(wrapper.attributes('data-error')).toBe('Network error')
  })

  it('uses fallback error message for non-Error rejections', async () => {
    vi.stubGlobal('fetch', vi.fn().mockRejectedValue('Unknown error'))

    const TestComponent = defineComponent({
      setup() {
        const { error } = useDomainDetail()
        return () => h('div', { 'data-error': error.value })
      },
    })
    const wrapper = mount(TestComponent)
    await flushPromises()
    expect(wrapper.attributes('data-error')).toBe(
      i18n.global.t('errors.fetchDomain'),
    )
  })

  it('refetch updates domain when called', async () => {
    let refetchFn: () => Promise<void> = () => Promise.resolve()
    const TestComponent = defineComponent({
      setup() {
        const { domain, refetch } = useDomainDetail()
        refetchFn = refetch
        return () => h('div', {}, domain.value ? domain.value.fqdn : 'loading')
      },
    })
    const wrapper = mount(TestComponent)
    await flushPromises()
    expect(wrapper.text()).toBe(mockDomainDetail.fqdn)

    vi.stubGlobal(
      'fetch',
      vi.fn().mockResolvedValue({
        ok: true,
        json: () => Promise.resolve({ ...mockDomainDetail, fqdn: 'other.cz' }),
      }),
    )
    await refetchFn()
    await flushPromises()
    expect(wrapper.text()).toBe('other.cz')
  })

  it('uses custom URL when provided', async () => {
    const customUrl = '/custom-domain.json'
    const fetchMock = vi.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve(mockDomainDetail),
    })
    vi.stubGlobal('fetch', fetchMock)

    const TestComponent = defineComponent({
      setup() {
        useDomainDetail(customUrl)
        return () => h('div')
      },
    })
    mount(TestComponent)
    await flushPromises()
    expect(fetchMock).toHaveBeenCalledWith(customUrl)
  })
})
