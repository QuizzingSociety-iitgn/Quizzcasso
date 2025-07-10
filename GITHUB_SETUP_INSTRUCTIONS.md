# 🚀 GitHub Setup Instructions for Quizzcasso

## Step 1: Install Git (if not already installed)

### Download Git:
1. Go to [https://git-scm.com/download/windows](https://git-scm.com/download/windows)
2. Download the latest version
3. Run the installer with default settings
4. **Important:** Make sure "Add Git to PATH" is checked
5. Restart your Command Prompt/PowerShell after installation

### Verify Git Installation:
```bash
git --version
```

## Step 2: Create GitHub Repository

1. **Go to GitHub:**
   - Visit [https://github.com](https://github.com)
   - Click the **"+"** button in the top right
   - Select **"New repository"**

2. **Repository Settings:**
   - **Repository name:** `Quizzcasso`
   - **Description:** `🪄 Quizzcasso - A magical Harry Potter-themed quiz website with Google authentication, multiple subjects, difficulty levels, and leaderboard. Built with React + Vite for IIT Gandhinagar Quizzing Society.`
   - **Visibility:** Public ✅
   - **Initialize:** Don't check any boxes (we have files already)
   - Click **"Create repository"**

## Step 3: Configure Git (First Time Setup)

```bash
git config --global user.name "Srushti Dandekar"
git config --global user.email "143330435+SrushhDandekar@users.noreply.github.com"
```

## Step 4: Initialize and Push Your Code

Open Command Prompt or PowerShell in your project folder and run these commands:

```bash
# Navigate to your project folder
cd "C:\Users\dande\Documents\augment-projects\Quizzing Website"

# Initialize git repository
git init

# Add all files
git add .

# Create initial commit
git commit -m "🪄 Initial commit: Complete Quizzcasso magical quiz website

✨ Features:
- Beautiful dark magical theme with shimmer effects
- Google authentication integration
- 14 academic subjects with 3 difficulty levels
- Harry Potter and Marvel fun quizzes
- Interactive leaderboard system
- Responsive design for all devices
- Built with React + Vite

🎯 Created for IIT Gandhinagar Quizzing Society
👩‍💻 Developed by Srushti Dandekar, Club Secretary"

# Add remote repository (replace YOUR_USERNAME with SrushhDandekar)
git remote add origin https://github.com/SrushhDandekar/Quizzcasso.git

# Set main branch
git branch -M main

# Push to GitHub
git push -u origin main
```

## Step 5: Verify Upload

1. Go to your GitHub repository: `https://github.com/SrushhDandekar/Quizzcasso`
2. You should see all your files uploaded
3. Your README.md should display with project information

## Alternative Method: GitHub Desktop

If command line seems complex:

1. **Download GitHub Desktop:**
   - Go to [https://desktop.github.com](https://desktop.github.com)
   - Download and install

2. **Clone your empty repository:**
   - Open GitHub Desktop
   - File → Clone Repository
   - Enter: `SrushhDandekar/Quizzcasso`

3. **Copy your files:**
   - Copy all files from your project folder
   - Paste into the cloned repository folder

4. **Commit and push:**
   - GitHub Desktop will show all changes
   - Add commit message: "Initial commit: Complete Quizzcasso website"
   - Click "Commit to main"
   - Click "Push origin"

## Step 6: Update Repository Settings

After uploading:

1. **Add Topics/Tags:**
   - Go to your repository
   - Click the gear icon next to "About"
   - Add topics: `react`, `vite`, `quiz`, `harry-potter`, `javascript`, `supabase`, `iit-gandhinagar`

2. **Enable GitHub Pages (Optional):**
   - Go to Settings → Pages
   - Source: Deploy from a branch
   - Branch: main
   - Your site will be at: `https://SrushhDandekar.github.io/Quizzcasso`

## Troubleshooting

### If Git commands don't work:
1. Restart your terminal after installing Git
2. Try using Git Bash instead of Command Prompt
3. Use GitHub Desktop as alternative

### If push fails:
1. Make sure repository name matches exactly: `Quizzcasso`
2. Check your GitHub username is correct: `SrushhDandekar`
3. You might need to authenticate with GitHub

## Success! 🎉

Once completed, your repository will be live at:
**https://github.com/SrushhDandekar/Quizzcasso**

You can then:
- Share the repository link
- Deploy to Vercel/Netlify directly from GitHub
- Collaborate with others
- Track changes and updates

---

**Next Step:** Deploy your website using the DEPLOYMENT_GUIDE.md!
