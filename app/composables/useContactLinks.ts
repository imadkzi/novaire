export function useContactLinks() {
  const config = useRuntimeConfig()

  const phone = computed(() => (config.public.phoneNumber as string)?.trim() || '')
  const whatsapp = computed(() => (config.public.whatsappNumber as string)?.trim() || '')

  const telHref = computed(() => {
    const digits = phone.value.replace(/[^\d+]/g, '')
    return digits ? `tel:${digits}` : ''
  })

  const whatsappHref = computed(() => {
    const digits = whatsapp.value.replace(/\D/g, '')
    return digits ? `https://wa.me/${digits}` : ''
  })

  return {
    phone,
    whatsapp,
    telHref,
    whatsappHref,
    hasPhone: computed(() => !!telHref.value),
    hasWhatsapp: computed(() => !!whatsappHref.value),
  }
}
