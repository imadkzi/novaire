import type { Vehicle, VehicleCategory } from '~/types'
import { blackCullinan } from './black-cullinan'
import { dawn } from './dawn'
import { greyCullinan } from './grey-cullinan'
import { huracan } from './huracan'
import { orangeHuracanEvo } from './orange-huracan-evo'
import { phantom } from './phantom'
import { purpleHuracan } from './purple-huracan'
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
  orangeHuracanEvo,
  purpleHuracan,
  blackCullinan,
  greyCullinan,
]

export function getVehicle(slug: string): Vehicle | undefined {
  return fleet.find((v) => v.slug === slug)
}

export function getFeaturedFleet(): Vehicle[] {
  return fleet.filter((v) => v.featured)
}

function relatedScore(candidate: Vehicle, current: Vehicle): number {
  let score = 0
  if (candidate.category === current.category) score += 3
  else if (candidate.category === 'both' || current.category === 'both') score += 2
  if (candidate.marque === current.marque) score += 1
  return score
}

export function getRelatedVehicles(vehicle: Vehicle, limit = 3): Vehicle[] {
  return fleet
    .filter((v) => v.slug !== vehicle.slug)
    .sort((a, b) => relatedScore(b, vehicle) - relatedScore(a, vehicle))
    .slice(0, limit)
}

export function getPopularServiceSlugsForVehicle(category: VehicleCategory): string[] {
  if (category === 'self-drive') return ['self-drive', 'film']
  if (category === 'chauffeur') return ['weddings', 'galas', 'airport', 'chauffeur']
  return ['weddings', 'airport', 'film', 'chauffeur']
}
