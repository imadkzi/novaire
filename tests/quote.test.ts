import { describe, expect, it } from 'vitest'
import { validateQuoteBody } from '../server/utils/quote'

describe('validateQuoteBody', () => {
  it('rejects honeypot submissions', () => {
    const result = validateQuoteBody({
      name: 'Test',
      email: 'test@example.com',
      message: 'Valid message here',
      website: 'http://spam.example',
    })
    expect(result.ok).toBe(false)
  })

  it('accepts valid payloads', () => {
    const result = validateQuoteBody({
      name: 'Jane Doe',
      email: 'jane@example.com',
      message: 'Looking to hire for a wedding in July.',
    })
    expect(result.ok).toBe(true)
    if (result.ok) {
      expect(result.data.name).toBe('Jane Doe')
    }
  })

  it('rejects short messages', () => {
    const result = validateQuoteBody({
      name: 'Jane',
      email: 'jane@example.com',
      message: 'Hi',
    })
    expect(result.ok).toBe(false)
  })
})
