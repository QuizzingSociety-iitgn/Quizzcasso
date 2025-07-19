import React, { useState } from 'react'
import './App.css'

function App() {
  const [user, setUser] = useState(null)

  const signInWithGoogle = () => {
    setUser({
      id: 'test-user',
      email: 'test@example.com',
      username: 'Wizard'
    })
  }

  const signOut = () => {
    setUser(null)
  }

  return (
    <div className="App">
      {/* Navigation */}
      <nav style={{
        background: 'rgba(15, 15, 35, 0.95)',
        padding: '1rem 0',
        position: 'sticky',
        top: 0,
        zIndex: 100,
        borderBottom: '2px solid rgba(255, 215, 0, 0.2)',
        boxShadow: '0 2px 20px rgba(0, 0, 0, 0.3)'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <ul style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '2rem',
            listStyle: 'none',
            alignItems: 'center',
            margin: 0,
            padding: 0
          }}>
            <li><a href="#home" style={{ color: '#E8E8E8', textDecoration: 'none', fontFamily: 'serif', fontSize: '1.1rem' }}>🏠 Home</a></li>
            <li><a href="#about" style={{ color: '#E8E8E8', textDecoration: 'none', fontFamily: 'serif', fontSize: '1.1rem' }}>About Us</a></li>
            <li><a href="#team" style={{ color: '#E8E8E8', textDecoration: 'none', fontFamily: 'serif', fontSize: '1.1rem' }}>Meet the Team</a></li>
            <li><a href="#facts" style={{ color: '#E8E8E8', textDecoration: 'none', fontFamily: 'serif', fontSize: '1.1rem' }}>Facts & Knowledge</a></li>
            {user && (
              <>
                <li><a href="#quiz" style={{ color: '#E8E8E8', textDecoration: 'none', fontFamily: 'serif', fontSize: '1.1rem' }}>Test Knowledge</a></li>
                <li><a href="#leaderboard" style={{ color: '#E8E8E8', textDecoration: 'none', fontFamily: 'serif', fontSize: '1.1rem' }}>🏆 Leaderboard</a></li>
                <li><button onClick={signOut} style={{ background: 'none', border: 'none', color: '#E8E8E8', cursor: 'pointer', fontFamily: 'serif', fontSize: '1.1rem' }}>🚪 Sign Out</button></li>
              </>
            )}
          </ul>
        </div>
      </nav>

      {/* Main Content */}
      <div style={{ minHeight: '100vh', padding: '2rem 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          
          {/* Main Title */}
          <h1 style={{
            fontFamily: 'serif',
            fontSize: '5.5rem',
            fontWeight: 700,
            color: '#FFD700',
            textAlign: 'center',
            textShadow: '3px 3px 6px rgba(0, 0, 0, 0.9), 0 0 40px rgba(255, 215, 0, 0.6)',
            margin: '2rem 0',
            letterSpacing: '2px'
          }}>
            🪄 Quizzcasso ✨
          </h1>
          
          <p style={{
            fontFamily: 'serif',
            fontSize: '1.2rem',
            color: '#E8E8E8',
            textAlign: 'center',
            fontStyle: 'italic',
            marginBottom: '3rem',
            textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)'
          }}>
            "Where Knowledge Meets Magic - Embark on Your Enchanted Learning Journey"
          </p>

          {/* Authentication Section */}
          {!user ? (
            <div style={{
              background: 'linear-gradient(145deg, rgba(192, 192, 192, 0.08) 0%, rgba(135, 206, 235, 0.06) 100%)',
              backdropFilter: 'blur(15px)',
              border: '2px solid rgba(192, 192, 192, 0.4)',
              borderRadius: '15px',
              padding: '2rem',
              margin: '1rem 0 3rem 0',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.4)',
              textAlign: 'center'
            }}>
              <h2 style={{ fontFamily: 'serif', fontSize: '1.8rem', color: '#FFFFE0', margin: '1.5rem 0' }}>
                Welcome to the Magical World of Learning!
              </h2>
              <p style={{ marginBottom: '2rem', fontSize: '1.1rem', color: '#E8E8E8' }}>
                Sign in with Google to begin your enchanted quiz adventure
              </p>
              <button onClick={signInWithGoogle} style={{
                background: 'linear-gradient(45deg, #FFD700, #FFD700)',
                color: '#0A0A1A',
                border: 'none',
                padding: '12px 30px',
                borderRadius: '25px',
                fontFamily: 'serif',
                fontWeight: 600,
                fontSize: '1rem',
                cursor: 'pointer',
                boxShadow: '0 4px 15px rgba(255, 215, 0, 0.3), 0 0 20px rgba(255, 215, 0, 0.1)'
              }}>
                🪄 Sign in with Google
              </button>
            </div>
          ) : (
            <div style={{
              background: 'linear-gradient(145deg, rgba(192, 192, 192, 0.08) 0%, rgba(135, 206, 235, 0.06) 100%)',
              backdropFilter: 'blur(15px)',
              border: '2px solid rgba(192, 192, 192, 0.4)',
              borderRadius: '15px',
              padding: '2rem',
              margin: '1rem 0 3rem 0',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.4)',
              textAlign: 'center'
            }}>
              <h2 style={{ fontFamily: 'serif', fontSize: '1.8rem', color: '#FFFFE0', margin: '1.5rem 0' }}>
                Welcome back, {user.username || 'Wizard'}! ✨
              </h2>
              <p style={{ marginBottom: '2rem', fontSize: '1.1rem', color: '#E8E8E8' }}>
                Ready to test your magical knowledge?
              </p>
              <button style={{
                background: 'linear-gradient(45deg, #FFD700, #FFD700)',
                color: '#0A0A1A',
                border: 'none',
                padding: '12px 30px',
                borderRadius: '25px',
                fontFamily: 'serif',
                fontWeight: 600,
                fontSize: '1rem',
                cursor: 'pointer',
                boxShadow: '0 4px 15px rgba(255, 215, 0, 0.3), 0 0 20px rgba(255, 215, 0, 0.1)',
                textDecoration: 'none',
                display: 'inline-block'
              }}>
                🧙‍♀️ Start Your Quest
              </button>
            </div>
          )}

          {/* Main Navigation Cards */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '1.5rem',
            margin: '2rem 0'
          }}>
            <div style={{
              background: 'linear-gradient(145deg, rgba(192, 192, 192, 0.08) 0%, rgba(135, 206, 235, 0.06) 100%)',
              backdropFilter: 'blur(10px)',
              border: '2px solid rgba(255, 215, 0, 0.3)',
              borderRadius: '15px',
              padding: '1.5rem',
              textAlign: 'center',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}>
              <h3 style={{ fontFamily: 'serif', fontSize: '1.3rem', color: '#1A0B3D', marginBottom: '1rem' }}>About Us</h3>
              <p style={{ color: '#E8E8E8' }}>Discover the magical story behind Quizzcasso and our mission to make learning enchanting</p>
            </div>

            <div style={{
              background: 'linear-gradient(145deg, rgba(192, 192, 192, 0.08) 0%, rgba(135, 206, 235, 0.06) 100%)',
              backdropFilter: 'blur(10px)',
              border: '2px solid rgba(255, 215, 0, 0.3)',
              borderRadius: '15px',
              padding: '1.5rem',
              textAlign: 'center',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}>
              <h3 style={{ fontFamily: 'serif', fontSize: '1.3rem', color: '#1A0B3D', marginBottom: '1rem' }}>Meet the Team</h3>
              <p style={{ color: '#E8E8E8' }}>Meet the brilliant wizards and witches who created this magical learning experience</p>
            </div>

            <div style={{
              background: 'linear-gradient(145deg, rgba(192, 192, 192, 0.08) 0%, rgba(135, 206, 235, 0.06) 100%)',
              backdropFilter: 'blur(10px)',
              border: '2px solid rgba(255, 215, 0, 0.3)',
              borderRadius: '15px',
              padding: '1.5rem',
              textAlign: 'center',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}>
              <h3 style={{ fontFamily: 'serif', fontSize: '1.3rem', color: '#1A0B3D', marginBottom: '1rem' }}>Facts & Knowledge</h3>
              <p style={{ color: '#E8E8E8' }}>Explore fascinating facts and expand your knowledge with our curated collection</p>
            </div>

            {user && (
              <>
                <div style={{
                  background: 'linear-gradient(145deg, rgba(192, 192, 192, 0.08) 0%, rgba(135, 206, 235, 0.06) 100%)',
                  backdropFilter: 'blur(10px)',
                  border: '2px solid rgba(255, 215, 0, 0.3)',
                  borderRadius: '15px',
                  padding: '1.5rem',
                  textAlign: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}>
                  <h3 style={{ fontFamily: 'serif', fontSize: '1.3rem', color: '#1A0B3D', marginBottom: '1rem' }}>Test Your Knowledge</h3>
                  <p style={{ color: '#E8E8E8' }}>Challenge yourself with academic quizzes across multiple subjects and difficulty levels</p>
                </div>

                <div style={{
                  background: 'linear-gradient(145deg, rgba(192, 192, 192, 0.08) 0%, rgba(135, 206, 235, 0.06) 100%)',
                  backdropFilter: 'blur(10px)',
                  border: '2px solid rgba(255, 215, 0, 0.3)',
                  borderRadius: '15px',
                  padding: '1.5rem',
                  textAlign: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}>
                  <h3 style={{ fontFamily: 'serif', fontSize: '1.3rem', color: '#1A0B3D', marginBottom: '1rem' }}>Leaderboard</h3>
                  <p style={{ color: '#E8E8E8' }}>See how you rank among fellow wizards and witches in the magical realm of knowledge</p>
                </div>
              </>
            )}
          </div>

          {/* Featured Section */}
          <div style={{
            background: 'linear-gradient(145deg, rgba(192, 192, 192, 0.08) 0%, rgba(135, 206, 235, 0.06) 100%)',
            backdropFilter: 'blur(15px)',
            border: '2px solid rgba(192, 192, 192, 0.4)',
            borderRadius: '15px',
            padding: '2rem',
            margin: '1rem 0',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.4)'
          }}>
            <h2 style={{
              fontFamily: 'serif',
              fontSize: '2.5rem',
              color: '#FFD700',
              textAlign: 'center',
              margin: '2rem 0',
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6), 0 0 20px rgba(255, 215, 0, 0.3)'
            }}>
              ✨ What Makes Quizzcasso Magical?
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
              <div style={{ textAlign: 'center' }}>
                <h3 style={{ fontFamily: 'serif', fontSize: '1.8rem', color: '#FFFFE0', margin: '1.5rem 0' }}>🎯 Diverse Subjects</h3>
                <p style={{ color: '#E8E8E8' }}>From Mathematics to Astrology, explore 14 different subjects with varying difficulty levels</p>
              </div>
              <div style={{ textAlign: 'center' }}>
                <h3 style={{ fontFamily: 'serif', fontSize: '1.8rem', color: '#FFFFE0', margin: '1.5rem 0' }}>🎮 Fun Quizzes</h3>
                <p style={{ color: '#E8E8E8' }}>Enjoy themed quizzes from Harry Potter and Marvel universes for pure entertainment</p>
              </div>
              <div style={{ textAlign: 'center' }}>
                <h3 style={{ fontFamily: 'serif', fontSize: '1.8rem', color: '#FFFFE0', margin: '1.5rem 0' }}>🏅 Competitive Spirit</h3>
                <p style={{ color: '#E8E8E8' }}>Climb the leaderboard and showcase your knowledge prowess to the community</p>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div style={{
            background: 'linear-gradient(145deg, rgba(192, 192, 192, 0.08) 0%, rgba(135, 206, 235, 0.06) 100%)',
            backdropFilter: 'blur(15px)',
            border: '2px solid rgba(192, 192, 192, 0.4)',
            borderRadius: '15px',
            padding: '2rem',
            margin: '4rem 0 1rem 0',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.4)',
            textAlign: 'center'
          }}>
            <h3 style={{ fontFamily: 'serif', fontSize: '1.8rem', color: '#FFFFE0', margin: '1.5rem 0' }}>Created with ✨ by</h3>
            <div style={{ fontFamily: 'serif', fontSize: '1.3rem', color: '#FFD700', marginBottom: '1rem' }}>
              Srushti Dandekar
            </div>
            <p style={{ fontStyle: 'italic', color: '#C0C0C0' }}>
              Club Secretary, Quizzing Society of IIT Gandhinagar<br/>
              BTech'23 Student, Civil Engineering Department
            </p>
            <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: '#50C878' }}>
              "Bringing magic to learning, one quiz at a time"
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
