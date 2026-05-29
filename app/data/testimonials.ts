export interface Testimonial {
  id: string
  quote: string
  name: string
  /** Role, company, or location */
  context: string
  /** Service name for display */
  service: string
  serviceSlug: string
}

export const testimonials: Testimonial[] = [
  {
    id: 'wedding-phantom',
    quote:
      'I was stressed about getting from the house to the church on time. Our chauffeur had already called the venue and told us when to leave. We had a few minutes to breathe before photos instead of running in heels.',
    name: 'Sarah Mitchell',
    context: 'Wedding, July · Worcestershire',
    service: 'Wedding hire',
    serviceSlug: 'weddings',
  },
  {
    id: 'self-drive-huracan',
    quote:
      'Booked the Huracán for a content day in east London. They walked us through the car properly before we left and it was immaculate. Exactly what we needed for a long shoot day.',
    name: 'James Okonkwo',
    context: 'Content shoot · Shoreditch',
    service: 'Self-drive supercar',
    serviceSlug: 'self-drive',
  },
  {
    id: 'airport-cullinan',
    quote:
      'Flight was late, as they usually are. I did not call anyone. The Cullinan was there when we got through arrivals and the driver already had our bags. At that hour you just want it to work, and it did.',
    name: 'David Hartley',
    context: 'Heathrow pickup · Mayfair',
    service: 'Luxury airport transfer',
    serviceSlug: 'airport',
  },
  {
    id: 'gala-dawn',
    quote:
      'Charity dinner in Mayfair. Driver was on time, knew where to stop for photos, and got us home later without any fuss. Felt easy from start to finish.',
    name: 'Eleanor Price',
    context: 'Charity dinner · London',
    service: 'Gala and black tie',
    serviceSlug: 'galas',
  },
  {
    id: 'film-cullinan',
    quote:
      'Three-day music video with the Cullinan on arrivals and a few driving shots. Chauffeur stayed out of the way until we needed a reposition, which kept the day moving.',
    name: 'Marcus Chen',
    context: 'Music video · North London',
    service: 'Film and music video',
    serviceSlug: 'film',
  },
  {
    id: 'chauffeur-phantom',
    quote:
      'One day, three cities, lots of meetings. Same driver, same car, and he already knew where we were meant to be before I got in each morning. My boss noticed the smoothness more than the Phantom, if I am honest.',
    name: 'Amelia Foster',
    context: 'Roadshow · Manchester and Leeds',
    service: 'Chauffeured luxury',
    serviceSlug: 'chauffeur',
  },
]

export function getHomeTestimonials(): Testimonial[] {
  const ids = ['wedding-phantom', 'self-drive-huracan', 'airport-cullinan'] as const
  return ids.map((id) => testimonials.find((t) => t.id === id)).filter((t): t is Testimonial => Boolean(t))
}
