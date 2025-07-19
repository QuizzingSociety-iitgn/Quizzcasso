import React, { useState } from 'react'
import Navigation from './Navigation'

export default function FactsAndKnowledge() {
  const [selectedCategory, setSelectedCategory] = useState('general')

  const factCategories = {
    general: {
      title: "🌍 General Knowledge Gems",
      facts: [
        "The Great Wall of China is not visible from space with the naked eye, contrary to popular belief.",
        "Honey never spoils. Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still perfectly edible.",
        "A group of flamingos is called a 'flamboyance'.",
        "The shortest war in history lasted only 38-45 minutes between Britain and Zanzibar in 1896.",
        "Octopuses have three hearts and blue blood.",
        "The human brain uses about 20% of the body's total energy despite being only 2% of body weight.",
        "Lightning strikes the Earth about 100 times per second.",
        "A single cloud can weigh more than a million pounds."
      ]
    },
    science: {
      title: "🔬 Scientific Wonders",
      facts: [
        "Water can exist in three states simultaneously at its triple point (0.01°C and 611.657 pascals).",
        "The speed of light is exactly 299,792,458 meters per second in a vacuum.",
        "DNA is 99.9% identical between all humans.",
        "A teaspoon of neutron star material would weigh about 6 billion tons on Earth.",
        "The human body contains approximately 37.2 trillion cells.",
        "Sound travels 4 times faster in water than in air.",
        "The coldest temperature ever recorded was -273.15°C (absolute zero).",
        "Bananas are radioactive due to their potassium-40 content."
      ]
    },
    history: {
      title: "📚 Historical Marvels",
      facts: [
        "Cleopatra lived closer in time to the Moon landing than to the construction of the Great Pyramid of Giza.",
        "The Oxford University is older than the Aztec Empire.",
        "Napoleon was actually average height for his time at 5'7\".",
        "The first computer programmer was Ada Lovelace in 1843.",
        "The Statue of Liberty was originally brown but turned green due to oxidation.",
        "Vikings never actually wore horned helmets.",
        "The first email was sent in 1971 by Ray Tomlinson.",
        "Ancient Romans used urine as mouthwash due to its ammonia content."
      ]
    },
    space: {
      title: "Cosmic Curiosities",
      facts: [
        "One day on Venus is longer than one year on Venus (243 Earth days vs 225 Earth days).",
        "Jupiter has 95 known moons, with four major ones discovered by Galileo.",
        "The Sun accounts for 99.86% of the mass in our solar system.",
        "A year on Mercury lasts only 88 Earth days.",
        "Saturn's moon Titan has lakes and rivers of liquid methane.",
        "The Milky Way galaxy is on a collision course with Andromeda galaxy.",
        "Neutron stars can spin 600 times per second.",
        "The universe is approximately 13.8 billion years old."
      ]
    },
    nature: {
      title: "🌿 Natural Phenomena",
      facts: [
        "Trees can communicate with each other through underground fungal networks.",
        "A single raindrop can contain up to 1 million bacteria.",
        "Dolphins have names for each other (signature whistles).",
        "Some bamboo species can grow up to 3 feet in a single day.",
        "Elephants are one of the few animals that can recognize themselves in a mirror.",
        "The Arctic tern migrates roughly 44,000 miles annually.",
        "A group of owls is called a 'parliament'.",
        "Sharks have been around longer than trees (400 million vs 350 million years)."
      ]
    }
  }

  return (
    <div className="page-container">
      <Navigation />
      
      <div className="content-wrapper">
        <h1 className="section-title">Facts & Knowledge</h1>
        
        <div className="magical-card" style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <p style={{ fontSize: '1.2rem', fontStyle: 'italic', color: 'var(--deep-blue)' }}>
            <em>"Knowledge is like magic - the more you share it, the more it grows and illuminates the world around us."</em>
          </p>
        </div>

        {/* Category Selection */}
        <div className="magical-card">
          <h2 className="subsection-title">Choose Your Realm of Discovery</h2>
          <div className="difficulty-buttons">
            {Object.keys(factCategories).map((category) => (
              <button
                key={category}
                className={`difficulty-button ${selectedCategory === category ? 'selected' : ''}`}
                onClick={() => setSelectedCategory(category)}
                style={{
                  background: selectedCategory === category 
                    ? 'linear-gradient(45deg, var(--gold), #FFD700)' 
                    : 'linear-gradient(45deg, var(--emerald), #90EE90)'
                }}
              >
                {factCategories[category].title}
              </button>
            ))}
          </div>
        </div>

        {/* Facts Display */}
        <div className="magical-card">
          <h2 className="subsection-title">{factCategories[selectedCategory].title}</h2>
          <div style={{ display: 'grid', gap: '1.5rem', marginTop: '2rem' }}>
            {factCategories[selectedCategory].facts.map((fact, index) => (
              <div 
                key={index}
                style={{
                  background: 'rgba(212, 175, 55, 0.1)',
                  border: '2px solid rgba(212, 175, 55, 0.3)',
                  borderRadius: '10px',
                  padding: '1.5rem',
                  transition: 'all 0.3s ease'
                }}
                className="fact-card"
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <span style={{ 
                    background: 'var(--gold)', 
                    color: 'var(--deep-blue)', 
                    borderRadius: '50%', 
                    width: '30px', 
                    height: '30px', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    fontWeight: 'bold',
                    flexShrink: 0
                  }}>
                    {index + 1}
                  </span>
                  <p style={{ 
                    fontSize: '1.1rem', 
                    lineHeight: '1.6', 
                    color: 'var(--deep-blue)',
                    margin: 0
                  }}>
                    {fact}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Did You Know Section */}
        <div className="magical-card" style={{ marginTop: '3rem' }}>
          <h2 className="subsection-title">Did You Know?</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
            <div style={{ textAlign: 'center' }}>
              <h3 style={{ color: 'var(--gold)', marginBottom: '1rem' }}>Brain Power</h3>
              <p style={{ fontStyle: 'italic' }}>
                <em>Your brain generates about 12-25 watts of electricity - enough to power a low-wattage LED light!</em>
              </p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <h3 style={{ color: 'var(--emerald)', marginBottom: '1rem' }}>Ocean Mysteries</h3>
              <p style={{ fontStyle: 'italic' }}>
                <em>We have explored less than 5% of our oceans, making them more mysterious than outer space!</em>
              </p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <h3 style={{ color: 'var(--burgundy)', marginBottom: '1rem' }}>Time Magic</h3>
              <p style={{ fontStyle: 'italic' }}>
                <em>Time moves slower at your feet than at your head due to gravitational time dilation!</em>
              </p>
            </div>
          </div>
        </div>

        {/* Quote Section */}
        <div className="magical-card" style={{ marginTop: '3rem', textAlign: 'center' }}>
          <h3 style={{ color: 'var(--gold)', marginBottom: '1rem' }}>Words of Wisdom</h3>
          <p style={{ fontSize: '1.3rem', fontStyle: 'italic', color: 'var(--deep-blue)', lineHeight: '1.7' }}>
            <em>"The important thing is not to stop questioning. Curiosity has its own reason for existing."</em>
          </p>
          <p style={{ marginTop: '1rem', color: 'var(--silver)' }}>- Albert Einstein</p>
        </div>
      </div>
    </div>
  )
}
