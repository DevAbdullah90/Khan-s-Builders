'use client'

import React from 'react'
import { motion, Variants } from 'framer-motion'
import Container from '@/components/shared/Container'
import { urlFor } from '@/sanity/lib/image'
import GalleryHero from '@/components/sections/GalleryHero'

interface GalleryItem {
  _id: string
  title: string
  image: any
  gridColumns?: number
  gridRows?: number
  category?: string
}

interface GalleryClientProps {
  items: GalleryItem[]
}

export default function GalleryClient({ items }: GalleryClientProps) {
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
            {items.map((item) => {
              const colSpan = item.gridColumns === 2 ? 'md:col-span-2' : 'md:col-span-1'
              const rowSpan = item.gridRows === 2 ? 'md:row-span-2' : 'md:row-span-1'
              
              return (
                <motion.div
                  key={item._id}
                  variants={imageVariants}
                  whileHover={{ scale: 1.02 }}
                  className={`relative group rounded-2xl overflow-hidden shadow-2xl ${colSpan} ${rowSpan}`}
                >
                  <img
                    src={urlFor(item.image).url()}
                    alt={item.title || "Signature Project"}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
                    <span className="text-gold text-xs font-bold tracking-[0.3em] uppercase mb-2">
                       {item.category || 'Portfolio'}
                    </span>
                    <h3 className="text-white text-lg font-bold mb-1">{item.title || "Signature Project"}</h3>
                    <span className="text-white/70 text-sm italic">Khan's Builder Signature Excellence</span>
                  </div>
                  {/* Border Glow */}
                  <div className="absolute inset-0 border border-gold/0 group-hover:border-gold/30 rounded-2xl transition-colors duration-500 pointer-events-none" />
                </motion.div>
              )
            })}
          </motion.div>
        </Container>
      </section>
    </main>
  )
}
