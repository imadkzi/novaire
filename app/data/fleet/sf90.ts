import { buildVehicle, fleetImg } from './utils'

const FOLDER = 'sf90'
const img = fleetImg(FOLDER)

export const sf90 = buildVehicle(FOLDER, {
  slug: 'ferrari-sf90',
  name: 'SF90',
  marque: 'Ferrari',
  category: 'self-drive',
  tagline: 'Hybrid violence. Maranello control.',
  description:
    'Ferrari SF90 Stradale self-drive hire, 986 hp plug-in hybrid performance for film units, content days, and weekends where pace and presence must coexist.',
  intro:
    'The SF90 is Novaire’s hybrid hypercar for clients who can handle attention and horsepower in equal measure. We brief you on drive modes, braking, and agreed routes before handover, with optional on-set support when the production schedule moves faster than the traffic.',
  image: img('hero.JPG'),
  heroImage: img('main.JPG'),
  files: ['main.JPG', 'hero.JPG', 'interior.PNG', 'seat.PNG', 'wheel.PNG'],
  editorial: [
    {
      image: img('hero.JPG'),
      layout: 'feature',
      aspect: 'landscape',
      eyebrow: '01 · Stance',
      title: '986 hp, zero subtlety',
      pullQuote: 'The hypercar clients ask for by name.',
      body: 'Three electric motors and a twin-turbo V8 deliver combined output that rewrites the horizon, music videos, launch stunts, and private roads where ordinary simply will not do.',
    },
    {
      image: img('interior.PNG'),
      layout: 'editorial',
      aspect: 'portrait',
      eyebrow: '02 · Cockpit',
      title: 'Commitment position',
      pullQuote: 'Paddles, screens, focus, then throttle.',
      body: 'The driving position is pure Ferrari, hands on the wheel, eyes on the road, interfaces kept for commitment not distraction. Our briefing covers modes and recovery before you leave the handover bay.',
      imageRight: false,
    },
    {
      image: img('seat.PNG'),
      layout: 'editorial',
      aspect: 'portrait',
      eyebrow: '03 · Two-seat theatre',
      title: 'Passenger in the drama',
      pullQuote: 'Interior frames that look like cinema.',
      body: 'Bucket seats and contrast stitch place driver and passenger inside the same story, built for two-up content days, through-glass hero shots, and passengers who understand the pace.',
      imageRight: true,
    },
    {
      image: img('wheel.PNG'),
      layout: 'detail',
      eyebrow: '04 · Engineering',
      title: 'Carbon, ceramic, visible',
      body: 'Ceramic brakes and alloy design are part of the narrative, shoot at dusk and the hardware reads as sharply as the bodywork.',
    },
  ],
  highlights: [
    { icon: 'power', label: 'Power', value: '986 hp' },
    { icon: 'speed', label: 'Top speed', value: '211 mph' },
    { icon: 'seats', label: 'Seats', value: '2' },
    { icon: 'experience', label: 'Experience', value: 'Self drive' },
  ],
  specs: [
    { label: 'Engine', value: '4.0L V8 hybrid · AWD' },
    { label: '0–60 mph', value: '2.5 sec' },
    { label: 'Layout', value: 'Plug-in hybrid' },
    { label: 'Availability', value: 'UK-wide' },
  ],
  featured: true,
})
