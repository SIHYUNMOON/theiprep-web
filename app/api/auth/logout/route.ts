import { NextResponse } from 'next/server'
import { clearSession } from '@/lib/auth'

export const runtime = 'nodejs'

export async function POST() {
  try {
    await clearSession()
    
    console.log('[v0] Logout successful')

    const response = NextResponse.json({ success: true })
    response.cookies.delete('admin_session')

    return response
  } catch (error) {
    console.error('[v0] Logout error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
