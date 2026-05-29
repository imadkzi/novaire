import { buildVehicle, fleetImg } from './utils'

const FOLDER = 'dawn'
const img = fleetImg(FOLDER)

export const dawn = buildVehicle(FOLDER, {
  slug: 'rolls-royce-dawn',
  name: 'Dawn',
  marque: 'Rolls-Royce',
  category: 'chauffeur',
  tagline: 'Open sky. Closed-door discretion.',
  description:
    'Rolls-Royce Dawn chauffeur hire for premieres, summer evenings, and arrivals that benefit from fresh air, grand touring with the roof down when the moment allows.',
  intro:
    'The Dawn is Novaire’s answer to clients who want Rolls-Royce presence without feeling enclosed. Your chauffeur manages roof timing, kerb position, and route so you arrive unruffled, whether that is a Mayfair premiere or a coast road at golden hour. Drama at the door; ease on the move.',
  image: img('hero.JPG'),
  heroImage: img('main.JPG'),
  files: ['main.JPG', 'hero.JPG', 'side.JPG', 'interior.JPG', 'seats.JPG', 'wheel.PNG'],
  editorial: [
    {
      image: img('hero.JPG'),
      layout: 'feature',
      aspect: 'landscape',
      eyebrow: '01 · Stance',
      title: 'Roof down, room to breathe',
      pullQuote: 'Open air. Unmistakable Rolls-Royce.',
      body: 'With the canopy open, Dawn trades enclosure for theatre, brightwork and proportion read clearly against sky or city light. Novaire positions the car where arrivals need no introduction.',
    },
    {
      image: img('seats.JPG'),
      layout: 'editorial',
      aspect: 'portrait',
      eyebrow: '02 · Inner circle',
      title: 'Two guests, full attention',
      pullQuote: 'Intimacy without compromise.',
      body: 'Rear seating is tailored for the pair you actually brought, stitching, light, and space tuned for conversation before the step-out. Ideal for couples who want impact without a crowd.',
      imageRight: true,
    },
    {
      image: img('side.JPG'),
      layout: 'feature',
      aspect: 'landscape',
      eyebrow: '03 · Profile',
      title: 'Grand touring lines',
      pullQuote: 'Long bonnet. Short hurry.',
      body: 'The Dawn profile is grand touring reduced to essentials, length, grace, and a roofline that suggests distance already travelled. Perfect for coastal runs and members’ club departures.',
    },
    {
      image: img('interior.JPG'),
      layout: 'editorial',
      aspect: 'portrait',
      eyebrow: '04 · Cockpit',
      title: 'Command in comfort',
      pullQuote: 'Your chauffeur. Your pace.',
      body: 'The front cabin balances driver focus with guest comfort, wood, leather, and controls that reward a light touch. Novaire chauffeurs know when to cruise and when to glide.',
      imageRight: false,
    },
    {
      image: img('wheel.PNG'),
      layout: 'detail',
      eyebrow: '05 · Detail',
      title: 'Brightwork that survives flash',
      body: 'Wheel centres and chrome hold their own under paparazzi and floodlight, every Dawn leaves Novaire prepared for the lens as well as the road.',
    },
  ],
  highlights: [
    { icon: 'power', label: 'Power', value: '624 hp' },
    { icon: 'speed', label: 'Top speed', value: '155 mph' },
    { icon: 'seats', label: 'Seats', value: '4' },
    { icon: 'experience', label: 'Experience', value: 'Chauffeur' },
  ],
  specs: [
    { label: 'Engine', value: '6.6L twin-turbo V12' },
    { label: '0–60 mph', value: '4.9 sec' },
    { label: 'Drivetrain', value: 'RWD · 8-speed' },
    { label: 'Availability', value: 'UK-wide' },
  ],
})
