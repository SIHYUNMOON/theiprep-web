import { safeJsonLd } from '@/lib/structured-data'

/**
 * Renders a single JSON-LD <script> tag from a server component.
 * Never use this from a 'use client' component — structured data must be
 * present in the initial server-rendered HTML.
 */
export function JsonLd({ data }: { data: unknown }) {
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: safeJsonLd(data) }}
    />
  )
}
