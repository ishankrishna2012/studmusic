export interface Track {
  id: string
  title: string
  artist: string
  album: string
  duration: number
  coverUrl: string
  genre: string
}

export interface Playlist {
  id: string
  title: string
  description: string
  coverUrl: string
  trackCount: number
  plays: number
}

// Mock music data
export const mockTracks: Track[] = [
  {
    id: '1',
    title: 'Midnight Dreams',
    artist: 'Luna Echo',
    album: 'Neon Nights',
    duration: 243,
    coverUrl: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop',
    genre: 'Electronic',
  },
  {
    id: '2',
    title: 'Cosmic Vibes',
    artist: 'Stellar Sound',
    album: 'Universe',
    duration: 198,
    coverUrl: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=300&h=300&fit=crop',
    genre: 'Synthwave',
  },
  {
    id: '3',
    title: 'Ocean Waves',
    artist: 'Azure Shore',
    album: 'Serenity',
    duration: 267,
    coverUrl: 'https://images.unsplash.com/photo-1511379938547-c1f69b13d835?w=300&h=300&fit=crop',
    genre: 'Ambient',
  },
  {
    id: '4',
    title: 'Urban Pulse',
    artist: 'City Beats',
    album: 'Metro',
    duration: 210,
    coverUrl: 'https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=300&h=300&fit=crop',
    genre: 'Hip Hop',
  },
  {
    id: '5',
    title: 'Sunrise Horizon',
    artist: 'Golden Hour',
    album: 'Dawn',
    duration: 255,
    coverUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop',
    genre: 'Indie Pop',
  },
  {
    id: '6',
    title: 'Neon Lights',
    artist: 'Synth Wave',
    album: 'Retro Future',
    duration: 234,
    coverUrl: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=300&h=300&fit=crop',
    genre: 'Electronic',
  },
  {
    id: '7',
    title: 'Electric Feelings',
    artist: 'Volt & Amp',
    album: 'Power Up',
    duration: 198,
    coverUrl: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?w=300&h=300&fit=crop',
    genre: 'Electronic',
  },
  {
    id: '8',
    title: 'Summer Groove',
    artist: 'Beach Vibes',
    album: 'Tropical',
    duration: 211,
    coverUrl: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=300&h=300&fit=crop',
    genre: 'Pop',
  },
]

export const listenNowPlaylists: Playlist[] = [
  {
    id: 'ln1',
    title: 'Chill Study Beats',
    description: 'Focus-friendly tracks for late-night studying',
    coverUrl: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop',
    trackCount: 45,
    plays: 12500,
  },
  {
    id: 'ln2',
    title: 'Trending Now',
    description: 'What\'s hot this week in student music',
    coverUrl: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&h=300&fit=crop',
    trackCount: 50,
    plays: 45000,
  },
  {
    id: 'ln3',
    title: 'Workout Energy',
    description: 'High-energy tracks to pump you up',
    coverUrl: 'https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=300&h=300&fit=crop',
    trackCount: 38,
    plays: 28000,
  },
  {
    id: 'ln4',
    title: 'Peaceful Vibes',
    description: 'Relaxation and meditation sounds',
    coverUrl: 'https://images.unsplash.com/photo-1511379938547-c1f69b13d835?w=300&h=300&fit=crop',
    trackCount: 42,
    plays: 18500,
  },
  {
    id: 'ln5',
    title: 'Late Night Chill',
    description: 'Perfect for winding down',
    coverUrl: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=300&h=300&fit=crop',
    trackCount: 55,
    plays: 31200,
  },
  {
    id: 'ln6',
    title: 'Morning Motivation',
    description: 'Start your day right',
    coverUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop',
    trackCount: 36,
    plays: 22100,
  },
]

export const trendingPlaylists: Playlist[] = [
  {
    id: 'tr1',
    title: 'Viral Hits 2024',
    description: 'The most streamed tracks right now',
    coverUrl: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?w=300&h=300&fit=crop',
    trackCount: 60,
    plays: 250000,
  },
  {
    id: 'tr2',
    title: 'Campus Anthems',
    description: 'Student favorites across the globe',
    coverUrl: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop',
    trackCount: 48,
    plays: 85000,
  },
  {
    id: 'tr3',
    title: 'Party Starter',
    description: 'Get the party going',
    coverUrl: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&h=300&fit=crop',
    trackCount: 52,
    plays: 120000,
  },
  {
    id: 'tr4',
    title: 'Indie Rising',
    description: 'Tomorrow\'s stars today',
    coverUrl: 'https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=300&h=300&fit=crop',
    trackCount: 44,
    plays: 62000,
  },
  {
    id: 'tr5',
    title: 'Retro Replay',
    description: 'Throwback classics that still hit',
    coverUrl: 'https://images.unsplash.com/photo-1511379938547-c1f69b13d835?w=300&h=300&fit=crop',
    trackCount: 66,
    plays: 95000,
  },
  {
    id: 'tr6',
    title: 'Electronic Dreams',
    description: 'Synth-heavy and hypnotic',
    coverUrl: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=300&h=300&fit=crop',
    trackCount: 54,
    plays: 71000,
  },
]

export const chartTopPlaylists: Playlist[] = [
  {
    id: 'ch1',
    title: 'Global Top 50',
    description: 'Worldwide chart dominators',
    coverUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop',
    trackCount: 50,
    plays: 500000,
  },
  {
    id: 'ch2',
    title: 'Student Favorites',
    description: 'What students are listening to',
    coverUrl: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?w=300&h=300&fit=crop',
    trackCount: 50,
    plays: 350000,
  },
  {
    id: 'ch3',
    title: 'Rising Stars',
    description: 'Breaking through the charts',
    coverUrl: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop',
    trackCount: 50,
    plays: 280000,
  },
  {
    id: 'ch4',
    title: 'Genre Titans',
    description: 'Leaders in their category',
    coverUrl: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&h=300&fit=crop',
    trackCount: 50,
    plays: 420000,
  },
  {
    id: 'ch5',
    title: 'Discovery Mix',
    description: 'Find your next favorite',
    coverUrl: 'https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=300&h=300&fit=crop',
    trackCount: 50,
    plays: 180000,
  },
  {
    id: 'ch6',
    title: 'Collaboration Kings',
    description: 'Best feature tracks',
    coverUrl: 'https://images.unsplash.com/photo-1511379938547-c1f69b13d835?w=300&h=300&fit=crop',
    trackCount: 50,
    plays: 310000,
  },
]

export const recentlyPlayedPlaylists: Playlist[] = [
  {
    id: 'rp1',
    title: 'Summer 2023 Hits',
    description: 'Your recent favorite listen',
    coverUrl: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=300&h=300&fit=crop',
    trackCount: 42,
    plays: 5000,
  },
  {
    id: 'rp2',
    title: 'Focus Mode Active',
    description: 'Your study soundtrack',
    coverUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop',
    trackCount: 38,
    plays: 3200,
  },
  {
    id: 'rp3',
    title: 'Night Drive Essentials',
    description: 'Late night cruising',
    coverUrl: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?w=300&h=300&fit=crop',
    trackCount: 55,
    plays: 8900,
  },
  {
    id: 'rp4',
    title: 'Gym Session Energy',
    description: 'Your workout companion',
    coverUrl: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop',
    trackCount: 44,
    plays: 6200,
  },
  {
    id: 'rp5',
    title: 'Weekend Vibes',
    description: 'Relaxation and fun',
    coverUrl: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&h=300&fit=crop',
    trackCount: 48,
    plays: 4100,
  },
  {
    id: 'rp6',
    title: 'Lo-Fi Hip Hop',
    description: 'Chill beats for focus',
    coverUrl: 'https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=300&h=300&fit=crop',
    trackCount: 60,
    plays: 11500,
  },
]
