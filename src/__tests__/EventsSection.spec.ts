import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import EventsSection from '@/components/domain/EventsSection.vue'
import { mockEvents } from './fixtures/domain'

describe('EventsSection', () => {
  it('renders Events title', () => {
    const wrapper = mount(EventsSection, { props: { events: mockEvents } })
    expect(wrapper.text()).toContain('Events')
  })

  it('renders event labels', () => {
    const wrapper = mount(EventsSection, { props: { events: mockEvents } })
    expect(wrapper.text()).toContain('Create date')
    expect(wrapper.text()).toContain('Update date')
    expect(wrapper.text()).toContain('Transfer date')
    expect(wrapper.text()).toContain('Delete date')
  })

  it('renders registrar links when events exist', () => {
    const wrapper = mount(EventsSection, { props: { events: mockEvents } })
    expect(wrapper.find('a[href="#REG-CZNIC"]').exists()).toBe(true)
    expect(wrapper.find('a[href="#REG-GENREG"]').exists()).toBe(true)
  })

  it('renders empty date when event is null', () => {
    const wrapper = mount(EventsSection, { props: { events: mockEvents } })
    const dates = wrapper.findAll('.event-date')
    expect(dates[3]?.text()).toBe('')
  })
})
