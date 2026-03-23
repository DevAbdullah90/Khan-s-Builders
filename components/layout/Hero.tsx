'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Container from '../shared/Container'
import { Button } from '@/components/ui/button'
import { ChevronDown, ArrowRight } from 'lucide-react'

const BANNERS = [
  {
    id: 1,
    image: '/hero-1.jpg', // Placeholder, using generated images would be better but I'll use local paths for now
    title: 'Building a Higher Standard of',
    highlighted: 'Living and Business',
    subtitle: 'Premium Residential and Commercial Real Estate Developers Delivering Quality, Trust and Innovation'
  },
  {
    id: 2,
    image: '/hero-2.jpg',
    title: 'Excellence in Every',
    highlighted: 'Structure and Design',
    subtitle: 'From concept to completion, we deliver unparalleled architectural mastery.'
  }
]

export default function Hero() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % BANNERS.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative h-dvh w-full overflow-hidden bg-black text-white">
      {/* Background Slider */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
          className="absolute inset-0 w-full h-full"
        >
          {/* Layer 2: Sharp Contained image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat w-full h-full"
            style={{
              backgroundImage: `url(${BANNERS[current].image})`,
            }}
          />

          {/* Layer 3: Gold Glow Gradient */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(212,175,55,0.1),transparent_50%)]" />

          {/* Layer 4: Cinematic Vignette (Subtle edge shadow) */}
          <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_60%,rgba(0,0,0,0.5)_100%)] pointer-events-none" />

          {/* Layer 5: Navy Blue Industrial Overlays (Based on reference) */}
          <div className="absolute inset-0 bg-linear-to-b from-[#050b18]/80 via-transparent to-[#050b18]/90 w-full h-full" />
          <div className="absolute inset-0 bg-linear-to-r from-[#050b18]/90 via-[#050b18]/40 to-transparent w-full h-full" />
        </motion.div>
      </AnimatePresence>

      <Container className="relative z-10 h-full flex flex-col justify-center">
        {/* Static Content (Does not change with slider) */}
        <div className="max-w-4xl pt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-widest uppercase bg-gold/20 border border-gold/30 text-gold rounded-full"
          >
            Khans Builders & Developers
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="text-5xl md:text-7xl font-bold leading-tight mb-8"
          >
            Building a Higher Standard of <span className="text-gold">Living and Business</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="text-lg md:text-xl text-gray-300 max-w-2xl mb-12 leading-relaxed"
          >
            Premium Residential and Commercial Real Estate Developers Delivering Quality, Trust and Innovation
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            className="flex flex-wrap gap-5"
          >
            <Button size="lg" className="bg-gold text-white hover:bg-gold/90 h-14 px-8 text-base group border-none" asChild>
              <Link href="/projects">
                View Projects
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-white/50 text-white hover:bg-white/10 h-14 px-8 text-base" asChild>
              <Link href="/contact">
                Contact Us
              </Link>
            </Button>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 text-gold cursor-pointer"
        >
          <ChevronDown className="w-8 h-8" />
        </motion.div>
      </Container>
    </section>
  )
}
