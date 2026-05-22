import type { Service } from '~/types'
import { images } from '~/data/images'

export const services: Service[] = [
  {
    slug: 'weddings',
    title: 'Weddings',
    summary: 'Arrivals choreographed to perfection',
    description:
      'From bridal party transfers to evening departures, Novaire pairs the right vehicle with your timeline — discreet, punctual, immaculate.',
    image: images.wedding,
  },
  {
    slug: 'galas',
    title: 'Galas & Black Tie',
    summary: 'Presence without announcement',
    description:
      'Chauffeured arrivals for charity evenings, award ceremonies, and private members events where first impressions are everything.',
    image: images.gala,
  },
  {
    slug: 'airport',
    title: 'Luxury Airport Transfers',
    summary: 'Runway to residence, seamlessly',
    description:
      'Meet-and-greet coordination, flight tracking, and cabin-quiet transfers in Rolls-Royce Phantom, Dawn, and Cullinan.',
    image: images.airport,
  },
  {
    slug: 'film',
    title: 'Film & Music Video',
    summary: 'Supercars for the story',
    description:
      'Self-drive exotics, on-set support, and flexible hire terms for productions that move fast.',
    image: images.film,
  },
  {
    slug: 'self-drive',
    title: 'Self-Drive Supercars',
    summary: 'You take the wheel',
    description:
      'Curated Ferrari SF90 and Lamborghini Huracán — comprehensive briefing, premium insurance options available.',
    image: images.selfDrive,
  },
  {
    slug: 'chauffeur',
    title: 'Chauffeured Luxury',
    summary: 'Travel as an experience',
    description:
      'Professional chauffeurs, immaculately presented vehicles, and service that anticipates rather than reacts.',
    image: images.chauffeur,
  },
]
