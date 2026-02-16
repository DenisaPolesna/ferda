import type {
  Contact,
  DomainDetail,
  Events,
  KeySet,
  NsSet,
  StateFlags,
} from '@/types/domain'

export const mockContact: Contact = {
  handle: 'ARCIKANCLER',
  organization: 'Neviditelná univerzita',
  name: 'Vzoromil Výsměšek',
  publish: { organization: true, name: true },
}

export const mockContactAdmin: Contact = {
  handle: 'KNIHOVNIK',
  organization: 'Neviditelná univerzita',
  name: 'Knihovník',
  publish: { organization: true, name: true },
}

export const mockContactHidden: Contact = {
  handle: 'MRAKOPLAS',
  organization: 'Neviditelná univerzita',
  name: 'Mrakoplaš',
  publish: { organization: false, name: false },
}

export const mockEvents: Events = {
  registered: { timestamp: '2002-01-14T14:56:00Z', registrar_handle: 'REG-CZNIC' },
  transferred: { timestamp: '2010-06-10T10:49:20.614Z', registrar_handle: 'REG-GENREG' },
  updated: { timestamp: '2016-12-27T14:12:25.714Z', registrar_handle: 'REG-GENREG' },
  unregistered: null,
}

export const mockNsSet: NsSet = {
  handle: 'ZEMEPLOCHA-NSSET',
  registrar: 'REG-CZNIC',
  dns: [
    { name: 'dns.zemeplocha.cz', ip_address: '1.1.1.1' },
    { name: 'dns2.zemeplocha.cz', ip_address: '2.2.2.2' },
  ],
}

export const mockKeySet: KeySet = {
  handle: 'ZEMEPLOCHA-KEYSET',
  registrar: 'REG-CZNIC',
  dns_keys: ['AwEAAddt2AkLfYGKgiEZB5SmIF8EvrjxNMH6HtxW', 'EA4RJ9Ao6LCWheg8'],
}

export const mockStateFlags: StateFlags = {
  flags: [
    { name: 'serverBlocked', active: false, description: 'Administratively blocked' },
    { name: 'serverDeleteProhibited', active: true, description: 'Deletion forbidden' },
  ],
  groups: [],
}

export const mockDomainDetail: DomainDetail = {
  fqdn: 'neviditelna-univerzita.cz',
  nsset: mockNsSet,
  keyset: mockKeySet,
  owner: mockContact,
  sponsoring_registrar: 'REG-GENREG',
  administrative_contacts: [mockContactAdmin, mockContactHidden],
  expires_at: '2021-01-15T00:00:00Z',
  events: mockEvents,
  state_flags: mockStateFlags,
}
