import React, { useState, useEffect } from 'react'
import Navigation from './Navigation'
import { useAuth } from '../contexts/AuthContext'

export default function Leaderboard() {
  const { user } = useAuth()
  const [leaderboardData, setLeaderboardData] = useState([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState('all')

  // Mock leaderboard data - in real app, this would come from your database
  const mockLeaderboardData = [
    {
      rank: 1,
      username: "HermioneGranger",
      totalScore: 285,
      quizzesGiven: 15,
      positivePoints: 300,
      negativePoints: -15,
      averageScore: 19.0,
      lastActive: new Date().toISOString()
    },
    {
      rank: 2,
      username: "HarryPotter",
      totalScore: 267,
      quizzesGiven: 14,
      positivePoints: 280,
      negativePoints: -13,
      averageScore: 19.1,
      lastActive: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString()
    },
    {
      rank: 3,
      username: "LunaLovegood",
      totalScore: 245,
      quizzesGiven: 13,
      positivePoints: 260,
      negativePoints: -15,
      averageScore: 18.8,
      lastActive: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString()
    },
    {
      rank: 4,
      username: "NevilleLongbottom",
      totalScore: 223,
      quizzesGiven: 12,
      positivePoints: 240,
      negativePoints: -17,
      averageScore: 18.6,
      lastActive: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString()
    },
    {
      rank: 5,
      username: "GinnyWeasley",
      totalScore: 201,
      quizzesGiven: 11,
      positivePoints: 220,
      negativePoints: -19,
      averageScore: 18.3,
      lastActive: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000).toISOString()
    }
  ]

  useEffect(() => {
    // Simulate loading leaderboard data
    setTimeout(() => {
      setLeaderboardData(mockLeaderboardData)
      setLoading(false)
    }, 1000)
  }, [])

  const filteredData = leaderboardData.filter(player => {
    if (filter === 'all') return true
    if (filter === 'top10') return player.rank <= 10
    if (filter === 'active') return new Date(player.lastActive) >= new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
    return true
  })

  const getRankIcon = (rank) => {
    if (rank === 1) return '🥇'
    if (rank === 2) return '🥈'
    if (rank === 3) return '🥉'
    if (rank <= 10) return '🏆'
    return '📊'
  }

  const getRankColor = (rank) => {
    if (rank === 1) return 'var(--light-gold)'
    if (rank === 2) return 'var(--light-silver)'
    if (rank === 3) return '#CD7F32'
    if (rank <= 10) return '#90EE90'
    return 'var(--light-yellow)'
  }

  if (!user) {
    return (
      <div className="page-container">
        <Navigation />
        <div className="content-wrapper">
          <div className="magical-card" style={{ textAlign: 'center' }}>
            <h2 className="section-title">🔒 Authentication Required</h2>
            <p>Please sign in to view the leaderboard!</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="page-container">
      <Navigation />
      
      <div className="content-wrapper">
        <h1 className="section-title">🏆 Leaderboard</h1>

        <div className="magical-card" style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <p style={{ fontSize: '1.2rem', fontStyle: 'italic', color: 'var(--light-silver)' }}>
            <em>"Excellence is never an accident. It is always the result of high intention, sincere effort, and intelligent execution."</em>
          </p>
          <p style={{ marginTop: '1rem', color: 'var(--light-gold)' }}>- Aristotle</p>
        </div>

        {/* Filter Options */}
        <div className="magical-card">
          <h2 className="subsection-title">Filter Rankings</h2>
          <div className="difficulty-buttons">
            <button
              className={`difficulty-button ${filter === 'all' ? 'selected' : ''}`}
              onClick={() => setFilter('all')}
              style={{
                background: filter === 'all'
                  ? 'linear-gradient(45deg, var(--light-gold), #FFD700)'
                  : 'linear-gradient(45deg, rgba(245, 245, 245, 0.1), rgba(245, 245, 245, 0.2))',
                color: filter === 'all' ? 'var(--navy-blue)' : 'var(--light-silver)'
              }}
            >
              🌟 All Players
            </button>
            <button
              className={`difficulty-button ${filter === 'top10' ? 'selected' : ''}`}
              onClick={() => setFilter('top10')}
              style={{
                background: filter === 'top10'
                  ? 'linear-gradient(45deg, #90EE90, #98FB98)'
                  : 'linear-gradient(45deg, rgba(245, 245, 245, 0.1), rgba(245, 245, 245, 0.2))',
                color: filter === 'top10' ? 'var(--navy-blue)' : 'var(--light-silver)'
              }}
            >
              🏆 Top 10
            </button>
            <button
              className={`difficulty-button ${filter === 'active' ? 'selected' : ''}`}
              onClick={() => setFilter('active')}
              style={{
                background: filter === 'active'
                  ? 'linear-gradient(45deg, #FFB6C1, #FFC0CB)'
                  : 'linear-gradient(45deg, rgba(245, 245, 245, 0.1), rgba(245, 245, 245, 0.2))',
                color: filter === 'active' ? 'var(--navy-blue)' : 'var(--light-silver)'
              }}
            >
              ⚡ Active This Week
            </button>
          </div>
        </div>

        {/* Leaderboard Table */}
        <div className="magical-card">
          {loading ? (
            <div style={{ textAlign: 'center', padding: '3rem' }}>
              <div className="loading-spinner"></div>
              <p style={{ marginTop: '1rem' }}>Loading magical rankings...</p>
            </div>
          ) : filteredData.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '3rem' }}>
              <h2 className="subsection-title">🎯 Leaderboard</h2>
              <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🏆</div>
              <p style={{ fontSize: '1.2rem', color: 'var(--light-gold)', marginBottom: '1rem' }}>
                The leaderboard is waiting for brave wizards!
              </p>
              <p style={{ color: 'var(--light-silver)', fontStyle: 'italic' }}>
                Take some quizzes to see your name appear here and compete with other magical learners.
              </p>
            </div>
          ) : (
            <>
              <h2 className="subsection-title">🎯 Top Performers</h2>
              <div style={{ overflowX: 'auto' }}>
                <table className="leaderboard-table">
                  <thead>
                    <tr>
                      <th>Rank</th>
                      <th>Username</th>
                      <th>Total Score</th>
                      <th>Quizzes Given</th>
                      <th>Positive Points</th>
                      <th>Negative Points</th>
                      <th>Average Score</th>
                      <th>Last Active</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredData.map((player) => (
                      <tr
                        key={player.rank}
                        style={{
                          background: user.username === player.username
                            ? 'rgba(255, 215, 0, 0.1)'
                            : 'transparent',
                          fontWeight: user.username === player.username ? '600' : 'normal'
                        }}
                      >
                        <td>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <span style={{ fontSize: '1.5rem' }}>{getRankIcon(player.rank)}</span>
                            <span style={{ color: getRankColor(player.rank), fontWeight: '600' }}>
                              #{player.rank}
                            </span>
                          </div>
                        </td>
                        <td>
                          <div style={{ fontWeight: '600', color: 'var(--light-gold)' }}>
                            {player.username}
                            {user.username === player.username && (
                              <span style={{ color: 'var(--light-yellow)', marginLeft: '0.5rem' }}>
                                (You)
                              </span>
                            )}
                          </div>
                        </td>
                        <td>
                          <span style={{
                            color: player.totalScore >= 200 ? 'var(--light-gold)' :
                                   player.totalScore >= 100 ? 'var(--light-yellow)' : 'var(--light-silver)',
                            fontWeight: '600',
                            fontSize: '1.1rem'
                          }}>
                            {player.totalScore}
                          </span>
                        </td>
                        <td style={{ color: 'var(--light-silver)' }}>{player.quizzesGiven}</td>
                        <td style={{ color: '#90EE90', fontWeight: '600' }}>
                          +{player.positivePoints}
                        </td>
                        <td style={{ color: '#FFB6C1', fontWeight: '600' }}>
                          {player.negativePoints}
                        </td>
                        <td style={{ color: 'var(--light-gold)', fontWeight: '600' }}>
                          {player.averageScore.toFixed(1)}
                        </td>
                        <td style={{ fontSize: '0.9rem', color: 'var(--light-silver)' }}>
                          {new Date(player.lastActive).toLocaleDateString()}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )}
        </div>

        {/* Statistics */}
        <div className="magical-card" style={{ marginTop: '2rem' }}>
          <h2 className="subsection-title">📊 Your Statistics</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
            <div style={{
              background: 'rgba(255, 215, 0, 0.05)',
              padding: '1.5rem',
              borderRadius: '10px',
              textAlign: 'center',
              border: '2px solid rgba(255, 215, 0, 0.2)'
            }}>
              <h3 style={{ color: 'var(--light-gold)', marginBottom: '0.5rem' }}>Your Rank</h3>
              <p style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--light-silver)' }}>
                N/A
              </p>
              <p style={{ fontSize: '0.8rem', color: 'var(--light-silver)', fontStyle: 'italic' }}>
                Take a quiz to get ranked!
              </p>
            </div>
            <div style={{
              background: 'rgba(144, 238, 144, 0.05)',
              padding: '1.5rem',
              borderRadius: '10px',
              textAlign: 'center',
              border: '2px solid rgba(144, 238, 144, 0.2)'
            }}>
              <h3 style={{ color: '#90EE90', marginBottom: '0.5rem' }}>Total Score</h3>
              <p style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--light-silver)' }}>
                0
              </p>
              <p style={{ fontSize: '0.8rem', color: 'var(--light-silver)', fontStyle: 'italic' }}>
                Start your journey!
              </p>
            </div>
            <div style={{
              background: 'rgba(255, 255, 224, 0.05)',
              padding: '1.5rem',
              borderRadius: '10px',
              textAlign: 'center',
              border: '2px solid rgba(255, 255, 224, 0.2)'
            }}>
              <h3 style={{ color: 'var(--light-yellow)', marginBottom: '0.5rem' }}>Quizzes Taken</h3>
              <p style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--light-silver)' }}>
                0
              </p>
              <p style={{ fontSize: '0.8rem', color: 'var(--light-silver)', fontStyle: 'italic' }}>
                Ready to begin?
              </p>
            </div>
            <div style={{
              background: 'rgba(245, 245, 245, 0.05)',
              padding: '1.5rem',
              borderRadius: '10px',
              textAlign: 'center',
              border: '2px solid rgba(245, 245, 245, 0.2)'
            }}>
              <h3 style={{ color: 'var(--light-silver)', marginBottom: '0.5rem' }}>Average Score</h3>
              <p style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--light-silver)' }}>
                0.0
              </p>
              <p style={{ fontSize: '0.8rem', color: 'var(--light-silver)', fontStyle: 'italic' }}>
                Build your average!
              </p>
            </div>
          </div>
        </div>

        {/* Motivational Section */}
        <div className="magical-card" style={{ marginTop: '2rem', textAlign: 'center' }}>
          <h3 style={{ color: 'var(--light-gold)', marginBottom: '1rem' }}>🌟 Ready to Begin Your Journey?</h3>
          <p style={{ fontSize: '1.1rem', fontStyle: 'italic', color: 'var(--light-silver)' }}>
            <em>Every quiz you take is a step towards mastery. Start your magical learning adventure and watch yourself rise through the ranks!</em>
          </p>
        </div>
      </div>
    </div>
  )
}
