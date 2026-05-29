import type { Service } from '~/types'
import { images } from '~/data/images'

export const services: Service[] = [
  {
    slug: 'weddings',
    label: 'Weddings',
    formLabel: 'Wedding',
    title: 'Weddings',
    summary: 'Your timeline, choreographed to the minute',
    description:
      'From morning collections to the last dance departure, we align transport with your order of service, venues, photo holds, and family movements included. Chauffeurs are briefed in advance so you arrive composed, not rushed.',
    image: images.wedding,
  },
  {
    slug: 'galas',
    label: 'Galas',
    formLabel: 'Gala / Black tie',
    title: 'Galas & Black Tie',
    summary: 'The kerb moment, perfectly timed',
    description:
      'Charity evenings, award nights, and members’ clubs need more than a car at the door. We coordinate approach, pause, and exit, chauffeur-driven when you want composure, self-drive when you want impact, while you focus on the room inside.',
    image: images.gala,
  },
  {
    slug: 'airport',
    label: 'Airport',
    formLabel: 'Airport transfer',
    title: 'Luxury Airport Transfers',
    summary: 'Runway to residence without friction',
    description:
      'Flight tracking, meet-and-greet, and calm progress from terminal to address. Whether you are landing after a long haul or coordinating guests to their hotel, every transfer is paced for ease, not hurry.',
    image: images.airport,
  },
  {
    slug: 'film',
    label: 'Production',
    formLabel: 'Film / Music video',
    title: 'Film & Music Video',
    summary: 'Pace that matches your unit',
    description:
      'Flexible hold times, agreed routes, and vehicles prepared before call time. We support convoy shots, artist arrivals, and fast-moving crews, chauffeur or self-drive, with briefing and handover that respect the schedule.',
    image: images.film,
  },
  {
    slug: 'self-drive',
    label: 'Self drive',
    formLabel: 'Self-drive supercar',
    title: 'Self-Drive Supercars',
    summary: 'The wheel is yours, we set the stage',
    description:
      'Full briefing on controls, modes, and route before you leave. Premium insurance options available. Built for weekends, content days, and clients who want to drive the experience themselves.',
    image: images.selfDrive,
  },
  {
    slug: 'chauffeur',
    label: 'Chauffeur',
    formLabel: 'Chauffeured hire',
    title: 'Chauffeured Luxury',
    summary: 'Anticipation before you ask',
    description:
      'Professional chauffeurs, discreet presentation, and multi-stop days executed without drama. From board-level transfers to countryside estates, service is paced around your diary, not a booking reference.',
    image: images.chauffeur,
  },
]

export const serviceFormLabels = services.map((s) => s.formLabel)

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug)
}

/** Homepage filmstrip: weddings, self-drive, film & music video */
export function getHomeFeaturedServices(): Service[] {
  const slugs = ['weddings', 'self-drive', 'film'] as const
  return slugs.map((slug) => getServiceBySlug(slug)).filter((s): s is Service => Boolean(s))
}

/** Map ?service= slug (or legacy title) to form select value */
export function resolveServiceFormValue(query: string): string {
  if (!query.trim()) return ''
  const normalized = query.trim().toLowerCase()
  const bySlug = services.find((s) => s.slug === normalized)
  if (bySlug) return bySlug.formLabel
  const byFormLabel = services.find((s) => s.formLabel.toLowerCase() === normalized)
  if (byFormLabel) return byFormLabel.formLabel
  const byTitle = services.find((s) => s.title.toLowerCase() === normalized)
  if (byTitle) return byTitle.formLabel
  return query
}
