@echo off
echo 🪄 Quizzcasso GitHub Setup Script
echo ================================

echo.
echo Step 1: Checking if Git is installed...
git --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Git is not installed or not in PATH
    echo Please install Git from: https://git-scm.com/download/windows
    echo Then restart this script.
    pause
    exit /b 1
)
echo ✅ Git is installed

echo.
echo Step 2: Configuring Git user (if not already configured)...
git config --global user.name "Srushti Dandekar"
git config --global user.email "143330435+SrushhDandekar@users.noreply.github.com"
echo ✅ Git user configured

echo.
echo Step 3: Initializing Git repository...
git init
echo ✅ Git repository initialized

echo.
echo Step 4: Adding all files...
git add .
echo ✅ All files added

echo.
echo Step 5: Creating initial commit...
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

if %errorlevel% neq 0 (
    echo ❌ Commit failed. Please check for errors above.
    pause
    exit /b 1
)
echo ✅ Initial commit created

echo.
echo Step 6: Adding remote repository...
git remote add origin https://github.com/SrushhDandekar/Quizzcasso.git
echo ✅ Remote repository added

echo.
echo Step 7: Setting main branch...
git branch -M main
echo ✅ Main branch set

echo.
echo Step 8: Pushing to GitHub...
echo ⚠️  You may need to authenticate with GitHub
git push -u origin main

if %errorlevel% eq 0 (
    echo.
    echo 🎉 SUCCESS! Your Quizzcasso repository is now live on GitHub!
    echo 🌐 Repository URL: https://github.com/SrushhDandekar/Quizzcasso
    echo.
    echo Next steps:
    echo 1. Visit your repository to verify all files are uploaded
    echo 2. Follow DEPLOYMENT_GUIDE.md to deploy your website
    echo 3. Share your magical quiz platform with the world!
) else (
    echo.
    echo ❌ Push failed. This might be because:
    echo 1. Repository doesn't exist on GitHub yet
    echo 2. Authentication is required
    echo 3. Network connectivity issues
    echo.
    echo Please:
    echo 1. Create the repository 'Quizzcasso' on GitHub first
    echo 2. Make sure you're logged into GitHub
    echo 3. Try running this script again
)

echo.
pause
