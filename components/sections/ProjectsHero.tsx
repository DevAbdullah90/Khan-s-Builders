'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Container from '../shared/Container'

export default function ProjectsHero() {
  return (
    <section className="relative h-[80vh] min-h-[600px] w-full overflow-hidden bg-black text-white pt-48">
      {/* Background Image with Cinematic Overlays */}
      <div className="absolute inset-0 w-full h-full">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat w-full h-full opacity-50 contrast-125 saturate-50"
          style={{
            backgroundImage: `url('/images/p-1.avif')`,
          }}
        />

        {/* Cinematic Overlays */}
        <div className="absolute inset-0 bg-linear-to-b from-[#050b18]/95 via-transparent to-[#050b18]/95 w-full h-full" />
        <div className="absolute inset-0 bg-linear-to-r from-[#050b18]/90 via-[#050b18]/30 to-transparent w-full h-full" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(212,175,55,0.1),transparent_50%)]" />
      </div>

      <Container className="relative z-10 h-full flex flex-col justify-center">
        <div className="max-w-4xl text-left">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="inline-block px-4 py-1.5 mb-6 text-[10px] font-black tracking-[0.3em] uppercase bg-gold text-black rounded-sm shadow-xl"
          >
            Our Portfolio
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-5xl md:text-7xl font-bold leading-tight mb-8"
          >
            Mastering The <br />
            <span className="text-gold italic">Art</span> of Spaces.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="text-lg md:text-xl text-gray-300 max-w-2xl mb-12 leading-relaxed"
          >
            Explore our curated selection of high-end residential, commercial, and industrial developments that define the skyline of tomorrow.
          </motion.p>
        </div>
      </Container>
      
      {/* Scroll Indicator Accent */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-gold/50 to-transparent" />
    </section>
  )
}
