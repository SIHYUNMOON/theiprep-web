'use client'

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'

interface AuthContextType {
  isAdminLoggedIn: boolean
  setIsAdminLoggedIn: (value: boolean) => void
  login: (username: string, password: string) => Promise<void>
  logout: () => Promise<{ success: boolean }>
  checkAuthStatus: () => Promise<void>
  isLoading: boolean
  getAuthToken: () => string | null
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [authToken, setAuthToken] = useState<string | null>(null)

  // Check auth status on mount and when returning from another page
  useEffect(() => {
    // Only run in browser
    if (typeof window === 'undefined') return

    // First check localStorage for persisted login state
    const stored = localStorage.getItem('admin_token')
    if (stored) {
      setAuthToken(stored)
      setIsAdminLoggedIn(true)
      setIsLoading(false)
    } else {
      checkAuthStatus()
    }
  }, [])

  const checkAuthStatus = async () => {
    try {
      console.log('[v0] Checking auth status...')
      const response = await fetch('/api/auth/me', { credentials: 'include' })
      console.log('[v0] Auth status response:', response.status)
      
      if (response.ok) {
        const data = await response.json()
        const isAdmin = data.isAdmin === true
        console.log('[v0] Auth check result:', { isAdmin })
        setIsAdminLoggedIn(isAdmin)
        
        // If admin is authenticated but token not in localStorage, sync it
        if (isAdmin && typeof window !== 'undefined' && !localStorage.getItem('admin_token')) {
          console.log('[v0] Auth status synced with server')
        }
      } else {
        console.log('[v0] Auth check failed, clearing state')
        setIsAdminLoggedIn(false)
        if (typeof window !== 'undefined') {
          localStorage.removeItem('admin_token')
        }
      }
    } catch (error) {
      console.error('[v0] Auth check error:', error)
      // Don't clear login state on network errors - maintain localStorage state
      const stored = typeof window !== 'undefined' ? localStorage.getItem('admin_token') : null
      if (!stored) {
        setIsAdminLoggedIn(false)
      }
    } finally {
      setIsLoading(false)
    }
  }

  const login = async (username: string, password: string) => {
    try {
      console.log('[v0] Login attempt:', { username, passwordLength: password.length })
      
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
        credentials: 'include',
      })

      console.log('[v0] Login response status:', response.status)

      if (!response.ok) {
        const errorData = await response.json()
        console.error('[v0] Login failed:', errorData)
        throw new Error(errorData.error || 'Login failed')
      }

      const data = await response.json()
      console.log('[v0] Login successful, token received:', !!data.token)
      
      if (data.token) {
        setAuthToken(data.token)
        if (typeof window !== 'undefined') {
          localStorage.setItem('admin_token', data.token)
          console.log('[v0] Auth token stored in localStorage')
        }
      }

      setIsAdminLoggedIn(true)
    } catch (error) {
      console.error('[v0] Login error:', error)
      throw error
    }
  }

  const logout = async () => {
    try {
      await fetch('/api/auth/logout', {
        method: 'POST',
        credentials: 'include',
      })
      setIsAdminLoggedIn(false)
      setAuthToken(null)
      if (typeof window !== 'undefined') {
        localStorage.removeItem('admin_token')
      }
      return { success: true }
    } catch (error) {
      console.error('[v0] Logout error:', error)
      return { success: false }
    }
  }

  const getAuthToken = () => {
    if (authToken) return authToken
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('admin_token')
      if (stored) {
        setAuthToken(stored)
        return stored
      }
    }
    return null
  }

  return (
    <AuthContext.Provider value={{ isAdminLoggedIn, setIsAdminLoggedIn, login, logout, checkAuthStatus, isLoading, getAuthToken }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within AuthProvider')
  }
  return context
}
