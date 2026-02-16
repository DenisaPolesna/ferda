import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import StateFlagsSection from '@/components/domain/StateFlagsSection.vue'
import { mockStateFlags } from './fixtures/domain'

describe('StateFlagsSection', () => {
  it('renders State flags title', () => {
    const wrapper = mount(StateFlagsSection, {
      props: { stateFlags: mockStateFlags, verbose: true },
    })
    expect(wrapper.text()).toContain('State flags')
  })

  it('renders all flags when verbose', () => {
    const wrapper = mount(StateFlagsSection, {
      props: { stateFlags: mockStateFlags, verbose: true },
    })
    expect(wrapper.text()).toContain('Administratively blocked')
    expect(wrapper.text()).toContain('Deletion forbidden')
  })

  it('renders only active flags when not verbose', () => {
    const wrapper = mount(StateFlagsSection, {
      props: { stateFlags: mockStateFlags, verbose: false },
    })
    expect(wrapper.text()).toContain('Deletion forbidden')
    expect(wrapper.text()).not.toContain('Administratively blocked')
  })

  it('renders correct number of active flags in brief mode', () => {
    const wrapper = mount(StateFlagsSection, {
      props: { stateFlags: mockStateFlags, verbose: false },
    })
    const activeCount = mockStateFlags.flags.filter((f) => f.active).length
    expect(wrapper.findAll('.state-flags-section__flag').length).toBe(activeCount)
  })
})
