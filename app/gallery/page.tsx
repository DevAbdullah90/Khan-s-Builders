'use client'

import React from 'react'
import { motion, Variants } from 'framer-motion'
import Link from 'next/link'
import Container from '@/components/shared/Container'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import GalleryHero from '@/components/sections/GalleryHero'

const galleryImages = [
  {
    src: '/realImages/b-1.jpeg',
    alt: 'Luxury Modern Villa',
    className: 'md:col-span-2 md:row-span-2',
    id: 0
  },
  {
    src: '/realImages/b-2.jpeg',
    alt: 'Contemporary Living Space',
    className: 'md:col-span-1 md:row-span-1',
    id: 1
  },
  {
    src: '/realImages/b-3.jpeg',
    alt: 'Minimalist Kitchen Design',
    className: 'md:col-span-1 md:row-span-2',
    id: 2
  },
  {
    src: '/realImages/b-4.jpeg',
    alt: 'Infinity Pool View',
    className: 'md:col-span-1 md:row-span-1',
    id: 3
  },
  {
    src: '/realImages/b-5.jpeg',
    alt: 'Master Suite Luxury',
    className: 'md:col-span-2 md:row-span-1',
    id: 4
  },
  {
    src: '/realImages/b-6.jpeg',
    alt: 'Spa-like Bathroom',
    className: 'md:col-span-1 md:row-span-1',
    id: 5
  },
  {
    src: '/realImages/b-7.jpeg',
    alt: 'Modern Home Office',
    className: 'md:col-span-1 md:row-span-1',
    id: 6
  },
  {
    src: '/realImages/b-8.jpeg',
    alt: 'Penthouse View',
    className: 'md:col-span-1 md:row-span-1',
    id: 7
  },
  {
    src: '/realImages/b-1.jpeg',
    alt: 'Architectural Excellence',
    className: 'md:col-span-1 md:row-span-1',
    id: 8
  },
  {
    src: '/realImages/b-2.jpeg',
    alt: 'Grand Entrance',
    className: 'md:col-span-1 md:row-span-1',
    id: 9
  }
]

export default function GalleryPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  }

  const imageVariants: Variants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 80,
        damping: 15
      }
    }
  }

  return (
    <main className="min-h-screen">      
      <GalleryHero />
      
      <section className="py-24 relative">
        <Container>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[250px]"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {galleryImages.map((image) => (
              <motion.div
                key={image.id}
                variants={imageVariants}
                whileHover={{ scale: 1.02 }}
                className={`relative group rounded-2xl overflow-hidden shadow-2xl ${image.className}`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
                  <span className="text-gold text-xs font-bold tracking-[0.3em] uppercase mb-2">{image.alt}</span>
                  <span className="text-white text-sm opacity-80">Khan's Builder Signature Excellence</span>
                </div>
                {/* Border Glow */}
                <div className="absolute inset-0 border border-gold/0 group-hover:border-gold/30 rounded-2xl transition-colors duration-500 pointer-events-none" />
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>
    </main>
  )
}
