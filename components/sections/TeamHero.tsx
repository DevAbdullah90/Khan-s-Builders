'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Container from '../shared/Container'

export default function TeamHero() {
  return (
    <section className="relative h-[80vh] min-h-[600px] w-full overflow-hidden bg-black text-white pt-48">
      {/* Background Image with Cinematic Overlays */}
      <div className="absolute inset-0 w-full h-full">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat w-full h-full opacity-30 grayscale saturate-0"
          style={{
            backgroundImage: `url('/images/p-3.jpg')`,
          }}
        />

        {/* Cinematic Overlays */}
        <div className="absolute inset-0 bg-linear-to-b from-[#050b18]/95 via-transparent to-[#050b18]/95 w-full h-full" />
        <div className="absolute inset-0 bg-linear-to-r from-[#050b18]/90 via-transparent to-transparent w-full h-full" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(212,175,55,0.08),transparent_50%)]" />
      </div>

      <Container className="relative z-10 h-full flex flex-col justify-center">
        <div className="max-w-5xl">

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-5xl md:text-7xl font-bold leading-tight mb-8"
          >
            Architects <br />
            of <span className="text-gold italic">Iconic</span> <br />
            Futures.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-lg md:text-xl text-gray-300 max-w-2xl mb-12 leading-relaxed"
          >
            Our team is a collective of visionary architects, master engineers, and strategic developers bonded by a single goal: to build legacies that transcend generations.
          </motion.p>
        </div>
      </Container>
      
      {/* Bottom Accent */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-linear-to-t from-[#050b18] to-transparent" />
    </section>
  )
}
