// Server-only helpers for building JSON-LD structured data.
//
// Design notes:
// - EducationalOrganization + WebSite are defined ONCE here and emitted ONCE
//   from app/layout.tsx via buildSiteGraph(). Never re-emit them from any
//   child route — that would create duplicate entities with the same @id.
// - All other schema builders (breadcrumbs, BlogPosting) reference the
//   organization by @id only ({ '@id': ORGANIZATION_ID }), never by
//   redefining its properties, so there is exactly one source of truth.
// - Only verified, existing data is used. No invented fields (ratings,
//   founder, employee count, images, Person entities, etc).
import { SITE_URL } from '@/lib/site-config'

export const ORGANIZATION_ID = `${SITE_URL}/#organization`
export const WEBSITE_ID = `${SITE_URL}/#website`

export const organizationSchema = {
  '@type': 'EducationalOrganization',
  '@id': ORGANIZATION_ID,
  name: 'The I Prep',
  alternateName: ['The-I Prep', '디아이프렙'],
  legalName: '디아이파트너즈',
  url: `${SITE_URL}/`,
  logo: {
    '@type': 'ImageObject',
    url: `${SITE_URL}/images/thei-logo.png`,
  },
  email: 'theipartners@theiprep.com',
  telephone: '02-6205-5455',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '역삼로 424, 진영빌딩 4층',
    addressLocality: '강남구',
    addressRegion: '서울특별시',
    addressCountry: 'KR',
  },
  sameAs: [
    'https://www.youtube.com/@the-iprep9895',
    'https://blog.naver.com/the-i-partners',
  ],
} as const

export const websiteSchema = {
  '@type': 'WebSite',
  '@id': WEBSITE_ID,
  url: `${SITE_URL}/`,
  name: 'The I Prep',
  alternateName: '디아이프렙',
  publisher: { '@id': ORGANIZATION_ID },
} as const

/**
 * Site-wide @graph containing exactly one EducationalOrganization and one
 * WebSite entity. Render this only from the root layout.
 */
export function buildSiteGraph() {
  return {
    '@context': 'https://schema.org',
    '@graph': [organizationSchema, websiteSchema],
  }
}

export interface BreadcrumbItem {
  /** Visible label for this breadcrumb node. */
  name: string
  /** Site-relative path (e.g. "/board"). Always resolved against SITE_URL. */
  path: string
}

/**
 * Builds a BreadcrumbList using only real, existing routes. Dropdown-only
 * labels with no page behind them (e.g. "컨설팅 서비스", "입시 가이드") must
 * never be passed in here.
 */
export function buildBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  }
}

/**
 * Strips HTML tags and truncates to `maxLength` characters. This is the
 * single source of truth for deriving a board post description — used by
 * both generateMetadata's <meta name="description"> and the BlogPosting
 * JSON-LD description, so the two never diverge.
 */
export function stripHtmlToDescription(html: string, maxLength = 160): string {
  return html.replace(/<[^>]*>/g, '').substring(0, maxLength)
}

export interface BlogPostingInput {
  id: string
  title: string
  /** Raw post.created_at value. Never pass updated_at here. */
  createdAt: string
  /** Reuse the same HTML-stripped/truncated text already used for generateMetadata's description. */
  description: string
}

/**
 * Builds BlogPosting JSON-LD for a single published board post.
 * Deliberately omits: dateModified (updated_at is unreliable import/migration
 * data), image (thumbnail_url is unpopulated), articleBody (avoid payload
 * bloat), and any Person author (the author field is organizational, not an
 * individual).
 */
export function buildBlogPostingSchema(post: BlogPostingInput) {
  const url = `${SITE_URL}/board/${post.id}`
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    url,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    datePublished: post.createdAt,
    publisher: { '@id': ORGANIZATION_ID },
    author: { '@id': ORGANIZATION_ID },
    description: post.description,
  }
}

/**
 * Safely serializes JSON-LD data for embedding in a <script> tag.
 * Escapes '<' so dynamic content (e.g. post titles) can never break out of
 * the script tag (e.g. via "</script>").
 */
export function safeJsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, '\\u003c')
}
