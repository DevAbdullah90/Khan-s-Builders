'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Container from '../shared/Container'
import { Button } from '@/components/ui/button'
import { ChevronDown, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import NewsTicker from '../sections/NewsTicker'

const BANNERS = [
  {
    id: 1,
    image: '/realImages/b-8.jpeg',
    video: '/realImages/vid-6.mp4', 
    title: 'Building a Higher Standard of',
    highlighted: 'Living and Business',
    subtitle: 'Premium Residential and Commercial Real Estate Developers Delivering Quality, Trust and Innovation'
  },
  {
    id: 2,
    image: '/realImages/b-1.jpeg',
    video: '/realImages/vid-5.mp4', 
    title: 'Excellence in Every',
    highlighted: 'Structure and Design',
    subtitle: 'From concept to completion, we deliver unparalleled architectural mastery.'
  }
]

export default function Hero({ announcements = [] }: { announcements?: any[] }) {
  const [current, setCurrent] = useState(0)
  const [videoLoaded, setVideoLoaded] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % BANNERS.length)
      setVideoLoaded(false) // Reset for next slide
    }, 15000) 
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative h-dvh w-full overflow-hidden bg-black text-white">
      {/* Background Slider */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: 'easeInOut' }} 
          className="absolute inset-0 w-full h-full"
        >
          {/* Layer 1: Video Background */}
          {BANNERS[current].video && (
            <video
              src={BANNERS[current].video}
              autoPlay
              muted
              loop
              playsInline
              onLoadedData={() => setVideoLoaded(true)}
              className={cn(
                "absolute inset-0 w-full h-full object-cover transition-all duration-1000",
                "contrast-[1.15] brightness-[1.1] saturate-[1.1]", // Perceptual quality enhancement
                videoLoaded ? "opacity-100 scale-100" : "opacity-0 scale-110"
              )}
            />
          )}

          {/* Layer 2: Image Fallback */}
          <div
            className={cn(
              "absolute inset-0 bg-cover bg-center bg-no-repeat w-full h-full transition-opacity duration-1000",
              videoLoaded ? "opacity-0" : "opacity-100"
            )}
            style={{
              backgroundImage: `url(${BANNERS[current].image})`,
            }}
          />

          {/* Layer 3: Gold Glow Gradient */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(212,175,55,0.05),transparent_50%)]" />

          {/* Layer 4: Cinematic Vignette */}
          <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_60%,rgba(0,0,0,0.6)_100%)] pointer-events-none" />

          {/* Layer 5: Industrial Overlays - Slightly lightened for better clarity */}
          <div className="absolute inset-0 bg-linear-to-b from-[#050b18]/70 via-transparent to-[#050b18]/85 w-full h-full" />
          <div className="absolute inset-0 bg-linear-to-r from-[#050b18]/80 via-[#050b18]/20 to-transparent w-full h-full" />
        </motion.div>
      </AnimatePresence>

      <Container className="relative z-10 h-full flex flex-col justify-center">
        {/* Static Content (Does not change with slider) */}
        <div className="max-w-4xl pt-28 md:pt-32">
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
            className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-6 md:mb-8"
          >
            Building a Higher Standard of <span className="text-gold">Living and Business</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="text-base md:text-xl text-gray-300 max-w-2xl mb-10 md:mb-12 leading-relaxed"
          >
            Premium Residential and Commercial Real Estate Developers Delivering Quality, Trust and Innovation
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            className="flex flex-col sm:flex-row gap-4 md:gap-5"
          >
            <Button size="lg" className="bg-gold text-white hover:bg-gold/90 h-12 md:h-14 px-6 md:px-8 text-sm md:text-base group border-none w-full sm:w-auto" asChild>
              <Link href="/projects">
                View Projects
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-white/50 text-white hover:bg-white/10 h-12 md:h-14 px-6 md:px-8 text-sm md:text-base w-full sm:w-auto" asChild>
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
      
      {/* News Ticker Integration at bottom of Hero */}
      <div className="absolute bottom-0 left-0 w-full z-20">
        <NewsTicker announcements={announcements} />
      </div>
    </section>
  )
}
