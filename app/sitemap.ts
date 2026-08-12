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
      // Use created_at only. It is the same field the board detail page
      // renders as the article's publication date (see app/board/[id]/client.tsx),
      // and for imported content it was explicitly backdated to the true
      // original publish date via the customDate param in createPost/updatePost.
      //
      // updated_at is intentionally NOT used: for the vast majority of posts
      // it is clustered on the two days content was bulk-imported into this
      // database, not a genuine later edit to that article's content — so it
      // cannot be trusted as a modification date.
      const parsed = post.created_at ? new Date(post.created_at) : null
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
