## API Integration Guide

This document provides guidance on integrating real music APIs into StudMusic.

### Supported APIs

#### 1. JioSaavn API
**Repository**: https://github.com/sumitkolhe/jiosaavn-api

**Installation**:
```bash
npm install jiosaavn-api
```

**Example Usage**:
```typescript
// src/lib/api/jiosaavn.ts
import JioSaavn from 'jiosaavn-api'

const jioSaavn = new JioSaavn()

export async function fetchTopCharts() {
  try {
    const topCharts = await jioSaavn.getTopCharts()
    return topCharts
  } catch (error) {
    console.error('JioSaavn API Error:', error)
    return []
  }
}

export async function searchTracks(query: string) {
  try {
    const results = await jioSaavn.search(query)
    return results
  } catch (error) {
    console.error('Search error:', error)
    return []
  }
}
```

#### 2. YouTube Music (Unofficial API)
**Repository**: https://github.com/sigma67/ytmusicapi

**Alternative**: https://github.com/sumitkolhe/jiosaavn-api

**Note**: Requires browser automation, use server-side only.

#### 3. Spotify Web API
**Documentation**: https://developer.spotify.com/documentation/web-api

**Setup**:
1. Register app at https://developer.spotify.com/dashboard
2. Get Client ID and Secret
3. Add to `.env.local`:
```
SPOTIFY_CLIENT_ID=your_client_id
SPOTIFY_CLIENT_SECRET=your_client_secret
```

#### 4. Last.fm API
**Documentation**: https://www.last.fm/api

**Benefits**:
- Free API access
- Detailed track metadata
- User analytics

### Implementation Steps

1. **Choose Your API** - Start with JioSaavn (easiest to integrate)

2. **Create API Module**:
```typescript
// src/lib/api/music.ts
export interface Track {
  id: string
  title: string
  artist: string
  album: string
  coverUrl: string
  duration: number
}

export async function fetchTracks(query: string): Promise<Track[]> {
  // Implementation here
  return []
}
```

3. **Update Mock Data**:
```typescript
// src/lib/mockData.ts
import { fetchTracks } from './api/music'

export async function getListenNowPlaylists() {
  // Call real API instead
  return await fetchTracks('listen now')
}
```

4. **Update Components to Use Async Data**:
```typescript
// Convert components to use async data fetching
import { fetchTracks } from '@/lib/api/music'

export default async function HomePage() {
  const tracks = await fetchTracks('featured')
  // Render with real data
}
```

### Error Handling

Always implement proper error handling:

```typescript
export async function safeFetchTracks(query: string) {
  try {
    const tracks = await fetchTracks(query)
    return tracks || []
  } catch (error) {
    console.error('Failed to fetch tracks:', error)
    // Return mock data as fallback
    return mockTracks
  }
}
```

### Rate Limiting

Most free APIs have rate limits. Implement caching:

```typescript
// src/lib/cache.ts
const cache = new Map<string, { data: any; timestamp: number }>()
const CACHE_DURATION = 5 * 60 * 1000 // 5 minutes

export function getCached<T>(key: string): T | null {
  const cached = cache.get(key)
  if (!cached) return null
  
  if (Date.now() - cached.timestamp > CACHE_DURATION) {
    cache.delete(key)
    return null
  }
  
  return cached.data
}

export function setCached<T>(key: string, data: T): void {
  cache.set(key, { data, timestamp: Date.now() })
}
```

### Testing APIs

Use tools like:
- **Postman** - API testing
- **Thunder Client** - VS Code extension
- **curl** - Command line

Example:
```bash
curl -X GET "https://api.jiosaavn.com/search/songs?query=hello"
```

### Production Considerations

1. **Use Server-Side Calls** - Hide API keys, call from `/app/api/routes`
2. **Implement Rate Limiting** - Respect API limits
3. **Cache Results** - Reduce API calls
4. **Handle Errors Gracefully** - Always have fallback data
5. **Monitor Usage** - Track API consumption

### Resources

- JioSaavn API: https://github.com/sumitkolhe/jiosaavn-api
- YouTube Music API: https://github.com/sigma67/ytmusicapi
- Spotify API: https://developer.spotify.com
- Last.fm API: https://www.last.fm/api
- NextAuth.js: https://next-auth.js.org (for OAuth)

---

For questions or issues with API integration, check the respective API documentation or create an issue in the StudMusic repository.
