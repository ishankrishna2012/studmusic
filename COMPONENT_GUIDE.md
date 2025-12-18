# StudMusic Component Guide

A comprehensive guide to all StudMusic components and their usage.

## 🎯 Components Overview

### 1. **Navigation** (`Navigation.tsx`)

The top navigation bar with logo and section links.

**Props**: None (uses internal state)

**Usage**:
```typescript
import Navigation from '@/components/Navigation'

export default function Page() {
  return (
    <>
      <Navigation />
      {/* Page content */}
    </>
  )
}
```

**Features**:
- Logo with gradient accent
- Animated nav links with underline effect
- Sign In button
- Responsive mobile menu
- Sticky positioning with backdrop blur

**Customization**:
Edit navigation links in the component:
```typescript
const navItems = [
  { id: 'listen', label: 'Listen Now' },
  { id: 'browse', label: 'Browse' },
  // Add more items
]
```

---

### 2. **Hero** (`Hero.tsx`)

Large animated landing section with headline, CTAs, and floating player preview.

**Props**:
```typescript
interface HeroProps {
  // No props currently - uses internal data
}
```

**Usage**:
```typescript
import Hero from '@/components/Hero'

export default function Page() {
  return <Hero />
}
```

**Features**:
- Animated gradient background
- Floating album cards with parallax
- Play/pause player preview
- Primary and secondary CTAs
- Statistics display
- Framer Motion animations

**Customization**:
Edit hero content:
```typescript
<h1>Your Headline Here</h1>
<p>Your subheadline here</p>
```

Change player preview track in `mockData.ts`.

---

### 3. **HorizontalScroll** (`HorizontalScroll.tsx`)

Reusable component for scrollable content sections.

**Props**:
```typescript
interface HorizontalScrollProps {
  title: string              // Section title
  description?: string       // Optional subtitle
  children: ReactNode        // Content to scroll
}
```

**Usage**:
```typescript
import HorizontalScroll from '@/components/HorizontalScroll'
import PlaylistCard from '@/components/PlaylistCard'

export default function Page() {
  const playlists = [...]
  
  return (
    <HorizontalScroll 
      title="Listen Now"
      description="Your personalized picks"
    >
      {playlists.map(p => (
        <PlaylistCard key={p.id} playlist={p} />
      ))}
    </HorizontalScroll>
  )
}
```

**Features**:
- Horizontal scroll with scroll buttons
- Smooth animations
- Responsive design
- InView animations

**Customization**:
Adjust scroll distance in the component:
```typescript
const scrollAmount = 400  // Change this value
```

---

### 4. **PlaylistCard** (`PlaylistCard.tsx`)

Individual playlist/album card with cover art and metadata.

**Props**:
```typescript
interface PlaylistCardProps {
  playlist: Playlist     // Playlist data
  index?: number         // For staggered animations
}
```

**Usage**:
```typescript
import PlaylistCard from '@/components/PlaylistCard'

const playlist = {
  id: '1',
  title: 'Chill Beats',
  description: 'Relax with these vibes',
  coverUrl: 'https://...',
  trackCount: 45,
  plays: 12500,
}

export default function Example() {
  return <PlaylistCard playlist={playlist} index={0} />
}
```

**Features**:
- Hover lift animation
- Album art with zoom effect
- Play button on hover
- Track count and play count display
- More menu button
- Border glow on hover

**Styling**:
- Adjust width: `w-48` (in component)
- Change border radius: `rounded-xl`
- Modify shadow: `hover:shadow-lg`

---

### 5. **MusicPlayer** (`MusicPlayer.tsx`)

Sticky bottom music player with playback controls.

**Props**:
```typescript
interface MusicPlayerProps {
  initialTrack?: Track  // Track to display
}
```

**Usage**:
```typescript
import MusicPlayer from '@/components/MusicPlayer'
import { mockTracks } from '@/lib/mockData'

export default function Page() {
  return (
    <>
      {/* Page content */}
      <MusicPlayer initialTrack={mockTracks[0]} />
    </>
  )
}
```

**Features**:
- Album artwork display
- Play/pause button with animation
- Skip forward/backward
- Progress bar with time display
- Volume control
- Heart/like button
- Responsive - simplified on mobile

**Customization**:
Change player height or styling:
```typescript
// In component
className="fixed bottom-0 left-0 right-0 bg-dark-secondary/95"
//        Adjust these values
```

---

### 6. **ThemeToggle** (`ThemeToggle.tsx`)

Light/dark theme switcher button (positioned as floating button).

**Props**: None

**Usage**:
```typescript
import ThemeToggle from '@/components/ThemeToggle'

export default function Layout() {
  return (
    <>
      {/* Content */}
      <ThemeToggle />
    </>
  )
}
```

**Features**:
- Fixed position floating button
- Smooth theme transitions
- Sun/moon icons from Lucide
- Hover effects

**Positioning**:
Adjust button position:
```typescript
className="fixed bottom-20 right-8"  // Change these values
```

---

## 🎨 Design Tokens

### Colors

```typescript
// Tailwind config colors
dark-bg: #0a0a0a      // Main background
dark-secondary: #1a1a1a  // Card backgrounds
dark-tertiary: #2a2a2a   // Borders
accent-primary: #1db954   // Green buttons/highlights
accent-secondary: #ff006e // Pink accents
```

### Animations

```typescript
// In tailwind.config.ts
'fade-in': 'fadeIn 0.6s ease-out'
'slide-up': 'slideUp 0.6s ease-out'
'pulse-soft': 'pulseSoft 2s ease-in-out infinite'
'float': 'float 3s ease-in-out infinite'
```

### Typography

```typescript
// Font: Inter (from Google Fonts)
// Weights: 300, 400, 500, 600, 700, 800
// Line height: Auto-optimized for readability
```

### Shadows

```typescript
// Subtle shadows for depth
shadow-sm: 0 1px 2px
shadow-md: 0 4px 6px
shadow-lg: 0 10px 15px
```

---

## 🔄 Data Flow

### Mock Data Structure

```typescript
// Track
{
  id: string
  title: string
  artist: string
  album: string
  duration: number      // in seconds
  coverUrl: string
  genre: string
}

// Playlist
{
  id: string
  title: string
  description: string
  coverUrl: string
  trackCount: number
  plays: number
}
```

See `src/lib/mockData.ts` for all data.

---

## 🎯 Component Composition Example

Here's how components work together on the main page:

```typescript
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import HorizontalScroll from '@/components/HorizontalScroll'
import PlaylistCard from '@/components/PlaylistCard'
import MusicPlayer from '@/components/MusicPlayer'

export default function HomePage() {
  return (
    <main>
      <Navigation />
      <Hero />
      
      <div className="max-w-7xl mx-auto px-6 space-y-20">
        <HorizontalScroll title="Listen Now">
          {playlists.map(p => (
            <PlaylistCard key={p.id} playlist={p} />
          ))}
        </HorizontalScroll>
      </div>
      
      <MusicPlayer initialTrack={mockTracks[0]} />
    </main>
  )
}
```

---

## 🔌 Extending Components

### Create a New Component

1. Create file in `src/components/YourComponent.tsx`
2. Use TypeScript for type safety
3. Add Framer Motion for animations
4. Export as default

Example:
```typescript
'use client'

import { motion } from 'framer-motion'

interface YourComponentProps {
  data: any
}

export default function YourComponent({ data }: YourComponentProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Your content */}
    </motion.div>
  )
}
```

### Reuse in Other Places

```typescript
import YourComponent from '@/components/YourComponent'

export default function Page() {
  return <YourComponent data={yourData} />
}
```

---

## 🎬 Animation Reference

### Common Framer Motion Patterns

**Fade In**:
```typescript
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.5 }}
/>
```

**Slide Up**:
```typescript
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
/>
```

**Scale**:
```typescript
<motion.button
  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.95 }}
/>
```

**Stagger Children**:
```typescript
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}
```

---

## 📱 Responsive Classes

Used throughout StudMusic:

```css
/* Mobile-first */
md:hidden       /* Hidden on medium+ screens */
hidden md:flex  /* Hidden on mobile, visible on desktop */
lg:block        /* Block on large screens */
sm:inline-flex  /* Inline on small+ screens */

/* Sizes */
sm: 640px
md: 768px
lg: 1024px
xl: 1280px
2xl: 1536px
```

---

## 🚀 Performance Tips

1. **Use Next.js Image** - For optimized images
2. **Lazy Loading** - Components load as needed
3. **Stagger Animations** - Don't animate everything at once
4. **Cache API Calls** - Reuse data when possible
5. **Minimize Re-renders** - Use React.memo for heavy components

---

## 📖 Component Checklist

- [x] Navigation
- [x] Hero
- [x] HorizontalScroll
- [x] PlaylistCard
- [x] MusicPlayer
- [x] ThemeToggle
- [ ] SearchBar (TODO)
- [ ] UserProfile (TODO)
- [ ] ShareModal (TODO)
- [ ] TrackDetail (TODO)

---

For questions or to add new components, check the main [GETTING_STARTED.md](GETTING_STARTED.md) guide!

