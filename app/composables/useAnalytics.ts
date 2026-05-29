export function useAnalytics() {
  const { analyticsAllowed } = useCookieConsent()

  function trackEvent(name: string, params?: Record<string, string | number | boolean>) {
    if (!import.meta.client || !analyticsAllowed.value) return
    if (typeof window.gtag !== 'function') return
    window.gtag('event', name, params)
  }

  function trackGenerateLead(params?: Record<string, string>) {
    trackEvent('generate_lead', params)
  }

  function trackSelectItem(itemId: string, itemName: string) {
    trackEvent('select_item', {
      item_list_id: 'fleet',
      item_id: itemId,
      item_name: itemName,
    })
  }

  return { trackEvent, trackGenerateLead, trackSelectItem }
}
