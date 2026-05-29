const STORAGE_KEY = 'novaire_cookie_consent'

export type CookieConsentLevel = 'essential' | 'all'

const consent = ref<CookieConsentLevel | null>(null)
const ready = ref(false)

export function useCookieConsent() {
  function readStored(): CookieConsentLevel | null {
    if (!import.meta.client) return null
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored === 'essential' || stored === 'all') return stored
    return null
  }

  function hydrate() {
    consent.value = readStored()
    ready.value = true
  }

  function setConsent(level: CookieConsentLevel) {
    consent.value = level
    if (import.meta.client) {
      localStorage.setItem(STORAGE_KEY, level)
    }
  }

  function acceptAll() {
    setConsent('all')
  }

  function essentialOnly() {
    setConsent('essential')
  }

  const needsBanner = computed(() => ready.value && consent.value === null)

  const analyticsAllowed = computed(() => consent.value === 'all')

  return {
    consent: readonly(consent),
    ready: readonly(ready),
    needsBanner,
    analyticsAllowed,
    hydrate,
    acceptAll,
    essentialOnly,
  }
}
