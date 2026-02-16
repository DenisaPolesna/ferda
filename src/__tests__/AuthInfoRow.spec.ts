import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import AuthInfoRow from '@/components/domain/AuthInfoRow.vue'

describe('AuthInfoRow', () => {
  it('renders AuthInfo label and expires date', () => {
    const wrapper = mount(AuthInfoRow, {
      props: { domainExpiresAt: '2021-01-15T00:00:00Z' },
    })
    expect(wrapper.text()).toContain('AuthInfo')
    expect(wrapper.text()).toContain('Expires at:')
  })

  it('shows SHOW button when secret is hidden', () => {
    const wrapper = mount(AuthInfoRow, {
      props: { domainExpiresAt: '2021-01-15' },
    })
    expect(wrapper.text()).toContain('SHOW')
  })

  it('reveals secret when SHOW is clicked', async () => {
    const wrapper = mount(AuthInfoRow, {
      props: { domainExpiresAt: '2021-01-15' },
    })
    const showBtn = wrapper.find('button')
    await showBtn.trigger('click')
    expect(wrapper.text()).toContain('HIDE')
    expect(wrapper.text()).toContain('p4ssw0rd-s3cr3t')
  })

  it('hides secret when HIDE is clicked', async () => {
    const wrapper = mount(AuthInfoRow, {
      props: { domainExpiresAt: '2021-01-15' },
    })
    await wrapper.find('button').trigger('click')
    await wrapper.find('button').trigger('click')
    expect(wrapper.text()).toContain('SHOW')
    expect(wrapper.text()).not.toContain('p4ssw0rd-s3cr3t')
  })
})
