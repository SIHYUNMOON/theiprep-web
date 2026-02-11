import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
  const lastModified = new Date()

  const routes = [
    '/',
    '/consultants',
    '/boarding-school',
    '/senior-boarding',
    '/junior-boarding',
    '/college',
    '/college-consulting',
    '/mentoring-consulting',
    '/ec-consulting',
    '/transfer',
    '/transfer-application',
    '/transfer-essay',
    '/graduate',
    '/graduate-application',
    '/ec',
    '/ec-academic',
    '/ec-art',
    '/ec-kynd',
    '/performance',
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
  }))
}
