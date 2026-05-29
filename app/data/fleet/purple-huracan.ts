import { buildVehicle, fleetImg } from './utils'

const FOLDER = 'purple-huracan'
const img = fleetImg(FOLDER)

export const purpleHuracan = buildVehicle(FOLDER, {
  slug: 'lamborghini-huracan-purple',
  name: 'Huracán · Violet',
  marque: 'Lamborghini',
  category: 'self-drive',
  tagline: 'Violet after-dark. Clean lines. No compromises.',
  description:
    'Lamborghini Huracán in deep violet, self-drive hire for late dinners, hotel arrivals, and low-light content that needs shape and colour without looking try-hard.',
  intro:
    'Purple is the quieter flex: still unmistakably Lamborghini, but with a finish that feels curated rather than loud. It suits clients who want the V10 event without the neon energy, and it photographs beautifully in rain, reflections, and city glow.',
  image: img('hero.png'),
  heroImage: img('main.png'),
  files: ['main.png', 'hero.png', 'interior.png', 'seat.png', 'wheel.png'],
  editorial: [
    {
      image: img('hero.png'),
      layout: 'feature',
      aspect: 'landscape',
      eyebrow: '01 · After dark',
      title: 'Colour built for streetlight',
      pullQuote: 'Dark, rich, and impossible to ignore.',
      body: 'Under city glow the paint shifts between ink and violet, giving the silhouette depth instead of glare. Perfect for evenings where the car is part of the look, not the whole story.',
    },
    {
      image: img('interior.png'),
      layout: 'editorial',
      aspect: 'portrait',
      eyebrow: '02 · Cabin',
      title: 'Minimal, focused, intentional',
      pullQuote: 'A cockpit, not a lounge.',
      body: 'We cover the essentials: seating position, visibility, and controls so you feel composed immediately. You get the thrill without the “figuring it out” phase.',
      imageRight: true,
    },
    {
      image: img('seat.png'),
      layout: 'editorial',
      aspect: 'portrait',
      eyebrow: '03 · Composition',
      title: 'Content without chaos',
      pullQuote: 'Reflections. Lines. Restraint.',
      body: 'This car shines in clean frames: hotel porte-cochères, underground parking, and rain-slick streets. Tell us the mood and we’ll suggest routes that match it.',
      imageRight: false,
    },
    {
      image: img('wheel.png'),
      layout: 'detail',
      eyebrow: '04 · Finish',
      title: 'The details stay sharp',
      body: 'Wheels and hardware are prepped for close work, no dull trim, no distractions. Delivered ready for a night out, or a night shoot.',
    },
  ],
  highlights: [
    { icon: 'power', label: 'Power', value: '602 hp' },
    { icon: 'speed', label: 'Top speed', value: '202 mph' },
    { icon: 'seats', label: 'Seats', value: '2' },
    { icon: 'experience', label: 'Experience', value: 'Self drive' },
  ],
  specs: [
    { label: 'Engine', value: '5.2L V10 · AWD' },
    { label: '0–60 mph', value: '3.2 sec' },
    { label: 'Colour', value: 'Violet · after-dark' },
    { label: 'Availability', value: 'UK-wide' },
  ],
})

