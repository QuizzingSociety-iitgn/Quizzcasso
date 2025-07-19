import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import Navigation from './Navigation'
import { getRandomFunQuestions } from '../data/questions'

export default function FunQuiz() {
  const { category, level } = useParams()
  const { user } = useAuth()
  const navigate = useNavigate()
  
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState('')
  const [answers, setAnswers] = useState({})
  const [showResults, setShowResults] = useState(false)
  const [score, setScore] = useState(0)
  const [quizStarted, setQuizStarted] = useState(false)

  // Sample fun quiz questions
  const funQuestions = {
    'harry-potter': {
      beginner: [
        {
          id: 1,
          question: "What is the name of Harry Potter's owl?",
          options: ["Hedwig", "Errol", "Pigwidgeon", "Archimedes"],
          correct: "Hedwig"
        },
        {
          id: 2,
          question: "Which house does Harry Potter belong to?",
          options: ["Slytherin", "Hufflepuff", "Ravenclaw", "Gryffindor"],
          correct: "Gryffindor"
        },
        {
          id: 3,
          question: "What is the name of Harry's best friend?",
          options: ["Draco Malfoy", "Ron Weasley", "Neville Longbottom", "Dean Thomas"],
          correct: "Ron Weasley"
        },
        {
          id: 4,
          question: "What position does Harry play in Quidditch?",
          options: ["Keeper", "Chaser", "Beater", "Seeker"],
          correct: "Seeker"
        },
        {
          id: 5,
          question: "What is the name of the three-headed dog?",
          options: ["Fluffy", "Fang", "Buckbeak", "Norbert"],
          correct: "Fluffy"
        },
        {
          id: 6,
          question: "Who is the headmaster of Hogwarts?",
          options: ["Severus Snape", "Minerva McGonagall", "Albus Dumbledore", "Rubeus Hagrid"],
          correct: "Albus Dumbledore"
        },
        {
          id: 7,
          question: "What is the name of the wizarding bank?",
          options: ["Gringotts", "Diagon Alley", "Knockturn Alley", "Hogsmeade"],
          correct: "Gringotts"
        },
        {
          id: 8,
          question: "What does the spell 'Expelliarmus' do?",
          options: ["Disarms opponent", "Creates light", "Unlocks doors", "Levitates objects"],
          correct: "Disarms opponent"
        },
        {
          id: 9,
          question: "What is Hermione's last name?",
          options: ["Granger", "Weasley", "Potter", "Lovegood"],
          correct: "Granger"
        },
        {
          id: 10,
          question: "What platform do students use to board the Hogwarts Express?",
          options: ["Platform 8¾", "Platform 9¾", "Platform 10¾", "Platform 7¾"],
          correct: "Platform 9¾"
        }
      ]
    },
    'marvel-avengers': {
      beginner: [
        {
          id: 1,
          question: "What is Tony Stark's superhero name?",
          options: ["Iron Man", "War Machine", "Steel Man", "Metal Man"],
          correct: "Iron Man"
        },
        {
          id: 2,
          question: "What is Captain America's real name?",
          options: ["Steve Rogers", "Tony Stark", "Bruce Banner", "Thor Odinson"],
          correct: "Steve Rogers"
        },
        {
          id: 3,
          question: "What is Thor's hammer called?",
          options: ["Mjolnir", "Stormbreaker", "Gungnir", "Hofund"],
          correct: "Mjolnir"
        },
        {
          id: 4,
          question: "What does S.H.I.E.L.D. stand for?",
          options: ["Strategic Homeland Intervention, Enforcement and Logistics Division", "Super Hero Intelligence Emergency Law Division", "Strategic Hero Intelligence and Emergency Law Division", "Super Homeland Intelligence Emergency Logistics Division"],
          correct: "Strategic Homeland Intervention, Enforcement and Logistics Division"
        },
        {
          id: 5,
          question: "Who is the God of Mischief?",
          options: ["Thor", "Loki", "Odin", "Heimdall"],
          correct: "Loki"
        },
        {
          id: 6,
          question: "What is Black Widow's real name?",
          options: ["Natasha Romanoff", "Wanda Maximoff", "Carol Danvers", "Pepper Potts"],
          correct: "Natasha Romanoff"
        },
        {
          id: 7,
          question: "What is the Hulk's alter ego?",
          options: ["Bruce Banner", "Tony Stark", "Steve Rogers", "Clint Barton"],
          correct: "Bruce Banner"
        },
        {
          id: 8,
          question: "What is Hawkeye's weapon of choice?",
          options: ["Bow and Arrow", "Sword", "Gun", "Shield"],
          correct: "Bow and Arrow"
        },
        {
          id: 9,
          question: "Where is Wakanda located?",
          options: ["Africa", "Asia", "Europe", "South America"],
          correct: "Africa"
        },
        {
          id: 10,
          question: "What is the name of Tony Stark's AI assistant?",
          options: ["JARVIS", "FRIDAY", "KAREN", "EDITH"],
          correct: "JARVIS"
        }
      ]
    }
  }

  const [questions, setQuestions] = useState([])

  useEffect(() => {
    // Load questions based on category and level
    const loadedQuestions = getRandomFunQuestions(category, level, 10)
    setQuestions(loadedQuestions)
  }, [category, level])

  const startQuiz = () => {
    setQuizStarted(true)
  }

  const handleAnswerSelect = (answer) => {
    setSelectedAnswer(answer)
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
    } else {
      calculateResults()
    }
  }

  const calculateResults = () => {
    let totalScore = 0
    let correctCount = 0

    questions.forEach((question, index) => {
      const userAnswer = answers[index]
      if (userAnswer === question.correct) {
        correctCount++
        totalScore += 1 // Only positive scoring for fun quizzes
      }
    })

    setScore(totalScore)
    setShowResults(true)
    
    // Save to temporary storage (1 week retention)
    console.log('Fun Quiz Results:', {
      category,
      level,
      score: totalScore,
      correct: correctCount,
      total: questions.length
    })
  }

  if (!user) {
    return (
      <div className="page-container">
        <Navigation />
        <div className="content-wrapper">
          <div className="magical-card" style={{ textAlign: 'center' }}>
            <h2 className="section-title">🔒 Authentication Required</h2>
            <p>Please sign in to enjoy fun quizzes!</p>
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
            <p style={{ marginTop: '1rem' }}>Loading fun questions...</p>
          </div>
        </div>
      </div>
    )
  }

  if (showResults) {
    const percentage = Math.round((score / questions.length) * 100)
    
    return (
      <div className="page-container">
        <Navigation />
        <div className="content-wrapper">
          <div className="quiz-container">
            <div className="magical-card" style={{ textAlign: 'center' }}>
              <h1 className="section-title">🎉 Fun Quiz Complete!</h1>
              
              <div style={{ fontSize: '4rem', margin: '2rem 0' }}>
                {percentage >= 80 ? '🏆' : percentage >= 60 ? '🎯' : percentage >= 40 ? '🎮' : '🎪'}
              </div>
              
              <h2 style={{ color: 'var(--emerald)', marginBottom: '1rem' }}>
                You scored {score} out of {questions.length}!
              </h2>
              
              <h3 style={{ color: 'var(--gold)', marginBottom: '2rem' }}>
                That's {percentage}% correct!
              </h3>
              
              <div style={{ 
                background: 'rgba(80, 200, 120, 0.2)', 
                padding: '2rem', 
                borderRadius: '15px', 
                margin: '2rem 0',
                border: '2px solid rgba(80, 200, 120, 0.3)'
              }}>
                <h3 style={{ color: 'var(--emerald)', marginBottom: '1rem' }}>
                  {category === 'harry-potter' ? '⚡ Harry Potter' : '🦸‍♂️ Marvel Avengers'} - {level.charAt(0).toUpperCase() + level.slice(1)}
                </h3>
                <p style={{ fontSize: '1.1rem', fontStyle: 'italic' }}>
                  {percentage >= 80 ? 'Outstanding! You\'re a true fan!' :
                   percentage >= 60 ? 'Great job! You know your stuff!' :
                   percentage >= 40 ? 'Not bad! Keep exploring!' :
                   'Good try! Time to rewatch/reread!'}
                </p>
              </div>
              
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '2rem' }}>
                <button 
                  className="magical-button"
                  onClick={() => navigate('/test-knowledge')}
                  style={{ background: 'linear-gradient(45deg, var(--emerald), #90EE90)' }}
                >
                  🎮 More Fun Quizzes
                </button>
                <button 
                  className="magical-button"
                  onClick={() => navigate('/test-knowledge')}
                >
                  🎓 Try Academic Quiz
                </button>
              </div>
              
              <p style={{ 
                marginTop: '2rem', 
                fontSize: '0.9rem', 
                color: 'var(--silver)',
                fontStyle: 'italic'
              }}>
                * Fun quiz results are stored for 1 week and don't affect the leaderboard
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (!quizStarted) {
    const categoryName = category === 'harry-potter' ? 'Harry Potter' : 'Marvel Avengers'
    const categoryIcon = category === 'harry-potter' ? '⚡' : '🦸‍♂️'
    
    return (
      <div className="page-container">
        <Navigation />
        <div className="content-wrapper">
          <div className="quiz-container">
            <div className="magical-card" style={{ textAlign: 'center' }}>
              <h1 className="section-title">
                {categoryIcon} {categoryName} Fun Quiz
              </h1>
              <h2 style={{ color: 'var(--emerald)', marginBottom: '2rem' }}>
                Level: {level.charAt(0).toUpperCase() + level.slice(1)}
              </h2>
              
              <div style={{ marginBottom: '3rem' }}>
                <h3 style={{ color: 'var(--gold)', marginBottom: '1rem' }}>Fun Quiz Rules:</h3>
                <ul style={{ textAlign: 'left', maxWidth: '400px', margin: '0 auto', lineHeight: '1.8' }}>
                  <li>10 questions total</li>
                  <li>Only positive scoring</li>
                  <li>No negative marking</li>
                  <li>No time limit</li>
                  <li>Pure entertainment!</li>
                  <li>Results stored for 1 week</li>
                </ul>
              </div>
              
              <button 
                className="magical-button" 
                onClick={startQuiz}
                style={{ background: 'linear-gradient(45deg, var(--emerald), #90EE90)' }}
              >
                🎮 Start Fun Quiz
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
          
          <div className="question-card" style={{ borderColor: 'rgba(80, 200, 120, 0.3)' }}>
            <h2 className="question-text">{currentQ.question}</h2>
            
            <div className="options-container">
              {currentQ.options.map((option, index) => (
                <button
                  key={index}
                  className={`option-button ${selectedAnswer === option ? 'selected' : ''}`}
                  onClick={() => handleAnswerSelect(option)}
                  style={{
                    borderColor: selectedAnswer === option ? 'var(--emerald)' : 'rgba(80, 200, 120, 0.3)'
                  }}
                >
                  {String.fromCharCode(65 + index)}. {option}
                </button>
              ))}
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
                  background: selectedAnswer ? 'linear-gradient(45deg, var(--emerald), #90EE90)' : 'linear-gradient(45deg, var(--silver), #E5E5E5)',
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
