# StudMusic 🎵

A modern, student-focused music streaming web app inspired by Apple Music and Spotify. Stream from multiple free music sources with a clean, premium interface.

## ✨ Features

### Hero Section
- **Bold Headline & Subheadline** - Eye-catching introduction to StudMusic
- **Primary & Secondary CTAs** - "Start Listening" and "Browse Music" buttons with smooth interactions
- **Floating Player Card** - Animated preview of the music player with album art, playback controls, and progress
- **Animated Background** - Floating gradients with parallax scrolling effects
- **Statistics Display** - 10M+ songs, 500K+ users, 100% free

### Navigation
- **Clean Top Bar** - StudMusic logo with gradient accent, navigation links with animated underlines
- **Responsive Design** - Collapsible menu on mobile, full nav on desktop
- **Sticky Positioning** - Always accessible with backdrop blur effect

### Content Discovery
- **Listen Now** - Personalized playlist picks to get started
- **Trending Now** - What's hot this week in the student community
- **Top 20 Chart** - Most streamed tracks and playlists globally
- **Student Picks** - Curated by and for students
- **Recently Played** - Continue where you left off

### Music Player
- **Sticky Bottom Player** - Always accessible music controls
- **Album Artwork** - Beautiful cover art display (hidden on small screens for space)
- **Playback Controls** - Play/pause, skip forward/backward buttons
- **Progress Bar** - Visual progress indicator with time display
- **Volume Control** - Adjustable volume slider
- **Like Button** - Heart icon to save favorite tracks
- **Responsive** - Simplified controls on mobile

### UI/UX Enhancements
- **Card Hover Effects** - Lift animation with shadow on hover
- **Smooth Transitions** - All interactions feel buttery smooth
- **Skeleton Loaders** - Subtle loading state animations
- **Scroll Animations** - Staggered fade-in effects as sections come into view
- **Waveform Animations** - Pulsing effects during playback

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Navigate to project directory
cd /workspaces/studmusic

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the app.

## 🏗️ Project Structure

```
src/
├── app/
│   ├── globals.css       # Global styles and animations
│   ├── layout.tsx        # Root layout with metadata
│   └── page.tsx          # Main page with all sections
├── components/
│   ├── Navigation.tsx    # Top navigation bar
│   ├── Hero.tsx          # Hero section with CTA buttons
│   ├── HorizontalScroll.tsx  # Reusable scrollable section
│   ├── PlaylistCard.tsx  # Individual playlist/album card
│   ├── MusicPlayer.tsx   # Sticky bottom music player
│   └── ThemeToggle.tsx   # Light/dark theme switcher
├── lib/
│   ├── mockData.ts       # Mock music and playlist data
│   └── utils.ts          # Utility functions
```

## 🎨 Design System

### Colors
- **Dark Background**: `#0a0a0a` (Deep black for OLED quality)
- **Dark Secondary**: `#1a1a1a` (Component backgrounds)
- **Dark Tertiary**: `#2a2a2a` (Borders and separators)
- **Accent Green**: `#1db954` (Primary actions, hover states)
- **Accent Pink**: `#ff006e` (Secondary highlights)

### Typography
- **Font**: Inter (clean, modern, highly legible)
- **Sizes**: Responsive scaling from mobile to desktop
- **Weights**: 300, 400, 500, 600, 700, 800 for hierarchy

### Animations
- **Fade In**: 0.6s ease-out
- **Slide Up**: 0.6s ease-out for staggered content
- **Pulse Soft**: 2s ease-in-out infinite for playing state
- **Float**: 3s ease-in-out infinite for background elements
- **Card Hover**: Cubic-bezier easing for natural lift

## 📱 Responsive Breakpoints

- **Mobile**: < 640px (optimized single-column layout)
- **Tablet**: 640px - 1024px (two-column grid)
- **Desktop**: 1024px+ (full horizontal scrolling, all features)

## 🔌 Mock Data & APIs

The app currently uses mock data representing multiple music sources:

- **YouTube Music API** (conceptual)
- **JioSaavn API** (conceptual)
- **Other free music APIs** (conceptual)

### Adding Real API Integration

To connect real music APIs, update `src/lib/mockData.ts`:

```typescript
// Example: Replace mock tracks with API call
export async function fetchTracks() {
  const response = await fetch('https://your-api.com/tracks')
  return response.json()
}
```

## 🎯 Customization

### Changing Colors

Edit `tailwind.config.ts`:

```typescript
theme: {
  extend: {
    colors: {
      'accent-primary': '#1db954',  // Change this
      'accent-secondary': '#ff006e', // Or this
    }
  }
}
```

### Adding More Sections

1. Create mock data in `lib/mockData.ts`
2. Add a new `HorizontalScroll` component in `page.tsx`
3. Pass your data and desired title

```typescript
<HorizontalScroll title="Your Section">
  {yourData.map((item, idx) => (
    <PlaylistCard key={item.id} playlist={item} index={idx} />
  ))}
</HorizontalScroll>
```

## 🚀 Deployment

### Deploy to Vercel (Recommended)

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

## 📦 Tech Stack

- **Framework**: Next.js 14 (React 18)
- **Styling**: Tailwind CSS 3 + Custom CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Images**: Next.js Image Component
- **Language**: TypeScript

## 🎓 Built For Students

StudMusic is specifically designed with students in mind:

- ✅ **Free Forever** - No premium tier, no hidden costs
- ✅ **Multiple Sources** - Access music from various free platforms
- ✅ **Fast & Lightweight** - Works on slow connections and old devices
- ✅ **Focus-Friendly** - Chill study beats and focus modes
- ✅ **Share & Discover** - Built-in social sharing features
- ✅ **Offline Support** - Planned: Download tracks for offline listening

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the MIT License.

---

**StudMusic** — All Your Music, One Place 🎵

*Stream from multiple free music sources. Built for students.*
