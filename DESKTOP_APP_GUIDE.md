# StudMusic - How to Run as Desktop App

## 🚀 Quick Start (Windows)

### Option 1: **Simple Double-Click (Easiest)**
1. Download the entire `studmusic` folder
2. **Double-click `run-app.bat`** - That's it!
3. The app will open automatically in your browser at `http://localhost:3000`

### Option 2: Manual Setup (If .bat doesn't work)
1. **Install Node.js** (if not already installed)
   - Download from: https://nodejs.org/
   - Install the LTS version
   - Restart your computer after installation

2. **Open Command Prompt** in the StudMusic folder
   - Hold `Shift` + Right-click in the folder
   - Select "Open PowerShell window here" (or Command Prompt)

3. **Run these commands:**
   ```bash
   npm install
   npm run dev
   ```

4. **Open your browser** and go to: `http://localhost:3000`

## 🎵 Features

- **Clean Apple Music + Spotify-style UI** - Beautiful dark theme with smooth animations
- **Public API Integration** - Uses real music data (with Spotify API fallback)
- **Play Music** - Interactive music player with controls
- **Browse Playlists** - Trending, Student Picks, Recently Played, etc.
- **Responsive Design** - Works on desktop, tablet, and mobile
- **No Network Issues** - Falls back to mock data if API is unavailable

## 📱 Browser Support

- Chrome/Brave (recommended)
- Edge
- Safari
- Firefox

## ⚙️ System Requirements

- **Windows 7+** (or any OS with Node.js)
- **Node.js 18+** (download from nodejs.org)
- **Modern web browser** (any recent version)
- **No other software needed!**

## 🛑 Troubleshooting

**Q: "npm is not recognized"**
- Install Node.js from https://nodejs.org/
- Restart your computer after installation

**Q: "Port 3000 is already in use"**
- Stop the previous server (Ctrl+C in the terminal)
- Or change the port: `npm run dev -- -p 3001`

**Q: App won't open automatically**
- Manually go to `http://localhost:3000` in your browser

## 📝 Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Check code quality
```

## 🌐 Online Version

Deploy to Netlify for free:
1. Push code to GitHub
2. Connect repo to Netlify
3. It deploys automatically!

Visit: [Your Netlify URL] (when deployed)

---

**Enjoy StudMusic! 🎶**
