import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ContactListCard from '@/components/domain/contact/ContactListCard.vue'
import { mockContactAdmin, mockContactHidden } from './fixtures/domain'

describe('ContactListCard', () => {
  it('renders all contacts', () => {
    const contacts = [mockContactAdmin, mockContactHidden]
    const wrapper = mount(ContactListCard, { props: { contacts } })
    expect(wrapper.text()).toContain('Administrative contacts')
    expect(wrapper.text()).toContain('Knihovník')
    expect(wrapper.text()).toContain('Mrakoplaš')
    expect(wrapper.find(`a[href="#${mockContactAdmin.handle}"]`).exists()).toBe(true)
    expect(wrapper.find(`a[href="#${mockContactHidden.handle}"]`).exists()).toBe(true)
  })

  it('renders correct number of rows', () => {
    const contacts = [mockContactAdmin, mockContactHidden]
    const wrapper = mount(ContactListCard, { props: { contacts } })
    expect(wrapper.findAll('tr').length).toBe(2)
  })
})
