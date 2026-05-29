import type { LegalEntity, LegalSection } from '~/types/legal'

export function getTermsSections(entity: LegalEntity): LegalSection[] {
  const { name, companyNumber, registeredAddress, email, siteUrl } = entity

  return [
    {
      title: 'Agreement and priority',
      paragraphs: [
        `These terms summarise how ${name} (company number ${companyNumber}) provides chauffeured and self-drive luxury vehicle hire in the United Kingdom.`,
        'They apply to enquiries made through ' +
          siteUrl +
          ' and form part of our relationship with you unless superseded by a written hire agreement or booking confirmation issued for your specific event. If there is any conflict, the terms in your signed or written confirmation prevail.',
      ],
    },
    {
      title: 'Definitions',
      paragraphs: [
        'In these terms:',
      ],
      listItems: [
        '"We", "us", or "Novaire" means ' + name + '.',
        '"Hirer" means the person or company making the booking and anyone they authorise to use the vehicle or service.',
        '"Vehicle" means the motor vehicle supplied for hire.',
        '"Hire Period" means the agreed dates and times of hire.',
        '"Chauffeur service" means hire with a professional driver supplied by us.',
        '"Self-drive" means hire where the Hirer or an authorised driver drives the vehicle.',
      ],
    },
    {
      title: 'Bookings and eligibility',
      paragraphs: [
        'All hires are subject to availability and our acceptance of your booking. The Hirer must be at least 18 years old. For self-drive, the driver must hold a valid UK or internationally recognised driving licence acceptable to our insurers, meet any minimum age requirement for the vehicle, and have no disqualifications that would void cover unless we agree otherwise in writing.',
        'If you book on behalf of a company, you confirm you have authority to bind that organisation.',
      ],
    },
    {
      title: 'Quotes and pricing',
      paragraphs: [
        'Quotes are estimates based on the information you provide. Prices may vary with dates, mileage, locations, waiting time, and specific requirements. Unless stated otherwise, prices may be subject to VAT at the prevailing rate.',
        'Quotes are valid for the period stated in the proposal. Additional charges for extra hours, mileage, tolls, parking, cleaning, or damage may apply as set out in your booking confirmation.',
      ],
    },
    {
      title: 'Deposits, payment, and security',
      paragraphs: [
        'A deposit is usually required to secure a booking. Balance payment terms are confirmed in your proposal. For self-drive hires, a security deposit or pre-authorisation may be required before release of the vehicle, as stated in your confirmation.',
        'We may suspend or cancel a hire if payment is not received when due.',
      ],
    },
    {
      title: 'Cancellations and postponements',
      paragraphs: [
        'Cancellation and postponement terms are set out in your booking confirmation. Unless otherwise agreed in writing, the following framework may apply:',
      ],
      listItems: [
        'More than 14 days before the Hire Period: deposit may be transferable to a new date or refunded in part, as stated in your confirmation.',
        'Between 7 and 14 days before the Hire Period: deposit may be retained or partially refunded depending on costs already incurred.',
        'Less than 7 days before the Hire Period: deposit and any non-recoverable costs may be retained.',
      ],
    },
    {
      title: 'Consumer rights',
      paragraphs: [
        'If you are a consumer, nothing in these terms affects your statutory rights under the Consumer Rights Act 2015 and other applicable law. Bespoke hire services tied to a specific date or event may have different cancellation rights; your confirmation will explain what applies to your booking.',
      ],
    },
    {
      title: 'Chauffeur hire',
      paragraphs: [
        'Chauffeur services include a professional driver, vehicle preparation, and routing agreed in advance. Waiting time, additional stops, and extensions beyond the agreed Hire Period may incur extra charges. Passengers must behave lawfully and respectfully; we may end a hire if safety is at risk.',
      ],
    },
    {
      title: 'Self-drive hire',
      paragraphs: [
        'The Hirer must attend our handover briefing and comply with all instructions. Only named authorised drivers may drive the vehicle. The vehicle must be returned at the agreed time and location, with the agreed fuel level and mileage, in the same condition as supplied except for fair wear from normal use.',
        'Prohibited uses include racing, track use, off-road use where not agreed, carrying more passengers than permitted, and driving under the influence of alcohol or drugs.',
      ],
    },
    {
      title: 'Insurance and excess',
      paragraphs: [
        'Insurance arrangements, excess amounts, and any optional cover are confirmed in writing before keys are released. The Hirer is responsible for the excess and any uninsured loss where permitted by law, including damage attributable to the Hirer or authorised driver, loss of keys, and tyre damage where caused by misuse.',
        'Failure to comply with licence, insurance, or handover requirements may void cover and make the Hirer liable for full repair or replacement costs.',
      ],
    },
    {
      title: 'Fuel, mileage, and cleanliness',
      paragraphs: [
        'Fuel and mileage limits are stated in your confirmation. Vehicles must be returned in a reasonably clean condition. Excessive soiling, smoking where prohibited, or pet damage may result in cleaning or repair charges.',
      ],
    },
    {
      title: 'Fines, tolls, and charges',
      paragraphs: [
        'The Hirer is responsible for parking fines, congestion charges, tolls, and penalty notices incurred during the Hire Period, plus any administration fee we reasonably incur in processing them.',
      ],
    },
    {
      title: 'Damage, loss, theft, and breakdown',
      paragraphs: [
        'Any accident, damage, theft, or breakdown must be reported to us and, where required, the police and insurers immediately. The Hirer must not admit liability or arrange repair without our consent except for emergency safety.',
      ],
    },
    {
      title: 'Late return and substitution',
      paragraphs: [
        'Late return may incur additional hire charges. If a vehicle becomes unavailable due to breakdown or other cause beyond the Hirer\'s fault, we will use reasonable efforts to provide a comparable substitute or agree a fair adjustment.',
      ],
    },
    {
      title: 'Film and production',
      paragraphs: [
        'Production hires require accurate disclosure of shoot dates, locations, unit size, permits, and hold times at enquiry stage. Additional insurance, security, and schedule buffers may be required. Use of our vehicles in creative work does not grant rights to our branding unless agreed in writing.',
      ],
    },
    {
      title: 'Hirer obligations',
      paragraphs: [
        'The Hirer must use vehicles lawfully on public roads in the agreed territory unless otherwise arranged. Sub-hiring or lending the vehicle to third parties is not permitted without our written consent.',
      ],
    },
    {
      title: 'Limitation of liability',
      paragraphs: [
        'To the fullest extent permitted by law, our total liability arising from a hire is limited to the fees paid for that booking, except where liability cannot be limited by law.',
        'Nothing in these terms excludes or limits liability for death or personal injury caused by our negligence, fraud, or any other liability that cannot be excluded under English law.',
        'We are not liable for indirect or consequential loss, including loss of profit, goodwill, or alternative transport costs, except where such loss cannot be excluded by law.',
        'The Hirer indemnifies us against claims and costs arising from the Hirer\'s breach of these terms or unlawful use of the vehicle, except to the extent caused by our negligence.',
      ],
    },
    {
      title: 'Force majeure',
      paragraphs: [
        'We are not liable for failure or delay caused by events outside our reasonable control, including severe weather, government action, civil unrest, or failure of third-party suppliers, provided we notify you where practicable and use reasonable efforts to minimise disruption.',
      ],
    },
    {
      title: 'Data protection',
      paragraphs: [
        'We process personal data in accordance with our Privacy Policy at ' + siteUrl + '/privacy.',
      ],
    },
    {
      title: 'Governing law',
      paragraphs: [
        'These terms are governed by the laws of England and Wales. The courts of England and Wales have exclusive jurisdiction, except that consumers resident in Scotland or Northern Ireland may also have rights under local law.',
      ],
    },
    {
      title: 'Contact',
      paragraphs: [
        `Registered office: ${registeredAddress}.`,
        `Enquiries and booking questions: ${email}.`,
      ],
    },
  ]
}
