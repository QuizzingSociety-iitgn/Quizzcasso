@echo off
echo 🪄 Quizzcasso GitHub Upload Script
echo ==================================
echo.

REM Try different Git paths
set "GIT_PATH="
if exist "C:\Program Files\Git\bin\git.exe" set "GIT_PATH=C:\Program Files\Git\bin\git.exe"
if exist "C:\Program Files (x86)\Git\bin\git.exe" set "GIT_PATH=C:\Program Files (x86)\Git\bin\git.exe"
if exist "%USERPROFILE%\AppData\Local\Programs\Git\bin\git.exe" set "GIT_PATH=%USERPROFILE%\AppData\Local\Programs\Git\bin\git.exe"

REM Check if git is in PATH
git --version >nul 2>&1
if %errorlevel% equ 0 (
    set "GIT_PATH=git"
    echo ✅ Git found in PATH
) else if defined GIT_PATH (
    echo ✅ Git found at: %GIT_PATH%
) else (
    echo ❌ Git not found. Please:
    echo 1. Install Git from: https://git-scm.com/download/windows
    echo 2. Restart your computer
    echo 3. Run this script again
    echo.
    echo OR use GitHub Desktop instead:
    echo https://desktop.github.com
    pause
    exit /b 1
)

echo.
echo Step 1: Initializing Git repository...
"%GIT_PATH%" init
if %errorlevel% neq 0 (
    echo ❌ Failed to initialize Git repository
    pause
    exit /b 1
)
echo ✅ Git repository initialized

echo.
echo Step 2: Configuring Git user...
"%GIT_PATH%" config user.name "Srushti Dandekar"
"%GIT_PATH%" config user.email "143330435+SrushhDandekar@users.noreply.github.com"
echo ✅ Git user configured

echo.
echo Step 3: Adding all files...
"%GIT_PATH%" add .
if %errorlevel% neq 0 (
    echo ❌ Failed to add files
    pause
    exit /b 1
)
echo ✅ All files added

echo.
echo Step 4: Creating initial commit...
"%GIT_PATH%" commit -m "🪄 Initial commit: Complete Quizzcasso magical quiz website - Features: Beautiful dark magical theme, Google authentication, 14 academic subjects, Harry Potter and Marvel fun quizzes, Interactive leaderboard, Responsive design, Built with React + Vite for IIT Gandhinagar Quizzing Society by Srushti Dandekar"
if %errorlevel% neq 0 (
    echo ❌ Failed to create commit
    pause
    exit /b 1
)
echo ✅ Initial commit created

echo.
echo Step 5: Adding remote repository...
"%GIT_PATH%" remote add origin https://github.com/SrushhDandekar/Quizzcasso.git
echo ✅ Remote repository added

echo.
echo Step 6: Setting main branch...
"%GIT_PATH%" branch -M main
echo ✅ Main branch set

echo.
echo Step 7: Pushing to GitHub...
echo ⚠️  You may need to authenticate with GitHub
"%GIT_PATH%" push -u origin main

if %errorlevel% eq 0 (
    echo.
    echo 🎉 SUCCESS! Your Quizzcasso repository is now live on GitHub!
    echo 🌐 Repository URL: https://github.com/SrushhDandekar/Quizzcasso
    echo.
    echo 🚀 Next Steps:
    echo 1. Visit your repository to verify all files are uploaded
    echo 2. Deploy to Vercel: https://vercel.com
    echo 3. Import your GitHub repository
    echo 4. Your website will be live in minutes!
    echo.
    echo 🪄 Your magical quiz website is ready to enchant the world!
) else (
    echo.
    echo ❌ Push failed. This might be because:
    echo 1. Authentication is required
    echo 2. Repository doesn't exist on GitHub
    echo 3. Network connectivity issues
    echo.
    echo 💡 Alternative: Use GitHub Desktop
    echo 1. Download: https://desktop.github.com
    echo 2. Clone: SrushhDandekar/Quizzcasso
    echo 3. Copy your files to the cloned folder
    echo 4. Commit and push through the GUI
)

echo.
pause
