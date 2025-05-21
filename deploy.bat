@echo off
SETLOCAL ENABLEDELAYEDEXPANSION

echo 🚀 Starting deployment to gh-pages branch...

:: Run Vite build
echo 🏗️ Building the project...
call npm run build
IF %ERRORLEVEL% NEQ 0 (
    echo ❌ Build failed.
    exit /b 1
)

:: Get current branch name
FOR /F "tokens=*" %%i IN ('git branch --show-current') DO SET CURRENT_BRANCH=%%i

:: Create temp folder and copy dist contents
mkdir temp-deploy
xcopy /E /I /Y dist\* temp-deploy\

:: Switch to orphan gh-pages branch
git checkout --orphan gh-pages

:: Remove all existing files
del /F /Q * >nul 2>&1
for /d %%D in (*) do rd /s /q "%%D"

:: Copy from temp to root
xcopy /E /I /Y temp-deploy\* .

:: Cleanup temp
rd /s /q temp-deploy

:: Commit and push
git add .
git commit -m "🚀 Deploy Vite site to GitHub Pages"
git push origin gh-pages --force

:: Return to original branch
git checkout %CURRENT_BRANCH%

echo ✅ Deployed! Your Vite site is live on GitHub Pages.
ENDLOCAL
pause
