# 🚀 StudMusic - Complete Setup Guide

## 🖥️ Run on Desktop (Windows, Mac, Linux)

### Option 1: Windows Batch File (Easiest) ✅
```bash
Double-click: run-app.bat
```

### Option 2: Python Script (Windows, Mac, Linux)
```bash
python3 run-app.py
```

Or on some systems:
```bash
python run-app.py
```

### Option 3: Command Line (All Systems)
```bash
npm install      # First time only
npm run dev      # Starts server at http://localhost:3000
```

---

## 📱 Run on Phone

### Quick Option: PWA (Instant)
1. Visit your Netlify URL on phone
2. Click menu → **"Install app"** or **"Add to Home Screen"**
3. App appears on home screen like native app
4. Works offline!

### Full APK (Native App)
1. Follow guide: [MOBILE_APK_GUIDE.md](MOBILE_APK_GUIDE.md)
2. Build APK using Capacitor (recommended)
3. Install on Android phone
4. Launch like any other app

---

## 📋 What You Get

### Desktop Version
- ✅ Beautiful dark theme UI
- ✅ Smooth animations
- ✅ Music player
- ✅ Browse playlists
- ✅ Recently played history
- ✅ Works offline (PWA)

### Mobile Version
- ✅ Same features as desktop
- ✅ Touch-optimized buttons
- ✅ Responsive layout
- ✅ Mobile-friendly navigation
- ✅ Works offline

---

## 🛠️ System Requirements

**For Desktop:**
- Node.js 18+ ([Download](https://nodejs.org/))
- Modern web browser
- ~200MB disk space

**For Mobile APK:**
- Android Studio (for building)
- Java 11+ 
- Or use Expo (easier)

---

## 📂 Project Files

```
run-app.bat              ← Windows launcher (DOUBLE-CLICK)
run-app.py               ← Python launcher
DESKTOP_APP_GUIDE.md     ← Detailed desktop setup
MOBILE_APK_GUIDE.md      ← How to build APK
README.md                ← Project overview
```

---

## ⚡ Quick Commands

```bash
npm install              # Install all dependencies
npm run dev              # Start development server
npm run build            # Build for production
npm start                # Run production build
npm run lint             # Check code quality
```

---

## 🌐 Deploy Online

### Netlify (Recommended)
1. Push to GitHub
2. Connect repo to Netlify  
3. Auto-deploys on every push
4. Share link with friends

### Vercel
```bash
npm install -g vercel
vercel
```

---

## 🎵 Features

- 🎨 Beautiful dark theme
- ⚡ Lightning fast (Next.js)
- 📱 Mobile responsive
- 🎵 Music integration
- 💾 Offline support
- 🌙 Dark mode
- 📊 Trending playlists
- ⏮️ Recently played

---

## 🐛 Troubleshooting

| Problem | Solution |
|---------|----------|
| "npm not found" | Install Node.js from nodejs.org |
| "Port 3000 in use" | Kill process or use: `npm run dev -- -p 3001` |
| "API not working" | App falls back to mock data automatically |
| "Phone won't install APK" | Enable "Unknown Sources" in settings |

---

## 📚 Documentation

- [DESKTOP_APP_GUIDE.md](DESKTOP_APP_GUIDE.md) - Detailed desktop setup
- [MOBILE_APK_GUIDE.md](MOBILE_APK_GUIDE.md) - Build Android APK
- [README.md](README.md) - Full project overview
- [GitHub Repo](https://github.com/ishankrishna2012/studmusic)

---

## 🎯 Next Steps

1. **Choose your platform:**
   - 💻 Desktop → Run `run-app.bat` or `run-app.py`
   - 📱 Phone → Follow MOBILE_APK_GUIDE.md
   - 🌐 Online → Deploy to Netlify

2. **Enjoy studying with music!** 🎶

---

**Questions?** Check the detailed guides above or create an issue on GitHub!

Made with ❤️ for students 🎓
