import { buildVehicle, fleetImg } from './utils'

const FOLDER = 'green-huracan'
const img = fleetImg(FOLDER)

export const huracan = buildVehicle(FOLDER, {
  slug: 'lamborghini-huracan',
  name: 'Huracán',
  marque: 'Lamborghini',
  category: 'self-drive',
  tagline: 'Verde shock — theatre, velocity, and pure emotion',
  description:
    'Lamborghini Huracán EVO in signature Verde Shock — self-drive hire for music videos, nightlife, and content that must read in a single scroll.',
  intro:
    'This is the Novaire car strangers photograph at lights. The finish is not an upgrade; it is the point. We brief drivers on visibility, ergonomics, and routes that suit a low, loud supercar — ideal for artists, creators, and weekends built for the feed.',
  image: img('hero.JPG'),
  heroImage: img('main.PNG'),
  files: ['main.PNG', 'hero.JPG', 'interior.PNG', 'seat.PNG', 'wheel.PNG'],
  editorial: [
    {
      image: img('hero.JPG'),
      layout: 'feature',
      aspect: 'landscape',
      eyebrow: '01 — Verde shock',
      title: 'The green that owns the feed',
      pullQuote: 'Strangers photograph it at lights. By design.',
      body: 'Verde Shock against black trim is Novaire’s most recognisable silhouette — campaigns, club runs, and content that needs to stop thumbs without explaining the brief.',
    },
    {
      image: img('interior.PNG'),
      layout: 'editorial',
      aspect: 'portrait',
      eyebrow: '02 — Cabin',
      title: 'Jet-fighter clarity',
      pullQuote: 'Theatre, not transport.',
      body: 'Angular architecture, Alcantara, and a hip point that commits you to the drive — we walk you through sightlines and controls so confidence matches the paint outside.',
      imageRight: false,
    },
    {
      image: img('seat.PNG'),
      layout: 'editorial',
      aspect: 'portrait',
      eyebrow: '03 — Position',
      title: 'Inside the wedge',
      pullQuote: 'Low. Committed. Instantly legible on camera.',
      body: 'Tell us your shot list — we know the streets, garages, and golden-hour corners where this cabin and exterior pop hardest on camera.',
      imageRight: true,
    },
    {
      image: img('wheel.PNG'),
      layout: 'detail',
      eyebrow: '04 — Stance',
      title: 'Alloy as attitude',
      body: 'Tyre profile, caliper colour, and stance sell the story in one crop — delivered washed, flagged, and ready for lens or launch night.',
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
    { label: 'Colour', value: 'Verde Shock · signature' },
    { label: 'Availability', value: 'UK-wide' },
  ],
  featured: true,
})
