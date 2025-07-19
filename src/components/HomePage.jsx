import React from 'react'
import { Link } from 'react-router-dom'
import Navigation from './Navigation'

export default function HomePage() {

  return (
    <div className="page-container">
      {/* Animated Stars */}
      <div className="animated-stars">
        <div className="star">⭐</div>
        <div className="star">✨</div>
        <div className="star">⭐</div>
        <div className="star">✨</div>
        <div className="star">⭐</div>
      </div>

      <Navigation />

      <div className="content-wrapper">
        {/* Main Title */}
        <h1 className="magical-title">Quizzcasso</h1>

        <p className="tagline">
          "Embark on Your Enchanted Learning Journey"
        </p>

        {/* Welcome Section */}
        <div className="magical-card" style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 className="subsection-title">Welcome to the Magical World of Learning!</h2>
          <p style={{ marginBottom: '2rem', fontSize: '1.1rem' }}>
            Explore our enchanted quiz platform and embark on your learning journey
          </p>
        </div>

        {/* Main Navigation Cards */}
        <div className="main-navigation-container">
          {/* First Row - 3 cards */}
          <div className="navigation-row">
            <Link to="/about" className="subject-card">
              <h3 className="subject-title">About Us</h3>
              <p>Discover the magical story behind Quizzcasso and our mission to make learning enchanting</p>
            </Link>

            <Link to="/team" className="subject-card">
              <h3 className="subject-title">Meet the Team</h3>
              <p>Meet the brilliant wizards and witches who created this magical learning experience</p>
            </Link>

            <Link to="/facts" className="subject-card">
              <h3 className="subject-title">Facts & Knowledge</h3>
              <p>Explore fascinating facts and expand your knowledge with our curated collection</p>
            </Link>
          </div>

          {/* Second Row - 2 cards */}
          <div className="navigation-row navigation-row-two">
            <Link to="/test-knowledge" className="subject-card">
              <h3 className="subject-title">Test Your Knowledge</h3>
              <p>Challenge yourself with academic quizzes across multiple subjects and difficulty levels</p>
            </Link>

            <Link to="/leaderboard" className="subject-card">
              <h3 className="subject-title">Leaderboard</h3>
              <p>See how you rank among fellow wizards and witches in the magical realm of knowledge</p>
            </Link>
          </div>
        </div>

        {/* Featured Section */}
        <div className="magical-card">
          <h2 className="section-title">What Makes Quizzcasso Magical?</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
            <div style={{ textAlign: 'center' }}>
              <h3 className="subsection-title">Diverse Subjects</h3>
              <p>From Mathematics to Astrology, explore 14 different subjects with varying difficulty levels</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <h3 className="subsection-title">Fun Quizzes</h3>
              <p>Enjoy themed quizzes from Harry Potter and Marvel universes for pure entertainment</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <h3 className="subsection-title">Competitive Spirit</h3>
              <p>Climb the leaderboard and showcase your knowledge prowess to the community</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="magical-card" style={{ marginTop: '4rem', textAlign: 'center' }}>
          <h3 className="subsection-title">Created by</h3>
          <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.3rem', color: 'var(--gold)', marginBottom: '1rem' }}>
            Srushti Dandekar
          </div>
          <p style={{ fontStyle: 'italic', color: 'var(--silver)' }}>
            Club Secretary, Quizzing Society of IIT Gandhinagar<br/>
            BTech'23 Student, Civil Engineering Department
          </p>
          <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: 'var(--emerald)' }}>
            "Bringing magic to learning, one quiz at a time"
          </p>
        </div>
      </div>
    </div>
  )
}
