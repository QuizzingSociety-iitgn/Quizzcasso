import React from 'react'
import Navigation from './Navigation'

export default function MeetTheTeam() {
  const teamMembers = [
    {
      id: 1,
      name: "Hermione Granger",
      role: "Club Secretary",
      realName: "Srushti Dandekar",
      description: "The brilliant mind behind Quizzcasso, leading the Quizzing Society with passion and dedication.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop&crop=face",
      department: "Civil Engineering",
      year: "BTech'23"
    },
    {
      id: 2,
      name: "Harry Potter",
      role: "Quiz Master",
      realName: "Team Member 1",
      description: "Specializes in creating challenging questions and maintaining the magical quiz experience.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      department: "Computer Science",
      year: "BTech'24"
    },
    {
      id: 3,
      name: "Ron Weasley",
      role: "Technical Coordinator",
      realName: "Team Member 2",
      description: "Ensures smooth technical operations and manages the platform's magical functionality.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      department: "Electrical Engineering",
      year: "BTech'24"
    },
    {
      id: 4,
      name: "Luna Lovegood",
      role: "Content Creator",
      realName: "Team Member 3",
      description: "Crafts engaging content and ensures our facts and knowledge section stays magical.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      department: "Chemical Engineering",
      year: "BTech'25"
    },
    {
      id: 5,
      name: "Neville Longbottom",
      role: "Community Manager",
      realName: "Team Member 4",
      description: "Manages our growing community of quiz enthusiasts and organizes events.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face",
      department: "Mechanical Engineering",
      year: "BTech'25"
    },
    {
      id: 6,
      name: "Ginny Weasley",
      role: "Design Coordinator",
      realName: "Team Member 5",
      description: "Brings the magical visual experience to life with creative design and user experience.",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop&crop=face",
      department: "Mathematics & Computing",
      year: "BTech'26"
    }
  ]

  return (
    <div className="page-container">
      <Navigation />
      
      <div className="content-wrapper">
        <h1 className="section-title">Meet Our Magical Team</h1>
        
        <div className="magical-card" style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <p style={{ fontSize: '1.2rem', fontStyle: 'italic', color: 'var(--deep-blue)' }}>
            <em>"Behind every magical experience lies a team of dedicated wizards and witches, 
            each bringing their unique talents to create something truly extraordinary."</em>
          </p>
        </div>

        <div className="team-grid">
          {teamMembers.map((member) => (
            <div key={member.id} className="team-member-card">
              <img 
                src={member.image} 
                alt={member.name}
                className="member-photo"
              />
              <h3 className="member-name">{member.name}</h3>
              <p className="member-role">{member.role}</p>
              
              <div style={{ 
                background: 'rgba(212, 175, 55, 0.1)', 
                padding: '1rem', 
                borderRadius: '10px', 
                margin: '1rem 0',
                border: '1px solid rgba(212, 175, 55, 0.3)'
              }}>
                <p style={{ 
                  fontFamily: 'var(--font-heading)', 
                  fontWeight: '600', 
                  color: 'var(--gold)',
                  marginBottom: '0.5rem'
                }}>
                  Real Identity: {member.realName}
                </p>
                <p style={{ fontSize: '0.9rem', color: 'var(--emerald)' }}>
                  {member.department} • {member.year}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="magical-card" style={{ marginTop: '4rem', textAlign: 'center' }}>
          <h2 className="subsection-title">Our Collective Magic</h2>
          <p style={{ fontSize: '1.1rem', fontStyle: 'italic', lineHeight: '1.7', color: 'var(--deep-blue)' }}>
            <em>Together, we form the heart and soul of the Quizzing Society at IIT Gandhinagar. 
            Our diverse backgrounds in engineering and technology converge to create a platform 
            that celebrates knowledge, fosters learning, and brings the magic of quizzing to 
            students everywhere. Each member contributes their unique expertise to ensure that 
            Quizzcasso remains a beacon of educational excellence and enchantment.</em>
          </p>
        </div>

        <div className="magical-card" style={{ marginTop: '2rem', textAlign: 'center' }}>
          <h3 style={{ color: 'var(--gold)', marginBottom: '1rem' }}>🏛️ IIT Gandhinagar Quizzing Society</h3>
          <p style={{ fontStyle: 'italic', color: 'var(--silver)' }}>
            <em>"Fostering intellectual curiosity and competitive spirit through the art of quizzing"</em>
          </p>
        </div>
      </div>
    </div>
  )
}
