# 🪄 Quizzcasso Setup Guide

Welcome to your magical quiz website! This guide will help you set up, customize, and deploy your Quizzcasso platform.

## 📋 Prerequisites

### 1. Install Node.js
1. Go to [https://nodejs.org](https://nodejs.org)
2. Download the **LTS version** (Long Term Support)
3. Run the installer and follow the setup wizard
4. ✅ Make sure "Add to PATH" is checked during installation
5. Restart your command prompt/terminal after installation

### 2. Verify Installation
Open Command Prompt or PowerShell and run:
```bash
node --version    # Should show v18.x.x or higher
npm --version     # Should show 9.x.x or higher
```

## 🚀 Getting Started

### 1. Install Dependencies
In your project folder, run:
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Your website will be available at: `http://localhost:5173`

## 🎯 Adding Quiz Questions

### Academic Questions
Edit `src/data/questions.js` and add questions following this format:

```javascript
english: {
  easy: [
    {
      id: 1,
      question: "Your question here?",
      options: ["Option A", "Option B", "Option C", "Option D"],
      correct: "Option B"
    },
    // Add more questions...
  ],
  intermediate: [
    // 30 intermediate questions
  ],
  hard: [
    // 30 hard questions
  ]
}
```

### Fun Quiz Questions
Add Harry Potter and Marvel questions in the same file:

```javascript
'harry-potter': {
  beginner: [
    {
      id: 1,
      question: "What is Harry's owl's name?",
      options: ["Hedwig", "Errol", "Pig", "Archimedes"],
      correct: "Hedwig"
    },
    // Add 59 more questions...
  ]
}
```

### Required Questions per Subject:
- **Academic Subjects (14 total):** 30 easy + 30 intermediate + 30 hard = 90 questions each
- **Fun Categories (2 total):** 60 questions each across 3 levels

## 🔐 Setting Up Authentication (Supabase)

### 1. Create Supabase Account
1. Go to [https://supabase.com](https://supabase.com)
2. Sign up for free
3. Create a new project
4. Wait for setup to complete

### 2. Get Your Credentials
1. Go to Settings → API in your Supabase dashboard
2. Copy your `Project URL` and `anon public key`

### 3. Update Authentication
Replace the placeholder values in `src/contexts/AuthContext.jsx`:
```javascript
const supabaseUrl = 'YOUR_ACTUAL_SUPABASE_URL'
const supabaseKey = 'YOUR_ACTUAL_SUPABASE_ANON_KEY'
const supabase = createClient(supabaseUrl, supabaseKey)
```

### 4. Set Up Google Authentication
1. In Supabase dashboard, go to Authentication → Providers
2. Enable Google provider
3. Add your domain to authorized redirect URLs

## 🗄️ Database Setup

### Create Tables in Supabase
Run these SQL commands in Supabase SQL Editor:

```sql
-- Users table (extends Supabase auth.users)
CREATE TABLE public.user_profiles (
  id UUID REFERENCES auth.users(id) PRIMARY KEY,
  username TEXT UNIQUE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Quiz results table
CREATE TABLE public.quiz_results (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id),
  subject TEXT NOT NULL,
  difficulty TEXT NOT NULL,
  score INTEGER NOT NULL,
  correct_answers INTEGER NOT NULL,
  incorrect_answers INTEGER NOT NULL,
  skipped_answers INTEGER NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Fun quiz results (temporary storage)
CREATE TABLE public.fun_quiz_results (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id),
  category TEXT NOT NULL,
  level TEXT NOT NULL,
  score INTEGER NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

## 🌐 Deployment Options (All Free!)

### Option 1: Vercel (Recommended)
1. Create account at [https://vercel.com](https://vercel.com)
2. Connect your GitHub repository
3. Deploy automatically on every push

### Option 2: Netlify
1. Create account at [https://netlify.com](https://netlify.com)
2. Drag and drop your `dist` folder after running `npm run build`

### Option 3: GitHub Pages
1. Run `npm run build`
2. Push `dist` folder to `gh-pages` branch
3. Enable GitHub Pages in repository settings

## 📱 GitHub Repository Setup

### 1. Create GitHub Repository
1. Go to [https://github.com](https://github.com)
2. Click "New repository"
3. Name it "quizzcasso" or similar
4. Make it public
5. Don't initialize with README (you already have files)

### 2. Upload Your Code
In your project folder, run:
```bash
git init
git add .
git commit -m "Initial commit: Magical Quizzcasso website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

## 🎨 Customization

### Colors
Edit CSS variables in `src/index.css`:
```css
:root {
  --gold: #D4AF37;
  --deep-blue: #1a237e;
  --burgundy: #8B0000;
  --emerald: #50C878;
  --silver: #C0C0C0;
}
```

### Fonts
Current fonts are loaded from Google Fonts:
- Main text: Times New Roman
- Headings: Cinzel
- Magical title: Uncial Antiqua

### Team Photos
Replace placeholder images in `src/components/MeetTheTeam.jsx` with actual photos.

## 🔧 Development Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Check code quality
```

## 📊 Analytics & Monitoring

### Add Google Analytics (Optional)
1. Create Google Analytics account
2. Add tracking code to `index.html`

### Monitor Performance
- Use Vercel Analytics (free)
- Monitor Supabase usage in dashboard

## 🆘 Troubleshooting

### Common Issues:
1. **Node.js not found:** Restart terminal after installation
2. **Permission errors:** Run as administrator on Windows
3. **Port already in use:** Kill process or use different port
4. **Supabase connection:** Check URL and key are correct

### Getting Help:
- Check browser console for errors
- Review Supabase logs
- Ensure all dependencies are installed

## 🎉 Launch Checklist

- [ ] Node.js installed and working
- [ ] All dependencies installed (`npm install`)
- [ ] Questions added to database
- [ ] Supabase configured
- [ ] Google authentication working
- [ ] Website tested locally
- [ ] Code pushed to GitHub
- [ ] Deployed to hosting platform
- [ ] Custom domain configured (optional)
- [ ] SSL certificate active
- [ ] Analytics set up (optional)

## 📈 Future Enhancements

Consider adding:
- Timer for quizzes
- Question categories
- Difficulty-based scoring
- Achievement badges
- Social sharing
- Mobile app version
- Offline mode
- Multi-language support

---

**Created with ✨ by Srushti Dandekar**  
*Club Secretary, Quizzing Society of IIT Gandhinagar*  
*BTech'23 Student, Civil Engineering Department*

*"Bringing magic to learning, one quiz at a time"*
