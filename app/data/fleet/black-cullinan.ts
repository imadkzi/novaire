import { buildVehicle, fleetImg } from './utils'

const FOLDER = 'black-cullinan'
const img = fleetImg(FOLDER)

export const blackCullinan = buildVehicle(FOLDER, {
  slug: 'rolls-royce-cullinan-black',
  name: 'Cullinan',
  marque: 'Rolls-Royce',
  category: 'both',
  tagline: 'Onyx presence — elevated in every sense',
  description:
    'Black Badge Cullinan for chauffeur or self-drive — commanding SUV presence, coach doors, and a signature orange cabin for estates, weddings, and executive travel.',
  intro:
    'Novaire’s onyx Cullinan is the Black Badge answer when Phantom height is not enough and the road is. Arrive with a chauffeur for seamless multi-stop days, or take the wheel after a full briefing — rural venues, hotel forecourts, and convoys that need authority without noise.',
  image: img('hero.png'),
  heroImage: img('main.png'),
  files: ['main.png', 'hero.png', 'side.png', 'interior.png', 'seat.png', 'grill.png'],
  editorial: [
    {
      image: img('side.png'),
      layout: 'feature',
      aspect: 'landscape',
      eyebrow: '01 — Profile',
      title: 'Coach doors at SUV scale',
      pullQuote: 'Height without heaviness.',
      body: 'Side-on, the black Cullinan reads as mobile architecture — coach doors open wide for guests in formal dress, without the theatre of stepping up into a traditional SUV.',
    },
    {
      image: img('interior.png'),
      layout: 'editorial',
      aspect: 'portrait',
      eyebrow: '02 — Suite',
      title: 'Warm leather theatre',
      pullQuote: 'Orange against onyx. Unforgettable.',
      body: 'The cabin pairs deep black metalwork with vivid orange leather — a combination that photographs beautifully and feels deliberately chosen. Privacy, space, and lounge silence for principals who travel as a party, not a crowd.',
      imageRight: true,
    },
    {
      image: img('hero.png'),
      layout: 'feature',
      aspect: 'landscape',
      eyebrow: '03 — Arrival',
      title: 'Three-quarter authority',
      pullQuote: 'The frame country houses remember.',
      body: 'Grille depth and paint absorb light in the three-quarter view — ideal for gravel approaches, estate forecourts, and first impressions that need no caption.',
    },
    {
      image: img('seat.png'),
      layout: 'editorial',
      aspect: 'portrait',
      eyebrow: '04 — Rear theatre',
      title: 'Guests who travel elevated',
      pullQuote: 'Not squeezed — seated.',
      body: 'Rear seating places guests above the traffic line — headrest detail and stitch signal occasion before the door opens. Chauffeurs brief on timing; self-drive clients receive the same route guidance.',
      imageRight: false,
    },
    {
      image: img('grill.png'),
      layout: 'detail',
      eyebrow: '05 — Detail',
      title: 'Black Badge intent',
      body: 'Dark chrome and the Spirit of Ecstasy read as purpose, not trim — prepared for floodlit arrivals and early-morning departures alike.',
    },
  ],
  highlights: [
    { icon: 'power', label: 'Power', value: '592 hp' },
    { icon: 'speed', label: 'Top speed', value: '155 mph' },
    { icon: 'seats', label: 'Seats', value: '4' },
    { icon: 'experience', label: 'Experience', value: 'Chauffeur & self drive' },
  ],
  specs: [
    { label: 'Engine', value: '6.75L twin-turbo V12' },
    { label: '0–60 mph', value: '5.0 sec' },
    { label: 'Drivetrain', value: 'AWD · Black Badge' },
    { label: 'Availability', value: 'UK-wide' },
  ],
  featured: true,
})
