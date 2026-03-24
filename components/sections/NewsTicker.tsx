'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Megaphone } from 'lucide-react'

interface Announcement {
  text: string
  link?: string
}

interface NewsTickerProps {
  announcements: Announcement[]
}

export default function NewsTicker({ announcements }: NewsTickerProps) {
  if (!announcements || announcements.length === 0) return null

  // Duplicate items to ensure smooth infinite scroll
  const displayItems = [...announcements, ...announcements, ...announcements]

  return (
    <div className="w-full bg-gold/90 backdrop-blur-md py-3 overflow-hidden border-y border-white/20 select-none">
      <div className="max-w-[1440px] mx-auto px-4 flex items-center">
        {/* Label */}
        <div className="flex items-center gap-2 bg-black text-white px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest z-10 shrink-0 shadow-lg mr-6">
          <Megaphone className="w-3.4 h-3.4" />
          <span>Updates</span>
        </div>

        {/* Marquee Container */}
        <div className="relative flex overflow-hidden">
          <motion.div
            animate={{
              x: [0, -1035], // Adjust based on content width approximately
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30, // Adjust speed
                ease: "linear",
              },
            }}
            className="flex gap-12 whitespace-nowrap items-center"
          >
            {displayItems.map((item, idx) => (
              <div key={idx} className="flex items-center gap-4">
                {item.link ? (
                  <Link 
                    href={item.link} 
                    className="text-black font-bold text-sm hover:underline flex items-center gap-2"
                  >
                    <span>{item.text}</span>
                  </Link>
                ) : (
                  <span className="text-black font-bold text-sm">{item.text}</span>
                )}
                {/* Separator */}
                <span className="w-2 h-2 rounded-full bg-black/20" />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  )
}
