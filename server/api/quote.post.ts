import {
  formatQuoteEmail,
  redactQuoteForLog,
  validateQuoteBody,
  type QuotePayload,
} from '../utils/quote'

async function sendCrmWebhook(url: string, payload: QuotePayload) {
  try {
    await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        source: 'novaire-website',
        submittedAt: new Date().toISOString(),
        ...payload,
      }),
    })
  } catch {
    // Non-blocking: email delivery is primary
  }
}

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const rawBody = await readBody(event)
  const validated = validateQuoteBody(rawBody)

  if (!validated.ok) {
    throw createError({ statusCode: 400, message: validated.message })
  }

  const body = validated.data
  const to = config.quoteToEmail as string
  const apiKey = config.resendApiKey as string
  const from = (config.quoteFromEmail as string) || 'Novaire <enquiries@novaire.co.uk>'
  const crmWebhook = (config.crmWebhookUrl as string)?.trim()
  const text = formatQuoteEmail(body)

  if (apiKey) {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: body.email,
        subject: `Quote enquiry from ${body.name}`,
        text,
      }),
    })
    if (!res.ok) {
      throw createError({ statusCode: 502, message: 'Failed to send email' })
    }
    if (crmWebhook) await sendCrmWebhook(crmWebhook, body)
    return { ok: true }
  }

  if (import.meta.dev) {
    console.info(redactQuoteForLog(body))
    return { ok: true, dev: true }
  }

  throw createError({
    statusCode: 503,
    message: 'Configure NUXT_RESEND_API_KEY or NUXT_PUBLIC_FORMSPREE_ID',
  })
})
