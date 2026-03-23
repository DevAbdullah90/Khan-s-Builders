'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Container from '../shared/Container'
import { MapPin, Tag } from 'lucide-react'
import { urlFor } from '@/sanity/lib/image'

interface ProjectHeroProps {
  project: any
}

export default function ProjectHero({ project }: ProjectHeroProps) {
  const backgroundImage = project.images?.[0] 
    ? (typeof project.images[0] === 'string' ? project.images[0] : urlFor(project.images[0]).url())
    : '/images/hero-1.jpg'

  return (
    <section className="relative h-[65vh] min-h-[500px] w-full overflow-hidden bg-black text-white pt-20">
      {/* Background Image with Cinematic Overlays */}
      <div className="absolute inset-0 w-full h-full">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat w-full h-full opacity-60"
          style={{
            backgroundImage: `url(${backgroundImage})`,
          }}
        />

        {/* Cinematic Overlays */}
        <div className="absolute inset-0 bg-linear-to-b from-[#050b18]/90 via-transparent to-[#050b18]/90 w-full h-full" />
        <div className="absolute inset-0 bg-linear-to-r from-[#050b18]/90 via-[#050b18]/40 to-transparent w-full h-full" />
      </div>

      <Container className="relative z-10 h-full flex flex-col justify-end pb-16">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap gap-3 mb-6"
          >
            {project.status && (
              <span className="px-3 py-1 bg-gold text-black text-[10px] font-black uppercase tracking-widest rounded-sm">
                {project.status}
              </span>
            )}
            <span className="flex items-center gap-1.5 px-3 py-1 bg-blue-600/20 border border-blue-500/30 text-blue-400 text-[10px] font-black uppercase tracking-widest rounded-sm">
              <Tag className="w-3 h-3" />
              Mixed-Use
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-5xl md:text-7xl font-bold leading-tight mb-8"
          >
            {project.title}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex items-center gap-2 text-gray-300"
          >
            <MapPin className="w-5 h-5 text-gold" />
            <span className="text-lg md:text-xl font-medium">{project.location}</span>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
