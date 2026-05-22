import type { Vehicle, VehicleCategory } from '~/types'
import { blackCullinan } from './black-cullinan'
import { dawn } from './dawn'
import { greyCullinan } from './grey-cullinan'
import { huracan } from './huracan'
import { phantom } from './phantom'
import { sf90 } from './sf90'

export function vehicleCategoryLabel(category: VehicleCategory): string {
  if (category === 'both') return 'Chauffeur & self drive'
  if (category === 'chauffeur') return 'Chauffeur'
  return 'Self drive'
}

export function vehicleCategoryLabelLong(category: VehicleCategory): string {
  if (category === 'both') return 'Chauffeur driven & self drive'
  if (category === 'chauffeur') return 'Chauffeur driven'
  return 'Self drive'
}

export function matchesFleetFilter(
  category: VehicleCategory,
  filter: 'chauffeur' | 'self-drive',
): boolean {
  return category === filter || category === 'both'
}

export const fleet: Vehicle[] = [
  phantom,
  dawn,
  sf90,
  huracan,
  blackCullinan,
  greyCullinan,
]

export function getVehicle(slug: string): Vehicle | undefined {
  return fleet.find((v) => v.slug === slug)
}

export function getFeaturedFleet(): Vehicle[] {
  return fleet.filter((v) => v.featured)
}
