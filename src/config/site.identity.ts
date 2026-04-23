export const siteIdentity = {
  code: process.env.NEXT_PUBLIC_SITE_CODE || 'qhqtybe8pw',
  name: process.env.NEXT_PUBLIC_SITE_NAME || 'Guadalupepro',
  tagline: process.env.NEXT_PUBLIC_SITE_TAGLINE || 'Social Profile platform',
  description:
    process.env.NEXT_PUBLIC_SITE_DESCRIPTION ||
    'A social profile platform for public identity, creator pages, and community discovery.',
  domain: process.env.NEXT_PUBLIC_SITE_DOMAIN || 'guadalupepro.com',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://guadalupepro.com',
  ogImage: process.env.NEXT_PUBLIC_SITE_OG_IMAGE || '/og-default.png',
  googleMapsEmbedApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_API_KEY || 'AIzaSyBco7dIECu3rJWjP3J0MImnR_uxlbeqAe0',

} as const

export const defaultAuthorProfile = {
  name: siteIdentity.name,
  avatar: '/placeholder.svg?height=80&width=80',
} as const

