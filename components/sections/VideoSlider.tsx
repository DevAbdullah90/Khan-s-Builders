'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Play, Pause, Maximize2 } from 'lucide-react'
import { cn } from '@/lib/utils'

interface VideoProject {
  id: string
  title: string
  category: string
  videoUrl: string
  thumbnailUrl: string
}

const projects: VideoProject[] = [
  {
    id: '1',
    title: 'Modern Villa Concept',
    category: 'Residential',
    videoUrl: '/realImages/vid-1.mp4',
    thumbnailUrl: '/realImages/b-1.jpeg',
  },
  {
    id: '2',
    title: 'Skyline Business Center',
    category: 'Commercial',
    videoUrl: '/realImages/vid-2.mp4',
    thumbnailUrl: '/realImages/b-2.jpeg',
  },
  {
    id: '3',
    title: 'Luxury Peninsula Estate',
    category: 'Luxury Living',
    videoUrl: '/realImages/vid-3.mp4',
    thumbnailUrl: '/realImages/b-3.jpeg',
  },
  {
    id: '4',
    title: 'Urban Loft Renovations',
    category: 'Interior Design',
    videoUrl: '/realImages/vid-4.mp4',
    thumbnailUrl: '/realImages/b-4.jpeg',
  },
  {
    id: '5',
    title: 'Eco-Friendly Resort',
    category: 'Hospitality',
    videoUrl: '/realImages/vid-5.mp4',
    thumbnailUrl: '/realImages/b-5.jpeg',
  },
  {
    id: '6',
    title: 'City Penthouse',
    category: 'Luxury',
    videoUrl: '/realImages/vid-6.mp4',
    thumbnailUrl: '/realImages/b-6.jpeg',
  },
  {
    id: '7',
    title: 'Garden Estates',
    category: 'Residential',
    videoUrl: '/realImages/vid-7.mp4',
    thumbnailUrl: '/realImages/b-7.jpeg',
  },
]

export default function VideoSlider() {
  const [activeId, setActiveId] = useState<string | null>(null)
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
    <section className="relative py-28 bg-white overflow-hidden text-slate-900 border-y border-slate-100">
      {/* Subtle Light Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-64 bg-gold/5 blur-[120px] rounded-full -translate-y-32" />

      <div className="container mx-auto px-4 mb-16 flex justify-between items-end relative z-10">
        <div className="space-y-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
          >
            <div className="h-0.5 w-12 bg-gold" />
            <span className="text-xs font-black uppercase tracking-[0.4em] text-gold/80">Featured Media</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black tracking-tighter text-slate-900"
          >
            Project <span className="text-gold italic font-serif">Motion</span>
          </motion.h2>
        </div>
        
        <div className="flex gap-4 mb-2">
          <button 
            onClick={() => scroll('left')}
            className="p-4 rounded-full border border-slate-200 bg-slate-50 text-slate-600 hover:bg-gold hover:text-white hover:border-gold transition-all duration-300 shadow-sm"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={() => scroll('right')}
            className="p-4 rounded-full border border-slate-200 bg-slate-50 text-slate-600 hover:bg-gold hover:text-white hover:border-gold transition-all duration-300 shadow-sm"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      <div 
        ref={scrollRef}
        className="flex gap-8 overflow-x-auto px-[5%] pb-16 scrollbar-hide snap-x snap-mandatory relative z-10"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {projects.map((project) => (
          <VideoCard 
            key={project.id} 
            project={project} 
            isActive={activeId === project.id}
            onMouseEnter={() => setActiveId(project.id)}
            onMouseLeave={() => setActiveId(null)}
          />
        ))}
      </div>
    </section>
  )
}

function VideoCard({ 
  project, 
  isActive, 
  onMouseEnter, 
  onMouseLeave 
}: { 
  project: VideoProject
  isActive: boolean
  onMouseEnter: () => void
  onMouseLeave: () => void
}) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      if (isActive) {
        videoRef.current.play().catch(() => {})
      } else {
        videoRef.current.pause()
        videoRef.current.currentTime = 0
      }
    }
  }, [isActive])

  return (
    <motion.div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={cn(
        "relative shrink-0 w-[320px] md:w-[500px] aspect-16/10 rounded-3xl overflow-hidden cursor-pointer snap-start group bg-slate-100 border border-gold/10 transition-all duration-500",
        isActive ? "ring-4 ring-gold/10 shadow-2xl shadow-gold/20 scale-[1.03]" : "shadow-xl shadow-slate-200/60"
      )}
      whileHover={{ y: -12 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      {/* Thumbnail / Static Image */}
      <img 
        src={project.thumbnailUrl} 
        alt={project.title}
        className={cn(
          "absolute inset-0 w-full h-full object-cover transition-all duration-700",
          isActive ? "opacity-0 scale-110" : "opacity-100 scale-100"
        )}
      />

      {/* Video Stream */}
      <video
        ref={videoRef}
        src={project.videoUrl}
        loop
        muted
        playsInline
        className={cn(
          "absolute inset-0 w-full h-full object-cover transition-opacity duration-700",
          isActive ? "opacity-100" : "opacity-0"
        )}
      />

      {/* Cinematic Treatment Overlay - Masks rawness, adds depth */}
      <div className={cn(
        "absolute inset-0 transition-all duration-500",
        isActive 
          ? "bg-black/10" // Lightens to reveal detail
          : "bg-black/40 backdrop-contrast-[1.1] backdrop-saturate-[1.1]" // Deepens to look premium
      )} />

      {/* Subtle Bottom Vignette */}
      <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
      
      {/* Play Indicator (Only shows when NOT active to suggest action) */}
      <div className={cn(
        "absolute inset-0 flex items-center justify-center transition-opacity duration-500",
        isActive ? "opacity-0" : "opacity-100"
      )}>
        <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
          <Play size={24} className="text-white fill-white ml-1" />
        </div>
      </div>
      
      {/* Hover Progress Bar - Minimal Gold Line */}
      <div className="absolute top-0 left-0 right-0 px-8 py-8 flex gap-1 z-10">
        <div 
          className={cn(
            "h-1 rounded-full bg-white/20 overflow-hidden flex-1 backdrop-blur-sm transition-opacity duration-300",
            isActive ? "opacity-100" : "opacity-0"
          )}
        >
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: isActive ? "100%" : 0 }}
            transition={{ duration: 15, ease: "linear" }}
            className="h-full bg-gold shadow-[0_0_15px_rgba(212,175,55,0.7)]"
          />
        </div>
      </div>
    </motion.div>
  )
}