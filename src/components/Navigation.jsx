import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

export default function Navigation() {
  const { user, signOut } = useAuth()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const handleSignOut = async () => {
    await signOut()
    setIsMenuOpen(false)
  }

  const handleLinkClick = () => {
    setIsMenuOpen(false)
  }

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false)
  }, [location])

  // Close menu when clicking outside and handle body scroll
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('.navbar')) {
        setIsMenuOpen(false)
      }
    }

    // Prevent body scroll when menu is open
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    document.addEventListener('click', handleClickOutside)
    return () => {
      document.removeEventListener('click', handleClickOutside)
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  // Handle escape key to close menu
  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener('keydown', handleEscapeKey)
    return () => document.removeEventListener('keydown', handleEscapeKey)
  }, [isMenuOpen])

  return (
    <>
      {/* Mobile Menu Backdrop */}
      <div
        className={`mobile-menu-backdrop ${isMenuOpen ? 'active' : ''}`}
        onClick={() => setIsMenuOpen(false)}
      />

      <nav className="navbar">
        <div className="nav-container">
          {/* Mobile Menu Toggle */}
          <button
            className="mobile-menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            <span className={`hamburger ${isMenuOpen ? 'open' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>

          {/* Navigation Links */}
          <ul className={`nav-links ${isMenuOpen ? 'nav-links-open' : ''}`}>
          <li>
            <Link to="/" className="nav-link" onClick={handleLinkClick}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="nav-link" onClick={handleLinkClick}>
              About Us
            </Link>
          </li>
          <li>
            <Link to="/team" className="nav-link" onClick={handleLinkClick}>
              Team
            </Link>
          </li>
          <li>
            <Link to="/facts" className="nav-link" onClick={handleLinkClick}>
              Facts
            </Link>
          </li>
          <li>
            <Link to="/test-knowledge" className="nav-link" onClick={handleLinkClick}>
              Quiz
            </Link>
          </li>
          <li>
            <Link to="/leaderboard" className="nav-link" onClick={handleLinkClick}>
              Leaderboard
            </Link>
          </li>
          {user && (
            <li>
              <button
                onClick={handleSignOut}
                className="nav-link sign-out-btn"
                style={{
                  background: 'none',
                  border: '2px solid var(--light-silver)',
                  color: 'var(--light-silver)',
                  padding: '0.4rem 0.8rem',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontSize: '0.95rem',
                  fontFamily: 'var(--font-heading)',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = 'var(--light-silver)'
                  e.target.style.color = 'var(--deep-purple)'
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'none'
                  e.target.style.color = 'var(--light-silver)'
                }}
              >
                Sign Out
              </button>
            </li>
          )}
        </ul>
      </div>
    </nav>
    </>
  )
}
