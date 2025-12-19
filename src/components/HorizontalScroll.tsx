'use client'

import { ReactNode } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useRef } from 'react'
import { motion } from 'framer-motion'

interface HorizontalScrollProps {
  title: string
  description?: string
  children: ReactNode
}

export default function HorizontalScroll({ title, description, children }: HorizontalScrollProps) {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 400
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      })
    }
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true, margin: '0px 0px -100px 0px' }}
      className="space-y-6"
    >
      {/* Header */}
      <div className="space-y-2">
        <h2 className="text-2xl md:text-3xl font-bold">{title}</h2>
        {description && <p className="text-gray-400">{description}</p>}
      </div>

      {/* Scroll container */}
      <div className="relative group">
        {/* Scroll buttons */}
        <motion.button
          whileHover={{ scale: 1.08, x: -2 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => scroll('left')}
          className="absolute -left-6 top-1/2 -translate-y-1/2 z-20 hidden group-hover:flex items-center justify-center w-10 h-10 bg-accent-primary/90 hover:bg-accent-primary text-black rounded-full transition-all shadow-lg opacity-0 group-hover:opacity-100"
        >
          <ChevronLeft className="w-5 h-5" />
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.08, x: 2 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => scroll('right')}
          className="absolute -right-6 top-1/2 -translate-y-1/2 z-20 hidden group-hover:flex items-center justify-center w-10 h-10 bg-accent-primary/90 hover:bg-accent-primary text-black rounded-full transition-all shadow-lg opacity-0 group-hover:opacity-100"
        >
          <ChevronRight className="w-5 h-5" />
        </motion.button>

        {/* Scrollable content */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 scroll-smooth-x"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          {children}
        </div>
      </div>
    </motion.section>
  )
}
