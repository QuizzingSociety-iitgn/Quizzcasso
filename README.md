# 🪄 Quizzcasso - Magical Quiz Experience

> *Where Knowledge Meets Magic - Embark on Your Enchanted Learning Journey*

A beautiful, interactive quiz platform built for the **IIT Gandhinagar Quizzing Society** with Harry Potter-themed magical design and comprehensive learning features.

## ✨ Features

- 🏠 **House-themed Interface**: Dark purple/navy backgrounds with magical shimmer effects
- 📚 **Multiple Quiz Categories**: Test Your Knowledge, Fun Quizzes, Facts & Knowledge
- 🏆 **Leaderboard System**: Track top performers across all quizzes
- 👥 **Team Pages**: About Us and Meet the Team sections
- ✨ **Magical Animations**: Subtle background animations for immersive experience
- 📱 **Responsive Design**: Optimized for all devices and screen sizes
- 🎨 **Dark Theme**: Easy on the eyes with silver/golden/light blue accents

## 🛠️ Tech Stack

- **Frontend**: React 18 with Vite
- **Routing**: React Router DOM v6
- **Styling**: Custom CSS with magical themes
- **Icons**: Lucide React
- **Authentication**: Supabase integration
- **Deployment**: Vercel & Netlify ready

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── HomePage.jsx     # Landing page with magical intro
│   ├── Navigation.jsx   # Navigation bar component
│   ├── AboutUs.jsx      # About the Quizzing Society
│   ├── MeetTheTeam.jsx  # Team member profiles
│   ├── Quiz.jsx         # Main quiz functionality
│   ├── TestYourKnowledge.jsx  # Academic quizzes
│   ├── FunQuiz.jsx      # Entertainment quizzes
│   ├── FactsAndKnowledge.jsx  # Educational content
│   └── Leaderboard.jsx  # Score tracking system
├── contexts/            # React contexts
│   └── AuthContext.jsx  # Authentication management
├── data/               # Static data
│   └── questions.js    # Quiz questions database
├── App.jsx             # Main application component
├── App.css             # Global application styles
├── index.css           # Base CSS styles
└── main.jsx            # Application entry point
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/SrushhDandekar/Quizzcasso.git
   cd Quizzcasso
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
npm run preview
```

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build optimized production bundle |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint for code quality checks |

## 🌐 Deployment

The project is pre-configured for deployment on:

- **Vercel**: Uses `vercel.json` configuration
- **Netlify**: Uses `netlify.toml` configuration

Simply connect your GitHub repository to either platform for automatic deployments.

## 🎯 Usage

1. **Home Page**: Welcome screen with magical animations
2. **Quiz Selection**: Choose from different categories and difficulty levels
3. **Quiz Taking**: Interactive questions with immediate feedback
4. **Leaderboard**: View top performers and your ranking
5. **About/Team**: Learn about the Quizzing Society and team members

## 🤝 Contributing

This project is maintained by the **Quizzing Society at IIT Gandhinagar**. 

For contributions:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 👨‍💻 Author

**Srushti Dandekar**  
*Club Secretary, Quizzing Society*  
*IIT Gandhinagar, BTech'23 Civil Engineering*

## 📄 License

This project is created for educational purposes by the IIT Gandhinagar Quizzing Society.

---

*"It is our choices, Harry, that show what we truly are, far more than our abilities."* - Albus Dumbledore

**Happy Quizzing! 🧙‍♂️✨**
