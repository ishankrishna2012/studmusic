'use client'

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
import { motion } from 'framer-motion'

export default function Home() {
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
    <main className="bg-dark-bg text-white min-h-screen pb-32">
      <Navigation />
      <Hero />

      {/* Main content sections */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '0px 0px -150px 0px' }}
        className="space-y-20 max-w-7xl mx-auto px-6 py-12"
      >
        {/* Listen Now */}
        <motion.div variants={sectionVariants}>
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
        <motion.div variants={sectionVariants}>
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
        <motion.div variants={sectionVariants}>
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
        <motion.div variants={sectionVariants}>
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
        <motion.div variants={sectionVariants}>
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
          className="mt-20 p-8 md:p-12 rounded-2xl bg-gradient-to-r from-accent-primary/20 to-accent-secondary/20 border border-dark-tertiary backdrop-blur-sm"
        >
          <h3 className="text-3xl font-bold mb-4">Ready to discover more?</h3>
          <p className="text-gray-300 mb-6 max-w-2xl">
            StudMusic connects you to millions of songs across multiple platforms. Stream, share, and build your ultimate music library with your friends.
          </p>
          <button className="px-8 py-3 bg-accent-primary text-black font-semibold rounded-full hover:scale-105 transition-all active:scale-95 shadow-lg shadow-accent-primary/50">
            Explore Now
          </button>
        </motion.div>
      </motion.div>

      {/* Music Player */}
      <MusicPlayer initialTrack={mockTracks[0]} />

      {/* Scroll hint - visible only on first load */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ delay: 5, duration: 1 }}
        className="fixed bottom-32 right-8 hidden lg:flex flex-col items-center gap-2 text-xs text-gray-400"
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
