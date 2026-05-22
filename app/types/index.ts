export type VehicleCategory = 'chauffeur' | 'self-drive' | 'both'

export type FleetCategory = 'chauffeur' | 'self-drive' | 'all'

export type VehicleHighlightIcon = 'power' | 'speed' | 'seats' | 'experience'

export interface VehicleHighlight {
  icon: VehicleHighlightIcon
  label: string
  value: string
}

export type VehicleEditorialLayout = 'feature' | 'editorial' | 'detail'

export type VehicleEditorialAspect = 'landscape' | 'portrait'

export interface VehicleEditorialSection {
  image: string
  layout: VehicleEditorialLayout
  aspect?: VehicleEditorialAspect
  eyebrow: string
  title: string
  body: string
  pullQuote?: string
  imageRight?: boolean
}

export interface Vehicle {
  slug: string
  name: string
  marque: string
  category: VehicleCategory
  tagline: string
  description: string
  intro: string
  heroImage: string
  image: string
  images: string[]
  editorial: VehicleEditorialSection[]
  highlights: VehicleHighlight[]
  specs: { label: string; value: string }[]
  featured?: boolean
}

export interface Service {
  slug: string
  label: string
  title: string
  summary: string
  description: string
  image: string
}
