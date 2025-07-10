# 📚 GitHub Setup Guide for Quizzcasso

This guide will help you upload your magical quiz website to GitHub and manage it like a pro!

## 🎯 What is GitHub?

GitHub is a platform where developers store, share, and collaborate on code. It's like Google Drive for programmers!

**Benefits:**
- ✅ **Backup your code** safely in the cloud
- ✅ **Version control** - track all changes
- ✅ **Free hosting** with GitHub Pages
- ✅ **Portfolio showcase** for future opportunities
- ✅ **Collaboration** with other developers

## 🚀 Step-by-Step GitHub Setup

### Step 1: Create GitHub Account
1. Go to [https://github.com](https://github.com)
2. Click "Sign up"
3. Choose username: `srushti-dandekar` or similar
4. Use your IIT Gandhinagar email
5. Verify your email address

### Step 2: Install Git on Your Computer
1. **Download Git:**
   - Go to [https://git-scm.com](https://git-scm.com)
   - Download for Windows
   - Run installer with default settings

2. **Verify Installation:**
   ```bash
   git --version
   ```

3. **Configure Git:**
   ```bash
   git config --global user.name "Srushti Dandekar"
   git config --global user.email "your-email@iitgn.ac.in"
   ```

### Step 3: Create Repository on GitHub
1. **Log in to GitHub**
2. **Click "New repository" (green button)**
3. **Repository settings:**
   - Repository name: `quizzcasso`
   - Description: `🪄 Magical quiz website for IIT Gandhinagar Quizzing Society`
   - ✅ Public (so others can see your amazing work!)
   - ❌ Don't initialize with README (you already have files)
4. **Click "Create repository"**

### Step 4: Upload Your Code
Open Command Prompt/PowerShell in your project folder and run:

```bash
# Initialize git in your project
git init

# Add all files to git
git add .

# Create your first commit
git commit -m "🎉 Initial commit: Magical Quizzcasso website created"

# Connect to your GitHub repository
git remote add origin https://github.com/YOUR_USERNAME/quizzcasso.git

# Push your code to GitHub
git branch -M main
git push -u origin main
```

**Replace `YOUR_USERNAME` with your actual GitHub username!**

## 📝 Creating an Awesome README

Create a `README.md` file in your project:

```markdown
# 🪄 Quizzcasso - Magical Quiz Experience

> *Where Knowledge Meets Magic - Embark on Your Enchanted Learning Journey*

A beautiful, interactive quiz platform built for the **IIT Gandhinagar Quizzing Society** with Harry Potter-themed magical design.

## ✨ Features

- 🎓 **14 Academic Subjects** with 3 difficulty levels each
- 🎮 **Fun Quizzes** (Harry Potter & Marvel themes)
- 🏆 **Leaderboard System** with competitive scoring
- 🔐 **Google Authentication** for secure access
- 📱 **Fully Responsive** design for all devices
- ⚡ **Real-time Results** and progress tracking

## 🚀 Live Demo

**🌐 Website:** [https://your-website-url.com](https://your-website-url.com)

## 🛠️ Tech Stack

- **Frontend:** React + Vite
- **Styling:** CSS3 with magical animations
- **Authentication:** Supabase Auth
- **Database:** Supabase PostgreSQL
- **Deployment:** Vercel
- **Version Control:** Git & GitHub

## 📊 Quiz Categories

### Academic Subjects
- English, Mathematics, Biology, Physics, Chemistry
- Astrology, Economics, History, Geography
- Current Affairs, Computer Knowledge, Computer Languages
- General Knowledge, All-in-One

### Fun Categories
- ⚡ Harry Potter (Beginner → MiddleMan → Pro)
- 🦸‍♂️ Marvel Avengers (Beginner → MiddleMan → Pro)

## 🎯 Scoring System

- **Academic Quizzes:** +2 correct, -1 incorrect, 0 skipped
- **Fun Quizzes:** Only positive scoring, no negative marking
- **Leaderboard:** Top 50 performers with detailed statistics

## 👥 Team

**Created by:** Srushti Dandekar  
**Role:** Club Secretary, Quizzing Society  
**Institution:** IIT Gandhinagar  
**Department:** Civil Engineering, BTech'23  

## 🏛️ About IIT Gandhinagar Quizzing Society

*"Fostering intellectual curiosity and competitive spirit through the art of quizzing"*

## 📱 Screenshots

[Add screenshots of your website here]

## 🚀 Getting Started

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

4. **Open:** `http://localhost:5173`

## 🔧 Environment Setup

Create `.env` file:
```
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_key
```

## 📈 Future Enhancements

- [ ] Timer-based quizzes
- [ ] Achievement badges
- [ ] Social sharing features
- [ ] Mobile app version
- [ ] Multi-language support
- [ ] Offline mode

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- IIT Gandhinagar Quizzing Society
- Harry Potter universe by J.K. Rowling
- Marvel Cinematic Universe
- Open source community

---

**⭐ If you like this project, please give it a star on GitHub!**

*"Bringing magic to learning, one quiz at a time"* ✨
```

## 🔄 Managing Your Repository

### Daily Git Commands

```bash
# Check status of your files
git status

# Add new/modified files
git add .

# Commit changes with a message
git commit -m "✨ Add new quiz questions"

# Push changes to GitHub
git push

# Pull latest changes (if working with others)
git pull
```

### Good Commit Message Examples
- `🎉 Initial commit: Create magical quiz website`
- `✨ Add Harry Potter quiz questions`
- `🐛 Fix leaderboard sorting issue`
- `💄 Improve mobile responsiveness`
- `📝 Update README with deployment instructions`
- `🔧 Configure Supabase authentication`

### Branching (Advanced)
```bash
# Create new branch for features
git checkout -b feature/new-subjects

# Switch between branches
git checkout main
git checkout feature/new-subjects

# Merge branch back to main
git checkout main
git merge feature/new-subjects
```

## 🏷️ Creating Releases

1. **Go to your GitHub repository**
2. **Click "Releases" → "Create a new release"**
3. **Tag version:** `v1.0.0`
4. **Release title:** `🎉 Quizzcasso v1.0.0 - Initial Release`
5. **Description:**
   ```markdown
   ## 🪄 First Magical Release!
   
   ### ✨ Features
   - Complete quiz platform with 14 subjects
   - Harry Potter and Marvel fun quizzes
   - Leaderboard system
   - Google authentication
   - Mobile-responsive design
   
   ### 🎯 What's Next
   - More quiz questions
   - Timer functionality
   - Achievement system
   ```

## 📊 Repository Settings

### 1. Enable GitHub Pages (Free Hosting)
- Go to Settings → Pages
- Source: Deploy from a branch
- Branch: `gh-pages` or `main`

### 2. Add Topics/Tags
- Go to repository main page
- Click gear icon next to "About"
- Add topics: `quiz`, `react`, `education`, `iit-gandhinagar`, `harry-potter`

### 3. Repository Description
```
🪄 Magical quiz website for IIT Gandhinagar Quizzing Society with Harry Potter theme, React frontend, and Supabase backend
```

## 🔒 Security Best Practices

### 1. Never Commit Sensitive Data
Create `.gitignore` file:
```
# Dependencies
node_modules/

# Environment variables
.env
.env.local
.env.production

# Build output
dist/
build/

# IDE files
.vscode/
.idea/

# OS files
.DS_Store
Thumbs.db
```

### 2. Use Environment Variables
- Never put API keys directly in code
- Use `VITE_` prefix for frontend variables
- Store secrets in hosting platform settings

## 🎉 Showcase Your Work

### 1. Add to Your Portfolio
- Include GitHub link in your resume
- Mention in LinkedIn profile
- Share with professors and peers

### 2. Social Media
- Tweet about your project
- Post on LinkedIn
- Share in college groups

### 3. Documentation
- Keep README updated
- Add code comments
- Document new features

## 🆘 Troubleshooting

### Common Issues:

1. **Git not recognized:**
   - Restart terminal after installing Git
   - Check PATH environment variable

2. **Permission denied:**
   - Use HTTPS instead of SSH for beginners
   - Check GitHub username/password

3. **Merge conflicts:**
   - Use `git status` to see conflicted files
   - Edit files to resolve conflicts
   - Commit resolved changes

4. **Large files:**
   - Use Git LFS for files > 100MB
   - Optimize images before committing

## 📚 Learning Resources

- **Git Tutorial:** [https://learngitbranching.js.org](https://learngitbranching.js.org)
- **GitHub Docs:** [https://docs.github.com](https://docs.github.com)
- **Markdown Guide:** [https://www.markdownguide.org](https://www.markdownguide.org)

---

**🎊 Congratulations! You're now a GitHub pro!**

Your magical Quizzcasso website is now safely stored on GitHub, ready to be shared with the world and continuously improved. Keep coding, keep learning, and keep making magic! ✨

*Created with ❤️ for the IIT Gandhinagar Quizzing Society*
