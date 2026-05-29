export interface LegalEntity {
  name: string
  companyNumber: string
  registeredAddress: string
  email: string
  siteUrl: string
}

export interface LegalSection {
  id?: string
  title: string
  paragraphs: string[]
  listItems?: string[]
}
