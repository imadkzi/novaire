import { describe, expect, it } from 'vitest'
import { matchesFleetFilter } from '../app/data/fleet/index'
import { resolveServiceFormValue } from '../app/data/services'

describe('matchesFleetFilter', () => {
  it('matches chauffeur filter for chauffeur and both', () => {
    expect(matchesFleetFilter('chauffeur', 'chauffeur')).toBe(true)
    expect(matchesFleetFilter('both', 'chauffeur')).toBe(true)
    expect(matchesFleetFilter('self-drive', 'chauffeur')).toBe(false)
  })

  it('matches self-drive filter for self-drive and both', () => {
    expect(matchesFleetFilter('self-drive', 'self-drive')).toBe(true)
    expect(matchesFleetFilter('both', 'self-drive')).toBe(true)
    expect(matchesFleetFilter('chauffeur', 'self-drive')).toBe(false)
  })
})

describe('resolveServiceFormValue', () => {
  it('resolves service slug to form label', () => {
    expect(resolveServiceFormValue('weddings')).toBe('Wedding')
  })

  it('passes through unknown values', () => {
    expect(resolveServiceFormValue('Custom event')).toBe('Custom event')
  })
})
