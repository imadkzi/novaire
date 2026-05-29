export interface QuotePayload {
  name: string
  email: string
  phone?: string
  service?: string
  journeyType?: string
  pickupFrom?: string
  dropoffTo?: string
  vehicle?: string
  vehicles?: string[]
  date?: string
  location?: string
  guestCount?: string
  experience?: string
  message: string
  website?: string
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const LIMITS = {
  name: 120,
  email: 254,
  phone: 30,
  service: 120,
  journeyType: 20,
  pickupFrom: 300,
  dropoffTo: 300,
  vehicle: 500,
  date: 80,
  location: 300,
  guestCount: 20,
  experience: 40,
  message: 5000,
  website: 200,
  vehicles: 12,
  vehicleSlug: 80,
} as const

function trimStr(value: unknown, max: number): string | undefined {
  if (value == null || value === '') return undefined
  const s = String(value).trim()
  if (!s) return undefined
  return s.slice(0, max)
}

function trimArray(value: unknown, maxItems: number, itemMax: number): string[] | undefined {
  if (!Array.isArray(value)) return undefined
  const items = value
    .map((v) => String(v).trim().slice(0, itemMax))
    .filter(Boolean)
    .slice(0, maxItems)
  return items.length ? items : undefined
}

export function validateQuoteBody(
  body: unknown,
): { ok: true; data: QuotePayload } | { ok: false; message: string } {
  if (!body || typeof body !== 'object') {
    return { ok: false, message: 'Invalid request body' }
  }

  const raw = body as Record<string, unknown>

  if (raw.website && String(raw.website).trim()) {
    return { ok: false, message: 'Invalid submission' }
  }

  const name = trimStr(raw.name, LIMITS.name)
  const email = trimStr(raw.email, LIMITS.email)
  const message = trimStr(raw.message, LIMITS.message)

  if (!name || !email || !message) {
    return { ok: false, message: 'Missing required fields' }
  }

  if (!EMAIL_RE.test(email)) {
    return { ok: false, message: 'Invalid email address' }
  }

  if (message.length < 10) {
    return { ok: false, message: 'Message is too short' }
  }

  const phone = trimStr(raw.phone, LIMITS.phone)
  if (phone && !/^\+?[0-9\s()\-]{7,20}$/.test(phone)) {
    return { ok: false, message: 'Invalid phone number' }
  }

  return {
    ok: true,
    data: {
      name,
      email,
      phone,
      service: trimStr(raw.service, LIMITS.service),
      journeyType: trimStr(raw.journeyType, LIMITS.journeyType),
      pickupFrom: trimStr(raw.pickupFrom, LIMITS.pickupFrom),
      dropoffTo: trimStr(raw.dropoffTo, LIMITS.dropoffTo),
      experience: trimStr(raw.experience, LIMITS.experience),
      vehicle: trimStr(raw.vehicle, LIMITS.vehicle),
      vehicles: trimArray(raw.vehicles, LIMITS.vehicles, LIMITS.vehicleSlug),
      date: trimStr(raw.date, LIMITS.date),
      location: trimStr(raw.location, LIMITS.location),
      guestCount: trimStr(raw.guestCount, LIMITS.guestCount),
      message,
    },
  }
}

export function formatQuoteEmail(body: QuotePayload): string {
  return [
    `Name: ${body.name}`,
    `Email: ${body.email}`,
    body.phone && `Phone: ${body.phone}`,
    body.service && `Service: ${body.service}`,
    body.journeyType && `Journey type: ${body.journeyType}`,
    body.pickupFrom && `From: ${body.pickupFrom}`,
    body.dropoffTo && `To: ${body.dropoffTo}`,
    body.experience && `Experience: ${body.experience}`,
    body.vehicle && `Vehicle: ${body.vehicle}`,
    body.vehicles?.length && `Preferred vehicles: ${body.vehicles.join(', ')}`,
    body.date && `Date: ${body.date}`,
    body.location && `Location: ${body.location}`,
    body.guestCount && `Guest count: ${body.guestCount}`,
    '',
    body.message,
  ]
    .filter(Boolean)
    .join('\n')
}

export function redactQuoteForLog(body: QuotePayload): string {
  return `[quote] ${body.name} <${body.email.slice(0, 3)}…> — ${body.service ?? 'general'} (${body.message.length} chars)`
}
