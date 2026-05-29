import type { Vehicle } from '~/types'

export function useVehicleJsonLd(vehicle: Vehicle) {
  const config = useRuntimeConfig()
  const siteUrl = config.public.siteUrl as string
  const url = `${siteUrl}/fleet/${vehicle.slug}`
  const image = vehicle.image.startsWith('http') ? vehicle.image : `${siteUrl}${vehicle.image}`

  useHead({
    script: [
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Product',
          name: `${vehicle.marque} ${vehicle.name}`,
          description: vehicle.description,
          image,
          url,
          brand: {
            '@type': 'Brand',
            name: vehicle.marque,
          },
          offers: {
            '@type': 'Offer',
            availability: 'https://schema.org/InStock',
            priceCurrency: 'GBP',
            url: `${siteUrl}/contact?vehicle=${encodeURIComponent(`${vehicle.marque} ${vehicle.name}`)}`,
          },
        }),
      },
    ],
  })
}
