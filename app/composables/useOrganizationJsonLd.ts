export function useOrganizationJsonLd() {
  const config = useRuntimeConfig()
  const siteUrl = config.public.siteUrl as string
  const phone = (config.public.phoneNumber as string)?.trim()

  useHead({
    script: [
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'AutoRental',
          name: 'Novaire',
          url: siteUrl,
          email: 'enquiries@novaire.co.uk',
          ...(phone ? { telephone: phone } : {}),
          areaServed: {
            '@type': 'Country',
            name: 'United Kingdom',
          },
          description:
            'Chauffeured Rolls-Royce and self-drive Ferrari and Lamborghini supercar hire for weddings, galas, airports and film.',
        }),
      },
    ],
  })
}
