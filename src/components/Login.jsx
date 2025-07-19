import React, { useState } from 'react'
import { useAuth } from '../contexts/AuthContext'

export default function Login() {
  const [loading, setLoading] = useState(false)
  const [username, setUsername] = useState('')
  const [error, setError] = useState('')
  const { signInWithGoogle, signInWithUsername } = useAuth()

  const handleGoogleSignIn = async () => {
    setLoading(true)
    setError('')
    try {
      const { user, error } = await signInWithGoogle()
      if (error) {
        setError('Google sign-in failed. Please try again.')
        console.error('Sign in error:', error)
      }
    } catch (error) {
      setError('Google sign-in failed. Please try again.')
      console.error('Sign in error:', error)
    }
    setLoading(false)
  }

  const handleUsernameSignIn = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const { user, error } = await signInWithUsername(username)
      if (error) {
        setError(error)
      }
    } catch (error) {
      setError('Sign in failed. Please try again.')
      console.error('Sign in error:', error)
    }
    setLoading(false)
  }

  return (
    <div className="login-container">
      <div className="login-content">
        <h1 className="magical-title" style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>
          Welcome to Quizzcasso
        </h1>

        <p className="tagline" style={{
          fontSize: '1.3rem',
          fontStyle: 'italic',
          color: 'var(--light-gold)',
          marginBottom: '3rem',
          textAlign: 'center'
        }}>
          <em>"Where Knowledge Meets Magic"</em>
        </p>

        <div className="login-section">
          <div className="magical-card" style={{
            maxWidth: '500px',
            margin: '0 auto',
            textAlign: 'center',
            padding: '3rem'
          }}>
            <h2 style={{
              color: 'var(--light-gold)',
              marginBottom: '2rem',
              fontSize: '1.8rem'
            }}>
              Ready to Begin Your Magical Journey?
            </h2>

            {error && (
              <div style={{
                background: 'rgba(220, 53, 69, 0.1)',
                border: '1px solid rgba(220, 53, 69, 0.3)',
                borderRadius: '8px',
                padding: '1rem',
                marginBottom: '2rem',
                color: '#dc3545'
              }}>
                {error}
              </div>
            )}

            {/* Google Sign-in Button */}
            <button
              onClick={handleGoogleSignIn}
              disabled={loading}
              className="magical-button google-signin-btn"
              style={{
                background: 'linear-gradient(135deg, #4285f4 0%, #34a853 100%)',
                color: 'white',
                border: '2px solid #4285f4',
                padding: '1rem 2.5rem',
                fontSize: '1.1rem',
                fontWeight: '600',
                borderRadius: '15px',
                cursor: loading ? 'not-allowed' : 'pointer',
                transition: 'all 0.3s ease',
                textTransform: 'none',
                fontFamily: 'var(--font-heading)',
                boxShadow: '0 8px 25px rgba(66, 133, 244, 0.3)',
                marginBottom: '2rem',
                width: '100%'
              }}
            >
              {loading ? (
                <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                  <div className="loading-spinner" style={{ width: '20px', height: '20px' }}></div>
                  Signing in...
                </span>
              ) : (
                'Sign in with Google'
              )}
            </button>

            {/* Divider */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              margin: '2rem 0',
              color: 'var(--silver)'
            }}>
              <div style={{ flex: 1, height: '1px', background: 'var(--silver)', opacity: 0.3 }}></div>
              <span style={{ padding: '0 1rem', fontSize: '0.9rem' }}>OR</span>
              <div style={{ flex: 1, height: '1px', background: 'var(--silver)', opacity: 0.3 }}></div>
            </div>

            {/* Manual Username Entry */}
            <form onSubmit={handleUsernameSignIn}>
              <div style={{ marginBottom: '2rem' }}>
                <label style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  color: 'var(--light-gold)',
                  fontSize: '1.1rem',
                  fontWeight: '500'
                }}>
                  Enter Your Username
                </label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Your magical username..."
                  disabled={loading}
                  style={{
                    width: '100%',
                    padding: '1rem',
                    fontSize: '1rem',
                    borderRadius: '10px',
                    border: '2px solid var(--gold)',
                    background: 'rgba(255, 255, 255, 0.1)',
                    color: 'var(--light-gold)',
                    fontFamily: 'var(--font-heading)',
                    outline: 'none',
                    transition: 'all 0.3s ease'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = 'var(--light-gold)'
                    e.target.style.boxShadow = '0 0 10px rgba(255, 215, 0, 0.3)'
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'var(--gold)'
                    e.target.style.boxShadow = 'none'
                  }}
                />
              </div>

              <button
                type="submit"
                disabled={loading || !username.trim()}
                className="magical-button"
                style={{
                  background: 'linear-gradient(135deg, var(--deep-purple) 0%, var(--royal-blue) 100%)',
                  color: 'var(--light-gold)',
                  border: '2px solid var(--gold)',
                  padding: '1rem 2.5rem',
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  borderRadius: '15px',
                  cursor: (loading || !username.trim()) ? 'not-allowed' : 'pointer',
                  transition: 'all 0.3s ease',
                  textTransform: 'none',
                  fontFamily: 'var(--font-heading)',
                  boxShadow: '0 8px 25px rgba(212, 175, 55, 0.3)',
                  width: '100%',
                  opacity: (loading || !username.trim()) ? 0.6 : 1
                }}
              >
                {loading ? (
                  <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                    <div className="loading-spinner" style={{ width: '20px', height: '20px' }}></div>
                    Entering...
                  </span>
                ) : (
                  'Enter the Magical World'
                )}
              </button>
            </form>

            <p style={{
              fontSize: '0.9rem',
              color: 'var(--silver)',
              marginTop: '2rem',
              fontStyle: 'italic',
              lineHeight: '1.5'
            }}>
              <em>Choose Google for quick access or enter your own magical username to begin your quiz adventure!</em>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
