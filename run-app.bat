@echo off
REM StudMusic - Desktop App Launcher
REM Run this file to start the development server on your computer

echo.
echo ╔═══════════════════════════════════════════════════════════════════╗
echo ║              StudMusic - Music Streaming Web App                  ║
echo ║                                                                   ║
echo ║              Starting development server...                       ║
echo ╚═══════════════════════════════════════════════════════════════════╝
echo.

REM Check if Node.js is installed
where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo ERROR: Node.js is not installed!
    echo.
    echo Please download and install Node.js from:
    echo   https://nodejs.org/
    echo.
    echo After installation, restart this batch file.
    pause
    exit /b 1
)

REM Navigate to the app directory
cd /d "%~dp0"

REM Install dependencies if node_modules doesn't exist
if not exist "node_modules\" (
    echo Installing dependencies...
    call npm install
    if %ERRORLEVEL% NEQ 0 (
        echo Failed to install dependencies!
        pause
        exit /b 1
    )
)

REM Start the development server
echo.
echo ═══════════════════════════════════════════════════════════════════
echo   Server starting... Open your browser to http://localhost:3000
echo ═══════════════════════════════════════════════════════════════════
echo.

call npm run dev

pause
