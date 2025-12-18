# Getting Started with StudMusic

Welcome to **StudMusic** — a modern, student-focused music streaming web app built with Next.js!

## 📋 Prerequisites

Before you begin, make sure you have:

- **Node.js 18.17 or later** - [Download](https://nodejs.org/)
- **npm 9+** (comes with Node.js) or **yarn**
- **Git** - [Download](https://git-scm.com/)
- A code editor (VS Code recommended)

## ⚡ Quick Start (5 minutes)

### Option 1: Automated Setup

**On macOS/Linux**:
```bash
cd /workspaces/studmusic
chmod +x setup.sh
./setup.sh
```

**On Windows**:
```bash
cd /workspaces/studmusic
setup.bat
```

### Option 2: Manual Setup

```bash
# Navigate to project directory
cd /workspaces/studmusic

# Install dependencies
npm install

# Start development server
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

You should see the StudMusic app with:
- Beautiful dark theme
- Animated hero section
- Horizontal scrolling content sections
- Sticky music player at the bottom

## 🎮 Available Commands

```bash
# Development server (with hot reload)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

## 📁 Project Structure

```
studmusic/
├── src/
│   ├── app/
│   │   ├── globals.css        # Global styles and animations
│   │   ├── layout.tsx         # Root layout
│   │   └── page.tsx           # Main page
│   ├── components/
│   │   ├── Navigation.tsx     # Top nav bar
│   │   ├── Hero.tsx           # Hero section
│   │   ├── HorizontalScroll.tsx    # Scrollable sections
│   │   ├── PlaylistCard.tsx   # Playlist cards
│   │   ├── MusicPlayer.tsx    # Bottom player
│   │   └── ThemeToggle.tsx    # Theme switcher
│   └── lib/
│       ├── mockData.ts        # Mock music data
│       └── utils.ts           # Utilities
├── public/                    # Static files
├── tailwind.config.ts         # Tailwind config
├── next.config.js             # Next.js config
├── tsconfig.json              # TypeScript config
└── package.json               # Dependencies

```

## 🎨 Features Overview

### ✅ Implemented

- **Responsive Design** - Works on mobile, tablet, and desktop
- **Dark Theme** - Beautiful dark interface with accent colors
- **Smooth Animations** - Framer Motion for all interactions
- **Hero Section** - Eye-catching landing section with CTAs
- **Navigation** - Clean top bar with section links
- **Horizontal Scrolling Sections** - Five content discovery sections
- **Playlist Cards** - Individual items with hover effects
- **Sticky Music Player** - Always accessible bottom player
- **Mock Data** - Pre-loaded with sample playlists and tracks

### 🔄 Ready to Add

- Real API integration (JioSaavn, Spotify, YouTube Music)
- User authentication (login/signup)
- Search functionality
- User library/favorites
- Share playlists
- Offline mode
- Theme toggle (light/dark)

## 🔧 Customization

### Change Colors

Edit `tailwind.config.ts`:

```typescript
colors: {
  'dark-bg': '#0a0a0a',
  'accent-primary': '#1db954',      // Green - change this
  'accent-secondary': '#ff006e',    // Pink - or this
}
```

### Modify Typography

Edit `src/app/globals.css`:

```css
body {
  font-family: 'Inter', sans-serif;  /* Change font here */
}
```

### Add New Sections

1. Create mock data in `src/lib/mockData.ts`
2. Add to `src/app/page.tsx`:

```typescript
<HorizontalScroll title="Your Section">
  {yourData.map((item, idx) => (
    <PlaylistCard key={item.id} playlist={item} index={idx} />
  ))}
</HorizontalScroll>
```

## 🔌 API Integration

StudMusic is ready for real music APIs! 

**Currently supported**:
- JioSaavn API
- YouTube Music (via unofficial API)
- Spotify Web API
- Last.fm API

See [API_INTEGRATION.md](API_INTEGRATION.md) for detailed setup instructions.

**Quick example** - Using JioSaavn:

```bash
npm install jiosaavn-api
```

```typescript
// src/lib/api/jiosaavn.ts
import JioSaavn from 'jiosaavn-api'

const jioSaavn = new JioSaavn()

export async function fetchTopCharts() {
  return await jioSaavn.getTopCharts()
}
```

## 🚀 Deployment

Deploy to **Vercel** (easiest - takes 2 minutes):

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Select your StudMusic repo
5. Click "Deploy"

Your app is now live! 🎉

See [DEPLOYMENT.md](DEPLOYMENT.md) for other hosting options (Netlify, Railway, self-hosted, etc).

## 📱 Mobile Experience

The app is fully responsive:

- **Mobile (< 640px)** - Single column layout, simplified controls
- **Tablet (640-1024px)** - Two columns
- **Desktop (1024px+)** - Full horizontal scrolling

Try resizing your browser to test different breakpoints.

## 🐛 Troubleshooting

### Port 3000 already in use
```bash
npm run dev -- -p 3001
# Or kill the process using port 3000
# macOS/Linux: lsof -ti:3000 | xargs kill -9
# Windows: netstat -ano | findstr :3000
```

### Node modules error
```bash
rm -rf node_modules package-lock.json
npm install
```

### Build errors
```bash
npm run build
# Check error messages and consult documentation
```

### Images not loading
- Check image URLs in `src/lib/mockData.ts`
- Ensure Unsplash is accessible
- Verify Next.js Image configuration

## 📚 Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/)
- [TypeScript](https://www.typescriptlang.org/)

## 🎯 Next Steps

1. **Explore the code** - Open files in VS Code to understand the structure
2. **Customize colors** - Make it your own!
3. **Add real APIs** - Integrate music data sources
4. **Deploy** - Share your app with the world
5. **Enhance** - Add new features (search, auth, recommendations)

## 💬 Support

Having issues? 

1. Check this README
2. See [DEPLOYMENT.md](DEPLOYMENT.md) for deployment help
3. See [API_INTEGRATION.md](API_INTEGRATION.md) for API help
4. Check [FEATURES.md](FEATURES.md) for complete feature list

## 📄 License

Open source - MIT License

## 🙏 Acknowledgments

Built with modern web technologies:
- Next.js
- React
- TypeScript
- Tailwind CSS
- Framer Motion

Inspired by Apple Music and Spotify.

---

**Ready to start?** Run `npm run dev` and begin exploring! 🎵

Happy coding! 💻
