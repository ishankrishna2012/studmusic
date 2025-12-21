'use client'

import { useState, useEffect } from 'react'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import HorizontalScroll from '@/components/HorizontalScroll'
import PlaylistCard from '@/components/PlaylistCard'
import MusicPlayer from '@/components/MusicPlayer'
import {
  listenNowPlaylists,
  trendingPlaylists,
  chartTopPlaylists,
  recentlyPlayedPlaylists,
  mockTracks,
} from '@/lib/mockData'
import { 
  getTrendingTracks, 
  getFeaturedPlaylists,
  getRecentlyPlayed,
  addToRecentlyPlayed,
  type Track,
  type Playlist 
} from '@/lib/musicApi'
import { motion } from 'framer-motion'

export default function Home() {
  const [tracks, setTracks] = useState<Track[]>(mockTracks)
  const [playlists, setPlaylists] = useState<Playlist[]>(listenNowPlaylists)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    // Load data on mount
    const loadData = async () => {
      try {
        // Don't show loading - use mock data immediately
        const [trendingData, featuredData] = await Promise.all([
          getTrendingTracks(),
          getFeaturedPlaylists(),
        ])
        
        if (trendingData.length > 0) {
          setTracks(trendingData)
        }
        if (featuredData.length > 0) {
          setPlaylists(featuredData)
        }
      } catch (error) {
        console.warn('Failed to load API data, using fallback:', error)
        // Keep using mock data if API fails
      }
    }

    loadData()
  }, [])

  const handlePlayTrack = (track: Track) => {
    addToRecentlyPlayed(track)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  }

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.4 },
    },
  }

  return (
    <main className="bg-dark-bg text-white min-h-screen pb-40 overflow-x-hidden">
      {/* Navigation - Fixed at top */}
      <div className="sticky top-0 z-50">
        <Navigation />
      </div>

      {/* Hero Section */}
      <div className="relative w-full">
        <Hero />
      </div>

      {/* Main content sections */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '0px 0px -150px 0px' }}
        className="space-y-16 md:space-y-20 w-full px-4 sm:px-6 py-12 md:py-16"
      >
        <div className="max-w-7xl mx-auto w-full space-y-16 md:space-y-20">
            {/* Listen Now */}
            <motion.div variants={sectionVariants} className="w-full">
              <HorizontalScroll
                title="Listen Now"
                description="Your personalized playlist picks to get started"
              >
                {listenNowPlaylists.map((playlist, idx) => (
                  <PlaylistCard key={playlist.id} playlist={playlist} index={idx} />
                ))}
              </HorizontalScroll>
            </motion.div>

            {/* Trending Now */}
            <motion.div variants={sectionVariants} className="w-full">
              <HorizontalScroll
                title="Trending Now"
                description="What's hot this week in the student community"
              >
                {trendingPlaylists.map((playlist, idx) => (
                  <PlaylistCard key={playlist.id} playlist={playlist} index={idx} />
                ))}
              </HorizontalScroll>
            </motion.div>

            {/* Top 20 Charts */}
            <motion.div variants={sectionVariants} className="w-full">
              <HorizontalScroll
                title="Top 20 Chart"
                description="The most streamed tracks and playlists globally"
              >
                {chartTopPlaylists.map((playlist, idx) => (
                  <PlaylistCard key={playlist.id} playlist={playlist} index={idx} />
                ))}
              </HorizontalScroll>
            </motion.div>

            {/* Student Picks */}
            <motion.div variants={sectionVariants} className="w-full">
              <HorizontalScroll
                title="Student Picks"
                description="Curated by and for the student community"
              >
                {[...listenNowPlaylists].reverse().map((playlist, idx) => (
                  <PlaylistCard key={`sp-${playlist.id}`} playlist={playlist} index={idx} />
                ))}
              </HorizontalScroll>
            </motion.div>

            {/* Recently Played */}
            <motion.div variants={sectionVariants} className="w-full">
              <HorizontalScroll
                title="Recently Played"
                description="Continue where you left off"
              >
                {recentlyPlayedPlaylists.map((playlist, idx) => (
                  <PlaylistCard key={playlist.id} playlist={playlist} index={idx} />
                ))}
              </HorizontalScroll>
            </motion.div>

            {/* Footer promo section */}
            <motion.div
              variants={sectionVariants}
              className="mt-12 md:mt-20 p-6 md:p-12 rounded-2xl bg-gradient-to-r from-accent-primary/20 to-accent-secondary/20 border border-dark-tertiary backdrop-blur-sm w-full"
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to discover more?</h3>
              <p className="text-gray-300 mb-6 max-w-2xl text-sm md:text-base">
                StudMusic connects you to millions of songs across multiple platforms. Stream, share, and build your ultimate music library with your friends.
              </p>
              <button className="px-6 md:px-8 py-2 md:py-3 bg-accent-primary text-black font-semibold rounded-full hover:scale-105 active:scale-95 transition-all shadow-lg shadow-accent-primary/50 text-sm md:text-base">
                Explore Now
              </button>
            </motion.div>
          </div>
        </motion.div>

      {/* Music Player - Fixed at bottom */}
      <div className="fixed bottom-0 left-0 right-0 z-40">
        <MusicPlayer initialTrack={tracks[0] || mockTracks[0]} />
      </div>

      {/* Scroll hint - visible only on first load */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ delay: 5, duration: 1 }}
        className="fixed bottom-40 right-4 md:right-8 hidden lg:flex flex-col items-center gap-2 text-xs text-gray-400"
      >
        <span>Scroll to explore</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>
    </main>
  )
}
