import type { LegalEntity } from '~/types/legal'

export function useLegalEntity(): LegalEntity {
  const config = useRuntimeConfig()
  const pub = config.public

  return {
    name: (pub.legalName as string) || 'Novaire London PLC',
    companyNumber: (pub.legalCompanyNumber as string) || '14837291',
    registeredAddress:
      (pub.legalRegisteredAddress as string) ||
      '2nd Floor, 32 Kensington Church Street, London, W8 4HA, United Kingdom',
    email: (pub.legalEmail as string) || 'enquiries@novaire.co.uk',
    siteUrl: (pub.siteUrl as string) || 'https://novaire.co.uk',
  }
}
