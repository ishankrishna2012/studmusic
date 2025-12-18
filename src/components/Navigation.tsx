'use client'

import { Music } from 'lucide-react'
import { useState } from 'react'

export default function Navigation() {
  const [activeNav, setActiveNav] = useState('listen')

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-dark-bg/80 backdrop-blur-lg border-b border-dark-tertiary">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="w-10 h-10 bg-gradient-accent rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
            <Music className="w-6 h-6" />
          </div>
          <span className="text-xl font-bold tracking-tight group-hover:text-opacity-90 transition-all">
            StudMusic
          </span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          {[
            { id: 'listen', label: 'Listen Now' },
            { id: 'browse', label: 'Browse' },
            { id: 'download', label: 'Downloaded' },
            { id: 'library', label: 'Library' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveNav(item.id)}
              className="relative group text-sm font-medium text-gray-300 hover:text-white transition-colors"
            >
              {item.label}
              <span
                className={`absolute bottom-0 left-0 w-full h-0.5 bg-accent-primary transform origin-left transition-transform duration-300 ${
                  activeNav === item.id ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`}
              />
            </button>
          ))}
        </div>

        {/* Right side actions */}
        <div className="flex items-center gap-4">
          <button className="hidden sm:inline-flex px-6 py-2 bg-accent-primary text-black font-semibold rounded-full hover:bg-opacity-90 transition-all hover:scale-105 active:scale-95">
            Sign In
          </button>
          <button className="md:hidden text-gray-400 hover:text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  )
}
