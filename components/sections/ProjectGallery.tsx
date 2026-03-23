'use client'

import React, { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { urlFor } from '@/sanity/lib/image'
import Image from 'next/image'

interface ProjectGalleryProps {
  images: any[]
}

export default function ProjectGallery({ images }: ProjectGalleryProps) {
  if (!images || images.length === 0) return null

  // Ensure we have enough images for a smooth scroll by duplicating them
  const extendedImages = [...images, ...images, ...images]

  return (
    <div className="py-12 -mx-4 md:-mx-10 lg:-mx-12 overflow-hidden">
      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-4 px-4 md:px-10 lg:px-12 mb-2">
          <div className="h-px flex-1 bg-gray-100" />
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-300">Project Visuals</span>
          <div className="h-px flex-1 bg-gray-100" />
        </div>

        {/* Continuous Horizontal Scroll */}
        <div className="relative flex overflow-hidden">
          <motion.div 
            className="flex gap-4"
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {[...images, ...images].map((image, idx) => {
              const imageUrl = typeof image === 'string' ? image : urlFor(image).url()
              return (
                <div
                  key={idx}
                  className="relative w-[350px] md:w-[600px] aspect-video rounded-2xl overflow-hidden shadow-uxl group cursor-pointer shrink-0"
                >
                  <Image 
                    src={imageUrl} 
                    alt={`Project Gallery ${idx + 1}`} 
                    fill 
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white text-[10px] font-black uppercase tracking-widest bg-gold/80 px-4 py-2 rounded-full shadow-lg">View Details</span>
                  </div>
                </div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </div>
  )
}
