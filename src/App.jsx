import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AuthProvider, { useAuth } from './contexts/AuthContext'
import HomePage from './components/HomePage'
import AboutUs from './components/AboutUs'
import MeetTheTeam from './components/MeetTheTeam'
import FactsAndKnowledge from './components/FactsAndKnowledge'
import TestYourKnowledge from './components/TestYourKnowledge'
import Leaderboard from './components/Leaderboard'
import Login from './components/Login'
import ScrollToTop from './components/ScrollToTop'
import './App.css'

function AppContent() {
  const { user, loading } = useAuth()

  if (loading) {
    return (
      <div className="page-container" style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh'
      }}>
        <div className="loading-spinner" style={{ width: '50px', height: '50px' }}></div>
      </div>
    )
  }

  if (!user) {
    return <Login />
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/team" element={<MeetTheTeam />} />
        <Route path="/facts" element={<FactsAndKnowledge />} />
        <Route path="/test-knowledge" element={<TestYourKnowledge />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
      </Routes>
      <ScrollToTop />
    </>
  )
}

function App() {
  return (
    <AuthProvider>
      <Router basename={import.meta.env.BASE_URL}>
        <AppContent />
      </Router>
    </AuthProvider>
  )
}

export default App