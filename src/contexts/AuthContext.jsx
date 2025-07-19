import React, { createContext, useContext, useEffect, useState } from 'react'

const AuthContext = createContext({})

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    // Check if user is stored in localStorage
    const storedUser = localStorage.getItem('quizzcasso_user')
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
    setLoading(false)
  }, [])

  const signInWithGoogle = async () => {
    try {
      setLoading(true)
      // Mock Google sign-in for development
      const googleUser = {
        id: 'google-user-' + Date.now(),
        email: 'user@gmail.com',
        username: 'Google User',
        provider: 'google',
        avatar: 'https://via.placeholder.com/40/FFD700/000000?text=G'
      }
      setUser(googleUser)
      localStorage.setItem('quizzcasso_user', JSON.stringify(googleUser))
      setLoading(false)
      return { user: googleUser, error: null }
    } catch (error) {
      setLoading(false)
      return { user: null, error }
    }
  }

  const signInWithUsername = async (username) => {
    try {
      setLoading(true)
      if (!username || username.trim().length < 2) {
        setLoading(false)
        return { user: null, error: 'Username must be at least 2 characters long' }
      }

      const manualUser = {
        id: 'manual-user-' + Date.now(),
        username: username.trim(),
        provider: 'manual',
        avatar: 'https://via.placeholder.com/40/C0C0C0/000000?text=' + username.charAt(0).toUpperCase()
      }
      setUser(manualUser)
      localStorage.setItem('quizzcasso_user', JSON.stringify(manualUser))
      setLoading(false)
      return { user: manualUser, error: null }
    } catch (error) {
      setLoading(false)
      return { user: null, error }
    }
  }

  const signOut = async () => {
    try {
      setUser(null)
      localStorage.removeItem('quizzcasso_user')
      return { error: null }
    } catch (error) {
      return { error }
    }
  }

  const value = {
    user,
    loading,
    signInWithGoogle,
    signInWithUsername,
    signOut
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}
