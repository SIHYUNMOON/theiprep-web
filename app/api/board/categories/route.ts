import { NextResponse } from 'next/server'
import { getCategories } from '@/lib/db'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export async function GET() {
  try {
    console.log('[v0] Fetching categories')
    
    const result = await getCategories()

    if (!result.ok) {
      console.log('[v0] Failed to fetch categories, returning default')
      return NextResponse.json({ categories: [] })
    }

    console.log('[v0] Successfully fetched categories:', result.data.length)
    return NextResponse.json({ categories: result.data })
  } catch (error) {
    console.error('[v0] Categories API error:', error)
    // Return empty array on error so the client can use defaults
    return NextResponse.json({ categories: [] })
  }
}
