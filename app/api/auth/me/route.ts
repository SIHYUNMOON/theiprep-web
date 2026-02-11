import { NextResponse } from 'next/server'
import { isAdminAuthenticated } from '@/lib/auth'

export const runtime = 'nodejs'

export async function GET() {
  try {
    const isAdmin = await isAdminAuthenticated()
    
    console.log('[v0] Auth status check - isAdmin:', isAdmin)

    return NextResponse.json({ isAdmin })
  } catch (error) {
    console.error('[v0] Auth status error:', error)
    return NextResponse.json(
      { isAdmin: false },
      { status: 500 }
    )
  }
}
