'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { urlFor } from '@/sanity/lib/image'
import { Project } from '@/types'

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const firstImage = project.images?.[0]
  let imageUrl = '/placeholder-project.jpg'

  if (typeof firstImage === 'string') {
    imageUrl = firstImage
  } else if (firstImage && typeof firstImage === 'object' && 'asset' in firstImage) {
    imageUrl = urlFor(firstImage).url()
  }

  return (
    <motion.div
      whileHover="hover"
      className="relative h-[450px] w-full cursor-pointer overflow-hidden rounded-2xl shadow-xl group"
    >
      {/* Background Image with Hover Effect */}
      <motion.div
        className="absolute inset-0 h-full w-full"
        variants={{
          hover: { scale: 1.1 },
        }}
        transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
      >
        <Image
          src={imageUrl}
          alt={project.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
      </motion.div>
      
      {/* Cinematic Overlays */}
      <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
      <div className="absolute inset-0 bg-linear-to-b from-black/20 via-transparent to-transparent opacity-40" />

      {/* Content Container */}
      <div className="relative flex h-full flex-col justify-end p-8 text-white z-10">
        <motion.div
          initial={false}
          className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500"
        >
          <div className="mb-3">
            <span className="text-[10px] uppercase tracking-[0.2em] text-gold font-bold bg-gold/10 px-2 py-1 rounded">
              {project.status}
            </span>
          </div>
          
          <h3 className="text-2xl font-bold leading-tight mb-3 group-hover:text-gold transition-colors duration-300">
            {project.title}
          </h3>
          
          <div className="w-12 h-1 bg-gold mb-4 group-hover:w-full transition-all duration-500 rounded-full" />
          
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            variants={{
              hover: { opacity: 1, height: "auto" },
            }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-sm text-gray-300 leading-relaxed line-clamp-3">
              {project.subheading || project.description.slice(0, 150) + '...'}
            </p>
          </motion.div>
          
          <Link 
            href={`/projects/${project.slug.current}`} 
            className="inline-flex items-center text-sm font-bold tracking-wider text-white hover:text-gold transition-colors group/link"
          >
            EXPLORE PROJECT 
            <span className="ml-2 group-hover/link:translate-x-1 transition-transform">→</span>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  )
}
