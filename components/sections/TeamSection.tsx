'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Container from '../shared/Container'

const TEAM = [
  {
    name: "Abdullah Khan",
    role: "CEO & Founder",
    image: "/realImages/b-8.jpeg"
  },
  {
    name: "Zainab Malik",
    role: "Head Architect",
    image: "/realImages/b-1.jpeg"
  },
  {
    name: "Umer Sheikh",
    role: "Managing Director",
    image: "/realImages/b-2.jpeg"
  },
  {
    name: "Ayesha Ahmed",
    role: "Project Manager",
    image: "/realImages/b-3.jpeg"
  }
]

export default function TeamSection() {
  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-end gap-10 mb-20">
          <div className="max-w-2xl">
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 tracking-tighter mb-6">Expert Minds <br /><span className="text-gold">Behind Our Success.</span></h2>
            <p className="text-lg text-gray-500 font-medium">Meet the visionaries dedicated to engineering a higher standard of living across the capital.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {TEAM.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group"
            >
              <div className="relative aspect-3/4 rounded-[3rem] overflow-hidden shadow-uxl mb-8">
                <img src={member.image} alt={member.name} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[3rem]" />
              </div>
              <div>
                <h4 className="text-2xl font-black text-gray-900 tracking-tight group-hover:text-gold transition-colors">{member.name}</h4>
                <p className="text-xs font-black uppercase tracking-widest text-gray-400 mt-2">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
