'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Play, Pause, SkipBack, SkipForward, Volume2, Heart } from 'lucide-react'
import { motion } from 'framer-motion'
import type { Track } from '@/lib/mockData'

interface MusicPlayerProps {
  initialTrack?: Track
}

export default function MusicPlayer({ initialTrack }: MusicPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [volume, setVolume] = useState(70)
  const [currentTrack, setCurrentTrack] = useState(initialTrack)

  // Simulate progress update
  useEffect(() => {
    if (!isPlaying) return
    const interval = setInterval(() => {
      setProgress((p) => (p >= 100 ? 0 : p + 1))
    }, 300)
    return () => clearInterval(interval)
  }, [isPlaying])

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`
  }

  if (!currentTrack) return null

  const currentTime = (progress / 100) * currentTrack.duration
  const remainingTime = currentTrack.duration - currentTime

  return (
    <motion.footer
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.4 }}
      className="fixed bottom-0 left-0 right-0 bg-dark-secondary/95 backdrop-blur-lg border-t border-dark-tertiary z-30"
    >
      {/* Progress bar */}
      <div className="w-full h-0.5 sm:h-1 bg-dark-tertiary cursor-pointer group">
        <motion.div
          className="h-full bg-gradient-accent"
          initial={{ width: '0%' }}
          animate={{ width: `${progress}%` }}
          transition={{ type: 'tween', duration: 0.1 }}
          onMouseEnter={() => setIsPlaying(false)}
        />
      </div>

      <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 py-2 sm:py-3 flex items-center justify-between gap-2 sm:gap-4">
        {/* Left - Track info */}
        <div className="hidden sm:flex items-center gap-2 sm:gap-4 min-w-0 flex-1">
          <div className="relative w-12 sm:w-14 h-12 sm:h-14 rounded-lg overflow-hidden flex-shrink-0 shadow-lg">
            <Image
              src={currentTrack.coverUrl}
              alt={currentTrack.title}
              fill
              className="object-cover"
            />
          </div>
          <div className="min-w-0 hidden sm:block">
            <h4 className="font-semibold text-xs sm:text-sm truncate">{currentTrack.title}</h4>
            <p className="text-xs text-gray-400 truncate">{currentTrack.artist}</p>
          </div>
        </div>

        {/* Center - Player controls */}
        <div className="flex flex-col items-center gap-1 sm:gap-2 flex-1 min-w-0">
          <div className="flex items-center gap-4">
            <button className="text-gray-400 hover:text-white transition-colors">
              <SkipBack className="w-5 h-5" />
            </button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              onClick={handlePlayPause}
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                isPlaying
                  ? 'bg-accent-primary text-black shadow-lg shadow-accent-primary/50'
                  : 'bg-dark-tertiary text-white hover:bg-opacity-80'
              }`}
            >
              {isPlaying ? (
                <Pause className="w-5 h-5" />
              ) : (
                <Play className="w-5 h-5 ml-0.5" />
              )}
            </motion.button>

            <button className="text-gray-400 hover:text-white transition-colors">
              <SkipForward className="w-5 h-5" />
            </button>
          </div>

          {/* Time display and progress - visible on all screens */}
          <div className="hidden sm:flex w-full max-w-xs items-center gap-3">
            <span className="text-xs text-gray-400 w-8 text-right">{formatTime(currentTime)}</span>
            <div className="flex-1 h-1 bg-dark-tertiary rounded-full overflow-hidden cursor-pointer group">
              <motion.div
                className="h-full bg-gradient-accent opacity-0 group-hover:opacity-100 transition-opacity"
                animate={{ width: `${progress}%` }}
                transition={{ type: 'tween', duration: 0.1 }}
              />
            </div>
            <span className="text-xs text-gray-400 w-8">-{formatTime(remainingTime)}</span>
          </div>
        </div>

        {/* Right - Volume and extras */}
        <div className="hidden sm:flex items-center gap-4 flex-1 justify-end">
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Heart className={`w-5 h-5 ${isPlaying ? 'text-accent-secondary' : ''}`} />
          </motion.button>

          <div className="flex items-center gap-2">
            <Volume2 className="w-4 h-4 text-gray-400" />
            <input
              type="range"
              min="0"
              max="100"
              value={volume}
              onChange={(e) => setVolume(Number(e.target.value))}
              className="w-16 h-1 bg-dark-tertiary rounded-full cursor-pointer accent-accent-primary"
            />
          </div>
        </div>

        {/* Mobile - Simple controls */}
        <div className="sm:hidden flex items-center gap-3">
          <button className="text-gray-400 hover:text-white">
            <Heart className="w-4 h-4" />
          </button>
        </div>
      </div>
    </motion.footer>
  )
}
