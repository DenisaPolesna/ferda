import { ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import type { DomainDetail } from '@/types/domain'
import { DOMAIN_DETAIL_URL } from '@/constants'

export function useDomainDetail(url = DOMAIN_DETAIL_URL) {
  const { t } = useI18n()
  const domain = ref<DomainDetail | null>(null)
  const error = ref<string | null>(null)

  async function fetchDomain(): Promise<void> {
    try {
      error.value = null
      const response = await fetch(url)
      if (!response.ok) throw new Error(`HTTP error: ${response.status}`)
      domain.value = (await response.json()) as DomainDetail
    } catch (e) {
      error.value = e instanceof Error ? e.message : t('errors.fetchDomain')
    }
  }

  onMounted(fetchDomain)

  return { domain, error, refetch: fetchDomain }
}
