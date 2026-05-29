import type { LegalEntity, LegalSection } from '~/types/legal'

export function getPrivacySections(entity: LegalEntity): LegalSection[] {
  const { name, companyNumber, registeredAddress, email, siteUrl } = entity

  return [
    {
      id: 'who-we-are',
      title: 'Who we are',
      paragraphs: [
        `${name} (company number ${companyNumber}) is the data controller for personal data collected through ${siteUrl} and when you enquire about or book our chauffeured and self-drive luxury vehicle hire services in the United Kingdom.`,
        `Registered office: ${registeredAddress}.`,
        `Privacy enquiries: ${email}.`,
      ],
    },
    {
      title: 'Scope of this policy',
      paragraphs: [
        'This policy applies to visitors to our website, people who contact us for a quote, and clients who confirm a hire with us. It does not cover third-party websites linked from our site.',
      ],
    },
    {
      title: 'Personal data we collect',
      paragraphs: [
        'Depending on how you interact with us, we may collect:',
      ],
      listItems: [
        'Identity and contact details: name, email address, telephone number.',
        'Hire and event details: dates, locations, pick-up and drop-off addresses, guest numbers, service type, vehicle preferences, journey notes, and messages you send.',
        'Corporate bookings: company name and role where relevant.',
        'Technical data: IP address, browser type, device information, and server logs when you use our website.',
        'Cookie and analytics data: where you consent to non-essential cookies (see Cookies below).',
        'Financial and booking records: payment and invoicing information when you proceed to a confirmed hire.',
      ],
    },
    {
      title: 'Special category data',
      paragraphs: [
        'We do not ask you to provide special category personal data (such as health information) through our website. If you voluntarily share sensitive information in a message, we will only use it to respond to your enquiry or deliver your hire, and we will treat it with appropriate care.',
      ],
    },
    {
      title: 'How we collect personal data',
      paragraphs: [
        'We collect data when you submit our quote form, email or call us, correspond about a booking, use optional address lookup on the contact form, or browse our site (including through cookies where permitted).',
      ],
    },
    {
      title: 'Purposes and lawful bases',
      paragraphs: [
        'We process personal data only where we have a lawful basis under UK GDPR. The main purposes are:',
      ],
      listItems: [
        'To respond to enquiries and prepare quotes (lawful basis: steps taken at your request before a contract, and our legitimate interests in operating our business).',
        'To perform a hire contract and manage your booking (lawful basis: performance of a contract).',
        'To meet legal, tax, and accounting obligations (lawful basis: legal obligation).',
        'To prevent fraud, protect our business, and improve our website (lawful basis: legitimate interests, balanced against your rights).',
        'To send marketing about Novaire services where you have opted in (lawful basis: consent). You may withdraw consent at any time.',
      ],
    },
    {
      title: 'Marketing',
      paragraphs: [
        'We do not sell your personal data. If you opt in to marketing, we may send occasional updates about our fleet and services. You can unsubscribe using the link in any email or by contacting us at ' +
          email +
          '.',
      ],
    },
    {
      id: 'cookies',
      title: 'Cookies and similar technologies',
      paragraphs: [
        'Our website uses essential cookies needed for basic operation and security. With your consent, we may use analytics cookies to understand how visitors use the site.',
        'You can accept or reject non-essential cookies using the banner on your first visit. You can change your choice at any time by clearing site data or contacting us.',
        'When Google Analytics is enabled, the following cookies may be set after you choose Accept all:',
      ],
      listItems: [
        '_ga (Google): distinguishes users; up to 2 years; analytics.',
        '_ga_* (Google): maintains session state; up to 2 years; analytics.',
        'Consent preference (Novaire): stores your cookie choice locally in your browser; until cleared.',
      ],
    },
    {
      title: 'Third parties and processors',
      paragraphs: [
        'We use trusted service providers who process personal data on our instructions, including:',
      ],
      listItems: [
        'Email delivery (for example Resend) when you submit an enquiry through our server.',
        'Form processing (for example Formspree) if configured as an alternative submission route.',
        'Address search (OpenStreetMap Nominatim) when you type a location on the quote form; your search query is sent to their service.',
        'Analytics (Google) if you consent to non-essential cookies.',
        'Website hosting and content delivery providers that store server logs.',
      ],
    },
    {
      title: 'International transfers',
      paragraphs: [
        'Some providers may process data outside the United Kingdom. Where this occurs, we rely on appropriate safeguards such as UK adequacy regulations, the UK International Data Transfer Agreement, or standard contractual clauses approved for UK transfers, so your data receives a similar level of protection.',
      ],
    },
    {
      title: 'How long we keep data',
      paragraphs: [
        'We keep personal data only as long as necessary:',
      ],
      listItems: [
        'Enquiry records: typically up to 24 months from last contact if no booking is made, unless a longer period is needed to resolve a dispute.',
        'Booking and financial records: for the duration of the hire and up to seven years where required for tax, accounting, or legal purposes.',
        'Marketing preferences: until you withdraw consent, plus a short suppression record so we respect your choice.',
        'Server logs: for a limited period consistent with security and hosting practices.',
      ],
    },
    {
      title: 'Security',
      paragraphs: [
        'We use appropriate technical and organisational measures to protect personal data, including secure hosting, access controls, and limiting access to those who need it for their role. No method of transmission over the internet is completely secure; we encourage you to use strong passwords on your own accounts and avoid sending unnecessary sensitive information by email.',
      ],
    },
    {
      title: 'Your rights',
      paragraphs: [
        'Under UK data protection law you have the right to request access, rectification, erasure, restriction of processing, data portability, and to object to processing based on legitimate interests. Where we rely on consent, you may withdraw it at any time without affecting the lawfulness of processing before withdrawal.',
        `To exercise your rights, contact ${email}. We aim to respond within one month. You also have the right to lodge a complaint with the Information Commissioner\'s Office (ICO) at ico.org.uk.`,
      ],
    },
    {
      title: 'Children',
      paragraphs: [
        'Our services are not directed at anyone under 18. We do not knowingly collect personal data from children. If you believe a child has provided us with personal data, please contact us and we will delete it where appropriate.',
      ],
    },
    {
      title: 'Automated decision-making',
      paragraphs: [
        'We do not use automated decision-making or profiling that produces legal or similarly significant effects on you.',
      ],
    },
    {
      title: 'Changes to this policy',
      paragraphs: [
        'We may update this policy from time to time. The date at the top of the page shows when it was last revised. Material changes will be reflected on this page.',
      ],
    },
    {
      title: 'Contact',
      paragraphs: [
        `For any questions about this policy or how we handle your data, email ${email} or write to us at our registered office address above.`,
      ],
    },
  ]
}
