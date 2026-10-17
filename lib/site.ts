export const CONTACT_EMAIL = 'blacklineracing5@gmail.com'
export const RACE_DATE = '2027-01-30T09:00:00+05:00'

export const sponsorMailto = (tier?: string) => {
  const subject = tier ? `${tier} Sponsorship — Blackline Racing` : 'Sponsorship Inquiry — Blackline Racing'
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}`
}

export type TeamMember = {
  name: string
  role: string
  about: string
  image?: string
}

// Replace placeholders with real names, roles, bios and photos (e.g. image: '/team/ali.jpg').
export const team: TeamMember[] = [
  { name: 'Team Member 01', role: 'Team Principal', about: 'Profile coming soon.' },
  { name: 'Team Member 02', role: 'Design Engineer', about: 'Profile coming soon.' },
  { name: 'Team Member 03', role: 'Manufacturing Engineer', about: 'Profile coming soon.' },
  { name: 'Team Member 04', role: 'Aerodynamics & CFD', about: 'Profile coming soon.' },
  { name: 'Team Member 05', role: 'Marketing & Sponsorship', about: 'Profile coming soon.' },
  { name: 'Team Member 06', role: 'Graphics & Media', about: 'Profile coming soon.' },
]

export type TierId = 'diamond' | 'gold' | 'silver' | 'bronze' | 'product'

export const tiers: { id: TierId; name: string; tagline: string }[] = [
  { id: 'diamond', name: 'Diamond', tagline: 'Title partner' },
  { id: 'gold', name: 'Gold', tagline: 'Principal partner' },
  { id: 'silver', name: 'Silver', tagline: 'Official partner' },
  { id: 'bronze', name: 'Bronze', tagline: 'Supporting partner' },
  { id: 'product', name: 'Product', tagline: 'In-kind partner' },
]

type Cell = boolean | string

export const benefits: { label: string; values: Record<TierId, Cell> }[] = [
  {
    label: 'Logo on the race car',
    values: { diamond: 'Primary', gold: 'Large', silver: 'Medium', bronze: 'Small', product: 'Small' },
  },
  {
    label: 'Logo on website',
    values: { diamond: 'Hero feature', gold: 'Featured', silver: true, bronze: true, product: true },
  },
  {
    label: 'Logo on team uniforms',
    values: { diamond: 'Front chest', gold: 'Sleeve', silver: 'Back', bronze: false, product: false },
  },
  {
    label: 'Pit display & booth branding',
    values: { diamond: 'Centrepiece', gold: 'Prominent', silver: true, bronze: true, product: true },
  },
  {
    label: 'Social media shoutouts',
    values: { diamond: 'Monthly series', gold: 'Dedicated post', silver: 'Group post', bronze: 'Group post', product: 'Product feature' },
  },
  {
    label: 'Mention in verbal presentation to judges',
    values: { diamond: true, gold: true, silver: true, bronze: false, product: true },
  },
  {
    label: 'Featured in portfolio & engineering folio',
    values: { diamond: 'Full page', gold: 'Half page', silver: 'Logo', bronze: 'Logo', product: 'Product credit' },
  },
  {
    label: 'Invitation to race day in Karachi',
    values: { diamond: true, gold: true, silver: false, bronze: false, product: false },
  },
  {
    label: 'Progress updates & reports',
    values: { diamond: true, gold: true, silver: true, bronze: true, product: true },
  },
  {
    label: 'Certificate of appreciation',
    values: { diamond: true, gold: true, silver: true, bronze: true, product: true },
  },
]
