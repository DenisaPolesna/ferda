import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import DomainHeader from '@/components/domain/DomainHeader.vue'

describe('DomainHeader', () => {
  it('renders domain name and verbose toggle', () => {
    const wrapper = mount(DomainHeader, {
      props: { domainName: 'example.cz', verbose: false },
    })
    expect(wrapper.text()).toContain('example.cz')
    expect(wrapper.text()).toContain('Verbose view')
    expect(wrapper.find('.base-toggle__input').exists()).toBe(true)
  })

  it('emits update:verbose when toggle is changed', async () => {
    const wrapper = mount(DomainHeader, {
      props: { domainName: 'test.cz', verbose: false },
    })
    await wrapper.find('.base-toggle__input').setValue(true)
    expect(wrapper.emitted('update:verbose')).toEqual([[true]])
  })
})
