const WINDOW_MS = 60_000
const MAX_REQUESTS = 8

const hits = new Map<string, { count: number; resetAt: number }>()

export default defineEventHandler((event) => {
  if (!event.path.startsWith('/api/quote')) return

  const ip =
    getRequestHeader(event, 'x-forwarded-for')?.split(',')[0]?.trim() ||
    getRequestHeader(event, 'x-real-ip') ||
    event.node.req.socket?.remoteAddress ||
    'unknown'

  const now = Date.now()
  const entry = hits.get(ip)

  if (!entry || now > entry.resetAt) {
    hits.set(ip, { count: 1, resetAt: now + WINDOW_MS })
    return
  }

  entry.count += 1
  if (entry.count > MAX_REQUESTS) {
    throw createError({ statusCode: 429, message: 'Too many requests. Please try again shortly.' })
  }
})
