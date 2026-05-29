import { buildVehicle, fleetImg } from './utils'

const FOLDER = 'orange-huracan'
const img = fleetImg(FOLDER)

export const orangeHuracanEvo = buildVehicle(FOLDER, {
  slug: 'lamborghini-huracan-evo',
  name: 'Huracán EVO',
  marque: 'Lamborghini',
  category: 'self-drive',
  tagline: 'Arancio heat. EVO precision. Maximum presence.',
  description:
    'Lamborghini Huracán EVO in Arancio orange, self-drive hire for launches, nights out, and content where the car must do the talking before the driver steps out.',
  intro:
    'The EVO feels tighter and more deliberate, steering response, braking confidence, and a cabin that makes you want the next corner. Novaire handover is calm and thorough: controls, mirrors, camera-safe routes, and the small details that keep the experience sharp from the first start-up.',
  image: img('hero.png'),
  heroImage: img('main.png'),
  files: ['main.png', 'hero.png', 'interior.png', 'seat.png', 'wheel.png'],
  editorial: [
    {
      image: img('hero.png'),
      layout: 'feature',
      aspect: 'landscape',
      eyebrow: '01 · Arancio',
      title: 'Orange that reads at speed',
      pullQuote: 'Not subtle. Not supposed to be.',
      body: 'Arancio paint turns every arrival into a headline, it holds colour under flash, sodium streetlight, and golden hour. The result is a car that photographs exactly as loud as it feels.',
    },
    {
      image: img('interior.png'),
      layout: 'editorial',
      aspect: 'portrait',
      eyebrow: '02 · EVO cockpit',
      title: 'Designed to be driven',
      pullQuote: 'Theatre with feedback.',
      body: 'Switchgear and sightlines are simple once you know them. We walk you through drive modes, camera angles, and the “first 10 minutes” so the learning curve never appears on film.',
      imageRight: false,
    },
    {
      image: img('seat.png'),
      layout: 'editorial',
      aspect: 'portrait',
      eyebrow: '03 · The moment',
      title: 'Arrive, pause, step out',
      pullQuote: 'Doors up. Heart rate down.',
      body: 'This is the option for clients who want a controlled scene: venue approach, kerbside position, and the kind of exit that looks rehearsed without being staged.',
      imageRight: true,
    },
    {
      image: img('wheel.png'),
      layout: 'detail',
      eyebrow: '04 · Detail',
      title: 'Stance in one crop',
      body: 'Wheels, calipers, and tyre shoulders do the heavy lifting for content. Delivered washed, checked, and ready for camera, not “after a quick rinse”.',
    },
  ],
  highlights: [
    { icon: 'power', label: 'Power', value: '640 hp' },
    { icon: 'speed', label: 'Top speed', value: '202 mph' },
    { icon: 'seats', label: 'Seats', value: '2' },
    { icon: 'experience', label: 'Experience', value: 'Self drive' },
  ],
  specs: [
    { label: 'Engine', value: '5.2L V10 · AWD' },
    { label: '0–60 mph', value: '2.9 sec' },
    { label: 'Variant', value: 'EVO' },
    { label: 'Availability', value: 'UK-wide' },
  ],
})

