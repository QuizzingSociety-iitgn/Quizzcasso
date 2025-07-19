import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Navigation from './Navigation'
import { useAuth } from '../contexts/AuthContext'

export default function TestYourKnowledge() {
  const { user } = useAuth()
  const [selectedSubject, setSelectedSubject] = useState(null)
  const [showFunQuizzes, setShowFunQuizzes] = useState(false)
  const [showDifficultyPopup, setShowDifficultyPopup] = useState(false)
  const [showFunLevelsPopup, setShowFunLevelsPopup] = useState(false)

  const academicSubjects = [
    { id: 'english', name: 'English', icon: '📚', color: 'var(--burgundy)' },
    { id: 'maths', name: 'Mathematics', icon: '🔢', color: 'var(--deep-blue)' },
    { id: 'biology', name: 'Biology', icon: '🧬', color: 'var(--emerald)' },
    { id: 'physics', name: 'Physics', icon: '⚛️', color: 'var(--gold)' },
    { id: 'chemistry', name: 'Chemistry', icon: '🧪', color: 'var(--burgundy)' },
    { id: 'astrology', name: 'Astrology', icon: '🌟', color: 'var(--deep-blue)' },
    { id: 'economics', name: 'Economics', icon: '💰', color: 'var(--emerald)' },
    { id: 'history', name: 'History', icon: '🏛️', color: 'var(--gold)' },
    { id: 'geography', name: 'Geography', icon: '🌍', color: 'var(--burgundy)' },
    { id: 'current-affairs', name: 'Current Affairs', icon: '📰', color: 'var(--deep-blue)' },
    { id: 'computer-knowledge', name: 'Computer Knowledge', icon: '💻', color: 'var(--emerald)' },
    { id: 'computer-languages', name: 'Computer Languages', icon: '⌨️', color: 'var(--gold)' },
    { id: 'general-knowledge', name: 'General Knowledge', icon: '🎓', color: 'var(--burgundy)' },
    { id: 'all-in-one', name: 'All in One', icon: '🌈', color: 'var(--deep-blue)' }
  ]

  const funCategories = [
    {
      id: 'harry-potter',
      name: 'Harry Potter',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=200&h=200&fit=crop&crop=center',
      color: 'var(--gold)'
    },
    {
      id: 'marvel-avengers',
      name: 'Marvel Avengers',
      image: 'https://images.unsplash.com/photo-1635805737707-575885ab0820?w=200&h=200&fit=crop&crop=center',
      color: 'var(--burgundy)'
    }
  ]

  const difficulties = [
    { id: 'easy', name: 'Easy', color: 'var(--emerald)', description: 'Perfect for beginners' },
    { id: 'intermediate', name: 'Intermediate', color: '#FF8C00', description: 'For the curious minds' },
    { id: 'hard', name: 'Hard', color: 'var(--burgundy)', description: 'Challenge accepted!' }
  ]

  const funLevels = [
    { id: 'beginner', name: 'Beginner', color: 'var(--emerald)', description: 'Just getting started' },
    { id: 'middleman', name: 'MiddleMan', color: '#FF8C00', description: 'Getting serious' },
    { id: 'pro', name: 'Pro', color: 'var(--burgundy)', description: 'Master level' }
  ]

  if (!user) {
    return (
      <div className="page-container">
        <Navigation />
        <div className="content-wrapper">
          <div className="magical-card" style={{ textAlign: 'center' }}>
            <h2 className="section-title">🔒 Authentication Required</h2>
            <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
              Please sign in to access the magical world of quizzes!
            </p>
            <Link to="/" className="magical-button">Return to Home</Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="page-container">
      <Navigation />
      
      <div className="content-wrapper">
        <h1 className="section-title">Test Your Knowledge</h1>
        
        <div className="magical-card" style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <p style={{ fontSize: '1.2rem', fontStyle: 'italic', color: 'var(--deep-blue)' }}>
            <em>"The beautiful thing about learning is that no one can take it away from you."</em>
          </p>
          <p style={{ marginTop: '1rem', color: 'var(--silver)' }}>- B.B. King</p>
        </div>

        {/* Main Quiz Categories */}
        <div className="magical-card">
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '3rem' }}>
            <button
              className={`magical-button ${!showFunQuizzes ? 'selected' : ''}`}
              onClick={() => setShowFunQuizzes(false)}
              style={{ 
                background: !showFunQuizzes 
                  ? 'linear-gradient(45deg, var(--gold), #FFD700)' 
                  : 'linear-gradient(45deg, var(--silver), #E5E5E5)',
                color: !showFunQuizzes ? 'var(--deep-blue)' : '#666'
              }}
            >
              📚 Academic Quizzes
            </button>
            <button
              className={`magical-button ${showFunQuizzes ? 'selected' : ''}`}
              onClick={() => setShowFunQuizzes(true)}
              style={{ 
                background: showFunQuizzes 
                  ? 'linear-gradient(45deg, var(--emerald), #90EE90)' 
                  : 'linear-gradient(45deg, var(--silver), #E5E5E5)',
                color: showFunQuizzes ? 'white' : '#666'
              }}
            >
              🎮 Let's Have Some Fun
            </button>
          </div>

          {!showFunQuizzes ? (
            // Academic Subjects
            <>
              <h2 className="subsection-title">Choose Your Subject</h2>
              <div className="subjects-grid">
                {academicSubjects.map((subject) => (
                  <div
                    key={subject.id}
                    className="subject-card"
                    onClick={() => {
                      setSelectedSubject(subject)
                      setShowDifficultyPopup(true)
                    }}
                    style={{ borderColor: selectedSubject?.id === subject.id ? subject.color : 'rgba(255, 215, 0, 0.2)' }}
                  >
                    <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{subject.icon}</div>
                    <h3 className="subject-title" style={{ color: subject.color }}>{subject.name}</h3>
                  </div>
                ))}
              </div>

              {/* Difficulty Popup */}
              {showDifficultyPopup && selectedSubject && (
                <div className="popup-overlay" onClick={() => setShowDifficultyPopup(false)}>
                  <div className="popup-content" onClick={(e) => e.stopPropagation()}>
                    <button
                      className="popup-close"
                      onClick={() => setShowDifficultyPopup(false)}
                    >
                      ✕
                    </button>
                    <h3 className="popup-title">
                      Choose Difficulty for {selectedSubject.name}
                    </h3>
                    <div className="popup-buttons">
                      {difficulties.map((difficulty) => (
                        <Link
                          key={difficulty.id}
                          to={`/quiz/${selectedSubject.id}/${difficulty.id}`}
                          className="popup-button"
                          style={{
                            background: `linear-gradient(45deg, ${difficulty.color}, ${difficulty.color}dd)`,
                            color: 'white',
                            textDecoration: 'none'
                          }}
                        >
                          {difficulty.name}
                          <br />
                          <small>{difficulty.description}</small>
                        </Link>
                      ))}
                    </div>
                    <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
                      <p style={{ color: 'var(--light-gold)', fontWeight: '600', fontSize: '0.9rem' }}>
                        Scoring: +2 for correct, -1 for incorrect, 0 for skipped
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </>
          ) : (
            // Fun Quizzes
            <>
              <h2 className="subsection-title">Let's Have Some Fun!</h2>
              <p style={{ textAlign: 'center', marginBottom: '2rem', fontStyle: 'italic' }}>
                <em>No negative marking • Results stored for 1 week • Pure entertainment!</em>
              </p>
              
              <div className="subjects-grid" style={{ maxWidth: '600px', margin: '0 auto' }}>
                {funCategories.map((category) => (
                  <div
                    key={category.id}
                    className="subject-card"
                    onClick={() => {
                      setSelectedSubject(category)
                      setShowFunLevelsPopup(true)
                    }}
                    style={{ borderColor: selectedSubject?.id === category.id ? category.color : 'rgba(212, 175, 55, 0.3)' }}
                  >
                    <div style={{ marginBottom: '1rem' }}>
                      <img
                        src={category.image}
                        alt={category.name}
                        style={{
                          width: '80px',
                          height: '80px',
                          borderRadius: '50%',
                          objectFit: 'cover',
                          border: `2px solid ${category.color}`
                        }}
                      />
                    </div>
                    <h3 className="subject-title" style={{ color: category.color }}>{category.name}</h3>
                  </div>
                ))}
              </div>

              {/* Fun Levels Popup */}
              {showFunLevelsPopup && selectedSubject && (
                <div className="popup-overlay" onClick={() => setShowFunLevelsPopup(false)}>
                  <div className="popup-content" onClick={(e) => e.stopPropagation()}>
                    <button
                      className="popup-close"
                      onClick={() => setShowFunLevelsPopup(false)}
                    >
                      ✕
                    </button>
                    <h3 className="popup-title">
                      Choose Level for {selectedSubject.name}
                    </h3>
                    <div className="popup-buttons">
                      {funLevels.map((level) => (
                        <Link
                          key={level.id}
                          to={`/fun-quiz/${selectedSubject.id}/${level.id}`}
                          className="popup-button"
                          style={{
                            background: `linear-gradient(45deg, ${level.color}, ${level.color}dd)`,
                            color: 'white',
                            textDecoration: 'none'
                          }}
                        >
                          {level.name}
                          <br />
                          <small>{level.description}</small>
                        </Link>
                      ))}
                    </div>
                    <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
                      <p style={{ color: 'var(--emerald)', fontWeight: '600', fontSize: '0.9rem' }}>
                        🎉 Fun Mode: Only positive scoring • No pressure, just enjoyment!
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </>
          )}
        </div>

        {/* Instructions */}
        <div className="magical-card" style={{ marginTop: '3rem' }}>
          <h2 className="subsection-title">Quiz Instructions</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            <div>
              <h4 style={{ color: 'var(--gold)', marginBottom: '1rem' }}>Academic Quizzes</h4>
              <ul style={{ lineHeight: '1.8', paddingLeft: '1.5rem' }}>
                <li>10 questions per quiz session</li>
                <li>+2 points for correct answers</li>
                <li>-1 point for incorrect answers</li>
                <li>0 points for skipped questions</li>
                <li>No time limit - take your time!</li>
                <li>Results count towards leaderboard</li>
                <li>Cannot exit during quiz (counts as attempt)</li>
              </ul>
            </div>
            <div>
              <h4 style={{ color: 'var(--emerald)', marginBottom: '1rem' }}>Fun Quizzes</h4>
              <ul style={{ lineHeight: '1.8', paddingLeft: '1.5rem' }}>
                <li>10 questions per quiz session</li>
                <li>Only positive scoring</li>
                <li>No negative marking</li>
                <li>Results stored for 1 week only</li>
                <li>Pure entertainment value</li>
                <li>Does not affect leaderboard</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
