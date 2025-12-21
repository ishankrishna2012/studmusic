'use client'

import Image from 'next/image'
import { Play, Pause, Volume2, SkipBack, SkipForward } from 'lucide-react'
import { useState } from 'react'

const mockPlaylists = [
  { id: 1, title: 'Study Beats', cover: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop', songs: 45 },
  { id: 2, title: 'Chill Vibes', cover: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop', songs: 32 },
  { id: 3, title: 'Focus Mode', cover: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=300&h=300&fit=crop', songs: 28 },
  { id: 4, title: 'Party Mix', cover: 'https://images.unsplash.com/photo-1511379938547-c1f69b13d835?w=300&h=300&fit=crop', songs: 60 },
  { id: 5, title: 'Workout', cover: 'https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=300&h=300&fit=crop', songs: 50 },
  { id: 6, title: 'Sleep', cover: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&h=300&fit=crop', songs: 40 },
]

const currentTrack = {
  title: 'Blinding Lights',
  artist: 'The Weeknd',
  cover: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop',
  duration: 200
}

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(35)

  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-black/80 backdrop-blur border-b border-gray-800 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold">🎵 StudMusic</h1>
          <div className="flex gap-4">
            <button className="px-4 py-2 text-sm bg-green-500 text-black font-bold rounded-full hover:bg-green-400">
              Sign In
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-12 px-4 bg-gradient-to-b from-green-900/20 to-black">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-4">Your Music, Your Way</h2>
          <p className="text-gray-400 text-xl mb-8">Stream playlists, discover new music, and enjoy offline</p>
          <button className="px-8 py-3 bg-green-500 text-black font-bold rounded-full text-lg hover:bg-green-400 transition">
            Get Started
          </button>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-8 pb-32">
        {/* Playlists Section */}
        <section className="mb-12">
          <h3 className="text-3xl font-bold mb-6">Popular Playlists</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockPlaylists.map(playlist => (
              <div key={playlist.id} className="bg-gray-900 rounded-lg overflow-hidden hover:bg-gray-800 transition cursor-pointer group">
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={playlist.cover}
                    alt={playlist.title}
                    fill
                    className="object-cover group-hover:scale-105 transition"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition flex items-center justify-center">
                    <button className="bg-green-500 text-black p-3 rounded-full opacity-0 group-hover:opacity-100 transition transform group-hover:scale-100 scale-75">
                      <Play size={24} fill="black" />
                    </button>
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="font-bold text-lg mb-1">{playlist.title}</h4>
                  <p className="text-gray-400 text-sm">{playlist.songs} songs</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Trending Section */}
        <section className="mb-12">
          <h3 className="text-3xl font-bold mb-6">Trending Now</h3>
          <div className="space-y-3">
            {[1, 2, 3, 4, 5].map(i => (
              <div key={i} className="flex items-center gap-4 p-3 bg-gray-900 rounded-lg hover:bg-gray-800 transition cursor-pointer group">
                <div className="w-12 h-12 bg-gray-700 rounded flex-shrink-0 flex items-center justify-center font-bold">
                  {i}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-bold">Track Title {i}</p>
                  <p className="text-gray-400 text-sm">Artist Name</p>
                </div>
                <button className="text-green-500 opacity-0 group-hover:opacity-100 transition">
                  <Play size={20} fill="currentColor" />
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Browse Section */}
        <section>
          <h3 className="text-3xl font-bold mb-6">Browse All</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {['Pop', 'Rock', 'Hip Hop', 'Jazz', 'Electronic', 'Classical', 'R&B', 'Country'].map(genre => (
              <button key={genre} className="p-4 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg font-bold text-lg hover:opacity-80 transition">
                {genre}
              </button>
            ))}
          </div>
        </section>
      </div>

      {/* Music Player - Fixed Bottom */}
      <div className="fixed bottom-0 left-0 right-0 bg-gray-950 border-t border-gray-800 z-40">
        {/* Progress Bar */}
        <div className="w-full h-1 bg-gray-800 cursor-pointer">
          <div className="h-full bg-green-500" style={{ width: `${progress}%` }}></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            {/* Track Info */}
            <div className="hidden sm:flex items-center gap-3 w-80 flex-shrink-0">
              <Image
                src={currentTrack.cover}
                alt={currentTrack.title}
                width={56}
                height={56}
                className="rounded"
              />
              <div className="min-w-0">
                <p className="font-bold text-sm truncate">{currentTrack.title}</p>
                <p className="text-gray-400 text-xs truncate">{currentTrack.artist}</p>
              </div>
            </div>

            {/* Controls */}
            <div className="flex-1 flex flex-col items-center gap-2">
              <div className="flex items-center gap-4">
                <button className="text-gray-400 hover:text-white">
                  <SkipBack size={20} />
                </button>
                <button 
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="bg-green-500 text-black p-2 rounded-full hover:bg-green-400"
                >
                  {isPlaying ? <Pause size={20} fill="black" /> : <Play size={20} fill="black" />}
                </button>
                <button className="text-gray-400 hover:text-white">
                  <SkipForward size={20} />
                </button>
              </div>
              <div className="text-xs text-gray-400 w-full text-center">
                1:24 / 3:20
              </div>
            </div>

            {/* Volume */}
            <div className="hidden sm:flex items-center gap-2 w-40 flex-shrink-0 justify-end">
              <Volume2 size={20} className="text-gray-400" />
              <input 
                type="range" 
                min="0" 
                max="100" 
                defaultValue="70" 
                className="w-24 accent-green-500"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
