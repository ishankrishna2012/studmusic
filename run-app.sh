#!/bin/bash

# StudMusic - Desktop App Launcher (Mac & Linux)
# Run this to start the development server
# Usage: bash run-app.sh  or  ./run-app.sh

echo ""
echo "╔═══════════════════════════════════════════════════════════════════╗"
echo "║              StudMusic - Music Streaming Web App                  ║"
echo "║                                                                   ║"
echo "║              Starting development server...                       ║"
echo "╚═══════════════════════════════════════════════════════════════════╝"
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ ERROR: Node.js is not installed!"
    echo ""
    echo "📥 Please download and install Node.js from:"
    echo "   https://nodejs.org/"
    echo ""
    echo "   Choose the LTS (Long Term Support) version"
    echo "   After installation, run this script again."
    echo ""
    exit 1
fi

# Show Node.js version
NODE_VERSION=$(node --version)
echo "✓ Node.js found: $NODE_VERSION"

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ ERROR: npm is not installed!"
    echo ""
    echo "   This usually means Node.js installation failed."
    echo "   Try reinstalling Node.js from https://nodejs.org/"
    echo ""
    exit 1
fi

# Show npm version
NPM_VERSION=$(npm --version)
echo "✓ npm found: $NPM_VERSION"
echo ""

# Install dependencies if needed
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies (this may take a minute)..."
    npm install
    if [ $? -ne 0 ]; then
        echo "❌ Failed to install dependencies!"
        exit 1
    fi
else
    echo "✓ Dependencies already installed"
fi

echo ""
echo "🚀 Starting development server..."
echo "   Press Ctrl+C to stop the server"
echo ""
echo "═══════════════════════════════════════════════════════════════════"
echo "   Server running at: http://localhost:3000"
echo "   Opening in your default browser..."
echo "═══════════════════════════════════════════════════════════════════"
echo ""

# Open in default browser (Mac and Linux specific)
if [[ "$OSTYPE" == "darwin"* ]]; then
    # macOS
    sleep 2
    open http://localhost:3000 || echo "Please visit: http://localhost:3000"
elif [[ "$OSTYPE" == "linux-gnu"* ]]; then
    # Linux
    sleep 2
    xdg-open http://localhost:3000 2>/dev/null || echo "Please visit: http://localhost:3000"
fi

# Start the development server
npm run dev

# Cleanup
echo ""
echo "👋 Server stopped. Goodbye!"
