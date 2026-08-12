import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/site-config'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_URL
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
