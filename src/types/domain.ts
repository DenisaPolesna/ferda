export interface DnsEntry {
  name: string
  ip_address: string
}

export interface NsSet {
  handle: string
  registrar: string
  dns: DnsEntry[]
}

export interface KeySet {
  handle: string
  registrar: string
  dns_keys: string[]
}

export interface ContactPublish {
  organization: boolean
  name: boolean
}

export interface Contact {
  handle: string
  organization: string
  name: string
  publish: ContactPublish
}

export interface EventEntry {
  timestamp: string
  registrar_handle: string
}

export interface Events {
  registered: EventEntry | null
  transferred: EventEntry | null
  updated: EventEntry | null
  unregistered: EventEntry | null
}

export interface StateFlag {
  name: string
  active: boolean
  description: string
}

export interface StateFlags {
  flags: StateFlag[]
  groups: string[][]
}

export interface DomainDetail {
  fqdn: string
  nsset: NsSet
  keyset: KeySet
  owner: Contact
  sponsoring_registrar: string
  administrative_contacts: Contact[]
  expires_at: string
  events: Events
  state_flags: StateFlags
}
