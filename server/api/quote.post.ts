export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const body = await readBody<{
    name: string
    email: string
    phone?: string
    service?: string
    vehicle?: string
    date?: string
    message: string
  }>(event)

  if (!body?.name || !body?.email || !body?.message) {
    throw createError({ statusCode: 400, message: 'Missing required fields' })
  }

  const to = config.quoteToEmail as string
  const apiKey = config.resendApiKey as string

  const text = [
    `Name: ${body.name}`,
    `Email: ${body.email}`,
    body.phone && `Phone: ${body.phone}`,
    body.service && `Service: ${body.service}`,
    body.vehicle && `Vehicle: ${body.vehicle}`,
    body.date && `Date: ${body.date}`,
    '',
    body.message,
  ]
    .filter(Boolean)
    .join('\n')

  if (apiKey) {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Novaire <onboarding@resend.dev>',
        to: [to],
        reply_to: body.email,
        subject: `Quote enquiry from ${body.name}`,
        text,
      }),
    })
    if (!res.ok) {
      throw createError({ statusCode: 502, message: 'Failed to send email' })
    }
    return { ok: true }
  }

  // Dev fallback: log when no Resend key
  if (import.meta.dev) {
    console.info('[quote]', text)
    return { ok: true, dev: true }
  }

  throw createError({
    statusCode: 503,
    message: 'Configure NUXT_RESEND_API_KEY or NUXT_PUBLIC_FORMSPREE_ID',
  })
})
