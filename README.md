# 🪄 Quizzcasso - Magical Quiz Experience

> *Where Knowledge Meets Magic - Embark on Your Enchanted Learning Journey*

A beautiful, interactive quiz platform built for the **IIT Gandhinagar Quizzing Society** with Harry Potter-themed magical design and comprehensive learning features.

![Quizzcasso Banner](https://via.placeholder.com/800x400/1a237e/D4AF37?text=Quizzcasso+%E2%9A%A1+Magical+Quiz+Platform)

## ✨ Features

- 🎓 **14 Academic Subjects** with 3 difficulty levels each (90 questions per subject)
- 🎮 **Fun Quizzes** featuring Harry Potter & Marvel themes (60 questions each)
- 🏆 **Dynamic Leaderboard** with competitive scoring and detailed statistics
- 🔐 **Google Authentication** for secure user access
- 📱 **Fully Responsive** design optimized for all devices
- ⚡ **Real-time Results** with instant feedback and progress tracking
- 🎨 **Magical UI/UX** with Harry Potter-inspired design elements
- 🌟 **Facts & Knowledge** section with curated educational content

## 🚀 Live Demo

**🌐 Website:** [Coming Soon - Deploy after setup]

## 🛠️ Tech Stack

- **Frontend:** React 18 + Vite
- **Styling:** CSS3 with magical animations and gradients
- **Authentication:** Supabase Auth with Google OAuth
- **Database:** Supabase PostgreSQL
- **Routing:** React Router DOM
- **Icons:** Lucide React
- **Deployment:** Vercel (recommended)
- **Version Control:** Git & GitHub

## 📊 Quiz Categories

### 🎓 Academic Subjects (14 Total)
- **Languages:** English
- **STEM:** Mathematics, Biology, Physics, Chemistry
- **Specialized:** Astrology, Computer Knowledge, Computer Languages
- **Social Sciences:** Economics, History, Geography, Current Affairs
- **General:** General Knowledge, All-in-One

*Each subject contains 30 questions per difficulty level (Easy/Intermediate/Hard)*

### 🎮 Fun Categories (2 Total)
- ⚡ **Harry Potter** (Beginner → MiddleMan → Pro)
- 🦸‍♂️ **Marvel Avengers** (Beginner → MiddleMan → Pro)

*Each category contains 60 questions across 3 levels*

## 🎯 Scoring System

### Academic Quizzes
- ✅ **+2 points** for correct answers
- ❌ **-1 point** for incorrect answers
- ⏭️ **0 points** for skipped questions
- 🏆 **Results count** towards leaderboard

### Fun Quizzes
- ✅ **+1 point** for correct answers
- ❌ **No negative marking**
- 🎉 **Pure entertainment** - doesn't affect leaderboard
- 📅 **Results stored** for 1 week only

## 🏃‍♀️ Quick Start

### Prerequisites
- Node.js 18+ installed
- Git installed
- Modern web browser

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/YOUR_USERNAME/quizzcasso.git
   cd quizzcasso
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:** `http://localhost:5173`

### Environment Setup

Create `.env` file in root directory:
```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## 📁 Project Structure

```
quizzcasso/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── HomePage.jsx
│   │   ├── AboutUs.jsx
│   │   ├── MeetTheTeam.jsx
│   │   ├── FactsAndKnowledge.jsx
│   │   ├── TestYourKnowledge.jsx
│   │   ├── Quiz.jsx
│   │   ├── FunQuiz.jsx
│   │   ├── Leaderboard.jsx
│   │   └── Navigation.jsx
│   ├── contexts/
│   │   └── AuthContext.jsx
│   ├── data/
│   │   └── questions.js
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── SETUP_GUIDE.md
├── DEPLOYMENT_GUIDE.md
├── GITHUB_GUIDE.md
└── package.json
```

## 🎨 Design System

### Color Palette
- **Gold:** `#D4AF37` - Primary accent, magical elements
- **Deep Blue:** `#1a237e` - Primary text, headers
- **Burgundy:** `#8B0000` - Hard difficulty, important actions
- **Emerald:** `#50C878` - Success states, easy difficulty
- **Silver:** `#C0C0C0` - Secondary text, borders

### Typography
- **Main Text:** Times New Roman (as requested)
- **Headings:** Cinzel (elegant serif)
- **Magical Title:** Uncial Antiqua (medieval style)

### Animations
- Magical floating background elements
- Shimmer effects on titles
- Smooth hover transitions
- Loading spinners with magical themes

## 👥 Team

**🧙‍♀️ Created by:** Srushti Dandekar  
**🏛️ Role:** Club Secretary, Quizzing Society  
**🎓 Institution:** IIT Gandhinagar  
**📚 Department:** Civil Engineering, BTech'23  
**✨ Vision:** "Bringing magic to learning, one quiz at a time"

### 🏰 Meet the Magical Team
- **Hermione Granger** (Club Secretary) - Srushti Dandekar
- **Harry Potter** (Quiz Master) - Team Member 1
- **Ron Weasley** (Technical Coordinator) - Team Member 2
- **Luna Lovegood** (Content Creator) - Team Member 3
- **Neville Longbottom** (Community Manager) - Team Member 4
- **Ginny Weasley** (Design Coordinator) - Team Member 5

## 🏛️ About IIT Gandhinagar Quizzing Society

*"Fostering intellectual curiosity and competitive spirit through the art of quizzing"*

The Quizzing Society at IIT Gandhinagar is dedicated to promoting knowledge sharing, critical thinking, and healthy competition among students across all disciplines.

## 🚀 Deployment

### Recommended: Vercel
```bash
npm run build
# Deploy to Vercel via GitHub integration
```

### Alternative: Netlify
```bash
npm run build
# Drag and drop 'dist' folder to Netlify
```

### GitHub Pages
```bash
npm run build
# Push 'dist' folder to gh-pages branch
```

**📖 Detailed deployment instructions:** See `DEPLOYMENT_GUIDE.md`

## 📈 Future Enhancements

- [ ] ⏱️ Timer-based quizzes with countdown
- [ ] 🏅 Achievement badges and rewards system
- [ ] 📤 Social sharing of quiz results
- [ ] 📱 Progressive Web App (PWA) support
- [ ] 🌍 Multi-language support
- [ ] 📊 Advanced analytics dashboard
- [ ] 🎯 Personalized question recommendations
- [ ] 👥 Multiplayer quiz battles
- [ ] 📚 Study materials integration
- [ ] 🔄 Offline mode support

## 🤝 Contributing

We welcome contributions from the community! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m '✨ Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### 📝 Adding Questions

Edit `src/data/questions.js` and follow the existing format:

```javascript
{
  id: 1,
  question: "Your question here?",
  options: ["Option A", "Option B", "Option C", "Option D"],
  correct: "Option B"
}
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📊 Stats

![GitHub stars](https://img.shields.io/github/stars/YOUR_USERNAME/quizzcasso?style=social)
![GitHub forks](https://img.shields.io/github/forks/YOUR_USERNAME/quizzcasso?style=social)
![GitHub issues](https://img.shields.io/github/issues/YOUR_USERNAME/quizzcasso)
![GitHub license](https://img.shields.io/github/license/YOUR_USERNAME/quizzcasso)

---

<div align="center">

**🪄 "The beautiful thing about learning is that no one can take it away from you." - B.B. King**

</div>
