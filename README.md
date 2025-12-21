# 🎵 StudMusic - Student Music Streaming App

A beautiful, modern music streaming web app designed specifically for students. Combines the clean aesthetic of Apple Music with Spotify's discovery features.

## ✨ Features

- **🎨 Stunning UI** - Dark theme with smooth animations and Tailwind CSS styling
- **🎶 Music Integration** - Real music data via public APIs (with fallback mock data)
- **📱 Fully Responsive** - Works perfectly on desktop, tablet, and mobile
- **⚡ Lightning Fast** - Optimized with Next.js 14 and static export
- **🎯 Student-Focused** - Curated playlists and features for students
- **💾 Recently Played** - Auto-saves your playback history locally
- **🌙 Dark Mode** - Eye-friendly dark theme that's easy on the eyes

## 🚀 Quick Start

### Run as Desktop App (Windows)
1. Download this folder
2. **Double-click `run-app.bat`** ✅
3. App opens at `http://localhost:3000` automatically

[See detailed guide](DESKTOP_APP_GUIDE.md)

### Run from Command Line
```bash
npm install
npm run dev
```
Then open http://localhost:3000

### Deploy to Netlify (Free!)
```bash
git push  # Auto-deploys to Netlify
```

## 📋 Project Structure

```
src/
├── app/
│   ├── page.tsx          # Main home page
│   ├── layout.tsx        # Root layout
│   └── globals.css       # Global styles
└── components/
    ├── Navigation.tsx    # Top navigation bar
    ├── Hero.tsx          # Hero section
    ├── HorizontalScroll.tsx  # Scrollable sections
    ├── PlaylistCard.tsx  # Playlist cards
    ├── MusicPlayer.tsx   # Music player
    └── ThemeToggle.tsx   # Dark/light mode

lib/
├── musicApi.ts           # Music API service (Spotify, etc.)
└── mockData.ts           # Fallback data
```

## 🛠️ Tech Stack

- **Framework**: Next.js 14.2 + React 18
- **Styling**: Tailwind CSS + Custom CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **API**: Spotify Web API (public)
- **Deployment**: Netlify (static export)
- **Language**: TypeScript

## 📦 Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server (hot reload) |
| `npm run build` | Build for production |
| `npm start` | Run production server |
| `npm run lint` | Check code quality |

## 🌐 Live Demo

**Coming Soon!** Deploy will be available at your Netlify URL.

Local demo: Run `npm run dev` and visit `http://localhost:3000`

## 🎯 Sections

- **Listen Now** - Personalized playlist recommendations
- **Trending Now** - Popular playlists this week
- **Top 20 Chart** - Most streamed tracks globally
- **Student Picks** - Curated by and for students
- **Recently Played** - Your playback history

## 🔌 API Integration

The app uses the **Spotify Web API** for real music data. If the API is unavailable, it gracefully falls back to mock data so the app always works.

To enable Spotify API:
1. Get a token from [Spotify Web API](https://developer.spotify.com/dashboard)
2. Add to `.env.local`:
   ```
   NEXT_PUBLIC_SPOTIFY_TOKEN=your_token_here
   ```

## 💾 Local Storage

- **Recently Played**: Auto-saved to browser local storage
- **Theme Preference**: Persisted across sessions

## 🎨 Customization

### Colors
Edit `src/app/globals.css`:
```css
:root {
  --accent-primary: #6D28D9;  /* Purple */
  --accent-secondary: #EC4899; /* Pink */
}
```

### Playlists
Edit `src/lib/mockData.ts` to customize default playlists

## 📱 Browser Support

- ✅ Chrome/Brave
- ✅ Edge
- ✅ Safari
- ✅ Firefox

## ⚙️ System Requirements

- Node.js 18+ ([Download](https://nodejs.org/))
- Modern web browser
- ~200MB disk space (after npm install)

## 🐛 Troubleshooting

**"npm is not recognized"**
- Install Node.js from https://nodejs.org/
- Restart your computer

**"Port 3000 is already in use"**
- Kill the process: `npx kill-port 3000`
- Or use different port: `npm run dev -- -p 3001`

**API not working**
- App automatically uses mock data as fallback
- Check console for error messages

## 📖 Documentation

- [Desktop App Guide](DESKTOP_APP_GUIDE.md) - How to run as a desktop app
- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)

## 📄 License

MIT License - Feel free to use this for your projects!

## 👨‍💻 Contributing

Have ideas? Found a bug? Create an issue or submit a pull request!

---

**Made with ❤️ for students who love music** 🎶
