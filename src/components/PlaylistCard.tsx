'use client'

import Image from 'next/image'
import { Play, MoreHorizontal } from 'lucide-react'
import { motion } from 'framer-motion'
import type { Playlist } from '@/lib/mockData'

interface PlaylistCardProps {
  playlist: Playlist
  index?: number
}

export default function PlaylistCard({ playlist, index = 0 }: PlaylistCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      viewport={{ once: true }}
      className="card-hover group relative flex-shrink-0 w-48 bg-dark-secondary rounded-xl overflow-hidden border border-dark-tertiary/50 hover:border-accent-primary/50 transition-all"
    >
      {/* Album art */}
      <div className="relative w-full aspect-square overflow-hidden">
        <Image
          src={playlist.coverUrl}
          alt={playlist.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-300"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark-secondary via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

        {/* Play button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="absolute bottom-4 right-4 w-12 h-12 bg-accent-primary text-black rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all"
        >
          <Play className="w-5 h-5 fill-current ml-0.5" />
        </motion.button>
      </div>

      {/* Card content */}
      <div className="p-4 space-y-3">
        <div className="space-y-1">
          <h3 className="font-semibold text-sm line-clamp-2 group-hover:text-accent-primary transition-colors">
            {playlist.title}
          </h3>
          <p className="text-xs text-gray-400 line-clamp-2">{playlist.description}</p>
        </div>

        {/* Stats */}
        <div className="flex items-center justify-between pt-2 border-t border-dark-tertiary text-xs text-gray-400">
          <span>{playlist.trackCount} songs</span>
          <span>{(playlist.plays / 1000).toFixed(0)}K plays</span>
        </div>
      </div>

      {/* Menu button */}
      <button className="absolute top-2 right-2 p-2 bg-dark-secondary/80 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
        <MoreHorizontal className="w-4 h-4 text-gray-400" />
      </button>
    </motion.div>
  )
}
