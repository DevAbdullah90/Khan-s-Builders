'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Container from '../shared/Container'

const CULTURE_IMAGES = [
  '/realImages/b-1.jpeg',
  '/realImages/b-2.jpeg',
  '/realImages/b-3.jpeg',
  '/realImages/b-4.jpeg',
  '/realImages/b-5.jpeg',
  '/realImages/b-6.jpeg',
]

export default function LifeAtKhans() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <Container>
        <div className="mb-16">
          <h2 className="text-4xl font-black text-gray-900 tracking-tight uppercase">Life at <span className="text-gold italic">Khans.</span></h2>
          <p className="text-gray-500 font-medium mt-4">Where innovation meets culture, and every day is a milestone.</p>
        </div>
      </Container>

      {/* Marquee Wrapper */}
      <div className="relative flex overflow-hidden py-10">
        <motion.div 
          className="flex gap-8 px-4"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            duration: 50,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {[...CULTURE_IMAGES, ...CULTURE_IMAGES].map((img, idx) => (
            <div key={idx} className="relative w-[300px] md:w-[450px] aspect-3/4 rounded-[2rem] overflow-hidden shadow-2xl group shrink-0">
              <img src={img} alt={`Culture ${idx}`} className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gold/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
