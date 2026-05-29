import { buildVehicle, fleetImg } from './utils'

const FOLDER = 'grey-cullinan'
const img = fleetImg(FOLDER)

export const greyCullinan = buildVehicle(FOLDER, {
  slug: 'rolls-royce-cullinan-grey',
  name: 'Cullinan',
  marque: 'Rolls-Royce',
  category: 'both',
  tagline: 'Chalk restraint, turquoise theatre within',
  description:
    'Chalk-grey Black Badge Cullinan for chauffeur or self-drive, contemporary understatement outside, signature turquoise leather inside, built for galas and members’ clubs.',
  intro:
    'The grey Cullinan suits clients who prefer quiet confidence on the kerb and bold craft behind closed doors. Novaire coordinates chauffeur timing for black-tie evenings, or hands over the keys after briefing for multi-venue days, presentation, routing, and discretion included either way.',
  image: img('hero.png'),
  heroImage: img('main.png'),
  files: ['main.png', 'hero.png', 'side.png', 'interior.png', 'seat.png', 'grill.png'],
  editorial: [
    {
      image: img('side.png'),
      layout: 'feature',
      aspect: 'landscape',
      eyebrow: '01 · Profile',
      title: 'Chalk lines, commanding height',
      pullQuote: 'Modern Rolls-Royce. No shout.',
      body: 'Chalk paint softens the Cullinan’s mass without diminishing it, the profile reads contemporary against country lanes and city stone alike. Novaire sets kerb position for the cleanest guest exit.',
    },
    {
      image: img('interior.png'),
      layout: 'editorial',
      aspect: 'portrait',
      eyebrow: '02 · Suite',
      title: 'Turquoise calm',
      pullQuote: 'Restraint outside. Drama within.',
      body: 'Turquoise leather against pale grey trim is deliberate theatre, a cabin that rewards close photography and quiet conversation equally. Principals who want personality without flash choose this finish.',
      imageRight: true,
    },
    {
      image: img('hero.png'),
      layout: 'feature',
      aspect: 'landscape',
      eyebrow: '03 · Arrival',
      title: 'Three-quarter poise',
      pullQuote: 'Understated. Unmistakable.',
      body: 'The three-quarter angle balances chalk bodywork with dark brightwork, perfect for hotel porticos, charity evenings, and arrivals where taste matters as much as impact.',
    },
    {
      image: img('seat.png'),
      layout: 'editorial',
      aspect: 'portrait',
      eyebrow: '04 · Rear theatre',
      title: 'Elevated conversation',
      pullQuote: 'Space to breathe before the room.',
      body: 'Rear accommodation keeps guests above the bustle, ideal for couples or small parties moving between dinner, drinks, and late transfer. Timing is coordinated whether you chauffeur or self-drive.',
      imageRight: false,
    },
    {
      image: img('grill.png'),
      layout: 'detail',
      eyebrow: '05 · Detail',
      title: 'Finishing in proportion',
      body: 'Grille and wheel centres hold detail under flash, the grey Cullinan leaves Novaire prepared for members’ entrances and press steps alike.',
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
})
