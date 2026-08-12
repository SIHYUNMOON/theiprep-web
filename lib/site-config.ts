// Centralized production site URL used for robots.txt, sitemap.xml, and canonical metadata.
// Falls back to the production domain (never localhost) if the env var is not set.
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || 'https://www.theipartners.online'
).replace(/\/+$/, '')
