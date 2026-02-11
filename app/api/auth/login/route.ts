import { NextRequest, NextResponse } from 'next/server'
import { validateCredentials, createSession, getCookieOptions } from '@/lib/auth'

export const runtime = 'nodejs'

export async function POST(request: NextRequest) {
  try {
    const { username, password } = await request.json()

    console.log('[v0] Login attempt for username:', username)

    const isValid = await validateCredentials(username, password)

    if (!isValid) {
      console.log('[v0] Login failed - invalid credentials')
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 }
      )
    }

    const token = await createSession()
    const cookieOptions = getCookieOptions()

    console.log('[v0] Login successful - setting cookie')

    const response = NextResponse.json({ 
      success: true,
      token,
      message: 'Login successful' 
    })

    response.cookies.set('admin_session', token, cookieOptions)

    return response
  } catch (error) {
    console.error('[v0] Login error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
