'use client'

import { motion } from 'framer-motion'
import Container from '../shared/Container'

export default function ContactHero() {
  return (
    <section className="relative h-[80vh] min-h-[600px] w-full overflow-hidden bg-black text-white pt-20">
      {/* Background Image with Cinematic Overlays */}
      <div className="absolute inset-0 w-full h-full">
        {/* Layer 2: Sharp Contained image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat w-full h-full"
          style={{
            backgroundImage: `url('/realImages/b-4.jpeg')`,
          }}
        />

        {/* Layer 3: Gold Glow Gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(212,175,55,0.1),transparent_50%)]" />

        {/* Layer 4: Cinematic Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_60%,rgba(0,0,0,0.5)_100%)] pointer-events-none" />

        {/* Layer 5: Navy Blue Industrial Overlays */}
        <div className="absolute inset-0 bg-linear-to-b from-[#050b18]/80 via-transparent to-[#050b18]/90 w-full h-full" />
        <div className="absolute inset-0 bg-linear-to-r from-[#050b18]/90 via-[#050b18]/40 to-transparent w-full h-full" />
      </div>

      <Container className="relative z-10 h-full flex flex-col justify-center">
        <div className="max-w-4xl">

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="text-5xl md:text-7xl font-bold leading-tight mb-8"
          >
            Let's Build a <br />
            <span className="text-gold italic">Legacy</span> <br />
            Together.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="text-lg md:text-xl text-gray-300 max-w-2xl mb-12 leading-relaxed"
          >
            Whether it's a dream home or a landmark commercial project, our team is ready to deliver excellence in Islamabad and beyond.
          </motion.p>
        </div>
      </Container>
    </section>
  )
}
