import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import Navigation from './Navigation'
import { getRandomQuestions } from '../data/questions'

export default function Quiz() {
  const { subject, difficulty } = useParams()
  const { user } = useAuth()
  const navigate = useNavigate()
  
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState('')
  const [answers, setAnswers] = useState({})
  const [showResults, setShowResults] = useState(false)
  const [score, setScore] = useState(0)
  const [quizStarted, setQuizStarted] = useState(false)
  const [showFeedback, setShowFeedback] = useState(false)

  // Sample questions - you'll replace these with your actual questions
  const sampleQuestions = {
    easy: [
      {
        id: 1,
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        correct: "4"
      },
      {
        id: 2,
        question: "What is the capital of France?",
        options: ["London", "Berlin", "Paris", "Madrid"],
        correct: "Paris"
      },
      {
        id: 3,
        question: "How many days are there in a week?",
        options: ["5", "6", "7", "8"],
        correct: "7"
      },
      {
        id: 4,
        question: "What color do you get when you mix red and white?",
        options: ["Purple", "Pink", "Orange", "Yellow"],
        correct: "Pink"
      },
      {
        id: 5,
        question: "Which planet is closest to the Sun?",
        options: ["Venus", "Earth", "Mercury", "Mars"],
        correct: "Mercury"
      },
      {
        id: 6,
        question: "What is the largest mammal in the world?",
        options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
        correct: "Blue Whale"
      },
      {
        id: 7,
        question: "How many sides does a triangle have?",
        options: ["2", "3", "4", "5"],
        correct: "3"
      },
      {
        id: 8,
        question: "What do bees make?",
        options: ["Milk", "Honey", "Butter", "Cheese"],
        correct: "Honey"
      },
      {
        id: 9,
        question: "Which season comes after winter?",
        options: ["Summer", "Fall", "Spring", "Autumn"],
        correct: "Spring"
      },
      {
        id: 10,
        question: "What is the opposite of hot?",
        options: ["Warm", "Cool", "Cold", "Freezing"],
        correct: "Cold"
      }
    ]
  }

  const [questions, setQuestions] = useState([])

  useEffect(() => {
    // Load questions based on subject and difficulty
    const loadedQuestions = getRandomQuestions(subject, difficulty, 10)
    setQuestions(loadedQuestions)
  }, [subject, difficulty])

  useEffect(() => {
    // Prevent page refresh/close during quiz
    const handleBeforeUnload = (e) => {
      if (quizStarted && !showResults) {
        e.preventDefault()
        e.returnValue = ''
      }
    }

    window.addEventListener('beforeunload', handleBeforeUnload)
    return () => window.removeEventListener('beforeunload', handleBeforeUnload)
  }, [quizStarted, showResults])

  const startQuiz = () => {
    setQuizStarted(true)
  }

  const handleAnswerSelect = (answer) => {
    setSelectedAnswer(answer)
    setShowFeedback(true)
  }

  const handleNext = () => {
    // Save the answer
    setAnswers(prev => ({
      ...prev,
      [currentQuestion]: selectedAnswer
    }))

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1)
      setSelectedAnswer('')
      setShowFeedback(false)
    } else {
      // Quiz finished, calculate results
      calculateResults()
    }
  }

  const handleSkip = () => {
    // Skip without saving answer
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1)
      setSelectedAnswer('')
      setShowFeedback(false)
    } else {
      calculateResults()
    }
  }

  const calculateResults = () => {
    let totalScore = 0
    let correctCount = 0
    let incorrectCount = 0
    let skippedCount = 0

    questions.forEach((question, index) => {
      const userAnswer = answers[index]
      if (!userAnswer) {
        skippedCount++
        // No points for skipped
      } else if (userAnswer === question.correct) {
        correctCount++
        totalScore += 2 // +2 for correct
      } else {
        incorrectCount++
        totalScore -= 1 // -1 for incorrect
      }
    })

    setScore(totalScore)
    setShowResults(true)
    
    // Here you would save results to database
    console.log('Quiz Results:', {
      subject,
      difficulty,
      score: totalScore,
      correct: correctCount,
      incorrect: incorrectCount,
      skipped: skippedCount
    })
  }

  if (!user) {
    return (
      <div className="page-container">
        <Navigation />
        <div className="content-wrapper">
          <div className="magical-card" style={{ textAlign: 'center' }}>
            <h2 className="section-title">🔒 Authentication Required</h2>
            <p>Please sign in to take quizzes!</p>
          </div>
        </div>
      </div>
    )
  }

  if (questions.length === 0) {
    return (
      <div className="page-container">
        <Navigation />
        <div className="content-wrapper">
          <div className="magical-card" style={{ textAlign: 'center' }}>
            <div className="loading-spinner"></div>
            <p style={{ marginTop: '1rem' }}>Loading magical questions...</p>
          </div>
        </div>
      </div>
    )
  }

  if (showResults) {
    return (
      <div className="page-container">
        <Navigation />
        <div className="content-wrapper">
          <div className="quiz-container">
            <div className="magical-card" style={{ textAlign: 'center' }}>
              <h1 className="section-title">🎉 Quiz Complete!</h1>
              
              <div style={{ fontSize: '4rem', margin: '2rem 0' }}>
                {score >= 15 ? '🏆' : score >= 10 ? '🥈' : score >= 5 ? '🥉' : '📚'}
              </div>
              
              <h2 style={{ color: 'var(--gold)', marginBottom: '2rem' }}>
                Your Score: {score} points
              </h2>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', margin: '2rem 0' }}>
                <div style={{ background: 'rgba(80, 200, 120, 0.2)', padding: '1rem', borderRadius: '10px' }}>
                  <h3 style={{ color: 'var(--emerald)' }}>Correct</h3>
                  <p style={{ fontSize: '2rem', fontWeight: 'bold' }}>
                    {Object.values(answers).filter((answer, index) => answer === questions[index]?.correct).length}
                  </p>
                </div>
                <div style={{ background: 'rgba(139, 0, 0, 0.2)', padding: '1rem', borderRadius: '10px' }}>
                  <h3 style={{ color: 'var(--burgundy)' }}>Incorrect</h3>
                  <p style={{ fontSize: '2rem', fontWeight: 'bold' }}>
                    {Object.values(answers).filter((answer, index) => answer && answer !== questions[index]?.correct).length}
                  </p>
                </div>
                <div style={{ background: 'rgba(192, 192, 192, 0.2)', padding: '1rem', borderRadius: '10px' }}>
                  <h3 style={{ color: 'var(--silver)' }}>Skipped</h3>
                  <p style={{ fontSize: '2rem', fontWeight: 'bold' }}>
                    {questions.length - Object.keys(answers).length}
                  </p>
                </div>
              </div>
              
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '2rem' }}>
                <button 
                  className="magical-button"
                  onClick={() => navigate('/test-knowledge')}
                >
                  🎯 Take Another Quiz
                </button>
                <button 
                  className="magical-button"
                  onClick={() => navigate('/leaderboard')}
                >
                  🏆 View Leaderboard
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (!quizStarted) {
    return (
      <div className="page-container">
        <Navigation />
        <div className="content-wrapper">
          <div className="quiz-container">
            <div className="magical-card" style={{ textAlign: 'center' }}>
              <h1 className="section-title">
                🎓 {subject.charAt(0).toUpperCase() + subject.slice(1)} Quiz
              </h1>
              <h2 style={{ color: 'var(--gold)', marginBottom: '2rem' }}>
                Difficulty: {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
              </h2>
              
              <div style={{ marginBottom: '3rem' }}>
                <h3 style={{ color: 'var(--emerald)', marginBottom: '1rem' }}>Quiz Rules:</h3>
                <ul style={{ textAlign: 'left', maxWidth: '400px', margin: '0 auto', lineHeight: '1.8' }}>
                  <li>10 questions total</li>
                  <li>+2 points for correct answers</li>
                  <li>-1 point for incorrect answers</li>
                  <li>0 points for skipped questions</li>
                  <li>No time limit</li>
                  <li>Cannot exit during quiz</li>
                </ul>
              </div>
              
              <button className="magical-button" onClick={startQuiz}>
                🚀 Start Quiz
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const currentQ = questions[currentQuestion]

  return (
    <div className="page-container">
      <Navigation />
      <div className="content-wrapper">
        <div className="quiz-container">
          <div className="quiz-progress">
            Question {currentQuestion + 1} of {questions.length}
          </div>
          
          <div className="question-card">
            <h2 className="question-text">{currentQ.question}</h2>
            
            <div className="options-container">
              {currentQ.options.map((option, index) => {
                let buttonClass = 'option-button'
                let buttonStyle = {}

                if (showFeedback && selectedAnswer) {
                  if (option === currentQ.correct) {
                    // Correct answer - bright green
                    buttonClass += ' correct-answer'
                    buttonStyle = {
                      backgroundColor: '#28a745',
                      color: 'white',
                      border: '2px solid #1e7e34'
                    }
                  } else if (option === selectedAnswer && option !== currentQ.correct) {
                    // Wrong selected answer - bright red
                    buttonClass += ' incorrect-answer'
                    buttonStyle = {
                      backgroundColor: '#dc3545',
                      color: 'white',
                      border: '2px solid #c82333'
                    }
                  }
                } else if (selectedAnswer === option) {
                  buttonClass += ' selected'
                }

                return (
                  <button
                    key={index}
                    className={buttonClass}
                    style={buttonStyle}
                    onClick={() => !showFeedback && handleAnswerSelect(option)}
                    disabled={showFeedback}
                  >
                    {String.fromCharCode(65 + index)}. {option}
                  </button>
                )
              })}
            </div>
            
            <div className="quiz-controls">
              <button 
                className="magical-button"
                onClick={handleSkip}
                style={{ background: 'linear-gradient(45deg, var(--silver), #E5E5E5)', color: '#666' }}
              >
                ⏭️ Skip
              </button>
              
              <button 
                className="magical-button"
                onClick={handleNext}
                disabled={!selectedAnswer}
                style={{ 
                  opacity: selectedAnswer ? 1 : 0.5,
                  cursor: selectedAnswer ? 'pointer' : 'not-allowed'
                }}
              >
                {currentQuestion === questions.length - 1 ? '🏁 Finish' : '➡️ Next'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
