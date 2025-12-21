'use client'

import { motion } from 'framer-motion'
import { Play } from 'lucide-react'
import Image from 'next/image'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
        duration: 0.5,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  }

  const albumVariants = {
    hidden: { opacity: 0, scale: 0.9, x: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <section className="relative min-h-[70vh] md:min-h-screen pt-20 md:pt-24 pb-8 md:pb-12 px-4 sm:px-6 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 -left-40 w-60 md:w-80 h-60 md:h-80 bg-accent-primary/20 rounded-full mix-blend-multiply filter blur-3xl animate-float"></div>
        <div className="absolute top-40 -right-40 w-60 md:w-80 h-60 md:h-80 bg-accent-secondary/20 rounded-full mix-blend-multiply filter blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute -bottom-8 left-20 w-60 md:w-80 h-60 md:h-80 bg-blue-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left content */}
          <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-8">
            {/* Headline */}
          <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight">
            StudMusic
            <span className="gradient-text"> — All Your Music, One Place</span>
          </motion.h1>

            {/* Subheadline */}
            <motion.p variants={itemVariants} className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-xl leading-relaxed">
              Stream from multiple free music sources. Built for students, by students. Your library is instantly available across all your devices.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex gap-4 flex-wrap">
              <button className="px-8 py-4 bg-accent-primary text-black font-bold rounded-full hover:scale-105 hover:shadow-lg hover:shadow-accent-primary/50 transition-all active:scale-95">
                <span className="flex items-center gap-2">
                  <Play className="w-5 h-5 fill-current" />
                  Start Listening
                </span>
              </button>
              <button className="px-8 py-4 border-2 border-accent-primary text-accent-primary font-bold rounded-full hover:bg-accent-primary hover:text-black transition-all active:scale-95">
                Browse Music
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div variants={itemVariants} className="grid grid-cols-3 gap-6 pt-6 border-t border-dark-tertiary">
              <div>
                <div className="text-3xl font-bold text-accent-primary">10M+</div>
                <div className="text-sm text-gray-400">Songs Available</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent-primary">500K+</div>
                <div className="text-sm text-gray-400">Active Users</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent-primary">100%</div>
                <div className="text-sm text-gray-400">Free Forever</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right side - Floating player card */}
          <motion.div variants={albumVariants} className="relative">
            {/* Floating cards stack */}
            <div className="relative h-96">
              {/* Back card */}
              <motion.div
                className="absolute top-12 left-12 w-64 h-80 bg-dark-secondary rounded-2xl border border-dark-tertiary transform -rotate-12"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <div className="w-full h-48 bg-dark-tertiary rounded-xl m-4 animate-pulse"></div>
              </motion.div>

              {/* Front card with music player */}
              <motion.div
                className="absolute top-0 right-0 w-72 bg-dark-secondary rounded-2xl border border-dark-tertiary overflow-hidden shadow-2xl"
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                {/* Album Art */}
                <div className="relative w-full h-56">
                  <Image
                    src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop"
                    alt="Album cover"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-secondary to-transparent"></div>
                </div>

                {/* Player content */}
                <div className="p-6 space-y-4">
                  {/* Track info */}
                  <div>
                    <h3 className="font-bold text-lg">Midnight Dreams</h3>
                    <p className="text-sm text-gray-400">Luna Echo</p>
                  </div>

                  {/* Progress bar */}
                  <div className="space-y-2">
                    <div className="w-full h-1 bg-dark-tertiary rounded-full overflow-hidden">
                      <div className="w-1/3 h-full bg-gradient-accent rounded-full"></div>
                    </div>
                    <div className="flex justify-between text-xs text-gray-400">
                      <span>1:24</span>
                      <span>4:03</span>
                    </div>
                  </div>

                  {/* Control buttons */}
                  <div className="flex items-center justify-center gap-4 pt-2">
                    <button className="text-gray-400 hover:text-white transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                      </svg>
                    </button>
                    <button className="w-12 h-12 bg-accent-primary text-black rounded-full flex items-center justify-center hover:scale-110 transition-transform active:scale-95 shadow-lg shadow-accent-primary/50">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                      </svg>
                    </button>
                    <button className="text-gray-400 hover:text-white transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M13.7 2.841A1.5 1.5 0 0016 4.11V15.89a1.5 1.5 0 01-2.3 1.269l-9.344-5.89a1.5 1.5 0 010-2.538l9.344-5.89z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
