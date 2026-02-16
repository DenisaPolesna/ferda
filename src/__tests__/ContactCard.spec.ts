import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ContactCard from '@/components/domain/contact/ContactCard.vue'
import { mockContact, mockContactAdmin, mockContactHidden } from './fixtures/domain'

describe('ContactCard', () => {
  it('renders contact with title', () => {
    const wrapper = mount(ContactCard, {
      props: { title: 'Owner:', contact: mockContact },
    })
    expect(wrapper.text()).toContain('Owner:')
    expect(wrapper.text()).toContain('ARCIKANCLER')
    expect(wrapper.text()).toContain('Neviditelná univerzita')
    expect(wrapper.text()).toContain('Vzoromil Výsměšek')
  })

  it('renders administrative contact with title', () => {
    const wrapper = mount(ContactCard, {
      props: { title: 'Administrative contact:', contact: mockContactAdmin },
    })
    expect(wrapper.text()).toContain('Administrative contact:')
    expect(wrapper.text()).toContain('KNIHOVNIK')
    expect(wrapper.text()).toContain('Knihovník')
  })

  it('renders link with handle', () => {
    const wrapper = mount(ContactCard, {
      props: { title: 'Owner:', contact: mockContact },
    })
    expect(wrapper.find(`a[href="#${mockContact.handle}"]`).exists()).toBe(true)
  })

  it('shows correct icons for published contact', () => {
    const wrapper = mount(ContactCard, {
      props: { title: 'Owner:', contact: mockContact },
    })
    expect(wrapper.findAll('.contact-card__icon--published').length).toBe(2)
    expect(wrapper.find('.pi-eye').exists()).toBe(true)
  })

  it('shows correct icons for hidden contact', () => {
    const wrapper = mount(ContactCard, {
      props: { title: 'Owner:', contact: mockContactHidden },
    })
    expect(wrapper.findAll('.contact-card__icon--hidden').length).toBe(2)
    expect(wrapper.find('.pi-eye-slash').exists()).toBe(true)
  })
})
