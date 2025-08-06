import React from 'react'
import Navigation from './Navigation'

export default function AboutUs() {
  return (
    <div className="page-container">
      <Navigation />
      
      <div className="content-wrapper">
        <h1 className="section-title">About Quizzcasso</h1>
        
        <div className="magical-card">
          <div style={{ fontStyle: 'italic', fontSize: '1.2rem', lineHeight: '1.8', color: 'var(--light-blue)' }}>
            <p style={{ marginBottom: '2rem' }}>
              <em>Welcome to Quizzcasso, where the enchanting world of knowledge meets the magical realm of learning. 
              Born from the passionate minds of the Quizzing Society at IIT Gandhinagar, this platform represents 
              our unwavering commitment to transforming the traditional approach to education and assessment.</em>
            </p>
            
            <p style={{ marginBottom: '2rem' }}>
              <em>In an era where learning often feels mundane and disconnected, we envisioned a sanctuary where 
              curiosity flourishes and knowledge becomes an adventure. Quizzcasso is not merely a quiz platform; 
              it is a testament to our belief that education should be as captivating as the most spellbinding tales 
              from the wizarding world.</em>
            </p>
            
            <p style={{ marginBottom: '2rem' }}>
              <em>Our motivation stems from a profound understanding that every learner possesses an innate desire 
              to explore, discover, and excel. We have crafted this magical experience to nurture that spark, 
              providing a comprehensive platform where students can challenge themselves across diverse subjects, 
              from the analytical depths of Mathematics to the cosmic wonders of Astrology.</em>
            </p>
            
            <p style={{ marginBottom: '2rem' }}>
              <em>The essence of Quizzcasso lies in its ability to democratize learning, making quality educational 
              content accessible to all, regardless of geographical boundaries or economic constraints. We believe 
              that knowledge should flow freely, like magic itself, touching every eager mind that seeks to grow 
              and prosper.</em>
            </p>
            
            <p style={{ marginBottom: '2rem' }}>
              <em>Through carefully curated questions spanning multiple difficulty levels, we ensure that every 
              learner finds their perfect challenge. Whether you are taking your first steps into the realm of 
              knowledge or you are a seasoned scholar seeking to test your expertise, Quizzcasso welcomes you 
              with open arms and endless possibilities.</em>
            </p>
            
            <p>
              <em>Join us in this magical journey of discovery, where every question answered brings you closer 
              to unlocking your true potential. At Quizzcasso, we don't just test knowledge; we celebrate it, 
              nurture it, and help it flourish in the most enchanting way possible.</em>
            </p>
          </div>
        </div>

        <div className="magical-card" style={{ marginTop: '3rem' }}>
          <h2 className="subsection-title">Our Vision</h2>
          <p style={{ fontStyle: 'italic', fontSize: '1.1rem', lineHeight: '1.7' }}>
            <em>To create a magical learning ecosystem where knowledge transcends boundaries,
            curiosity knows no limits, and every learner discovers the wizard within themselves.</em>
          </p>
        </div>

        <div className="magical-card" style={{ marginTop: '2rem' }}>
          <h2 className="subsection-title">Our Mission</h2>
          <p style={{ fontStyle: 'italic', fontSize: '1.1rem', lineHeight: '1.7' }}>
            <em>To provide an enchanting, accessible, and comprehensive quiz platform that makes learning
            enjoyable, competitive, and rewarding for students across all disciplines and skill levels.</em>
          </p>
        </div>


      </div>
    </div>
  )
}
