import { faqItems } from '~/data/faq'

export function useFaqJsonLd() {
  const config = useRuntimeConfig()
  const siteUrl = config.public.siteUrl as string

  useHead({
    script: [
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqItems.map((item) => ({
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: item.answer,
            },
          })),
          url: `${siteUrl}/faq`,
        }),
      },
    ],
  })
}
