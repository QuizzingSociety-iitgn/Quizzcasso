@echo off
echo Starting Quizzcasso Development Server...
echo.
cd /d "C:\Users\dande\Documents\augment-projects\Quizzing Website"
echo Current directory: %CD%
echo.
echo Installing dependencies (if needed)...
call npm install
echo.
echo Starting development server...
call npm run dev
pause
