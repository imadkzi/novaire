import { fleet } from '~/data/fleet'

export default defineEventHandler((event) => {
  const config = useRuntimeConfig()
  const base = config.public.siteUrl as string

  const staticRoutes = ['', '/fleet', '/services', '/experience', '/contact', '/faq', '/privacy', '/terms']
  const fleetRoutes = fleet.map((v) => `/fleet/${v.slug}`)

  const urls = [...staticRoutes, ...fleetRoutes]
    .map(
      (path) => `
  <url>
    <loc>${base}${path}</loc>
    <changefreq>weekly</changefreq>
  </url>`,
    )
    .join('')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}
</urlset>`

  setHeader(event, 'Content-Type', 'application/xml')
  return xml
})
