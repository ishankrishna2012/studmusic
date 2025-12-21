#!/usr/bin/env python3
"""
StudMusic - Desktop App Launcher (Python)
Run this to start the development server on your computer
Works on Windows, Mac, and Linux
"""

import os
import sys
import subprocess
import webbrowser
import time
import platform

def print_banner():
    """Print welcome banner"""
    banner = """
    ╔═══════════════════════════════════════════════════════════════════╗
    ║              StudMusic - Music Streaming Web App                  ║
    ║                                                                   ║
    ║              Starting development server...                       ║
    ╚═══════════════════════════════════════════════════════════════════╝
    """
    print(banner)

def check_node():
    """Check if Node.js is installed"""
    try:
        result = subprocess.run(['node', '--version'], capture_output=True, text=True)
        if result.returncode == 0:
            print(f"✓ Node.js found: {result.stdout.strip()}")
            return True
    except FileNotFoundError:
        pass
    return False

def check_npm():
    """Check if npm is installed"""
    try:
        result = subprocess.run(['npm', '--version'], capture_output=True, text=True)
        if result.returncode == 0:
            print(f"✓ npm found: {result.stdout.strip()}")
            return True
    except FileNotFoundError:
        pass
    return False

def install_dependencies():
    """Install npm dependencies if needed"""
    if not os.path.exists('node_modules'):
        print("\n📦 Installing dependencies (this may take a minute)...")
        result = subprocess.run(['npm', 'install'], capture_output=False)
        if result.returncode != 0:
            print("❌ Failed to install dependencies!")
            return False
    else:
        print("✓ Dependencies already installed")
    return True

def start_server():
    """Start the development server"""
    print("\n🚀 Starting development server...")
    print("   Press Ctrl+C to stop the server\n")
    print("═══════════════════════════════════════════════════════════════════")
    print("   Server running at: http://localhost:3000")
    print("   Opening in your default browser...")
    print("═══════════════════════════════════════════════════════════════════\n")
    
    # Open browser after a short delay
    time.sleep(2)
    try:
        webbrowser.open('http://localhost:3000')
    except Exception as e:
        print(f"⚠ Could not open browser: {e}")
        print("  Please manually visit: http://localhost:3000")
    
    # Start the dev server
    subprocess.run(['npm', 'run', 'dev'])

def main():
    """Main entry point"""
    print_banner()
    
    # Check prerequisites
    print("Checking system requirements...\n")
    
    if not check_node():
        print("\n❌ ERROR: Node.js is not installed!")
        print("\n📥 Please download and install Node.js from:")
        print("   https://nodejs.org/")
        print("\n   Choose the LTS (Long Term Support) version")
        print("   After installation, restart this script.\n")
        sys.exit(1)
    
    if not check_npm():
        print("\n❌ ERROR: npm is not installed!")
        print("\n   This usually means Node.js installation failed.")
        print("   Try reinstalling Node.js from https://nodejs.org/\n")
        sys.exit(1)
    
    # Install dependencies
    print()
    if not install_dependencies():
        sys.exit(1)
    
    # Start server
    try:
        start_server()
    except KeyboardInterrupt:
        print("\n\n👋 Server stopped. Goodbye!")
        sys.exit(0)

if __name__ == '__main__':
    main()
