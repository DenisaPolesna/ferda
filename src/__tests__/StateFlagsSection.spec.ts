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

  it('groups verbose flags into columns by layout', () => {
    const stateFlags = {
      flags: [
        { name: 'expired', active: false, description: 'Domain expired' },
        { name: 'serverBlocked', active: false, description: 'Administratively blocked' },
        { name: 'serverInzoneManual', active: false, description: 'In zone' },
      ],
      groups: [],
    }
    const wrapper = mount(StateFlagsSection, {
      props: { stateFlags, verbose: true },
    })
    const columns = wrapper.findAll('.state-flags-section__column')
    expect(columns).toHaveLength(3)
    expect(columns[0]!.find('.state-flags-section__flag span')?.text()).toBe(
      'Administratively blocked',
    )
    expect(columns[1]!.find('.state-flags-section__flag span')?.text()).toBe('In zone')
    expect(columns[2]!.find('.state-flags-section__flag span')?.text()).toBe(
      'Domain expired',
    )
  })

  it('sorts unknown verbose flags alphabetically in third column', () => {
    const stateFlags = {
      flags: [
        { name: 'c', active: false, description: 'Zebra' },
        { name: 'a', active: true, description: 'Apple' },
      ],
      groups: [],
    }
    const wrapper = mount(StateFlagsSection, {
      props: { stateFlags, verbose: true },
    })
    const flagTexts = wrapper
      .findAll('.state-flags-section__flag span')
      .map((el) => el.text())
    expect(flagTexts).toEqual(['Apple', 'Zebra'])
  })
})
