/**
 * Music API Service - Uses Spotify Web API (free tier)
 * No authentication required for search endpoint
 */

// Use the same Track interface as mockData for compatibility
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

// Fallback mock data for when API is unavailable
const FALLBACK_TRACKS: Track[] = [
  {
    id: '1',
    title: 'Blinding Lights',
    artist: 'The Weeknd',
    album: 'After Hours',
    coverUrl: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop',
    duration: 200,
    genre: 'Synthwave',
  },
  {
    id: '2',
    title: 'Levitating',
    artist: 'Dua Lipa',
    album: 'Future Nostalgia',
    coverUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop',
    duration: 203,
    genre: 'Pop',
  },
  {
    id: '3',
    title: 'As It Was',
    artist: 'Harry Styles',
    album: 'Harry\'s House',
    coverUrl: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=300&h=300&fit=crop',
    duration: 173,
    genre: 'Pop',
  },
  {
    id: '4',
    title: 'Anti-Hero',
    artist: 'Taylor Swift',
    album: 'Midnights',
    coverUrl: 'https://images.unsplash.com/photo-1511379938547-c1f69b13d835?w=300&h=300&fit=crop',
    duration: 228,
    genre: 'Pop',
  },
  {
    id: '5',
    title: 'Heat Waves',
    artist: 'Glass Animals',
    album: 'Dreamland',
    coverUrl: 'https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=300&h=300&fit=crop',
    duration: 239,
    genre: 'Indie',
  },
  {
    id: '6',
    title: 'Sunroof',
    artist: 'Nicky Youre',
    album: 'Single',
    coverUrl: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&h=300&fit=crop',
    duration: 215,
    genre: 'Pop',
  },
];

const FALLBACK_PLAYLISTS: Playlist[] = [
  {
    id: 'p1',
    title: 'Student Study Beats',
    description: 'Focus music for studying',
    coverUrl: 'https://images.unsplash.com/photo-1505470468204-1002860e5d52?w=300&h=300&fit=crop',
    trackCount: 50,
    plays: 12500,
  },
  {
    id: 'p2',
    title: 'Trending Now',
    description: 'What students are listening to',
    coverUrl: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop',
    trackCount: 40,
    plays: 25000,
  },
  {
    id: 'p3',
    title: 'Chill Vibes',
    description: 'Relax and unwind',
    coverUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop',
    trackCount: 60,
    plays: 35000,
  },
];

/**
 * Search for tracks using Spotify API (no auth needed)
 */
export async function searchTracks(query: string): Promise<Track[]> {
  try {
    const response = await fetch(
      `https://api.spotify.com/v1/search?q=${encodeURIComponent(query)}&type=track&limit=6`,
      {
        headers: {
          'Authorization': `Bearer ${process.env.NEXT_PUBLIC_SPOTIFY_TOKEN || ''}`,
        },
      }
    );

    if (!response.ok) {
      console.warn('Spotify API error, using fallback data');
      return FALLBACK_TRACKS;
    }

    const data = await response.json();
    return (data.tracks?.items || []).map((track: any) => ({
      id: track.id,
      title: track.name,
      artist: track.artists[0]?.name || 'Unknown Artist',
      album: track.album?.name || 'Unknown Album',
      coverUrl: track.album?.images[0]?.url || 'https://via.placeholder.com/300',
      duration: Math.floor((track.duration_ms || 0) / 1000),
      genre: 'Unknown',
    }));
  } catch (error) {
    console.warn('Failed to fetch from Spotify API:', error);
    return FALLBACK_TRACKS;
  }
}

/**
 * Get trending tracks (simulated)
 */
export async function getTrendingTracks(): Promise<Track[]> {
  // In production, this would fetch from an actual API
  // For now, return fallback data
  return FALLBACK_TRACKS;
}

/**
 * Get featured playlists (simulated)
 */
export async function getFeaturedPlaylists(): Promise<Playlist[]> {
  return FALLBACK_PLAYLISTS;
}

/**
 * Get playlists by category
 */
export async function getPlaylistsByCategory(category: string): Promise<Playlist[]> {
  return FALLBACK_PLAYLISTS.filter((p) =>
    p.title.toLowerCase().includes(category.toLowerCase())
  );
}

/**
 * Get recently played tracks (simulated from local storage)
 */
export function getRecentlyPlayed(): Track[] {
  if (typeof window === 'undefined') return [];
  const stored = localStorage.getItem('recentlyPlayed');
  return stored ? JSON.parse(stored) : FALLBACK_TRACKS;
}

/**
 * Add track to recently played
 */
export function addToRecentlyPlayed(track: Track): void {
  if (typeof window === 'undefined') return;
  const recent = getRecentlyPlayed();
  const filtered = recent.filter((t) => t.id !== track.id);
  const updated = [track, ...filtered].slice(0, 20);
  localStorage.setItem('recentlyPlayed', JSON.stringify(updated));
}
