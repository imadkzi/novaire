export function usePageSeo(options: {
  title: string
  description: string
  image?: string
}) {
  const config = useRuntimeConfig()
  const route = useRoute()
  const siteUrl = config.public.siteUrl as string
  const path = route.path === '/' ? '' : route.path
  const url = `${siteUrl}${path}`
  const image = options.image
    ? options.image.startsWith('http')
      ? options.image
      : `${siteUrl}${options.image}`
    : `${siteUrl}/brand/logo.svg`

  useSeoMeta({
    title: `${options.title} | Novaire`,
    description: options.description,
    ogTitle: options.title,
    ogDescription: options.description,
    ogUrl: url,
    ogImage: image,
    ogType: 'website',
    twitterCard: 'summary_large_image',
    twitterTitle: options.title,
    twitterDescription: options.description,
    twitterImage: image,
  })

  useHead({
    link: [{ rel: 'canonical', href: url }],
  })
}
