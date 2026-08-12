import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/site-config'
import { getPublicPostsForSitemap } from '@/lib/db'

// Static routes have no reliable per-page content-modification date, so we
// intentionally omit `lastModified` for them rather than using build/deploy
// time or `new Date()`.
const STATIC_ROUTES = [
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
  '/board',
]

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = SITE_URL

  const staticEntries: MetadataRoute.Sitemap = STATIC_ROUTES.map((route) => ({
    url: `${baseUrl}${route}`,
  }))

  // Dynamically include every publicly indexable board post using the
  // project's existing database access layer (lib/db.ts), so the sitemap
  // stays in sync with the board without duplicating query logic.
  let postEntries: MetadataRoute.Sitemap = []
  const result = await getPublicPostsForSitemap()

  if (result.ok) {
    postEntries = result.data.map((post) => {
      // Prefer updated_at, fall back to created_at. Only set lastModified
      // when a valid timestamp actually exists — never invent one.
      const rawDate = post.updated_at || post.created_at
      const parsed = rawDate ? new Date(rawDate) : null
      const lastModified =
        parsed && !Number.isNaN(parsed.getTime()) ? parsed : undefined

      return {
        url: `${baseUrl}/board/${post.id}`,
        ...(lastModified ? { lastModified } : {}),
      }
    })
  } else {
    console.error('[sitemap] Skipping board posts: db_unavailable')
  }

  return [...staticEntries, ...postEntries]
}
