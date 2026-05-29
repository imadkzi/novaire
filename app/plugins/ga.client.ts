export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()
  const gaId = (config.public.gaId as string)?.trim()
  if (!gaId) return

  const { analyticsAllowed, hydrate } = useCookieConsent()

  let loaded = false

  function loadGa() {
    if (loaded || !gaId) return
    loaded = true

    useHead({
      script: [
        {
          src: `https://www.googletagmanager.com/gtag/js?id=${gaId}`,
          async: true,
        },
        {
          innerHTML: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gaId}');
          `,
        },
      ],
    })

    const router = useRouter()
    router.afterEach((to) => {
      if (typeof window.gtag === 'function') {
        window.gtag('config', gaId, { page_path: to.fullPath })
      }
    })
  }

  if (import.meta.client) {
    hydrate()

    watch(
      analyticsAllowed,
      (allowed) => {
        if (allowed) loadGa()
      },
      { immediate: true },
    )
  }
})

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}
