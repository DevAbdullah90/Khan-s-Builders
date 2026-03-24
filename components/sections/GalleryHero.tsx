'use client'

import { motion } from 'framer-motion'
import Container from '../shared/Container'

export default function GalleryHero() {
  return (
    <section className="relative h-[80vh] min-h-[600px] w-full overflow-hidden bg-black text-white pt-48">
      {/* Background Image with Cinematic Overlays */}
      <div className="absolute inset-0 w-full h-full">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat w-full h-full opacity-40 mix-blend-luminosity"
          style={{
            backgroundImage: `url('/realImages/b-2.jpeg')`,
          }}
        />

        {/* Cinematic Overlays */}
        <div className="absolute inset-0 bg-linear-to-b from-[#050b18]/95 via-transparent to-[#050b18]/95 w-full h-full" />
        <div className="absolute inset-0 bg-linear-to-r from-[#050b18]/90 via-[#050b18]/40 to-transparent w-full h-full" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(212,175,55,0.05),transparent_70%)]" />
      </div>

      <Container className="relative z-10 h-full flex flex-col justify-center">
        <div className="max-w-4xl">

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-5xl md:text-7xl font-bold leading-tight mb-8"
          >
            Living <br />
            <span className="text-gold italic">Excellence</span> <br />
            Captured.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-lg md:text-xl text-gray-300 max-w-2xl mb-12 leading-relaxed"
          >
            Step into the world of Khans Builders through our curated lens. A chronicle of architectural brilliance, premium finishes, and the milestones that define our legacy.
          </motion.p>
        </div>
      </Container>
      
      {/* Visual Accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-linear-to-l from-gold/5 to-transparent pointer-events-none" />
    </section>
  )
}
