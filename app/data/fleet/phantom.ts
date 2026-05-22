import { buildVehicle, fleetImg } from './utils'

const FOLDER = 'phantom'
const img = fleetImg(FOLDER)

export const phantom = buildVehicle(FOLDER, {
  slug: 'rolls-royce-phantom',
  name: 'Phantom',
  marque: 'Rolls-Royce',
  category: 'chauffeur',
  tagline: 'The definitive statement of arrival',
  description:
    'Phantom chauffeur hire for weddings, state occasions, and executive travel, a rear suite where silence, space, and timing are handled without display.',
  intro:
    'Novaire’s Phantom is chosen when the moment demands stillness rather than spectacle. Your chauffeur is briefed on protocol, multi-stop schedules, and discreet routing, from bridal collections in Mayfair to late gala departures. You step out composed; the car has already done the talking.',
  image: img('hero.JPG'),
  heroImage: img('main.JPG'),
  files: ['main.JPG', 'hero.JPG', 'side.JPG', 'interior.PNG', 'wheel.PNG'],
  editorial: [
    {
      image: img('side.JPG'),
      layout: 'feature',
      aspect: 'landscape',
      eyebrow: '01 · Profile',
      title: 'The silhouette that stops the room',
      pullQuote: 'Long bonnet. Upright grille. Zero hurry.',
      body: 'In profile, Phantom is architecture on wheels, the line from grille to tail speaks of permanence, not fashion. Novaire times your approach so the car arrives as the doors open, not a moment after.',
    },
    {
      image: img('interior.PNG'),
      layout: 'editorial',
      aspect: 'portrait',
      eyebrow: '02 · Sanctuary',
      title: 'Rear-suite calm',
      pullQuote: 'Leather, wood, and silence on command.',
      body: 'The rear cabin is a private room in motion, space to rehearse vows, take a call, or simply breathe before you face the room. Chauffeur-driven Phantom hire is about how you feel when you arrive, not how fast you got there.',
      imageRight: true,
    },
    {
      image: img('hero.JPG'),
      layout: 'feature',
      aspect: 'landscape',
      eyebrow: '03 · Presence',
      title: 'Three-quarter theatre',
      pullQuote: 'This is the frame your guests remember.',
      body: 'Paint depth, chrome, and proportion converge in the three-quarter view, the angle of state arrivals and hotel forecourts. We know where to pause so photographers catch the car at its most imperial.',
    },
    {
      image: img('wheel.PNG'),
      layout: 'detail',
      eyebrow: '04 · Detail',
      title: 'Finishing you feel',
      body: 'Centre caps, coach doors, and the weight of closure, Phantom details tell guests this journey was planned with the same care as the seating plan.',
    },
  ],
  highlights: [
    { icon: 'power', label: 'Power', value: '563 hp' },
    { icon: 'speed', label: 'Top speed', value: '155 mph' },
    { icon: 'seats', label: 'Seats', value: '4' },
    { icon: 'experience', label: 'Experience', value: 'Chauffeur' },
  ],
  specs: [
    { label: 'Engine', value: '6.75L twin-turbo V12' },
    { label: '0–60 mph', value: '5.3 sec' },
    { label: 'Drivetrain', value: 'RWD · 8-speed' },
    { label: 'Availability', value: 'UK-wide' },
  ],
  featured: true,
})
